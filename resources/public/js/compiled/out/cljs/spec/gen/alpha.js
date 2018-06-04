// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46032 = arguments.length;
var i__31460__auto___46033 = (0);
while(true){
if((i__31460__auto___46033 < len__31459__auto___46032)){
args__31466__auto__.push((arguments[i__31460__auto___46033]));

var G__46034 = (i__31460__auto___46033 + (1));
i__31460__auto___46033 = G__46034;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq46031){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46031));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46036 = arguments.length;
var i__31460__auto___46037 = (0);
while(true){
if((i__31460__auto___46037 < len__31459__auto___46036)){
args__31466__auto__.push((arguments[i__31460__auto___46037]));

var G__46038 = (i__31460__auto___46037 + (1));
i__31460__auto___46037 = G__46038;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq46035){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46035));
});

var g_QMARK__46039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_46040 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46039){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__46039))
,null));
var mkg_46041 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__46039,g_46040){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__46039,g_46040))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__46039,g_46040,mkg_46041){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46039).call(null,x);
});})(g_QMARK__46039,g_46040,mkg_46041))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__46039,g_46040,mkg_46041){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_46041).call(null,gfn);
});})(g_QMARK__46039,g_46040,mkg_46041))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__46039,g_46040,mkg_46041){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_46040).call(null,generator);
});})(g_QMARK__46039,g_46040,mkg_46041))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31562__auto___46061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31562__auto___46061){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46062 = arguments.length;
var i__31460__auto___46063 = (0);
while(true){
if((i__31460__auto___46063 < len__31459__auto___46062)){
args__31466__auto__.push((arguments[i__31460__auto___46063]));

var G__46064 = (i__31460__auto___46063 + (1));
i__31460__auto___46063 = G__46064;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46061))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46061),args);
});})(g__31562__auto___46061))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31562__auto___46061){
return (function (seq46042){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46042));
});})(g__31562__auto___46061))
;


var g__31562__auto___46065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31562__auto___46065){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46066 = arguments.length;
var i__31460__auto___46067 = (0);
while(true){
if((i__31460__auto___46067 < len__31459__auto___46066)){
args__31466__auto__.push((arguments[i__31460__auto___46067]));

var G__46068 = (i__31460__auto___46067 + (1));
i__31460__auto___46067 = G__46068;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46065))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46065),args);
});})(g__31562__auto___46065))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31562__auto___46065){
return (function (seq46043){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46043));
});})(g__31562__auto___46065))
;


var g__31562__auto___46069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31562__auto___46069){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46070 = arguments.length;
var i__31460__auto___46071 = (0);
while(true){
if((i__31460__auto___46071 < len__31459__auto___46070)){
args__31466__auto__.push((arguments[i__31460__auto___46071]));

var G__46072 = (i__31460__auto___46071 + (1));
i__31460__auto___46071 = G__46072;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46069))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46069),args);
});})(g__31562__auto___46069))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31562__auto___46069){
return (function (seq46044){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46044));
});})(g__31562__auto___46069))
;


var g__31562__auto___46073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31562__auto___46073){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46074 = arguments.length;
var i__31460__auto___46075 = (0);
while(true){
if((i__31460__auto___46075 < len__31459__auto___46074)){
args__31466__auto__.push((arguments[i__31460__auto___46075]));

var G__46076 = (i__31460__auto___46075 + (1));
i__31460__auto___46075 = G__46076;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46073))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46073),args);
});})(g__31562__auto___46073))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31562__auto___46073){
return (function (seq46045){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46045));
});})(g__31562__auto___46073))
;


var g__31562__auto___46077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31562__auto___46077){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46078 = arguments.length;
var i__31460__auto___46079 = (0);
while(true){
if((i__31460__auto___46079 < len__31459__auto___46078)){
args__31466__auto__.push((arguments[i__31460__auto___46079]));

var G__46080 = (i__31460__auto___46079 + (1));
i__31460__auto___46079 = G__46080;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46077))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46077),args);
});})(g__31562__auto___46077))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31562__auto___46077){
return (function (seq46046){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46046));
});})(g__31562__auto___46077))
;


