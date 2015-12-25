// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23665__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23666__i = 0, G__23666__a = new Array(arguments.length -  0);
while (G__23666__i < G__23666__a.length) {G__23666__a[G__23666__i] = arguments[G__23666__i + 0]; ++G__23666__i;}
  args = new cljs.core.IndexedSeq(G__23666__a,0);
} 
return G__23665__delegate.call(this,args);};
G__23665.cljs$lang$maxFixedArity = 0;
G__23665.cljs$lang$applyTo = (function (arglist__23667){
var args = cljs.core.seq(arglist__23667);
return G__23665__delegate(args);
});
G__23665.cljs$core$IFn$_invoke$arity$variadic = G__23665__delegate;
return G__23665;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23668){
var map__23671 = p__23668;
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var message = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16452__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16440__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16440__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16440__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19635__auto___23801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___23801,ch){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___23801,ch){
return (function (state_23775){
var state_val_23776 = (state_23775[(1)]);
if((state_val_23776 === (7))){
var inst_23771 = (state_23775[(2)]);
var state_23775__$1 = state_23775;
var statearr_23777_23802 = state_23775__$1;
(statearr_23777_23802[(2)] = inst_23771);

(statearr_23777_23802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (1))){
var state_23775__$1 = state_23775;
var statearr_23778_23803 = state_23775__$1;
(statearr_23778_23803[(2)] = null);

(statearr_23778_23803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (4))){
var inst_23739 = (state_23775[(7)]);
var inst_23739__$1 = (state_23775[(2)]);
var state_23775__$1 = (function (){var statearr_23779 = state_23775;
(statearr_23779[(7)] = inst_23739__$1);

return statearr_23779;
})();
if(cljs.core.truth_(inst_23739__$1)){
var statearr_23780_23804 = state_23775__$1;
(statearr_23780_23804[(1)] = (5));

} else {
var statearr_23781_23805 = state_23775__$1;
(statearr_23781_23805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (13))){
var state_23775__$1 = state_23775;
var statearr_23782_23806 = state_23775__$1;
(statearr_23782_23806[(2)] = null);

(statearr_23782_23806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (6))){
var state_23775__$1 = state_23775;
var statearr_23783_23807 = state_23775__$1;
(statearr_23783_23807[(2)] = null);

(statearr_23783_23807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (3))){
var inst_23773 = (state_23775[(2)]);
var state_23775__$1 = state_23775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23775__$1,inst_23773);
} else {
if((state_val_23776 === (12))){
var inst_23746 = (state_23775[(8)]);
var inst_23759 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23746);
var inst_23760 = cljs.core.first.call(null,inst_23759);
var inst_23761 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23760);
var inst_23762 = console.warn("Figwheel: Not loading code with warnings - ",inst_23761);
var state_23775__$1 = state_23775;
var statearr_23784_23808 = state_23775__$1;
(statearr_23784_23808[(2)] = inst_23762);

(statearr_23784_23808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (2))){
var state_23775__$1 = state_23775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23775__$1,(4),ch);
} else {
if((state_val_23776 === (11))){
var inst_23755 = (state_23775[(2)]);
var state_23775__$1 = state_23775;
var statearr_23785_23809 = state_23775__$1;
(statearr_23785_23809[(2)] = inst_23755);

(statearr_23785_23809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (9))){
var inst_23745 = (state_23775[(9)]);
var inst_23757 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23745,opts);
var state_23775__$1 = state_23775;
if(cljs.core.truth_(inst_23757)){
var statearr_23786_23810 = state_23775__$1;
(statearr_23786_23810[(1)] = (12));

} else {
var statearr_23787_23811 = state_23775__$1;
(statearr_23787_23811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (5))){
var inst_23739 = (state_23775[(7)]);
var inst_23745 = (state_23775[(9)]);
var inst_23741 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23742 = (new cljs.core.PersistentArrayMap(null,2,inst_23741,null));
var inst_23743 = (new cljs.core.PersistentHashSet(null,inst_23742,null));
var inst_23744 = figwheel.client.focus_msgs.call(null,inst_23743,inst_23739);
var inst_23745__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23744);
var inst_23746 = cljs.core.first.call(null,inst_23744);
var inst_23747 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23745__$1,opts);
var state_23775__$1 = (function (){var statearr_23788 = state_23775;
(statearr_23788[(9)] = inst_23745__$1);

(statearr_23788[(8)] = inst_23746);

return statearr_23788;
})();
if(cljs.core.truth_(inst_23747)){
var statearr_23789_23812 = state_23775__$1;
(statearr_23789_23812[(1)] = (8));

} else {
var statearr_23790_23813 = state_23775__$1;
(statearr_23790_23813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (14))){
var inst_23765 = (state_23775[(2)]);
var state_23775__$1 = state_23775;
var statearr_23791_23814 = state_23775__$1;
(statearr_23791_23814[(2)] = inst_23765);

(statearr_23791_23814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (10))){
var inst_23767 = (state_23775[(2)]);
var state_23775__$1 = (function (){var statearr_23792 = state_23775;
(statearr_23792[(10)] = inst_23767);

return statearr_23792;
})();
var statearr_23793_23815 = state_23775__$1;
(statearr_23793_23815[(2)] = null);

(statearr_23793_23815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23776 === (8))){
var inst_23746 = (state_23775[(8)]);
var inst_23749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23750 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23746);
var inst_23751 = cljs.core.async.timeout.call(null,(1000));
var inst_23752 = [inst_23750,inst_23751];
var inst_23753 = (new cljs.core.PersistentVector(null,2,(5),inst_23749,inst_23752,null));
var state_23775__$1 = state_23775;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23775__$1,(11),inst_23753);
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
});})(c__19635__auto___23801,ch))
;
return ((function (switch__19570__auto__,c__19635__auto___23801,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____0 = (function (){
var statearr_23797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23797[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__);

(statearr_23797[(1)] = (1));

return statearr_23797;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____1 = (function (state_23775){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_23775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e23798){if((e23798 instanceof Object)){
var ex__19574__auto__ = e23798;
var statearr_23799_23816 = state_23775;
(statearr_23799_23816[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23817 = state_23775;
state_23775 = G__23817;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__ = function(state_23775){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____1.call(this,state_23775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19571__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___23801,ch))
})();
var state__19637__auto__ = (function (){var statearr_23800 = f__19636__auto__.call(null);
(statearr_23800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___23801);

return statearr_23800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___23801,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23818_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23818_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_23825 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23825){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23823 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23824 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23823,_STAR_print_newline_STAR_23824,base_path_23825){
return (function() { 
var G__23826__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23827__i = 0, G__23827__a = new Array(arguments.length -  0);
while (G__23827__i < G__23827__a.length) {G__23827__a[G__23827__i] = arguments[G__23827__i + 0]; ++G__23827__i;}
  args = new cljs.core.IndexedSeq(G__23827__a,0);
} 
return G__23826__delegate.call(this,args);};
G__23826.cljs$lang$maxFixedArity = 0;
G__23826.cljs$lang$applyTo = (function (arglist__23828){
var args = cljs.core.seq(arglist__23828);
return G__23826__delegate(args);
});
G__23826.cljs$core$IFn$_invoke$arity$variadic = G__23826__delegate;
return G__23826;
})()
;})(_STAR_print_fn_STAR_23823,_STAR_print_newline_STAR_23824,base_path_23825))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23824;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23823;
}}catch (e23822){if((e23822 instanceof Error)){
var e = e23822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23825], null));
} else {
var e = e23822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23825))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23829){
var map__23836 = p__23829;
var map__23836__$1 = ((((!((map__23836 == null)))?((((map__23836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23836):map__23836);
var opts = map__23836__$1;
var build_id = cljs.core.get.call(null,map__23836__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23836,map__23836__$1,opts,build_id){
return (function (p__23838){
var vec__23839 = p__23838;
var map__23840 = cljs.core.nth.call(null,vec__23839,(0),null);
var map__23840__$1 = ((((!((map__23840 == null)))?((((map__23840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23840):map__23840);
var msg = map__23840__$1;
var msg_name = cljs.core.get.call(null,map__23840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23839,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23839,map__23840,map__23840__$1,msg,msg_name,_,map__23836,map__23836__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23839,map__23840,map__23840__$1,msg,msg_name,_,map__23836,map__23836__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23836,map__23836__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23846){
var vec__23847 = p__23846;
var map__23848 = cljs.core.nth.call(null,vec__23847,(0),null);
var map__23848__$1 = ((((!((map__23848 == null)))?((((map__23848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23848):map__23848);
var msg = map__23848__$1;
var msg_name = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23847,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23850){
var map__23860 = p__23850;
var map__23860__$1 = ((((!((map__23860 == null)))?((((map__23860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);
var on_compile_warning = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23860,map__23860__$1,on_compile_warning,on_compile_fail){
return (function (p__23862){
var vec__23863 = p__23862;
var map__23864 = cljs.core.nth.call(null,vec__23863,(0),null);
var map__23864__$1 = ((((!((map__23864 == null)))?((((map__23864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);
var msg = map__23864__$1;
var msg_name = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23863,(1));
var pred__23866 = cljs.core._EQ_;
var expr__23867 = msg_name;
if(cljs.core.truth_(pred__23866.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23867))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23866.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23867))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23860,map__23860__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__,msg_hist,msg_names,msg){
return (function (state_24068){
var state_val_24069 = (state_24068[(1)]);
if((state_val_24069 === (7))){
var inst_24002 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24070_24111 = state_24068__$1;
(statearr_24070_24111[(2)] = inst_24002);

(statearr_24070_24111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (20))){
var inst_24030 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24030)){
var statearr_24071_24112 = state_24068__$1;
(statearr_24071_24112[(1)] = (22));

} else {
var statearr_24072_24113 = state_24068__$1;
(statearr_24072_24113[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (27))){
var inst_24042 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24043 = figwheel.client.heads_up.display_warning.call(null,inst_24042);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(30),inst_24043);
} else {
if((state_val_24069 === (1))){
var inst_23990 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_23990)){
var statearr_24073_24114 = state_24068__$1;
(statearr_24073_24114[(1)] = (2));

} else {
var statearr_24074_24115 = state_24068__$1;
(statearr_24074_24115[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (24))){
var inst_24058 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24075_24116 = state_24068__$1;
(statearr_24075_24116[(2)] = inst_24058);

(statearr_24075_24116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (4))){
var inst_24066 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24068__$1,inst_24066);
} else {
if((state_val_24069 === (15))){
var inst_24018 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24019 = figwheel.client.format_messages.call(null,inst_24018);
var inst_24020 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24021 = figwheel.client.heads_up.display_error.call(null,inst_24019,inst_24020);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(18),inst_24021);
} else {
if((state_val_24069 === (21))){
var inst_24060 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24076_24117 = state_24068__$1;
(statearr_24076_24117[(2)] = inst_24060);

(statearr_24076_24117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (31))){
var inst_24049 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(34),inst_24049);
} else {
if((state_val_24069 === (32))){
var state_24068__$1 = state_24068;
var statearr_24077_24118 = state_24068__$1;
(statearr_24077_24118[(2)] = null);

(statearr_24077_24118[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (33))){
var inst_24054 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24078_24119 = state_24068__$1;
(statearr_24078_24119[(2)] = inst_24054);

(statearr_24078_24119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (13))){
var inst_24008 = (state_24068[(2)]);
var inst_24009 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24010 = figwheel.client.format_messages.call(null,inst_24009);
var inst_24011 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24012 = figwheel.client.heads_up.display_error.call(null,inst_24010,inst_24011);
var state_24068__$1 = (function (){var statearr_24079 = state_24068;
(statearr_24079[(7)] = inst_24008);

return statearr_24079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(14),inst_24012);
} else {
if((state_val_24069 === (22))){
var inst_24032 = figwheel.client.heads_up.clear.call(null);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(25),inst_24032);
} else {
if((state_val_24069 === (29))){
var inst_24056 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24080_24120 = state_24068__$1;
(statearr_24080_24120[(2)] = inst_24056);

(statearr_24080_24120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (6))){
var inst_23998 = figwheel.client.heads_up.clear.call(null);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(9),inst_23998);
} else {
if((state_val_24069 === (28))){
var inst_24047 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24047)){
var statearr_24081_24121 = state_24068__$1;
(statearr_24081_24121[(1)] = (31));

} else {
var statearr_24082_24122 = state_24068__$1;
(statearr_24082_24122[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (25))){
var inst_24034 = (state_24068[(2)]);
var inst_24035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24036 = figwheel.client.heads_up.display_warning.call(null,inst_24035);
var state_24068__$1 = (function (){var statearr_24083 = state_24068;
(statearr_24083[(8)] = inst_24034);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(26),inst_24036);
} else {
if((state_val_24069 === (34))){
var inst_24051 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24084_24123 = state_24068__$1;
(statearr_24084_24123[(2)] = inst_24051);

(statearr_24084_24123[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (17))){
var inst_24062 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24085_24124 = state_24068__$1;
(statearr_24085_24124[(2)] = inst_24062);

(statearr_24085_24124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (3))){
var inst_24004 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24004)){
var statearr_24086_24125 = state_24068__$1;
(statearr_24086_24125[(1)] = (10));

} else {
var statearr_24087_24126 = state_24068__$1;
(statearr_24087_24126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (12))){
var inst_24064 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24088_24127 = state_24068__$1;
(statearr_24088_24127[(2)] = inst_24064);

(statearr_24088_24127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (2))){
var inst_23992 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_23992)){
var statearr_24089_24128 = state_24068__$1;
(statearr_24089_24128[(1)] = (5));

} else {
var statearr_24090_24129 = state_24068__$1;
(statearr_24090_24129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (23))){
var inst_24040 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24040)){
var statearr_24091_24130 = state_24068__$1;
(statearr_24091_24130[(1)] = (27));

} else {
var statearr_24092_24131 = state_24068__$1;
(statearr_24092_24131[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (19))){
var inst_24027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24028 = figwheel.client.heads_up.append_message.call(null,inst_24027);
var state_24068__$1 = state_24068;
var statearr_24093_24132 = state_24068__$1;
(statearr_24093_24132[(2)] = inst_24028);

(statearr_24093_24132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (11))){
var inst_24016 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24016)){
var statearr_24094_24133 = state_24068__$1;
(statearr_24094_24133[(1)] = (15));

} else {
var statearr_24095_24134 = state_24068__$1;
(statearr_24095_24134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (9))){
var inst_24000 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24096_24135 = state_24068__$1;
(statearr_24096_24135[(2)] = inst_24000);

(statearr_24096_24135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (5))){
var inst_23994 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(8),inst_23994);
} else {
if((state_val_24069 === (14))){
var inst_24014 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24097_24136 = state_24068__$1;
(statearr_24097_24136[(2)] = inst_24014);

(statearr_24097_24136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (26))){
var inst_24038 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24098_24137 = state_24068__$1;
(statearr_24098_24137[(2)] = inst_24038);

(statearr_24098_24137[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (16))){
var inst_24025 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24025)){
var statearr_24099_24138 = state_24068__$1;
(statearr_24099_24138[(1)] = (19));

} else {
var statearr_24100_24139 = state_24068__$1;
(statearr_24100_24139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (30))){
var inst_24045 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24101_24140 = state_24068__$1;
(statearr_24101_24140[(2)] = inst_24045);

(statearr_24101_24140[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (10))){
var inst_24006 = figwheel.client.heads_up.clear.call(null);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24068__$1,(13),inst_24006);
} else {
if((state_val_24069 === (18))){
var inst_24023 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24102_24141 = state_24068__$1;
(statearr_24102_24141[(2)] = inst_24023);

(statearr_24102_24141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (8))){
var inst_23996 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24103_24142 = state_24068__$1;
(statearr_24103_24142[(2)] = inst_23996);

(statearr_24103_24142[(1)] = (7));


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
});})(c__19635__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19570__auto__,c__19635__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____0 = (function (){
var statearr_24107 = [null,null,null,null,null,null,null,null,null];
(statearr_24107[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__);

(statearr_24107[(1)] = (1));

return statearr_24107;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____1 = (function (state_24068){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_24068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e24108){if((e24108 instanceof Object)){
var ex__19574__auto__ = e24108;
var statearr_24109_24143 = state_24068;
(statearr_24109_24143[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24144 = state_24068;
state_24068 = G__24144;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__ = function(state_24068){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____1.call(this,state_24068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__,msg_hist,msg_names,msg))
})();
var state__19637__auto__ = (function (){var statearr_24110 = f__19636__auto__.call(null);
(statearr_24110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_24110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__,msg_hist,msg_names,msg))
);

return c__19635__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19635__auto___24207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___24207,ch){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___24207,ch){
return (function (state_24190){
var state_val_24191 = (state_24190[(1)]);
if((state_val_24191 === (1))){
var state_24190__$1 = state_24190;
var statearr_24192_24208 = state_24190__$1;
(statearr_24192_24208[(2)] = null);

(statearr_24192_24208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (2))){
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(4),ch);
} else {
if((state_val_24191 === (3))){
var inst_24188 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24190__$1,inst_24188);
} else {
if((state_val_24191 === (4))){
var inst_24178 = (state_24190[(7)]);
var inst_24178__$1 = (state_24190[(2)]);
var state_24190__$1 = (function (){var statearr_24193 = state_24190;
(statearr_24193[(7)] = inst_24178__$1);

return statearr_24193;
})();
if(cljs.core.truth_(inst_24178__$1)){
var statearr_24194_24209 = state_24190__$1;
(statearr_24194_24209[(1)] = (5));

} else {
var statearr_24195_24210 = state_24190__$1;
(statearr_24195_24210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (5))){
var inst_24178 = (state_24190[(7)]);
var inst_24180 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24178);
var state_24190__$1 = state_24190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24190__$1,(8),inst_24180);
} else {
if((state_val_24191 === (6))){
var state_24190__$1 = state_24190;
var statearr_24196_24211 = state_24190__$1;
(statearr_24196_24211[(2)] = null);

(statearr_24196_24211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (7))){
var inst_24186 = (state_24190[(2)]);
var state_24190__$1 = state_24190;
var statearr_24197_24212 = state_24190__$1;
(statearr_24197_24212[(2)] = inst_24186);

(statearr_24197_24212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24191 === (8))){
var inst_24182 = (state_24190[(2)]);
var state_24190__$1 = (function (){var statearr_24198 = state_24190;
(statearr_24198[(8)] = inst_24182);

return statearr_24198;
})();
var statearr_24199_24213 = state_24190__$1;
(statearr_24199_24213[(2)] = null);

(statearr_24199_24213[(1)] = (2));


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
});})(c__19635__auto___24207,ch))
;
return ((function (switch__19570__auto__,c__19635__auto___24207,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19571__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19571__auto____0 = (function (){
var statearr_24203 = [null,null,null,null,null,null,null,null,null];
(statearr_24203[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19571__auto__);

(statearr_24203[(1)] = (1));

return statearr_24203;
});
var figwheel$client$heads_up_plugin_$_state_machine__19571__auto____1 = (function (state_24190){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_24190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e24204){if((e24204 instanceof Object)){
var ex__19574__auto__ = e24204;
var statearr_24205_24214 = state_24190;
(statearr_24205_24214[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24215 = state_24190;
state_24190 = G__24215;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19571__auto__ = function(state_24190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19571__auto____1.call(this,state_24190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19571__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19571__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___24207,ch))
})();
var state__19637__auto__ = (function (){var statearr_24206 = f__19636__auto__.call(null);
(statearr_24206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___24207);

return statearr_24206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___24207,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__){
return (function (state_24236){
var state_val_24237 = (state_24236[(1)]);
if((state_val_24237 === (1))){
var inst_24231 = cljs.core.async.timeout.call(null,(3000));
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(2),inst_24231);
} else {
if((state_val_24237 === (2))){
var inst_24233 = (state_24236[(2)]);
var inst_24234 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24236__$1 = (function (){var statearr_24238 = state_24236;
(statearr_24238[(7)] = inst_24233);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24236__$1,inst_24234);
} else {
return null;
}
}
});})(c__19635__auto__))
;
return ((function (switch__19570__auto__,c__19635__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____0 = (function (){
var statearr_24242 = [null,null,null,null,null,null,null,null];
(statearr_24242[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__);

(statearr_24242[(1)] = (1));

return statearr_24242;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____1 = (function (state_24236){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_24236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e24243){if((e24243 instanceof Object)){
var ex__19574__auto__ = e24243;
var statearr_24244_24246 = state_24236;
(statearr_24244_24246[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24247 = state_24236;
state_24236 = G__24247;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19571__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__))
})();
var state__19637__auto__ = (function (){var statearr_24245 = f__19636__auto__.call(null);
(statearr_24245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_24245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__))
);

return c__19635__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24248){
var map__24255 = p__24248;
var map__24255__$1 = ((((!((map__24255 == null)))?((((map__24255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24255):map__24255);
var ed = map__24255__$1;
var formatted_exception = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24255__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24257_24261 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24258_24262 = null;
var count__24259_24263 = (0);
var i__24260_24264 = (0);
while(true){
if((i__24260_24264 < count__24259_24263)){
var msg_24265 = cljs.core._nth.call(null,chunk__24258_24262,i__24260_24264);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24265);

var G__24266 = seq__24257_24261;
var G__24267 = chunk__24258_24262;
var G__24268 = count__24259_24263;
var G__24269 = (i__24260_24264 + (1));
seq__24257_24261 = G__24266;
chunk__24258_24262 = G__24267;
count__24259_24263 = G__24268;
i__24260_24264 = G__24269;
continue;
} else {
var temp__4425__auto___24270 = cljs.core.seq.call(null,seq__24257_24261);
if(temp__4425__auto___24270){
var seq__24257_24271__$1 = temp__4425__auto___24270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24257_24271__$1)){
var c__17236__auto___24272 = cljs.core.chunk_first.call(null,seq__24257_24271__$1);
var G__24273 = cljs.core.chunk_rest.call(null,seq__24257_24271__$1);
var G__24274 = c__17236__auto___24272;
var G__24275 = cljs.core.count.call(null,c__17236__auto___24272);
var G__24276 = (0);
seq__24257_24261 = G__24273;
chunk__24258_24262 = G__24274;
count__24259_24263 = G__24275;
i__24260_24264 = G__24276;
continue;
} else {
var msg_24277 = cljs.core.first.call(null,seq__24257_24271__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24277);

var G__24278 = cljs.core.next.call(null,seq__24257_24271__$1);
var G__24279 = null;
var G__24280 = (0);
var G__24281 = (0);
seq__24257_24261 = G__24278;
chunk__24258_24262 = G__24279;
count__24259_24263 = G__24280;
i__24260_24264 = G__24281;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24282){
var map__24285 = p__24282;
var map__24285__$1 = ((((!((map__24285 == null)))?((((map__24285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24285):map__24285);
var w = map__24285__$1;
var message = cljs.core.get.call(null,map__24285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16440__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16440__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16440__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24293 = cljs.core.seq.call(null,plugins);
var chunk__24294 = null;
var count__24295 = (0);
var i__24296 = (0);
while(true){
if((i__24296 < count__24295)){
var vec__24297 = cljs.core._nth.call(null,chunk__24294,i__24296);
var k = cljs.core.nth.call(null,vec__24297,(0),null);
var plugin = cljs.core.nth.call(null,vec__24297,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24299 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24293,chunk__24294,count__24295,i__24296,pl_24299,vec__24297,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24299.call(null,msg_hist);
});})(seq__24293,chunk__24294,count__24295,i__24296,pl_24299,vec__24297,k,plugin))
);
} else {
}

var G__24300 = seq__24293;
var G__24301 = chunk__24294;
var G__24302 = count__24295;
var G__24303 = (i__24296 + (1));
seq__24293 = G__24300;
chunk__24294 = G__24301;
count__24295 = G__24302;
i__24296 = G__24303;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24293);
if(temp__4425__auto__){
var seq__24293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24293__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__24293__$1);
var G__24304 = cljs.core.chunk_rest.call(null,seq__24293__$1);
var G__24305 = c__17236__auto__;
var G__24306 = cljs.core.count.call(null,c__17236__auto__);
var G__24307 = (0);
seq__24293 = G__24304;
chunk__24294 = G__24305;
count__24295 = G__24306;
i__24296 = G__24307;
continue;
} else {
var vec__24298 = cljs.core.first.call(null,seq__24293__$1);
var k = cljs.core.nth.call(null,vec__24298,(0),null);
var plugin = cljs.core.nth.call(null,vec__24298,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24308 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24293,chunk__24294,count__24295,i__24296,pl_24308,vec__24298,k,plugin,seq__24293__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24308.call(null,msg_hist);
});})(seq__24293,chunk__24294,count__24295,i__24296,pl_24308,vec__24298,k,plugin,seq__24293__$1,temp__4425__auto__))
);
} else {
}

var G__24309 = cljs.core.next.call(null,seq__24293__$1);
var G__24310 = null;
var G__24311 = (0);
var G__24312 = (0);
seq__24293 = G__24309;
chunk__24294 = G__24310;
count__24295 = G__24311;
i__24296 = G__24312;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args24313 = [];
var len__17491__auto___24316 = arguments.length;
var i__17492__auto___24317 = (0);
while(true){
if((i__17492__auto___24317 < len__17491__auto___24316)){
args24313.push((arguments[i__17492__auto___24317]));

var G__24318 = (i__17492__auto___24317 + (1));
i__17492__auto___24317 = G__24318;
continue;
} else {
}
break;
}

var G__24315 = args24313.length;
switch (G__24315) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24313.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17498__auto__ = [];
var len__17491__auto___24324 = arguments.length;
var i__17492__auto___24325 = (0);
while(true){
if((i__17492__auto___24325 < len__17491__auto___24324)){
args__17498__auto__.push((arguments[i__17492__auto___24325]));

var G__24326 = (i__17492__auto___24325 + (1));
i__17492__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var argseq__17499__auto__ = ((((0) < args__17498__auto__.length))?(new cljs.core.IndexedSeq(args__17498__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17499__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24321){
var map__24322 = p__24321;
var map__24322__$1 = ((((!((map__24322 == null)))?((((map__24322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24322):map__24322);
var opts = map__24322__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24320){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24320));
});

//# sourceMappingURL=client.js.map