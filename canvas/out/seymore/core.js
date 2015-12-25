// Compiled by ClojureScript 1.7.48 {}
goog.provide('seymore.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
seymore.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"dx","dx",-381796732),(2),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null));
seymore.core.pi_times_2 = (Math.PI * (2));
seymore.core.canvas_dom = document.getElementById("c1");
seymore.core.upper_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,seymore.core.state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,seymore.core.state))));
seymore.core.upper_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,seymore.core.state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,seymore.core.state))));
seymore.core.context = seymore.core.canvas_dom.getContext("2d");
seymore.core.inner_width = window.innerWidth;
seymore.core.inner_height = window.innerHeight;
seymore.core.canvas_dom.width = seymore.core.inner_width;
seymore.core.canvas_dom.height = seymore.core.inner_height;
seymore.core.draw_circle = (function seymore$core$draw_circle(x,y,radius,start_angle,end_angle){
seymore.core.context.beginPath();

seymore.core.context.arc(x,y,radius,start_angle,end_angle);

return seymore.core.context.stroke();
});
seymore.core.draw_BANG_ = (function seymore$core$draw_BANG_(state){
seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__19770 = cljs.core.seq.call(null,state);
var chunk__19771 = null;
var count__19772 = (0);
var i__19773 = (0);
while(true){
if((i__19773 < count__19772)){
var shape = cljs.core._nth.call(null,chunk__19771,i__19773);
seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__19774_19780 = cljs.core._EQ_;
var expr__19775_19781 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19774_19780.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19775_19781))){
seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__19774_19780.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__19775_19781))){
seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19775_19781)].join('')));
}
}

var G__19782 = seq__19770;
var G__19783 = chunk__19771;
var G__19784 = count__19772;
var G__19785 = (i__19773 + (1));
seq__19770 = G__19782;
chunk__19771 = G__19783;
count__19772 = G__19784;
i__19773 = G__19785;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19770);
if(temp__4425__auto__){
var seq__19770__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19770__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__19770__$1);
var G__19786 = cljs.core.chunk_rest.call(null,seq__19770__$1);
var G__19787 = c__17236__auto__;
var G__19788 = cljs.core.count.call(null,c__17236__auto__);
var G__19789 = (0);
seq__19770 = G__19786;
chunk__19771 = G__19787;
count__19772 = G__19788;
i__19773 = G__19789;
continue;
} else {
var shape = cljs.core.first.call(null,seq__19770__$1);
seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__19777_19790 = cljs.core._EQ_;
var expr__19778_19791 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19777_19790.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19778_19791))){
seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__19777_19790.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__19778_19791))){
seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19778_19791)].join('')));
}
}

var G__19792 = cljs.core.next.call(null,seq__19770__$1);
var G__19793 = null;
var G__19794 = (0);
var G__19795 = (0);
seq__19770 = G__19792;
chunk__19771 = G__19793;
count__19772 = G__19794;
i__19773 = G__19795;
continue;
}
} else {
return null;
}
}
break;
}
});
seymore.core.updater = (function seymore$core$updater(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__19797_SHARP_){
return (p1__19797_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__19796_SHARP_){
return (p1__19796_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
seymore.core.clear_BANG_ = (function seymore$core$clear_BANG_(){
return seymore.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
seymore.core.direction_change_x = (function seymore$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__19798_SHARP_){
return (- p1__19798_SHARP_);
}));
}),state);
});
seymore.core.direction_change_y = (function seymore$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__19799_SHARP_){
return (- p1__19799_SHARP_);
}));
}),state);
});
seymore.core.line_distance = (function seymore$core$line_distance(start,end){
var xs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start));
var ys = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));
return Math.sqrt(((xs * xs) + (ys * ys)));
});
seymore.core.update_line_delta_BANG_ = (function seymore$core$update_line_delta_BANG_(line,state){
if(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)) >= window.innerHeight)) || (true)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__19800_SHARP_){
return (- p1__19800_SHARP_);
}))));
} else {
return null;
}
});
seymore.core.update_rectangle_delta_BANG_ = (function seymore$core$update_rectangle_delta_BANG_(rect,state){
if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
cljs.core.swap_BANG_.call(null,state,seymore.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
return cljs.core.swap_BANG_.call(null,state,seymore.core.direction_change_y);
} else {
return null;
}
});
seymore.core.update_deltas_BANG_ = (function seymore$core$update_deltas_BANG_(state){
var seq__19811 = cljs.core.seq.call(null,state);
var chunk__19812 = null;
var count__19813 = (0);
var i__19814 = (0);
while(true){
if((i__19814 < count__19813)){
var shape = cljs.core._nth.call(null,chunk__19812,i__19814);
var pred__19815_19821 = cljs.core._EQ_;
var expr__19816_19822 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19815_19821.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19816_19822))){
seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__19815_19821.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__19816_19822))){
seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19816_19822)].join('')));
}
}

var G__19823 = seq__19811;
var G__19824 = chunk__19812;
var G__19825 = count__19813;
var G__19826 = (i__19814 + (1));
seq__19811 = G__19823;
chunk__19812 = G__19824;
count__19813 = G__19825;
i__19814 = G__19826;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19811);
if(temp__4425__auto__){
var seq__19811__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19811__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__19811__$1);
var G__19827 = cljs.core.chunk_rest.call(null,seq__19811__$1);
var G__19828 = c__17236__auto__;
var G__19829 = cljs.core.count.call(null,c__17236__auto__);
var G__19830 = (0);
seq__19811 = G__19827;
chunk__19812 = G__19828;
count__19813 = G__19829;
i__19814 = G__19830;
continue;
} else {
var shape = cljs.core.first.call(null,seq__19811__$1);
var pred__19818_19831 = cljs.core._EQ_;
var expr__19819_19832 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19818_19831.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19819_19832))){
seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__19818_19831.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__19819_19832))){
seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19819_19832)].join('')));
}
}

var G__19833 = cljs.core.next.call(null,seq__19811__$1);
var G__19834 = null;
var G__19835 = (0);
var G__19836 = (0);
seq__19811 = G__19833;
chunk__19812 = G__19834;
count__19813 = G__19835;
i__19814 = G__19836;
continue;
}
} else {
return null;
}
}
break;
}
});
seymore.core.render_BANG_ = (function seymore$core$render_BANG_(state){
seymore.core.clear_BANG_.call(null);

if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,seymore.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,seymore.core.direction_change_y);
} else {
}

cljs.core.swap_BANG_.call(null,state,seymore.core.updater);

seymore.core.draw_BANG_.call(null,cljs.core.deref.call(null,state));

return window.requestAnimationFrame((function (){
return seymore$core$render_BANG_.call(null,state);
}));
});
window.requestAnimationFrame((function (){
return seymore.core.render_BANG_.call(null,seymore.core.state);
}));
seymore.core.on_clek = (function seymore$core$on_clek(e){
return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,seymore.core.on_clek);

//# sourceMappingURL=core.js.map