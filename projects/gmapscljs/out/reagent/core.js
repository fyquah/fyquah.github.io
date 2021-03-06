// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 * That means the second argument must be a javascript object (or nil), and
 * that any Reagent hiccup forms must be processed with as-element. For example
 * like this:
 * 
 * (r/create-element "div" #js{:className "foo"}
 * "Hi " (r/as-element [:strong "world!"])
 * 
 * which is equivalent to
 * 
 * [:div.foo "Hi" [:strong "world!"]]
 * @param {...*} var_args
 */
reagent.core.create_element = (function() {
var reagent$core$create_element = null;
var reagent$core$create_element__1 = (function (type){
return reagent$core$create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reagent$core$create_element__2 = (function (type,props){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$props))], 0)))].join('')));
}

return React.createElement(type,props);
});
var reagent$core$create_element__3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$props))], 0)))].join('')));
}

return React.createElement(type,props,child);
});
var reagent$core$create_element__4 = (function() { 
var G__6683__delegate = function (type,props,child,children){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$props))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(React.createElement,type,props,child,children);
};
var G__6683 = function (type,props,child,var_args){
var children = null;
if (arguments.length > 3) {
var G__6684__i = 0, G__6684__a = new Array(arguments.length -  3);
while (G__6684__i < G__6684__a.length) {G__6684__a[G__6684__i] = arguments[G__6684__i + 3]; ++G__6684__i;}
  children = new cljs.core.IndexedSeq(G__6684__a,0);
} 
return G__6683__delegate.call(this,type,props,child,children);};
G__6683.cljs$lang$maxFixedArity = 3;
G__6683.cljs$lang$applyTo = (function (arglist__6685){
var type = cljs.core.first(arglist__6685);
arglist__6685 = cljs.core.next(arglist__6685);
var props = cljs.core.first(arglist__6685);
arglist__6685 = cljs.core.next(arglist__6685);
var child = cljs.core.first(arglist__6685);
var children = cljs.core.rest(arglist__6685);
return G__6683__delegate(type,props,child,children);
});
G__6683.cljs$core$IFn$_invoke$arity$variadic = G__6683__delegate;
return G__6683;
})()
;
reagent$core$create_element = function(type,props,child,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return reagent$core$create_element__1.call(this,type);
case 2:
return reagent$core$create_element__2.call(this,type,props);
case 3:
return reagent$core$create_element__3.call(this,type,props,child);
default:
var G__6686 = null;
if (arguments.length > 3) {
var G__6687__i = 0, G__6687__a = new Array(arguments.length -  3);
while (G__6687__i < G__6687__a.length) {G__6687__a[G__6687__i] = arguments[G__6687__i + 3]; ++G__6687__i;}
G__6686 = new cljs.core.IndexedSeq(G__6687__a,0);
}
return reagent$core$create_element__4.cljs$core$IFn$_invoke$arity$variadic(type,props,child, G__6686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$create_element.cljs$lang$maxFixedArity = 3;
reagent$core$create_element.cljs$lang$applyTo = reagent$core$create_element__4.cljs$lang$applyTo;
reagent$core$create_element.cljs$core$IFn$_invoke$arity$1 = reagent$core$create_element__1;
reagent$core$create_element.cljs$core$IFn$_invoke$arity$2 = reagent$core$create_element__2;
reagent$core$create_element.cljs$core$IFn$_invoke$arity$3 = reagent$core$create_element__3;
reagent$core$create_element.cljs$core$IFn$_invoke$arity$variadic = reagent$core$create_element__4.cljs$core$IFn$_invoke$arity$variadic;
return reagent$core$create_element;
})()
;
/**
 * Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 * just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
return reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 * React, for example in JSX. A single argument, props, is passed to
 * the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){
return reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 * either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render = (function() {
var reagent$core$render = null;
var reagent$core$render__2 = (function (comp,container){
return reagent$core$render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});
var reagent$core$render__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.impl.util.render_component(f,container,callback);
});
reagent$core$render = function(comp,container,callback){
switch(arguments.length){
case 2:
return reagent$core$render__2.call(this,comp,container);
case 3:
return reagent$core$render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$render.cljs$core$IFn$_invoke$arity$2 = reagent$core$render__2;
reagent$core$render.cljs$core$IFn$_invoke$arity$3 = reagent$core$render__3;
return reagent$core$render;
})()
;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node(container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_to_string = (function reagent$core$render_to_string(component){
var _STAR_non_reactive_STAR_6689 = reagent.impl.component._STAR_non_reactive_STAR_;
try{reagent.impl.component._STAR_non_reactive_STAR_ = true;

return (React["renderToString"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_6689;
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.core.render_to_static_markup = (function reagent$core$render_to_static_markup(component){
var _STAR_non_reactive_STAR_6691 = reagent.impl.component._STAR_non_reactive_STAR_;
try{reagent.impl.component._STAR_non_reactive_STAR_ = true;

return (React["renderToStaticMarkup"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_6691;
}});
/**
 * Force re-rendering of all mounted Reagent components. This is
 * probably only useful in a development environment, when you want to
 * update components in response to some dynamic changes to code.
 * 
 * Note that force-update-all may not update root components. This
 * happens if a component 'foo' is mounted with `(render [foo])` (since
 * functions are passed by value, and not by reference, in
 * ClojureScript). To get around this you'll have to introduce a layer
 * of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
return reagent.impl.util.force_update_all();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :reagent-render (fn [args....])   ;; or :render (fn [this])
 * }
 * 
 * Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 * function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

return reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 * Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

var G__6693 = reagent.core.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6693) : cljs.core.deref.call(null,G__6693));
});
/**
 * Set state of a component.
 * Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$new_DASH_state),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$new_DASH_state))], 0)))].join('')));
}

var G__6696 = reagent.core.state_atom(this$);
var G__6697 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__6696,G__6697) : cljs.core.reset_BANG_.call(null,G__6696,G__6697));
});
/**
 * Merge component state with new-state.
 * Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_(new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$new_DASH_state),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$new_DASH_state))], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 * If the second argument is true, child components will also be
 * re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function() {
var reagent$core$force_update = null;
var reagent$core$force_update__1 = (function (this$){
return reagent$core$force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});
var reagent$core$force_update__2 = (function (this$,deep){
return reagent.impl.util.force_update(this$,deep);
});
reagent$core$force_update = function(this$,deep){
switch(arguments.length){
case 1:
return reagent$core$force_update__1.call(this,this$);
case 2:
return reagent$core$force_update__2.call(this,this$,deep);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$force_update.cljs$core$IFn$_invoke$arity$1 = reagent$core$force_update__1;
reagent$core$force_update.cljs$core$IFn$_invoke$arity$2 = reagent$core$force_update__2;
return reagent$core$force_update;
})()
;
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

return reagent.impl.util.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

return reagent.impl.util.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(cljs.core.truth_(reagent.impl.util.reagent_component_QMARK_(this$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$util_SLASH_reagent_DASH_component_QMARK_,cljs.core.cst$sym$this)], 0)))].join('')));
}

return reagent.impl.util.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return (this$["getDOMNode"])();
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 * @param {...*} var_args
 */
