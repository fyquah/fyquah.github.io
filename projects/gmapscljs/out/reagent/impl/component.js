// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_(c)) && (cljs.core.some_QMARK_((c["cljsReactClass"])));
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_6723 = reagent.impl.component._STAR_current_component_STAR_;
try{reagent.impl.component._STAR_current_component_STAR_ = c;

var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c)):(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__6724 = n;
switch (G__6724) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__6725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__6725) : f.call(null,G__6725));

break;
case (3):
var G__6726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__6727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__6726,G__6727) : f.call(null,G__6726,G__6727));

break;
case (4):
var G__6728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__6729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__6730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__6728,G__6729,G__6730) : f.call(null,G__6728,G__6729,G__6730));

break;
case (5):
var G__6731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__6732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__6733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__6734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__6731,G__6732,G__6733,G__6734) : f.call(null,G__6731,G__6732,G__6733,G__6734));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = (cljs.core.truth_(reagent.impl.component.reagent_class_QMARK_(res))?((function (f,_,p,res,_STAR_current_component_STAR_6723){
return (function() { 
var G__6736__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__6736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6737__i = 0, G__6737__a = new Array(arguments.length -  0);
while (G__6737__i < G__6737__a.length) {G__6737__a[G__6737__i] = arguments[G__6737__i + 0]; ++G__6737__i;}
  args = new cljs.core.IndexedSeq(G__6737__a,0);
} 
return G__6736__delegate.call(this,args);};
G__6736.cljs$lang$maxFixedArity = 0;
G__6736.cljs$lang$applyTo = (function (arglist__6738){
var args = cljs.core.seq(arglist__6738);
return G__6736__delegate(args);
});
G__6736.cljs$core$IFn$_invoke$arity$variadic = G__6736__delegate;
return G__6736;
})()
;})(f,_,p,res,_STAR_current_component_STAR_6723))
:res);
(c["cljsRender"] = f__$1);

return reagent$impl$component$do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_6723;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__6748 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__6748) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__6748){
return (function (){
var c = this;
var G__6749 = reagent.impl.component.state_atom(c);
var G__6750 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__6749,G__6750) : cljs.core.reset_BANG_.call(null,G__6749,G__6750));
});
;})(G__6748))

break;
case "componentWillReceiveProps":
return ((function (G__6748){
return (function (props){
var c = this;
var G__6751 = c;
var G__6752 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__6751,G__6752) : f.call(null,G__6751,G__6752));
});
;})(G__6748))

break;
case "shouldComponentUpdate":
return ((function (G__6748){
return (function (nextprops,nextstate){
var or__559__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(c,old_argv,new_argv) : f.call(null,c,old_argv,new_argv));
}
}
});
;})(G__6748))

break;
case "componentWillUpdate":
return ((function (G__6748){
return (function (nextprops){
var c = this;
var G__6753 = c;
var G__6754 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__6753,G__6754) : f.call(null,G__6753,G__6754));
});
;})(G__6748))

break;
case "componentDidUpdate":
return ((function (G__6748){
return (function (oldprops){
var c = this;
var G__6755 = c;
var G__6756 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__6755,G__6756) : f.call(null,G__6755,G__6756));
});
;})(G__6748))

break;
case "componentWillMount":
return ((function (G__6748){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__6748))

break;
case "componentWillUnmount":
return ((function (G__6748){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
}
});
;})(G__6748))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__6758__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__6758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6759__i = 0, G__6759__a = new Array(arguments.length -  0);
while (G__6759__i < G__6759__a.length) {G__6759__a[G__6759__i] = arguments[G__6759__i + 0]; ++G__6759__i;}
  args = new cljs.core.IndexedSeq(G__6759__a,0);
} 
return G__6758__delegate.call(this,args);};
G__6758.cljs$lang$maxFixedArity = 0;
G__6758.cljs$lang$applyTo = (function (arglist__6760){
var args = cljs.core.seq(arglist__6760);
return G__6758__delegate(args);
});
G__6758.cljs$core$IFn$_invoke$arity$variadic = G__6758__delegate;
return G__6758;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljsRender,null,cljs.core.cst$kw$reagentRender,null,cljs.core.cst$kw$render,null,cljs.core.cst$kw$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__6762 = f;
(G__6762["__reactDontBind"] = true);

