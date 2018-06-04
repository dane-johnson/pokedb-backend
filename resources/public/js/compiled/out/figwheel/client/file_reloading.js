// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30182__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30182__auto__){
return or__30182__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30182__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
var or__30182__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30182__auto____$1)){
return or__30182__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45400_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45400_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45401 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45402 = null;
var count__45403 = (0);
var i__45404 = (0);
while(true){
if((i__45404 < count__45403)){
var n = cljs.core._nth.call(null,chunk__45402,i__45404);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45405 = seq__45401;
var G__45406 = chunk__45402;
var G__45407 = count__45403;
var G__45408 = (i__45404 + (1));
seq__45401 = G__45405;
chunk__45402 = G__45406;
count__45403 = G__45407;
i__45404 = G__45408;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45401);
if(temp__5278__auto__){
var seq__45401__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45401__$1)){
var c__31113__auto__ = cljs.core.chunk_first.call(null,seq__45401__$1);
var G__45409 = cljs.core.chunk_rest.call(null,seq__45401__$1);
var G__45410 = c__31113__auto__;
var G__45411 = cljs.core.count.call(null,c__31113__auto__);
var G__45412 = (0);
seq__45401 = G__45409;
chunk__45402 = G__45410;
count__45403 = G__45411;
i__45404 = G__45412;
continue;
} else {
var n = cljs.core.first.call(null,seq__45401__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__45413 = cljs.core.next.call(null,seq__45401__$1);
var G__45414 = null;
var G__45415 = (0);
var G__45416 = (0);
seq__45401 = G__45413;
chunk__45402 = G__45414;
count__45403 = G__45415;
i__45404 = G__45416;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45426_45434 = cljs.core.seq.call(null,deps);
var chunk__45427_45435 = null;
var count__45428_45436 = (0);
var i__45429_45437 = (0);
while(true){
if((i__45429_45437 < count__45428_45436)){
var dep_45438 = cljs.core._nth.call(null,chunk__45427_45435,i__45429_45437);
topo_sort_helper_STAR_.call(null,dep_45438,(depth + (1)),state);

var G__45439 = seq__45426_45434;
var G__45440 = chunk__45427_45435;
var G__45441 = count__45428_45436;
var G__45442 = (i__45429_45437 + (1));
seq__45426_45434 = G__45439;
chunk__45427_45435 = G__45440;
count__45428_45436 = G__45441;
i__45429_45437 = G__45442;
continue;
} else {
var temp__5278__auto___45443 = cljs.core.seq.call(null,seq__45426_45434);
if(temp__5278__auto___45443){
var seq__45426_45444__$1 = temp__5278__auto___45443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45426_45444__$1)){
var c__31113__auto___45445 = cljs.core.chunk_first.call(null,seq__45426_45444__$1);
var G__45446 = cljs.core.chunk_rest.call(null,seq__45426_45444__$1);
var G__45447 = c__31113__auto___45445;
var G__45448 = cljs.core.count.call(null,c__31113__auto___45445);
var G__45449 = (0);
seq__45426_45434 = G__45446;
chunk__45427_45435 = G__45447;
count__45428_45436 = G__45448;
i__45429_45437 = G__45449;
continue;
} else {
var dep_45450 = cljs.core.first.call(null,seq__45426_45444__$1);
topo_sort_helper_STAR_.call(null,dep_45450,(depth + (1)),state);

var G__45451 = cljs.core.next.call(null,seq__45426_45444__$1);
var G__45452 = null;
var G__45453 = (0);
var G__45454 = (0);
seq__45426_45434 = G__45451;
chunk__45427_45435 = G__45452;
count__45428_45436 = G__45453;
i__45429_45437 = G__45454;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45430){
var vec__45431 = p__45430;
var seq__45432 = cljs.core.seq.call(null,vec__45431);
var first__45433 = cljs.core.first.call(null,seq__45432);
var seq__45432__$1 = cljs.core.next.call(null,seq__45432);
var x = first__45433;
var xs = seq__45432__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45431,seq__45432,first__45433,seq__45432__$1,x,xs,get_deps__$1){
return (function (p1__45417_SHARP_){
return clojure.set.difference.call(null,p1__45417_SHARP_,x);
});})(vec__45431,seq__45432,first__45433,seq__45432__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45455 = cljs.core.seq.call(null,provides);
var chunk__45456 = null;
var count__45457 = (0);
var i__45458 = (0);
while(true){
if((i__45458 < count__45457)){
var prov = cljs.core._nth.call(null,chunk__45456,i__45458);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45459_45467 = cljs.core.seq.call(null,requires);
var chunk__45460_45468 = null;
var count__45461_45469 = (0);
var i__45462_45470 = (0);
while(true){
if((i__45462_45470 < count__45461_45469)){
var req_45471 = cljs.core._nth.call(null,chunk__45460_45468,i__45462_45470);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45471,prov);

var G__45472 = seq__45459_45467;
var G__45473 = chunk__45460_45468;
var G__45474 = count__45461_45469;
var G__45475 = (i__45462_45470 + (1));
seq__45459_45467 = G__45472;
chunk__45460_45468 = G__45473;
count__45461_45469 = G__45474;
i__45462_45470 = G__45475;
continue;
} else {
var temp__5278__auto___45476 = cljs.core.seq.call(null,seq__45459_45467);
if(temp__5278__auto___45476){
var seq__45459_45477__$1 = temp__5278__auto___45476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45459_45477__$1)){
var c__31113__auto___45478 = cljs.core.chunk_first.call(null,seq__45459_45477__$1);
var G__45479 = cljs.core.chunk_rest.call(null,seq__45459_45477__$1);
var G__45480 = c__31113__auto___45478;
var G__45481 = cljs.core.count.call(null,c__31113__auto___45478);
var G__45482 = (0);
seq__45459_45467 = G__45479;
chunk__45460_45468 = G__45480;
count__45461_45469 = G__45481;
i__45462_45470 = G__45482;
continue;
} else {
var req_45483 = cljs.core.first.call(null,seq__45459_45477__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45483,prov);

var G__45484 = cljs.core.next.call(null,seq__45459_45477__$1);
var G__45485 = null;
var G__45486 = (0);
var G__45487 = (0);
seq__45459_45467 = G__45484;
chunk__45460_45468 = G__45485;
count__45461_45469 = G__45486;
i__45462_45470 = G__45487;
continue;
}
} else {
}
}
break;
}

var G__45488 = seq__45455;
var G__45489 = chunk__45456;
var G__45490 = count__45457;
var G__45491 = (i__45458 + (1));
seq__45455 = G__45488;
chunk__45456 = G__45489;
count__45457 = G__45490;
i__45458 = G__45491;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45455);
if(temp__5278__auto__){
var seq__45455__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45455__$1)){
var c__31113__auto__ = cljs.core.chunk_first.call(null,seq__45455__$1);
var G__45492 = cljs.core.chunk_rest.call(null,seq__45455__$1);
var G__45493 = c__31113__auto__;
var G__45494 = cljs.core.count.call(null,c__31113__auto__);
var G__45495 = (0);
seq__45455 = G__45492;
chunk__45456 = G__45493;
count__45457 = G__45494;
i__45458 = G__45495;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45455__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45463_45496 = cljs.core.seq.call(null,requires);
var chunk__45464_45497 = null;
var count__45465_45498 = (0);
var i__45466_45499 = (0);
while(true){
if((i__45466_45499 < count__45465_45498)){
var req_45500 = cljs.core._nth.call(null,chunk__45464_45497,i__45466_45499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45500,prov);

var G__45501 = seq__45463_45496;
var G__45502 = chunk__45464_45497;
var G__45503 = count__45465_45498;
var G__45504 = (i__45466_45499 + (1));
seq__45463_45496 = G__45501;
chunk__45464_45497 = G__45502;
count__45465_45498 = G__45503;
i__45466_45499 = G__45504;
continue;
} else {
var temp__5278__auto___45505__$1 = cljs.core.seq.call(null,seq__45463_45496);
if(temp__5278__auto___45505__$1){
var seq__45463_45506__$1 = temp__5278__auto___45505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45463_45506__$1)){
var c__31113__auto___45507 = cljs.core.chunk_first.call(null,seq__45463_45506__$1);
var G__45508 = cljs.core.chunk_rest.call(null,seq__45463_45506__$1);
var G__45509 = c__31113__auto___45507;
var G__45510 = cljs.core.count.call(null,c__31113__auto___45507);
var G__45511 = (0);
seq__45463_45496 = G__45508;
chunk__45464_45497 = G__45509;
count__45465_45498 = G__45510;
i__45466_45499 = G__45511;
continue;
} else {
var req_45512 = cljs.core.first.call(null,seq__45463_45506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45512,prov);

var G__45513 = cljs.core.next.call(null,seq__45463_45506__$1);
var G__45514 = null;
var G__45515 = (0);
var G__45516 = (0);
seq__45463_45496 = G__45513;
chunk__45464_45497 = G__45514;
count__45465_45498 = G__45515;
i__45466_45499 = G__45516;
continue;
}
} else {
}
}
break;
}