var g__31562__auto___46081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31562__auto___46081){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46082 = arguments.length;
var i__31460__auto___46083 = (0);
while(true){
if((i__31460__auto___46083 < len__31459__auto___46082)){
args__31466__auto__.push((arguments[i__31460__auto___46083]));

var G__46084 = (i__31460__auto___46083 + (1));
i__31460__auto___46083 = G__46084;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46081))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46081),args);
});})(g__31562__auto___46081))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31562__auto___46081){
return (function (seq46047){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46047));
});})(g__31562__auto___46081))
;


var g__31562__auto___46085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31562__auto___46085){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46086 = arguments.length;
var i__31460__auto___46087 = (0);
while(true){
if((i__31460__auto___46087 < len__31459__auto___46086)){
args__31466__auto__.push((arguments[i__31460__auto___46087]));

var G__46088 = (i__31460__auto___46087 + (1));
i__31460__auto___46087 = G__46088;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46085))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46085),args);
});})(g__31562__auto___46085))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31562__auto___46085){
return (function (seq46048){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46048));
});})(g__31562__auto___46085))
;


var g__31562__auto___46089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31562__auto___46089){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46090 = arguments.length;
var i__31460__auto___46091 = (0);
while(true){
if((i__31460__auto___46091 < len__31459__auto___46090)){
args__31466__auto__.push((arguments[i__31460__auto___46091]));

var G__46092 = (i__31460__auto___46091 + (1));
i__31460__auto___46091 = G__46092;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46089))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46089),args);
});})(g__31562__auto___46089))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31562__auto___46089){
return (function (seq46049){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46049));
});})(g__31562__auto___46089))
;


var g__31562__auto___46093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31562__auto___46093){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46094 = arguments.length;
var i__31460__auto___46095 = (0);
while(true){
if((i__31460__auto___46095 < len__31459__auto___46094)){
args__31466__auto__.push((arguments[i__31460__auto___46095]));

var G__46096 = (i__31460__auto___46095 + (1));
i__31460__auto___46095 = G__46096;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46093))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46093),args);
});})(g__31562__auto___46093))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31562__auto___46093){
return (function (seq46050){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46050));
});})(g__31562__auto___46093))
;


var g__31562__auto___46097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31562__auto___46097){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46098 = arguments.length;
var i__31460__auto___46099 = (0);
while(true){
if((i__31460__auto___46099 < len__31459__auto___46098)){
args__31466__auto__.push((arguments[i__31460__auto___46099]));

var G__46100 = (i__31460__auto___46099 + (1));
i__31460__auto___46099 = G__46100;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46097))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46097),args);
});})(g__31562__auto___46097))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31562__auto___46097){
return (function (seq46051){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46051));
});})(g__31562__auto___46097))
;


var g__31562__auto___46101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31562__auto___46101){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46102 = arguments.length;
var i__31460__auto___46103 = (0);
while(true){
if((i__31460__auto___46103 < len__31459__auto___46102)){
args__31466__auto__.push((arguments[i__31460__auto___46103]));

var G__46104 = (i__31460__auto___46103 + (1));
i__31460__auto___46103 = G__46104;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46101))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46101),args);
});})(g__31562__auto___46101))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31562__auto___46101){
return (function (seq46052){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46052));
});})(g__31562__auto___46101))
;


var g__31562__auto___46105 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31562__auto___46105){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46106 = arguments.length;
var i__31460__auto___46107 = (0);
while(true){
if((i__31460__auto___46107 < len__31459__auto___46106)){
args__31466__auto__.push((arguments[i__31460__auto___46107]));

var G__46108 = (i__31460__auto___46107 + (1));
i__31460__auto___46107 = G__46108;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46105))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46105),args);
});})(g__31562__auto___46105))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31562__auto___46105){
return (function (seq46053){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46053));
});})(g__31562__auto___46105))
;


