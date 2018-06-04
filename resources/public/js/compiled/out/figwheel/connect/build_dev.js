// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('pokedb_frontend.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__34048__delegate = function (x){
if(cljs.core.truth_(pokedb_frontend.core.on_js_reload)){
return cljs.core.apply.call(null,pokedb_frontend.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'pokedb-frontend.core/on-js-reload' is missing");
}
};
var G__34048 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__34049__i = 0, G__34049__a = new Array(arguments.length -  0);
while (G__34049__i < G__34049__a.length) {G__34049__a[G__34049__i] = arguments[G__34049__i + 0]; ++G__34049__i;}
  x = new cljs.core.IndexedSeq(G__34049__a,0,null);
} 
return G__34048__delegate.call(this,x);};
G__34048.cljs$lang$maxFixedArity = 0;
G__34048.cljs$lang$applyTo = (function (arglist__34050){
var x = cljs.core.seq(arglist__34050);
return G__34048__delegate(x);
});
G__34048.cljs$core$IFn$_invoke$arity$variadic = G__34048__delegate;
return G__34048;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1511841793021