var G__45517 = cljs.core.next.call(null,seq__45455__$1);
var G__45518 = null;
var G__45519 = (0);
var G__45520 = (0);
seq__45455 = G__45517;
chunk__45456 = G__45518;
count__45457 = G__45519;
i__45458 = G__45520;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45521_45525 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45522_45526 = null;
var count__45523_45527 = (0);
var i__45524_45528 = (0);
while(true){
if((i__45524_45528 < count__45523_45527)){
var ns_45529 = cljs.core._nth.call(null,chunk__45522_45526,i__45524_45528);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45529);

var G__45530 = seq__45521_45525;
var G__45531 = chunk__45522_45526;
var G__45532 = count__45523_45527;
var G__45533 = (i__45524_45528 + (1));
seq__45521_45525 = G__45530;
chunk__45522_45526 = G__45531;
count__45523_45527 = G__45532;
i__45524_45528 = G__45533;
continue;
} else {
var temp__5278__auto___45534 = cljs.core.seq.call(null,seq__45521_45525);
if(temp__5278__auto___45534){
var seq__45521_45535__$1 = temp__5278__auto___45534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45521_45535__$1)){
var c__31113__auto___45536 = cljs.core.chunk_first.call(null,seq__45521_45535__$1);
var G__45537 = cljs.core.chunk_rest.call(null,seq__45521_45535__$1);
var G__45538 = c__31113__auto___45536;
var G__45539 = cljs.core.count.call(null,c__31113__auto___45536);
var G__45540 = (0);
seq__45521_45525 = G__45537;
chunk__45522_45526 = G__45538;
count__45523_45527 = G__45539;
i__45524_45528 = G__45540;
continue;
} else {
var ns_45541 = cljs.core.first.call(null,seq__45521_45535__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45541);

var G__45542 = cljs.core.next.call(null,seq__45521_45535__$1);
var G__45543 = null;
var G__45544 = (0);
var G__45545 = (0);
seq__45521_45525 = G__45542;
chunk__45522_45526 = G__45543;
count__45523_45527 = G__45544;
i__45524_45528 = G__45545;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30182__auto__ = goog.require__;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45546__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45547__i = 0, G__45547__a = new Array(arguments.length -  0);
while (G__45547__i < G__45547__a.length) {G__45547__a[G__45547__i] = arguments[G__45547__i + 0]; ++G__45547__i;}
  args = new cljs.core.IndexedSeq(G__45547__a,0,null);
} 
return G__45546__delegate.call(this,args);};
G__45546.cljs$lang$maxFixedArity = 0;
G__45546.cljs$lang$applyTo = (function (arglist__45548){
var args = cljs.core.seq(arglist__45548);
return G__45546__delegate(args);
});
G__45546.cljs$core$IFn$_invoke$arity$variadic = G__45546__delegate;
return G__45546;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__45549_SHARP_,p2__45550_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45549_SHARP_)].join('')),p2__45550_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__45551_SHARP_,p2__45552_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45551_SHARP_)].join(''),p2__45552_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45553 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45553.addCallback(((function (G__45553){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45553))
);

G__45553.addErrback(((function (G__45553){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45553))
);

return G__45553;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45554 = cljs.core._EQ_;
var expr__45555 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45554.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45555))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__45554,expr__45555){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__45554,expr__45555))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__45554,expr__45555){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45557){if((e45557 instanceof Error)){
var e = e45557;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45557;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__45554,expr__45555))
} else {
if(cljs.core.truth_(pred__45554.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45555))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__45554.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__45555))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__45554.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45555))){
return ((function (pred__45554,expr__45555){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45558){if((e45558 instanceof Error)){
var e = e45558;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45558;

}
}})());
});
;})(pred__45554,expr__45555))
} else {
return ((function (pred__45554,expr__45555){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45554,expr__45555))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45559,callback){
var map__45560 = p__45559;
var map__45560__$1 = ((((!((map__45560 == null)))?((((map__45560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45560):map__45560);
var file_msg = map__45560__$1;
var request_url = cljs.core.get.call(null,map__45560__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__45560,map__45560__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45560,map__45560__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__){
return (function (state_45584){
var state_val_45585 = (state_45584[(1)]);
if((state_val_45585 === (7))){
var inst_45580 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
var statearr_45586_45603 = state_45584__$1;
(statearr_45586_45603[(2)] = inst_45580);

(statearr_45586_45603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (1))){
var state_45584__$1 = state_45584;
var statearr_45587_45604 = state_45584__$1;
(statearr_45587_45604[(2)] = null);

(statearr_45587_45604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (4))){
var inst_45564 = (state_45584[(7)]);
var inst_45564__$1 = (state_45584[(2)]);
var state_45584__$1 = (function (){var statearr_45588 = state_45584;
(statearr_45588[(7)] = inst_45564__$1);

return statearr_45588;
})();
if(cljs.core.truth_(inst_45564__$1)){
var statearr_45589_45605 = state_45584__$1;
(statearr_45589_45605[(1)] = (5));

} else {
var statearr_45590_45606 = state_45584__$1;
(statearr_45590_45606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (6))){
var state_45584__$1 = state_45584;
var statearr_45591_45607 = state_45584__$1;
(statearr_45591_45607[(2)] = null);

(statearr_45591_45607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (3))){
var inst_45582 = (state_45584[(2)]);
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45584__$1,inst_45582);
} else {
if((state_val_45585 === (2))){
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45584__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45585 === (11))){
var inst_45576 = (state_45584[(2)]);
var state_45584__$1 = (function (){var statearr_45592 = state_45584;
(statearr_45592[(8)] = inst_45576);

return statearr_45592;
})();
var statearr_45593_45608 = state_45584__$1;
(statearr_45593_45608[(2)] = null);

(statearr_45593_45608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (9))){
var inst_45570 = (state_45584[(9)]);
var inst_45568 = (state_45584[(10)]);
var inst_45572 = inst_45570.call(null,inst_45568);
var state_45584__$1 = state_45584;
var statearr_45594_45609 = state_45584__$1;
(statearr_45594_45609[(2)] = inst_45572);

(statearr_45594_45609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (5))){
var inst_45564 = (state_45584[(7)]);
var inst_45566 = figwheel.client.file_reloading.blocking_load.call(null,inst_45564);
var state_45584__$1 = state_45584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45584__$1,(8),inst_45566);
} else {
if((state_val_45585 === (10))){
var inst_45568 = (state_45584[(10)]);
var inst_45574 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45568);
var state_45584__$1 = state_45584;
var statearr_45595_45610 = state_45584__$1;
(statearr_45595_45610[(2)] = inst_45574);

(statearr_45595_45610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45585 === (8))){
var inst_45570 = (state_45584[(9)]);
var inst_45564 = (state_45584[(7)]);
var inst_45568 = (state_45584[(2)]);
var inst_45569 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45570__$1 = cljs.core.get.call(null,inst_45569,inst_45564);
var state_45584__$1 = (function (){var statearr_45596 = state_45584;
(statearr_45596[(9)] = inst_45570__$1);

(statearr_45596[(10)] = inst_45568);

return statearr_45596;
})();
if(cljs.core.truth_(inst_45570__$1)){
var statearr_45597_45611 = state_45584__$1;
(statearr_45597_45611[(1)] = (9));

} else {
var statearr_45598_45612 = state_45584__$1;
(statearr_45598_45612[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33146__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33124__auto__ = null;
var figwheel$client$file_reloading$state_machine__33124__auto____0 = (function (){
var statearr_45599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45599[(0)] = figwheel$client$file_reloading$state_machine__33124__auto__);

(statearr_45599[(1)] = (1));

return statearr_45599;
});
var figwheel$client$file_reloading$state_machine__33124__auto____1 = (function (state_45584){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_45584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e45600){if((e45600 instanceof Object)){
var ex__33127__auto__ = e45600;
var statearr_45601_45613 = state_45584;
(statearr_45601_45613[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45614 = state_45584;
state_45584 = G__45614;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33124__auto__ = function(state_45584){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33124__auto____1.call(this,state_45584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33124__auto____0;
figwheel$client$file_reloading$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33124__auto____1;
return figwheel$client$file_reloading$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__))
})();
var state__33148__auto__ = (function (){var statearr_45602 = f__33147__auto__.call(null);
(statearr_45602[(6)] = c__33146__auto__);

return statearr_45602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__))
);

return c__33146__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45615,callback){
var map__45616 = p__45615;
var map__45616__$1 = ((((!((map__45616 == null)))?((((map__45616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45616):map__45616);
var file_msg = map__45616__$1;
var namespace = cljs.core.get.call(null,map__45616__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45616,map__45616__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45616,map__45616__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45618){
var map__45619 = p__45618;
var map__45619__$1 = ((((!((map__45619 == null)))?((((map__45619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45619):map__45619);
var file_msg = map__45619__$1;
var namespace = cljs.core.get.call(null,map__45619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45621){
var map__45622 = p__45621;
var map__45622__$1 = ((((!((map__45622 == null)))?((((map__45622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45622):map__45622);
var file_msg = map__45622__$1;
var namespace = cljs.core.get.call(null,map__45622__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30170__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30170__auto__){
var or__30182__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
var or__30182__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30182__auto____$1)){
return or__30182__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30170__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45624,callback){
var map__45625 = p__45624;
var map__45625__$1 = ((((!((map__45625 == null)))?((((map__45625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45625):map__45625);
var file_msg = map__45625__$1;
var request_url = cljs.core.get.call(null,map__45625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45625__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33146__auto___45675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___45675,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___45675,out){
return (function (state_45660){
var state_val_45661 = (state_45660[(1)]);
if((state_val_45661 === (1))){
var inst_45634 = cljs.core.seq.call(null,files);
var inst_45635 = cljs.core.first.call(null,inst_45634);
var inst_45636 = cljs.core.next.call(null,inst_45634);
var inst_45637 = files;
var state_45660__$1 = (function (){var statearr_45662 = state_45660;
(statearr_45662[(7)] = inst_45637);

(statearr_45662[(8)] = inst_45636);

(statearr_45662[(9)] = inst_45635);

return statearr_45662;
})();
var statearr_45663_45676 = state_45660__$1;
(statearr_45663_45676[(2)] = null);

(statearr_45663_45676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45661 === (2))){
var inst_45637 = (state_45660[(7)]);
var inst_45643 = (state_45660[(10)]);
var inst_45642 = cljs.core.seq.call(null,inst_45637);
var inst_45643__$1 = cljs.core.first.call(null,inst_45642);
var inst_45644 = cljs.core.next.call(null,inst_45642);
var inst_45645 = (inst_45643__$1 == null);
var inst_45646 = cljs.core.not.call(null,inst_45645);
var state_45660__$1 = (function (){var statearr_45664 = state_45660;
(statearr_45664[(10)] = inst_45643__$1);

(statearr_45664[(11)] = inst_45644);

return statearr_45664;
})();
if(inst_45646){
var statearr_45665_45677 = state_45660__$1;
(statearr_45665_45677[(1)] = (4));

} else {
var statearr_45666_45678 = state_45660__$1;
(statearr_45666_45678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45661 === (3))){
var inst_45658 = (state_45660[(2)]);
var state_45660__$1 = state_45660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45660__$1,inst_45658);
} else {
if((state_val_45661 === (4))){
var inst_45643 = (state_45660[(10)]);
var inst_45648 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45643);
var state_45660__$1 = state_45660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45660__$1,(7),inst_45648);
} else {
if((state_val_45661 === (5))){
var inst_45654 = cljs.core.async.close_BANG_.call(null,out);
var state_45660__$1 = state_45660;
var statearr_45667_45679 = state_45660__$1;
(statearr_45667_45679[(2)] = inst_45654);

(statearr_45667_45679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45661 === (6))){
var inst_45656 = (state_45660[(2)]);
var state_45660__$1 = state_45660;
var statearr_45668_45680 = state_45660__$1;
(statearr_45668_45680[(2)] = inst_45656);

(statearr_45668_45680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45661 === (7))){
var inst_45644 = (state_45660[(11)]);
var inst_45650 = (state_45660[(2)]);
var inst_45651 = cljs.core.async.put_BANG_.call(null,out,inst_45650);
var inst_45637 = inst_45644;
var state_45660__$1 = (function (){var statearr_45669 = state_45660;
(statearr_45669[(7)] = inst_45637);

(statearr_45669[(12)] = inst_45651);

return statearr_45669;
})();
var statearr_45670_45681 = state_45660__$1;
(statearr_45670_45681[(2)] = null);

(statearr_45670_45681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33146__auto___45675,out))
;
return ((function (switch__33123__auto__,c__33146__auto___45675,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____0 = (function (){
var statearr_45671 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45671[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__);

(statearr_45671[(1)] = (1));

return statearr_45671;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____1 = (function (state_45660){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_45660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e45672){if((e45672 instanceof Object)){
var ex__33127__auto__ = e45672;
var statearr_45673_45682 = state_45660;
(statearr_45673_45682[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45683 = state_45660;
state_45660 = G__45683;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__ = function(state_45660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____1.call(this,state_45660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___45675,out))
})();
var state__33148__auto__ = (function (){var statearr_45674 = f__33147__auto__.call(null);
(statearr_45674[(6)] = c__33146__auto___45675);

return statearr_45674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___45675,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45684,opts){
var map__45685 = p__45684;
var map__45685__$1 = ((((!((map__45685 == null)))?((((map__45685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45685):map__45685);
var eval_body = cljs.core.get.call(null,map__45685__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30170__auto__ = eval_body;
if(cljs.core.truth_(and__30170__auto__)){
return typeof eval_body === 'string';
} else {
return and__30170__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45687){var e = e45687;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45688_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45688_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45689){
var vec__45690 = p__45689;
var k = cljs.core.nth.call(null,vec__45690,(0),null);
var v = cljs.core.nth.call(null,vec__45690,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45693){
var vec__45694 = p__45693;
var k = cljs.core.nth.call(null,vec__45694,(0),null);
var v = cljs.core.nth.call(null,vec__45694,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45700,p__45701){
var map__45702 = p__45700;
var map__45702__$1 = ((((!((map__45702 == null)))?((((map__45702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45702):map__45702);
var opts = map__45702__$1;
var before_jsload = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45702__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45703 = p__45701;
var map__45703__$1 = ((((!((map__45703 == null)))?((((map__45703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45703):map__45703);
var msg = map__45703__$1;
var files = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45703__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45857){
var state_val_45858 = (state_45857[(1)]);
if((state_val_45858 === (7))){
var inst_45719 = (state_45857[(7)]);
var inst_45720 = (state_45857[(8)]);
var inst_45718 = (state_45857[(9)]);
var inst_45717 = (state_45857[(10)]);
var inst_45725 = cljs.core._nth.call(null,inst_45718,inst_45720);
var inst_45726 = figwheel.client.file_reloading.eval_body.call(null,inst_45725,opts);
var inst_45727 = (inst_45720 + (1));
var tmp45859 = inst_45719;
var tmp45860 = inst_45718;
var tmp45861 = inst_45717;
var inst_45717__$1 = tmp45861;
var inst_45718__$1 = tmp45860;
var inst_45719__$1 = tmp45859;
var inst_45720__$1 = inst_45727;
var state_45857__$1 = (function (){var statearr_45862 = state_45857;
(statearr_45862[(7)] = inst_45719__$1);

(statearr_45862[(8)] = inst_45720__$1);

(statearr_45862[(11)] = inst_45726);

(statearr_45862[(9)] = inst_45718__$1);

(statearr_45862[(10)] = inst_45717__$1);

return statearr_45862;
})();
var statearr_45863_45946 = state_45857__$1;
(statearr_45863_45946[(2)] = null);

(statearr_45863_45946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (20))){
var inst_45760 = (state_45857[(12)]);
var inst_45768 = figwheel.client.file_reloading.sort_files.call(null,inst_45760);
var state_45857__$1 = state_45857;
var statearr_45864_45947 = state_45857__$1;
(statearr_45864_45947[(2)] = inst_45768);

(statearr_45864_45947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (27))){
var state_45857__$1 = state_45857;
var statearr_45865_45948 = state_45857__$1;
(statearr_45865_45948[(2)] = null);

(statearr_45865_45948[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (1))){
var inst_45709 = (state_45857[(13)]);
var inst_45706 = before_jsload.call(null,files);
var inst_45707 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45708 = (function (){return ((function (inst_45709,inst_45706,inst_45707,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45697_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45697_SHARP_);
});
;})(inst_45709,inst_45706,inst_45707,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45709__$1 = cljs.core.filter.call(null,inst_45708,files);
var inst_45710 = cljs.core.not_empty.call(null,inst_45709__$1);
var state_45857__$1 = (function (){var statearr_45866 = state_45857;
(statearr_45866[(13)] = inst_45709__$1);

(statearr_45866[(14)] = inst_45707);

(statearr_45866[(15)] = inst_45706);

return statearr_45866;
})();
if(cljs.core.truth_(inst_45710)){
var statearr_45867_45949 = state_45857__$1;
(statearr_45867_45949[(1)] = (2));

} else {
var statearr_45868_45950 = state_45857__$1;
(statearr_45868_45950[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (24))){
var state_45857__$1 = state_45857;
var statearr_45869_45951 = state_45857__$1;
(statearr_45869_45951[(2)] = null);

(statearr_45869_45951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (39))){
var inst_45810 = (state_45857[(16)]);
var state_45857__$1 = state_45857;
var statearr_45870_45952 = state_45857__$1;
(statearr_45870_45952[(2)] = inst_45810);

(statearr_45870_45952[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (46))){
var inst_45852 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45871_45953 = state_45857__$1;
(statearr_45871_45953[(2)] = inst_45852);

(statearr_45871_45953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (4))){
var inst_45754 = (state_45857[(2)]);
var inst_45755 = cljs.core.List.EMPTY;
var inst_45756 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45755);
var inst_45757 = (function (){return ((function (inst_45754,inst_45755,inst_45756,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45698_SHARP_){
var and__30170__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45698_SHARP_);
if(cljs.core.truth_(and__30170__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45698_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45698_SHARP_)));
} else {
return and__30170__auto__;
}
});
;})(inst_45754,inst_45755,inst_45756,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45758 = cljs.core.filter.call(null,inst_45757,files);
var inst_45759 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45760 = cljs.core.concat.call(null,inst_45758,inst_45759);
var state_45857__$1 = (function (){var statearr_45872 = state_45857;
(statearr_45872[(17)] = inst_45754);

(statearr_45872[(12)] = inst_45760);

(statearr_45872[(18)] = inst_45756);

return statearr_45872;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45873_45954 = state_45857__$1;
(statearr_45873_45954[(1)] = (16));

} else {
var statearr_45874_45955 = state_45857__$1;
(statearr_45874_45955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (15))){
var inst_45744 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45875_45956 = state_45857__$1;
(statearr_45875_45956[(2)] = inst_45744);

(statearr_45875_45956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (21))){
var inst_45770 = (state_45857[(19)]);
var inst_45770__$1 = (state_45857[(2)]);
var inst_45771 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45770__$1);
var state_45857__$1 = (function (){var statearr_45876 = state_45857;
(statearr_45876[(19)] = inst_45770__$1);

return statearr_45876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45857__$1,(22),inst_45771);
} else {
if((state_val_45858 === (31))){
var inst_45855 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45857__$1,inst_45855);
} else {
if((state_val_45858 === (32))){
var inst_45810 = (state_45857[(16)]);
var inst_45815 = inst_45810.cljs$lang$protocol_mask$partition0$;
var inst_45816 = (inst_45815 & (64));
var inst_45817 = inst_45810.cljs$core$ISeq$;
var inst_45818 = (cljs.core.PROTOCOL_SENTINEL === inst_45817);
var inst_45819 = (inst_45816) || (inst_45818);
var state_45857__$1 = state_45857;
if(cljs.core.truth_(inst_45819)){
var statearr_45877_45957 = state_45857__$1;
(statearr_45877_45957[(1)] = (35));

} else {
var statearr_45878_45958 = state_45857__$1;
(statearr_45878_45958[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (40))){
var inst_45832 = (state_45857[(20)]);
var inst_45831 = (state_45857[(2)]);
var inst_45832__$1 = cljs.core.get.call(null,inst_45831,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45833 = cljs.core.get.call(null,inst_45831,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45834 = cljs.core.not_empty.call(null,inst_45832__$1);
var state_45857__$1 = (function (){var statearr_45879 = state_45857;
(statearr_45879[(21)] = inst_45833);

(statearr_45879[(20)] = inst_45832__$1);

return statearr_45879;
})();
if(cljs.core.truth_(inst_45834)){
var statearr_45880_45959 = state_45857__$1;
(statearr_45880_45959[(1)] = (41));

} else {
var statearr_45881_45960 = state_45857__$1;
(statearr_45881_45960[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (33))){
var state_45857__$1 = state_45857;
var statearr_45882_45961 = state_45857__$1;
(statearr_45882_45961[(2)] = false);

(statearr_45882_45961[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (13))){
var inst_45730 = (state_45857[(22)]);
var inst_45734 = cljs.core.chunk_first.call(null,inst_45730);
var inst_45735 = cljs.core.chunk_rest.call(null,inst_45730);
var inst_45736 = cljs.core.count.call(null,inst_45734);
var inst_45717 = inst_45735;
var inst_45718 = inst_45734;
var inst_45719 = inst_45736;
var inst_45720 = (0);
var state_45857__$1 = (function (){var statearr_45883 = state_45857;
(statearr_45883[(7)] = inst_45719);

(statearr_45883[(8)] = inst_45720);

(statearr_45883[(9)] = inst_45718);

(statearr_45883[(10)] = inst_45717);

return statearr_45883;
})();
var statearr_45884_45962 = state_45857__$1;
(statearr_45884_45962[(2)] = null);

(statearr_45884_45962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (22))){
var inst_45773 = (state_45857[(23)]);
var inst_45774 = (state_45857[(24)]);
var inst_45778 = (state_45857[(25)]);
var inst_45770 = (state_45857[(19)]);
var inst_45773__$1 = (state_45857[(2)]);
var inst_45774__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45773__$1);
var inst_45775 = (function (){var all_files = inst_45770;
var res_SINGLEQUOTE_ = inst_45773__$1;
var res = inst_45774__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45773,inst_45774,inst_45778,inst_45770,inst_45773__$1,inst_45774__$1,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45699_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45699_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45773,inst_45774,inst_45778,inst_45770,inst_45773__$1,inst_45774__$1,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45776 = cljs.core.filter.call(null,inst_45775,inst_45773__$1);
var inst_45777 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45778__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45777);
var inst_45779 = cljs.core.not_empty.call(null,inst_45778__$1);
var state_45857__$1 = (function (){var statearr_45885 = state_45857;
(statearr_45885[(26)] = inst_45776);

(statearr_45885[(23)] = inst_45773__$1);

(statearr_45885[(24)] = inst_45774__$1);

(statearr_45885[(25)] = inst_45778__$1);

return statearr_45885;
})();
if(cljs.core.truth_(inst_45779)){
var statearr_45886_45963 = state_45857__$1;
(statearr_45886_45963[(1)] = (23));

} else {
var statearr_45887_45964 = state_45857__$1;
(statearr_45887_45964[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (36))){
var state_45857__$1 = state_45857;
var statearr_45888_45965 = state_45857__$1;
(statearr_45888_45965[(2)] = false);

(statearr_45888_45965[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (41))){
var inst_45832 = (state_45857[(20)]);
var inst_45836 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45837 = cljs.core.map.call(null,inst_45836,inst_45832);
var inst_45838 = cljs.core.pr_str.call(null,inst_45837);
var inst_45839 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45838)].join('');
var inst_45840 = figwheel.client.utils.log.call(null,inst_45839);
var state_45857__$1 = state_45857;
var statearr_45889_45966 = state_45857__$1;
(statearr_45889_45966[(2)] = inst_45840);

(statearr_45889_45966[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (43))){
var inst_45833 = (state_45857[(21)]);
var inst_45843 = (state_45857[(2)]);
var inst_45844 = cljs.core.not_empty.call(null,inst_45833);
var state_45857__$1 = (function (){var statearr_45890 = state_45857;
(statearr_45890[(27)] = inst_45843);

return statearr_45890;
})();
if(cljs.core.truth_(inst_45844)){
var statearr_45891_45967 = state_45857__$1;
(statearr_45891_45967[(1)] = (44));

} else {
var statearr_45892_45968 = state_45857__$1;
(statearr_45892_45968[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (29))){
var inst_45810 = (state_45857[(16)]);
var inst_45776 = (state_45857[(26)]);
var inst_45773 = (state_45857[(23)]);
var inst_45774 = (state_45857[(24)]);
var inst_45778 = (state_45857[(25)]);
var inst_45770 = (state_45857[(19)]);
var inst_45806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45809 = (function (){var all_files = inst_45770;
var res_SINGLEQUOTE_ = inst_45773;
var res = inst_45774;
var files_not_loaded = inst_45776;
var dependencies_that_loaded = inst_45778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45810,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45806,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45808){
var map__45893 = p__45808;
var map__45893__$1 = ((((!((map__45893 == null)))?((((map__45893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45893):map__45893);
var namespace = cljs.core.get.call(null,map__45893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45810,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45806,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45810__$1 = cljs.core.group_by.call(null,inst_45809,inst_45776);
var inst_45812 = (inst_45810__$1 == null);
var inst_45813 = cljs.core.not.call(null,inst_45812);
var state_45857__$1 = (function (){var statearr_45895 = state_45857;
(statearr_45895[(16)] = inst_45810__$1);

(statearr_45895[(28)] = inst_45806);

return statearr_45895;
})();
if(inst_45813){
var statearr_45896_45969 = state_45857__$1;
(statearr_45896_45969[(1)] = (32));

} else {
var statearr_45897_45970 = state_45857__$1;
(statearr_45897_45970[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (44))){
var inst_45833 = (state_45857[(21)]);
var inst_45846 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45833);
var inst_45847 = cljs.core.pr_str.call(null,inst_45846);
var inst_45848 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45847)].join('');
var inst_45849 = figwheel.client.utils.log.call(null,inst_45848);
var state_45857__$1 = state_45857;
var statearr_45898_45971 = state_45857__$1;
(statearr_45898_45971[(2)] = inst_45849);

(statearr_45898_45971[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (6))){
var inst_45751 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45899_45972 = state_45857__$1;
(statearr_45899_45972[(2)] = inst_45751);

(statearr_45899_45972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (28))){
var inst_45776 = (state_45857[(26)]);
var inst_45803 = (state_45857[(2)]);
var inst_45804 = cljs.core.not_empty.call(null,inst_45776);
var state_45857__$1 = (function (){var statearr_45900 = state_45857;
(statearr_45900[(29)] = inst_45803);

return statearr_45900;
})();
if(cljs.core.truth_(inst_45804)){
var statearr_45901_45973 = state_45857__$1;
(statearr_45901_45973[(1)] = (29));

} else {
var statearr_45902_45974 = state_45857__$1;
(statearr_45902_45974[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (25))){
var inst_45774 = (state_45857[(24)]);
var inst_45790 = (state_45857[(2)]);
var inst_45791 = cljs.core.not_empty.call(null,inst_45774);
var state_45857__$1 = (function (){var statearr_45903 = state_45857;
(statearr_45903[(30)] = inst_45790);

return statearr_45903;
})();
if(cljs.core.truth_(inst_45791)){
var statearr_45904_45975 = state_45857__$1;
(statearr_45904_45975[(1)] = (26));

} else {
var statearr_45905_45976 = state_45857__$1;
(statearr_45905_45976[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (34))){
var inst_45826 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
if(cljs.core.truth_(inst_45826)){
var statearr_45906_45977 = state_45857__$1;
(statearr_45906_45977[(1)] = (38));

} else {
var statearr_45907_45978 = state_45857__$1;
(statearr_45907_45978[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (17))){
var state_45857__$1 = state_45857;
var statearr_45908_45979 = state_45857__$1;
(statearr_45908_45979[(2)] = recompile_dependents);

(statearr_45908_45979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (3))){
var state_45857__$1 = state_45857;
var statearr_45909_45980 = state_45857__$1;
(statearr_45909_45980[(2)] = null);

(statearr_45909_45980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (12))){
var inst_45747 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45910_45981 = state_45857__$1;
(statearr_45910_45981[(2)] = inst_45747);

(statearr_45910_45981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (2))){
var inst_45709 = (state_45857[(13)]);
var inst_45716 = cljs.core.seq.call(null,inst_45709);
var inst_45717 = inst_45716;
var inst_45718 = null;
var inst_45719 = (0);
var inst_45720 = (0);
var state_45857__$1 = (function (){var statearr_45911 = state_45857;
(statearr_45911[(7)] = inst_45719);

(statearr_45911[(8)] = inst_45720);

(statearr_45911[(9)] = inst_45718);

(statearr_45911[(10)] = inst_45717);

return statearr_45911;
})();
var statearr_45912_45982 = state_45857__$1;
(statearr_45912_45982[(2)] = null);

(statearr_45912_45982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (23))){
var inst_45776 = (state_45857[(26)]);
var inst_45773 = (state_45857[(23)]);
var inst_45774 = (state_45857[(24)]);
var inst_45778 = (state_45857[(25)]);
var inst_45770 = (state_45857[(19)]);
var inst_45781 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45783 = (function (){var all_files = inst_45770;
var res_SINGLEQUOTE_ = inst_45773;
var res = inst_45774;
var files_not_loaded = inst_45776;
var dependencies_that_loaded = inst_45778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45781,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45782){
var map__45913 = p__45782;
var map__45913__$1 = ((((!((map__45913 == null)))?((((map__45913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45913):map__45913);
var request_url = cljs.core.get.call(null,map__45913__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45781,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45784 = cljs.core.reverse.call(null,inst_45778);
var inst_45785 = cljs.core.map.call(null,inst_45783,inst_45784);
var inst_45786 = cljs.core.pr_str.call(null,inst_45785);
var inst_45787 = figwheel.client.utils.log.call(null,inst_45786);
var state_45857__$1 = (function (){var statearr_45915 = state_45857;
(statearr_45915[(31)] = inst_45781);

return statearr_45915;
})();
var statearr_45916_45983 = state_45857__$1;
(statearr_45916_45983[(2)] = inst_45787);

(statearr_45916_45983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (35))){
var state_45857__$1 = state_45857;
var statearr_45917_45984 = state_45857__$1;
(statearr_45917_45984[(2)] = true);

(statearr_45917_45984[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (19))){
var inst_45760 = (state_45857[(12)]);
var inst_45766 = figwheel.client.file_reloading.expand_files.call(null,inst_45760);
var state_45857__$1 = state_45857;
var statearr_45918_45985 = state_45857__$1;
(statearr_45918_45985[(2)] = inst_45766);

(statearr_45918_45985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (11))){
var state_45857__$1 = state_45857;
var statearr_45919_45986 = state_45857__$1;
(statearr_45919_45986[(2)] = null);

(statearr_45919_45986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (9))){
var inst_45749 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45920_45987 = state_45857__$1;
(statearr_45920_45987[(2)] = inst_45749);

(statearr_45920_45987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (5))){
var inst_45719 = (state_45857[(7)]);
var inst_45720 = (state_45857[(8)]);
var inst_45722 = (inst_45720 < inst_45719);
var inst_45723 = inst_45722;
var state_45857__$1 = state_45857;
if(cljs.core.truth_(inst_45723)){
var statearr_45921_45988 = state_45857__$1;
(statearr_45921_45988[(1)] = (7));

} else {
var statearr_45922_45989 = state_45857__$1;
(statearr_45922_45989[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (14))){
var inst_45730 = (state_45857[(22)]);
var inst_45739 = cljs.core.first.call(null,inst_45730);
var inst_45740 = figwheel.client.file_reloading.eval_body.call(null,inst_45739,opts);
var inst_45741 = cljs.core.next.call(null,inst_45730);
var inst_45717 = inst_45741;
var inst_45718 = null;
var inst_45719 = (0);
var inst_45720 = (0);
var state_45857__$1 = (function (){var statearr_45923 = state_45857;
(statearr_45923[(7)] = inst_45719);

(statearr_45923[(8)] = inst_45720);

(statearr_45923[(32)] = inst_45740);

(statearr_45923[(9)] = inst_45718);

(statearr_45923[(10)] = inst_45717);

return statearr_45923;
})();
var statearr_45924_45990 = state_45857__$1;
(statearr_45924_45990[(2)] = null);

(statearr_45924_45990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (45))){
var state_45857__$1 = state_45857;
var statearr_45925_45991 = state_45857__$1;
(statearr_45925_45991[(2)] = null);

(statearr_45925_45991[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (26))){
var inst_45776 = (state_45857[(26)]);
var inst_45773 = (state_45857[(23)]);
var inst_45774 = (state_45857[(24)]);
var inst_45778 = (state_45857[(25)]);
var inst_45770 = (state_45857[(19)]);
var inst_45793 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45795 = (function (){var all_files = inst_45770;
var res_SINGLEQUOTE_ = inst_45773;
var res = inst_45774;
var files_not_loaded = inst_45776;
var dependencies_that_loaded = inst_45778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45793,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45794){
var map__45926 = p__45794;
var map__45926__$1 = ((((!((map__45926 == null)))?((((map__45926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45926):map__45926);
var namespace = cljs.core.get.call(null,map__45926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45926__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45793,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45796 = cljs.core.map.call(null,inst_45795,inst_45774);
var inst_45797 = cljs.core.pr_str.call(null,inst_45796);
var inst_45798 = figwheel.client.utils.log.call(null,inst_45797);
var inst_45799 = (function (){var all_files = inst_45770;
var res_SINGLEQUOTE_ = inst_45773;
var res = inst_45774;
var files_not_loaded = inst_45776;
var dependencies_that_loaded = inst_45778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45793,inst_45795,inst_45796,inst_45797,inst_45798,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45776,inst_45773,inst_45774,inst_45778,inst_45770,inst_45793,inst_45795,inst_45796,inst_45797,inst_45798,state_val_45858,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45800 = setTimeout(inst_45799,(10));
var state_45857__$1 = (function (){var statearr_45928 = state_45857;
(statearr_45928[(33)] = inst_45793);

(statearr_45928[(34)] = inst_45798);

return statearr_45928;
})();
var statearr_45929_45992 = state_45857__$1;
(statearr_45929_45992[(2)] = inst_45800);

(statearr_45929_45992[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (16))){
var state_45857__$1 = state_45857;
var statearr_45930_45993 = state_45857__$1;
(statearr_45930_45993[(2)] = reload_dependents);

(statearr_45930_45993[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (38))){
var inst_45810 = (state_45857[(16)]);
var inst_45828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45810);
var state_45857__$1 = state_45857;
var statearr_45931_45994 = state_45857__$1;
(statearr_45931_45994[(2)] = inst_45828);

(statearr_45931_45994[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (30))){
var state_45857__$1 = state_45857;
var statearr_45932_45995 = state_45857__$1;
(statearr_45932_45995[(2)] = null);

(statearr_45932_45995[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (10))){
var inst_45730 = (state_45857[(22)]);
var inst_45732 = cljs.core.chunked_seq_QMARK_.call(null,inst_45730);
var state_45857__$1 = state_45857;
if(inst_45732){
var statearr_45933_45996 = state_45857__$1;
(statearr_45933_45996[(1)] = (13));

} else {
var statearr_45934_45997 = state_45857__$1;
(statearr_45934_45997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (18))){
var inst_45764 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
if(cljs.core.truth_(inst_45764)){
var statearr_45935_45998 = state_45857__$1;
(statearr_45935_45998[(1)] = (19));

} else {
var statearr_45936_45999 = state_45857__$1;
(statearr_45936_45999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (42))){
var state_45857__$1 = state_45857;
var statearr_45937_46000 = state_45857__$1;
(statearr_45937_46000[(2)] = null);

(statearr_45937_46000[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (37))){
var inst_45823 = (state_45857[(2)]);
var state_45857__$1 = state_45857;
var statearr_45938_46001 = state_45857__$1;
(statearr_45938_46001[(2)] = inst_45823);

(statearr_45938_46001[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45858 === (8))){
var inst_45730 = (state_45857[(22)]);
var inst_45717 = (state_45857[(10)]);
var inst_45730__$1 = cljs.core.seq.call(null,inst_45717);
var state_45857__$1 = (function (){var statearr_45939 = state_45857;
(statearr_45939[(22)] = inst_45730__$1);

return statearr_45939;
})();
if(inst_45730__$1){
var statearr_45940_46002 = state_45857__$1;
(statearr_45940_46002[(1)] = (10));

} else {
var statearr_45941_46003 = state_45857__$1;
(statearr_45941_46003[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33123__auto__,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____0 = (function (){
var statearr_45942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45942[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__);

(statearr_45942[(1)] = (1));

return statearr_45942;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____1 = (function (state_45857){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_45857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e45943){if((e45943 instanceof Object)){
var ex__33127__auto__ = e45943;
var statearr_45944_46004 = state_45857;
(statearr_45944_46004[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46005 = state_45857;
state_45857 = G__46005;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__ = function(state_45857){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____1.call(this,state_45857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33148__auto__ = (function (){var statearr_45945 = f__33147__auto__.call(null);
(statearr_45945[(6)] = c__33146__auto__);

return statearr_45945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__,map__45702,map__45702__$1,opts,before_jsload,on_jsload,reload_dependents,map__45703,map__45703__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33146__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46008,link){
var map__46009 = p__46008;
var map__46009__$1 = ((((!((map__46009 == null)))?((((map__46009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46009):map__46009);
var file = cljs.core.get.call(null,map__46009__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__46009,map__46009__$1,file){
return (function (p1__46006_SHARP_,p2__46007_SHARP_){
if(cljs.core._EQ_.call(null,p1__46006_SHARP_,p2__46007_SHARP_)){
return p1__46006_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__46009,map__46009__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46012){
var map__46013 = p__46012;
var map__46013__$1 = ((((!((map__46013 == null)))?((((map__46013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46013):map__46013);
var match_length = cljs.core.get.call(null,map__46013__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46013__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46011_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46011_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46015_SHARP_,p2__46016_SHARP_){
return cljs.core.assoc.call(null,p1__46015_SHARP_,cljs.core.get.call(null,p2__46016_SHARP_,key),p2__46016_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46017 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46017);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46017);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46018,p__46019){
var map__46020 = p__46018;
var map__46020__$1 = ((((!((map__46020 == null)))?((((map__46020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46020):map__46020);
var on_cssload = cljs.core.get.call(null,map__46020__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46021 = p__46019;
var map__46021__$1 = ((((!((map__46021 == null)))?((((map__46021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46021):map__46021);
var files_msg = map__46021__$1;
var files = cljs.core.get.call(null,map__46021__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511550759823
