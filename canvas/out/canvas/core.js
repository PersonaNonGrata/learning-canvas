// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
canvas.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(5000)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(5000)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(5000)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(800),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(800),new cljs.core.Keyword(null,"y","y",-1757859776),(5000)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null));
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

var seq__45540 = cljs.core.seq.call(null,the_state);
var chunk__45541 = null;
var count__45542 = (0);
var i__45543 = (0);
while(true){
if((i__45543 < count__45542)){
var shape = cljs.core._nth.call(null,chunk__45541,i__45543);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__45544_45550 = cljs.core._EQ_;
var expr__45545_45551 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45544_45550.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__45545_45551))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__45544_45550.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__45545_45551))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__45544_45550.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45545_45551))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45545_45551)].join('')));
}
}
}

var G__45552 = seq__45540;
var G__45553 = chunk__45541;
var G__45554 = count__45542;
var G__45555 = (i__45543 + (1));
seq__45540 = G__45552;
chunk__45541 = G__45553;
count__45542 = G__45554;
i__45543 = G__45555;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45540);
if(temp__4425__auto__){
var seq__45540__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45540__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__45540__$1);
var G__45556 = cljs.core.chunk_rest.call(null,seq__45540__$1);
var G__45557 = c__17236__auto__;
var G__45558 = cljs.core.count.call(null,c__17236__auto__);
var G__45559 = (0);
seq__45540 = G__45556;
chunk__45541 = G__45557;
count__45542 = G__45558;
i__45543 = G__45559;
continue;
} else {
var shape = cljs.core.first.call(null,seq__45540__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__45547_45560 = cljs.core._EQ_;
var expr__45548_45561 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45547_45560.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__45548_45561))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__45547_45560.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__45548_45561))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__45547_45560.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45548_45561))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45548_45561)].join('')));
}
}
}

