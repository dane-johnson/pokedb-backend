// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pokedb_frontend.background');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
pokedb_frontend.background.num_pokes = (50);
pokedb_frontend.background.place_rand_poke = (function pokedb_frontend$background$place_rand_poke(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((600)),cljs.core.rand_int(window.innerWidth),(- cljs.core.rand_int(window.innerHeight))], null);
});
pokedb_frontend.background.pokemons = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.background.num_pokes,pokedb_frontend.background.place_rand_poke)));
pokedb_frontend.background.update_poke = (function pokedb_frontend$background$update_poke(poke){
if(((poke.cljs$core$IFn$_invoke$arity$1 ? poke.cljs$core$IFn$_invoke$arity$1((2)) : poke.call(null,(2))) > (window.innerHeight + (100)))){
return pokedb_frontend.background.place_rand_poke();
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(poke,(2),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(5)));
}
});
pokedb_frontend.background.update_pokes_BANG_ = (function pokedb_frontend$background$update_pokes_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.background.pokemons,(function (p1__36609_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.background.update_poke,p1__36609_SHARP_);
}));
});
pokedb_frontend.background.pokemon_img = (function pokedb_frontend$background$pokemon_img(number,x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(100),cljs.core.cst$kw$height,(100),cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,y,cljs.core.cst$kw$left,x], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"/img/pokesprites.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_left,((-96) * cljs.core.mod(number,(31))),cljs.core.cst$kw$margin_DASH_top,((-96) * cljs.core.quot(number,(31)))], null)], null)], null)], null);
});
pokedb_frontend.background.poke_div = (function pokedb_frontend$background$poke_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$z_DASH_index,(-1)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__36611_SHARP_,p2__36610_SHARP_){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pokedb_frontend.background.pokemon_img,p2__36610_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p1__36611_SHARP_], null));
}),cljs.core.deref(pokedb_frontend.background.pokemons))], null);
});
pokedb_frontend.background.scrolling_pokes = (function pokedb_frontend$background$scrolling_pokes(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokedb_frontend.background.poke_div], null)], null);
});
pokedb_frontend.background.animate = (function pokedb_frontend$background$animate(){
pokedb_frontend.background.update_pokes_BANG_();

return setTimeout(pokedb_frontend.background.animate,(10));
});
setTimeout(pokedb_frontend.background.animate,(10));
