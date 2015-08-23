// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

clojure.browser.event.IEventType = (function (){var obj9470 = {};
return obj9470;
})();

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__547__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__9471){
var vec__9472 = p__9471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9472,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__9473){
var vec__9474 = p__9473;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9474,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function() {
var clojure$browser$event$listen = null;
var clojure$browser$event$listen__3 = (function (src,type,fn){
return clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$listen__4 = (function (src,type,fn,capture_QMARK_){
var G__9479 = src;
var G__9480 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__9481 = fn;
var G__9482 = capture_QMARK_;
return goog.events.listen(G__9479,G__9480,G__9481,G__9482);
});
clojure$browser$event$listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen__3;
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen__4;
return clojure$browser$event$listen;
})()
;
clojure.browser.event.listen_once = (function() {
var clojure$browser$event$listen_once = null;
var clojure$browser$event$listen_once__3 = (function (src,type,fn){
return clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$listen_once__4 = (function (src,type,fn,capture_QMARK_){
var G__9487 = src;
var G__9488 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__9489 = fn;
var G__9490 = capture_QMARK_;
return goog.events.listenOnce(G__9487,G__9488,G__9489,G__9490);
});
clojure$browser$event$listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen_once__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen_once__3;
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen_once__4;
return clojure$browser$event$listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var clojure$browser$event$unlisten = null;
var clojure$browser$event$unlisten__3 = (function (src,type,fn){
return clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$unlisten__4 = (function (src,type,fn,capture_QMARK_){
var G__9495 = src;
var G__9496 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__9497 = fn;
var G__9498 = capture_QMARK_;
return goog.events.unlisten(G__9495,G__9496,G__9497,G__9498);
});
clojure$browser$event$unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$unlisten__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$unlisten__3;
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$unlisten__4;
return clojure$browser$event$unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
