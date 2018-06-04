// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__35878 = e.target.readyState;
var fexpr__35877 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__35877.cljs$core$IFn$_invoke$arity$1 ? fexpr__35877.cljs$core$IFn$_invoke$arity$1(G__35878) : fexpr__35877.call(null,G__35878));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35880,handler){
var map__35881 = p__35880;
var map__35881__$1 = ((((!((map__35881 == null)))?((((map__35881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35881):map__35881);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35881__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35881__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__35881,map__35881__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__35879_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__35879_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__35881,map__35881__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5278__auto___35893 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5278__auto___35893)){
var response_type_35894 = temp__5278__auto___35893;
this$__$1.responseType = cljs.core.name(response_type_35894);
} else {
}

var seq__35883_35895 = cljs.core.seq(headers);
var chunk__35884_35896 = null;
var count__35885_35897 = (0);
var i__35886_35898 = (0);
while(true){
if((i__35886_35898 < count__35885_35897)){
var vec__35887_35899 = chunk__35884_35896.cljs$core$IIndexed$_nth$arity$2(null,i__35886_35898);
var k_35900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887_35899,(0),null);
var v_35901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35887_35899,(1),null);
this$__$1.setRequestHeader(k_35900,v_35901);

var G__35902 = seq__35883_35895;
var G__35903 = chunk__35884_35896;
var G__35904 = count__35885_35897;
var G__35905 = (i__35886_35898 + (1));
seq__35883_35895 = G__35902;
chunk__35884_35896 = G__35903;
count__35885_35897 = G__35904;
i__35886_35898 = G__35905;
continue;
} else {
var temp__5278__auto___35906 = cljs.core.seq(seq__35883_35895);
if(temp__5278__auto___35906){
var seq__35883_35907__$1 = temp__5278__auto___35906;
if(cljs.core.chunked_seq_QMARK_(seq__35883_35907__$1)){
var c__31113__auto___35908 = cljs.core.chunk_first(seq__35883_35907__$1);
var G__35909 = cljs.core.chunk_rest(seq__35883_35907__$1);
var G__35910 = c__31113__auto___35908;
var G__35911 = cljs.core.count(c__31113__auto___35908);
var G__35912 = (0);
seq__35883_35895 = G__35909;
chunk__35884_35896 = G__35910;
count__35885_35897 = G__35911;
i__35886_35898 = G__35912;
continue;
} else {
var vec__35890_35913 = cljs.core.first(seq__35883_35907__$1);
var k_35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890_35913,(0),null);
var v_35915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890_35913,(1),null);
this$__$1.setRequestHeader(k_35914,v_35915);

var G__35916 = cljs.core.next(seq__35883_35907__$1);
var G__35917 = null;
var G__35918 = (0);
var G__35919 = (0);
seq__35883_35895 = G__35916;
chunk__35884_35896 = G__35917;
count__35885_35897 = G__35918;
i__35886_35898 = G__35919;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__30182__auto__ = body;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
