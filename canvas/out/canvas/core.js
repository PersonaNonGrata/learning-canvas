// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null));
canvas.core.pi_times_2 = (Math.PI * (2));
canvas.core.canvas_dom = document.getElementById("c1");
canvas.core.upper_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,canvas.core.state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,canvas.core.state))));
canvas.core.upper_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,canvas.core.state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,canvas.core.state))));
canvas.core.context = canvas.core.canvas_dom.getContext("2d");
canvas.core.inner_width = window.innerWidth;
canvas.core.inner_height = window.innerHeight;
canvas.core.canvas_dom.width = canvas.core.inner_width;
canvas.core.canvas_dom.height = canvas.core.inner_height;
canvas.core.update_lines = (function canvas$core$update_lines(state){
return state;
});
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
canvas.core.draw_BANG_ = (function canvas$core$draw_BANG_(state){
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__26409 = cljs.core.seq.call(null,state);
var chunk__26410 = null;
var count__26411 = (0);
var i__26412 = (0);
while(true){
if((i__26412 < count__26411)){
var shape = cljs.core._nth.call(null,chunk__26410,i__26412);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__26413_26419 = cljs.core._EQ_;
var expr__26414_26420 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__26413_26419.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__26414_26420))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__26413_26419.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__26414_26420))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26414_26420)].join('')));
}
}

var G__26421 = seq__26409;
var G__26422 = chunk__26410;
var G__26423 = count__26411;
var G__26424 = (i__26412 + (1));
seq__26409 = G__26421;
chunk__26410 = G__26422;
count__26411 = G__26423;
i__26412 = G__26424;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26409);
if(temp__4425__auto__){
var seq__26409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26409__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__26409__$1);
var G__26425 = cljs.core.chunk_rest.call(null,seq__26409__$1);
var G__26426 = c__17236__auto__;
var G__26427 = cljs.core.count.call(null,c__17236__auto__);
var G__26428 = (0);
seq__26409 = G__26425;
chunk__26410 = G__26426;
count__26411 = G__26427;
i__26412 = G__26428;
continue;
} else {
var shape = cljs.core.first.call(null,seq__26409__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__26416_26429 = cljs.core._EQ_;
var expr__26417_26430 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__26416_26429.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__26417_26430))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__26416_26429.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__26417_26430))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26417_26430)].join('')));
}
}

var G__26431 = cljs.core.next.call(null,seq__26409__$1);
var G__26432 = null;
var G__26433 = (0);
var G__26434 = (0);
seq__26409 = G__26431;
chunk__26410 = G__26432;
count__26411 = G__26433;
i__26412 = G__26434;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__26436_SHARP_){
return (p1__26436_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__26435_SHARP_){
return (p1__26435_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__26440 = cljs.core._EQ_;
var expr__26441 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__26440.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__26441))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__26446 = cljs.core._EQ_;
var expr__26447 = direction;
if(cljs.core.truth_(pred__26446.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__26447))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__26446.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__26447))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26447)].join('')));
}
}
});
canvas.core.update_shape_delta = (function canvas$core$update_shape_delta(shape){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__26449_SHARP_){
return (- p1__26449_SHARP_);
}));
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__26450_SHARP_){
return (- p1__26450_SHARP_);
}));
} else {
return shape;
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
canvas.core.direction_change_x = (function canvas$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__26451_SHARP_){
return (- p1__26451_SHARP_);
}));
}),state);
});
canvas.core.direction_change_y = (function canvas$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__26452_SHARP_){
return (- p1__26452_SHARP_);
}));
}),state);
});
canvas.core.line_distance = (function canvas$core$line_distance(start,end){
var xs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start));
var ys = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));
return Math.sqrt(((xs * xs) + (ys * ys)));
});
canvas.core.update_line_delta_BANG_ = (function canvas$core$update_line_delta_BANG_(line,state){
if(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)) >= window.innerHeight)) || (true)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__26453_SHARP_){
return (- p1__26453_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.update_rectangle_delta_BANG_ = (function canvas$core$update_rectangle_delta_BANG_(rect,state){
if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
cljs.core.swap_BANG_.call(null,state,canvas.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
return cljs.core.swap_BANG_.call(null,state,canvas.core.direction_change_y);
} else {
return null;
}
});
canvas.core.update_deltas_BANG_ = (function canvas$core$update_deltas_BANG_(state){
var seq__26464 = cljs.core.seq.call(null,state);
var chunk__26465 = null;
var count__26466 = (0);
var i__26467 = (0);
while(true){
if((i__26467 < count__26466)){
var shape = cljs.core._nth.call(null,chunk__26465,i__26467);
var pred__26468_26474 = cljs.core._EQ_;
var expr__26469_26475 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__26468_26474.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__26469_26475))){
canvas.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__26468_26474.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__26469_26475))){
canvas.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26469_26475)].join('')));
}
}

var G__26476 = seq__26464;
var G__26477 = chunk__26465;
var G__26478 = count__26466;
var G__26479 = (i__26467 + (1));
seq__26464 = G__26476;
chunk__26465 = G__26477;
count__26466 = G__26478;
i__26467 = G__26479;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26464);
if(temp__4425__auto__){
var seq__26464__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26464__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__26464__$1);
var G__26480 = cljs.core.chunk_rest.call(null,seq__26464__$1);
var G__26481 = c__17236__auto__;
var G__26482 = cljs.core.count.call(null,c__17236__auto__);
var G__26483 = (0);
seq__26464 = G__26480;
chunk__26465 = G__26481;
count__26466 = G__26482;
i__26467 = G__26483;
continue;
} else {
var shape = cljs.core.first.call(null,seq__26464__$1);
var pred__26471_26484 = cljs.core._EQ_;
var expr__26472_26485 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__26471_26484.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__26472_26485))){
canvas.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__26471_26484.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__26472_26485))){
canvas.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26472_26485)].join('')));
}
}

var G__26486 = cljs.core.next.call(null,seq__26464__$1);
var G__26487 = null;
var G__26488 = (0);
var G__26489 = (0);
seq__26464 = G__26486;
chunk__26465 = G__26487;
count__26466 = G__26488;
i__26467 = G__26489;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(old_state){
var new_state = canvas.core.update_positions.call(null,canvas.core.update_deltas.call(null,old_state));
canvas.core.clear_BANG_.call(null);

cljs.core.reset_BANG_.call(null,canvas.core.state,new_state);

return canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
});
window.requestAnimationFrame((function (){
return canvas.core.render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
}));
canvas.core.on_clek = (function canvas$core$on_clek(e){
console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));

return canvas.core.render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);

//# sourceMappingURL=core.js.map