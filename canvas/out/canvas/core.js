// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(450),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#cac"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aba"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(600),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#b3b"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#efe"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(600),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"dx","dx",-381796732),(5),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#f5f"], null)], null));
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
canvas.core.draw_BANG_ = (function canvas$core$draw_BANG_(state){
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__33932 = cljs.core.seq.call(null,state);
var chunk__33933 = null;
var count__33934 = (0);
var i__33935 = (0);
while(true){
if((i__33935 < count__33934)){
var shape = cljs.core._nth.call(null,chunk__33933,i__33935);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__33936_33942 = cljs.core._EQ_;
var expr__33937_33943 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33936_33942.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__33937_33943))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__33936_33942.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33937_33943))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33937_33943)].join('')));
}
}

var G__33944 = seq__33932;
var G__33945 = chunk__33933;
var G__33946 = count__33934;
var G__33947 = (i__33935 + (1));
seq__33932 = G__33944;
chunk__33933 = G__33945;
count__33934 = G__33946;
i__33935 = G__33947;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33932);
if(temp__4425__auto__){
var seq__33932__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33932__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__33932__$1);
var G__33948 = cljs.core.chunk_rest.call(null,seq__33932__$1);
var G__33949 = c__17236__auto__;
var G__33950 = cljs.core.count.call(null,c__17236__auto__);
var G__33951 = (0);
seq__33932 = G__33948;
chunk__33933 = G__33949;
count__33934 = G__33950;
i__33935 = G__33951;
continue;
} else {
var shape = cljs.core.first.call(null,seq__33932__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__33939_33952 = cljs.core._EQ_;
var expr__33940_33953 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33939_33952.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__33940_33953))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__33939_33952.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__33940_33953))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33940_33953)].join('')));
}
}

var G__33954 = cljs.core.next.call(null,seq__33932__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__33932 = G__33954;
chunk__33933 = G__33955;
count__33934 = G__33956;
i__33935 = G__33957;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__33959_SHARP_){
return (p1__33959_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__33958_SHARP_){
return (p1__33958_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__33963 = cljs.core._EQ_;
var expr__33964 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__33963.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__33964))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__33969 = cljs.core._EQ_;
var expr__33970 = direction;
if(cljs.core.truth_(pred__33969.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__33970))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__33969.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__33970))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33970)].join('')));
}
}
});
canvas.core.update_shape_delta = (function canvas$core$update_shape_delta(shape){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__33972_SHARP_){
return (- p1__33972_SHARP_);
}));
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__33973_SHARP_){
return (- p1__33973_SHARP_);
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
canvas.core.line_distance = (function canvas$core$line_distance(start,end){
var xs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start));
var ys = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));
return Math.sqrt(((xs * xs) + (ys * ys)));
});
canvas.core.update_line_delta_BANG_ = (function canvas$core$update_line_delta_BANG_(line,state){
if(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)) >= window.innerHeight)) || (true)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__33974_SHARP_){
return (- p1__33974_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(old_state){
var new_state_33975 = canvas.core.update_positions.call(null,canvas.core.update_deltas.call(null,old_state));
canvas.core.clear_BANG_.call(null);

cljs.core.reset_BANG_.call(null,canvas.core.state,new_state_33975);

canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));

return window.requestAnimationFrame((function (){
return canvas$core$render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
}));
});
canvas.core.render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
canvas.core.on_clek = (function canvas$core$on_clek(e){
return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);

//# sourceMappingURL=core.js.map