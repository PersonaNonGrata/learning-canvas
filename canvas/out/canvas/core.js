// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
canvas.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5000),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5000),new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5000),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5000),new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(700)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5000),new cljs.core.Keyword(null,"y","y",-1757859776),(700)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null));
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

var seq__33141 = cljs.core.seq.call(null,the_state);
var chunk__33142 = null;
var count__33143 = (0);
var i__33144 = (0);
while(true){
if((i__33144 < count__33143)){
var shape = cljs.core._nth.call(null,chunk__33142,i__33144);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__33145_33151 = cljs.core._EQ_;
var expr__33146_33152 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33145_33151.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__33146_33152))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__33145_33151.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33146_33152))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__33145_33151.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33146_33152))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33146_33152)].join('')));
}
}
}

var G__33153 = seq__33141;
var G__33154 = chunk__33142;
var G__33155 = count__33143;
var G__33156 = (i__33144 + (1));
seq__33141 = G__33153;
chunk__33142 = G__33154;
count__33143 = G__33155;
i__33144 = G__33156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33141);
if(temp__4425__auto__){
var seq__33141__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33141__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__33141__$1);
var G__33157 = cljs.core.chunk_rest.call(null,seq__33141__$1);
var G__33158 = c__17236__auto__;
var G__33159 = cljs.core.count.call(null,c__17236__auto__);
var G__33160 = (0);
seq__33141 = G__33157;
chunk__33142 = G__33158;
count__33143 = G__33159;
i__33144 = G__33160;
continue;
} else {
var shape = cljs.core.first.call(null,seq__33141__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__33148_33161 = cljs.core._EQ_;
var expr__33149_33162 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33148_33161.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__33149_33162))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__33148_33161.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33149_33162))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__33148_33161.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33149_33162))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33149_33162)].join('')));
}
}
}