var g__31562__auto___46109 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31562__auto___46109){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46110 = arguments.length;
var i__31460__auto___46111 = (0);
while(true){
if((i__31460__auto___46111 < len__31459__auto___46110)){
args__31466__auto__.push((arguments[i__31460__auto___46111]));

var G__46112 = (i__31460__auto___46111 + (1));
i__31460__auto___46111 = G__46112;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46109))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46109),args);
});})(g__31562__auto___46109))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31562__auto___46109){
return (function (seq46054){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46054));
});})(g__31562__auto___46109))
;


var g__31562__auto___46113 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31562__auto___46113){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46114 = arguments.length;
var i__31460__auto___46115 = (0);
while(true){
if((i__31460__auto___46115 < len__31459__auto___46114)){
args__31466__auto__.push((arguments[i__31460__auto___46115]));

var G__46116 = (i__31460__auto___46115 + (1));
i__31460__auto___46115 = G__46116;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46113))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46113),args);
});})(g__31562__auto___46113))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31562__auto___46113){
return (function (seq46055){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46055));
});})(g__31562__auto___46113))
;


var g__31562__auto___46117 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31562__auto___46117){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46118 = arguments.length;
var i__31460__auto___46119 = (0);
while(true){
if((i__31460__auto___46119 < len__31459__auto___46118)){
args__31466__auto__.push((arguments[i__31460__auto___46119]));

var G__46120 = (i__31460__auto___46119 + (1));
i__31460__auto___46119 = G__46120;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46117))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46117),args);
});})(g__31562__auto___46117))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31562__auto___46117){
return (function (seq46056){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46056));
});})(g__31562__auto___46117))
;


var g__31562__auto___46121 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31562__auto___46121){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46122 = arguments.length;
var i__31460__auto___46123 = (0);
while(true){
if((i__31460__auto___46123 < len__31459__auto___46122)){
args__31466__auto__.push((arguments[i__31460__auto___46123]));

var G__46124 = (i__31460__auto___46123 + (1));
i__31460__auto___46123 = G__46124;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46121))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46121){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46121),args);
});})(g__31562__auto___46121))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31562__auto___46121){
return (function (seq46057){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46057));
});})(g__31562__auto___46121))
;


var g__31562__auto___46125 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31562__auto___46125){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46126 = arguments.length;
var i__31460__auto___46127 = (0);
while(true){
if((i__31460__auto___46127 < len__31459__auto___46126)){
args__31466__auto__.push((arguments[i__31460__auto___46127]));

var G__46128 = (i__31460__auto___46127 + (1));
i__31460__auto___46127 = G__46128;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46125))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46125){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46125),args);
});})(g__31562__auto___46125))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31562__auto___46125){
return (function (seq46058){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46058));
});})(g__31562__auto___46125))
;


var g__31562__auto___46129 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31562__auto___46129){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46130 = arguments.length;
var i__31460__auto___46131 = (0);
while(true){
if((i__31460__auto___46131 < len__31459__auto___46130)){
args__31466__auto__.push((arguments[i__31460__auto___46131]));

var G__46132 = (i__31460__auto___46131 + (1));
i__31460__auto___46131 = G__46132;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46129))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46129){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46129),args);
});})(g__31562__auto___46129))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31562__auto___46129){
return (function (seq46059){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46059));
});})(g__31562__auto___46129))
;


var g__31562__auto___46133 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31562__auto___46133){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46134 = arguments.length;
var i__31460__auto___46135 = (0);
while(true){
if((i__31460__auto___46135 < len__31459__auto___46134)){
args__31466__auto__.push((arguments[i__31460__auto___46135]));

var G__46136 = (i__31460__auto___46135 + (1));
i__31460__auto___46135 = G__46136;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31562__auto___46133))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31562__auto___46133){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31562__auto___46133),args);
});})(g__31562__auto___46133))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31562__auto___46133){
return (function (seq46060){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46060));
});})(g__31562__auto___46133))
;

