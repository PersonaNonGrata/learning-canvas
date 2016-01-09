// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
canvas.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),(150),new cljs.core.Keyword(null,"y","y",-1757859776),(150),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),(250),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(650),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),(350),new cljs.core.Keyword(null,"y","y",-1757859776),(450),new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null));
canvas.core.pi_times_2 = (Math.PI * (2));
canvas.core.canvas_dom = document.getElementById("c1");
canvas.core.context = canvas.core.canvas_dom.getContext("2d");
canvas.core.inner_width = window.innerWidth;
canvas.core.inner_height = window.innerHeight;
canvas.core.canvas_dom.width = canvas.core.inner_width;
canvas.core.canvas_dom.height = canvas.core.inner_height;
canvas.core.draw_circle = (function canvas$core$draw_circle(x,y,radius,start_angle,end_angle){
canvas.core.context.beginPath();

canvas.core.context.arc(x,y,radius,start_angle,end_angle);

return canvas.core.context.stroke();
});
canvas.core.fill_circle = (function canvas$core$fill_circle(x,y,radius,start_angle,end_angle){
canvas.core.context.beginPath();

canvas.core.context.arc(x,y,radius,start_angle,end_angle);

return canvas.core.context.fill();
});
canvas.core.draw_line = (function canvas$core$draw_line(start,end){
canvas.core.context.beginPath();

canvas.core.context.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));

canvas.core.context.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end));

return canvas.core.context.stroke();
});
canvas.core.draw_BANG_ = (function canvas$core$draw_BANG_(the_state){
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,the_state));

var seq__28038 = cljs.core.seq.call(null,the_state);
var chunk__28039 = null;
var count__28040 = (0);
var i__28041 = (0);
while(true){
if((i__28041 < count__28040)){
var shape = cljs.core._nth.call(null,chunk__28039,i__28041);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__28042_28048 = cljs.core._EQ_;
var expr__28043_28049 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28042_28048.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__28043_28049))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__28042_28048.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__28043_28049))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__28042_28048.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28043_28049))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28043_28049)].join('')));
}
}
}

var G__28050 = seq__28038;
var G__28051 = chunk__28039;
var G__28052 = count__28040;
var G__28053 = (i__28041 + (1));
seq__28038 = G__28050;
chunk__28039 = G__28051;
count__28040 = G__28052;
i__28041 = G__28053;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28038);
if(temp__4425__auto__){
var seq__28038__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__28038__$1);
var G__28054 = cljs.core.chunk_rest.call(null,seq__28038__$1);
var G__28055 = c__17236__auto__;
var G__28056 = cljs.core.count.call(null,c__17236__auto__);
var G__28057 = (0);
seq__28038 = G__28054;
chunk__28039 = G__28055;
count__28040 = G__28056;
i__28041 = G__28057;
continue;
} else {
var shape = cljs.core.first.call(null,seq__28038__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__28045_28058 = cljs.core._EQ_;
var expr__28046_28059 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28045_28058.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__28046_28059))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__28045_28058.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__28046_28059))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__28045_28058.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28046_28059))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28046_28059)].join('')));
}
}
}

