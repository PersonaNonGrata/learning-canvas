// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16452__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16452__auto__){
return or__16452__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16452__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24766_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24766_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24771 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24772 = null;
var count__24773 = (0);
var i__24774 = (0);
while(true){
if((i__24774 < count__24773)){
var n = cljs.core._nth.call(null,chunk__24772,i__24774);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24775 = seq__24771;
var G__24776 = chunk__24772;
var G__24777 = count__24773;
var G__24778 = (i__24774 + (1));
seq__24771 = G__24775;
chunk__24772 = G__24776;
count__24773 = G__24777;
i__24774 = G__24778;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24771);
if(temp__4425__auto__){
var seq__24771__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24771__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__24771__$1);
var G__24779 = cljs.core.chunk_rest.call(null,seq__24771__$1);
var G__24780 = c__17236__auto__;
var G__24781 = cljs.core.count.call(null,c__17236__auto__);
var G__24782 = (0);
seq__24771 = G__24779;
chunk__24772 = G__24780;
count__24773 = G__24781;
i__24774 = G__24782;
continue;
} else {
var n = cljs.core.first.call(null,seq__24771__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24783 = cljs.core.next.call(null,seq__24771__$1);
var G__24784 = null;
var G__24785 = (0);
var G__24786 = (0);
seq__24771 = G__24783;
chunk__24772 = G__24784;
count__24773 = G__24785;
i__24774 = G__24786;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24825_24832 = cljs.core.seq.call(null,deps);
var chunk__24826_24833 = null;
var count__24827_24834 = (0);
var i__24828_24835 = (0);
while(true){
if((i__24828_24835 < count__24827_24834)){
var dep_24836 = cljs.core._nth.call(null,chunk__24826_24833,i__24828_24835);
topo_sort_helper_STAR_.call(null,dep_24836,(depth + (1)),state);

var G__24837 = seq__24825_24832;
var G__24838 = chunk__24826_24833;
var G__24839 = count__24827_24834;
var G__24840 = (i__24828_24835 + (1));
seq__24825_24832 = G__24837;
chunk__24826_24833 = G__24838;
count__24827_24834 = G__24839;
i__24828_24835 = G__24840;
continue;
} else {
var temp__4425__auto___24841 = cljs.core.seq.call(null,seq__24825_24832);
if(temp__4425__auto___24841){
var seq__24825_24842__$1 = temp__4425__auto___24841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24825_24842__$1)){
var c__17236__auto___24843 = cljs.core.chunk_first.call(null,seq__24825_24842__$1);
var G__24844 = cljs.core.chunk_rest.call(null,seq__24825_24842__$1);
var G__24845 = c__17236__auto___24843;
var G__24846 = cljs.core.count.call(null,c__17236__auto___24843);
var G__24847 = (0);
seq__24825_24832 = G__24844;
chunk__24826_24833 = G__24845;
count__24827_24834 = G__24846;
i__24828_24835 = G__24847;
continue;
} else {
var dep_24848 = cljs.core.first.call(null,seq__24825_24842__$1);
topo_sort_helper_STAR_.call(null,dep_24848,(depth + (1)),state);

var G__24849 = cljs.core.next.call(null,seq__24825_24842__$1);
var G__24850 = null;
var G__24851 = (0);
var G__24852 = (0);
seq__24825_24832 = G__24849;
chunk__24826_24833 = G__24850;
count__24827_24834 = G__24851;
i__24828_24835 = G__24852;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24829){
var vec__24831 = p__24829;
var x = cljs.core.nth.call(null,vec__24831,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24831,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24831,x,xs,get_deps__$1){
return (function (p1__24787_SHARP_){
return clojure.set.difference.call(null,p1__24787_SHARP_,x);
});})(vec__24831,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24865 = cljs.core.seq.call(null,provides);
var chunk__24866 = null;
var count__24867 = (0);
var i__24868 = (0);
while(true){
if((i__24868 < count__24867)){
var prov = cljs.core._nth.call(null,chunk__24866,i__24868);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24869_24877 = cljs.core.seq.call(null,requires);
var chunk__24870_24878 = null;
var count__24871_24879 = (0);
var i__24872_24880 = (0);
while(true){
if((i__24872_24880 < count__24871_24879)){
var req_24881 = cljs.core._nth.call(null,chunk__24870_24878,i__24872_24880);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24881,prov);

var G__24882 = seq__24869_24877;
var G__24883 = chunk__24870_24878;
var G__24884 = count__24871_24879;
var G__24885 = (i__24872_24880 + (1));
seq__24869_24877 = G__24882;
chunk__24870_24878 = G__24883;
count__24871_24879 = G__24884;
i__24872_24880 = G__24885;
continue;
} else {
var temp__4425__auto___24886 = cljs.core.seq.call(null,seq__24869_24877);
if(temp__4425__auto___24886){
var seq__24869_24887__$1 = temp__4425__auto___24886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24869_24887__$1)){
var c__17236__auto___24888 = cljs.core.chunk_first.call(null,seq__24869_24887__$1);
var G__24889 = cljs.core.chunk_rest.call(null,seq__24869_24887__$1);
var G__24890 = c__17236__auto___24888;
var G__24891 = cljs.core.count.call(null,c__17236__auto___24888);
var G__24892 = (0);
seq__24869_24877 = G__24889;
chunk__24870_24878 = G__24890;
count__24871_24879 = G__24891;
i__24872_24880 = G__24892;
continue;
} else {
var req_24893 = cljs.core.first.call(null,seq__24869_24887__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24893,prov);

var G__24894 = cljs.core.next.call(null,seq__24869_24887__$1);
var G__24895 = null;
var G__24896 = (0);
var G__24897 = (0);
seq__24869_24877 = G__24894;
chunk__24870_24878 = G__24895;
count__24871_24879 = G__24896;
i__24872_24880 = G__24897;
continue;
}
} else {
}
}
break;
}

var G__24898 = seq__24865;
var G__24899 = chunk__24866;
var G__24900 = count__24867;
var G__24901 = (i__24868 + (1));
seq__24865 = G__24898;
chunk__24866 = G__24899;
count__24867 = G__24900;
i__24868 = G__24901;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24865);
if(temp__4425__auto__){
var seq__24865__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24865__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__24865__$1);
var G__24902 = cljs.core.chunk_rest.call(null,seq__24865__$1);
var G__24903 = c__17236__auto__;
var G__24904 = cljs.core.count.call(null,c__17236__auto__);
var G__24905 = (0);
seq__24865 = G__24902;
chunk__24866 = G__24903;
count__24867 = G__24904;
i__24868 = G__24905;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24865__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24873_24906 = cljs.core.seq.call(null,requires);
var chunk__24874_24907 = null;
var count__24875_24908 = (0);
var i__24876_24909 = (0);
while(true){
if((i__24876_24909 < count__24875_24908)){
var req_24910 = cljs.core._nth.call(null,chunk__24874_24907,i__24876_24909);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24910,prov);

var G__24911 = seq__24873_24906;
var G__24912 = chunk__24874_24907;
var G__24913 = count__24875_24908;
var G__24914 = (i__24876_24909 + (1));
seq__24873_24906 = G__24911;
chunk__24874_24907 = G__24912;
count__24875_24908 = G__24913;
i__24876_24909 = G__24914;
continue;
} else {
var temp__4425__auto___24915__$1 = cljs.core.seq.call(null,seq__24873_24906);
if(temp__4425__auto___24915__$1){
var seq__24873_24916__$1 = temp__4425__auto___24915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24873_24916__$1)){
var c__17236__auto___24917 = cljs.core.chunk_first.call(null,seq__24873_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24873_24916__$1);
var G__24919 = c__17236__auto___24917;
var G__24920 = cljs.core.count.call(null,c__17236__auto___24917);
var G__24921 = (0);
seq__24873_24906 = G__24918;
chunk__24874_24907 = G__24919;
count__24875_24908 = G__24920;
i__24876_24909 = G__24921;
continue;
} else {
var req_24922 = cljs.core.first.call(null,seq__24873_24916__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24922,prov);

var G__24923 = cljs.core.next.call(null,seq__24873_24916__$1);
var G__24924 = null;
var G__24925 = (0);
var G__24926 = (0);
seq__24873_24906 = G__24923;
chunk__24874_24907 = G__24924;
count__24875_24908 = G__24925;
i__24876_24909 = G__24926;
continue;
}
} else {
}
}
break;
}