return G__6762;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(key) : reagent.impl.component.dont_wrap.call(null,key)))){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__547__auto__ = wrap;
if(cljs.core.truth_(and__547__auto__)){
return f;
} else {
return and__547__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}
} else {
}

var or__559__auto__ = wrap;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shouldComponentUpdate,null,cljs.core.cst$kw$componentWillMount,null,cljs.core.cst$kw$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.cst$kw$cljsRender,render_f,cljs.core.array_seq([cljs.core.cst$kw$render,cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.cst$kw$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__559__auto__ = (function (){var and__547__auto__ = cljs.core.fn_QMARK_(f);
if(and__547__auto__){
var or__559__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return (f["name"]);
}
} else {
return and__547__auto__;
}
})();
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (function (){var and__547__auto__ = (function (){var G__6770 = f;
if(G__6770){
var bit__1228__auto__ = (G__6770.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__1228__auto__) || (G__6770.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__547__auto__){
return cljs.core.name(f);
} else {
return and__547__auto__;
}
})();
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4427__auto__ = cljs.core.cst$kw$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4427__auto__ == null)){
return fmap;
} else {
var cf = temp__4427__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.cst$kw$reagentRender,cf),cljs.core.cst$kw$componentFunction);
}
})();
var render_fun = (function (){var or__559__auto__ = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$render_DASH_fun)], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__559__auto__ = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.cst$kw$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__6772 = o;
(G__6772[cljs.core.name(k)] = v);

return G__6772;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$body)], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__6773__delegate = function (args){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling the result of create-class as a function is "),cljs.core.str("deprecated in "),cljs.core.str((res["displayName"])),cljs.core.str(". Use a vector "),cljs.core.str("instead.")].join(''));
} else {
}

return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__6773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6774__i = 0, G__6774__a = new Array(arguments.length -  0);
while (G__6774__i < G__6774__a.length) {G__6774__a[G__6774__i] = arguments[G__6774__i + 0]; ++G__6774__i;}
  args = new cljs.core.IndexedSeq(G__6774__a,0);
} 
return G__6773__delegate.call(this,args);};
G__6773.cljs$lang$maxFixedArity = 0;
G__6773.cljs$lang$applyTo = (function (arglist__6775){
var args = cljs.core.seq(arglist__6775);
return G__6773__delegate(args);
});
G__6773.cljs$core$IFn$_invoke$arity$variadic = G__6773__delegate;
return G__6773;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__6777 = reagent.impl.component._STAR_current_component_STAR_;
var G__6777__$1 = (((G__6777 == null))?null:(G__6777["cljsName"])());
return G__6777__$1;
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__1310__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__6784(s__6785){
return (new cljs.core.LazySeq(null,(function (){
var s__6785__$1 = s__6785;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__6785__$1);
if(temp__4425__auto__){
var s__6785__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6785__$2)){
var c__1308__auto__ = cljs.core.chunk_first(s__6785__$2);
var size__1309__auto__ = cljs.core.count(c__1308__auto__);
var b__6787 = cljs.core.chunk_buffer(size__1309__auto__);
if((function (){var i__6786 = (0);
while(true){
if((i__6786 < size__1309__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__1308__auto__,i__6786);
cljs.core.chunk_append(b__6787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__6790 = (i__6786 + (1));
i__6786 = G__6790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6787),reagent$impl$component$shallow_obj_to_map_$_iter__6784(cljs.core.chunk_rest(s__6785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6787),null);
}
} else {
var k = cljs.core.first(s__6785__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__6784(cljs.core.rest(s__6785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1310__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.cst$kw$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});
