// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24714_24728 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24715_24729 = null;
var count__24716_24730 = (0);
var i__24717_24731 = (0);
while(true){
if((i__24717_24731 < count__24716_24730)){
var f_24732 = cljs.core._nth.call(null,chunk__24715_24729,i__24717_24731);
cljs.core.println.call(null,"  ",f_24732);

var G__24733 = seq__24714_24728;
var G__24734 = chunk__24715_24729;
var G__24735 = count__24716_24730;
var G__24736 = (i__24717_24731 + (1));
seq__24714_24728 = G__24733;
chunk__24715_24729 = G__24734;
count__24716_24730 = G__24735;
i__24717_24731 = G__24736;
continue;
} else {
var temp__4425__auto___24737 = cljs.core.seq.call(null,seq__24714_24728);
if(temp__4425__auto___24737){
var seq__24714_24738__$1 = temp__4425__auto___24737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24714_24738__$1)){
var c__17236__auto___24739 = cljs.core.chunk_first.call(null,seq__24714_24738__$1);
var G__24740 = cljs.core.chunk_rest.call(null,seq__24714_24738__$1);
var G__24741 = c__17236__auto___24739;
var G__24742 = cljs.core.count.call(null,c__17236__auto___24739);
var G__24743 = (0);
seq__24714_24728 = G__24740;
chunk__24715_24729 = G__24741;
count__24716_24730 = G__24742;
i__24717_24731 = G__24743;
continue;
} else {
var f_24744 = cljs.core.first.call(null,seq__24714_24738__$1);
cljs.core.println.call(null,"  ",f_24744);

var G__24745 = cljs.core.next.call(null,seq__24714_24738__$1);
var G__24746 = null;
var G__24747 = (0);
var G__24748 = (0);
seq__24714_24728 = G__24745;
chunk__24715_24729 = G__24746;
count__24716_24730 = G__24747;
i__24717_24731 = G__24748;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24749 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16452__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24749);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24749)))?cljs.core.second.call(null,arglists_24749):arglists_24749));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__24718 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24719 = null;
var count__24720 = (0);
var i__24721 = (0);
while(true){
if((i__24721 < count__24720)){
var vec__24722 = cljs.core._nth.call(null,chunk__24719,i__24721);
var name = cljs.core.nth.call(null,vec__24722,(0),null);
var map__24723 = cljs.core.nth.call(null,vec__24722,(1),null);
var map__24723__$1 = ((((!((map__24723 == null)))?((((map__24723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24723):map__24723);
var doc = cljs.core.get.call(null,map__24723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24723__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24750 = seq__24718;
var G__24751 = chunk__24719;
var G__24752 = count__24720;
var G__24753 = (i__24721 + (1));
seq__24718 = G__24750;
chunk__24719 = G__24751;
count__24720 = G__24752;
i__24721 = G__24753;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24718);
if(temp__4425__auto__){
var seq__24718__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24718__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__24718__$1);
var G__24754 = cljs.core.chunk_rest.call(null,seq__24718__$1);
var G__24755 = c__17236__auto__;
var G__24756 = cljs.core.count.call(null,c__17236__auto__);
var G__24757 = (0);
seq__24718 = G__24754;
chunk__24719 = G__24755;
count__24720 = G__24756;
i__24721 = G__24757;
continue;
} else {
var vec__24725 = cljs.core.first.call(null,seq__24718__$1);
var name = cljs.core.nth.call(null,vec__24725,(0),null);
var map__24726 = cljs.core.nth.call(null,vec__24725,(1),null);
var map__24726__$1 = ((((!((map__24726 == null)))?((((map__24726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24726):map__24726);
var doc = cljs.core.get.call(null,map__24726__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24726__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24758 = cljs.core.next.call(null,seq__24718__$1);
var G__24759 = null;
var G__24760 = (0);
var G__24761 = (0);
seq__24718 = G__24758;
chunk__24719 = G__24759;
count__24720 = G__24760;
i__24721 = G__24761;
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
}
});

//# sourceMappingURL=repl.js.map