// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.array');
goog.require('goog.string.StringBuffer');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2411";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
 * Each runtime environment provides a different way to print output.
 * Whatever function *print-fn* is bound to will be passed any
 * Strings which should be printed.
 */
cljs.core._STAR_print_fn_STAR_ = (function cljs$core$_STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
 * Set *print-fn* to f.
 */
cljs.core.set_print_fn_BANG_ = (function cljs$core$set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function cljs$core$pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$flush_DASH_on_DASH_newline,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.cst$kw$readably,cljs.core._STAR_print_readably_STAR_,cljs.core.cst$kw$meta,cljs.core._STAR_print_meta_STAR_,cljs.core.cst$kw$dup,cljs.core._STAR_print_dup_STAR_,cljs.core.cst$kw$print_DASH_length,cljs.core._STAR_print_length_STAR_], null);
});
/**
 * Set *print-fn* to console.log
 */
cljs.core.enable_console_print_BANG_ = (function cljs$core$enable_console_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7154__delegate = function (args){
return console.log.apply(console,(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args) : cljs.core.into_array.call(null,args)));
};
var G__7154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7155__i = 0, G__7155__a = new Array(arguments.length -  0);
while (G__7155__i < G__7155__a.length) {G__7155__a[G__7155__i] = arguments[G__7155__i + 0]; ++G__7155__i;}
  args = new cljs.core.IndexedSeq(G__7155__a,0);
} 
return G__7154__delegate.call(this,args);};
G__7154.cljs$lang$maxFixedArity = 0;
G__7154.cljs$lang$applyTo = (function (arglist__7156){
var args = cljs.core.seq(arglist__7156);
return G__7154__delegate(args);
});
G__7154.cljs$core$IFn$_invoke$arity$variadic = G__7154__delegate;
return G__7154;
})()
;
});
/**
 * Internal - do not use!
 */
cljs.core.truth_ = (function cljs$core$truth_(x){
return (x != null && x !== false);
});
cljs.core.not_native = null;

/**
 * Tests if 2 arguments are the same object
 */
cljs.core.identical_QMARK_ = (function cljs$core$identical_QMARK_(x,y){
return (x === y);
});
/**
 * Returns true if x is nil, false otherwise.
 */
cljs.core.nil_QMARK_ = (function cljs$core$nil_QMARK_(x){
return (x == null);
});
cljs.core.array_QMARK_ = (function cljs$core$array_QMARK_(x){
return x instanceof Array;
});
cljs.core.number_QMARK_ = (function cljs$core$number_QMARK_(n){
return typeof n === 'number';
});
/**
 * Returns true if x is logical false, false otherwise.
 */
cljs.core.not = (function cljs$core$not(x){
if(cljs.core.truth_(x)){
return false;
} else {
return true;
}
});
/**
 * Returns true if x is not nil, false otherwise.
 */
cljs.core.some_QMARK_ = (function cljs$core$some_QMARK_(x){
return !((x == null));
});
cljs.core.object_QMARK_ = (function cljs$core$object_QMARK_(x){
if(!((x == null))){
return (x.constructor === Object);
} else {
return false;
}
});
cljs.core.string_QMARK_ = (function cljs$core$string_QMARK_(x){
return goog.isString(x);
});
/**
 * Internal - do not use!
 */
cljs.core.native_satisfies_QMARK_ = (function cljs$core$native_satisfies_QMARK_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[goog.typeOf(x__$1)])){
return true;
} else {
if((p["_"])){
return true;
} else {
return false;

}
}
});
cljs.core.is_proto_ = (function cljs$core$is_proto_(x){
return (x.constructor.prototype === x);
});
/**
 * When compiled for a command-line target, whatever
 * function *main-fn* is set to will be called with the command-line
 * argv as arguments
 */
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function cljs$core$type(x){
if((x == null)){
return null;
} else {
return x.constructor;
}
});
cljs.core.missing_protocol = (function cljs$core$missing_protocol(proto,obj){
var ty = cljs.core.type(obj);
var ty__$1 = (cljs.core.truth_((function (){var and__547__auto__ = ty;
if(cljs.core.truth_(and__547__auto__)){
return ty.cljs$lang$type;
} else {
return and__547__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));
return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function cljs$core$type__GT_str(ty){
var temp__4423__auto__ = ty.cljs$lang$ctorStr;
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s;
} else {
return [cljs.core.str(ty)].join('');
}
});
if((typeof Symbol !== 'undefined') && ((goog.typeOf(Symbol) === "function"))){
cljs.core.ITER_SYMBOL = Symbol.iterator;
} else {
cljs.core.ITER_SYMBOL = "@@iterator";
}
cljs.core.make_array = (function() {
var cljs$core$make_array = null;
var cljs$core$make_array__1 = (function (size){
return (new Array(size));
});
var cljs$core$make_array__2 = (function (type,size){
return cljs$core$make_array.cljs$core$IFn$_invoke$arity$1(size);
});
cljs$core$make_array = function(type,size){
switch(arguments.length){
case 1:
return cljs$core$make_array__1.call(this,type);
case 2:
return cljs$core$make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$make_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$make_array__1;
cljs$core$make_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$make_array__2;
return cljs$core$make_array;
})()
;
/**
 * Returns a javascript array, cloned from the passed in array
 */
cljs.core.aclone = (function cljs$core$aclone(arr){
var len = arr.length;
var new_arr = (new Array(len));
var n__1441__auto___7157 = len;
var i_7158 = (0);
while(true){
if((i_7158 < n__1441__auto___7157)){
(new_arr[i_7158] = (arr[i_7158]));

var G__7159 = (i_7158 + (1));
i_7158 = G__7159;
continue;
} else {
}
break;
}

return new_arr;
});
/**
 * Creates a new javascript array.
 * @param {...*} var_args
 */
cljs.core.array = (function cljs$core$array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
 * Returns the value at the index.
 * @param {...*} var_args
 */
cljs.core.aget = (function() {
var cljs$core$aget = null;
var cljs$core$aget__2 = (function (array,i){
return (array[i]);
});
var cljs$core$aget__3 = (function() { 
var G__7166__delegate = function (array,i,idxs){
var G__7163 = cljs$core$aget;
var G__7164 = cljs$core$aget.cljs$core$IFn$_invoke$arity$2(array,i);
var G__7165 = idxs;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__7163,G__7164,G__7165) : cljs.core.apply.call(null,G__7163,G__7164,G__7165));
};
var G__7166 = function (array,i,var_args){
var idxs = null;
if (arguments.length > 2) {
var G__7167__i = 0, G__7167__a = new Array(arguments.length -  2);
while (G__7167__i < G__7167__a.length) {G__7167__a[G__7167__i] = arguments[G__7167__i + 2]; ++G__7167__i;}
  idxs = new cljs.core.IndexedSeq(G__7167__a,0);
} 
return G__7166__delegate.call(this,array,i,idxs);};
G__7166.cljs$lang$maxFixedArity = 2;
G__7166.cljs$lang$applyTo = (function (arglist__7168){
var array = cljs.core.first(arglist__7168);
arglist__7168 = cljs.core.next(arglist__7168);
var i = cljs.core.first(arglist__7168);
var idxs = cljs.core.rest(arglist__7168);
return G__7166__delegate(array,i,idxs);
});
G__7166.cljs$core$IFn$_invoke$arity$variadic = G__7166__delegate;
return G__7166;
})()
;
cljs$core$aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return cljs$core$aget__2.call(this,array,i);
default:
var G__7169 = null;
if (arguments.length > 2) {
var G__7170__i = 0, G__7170__a = new Array(arguments.length -  2);
while (G__7170__i < G__7170__a.length) {G__7170__a[G__7170__i] = arguments[G__7170__i + 2]; ++G__7170__i;}
G__7169 = new cljs.core.IndexedSeq(G__7170__a,0);
}
return cljs$core$aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, G__7169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$aget.cljs$lang$maxFixedArity = 2;
cljs$core$aget.cljs$lang$applyTo = cljs$core$aget__3.cljs$lang$applyTo;
cljs$core$aget.cljs$core$IFn$_invoke$arity$2 = cljs$core$aget__2;
cljs$core$aget.cljs$core$IFn$_invoke$arity$variadic = cljs$core$aget__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$aget;
})()
;
/**
 * Sets the value at the index.
 * @param {...*} var_args
 */
cljs.core.aset = (function() {
var cljs$core$aset = null;
var cljs$core$aset__3 = (function (array,i,val){
return (array[i] = val);
});
var cljs$core$aset__4 = (function() { 
var G__7179__delegate = function (array,idx,idx2,idxv){
var G__7175 = cljs$core$aset;
var G__7176 = (array[idx]);
var G__7177 = idx2;
var G__7178 = idxv;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(G__7175,G__7176,G__7177,G__7178) : cljs.core.apply.call(null,G__7175,G__7176,G__7177,G__7178));
};
var G__7179 = function (array,idx,idx2,var_args){
var idxv = null;
if (arguments.length > 3) {
var G__7180__i = 0, G__7180__a = new Array(arguments.length -  3);
while (G__7180__i < G__7180__a.length) {G__7180__a[G__7180__i] = arguments[G__7180__i + 3]; ++G__7180__i;}
  idxv = new cljs.core.IndexedSeq(G__7180__a,0);
} 
return G__7179__delegate.call(this,array,idx,idx2,idxv);};
G__7179.cljs$lang$maxFixedArity = 3;
G__7179.cljs$lang$applyTo = (function (arglist__7181){
var array = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var idx = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var idx2 = cljs.core.first(arglist__7181);
var idxv = cljs.core.rest(arglist__7181);
return G__7179__delegate(array,idx,idx2,idxv);
});
G__7179.cljs$core$IFn$_invoke$arity$variadic = G__7179__delegate;
return G__7179;
})()
;
cljs$core$aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return cljs$core$aset__3.call(this,array,idx,idx2);
default:
var G__7182 = null;
if (arguments.length > 3) {
var G__7183__i = 0, G__7183__a = new Array(arguments.length -  3);
while (G__7183__i < G__7183__a.length) {G__7183__a[G__7183__i] = arguments[G__7183__i + 3]; ++G__7183__i;}
G__7182 = new cljs.core.IndexedSeq(G__7183__a,0);
}
return cljs$core$aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, G__7182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$aset.cljs$lang$maxFixedArity = 3;
cljs$core$aset.cljs$lang$applyTo = cljs$core$aset__4.cljs$lang$applyTo;
cljs$core$aset.cljs$core$IFn$_invoke$arity$3 = cljs$core$aset__3;
cljs$core$aset.cljs$core$IFn$_invoke$arity$variadic = cljs$core$aset__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$aset;
})()
;
/**
 * Returns the length of the array. Works on arrays of all types.
 */
cljs.core.alength = (function cljs$core$alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var cljs$core$into_array = null;
var cljs$core$into_array__1 = (function (aseq){
return cljs$core$into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var cljs$core$into_array__2 = (function (type,aseq){
var G__7187 = (function (a,x){
a.push(x);

return a;
});
var G__7188 = [];
var G__7189 = aseq;
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__7187,G__7188,G__7189) : cljs.core.reduce.call(null,G__7187,G__7188,G__7189));
});
cljs$core$into_array = function(type,aseq){
switch(arguments.length){
case 1:
return cljs$core$into_array__1.call(this,type);
case 2:
return cljs$core$into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$into_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$into_array__1;
cljs$core$into_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$into_array__2;
return cljs$core$into_array;
})()
;
/**
 * Invoke JavaScript object method via string. Needed when the
 * string is not a valid unquoted property name.
 * @param {...*} var_args
 */
cljs.core.js_invoke = (function() { 
var cljs$core$js_invoke__delegate = function (obj,s,args){
return (obj[s]).apply(obj,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var cljs$core$js_invoke = function (obj,s,var_args){
var args = null;
if (arguments.length > 2) {
var G__7190__i = 0, G__7190__a = new Array(arguments.length -  2);
while (G__7190__i < G__7190__a.length) {G__7190__a[G__7190__i] = arguments[G__7190__i + 2]; ++G__7190__i;}
  args = new cljs.core.IndexedSeq(G__7190__a,0);
} 
return cljs$core$js_invoke__delegate.call(this,obj,s,args);};
cljs$core$js_invoke.cljs$lang$maxFixedArity = 2;
cljs$core$js_invoke.cljs$lang$applyTo = (function (arglist__7191){
var obj = cljs.core.first(arglist__7191);
arglist__7191 = cljs.core.next(arglist__7191);
var s = cljs.core.first(arglist__7191);
var args = cljs.core.rest(arglist__7191);
return cljs$core$js_invoke__delegate(obj,s,args);
});
cljs$core$js_invoke.cljs$core$IFn$_invoke$arity$variadic = cljs$core$js_invoke__delegate;
return cljs$core$js_invoke;
})()
;

cljs.core.Fn = (function (){var obj7193 = {};
return obj7193;
})();


cljs.core.IFn = (function (){var obj7195 = {};
return obj7195;
})();

cljs.core._invoke = (function() {
var cljs$core$_invoke = null;
var cljs$core$_invoke__1 = (function (this$){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$1;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var cljs$core$_invoke__2 = (function (this$,a){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$2;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var cljs$core$_invoke__3 = (function (this$,a,b){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$3;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var cljs$core$_invoke__4 = (function (this$,a,b,c){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$4;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var cljs$core$_invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$5;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var cljs$core$_invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$6;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var cljs$core$_invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$7;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var cljs$core$_invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$8;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var cljs$core$_invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$9;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var cljs$core$_invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$10;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var cljs$core$_invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$11;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var cljs$core$_invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$12;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var cljs$core$_invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$13;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var cljs$core$_invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$14;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var cljs$core$_invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$15;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var cljs$core$_invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$16;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var cljs$core$_invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$17;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var cljs$core$_invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$18;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var cljs$core$_invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$19;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
}
});
var cljs$core$_invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$20;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
});
var cljs$core$_invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$21;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
});
var cljs$core$_invoke__22 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IFn$_invoke$arity$22;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IFn$_invoke$arity$22(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._invoke[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._invoke["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
});
cljs$core$_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return cljs$core$_invoke__1.call(this,this$);
case 2:
return cljs$core$_invoke__2.call(this,this$,a);
case 3:
return cljs$core$_invoke__3.call(this,this$,a,b);
case 4:
return cljs$core$_invoke__4.call(this,this$,a,b,c);
case 5:
return cljs$core$_invoke__5.call(this,this$,a,b,c,d);
case 6:
return cljs$core$_invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return cljs$core$_invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return cljs$core$_invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return cljs$core$_invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return cljs$core$_invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return cljs$core$_invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return cljs$core$_invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return cljs$core$_invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return cljs$core$_invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return cljs$core$_invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return cljs$core$_invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return cljs$core$_invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return cljs$core$_invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return cljs$core$_invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return cljs$core$_invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return cljs$core$_invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return cljs$core$_invoke__22.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$1 = cljs$core$_invoke__1;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$2 = cljs$core$_invoke__2;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$3 = cljs$core$_invoke__3;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$4 = cljs$core$_invoke__4;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$5 = cljs$core$_invoke__5;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$6 = cljs$core$_invoke__6;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$7 = cljs$core$_invoke__7;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$8 = cljs$core$_invoke__8;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$9 = cljs$core$_invoke__9;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$10 = cljs$core$_invoke__10;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$11 = cljs$core$_invoke__11;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$12 = cljs$core$_invoke__12;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$13 = cljs$core$_invoke__13;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$14 = cljs$core$_invoke__14;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$15 = cljs$core$_invoke__15;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$16 = cljs$core$_invoke__16;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$17 = cljs$core$_invoke__17;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$18 = cljs$core$_invoke__18;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$19 = cljs$core$_invoke__19;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$20 = cljs$core$_invoke__20;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$21 = cljs$core$_invoke__21;
cljs$core$_invoke.cljs$core$IFn$_invoke$arity$22 = cljs$core$_invoke__22;
return cljs$core$_invoke;
})()
;


cljs.core.ICloneable = (function (){var obj7197 = {};
return obj7197;
})();

cljs.core._clone = (function cljs$core$_clone(value){
if((function (){var and__547__auto__ = value;
if(and__547__auto__){
return value.cljs$core$ICloneable$_clone$arity$1;
} else {
return and__547__auto__;
}
})()){
return value.cljs$core$ICloneable$_clone$arity$1(value);
} else {
var x__1198__auto__ = (((value == null))?null:value);
return (function (){var or__559__auto__ = (cljs.core._clone[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._clone["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});


cljs.core.ICounted = (function (){var obj7199 = {};
return obj7199;
})();

cljs.core._count = (function cljs$core$_count(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ICounted$_count$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._count[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._count["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IEmptyableCollection = (function (){var obj7201 = {};
return obj7201;
})();

cljs.core._empty = (function cljs$core$_empty(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._empty[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._empty["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ICollection = (function (){var obj7203 = {};
return obj7203;
})();

cljs.core._conj = (function cljs$core$_conj(coll,o){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ICollection$_conj$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._conj[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._conj["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});


cljs.core.IIndexed = (function (){var obj7205 = {};
return obj7205;
})();

cljs.core._nth = (function() {
var cljs$core$_nth = null;
var cljs$core$_nth__2 = (function (coll,n){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IIndexed$_nth$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._nth[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._nth["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var cljs$core$_nth__3 = (function (coll,n,not_found){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IIndexed$_nth$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._nth[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._nth["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
cljs$core$_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return cljs$core$_nth__2.call(this,coll,n);
case 3:
return cljs$core$_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_nth.cljs$core$IFn$_invoke$arity$2 = cljs$core$_nth__2;
cljs$core$_nth.cljs$core$IFn$_invoke$arity$3 = cljs$core$_nth__3;
return cljs$core$_nth;
})()
;


cljs.core.ASeq = (function (){var obj7207 = {};
return obj7207;
})();


cljs.core.ISeq = (function (){var obj7209 = {};
return obj7209;
})();

cljs.core._first = (function cljs$core$_first(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISeq$_first$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._first[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._first["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._rest = (function cljs$core$_rest(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISeq$_rest$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._rest[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._rest["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INext = (function (){var obj7211 = {};
return obj7211;
})();

cljs.core._next = (function cljs$core$_next(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$INext$_next$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$INext$_next$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._next[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._next["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ILookup = (function (){var obj7213 = {};
return obj7213;
})();

cljs.core._lookup = (function() {
var cljs$core$_lookup = null;
var cljs$core$_lookup__2 = (function (o,k){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ILookup$_lookup$arity$2;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._lookup[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._lookup["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var cljs$core$_lookup__3 = (function (o,k,not_found){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ILookup$_lookup$arity$3;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._lookup[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._lookup["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
cljs$core$_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return cljs$core$_lookup__2.call(this,o,k);
case 3:
return cljs$core$_lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_lookup.cljs$core$IFn$_invoke$arity$2 = cljs$core$_lookup__2;
cljs$core$_lookup.cljs$core$IFn$_invoke$arity$3 = cljs$core$_lookup__3;
return cljs$core$_lookup;
})()
;


cljs.core.IAssociative = (function (){var obj7215 = {};
return obj7215;
})();

cljs.core._contains_key_QMARK_ = (function cljs$core$_contains_key_QMARK_(coll,k){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});

cljs.core._assoc = (function cljs$core$_assoc(coll,k,v){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IAssociative$_assoc$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._assoc[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._assoc["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});


cljs.core.IMap = (function (){var obj7217 = {};
return obj7217;
})();

cljs.core._dissoc = (function cljs$core$_dissoc(coll,k){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IMap$_dissoc$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._dissoc[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._dissoc["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});


cljs.core.IMapEntry = (function (){var obj7219 = {};
return obj7219;
})();

cljs.core._key = (function cljs$core$_key(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IMapEntry$_key$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._key[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._key["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});

cljs.core._val = (function cljs$core$_val(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IMapEntry$_val$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._val[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._val["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISet = (function (){var obj7221 = {};
return obj7221;
})();

cljs.core._disjoin = (function cljs$core$_disjoin(coll,v){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISet$_disjoin$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._disjoin[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._disjoin["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});


cljs.core.IStack = (function (){var obj7223 = {};
return obj7223;
})();

cljs.core._peek = (function cljs$core$_peek(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IStack$_peek$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IStack$_peek$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._peek[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._peek["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});

cljs.core._pop = (function cljs$core$_pop(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IStack$_pop$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IStack$_pop$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._pop[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._pop["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IVector = (function (){var obj7225 = {};
return obj7225;
})();

cljs.core._assoc_n = (function cljs$core$_assoc_n(coll,n,val){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IVector$_assoc_n$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._assoc_n[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});


cljs.core.IDeref = (function (){var obj7227 = {};
return obj7227;
})();

cljs.core._deref = (function cljs$core$_deref(o){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IDeref$_deref$arity$1;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IDeref$_deref$arity$1(o);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._deref[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._deref["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});


cljs.core.IDerefWithTimeout = (function (){var obj7229 = {};
return obj7229;
})();

cljs.core._deref_with_timeout = (function cljs$core$_deref_with_timeout(o,msec,timeout_val){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});


cljs.core.IMeta = (function (){var obj7231 = {};
return obj7231;
})();

cljs.core._meta = (function cljs$core$_meta(o){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IMeta$_meta$arity$1;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IMeta$_meta$arity$1(o);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._meta[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._meta["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});


cljs.core.IWithMeta = (function (){var obj7233 = {};
return obj7233;
})();

cljs.core._with_meta = (function cljs$core$_with_meta(o,meta){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._with_meta[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._with_meta["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});


cljs.core.IReduce = (function (){var obj7235 = {};
return obj7235;
})();

cljs.core._reduce = (function() {
var cljs$core$_reduce = null;
var cljs$core$_reduce__2 = (function (coll,f){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IReduce$_reduce$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._reduce[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._reduce["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var cljs$core$_reduce__3 = (function (coll,f,start){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IReduce$_reduce$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._reduce[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._reduce["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
cljs$core$_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return cljs$core$_reduce__2.call(this,coll,f);
case 3:
return cljs$core$_reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_reduce.cljs$core$IFn$_invoke$arity$2 = cljs$core$_reduce__2;
cljs$core$_reduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$_reduce__3;
return cljs$core$_reduce;
})()
;


cljs.core.IKVReduce = (function (){var obj7237 = {};
return obj7237;
})();

cljs.core._kv_reduce = (function cljs$core$_kv_reduce(coll,f,init){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});


cljs.core.IEquiv = (function (){var obj7239 = {};
return obj7239;
})();

cljs.core._equiv = (function cljs$core$_equiv(o,other){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IEquiv$_equiv$arity$2;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._equiv[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._equiv["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});


cljs.core.IHash = (function (){var obj7241 = {};
return obj7241;
})();

cljs.core._hash = (function cljs$core$_hash(o){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IHash$_hash$arity$1;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(o);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._hash[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._hash["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});


cljs.core.ISeqable = (function (){var obj7243 = {};
return obj7243;
})();

cljs.core._seq = (function cljs$core$_seq(o){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ISeqable$_seq$arity$1;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ISeqable$_seq$arity$1(o);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._seq[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._seq["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});


cljs.core.ISequential = (function (){var obj7245 = {};
return obj7245;
})();


cljs.core.IList = (function (){var obj7247 = {};
return obj7247;
})();


cljs.core.IRecord = (function (){var obj7249 = {};
return obj7249;
})();


cljs.core.IReversible = (function (){var obj7251 = {};
return obj7251;
})();

cljs.core._rseq = (function cljs$core$_rseq(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IReversible$_rseq$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._rseq[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._rseq["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ISorted = (function (){var obj7253 = {};
return obj7253;
})();

cljs.core._sorted_seq = (function cljs$core$_sorted_seq(coll,ascending_QMARK_){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});

cljs.core._sorted_seq_from = (function cljs$core$_sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});

cljs.core._entry_key = (function cljs$core$_entry_key(coll,entry){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISorted$_entry_key$arity$2;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._entry_key[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._entry_key["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});

cljs.core._comparator = (function cljs$core$_comparator(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$ISorted$_comparator$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._comparator[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._comparator["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IWriter = (function (){var obj7255 = {};
return obj7255;
})();

cljs.core._write = (function cljs$core$_write(writer,s){
if((function (){var and__547__auto__ = writer;
if(and__547__auto__){
return writer.cljs$core$IWriter$_write$arity$2;
} else {
return and__547__auto__;
}
})()){
return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else {
var x__1198__auto__ = (((writer == null))?null:writer);
return (function (){var or__559__auto__ = (cljs.core._write[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._write["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});

cljs.core._flush = (function cljs$core$_flush(writer){
if((function (){var and__547__auto__ = writer;
if(and__547__auto__){
return writer.cljs$core$IWriter$_flush$arity$1;
} else {
return and__547__auto__;
}
})()){
return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else {
var x__1198__auto__ = (((writer == null))?null:writer);
return (function (){var or__559__auto__ = (cljs.core._flush[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._flush["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});


cljs.core.IPrintWithWriter = (function (){var obj7257 = {};
return obj7257;
})();

cljs.core._pr_writer = (function cljs$core$_pr_writer(o,writer,opts){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._pr_writer[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});


cljs.core.IPending = (function (){var obj7259 = {};
return obj7259;
})();

cljs.core._realized_QMARK_ = (function cljs$core$_realized_QMARK_(d){
if((function (){var and__547__auto__ = d;
if(and__547__auto__){
return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else {
return and__547__auto__;
}
})()){
return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else {
var x__1198__auto__ = (((d == null))?null:d);
return (function (){var or__559__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});


cljs.core.IWatchable = (function (){var obj7261 = {};
return obj7261;
})();

cljs.core._notify_watches = (function cljs$core$_notify_watches(this$,oldval,newval){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._notify_watches[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});

cljs.core._add_watch = (function cljs$core$_add_watch(this$,key,f){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._add_watch[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._add_watch["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});

cljs.core._remove_watch = (function cljs$core$_remove_watch(this$,key){
if((function (){var and__547__auto__ = this$;
if(and__547__auto__){
return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else {
return and__547__auto__;
}
})()){
return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else {
var x__1198__auto__ = (((this$ == null))?null:this$);
return (function (){var or__559__auto__ = (cljs.core._remove_watch[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});


cljs.core.IEditableCollection = (function (){var obj7263 = {};
return obj7263;
})();

cljs.core._as_transient = (function cljs$core$_as_transient(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._as_transient[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._as_transient["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});


cljs.core.ITransientCollection = (function (){var obj7265 = {};
return obj7265;
})();

cljs.core._conj_BANG_ = (function cljs$core$_conj_BANG_(tcoll,val){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});

cljs.core._persistent_BANG_ = (function cljs$core$_persistent_BANG_(tcoll){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientAssociative = (function (){var obj7267 = {};
return obj7267;
})();

cljs.core._assoc_BANG_ = (function cljs$core$_assoc_BANG_(tcoll,key,val){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});


cljs.core.ITransientMap = (function (){var obj7269 = {};
return obj7269;
})();

cljs.core._dissoc_BANG_ = (function cljs$core$_dissoc_BANG_(tcoll,key){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});


cljs.core.ITransientVector = (function (){var obj7271 = {};
return obj7271;
})();

cljs.core._assoc_n_BANG_ = (function cljs$core$_assoc_n_BANG_(tcoll,n,val){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});

cljs.core._pop_BANG_ = (function cljs$core$_pop_BANG_(tcoll){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});


cljs.core.ITransientSet = (function (){var obj7273 = {};
return obj7273;
})();

cljs.core._disjoin_BANG_ = (function cljs$core$_disjoin_BANG_(tcoll,v){
if((function (){var and__547__auto__ = tcoll;
if(and__547__auto__){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else {
return and__547__auto__;
}
})()){
return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else {
var x__1198__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__559__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});


cljs.core.IComparable = (function (){var obj7275 = {};
return obj7275;
})();

cljs.core._compare = (function cljs$core$_compare(x,y){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$IComparable$_compare$arity$2;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._compare[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._compare["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});


cljs.core.IChunk = (function (){var obj7277 = {};
return obj7277;
})();

cljs.core._drop_first = (function cljs$core$_drop_first(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IChunk$_drop_first$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._drop_first[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._drop_first["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedSeq = (function (){var obj7279 = {};
return obj7279;
})();

cljs.core._chunked_first = (function cljs$core$_chunked_first(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._chunked_first[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});

cljs.core._chunked_rest = (function cljs$core$_chunked_rest(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});


cljs.core.IChunkedNext = (function (){var obj7281 = {};
return obj7281;
})();

cljs.core._chunked_next = (function cljs$core$_chunked_next(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._chunked_next[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});


cljs.core.INamed = (function (){var obj7283 = {};
return obj7283;
})();

cljs.core._name = (function cljs$core$_name(x){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$INamed$_name$arity$1;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$INamed$_name$arity$1(x);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._name[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._name["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});

cljs.core._namespace = (function cljs$core$_namespace(x){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$INamed$_namespace$arity$1;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(x);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._namespace[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._namespace["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("INamed.-namespace",x);
}
}
})().call(null,x);
}
});


cljs.core.IAtom = (function (){var obj7285 = {};
return obj7285;
})();


cljs.core.IReset = (function (){var obj7287 = {};
return obj7287;
})();

cljs.core._reset_BANG_ = (function cljs$core$_reset_BANG_(o,new_value){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$IReset$_reset_BANG_$arity$2;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$IReset$_reset_BANG_$arity$2(o,new_value);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._reset_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._reset_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IReset.-reset!",o);
}
}
})().call(null,o,new_value);
}
});


cljs.core.ISwap = (function (){var obj7289 = {};
return obj7289;
})();

cljs.core._swap_BANG_ = (function() {
var cljs$core$_swap_BANG_ = null;
var cljs$core$_swap_BANG___2 = (function (o,f){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$2;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$2(o,f);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f);
}
});
var cljs$core$_swap_BANG___3 = (function (o,f,a){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$3;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$3(o,f,a);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a);
}
});
var cljs$core$_swap_BANG___4 = (function (o,f,a,b){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$4;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$4(o,f,a,b);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b);
}
});
var cljs$core$_swap_BANG___5 = (function (o,f,a,b,xs){
if((function (){var and__547__auto__ = o;
if(and__547__auto__){
return o.cljs$core$ISwap$_swap_BANG_$arity$5;
} else {
return and__547__auto__;
}
})()){
return o.cljs$core$ISwap$_swap_BANG_$arity$5(o,f,a,b,xs);
} else {
var x__1198__auto__ = (((o == null))?null:o);
return (function (){var or__559__auto__ = (cljs.core._swap_BANG_[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._swap_BANG_["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("ISwap.-swap!",o);
}
}
})().call(null,o,f,a,b,xs);
}
});
cljs$core$_swap_BANG_ = function(o,f,a,b,xs){
switch(arguments.length){
case 2:
return cljs$core$_swap_BANG___2.call(this,o,f);
case 3:
return cljs$core$_swap_BANG___3.call(this,o,f,a);
case 4:
return cljs$core$_swap_BANG___4.call(this,o,f,a,b);
case 5:
return cljs$core$_swap_BANG___5.call(this,o,f,a,b,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_swap_BANG___2;
cljs$core$_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$_swap_BANG___3;
cljs$core$_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$_swap_BANG___4;
cljs$core$_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = cljs$core$_swap_BANG___5;
return cljs$core$_swap_BANG_;
})()
;


cljs.core.IIterable = (function (){var obj7291 = {};
return obj7291;
})();

cljs.core._iterator = (function cljs$core$_iterator(coll){
if((function (){var and__547__auto__ = coll;
if(and__547__auto__){
return coll.cljs$core$IIterable$_iterator$arity$1;
} else {
return and__547__auto__;
}
})()){
return coll.cljs$core$IIterable$_iterator$arity$1(coll);
} else {
var x__1198__auto__ = (((coll == null))?null:coll);
return (function (){var or__559__auto__ = (cljs.core._iterator[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._iterator["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IIterable.-iterator",coll);
}
}
})().call(null,coll);
}
});


/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.append(s);
});

cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

cljs.core.StringBufferWriter.cljs$lang$type = true;

cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";

cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/StringBufferWriter");
});

cljs.core.__GT_StringBufferWriter = (function cljs$core$__GT_StringBufferWriter(sb){
return (new cljs.core.StringBufferWriter(sb));
});

/**
 * Support so that collections can implement toString without
 * loading all the printing machinery.
 */
cljs.core.pr_str_STAR_ = (function cljs$core$pr_str_STAR_(obj){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());

writer.cljs$core$IWriter$_flush$arity$1(null);

return [cljs.core.str(sb)].join('');
});
cljs.core.int_rotate_left = (function cljs$core$int_rotate_left(x,n){
return ((x << n) | (x >>> (- n)));
});
if((typeof Math.imul !== 'undefined') && (!((Math.imul((4294967295),(5)) === (0))))){
cljs.core.imul = (function cljs$core$imul(a,b){
return Math.imul(a,b);
});
} else {
cljs.core.imul = (function cljs$core$imul(a,b){
var ah = ((a >>> (16)) & (65535));
var al = (a & (65535));
var bh = ((b >>> (16)) & (65535));
var bl = (b & (65535));
return (((al * bl) + ((((ah * bl) + (al * bh)) << (16)) >>> (0))) | (0));
});
}
cljs.core.m3_seed = (0);
cljs.core.m3_C1 = (3432918353);
cljs.core.m3_C2 = (461845907);
cljs.core.m3_mix_K1 = (function cljs$core$m3_mix_K1(k1){
return cljs.core.imul(cljs.core.int_rotate_left(cljs.core.imul(k1,cljs.core.m3_C1),(15)),cljs.core.m3_C2);
});
cljs.core.m3_mix_H1 = (function cljs$core$m3_mix_H1(h1,k1){
return (cljs.core.imul(cljs.core.int_rotate_left((h1 ^ k1),(13)),(5)) + (3864292196));
});
cljs.core.m3_fmix = (function cljs$core$m3_fmix(h1,len){
var h1__$1 = h1;
var h1__$2 = (h1__$1 ^ len);
var h1__$3 = (h1__$2 ^ (h1__$2 >>> (16)));
var h1__$4 = cljs.core.imul(h1__$3,(2246822507));
var h1__$5 = (h1__$4 ^ (h1__$4 >>> (13)));
var h1__$6 = cljs.core.imul(h1__$5,(3266489909));
var h1__$7 = (h1__$6 ^ (h1__$6 >>> (16)));
return h1__$7;
});
cljs.core.m3_hash_int = (function cljs$core$m3_hash_int(in$){
if((in$ === (0))){
return in$;
} else {
var k1 = cljs.core.m3_mix_K1(in$);
var h1 = cljs.core.m3_mix_H1(cljs.core.m3_seed,k1);
return cljs.core.m3_fmix(h1,(4));
}
});
cljs.core.m3_hash_unencoded_chars = (function cljs$core$m3_hash_unencoded_chars(in$){
var h1 = (function (){var i = (1);
var h1 = cljs.core.m3_seed;
while(true){
if((i < in$.length)){
var G__7292 = (i + (2));
var G__7293 = cljs.core.m3_mix_H1(h1,cljs.core.m3_mix_K1((in$.charCodeAt((i - (1))) | (in$.charCodeAt(i) << (16)))));
i = G__7292;
h1 = G__7293;
continue;
} else {
return h1;
}
break;
}
})();
var h1__$1 = ((((in$.length & (1)) === (1)))?(h1 ^ cljs.core.m3_mix_K1(in$.charCodeAt((in$.length - (1))))):h1);
return cljs.core.m3_fmix(h1__$1,cljs.core.imul((2),in$.length));
});



cljs.core.string_hash_cache = (function (){var obj7295 = {};
return obj7295;
})();
cljs.core.string_hash_cache_count = (0);
cljs.core.hash_string_STAR_ = (function cljs$core$hash_string_STAR_(s){
if(!((s == null))){
var len = s.length;
if((len > (0))){
var i = (0);
var hash = (0);
while(true){
if((i < len)){
var G__7296 = (i + (1));
var G__7297 = (cljs.core.imul((31),hash) + s.charCodeAt(i));
i = G__7296;
hash = G__7297;
continue;
} else {
return hash;
}
break;
}
} else {
return (0);
}
} else {
return (0);
}
});
cljs.core.add_to_string_hash_cache = (function cljs$core$add_to_string_hash_cache(k){
var h = cljs.core.hash_string_STAR_(k);
(cljs.core.string_hash_cache[k] = h);

cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + (1));

return h;
});
cljs.core.hash_string = (function cljs$core$hash_string(k){
if((cljs.core.string_hash_cache_count > (255))){
cljs.core.string_hash_cache = (function (){var obj7301 = {};
return obj7301;
})();

cljs.core.string_hash_cache_count = (0);
} else {
}

var h = (cljs.core.string_hash_cache[k]);
if(typeof h === 'number'){
return h;
} else {
return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function cljs$core$hash(o){
if((function (){var G__7303 = o;
if(G__7303){
var bit__1228__auto__ = (G__7303.cljs$lang$protocol_mask$partition0$ & (4194304));
if((bit__1228__auto__) || (G__7303.cljs$core$IHash$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$IHash$_hash$arity$1(null);
} else {
if(typeof o === 'number'){
return (Math.floor(o) % (2147483647));
} else {
if(o === true){
return (1);
} else {
if(o === false){
return (0);
} else {
if(typeof o === 'string'){
return cljs.core.m3_hash_int(cljs.core.hash_string(o));
} else {
if((o instanceof Date)){
return o.valueOf();
} else {
if((o == null)){
return (0);
} else {
return cljs.core._hash(o);

}
}
}
}
}
}
}
});
cljs.core.hash_combine = (function cljs$core$hash_combine(seed,hash){
return (seed ^ (((hash + (2654435769)) + (seed << (6))) + (seed >> (2))));
});
cljs.core.instance_QMARK_ = (function cljs$core$instance_QMARK_(t,o){
return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function cljs$core$symbol_QMARK_(x){
return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function cljs$core$hash_symbol(sym){
return cljs.core.hash_combine(cljs.core.m3_hash_unencoded_chars(sym.name),cljs.core.hash_string(sym.ns));
});
cljs.core.compare_symbols = (function cljs$core$compare_symbols(a,b){
if(cljs.core.truth_((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b) : cljs.core._EQ_.call(null,a,b)))){
return (0);
} else {
if(cljs.core.truth_((function (){var and__547__auto__ = cljs.core.not(a.ns);
if(and__547__auto__){
return b.ns;
} else {
return and__547__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not(b.ns)){
return (1);
} else {
var nsc = (function (){var G__7310 = a.ns;
var G__7311 = b.ns;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__7310,G__7311) : cljs.core.compare.call(null,G__7310,G__7311));
})();
if((nsc === (0))){
var G__7312 = a.name;
var G__7313 = b.name;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__7312,G__7313) : cljs.core.compare.call(null,G__7312,G__7313));
} else {
return nsc;
}
}
} else {
var G__7314 = a.name;
var G__7315 = b.name;
return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(G__7314,G__7315) : cljs.core.compare.call(null,G__7314,G__7315));

}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.str;
});

cljs.core.Symbol.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Symbol)){
return (self__.str === other.str);
} else {
return false;
}
});

cljs.core.Symbol.prototype.call = (function() {
var G__7317 = null;
var G__7317__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__7317__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var sym = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__7317 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__7317__2.call(this,self__,coll);
case 3:
return G__7317__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7317.cljs$core$IFn$_invoke$arity$2 = G__7317__2;
G__7317.cljs$core$IFn$_invoke$arity$3 = G__7317__3;
return G__7317;
})()
;

cljs.core.Symbol.prototype.apply = (function (self__,args7316){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7316)));
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});

cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var sym = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});

cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});

cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){
var self__ = this;
var sym__$1 = this;
var h__975__auto__ = self__._hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_symbol(sym__$1);
self__._hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,self__.str);
});

cljs.core.Symbol.cljs$lang$type = true;

cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";

cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Symbol");
});

cljs.core.__GT_Symbol = (function cljs$core$__GT_Symbol(ns,name,str,_hash,_meta){
return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});

cljs.core.symbol = (function() {
var cljs$core$symbol = null;
var cljs$core$symbol__1 = (function (name){
if((name instanceof cljs.core.Symbol)){
return name;
} else {
return cljs$core$symbol.cljs$core$IFn$_invoke$arity$2(null,name);
}
});
var cljs$core$symbol__2 = (function (ns,name){
var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
cljs$core$symbol = function(ns,name){
switch(arguments.length){
case 1:
return cljs$core$symbol__1.call(this,ns);
case 2:
return cljs$core$symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$symbol.cljs$core$IFn$_invoke$arity$1 = cljs$core$symbol__1;
cljs$core$symbol.cljs$core$IFn$_invoke$arity$2 = cljs$core$symbol__2;
return cljs$core$symbol;
})()
;


cljs.core.iterable_QMARK_ = (function cljs$core$iterable_QMARK_(x){
var G__7319 = x;
if(G__7319){
var bit__1235__auto__ = null;
if(cljs.core.truth_((function (){var or__559__auto__ = bit__1235__auto__;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return G__7319.cljs$core$IIterable$;
}
})())){
return true;
} else {
if((!G__7319.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__7319);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIterable,G__7319);
}
});
cljs.core.clone = (function cljs$core$clone(value){
return cljs.core._clone(value);
});
cljs.core.cloneable_QMARK_ = (function cljs$core$cloneable_QMARK_(value){
var G__7321 = value;
if(G__7321){
var bit__1235__auto__ = (G__7321.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__1235__auto__) || (G__7321.cljs$core$ICloneable$)){
return true;
} else {
if((!G__7321.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__7321);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__7321);
}
});
/**
 * Returns a seq on the collection. If the collection is
 * empty, returns nil.  (seq nil) returns nil. seq also works on
 * Strings.
 */
cljs.core.seq = (function cljs$core$seq(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__7323 = coll;
if(G__7323){
var bit__1228__auto__ = (G__7323.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__1228__auto__) || (G__7323.cljs$core$ISeqable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeqable$_seq$arity$1(null);
} else {
if(coll instanceof Array){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(typeof coll === 'string'){
if((coll.length === (0))){
return null;
} else {
return (new cljs.core.IndexedSeq(coll,(0)));
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll)){
return cljs.core._seq(coll);
} else {
throw (new Error([cljs.core.str(coll),cljs.core.str(" is not ISeqable")].join('')));

}
}
}
}
}
});
/**
 * Returns the first item in the collection. Calls seq on its
 * argument. If coll is nil, returns nil.
 */
cljs.core.first = (function cljs$core$first(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__7325 = coll;
if(G__7325){
var bit__1228__auto__ = (G__7325.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1228__auto__) || (G__7325.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_first$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if((s == null)){
return null;
} else {
return cljs.core._first(s);
}
}
}
});
/**
 * Returns a possibly empty seq of the items after the first. Calls seq on its
 * argument.
 */
cljs.core.rest = (function cljs$core$rest(coll){
if(!((coll == null))){
if((function (){var G__7327 = coll;
if(G__7327){
var bit__1228__auto__ = (G__7327.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1228__auto__) || (G__7327.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ISeq$_rest$arity$1(null);
} else {
var s = cljs.core.seq(coll);
if(s){
return cljs.core._rest(s);
} else {
return cljs.core.List.EMPTY;
}
}
} else {
return cljs.core.List.EMPTY;
}
});
/**
 * Returns a seq of the items after the first. Calls seq on its
 * argument.  If there are no more items, returns nil
 */
cljs.core.next = (function cljs$core$next(coll){
if((coll == null)){
return null;
} else {
if((function (){var G__7329 = coll;
if(G__7329){
var bit__1228__auto__ = (G__7329.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__1228__auto__) || (G__7329.cljs$core$INext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$INext$_next$arity$1(null);
} else {
return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
 * Equality. Returns true if x equals y, false if not. Compares
 * numbers and collections in a type-independent manner.  Clojure's immutable data
 * structures define -equiv (and thus =) as a value, not an identity,
 * comparison.
 * @param {...*} var_args
 */
cljs.core._EQ_ = (function() {
var cljs$core$_EQ_ = null;
var cljs$core$_EQ___1 = (function (x){
return true;
});
var cljs$core$_EQ___2 = (function (x,y){
if((x == null)){
return (y == null);
} else {
return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var cljs$core$_EQ___3 = (function() { 
var G__7332__delegate = function (x,y,more){
while(true){
if(cljs$core$_EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__7333 = y;
var G__7334 = cljs.core.first(more);
var G__7335 = cljs.core.next(more);
x = G__7333;
y = G__7334;
more = G__7335;
continue;
} else {
return cljs$core$_EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7332 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7336__i = 0, G__7336__a = new Array(arguments.length -  2);
while (G__7336__i < G__7336__a.length) {G__7336__a[G__7336__i] = arguments[G__7336__i + 2]; ++G__7336__i;}
  more = new cljs.core.IndexedSeq(G__7336__a,0);
} 
return G__7332__delegate.call(this,x,y,more);};
G__7332.cljs$lang$maxFixedArity = 2;
G__7332.cljs$lang$applyTo = (function (arglist__7337){
var x = cljs.core.first(arglist__7337);
arglist__7337 = cljs.core.next(arglist__7337);
var y = cljs.core.first(arglist__7337);
var more = cljs.core.rest(arglist__7337);
return G__7332__delegate(x,y,more);
});
G__7332.cljs$core$IFn$_invoke$arity$variadic = G__7332__delegate;
return G__7332;
})()
;
cljs$core$_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_EQ___1.call(this,x);
case 2:
return cljs$core$_EQ___2.call(this,x,y);
default:
var G__7338 = null;
if (arguments.length > 2) {
var G__7339__i = 0, G__7339__a = new Array(arguments.length -  2);
while (G__7339__i < G__7339__a.length) {G__7339__a[G__7339__i] = arguments[G__7339__i + 2]; ++G__7339__i;}
G__7338 = new cljs.core.IndexedSeq(G__7339__a,0);
}
return cljs$core$_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_EQ_.cljs$lang$maxFixedArity = 2;
cljs$core$_EQ_.cljs$lang$applyTo = cljs$core$_EQ___3.cljs$lang$applyTo;
cljs$core$_EQ_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_EQ___1;
cljs$core$_EQ_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_EQ___2;
cljs$core$_EQ_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_EQ_;
})()
;

/**
* @constructor
*/
cljs.core.ES6Iterator = (function (s){
this.s = s;
})
cljs.core.ES6Iterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"value": x, "done": false};
} else {
return {"value": null, "done": true};
}
});

cljs.core.ES6Iterator.cljs$lang$type = true;

cljs.core.ES6Iterator.cljs$lang$ctorStr = "cljs.core/ES6Iterator";

cljs.core.ES6Iterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ES6Iterator");
});

cljs.core.__GT_ES6Iterator = (function cljs$core$__GT_ES6Iterator(s){
return (new cljs.core.ES6Iterator(s));
});

cljs.core.es6_iterator = (function cljs$core$es6_iterator(coll){
return (new cljs.core.ES6Iterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6IteratorSeq = (function (value,iter,_rest){
this.value = value;
this.iter = iter;
this._rest = _rest;
this.cljs$lang$protocol_mask$partition0$ = 8388672;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__._rest == null)){
self__._rest = (cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.es6_iterator_seq.cljs$core$IFn$_invoke$arity$1(self__.iter) : cljs.core.es6_iterator_seq.call(null,self__.iter));
} else {
}

return self__._rest;
});

cljs.core.ES6IteratorSeq.cljs$lang$type = true;

cljs.core.ES6IteratorSeq.cljs$lang$ctorStr = "cljs.core/ES6IteratorSeq";

cljs.core.ES6IteratorSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ES6IteratorSeq");
});

cljs.core.__GT_ES6IteratorSeq = (function cljs$core$__GT_ES6IteratorSeq(value,iter,_rest){
return (new cljs.core.ES6IteratorSeq(value,iter,_rest));
});

cljs.core.es6_iterator_seq = (function cljs$core$es6_iterator_seq(iter){
var v = iter.next();
if(cljs.core.truth_(v.done)){
return cljs.core.List.EMPTY;
} else {
return (new cljs.core.ES6IteratorSeq(v.value,iter,null));
}
});
/**
 * Mix final collection hash for ordered or unordered collections.
 * hash-basis is the combined collection hash, count is the number
 * of elements included in the basis. Note this is the hash code
 * consistent with =, different from .hashCode.
 * See http://clojure.org/data_structures#hash for full algorithms.
 */
cljs.core.mix_collection_hash = (function cljs$core$mix_collection_hash(hash_basis,count){
var h1 = cljs.core.m3_seed;
var k1 = cljs.core.m3_mix_K1(hash_basis);
var h1__$1 = cljs.core.m3_mix_H1(h1,k1);
return cljs.core.m3_fmix(h1__$1,count);
});
/**
 * Returns the hash code, consistent with =, for an external ordered
 * collection implementing Iterable.
 * See http://clojure.org/data_structures#hash for full algorithms.
 */
cljs.core.hash_ordered_coll = (function cljs$core$hash_ordered_coll(coll){
var n = (0);
var hash_code = (1);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__7340 = (n + (1));
var G__7341 = ((cljs.core.imul((31),hash_code) + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__7342 = cljs.core.next(coll__$1);
n = G__7340;
hash_code = G__7341;
coll__$1 = G__7342;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});
/**
 * Returns the hash code, consistent with =, for an external unordered
 * collection implementing Iterable. For maps, the iterator should
 * return map entries whose hash is computed as
 * (hash-ordered-coll [k v]).
 * See http://clojure.org/data_structures#hash for full algorithms.
 */
cljs.core.hash_unordered_coll = (function cljs$core$hash_unordered_coll(coll){
var n = (0);
var hash_code = (0);
var coll__$1 = cljs.core.seq(coll);
while(true){
if(!((coll__$1 == null))){
var G__7343 = (n + (1));
var G__7344 = ((hash_code + cljs.core.hash(cljs.core.first(coll__$1))) | (0));
var G__7345 = cljs.core.next(coll__$1);
n = G__7343;
hash_code = G__7344;
coll__$1 = G__7345;
continue;
} else {
return cljs.core.mix_collection_hash(hash_code,n);
}
break;
}
});


(cljs.core.ICounted["null"] = true);

(cljs.core._count["null"] = (function (_){
return (0);
}));
Date.prototype.cljs$core$IEquiv$ = true;

Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var o__$1 = this;
return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);

(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.Fn["function"] = true);

(cljs.core.IMeta["function"] = true);

(cljs.core._meta["function"] = (function (_){
return null;
}));
(cljs.core.IHash["_"] = true);

(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
 * Returns a number one greater than num.
 */
cljs.core.inc = (function cljs$core$inc(x){
return (x + (1));
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.val;
});

cljs.core.Reduced.cljs$lang$type = true;

cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";

cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Reduced");
});

cljs.core.__GT_Reduced = (function cljs$core$__GT_Reduced(val){
return (new cljs.core.Reduced(val));
});

/**
 * Wraps x in a way such that a reduce will terminate with the value x
 */
cljs.core.reduced = (function cljs$core$reduced(x){
return (new cljs.core.Reduced(x));
});
/**
 * Returns true if x is the result of a call to reduced
 */
cljs.core.reduced_QMARK_ = (function cljs$core$reduced_QMARK_(r){
return (r instanceof cljs.core.Reduced);
});
/**
 * If x is already reduced?, returns it, else returns (reduced x)
 */
cljs.core.ensure_reduced = (function cljs$core$ensure_reduced(x){
if(cljs.core.reduced_QMARK_(x)){
return x;
} else {
return cljs.core.reduced(x);
}
});
/**
 * If x is reduced?, returns (deref x), else returns x
 */
cljs.core.unreduced = (function cljs$core$unreduced(x){
if(cljs.core.reduced_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
cljs.core.deref = (function cljs$core$deref(o){
return cljs.core._deref(o);
});
/**
 * Accepts any collection which satisfies the ICount and IIndexed protocols and
 * reduces them without incurring seq initialization
 */
cljs.core.ci_reduce = (function() {
var cljs$core$ci_reduce = null;
var cljs$core$ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count(cicoll);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__7352 = val;
var G__7353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7352,G__7353) : f.call(null,G__7352,G__7353));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7358 = nval;
var G__7359 = (n + (1));
val = G__7358;
n = G__7359;
continue;
}
} else {
return val;
}
break;
}
}
});
var cljs$core$ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__7354 = val__$1;
var G__7355 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7354,G__7355) : f.call(null,G__7354,G__7355));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7360 = nval;
var G__7361 = (n + (1));
val__$1 = G__7360;
n = G__7361;
continue;
}
} else {
return val__$1;
}
break;
}
});
var cljs$core$ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count(cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__7356 = val__$1;
var G__7357 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7356,G__7357) : f.call(null,G__7356,G__7357));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7362 = nval;
var G__7363 = (n + (1));
val__$1 = G__7362;
n = G__7363;
continue;
}
} else {
return val__$1;
}
break;
}
});
cljs$core$ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return cljs$core$ci_reduce__2.call(this,cicoll,f);
case 3:
return cljs$core$ci_reduce__3.call(this,cicoll,f,val);
case 4:
return cljs$core$ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$ci_reduce.cljs$core$IFn$_invoke$arity$2 = cljs$core$ci_reduce__2;
cljs$core$ci_reduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$ci_reduce__3;
cljs$core$ci_reduce.cljs$core$IFn$_invoke$arity$4 = cljs$core$ci_reduce__4;
return cljs$core$ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var cljs$core$array_reduce = null;
var cljs$core$array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = (arr[(0)]);
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__7370 = val;
var G__7371 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7370,G__7371) : f.call(null,G__7370,G__7371));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7376 = nval;
var G__7377 = (n + (1));
val = G__7376;
n = G__7377;
continue;
}
} else {
return val;
}
break;
}
}
});
var cljs$core$array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__7372 = val__$1;
var G__7373 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7372,G__7373) : f.call(null,G__7372,G__7373));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7378 = nval;
var G__7379 = (n + (1));
val__$1 = G__7378;
n = G__7379;
continue;
}
} else {
return val__$1;
}
break;
}
});
var cljs$core$array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__7374 = val__$1;
var G__7375 = (arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7374,G__7375) : f.call(null,G__7374,G__7375));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7380 = nval;
var G__7381 = (n + (1));
val__$1 = G__7380;
n = G__7381;
continue;
}
} else {
return val__$1;
}
break;
}
});
cljs$core$array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return cljs$core$array_reduce__2.call(this,arr,f);
case 3:
return cljs$core$array_reduce__3.call(this,arr,f,val);
case 4:
return cljs$core$array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$array_reduce.cljs$core$IFn$_invoke$arity$2 = cljs$core$array_reduce__2;
cljs$core$array_reduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$array_reduce__3;
cljs$core$array_reduce.cljs$core$IFn$_invoke$arity$4 = cljs$core$array_reduce__4;
return cljs$core$array_reduce;
})()
;



/**
 * Returns true if coll implements count in constant time
 */
cljs.core.counted_QMARK_ = (function cljs$core$counted_QMARK_(x){
var G__7383 = x;
if(G__7383){
var bit__1235__auto__ = (G__7383.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__1235__auto__) || (G__7383.cljs$core$ICounted$)){
return true;
} else {
if((!G__7383.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__7383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__7383);
}
});
/**
 * Returns true if coll implements nth in constant time
 */
cljs.core.indexed_QMARK_ = (function cljs$core$indexed_QMARK_(x){
var G__7385 = x;
if(G__7385){
var bit__1235__auto__ = (G__7385.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__1235__auto__) || (G__7385.cljs$core$IIndexed$)){
return true;
} else {
if((!G__7385.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__7385);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__7385);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeqIterator = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.IndexedSeqIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.IndexedSeqIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.IndexedSeqIterator.cljs$lang$type = true;

cljs.core.IndexedSeqIterator.cljs$lang$ctorStr = "cljs.core/IndexedSeqIterator";

cljs.core.IndexedSeqIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/IndexedSeqIterator");
});

cljs.core.__GT_IndexedSeqIterator = (function cljs$core$__GT_IndexedSeqIterator(arr,i){
return (new cljs.core.IndexedSeqIterator(arr,i));
});


/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.IndexedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.arr.length)){
return (self__.arr[i__$1]);
} else {
return not_found;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.IndexedSeqIterator(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});

cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr.length - self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var c = cljs.core._count(coll__$1);
if((c > (0))){
return (new cljs.core.RSeq(coll__$1,(c - (1)),null));
} else {
return null;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(coll__$1,other) : cljs.core.equiv_sequential.call(null,coll__$1,other));
});

cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + (1)));
});

cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.arr[self__.i]);
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((self__.i + (1)) < self__.arr.length)){
return (new cljs.core.IndexedSeq(self__.arr,(self__.i + (1))));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(o,coll__$1) : cljs.core.cons.call(null,o,coll__$1));
});

cljs.core.IndexedSeq.cljs$lang$type = true;

cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";

cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/IndexedSeq");
});

cljs.core.__GT_IndexedSeq = (function cljs$core$__GT_IndexedSeq(arr,i){
return (new cljs.core.IndexedSeq(arr,i));
});

(cljs.core.IndexedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.prim_seq = (function() {
var cljs$core$prim_seq = null;
var cljs$core$prim_seq__1 = (function (prim){
return cljs$core$prim_seq.cljs$core$IFn$_invoke$arity$2(prim,(0));
});
var cljs$core$prim_seq__2 = (function (prim,i){
if((i < prim.length)){
return (new cljs.core.IndexedSeq(prim,i));
} else {
return null;
}
});
cljs$core$prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return cljs$core$prim_seq__1.call(this,prim);
case 2:
return cljs$core$prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$prim_seq.cljs$core$IFn$_invoke$arity$1 = cljs$core$prim_seq__1;
cljs$core$prim_seq.cljs$core$IFn$_invoke$arity$2 = cljs$core$prim_seq__2;
return cljs$core$prim_seq;
})()
;
cljs.core.array_seq = (function() {
var cljs$core$array_seq = null;
var cljs$core$array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,(0));
});
var cljs$core$array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
});
cljs$core$array_seq = function(array,i){
switch(arguments.length){
case 1:
return cljs$core$array_seq__1.call(this,array);
case 2:
return cljs$core$array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$array_seq.cljs$core$IFn$_invoke$arity$1 = cljs$core$array_seq__1;
cljs$core$array_seq.cljs$core$IFn$_invoke$arity$2 = cljs$core$array_seq__2;
return cljs$core$array_seq;
})()
;


/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.RSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});

cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return null;
}
});

cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.i + (1));
});

cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(coll__$1,other) : cljs.core.equiv_sequential.call(null,coll__$1,other));
});

cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__7386 = cljs.core.List.EMPTY;
var G__7387 = self__.meta;
return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(G__7386,G__7387) : cljs.core.with_meta.call(null,G__7386,G__7387));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){
var self__ = this;
var col__$1 = this;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,col__$1) : cljs.core.seq_reduce.call(null,f,col__$1));
});

cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){
var self__ = this;
var col__$1 = this;
return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,col__$1) : cljs.core.seq_reduce.call(null,f,start,col__$1));
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});

cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i > (0))){
return (new cljs.core.RSeq(self__.ci,(self__.i - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});

cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(o,coll__$1) : cljs.core.cons.call(null,o,coll__$1));
});

cljs.core.RSeq.cljs$lang$type = true;

cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";

cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/RSeq");
});

cljs.core.__GT_RSeq = (function cljs$core$__GT_RSeq(ci,i,meta){
return (new cljs.core.RSeq(ci,i,meta));
});

(cljs.core.RSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Same as (first (next x))
 */
cljs.core.second = (function cljs$core$second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
 * Same as (first (first x))
 */
cljs.core.ffirst = (function cljs$core$ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
 * Same as (next (first x))
 */
cljs.core.nfirst = (function cljs$core$nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
 * Same as (first (next x))
 */
cljs.core.fnext = (function cljs$core$fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
 * Same as (next (next x))
 */
cljs.core.nnext = (function cljs$core$nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
 * Return the last item in coll, in linear time
 */
cljs.core.last = (function cljs$core$last(s){
while(true){
var sn = cljs.core.next(s);
if(!((sn == null))){
var G__7388 = sn;
s = G__7388;
continue;
} else {
return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);

(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
 * conj[oin]. Returns a new collection with the xs
 * 'added'. (conj nil item) returns (item).  The 'addition' may
 * happen at different 'places' depending on the concrete type.
 * @param {...*} var_args
 */
cljs.core.conj = (function() {
var cljs$core$conj = null;
var cljs$core$conj__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var cljs$core$conj__1 = (function (coll){
return coll;
});
var cljs$core$conj__2 = (function (coll,x){
if(!((coll == null))){
return cljs.core._conj(coll,x);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var cljs$core$conj__3 = (function() { 
var G__7389__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__7390 = cljs$core$conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__7391 = cljs.core.first(xs);
var G__7392 = cljs.core.next(xs);
coll = G__7390;
x = G__7391;
xs = G__7392;
continue;
} else {
return cljs$core$conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__7389 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__7393__i = 0, G__7393__a = new Array(arguments.length -  2);
while (G__7393__i < G__7393__a.length) {G__7393__a[G__7393__i] = arguments[G__7393__i + 2]; ++G__7393__i;}
  xs = new cljs.core.IndexedSeq(G__7393__a,0);
} 
return G__7389__delegate.call(this,coll,x,xs);};
G__7389.cljs$lang$maxFixedArity = 2;
G__7389.cljs$lang$applyTo = (function (arglist__7394){
var coll = cljs.core.first(arglist__7394);
arglist__7394 = cljs.core.next(arglist__7394);
var x = cljs.core.first(arglist__7394);
var xs = cljs.core.rest(arglist__7394);
return G__7389__delegate(coll,x,xs);
});
G__7389.cljs$core$IFn$_invoke$arity$variadic = G__7389__delegate;
return G__7389;
})()
;
cljs$core$conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 0:
return cljs$core$conj__0.call(this);
case 1:
return cljs$core$conj__1.call(this,coll);
case 2:
return cljs$core$conj__2.call(this,coll,x);
default:
var G__7395 = null;
if (arguments.length > 2) {
var G__7396__i = 0, G__7396__a = new Array(arguments.length -  2);
while (G__7396__i < G__7396__a.length) {G__7396__a[G__7396__i] = arguments[G__7396__i + 2]; ++G__7396__i;}
G__7395 = new cljs.core.IndexedSeq(G__7396__a,0);
}
return cljs$core$conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__7395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$conj.cljs$lang$maxFixedArity = 2;
cljs$core$conj.cljs$lang$applyTo = cljs$core$conj__3.cljs$lang$applyTo;
cljs$core$conj.cljs$core$IFn$_invoke$arity$0 = cljs$core$conj__0;
cljs$core$conj.cljs$core$IFn$_invoke$arity$1 = cljs$core$conj__1;
cljs$core$conj.cljs$core$IFn$_invoke$arity$2 = cljs$core$conj__2;
cljs$core$conj.cljs$core$IFn$_invoke$arity$variadic = cljs$core$conj__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$conj;
})()
;
/**
 * Returns an empty collection of the same category as coll, or nil
 */
cljs.core.empty = (function cljs$core$empty(coll){
if((coll == null)){
return null;
} else {
return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function cljs$core$accumulating_seq_count(coll){
var s = cljs.core.seq(coll);
var acc = (0);
while(true){
if(cljs.core.counted_QMARK_(s)){
return (acc + cljs.core._count(s));
} else {
var G__7397 = cljs.core.next(s);
var G__7398 = (acc + (1));
s = G__7397;
acc = G__7398;
continue;
}
break;
}
});
/**
 * Returns the number of items in the collection. (count nil) returns
 * 0.  Also works on strings, arrays, and Maps
 */
cljs.core.count = (function cljs$core$count(coll){
if(!((coll == null))){
if((function (){var G__7400 = coll;
if(G__7400){
var bit__1228__auto__ = (G__7400.cljs$lang$protocol_mask$partition0$ & (2));
if((bit__1228__auto__) || (G__7400.cljs$core$ICounted$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$ICounted$_count$arity$1(null);
} else {
if(coll instanceof Array){
return coll.length;
} else {
if(typeof coll === 'string'){
return coll.length;
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll)){
return cljs.core._count(coll);
} else {
return cljs.core.accumulating_seq_count(coll);

}
}
}
}
} else {
return (0);
}
});
cljs.core.linear_traversal_nth = (function() {
var cljs$core$linear_traversal_nth = null;
var cljs$core$linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null)){
throw (new Error("Index out of bounds"));
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
throw (new Error("Index out of bounds"));
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if(cljs.core.seq(coll)){
var G__7401 = cljs.core.next(coll);
var G__7402 = (n - (1));
coll = G__7401;
n = G__7402;
continue;
} else {
throw (new Error("Index out of bounds"));

}
}
}
}
break;
}
});
var cljs$core$linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null)){
return not_found;
} else {
if((n === (0))){
if(cljs.core.seq(coll)){
return cljs.core.first(coll);
} else {
return not_found;
}
} else {
if(cljs.core.indexed_QMARK_(coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
if(cljs.core.seq(coll)){
var G__7403 = cljs.core.next(coll);
var G__7404 = (n - (1));
var G__7405 = not_found;
coll = G__7403;
n = G__7404;
not_found = G__7405;
continue;
} else {
return not_found;

}
}
}
}
break;
}
});
cljs$core$linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return cljs$core$linear_traversal_nth__2.call(this,coll,n);
case 3:
return cljs$core$linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = cljs$core$linear_traversal_nth__2;
cljs$core$linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = cljs$core$linear_traversal_nth__3;
return cljs$core$linear_traversal_nth;
})()
;
/**
 * Returns the value at the index. get returns nil if index out of
 * bounds, nth throws an exception unless not-found is supplied.  nth
 * also works for strings, arrays, regex Matchers and Lists, and,
 * in O(n) time, for sequences.
 */
cljs.core.nth = (function() {
var cljs$core$nth = null;
var cljs$core$nth__2 = (function (coll,n){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number"));
} else {
if((coll == null)){
return coll;
} else {
if((function (){var G__7410 = coll;
if(G__7410){
var bit__1228__auto__ = (G__7410.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__1228__auto__) || (G__7410.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__7411 = coll;
if(G__7411){
var bit__1235__auto__ = (G__7411.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1235__auto__) || (G__7411.cljs$core$ISeq$)){
return true;
} else {
if((!G__7411.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7411);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7411);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
var cljs$core$nth__3 = (function (coll,n,not_found){
if(!(typeof n === 'number')){
throw (new Error("index argument to nth must be a number."));
} else {
if((coll == null)){
return not_found;
} else {
if((function (){var G__7412 = coll;
if(G__7412){
var bit__1228__auto__ = (G__7412.cljs$lang$protocol_mask$partition0$ & (16));
if((bit__1228__auto__) || (G__7412.cljs$core$IIndexed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
} else {
if(coll instanceof Array){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(typeof coll === 'string'){
if((n < coll.length)){
return (coll[n]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll)){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else {
if((function (){var G__7413 = coll;
if(G__7413){
var bit__1235__auto__ = (G__7413.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1235__auto__) || (G__7413.cljs$core$ISeq$)){
return true;
} else {
if((!G__7413.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7413);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7413);
}
})()){
return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else {
throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));

}
}
}
}
}
}
}
});
cljs$core$nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return cljs$core$nth__2.call(this,coll,n);
case 3:
return cljs$core$nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$nth.cljs$core$IFn$_invoke$arity$2 = cljs$core$nth__2;
cljs$core$nth.cljs$core$IFn$_invoke$arity$3 = cljs$core$nth__3;
return cljs$core$nth;
})()
;
/**
 * Returns the nth rest of coll, coll when n is 0.
 */
cljs.core.nthrest = (function cljs$core$nthrest(coll,n){
var n__$1 = n;
var xs = coll;
while(true){
if(((n__$1 > (0))) && (cljs.core.seq(xs))){
var G__7414 = (n__$1 - (1));
var G__7415 = cljs.core.rest(xs);
n__$1 = G__7414;
xs = G__7415;
continue;
} else {
return xs;
}
break;
}
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 */
cljs.core.get = (function() {
var cljs$core$get = null;
var cljs$core$get__2 = (function (o,k){
if((o == null)){
return null;
} else {
if((function (){var G__7418 = o;
if(G__7418){
var bit__1228__auto__ = (G__7418.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__1228__auto__) || (G__7418.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$2(null,k);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return null;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else {
return null;

}
}
}
}
}
});
var cljs$core$get__3 = (function (o,k,not_found){
if(!((o == null))){
if((function (){var G__7419 = o;
if(G__7419){
var bit__1228__auto__ = (G__7419.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__1228__auto__) || (G__7419.cljs$core$ILookup$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
} else {
if(o instanceof Array){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(typeof o === 'string'){
if((k < o.length)){
return (o[k]);
} else {
return not_found;
}
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o)){
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else {
return not_found;

}
}
}
}
} else {
return not_found;
}
});
cljs$core$get = function(o,k,not_found){
switch(arguments.length){
case 2:
return cljs$core$get__2.call(this,o,k);
case 3:
return cljs$core$get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$get.cljs$core$IFn$_invoke$arity$2 = cljs$core$get__2;
cljs$core$get.cljs$core$IFn$_invoke$arity$3 = cljs$core$get__3;
return cljs$core$get;
})()
;
/**
 * assoc[iate]. When applied to a map, returns a new map of the
 * same (hashed/sorted) type, that contains the mapping of key(s) to
 * val(s). When applied to a vector, returns a new vector that
 * contains val at index.
 * @param {...*} var_args
 */
cljs.core.assoc = (function() {
var cljs$core$assoc = null;
var cljs$core$assoc__3 = (function (coll,k,v){
if(!((coll == null))){
return cljs.core._assoc(coll,k,v);
} else {
return cljs.core.PersistentHashMap.fromArrays([k],[v]);
}
});
var cljs$core$assoc__4 = (function() { 
var G__7420__delegate = function (coll,k,v,kvs){
while(true){
var ret = cljs$core$assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
if(cljs.core.truth_(kvs)){
var G__7421 = ret;
var G__7422 = cljs.core.first(kvs);
var G__7423 = cljs.core.second(kvs);
var G__7424 = cljs.core.nnext(kvs);
coll = G__7421;
k = G__7422;
v = G__7423;
kvs = G__7424;
continue;
} else {
return ret;
}
break;
}
};
var G__7420 = function (coll,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__7425__i = 0, G__7425__a = new Array(arguments.length -  3);
while (G__7425__i < G__7425__a.length) {G__7425__a[G__7425__i] = arguments[G__7425__i + 3]; ++G__7425__i;}
  kvs = new cljs.core.IndexedSeq(G__7425__a,0);
} 
return G__7420__delegate.call(this,coll,k,v,kvs);};
G__7420.cljs$lang$maxFixedArity = 3;
G__7420.cljs$lang$applyTo = (function (arglist__7426){
var coll = cljs.core.first(arglist__7426);
arglist__7426 = cljs.core.next(arglist__7426);
var k = cljs.core.first(arglist__7426);
arglist__7426 = cljs.core.next(arglist__7426);
var v = cljs.core.first(arglist__7426);
var kvs = cljs.core.rest(arglist__7426);
return G__7420__delegate(coll,k,v,kvs);
});
G__7420.cljs$core$IFn$_invoke$arity$variadic = G__7420__delegate;
return G__7420;
})()
;
cljs$core$assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return cljs$core$assoc__3.call(this,coll,k,v);
default:
var G__7427 = null;
if (arguments.length > 3) {
var G__7428__i = 0, G__7428__a = new Array(arguments.length -  3);
while (G__7428__i < G__7428__a.length) {G__7428__a[G__7428__i] = arguments[G__7428__i + 3]; ++G__7428__i;}
G__7427 = new cljs.core.IndexedSeq(G__7428__a,0);
}
return cljs$core$assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, G__7427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$assoc.cljs$lang$maxFixedArity = 3;
cljs$core$assoc.cljs$lang$applyTo = cljs$core$assoc__4.cljs$lang$applyTo;
cljs$core$assoc.cljs$core$IFn$_invoke$arity$3 = cljs$core$assoc__3;
cljs$core$assoc.cljs$core$IFn$_invoke$arity$variadic = cljs$core$assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$assoc;
})()
;
/**
 * dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
 * that does not contain a mapping for key(s).
 * @param {...*} var_args
 */
cljs.core.dissoc = (function() {
var cljs$core$dissoc = null;
var cljs$core$dissoc__1 = (function (coll){
return coll;
});
var cljs$core$dissoc__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._dissoc(coll,k);
}
});
var cljs$core$dissoc__3 = (function() { 
var G__7429__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = cljs$core$dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__7430 = ret;
var G__7431 = cljs.core.first(ks);
var G__7432 = cljs.core.next(ks);
coll = G__7430;
k = G__7431;
ks = G__7432;
continue;
} else {
return ret;
}
}
break;
}
};
var G__7429 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__7433__i = 0, G__7433__a = new Array(arguments.length -  2);
while (G__7433__i < G__7433__a.length) {G__7433__a[G__7433__i] = arguments[G__7433__i + 2]; ++G__7433__i;}
  ks = new cljs.core.IndexedSeq(G__7433__a,0);
} 
return G__7429__delegate.call(this,coll,k,ks);};
G__7429.cljs$lang$maxFixedArity = 2;
G__7429.cljs$lang$applyTo = (function (arglist__7434){
var coll = cljs.core.first(arglist__7434);
arglist__7434 = cljs.core.next(arglist__7434);
var k = cljs.core.first(arglist__7434);
var ks = cljs.core.rest(arglist__7434);
return G__7429__delegate(coll,k,ks);
});
G__7429.cljs$core$IFn$_invoke$arity$variadic = G__7429__delegate;
return G__7429;
})()
;
cljs$core$dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return cljs$core$dissoc__1.call(this,coll);
case 2:
return cljs$core$dissoc__2.call(this,coll,k);
default:
var G__7435 = null;
if (arguments.length > 2) {
var G__7436__i = 0, G__7436__a = new Array(arguments.length -  2);
while (G__7436__i < G__7436__a.length) {G__7436__a[G__7436__i] = arguments[G__7436__i + 2]; ++G__7436__i;}
G__7435 = new cljs.core.IndexedSeq(G__7436__a,0);
}
return cljs$core$dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, G__7435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$dissoc.cljs$lang$maxFixedArity = 2;
cljs$core$dissoc.cljs$lang$applyTo = cljs$core$dissoc__3.cljs$lang$applyTo;
cljs$core$dissoc.cljs$core$IFn$_invoke$arity$1 = cljs$core$dissoc__1;
cljs$core$dissoc.cljs$core$IFn$_invoke$arity$2 = cljs$core$dissoc__2;
cljs$core$dissoc.cljs$core$IFn$_invoke$arity$variadic = cljs$core$dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$dissoc;
})()
;
cljs.core.fn_QMARK_ = (function cljs$core$fn_QMARK_(f){
var or__559__auto__ = goog.isFunction(f);
if(or__559__auto__){
return or__559__auto__;
} else {
var G__7440 = f;
if(G__7440){
var bit__1235__auto__ = null;
if(cljs.core.truth_((function (){var or__559__auto____$1 = bit__1235__auto__;
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
return G__7440.cljs$core$Fn$;
}
})())){
return true;
} else {
if((!G__7440.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__7440);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__7440);
}
}
});

/**
* @constructor
*/
cljs.core.MetaFn = (function (afn,meta){
this.afn = afn;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.MetaFn(self__.afn,new_meta));
});

cljs.core.MetaFn.prototype.cljs$core$Fn$ = true;

cljs.core.MetaFn.prototype.call = (function() {
var G__7442 = null;
var G__7442__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});
var G__7442__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(a) : self__.afn.call(null,a));
});
var G__7442__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.afn.call(null,a,b));
});
var G__7442__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.afn.call(null,a,b,c));
});
var G__7442__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.afn.call(null,a,b,c,d));
});
var G__7442__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.afn.call(null,a,b,c,d,e));
});
var G__7442__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.afn.call(null,a,b,c,d,e,f));
});
var G__7442__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.afn.call(null,a,b,c,d,e,f,g));
});
var G__7442__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.afn.call(null,a,b,c,d,e,f,g,h));
});
var G__7442__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.afn.call(null,a,b,c,d,e,f,g,h,i));
});
var G__7442__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__7442__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__7442__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__7442__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__7442__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__7442__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__7442__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__7442__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__7442__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__7442__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__7442__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__7442__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest) : cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest));
});
G__7442 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__7442__1.call(this,self__);
case 2:
return G__7442__2.call(this,self__,a);
case 3:
return G__7442__3.call(this,self__,a,b);
case 4:
return G__7442__4.call(this,self__,a,b,c);
case 5:
return G__7442__5.call(this,self__,a,b,c,d);
case 6:
return G__7442__6.call(this,self__,a,b,c,d,e);
case 7:
return G__7442__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__7442__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__7442__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__7442__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__7442__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__7442__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__7442__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__7442__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__7442__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__7442__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__7442__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__7442__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__7442__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__7442__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__7442__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__7442__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7442.cljs$core$IFn$_invoke$arity$1 = G__7442__1;
G__7442.cljs$core$IFn$_invoke$arity$2 = G__7442__2;
G__7442.cljs$core$IFn$_invoke$arity$3 = G__7442__3;
G__7442.cljs$core$IFn$_invoke$arity$4 = G__7442__4;
G__7442.cljs$core$IFn$_invoke$arity$5 = G__7442__5;
G__7442.cljs$core$IFn$_invoke$arity$6 = G__7442__6;
G__7442.cljs$core$IFn$_invoke$arity$7 = G__7442__7;
G__7442.cljs$core$IFn$_invoke$arity$8 = G__7442__8;
G__7442.cljs$core$IFn$_invoke$arity$9 = G__7442__9;
G__7442.cljs$core$IFn$_invoke$arity$10 = G__7442__10;
G__7442.cljs$core$IFn$_invoke$arity$11 = G__7442__11;
G__7442.cljs$core$IFn$_invoke$arity$12 = G__7442__12;
G__7442.cljs$core$IFn$_invoke$arity$13 = G__7442__13;
G__7442.cljs$core$IFn$_invoke$arity$14 = G__7442__14;
G__7442.cljs$core$IFn$_invoke$arity$15 = G__7442__15;
G__7442.cljs$core$IFn$_invoke$arity$16 = G__7442__16;
G__7442.cljs$core$IFn$_invoke$arity$17 = G__7442__17;
G__7442.cljs$core$IFn$_invoke$arity$18 = G__7442__18;
G__7442.cljs$core$IFn$_invoke$arity$19 = G__7442__19;
G__7442.cljs$core$IFn$_invoke$arity$20 = G__7442__20;
G__7442.cljs$core$IFn$_invoke$arity$21 = G__7442__21;
G__7442.cljs$core$IFn$_invoke$arity$22 = G__7442__22;
return G__7442;
})()
;

cljs.core.MetaFn.prototype.apply = (function (self__,args7441){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7441)));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$0 ? self__.afn.cljs$core$IFn$_invoke$arity$0() : self__.afn.call(null));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(a) : self__.afn.call(null,a));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.afn.call(null,a,b));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$3 ? self__.afn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.afn.call(null,a,b,c));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$4 ? self__.afn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.afn.call(null,a,b,c,d));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$5 ? self__.afn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.afn.call(null,a,b,c,d,e));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$6 ? self__.afn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.afn.call(null,a,b,c,d,e,f));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$7 ? self__.afn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.afn.call(null,a,b,c,d,e,f,g));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$8 ? self__.afn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.afn.call(null,a,b,c,d,e,f,g,h));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$9 ? self__.afn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.afn.call(null,a,b,c,d,e,f,g,h,i));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$10 ? self__.afn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$11 ? self__.afn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$12 ? self__.afn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$13 ? self__.afn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$14 ? self__.afn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$15 ? self__.afn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$16 ? self__.afn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$17 ? self__.afn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$18 ? self__.afn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$19 ? self__.afn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$20 ? self__.afn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.afn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});

cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$22 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$22(self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest) : cljs.core.apply.call(null,self__.afn,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest));
});

cljs.core.MetaFn.cljs$lang$type = true;

cljs.core.MetaFn.cljs$lang$ctorStr = "cljs.core/MetaFn";

cljs.core.MetaFn.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/MetaFn");
});

cljs.core.__GT_MetaFn = (function cljs$core$__GT_MetaFn(afn,meta){
return (new cljs.core.MetaFn(afn,meta));
});

/**
 * Returns an object of the same type and value as obj, with
 * map m as its metadata.
 */
cljs.core.with_meta = (function cljs$core$with_meta(o,meta){
if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__7446 = o;
if(G__7446){
var bit__1235__auto__ = (G__7446.cljs$lang$protocol_mask$partition0$ & (262144));
if((bit__1235__auto__) || (G__7446.cljs$core$IWithMeta$)){
return true;
} else {
if((!G__7446.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__7446);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__7446);
}
})()))){
return (new cljs.core.MetaFn(o,meta));
} else {
if((o == null)){
return null;
} else {
return cljs.core._with_meta(o,meta);
}
}
});
/**
 * Returns the metadata of obj, returns nil if there is no metadata.
 */
cljs.core.meta = (function cljs$core$meta(o){
if((function (){var and__547__auto__ = !((o == null));
if(and__547__auto__){
var G__7450 = o;
if(G__7450){
var bit__1235__auto__ = (G__7450.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__1235__auto__) || (G__7450.cljs$core$IMeta$)){
return true;
} else {
if((!G__7450.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__7450);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__7450);
}
} else {
return and__547__auto__;
}
})()){
return cljs.core._meta(o);
} else {
return null;
}
});
/**
 * For a list or queue, same as first, for a vector, same as, but much
 * more efficient than, last. If the collection is empty, returns nil.
 */
cljs.core.peek = (function cljs$core$peek(coll){
if((coll == null)){
return null;
} else {
return cljs.core._peek(coll);
}
});
/**
 * For a list or queue, returns a new list/queue without the first
 * item, for a vector, returns a new vector without the last item.
 * Note - not the same as next/butlast.
 */
cljs.core.pop = (function cljs$core$pop(coll){
if((coll == null)){
return null;
} else {
return cljs.core._pop(coll);
}
});
/**
 * disj[oin]. Returns a new set of the same (hashed/sorted) type, that
 * does not contain key(s).
 * @param {...*} var_args
 */
cljs.core.disj = (function() {
var cljs$core$disj = null;
var cljs$core$disj__1 = (function (coll){
return coll;
});
var cljs$core$disj__2 = (function (coll,k){
if((coll == null)){
return null;
} else {
return cljs.core._disjoin(coll,k);
}
});
var cljs$core$disj__3 = (function() { 
var G__7451__delegate = function (coll,k,ks){
while(true){
if((coll == null)){
return null;
} else {
var ret = cljs$core$disj.cljs$core$IFn$_invoke$arity$2(coll,k);
if(cljs.core.truth_(ks)){
var G__7452 = ret;
var G__7453 = cljs.core.first(ks);
var G__7454 = cljs.core.next(ks);
coll = G__7452;
k = G__7453;
ks = G__7454;
continue;
} else {
return ret;
}
}
break;
}
};
var G__7451 = function (coll,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__7455__i = 0, G__7455__a = new Array(arguments.length -  2);
while (G__7455__i < G__7455__a.length) {G__7455__a[G__7455__i] = arguments[G__7455__i + 2]; ++G__7455__i;}
  ks = new cljs.core.IndexedSeq(G__7455__a,0);
} 
return G__7451__delegate.call(this,coll,k,ks);};
G__7451.cljs$lang$maxFixedArity = 2;
G__7451.cljs$lang$applyTo = (function (arglist__7456){
var coll = cljs.core.first(arglist__7456);
arglist__7456 = cljs.core.next(arglist__7456);
var k = cljs.core.first(arglist__7456);
var ks = cljs.core.rest(arglist__7456);
return G__7451__delegate(coll,k,ks);
});
G__7451.cljs$core$IFn$_invoke$arity$variadic = G__7451__delegate;
return G__7451;
})()
;
cljs$core$disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return cljs$core$disj__1.call(this,coll);
case 2:
return cljs$core$disj__2.call(this,coll,k);
default:
var G__7457 = null;
if (arguments.length > 2) {
var G__7458__i = 0, G__7458__a = new Array(arguments.length -  2);
while (G__7458__i < G__7458__a.length) {G__7458__a[G__7458__i] = arguments[G__7458__i + 2]; ++G__7458__i;}
G__7457 = new cljs.core.IndexedSeq(G__7458__a,0);
}
return cljs$core$disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, G__7457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$disj.cljs$lang$maxFixedArity = 2;
cljs$core$disj.cljs$lang$applyTo = cljs$core$disj__3.cljs$lang$applyTo;
cljs$core$disj.cljs$core$IFn$_invoke$arity$1 = cljs$core$disj__1;
cljs$core$disj.cljs$core$IFn$_invoke$arity$2 = cljs$core$disj__2;
cljs$core$disj.cljs$core$IFn$_invoke$arity$variadic = cljs$core$disj__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$disj;
})()
;
/**
 * Returns true if coll has no items - same as (not (seq coll)).
 * Please use the idiom (seq x) rather than (not (empty? x))
 */
cljs.core.empty_QMARK_ = (function cljs$core$empty_QMARK_(coll){
return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
 * Returns true if x satisfies ICollection
 */
cljs.core.coll_QMARK_ = (function cljs$core$coll_QMARK_(x){
if((x == null)){
return false;
} else {
var G__7460 = x;
if(G__7460){
var bit__1235__auto__ = (G__7460.cljs$lang$protocol_mask$partition0$ & (8));
if((bit__1235__auto__) || (G__7460.cljs$core$ICollection$)){
return true;
} else {
if((!G__7460.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__7460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__7460);
}
}
});
/**
 * Returns true if x satisfies ISet
 */
cljs.core.set_QMARK_ = (function cljs$core$set_QMARK_(x){
if((x == null)){
return false;
} else {
var G__7462 = x;
if(G__7462){
var bit__1235__auto__ = (G__7462.cljs$lang$protocol_mask$partition0$ & (4096));
if((bit__1235__auto__) || (G__7462.cljs$core$ISet$)){
return true;
} else {
if((!G__7462.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__7462);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__7462);
}
}
});
/**
 * Returns true if coll implements Associative
 */
cljs.core.associative_QMARK_ = (function cljs$core$associative_QMARK_(x){
var G__7464 = x;
if(G__7464){
var bit__1235__auto__ = (G__7464.cljs$lang$protocol_mask$partition0$ & (512));
if((bit__1235__auto__) || (G__7464.cljs$core$IAssociative$)){
return true;
} else {
if((!G__7464.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__7464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__7464);
}
});
/**
 * Returns true if coll satisfies ISequential
 */
cljs.core.sequential_QMARK_ = (function cljs$core$sequential_QMARK_(x){
var G__7466 = x;
if(G__7466){
var bit__1235__auto__ = (G__7466.cljs$lang$protocol_mask$partition0$ & (16777216));
if((bit__1235__auto__) || (G__7466.cljs$core$ISequential$)){
return true;
} else {
if((!G__7466.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__7466);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__7466);
}
});
/**
 * Returns true if coll satisfies ISorted
 */
cljs.core.sorted_QMARK_ = (function cljs$core$sorted_QMARK_(x){
var G__7468 = x;
if(G__7468){
var bit__1235__auto__ = (G__7468.cljs$lang$protocol_mask$partition0$ & (268435456));
if((bit__1235__auto__) || (G__7468.cljs$core$ISorted$)){
return true;
} else {
if((!G__7468.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__7468);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__7468);
}
});
/**
 * Returns true if coll satisfies IReduce
 */
cljs.core.reduceable_QMARK_ = (function cljs$core$reduceable_QMARK_(x){
var G__7470 = x;
if(G__7470){
var bit__1235__auto__ = (G__7470.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__1235__auto__) || (G__7470.cljs$core$IReduce$)){
return true;
} else {
if((!G__7470.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__7470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__7470);
}
});
/**
 * Return true if x satisfies IMap
 */
cljs.core.map_QMARK_ = (function cljs$core$map_QMARK_(x){
if((x == null)){
return false;
} else {
var G__7472 = x;
if(G__7472){
var bit__1235__auto__ = (G__7472.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__1235__auto__) || (G__7472.cljs$core$IMap$)){
return true;
} else {
if((!G__7472.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__7472);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__7472);
}
}
});
/**
 * Return true if x satisfies IVector
 */
cljs.core.vector_QMARK_ = (function cljs$core$vector_QMARK_(x){
var G__7474 = x;
if(G__7474){
var bit__1235__auto__ = (G__7474.cljs$lang$protocol_mask$partition0$ & (16384));
if((bit__1235__auto__) || (G__7474.cljs$core$IVector$)){
return true;
} else {
if((!G__7474.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__7474);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__7474);
}
});

cljs.core.chunked_seq_QMARK_ = (function cljs$core$chunked_seq_QMARK_(x){
var G__7476 = x;
if(G__7476){
var bit__1228__auto__ = (G__7476.cljs$lang$protocol_mask$partition1$ & (512));
if((bit__1228__auto__) || (G__7476.cljs$core$IChunkedSeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * @param {...*} var_args
 */
cljs.core.js_obj = (function() {
var cljs$core$js_obj = null;
var cljs$core$js_obj__0 = (function (){
var obj7480 = {};
return obj7480;
});
var cljs$core$js_obj__1 = (function() { 
var G__7481__delegate = function (keyvals){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.create,keyvals) : cljs.core.apply.call(null,goog.object.create,keyvals));
};
var G__7481 = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__7482__i = 0, G__7482__a = new Array(arguments.length -  0);
while (G__7482__i < G__7482__a.length) {G__7482__a[G__7482__i] = arguments[G__7482__i + 0]; ++G__7482__i;}
  keyvals = new cljs.core.IndexedSeq(G__7482__a,0);
} 
return G__7481__delegate.call(this,keyvals);};
G__7481.cljs$lang$maxFixedArity = 0;
G__7481.cljs$lang$applyTo = (function (arglist__7483){
var keyvals = cljs.core.seq(arglist__7483);
return G__7481__delegate(keyvals);
});
G__7481.cljs$core$IFn$_invoke$arity$variadic = G__7481__delegate;
return G__7481;
})()
;
cljs$core$js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return cljs$core$js_obj__0.call(this);
default:
var G__7484 = null;
if (arguments.length > 0) {
var G__7485__i = 0, G__7485__a = new Array(arguments.length -  0);
while (G__7485__i < G__7485__a.length) {G__7485__a[G__7485__i] = arguments[G__7485__i + 0]; ++G__7485__i;}
G__7484 = new cljs.core.IndexedSeq(G__7485__a,0);
}
return cljs$core$js_obj__1.cljs$core$IFn$_invoke$arity$variadic(G__7484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$js_obj.cljs$lang$maxFixedArity = 0;
cljs$core$js_obj.cljs$lang$applyTo = cljs$core$js_obj__1.cljs$lang$applyTo;
cljs$core$js_obj.cljs$core$IFn$_invoke$arity$0 = cljs$core$js_obj__0;
cljs$core$js_obj.cljs$core$IFn$_invoke$arity$variadic = cljs$core$js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$js_obj;
})()
;
cljs.core.js_keys = (function cljs$core$js_keys(obj){
var keys = [];
var G__7488_7490 = obj;
var G__7489_7491 = ((function (G__7488_7490,keys){
return (function (val,key,obj__$1){
return keys.push(key);
});})(G__7488_7490,keys))
;
goog.object.forEach(G__7488_7490,G__7489_7491);

return keys;
});
cljs.core.js_delete = (function cljs$core$js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function cljs$core$array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__7492 = (i__$1 + (1));
var G__7493 = (j__$1 + (1));
var G__7494 = (len__$1 - (1));
i__$1 = G__7492;
j__$1 = G__7493;
len__$1 = G__7494;
continue;
}
break;
}
});
cljs.core.array_copy_downward = (function cljs$core$array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - (1)));
var j__$1 = (j + (len - (1)));
var len__$1 = len;
while(true){
if((len__$1 === (0))){
return to;
} else {
(to[j__$1] = (from[i__$1]));

var G__7495 = (i__$1 - (1));
var G__7496 = (j__$1 - (1));
var G__7497 = (len__$1 - (1));
i__$1 = G__7495;
j__$1 = G__7496;
len__$1 = G__7497;
continue;
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj7499 = {};
return obj7499;
})();
/**
 * Returns true if x is the value false, false otherwise.
 */
cljs.core.false_QMARK_ = (function cljs$core$false_QMARK_(x){
return x === false;
});
/**
 * Returns true if x is the value true, false otherwise.
 */
cljs.core.true_QMARK_ = (function cljs$core$true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function cljs$core$undefined_QMARK_(x){
return (void 0 === x);
});
/**
 * Return true if s satisfies ISeq
 */
cljs.core.seq_QMARK_ = (function cljs$core$seq_QMARK_(s){
if((s == null)){
return false;
} else {
var G__7501 = s;
if(G__7501){
var bit__1235__auto__ = (G__7501.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1235__auto__) || (G__7501.cljs$core$ISeq$)){
return true;
} else {
if((!G__7501.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__7501);
}
}
});
/**
 * Return true if s satisfies ISeqable
 */
cljs.core.seqable_QMARK_ = (function cljs$core$seqable_QMARK_(s){
var G__7503 = s;
if(G__7503){
var bit__1235__auto__ = (G__7503.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__1235__auto__) || (G__7503.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7503.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7503);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__7503);
}
});
cljs.core.boolean$ = (function cljs$core$boolean(x){
if(cljs.core.truth_(x)){
return true;
} else {
return false;
}
});
cljs.core.ifn_QMARK_ = (function cljs$core$ifn_QMARK_(f){
var or__559__auto__ = cljs.core.fn_QMARK_(f);
if(or__559__auto__){
return or__559__auto__;
} else {
var G__7507 = f;
if(G__7507){
var bit__1235__auto__ = (G__7507.cljs$lang$protocol_mask$partition0$ & (1));
if((bit__1235__auto__) || (G__7507.cljs$core$IFn$)){
return true;
} else {
if((!G__7507.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__7507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__7507);
}
}
});
/**
 * Returns true if n is an integer.
 */
cljs.core.integer_QMARK_ = (function cljs$core$integer_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,(10))));
});
/**
 * Returns true if key is present in the given collection, otherwise
 * returns false.  Note that for numerically indexed collections like
 * vectors and arrays, this tests if the numeric key is within the
 * range of indexes. 'contains?' operates constant or logarithmic time;
 * it will not perform a linear search for a value.  See also 'some'.
 */
cljs.core.contains_QMARK_ = (function cljs$core$contains_QMARK_(coll,v){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return false;
} else {
return true;
}
});
/**
 * Returns the map entry for key, or nil if key not present.
 */
cljs.core.find = (function cljs$core$find(coll,k){
if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
} else {
return null;
}
});
/**
 * Returns true if no two of the arguments are =
 * @param {...*} var_args
 */
cljs.core.distinct_QMARK_ = (function() {
var cljs$core$distinct_QMARK_ = null;
var cljs$core$distinct_QMARK___1 = (function (x){
return true;
});
var cljs$core$distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var cljs$core$distinct_QMARK___3 = (function() { 
var G__7508__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))){
var s = cljs.core.PersistentHashSet.fromArray([x,y], true);
var xs = more;
while(true){
var x__$1 = cljs.core.first(xs);
var etc = cljs.core.next(xs);
if(cljs.core.truth_(xs)){
if(cljs.core.contains_QMARK_(s,x__$1)){
return false;
} else {
var G__7509 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__7510 = etc;
s = G__7509;
xs = G__7510;
continue;
}
} else {
return true;
}
break;
}
} else {
return false;
}
};
var G__7508 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7511__i = 0, G__7511__a = new Array(arguments.length -  2);
while (G__7511__i < G__7511__a.length) {G__7511__a[G__7511__i] = arguments[G__7511__i + 2]; ++G__7511__i;}
  more = new cljs.core.IndexedSeq(G__7511__a,0);
} 
return G__7508__delegate.call(this,x,y,more);};
G__7508.cljs$lang$maxFixedArity = 2;
G__7508.cljs$lang$applyTo = (function (arglist__7512){
var x = cljs.core.first(arglist__7512);
arglist__7512 = cljs.core.next(arglist__7512);
var y = cljs.core.first(arglist__7512);
var more = cljs.core.rest(arglist__7512);
return G__7508__delegate(x,y,more);
});
G__7508.cljs$core$IFn$_invoke$arity$variadic = G__7508__delegate;
return G__7508;
})()
;
cljs$core$distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$distinct_QMARK___1.call(this,x);
case 2:
return cljs$core$distinct_QMARK___2.call(this,x,y);
default:
var G__7513 = null;
if (arguments.length > 2) {
var G__7514__i = 0, G__7514__a = new Array(arguments.length -  2);
while (G__7514__i < G__7514__a.length) {G__7514__a[G__7514__i] = arguments[G__7514__i + 2]; ++G__7514__i;}
G__7513 = new cljs.core.IndexedSeq(G__7514__a,0);
}
return cljs$core$distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$distinct_QMARK_.cljs$lang$maxFixedArity = 2;
cljs$core$distinct_QMARK_.cljs$lang$applyTo = cljs$core$distinct_QMARK___3.cljs$lang$applyTo;
cljs$core$distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = cljs$core$distinct_QMARK___1;
cljs$core$distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = cljs$core$distinct_QMARK___2;
cljs$core$distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$distinct_QMARK_;
})()
;
/**
 * Coerces coll to a (possibly empty) sequence, if it is not already
 * one. Will not force a lazy seq. (sequence nil) yields ()
 */
cljs.core.sequence = (function cljs$core$sequence(coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__559__auto__ = cljs.core.seq(coll);
if(or__559__auto__){
return or__559__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
/**
 * Comparator. Returns a negative number, zero, or a positive number
 * when x is logically 'less than', 'equal to', or 'greater than'
 * y. Uses IComparable if available and google.array.defaultCompare for objects
 * of the same type and special-cases nil to be less than any other object.
 */
cljs.core.compare = (function cljs$core$compare(x,y){
if((x === y)){
return (0);
} else {
if((x == null)){
return (-1);
} else {
if((y == null)){
return (1);
} else {
if((cljs.core.type(x) === cljs.core.type(y))){
if((function (){var G__7516 = x;
if(G__7516){
var bit__1228__auto__ = (G__7516.cljs$lang$protocol_mask$partition1$ & (2048));
if((bit__1228__auto__) || (G__7516.cljs$core$IComparable$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else {
return goog.array.defaultCompare(x,y);
}
} else {
throw (new Error("compare on non-nil objects of different types"));

}
}
}
}
});
/**
 * Compare indexed collection.
 */
cljs.core.compare_indexed = (function() {
var cljs$core$compare_indexed = null;
var cljs$core$compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
return cljs$core$compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
});
var cljs$core$compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if(((d === (0))) && (((n + (1)) < len))){
var G__7517 = xs;
var G__7518 = ys;
var G__7519 = len;
var G__7520 = (n + (1));
xs = G__7517;
ys = G__7518;
len = G__7519;
n = G__7520;
continue;
} else {
return d;
}
break;
}
});
cljs$core$compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return cljs$core$compare_indexed__2.call(this,xs,ys);
case 4:
return cljs$core$compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$compare_indexed.cljs$core$IFn$_invoke$arity$2 = cljs$core$compare_indexed__2;
cljs$core$compare_indexed.cljs$core$IFn$_invoke$arity$4 = cljs$core$compare_indexed__4;
return cljs$core$compare_indexed;
})()
;
/**
 * Given a fn that might be boolean valued or a comparator,
 * return a fn that is a comparator.
 */
cljs.core.fn__GT_comparator = (function cljs$core$fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare)){
return cljs.core.compare;
} else {
return (function (x,y){
var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
if(typeof r === 'number'){
return r;
} else {
if(cljs.core.truth_(r)){
return (-1);
} else {
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x)))){
return (1);
} else {
return (0);
}
}
}
});
}
});
/**
 * Returns a sorted sequence of the items in coll. Comp can be
 * boolean-valued comparison funcion, or a -/0/+ valued comparator.
 * Comp defaults to compare.
 */
cljs.core.sort = (function() {
var cljs$core$sort = null;
var cljs$core$sort__1 = (function (coll){
return cljs$core$sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var cljs$core$sort__2 = (function (comp,coll){
if(cljs.core.seq(coll)){
var a = (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.to_array.call(null,coll));
var G__7523_7525 = a;
var G__7524_7526 = cljs.core.fn__GT_comparator(comp);
goog.array.stableSort(G__7523_7525,G__7524_7526);

return cljs.core.seq(a);
} else {
return cljs.core.List.EMPTY;
}
});
cljs$core$sort = function(comp,coll){
switch(arguments.length){
case 1:
return cljs$core$sort__1.call(this,comp);
case 2:
return cljs$core$sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$sort.cljs$core$IFn$_invoke$arity$1 = cljs$core$sort__1;
cljs$core$sort.cljs$core$IFn$_invoke$arity$2 = cljs$core$sort__2;
return cljs$core$sort;
})()
;
/**
 * Returns a sorted sequence of the items in coll, where the sort
 * order is determined by comparing (keyfn item).  Comp can be
 * boolean-valued comparison funcion, or a -/0/+ valued comparator.
 * Comp defaults to compare.
 */
cljs.core.sort_by = (function() {
var cljs$core$sort_by = null;
var cljs$core$sort_by__2 = (function (keyfn,coll){
return cljs$core$sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var cljs$core$sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
cljs$core$sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return cljs$core$sort_by__2.call(this,keyfn,comp);
case 3:
return cljs$core$sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$sort_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$sort_by__2;
cljs$core$sort_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$sort_by__3;
return cljs$core$sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var cljs$core$seq_reduce = null;
var cljs$core$seq_reduce__2 = (function (f,coll){
var temp__4423__auto__ = cljs.core.seq(coll);
if(temp__4423__auto__){
var s = temp__4423__auto__;
var G__7532 = f;
var G__7533 = cljs.core.first(s);
var G__7534 = cljs.core.next(s);
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(G__7532,G__7533,G__7534) : cljs.core.reduce.call(null,G__7532,G__7533,G__7534));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var cljs$core$seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq(coll);
while(true){
if(coll__$1){
var nval = (function (){var G__7535 = val__$1;
var G__7536 = cljs.core.first(coll__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7535,G__7536) : f.call(null,G__7535,G__7536));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__7537 = nval;
var G__7538 = cljs.core.next(coll__$1);
val__$1 = G__7537;
coll__$1 = G__7538;
continue;
}
} else {
return val__$1;
}
break;
}
});
cljs$core$seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return cljs$core$seq_reduce__2.call(this,f,val);
case 3:
return cljs$core$seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$seq_reduce.cljs$core$IFn$_invoke$arity$2 = cljs$core$seq_reduce__2;
cljs$core$seq_reduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$seq_reduce__3;
return cljs$core$seq_reduce;
})()
;
/**
 * Return a random permutation of coll
 */
cljs.core.shuffle = (function cljs$core$shuffle(coll){
var a = (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.to_array.call(null,coll));
goog.array.shuffle(a);

return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.vec.call(null,a));
});
/**
 * f should be a function of 2 arguments. If val is not supplied,
 * returns the result of applying f to the first 2 items in coll, then
 * applying f to that result and the 3rd item, etc. If coll contains no
 * items, f must accept no arguments as well, and reduce returns the
 * result of calling f with no arguments.  If coll has only 1 item, it
 * is returned and f is not called.  If val is supplied, returns the
 * result of applying f to val and the first item in coll, then
 * applying f to that result and the 2nd item, etc. If coll contains no
 * items, returns val and f is not called.
 */
cljs.core.reduce = (function() {
var cljs$core$reduce = null;
var cljs$core$reduce__2 = (function (f,coll){
if((function (){var G__7541 = coll;
if(G__7541){
var bit__1228__auto__ = (G__7541.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__1228__auto__) || (G__7541.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);

}
}
}
}
});
var cljs$core$reduce__3 = (function (f,val,coll){
if((function (){var G__7542 = coll;
if(G__7542){
var bit__1228__auto__ = (G__7542.cljs$lang$protocol_mask$partition0$ & (524288));
if((bit__1228__auto__) || (G__7542.cljs$core$IReduce$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else {
if(coll instanceof Array){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(typeof coll === 'string'){
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll)){
return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else {
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);

}
}
}
}
});
cljs$core$reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return cljs$core$reduce__2.call(this,f,val);
case 3:
return cljs$core$reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$reduce.cljs$core$IFn$_invoke$arity$2 = cljs$core$reduce__2;
cljs$core$reduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$reduce__3;
return cljs$core$reduce;
})()
;
/**
 * Reduces an associative collection. f should be a function of 3
 * arguments. Returns the result of applying f to init, the first key
 * and the first value in coll, then applying f to that result and the
 * 2nd key and value, etc. If coll contains no entries, returns init
 * and f is not called. Note that reduce-kv is supported on vectors,
 * where the keys will be the ordinals.
 */
cljs.core.reduce_kv = (function cljs$core$reduce_kv(f,init,coll){
if(!((coll == null))){
return cljs.core._kv_reduce(coll,f,init);
} else {
return init;
}
});
cljs.core.identity = (function cljs$core$identity(x){
return x;
});
cljs.core.completing = (function() {
var cljs$core$completing = null;
var cljs$core$completing__1 = (function (f){
return cljs$core$completing.cljs$core$IFn$_invoke$arity$2(f,cljs.core.identity);
});
var cljs$core$completing__2 = (function (f,cf){
return (function() {
var G__7543 = null;
var G__7543__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__7543__1 = (function (x){
return (cf.cljs$core$IFn$_invoke$arity$1 ? cf.cljs$core$IFn$_invoke$arity$1(x) : cf.call(null,x));
});
var G__7543__2 = (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
});
G__7543 = function(x,y){
switch(arguments.length){
case 0:
return G__7543__0.call(this);
case 1:
return G__7543__1.call(this,x);
case 2:
return G__7543__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7543.cljs$core$IFn$_invoke$arity$0 = G__7543__0;
G__7543.cljs$core$IFn$_invoke$arity$1 = G__7543__1;
G__7543.cljs$core$IFn$_invoke$arity$2 = G__7543__2;
return G__7543;
})()
});
cljs$core$completing = function(f,cf){
switch(arguments.length){
case 1:
return cljs$core$completing__1.call(this,f);
case 2:
return cljs$core$completing__2.call(this,f,cf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$completing.cljs$core$IFn$_invoke$arity$1 = cljs$core$completing__1;
cljs$core$completing.cljs$core$IFn$_invoke$arity$2 = cljs$core$completing__2;
return cljs$core$completing;
})()
;
/**
 * reduce with a transformation of f (xf). If init is not
 * supplied, (f) will be called to produce it. f should be a reducing
 * step function that accepts both 1 and 2 arguments, if it accepts
 * only 2 you can add the arity-1 with 'completing'. Returns the result
 * of applying (the transformed) xf to init and the first item in coll,
 * then applying xf to that result and the 2nd item, etc. If coll
 * contains no items, returns init and f is not called. Note that
 * certain transforms may inject or skip items.
 */
cljs.core.transduce = (function() {
var cljs$core$transduce = null;
var cljs$core$transduce__3 = (function (xform,f,coll){
return cljs$core$transduce.cljs$core$IFn$_invoke$arity$4(xform,f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),coll);
});
var cljs$core$transduce__4 = (function (xform,f,init,coll){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f__$1,init,coll);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(ret) : f__$1.call(null,ret));
});
cljs$core$transduce = function(xform,f,init,coll){
switch(arguments.length){
case 3:
return cljs$core$transduce__3.call(this,xform,f,init);
case 4:
return cljs$core$transduce__4.call(this,xform,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$transduce.cljs$core$IFn$_invoke$arity$3 = cljs$core$transduce__3;
cljs$core$transduce.cljs$core$IFn$_invoke$arity$4 = cljs$core$transduce__4;
return cljs$core$transduce;
})()
;
/**
 * Returns the sum of nums. (+) returns 0.
 * @param {...*} var_args
 */
cljs.core._PLUS_ = (function() {
var cljs$core$_PLUS_ = null;
var cljs$core$_PLUS___0 = (function (){
return (0);
});
var cljs$core$_PLUS___1 = (function (x){
return x;
});
var cljs$core$_PLUS___2 = (function (x,y){
return (x + y);
});
var cljs$core$_PLUS___3 = (function() { 
var G__7548__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$_PLUS_,(x + y),more);
};
var G__7548 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7549__i = 0, G__7549__a = new Array(arguments.length -  2);
while (G__7549__i < G__7549__a.length) {G__7549__a[G__7549__i] = arguments[G__7549__i + 2]; ++G__7549__i;}
  more = new cljs.core.IndexedSeq(G__7549__a,0);
} 
return G__7548__delegate.call(this,x,y,more);};
G__7548.cljs$lang$maxFixedArity = 2;
G__7548.cljs$lang$applyTo = (function (arglist__7550){
var x = cljs.core.first(arglist__7550);
arglist__7550 = cljs.core.next(arglist__7550);
var y = cljs.core.first(arglist__7550);
var more = cljs.core.rest(arglist__7550);
return G__7548__delegate(x,y,more);
});
G__7548.cljs$core$IFn$_invoke$arity$variadic = G__7548__delegate;
return G__7548;
})()
;
cljs$core$_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$_PLUS___0.call(this);
case 1:
return cljs$core$_PLUS___1.call(this,x);
case 2:
return cljs$core$_PLUS___2.call(this,x,y);
default:
var G__7551 = null;
if (arguments.length > 2) {
var G__7552__i = 0, G__7552__a = new Array(arguments.length -  2);
while (G__7552__i < G__7552__a.length) {G__7552__a[G__7552__i] = arguments[G__7552__i + 2]; ++G__7552__i;}
G__7551 = new cljs.core.IndexedSeq(G__7552__a,0);
}
return cljs$core$_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_PLUS_.cljs$lang$maxFixedArity = 2;
cljs$core$_PLUS_.cljs$lang$applyTo = cljs$core$_PLUS___3.cljs$lang$applyTo;
cljs$core$_PLUS_.cljs$core$IFn$_invoke$arity$0 = cljs$core$_PLUS___0;
cljs$core$_PLUS_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_PLUS___1;
cljs$core$_PLUS_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_PLUS___2;
cljs$core$_PLUS_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_PLUS_;
})()
;
/**
 * If no ys are supplied, returns the negation of x, else subtracts
 * the ys from x and returns the result.
 * @param {...*} var_args
 */
cljs.core._ = (function() {
var cljs$core$_ = null;
var cljs$core$___1 = (function (x){
return (- x);
});
var cljs$core$___2 = (function (x,y){
return (x - y);
});
var cljs$core$___3 = (function() { 
var G__7553__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$_,(x - y),more);
};
var G__7553 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7554__i = 0, G__7554__a = new Array(arguments.length -  2);
while (G__7554__i < G__7554__a.length) {G__7554__a[G__7554__i] = arguments[G__7554__i + 2]; ++G__7554__i;}
  more = new cljs.core.IndexedSeq(G__7554__a,0);
} 
return G__7553__delegate.call(this,x,y,more);};
G__7553.cljs$lang$maxFixedArity = 2;
G__7553.cljs$lang$applyTo = (function (arglist__7555){
var x = cljs.core.first(arglist__7555);
arglist__7555 = cljs.core.next(arglist__7555);
var y = cljs.core.first(arglist__7555);
var more = cljs.core.rest(arglist__7555);
return G__7553__delegate(x,y,more);
});
G__7553.cljs$core$IFn$_invoke$arity$variadic = G__7553__delegate;
return G__7553;
})()
;
cljs$core$_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$___1.call(this,x);
case 2:
return cljs$core$___2.call(this,x,y);
default:
var G__7556 = null;
if (arguments.length > 2) {
var G__7557__i = 0, G__7557__a = new Array(arguments.length -  2);
while (G__7557__i < G__7557__a.length) {G__7557__a[G__7557__i] = arguments[G__7557__i + 2]; ++G__7557__i;}
G__7556 = new cljs.core.IndexedSeq(G__7557__a,0);
}
return cljs$core$___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_.cljs$lang$maxFixedArity = 2;
cljs$core$_.cljs$lang$applyTo = cljs$core$___3.cljs$lang$applyTo;
cljs$core$_.cljs$core$IFn$_invoke$arity$1 = cljs$core$___1;
cljs$core$_.cljs$core$IFn$_invoke$arity$2 = cljs$core$___2;
cljs$core$_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_;
})()
;
/**
 * Returns the product of nums. (*) returns 1.
 * @param {...*} var_args
 */
cljs.core._STAR_ = (function() {
var cljs$core$_STAR_ = null;
var cljs$core$_STAR___0 = (function (){
return (1);
});
var cljs$core$_STAR___1 = (function (x){
return x;
});
var cljs$core$_STAR___2 = (function (x,y){
return (x * y);
});
var cljs$core$_STAR___3 = (function() { 
var G__7558__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$_STAR_,(x * y),more);
};
var G__7558 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7559__i = 0, G__7559__a = new Array(arguments.length -  2);
while (G__7559__i < G__7559__a.length) {G__7559__a[G__7559__i] = arguments[G__7559__i + 2]; ++G__7559__i;}
  more = new cljs.core.IndexedSeq(G__7559__a,0);
} 
return G__7558__delegate.call(this,x,y,more);};
G__7558.cljs$lang$maxFixedArity = 2;
G__7558.cljs$lang$applyTo = (function (arglist__7560){
var x = cljs.core.first(arglist__7560);
arglist__7560 = cljs.core.next(arglist__7560);
var y = cljs.core.first(arglist__7560);
var more = cljs.core.rest(arglist__7560);
return G__7558__delegate(x,y,more);
});
G__7558.cljs$core$IFn$_invoke$arity$variadic = G__7558__delegate;
return G__7558;
})()
;
cljs$core$_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$_STAR___0.call(this);
case 1:
return cljs$core$_STAR___1.call(this,x);
case 2:
return cljs$core$_STAR___2.call(this,x,y);
default:
var G__7561 = null;
if (arguments.length > 2) {
var G__7562__i = 0, G__7562__a = new Array(arguments.length -  2);
while (G__7562__i < G__7562__a.length) {G__7562__a[G__7562__i] = arguments[G__7562__i + 2]; ++G__7562__i;}
G__7561 = new cljs.core.IndexedSeq(G__7562__a,0);
}
return cljs$core$_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_STAR_.cljs$lang$maxFixedArity = 2;
cljs$core$_STAR_.cljs$lang$applyTo = cljs$core$_STAR___3.cljs$lang$applyTo;
cljs$core$_STAR_.cljs$core$IFn$_invoke$arity$0 = cljs$core$_STAR___0;
cljs$core$_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_STAR___1;
cljs$core$_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_STAR___2;
cljs$core$_STAR_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_STAR_;
})()
;
/**
 * If no denominators are supplied, returns 1/numerator,
 * else returns numerator divided by all of the denominators.
 * @param {...*} var_args
 */
cljs.core._SLASH_ = (function() {
var cljs$core$_SLASH_ = null;
var cljs$core$_SLASH___1 = (function (x){
return cljs$core$_SLASH_.cljs$core$IFn$_invoke$arity$2((1),x);
});
var cljs$core$_SLASH___2 = (function (x,y){
return (x / y);
});
var cljs$core$_SLASH___3 = (function() { 
var G__7563__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$_SLASH_,cljs$core$_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__7563 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7564__i = 0, G__7564__a = new Array(arguments.length -  2);
while (G__7564__i < G__7564__a.length) {G__7564__a[G__7564__i] = arguments[G__7564__i + 2]; ++G__7564__i;}
  more = new cljs.core.IndexedSeq(G__7564__a,0);
} 
return G__7563__delegate.call(this,x,y,more);};
G__7563.cljs$lang$maxFixedArity = 2;
G__7563.cljs$lang$applyTo = (function (arglist__7565){
var x = cljs.core.first(arglist__7565);
arglist__7565 = cljs.core.next(arglist__7565);
var y = cljs.core.first(arglist__7565);
var more = cljs.core.rest(arglist__7565);
return G__7563__delegate(x,y,more);
});
G__7563.cljs$core$IFn$_invoke$arity$variadic = G__7563__delegate;
return G__7563;
})()
;
cljs$core$_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_SLASH___1.call(this,x);
case 2:
return cljs$core$_SLASH___2.call(this,x,y);
default:
var G__7566 = null;
if (arguments.length > 2) {
var G__7567__i = 0, G__7567__a = new Array(arguments.length -  2);
while (G__7567__i < G__7567__a.length) {G__7567__a[G__7567__i] = arguments[G__7567__i + 2]; ++G__7567__i;}
G__7566 = new cljs.core.IndexedSeq(G__7567__a,0);
}
return cljs$core$_SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_SLASH_.cljs$lang$maxFixedArity = 2;
cljs$core$_SLASH_.cljs$lang$applyTo = cljs$core$_SLASH___3.cljs$lang$applyTo;
cljs$core$_SLASH_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_SLASH___1;
cljs$core$_SLASH_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_SLASH___2;
cljs$core$_SLASH_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_SLASH_;
})()
;
/**
 * Returns non-nil if nums are in monotonically increasing order,
 * otherwise false.
 * @param {...*} var_args
 */
cljs.core._LT_ = (function() {
var cljs$core$_LT_ = null;
var cljs$core$_LT___1 = (function (x){
return true;
});
var cljs$core$_LT___2 = (function (x,y){
return (x < y);
});
var cljs$core$_LT___3 = (function() { 
var G__7568__delegate = function (x,y,more){
while(true){
if((x < y)){
if(cljs.core.next(more)){
var G__7569 = y;
var G__7570 = cljs.core.first(more);
var G__7571 = cljs.core.next(more);
x = G__7569;
y = G__7570;
more = G__7571;
continue;
} else {
return (y < cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7568 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7572__i = 0, G__7572__a = new Array(arguments.length -  2);
while (G__7572__i < G__7572__a.length) {G__7572__a[G__7572__i] = arguments[G__7572__i + 2]; ++G__7572__i;}
  more = new cljs.core.IndexedSeq(G__7572__a,0);
} 
return G__7568__delegate.call(this,x,y,more);};
G__7568.cljs$lang$maxFixedArity = 2;
G__7568.cljs$lang$applyTo = (function (arglist__7573){
var x = cljs.core.first(arglist__7573);
arglist__7573 = cljs.core.next(arglist__7573);
var y = cljs.core.first(arglist__7573);
var more = cljs.core.rest(arglist__7573);
return G__7568__delegate(x,y,more);
});
G__7568.cljs$core$IFn$_invoke$arity$variadic = G__7568__delegate;
return G__7568;
})()
;
cljs$core$_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_LT___1.call(this,x);
case 2:
return cljs$core$_LT___2.call(this,x,y);
default:
var G__7574 = null;
if (arguments.length > 2) {
var G__7575__i = 0, G__7575__a = new Array(arguments.length -  2);
while (G__7575__i < G__7575__a.length) {G__7575__a[G__7575__i] = arguments[G__7575__i + 2]; ++G__7575__i;}
G__7574 = new cljs.core.IndexedSeq(G__7575__a,0);
}
return cljs$core$_LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_LT_.cljs$lang$maxFixedArity = 2;
cljs$core$_LT_.cljs$lang$applyTo = cljs$core$_LT___3.cljs$lang$applyTo;
cljs$core$_LT_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_LT___1;
cljs$core$_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_LT___2;
cljs$core$_LT_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_LT___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_LT_;
})()
;
/**
 * Returns non-nil if nums are in monotonically non-decreasing order,
 * otherwise false.
 * @param {...*} var_args
 */
cljs.core._LT__EQ_ = (function() {
var cljs$core$_LT__EQ_ = null;
var cljs$core$_LT__EQ___1 = (function (x){
return true;
});
var cljs$core$_LT__EQ___2 = (function (x,y){
return (x <= y);
});
var cljs$core$_LT__EQ___3 = (function() { 
var G__7576__delegate = function (x,y,more){
while(true){
if((x <= y)){
if(cljs.core.next(more)){
var G__7577 = y;
var G__7578 = cljs.core.first(more);
var G__7579 = cljs.core.next(more);
x = G__7577;
y = G__7578;
more = G__7579;
continue;
} else {
return (y <= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7576 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7580__i = 0, G__7580__a = new Array(arguments.length -  2);
while (G__7580__i < G__7580__a.length) {G__7580__a[G__7580__i] = arguments[G__7580__i + 2]; ++G__7580__i;}
  more = new cljs.core.IndexedSeq(G__7580__a,0);
} 
return G__7576__delegate.call(this,x,y,more);};
G__7576.cljs$lang$maxFixedArity = 2;
G__7576.cljs$lang$applyTo = (function (arglist__7581){
var x = cljs.core.first(arglist__7581);
arglist__7581 = cljs.core.next(arglist__7581);
var y = cljs.core.first(arglist__7581);
var more = cljs.core.rest(arglist__7581);
return G__7576__delegate(x,y,more);
});
G__7576.cljs$core$IFn$_invoke$arity$variadic = G__7576__delegate;
return G__7576;
})()
;
cljs$core$_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_LT__EQ___1.call(this,x);
case 2:
return cljs$core$_LT__EQ___2.call(this,x,y);
default:
var G__7582 = null;
if (arguments.length > 2) {
var G__7583__i = 0, G__7583__a = new Array(arguments.length -  2);
while (G__7583__i < G__7583__a.length) {G__7583__a[G__7583__i] = arguments[G__7583__i + 2]; ++G__7583__i;}
G__7582 = new cljs.core.IndexedSeq(G__7583__a,0);
}
return cljs$core$_LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_LT__EQ_.cljs$lang$maxFixedArity = 2;
cljs$core$_LT__EQ_.cljs$lang$applyTo = cljs$core$_LT__EQ___3.cljs$lang$applyTo;
cljs$core$_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_LT__EQ___1;
cljs$core$_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_LT__EQ___2;
cljs$core$_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_LT__EQ_;
})()
;
/**
 * Returns non-nil if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {...*} var_args
 */
cljs.core._GT_ = (function() {
var cljs$core$_GT_ = null;
var cljs$core$_GT___1 = (function (x){
return true;
});
var cljs$core$_GT___2 = (function (x,y){
return (x > y);
});
var cljs$core$_GT___3 = (function() { 
var G__7584__delegate = function (x,y,more){
while(true){
if((x > y)){
if(cljs.core.next(more)){
var G__7585 = y;
var G__7586 = cljs.core.first(more);
var G__7587 = cljs.core.next(more);
x = G__7585;
y = G__7586;
more = G__7587;
continue;
} else {
return (y > cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7584 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7588__i = 0, G__7588__a = new Array(arguments.length -  2);
while (G__7588__i < G__7588__a.length) {G__7588__a[G__7588__i] = arguments[G__7588__i + 2]; ++G__7588__i;}
  more = new cljs.core.IndexedSeq(G__7588__a,0);
} 
return G__7584__delegate.call(this,x,y,more);};
G__7584.cljs$lang$maxFixedArity = 2;
G__7584.cljs$lang$applyTo = (function (arglist__7589){
var x = cljs.core.first(arglist__7589);
arglist__7589 = cljs.core.next(arglist__7589);
var y = cljs.core.first(arglist__7589);
var more = cljs.core.rest(arglist__7589);
return G__7584__delegate(x,y,more);
});
G__7584.cljs$core$IFn$_invoke$arity$variadic = G__7584__delegate;
return G__7584;
})()
;
cljs$core$_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_GT___1.call(this,x);
case 2:
return cljs$core$_GT___2.call(this,x,y);
default:
var G__7590 = null;
if (arguments.length > 2) {
var G__7591__i = 0, G__7591__a = new Array(arguments.length -  2);
while (G__7591__i < G__7591__a.length) {G__7591__a[G__7591__i] = arguments[G__7591__i + 2]; ++G__7591__i;}
G__7590 = new cljs.core.IndexedSeq(G__7591__a,0);
}
return cljs$core$_GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_GT_.cljs$lang$maxFixedArity = 2;
cljs$core$_GT_.cljs$lang$applyTo = cljs$core$_GT___3.cljs$lang$applyTo;
cljs$core$_GT_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_GT___1;
cljs$core$_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_GT___2;
cljs$core$_GT_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_GT___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_GT_;
})()
;
/**
 * Returns non-nil if nums are in monotonically non-increasing order,
 * otherwise false.
 * @param {...*} var_args
 */
cljs.core._GT__EQ_ = (function() {
var cljs$core$_GT__EQ_ = null;
var cljs$core$_GT__EQ___1 = (function (x){
return true;
});
var cljs$core$_GT__EQ___2 = (function (x,y){
return (x >= y);
});
var cljs$core$_GT__EQ___3 = (function() { 
var G__7592__delegate = function (x,y,more){
while(true){
if((x >= y)){
if(cljs.core.next(more)){
var G__7593 = y;
var G__7594 = cljs.core.first(more);
var G__7595 = cljs.core.next(more);
x = G__7593;
y = G__7594;
more = G__7595;
continue;
} else {
return (y >= cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7592 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7596__i = 0, G__7596__a = new Array(arguments.length -  2);
while (G__7596__i < G__7596__a.length) {G__7596__a[G__7596__i] = arguments[G__7596__i + 2]; ++G__7596__i;}
  more = new cljs.core.IndexedSeq(G__7596__a,0);
} 
return G__7592__delegate.call(this,x,y,more);};
G__7592.cljs$lang$maxFixedArity = 2;
G__7592.cljs$lang$applyTo = (function (arglist__7597){
var x = cljs.core.first(arglist__7597);
arglist__7597 = cljs.core.next(arglist__7597);
var y = cljs.core.first(arglist__7597);
var more = cljs.core.rest(arglist__7597);
return G__7592__delegate(x,y,more);
});
G__7592.cljs$core$IFn$_invoke$arity$variadic = G__7592__delegate;
return G__7592;
})()
;
cljs$core$_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_GT__EQ___1.call(this,x);
case 2:
return cljs$core$_GT__EQ___2.call(this,x,y);
default:
var G__7598 = null;
if (arguments.length > 2) {
var G__7599__i = 0, G__7599__a = new Array(arguments.length -  2);
while (G__7599__i < G__7599__a.length) {G__7599__a[G__7599__i] = arguments[G__7599__i + 2]; ++G__7599__i;}
G__7598 = new cljs.core.IndexedSeq(G__7599__a,0);
}
return cljs$core$_GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_GT__EQ_.cljs$lang$maxFixedArity = 2;
cljs$core$_GT__EQ_.cljs$lang$applyTo = cljs$core$_GT__EQ___3.cljs$lang$applyTo;
cljs$core$_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_GT__EQ___1;
cljs$core$_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_GT__EQ___2;
cljs$core$_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_GT__EQ_;
})()
;
/**
 * Returns a number one less than num.
 */
cljs.core.dec = (function cljs$core$dec(x){
return (x - (1));
});
/**
 * Returns the greatest of the nums.
 * @param {...*} var_args
 */
cljs.core.max = (function() {
var cljs$core$max = null;
var cljs$core$max__1 = (function (x){
return x;
});
var cljs$core$max__2 = (function (x,y){
var x__871__auto__ = x;
var y__872__auto__ = y;
return ((x__871__auto__ > y__872__auto__) ? x__871__auto__ : y__872__auto__);
});
var cljs$core$max__3 = (function() { 
var G__7600__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$max,(function (){var x__871__auto__ = x;
var y__872__auto__ = y;
return ((x__871__auto__ > y__872__auto__) ? x__871__auto__ : y__872__auto__);
})(),more);
};
var G__7600 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7601__i = 0, G__7601__a = new Array(arguments.length -  2);
while (G__7601__i < G__7601__a.length) {G__7601__a[G__7601__i] = arguments[G__7601__i + 2]; ++G__7601__i;}
  more = new cljs.core.IndexedSeq(G__7601__a,0);
} 
return G__7600__delegate.call(this,x,y,more);};
G__7600.cljs$lang$maxFixedArity = 2;
G__7600.cljs$lang$applyTo = (function (arglist__7602){
var x = cljs.core.first(arglist__7602);
arglist__7602 = cljs.core.next(arglist__7602);
var y = cljs.core.first(arglist__7602);
var more = cljs.core.rest(arglist__7602);
return G__7600__delegate(x,y,more);
});
G__7600.cljs$core$IFn$_invoke$arity$variadic = G__7600__delegate;
return G__7600;
})()
;
cljs$core$max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$max__1.call(this,x);
case 2:
return cljs$core$max__2.call(this,x,y);
default:
var G__7603 = null;
if (arguments.length > 2) {
var G__7604__i = 0, G__7604__a = new Array(arguments.length -  2);
while (G__7604__i < G__7604__a.length) {G__7604__a[G__7604__i] = arguments[G__7604__i + 2]; ++G__7604__i;}
G__7603 = new cljs.core.IndexedSeq(G__7604__a,0);
}
return cljs$core$max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$max.cljs$lang$maxFixedArity = 2;
cljs$core$max.cljs$lang$applyTo = cljs$core$max__3.cljs$lang$applyTo;
cljs$core$max.cljs$core$IFn$_invoke$arity$1 = cljs$core$max__1;
cljs$core$max.cljs$core$IFn$_invoke$arity$2 = cljs$core$max__2;
cljs$core$max.cljs$core$IFn$_invoke$arity$variadic = cljs$core$max__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$max;
})()
;
/**
 * Returns the least of the nums.
 * @param {...*} var_args
 */
cljs.core.min = (function() {
var cljs$core$min = null;
var cljs$core$min__1 = (function (x){
return x;
});
var cljs$core$min__2 = (function (x,y){
var x__878__auto__ = x;
var y__879__auto__ = y;
return ((x__878__auto__ < y__879__auto__) ? x__878__auto__ : y__879__auto__);
});
var cljs$core$min__3 = (function() { 
var G__7605__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$min,(function (){var x__878__auto__ = x;
var y__879__auto__ = y;
return ((x__878__auto__ < y__879__auto__) ? x__878__auto__ : y__879__auto__);
})(),more);
};
var G__7605 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7606__i = 0, G__7606__a = new Array(arguments.length -  2);
while (G__7606__i < G__7606__a.length) {G__7606__a[G__7606__i] = arguments[G__7606__i + 2]; ++G__7606__i;}
  more = new cljs.core.IndexedSeq(G__7606__a,0);
} 
return G__7605__delegate.call(this,x,y,more);};
G__7605.cljs$lang$maxFixedArity = 2;
G__7605.cljs$lang$applyTo = (function (arglist__7607){
var x = cljs.core.first(arglist__7607);
arglist__7607 = cljs.core.next(arglist__7607);
var y = cljs.core.first(arglist__7607);
var more = cljs.core.rest(arglist__7607);
return G__7605__delegate(x,y,more);
});
G__7605.cljs$core$IFn$_invoke$arity$variadic = G__7605__delegate;
return G__7605;
})()
;
cljs$core$min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$min__1.call(this,x);
case 2:
return cljs$core$min__2.call(this,x,y);
default:
var G__7608 = null;
if (arguments.length > 2) {
var G__7609__i = 0, G__7609__a = new Array(arguments.length -  2);
while (G__7609__i < G__7609__a.length) {G__7609__a[G__7609__i] = arguments[G__7609__i + 2]; ++G__7609__i;}
G__7608 = new cljs.core.IndexedSeq(G__7609__a,0);
}
return cljs$core$min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$min.cljs$lang$maxFixedArity = 2;
cljs$core$min.cljs$lang$applyTo = cljs$core$min__3.cljs$lang$applyTo;
cljs$core$min.cljs$core$IFn$_invoke$arity$1 = cljs$core$min__1;
cljs$core$min.cljs$core$IFn$_invoke$arity$2 = cljs$core$min__2;
cljs$core$min.cljs$core$IFn$_invoke$arity$variadic = cljs$core$min__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$min;
})()
;
cljs.core.byte$ = (function cljs$core$byte(x){
return x;
});
/**
 * Coerce to char
 */
cljs.core.char$ = (function cljs$core$char(x){
if(typeof x === 'number'){
return String.fromCharCode(x);
} else {
if((typeof x === 'string') && ((x.length === (1)))){
return x;
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.core.short$ = (function cljs$core$short(x){
return x;
});
cljs.core.float$ = (function cljs$core$float(x){
return x;
});
cljs.core.double$ = (function cljs$core$double(x){
return x;
});
cljs.core.unchecked_byte = (function cljs$core$unchecked_byte(x){
return x;
});
cljs.core.unchecked_char = (function cljs$core$unchecked_char(x){
return x;
});
cljs.core.unchecked_short = (function cljs$core$unchecked_short(x){
return x;
});
cljs.core.unchecked_float = (function cljs$core$unchecked_float(x){
return x;
});
cljs.core.unchecked_double = (function cljs$core$unchecked_double(x){
return x;
});
/**
 * Returns the sum of nums. (+) returns 0.
 * @param {...*} var_args
 */
cljs.core.unchecked_add = (function() {
var cljs$core$unchecked_add = null;
var cljs$core$unchecked_add__0 = (function (){
return (0);
});
var cljs$core$unchecked_add__1 = (function (x){
return x;
});
var cljs$core$unchecked_add__2 = (function (x,y){
return (x + y);
});
var cljs$core$unchecked_add__3 = (function() { 
var G__7610__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_add,(x + y),more);
};
var G__7610 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7611__i = 0, G__7611__a = new Array(arguments.length -  2);
while (G__7611__i < G__7611__a.length) {G__7611__a[G__7611__i] = arguments[G__7611__i + 2]; ++G__7611__i;}
  more = new cljs.core.IndexedSeq(G__7611__a,0);
} 
return G__7610__delegate.call(this,x,y,more);};
G__7610.cljs$lang$maxFixedArity = 2;
G__7610.cljs$lang$applyTo = (function (arglist__7612){
var x = cljs.core.first(arglist__7612);
arglist__7612 = cljs.core.next(arglist__7612);
var y = cljs.core.first(arglist__7612);
var more = cljs.core.rest(arglist__7612);
return G__7610__delegate(x,y,more);
});
G__7610.cljs$core$IFn$_invoke$arity$variadic = G__7610__delegate;
return G__7610;
})()
;
cljs$core$unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$unchecked_add__0.call(this);
case 1:
return cljs$core$unchecked_add__1.call(this,x);
case 2:
return cljs$core$unchecked_add__2.call(this,x,y);
default:
var G__7613 = null;
if (arguments.length > 2) {
var G__7614__i = 0, G__7614__a = new Array(arguments.length -  2);
while (G__7614__i < G__7614__a.length) {G__7614__a[G__7614__i] = arguments[G__7614__i + 2]; ++G__7614__i;}
G__7613 = new cljs.core.IndexedSeq(G__7614__a,0);
}
return cljs$core$unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_add.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_add.cljs$lang$applyTo = cljs$core$unchecked_add__3.cljs$lang$applyTo;
cljs$core$unchecked_add.cljs$core$IFn$_invoke$arity$0 = cljs$core$unchecked_add__0;
cljs$core$unchecked_add.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_add__1;
cljs$core$unchecked_add.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_add__2;
cljs$core$unchecked_add.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_add;
})()
;
/**
 * Returns the sum of nums. (+) returns 0.
 * @param {...*} var_args
 */
cljs.core.unchecked_add_int = (function() {
var cljs$core$unchecked_add_int = null;
var cljs$core$unchecked_add_int__0 = (function (){
return (0);
});
var cljs$core$unchecked_add_int__1 = (function (x){
return x;
});
var cljs$core$unchecked_add_int__2 = (function (x,y){
return (x + y);
});
var cljs$core$unchecked_add_int__3 = (function() { 
var G__7615__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_add_int,(x + y),more);
};
var G__7615 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7616__i = 0, G__7616__a = new Array(arguments.length -  2);
while (G__7616__i < G__7616__a.length) {G__7616__a[G__7616__i] = arguments[G__7616__i + 2]; ++G__7616__i;}
  more = new cljs.core.IndexedSeq(G__7616__a,0);
} 
return G__7615__delegate.call(this,x,y,more);};
G__7615.cljs$lang$maxFixedArity = 2;
G__7615.cljs$lang$applyTo = (function (arglist__7617){
var x = cljs.core.first(arglist__7617);
arglist__7617 = cljs.core.next(arglist__7617);
var y = cljs.core.first(arglist__7617);
var more = cljs.core.rest(arglist__7617);
return G__7615__delegate(x,y,more);
});
G__7615.cljs$core$IFn$_invoke$arity$variadic = G__7615__delegate;
return G__7615;
})()
;
cljs$core$unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$unchecked_add_int__0.call(this);
case 1:
return cljs$core$unchecked_add_int__1.call(this,x);
case 2:
return cljs$core$unchecked_add_int__2.call(this,x,y);
default:
var G__7618 = null;
if (arguments.length > 2) {
var G__7619__i = 0, G__7619__a = new Array(arguments.length -  2);
while (G__7619__i < G__7619__a.length) {G__7619__a[G__7619__i] = arguments[G__7619__i + 2]; ++G__7619__i;}
G__7618 = new cljs.core.IndexedSeq(G__7619__a,0);
}
return cljs$core$unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_add_int.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_add_int.cljs$lang$applyTo = cljs$core$unchecked_add_int__3.cljs$lang$applyTo;
cljs$core$unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = cljs$core$unchecked_add_int__0;
cljs$core$unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_add_int__1;
cljs$core$unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_add_int__2;
cljs$core$unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function cljs$core$unchecked_dec(x){
return (x - (1));
});
cljs.core.unchecked_dec_int = (function cljs$core$unchecked_dec_int(x){
return (x - (1));
});
/**
 * If no denominators are supplied, returns 1/numerator,
 * else returns numerator divided by all of the denominators.
 * @param {...*} var_args
 */
cljs.core.unchecked_divide_int = (function() {
var cljs$core$unchecked_divide_int = null;
var cljs$core$unchecked_divide_int__1 = (function (x){
return cljs$core$unchecked_divide_int.cljs$core$IFn$_invoke$arity$2((1),x);
});
var cljs$core$unchecked_divide_int__2 = (function (x,y){
return (x / y);
});
var cljs$core$unchecked_divide_int__3 = (function() { 
var G__7620__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_divide_int,cljs$core$unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__7620 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7621__i = 0, G__7621__a = new Array(arguments.length -  2);
while (G__7621__i < G__7621__a.length) {G__7621__a[G__7621__i] = arguments[G__7621__i + 2]; ++G__7621__i;}
  more = new cljs.core.IndexedSeq(G__7621__a,0);
} 
return G__7620__delegate.call(this,x,y,more);};
G__7620.cljs$lang$maxFixedArity = 2;
G__7620.cljs$lang$applyTo = (function (arglist__7622){
var x = cljs.core.first(arglist__7622);
arglist__7622 = cljs.core.next(arglist__7622);
var y = cljs.core.first(arglist__7622);
var more = cljs.core.rest(arglist__7622);
return G__7620__delegate(x,y,more);
});
G__7620.cljs$core$IFn$_invoke$arity$variadic = G__7620__delegate;
return G__7620;
})()
;
cljs$core$unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$unchecked_divide_int__1.call(this,x);
case 2:
return cljs$core$unchecked_divide_int__2.call(this,x,y);
default:
var G__7623 = null;
if (arguments.length > 2) {
var G__7624__i = 0, G__7624__a = new Array(arguments.length -  2);
while (G__7624__i < G__7624__a.length) {G__7624__a[G__7624__i] = arguments[G__7624__i + 2]; ++G__7624__i;}
G__7623 = new cljs.core.IndexedSeq(G__7624__a,0);
}
return cljs$core$unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_divide_int.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_divide_int.cljs$lang$applyTo = cljs$core$unchecked_divide_int__3.cljs$lang$applyTo;
cljs$core$unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_divide_int__1;
cljs$core$unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_divide_int__2;
cljs$core$unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function cljs$core$unchecked_inc(x){
return (x + (1));
});
cljs.core.unchecked_inc_int = (function cljs$core$unchecked_inc_int(x){
return (x + (1));
});
/**
 * Returns the product of nums. (*) returns 1.
 * @param {...*} var_args
 */
cljs.core.unchecked_multiply = (function() {
var cljs$core$unchecked_multiply = null;
var cljs$core$unchecked_multiply__0 = (function (){
return (1);
});
var cljs$core$unchecked_multiply__1 = (function (x){
return x;
});
var cljs$core$unchecked_multiply__2 = (function (x,y){
return (x * y);
});
var cljs$core$unchecked_multiply__3 = (function() { 
var G__7625__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_multiply,(x * y),more);
};
var G__7625 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7626__i = 0, G__7626__a = new Array(arguments.length -  2);
while (G__7626__i < G__7626__a.length) {G__7626__a[G__7626__i] = arguments[G__7626__i + 2]; ++G__7626__i;}
  more = new cljs.core.IndexedSeq(G__7626__a,0);
} 
return G__7625__delegate.call(this,x,y,more);};
G__7625.cljs$lang$maxFixedArity = 2;
G__7625.cljs$lang$applyTo = (function (arglist__7627){
var x = cljs.core.first(arglist__7627);
arglist__7627 = cljs.core.next(arglist__7627);
var y = cljs.core.first(arglist__7627);
var more = cljs.core.rest(arglist__7627);
return G__7625__delegate(x,y,more);
});
G__7625.cljs$core$IFn$_invoke$arity$variadic = G__7625__delegate;
return G__7625;
})()
;
cljs$core$unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$unchecked_multiply__0.call(this);
case 1:
return cljs$core$unchecked_multiply__1.call(this,x);
case 2:
return cljs$core$unchecked_multiply__2.call(this,x,y);
default:
var G__7628 = null;
if (arguments.length > 2) {
var G__7629__i = 0, G__7629__a = new Array(arguments.length -  2);
while (G__7629__i < G__7629__a.length) {G__7629__a[G__7629__i] = arguments[G__7629__i + 2]; ++G__7629__i;}
G__7628 = new cljs.core.IndexedSeq(G__7629__a,0);
}
return cljs$core$unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_multiply.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_multiply.cljs$lang$applyTo = cljs$core$unchecked_multiply__3.cljs$lang$applyTo;
cljs$core$unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = cljs$core$unchecked_multiply__0;
cljs$core$unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_multiply__1;
cljs$core$unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_multiply__2;
cljs$core$unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_multiply;
})()
;
/**
 * Returns the product of nums. (*) returns 1.
 * @param {...*} var_args
 */
cljs.core.unchecked_multiply_int = (function() {
var cljs$core$unchecked_multiply_int = null;
var cljs$core$unchecked_multiply_int__0 = (function (){
return (1);
});
var cljs$core$unchecked_multiply_int__1 = (function (x){
return x;
});
var cljs$core$unchecked_multiply_int__2 = (function (x,y){
return (x * y);
});
var cljs$core$unchecked_multiply_int__3 = (function() { 
var G__7630__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_multiply_int,(x * y),more);
};
var G__7630 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7631__i = 0, G__7631__a = new Array(arguments.length -  2);
while (G__7631__i < G__7631__a.length) {G__7631__a[G__7631__i] = arguments[G__7631__i + 2]; ++G__7631__i;}
  more = new cljs.core.IndexedSeq(G__7631__a,0);
} 
return G__7630__delegate.call(this,x,y,more);};
G__7630.cljs$lang$maxFixedArity = 2;
G__7630.cljs$lang$applyTo = (function (arglist__7632){
var x = cljs.core.first(arglist__7632);
arglist__7632 = cljs.core.next(arglist__7632);
var y = cljs.core.first(arglist__7632);
var more = cljs.core.rest(arglist__7632);
return G__7630__delegate(x,y,more);
});
G__7630.cljs$core$IFn$_invoke$arity$variadic = G__7630__delegate;
return G__7630;
})()
;
cljs$core$unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return cljs$core$unchecked_multiply_int__0.call(this);
case 1:
return cljs$core$unchecked_multiply_int__1.call(this,x);
case 2:
return cljs$core$unchecked_multiply_int__2.call(this,x,y);
default:
var G__7633 = null;
if (arguments.length > 2) {
var G__7634__i = 0, G__7634__a = new Array(arguments.length -  2);
while (G__7634__i < G__7634__a.length) {G__7634__a[G__7634__i] = arguments[G__7634__i + 2]; ++G__7634__i;}
G__7633 = new cljs.core.IndexedSeq(G__7634__a,0);
}
return cljs$core$unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_multiply_int.cljs$lang$applyTo = cljs$core$unchecked_multiply_int__3.cljs$lang$applyTo;
cljs$core$unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = cljs$core$unchecked_multiply_int__0;
cljs$core$unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_multiply_int__1;
cljs$core$unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_multiply_int__2;
cljs$core$unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function cljs$core$unchecked_negate(x){
return (- x);
});
cljs.core.unchecked_negate_int = (function cljs$core$unchecked_negate_int(x){
return (- x);
});
cljs.core.unchecked_remainder_int = (function cljs$core$unchecked_remainder_int(x,n){
return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(x,n) : cljs.core.mod.call(null,x,n));
});
/**
 * If no ys are supplied, returns the negation of x, else subtracts
 * the ys from x and returns the result.
 * @param {...*} var_args
 */
cljs.core.unchecked_subtract = (function() {
var cljs$core$unchecked_subtract = null;
var cljs$core$unchecked_subtract__1 = (function (x){
return (- x);
});
var cljs$core$unchecked_subtract__2 = (function (x,y){
return (x - y);
});
var cljs$core$unchecked_subtract__3 = (function() { 
var G__7635__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_subtract,(x - y),more);
};
var G__7635 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7636__i = 0, G__7636__a = new Array(arguments.length -  2);
while (G__7636__i < G__7636__a.length) {G__7636__a[G__7636__i] = arguments[G__7636__i + 2]; ++G__7636__i;}
  more = new cljs.core.IndexedSeq(G__7636__a,0);
} 
return G__7635__delegate.call(this,x,y,more);};
G__7635.cljs$lang$maxFixedArity = 2;
G__7635.cljs$lang$applyTo = (function (arglist__7637){
var x = cljs.core.first(arglist__7637);
arglist__7637 = cljs.core.next(arglist__7637);
var y = cljs.core.first(arglist__7637);
var more = cljs.core.rest(arglist__7637);
return G__7635__delegate(x,y,more);
});
G__7635.cljs$core$IFn$_invoke$arity$variadic = G__7635__delegate;
return G__7635;
})()
;
cljs$core$unchecked_subtract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$unchecked_subtract__1.call(this,x);
case 2:
return cljs$core$unchecked_subtract__2.call(this,x,y);
default:
var G__7638 = null;
if (arguments.length > 2) {
var G__7639__i = 0, G__7639__a = new Array(arguments.length -  2);
while (G__7639__i < G__7639__a.length) {G__7639__a[G__7639__i] = arguments[G__7639__i + 2]; ++G__7639__i;}
G__7638 = new cljs.core.IndexedSeq(G__7639__a,0);
}
return cljs$core$unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_subtract.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_subtract.cljs$lang$applyTo = cljs$core$unchecked_subtract__3.cljs$lang$applyTo;
cljs$core$unchecked_subtract.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_subtract__1;
cljs$core$unchecked_subtract.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_subtract__2;
cljs$core$unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_subtract__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_subtract;
})()
;
/**
 * If no ys are supplied, returns the negation of x, else subtracts
 * the ys from x and returns the result.
 * @param {...*} var_args
 */
cljs.core.unchecked_subtract_int = (function() {
var cljs$core$unchecked_subtract_int = null;
var cljs$core$unchecked_subtract_int__1 = (function (x){
return (- x);
});
var cljs$core$unchecked_subtract_int__2 = (function (x,y){
return (x - y);
});
var cljs$core$unchecked_subtract_int__3 = (function() { 
var G__7640__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs$core$unchecked_subtract_int,(x - y),more);
};
var G__7640 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7641__i = 0, G__7641__a = new Array(arguments.length -  2);
while (G__7641__i < G__7641__a.length) {G__7641__a[G__7641__i] = arguments[G__7641__i + 2]; ++G__7641__i;}
  more = new cljs.core.IndexedSeq(G__7641__a,0);
} 
return G__7640__delegate.call(this,x,y,more);};
G__7640.cljs$lang$maxFixedArity = 2;
G__7640.cljs$lang$applyTo = (function (arglist__7642){
var x = cljs.core.first(arglist__7642);
arglist__7642 = cljs.core.next(arglist__7642);
var y = cljs.core.first(arglist__7642);
var more = cljs.core.rest(arglist__7642);
return G__7640__delegate(x,y,more);
});
G__7640.cljs$core$IFn$_invoke$arity$variadic = G__7640__delegate;
return G__7640;
})()
;
cljs$core$unchecked_subtract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$unchecked_subtract_int__1.call(this,x);
case 2:
return cljs$core$unchecked_subtract_int__2.call(this,x,y);
default:
var G__7643 = null;
if (arguments.length > 2) {
var G__7644__i = 0, G__7644__a = new Array(arguments.length -  2);
while (G__7644__i < G__7644__a.length) {G__7644__a[G__7644__i] = arguments[G__7644__i + 2]; ++G__7644__i;}
G__7643 = new cljs.core.IndexedSeq(G__7644__a,0);
}
return cljs$core$unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$unchecked_subtract_int.cljs$lang$maxFixedArity = 2;
cljs$core$unchecked_subtract_int.cljs$lang$applyTo = cljs$core$unchecked_subtract_int__3.cljs$lang$applyTo;
cljs$core$unchecked_subtract_int.cljs$core$IFn$_invoke$arity$1 = cljs$core$unchecked_subtract_int__1;
cljs$core$unchecked_subtract_int.cljs$core$IFn$_invoke$arity$2 = cljs$core$unchecked_subtract_int__2;
cljs$core$unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = cljs$core$unchecked_subtract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$unchecked_subtract_int;
})()
;
cljs.core.fix = (function cljs$core$fix(q){
if((q >= (0))){
return Math.floor(q);
} else {
return Math.ceil(q);
}
});
/**
 * Coerce to int by stripping decimal places.
 */
cljs.core.int$ = (function cljs$core$int(x){
return (x | (0));
});
/**
 * Coerce to int by stripping decimal places.
 */
cljs.core.unchecked_int = (function cljs$core$unchecked_int(x){
return cljs.core.fix(x);
});
/**
 * Coerce to long by stripping decimal places. Identical to `int'.
 */
cljs.core.long$ = (function cljs$core$long(x){
return cljs.core.fix(x);
});
/**
 * Coerce to long by stripping decimal places. Identical to `int'.
 */
cljs.core.unchecked_long = (function cljs$core$unchecked_long(x){
return cljs.core.fix(x);
});
cljs.core.booleans = (function cljs$core$booleans(x){
return x;
});
cljs.core.bytes = (function cljs$core$bytes(x){
return x;
});
cljs.core.chars = (function cljs$core$chars(x){
return x;
});
cljs.core.shorts = (function cljs$core$shorts(x){
return x;
});
cljs.core.ints = (function cljs$core$ints(x){
return x;
});
cljs.core.floats = (function cljs$core$floats(x){
return x;
});
cljs.core.doubles = (function cljs$core$doubles(x){
return x;
});
cljs.core.longs = (function cljs$core$longs(x){
return x;
});
/**
 * Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
 */
cljs.core.js_mod = (function cljs$core$js_mod(n,d){
return (n % d);
});
/**
 * Modulus of num and div. Truncates toward negative infinity.
 */
cljs.core.mod = (function cljs$core$mod(n,d){
return (((n % d) + d) % d);
});
/**
 * quot[ient] of dividing numerator by denominator.
 */
cljs.core.quot = (function cljs$core$quot(n,d){
var rem = (n % d);
return cljs.core.fix(((n - rem) / d));
});
/**
 * remainder of dividing numerator by denominator.
 */
cljs.core.rem = (function cljs$core$rem(n,d){
var q = cljs.core.quot(n,d);
return (n - (d * q));
});
/**
 * Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
 */
cljs.core.rand = (function() {
var cljs$core$rand = null;
var cljs$core$rand__0 = (function (){
return Math.random();
});
var cljs$core$rand__1 = (function (n){
return (n * cljs$core$rand.cljs$core$IFn$_invoke$arity$0());
});
cljs$core$rand = function(n){
switch(arguments.length){
case 0:
return cljs$core$rand__0.call(this);
case 1:
return cljs$core$rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$rand.cljs$core$IFn$_invoke$arity$0 = cljs$core$rand__0;
cljs$core$rand.cljs$core$IFn$_invoke$arity$1 = cljs$core$rand__1;
return cljs$core$rand;
})()
;
/**
 * Returns a random integer between 0 (inclusive) and n (exclusive).
 */
cljs.core.rand_int = (function cljs$core$rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * Bitwise exclusive or
 */
cljs.core.bit_xor = (function cljs$core$bit_xor(x,y){
return (x ^ y);
});
/**
 * Bitwise and
 */
cljs.core.bit_and = (function cljs$core$bit_and(x,y){
return (x & y);
});
/**
 * Bitwise or
 */
cljs.core.bit_or = (function cljs$core$bit_or(x,y){
return (x | y);
});
/**
 * Bitwise and
 */
cljs.core.bit_and_not = (function cljs$core$bit_and_not(x,y){
return (x & ~y);
});
/**
 * Clear bit at index n
 */
cljs.core.bit_clear = (function cljs$core$bit_clear(x,n){
return (x & ~(1 << n));
});
/**
 * Flip bit at index n
 */
cljs.core.bit_flip = (function cljs$core$bit_flip(x,n){
return (x ^ (1 << n));
});
/**
 * Bitwise complement
 */
cljs.core.bit_not = (function cljs$core$bit_not(x){
return (~ x);
});
/**
 * Set bit at index n
 */
cljs.core.bit_set = (function cljs$core$bit_set(x,n){
return (x | (1 << n));
});
/**
 * Test bit at index n
 */
cljs.core.bit_test = (function cljs$core$bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
 * Bitwise shift left
 */
cljs.core.bit_shift_left = (function cljs$core$bit_shift_left(x,n){
return (x << n);
});
/**
 * Bitwise shift right
 */
cljs.core.bit_shift_right = (function cljs$core$bit_shift_right(x,n){
return (x >> n);
});
/**
 * DEPRECATED: Bitwise shift right with zero fill
 */
cljs.core.bit_shift_right_zero_fill = (function cljs$core$bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
 * Bitwise shift right with zero fill
 */
cljs.core.unsigned_bit_shift_right = (function cljs$core$unsigned_bit_shift_right(x,n){
return (x >>> n);
});
/**
 * Counts the number of bits set in n
 */
cljs.core.bit_count = (function cljs$core$bit_count(v){
var v__$1 = (v - ((v >> (1)) & (1431655765)));
var v__$2 = ((v__$1 & (858993459)) + ((v__$1 >> (2)) & (858993459)));
return ((((v__$2 + (v__$2 >> (4))) & (252645135)) * (16843009)) >> (24));
});
/**
 * Returns non-nil if nums all have the equivalent
 * value, otherwise false. Behavior on non nums is
 * undefined.
 * @param {...*} var_args
 */
cljs.core._EQ__EQ_ = (function() {
var cljs$core$_EQ__EQ_ = null;
var cljs$core$_EQ__EQ___1 = (function (x){
return true;
});
var cljs$core$_EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var cljs$core$_EQ__EQ___3 = (function() { 
var G__7647__delegate = function (x,y,more){
while(true){
if(cljs$core$_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
if(cljs.core.next(more)){
var G__7648 = y;
var G__7649 = cljs.core.first(more);
var G__7650 = cljs.core.next(more);
x = G__7648;
y = G__7649;
more = G__7650;
continue;
} else {
return cljs$core$_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
};
var G__7647 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7651__i = 0, G__7651__a = new Array(arguments.length -  2);
while (G__7651__i < G__7651__a.length) {G__7651__a[G__7651__i] = arguments[G__7651__i + 2]; ++G__7651__i;}
  more = new cljs.core.IndexedSeq(G__7651__a,0);
} 
return G__7647__delegate.call(this,x,y,more);};
G__7647.cljs$lang$maxFixedArity = 2;
G__7647.cljs$lang$applyTo = (function (arglist__7652){
var x = cljs.core.first(arglist__7652);
arglist__7652 = cljs.core.next(arglist__7652);
var y = cljs.core.first(arglist__7652);
var more = cljs.core.rest(arglist__7652);
return G__7647__delegate(x,y,more);
});
G__7647.cljs$core$IFn$_invoke$arity$variadic = G__7647__delegate;
return G__7647;
})()
;
cljs$core$_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$_EQ__EQ___1.call(this,x);
case 2:
return cljs$core$_EQ__EQ___2.call(this,x,y);
default:
var G__7653 = null;
if (arguments.length > 2) {
var G__7654__i = 0, G__7654__a = new Array(arguments.length -  2);
while (G__7654__i < G__7654__a.length) {G__7654__a[G__7654__i] = arguments[G__7654__i + 2]; ++G__7654__i;}
G__7653 = new cljs.core.IndexedSeq(G__7654__a,0);
}
return cljs$core$_EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$_EQ__EQ_.cljs$lang$maxFixedArity = 2;
cljs$core$_EQ__EQ_.cljs$lang$applyTo = cljs$core$_EQ__EQ___3.cljs$lang$applyTo;
cljs$core$_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = cljs$core$_EQ__EQ___1;
cljs$core$_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = cljs$core$_EQ__EQ___2;
cljs$core$_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$_EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$_EQ__EQ_;
})()
;
/**
 * Returns true if num is greater than zero, else false
 */
cljs.core.pos_QMARK_ = (function cljs$core$pos_QMARK_(n){
return (n > (0));
});
cljs.core.zero_QMARK_ = (function cljs$core$zero_QMARK_(n){
return (n === (0));
});
/**
 * Returns true if num is less than zero, else false
 */
cljs.core.neg_QMARK_ = (function cljs$core$neg_QMARK_(x){
return (x < (0));
});
/**
 * Returns the nth next of coll, (seq coll) when n is 0.
 */
cljs.core.nthnext = (function cljs$core$nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq(coll);
while(true){
if((xs) && ((n__$1 > (0)))){
var G__7655 = (n__$1 - (1));
var G__7656 = cljs.core.next(xs);
n__$1 = G__7655;
xs = G__7656;
continue;
} else {
return xs;
}
break;
}
});
/**
 * With no args, returns the empty string. With one arg x, returns
 * x.toString().  (str nil) returns the empty string. With more than
 * one arg, returns the concatenation of the str values of the args.
 * @param {...*} var_args
 */
cljs.core.str = (function() {
var cljs$core$str = null;
var cljs$core$str__0 = (function (){
return "";
});
var cljs$core$str__1 = (function (x){
if((x == null)){
return "";
} else {
return ''+x;
}
});
var cljs$core$str__2 = (function() { 
var G__7658__delegate = function (x,ys){
var sb = (new goog.string.StringBuffer(cljs$core$str.cljs$core$IFn$_invoke$arity$1(x)));
var more = ys;
while(true){
if(cljs.core.truth_(more)){
var G__7659 = sb.append(cljs$core$str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__7660 = cljs.core.next(more);
sb = G__7659;
more = G__7660;
continue;
} else {
return sb.toString();
}
break;
}
};
var G__7658 = function (x,var_args){
var ys = null;
if (arguments.length > 1) {
var G__7661__i = 0, G__7661__a = new Array(arguments.length -  1);
while (G__7661__i < G__7661__a.length) {G__7661__a[G__7661__i] = arguments[G__7661__i + 1]; ++G__7661__i;}
  ys = new cljs.core.IndexedSeq(G__7661__a,0);
} 
return G__7658__delegate.call(this,x,ys);};
G__7658.cljs$lang$maxFixedArity = 1;
G__7658.cljs$lang$applyTo = (function (arglist__7662){
var x = cljs.core.first(arglist__7662);
var ys = cljs.core.rest(arglist__7662);
return G__7658__delegate(x,ys);
});
G__7658.cljs$core$IFn$_invoke$arity$variadic = G__7658__delegate;
return G__7658;
})()
;
cljs$core$str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return cljs$core$str__0.call(this);
case 1:
return cljs$core$str__1.call(this,x);
default:
var G__7663 = null;
if (arguments.length > 1) {
var G__7664__i = 0, G__7664__a = new Array(arguments.length -  1);
while (G__7664__i < G__7664__a.length) {G__7664__a[G__7664__i] = arguments[G__7664__i + 1]; ++G__7664__i;}
G__7663 = new cljs.core.IndexedSeq(G__7664__a,0);
}
return cljs$core$str__2.cljs$core$IFn$_invoke$arity$variadic(x, G__7663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$str.cljs$lang$maxFixedArity = 1;
cljs$core$str.cljs$lang$applyTo = cljs$core$str__2.cljs$lang$applyTo;
cljs$core$str.cljs$core$IFn$_invoke$arity$0 = cljs$core$str__0;
cljs$core$str.cljs$core$IFn$_invoke$arity$1 = cljs$core$str__1;
cljs$core$str.cljs$core$IFn$_invoke$arity$variadic = cljs$core$str__2.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$str;
})()
;
/**
 * Returns the substring of s beginning at start inclusive, and ending
 * at end (defaults to length of string), exclusive.
 */
cljs.core.subs = (function() {
var cljs$core$subs = null;
var cljs$core$subs__2 = (function (s,start){
return s.substring(start);
});
var cljs$core$subs__3 = (function (s,start,end){
return s.substring(start,end);
});
cljs$core$subs = function(s,start,end){
switch(arguments.length){
case 2:
return cljs$core$subs__2.call(this,s,start);
case 3:
return cljs$core$subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$subs.cljs$core$IFn$_invoke$arity$2 = cljs$core$subs__2;
cljs$core$subs.cljs$core$IFn$_invoke$arity$3 = cljs$core$subs__3;
return cljs$core$subs;
})()
;

/**
 * Assumes x is sequential. Returns true if x equals y, otherwise
 * returns false.
 */
cljs.core.equiv_sequential = (function cljs$core$equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && (!((cljs.core.count(x) === cljs.core.count(y)))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__7665 = cljs.core.next(xs);
var G__7666 = cljs.core.next(ys);
xs = G__7665;
ys = G__7666;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
cljs.core.hash_coll = (function cljs$core$hash_coll(coll){
if(cljs.core.seq(coll)){
var res = cljs.core.hash(cljs.core.first(coll));
var s = cljs.core.next(coll);
while(true){
if((s == null)){
return res;
} else {
var G__7667 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__7668 = cljs.core.next(s);
res = G__7667;
s = G__7668;
continue;
}
break;
}
} else {
return (0);
}
});

cljs.core.hash_imap = (function cljs$core$hash_imap(m){
var h = (0);
var s = cljs.core.seq(m);
while(true){
if(s){
var e = cljs.core.first(s);
var G__7669 = ((h + (cljs.core.hash((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e))) ^ cljs.core.hash((cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e))))) % (4503599627370496));
var G__7670 = cljs.core.next(s);
h = G__7669;
s = G__7670;
continue;
} else {
return h;
}
break;
}
});
cljs.core.hash_iset = (function cljs$core$hash_iset(s){
var h = (0);
var s__$1 = cljs.core.seq(s);
while(true){
if(s__$1){
var e = cljs.core.first(s__$1);
var G__7671 = ((h + cljs.core.hash(e)) % (4503599627370496));
var G__7672 = cljs.core.next(s__$1);
h = G__7671;
s__$1 = G__7672;
continue;
} else {
return h;
}
break;
}
});


/**
 * Takes a JavaScript object and a map of names to functions and
 * attaches said functions as methods on the object.  Any references to
 * JavaScript's implict this (via the this-as macro) will resolve to the
 * object that the function is attached.
 */
cljs.core.extend_object_BANG_ = (function cljs$core$extend_object_BANG_(obj,fn_map){
var seq__7679_7685 = cljs.core.seq(fn_map);
var chunk__7680_7686 = null;
var count__7681_7687 = (0);
var i__7682_7688 = (0);
while(true){
if((i__7682_7688 < count__7681_7687)){
var vec__7683_7689 = chunk__7680_7686.cljs$core$IIndexed$_nth$arity$2(null,i__7682_7688);
var key_name_7690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7683_7689,(0),null);
var f_7691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7683_7689,(1),null);
var str_name_7692 = (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(key_name_7690) : cljs.core.name.call(null,key_name_7690));
(obj[str_name_7692] = f_7691);

var G__7693 = seq__7679_7685;
var G__7694 = chunk__7680_7686;
var G__7695 = count__7681_7687;
var G__7696 = (i__7682_7688 + (1));
seq__7679_7685 = G__7693;
chunk__7680_7686 = G__7694;
count__7681_7687 = G__7695;
i__7682_7688 = G__7696;
continue;
} else {
var temp__4425__auto___7697 = cljs.core.seq(seq__7679_7685);
if(temp__4425__auto___7697){
var seq__7679_7698__$1 = temp__4425__auto___7697;
if(cljs.core.chunked_seq_QMARK_(seq__7679_7698__$1)){
var c__1341__auto___7699 = (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(seq__7679_7698__$1) : cljs.core.chunk_first.call(null,seq__7679_7698__$1));
var G__7700 = (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(seq__7679_7698__$1) : cljs.core.chunk_rest.call(null,seq__7679_7698__$1));
var G__7701 = c__1341__auto___7699;
var G__7702 = cljs.core.count(c__1341__auto___7699);
var G__7703 = (0);
seq__7679_7685 = G__7700;
chunk__7680_7686 = G__7701;
count__7681_7687 = G__7702;
i__7682_7688 = G__7703;
continue;
} else {
var vec__7684_7704 = cljs.core.first(seq__7679_7698__$1);
var key_name_7705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7684_7704,(0),null);
var f_7706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7684_7704,(1),null);
var str_name_7707 = (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(key_name_7705) : cljs.core.name.call(null,key_name_7705));
(obj[str_name_7707] = f_7706);

var G__7708 = cljs.core.next(seq__7679_7698__$1);
var G__7709 = null;
var G__7710 = (0);
var G__7711 = (0);
seq__7679_7685 = G__7708;
chunk__7680_7686 = G__7709;
count__7681_7687 = G__7710;
i__7682_7688 = G__7711;
continue;
}
} else {
}
}
break;
}

return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.List.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return null;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._rest(coll__$1);
});

cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.count === (1))){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});

cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + (1)),null));
});

cljs.core.List.cljs$lang$type = true;

cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";

cljs.core.List.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/List");
});

cljs.core.__GT_List = (function cljs$core$__GT_List(meta,first,rest,count,__hash){
return (new cljs.core.List(meta,first,rest,count,__hash));
});

(cljs.core.List.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.EmptyList.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.EmptyList(self__.meta));
});

cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
throw (new Error("Can't pop empty list"));
});

cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (0);
});

cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return null;
});

cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.EmptyList(meta__$1));
});

cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(self__.meta,o,null,(1),null));
});

cljs.core.EmptyList.cljs$lang$type = true;

cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";

cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/EmptyList");
});

cljs.core.__GT_EmptyList = (function cljs$core$__GT_EmptyList(meta){
return (new cljs.core.EmptyList(meta));
});

cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
(cljs.core.EmptyList.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.reversible_QMARK_ = (function cljs$core$reversible_QMARK_(coll){
var G__7713 = coll;
if(G__7713){
var bit__1235__auto__ = (G__7713.cljs$lang$protocol_mask$partition0$ & (134217728));
if((bit__1235__auto__) || (G__7713.cljs$core$IReversible$)){
return true;
} else {
if((!G__7713.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__7713);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__7713);
}
});
cljs.core.rseq = (function cljs$core$rseq(coll){
return cljs.core._rseq(coll);
});
/**
 * Returns a seq of the items in coll in reverse order. Not lazy.
 */
cljs.core.reverse = (function cljs$core$reverse(coll){
if(cljs.core.reversible_QMARK_(coll)){
return cljs.core.rseq(coll);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
 * @param {...*} var_args
 */
cljs.core.list = (function() { 
var cljs$core$list__delegate = function (xs){
var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === (0))))?xs.arr:(function (){var arr = [];
var xs__$1 = xs;
while(true){
if(!((xs__$1 == null))){
arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));

var G__7714 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__7714;
continue;
} else {
return arr;
}
break;
}
})());
var i = arr.length;
var r = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__7715 = (i - (1));
var G__7716 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - (1))]));
i = G__7715;
r = G__7716;
continue;
} else {
return r;
}
break;
}
};
var cljs$core$list = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__7717__i = 0, G__7717__a = new Array(arguments.length -  0);
while (G__7717__i < G__7717__a.length) {G__7717__a[G__7717__i] = arguments[G__7717__i + 0]; ++G__7717__i;}
  xs = new cljs.core.IndexedSeq(G__7717__a,0);
} 
return cljs$core$list__delegate.call(this,xs);};
cljs$core$list.cljs$lang$maxFixedArity = 0;
cljs$core$list.cljs$lang$applyTo = (function (arglist__7718){
var xs = cljs.core.seq(arglist__7718);
return cljs$core$list__delegate(xs);
});
cljs$core$list.cljs$core$IFn$_invoke$arity$variadic = cljs$core$list__delegate;
return cljs$core$list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Cons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return null;
} else {
return cljs.core.seq(self__.rest);
}
});

cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.first;
});

cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});

cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});

cljs.core.Cons.cljs$lang$type = true;

cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";

cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Cons");
});

cljs.core.__GT_Cons = (function cljs$core$__GT_Cons(meta,first,rest,__hash){
return (new cljs.core.Cons(meta,first,rest,__hash));
});

(cljs.core.Cons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Returns a new seq where x is the first element and seq is the rest.
 */
cljs.core.cons = (function cljs$core$cons(x,coll){
if((function (){var or__559__auto__ = (coll == null);
if(or__559__auto__){
return or__559__auto__;
} else {
var G__7722 = coll;
if(G__7722){
var bit__1228__auto__ = (G__7722.cljs$lang$protocol_mask$partition0$ & (64));
if((bit__1228__auto__) || (G__7722.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return (new cljs.core.Cons(null,x,coll,null));
} else {
return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function cljs$core$list_QMARK_(x){
var G__7724 = x;
if(G__7724){
var bit__1235__auto__ = (G__7724.cljs$lang$protocol_mask$partition0$ & (33554432));
if((bit__1235__auto__) || (G__7724.cljs$core$IList$)){
return true;
} else {
if((!G__7724.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__7724);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__7724);
}
});
cljs.core.hash_keyword = (function cljs$core$hash_keyword(k){
return ((cljs.core.hash_symbol(k) + (2654435769)) | (0));
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});

cljs.core.Keyword.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if((other instanceof cljs.core.Keyword)){
return (self__.fqn === other.fqn);
} else {
return false;
}
});

cljs.core.Keyword.prototype.call = (function() {
var G__7726 = null;
var G__7726__2 = (function (self__,coll){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__7726__3 = (function (self__,coll,not_found){
var self__ = this;
var self____$1 = this;
var kw = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__7726 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__7726__2.call(this,self__,coll);
case 3:
return G__7726__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7726.cljs$core$IFn$_invoke$arity$2 = G__7726__2;
G__7726.cljs$core$IFn$_invoke$arity$3 = G__7726__3;
return G__7726;
})()
;

cljs.core.Keyword.prototype.apply = (function (self__,args7725){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7725)));
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});

cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
var self__ = this;
var kw = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});

cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__975__auto__ = self__._hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_keyword(this$__$1);
self__._hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ns;
});

cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){
var self__ = this;
var o__$1 = this;
return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});

cljs.core.Keyword.cljs$lang$type = true;

cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";

cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Keyword");
});

cljs.core.__GT_Keyword = (function cljs$core$__GT_Keyword(ns,name,fqn,_hash){
return (new cljs.core.Keyword(ns,name,fqn,_hash));
});

cljs.core.keyword_QMARK_ = (function cljs$core$keyword_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function cljs$core$keyword_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
/**
 * Returns the namespace String of a symbol or keyword, or nil if not present.
 */
cljs.core.namespace = (function cljs$core$namespace(x){
if((function (){var G__7728 = x;
if(G__7728){
var bit__1228__auto__ = (G__7728.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__1228__auto__) || (G__7728.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_namespace$arity$1(null);
} else {
throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
 * Returns a Keyword with the given namespace and name.  Do not use :
 * in the keyword strings, it will be added automatically.
 */
cljs.core.keyword = (function() {
var cljs$core$keyword = null;
var cljs$core$keyword__1 = (function (name){
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if((name instanceof cljs.core.Symbol)){
return (new cljs.core.Keyword(cljs.core.namespace(name),(cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(name) : cljs.core.name.call(null,name)),name.str,null));
} else {
if(typeof name === 'string'){
var parts = name.split("/");
if((parts.length === (2))){
return (new cljs.core.Keyword((parts[(0)]),(parts[(1)]),name,null));
} else {
return (new cljs.core.Keyword(null,(parts[(0)]),name,null));
}
} else {
return null;
}
}
}
});
var cljs$core$keyword__2 = (function (ns,name){
return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
cljs$core$keyword = function(ns,name){
switch(arguments.length){
case 1:
return cljs$core$keyword__1.call(this,ns);
case 2:
return cljs$core$keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$keyword.cljs$core$IFn$_invoke$arity$1 = cljs$core$keyword__1;
cljs$core$keyword.cljs$core$IFn$_invoke$arity$2 = cljs$core$keyword__2;
return cljs$core$keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.LazySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.LazySeq.prototype.sval = (function (){
var self__ = this;
var coll = this;
if((self__.fn == null)){
return self__.s;
} else {
self__.s = (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));

self__.fn = null;

return self__.s;
}
});

cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.next(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if((self__.s == null)){
return null;
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
cljs.core._seq(coll__$1);

if(!((self__.s == null))){
return cljs.core.rest(self__.s);
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
coll__$1.sval();

if((self__.s == null)){
return null;
} else {
var ls = self__.s;
while(true){
if((ls instanceof cljs.core.LazySeq)){
var G__7729 = ls.sval();
ls = G__7729;
continue;
} else {
self__.s = ls;

return cljs.core.seq(self__.s);
}
break;
}
}
});

cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});

cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.LazySeq.cljs$lang$type = true;

cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";

cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/LazySeq");
});

cljs.core.__GT_LazySeq = (function cljs$core$__GT_LazySeq(meta,fn,s,__hash){
return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

(cljs.core.LazySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);

return self__.end = (self__.end + (1));
});

cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,(0),self__.end));
self__.buf = null;

return ret;
});

cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.end;
});

cljs.core.ChunkBuffer.cljs$lang$type = true;

cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";

cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ChunkBuffer");
});

cljs.core.__GT_ChunkBuffer = (function cljs$core$__GT_ChunkBuffer(buf,end){
return (new cljs.core.ChunkBuffer(buf,end));
});

cljs.core.chunk_buffer = (function cljs$core$chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer((new Array(capacity)),(0)));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.arr[(self__.off + i)]);
});

cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
var coll__$1 = this;
if(((i >= (0))) && ((i < (self__.end - self__.off)))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;

cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + (1)));
});

cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
});

cljs.core.ArrayChunk.cljs$lang$type = true;

cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";

cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ArrayChunk");
});

cljs.core.__GT_ArrayChunk = (function cljs$core$__GT_ArrayChunk(arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});

cljs.core.array_chunk = (function() {
var cljs$core$array_chunk = null;
var cljs$core$array_chunk__1 = (function (arr){
return (new cljs.core.ArrayChunk(arr,(0),arr.length));
});
var cljs$core$array_chunk__2 = (function (arr,off){
return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var cljs$core$array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs$core$array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return cljs$core$array_chunk__1.call(this,arr);
case 2:
return cljs$core$array_chunk__2.call(this,arr,off);
case 3:
return cljs$core$array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$array_chunk.cljs$core$IFn$_invoke$arity$1 = cljs$core$array_chunk__1;
cljs$core$array_chunk.cljs$core$IFn$_invoke$arity$2 = cljs$core$array_chunk__2;
cljs$core$array_chunk.cljs$core$IFn$_invoke$arity$3 = cljs$core$array_chunk__3;
return cljs$core$array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedCons.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
var more__$1 = cljs.core._seq(self__.more);
if((more__$1 == null)){
return null;
} else {
return more__$1;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,(0));
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core._count(self__.chunk) > (1))){
return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else {
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
}
});

cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.chunk;
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return cljs.core.List.EMPTY;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});

cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,this$__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.more == null)){
return null;
} else {
return self__.more;
}
});

cljs.core.ChunkedCons.cljs$lang$type = true;

cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";

cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ChunkedCons");
});

cljs.core.__GT_ChunkedCons = (function cljs$core$__GT_ChunkedCons(chunk,more,meta,__hash){
return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});

(cljs.core.ChunkedCons.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.chunk_cons = (function cljs$core$chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === (0))){
return rest;
} else {
return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function cljs$core$chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function cljs$core$chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function cljs$core$chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function cljs$core$chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function cljs$core$chunk_next(s){
if((function (){var G__7731 = s;
if(G__7731){
var bit__1228__auto__ = (G__7731.cljs$lang$protocol_mask$partition1$ & (1024));
if((bit__1228__auto__) || (G__7731.cljs$core$IChunkedNext$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core._chunked_next(s);
} else {
return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
 * Naive impl of to-array as a start.
 */
cljs.core.to_array = (function cljs$core$to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq(s__$1)){
ary.push(cljs.core.first(s__$1));

var G__7732 = cljs.core.next(s__$1);
s__$1 = G__7732;
continue;
} else {
return ary;
}
break;
}
});
/**
 * Returns a (potentially-ragged) 2-dimensional array
 * containing the contents of coll.
 */
cljs.core.to_array_2d = (function cljs$core$to_array_2d(coll){
var ret = (new Array(cljs.core.count(coll)));
var i_7733 = (0);
var xs_7734 = cljs.core.seq(coll);
while(true){
if(xs_7734){
(ret[i_7733] = cljs.core.to_array(cljs.core.first(xs_7734)));

var G__7735 = (i_7733 + (1));
var G__7736 = cljs.core.next(xs_7734);
i_7733 = G__7735;
xs_7734 = G__7736;
continue;
} else {
}
break;
}

return ret;
});
cljs.core.int_array = (function() {
var cljs$core$int_array = null;
var cljs$core$int_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return cljs$core$int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var cljs$core$int_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__7737 = (i + (1));
var G__7738 = cljs.core.next(s__$1);
i = G__7737;
s__$1 = G__7738;
continue;
} else {
return a;
}
break;
}
} else {
var n__1441__auto___7739 = size;
var i_7740 = (0);
while(true){
if((i_7740 < n__1441__auto___7739)){
(a[i_7740] = init_val_or_seq);

var G__7741 = (i_7740 + (1));
i_7740 = G__7741;
continue;
} else {
}
break;
}

return a;
}
});
cljs$core$int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return cljs$core$int_array__1.call(this,size);
case 2:
return cljs$core$int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$int_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$int_array__1;
cljs$core$int_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$int_array__2;
return cljs$core$int_array;
})()
;
cljs.core.long_array = (function() {
var cljs$core$long_array = null;
var cljs$core$long_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return cljs$core$long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var cljs$core$long_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__7742 = (i + (1));
var G__7743 = cljs.core.next(s__$1);
i = G__7742;
s__$1 = G__7743;
continue;
} else {
return a;
}
break;
}
} else {
var n__1441__auto___7744 = size;
var i_7745 = (0);
while(true){
if((i_7745 < n__1441__auto___7744)){
(a[i_7745] = init_val_or_seq);

var G__7746 = (i_7745 + (1));
i_7745 = G__7746;
continue;
} else {
}
break;
}

return a;
}
});
cljs$core$long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return cljs$core$long_array__1.call(this,size);
case 2:
return cljs$core$long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$long_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$long_array__1;
cljs$core$long_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$long_array__2;
return cljs$core$long_array;
})()
;
cljs.core.double_array = (function() {
var cljs$core$double_array = null;
var cljs$core$double_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return cljs$core$double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var cljs$core$double_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__7747 = (i + (1));
var G__7748 = cljs.core.next(s__$1);
i = G__7747;
s__$1 = G__7748;
continue;
} else {
return a;
}
break;
}
} else {
var n__1441__auto___7749 = size;
var i_7750 = (0);
while(true){
if((i_7750 < n__1441__auto___7749)){
(a[i_7750] = init_val_or_seq);

var G__7751 = (i_7750 + (1));
i_7750 = G__7751;
continue;
} else {
}
break;
}

return a;
}
});
cljs$core$double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return cljs$core$double_array__1.call(this,size);
case 2:
return cljs$core$double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$double_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$double_array__1;
cljs$core$double_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$double_array__2;
return cljs$core$double_array;
})()
;
cljs.core.object_array = (function() {
var cljs$core$object_array = null;
var cljs$core$object_array__1 = (function (size_or_seq){
if(typeof size_or_seq === 'number'){
return cljs$core$object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else {
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var cljs$core$object_array__2 = (function (size,init_val_or_seq){
var a = (new Array(size));
if(cljs.core.seq_QMARK_(init_val_or_seq)){
var s = cljs.core.seq(init_val_or_seq);
var i = (0);
var s__$1 = s;
while(true){
if((s__$1) && ((i < size))){
(a[i] = cljs.core.first(s__$1));

var G__7752 = (i + (1));
var G__7753 = cljs.core.next(s__$1);
i = G__7752;
s__$1 = G__7753;
continue;
} else {
return a;
}
break;
}
} else {
var n__1441__auto___7754 = size;
var i_7755 = (0);
while(true){
if((i_7755 < n__1441__auto___7754)){
(a[i_7755] = init_val_or_seq);

var G__7756 = (i_7755 + (1));
i_7755 = G__7756;
continue;
} else {
}
break;
}

return a;
}
});
cljs$core$object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return cljs$core$object_array__1.call(this,size);
case 2:
return cljs$core$object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$object_array.cljs$core$IFn$_invoke$arity$1 = cljs$core$object_array__1;
cljs$core$object_array.cljs$core$IFn$_invoke$arity$2 = cljs$core$object_array__2;
return cljs$core$object_array;
})()
;
cljs.core.bounded_count = (function cljs$core$bounded_count(s,n){
if(cljs.core.counted_QMARK_(s)){
return cljs.core.count(s);
} else {
var s__$1 = s;
var i = n;
var sum = (0);
while(true){
if(((i > (0))) && (cljs.core.seq(s__$1))){
var G__7757 = cljs.core.next(s__$1);
var G__7758 = (i - (1));
var G__7759 = (sum + (1));
s__$1 = G__7757;
i = G__7758;
sum = G__7759;
continue;
} else {
return sum;
}
break;
}
}
});
cljs.core.spread = (function cljs$core$spread(arglist){
if((arglist == null)){
return null;
} else {
if((cljs.core.next(arglist) == null)){
return cljs.core.seq(cljs.core.first(arglist));
} else {
return cljs.core.cons(cljs.core.first(arglist),cljs$core$spread(cljs.core.next(arglist)));

}
}
});
/**
 * Returns a lazy seq representing the concatenation of the elements in the supplied colls.
 * @param {...*} var_args
 */
cljs.core.concat = (function() {
var cljs$core$concat = null;
var cljs$core$concat__0 = (function (){
return (new cljs.core.LazySeq(null,(function (){
return null;
}),null,null));
});
var cljs$core$concat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return x;
}),null,null));
});
var cljs$core$concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.seq(x);
if(s){
if(cljs.core.chunked_seq_QMARK_(s)){
return cljs.core.chunk_cons(cljs.core.chunk_first(s),cljs$core$concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else {
return cljs.core.cons(cljs.core.first(s),cljs$core$concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else {
return y;
}
}),null,null));
});
var cljs$core$concat__3 = (function() { 
var G__7777__delegate = function (x,y,zs){
var cat = (function cljs$core$concat_$_cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,(function (){
var xys__$1 = cljs.core.seq(xys);
if(xys__$1){
if(cljs.core.chunked_seq_QMARK_(xys__$1)){
return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cljs$core$concat_$_cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else {
return cljs.core.cons(cljs.core.first(xys__$1),cljs$core$concat_$_cat(cljs.core.rest(xys__$1),zs__$1));
}
} else {
if(cljs.core.truth_(zs__$1)){
return cljs$core$concat_$_cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(cljs$core$concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__7777 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
var G__7778__i = 0, G__7778__a = new Array(arguments.length -  2);
while (G__7778__i < G__7778__a.length) {G__7778__a[G__7778__i] = arguments[G__7778__i + 2]; ++G__7778__i;}
  zs = new cljs.core.IndexedSeq(G__7778__a,0);
} 
return G__7777__delegate.call(this,x,y,zs);};
G__7777.cljs$lang$maxFixedArity = 2;
G__7777.cljs$lang$applyTo = (function (arglist__7779){
var x = cljs.core.first(arglist__7779);
arglist__7779 = cljs.core.next(arglist__7779);
var y = cljs.core.first(arglist__7779);
var zs = cljs.core.rest(arglist__7779);
return G__7777__delegate(x,y,zs);
});
G__7777.cljs$core$IFn$_invoke$arity$variadic = G__7777__delegate;
return G__7777;
})()
;
cljs$core$concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return cljs$core$concat__0.call(this);
case 1:
return cljs$core$concat__1.call(this,x);
case 2:
return cljs$core$concat__2.call(this,x,y);
default:
var G__7780 = null;
if (arguments.length > 2) {
var G__7781__i = 0, G__7781__a = new Array(arguments.length -  2);
while (G__7781__i < G__7781__a.length) {G__7781__a[G__7781__i] = arguments[G__7781__i + 2]; ++G__7781__i;}
G__7780 = new cljs.core.IndexedSeq(G__7781__a,0);
}
return cljs$core$concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$concat.cljs$lang$maxFixedArity = 2;
cljs$core$concat.cljs$lang$applyTo = cljs$core$concat__3.cljs$lang$applyTo;
cljs$core$concat.cljs$core$IFn$_invoke$arity$0 = cljs$core$concat__0;
cljs$core$concat.cljs$core$IFn$_invoke$arity$1 = cljs$core$concat__1;
cljs$core$concat.cljs$core$IFn$_invoke$arity$2 = cljs$core$concat__2;
cljs$core$concat.cljs$core$IFn$_invoke$arity$variadic = cljs$core$concat__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$concat;
})()
;
/**
 * Creates a new list containing the items prepended to the rest, the
 * last of which will be treated as a sequence.
 * @param {...*} var_args
 */
cljs.core.list_STAR_ = (function() {
var cljs$core$list_STAR_ = null;
var cljs$core$list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var cljs$core$list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var cljs$core$list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var cljs$core$list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var cljs$core$list_STAR___5 = (function() { 
var G__7782__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__7782 = function (a,b,c,d,var_args){
var more = null;
if (arguments.length > 4) {
var G__7783__i = 0, G__7783__a = new Array(arguments.length -  4);
while (G__7783__i < G__7783__a.length) {G__7783__a[G__7783__i] = arguments[G__7783__i + 4]; ++G__7783__i;}
  more = new cljs.core.IndexedSeq(G__7783__a,0);
} 
return G__7782__delegate.call(this,a,b,c,d,more);};
G__7782.cljs$lang$maxFixedArity = 4;
G__7782.cljs$lang$applyTo = (function (arglist__7784){
var a = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var b = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var c = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var d = cljs.core.first(arglist__7784);
var more = cljs.core.rest(arglist__7784);
return G__7782__delegate(a,b,c,d,more);
});
G__7782.cljs$core$IFn$_invoke$arity$variadic = G__7782__delegate;
return G__7782;
})()
;
cljs$core$list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$list_STAR___1.call(this,a);
case 2:
return cljs$core$list_STAR___2.call(this,a,b);
case 3:
return cljs$core$list_STAR___3.call(this,a,b,c);
case 4:
return cljs$core$list_STAR___4.call(this,a,b,c,d);
default:
var G__7785 = null;
if (arguments.length > 4) {
var G__7786__i = 0, G__7786__a = new Array(arguments.length -  4);
while (G__7786__i < G__7786__a.length) {G__7786__a[G__7786__i] = arguments[G__7786__i + 4]; ++G__7786__i;}
G__7785 = new cljs.core.IndexedSeq(G__7786__a,0);
}
return cljs$core$list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, G__7785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$list_STAR_.cljs$lang$maxFixedArity = 4;
cljs$core$list_STAR_.cljs$lang$applyTo = cljs$core$list_STAR___5.cljs$lang$applyTo;
cljs$core$list_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$list_STAR___1;
cljs$core$list_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$list_STAR___2;
cljs$core$list_STAR_.cljs$core$IFn$_invoke$arity$3 = cljs$core$list_STAR___3;
cljs$core$list_STAR_.cljs$core$IFn$_invoke$arity$4 = cljs$core$list_STAR___4;
cljs$core$list_STAR_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$list_STAR_;
})()
;
/**
 * Returns a new, transient version of the collection, in constant time.
 */
cljs.core.transient$ = (function cljs$core$transient(coll){
return cljs.core._as_transient(coll);
});
/**
 * Returns a new, persistent version of the transient collection, in
 * constant time. The transient collection cannot be used after this
 * call, any such use will throw an exception.
 */
cljs.core.persistent_BANG_ = (function cljs$core$persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
/**
 * Adds x to the transient collection, and return coll. The 'addition'
 * may happen at different 'places' depending on the concrete type.
 * @param {...*} var_args
 */
cljs.core.conj_BANG_ = (function() {
var cljs$core$conj_BANG_ = null;
var cljs$core$conj_BANG___0 = (function (){
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});
var cljs$core$conj_BANG___1 = (function (coll){
return coll;
});
var cljs$core$conj_BANG___2 = (function (tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
var cljs$core$conj_BANG___3 = (function() { 
var G__7787__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._conj_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__7788 = ntcoll;
var G__7789 = cljs.core.first(vals);
var G__7790 = cljs.core.next(vals);
tcoll = G__7788;
val = G__7789;
vals = G__7790;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__7787 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
var G__7791__i = 0, G__7791__a = new Array(arguments.length -  2);
while (G__7791__i < G__7791__a.length) {G__7791__a[G__7791__i] = arguments[G__7791__i + 2]; ++G__7791__i;}
  vals = new cljs.core.IndexedSeq(G__7791__a,0);
} 
return G__7787__delegate.call(this,tcoll,val,vals);};
G__7787.cljs$lang$maxFixedArity = 2;
G__7787.cljs$lang$applyTo = (function (arglist__7792){
var tcoll = cljs.core.first(arglist__7792);
arglist__7792 = cljs.core.next(arglist__7792);
var val = cljs.core.first(arglist__7792);
var vals = cljs.core.rest(arglist__7792);
return G__7787__delegate(tcoll,val,vals);
});
G__7787.cljs$core$IFn$_invoke$arity$variadic = G__7787__delegate;
return G__7787;
})()
;
cljs$core$conj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 0:
return cljs$core$conj_BANG___0.call(this);
case 1:
return cljs$core$conj_BANG___1.call(this,tcoll);
case 2:
return cljs$core$conj_BANG___2.call(this,tcoll,val);
default:
var G__7793 = null;
if (arguments.length > 2) {
var G__7794__i = 0, G__7794__a = new Array(arguments.length -  2);
while (G__7794__i < G__7794__a.length) {G__7794__a[G__7794__i] = arguments[G__7794__i + 2]; ++G__7794__i;}
G__7793 = new cljs.core.IndexedSeq(G__7794__a,0);
}
return cljs$core$conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, G__7793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$conj_BANG_.cljs$lang$maxFixedArity = 2;
cljs$core$conj_BANG_.cljs$lang$applyTo = cljs$core$conj_BANG___3.cljs$lang$applyTo;
cljs$core$conj_BANG_.cljs$core$IFn$_invoke$arity$0 = cljs$core$conj_BANG___0;
cljs$core$conj_BANG_.cljs$core$IFn$_invoke$arity$1 = cljs$core$conj_BANG___1;
cljs$core$conj_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$conj_BANG___2;
cljs$core$conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$conj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$conj_BANG_;
})()
;
/**
 * When applied to a transient map, adds mapping of key(s) to
 * val(s). When applied to a transient vector, sets the val at index.
 * Note - index must be <= (count vector). Returns coll.
 * @param {...*} var_args
 */
cljs.core.assoc_BANG_ = (function() {
var cljs$core$assoc_BANG_ = null;
var cljs$core$assoc_BANG___3 = (function (tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
var cljs$core$assoc_BANG___4 = (function() { 
var G__7795__delegate = function (tcoll,key,val,kvs){
while(true){
var ntcoll = cljs.core._assoc_BANG_(tcoll,key,val);
if(cljs.core.truth_(kvs)){
var G__7796 = ntcoll;
var G__7797 = cljs.core.first(kvs);
var G__7798 = cljs.core.second(kvs);
var G__7799 = cljs.core.nnext(kvs);
tcoll = G__7796;
key = G__7797;
val = G__7798;
kvs = G__7799;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__7795 = function (tcoll,key,val,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__7800__i = 0, G__7800__a = new Array(arguments.length -  3);
while (G__7800__i < G__7800__a.length) {G__7800__a[G__7800__i] = arguments[G__7800__i + 3]; ++G__7800__i;}
  kvs = new cljs.core.IndexedSeq(G__7800__a,0);
} 
return G__7795__delegate.call(this,tcoll,key,val,kvs);};
G__7795.cljs$lang$maxFixedArity = 3;
G__7795.cljs$lang$applyTo = (function (arglist__7801){
var tcoll = cljs.core.first(arglist__7801);
arglist__7801 = cljs.core.next(arglist__7801);
var key = cljs.core.first(arglist__7801);
arglist__7801 = cljs.core.next(arglist__7801);
var val = cljs.core.first(arglist__7801);
var kvs = cljs.core.rest(arglist__7801);
return G__7795__delegate(tcoll,key,val,kvs);
});
G__7795.cljs$core$IFn$_invoke$arity$variadic = G__7795__delegate;
return G__7795;
})()
;
cljs$core$assoc_BANG_ = function(tcoll,key,val,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return cljs$core$assoc_BANG___3.call(this,tcoll,key,val);
default:
var G__7802 = null;
if (arguments.length > 3) {
var G__7803__i = 0, G__7803__a = new Array(arguments.length -  3);
while (G__7803__i < G__7803__a.length) {G__7803__a[G__7803__i] = arguments[G__7803__i + 3]; ++G__7803__i;}
G__7802 = new cljs.core.IndexedSeq(G__7803__a,0);
}
return cljs$core$assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic(tcoll,key,val, G__7802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$assoc_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$assoc_BANG_.cljs$lang$applyTo = cljs$core$assoc_BANG___4.cljs$lang$applyTo;
cljs$core$assoc_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$assoc_BANG___3;
cljs$core$assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$assoc_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$assoc_BANG_;
})()
;
/**
 * Returns a transient map that doesn't contain a mapping for key(s).
 * @param {...*} var_args
 */
cljs.core.dissoc_BANG_ = (function() {
var cljs$core$dissoc_BANG_ = null;
var cljs$core$dissoc_BANG___2 = (function (tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
var cljs$core$dissoc_BANG___3 = (function() { 
var G__7804__delegate = function (tcoll,key,ks){
while(true){
var ntcoll = cljs.core._dissoc_BANG_(tcoll,key);
if(cljs.core.truth_(ks)){
var G__7805 = ntcoll;
var G__7806 = cljs.core.first(ks);
var G__7807 = cljs.core.next(ks);
tcoll = G__7805;
key = G__7806;
ks = G__7807;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__7804 = function (tcoll,key,var_args){
var ks = null;
if (arguments.length > 2) {
var G__7808__i = 0, G__7808__a = new Array(arguments.length -  2);
while (G__7808__i < G__7808__a.length) {G__7808__a[G__7808__i] = arguments[G__7808__i + 2]; ++G__7808__i;}
  ks = new cljs.core.IndexedSeq(G__7808__a,0);
} 
return G__7804__delegate.call(this,tcoll,key,ks);};
G__7804.cljs$lang$maxFixedArity = 2;
G__7804.cljs$lang$applyTo = (function (arglist__7809){
var tcoll = cljs.core.first(arglist__7809);
arglist__7809 = cljs.core.next(arglist__7809);
var key = cljs.core.first(arglist__7809);
var ks = cljs.core.rest(arglist__7809);
return G__7804__delegate(tcoll,key,ks);
});
G__7804.cljs$core$IFn$_invoke$arity$variadic = G__7804__delegate;
return G__7804;
})()
;
cljs$core$dissoc_BANG_ = function(tcoll,key,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return cljs$core$dissoc_BANG___2.call(this,tcoll,key);
default:
var G__7810 = null;
if (arguments.length > 2) {
var G__7811__i = 0, G__7811__a = new Array(arguments.length -  2);
while (G__7811__i < G__7811__a.length) {G__7811__a[G__7811__i] = arguments[G__7811__i + 2]; ++G__7811__i;}
G__7810 = new cljs.core.IndexedSeq(G__7811__a,0);
}
return cljs$core$dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,key, G__7810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$dissoc_BANG_.cljs$lang$maxFixedArity = 2;
cljs$core$dissoc_BANG_.cljs$lang$applyTo = cljs$core$dissoc_BANG___3.cljs$lang$applyTo;
cljs$core$dissoc_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$dissoc_BANG___2;
cljs$core$dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$dissoc_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$dissoc_BANG_;
})()
;
/**
 * Removes the last item from a transient vector. If
 * the collection is empty, throws an exception. Returns coll
 */
cljs.core.pop_BANG_ = (function cljs$core$pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
/**
 * disj[oin]. Returns a transient set of the same (hashed/sorted) type, that
 * does not contain key(s).
 * @param {...*} var_args
 */
cljs.core.disj_BANG_ = (function() {
var cljs$core$disj_BANG_ = null;
var cljs$core$disj_BANG___2 = (function (tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
var cljs$core$disj_BANG___3 = (function() { 
var G__7812__delegate = function (tcoll,val,vals){
while(true){
var ntcoll = cljs.core._disjoin_BANG_(tcoll,val);
if(cljs.core.truth_(vals)){
var G__7813 = ntcoll;
var G__7814 = cljs.core.first(vals);
var G__7815 = cljs.core.next(vals);
tcoll = G__7813;
val = G__7814;
vals = G__7815;
continue;
} else {
return ntcoll;
}
break;
}
};
var G__7812 = function (tcoll,val,var_args){
var vals = null;
if (arguments.length > 2) {
var G__7816__i = 0, G__7816__a = new Array(arguments.length -  2);
while (G__7816__i < G__7816__a.length) {G__7816__a[G__7816__i] = arguments[G__7816__i + 2]; ++G__7816__i;}
  vals = new cljs.core.IndexedSeq(G__7816__a,0);
} 
return G__7812__delegate.call(this,tcoll,val,vals);};
G__7812.cljs$lang$maxFixedArity = 2;
G__7812.cljs$lang$applyTo = (function (arglist__7817){
var tcoll = cljs.core.first(arglist__7817);
arglist__7817 = cljs.core.next(arglist__7817);
var val = cljs.core.first(arglist__7817);
var vals = cljs.core.rest(arglist__7817);
return G__7812__delegate(tcoll,val,vals);
});
G__7812.cljs$core$IFn$_invoke$arity$variadic = G__7812__delegate;
return G__7812;
})()
;
cljs$core$disj_BANG_ = function(tcoll,val,var_args){
var vals = var_args;
switch(arguments.length){
case 2:
return cljs$core$disj_BANG___2.call(this,tcoll,val);
default:
var G__7818 = null;
if (arguments.length > 2) {
var G__7819__i = 0, G__7819__a = new Array(arguments.length -  2);
while (G__7819__i < G__7819__a.length) {G__7819__a[G__7819__i] = arguments[G__7819__i + 2]; ++G__7819__i;}
G__7818 = new cljs.core.IndexedSeq(G__7819__a,0);
}
return cljs$core$disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic(tcoll,val, G__7818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$disj_BANG_.cljs$lang$maxFixedArity = 2;
cljs$core$disj_BANG_.cljs$lang$applyTo = cljs$core$disj_BANG___3.cljs$lang$applyTo;
cljs$core$disj_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$disj_BANG___2;
cljs$core$disj_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$disj_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$disj_BANG_;
})()
;

cljs.core.apply_to = (function cljs$core$apply_to(f,argc,args){
var args__$1 = cljs.core.seq(args);
if((argc === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var a1485 = cljs.core._first(args__$1);
var args__$2 = cljs.core._rest(args__$1);
if((argc === (1))){
if(f.cljs$core$IFn$_invoke$arity$1){
return f.cljs$core$IFn$_invoke$arity$1(a1485);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a1485) : f.call(null,a1485));
}
} else {
var b1486 = cljs.core._first(args__$2);
var args__$3 = cljs.core._rest(args__$2);
if((argc === (2))){
if(f.cljs$core$IFn$_invoke$arity$2){
return f.cljs$core$IFn$_invoke$arity$2(a1485,b1486);
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a1485,b1486) : f.call(null,a1485,b1486));
}
} else {
var c1487 = cljs.core._first(args__$3);
var args__$4 = cljs.core._rest(args__$3);
if((argc === (3))){
if(f.cljs$core$IFn$_invoke$arity$3){
return f.cljs$core$IFn$_invoke$arity$3(a1485,b1486,c1487);
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(a1485,b1486,c1487) : f.call(null,a1485,b1486,c1487));
}
} else {
var d1488 = cljs.core._first(args__$4);
var args__$5 = cljs.core._rest(args__$4);
if((argc === (4))){
if(f.cljs$core$IFn$_invoke$arity$4){
return f.cljs$core$IFn$_invoke$arity$4(a1485,b1486,c1487,d1488);
} else {
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(a1485,b1486,c1487,d1488) : f.call(null,a1485,b1486,c1487,d1488));
}
} else {
var e1489 = cljs.core._first(args__$5);
var args__$6 = cljs.core._rest(args__$5);
if((argc === (5))){
if(f.cljs$core$IFn$_invoke$arity$5){
return f.cljs$core$IFn$_invoke$arity$5(a1485,b1486,c1487,d1488,e1489);
} else {
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a1485,b1486,c1487,d1488,e1489) : f.call(null,a1485,b1486,c1487,d1488,e1489));
}
} else {
var f1490 = cljs.core._first(args__$6);
var args__$7 = cljs.core._rest(args__$6);
if((argc === (6))){
if(f.cljs$core$IFn$_invoke$arity$6){
return f.cljs$core$IFn$_invoke$arity$6(a1485,b1486,c1487,d1488,e1489,f1490);
} else {
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(a1485,b1486,c1487,d1488,e1489,f1490) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490));
}
} else {
var g1491 = cljs.core._first(args__$7);
var args__$8 = cljs.core._rest(args__$7);
if((argc === (7))){
if(f.cljs$core$IFn$_invoke$arity$7){
return f.cljs$core$IFn$_invoke$arity$7(a1485,b1486,c1487,d1488,e1489,f1490,g1491);
} else {
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(a1485,b1486,c1487,d1488,e1489,f1490,g1491) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491));
}
} else {
var h1492 = cljs.core._first(args__$8);
var args__$9 = cljs.core._rest(args__$8);
if((argc === (8))){
if(f.cljs$core$IFn$_invoke$arity$8){
return f.cljs$core$IFn$_invoke$arity$8(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492);
} else {
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492));
}
} else {
var i1493 = cljs.core._first(args__$9);
var args__$10 = cljs.core._rest(args__$9);
if((argc === (9))){
if(f.cljs$core$IFn$_invoke$arity$9){
return f.cljs$core$IFn$_invoke$arity$9(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493);
} else {
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493));
}
} else {
var j1494 = cljs.core._first(args__$10);
var args__$11 = cljs.core._rest(args__$10);
if((argc === (10))){
if(f.cljs$core$IFn$_invoke$arity$10){
return f.cljs$core$IFn$_invoke$arity$10(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494);
} else {
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494));
}
} else {
var k1495 = cljs.core._first(args__$11);
var args__$12 = cljs.core._rest(args__$11);
if((argc === (11))){
if(f.cljs$core$IFn$_invoke$arity$11){
return f.cljs$core$IFn$_invoke$arity$11(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495);
} else {
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495));
}
} else {
var l1496 = cljs.core._first(args__$12);
var args__$13 = cljs.core._rest(args__$12);
if((argc === (12))){
if(f.cljs$core$IFn$_invoke$arity$12){
return f.cljs$core$IFn$_invoke$arity$12(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496);
} else {
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496));
}
} else {
var m1497 = cljs.core._first(args__$13);
var args__$14 = cljs.core._rest(args__$13);
if((argc === (13))){
if(f.cljs$core$IFn$_invoke$arity$13){
return f.cljs$core$IFn$_invoke$arity$13(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497);
} else {
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497));
}
} else {
var n1498 = cljs.core._first(args__$14);
var args__$15 = cljs.core._rest(args__$14);
if((argc === (14))){
if(f.cljs$core$IFn$_invoke$arity$14){
return f.cljs$core$IFn$_invoke$arity$14(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498);
} else {
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498));
}
} else {
var o1499 = cljs.core._first(args__$15);
var args__$16 = cljs.core._rest(args__$15);
if((argc === (15))){
if(f.cljs$core$IFn$_invoke$arity$15){
return f.cljs$core$IFn$_invoke$arity$15(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499);
} else {
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499));
}
} else {
var p1500 = cljs.core._first(args__$16);
var args__$17 = cljs.core._rest(args__$16);
if((argc === (16))){
if(f.cljs$core$IFn$_invoke$arity$16){
return f.cljs$core$IFn$_invoke$arity$16(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500);
} else {
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500));
}
} else {
var q1501 = cljs.core._first(args__$17);
var args__$18 = cljs.core._rest(args__$17);
if((argc === (17))){
if(f.cljs$core$IFn$_invoke$arity$17){
return f.cljs$core$IFn$_invoke$arity$17(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501);
} else {
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501));
}
} else {
var r1502 = cljs.core._first(args__$18);
var args__$19 = cljs.core._rest(args__$18);
if((argc === (18))){
if(f.cljs$core$IFn$_invoke$arity$18){
return f.cljs$core$IFn$_invoke$arity$18(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502);
} else {
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502));
}
} else {
var s1503 = cljs.core._first(args__$19);
var args__$20 = cljs.core._rest(args__$19);
if((argc === (19))){
if(f.cljs$core$IFn$_invoke$arity$19){
return f.cljs$core$IFn$_invoke$arity$19(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503);
} else {
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503));
}
} else {
var t1504 = cljs.core._first(args__$20);
var args__$21 = cljs.core._rest(args__$20);
if((argc === (20))){
if(f.cljs$core$IFn$_invoke$arity$20){
return f.cljs$core$IFn$_invoke$arity$20(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503,t1504);
} else {
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503,t1504) : f.call(null,a1485,b1486,c1487,d1488,e1489,f1490,g1491,h1492,i1493,j1494,k1495,l1496,m1497,n1498,o1499,p1500,q1501,r1502,s1503,t1504));
}
} else {
throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

/**
 * Applies fn f to the argument list formed by prepending intervening arguments to args.
 * First cut.  Not lazy.  Needs to use emitted toApply.
 * @param {...*} var_args
 */
cljs.core.apply = (function() {
var cljs$core$apply = null;
var cljs$core$apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(args,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,args);
} else {
return f.cljs$lang$applyTo(args);
}
} else {
return f.apply(f,cljs.core.to_array(args));
}
});
var cljs$core$apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var cljs$core$apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var cljs$core$apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
});
var cljs$core$apply__6 = (function() { 
var G__7820__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo){
var bc = cljs.core.bounded_count(arglist,(fixed_arity + (1)));
if((bc <= fixed_arity)){
return cljs.core.apply_to(f,bc,arglist);
} else {
return f.cljs$lang$applyTo(arglist);
}
} else {
return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__7820 = function (f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 5) {
var G__7821__i = 0, G__7821__a = new Array(arguments.length -  5);
while (G__7821__i < G__7821__a.length) {G__7821__a[G__7821__i] = arguments[G__7821__i + 5]; ++G__7821__i;}
  args = new cljs.core.IndexedSeq(G__7821__a,0);
} 
return G__7820__delegate.call(this,f,a,b,c,d,args);};
G__7820.cljs$lang$maxFixedArity = 5;
G__7820.cljs$lang$applyTo = (function (arglist__7822){
var f = cljs.core.first(arglist__7822);
arglist__7822 = cljs.core.next(arglist__7822);
var a = cljs.core.first(arglist__7822);
arglist__7822 = cljs.core.next(arglist__7822);
var b = cljs.core.first(arglist__7822);
arglist__7822 = cljs.core.next(arglist__7822);
var c = cljs.core.first(arglist__7822);
arglist__7822 = cljs.core.next(arglist__7822);
var d = cljs.core.first(arglist__7822);
var args = cljs.core.rest(arglist__7822);
return G__7820__delegate(f,a,b,c,d,args);
});
G__7820.cljs$core$IFn$_invoke$arity$variadic = G__7820__delegate;
return G__7820;
})()
;
cljs$core$apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return cljs$core$apply__2.call(this,f,a);
case 3:
return cljs$core$apply__3.call(this,f,a,b);
case 4:
return cljs$core$apply__4.call(this,f,a,b,c);
case 5:
return cljs$core$apply__5.call(this,f,a,b,c,d);
default:
var G__7823 = null;
if (arguments.length > 5) {
var G__7824__i = 0, G__7824__a = new Array(arguments.length -  5);
while (G__7824__i < G__7824__a.length) {G__7824__a[G__7824__i] = arguments[G__7824__i + 5]; ++G__7824__i;}
G__7823 = new cljs.core.IndexedSeq(G__7824__a,0);
}
return cljs$core$apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, G__7823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$apply.cljs$lang$maxFixedArity = 5;
cljs$core$apply.cljs$lang$applyTo = cljs$core$apply__6.cljs$lang$applyTo;
cljs$core$apply.cljs$core$IFn$_invoke$arity$2 = cljs$core$apply__2;
cljs$core$apply.cljs$core$IFn$_invoke$arity$3 = cljs$core$apply__3;
cljs$core$apply.cljs$core$IFn$_invoke$arity$4 = cljs$core$apply__4;
cljs$core$apply.cljs$core$IFn$_invoke$arity$5 = cljs$core$apply__5;
cljs$core$apply.cljs$core$IFn$_invoke$arity$variadic = cljs$core$apply__6.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$apply;
})()
;
/**
 * Returns an object of the same type and value as obj, with
 * (apply f (meta obj) args) as its metadata.
 * @param {...*} var_args
 */
cljs.core.vary_meta = (function() {
var cljs$core$vary_meta = null;
var cljs$core$vary_meta__2 = (function (obj,f){
return cljs.core.with_meta(obj,(function (){var G__7840 = cljs.core.meta(obj);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7840) : f.call(null,G__7840));
})());
});
var cljs$core$vary_meta__3 = (function (obj,f,a){
return cljs.core.with_meta(obj,(function (){var G__7841 = cljs.core.meta(obj);
var G__7842 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__7841,G__7842) : f.call(null,G__7841,G__7842));
})());
});
var cljs$core$vary_meta__4 = (function (obj,f,a,b){
return cljs.core.with_meta(obj,(function (){var G__7843 = cljs.core.meta(obj);
var G__7844 = a;
var G__7845 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__7843,G__7844,G__7845) : f.call(null,G__7843,G__7844,G__7845));
})());
});
var cljs$core$vary_meta__5 = (function (obj,f,a,b,c){
return cljs.core.with_meta(obj,(function (){var G__7846 = cljs.core.meta(obj);
var G__7847 = a;
var G__7848 = b;
var G__7849 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__7846,G__7847,G__7848,G__7849) : f.call(null,G__7846,G__7847,G__7848,G__7849));
})());
});
var cljs$core$vary_meta__6 = (function (obj,f,a,b,c,d){
return cljs.core.with_meta(obj,(function (){var G__7850 = cljs.core.meta(obj);
var G__7851 = a;
var G__7852 = b;
var G__7853 = c;
var G__7854 = d;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__7850,G__7851,G__7852,G__7853,G__7854) : f.call(null,G__7850,G__7851,G__7852,G__7853,G__7854));
})());
});
var cljs$core$vary_meta__7 = (function() { 
var G__7855__delegate = function (obj,f,a,b,c,d,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__7855 = function (obj,f,a,b,c,d,var_args){
var args = null;
if (arguments.length > 6) {
var G__7856__i = 0, G__7856__a = new Array(arguments.length -  6);
while (G__7856__i < G__7856__a.length) {G__7856__a[G__7856__i] = arguments[G__7856__i + 6]; ++G__7856__i;}
  args = new cljs.core.IndexedSeq(G__7856__a,0);
} 
return G__7855__delegate.call(this,obj,f,a,b,c,d,args);};
G__7855.cljs$lang$maxFixedArity = 6;
G__7855.cljs$lang$applyTo = (function (arglist__7857){
var obj = cljs.core.first(arglist__7857);
arglist__7857 = cljs.core.next(arglist__7857);
var f = cljs.core.first(arglist__7857);
arglist__7857 = cljs.core.next(arglist__7857);
var a = cljs.core.first(arglist__7857);
arglist__7857 = cljs.core.next(arglist__7857);
var b = cljs.core.first(arglist__7857);
arglist__7857 = cljs.core.next(arglist__7857);
var c = cljs.core.first(arglist__7857);
arglist__7857 = cljs.core.next(arglist__7857);
var d = cljs.core.first(arglist__7857);
var args = cljs.core.rest(arglist__7857);
return G__7855__delegate(obj,f,a,b,c,d,args);
});
G__7855.cljs$core$IFn$_invoke$arity$variadic = G__7855__delegate;
return G__7855;
})()
;
cljs$core$vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return cljs$core$vary_meta__2.call(this,obj,f);
case 3:
return cljs$core$vary_meta__3.call(this,obj,f,a);
case 4:
return cljs$core$vary_meta__4.call(this,obj,f,a,b);
case 5:
return cljs$core$vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return cljs$core$vary_meta__6.call(this,obj,f,a,b,c,d);
default:
var G__7858 = null;
if (arguments.length > 6) {
var G__7859__i = 0, G__7859__a = new Array(arguments.length -  6);
while (G__7859__i < G__7859__a.length) {G__7859__a[G__7859__i] = arguments[G__7859__i + 6]; ++G__7859__i;}
G__7858 = new cljs.core.IndexedSeq(G__7859__a,0);
}
return cljs$core$vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, G__7858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$vary_meta.cljs$lang$maxFixedArity = 6;
cljs$core$vary_meta.cljs$lang$applyTo = cljs$core$vary_meta__7.cljs$lang$applyTo;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$2 = cljs$core$vary_meta__2;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$3 = cljs$core$vary_meta__3;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$4 = cljs$core$vary_meta__4;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$5 = cljs$core$vary_meta__5;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$6 = cljs$core$vary_meta__6;
cljs$core$vary_meta.cljs$core$IFn$_invoke$arity$variadic = cljs$core$vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$vary_meta;
})()
;
/**
 * Same as (not (= obj1 obj2))
 * @param {...*} var_args
 */
cljs.core.not_EQ_ = (function() {
var cljs$core$not_EQ_ = null;
var cljs$core$not_EQ___1 = (function (x){
return false;
});
var cljs$core$not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var cljs$core$not_EQ___3 = (function() { 
var G__7860__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__7860 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__7861__i = 0, G__7861__a = new Array(arguments.length -  2);
while (G__7861__i < G__7861__a.length) {G__7861__a[G__7861__i] = arguments[G__7861__i + 2]; ++G__7861__i;}
  more = new cljs.core.IndexedSeq(G__7861__a,0);
} 
return G__7860__delegate.call(this,x,y,more);};
G__7860.cljs$lang$maxFixedArity = 2;
G__7860.cljs$lang$applyTo = (function (arglist__7862){
var x = cljs.core.first(arglist__7862);
arglist__7862 = cljs.core.next(arglist__7862);
var y = cljs.core.first(arglist__7862);
var more = cljs.core.rest(arglist__7862);
return G__7860__delegate(x,y,more);
});
G__7860.cljs$core$IFn$_invoke$arity$variadic = G__7860__delegate;
return G__7860;
})()
;
cljs$core$not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$not_EQ___1.call(this,x);
case 2:
return cljs$core$not_EQ___2.call(this,x,y);
default:
var G__7863 = null;
if (arguments.length > 2) {
var G__7864__i = 0, G__7864__a = new Array(arguments.length -  2);
while (G__7864__i < G__7864__a.length) {G__7864__a[G__7864__i] = arguments[G__7864__i + 2]; ++G__7864__i;}
G__7863 = new cljs.core.IndexedSeq(G__7864__a,0);
}
return cljs$core$not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$not_EQ_.cljs$lang$maxFixedArity = 2;
cljs$core$not_EQ_.cljs$lang$applyTo = cljs$core$not_EQ___3.cljs$lang$applyTo;
cljs$core$not_EQ_.cljs$core$IFn$_invoke$arity$1 = cljs$core$not_EQ___1;
cljs$core$not_EQ_.cljs$core$IFn$_invoke$arity$2 = cljs$core$not_EQ___2;
cljs$core$not_EQ_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$not_EQ_;
})()
;
/**
 * If coll is empty, returns nil, else coll
 */
cljs.core.not_empty = (function cljs$core$not_empty(coll){
if(cljs.core.seq(coll)){
return coll;
} else {
return null;
}
});
cljs.core.nil_iter = (function cljs$core$nil_iter(){
if(typeof cljs.core.t7868 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.t7868 = (function (nil_iter,meta7869){
this.nil_iter = nil_iter;
this.meta7869 = meta7869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.t7868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7870,meta7869__$1){
var self__ = this;
var _7870__$1 = this;
return (new cljs.core.t7868(self__.nil_iter,meta7869__$1));
});

cljs.core.t7868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7870){
var self__ = this;
var _7870__$1 = this;
return self__.meta7869;
});

cljs.core.t7868.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return false;
});

cljs.core.t7868.prototype.next = (function (){
var self__ = this;
var _ = this;
return (new Error("No such element"));
});

cljs.core.t7868.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.t7868.cljs$lang$type = true;

cljs.core.t7868.cljs$lang$ctorStr = "cljs.core/t7868";

cljs.core.t7868.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/t7868");
});

cljs.core.__GT_t7868 = (function cljs$core$nil_iter_$___GT_t7868(nil_iter__$1,meta7869){
return (new cljs.core.t7868(nil_iter__$1,meta7869));
});

}

return (new cljs.core.t7868(cljs$core$nil_iter,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$file,"/Users/fyquah/dev/gmapscljs-example/release/out/cljs/core.cljs",cljs.core.cst$kw$line,2982,cljs.core.cst$kw$column,3,cljs.core.cst$kw$end_DASH_line,2986,cljs.core.cst$kw$end_DASH_column,54], null)));
});

/**
* @constructor
*/
cljs.core.StringIter = (function (s,i){
this.s = s;
this.i = i;
})
cljs.core.StringIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.s.length);
});

cljs.core.StringIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.s.charAt(self__.i);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.StringIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.StringIter.cljs$lang$type = true;

cljs.core.StringIter.cljs$lang$ctorStr = "cljs.core/StringIter";

cljs.core.StringIter.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/StringIter");
});

cljs.core.__GT_StringIter = (function cljs$core$__GT_StringIter(s,i){
return (new cljs.core.StringIter(s,i));
});

cljs.core.string_iter = (function cljs$core$string_iter(x){
return (new cljs.core.StringIter(x,(0)));
});

/**
* @constructor
*/
cljs.core.ArrayIter = (function (arr,i){
this.arr = arr;
this.i = i;
})
cljs.core.ArrayIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.arr.length);
});

cljs.core.ArrayIter.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = (self__.arr[self__.i]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.ArrayIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.ArrayIter.cljs$lang$type = true;

cljs.core.ArrayIter.cljs$lang$ctorStr = "cljs.core/ArrayIter";

cljs.core.ArrayIter.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ArrayIter");
});

cljs.core.__GT_ArrayIter = (function cljs$core$__GT_ArrayIter(arr,i){
return (new cljs.core.ArrayIter(arr,i));
});

cljs.core.array_iter = (function cljs$core$array_iter(x){
return (new cljs.core.ArrayIter(x,(0)));
});
cljs.core.INIT = {};
cljs.core.START = {};

/**
* @constructor
*/
cljs.core.SeqIter = (function (_seq,_next){
this._seq = _seq;
this._next = _next;
})
cljs.core.SeqIter.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__._seq === cljs.core.INIT)){
self__._seq = cljs.core.START;

self__._next = cljs.core.seq(self__._next);
} else {
if((self__._seq === self__._next)){
self__._next = cljs.core.next(self__._seq);
} else {
}
}

return !((self__._next == null));
});

cljs.core.SeqIter.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.not(this$.hasNext())){
throw (new Error("No such element"));
} else {
self__._seq = self__._next;

return cljs.core.first(self__._next);
}
});

cljs.core.SeqIter.prototype.remove = (function (){
var self__ = this;
var _ = this;
return (new Error("Unsupported operation"));
});

cljs.core.SeqIter.cljs$lang$type = true;

cljs.core.SeqIter.cljs$lang$ctorStr = "cljs.core/SeqIter";

cljs.core.SeqIter.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/SeqIter");
});

cljs.core.__GT_SeqIter = (function cljs$core$__GT_SeqIter(_seq,_next){
return (new cljs.core.SeqIter(_seq,_next));
});

cljs.core.seq_iter = (function cljs$core$seq_iter(coll){
return (new cljs.core.SeqIter(cljs.core.INIT,coll));
});
cljs.core.iter = (function cljs$core$iter(coll){
if((coll == null)){
return cljs.core.nil_iter();
} else {
if(typeof coll === 'string'){
return cljs.core.string_iter(coll);
} else {
if(coll instanceof Array){
return cljs.core.array_iter(coll);
} else {
if(cljs.core.truth_(cljs.core.iterable_QMARK_(coll))){
return cljs.core._iterator(coll);
} else {
if(cljs.core.seqable_QMARK_(coll)){
return cljs.core.seq_iter(coll);
} else {
throw (new Error([cljs.core.str("Cannot create iterator from "),cljs.core.str(coll)].join('')));

}
}
}
}
}
});
cljs.core.lazy_transformer = (function cljs$core$lazy_transformer(stepper){
return (new cljs.core.LazyTransformer(stepper,null,null,null));
});

/**
* @constructor
*/
cljs.core.Stepper = (function (xform,iter){
this.xform = xform;
this.iter = iter;
})
cljs.core.Stepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__547__auto__ = !((lt.stepper == null));
if(and__547__auto__){
return self__.iter.hasNext();
} else {
return and__547__auto__;
}
})())){
if(cljs.core.reduced_QMARK_((function (){var G__7871 = lt;
var G__7872 = self__.iter.next();
return (self__.xform.cljs$core$IFn$_invoke$arity$2 ? self__.xform.cljs$core$IFn$_invoke$arity$2(G__7871,G__7872) : self__.xform.call(null,G__7871,G__7872));
})())){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(lt) : self__.xform.call(null,lt));
}
});

cljs.core.Stepper.cljs$lang$type = true;

cljs.core.Stepper.cljs$lang$ctorStr = "cljs.core/Stepper";

cljs.core.Stepper.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Stepper");
});

cljs.core.__GT_Stepper = (function cljs$core$__GT_Stepper(xform,iter){
return (new cljs.core.Stepper(xform,iter));
});

cljs.core.stepper = (function cljs$core$stepper(xform,iter){
var stepfn = (function() {
var cljs$core$stepper_$_stepfn = null;
var cljs$core$stepper_$_stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return result;
});
var cljs$core$stepper_$_stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
cljs$core$stepper_$_stepfn = function(result,input){
switch(arguments.length){
case 1:
return cljs$core$stepper_$_stepfn__1.call(this,result);
case 2:
return cljs$core$stepper_$_stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$stepper_$_stepfn.cljs$core$IFn$_invoke$arity$1 = cljs$core$stepper_$_stepfn__1;
cljs$core$stepper_$_stepfn.cljs$core$IFn$_invoke$arity$2 = cljs$core$stepper_$_stepfn__2;
return cljs$core$stepper_$_stepfn;
})()
;
return (new cljs.core.Stepper((xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(stepfn) : xform.call(null,stepfn)),iter));
});

/**
* @constructor
*/
cljs.core.MultiStepper = (function (xform,iters,nexts){
this.xform = xform;
this.iters = iters;
this.nexts = nexts;
})
cljs.core.MultiStepper.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
var iters__$1 = cljs.core.seq(self__.iters);
while(true){
if(!((iters__$1 == null))){
var iter = cljs.core.first(iters__$1);
if(cljs.core.not(iter.hasNext())){
return false;
} else {
var G__7873 = cljs.core.next(iters__$1);
iters__$1 = G__7873;
continue;
}
} else {
return true;
}
break;
}
});

cljs.core.MultiStepper.prototype.next = (function (){
var self__ = this;
var _ = this;
var n__1441__auto___7874 = self__.iters.length;
var i_7875 = (0);
while(true){
if((i_7875 < n__1441__auto___7874)){
(self__.nexts[i_7875] = (self__.iters[i_7875]).next());

var G__7876 = (i_7875 + (1));
i_7875 = G__7876;
continue;
} else {
}
break;
}

return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(self__.nexts,(0));
});

cljs.core.MultiStepper.prototype.step = (function (lt){
var self__ = this;
var this$ = this;
while(true){
if(cljs.core.truth_((function (){var and__547__auto__ = !((lt.stepper == null));
if(and__547__auto__){
return this$.hasNext();
} else {
return and__547__auto__;
}
})())){
if(cljs.core.reduced_QMARK_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.xform,cljs.core.cons(lt,this$.next())))){
if((lt.rest == null)){
} else {
lt.rest.stepper = null;
}
} else {
continue;
}
} else {
}
break;
}

if((lt.stepper == null)){
return null;
} else {
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(lt) : self__.xform.call(null,lt));
}
});

cljs.core.MultiStepper.cljs$lang$type = true;

cljs.core.MultiStepper.cljs$lang$ctorStr = "cljs.core/MultiStepper";

cljs.core.MultiStepper.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/MultiStepper");
});

cljs.core.__GT_MultiStepper = (function cljs$core$__GT_MultiStepper(xform,iters,nexts){
return (new cljs.core.MultiStepper(xform,iters,nexts));
});

cljs.core.multi_stepper = (function() {
var cljs$core$multi_stepper = null;
var cljs$core$multi_stepper__2 = (function (xform,iters){
return cljs$core$multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length)));
});
var cljs$core$multi_stepper__3 = (function (xform,iters,nexts){
var stepfn = (function() {
var cljs$core$multi_stepper_$_stepfn = null;
var cljs$core$multi_stepper_$_stepfn__1 = (function (result){
var lt = ((cljs.core.reduced_QMARK_(result))?cljs.core.deref(result):result);
lt.stepper = null;

return lt;
});
var cljs$core$multi_stepper_$_stepfn__2 = (function (result,input){
var lt = result;
lt.first = input;

lt.rest = cljs.core.lazy_transformer(lt.stepper);

lt.stepper = null;

return lt.rest;
});
cljs$core$multi_stepper_$_stepfn = function(result,input){
switch(arguments.length){
case 1:
return cljs$core$multi_stepper_$_stepfn__1.call(this,result);
case 2:
return cljs$core$multi_stepper_$_stepfn__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$multi_stepper_$_stepfn.cljs$core$IFn$_invoke$arity$1 = cljs$core$multi_stepper_$_stepfn__1;
cljs$core$multi_stepper_$_stepfn.cljs$core$IFn$_invoke$arity$2 = cljs$core$multi_stepper_$_stepfn__2;
return cljs$core$multi_stepper_$_stepfn;
})()
;
return (new cljs.core.MultiStepper((xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(stepfn) : xform.call(null,stepfn)),iters,nexts));
});
cljs$core$multi_stepper = function(xform,iters,nexts){
switch(arguments.length){
case 2:
return cljs$core$multi_stepper__2.call(this,xform,iters);
case 3:
return cljs$core$multi_stepper__3.call(this,xform,iters,nexts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$multi_stepper.cljs$core$IFn$_invoke$arity$2 = cljs$core$multi_stepper__2;
cljs$core$multi_stepper.cljs$core$IFn$_invoke$arity$3 = cljs$core$multi_stepper__3;
return cljs$core$multi_stepper;
})()
;

/**
* @constructor
*/
cljs.core.LazyTransformer = (function (stepper,first,rest,meta){
this.stepper = stepper;
this.first = first;
this.rest = rest;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 31719628;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.LazyTransformer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazyTransformer(self__.stepper,self__.first,self__.rest,new_meta));
});

cljs.core.LazyTransformer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(o,cljs.core._seq(this$__$1));
});

cljs.core.LazyTransformer.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
});

cljs.core.LazyTransformer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var s = cljs.core._seq(this$__$1);
if(!((s == null))){
return cljs.core.equiv_sequential(this$__$1,other);
} else {
return (cljs.core.sequential_QMARK_(other)) && ((cljs.core.seq(other) == null));
}
});

cljs.core.LazyTransformer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_ordered_coll(this$__$1);
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
self__.stepper.step(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return this$__$1;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return self__.first;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return cljs.core.List.EMPTY;
} else {
return self__.rest;
}
});

cljs.core.LazyTransformer.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.stepper == null)){
} else {
cljs.core._seq(this$__$1);
}

if((self__.rest == null)){
return null;
} else {
return cljs.core._seq(self__.rest);
}
});

cljs.core.LazyTransformer.cljs$lang$type = true;

cljs.core.LazyTransformer.cljs$lang$ctorStr = "cljs.core/LazyTransformer";

cljs.core.LazyTransformer.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/LazyTransformer");
});

cljs.core.__GT_LazyTransformer = (function cljs$core$__GT_LazyTransformer(stepper,first,rest,meta){
return (new cljs.core.LazyTransformer(stepper,first,rest,meta));
});

(cljs.core.LazyTransformer.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.LazyTransformer.create = (function (xform,coll){
return (new cljs.core.LazyTransformer(cljs.core.stepper(xform,cljs.core.iter(coll)),null,null,null));
});
cljs.core.LazyTransformer.createMulti = (function (xform,colls){
var iters = [];
var seq__7880_7884 = cljs.core.seq(colls);
var chunk__7881_7885 = null;
var count__7882_7886 = (0);
var i__7883_7887 = (0);
while(true){
if((i__7883_7887 < count__7882_7886)){
var coll_7888 = chunk__7881_7885.cljs$core$IIndexed$_nth$arity$2(null,i__7883_7887);
iters.push(cljs.core.iter(coll_7888));

var G__7889 = seq__7880_7884;
var G__7890 = chunk__7881_7885;
var G__7891 = count__7882_7886;
var G__7892 = (i__7883_7887 + (1));
seq__7880_7884 = G__7889;
chunk__7881_7885 = G__7890;
count__7882_7886 = G__7891;
i__7883_7887 = G__7892;
continue;
} else {
var temp__4425__auto___7893 = cljs.core.seq(seq__7880_7884);
if(temp__4425__auto___7893){
var seq__7880_7894__$1 = temp__4425__auto___7893;
if(cljs.core.chunked_seq_QMARK_(seq__7880_7894__$1)){
var c__1341__auto___7895 = cljs.core.chunk_first(seq__7880_7894__$1);
var G__7896 = cljs.core.chunk_rest(seq__7880_7894__$1);
var G__7897 = c__1341__auto___7895;
var G__7898 = cljs.core.count(c__1341__auto___7895);
var G__7899 = (0);
seq__7880_7884 = G__7896;
chunk__7881_7885 = G__7897;
count__7882_7886 = G__7898;
i__7883_7887 = G__7899;
continue;
} else {
var coll_7900 = cljs.core.first(seq__7880_7894__$1);
iters.push(cljs.core.iter(coll_7900));

var G__7901 = cljs.core.next(seq__7880_7894__$1);
var G__7902 = null;
var G__7903 = (0);
var G__7904 = (0);
seq__7880_7884 = G__7901;
chunk__7881_7885 = G__7902;
count__7882_7886 = G__7903;
i__7883_7887 = G__7904;
continue;
}
} else {
}
}
break;
}

return (new cljs.core.LazyTransformer(cljs.core.multi_stepper.cljs$core$IFn$_invoke$arity$3(xform,iters,(new Array(iters.length))),null,null,null));
});
/**
 * Coerces coll to a (possibly empty) sequence, if it is not already
 * one. Will not force a lazy seq. (sequence nil) yields (), When a
 * transducer is supplied, returns a lazy sequence of applications of
 * the transform to the items in coll(s), i.e. to the set of first
 * items of each coll, followed by the set of second
 * items in each coll, until any one of the colls is exhausted.  Any
 * remaining items in other colls are ignored. The transform should accept
 * number-of-colls arguments
 * @param {...*} var_args
 */
cljs.core.sequence = (function() {
var cljs$core$sequence = null;
var cljs$core$sequence__1 = (function (coll){
if(cljs.core.seq_QMARK_(coll)){
return coll;
} else {
var or__559__auto__ = cljs.core.seq(coll);
if(or__559__auto__){
return or__559__auto__;
} else {
return cljs.core.List.EMPTY;
}
}
});
var cljs$core$sequence__2 = (function (xform,coll){
return cljs.core.LazyTransformer.create(xform,coll);
});
var cljs$core$sequence__3 = (function() { 
var G__7905__delegate = function (xform,coll,colls){
return cljs.core.LazyTransformer.createMulti(xform,cljs.core.to_array(cljs.core.cons(coll,colls)));
};
var G__7905 = function (xform,coll,var_args){
var colls = null;
if (arguments.length > 2) {
var G__7906__i = 0, G__7906__a = new Array(arguments.length -  2);
while (G__7906__i < G__7906__a.length) {G__7906__a[G__7906__i] = arguments[G__7906__i + 2]; ++G__7906__i;}
  colls = new cljs.core.IndexedSeq(G__7906__a,0);
} 
return G__7905__delegate.call(this,xform,coll,colls);};
G__7905.cljs$lang$maxFixedArity = 2;
G__7905.cljs$lang$applyTo = (function (arglist__7907){
var xform = cljs.core.first(arglist__7907);
arglist__7907 = cljs.core.next(arglist__7907);
var coll = cljs.core.first(arglist__7907);
var colls = cljs.core.rest(arglist__7907);
return G__7905__delegate(xform,coll,colls);
});
G__7905.cljs$core$IFn$_invoke$arity$variadic = G__7905__delegate;
return G__7905;
})()
;
cljs$core$sequence = function(xform,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return cljs$core$sequence__1.call(this,xform);
case 2:
return cljs$core$sequence__2.call(this,xform,coll);
default:
var G__7908 = null;
if (arguments.length > 2) {
var G__7909__i = 0, G__7909__a = new Array(arguments.length -  2);
while (G__7909__i < G__7909__a.length) {G__7909__a[G__7909__i] = arguments[G__7909__i + 2]; ++G__7909__i;}
G__7908 = new cljs.core.IndexedSeq(G__7909__a,0);
}
return cljs$core$sequence__3.cljs$core$IFn$_invoke$arity$variadic(xform,coll, G__7908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$sequence.cljs$lang$maxFixedArity = 2;
cljs$core$sequence.cljs$lang$applyTo = cljs$core$sequence__3.cljs$lang$applyTo;
cljs$core$sequence.cljs$core$IFn$_invoke$arity$1 = cljs$core$sequence__1;
cljs$core$sequence.cljs$core$IFn$_invoke$arity$2 = cljs$core$sequence__2;
cljs$core$sequence.cljs$core$IFn$_invoke$arity$variadic = cljs$core$sequence__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$sequence;
})()
;
/**
 * Returns true if (pred x) is logical true for every x in coll, else
 * false.
 */
cljs.core.every_QMARK_ = (function cljs$core$every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null)){
return true;
} else {
if(cljs.core.truth_((function (){var G__7911 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__7911) : pred.call(null,G__7911));
})())){
var G__7912 = pred;
var G__7913 = cljs.core.next(coll);
pred = G__7912;
coll = G__7913;
continue;
} else {
return false;

}
}
break;
}
});
/**
 * Returns false if (pred x) is logical true for every x in
 * coll, else true.
 */
cljs.core.not_every_QMARK_ = (function cljs$core$not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
 * Returns the first logical true value of (pred x) for any x in coll,
 * else nil.  One common idiom is to use a set as pred, for example
 * this will return :fred if :fred is in the sequence, otherwise nil:
 * (some #{:fred} coll)
 */
cljs.core.some = (function cljs$core$some(pred,coll){
while(true){
if(cljs.core.seq(coll)){
var or__559__auto__ = (function (){var G__7917 = cljs.core.first(coll);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__7917) : pred.call(null,G__7917));
})();
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var G__7918 = pred;
var G__7919 = cljs.core.next(coll);
pred = G__7918;
coll = G__7919;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns false if (pred x) is logical true for any x in coll,
 * else true.
 */
cljs.core.not_any_QMARK_ = (function cljs$core$not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
 * Returns true if n is even, throws an exception if n is not an integer
 */
cljs.core.even_QMARK_ = (function cljs$core$even_QMARK_(n){
if(cljs.core.integer_QMARK_(n)){
return ((n & (1)) === (0));
} else {
throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
 * Returns true if n is odd, throws an exception if n is not an integer
 */
cljs.core.odd_QMARK_ = (function cljs$core$odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
/**
 * Takes a fn f and returns a fn that takes the same arguments as f,
 * has the same effects, if any, and returns the opposite truth value.
 */
cljs.core.complement = (function cljs$core$complement(f){
return (function() {
var G__7920 = null;
var G__7920__0 = (function (){
return cljs.core.not((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
var G__7920__1 = (function (x){
return cljs.core.not((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
});
var G__7920__2 = (function (x,y){
return cljs.core.not((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)));
});
var G__7920__3 = (function() { 
var G__7921__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__7921 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
var G__7922__i = 0, G__7922__a = new Array(arguments.length -  2);
while (G__7922__i < G__7922__a.length) {G__7922__a[G__7922__i] = arguments[G__7922__i + 2]; ++G__7922__i;}
  zs = new cljs.core.IndexedSeq(G__7922__a,0);
} 
return G__7921__delegate.call(this,x,y,zs);};
G__7921.cljs$lang$maxFixedArity = 2;
G__7921.cljs$lang$applyTo = (function (arglist__7923){
var x = cljs.core.first(arglist__7923);
arglist__7923 = cljs.core.next(arglist__7923);
var y = cljs.core.first(arglist__7923);
var zs = cljs.core.rest(arglist__7923);
return G__7921__delegate(x,y,zs);
});
G__7921.cljs$core$IFn$_invoke$arity$variadic = G__7921__delegate;
return G__7921;
})()
;
G__7920 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7920__0.call(this);
case 1:
return G__7920__1.call(this,x);
case 2:
return G__7920__2.call(this,x,y);
default:
var G__7924 = null;
if (arguments.length > 2) {
var G__7925__i = 0, G__7925__a = new Array(arguments.length -  2);
while (G__7925__i < G__7925__a.length) {G__7925__a[G__7925__i] = arguments[G__7925__i + 2]; ++G__7925__i;}
G__7924 = new cljs.core.IndexedSeq(G__7925__a,0);
}
return G__7920__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__7924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7920.cljs$lang$maxFixedArity = 2;
G__7920.cljs$lang$applyTo = G__7920__3.cljs$lang$applyTo;
G__7920.cljs$core$IFn$_invoke$arity$0 = G__7920__0;
G__7920.cljs$core$IFn$_invoke$arity$1 = G__7920__1;
G__7920.cljs$core$IFn$_invoke$arity$2 = G__7920__2;
G__7920.cljs$core$IFn$_invoke$arity$variadic = G__7920__3.cljs$core$IFn$_invoke$arity$variadic;
return G__7920;
})()
});
/**
 * Returns a function that takes any number of arguments and returns x.
 */
cljs.core.constantly = (function cljs$core$constantly(x){
return (function() { 
var G__7926__delegate = function (args){
return x;
};
var G__7926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7927__i = 0, G__7927__a = new Array(arguments.length -  0);
while (G__7927__i < G__7927__a.length) {G__7927__a[G__7927__i] = arguments[G__7927__i + 0]; ++G__7927__i;}
  args = new cljs.core.IndexedSeq(G__7927__a,0);
} 
return G__7926__delegate.call(this,args);};
G__7926.cljs$lang$maxFixedArity = 0;
G__7926.cljs$lang$applyTo = (function (arglist__7928){
var args = cljs.core.seq(arglist__7928);
return G__7926__delegate(args);
});
G__7926.cljs$core$IFn$_invoke$arity$variadic = G__7926__delegate;
return G__7926;
})()
;
});
/**
 * Takes a set of functions and returns a fn that is the composition
 * of those fns.  The returned fn takes a variable number of args,
 * applies the rightmost of fns to the args, the next
 * fn (right-to-left) to the result, etc.
 * @param {...*} var_args
 */
cljs.core.comp = (function() {
var cljs$core$comp = null;
var cljs$core$comp__0 = (function (){
return cljs.core.identity;
});
var cljs$core$comp__1 = (function (f){
return f;
});
var cljs$core$comp__2 = (function (f,g){
return (function() {
var G__7969 = null;
var G__7969__0 = (function (){
var G__7949 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7949) : f.call(null,G__7949));
});
var G__7969__1 = (function (x){
var G__7950 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7950) : f.call(null,G__7950));
});
var G__7969__2 = (function (x,y){
var G__7951 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7951) : f.call(null,G__7951));
});
var G__7969__3 = (function (x,y,z){
var G__7952 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7952) : f.call(null,G__7952));
});
var G__7969__4 = (function() { 
var G__7970__delegate = function (x,y,z,args){
var G__7953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7953) : f.call(null,G__7953));
};
var G__7970 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__7971__i = 0, G__7971__a = new Array(arguments.length -  3);
while (G__7971__i < G__7971__a.length) {G__7971__a[G__7971__i] = arguments[G__7971__i + 3]; ++G__7971__i;}
  args = new cljs.core.IndexedSeq(G__7971__a,0);
} 
return G__7970__delegate.call(this,x,y,z,args);};
G__7970.cljs$lang$maxFixedArity = 3;
G__7970.cljs$lang$applyTo = (function (arglist__7972){
var x = cljs.core.first(arglist__7972);
arglist__7972 = cljs.core.next(arglist__7972);
var y = cljs.core.first(arglist__7972);
arglist__7972 = cljs.core.next(arglist__7972);
var z = cljs.core.first(arglist__7972);
var args = cljs.core.rest(arglist__7972);
return G__7970__delegate(x,y,z,args);
});
G__7970.cljs$core$IFn$_invoke$arity$variadic = G__7970__delegate;
return G__7970;
})()
;
G__7969 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7969__0.call(this);
case 1:
return G__7969__1.call(this,x);
case 2:
return G__7969__2.call(this,x,y);
case 3:
return G__7969__3.call(this,x,y,z);
default:
var G__7973 = null;
if (arguments.length > 3) {
var G__7974__i = 0, G__7974__a = new Array(arguments.length -  3);
while (G__7974__i < G__7974__a.length) {G__7974__a[G__7974__i] = arguments[G__7974__i + 3]; ++G__7974__i;}
G__7973 = new cljs.core.IndexedSeq(G__7974__a,0);
}
return G__7969__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__7973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7969.cljs$lang$maxFixedArity = 3;
G__7969.cljs$lang$applyTo = G__7969__4.cljs$lang$applyTo;
G__7969.cljs$core$IFn$_invoke$arity$0 = G__7969__0;
G__7969.cljs$core$IFn$_invoke$arity$1 = G__7969__1;
G__7969.cljs$core$IFn$_invoke$arity$2 = G__7969__2;
G__7969.cljs$core$IFn$_invoke$arity$3 = G__7969__3;
G__7969.cljs$core$IFn$_invoke$arity$variadic = G__7969__4.cljs$core$IFn$_invoke$arity$variadic;
return G__7969;
})()
});
var cljs$core$comp__3 = (function (f,g,h){
return (function() {
var G__7975 = null;
var G__7975__0 = (function (){
var G__7955 = (function (){var G__7956 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__7956) : g.call(null,G__7956));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7955) : f.call(null,G__7955));
});
var G__7975__1 = (function (x){
var G__7958 = (function (){var G__7959 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__7959) : g.call(null,G__7959));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7958) : f.call(null,G__7958));
});
var G__7975__2 = (function (x,y){
var G__7961 = (function (){var G__7962 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__7962) : g.call(null,G__7962));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7961) : f.call(null,G__7961));
});
var G__7975__3 = (function (x,y,z){
var G__7964 = (function (){var G__7965 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z));
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__7965) : g.call(null,G__7965));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7964) : f.call(null,G__7964));
});
var G__7975__4 = (function() { 
var G__7976__delegate = function (x,y,z,args){
var G__7967 = (function (){var G__7968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args);
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__7968) : g.call(null,G__7968));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__7967) : f.call(null,G__7967));
};
var G__7976 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__7977__i = 0, G__7977__a = new Array(arguments.length -  3);
while (G__7977__i < G__7977__a.length) {G__7977__a[G__7977__i] = arguments[G__7977__i + 3]; ++G__7977__i;}
  args = new cljs.core.IndexedSeq(G__7977__a,0);
} 
return G__7976__delegate.call(this,x,y,z,args);};
G__7976.cljs$lang$maxFixedArity = 3;
G__7976.cljs$lang$applyTo = (function (arglist__7978){
var x = cljs.core.first(arglist__7978);
arglist__7978 = cljs.core.next(arglist__7978);
var y = cljs.core.first(arglist__7978);
arglist__7978 = cljs.core.next(arglist__7978);
var z = cljs.core.first(arglist__7978);
var args = cljs.core.rest(arglist__7978);
return G__7976__delegate(x,y,z,args);
});
G__7976.cljs$core$IFn$_invoke$arity$variadic = G__7976__delegate;
return G__7976;
})()
;
G__7975 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7975__0.call(this);
case 1:
return G__7975__1.call(this,x);
case 2:
return G__7975__2.call(this,x,y);
case 3:
return G__7975__3.call(this,x,y,z);
default:
var G__7979 = null;
if (arguments.length > 3) {
var G__7980__i = 0, G__7980__a = new Array(arguments.length -  3);
while (G__7980__i < G__7980__a.length) {G__7980__a[G__7980__i] = arguments[G__7980__i + 3]; ++G__7980__i;}
G__7979 = new cljs.core.IndexedSeq(G__7980__a,0);
}
return G__7975__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__7979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7975.cljs$lang$maxFixedArity = 3;
G__7975.cljs$lang$applyTo = G__7975__4.cljs$lang$applyTo;
G__7975.cljs$core$IFn$_invoke$arity$0 = G__7975__0;
G__7975.cljs$core$IFn$_invoke$arity$1 = G__7975__1;
G__7975.cljs$core$IFn$_invoke$arity$2 = G__7975__2;
G__7975.cljs$core$IFn$_invoke$arity$3 = G__7975__3;
G__7975.cljs$core$IFn$_invoke$arity$variadic = G__7975__4.cljs$core$IFn$_invoke$arity$variadic;
return G__7975;
})()
});
var cljs$core$comp__4 = (function() { 
var G__7981__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));
return ((function (fs__$1){
return (function() { 
var G__7982__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);
var fs__$2 = cljs.core.next(fs__$1);
while(true){
if(fs__$2){
var G__7983 = cljs.core.first(fs__$2).call(null,ret);
var G__7984 = cljs.core.next(fs__$2);
ret = G__7983;
fs__$2 = G__7984;
continue;
} else {
return ret;
}
break;
}
};
var G__7982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7985__i = 0, G__7985__a = new Array(arguments.length -  0);
while (G__7985__i < G__7985__a.length) {G__7985__a[G__7985__i] = arguments[G__7985__i + 0]; ++G__7985__i;}
  args = new cljs.core.IndexedSeq(G__7985__a,0);
} 
return G__7982__delegate.call(this,args);};
G__7982.cljs$lang$maxFixedArity = 0;
G__7982.cljs$lang$applyTo = (function (arglist__7986){
var args = cljs.core.seq(arglist__7986);
return G__7982__delegate(args);
});
G__7982.cljs$core$IFn$_invoke$arity$variadic = G__7982__delegate;
return G__7982;
})()
;
;})(fs__$1))
};
var G__7981 = function (f1,f2,f3,var_args){
var fs = null;
if (arguments.length > 3) {
var G__7987__i = 0, G__7987__a = new Array(arguments.length -  3);
while (G__7987__i < G__7987__a.length) {G__7987__a[G__7987__i] = arguments[G__7987__i + 3]; ++G__7987__i;}
  fs = new cljs.core.IndexedSeq(G__7987__a,0);
} 
return G__7981__delegate.call(this,f1,f2,f3,fs);};
G__7981.cljs$lang$maxFixedArity = 3;
G__7981.cljs$lang$applyTo = (function (arglist__7988){
var f1 = cljs.core.first(arglist__7988);
arglist__7988 = cljs.core.next(arglist__7988);
var f2 = cljs.core.first(arglist__7988);
arglist__7988 = cljs.core.next(arglist__7988);
var f3 = cljs.core.first(arglist__7988);
var fs = cljs.core.rest(arglist__7988);
return G__7981__delegate(f1,f2,f3,fs);
});
G__7981.cljs$core$IFn$_invoke$arity$variadic = G__7981__delegate;
return G__7981;
})()
;
cljs$core$comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return cljs$core$comp__0.call(this);
case 1:
return cljs$core$comp__1.call(this,f1);
case 2:
return cljs$core$comp__2.call(this,f1,f2);
case 3:
return cljs$core$comp__3.call(this,f1,f2,f3);
default:
var G__7989 = null;
if (arguments.length > 3) {
var G__7990__i = 0, G__7990__a = new Array(arguments.length -  3);
while (G__7990__i < G__7990__a.length) {G__7990__a[G__7990__i] = arguments[G__7990__i + 3]; ++G__7990__i;}
G__7989 = new cljs.core.IndexedSeq(G__7990__a,0);
}
return cljs$core$comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, G__7989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$comp.cljs$lang$maxFixedArity = 3;
cljs$core$comp.cljs$lang$applyTo = cljs$core$comp__4.cljs$lang$applyTo;
cljs$core$comp.cljs$core$IFn$_invoke$arity$0 = cljs$core$comp__0;
cljs$core$comp.cljs$core$IFn$_invoke$arity$1 = cljs$core$comp__1;
cljs$core$comp.cljs$core$IFn$_invoke$arity$2 = cljs$core$comp__2;
cljs$core$comp.cljs$core$IFn$_invoke$arity$3 = cljs$core$comp__3;
cljs$core$comp.cljs$core$IFn$_invoke$arity$variadic = cljs$core$comp__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$comp;
})()
;
/**
 * Takes a function f and fewer than the normal arguments to f, and
 * returns a fn that takes a variable number of additional args. When
 * called, the returned function calls f with args + additional args.
 * @param {...*} var_args
 */
cljs.core.partial = (function() {
var cljs$core$partial = null;
var cljs$core$partial__1 = (function (f){
return f;
});
var cljs$core$partial__2 = (function (f,arg1){
return (function() { 
var G__7991__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__7991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7992__i = 0, G__7992__a = new Array(arguments.length -  0);
while (G__7992__i < G__7992__a.length) {G__7992__a[G__7992__i] = arguments[G__7992__i + 0]; ++G__7992__i;}
  args = new cljs.core.IndexedSeq(G__7992__a,0);
} 
return G__7991__delegate.call(this,args);};
G__7991.cljs$lang$maxFixedArity = 0;
G__7991.cljs$lang$applyTo = (function (arglist__7993){
var args = cljs.core.seq(arglist__7993);
return G__7991__delegate(args);
});
G__7991.cljs$core$IFn$_invoke$arity$variadic = G__7991__delegate;
return G__7991;
})()
;
});
var cljs$core$partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7994__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__7994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7995__i = 0, G__7995__a = new Array(arguments.length -  0);
while (G__7995__i < G__7995__a.length) {G__7995__a[G__7995__i] = arguments[G__7995__i + 0]; ++G__7995__i;}
  args = new cljs.core.IndexedSeq(G__7995__a,0);
} 
return G__7994__delegate.call(this,args);};
G__7994.cljs$lang$maxFixedArity = 0;
G__7994.cljs$lang$applyTo = (function (arglist__7996){
var args = cljs.core.seq(arglist__7996);
return G__7994__delegate(args);
});
G__7994.cljs$core$IFn$_invoke$arity$variadic = G__7994__delegate;
return G__7994;
})()
;
});
var cljs$core$partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7997__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__7997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7998__i = 0, G__7998__a = new Array(arguments.length -  0);
while (G__7998__i < G__7998__a.length) {G__7998__a[G__7998__i] = arguments[G__7998__i + 0]; ++G__7998__i;}
  args = new cljs.core.IndexedSeq(G__7998__a,0);
} 
return G__7997__delegate.call(this,args);};
G__7997.cljs$lang$maxFixedArity = 0;
G__7997.cljs$lang$applyTo = (function (arglist__7999){
var args = cljs.core.seq(arglist__7999);
return G__7997__delegate(args);
});
G__7997.cljs$core$IFn$_invoke$arity$variadic = G__7997__delegate;
return G__7997;
})()
;
});
var cljs$core$partial__5 = (function() { 
var G__8000__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8001__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__8001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8002__i = 0, G__8002__a = new Array(arguments.length -  0);
while (G__8002__i < G__8002__a.length) {G__8002__a[G__8002__i] = arguments[G__8002__i + 0]; ++G__8002__i;}
  args = new cljs.core.IndexedSeq(G__8002__a,0);
} 
return G__8001__delegate.call(this,args);};
G__8001.cljs$lang$maxFixedArity = 0;
G__8001.cljs$lang$applyTo = (function (arglist__8003){
var args = cljs.core.seq(arglist__8003);
return G__8001__delegate(args);
});
G__8001.cljs$core$IFn$_invoke$arity$variadic = G__8001__delegate;
return G__8001;
})()
;
};
var G__8000 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (arguments.length > 4) {
var G__8004__i = 0, G__8004__a = new Array(arguments.length -  4);
while (G__8004__i < G__8004__a.length) {G__8004__a[G__8004__i] = arguments[G__8004__i + 4]; ++G__8004__i;}
  more = new cljs.core.IndexedSeq(G__8004__a,0);
} 
return G__8000__delegate.call(this,f,arg1,arg2,arg3,more);};
G__8000.cljs$lang$maxFixedArity = 4;
G__8000.cljs$lang$applyTo = (function (arglist__8005){
var f = cljs.core.first(arglist__8005);
arglist__8005 = cljs.core.next(arglist__8005);
var arg1 = cljs.core.first(arglist__8005);
arglist__8005 = cljs.core.next(arglist__8005);
var arg2 = cljs.core.first(arglist__8005);
arglist__8005 = cljs.core.next(arglist__8005);
var arg3 = cljs.core.first(arglist__8005);
var more = cljs.core.rest(arglist__8005);
return G__8000__delegate(f,arg1,arg2,arg3,more);
});
G__8000.cljs$core$IFn$_invoke$arity$variadic = G__8000__delegate;
return G__8000;
})()
;
cljs$core$partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return cljs$core$partial__1.call(this,f);
case 2:
return cljs$core$partial__2.call(this,f,arg1);
case 3:
return cljs$core$partial__3.call(this,f,arg1,arg2);
case 4:
return cljs$core$partial__4.call(this,f,arg1,arg2,arg3);
default:
var G__8006 = null;
if (arguments.length > 4) {
var G__8007__i = 0, G__8007__a = new Array(arguments.length -  4);
while (G__8007__i < G__8007__a.length) {G__8007__a[G__8007__i] = arguments[G__8007__i + 4]; ++G__8007__i;}
G__8006 = new cljs.core.IndexedSeq(G__8007__a,0);
}
return cljs$core$partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, G__8006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$partial.cljs$lang$maxFixedArity = 4;
cljs$core$partial.cljs$lang$applyTo = cljs$core$partial__5.cljs$lang$applyTo;
cljs$core$partial.cljs$core$IFn$_invoke$arity$1 = cljs$core$partial__1;
cljs$core$partial.cljs$core$IFn$_invoke$arity$2 = cljs$core$partial__2;
cljs$core$partial.cljs$core$IFn$_invoke$arity$3 = cljs$core$partial__3;
cljs$core$partial.cljs$core$IFn$_invoke$arity$4 = cljs$core$partial__4;
cljs$core$partial.cljs$core$IFn$_invoke$arity$variadic = cljs$core$partial__5.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$partial;
})()
;
/**
 * Takes a function f, and returns a function that calls f, replacing
 * a nil first argument to f with the supplied value x. Higher arity
 * versions can replace arguments in the second and third
 * positions (y, z). Note that the function f can take any number of
 * arguments, not just the one(s) being nil-patched.
 */
cljs.core.fnil = (function() {
var cljs$core$fnil = null;
var cljs$core$fnil__2 = (function (f,x){
return (function() {
var G__8040 = null;
var G__8040__1 = (function (a){
var G__8024 = (((a == null))?x:a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8024) : f.call(null,G__8024));
});
var G__8040__2 = (function (a,b){
var G__8025 = (((a == null))?x:a);
var G__8026 = b;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8025,G__8026) : f.call(null,G__8025,G__8026));
});
var G__8040__3 = (function (a,b,c){
var G__8027 = (((a == null))?x:a);
var G__8028 = b;
var G__8029 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8027,G__8028,G__8029) : f.call(null,G__8027,G__8028,G__8029));
});
var G__8040__4 = (function() { 
var G__8041__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__8041 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__8042__i = 0, G__8042__a = new Array(arguments.length -  3);
while (G__8042__i < G__8042__a.length) {G__8042__a[G__8042__i] = arguments[G__8042__i + 3]; ++G__8042__i;}
  ds = new cljs.core.IndexedSeq(G__8042__a,0);
} 
return G__8041__delegate.call(this,a,b,c,ds);};
G__8041.cljs$lang$maxFixedArity = 3;
G__8041.cljs$lang$applyTo = (function (arglist__8043){
var a = cljs.core.first(arglist__8043);
arglist__8043 = cljs.core.next(arglist__8043);
var b = cljs.core.first(arglist__8043);
arglist__8043 = cljs.core.next(arglist__8043);
var c = cljs.core.first(arglist__8043);
var ds = cljs.core.rest(arglist__8043);
return G__8041__delegate(a,b,c,ds);
});
G__8041.cljs$core$IFn$_invoke$arity$variadic = G__8041__delegate;
return G__8041;
})()
;
G__8040 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8040__1.call(this,a);
case 2:
return G__8040__2.call(this,a,b);
case 3:
return G__8040__3.call(this,a,b,c);
default:
var G__8044 = null;
if (arguments.length > 3) {
var G__8045__i = 0, G__8045__a = new Array(arguments.length -  3);
while (G__8045__i < G__8045__a.length) {G__8045__a[G__8045__i] = arguments[G__8045__i + 3]; ++G__8045__i;}
G__8044 = new cljs.core.IndexedSeq(G__8045__a,0);
}
return G__8040__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__8044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8040.cljs$lang$maxFixedArity = 3;
G__8040.cljs$lang$applyTo = G__8040__4.cljs$lang$applyTo;
G__8040.cljs$core$IFn$_invoke$arity$1 = G__8040__1;
G__8040.cljs$core$IFn$_invoke$arity$2 = G__8040__2;
G__8040.cljs$core$IFn$_invoke$arity$3 = G__8040__3;
G__8040.cljs$core$IFn$_invoke$arity$variadic = G__8040__4.cljs$core$IFn$_invoke$arity$variadic;
return G__8040;
})()
});
var cljs$core$fnil__3 = (function (f,x,y){
return (function() {
var G__8046 = null;
var G__8046__2 = (function (a,b){
var G__8030 = (((a == null))?x:a);
var G__8031 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8030,G__8031) : f.call(null,G__8030,G__8031));
});
var G__8046__3 = (function (a,b,c){
var G__8032 = (((a == null))?x:a);
var G__8033 = (((b == null))?y:b);
var G__8034 = c;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8032,G__8033,G__8034) : f.call(null,G__8032,G__8033,G__8034));
});
var G__8046__4 = (function() { 
var G__8047__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8047 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__8048__i = 0, G__8048__a = new Array(arguments.length -  3);
while (G__8048__i < G__8048__a.length) {G__8048__a[G__8048__i] = arguments[G__8048__i + 3]; ++G__8048__i;}
  ds = new cljs.core.IndexedSeq(G__8048__a,0);
} 
return G__8047__delegate.call(this,a,b,c,ds);};
G__8047.cljs$lang$maxFixedArity = 3;
G__8047.cljs$lang$applyTo = (function (arglist__8049){
var a = cljs.core.first(arglist__8049);
arglist__8049 = cljs.core.next(arglist__8049);
var b = cljs.core.first(arglist__8049);
arglist__8049 = cljs.core.next(arglist__8049);
var c = cljs.core.first(arglist__8049);
var ds = cljs.core.rest(arglist__8049);
return G__8047__delegate(a,b,c,ds);
});
G__8047.cljs$core$IFn$_invoke$arity$variadic = G__8047__delegate;
return G__8047;
})()
;
G__8046 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8046__2.call(this,a,b);
case 3:
return G__8046__3.call(this,a,b,c);
default:
var G__8050 = null;
if (arguments.length > 3) {
var G__8051__i = 0, G__8051__a = new Array(arguments.length -  3);
while (G__8051__i < G__8051__a.length) {G__8051__a[G__8051__i] = arguments[G__8051__i + 3]; ++G__8051__i;}
G__8050 = new cljs.core.IndexedSeq(G__8051__a,0);
}
return G__8046__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__8050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8046.cljs$lang$maxFixedArity = 3;
G__8046.cljs$lang$applyTo = G__8046__4.cljs$lang$applyTo;
G__8046.cljs$core$IFn$_invoke$arity$2 = G__8046__2;
G__8046.cljs$core$IFn$_invoke$arity$3 = G__8046__3;
G__8046.cljs$core$IFn$_invoke$arity$variadic = G__8046__4.cljs$core$IFn$_invoke$arity$variadic;
return G__8046;
})()
});
var cljs$core$fnil__4 = (function (f,x,y,z){
return (function() {
var G__8052 = null;
var G__8052__2 = (function (a,b){
var G__8035 = (((a == null))?x:a);
var G__8036 = (((b == null))?y:b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8035,G__8036) : f.call(null,G__8035,G__8036));
});
var G__8052__3 = (function (a,b,c){
var G__8037 = (((a == null))?x:a);
var G__8038 = (((b == null))?y:b);
var G__8039 = (((c == null))?z:c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8037,G__8038,G__8039) : f.call(null,G__8037,G__8038,G__8039));
});
var G__8052__4 = (function() { 
var G__8053__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8053 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__8054__i = 0, G__8054__a = new Array(arguments.length -  3);
while (G__8054__i < G__8054__a.length) {G__8054__a[G__8054__i] = arguments[G__8054__i + 3]; ++G__8054__i;}
  ds = new cljs.core.IndexedSeq(G__8054__a,0);
} 
return G__8053__delegate.call(this,a,b,c,ds);};
G__8053.cljs$lang$maxFixedArity = 3;
G__8053.cljs$lang$applyTo = (function (arglist__8055){
var a = cljs.core.first(arglist__8055);
arglist__8055 = cljs.core.next(arglist__8055);
var b = cljs.core.first(arglist__8055);
arglist__8055 = cljs.core.next(arglist__8055);
var c = cljs.core.first(arglist__8055);
var ds = cljs.core.rest(arglist__8055);
return G__8053__delegate(a,b,c,ds);
});
G__8053.cljs$core$IFn$_invoke$arity$variadic = G__8053__delegate;
return G__8053;
})()
;
G__8052 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8052__2.call(this,a,b);
case 3:
return G__8052__3.call(this,a,b,c);
default:
var G__8056 = null;
if (arguments.length > 3) {
var G__8057__i = 0, G__8057__a = new Array(arguments.length -  3);
while (G__8057__i < G__8057__a.length) {G__8057__a[G__8057__i] = arguments[G__8057__i + 3]; ++G__8057__i;}
G__8056 = new cljs.core.IndexedSeq(G__8057__a,0);
}
return G__8052__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__8056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8052.cljs$lang$maxFixedArity = 3;
G__8052.cljs$lang$applyTo = G__8052__4.cljs$lang$applyTo;
G__8052.cljs$core$IFn$_invoke$arity$2 = G__8052__2;
G__8052.cljs$core$IFn$_invoke$arity$3 = G__8052__3;
G__8052.cljs$core$IFn$_invoke$arity$variadic = G__8052__4.cljs$core$IFn$_invoke$arity$variadic;
return G__8052;
})()
});
cljs$core$fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return cljs$core$fnil__2.call(this,f,x);
case 3:
return cljs$core$fnil__3.call(this,f,x,y);
case 4:
return cljs$core$fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$fnil.cljs$core$IFn$_invoke$arity$2 = cljs$core$fnil__2;
cljs$core$fnil.cljs$core$IFn$_invoke$arity$3 = cljs$core$fnil__3;
cljs$core$fnil.cljs$core$IFn$_invoke$arity$4 = cljs$core$fnil__4;
return cljs$core$fnil;
})()
;
/**
 * Returns a lazy sequence consisting of the result of applying f to 0
 * and the first item of coll, followed by applying f to 1 and the second
 * item in coll, etc, until coll is exhausted. Thus function f should
 * accept 2 arguments, index and item.
 */
cljs.core.map_indexed = (function cljs$core$map_indexed(f,coll){
var mapi = (function cljs$core$map_indexed_$_mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__1441__auto___8106 = size;
var i_8107 = (0);
while(true){
if((i_8107 < n__1441__auto___8106)){
cljs.core.chunk_append(b,(function (){var G__8102 = (idx + i_8107);
var G__8103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8107);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8102,G__8103) : f.call(null,G__8102,G__8103));
})());

var G__8108 = (i_8107 + (1));
i_8107 = G__8108;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),cljs$core$map_indexed_$_mapi((idx + size),cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__8104 = idx;
var G__8105 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8104,G__8105) : f.call(null,G__8104,G__8105));
})(),cljs$core$map_indexed_$_mapi((idx + (1)),cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
return mapi((0),coll);
});
/**
 * Returns a lazy sequence of the non-nil results of (f item). Note,
 * this means false return values will be included.  f must be free of
 * side-effects.  Returns a transducer when no collection is provided.
 */
cljs.core.keep = (function() {
var cljs$core$keep = null;
var cljs$core$keep__1 = (function (f){
return (function (rf){
return (function() {
var G__8119 = null;
var G__8119__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8119__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8119__2 = (function (result,input){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(input) : f.call(null,input));
if((v == null)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v));
}
});
G__8119 = function(result,input){
switch(arguments.length){
case 0:
return G__8119__0.call(this);
case 1:
return G__8119__1.call(this,result);
case 2:
return G__8119__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8119.cljs$core$IFn$_invoke$arity$0 = G__8119__0;
G__8119.cljs$core$IFn$_invoke$arity$1 = G__8119__1;
G__8119.cljs$core$IFn$_invoke$arity$2 = G__8119__2;
return G__8119;
})()
});
});
var cljs$core$keep__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__1441__auto___8120 = size;
var i_8121 = (0);
while(true){
if((i_8121 < n__1441__auto___8120)){
var x_8122 = (function (){var G__8117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8121);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8117) : f.call(null,G__8117));
})();
if((x_8122 == null)){
} else {
cljs.core.chunk_append(b,x_8122);
}

var G__8123 = (i_8121 + (1));
i_8121 = G__8123;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),cljs$core$keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__8118 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8118) : f.call(null,G__8118));
})();
if((x == null)){
return cljs$core$keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s));
} else {
return cljs.core.cons(x,cljs$core$keep.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
cljs$core$keep = function(f,coll){
switch(arguments.length){
case 1:
return cljs$core$keep__1.call(this,f);
case 2:
return cljs$core$keep__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$keep.cljs$core$IFn$_invoke$arity$1 = cljs$core$keep__1;
cljs$core$keep.cljs$core$IFn$_invoke$arity$2 = cljs$core$keep__2;
return cljs$core$keep;
})()
;

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 16386;
this.cljs$lang$protocol_mask$partition0$ = 6455296;
})
cljs.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__8124 = cljs.core.seq(self__.watches);
var chunk__8125 = null;
var count__8126 = (0);
var i__8127 = (0);
while(true){
if((i__8127 < count__8126)){
var vec__8128 = chunk__8125.cljs$core$IIndexed$_nth$arity$2(null,i__8127);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8128,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8128,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));

var G__8130 = seq__8124;
var G__8131 = chunk__8125;
var G__8132 = count__8126;
var G__8133 = (i__8127 + (1));
seq__8124 = G__8130;
chunk__8125 = G__8131;
count__8126 = G__8132;
i__8127 = G__8133;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8124);
if(temp__4425__auto__){
var seq__8124__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8124__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8124__$1);
var G__8134 = cljs.core.chunk_rest(seq__8124__$1);
var G__8135 = c__1341__auto__;
var G__8136 = cljs.core.count(c__1341__auto__);
var G__8137 = (0);
seq__8124 = G__8134;
chunk__8125 = G__8135;
count__8126 = G__8136;
i__8127 = G__8137;
continue;
} else {
var vec__8129 = cljs.core.first(seq__8124__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));

var G__8138 = cljs.core.next(seq__8124__$1);
var G__8139 = null;
var G__8140 = (0);
var G__8141 = (0);
seq__8124 = G__8138;
chunk__8125 = G__8139;
count__8126 = G__8140;
i__8127 = G__8141;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);

return this$__$1;
});

cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

cljs.core.Atom.cljs$lang$type = true;

cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";

cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Atom");
});

cljs.core.__GT_Atom = (function cljs$core$__GT_Atom(state,meta,validator,watches){
return (new cljs.core.Atom(state,meta,validator,watches));
});

/**
 * Creates and returns an Atom with an initial value of x and zero or
 * more options (in any order):
 * 
 * :meta metadata-map
 * 
 * :validator validate-fn
 * 
 * If metadata-map is supplied, it will be come the metadata on the
 * atom. validate-fn must be nil or a side-effect-free fn of one
 * argument, which will be passed the intended new state on any state
 * change. If the new state is unacceptable, the validate-fn should
 * return false or throw an Error.  If either of these error conditions
 * occur, then the value of the atom will not change.
 * @param {...*} var_args
 */
cljs.core.atom = (function() {
var cljs$core$atom = null;
var cljs$core$atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var cljs$core$atom__2 = (function() { 
var G__8145__delegate = function (x,p__8142){
var map__8144 = p__8142;
var map__8144__$1 = ((cljs.core.seq_QMARK_(map__8144))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8144):map__8144);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8144__$1,cljs.core.cst$kw$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8144__$1,cljs.core.cst$kw$validator);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__8145 = function (x,var_args){
var p__8142 = null;
if (arguments.length > 1) {
var G__8146__i = 0, G__8146__a = new Array(arguments.length -  1);
while (G__8146__i < G__8146__a.length) {G__8146__a[G__8146__i] = arguments[G__8146__i + 1]; ++G__8146__i;}
  p__8142 = new cljs.core.IndexedSeq(G__8146__a,0);
} 
return G__8145__delegate.call(this,x,p__8142);};
G__8145.cljs$lang$maxFixedArity = 1;
G__8145.cljs$lang$applyTo = (function (arglist__8147){
var x = cljs.core.first(arglist__8147);
var p__8142 = cljs.core.rest(arglist__8147);
return G__8145__delegate(x,p__8142);
});
G__8145.cljs$core$IFn$_invoke$arity$variadic = G__8145__delegate;
return G__8145;
})()
;
cljs$core$atom = function(x,var_args){
var p__8142 = var_args;
switch(arguments.length){
case 1:
return cljs$core$atom__1.call(this,x);
default:
var G__8148 = null;
if (arguments.length > 1) {
var G__8149__i = 0, G__8149__a = new Array(arguments.length -  1);
while (G__8149__i < G__8149__a.length) {G__8149__a[G__8149__i] = arguments[G__8149__i + 1]; ++G__8149__i;}
G__8148 = new cljs.core.IndexedSeq(G__8149__a,0);
}
return cljs$core$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__8148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$atom.cljs$lang$maxFixedArity = 1;
cljs$core$atom.cljs$lang$applyTo = cljs$core$atom__2.cljs$lang$applyTo;
cljs$core$atom.cljs$core$IFn$_invoke$arity$1 = cljs$core$atom__1;
cljs$core$atom.cljs$core$IFn$_invoke$arity$variadic = cljs$core$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$atom;
})()
;
/**
 * Sets the value of atom to newval without regard for the
 * current value. Returns newval.
 */
cljs.core.reset_BANG_ = (function cljs$core$reset_BANG_(a,new_value){
if((a instanceof cljs.core.Atom)){
var validate = a.validator;
if((validate == null)){
} else {
if(cljs.core.truth_((validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(new_value) : validate.call(null,new_value)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str((function (){var G__8151 = cljs.core.list(cljs.core.cst$sym$validate,cljs.core.cst$sym$new_DASH_value);
return (cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1 ? cljs.core.pr_str.cljs$core$IFn$_invoke$arity$1(G__8151) : cljs.core.pr_str.call(null,G__8151));
})())].join('')));
}
}

var old_value = a.state;
a.state = new_value;

if((a.watches == null)){
} else {
cljs.core._notify_watches(a,old_value,new_value);
}

return new_value;
} else {
return cljs.core._reset_BANG_(a,new_value);
}
});
/**
 * Atomically swaps the value of atom to be:
 * (apply f current-value-of-atom args). Note that f may be called
 * multiple times, and thus should be free of side effects.  Returns
 * the value that was swapped in.
 * @param {...*} var_args
 */
cljs.core.swap_BANG_ = (function() {
var cljs$core$swap_BANG_ = null;
var cljs$core$swap_BANG___2 = (function (a,f){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__8158 = a.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8158) : f.call(null,G__8158));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,f);
}
});
var cljs$core$swap_BANG___3 = (function (a,f,x){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__8159 = a.state;
var G__8160 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8159,G__8160) : f.call(null,G__8159,G__8160));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,f,x);
}
});
var cljs$core$swap_BANG___4 = (function (a,f,x,y){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,(function (){var G__8161 = a.state;
var G__8162 = x;
var G__8163 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8161,G__8162,G__8163) : f.call(null,G__8161,G__8162,G__8163));
})());
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,f,x,y);
}
});
var cljs$core$swap_BANG___5 = (function() { 
var G__8164__delegate = function (a,f,x,y,more){
if((a instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a.state,x,y,more));
} else {
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a,f,x,y,more);
}
};
var G__8164 = function (a,f,x,y,var_args){
var more = null;
if (arguments.length > 4) {
var G__8165__i = 0, G__8165__a = new Array(arguments.length -  4);
while (G__8165__i < G__8165__a.length) {G__8165__a[G__8165__i] = arguments[G__8165__i + 4]; ++G__8165__i;}
  more = new cljs.core.IndexedSeq(G__8165__a,0);
} 
return G__8164__delegate.call(this,a,f,x,y,more);};
G__8164.cljs$lang$maxFixedArity = 4;
G__8164.cljs$lang$applyTo = (function (arglist__8166){
var a = cljs.core.first(arglist__8166);
arglist__8166 = cljs.core.next(arglist__8166);
var f = cljs.core.first(arglist__8166);
arglist__8166 = cljs.core.next(arglist__8166);
var x = cljs.core.first(arglist__8166);
arglist__8166 = cljs.core.next(arglist__8166);
var y = cljs.core.first(arglist__8166);
var more = cljs.core.rest(arglist__8166);
return G__8164__delegate(a,f,x,y,more);
});
G__8164.cljs$core$IFn$_invoke$arity$variadic = G__8164__delegate;
return G__8164;
})()
;
cljs$core$swap_BANG_ = function(a,f,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return cljs$core$swap_BANG___2.call(this,a,f);
case 3:
return cljs$core$swap_BANG___3.call(this,a,f,x);
case 4:
return cljs$core$swap_BANG___4.call(this,a,f,x,y);
default:
var G__8167 = null;
if (arguments.length > 4) {
var G__8168__i = 0, G__8168__a = new Array(arguments.length -  4);
while (G__8168__i < G__8168__a.length) {G__8168__a[G__8168__i] = arguments[G__8168__i + 4]; ++G__8168__i;}
G__8167 = new cljs.core.IndexedSeq(G__8168__a,0);
}
return cljs$core$swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y, G__8167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$swap_BANG_.cljs$lang$maxFixedArity = 4;
cljs$core$swap_BANG_.cljs$lang$applyTo = cljs$core$swap_BANG___5.cljs$lang$applyTo;
cljs$core$swap_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$swap_BANG___2;
cljs$core$swap_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$swap_BANG___3;
cljs$core$swap_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$swap_BANG___4;
cljs$core$swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$swap_BANG___5.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$swap_BANG_;
})()
;
/**
 * Atomically sets the value of atom to newval if and only if the
 * current value of the atom is identical to oldval. Returns true if
 * set happened, else false.
 */
cljs.core.compare_and_set_BANG_ = (function cljs$core$compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval)){
cljs.core.reset_BANG_(a,newval);

return true;
} else {
return false;
}
});
/**
 * Sets the validator-fn for an atom. validator-fn must be nil or a
 * side-effect-free fn of one argument, which will be passed the intended
 * new state on any state change. If the new state is unacceptable, the
 * validator-fn should return false or throw an Error. If the current state
 * is not acceptable to the new validator, an Error will be thrown and the
 * validator will not be changed.
 */
cljs.core.set_validator_BANG_ = (function cljs$core$set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
 * Gets the validator-fn for a var/ref/agent/atom.
 */
cljs.core.get_validator = (function cljs$core$get_validator(iref){
return iref.validator;
});
/**
 * Returns a lazy sequence of the non-nil results of (f index item). Note,
 * this means false return values will be included.  f must be free of
 * side-effects.  Returns a stateful transducer when no collection is
 * provided.
 */
cljs.core.keep_indexed = (function() {
var cljs$core$keep_indexed = null;
var cljs$core$keep_indexed__1 = (function (f){
return (function (rf){
var ia = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return ((function (ia){
return (function() {
var G__8225 = null;
var G__8225__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8225__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8225__2 = (function (result,input){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);
var v = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(i,input) : f.call(null,i,input));
if((v == null)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v));
}
});
G__8225 = function(result,input){
switch(arguments.length){
case 0:
return G__8225__0.call(this);
case 1:
return G__8225__1.call(this,result);
case 2:
return G__8225__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8225.cljs$core$IFn$_invoke$arity$0 = G__8225__0;
G__8225.cljs$core$IFn$_invoke$arity$1 = G__8225__1;
G__8225.cljs$core$IFn$_invoke$arity$2 = G__8225__2;
return G__8225;
})()
;})(ia))
});
});
var cljs$core$keep_indexed__2 = (function (f,coll){
var keepi = (function cljs$core$keep_indexed_$_keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__1441__auto___8226 = size;
var i_8227 = (0);
while(true){
if((i_8227 < n__1441__auto___8226)){
var x_8228 = (function (){var G__8221 = (idx + i_8227);
var G__8222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8227);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8221,G__8222) : f.call(null,G__8221,G__8222));
})();
if((x_8228 == null)){
} else {
cljs.core.chunk_append(b,x_8228);
}

var G__8229 = (i_8227 + (1));
i_8227 = G__8229;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),cljs$core$keep_indexed_$_keepi((idx + size),cljs.core.chunk_rest(s)));
} else {
var x = (function (){var G__8223 = idx;
var G__8224 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8223,G__8224) : f.call(null,G__8223,G__8224));
})();
if((x == null)){
return cljs$core$keep_indexed_$_keepi((idx + (1)),cljs.core.rest(s));
} else {
return cljs.core.cons(x,cljs$core$keep_indexed_$_keepi((idx + (1)),cljs.core.rest(s)));
}
}
} else {
return null;
}
}),null,null));
});
return keepi((0),coll);
});
cljs$core$keep_indexed = function(f,coll){
switch(arguments.length){
case 1:
return cljs$core$keep_indexed__1.call(this,f);
case 2:
return cljs$core$keep_indexed__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$keep_indexed.cljs$core$IFn$_invoke$arity$1 = cljs$core$keep_indexed__1;
cljs$core$keep_indexed.cljs$core$IFn$_invoke$arity$2 = cljs$core$keep_indexed__2;
return cljs$core$keep_indexed;
})()
;
/**
 * Takes a set of predicates and returns a function f that returns true if all of its
 * composing predicates return a logical true value against all of its arguments, else it returns
 * false. Note that f is short-circuiting in that it will stop execution on the first
 * argument that triggers a logical false result against the original predicates.
 * @param {...*} var_args
 */
cljs.core.every_pred = (function() {
var cljs$core$every_pred = null;
var cljs$core$every_pred__1 = (function (p){
return (function() {
var cljs$core$every_pred_$_ep1 = null;
var cljs$core$every_pred_$_ep1__0 = (function (){
return true;
});
var cljs$core$every_pred_$_ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)));
});
var cljs$core$every_pred_$_ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__547__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__547__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__547__auto____$1)){
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(z) : p.call(null,z));
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep1__4 = (function() { 
var G__8236__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__547__auto__ = cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(and__547__auto__)){
return cljs.core.every_QMARK_(p,args);
} else {
return and__547__auto__;
}
})());
};
var G__8236 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8237__i = 0, G__8237__a = new Array(arguments.length -  3);
while (G__8237__i < G__8237__a.length) {G__8237__a[G__8237__i] = arguments[G__8237__i + 3]; ++G__8237__i;}
  args = new cljs.core.IndexedSeq(G__8237__a,0);
} 
return G__8236__delegate.call(this,x,y,z,args);};
G__8236.cljs$lang$maxFixedArity = 3;
G__8236.cljs$lang$applyTo = (function (arglist__8238){
var x = cljs.core.first(arglist__8238);
arglist__8238 = cljs.core.next(arglist__8238);
var y = cljs.core.first(arglist__8238);
arglist__8238 = cljs.core.next(arglist__8238);
var z = cljs.core.first(arglist__8238);
var args = cljs.core.rest(arglist__8238);
return G__8236__delegate(x,y,z,args);
});
G__8236.cljs$core$IFn$_invoke$arity$variadic = G__8236__delegate;
return G__8236;
})()
;
cljs$core$every_pred_$_ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$every_pred_$_ep1__0.call(this);
case 1:
return cljs$core$every_pred_$_ep1__1.call(this,x);
case 2:
return cljs$core$every_pred_$_ep1__2.call(this,x,y);
case 3:
return cljs$core$every_pred_$_ep1__3.call(this,x,y,z);
default:
var G__8239 = null;
if (arguments.length > 3) {
var G__8240__i = 0, G__8240__a = new Array(arguments.length -  3);
while (G__8240__i < G__8240__a.length) {G__8240__a[G__8240__i] = arguments[G__8240__i + 3]; ++G__8240__i;}
G__8239 = new cljs.core.IndexedSeq(G__8240__a,0);
}
return cljs$core$every_pred_$_ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$every_pred_$_ep1.cljs$lang$maxFixedArity = 3;
cljs$core$every_pred_$_ep1.cljs$lang$applyTo = cljs$core$every_pred_$_ep1__4.cljs$lang$applyTo;
cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$0 = cljs$core$every_pred_$_ep1__0;
cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$1 = cljs$core$every_pred_$_ep1__1;
cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$2 = cljs$core$every_pred_$_ep1__2;
cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$3 = cljs$core$every_pred_$_ep1__3;
cljs$core$every_pred_$_ep1.cljs$core$IFn$_invoke$arity$variadic = cljs$core$every_pred_$_ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$every_pred_$_ep1;
})()
});
var cljs$core$every_pred__2 = (function (p1,p2){
return (function() {
var cljs$core$every_pred_$_ep2 = null;
var cljs$core$every_pred_$_ep2__0 = (function (){
return true;
});
var cljs$core$every_pred_$_ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__547__auto____$1)){
var and__547__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__547__auto____$2)){
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__547__auto____$1)){
var and__547__auto____$2 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__547__auto____$2)){
var and__547__auto____$3 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__547__auto____$3)){
var and__547__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__547__auto____$4)){
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
} else {
return and__547__auto____$4;
}
} else {
return and__547__auto____$3;
}
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep2__4 = (function() { 
var G__8241__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__547__auto__ = cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(and__547__auto__)){
return cljs.core.every_QMARK_(((function (and__547__auto__){
return (function (p1__8230_SHARP_){
var and__547__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__8230_SHARP_) : p1.call(null,p1__8230_SHARP_));
if(cljs.core.truth_(and__547__auto____$1)){
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__8230_SHARP_) : p2.call(null,p1__8230_SHARP_));
} else {
return and__547__auto____$1;
}
});})(and__547__auto__))
,args);
} else {
return and__547__auto__;
}
})());
};
var G__8241 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8242__i = 0, G__8242__a = new Array(arguments.length -  3);
while (G__8242__i < G__8242__a.length) {G__8242__a[G__8242__i] = arguments[G__8242__i + 3]; ++G__8242__i;}
  args = new cljs.core.IndexedSeq(G__8242__a,0);
} 
return G__8241__delegate.call(this,x,y,z,args);};
G__8241.cljs$lang$maxFixedArity = 3;
G__8241.cljs$lang$applyTo = (function (arglist__8243){
var x = cljs.core.first(arglist__8243);
arglist__8243 = cljs.core.next(arglist__8243);
var y = cljs.core.first(arglist__8243);
arglist__8243 = cljs.core.next(arglist__8243);
var z = cljs.core.first(arglist__8243);
var args = cljs.core.rest(arglist__8243);
return G__8241__delegate(x,y,z,args);
});
G__8241.cljs$core$IFn$_invoke$arity$variadic = G__8241__delegate;
return G__8241;
})()
;
cljs$core$every_pred_$_ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$every_pred_$_ep2__0.call(this);
case 1:
return cljs$core$every_pred_$_ep2__1.call(this,x);
case 2:
return cljs$core$every_pred_$_ep2__2.call(this,x,y);
case 3:
return cljs$core$every_pred_$_ep2__3.call(this,x,y,z);
default:
var G__8244 = null;
if (arguments.length > 3) {
var G__8245__i = 0, G__8245__a = new Array(arguments.length -  3);
while (G__8245__i < G__8245__a.length) {G__8245__a[G__8245__i] = arguments[G__8245__i + 3]; ++G__8245__i;}
G__8244 = new cljs.core.IndexedSeq(G__8245__a,0);
}
return cljs$core$every_pred_$_ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$every_pred_$_ep2.cljs$lang$maxFixedArity = 3;
cljs$core$every_pred_$_ep2.cljs$lang$applyTo = cljs$core$every_pred_$_ep2__4.cljs$lang$applyTo;
cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$0 = cljs$core$every_pred_$_ep2__0;
cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$1 = cljs$core$every_pred_$_ep2__1;
cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$2 = cljs$core$every_pred_$_ep2__2;
cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$3 = cljs$core$every_pred_$_ep2__3;
cljs$core$every_pred_$_ep2.cljs$core$IFn$_invoke$arity$variadic = cljs$core$every_pred_$_ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$every_pred_$_ep2;
})()
});
var cljs$core$every_pred__3 = (function (p1,p2,p3){
return (function() {
var cljs$core$every_pred_$_ep3 = null;
var cljs$core$every_pred_$_ep3__0 = (function (){
return true;
});
var cljs$core$every_pred_$_ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__547__auto____$1)){
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__547__auto____$1)){
var and__547__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__547__auto____$2)){
var and__547__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__547__auto____$3)){
var and__547__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__547__auto____$4)){
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
} else {
return and__547__auto____$4;
}
} else {
return and__547__auto____$3;
}
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__547__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__547__auto____$1)){
var and__547__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__547__auto____$2)){
var and__547__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__547__auto____$3)){
var and__547__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__547__auto____$4)){
var and__547__auto____$5 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__547__auto____$5)){
var and__547__auto____$6 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__547__auto____$6)){
var and__547__auto____$7 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__547__auto____$7)){
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(z) : p3.call(null,z));
} else {
return and__547__auto____$7;
}
} else {
return and__547__auto____$6;
}
} else {
return and__547__auto____$5;
}
} else {
return and__547__auto____$4;
}
} else {
return and__547__auto____$3;
}
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})());
});
var cljs$core$every_pred_$_ep3__4 = (function() { 
var G__8246__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__547__auto__ = cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(and__547__auto__)){
return cljs.core.every_QMARK_(((function (and__547__auto__){
return (function (p1__8231_SHARP_){
var and__547__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__8231_SHARP_) : p1.call(null,p1__8231_SHARP_));
if(cljs.core.truth_(and__547__auto____$1)){
var and__547__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__8231_SHARP_) : p2.call(null,p1__8231_SHARP_));
if(cljs.core.truth_(and__547__auto____$2)){
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(p1__8231_SHARP_) : p3.call(null,p1__8231_SHARP_));
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
});})(and__547__auto__))
,args);
} else {
return and__547__auto__;
}
})());
};
var G__8246 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8247__i = 0, G__8247__a = new Array(arguments.length -  3);
while (G__8247__i < G__8247__a.length) {G__8247__a[G__8247__i] = arguments[G__8247__i + 3]; ++G__8247__i;}
  args = new cljs.core.IndexedSeq(G__8247__a,0);
} 
return G__8246__delegate.call(this,x,y,z,args);};
G__8246.cljs$lang$maxFixedArity = 3;
G__8246.cljs$lang$applyTo = (function (arglist__8248){
var x = cljs.core.first(arglist__8248);
arglist__8248 = cljs.core.next(arglist__8248);
var y = cljs.core.first(arglist__8248);
arglist__8248 = cljs.core.next(arglist__8248);
var z = cljs.core.first(arglist__8248);
var args = cljs.core.rest(arglist__8248);
return G__8246__delegate(x,y,z,args);
});
G__8246.cljs$core$IFn$_invoke$arity$variadic = G__8246__delegate;
return G__8246;
})()
;
cljs$core$every_pred_$_ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$every_pred_$_ep3__0.call(this);
case 1:
return cljs$core$every_pred_$_ep3__1.call(this,x);
case 2:
return cljs$core$every_pred_$_ep3__2.call(this,x,y);
case 3:
return cljs$core$every_pred_$_ep3__3.call(this,x,y,z);
default:
var G__8249 = null;
if (arguments.length > 3) {
var G__8250__i = 0, G__8250__a = new Array(arguments.length -  3);
while (G__8250__i < G__8250__a.length) {G__8250__a[G__8250__i] = arguments[G__8250__i + 3]; ++G__8250__i;}
G__8249 = new cljs.core.IndexedSeq(G__8250__a,0);
}
return cljs$core$every_pred_$_ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$every_pred_$_ep3.cljs$lang$maxFixedArity = 3;
cljs$core$every_pred_$_ep3.cljs$lang$applyTo = cljs$core$every_pred_$_ep3__4.cljs$lang$applyTo;
cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$0 = cljs$core$every_pred_$_ep3__0;
cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$1 = cljs$core$every_pred_$_ep3__1;
cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$2 = cljs$core$every_pred_$_ep3__2;
cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$3 = cljs$core$every_pred_$_ep3__3;
cljs$core$every_pred_$_ep3.cljs$core$IFn$_invoke$arity$variadic = cljs$core$every_pred_$_ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$every_pred_$_ep3;
})()
});
var cljs$core$every_pred__4 = (function() { 
var G__8251__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var cljs$core$every_pred_$_epn = null;
var cljs$core$every_pred_$_epn__0 = (function (){
return true;
});
var cljs$core$every_pred_$_epn__1 = (function (x){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__8232_SHARP_){
return (p1__8232_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8232_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8232_SHARP_.call(null,x));
});})(ps__$1))
,ps__$1);
});
var cljs$core$every_pred_$_epn__2 = (function (x,y){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__8233_SHARP_){
var and__547__auto__ = (p1__8233_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8233_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8233_SHARP_.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
return (p1__8233_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8233_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__8233_SHARP_.call(null,y));
} else {
return and__547__auto__;
}
});})(ps__$1))
,ps__$1);
});
var cljs$core$every_pred_$_epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_(((function (ps__$1){
return (function (p1__8234_SHARP_){
var and__547__auto__ = (p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8234_SHARP_.call(null,x));
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__8234_SHARP_.call(null,y));
if(cljs.core.truth_(and__547__auto____$1)){
return (p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8234_SHARP_.cljs$core$IFn$_invoke$arity$1(z) : p1__8234_SHARP_.call(null,z));
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
});})(ps__$1))
,ps__$1);
});
var cljs$core$every_pred_$_epn__4 = (function() { 
var G__8252__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__547__auto__ = cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(and__547__auto__)){
return cljs.core.every_QMARK_(((function (and__547__auto__,ps__$1){
return (function (p1__8235_SHARP_){
return cljs.core.every_QMARK_(p1__8235_SHARP_,args);
});})(and__547__auto__,ps__$1))
,ps__$1);
} else {
return and__547__auto__;
}
})());
};
var G__8252 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8253__i = 0, G__8253__a = new Array(arguments.length -  3);
while (G__8253__i < G__8253__a.length) {G__8253__a[G__8253__i] = arguments[G__8253__i + 3]; ++G__8253__i;}
  args = new cljs.core.IndexedSeq(G__8253__a,0);
} 
return G__8252__delegate.call(this,x,y,z,args);};
G__8252.cljs$lang$maxFixedArity = 3;
G__8252.cljs$lang$applyTo = (function (arglist__8254){
var x = cljs.core.first(arglist__8254);
arglist__8254 = cljs.core.next(arglist__8254);
var y = cljs.core.first(arglist__8254);
arglist__8254 = cljs.core.next(arglist__8254);
var z = cljs.core.first(arglist__8254);
var args = cljs.core.rest(arglist__8254);
return G__8252__delegate(x,y,z,args);
});
G__8252.cljs$core$IFn$_invoke$arity$variadic = G__8252__delegate;
return G__8252;
})()
;
cljs$core$every_pred_$_epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$every_pred_$_epn__0.call(this);
case 1:
return cljs$core$every_pred_$_epn__1.call(this,x);
case 2:
return cljs$core$every_pred_$_epn__2.call(this,x,y);
case 3:
return cljs$core$every_pred_$_epn__3.call(this,x,y,z);
default:
var G__8255 = null;
if (arguments.length > 3) {
var G__8256__i = 0, G__8256__a = new Array(arguments.length -  3);
while (G__8256__i < G__8256__a.length) {G__8256__a[G__8256__i] = arguments[G__8256__i + 3]; ++G__8256__i;}
G__8255 = new cljs.core.IndexedSeq(G__8256__a,0);
}
return cljs$core$every_pred_$_epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$every_pred_$_epn.cljs$lang$maxFixedArity = 3;
cljs$core$every_pred_$_epn.cljs$lang$applyTo = cljs$core$every_pred_$_epn__4.cljs$lang$applyTo;
cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$0 = cljs$core$every_pred_$_epn__0;
cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$1 = cljs$core$every_pred_$_epn__1;
cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$2 = cljs$core$every_pred_$_epn__2;
cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$3 = cljs$core$every_pred_$_epn__3;
cljs$core$every_pred_$_epn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$every_pred_$_epn__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$every_pred_$_epn;
})()
;})(ps__$1))
};
var G__8251 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
var G__8257__i = 0, G__8257__a = new Array(arguments.length -  3);
while (G__8257__i < G__8257__a.length) {G__8257__a[G__8257__i] = arguments[G__8257__i + 3]; ++G__8257__i;}
  ps = new cljs.core.IndexedSeq(G__8257__a,0);
} 
return G__8251__delegate.call(this,p1,p2,p3,ps);};
G__8251.cljs$lang$maxFixedArity = 3;
G__8251.cljs$lang$applyTo = (function (arglist__8258){
var p1 = cljs.core.first(arglist__8258);
arglist__8258 = cljs.core.next(arglist__8258);
var p2 = cljs.core.first(arglist__8258);
arglist__8258 = cljs.core.next(arglist__8258);
var p3 = cljs.core.first(arglist__8258);
var ps = cljs.core.rest(arglist__8258);
return G__8251__delegate(p1,p2,p3,ps);
});
G__8251.cljs$core$IFn$_invoke$arity$variadic = G__8251__delegate;
return G__8251;
})()
;
cljs$core$every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return cljs$core$every_pred__1.call(this,p1);
case 2:
return cljs$core$every_pred__2.call(this,p1,p2);
case 3:
return cljs$core$every_pred__3.call(this,p1,p2,p3);
default:
var G__8259 = null;
if (arguments.length > 3) {
var G__8260__i = 0, G__8260__a = new Array(arguments.length -  3);
while (G__8260__i < G__8260__a.length) {G__8260__a[G__8260__i] = arguments[G__8260__i + 3]; ++G__8260__i;}
G__8259 = new cljs.core.IndexedSeq(G__8260__a,0);
}
return cljs$core$every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, G__8259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$every_pred.cljs$lang$maxFixedArity = 3;
cljs$core$every_pred.cljs$lang$applyTo = cljs$core$every_pred__4.cljs$lang$applyTo;
cljs$core$every_pred.cljs$core$IFn$_invoke$arity$1 = cljs$core$every_pred__1;
cljs$core$every_pred.cljs$core$IFn$_invoke$arity$2 = cljs$core$every_pred__2;
cljs$core$every_pred.cljs$core$IFn$_invoke$arity$3 = cljs$core$every_pred__3;
cljs$core$every_pred.cljs$core$IFn$_invoke$arity$variadic = cljs$core$every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$every_pred;
})()
;
/**
 * Takes a set of predicates and returns a function f that returns the first logical true value
 * returned by one of its composing predicates against any of its arguments, else it returns
 * logical false. Note that f is short-circuiting in that it will stop execution on the first
 * argument that triggers a logical true result against the original predicates.
 * @param {...*} var_args
 */
cljs.core.some_fn = (function() {
var cljs$core$some_fn = null;
var cljs$core$some_fn__1 = (function (p){
return (function() {
var cljs$core$some_fn_$_sp1 = null;
var cljs$core$some_fn_$_sp1__0 = (function (){
return null;
});
var cljs$core$some_fn_$_sp1__1 = (function (x){
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
});
var cljs$core$some_fn_$_sp1__2 = (function (x,y){
var or__559__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
}
});
var cljs$core$some_fn_$_sp1__3 = (function (x,y,z){
var or__559__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(z) : p.call(null,z));
}
}
});
var cljs$core$some_fn_$_sp1__4 = (function() { 
var G__8267__delegate = function (x,y,z,args){
var or__559__auto__ = cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.some(p,args);
}
};
var G__8267 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8268__i = 0, G__8268__a = new Array(arguments.length -  3);
while (G__8268__i < G__8268__a.length) {G__8268__a[G__8268__i] = arguments[G__8268__i + 3]; ++G__8268__i;}
  args = new cljs.core.IndexedSeq(G__8268__a,0);
} 
return G__8267__delegate.call(this,x,y,z,args);};
G__8267.cljs$lang$maxFixedArity = 3;
G__8267.cljs$lang$applyTo = (function (arglist__8269){
var x = cljs.core.first(arglist__8269);
arglist__8269 = cljs.core.next(arglist__8269);
var y = cljs.core.first(arglist__8269);
arglist__8269 = cljs.core.next(arglist__8269);
var z = cljs.core.first(arglist__8269);
var args = cljs.core.rest(arglist__8269);
return G__8267__delegate(x,y,z,args);
});
G__8267.cljs$core$IFn$_invoke$arity$variadic = G__8267__delegate;
return G__8267;
})()
;
cljs$core$some_fn_$_sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$some_fn_$_sp1__0.call(this);
case 1:
return cljs$core$some_fn_$_sp1__1.call(this,x);
case 2:
return cljs$core$some_fn_$_sp1__2.call(this,x,y);
case 3:
return cljs$core$some_fn_$_sp1__3.call(this,x,y,z);
default:
var G__8270 = null;
if (arguments.length > 3) {
var G__8271__i = 0, G__8271__a = new Array(arguments.length -  3);
while (G__8271__i < G__8271__a.length) {G__8271__a[G__8271__i] = arguments[G__8271__i + 3]; ++G__8271__i;}
G__8270 = new cljs.core.IndexedSeq(G__8271__a,0);
}
return cljs$core$some_fn_$_sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$some_fn_$_sp1.cljs$lang$maxFixedArity = 3;
cljs$core$some_fn_$_sp1.cljs$lang$applyTo = cljs$core$some_fn_$_sp1__4.cljs$lang$applyTo;
cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$0 = cljs$core$some_fn_$_sp1__0;
cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$1 = cljs$core$some_fn_$_sp1__1;
cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$2 = cljs$core$some_fn_$_sp1__2;
cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$3 = cljs$core$some_fn_$_sp1__3;
cljs$core$some_fn_$_sp1.cljs$core$IFn$_invoke$arity$variadic = cljs$core$some_fn_$_sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$some_fn_$_sp1;
})()
});
var cljs$core$some_fn__2 = (function (p1,p2){
return (function() {
var cljs$core$some_fn_$_sp2 = null;
var cljs$core$some_fn_$_sp2__0 = (function (){
return null;
});
var cljs$core$some_fn_$_sp2__1 = (function (x){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
}
});
var cljs$core$some_fn_$_sp2__2 = (function (x,y){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
}
}
}
});
var cljs$core$some_fn_$_sp2__3 = (function (x,y,z){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
var or__559__auto____$3 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__559__auto____$3)){
return or__559__auto____$3;
} else {
var or__559__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__559__auto____$4)){
return or__559__auto____$4;
} else {
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var cljs$core$some_fn_$_sp2__4 = (function() { 
var G__8272__delegate = function (x,y,z,args){
var or__559__auto__ = cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.some(((function (or__559__auto__){
return (function (p1__8261_SHARP_){
var or__559__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__8261_SHARP_) : p1.call(null,p1__8261_SHARP_));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__8261_SHARP_) : p2.call(null,p1__8261_SHARP_));
}
});})(or__559__auto__))
,args);
}
};
var G__8272 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8273__i = 0, G__8273__a = new Array(arguments.length -  3);
while (G__8273__i < G__8273__a.length) {G__8273__a[G__8273__i] = arguments[G__8273__i + 3]; ++G__8273__i;}
  args = new cljs.core.IndexedSeq(G__8273__a,0);
} 
return G__8272__delegate.call(this,x,y,z,args);};
G__8272.cljs$lang$maxFixedArity = 3;
G__8272.cljs$lang$applyTo = (function (arglist__8274){
var x = cljs.core.first(arglist__8274);
arglist__8274 = cljs.core.next(arglist__8274);
var y = cljs.core.first(arglist__8274);
arglist__8274 = cljs.core.next(arglist__8274);
var z = cljs.core.first(arglist__8274);
var args = cljs.core.rest(arglist__8274);
return G__8272__delegate(x,y,z,args);
});
G__8272.cljs$core$IFn$_invoke$arity$variadic = G__8272__delegate;
return G__8272;
})()
;
cljs$core$some_fn_$_sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$some_fn_$_sp2__0.call(this);
case 1:
return cljs$core$some_fn_$_sp2__1.call(this,x);
case 2:
return cljs$core$some_fn_$_sp2__2.call(this,x,y);
case 3:
return cljs$core$some_fn_$_sp2__3.call(this,x,y,z);
default:
var G__8275 = null;
if (arguments.length > 3) {
var G__8276__i = 0, G__8276__a = new Array(arguments.length -  3);
while (G__8276__i < G__8276__a.length) {G__8276__a[G__8276__i] = arguments[G__8276__i + 3]; ++G__8276__i;}
G__8275 = new cljs.core.IndexedSeq(G__8276__a,0);
}
return cljs$core$some_fn_$_sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$some_fn_$_sp2.cljs$lang$maxFixedArity = 3;
cljs$core$some_fn_$_sp2.cljs$lang$applyTo = cljs$core$some_fn_$_sp2__4.cljs$lang$applyTo;
cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$0 = cljs$core$some_fn_$_sp2__0;
cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$1 = cljs$core$some_fn_$_sp2__1;
cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$2 = cljs$core$some_fn_$_sp2__2;
cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$3 = cljs$core$some_fn_$_sp2__3;
cljs$core$some_fn_$_sp2.cljs$core$IFn$_invoke$arity$variadic = cljs$core$some_fn_$_sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$some_fn_$_sp2;
})()
});
var cljs$core$some_fn__3 = (function (p1,p2,p3){
return (function() {
var cljs$core$some_fn_$_sp3 = null;
var cljs$core$some_fn_$_sp3__0 = (function (){
return null;
});
var cljs$core$some_fn_$_sp3__1 = (function (x){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
}
}
});
var cljs$core$some_fn_$_sp3__2 = (function (x,y){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
var or__559__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__559__auto____$3)){
return or__559__auto____$3;
} else {
var or__559__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__559__auto____$4)){
return or__559__auto____$4;
} else {
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var cljs$core$some_fn_$_sp3__3 = (function (x,y,z){
var or__559__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
var or__559__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__559__auto____$3)){
return or__559__auto____$3;
} else {
var or__559__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__559__auto____$4)){
return or__559__auto____$4;
} else {
var or__559__auto____$5 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__559__auto____$5)){
return or__559__auto____$5;
} else {
var or__559__auto____$6 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__559__auto____$6)){
return or__559__auto____$6;
} else {
var or__559__auto____$7 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__559__auto____$7)){
return or__559__auto____$7;
} else {
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var cljs$core$some_fn_$_sp3__4 = (function() { 
var G__8277__delegate = function (x,y,z,args){
var or__559__auto__ = cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.some(((function (or__559__auto__){
return (function (p1__8262_SHARP_){
var or__559__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__8262_SHARP_) : p1.call(null,p1__8262_SHARP_));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__8262_SHARP_) : p2.call(null,p1__8262_SHARP_));
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(p1__8262_SHARP_) : p3.call(null,p1__8262_SHARP_));
}
}
});})(or__559__auto__))
,args);
}
};
var G__8277 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8278__i = 0, G__8278__a = new Array(arguments.length -  3);
while (G__8278__i < G__8278__a.length) {G__8278__a[G__8278__i] = arguments[G__8278__i + 3]; ++G__8278__i;}
  args = new cljs.core.IndexedSeq(G__8278__a,0);
} 
return G__8277__delegate.call(this,x,y,z,args);};
G__8277.cljs$lang$maxFixedArity = 3;
G__8277.cljs$lang$applyTo = (function (arglist__8279){
var x = cljs.core.first(arglist__8279);
arglist__8279 = cljs.core.next(arglist__8279);
var y = cljs.core.first(arglist__8279);
arglist__8279 = cljs.core.next(arglist__8279);
var z = cljs.core.first(arglist__8279);
var args = cljs.core.rest(arglist__8279);
return G__8277__delegate(x,y,z,args);
});
G__8277.cljs$core$IFn$_invoke$arity$variadic = G__8277__delegate;
return G__8277;
})()
;
cljs$core$some_fn_$_sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$some_fn_$_sp3__0.call(this);
case 1:
return cljs$core$some_fn_$_sp3__1.call(this,x);
case 2:
return cljs$core$some_fn_$_sp3__2.call(this,x,y);
case 3:
return cljs$core$some_fn_$_sp3__3.call(this,x,y,z);
default:
var G__8280 = null;
if (arguments.length > 3) {
var G__8281__i = 0, G__8281__a = new Array(arguments.length -  3);
while (G__8281__i < G__8281__a.length) {G__8281__a[G__8281__i] = arguments[G__8281__i + 3]; ++G__8281__i;}
G__8280 = new cljs.core.IndexedSeq(G__8281__a,0);
}
return cljs$core$some_fn_$_sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$some_fn_$_sp3.cljs$lang$maxFixedArity = 3;
cljs$core$some_fn_$_sp3.cljs$lang$applyTo = cljs$core$some_fn_$_sp3__4.cljs$lang$applyTo;
cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$0 = cljs$core$some_fn_$_sp3__0;
cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$1 = cljs$core$some_fn_$_sp3__1;
cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$2 = cljs$core$some_fn_$_sp3__2;
cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$3 = cljs$core$some_fn_$_sp3__3;
cljs$core$some_fn_$_sp3.cljs$core$IFn$_invoke$arity$variadic = cljs$core$some_fn_$_sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$some_fn_$_sp3;
})()
});
var cljs$core$some_fn__4 = (function() { 
var G__8282__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);
return ((function (ps__$1){
return (function() {
var cljs$core$some_fn_$_spn = null;
var cljs$core$some_fn_$_spn__0 = (function (){
return null;
});
var cljs$core$some_fn_$_spn__1 = (function (x){
return cljs.core.some(((function (ps__$1){
return (function (p1__8263_SHARP_){
return (p1__8263_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8263_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8263_SHARP_.call(null,x));
});})(ps__$1))
,ps__$1);
});
var cljs$core$some_fn_$_spn__2 = (function (x,y){
return cljs.core.some(((function (ps__$1){
return (function (p1__8264_SHARP_){
var or__559__auto__ = (p1__8264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8264_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8264_SHARP_.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return (p1__8264_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8264_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__8264_SHARP_.call(null,y));
}
});})(ps__$1))
,ps__$1);
});
var cljs$core$some_fn_$_spn__3 = (function (x,y,z){
return cljs.core.some(((function (ps__$1){
return (function (p1__8265_SHARP_){
var or__559__auto__ = (p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__8265_SHARP_.call(null,x));
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__8265_SHARP_.call(null,y));
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
return (p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8265_SHARP_.cljs$core$IFn$_invoke$arity$1(z) : p1__8265_SHARP_.call(null,z));
}
}
});})(ps__$1))
,ps__$1);
});
var cljs$core$some_fn_$_spn__4 = (function() { 
var G__8283__delegate = function (x,y,z,args){
var or__559__auto__ = cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$3(x,y,z);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.some(((function (or__559__auto__,ps__$1){
return (function (p1__8266_SHARP_){
return cljs.core.some(p1__8266_SHARP_,args);
});})(or__559__auto__,ps__$1))
,ps__$1);
}
};
var G__8283 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__8284__i = 0, G__8284__a = new Array(arguments.length -  3);
while (G__8284__i < G__8284__a.length) {G__8284__a[G__8284__i] = arguments[G__8284__i + 3]; ++G__8284__i;}
  args = new cljs.core.IndexedSeq(G__8284__a,0);
} 
return G__8283__delegate.call(this,x,y,z,args);};
G__8283.cljs$lang$maxFixedArity = 3;
G__8283.cljs$lang$applyTo = (function (arglist__8285){
var x = cljs.core.first(arglist__8285);
arglist__8285 = cljs.core.next(arglist__8285);
var y = cljs.core.first(arglist__8285);
arglist__8285 = cljs.core.next(arglist__8285);
var z = cljs.core.first(arglist__8285);
var args = cljs.core.rest(arglist__8285);
return G__8283__delegate(x,y,z,args);
});
G__8283.cljs$core$IFn$_invoke$arity$variadic = G__8283__delegate;
return G__8283;
})()
;
cljs$core$some_fn_$_spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return cljs$core$some_fn_$_spn__0.call(this);
case 1:
return cljs$core$some_fn_$_spn__1.call(this,x);
case 2:
return cljs$core$some_fn_$_spn__2.call(this,x,y);
case 3:
return cljs$core$some_fn_$_spn__3.call(this,x,y,z);
default:
var G__8286 = null;
if (arguments.length > 3) {
var G__8287__i = 0, G__8287__a = new Array(arguments.length -  3);
while (G__8287__i < G__8287__a.length) {G__8287__a[G__8287__i] = arguments[G__8287__i + 3]; ++G__8287__i;}
G__8286 = new cljs.core.IndexedSeq(G__8287__a,0);
}
return cljs$core$some_fn_$_spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__8286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$some_fn_$_spn.cljs$lang$maxFixedArity = 3;
cljs$core$some_fn_$_spn.cljs$lang$applyTo = cljs$core$some_fn_$_spn__4.cljs$lang$applyTo;
cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$0 = cljs$core$some_fn_$_spn__0;
cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$1 = cljs$core$some_fn_$_spn__1;
cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$2 = cljs$core$some_fn_$_spn__2;
cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$3 = cljs$core$some_fn_$_spn__3;
cljs$core$some_fn_$_spn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$some_fn_$_spn__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$some_fn_$_spn;
})()
;})(ps__$1))
};
var G__8282 = function (p1,p2,p3,var_args){
var ps = null;
if (arguments.length > 3) {
var G__8288__i = 0, G__8288__a = new Array(arguments.length -  3);
while (G__8288__i < G__8288__a.length) {G__8288__a[G__8288__i] = arguments[G__8288__i + 3]; ++G__8288__i;}
  ps = new cljs.core.IndexedSeq(G__8288__a,0);
} 
return G__8282__delegate.call(this,p1,p2,p3,ps);};
G__8282.cljs$lang$maxFixedArity = 3;
G__8282.cljs$lang$applyTo = (function (arglist__8289){
var p1 = cljs.core.first(arglist__8289);
arglist__8289 = cljs.core.next(arglist__8289);
var p2 = cljs.core.first(arglist__8289);
arglist__8289 = cljs.core.next(arglist__8289);
var p3 = cljs.core.first(arglist__8289);
var ps = cljs.core.rest(arglist__8289);
return G__8282__delegate(p1,p2,p3,ps);
});
G__8282.cljs$core$IFn$_invoke$arity$variadic = G__8282__delegate;
return G__8282;
})()
;
cljs$core$some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return cljs$core$some_fn__1.call(this,p1);
case 2:
return cljs$core$some_fn__2.call(this,p1,p2);
case 3:
return cljs$core$some_fn__3.call(this,p1,p2,p3);
default:
var G__8290 = null;
if (arguments.length > 3) {
var G__8291__i = 0, G__8291__a = new Array(arguments.length -  3);
while (G__8291__i < G__8291__a.length) {G__8291__a[G__8291__i] = arguments[G__8291__i + 3]; ++G__8291__i;}
G__8290 = new cljs.core.IndexedSeq(G__8291__a,0);
}
return cljs$core$some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, G__8290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$some_fn.cljs$lang$maxFixedArity = 3;
cljs$core$some_fn.cljs$lang$applyTo = cljs$core$some_fn__4.cljs$lang$applyTo;
cljs$core$some_fn.cljs$core$IFn$_invoke$arity$1 = cljs$core$some_fn__1;
cljs$core$some_fn.cljs$core$IFn$_invoke$arity$2 = cljs$core$some_fn__2;
cljs$core$some_fn.cljs$core$IFn$_invoke$arity$3 = cljs$core$some_fn__3;
cljs$core$some_fn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$some_fn;
})()
;
/**
 * Returns a lazy sequence consisting of the result of applying f to
 * the set of first items of each coll, followed by applying f to the
 * set of second items in each coll, until any one of the colls is
 * exhausted.  Any remaining items in other colls are ignored. Function
 * f should accept number-of-colls arguments. Returns a transducer when
 * no collection is provided.
 * @param {...*} var_args
 */
cljs.core.map = (function() {
var cljs$core$map = null;
var cljs$core$map__1 = (function (f){
return (function (rf){
return (function() {
var G__8330 = null;
var G__8330__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8330__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8330__2 = (function (result,input){
var G__8318 = result;
var G__8319 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(input) : f.call(null,input));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__8318,G__8319) : rf.call(null,G__8318,G__8319));
});
var G__8330__3 = (function() { 
var G__8331__delegate = function (result,input,inputs){
var G__8320 = result;
var G__8321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,input,inputs);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__8320,G__8321) : rf.call(null,G__8320,G__8321));
};
var G__8331 = function (result,input,var_args){
var inputs = null;
if (arguments.length > 2) {
var G__8332__i = 0, G__8332__a = new Array(arguments.length -  2);
while (G__8332__i < G__8332__a.length) {G__8332__a[G__8332__i] = arguments[G__8332__i + 2]; ++G__8332__i;}
  inputs = new cljs.core.IndexedSeq(G__8332__a,0);
} 
return G__8331__delegate.call(this,result,input,inputs);};
G__8331.cljs$lang$maxFixedArity = 2;
G__8331.cljs$lang$applyTo = (function (arglist__8333){
var result = cljs.core.first(arglist__8333);
arglist__8333 = cljs.core.next(arglist__8333);
var input = cljs.core.first(arglist__8333);
var inputs = cljs.core.rest(arglist__8333);
return G__8331__delegate(result,input,inputs);
});
G__8331.cljs$core$IFn$_invoke$arity$variadic = G__8331__delegate;
return G__8331;
})()
;
G__8330 = function(result,input,var_args){
var inputs = var_args;
switch(arguments.length){
case 0:
return G__8330__0.call(this);
case 1:
return G__8330__1.call(this,result);
case 2:
return G__8330__2.call(this,result,input);
default:
var G__8334 = null;
if (arguments.length > 2) {
var G__8335__i = 0, G__8335__a = new Array(arguments.length -  2);
while (G__8335__i < G__8335__a.length) {G__8335__a[G__8335__i] = arguments[G__8335__i + 2]; ++G__8335__i;}
G__8334 = new cljs.core.IndexedSeq(G__8335__a,0);
}
return G__8330__3.cljs$core$IFn$_invoke$arity$variadic(result,input, G__8334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8330.cljs$lang$maxFixedArity = 2;
G__8330.cljs$lang$applyTo = G__8330__3.cljs$lang$applyTo;
G__8330.cljs$core$IFn$_invoke$arity$0 = G__8330__0;
G__8330.cljs$core$IFn$_invoke$arity$1 = G__8330__1;
G__8330.cljs$core$IFn$_invoke$arity$2 = G__8330__2;
G__8330.cljs$core$IFn$_invoke$arity$variadic = G__8330__3.cljs$core$IFn$_invoke$arity$variadic;
return G__8330;
})()
});
});
var cljs$core$map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__1441__auto___8336 = size;
var i_8337 = (0);
while(true){
if((i_8337 < n__1441__auto___8336)){
cljs.core.chunk_append(b,(function (){var G__8322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8337);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8322) : f.call(null,G__8322));
})());

var G__8338 = (i_8337 + (1));
i_8337 = G__8338;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),cljs$core$map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else {
return cljs.core.cons((function (){var G__8323 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8323) : f.call(null,G__8323));
})(),cljs$core$map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else {
return null;
}
}),null,null));
});
var cljs$core$map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons((function (){var G__8324 = cljs.core.first(s1);
var G__8325 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8324,G__8325) : f.call(null,G__8324,G__8325));
})(),cljs$core$map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
});
var cljs$core$map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
var s3 = cljs.core.seq(c3);
if((s1) && (s2) && (s3)){
return cljs.core.cons((function (){var G__8326 = cljs.core.first(s1);
var G__8327 = cljs.core.first(s2);
var G__8328 = cljs.core.first(s3);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8326,G__8327,G__8328) : f.call(null,G__8326,G__8327,G__8328));
})(),cljs$core$map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else {
return null;
}
}),null,null));
});
var cljs$core$map__5 = (function() { 
var G__8339__delegate = function (f,c1,c2,c3,colls){
var step = (function cljs$core$map_$_step(cs){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs$core$map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.cons(cljs$core$map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs$core$map_$_step(cljs$core$map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});
return cljs$core$map.cljs$core$IFn$_invoke$arity$2(((function (step){
return (function (p1__8292_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__8292_SHARP_);
});})(step))
,step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__8339 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
var G__8340__i = 0, G__8340__a = new Array(arguments.length -  4);
while (G__8340__i < G__8340__a.length) {G__8340__a[G__8340__i] = arguments[G__8340__i + 4]; ++G__8340__i;}
  colls = new cljs.core.IndexedSeq(G__8340__a,0);
} 
return G__8339__delegate.call(this,f,c1,c2,c3,colls);};
G__8339.cljs$lang$maxFixedArity = 4;
G__8339.cljs$lang$applyTo = (function (arglist__8341){
var f = cljs.core.first(arglist__8341);
arglist__8341 = cljs.core.next(arglist__8341);
var c1 = cljs.core.first(arglist__8341);
arglist__8341 = cljs.core.next(arglist__8341);
var c2 = cljs.core.first(arglist__8341);
arglist__8341 = cljs.core.next(arglist__8341);
var c3 = cljs.core.first(arglist__8341);
var colls = cljs.core.rest(arglist__8341);
return G__8339__delegate(f,c1,c2,c3,colls);
});
G__8339.cljs$core$IFn$_invoke$arity$variadic = G__8339__delegate;
return G__8339;
})()
;
cljs$core$map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return cljs$core$map__1.call(this,f);
case 2:
return cljs$core$map__2.call(this,f,c1);
case 3:
return cljs$core$map__3.call(this,f,c1,c2);
case 4:
return cljs$core$map__4.call(this,f,c1,c2,c3);
default:
var G__8342 = null;
if (arguments.length > 4) {
var G__8343__i = 0, G__8343__a = new Array(arguments.length -  4);
while (G__8343__i < G__8343__a.length) {G__8343__a[G__8343__i] = arguments[G__8343__i + 4]; ++G__8343__i;}
G__8342 = new cljs.core.IndexedSeq(G__8343__a,0);
}
return cljs$core$map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, G__8342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$map.cljs$lang$maxFixedArity = 4;
cljs$core$map.cljs$lang$applyTo = cljs$core$map__5.cljs$lang$applyTo;
cljs$core$map.cljs$core$IFn$_invoke$arity$1 = cljs$core$map__1;
cljs$core$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$map__2;
cljs$core$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$map__3;
cljs$core$map.cljs$core$IFn$_invoke$arity$4 = cljs$core$map__4;
cljs$core$map.cljs$core$IFn$_invoke$arity$variadic = cljs$core$map__5.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$map;
})()
;
/**
 * Returns a lazy sequence of the first n items in coll, or all items if
 * there are fewer than n.  Returns a stateful transducer when
 * no collection is provided.
 */
cljs.core.take = (function() {
var cljs$core$take = null;
var cljs$core$take__1 = (function (n){
return (function (rf){
var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (na){
return (function() {
var G__8346 = null;
var G__8346__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8346__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8346__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
var nn = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);
var result__$1 = (((n__$1 > (0)))?(rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input)):result);
if(!((nn > (0)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__8346 = function(result,input){
switch(arguments.length){
case 0:
return G__8346__0.call(this);
case 1:
return G__8346__1.call(this,result);
case 2:
return G__8346__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8346.cljs$core$IFn$_invoke$arity$0 = G__8346__0;
G__8346.cljs$core$IFn$_invoke$arity$1 = G__8346__1;
G__8346.cljs$core$IFn$_invoke$arity$2 = G__8346__2;
return G__8346;
})()
;})(na))
});
});
var cljs$core$take__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
if((n > (0))){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.cons(cljs.core.first(s),cljs$core$take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
cljs$core$take = function(n,coll){
switch(arguments.length){
case 1:
return cljs$core$take__1.call(this,n);
case 2:
return cljs$core$take__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$take.cljs$core$IFn$_invoke$arity$1 = cljs$core$take__1;
cljs$core$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$take__2;
return cljs$core$take;
})()
;
/**
 * Returns a lazy sequence of all but the first n items in coll.
 * Returns a stateful transducer when no collection is provided.
 */
cljs.core.drop = (function() {
var cljs$core$drop = null;
var cljs$core$drop__1 = (function (n){
return (function (rf){
var na = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(n);
return ((function (na){
return (function() {
var G__8347 = null;
var G__8347__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8347__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8347__2 = (function (result,input){
var n__$1 = cljs.core.deref(na);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(na,cljs.core.dec);

if((n__$1 > (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
}
});
G__8347 = function(result,input){
switch(arguments.length){
case 0:
return G__8347__0.call(this);
case 1:
return G__8347__1.call(this,result);
case 2:
return G__8347__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8347.cljs$core$IFn$_invoke$arity$0 = G__8347__0;
G__8347.cljs$core$IFn$_invoke$arity$1 = G__8347__1;
G__8347.cljs$core$IFn$_invoke$arity$2 = G__8347__2;
return G__8347;
})()
;})(na))
});
});
var cljs$core$drop__2 = (function (n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(((n__$1 > (0))) && (s)){
var G__8348 = (n__$1 - (1));
var G__8349 = cljs.core.rest(s);
n__$1 = G__8348;
coll__$1 = G__8349;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(n,coll);
});})(step))
,null,null));
});
cljs$core$drop = function(n,coll){
switch(arguments.length){
case 1:
return cljs$core$drop__1.call(this,n);
case 2:
return cljs$core$drop__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$drop.cljs$core$IFn$_invoke$arity$1 = cljs$core$drop__1;
cljs$core$drop.cljs$core$IFn$_invoke$arity$2 = cljs$core$drop__2;
return cljs$core$drop;
})()
;
/**
 * Return a lazy sequence of all but the last n (default 1) items in coll
 */
cljs.core.drop_last = (function() {
var cljs$core$drop_last = null;
var cljs$core$drop_last__1 = (function (s){
return cljs$core$drop_last.cljs$core$IFn$_invoke$arity$2((1),s);
});
var cljs$core$drop_last__2 = (function (n,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){
return x;
}),s,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
cljs$core$drop_last = function(n,s){
switch(arguments.length){
case 1:
return cljs$core$drop_last__1.call(this,n);
case 2:
return cljs$core$drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$drop_last.cljs$core$IFn$_invoke$arity$1 = cljs$core$drop_last__1;
cljs$core$drop_last.cljs$core$IFn$_invoke$arity$2 = cljs$core$drop_last__2;
return cljs$core$drop_last;
})()
;
/**
 * Returns a seq of the last n items in coll.  Depending on the type
 * of coll may be no better than linear time.  For vectors, see also subvec.
 */
cljs.core.take_last = (function cljs$core$take_last(n,coll){
var s = cljs.core.seq(coll);
var lead = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll));
while(true){
if(lead){
var G__8350 = cljs.core.next(s);
var G__8351 = cljs.core.next(lead);
s = G__8350;
lead = G__8351;
continue;
} else {
return s;
}
break;
}
});
/**
 * Returns a lazy sequence of the items in coll starting from the
 * first item for which (pred item) returns logical false.  Returns a
 * stateful transducer when no collection is provided.
 */
cljs.core.drop_while = (function() {
var cljs$core$drop_while = null;
var cljs$core$drop_while__1 = (function (pred){
return (function (rf){
var da = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (da){
return (function() {
var G__8356 = null;
var G__8356__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8356__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8356__2 = (function (result,input){
var drop_QMARK_ = cljs.core.deref(da);
if(cljs.core.truth_((function (){var and__547__auto__ = drop_QMARK_;
if(cljs.core.truth_(and__547__auto__)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(input) : pred.call(null,input));
} else {
return and__547__auto__;
}
})())){
return result;
} else {
cljs.core.reset_BANG_(da,null);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
}
});
G__8356 = function(result,input){
switch(arguments.length){
case 0:
return G__8356__0.call(this);
case 1:
return G__8356__1.call(this,result);
case 2:
return G__8356__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8356.cljs$core$IFn$_invoke$arity$0 = G__8356__0;
G__8356.cljs$core$IFn$_invoke$arity$1 = G__8356__1;
G__8356.cljs$core$IFn$_invoke$arity$2 = G__8356__2;
return G__8356;
})()
;})(da))
});
});
var cljs$core$drop_while__2 = (function (pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq(coll__$1);
if(cljs.core.truth_((function (){var and__547__auto__ = s;
if(and__547__auto__){
var G__8355 = cljs.core.first(s);
return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(G__8355) : pred__$1.call(null,G__8355));
} else {
return and__547__auto__;
}
})())){
var G__8357 = pred__$1;
var G__8358 = cljs.core.rest(s);
pred__$1 = G__8357;
coll__$1 = G__8358;
continue;
} else {
return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,((function (step){
return (function (){
return step(pred,coll);
});})(step))
,null,null));
});
cljs$core$drop_while = function(pred,coll){
switch(arguments.length){
case 1:
return cljs$core$drop_while__1.call(this,pred);
case 2:
return cljs$core$drop_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$drop_while.cljs$core$IFn$_invoke$arity$1 = cljs$core$drop_while__1;
cljs$core$drop_while.cljs$core$IFn$_invoke$arity$2 = cljs$core$drop_while__2;
return cljs$core$drop_while;
})()
;
/**
 * Returns a lazy (infinite!) sequence of repetitions of the items in coll.
 */
cljs.core.cycle = (function cljs$core$cycle(coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cljs$core$cycle(s));
} else {
return null;
}
}),null,null));
});
/**
 * Returns a vector of [(take n coll) (drop n coll)]
 */
cljs.core.split_at = (function cljs$core$split_at(n,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,coll)], null);
});
/**
 * Returns a lazy (infinite!, or length n if supplied) sequence of xs.
 */
cljs.core.repeat = (function() {
var cljs$core$repeat = null;
var cljs$core$repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(x,cljs$core$repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var cljs$core$repeat__2 = (function (n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs$core$repeat.cljs$core$IFn$_invoke$arity$1(x));
});
cljs$core$repeat = function(n,x){
switch(arguments.length){
case 1:
return cljs$core$repeat__1.call(this,n);
case 2:
return cljs$core$repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$repeat.cljs$core$IFn$_invoke$arity$1 = cljs$core$repeat__1;
cljs$core$repeat.cljs$core$IFn$_invoke$arity$2 = cljs$core$repeat__2;
return cljs$core$repeat;
})()
;
/**
 * Returns a lazy seq of n xs.
 */
cljs.core.replicate = (function cljs$core$replicate(n,x){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
 * Takes a function of no args, presumably with side effects, and
 * returns an infinite (or length n if supplied) lazy sequence of calls
 * to it
 */
cljs.core.repeatedly = (function() {
var cljs$core$repeatedly = null;
var cljs$core$repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),cljs$core$repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var cljs$core$repeatedly__2 = (function (n,f){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs$core$repeatedly.cljs$core$IFn$_invoke$arity$1(f));
});
cljs$core$repeatedly = function(n,f){
switch(arguments.length){
case 1:
return cljs$core$repeatedly__1.call(this,n);
case 2:
return cljs$core$repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$repeatedly.cljs$core$IFn$_invoke$arity$1 = cljs$core$repeatedly__1;
cljs$core$repeatedly.cljs$core$IFn$_invoke$arity$2 = cljs$core$repeatedly__2;
return cljs$core$repeatedly;
})()
;
/**
 * Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
 */
cljs.core.iterate = (function cljs$core$iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){
return cljs$core$iterate(f,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}),null,null)));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second etc.
 * @param {...*} var_args
 */
cljs.core.interleave = (function() {
var cljs$core$interleave = null;
var cljs$core$interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),cljs$core$interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return null;
}
}),null,null));
});
var cljs$core$interleave__3 = (function() { 
var G__8363__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs$core$interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
};
var G__8363 = function (c1,c2,var_args){
var colls = null;
if (arguments.length > 2) {
var G__8364__i = 0, G__8364__a = new Array(arguments.length -  2);
while (G__8364__i < G__8364__a.length) {G__8364__a[G__8364__i] = arguments[G__8364__i + 2]; ++G__8364__i;}
  colls = new cljs.core.IndexedSeq(G__8364__a,0);
} 
return G__8363__delegate.call(this,c1,c2,colls);};
G__8363.cljs$lang$maxFixedArity = 2;
G__8363.cljs$lang$applyTo = (function (arglist__8365){
var c1 = cljs.core.first(arglist__8365);
arglist__8365 = cljs.core.next(arglist__8365);
var c2 = cljs.core.first(arglist__8365);
var colls = cljs.core.rest(arglist__8365);
return G__8363__delegate(c1,c2,colls);
});
G__8363.cljs$core$IFn$_invoke$arity$variadic = G__8363__delegate;
return G__8363;
})()
;
cljs$core$interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return cljs$core$interleave__2.call(this,c1,c2);
default:
var G__8366 = null;
if (arguments.length > 2) {
var G__8367__i = 0, G__8367__a = new Array(arguments.length -  2);
while (G__8367__i < G__8367__a.length) {G__8367__a[G__8367__i] = arguments[G__8367__i + 2]; ++G__8367__i;}
G__8366 = new cljs.core.IndexedSeq(G__8367__a,0);
}
return cljs$core$interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, G__8366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$interleave.cljs$lang$maxFixedArity = 2;
cljs$core$interleave.cljs$lang$applyTo = cljs$core$interleave__3.cljs$lang$applyTo;
cljs$core$interleave.cljs$core$IFn$_invoke$arity$2 = cljs$core$interleave__2;
cljs$core$interleave.cljs$core$IFn$_invoke$arity$variadic = cljs$core$interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$interleave;
})()
;
/**
 * Returns a lazy seq of the elements of coll separated by sep
 */
cljs.core.interpose = (function cljs$core$interpose(sep,coll){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
 * Take a collection of collections, and return a lazy seq
 * of items from the inner collection
 */
cljs.core.flatten1 = (function cljs$core$flatten1(colls){
var cat = (function cljs$core$flatten1_$_cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,(function (){
var temp__4423__auto__ = cljs.core.seq(coll);
if(temp__4423__auto__){
var coll__$1 = temp__4423__auto__;
return cljs.core.cons(cljs.core.first(coll__$1),cljs$core$flatten1_$_cat(cljs.core.rest(coll__$1),colls__$1));
} else {
if(cljs.core.seq(colls__$1)){
return cljs$core$flatten1_$_cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else {
return null;
}
}
}),null,null));
});
return cat(null,colls);
});
/**
 * Returns the result of applying concat to the result of applying map
 * to f and colls.  Thus function f should return a collection. Returns
 * a transducer when no collections are provided
 * @param {...*} var_args
 */
cljs.core.mapcat = (function() {
var cljs$core$mapcat = null;
var cljs$core$mapcat__1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cat);
});
var cljs$core$mapcat__2 = (function() { 
var G__8376__delegate = function (f,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,colls));
};
var G__8376 = function (f,var_args){
var colls = null;
if (arguments.length > 1) {
var G__8377__i = 0, G__8377__a = new Array(arguments.length -  1);
while (G__8377__i < G__8377__a.length) {G__8377__a[G__8377__i] = arguments[G__8377__i + 1]; ++G__8377__i;}
  colls = new cljs.core.IndexedSeq(G__8377__a,0);
} 
return G__8376__delegate.call(this,f,colls);};
G__8376.cljs$lang$maxFixedArity = 1;
G__8376.cljs$lang$applyTo = (function (arglist__8378){
var f = cljs.core.first(arglist__8378);
var colls = cljs.core.rest(arglist__8378);
return G__8376__delegate(f,colls);
});
G__8376.cljs$core$IFn$_invoke$arity$variadic = G__8376__delegate;
return G__8376;
})()
;
cljs$core$mapcat = function(f,var_args){
var colls = var_args;
switch(arguments.length){
case 1:
return cljs$core$mapcat__1.call(this,f);
default:
var G__8379 = null;
if (arguments.length > 1) {
var G__8380__i = 0, G__8380__a = new Array(arguments.length -  1);
while (G__8380__i < G__8380__a.length) {G__8380__a[G__8380__i] = arguments[G__8380__i + 1]; ++G__8380__i;}
G__8379 = new cljs.core.IndexedSeq(G__8380__a,0);
}
return cljs$core$mapcat__2.cljs$core$IFn$_invoke$arity$variadic(f, G__8379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$mapcat.cljs$lang$maxFixedArity = 1;
cljs$core$mapcat.cljs$lang$applyTo = cljs$core$mapcat__2.cljs$lang$applyTo;
cljs$core$mapcat.cljs$core$IFn$_invoke$arity$1 = cljs$core$mapcat__1;
cljs$core$mapcat.cljs$core$IFn$_invoke$arity$variadic = cljs$core$mapcat__2.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$mapcat;
})()
;
/**
 * Returns a lazy sequence of the items in coll for which
 * (pred item) returns true. pred must be free of side-effects.
 * Returns a transducer when no collection is provided.
 */
cljs.core.filter = (function() {
var cljs$core$filter = null;
var cljs$core$filter__1 = (function (pred){
return (function (rf){
return (function() {
var G__8385 = null;
var G__8385__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__8385__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__8385__2 = (function (result,input){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(input) : pred.call(null,input)))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__8385 = function(result,input){
switch(arguments.length){
case 0:
return G__8385__0.call(this);
case 1:
return G__8385__1.call(this,result);
case 2:
return G__8385__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8385.cljs$core$IFn$_invoke$arity$0 = G__8385__0;
G__8385.cljs$core$IFn$_invoke$arity$1 = G__8385__1;
G__8385.cljs$core$IFn$_invoke$arity$2 = G__8385__2;
return G__8385;
})()
});
});
var cljs$core$filter__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s)){
var c = cljs.core.chunk_first(s);
var size = cljs.core.count(c);
var b = cljs.core.chunk_buffer(size);
var n__1441__auto___8386 = size;
var i_8387 = (0);
while(true){
if((i_8387 < n__1441__auto___8386)){
if(cljs.core.truth_((function (){var G__8384 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8387);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__8384) : pred.call(null,G__8384));
})())){
cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_8387));
} else {
}

var G__8388 = (i_8387 + (1));
i_8387 = G__8388;
continue;
} else {
}
break;
}

return cljs.core.chunk_cons(cljs.core.chunk(b),cljs$core$filter.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.chunk_rest(s)));
} else {
var f = cljs.core.first(s);
var r = cljs.core.rest(s);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(f) : pred.call(null,f)))){
return cljs.core.cons(f,cljs$core$filter.cljs$core$IFn$_invoke$arity$2(pred,r));
} else {
return cljs$core$filter.cljs$core$IFn$_invoke$arity$2(pred,r);
}
}
} else {
return null;
}
}),null,null));
});
cljs$core$filter = function(pred,coll){
switch(arguments.length){
case 1:
return cljs$core$filter__1.call(this,pred);
case 2:
return cljs$core$filter__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$filter.cljs$core$IFn$_invoke$arity$1 = cljs$core$filter__1;
cljs$core$filter.cljs$core$IFn$_invoke$arity$2 = cljs$core$filter__2;
return cljs$core$filter;
})()
;
/**
 * Returns a lazy sequence of the items in coll for which
 * (pred item) returns false. pred must be free of side-effects.
 * Returns a transducer when no collection is provided.
 */
cljs.core.remove = (function() {
var cljs$core$remove = null;
var cljs$core$remove__1 = (function (pred){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(pred));
});
var cljs$core$remove__2 = (function (pred,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll);
});
cljs$core$remove = function(pred,coll){
switch(arguments.length){
case 1:
return cljs$core$remove__1.call(this,pred);
case 2:
return cljs$core$remove__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$remove.cljs$core$IFn$_invoke$arity$1 = cljs$core$remove__1;
cljs$core$remove.cljs$core$IFn$_invoke$arity$2 = cljs$core$remove__2;
return cljs$core$remove;
})()
;
/**
 * Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
 * branch? must be a fn of one arg that returns true if passed a node
 * that can have children (but may not).  children must be a fn of one
 * arg that returns a sequence of the children. Will only be called on
 * nodes for which branch? returns true. Root is the root node of the
 * tree.
 */
cljs.core.tree_seq = (function cljs$core$tree_seq(branch_QMARK_,children,root){
var walk = (function cljs$core$tree_seq_$_walk(node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs$core$tree_seq_$_walk,cljs.core.array_seq([(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node))], 0)):null));
}),null,null));
});
return walk(root);
});
/**
 * Takes any nested combination of sequential things (lists, vectors,
 * etc.) and returns their contents as a single, flat sequence.
 * (flatten nil) returns nil.
 */
cljs.core.flatten = (function cljs$core$flatten(x){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8389_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__8389_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
 * Returns a new coll consisting of to-coll with all of the items of
 * from-coll conjoined. A transducer may be supplied.
 */
cljs.core.into = (function() {
var cljs$core$into = null;
var cljs$core$into__2 = (function (to,from){
if(!((to == null))){
if((function (){var G__8392 = to;
if(G__8392){
var bit__1228__auto__ = (G__8392.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__1228__auto__) || (G__8392.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
var cljs$core$into__3 = (function (to,xform,from){
if((function (){var G__8393 = to;
if(G__8393){
var bit__1228__auto__ = (G__8393.cljs$lang$protocol_mask$partition1$ & (4));
if((bit__1228__auto__) || (G__8393.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,cljs.core.transient$(to),from)),cljs.core.meta(to));
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj,to,from);
}
});
cljs$core$into = function(to,xform,from){
switch(arguments.length){
case 2:
return cljs$core$into__2.call(this,to,xform);
case 3:
return cljs$core$into__3.call(this,to,xform,from);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$into.cljs$core$IFn$_invoke$arity$2 = cljs$core$into__2;
cljs$core$into.cljs$core$IFn$_invoke$arity$3 = cljs$core$into__3;
return cljs$core$into;
})()
;
/**
 * Returns a vector consisting of the result of applying f to the
 * set of first items of each coll, followed by applying f to the set
 * of second items in each coll, until any one of the colls is
 * exhausted.  Any remaining items in other colls are ignored. Function
 * f should accept number-of-colls arguments.
 * @param {...*} var_args
 */
cljs.core.mapv = (function() {
var cljs$core$mapv = null;
var cljs$core$mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var cljs$core$mapv__3 = (function (f,c1,c2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var cljs$core$mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var cljs$core$mapv__5 = (function() { 
var G__8394__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__8394 = function (f,c1,c2,c3,var_args){
var colls = null;
if (arguments.length > 4) {
var G__8395__i = 0, G__8395__a = new Array(arguments.length -  4);
while (G__8395__i < G__8395__a.length) {G__8395__a[G__8395__i] = arguments[G__8395__i + 4]; ++G__8395__i;}
  colls = new cljs.core.IndexedSeq(G__8395__a,0);
} 
return G__8394__delegate.call(this,f,c1,c2,c3,colls);};
G__8394.cljs$lang$maxFixedArity = 4;
G__8394.cljs$lang$applyTo = (function (arglist__8396){
var f = cljs.core.first(arglist__8396);
arglist__8396 = cljs.core.next(arglist__8396);
var c1 = cljs.core.first(arglist__8396);
arglist__8396 = cljs.core.next(arglist__8396);
var c2 = cljs.core.first(arglist__8396);
arglist__8396 = cljs.core.next(arglist__8396);
var c3 = cljs.core.first(arglist__8396);
var colls = cljs.core.rest(arglist__8396);
return G__8394__delegate(f,c1,c2,c3,colls);
});
G__8394.cljs$core$IFn$_invoke$arity$variadic = G__8394__delegate;
return G__8394;
})()
;
cljs$core$mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return cljs$core$mapv__2.call(this,f,c1);
case 3:
return cljs$core$mapv__3.call(this,f,c1,c2);
case 4:
return cljs$core$mapv__4.call(this,f,c1,c2,c3);
default:
var G__8397 = null;
if (arguments.length > 4) {
var G__8398__i = 0, G__8398__a = new Array(arguments.length -  4);
while (G__8398__i < G__8398__a.length) {G__8398__a[G__8398__i] = arguments[G__8398__i + 4]; ++G__8398__i;}
G__8397 = new cljs.core.IndexedSeq(G__8398__a,0);
}
return cljs$core$mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, G__8397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$mapv.cljs$lang$maxFixedArity = 4;
cljs$core$mapv.cljs$lang$applyTo = cljs$core$mapv__5.cljs$lang$applyTo;
cljs$core$mapv.cljs$core$IFn$_invoke$arity$2 = cljs$core$mapv__2;
cljs$core$mapv.cljs$core$IFn$_invoke$arity$3 = cljs$core$mapv__3;
cljs$core$mapv.cljs$core$IFn$_invoke$arity$4 = cljs$core$mapv__4;
cljs$core$mapv.cljs$core$IFn$_invoke$arity$variadic = cljs$core$mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$mapv;
})()
;
/**
 * Returns a vector of the items in coll for which
 * (pred item) returns true. pred must be free of side-effects.
 */
cljs.core.filterv = (function cljs$core$filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,o);
} else {
return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
 * Returns a lazy sequence of lists of n items each, at offsets step
 * apart. If step is not supplied, defaults to n, i.e. the partitions
 * do not overlap. If a pad collection is supplied, use its elements as
 * necessary to complete last partition upto n items. In case there are
 * not enough padding elements, return a partition with less than n items.
 */
cljs.core.partition = (function() {
var cljs$core$partition = null;
var cljs$core$partition__2 = (function (n,coll){
return cljs$core$partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var cljs$core$partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,cljs$core$partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
var cljs$core$partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var p = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s);
if((n === cljs.core.count(p))){
return cljs.core.cons(p,cljs$core$partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
}
} else {
return null;
}
}),null,null));
});
cljs$core$partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return cljs$core$partition__2.call(this,n,step);
case 3:
return cljs$core$partition__3.call(this,n,step,pad);
case 4:
return cljs$core$partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$partition__2;
cljs$core$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$partition__3;
cljs$core$partition.cljs$core$IFn$_invoke$arity$4 = cljs$core$partition__4;
return cljs$core$partition;
})()
;
/**
 * Returns the value in a nested associative structure,
 * where ks is a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 */
cljs.core.get_in = (function() {
var cljs$core$get_in = null;
var cljs$core$get_in__2 = (function (m,ks){
return cljs$core$get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var cljs$core$get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
if(!((function (){var G__8407 = m__$1;
if(G__8407){
var bit__1235__auto__ = (G__8407.cljs$lang$protocol_mask$partition0$ & (256));
if((bit__1235__auto__) || (G__8407.cljs$core$ILookup$)){
return true;
} else {
if((!G__8407.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__8407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__8407);
}
})())){
return not_found;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);
if((sentinel === m__$2)){
return not_found;
} else {
var G__8408 = sentinel;
var G__8409 = m__$2;
var G__8410 = cljs.core.next(ks__$1);
sentinel = G__8408;
m__$1 = G__8409;
ks__$1 = G__8410;
continue;
}
}
} else {
return m__$1;
}
break;
}
});
cljs$core$get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return cljs$core$get_in__2.call(this,m,ks);
case 3:
return cljs$core$get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$get_in.cljs$core$IFn$_invoke$arity$2 = cljs$core$get_in__2;
cljs$core$get_in.cljs$core$IFn$_invoke$arity$3 = cljs$core$get_in__3;
return cljs$core$get_in;
})()
;
/**
 * Associates a value in a nested associative structure, where ks is a
 * sequence of keys and v is the new value and returns a new nested structure.
 * If any levels do not exist, hash-maps will be created.
 */
cljs.core.assoc_in = (function cljs$core$assoc_in(m,p__8411,v){
var vec__8416 = p__8411;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8416,(0),null);
var ks = cljs.core.nthnext(vec__8416,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs$core$assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
/**
 * 'Updates' a value in a nested associative structure, where ks is a
 * sequence of keys and f is a function that will take the old value
 * and any supplied args and return the new value, and returns a new
 * nested structure.  If any levels do not exist, hash-maps will be
 * created.
 * @param {...*} var_args
 */
cljs.core.update_in = (function() {
var cljs$core$update_in = null;
var cljs$core$update_in__3 = (function (m,p__8417,f){
var vec__8455 = p__8417;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8455,(0),null);
var ks = cljs.core.nthnext(vec__8455,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs$core$update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8456) : f.call(null,G__8456));
})());
}
});
var cljs$core$update_in__4 = (function (m,p__8418,f,a){
var vec__8457 = p__8418;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8457,(0),null);
var ks = cljs.core.nthnext(vec__8457,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs$core$update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8459 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8458,G__8459) : f.call(null,G__8458,G__8459));
})());
}
});
var cljs$core$update_in__5 = (function (m,p__8419,f,a,b){
var vec__8460 = p__8419;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8460,(0),null);
var ks = cljs.core.nthnext(vec__8460,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs$core$update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8462 = a;
var G__8463 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8461,G__8462,G__8463) : f.call(null,G__8461,G__8462,G__8463));
})());
}
});
var cljs$core$update_in__6 = (function (m,p__8420,f,a,b,c){
var vec__8464 = p__8420;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8464,(0),null);
var ks = cljs.core.nthnext(vec__8464,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs$core$update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8466 = a;
var G__8467 = b;
var G__8468 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__8465,G__8466,G__8467,G__8468) : f.call(null,G__8465,G__8466,G__8467,G__8468));
})());
}
});
var cljs$core$update_in__7 = (function() { 
var G__8470__delegate = function (m,p__8421,f,a,b,c,args){
var vec__8469 = p__8421;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8469,(0),null);
var ks = cljs.core.nthnext(vec__8469,(1));
if(cljs.core.truth_(ks)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs$core$update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__8470 = function (m,p__8421,f,a,b,c,var_args){
var args = null;
if (arguments.length > 6) {
var G__8471__i = 0, G__8471__a = new Array(arguments.length -  6);
while (G__8471__i < G__8471__a.length) {G__8471__a[G__8471__i] = arguments[G__8471__i + 6]; ++G__8471__i;}
  args = new cljs.core.IndexedSeq(G__8471__a,0);
} 
return G__8470__delegate.call(this,m,p__8421,f,a,b,c,args);};
G__8470.cljs$lang$maxFixedArity = 6;
G__8470.cljs$lang$applyTo = (function (arglist__8472){
var m = cljs.core.first(arglist__8472);
arglist__8472 = cljs.core.next(arglist__8472);
var p__8421 = cljs.core.first(arglist__8472);
arglist__8472 = cljs.core.next(arglist__8472);
var f = cljs.core.first(arglist__8472);
arglist__8472 = cljs.core.next(arglist__8472);
var a = cljs.core.first(arglist__8472);
arglist__8472 = cljs.core.next(arglist__8472);
var b = cljs.core.first(arglist__8472);
arglist__8472 = cljs.core.next(arglist__8472);
var c = cljs.core.first(arglist__8472);
var args = cljs.core.rest(arglist__8472);
return G__8470__delegate(m,p__8421,f,a,b,c,args);
});
G__8470.cljs$core$IFn$_invoke$arity$variadic = G__8470__delegate;
return G__8470;
})()
;
cljs$core$update_in = function(m,p__8421,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return cljs$core$update_in__3.call(this,m,p__8421,f);
case 4:
return cljs$core$update_in__4.call(this,m,p__8421,f,a);
case 5:
return cljs$core$update_in__5.call(this,m,p__8421,f,a,b);
case 6:
return cljs$core$update_in__6.call(this,m,p__8421,f,a,b,c);
default:
var G__8473 = null;
if (arguments.length > 6) {
var G__8474__i = 0, G__8474__a = new Array(arguments.length -  6);
while (G__8474__i < G__8474__a.length) {G__8474__a[G__8474__i] = arguments[G__8474__i + 6]; ++G__8474__i;}
G__8473 = new cljs.core.IndexedSeq(G__8474__a,0);
}
return cljs$core$update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__8421,f,a,b,c, G__8473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$update_in.cljs$lang$maxFixedArity = 6;
cljs$core$update_in.cljs$lang$applyTo = cljs$core$update_in__7.cljs$lang$applyTo;
cljs$core$update_in.cljs$core$IFn$_invoke$arity$3 = cljs$core$update_in__3;
cljs$core$update_in.cljs$core$IFn$_invoke$arity$4 = cljs$core$update_in__4;
cljs$core$update_in.cljs$core$IFn$_invoke$arity$5 = cljs$core$update_in__5;
cljs$core$update_in.cljs$core$IFn$_invoke$arity$6 = cljs$core$update_in__6;
cljs$core$update_in.cljs$core$IFn$_invoke$arity$variadic = cljs$core$update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$update_in;
})()
;
/**
 * 'Updates' a value in an associative structure, where k is a
 * key and f is a function that will take the old value
 * and any supplied args and return the new value, and returns a new
 * structure.  If the key does not exist, nil is passed as the old value.
 * @param {...*} var_args
 */
cljs.core.update = (function() {
var cljs$core$update = null;
var cljs$core$update__3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8485) : f.call(null,G__8485));
})());
});
var cljs$core$update__4 = (function (m,k,f,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8487 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8486,G__8487) : f.call(null,G__8486,G__8487));
})());
});
var cljs$core$update__5 = (function (m,k,f,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8489 = x;
var G__8490 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8488,G__8489,G__8490) : f.call(null,G__8488,G__8489,G__8490));
})());
});
var cljs$core$update__6 = (function (m,k,f,x,y,z){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8492 = x;
var G__8493 = y;
var G__8494 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__8491,G__8492,G__8493,G__8494) : f.call(null,G__8491,G__8492,G__8493,G__8494));
})());
});
var cljs$core$update__7 = (function() { 
var G__8495__delegate = function (m,k,f,x,y,z,more){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x,y,z,cljs.core.array_seq([more], 0)));
};
var G__8495 = function (m,k,f,x,y,z,var_args){
var more = null;
if (arguments.length > 6) {
var G__8496__i = 0, G__8496__a = new Array(arguments.length -  6);
while (G__8496__i < G__8496__a.length) {G__8496__a[G__8496__i] = arguments[G__8496__i + 6]; ++G__8496__i;}
  more = new cljs.core.IndexedSeq(G__8496__a,0);
} 
return G__8495__delegate.call(this,m,k,f,x,y,z,more);};
G__8495.cljs$lang$maxFixedArity = 6;
G__8495.cljs$lang$applyTo = (function (arglist__8497){
var m = cljs.core.first(arglist__8497);
arglist__8497 = cljs.core.next(arglist__8497);
var k = cljs.core.first(arglist__8497);
arglist__8497 = cljs.core.next(arglist__8497);
var f = cljs.core.first(arglist__8497);
arglist__8497 = cljs.core.next(arglist__8497);
var x = cljs.core.first(arglist__8497);
arglist__8497 = cljs.core.next(arglist__8497);
var y = cljs.core.first(arglist__8497);
arglist__8497 = cljs.core.next(arglist__8497);
var z = cljs.core.first(arglist__8497);
var more = cljs.core.rest(arglist__8497);
return G__8495__delegate(m,k,f,x,y,z,more);
});
G__8495.cljs$core$IFn$_invoke$arity$variadic = G__8495__delegate;
return G__8495;
})()
;
cljs$core$update = function(m,k,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return cljs$core$update__3.call(this,m,k,f);
case 4:
return cljs$core$update__4.call(this,m,k,f,x);
case 5:
return cljs$core$update__5.call(this,m,k,f,x,y);
case 6:
return cljs$core$update__6.call(this,m,k,f,x,y,z);
default:
var G__8498 = null;
if (arguments.length > 6) {
var G__8499__i = 0, G__8499__a = new Array(arguments.length -  6);
while (G__8499__i < G__8499__a.length) {G__8499__a[G__8499__i] = arguments[G__8499__i + 6]; ++G__8499__i;}
G__8498 = new cljs.core.IndexedSeq(G__8499__a,0);
}
return cljs$core$update__7.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x,y,z, G__8498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$update.cljs$lang$maxFixedArity = 6;
cljs$core$update.cljs$lang$applyTo = cljs$core$update__7.cljs$lang$applyTo;
cljs$core$update.cljs$core$IFn$_invoke$arity$3 = cljs$core$update__3;
cljs$core$update.cljs$core$IFn$_invoke$arity$4 = cljs$core$update__4;
cljs$core$update.cljs$core$IFn$_invoke$arity$5 = cljs$core$update__5;
cljs$core$update.cljs$core$IFn$_invoke$arity$6 = cljs$core$update__6;
cljs$core$update.cljs$core$IFn$_invoke$arity$variadic = cljs$core$update__7.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$update;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})

cljs.core.VectorNode.cljs$lang$type = true;

cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";

cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/VectorNode");
});

cljs.core.__GT_VectorNode = (function cljs$core$__GT_VectorNode(edit,arr){
return (new cljs.core.VectorNode(edit,arr));
});

cljs.core.pv_fresh_node = (function cljs$core$pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function cljs$core$pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function cljs$core$pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function cljs$core$pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
cljs.core.tail_off = (function cljs$core$tail_off(pv){
var cnt = pv.cnt;
if((cnt < (32))){
return (0);
} else {
return (((cnt - (1)) >>> (5)) << (5));
}
});
cljs.core.new_path = (function cljs$core$new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === (0))){
return ret;
} else {
var embed = ret;
var r = cljs.core.pv_fresh_node(edit);
var _ = cljs.core.pv_aset(r,(0),embed);
var G__8500 = (ll - (5));
var G__8501 = r;
ll = G__8500;
ret = G__8501;
continue;
}
break;
}
});
cljs.core.push_tail = (function cljs$core$push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node(parent);
var subidx = (((pv.cnt - (1)) >>> level) & (31));
if(((5) === level)){
cljs.core.pv_aset(ret,subidx,tailnode);

return ret;
} else {
var child = cljs.core.pv_aget(parent,subidx);
if(!((child == null))){
var node_to_insert = cljs$core$push_tail(pv,(level - (5)),child,tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
} else {
var node_to_insert = cljs.core.new_path(null,(level - (5)),tailnode);
cljs.core.pv_aset(ret,subidx,node_to_insert);

return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function cljs$core$vector_index_out_of_bounds(i,cnt){
throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.first_array_for_longvec = (function cljs$core$first_array_for_longvec(pv){
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__8506 = cljs.core.pv_aget(node,(0));
var G__8507 = (level - (5));
node = G__8506;
level = G__8507;
continue;
} else {
return node.arr;
}
break;
}
});
cljs.core.unchecked_array_for = (function cljs$core$unchecked_array_for(pv,i){
if((i >= cljs.core.tail_off(pv))){
return pv.tail;
} else {
var node = pv.root;
var level = pv.shift;
while(true){
if((level > (0))){
var G__8508 = cljs.core.pv_aget(node,((i >>> level) & (31)));
var G__8509 = (level - (5));
node = G__8508;
level = G__8509;
continue;
} else {
return node.arr;
}
break;
}
}
});
cljs.core.array_for = (function cljs$core$array_for(pv,i){
if((((0) <= i)) && ((i < pv.cnt))){
return cljs.core.unchecked_array_for(pv,i);
} else {
return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function cljs$core$do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node(node);
if((level === (0))){
cljs.core.pv_aset(ret,(i & (31)),val);

return ret;
} else {
var subidx = ((i >>> level) & (31));
cljs.core.pv_aset(ret,subidx,cljs$core$do_assoc(pv,(level - (5)),cljs.core.pv_aget(node,subidx),i,val));

return ret;
}
});
cljs.core.pop_tail = (function cljs$core$pop_tail(pv,level,node){
var subidx = (((pv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = cljs$core$pop_tail(pv,(level - (5)),cljs.core.pv_aget(node,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,new_child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var ret = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret,subidx,null);

return ret;

}
}
});

/**
* @constructor
*/
cljs.core.RangedIterator = (function (i,base,arr,v,start,end){
this.i = i;
this.base = base;
this.arr = arr;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.RangedIterator.prototype.hasNext = (function (){
var self__ = this;
var this$ = this;
return (self__.i < self__.end);
});

cljs.core.RangedIterator.prototype.next = (function (){
var self__ = this;
var this$ = this;
if(((self__.i - self__.base) === (32))){
self__.arr = cljs.core.unchecked_array_for(self__.v,self__.i);

self__.base = (self__.base + (32));
} else {
}

var ret = (self__.arr[(self__.i & (31))]);
self__.i = (self__.i + (1));

return ret;
});

cljs.core.RangedIterator.cljs$lang$type = true;

cljs.core.RangedIterator.cljs$lang$ctorStr = "cljs.core/RangedIterator";

cljs.core.RangedIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/RangedIterator");
});

cljs.core.__GT_RangedIterator = (function cljs$core$__GT_RangedIterator(i,base,arr,v,start,end){
return (new cljs.core.RangedIterator(i,base,arr,v,start,end));
});

cljs.core.ranged_iterator = (function cljs$core$ranged_iterator(v,start,end){
var i = start;
return (new cljs.core.RangedIterator(i,(i - (i % (32))),(((start < cljs.core.count(v)))?cljs.core.unchecked_array_for(v,i):null),v,start,end));
});







/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentVector.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__8519 = init__$2;
var G__8520 = (j + i);
var G__8521 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8519,G__8520,G__8521) : f.call(null,G__8519,G__8520,G__8521));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__8528 = (j + (1));
var G__8529 = init__$3;
j = G__8528;
init__$2 = G__8529;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8530 = (i + len);
var G__8531 = init__$2;
i = G__8530;
init__$1 = G__8531;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
});

cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return (cljs.core.unchecked_array_for(coll__$1,n)[(n & (31))]);
} else {
return not_found;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(coll__$1) <= n)){
var new_tail = cljs.core.aclone(self__.tail);
(new_tail[(n & (31))] = val);

return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,n,val),self__.tail,null));
}
} else {
if((n === self__.cnt)){
return cljs.core._conj(coll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.ranged_iterator(this$__$1,(0),self__.cnt);
});

cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(0));
});

cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(1));
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - (1)));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if(((1) < (self__.cnt - cljs.core.tail_off(coll__$1)))){
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - (1)),self__.shift,self__.root,self__.tail.slice((0),(-1)),null));
} else {
var new_tail = cljs.core.unchecked_array_for(coll__$1,(self__.cnt - (2)));
var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - (1));
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - (5)),cljs.core.pv_aget(new_root,(0)),new_tail,null));
} else {
return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}

}
}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(coll__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((other instanceof cljs.core.PersistentVector)){
if((self__.cnt === cljs.core.count(other))){
var me_iter = cljs.core._iterator(coll__$1);
var you_iter = cljs.core._iterator(other);
while(true){
if(cljs.core.truth_(me_iter.hasNext())){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_sequential(coll__$1,other);
}
});

cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,(cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(self__.root) : cljs.core.tv_editable_root.call(null,self__.root)),(cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(self__.tail) : cljs.core.tv_editable_tail.call(null,self__.tail))));
});

cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
var v__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});

cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var v__$1 = this;
var i = (0);
var init__$1 = init;
while(true){
if((i < self__.cnt)){
var arr = cljs.core.unchecked_array_for(v__$1,i);
var len = arr.length;
var init__$2 = (function (){var j = (0);
var init__$2 = init__$1;
while(true){
if((j < len)){
var init__$3 = (function (){var G__8522 = init__$2;
var G__8523 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8522,G__8523) : f.call(null,G__8522,G__8523));
})();
if(cljs.core.reduced_QMARK_(init__$3)){
return init__$3;
} else {
var G__8532 = (j + (1));
var G__8533 = init__$3;
j = G__8532;
init__$2 = G__8533;
continue;
}
} else {
return init__$2;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8534 = (i + len);
var G__8535 = init__$2;
i = G__8534;
init__$1 = G__8535;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._assoc_n(coll__$1,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});

cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((self__.cnt <= (32))){
return (new cljs.core.IndexedSeq(self__.tail,(0)));
} else {
var G__8524 = coll__$1;
var G__8525 = cljs.core.first_array_for_longvec(coll__$1);
var G__8526 = (0);
var G__8527 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8524,G__8525,G__8526,G__8527) : cljs.core.chunked_seq.call(null,G__8524,G__8525,G__8526,G__8527));

}
}
});

cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});

cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(((self__.cnt - cljs.core.tail_off(coll__$1)) < (32))){
var len = self__.tail.length;
var new_tail = (new Array((len + (1))));
var n__1441__auto___8536 = len;
var i_8537 = (0);
while(true){
if((i_8537 < n__1441__auto___8536)){
(new_tail[i_8537] = (self__.tail[i_8537]));

var G__8538 = (i_8537 + (1));
i_8537 = G__8538;
continue;
} else {
}
break;
}

(new_tail[len] = o);

return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),self__.shift,self__.root,new_tail,null));
} else {
var root_overflow_QMARK_ = ((self__.cnt >>> (5)) > ((1) << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + (5)):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r,(0),self__.root);

cljs.core.pv_aset(n_r,(1),cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));

return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + (1)),new_shift,new_root,[o],null));
}
});

cljs.core.PersistentVector.prototype.call = (function() {
var G__8539 = null;
var G__8539__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__8539__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__8539 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8539__2.call(this,self__,k);
case 3:
return G__8539__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8539.cljs$core$IFn$_invoke$arity$2 = G__8539__2;
G__8539.cljs$core$IFn$_invoke$arity$3 = G__8539__3;
return G__8539;
})()
;

cljs.core.PersistentVector.prototype.apply = (function (self__,args8518){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8518)));
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.PersistentVector.cljs$lang$type = true;

cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";

cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentVector");
});

cljs.core.__GT_PersistentVector = (function cljs$core$__GT_PersistentVector(meta,cnt,shift,root,tail,__hash){
return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});

cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,(0),(5),cljs.core.PersistentVector.EMPTY_NODE,[],(0)));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));
if((l < (32))){
return (new cljs.core.PersistentVector(null,l,(5),cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else {
var node = xs__$1.slice((0),(32));
var v = (new cljs.core.PersistentVector(null,(32),(5),cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = (32);
var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);
while(true){
if((i < l)){
var G__8540 = (i + (1));
var G__8541 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(xs__$1[i]));
i = G__8540;
out = G__8541;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentVector.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.vec = (function cljs$core$vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
 * @param {...*} var_args
 */
cljs.core.vector = (function() { 
var cljs$core$vector__delegate = function (args){
if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === (0)))){
return cljs.core.PersistentVector.fromArray(args.arr,true);
} else {
return cljs.core.vec(args);
}
};
var cljs$core$vector = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8542__i = 0, G__8542__a = new Array(arguments.length -  0);
while (G__8542__i < G__8542__a.length) {G__8542__a[G__8542__i] = arguments[G__8542__i + 0]; ++G__8542__i;}
  args = new cljs.core.IndexedSeq(G__8542__a,0);
} 
return cljs$core$vector__delegate.call(this,args);};
cljs$core$vector.cljs$lang$maxFixedArity = 0;
cljs$core$vector.cljs$lang$applyTo = (function (arglist__8543){
var args = cljs.core.seq(arglist__8543);
return cljs$core$vector__delegate(args);
});
cljs$core$vector.cljs$core$IFn$_invoke$arity$variadic = cljs$core$vector__delegate;
return cljs$core$vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375020;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ChunkedSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__8544 = self__.vec;
var G__8545 = self__.node;
var G__8546 = self__.i;
var G__8547 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8544,G__8545,G__8546,G__8547) : cljs.core.chunked_seq.call(null,G__8544,G__8545,G__8546,G__8547));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return cljs.core._chunked_next(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((function (){var G__8548 = self__.vec;
var G__8549 = (self__.i + self__.off);
var G__8550 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__8548,G__8549,G__8550) : cljs.core.subvec.call(null,G__8548,G__8549,G__8550));
})(),f);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((function (){var G__8551 = self__.vec;
var G__8552 = (self__.i + self__.off);
var G__8553 = cljs.core.count(self__.vec);
return (cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__8551,G__8552,G__8553) : cljs.core.subvec.call(null,G__8551,G__8552,G__8553));
})(),f,start);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__8554 = self__.vec;
var G__8555 = self__.node;
var G__8556 = self__.i;
var G__8557 = (self__.off + (1));
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8554,G__8555,G__8556,G__8557) : cljs.core.chunked_seq.call(null,G__8554,G__8555,G__8556,G__8557));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return cljs.core._chunked_rest(coll__$1);
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__8558 = self__.vec;
var G__8559 = cljs.core.unchecked_array_for(self__.vec,end);
var G__8560 = end;
var G__8561 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8558,G__8559,G__8560,G__8561) : cljs.core.chunked_seq.call(null,G__8558,G__8559,G__8560,G__8561));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
});

cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var end = (self__.i + self__.node.length);
if((end < cljs.core._count(self__.vec))){
var G__8562 = self__.vec;
var G__8563 = cljs.core.unchecked_array_for(self__.vec,end);
var G__8564 = end;
var G__8565 = (0);
return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(G__8562,G__8563,G__8564,G__8565) : cljs.core.chunked_seq.call(null,G__8562,G__8563,G__8564,G__8565));
} else {
return null;
}
});

cljs.core.ChunkedSeq.cljs$lang$type = true;

cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";

cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ChunkedSeq");
});

cljs.core.__GT_ChunkedSeq = (function cljs$core$__GT_ChunkedSeq(vec,node,i,off,meta,__hash){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});

(cljs.core.ChunkedSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.chunked_seq = (function() {
var cljs$core$chunked_seq = null;
var cljs$core$chunked_seq__3 = (function (vec,i,off){
return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
});
var cljs$core$chunked_seq__4 = (function (vec,node,i,off){
return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var cljs$core$chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
cljs$core$chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return cljs$core$chunked_seq__3.call(this,vec,node,i);
case 4:
return cljs$core$chunked_seq__4.call(this,vec,node,i,off);
case 5:
return cljs$core$chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$chunked_seq.cljs$core$IFn$_invoke$arity$3 = cljs$core$chunked_seq__3;
cljs$core$chunked_seq.cljs$core$IFn$_invoke$arity$4 = cljs$core$chunked_seq__4;
cljs$core$chunked_seq.cljs$core$IFn$_invoke$arity$5 = cljs$core$chunked_seq__5;
return cljs$core$chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 166617887;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Subvec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});

cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if(((n < (0))) || ((self__.end <= (self__.start + n)))){
return not_found;
} else {
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});

cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
var coll__$1 = this;
var v_pos = (self__.start + n);
var G__8567 = self__.meta;
var G__8568 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val);
var G__8569 = self__.start;
var G__8570 = (function (){var x__871__auto__ = self__.end;
var y__872__auto__ = (v_pos + (1));
return ((x__871__auto__ > y__872__auto__) ? x__871__auto__ : y__872__auto__);
})();
var G__8571 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__8567,G__8568,G__8569,G__8570,G__8571) : cljs.core.build_subvec.call(null,G__8567,G__8568,G__8569,G__8570,G__8571));
});

cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.end - self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - (1)));
});

cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.start === self__.end)){
throw (new Error("Can't pop empty vector"));
} else {
var G__8572 = self__.meta;
var G__8573 = self__.v;
var G__8574 = self__.start;
var G__8575 = (self__.end - (1));
var G__8576 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__8572,G__8573,G__8574,G__8575,G__8576) : cljs.core.build_subvec.call(null,G__8572,G__8573,G__8574,G__8575,G__8576));
}
});

cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(!((self__.start === self__.end))){
return (new cljs.core.RSeq(coll__$1,((self__.end - self__.start) - (1)),null));
} else {
return null;
}
});

cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});

cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});

cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var coll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n(coll__$1,key,val);
} else {
throw (new Error("Subvec's key for assoc must be a number."));
}
});

cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var subvec_seq = ((function (coll__$1){
return (function cljs$core$subvec_seq(i){
if((i === self__.end)){
return null;
} else {
return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
return cljs$core$subvec_seq((i + (1)));
});})(coll__$1))
,null,null)));
}
});})(coll__$1))
;
return subvec_seq(self__.start);
});

cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(meta__$1,self__.v,self__.start,self__.end,self__.__hash) : cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});

cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
var G__8578 = self__.meta;
var G__8579 = cljs.core._assoc_n(self__.v,self__.end,o);
var G__8580 = self__.start;
var G__8581 = (self__.end + (1));
var G__8582 = null;
return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(G__8578,G__8579,G__8580,G__8581,G__8582) : cljs.core.build_subvec.call(null,G__8578,G__8579,G__8580,G__8581,G__8582));
});

cljs.core.Subvec.prototype.call = (function() {
var G__8583 = null;
var G__8583__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__8583__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__8583 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8583__2.call(this,self__,k);
case 3:
return G__8583__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8583.cljs$core$IFn$_invoke$arity$2 = G__8583__2;
G__8583.cljs$core$IFn$_invoke$arity$3 = G__8583__3;
return G__8583;
})()
;

cljs.core.Subvec.prototype.apply = (function (self__,args8566){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8566)));
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});

cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

cljs.core.Subvec.cljs$lang$type = true;

cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";

cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Subvec");
});

cljs.core.__GT_Subvec = (function cljs$core$__GT_Subvec(meta,v,start,end,__hash){
return (new cljs.core.Subvec(meta,v,start,end,__hash));
});

(cljs.core.Subvec.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.build_subvec = (function cljs$core$build_subvec(meta,v,start,end,__hash){
while(true){
if((v instanceof cljs.core.Subvec)){
var G__8584 = meta;
var G__8585 = v.v;
var G__8586 = (v.start + start);
var G__8587 = (v.start + end);
var G__8588 = __hash;
meta = G__8584;
v = G__8585;
start = G__8586;
end = G__8587;
__hash = G__8588;
continue;
} else {
var c = cljs.core.count(v);
if(((start < (0))) || ((end < (0))) || ((start > c)) || ((end > c))){
throw (new Error("Index out of bounds"));
} else {
}

return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
 * Returns a persistent vector of the items in vector from
 * start (inclusive) to end (exclusive).  If end is not supplied,
 * defaults to (count vector). This operation is O(1) and very fast, as
 * the resulting vector shares structure with the original and no
 * trimming is done.
 */
cljs.core.subvec = (function() {
var cljs$core$subvec = null;
var cljs$core$subvec__2 = (function (v,start){
return cljs$core$subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var cljs$core$subvec__3 = (function (v,start,end){
return cljs.core.build_subvec(null,v,start,end,null);
});
cljs$core$subvec = function(v,start,end){
switch(arguments.length){
case 2:
return cljs$core$subvec__2.call(this,v,start);
case 3:
return cljs$core$subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$subvec.cljs$core$IFn$_invoke$arity$2 = cljs$core$subvec__2;
cljs$core$subvec.cljs$core$IFn$_invoke$arity$3 = cljs$core$subvec__3;
return cljs$core$subvec;
})()
;
cljs.core.tv_ensure_editable = (function cljs$core$tv_ensure_editable(edit,node){
if((edit === node.edit)){
return node;
} else {
return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function cljs$core$tv_editable_root(node){
return (new cljs.core.VectorNode((function (){var obj8595 = {};
return obj8595;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function cljs$core$tv_editable_tail(tl){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tl,(0),ret,(0),tl.length);

return ret;
});
cljs.core.tv_push_tail = (function cljs$core$tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx = (((tv.cnt - (1)) >>> level) & (31));
cljs.core.pv_aset(ret,subidx,(((level === (5)))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);
if(!((child == null))){
return cljs$core$tv_push_tail(tv,(level - (5)),child,tail_node);
} else {
return cljs.core.new_path(tv.root.edit,(level - (5)),tail_node);
}
})()));

return ret;
});
cljs.core.tv_pop_tail = (function cljs$core$tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx = (((tv.cnt - (2)) >>> level) & (31));
if((level > (5))){
var new_child = cljs$core$tv_pop_tail(tv,(level - (5)),cljs.core.pv_aget(node__$1,subidx));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,new_child);

return node__$1;
}
} else {
if((subidx === (0))){
return null;
} else {
cljs.core.pv_aset(node__$1,subidx,null);

return node__$1;

}
}
});
cljs.core.unchecked_editable_array_for = (function cljs$core$unchecked_editable_array_for(tv,i){
if((i >= cljs.core.tail_off(tv))){
return tv.tail;
} else {
var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > (0))){
var G__8603 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & (31))));
var G__8604 = (level - (5));
node = G__8603;
level = G__8604;
continue;
} else {
return node.arr;
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 275;
})
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < (32))){
(self__.tail[(self__.cnt & (31))] = o);

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

if(((self__.cnt >>> (5)) > ((1) << self__.shift))){
var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_shift = (self__.shift + (5));
(new_root_array[(0)] = self__.root);

(new_root_array[(1)] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));

self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));

self__.shift = new_shift;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
} else {
var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return tcoll__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));
var trimmed_tail = (new Array(len));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),len);

return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(typeof key === 'number'){
return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
} else {
throw (new Error("TransientVector's key for assoc! must be a number."));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((((0) <= n)) && ((n < self__.cnt))){
if((cljs.core.tail_off(tcoll__$1) <= n)){
(self__.tail[(n & (31))] = val);

return tcoll__$1;
} else {
var new_root = ((function (tcoll__$1){
return (function cljs$core$go(level,node){
var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);
if((level === (0))){
cljs.core.pv_aset(node__$1,(n & (31)),val);

return node__$1;
} else {
var subidx = ((n >>> level) & (31));
cljs.core.pv_aset(node__$1,subidx,cljs$core$go((level - (5)),cljs.core.pv_aget(node__$1,subidx)));

return node__$1;
}
});})(tcoll__$1))
.call(null,self__.shift,self__.root);
self__.root = new_root;

return tcoll__$1;
}
} else {
if((n === self__.cnt)){
return cljs.core._conj_BANG_(tcoll__$1,val);
} else {
throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

return tcoll__$1;
} else {
if((((self__.cnt - (1)) & (31)) > (0))){
self__.cnt = (self__.cnt - (1));

return tcoll__$1;
} else {
var new_tail = cljs.core.unchecked_editable_array_for(tcoll__$1,(self__.cnt - (2)));
var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);
if(!((nr == null))){
return nr;
} else {
return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();
if((((5) < self__.shift)) && ((cljs.core.pv_aget(new_root,(1)) == null))){
var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,(0)));
self__.root = new_root__$1;

self__.shift = (self__.shift - (5));

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
} else {
self__.root = new_root;

self__.cnt = (self__.cnt - (1));

self__.tail = new_tail;

return tcoll__$1;
}

}
}
}
} else {
throw (new Error("pop! after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var coll__$1 = this;
if(self__.root.edit){
return (cljs.core.array_for(coll__$1,n)[(n & (31))]);
} else {
throw (new Error("nth after persistent!"));
}
});

cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var coll__$1 = this;
if((((0) <= n)) && ((n < self__.cnt))){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if(typeof k === 'number'){
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
} else {
return not_found;
}
});

cljs.core.TransientVector.prototype.call = (function() {
var G__8608 = null;
var G__8608__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8608__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8608 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8608__2.call(this,self__,k);
case 3:
return G__8608__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8608.cljs$core$IFn$_invoke$arity$2 = G__8608__2;
G__8608.cljs$core$IFn$_invoke$arity$3 = G__8608__3;
return G__8608;
})()
;

cljs.core.TransientVector.prototype.apply = (function (self__,args8605){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8605)));
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.TransientVector.cljs$lang$type = true;

cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";

cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/TransientVector");
});

cljs.core.__GT_TransientVector = (function cljs$core$__GT_TransientVector(cnt,shift,root,tail){
return (new cljs.core.TransientVector(cnt,shift,root,tail));
});


/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueueSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var temp__4423__auto__ = cljs.core.next(self__.front);
if(temp__4423__auto__){
var f1 = temp__4423__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else {
if((self__.rear == null)){
return cljs.core._empty(coll__$1);
} else {
return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentQueueSeq.cljs$lang$type = true;

cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";

cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentQueueSeq");
});

cljs.core.__GT_PersistentQueueSeq = (function cljs$core$__GT_PersistentQueueSeq(meta,front,rear,__hash){
return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

(cljs.core.PersistentQueueSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentQueue.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.count;
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
var temp__4423__auto__ = cljs.core.next(self__.front);
if(temp__4423__auto__){
var f1 = temp__4423__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),f1,self__.rear,null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - (1)),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else {
return coll__$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.PersistentQueue.EMPTY;
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.front);
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.rest(cljs.core.seq(coll__$1));
});

cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var rear__$1 = cljs.core.seq(self__.rear);
if(cljs.core.truth_((function (){var or__559__auto__ = self__.front;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return rear__$1;
}
})())){
return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else {
return null;
}
});

cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});

cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.front)){
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__559__auto__ = self__.rear;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else {
return (new cljs.core.PersistentQueue(self__.meta,(self__.count + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});

cljs.core.PersistentQueue.cljs$lang$type = true;

cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";

cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentQueue");
});

cljs.core.__GT_PersistentQueue = (function cljs$core$__GT_PersistentQueue(meta,count,front,rear,__hash){
return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});

cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,(0),null,cljs.core.PersistentVector.EMPTY,(0)));
(cljs.core.PersistentQueue.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.NeverEquiv.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return false;
});

cljs.core.NeverEquiv.cljs$lang$type = true;

cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";

cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/NeverEquiv");
});

cljs.core.__GT_NeverEquiv = (function cljs$core$__GT_NeverEquiv(){
return (new cljs.core.NeverEquiv());
});

cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
 * Assumes y is a map. Returns true if x equals y, otherwise returns
 * false.
 */
cljs.core.equiv_map = (function cljs$core$equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function cljs$core$scan_array(incr,k,array){
var len = array.length;
var i = (0);
while(true){
if((i < len)){
if((k === (array[i]))){
return i;
} else {
var G__8609 = (i + incr);
i = G__8609;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function cljs$core$obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash(a);
var b__$1 = cljs.core.hash(b);
if((a__$1 < b__$1)){
return (-1);
} else {
if((a__$1 > b__$1)){
return (1);
} else {
return (0);

}
}
});
cljs.core.obj_map__GT_hash_map = (function cljs$core$obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var mm = cljs.core.meta(m);
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var k__$1 = (ks[i]);
var G__8610 = (i + (1));
var G__8611 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k__$1,(so[k__$1]));
i = G__8610;
out = G__8611;
continue;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function cljs$core$obj_clone(obj,ks){
var new_obj = (function (){var obj8615 = {};
return obj8615;
})();
var l = ks.length;
var i_8616 = (0);
while(true){
if((i_8616 < l)){
var k_8617 = (ks[i_8616]);
(new_obj[k_8617] = (obj[k_8617]));

var G__8618 = (i_8616 + (1));
i_8616 = G__8618;
continue;
} else {
}
break;
}

return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 4;
})
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ObjMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array((1),k,self__.keys) == null)))){
return (self__.strobj[k]);
} else {
return not_found;
}
});

cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.keys.length;
var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);
var init__$1 = init;
while(true){
if(cljs.core.seq(keys__$1)){
var k = cljs.core.first(keys__$1);
var init__$2 = (function (){var G__8621 = init__$1;
var G__8622 = k;
var G__8623 = (self__.strobj[k]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8621,G__8622,G__8623) : f.call(null,G__8621,G__8622,G__8623));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8624 = cljs.core.rest(keys__$1);
var G__8625 = init__$2;
keys__$1 = G__8624;
init__$1 = G__8625;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.keys.length;
});

cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.transient$(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});

cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});

cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array((1),k,self__.keys) == null)))){
var new_keys = cljs.core.aclone(self__.keys);
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array((1),k,new_keys),(1));

delete new_strobj[k];

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
} else {
return coll__$1;
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if(goog.isString(k)){
if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD))){
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else {
if(!((cljs.core.scan_array((1),k,self__.keys) == null))){
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
(new_strobj[k] = v);

return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + (1)),null));
} else {
var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);
var new_keys = cljs.core.aclone(self__.keys);
(new_strobj[k] = v);

new_keys.push(k);

return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + (1)),null));
}
}
} else {
return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});

cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((goog.isString(k)) && (!((cljs.core.scan_array((1),k,self__.keys) == null)))){
return true;
} else {
return false;
}
});

cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.keys.length > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (coll__$1){
return (function (p1__8619_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__8619_SHARP_,(self__.strobj[p1__8619_SHARP_])],null));
});})(coll__$1))
,self__.keys.sort(cljs.core.obj_map_compare_keys));
} else {
return null;
}
});

cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});

cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});

cljs.core.ObjMap.prototype.call = (function() {
var G__8626 = null;
var G__8626__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8626__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8626 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8626__2.call(this,self__,k);
case 3:
return G__8626__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8626.cljs$core$IFn$_invoke$arity$2 = G__8626__2;
G__8626.cljs$core$IFn$_invoke$arity$3 = G__8626__3;
return G__8626;
})()
;

cljs.core.ObjMap.prototype.apply = (function (self__,args8620){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8620)));
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.ObjMap.cljs$lang$type = true;

cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";

cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ObjMap");
});

cljs.core.__GT_ObjMap = (function cljs$core$__GT_ObjMap(meta,keys,strobj,update_count,__hash){
return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});

cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj8628 = {};
return obj8628;
})(),(0),(0)));
cljs.core.ObjMap.HASHMAP_THRESHOLD = (8);
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,(0),null));
});

/**
* @constructor
*/
cljs.core.ES6EntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6EntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var vec__8629 = cljs.core.first(self__.s);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8629,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8629,(1),null);
self__.s = cljs.core.next(self__.s);

return {"value": [k,v], "done": false};
} else {
return {"value": null, "done": true};
}
});

cljs.core.ES6EntriesIterator.cljs$lang$type = true;

cljs.core.ES6EntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6EntriesIterator";

cljs.core.ES6EntriesIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ES6EntriesIterator");
});

cljs.core.__GT_ES6EntriesIterator = (function cljs$core$__GT_ES6EntriesIterator(s){
return (new cljs.core.ES6EntriesIterator(s));
});

cljs.core.es6_entries_iterator = (function cljs$core$es6_entries_iterator(coll){
return (new cljs.core.ES6EntriesIterator(cljs.core.seq(coll)));
});

/**
* @constructor
*/
cljs.core.ES6SetEntriesIterator = (function (s){
this.s = s;
})
cljs.core.ES6SetEntriesIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
if(!((self__.s == null))){
var x = cljs.core.first(self__.s);
self__.s = cljs.core.next(self__.s);

return {"value": [x,x], "done": false};
} else {
return {"value": null, "done": true};
}
});

cljs.core.ES6SetEntriesIterator.cljs$lang$type = true;

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorStr = "cljs.core/ES6SetEntriesIterator";

cljs.core.ES6SetEntriesIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ES6SetEntriesIterator");
});

cljs.core.__GT_ES6SetEntriesIterator = (function cljs$core$__GT_ES6SetEntriesIterator(s){
return (new cljs.core.ES6SetEntriesIterator(s));
});

cljs.core.es6_set_entries_iterator = (function cljs$core$es6_set_entries_iterator(coll){
return (new cljs.core.ES6SetEntriesIterator(cljs.core.seq(coll)));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function cljs$core$array_map_index_of_nil_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(((arr[i]) == null)){
return i;
} else {
var G__8630 = (i + (2));
i = G__8630;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function cljs$core$array_map_index_of_keyword_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.fqn;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})()){
return i;
} else {
var G__8631 = (i + (2));
i = G__8631;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function cljs$core$array_map_index_of_symbol_QMARK_(arr,m,k){
var len = arr.length;
var kstr = k.str;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((function (){var k_SINGLEQUOTE_ = (arr[i]);
return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})()){
return i;
} else {
var G__8632 = (i + (2));
i = G__8632;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function cljs$core$array_map_index_of_identical_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if((k === (arr[i]))){
return i;
} else {
var G__8633 = (i + (2));
i = G__8633;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function cljs$core$array_map_index_of_equiv_QMARK_(arr,m,k){
var len = arr.length;
var i = (0);
while(true){
if((len <= i)){
return (-1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i]))){
return i;
} else {
var G__8634 = (i + (2));
i = G__8634;
continue;

}
}
break;
}
});
cljs.core.array_map_index_of = (function cljs$core$array_map_index_of(m,k){
var arr = m.arr;
if((k instanceof cljs.core.Keyword)){
return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else {
if((goog.isString(k)) || (typeof k === 'number')){
return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else {
if((k instanceof cljs.core.Symbol)){
return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else {
if((k == null)){
return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else {
return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);

}
}
}
}
});
cljs.core.array_map_extend_kv = (function cljs$core$array_map_extend_kv(m,k,v){
var arr = m.arr;
var l = arr.length;
var narr = (new Array((l + (2))));
var i_8635 = (0);
while(true){
if((i_8635 < l)){
(narr[i_8635] = (arr[i_8635]));

var G__8636 = (i_8635 + (1));
i_8635 = G__8636;
continue;
} else {
}
break;
}

(narr[l] = k);

(narr[(l + (1))] = v);

return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return null;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return ((self__.arr.length - self__.i) / (2));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.i < (self__.arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + (2)),self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";

cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentArrayMapSeq");
});

cljs.core.__GT_PersistentArrayMapSeq = (function cljs$core$__GT_PersistentArrayMapSeq(arr,i,_meta){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});

(cljs.core.PersistentArrayMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.persistent_array_map_seq = (function cljs$core$persistent_array_map_seq(arr,i,_meta){
if((i <= (arr.length - (2)))){
return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else {
return null;
}
});


/**
* @constructor
*/
cljs.core.PersistentArrayMapIterator = (function (arr,i,cnt){
this.arr = arr;
this.i = i;
this.cnt = cnt;
})
cljs.core.PersistentArrayMapIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
return (self__.i < self__.cnt);
});

cljs.core.PersistentArrayMapIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + (1))])], null);
self__.i = (self__.i + (2));

return ret;
});

cljs.core.PersistentArrayMapIterator.cljs$lang$type = true;

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapIterator";

cljs.core.PersistentArrayMapIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentArrayMapIterator");
});

cljs.core.__GT_PersistentArrayMapIterator = (function cljs$core$__GT_PersistentArrayMapIterator(arr,i,cnt){
return (new cljs.core.PersistentArrayMapIterator(arr,i,cnt));
});


/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16647951;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentArrayMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentArrayMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.keys.call(null,coll)));
});

cljs.core.PersistentArrayMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentArrayMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.vals.call(null,coll)));
});

cljs.core.PersistentArrayMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentArrayMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__8638 = cljs.core.seq(coll);
var chunk__8639 = null;
var count__8640 = (0);
var i__8641 = (0);
while(true){
if((i__8641 < count__8640)){
var vec__8642 = chunk__8639.cljs$core$IIndexed$_nth$arity$2(null,i__8641);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8651 = seq__8638;
var G__8652 = chunk__8639;
var G__8653 = count__8640;
var G__8654 = (i__8641 + (1));
seq__8638 = G__8651;
chunk__8639 = G__8652;
count__8640 = G__8653;
i__8641 = G__8654;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8638);
if(temp__4425__auto__){
var seq__8638__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8638__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8638__$1);
var G__8655 = cljs.core.chunk_rest(seq__8638__$1);
var G__8656 = c__1341__auto__;
var G__8657 = cljs.core.count(c__1341__auto__);
var G__8658 = (0);
seq__8638 = G__8655;
chunk__8639 = G__8656;
count__8640 = G__8657;
i__8641 = G__8658;
continue;
} else {
var vec__8643 = cljs.core.first(seq__8638__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8643,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8643,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8659 = cljs.core.next(seq__8638__$1);
var G__8660 = null;
var G__8661 = (0);
var G__8662 = (0);
seq__8638 = G__8659;
chunk__8639 = G__8660;
count__8640 = G__8661;
i__8641 = G__8662;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var G__8644 = init__$1;
var G__8645 = (self__.arr[i]);
var G__8646 = (self__.arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8644,G__8645,G__8646) : f.call(null,G__8644,G__8645,G__8646));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8663 = (i + (2));
var G__8664 = init__$2;
i = G__8663;
init__$1 = G__8664;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.PersistentArrayMapIterator(self__.arr,(0),(self__.cnt * (2))));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
if((function (){var G__8647 = other;
if(G__8647){
var bit__1228__auto__ = (G__8647.cljs$lang$protocol_mask$partition0$ & (1024));
if((bit__1228__auto__) || (G__8647.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
var alen = self__.arr.length;
var other__$1 = other;
if((self__.cnt === other__$1.cljs$core$ICounted$_count$arity$1(null))){
var i = (0);
while(true){
if((i < alen)){
var v = other__$1.cljs$core$ILookup$_lookup$arity$3(null,(self__.arr[i]),cljs.core.lookup_sentinel);
if(!((v === cljs.core.lookup_sentinel))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[(i + (1))]),v)){
var G__8665 = (i + (2));
i = G__8665;
continue;
} else {
return false;
}
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs.core.equiv_map(coll__$1,other);
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientArrayMap((function (){var obj8649 = {};
return obj8649;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx >= (0))){
var len = self__.arr.length;
var new_len = (len - (2));
if((new_len === (0))){
return cljs.core._empty(coll__$1);
} else {
var new_arr = (new Array(new_len));
var s = (0);
var d = (0);
while(true){
if((s >= len)){
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - (1)),new_arr,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s]))){
var G__8666 = (s + (2));
var G__8667 = d;
s = G__8666;
d = G__8667;
continue;
} else {
(new_arr[d] = (self__.arr[s]));

(new_arr[(d + (1))] = (self__.arr[(s + (1))]));

var G__8668 = (s + (2));
var G__8669 = (d + (2));
s = G__8668;
d = G__8669;
continue;

}
}
break;
}
}
} else {
return coll__$1;
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var idx = cljs.core.array_map_index_of(coll__$1,k);
if((idx === (-1))){
if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);
return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + (1)),arr__$1,null));
} else {
return cljs.core._with_meta(cljs.core._assoc(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else {
if((v === (self__.arr[(idx + (1))]))){
return coll__$1;
} else {
var arr__$1 = (function (){var G__8650 = cljs.core.aclone(self__.arr);
(G__8650[(idx + (1))] = v);

return G__8650;
})();
return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));

}
}
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((cljs.core.array_map_index_of(coll__$1,k) === (-1)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.persistent_array_map_seq(self__.arr,(0),null);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__8670 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__8671 = cljs.core.next(es);
ret = G__8670;
es = G__8671;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8672 = null;
var G__8672__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8672__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8672 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8672__2.call(this,self__,k);
case 3:
return G__8672__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8672.cljs$core$IFn$_invoke$arity$2 = G__8672__2;
G__8672.cljs$core$IFn$_invoke$arity$3 = G__8672__3;
return G__8672;
})()
;

cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args8637){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8637)));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentArrayMap.cljs$lang$type = true;

cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";

cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentArrayMap");
});

cljs.core.__GT_PersistentArrayMap = (function cljs$core$__GT_PersistentArrayMap(meta,cnt,arr,__hash){
return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});

cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,(0),[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = (8);
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){
var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));
if(no_check){
var cnt = (arr__$1.length / (2));
return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else {
var len = arr__$1.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__8673 = (i + (2));
var G__8674 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + (1))]));
i = G__8673;
ret = G__8674;
continue;
} else {
return cljs.core._persistent_BANG_(ret);
}
break;
}
}
});
(cljs.core.PersistentArrayMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition0$ = 258;
this.cljs$lang$protocol_mask$partition1$ = 56;
})
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
return cljs.core.quot(self__.len,(2));
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});

cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,k);
if((idx === (-1))){
return not_found;
} else {
return (self__.arr[(idx + (1))]);
}
} else {
throw (new Error("lookup after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
if((function (){var G__8675 = o;
if(G__8675){
var bit__1235__auto__ = (G__8675.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__1235__auto__) || (G__8675.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__8675.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__8675);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__8675);
}
})()){
return cljs.core._assoc_BANG_(tcoll__$1,(cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.val.call(null,o)));
} else {
var es = cljs.core.seq(o);
var tcoll__$2 = tcoll__$1;
while(true){
var temp__4423__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
var G__8677 = cljs.core.next(es);
var G__8678 = cljs.core._assoc_BANG_(tcoll__$2,(cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e)));
es = G__8677;
tcoll__$2 = G__8678;
continue;
} else {
return tcoll__$2;
}
break;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
self__.editable_QMARK_ = false;

return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,(2)),self__.arr,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx === (-1))){
if(((self__.len + (2)) <= ((2) * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))){
self__.len = (self__.len + (2));

self__.arr.push(key);

self__.arr.push(val);

return tcoll__$1;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(self__.len,self__.arr) : cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr)),key,val);
}
} else {
if((val === (self__.arr[(idx + (1))]))){
return tcoll__$1;
} else {
(self__.arr[(idx + (1))] = val);

return tcoll__$1;
}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
if(cljs.core.truth_(self__.editable_QMARK_)){
var idx = cljs.core.array_map_index_of(tcoll__$1,key);
if((idx >= (0))){
(self__.arr[idx] = (self__.arr[(self__.len - (2))]));

(self__.arr[(idx + (1))] = (self__.arr[(self__.len - (1))]));

var G__8676_8679 = self__.arr;
G__8676_8679.pop();

G__8676_8679.pop();


self__.len = (self__.len - (2));
} else {
}

return tcoll__$1;
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientArrayMap.cljs$lang$type = true;

cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";

cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/TransientArrayMap");
});

cljs.core.__GT_TransientArrayMap = (function cljs$core$__GT_TransientArrayMap(editable_QMARK_,len,arr){
return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});


cljs.core.array__GT_transient_hash_map = (function cljs$core$array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
var i = (0);
while(true){
if((i < len)){
var G__8680 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(arr[i]),(arr[(i + (1))]));
var G__8681 = (i + (2));
out = G__8680;
i = G__8681;
continue;
} else {
return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})

cljs.core.Box.cljs$lang$type = true;

cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";

cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Box");
});

cljs.core.__GT_Box = (function cljs$core$__GT_Box(val){
return (new cljs.core.Box(val));
});






cljs.core.key_test = (function cljs$core$key_test(key,other){
if((key === other)){
return true;
} else {
if(cljs.core.keyword_identical_QMARK_(key,other)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);

}
}
});
cljs.core.mask = (function cljs$core$mask(hash,shift){
return ((hash >>> shift) & (31));
});
cljs.core.clone_and_set = (function() {
var cljs$core$clone_and_set = null;
var cljs$core$clone_and_set__3 = (function (arr,i,a){
var G__8684 = cljs.core.aclone(arr);
(G__8684[i] = a);

return G__8684;
});
var cljs$core$clone_and_set__5 = (function (arr,i,a,j,b){
var G__8685 = cljs.core.aclone(arr);
(G__8685[i] = a);

(G__8685[j] = b);

return G__8685;
});
cljs$core$clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return cljs$core$clone_and_set__3.call(this,arr,i,a);
case 5:
return cljs$core$clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$clone_and_set.cljs$core$IFn$_invoke$arity$3 = cljs$core$clone_and_set__3;
cljs$core$clone_and_set.cljs$core$IFn$_invoke$arity$5 = cljs$core$clone_and_set__5;
return cljs$core$clone_and_set;
})()
;
cljs.core.remove_pair = (function cljs$core$remove_pair(arr,i){
var new_arr = (new Array((arr.length - (2))));
cljs.core.array_copy(arr,(0),new_arr,(0),((2) * i));

cljs.core.array_copy(arr,((2) * (i + (1))),new_arr,((2) * i),(new_arr.length - ((2) * i)));

return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function cljs$core$bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - (1))));
});
cljs.core.bitpos = (function cljs$core$bitpos(hash,shift){
return ((1) << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var cljs$core$edit_and_set = null;
var cljs$core$edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

return editable;
});
var cljs$core$edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);

(editable.arr[j] = b);

return editable;
});
cljs$core$edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return cljs$core$edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return cljs$core$edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$edit_and_set.cljs$core$IFn$_invoke$arity$4 = cljs$core$edit_and_set__4;
cljs$core$edit_and_set.cljs$core$IFn$_invoke$arity$6 = cljs$core$edit_and_set__6;
return cljs$core$edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function cljs$core$inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var init__$2 = (function (){var k = (arr[i]);
if(!((k == null))){
var G__8689 = init__$1;
var G__8690 = k;
var G__8691 = (arr[(i + (1))]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8689,G__8690,G__8691) : f.call(null,G__8689,G__8690,G__8691));
} else {
var node = (arr[(i + (1))]);
if(!((node == null))){
return node.kv_reduce(f,init__$1);
} else {
return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8692 = (i + (2));
var G__8693 = init__$2;
i = G__8692;
init__$1 = G__8693;
continue;
}
} else {
return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var n = cljs.core.bit_count(self__.bitmap);
var new_arr = (new Array((((n < (0)))?(4):((2) * (n + (1))))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * n));

return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
} else {
if((self__.bitmap === bit)){
return null;
} else {
return inode.edit_and_remove_pair(edit__$1,bit,idx);

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
(removed_leaf_QMARK_[(0)] = true);

return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit)){
return null;
} else {
var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);

cljs.core.array_copy(earr,((2) * (i + (1))),earr,((2) * i),(len - ((2) * (i + (1)))));

(earr[(len - (2))] = null);

(earr[(len - (1))] = null);

return editable;
}
});

cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});

cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return val_or_node;
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((((2) * n) < self__.arr.length)){
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;

cljs.core.array_copy_downward(earr,((2) * idx),earr,((2) * (idx + (1))),((2) * (n - idx)));

(earr[((2) * idx)] = key);

(earr[(((2) * idx) + (1))] = val);

editable.bitmap = (editable.bitmap | bit);

return editable;
} else {
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_8707 = (0);
var j_8708 = (0);
while(true){
if((i_8707 < (32))){
if((((self__.bitmap >>> i_8707) & (1)) === (0))){
var G__8709 = (i_8707 + (1));
var G__8710 = j_8708;
i_8707 = G__8709;
j_8708 = G__8710;
continue;
} else {
(nodes[i_8707] = ((!(((self__.arr[j_8708]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),cljs.core.hash((self__.arr[j_8708])),(self__.arr[j_8708]),(self__.arr[(j_8708 + (1))]),added_leaf_QMARK_):(self__.arr[(j_8708 + (1))])));

var G__8711 = (i_8707 + (1));
var G__8712 = (j_8708 + (2));
i_8707 = G__8711;
j_8708 = G__8712;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(edit__$1,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (4)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;

editable.bitmap = (editable.bitmap | bit);

return editable;

}
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),n);
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(((2) * idx) + (1)),val);
}
} else {
added_leaf_QMARK_.val = true;

return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__8694 = edit__$1;
var G__8695 = (shift + (5));
var G__8696 = key_or_nil;
var G__8697 = val_or_node;
var G__8698 = hash;
var G__8699 = key;
var G__8700 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(G__8694,G__8695,G__8696,G__8697,G__8698,G__8699,G__8700) : cljs.core.create_node.call(null,G__8694,G__8695,G__8696,G__8697,G__8698,G__8699,G__8700));
})());

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
if(((self__.bitmap & bit) === (0))){
var n = cljs.core.bit_count(self__.bitmap);
if((n >= (16))){
var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_));

var i_8713 = (0);
var j_8714 = (0);
while(true){
if((i_8713 < (32))){
if((((self__.bitmap >>> i_8713) & (1)) === (0))){
var G__8715 = (i_8713 + (1));
var G__8716 = j_8714;
i_8713 = G__8715;
j_8714 = G__8716;
continue;
} else {
(nodes[i_8713] = ((!(((self__.arr[j_8714]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),cljs.core.hash((self__.arr[j_8714])),(self__.arr[j_8714]),(self__.arr[(j_8714 + (1))]),added_leaf_QMARK_):(self__.arr[(j_8714 + (1))])));

var G__8717 = (i_8713 + (1));
var G__8718 = (j_8714 + (2));
i_8713 = G__8717;
j_8714 = G__8718;
continue;
}
} else {
}
break;
}

return (new cljs.core.ArrayNode(null,(n + (1)),nodes));
} else {
var new_arr = (new Array(((2) * (n + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * idx));

(new_arr[((2) * idx)] = key);

(new_arr[(((2) * idx) + (1))] = val);

cljs.core.array_copy(self__.arr,((2) * idx),new_arr,((2) * (idx + (1))),((2) * (n - idx)));

added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else {
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
if((val === val_or_node)){
return inode;
} else {
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),val)));
}
} else {
added_leaf_QMARK_.val = true;

return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,((2) * idx),null,(((2) * idx) + (1)),(function (){var G__8701 = (shift + (5));
var G__8702 = key_or_nil;
var G__8703 = val_or_node;
var G__8704 = hash;
var G__8705 = key;
var G__8706 = val;
return (cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6(G__8701,G__8702,G__8703,G__8704,G__8705,G__8706) : cljs.core.create_node.call(null,G__8701,G__8702,G__8703,G__8704,G__8705,G__8706));
})())));

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return not_found;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
return val_or_node.inode_find((shift + (5)),hash,key,not_found);
} else {
if(cljs.core.key_test(key,key_or_nil)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else {
return not_found;

}
}
}
});

cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === (0))){
return inode;
} else {
var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);
var key_or_nil = (self__.arr[((2) * idx)]);
var val_or_node = (self__.arr[(((2) * idx) + (1))]);
if((key_or_nil == null)){
var n = val_or_node.inode_without((shift + (5)),hash,key);
if((n === val_or_node)){
return inode;
} else {
if(!((n == null))){
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(((2) * idx) + (1)),n)));
} else {
if((self__.bitmap === bit)){
return null;
} else {
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));

}
}
}
} else {
if(cljs.core.key_test(key,key_or_nil)){
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else {
return inode;

}
}
}
});

cljs.core.BitmapIndexedNode.cljs$lang$type = true;

cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";

cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/BitmapIndexedNode");
});

cljs.core.__GT_BitmapIndexedNode = (function cljs$core$__GT_BitmapIndexedNode(edit,bitmap,arr){
return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});

cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,(0),[]));
cljs.core.pack_array_node = (function cljs$core$pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = arr.length;
var new_arr = (new Array(((2) * (array_node.cnt - (1)))));
var i = (0);
var j = (1);
var bitmap = (0);
while(true){
if((i < len)){
if((!((i === idx))) && (!(((arr[i]) == null)))){
(new_arr[j] = (arr[i]));

var G__8719 = (i + (1));
var G__8720 = (j + (2));
var G__8721 = (bitmap | ((1) << i));
i = G__8719;
j = G__8720;
bitmap = G__8721;
continue;
} else {
var G__8722 = (i + (1));
var G__8723 = j;
var G__8724 = bitmap;
i = G__8722;
j = G__8723;
bitmap = G__8724;
continue;
}
} else {
return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});

cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return inode;
} else {
var n = node.inode_without_BANG_(edit__$1,(shift + (5)),hash,key,removed_leaf_QMARK_);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,edit__$1,idx);
} else {
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - (1));

return editable;
}
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);

}
}
}
});

cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_array_node_seq.call(null,self__.arr));
});

cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = (0);
var init__$1 = init;
while(true){
if((i < len)){
var node = (self__.arr[i]);
if(!((node == null))){
var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var G__8725 = (i + (1));
var G__8726 = init__$2;
i = G__8725;
init__$1 = G__8726;
continue;
}
} else {
var G__8727 = (i + (1));
var G__8728 = init__$1;
i = G__8727;
init__$1 = G__8728;
continue;
}
} else {
return init__$1;
}
break;
}
});

cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_lookup((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + (1));

return editable;
} else {
var n = node.inode_assoc_BANG_(edit__$1,(shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});

cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null)){
return (new cljs.core.ArrayNode(null,(self__.cnt + (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_))));
} else {
var n = node.inode_assoc((shift + (5)),hash,key,val,added_leaf_QMARK_);
if((n === node)){
return inode;
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
}
});

cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
return node.inode_find((shift + (5)),hash,key,not_found);
} else {
return not_found;
}
});

cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null))){
var n = node.inode_without((shift + (5)),hash,key);
if((n === node)){
return inode;
} else {
if((n == null)){
if((self__.cnt <= (8))){
return cljs.core.pack_array_node(inode,null,idx);
} else {
return (new cljs.core.ArrayNode(null,(self__.cnt - (1)),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else {
return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));

}
}
} else {
return inode;
}
});

cljs.core.ArrayNode.cljs$lang$type = true;

cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";

cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ArrayNode");
});

cljs.core.__GT_ArrayNode = (function cljs$core$__GT_ArrayNode(edit,cnt,arr){
return (new cljs.core.ArrayNode(edit,cnt,arr));
});

cljs.core.hash_collision_node_find_index = (function cljs$core$hash_collision_node_find_index(arr,cnt,key){
var lim = ((2) * cnt);
var i = (0);
while(true){
if((i < lim)){
if(cljs.core.key_test(key,(arr[i]))){
return i;
} else {
var G__8729 = (i + (2));
i = G__8729;
continue;
}
} else {
return (-1);
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit)){
return inode;
} else {
var new_arr = (new Array(((2) * (self__.cnt + (1)))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),((2) * self__.cnt));

return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});

cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
(removed_leaf_QMARK_[(0)] = true);

if((self__.cnt === (1))){
return null;
} else {
var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[(((2) * self__.cnt) - (2))]));

(earr[(idx + (1))] = (earr[(((2) * self__.cnt) - (1))]));

(earr[(((2) * self__.cnt) - (1))] = null);

(earr[(((2) * self__.cnt) - (2))] = null);

editable.cnt = (editable.cnt - (1));

return editable;
}
}
});

cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});

cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce(self__.arr,f,init);
});

cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return (self__.arr[(idx + (1))]);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
if((self__.arr.length > ((2) * self__.cnt))){
var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,((2) * self__.cnt),key,(((2) * self__.cnt) + (1)),val);
added_leaf_QMARK_.val = true;

editable.cnt = (editable.cnt + (1));

return editable;
} else {
var len = self__.arr.length;
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return inode.ensure_editable_array(edit__$1,(self__.cnt + (1)),new_arr);
}
} else {
if(((self__.arr[(idx + (1))]) === val)){
return inode;
} else {
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + (1)),val);
}
}
} else {
return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash)){
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
var len = ((2) * self__.cnt);
var new_arr = (new Array((len + (2))));
cljs.core.array_copy(self__.arr,(0),new_arr,(0),len);

(new_arr[len] = key);

(new_arr[(len + (1))] = val);

added_leaf_QMARK_.val = true;

return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + (1)),new_arr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val)){
return inode;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + (1)),val)));
}
}
} else {
return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});

cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit)){
self__.arr = array;

self__.cnt = count;

return inode;
} else {
return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});

cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx < (0))){
return not_found;
} else {
if(cljs.core.key_test(key,(self__.arr[idx]))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + (1))])], null);
} else {
return not_found;

}
}
});

cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);
if((idx === (-1))){
return inode;
} else {
if((self__.cnt === (1))){
return null;
} else {
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - (1)),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,(2)))));

}
}
});

cljs.core.HashCollisionNode.cljs$lang$type = true;

cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";

cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/HashCollisionNode");
});

cljs.core.__GT_HashCollisionNode = (function cljs$core$__GT_HashCollisionNode(edit,collision_hash,cnt,arr){
return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});

cljs.core.create_node = (function() {
var cljs$core$create_node = null;
var cljs$core$create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var cljs$core$create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash(key1);
if((key1hash === key2hash)){
return (new cljs.core.HashCollisionNode(null,key1hash,(2),[key1,val1,key2,val2]));
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
cljs$core$create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return cljs$core$create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return cljs$core$create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$create_node.cljs$core$IFn$_invoke$arity$6 = cljs$core$create_node__6;
cljs$core$create_node.cljs$core$IFn$_invoke$arity$7 = cljs$core$create_node__7;
return cljs$core$create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.NodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + (1))])], null);
} else {
return cljs.core.first(self__.s);
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.s == null)){
var G__8730 = self__.nodes;
var G__8731 = (self__.i + (2));
var G__8732 = null;
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__8730,G__8731,G__8732) : cljs.core.create_inode_seq.call(null,G__8730,G__8731,G__8732));
} else {
var G__8733 = self__.nodes;
var G__8734 = self__.i;
var G__8735 = cljs.core.next(self__.s);
return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(G__8733,G__8734,G__8735) : cljs.core.create_inode_seq.call(null,G__8733,G__8734,G__8735));
}
});

cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.NodeSeq.cljs$lang$type = true;

cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";

cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/NodeSeq");
});

cljs.core.__GT_NodeSeq = (function cljs$core$__GT_NodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.NodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.create_inode_seq = (function() {
var cljs$core$create_inode_seq = null;
var cljs$core$create_inode_seq__1 = (function (nodes){
return cljs$core$create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,(0),null);
});
var cljs$core$create_inode_seq__3 = (function (nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
if(!(((nodes[j]) == null))){
return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else {
var temp__4423__auto__ = (nodes[(j + (1))]);
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
var temp__4423__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4423__auto____$1)){
var node_seq = temp__4423__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + (2)),node_seq,null));
} else {
var G__8736 = (j + (2));
j = G__8736;
continue;
}
} else {
var G__8737 = (j + (2));
j = G__8737;
continue;
}
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
cljs$core$create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return cljs$core$create_inode_seq__1.call(this,nodes);
case 3:
return cljs$core$create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$create_inode_seq.cljs$core$IFn$_invoke$arity$1 = cljs$core$create_inode_seq__1;
cljs$core$create_inode_seq.cljs$core$IFn$_invoke$arity$3 = cljs$core$create_inode_seq__3;
return cljs$core$create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ArrayNodeSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.first(self__.s);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var G__8738 = null;
var G__8739 = self__.nodes;
var G__8740 = self__.i;
var G__8741 = cljs.core.next(self__.s);
return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(G__8738,G__8739,G__8740,G__8741) : cljs.core.create_array_node_seq.call(null,G__8738,G__8739,G__8740,G__8741));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ArrayNodeSeq.cljs$lang$type = true;

cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";

cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ArrayNodeSeq");
});

cljs.core.__GT_ArrayNodeSeq = (function cljs$core$__GT_ArrayNodeSeq(meta,nodes,i,s,__hash){
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});

(cljs.core.ArrayNodeSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.create_array_node_seq = (function() {
var cljs$core$create_array_node_seq = null;
var cljs$core$create_array_node_seq__1 = (function (nodes){
return cljs$core$create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,(0),null);
});
var cljs$core$create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null)){
var len = nodes.length;
var j = i;
while(true){
if((j < len)){
var temp__4423__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4423__auto__)){
var nj = temp__4423__auto__;
var temp__4423__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4423__auto____$1)){
var ns = temp__4423__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + (1)),ns,null));
} else {
var G__8742 = (j + (1));
j = G__8742;
continue;
}
} else {
var G__8743 = (j + (1));
j = G__8743;
continue;
}
} else {
return null;
}
break;
}
} else {
return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
cljs$core$create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return cljs$core$create_array_node_seq__1.call(this,meta);
case 4:
return cljs$core$create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = cljs$core$create_array_node_seq__1;
cljs$core$create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = cljs$core$create_array_node_seq__4;
return cljs$core$create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.keys.call(null,coll)));
});

cljs.core.PersistentHashMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.vals.call(null,coll)));
});

cljs.core.PersistentHashMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__8745 = cljs.core.seq(coll);
var chunk__8746 = null;
var count__8747 = (0);
var i__8748 = (0);
while(true){
if((i__8748 < count__8747)){
var vec__8749 = chunk__8746.cljs$core$IIndexed$_nth$arity$2(null,i__8748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8749,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8753 = seq__8745;
var G__8754 = chunk__8746;
var G__8755 = count__8747;
var G__8756 = (i__8748 + (1));
seq__8745 = G__8753;
chunk__8746 = G__8754;
count__8747 = G__8755;
i__8748 = G__8756;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8745);
if(temp__4425__auto__){
var seq__8745__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8745__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8745__$1);
var G__8757 = cljs.core.chunk_rest(seq__8745__$1);
var G__8758 = c__1341__auto__;
var G__8759 = cljs.core.count(c__1341__auto__);
var G__8760 = (0);
seq__8745 = G__8757;
chunk__8746 = G__8758;
count__8747 = G__8759;
i__8748 = G__8760;
continue;
} else {
var vec__8750 = cljs.core.first(seq__8745__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8761 = cljs.core.next(seq__8745__$1);
var G__8762 = null;
var G__8763 = (0);
var G__8764 = (0);
seq__8745 = G__8761;
chunk__8746 = G__8762;
count__8747 = G__8763;
i__8748 = G__8764;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
var init__$1 = ((self__.has_nil_QMARK_)?(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init,null,self__.nil_val) : f.call(null,init,null,self__.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else {
if(!((self__.root == null))){
return self__.root.kv_reduce(f,init__$1);
} else {
return init__$1;

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashMap((function (){var obj8752 = {};
return obj8752;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),self__.root,false,null,null));
} else {
return coll__$1;
}
} else {
if((self__.root == null)){
return coll__$1;
} else {
var new_root = self__.root.inode_without((0),cljs.core.hash(k),k);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - (1)),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
if((k == null)){
if((self__.has_nil_QMARK_) && ((v === self__.nil_val))){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + (1))),self__.root,true,v,null));
}
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc((0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((new_root === self__.root)){
return coll__$1;
} else {
return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + (1)):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
if((k == null)){
return self__.has_nil_QMARK_;
} else {
if((self__.root == null)){
return false;
} else {
return !((self__.root.inode_lookup((0),cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));

}
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else {
return s;
}
} else {
return null;
}
});

cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});

cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__8765 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__8766 = cljs.core.next(es);
ret = G__8765;
es = G__8766;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8767 = null;
var G__8767__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8767__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8767 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8767__2.call(this,self__,k);
case 3:
return G__8767__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8767.cljs$core$IFn$_invoke$arity$2 = G__8767__2;
G__8767.cljs$core$IFn$_invoke$arity$3 = G__8767__3;
return G__8767;
})()
;

cljs.core.PersistentHashMap.prototype.apply = (function (self__,args8744){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8744)));
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashMap.cljs$lang$type = true;

cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";

cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentHashMap");
});

cljs.core.__GT_PersistentHashMap = (function cljs$core$__GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});

cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,(0),null,false,null,(0)));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len)){
var G__8768 = (i + (1));
var G__8769 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__8768;
out = G__8769;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
});
(cljs.core.PersistentHashMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition0$ = 258;
this.cljs$lang$protocol_mask$partition1$ = 56;
})
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((function (){var G__8770 = o;
if(G__8770){
var bit__1235__auto__ = (G__8770.cljs$lang$protocol_mask$partition0$ & (2048));
if((bit__1235__auto__) || (G__8770.cljs$core$IMapEntry$)){
return true;
} else {
if((!G__8770.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__8770);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__8770);
}
})()){
return tcoll.assoc_BANG_((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.val.call(null,o)));
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__4423__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
var G__8771 = cljs.core.next(es);
var G__8772 = tcoll__$1.assoc_BANG_((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e)));
es = G__8771;
tcoll__$1 = G__8772;
continue;
} else {
return tcoll__$1;
}
break;
}
}
} else {
throw (new Error("conj! after persistent"));
}
});

cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if((self__.nil_val === v)){
} else {
self__.nil_val = v;
}

if(self__.has_nil_QMARK_){
} else {
self__.count = (self__.count + (1));

self__.has_nil_QMARK_ = true;
}

return tcoll;
} else {
var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,(0),cljs.core.hash(k),k,v,added_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(added_leaf_QMARK_.val){
self__.count = (self__.count + (1));
} else {
}

return tcoll;
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit){
if((k == null)){
if(self__.has_nil_QMARK_){
self__.has_nil_QMARK_ = false;

self__.nil_val = null;

self__.count = (self__.count - (1));

return tcoll;
} else {
return tcoll;
}
} else {
if((self__.root == null)){
return tcoll;
} else {
var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,(0),cljs.core.hash(k),k,removed_leaf_QMARK_);
if((node === self__.root)){
} else {
self__.root = node;
}

if(cljs.core.truth_((removed_leaf_QMARK_[(0)]))){
self__.count = (self__.count - (1));
} else {
}

return tcoll;
}
}
} else {
throw (new Error("dissoc! after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit){
self__.edit = null;

return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else {
throw (new Error("persistent! called twice"));
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(self__.edit){
return self__.count;
} else {
throw (new Error("count after persistent!"));
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return null;
}
} else {
if((self__.root == null)){
return null;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
var tcoll__$1 = this;
if((k == null)){
if(self__.has_nil_QMARK_){
return self__.nil_val;
} else {
return not_found;
}
} else {
if((self__.root == null)){
return not_found;
} else {
return self__.root.inode_lookup((0),cljs.core.hash(k),k,not_found);
}
}
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.conj_BANG_(val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.persistent_BANG_();
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.assoc_BANG_(key,val);
});

cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
var tcoll__$1 = this;
return tcoll__$1.without_BANG_(key);
});

cljs.core.TransientHashMap.cljs$lang$type = true;

cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";

cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/TransientHashMap");
});

cljs.core.__GT_TransientHashMap = (function cljs$core$__GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){
return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});

cljs.core.tree_map_seq_push = (function cljs$core$tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null))){
var G__8773 = ((ascending_QMARK_)?t.left:t.right);
var G__8774 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__8773;
stack__$1 = G__8774;
continue;
} else {
return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMapSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt < (0))){
return (cljs.core.count(cljs.core.next(coll__$1)) + (1));
} else {
return self__.cnt;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek(self__.stack);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.first(self__.stack);
var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null))){
return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";

cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentTreeMapSeq");
});

cljs.core.__GT_PersistentTreeMapSeq = (function cljs$core$__GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){
return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});

(cljs.core.PersistentTreeMapSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.create_tree_map_seq = (function cljs$core$create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});

cljs.core.balance_left = (function cljs$core$balance_left(key,val,ins,right){
if((ins instanceof cljs.core.RedNode)){
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else {
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function cljs$core$balance_right(key,val,left,ins){
if((ins instanceof cljs.core.RedNode)){
if((ins.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else {
if((ins.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));

}
}
} else {
return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function cljs$core$balance_left_del(key,val,del,right){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else {
if((right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right(key,val,del,right.redden());
} else {
if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.balance_right_del = (function cljs$core$balance_right_del(key,val,left,del){
if((del instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else {
if((left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left(key,val,left.redden(),del);
} else {
if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode))){
return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else {
throw (new Error("red-black tree invariant violation"));

}
}
}
});
cljs.core.tree_map_kv_reduce = (function cljs$core$tree_map_kv_reduce(node,f,init){
var init__$1 = ((!((node.left == null)))?cljs$core$tree_map_kv_reduce(node.left,f,init):init);
if(cljs.core.reduced_QMARK_(init__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else {
var init__$2 = (function (){var G__8784 = init__$1;
var G__8785 = node.key;
var G__8786 = node.val;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__8784,G__8785,G__8786) : f.call(null,G__8784,G__8785,G__8786));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
var init__$3 = ((!((node.right == null)))?cljs$core$tree_map_kv_reduce(node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_(init__$3)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$3) : cljs.core.deref.call(null,init__$3));
} else {
return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});

cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});

cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});

cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});

cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});

cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
});

cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.BlackNode.prototype.call = (function() {
var G__8788 = null;
var G__8788__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8788__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8788 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8788__2.call(this,self__,k);
case 3:
return G__8788__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8788.cljs$core$IFn$_invoke$arity$2 = G__8788__2;
G__8788.cljs$core$IFn$_invoke$arity$3 = G__8788__3;
return G__8788;
})()
;

cljs.core.BlackNode.prototype.apply = (function (self__,args8787){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8787)));
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.BlackNode.cljs$lang$type = true;

cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";

cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/BlackNode");
});

cljs.core.__GT_BlackNode = (function cljs$core$__GT_BlackNode(key,val,left,right,__hash){
return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

(cljs.core.BlackNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});

cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});

cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});

cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});

cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});

cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else {
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));

}
}
});

cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if((self__.right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else {
if((self__.left instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else {
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));

}
}
});

cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});

cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce(node,f,init);
});

cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});

cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
var node__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return null;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
var node__$1 = this;
if((n === (0))){
return self__.key;
} else {
if((n === (1))){
return self__.val;
} else {
return not_found;

}
}
});

cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});

cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return null;
});

cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return (2);
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.key;
});

cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return self__.val;
});

cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});

cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});

cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
var node__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});

cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});

cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
});

cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
var node__$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});

cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
var node__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});

cljs.core.RedNode.prototype.call = (function() {
var G__8790 = null;
var G__8790__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8790__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var node = self____$1;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8790 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8790__2.call(this,self__,k);
case 3:
return G__8790__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8790.cljs$core$IFn$_invoke$arity$2 = G__8790__2;
G__8790.cljs$core$IFn$_invoke$arity$3 = G__8790__3;
return G__8790;
})()
;

cljs.core.RedNode.prototype.apply = (function (self__,args8789){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8789)));
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var node = this;
return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.RedNode.cljs$lang$type = true;

cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";

cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/RedNode");
});

cljs.core.__GT_RedNode = (function cljs$core$__GT_RedNode(key,val,left,right,__hash){
return (new cljs.core.RedNode(key,val,left,right,__hash));
});

(cljs.core.RedNode.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.tree_map_add = (function cljs$core$tree_map_add(comp,tree,k,v,found){
if((tree == null)){
return (new cljs.core.RedNode(k,v,null,null,null));
} else {
var c = (function (){var G__8803 = k;
var G__8804 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__8803,G__8804) : comp.call(null,G__8803,G__8804));
})();
if((c === (0))){
(found[(0)] = tree);

return null;
} else {
if((c < (0))){
var ins = cljs$core$tree_map_add(comp,tree.left,k,v,found);
if(!((ins == null))){
return tree.add_left(ins);
} else {
return null;
}
} else {
var ins = cljs$core$tree_map_add(comp,tree.right,k,v,found);
if(!((ins == null))){
return tree.add_right(ins);
} else {
return null;
}

}
}
}
});
cljs.core.tree_map_append = (function cljs$core$tree_map_append(left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
if((left instanceof cljs.core.RedNode)){
if((right instanceof cljs.core.RedNode)){
var app = cljs$core$tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else {
return (new cljs.core.RedNode(left.key,left.val,left.left,cljs$core$tree_map_append(left.right,right),null));
}
} else {
if((right instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(right.key,right.val,cljs$core$tree_map_append(left,right.left),right.right,null));
} else {
var app = cljs$core$tree_map_append(left.right,right.left);
if((app instanceof cljs.core.RedNode)){
return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else {
return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}

}
}
}
}
});
cljs.core.tree_map_remove = (function cljs$core$tree_map_remove(comp,tree,k,found){
if(!((tree == null))){
var c = (function (){var G__8823 = k;
var G__8824 = tree.key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__8823,G__8824) : comp.call(null,G__8823,G__8824));
})();
if((c === (0))){
(found[(0)] = tree);

return cljs.core.tree_map_append(tree.left,tree.right);
} else {
if((c < (0))){
var del = cljs$core$tree_map_remove(comp,tree.left,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.left instanceof cljs.core.BlackNode)){
return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else {
return null;
}
} else {
var del = cljs$core$tree_map_remove(comp,tree.right,k,found);
if((!((del == null))) || (!(((found[(0)]) == null)))){
if((tree.right instanceof cljs.core.BlackNode)){
return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
} else {
return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else {
return null;
}

}
}
} else {
return null;
}
});
cljs.core.tree_map_replace = (function cljs$core$tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,tk) : comp.call(null,k,tk));
if((c === (0))){
return tree.replace(tk,v,tree.left,tree.right);
} else {
if((c < (0))){
return tree.replace(tk,tree.val,cljs$core$tree_map_replace(comp,tree.left,k,v),tree.right);
} else {
return tree.replace(tk,tree.val,tree.left,cljs$core$tree_map_replace(comp,tree.right,k,v));

}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeMap.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__8834 = cljs.core.seq(coll);
var chunk__8835 = null;
var count__8836 = (0);
var i__8837 = (0);
while(true){
if((i__8837 < count__8836)){
var vec__8838 = chunk__8835.cljs$core$IIndexed$_nth$arity$2(null,i__8837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8838,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8844 = seq__8834;
var G__8845 = chunk__8835;
var G__8846 = count__8836;
var G__8847 = (i__8837 + (1));
seq__8834 = G__8844;
chunk__8835 = G__8845;
count__8836 = G__8846;
i__8837 = G__8847;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8834);
if(temp__4425__auto__){
var seq__8834__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8834__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8834__$1);
var G__8848 = cljs.core.chunk_rest(seq__8834__$1);
var G__8849 = c__1341__auto__;
var G__8850 = cljs.core.count(c__1341__auto__);
var G__8851 = (0);
seq__8834 = G__8848;
chunk__8835 = G__8849;
count__8836 = G__8850;
i__8837 = G__8851;
continue;
} else {
var vec__8839 = cljs.core.first(seq__8834__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8839,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8852 = cljs.core.next(seq__8834__$1);
var G__8853 = null;
var G__8854 = (0);
var G__8855 = (0);
seq__8834 = G__8852;
chunk__8835 = G__8853;
count__8836 = G__8854;
i__8837 = G__8855;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.get = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeMap.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.keys.cljs$core$IFn$_invoke$arity$1 ? cljs.core.keys.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.keys.call(null,coll)));
});

cljs.core.PersistentTreeMap.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator((cljs.core.vals.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vals.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.vals.call(null,coll)));
});

cljs.core.PersistentTreeMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__8840 = k;
var G__8841 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__8840,G__8841) : self__.comp.call(null,G__8840,G__8841));
})();
if((c === (0))){
return t;
} else {
if((c < (0))){
var G__8856 = t.left;
t = G__8856;
continue;
} else {
var G__8857 = t.right;
t = G__8857;
continue;

}
}
} else {
return null;
}
break;
}
});

cljs.core.PersistentTreeMap.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var n = coll__$1.entry_at(k);
if(!((n == null))){
return n.val;
} else {
return not_found;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
if(!((self__.tree == null))){
return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else {
return init;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.cnt;
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map(coll__$1,other);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);
if((t == null)){
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0)) == null)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,null,(0),self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
var found = [null];
var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);
if((t == null)){
var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val)){
return coll__$1;
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else {
return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + (1)),self__.meta,null));
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return !((coll__$1.entry_at(k) == null));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__8858 = cljs.core._assoc(ret,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(e,(1)));
var G__8859 = cljs.core.next(es);
ret = G__8858;
es = G__8859;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8860 = null;
var G__8860__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8860__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8860 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8860__2.call(this,self__,k);
case 3:
return G__8860__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8860.cljs$core$IFn$_invoke$arity$2 = G__8860__2;
G__8860.cljs$core$IFn$_invoke$arity$3 = G__8860__3;
return G__8860;
})()
;

cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args8833){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8833)));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if(!((t == null))){
var c = (function (){var G__8842 = k;
var G__8843 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__8842,G__8843) : self__.comp.call(null,G__8842,G__8843));
})();
if((c === (0))){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__8861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__8862 = t.left;
stack = G__8861;
t = G__8862;
continue;
} else {
var G__8863 = stack;
var G__8864 = t.right;
stack = G__8863;
t = G__8864;
continue;
}
} else {
if((c > (0))){
var G__8865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__8866 = t.right;
stack = G__8865;
t = G__8866;
continue;
} else {
var G__8867 = stack;
var G__8868 = t.left;
stack = G__8867;
t = G__8868;
continue;
}

}
}
} else {
if((stack == null)){
return null;
} else {
return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,(-1),null));
}
}
break;
}
} else {
return null;
}
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(entry) : cljs.core.key.call(null,entry));
});

cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.comp;
});

cljs.core.PersistentTreeMap.cljs$lang$type = true;

cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";

cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentTreeMap");
});

cljs.core.__GT_PersistentTreeMap = (function cljs$core$__GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){
return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});

cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,(0),null,(0)));
(cljs.core.PersistentTreeMap.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * keyval => key val
 * Returns a new hash map with supplied mappings.
 * @param {...*} var_args
 */
cljs.core.hash_map = (function() { 
var cljs$core$hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$){
var G__8869 = cljs.core.nnext(in$);
var G__8870 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__8869;
out = G__8870;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
};
var cljs$core$hash_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__8871__i = 0, G__8871__a = new Array(arguments.length -  0);
while (G__8871__i < G__8871__a.length) {G__8871__a[G__8871__i] = arguments[G__8871__i + 0]; ++G__8871__i;}
  keyvals = new cljs.core.IndexedSeq(G__8871__a,0);
} 
return cljs$core$hash_map__delegate.call(this,keyvals);};
cljs$core$hash_map.cljs$lang$maxFixedArity = 0;
cljs$core$hash_map.cljs$lang$applyTo = (function (arglist__8872){
var keyvals = cljs.core.seq(arglist__8872);
return cljs$core$hash_map__delegate(keyvals);
});
cljs$core$hash_map.cljs$core$IFn$_invoke$arity$variadic = cljs$core$hash_map__delegate;
return cljs$core$hash_map;
})()
;
/**
 * keyval => key val
 * Returns a new array map with supplied mappings.
 * @param {...*} var_args
 */
cljs.core.array_map = (function() { 
var cljs$core$array_map__delegate = function (keyvals){
return cljs.core.PersistentArrayMap.fromArray(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),true,false);
};
var cljs$core$array_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__8873__i = 0, G__8873__a = new Array(arguments.length -  0);
while (G__8873__i < G__8873__a.length) {G__8873__a[G__8873__i] = arguments[G__8873__i + 0]; ++G__8873__i;}
  keyvals = new cljs.core.IndexedSeq(G__8873__a,0);
} 
return cljs$core$array_map__delegate.call(this,keyvals);};
cljs$core$array_map.cljs$lang$maxFixedArity = 0;
cljs$core$array_map.cljs$lang$applyTo = (function (arglist__8874){
var keyvals = cljs.core.seq(arglist__8874);
return cljs$core$array_map__delegate(keyvals);
});
cljs$core$array_map.cljs$core$IFn$_invoke$arity$variadic = cljs$core$array_map__delegate;
return cljs$core$array_map;
})()
;
/**
 * keyval => key val
 * Returns a new object map with supplied mappings.
 * @param {...*} var_args
 */
cljs.core.obj_map = (function() { 
var cljs$core$obj_map__delegate = function (keyvals){
var ks = [];
var obj = (function (){var obj8878 = {};
return obj8878;
})();
var kvs = cljs.core.seq(keyvals);
while(true){
if(kvs){
ks.push(cljs.core.first(kvs));

(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));

var G__8879 = cljs.core.nnext(kvs);
kvs = G__8879;
continue;
} else {
return cljs.core.ObjMap.fromObject(ks,obj);
}
break;
}
};
var cljs$core$obj_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__8880__i = 0, G__8880__a = new Array(arguments.length -  0);
while (G__8880__i < G__8880__a.length) {G__8880__a[G__8880__i] = arguments[G__8880__i + 0]; ++G__8880__i;}
  keyvals = new cljs.core.IndexedSeq(G__8880__a,0);
} 
return cljs$core$obj_map__delegate.call(this,keyvals);};
cljs$core$obj_map.cljs$lang$maxFixedArity = 0;
cljs$core$obj_map.cljs$lang$applyTo = (function (arglist__8881){
var keyvals = cljs.core.seq(arglist__8881);
return cljs$core$obj_map__delegate(keyvals);
});
cljs$core$obj_map.cljs$core$IFn$_invoke$arity$variadic = cljs$core$obj_map__delegate;
return cljs$core$obj_map;
})()
;
/**
 * keyval => key val
 * Returns a new sorted map with supplied mappings.
 * @param {...*} var_args
 */
cljs.core.sorted_map = (function() { 
var cljs$core$sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$){
var G__8882 = cljs.core.nnext(in$);
var G__8883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__8882;
out = G__8883;
continue;
} else {
return out;
}
break;
}
};
var cljs$core$sorted_map = function (var_args){
var keyvals = null;
if (arguments.length > 0) {
var G__8884__i = 0, G__8884__a = new Array(arguments.length -  0);
while (G__8884__i < G__8884__a.length) {G__8884__a[G__8884__i] = arguments[G__8884__i + 0]; ++G__8884__i;}
  keyvals = new cljs.core.IndexedSeq(G__8884__a,0);
} 
return cljs$core$sorted_map__delegate.call(this,keyvals);};
cljs$core$sorted_map.cljs$lang$maxFixedArity = 0;
cljs$core$sorted_map.cljs$lang$applyTo = (function (arglist__8885){
var keyvals = cljs.core.seq(arglist__8885);
return cljs$core$sorted_map__delegate(keyvals);
});
cljs$core$sorted_map.cljs$core$IFn$_invoke$arity$variadic = cljs$core$sorted_map__delegate;
return cljs$core$sorted_map;
})()
;
/**
 * keyval => key val
 * Returns a new sorted map with supplied mappings, using the supplied comparator.
 * @param {...*} var_args
 */
cljs.core.sorted_map_by = (function() { 
var cljs$core$sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,(0),null,(0)));
while(true){
if(in$){
var G__8886 = cljs.core.nnext(in$);
var G__8887 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__8886;
out = G__8887;
continue;
} else {
return out;
}
break;
}
};
var cljs$core$sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (arguments.length > 1) {
var G__8888__i = 0, G__8888__a = new Array(arguments.length -  1);
while (G__8888__i < G__8888__a.length) {G__8888__a[G__8888__i] = arguments[G__8888__i + 1]; ++G__8888__i;}
  keyvals = new cljs.core.IndexedSeq(G__8888__a,0);
} 
return cljs$core$sorted_map_by__delegate.call(this,comparator,keyvals);};
cljs$core$sorted_map_by.cljs$lang$maxFixedArity = 1;
cljs$core$sorted_map_by.cljs$lang$applyTo = (function (arglist__8889){
var comparator = cljs.core.first(arglist__8889);
var keyvals = cljs.core.rest(arglist__8889);
return cljs$core$sorted_map_by__delegate(comparator,keyvals);
});
cljs$core$sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = cljs$core$sorted_map_by__delegate;
return cljs$core$sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.KeySeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.KeySeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__8890 = self__.mseq;
if(G__8890){
var bit__1235__auto__ = (G__8890.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__1235__auto__) || (G__8890.cljs$core$INext$)){
return true;
} else {
if((!G__8890.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8890);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8890);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.KeySeq(nseq,self__._meta));
}
});

cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_key$arity$1(null);
});

cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__8891 = self__.mseq;
if(G__8891){
var bit__1235__auto__ = (G__8891.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__1235__auto__) || (G__8891.cljs$core$INext$)){
return true;
} else {
if((!G__8891.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8891);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8891);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.KeySeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.KeySeq(self__.mseq,new_meta));
});

cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.KeySeq.cljs$lang$type = true;

cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";

cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/KeySeq");
});

cljs.core.__GT_KeySeq = (function cljs$core$__GT_KeySeq(mseq,_meta){
return (new cljs.core.KeySeq(mseq,_meta));
});

(cljs.core.KeySeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Returns a sequence of the map's keys.
 */
cljs.core.keys = (function cljs$core$keys(hash_map){
var temp__4425__auto__ = cljs.core.seq(hash_map);
if(temp__4425__auto__){
var mseq = temp__4425__auto__;
return (new cljs.core.KeySeq(mseq,null));
} else {
return null;
}
});
/**
 * Returns the key of the map entry.
 */
cljs.core.key = (function cljs$core$key(map_entry){
return cljs.core._key(map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ValSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.ValSeq.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__._meta;
});

cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__8892 = self__.mseq;
if(G__8892){
var bit__1235__auto__ = (G__8892.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__1235__auto__) || (G__8892.cljs$core$INext$)){
return true;
} else {
if((!G__8892.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8892);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8892);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if((nseq == null)){
return null;
} else {
return (new cljs.core.ValSeq(nseq,self__._meta));
}
});

cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash_ordered_coll(coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);
return me.cljs$core$IMapEntry$_val$arity$1(null);
});

cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var nseq = (((function (){var G__8893 = self__.mseq;
if(G__8893){
var bit__1235__auto__ = (G__8893.cljs$lang$protocol_mask$partition0$ & (128));
if((bit__1235__auto__) || (G__8893.cljs$core$INext$)){
return true;
} else {
if((!G__8893.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8893);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__8893);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));
if(!((nseq == null))){
return (new cljs.core.ValSeq(nseq,self__._meta));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.ValSeq(self__.mseq,new_meta));
});

cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

cljs.core.ValSeq.cljs$lang$type = true;

cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";

cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ValSeq");
});

cljs.core.__GT_ValSeq = (function cljs$core$__GT_ValSeq(mseq,_meta){
return (new cljs.core.ValSeq(mseq,_meta));
});

(cljs.core.ValSeq.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Returns a sequence of the map's values.
 */
cljs.core.vals = (function cljs$core$vals(hash_map){
var temp__4425__auto__ = cljs.core.seq(hash_map);
if(temp__4425__auto__){
var mseq = temp__4425__auto__;
return (new cljs.core.ValSeq(mseq,null));
} else {
return null;
}
});
/**
 * Returns the value in the map entry.
 */
cljs.core.val = (function cljs$core$val(map_entry){
return cljs.core._val(map_entry);
});
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping from
 * the latter (left-to-right) will be the mapping in the result.
 * @param {...*} var_args
 */
cljs.core.merge = (function() { 
var cljs$core$merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__8894_SHARP_,p2__8895_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__559__auto__ = p1__8894_SHARP_;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__8895_SHARP_);
}),maps);
} else {
return null;
}
};
var cljs$core$merge = function (var_args){
var maps = null;
if (arguments.length > 0) {
var G__8896__i = 0, G__8896__a = new Array(arguments.length -  0);
while (G__8896__i < G__8896__a.length) {G__8896__a[G__8896__i] = arguments[G__8896__i + 0]; ++G__8896__i;}
  maps = new cljs.core.IndexedSeq(G__8896__a,0);
} 
return cljs$core$merge__delegate.call(this,maps);};
cljs$core$merge.cljs$lang$maxFixedArity = 0;
cljs$core$merge.cljs$lang$applyTo = (function (arglist__8897){
var maps = cljs.core.seq(arglist__8897);
return cljs$core$merge__delegate(maps);
});
cljs$core$merge.cljs$core$IFn$_invoke$arity$variadic = cljs$core$merge__delegate;
return cljs$core$merge;
})()
;
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 * the first.  If a key occurs in more than one map, the mapping(s)
 * from the latter (left-to-right) will be combined with the mapping in
 * the result by calling (f val-in-result val-in-latter).
 * @param {...*} var_args
 */
cljs.core.merge_with = (function() { 
var cljs$core$merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first(e);
var v = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__8900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__8901 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__8900,G__8901) : f.call(null,G__8900,G__8901));
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__559__auto__ = m1;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else {
return null;
}
};
var cljs$core$merge_with = function (f,var_args){
var maps = null;
if (arguments.length > 1) {
var G__8902__i = 0, G__8902__a = new Array(arguments.length -  1);
while (G__8902__i < G__8902__a.length) {G__8902__a[G__8902__i] = arguments[G__8902__i + 1]; ++G__8902__i;}
  maps = new cljs.core.IndexedSeq(G__8902__a,0);
} 
return cljs$core$merge_with__delegate.call(this,f,maps);};
cljs$core$merge_with.cljs$lang$maxFixedArity = 1;
cljs$core$merge_with.cljs$lang$applyTo = (function (arglist__8903){
var f = cljs.core.first(arglist__8903);
var maps = cljs.core.rest(arglist__8903);
return cljs$core$merge_with__delegate(f,maps);
});
cljs$core$merge_with.cljs$core$IFn$_invoke$arity$variadic = cljs$core$merge_with__delegate;
return cljs$core$merge_with;
})()
;
/**
 * Returns a map containing only those entries in map whose key is in keys
 */
cljs.core.select_keys = (function cljs$core$select_keys(map,keyseq){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var keys = cljs.core.seq(keyseq);
while(true){
if(keys){
var key = cljs.core.first(keys);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.cst$kw$cljs$core_SLASH_not_DASH_found);
var G__8904 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.cst$kw$cljs$core_SLASH_not_DASH_found))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__8905 = cljs.core.next(keys);
ret = G__8904;
keys = G__8905;
continue;
} else {
return cljs.core.with_meta(ret,cljs.core.meta(map));
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 8196;
})
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentHashSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentHashSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentHashSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentHashSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__8908 = cljs.core.seq(coll);
var chunk__8909 = null;
var count__8910 = (0);
var i__8911 = (0);
while(true){
if((i__8911 < count__8910)){
var vec__8912 = chunk__8909.cljs$core$IIndexed$_nth$arity$2(null,i__8911);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8912,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8914 = seq__8908;
var G__8915 = chunk__8909;
var G__8916 = count__8910;
var G__8917 = (i__8911 + (1));
seq__8908 = G__8914;
chunk__8909 = G__8915;
count__8910 = G__8916;
i__8911 = G__8917;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8908);
if(temp__4425__auto__){
var seq__8908__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8908__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8908__$1);
var G__8918 = cljs.core.chunk_rest(seq__8908__$1);
var G__8919 = c__1341__auto__;
var G__8920 = cljs.core.count(c__1341__auto__);
var G__8921 = (0);
seq__8908 = G__8918;
chunk__8909 = G__8919;
count__8910 = G__8920;
i__8911 = G__8921;
continue;
} else {
var vec__8913 = cljs.core.first(seq__8908__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8913,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8913,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8922 = cljs.core.next(seq__8908__$1);
var G__8923 = null;
var G__8924 = (0);
var G__8925 = (0);
seq__8908 = G__8922;
chunk__8909 = G__8923;
count__8910 = G__8924;
i__8911 = G__8925;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
if(cljs.core._contains_key_QMARK_(self__.hash_map,v)){
return v;
} else {
return not_found;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._count(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__8906_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__8906_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.hash_map);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});

cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});

cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8926 = null;
var G__8926__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8926__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8926 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8926__2.call(this,self__,k);
case 3:
return G__8926__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8926.cljs$core$IFn$_invoke$arity$2 = G__8926__2;
G__8926.cljs$core$IFn$_invoke$arity$3 = G__8926__3;
return G__8926;
})()
;

cljs.core.PersistentHashSet.prototype.apply = (function (self__,args8907){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8907)));
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentHashSet.cljs$lang$type = true;

cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";

cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentHashSet");
});

cljs.core.__GT_PersistentHashSet = (function cljs$core$__GT_PersistentHashSet(meta,hash_map,__hash){
return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});

cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,(0)));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){
var len = items.length;
if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)){
var arr = ((no_clone)?items:cljs.core.aclone(items));
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__8927 = (i + (1));
var G__8928 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__8927;
out = G__8928;
continue;
} else {
return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else {
var i = (0);
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__8929 = (i + (1));
var G__8930 = cljs.core._conj_BANG_(out,(items[i]));
i = G__8929;
out = G__8930;
continue;
} else {
return cljs.core._persistent_BANG_(out);
}
break;
}
}
});
(cljs.core.PersistentHashSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition1$ = 136;
this.cljs$lang$protocol_mask$partition0$ = 259;
})
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(self__.transient_map,o,null);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
});

cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
self__.transient_map = cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(self__.transient_map,v);

return tcoll__$1;
});

cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
var tcoll__$1 = this;
return cljs.core.count(self__.transient_map);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
var tcoll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});

cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
var tcoll__$1 = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return v;
}
});

cljs.core.TransientHashSet.prototype.call = (function() {
var G__8932 = null;
var G__8932__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});
var G__8932__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var tcoll = self____$1;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});
G__8932 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8932__2.call(this,self__,k);
case 3:
return G__8932__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8932.cljs$core$IFn$_invoke$arity$2 = G__8932__2;
G__8932.cljs$core$IFn$_invoke$arity$3 = G__8932__3;
return G__8932;
})()
;

cljs.core.TransientHashSet.prototype.apply = (function (self__,args8931){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8931)));
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return null;
} else {
return k;
}
});

cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var tcoll = this;
if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
});

cljs.core.TransientHashSet.cljs$lang$type = true;

cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";

cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/TransientHashSet");
});

cljs.core.__GT_TransientHashSet = (function cljs$core$__GT_TransientHashSet(transient_map){
return (new cljs.core.TransientHashSet(transient_map));
});


/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.PersistentTreeSet.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.PersistentTreeSet.prototype.keys = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.entries = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_set_entries_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.values = (function (){
var self__ = this;
var coll = this;
return cljs.core.es6_iterator(cljs.core.seq(coll));
});

cljs.core.PersistentTreeSet.prototype.has = (function (k){
var self__ = this;
var coll = this;
return cljs.core.contains_QMARK_(coll,k);
});

cljs.core.PersistentTreeSet.prototype.forEach = (function (f){
var self__ = this;
var coll = this;
var seq__8935 = cljs.core.seq(coll);
var chunk__8936 = null;
var count__8937 = (0);
var i__8938 = (0);
while(true){
if((i__8938 < count__8937)){
var vec__8939 = chunk__8936.cljs$core$IIndexed$_nth$arity$2(null,i__8938);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8939,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8941 = seq__8935;
var G__8942 = chunk__8936;
var G__8943 = count__8937;
var G__8944 = (i__8938 + (1));
seq__8935 = G__8941;
chunk__8936 = G__8942;
count__8937 = G__8943;
i__8938 = G__8944;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8935);
if(temp__4425__auto__){
var seq__8935__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8935__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__8935__$1);
var G__8945 = cljs.core.chunk_rest(seq__8935__$1);
var G__8946 = c__1341__auto__;
var G__8947 = cljs.core.count(c__1341__auto__);
var G__8948 = (0);
seq__8935 = G__8945;
chunk__8936 = G__8946;
count__8937 = G__8947;
i__8938 = G__8948;
continue;
} else {
var vec__8940 = cljs.core.first(seq__8935__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8940,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8949 = cljs.core.next(seq__8935__$1);
var G__8950 = null;
var G__8951 = (0);
var G__8952 = (0);
seq__8935 = G__8949;
chunk__8936 = G__8950;
count__8937 = G__8951;
i__8938 = G__8952;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var coll__$1 = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null))){
return n.key;
} else {
return not_found;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if((cljs.core.count(self__.tree_map) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else {
return null;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_unordered_coll(coll__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_(((function (coll__$1){
return (function (p1__8933_SHARP_){
return cljs.core.contains_QMARK_(coll__$1,p1__8933_SHARP_);
});})(coll__$1))
,other));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.keys(self__.tree_map);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});

cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__8953 = null;
var G__8953__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__8953__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__8953 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8953__2.call(this,self__,k);
case 3:
return G__8953__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8953.cljs$core$IFn$_invoke$arity$2 = G__8953__2;
G__8953.cljs$core$IFn$_invoke$arity$3 = G__8953__3;
return G__8953;
})()
;

cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args8934){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8934)));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
var coll__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
return entry;
});

cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._comparator(self__.tree_map);
});

cljs.core.PersistentTreeSet.cljs$lang$type = true;

cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";

cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/PersistentTreeSet");
});

cljs.core.__GT_PersistentTreeSet = (function cljs$core$__GT_PersistentTreeSet(meta,tree_map,__hash){
return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});

cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,(0)));
(cljs.core.PersistentTreeSet.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
cljs.core.set_from_indexed_seq = (function cljs$core$set_from_indexed_seq(iseq){
var arr = iseq.arr;
var ret = (function (){var a__1435__auto__ = arr;
var i = (0);
var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < a__1435__auto__.length)){
var G__8954 = (i + (1));
var G__8955 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__8954;
res = G__8955;
continue;
} else {
return res;
}
break;
}
})();
return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
 * Returns a set of the distinct elements of coll.
 */
cljs.core.set = (function cljs$core$set(coll){
var in$ = cljs.core.seq(coll);
if((in$ == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === (0)))){
return cljs.core.set_from_indexed_seq(in$);
} else {
var in$__$1 = in$;
var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(!((in$__$1 == null))){
var G__8956 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__8957 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__8956;
out = G__8957;
continue;
} else {
return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
}
break;
}

}
}
});
/**
 * @param {...*} var_args
 */
cljs.core.hash_set = (function() {
var cljs$core$hash_set = null;
var cljs$core$hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var cljs$core$hash_set__1 = (function() { 
var G__8958__delegate = function (keys){
return cljs.core.set(keys);
};
var G__8958 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__8959__i = 0, G__8959__a = new Array(arguments.length -  0);
while (G__8959__i < G__8959__a.length) {G__8959__a[G__8959__i] = arguments[G__8959__i + 0]; ++G__8959__i;}
  keys = new cljs.core.IndexedSeq(G__8959__a,0);
} 
return G__8958__delegate.call(this,keys);};
G__8958.cljs$lang$maxFixedArity = 0;
G__8958.cljs$lang$applyTo = (function (arglist__8960){
var keys = cljs.core.seq(arglist__8960);
return G__8958__delegate(keys);
});
G__8958.cljs$core$IFn$_invoke$arity$variadic = G__8958__delegate;
return G__8958;
})()
;
cljs$core$hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return cljs$core$hash_set__0.call(this);
default:
var G__8961 = null;
if (arguments.length > 0) {
var G__8962__i = 0, G__8962__a = new Array(arguments.length -  0);
while (G__8962__i < G__8962__a.length) {G__8962__a[G__8962__i] = arguments[G__8962__i + 0]; ++G__8962__i;}
G__8961 = new cljs.core.IndexedSeq(G__8962__a,0);
}
return cljs$core$hash_set__1.cljs$core$IFn$_invoke$arity$variadic(G__8961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$hash_set.cljs$lang$maxFixedArity = 0;
cljs$core$hash_set.cljs$lang$applyTo = cljs$core$hash_set__1.cljs$lang$applyTo;
cljs$core$hash_set.cljs$core$IFn$_invoke$arity$0 = cljs$core$hash_set__0;
cljs$core$hash_set.cljs$core$IFn$_invoke$arity$variadic = cljs$core$hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$hash_set;
})()
;
/**
 * Returns a new sorted set with supplied keys.
 * @param {...*} var_args
 */
cljs.core.sorted_set = (function() { 
var cljs$core$sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var cljs$core$sorted_set = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__8963__i = 0, G__8963__a = new Array(arguments.length -  0);
while (G__8963__i < G__8963__a.length) {G__8963__a[G__8963__i] = arguments[G__8963__i + 0]; ++G__8963__i;}
  keys = new cljs.core.IndexedSeq(G__8963__a,0);
} 
return cljs$core$sorted_set__delegate.call(this,keys);};
cljs$core$sorted_set.cljs$lang$maxFixedArity = 0;
cljs$core$sorted_set.cljs$lang$applyTo = (function (arglist__8964){
var keys = cljs.core.seq(arglist__8964);
return cljs$core$sorted_set__delegate(keys);
});
cljs$core$sorted_set.cljs$core$IFn$_invoke$arity$variadic = cljs$core$sorted_set__delegate;
return cljs$core$sorted_set;
})()
;
/**
 * Returns a new sorted set with supplied keys, using the supplied comparator.
 * @param {...*} var_args
 */
cljs.core.sorted_set_by = (function() { 
var cljs$core$sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),(0))),keys);
};
var cljs$core$sorted_set_by = function (comparator,var_args){
var keys = null;
if (arguments.length > 1) {
var G__8965__i = 0, G__8965__a = new Array(arguments.length -  1);
while (G__8965__i < G__8965__a.length) {G__8965__a[G__8965__i] = arguments[G__8965__i + 1]; ++G__8965__i;}
  keys = new cljs.core.IndexedSeq(G__8965__a,0);
} 
return cljs$core$sorted_set_by__delegate.call(this,comparator,keys);};
cljs$core$sorted_set_by.cljs$lang$maxFixedArity = 1;
cljs$core$sorted_set_by.cljs$lang$applyTo = (function (arglist__8966){
var comparator = cljs.core.first(arglist__8966);
var keys = cljs.core.rest(arglist__8966);
return cljs$core$sorted_set_by__delegate(comparator,keys);
});
cljs$core$sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = cljs$core$sorted_set_by__delegate;
return cljs$core$sorted_set_by;
})()
;
/**
 * Given a map of replacement pairs and a vector/collection, returns a
 * vector/seq with any elements = a key in smap replaced with the
 * corresponding val in smap.  Returns a transducer when no collection
 * is provided.
 */
cljs.core.replace = (function() {
var cljs$core$replace = null;
var cljs$core$replace__1 = (function (smap){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__8967_SHARP_){
var temp__4423__auto__ = cljs.core.find(smap,p1__8967_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return cljs.core.val(e);
} else {
return p1__8967_SHARP_;
}
}));
});
var cljs$core$replace__2 = (function (smap,coll){
if(cljs.core.vector_QMARK_(coll)){
var n = cljs.core.count(coll);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n){
return (function (v,i){
var temp__4423__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else {
return v;
}
});})(n))
,coll,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.inc,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8968_SHARP_){
var temp__4423__auto__ = cljs.core.find(smap,p1__8968_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return cljs.core.second(e);
} else {
return p1__8968_SHARP_;
}
}),coll);
}
});
cljs$core$replace = function(smap,coll){
switch(arguments.length){
case 1:
return cljs$core$replace__1.call(this,smap);
case 2:
return cljs$core$replace__2.call(this,smap,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$replace.cljs$core$IFn$_invoke$arity$1 = cljs$core$replace__1;
cljs$core$replace.cljs$core$IFn$_invoke$arity$2 = cljs$core$replace__2;
return cljs$core$replace;
})()
;
/**
 * Returns a lazy sequence of the elements of coll with duplicates removed
 */
cljs.core.distinct = (function cljs$core$distinct(coll){
var step = (function cljs$core$distinct_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__8979,seen__$1){
while(true){
var vec__8980 = p__8979;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8980,(0),null);
var xs__$1 = vec__8980;
var temp__4425__auto__ = cljs.core.seq(xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.contains_QMARK_(seen__$1,f)){
var G__8981 = cljs.core.rest(s);
var G__8982 = seen__$1;
p__8979 = G__8981;
seen__$1 = G__8982;
continue;
} else {
return cljs.core.cons(f,cljs$core$distinct_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function cljs$core$butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next(s__$1)){
var G__8983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__8984 = cljs.core.next(s__$1);
ret = G__8983;
s__$1 = G__8984;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
 * Returns the name String of a string, symbol or keyword.
 */
cljs.core.name = (function cljs$core$name(x){
if((function (){var G__8986 = x;
if(G__8986){
var bit__1228__auto__ = (G__8986.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__1228__auto__) || (G__8986.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return x.cljs$core$INamed$_name$arity$1(null);
} else {
if(typeof x === 'string'){
return x;
} else {
throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
 * Returns a map with the keys mapped to the corresponding vals.
 */
cljs.core.zipmap = (function cljs$core$zipmap(keys,vals){
var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((ks) && (vs)){
var G__8987 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map,cljs.core.first(ks),cljs.core.first(vs));
var G__8988 = cljs.core.next(ks);
var G__8989 = cljs.core.next(vs);
map = G__8987;
ks = G__8988;
vs = G__8989;
continue;
} else {
return cljs.core.persistent_BANG_(map);
}
break;
}
});
/**
 * Returns the x for which (k x), a number, is greatest.
 * @param {...*} var_args
 */
cljs.core.max_key = (function() {
var cljs$core$max_key = null;
var cljs$core$max_key__2 = (function (k,x){
return x;
});
var cljs$core$max_key__3 = (function (k,x,y){
if(((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)) > (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y)))){
return x;
} else {
return y;
}
});
var cljs$core$max_key__4 = (function() { 
var G__8992__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8990_SHARP_,p2__8991_SHARP_){
return cljs$core$max_key.cljs$core$IFn$_invoke$arity$3(k,p1__8990_SHARP_,p2__8991_SHARP_);
}),cljs$core$max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__8992 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
var G__8993__i = 0, G__8993__a = new Array(arguments.length -  3);
while (G__8993__i < G__8993__a.length) {G__8993__a[G__8993__i] = arguments[G__8993__i + 3]; ++G__8993__i;}
  more = new cljs.core.IndexedSeq(G__8993__a,0);
} 
return G__8992__delegate.call(this,k,x,y,more);};
G__8992.cljs$lang$maxFixedArity = 3;
G__8992.cljs$lang$applyTo = (function (arglist__8994){
var k = cljs.core.first(arglist__8994);
arglist__8994 = cljs.core.next(arglist__8994);
var x = cljs.core.first(arglist__8994);
arglist__8994 = cljs.core.next(arglist__8994);
var y = cljs.core.first(arglist__8994);
var more = cljs.core.rest(arglist__8994);
return G__8992__delegate(k,x,y,more);
});
G__8992.cljs$core$IFn$_invoke$arity$variadic = G__8992__delegate;
return G__8992;
})()
;
cljs$core$max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return cljs$core$max_key__2.call(this,k,x);
case 3:
return cljs$core$max_key__3.call(this,k,x,y);
default:
var G__8995 = null;
if (arguments.length > 3) {
var G__8996__i = 0, G__8996__a = new Array(arguments.length -  3);
while (G__8996__i < G__8996__a.length) {G__8996__a[G__8996__i] = arguments[G__8996__i + 3]; ++G__8996__i;}
G__8995 = new cljs.core.IndexedSeq(G__8996__a,0);
}
return cljs$core$max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, G__8995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$max_key.cljs$lang$maxFixedArity = 3;
cljs$core$max_key.cljs$lang$applyTo = cljs$core$max_key__4.cljs$lang$applyTo;
cljs$core$max_key.cljs$core$IFn$_invoke$arity$2 = cljs$core$max_key__2;
cljs$core$max_key.cljs$core$IFn$_invoke$arity$3 = cljs$core$max_key__3;
cljs$core$max_key.cljs$core$IFn$_invoke$arity$variadic = cljs$core$max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$max_key;
})()
;
/**
 * Returns the x for which (k x), a number, is least.
 * @param {...*} var_args
 */
cljs.core.min_key = (function() {
var cljs$core$min_key = null;
var cljs$core$min_key__2 = (function (k,x){
return x;
});
var cljs$core$min_key__3 = (function (k,x,y){
if(((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)) < (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y)))){
return x;
} else {
return y;
}
});
var cljs$core$min_key__4 = (function() { 
var G__8999__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__8997_SHARP_,p2__8998_SHARP_){
return cljs$core$min_key.cljs$core$IFn$_invoke$arity$3(k,p1__8997_SHARP_,p2__8998_SHARP_);
}),cljs$core$min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__8999 = function (k,x,y,var_args){
var more = null;
if (arguments.length > 3) {
var G__9000__i = 0, G__9000__a = new Array(arguments.length -  3);
while (G__9000__i < G__9000__a.length) {G__9000__a[G__9000__i] = arguments[G__9000__i + 3]; ++G__9000__i;}
  more = new cljs.core.IndexedSeq(G__9000__a,0);
} 
return G__8999__delegate.call(this,k,x,y,more);};
G__8999.cljs$lang$maxFixedArity = 3;
G__8999.cljs$lang$applyTo = (function (arglist__9001){
var k = cljs.core.first(arglist__9001);
arglist__9001 = cljs.core.next(arglist__9001);
var x = cljs.core.first(arglist__9001);
arglist__9001 = cljs.core.next(arglist__9001);
var y = cljs.core.first(arglist__9001);
var more = cljs.core.rest(arglist__9001);
return G__8999__delegate(k,x,y,more);
});
G__8999.cljs$core$IFn$_invoke$arity$variadic = G__8999__delegate;
return G__8999;
})()
;
cljs$core$min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return cljs$core$min_key__2.call(this,k,x);
case 3:
return cljs$core$min_key__3.call(this,k,x,y);
default:
var G__9002 = null;
if (arguments.length > 3) {
var G__9003__i = 0, G__9003__a = new Array(arguments.length -  3);
while (G__9003__i < G__9003__a.length) {G__9003__a[G__9003__i] = arguments[G__9003__i + 3]; ++G__9003__i;}
G__9002 = new cljs.core.IndexedSeq(G__9003__a,0);
}
return cljs$core$min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, G__9002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$min_key.cljs$lang$maxFixedArity = 3;
cljs$core$min_key.cljs$lang$applyTo = cljs$core$min_key__4.cljs$lang$applyTo;
cljs$core$min_key.cljs$core$IFn$_invoke$arity$2 = cljs$core$min_key__2;
cljs$core$min_key.cljs$core$IFn$_invoke$arity$3 = cljs$core$min_key__3;
cljs$core$min_key.cljs$core$IFn$_invoke$arity$variadic = cljs$core$min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$min_key;
})()
;

/**
* @constructor
*/
cljs.core.ArrayList = (function (arr){
this.arr = arr;
})
cljs.core.ArrayList.prototype.add = (function (x){
var self__ = this;
var _ = this;
return self__.arr.push(x);
});

cljs.core.ArrayList.prototype.size = (function (){
var self__ = this;
var _ = this;
return self__.arr.length;
});

cljs.core.ArrayList.prototype.clear = (function (){
var self__ = this;
var _ = this;
return self__.arr = [];
});

cljs.core.ArrayList.prototype.isEmpty = (function (){
var self__ = this;
var _ = this;
return (self__.arr.length === (0));
});

cljs.core.ArrayList.prototype.toArray = (function (){
var self__ = this;
var _ = this;
return self__.arr;
});

cljs.core.ArrayList.cljs$lang$type = true;

cljs.core.ArrayList.cljs$lang$ctorStr = "cljs.core/ArrayList";

cljs.core.ArrayList.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ArrayList");
});

cljs.core.__GT_ArrayList = (function cljs$core$__GT_ArrayList(arr){
return (new cljs.core.ArrayList(arr));
});

cljs.core.array_list = (function cljs$core$array_list(){
return (new cljs.core.ArrayList([]));
});
/**
 * Returns a lazy sequence of lists like partition, but may include
 * partitions with fewer than n items at the end.  Returns a stateful
 * transducer when no collection is provided.
 */
cljs.core.partition_all = (function() {
var cljs$core$partition_all = null;
var cljs$core$partition_all__1 = (function (n){
return (function (rf){
var a = cljs.core.array_list();
return ((function (a){
return (function() {
var G__9007 = null;
var G__9007__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9007__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v)));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result__$1) : rf.call(null,result__$1));
});
var G__9007__2 = (function (result,input){
a.add(input);

if((n === a.size())){
var v = cljs.core.vec(a.toArray());
a.clear();

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v));
} else {
return result;
}
});
G__9007 = function(result,input){
switch(arguments.length){
case 0:
return G__9007__0.call(this);
case 1:
return G__9007__1.call(this,result);
case 2:
return G__9007__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9007.cljs$core$IFn$_invoke$arity$0 = G__9007__0;
G__9007.cljs$core$IFn$_invoke$arity$1 = G__9007__1;
G__9007.cljs$core$IFn$_invoke$arity$2 = G__9007__2;
return G__9007;
})()
;})(a))
});
});
var cljs$core$partition_all__2 = (function (n,coll){
return cljs$core$partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var cljs$core$partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.cons(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,s),cljs$core$partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,s)));
} else {
return null;
}
}),null,null));
});
cljs$core$partition_all = function(n,step,coll){
switch(arguments.length){
case 1:
return cljs$core$partition_all__1.call(this,n);
case 2:
return cljs$core$partition_all__2.call(this,n,step);
case 3:
return cljs$core$partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$partition_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$partition_all__1;
cljs$core$partition_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$partition_all__2;
cljs$core$partition_all.cljs$core$IFn$_invoke$arity$3 = cljs$core$partition_all__3;
return cljs$core$partition_all;
})()
;
/**
 * Returns a lazy sequence of successive items from coll while
 * (pred item) returns true. pred must be free of side-effects.
 * Returns a transducer when no collection is provided.
 */
cljs.core.take_while = (function() {
var cljs$core$take_while = null;
var cljs$core$take_while__1 = (function (pred){
return (function (rf){
return (function() {
var G__9012 = null;
var G__9012__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9012__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__9012__2 = (function (result,input){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(input) : pred.call(null,input)))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return cljs.core.reduced(result);
}
});
G__9012 = function(result,input){
switch(arguments.length){
case 0:
return G__9012__0.call(this);
case 1:
return G__9012__1.call(this,result);
case 2:
return G__9012__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9012.cljs$core$IFn$_invoke$arity$0 = G__9012__0;
G__9012.cljs$core$IFn$_invoke$arity$1 = G__9012__1;
G__9012.cljs$core$IFn$_invoke$arity$2 = G__9012__2;
return G__9012;
})()
});
});
var cljs$core$take_while__2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
if(cljs.core.truth_((function (){var G__9011 = cljs.core.first(s);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__9011) : pred.call(null,G__9011));
})())){
return cljs.core.cons(cljs.core.first(s),cljs$core$take_while.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)));
} else {
return null;
}
} else {
return null;
}
}),null,null));
});
cljs$core$take_while = function(pred,coll){
switch(arguments.length){
case 1:
return cljs$core$take_while__1.call(this,pred);
case 2:
return cljs$core$take_while__2.call(this,pred,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$take_while.cljs$core$IFn$_invoke$arity$1 = cljs$core$take_while__1;
cljs$core$take_while.cljs$core$IFn$_invoke$arity$2 = cljs$core$take_while__2;
return cljs$core$take_while;
})()
;
cljs.core.mk_bound_fn = (function cljs$core$mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator(sc);
var G__9021 = (function (){var G__9023 = cljs.core._entry_key(sc,e);
var G__9024 = key;
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__9023,G__9024) : comp.call(null,G__9023,G__9024));
})();
var G__9022 = (0);
return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2(G__9021,G__9022) : test.call(null,G__9021,G__9022));
});
});
/**
 * sc must be a sorted collection, test(s) one of <, <=, > or
 * >=. Returns a seq of those entries with keys ek for
 * which (test (.. sc comparator (compare ek key)) 0) is true
 */
cljs.core.subseq = (function() {
var cljs$core$subseq = null;
var cljs$core$subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test))){
var temp__4425__auto__ = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9027 = temp__4425__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9027,(0),null);
var s = vec__9027;
if(cljs.core.truth_((include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(e) : include.call(null,e)))){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,true));
}
});
var cljs$core$subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4425__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9028 = temp__4425__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9028,(0),null);
var s = vec__9028;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
cljs$core$subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return cljs$core$subseq__3.call(this,sc,start_test,start_key);
case 5:
return cljs$core$subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$subseq.cljs$core$IFn$_invoke$arity$3 = cljs$core$subseq__3;
cljs$core$subseq.cljs$core$IFn$_invoke$arity$5 = cljs$core$subseq__5;
return cljs$core$subseq;
})()
;
/**
 * sc must be a sorted collection, test(s) one of <, <=, > or
 * >=. Returns a reverse seq of those entries with keys ek for
 * which (test (.. sc comparator (compare ek key)) 0) is true
 */
cljs.core.rsubseq = (function() {
var cljs$core$rsubseq = null;
var cljs$core$rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test))){
var temp__4425__auto__ = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9031 = temp__4425__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9031,(0),null);
var s = vec__9031;
if(cljs.core.truth_((include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(e) : include.call(null,e)))){
return s;
} else {
return cljs.core.next(s);
}
} else {
return null;
}
} else {
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(include,cljs.core._sorted_seq(sc,false));
}
});
var cljs$core$rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4425__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__9032 = temp__4425__auto__;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9032,(0),null);
var s = vec__9032;
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
} else {
return null;
}
});
cljs$core$rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return cljs$core$rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return cljs$core$rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$rsubseq.cljs$core$IFn$_invoke$arity$3 = cljs$core$rsubseq__3;
cljs$core$rsubseq.cljs$core$IFn$_invoke$arity$5 = cljs$core$rsubseq__5;
return cljs$core$rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.RangeIterator = (function (i,end,step){
this.i = i;
this.end = end;
this.step = step;
})
cljs.core.RangeIterator.prototype.hasNext = (function (){
var self__ = this;
var _ = this;
if((self__.step > (0))){
return (self__.i < self__.end);
} else {
return (self__.i > self__.end);
}
});

cljs.core.RangeIterator.prototype.next = (function (){
var self__ = this;
var _ = this;
var ret = self__.i;
self__.i = (self__.i + self__.step);

return ret;
});

cljs.core.RangeIterator.cljs$lang$type = true;

cljs.core.RangeIterator.cljs$lang$ctorStr = "cljs.core/RangeIterator";

cljs.core.RangeIterator.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/RangeIterator");
});

cljs.core.__GT_RangeIterator = (function cljs$core$__GT_RangeIterator(i,end,step){
return (new cljs.core.RangeIterator(i,end,step));
});


/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

cljs.core.Range.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
throw (new Error("Index out of bounds"));
}
}
});

cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
var rng__$1 = this;
if((n < cljs.core._count(rng__$1))){
return (self__.start + (n * self__.step));
} else {
if(((self__.start > self__.end)) && ((self__.step === (0)))){
return self__.start;
} else {
return not_found;
}
}
});

cljs.core.Range.prototype.cljs$core$IIterable$ = true;

cljs.core.Range.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.RangeIterator(self__.start,self__.end,self__.step));
});

cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return self__.meta;
});

cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if(((self__.start + self__.step) < self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
} else {
if(((self__.start + self__.step) > self__.end)){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(cljs.core.not(cljs.core._seq(rng__$1))){
return (0);
} else {
var G__9033 = ((self__.end - self__.start) / self__.step);
return Math.ceil(G__9033);
}
});

cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
var h__975__auto__ = self__.__hash;
if(!((h__975__auto__ == null))){
return h__975__auto__;
} else {
var h__975__auto____$1 = cljs.core.hash_ordered_coll(rng__$1);
self__.__hash = h__975__auto____$1;

return h__975__auto____$1;
}
});

cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
var rng__$1 = this;
return cljs.core.equiv_sequential(rng__$1,other);
});

cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
var rng__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});

cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,init){
var self__ = this;
var rng__$1 = this;
var i = self__.start;
var ret = init;
while(true){
if((((self__.step > (0)))?(i < self__.end):(i > self__.end))){
var ret__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ret,i) : f.call(null,ret,i));
if(cljs.core.reduced_QMARK_(ret__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret__$1) : cljs.core.deref.call(null,ret__$1));
} else {
var G__9034 = (i + self__.step);
var G__9035 = ret__$1;
i = G__9034;
ret = G__9035;
continue;
}
} else {
return ret;
}
break;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((cljs.core._seq(rng__$1) == null)){
return null;
} else {
return self__.start;
}
});

cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if(!((cljs.core._seq(rng__$1) == null))){
return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else {
return cljs.core.List.EMPTY;
}
});

cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
var rng__$1 = this;
if((self__.step > (0))){
if((self__.start < self__.end)){
return rng__$1;
} else {
return null;
}
} else {
if((self__.start > self__.end)){
return rng__$1;
} else {
return null;
}
}
});

cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
var rng__$1 = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});

cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
var rng__$1 = this;
return cljs.core.cons(o,rng__$1);
});

cljs.core.Range.cljs$lang$type = true;

cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";

cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Range");
});

cljs.core.__GT_Range = (function cljs$core$__GT_Range(meta,start,end,step,__hash){
return (new cljs.core.Range(meta,start,end,step,__hash));
});

(cljs.core.Range.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1,
 * and end to infinity.
 */
cljs.core.range = (function() {
var cljs$core$range = null;
var cljs$core$range__0 = (function (){
return cljs$core$range.cljs$core$IFn$_invoke$arity$3((0),Number.MAX_VALUE,(1));
});
var cljs$core$range__1 = (function (end){
return cljs$core$range.cljs$core$IFn$_invoke$arity$3((0),end,(1));
});
var cljs$core$range__2 = (function (start,end){
return cljs$core$range.cljs$core$IFn$_invoke$arity$3(start,end,(1));
});
var cljs$core$range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
cljs$core$range = function(start,end,step){
switch(arguments.length){
case 0:
return cljs$core$range__0.call(this);
case 1:
return cljs$core$range__1.call(this,start);
case 2:
return cljs$core$range__2.call(this,start,end);
case 3:
return cljs$core$range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$range.cljs$core$IFn$_invoke$arity$0 = cljs$core$range__0;
cljs$core$range.cljs$core$IFn$_invoke$arity$1 = cljs$core$range__1;
cljs$core$range.cljs$core$IFn$_invoke$arity$2 = cljs$core$range__2;
cljs$core$range.cljs$core$IFn$_invoke$arity$3 = cljs$core$range__3;
return cljs$core$range;
})()
;
/**
 * Returns a lazy seq of every nth item in coll.  Returns a stateful
 * transducer when no collection is provided.
 */
cljs.core.take_nth = (function() {
var cljs$core$take_nth = null;
var cljs$core$take_nth__1 = (function (n){
return (function (rf){
var ia = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1)) : cljs.core.atom.call(null,(-1)));
return ((function (ia){
return (function() {
var G__9041 = null;
var G__9041__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9041__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__9041__2 = (function (result,input){
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ia,cljs.core.inc);
if((cljs.core.rem(i,n) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
} else {
return result;
}
});
G__9041 = function(result,input){
switch(arguments.length){
case 0:
return G__9041__0.call(this);
case 1:
return G__9041__1.call(this,result);
case 2:
return G__9041__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9041.cljs$core$IFn$_invoke$arity$0 = G__9041__0;
G__9041.cljs$core$IFn$_invoke$arity$1 = G__9041__1;
G__9041.cljs$core$IFn$_invoke$arity$2 = G__9041__2;
return G__9041;
})()
;})(ia))
});
});
var cljs$core$take_nth__2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs.core.cons(cljs.core.first(s),cljs$core$take_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s)));
} else {
return null;
}
}),null,null));
});
cljs$core$take_nth = function(n,coll){
switch(arguments.length){
case 1:
return cljs$core$take_nth__1.call(this,n);
case 2:
return cljs$core$take_nth__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$take_nth.cljs$core$IFn$_invoke$arity$1 = cljs$core$take_nth__1;
cljs$core$take_nth.cljs$core$IFn$_invoke$arity$2 = cljs$core$take_nth__2;
return cljs$core$take_nth;
})()
;
/**
 * Returns a vector of [(take-while pred coll) (drop-while pred coll)]
 */
cljs.core.split_with = (function cljs$core$split_with(pred,coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(pred,coll),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(pred,coll)], null);
});
/**
 * Applies f to each value in coll, splitting it each time f returns a
 * new value.  Returns a lazy seq of partitions.  Returns a stateful
 * transducer when no collection is provided.
 */
cljs.core.partition_by = (function() {
var cljs$core$partition_by = null;
var cljs$core$partition_by__1 = (function (f){
return (function (rf){
var a = cljs.core.array_list();
var pa = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cljs$core_SLASH_none) : cljs.core.atom.call(null,cljs.core.cst$kw$cljs$core_SLASH_none));
return ((function (a,pa){
return (function() {
var G__9045 = null;
var G__9045__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9045__1 = (function (result){
var result__$1 = (cljs.core.truth_(a.isEmpty())?result:(function (){var v = cljs.core.vec(a.toArray());
a.clear();

return cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v)));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result__$1) : rf.call(null,result__$1));
});
var G__9045__2 = (function (result,input){
var pval = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pa) : cljs.core.deref.call(null,pa));
var val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(input) : f.call(null,input));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(pa,val) : cljs.core.reset_BANG_.call(null,pa,val));

if((cljs.core.keyword_identical_QMARK_(pval,cljs.core.cst$kw$cljs$core_SLASH_none)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,pval))){
a.add(input);

return result;
} else {
var v = cljs.core.vec(a.toArray());
a.clear();

var ret = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,v) : rf.call(null,result,v));
if(cljs.core.reduced_QMARK_(ret)){
} else {
a.add(input);
}

return ret;
}
});
G__9045 = function(result,input){
switch(arguments.length){
case 0:
return G__9045__0.call(this);
case 1:
return G__9045__1.call(this,result);
case 2:
return G__9045__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9045.cljs$core$IFn$_invoke$arity$0 = G__9045__0;
G__9045.cljs$core$IFn$_invoke$arity$1 = G__9045__1;
G__9045.cljs$core$IFn$_invoke$arity$2 = G__9045__2;
return G__9045;
})()
;})(a,pa))
});
});
var cljs$core$partition_by__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var fst = cljs.core.first(s);
var fv = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(fst) : f.call(null,fst));
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (fst,fv,s,temp__4425__auto__){
return (function (p1__9042_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__9042_SHARP_) : f.call(null,p1__9042_SHARP_)));
});})(fst,fv,s,temp__4425__auto__))
,cljs.core.next(s)));
return cljs.core.cons(run,cljs$core$partition_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s))));
} else {
return null;
}
}),null,null));
});
cljs$core$partition_by = function(f,coll){
switch(arguments.length){
case 1:
return cljs$core$partition_by__1.call(this,f);
case 2:
return cljs$core$partition_by__2.call(this,f,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$partition_by.cljs$core$IFn$_invoke$arity$1 = cljs$core$partition_by__1;
cljs$core$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$partition_by__2;
return cljs$core$partition_by;
})()
;
/**
 * Returns a map from distinct items in coll to the number of times
 * they appear.
 */
cljs.core.frequencies = (function cljs$core$frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,(0)) + (1)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the intermediate values of the reduction (as
 * per reduce) of coll by f, starting with init.
 */
cljs.core.reductions = (function() {
var cljs$core$reductions = null;
var cljs$core$reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__4423__auto__ = cljs.core.seq(coll);
if(temp__4423__auto__){
var s = temp__4423__auto__;
return cljs$core$reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else {
return cljs.core._conj(cljs.core.List.EMPTY,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}
}),null,null));
});
var cljs$core$reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.seq(coll);
if(temp__4425__auto__){
var s = temp__4425__auto__;
return cljs$core$reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){var G__9056 = init;
var G__9057 = cljs.core.first(s);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9056,G__9057) : f.call(null,G__9056,G__9057));
})(),cljs.core.rest(s));
} else {
return null;
}
}),null,null)));
});
cljs$core$reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return cljs$core$reductions__2.call(this,f,init);
case 3:
return cljs$core$reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$reductions.cljs$core$IFn$_invoke$arity$2 = cljs$core$reductions__2;
cljs$core$reductions.cljs$core$IFn$_invoke$arity$3 = cljs$core$reductions__3;
return cljs$core$reductions;
})()
;
/**
 * Takes a set of functions and returns a fn that is the juxtaposition
 * of those fns.  The returned fn takes a variable number of args, and
 * returns a vector containing the result of applying each fn to the
 * args (left-to-right).
 * ((juxt a b c) x) => [(a x) (b x) (c x)]
 * @param {...*} var_args
 */
cljs.core.juxt = (function() {
var cljs$core$juxt = null;
var cljs$core$juxt__1 = (function (f){
return (function() {
var G__9068 = null;
var G__9068__0 = (function (){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))],null));
});
var G__9068__1 = (function (x){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))],null));
});
var G__9068__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y))],null));
});
var G__9068__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z))],null));
});
var G__9068__4 = (function() { 
var G__9069__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__9069 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__9070__i = 0, G__9070__a = new Array(arguments.length -  3);
while (G__9070__i < G__9070__a.length) {G__9070__a[G__9070__i] = arguments[G__9070__i + 3]; ++G__9070__i;}
  args = new cljs.core.IndexedSeq(G__9070__a,0);
} 
return G__9069__delegate.call(this,x,y,z,args);};
G__9069.cljs$lang$maxFixedArity = 3;
G__9069.cljs$lang$applyTo = (function (arglist__9071){
var x = cljs.core.first(arglist__9071);
arglist__9071 = cljs.core.next(arglist__9071);
var y = cljs.core.first(arglist__9071);
arglist__9071 = cljs.core.next(arglist__9071);
var z = cljs.core.first(arglist__9071);
var args = cljs.core.rest(arglist__9071);
return G__9069__delegate(x,y,z,args);
});
G__9069.cljs$core$IFn$_invoke$arity$variadic = G__9069__delegate;
return G__9069;
})()
;
G__9068 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9068__0.call(this);
case 1:
return G__9068__1.call(this,x);
case 2:
return G__9068__2.call(this,x,y);
case 3:
return G__9068__3.call(this,x,y,z);
default:
var G__9072 = null;
if (arguments.length > 3) {
var G__9073__i = 0, G__9073__a = new Array(arguments.length -  3);
while (G__9073__i < G__9073__a.length) {G__9073__a[G__9073__i] = arguments[G__9073__i + 3]; ++G__9073__i;}
G__9072 = new cljs.core.IndexedSeq(G__9073__a,0);
}
return G__9068__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__9072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9068.cljs$lang$maxFixedArity = 3;
G__9068.cljs$lang$applyTo = G__9068__4.cljs$lang$applyTo;
G__9068.cljs$core$IFn$_invoke$arity$0 = G__9068__0;
G__9068.cljs$core$IFn$_invoke$arity$1 = G__9068__1;
G__9068.cljs$core$IFn$_invoke$arity$2 = G__9068__2;
G__9068.cljs$core$IFn$_invoke$arity$3 = G__9068__3;
G__9068.cljs$core$IFn$_invoke$arity$variadic = G__9068__4.cljs$core$IFn$_invoke$arity$variadic;
return G__9068;
})()
});
var cljs$core$juxt__2 = (function (f,g){
return (function() {
var G__9074 = null;
var G__9074__0 = (function (){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null))],null));
});
var G__9074__1 = (function (x){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x))],null));
});
var G__9074__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)),(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y))],null));
});
var G__9074__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z))],null));
});
var G__9074__4 = (function() { 
var G__9075__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__9075 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__9076__i = 0, G__9076__a = new Array(arguments.length -  3);
while (G__9076__i < G__9076__a.length) {G__9076__a[G__9076__i] = arguments[G__9076__i + 3]; ++G__9076__i;}
  args = new cljs.core.IndexedSeq(G__9076__a,0);
} 
return G__9075__delegate.call(this,x,y,z,args);};
G__9075.cljs$lang$maxFixedArity = 3;
G__9075.cljs$lang$applyTo = (function (arglist__9077){
var x = cljs.core.first(arglist__9077);
arglist__9077 = cljs.core.next(arglist__9077);
var y = cljs.core.first(arglist__9077);
arglist__9077 = cljs.core.next(arglist__9077);
var z = cljs.core.first(arglist__9077);
var args = cljs.core.rest(arglist__9077);
return G__9075__delegate(x,y,z,args);
});
G__9075.cljs$core$IFn$_invoke$arity$variadic = G__9075__delegate;
return G__9075;
})()
;
G__9074 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9074__0.call(this);
case 1:
return G__9074__1.call(this,x);
case 2:
return G__9074__2.call(this,x,y);
case 3:
return G__9074__3.call(this,x,y,z);
default:
var G__9078 = null;
if (arguments.length > 3) {
var G__9079__i = 0, G__9079__a = new Array(arguments.length -  3);
while (G__9079__i < G__9079__a.length) {G__9079__a[G__9079__i] = arguments[G__9079__i + 3]; ++G__9079__i;}
G__9078 = new cljs.core.IndexedSeq(G__9079__a,0);
}
return G__9074__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__9078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9074.cljs$lang$maxFixedArity = 3;
G__9074.cljs$lang$applyTo = G__9074__4.cljs$lang$applyTo;
G__9074.cljs$core$IFn$_invoke$arity$0 = G__9074__0;
G__9074.cljs$core$IFn$_invoke$arity$1 = G__9074__1;
G__9074.cljs$core$IFn$_invoke$arity$2 = G__9074__2;
G__9074.cljs$core$IFn$_invoke$arity$3 = G__9074__3;
G__9074.cljs$core$IFn$_invoke$arity$variadic = G__9074__4.cljs$core$IFn$_invoke$arity$variadic;
return G__9074;
})()
});
var cljs$core$juxt__3 = (function (f,g,h){
return (function() {
var G__9080 = null;
var G__9080__0 = (function (){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))],null));
});
var G__9080__1 = (function (x){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))],null));
});
var G__9080__2 = (function (x,y){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)),(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))],null));
});
var G__9080__3 = (function (x,y,z){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))],null));
});
var G__9080__4 = (function() { 
var G__9081__delegate = function (x,y,z,args){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__9081 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__9082__i = 0, G__9082__a = new Array(arguments.length -  3);
while (G__9082__i < G__9082__a.length) {G__9082__a[G__9082__i] = arguments[G__9082__i + 3]; ++G__9082__i;}
  args = new cljs.core.IndexedSeq(G__9082__a,0);
} 
return G__9081__delegate.call(this,x,y,z,args);};
G__9081.cljs$lang$maxFixedArity = 3;
G__9081.cljs$lang$applyTo = (function (arglist__9083){
var x = cljs.core.first(arglist__9083);
arglist__9083 = cljs.core.next(arglist__9083);
var y = cljs.core.first(arglist__9083);
arglist__9083 = cljs.core.next(arglist__9083);
var z = cljs.core.first(arglist__9083);
var args = cljs.core.rest(arglist__9083);
return G__9081__delegate(x,y,z,args);
});
G__9081.cljs$core$IFn$_invoke$arity$variadic = G__9081__delegate;
return G__9081;
})()
;
G__9080 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9080__0.call(this);
case 1:
return G__9080__1.call(this,x);
case 2:
return G__9080__2.call(this,x,y);
case 3:
return G__9080__3.call(this,x,y,z);
default:
var G__9084 = null;
if (arguments.length > 3) {
var G__9085__i = 0, G__9085__a = new Array(arguments.length -  3);
while (G__9085__i < G__9085__a.length) {G__9085__a[G__9085__i] = arguments[G__9085__i + 3]; ++G__9085__i;}
G__9084 = new cljs.core.IndexedSeq(G__9085__a,0);
}
return G__9080__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__9084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9080.cljs$lang$maxFixedArity = 3;
G__9080.cljs$lang$applyTo = G__9080__4.cljs$lang$applyTo;
G__9080.cljs$core$IFn$_invoke$arity$0 = G__9080__0;
G__9080.cljs$core$IFn$_invoke$arity$1 = G__9080__1;
G__9080.cljs$core$IFn$_invoke$arity$2 = G__9080__2;
G__9080.cljs$core$IFn$_invoke$arity$3 = G__9080__3;
G__9080.cljs$core$IFn$_invoke$arity$variadic = G__9080__4.cljs$core$IFn$_invoke$arity$variadic;
return G__9080;
})()
});
var cljs$core$juxt__4 = (function() { 
var G__9086__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);
return ((function (fs__$1){
return (function() {
var G__9087 = null;
var G__9087__0 = (function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__9058_SHARP_,p2__9059_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9058_SHARP_,(p2__9059_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__9059_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__9059_SHARP_.call(null)));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__9087__1 = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__9060_SHARP_,p2__9061_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9060_SHARP_,(p2__9061_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__9061_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p2__9061_SHARP_.call(null,x)));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__9087__2 = (function (x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__9062_SHARP_,p2__9063_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9062_SHARP_,(p2__9063_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__9063_SHARP_.cljs$core$IFn$_invoke$arity$2(x,y) : p2__9063_SHARP_.call(null,x,y)));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__9087__3 = (function (x,y,z){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__9064_SHARP_,p2__9065_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9064_SHARP_,(p2__9065_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__9065_SHARP_.cljs$core$IFn$_invoke$arity$3(x,y,z) : p2__9065_SHARP_.call(null,x,y,z)));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__9087__4 = (function() { 
var G__9088__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1){
return (function (p1__9066_SHARP_,p2__9067_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9066_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__9067_SHARP_,x,y,z,args));
});})(fs__$1))
,cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__9088 = function (x,y,z,var_args){
var args = null;
if (arguments.length > 3) {
var G__9089__i = 0, G__9089__a = new Array(arguments.length -  3);
while (G__9089__i < G__9089__a.length) {G__9089__a[G__9089__i] = arguments[G__9089__i + 3]; ++G__9089__i;}
  args = new cljs.core.IndexedSeq(G__9089__a,0);
} 
return G__9088__delegate.call(this,x,y,z,args);};
G__9088.cljs$lang$maxFixedArity = 3;
G__9088.cljs$lang$applyTo = (function (arglist__9090){
var x = cljs.core.first(arglist__9090);
arglist__9090 = cljs.core.next(arglist__9090);
var y = cljs.core.first(arglist__9090);
arglist__9090 = cljs.core.next(arglist__9090);
var z = cljs.core.first(arglist__9090);
var args = cljs.core.rest(arglist__9090);
return G__9088__delegate(x,y,z,args);
});
G__9088.cljs$core$IFn$_invoke$arity$variadic = G__9088__delegate;
return G__9088;
})()
;
G__9087 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9087__0.call(this);
case 1:
return G__9087__1.call(this,x);
case 2:
return G__9087__2.call(this,x,y);
case 3:
return G__9087__3.call(this,x,y,z);
default:
var G__9091 = null;
if (arguments.length > 3) {
var G__9092__i = 0, G__9092__a = new Array(arguments.length -  3);
while (G__9092__i < G__9092__a.length) {G__9092__a[G__9092__i] = arguments[G__9092__i + 3]; ++G__9092__i;}
G__9091 = new cljs.core.IndexedSeq(G__9092__a,0);
}
return G__9087__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, G__9091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9087.cljs$lang$maxFixedArity = 3;
G__9087.cljs$lang$applyTo = G__9087__4.cljs$lang$applyTo;
G__9087.cljs$core$IFn$_invoke$arity$0 = G__9087__0;
G__9087.cljs$core$IFn$_invoke$arity$1 = G__9087__1;
G__9087.cljs$core$IFn$_invoke$arity$2 = G__9087__2;
G__9087.cljs$core$IFn$_invoke$arity$3 = G__9087__3;
G__9087.cljs$core$IFn$_invoke$arity$variadic = G__9087__4.cljs$core$IFn$_invoke$arity$variadic;
return G__9087;
})()
;})(fs__$1))
};
var G__9086 = function (f,g,h,var_args){
var fs = null;
if (arguments.length > 3) {
var G__9093__i = 0, G__9093__a = new Array(arguments.length -  3);
while (G__9093__i < G__9093__a.length) {G__9093__a[G__9093__i] = arguments[G__9093__i + 3]; ++G__9093__i;}
  fs = new cljs.core.IndexedSeq(G__9093__a,0);
} 
return G__9086__delegate.call(this,f,g,h,fs);};
G__9086.cljs$lang$maxFixedArity = 3;
G__9086.cljs$lang$applyTo = (function (arglist__9094){
var f = cljs.core.first(arglist__9094);
arglist__9094 = cljs.core.next(arglist__9094);
var g = cljs.core.first(arglist__9094);
arglist__9094 = cljs.core.next(arglist__9094);
var h = cljs.core.first(arglist__9094);
var fs = cljs.core.rest(arglist__9094);
return G__9086__delegate(f,g,h,fs);
});
G__9086.cljs$core$IFn$_invoke$arity$variadic = G__9086__delegate;
return G__9086;
})()
;
cljs$core$juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return cljs$core$juxt__1.call(this,f);
case 2:
return cljs$core$juxt__2.call(this,f,g);
case 3:
return cljs$core$juxt__3.call(this,f,g,h);
default:
var G__9095 = null;
if (arguments.length > 3) {
var G__9096__i = 0, G__9096__a = new Array(arguments.length -  3);
while (G__9096__i < G__9096__a.length) {G__9096__a[G__9096__i] = arguments[G__9096__i + 3]; ++G__9096__i;}
G__9095 = new cljs.core.IndexedSeq(G__9096__a,0);
}
return cljs$core$juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, G__9095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$juxt.cljs$lang$maxFixedArity = 3;
cljs$core$juxt.cljs$lang$applyTo = cljs$core$juxt__4.cljs$lang$applyTo;
cljs$core$juxt.cljs$core$IFn$_invoke$arity$1 = cljs$core$juxt__1;
cljs$core$juxt.cljs$core$IFn$_invoke$arity$2 = cljs$core$juxt__2;
cljs$core$juxt.cljs$core$IFn$_invoke$arity$3 = cljs$core$juxt__3;
cljs$core$juxt.cljs$core$IFn$_invoke$arity$variadic = cljs$core$juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$juxt;
})()
;
/**
 * When lazy sequences are produced via functions that have side
 * effects, any effects other than those needed to produce the first
 * element in the seq do not occur until the seq is consumed. dorun can
 * be used to force any effects. Walks through the successive nexts of
 * the seq, does not retain the head and returns nil.
 */
cljs.core.dorun = (function() {
var cljs$core$dorun = null;
var cljs$core$dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll)){
var G__9097 = cljs.core.next(coll);
coll = G__9097;
continue;
} else {
return null;
}
break;
}
});
var cljs$core$dorun__2 = (function (n,coll){
while(true){
if((cljs.core.seq(coll)) && ((n > (0)))){
var G__9098 = (n - (1));
var G__9099 = cljs.core.next(coll);
n = G__9098;
coll = G__9099;
continue;
} else {
return null;
}
break;
}
});
cljs$core$dorun = function(n,coll){
switch(arguments.length){
case 1:
return cljs$core$dorun__1.call(this,n);
case 2:
return cljs$core$dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$dorun.cljs$core$IFn$_invoke$arity$1 = cljs$core$dorun__1;
cljs$core$dorun.cljs$core$IFn$_invoke$arity$2 = cljs$core$dorun__2;
return cljs$core$dorun;
})()
;
/**
 * When lazy sequences are produced via functions that have side
 * effects, any effects other than those needed to produce the first
 * element in the seq do not occur until the seq is consumed. doall can
 * be used to force any effects. Walks through the successive nexts of
 * the seq, retains the head and returns it, thus causing the entire
 * seq to reside in memory at one time.
 */
cljs.core.doall = (function() {
var cljs$core$doall = null;
var cljs$core$doall__1 = (function (coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);

return coll;
});
var cljs$core$doall__2 = (function (n,coll){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);

return coll;
});
cljs$core$doall = function(n,coll){
switch(arguments.length){
case 1:
return cljs$core$doall__1.call(this,n);
case 2:
return cljs$core$doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$doall.cljs$core$IFn$_invoke$arity$1 = cljs$core$doall__1;
cljs$core$doall.cljs$core$IFn$_invoke$arity$2 = cljs$core$doall__2;
return cljs$core$doall;
})()
;
cljs.core.regexp_QMARK_ = (function cljs$core$regexp_QMARK_(o){
return (o instanceof RegExp);
});
/**
 * Returns the result of (re-find re s) if re fully matches s.
 */
cljs.core.re_matches = (function cljs$core$re_matches(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s)){
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
} else {
return null;
}
} else {
throw (new TypeError("re-matches must match against a string."));
}
});
/**
 * Returns the first regex match, if any, of s to re, using
 * re.exec(s). Returns a vector, containing first the matching
 * substring, then any capturing groups if the regular expression contains
 * capturing groups.
 */
cljs.core.re_find = (function cljs$core$re_find(re,s){
if(typeof s === 'string'){
var matches = re.exec(s);
if((matches == null)){
return null;
} else {
if((cljs.core.count(matches) === (1))){
return cljs.core.first(matches);
} else {
return cljs.core.vec(matches);
}
}
} else {
throw (new TypeError("re-find must match against a string."));
}
});
/**
 * Returns a lazy sequence of successive matches of re in s.
 */
cljs.core.re_seq = (function cljs$core$re_seq(re,s){
var match_data = cljs.core.re_find(re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);
var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));
if(cljs.core.truth_(match_data)){
return (new cljs.core.LazySeq(null,((function (match_data,match_idx,match_str,post_match){
return (function (){
return cljs.core.cons(match_data,((cljs.core.seq(post_match))?cljs$core$re_seq(re,post_match):null));
});})(match_data,match_idx,match_str,post_match))
,null,null));
} else {
return null;
}
});
/**
 * Returns an instance of RegExp which has compiled the provided string.
 */
cljs.core.re_pattern = (function cljs$core$re_pattern(s){
if((s instanceof RegExp)){
return s;
} else {
var vec__9101 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9101,(2),null);
return (new RegExp(pattern,flags));
}
});
cljs.core.pr_sequential_writer = (function cljs$core$pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
var _STAR_print_level_STAR_9109 = cljs.core._STAR_print_level_STAR_;
try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - (1)));

if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < (0)))){
return cljs.core._write(writer,"#");
} else {
cljs.core._write(writer,begin);

if(cljs.core.seq(coll)){
var G__9110_9116 = cljs.core.first(coll);
var G__9111_9117 = writer;
var G__9112_9118 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__9110_9116,G__9111_9117,G__9112_9118) : print_one.call(null,G__9110_9116,G__9111_9117,G__9112_9118));
} else {
}

var coll_9119__$1 = cljs.core.next(coll);
var n_9120 = (cljs.core.cst$kw$print_DASH_length.cljs$core$IFn$_invoke$arity$1(opts) - (1));
while(true){
if((coll_9119__$1) && (((n_9120 == null)) || (!((n_9120 === (0)))))){
cljs.core._write(writer,sep);

var G__9113_9121 = cljs.core.first(coll_9119__$1);
var G__9114_9122 = writer;
var G__9115_9123 = opts;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__9113_9121,G__9114_9122,G__9115_9123) : print_one.call(null,G__9113_9121,G__9114_9122,G__9115_9123));

var G__9124 = cljs.core.next(coll_9119__$1);
var G__9125 = (n_9120 - (1));
coll_9119__$1 = G__9124;
n_9120 = G__9125;
continue;
} else {
if((cljs.core.seq(coll_9119__$1)) && ((n_9120 === (0)))){
cljs.core._write(writer,sep);

cljs.core._write(writer,"...");
} else {
}
}
break;
}

return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_9109;
}});
/**
 * @param {...*} var_args
 */
cljs.core.write_all = (function() { 
var cljs$core$write_all__delegate = function (writer,ss){
var seq__9130 = cljs.core.seq(ss);
var chunk__9131 = null;
var count__9132 = (0);
var i__9133 = (0);
while(true){
if((i__9133 < count__9132)){
var s = chunk__9131.cljs$core$IIndexed$_nth$arity$2(null,i__9133);
cljs.core._write(writer,s);

var G__9134 = seq__9130;
var G__9135 = chunk__9131;
var G__9136 = count__9132;
var G__9137 = (i__9133 + (1));
seq__9130 = G__9134;
chunk__9131 = G__9135;
count__9132 = G__9136;
i__9133 = G__9137;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9130);
if(temp__4425__auto__){
var seq__9130__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9130__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__9130__$1);
var G__9138 = cljs.core.chunk_rest(seq__9130__$1);
var G__9139 = c__1341__auto__;
var G__9140 = cljs.core.count(c__1341__auto__);
var G__9141 = (0);
seq__9130 = G__9138;
chunk__9131 = G__9139;
count__9132 = G__9140;
i__9133 = G__9141;
continue;
} else {
var s = cljs.core.first(seq__9130__$1);
cljs.core._write(writer,s);

var G__9142 = cljs.core.next(seq__9130__$1);
var G__9143 = null;
var G__9144 = (0);
var G__9145 = (0);
seq__9130 = G__9142;
chunk__9131 = G__9143;
count__9132 = G__9144;
i__9133 = G__9145;
continue;
}
} else {
return null;
}
}
break;
}
};
var cljs$core$write_all = function (writer,var_args){
var ss = null;
if (arguments.length > 1) {
var G__9146__i = 0, G__9146__a = new Array(arguments.length -  1);
while (G__9146__i < G__9146__a.length) {G__9146__a[G__9146__i] = arguments[G__9146__i + 1]; ++G__9146__i;}
  ss = new cljs.core.IndexedSeq(G__9146__a,0);
} 
return cljs$core$write_all__delegate.call(this,writer,ss);};
cljs$core$write_all.cljs$lang$maxFixedArity = 1;
cljs$core$write_all.cljs$lang$applyTo = (function (arglist__9147){
var writer = cljs.core.first(arglist__9147);
var ss = cljs.core.rest(arglist__9147);
return cljs$core$write_all__delegate(writer,ss);
});
cljs$core$write_all.cljs$core$IFn$_invoke$arity$variadic = cljs$core$write_all__delegate;
return cljs$core$write_all;
})()
;
cljs.core.string_print = (function cljs$core$string_print(x){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));

return null;
});
cljs.core.flush = (function cljs$core$flush(){
return null;
});
cljs.core.char_escapes = (function (){var obj9149 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};
return obj9149;
})();
cljs.core.quote_string = (function cljs$core$quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
 * Prefer this to pr-seq, because it makes the printing function
 * configurable, allowing efficient implementations such as appending
 * to a StringBuffer.
 */
cljs.core.pr_writer = (function cljs$core$pr_writer(obj,writer,opts){
if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if((void 0 === obj)){
return cljs.core._write(writer,"#<undefined>");
} else {
if(cljs.core.truth_((function (){var and__547__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$meta);
if(cljs.core.truth_(and__547__auto__)){
var and__547__auto____$1 = (function (){var G__9162 = obj;
if(G__9162){
var bit__1235__auto__ = (G__9162.cljs$lang$protocol_mask$partition0$ & (131072));
if((bit__1235__auto__) || (G__9162.cljs$core$IMeta$)){
return true;
} else {
if((!G__9162.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__9162);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__9162);
}
})();
if(and__547__auto____$1){
return cljs.core.meta(obj);
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
})())){
cljs.core._write(writer,"^");

cljs$core$pr_writer(cljs.core.meta(obj),writer,opts);

cljs.core._write(writer," ");
} else {
}

if((obj == null)){
return cljs.core._write(writer,"nil");
} else {
if(obj.cljs$lang$type){
return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else {
if((function (){var G__9163 = obj;
if(G__9163){
var bit__1228__auto__ = (G__9163.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__1228__auto__) || (G__9163.cljs$core$IPrintWithWriter$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else {
if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number')){
return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else {
if(cljs.core.object_QMARK_(obj)){
cljs.core._write(writer,"#js ");

var G__9164 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj));
var G__9165 = cljs$core$pr_writer;
var G__9166 = writer;
var G__9167 = opts;
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(G__9164,G__9165,G__9166,G__9167) : cljs.core.print_map.call(null,G__9164,G__9165,G__9166,G__9167));
} else {
if(obj instanceof Array){
return cljs.core.pr_sequential_writer(writer,cljs$core$pr_writer,"#js ["," ","]",opts,obj);
} else {
if(goog.isString(obj)){
if(cljs.core.truth_(cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core._write(writer,cljs.core.quote_string(obj));
} else {
return cljs.core._write(writer,obj);
}
} else {
if(cljs.core.fn_QMARK_(obj)){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else {
if((obj instanceof Date)){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns) < len)){
var G__9169 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__9169;
continue;
} else {
return ns;
}
break;
}
});
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + (1)),(2)),"-",normalize(obj.getUTCDate(),(2)),"T",normalize(obj.getUTCHours(),(2)),":",normalize(obj.getUTCMinutes(),(2)),":",normalize(obj.getUTCSeconds(),(2)),".",normalize(obj.getUTCMilliseconds(),(3)),"-","00:00\""], 0));
} else {
if(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))){
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else {
if((function (){var G__9168 = obj;
if(G__9168){
var bit__1235__auto__ = (G__9168.cljs$lang$protocol_mask$partition0$ & (2147483648));
if((bit__1235__auto__) || (G__9168.cljs$core$IPrintWithWriter$)){
return true;
} else {
if((!G__9168.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__9168);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__9168);
}
})()){
return cljs.core._pr_writer(obj,writer,opts);
} else {
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));

}
}
}
}
}
}
}
}
}
}
}

}
}
});
cljs.core.pr_seq_writer = (function cljs$core$pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer(cljs.core.first(objs),writer,opts);

var seq__9174 = cljs.core.seq(cljs.core.next(objs));
var chunk__9175 = null;
var count__9176 = (0);
var i__9177 = (0);
while(true){
if((i__9177 < count__9176)){
var obj = chunk__9175.cljs$core$IIndexed$_nth$arity$2(null,i__9177);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__9178 = seq__9174;
var G__9179 = chunk__9175;
var G__9180 = count__9176;
var G__9181 = (i__9177 + (1));
seq__9174 = G__9178;
chunk__9175 = G__9179;
count__9176 = G__9180;
i__9177 = G__9181;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9174);
if(temp__4425__auto__){
var seq__9174__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9174__$1)){
var c__1341__auto__ = cljs.core.chunk_first(seq__9174__$1);
var G__9182 = cljs.core.chunk_rest(seq__9174__$1);
var G__9183 = c__1341__auto__;
var G__9184 = cljs.core.count(c__1341__auto__);
var G__9185 = (0);
seq__9174 = G__9182;
chunk__9175 = G__9183;
count__9176 = G__9184;
i__9177 = G__9185;
continue;
} else {
var obj = cljs.core.first(seq__9174__$1);
cljs.core._write(writer," ");

cljs.core.pr_writer(obj,writer,opts);

var G__9186 = cljs.core.next(seq__9174__$1);
var G__9187 = null;
var G__9188 = (0);
var G__9189 = (0);
seq__9174 = G__9186;
chunk__9175 = G__9187;
count__9176 = G__9188;
i__9177 = G__9189;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function cljs$core$pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer(objs,writer,opts);

writer.cljs$core$IWriter$_flush$arity$1(null);

return sb;
});
/**
 * Prints a sequence of objects to a string, observing all the
 * options given in opts
 */
cljs.core.pr_str_with_opts = (function cljs$core$pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "";
} else {
return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
 * Same as pr-str-with-opts followed by (newline)
 */
cljs.core.prn_str_with_opts = (function cljs$core$prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_(objs)){
return "\n";
} else {
var sb = cljs.core.pr_sb_with_opts(objs,opts);
sb.append("\n");

return [cljs.core.str(sb)].join('');
}
});
/**
 * Prints a sequence of objects using string-print, observing all
 * the options given in opts
 */
cljs.core.pr_with_opts = (function cljs$core$pr_with_opts(objs,opts){
return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function cljs$core$newline(opts){
cljs.core.string_print("\n");

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$flush_DASH_on_DASH_newline))){
return cljs.core.flush();
} else {
return null;
}
});
/**
 * pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
 * @param {...*} var_args
 */
cljs.core.pr_str = (function() { 
var cljs$core$pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var cljs$core$pr_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9190__i = 0, G__9190__a = new Array(arguments.length -  0);
while (G__9190__i < G__9190__a.length) {G__9190__a[G__9190__i] = arguments[G__9190__i + 0]; ++G__9190__i;}
  objs = new cljs.core.IndexedSeq(G__9190__a,0);
} 
return cljs$core$pr_str__delegate.call(this,objs);};
cljs$core$pr_str.cljs$lang$maxFixedArity = 0;
cljs$core$pr_str.cljs$lang$applyTo = (function (arglist__9191){
var objs = cljs.core.seq(arglist__9191);
return cljs$core$pr_str__delegate(objs);
});
cljs$core$pr_str.cljs$core$IFn$_invoke$arity$variadic = cljs$core$pr_str__delegate;
return cljs$core$pr_str;
})()
;
/**
 * Same as pr-str followed by (newline)
 * @param {...*} var_args
 */
cljs.core.prn_str = (function() { 
var cljs$core$prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var cljs$core$prn_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9192__i = 0, G__9192__a = new Array(arguments.length -  0);
while (G__9192__i < G__9192__a.length) {G__9192__a[G__9192__i] = arguments[G__9192__i + 0]; ++G__9192__i;}
  objs = new cljs.core.IndexedSeq(G__9192__a,0);
} 
return cljs$core$prn_str__delegate.call(this,objs);};
cljs$core$prn_str.cljs$lang$maxFixedArity = 0;
cljs$core$prn_str.cljs$lang$applyTo = (function (arglist__9193){
var objs = cljs.core.seq(arglist__9193);
return cljs$core$prn_str__delegate(objs);
});
cljs$core$prn_str.cljs$core$IFn$_invoke$arity$variadic = cljs$core$prn_str__delegate;
return cljs$core$prn_str;
})()
;
/**
 * Prints the object(s) using string-print.  Prints the
 * object(s), separated by spaces if there is more than one.
 * By default, pr and prn print in a way that objects can be
 * read by the reader
 * @param {...*} var_args
 */
cljs.core.pr = (function() { 
var cljs$core$pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var cljs$core$pr = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9194__i = 0, G__9194__a = new Array(arguments.length -  0);
while (G__9194__i < G__9194__a.length) {G__9194__a[G__9194__i] = arguments[G__9194__i + 0]; ++G__9194__i;}
  objs = new cljs.core.IndexedSeq(G__9194__a,0);
} 
return cljs$core$pr__delegate.call(this,objs);};
cljs$core$pr.cljs$lang$maxFixedArity = 0;
cljs$core$pr.cljs$lang$applyTo = (function (arglist__9195){
var objs = cljs.core.seq(arglist__9195);
return cljs$core$pr__delegate(objs);
});
cljs$core$pr.cljs$core$IFn$_invoke$arity$variadic = cljs$core$pr__delegate;
return cljs$core$pr;
})()
;
/**
 * Prints the object(s) using string-print.
 * print and println produce output for human consumption.
 * @param {...*} var_args
 */
cljs.core.print = (function() { 
var cljs$core$cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.cst$kw$readably,false));
};
var cljs$core$cljs_core_print = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9196__i = 0, G__9196__a = new Array(arguments.length -  0);
while (G__9196__i < G__9196__a.length) {G__9196__a[G__9196__i] = arguments[G__9196__i + 0]; ++G__9196__i;}
  objs = new cljs.core.IndexedSeq(G__9196__a,0);
} 
return cljs$core$cljs_core_print__delegate.call(this,objs);};
cljs$core$cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs$core$cljs_core_print.cljs$lang$applyTo = (function (arglist__9197){
var objs = cljs.core.seq(arglist__9197);
return cljs$core$cljs_core_print__delegate(objs);
});
cljs$core$cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs$core$cljs_core_print__delegate;
return cljs$core$cljs_core_print;
})()
;
/**
 * print to a string, returning it
 * @param {...*} var_args
 */
cljs.core.print_str = (function() { 
var cljs$core$print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.cst$kw$readably,false));
};
var cljs$core$print_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9198__i = 0, G__9198__a = new Array(arguments.length -  0);
while (G__9198__i < G__9198__a.length) {G__9198__a[G__9198__i] = arguments[G__9198__i + 0]; ++G__9198__i;}
  objs = new cljs.core.IndexedSeq(G__9198__a,0);
} 
return cljs$core$print_str__delegate.call(this,objs);};
cljs$core$print_str.cljs$lang$maxFixedArity = 0;
cljs$core$print_str.cljs$lang$applyTo = (function (arglist__9199){
var objs = cljs.core.seq(arglist__9199);
return cljs$core$print_str__delegate(objs);
});
cljs$core$print_str.cljs$core$IFn$_invoke$arity$variadic = cljs$core$print_str__delegate;
return cljs$core$print_str;
})()
;
/**
 * Same as print followed by (newline)
 * @param {...*} var_args
 */
cljs.core.println = (function() { 
var cljs$core$println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.cst$kw$readably,false));

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var cljs$core$println = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9200__i = 0, G__9200__a = new Array(arguments.length -  0);
while (G__9200__i < G__9200__a.length) {G__9200__a[G__9200__i] = arguments[G__9200__i + 0]; ++G__9200__i;}
  objs = new cljs.core.IndexedSeq(G__9200__a,0);
} 
return cljs$core$println__delegate.call(this,objs);};
cljs$core$println.cljs$lang$maxFixedArity = 0;
cljs$core$println.cljs$lang$applyTo = (function (arglist__9201){
var objs = cljs.core.seq(arglist__9201);
return cljs$core$println__delegate(objs);
});
cljs$core$println.cljs$core$IFn$_invoke$arity$variadic = cljs$core$println__delegate;
return cljs$core$println;
})()
;
/**
 * println to a string, returning it
 * @param {...*} var_args
 */
cljs.core.println_str = (function() { 
var cljs$core$println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.cst$kw$readably,false));
};
var cljs$core$println_str = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9202__i = 0, G__9202__a = new Array(arguments.length -  0);
while (G__9202__i < G__9202__a.length) {G__9202__a[G__9202__i] = arguments[G__9202__i + 0]; ++G__9202__i;}
  objs = new cljs.core.IndexedSeq(G__9202__a,0);
} 
return cljs$core$println_str__delegate.call(this,objs);};
cljs$core$println_str.cljs$lang$maxFixedArity = 0;
cljs$core$println_str.cljs$lang$applyTo = (function (arglist__9203){
var objs = cljs.core.seq(arglist__9203);
return cljs$core$println_str__delegate(objs);
});
cljs$core$println_str.cljs$core$IFn$_invoke$arity$variadic = cljs$core$println_str__delegate;
return cljs$core$println_str;
})()
;
/**
 * Same as pr followed by (newline).
 * @param {...*} var_args
 */
cljs.core.prn = (function() { 
var cljs$core$prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());

if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)){
return cljs.core.newline(cljs.core.pr_opts());
} else {
return null;
}
};
var cljs$core$prn = function (var_args){
var objs = null;
if (arguments.length > 0) {
var G__9204__i = 0, G__9204__a = new Array(arguments.length -  0);
while (G__9204__i < G__9204__a.length) {G__9204__a[G__9204__i] = arguments[G__9204__i + 0]; ++G__9204__i;}
  objs = new cljs.core.IndexedSeq(G__9204__a,0);
} 
return cljs$core$prn__delegate.call(this,objs);};
cljs$core$prn.cljs$lang$maxFixedArity = 0;
cljs$core$prn.cljs$lang$applyTo = (function (arglist__9205){
var objs = cljs.core.seq(arglist__9205);
return cljs$core$prn__delegate(objs);
});
cljs$core$prn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$prn__delegate;
return cljs$core$prn;
})()
;
cljs.core.print_map = (function cljs$core$print_map(m,print_one,writer,opts){
return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){
var G__9212_9218 = cljs.core.key(e);
var G__9213_9219 = w;
var G__9214_9220 = opts__$1;
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__9212_9218,G__9213_9219,G__9214_9220) : print_one.call(null,G__9212_9218,G__9213_9219,G__9214_9220));

cljs.core._write(w," ");

var G__9215 = cljs.core.val(e);
var G__9216 = w;
var G__9217 = opts__$1;
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(G__9215,G__9216,G__9217) : print_one.call(null,G__9215,G__9216,G__9217));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ES6IteratorSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(a__$1.state,writer,opts);

return cljs.core._write(writer,">");
});

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core._write(writer,"()");
});

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.LazyTransformer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});

cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;

cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});

cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;

cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_symbols(x__$1,y);
});

cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;

cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});

cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;

cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
var x__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
/**
 * Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
 * 
 * (apply f its-current-meta args)
 * 
 * f must be free of side-effects
 * @param {...*} var_args
 */
cljs.core.alter_meta_BANG_ = (function() { 
var cljs$core$alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var cljs$core$alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__9221__i = 0, G__9221__a = new Array(arguments.length -  2);
while (G__9221__i < G__9221__a.length) {G__9221__a[G__9221__i] = arguments[G__9221__i + 2]; ++G__9221__i;}
  args = new cljs.core.IndexedSeq(G__9221__a,0);
} 
return cljs$core$alter_meta_BANG___delegate.call(this,iref,f,args);};
cljs$core$alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
cljs$core$alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9222){
var iref = cljs.core.first(arglist__9222);
arglist__9222 = cljs.core.next(arglist__9222);
var f = cljs.core.first(arglist__9222);
var args = cljs.core.rest(arglist__9222);
return cljs$core$alter_meta_BANG___delegate(iref,f,args);
});
cljs$core$alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$alter_meta_BANG___delegate;
return cljs$core$alter_meta_BANG_;
})()
;
/**
 * Atomically resets the metadata for an atom
 */
cljs.core.reset_meta_BANG_ = (function cljs$core$reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
 * Alpha - subject to change.
 * 
 * Adds a watch function to an atom reference. The watch fn must be a
 * fn of 4 args: a key, the reference, its old-state, its
 * new-state. Whenever the reference's state might have been changed,
 * any registered watches will have their functions called. The watch
 * fn will be called synchronously. Note that an atom's state
 * may have changed again prior to the fn call, so use old/new-state
 * rather than derefing the reference. Keys must be unique per
 * reference, and can be used to remove the watch with remove-watch,
 * but are otherwise considered opaque by the watch mechanism.  Bear in
 * mind that regardless of the result or action of the watch fns the
 * atom's value will change.  Example:
 * 
 * (def a (atom 0))
 * (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
 * (swap! a inc)
 * ;; Assertion Error
 * (deref a)
 * ;=> 1
 */
cljs.core.add_watch = (function cljs$core$add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
 * Alpha - subject to change.
 * 
 * Removes a watch (set by add-watch) from a reference
 */
cljs.core.remove_watch = (function cljs$core$remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
 * Returns a new symbol with a unique name. If a prefix string is
 * supplied, the name is prefix# where # is some unique number. If
 * prefix is not supplied, the prefix is 'G__'.
 */
cljs.core.gensym = (function() {
var cljs$core$gensym = null;
var cljs$core$gensym__0 = (function (){
return cljs$core$gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var cljs$core$gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null)){
cljs.core.gensym_counter = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
} else {
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
cljs$core$gensym = function(prefix_string){
switch(arguments.length){
case 0:
return cljs$core$gensym__0.call(this);
case 1:
return cljs$core$gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$gensym.cljs$core$IFn$_invoke$arity$0 = cljs$core$gensym__0;
cljs$core$gensym.cljs$core$IFn$_invoke$arity$1 = cljs$core$gensym__1;
return cljs$core$gensym;
})()
;
cljs.core.fixture1 = (1);
cljs.core.fixture2 = (2);

/**
* @constructor
*/
cljs.core.Delay = (function (f,value){
this.f = f;
this.value = value;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.f)){
self__.value = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

self__.f = null;
} else {
}

return self__.value;
});

cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return cljs.core.not(self__.f);
});

cljs.core.Delay.cljs$lang$type = true;

cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";

cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Delay");
});

cljs.core.__GT_Delay = (function cljs$core$__GT_Delay(f,value){
return (new cljs.core.Delay(f,value));
});

/**
 * returns true if x is a Delay created with delay
 */
cljs.core.delay_QMARK_ = (function cljs$core$delay_QMARK_(x){
return (x instanceof cljs.core.Delay);
});
/**
 * If x is a Delay, returns the (possibly cached) value of its expression, else returns x
 */
cljs.core.force = (function cljs$core$force(x){
if(cljs.core.delay_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
/**
 * Returns true if a value has been produced for a promise, delay, future or lazy sequence.
 */
cljs.core.realized_QMARK_ = (function cljs$core$realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
cljs.core.preserving_reduced = (function cljs$core$preserving_reduced(rf){
return (function (p1__9223_SHARP_,p2__9224_SHARP_){
var ret = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(p1__9223_SHARP_,p2__9224_SHARP_) : rf.call(null,p1__9223_SHARP_,p2__9224_SHARP_));
if(cljs.core.reduced_QMARK_(ret)){
return cljs.core.reduced(ret);
} else {
return ret;
}
});
});
/**
 * A transducer which concatenates the contents of each input, which must be a
 * collection, into the reduction.
 */
cljs.core.cat = (function cljs$core$cat(rf){
var rf1 = cljs.core.preserving_reduced(rf);
return ((function (rf1){
return (function() {
var G__9225 = null;
var G__9225__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9225__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__9225__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf1,result,input);
});
G__9225 = function(result,input){
switch(arguments.length){
case 0:
return G__9225__0.call(this);
case 1:
return G__9225__1.call(this,result);
case 2:
return G__9225__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9225.cljs$core$IFn$_invoke$arity$0 = G__9225__0;
G__9225.cljs$core$IFn$_invoke$arity$1 = G__9225__1;
G__9225.cljs$core$IFn$_invoke$arity$2 = G__9225__2;
return G__9225;
})()
;})(rf1))
});
/**
 * Returns a lazy sequence removing consecutive duplicates in coll.
 * Returns a transducer when no collection is provided.
 */
cljs.core.dedupe = (function() {
var cljs$core$dedupe = null;
var cljs$core$dedupe__0 = (function (){
return (function (rf){
var pa = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cljs$core_SLASH_none) : cljs.core.atom.call(null,cljs.core.cst$kw$cljs$core_SLASH_none));
return ((function (pa){
return (function() {
var G__9226 = null;
var G__9226__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__9226__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__9226__2 = (function (result,input){
var prior = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(pa) : cljs.core.deref.call(null,pa));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(pa,input) : cljs.core.reset_BANG_.call(null,pa,input));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,input)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,input) : rf.call(null,result,input));
}
});
G__9226 = function(result,input){
switch(arguments.length){
case 0:
return G__9226__0.call(this);
case 1:
return G__9226__1.call(this,result);
case 2:
return G__9226__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9226.cljs$core$IFn$_invoke$arity$0 = G__9226__0;
G__9226.cljs$core$IFn$_invoke$arity$1 = G__9226__1;
G__9226.cljs$core$IFn$_invoke$arity$2 = G__9226__2;
return G__9226;
})()
;})(pa))
});
});
var cljs$core$dedupe__1 = (function (coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs$core$dedupe.cljs$core$IFn$_invoke$arity$0(),coll);
});
cljs$core$dedupe = function(coll){
switch(arguments.length){
case 0:
return cljs$core$dedupe__0.call(this);
case 1:
return cljs$core$dedupe__1.call(this,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$dedupe.cljs$core$IFn$_invoke$arity$0 = cljs$core$dedupe__0;
cljs$core$dedupe.cljs$core$IFn$_invoke$arity$1 = cljs$core$dedupe__1;
return cljs$core$dedupe;
})()
;
/**
 * Returns items from coll with random probability of prob (0.0 -
 * 1.0).  Returns a transducer when no collection is provided.
 */
cljs.core.random_sample = (function() {
var cljs$core$random_sample = null;
var cljs$core$random_sample__1 = (function (prob){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}));
});
var cljs$core$random_sample__2 = (function (prob,coll){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < prob);
}),coll);
});
cljs$core$random_sample = function(prob,coll){
switch(arguments.length){
case 1:
return cljs$core$random_sample__1.call(this,prob);
case 2:
return cljs$core$random_sample__2.call(this,prob,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$random_sample.cljs$core$IFn$_invoke$arity$1 = cljs$core$random_sample__1;
cljs$core$random_sample.cljs$core$IFn$_invoke$arity$2 = cljs$core$random_sample__2;
return cljs$core$random_sample;
})()
;

/**
* @constructor
*/
cljs.core.Eduction = (function (xform,coll){
this.xform = xform;
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 2173173760;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Eduction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(self__.xform,self__.coll));
});

cljs.core.Eduction.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(self__.xform,f,init,self__.coll);
});

cljs.core.Eduction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll__$1,writer,opts){
var self__ = this;
var coll__$2 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$2);
});

cljs.core.Eduction.cljs$lang$type = true;

cljs.core.Eduction.cljs$lang$ctorStr = "cljs.core/Eduction";

cljs.core.Eduction.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/Eduction");
});

cljs.core.__GT_Eduction = (function cljs$core$__GT_Eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});

(cljs.core.Eduction.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__1532__auto__ = this;
return cljs.core.es6_iterator(this__1532__auto__);
}));
/**
 * Returns a reducible/iterable/seqable application of
 * the transducer to the items in coll. Note that these applications
 * will be performed every time iterator/seq/reduce is called.
 */
cljs.core.eduction = (function cljs$core$eduction(xform,coll){
return (new cljs.core.Eduction(xform,coll));
});
/**
 * Runs the supplied procedure (via reduce), for purposes of side
 * effects, on successive items in the collection. Returns nil
 */
cljs.core.run_BANG_ = (function cljs$core$run_BANG_(proc,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9228_SHARP_,p2__9227_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__9227_SHARP_) : proc.call(null,p2__9227_SHARP_));
}),null,coll);
});

cljs.core.IEncodeJS = (function (){var obj9230 = {};
return obj9230;
})();

cljs.core._clj__GT_js = (function cljs$core$_clj__GT_js(x){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._clj__GT_js["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});

cljs.core._key__GT_js = (function cljs$core$_key__GT_js(x){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._key__GT_js["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});

cljs.core.key__GT_js = (function cljs$core$key__GT_js(k){
if((function (){var G__9232 = k;
if(G__9232){
var bit__1235__auto__ = null;
if(cljs.core.truth_((function (){var or__559__auto__ = bit__1235__auto__;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return G__9232.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__9232.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__9232);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__9232);
}
})()){
return cljs.core._clj__GT_js(k);
} else {
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(k) : cljs.core.clj__GT_js.call(null,k));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
}
}
});
/**
 * Recursively transforms ClojureScript values to JavaScript.
 * sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
 * Maps become Objects. Arbitrary keys are encoded to by key->js.
 */
cljs.core.clj__GT_js = (function cljs$core$clj__GT_js(x){
if((x == null)){
return null;
} else {
if((function (){var G__9246 = x;
if(G__9246){
var bit__1235__auto__ = null;
if(cljs.core.truth_((function (){var or__559__auto__ = bit__1235__auto__;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return G__9246.cljs$core$IEncodeJS$;
}
})())){
return true;
} else {
if((!G__9246.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__9246);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__9246);
}
})()){
return cljs.core._clj__GT_js(x);
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
var m = (function (){var obj9248 = {};
return obj9248;
})();
var seq__9249_9259 = cljs.core.seq(x);
var chunk__9250_9260 = null;
var count__9251_9261 = (0);
var i__9252_9262 = (0);
while(true){
if((i__9252_9262 < count__9251_9261)){
var vec__9253_9263 = chunk__9250_9260.cljs$core$IIndexed$_nth$arity$2(null,i__9252_9262);
var k_9264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9253_9263,(0),null);
var v_9265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9253_9263,(1),null);
(m[cljs.core.key__GT_js(k_9264)] = cljs$core$clj__GT_js(v_9265));

var G__9266 = seq__9249_9259;
var G__9267 = chunk__9250_9260;
var G__9268 = count__9251_9261;
var G__9269 = (i__9252_9262 + (1));
seq__9249_9259 = G__9266;
chunk__9250_9260 = G__9267;
count__9251_9261 = G__9268;
i__9252_9262 = G__9269;
continue;
} else {
var temp__4425__auto___9270 = cljs.core.seq(seq__9249_9259);
if(temp__4425__auto___9270){
var seq__9249_9271__$1 = temp__4425__auto___9270;
if(cljs.core.chunked_seq_QMARK_(seq__9249_9271__$1)){
var c__1341__auto___9272 = cljs.core.chunk_first(seq__9249_9271__$1);
var G__9273 = cljs.core.chunk_rest(seq__9249_9271__$1);
var G__9274 = c__1341__auto___9272;
var G__9275 = cljs.core.count(c__1341__auto___9272);
var G__9276 = (0);
seq__9249_9259 = G__9273;
chunk__9250_9260 = G__9274;
count__9251_9261 = G__9275;
i__9252_9262 = G__9276;
continue;
} else {
var vec__9254_9277 = cljs.core.first(seq__9249_9271__$1);
var k_9278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9254_9277,(0),null);
var v_9279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9254_9277,(1),null);
(m[cljs.core.key__GT_js(k_9278)] = cljs$core$clj__GT_js(v_9279));

var G__9280 = cljs.core.next(seq__9249_9271__$1);
var G__9281 = null;
var G__9282 = (0);
var G__9283 = (0);
seq__9249_9259 = G__9280;
chunk__9250_9260 = G__9281;
count__9251_9261 = G__9282;
i__9252_9262 = G__9283;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_(x)){
var arr = [];
var seq__9255_9284 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$core$clj__GT_js,x));
var chunk__9256_9285 = null;
var count__9257_9286 = (0);
var i__9258_9287 = (0);
while(true){
if((i__9258_9287 < count__9257_9286)){
var x_9288__$1 = chunk__9256_9285.cljs$core$IIndexed$_nth$arity$2(null,i__9258_9287);
arr.push(x_9288__$1);

var G__9289 = seq__9255_9284;
var G__9290 = chunk__9256_9285;
var G__9291 = count__9257_9286;
var G__9292 = (i__9258_9287 + (1));
seq__9255_9284 = G__9289;
chunk__9256_9285 = G__9290;
count__9257_9286 = G__9291;
i__9258_9287 = G__9292;
continue;
} else {
var temp__4425__auto___9293 = cljs.core.seq(seq__9255_9284);
if(temp__4425__auto___9293){
var seq__9255_9294__$1 = temp__4425__auto___9293;
if(cljs.core.chunked_seq_QMARK_(seq__9255_9294__$1)){
var c__1341__auto___9295 = cljs.core.chunk_first(seq__9255_9294__$1);
var G__9296 = cljs.core.chunk_rest(seq__9255_9294__$1);
var G__9297 = c__1341__auto___9295;
var G__9298 = cljs.core.count(c__1341__auto___9295);
var G__9299 = (0);
seq__9255_9284 = G__9296;
chunk__9256_9285 = G__9297;
count__9257_9286 = G__9298;
i__9258_9287 = G__9299;
continue;
} else {
var x_9300__$1 = cljs.core.first(seq__9255_9294__$1);
arr.push(x_9300__$1);

var G__9301 = cljs.core.next(seq__9255_9294__$1);
var G__9302 = null;
var G__9303 = (0);
var G__9304 = (0);
seq__9255_9284 = G__9301;
chunk__9256_9285 = G__9302;
count__9257_9286 = G__9303;
i__9258_9287 = G__9304;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
return x;

}
}
}
}
}
}
});

cljs.core.IEncodeClojure = (function (){var obj9306 = {};
return obj9306;
})();

cljs.core._js__GT_clj = (function cljs$core$_js__GT_clj(x,options){
if((function (){var and__547__auto__ = x;
if(and__547__auto__){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else {
return and__547__auto__;
}
})()){
return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else {
var x__1198__auto__ = (((x == null))?null:x);
return (function (){var or__559__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._js__GT_clj["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});

/**
 * Recursively transforms JavaScript arrays into ClojureScript
 * vectors, and JavaScript objects into ClojureScript maps.  With
 * option ':keywordize-keys true' will convert object fields from
 * strings to keywords.
 * @param {...*} var_args
 */
cljs.core.js__GT_clj = (function() {
var cljs$core$js__GT_clj = null;
var cljs$core$js__GT_clj__1 = (function (x){
return cljs$core$js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywordize_DASH_keys,false], null)], 0));
});
var cljs$core$js__GT_clj__2 = (function() { 
var G__9347__delegate = function (x,opts){
var map__9328 = opts;
var map__9328__$1 = ((cljs.core.seq_QMARK_(map__9328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9328):map__9328);
var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9328__$1,cljs.core.cst$kw$keywordize_DASH_keys);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = ((function (map__9328,map__9328__$1,keywordize_keys,keyfn){
return (function cljs$core$js__GT_clj_$_thisfn(x__$1){
if((function (){var G__9340 = x__$1;
if(G__9340){
var bit__1235__auto__ = null;
if(cljs.core.truth_((function (){var or__559__auto__ = bit__1235__auto__;
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return G__9340.cljs$core$IEncodeClojure$;
}
})())){
return true;
} else {
if((!G__9340.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__9340);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__9340);
}
})()){
return cljs.core._js__GT_clj(x__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$core$js__GT_clj_$_thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$core$js__GT_clj_$_thisfn,x__$1));
} else {
if(x__$1 instanceof Array){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs$core$js__GT_clj_$_thisfn,x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__1310__auto__ = ((function (map__9328,map__9328__$1,keywordize_keys,keyfn){
return (function cljs$core$js__GT_clj_$_thisfn_$_iter__9341(s__9342){
return (new cljs.core.LazySeq(null,((function (map__9328,map__9328__$1,keywordize_keys,keyfn){
return (function (){
var s__9342__$1 = s__9342;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__9342__$1);
if(temp__4425__auto__){
var s__9342__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9342__$2)){
var c__1308__auto__ = cljs.core.chunk_first(s__9342__$2);
var size__1309__auto__ = cljs.core.count(c__1308__auto__);
var b__9344 = cljs.core.chunk_buffer(size__1309__auto__);
if((function (){var i__9343 = (0);
while(true){
if((i__9343 < size__1309__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__1308__auto__,i__9343);
cljs.core.chunk_append(b__9344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(k) : keyfn.call(null,k)),cljs$core$js__GT_clj_$_thisfn((x__$1[k]))], null));

var G__9348 = (i__9343 + (1));
i__9343 = G__9348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9344),cljs$core$js__GT_clj_$_thisfn_$_iter__9341(cljs.core.chunk_rest(s__9342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9344),null);
}
} else {
var k = cljs.core.first(s__9342__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(k) : keyfn.call(null,k)),cljs$core$js__GT_clj_$_thisfn((x__$1[k]))], null),cljs$core$js__GT_clj_$_thisfn_$_iter__9341(cljs.core.rest(s__9342__$2)));
}
} else {
return null;
}
break;
}
});})(map__9328,map__9328__$1,keywordize_keys,keyfn))
,null,null));
});})(map__9328,map__9328__$1,keywordize_keys,keyfn))
;
return iter__1310__auto__(cljs.core.js_keys(x__$1));
})());
} else {
return x__$1;

}
}
}
}
}
});})(map__9328,map__9328__$1,keywordize_keys,keyfn))
;
return f(x);
};
var G__9347 = function (x,var_args){
var opts = null;
if (arguments.length > 1) {
var G__9349__i = 0, G__9349__a = new Array(arguments.length -  1);
while (G__9349__i < G__9349__a.length) {G__9349__a[G__9349__i] = arguments[G__9349__i + 1]; ++G__9349__i;}
  opts = new cljs.core.IndexedSeq(G__9349__a,0);
} 
return G__9347__delegate.call(this,x,opts);};
G__9347.cljs$lang$maxFixedArity = 1;
G__9347.cljs$lang$applyTo = (function (arglist__9350){
var x = cljs.core.first(arglist__9350);
var opts = cljs.core.rest(arglist__9350);
return G__9347__delegate(x,opts);
});
G__9347.cljs$core$IFn$_invoke$arity$variadic = G__9347__delegate;
return G__9347;
})()
;
cljs$core$js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return cljs$core$js__GT_clj__1.call(this,x);
default:
var G__9351 = null;
if (arguments.length > 1) {
var G__9352__i = 0, G__9352__a = new Array(arguments.length -  1);
while (G__9352__i < G__9352__a.length) {G__9352__a[G__9352__i] = arguments[G__9352__i + 1]; ++G__9352__i;}
G__9351 = new cljs.core.IndexedSeq(G__9352__a,0);
}
return cljs$core$js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, G__9351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$js__GT_clj.cljs$lang$maxFixedArity = 1;
cljs$core$js__GT_clj.cljs$lang$applyTo = cljs$core$js__GT_clj__2.cljs$lang$applyTo;
cljs$core$js__GT_clj.cljs$core$IFn$_invoke$arity$1 = cljs$core$js__GT_clj__1;
cljs$core$js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = cljs$core$js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$js__GT_clj;
})()
;
/**
 * Returns a memoized version of a referentially transparent function. The
 * memoized version of the function keeps a cache of the mapping from arguments
 * to results and, when calls with the same arguments are repeated often, has
 * higher performance at the expense of higher memory use.
 */
cljs.core.memoize = (function cljs$core$memoize(f){
var mem = (function (){var G__9354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9354) : cljs.core.atom.call(null,G__9354));
})();
return ((function (mem){
return (function() { 
var G__9355__delegate = function (args){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mem) : cljs.core.deref.call(null,mem)),args,cljs.core.lookup_sentinel);
if((v === cljs.core.lookup_sentinel)){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);

return ret;
} else {
return v;
}
};
var G__9355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9356__i = 0, G__9356__a = new Array(arguments.length -  0);
while (G__9356__i < G__9356__a.length) {G__9356__a[G__9356__i] = arguments[G__9356__i + 0]; ++G__9356__i;}
  args = new cljs.core.IndexedSeq(G__9356__a,0);
} 
return G__9355__delegate.call(this,args);};
G__9355.cljs$lang$maxFixedArity = 0;
G__9355.cljs$lang$applyTo = (function (arglist__9357){
var args = cljs.core.seq(arglist__9357);
return G__9355__delegate(args);
});
G__9355.cljs$core$IFn$_invoke$arity$variadic = G__9355__delegate;
return G__9355;
})()
;
;})(mem))
});
/**
 * trampoline can be used to convert algorithms requiring mutual
 * recursion without stack consumption. Calls f with supplied args, if
 * any. If f returns a fn, calls that fn with no arguments, and
 * continues to repeat, until the return value is not a fn, then
 * returns that non-fn value. Note that if you want to return a fn as a
 * final value, you must wrap it in some data structure and unpack it
 * after trampoline returns.
 * @param {...*} var_args
 */
cljs.core.trampoline = (function() {
var cljs$core$trampoline = null;
var cljs$core$trampoline__1 = (function (f){
while(true){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret)){
var G__9359 = ret;
f = G__9359;
continue;
} else {
return ret;
}
break;
}
});
var cljs$core$trampoline__2 = (function() { 
var G__9360__delegate = function (f,args){
return cljs$core$trampoline.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__9360 = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__9361__i = 0, G__9361__a = new Array(arguments.length -  1);
while (G__9361__i < G__9361__a.length) {G__9361__a[G__9361__i] = arguments[G__9361__i + 1]; ++G__9361__i;}
  args = new cljs.core.IndexedSeq(G__9361__a,0);
} 
return G__9360__delegate.call(this,f,args);};
G__9360.cljs$lang$maxFixedArity = 1;
G__9360.cljs$lang$applyTo = (function (arglist__9362){
var f = cljs.core.first(arglist__9362);
var args = cljs.core.rest(arglist__9362);
return G__9360__delegate(f,args);
});
G__9360.cljs$core$IFn$_invoke$arity$variadic = G__9360__delegate;
return G__9360;
})()
;
cljs$core$trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return cljs$core$trampoline__1.call(this,f);
default:
var G__9363 = null;
if (arguments.length > 1) {
var G__9364__i = 0, G__9364__a = new Array(arguments.length -  1);
while (G__9364__i < G__9364__a.length) {G__9364__a[G__9364__i] = arguments[G__9364__i + 1]; ++G__9364__i;}
G__9363 = new cljs.core.IndexedSeq(G__9364__a,0);
}
return cljs$core$trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, G__9363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$trampoline.cljs$lang$maxFixedArity = 1;
cljs$core$trampoline.cljs$lang$applyTo = cljs$core$trampoline__2.cljs$lang$applyTo;
cljs$core$trampoline.cljs$core$IFn$_invoke$arity$1 = cljs$core$trampoline__1;
cljs$core$trampoline.cljs$core$IFn$_invoke$arity$variadic = cljs$core$trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return cljs$core$trampoline;
})()
;
/**
 * Returns a random floating point number between 0 (inclusive) and
 * n (default 1) (exclusive).
 */
cljs.core.rand = (function() {
var cljs$core$rand = null;
var cljs$core$rand__0 = (function (){
return cljs$core$rand.cljs$core$IFn$_invoke$arity$1((1));
});
var cljs$core$rand__1 = (function (n){
return (Math.random() * n);
});
cljs$core$rand = function(n){
switch(arguments.length){
case 0:
return cljs$core$rand__0.call(this);
case 1:
return cljs$core$rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$rand.cljs$core$IFn$_invoke$arity$0 = cljs$core$rand__0;
cljs$core$rand.cljs$core$IFn$_invoke$arity$1 = cljs$core$rand__1;
return cljs$core$rand;
})()
;
/**
 * Returns a random integer between 0 (inclusive) and n (exclusive).
 */
cljs.core.rand_int = (function cljs$core$rand_int(n){
var G__9366 = (Math.random() * n);
return Math.floor(G__9366);
});
/**
 * Return a random element of the (sequential) collection. Will have
 * the same performance characteristics as nth for the given
 * collection.
 */
cljs.core.rand_nth = (function cljs$core$rand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
 * Returns a map of the elements of coll keyed by the result of
 * f on each element. The value at each key will be a vector of the
 * corresponding elements, in the order they appeared in coll.
 */
cljs.core.group_by = (function cljs$core$group_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Creates a hierarchy object for use with derive, isa? etc.
 */
cljs.core.make_hierarchy = (function cljs$core$make_hierarchy(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$parents,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$descendants,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ancestors,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function cljs$core$get_global_hierarchy(){
if((cljs.core._global_hierarchy == null)){
cljs.core._global_hierarchy = (function (){var G__9368 = cljs.core.make_hierarchy();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9368) : cljs.core.atom.call(null,G__9368));
})();
} else {
}

return cljs.core._global_hierarchy;
});
/**
 * @param {...*} var_args
 */
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var cljs$core$swap_global_hierarchy_BANG___delegate = function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var cljs$core$swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__9369__i = 0, G__9369__a = new Array(arguments.length -  1);
while (G__9369__i < G__9369__a.length) {G__9369__a[G__9369__i] = arguments[G__9369__i + 1]; ++G__9369__i;}
  args = new cljs.core.IndexedSeq(G__9369__a,0);
} 
return cljs$core$swap_global_hierarchy_BANG___delegate.call(this,f,args);};
cljs$core$swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__9370){
var f = cljs.core.first(arglist__9370);
var args = cljs.core.rest(arglist__9370);
return cljs$core$swap_global_hierarchy_BANG___delegate(f,args);
});
cljs$core$swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$swap_global_hierarchy_BANG___delegate;
return cljs$core$swap_global_hierarchy_BANG_;
})()
;
/**
 * Returns true if (= child parent), or child is directly or indirectly derived from
 * parent, either via a JavaScript type inheritance relationship or a
 * relationship established via derive. h must be a hierarchy obtained
 * from make-hierarchy, if not supplied defaults to the global
 * hierarchy
 */
cljs.core.isa_QMARK_ = (function() {
var cljs$core$isa_QMARK_ = null;
var cljs$core$isa_QMARK___2 = (function (child,parent){
return cljs$core$isa_QMARK_.cljs$core$IFn$_invoke$arity$3((function (){var G__9412 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9412) : cljs.core.deref.call(null,G__9412));
})(),child,parent);
});
var cljs$core$isa_QMARK___3 = (function (h,child,parent){
var or__559__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = cljs.core.contains_QMARK_(cljs.core.cst$kw$ancestors.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
var and__547__auto__ = cljs.core.vector_QMARK_(parent);
if(and__547__auto__){
var and__547__auto____$1 = cljs.core.vector_QMARK_(child);
if(and__547__auto____$1){
var and__547__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__547__auto____$2){
var ret = true;
var i = (0);
while(true){
if((!(ret)) || ((i === cljs.core.count(parent)))){
return ret;
} else {
var G__9413 = cljs$core$isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(i) : child.call(null,i)),(parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(i) : parent.call(null,i)));
var G__9414 = (i + (1));
ret = G__9413;
i = G__9414;
continue;
}
break;
}
} else {
return and__547__auto____$2;
}
} else {
return and__547__auto____$1;
}
} else {
return and__547__auto__;
}
}
}
});
cljs$core$isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return cljs$core$isa_QMARK___2.call(this,h,child);
case 3:
return cljs$core$isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = cljs$core$isa_QMARK___2;
cljs$core$isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = cljs$core$isa_QMARK___3;
return cljs$core$isa_QMARK_;
})()
;
/**
 * Returns the immediate parents of tag, either via a JavaScript type
 * inheritance relationship or a relationship established via derive. h
 * must be a hierarchy obtained from make-hierarchy, if not supplied
 * defaults to the global hierarchy
 */
cljs.core.parents = (function() {
var cljs$core$parents = null;
var cljs$core$parents__1 = (function (tag){
return cljs$core$parents.cljs$core$IFn$_invoke$arity$2((function (){var G__9419 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9419) : cljs.core.deref.call(null,G__9419));
})(),tag);
});
var cljs$core$parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(h),tag));
});
cljs$core$parents = function(h,tag){
switch(arguments.length){
case 1:
return cljs$core$parents__1.call(this,h);
case 2:
return cljs$core$parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$parents.cljs$core$IFn$_invoke$arity$1 = cljs$core$parents__1;
cljs$core$parents.cljs$core$IFn$_invoke$arity$2 = cljs$core$parents__2;
return cljs$core$parents;
})()
;
/**
 * Returns the immediate and indirect parents of tag, either via a JavaScript type
 * inheritance relationship or a relationship established via derive. h
 * must be a hierarchy obtained from make-hierarchy, if not supplied
 * defaults to the global hierarchy
 */
cljs.core.ancestors = (function() {
var cljs$core$ancestors = null;
var cljs$core$ancestors__1 = (function (tag){
return cljs$core$ancestors.cljs$core$IFn$_invoke$arity$2((function (){var G__9424 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9424) : cljs.core.deref.call(null,G__9424));
})(),tag);
});
var cljs$core$ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ancestors.cljs$core$IFn$_invoke$arity$1(h),tag));
});
cljs$core$ancestors = function(h,tag){
switch(arguments.length){
case 1:
return cljs$core$ancestors__1.call(this,h);
case 2:
return cljs$core$ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$ancestors.cljs$core$IFn$_invoke$arity$1 = cljs$core$ancestors__1;
cljs$core$ancestors.cljs$core$IFn$_invoke$arity$2 = cljs$core$ancestors__2;
return cljs$core$ancestors;
})()
;
/**
 * Returns the immediate and indirect children of tag, through a
 * relationship established via derive. h must be a hierarchy obtained
 * from make-hierarchy, if not supplied defaults to the global
 * hierarchy. Note: does not work on JavaScript type inheritance
 * relationships.
 */
cljs.core.descendants = (function() {
var cljs$core$descendants = null;
var cljs$core$descendants__1 = (function (tag){
return cljs$core$descendants.cljs$core$IFn$_invoke$arity$2((function (){var G__9429 = cljs.core.get_global_hierarchy();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9429) : cljs.core.deref.call(null,G__9429));
})(),tag);
});
var cljs$core$descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$descendants.cljs$core$IFn$_invoke$arity$1(h),tag));
});
cljs$core$descendants = function(h,tag){
switch(arguments.length){
case 1:
return cljs$core$descendants__1.call(this,h);
case 2:
return cljs$core$descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$descendants.cljs$core$IFn$_invoke$arity$1 = cljs$core$descendants__1;
cljs$core$descendants.cljs$core$IFn$_invoke$arity$2 = cljs$core$descendants__2;
return cljs$core$descendants;
})()
;
/**
 * Establishes a parent/child relationship between parent and
 * tag. Parent must be a namespace-qualified symbol or keyword and
 * child can be either a namespace-qualified symbol or keyword or a
 * class. h must be a hierarchy obtained from make-hierarchy, if not
 * supplied defaults to, and modifies, the global hierarchy.
 */
cljs.core.derive = (function() {
var cljs$core$derive = null;
var cljs$core$derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$namespace,cljs.core.cst$sym$parent)], 0)))].join('')));
}

cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs$core$derive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var cljs$core$derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$tag,cljs.core.cst$sym$parent)], 0)))].join('')));
}

var tp = cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(h);
var td = cljs.core.cst$kw$descendants.cljs$core$IFn$_invoke$arity$1(h);
var ta = cljs.core.cst$kw$ancestors.cljs$core$IFn$_invoke$arity$1(h);
var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(target) : targets.call(null,target)))));
});})(tp,td,ta))
,m,cljs.core.cons(source,(sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(source) : sources.call(null,source))));
});})(tp,td,ta))
;
var or__559__auto__ = ((cljs.core.contains_QMARK_((tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(tag) : tp.call(null,tag)),parent))?null:(function (){
if(cljs.core.contains_QMARK_((ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(tag) : ta.call(null,tag)),parent)){
throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else {
}

if(cljs.core.contains_QMARK_((ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(parent) : ta.call(null,parent)),tag)){
throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.cst$kw$ancestors,tf(cljs.core.cst$kw$ancestors.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.cst$kw$descendants,tf(cljs.core.cst$kw$descendants.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})()
);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return h;
}
});
cljs$core$derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return cljs$core$derive__2.call(this,h,tag);
case 3:
return cljs$core$derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$derive.cljs$core$IFn$_invoke$arity$2 = cljs$core$derive__2;
cljs$core$derive.cljs$core$IFn$_invoke$arity$3 = cljs$core$derive__3;
return cljs$core$derive;
})()
;
/**
 * Removes a parent/child relationship between parent and
 * tag. h must be a hierarchy obtained from make-hierarchy, if not
 * supplied defaults to, and modifies, the global hierarchy.
 */
cljs.core.underive = (function() {
var cljs$core$underive = null;
var cljs$core$underive__2 = (function (tag,parent){
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs$core$underive,cljs.core.array_seq([tag,parent], 0));

return null;
});
var cljs$core$underive__3 = (function (h,tag,parent){
var parentMap = cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(h);
var childsParents = (cljs.core.truth_((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));
var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__9430_SHARP_){
return cljs.core.cons(cljs.core.first(p1__9430_SHARP_),cljs.core.interpose(cljs.core.first(p1__9430_SHARP_),cljs.core.second(p1__9430_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));
if(cljs.core.contains_QMARK_((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)),parent)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parentMap,childsParents,newParents,deriv_seq){
return (function (p1__9431_SHARP_,p2__9432_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__9431_SHARP_,p2__9432_SHARP_);
});})(parentMap,childsParents,newParents,deriv_seq))
,cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),deriv_seq));
} else {
return h;
}
});
cljs$core$underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return cljs$core$underive__2.call(this,h,tag);
case 3:
return cljs$core$underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$underive.cljs$core$IFn$_invoke$arity$2 = cljs$core$underive__2;
cljs$core$underive.cljs$core$IFn$_invoke$arity$3 = cljs$core$underive__3;
return cljs$core$underive;
})()
;
cljs.core.reset_cache = (function cljs$core$reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(method_table) : cljs.core.deref.call(null,method_table));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hierarchy) : cljs.core.deref.call(null,hierarchy));
}));
});
cljs.core.prefers_STAR_ = (function cljs$core$prefers_STAR_(x,y,prefer_table){
var xprefs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prefer_table) : cljs.core.deref.call(null,prefer_table)).call(null,x);
var or__559__auto__ = (cljs.core.truth_((function (){var and__547__auto__ = xprefs;
if(cljs.core.truth_(and__547__auto__)){
return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(y) : xprefs.call(null,y));
} else {
return and__547__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
var or__559__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(cljs$core$prefers_STAR_(x,cljs.core.first(ps),prefer_table))){
} else {
}

var G__9445 = cljs.core.rest(ps);
ps = G__9445;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__559__auto____$1)){
return or__559__auto____$1;
} else {
var or__559__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);
while(true){
if((cljs.core.count(ps) > (0))){
if(cljs.core.truth_(cljs$core$prefers_STAR_(cljs.core.first(ps),y,prefer_table))){
} else {
}

var G__9446 = cljs.core.rest(ps);
ps = G__9446;
continue;
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(or__559__auto____$2)){
return or__559__auto____$2;
} else {
return false;
}
}
}
});
cljs.core.dominates = (function cljs$core$dominates(x,y,prefer_table){
var or__559__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__559__auto__)){
return or__559__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function cljs$core$find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__9449){
var vec__9450 = p__9449;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9450,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9450,(1),null);
var e = vec__9450;
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hierarchy) : cljs.core.deref.call(null,hierarchy)),dispatch_val,k)){
var be2 = (cljs.core.truth_((function (){var or__559__auto__ = (be == null);
if(or__559__auto__){
return or__559__auto__;
} else {
return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table))){
} else {
throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}

return be2;
} else {
return be;
}
}),null,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(method_table) : cljs.core.deref.call(null,method_table)));
if(cljs.core.truth_(best_entry)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cached_hierarchy) : cljs.core.deref.call(null,cached_hierarchy)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hierarchy) : cljs.core.deref.call(null,hierarchy)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));

return cljs.core.second(best_entry);
} else {
cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);

return cljs$core$find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else {
return null;
}
});

cljs.core.IMultiFn = (function (){var obj9452 = {};
return obj9452;
})();

cljs.core._reset = (function cljs$core$_reset(mf){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_reset$arity$1;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._reset[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._reset["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});

cljs.core._add_method = (function cljs$core$_add_method(mf,dispatch_val,method){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._add_method[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._add_method["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});

cljs.core._remove_method = (function cljs$core$_remove_method(mf,dispatch_val){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._remove_method[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._remove_method["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._prefer_method = (function cljs$core$_prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._prefer_method[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});

cljs.core._get_method = (function cljs$core$_get_method(mf,dispatch_val){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._get_method[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._get_method["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});

cljs.core._methods = (function cljs$core$_methods(mf){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_methods$arity$1;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._methods[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._methods["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});

cljs.core._prefers = (function cljs$core$_prefers(mf){
if((function (){var and__547__auto__ = mf;
if(and__547__auto__){
return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else {
return and__547__auto__;
}
})()){
return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else {
var x__1198__auto__ = (((mf == null))?null:mf);
return (function (){var or__559__auto__ = (cljs.core._prefers[goog.typeOf(x__1198__auto__)]);
if(or__559__auto__){
return or__559__auto__;
} else {
var or__559__auto____$1 = (cljs.core._prefers["_"]);
if(or__559__auto____$1){
return or__559__auto____$1;
} else {
throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});

cljs.core.throw_no_method_error = (function cljs$core$throw_no_method_error(name,dispatch_val){
throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194305;
this.cljs$lang$protocol_mask$partition1$ = 4352;
})
cljs.core.MultiFn.prototype.call = (function() {
var G__9454 = null;
var G__9454__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});
var G__9454__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.dispatch_fn.call(null,a));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(a) : target_fn.call(null,a));
});
var G__9454__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.dispatch_fn.call(null,a,b));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(a,b) : target_fn.call(null,a,b));
});
var G__9454__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.dispatch_fn.call(null,a,b,c));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(a,b,c) : target_fn.call(null,a,b,c));
});
var G__9454__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.dispatch_fn.call(null,a,b,c,d));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : target_fn.call(null,a,b,c,d));
});
var G__9454__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.dispatch_fn.call(null,a,b,c,d,e));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : target_fn.call(null,a,b,c,d,e));
});
var G__9454__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.dispatch_fn.call(null,a,b,c,d,e,f));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : target_fn.call(null,a,b,c,d,e,f));
});
var G__9454__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : target_fn.call(null,a,b,c,d,e,f,g));
});
var G__9454__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : target_fn.call(null,a,b,c,d,e,f,g,h));
});
var G__9454__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : target_fn.call(null,a,b,c,d,e,f,g,h,i));
});
var G__9454__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j));
});
var G__9454__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k));
});
var G__9454__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});
var G__9454__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});
var G__9454__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});
var G__9454__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});
var G__9454__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});
var G__9454__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});
var G__9454__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__9454__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__9454__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__9454__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var mf = self____$1;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__9454 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__9454__1.call(this,self__);
case 2:
return G__9454__2.call(this,self__,a);
case 3:
return G__9454__3.call(this,self__,a,b);
case 4:
return G__9454__4.call(this,self__,a,b,c);
case 5:
return G__9454__5.call(this,self__,a,b,c,d);
case 6:
return G__9454__6.call(this,self__,a,b,c,d,e);
case 7:
return G__9454__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__9454__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__9454__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__9454__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__9454__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__9454__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__9454__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__9454__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__9454__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__9454__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__9454__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__9454__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__9454__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__9454__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__9454__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__9454__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9454.cljs$core$IFn$_invoke$arity$1 = G__9454__1;
G__9454.cljs$core$IFn$_invoke$arity$2 = G__9454__2;
G__9454.cljs$core$IFn$_invoke$arity$3 = G__9454__3;
G__9454.cljs$core$IFn$_invoke$arity$4 = G__9454__4;
G__9454.cljs$core$IFn$_invoke$arity$5 = G__9454__5;
G__9454.cljs$core$IFn$_invoke$arity$6 = G__9454__6;
G__9454.cljs$core$IFn$_invoke$arity$7 = G__9454__7;
G__9454.cljs$core$IFn$_invoke$arity$8 = G__9454__8;
G__9454.cljs$core$IFn$_invoke$arity$9 = G__9454__9;
G__9454.cljs$core$IFn$_invoke$arity$10 = G__9454__10;
G__9454.cljs$core$IFn$_invoke$arity$11 = G__9454__11;
G__9454.cljs$core$IFn$_invoke$arity$12 = G__9454__12;
G__9454.cljs$core$IFn$_invoke$arity$13 = G__9454__13;
G__9454.cljs$core$IFn$_invoke$arity$14 = G__9454__14;
G__9454.cljs$core$IFn$_invoke$arity$15 = G__9454__15;
G__9454.cljs$core$IFn$_invoke$arity$16 = G__9454__16;
G__9454.cljs$core$IFn$_invoke$arity$17 = G__9454__17;
G__9454.cljs$core$IFn$_invoke$arity$18 = G__9454__18;
G__9454.cljs$core$IFn$_invoke$arity$19 = G__9454__19;
G__9454.cljs$core$IFn$_invoke$arity$20 = G__9454__20;
G__9454.cljs$core$IFn$_invoke$arity$21 = G__9454__21;
G__9454.cljs$core$IFn$_invoke$arity$22 = G__9454__22;
return G__9454;
})()
;

cljs.core.MultiFn.prototype.apply = (function (self__,args9453){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9453)));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$0() : self__.dispatch_fn.call(null));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$0 ? target_fn.cljs$core$IFn$_invoke$arity$0() : target_fn.call(null));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(a) : self__.dispatch_fn.call(null,a));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$1 ? target_fn.cljs$core$IFn$_invoke$arity$1(a) : target_fn.call(null,a));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$2(a,b) : self__.dispatch_fn.call(null,a,b));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$2 ? target_fn.cljs$core$IFn$_invoke$arity$2(a,b) : target_fn.call(null,a,b));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.dispatch_fn.call(null,a,b,c));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$3 ? target_fn.cljs$core$IFn$_invoke$arity$3(a,b,c) : target_fn.call(null,a,b,c));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.dispatch_fn.call(null,a,b,c,d));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$4 ? target_fn.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : target_fn.call(null,a,b,c,d));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.dispatch_fn.call(null,a,b,c,d,e));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$5 ? target_fn.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : target_fn.call(null,a,b,c,d,e));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.dispatch_fn.call(null,a,b,c,d,e,f));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$6 ? target_fn.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : target_fn.call(null,a,b,c,d,e,f));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$7 ? target_fn.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : target_fn.call(null,a,b,c,d,e,f,g));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$8 ? target_fn.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : target_fn.call(null,a,b,c,d,e,f,g,h));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$9 ? target_fn.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : target_fn.call(null,a,b,c,d,e,f,g,h,i));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$10 ? target_fn.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$11 ? target_fn.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$12 ? target_fn.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$13 ? target_fn.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$14 ? target_fn.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m,n) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$15 ? target_fn.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$16 ? target_fn.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$17 ? target_fn.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$18 ? target_fn.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$19 ? target_fn.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var mf = this;
var dispatch_val = (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : self__.dispatch_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return (target_fn.cljs$core$IFn$_invoke$arity$20 ? target_fn.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : target_fn.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});

cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var mf = this;
var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.dispatch_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
var target_fn = mf.cljs$core$IMultiFn$_get_method$arity$2(null,dispatch_val);
if(cljs.core.truth_(target_fn)){
} else {
cljs.core.throw_no_method_error(self__.name,dispatch_val);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(target_fn,a,b,c,d,cljs.core.array_seq([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (mf__$2){
return cljs.core.PersistentArrayMap.EMPTY;
});})(mf__$1))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,((function (mf__$1){
return (function (mf__$2){
return null;
});})(mf__$1))
);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);

cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);

return mf__$1;
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
var mf__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cached_hierarchy) : cljs.core.deref.call(null,self__.cached_hierarchy)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.hierarchy) : cljs.core.deref.call(null,self__.hierarchy)))){
} else {
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}

var temp__4423__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.method_cache) : cljs.core.deref.call(null,self__.method_cache)).call(null,dispatch_val);
if(cljs.core.truth_(temp__4423__auto__)){
var target_fn = temp__4423__auto__;
return target_fn;
} else {
var temp__4423__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4423__auto____$1)){
var target_fn = temp__4423__auto____$1;
return target_fn;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.method_table) : cljs.core.deref.call(null,self__.method_table)).call(null,self__.default_dispatch_val);
}
}
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
var mf__$1 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table))){
throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,((function (mf__$1){
return (function (old){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
});})(mf__$1))
);

return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.method_table) : cljs.core.deref.call(null,self__.method_table));
});

cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
var mf__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.prefer_table) : cljs.core.deref.call(null,self__.prefer_table));
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._name(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$INamed$_namespace$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._namespace(self__.name);
});

cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

cljs.core.MultiFn.cljs$lang$type = true;

cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";

cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/MultiFn");
});

cljs.core.__GT_MultiFn = (function cljs$core$__GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});

/**
 * Removes all of the methods of multimethod.
 */
cljs.core.remove_all_methods = (function cljs$core$remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
 * Removes the method of multimethod associated with dispatch-value.
 */
cljs.core.remove_method = (function cljs$core$remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
 * Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
 * when there is a conflict
 */
cljs.core.prefer_method = (function cljs$core$prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
 * Given a multimethod, returns a map of dispatch values -> dispatch fns
 */
cljs.core.methods$ = (function cljs$core$methods(multifn){
return cljs.core._methods(multifn);
});
/**
 * Given a multimethod and a dispatch value, returns the dispatch fn
 * that would apply to that value, or nil if none apply and no default
 */
cljs.core.get_method = (function cljs$core$get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
 * Given a multimethod, returns a map of preferred value -> set of other values
 */
cljs.core.prefers = (function cljs$core$prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.uuid;
});

cljs.core.UUID.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});

cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});

cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__9455 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0));
return goog.string.hashCode(G__9455);
});

cljs.core.UUID.cljs$lang$type = true;

cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";

cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/UUID");
});

cljs.core.__GT_UUID = (function cljs$core$__GT_UUID(uuid){
return (new cljs.core.UUID(uuid));
});


/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})

cljs.core.ExceptionInfo.cljs$lang$type = true;

cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";

cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__1141__auto__,writer__1142__auto__,opt__1143__auto__){
return cljs.core._write(writer__1142__auto__,"cljs.core/ExceptionInfo");
});

cljs.core.__GT_ExceptionInfo = (function cljs$core$__GT_ExceptionInfo(message,data,cause){
return (new cljs.core.ExceptionInfo(message,data,cause));
});

cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
 * Alpha - subject to change.
 * Create an instance of ExceptionInfo, an Error type that carries a
 * map of additional data.
 */
cljs.core.ex_info = (function() {
var cljs$core$ex_info = null;
var cljs$core$ex_info__2 = (function (msg,map){
return (new cljs.core.ExceptionInfo(msg,map,null));
});
var cljs$core$ex_info__3 = (function (msg,map,cause){
return (new cljs.core.ExceptionInfo(msg,map,cause));
});
cljs$core$ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return cljs$core$ex_info__2.call(this,msg,map);
case 3:
return cljs$core$ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$ex_info.cljs$core$IFn$_invoke$arity$2 = cljs$core$ex_info__2;
cljs$core$ex_info.cljs$core$IFn$_invoke$arity$3 = cljs$core$ex_info__3;
return cljs$core$ex_info;
})()
;
/**
 * Alpha - subject to change.
 * Returns exception data (a map) if ex is an ExceptionInfo.
 * Otherwise returns nil.
 */
cljs.core.ex_data = (function cljs$core$ex_data(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.data;
} else {
return null;
}
});
/**
 * Alpha - subject to change.
 * Returns the message attached to the given Error / ExceptionInfo object.
 * For non-Errors returns nil.
 */
cljs.core.ex_message = (function cljs$core$ex_message(ex){
if((ex instanceof Error)){
return ex.message;
} else {
return null;
}
});
/**
 * Alpha - subject to change.
 * Returns exception cause (an Error / ExceptionInfo) if ex is an
 * ExceptionInfo.
 * Otherwise returns nil.
 */
cljs.core.ex_cause = (function cljs$core$ex_cause(ex){
if((ex instanceof cljs.core.ExceptionInfo)){
return ex.cause;
} else {
return null;
}
});
/**
 * Returns an JavaScript compatible comparator based upon pred.
 */
cljs.core.comparator = (function cljs$core$comparator(pred){
return (function (x,y){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(x,y) : pred.call(null,x,y)))){
return (-1);
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(y,x) : pred.call(null,y,x)))){
return (1);
} else {
return (0);

}
}
});
});
cljs.core.special_symbol_QMARK_ = (function cljs$core$special_symbol_QMARK_(x){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [cljs.core.cst$sym$_AMPERSAND_,null,cljs.core.cst$sym$defrecord_STAR_,null,cljs.core.cst$sym$try,null,cljs.core.cst$sym$loop_STAR_,null,cljs.core.cst$sym$do,null,cljs.core.cst$sym$letfn_STAR_,null,cljs.core.cst$sym$if,null,cljs.core.cst$sym$new,null,cljs.core.cst$sym$ns,null,cljs.core.cst$sym$deftype_STAR_,null,cljs.core.cst$sym$let_STAR_,null,cljs.core.cst$sym$js_STAR_,null,cljs.core.cst$sym$fn_STAR_,null,cljs.core.cst$sym$recur,null,cljs.core.cst$sym$set_BANG_,null,cljs.core.cst$sym$$,null,cljs.core.cst$sym$quote,null,cljs.core.cst$sym$throw,null,cljs.core.cst$sym$def,null], null), null),x);
});
