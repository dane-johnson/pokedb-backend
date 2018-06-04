// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pokedb_frontend.add_pokemon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('pokedb_frontend.ajax');
(pokedb_frontend.ajax.get_species.cljs$core$IFn$_invoke$arity$0 ? pokedb_frontend.ajax.get_species.cljs$core$IFn$_invoke$arity$0() : pokedb_frontend.ajax.get_species.call(null));
pokedb_frontend.add_pokemon.selected_trainer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
pokedb_frontend.add_pokemon.species_display = (function pokedb_frontend$add_pokemon$species_display(p__36603){
var vec__36604 = p__36603;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(0),null);
var species = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,name], null),clojure.string.capitalize(name)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,name], null));
});
pokedb_frontend.add_pokemon.species_spinner = (function pokedb_frontend$add_pokemon$species_spinner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.add_pokemon.species_display,cljs.core.deref(pokedb_frontend.ajax.species))], null);
});
pokedb_frontend.add_pokemon.add_pokemon_modal = (function pokedb_frontend$add_pokemon$add_pokemon_modal(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_add_DASH_pokemon_DASH_modal,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"modal fade"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_dialog,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_header,"Add Pokemon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$modal_DASH_body,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pokedb_frontend.add_pokemon.selected_trainer))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.add_pokemon.species_spinner], null)], null)], null)], null)], null);
});