var G__45562 = cljs.core.next.call(null,seq__45540__$1);
var G__45563 = null;
var G__45564 = (0);
var G__45565 = (0);
seq__45540 = G__45562;
chunk__45541 = G__45563;
count__45542 = G__45564;
i__45543 = G__45565;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__45567_SHARP_){
return (p1__45567_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__45566_SHARP_){
return (p1__45566_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__45571 = cljs.core._EQ_;
var expr__45572 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45571.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45572))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__45580 = cljs.core._EQ_;
var expr__45581 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45580.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45581))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0))));
} else {
var pred__45583 = cljs.core._EQ_;
var expr__45584 = direction;
if(cljs.core.truth_(pred__45583.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__45584))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__45583.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__45584))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45584)].join('')));
}
}
}
});
canvas.core.test_delta = (function canvas$core$test_delta(shape){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(0)),new cljs.core.Keyword(null,"dx","dx",-381796732),(0));
} else {
return shape;
}
});
canvas.core.update_shape_delta = (function canvas$core$update_shape_delta(shape){
var pred__45591 = cljs.core._EQ_;
var expr__45592 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45591.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45592))){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(0)),new cljs.core.Keyword(null,"dx","dx",-381796732),(0));
} else {
return shape;
}
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__45591,expr__45592){
return (function (p1__45586_SHARP_){
return (- p1__45586_SHARP_);
});})(pred__45591,expr__45592))
);
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__45591,expr__45592){
return (function (p1__45587_SHARP_){
return (- p1__45587_SHARP_);
});})(pred__45591,expr__45592))
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
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__45594_SHARP_){
return (- p1__45594_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.reset_render_BANG_ = (function canvas$core$reset_render_BANG_(old_state){
var new_state_45595 = canvas.core.update_positions.call(null,canvas.core.update_deltas.call(null,old_state));
canvas.core.clear_BANG_.call(null);

cljs.core.reset_BANG_.call(null,canvas.core.state,new_state_45595);

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
canvas.core.hoppla = (function canvas$core$hoppla(men){
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,men),(1))){
return null;
} else {
var c__19563__auto___45638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (men,c__19563__auto___45638){
return (function (){
var f__19564__auto__ = (function (){var switch__19542__auto__ = ((function (men,c__19563__auto___45638){
return (function (state_45627){
var state_val_45628 = (state_45627[(1)]);
if((state_val_45628 === (1))){
var inst_45617 = canvas.core.timeout.call(null,(1000));
var state_45627__$1 = state_45627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45627__$1,(2),inst_45617);
} else {
if((state_val_45628 === (2))){
var inst_45619 = (state_45627[(2)]);
var inst_45620 = cljs.core.first.call(null,men);
var inst_45621 = canvas.core.draw_BANG_.call(null,inst_45620);
var inst_45622 = canvas.core.timeout.call(null,(1000));
var state_45627__$1 = (function (){var statearr_45629 = state_45627;
(statearr_45629[(7)] = inst_45621);

(statearr_45629[(8)] = inst_45619);

return statearr_45629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45627__$1,(3),inst_45622);
} else {
if((state_val_45628 === (3))){
var inst_45624 = (state_45627[(2)]);
var inst_45625 = canvas.core.clear_BANG_.call(null);
var state_45627__$1 = (function (){var statearr_45630 = state_45627;
(statearr_45630[(9)] = inst_45624);

return statearr_45630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45627__$1,inst_45625);
} else {
return null;
}
}
}
});})(men,c__19563__auto___45638))
;
return ((function (men,switch__19542__auto__,c__19563__auto___45638){
return (function() {
var canvas$core$hoppla_$_state_machine__19543__auto__ = null;
var canvas$core$hoppla_$_state_machine__19543__auto____0 = (function (){
var statearr_45634 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45634[(0)] = canvas$core$hoppla_$_state_machine__19543__auto__);

(statearr_45634[(1)] = (1));

return statearr_45634;
});
var canvas$core$hoppla_$_state_machine__19543__auto____1 = (function (state_45627){
while(true){
var ret_value__19544__auto__ = (function (){try{while(true){
var result__19545__auto__ = switch__19542__auto__.call(null,state_45627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19545__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19545__auto__;
}
break;
}
}catch (e45635){if((e45635 instanceof Object)){
var ex__19546__auto__ = e45635;
var statearr_45636_45639 = state_45627;
(statearr_45636_45639[(5)] = ex__19546__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45640 = state_45627;
state_45627 = G__45640;
continue;
} else {
return ret_value__19544__auto__;
}
break;
}
});
canvas$core$hoppla_$_state_machine__19543__auto__ = function(state_45627){
switch(arguments.length){
case 0:
return canvas$core$hoppla_$_state_machine__19543__auto____0.call(this);
case 1:
return canvas$core$hoppla_$_state_machine__19543__auto____1.call(this,state_45627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas$core$hoppla_$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$0 = canvas$core$hoppla_$_state_machine__19543__auto____0;
canvas$core$hoppla_$_state_machine__19543__auto__.cljs$core$IFn$_invoke$arity$1 = canvas$core$hoppla_$_state_machine__19543__auto____1;
return canvas$core$hoppla_$_state_machine__19543__auto__;
})()
;})(men,switch__19542__auto__,c__19563__auto___45638))
})();
var state__19565__auto__ = (function (){var statearr_45637 = f__19564__auto__.call(null);
(statearr_45637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19563__auto___45638);

return statearr_45637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19565__auto__);
});})(men,c__19563__auto___45638))
);


var G__45641 = cljs.core.rest.call(null,men);
men = G__45641;
continue;
}
break;
}
});
canvas.core.foreach = (function canvas$core$foreach(f,xs){
var seq__45646 = cljs.core.seq.call(null,xs);
var chunk__45647 = null;
var count__45648 = (0);
var i__45649 = (0);
while(true){
if((i__45649 < count__45648)){
var x = cljs.core._nth.call(null,chunk__45647,i__45649);
f.call(null,x);

var G__45650 = seq__45646;
var G__45651 = chunk__45647;
var G__45652 = count__45648;
var G__45653 = (i__45649 + (1));
seq__45646 = G__45650;
chunk__45647 = G__45651;
count__45648 = G__45652;
i__45649 = G__45653;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45646);
if(temp__4425__auto__){
var seq__45646__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45646__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__45646__$1);
var G__45654 = cljs.core.chunk_rest.call(null,seq__45646__$1);
var G__45655 = c__17236__auto__;
var G__45656 = cljs.core.count.call(null,c__17236__auto__);
var G__45657 = (0);
seq__45646 = G__45654;
chunk__45647 = G__45655;
count__45648 = G__45656;
i__45649 = G__45657;
continue;
} else {
var x = cljs.core.first.call(null,seq__45646__$1);
f.call(null,x);

var G__45658 = cljs.core.next.call(null,seq__45646__$1);
var G__45659 = null;
var G__45660 = (0);
var G__45661 = (0);
seq__45646 = G__45658;
chunk__45647 = G__45659;
count__45648 = G__45660;
i__45649 = G__45661;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas.core.replay_BANG_ = (function canvas$core$replay_BANG_(){
var my = cljs.core.deref.call(null,canvas.core.history);
return canvas.core.hoppla.call(null,my);
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
var iter__17205__auto__ = (function canvas$core$update_circle_delta_$_iter__45668(s__45669){
return (new cljs.core.LazySeq(null,(function (){
var s__45669__$1 = s__45669;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45669__$1);
if(temp__4425__auto__){
var s__45669__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45669__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__45669__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__45671 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__45670 = (0);
while(true){
if((i__45670 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__45670);
cljs.core.chunk_append.call(null,b__45671,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__45670,shape,c__17203__auto__,size__17204__auto__,b__45671,s__45669__$2,temp__4425__auto__){
return (function (p1__45662_SHARP_){
return (- p1__45662_SHARP_);
});})(i__45670,shape,c__17203__auto__,size__17204__auto__,b__45671,s__45669__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (i__45670,shape,c__17203__auto__,size__17204__auto__,b__45671,s__45669__$2,temp__4425__auto__){
return (function (p1__45663_SHARP_){
return (- p1__45663_SHARP_);
});})(i__45670,shape,c__17203__auto__,size__17204__auto__,b__45671,s__45669__$2,temp__4425__auto__))
):shape));

var G__45672 = (i__45670 + (1));
i__45670 = G__45672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45671),canvas$core$update_circle_delta_$_iter__45668.call(null,cljs.core.chunk_rest.call(null,s__45669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45671),null);
}
} else {
var shape = cljs.core.first.call(null,s__45669__$2);
return cljs.core.cons.call(null,((((1) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circles_colliding_QMARK_,shape),state))))?cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (shape,s__45669__$2,temp__4425__auto__){
return (function (p1__45662_SHARP_){
return (- p1__45662_SHARP_);
});})(shape,s__45669__$2,temp__4425__auto__))
),new cljs.core.Keyword(null,"dy","dy",1719547243),((function (shape,s__45669__$2,temp__4425__auto__){
return (function (p1__45663_SHARP_){
return (- p1__45663_SHARP_);
});})(shape,s__45669__$2,temp__4425__auto__))
):shape),canvas$core$update_circle_delta_$_iter__45668.call(null,cljs.core.rest.call(null,s__45669__$2)));
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
canvas.core.circle_collide_with_line_QMARK_ = (function canvas$core$circle_collide_with_line_QMARK_(circle,line){
var dist = canvas.core.abs.call(null,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(line))));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"circle","circle",1903212362))){
return false;
} else {
return (dist < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(circle));
}
});
canvas.core.update_circle_if_collide_with_line = (function canvas$core$update_circle_if_collide_with_line(state){
var iter__17205__auto__ = (function canvas$core$update_circle_if_collide_with_line_$_iter__45690(s__45691){
return (new cljs.core.LazySeq(null,(function (){
var s__45691__$1 = s__45691;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45691__$1);
if(temp__4425__auto__){
var s__45691__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45691__$2)){
var c__17203__auto__ = cljs.core.chunk_first.call(null,s__45691__$2);
var size__17204__auto__ = cljs.core.count.call(null,c__17203__auto__);
var b__45693 = cljs.core.chunk_buffer.call(null,size__17204__auto__);
if((function (){var i__45692 = (0);
while(true){
if((i__45692 < size__17204__auto__)){
var shape = cljs.core._nth.call(null,c__17203__auto__,i__45692);
cljs.core.chunk_append.call(null,b__45693,(function (){var pred__45700 = cljs.core._EQ_;
var expr__45701 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45700.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__45701))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (i__45692,pred__45700,expr__45701,shape,c__17203__auto__,size__17204__auto__,b__45693,s__45691__$2,temp__4425__auto__){
return (function (p1__45673_SHARP_){
return (- p1__45673_SHARP_);
});})(i__45692,pred__45700,expr__45701,shape,c__17203__auto__,size__17204__auto__,b__45693,s__45691__$2,temp__4425__auto__))
);
} else {
return shape;
}
} else {
if(cljs.core.truth_(pred__45700.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45701))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45701)].join('')));
}
}
})());

