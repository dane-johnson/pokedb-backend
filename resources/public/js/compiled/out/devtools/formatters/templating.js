// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x48770_48771 = value;
x48770_48771.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x48773_48774 = value;
x48773_48774.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x48776_48777 = value;
x48776_48777.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30170__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30170__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30170__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31466__auto__ = [];
var len__31459__auto___48784 = arguments.length;
var i__31460__auto___48785 = (0);
while(true){
if((i__31460__auto___48785 < len__31459__auto___48784)){
args__31466__auto__.push((arguments[i__31460__auto___48785]));

var G__48786 = (i__31460__auto___48785 + (1));
i__31460__auto___48785 = G__48786;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__48780_48787 = cljs.core.seq.call(null,items);
var chunk__48781_48788 = null;
var count__48782_48789 = (0);
var i__48783_48790 = (0);
while(true){
if((i__48783_48790 < count__48782_48789)){
var item_48791 = cljs.core._nth.call(null,chunk__48781_48788,i__48783_48790);
if(!((item_48791 == null))){
if(cljs.core.coll_QMARK_.call(null,item_48791)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48791)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48791));
}
} else {
}

var G__48792 = seq__48780_48787;
var G__48793 = chunk__48781_48788;
var G__48794 = count__48782_48789;
var G__48795 = (i__48783_48790 + (1));
seq__48780_48787 = G__48792;
chunk__48781_48788 = G__48793;
count__48782_48789 = G__48794;
i__48783_48790 = G__48795;
continue;
} else {
var temp__5278__auto___48796 = cljs.core.seq.call(null,seq__48780_48787);
if(temp__5278__auto___48796){
var seq__48780_48797__$1 = temp__5278__auto___48796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48780_48797__$1)){
var c__31113__auto___48798 = cljs.core.chunk_first.call(null,seq__48780_48797__$1);
var G__48799 = cljs.core.chunk_rest.call(null,seq__48780_48797__$1);
var G__48800 = c__31113__auto___48798;
var G__48801 = cljs.core.count.call(null,c__31113__auto___48798);
var G__48802 = (0);
seq__48780_48787 = G__48799;
chunk__48781_48788 = G__48800;
count__48782_48789 = G__48801;
i__48783_48790 = G__48802;
continue;
} else {
var item_48803 = cljs.core.first.call(null,seq__48780_48797__$1);
if(!((item_48803 == null))){
if(cljs.core.coll_QMARK_.call(null,item_48803)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_48803)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_48803));
}
} else {
}

var G__48804 = cljs.core.next.call(null,seq__48780_48797__$1);
var G__48805 = null;
var G__48806 = (0);
var G__48807 = (0);
seq__48780_48787 = G__48804;
chunk__48781_48788 = G__48805;
count__48782_48789 = G__48806;
i__48783_48790 = G__48807;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq48779){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48779));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31466__auto__ = [];
var len__31459__auto___48815 = arguments.length;
var i__31460__auto___48816 = (0);
while(true){
if((i__31460__auto___48816 < len__31459__auto___48815)){
args__31466__auto__.push((arguments[i__31460__auto___48816]));

var G__48817 = (i__31460__auto___48816 + (1));
i__31460__auto___48816 = G__48817;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((2) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31467__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__48811_48818 = cljs.core.seq.call(null,children);
var chunk__48812_48819 = null;
var count__48813_48820 = (0);
var i__48814_48821 = (0);
while(true){
if((i__48814_48821 < count__48813_48820)){
var child_48822 = cljs.core._nth.call(null,chunk__48812_48819,i__48814_48821);
if(!((child_48822 == null))){
if(cljs.core.coll_QMARK_.call(null,child_48822)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48822))));
} else {
var temp__5276__auto___48823 = devtools.formatters.helpers.pref.call(null,child_48822);
if(cljs.core.truth_(temp__5276__auto___48823)){
var child_value_48824 = temp__5276__auto___48823;
template.push(child_value_48824);
} else {
}
}
} else {
}

var G__48825 = seq__48811_48818;
var G__48826 = chunk__48812_48819;
var G__48827 = count__48813_48820;
var G__48828 = (i__48814_48821 + (1));
seq__48811_48818 = G__48825;
chunk__48812_48819 = G__48826;
count__48813_48820 = G__48827;
i__48814_48821 = G__48828;
continue;
} else {
var temp__5278__auto___48829 = cljs.core.seq.call(null,seq__48811_48818);
if(temp__5278__auto___48829){
var seq__48811_48830__$1 = temp__5278__auto___48829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48811_48830__$1)){
var c__31113__auto___48831 = cljs.core.chunk_first.call(null,seq__48811_48830__$1);
var G__48832 = cljs.core.chunk_rest.call(null,seq__48811_48830__$1);
var G__48833 = c__31113__auto___48831;
var G__48834 = cljs.core.count.call(null,c__31113__auto___48831);
var G__48835 = (0);
seq__48811_48818 = G__48832;
chunk__48812_48819 = G__48833;
count__48813_48820 = G__48834;
i__48814_48821 = G__48835;
continue;
} else {
var child_48836 = cljs.core.first.call(null,seq__48811_48830__$1);
if(!((child_48836 == null))){
if(cljs.core.coll_QMARK_.call(null,child_48836)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_48836))));
} else {
var temp__5276__auto___48837 = devtools.formatters.helpers.pref.call(null,child_48836);
if(cljs.core.truth_(temp__5276__auto___48837)){
var child_value_48838 = temp__5276__auto___48837;
template.push(child_value_48838);
} else {
}
}
} else {
}

