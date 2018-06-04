// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e47115){if((e47115 instanceof Error)){
var e = e47115;
return "Error: Unable to stringify";
} else {
throw e47115;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__47118 = arguments.length;
switch (G__47118) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__47116_SHARP_){
if(typeof p1__47116_SHARP_ === 'string'){
return p1__47116_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__47116_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47121 = arguments.length;
var i__31460__auto___47122 = (0);
while(true){
if((i__31460__auto___47122 < len__31459__auto___47121)){
args__31466__auto__.push((arguments[i__31460__auto___47122]));

var G__47123 = (i__31460__auto___47122 + (1));
i__31460__auto___47122 = G__47123;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47120){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47120));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47125 = arguments.length;
var i__31460__auto___47126 = (0);
while(true){
if((i__31460__auto___47126 < len__31459__auto___47125)){
args__31466__auto__.push((arguments[i__31460__auto___47126]));

var G__47127 = (i__31460__auto___47126 + (1));
i__31460__auto___47126 = G__47127;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47124){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47124));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47128){
var map__47129 = p__47128;
var map__47129__$1 = ((((!((map__47129 == null)))?((((map__47129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47129):map__47129);
var message = cljs.core.get.call(null,map__47129__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47129__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30182__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30170__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30170__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30170__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33146__auto___47208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___47208,ch){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___47208,ch){
return (function (state_47180){
var state_val_47181 = (state_47180[(1)]);
if((state_val_47181 === (7))){
var inst_47176 = (state_47180[(2)]);
var state_47180__$1 = state_47180;
var statearr_47182_47209 = state_47180__$1;
(statearr_47182_47209[(2)] = inst_47176);

(statearr_47182_47209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (1))){
var state_47180__$1 = state_47180;
var statearr_47183_47210 = state_47180__$1;
(statearr_47183_47210[(2)] = null);

(statearr_47183_47210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (4))){
var inst_47133 = (state_47180[(7)]);
var inst_47133__$1 = (state_47180[(2)]);
var state_47180__$1 = (function (){var statearr_47184 = state_47180;
(statearr_47184[(7)] = inst_47133__$1);

return statearr_47184;
})();
if(cljs.core.truth_(inst_47133__$1)){
var statearr_47185_47211 = state_47180__$1;
(statearr_47185_47211[(1)] = (5));

} else {
var statearr_47186_47212 = state_47180__$1;
(statearr_47186_47212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (15))){
var inst_47140 = (state_47180[(8)]);
var inst_47155 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47140);
var inst_47156 = cljs.core.first.call(null,inst_47155);
var inst_47157 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47156);
var inst_47158 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47157)].join('');
var inst_47159 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47158);
var state_47180__$1 = state_47180;
var statearr_47187_47213 = state_47180__$1;
(statearr_47187_47213[(2)] = inst_47159);

(statearr_47187_47213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (13))){
var inst_47164 = (state_47180[(2)]);
var state_47180__$1 = state_47180;
var statearr_47188_47214 = state_47180__$1;
(statearr_47188_47214[(2)] = inst_47164);

(statearr_47188_47214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (6))){
var state_47180__$1 = state_47180;
var statearr_47189_47215 = state_47180__$1;
(statearr_47189_47215[(2)] = null);

(statearr_47189_47215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (17))){
var inst_47162 = (state_47180[(2)]);
var state_47180__$1 = state_47180;
var statearr_47190_47216 = state_47180__$1;
(statearr_47190_47216[(2)] = inst_47162);

(statearr_47190_47216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (3))){
var inst_47178 = (state_47180[(2)]);
var state_47180__$1 = state_47180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47180__$1,inst_47178);
} else {
if((state_val_47181 === (12))){
var inst_47139 = (state_47180[(9)]);
var inst_47153 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47139,opts);
var state_47180__$1 = state_47180;
if(cljs.core.truth_(inst_47153)){
var statearr_47191_47217 = state_47180__$1;
(statearr_47191_47217[(1)] = (15));

} else {
var statearr_47192_47218 = state_47180__$1;
(statearr_47192_47218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (2))){
var state_47180__$1 = state_47180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47180__$1,(4),ch);
} else {
if((state_val_47181 === (11))){
var inst_47140 = (state_47180[(8)]);
var inst_47145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47146 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47140);
var inst_47147 = cljs.core.async.timeout.call(null,(1000));
var inst_47148 = [inst_47146,inst_47147];
var inst_47149 = (new cljs.core.PersistentVector(null,2,(5),inst_47145,inst_47148,null));
var state_47180__$1 = state_47180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47180__$1,(14),inst_47149);
} else {
if((state_val_47181 === (9))){
var inst_47140 = (state_47180[(8)]);
var inst_47166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47167 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47140);
var inst_47168 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47167);
var inst_47169 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47168)].join('');
var inst_47170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47169);
var state_47180__$1 = (function (){var statearr_47193 = state_47180;
(statearr_47193[(10)] = inst_47166);

return statearr_47193;
})();
var statearr_47194_47219 = state_47180__$1;
(statearr_47194_47219[(2)] = inst_47170);

(statearr_47194_47219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (5))){
var inst_47133 = (state_47180[(7)]);
var inst_47135 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47136 = (new cljs.core.PersistentArrayMap(null,2,inst_47135,null));
var inst_47137 = (new cljs.core.PersistentHashSet(null,inst_47136,null));
var inst_47138 = figwheel.client.focus_msgs.call(null,inst_47137,inst_47133);
var inst_47139 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47138);
var inst_47140 = cljs.core.first.call(null,inst_47138);
var inst_47141 = figwheel.client.autoload_QMARK_.call(null);
var state_47180__$1 = (function (){var statearr_47195 = state_47180;
(statearr_47195[(8)] = inst_47140);

(statearr_47195[(9)] = inst_47139);

return statearr_47195;
})();
if(cljs.core.truth_(inst_47141)){
var statearr_47196_47220 = state_47180__$1;
(statearr_47196_47220[(1)] = (8));

} else {
var statearr_47197_47221 = state_47180__$1;
(statearr_47197_47221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (14))){
var inst_47151 = (state_47180[(2)]);
var state_47180__$1 = state_47180;
var statearr_47198_47222 = state_47180__$1;
(statearr_47198_47222[(2)] = inst_47151);

(statearr_47198_47222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (16))){
var state_47180__$1 = state_47180;
var statearr_47199_47223 = state_47180__$1;
(statearr_47199_47223[(2)] = null);

(statearr_47199_47223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (10))){
var inst_47172 = (state_47180[(2)]);
var state_47180__$1 = (function (){var statearr_47200 = state_47180;
(statearr_47200[(11)] = inst_47172);

return statearr_47200;
})();
var statearr_47201_47224 = state_47180__$1;
(statearr_47201_47224[(2)] = null);

(statearr_47201_47224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47181 === (8))){
var inst_47139 = (state_47180[(9)]);
var inst_47143 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47139,opts);
var state_47180__$1 = state_47180;
if(cljs.core.truth_(inst_47143)){
var statearr_47202_47225 = state_47180__$1;
(statearr_47202_47225[(1)] = (11));

} else {
var statearr_47203_47226 = state_47180__$1;
(statearr_47203_47226[(1)] = (12));

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
});})(c__33146__auto___47208,ch))
;
return ((function (switch__33123__auto__,c__33146__auto___47208,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____0 = (function (){
var statearr_47204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47204[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__);

(statearr_47204[(1)] = (1));

return statearr_47204;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____1 = (function (state_47180){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_47180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e47205){if((e47205 instanceof Object)){
var ex__33127__auto__ = e47205;
var statearr_47206_47227 = state_47180;
(statearr_47206_47227[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47228 = state_47180;
state_47180 = G__47228;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__ = function(state_47180){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____1.call(this,state_47180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33124__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___47208,ch))
})();
var state__33148__auto__ = (function (){var statearr_47207 = f__33147__auto__.call(null);
(statearr_47207[(6)] = c__33146__auto___47208);

return statearr_47207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___47208,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47229_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47229_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47231 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47231){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47230){if((e47230 instanceof Error)){
var e = e47230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47231], null));
} else {
var e = e47230;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47231))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47232){
var map__47233 = p__47232;
var map__47233__$1 = ((((!((map__47233 == null)))?((((map__47233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47233):map__47233);
var opts = map__47233__$1;
var build_id = cljs.core.get.call(null,map__47233__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47233,map__47233__$1,opts,build_id){
return (function (p__47235){
var vec__47236 = p__47235;
var seq__47237 = cljs.core.seq.call(null,vec__47236);
var first__47238 = cljs.core.first.call(null,seq__47237);
var seq__47237__$1 = cljs.core.next.call(null,seq__47237);
var map__47239 = first__47238;
var map__47239__$1 = ((((!((map__47239 == null)))?((((map__47239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47239):map__47239);
var msg = map__47239__$1;
var msg_name = cljs.core.get.call(null,map__47239__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47237__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47236,seq__47237,first__47238,seq__47237__$1,map__47239,map__47239__$1,msg,msg_name,_,map__47233,map__47233__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47236,seq__47237,first__47238,seq__47237__$1,map__47239,map__47239__$1,msg,msg_name,_,map__47233,map__47233__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47233,map__47233__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47241){
var vec__47242 = p__47241;
var seq__47243 = cljs.core.seq.call(null,vec__47242);
var first__47244 = cljs.core.first.call(null,seq__47243);
var seq__47243__$1 = cljs.core.next.call(null,seq__47243);
var map__47245 = first__47244;
var map__47245__$1 = ((((!((map__47245 == null)))?((((map__47245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47245):map__47245);
var msg = map__47245__$1;
var msg_name = cljs.core.get.call(null,map__47245__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47243__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47247){
var map__47248 = p__47247;
var map__47248__$1 = ((((!((map__47248 == null)))?((((map__47248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47248):map__47248);
var on_compile_warning = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47248__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47248,map__47248__$1,on_compile_warning,on_compile_fail){
return (function (p__47250){
var vec__47251 = p__47250;
var seq__47252 = cljs.core.seq.call(null,vec__47251);
var first__47253 = cljs.core.first.call(null,seq__47252);
var seq__47252__$1 = cljs.core.next.call(null,seq__47252);
var map__47254 = first__47253;
var map__47254__$1 = ((((!((map__47254 == null)))?((((map__47254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47254):map__47254);
var msg = map__47254__$1;
var msg_name = cljs.core.get.call(null,map__47254__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47252__$1;
var pred__47256 = cljs.core._EQ_;
var expr__47257 = msg_name;
if(cljs.core.truth_(pred__47256.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47257))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47256.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47257))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47248,map__47248__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__,msg_hist,msg_names,msg){
return (function (state_47346){
var state_val_47347 = (state_47346[(1)]);
if((state_val_47347 === (7))){
var inst_47266 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47266)){
var statearr_47348_47395 = state_47346__$1;
(statearr_47348_47395[(1)] = (8));

} else {
var statearr_47349_47396 = state_47346__$1;
(statearr_47349_47396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (20))){
var inst_47340 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47350_47397 = state_47346__$1;
(statearr_47350_47397[(2)] = inst_47340);

(statearr_47350_47397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (27))){
var inst_47336 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47351_47398 = state_47346__$1;
(statearr_47351_47398[(2)] = inst_47336);

(statearr_47351_47398[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (1))){
var inst_47259 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47259)){
var statearr_47352_47399 = state_47346__$1;
(statearr_47352_47399[(1)] = (2));

} else {
var statearr_47353_47400 = state_47346__$1;
(statearr_47353_47400[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (24))){
var inst_47338 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47354_47401 = state_47346__$1;
(statearr_47354_47401[(2)] = inst_47338);

(statearr_47354_47401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (4))){
var inst_47344 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47346__$1,inst_47344);
} else {
if((state_val_47347 === (15))){
var inst_47342 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47355_47402 = state_47346__$1;
(statearr_47355_47402[(2)] = inst_47342);

(statearr_47355_47402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (21))){
var inst_47295 = (state_47346[(2)]);
var inst_47296 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47297 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47296);
var state_47346__$1 = (function (){var statearr_47356 = state_47346;
(statearr_47356[(7)] = inst_47295);

return statearr_47356;
})();
var statearr_47357_47403 = state_47346__$1;
(statearr_47357_47403[(2)] = inst_47297);

(statearr_47357_47403[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (31))){
var inst_47325 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47325)){
var statearr_47358_47404 = state_47346__$1;
(statearr_47358_47404[(1)] = (34));

} else {
var statearr_47359_47405 = state_47346__$1;
(statearr_47359_47405[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (32))){
var inst_47334 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47360_47406 = state_47346__$1;
(statearr_47360_47406[(2)] = inst_47334);

(statearr_47360_47406[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (33))){
var inst_47321 = (state_47346[(2)]);
var inst_47322 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47323 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47322);
var state_47346__$1 = (function (){var statearr_47361 = state_47346;
(statearr_47361[(8)] = inst_47321);

return statearr_47361;
})();
var statearr_47362_47407 = state_47346__$1;
(statearr_47362_47407[(2)] = inst_47323);

(statearr_47362_47407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (13))){
var inst_47280 = figwheel.client.heads_up.clear.call(null);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(16),inst_47280);
} else {
if((state_val_47347 === (22))){
var inst_47301 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47302 = figwheel.client.heads_up.append_warning_message.call(null,inst_47301);
var state_47346__$1 = state_47346;
var statearr_47363_47408 = state_47346__$1;
(statearr_47363_47408[(2)] = inst_47302);

(statearr_47363_47408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (36))){
var inst_47332 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47364_47409 = state_47346__$1;
(statearr_47364_47409[(2)] = inst_47332);

(statearr_47364_47409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (29))){
var inst_47312 = (state_47346[(2)]);
var inst_47313 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47314 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47313);
var state_47346__$1 = (function (){var statearr_47365 = state_47346;
(statearr_47365[(9)] = inst_47312);

return statearr_47365;
})();
var statearr_47366_47410 = state_47346__$1;
(statearr_47366_47410[(2)] = inst_47314);

(statearr_47366_47410[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (6))){
var inst_47261 = (state_47346[(10)]);
var state_47346__$1 = state_47346;
var statearr_47367_47411 = state_47346__$1;
(statearr_47367_47411[(2)] = inst_47261);

(statearr_47367_47411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (28))){
var inst_47308 = (state_47346[(2)]);
var inst_47309 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47310 = figwheel.client.heads_up.display_warning.call(null,inst_47309);
var state_47346__$1 = (function (){var statearr_47368 = state_47346;
(statearr_47368[(11)] = inst_47308);

return statearr_47368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(29),inst_47310);
} else {
if((state_val_47347 === (25))){
var inst_47306 = figwheel.client.heads_up.clear.call(null);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(28),inst_47306);
} else {
if((state_val_47347 === (34))){
var inst_47327 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(37),inst_47327);
} else {
if((state_val_47347 === (17))){
var inst_47286 = (state_47346[(2)]);
var inst_47287 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47288 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47287);
var state_47346__$1 = (function (){var statearr_47369 = state_47346;
(statearr_47369[(12)] = inst_47286);

return statearr_47369;
})();
var statearr_47370_47412 = state_47346__$1;
(statearr_47370_47412[(2)] = inst_47288);

(statearr_47370_47412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (3))){
var inst_47278 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47278)){
var statearr_47371_47413 = state_47346__$1;
(statearr_47371_47413[(1)] = (13));

} else {
var statearr_47372_47414 = state_47346__$1;
(statearr_47372_47414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (12))){
var inst_47274 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47373_47415 = state_47346__$1;
(statearr_47373_47415[(2)] = inst_47274);

(statearr_47373_47415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (2))){
var inst_47261 = (state_47346[(10)]);
var inst_47261__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47346__$1 = (function (){var statearr_47374 = state_47346;
(statearr_47374[(10)] = inst_47261__$1);

return statearr_47374;
})();
if(cljs.core.truth_(inst_47261__$1)){
var statearr_47375_47416 = state_47346__$1;
(statearr_47375_47416[(1)] = (5));

} else {
var statearr_47376_47417 = state_47346__$1;
(statearr_47376_47417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (23))){
var inst_47304 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47304)){
var statearr_47377_47418 = state_47346__$1;
(statearr_47377_47418[(1)] = (25));

} else {
var statearr_47378_47419 = state_47346__$1;
(statearr_47378_47419[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (35))){
var state_47346__$1 = state_47346;
var statearr_47379_47420 = state_47346__$1;
(statearr_47379_47420[(2)] = null);

(statearr_47379_47420[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (19))){
var inst_47299 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47299)){
var statearr_47380_47421 = state_47346__$1;
(statearr_47380_47421[(1)] = (22));

} else {
var statearr_47381_47422 = state_47346__$1;
(statearr_47381_47422[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (11))){
var inst_47270 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47382_47423 = state_47346__$1;
(statearr_47382_47423[(2)] = inst_47270);

(statearr_47382_47423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (9))){
var inst_47272 = figwheel.client.heads_up.clear.call(null);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(12),inst_47272);
} else {
if((state_val_47347 === (5))){
var inst_47263 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47346__$1 = state_47346;
var statearr_47383_47424 = state_47346__$1;
(statearr_47383_47424[(2)] = inst_47263);

(statearr_47383_47424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (14))){
var inst_47290 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47290)){
var statearr_47384_47425 = state_47346__$1;
(statearr_47384_47425[(1)] = (18));

} else {
var statearr_47385_47426 = state_47346__$1;
(statearr_47385_47426[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (26))){
var inst_47316 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47346__$1 = state_47346;
if(cljs.core.truth_(inst_47316)){
var statearr_47386_47427 = state_47346__$1;
(statearr_47386_47427[(1)] = (30));

} else {
var statearr_47387_47428 = state_47346__$1;
(statearr_47387_47428[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (16))){
var inst_47282 = (state_47346[(2)]);
var inst_47283 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47284 = figwheel.client.heads_up.display_exception.call(null,inst_47283);
var state_47346__$1 = (function (){var statearr_47388 = state_47346;
(statearr_47388[(13)] = inst_47282);

return statearr_47388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(17),inst_47284);
} else {
if((state_val_47347 === (30))){
var inst_47318 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47319 = figwheel.client.heads_up.display_warning.call(null,inst_47318);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(33),inst_47319);
} else {
if((state_val_47347 === (10))){
var inst_47276 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47389_47429 = state_47346__$1;
(statearr_47389_47429[(2)] = inst_47276);

(statearr_47389_47429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (18))){
var inst_47292 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47293 = figwheel.client.heads_up.display_exception.call(null,inst_47292);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(21),inst_47293);
} else {
if((state_val_47347 === (37))){
var inst_47329 = (state_47346[(2)]);
var state_47346__$1 = state_47346;
var statearr_47390_47430 = state_47346__$1;
(statearr_47390_47430[(2)] = inst_47329);

(statearr_47390_47430[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47347 === (8))){
var inst_47268 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47346__$1 = state_47346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47346__$1,(11),inst_47268);
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
});})(c__33146__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33123__auto__,c__33146__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____0 = (function (){
var statearr_47391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47391[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__);

(statearr_47391[(1)] = (1));

return statearr_47391;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____1 = (function (state_47346){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_47346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e47392){if((e47392 instanceof Object)){
var ex__33127__auto__ = e47392;
var statearr_47393_47431 = state_47346;
(statearr_47393_47431[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47432 = state_47346;
state_47346 = G__47432;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__ = function(state_47346){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____1.call(this,state_47346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__,msg_hist,msg_names,msg))
})();
var state__33148__auto__ = (function (){var statearr_47394 = f__33147__auto__.call(null);
(statearr_47394[(6)] = c__33146__auto__);

return statearr_47394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__,msg_hist,msg_names,msg))
);

return c__33146__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33146__auto___47461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___47461,ch){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___47461,ch){
return (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (1))){
var state_47447__$1 = state_47447;
var statearr_47449_47462 = state_47447__$1;
(statearr_47449_47462[(2)] = null);

(statearr_47449_47462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (2))){
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47447__$1,(4),ch);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (4))){
var inst_47435 = (state_47447[(7)]);
var inst_47435__$1 = (state_47447[(2)]);
var state_47447__$1 = (function (){var statearr_47450 = state_47447;
(statearr_47450[(7)] = inst_47435__$1);

return statearr_47450;
})();
if(cljs.core.truth_(inst_47435__$1)){
var statearr_47451_47463 = state_47447__$1;
(statearr_47451_47463[(1)] = (5));

} else {
var statearr_47452_47464 = state_47447__$1;
(statearr_47452_47464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (5))){
var inst_47435 = (state_47447[(7)]);
var inst_47437 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47435);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47447__$1,(8),inst_47437);
} else {
if((state_val_47448 === (6))){
var state_47447__$1 = state_47447;
var statearr_47453_47465 = state_47447__$1;
(statearr_47453_47465[(2)] = null);

(statearr_47453_47465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (7))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47454_47466 = state_47447__$1;
(statearr_47454_47466[(2)] = inst_47443);

(statearr_47454_47466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (8))){
var inst_47439 = (state_47447[(2)]);
var state_47447__$1 = (function (){var statearr_47455 = state_47447;
(statearr_47455[(8)] = inst_47439);

return statearr_47455;
})();
var statearr_47456_47467 = state_47447__$1;
(statearr_47456_47467[(2)] = null);

(statearr_47456_47467[(1)] = (2));


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
});})(c__33146__auto___47461,ch))
;
return ((function (switch__33123__auto__,c__33146__auto___47461,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33124__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33124__auto____0 = (function (){
var statearr_47457 = [null,null,null,null,null,null,null,null,null];
(statearr_47457[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33124__auto__);

(statearr_47457[(1)] = (1));

return statearr_47457;
});
var figwheel$client$heads_up_plugin_$_state_machine__33124__auto____1 = (function (state_47447){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_47447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e47458){if((e47458 instanceof Object)){
var ex__33127__auto__ = e47458;
var statearr_47459_47468 = state_47447;
(statearr_47459_47468[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47469 = state_47447;
state_47447 = G__47469;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33124__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33124__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33124__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33124__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___47461,ch))
})();
var state__33148__auto__ = (function (){var statearr_47460 = f__33147__auto__.call(null);
(statearr_47460[(6)] = c__33146__auto___47461);

return statearr_47460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___47461,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__){
return (function (state_47475){
var state_val_47476 = (state_47475[(1)]);
if((state_val_47476 === (1))){
var inst_47470 = cljs.core.async.timeout.call(null,(3000));
var state_47475__$1 = state_47475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47475__$1,(2),inst_47470);
} else {
if((state_val_47476 === (2))){
var inst_47472 = (state_47475[(2)]);
var inst_47473 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47475__$1 = (function (){var statearr_47477 = state_47475;
(statearr_47477[(7)] = inst_47472);

return statearr_47477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47475__$1,inst_47473);
} else {
return null;
}
}
});})(c__33146__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____0 = (function (){
var statearr_47478 = [null,null,null,null,null,null,null,null];
(statearr_47478[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__);

(statearr_47478[(1)] = (1));

return statearr_47478;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____1 = (function (state_47475){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_47475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e47479){if((e47479 instanceof Object)){
var ex__33127__auto__ = e47479;
var statearr_47480_47482 = state_47475;
(statearr_47480_47482[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47483 = state_47475;
state_47475 = G__47483;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__ = function(state_47475){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____1.call(this,state_47475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33124__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__))
})();
var state__33148__auto__ = (function (){var statearr_47481 = f__33147__auto__.call(null);
(statearr_47481[(6)] = c__33146__auto__);

return statearr_47481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__))
);

return c__33146__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__,figwheel_version,temp__5278__auto__){
return (function (state_47490){
var state_val_47491 = (state_47490[(1)]);
if((state_val_47491 === (1))){
var inst_47484 = cljs.core.async.timeout.call(null,(2000));
var state_47490__$1 = state_47490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47490__$1,(2),inst_47484);
} else {
if((state_val_47491 === (2))){
var inst_47486 = (state_47490[(2)]);
var inst_47487 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_47488 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47487);
var state_47490__$1 = (function (){var statearr_47492 = state_47490;
(statearr_47492[(7)] = inst_47486);

return statearr_47492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47490__$1,inst_47488);
} else {
return null;
}
}
});})(c__33146__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____0 = (function (){
var statearr_47493 = [null,null,null,null,null,null,null,null];
(statearr_47493[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__);

(statearr_47493[(1)] = (1));

return statearr_47493;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____1 = (function (state_47490){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_47490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e47494){if((e47494 instanceof Object)){
var ex__33127__auto__ = e47494;
var statearr_47495_47497 = state_47490;
(statearr_47495_47497[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47498 = state_47490;
state_47490 = G__47498;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__ = function(state_47490){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____1.call(this,state_47490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33148__auto__ = (function (){var statearr_47496 = f__33147__auto__.call(null);
(statearr_47496[(6)] = c__33146__auto__);

return statearr_47496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__,figwheel_version,temp__5278__auto__))
);

return c__33146__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47499){
var map__47500 = p__47499;
var map__47500__$1 = ((((!((map__47500 == null)))?((((map__47500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47500):map__47500);
var file = cljs.core.get.call(null,map__47500__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47500__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47500__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47502 = "";
var G__47502__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47502),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__47502);
var G__47502__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47502__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__47502__$1);
if(cljs.core.truth_((function (){var and__30170__auto__ = line;
if(cljs.core.truth_(and__30170__auto__)){
return column;
} else {
return and__30170__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47502__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__47502__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47503){
var map__47504 = p__47503;
var map__47504__$1 = ((((!((map__47504 == null)))?((((map__47504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47504):map__47504);
var ed = map__47504__$1;
var formatted_exception = cljs.core.get.call(null,map__47504__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47504__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47504__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47506_47510 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47507_47511 = null;
var count__47508_47512 = (0);
var i__47509_47513 = (0);
while(true){
if((i__47509_47513 < count__47508_47512)){
var msg_47514 = cljs.core._nth.call(null,chunk__47507_47511,i__47509_47513);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47514);

var G__47515 = seq__47506_47510;
var G__47516 = chunk__47507_47511;
var G__47517 = count__47508_47512;
var G__47518 = (i__47509_47513 + (1));
seq__47506_47510 = G__47515;
chunk__47507_47511 = G__47516;
count__47508_47512 = G__47517;
i__47509_47513 = G__47518;
continue;
} else {
var temp__5278__auto___47519 = cljs.core.seq.call(null,seq__47506_47510);
if(temp__5278__auto___47519){
var seq__47506_47520__$1 = temp__5278__auto___47519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47506_47520__$1)){
var c__31113__auto___47521 = cljs.core.chunk_first.call(null,seq__47506_47520__$1);
var G__47522 = cljs.core.chunk_rest.call(null,seq__47506_47520__$1);
var G__47523 = c__31113__auto___47521;
var G__47524 = cljs.core.count.call(null,c__31113__auto___47521);
var G__47525 = (0);
seq__47506_47510 = G__47522;
chunk__47507_47511 = G__47523;
count__47508_47512 = G__47524;
i__47509_47513 = G__47525;
continue;
} else {
var msg_47526 = cljs.core.first.call(null,seq__47506_47520__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47526);

var G__47527 = cljs.core.next.call(null,seq__47506_47520__$1);
var G__47528 = null;
var G__47529 = (0);
var G__47530 = (0);
seq__47506_47510 = G__47527;
chunk__47507_47511 = G__47528;
count__47508_47512 = G__47529;
i__47509_47513 = G__47530;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47531){
var map__47532 = p__47531;
var map__47532__$1 = ((((!((map__47532 == null)))?((((map__47532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47532):map__47532);
var w = map__47532__$1;
var message = cljs.core.get.call(null,map__47532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30170__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30170__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30170__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__47534 = cljs.core.seq.call(null,plugins);
var chunk__47535 = null;
var count__47536 = (0);
var i__47537 = (0);
while(true){
if((i__47537 < count__47536)){
var vec__47538 = cljs.core._nth.call(null,chunk__47535,i__47537);
var k = cljs.core.nth.call(null,vec__47538,(0),null);
var plugin = cljs.core.nth.call(null,vec__47538,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47534,chunk__47535,count__47536,i__47537,pl_47544,vec__47538,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47544.call(null,msg_hist);
});})(seq__47534,chunk__47535,count__47536,i__47537,pl_47544,vec__47538,k,plugin))
);
} else {
}

var G__47545 = seq__47534;
var G__47546 = chunk__47535;
var G__47547 = count__47536;
var G__47548 = (i__47537 + (1));
seq__47534 = G__47545;
chunk__47535 = G__47546;
count__47536 = G__47547;
i__47537 = G__47548;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__47534);
if(temp__5278__auto__){
var seq__47534__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47534__$1)){
var c__31113__auto__ = cljs.core.chunk_first.call(null,seq__47534__$1);
var G__47549 = cljs.core.chunk_rest.call(null,seq__47534__$1);
var G__47550 = c__31113__auto__;
var G__47551 = cljs.core.count.call(null,c__31113__auto__);
var G__47552 = (0);
seq__47534 = G__47549;
chunk__47535 = G__47550;
count__47536 = G__47551;
i__47537 = G__47552;
continue;
} else {
var vec__47541 = cljs.core.first.call(null,seq__47534__$1);
var k = cljs.core.nth.call(null,vec__47541,(0),null);
var plugin = cljs.core.nth.call(null,vec__47541,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47553 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47534,chunk__47535,count__47536,i__47537,pl_47553,vec__47541,k,plugin,seq__47534__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47553.call(null,msg_hist);
});})(seq__47534,chunk__47535,count__47536,i__47537,pl_47553,vec__47541,k,plugin,seq__47534__$1,temp__5278__auto__))
);
} else {
}

var G__47554 = cljs.core.next.call(null,seq__47534__$1);
var G__47555 = null;
var G__47556 = (0);
var G__47557 = (0);
seq__47534 = G__47554;
chunk__47535 = G__47555;
count__47536 = G__47556;
i__47537 = G__47557;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__47559 = arguments.length;
switch (G__47559) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__47560_47565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47561_47566 = null;
var count__47562_47567 = (0);
var i__47563_47568 = (0);
while(true){
if((i__47563_47568 < count__47562_47567)){
var msg_47569 = cljs.core._nth.call(null,chunk__47561_47566,i__47563_47568);
figwheel.client.socket.handle_incoming_message.call(null,msg_47569);

var G__47570 = seq__47560_47565;
var G__47571 = chunk__47561_47566;
var G__47572 = count__47562_47567;
var G__47573 = (i__47563_47568 + (1));
seq__47560_47565 = G__47570;
chunk__47561_47566 = G__47571;
count__47562_47567 = G__47572;
i__47563_47568 = G__47573;
continue;
} else {
var temp__5278__auto___47574 = cljs.core.seq.call(null,seq__47560_47565);
if(temp__5278__auto___47574){
var seq__47560_47575__$1 = temp__5278__auto___47574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47560_47575__$1)){
var c__31113__auto___47576 = cljs.core.chunk_first.call(null,seq__47560_47575__$1);
var G__47577 = cljs.core.chunk_rest.call(null,seq__47560_47575__$1);
var G__47578 = c__31113__auto___47576;
var G__47579 = cljs.core.count.call(null,c__31113__auto___47576);
var G__47580 = (0);
seq__47560_47565 = G__47577;
chunk__47561_47566 = G__47578;
count__47562_47567 = G__47579;
i__47563_47568 = G__47580;
continue;
} else {
var msg_47581 = cljs.core.first.call(null,seq__47560_47575__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47581);

var G__47582 = cljs.core.next.call(null,seq__47560_47575__$1);
var G__47583 = null;
var G__47584 = (0);
var G__47585 = (0);
seq__47560_47565 = G__47582;
chunk__47561_47566 = G__47583;
count__47562_47567 = G__47584;
i__47563_47568 = G__47585;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31466__auto__ = [];
var len__31459__auto___47590 = arguments.length;
var i__31460__auto___47591 = (0);
while(true){
if((i__31460__auto___47591 < len__31459__auto___47590)){
args__31466__auto__.push((arguments[i__31460__auto___47591]));

var G__47592 = (i__31460__auto___47591 + (1));
i__31460__auto___47591 = G__47592;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47587){
var map__47588 = p__47587;
var map__47588__$1 = ((((!((map__47588 == null)))?((((map__47588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47588):map__47588);
var opts = map__47588__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47586){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47586));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47593){if((e47593 instanceof Error)){
var e = e47593;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47593;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__47594){
var map__47595 = p__47594;
var map__47595__$1 = ((((!((map__47595 == null)))?((((map__47595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47595):map__47595);
var msg_name = cljs.core.get.call(null,map__47595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511550761698
