// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pokedb_frontend.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('pokedb_frontend.ajax');
goog.require('pokedb_frontend.background');
goog.require('pokedb_frontend.add_pokemon');
cljs.core.enable_console_print_BANG_();
(pokedb_frontend.ajax.get_trainers.cljs$core$IFn$_invoke$arity$0 ? pokedb_frontend.ajax.get_trainers.cljs$core$IFn$_invoke$arity$0() : pokedb_frontend.ajax.get_trainers.call(null));
pokedb_frontend.core.on_age_change = (function pokedb_frontend$core$on_age_change(e){
var age = (function (){var G__36614 = e.target.value;
return cljs.reader.read_string(G__36614);
})();
var number = (function (){var G__36615 = e.target.name;
return cljs.reader.read_string(G__36615);
})();
pokedb_frontend.ajax.set_age(number,age);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pokedb_frontend.ajax.trainers,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,cljs.core.cst$kw$age], null),age);
});
pokedb_frontend.core.trainers_div = (function pokedb_frontend$core$trainers_div(p__36616){
var vec__36617 = p__36616;
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(t),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,(255),cljs.core.cst$kw$value,cljs.core.cst$kw$age.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$name,number,cljs.core.cst$kw$on_DASH_change,pokedb_frontend.core.on_age_change], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn btn-primary",cljs.core.cst$kw$on_DASH_click,((function (vec__36617,number,t){
return (function (){
return pokedb_frontend.ajax.get_pokemons(number);
});})(vec__36617,number,t))
], null),"Show Pokemon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"btn btn-primary",cljs.core.cst$kw$data_DASH_toggle,"modal",cljs.core.cst$kw$data_DASH_target,"#add-pokemon-modal",cljs.core.cst$kw$on_DASH_click,((function (vec__36617,number,t){
return (function (){
return cljs.core.reset_BANG_(pokedb_frontend.add_pokemon.selected_trainer,number);
});})(vec__36617,number,t))
], null),"Add Pokemon"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,number], null));
});
pokedb_frontend.core.trainers_view = (function pokedb_frontend$core$trainers_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.core.trainers_div,cljs.core.deref(pokedb_frontend.ajax.trainers))], null);
});
pokedb_frontend.core.on_delete_pokemon = (function pokedb_frontend$core$on_delete_pokemon(no){
pokedb_frontend.ajax.delete_pokemon(no);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pokedb_frontend.ajax.pokemons,cljs.core.dissoc,no);
});
pokedb_frontend.core.pokemons_div = (function pokedb_frontend$core$pokemons_div(p__36620){
var vec__36621 = p__36620;
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36621,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,(function (){var or__30182__auto__ = cljs.core.cst$kw$nickname.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return cljs.core.cst$kw$speciesname.cljs$core$IFn$_invoke$arity$1(p);
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn btn-danger",cljs.core.cst$kw$on_DASH_click,((function (vec__36621,number,p){
return (function (){
return pokedb_frontend.core.on_delete_pokemon(number);
});})(vec__36621,number,p))
], null),"Delete"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,number], null));
});
pokedb_frontend.core.pokemons_view = (function pokedb_frontend$core$pokemons_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_sm,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.core.pokemons_div,cljs.core.deref(pokedb_frontend.ajax.pokemons))], null);
});
pokedb_frontend.core.foreground = (function pokedb_frontend$core$foreground(var_args){
var args__31466__auto__ = [];
var len__31459__auto___36625 = arguments.length;
var i__31460__auto___36626 = (0);
while(true){
if((i__31460__auto___36626 < len__31459__auto___36625)){
args__31466__auto__.push((arguments[i__31460__auto___36626]));

var G__36627 = (i__31460__auto___36626 + (1));
i__31460__auto___36626 = G__36627;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((0) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((0)),(0),null)):null);
return pokedb_frontend.core.foreground.cljs$core$IFn$_invoke$arity$variadic(argseq__31467__auto__);
});

pokedb_frontend.core.foreground.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,children], null)], null);
});

pokedb_frontend.core.foreground.cljs$lang$maxFixedArity = (0);

pokedb_frontend.core.foreground.cljs$lang$applyTo = (function (seq36624){
return pokedb_frontend.core.foreground.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36624));
});

pokedb_frontend.core.page = (function pokedb_frontend$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.background.scrolling_pokes], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.core.foreground,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.core.trainers_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.core.pokemons_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.add_pokemon.add_pokemon_modal], null)], null)], null);
});
var G__36628_36630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.core.page], null);
var G__36629_36631 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__36628_36630,G__36629_36631) : reagent.core.render_component.call(null,G__36628_36630,G__36629_36631));