var G__48839 = cljs.core.next.call(null,seq__48811_48830__$1);
var G__48840 = null;
var G__48841 = (0);
var G__48842 = (0);
seq__48811_48818 = G__48839;
chunk__48812_48819 = G__48840;
count__48813_48820 = G__48841;
i__48814_48821 = G__48842;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq48808){
var G__48809 = cljs.core.first.call(null,seq48808);
var seq48808__$1 = cljs.core.next.call(null,seq48808);
var G__48810 = cljs.core.first.call(null,seq48808__$1);
var seq48808__$2 = cljs.core.next.call(null,seq48808__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__48809,G__48810,seq48808__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___48845 = arguments.length;
var i__31460__auto___48846 = (0);
while(true){
if((i__31460__auto___48846 < len__31459__auto___48845)){
args__31466__auto__.push((arguments[i__31460__auto___48846]));

var G__48847 = (i__31460__auto___48846 + (1));
i__31460__auto___48846 = G__48847;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq48843){
var G__48844 = cljs.core.first.call(null,seq48843);
var seq48843__$1 = cljs.core.next.call(null,seq48843);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48844,seq48843__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___48850 = arguments.length;
var i__31460__auto___48851 = (0);
while(true){
if((i__31460__auto___48851 < len__31459__auto___48850)){
args__31466__auto__.push((arguments[i__31460__auto___48851]));

var G__48852 = (i__31460__auto___48851 + (1));
i__31460__auto___48851 = G__48852;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq48848){
var G__48849 = cljs.core.first.call(null,seq48848);
var seq48848__$1 = cljs.core.next.call(null,seq48848);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48849,seq48848__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__48854 = arguments.length;
switch (G__48854) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj48856 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30182__auto__ = start_index;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return (0);
}
})()};
return obj48856;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31466__auto__ = [];
var len__31459__auto___48864 = arguments.length;
var i__31460__auto___48865 = (0);
while(true){
if((i__31460__auto___48865 < len__31459__auto___48864)){
args__31466__auto__.push((arguments[i__31460__auto___48865]));

var G__48866 = (i__31460__auto___48865 + (1));
i__31460__auto___48865 = G__48866;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__48860){
var vec__48861 = p__48860;
var state_override_fn = cljs.core.nth.call(null,vec__48861,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq48858){
var G__48859 = cljs.core.first.call(null,seq48858);
var seq48858__$1 = cljs.core.next.call(null,seq48858);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__48859,seq48858__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_48867 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48867;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__48868 = name;
switch (G__48868) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__48870 = tag;
var html_tag = cljs.core.nth.call(null,vec__48870,(0),null);
var style = cljs.core.nth.call(null,vec__48870,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_48873 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48873;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_48874 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_48875 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_48875;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_48874;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__48876 = initial_value;
var G__48877 = value.call(null);
initial_value = G__48876;
value = G__48877;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__48878 = initial_value;
var G__48879 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__48878;
value = G__48879;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__48880 = initial_value;
var G__48881 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__48880;
value = G__48881;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1511550780474
