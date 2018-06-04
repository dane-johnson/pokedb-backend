// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pokedb_frontend.ajax');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('reagent.core');
pokedb_frontend.ajax._STAR_api_url_STAR_ = "http://localhost:5000";
pokedb_frontend.ajax.atom_handler = (function pokedb_frontend$ajax$atom_handler(a,key){
return (function (res){
return cljs.core.reset_BANG_(a,(function (){var vals = cljs.reader.read_string(res);
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vals){
return (function (p1__36600_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36600_SHARP_,key);
});})(vals))
,vals),vals);
})());
});
});
pokedb_frontend.ajax.atom_getter = (function pokedb_frontend$ajax$atom_getter(endpoint,handler){
return (function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokedb_frontend.ajax._STAR_api_url_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null)], 0));
});
});
pokedb_frontend.ajax.trainers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
pokedb_frontend.ajax.trainers_handler = pokedb_frontend.ajax.atom_handler(pokedb_frontend.ajax.trainers,cljs.core.cst$kw$number);
pokedb_frontend.ajax.get_trainers = pokedb_frontend.ajax.atom_getter("/trainers",pokedb_frontend.ajax.trainers_handler);
pokedb_frontend.ajax.set_age = (function pokedb_frontend$ajax$set_age(no,age){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokedb_frontend.ajax._STAR_api_url_STAR_),"/trainer/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$age,age], null),cljs.core.cst$kw$format,cljs.core.cst$kw$raw], null)], 0));
});
pokedb_frontend.ajax.pokemons = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
pokedb_frontend.ajax.pokemons_handler = pokedb_frontend.ajax.atom_handler(pokedb_frontend.ajax.pokemons,cljs.core.cst$kw$number);
pokedb_frontend.ajax.get_pokemons = (function pokedb_frontend$ajax$get_pokemons(no){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokedb_frontend.ajax._STAR_api_url_STAR_),"/pokemon/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,pokedb_frontend.ajax.pokemons_handler], null)], 0));
});
pokedb_frontend.ajax.delete_pokemon = (function pokedb_frontend$ajax$delete_pokemon(no){
return ajax.core.DELETE([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pokedb_frontend.ajax._STAR_api_url_STAR_),"/pokemon/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no)].join(''));
});
pokedb_frontend.ajax.species = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
pokedb_frontend.ajax.species_handler = pokedb_frontend.ajax.atom_handler(pokedb_frontend.ajax.species,cljs.core.cst$kw$name);
pokedb_frontend.ajax.get_species = pokedb_frontend.ajax.atom_getter("/species",pokedb_frontend.ajax.species_handler);
