// Compiled by ClojureScript 1.7.48 {}
goog.provide('canvas.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
canvas.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),0.2,new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),-0.2,new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),0.2,new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"dx","dx",-381796732),-0.2,new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null));
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
canvas.core.draw_BANG_ = (function canvas$core$draw_BANG_(state){
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__20835 = cljs.core.seq.call(null,state);
var chunk__20836 = null;
var count__20837 = (0);
var i__20838 = (0);
while(true){
if((i__20838 < count__20837)){
var shape = cljs.core._nth.call(null,chunk__20836,i__20838);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__20839_20845 = cljs.core._EQ_;
var expr__20840_20846 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__20839_20845.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__20840_20846))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__20839_20845.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__20840_20846))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__20839_20845.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__20840_20846))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20840_20846)].join('')));
}
}
}

var G__20847 = seq__20835;
var G__20848 = chunk__20836;
var G__20849 = count__20837;
var G__20850 = (i__20838 + (1));
seq__20835 = G__20847;
chunk__20836 = G__20848;
count__20837 = G__20849;
i__20838 = G__20850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20835);
if(temp__4425__auto__){
var seq__20835__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20835__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__20835__$1);
var G__20851 = cljs.core.chunk_rest.call(null,seq__20835__$1);
var G__20852 = c__17236__auto__;
var G__20853 = cljs.core.count.call(null,c__17236__auto__);
var G__20854 = (0);
seq__20835 = G__20851;
chunk__20836 = G__20852;
count__20837 = G__20853;
i__20838 = G__20854;
continue;
} else {
var shape = cljs.core.first.call(null,seq__20835__$1);
canvas.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__20842_20855 = cljs.core._EQ_;
var expr__20843_20856 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__20842_20855.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__20843_20856))){
canvas.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__20842_20855.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__20843_20856))){
canvas.core.fill_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),canvas.core.pi_times_2);
} else {
if(cljs.core.truth_(pred__20842_20855.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__20843_20856))){
canvas.core.draw_line.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20843_20856)].join('')));
}
}
}

var G__20857 = cljs.core.next.call(null,seq__20835__$1);
var G__20858 = null;
var G__20859 = (0);
var G__20860 = (0);
seq__20835 = G__20857;
chunk__20836 = G__20858;
count__20837 = G__20859;
i__20838 = G__20860;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__20862_SHARP_){
return (p1__20862_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__20861_SHARP_){
return (p1__20861_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
canvas.core.update_shape_position = (function canvas$core$update_shape_position(shape){
var pred__20866 = cljs.core._EQ_;
var expr__20867 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__20866.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__20867))){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}
});
canvas.core.out_of_bounds_QMARK_ = (function canvas$core$out_of_bounds_QMARK_(shape,direction){
var pred__20875 = cljs.core._EQ_;
var expr__20876 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__20875.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__20876))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0)))) || (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(shape)) <= (0))));
} else {
var pred__20878 = cljs.core._EQ_;
var expr__20879 = direction;
if(cljs.core.truth_(pred__20878.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),expr__20879))){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
if(cljs.core.truth_(pred__20878.call(null,new cljs.core.Keyword(null,"vertical","vertical",718696748),expr__20879))){
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape) <= (0)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20879)].join('')));
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
var pred__20886 = cljs.core._EQ_;
var expr__20887 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__20886.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__20887))){
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(0)),new cljs.core.Keyword(null,"dx","dx",-381796732),(0));
} else {
return shape;
}
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),((function (pred__20886,expr__20887){
return (function (p1__20881_SHARP_){
return (- p1__20881_SHARP_);
});})(pred__20886,expr__20887))
);
} else {
if(cljs.core.truth_(canvas.core.out_of_bounds_QMARK_.call(null,shape,new cljs.core.Keyword(null,"vertical","vertical",718696748)))){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),((function (pred__20886,expr__20887){
return (function (p1__20882_SHARP_){
return (- p1__20882_SHARP_);
});})(pred__20886,expr__20887))
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
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__20889_SHARP_){
return (- p1__20889_SHARP_);
}))));
} else {
return null;
}
});
canvas.core.render_BANG_ = (function canvas$core$render_BANG_(old_state){
var new_state_20890 = canvas.core.update_positions.call(null,canvas.core.update_deltas.call(null,old_state));
canvas.core.clear_BANG_.call(null);

cljs.core.reset_BANG_.call(null,canvas.core.state,new_state_20890);

canvas.core.draw_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));

return window.requestAnimationFrame((function (){
return canvas$core$render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
}));
});
canvas.core.render_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state));
canvas.core.add_lines_BANG_ = (function canvas$core$add_lines_BANG_(old_state,x,y){
var new_state = cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,old_state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(1),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(0),new cljs.core.Keyword(null,"dy","dy",1719547243),(-1),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(-1),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"dx","dx",-381796732),(1),new cljs.core.Keyword(null,"dy","dy",1719547243),(0),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null));
return cljs.core.reset_BANG_.call(null,canvas.core.state,new_state);
});
canvas.core.on_clek = (function canvas$core$on_clek(e){
canvas.core.add_lines_BANG_.call(null,cljs.core.deref.call(null,canvas.core.state),event.x,event.y);

return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,canvas.core.on_clek);

//# sourceMappingURL=core.js.map