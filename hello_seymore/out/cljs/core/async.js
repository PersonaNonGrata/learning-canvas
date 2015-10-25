// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25839 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25839 = (function (fn_handler,f,meta25840){
this.fn_handler = fn_handler;
this.f = f;
this.meta25840 = meta25840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25841,meta25840__$1){
var self__ = this;
var _25841__$1 = this;
return (new cljs.core.async.t25839(self__.fn_handler,self__.f,meta25840__$1));
});

cljs.core.async.t25839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25841){
var self__ = this;
var _25841__$1 = this;
return self__.meta25840;
});

cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25840","meta25840",-2101738644,null)], null);
});

cljs.core.async.t25839.cljs$lang$type = true;

cljs.core.async.t25839.cljs$lang$ctorStr = "cljs.core.async/t25839";

cljs.core.async.t25839.cljs$lang$ctorPrWriter = (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t25839");
});

cljs.core.async.__GT_t25839 = (function cljs$core$async$fn_handler_$___GT_t25839(fn_handler__$1,f__$1,meta25840){
return (new cljs.core.async.t25839(fn_handler__$1,f__$1,meta25840));
});

}

return (new cljs.core.async.t25839(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args25844 = [];
var len__17491__auto___25847 = arguments.length;
var i__17492__auto___25848 = (0);
while(true){
if((i__17492__auto___25848 < len__17491__auto___25847)){
args25844.push((arguments[i__17492__auto___25848]));

var G__25849 = (i__17492__auto___25848 + (1));
i__17492__auto___25848 = G__25849;
continue;
} else {
}
break;
}

var G__25846 = args25844.length;
switch (G__25846) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25844.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args25851 = [];
var len__17491__auto___25854 = arguments.length;
var i__17492__auto___25855 = (0);
while(true){
if((i__17492__auto___25855 < len__17491__auto___25854)){
args25851.push((arguments[i__17492__auto___25855]));

var G__25856 = (i__17492__auto___25855 + (1));
i__17492__auto___25855 = G__25856;
continue;
} else {
}
break;
}

var G__25853 = args25851.length;
switch (G__25853) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25851.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25858 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25858);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25858,ret){
return (function (){
return fn1.call(null,val_25858);
});})(val_25858,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args25859 = [];
var len__17491__auto___25862 = arguments.length;
var i__17492__auto___25863 = (0);
while(true){
if((i__17492__auto___25863 < len__17491__auto___25862)){
args25859.push((arguments[i__17492__auto___25863]));

var G__25864 = (i__17492__auto___25863 + (1));
i__17492__auto___25863 = G__25864;
continue;
} else {
}
break;
}

var G__25861 = args25859.length;
switch (G__25861) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25859.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17336__auto___25866 = n;
var x_25867 = (0);
while(true){
if((x_25867 < n__17336__auto___25866)){
(a[x_25867] = (0));

var G__25868 = (x_25867 + (1));
x_25867 = G__25868;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25869 = (i + (1));
i = G__25869;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25873 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25873 = (function (alt_flag,flag,meta25874){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25874 = meta25874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25875,meta25874__$1){
var self__ = this;
var _25875__$1 = this;
return (new cljs.core.async.t25873(self__.alt_flag,self__.flag,meta25874__$1));
});})(flag))
;

cljs.core.async.t25873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25875){
var self__ = this;
var _25875__$1 = this;
return self__.meta25874;
});})(flag))
;

cljs.core.async.t25873.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25873.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25874","meta25874",-1673559139,null)], null);
});})(flag))
;

cljs.core.async.t25873.cljs$lang$type = true;

cljs.core.async.t25873.cljs$lang$ctorStr = "cljs.core.async/t25873";

cljs.core.async.t25873.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t25873");
});})(flag))
;

cljs.core.async.__GT_t25873 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25873(alt_flag__$1,flag__$1,meta25874){
return (new cljs.core.async.t25873(alt_flag__$1,flag__$1,meta25874));
});})(flag))
;

}

return (new cljs.core.async.t25873(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25879 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25879 = (function (alt_handler,flag,cb,meta25880){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25880 = meta25880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25881,meta25880__$1){
var self__ = this;
var _25881__$1 = this;
return (new cljs.core.async.t25879(self__.alt_handler,self__.flag,self__.cb,meta25880__$1));
});

cljs.core.async.t25879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25881){
var self__ = this;
var _25881__$1 = this;
return self__.meta25880;
});

cljs.core.async.t25879.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25880","meta25880",-431869507,null)], null);
});

cljs.core.async.t25879.cljs$lang$type = true;

cljs.core.async.t25879.cljs$lang$ctorStr = "cljs.core.async/t25879";

cljs.core.async.t25879.cljs$lang$ctorPrWriter = (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t25879");
});

cljs.core.async.__GT_t25879 = (function cljs$core$async$alt_handler_$___GT_t25879(alt_handler__$1,flag__$1,cb__$1,meta25880){
return (new cljs.core.async.t25879(alt_handler__$1,flag__$1,cb__$1,meta25880));
});

}