var G__33163 = cljs.core.next.call(null,seq__33141__$1);
var G__33164 = null;
var G__33165 = (0);
var G__33166 = (0);
seq__33141 = G__33163;
chunk__33142 = G__33164;
count__33143 = G__33165;
i__33144 = G__33166;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__33168_SHARP_){
return (p1__33168_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__33167_SHARP_){
return (p1__33167_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__33172 = cljs.core._EQ_;
var expr__33173 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33172.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33173))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__33181 = cljs.core._EQ_;
var expr__33182 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33181.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33182))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0))));
} else {
var pred__33184 = cljs.core._EQ_;
var expr__33185 = direction;
if(cljs.core.truth_(pred__33184.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__33185))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__33184.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__33185))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33185)].join('')));
}
}
}
});
canvas.core.update_shape_delta = (function canvas$core$update_shape_delta(shape){
var pred__33192 = cljs.core._EQ_;
var expr__33193 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33192.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33193))){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(0)),new cljs.core.Keyword(null,"dx","dx",-381796732),(0));
} else {
return shape;
}
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__33192,expr__33193){
return (function (p1__33187_SHARP_){
return (- p1__33187_SHARP_);
});})(pred__33192,expr__33193))
);
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__33192,expr__33193){
return (function (p1__33188_SHARP_){
return (- p1__33188_SHARP_);
});})(pred__33192,expr__33193))
);
} else {
return shape;
}
}
}
});
canvas.core.update_deltas = (function canvas$core$update_deltas(state){
return cljs.core.mapv.call(null,canvas.core.update_shape_delta,state);
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
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__33195_SHARP_){
return (- p1__33195_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.reset_render_BANG_ = (function canvas$core$reset_render_BANG_(old_state){
var new_state_33196 = canvas.core.update_positions.call(null,canvas.core.update_deltas.call(null,old_state));
canvas.core.clear_BANG_.call(null);

cljs.core.reset_BANG_.call(null,canvas.core.state,new_state_33196);

canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));

return window.requestAnimationFrame((function (){
return canvas$core$reset_render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
}));
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
var seq__33237 = cljs.core.seq.call(null,cljs.core.deref.call(null,canvas.core.history));
var chunk__33238 = null;
var count__33239 = (0);
var i__33240 = (0);
while(true){
if((i__33240 < count__33239)){
var entry = cljs.core._nth.call(null,chunk__33238,i__33240);
var c__19564__auto___33277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33277,entry){
return (function (){
var f__19565__auto__ = (function (){var switch__19543__auto__ = ((function (seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33277,entry){
return (function (state_33249){
var state_val_33250 = (state_33249[(1)]);
if((state_val_33250 === (1))){
var inst_33241 = canvas.core.timeout.call(null,(1000));
var state_33249__$1 = state_33249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33249__$1,(2),inst_33241);
} else {
if((state_val_33250 === (2))){
var inst_33243 = (state_33249[(2)]);
var inst_33244 = canvas.core.draw_BANG_.call(null,entry);
var inst_33245 = canvas.core.timeout.call(null,(1000));
var state_33249__$1 = (function (){var statearr_33251 = state_33249;
(statearr_33251[(7)] = inst_33243);

(statearr_33251[(8)] = inst_33244);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33249__$1,(3),inst_33245);
} else {
if((state_val_33250 === (3))){
var inst_33247 = (state_33249[(2)]);
var state_33249__$1 = state_33249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33249__$1,inst_33247);
} else {
return null;
}
}
}
});})(seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33277,entry))
;
return ((function (seq__33237,chunk__33238,count__33239,i__33240,switch__19543__auto__,c__19564__auto___33277,entry){
return (function() {
var canvas$core$replay_BANG__$_state_machine__19544__auto__ = null;
var canvas$core$replay_BANG__$_state_machine__19544__auto____0 = (function (){
var statearr_33255 = [null,null,null,null,null,null,null,null,null];
(statearr_33255[(0)] = canvas$core$replay_BANG__$_state_machine__19544__auto__);

(statearr_33255[(1)] = (1));

return statearr_33255;
});
var canvas$core$replay_BANG__$_state_machine__19544__auto____1 = (function (state_33249){
while(true){
var ret_value__19545__auto__ = (function (){try{while(true){
var result__19546__auto__ = switch__19543__auto__.call(null,state_33249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19546__auto__;
}
break;
}
}catch (e33256){if((e33256 instanceof Object)){
var ex__19547__auto__ = e33256;
var statearr_33257_33278 = state_33249;
(statearr_33257_33278[(5)] = ex__19547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33279 = state_33249;
state_33249 = G__33279;
continue;
} else {
return ret_value__19545__auto__;
}
break;
}
});
canvas$core$replay_BANG__$_state_machine__19544__auto__ = function(state_33249){
switch(arguments.length){
case 0:
return canvas$core$replay_BANG__$_state_machine__19544__auto____0.call(this);
case 1:
return canvas$core$replay_BANG__$_state_machine__19544__auto____1.call(this,state_33249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas$core$replay_BANG__$_state_machine__19544__auto__.cljs$core$IFn$_invoke$arity$0 = canvas$core$replay_BANG__$_state_machine__19544__auto____0;
canvas$core$replay_BANG__$_state_machine__19544__auto__.cljs$core$IFn$_invoke$arity$1 = canvas$core$replay_BANG__$_state_machine__19544__auto____1;
return canvas$core$replay_BANG__$_state_machine__19544__auto__;
})()
;})(seq__33237,chunk__33238,count__33239,i__33240,switch__19543__auto__,c__19564__auto___33277,entry))
})();
var state__19566__auto__ = (function (){var statearr_33258 = f__19565__auto__.call(null);
(statearr_33258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19564__auto___33277);

return statearr_33258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19566__auto__);
});})(seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33277,entry))
);


var G__33280 = seq__33237;
var G__33281 = chunk__33238;
var G__33282 = count__33239;
var G__33283 = (i__33240 + (1));
seq__33237 = G__33280;
chunk__33238 = G__33281;
count__33239 = G__33282;
i__33240 = G__33283;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33237);
if(temp__4425__auto__){
var seq__33237__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33237__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__33237__$1);
var G__33284 = cljs.core.chunk_rest.call(null,seq__33237__$1);
var G__33285 = c__17236__auto__;
var G__33286 = cljs.core.count.call(null,c__17236__auto__);
var G__33287 = (0);
seq__33237 = G__33284;
chunk__33238 = G__33285;
count__33239 = G__33286;
i__33240 = G__33287;
continue;
} else {
var entry = cljs.core.first.call(null,seq__33237__$1);
var c__19564__auto___33288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__){
return (function (){
var f__19565__auto__ = (function (){var switch__19543__auto__ = ((function (seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (1))){
var inst_33259 = canvas.core.timeout.call(null,(1000));
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(2),inst_33259);
} else {
if((state_val_33268 === (2))){
var inst_33261 = (state_33267[(2)]);
var inst_33262 = canvas.core.draw_BANG_.call(null,entry);
var inst_33263 = canvas.core.timeout.call(null,(1000));
var state_33267__$1 = (function (){var statearr_33269 = state_33267;
(statearr_33269[(7)] = inst_33262);

(statearr_33269[(8)] = inst_33261);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(3),inst_33263);
} else {
if((state_val_33268 === (3))){
var inst_33265 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33267__$1,inst_33265);
} else {
return null;
}
}
}
});})(seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__))
;
return ((function (seq__33237,chunk__33238,count__33239,i__33240,switch__19543__auto__,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__){
return (function() {
var canvas$core$replay_BANG__$_state_machine__19544__auto__ = null;
var canvas$core$replay_BANG__$_state_machine__19544__auto____0 = (function (){
var statearr_33273 = [null,null,null,null,null,null,null,null,null];
(statearr_33273[(0)] = canvas$core$replay_BANG__$_state_machine__19544__auto__);

(statearr_33273[(1)] = (1));

return statearr_33273;
});
var canvas$core$replay_BANG__$_state_machine__19544__auto____1 = (function (state_33267){
while(true){
var ret_value__19545__auto__ = (function (){try{while(true){
var result__19546__auto__ = switch__19543__auto__.call(null,state_33267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19546__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19546__auto__;
}
break;
}
}catch (e33274){if((e33274 instanceof Object)){
var ex__19547__auto__ = e33274;
var statearr_33275_33289 = state_33267;
(statearr_33275_33289[(5)] = ex__19547__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33290 = state_33267;
state_33267 = G__33290;
continue;
} else {
return ret_value__19545__auto__;
}
break;
}
});
canvas$core$replay_BANG__$_state_machine__19544__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return canvas$core$replay_BANG__$_state_machine__19544__auto____0.call(this);
case 1:
return canvas$core$replay_BANG__$_state_machine__19544__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas$core$replay_BANG__$_state_machine__19544__auto__.cljs$core$IFn$_invoke$arity$0 = canvas$core$replay_BANG__$_state_machine__19544__auto____0;
canvas$core$replay_BANG__$_state_machine__19544__auto__.cljs$core$IFn$_invoke$arity$1 = canvas$core$replay_BANG__$_state_machine__19544__auto____1;
return canvas$core$replay_BANG__$_state_machine__19544__auto__;
})()
;})(seq__33237,chunk__33238,count__33239,i__33240,switch__19543__auto__,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__))
})();
var state__19566__auto__ = (function (){var statearr_33276 = f__19565__auto__.call(null);
(statearr_33276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19564__auto___33288);

return statearr_33276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19566__auto__);
});})(seq__33237,chunk__33238,count__33239,i__33240,c__19564__auto___33288,entry,seq__33237__$1,temp__4425__auto__))
);


var G__33291 = cljs.core.next.call(null,seq__33237__$1);
var G__33292 = null;
var G__33293 = (0);
var G__33294 = (0);
seq__33237 = G__33291;
chunk__33238 = G__33292;
count__33239 = G__33293;
i__33240 = G__33294;
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
canvas.core.update_circle_delta = (function canvas$core$update_circle_delta(state){
var iter__17205__auto__ = (function canvas$core$update_circle_delta_$_iter__33301(s__33302){
return (new cljs.core.LazySeq(null,(function (){
var s__33302__$1 = s__33302;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33302__$1);
if(temp__4425__auto__){
var s__33302__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33302__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__33302__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__33304 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__33303 = (0);
while(true){
if((i__33303 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__33303);
cljs.core.chunk_append.call(null,b__33304,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__33303,shape,c__17203__auto__,size__17204__auto__,b__33304,s__33302__$2,temp__4425__auto__){
return (function (p1__33295_SHARP_){
return (- p1__33295_SHARP_);
});})(i__33303,shape,c__17203__auto__,size__17204__auto__,b__33304,s__33302__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (i__33303,shape,c__17203__auto__,size__17204__auto__,b__33304,s__33302__$2,temp__4425__auto__){
return (function (p1__33296_SHARP_){
return (- p1__33296_SHARP_);
});})(i__33303,shape,c__17203__auto__,size__17204__auto__,b__33304,s__33302__$2,temp__4425__auto__))
):shape));

var G__33305 = (i__33303 + (1));
i__33303 = G__33305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33304),canvas$core$update_circle_delta_$_iter__33301.call(null,cljs.core.chunk_rest.call(null,s__33302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33304),null);
}
} else {
var shape = cljs.core.first.call(null,s__33302__$2);
return cljs.core.cons.call(null,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (shape,s__33302__$2,temp__4425__auto__){
return (function (p1__33295_SHARP_){
return (- p1__33295_SHARP_);
});})(shape,s__33302__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (shape,s__33302__$2,temp__4425__auto__){
return (function (p1__33296_SHARP_){
return (- p1__33296_SHARP_);
});})(shape,s__33302__$2,temp__4425__auto__))
):shape),canvas$core$update_circle_delta_$_iter__33301.call(null,cljs.core.rest.call(null,s__33302__$2)));
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
canvas.core.circle_collide_with_line_QMARK_ = (function canvas$core$circle_collide_with_line_QMARK_(circle,direction,line){
var dist_x = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line))));
var dist_y = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line))));
var pred__33312 = cljs.core._EQ_;
var expr__33313 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(line);
if(cljs.core.truth_(pred__33312.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33313))){
var pred__33315 = cljs.core._EQ_;
var expr__33316 = direction;
if(cljs.core.truth_(pred__33315.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__33316))){
return (dist_x < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle));
} else {
if(cljs.core.truth_(pred__33315.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__33316))){
return (dist_y < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33316)].join('')));
}
}
} else {
if(cljs.core.truth_(pred__33312.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33313))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33313)].join('')));
}
}
});
canvas.core.update_circle_if_collide_with_line = (function canvas$core$update_circle_if_collide_with_line(state){
var iter__17205__auto__ = (function canvas$core$update_circle_if_collide_with_line_$_iter__33336(s__33337){
return (new cljs.core.LazySeq(null,(function (){
var s__33337__$1 = s__33337;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33337__$1);
if(temp__4425__auto__){
var s__33337__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33337__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__33337__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__33339 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__33338 = (0);
while(true){
if((i__33338 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__33338);
cljs.core.chunk_append.call(null,b__33339,(function (){var pred__33346 = cljs.core._EQ_;
var expr__33347 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33346.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33347))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__33338,pred__33346,expr__33347,shape,c__17203__auto__,size__17204__auto__,b__33339,s__33337__$2,temp__4425__auto__){
return (function (p1__33318_SHARP_){
return (- p1__33318_SHARP_);
});})(i__33338,pred__33346,expr__33347,shape,c__17203__auto__,size__17204__auto__,b__33339,s__33337__$2,temp__4425__auto__))
);
} else {
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (i__33338,pred__33346,expr__33347,shape,c__17203__auto__,size__17204__auto__,b__33339,s__33337__$2,temp__4425__auto__){
return (function (p1__33319_SHARP_){
return (- p1__33319_SHARP_);
});})(i__33338,pred__33346,expr__33347,shape,c__17203__auto__,size__17204__auto__,b__33339,s__33337__$2,temp__4425__auto__))
);
} else {
return shape;
}
}
} else {
if(cljs.core.truth_(pred__33346.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33347))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33347)].join('')));
}
}
})());

