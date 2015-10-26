// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
hello_seymore.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"vx","vx",-1685168462),(2),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(700),new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.Keyword(null,"vx","vx",-1685168462),(0),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null));
hello_seymore.core.pi_times_2 = (Math.PI * (2));
hello_seymore.core.canvas_dom = document.getElementById("c1");
hello_seymore.core.upper_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))));
hello_seymore.core.upper_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))));
hello_seymore.core.context = hello_seymore.core.canvas_dom.getContext("2d");
hello_seymore.core.inner_width = window.innerWidth;
hello_seymore.core.inner_height = window.innerHeight;
hello_seymore.core.canvas_dom.width = hello_seymore.core.inner_width;
hello_seymore.core.canvas_dom.height = hello_seymore.core.inner_height;
hello_seymore.core.draw_circle = (function hello_seymore$core$draw_circle(x,y,radius,start_angle,end_angle){
hello_seymore.core.context.beginPath();

hello_seymore.core.context.arc(x,y,radius,start_angle,end_angle);

return hello_seymore.core.context.stroke();
});
hello_seymore.core.draw_BANG_ = (function hello_seymore$core$draw_BANG_(state){
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__22620 = cljs.core.seq.call(null,state);
var chunk__22621 = null;
var count__22622 = (0);
var i__22623 = (0);
while(true){
if((i__22623 < count__22622)){
var shape = cljs.core._nth.call(null,chunk__22621,i__22623);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__22624_22630 = cljs.core._EQ_;
var expr__22625_22631 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__22624_22630.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__22625_22631))){
hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__22624_22630.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__22625_22631))){
hello_seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),hello_seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22625_22631)].join('')));
}
}

var G__22632 = seq__22620;
var G__22633 = chunk__22621;
var G__22634 = count__22622;
var G__22635 = (i__22623 + (1));
seq__22620 = G__22632;
chunk__22621 = G__22633;
count__22622 = G__22634;
i__22623 = G__22635;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22620);
if(temp__4425__auto__){
var seq__22620__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22620__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__22620__$1);
var G__22636 = cljs.core.chunk_rest.call(null,seq__22620__$1);
var G__22637 = c__17236__auto__;
var G__22638 = cljs.core.count.call(null,c__17236__auto__);
var G__22639 = (0);
seq__22620 = G__22636;
chunk__22621 = G__22637;
count__22622 = G__22638;
i__22623 = G__22639;
continue;
} else {
var shape = cljs.core.first.call(null,seq__22620__$1);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__22627_22640 = cljs.core._EQ_;
var expr__22628_22641 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__22627_22640.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__22628_22641))){
hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__22627_22640.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__22628_22641))){
hello_seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),hello_seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22628_22641)].join('')));
}
}

var G__22642 = cljs.core.next.call(null,seq__22620__$1);
var G__22643 = null;
var G__22644 = (0);
var G__22645 = (0);
seq__22620 = G__22642;
chunk__22621 = G__22643;
count__22622 = G__22644;
i__22623 = G__22645;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_seymore.core.updater = (function hello_seymore$core$updater(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__22647_SHARP_){
return (p1__22647_SHARP_ + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__22646_SHARP_){
return (p1__22646_SHARP_ + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
hello_seymore.core.clear_BANG_ = (function hello_seymore$core$clear_BANG_(){
return hello_seymore.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
hello_seymore.core.direction_change_x = (function hello_seymore$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__22648_SHARP_){
return (- p1__22648_SHARP_);
}));
}),state);
});
hello_seymore.core.direction_change_y = (function hello_seymore$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__22649_SHARP_){
return (- p1__22649_SHARP_);
}));
}),state);
});
hello_seymore.core.line_distance = (function hello_seymore$core$line_distance(start,end){
var xs = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start));
var ys = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start));
return Math.sqrt(((xs * xs) + (ys * ys)));
});
hello_seymore.core.update_line_delta_BANG_ = (function hello_seymore$core$update_line_delta_BANG_(line,state){
if(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(line)) >= window.innerHeight)) || (true)){
return cljs.core.swap_BANG_.call(null,state,hello_seymore.core._QMARK__QMARK__QMARK__QMARK_);
} else {
return null;
}
});
hello_seymore.core.update_rectangle_delta_BANG_ = (function hello_seymore$core$update_rectangle_delta_BANG_(rect,state){
if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
cljs.core.swap_BANG_.call(null,state,hello_seymore.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect)) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) <= (0)))){
return cljs.core.swap_BANG_.call(null,state,hello_seymore.core.direction_change_y);
} else {
return null;
}
});
hello_seymore.core.update_deltas_BANG_ = (function hello_seymore$core$update_deltas_BANG_(state){
var seq__22660 = cljs.core.seq.call(null,state);
var chunk__22661 = null;
var count__22662 = (0);
var i__22663 = (0);
while(true){
if((i__22663 < count__22662)){
var shape = cljs.core._nth.call(null,chunk__22661,i__22663);
var pred__22664_22670 = cljs.core._EQ_;
var expr__22665_22671 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__22664_22670.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__22665_22671))){
hello_seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__22664_22670.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__22665_22671))){
hello_seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22665_22671)].join('')));
}
}

var G__22672 = seq__22660;
var G__22673 = chunk__22661;
var G__22674 = count__22662;
var G__22675 = (i__22663 + (1));
seq__22660 = G__22672;
chunk__22661 = G__22673;
count__22662 = G__22674;
i__22663 = G__22675;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22660);
if(temp__4425__auto__){
var seq__22660__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22660__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__22660__$1);
var G__22676 = cljs.core.chunk_rest.call(null,seq__22660__$1);
var G__22677 = c__17236__auto__;
var G__22678 = cljs.core.count.call(null,c__17236__auto__);
var G__22679 = (0);
seq__22660 = G__22676;
chunk__22661 = G__22677;
count__22662 = G__22678;
i__22663 = G__22679;
continue;
} else {
var shape = cljs.core.first.call(null,seq__22660__$1);
var pred__22667_22680 = cljs.core._EQ_;
var expr__22668_22681 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__22667_22680.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__22668_22681))){
hello_seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__22667_22680.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__22668_22681))){
hello_seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22668_22681)].join('')));
}
}

var G__22682 = cljs.core.next.call(null,seq__22660__$1);
var G__22683 = null;
var G__22684 = (0);
var G__22685 = (0);
seq__22660 = G__22682;
chunk__22661 = G__22683;
count__22662 = G__22684;
i__22663 = G__22685;
continue;
}
} else {
return null;
}
}
break;
}
});
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(state){
hello_seymore.core.clear_BANG_.call(null);

if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerWidth)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,hello_seymore.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= window.innerHeight)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,hello_seymore.core.direction_change_y);
} else {
}

cljs.core.swap_BANG_.call(null,state,hello_seymore.core.updater);

hello_seymore.core.draw_BANG_.call(null,cljs.core.deref.call(null,state));

return window.requestAnimationFrame((function (){
return hello_seymore$core$render_BANG_.call(null,state);
}));
});
window.requestAnimationFrame((function (){
return hello_seymore.core.render_BANG_.call(null,hello_seymore.core.state);
}));
hello_seymore.core.on_clek = (function hello_seymore$core$on_clek(e){
return hello_seymore.core.render_BANG_.call(null,hello_seymore.core.state);
});
goog.events.listen(window,goog.events.EventType.CLICK,hello_seymore.core.on_clek);

//# sourceMappingURL=core.js.map