return (new cljs.core.async.t25879(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25882_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25882_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25883_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25883_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16452__auto__ = wport;
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25884 = (i + (1));
i = G__25884;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16452__auto__ = ret;
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16440__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16440__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16440__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17498__auto__ = [];
var len__17491__auto___25890 = arguments.length;
var i__17492__auto___25891 = (0);
while(true){
if((i__17492__auto___25891 < len__17491__auto___25890)){
args__17498__auto__.push((arguments[i__17492__auto___25891]));

var G__25892 = (i__17492__auto___25891 + (1));
i__17492__auto___25891 = G__25892;
continue;
} else {
}
break;
}

var argseq__17499__auto__ = ((((1) < args__17498__auto__.length))?(new cljs.core.IndexedSeq(args__17498__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17499__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25887){
var map__25888 = p__25887;
var map__25888__$1 = ((((!((map__25888 == null)))?((((map__25888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25888):map__25888);
var opts = map__25888__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25885){
var G__25886 = cljs.core.first.call(null,seq25885);
var seq25885__$1 = cljs.core.next.call(null,seq25885);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25886,seq25885__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args25893 = [];
var len__17491__auto___25943 = arguments.length;
var i__17492__auto___25944 = (0);
while(true){
if((i__17492__auto___25944 < len__17491__auto___25943)){
args25893.push((arguments[i__17492__auto___25944]));

var G__25945 = (i__17492__auto___25944 + (1));
i__17492__auto___25944 = G__25945;
continue;
} else {
}
break;
}

var G__25895 = args25893.length;
switch (G__25895) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25893.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19635__auto___25947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___25947){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___25947){
return (function (state_25919){
var state_val_25920 = (state_25919[(1)]);
if((state_val_25920 === (7))){
var inst_25915 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25921_25948 = state_25919__$1;
(statearr_25921_25948[(2)] = inst_25915);

(statearr_25921_25948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (1))){
var state_25919__$1 = state_25919;
var statearr_25922_25949 = state_25919__$1;
(statearr_25922_25949[(2)] = null);

(statearr_25922_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (4))){
var inst_25898 = (state_25919[(7)]);
var inst_25898__$1 = (state_25919[(2)]);
var inst_25899 = (inst_25898__$1 == null);
var state_25919__$1 = (function (){var statearr_25923 = state_25919;
(statearr_25923[(7)] = inst_25898__$1);

return statearr_25923;
})();
if(cljs.core.truth_(inst_25899)){
var statearr_25924_25950 = state_25919__$1;
(statearr_25924_25950[(1)] = (5));

} else {
var statearr_25925_25951 = state_25919__$1;
(statearr_25925_25951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (13))){
var state_25919__$1 = state_25919;
var statearr_25926_25952 = state_25919__$1;
(statearr_25926_25952[(2)] = null);

(statearr_25926_25952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (6))){
var inst_25898 = (state_25919[(7)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25919__$1,(11),to,inst_25898);
} else {
if((state_val_25920 === (3))){
var inst_25917 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25919__$1,inst_25917);
} else {
if((state_val_25920 === (12))){
var state_25919__$1 = state_25919;
var statearr_25927_25953 = state_25919__$1;
(statearr_25927_25953[(2)] = null);

(statearr_25927_25953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (2))){
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25919__$1,(4),from);
} else {
if((state_val_25920 === (11))){
var inst_25908 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25908)){
var statearr_25928_25954 = state_25919__$1;
(statearr_25928_25954[(1)] = (12));

} else {
var statearr_25929_25955 = state_25919__$1;
(statearr_25929_25955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (9))){
var state_25919__$1 = state_25919;
var statearr_25930_25956 = state_25919__$1;
(statearr_25930_25956[(2)] = null);

(statearr_25930_25956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (5))){
var state_25919__$1 = state_25919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25931_25957 = state_25919__$1;
(statearr_25931_25957[(1)] = (8));

} else {
var statearr_25932_25958 = state_25919__$1;
(statearr_25932_25958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (14))){
var inst_25913 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25933_25959 = state_25919__$1;
(statearr_25933_25959[(2)] = inst_25913);

(statearr_25933_25959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (10))){
var inst_25905 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25934_25960 = state_25919__$1;
(statearr_25934_25960[(2)] = inst_25905);

(statearr_25934_25960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (8))){
var inst_25902 = cljs.core.async.close_BANG_.call(null,to);
var state_25919__$1 = state_25919;
var statearr_25935_25961 = state_25919__$1;
(statearr_25935_25961[(2)] = inst_25902);

(statearr_25935_25961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___25947))
;
return ((function (switch__19570__auto__,c__19635__auto___25947){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_25919){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_25919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__19574__auto__ = e25940;
var statearr_25941_25962 = state_25919;
(statearr_25941_25962[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25963 = state_25919;
state_25919 = G__25963;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_25919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_25919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___25947))
})();
var state__19637__auto__ = (function (){var statearr_25942 = f__19636__auto__.call(null);
(statearr_25942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___25947);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___25947))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26147){
var vec__26148 = p__26147;
var v = cljs.core.nth.call(null,vec__26148,(0),null);
var p = cljs.core.nth.call(null,vec__26148,(1),null);
var job = vec__26148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19635__auto___26330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results){
return (function (state_26153){
var state_val_26154 = (state_26153[(1)]);
if((state_val_26154 === (1))){
var state_26153__$1 = state_26153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26153__$1,(2),res,v);
} else {
if((state_val_26154 === (2))){
var inst_26150 = (state_26153[(2)]);
var inst_26151 = cljs.core.async.close_BANG_.call(null,res);
var state_26153__$1 = (function (){var statearr_26155 = state_26153;
(statearr_26155[(7)] = inst_26150);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26153__$1,inst_26151);
} else {
return null;
}
}
});})(c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results))
;
return ((function (switch__19570__auto__,c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_26159 = [null,null,null,null,null,null,null,null];
(statearr_26159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__);

(statearr_26159[(1)] = (1));

return statearr_26159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1 = (function (state_26153){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26160){if((e26160 instanceof Object)){
var ex__19574__auto__ = e26160;
var statearr_26161_26331 = state_26153;
(statearr_26161_26331[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26332 = state_26153;
state_26153 = G__26332;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = function(state_26153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1.call(this,state_26153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results))
})();
var state__19637__auto__ = (function (){var statearr_26162 = f__19636__auto__.call(null);
(statearr_26162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___26330);

return statearr_26162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___26330,res,vec__26148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26163){
var vec__26164 = p__26163;
var v = cljs.core.nth.call(null,vec__26164,(0),null);
var p = cljs.core.nth.call(null,vec__26164,(1),null);
var job = vec__26164;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17336__auto___26333 = n;
var __26334 = (0);
while(true){
if((__26334 < n__17336__auto___26333)){
var G__26165_26335 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26165_26335) {
case "compute":
var c__19635__auto___26337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26334,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (__26334,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (1))){
var state_26178__$1 = state_26178;
var statearr_26180_26338 = state_26178__$1;
(statearr_26180_26338[(2)] = null);

(statearr_26180_26338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),jobs);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (4))){
var inst_26168 = (state_26178[(2)]);
var inst_26169 = process.call(null,inst_26168);
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26169)){
var statearr_26181_26339 = state_26178__$1;
(statearr_26181_26339[(1)] = (5));

} else {
var statearr_26182_26340 = state_26178__$1;
(statearr_26182_26340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (5))){
var state_26178__$1 = state_26178;
var statearr_26183_26341 = state_26178__$1;
(statearr_26183_26341[(2)] = null);

(statearr_26183_26341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var state_26178__$1 = state_26178;
var statearr_26184_26342 = state_26178__$1;
(statearr_26184_26342[(2)] = null);

(statearr_26184_26342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26185_26343 = state_26178__$1;
(statearr_26185_26343[(2)] = inst_26174);

(statearr_26185_26343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26334,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
;
return ((function (__26334,switch__19570__auto__,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null];
(statearr_26189[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1 = (function (state_26178){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__19574__auto__ = e26190;
var statearr_26191_26344 = state_26178;
(statearr_26191_26344[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26345 = state_26178;
state_26178 = G__26345;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__;
})()
;})(__26334,switch__19570__auto__,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
})();
var state__19637__auto__ = (function (){var statearr_26192 = f__19636__auto__.call(null);
(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___26337);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(__26334,c__19635__auto___26337,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
);


break;
case "async":
var c__19635__auto___26346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26334,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (__26334,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function (state_26205){
var state_val_26206 = (state_26205[(1)]);
if((state_val_26206 === (1))){
var state_26205__$1 = state_26205;
var statearr_26207_26347 = state_26205__$1;
(statearr_26207_26347[(2)] = null);

(statearr_26207_26347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (2))){
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26205__$1,(4),jobs);
} else {
if((state_val_26206 === (3))){
var inst_26203 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26205__$1,inst_26203);
} else {
if((state_val_26206 === (4))){
var inst_26195 = (state_26205[(2)]);
var inst_26196 = async.call(null,inst_26195);
var state_26205__$1 = state_26205;
if(cljs.core.truth_(inst_26196)){
var statearr_26208_26348 = state_26205__$1;
(statearr_26208_26348[(1)] = (5));

} else {
var statearr_26209_26349 = state_26205__$1;
(statearr_26209_26349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (5))){
var state_26205__$1 = state_26205;
var statearr_26210_26350 = state_26205__$1;
(statearr_26210_26350[(2)] = null);

(statearr_26210_26350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (6))){
var state_26205__$1 = state_26205;
var statearr_26211_26351 = state_26205__$1;
(statearr_26211_26351[(2)] = null);

(statearr_26211_26351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26206 === (7))){
var inst_26201 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
var statearr_26212_26352 = state_26205__$1;
(statearr_26212_26352[(2)] = inst_26201);

(statearr_26212_26352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26334,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
;
return ((function (__26334,switch__19570__auto__,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_26216 = [null,null,null,null,null,null,null];
(statearr_26216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__);

(statearr_26216[(1)] = (1));

return statearr_26216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1 = (function (state_26205){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26217){if((e26217 instanceof Object)){
var ex__19574__auto__ = e26217;
var statearr_26218_26353 = state_26205;
(statearr_26218_26353[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26205;
state_26205 = G__26354;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__;
})()
;})(__26334,switch__19570__auto__,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
})();
var state__19637__auto__ = (function (){var statearr_26219 = f__19636__auto__.call(null);
(statearr_26219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___26346);

return statearr_26219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(__26334,c__19635__auto___26346,G__26165_26335,n__17336__auto___26333,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26355 = (__26334 + (1));
__26334 = G__26355;
continue;
} else {
}
break;
}

var c__19635__auto___26356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___26356,jobs,results,process,async){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___26356,jobs,results,process,async){
return (function (state_26241){
var state_val_26242 = (state_26241[(1)]);
if((state_val_26242 === (1))){
var state_26241__$1 = state_26241;
var statearr_26243_26357 = state_26241__$1;
(statearr_26243_26357[(2)] = null);

(statearr_26243_26357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (2))){
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(4),from);
} else {
if((state_val_26242 === (3))){
var inst_26239 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26241__$1,inst_26239);
} else {
if((state_val_26242 === (4))){
var inst_26222 = (state_26241[(7)]);
var inst_26222__$1 = (state_26241[(2)]);
var inst_26223 = (inst_26222__$1 == null);
var state_26241__$1 = (function (){var statearr_26244 = state_26241;
(statearr_26244[(7)] = inst_26222__$1);

return statearr_26244;
})();
if(cljs.core.truth_(inst_26223)){
var statearr_26245_26358 = state_26241__$1;
(statearr_26245_26358[(1)] = (5));

} else {
var statearr_26246_26359 = state_26241__$1;
(statearr_26246_26359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (5))){
var inst_26225 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26241__$1 = state_26241;
var statearr_26247_26360 = state_26241__$1;
(statearr_26247_26360[(2)] = inst_26225);

(statearr_26247_26360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (6))){
var inst_26227 = (state_26241[(8)]);
var inst_26222 = (state_26241[(7)]);
var inst_26227__$1 = cljs.core.async.chan.call(null,(1));
var inst_26228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26229 = [inst_26222,inst_26227__$1];
var inst_26230 = (new cljs.core.PersistentVector(null,2,(5),inst_26228,inst_26229,null));
var state_26241__$1 = (function (){var statearr_26248 = state_26241;
(statearr_26248[(8)] = inst_26227__$1);

return statearr_26248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26241__$1,(8),jobs,inst_26230);
} else {
if((state_val_26242 === (7))){
var inst_26237 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26249_26361 = state_26241__$1;
(statearr_26249_26361[(2)] = inst_26237);

(statearr_26249_26361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (8))){
var inst_26227 = (state_26241[(8)]);
var inst_26232 = (state_26241[(2)]);
var state_26241__$1 = (function (){var statearr_26250 = state_26241;
(statearr_26250[(9)] = inst_26232);

return statearr_26250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26241__$1,(9),results,inst_26227);
} else {
if((state_val_26242 === (9))){
var inst_26234 = (state_26241[(2)]);
var state_26241__$1 = (function (){var statearr_26251 = state_26241;
(statearr_26251[(10)] = inst_26234);

return statearr_26251;
})();
var statearr_26252_26362 = state_26241__$1;
(statearr_26252_26362[(2)] = null);

(statearr_26252_26362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___26356,jobs,results,process,async))
;
return ((function (switch__19570__auto__,c__19635__auto___26356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_26256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__);

(statearr_26256[(1)] = (1));

return statearr_26256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1 = (function (state_26241){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26257){if((e26257 instanceof Object)){
var ex__19574__auto__ = e26257;
var statearr_26258_26363 = state_26241;
(statearr_26258_26363[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26364 = state_26241;
state_26241 = G__26364;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = function(state_26241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1.call(this,state_26241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___26356,jobs,results,process,async))
})();
var state__19637__auto__ = (function (){var statearr_26259 = f__19636__auto__.call(null);
(statearr_26259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___26356);

return statearr_26259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___26356,jobs,results,process,async))
);


var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__,jobs,results,process,async){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__,jobs,results,process,async){
return (function (state_26297){
var state_val_26298 = (state_26297[(1)]);
if((state_val_26298 === (7))){
var inst_26293 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26299_26365 = state_26297__$1;
(statearr_26299_26365[(2)] = inst_26293);

(statearr_26299_26365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (20))){
var state_26297__$1 = state_26297;
var statearr_26300_26366 = state_26297__$1;
(statearr_26300_26366[(2)] = null);

(statearr_26300_26366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (1))){
var state_26297__$1 = state_26297;
var statearr_26301_26367 = state_26297__$1;
(statearr_26301_26367[(2)] = null);

(statearr_26301_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (4))){
var inst_26262 = (state_26297[(7)]);
var inst_26262__$1 = (state_26297[(2)]);
var inst_26263 = (inst_26262__$1 == null);
var state_26297__$1 = (function (){var statearr_26302 = state_26297;
(statearr_26302[(7)] = inst_26262__$1);

return statearr_26302;
})();
if(cljs.core.truth_(inst_26263)){
var statearr_26303_26368 = state_26297__$1;
(statearr_26303_26368[(1)] = (5));

} else {
var statearr_26304_26369 = state_26297__$1;
(statearr_26304_26369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (15))){
var inst_26275 = (state_26297[(8)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26297__$1,(18),to,inst_26275);
} else {
if((state_val_26298 === (21))){
var inst_26288 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26305_26370 = state_26297__$1;
(statearr_26305_26370[(2)] = inst_26288);

(statearr_26305_26370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (13))){
var inst_26290 = (state_26297[(2)]);
var state_26297__$1 = (function (){var statearr_26306 = state_26297;
(statearr_26306[(9)] = inst_26290);

return statearr_26306;
})();
var statearr_26307_26371 = state_26297__$1;
(statearr_26307_26371[(2)] = null);

(statearr_26307_26371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (6))){
var inst_26262 = (state_26297[(7)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(11),inst_26262);
} else {
if((state_val_26298 === (17))){
var inst_26283 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
if(cljs.core.truth_(inst_26283)){
var statearr_26308_26372 = state_26297__$1;
(statearr_26308_26372[(1)] = (19));

} else {
var statearr_26309_26373 = state_26297__$1;
(statearr_26309_26373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (3))){
var inst_26295 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26297__$1,inst_26295);
} else {
if((state_val_26298 === (12))){
var inst_26272 = (state_26297[(10)]);
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(14),inst_26272);
} else {
if((state_val_26298 === (2))){
var state_26297__$1 = state_26297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26297__$1,(4),results);
} else {
if((state_val_26298 === (19))){
var state_26297__$1 = state_26297;
var statearr_26310_26374 = state_26297__$1;
(statearr_26310_26374[(2)] = null);

(statearr_26310_26374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (11))){
var inst_26272 = (state_26297[(2)]);
var state_26297__$1 = (function (){var statearr_26311 = state_26297;
(statearr_26311[(10)] = inst_26272);

return statearr_26311;
})();
var statearr_26312_26375 = state_26297__$1;
(statearr_26312_26375[(2)] = null);

(statearr_26312_26375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (9))){
var state_26297__$1 = state_26297;
var statearr_26313_26376 = state_26297__$1;
(statearr_26313_26376[(2)] = null);

(statearr_26313_26376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (5))){
var state_26297__$1 = state_26297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26314_26377 = state_26297__$1;
(statearr_26314_26377[(1)] = (8));

} else {
var statearr_26315_26378 = state_26297__$1;
(statearr_26315_26378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (14))){
var inst_26275 = (state_26297[(8)]);
var inst_26277 = (state_26297[(11)]);
var inst_26275__$1 = (state_26297[(2)]);
var inst_26276 = (inst_26275__$1 == null);
var inst_26277__$1 = cljs.core.not.call(null,inst_26276);
var state_26297__$1 = (function (){var statearr_26316 = state_26297;
(statearr_26316[(8)] = inst_26275__$1);

(statearr_26316[(11)] = inst_26277__$1);

return statearr_26316;
})();
if(inst_26277__$1){
var statearr_26317_26379 = state_26297__$1;
(statearr_26317_26379[(1)] = (15));

} else {
var statearr_26318_26380 = state_26297__$1;
(statearr_26318_26380[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (16))){
var inst_26277 = (state_26297[(11)]);
var state_26297__$1 = state_26297;
var statearr_26319_26381 = state_26297__$1;
(statearr_26319_26381[(2)] = inst_26277);

(statearr_26319_26381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (10))){
var inst_26269 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26320_26382 = state_26297__$1;
(statearr_26320_26382[(2)] = inst_26269);

(statearr_26320_26382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (18))){
var inst_26280 = (state_26297[(2)]);
var state_26297__$1 = state_26297;
var statearr_26321_26383 = state_26297__$1;
(statearr_26321_26383[(2)] = inst_26280);

(statearr_26321_26383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26298 === (8))){
var inst_26266 = cljs.core.async.close_BANG_.call(null,to);
var state_26297__$1 = state_26297;
var statearr_26322_26384 = state_26297__$1;
(statearr_26322_26384[(2)] = inst_26266);

(statearr_26322_26384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto__,jobs,results,process,async))
;
return ((function (switch__19570__auto__,c__19635__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_26326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__);

(statearr_26326[(1)] = (1));

return statearr_26326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1 = (function (state_26297){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26327){if((e26327 instanceof Object)){
var ex__19574__auto__ = e26327;
var statearr_26328_26385 = state_26297;
(statearr_26328_26385[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26386 = state_26297;
state_26297 = G__26386;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__ = function(state_26297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1.call(this,state_26297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__,jobs,results,process,async))
})();
var state__19637__auto__ = (function (){var statearr_26329 = f__19636__auto__.call(null);
(statearr_26329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_26329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__,jobs,results,process,async))
);

return c__19635__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args26387 = [];
var len__17491__auto___26390 = arguments.length;
var i__17492__auto___26391 = (0);
while(true){
if((i__17492__auto___26391 < len__17491__auto___26390)){
args26387.push((arguments[i__17492__auto___26391]));

var G__26392 = (i__17492__auto___26391 + (1));
i__17492__auto___26391 = G__26392;
continue;
} else {
}
break;
}

var G__26389 = args26387.length;
switch (G__26389) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26387.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args26394 = [];
var len__17491__auto___26397 = arguments.length;
var i__17492__auto___26398 = (0);
while(true){
if((i__17492__auto___26398 < len__17491__auto___26397)){
args26394.push((arguments[i__17492__auto___26398]));

var G__26399 = (i__17492__auto___26398 + (1));
i__17492__auto___26398 = G__26399;
continue;
} else {
}
break;
}

var G__26396 = args26394.length;
switch (G__26396) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26394.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args26401 = [];
var len__17491__auto___26454 = arguments.length;
var i__17492__auto___26455 = (0);
while(true){
if((i__17492__auto___26455 < len__17491__auto___26454)){
args26401.push((arguments[i__17492__auto___26455]));

var G__26456 = (i__17492__auto___26455 + (1));
i__17492__auto___26455 = G__26456;
continue;
} else {
}
break;
}

var G__26403 = args26401.length;
switch (G__26403) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26401.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19635__auto___26458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___26458,tc,fc){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___26458,tc,fc){
return (function (state_26429){
var state_val_26430 = (state_26429[(1)]);
if((state_val_26430 === (7))){
var inst_26425 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26431_26459 = state_26429__$1;
(statearr_26431_26459[(2)] = inst_26425);

(statearr_26431_26459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (1))){
var state_26429__$1 = state_26429;
var statearr_26432_26460 = state_26429__$1;
(statearr_26432_26460[(2)] = null);

(statearr_26432_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (4))){
var inst_26406 = (state_26429[(7)]);
var inst_26406__$1 = (state_26429[(2)]);
var inst_26407 = (inst_26406__$1 == null);
var state_26429__$1 = (function (){var statearr_26433 = state_26429;
(statearr_26433[(7)] = inst_26406__$1);

return statearr_26433;
})();
if(cljs.core.truth_(inst_26407)){
var statearr_26434_26461 = state_26429__$1;
(statearr_26434_26461[(1)] = (5));

} else {
var statearr_26435_26462 = state_26429__$1;
(statearr_26435_26462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (13))){
var state_26429__$1 = state_26429;
var statearr_26436_26463 = state_26429__$1;
(statearr_26436_26463[(2)] = null);

(statearr_26436_26463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (6))){
var inst_26406 = (state_26429[(7)]);
var inst_26412 = p.call(null,inst_26406);
var state_26429__$1 = state_26429;
if(cljs.core.truth_(inst_26412)){
var statearr_26437_26464 = state_26429__$1;
(statearr_26437_26464[(1)] = (9));

} else {
var statearr_26438_26465 = state_26429__$1;
(statearr_26438_26465[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (3))){
var inst_26427 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26429__$1,inst_26427);
} else {
if((state_val_26430 === (12))){
var state_26429__$1 = state_26429;
var statearr_26439_26466 = state_26429__$1;
(statearr_26439_26466[(2)] = null);

(statearr_26439_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (2))){
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26429__$1,(4),ch);
} else {
if((state_val_26430 === (11))){
var inst_26406 = (state_26429[(7)]);
var inst_26416 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26429__$1,(8),inst_26416,inst_26406);
} else {
if((state_val_26430 === (9))){
var state_26429__$1 = state_26429;
var statearr_26440_26467 = state_26429__$1;
(statearr_26440_26467[(2)] = tc);

(statearr_26440_26467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (5))){
var inst_26409 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26410 = cljs.core.async.close_BANG_.call(null,fc);
var state_26429__$1 = (function (){var statearr_26441 = state_26429;
(statearr_26441[(8)] = inst_26409);

return statearr_26441;
})();
var statearr_26442_26468 = state_26429__$1;
(statearr_26442_26468[(2)] = inst_26410);

(statearr_26442_26468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (14))){
var inst_26423 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
var statearr_26443_26469 = state_26429__$1;
(statearr_26443_26469[(2)] = inst_26423);

(statearr_26443_26469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (10))){
var state_26429__$1 = state_26429;
var statearr_26444_26470 = state_26429__$1;
(statearr_26444_26470[(2)] = fc);

(statearr_26444_26470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26430 === (8))){
var inst_26418 = (state_26429[(2)]);
var state_26429__$1 = state_26429;
if(cljs.core.truth_(inst_26418)){
var statearr_26445_26471 = state_26429__$1;
(statearr_26445_26471[(1)] = (12));

} else {
var statearr_26446_26472 = state_26429__$1;
(statearr_26446_26472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___26458,tc,fc))
;
return ((function (switch__19570__auto__,c__19635__auto___26458,tc,fc){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_26450 = [null,null,null,null,null,null,null,null,null];
(statearr_26450[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_26450[(1)] = (1));

return statearr_26450;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_26429){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26451){if((e26451 instanceof Object)){
var ex__19574__auto__ = e26451;
var statearr_26452_26473 = state_26429;
(statearr_26452_26473[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26474 = state_26429;
state_26429 = G__26474;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_26429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_26429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___26458,tc,fc))
})();
var state__19637__auto__ = (function (){var statearr_26453 = f__19636__auto__.call(null);
(statearr_26453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___26458);

return statearr_26453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___26458,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__){
return (function (state_26521){
var state_val_26522 = (state_26521[(1)]);
if((state_val_26522 === (1))){
var inst_26507 = init;
var state_26521__$1 = (function (){var statearr_26523 = state_26521;
(statearr_26523[(7)] = inst_26507);

return statearr_26523;
})();
var statearr_26524_26539 = state_26521__$1;
(statearr_26524_26539[(2)] = null);

(statearr_26524_26539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (2))){
var state_26521__$1 = state_26521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26521__$1,(4),ch);
} else {
if((state_val_26522 === (3))){
var inst_26519 = (state_26521[(2)]);
var state_26521__$1 = state_26521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26521__$1,inst_26519);
} else {
if((state_val_26522 === (4))){
var inst_26510 = (state_26521[(8)]);
var inst_26510__$1 = (state_26521[(2)]);
var inst_26511 = (inst_26510__$1 == null);
var state_26521__$1 = (function (){var statearr_26525 = state_26521;
(statearr_26525[(8)] = inst_26510__$1);

return statearr_26525;
})();
if(cljs.core.truth_(inst_26511)){
var statearr_26526_26540 = state_26521__$1;
(statearr_26526_26540[(1)] = (5));

} else {
var statearr_26527_26541 = state_26521__$1;
(statearr_26527_26541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (5))){
var inst_26507 = (state_26521[(7)]);
var state_26521__$1 = state_26521;
var statearr_26528_26542 = state_26521__$1;
(statearr_26528_26542[(2)] = inst_26507);

(statearr_26528_26542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (6))){
var inst_26510 = (state_26521[(8)]);
var inst_26507 = (state_26521[(7)]);
var inst_26514 = f.call(null,inst_26507,inst_26510);
var inst_26507__$1 = inst_26514;
var state_26521__$1 = (function (){var statearr_26529 = state_26521;
(statearr_26529[(7)] = inst_26507__$1);

return statearr_26529;
})();
var statearr_26530_26543 = state_26521__$1;
(statearr_26530_26543[(2)] = null);

(statearr_26530_26543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26522 === (7))){
var inst_26517 = (state_26521[(2)]);
var state_26521__$1 = state_26521;
var statearr_26531_26544 = state_26521__$1;
(statearr_26531_26544[(2)] = inst_26517);

(statearr_26531_26544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19635__auto__))
;
return ((function (switch__19570__auto__,c__19635__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19571__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19571__auto____0 = (function (){
var statearr_26535 = [null,null,null,null,null,null,null,null,null];
(statearr_26535[(0)] = cljs$core$async$reduce_$_state_machine__19571__auto__);

(statearr_26535[(1)] = (1));

return statearr_26535;
});
var cljs$core$async$reduce_$_state_machine__19571__auto____1 = (function (state_26521){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object)){
var ex__19574__auto__ = e26536;
var statearr_26537_26545 = state_26521;
(statearr_26537_26545[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26546 = state_26521;
state_26521 = G__26546;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19571__auto__ = function(state_26521){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19571__auto____1.call(this,state_26521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19571__auto____0;
cljs$core$async$reduce_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19571__auto____1;
return cljs$core$async$reduce_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__))
})();
var state__19637__auto__ = (function (){var statearr_26538 = f__19636__auto__.call(null);
(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_26538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__))
);

return c__19635__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args26547 = [];
var len__17491__auto___26599 = arguments.length;
var i__17492__auto___26600 = (0);
while(true){
if((i__17492__auto___26600 < len__17491__auto___26599)){
args26547.push((arguments[i__17492__auto___26600]));

var G__26601 = (i__17492__auto___26600 + (1));
i__17492__auto___26600 = G__26601;
continue;
} else {
}
break;
}

var G__26549 = args26547.length;
switch (G__26549) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26547.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__){
return (function (state_26574){
var state_val_26575 = (state_26574[(1)]);
if((state_val_26575 === (7))){
var inst_26556 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26576_26603 = state_26574__$1;
(statearr_26576_26603[(2)] = inst_26556);

(statearr_26576_26603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (1))){
var inst_26550 = cljs.core.seq.call(null,coll);
var inst_26551 = inst_26550;
var state_26574__$1 = (function (){var statearr_26577 = state_26574;
(statearr_26577[(7)] = inst_26551);

return statearr_26577;
})();
var statearr_26578_26604 = state_26574__$1;
(statearr_26578_26604[(2)] = null);

(statearr_26578_26604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (4))){
var inst_26551 = (state_26574[(7)]);
var inst_26554 = cljs.core.first.call(null,inst_26551);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26574__$1,(7),ch,inst_26554);
} else {
if((state_val_26575 === (13))){
var inst_26568 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26579_26605 = state_26574__$1;
(statearr_26579_26605[(2)] = inst_26568);

(statearr_26579_26605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (6))){
var inst_26559 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26559)){
var statearr_26580_26606 = state_26574__$1;
(statearr_26580_26606[(1)] = (8));

} else {
var statearr_26581_26607 = state_26574__$1;
(statearr_26581_26607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (3))){
var inst_26572 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26574__$1,inst_26572);
} else {
if((state_val_26575 === (12))){
var state_26574__$1 = state_26574;
var statearr_26582_26608 = state_26574__$1;
(statearr_26582_26608[(2)] = null);

(statearr_26582_26608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (2))){
var inst_26551 = (state_26574[(7)]);
var state_26574__$1 = state_26574;
if(cljs.core.truth_(inst_26551)){
var statearr_26583_26609 = state_26574__$1;
(statearr_26583_26609[(1)] = (4));

} else {
var statearr_26584_26610 = state_26574__$1;
(statearr_26584_26610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (11))){
var inst_26565 = cljs.core.async.close_BANG_.call(null,ch);
var state_26574__$1 = state_26574;
var statearr_26585_26611 = state_26574__$1;
(statearr_26585_26611[(2)] = inst_26565);

(statearr_26585_26611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (9))){
var state_26574__$1 = state_26574;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26586_26612 = state_26574__$1;
(statearr_26586_26612[(1)] = (11));

} else {
var statearr_26587_26613 = state_26574__$1;
(statearr_26587_26613[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (5))){
var inst_26551 = (state_26574[(7)]);
var state_26574__$1 = state_26574;
var statearr_26588_26614 = state_26574__$1;
(statearr_26588_26614[(2)] = inst_26551);

(statearr_26588_26614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (10))){
var inst_26570 = (state_26574[(2)]);
var state_26574__$1 = state_26574;
var statearr_26589_26615 = state_26574__$1;
(statearr_26589_26615[(2)] = inst_26570);

(statearr_26589_26615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26575 === (8))){
var inst_26551 = (state_26574[(7)]);
var inst_26561 = cljs.core.next.call(null,inst_26551);
var inst_26551__$1 = inst_26561;
var state_26574__$1 = (function (){var statearr_26590 = state_26574;
(statearr_26590[(7)] = inst_26551__$1);

return statearr_26590;
})();
var statearr_26591_26616 = state_26574__$1;
(statearr_26591_26616[(2)] = null);

(statearr_26591_26616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto__))
;
return ((function (switch__19570__auto__,c__19635__auto__){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_26595 = [null,null,null,null,null,null,null,null];
(statearr_26595[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_26595[(1)] = (1));

return statearr_26595;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_26574){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e26596){if((e26596 instanceof Object)){
var ex__19574__auto__ = e26596;
var statearr_26597_26617 = state_26574;
(statearr_26597_26617[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26618 = state_26574;
state_26574 = G__26618;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_26574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_26574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__))
})();
var state__19637__auto__ = (function (){var statearr_26598 = f__19636__auto__.call(null);
(statearr_26598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_26598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__))
);

return c__19635__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17088__auto__ = (((_ == null))?null:_);
var m__17089__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,_);
} else {
var m__17089__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17089__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,ch);
} else {
var m__17089__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m);
} else {
var m__17089__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26844 = (function (mult,ch,cs,meta26845){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26845 = meta26845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26846,meta26845__$1){
var self__ = this;
var _26846__$1 = this;
return (new cljs.core.async.t26844(self__.mult,self__.ch,self__.cs,meta26845__$1));
});})(cs))
;

cljs.core.async.t26844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26846){
var self__ = this;
var _26846__$1 = this;
return self__.meta26845;
});})(cs))
;

cljs.core.async.t26844.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26844.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26844.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26844.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26844.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26844.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26845","meta26845",74707340,null)], null);
});})(cs))
;

cljs.core.async.t26844.cljs$lang$type = true;

cljs.core.async.t26844.cljs$lang$ctorStr = "cljs.core.async/t26844";

cljs.core.async.t26844.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t26844");
});})(cs))
;

cljs.core.async.__GT_t26844 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26844(mult__$1,ch__$1,cs__$1,meta26845){
return (new cljs.core.async.t26844(mult__$1,ch__$1,cs__$1,meta26845));
});})(cs))
;

}

return (new cljs.core.async.t26844(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19635__auto___27065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27065,cs,m,dchan,dctr,done){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27065,cs,m,dchan,dctr,done){
return (function (state_26977){
var state_val_26978 = (state_26977[(1)]);
if((state_val_26978 === (7))){
var inst_26973 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_26979_27066 = state_26977__$1;
(statearr_26979_27066[(2)] = inst_26973);

(statearr_26979_27066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (20))){
var inst_26878 = (state_26977[(7)]);
var inst_26888 = cljs.core.first.call(null,inst_26878);
var inst_26889 = cljs.core.nth.call(null,inst_26888,(0),null);
var inst_26890 = cljs.core.nth.call(null,inst_26888,(1),null);
var state_26977__$1 = (function (){var statearr_26980 = state_26977;
(statearr_26980[(8)] = inst_26889);

return statearr_26980;
})();
if(cljs.core.truth_(inst_26890)){
var statearr_26981_27067 = state_26977__$1;
(statearr_26981_27067[(1)] = (22));

} else {
var statearr_26982_27068 = state_26977__$1;
(statearr_26982_27068[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (27))){
var inst_26925 = (state_26977[(9)]);
var inst_26849 = (state_26977[(10)]);
var inst_26920 = (state_26977[(11)]);
var inst_26918 = (state_26977[(12)]);
var inst_26925__$1 = cljs.core._nth.call(null,inst_26918,inst_26920);
var inst_26926 = cljs.core.async.put_BANG_.call(null,inst_26925__$1,inst_26849,done);
var state_26977__$1 = (function (){var statearr_26983 = state_26977;
(statearr_26983[(9)] = inst_26925__$1);

return statearr_26983;
})();
if(cljs.core.truth_(inst_26926)){
var statearr_26984_27069 = state_26977__$1;
(statearr_26984_27069[(1)] = (30));

} else {
var statearr_26985_27070 = state_26977__$1;
(statearr_26985_27070[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (1))){
var state_26977__$1 = state_26977;
var statearr_26986_27071 = state_26977__$1;
(statearr_26986_27071[(2)] = null);

(statearr_26986_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (24))){
var inst_26878 = (state_26977[(7)]);
var inst_26895 = (state_26977[(2)]);
var inst_26896 = cljs.core.next.call(null,inst_26878);
var inst_26858 = inst_26896;
var inst_26859 = null;
var inst_26860 = (0);
var inst_26861 = (0);
var state_26977__$1 = (function (){var statearr_26987 = state_26977;
(statearr_26987[(13)] = inst_26861);

(statearr_26987[(14)] = inst_26859);

(statearr_26987[(15)] = inst_26895);

(statearr_26987[(16)] = inst_26860);

(statearr_26987[(17)] = inst_26858);

return statearr_26987;
})();
var statearr_26988_27072 = state_26977__$1;
(statearr_26988_27072[(2)] = null);

(statearr_26988_27072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (39))){
var state_26977__$1 = state_26977;
var statearr_26992_27073 = state_26977__$1;
(statearr_26992_27073[(2)] = null);

(statearr_26992_27073[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (4))){
var inst_26849 = (state_26977[(10)]);
var inst_26849__$1 = (state_26977[(2)]);
var inst_26850 = (inst_26849__$1 == null);
var state_26977__$1 = (function (){var statearr_26993 = state_26977;
(statearr_26993[(10)] = inst_26849__$1);

return statearr_26993;
})();
if(cljs.core.truth_(inst_26850)){
var statearr_26994_27074 = state_26977__$1;
(statearr_26994_27074[(1)] = (5));

} else {
var statearr_26995_27075 = state_26977__$1;
(statearr_26995_27075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (15))){
var inst_26861 = (state_26977[(13)]);
var inst_26859 = (state_26977[(14)]);
var inst_26860 = (state_26977[(16)]);
var inst_26858 = (state_26977[(17)]);
var inst_26874 = (state_26977[(2)]);
var inst_26875 = (inst_26861 + (1));
var tmp26989 = inst_26859;
var tmp26990 = inst_26860;
var tmp26991 = inst_26858;
var inst_26858__$1 = tmp26991;
var inst_26859__$1 = tmp26989;
var inst_26860__$1 = tmp26990;
var inst_26861__$1 = inst_26875;
var state_26977__$1 = (function (){var statearr_26996 = state_26977;
(statearr_26996[(13)] = inst_26861__$1);

(statearr_26996[(14)] = inst_26859__$1);

(statearr_26996[(16)] = inst_26860__$1);

(statearr_26996[(17)] = inst_26858__$1);

(statearr_26996[(18)] = inst_26874);

return statearr_26996;
})();
var statearr_26997_27076 = state_26977__$1;
(statearr_26997_27076[(2)] = null);

(statearr_26997_27076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (21))){
var inst_26899 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27001_27077 = state_26977__$1;
(statearr_27001_27077[(2)] = inst_26899);

(statearr_27001_27077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (31))){
var inst_26925 = (state_26977[(9)]);
var inst_26929 = done.call(null,null);
var inst_26930 = cljs.core.async.untap_STAR_.call(null,m,inst_26925);
var state_26977__$1 = (function (){var statearr_27002 = state_26977;
(statearr_27002[(19)] = inst_26929);

return statearr_27002;
})();
var statearr_27003_27078 = state_26977__$1;
(statearr_27003_27078[(2)] = inst_26930);

(statearr_27003_27078[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (32))){
var inst_26920 = (state_26977[(11)]);
var inst_26919 = (state_26977[(20)]);
var inst_26917 = (state_26977[(21)]);
var inst_26918 = (state_26977[(12)]);
var inst_26932 = (state_26977[(2)]);
var inst_26933 = (inst_26920 + (1));
var tmp26998 = inst_26919;
var tmp26999 = inst_26917;
var tmp27000 = inst_26918;
var inst_26917__$1 = tmp26999;
var inst_26918__$1 = tmp27000;
var inst_26919__$1 = tmp26998;
var inst_26920__$1 = inst_26933;
var state_26977__$1 = (function (){var statearr_27004 = state_26977;
(statearr_27004[(11)] = inst_26920__$1);

(statearr_27004[(20)] = inst_26919__$1);

(statearr_27004[(21)] = inst_26917__$1);

(statearr_27004[(12)] = inst_26918__$1);

(statearr_27004[(22)] = inst_26932);

return statearr_27004;
})();
var statearr_27005_27079 = state_26977__$1;
(statearr_27005_27079[(2)] = null);

(statearr_27005_27079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (40))){
var inst_26945 = (state_26977[(23)]);
var inst_26949 = done.call(null,null);
var inst_26950 = cljs.core.async.untap_STAR_.call(null,m,inst_26945);
var state_26977__$1 = (function (){var statearr_27006 = state_26977;
(statearr_27006[(24)] = inst_26949);

return statearr_27006;
})();
var statearr_27007_27080 = state_26977__$1;
(statearr_27007_27080[(2)] = inst_26950);

(statearr_27007_27080[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (33))){
var inst_26936 = (state_26977[(25)]);
var inst_26938 = cljs.core.chunked_seq_QMARK_.call(null,inst_26936);
var state_26977__$1 = state_26977;
if(inst_26938){
var statearr_27008_27081 = state_26977__$1;
(statearr_27008_27081[(1)] = (36));

} else {
var statearr_27009_27082 = state_26977__$1;
(statearr_27009_27082[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (13))){
var inst_26868 = (state_26977[(26)]);
var inst_26871 = cljs.core.async.close_BANG_.call(null,inst_26868);
var state_26977__$1 = state_26977;
var statearr_27010_27083 = state_26977__$1;
(statearr_27010_27083[(2)] = inst_26871);

(statearr_27010_27083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (22))){
var inst_26889 = (state_26977[(8)]);
var inst_26892 = cljs.core.async.close_BANG_.call(null,inst_26889);
var state_26977__$1 = state_26977;
var statearr_27011_27084 = state_26977__$1;
(statearr_27011_27084[(2)] = inst_26892);

(statearr_27011_27084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (36))){
var inst_26936 = (state_26977[(25)]);
var inst_26940 = cljs.core.chunk_first.call(null,inst_26936);
var inst_26941 = cljs.core.chunk_rest.call(null,inst_26936);
var inst_26942 = cljs.core.count.call(null,inst_26940);
var inst_26917 = inst_26941;
var inst_26918 = inst_26940;
var inst_26919 = inst_26942;
var inst_26920 = (0);
var state_26977__$1 = (function (){var statearr_27012 = state_26977;
(statearr_27012[(11)] = inst_26920);

(statearr_27012[(20)] = inst_26919);

(statearr_27012[(21)] = inst_26917);

(statearr_27012[(12)] = inst_26918);

return statearr_27012;
})();
var statearr_27013_27085 = state_26977__$1;
(statearr_27013_27085[(2)] = null);

(statearr_27013_27085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (41))){
var inst_26936 = (state_26977[(25)]);
var inst_26952 = (state_26977[(2)]);
var inst_26953 = cljs.core.next.call(null,inst_26936);
var inst_26917 = inst_26953;
var inst_26918 = null;
var inst_26919 = (0);
var inst_26920 = (0);
var state_26977__$1 = (function (){var statearr_27014 = state_26977;
(statearr_27014[(11)] = inst_26920);

(statearr_27014[(27)] = inst_26952);

(statearr_27014[(20)] = inst_26919);

(statearr_27014[(21)] = inst_26917);

(statearr_27014[(12)] = inst_26918);

return statearr_27014;
})();
var statearr_27015_27086 = state_26977__$1;
(statearr_27015_27086[(2)] = null);

(statearr_27015_27086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (43))){
var state_26977__$1 = state_26977;
var statearr_27016_27087 = state_26977__$1;
(statearr_27016_27087[(2)] = null);

(statearr_27016_27087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (29))){
var inst_26961 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27017_27088 = state_26977__$1;
(statearr_27017_27088[(2)] = inst_26961);

(statearr_27017_27088[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (44))){
var inst_26970 = (state_26977[(2)]);
var state_26977__$1 = (function (){var statearr_27018 = state_26977;
(statearr_27018[(28)] = inst_26970);

return statearr_27018;
})();
var statearr_27019_27089 = state_26977__$1;
(statearr_27019_27089[(2)] = null);

(statearr_27019_27089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (6))){
var inst_26909 = (state_26977[(29)]);
var inst_26908 = cljs.core.deref.call(null,cs);
var inst_26909__$1 = cljs.core.keys.call(null,inst_26908);
var inst_26910 = cljs.core.count.call(null,inst_26909__$1);
var inst_26911 = cljs.core.reset_BANG_.call(null,dctr,inst_26910);
var inst_26916 = cljs.core.seq.call(null,inst_26909__$1);
var inst_26917 = inst_26916;
var inst_26918 = null;
var inst_26919 = (0);
var inst_26920 = (0);
var state_26977__$1 = (function (){var statearr_27020 = state_26977;
(statearr_27020[(11)] = inst_26920);

(statearr_27020[(20)] = inst_26919);

(statearr_27020[(21)] = inst_26917);

(statearr_27020[(30)] = inst_26911);

(statearr_27020[(12)] = inst_26918);

(statearr_27020[(29)] = inst_26909__$1);

return statearr_27020;
})();
var statearr_27021_27090 = state_26977__$1;
(statearr_27021_27090[(2)] = null);

(statearr_27021_27090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (28))){
var inst_26917 = (state_26977[(21)]);
var inst_26936 = (state_26977[(25)]);
var inst_26936__$1 = cljs.core.seq.call(null,inst_26917);
var state_26977__$1 = (function (){var statearr_27022 = state_26977;
(statearr_27022[(25)] = inst_26936__$1);

return statearr_27022;
})();
if(inst_26936__$1){
var statearr_27023_27091 = state_26977__$1;
(statearr_27023_27091[(1)] = (33));

} else {
var statearr_27024_27092 = state_26977__$1;
(statearr_27024_27092[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (25))){
var inst_26920 = (state_26977[(11)]);
var inst_26919 = (state_26977[(20)]);
var inst_26922 = (inst_26920 < inst_26919);
var inst_26923 = inst_26922;
var state_26977__$1 = state_26977;
if(cljs.core.truth_(inst_26923)){
var statearr_27025_27093 = state_26977__$1;
(statearr_27025_27093[(1)] = (27));

} else {
var statearr_27026_27094 = state_26977__$1;
(statearr_27026_27094[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (34))){
var state_26977__$1 = state_26977;
var statearr_27027_27095 = state_26977__$1;
(statearr_27027_27095[(2)] = null);

(statearr_27027_27095[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (17))){
var state_26977__$1 = state_26977;
var statearr_27028_27096 = state_26977__$1;
(statearr_27028_27096[(2)] = null);

(statearr_27028_27096[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (3))){
var inst_26975 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26977__$1,inst_26975);
} else {
if((state_val_26978 === (12))){
var inst_26904 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27029_27097 = state_26977__$1;
(statearr_27029_27097[(2)] = inst_26904);

(statearr_27029_27097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (2))){
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26977__$1,(4),ch);
} else {
if((state_val_26978 === (23))){
var state_26977__$1 = state_26977;
var statearr_27030_27098 = state_26977__$1;
(statearr_27030_27098[(2)] = null);

(statearr_27030_27098[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (35))){
var inst_26959 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27031_27099 = state_26977__$1;
(statearr_27031_27099[(2)] = inst_26959);

(statearr_27031_27099[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (19))){
var inst_26878 = (state_26977[(7)]);
var inst_26882 = cljs.core.chunk_first.call(null,inst_26878);
var inst_26883 = cljs.core.chunk_rest.call(null,inst_26878);
var inst_26884 = cljs.core.count.call(null,inst_26882);
var inst_26858 = inst_26883;
var inst_26859 = inst_26882;
var inst_26860 = inst_26884;
var inst_26861 = (0);
var state_26977__$1 = (function (){var statearr_27032 = state_26977;
(statearr_27032[(13)] = inst_26861);

(statearr_27032[(14)] = inst_26859);

(statearr_27032[(16)] = inst_26860);

(statearr_27032[(17)] = inst_26858);

return statearr_27032;
})();
var statearr_27033_27100 = state_26977__$1;
(statearr_27033_27100[(2)] = null);

(statearr_27033_27100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (11))){
var inst_26858 = (state_26977[(17)]);
var inst_26878 = (state_26977[(7)]);
var inst_26878__$1 = cljs.core.seq.call(null,inst_26858);
var state_26977__$1 = (function (){var statearr_27034 = state_26977;
(statearr_27034[(7)] = inst_26878__$1);

return statearr_27034;
})();
if(inst_26878__$1){
var statearr_27035_27101 = state_26977__$1;
(statearr_27035_27101[(1)] = (16));

} else {
var statearr_27036_27102 = state_26977__$1;
(statearr_27036_27102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (9))){
var inst_26906 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27037_27103 = state_26977__$1;
(statearr_27037_27103[(2)] = inst_26906);

(statearr_27037_27103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (5))){
var inst_26856 = cljs.core.deref.call(null,cs);
var inst_26857 = cljs.core.seq.call(null,inst_26856);
var inst_26858 = inst_26857;
var inst_26859 = null;
var inst_26860 = (0);
var inst_26861 = (0);
var state_26977__$1 = (function (){var statearr_27038 = state_26977;
(statearr_27038[(13)] = inst_26861);

(statearr_27038[(14)] = inst_26859);

(statearr_27038[(16)] = inst_26860);

(statearr_27038[(17)] = inst_26858);

return statearr_27038;
})();
var statearr_27039_27104 = state_26977__$1;
(statearr_27039_27104[(2)] = null);

(statearr_27039_27104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (14))){
var state_26977__$1 = state_26977;
var statearr_27040_27105 = state_26977__$1;
(statearr_27040_27105[(2)] = null);

(statearr_27040_27105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (45))){
var inst_26967 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27041_27106 = state_26977__$1;
(statearr_27041_27106[(2)] = inst_26967);

(statearr_27041_27106[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (26))){
var inst_26909 = (state_26977[(29)]);
var inst_26963 = (state_26977[(2)]);
var inst_26964 = cljs.core.seq.call(null,inst_26909);
var state_26977__$1 = (function (){var statearr_27042 = state_26977;
(statearr_27042[(31)] = inst_26963);

return statearr_27042;
})();
if(inst_26964){
var statearr_27043_27107 = state_26977__$1;
(statearr_27043_27107[(1)] = (42));

} else {
var statearr_27044_27108 = state_26977__$1;
(statearr_27044_27108[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (16))){
var inst_26878 = (state_26977[(7)]);
var inst_26880 = cljs.core.chunked_seq_QMARK_.call(null,inst_26878);
var state_26977__$1 = state_26977;
if(inst_26880){
var statearr_27045_27109 = state_26977__$1;
(statearr_27045_27109[(1)] = (19));

} else {
var statearr_27046_27110 = state_26977__$1;
(statearr_27046_27110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (38))){
var inst_26956 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27047_27111 = state_26977__$1;
(statearr_27047_27111[(2)] = inst_26956);

(statearr_27047_27111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (30))){
var state_26977__$1 = state_26977;
var statearr_27048_27112 = state_26977__$1;
(statearr_27048_27112[(2)] = null);

(statearr_27048_27112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (10))){
var inst_26861 = (state_26977[(13)]);
var inst_26859 = (state_26977[(14)]);
var inst_26867 = cljs.core._nth.call(null,inst_26859,inst_26861);
var inst_26868 = cljs.core.nth.call(null,inst_26867,(0),null);
var inst_26869 = cljs.core.nth.call(null,inst_26867,(1),null);
var state_26977__$1 = (function (){var statearr_27049 = state_26977;
(statearr_27049[(26)] = inst_26868);

return statearr_27049;
})();
if(cljs.core.truth_(inst_26869)){
var statearr_27050_27113 = state_26977__$1;
(statearr_27050_27113[(1)] = (13));

} else {
var statearr_27051_27114 = state_26977__$1;
(statearr_27051_27114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (18))){
var inst_26902 = (state_26977[(2)]);
var state_26977__$1 = state_26977;
var statearr_27052_27115 = state_26977__$1;
(statearr_27052_27115[(2)] = inst_26902);

(statearr_27052_27115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (42))){
var state_26977__$1 = state_26977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26977__$1,(45),dchan);
} else {
if((state_val_26978 === (37))){
var inst_26849 = (state_26977[(10)]);
var inst_26945 = (state_26977[(23)]);
var inst_26936 = (state_26977[(25)]);
var inst_26945__$1 = cljs.core.first.call(null,inst_26936);
var inst_26946 = cljs.core.async.put_BANG_.call(null,inst_26945__$1,inst_26849,done);
var state_26977__$1 = (function (){var statearr_27053 = state_26977;
(statearr_27053[(23)] = inst_26945__$1);

return statearr_27053;
})();
if(cljs.core.truth_(inst_26946)){
var statearr_27054_27116 = state_26977__$1;
(statearr_27054_27116[(1)] = (39));

} else {
var statearr_27055_27117 = state_26977__$1;
(statearr_27055_27117[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26978 === (8))){
var inst_26861 = (state_26977[(13)]);
var inst_26860 = (state_26977[(16)]);
var inst_26863 = (inst_26861 < inst_26860);
var inst_26864 = inst_26863;
var state_26977__$1 = state_26977;
if(cljs.core.truth_(inst_26864)){
var statearr_27056_27118 = state_26977__$1;
(statearr_27056_27118[(1)] = (10));

} else {
var statearr_27057_27119 = state_26977__$1;
(statearr_27057_27119[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27065,cs,m,dchan,dctr,done))
;
return ((function (switch__19570__auto__,c__19635__auto___27065,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19571__auto__ = null;
var cljs$core$async$mult_$_state_machine__19571__auto____0 = (function (){
var statearr_27061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27061[(0)] = cljs$core$async$mult_$_state_machine__19571__auto__);

(statearr_27061[(1)] = (1));

return statearr_27061;
});
var cljs$core$async$mult_$_state_machine__19571__auto____1 = (function (state_26977){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_26977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27062){if((e27062 instanceof Object)){
var ex__19574__auto__ = e27062;
var statearr_27063_27120 = state_26977;
(statearr_27063_27120[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27121 = state_26977;
state_26977 = G__27121;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19571__auto__ = function(state_26977){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19571__auto____1.call(this,state_26977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19571__auto____0;
cljs$core$async$mult_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19571__auto____1;
return cljs$core$async$mult_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27065,cs,m,dchan,dctr,done))
})();
var state__19637__auto__ = (function (){var statearr_27064 = f__19636__auto__.call(null);
(statearr_27064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27065);

return statearr_27064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27065,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args27122 = [];
var len__17491__auto___27125 = arguments.length;
var i__17492__auto___27126 = (0);
while(true){
if((i__17492__auto___27126 < len__17491__auto___27125)){
args27122.push((arguments[i__17492__auto___27126]));

var G__27127 = (i__17492__auto___27126 + (1));
i__17492__auto___27126 = G__27127;
continue;
} else {
}
break;
}

var G__27124 = args27122.length;
switch (G__27124) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27122.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,ch);
} else {
var m__17089__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,ch);
} else {
var m__17089__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m);
} else {
var m__17089__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,state_map);
} else {
var m__17089__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17088__auto__ = (((m == null))?null:m);
var m__17089__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,m,mode);
} else {
var m__17089__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17498__auto__ = [];
var len__17491__auto___27141 = arguments.length;
var i__17492__auto___27142 = (0);
while(true){
if((i__17492__auto___27142 < len__17491__auto___27141)){
args__17498__auto__.push((arguments[i__17492__auto___27142]));

var G__27143 = (i__17492__auto___27142 + (1));
i__17492__auto___27142 = G__27143;
continue;
} else {
}
break;
}

var argseq__17499__auto__ = ((((3) < args__17498__auto__.length))?(new cljs.core.IndexedSeq(args__17498__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17499__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27135){
var map__27136 = p__27135;
var map__27136__$1 = ((((!((map__27136 == null)))?((((map__27136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27136):map__27136);
var opts = map__27136__$1;
var statearr_27138_27144 = state;
(statearr_27138_27144[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27136,map__27136__$1,opts){
return (function (val){
var statearr_27139_27145 = state;
(statearr_27139_27145[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27136,map__27136__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27140_27146 = state;
(statearr_27140_27146[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27131){
var G__27132 = cljs.core.first.call(null,seq27131);
var seq27131__$1 = cljs.core.next.call(null,seq27131);
var G__27133 = cljs.core.first.call(null,seq27131__$1);
var seq27131__$2 = cljs.core.next.call(null,seq27131__$1);
var G__27134 = cljs.core.first.call(null,seq27131__$2);
var seq27131__$3 = cljs.core.next.call(null,seq27131__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27132,G__27133,G__27134,seq27131__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27310 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27310 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27311){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27311 = meta27311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27312,meta27311__$1){
var self__ = this;
var _27312__$1 = this;
return (new cljs.core.async.t27310(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27311__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27312){
var self__ = this;
var _27312__$1 = this;
return self__.meta27311;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27311","meta27311",-1709495642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27310.cljs$lang$type = true;

cljs.core.async.t27310.cljs$lang$ctorStr = "cljs.core.async/t27310";

cljs.core.async.t27310.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27310");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27310 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27310(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27311){
return (new cljs.core.async.t27310(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27311));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27310(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19635__auto___27473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27410){
var state_val_27411 = (state_27410[(1)]);
if((state_val_27411 === (7))){
var inst_27328 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27412_27474 = state_27410__$1;
(statearr_27412_27474[(2)] = inst_27328);

(statearr_27412_27474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (20))){
var inst_27340 = (state_27410[(7)]);
var state_27410__$1 = state_27410;
var statearr_27413_27475 = state_27410__$1;
(statearr_27413_27475[(2)] = inst_27340);

(statearr_27413_27475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (27))){
var state_27410__$1 = state_27410;
var statearr_27414_27476 = state_27410__$1;
(statearr_27414_27476[(2)] = null);

(statearr_27414_27476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (1))){
var inst_27316 = (state_27410[(8)]);
var inst_27316__$1 = calc_state.call(null);
var inst_27318 = (inst_27316__$1 == null);
var inst_27319 = cljs.core.not.call(null,inst_27318);
var state_27410__$1 = (function (){var statearr_27415 = state_27410;
(statearr_27415[(8)] = inst_27316__$1);

return statearr_27415;
})();
if(inst_27319){
var statearr_27416_27477 = state_27410__$1;
(statearr_27416_27477[(1)] = (2));

} else {
var statearr_27417_27478 = state_27410__$1;
(statearr_27417_27478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (24))){
var inst_27384 = (state_27410[(9)]);
var inst_27363 = (state_27410[(10)]);
var inst_27370 = (state_27410[(11)]);
var inst_27384__$1 = inst_27363.call(null,inst_27370);
var state_27410__$1 = (function (){var statearr_27418 = state_27410;
(statearr_27418[(9)] = inst_27384__$1);

return statearr_27418;
})();
if(cljs.core.truth_(inst_27384__$1)){
var statearr_27419_27479 = state_27410__$1;
(statearr_27419_27479[(1)] = (29));

} else {
var statearr_27420_27480 = state_27410__$1;
(statearr_27420_27480[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (4))){
var inst_27331 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27331)){
var statearr_27421_27481 = state_27410__$1;
(statearr_27421_27481[(1)] = (8));

} else {
var statearr_27422_27482 = state_27410__$1;
(statearr_27422_27482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (15))){
var inst_27357 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27357)){
var statearr_27423_27483 = state_27410__$1;
(statearr_27423_27483[(1)] = (19));

} else {
var statearr_27424_27484 = state_27410__$1;
(statearr_27424_27484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (21))){
var inst_27362 = (state_27410[(12)]);
var inst_27362__$1 = (state_27410[(2)]);
var inst_27363 = cljs.core.get.call(null,inst_27362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27364 = cljs.core.get.call(null,inst_27362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27365 = cljs.core.get.call(null,inst_27362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27410__$1 = (function (){var statearr_27425 = state_27410;
(statearr_27425[(10)] = inst_27363);

(statearr_27425[(12)] = inst_27362__$1);

(statearr_27425[(13)] = inst_27364);

return statearr_27425;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27410__$1,(22),inst_27365);
} else {
if((state_val_27411 === (31))){
var inst_27392 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27392)){
var statearr_27426_27485 = state_27410__$1;
(statearr_27426_27485[(1)] = (32));

} else {
var statearr_27427_27486 = state_27410__$1;
(statearr_27427_27486[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (32))){
var inst_27369 = (state_27410[(14)]);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27410__$1,(35),out,inst_27369);
} else {
if((state_val_27411 === (33))){
var inst_27362 = (state_27410[(12)]);
var inst_27340 = inst_27362;
var state_27410__$1 = (function (){var statearr_27428 = state_27410;
(statearr_27428[(7)] = inst_27340);

return statearr_27428;
})();
var statearr_27429_27487 = state_27410__$1;
(statearr_27429_27487[(2)] = null);

(statearr_27429_27487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (13))){
var inst_27340 = (state_27410[(7)]);
var inst_27347 = inst_27340.cljs$lang$protocol_mask$partition0$;
var inst_27348 = (inst_27347 & (64));
var inst_27349 = inst_27340.cljs$core$ISeq$;
var inst_27350 = (inst_27348) || (inst_27349);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27350)){
var statearr_27430_27488 = state_27410__$1;
(statearr_27430_27488[(1)] = (16));

} else {
var statearr_27431_27489 = state_27410__$1;
(statearr_27431_27489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (22))){
var inst_27370 = (state_27410[(11)]);
var inst_27369 = (state_27410[(14)]);
var inst_27368 = (state_27410[(2)]);
var inst_27369__$1 = cljs.core.nth.call(null,inst_27368,(0),null);
var inst_27370__$1 = cljs.core.nth.call(null,inst_27368,(1),null);
var inst_27371 = (inst_27369__$1 == null);
var inst_27372 = cljs.core._EQ_.call(null,inst_27370__$1,change);
var inst_27373 = (inst_27371) || (inst_27372);
var state_27410__$1 = (function (){var statearr_27432 = state_27410;
(statearr_27432[(11)] = inst_27370__$1);

(statearr_27432[(14)] = inst_27369__$1);

return statearr_27432;
})();
if(cljs.core.truth_(inst_27373)){
var statearr_27433_27490 = state_27410__$1;
(statearr_27433_27490[(1)] = (23));

} else {
var statearr_27434_27491 = state_27410__$1;
(statearr_27434_27491[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (36))){
var inst_27362 = (state_27410[(12)]);
var inst_27340 = inst_27362;
var state_27410__$1 = (function (){var statearr_27435 = state_27410;
(statearr_27435[(7)] = inst_27340);

return statearr_27435;
})();
var statearr_27436_27492 = state_27410__$1;
(statearr_27436_27492[(2)] = null);

(statearr_27436_27492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (29))){
var inst_27384 = (state_27410[(9)]);
var state_27410__$1 = state_27410;
var statearr_27437_27493 = state_27410__$1;
(statearr_27437_27493[(2)] = inst_27384);

(statearr_27437_27493[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (6))){
var state_27410__$1 = state_27410;
var statearr_27438_27494 = state_27410__$1;
(statearr_27438_27494[(2)] = false);

(statearr_27438_27494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (28))){
var inst_27380 = (state_27410[(2)]);
var inst_27381 = calc_state.call(null);
var inst_27340 = inst_27381;
var state_27410__$1 = (function (){var statearr_27439 = state_27410;
(statearr_27439[(15)] = inst_27380);

(statearr_27439[(7)] = inst_27340);

return statearr_27439;
})();
var statearr_27440_27495 = state_27410__$1;
(statearr_27440_27495[(2)] = null);

(statearr_27440_27495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (25))){
var inst_27406 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27441_27496 = state_27410__$1;
(statearr_27441_27496[(2)] = inst_27406);

(statearr_27441_27496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (34))){
var inst_27404 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27442_27497 = state_27410__$1;
(statearr_27442_27497[(2)] = inst_27404);

(statearr_27442_27497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (17))){
var state_27410__$1 = state_27410;
var statearr_27443_27498 = state_27410__$1;
(statearr_27443_27498[(2)] = false);

(statearr_27443_27498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (3))){
var state_27410__$1 = state_27410;
var statearr_27444_27499 = state_27410__$1;
(statearr_27444_27499[(2)] = false);

(statearr_27444_27499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (12))){
var inst_27408 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27410__$1,inst_27408);
} else {
if((state_val_27411 === (2))){
var inst_27316 = (state_27410[(8)]);
var inst_27321 = inst_27316.cljs$lang$protocol_mask$partition0$;
var inst_27322 = (inst_27321 & (64));
var inst_27323 = inst_27316.cljs$core$ISeq$;
var inst_27324 = (inst_27322) || (inst_27323);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27324)){
var statearr_27445_27500 = state_27410__$1;
(statearr_27445_27500[(1)] = (5));

} else {
var statearr_27446_27501 = state_27410__$1;
(statearr_27446_27501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (23))){
var inst_27369 = (state_27410[(14)]);
var inst_27375 = (inst_27369 == null);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27375)){
var statearr_27447_27502 = state_27410__$1;
(statearr_27447_27502[(1)] = (26));

} else {
var statearr_27448_27503 = state_27410__$1;
(statearr_27448_27503[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (35))){
var inst_27395 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
if(cljs.core.truth_(inst_27395)){
var statearr_27449_27504 = state_27410__$1;
(statearr_27449_27504[(1)] = (36));

} else {
var statearr_27450_27505 = state_27410__$1;
(statearr_27450_27505[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (19))){
var inst_27340 = (state_27410[(7)]);
var inst_27359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27340);
var state_27410__$1 = state_27410;
var statearr_27451_27506 = state_27410__$1;
(statearr_27451_27506[(2)] = inst_27359);

(statearr_27451_27506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (11))){
var inst_27340 = (state_27410[(7)]);
var inst_27344 = (inst_27340 == null);
var inst_27345 = cljs.core.not.call(null,inst_27344);
var state_27410__$1 = state_27410;
if(inst_27345){
var statearr_27452_27507 = state_27410__$1;
(statearr_27452_27507[(1)] = (13));

} else {
var statearr_27453_27508 = state_27410__$1;
(statearr_27453_27508[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (9))){
var inst_27316 = (state_27410[(8)]);
var state_27410__$1 = state_27410;
var statearr_27454_27509 = state_27410__$1;
(statearr_27454_27509[(2)] = inst_27316);

(statearr_27454_27509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (5))){
var state_27410__$1 = state_27410;
var statearr_27455_27510 = state_27410__$1;
(statearr_27455_27510[(2)] = true);

(statearr_27455_27510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (14))){
var state_27410__$1 = state_27410;
var statearr_27456_27511 = state_27410__$1;
(statearr_27456_27511[(2)] = false);

(statearr_27456_27511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (26))){
var inst_27370 = (state_27410[(11)]);
var inst_27377 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27370);
var state_27410__$1 = state_27410;
var statearr_27457_27512 = state_27410__$1;
(statearr_27457_27512[(2)] = inst_27377);

(statearr_27457_27512[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (16))){
var state_27410__$1 = state_27410;
var statearr_27458_27513 = state_27410__$1;
(statearr_27458_27513[(2)] = true);

(statearr_27458_27513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (38))){
var inst_27400 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27459_27514 = state_27410__$1;
(statearr_27459_27514[(2)] = inst_27400);

(statearr_27459_27514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (30))){
var inst_27363 = (state_27410[(10)]);
var inst_27370 = (state_27410[(11)]);
var inst_27364 = (state_27410[(13)]);
var inst_27387 = cljs.core.empty_QMARK_.call(null,inst_27363);
var inst_27388 = inst_27364.call(null,inst_27370);
var inst_27389 = cljs.core.not.call(null,inst_27388);
var inst_27390 = (inst_27387) && (inst_27389);
var state_27410__$1 = state_27410;
var statearr_27460_27515 = state_27410__$1;
(statearr_27460_27515[(2)] = inst_27390);

(statearr_27460_27515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (10))){
var inst_27316 = (state_27410[(8)]);
var inst_27336 = (state_27410[(2)]);
var inst_27337 = cljs.core.get.call(null,inst_27336,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27338 = cljs.core.get.call(null,inst_27336,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27339 = cljs.core.get.call(null,inst_27336,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27340 = inst_27316;
var state_27410__$1 = (function (){var statearr_27461 = state_27410;
(statearr_27461[(16)] = inst_27338);

(statearr_27461[(17)] = inst_27337);

(statearr_27461[(7)] = inst_27340);

(statearr_27461[(18)] = inst_27339);

return statearr_27461;
})();
var statearr_27462_27516 = state_27410__$1;
(statearr_27462_27516[(2)] = null);

(statearr_27462_27516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (18))){
var inst_27354 = (state_27410[(2)]);
var state_27410__$1 = state_27410;
var statearr_27463_27517 = state_27410__$1;
(statearr_27463_27517[(2)] = inst_27354);

(statearr_27463_27517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (37))){
var state_27410__$1 = state_27410;
var statearr_27464_27518 = state_27410__$1;
(statearr_27464_27518[(2)] = null);

(statearr_27464_27518[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27411 === (8))){
var inst_27316 = (state_27410[(8)]);
var inst_27333 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27316);
var state_27410__$1 = state_27410;
var statearr_27465_27519 = state_27410__$1;
(statearr_27465_27519[(2)] = inst_27333);

(statearr_27465_27519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19570__auto__,c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19571__auto__ = null;
var cljs$core$async$mix_$_state_machine__19571__auto____0 = (function (){
var statearr_27469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27469[(0)] = cljs$core$async$mix_$_state_machine__19571__auto__);

(statearr_27469[(1)] = (1));

return statearr_27469;
});
var cljs$core$async$mix_$_state_machine__19571__auto____1 = (function (state_27410){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27470){if((e27470 instanceof Object)){
var ex__19574__auto__ = e27470;
var statearr_27471_27520 = state_27410;
(statearr_27471_27520[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27521 = state_27410;
state_27410 = G__27521;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19571__auto__ = function(state_27410){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19571__auto____1.call(this,state_27410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19571__auto____0;
cljs$core$async$mix_$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19571__auto____1;
return cljs$core$async$mix_$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19637__auto__ = (function (){var statearr_27472 = f__19636__auto__.call(null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27473);

return statearr_27472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27473,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17088__auto__ = (((p == null))?null:p);
var m__17089__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17089__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17088__auto__ = (((p == null))?null:p);
var m__17089__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,p,v,ch);
} else {
var m__17089__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args27524 = [];
var len__17491__auto___27527 = arguments.length;
var i__17492__auto___27528 = (0);
while(true){
if((i__17492__auto___27528 < len__17491__auto___27527)){
args27524.push((arguments[i__17492__auto___27528]));

var G__27529 = (i__17492__auto___27528 + (1));
i__17492__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var G__27526 = args27524.length;
switch (G__27526) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27524.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17088__auto__ = (((p == null))?null:p);
var m__17089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,p);
} else {
var m__17089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17088__auto__ = (((p == null))?null:p);
var m__17089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17088__auto__)]);
if(!((m__17089__auto__ == null))){
return m__17089__auto__.call(null,p,v);
} else {
var m__17089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17089__auto____$1 == null))){
return m__17089__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args27532 = [];
var len__17491__auto___27657 = arguments.length;
var i__17492__auto___27658 = (0);
while(true){
if((i__17492__auto___27658 < len__17491__auto___27657)){
args27532.push((arguments[i__17492__auto___27658]));

var G__27659 = (i__17492__auto___27658 + (1));
i__17492__auto___27658 = G__27659;
continue;
} else {
}
break;
}

var G__27534 = args27532.length;
switch (G__27534) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27532.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16452__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16452__auto__)){
return or__16452__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16452__auto__,mults){
return (function (p1__27531_SHARP_){
if(cljs.core.truth_(p1__27531_SHARP_.call(null,topic))){
return p1__27531_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27531_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16452__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27535 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27536){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27536 = meta27536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27537,meta27536__$1){
var self__ = this;
var _27537__$1 = this;
return (new cljs.core.async.t27535(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27536__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27537){
var self__ = this;
var _27537__$1 = this;
return self__.meta27536;
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27535.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27535.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27536","meta27536",1353168040,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27535.cljs$lang$type = true;

cljs.core.async.t27535.cljs$lang$ctorStr = "cljs.core.async/t27535";

cljs.core.async.t27535.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27535");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27535 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27536){
return (new cljs.core.async.t27535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27536));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27535(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19635__auto___27661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27661,mults,ensure_mult,p){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27661,mults,ensure_mult,p){
return (function (state_27609){
var state_val_27610 = (state_27609[(1)]);
if((state_val_27610 === (7))){
var inst_27605 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27611_27662 = state_27609__$1;
(statearr_27611_27662[(2)] = inst_27605);

(statearr_27611_27662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (20))){
var state_27609__$1 = state_27609;
var statearr_27612_27663 = state_27609__$1;
(statearr_27612_27663[(2)] = null);

(statearr_27612_27663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (1))){
var state_27609__$1 = state_27609;
var statearr_27613_27664 = state_27609__$1;
(statearr_27613_27664[(2)] = null);

(statearr_27613_27664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (24))){
var inst_27588 = (state_27609[(7)]);
var inst_27597 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27588);
var state_27609__$1 = state_27609;
var statearr_27614_27665 = state_27609__$1;
(statearr_27614_27665[(2)] = inst_27597);

(statearr_27614_27665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (4))){
var inst_27540 = (state_27609[(8)]);
var inst_27540__$1 = (state_27609[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var state_27609__$1 = (function (){var statearr_27615 = state_27609;
(statearr_27615[(8)] = inst_27540__$1);

return statearr_27615;
})();
if(cljs.core.truth_(inst_27541)){
var statearr_27616_27666 = state_27609__$1;
(statearr_27616_27666[(1)] = (5));

} else {
var statearr_27617_27667 = state_27609__$1;
(statearr_27617_27667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (15))){
var inst_27582 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27618_27668 = state_27609__$1;
(statearr_27618_27668[(2)] = inst_27582);

(statearr_27618_27668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (21))){
var inst_27602 = (state_27609[(2)]);
var state_27609__$1 = (function (){var statearr_27619 = state_27609;
(statearr_27619[(9)] = inst_27602);

return statearr_27619;
})();
var statearr_27620_27669 = state_27609__$1;
(statearr_27620_27669[(2)] = null);

(statearr_27620_27669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (13))){
var inst_27564 = (state_27609[(10)]);
var inst_27566 = cljs.core.chunked_seq_QMARK_.call(null,inst_27564);
var state_27609__$1 = state_27609;
if(inst_27566){
var statearr_27621_27670 = state_27609__$1;
(statearr_27621_27670[(1)] = (16));

} else {
var statearr_27622_27671 = state_27609__$1;
(statearr_27622_27671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (22))){
var inst_27594 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
if(cljs.core.truth_(inst_27594)){
var statearr_27623_27672 = state_27609__$1;
(statearr_27623_27672[(1)] = (23));

} else {
var statearr_27624_27673 = state_27609__$1;
(statearr_27624_27673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (6))){
var inst_27590 = (state_27609[(11)]);
var inst_27588 = (state_27609[(7)]);
var inst_27540 = (state_27609[(8)]);
var inst_27588__$1 = topic_fn.call(null,inst_27540);
var inst_27589 = cljs.core.deref.call(null,mults);
var inst_27590__$1 = cljs.core.get.call(null,inst_27589,inst_27588__$1);
var state_27609__$1 = (function (){var statearr_27625 = state_27609;
(statearr_27625[(11)] = inst_27590__$1);

(statearr_27625[(7)] = inst_27588__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27590__$1)){
var statearr_27626_27674 = state_27609__$1;
(statearr_27626_27674[(1)] = (19));

} else {
var statearr_27627_27675 = state_27609__$1;
(statearr_27627_27675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (25))){
var inst_27599 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27628_27676 = state_27609__$1;
(statearr_27628_27676[(2)] = inst_27599);

(statearr_27628_27676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (17))){
var inst_27564 = (state_27609[(10)]);
var inst_27573 = cljs.core.first.call(null,inst_27564);
var inst_27574 = cljs.core.async.muxch_STAR_.call(null,inst_27573);
var inst_27575 = cljs.core.async.close_BANG_.call(null,inst_27574);
var inst_27576 = cljs.core.next.call(null,inst_27564);
var inst_27550 = inst_27576;
var inst_27551 = null;
var inst_27552 = (0);
var inst_27553 = (0);
var state_27609__$1 = (function (){var statearr_27629 = state_27609;
(statearr_27629[(12)] = inst_27551);

(statearr_27629[(13)] = inst_27552);

(statearr_27629[(14)] = inst_27550);

(statearr_27629[(15)] = inst_27575);

(statearr_27629[(16)] = inst_27553);

return statearr_27629;
})();
var statearr_27630_27677 = state_27609__$1;
(statearr_27630_27677[(2)] = null);

(statearr_27630_27677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (3))){
var inst_27607 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27609__$1,inst_27607);
} else {
if((state_val_27610 === (12))){
var inst_27584 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27631_27678 = state_27609__$1;
(statearr_27631_27678[(2)] = inst_27584);

(statearr_27631_27678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (2))){
var state_27609__$1 = state_27609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27609__$1,(4),ch);
} else {
if((state_val_27610 === (23))){
var state_27609__$1 = state_27609;
var statearr_27632_27679 = state_27609__$1;
(statearr_27632_27679[(2)] = null);

(statearr_27632_27679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (19))){
var inst_27590 = (state_27609[(11)]);
var inst_27540 = (state_27609[(8)]);
var inst_27592 = cljs.core.async.muxch_STAR_.call(null,inst_27590);
var state_27609__$1 = state_27609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27609__$1,(22),inst_27592,inst_27540);
} else {
if((state_val_27610 === (11))){
var inst_27564 = (state_27609[(10)]);
var inst_27550 = (state_27609[(14)]);
var inst_27564__$1 = cljs.core.seq.call(null,inst_27550);
var state_27609__$1 = (function (){var statearr_27633 = state_27609;
(statearr_27633[(10)] = inst_27564__$1);

return statearr_27633;
})();
if(inst_27564__$1){
var statearr_27634_27680 = state_27609__$1;
(statearr_27634_27680[(1)] = (13));

} else {
var statearr_27635_27681 = state_27609__$1;
(statearr_27635_27681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (9))){
var inst_27586 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27636_27682 = state_27609__$1;
(statearr_27636_27682[(2)] = inst_27586);

(statearr_27636_27682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (5))){
var inst_27547 = cljs.core.deref.call(null,mults);
var inst_27548 = cljs.core.vals.call(null,inst_27547);
var inst_27549 = cljs.core.seq.call(null,inst_27548);
var inst_27550 = inst_27549;
var inst_27551 = null;
var inst_27552 = (0);
var inst_27553 = (0);
var state_27609__$1 = (function (){var statearr_27637 = state_27609;
(statearr_27637[(12)] = inst_27551);

(statearr_27637[(13)] = inst_27552);

(statearr_27637[(14)] = inst_27550);

(statearr_27637[(16)] = inst_27553);

return statearr_27637;
})();
var statearr_27638_27683 = state_27609__$1;
(statearr_27638_27683[(2)] = null);

(statearr_27638_27683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (14))){
var state_27609__$1 = state_27609;
var statearr_27642_27684 = state_27609__$1;
(statearr_27642_27684[(2)] = null);

(statearr_27642_27684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (16))){
var inst_27564 = (state_27609[(10)]);
var inst_27568 = cljs.core.chunk_first.call(null,inst_27564);
var inst_27569 = cljs.core.chunk_rest.call(null,inst_27564);
var inst_27570 = cljs.core.count.call(null,inst_27568);
var inst_27550 = inst_27569;
var inst_27551 = inst_27568;
var inst_27552 = inst_27570;
var inst_27553 = (0);
var state_27609__$1 = (function (){var statearr_27643 = state_27609;
(statearr_27643[(12)] = inst_27551);

(statearr_27643[(13)] = inst_27552);

(statearr_27643[(14)] = inst_27550);

(statearr_27643[(16)] = inst_27553);

return statearr_27643;
})();
var statearr_27644_27685 = state_27609__$1;
(statearr_27644_27685[(2)] = null);

(statearr_27644_27685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (10))){
var inst_27551 = (state_27609[(12)]);
var inst_27552 = (state_27609[(13)]);
var inst_27550 = (state_27609[(14)]);
var inst_27553 = (state_27609[(16)]);
var inst_27558 = cljs.core._nth.call(null,inst_27551,inst_27553);
var inst_27559 = cljs.core.async.muxch_STAR_.call(null,inst_27558);
var inst_27560 = cljs.core.async.close_BANG_.call(null,inst_27559);
var inst_27561 = (inst_27553 + (1));
var tmp27639 = inst_27551;
var tmp27640 = inst_27552;
var tmp27641 = inst_27550;
var inst_27550__$1 = tmp27641;
var inst_27551__$1 = tmp27639;
var inst_27552__$1 = tmp27640;
var inst_27553__$1 = inst_27561;
var state_27609__$1 = (function (){var statearr_27645 = state_27609;
(statearr_27645[(12)] = inst_27551__$1);

(statearr_27645[(13)] = inst_27552__$1);

(statearr_27645[(17)] = inst_27560);

(statearr_27645[(14)] = inst_27550__$1);

(statearr_27645[(16)] = inst_27553__$1);

return statearr_27645;
})();
var statearr_27646_27686 = state_27609__$1;
(statearr_27646_27686[(2)] = null);

(statearr_27646_27686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (18))){
var inst_27579 = (state_27609[(2)]);
var state_27609__$1 = state_27609;
var statearr_27647_27687 = state_27609__$1;
(statearr_27647_27687[(2)] = inst_27579);

(statearr_27647_27687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27610 === (8))){
var inst_27552 = (state_27609[(13)]);
var inst_27553 = (state_27609[(16)]);
var inst_27555 = (inst_27553 < inst_27552);
var inst_27556 = inst_27555;
var state_27609__$1 = state_27609;
if(cljs.core.truth_(inst_27556)){
var statearr_27648_27688 = state_27609__$1;
(statearr_27648_27688[(1)] = (10));

} else {
var statearr_27649_27689 = state_27609__$1;
(statearr_27649_27689[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27661,mults,ensure_mult,p))
;
return ((function (switch__19570__auto__,c__19635__auto___27661,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27653[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_27609){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__19574__auto__ = e27654;
var statearr_27655_27690 = state_27609;
(statearr_27655_27690[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27609;
state_27609 = G__27691;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_27609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_27609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27661,mults,ensure_mult,p))
})();
var state__19637__auto__ = (function (){var statearr_27656 = f__19636__auto__.call(null);
(statearr_27656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27661);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27661,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args27692 = [];
var len__17491__auto___27695 = arguments.length;
var i__17492__auto___27696 = (0);
while(true){
if((i__17492__auto___27696 < len__17491__auto___27695)){
args27692.push((arguments[i__17492__auto___27696]));

var G__27697 = (i__17492__auto___27696 + (1));
i__17492__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var G__27694 = args27692.length;
switch (G__27694) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27692.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args27699 = [];
var len__17491__auto___27702 = arguments.length;
var i__17492__auto___27703 = (0);
while(true){
if((i__17492__auto___27703 < len__17491__auto___27702)){
args27699.push((arguments[i__17492__auto___27703]));

var G__27704 = (i__17492__auto___27703 + (1));
i__17492__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var G__27701 = args27699.length;
switch (G__27701) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27699.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args27706 = [];
var len__17491__auto___27777 = arguments.length;
var i__17492__auto___27778 = (0);
while(true){
if((i__17492__auto___27778 < len__17491__auto___27777)){
args27706.push((arguments[i__17492__auto___27778]));

var G__27779 = (i__17492__auto___27778 + (1));
i__17492__auto___27778 = G__27779;
continue;
} else {
}
break;
}

var G__27708 = args27706.length;
switch (G__27708) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27706.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19635__auto___27781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27747){
var state_val_27748 = (state_27747[(1)]);
if((state_val_27748 === (7))){
var state_27747__$1 = state_27747;
var statearr_27749_27782 = state_27747__$1;
(statearr_27749_27782[(2)] = null);

(statearr_27749_27782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (1))){
var state_27747__$1 = state_27747;
var statearr_27750_27783 = state_27747__$1;
(statearr_27750_27783[(2)] = null);

(statearr_27750_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (4))){
var inst_27711 = (state_27747[(7)]);
var inst_27713 = (inst_27711 < cnt);
var state_27747__$1 = state_27747;
if(cljs.core.truth_(inst_27713)){
var statearr_27751_27784 = state_27747__$1;
(statearr_27751_27784[(1)] = (6));

} else {
var statearr_27752_27785 = state_27747__$1;
(statearr_27752_27785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (15))){
var inst_27743 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27753_27786 = state_27747__$1;
(statearr_27753_27786[(2)] = inst_27743);

(statearr_27753_27786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (13))){
var inst_27736 = cljs.core.async.close_BANG_.call(null,out);
var state_27747__$1 = state_27747;
var statearr_27754_27787 = state_27747__$1;
(statearr_27754_27787[(2)] = inst_27736);

(statearr_27754_27787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (6))){
var state_27747__$1 = state_27747;
var statearr_27755_27788 = state_27747__$1;
(statearr_27755_27788[(2)] = null);

(statearr_27755_27788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (3))){
var inst_27745 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27747__$1,inst_27745);
} else {
if((state_val_27748 === (12))){
var inst_27733 = (state_27747[(8)]);
var inst_27733__$1 = (state_27747[(2)]);
var inst_27734 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27733__$1);
var state_27747__$1 = (function (){var statearr_27756 = state_27747;
(statearr_27756[(8)] = inst_27733__$1);

return statearr_27756;
})();
if(cljs.core.truth_(inst_27734)){
var statearr_27757_27789 = state_27747__$1;
(statearr_27757_27789[(1)] = (13));

} else {
var statearr_27758_27790 = state_27747__$1;
(statearr_27758_27790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (2))){
var inst_27710 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27711 = (0);
var state_27747__$1 = (function (){var statearr_27759 = state_27747;
(statearr_27759[(7)] = inst_27711);

(statearr_27759[(9)] = inst_27710);

return statearr_27759;
})();
var statearr_27760_27791 = state_27747__$1;
(statearr_27760_27791[(2)] = null);

(statearr_27760_27791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (11))){
var inst_27711 = (state_27747[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27747,(10),Object,null,(9));
var inst_27720 = chs__$1.call(null,inst_27711);
var inst_27721 = done.call(null,inst_27711);
var inst_27722 = cljs.core.async.take_BANG_.call(null,inst_27720,inst_27721);
var state_27747__$1 = state_27747;
var statearr_27761_27792 = state_27747__$1;
(statearr_27761_27792[(2)] = inst_27722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (9))){
var inst_27711 = (state_27747[(7)]);
var inst_27724 = (state_27747[(2)]);
var inst_27725 = (inst_27711 + (1));
var inst_27711__$1 = inst_27725;
var state_27747__$1 = (function (){var statearr_27762 = state_27747;
(statearr_27762[(10)] = inst_27724);

(statearr_27762[(7)] = inst_27711__$1);

return statearr_27762;
})();
var statearr_27763_27793 = state_27747__$1;
(statearr_27763_27793[(2)] = null);

(statearr_27763_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (5))){
var inst_27731 = (state_27747[(2)]);
var state_27747__$1 = (function (){var statearr_27764 = state_27747;
(statearr_27764[(11)] = inst_27731);

return statearr_27764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27747__$1,(12),dchan);
} else {
if((state_val_27748 === (14))){
var inst_27733 = (state_27747[(8)]);
var inst_27738 = cljs.core.apply.call(null,f,inst_27733);
var state_27747__$1 = state_27747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27747__$1,(16),out,inst_27738);
} else {
if((state_val_27748 === (16))){
var inst_27740 = (state_27747[(2)]);
var state_27747__$1 = (function (){var statearr_27765 = state_27747;
(statearr_27765[(12)] = inst_27740);

return statearr_27765;
})();
var statearr_27766_27794 = state_27747__$1;
(statearr_27766_27794[(2)] = null);

(statearr_27766_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (10))){
var inst_27715 = (state_27747[(2)]);
var inst_27716 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27747__$1 = (function (){var statearr_27767 = state_27747;
(statearr_27767[(13)] = inst_27715);

return statearr_27767;
})();
var statearr_27768_27795 = state_27747__$1;
(statearr_27768_27795[(2)] = inst_27716);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27748 === (8))){
var inst_27729 = (state_27747[(2)]);
var state_27747__$1 = state_27747;
var statearr_27769_27796 = state_27747__$1;
(statearr_27769_27796[(2)] = inst_27729);

(statearr_27769_27796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19570__auto__,c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_27773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27773[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_27773[(1)] = (1));

return statearr_27773;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_27747){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27774){if((e27774 instanceof Object)){
var ex__19574__auto__ = e27774;
var statearr_27775_27797 = state_27747;
(statearr_27775_27797[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27798 = state_27747;
state_27747 = G__27798;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_27747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_27747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19637__auto__ = (function (){var statearr_27776 = f__19636__auto__.call(null);
(statearr_27776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27781);

return statearr_27776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args27800 = [];
var len__17491__auto___27856 = arguments.length;
var i__17492__auto___27857 = (0);
while(true){
if((i__17492__auto___27857 < len__17491__auto___27856)){
args27800.push((arguments[i__17492__auto___27857]));

var G__27858 = (i__17492__auto___27857 + (1));
i__17492__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var G__27802 = args27800.length;
switch (G__27802) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27800.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___27860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27860,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27860,out){
return (function (state_27832){
var state_val_27833 = (state_27832[(1)]);
if((state_val_27833 === (7))){
var inst_27811 = (state_27832[(7)]);
var inst_27812 = (state_27832[(8)]);
var inst_27811__$1 = (state_27832[(2)]);
var inst_27812__$1 = cljs.core.nth.call(null,inst_27811__$1,(0),null);
var inst_27813 = cljs.core.nth.call(null,inst_27811__$1,(1),null);
var inst_27814 = (inst_27812__$1 == null);
var state_27832__$1 = (function (){var statearr_27834 = state_27832;
(statearr_27834[(7)] = inst_27811__$1);

(statearr_27834[(9)] = inst_27813);

(statearr_27834[(8)] = inst_27812__$1);

return statearr_27834;
})();
if(cljs.core.truth_(inst_27814)){
var statearr_27835_27861 = state_27832__$1;
(statearr_27835_27861[(1)] = (8));

} else {
var statearr_27836_27862 = state_27832__$1;
(statearr_27836_27862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (1))){
var inst_27803 = cljs.core.vec.call(null,chs);
var inst_27804 = inst_27803;
var state_27832__$1 = (function (){var statearr_27837 = state_27832;
(statearr_27837[(10)] = inst_27804);

return statearr_27837;
})();
var statearr_27838_27863 = state_27832__$1;
(statearr_27838_27863[(2)] = null);

(statearr_27838_27863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (4))){
var inst_27804 = (state_27832[(10)]);
var state_27832__$1 = state_27832;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27832__$1,(7),inst_27804);
} else {
if((state_val_27833 === (6))){
var inst_27828 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27839_27864 = state_27832__$1;
(statearr_27839_27864[(2)] = inst_27828);

(statearr_27839_27864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (3))){
var inst_27830 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27832__$1,inst_27830);
} else {
if((state_val_27833 === (2))){
var inst_27804 = (state_27832[(10)]);
var inst_27806 = cljs.core.count.call(null,inst_27804);
var inst_27807 = (inst_27806 > (0));
var state_27832__$1 = state_27832;
if(cljs.core.truth_(inst_27807)){
var statearr_27841_27865 = state_27832__$1;
(statearr_27841_27865[(1)] = (4));

} else {
var statearr_27842_27866 = state_27832__$1;
(statearr_27842_27866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (11))){
var inst_27804 = (state_27832[(10)]);
var inst_27821 = (state_27832[(2)]);
var tmp27840 = inst_27804;
var inst_27804__$1 = tmp27840;
var state_27832__$1 = (function (){var statearr_27843 = state_27832;
(statearr_27843[(10)] = inst_27804__$1);

(statearr_27843[(11)] = inst_27821);

return statearr_27843;
})();
var statearr_27844_27867 = state_27832__$1;
(statearr_27844_27867[(2)] = null);

(statearr_27844_27867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (9))){
var inst_27812 = (state_27832[(8)]);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27832__$1,(11),out,inst_27812);
} else {
if((state_val_27833 === (5))){
var inst_27826 = cljs.core.async.close_BANG_.call(null,out);
var state_27832__$1 = state_27832;
var statearr_27845_27868 = state_27832__$1;
(statearr_27845_27868[(2)] = inst_27826);

(statearr_27845_27868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (10))){
var inst_27824 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27846_27869 = state_27832__$1;
(statearr_27846_27869[(2)] = inst_27824);

(statearr_27846_27869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (8))){
var inst_27811 = (state_27832[(7)]);
var inst_27804 = (state_27832[(10)]);
var inst_27813 = (state_27832[(9)]);
var inst_27812 = (state_27832[(8)]);
var inst_27816 = (function (){var cs = inst_27804;
var vec__27809 = inst_27811;
var v = inst_27812;
var c = inst_27813;
return ((function (cs,vec__27809,v,c,inst_27811,inst_27804,inst_27813,inst_27812,state_val_27833,c__19635__auto___27860,out){
return (function (p1__27799_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27799_SHARP_);
});
;})(cs,vec__27809,v,c,inst_27811,inst_27804,inst_27813,inst_27812,state_val_27833,c__19635__auto___27860,out))
})();
var inst_27817 = cljs.core.filterv.call(null,inst_27816,inst_27804);
var inst_27804__$1 = inst_27817;
var state_27832__$1 = (function (){var statearr_27847 = state_27832;
(statearr_27847[(10)] = inst_27804__$1);

return statearr_27847;
})();
var statearr_27848_27870 = state_27832__$1;
(statearr_27848_27870[(2)] = null);

(statearr_27848_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27860,out))
;
return ((function (switch__19570__auto__,c__19635__auto___27860,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_27852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27852[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_27852[(1)] = (1));

return statearr_27852;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_27832){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27853){if((e27853 instanceof Object)){
var ex__19574__auto__ = e27853;
var statearr_27854_27871 = state_27832;
(statearr_27854_27871[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27872 = state_27832;
state_27832 = G__27872;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_27832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_27832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27860,out))
})();
var state__19637__auto__ = (function (){var statearr_27855 = f__19636__auto__.call(null);
(statearr_27855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27860);

return statearr_27855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27860,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args27873 = [];
var len__17491__auto___27922 = arguments.length;
var i__17492__auto___27923 = (0);
while(true){
if((i__17492__auto___27923 < len__17491__auto___27922)){
args27873.push((arguments[i__17492__auto___27923]));

var G__27924 = (i__17492__auto___27923 + (1));
i__17492__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var G__27875 = args27873.length;
switch (G__27875) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27873.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___27926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___27926,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___27926,out){
return (function (state_27899){
var state_val_27900 = (state_27899[(1)]);
if((state_val_27900 === (7))){
var inst_27881 = (state_27899[(7)]);
var inst_27881__$1 = (state_27899[(2)]);
var inst_27882 = (inst_27881__$1 == null);
var inst_27883 = cljs.core.not.call(null,inst_27882);
var state_27899__$1 = (function (){var statearr_27901 = state_27899;
(statearr_27901[(7)] = inst_27881__$1);

return statearr_27901;
})();
if(inst_27883){
var statearr_27902_27927 = state_27899__$1;
(statearr_27902_27927[(1)] = (8));

} else {
var statearr_27903_27928 = state_27899__$1;
(statearr_27903_27928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (1))){
var inst_27876 = (0);
var state_27899__$1 = (function (){var statearr_27904 = state_27899;
(statearr_27904[(8)] = inst_27876);

return statearr_27904;
})();
var statearr_27905_27929 = state_27899__$1;
(statearr_27905_27929[(2)] = null);

(statearr_27905_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (4))){
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27899__$1,(7),ch);
} else {
if((state_val_27900 === (6))){
var inst_27894 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27906_27930 = state_27899__$1;
(statearr_27906_27930[(2)] = inst_27894);

(statearr_27906_27930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (3))){
var inst_27896 = (state_27899[(2)]);
var inst_27897 = cljs.core.async.close_BANG_.call(null,out);
var state_27899__$1 = (function (){var statearr_27907 = state_27899;
(statearr_27907[(9)] = inst_27896);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27899__$1,inst_27897);
} else {
if((state_val_27900 === (2))){
var inst_27876 = (state_27899[(8)]);
var inst_27878 = (inst_27876 < n);
var state_27899__$1 = state_27899;
if(cljs.core.truth_(inst_27878)){
var statearr_27908_27931 = state_27899__$1;
(statearr_27908_27931[(1)] = (4));

} else {
var statearr_27909_27932 = state_27899__$1;
(statearr_27909_27932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (11))){
var inst_27876 = (state_27899[(8)]);
var inst_27886 = (state_27899[(2)]);
var inst_27887 = (inst_27876 + (1));
var inst_27876__$1 = inst_27887;
var state_27899__$1 = (function (){var statearr_27910 = state_27899;
(statearr_27910[(10)] = inst_27886);

(statearr_27910[(8)] = inst_27876__$1);

return statearr_27910;
})();
var statearr_27911_27933 = state_27899__$1;
(statearr_27911_27933[(2)] = null);

(statearr_27911_27933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (9))){
var state_27899__$1 = state_27899;
var statearr_27912_27934 = state_27899__$1;
(statearr_27912_27934[(2)] = null);

(statearr_27912_27934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (5))){
var state_27899__$1 = state_27899;
var statearr_27913_27935 = state_27899__$1;
(statearr_27913_27935[(2)] = null);

(statearr_27913_27935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (10))){
var inst_27891 = (state_27899[(2)]);
var state_27899__$1 = state_27899;
var statearr_27914_27936 = state_27899__$1;
(statearr_27914_27936[(2)] = inst_27891);

(statearr_27914_27936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27900 === (8))){
var inst_27881 = (state_27899[(7)]);
var state_27899__$1 = state_27899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27899__$1,(11),out,inst_27881);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___27926,out))
;
return ((function (switch__19570__auto__,c__19635__auto___27926,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_27918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27918[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_27918[(1)] = (1));

return statearr_27918;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_27899){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e27919){if((e27919 instanceof Object)){
var ex__19574__auto__ = e27919;
var statearr_27920_27937 = state_27899;
(statearr_27920_27937[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27938 = state_27899;
state_27899 = G__27938;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_27899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_27899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___27926,out))
})();
var state__19637__auto__ = (function (){var statearr_27921 = f__19636__auto__.call(null);
(statearr_27921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___27926);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___27926,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27946 = (function (map_LT_,f,ch,meta27947){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27947 = meta27947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27948,meta27947__$1){
var self__ = this;
var _27948__$1 = this;
return (new cljs.core.async.t27946(self__.map_LT_,self__.f,self__.ch,meta27947__$1));
});

cljs.core.async.t27946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27948){
var self__ = this;
var _27948__$1 = this;
return self__.meta27947;
});

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27949 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27949 = (function (map_LT_,f,ch,meta27947,_,fn1,meta27950){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27947 = meta27947;
this._ = _;
this.fn1 = fn1;
this.meta27950 = meta27950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27951,meta27950__$1){
var self__ = this;
var _27951__$1 = this;
return (new cljs.core.async.t27949(self__.map_LT_,self__.f,self__.ch,self__.meta27947,self__._,self__.fn1,meta27950__$1));
});})(___$1))
;

cljs.core.async.t27949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27951){
var self__ = this;
var _27951__$1 = this;
return self__.meta27950;
});})(___$1))
;

cljs.core.async.t27949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27939_SHARP_){
return f1.call(null,(((p1__27939_SHARP_ == null))?null:self__.f.call(null,p1__27939_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27949.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27947","meta27947",1412187814,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t27946","cljs.core.async/t27946",1574294007,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27950","meta27950",-1025281429,null)], null);
});})(___$1))
;

cljs.core.async.t27949.cljs$lang$type = true;

cljs.core.async.t27949.cljs$lang$ctorStr = "cljs.core.async/t27949";

cljs.core.async.t27949.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27949");
});})(___$1))
;

cljs.core.async.__GT_t27949 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27949(map_LT___$1,f__$1,ch__$1,meta27947__$1,___$2,fn1__$1,meta27950){
return (new cljs.core.async.t27949(map_LT___$1,f__$1,ch__$1,meta27947__$1,___$2,fn1__$1,meta27950));
});})(___$1))
;

}

return (new cljs.core.async.t27949(self__.map_LT_,self__.f,self__.ch,self__.meta27947,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16440__auto__ = ret;
if(cljs.core.truth_(and__16440__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16440__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27947","meta27947",1412187814,null)], null);
});

cljs.core.async.t27946.cljs$lang$type = true;

cljs.core.async.t27946.cljs$lang$ctorStr = "cljs.core.async/t27946";

cljs.core.async.t27946.cljs$lang$ctorPrWriter = (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27946");
});

cljs.core.async.__GT_t27946 = (function cljs$core$async$map_LT__$___GT_t27946(map_LT___$1,f__$1,ch__$1,meta27947){
return (new cljs.core.async.t27946(map_LT___$1,f__$1,ch__$1,meta27947));
});

}

return (new cljs.core.async.t27946(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27955 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27955 = (function (map_GT_,f,ch,meta27956){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27956 = meta27956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27957,meta27956__$1){
var self__ = this;
var _27957__$1 = this;
return (new cljs.core.async.t27955(self__.map_GT_,self__.f,self__.ch,meta27956__$1));
});

cljs.core.async.t27955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27957){
var self__ = this;
var _27957__$1 = this;
return self__.meta27956;
});

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27956","meta27956",1373726246,null)], null);
});

cljs.core.async.t27955.cljs$lang$type = true;

cljs.core.async.t27955.cljs$lang$ctorStr = "cljs.core.async/t27955";

cljs.core.async.t27955.cljs$lang$ctorPrWriter = (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27955");
});

cljs.core.async.__GT_t27955 = (function cljs$core$async$map_GT__$___GT_t27955(map_GT___$1,f__$1,ch__$1,meta27956){
return (new cljs.core.async.t27955(map_GT___$1,f__$1,ch__$1,meta27956));
});

}

return (new cljs.core.async.t27955(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27961 = (function (filter_GT_,p,ch,meta27962){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27962 = meta27962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27963,meta27962__$1){
var self__ = this;
var _27963__$1 = this;
return (new cljs.core.async.t27961(self__.filter_GT_,self__.p,self__.ch,meta27962__$1));
});

cljs.core.async.t27961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27963){
var self__ = this;
var _27963__$1 = this;
return self__.meta27962;
});

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27962","meta27962",-1929110701,null)], null);
});

cljs.core.async.t27961.cljs$lang$type = true;

cljs.core.async.t27961.cljs$lang$ctorStr = "cljs.core.async/t27961";

cljs.core.async.t27961.cljs$lang$ctorPrWriter = (function (this__17031__auto__,writer__17032__auto__,opt__17033__auto__){
return cljs.core._write.call(null,writer__17032__auto__,"cljs.core.async/t27961");
});

cljs.core.async.__GT_t27961 = (function cljs$core$async$filter_GT__$___GT_t27961(filter_GT___$1,p__$1,ch__$1,meta27962){
return (new cljs.core.async.t27961(filter_GT___$1,p__$1,ch__$1,meta27962));
});

}

return (new cljs.core.async.t27961(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args27964 = [];
var len__17491__auto___28008 = arguments.length;
var i__17492__auto___28009 = (0);
while(true){
if((i__17492__auto___28009 < len__17491__auto___28008)){
args27964.push((arguments[i__17492__auto___28009]));

var G__28010 = (i__17492__auto___28009 + (1));
i__17492__auto___28009 = G__28010;
continue;
} else {
}
break;
}

var G__27966 = args27964.length;
switch (G__27966) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27964.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___28012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___28012,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___28012,out){
return (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28013 = state_27987__$1;
(statearr_27989_28013[(2)] = inst_27983);

(statearr_27989_28013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (1))){
var state_27987__$1 = state_27987;
var statearr_27990_28014 = state_27987__$1;
(statearr_27990_28014[(2)] = null);

(statearr_27990_28014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (4))){
var inst_27969 = (state_27987[(7)]);
var inst_27969__$1 = (state_27987[(2)]);
var inst_27970 = (inst_27969__$1 == null);
var state_27987__$1 = (function (){var statearr_27991 = state_27987;
(statearr_27991[(7)] = inst_27969__$1);

return statearr_27991;
})();
if(cljs.core.truth_(inst_27970)){
var statearr_27992_28015 = state_27987__$1;
(statearr_27992_28015[(1)] = (5));

} else {
var statearr_27993_28016 = state_27987__$1;
(statearr_27993_28016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (6))){
var inst_27969 = (state_27987[(7)]);
var inst_27974 = p.call(null,inst_27969);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27974)){
var statearr_27994_28017 = state_27987__$1;
(statearr_27994_28017[(1)] = (8));

} else {
var statearr_27995_28018 = state_27987__$1;
(statearr_27995_28018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (3))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (2))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27987__$1,(4),ch);
} else {
if((state_val_27988 === (11))){
var inst_27977 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27996_28019 = state_27987__$1;
(statearr_27996_28019[(2)] = inst_27977);

(statearr_27996_28019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (9))){
var state_27987__$1 = state_27987;
var statearr_27997_28020 = state_27987__$1;
(statearr_27997_28020[(2)] = null);

(statearr_27997_28020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (5))){
var inst_27972 = cljs.core.async.close_BANG_.call(null,out);
var state_27987__$1 = state_27987;
var statearr_27998_28021 = state_27987__$1;
(statearr_27998_28021[(2)] = inst_27972);

(statearr_27998_28021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (10))){
var inst_27980 = (state_27987[(2)]);
var state_27987__$1 = (function (){var statearr_27999 = state_27987;
(statearr_27999[(8)] = inst_27980);

return statearr_27999;
})();
var statearr_28000_28022 = state_27987__$1;
(statearr_28000_28022[(2)] = null);

(statearr_28000_28022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (8))){
var inst_27969 = (state_27987[(7)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(11),out,inst_27969);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___28012,out))
;
return ((function (switch__19570__auto__,c__19635__auto___28012,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_28004 = [null,null,null,null,null,null,null,null,null];
(statearr_28004[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_28004[(1)] = (1));

return statearr_28004;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_27987){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_27987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e28005){if((e28005 instanceof Object)){
var ex__19574__auto__ = e28005;
var statearr_28006_28023 = state_27987;
(statearr_28006_28023[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28024 = state_27987;
state_27987 = G__28024;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___28012,out))
})();
var state__19637__auto__ = (function (){var statearr_28007 = f__19636__auto__.call(null);
(statearr_28007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___28012);

return statearr_28007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___28012,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args28025 = [];
var len__17491__auto___28028 = arguments.length;
var i__17492__auto___28029 = (0);
while(true){
if((i__17492__auto___28029 < len__17491__auto___28028)){
args28025.push((arguments[i__17492__auto___28029]));

var G__28030 = (i__17492__auto___28029 + (1));
i__17492__auto___28029 = G__28030;
continue;
} else {
}
break;
}

var G__28027 = args28025.length;
switch (G__28027) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28025.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto__){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto__){
return (function (state_28197){
var state_val_28198 = (state_28197[(1)]);
if((state_val_28198 === (7))){
var inst_28193 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28199_28240 = state_28197__$1;
(statearr_28199_28240[(2)] = inst_28193);

(statearr_28199_28240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (20))){
var inst_28163 = (state_28197[(7)]);
var inst_28174 = (state_28197[(2)]);
var inst_28175 = cljs.core.next.call(null,inst_28163);
var inst_28149 = inst_28175;
var inst_28150 = null;
var inst_28151 = (0);
var inst_28152 = (0);
var state_28197__$1 = (function (){var statearr_28200 = state_28197;
(statearr_28200[(8)] = inst_28151);

(statearr_28200[(9)] = inst_28150);

(statearr_28200[(10)] = inst_28152);

(statearr_28200[(11)] = inst_28149);

(statearr_28200[(12)] = inst_28174);

return statearr_28200;
})();
var statearr_28201_28241 = state_28197__$1;
(statearr_28201_28241[(2)] = null);

(statearr_28201_28241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (1))){
var state_28197__$1 = state_28197;
var statearr_28202_28242 = state_28197__$1;
(statearr_28202_28242[(2)] = null);

(statearr_28202_28242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (4))){
var inst_28138 = (state_28197[(13)]);
var inst_28138__$1 = (state_28197[(2)]);
var inst_28139 = (inst_28138__$1 == null);
var state_28197__$1 = (function (){var statearr_28203 = state_28197;
(statearr_28203[(13)] = inst_28138__$1);

return statearr_28203;
})();
if(cljs.core.truth_(inst_28139)){
var statearr_28204_28243 = state_28197__$1;
(statearr_28204_28243[(1)] = (5));

} else {
var statearr_28205_28244 = state_28197__$1;
(statearr_28205_28244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (15))){
var state_28197__$1 = state_28197;
var statearr_28209_28245 = state_28197__$1;
(statearr_28209_28245[(2)] = null);

(statearr_28209_28245[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (21))){
var state_28197__$1 = state_28197;
var statearr_28210_28246 = state_28197__$1;
(statearr_28210_28246[(2)] = null);

(statearr_28210_28246[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (13))){
var inst_28151 = (state_28197[(8)]);
var inst_28150 = (state_28197[(9)]);
var inst_28152 = (state_28197[(10)]);
var inst_28149 = (state_28197[(11)]);
var inst_28159 = (state_28197[(2)]);
var inst_28160 = (inst_28152 + (1));
var tmp28206 = inst_28151;
var tmp28207 = inst_28150;
var tmp28208 = inst_28149;
var inst_28149__$1 = tmp28208;
var inst_28150__$1 = tmp28207;
var inst_28151__$1 = tmp28206;
var inst_28152__$1 = inst_28160;
var state_28197__$1 = (function (){var statearr_28211 = state_28197;
(statearr_28211[(8)] = inst_28151__$1);

(statearr_28211[(9)] = inst_28150__$1);

(statearr_28211[(10)] = inst_28152__$1);

(statearr_28211[(11)] = inst_28149__$1);

(statearr_28211[(14)] = inst_28159);

return statearr_28211;
})();
var statearr_28212_28247 = state_28197__$1;
(statearr_28212_28247[(2)] = null);

(statearr_28212_28247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (22))){
var state_28197__$1 = state_28197;
var statearr_28213_28248 = state_28197__$1;
(statearr_28213_28248[(2)] = null);

(statearr_28213_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (6))){
var inst_28138 = (state_28197[(13)]);
var inst_28147 = f.call(null,inst_28138);
var inst_28148 = cljs.core.seq.call(null,inst_28147);
var inst_28149 = inst_28148;
var inst_28150 = null;
var inst_28151 = (0);
var inst_28152 = (0);
var state_28197__$1 = (function (){var statearr_28214 = state_28197;
(statearr_28214[(8)] = inst_28151);

(statearr_28214[(9)] = inst_28150);

(statearr_28214[(10)] = inst_28152);

(statearr_28214[(11)] = inst_28149);

return statearr_28214;
})();
var statearr_28215_28249 = state_28197__$1;
(statearr_28215_28249[(2)] = null);

(statearr_28215_28249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (17))){
var inst_28163 = (state_28197[(7)]);
var inst_28167 = cljs.core.chunk_first.call(null,inst_28163);
var inst_28168 = cljs.core.chunk_rest.call(null,inst_28163);
var inst_28169 = cljs.core.count.call(null,inst_28167);
var inst_28149 = inst_28168;
var inst_28150 = inst_28167;
var inst_28151 = inst_28169;
var inst_28152 = (0);
var state_28197__$1 = (function (){var statearr_28216 = state_28197;
(statearr_28216[(8)] = inst_28151);

(statearr_28216[(9)] = inst_28150);

(statearr_28216[(10)] = inst_28152);

(statearr_28216[(11)] = inst_28149);

return statearr_28216;
})();
var statearr_28217_28250 = state_28197__$1;
(statearr_28217_28250[(2)] = null);

(statearr_28217_28250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (3))){
var inst_28195 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28197__$1,inst_28195);
} else {
if((state_val_28198 === (12))){
var inst_28183 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28218_28251 = state_28197__$1;
(statearr_28218_28251[(2)] = inst_28183);

(statearr_28218_28251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (2))){
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28197__$1,(4),in$);
} else {
if((state_val_28198 === (23))){
var inst_28191 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28219_28252 = state_28197__$1;
(statearr_28219_28252[(2)] = inst_28191);

(statearr_28219_28252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (19))){
var inst_28178 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28220_28253 = state_28197__$1;
(statearr_28220_28253[(2)] = inst_28178);

(statearr_28220_28253[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (11))){
var inst_28163 = (state_28197[(7)]);
var inst_28149 = (state_28197[(11)]);
var inst_28163__$1 = cljs.core.seq.call(null,inst_28149);
var state_28197__$1 = (function (){var statearr_28221 = state_28197;
(statearr_28221[(7)] = inst_28163__$1);

return statearr_28221;
})();
if(inst_28163__$1){
var statearr_28222_28254 = state_28197__$1;
(statearr_28222_28254[(1)] = (14));

} else {
var statearr_28223_28255 = state_28197__$1;
(statearr_28223_28255[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (9))){
var inst_28185 = (state_28197[(2)]);
var inst_28186 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28197__$1 = (function (){var statearr_28224 = state_28197;
(statearr_28224[(15)] = inst_28185);

return statearr_28224;
})();
if(cljs.core.truth_(inst_28186)){
var statearr_28225_28256 = state_28197__$1;
(statearr_28225_28256[(1)] = (21));

} else {
var statearr_28226_28257 = state_28197__$1;
(statearr_28226_28257[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (5))){
var inst_28141 = cljs.core.async.close_BANG_.call(null,out);
var state_28197__$1 = state_28197;
var statearr_28227_28258 = state_28197__$1;
(statearr_28227_28258[(2)] = inst_28141);

(statearr_28227_28258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (14))){
var inst_28163 = (state_28197[(7)]);
var inst_28165 = cljs.core.chunked_seq_QMARK_.call(null,inst_28163);
var state_28197__$1 = state_28197;
if(inst_28165){
var statearr_28228_28259 = state_28197__$1;
(statearr_28228_28259[(1)] = (17));

} else {
var statearr_28229_28260 = state_28197__$1;
(statearr_28229_28260[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (16))){
var inst_28181 = (state_28197[(2)]);
var state_28197__$1 = state_28197;
var statearr_28230_28261 = state_28197__$1;
(statearr_28230_28261[(2)] = inst_28181);

(statearr_28230_28261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28198 === (10))){
var inst_28150 = (state_28197[(9)]);
var inst_28152 = (state_28197[(10)]);
var inst_28157 = cljs.core._nth.call(null,inst_28150,inst_28152);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28197__$1,(13),out,inst_28157);
} else {
if((state_val_28198 === (18))){
var inst_28163 = (state_28197[(7)]);
var inst_28172 = cljs.core.first.call(null,inst_28163);
var state_28197__$1 = state_28197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28197__$1,(20),out,inst_28172);
} else {
if((state_val_28198 === (8))){
var inst_28151 = (state_28197[(8)]);
var inst_28152 = (state_28197[(10)]);
var inst_28154 = (inst_28152 < inst_28151);
var inst_28155 = inst_28154;
var state_28197__$1 = state_28197;
if(cljs.core.truth_(inst_28155)){
var statearr_28231_28262 = state_28197__$1;
(statearr_28231_28262[(1)] = (10));

} else {
var statearr_28232_28263 = state_28197__$1;
(statearr_28232_28263[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto__))
;
return ((function (switch__19570__auto__,c__19635__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____0 = (function (){
var statearr_28236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28236[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__);

(statearr_28236[(1)] = (1));

return statearr_28236;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____1 = (function (state_28197){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_28197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e28237){if((e28237 instanceof Object)){
var ex__19574__auto__ = e28237;
var statearr_28238_28264 = state_28197;
(statearr_28238_28264[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28265 = state_28197;
state_28197 = G__28265;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__ = function(state_28197){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____1.call(this,state_28197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19571__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto__))
})();
var state__19637__auto__ = (function (){var statearr_28239 = f__19636__auto__.call(null);
(statearr_28239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto__);

return statearr_28239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto__))
);

return c__19635__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args28266 = [];
var len__17491__auto___28269 = arguments.length;
var i__17492__auto___28270 = (0);
while(true){
if((i__17492__auto___28270 < len__17491__auto___28269)){
args28266.push((arguments[i__17492__auto___28270]));

var G__28271 = (i__17492__auto___28270 + (1));
i__17492__auto___28270 = G__28271;
continue;
} else {
}
break;
}

var G__28268 = args28266.length;
switch (G__28268) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28266.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args28273 = [];
var len__17491__auto___28276 = arguments.length;
var i__17492__auto___28277 = (0);
while(true){
if((i__17492__auto___28277 < len__17491__auto___28276)){
args28273.push((arguments[i__17492__auto___28277]));

var G__28278 = (i__17492__auto___28277 + (1));
i__17492__auto___28277 = G__28278;
continue;
} else {
}
break;
}

var G__28275 = args28273.length;
switch (G__28275) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28273.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args28280 = [];
var len__17491__auto___28331 = arguments.length;
var i__17492__auto___28332 = (0);
while(true){
if((i__17492__auto___28332 < len__17491__auto___28331)){
args28280.push((arguments[i__17492__auto___28332]));

var G__28333 = (i__17492__auto___28332 + (1));
i__17492__auto___28332 = G__28333;
continue;
} else {
}
break;
}

var G__28282 = args28280.length;
switch (G__28282) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28280.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___28335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___28335,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___28335,out){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (7))){
var inst_28301 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28308_28336 = state_28306__$1;
(statearr_28308_28336[(2)] = inst_28301);

(statearr_28308_28336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (1))){
var inst_28283 = null;
var state_28306__$1 = (function (){var statearr_28309 = state_28306;
(statearr_28309[(7)] = inst_28283);

return statearr_28309;
})();
var statearr_28310_28337 = state_28306__$1;
(statearr_28310_28337[(2)] = null);

(statearr_28310_28337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (4))){
var inst_28286 = (state_28306[(8)]);
var inst_28286__$1 = (state_28306[(2)]);
var inst_28287 = (inst_28286__$1 == null);
var inst_28288 = cljs.core.not.call(null,inst_28287);
var state_28306__$1 = (function (){var statearr_28311 = state_28306;
(statearr_28311[(8)] = inst_28286__$1);

return statearr_28311;
})();
if(inst_28288){
var statearr_28312_28338 = state_28306__$1;
(statearr_28312_28338[(1)] = (5));

} else {
var statearr_28313_28339 = state_28306__$1;
(statearr_28313_28339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (6))){
var state_28306__$1 = state_28306;
var statearr_28314_28340 = state_28306__$1;
(statearr_28314_28340[(2)] = null);

(statearr_28314_28340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (3))){
var inst_28303 = (state_28306[(2)]);
var inst_28304 = cljs.core.async.close_BANG_.call(null,out);
var state_28306__$1 = (function (){var statearr_28315 = state_28306;
(statearr_28315[(9)] = inst_28303);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
if((state_val_28307 === (2))){
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(4),ch);
} else {
if((state_val_28307 === (11))){
var inst_28286 = (state_28306[(8)]);
var inst_28295 = (state_28306[(2)]);
var inst_28283 = inst_28286;
var state_28306__$1 = (function (){var statearr_28316 = state_28306;
(statearr_28316[(7)] = inst_28283);

(statearr_28316[(10)] = inst_28295);

return statearr_28316;
})();
var statearr_28317_28341 = state_28306__$1;
(statearr_28317_28341[(2)] = null);

(statearr_28317_28341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (9))){
var inst_28286 = (state_28306[(8)]);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28306__$1,(11),out,inst_28286);
} else {
if((state_val_28307 === (5))){
var inst_28283 = (state_28306[(7)]);
var inst_28286 = (state_28306[(8)]);
var inst_28290 = cljs.core._EQ_.call(null,inst_28286,inst_28283);
var state_28306__$1 = state_28306;
if(inst_28290){
var statearr_28319_28342 = state_28306__$1;
(statearr_28319_28342[(1)] = (8));

} else {
var statearr_28320_28343 = state_28306__$1;
(statearr_28320_28343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (10))){
var inst_28298 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28321_28344 = state_28306__$1;
(statearr_28321_28344[(2)] = inst_28298);

(statearr_28321_28344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (8))){
var inst_28283 = (state_28306[(7)]);
var tmp28318 = inst_28283;
var inst_28283__$1 = tmp28318;
var state_28306__$1 = (function (){var statearr_28322 = state_28306;
(statearr_28322[(7)] = inst_28283__$1);

return statearr_28322;
})();
var statearr_28323_28345 = state_28306__$1;
(statearr_28323_28345[(2)] = null);

(statearr_28323_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___28335,out))
;
return ((function (switch__19570__auto__,c__19635__auto___28335,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_28306){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__19574__auto__ = e28328;
var statearr_28329_28346 = state_28306;
(statearr_28329_28346[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28347 = state_28306;
state_28306 = G__28347;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___28335,out))
})();
var state__19637__auto__ = (function (){var statearr_28330 = f__19636__auto__.call(null);
(statearr_28330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___28335);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___28335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args28348 = [];
var len__17491__auto___28418 = arguments.length;
var i__17492__auto___28419 = (0);
while(true){
if((i__17492__auto___28419 < len__17491__auto___28418)){
args28348.push((arguments[i__17492__auto___28419]));

var G__28420 = (i__17492__auto___28419 + (1));
i__17492__auto___28419 = G__28420;
continue;
} else {
}
break;
}

var G__28350 = args28348.length;
switch (G__28350) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28348.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___28422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___28422,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___28422,out){
return (function (state_28388){
var state_val_28389 = (state_28388[(1)]);
if((state_val_28389 === (7))){
var inst_28384 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28390_28423 = state_28388__$1;
(statearr_28390_28423[(2)] = inst_28384);

(statearr_28390_28423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (1))){
var inst_28351 = (new Array(n));
var inst_28352 = inst_28351;
var inst_28353 = (0);
var state_28388__$1 = (function (){var statearr_28391 = state_28388;
(statearr_28391[(7)] = inst_28353);

(statearr_28391[(8)] = inst_28352);

return statearr_28391;
})();
var statearr_28392_28424 = state_28388__$1;
(statearr_28392_28424[(2)] = null);

(statearr_28392_28424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (4))){
var inst_28356 = (state_28388[(9)]);
var inst_28356__$1 = (state_28388[(2)]);
var inst_28357 = (inst_28356__$1 == null);
var inst_28358 = cljs.core.not.call(null,inst_28357);
var state_28388__$1 = (function (){var statearr_28393 = state_28388;
(statearr_28393[(9)] = inst_28356__$1);

return statearr_28393;
})();
if(inst_28358){
var statearr_28394_28425 = state_28388__$1;
(statearr_28394_28425[(1)] = (5));

} else {
var statearr_28395_28426 = state_28388__$1;
(statearr_28395_28426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (15))){
var inst_28378 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28396_28427 = state_28388__$1;
(statearr_28396_28427[(2)] = inst_28378);

(statearr_28396_28427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (13))){
var state_28388__$1 = state_28388;
var statearr_28397_28428 = state_28388__$1;
(statearr_28397_28428[(2)] = null);

(statearr_28397_28428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (6))){
var inst_28353 = (state_28388[(7)]);
var inst_28374 = (inst_28353 > (0));
var state_28388__$1 = state_28388;
if(cljs.core.truth_(inst_28374)){
var statearr_28398_28429 = state_28388__$1;
(statearr_28398_28429[(1)] = (12));

} else {
var statearr_28399_28430 = state_28388__$1;
(statearr_28399_28430[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (3))){
var inst_28386 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28388__$1,inst_28386);
} else {
if((state_val_28389 === (12))){
var inst_28352 = (state_28388[(8)]);
var inst_28376 = cljs.core.vec.call(null,inst_28352);
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28388__$1,(15),out,inst_28376);
} else {
if((state_val_28389 === (2))){
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28388__$1,(4),ch);
} else {
if((state_val_28389 === (11))){
var inst_28368 = (state_28388[(2)]);
var inst_28369 = (new Array(n));
var inst_28352 = inst_28369;
var inst_28353 = (0);
var state_28388__$1 = (function (){var statearr_28400 = state_28388;
(statearr_28400[(7)] = inst_28353);

(statearr_28400[(8)] = inst_28352);

(statearr_28400[(10)] = inst_28368);

return statearr_28400;
})();
var statearr_28401_28431 = state_28388__$1;
(statearr_28401_28431[(2)] = null);

(statearr_28401_28431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (9))){
var inst_28352 = (state_28388[(8)]);
var inst_28366 = cljs.core.vec.call(null,inst_28352);
var state_28388__$1 = state_28388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28388__$1,(11),out,inst_28366);
} else {
if((state_val_28389 === (5))){
var inst_28356 = (state_28388[(9)]);
var inst_28361 = (state_28388[(11)]);
var inst_28353 = (state_28388[(7)]);
var inst_28352 = (state_28388[(8)]);
var inst_28360 = (inst_28352[inst_28353] = inst_28356);
var inst_28361__$1 = (inst_28353 + (1));
var inst_28362 = (inst_28361__$1 < n);
var state_28388__$1 = (function (){var statearr_28402 = state_28388;
(statearr_28402[(11)] = inst_28361__$1);

(statearr_28402[(12)] = inst_28360);

return statearr_28402;
})();
if(cljs.core.truth_(inst_28362)){
var statearr_28403_28432 = state_28388__$1;
(statearr_28403_28432[(1)] = (8));

} else {
var statearr_28404_28433 = state_28388__$1;
(statearr_28404_28433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (14))){
var inst_28381 = (state_28388[(2)]);
var inst_28382 = cljs.core.async.close_BANG_.call(null,out);
var state_28388__$1 = (function (){var statearr_28406 = state_28388;
(statearr_28406[(13)] = inst_28381);

return statearr_28406;
})();
var statearr_28407_28434 = state_28388__$1;
(statearr_28407_28434[(2)] = inst_28382);

(statearr_28407_28434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (10))){
var inst_28372 = (state_28388[(2)]);
var state_28388__$1 = state_28388;
var statearr_28408_28435 = state_28388__$1;
(statearr_28408_28435[(2)] = inst_28372);

(statearr_28408_28435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28389 === (8))){
var inst_28361 = (state_28388[(11)]);
var inst_28352 = (state_28388[(8)]);
var tmp28405 = inst_28352;
var inst_28352__$1 = tmp28405;
var inst_28353 = inst_28361;
var state_28388__$1 = (function (){var statearr_28409 = state_28388;
(statearr_28409[(7)] = inst_28353);

(statearr_28409[(8)] = inst_28352__$1);

return statearr_28409;
})();
var statearr_28410_28436 = state_28388__$1;
(statearr_28410_28436[(2)] = null);

(statearr_28410_28436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___28422,out))
;
return ((function (switch__19570__auto__,c__19635__auto___28422,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_28414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28414[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_28414[(1)] = (1));

return statearr_28414;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_28388){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_28388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e28415){if((e28415 instanceof Object)){
var ex__19574__auto__ = e28415;
var statearr_28416_28437 = state_28388;
(statearr_28416_28437[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28438 = state_28388;
state_28388 = G__28438;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_28388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_28388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___28422,out))
})();
var state__19637__auto__ = (function (){var statearr_28417 = f__19636__auto__.call(null);
(statearr_28417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___28422);

return statearr_28417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___28422,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args28439 = [];
var len__17491__auto___28513 = arguments.length;
var i__17492__auto___28514 = (0);
while(true){
if((i__17492__auto___28514 < len__17491__auto___28513)){
args28439.push((arguments[i__17492__auto___28514]));

var G__28515 = (i__17492__auto___28514 + (1));
i__17492__auto___28514 = G__28515;
continue;
} else {
}
break;
}

var G__28441 = args28439.length;
switch (G__28441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28439.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19635__auto___28517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19635__auto___28517,out){
return (function (){
var f__19636__auto__ = (function (){var switch__19570__auto__ = ((function (c__19635__auto___28517,out){
return (function (state_28483){
var state_val_28484 = (state_28483[(1)]);
if((state_val_28484 === (7))){
var inst_28479 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28485_28518 = state_28483__$1;
(statearr_28485_28518[(2)] = inst_28479);

(statearr_28485_28518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (1))){
var inst_28442 = [];
var inst_28443 = inst_28442;
var inst_28444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28483__$1 = (function (){var statearr_28486 = state_28483;
(statearr_28486[(7)] = inst_28443);

(statearr_28486[(8)] = inst_28444);

return statearr_28486;
})();
var statearr_28487_28519 = state_28483__$1;
(statearr_28487_28519[(2)] = null);

(statearr_28487_28519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (4))){
var inst_28447 = (state_28483[(9)]);
var inst_28447__$1 = (state_28483[(2)]);
var inst_28448 = (inst_28447__$1 == null);
var inst_28449 = cljs.core.not.call(null,inst_28448);
var state_28483__$1 = (function (){var statearr_28488 = state_28483;
(statearr_28488[(9)] = inst_28447__$1);

return statearr_28488;
})();
if(inst_28449){
var statearr_28489_28520 = state_28483__$1;
(statearr_28489_28520[(1)] = (5));

} else {
var statearr_28490_28521 = state_28483__$1;
(statearr_28490_28521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (15))){
var inst_28473 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28491_28522 = state_28483__$1;
(statearr_28491_28522[(2)] = inst_28473);

(statearr_28491_28522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (13))){
var state_28483__$1 = state_28483;
var statearr_28492_28523 = state_28483__$1;
(statearr_28492_28523[(2)] = null);

(statearr_28492_28523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (6))){
var inst_28443 = (state_28483[(7)]);
var inst_28468 = inst_28443.length;
var inst_28469 = (inst_28468 > (0));
var state_28483__$1 = state_28483;
if(cljs.core.truth_(inst_28469)){
var statearr_28493_28524 = state_28483__$1;
(statearr_28493_28524[(1)] = (12));

} else {
var statearr_28494_28525 = state_28483__$1;
(statearr_28494_28525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (3))){
var inst_28481 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28483__$1,inst_28481);
} else {
if((state_val_28484 === (12))){
var inst_28443 = (state_28483[(7)]);
var inst_28471 = cljs.core.vec.call(null,inst_28443);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28483__$1,(15),out,inst_28471);
} else {
if((state_val_28484 === (2))){
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28483__$1,(4),ch);
} else {
if((state_val_28484 === (11))){
var inst_28451 = (state_28483[(10)]);
var inst_28447 = (state_28483[(9)]);
var inst_28461 = (state_28483[(2)]);
var inst_28462 = [];
var inst_28463 = inst_28462.push(inst_28447);
var inst_28443 = inst_28462;
var inst_28444 = inst_28451;
var state_28483__$1 = (function (){var statearr_28495 = state_28483;
(statearr_28495[(11)] = inst_28463);

(statearr_28495[(7)] = inst_28443);

(statearr_28495[(12)] = inst_28461);

(statearr_28495[(8)] = inst_28444);

return statearr_28495;
})();
var statearr_28496_28526 = state_28483__$1;
(statearr_28496_28526[(2)] = null);

(statearr_28496_28526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (9))){
var inst_28443 = (state_28483[(7)]);
var inst_28459 = cljs.core.vec.call(null,inst_28443);
var state_28483__$1 = state_28483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28483__$1,(11),out,inst_28459);
} else {
if((state_val_28484 === (5))){
var inst_28451 = (state_28483[(10)]);
var inst_28444 = (state_28483[(8)]);
var inst_28447 = (state_28483[(9)]);
var inst_28451__$1 = f.call(null,inst_28447);
var inst_28452 = cljs.core._EQ_.call(null,inst_28451__$1,inst_28444);
var inst_28453 = cljs.core.keyword_identical_QMARK_.call(null,inst_28444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28454 = (inst_28452) || (inst_28453);
var state_28483__$1 = (function (){var statearr_28497 = state_28483;
(statearr_28497[(10)] = inst_28451__$1);

return statearr_28497;
})();
if(cljs.core.truth_(inst_28454)){
var statearr_28498_28527 = state_28483__$1;
(statearr_28498_28527[(1)] = (8));

} else {
var statearr_28499_28528 = state_28483__$1;
(statearr_28499_28528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (14))){
var inst_28476 = (state_28483[(2)]);
var inst_28477 = cljs.core.async.close_BANG_.call(null,out);
var state_28483__$1 = (function (){var statearr_28501 = state_28483;
(statearr_28501[(13)] = inst_28476);

return statearr_28501;
})();
var statearr_28502_28529 = state_28483__$1;
(statearr_28502_28529[(2)] = inst_28477);

(statearr_28502_28529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (10))){
var inst_28466 = (state_28483[(2)]);
var state_28483__$1 = state_28483;
var statearr_28503_28530 = state_28483__$1;
(statearr_28503_28530[(2)] = inst_28466);

(statearr_28503_28530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28484 === (8))){
var inst_28451 = (state_28483[(10)]);
var inst_28443 = (state_28483[(7)]);
var inst_28447 = (state_28483[(9)]);
var inst_28456 = inst_28443.push(inst_28447);
var tmp28500 = inst_28443;
var inst_28443__$1 = tmp28500;
var inst_28444 = inst_28451;
var state_28483__$1 = (function (){var statearr_28504 = state_28483;
(statearr_28504[(14)] = inst_28456);

(statearr_28504[(7)] = inst_28443__$1);

(statearr_28504[(8)] = inst_28444);

return statearr_28504;
})();
var statearr_28505_28531 = state_28483__$1;
(statearr_28505_28531[(2)] = null);

(statearr_28505_28531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19635__auto___28517,out))
;
return ((function (switch__19570__auto__,c__19635__auto___28517,out){
return (function() {
var cljs$core$async$state_machine__19571__auto__ = null;
var cljs$core$async$state_machine__19571__auto____0 = (function (){
var statearr_28509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28509[(0)] = cljs$core$async$state_machine__19571__auto__);

(statearr_28509[(1)] = (1));

return statearr_28509;
});
var cljs$core$async$state_machine__19571__auto____1 = (function (state_28483){
while(true){
var ret_value__19572__auto__ = (function (){try{while(true){
var result__19573__auto__ = switch__19570__auto__.call(null,state_28483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19573__auto__;
}
break;
}
}catch (e28510){if((e28510 instanceof Object)){
var ex__19574__auto__ = e28510;
var statearr_28511_28532 = state_28483;
(statearr_28511_28532[(5)] = ex__19574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28533 = state_28483;
state_28483 = G__28533;
continue;
} else {
return ret_value__19572__auto__;
}
break;
}
});
cljs$core$async$state_machine__19571__auto__ = function(state_28483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19571__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19571__auto____1.call(this,state_28483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19571__auto____0;
cljs$core$async$state_machine__19571__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19571__auto____1;
return cljs$core$async$state_machine__19571__auto__;
})()
;})(switch__19570__auto__,c__19635__auto___28517,out))
})();
var state__19637__auto__ = (function (){var statearr_28512 = f__19636__auto__.call(null);
(statearr_28512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19635__auto___28517);

return statearr_28512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19637__auto__);
});})(c__19635__auto___28517,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map