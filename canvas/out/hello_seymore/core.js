// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
hello_seymore.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"dx","dx",-381796732),(2),new cljs.core.Keyword(null,"dy","dy",1719547243),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null));
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

var seq__19928 = cljs.core.seq.call(null,state);
var chunk__19929 = null;
var count__19930 = (0);
var i__19931 = (0);
while(true){
if((i__19931 < count__19930)){
var shape = cljs.core._nth.call(null,chunk__19929,i__19931);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__19932_19938 = cljs.core._EQ_;
var expr__19933_19939 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19932_19938.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19933_19939))){
hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__19932_19938.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__19933_19939))){
hello_seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),hello_seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19933_19939)].join('')));
}
}

var G__19940 = seq__19928;
var G__19941 = chunk__19929;
var G__19942 = count__19930;
var G__19943 = (i__19931 + (1));
seq__19928 = G__19940;
chunk__19929 = G__19941;
count__19930 = G__19942;
i__19931 = G__19943;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19928);
if(temp__4425__auto__){
var seq__19928__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19928__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__19928__$1);
var G__19944 = cljs.core.chunk_rest.call(null,seq__19928__$1);
var G__19945 = c__17236__auto__;
var G__19946 = cljs.core.count.call(null,c__17236__auto__);
var G__19947 = (0);
seq__19928 = G__19944;
chunk__19929 = G__19945;
count__19930 = G__19946;
i__19931 = G__19947;
continue;
} else {
var shape = cljs.core.first.call(null,seq__19928__$1);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shape);

var pred__19935_19948 = cljs.core._EQ_;
var expr__19936_19949 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19935_19948.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19936_19949))){
hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shape));
} else {
if(cljs.core.truth_(pred__19935_19948.call(null,new cljs.core.Keyword(null,"circle","circle",1903212362),expr__19936_19949))){
hello_seymore.core.draw_circle.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(shape),(0),hello_seymore.core.pi_times_2);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19936_19949)].join('')));
}
}

var G__19950 = cljs.core.next.call(null,seq__19928__$1);
var G__19951 = null;
var G__19952 = (0);
var G__19953 = (0);
seq__19928 = G__19950;
chunk__19929 = G__19951;
count__19930 = G__19952;
i__19931 = G__19953;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__19955_SHARP_){
return (p1__19955_SHARP_ + new cljs.core.Keyword(null,"dy","dy",1719547243).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__19954_SHARP_){
return (p1__19954_SHARP_ + new cljs.core.Keyword(null,"dx","dx",-381796732).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
hello_seymore.core.clear_BANG_ = (function hello_seymore$core$clear_BANG_(){
return hello_seymore.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
hello_seymore.core.direction_change_x = (function hello_seymore$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dx","dx",-381796732),(function (p1__19956_SHARP_){
return (- p1__19956_SHARP_);
}));
}),state);
});
hello_seymore.core.direction_change_y = (function hello_seymore$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__19957_SHARP_){
return (- p1__19957_SHARP_);
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
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge.call(null,cljs.core.update.call(null,line,new cljs.core.Keyword(null,"dy","dy",1719547243),(function (p1__19958_SHARP_){
return (- p1__19958_SHARP_);
}))));
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
var seq__19969 = cljs.core.seq.call(null,state);
var chunk__19970 = null;
var count__19971 = (0);
var i__19972 = (0);
while(true){
if((i__19972 < count__19971)){
var shape = cljs.core._nth.call(null,chunk__19970,i__19972);
var pred__19973_19979 = cljs.core._EQ_;
var expr__19974_19980 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19973_19979.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19974_19980))){
hello_seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__19973_19979.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__19974_19980))){
hello_seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19974_19980)].join('')));
}
}

var G__19981 = seq__19969;
var G__19982 = chunk__19970;
var G__19983 = count__19971;
var G__19984 = (i__19972 + (1));
seq__19969 = G__19981;
chunk__19970 = G__19982;
count__19971 = G__19983;
i__19972 = G__19984;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19969);
if(temp__4425__auto__){
var seq__19969__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19969__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__19969__$1);
var G__19985 = cljs.core.chunk_rest.call(null,seq__19969__$1);
var G__19986 = c__17236__auto__;
var G__19987 = cljs.core.count.call(null,c__17236__auto__);
var G__19988 = (0);
seq__19969 = G__19985;
chunk__19970 = G__19986;
count__19971 = G__19987;
i__19972 = G__19988;
continue;
} else {
var shape = cljs.core.first.call(null,seq__19969__$1);
var pred__19976_19989 = cljs.core._EQ_;
var expr__19977_19990 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(pred__19976_19989.call(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),expr__19977_19990))){
hello_seymore.core.update_rectangle_delta_BANG_.call(null,shape,state);
} else {
if(cljs.core.truth_(pred__19976_19989.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__19977_19990))){
hello_seymore.core.update_line_delta_BANG_.call(null,shape,state);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19977_19990)].join('')));
}
}

var G__19991 = cljs.core.next.call(null,seq__19969__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19969 = G__19991;
chunk__19970 = G__19992;
count__19971 = G__19993;
i__19972 = G__19994;
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
return console.log([cljs.core.str("event Y"),cljs.core.str(event.y)].join(''));
});
goog.events.listen(window,goog.events.EventType.CLICK,hello_seymore.core.on_clek);

//# sourceMappingURL=core.js.map