reagent.core.atom = (function() {
var reagent$core$atom = null;
var reagent$core$atom__1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});
var reagent$core$atom__2 = (function() { 
var G__6698__delegate = function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
};
var G__6698 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__6699__i = 0, G__6699__a = new Array(arguments.length -  1);
while (G__6699__i < G__6699__a.length) {G__6699__a[G__6699__i] = arguments[G__6699__i + 1]; ++G__6699__i;}
  rest = new cljs.core.IndexedSeq(G__6699__a,0);
} 
return G__6698__delegate.call(this,x,rest);};
G__6698.cljs$lang$maxFixedArity = 1;
G__6698.cljs$lang$applyTo = (function (arglist__6700){
var x = cljs.core.first(arglist__6700);
var rest = cljs.core.rest(arglist__6700);
return G__6698__delegate(x,rest);
});
G__6698.cljs$core$IFn$_invoke$arity$variadic = G__6698__delegate;
return G__6698;
})()
;
reagent$core$atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return reagent$core$atom__1.call(this,x);
default:
var G__6701 = null;
if (arguments.length > 1) {
var G__6702__i = 0, G__6702__a = new Array(arguments.length -  1);
while (G__6702__i < G__6702__a.length) {G__6702__a[G__6702__i] = arguments[G__6702__i + 1]; ++G__6702__i;}
G__6701 = new cljs.core.IndexedSeq(G__6702__a,0);
}
return reagent$core$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__6701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$atom.cljs$lang$maxFixedArity = 1;
reagent$core$atom.cljs$lang$applyTo = reagent$core$atom__2.cljs$lang$applyTo;
reagent$core$atom.cljs$core$IFn$_invoke$arity$1 = reagent$core$atom__1;
reagent$core$atom.cljs$core$IFn$_invoke$arity$variadic = reagent$core$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return reagent$core$atom;
})()
;
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 * The first argument can be any value, that will be returned when the
 * result is deref'ed.
 * 
 * The second argument should be a function, that is called with the
 * optional extra arguments provided to wrap, and the new value of the
 * resulting 'atom'.
 * 
 * Use for example like this:
 * 
 * (wrap (:foo @state)
 * swap! state assoc :foo)
 * 
 * Probably useful only for passing to child components.
 * @param {...*} var_args
 */