var g__31575__auto___46158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31575__auto___46158){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46159 = arguments.length;
var i__31460__auto___46160 = (0);
while(true){
if((i__31460__auto___46160 < len__31459__auto___46159)){
args__31466__auto__.push((arguments[i__31460__auto___46160]));

var G__46161 = (i__31460__auto___46160 + (1));
i__31460__auto___46160 = G__46161;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46158))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46158){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46158);
});})(g__31575__auto___46158))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31575__auto___46158){
return (function (seq46137){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46137));
});})(g__31575__auto___46158))
;


var g__31575__auto___46162 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31575__auto___46162){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46163 = arguments.length;
var i__31460__auto___46164 = (0);
while(true){
if((i__31460__auto___46164 < len__31459__auto___46163)){
args__31466__auto__.push((arguments[i__31460__auto___46164]));

var G__46165 = (i__31460__auto___46164 + (1));
i__31460__auto___46164 = G__46165;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46162))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46162){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46162);
});})(g__31575__auto___46162))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31575__auto___46162){
return (function (seq46138){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46138));
});})(g__31575__auto___46162))
;


var g__31575__auto___46166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31575__auto___46166){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46167 = arguments.length;
var i__31460__auto___46168 = (0);
while(true){
if((i__31460__auto___46168 < len__31459__auto___46167)){
args__31466__auto__.push((arguments[i__31460__auto___46168]));

var G__46169 = (i__31460__auto___46168 + (1));
i__31460__auto___46168 = G__46169;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46166))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46166){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46166);
});})(g__31575__auto___46166))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31575__auto___46166){
return (function (seq46139){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46139));
});})(g__31575__auto___46166))
;


var g__31575__auto___46170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31575__auto___46170){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46171 = arguments.length;
var i__31460__auto___46172 = (0);
while(true){
if((i__31460__auto___46172 < len__31459__auto___46171)){
args__31466__auto__.push((arguments[i__31460__auto___46172]));

var G__46173 = (i__31460__auto___46172 + (1));
i__31460__auto___46172 = G__46173;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46170))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46170){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46170);
});})(g__31575__auto___46170))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31575__auto___46170){
return (function (seq46140){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46140));
});})(g__31575__auto___46170))
;


var g__31575__auto___46174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31575__auto___46174){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46175 = arguments.length;
var i__31460__auto___46176 = (0);
while(true){
if((i__31460__auto___46176 < len__31459__auto___46175)){
args__31466__auto__.push((arguments[i__31460__auto___46176]));

var G__46177 = (i__31460__auto___46176 + (1));
i__31460__auto___46176 = G__46177;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46174))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46174){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46174);
});})(g__31575__auto___46174))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31575__auto___46174){
return (function (seq46141){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46141));
});})(g__31575__auto___46174))
;


var g__31575__auto___46178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31575__auto___46178){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46179 = arguments.length;
var i__31460__auto___46180 = (0);
while(true){
if((i__31460__auto___46180 < len__31459__auto___46179)){
args__31466__auto__.push((arguments[i__31460__auto___46180]));

var G__46181 = (i__31460__auto___46180 + (1));
i__31460__auto___46180 = G__46181;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46178))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46178){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46178);
});})(g__31575__auto___46178))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31575__auto___46178){
return (function (seq46142){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46142));
});})(g__31575__auto___46178))
;


var g__31575__auto___46182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31575__auto___46182){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46183 = arguments.length;
var i__31460__auto___46184 = (0);
while(true){
if((i__31460__auto___46184 < len__31459__auto___46183)){
args__31466__auto__.push((arguments[i__31460__auto___46184]));

var G__46185 = (i__31460__auto___46184 + (1));
i__31460__auto___46184 = G__46185;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46182))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46182){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46182);
});})(g__31575__auto___46182))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31575__auto___46182){
return (function (seq46143){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46143));
});})(g__31575__auto___46182))
;


var g__31575__auto___46186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31575__auto___46186){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46187 = arguments.length;
var i__31460__auto___46188 = (0);
while(true){
if((i__31460__auto___46188 < len__31459__auto___46187)){
args__31466__auto__.push((arguments[i__31460__auto___46188]));

var G__46189 = (i__31460__auto___46188 + (1));
i__31460__auto___46188 = G__46189;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46186))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46186){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46186);
});})(g__31575__auto___46186))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31575__auto___46186){
return (function (seq46144){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46144));
});})(g__31575__auto___46186))
;


