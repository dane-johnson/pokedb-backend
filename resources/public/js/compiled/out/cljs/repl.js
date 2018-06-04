// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46827){
var map__46828 = p__46827;
var map__46828__$1 = ((((!((map__46828 == null)))?((((map__46828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46828):map__46828);
var m = map__46828__$1;
var n = cljs.core.get.call(null,map__46828__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46828__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46830_46852 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46831_46853 = null;
var count__46832_46854 = (0);
var i__46833_46855 = (0);
while(true){
if((i__46833_46855 < count__46832_46854)){
var f_46856 = cljs.core._nth.call(null,chunk__46831_46853,i__46833_46855);
cljs.core.println.call(null,"  ",f_46856);

var G__46857 = seq__46830_46852;
var G__46858 = chunk__46831_46853;
var G__46859 = count__46832_46854;
var G__46860 = (i__46833_46855 + (1));
seq__46830_46852 = G__46857;
chunk__46831_46853 = G__46858;
count__46832_46854 = G__46859;
i__46833_46855 = G__46860;
continue;
} else {
var temp__5278__auto___46861 = cljs.core.seq.call(null,seq__46830_46852);
if(temp__5278__auto___46861){
var seq__46830_46862__$1 = temp__5278__auto___46861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46830_46862__$1)){
var c__31113__auto___46863 = cljs.core.chunk_first.call(null,seq__46830_46862__$1);
var G__46864 = cljs.core.chunk_rest.call(null,seq__46830_46862__$1);
var G__46865 = c__31113__auto___46863;
var G__46866 = cljs.core.count.call(null,c__31113__auto___46863);
var G__46867 = (0);
seq__46830_46852 = G__46864;
chunk__46831_46853 = G__46865;
count__46832_46854 = G__46866;
i__46833_46855 = G__46867;
continue;
} else {
var f_46868 = cljs.core.first.call(null,seq__46830_46862__$1);
cljs.core.println.call(null,"  ",f_46868);

var G__46869 = cljs.core.next.call(null,seq__46830_46862__$1);
var G__46870 = null;
var G__46871 = (0);
var G__46872 = (0);
seq__46830_46852 = G__46869;
chunk__46831_46853 = G__46870;
count__46832_46854 = G__46871;
i__46833_46855 = G__46872;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46873 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30182__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46873);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46873)))?cljs.core.second.call(null,arglists_46873):arglists_46873));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46834_46874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46835_46875 = null;
var count__46836_46876 = (0);
var i__46837_46877 = (0);
while(true){
if((i__46837_46877 < count__46836_46876)){
var vec__46838_46878 = cljs.core._nth.call(null,chunk__46835_46875,i__46837_46877);
var name_46879 = cljs.core.nth.call(null,vec__46838_46878,(0),null);
var map__46841_46880 = cljs.core.nth.call(null,vec__46838_46878,(1),null);
var map__46841_46881__$1 = ((((!((map__46841_46880 == null)))?((((map__46841_46880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46841_46880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46841_46880):map__46841_46880);
var doc_46882 = cljs.core.get.call(null,map__46841_46881__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46883 = cljs.core.get.call(null,map__46841_46881__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46879);

cljs.core.println.call(null," ",arglists_46883);

if(cljs.core.truth_(doc_46882)){
cljs.core.println.call(null," ",doc_46882);
} else {
}

var G__46884 = seq__46834_46874;
var G__46885 = chunk__46835_46875;
var G__46886 = count__46836_46876;
var G__46887 = (i__46837_46877 + (1));
seq__46834_46874 = G__46884;
chunk__46835_46875 = G__46885;
count__46836_46876 = G__46886;
i__46837_46877 = G__46887;
continue;
} else {
var temp__5278__auto___46888 = cljs.core.seq.call(null,seq__46834_46874);
if(temp__5278__auto___46888){
var seq__46834_46889__$1 = temp__5278__auto___46888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46834_46889__$1)){
var c__31113__auto___46890 = cljs.core.chunk_first.call(null,seq__46834_46889__$1);
var G__46891 = cljs.core.chunk_rest.call(null,seq__46834_46889__$1);
var G__46892 = c__31113__auto___46890;
var G__46893 = cljs.core.count.call(null,c__31113__auto___46890);
var G__46894 = (0);
seq__46834_46874 = G__46891;
chunk__46835_46875 = G__46892;
count__46836_46876 = G__46893;
i__46837_46877 = G__46894;
continue;
} else {
var vec__46843_46895 = cljs.core.first.call(null,seq__46834_46889__$1);
var name_46896 = cljs.core.nth.call(null,vec__46843_46895,(0),null);
var map__46846_46897 = cljs.core.nth.call(null,vec__46843_46895,(1),null);
var map__46846_46898__$1 = ((((!((map__46846_46897 == null)))?((((map__46846_46897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46846_46897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46846_46897):map__46846_46897);
var doc_46899 = cljs.core.get.call(null,map__46846_46898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46900 = cljs.core.get.call(null,map__46846_46898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46896);

cljs.core.println.call(null," ",arglists_46900);

if(cljs.core.truth_(doc_46899)){
cljs.core.println.call(null," ",doc_46899);
} else {
}

var G__46901 = cljs.core.next.call(null,seq__46834_46889__$1);
var G__46902 = null;
var G__46903 = (0);
var G__46904 = (0);
seq__46834_46874 = G__46901;
chunk__46835_46875 = G__46902;
count__46836_46876 = G__46903;
i__46837_46877 = G__46904;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__46848 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46849 = null;
var count__46850 = (0);
var i__46851 = (0);
while(true){
if((i__46851 < count__46850)){
var role = cljs.core._nth.call(null,chunk__46849,i__46851);
var temp__5278__auto___46905__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___46905__$1)){
var spec_46906 = temp__5278__auto___46905__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46906));
} else {
}

var G__46907 = seq__46848;
var G__46908 = chunk__46849;
var G__46909 = count__46850;
var G__46910 = (i__46851 + (1));
seq__46848 = G__46907;
chunk__46849 = G__46908;
count__46850 = G__46909;
i__46851 = G__46910;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__46848);
if(temp__5278__auto____$1){
var seq__46848__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46848__$1)){
var c__31113__auto__ = cljs.core.chunk_first.call(null,seq__46848__$1);
var G__46911 = cljs.core.chunk_rest.call(null,seq__46848__$1);
var G__46912 = c__31113__auto__;
var G__46913 = cljs.core.count.call(null,c__31113__auto__);
var G__46914 = (0);
seq__46848 = G__46911;
chunk__46849 = G__46912;
count__46850 = G__46913;
i__46851 = G__46914;
continue;
} else {
var role = cljs.core.first.call(null,seq__46848__$1);
var temp__5278__auto___46915__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___46915__$2)){
var spec_46916 = temp__5278__auto___46915__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46916));
} else {
}

var G__46917 = cljs.core.next.call(null,seq__46848__$1);
var G__46918 = null;
var G__46919 = (0);
var G__46920 = (0);
seq__46848 = G__46917;
chunk__46849 = G__46918;
count__46850 = G__46919;
i__46851 = G__46920;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511550761215