reagent.core.wrap = (function() { 
var reagent$core$wrap__delegate = function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$reset_DASH_fn)], 0)))].join('')));
}

return reagent.ratom.make_wrapper(value,reset_fn,args);
};
var reagent$core$wrap = function (value,reset_fn,var_args){
var args = null;
if (arguments.length > 2) {
var G__6703__i = 0, G__6703__a = new Array(arguments.length -  2);
while (G__6703__i < G__6703__a.length) {G__6703__a[G__6703__i] = arguments[G__6703__i + 2]; ++G__6703__i;}
  args = new cljs.core.IndexedSeq(G__6703__a,0);
} 
return reagent$core$wrap__delegate.call(this,value,reset_fn,args);};
reagent$core$wrap.cljs$lang$maxFixedArity = 2;
reagent$core$wrap.cljs$lang$applyTo = (function (arglist__6704){
var value = cljs.core.first(arglist__6704);
arglist__6704 = cljs.core.next(arglist__6704);
var reset_fn = cljs.core.first(arglist__6704);
var args = cljs.core.rest(arglist__6704);
return reagent$core$wrap__delegate(value,reset_fn,args);
});
reagent$core$wrap.cljs$core$IFn$_invoke$arity$variadic = reagent$core$wrap__delegate;
return reagent$core$wrap;
})()
;
/**
 * Provide a cursor into a Reagent atom.
 * 
 * Behaves like a Reagent atom but focuses updates and derefs to
 * the specified path within the wrapped Reagent atom. e.g.,
 * (let [c (cursor ra [:nested :content])]
 * ... @c ;; equivalent to (get-in @ra [:nested :content])
 * ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 * ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 * )
 * 
 * The first parameter can also be a function, that should look something
 * like this:
 * 
 * (defn set-get
 * ([k] (get-in @state k))
 * ([k v] (swap! state assoc-in k v)))
 * 
 * The function will be called with one argument – the path passed to
 * cursor – when the cursor is deref'ed, and two arguments (path and new
 * value) when the cursor is modified.
 * 
 * Given that set-get function, (and that state is a Reagent atom, or
 * another cursor) these cursors are equivalent:
 * (cursor state [:foo]) and (cursor set-get [:foo]).
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor(src,path);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(f) : reagent.impl.batching.next_tick.call(null,f));
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 * @param {...*} var_args
 */
reagent.core.partial = (function() { 
var reagent$core$partial__delegate = function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
};
var reagent$core$partial = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__6705__i = 0, G__6705__a = new Array(arguments.length -  1);
while (G__6705__i < G__6705__a.length) {G__6705__a[G__6705__i] = arguments[G__6705__i + 1]; ++G__6705__i;}
  args = new cljs.core.IndexedSeq(G__6705__a,0);
} 
return reagent$core$partial__delegate.call(this,f,args);};
reagent$core$partial.cljs$lang$maxFixedArity = 1;
reagent$core$partial.cljs$lang$applyTo = (function (arglist__6706){
var f = cljs.core.first(arglist__6706);
var args = cljs.core.rest(arglist__6706);
return reagent$core$partial__delegate(f,args);
});
reagent$core$partial.cljs$core$IFn$_invoke$arity$variadic = reagent$core$partial__delegate;
return reagent$core$partial;
})()
;