var G__28060 = cljs.core.next.call(null,seq__28038__$1);
var G__28061 = null;
var G__28062 = (0);
var G__28063 = (0);
seq__28038 = G__28060;
chunk__28039 = G__28061;
count__28040 = G__28062;
i__28041 = G__28063;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas.core.updater = (function canvas$core$updater(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__28065_SHARP_){
return (p1__28065_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__28064_SHARP_){
return (p1__28064_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__28069 = cljs.core._EQ_;
var expr__28070 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28069.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28070))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__28078 = cljs.core._EQ_;
var expr__28079 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28078.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28079))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0))));
} else {
var pred__28081 = cljs.core._EQ_;
var expr__28082 = direction;
if(cljs.core.truth_(pred__28081.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__28082))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__28081.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__28082))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28082)].join('')));
}
}
}
});
canvas.core.update_positions = (function canvas$core$update_positions(state){
return cljs.core.mapv.call(null,canvas.core.update_shape_position,state);
});
canvas.core.clear_BANG_ = (function canvas$core$clear_BANG_(){
return canvas.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
canvas.core.line_distance = (function canvas$core$line_distance(start,end){
var xs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start));
var ys = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));
return Math.sqrt(((xs * xs) + (ys * ys)));
});
canvas.core.update_line_delta_BANG_ = (function canvas$core$update_line_delta_BANG_(line,state){
if(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)) >= window.innerHeight)) || (true)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__28084_SHARP_){
return (- p1__28084_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.stop_BANG_ = (function canvas$core$stop_BANG_(){
cljs.core.reset_BANG_.call(null,canvas.core.state,cljs.core.PersistentVector.EMPTY);

return canvas.core.clear_BANG_.call(null);
});
canvas.core.timeout = (function canvas$core$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
canvas.core.replay_BANG_ = (function canvas$core$replay_BANG_(){
var seq__28125 = cljs.core.seq.call(null,cljs.core.deref.call(null,canvas.core.history));
var chunk__28126 = null;
var count__28127 = (0);
var i__28128 = (0);
while(true){
if((i__28128 < count__28127)){
var entry = cljs.core._nth.call(null,chunk__28126,i__28128);
var c__19563__auto___28165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28165,entry){
return (function (){
var f__19564__auto__ = (function (){var switch__19542__auto__ = ((function (seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28165,entry){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (1))){
var inst_28129 = canvas.core.timeout.call(null,(1000));
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(2),inst_28129);
} else {
if((state_val_28138 === (2))){
var inst_28131 = (state_28137[(2)]);
var inst_28132 = canvas.core.draw_BANG_.call(null,entry);
var inst_28133 = canvas.core.timeout.call(null,(1000));
var state_28137__$1 = (function (){var statearr_28139 = state_28137;
(statearr_28139[(7)] = inst_28132);

(statearr_28139[(8)] = inst_28131);

return statearr_28139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28137__$1,(3),inst_28133);
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28137__$1,inst_28135);
} else {
return null;
}
}
}
});})(seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28165,entry))
;
return ((function (seq__28125,chunk__28126,count__28127,i__28128,switch__19542__auto__,c__19563__auto___28165,entry){
return (function() {
var canvas$core$replay_BANG__$_state_machine__19543__auto__ = null;
var canvas$core$replay_BANG__$_state_machine__19543__auto____0 = (function (){
var statearr_28143 = [null,null,null,null,null,null,null,null,null];
(statearr_28143[(0)] = canvas$core$replay_BANG__$_state_machine__19543__auto__);

(statearr_28143[(1)] = (1));

return statearr_28143;
});
var canvas$core$replay_BANG__$_state_machine__19543__auto____1 = (function (state_28137){
while(true){
var ret_value__19544__auto__ = (function (){try{while(true){
var result__19545__auto__ = switch__19542__auto__.call(null,state_28137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19545__auto__;
}
break;
}
}catch (e28144){if((e28144 instanceof Object)){
var ex__19546__auto__ = e28144;
var statearr_28145_28166 = state_28137;
(statearr_28145_28166[(5)] = ex__19546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28137;
state_28137 = G__28167;
continue;
} else {
return ret_value__19544__auto__;
}
break;
}
});
canvas$core$replay_BANG__$_state_machine__19543__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return canvas$core$replay_BANG__$_state_machine__19543__auto____0.call(this);
case 1:
return canvas$core$replay_BANG__$_state_machine__19543__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas$core$replay_BANG__$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$0 = canvas$core$replay_BANG__$_state_machine__19543__auto____0;
canvas$core$replay_BANG__$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$1 = canvas$core$replay_BANG__$_state_machine__19543__auto____1;
return canvas$core$replay_BANG__$_state_machine__19543__auto__;
})()
;})(seq__28125,chunk__28126,count__28127,i__28128,switch__19542__auto__,c__19563__auto___28165,entry))
})();
var state__19565__auto__ = (function (){var statearr_28146 = f__19564__auto__.call(null);
(statearr_28146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19563__auto___28165);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19565__auto__);
});})(seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28165,entry))
);


var G__28168 = seq__28125;
var G__28169 = chunk__28126;
var G__28170 = count__28127;
var G__28171 = (i__28128 + (1));
seq__28125 = G__28168;
chunk__28126 = G__28169;
count__28127 = G__28170;
i__28128 = G__28171;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28125);
if(temp__4425__auto__){
var seq__28125__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28125__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__28125__$1);
var G__28172 = cljs.core.chunk_rest.call(null,seq__28125__$1);
var G__28173 = c__17236__auto__;
var G__28174 = cljs.core.count.call(null,c__17236__auto__);
var G__28175 = (0);
seq__28125 = G__28172;
chunk__28126 = G__28173;
count__28127 = G__28174;
i__28128 = G__28175;
continue;
} else {
var entry = cljs.core.first.call(null,seq__28125__$1);
var c__19563__auto___28176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__){
return (function (){
var f__19564__auto__ = (function (){var switch__19542__auto__ = ((function (seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (1))){
var inst_28147 = canvas.core.timeout.call(null,(1000));
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28155__$1,(2),inst_28147);
} else {
if((state_val_28156 === (2))){
var inst_28149 = (state_28155[(2)]);
var inst_28150 = canvas.core.draw_BANG_.call(null,entry);
var inst_28151 = canvas.core.timeout.call(null,(1000));
var state_28155__$1 = (function (){var statearr_28157 = state_28155;
(statearr_28157[(7)] = inst_28150);

(statearr_28157[(8)] = inst_28149);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28155__$1,(3),inst_28151);
} else {
if((state_val_28156 === (3))){
var inst_28153 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
return null;
}
}
}
});})(seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__))
;
return ((function (seq__28125,chunk__28126,count__28127,i__28128,switch__19542__auto__,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__){
return (function() {
var canvas$core$replay_BANG__$_state_machine__19543__auto__ = null;
var canvas$core$replay_BANG__$_state_machine__19543__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = canvas$core$replay_BANG__$_state_machine__19543__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var canvas$core$replay_BANG__$_state_machine__19543__auto____1 = (function (state_28155){
while(true){
var ret_value__19544__auto__ = (function (){try{while(true){
var result__19545__auto__ = switch__19542__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19545__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__19546__auto__ = e28162;
var statearr_28163_28177 = state_28155;
(statearr_28163_28177[(5)] = ex__19546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28178 = state_28155;
state_28155 = G__28178;
continue;
} else {
return ret_value__19544__auto__;
}
break;
}
});
canvas$core$replay_BANG__$_state_machine__19543__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return canvas$core$replay_BANG__$_state_machine__19543__auto____0.call(this);
case 1:
return canvas$core$replay_BANG__$_state_machine__19543__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas$core$replay_BANG__$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$0 = canvas$core$replay_BANG__$_state_machine__19543__auto____0;
canvas$core$replay_BANG__$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$1 = canvas$core$replay_BANG__$_state_machine__19543__auto____1;
return canvas$core$replay_BANG__$_state_machine__19543__auto__;
})()
;})(seq__28125,chunk__28126,count__28127,i__28128,switch__19542__auto__,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__))
})();
var state__19565__auto__ = (function (){var statearr_28164 = f__19564__auto__.call(null);
(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19563__auto___28176);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19565__auto__);
});})(seq__28125,chunk__28126,count__28127,i__28128,c__19563__auto___28176,entry,seq__28125__$1,temp__4425__auto__))
);


