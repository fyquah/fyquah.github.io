// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('gmapscljs.utils');
goog.require('cljs.core');
goog.require('reagent.core');
/**
 * Flattens everything but vector that starts with a function
 */
gmapscljs.utils.flatten = (function gmapscljs$utils$flatten(arr){
var v = arr;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var head = cljs.core.first(v);
if(cljs.core.empty_QMARK_(v)){
return res;
} else {
var G__7045 = cljs.core.next(v);
var G__7046 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,res,(((!(cljs.core.coll_QMARK_(head))) || (cljs.core.fn_QMARK_(cljs.core.first(head))) || ((cljs.core.first(head) instanceof cljs.core.Symbol)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null):gmapscljs$utils$flatten(head)));
v = G__7045;
res = G__7046;
continue;
}
break;
}
});
goog.exportSymbol('gmapscljs.utils.flatten', gmapscljs.utils.flatten);
/**
 * Return a differ function based on the given option keys
 * ((make-differ [:a :b :c]) {:a 1 :d 2 :b 3} {:a 1 :b 4})
 * => {:b 4}
 */
gmapscljs.utils.make_differ = (function gmapscljs$utils$make_differ(option_keys){
return (function (old_state,new_state){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7048_SHARP_,p2__7047_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_state,p2__7047_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_state,p2__7047_SHARP_))){
return p1__7048_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__7048_SHARP_,p2__7047_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_state,p2__7047_SHARP_));
}
}),null,option_keys);
});
});
goog.exportSymbol('gmapscljs.utils.make_differ', gmapscljs.utils.make_differ);
/**
 * Returns a random number in the given range.
 * Optional random number generator third arg
 * @param {...*} var_args
 */
gmapscljs.utils.rand_in_range = (function() { 
var gmapscljs$utils$rand_in_range__delegate = function (lo,hi,p__7049){
var vec__7051 = p__7049;
var rand_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7051,(0),null);
if((hi >= lo)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$hi,cljs.core.cst$sym$lo)], 0)))].join('')));
}

return (lo + ((hi - lo) * (function (){var or__559__auto__ = rand_fn;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.rand;
}
})().call(null)));
};
var gmapscljs$utils$rand_in_range = function (lo,hi,var_args){
var p__7049 = null;
if (arguments.length > 2) {
var G__7052__i = 0, G__7052__a = new Array(arguments.length -  2);
while (G__7052__i < G__7052__a.length) {G__7052__a[G__7052__i] = arguments[G__7052__i + 2]; ++G__7052__i;}
  p__7049 = new cljs.core.IndexedSeq(G__7052__a,0);
} 
return gmapscljs$utils$rand_in_range__delegate.call(this,lo,hi,p__7049);};
gmapscljs$utils$rand_in_range.cljs$lang$maxFixedArity = 2;
gmapscljs$utils$rand_in_range.cljs$lang$applyTo = (function (arglist__7053){
var lo = cljs.core.first(arglist__7053);
arglist__7053 = cljs.core.next(arglist__7053);
var hi = cljs.core.first(arglist__7053);
var p__7049 = cljs.core.rest(arglist__7053);
return gmapscljs$utils$rand_in_range__delegate(lo,hi,p__7049);
});
gmapscljs$utils$rand_in_range.cljs$core$IFn$_invoke$arity$variadic = gmapscljs$utils$rand_in_range__delegate;
return gmapscljs$utils$rand_in_range;
})()
;
goog.exportSymbol('gmapscljs.utils.rand_in_range', gmapscljs.utils.rand_in_range);
/**
 * Returns a google maps lat-lon object. argument can be either
 * (lat-lon _lat_ _lon_) or
 * (lat-lon {:lat 1 :lon 2}) or
 * (lat-lon {:lat 1 :lng 2})
 * why lat-lon over lat-lng? LATitude for lat, so LONgitude for lon?
 */
