// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('gmapscljs_example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.browser.repl');
goog.require('gmapscljs.core');
goog.require('gmapscljs.utils');
/**
 * M bibby bbsijjjjjasdfaaabababaaake 5 random pojjlintsssl
 */
gmapscljs_example.core.make_points = (function gmapscljs_example$core$make_points(){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),gmapscljs.utils.random_point);
});
gmapscljs_example.core.points = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(gmapscljs_example.core.make_points());
gmapscljs_example.core.main_component = (function gmapscljs_example$core$main_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"gmapscljs-example"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__6670 = gmapscljs_example.core.points;
var G__6671 = gmapscljs_example.core.make_points();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__6670,G__6671) : cljs.core.reset_BANG_.call(null,G__6670,G__6671));
})], null),"Click me!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmapscljs.core.google_maps,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,(500)], null),cljs.core.cst$kw$center,gmapscljs.utils.lat_lon.cljs$core$IFn$_invoke$arity$2((50),(10)),cljs.core.cst$kw$zoom,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmapscljs.core.polyline,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gmapscljs_example.core.points) : cljs.core.deref.call(null,gmapscljs_example.core.points)),cljs.core.cst$kw$key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gmapscljs_example.core.points) : cljs.core.deref.call(null,gmapscljs_example.core.points))], null)], null),(function (){var iter__1310__auto__ = (function gmapscljs_example$core$main_component_$_iter__6672(s__6673){
return (new cljs.core.LazySeq(null,(function (){
var s__6673__$1 = s__6673;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__6673__$1);
if(temp__4425__auto__){
var s__6673__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6673__$2)){
var c__1308__auto__ = cljs.core.chunk_first(s__6673__$2);
var size__1309__auto__ = cljs.core.count(c__1308__auto__);
var b__6675 = cljs.core.chunk_buffer(size__1309__auto__);
if((function (){var i__6674 = (0);
while(true){
if((i__6674 < size__1309__auto__)){
var point = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__1308__auto__,i__6674);
cljs.core.chunk_append(b__6675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmapscljs.core.marker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,point,cljs.core.cst$kw$position,point], null)], null));

var G__6678 = (i__6674 + (1));
i__6674 = G__6678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6675),gmapscljs_example$core$main_component_$_iter__6672(cljs.core.chunk_rest(s__6673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6675),null);
}
} else {
var point = cljs.core.first(s__6673__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmapscljs.core.marker,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,point,cljs.core.cst$kw$position,point], null)], null),gmapscljs_example$core$main_component_$_iter__6672(cljs.core.rest(s__6673__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1310__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gmapscljs_example.core.points) : cljs.core.deref.call(null,gmapscljs_example.core.points)));
})()], null)], null);
});
window.onload = (function (){
var G__6679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gmapscljs_example.core.main_component], null);
var G__6680 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__6679,G__6680) : reagent.core.render_component.call(null,G__6679,G__6680));
});