var G__28179 = cljs.core.next.call(null,seq__28125__$1);
var G__28180 = null;
var G__28181 = (0);
var G__28182 = (0);
seq__28125 = G__28179;
chunk__28126 = G__28180;
count__28127 = G__28181;
i__28128 = G__28182;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas.core.sr_BANG_ = (function canvas$core$sr_BANG_(){
canvas.core.stop_BANG_.call(null);

return canvas.core.replay_BANG_.call(null);
});
canvas.core.circles_colliding_QMARK_ = (function canvas$core$circles_colliding_QMARK_(c1,c2){
var dx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c2));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c2));
var dist = Math.sqrt(((dx * dx) + (dy * dy)));
return (dist < (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c1) + new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(c2)));
});
canvas.core.abs = (function canvas$core$abs(n){
var x__16764__auto__ = n;
var y__16765__auto__ = (- n);
return ((x__16764__auto__ > y__16765__auto__) ? x__16764__auto__ : y__16765__auto__);
});
canvas.core.line_direction = (function canvas$core$line_direction(line){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)))){
return new cljs.core.Keyword(null,"horizontal","horizontal",2062109475);
} else {
return new cljs.core.Keyword(null,"vertical","vertical",718696748);
}
});
canvas.core.update_circle_delta = (function canvas$core$update_circle_delta(state){
var iter__17205__auto__ = (function canvas$core$update_circle_delta_$_iter__28189(s__28190){
return (new cljs.core.LazySeq(null,(function (){
var s__28190__$1 = s__28190;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28190__$1);
if(temp__4425__auto__){
var s__28190__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28190__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__28190__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__28192 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__28191 = (0);
while(true){
if((i__28191 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__28191);
cljs.core.chunk_append.call(null,b__28192,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__28191,shape,c__17203__auto__,size__17204__auto__,b__28192,s__28190__$2,temp__4425__auto__){
return (function (p1__28183_SHARP_){
return (- p1__28183_SHARP_);
});})(i__28191,shape,c__17203__auto__,size__17204__auto__,b__28192,s__28190__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (i__28191,shape,c__17203__auto__,size__17204__auto__,b__28192,s__28190__$2,temp__4425__auto__){
return (function (p1__28184_SHARP_){
return (- p1__28184_SHARP_);
});})(i__28191,shape,c__17203__auto__,size__17204__auto__,b__28192,s__28190__$2,temp__4425__auto__))
):shape));

var G__28193 = (i__28191 + (1));
i__28191 = G__28193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28192),canvas$core$update_circle_delta_$_iter__28189.call(null,cljs.core.chunk_rest.call(null,s__28190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28192),null);
}
} else {
var shape = cljs.core.first.call(null,s__28190__$2);
return cljs.core.cons.call(null,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (shape,s__28190__$2,temp__4425__auto__){
return (function (p1__28183_SHARP_){
return (- p1__28183_SHARP_);
});})(shape,s__28190__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (shape,s__28190__$2,temp__4425__auto__){
return (function (p1__28184_SHARP_){
return (- p1__28184_SHARP_);
});})(shape,s__28190__$2,temp__4425__auto__))
):shape),canvas$core$update_circle_delta_$_iter__28189.call(null,cljs.core.rest.call(null,s__28190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17205__auto__.call(null,state);
});
canvas.core.update_shape_delta_if_out_of_bounds = (function canvas$core$update_shape_delta_if_out_of_bounds(shape){
var pred__28199 = cljs.core._EQ_;
var expr__28200 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28199.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28200))){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(0)),new cljs.core.Keyword(null,"dx","dx",-381796732),(0));
} else {
return shape;
}
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__28199,expr__28200){
return (function (p1__28194_SHARP_){
return (- p1__28194_SHARP_);
});})(pred__28199,expr__28200))
);
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__28199,expr__28200){
return (function (p1__28195_SHARP_){
return (- p1__28195_SHARP_);
});})(pred__28199,expr__28200))
);
} else {
return shape;
}
}
}
});
canvas.core.highest_x = (function canvas$core$highest_x(line){
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line)) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)))){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line));
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line));
}
});
canvas.core.lowest_x = (function canvas$core$lowest_x(line){
if((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line)) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)))){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line));
} else {
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line));
}
});
canvas.core.lowest_y = (function canvas$core$lowest_y(line){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line)) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)))){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line));
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line));
}
});
canvas.core.highest_y = (function canvas$core$highest_y(line){
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line)) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)))){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line));
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line));
}
});
canvas.core.circle_collide_with_line_QMARK_ = (function canvas$core$circle_collide_with_line_QMARK_(circle,direction,line){
var dist_start_x = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line))));
var dist_start_y = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line))));
var dist_end_y = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line))));
var dist_end_x = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line))));
var pred__28208 = cljs.core._EQ_;
var expr__28209 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(pred__28208.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28209))){
var pred__28211 = cljs.core._EQ_;
var expr__28212 = direction;
if(cljs.core.truth_(pred__28211.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__28212))){
return ((dist_start_x < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle) < canvas.core.highest_y.call(null,line))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle) > canvas.core.lowest_y.call(null,line)));
} else {
if(cljs.core.truth_(pred__28211.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__28212))){
return ((dist_start_y < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) < canvas.core.highest_x.call(null,line))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) > canvas.core.lowest_x.call(null,line)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28212)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__28208.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__28209))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28209)].join('')));
}
}
});
canvas.core.update_circle_if_collide_with_line = (function canvas$core$update_circle_if_collide_with_line(state){
var iter__17205__auto__ = (function canvas$core$update_circle_if_collide_with_line_$_iter__28232(s__28233){
return (new cljs.core.LazySeq(null,(function (){
var s__28233__$1 = s__28233;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28233__$1);
if(temp__4425__auto__){
var s__28233__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28233__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__28233__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__28235 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__28234 = (0);
while(true){
if((i__28234 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__28234);
cljs.core.chunk_append.call(null,b__28235,(function (){var pred__28242 = cljs.core._EQ_;
var expr__28243 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28242.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__28243))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__28234,pred__28242,expr__28243,shape,c__17203__auto__,size__17204__auto__,b__28235,s__28233__$2,temp__4425__auto__){
return (function (p1__28214_SHARP_){
return (- p1__28214_SHARP_);
});})(i__28234,pred__28242,expr__28243,shape,c__17203__auto__,size__17204__auto__,b__28235,s__28233__$2,temp__4425__auto__))
);
} else {
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (i__28234,pred__28242,expr__28243,shape,c__17203__auto__,size__17204__auto__,b__28235,s__28233__$2,temp__4425__auto__){
return (function (p1__28215_SHARP_){
return (- p1__28215_SHARP_);
});})(i__28234,pred__28242,expr__28243,shape,c__17203__auto__,size__17204__auto__,b__28235,s__28233__$2,temp__4425__auto__))
);
} else {
return shape;
}
}
} else {
if(cljs.core.truth_(pred__28242.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28243))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28243)].join('')));
}
}
})());

