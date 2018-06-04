// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___49089 = arguments.length;
var i__31460__auto___49090 = (0);
while(true){
if((i__31460__auto___49090 < len__31459__auto___49089)){
args__31466__auto__.push((arguments[i__31460__auto___49090]));

var G__49091 = (i__31460__auto___49090 + (1));
i__31460__auto___49090 = G__49091;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__49084){
var vec__49085 = p__49084;
var context = cljs.core.nth.call(null,vec__49085,(0),null);
var footer = cljs.core.nth.call(null,vec__49085,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__30182__auto__ = e.message;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e49088){var e__$1 = e49088;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq49082){
var G__49083 = cljs.core.first.call(null,seq49082);
var seq49082__$1 = cljs.core.next.call(null,seq49082);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49083,seq49082__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1511550780763