var g__31575__auto___46190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31575__auto___46190){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46191 = arguments.length;
var i__31460__auto___46192 = (0);
while(true){
if((i__31460__auto___46192 < len__31459__auto___46191)){
args__31466__auto__.push((arguments[i__31460__auto___46192]));

var G__46193 = (i__31460__auto___46192 + (1));
i__31460__auto___46192 = G__46193;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46190))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46190){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46190);
});})(g__31575__auto___46190))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31575__auto___46190){
return (function (seq46145){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46145));
});})(g__31575__auto___46190))
;


var g__31575__auto___46194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31575__auto___46194){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46195 = arguments.length;
var i__31460__auto___46196 = (0);
while(true){
if((i__31460__auto___46196 < len__31459__auto___46195)){
args__31466__auto__.push((arguments[i__31460__auto___46196]));

var G__46197 = (i__31460__auto___46196 + (1));
i__31460__auto___46196 = G__46197;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46194))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46194){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46194);
});})(g__31575__auto___46194))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31575__auto___46194){
return (function (seq46146){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46146));
});})(g__31575__auto___46194))
;


var g__31575__auto___46198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31575__auto___46198){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46199 = arguments.length;
var i__31460__auto___46200 = (0);
while(true){
if((i__31460__auto___46200 < len__31459__auto___46199)){
args__31466__auto__.push((arguments[i__31460__auto___46200]));

var G__46201 = (i__31460__auto___46200 + (1));
i__31460__auto___46200 = G__46201;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46198))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46198){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46198);
});})(g__31575__auto___46198))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31575__auto___46198){
return (function (seq46147){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46147));
});})(g__31575__auto___46198))
;


var g__31575__auto___46202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31575__auto___46202){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46203 = arguments.length;
var i__31460__auto___46204 = (0);
while(true){
if((i__31460__auto___46204 < len__31459__auto___46203)){
args__31466__auto__.push((arguments[i__31460__auto___46204]));

var G__46205 = (i__31460__auto___46204 + (1));
i__31460__auto___46204 = G__46205;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46202))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46202){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46202);
});})(g__31575__auto___46202))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31575__auto___46202){
return (function (seq46148){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46148));
});})(g__31575__auto___46202))
;


var g__31575__auto___46206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31575__auto___46206){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46207 = arguments.length;
var i__31460__auto___46208 = (0);
while(true){
if((i__31460__auto___46208 < len__31459__auto___46207)){
args__31466__auto__.push((arguments[i__31460__auto___46208]));

var G__46209 = (i__31460__auto___46208 + (1));
i__31460__auto___46208 = G__46209;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46206))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46206){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46206);
});})(g__31575__auto___46206))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31575__auto___46206){
return (function (seq46149){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46149));
});})(g__31575__auto___46206))
;


var g__31575__auto___46210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31575__auto___46210){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46211 = arguments.length;
var i__31460__auto___46212 = (0);
while(true){
if((i__31460__auto___46212 < len__31459__auto___46211)){
args__31466__auto__.push((arguments[i__31460__auto___46212]));

var G__46213 = (i__31460__auto___46212 + (1));
i__31460__auto___46212 = G__46213;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46210))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46210){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46210);
});})(g__31575__auto___46210))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31575__auto___46210){
return (function (seq46150){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46150));
});})(g__31575__auto___46210))
;


var g__31575__auto___46214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31575__auto___46214){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46215 = arguments.length;
var i__31460__auto___46216 = (0);
while(true){
if((i__31460__auto___46216 < len__31459__auto___46215)){
args__31466__auto__.push((arguments[i__31460__auto___46216]));

var G__46217 = (i__31460__auto___46216 + (1));
i__31460__auto___46216 = G__46217;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46214))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46214){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46214);
});})(g__31575__auto___46214))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31575__auto___46214){
return (function (seq46151){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46151));
});})(g__31575__auto___46214))
;