var G__28248 = (i__28234 + (1));
i__28234 = G__28248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28235),canvas$core$update_circle_if_collide_with_line_$_iter__28232.call(null,cljs.core.chunk_rest.call(null,s__28233__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28235),null);
}
} else {
var shape = cljs.core.first.call(null,s__28233__$2);
return cljs.core.cons.call(null,(function (){var pred__28245 = cljs.core._EQ_;
var expr__28246 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__28245.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__28246))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__28245,expr__28246,shape,s__28233__$2,temp__4425__auto__){
return (function (p1__28214_SHARP_){
return (- p1__28214_SHARP_);
});})(pred__28245,expr__28246,shape,s__28233__$2,temp__4425__auto__))
);
} else {
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__28245,expr__28246,shape,s__28233__$2,temp__4425__auto__){
return (function (p1__28215_SHARP_){
return (- p1__28215_SHARP_);
});})(pred__28245,expr__28246,shape,s__28233__$2,temp__4425__auto__))
);
} else {
return shape;
}
}
} else {
if(cljs.core.truth_(pred__28245.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__28246))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28246)].join('')));
}
}
})(),canvas$core$update_circle_if_collide_with_line_$_iter__28232.call(null,cljs.core.rest.call(null,s__28233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17205__auto__.call(null,state);
});
canvas.core.update_deltas = (function canvas$core$update_deltas(state){
return canvas.core.update_circle_if_collide_with_line.call(null,canvas.core.update_circle_delta.call(null,cljs.core.mapv.call(null,canvas.core.update_shape_delta_if_out_of_bounds,state)));
});
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(the_state){
if(!(cljs.core.empty_QMARK_.call(null,the_state))){
cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_deltas);

cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_positions);

canvas.core.clear_BANG_.call(null);

canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
} else {
}

return window.requestAnimationFrame((function (){
return canvas$core$render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
}));
});
canvas.core.render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
canvas.core.my_rand = (function canvas$core$my_rand(){
var pred__28252 = cljs.core._EQ_;
var expr__28253 = cljs.core.rand_int.call(null,(2));
if(cljs.core.truth_(pred__28252.call(null,(0),expr__28253))){
return cljs.core._;
} else {
if(cljs.core.truth_(pred__28252.call(null,(1),expr__28253))){
return cljs.core._PLUS_;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28253)].join('')));
}
}
});
canvas.core.add_lines_BANG_ = (function canvas$core$add_lines_BANG_(old_state,x,y){
var new_state = cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,old_state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(-5),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(-5),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null));
return cljs.core.reset_BANG_.call(null,canvas.core.state,new_state);
});
canvas.core.on_click = (function canvas$core$on_click(e){
canvas.core.add_lines_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state),event.x,event.y);

return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_click);

//# sourceMappingURL=core.js.map