var G__45706 = (i__45692 + (1));
i__45692 = G__45706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45693),canvas$core$update_circle_if_collide_with_line_$_iter__45690.call(null,cljs.core.chunk_rest.call(null,s__45691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45693),null);
}
} else {
var shape = cljs.core.first.call(null,s__45691__$2);
return cljs.core.cons.call(null,(function (){var pred__45703 = cljs.core._EQ_;
var expr__45704 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__45703.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__45704))){
if(((0) < cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,canvas.core.circle_collide_with_line_QMARK_,shape),state)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__45703,expr__45704,shape,s__45691__$2,temp__4425__auto__){
return (function (p1__45673_SHARP_){
return (- p1__45673_SHARP_);
});})(pred__45703,expr__45704,shape,s__45691__$2,temp__4425__auto__))
);
} else {
return shape;
}
} else {
if(cljs.core.truth_(pred__45703.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__45704))){
return shape;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45704)].join('')));
}
}
})(),canvas$core$update_circle_if_collide_with_line_$_iter__45690.call(null,cljs.core.rest.call(null,s__45691__$2)));
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
canvas.core.add_lines_BANG_ = (function canvas$core$add_lines_BANG_(old_state,x,y){
var new_state = cljs.core.conj.call(null,old_state,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),(20),new cljs.core.Keyword(null,"dx","dx",-381796732),(-5),new cljs.core.Keyword(null,"dy","dy",1719547243),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null));
return cljs.core.reset_BANG_.call(null,canvas.core.state,new_state);
});
canvas.core.on_clek = (function canvas$core$on_clek(e){
canvas.core.add_lines_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state),event.x,event.y);

return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);

//# sourceMappingURL=core.js.map