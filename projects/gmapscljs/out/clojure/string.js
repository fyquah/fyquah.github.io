// Compiled by ClojureScript 1.7.48 {:static-fns true, :optimize-constants true}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if(cljs.core.truth_(match.hasOwnProperty("source"))){
return s.replace((new RegExp(match.source,"g")),replacement);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 * separated by an optional separator.
 */
clojure.string.join = (function() {
var clojure$string$join = null;
var clojure$string$join__1 = (function (coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll);
});
var clojure$string$join__2 = (function (separator,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(separator,coll));
});
clojure$string$join = function(separator,coll){
switch(arguments.length){
case 1:
return clojure$string$join__1.call(this,separator);
case 2:
return clojure$string$join__2.call(this,separator,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$string$join.cljs$core$IFn$_invoke$arity$1 = clojure$string$join__1;
clojure$string$join.cljs$core$IFn$_invoke$arity$2 = clojure$string$join__2;
return clojure$string$join;
})()
;
/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 * characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))))].join('');
}
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.peek(v__$1))){
var G__6805 = cljs.core.pop(v__$1);
v__$1 = G__6805;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
return clojure.string.pop_last_while_empty(v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count(s))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s)))),"");
} else {
var pred__6809 = cljs.core._EQ_;
var expr__6810 = limit;
if(cljs.core.truth_((pred__6809.cljs$core$IFn$_invoke$arity$2 ? pred__6809.cljs$core$IFn$_invoke$arity$2((1),expr__6810) : pred__6809.call(null,(1),expr__6810)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_((pred__6809.cljs$core$IFn$_invoke$arity$2 ? pred__6809.cljs$core$IFn$_invoke$arity$2((2),expr__6810) : pred__6809.call(null,(2),expr__6810)))){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.cons("",cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.seq(s))),(0),c))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 * the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function() {
var clojure$string$split = null;
var clojure$string$split__2 = (function (s,re){
return clojure$string$split.cljs$core$IFn$_invoke$arity$3(s,re,(0));
});
var clojure$string$split__3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed(limit,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(re)].join(''),"/(?:)/"))?clojure.string.split_with_empty_regex(s,limit):(((limit < (1)))?cljs.core.vec([cljs.core.str(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limit__$1,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
} else {
var temp__4423__auto__ = cljs.core.re_find(re,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var index = s__$1.indexOf(m);
var G__6812 = s__$1.substring((index + cljs.core.count(m)));
var G__6813 = (limit__$1 - (1));
var G__6814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1.substring((0),index));
s__$1 = G__6812;
limit__$1 = G__6813;
parts = G__6814;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parts,s__$1);
}
}
break;
}
})())));
});
clojure$string$split = function(s,re,limit){
switch(arguments.length){
case 2:
return clojure$string$split__2.call(this,s,re);
case 3:
return clojure$string$split__3.call(this,s,re,limit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$string$split.cljs$core$IFn$_invoke$arity$2 = clojure$string$split__2;
clojure$string$split.cljs$core$IFn$_invoke$arity$3 = clojure$string$split__3;
return clojure$string$split;
})()
;
/**
 * Splits s on
 * or
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 * string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(index - (1)));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,"\r"))){
var G__6815 = (index - (1));
index = G__6815;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var temp__4423__auto___6816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cmap,ch);
if(cljs.core.truth_(temp__4423__auto___6816)){
var replacement_6817 = temp__4423__auto___6816;
buffer.append([cljs.core.str(replacement_6817)].join(''));
} else {
buffer.append(ch);
}

var G__6818 = (index + (1));
index = G__6818;
continue;
}
break;
}
});
