// Compiled by ClojureScript 1.7.48 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventType');
hello_seymore.core.state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"h","h",1109658740),(400),new cljs.core.Keyword(null,"w","w",354169001),(400),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#ccc"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(400),new cljs.core.Keyword(null,"h","h",1109658740),(200),new cljs.core.Keyword(null,"w","w",354169001),(200),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(450),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(600),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(600),new cljs.core.Keyword(null,"y","y",-1757859776),(300),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(600),new cljs.core.Keyword(null,"h","h",1109658740),(100),new cljs.core.Keyword(null,"w","w",354169001),(100),new cljs.core.Keyword(null,"vx","vx",-1685168462),(5),new cljs.core.Keyword(null,"vy","vy",-2018509997),(2),new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null));
hello_seymore.core.canvas_dom = document.getElementById("c1");
hello_seymore.core.upper_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))));
hello_seymore.core.upper_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,hello_seymore.core.state))));
hello_seymore.core.context = hello_seymore.core.canvas_dom.getContext("2d");
hello_seymore.core.inner_width = window.innerWidth;
hello_seymore.core.inner_height = window.innerHeight;
hello_seymore.core.canvas_dom.width = hello_seymore.core.inner_width;
hello_seymore.core.canvas_dom.height = hello_seymore.core.inner_height;
hello_seymore.core.draw_BANG_ = (function hello_seymore$core$draw_BANG_(state){
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,state));

var seq__21027 = cljs.core.seq.call(null,state);
var chunk__21028 = null;
var count__21029 = (0);
var i__21030 = (0);
while(true){
if((i__21030 < count__21029)){
var rect = cljs.core._nth.call(null,chunk__21028,i__21030);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(rect);

hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect));

var G__21031 = seq__21027;
var G__21032 = chunk__21028;
var G__21033 = count__21029;
var G__21034 = (i__21030 + (1));
seq__21027 = G__21031;
chunk__21028 = G__21032;
count__21029 = G__21033;
i__21030 = G__21034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21027);
if(temp__4425__auto__){
var seq__21027__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21027__$1)){
var c__17236__auto__ = cljs.core.chunk_first.call(null,seq__21027__$1);
var G__21035 = cljs.core.chunk_rest.call(null,seq__21027__$1);
var G__21036 = c__17236__auto__;
var G__21037 = cljs.core.count.call(null,c__17236__auto__);
var G__21038 = (0);
seq__21027 = G__21035;
chunk__21028 = G__21036;
count__21029 = G__21037;
i__21030 = G__21038;
continue;
} else {
var rect = cljs.core.first.call(null,seq__21027__$1);
hello_seymore.core.context.fillStyle = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(rect);

hello_seymore.core.context.fillRect(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect));

var G__21039 = cljs.core.next.call(null,seq__21027__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__21027 = G__21039;
chunk__21028 = G__21040;
count__21029 = G__21041;
i__21030 = G__21042;
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
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__21044_SHARP_){
return (p1__21044_SHARP_ + new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__21043_SHARP_){
return (p1__21043_SHARP_ + new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(shape));
}));
}),state));
});
hello_seymore.core.clear_BANG_ = (function hello_seymore$core$clear_BANG_(){
return hello_seymore.core.context.clearRect((0),(0),window.innerWidth,window.innerHeight);
});
hello_seymore.core.direction_change_x = (function hello_seymore$core$direction_change_x(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"vx","vx",-1685168462),(function (p1__21045_SHARP_){
return (- p1__21045_SHARP_);
}));
}),state);
});
hello_seymore.core.direction_change_y = (function hello_seymore$core$direction_change_y(state){
return cljs.core.map.call(null,(function (shape){
return cljs.core.update.call(null,shape,new cljs.core.Keyword(null,"vy","vy",-2018509997),(function (p1__21046_SHARP_){
return (- p1__21046_SHARP_);
}));
}),state);
});
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(state){
hello_seymore.core.clear_BANG_.call(null);

if((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= hello_seymore.core.inner_width)) || ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
cljs.core.swap_BANG_.call(null,state,hello_seymore.core.direction_change_x);
} else {
}

if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state)))) >= hello_seymore.core.inner_height)) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,state))) <= (0)))){
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