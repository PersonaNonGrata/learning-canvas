// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(5),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null));
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

var seq__21052 = cljs.core.seq.call(null,state);
var chunk__21053 = null;
var count__21054 = (0);
var i__21055 = (0);
while(true){
if((i__21055 < count__21054)){
var shape = cljs.core._nth.call(null,chunk__21053,i__21055);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__21056_21062 = cljs.core._EQ_;
var expr__21057_21063 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__21056_21062.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__21057_21063))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__21056_21062.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__21057_21063))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21057_21063)].join('')));
}
}

var G__21064 = seq__21052;
var G__21065 = chunk__21053;
var G__21066 = count__21054;
var G__21067 = (i__21055 + (1));
seq__21052 = G__21064;
chunk__21053 = G__21065;
count__21054 = G__21066;
i__21055 = G__21067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21052);
if(temp__4425__auto__){
var seq__21052__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21052__$1)){
var c__17237__auto__ = cljs.core.chunk_first.call(null,seq__21052__$1);
var G__21068 = cljs.core.chunk_rest.call(null,seq__21052__$1);
var G__21069 = c__17237__auto__;
var G__21070 = cljs.core.count.call(null,c__17237__auto__);
var G__21071 = (0);
seq__21052 = G__21068;
chunk__21053 = G__21069;
count__21054 = G__21070;
i__21055 = G__21071;
continue;
} else {
var shape = cljs.core.first.call(null,seq__21052__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__21059_21072 = cljs.core._EQ_;
var expr__21060_21073 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__21059_21072.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__21060_21073))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__21059_21072.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__21060_21073))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21060_21073)].join('')));
}
}

var G__21074 = cljs.core.next.call(null,seq__21052__$1);
var G__21075 = null;
var G__21076 = (0);
var G__21077 = (0);
seq__21052 = G__21074;
chunk__21053 = G__21075;
count__21054 = G__21076;
i__21055 = G__21077;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__21079_SHARP_){
return (p1__21079_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__21078_SHARP_){
return (p1__21078_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__21083 = cljs.core._EQ_;
var expr__21084 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__21083.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__21084))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.update_positions = (function canvas$core$update_positions(state){
return cljs.core.mapv.call(null,canvas.core.update_shape_position,state);
});
canvas.core.clear_BANG_ = (function canvas$core$clear_BANG_(){
return canvas.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
canvas.core.direction_change_x = (function canvas$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__21086_SHARP_){
return (- p1__21086_SHARP_);
}));
}),state);
});
canvas.core.direction_change_y = (function canvas$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__21087_SHARP_){
return (- p1__21087_SHARP_);
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
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__21088_SHARP_){
return (- p1__21088_SHARP_);
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
var seq__21099 = cljs.core.seq.call(null,state);
var chunk__21100 = null;
var count__21101 = (0);
var i__21102 = (0);
while(true){
if((i__21102 < count__21101)){
var shape = cljs.core._nth.call(null,chunk__21100,i__21102);
var pred__21103_21109 = cljs.core._EQ_;
var expr__21104_21110 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__21103_21109.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__21104_21110))){
canvas.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__21103_21109.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__21104_21110))){
canvas.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21104_21110)].join('')));
}
}

var G__21111 = seq__21099;
var G__21112 = chunk__21100;
var G__21113 = count__21101;
var G__21114 = (i__21102 + (1));
seq__21099 = G__21111;
chunk__21100 = G__21112;
count__21101 = G__21113;
i__21102 = G__21114;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21099);
if(temp__4425__auto__){
var seq__21099__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21099__$1)){
var c__17237__auto__ = cljs.core.chunk_first.call(null,seq__21099__$1);
var G__21115 = cljs.core.chunk_rest.call(null,seq__21099__$1);
var G__21116 = c__17237__auto__;
var G__21117 = cljs.core.count.call(null,c__17237__auto__);
var G__21118 = (0);
seq__21099 = G__21115;
chunk__21100 = G__21116;
count__21101 = G__21117;
i__21102 = G__21118;
continue;
} else {
var shape = cljs.core.first.call(null,seq__21099__$1);
var pred__21106_21119 = cljs.core._EQ_;
var expr__21107_21120 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__21106_21119.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__21107_21120))){
canvas.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__21106_21119.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__21107_21120))){
canvas.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21107_21120)].join('')));
}
}

var G__21121 = cljs.core.next.call(null,seq__21099__$1);
var G__21122 = null;
var G__21123 = (0);
var G__21124 = (0);
seq__21099 = G__21121;
chunk__21100 = G__21122;
count__21101 = G__21123;
i__21102 = G__21124;
continue;
}
} else {
return null;
}
}
break;
}
});
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(state){
canvas.core.clear_BANG_.call(null);

if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,canvas.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,canvas.core.direction_change_y);
} else {
}

cljs.core.swap_BANG_.call(null,state,canvas.core.updater);

canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,state));

return window.requestAnimationFrame((function (){
return canvas$core$render_BANG_.call(null,state);
}));
});
window.requestAnimationFrame((function (){
return canvas.core.render_BANG_.call(null,canvas.core.state);
}));
canvas.core.on_clek = (function canvas$core$on_clek(e){
return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);
canvas.core.stop_line = (function canvas$core$stop_line(line){
return null;
});

//# sourceMappingURL=core.js.map