// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30870__auto__,k__30871__auto__){
var self__ = this;
var this__30870__auto____$1 = this;
return this__30870__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30871__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30872__auto__,k35713,else__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
var G__35717 = k35713;
var G__35717__$1 = (((G__35717 instanceof cljs.core.Keyword))?G__35717.fqn:null);
switch (G__35717__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35713,else__30873__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__35718,opts){
var self__ = this;
var map__35719 = p__35718;
var map__35719__$1 = ((((!((map__35719 == null)))?((((map__35719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35719):map__35719);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35719__$1,cljs.core.cst$kw$request);
var map__35721 = this;
var map__35721__$1 = ((((!((map__35721 == null)))?((((map__35721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35721):map__35721);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35721__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__35723,xhrio){
var self__ = this;
var map__35724 = p__35723;
var map__35724__$1 = ((((!((map__35724 == null)))?((((map__35724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35724):map__35724);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,cljs.core.cst$kw$response);
var map__35726 = this;
var map__35726__$1 = ((((!((map__35726 == null)))?((((map__35726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35726):map__35726);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35726__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30884__auto__,writer__30885__auto__,opts__30886__auto__){
var self__ = this;
var this__30884__auto____$1 = this;
var pr_pair__30887__auto__ = ((function (this__30884__auto____$1){
return (function (keyval__30888__auto__){
return cljs.core.pr_sequential_writer(writer__30885__auto__,cljs.core.pr_writer,""," ","",opts__30886__auto__,keyval__30888__auto__);
});})(this__30884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__30885__auto__,pr_pair__30887__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__30886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35712){
var self__ = this;
var G__35712__$1 = this;
return (new cljs.core.RecordIter((0),G__35712__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30868__auto__){
var self__ = this;
var this__30868__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30874__auto__){
var self__ = this;
var this__30874__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30866__auto__){
var self__ = this;
var this__30866__auto____$1 = this;
var h__30638__auto__ = self__.__hash;
if(!((h__30638__auto__ == null))){
return h__30638__auto__;
} else {
var h__30638__auto____$1 = (function (){var fexpr__35728 = ((function (h__30638__auto__,this__30866__auto____$1){
return (function (coll__30867__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__30867__auto__));
});})(h__30638__auto__,this__30866__auto____$1))
;
return fexpr__35728(this__30866__auto____$1);
})();
self__.__hash = h__30638__auto____$1;

return h__30638__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35714,other35715){
var self__ = this;
var this35714__$1 = this;
return (!((other35715 == null))) && ((this35714__$1.constructor === other35715.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35714__$1.name,other35715.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35714__$1.request,other35715.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35714__$1.response,other35715.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35714__$1.__extmap,other35715.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30879__auto__,k__30880__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__30880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__30879__auto____$1),self__.__meta),k__30880__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__30880__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30877__auto__,k__30878__auto__,G__35712){
var self__ = this;
var this__30877__auto____$1 = this;
var pred__35729 = cljs.core.keyword_identical_QMARK_;
var expr__35730 = k__30878__auto__;
if(cljs.core.truth_((function (){var G__35732 = cljs.core.cst$kw$name;
var G__35733 = expr__35730;
return (pred__35729.cljs$core$IFn$_invoke$arity$2 ? pred__35729.cljs$core$IFn$_invoke$arity$2(G__35732,G__35733) : pred__35729.call(null,G__35732,G__35733));
})())){
return (new ajax.interceptors.StandardInterceptor(G__35712,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35734 = cljs.core.cst$kw$request;
var G__35735 = expr__35730;
return (pred__35729.cljs$core$IFn$_invoke$arity$2 ? pred__35729.cljs$core$IFn$_invoke$arity$2(G__35734,G__35735) : pred__35729.call(null,G__35734,G__35735));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__35712,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35736 = cljs.core.cst$kw$response;
var G__35737 = expr__35730;
return (pred__35729.cljs$core$IFn$_invoke$arity$2 ? pred__35729.cljs$core$IFn$_invoke$arity$2(G__35736,G__35737) : pred__35729.call(null,G__35736,G__35737));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__35712,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__30878__auto__,G__35712),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30882__auto__){
var self__ = this;
var this__30882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30869__auto__,G__35712){
var self__ = this;
var this__30869__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__35712,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30875__auto__,entry__30876__auto__){
var self__ = this;
var this__30875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__30876__auto__)){
return this__30875__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__30875__auto____$1,entry__30876__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__30908__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__30908__auto__,writer__30909__auto__){
return cljs.core._write(writer__30909__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__35716){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__35716),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__35716),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__35716),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35716,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__35739,xhrio){
var map__35740 = p__35739;
var map__35740__$1 = ((((!((map__35740 == null)))?((((map__35740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35740):map__35740);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35740__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__31466__auto__ = [];
var len__31459__auto___35746 = arguments.length;
var i__31460__auto___35747 = (0);
while(true){
if((i__31460__auto___35747 < len__31459__auto___35746)){
args__31466__auto__.push((arguments[i__31460__auto___35747]));

var G__35748 = (i__31460__auto___35747 + (1));
i__31460__auto___35747 = G__35748;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((3) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31467__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq35742){
var G__35743 = cljs.core.first(seq35742);
var seq35742__$1 = cljs.core.next(seq35742);
var G__35744 = cljs.core.first(seq35742__$1);
var seq35742__$2 = cljs.core.next(seq35742__$1);
var G__35745 = cljs.core.first(seq35742__$2);
var seq35742__$3 = cljs.core.next(seq35742__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__35743,G__35744,G__35745,seq35742__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30870__auto__,k__30871__auto__){
var self__ = this;
var this__30870__auto____$1 = this;
return this__30870__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30871__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30872__auto__,k35751,else__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
var G__35755 = k35751;
var G__35755__$1 = (((G__35755 instanceof cljs.core.Keyword))?G__35755.fqn:null);
switch (G__35755__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35751,else__30873__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__35756,request){
var self__ = this;
var map__35757 = p__35756;
var map__35757__$1 = ((((!((map__35757 == null)))?((((map__35757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35757):map__35757);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,cljs.core.cst$kw$content_DASH_type);
var map__35759 = this;
var map__35759__$1 = ((((!((map__35759 == null)))?((((map__35759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35759):map__35759);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__35759,map__35759__$1,content_type__$2,map__35757,map__35757__$1,content_type__$1){
return (function (p1__35749_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__30182__auto__ = p1__35749_SHARP_;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__35759,map__35759__$1,content_type__$2,map__35757,map__35757__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__35761,xhrio){
var self__ = this;
var map__35762 = p__35761;
var map__35762__$1 = ((((!((map__35762 == null)))?((((map__35762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35762):map__35762);
var format = map__35762__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,cljs.core.cst$kw$read);
var map__35764 = this;
var map__35764__$1 = ((((!((map__35764 == null)))?((((map__35764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35764):map__35764);
var format__$1 = map__35764__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35764__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__35767 = status;
switch (G__35767) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__35768 = "Request failed.";
var G__35769 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__35768,G__35769) : fail.call(null,G__35768,G__35769));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__35770 = "Request aborted by client.";
var G__35771 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__35770,G__35771) : fail.call(null,G__35770,G__35771));
} else {
var G__35772 = "Request timed out.";
var G__35773 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__35772,G__35773) : fail.call(null,G__35772,G__35773));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__35775 = ajax.protocols._status_text(xhrio);
var G__35776 = cljs.core.cst$kw$error;
var G__35777 = cljs.core.cst$kw$response;
var G__35778 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__35775,G__35776,G__35777,G__35778) : fail.call(null,G__35775,G__35776,G__35777,G__35778));
}
}catch (e35774){if((e35774 instanceof Object)){
var e = e35774;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e35774;

}
}
}
}catch (e35766){if((e35766 instanceof Object)){
var e = e35766;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e35766;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30884__auto__,writer__30885__auto__,opts__30886__auto__){
var self__ = this;
var this__30884__auto____$1 = this;
var pr_pair__30887__auto__ = ((function (this__30884__auto____$1){
return (function (keyval__30888__auto__){
return cljs.core.pr_sequential_writer(writer__30885__auto__,cljs.core.pr_writer,""," ","",opts__30886__auto__,keyval__30888__auto__);
});})(this__30884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__30885__auto__,pr_pair__30887__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__30886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35750){
var self__ = this;
var G__35750__$1 = this;
return (new cljs.core.RecordIter((0),G__35750__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30868__auto__){
var self__ = this;
var this__30868__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30874__auto__){
var self__ = this;
var this__30874__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30866__auto__){
var self__ = this;
var this__30866__auto____$1 = this;
var h__30638__auto__ = self__.__hash;
if(!((h__30638__auto__ == null))){
return h__30638__auto__;
} else {
var h__30638__auto____$1 = (function (){var fexpr__35779 = ((function (h__30638__auto__,this__30866__auto____$1){
return (function (coll__30867__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__30867__auto__));
});})(h__30638__auto__,this__30866__auto____$1))
;
return fexpr__35779(this__30866__auto____$1);
})();
self__.__hash = h__30638__auto____$1;

return h__30638__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35752,other35753){
var self__ = this;
var this35752__$1 = this;
return (!((other35753 == null))) && ((this35752__$1.constructor === other35753.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35752__$1.read,other35753.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35752__$1.description,other35753.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35752__$1.content_type,other35753.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35752__$1.__extmap,other35753.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30879__auto__,k__30880__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__30880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__30879__auto____$1),self__.__meta),k__30880__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__30880__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30877__auto__,k__30878__auto__,G__35750){
var self__ = this;
var this__30877__auto____$1 = this;
var pred__35780 = cljs.core.keyword_identical_QMARK_;
var expr__35781 = k__30878__auto__;
if(cljs.core.truth_((function (){var G__35783 = cljs.core.cst$kw$read;
var G__35784 = expr__35781;
return (pred__35780.cljs$core$IFn$_invoke$arity$2 ? pred__35780.cljs$core$IFn$_invoke$arity$2(G__35783,G__35784) : pred__35780.call(null,G__35783,G__35784));
})())){
return (new ajax.interceptors.ResponseFormat(G__35750,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35785 = cljs.core.cst$kw$description;
var G__35786 = expr__35781;
return (pred__35780.cljs$core$IFn$_invoke$arity$2 ? pred__35780.cljs$core$IFn$_invoke$arity$2(G__35785,G__35786) : pred__35780.call(null,G__35785,G__35786));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__35750,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35787 = cljs.core.cst$kw$content_DASH_type;
var G__35788 = expr__35781;
return (pred__35780.cljs$core$IFn$_invoke$arity$2 ? pred__35780.cljs$core$IFn$_invoke$arity$2(G__35787,G__35788) : pred__35780.call(null,G__35787,G__35788));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__35750,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__30878__auto__,G__35750),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30882__auto__){
var self__ = this;
var this__30882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30869__auto__,G__35750){
var self__ = this;
var this__30869__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__35750,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30875__auto__,entry__30876__auto__){
var self__ = this;
var this__30875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__30876__auto__)){
return this__30875__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__30875__auto____$1,entry__30876__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__30908__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__30908__auto__,writer__30909__auto__){
return cljs.core._write(writer__30909__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__35754){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__35754),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__35754),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__35754),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35754,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30870__auto__,k__30871__auto__){
var self__ = this;
var this__30870__auto____$1 = this;
return this__30870__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30871__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30872__auto__,k35792,else__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
var G__35796 = k35792;
switch (G__35796) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35792,else__30873__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35797){
var self__ = this;
var map__35798 = p__35797;
var map__35798__$1 = ((((!((map__35798 == null)))?((((map__35798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35798):map__35798);
var request = map__35798__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35798__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__35800 = ajax.interceptors.get_request_format(format);
var map__35800__$1 = ((((!((map__35800 == null)))?((((map__35800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35800):map__35800);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35800__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__30182__auto__ = headers;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30884__auto__,writer__30885__auto__,opts__30886__auto__){
var self__ = this;
var this__30884__auto____$1 = this;
var pr_pair__30887__auto__ = ((function (this__30884__auto____$1){
return (function (keyval__30888__auto__){
return cljs.core.pr_sequential_writer(writer__30885__auto__,cljs.core.pr_writer,""," ","",opts__30886__auto__,keyval__30888__auto__);
});})(this__30884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__30885__auto__,pr_pair__30887__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__30886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35791){
var self__ = this;
var G__35791__$1 = this;
return (new cljs.core.RecordIter((0),G__35791__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30868__auto__){
var self__ = this;
var this__30868__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30874__auto__){
var self__ = this;
var this__30874__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30866__auto__){
var self__ = this;
var this__30866__auto____$1 = this;
var h__30638__auto__ = self__.__hash;
if(!((h__30638__auto__ == null))){
return h__30638__auto__;
} else {
var h__30638__auto____$1 = (function (){var fexpr__35802 = ((function (h__30638__auto__,this__30866__auto____$1){
return (function (coll__30867__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__30867__auto__));
});})(h__30638__auto__,this__30866__auto____$1))
;
return fexpr__35802(this__30866__auto____$1);
})();
self__.__hash = h__30638__auto____$1;

return h__30638__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35793,other35794){
var self__ = this;
var this35793__$1 = this;
return (!((other35794 == null))) && ((this35793__$1.constructor === other35794.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35793__$1.__extmap,other35794.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30879__auto__,k__30880__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__30880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__30879__auto____$1),self__.__meta),k__30880__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__30880__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30877__auto__,k__30878__auto__,G__35791){
var self__ = this;
var this__30877__auto____$1 = this;
var pred__35803 = cljs.core.keyword_identical_QMARK_;
var expr__35804 = k__30878__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__30878__auto__,G__35791),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30882__auto__){
var self__ = this;
var this__30882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30869__auto__,G__35791){
var self__ = this;
var this__30869__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__35791,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30875__auto__,entry__30876__auto__){
var self__ = this;
var this__30875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__30876__auto__)){
return this__30875__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__30875__auto____$1,entry__30876__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__30908__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__30908__auto__,writer__30909__auto__){
return cljs.core._write(writer__30909__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__35795){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__35795)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__35808 = arguments.length;
switch (G__35808) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__35809,uri){
var map__35810 = p__35809;
var map__35810__$1 = ((((!((map__35810 == null)))?((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35810):map__35810);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35810__$1,cljs.core.cst$kw$params);

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__35812){
var map__35813 = p__35812;
var map__35813__$1 = ((((!((map__35813 == null)))?((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35813):map__35813);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,cljs.core.cst$kw$params);
return ((function (map__35813,map__35813__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__35813,map__35813__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30870__auto__,k__30871__auto__){
var self__ = this;
var this__30870__auto____$1 = this;
return this__30870__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30871__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30872__auto__,k35817,else__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
var G__35821 = k35817;
switch (G__35821) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35817,else__30873__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35822){
var self__ = this;
var map__35823 = p__35822;
var map__35823__$1 = ((((!((map__35823 == null)))?((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35823):map__35823);
var request = map__35823__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35823__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30884__auto__,writer__30885__auto__,opts__30886__auto__){
var self__ = this;
var this__30884__auto____$1 = this;
var pr_pair__30887__auto__ = ((function (this__30884__auto____$1){
return (function (keyval__30888__auto__){
return cljs.core.pr_sequential_writer(writer__30885__auto__,cljs.core.pr_writer,""," ","",opts__30886__auto__,keyval__30888__auto__);
});})(this__30884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__30885__auto__,pr_pair__30887__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__30886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35816){
var self__ = this;
var G__35816__$1 = this;
return (new cljs.core.RecordIter((0),G__35816__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30868__auto__){
var self__ = this;
var this__30868__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30874__auto__){
var self__ = this;
var this__30874__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30866__auto__){
var self__ = this;
var this__30866__auto____$1 = this;
var h__30638__auto__ = self__.__hash;
if(!((h__30638__auto__ == null))){
return h__30638__auto__;
} else {
var h__30638__auto____$1 = (function (){var fexpr__35825 = ((function (h__30638__auto__,this__30866__auto____$1){
return (function (coll__30867__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll(coll__30867__auto__));
});})(h__30638__auto__,this__30866__auto____$1))
;
return fexpr__35825(this__30866__auto____$1);
})();
self__.__hash = h__30638__auto____$1;

return h__30638__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35818,other35819){
var self__ = this;
var this35818__$1 = this;
return (!((other35819 == null))) && ((this35818__$1.constructor === other35819.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35818__$1.__extmap,other35819.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30879__auto__,k__30880__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__30880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__30879__auto____$1),self__.__meta),k__30880__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__30880__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30877__auto__,k__30878__auto__,G__35816){
var self__ = this;
var this__30877__auto____$1 = this;
var pred__35826 = cljs.core.keyword_identical_QMARK_;
var expr__35827 = k__30878__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__30878__auto__,G__35816),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30882__auto__){
var self__ = this;
var this__30882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30869__auto__,G__35816){
var self__ = this;
var this__30869__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__35816,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30875__auto__,entry__30876__auto__){
var self__ = this;
var this__30875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__30876__auto__)){
return this__30875__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__30875__auto____$1,entry__30876__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__30908__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__30908__auto__,writer__30909__auto__){
return cljs.core._write(writer__30909__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__35820){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__35820)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30870__auto__,k__30871__auto__){
var self__ = this;
var this__30870__auto____$1 = this;
return this__30870__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30871__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30872__auto__,k35831,else__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
var G__35835 = k35831;
switch (G__35835) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35831,else__30873__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__35836){
var self__ = this;
var map__35837 = p__35836;
var map__35837__$1 = ((((!((map__35837 == null)))?((((map__35837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35837):map__35837);
var request = map__35837__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35837__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30884__auto__,writer__30885__auto__,opts__30886__auto__){
var self__ = this;
var this__30884__auto____$1 = this;
var pr_pair__30887__auto__ = ((function (this__30884__auto____$1){
return (function (keyval__30888__auto__){
return cljs.core.pr_sequential_writer(writer__30885__auto__,cljs.core.pr_writer,""," ","",opts__30886__auto__,keyval__30888__auto__);
});})(this__30884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__30885__auto__,pr_pair__30887__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__30886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35830){
var self__ = this;
var G__35830__$1 = this;
return (new cljs.core.RecordIter((0),G__35830__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30868__auto__){
var self__ = this;
var this__30868__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30874__auto__){
var self__ = this;
var this__30874__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30866__auto__){
var self__ = this;
var this__30866__auto____$1 = this;
var h__30638__auto__ = self__.__hash;
if(!((h__30638__auto__ == null))){
return h__30638__auto__;
} else {
var h__30638__auto____$1 = (function (){var fexpr__35839 = ((function (h__30638__auto__,this__30866__auto____$1){
return (function (coll__30867__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__30867__auto__));
});})(h__30638__auto__,this__30866__auto____$1))
;
return fexpr__35839(this__30866__auto____$1);
})();
self__.__hash = h__30638__auto____$1;

return h__30638__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35832,other35833){
var self__ = this;
var this35832__$1 = this;
return (!((other35833 == null))) && ((this35832__$1.constructor === other35833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35832__$1.__extmap,other35833.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30879__auto__,k__30880__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__30880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__30879__auto____$1),self__.__meta),k__30880__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__30880__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30877__auto__,k__30878__auto__,G__35830){
var self__ = this;
var this__30877__auto____$1 = this;
var pred__35840 = cljs.core.keyword_identical_QMARK_;
var expr__35841 = k__30878__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__30878__auto__,G__35830),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30882__auto__){
var self__ = this;
var this__30882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30869__auto__,G__35830){
var self__ = this;
var this__30869__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__35830,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30875__auto__,entry__30876__auto__){
var self__ = this;
var this__30875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__30876__auto__)){
return this__30875__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__30876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__30875__auto____$1,entry__30876__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__30908__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__30908__auto__,writer__30909__auto__){
return cljs.core._write(writer__30909__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__35834){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__35834)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__35844){
var map__35845 = p__35844;
var map__35845__$1 = ((((!((map__35845 == null)))?((((map__35845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35845):map__35845);
var opts = map__35845__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35845__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