var g__31575__auto___46218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31575__auto___46218){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46219 = arguments.length;
var i__31460__auto___46220 = (0);
while(true){
if((i__31460__auto___46220 < len__31459__auto___46219)){
args__31466__auto__.push((arguments[i__31460__auto___46220]));

var G__46221 = (i__31460__auto___46220 + (1));
i__31460__auto___46220 = G__46221;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46218))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46218){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46218);
});})(g__31575__auto___46218))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31575__auto___46218){
return (function (seq46152){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46152));
});})(g__31575__auto___46218))
;


var g__31575__auto___46222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31575__auto___46222){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46223 = arguments.length;
var i__31460__auto___46224 = (0);
while(true){
if((i__31460__auto___46224 < len__31459__auto___46223)){
args__31466__auto__.push((arguments[i__31460__auto___46224]));

var G__46225 = (i__31460__auto___46224 + (1));
i__31460__auto___46224 = G__46225;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46222))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46222){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46222);
});})(g__31575__auto___46222))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31575__auto___46222){
return (function (seq46153){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46153));
});})(g__31575__auto___46222))
;


var g__31575__auto___46226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31575__auto___46226){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46227 = arguments.length;
var i__31460__auto___46228 = (0);
while(true){
if((i__31460__auto___46228 < len__31459__auto___46227)){
args__31466__auto__.push((arguments[i__31460__auto___46228]));

var G__46229 = (i__31460__auto___46228 + (1));
i__31460__auto___46228 = G__46229;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46226))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46226){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46226);
});})(g__31575__auto___46226))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31575__auto___46226){
return (function (seq46154){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46154));
});})(g__31575__auto___46226))
;


var g__31575__auto___46230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31575__auto___46230){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46231 = arguments.length;
var i__31460__auto___46232 = (0);
while(true){
if((i__31460__auto___46232 < len__31459__auto___46231)){
args__31466__auto__.push((arguments[i__31460__auto___46232]));

var G__46233 = (i__31460__auto___46232 + (1));
i__31460__auto___46232 = G__46233;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46230))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46230){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46230);
});})(g__31575__auto___46230))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31575__auto___46230){
return (function (seq46155){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46155));
});})(g__31575__auto___46230))
;


var g__31575__auto___46234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31575__auto___46234){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46235 = arguments.length;
var i__31460__auto___46236 = (0);
while(true){
if((i__31460__auto___46236 < len__31459__auto___46235)){
args__31466__auto__.push((arguments[i__31460__auto___46236]));

var G__46237 = (i__31460__auto___46236 + (1));
i__31460__auto___46236 = G__46237;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46234))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46234){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46234);
});})(g__31575__auto___46234))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31575__auto___46234){
return (function (seq46156){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46156));
});})(g__31575__auto___46234))
;


var g__31575__auto___46238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31575__auto___46238){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46239 = arguments.length;
var i__31460__auto___46240 = (0);
while(true){
if((i__31460__auto___46240 < len__31459__auto___46239)){
args__31466__auto__.push((arguments[i__31460__auto___46240]));

var G__46241 = (i__31460__auto___46240 + (1));
i__31460__auto___46240 = G__46241;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});})(g__31575__auto___46238))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31575__auto___46238){
return (function (args){
return cljs.core.deref.call(null,g__31575__auto___46238);
});})(g__31575__auto___46238))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31575__auto___46238){
return (function (seq46157){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46157));
});})(g__31575__auto___46238))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31466__auto__ = [];
var len__31459__auto___46244 = arguments.length;
var i__31460__auto___46245 = (0);
while(true){
if((i__31460__auto___46245 < len__31459__auto___46244)){
args__31466__auto__.push((arguments[i__31460__auto___46245]));

var G__46246 = (i__31460__auto___46245 + (1));
i__31460__auto___46245 = G__46246;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__46242_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46242_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq46243){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46243));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__46247_SHARP_){
return (new Date(p1__46247_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1511550760140
