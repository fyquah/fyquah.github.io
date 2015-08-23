// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('gmapscljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gmapscljs.utils');
if(typeof gmapscljs.core.map_options !== 'undefined'){
} else {
gmapscljs.core.map_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zoom,cljs.core.cst$kw$center,cljs.core.cst$kw$heading,cljs.core.cst$kw$mapTypeId,cljs.core.cst$kw$streetView,cljs.core.cst$kw$tilt,cljs.core.cst$kw$zoom], null);
}
gmapscljs.core.google_maps = (function gmapscljs$core$google_maps(p__7099){
var map__7113 = p__7099;
var map__7113__$1 = ((cljs.core.seq_QMARK_(map__7113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7113):map__7113);
var props = map__7113__$1;
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7113__$1,cljs.core.cst$kw$handlers);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (map__7113,map__7113__$1,props,handlers){
return (function (this$){
var map_ref = (new google.maps.Map(reagent.core.dom_node(this$),cljs.core.clj__GT_js(cljs.core.select_keys(props,gmapscljs.core.map_options))));
var seq__7114_7126 = cljs.core.seq(handlers);
var chunk__7115_7127 = null;
var count__7116_7128 = (0);
var i__7117_7129 = (0);
while(true){
if((i__7117_7129 < count__7116_7128)){
var vec__7118_7130 = chunk__7115_7127.cljs$core$IIndexed$_nth$arity$2(null,i__7117_7129);
var event_name_7131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7118_7130,(0),null);
var handler_7132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7118_7130,(1),null);
map_ref.addListener(cljs.core.name(event_name_7131),gmapscljs.utils.make_handler(map_ref,handler_7132));

var G__7133 = seq__7114_7126;
var G__7134 = chunk__7115_7127;
var G__7135 = count__7116_7128;
var G__7136 = (i__7117_7129 + (1));
seq__7114_7126 = G__7133;
chunk__7115_7127 = G__7134;
count__7116_7128 = G__7135;
i__7117_7129 = G__7136;
continue;
} else {
var temp__4425__auto___7137 = cljs.core.seq(seq__7114_7126);
if(temp__4425__auto___7137){
var seq__7114_7138__$1 = temp__4425__auto___7137;
if(cljs.core.chunked_seq_QMARK_(seq__7114_7138__$1)){
var c__1341__auto___7139 = cljs.core.chunk_first(seq__7114_7138__$1);
var G__7140 = cljs.core.chunk_rest(seq__7114_7138__$1);
var G__7141 = c__1341__auto___7139;
var G__7142 = cljs.core.count(c__1341__auto___7139);
var G__7143 = (0);
seq__7114_7126 = G__7140;
chunk__7115_7127 = G__7141;
count__7116_7128 = G__7142;
i__7117_7129 = G__7143;
continue;
} else {
var vec__7119_7144 = cljs.core.first(seq__7114_7138__$1);
var event_name_7145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7119_7144,(0),null);
var handler_7146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7119_7144,(1),null);
map_ref.addListener(cljs.core.name(event_name_7145),gmapscljs.utils.make_handler(map_ref,handler_7146));

var G__7147 = cljs.core.next(seq__7114_7138__$1);
var G__7148 = null;
var G__7149 = (0);
var G__7150 = (0);
seq__7114_7126 = G__7147;
chunk__7115_7127 = G__7148;
count__7116_7128 = G__7149;
i__7117_7129 = G__7150;
continue;
}
} else {
}
}
break;
}

return reagent.core.set_state(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$map,map_ref], null));
});})(map__7113,map__7113__$1,props,handlers))
,cljs.core.cst$kw$render,((function (map__7113,map__7113__$1,props,handlers){
return (function (this$){
var map_ref = cljs.core.cst$kw$map.cljs$core$IFn$_invoke$arity$1(reagent.core.state(this$));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.cst$kw$handlers),(((map_ref == null))?null:cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__1310__auto__ = ((function (map_ref,map__7113,map__7113__$1,props,handlers){
return (function gmapscljs$core$google_maps_$_iter__7120(s__7121){
return (new cljs.core.LazySeq(null,((function (map_ref,map__7113,map__7113__$1,props,handlers){
return (function (){
var s__7121__$1 = s__7121;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__7121__$1);
if(temp__4425__auto__){
var s__7121__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7121__$2)){
var c__1308__auto__ = cljs.core.chunk_first(s__7121__$2);
var size__1309__auto__ = cljs.core.count(c__1308__auto__);
var b__7123 = cljs.core.chunk_buffer(size__1309__auto__);
if((function (){var i__7122 = (0);
while(true){
if((i__7122 < size__1309__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__1308__auto__,i__7122);
cljs.core.chunk_append(b__7123,(((cljs.core.coll_QMARK_(child)) && (cljs.core.fn_QMARK_(cljs.core.first(child))))?cljs.core.assoc_in(child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$map], null),map_ref):null));

var G__7151 = (i__7122 + (1));
i__7122 = G__7151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7123),gmapscljs$core$google_maps_$_iter__7120(cljs.core.chunk_rest(s__7121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7123),null);
}
} else {
var child = cljs.core.first(s__7121__$2);
return cljs.core.cons((((cljs.core.coll_QMARK_(child)) && (cljs.core.fn_QMARK_(cljs.core.first(child))))?cljs.core.assoc_in(child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$map], null),map_ref):null),gmapscljs$core$google_maps_$_iter__7120(cljs.core.rest(s__7121__$2)));
}
} else {
return null;
}
break;
}
});})(map_ref,map__7113,map__7113__$1,props,handlers))
,null,null));
});})(map_ref,map__7113,map__7113__$1,props,handlers))
;
return iter__1310__auto__(gmapscljs.utils.flatten(reagent.core.children(this$)));
})()))], null);
});})(map__7113,map__7113__$1,props,handlers))
], null));
});
goog.exportSymbol('gmapscljs.core.google_maps', gmapscljs.core.google_maps);
gmapscljs.core.circle = gmapscljs.utils.make_component_fnc(google.maps.Circle,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,cljs.core.cst$kw$clickable,cljs.core.cst$kw$draggable,cljs.core.cst$kw$editable,cljs.core.cst$kw$fillColor,cljs.core.cst$kw$fillOpacity,cljs.core.cst$kw$map,cljs.core.cst$kw$radius,cljs.core.cst$kw$strokeColor,cljs.core.cst$kw$strokeOpacity,cljs.core.cst$kw$strokePosition,cljs.core.cst$kw$strokeWeight,cljs.core.cst$kw$visible,cljs.core.cst$kw$zIndex], null));
goog.exportSymbol('gmapscljs.core.circle', gmapscljs.core.circle);
gmapscljs.core.polyline = gmapscljs.utils.make_component_fnc(google.maps.Polyline,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clickable,cljs.core.cst$kw$draggable,cljs.core.cst$kw$editable,cljs.core.cst$kw$geodesic,cljs.core.cst$kw$icons,cljs.core.cst$kw$map,cljs.core.cst$kw$path,cljs.core.cst$kw$strokeColor,cljs.core.cst$kw$strokeOpacity,cljs.core.cst$kw$strokeWeight,cljs.core.cst$kw$visible,cljs.core.cst$kw$zIndex], null));
goog.exportSymbol('gmapscljs.core.polyline', gmapscljs.core.polyline);
gmapscljs.core.marker = gmapscljs.utils.make_component_fnc(google.maps.Marker,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchorPoint,cljs.core.cst$kw$animation,cljs.core.cst$kw$attribution,cljs.core.cst$kw$clickable,cljs.core.cst$kw$crossOnDrag,cljs.core.cst$kw$cursor,cljs.core.cst$kw$draggable,cljs.core.cst$kw$icon,cljs.core.cst$kw$label,cljs.core.cst$kw$map,cljs.core.cst$kw$opacity,cljs.core.cst$kw$optimized,cljs.core.cst$kw$place,cljs.core.cst$kw$position,cljs.core.cst$kw$shape,cljs.core.cst$kw$title,cljs.core.cst$kw$visible,cljs.core.cst$kw$zIndex], null));
goog.exportSymbol('gmapscljs.core.marker', gmapscljs.core.marker);