gmapscljs.utils.lat_lon = (function() {
var gmapscljs$utils$lat_lon = null;
var gmapscljs$utils$lat_lon__1 = (function (m){
var lat = cljs.core.cst$kw$lat.cljs$core$IFn$_invoke$arity$1(m);
var lon = (function (){var or__559__auto__ = cljs.core.cst$kw$lon.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.cst$kw$lng.cljs$core$IFn$_invoke$arity$1(m);
}
})();
return gmapscljs$utils$lat_lon.cljs$core$IFn$_invoke$arity$2(lat,lon);
});
var gmapscljs$utils$lat_lon__2 = (function (lat,lon){
return (new google.maps.LatLng(lat,lon));
});
gmapscljs$utils$lat_lon = function(lat,lon){
switch(arguments.length){
case 1:
return gmapscljs$utils$lat_lon__1.call(this,lat);
case 2:
return gmapscljs$utils$lat_lon__2.call(this,lat,lon);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gmapscljs$utils$lat_lon.cljs$core$IFn$_invoke$arity$1 = gmapscljs$utils$lat_lon__1;
gmapscljs$utils$lat_lon.cljs$core$IFn$_invoke$arity$2 = gmapscljs$utils$lat_lon__2;
return gmapscljs$utils$lat_lon;
})()
;
goog.exportSymbol('gmapscljs.utils.lat_lon', gmapscljs.utils.lat_lon);
gmapscljs.utils.make_handler = (function gmapscljs$utils$make_handler(obj,fnc){
return (function() { 
var G__7054__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fnc,obj,args);
};
var G__7054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7055__i = 0, G__7055__a = new Array(arguments.length -  0);
while (G__7055__i < G__7055__a.length) {G__7055__a[G__7055__i] = arguments[G__7055__i + 0]; ++G__7055__i;}
  args = new cljs.core.IndexedSeq(G__7055__a,0);
} 
return G__7054__delegate.call(this,args);};
G__7054.cljs$lang$maxFixedArity = 0;
G__7054.cljs$lang$applyTo = (function (arglist__7056){
var args = cljs.core.seq(arglist__7056);
return G__7054__delegate(args);
});
G__7054.cljs$core$IFn$_invoke$arity$variadic = G__7054__delegate;
return G__7054;
})()
;
});
goog.exportSymbol('gmapscljs.utils.make_handler', gmapscljs.utils.make_handler);
gmapscljs.utils.random_point = (function() {
var gmapscljs$utils$random_point = null;
var gmapscljs$utils$random_point__0 = (function (){
return gmapscljs$utils$random_point.cljs$core$IFn$_invoke$arity$1(cljs.core.rand);
});
var gmapscljs$utils$random_point__1 = (function (rand){
return gmapscljs.utils.lat_lon.cljs$core$IFn$_invoke$arity$2(gmapscljs.utils.rand_in_range((-85),(85)),gmapscljs.utils.rand_in_range((-170),(170)));
});
gmapscljs$utils$random_point = function(rand){
switch(arguments.length){
case 0:
return gmapscljs$utils$random_point__0.call(this);
case 1:
return gmapscljs$utils$random_point__1.call(this,rand);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gmapscljs$utils$random_point.cljs$core$IFn$_invoke$arity$0 = gmapscljs$utils$random_point__0;
gmapscljs$utils$random_point.cljs$core$IFn$_invoke$arity$1 = gmapscljs$utils$random_point__1;
return gmapscljs$utils$random_point;
})()
;
goog.exportSymbol('gmapscljs.utils.random_point', gmapscljs.utils.random_point);
gmapscljs.utils.make_component_fnc = (function gmapscljs$utils$make_component_fnc(klass,option_keys){
var differ = gmapscljs.utils.make_differ(option_keys);
var old_props = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
return ((function (differ,old_props){
return (function (p__7068){
var map__7069 = p__7068;
var map__7069__$1 = ((cljs.core.seq_QMARK_(map__7069))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7069):map__7069);
var props = map__7069__$1;
var map_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7069__$1,cljs.core.cst$kw$map);
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7069__$1,cljs.core.cst$kw$handlers);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props){
return (function (this$){
var obj = (new klass(cljs.core.clj__GT_js(cljs.core.select_keys(props,option_keys))));
reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DASH_component_DASH_obj,obj], null));

var seq__7070 = cljs.core.seq(handlers);
var chunk__7071 = null;
var count__7072 = (0);
var i__7073 = (0);
while(true){
if((i__7073 < count__7072)){
var vec__7074 = chunk__7071.cljs$core$IIndexed$_nth$arity$2(null,i__7073);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7074,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7074,(1),null);
obj.addListener(cljs.core.name(event_name),gmapscljs.utils.make_handler(obj,handler));

var G__7079 = seq__7070;
var G__7080 = chunk__7071;
var G__7081 = count__7072;
var G__7082 = (i__7073 + (1));
seq__7070 = G__7079;
chunk__7071 = G__7080;
count__7072 = G__7081;
i__7073 = G__7082;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__7070);
if(temp__4425__auto__){
var seq__7070__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7070__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__7070__$1);
var G__7083 = cljs.core.chunk_rest(seq__7070__$1);
var G__7084 = c__1341__auto__;
var G__7085 = cljs.core.count(c__1341__auto__);
var G__7086 = (0);
seq__7070 = G__7083;
chunk__7071 = G__7084;
count__7072 = G__7085;
i__7073 = G__7086;
continue;
} else {
var vec__7075 = cljs.core.first(seq__7070__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7075,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7075,(1),null);
obj.addListener(cljs.core.name(event_name),gmapscljs.utils.make_handler(obj,handler));

var G__7087 = cljs.core.next(seq__7070__$1);
var G__7088 = null;
var G__7089 = (0);
var G__7090 = (0);
seq__7070 = G__7087;
chunk__7071 = G__7088;
count__7072 = G__7089;
i__7073 = G__7090;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props))
,cljs.core.cst$kw$should_DASH_component_DASH_update,((function (map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props){
return (function (this$,old_args,new_args){
var component_obj_7091 = cljs.core.cst$kw$_DASH_component_DASH_obj.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$));
var prop_updates_7092 = (function (){var G__7077 = cljs.core.second(old_args);
var G__7078 = cljs.core.second(new_args);
return (differ.cljs$core$IFn$_invoke$arity$2 ? differ.cljs$core$IFn$_invoke$arity$2(G__7077,G__7078) : differ.call(null,G__7077,G__7078));
})();
var map__7076_7093 = cljs.core.cst$kw$center.cljs$core$IFn$_invoke$arity$1(cljs.core.second(new_args));
var map__7076_7094__$1 = ((cljs.core.seq_QMARK_(map__7076_7093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7076_7093):map__7076_7093);
var lat_7095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7076_7094__$1,cljs.core.cst$kw$lat);
var lng_7096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7076_7094__$1,cljs.core.cst$kw$lng);
if(cljs.core.truth_((function (){var and__547__auto__ = component_obj_7091;
if(cljs.core.truth_(and__547__auto__)){
return !(cljs.core.empty_QMARK_(prop_updates_7092));
} else {
return and__547__auto__;
}
})())){
component_obj_7091.setOptions(cljs.core.clj__GT_js(prop_updates_7092));
} else {
}

return false;
});})(map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props))
,cljs.core.cst$kw$render,((function (map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props){
return (function (this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$noscript], null);
});})(map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props){
return (function (this$){
return cljs.core.cst$kw$_DASH_component_DASH_obj.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$)).setMap(null);
});})(map__7069,map__7069__$1,props,map_ref,handlers,differ,old_props))
], null));
});
;})(differ,old_props))
});
goog.exportSymbol('gmapscljs.utils.make_component_fnc', gmapscljs.utils.make_component_fnc);