var G__24927 = cljs.core.next.call(null,seq__24865__$1);
var G__24928 = null;
var G__24929 = (0);
var G__24930 = (0);
seq__24865 = G__24927;
chunk__24866 = G__24928;
count__24867 = G__24929;
i__24868 = G__24930;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24935_24939 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24936_24940 = null;
var count__24937_24941 = (0);
var i__24938_24942 = (0);
while(true){
if((i__24938_24942 < count__24937_24941)){
var ns_24943 = cljs.core._nth.call(null,chunk__24936_24940,i__24938_24942);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24943);

var G__24944 = seq__24935_24939;
var G__24945 = chunk__24936_24940;
var G__24946 = count__24937_24941;
var G__24947 = (i__24938_24942 + (1));
seq__24935_24939 = G__24944;
chunk__24936_24940 = G__24945;
count__24937_24941 = G__24946;
i__24938_24942 = G__24947;
continue;
} else {
var temp__4425__auto___24948 = cljs.core.seq.call(null,seq__24935_24939);
if(temp__4425__auto___24948){
var seq__24935_24949__$1 = temp__4425__auto___24948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24935_24949__$1)){
var c__17236__auto___24950 = cljs.core.chunk_first.call(null,seq__24935_24949__$1);
var G__24951 = cljs.core.chunk_rest.call(null,seq__24935_24949__$1);
var G__24952 = c__17236__auto___24950;
var G__24953 = cljs.core.count.call(null,c__17236__auto___24950);
var G__24954 = (0);
seq__24935_24939 = G__24951;
chunk__24936_24940 = G__24952;
count__24937_24941 = G__24953;
i__24938_24942 = G__24954;
continue;
} else {
var ns_24955 = cljs.core.first.call(null,seq__24935_24949__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24955);

var G__24956 = cljs.core.next.call(null,seq__24935_24949__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24935_24939 = G__24956;
chunk__24936_24940 = G__24957;
count__24937_24941 = G__24958;
i__24938_24942 = G__24959;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16452__auto__ = goog.require__;
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24960__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24960 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24961__i = 0, G__24961__a = new Array(arguments.length -  0);
while (G__24961__i < G__24961__a.length) {G__24961__a[G__24961__i] = arguments[G__24961__i + 0]; ++G__24961__i;}
  args = new cljs.core.IndexedSeq(G__24961__a,0);
} 
return G__24960__delegate.call(this,args);};
G__24960.cljs$lang$maxFixedArity = 0;
G__24960.cljs$lang$applyTo = (function (arglist__24962){
var args = cljs.core.seq(arglist__24962);
return G__24960__delegate(args);
});
G__24960.cljs$core$IFn$_invoke$arity$variadic = G__24960__delegate;
return G__24960;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24963 = cljs.core._EQ_;
var expr__24964 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24963.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24964))){
return ((function (pred__24963,expr__24964){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e24966){if((e24966 instanceof Error)){
var e = e24966;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24966;

}
}})());
});
;})(pred__24963,expr__24964))
} else {
if(cljs.core.truth_(pred__24963.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24964))){
return ((function (pred__24963,expr__24964){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24963,expr__24964){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24963,expr__24964))
);

return deferred.addErrback(((function (deferred,pred__24963,expr__24964){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24963,expr__24964))
);
});
;})(pred__24963,expr__24964))
} else {
return ((function (pred__24963,expr__24964){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24963,expr__24964))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24967,callback){
var map__24970 = p__24967;
var map__24970__$1 = ((((!((map__24970 == null)))?((((map__24970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24970):map__24970);
var file_msg = map__24970__$1;
var request_url = cljs.core.get.call(null,map__24970__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24970,map__24970__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24970,map__24970__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__){
return (function (state_24994){
var state_val_24995 = (state_24994[(1)]);
if((state_val_24995 === (7))){
var inst_24990 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
var statearr_24996_25016 = state_24994__$1;
(statearr_24996_25016[(2)] = inst_24990);

(statearr_24996_25016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (1))){
var state_24994__$1 = state_24994;
var statearr_24997_25017 = state_24994__$1;
(statearr_24997_25017[(2)] = null);

(statearr_24997_25017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (4))){
var inst_24974 = (state_24994[(7)]);
var inst_24974__$1 = (state_24994[(2)]);
var state_24994__$1 = (function (){var statearr_24998 = state_24994;
(statearr_24998[(7)] = inst_24974__$1);

return statearr_24998;
})();
if(cljs.core.truth_(inst_24974__$1)){
var statearr_24999_25018 = state_24994__$1;
(statearr_24999_25018[(1)] = (5));

} else {
var statearr_25000_25019 = state_24994__$1;
(statearr_25000_25019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (6))){
var state_24994__$1 = state_24994;
var statearr_25001_25020 = state_24994__$1;
(statearr_25001_25020[(2)] = null);

(statearr_25001_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (3))){
var inst_24992 = (state_24994[(2)]);
var state_24994__$1 = state_24994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24994__$1,inst_24992);
} else {
if((state_val_24995 === (2))){
var state_24994__$1 = state_24994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24994__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24995 === (11))){
var inst_24986 = (state_24994[(2)]);
var state_24994__$1 = (function (){var statearr_25002 = state_24994;
(statearr_25002[(8)] = inst_24986);

return statearr_25002;
})();
var statearr_25003_25021 = state_24994__$1;
(statearr_25003_25021[(2)] = null);

(statearr_25003_25021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (9))){
var inst_24980 = (state_24994[(9)]);
var inst_24978 = (state_24994[(10)]);
var inst_24982 = inst_24980.call(null,inst_24978);
var state_24994__$1 = state_24994;
var statearr_25004_25022 = state_24994__$1;
(statearr_25004_25022[(2)] = inst_24982);

(statearr_25004_25022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (5))){
var inst_24974 = (state_24994[(7)]);
var inst_24976 = figwheel.client.file_reloading.blocking_load.call(null,inst_24974);
var state_24994__$1 = state_24994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24994__$1,(8),inst_24976);
} else {
if((state_val_24995 === (10))){
var inst_24978 = (state_24994[(10)]);
var inst_24984 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24978);
var state_24994__$1 = state_24994;
var statearr_25005_25023 = state_24994__$1;
(statearr_25005_25023[(2)] = inst_24984);

(statearr_25005_25023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24995 === (8))){
var inst_24980 = (state_24994[(9)]);
var inst_24974 = (state_24994[(7)]);
var inst_24978 = (state_24994[(2)]);
var inst_24979 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24980__$1 = cljs.core.get.call(null,inst_24979,inst_24974);
var state_24994__$1 = (function (){var statearr_25006 = state_24994;
(statearr_25006[(9)] = inst_24980__$1);

(statearr_25006[(10)] = inst_24978);

return statearr_25006;
})();
if(cljs.core.truth_(inst_24980__$1)){
var statearr_25007_25024 = state_24994__$1;
(statearr_25007_25024[(1)] = (9));

} else {
var statearr_25008_25025 = state_24994__$1;
(statearr_25008_25025[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__19635__auto__))
;
return ((function (switch__19570__auto__,c__19635__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19571__auto__ = null;
var figwheel$client$file_reloading$state_machine__19571__auto____0 = (function (){
var statearr_25012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25012[(0)] = figwheel$client$file_reloading$state_machine__19571__auto__);

(statearr_25012[(1)] = (1));

return statearr_25012;
});
var figwheel$client$file_reloading$state_machine__19571__auto____1 = (function (state_24994){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_24994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e25013){if((e25013 instanceof Object)){
var ex__19574__auto__ = e25013;
var statearr_25014_25026 = state_24994;
(statearr_25014_25026[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25027 = state_24994;
state_24994 = G__25027;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19571__auto__ = function(state_24994){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19571__auto____1.call(this,state_24994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19571__auto____0;
figwheel$client$file_reloading$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19571__auto____1;
return figwheel$client$file_reloading$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__))
})();
var state__19637__auto__ = (function (){var statearr_25015 = f__19636__auto__.call(null);
(statearr_25015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_25015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__))
);

return c__19635__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25028,callback){
var map__25031 = p__25028;
var map__25031__$1 = ((((!((map__25031 == null)))?((((map__25031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25031):map__25031);
var file_msg = map__25031__$1;
var namespace = cljs.core.get.call(null,map__25031__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25031,map__25031__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25031,map__25031__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25033){
var map__25036 = p__25033;
var map__25036__$1 = ((((!((map__25036 == null)))?((((map__25036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25036):map__25036);
var file_msg = map__25036__$1;
var namespace = cljs.core.get.call(null,map__25036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16440__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16440__auto__){
var or__16452__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
var or__16452__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16452__auto____$1)){
return or__16452__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16440__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25038,callback){
var map__25041 = p__25038;
var map__25041__$1 = ((((!((map__25041 == null)))?((((map__25041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25041):map__25041);
var file_msg = map__25041__$1;
var request_url = cljs.core.get.call(null,map__25041__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25041__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19635__auto___25129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___25129,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___25129,out){
return (function (state_25111){
var state_val_25112 = (state_25111[(1)]);
if((state_val_25112 === (1))){
var inst_25089 = cljs.core.nth.call(null,files,(0),null);
var inst_25090 = cljs.core.nthnext.call(null,files,(1));
var inst_25091 = files;
var state_25111__$1 = (function (){var statearr_25113 = state_25111;
(statearr_25113[(7)] = inst_25091);

(statearr_25113[(8)] = inst_25090);

(statearr_25113[(9)] = inst_25089);

return statearr_25113;
})();
var statearr_25114_25130 = state_25111__$1;
(statearr_25114_25130[(2)] = null);

(statearr_25114_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (2))){
var inst_25091 = (state_25111[(7)]);
var inst_25094 = (state_25111[(10)]);
var inst_25094__$1 = cljs.core.nth.call(null,inst_25091,(0),null);
var inst_25095 = cljs.core.nthnext.call(null,inst_25091,(1));
var inst_25096 = (inst_25094__$1 == null);
var inst_25097 = cljs.core.not.call(null,inst_25096);
var state_25111__$1 = (function (){var statearr_25115 = state_25111;
(statearr_25115[(10)] = inst_25094__$1);

(statearr_25115[(11)] = inst_25095);

return statearr_25115;
})();
if(inst_25097){
var statearr_25116_25131 = state_25111__$1;
(statearr_25116_25131[(1)] = (4));

} else {
var statearr_25117_25132 = state_25111__$1;
(statearr_25117_25132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (3))){
var inst_25109 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25111__$1,inst_25109);
} else {
if((state_val_25112 === (4))){
var inst_25094 = (state_25111[(10)]);
var inst_25099 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25094);
var state_25111__$1 = state_25111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25111__$1,(7),inst_25099);
} else {
if((state_val_25112 === (5))){
var inst_25105 = cljs.core.async.close_BANG_.call(null,out);
var state_25111__$1 = state_25111;
var statearr_25118_25133 = state_25111__$1;
(statearr_25118_25133[(2)] = inst_25105);

(statearr_25118_25133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (6))){
var inst_25107 = (state_25111[(2)]);
var state_25111__$1 = state_25111;
var statearr_25119_25134 = state_25111__$1;
(statearr_25119_25134[(2)] = inst_25107);

(statearr_25119_25134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25112 === (7))){
var inst_25095 = (state_25111[(11)]);
var inst_25101 = (state_25111[(2)]);
var inst_25102 = cljs.core.async.put_BANG_.call(null,out,inst_25101);
var inst_25091 = inst_25095;
var state_25111__$1 = (function (){var statearr_25120 = state_25111;
(statearr_25120[(7)] = inst_25091);

(statearr_25120[(12)] = inst_25102);

return statearr_25120;
})();
var statearr_25121_25135 = state_25111__$1;
(statearr_25121_25135[(2)] = null);

(statearr_25121_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19635__auto___25129,out))
;
return ((function (switch__19570__auto__,c__19635__auto___25129,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____0 = (function (){
var statearr_25125 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25125[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__);

(statearr_25125[(1)] = (1));

return statearr_25125;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____1 = (function (state_25111){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_25111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e25126){if((e25126 instanceof Object)){
var ex__19574__auto__ = e25126;
var statearr_25127_25136 = state_25111;
(statearr_25127_25136[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25137 = state_25111;
state_25111 = G__25137;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__ = function(state_25111){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____1.call(this,state_25111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___25129,out))
})();
var state__19637__auto__ = (function (){var statearr_25128 = f__19636__auto__.call(null);
(statearr_25128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___25129);

return statearr_25128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___25129,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25138,opts){
var map__25142 = p__25138;
var map__25142__$1 = ((((!((map__25142 == null)))?((((map__25142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25142):map__25142);
var eval_body__$1 = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16440__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16440__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16440__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25144){var e = e25144;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25145_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25145_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25150){
var vec__25151 = p__25150;
var k = cljs.core.nth.call(null,vec__25151,(0),null);
var v = cljs.core.nth.call(null,vec__25151,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25152){
var vec__25153 = p__25152;
var k = cljs.core.nth.call(null,vec__25153,(0),null);
var v = cljs.core.nth.call(null,vec__25153,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25157,p__25158){
var map__25405 = p__25157;
var map__25405__$1 = ((((!((map__25405 == null)))?((((map__25405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25405):map__25405);
var opts = map__25405__$1;
var before_jsload = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25406 = p__25158;
var map__25406__$1 = ((((!((map__25406 == null)))?((((map__25406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25406):map__25406);
var msg = map__25406__$1;
var files = cljs.core.get.call(null,map__25406__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25406__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25406__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25559){
var state_val_25560 = (state_25559[(1)]);
if((state_val_25560 === (7))){
var inst_25423 = (state_25559[(7)]);
var inst_25422 = (state_25559[(8)]);
var inst_25421 = (state_25559[(9)]);
var inst_25420 = (state_25559[(10)]);
var inst_25428 = cljs.core._nth.call(null,inst_25421,inst_25423);
var inst_25429 = figwheel.client.file_reloading.eval_body.call(null,inst_25428,opts);
var inst_25430 = (inst_25423 + (1));
var tmp25561 = inst_25422;
var tmp25562 = inst_25421;
var tmp25563 = inst_25420;
var inst_25420__$1 = tmp25563;
var inst_25421__$1 = tmp25562;
var inst_25422__$1 = tmp25561;
var inst_25423__$1 = inst_25430;
var state_25559__$1 = (function (){var statearr_25564 = state_25559;
(statearr_25564[(7)] = inst_25423__$1);

(statearr_25564[(8)] = inst_25422__$1);

(statearr_25564[(9)] = inst_25421__$1);

(statearr_25564[(10)] = inst_25420__$1);

(statearr_25564[(11)] = inst_25429);

return statearr_25564;
})();
var statearr_25565_25651 = state_25559__$1;
(statearr_25565_25651[(2)] = null);

(statearr_25565_25651[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (20))){
var inst_25463 = (state_25559[(12)]);
var inst_25471 = figwheel.client.file_reloading.sort_files.call(null,inst_25463);
var state_25559__$1 = state_25559;
var statearr_25566_25652 = state_25559__$1;
(statearr_25566_25652[(2)] = inst_25471);

(statearr_25566_25652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (27))){
var state_25559__$1 = state_25559;
var statearr_25567_25653 = state_25559__$1;
(statearr_25567_25653[(2)] = null);

(statearr_25567_25653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (1))){
var inst_25412 = (state_25559[(13)]);
var inst_25409 = before_jsload.call(null,files);
var inst_25410 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25411 = (function (){return ((function (inst_25412,inst_25409,inst_25410,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25154_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25154_SHARP_);
});
;})(inst_25412,inst_25409,inst_25410,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25412__$1 = cljs.core.filter.call(null,inst_25411,files);
var inst_25413 = cljs.core.not_empty.call(null,inst_25412__$1);
var state_25559__$1 = (function (){var statearr_25568 = state_25559;
(statearr_25568[(13)] = inst_25412__$1);

(statearr_25568[(14)] = inst_25410);

(statearr_25568[(15)] = inst_25409);

return statearr_25568;
})();
if(cljs.core.truth_(inst_25413)){
var statearr_25569_25654 = state_25559__$1;
(statearr_25569_25654[(1)] = (2));

} else {
var statearr_25570_25655 = state_25559__$1;
(statearr_25570_25655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (24))){
var state_25559__$1 = state_25559;
var statearr_25571_25656 = state_25559__$1;
(statearr_25571_25656[(2)] = null);

(statearr_25571_25656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (39))){
var inst_25513 = (state_25559[(16)]);
var state_25559__$1 = state_25559;
var statearr_25572_25657 = state_25559__$1;
(statearr_25572_25657[(2)] = inst_25513);

(statearr_25572_25657[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (46))){
var inst_25554 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25573_25658 = state_25559__$1;
(statearr_25573_25658[(2)] = inst_25554);

(statearr_25573_25658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (4))){
var inst_25457 = (state_25559[(2)]);
var inst_25458 = cljs.core.List.EMPTY;
var inst_25459 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25458);
var inst_25460 = (function (){return ((function (inst_25457,inst_25458,inst_25459,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25155_SHARP_){
var and__16440__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25155_SHARP_);
if(cljs.core.truth_(and__16440__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25155_SHARP_));
} else {
return and__16440__auto__;
}
});
;})(inst_25457,inst_25458,inst_25459,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25461 = cljs.core.filter.call(null,inst_25460,files);
var inst_25462 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25463 = cljs.core.concat.call(null,inst_25461,inst_25462);
var state_25559__$1 = (function (){var statearr_25574 = state_25559;
(statearr_25574[(12)] = inst_25463);

(statearr_25574[(17)] = inst_25459);

(statearr_25574[(18)] = inst_25457);

return statearr_25574;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25575_25659 = state_25559__$1;
(statearr_25575_25659[(1)] = (16));

} else {
var statearr_25576_25660 = state_25559__$1;
(statearr_25576_25660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (15))){
var inst_25447 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25577_25661 = state_25559__$1;
(statearr_25577_25661[(2)] = inst_25447);

(statearr_25577_25661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (21))){
var inst_25473 = (state_25559[(19)]);
var inst_25473__$1 = (state_25559[(2)]);
var inst_25474 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25473__$1);
var state_25559__$1 = (function (){var statearr_25578 = state_25559;
(statearr_25578[(19)] = inst_25473__$1);

return statearr_25578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25559__$1,(22),inst_25474);
} else {
if((state_val_25560 === (31))){
var inst_25557 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25559__$1,inst_25557);
} else {
if((state_val_25560 === (32))){
var inst_25513 = (state_25559[(16)]);
var inst_25518 = inst_25513.cljs$lang$protocol_mask$partition0$;
var inst_25519 = (inst_25518 & (64));
var inst_25520 = inst_25513.cljs$core$ISeq$;
var inst_25521 = (inst_25519) || (inst_25520);
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25521)){
var statearr_25579_25662 = state_25559__$1;
(statearr_25579_25662[(1)] = (35));

} else {
var statearr_25580_25663 = state_25559__$1;
(statearr_25580_25663[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (40))){
var inst_25534 = (state_25559[(20)]);
var inst_25533 = (state_25559[(2)]);
var inst_25534__$1 = cljs.core.get.call(null,inst_25533,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25535 = cljs.core.get.call(null,inst_25533,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25536 = cljs.core.not_empty.call(null,inst_25534__$1);
var state_25559__$1 = (function (){var statearr_25581 = state_25559;
(statearr_25581[(20)] = inst_25534__$1);

(statearr_25581[(21)] = inst_25535);

return statearr_25581;
})();
if(cljs.core.truth_(inst_25536)){
var statearr_25582_25664 = state_25559__$1;
(statearr_25582_25664[(1)] = (41));

} else {
var statearr_25583_25665 = state_25559__$1;
(statearr_25583_25665[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (33))){
var state_25559__$1 = state_25559;
var statearr_25584_25666 = state_25559__$1;
(statearr_25584_25666[(2)] = false);

(statearr_25584_25666[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (13))){
var inst_25433 = (state_25559[(22)]);
var inst_25437 = cljs.core.chunk_first.call(null,inst_25433);
var inst_25438 = cljs.core.chunk_rest.call(null,inst_25433);
var inst_25439 = cljs.core.count.call(null,inst_25437);
var inst_25420 = inst_25438;
var inst_25421 = inst_25437;
var inst_25422 = inst_25439;
var inst_25423 = (0);
var state_25559__$1 = (function (){var statearr_25585 = state_25559;
(statearr_25585[(7)] = inst_25423);

(statearr_25585[(8)] = inst_25422);

(statearr_25585[(9)] = inst_25421);

(statearr_25585[(10)] = inst_25420);

return statearr_25585;
})();
var statearr_25586_25667 = state_25559__$1;
(statearr_25586_25667[(2)] = null);

(statearr_25586_25667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (22))){
var inst_25477 = (state_25559[(23)]);
var inst_25473 = (state_25559[(19)]);
var inst_25476 = (state_25559[(24)]);
var inst_25481 = (state_25559[(25)]);
var inst_25476__$1 = (state_25559[(2)]);
var inst_25477__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25476__$1);
var inst_25478 = (function (){var all_files = inst_25473;
var res_SINGLEQUOTE_ = inst_25476__$1;
var res = inst_25477__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25477,inst_25473,inst_25476,inst_25481,inst_25476__$1,inst_25477__$1,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25156_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25156_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25477,inst_25473,inst_25476,inst_25481,inst_25476__$1,inst_25477__$1,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25479 = cljs.core.filter.call(null,inst_25478,inst_25476__$1);
var inst_25480 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25481__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25480);
var inst_25482 = cljs.core.not_empty.call(null,inst_25481__$1);
var state_25559__$1 = (function (){var statearr_25587 = state_25559;
(statearr_25587[(23)] = inst_25477__$1);

(statearr_25587[(26)] = inst_25479);

(statearr_25587[(24)] = inst_25476__$1);

(statearr_25587[(25)] = inst_25481__$1);

return statearr_25587;
})();
if(cljs.core.truth_(inst_25482)){
var statearr_25588_25668 = state_25559__$1;
(statearr_25588_25668[(1)] = (23));

} else {
var statearr_25589_25669 = state_25559__$1;
(statearr_25589_25669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (36))){
var state_25559__$1 = state_25559;
var statearr_25590_25670 = state_25559__$1;
(statearr_25590_25670[(2)] = false);

(statearr_25590_25670[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (41))){
var inst_25534 = (state_25559[(20)]);
var inst_25538 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25539 = cljs.core.map.call(null,inst_25538,inst_25534);
var inst_25540 = cljs.core.pr_str.call(null,inst_25539);
var inst_25541 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25540)].join('');
var inst_25542 = figwheel.client.utils.log.call(null,inst_25541);
var state_25559__$1 = state_25559;
var statearr_25591_25671 = state_25559__$1;
(statearr_25591_25671[(2)] = inst_25542);

(statearr_25591_25671[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (43))){
var inst_25535 = (state_25559[(21)]);
var inst_25545 = (state_25559[(2)]);
var inst_25546 = cljs.core.not_empty.call(null,inst_25535);
var state_25559__$1 = (function (){var statearr_25592 = state_25559;
(statearr_25592[(27)] = inst_25545);

return statearr_25592;
})();
if(cljs.core.truth_(inst_25546)){
var statearr_25593_25672 = state_25559__$1;
(statearr_25593_25672[(1)] = (44));

} else {
var statearr_25594_25673 = state_25559__$1;
(statearr_25594_25673[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (29))){
var inst_25477 = (state_25559[(23)]);
var inst_25513 = (state_25559[(16)]);
var inst_25479 = (state_25559[(26)]);
var inst_25473 = (state_25559[(19)]);
var inst_25476 = (state_25559[(24)]);
var inst_25481 = (state_25559[(25)]);
var inst_25509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25512 = (function (){var all_files = inst_25473;
var res_SINGLEQUOTE_ = inst_25476;
var res = inst_25477;
var files_not_loaded = inst_25479;
var dependencies_that_loaded = inst_25481;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25513,inst_25479,inst_25473,inst_25476,inst_25481,inst_25509,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25511){
var map__25595 = p__25511;
var map__25595__$1 = ((((!((map__25595 == null)))?((((map__25595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25595):map__25595);
var namespace = cljs.core.get.call(null,map__25595__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25513,inst_25479,inst_25473,inst_25476,inst_25481,inst_25509,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25513__$1 = cljs.core.group_by.call(null,inst_25512,inst_25479);
var inst_25515 = (inst_25513__$1 == null);
var inst_25516 = cljs.core.not.call(null,inst_25515);
var state_25559__$1 = (function (){var statearr_25597 = state_25559;
(statearr_25597[(28)] = inst_25509);

(statearr_25597[(16)] = inst_25513__$1);

return statearr_25597;
})();
if(inst_25516){
var statearr_25598_25674 = state_25559__$1;
(statearr_25598_25674[(1)] = (32));

} else {
var statearr_25599_25675 = state_25559__$1;
(statearr_25599_25675[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (44))){
var inst_25535 = (state_25559[(21)]);
var inst_25548 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25535);
var inst_25549 = cljs.core.pr_str.call(null,inst_25548);
var inst_25550 = [cljs.core.str("not required: "),cljs.core.str(inst_25549)].join('');
var inst_25551 = figwheel.client.utils.log.call(null,inst_25550);
var state_25559__$1 = state_25559;
var statearr_25600_25676 = state_25559__$1;
(statearr_25600_25676[(2)] = inst_25551);

(statearr_25600_25676[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (6))){
var inst_25454 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25601_25677 = state_25559__$1;
(statearr_25601_25677[(2)] = inst_25454);

(statearr_25601_25677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (28))){
var inst_25479 = (state_25559[(26)]);
var inst_25506 = (state_25559[(2)]);
var inst_25507 = cljs.core.not_empty.call(null,inst_25479);
var state_25559__$1 = (function (){var statearr_25602 = state_25559;
(statearr_25602[(29)] = inst_25506);

return statearr_25602;
})();
if(cljs.core.truth_(inst_25507)){
var statearr_25603_25678 = state_25559__$1;
(statearr_25603_25678[(1)] = (29));

} else {
var statearr_25604_25679 = state_25559__$1;
(statearr_25604_25679[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (25))){
var inst_25477 = (state_25559[(23)]);
var inst_25493 = (state_25559[(2)]);
var inst_25494 = cljs.core.not_empty.call(null,inst_25477);
var state_25559__$1 = (function (){var statearr_25605 = state_25559;
(statearr_25605[(30)] = inst_25493);

return statearr_25605;
})();
if(cljs.core.truth_(inst_25494)){
var statearr_25606_25680 = state_25559__$1;
(statearr_25606_25680[(1)] = (26));

} else {
var statearr_25607_25681 = state_25559__$1;
(statearr_25607_25681[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (34))){
var inst_25528 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25528)){
var statearr_25608_25682 = state_25559__$1;
(statearr_25608_25682[(1)] = (38));

} else {
var statearr_25609_25683 = state_25559__$1;
(statearr_25609_25683[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (17))){
var state_25559__$1 = state_25559;
var statearr_25610_25684 = state_25559__$1;
(statearr_25610_25684[(2)] = recompile_dependents);

(statearr_25610_25684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (3))){
var state_25559__$1 = state_25559;
var statearr_25611_25685 = state_25559__$1;
(statearr_25611_25685[(2)] = null);

(statearr_25611_25685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (12))){
var inst_25450 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25612_25686 = state_25559__$1;
(statearr_25612_25686[(2)] = inst_25450);

(statearr_25612_25686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (2))){
var inst_25412 = (state_25559[(13)]);
var inst_25419 = cljs.core.seq.call(null,inst_25412);
var inst_25420 = inst_25419;
var inst_25421 = null;
var inst_25422 = (0);
var inst_25423 = (0);
var state_25559__$1 = (function (){var statearr_25613 = state_25559;
(statearr_25613[(7)] = inst_25423);

(statearr_25613[(8)] = inst_25422);

(statearr_25613[(9)] = inst_25421);

(statearr_25613[(10)] = inst_25420);

return statearr_25613;
})();
var statearr_25614_25687 = state_25559__$1;
(statearr_25614_25687[(2)] = null);

(statearr_25614_25687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (23))){
var inst_25477 = (state_25559[(23)]);
var inst_25479 = (state_25559[(26)]);
var inst_25473 = (state_25559[(19)]);
var inst_25476 = (state_25559[(24)]);
var inst_25481 = (state_25559[(25)]);
var inst_25484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25486 = (function (){var all_files = inst_25473;
var res_SINGLEQUOTE_ = inst_25476;
var res = inst_25477;
var files_not_loaded = inst_25479;
var dependencies_that_loaded = inst_25481;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25484,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25485){
var map__25615 = p__25485;
var map__25615__$1 = ((((!((map__25615 == null)))?((((map__25615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25615):map__25615);
var request_url = cljs.core.get.call(null,map__25615__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25484,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25487 = cljs.core.reverse.call(null,inst_25481);
var inst_25488 = cljs.core.map.call(null,inst_25486,inst_25487);
var inst_25489 = cljs.core.pr_str.call(null,inst_25488);
var inst_25490 = figwheel.client.utils.log.call(null,inst_25489);
var state_25559__$1 = (function (){var statearr_25617 = state_25559;
(statearr_25617[(31)] = inst_25484);

return statearr_25617;
})();
var statearr_25618_25688 = state_25559__$1;
(statearr_25618_25688[(2)] = inst_25490);

(statearr_25618_25688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (35))){
var state_25559__$1 = state_25559;
var statearr_25619_25689 = state_25559__$1;
(statearr_25619_25689[(2)] = true);

(statearr_25619_25689[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (19))){
var inst_25463 = (state_25559[(12)]);
var inst_25469 = figwheel.client.file_reloading.expand_files.call(null,inst_25463);
var state_25559__$1 = state_25559;
var statearr_25620_25690 = state_25559__$1;
(statearr_25620_25690[(2)] = inst_25469);

(statearr_25620_25690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (11))){
var state_25559__$1 = state_25559;
var statearr_25621_25691 = state_25559__$1;
(statearr_25621_25691[(2)] = null);

(statearr_25621_25691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (9))){
var inst_25452 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25622_25692 = state_25559__$1;
(statearr_25622_25692[(2)] = inst_25452);

(statearr_25622_25692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (5))){
var inst_25423 = (state_25559[(7)]);
var inst_25422 = (state_25559[(8)]);
var inst_25425 = (inst_25423 < inst_25422);
var inst_25426 = inst_25425;
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25426)){
var statearr_25623_25693 = state_25559__$1;
(statearr_25623_25693[(1)] = (7));

} else {
var statearr_25624_25694 = state_25559__$1;
(statearr_25624_25694[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (14))){
var inst_25433 = (state_25559[(22)]);
var inst_25442 = cljs.core.first.call(null,inst_25433);
var inst_25443 = figwheel.client.file_reloading.eval_body.call(null,inst_25442,opts);
var inst_25444 = cljs.core.next.call(null,inst_25433);
var inst_25420 = inst_25444;
var inst_25421 = null;
var inst_25422 = (0);
var inst_25423 = (0);
var state_25559__$1 = (function (){var statearr_25625 = state_25559;
(statearr_25625[(7)] = inst_25423);

(statearr_25625[(8)] = inst_25422);

(statearr_25625[(9)] = inst_25421);

(statearr_25625[(10)] = inst_25420);

(statearr_25625[(32)] = inst_25443);

return statearr_25625;
})();
var statearr_25626_25695 = state_25559__$1;
(statearr_25626_25695[(2)] = null);

(statearr_25626_25695[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (45))){
var state_25559__$1 = state_25559;
var statearr_25627_25696 = state_25559__$1;
(statearr_25627_25696[(2)] = null);

(statearr_25627_25696[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (26))){
var inst_25477 = (state_25559[(23)]);
var inst_25479 = (state_25559[(26)]);
var inst_25473 = (state_25559[(19)]);
var inst_25476 = (state_25559[(24)]);
var inst_25481 = (state_25559[(25)]);
var inst_25496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25498 = (function (){var all_files = inst_25473;
var res_SINGLEQUOTE_ = inst_25476;
var res = inst_25477;
var files_not_loaded = inst_25479;
var dependencies_that_loaded = inst_25481;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25496,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25497){
var map__25628 = p__25497;
var map__25628__$1 = ((((!((map__25628 == null)))?((((map__25628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25628):map__25628);
var namespace = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25496,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25499 = cljs.core.map.call(null,inst_25498,inst_25477);
var inst_25500 = cljs.core.pr_str.call(null,inst_25499);
var inst_25501 = figwheel.client.utils.log.call(null,inst_25500);
var inst_25502 = (function (){var all_files = inst_25473;
var res_SINGLEQUOTE_ = inst_25476;
var res = inst_25477;
var files_not_loaded = inst_25479;
var dependencies_that_loaded = inst_25481;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25496,inst_25498,inst_25499,inst_25500,inst_25501,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25477,inst_25479,inst_25473,inst_25476,inst_25481,inst_25496,inst_25498,inst_25499,inst_25500,inst_25501,state_val_25560,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25503 = setTimeout(inst_25502,(10));
var state_25559__$1 = (function (){var statearr_25630 = state_25559;
(statearr_25630[(33)] = inst_25501);

(statearr_25630[(34)] = inst_25496);

return statearr_25630;
})();
var statearr_25631_25697 = state_25559__$1;
(statearr_25631_25697[(2)] = inst_25503);

(statearr_25631_25697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (16))){
var state_25559__$1 = state_25559;
var statearr_25632_25698 = state_25559__$1;
(statearr_25632_25698[(2)] = reload_dependents);

(statearr_25632_25698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (38))){
var inst_25513 = (state_25559[(16)]);
var inst_25530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25513);
var state_25559__$1 = state_25559;
var statearr_25633_25699 = state_25559__$1;
(statearr_25633_25699[(2)] = inst_25530);

(statearr_25633_25699[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (30))){
var state_25559__$1 = state_25559;
var statearr_25634_25700 = state_25559__$1;
(statearr_25634_25700[(2)] = null);

(statearr_25634_25700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (10))){
var inst_25433 = (state_25559[(22)]);
var inst_25435 = cljs.core.chunked_seq_QMARK_.call(null,inst_25433);
var state_25559__$1 = state_25559;
if(inst_25435){
var statearr_25635_25701 = state_25559__$1;
(statearr_25635_25701[(1)] = (13));

} else {
var statearr_25636_25702 = state_25559__$1;
(statearr_25636_25702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (18))){
var inst_25467 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25467)){
var statearr_25637_25703 = state_25559__$1;
(statearr_25637_25703[(1)] = (19));

} else {
var statearr_25638_25704 = state_25559__$1;
(statearr_25638_25704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (42))){
var state_25559__$1 = state_25559;
var statearr_25639_25705 = state_25559__$1;
(statearr_25639_25705[(2)] = null);

(statearr_25639_25705[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (37))){
var inst_25525 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25640_25706 = state_25559__$1;
(statearr_25640_25706[(2)] = inst_25525);

(statearr_25640_25706[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (8))){
var inst_25433 = (state_25559[(22)]);
var inst_25420 = (state_25559[(10)]);
var inst_25433__$1 = cljs.core.seq.call(null,inst_25420);
var state_25559__$1 = (function (){var statearr_25641 = state_25559;
(statearr_25641[(22)] = inst_25433__$1);

return statearr_25641;
})();
if(inst_25433__$1){
var statearr_25642_25707 = state_25559__$1;
(statearr_25642_25707[(1)] = (10));

} else {
var statearr_25643_25708 = state_25559__$1;
(statearr_25643_25708[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19570__auto__,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____0 = (function (){
var statearr_25647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25647[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__);

(statearr_25647[(1)] = (1));

return statearr_25647;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____1 = (function (state_25559){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_25559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e25648){if((e25648 instanceof Object)){
var ex__19574__auto__ = e25648;
var statearr_25649_25709 = state_25559;
(statearr_25649_25709[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25710 = state_25559;
state_25559 = G__25710;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__ = function(state_25559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____1.call(this,state_25559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19637__auto__ = (function (){var statearr_25650 = f__19636__auto__.call(null);
(statearr_25650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_25650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__,map__25405,map__25405__$1,opts,before_jsload,on_jsload,reload_dependents,map__25406,map__25406__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19635__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25713,link){
var map__25716 = p__25713;
var map__25716__$1 = ((((!((map__25716 == null)))?((((map__25716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25716):map__25716);
var file = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25716,map__25716__$1,file){
return (function (p1__25711_SHARP_,p2__25712_SHARP_){
if(cljs.core._EQ_.call(null,p1__25711_SHARP_,p2__25712_SHARP_)){
return p1__25711_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25716,map__25716__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25722){
var map__25723 = p__25722;
var map__25723__$1 = ((((!((map__25723 == null)))?((((map__25723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25723):map__25723);
var match_length = cljs.core.get.call(null,map__25723__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25723__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25718_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25718_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args25725 = [];
var len__17491__auto___25728 = arguments.length;
var i__17492__auto___25729 = (0);
while(true){
if((i__17492__auto___25729 < len__17491__auto___25728)){
args25725.push((arguments[i__17492__auto___25729]));

var G__25730 = (i__17492__auto___25729 + (1));
i__17492__auto___25729 = G__25730;
continue;
} else {
}
break;
}

var G__25727 = args25725.length;
switch (G__25727) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25725.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25732_SHARP_,p2__25733_SHARP_){
return cljs.core.assoc.call(null,p1__25732_SHARP_,cljs.core.get.call(null,p2__25733_SHARP_,key),p2__25733_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25734){
var map__25737 = p__25734;
var map__25737__$1 = ((((!((map__25737 == null)))?((((map__25737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25737):map__25737);
var f_data = map__25737__$1;
var file = cljs.core.get.call(null,map__25737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25739,files_msg){
var map__25746 = p__25739;
var map__25746__$1 = ((((!((map__25746 == null)))?((((map__25746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25746):map__25746);
var opts = map__25746__$1;
var on_cssload = cljs.core.get.call(null,map__25746__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25748_25752 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25749_25753 = null;
var count__25750_25754 = (0);
var i__25751_25755 = (0);
while(true){
if((i__25751_25755 < count__25750_25754)){
var f_25756 = cljs.core._nth.call(null,chunk__25749_25753,i__25751_25755);
figwheel.client.file_reloading.reload_css_file.call(null,f_25756);

var G__25757 = seq__25748_25752;
var G__25758 = chunk__25749_25753;
var G__25759 = count__25750_25754;
var G__25760 = (i__25751_25755 + (1));
seq__25748_25752 = G__25757;
chunk__25749_25753 = G__25758;
count__25750_25754 = G__25759;
i__25751_25755 = G__25760;
continue;
} else {
var temp__4425__auto___25761 = cljs.core.seq.call(null,seq__25748_25752);
if(temp__4425__auto___25761){
var seq__25748_25762__$1 = temp__4425__auto___25761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25748_25762__$1)){
var c__17236__auto___25763 = cljs.core.chunk_first.call(null,seq__25748_25762__$1);
var G__25764 = cljs.core.chunk_rest.call(null,seq__25748_25762__$1);
var G__25765 = c__17236__auto___25763;
var G__25766 = cljs.core.count.call(null,c__17236__auto___25763);
var G__25767 = (0);
seq__25748_25752 = G__25764;
chunk__25749_25753 = G__25765;
count__25750_25754 = G__25766;
i__25751_25755 = G__25767;
continue;
} else {
var f_25768 = cljs.core.first.call(null,seq__25748_25762__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25768);

var G__25769 = cljs.core.next.call(null,seq__25748_25762__$1);
var G__25770 = null;
var G__25771 = (0);
var G__25772 = (0);
seq__25748_25752 = G__25769;
chunk__25749_25753 = G__25770;
count__25750_25754 = G__25771;
i__25751_25755 = G__25772;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25746,map__25746__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25746,map__25746__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map