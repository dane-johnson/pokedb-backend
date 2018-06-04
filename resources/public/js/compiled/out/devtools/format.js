// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30915__auto__ = (((value == null))?null:value);
var m__30916__auto__ = (devtools.format._header[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,value);
} else {
var m__30916__auto____$1 = (devtools.format._header["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30915__auto__ = (((value == null))?null:value);
var m__30916__auto__ = (devtools.format._has_body[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,value);
} else {
var m__30916__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30915__auto__ = (((value == null))?null:value);
var m__30916__auto__ = (devtools.format._body[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,value);
} else {
var m__30916__auto____$1 = (devtools.format._body["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47660 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47660["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47661 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47661["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47662 = temp__5276__auto____$2;
return (o47662["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47663 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47663["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47664 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47664["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47665 = temp__5276__auto____$2;
return (o47665["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47666 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47666["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47667 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47667["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47668 = temp__5276__auto____$2;
return (o47668["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47669 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47669["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47670 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47670["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47671 = temp__5276__auto____$2;
return (o47671["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47672 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47672["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47673 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47673["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47674 = temp__5276__auto____$2;
return (o47674["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47675 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47675["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47676 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47676["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47677 = temp__5276__auto____$2;
return (o47677["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o47678 = temp__5276__auto__;
var temp__5276__auto____$1 = (o47678["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o47679 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o47679["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o47680 = temp__5276__auto____$2;
return (o47680["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47682 = arguments.length;
var i__31460__auto___47683 = (0);
while(true){
if((i__31460__auto___47683 < len__31459__auto___47682)){
args__31466__auto__.push((arguments[i__31460__auto___47683]));

var G__47684 = (i__31460__auto___47683 + (1));
i__31460__auto___47683 = G__47684;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq47681){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47681));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47686 = arguments.length;
var i__31460__auto___47687 = (0);
while(true){
if((i__31460__auto___47687 < len__31459__auto___47686)){
args__31466__auto__.push((arguments[i__31460__auto___47687]));

var G__47688 = (i__31460__auto___47687 + (1));
i__31460__auto___47687 = G__47688;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq47685){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47685));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47690 = arguments.length;
var i__31460__auto___47691 = (0);
while(true){
if((i__31460__auto___47691 < len__31459__auto___47690)){
args__31466__auto__.push((arguments[i__31460__auto___47691]));

var G__47692 = (i__31460__auto___47691 + (1));
i__31460__auto___47691 = G__47692;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq47689){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47689));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47694 = arguments.length;
var i__31460__auto___47695 = (0);
while(true){
if((i__31460__auto___47695 < len__31459__auto___47694)){
args__31466__auto__.push((arguments[i__31460__auto___47695]));

var G__47696 = (i__31460__auto___47695 + (1));
i__31460__auto___47695 = G__47696;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq47693){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47693));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47698 = arguments.length;
var i__31460__auto___47699 = (0);
while(true){
if((i__31460__auto___47699 < len__31459__auto___47698)){
args__31466__auto__.push((arguments[i__31460__auto___47699]));

var G__47700 = (i__31460__auto___47699 + (1));
i__31460__auto___47699 = G__47700;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq47697){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47697));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47702 = arguments.length;
var i__31460__auto___47703 = (0);
while(true){
if((i__31460__auto___47703 < len__31459__auto___47702)){
args__31466__auto__.push((arguments[i__31460__auto___47703]));

var G__47704 = (i__31460__auto___47703 + (1));
i__31460__auto___47703 = G__47704;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq47701){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47701));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47706 = arguments.length;
var i__31460__auto___47707 = (0);
while(true){
if((i__31460__auto___47707 < len__31459__auto___47706)){
args__31466__auto__.push((arguments[i__31460__auto___47707]));

var G__47708 = (i__31460__auto___47707 + (1));
i__31460__auto___47707 = G__47708;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq47705){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47705));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47716 = arguments.length;
var i__31460__auto___47717 = (0);
while(true){
if((i__31460__auto___47717 < len__31459__auto___47716)){
args__31466__auto__.push((arguments[i__31460__auto___47717]));

var G__47718 = (i__31460__auto___47717 + (1));
i__31460__auto___47717 = G__47718;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__47712){
var vec__47713 = p__47712;
var state_override = cljs.core.nth.call(null,vec__47713,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__47713,state_override){
return (function (p1__47709_SHARP_){
return cljs.core.merge.call(null,p1__47709_SHARP_,state_override);
});})(vec__47713,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq47710){
var G__47711 = cljs.core.first.call(null,seq47710);
var seq47710__$1 = cljs.core.next.call(null,seq47710);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__47711,seq47710__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47720 = arguments.length;
var i__31460__auto___47721 = (0);
while(true){
if((i__31460__auto___47721 < len__31459__auto___47720)){
args__31466__auto__.push((arguments[i__31460__auto___47721]));

var G__47722 = (i__31460__auto___47721 + (1));
i__31460__auto___47721 = G__47722;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq47719){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47719));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47725 = arguments.length;
var i__31460__auto___47726 = (0);
while(true){
if((i__31460__auto___47726 < len__31459__auto___47725)){
args__31466__auto__.push((arguments[i__31460__auto___47726]));

var G__47727 = (i__31460__auto___47726 + (1));
i__31460__auto___47726 = G__47727;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq47723){
var G__47724 = cljs.core.first.call(null,seq47723);
var seq47723__$1 = cljs.core.next.call(null,seq47723);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__47724,seq47723__$1);
});


//# sourceMappingURL=format.js.map?rel=1511550779450