var G__33352 = (i__33338 + (1));
i__33338 = G__33352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),canvas$core$update_circle_if_collide_with_line_$_iter__33336.call(null,cljs.core.chunk_rest.call(null,s__33337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),null);
}
} else {
var shape = cljs.core.first.call(null,s__33337__$2);
return cljs.core.cons.call(null,(function (){var pred__33349 = cljs.core._EQ_;
var expr__33350 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33349.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33350))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__33349,expr__33350,shape,s__33337__$2,temp__4425__auto__){
return (function (p1__33318_SHARP_){
return (- p1__33318_SHARP_);
});})(pred__33349,expr__33350,shape,s__33337__$2,temp__4425__auto__))
);
} else {
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__33349,expr__33350,shape,s__33337__$2,temp__4425__auto__){
return (function (p1__33319_SHARP_){
return (- p1__33319_SHARP_);
});})(pred__33349,expr__33350,shape,s__33337__$2,temp__4425__auto__))
);
} else {
return shape;
}
}
} else {
if(cljs.core.truth_(pred__33349.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33350))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33350)].join('')));
}
}
})(),canvas$core$update_circle_if_collide_with_line_$_iter__33336.call(null,cljs.core.rest.call(null,s__33337__$2)));
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
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(the_state){
if(!(cljs.core.empty_QMARK_.call(null,the_state))){
cljs.core.swap_BANG_.call(null,canvas.core.history,cljs.core.conj,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.deref.call(null,canvas.core.state)));

cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_deltas);

cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_positions);

cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_circle_delta);

cljs.core.swap_BANG_.call(null,canvas.core.state,canvas.core.update_circle_if_collide_with_line);

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
var pred__33356 = cljs.core._EQ_;
var expr__33357 = cljs.core.rand_int.call(null,(2));
if(cljs.core.truth_(pred__33356.call(null,(0),expr__33357))){
return cljs.core._;
} else {
if(cljs.core.truth_(pred__33356.call(null,(1),expr__33357))){
return cljs.core._PLUS_;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33357)].join('')));
}
}
});
canvas.core.add_lines_BANG_ = (function canvas$core$add_lines_BANG_(old_state,x,y){
var new_state = cljs.core.conj.call(null,old_state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),(10),new cljs.core.Keyword(null,"dx","dx",-381796732),canvas.core.my_rand.call(null).call(null,cljs.core.rand_int.call(null,(5)),cljs.core.rand_int.call(null,(5))),new cljs.core.Keyword(null,"dy","dy",1719547243),canvas.core.my_rand.call(null).call(null,cljs.core.rand_int.call(null,(5)),cljs.core.rand_int.call(null,(5))),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null));
return cljs.core.reset_BANG_.call(null,canvas.core.state,new_state);
});
canvas.core.on_clek = (function canvas$core$on_clek(e){
canvas.core.add_lines_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state),event.x,event.y);

return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);

//# sourceMappingURL=core.js.map