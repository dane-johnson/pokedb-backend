// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36169 = arguments.length;
var i__31460__auto___36170 = (0);
while(true){
if((i__31460__auto___36170 < len__31459__auto___36169)){
args__31466__auto__.push((arguments[i__31460__auto___36170]));

var G__36171 = (i__31460__auto___36170 + (1));
i__31460__auto___36170 = G__36171;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq36167){
var G__36168 = cljs.core.first(seq36167);
var seq36167__$1 = cljs.core.next(seq36167);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__36168,seq36167__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36174 = arguments.length;
var i__31460__auto___36175 = (0);
while(true){
if((i__31460__auto___36175 < len__31459__auto___36174)){
args__31466__auto__.push((arguments[i__31460__auto___36175]));

var G__36176 = (i__31460__auto___36175 + (1));
i__31460__auto___36175 = G__36176;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq36172){
var G__36173 = cljs.core.first(seq36172);
var seq36172__$1 = cljs.core.next(seq36172);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__36173,seq36172__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36179 = arguments.length;
var i__31460__auto___36180 = (0);
while(true){
if((i__31460__auto___36180 < len__31459__auto___36179)){
args__31466__auto__.push((arguments[i__31460__auto___36180]));

var G__36181 = (i__31460__auto___36180 + (1));
i__31460__auto___36180 = G__36181;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq36177){
var G__36178 = cljs.core.first(seq36177);
var seq36177__$1 = cljs.core.next(seq36177);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__36178,seq36177__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36184 = arguments.length;
var i__31460__auto___36185 = (0);
while(true){
if((i__31460__auto___36185 < len__31459__auto___36184)){
args__31466__auto__.push((arguments[i__31460__auto___36185]));

var G__36186 = (i__31460__auto___36185 + (1));
i__31460__auto___36185 = G__36186;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq36182){
var G__36183 = cljs.core.first(seq36182);
var seq36182__$1 = cljs.core.next(seq36182);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__36183,seq36182__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36189 = arguments.length;
var i__31460__auto___36190 = (0);
while(true){
if((i__31460__auto___36190 < len__31459__auto___36189)){
args__31466__auto__.push((arguments[i__31460__auto___36190]));

var G__36191 = (i__31460__auto___36190 + (1));
i__31460__auto___36190 = G__36191;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq36187){
var G__36188 = cljs.core.first(seq36187);
var seq36187__$1 = cljs.core.next(seq36187);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__36188,seq36187__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36194 = arguments.length;
var i__31460__auto___36195 = (0);
while(true){
if((i__31460__auto___36195 < len__31459__auto___36194)){
args__31466__auto__.push((arguments[i__31460__auto___36195]));

var G__36196 = (i__31460__auto___36195 + (1));
i__31460__auto___36195 = G__36196;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq36192){
var G__36193 = cljs.core.first(seq36192);
var seq36192__$1 = cljs.core.next(seq36192);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__36193,seq36192__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36199 = arguments.length;
var i__31460__auto___36200 = (0);
while(true){
if((i__31460__auto___36200 < len__31459__auto___36199)){
args__31466__auto__.push((arguments[i__31460__auto___36200]));

var G__36201 = (i__31460__auto___36200 + (1));
i__31460__auto___36200 = G__36201;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq36197){
var G__36198 = cljs.core.first(seq36197);
var seq36197__$1 = cljs.core.next(seq36197);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__36198,seq36197__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36204 = arguments.length;
var i__31460__auto___36205 = (0);
while(true){
if((i__31460__auto___36205 < len__31459__auto___36204)){
args__31466__auto__.push((arguments[i__31460__auto___36205]));

var G__36206 = (i__31460__auto___36205 + (1));
i__31460__auto___36205 = G__36206;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq36202){
var G__36203 = cljs.core.first(seq36202);
var seq36202__$1 = cljs.core.next(seq36202);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__36203,seq36202__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36209 = arguments.length;
var i__31460__auto___36210 = (0);
while(true){
if((i__31460__auto___36210 < len__31459__auto___36209)){
args__31466__auto__.push((arguments[i__31460__auto___36210]));

var G__36211 = (i__31460__auto___36210 + (1));
i__31460__auto___36210 = G__36211;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__34040__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__34040__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__34040__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq36207){
var G__36208 = cljs.core.first(seq36207);
var seq36207__$1 = cljs.core.next(seq36207);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__36208,seq36207__$1);
});

