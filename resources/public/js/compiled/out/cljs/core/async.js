// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42418 = arguments.length;
switch (G__42418) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42419 = (function (f,blockable,meta42420){
this.f = f;
this.blockable = blockable;
this.meta42420 = meta42420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42421,meta42420__$1){
var self__ = this;
var _42421__$1 = this;
return (new cljs.core.async.t_cljs$core$async42419(self__.f,self__.blockable,meta42420__$1));
});

cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42421){
var self__ = this;
var _42421__$1 = this;
return self__.meta42420;
});

cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42420","meta42420",-2075113279,null)], null);
});

cljs.core.async.t_cljs$core$async42419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42419";

cljs.core.async.t_cljs$core$async42419.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async42419");
});

cljs.core.async.__GT_t_cljs$core$async42419 = (function cljs$core$async$__GT_t_cljs$core$async42419(f__$1,blockable__$1,meta42420){
return (new cljs.core.async.t_cljs$core$async42419(f__$1,blockable__$1,meta42420));
});

}

return (new cljs.core.async.t_cljs$core$async42419(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42425 = arguments.length;
switch (G__42425) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42428 = arguments.length;
switch (G__42428) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42431 = arguments.length;
switch (G__42431) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42433 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42433);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42433,ret){
return (function (){
return fn1.call(null,val_42433);
});})(val_42433,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42435 = arguments.length;
switch (G__42435) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
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
var n__31225__auto___42437 = n;
var x_42438 = (0);
while(true){
if((x_42438 < n__31225__auto___42437)){
(a[x_42438] = (0));

var G__42439 = (x_42438 + (1));
x_42438 = G__42439;
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

var G__42440 = (i + (1));
i = G__42440;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42441 = (function (flag,meta42442){
this.flag = flag;
this.meta42442 = meta42442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42443,meta42442__$1){
var self__ = this;
var _42443__$1 = this;
return (new cljs.core.async.t_cljs$core$async42441(self__.flag,meta42442__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42443){
var self__ = this;
var _42443__$1 = this;
return self__.meta42442;
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42442","meta42442",107686375,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42441";

cljs.core.async.t_cljs$core$async42441.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async42441");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42441 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42441(flag__$1,meta42442){
return (new cljs.core.async.t_cljs$core$async42441(flag__$1,meta42442));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42441(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42444 = (function (flag,cb,meta42445){
this.flag = flag;
this.cb = cb;
this.meta42445 = meta42445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42446,meta42445__$1){
var self__ = this;
var _42446__$1 = this;
return (new cljs.core.async.t_cljs$core$async42444(self__.flag,self__.cb,meta42445__$1));
});

cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42446){
var self__ = this;
var _42446__$1 = this;
return self__.meta42445;
});

cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42445","meta42445",-1348585926,null)], null);
});

cljs.core.async.t_cljs$core$async42444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42444";

cljs.core.async.t_cljs$core$async42444.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async42444");
});

cljs.core.async.__GT_t_cljs$core$async42444 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42444(flag__$1,cb__$1,meta42445){
return (new cljs.core.async.t_cljs$core$async42444(flag__$1,cb__$1,meta42445));
});

}

return (new cljs.core.async.t_cljs$core$async42444(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42447_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42447_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42448_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42448_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30182__auto__ = wport;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42449 = (i + (1));
i = G__42449;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30182__auto__ = ret;
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30170__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___42455 = arguments.length;
var i__31460__auto___42456 = (0);
while(true){
if((i__31460__auto___42456 < len__31459__auto___42455)){
args__31466__auto__.push((arguments[i__31460__auto___42456]));

var G__42457 = (i__31460__auto___42456 + (1));
i__31460__auto___42456 = G__42457;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((1) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31467__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42452){
var map__42453 = p__42452;
var map__42453__$1 = ((((!((map__42453 == null)))?((((map__42453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42453):map__42453);
var opts = map__42453__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42450){
var G__42451 = cljs.core.first.call(null,seq42450);
var seq42450__$1 = cljs.core.next.call(null,seq42450);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42451,seq42450__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42459 = arguments.length;
switch (G__42459) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33146__auto___42505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___42505){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___42505){
return (function (state_42483){
var state_val_42484 = (state_42483[(1)]);
if((state_val_42484 === (7))){
var inst_42479 = (state_42483[(2)]);
var state_42483__$1 = state_42483;
var statearr_42485_42506 = state_42483__$1;
(statearr_42485_42506[(2)] = inst_42479);

(statearr_42485_42506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (1))){
var state_42483__$1 = state_42483;
var statearr_42486_42507 = state_42483__$1;
(statearr_42486_42507[(2)] = null);

(statearr_42486_42507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (4))){
var inst_42462 = (state_42483[(7)]);
var inst_42462__$1 = (state_42483[(2)]);
var inst_42463 = (inst_42462__$1 == null);
var state_42483__$1 = (function (){var statearr_42487 = state_42483;
(statearr_42487[(7)] = inst_42462__$1);

return statearr_42487;
})();
if(cljs.core.truth_(inst_42463)){
var statearr_42488_42508 = state_42483__$1;
(statearr_42488_42508[(1)] = (5));

} else {
var statearr_42489_42509 = state_42483__$1;
(statearr_42489_42509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (13))){
var state_42483__$1 = state_42483;
var statearr_42490_42510 = state_42483__$1;
(statearr_42490_42510[(2)] = null);

(statearr_42490_42510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (6))){
var inst_42462 = (state_42483[(7)]);
var state_42483__$1 = state_42483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42483__$1,(11),to,inst_42462);
} else {
if((state_val_42484 === (3))){
var inst_42481 = (state_42483[(2)]);
var state_42483__$1 = state_42483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42483__$1,inst_42481);
} else {
if((state_val_42484 === (12))){
var state_42483__$1 = state_42483;
var statearr_42491_42511 = state_42483__$1;
(statearr_42491_42511[(2)] = null);

(statearr_42491_42511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (2))){
var state_42483__$1 = state_42483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42483__$1,(4),from);
} else {
if((state_val_42484 === (11))){
var inst_42472 = (state_42483[(2)]);
var state_42483__$1 = state_42483;
if(cljs.core.truth_(inst_42472)){
var statearr_42492_42512 = state_42483__$1;
(statearr_42492_42512[(1)] = (12));

} else {
var statearr_42493_42513 = state_42483__$1;
(statearr_42493_42513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (9))){
var state_42483__$1 = state_42483;
var statearr_42494_42514 = state_42483__$1;
(statearr_42494_42514[(2)] = null);

(statearr_42494_42514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (5))){
var state_42483__$1 = state_42483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42495_42515 = state_42483__$1;
(statearr_42495_42515[(1)] = (8));

} else {
var statearr_42496_42516 = state_42483__$1;
(statearr_42496_42516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (14))){
var inst_42477 = (state_42483[(2)]);
var state_42483__$1 = state_42483;
var statearr_42497_42517 = state_42483__$1;
(statearr_42497_42517[(2)] = inst_42477);

(statearr_42497_42517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (10))){
var inst_42469 = (state_42483[(2)]);
var state_42483__$1 = state_42483;
var statearr_42498_42518 = state_42483__$1;
(statearr_42498_42518[(2)] = inst_42469);

(statearr_42498_42518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42484 === (8))){
var inst_42466 = cljs.core.async.close_BANG_.call(null,to);
var state_42483__$1 = state_42483;
var statearr_42499_42519 = state_42483__$1;
(statearr_42499_42519[(2)] = inst_42466);

(statearr_42499_42519[(1)] = (10));


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
});})(c__33146__auto___42505))
;
return ((function (switch__33123__auto__,c__33146__auto___42505){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_42500 = [null,null,null,null,null,null,null,null];
(statearr_42500[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_42500[(1)] = (1));

return statearr_42500;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_42483){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42501){if((e42501 instanceof Object)){
var ex__33127__auto__ = e42501;
var statearr_42502_42520 = state_42483;
(statearr_42502_42520[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42521 = state_42483;
state_42483 = G__42521;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_42483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_42483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___42505))
})();
var state__33148__auto__ = (function (){var statearr_42503 = f__33147__auto__.call(null);
(statearr_42503[(6)] = c__33146__auto___42505);

return statearr_42503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___42505))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42522){
var vec__42523 = p__42522;
var v = cljs.core.nth.call(null,vec__42523,(0),null);
var p = cljs.core.nth.call(null,vec__42523,(1),null);
var job = vec__42523;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33146__auto___42694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results){
return (function (state_42530){
var state_val_42531 = (state_42530[(1)]);
if((state_val_42531 === (1))){
var state_42530__$1 = state_42530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42530__$1,(2),res,v);
} else {
if((state_val_42531 === (2))){
var inst_42527 = (state_42530[(2)]);
var inst_42528 = cljs.core.async.close_BANG_.call(null,res);
var state_42530__$1 = (function (){var statearr_42532 = state_42530;
(statearr_42532[(7)] = inst_42527);

return statearr_42532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42530__$1,inst_42528);
} else {
return null;
}
}
});})(c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results))
;
return ((function (switch__33123__auto__,c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_42533 = [null,null,null,null,null,null,null,null];
(statearr_42533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__);

(statearr_42533[(1)] = (1));

return statearr_42533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1 = (function (state_42530){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42534){if((e42534 instanceof Object)){
var ex__33127__auto__ = e42534;
var statearr_42535_42695 = state_42530;
(statearr_42535_42695[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42696 = state_42530;
state_42530 = G__42696;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = function(state_42530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1.call(this,state_42530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results))
})();
var state__33148__auto__ = (function (){var statearr_42536 = f__33147__auto__.call(null);
(statearr_42536[(6)] = c__33146__auto___42694);

return statearr_42536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___42694,res,vec__42523,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42537){
var vec__42538 = p__42537;
var v = cljs.core.nth.call(null,vec__42538,(0),null);
var p = cljs.core.nth.call(null,vec__42538,(1),null);
var job = vec__42538;
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
var n__31225__auto___42697 = n;
var __42698 = (0);
while(true){
if((__42698 < n__31225__auto___42697)){
var G__42541_42699 = type;
var G__42541_42700__$1 = (((G__42541_42699 instanceof cljs.core.Keyword))?G__42541_42699.fqn:null);
switch (G__42541_42700__$1) {
case "compute":
var c__33146__auto___42702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42698,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (__42698,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function (state_42554){
var state_val_42555 = (state_42554[(1)]);
if((state_val_42555 === (1))){
var state_42554__$1 = state_42554;
var statearr_42556_42703 = state_42554__$1;
(statearr_42556_42703[(2)] = null);

(statearr_42556_42703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42555 === (2))){
var state_42554__$1 = state_42554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42554__$1,(4),jobs);
} else {
if((state_val_42555 === (3))){
var inst_42552 = (state_42554[(2)]);
var state_42554__$1 = state_42554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42554__$1,inst_42552);
} else {
if((state_val_42555 === (4))){
var inst_42544 = (state_42554[(2)]);
var inst_42545 = process.call(null,inst_42544);
var state_42554__$1 = state_42554;
if(cljs.core.truth_(inst_42545)){
var statearr_42557_42704 = state_42554__$1;
(statearr_42557_42704[(1)] = (5));

} else {
var statearr_42558_42705 = state_42554__$1;
(statearr_42558_42705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42555 === (5))){
var state_42554__$1 = state_42554;
var statearr_42559_42706 = state_42554__$1;
(statearr_42559_42706[(2)] = null);

(statearr_42559_42706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42555 === (6))){
var state_42554__$1 = state_42554;
var statearr_42560_42707 = state_42554__$1;
(statearr_42560_42707[(2)] = null);

(statearr_42560_42707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42555 === (7))){
var inst_42550 = (state_42554[(2)]);
var state_42554__$1 = state_42554;
var statearr_42561_42708 = state_42554__$1;
(statearr_42561_42708[(2)] = inst_42550);

(statearr_42561_42708[(1)] = (3));


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
});})(__42698,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
;
return ((function (__42698,switch__33123__auto__,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_42562 = [null,null,null,null,null,null,null];
(statearr_42562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__);

(statearr_42562[(1)] = (1));

return statearr_42562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1 = (function (state_42554){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42563){if((e42563 instanceof Object)){
var ex__33127__auto__ = e42563;
var statearr_42564_42709 = state_42554;
(statearr_42564_42709[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42710 = state_42554;
state_42554 = G__42710;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = function(state_42554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1.call(this,state_42554);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__;
})()
;})(__42698,switch__33123__auto__,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
})();
var state__33148__auto__ = (function (){var statearr_42565 = f__33147__auto__.call(null);
(statearr_42565[(6)] = c__33146__auto___42702);

return statearr_42565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(__42698,c__33146__auto___42702,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
);


break;
case "async":
var c__33146__auto___42711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42698,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (__42698,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function (state_42578){
var state_val_42579 = (state_42578[(1)]);
if((state_val_42579 === (1))){
var state_42578__$1 = state_42578;
var statearr_42580_42712 = state_42578__$1;
(statearr_42580_42712[(2)] = null);

(statearr_42580_42712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42579 === (2))){
var state_42578__$1 = state_42578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42578__$1,(4),jobs);
} else {
if((state_val_42579 === (3))){
var inst_42576 = (state_42578[(2)]);
var state_42578__$1 = state_42578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42578__$1,inst_42576);
} else {
if((state_val_42579 === (4))){
var inst_42568 = (state_42578[(2)]);
var inst_42569 = async.call(null,inst_42568);
var state_42578__$1 = state_42578;
if(cljs.core.truth_(inst_42569)){
var statearr_42581_42713 = state_42578__$1;
(statearr_42581_42713[(1)] = (5));

} else {
var statearr_42582_42714 = state_42578__$1;
(statearr_42582_42714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42579 === (5))){
var state_42578__$1 = state_42578;
var statearr_42583_42715 = state_42578__$1;
(statearr_42583_42715[(2)] = null);

(statearr_42583_42715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42579 === (6))){
var state_42578__$1 = state_42578;
var statearr_42584_42716 = state_42578__$1;
(statearr_42584_42716[(2)] = null);

(statearr_42584_42716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42579 === (7))){
var inst_42574 = (state_42578[(2)]);
var state_42578__$1 = state_42578;
var statearr_42585_42717 = state_42578__$1;
(statearr_42585_42717[(2)] = inst_42574);

(statearr_42585_42717[(1)] = (3));


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
});})(__42698,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
;
return ((function (__42698,switch__33123__auto__,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_42586 = [null,null,null,null,null,null,null];
(statearr_42586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__);

(statearr_42586[(1)] = (1));

return statearr_42586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1 = (function (state_42578){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42587){if((e42587 instanceof Object)){
var ex__33127__auto__ = e42587;
var statearr_42588_42718 = state_42578;
(statearr_42588_42718[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42719 = state_42578;
state_42578 = G__42719;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = function(state_42578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1.call(this,state_42578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__;
})()
;})(__42698,switch__33123__auto__,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
})();
var state__33148__auto__ = (function (){var statearr_42589 = f__33147__auto__.call(null);
(statearr_42589[(6)] = c__33146__auto___42711);

return statearr_42589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(__42698,c__33146__auto___42711,G__42541_42699,G__42541_42700__$1,n__31225__auto___42697,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42541_42700__$1)].join('')));

}

var G__42720 = (__42698 + (1));
__42698 = G__42720;
continue;
} else {
}
break;
}

var c__33146__auto___42721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___42721,jobs,results,process,async){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___42721,jobs,results,process,async){
return (function (state_42611){
var state_val_42612 = (state_42611[(1)]);
if((state_val_42612 === (1))){
var state_42611__$1 = state_42611;
var statearr_42613_42722 = state_42611__$1;
(statearr_42613_42722[(2)] = null);

(statearr_42613_42722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42612 === (2))){
var state_42611__$1 = state_42611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42611__$1,(4),from);
} else {
if((state_val_42612 === (3))){
var inst_42609 = (state_42611[(2)]);
var state_42611__$1 = state_42611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42611__$1,inst_42609);
} else {
if((state_val_42612 === (4))){
var inst_42592 = (state_42611[(7)]);
var inst_42592__$1 = (state_42611[(2)]);
var inst_42593 = (inst_42592__$1 == null);
var state_42611__$1 = (function (){var statearr_42614 = state_42611;
(statearr_42614[(7)] = inst_42592__$1);

return statearr_42614;
})();
if(cljs.core.truth_(inst_42593)){
var statearr_42615_42723 = state_42611__$1;
(statearr_42615_42723[(1)] = (5));

} else {
var statearr_42616_42724 = state_42611__$1;
(statearr_42616_42724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42612 === (5))){
var inst_42595 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42611__$1 = state_42611;
var statearr_42617_42725 = state_42611__$1;
(statearr_42617_42725[(2)] = inst_42595);

(statearr_42617_42725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42612 === (6))){
var inst_42597 = (state_42611[(8)]);
var inst_42592 = (state_42611[(7)]);
var inst_42597__$1 = cljs.core.async.chan.call(null,(1));
var inst_42598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42599 = [inst_42592,inst_42597__$1];
var inst_42600 = (new cljs.core.PersistentVector(null,2,(5),inst_42598,inst_42599,null));
var state_42611__$1 = (function (){var statearr_42618 = state_42611;
(statearr_42618[(8)] = inst_42597__$1);

return statearr_42618;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42611__$1,(8),jobs,inst_42600);
} else {
if((state_val_42612 === (7))){
var inst_42607 = (state_42611[(2)]);
var state_42611__$1 = state_42611;
var statearr_42619_42726 = state_42611__$1;
(statearr_42619_42726[(2)] = inst_42607);

(statearr_42619_42726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42612 === (8))){
var inst_42597 = (state_42611[(8)]);
var inst_42602 = (state_42611[(2)]);
var state_42611__$1 = (function (){var statearr_42620 = state_42611;
(statearr_42620[(9)] = inst_42602);

return statearr_42620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42611__$1,(9),results,inst_42597);
} else {
if((state_val_42612 === (9))){
var inst_42604 = (state_42611[(2)]);
var state_42611__$1 = (function (){var statearr_42621 = state_42611;
(statearr_42621[(10)] = inst_42604);

return statearr_42621;
})();
var statearr_42622_42727 = state_42611__$1;
(statearr_42622_42727[(2)] = null);

(statearr_42622_42727[(1)] = (2));


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
});})(c__33146__auto___42721,jobs,results,process,async))
;
return ((function (switch__33123__auto__,c__33146__auto___42721,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_42623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__);

(statearr_42623[(1)] = (1));

return statearr_42623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1 = (function (state_42611){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42624){if((e42624 instanceof Object)){
var ex__33127__auto__ = e42624;
var statearr_42625_42728 = state_42611;
(statearr_42625_42728[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42729 = state_42611;
state_42611 = G__42729;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = function(state_42611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1.call(this,state_42611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___42721,jobs,results,process,async))
})();
var state__33148__auto__ = (function (){var statearr_42626 = f__33147__auto__.call(null);
(statearr_42626[(6)] = c__33146__auto___42721);

return statearr_42626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___42721,jobs,results,process,async))
);


var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__,jobs,results,process,async){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__,jobs,results,process,async){
return (function (state_42664){
var state_val_42665 = (state_42664[(1)]);
if((state_val_42665 === (7))){
var inst_42660 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42666_42730 = state_42664__$1;
(statearr_42666_42730[(2)] = inst_42660);

(statearr_42666_42730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (20))){
var state_42664__$1 = state_42664;
var statearr_42667_42731 = state_42664__$1;
(statearr_42667_42731[(2)] = null);

(statearr_42667_42731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (1))){
var state_42664__$1 = state_42664;
var statearr_42668_42732 = state_42664__$1;
(statearr_42668_42732[(2)] = null);

(statearr_42668_42732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (4))){
var inst_42629 = (state_42664[(7)]);
var inst_42629__$1 = (state_42664[(2)]);
var inst_42630 = (inst_42629__$1 == null);
var state_42664__$1 = (function (){var statearr_42669 = state_42664;
(statearr_42669[(7)] = inst_42629__$1);

return statearr_42669;
})();
if(cljs.core.truth_(inst_42630)){
var statearr_42670_42733 = state_42664__$1;
(statearr_42670_42733[(1)] = (5));

} else {
var statearr_42671_42734 = state_42664__$1;
(statearr_42671_42734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (15))){
var inst_42642 = (state_42664[(8)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42664__$1,(18),to,inst_42642);
} else {
if((state_val_42665 === (21))){
var inst_42655 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42672_42735 = state_42664__$1;
(statearr_42672_42735[(2)] = inst_42655);

(statearr_42672_42735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (13))){
var inst_42657 = (state_42664[(2)]);
var state_42664__$1 = (function (){var statearr_42673 = state_42664;
(statearr_42673[(9)] = inst_42657);

return statearr_42673;
})();
var statearr_42674_42736 = state_42664__$1;
(statearr_42674_42736[(2)] = null);

(statearr_42674_42736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (6))){
var inst_42629 = (state_42664[(7)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42664__$1,(11),inst_42629);
} else {
if((state_val_42665 === (17))){
var inst_42650 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
if(cljs.core.truth_(inst_42650)){
var statearr_42675_42737 = state_42664__$1;
(statearr_42675_42737[(1)] = (19));

} else {
var statearr_42676_42738 = state_42664__$1;
(statearr_42676_42738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (3))){
var inst_42662 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42664__$1,inst_42662);
} else {
if((state_val_42665 === (12))){
var inst_42639 = (state_42664[(10)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42664__$1,(14),inst_42639);
} else {
if((state_val_42665 === (2))){
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42664__$1,(4),results);
} else {
if((state_val_42665 === (19))){
var state_42664__$1 = state_42664;
var statearr_42677_42739 = state_42664__$1;
(statearr_42677_42739[(2)] = null);

(statearr_42677_42739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (11))){
var inst_42639 = (state_42664[(2)]);
var state_42664__$1 = (function (){var statearr_42678 = state_42664;
(statearr_42678[(10)] = inst_42639);

return statearr_42678;
})();
var statearr_42679_42740 = state_42664__$1;
(statearr_42679_42740[(2)] = null);

(statearr_42679_42740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (9))){
var state_42664__$1 = state_42664;
var statearr_42680_42741 = state_42664__$1;
(statearr_42680_42741[(2)] = null);

(statearr_42680_42741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (5))){
var state_42664__$1 = state_42664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42681_42742 = state_42664__$1;
(statearr_42681_42742[(1)] = (8));

} else {
var statearr_42682_42743 = state_42664__$1;
(statearr_42682_42743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (14))){
var inst_42644 = (state_42664[(11)]);
var inst_42642 = (state_42664[(8)]);
var inst_42642__$1 = (state_42664[(2)]);
var inst_42643 = (inst_42642__$1 == null);
var inst_42644__$1 = cljs.core.not.call(null,inst_42643);
var state_42664__$1 = (function (){var statearr_42683 = state_42664;
(statearr_42683[(11)] = inst_42644__$1);

(statearr_42683[(8)] = inst_42642__$1);

return statearr_42683;
})();
if(inst_42644__$1){
var statearr_42684_42744 = state_42664__$1;
(statearr_42684_42744[(1)] = (15));

} else {
var statearr_42685_42745 = state_42664__$1;
(statearr_42685_42745[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (16))){
var inst_42644 = (state_42664[(11)]);
var state_42664__$1 = state_42664;
var statearr_42686_42746 = state_42664__$1;
(statearr_42686_42746[(2)] = inst_42644);

(statearr_42686_42746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (10))){
var inst_42636 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42687_42747 = state_42664__$1;
(statearr_42687_42747[(2)] = inst_42636);

(statearr_42687_42747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (18))){
var inst_42647 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42688_42748 = state_42664__$1;
(statearr_42688_42748[(2)] = inst_42647);

(statearr_42688_42748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (8))){
var inst_42633 = cljs.core.async.close_BANG_.call(null,to);
var state_42664__$1 = state_42664;
var statearr_42689_42749 = state_42664__$1;
(statearr_42689_42749[(2)] = inst_42633);

(statearr_42689_42749[(1)] = (10));


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
});})(c__33146__auto__,jobs,results,process,async))
;
return ((function (switch__33123__auto__,c__33146__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_42690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__);

(statearr_42690[(1)] = (1));

return statearr_42690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1 = (function (state_42664){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42691){if((e42691 instanceof Object)){
var ex__33127__auto__ = e42691;
var statearr_42692_42750 = state_42664;
(statearr_42692_42750[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42751 = state_42664;
state_42664 = G__42751;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__,jobs,results,process,async))
})();
var state__33148__auto__ = (function (){var statearr_42693 = f__33147__auto__.call(null);
(statearr_42693[(6)] = c__33146__auto__);

return statearr_42693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__,jobs,results,process,async))
);

return c__33146__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42753 = arguments.length;
switch (G__42753) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42756 = arguments.length;
switch (G__42756) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42759 = arguments.length;
switch (G__42759) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33146__auto___42808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___42808,tc,fc){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___42808,tc,fc){
return (function (state_42785){
var state_val_42786 = (state_42785[(1)]);
if((state_val_42786 === (7))){
var inst_42781 = (state_42785[(2)]);
var state_42785__$1 = state_42785;
var statearr_42787_42809 = state_42785__$1;
(statearr_42787_42809[(2)] = inst_42781);

(statearr_42787_42809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (1))){
var state_42785__$1 = state_42785;
var statearr_42788_42810 = state_42785__$1;
(statearr_42788_42810[(2)] = null);

(statearr_42788_42810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (4))){
var inst_42762 = (state_42785[(7)]);
var inst_42762__$1 = (state_42785[(2)]);
var inst_42763 = (inst_42762__$1 == null);
var state_42785__$1 = (function (){var statearr_42789 = state_42785;
(statearr_42789[(7)] = inst_42762__$1);

return statearr_42789;
})();
if(cljs.core.truth_(inst_42763)){
var statearr_42790_42811 = state_42785__$1;
(statearr_42790_42811[(1)] = (5));

} else {
var statearr_42791_42812 = state_42785__$1;
(statearr_42791_42812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (13))){
var state_42785__$1 = state_42785;
var statearr_42792_42813 = state_42785__$1;
(statearr_42792_42813[(2)] = null);

(statearr_42792_42813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (6))){
var inst_42762 = (state_42785[(7)]);
var inst_42768 = p.call(null,inst_42762);
var state_42785__$1 = state_42785;
if(cljs.core.truth_(inst_42768)){
var statearr_42793_42814 = state_42785__$1;
(statearr_42793_42814[(1)] = (9));

} else {
var statearr_42794_42815 = state_42785__$1;
(statearr_42794_42815[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (3))){
var inst_42783 = (state_42785[(2)]);
var state_42785__$1 = state_42785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42785__$1,inst_42783);
} else {
if((state_val_42786 === (12))){
var state_42785__$1 = state_42785;
var statearr_42795_42816 = state_42785__$1;
(statearr_42795_42816[(2)] = null);

(statearr_42795_42816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (2))){
var state_42785__$1 = state_42785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42785__$1,(4),ch);
} else {
if((state_val_42786 === (11))){
var inst_42762 = (state_42785[(7)]);
var inst_42772 = (state_42785[(2)]);
var state_42785__$1 = state_42785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42785__$1,(8),inst_42772,inst_42762);
} else {
if((state_val_42786 === (9))){
var state_42785__$1 = state_42785;
var statearr_42796_42817 = state_42785__$1;
(statearr_42796_42817[(2)] = tc);

(statearr_42796_42817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (5))){
var inst_42765 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42766 = cljs.core.async.close_BANG_.call(null,fc);
var state_42785__$1 = (function (){var statearr_42797 = state_42785;
(statearr_42797[(8)] = inst_42765);

return statearr_42797;
})();
var statearr_42798_42818 = state_42785__$1;
(statearr_42798_42818[(2)] = inst_42766);

(statearr_42798_42818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (14))){
var inst_42779 = (state_42785[(2)]);
var state_42785__$1 = state_42785;
var statearr_42799_42819 = state_42785__$1;
(statearr_42799_42819[(2)] = inst_42779);

(statearr_42799_42819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (10))){
var state_42785__$1 = state_42785;
var statearr_42800_42820 = state_42785__$1;
(statearr_42800_42820[(2)] = fc);

(statearr_42800_42820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42786 === (8))){
var inst_42774 = (state_42785[(2)]);
var state_42785__$1 = state_42785;
if(cljs.core.truth_(inst_42774)){
var statearr_42801_42821 = state_42785__$1;
(statearr_42801_42821[(1)] = (12));

} else {
var statearr_42802_42822 = state_42785__$1;
(statearr_42802_42822[(1)] = (13));

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
});})(c__33146__auto___42808,tc,fc))
;
return ((function (switch__33123__auto__,c__33146__auto___42808,tc,fc){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_42803 = [null,null,null,null,null,null,null,null,null];
(statearr_42803[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_42803[(1)] = (1));

return statearr_42803;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_42785){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42804){if((e42804 instanceof Object)){
var ex__33127__auto__ = e42804;
var statearr_42805_42823 = state_42785;
(statearr_42805_42823[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42824 = state_42785;
state_42785 = G__42824;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_42785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_42785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___42808,tc,fc))
})();
var state__33148__auto__ = (function (){var statearr_42806 = f__33147__auto__.call(null);
(statearr_42806[(6)] = c__33146__auto___42808);

return statearr_42806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___42808,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__){
return (function (state_42845){
var state_val_42846 = (state_42845[(1)]);
if((state_val_42846 === (7))){
var inst_42841 = (state_42845[(2)]);
var state_42845__$1 = state_42845;
var statearr_42847_42865 = state_42845__$1;
(statearr_42847_42865[(2)] = inst_42841);

(statearr_42847_42865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (1))){
var inst_42825 = init;
var state_42845__$1 = (function (){var statearr_42848 = state_42845;
(statearr_42848[(7)] = inst_42825);

return statearr_42848;
})();
var statearr_42849_42866 = state_42845__$1;
(statearr_42849_42866[(2)] = null);

(statearr_42849_42866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (4))){
var inst_42828 = (state_42845[(8)]);
var inst_42828__$1 = (state_42845[(2)]);
var inst_42829 = (inst_42828__$1 == null);
var state_42845__$1 = (function (){var statearr_42850 = state_42845;
(statearr_42850[(8)] = inst_42828__$1);

return statearr_42850;
})();
if(cljs.core.truth_(inst_42829)){
var statearr_42851_42867 = state_42845__$1;
(statearr_42851_42867[(1)] = (5));

} else {
var statearr_42852_42868 = state_42845__$1;
(statearr_42852_42868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (6))){
var inst_42828 = (state_42845[(8)]);
var inst_42832 = (state_42845[(9)]);
var inst_42825 = (state_42845[(7)]);
var inst_42832__$1 = f.call(null,inst_42825,inst_42828);
var inst_42833 = cljs.core.reduced_QMARK_.call(null,inst_42832__$1);
var state_42845__$1 = (function (){var statearr_42853 = state_42845;
(statearr_42853[(9)] = inst_42832__$1);

return statearr_42853;
})();
if(inst_42833){
var statearr_42854_42869 = state_42845__$1;
(statearr_42854_42869[(1)] = (8));

} else {
var statearr_42855_42870 = state_42845__$1;
(statearr_42855_42870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (3))){
var inst_42843 = (state_42845[(2)]);
var state_42845__$1 = state_42845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42845__$1,inst_42843);
} else {
if((state_val_42846 === (2))){
var state_42845__$1 = state_42845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42845__$1,(4),ch);
} else {
if((state_val_42846 === (9))){
var inst_42832 = (state_42845[(9)]);
var inst_42825 = inst_42832;
var state_42845__$1 = (function (){var statearr_42856 = state_42845;
(statearr_42856[(7)] = inst_42825);

return statearr_42856;
})();
var statearr_42857_42871 = state_42845__$1;
(statearr_42857_42871[(2)] = null);

(statearr_42857_42871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (5))){
var inst_42825 = (state_42845[(7)]);
var state_42845__$1 = state_42845;
var statearr_42858_42872 = state_42845__$1;
(statearr_42858_42872[(2)] = inst_42825);

(statearr_42858_42872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (10))){
var inst_42839 = (state_42845[(2)]);
var state_42845__$1 = state_42845;
var statearr_42859_42873 = state_42845__$1;
(statearr_42859_42873[(2)] = inst_42839);

(statearr_42859_42873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42846 === (8))){
var inst_42832 = (state_42845[(9)]);
var inst_42835 = cljs.core.deref.call(null,inst_42832);
var state_42845__$1 = state_42845;
var statearr_42860_42874 = state_42845__$1;
(statearr_42860_42874[(2)] = inst_42835);

(statearr_42860_42874[(1)] = (10));


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
});})(c__33146__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33124__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33124__auto____0 = (function (){
var statearr_42861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42861[(0)] = cljs$core$async$reduce_$_state_machine__33124__auto__);

(statearr_42861[(1)] = (1));

return statearr_42861;
});
var cljs$core$async$reduce_$_state_machine__33124__auto____1 = (function (state_42845){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42862){if((e42862 instanceof Object)){
var ex__33127__auto__ = e42862;
var statearr_42863_42875 = state_42845;
(statearr_42863_42875[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42876 = state_42845;
state_42845 = G__42876;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33124__auto__ = function(state_42845){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33124__auto____1.call(this,state_42845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33124__auto____0;
cljs$core$async$reduce_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33124__auto____1;
return cljs$core$async$reduce_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__))
})();
var state__33148__auto__ = (function (){var statearr_42864 = f__33147__auto__.call(null);
(statearr_42864[(6)] = c__33146__auto__);

return statearr_42864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__))
);

return c__33146__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__,f__$1){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__,f__$1){
return (function (state_42882){
var state_val_42883 = (state_42882[(1)]);
if((state_val_42883 === (1))){
var inst_42877 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42882__$1,(2),inst_42877);
} else {
if((state_val_42883 === (2))){
var inst_42879 = (state_42882[(2)]);
var inst_42880 = f__$1.call(null,inst_42879);
var state_42882__$1 = state_42882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42882__$1,inst_42880);
} else {
return null;
}
}
});})(c__33146__auto__,f__$1))
;
return ((function (switch__33123__auto__,c__33146__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33124__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33124__auto____0 = (function (){
var statearr_42884 = [null,null,null,null,null,null,null];
(statearr_42884[(0)] = cljs$core$async$transduce_$_state_machine__33124__auto__);

(statearr_42884[(1)] = (1));

return statearr_42884;
});
var cljs$core$async$transduce_$_state_machine__33124__auto____1 = (function (state_42882){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42885){if((e42885 instanceof Object)){
var ex__33127__auto__ = e42885;
var statearr_42886_42888 = state_42882;
(statearr_42886_42888[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42889 = state_42882;
state_42882 = G__42889;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33124__auto__ = function(state_42882){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33124__auto____1.call(this,state_42882);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33124__auto____0;
cljs$core$async$transduce_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33124__auto____1;
return cljs$core$async$transduce_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__,f__$1))
})();
var state__33148__auto__ = (function (){var statearr_42887 = f__33147__auto__.call(null);
(statearr_42887[(6)] = c__33146__auto__);

return statearr_42887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__,f__$1))
);

return c__33146__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42891 = arguments.length;
switch (G__42891) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__){
return (function (state_42916){
var state_val_42917 = (state_42916[(1)]);
if((state_val_42917 === (7))){
var inst_42898 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
var statearr_42918_42939 = state_42916__$1;
(statearr_42918_42939[(2)] = inst_42898);

(statearr_42918_42939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (1))){
var inst_42892 = cljs.core.seq.call(null,coll);
var inst_42893 = inst_42892;
var state_42916__$1 = (function (){var statearr_42919 = state_42916;
(statearr_42919[(7)] = inst_42893);

return statearr_42919;
})();
var statearr_42920_42940 = state_42916__$1;
(statearr_42920_42940[(2)] = null);

(statearr_42920_42940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (4))){
var inst_42893 = (state_42916[(7)]);
var inst_42896 = cljs.core.first.call(null,inst_42893);
var state_42916__$1 = state_42916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42916__$1,(7),ch,inst_42896);
} else {
if((state_val_42917 === (13))){
var inst_42910 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
var statearr_42921_42941 = state_42916__$1;
(statearr_42921_42941[(2)] = inst_42910);

(statearr_42921_42941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (6))){
var inst_42901 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
if(cljs.core.truth_(inst_42901)){
var statearr_42922_42942 = state_42916__$1;
(statearr_42922_42942[(1)] = (8));

} else {
var statearr_42923_42943 = state_42916__$1;
(statearr_42923_42943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (3))){
var inst_42914 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42916__$1,inst_42914);
} else {
if((state_val_42917 === (12))){
var state_42916__$1 = state_42916;
var statearr_42924_42944 = state_42916__$1;
(statearr_42924_42944[(2)] = null);

(statearr_42924_42944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (2))){
var inst_42893 = (state_42916[(7)]);
var state_42916__$1 = state_42916;
if(cljs.core.truth_(inst_42893)){
var statearr_42925_42945 = state_42916__$1;
(statearr_42925_42945[(1)] = (4));

} else {
var statearr_42926_42946 = state_42916__$1;
(statearr_42926_42946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (11))){
var inst_42907 = cljs.core.async.close_BANG_.call(null,ch);
var state_42916__$1 = state_42916;
var statearr_42927_42947 = state_42916__$1;
(statearr_42927_42947[(2)] = inst_42907);

(statearr_42927_42947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (9))){
var state_42916__$1 = state_42916;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42928_42948 = state_42916__$1;
(statearr_42928_42948[(1)] = (11));

} else {
var statearr_42929_42949 = state_42916__$1;
(statearr_42929_42949[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (5))){
var inst_42893 = (state_42916[(7)]);
var state_42916__$1 = state_42916;
var statearr_42930_42950 = state_42916__$1;
(statearr_42930_42950[(2)] = inst_42893);

(statearr_42930_42950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (10))){
var inst_42912 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
var statearr_42931_42951 = state_42916__$1;
(statearr_42931_42951[(2)] = inst_42912);

(statearr_42931_42951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (8))){
var inst_42893 = (state_42916[(7)]);
var inst_42903 = cljs.core.next.call(null,inst_42893);
var inst_42893__$1 = inst_42903;
var state_42916__$1 = (function (){var statearr_42932 = state_42916;
(statearr_42932[(7)] = inst_42893__$1);

return statearr_42932;
})();
var statearr_42933_42952 = state_42916__$1;
(statearr_42933_42952[(2)] = null);

(statearr_42933_42952[(1)] = (2));


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
});})(c__33146__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_42934 = [null,null,null,null,null,null,null,null];
(statearr_42934[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_42934[(1)] = (1));

return statearr_42934;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_42916){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_42916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e42935){if((e42935 instanceof Object)){
var ex__33127__auto__ = e42935;
var statearr_42936_42953 = state_42916;
(statearr_42936_42953[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42954 = state_42916;
state_42916 = G__42954;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_42916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_42916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__))
})();
var state__33148__auto__ = (function (){var statearr_42937 = f__33147__auto__.call(null);
(statearr_42937[(6)] = c__33146__auto__);

return statearr_42937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__))
);

return c__33146__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30915__auto__ = (((_ == null))?null:_);
var m__30916__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,_);
} else {
var m__30916__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30916__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,ch);
} else {
var m__30916__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,ch);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m);
} else {
var m__30916__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42955 = (function (ch,cs,meta42956){
this.ch = ch;
this.cs = cs;
this.meta42956 = meta42956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42957,meta42956__$1){
var self__ = this;
var _42957__$1 = this;
return (new cljs.core.async.t_cljs$core$async42955(self__.ch,self__.cs,meta42956__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42957){
var self__ = this;
var _42957__$1 = this;
return self__.meta42956;
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42956","meta42956",-1005504331,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42955";

cljs.core.async.t_cljs$core$async42955.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async42955");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42955 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42955(ch__$1,cs__$1,meta42956){
return (new cljs.core.async.t_cljs$core$async42955(ch__$1,cs__$1,meta42956));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42955(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33146__auto___43177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43177,cs,m,dchan,dctr,done){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43177,cs,m,dchan,dctr,done){
return (function (state_43092){
var state_val_43093 = (state_43092[(1)]);
if((state_val_43093 === (7))){
var inst_43088 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43094_43178 = state_43092__$1;
(statearr_43094_43178[(2)] = inst_43088);

(statearr_43094_43178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (20))){
var inst_42991 = (state_43092[(7)]);
var inst_43003 = cljs.core.first.call(null,inst_42991);
var inst_43004 = cljs.core.nth.call(null,inst_43003,(0),null);
var inst_43005 = cljs.core.nth.call(null,inst_43003,(1),null);
var state_43092__$1 = (function (){var statearr_43095 = state_43092;
(statearr_43095[(8)] = inst_43004);

return statearr_43095;
})();
if(cljs.core.truth_(inst_43005)){
var statearr_43096_43179 = state_43092__$1;
(statearr_43096_43179[(1)] = (22));

} else {
var statearr_43097_43180 = state_43092__$1;
(statearr_43097_43180[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (27))){
var inst_42960 = (state_43092[(9)]);
var inst_43040 = (state_43092[(10)]);
var inst_43035 = (state_43092[(11)]);
var inst_43033 = (state_43092[(12)]);
var inst_43040__$1 = cljs.core._nth.call(null,inst_43033,inst_43035);
var inst_43041 = cljs.core.async.put_BANG_.call(null,inst_43040__$1,inst_42960,done);
var state_43092__$1 = (function (){var statearr_43098 = state_43092;
(statearr_43098[(10)] = inst_43040__$1);

return statearr_43098;
})();
if(cljs.core.truth_(inst_43041)){
var statearr_43099_43181 = state_43092__$1;
(statearr_43099_43181[(1)] = (30));

} else {
var statearr_43100_43182 = state_43092__$1;
(statearr_43100_43182[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (1))){
var state_43092__$1 = state_43092;
var statearr_43101_43183 = state_43092__$1;
(statearr_43101_43183[(2)] = null);

(statearr_43101_43183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (24))){
var inst_42991 = (state_43092[(7)]);
var inst_43010 = (state_43092[(2)]);
var inst_43011 = cljs.core.next.call(null,inst_42991);
var inst_42969 = inst_43011;
var inst_42970 = null;
var inst_42971 = (0);
var inst_42972 = (0);
var state_43092__$1 = (function (){var statearr_43102 = state_43092;
(statearr_43102[(13)] = inst_42971);

(statearr_43102[(14)] = inst_42969);

(statearr_43102[(15)] = inst_43010);

(statearr_43102[(16)] = inst_42970);

(statearr_43102[(17)] = inst_42972);

return statearr_43102;
})();
var statearr_43103_43184 = state_43092__$1;
(statearr_43103_43184[(2)] = null);

(statearr_43103_43184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (39))){
var state_43092__$1 = state_43092;
var statearr_43107_43185 = state_43092__$1;
(statearr_43107_43185[(2)] = null);

(statearr_43107_43185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (4))){
var inst_42960 = (state_43092[(9)]);
var inst_42960__$1 = (state_43092[(2)]);
var inst_42961 = (inst_42960__$1 == null);
var state_43092__$1 = (function (){var statearr_43108 = state_43092;
(statearr_43108[(9)] = inst_42960__$1);

return statearr_43108;
})();
if(cljs.core.truth_(inst_42961)){
var statearr_43109_43186 = state_43092__$1;
(statearr_43109_43186[(1)] = (5));

} else {
var statearr_43110_43187 = state_43092__$1;
(statearr_43110_43187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (15))){
var inst_42971 = (state_43092[(13)]);
var inst_42969 = (state_43092[(14)]);
var inst_42970 = (state_43092[(16)]);
var inst_42972 = (state_43092[(17)]);
var inst_42987 = (state_43092[(2)]);
var inst_42988 = (inst_42972 + (1));
var tmp43104 = inst_42971;
var tmp43105 = inst_42969;
var tmp43106 = inst_42970;
var inst_42969__$1 = tmp43105;
var inst_42970__$1 = tmp43106;
var inst_42971__$1 = tmp43104;
var inst_42972__$1 = inst_42988;
var state_43092__$1 = (function (){var statearr_43111 = state_43092;
(statearr_43111[(13)] = inst_42971__$1);

(statearr_43111[(14)] = inst_42969__$1);

(statearr_43111[(18)] = inst_42987);

(statearr_43111[(16)] = inst_42970__$1);

(statearr_43111[(17)] = inst_42972__$1);

return statearr_43111;
})();
var statearr_43112_43188 = state_43092__$1;
(statearr_43112_43188[(2)] = null);

(statearr_43112_43188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (21))){
var inst_43014 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43116_43189 = state_43092__$1;
(statearr_43116_43189[(2)] = inst_43014);

(statearr_43116_43189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (31))){
var inst_43040 = (state_43092[(10)]);
var inst_43044 = done.call(null,null);
var inst_43045 = cljs.core.async.untap_STAR_.call(null,m,inst_43040);
var state_43092__$1 = (function (){var statearr_43117 = state_43092;
(statearr_43117[(19)] = inst_43044);

return statearr_43117;
})();
var statearr_43118_43190 = state_43092__$1;
(statearr_43118_43190[(2)] = inst_43045);

(statearr_43118_43190[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (32))){
var inst_43035 = (state_43092[(11)]);
var inst_43034 = (state_43092[(20)]);
var inst_43033 = (state_43092[(12)]);
var inst_43032 = (state_43092[(21)]);
var inst_43047 = (state_43092[(2)]);
var inst_43048 = (inst_43035 + (1));
var tmp43113 = inst_43034;
var tmp43114 = inst_43033;
var tmp43115 = inst_43032;
var inst_43032__$1 = tmp43115;
var inst_43033__$1 = tmp43114;
var inst_43034__$1 = tmp43113;
var inst_43035__$1 = inst_43048;
var state_43092__$1 = (function (){var statearr_43119 = state_43092;
(statearr_43119[(11)] = inst_43035__$1);

(statearr_43119[(20)] = inst_43034__$1);

(statearr_43119[(22)] = inst_43047);

(statearr_43119[(12)] = inst_43033__$1);

(statearr_43119[(21)] = inst_43032__$1);

return statearr_43119;
})();
var statearr_43120_43191 = state_43092__$1;
(statearr_43120_43191[(2)] = null);

(statearr_43120_43191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (40))){
var inst_43060 = (state_43092[(23)]);
var inst_43064 = done.call(null,null);
var inst_43065 = cljs.core.async.untap_STAR_.call(null,m,inst_43060);
var state_43092__$1 = (function (){var statearr_43121 = state_43092;
(statearr_43121[(24)] = inst_43064);

return statearr_43121;
})();
var statearr_43122_43192 = state_43092__$1;
(statearr_43122_43192[(2)] = inst_43065);

(statearr_43122_43192[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (33))){
var inst_43051 = (state_43092[(25)]);
var inst_43053 = cljs.core.chunked_seq_QMARK_.call(null,inst_43051);
var state_43092__$1 = state_43092;
if(inst_43053){
var statearr_43123_43193 = state_43092__$1;
(statearr_43123_43193[(1)] = (36));

} else {
var statearr_43124_43194 = state_43092__$1;
(statearr_43124_43194[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (13))){
var inst_42981 = (state_43092[(26)]);
var inst_42984 = cljs.core.async.close_BANG_.call(null,inst_42981);
var state_43092__$1 = state_43092;
var statearr_43125_43195 = state_43092__$1;
(statearr_43125_43195[(2)] = inst_42984);

(statearr_43125_43195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (22))){
var inst_43004 = (state_43092[(8)]);
var inst_43007 = cljs.core.async.close_BANG_.call(null,inst_43004);
var state_43092__$1 = state_43092;
var statearr_43126_43196 = state_43092__$1;
(statearr_43126_43196[(2)] = inst_43007);

(statearr_43126_43196[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (36))){
var inst_43051 = (state_43092[(25)]);
var inst_43055 = cljs.core.chunk_first.call(null,inst_43051);
var inst_43056 = cljs.core.chunk_rest.call(null,inst_43051);
var inst_43057 = cljs.core.count.call(null,inst_43055);
var inst_43032 = inst_43056;
var inst_43033 = inst_43055;
var inst_43034 = inst_43057;
var inst_43035 = (0);
var state_43092__$1 = (function (){var statearr_43127 = state_43092;
(statearr_43127[(11)] = inst_43035);

(statearr_43127[(20)] = inst_43034);

(statearr_43127[(12)] = inst_43033);

(statearr_43127[(21)] = inst_43032);

return statearr_43127;
})();
var statearr_43128_43197 = state_43092__$1;
(statearr_43128_43197[(2)] = null);

(statearr_43128_43197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (41))){
var inst_43051 = (state_43092[(25)]);
var inst_43067 = (state_43092[(2)]);
var inst_43068 = cljs.core.next.call(null,inst_43051);
var inst_43032 = inst_43068;
var inst_43033 = null;
var inst_43034 = (0);
var inst_43035 = (0);
var state_43092__$1 = (function (){var statearr_43129 = state_43092;
(statearr_43129[(11)] = inst_43035);

(statearr_43129[(20)] = inst_43034);

(statearr_43129[(12)] = inst_43033);

(statearr_43129[(21)] = inst_43032);

(statearr_43129[(27)] = inst_43067);

return statearr_43129;
})();
var statearr_43130_43198 = state_43092__$1;
(statearr_43130_43198[(2)] = null);

(statearr_43130_43198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (43))){
var state_43092__$1 = state_43092;
var statearr_43131_43199 = state_43092__$1;
(statearr_43131_43199[(2)] = null);

(statearr_43131_43199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (29))){
var inst_43076 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43132_43200 = state_43092__$1;
(statearr_43132_43200[(2)] = inst_43076);

(statearr_43132_43200[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (44))){
var inst_43085 = (state_43092[(2)]);
var state_43092__$1 = (function (){var statearr_43133 = state_43092;
(statearr_43133[(28)] = inst_43085);

return statearr_43133;
})();
var statearr_43134_43201 = state_43092__$1;
(statearr_43134_43201[(2)] = null);

(statearr_43134_43201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (6))){
var inst_43024 = (state_43092[(29)]);
var inst_43023 = cljs.core.deref.call(null,cs);
var inst_43024__$1 = cljs.core.keys.call(null,inst_43023);
var inst_43025 = cljs.core.count.call(null,inst_43024__$1);
var inst_43026 = cljs.core.reset_BANG_.call(null,dctr,inst_43025);
var inst_43031 = cljs.core.seq.call(null,inst_43024__$1);
var inst_43032 = inst_43031;
var inst_43033 = null;
var inst_43034 = (0);
var inst_43035 = (0);
var state_43092__$1 = (function (){var statearr_43135 = state_43092;
(statearr_43135[(29)] = inst_43024__$1);

(statearr_43135[(30)] = inst_43026);

(statearr_43135[(11)] = inst_43035);

(statearr_43135[(20)] = inst_43034);

(statearr_43135[(12)] = inst_43033);

(statearr_43135[(21)] = inst_43032);

return statearr_43135;
})();
var statearr_43136_43202 = state_43092__$1;
(statearr_43136_43202[(2)] = null);

(statearr_43136_43202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (28))){
var inst_43051 = (state_43092[(25)]);
var inst_43032 = (state_43092[(21)]);
var inst_43051__$1 = cljs.core.seq.call(null,inst_43032);
var state_43092__$1 = (function (){var statearr_43137 = state_43092;
(statearr_43137[(25)] = inst_43051__$1);

return statearr_43137;
})();
if(inst_43051__$1){
var statearr_43138_43203 = state_43092__$1;
(statearr_43138_43203[(1)] = (33));

} else {
var statearr_43139_43204 = state_43092__$1;
(statearr_43139_43204[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (25))){
var inst_43035 = (state_43092[(11)]);
var inst_43034 = (state_43092[(20)]);
var inst_43037 = (inst_43035 < inst_43034);
var inst_43038 = inst_43037;
var state_43092__$1 = state_43092;
if(cljs.core.truth_(inst_43038)){
var statearr_43140_43205 = state_43092__$1;
(statearr_43140_43205[(1)] = (27));

} else {
var statearr_43141_43206 = state_43092__$1;
(statearr_43141_43206[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (34))){
var state_43092__$1 = state_43092;
var statearr_43142_43207 = state_43092__$1;
(statearr_43142_43207[(2)] = null);

(statearr_43142_43207[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (17))){
var state_43092__$1 = state_43092;
var statearr_43143_43208 = state_43092__$1;
(statearr_43143_43208[(2)] = null);

(statearr_43143_43208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (3))){
var inst_43090 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43092__$1,inst_43090);
} else {
if((state_val_43093 === (12))){
var inst_43019 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43144_43209 = state_43092__$1;
(statearr_43144_43209[(2)] = inst_43019);

(statearr_43144_43209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (2))){
var state_43092__$1 = state_43092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43092__$1,(4),ch);
} else {
if((state_val_43093 === (23))){
var state_43092__$1 = state_43092;
var statearr_43145_43210 = state_43092__$1;
(statearr_43145_43210[(2)] = null);

(statearr_43145_43210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (35))){
var inst_43074 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43146_43211 = state_43092__$1;
(statearr_43146_43211[(2)] = inst_43074);

(statearr_43146_43211[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (19))){
var inst_42991 = (state_43092[(7)]);
var inst_42995 = cljs.core.chunk_first.call(null,inst_42991);
var inst_42996 = cljs.core.chunk_rest.call(null,inst_42991);
var inst_42997 = cljs.core.count.call(null,inst_42995);
var inst_42969 = inst_42996;
var inst_42970 = inst_42995;
var inst_42971 = inst_42997;
var inst_42972 = (0);
var state_43092__$1 = (function (){var statearr_43147 = state_43092;
(statearr_43147[(13)] = inst_42971);

(statearr_43147[(14)] = inst_42969);

(statearr_43147[(16)] = inst_42970);

(statearr_43147[(17)] = inst_42972);

return statearr_43147;
})();
var statearr_43148_43212 = state_43092__$1;
(statearr_43148_43212[(2)] = null);

(statearr_43148_43212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (11))){
var inst_42969 = (state_43092[(14)]);
var inst_42991 = (state_43092[(7)]);
var inst_42991__$1 = cljs.core.seq.call(null,inst_42969);
var state_43092__$1 = (function (){var statearr_43149 = state_43092;
(statearr_43149[(7)] = inst_42991__$1);

return statearr_43149;
})();
if(inst_42991__$1){
var statearr_43150_43213 = state_43092__$1;
(statearr_43150_43213[(1)] = (16));

} else {
var statearr_43151_43214 = state_43092__$1;
(statearr_43151_43214[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (9))){
var inst_43021 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43152_43215 = state_43092__$1;
(statearr_43152_43215[(2)] = inst_43021);

(statearr_43152_43215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (5))){
var inst_42967 = cljs.core.deref.call(null,cs);
var inst_42968 = cljs.core.seq.call(null,inst_42967);
var inst_42969 = inst_42968;
var inst_42970 = null;
var inst_42971 = (0);
var inst_42972 = (0);
var state_43092__$1 = (function (){var statearr_43153 = state_43092;
(statearr_43153[(13)] = inst_42971);

(statearr_43153[(14)] = inst_42969);

(statearr_43153[(16)] = inst_42970);

(statearr_43153[(17)] = inst_42972);

return statearr_43153;
})();
var statearr_43154_43216 = state_43092__$1;
(statearr_43154_43216[(2)] = null);

(statearr_43154_43216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (14))){
var state_43092__$1 = state_43092;
var statearr_43155_43217 = state_43092__$1;
(statearr_43155_43217[(2)] = null);

(statearr_43155_43217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (45))){
var inst_43082 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43156_43218 = state_43092__$1;
(statearr_43156_43218[(2)] = inst_43082);

(statearr_43156_43218[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (26))){
var inst_43024 = (state_43092[(29)]);
var inst_43078 = (state_43092[(2)]);
var inst_43079 = cljs.core.seq.call(null,inst_43024);
var state_43092__$1 = (function (){var statearr_43157 = state_43092;
(statearr_43157[(31)] = inst_43078);

return statearr_43157;
})();
if(inst_43079){
var statearr_43158_43219 = state_43092__$1;
(statearr_43158_43219[(1)] = (42));

} else {
var statearr_43159_43220 = state_43092__$1;
(statearr_43159_43220[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (16))){
var inst_42991 = (state_43092[(7)]);
var inst_42993 = cljs.core.chunked_seq_QMARK_.call(null,inst_42991);
var state_43092__$1 = state_43092;
if(inst_42993){
var statearr_43160_43221 = state_43092__$1;
(statearr_43160_43221[(1)] = (19));

} else {
var statearr_43161_43222 = state_43092__$1;
(statearr_43161_43222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (38))){
var inst_43071 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43162_43223 = state_43092__$1;
(statearr_43162_43223[(2)] = inst_43071);

(statearr_43162_43223[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (30))){
var state_43092__$1 = state_43092;
var statearr_43163_43224 = state_43092__$1;
(statearr_43163_43224[(2)] = null);

(statearr_43163_43224[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (10))){
var inst_42970 = (state_43092[(16)]);
var inst_42972 = (state_43092[(17)]);
var inst_42980 = cljs.core._nth.call(null,inst_42970,inst_42972);
var inst_42981 = cljs.core.nth.call(null,inst_42980,(0),null);
var inst_42982 = cljs.core.nth.call(null,inst_42980,(1),null);
var state_43092__$1 = (function (){var statearr_43164 = state_43092;
(statearr_43164[(26)] = inst_42981);

return statearr_43164;
})();
if(cljs.core.truth_(inst_42982)){
var statearr_43165_43225 = state_43092__$1;
(statearr_43165_43225[(1)] = (13));

} else {
var statearr_43166_43226 = state_43092__$1;
(statearr_43166_43226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (18))){
var inst_43017 = (state_43092[(2)]);
var state_43092__$1 = state_43092;
var statearr_43167_43227 = state_43092__$1;
(statearr_43167_43227[(2)] = inst_43017);

(statearr_43167_43227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (42))){
var state_43092__$1 = state_43092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43092__$1,(45),dchan);
} else {
if((state_val_43093 === (37))){
var inst_43060 = (state_43092[(23)]);
var inst_42960 = (state_43092[(9)]);
var inst_43051 = (state_43092[(25)]);
var inst_43060__$1 = cljs.core.first.call(null,inst_43051);
var inst_43061 = cljs.core.async.put_BANG_.call(null,inst_43060__$1,inst_42960,done);
var state_43092__$1 = (function (){var statearr_43168 = state_43092;
(statearr_43168[(23)] = inst_43060__$1);

return statearr_43168;
})();
if(cljs.core.truth_(inst_43061)){
var statearr_43169_43228 = state_43092__$1;
(statearr_43169_43228[(1)] = (39));

} else {
var statearr_43170_43229 = state_43092__$1;
(statearr_43170_43229[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43093 === (8))){
var inst_42971 = (state_43092[(13)]);
var inst_42972 = (state_43092[(17)]);
var inst_42974 = (inst_42972 < inst_42971);
var inst_42975 = inst_42974;
var state_43092__$1 = state_43092;
if(cljs.core.truth_(inst_42975)){
var statearr_43171_43230 = state_43092__$1;
(statearr_43171_43230[(1)] = (10));

} else {
var statearr_43172_43231 = state_43092__$1;
(statearr_43172_43231[(1)] = (11));

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
});})(c__33146__auto___43177,cs,m,dchan,dctr,done))
;
return ((function (switch__33123__auto__,c__33146__auto___43177,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33124__auto__ = null;
var cljs$core$async$mult_$_state_machine__33124__auto____0 = (function (){
var statearr_43173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43173[(0)] = cljs$core$async$mult_$_state_machine__33124__auto__);

(statearr_43173[(1)] = (1));

return statearr_43173;
});
var cljs$core$async$mult_$_state_machine__33124__auto____1 = (function (state_43092){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43174){if((e43174 instanceof Object)){
var ex__33127__auto__ = e43174;
var statearr_43175_43232 = state_43092;
(statearr_43175_43232[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43233 = state_43092;
state_43092 = G__43233;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33124__auto__ = function(state_43092){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33124__auto____1.call(this,state_43092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33124__auto____0;
cljs$core$async$mult_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33124__auto____1;
return cljs$core$async$mult_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43177,cs,m,dchan,dctr,done))
})();
var state__33148__auto__ = (function (){var statearr_43176 = f__33147__auto__.call(null);
(statearr_43176[(6)] = c__33146__auto___43177);

return statearr_43176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43177,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43235 = arguments.length;
switch (G__43235) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,ch);
} else {
var m__30916__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,ch);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,ch);
} else {
var m__30916__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,ch);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m);
} else {
var m__30916__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,state_map);
} else {
var m__30916__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,state_map);
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
var x__30915__auto__ = (((m == null))?null:m);
var m__30916__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,m,mode);
} else {
var m__30916__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31466__auto__ = [];
var len__31459__auto___43247 = arguments.length;
var i__31460__auto___43248 = (0);
while(true){
if((i__31460__auto___43248 < len__31459__auto___43247)){
args__31466__auto__.push((arguments[i__31460__auto___43248]));

var G__43249 = (i__31460__auto___43248 + (1));
i__31460__auto___43248 = G__43249;
continue;
} else {
}
break;
}

var argseq__31467__auto__ = ((((3) < args__31466__auto__.length))?(new cljs.core.IndexedSeq(args__31466__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31467__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43241){
var map__43242 = p__43241;
var map__43242__$1 = ((((!((map__43242 == null)))?((((map__43242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43242):map__43242);
var opts = map__43242__$1;
var statearr_43244_43250 = state;
(statearr_43244_43250[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__43242,map__43242__$1,opts){
return (function (val){
var statearr_43245_43251 = state;
(statearr_43245_43251[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43242,map__43242__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_43246_43252 = state;
(statearr_43246_43252[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43237){
var G__43238 = cljs.core.first.call(null,seq43237);
var seq43237__$1 = cljs.core.next.call(null,seq43237);
var G__43239 = cljs.core.first.call(null,seq43237__$1);
var seq43237__$2 = cljs.core.next.call(null,seq43237__$1);
var G__43240 = cljs.core.first.call(null,seq43237__$2);
var seq43237__$3 = cljs.core.next.call(null,seq43237__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43238,G__43239,G__43240,seq43237__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async43253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43253 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta43254){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta43254 = meta43254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43255,meta43254__$1){
var self__ = this;
var _43255__$1 = this;
return (new cljs.core.async.t_cljs$core$async43253(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta43254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43255){
var self__ = this;
var _43255__$1 = this;
return self__.meta43254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta43254","meta43254",-1797344986,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43253";

cljs.core.async.t_cljs$core$async43253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43253(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43254){
return (new cljs.core.async.t_cljs$core$async43253(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta43254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43253(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33146__auto___43417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43357){
var state_val_43358 = (state_43357[(1)]);
if((state_val_43358 === (7))){
var inst_43272 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43359_43418 = state_43357__$1;
(statearr_43359_43418[(2)] = inst_43272);

(statearr_43359_43418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (20))){
var inst_43284 = (state_43357[(7)]);
var state_43357__$1 = state_43357;
var statearr_43360_43419 = state_43357__$1;
(statearr_43360_43419[(2)] = inst_43284);

(statearr_43360_43419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (27))){
var state_43357__$1 = state_43357;
var statearr_43361_43420 = state_43357__$1;
(statearr_43361_43420[(2)] = null);

(statearr_43361_43420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (1))){
var inst_43259 = (state_43357[(8)]);
var inst_43259__$1 = calc_state.call(null);
var inst_43261 = (inst_43259__$1 == null);
var inst_43262 = cljs.core.not.call(null,inst_43261);
var state_43357__$1 = (function (){var statearr_43362 = state_43357;
(statearr_43362[(8)] = inst_43259__$1);

return statearr_43362;
})();
if(inst_43262){
var statearr_43363_43421 = state_43357__$1;
(statearr_43363_43421[(1)] = (2));

} else {
var statearr_43364_43422 = state_43357__$1;
(statearr_43364_43422[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (24))){
var inst_43317 = (state_43357[(9)]);
var inst_43308 = (state_43357[(10)]);
var inst_43331 = (state_43357[(11)]);
var inst_43331__$1 = inst_43308.call(null,inst_43317);
var state_43357__$1 = (function (){var statearr_43365 = state_43357;
(statearr_43365[(11)] = inst_43331__$1);

return statearr_43365;
})();
if(cljs.core.truth_(inst_43331__$1)){
var statearr_43366_43423 = state_43357__$1;
(statearr_43366_43423[(1)] = (29));

} else {
var statearr_43367_43424 = state_43357__$1;
(statearr_43367_43424[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (4))){
var inst_43275 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43275)){
var statearr_43368_43425 = state_43357__$1;
(statearr_43368_43425[(1)] = (8));

} else {
var statearr_43369_43426 = state_43357__$1;
(statearr_43369_43426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (15))){
var inst_43302 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43302)){
var statearr_43370_43427 = state_43357__$1;
(statearr_43370_43427[(1)] = (19));

} else {
var statearr_43371_43428 = state_43357__$1;
(statearr_43371_43428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (21))){
var inst_43307 = (state_43357[(12)]);
var inst_43307__$1 = (state_43357[(2)]);
var inst_43308 = cljs.core.get.call(null,inst_43307__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43309 = cljs.core.get.call(null,inst_43307__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43310 = cljs.core.get.call(null,inst_43307__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43357__$1 = (function (){var statearr_43372 = state_43357;
(statearr_43372[(13)] = inst_43309);

(statearr_43372[(10)] = inst_43308);

(statearr_43372[(12)] = inst_43307__$1);

return statearr_43372;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43357__$1,(22),inst_43310);
} else {
if((state_val_43358 === (31))){
var inst_43339 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43339)){
var statearr_43373_43429 = state_43357__$1;
(statearr_43373_43429[(1)] = (32));

} else {
var statearr_43374_43430 = state_43357__$1;
(statearr_43374_43430[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (32))){
var inst_43316 = (state_43357[(14)]);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43357__$1,(35),out,inst_43316);
} else {
if((state_val_43358 === (33))){
var inst_43307 = (state_43357[(12)]);
var inst_43284 = inst_43307;
var state_43357__$1 = (function (){var statearr_43375 = state_43357;
(statearr_43375[(7)] = inst_43284);

return statearr_43375;
})();
var statearr_43376_43431 = state_43357__$1;
(statearr_43376_43431[(2)] = null);

(statearr_43376_43431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (13))){
var inst_43284 = (state_43357[(7)]);
var inst_43291 = inst_43284.cljs$lang$protocol_mask$partition0$;
var inst_43292 = (inst_43291 & (64));
var inst_43293 = inst_43284.cljs$core$ISeq$;
var inst_43294 = (cljs.core.PROTOCOL_SENTINEL === inst_43293);
var inst_43295 = (inst_43292) || (inst_43294);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43295)){
var statearr_43377_43432 = state_43357__$1;
(statearr_43377_43432[(1)] = (16));

} else {
var statearr_43378_43433 = state_43357__$1;
(statearr_43378_43433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (22))){
var inst_43317 = (state_43357[(9)]);
var inst_43316 = (state_43357[(14)]);
var inst_43315 = (state_43357[(2)]);
var inst_43316__$1 = cljs.core.nth.call(null,inst_43315,(0),null);
var inst_43317__$1 = cljs.core.nth.call(null,inst_43315,(1),null);
var inst_43318 = (inst_43316__$1 == null);
var inst_43319 = cljs.core._EQ_.call(null,inst_43317__$1,change);
var inst_43320 = (inst_43318) || (inst_43319);
var state_43357__$1 = (function (){var statearr_43379 = state_43357;
(statearr_43379[(9)] = inst_43317__$1);

(statearr_43379[(14)] = inst_43316__$1);

return statearr_43379;
})();
if(cljs.core.truth_(inst_43320)){
var statearr_43380_43434 = state_43357__$1;
(statearr_43380_43434[(1)] = (23));

} else {
var statearr_43381_43435 = state_43357__$1;
(statearr_43381_43435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (36))){
var inst_43307 = (state_43357[(12)]);
var inst_43284 = inst_43307;
var state_43357__$1 = (function (){var statearr_43382 = state_43357;
(statearr_43382[(7)] = inst_43284);

return statearr_43382;
})();
var statearr_43383_43436 = state_43357__$1;
(statearr_43383_43436[(2)] = null);

(statearr_43383_43436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (29))){
var inst_43331 = (state_43357[(11)]);
var state_43357__$1 = state_43357;
var statearr_43384_43437 = state_43357__$1;
(statearr_43384_43437[(2)] = inst_43331);

(statearr_43384_43437[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (6))){
var state_43357__$1 = state_43357;
var statearr_43385_43438 = state_43357__$1;
(statearr_43385_43438[(2)] = false);

(statearr_43385_43438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (28))){
var inst_43327 = (state_43357[(2)]);
var inst_43328 = calc_state.call(null);
var inst_43284 = inst_43328;
var state_43357__$1 = (function (){var statearr_43386 = state_43357;
(statearr_43386[(7)] = inst_43284);

(statearr_43386[(15)] = inst_43327);

return statearr_43386;
})();
var statearr_43387_43439 = state_43357__$1;
(statearr_43387_43439[(2)] = null);

(statearr_43387_43439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (25))){
var inst_43353 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43388_43440 = state_43357__$1;
(statearr_43388_43440[(2)] = inst_43353);

(statearr_43388_43440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (34))){
var inst_43351 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43389_43441 = state_43357__$1;
(statearr_43389_43441[(2)] = inst_43351);

(statearr_43389_43441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (17))){
var state_43357__$1 = state_43357;
var statearr_43390_43442 = state_43357__$1;
(statearr_43390_43442[(2)] = false);

(statearr_43390_43442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (3))){
var state_43357__$1 = state_43357;
var statearr_43391_43443 = state_43357__$1;
(statearr_43391_43443[(2)] = false);

(statearr_43391_43443[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (12))){
var inst_43355 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43357__$1,inst_43355);
} else {
if((state_val_43358 === (2))){
var inst_43259 = (state_43357[(8)]);
var inst_43264 = inst_43259.cljs$lang$protocol_mask$partition0$;
var inst_43265 = (inst_43264 & (64));
var inst_43266 = inst_43259.cljs$core$ISeq$;
var inst_43267 = (cljs.core.PROTOCOL_SENTINEL === inst_43266);
var inst_43268 = (inst_43265) || (inst_43267);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43268)){
var statearr_43392_43444 = state_43357__$1;
(statearr_43392_43444[(1)] = (5));

} else {
var statearr_43393_43445 = state_43357__$1;
(statearr_43393_43445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (23))){
var inst_43316 = (state_43357[(14)]);
var inst_43322 = (inst_43316 == null);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43322)){
var statearr_43394_43446 = state_43357__$1;
(statearr_43394_43446[(1)] = (26));

} else {
var statearr_43395_43447 = state_43357__$1;
(statearr_43395_43447[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (35))){
var inst_43342 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
if(cljs.core.truth_(inst_43342)){
var statearr_43396_43448 = state_43357__$1;
(statearr_43396_43448[(1)] = (36));

} else {
var statearr_43397_43449 = state_43357__$1;
(statearr_43397_43449[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (19))){
var inst_43284 = (state_43357[(7)]);
var inst_43304 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43284);
var state_43357__$1 = state_43357;
var statearr_43398_43450 = state_43357__$1;
(statearr_43398_43450[(2)] = inst_43304);

(statearr_43398_43450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (11))){
var inst_43284 = (state_43357[(7)]);
var inst_43288 = (inst_43284 == null);
var inst_43289 = cljs.core.not.call(null,inst_43288);
var state_43357__$1 = state_43357;
if(inst_43289){
var statearr_43399_43451 = state_43357__$1;
(statearr_43399_43451[(1)] = (13));

} else {
var statearr_43400_43452 = state_43357__$1;
(statearr_43400_43452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (9))){
var inst_43259 = (state_43357[(8)]);
var state_43357__$1 = state_43357;
var statearr_43401_43453 = state_43357__$1;
(statearr_43401_43453[(2)] = inst_43259);

(statearr_43401_43453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (5))){
var state_43357__$1 = state_43357;
var statearr_43402_43454 = state_43357__$1;
(statearr_43402_43454[(2)] = true);

(statearr_43402_43454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (14))){
var state_43357__$1 = state_43357;
var statearr_43403_43455 = state_43357__$1;
(statearr_43403_43455[(2)] = false);

(statearr_43403_43455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (26))){
var inst_43317 = (state_43357[(9)]);
var inst_43324 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43317);
var state_43357__$1 = state_43357;
var statearr_43404_43456 = state_43357__$1;
(statearr_43404_43456[(2)] = inst_43324);

(statearr_43404_43456[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (16))){
var state_43357__$1 = state_43357;
var statearr_43405_43457 = state_43357__$1;
(statearr_43405_43457[(2)] = true);

(statearr_43405_43457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (38))){
var inst_43347 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43406_43458 = state_43357__$1;
(statearr_43406_43458[(2)] = inst_43347);

(statearr_43406_43458[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (30))){
var inst_43317 = (state_43357[(9)]);
var inst_43309 = (state_43357[(13)]);
var inst_43308 = (state_43357[(10)]);
var inst_43334 = cljs.core.empty_QMARK_.call(null,inst_43308);
var inst_43335 = inst_43309.call(null,inst_43317);
var inst_43336 = cljs.core.not.call(null,inst_43335);
var inst_43337 = (inst_43334) && (inst_43336);
var state_43357__$1 = state_43357;
var statearr_43407_43459 = state_43357__$1;
(statearr_43407_43459[(2)] = inst_43337);

(statearr_43407_43459[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (10))){
var inst_43259 = (state_43357[(8)]);
var inst_43280 = (state_43357[(2)]);
var inst_43281 = cljs.core.get.call(null,inst_43280,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43282 = cljs.core.get.call(null,inst_43280,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43283 = cljs.core.get.call(null,inst_43280,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43284 = inst_43259;
var state_43357__$1 = (function (){var statearr_43408 = state_43357;
(statearr_43408[(7)] = inst_43284);

(statearr_43408[(16)] = inst_43282);

(statearr_43408[(17)] = inst_43283);

(statearr_43408[(18)] = inst_43281);

return statearr_43408;
})();
var statearr_43409_43460 = state_43357__$1;
(statearr_43409_43460[(2)] = null);

(statearr_43409_43460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (18))){
var inst_43299 = (state_43357[(2)]);
var state_43357__$1 = state_43357;
var statearr_43410_43461 = state_43357__$1;
(statearr_43410_43461[(2)] = inst_43299);

(statearr_43410_43461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (37))){
var state_43357__$1 = state_43357;
var statearr_43411_43462 = state_43357__$1;
(statearr_43411_43462[(2)] = null);

(statearr_43411_43462[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43358 === (8))){
var inst_43259 = (state_43357[(8)]);
var inst_43277 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43259);
var state_43357__$1 = state_43357;
var statearr_43412_43463 = state_43357__$1;
(statearr_43412_43463[(2)] = inst_43277);

(statearr_43412_43463[(1)] = (10));


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
});})(c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33123__auto__,c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33124__auto__ = null;
var cljs$core$async$mix_$_state_machine__33124__auto____0 = (function (){
var statearr_43413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43413[(0)] = cljs$core$async$mix_$_state_machine__33124__auto__);

(statearr_43413[(1)] = (1));

return statearr_43413;
});
var cljs$core$async$mix_$_state_machine__33124__auto____1 = (function (state_43357){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43414){if((e43414 instanceof Object)){
var ex__33127__auto__ = e43414;
var statearr_43415_43464 = state_43357;
(statearr_43415_43464[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43465 = state_43357;
state_43357 = G__43465;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33124__auto__ = function(state_43357){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33124__auto____1.call(this,state_43357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33124__auto____0;
cljs$core$async$mix_$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33124__auto____1;
return cljs$core$async$mix_$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33148__auto__ = (function (){var statearr_43416 = f__33147__auto__.call(null);
(statearr_43416[(6)] = c__33146__auto___43417);

return statearr_43416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30915__auto__ = (((p == null))?null:p);
var m__30916__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30916__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30915__auto__ = (((p == null))?null:p);
var m__30916__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,p,v,ch);
} else {
var m__30916__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43467 = arguments.length;
switch (G__43467) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30915__auto__ = (((p == null))?null:p);
var m__30916__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,p);
} else {
var m__30916__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,p);
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
var x__30915__auto__ = (((p == null))?null:p);
var m__30916__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30915__auto__)]);
if(!((m__30916__auto__ == null))){
return m__30916__auto__.call(null,p,v);
} else {
var m__30916__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30916__auto____$1 == null))){
return m__30916__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43471 = arguments.length;
switch (G__43471) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30182__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30182__auto__)){
return or__30182__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30182__auto__,mults){
return (function (p1__43469_SHARP_){
if(cljs.core.truth_(p1__43469_SHARP_.call(null,topic))){
return p1__43469_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43469_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43472 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43473){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43473 = meta43473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43474,meta43473__$1){
var self__ = this;
var _43474__$1 = this;
return (new cljs.core.async.t_cljs$core$async43472(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43473__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43474){
var self__ = this;
var _43474__$1 = this;
return self__.meta43473;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43473","meta43473",1388494891,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43472";

cljs.core.async.t_cljs$core$async43472.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43472");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43472 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43473){
return (new cljs.core.async.t_cljs$core$async43472(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43473));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43472(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33146__auto___43592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43592,mults,ensure_mult,p){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43592,mults,ensure_mult,p){
return (function (state_43546){
var state_val_43547 = (state_43546[(1)]);
if((state_val_43547 === (7))){
var inst_43542 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43548_43593 = state_43546__$1;
(statearr_43548_43593[(2)] = inst_43542);

(statearr_43548_43593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (20))){
var state_43546__$1 = state_43546;
var statearr_43549_43594 = state_43546__$1;
(statearr_43549_43594[(2)] = null);

(statearr_43549_43594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (1))){
var state_43546__$1 = state_43546;
var statearr_43550_43595 = state_43546__$1;
(statearr_43550_43595[(2)] = null);

(statearr_43550_43595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (24))){
var inst_43525 = (state_43546[(7)]);
var inst_43534 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43525);
var state_43546__$1 = state_43546;
var statearr_43551_43596 = state_43546__$1;
(statearr_43551_43596[(2)] = inst_43534);

(statearr_43551_43596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (4))){
var inst_43477 = (state_43546[(8)]);
var inst_43477__$1 = (state_43546[(2)]);
var inst_43478 = (inst_43477__$1 == null);
var state_43546__$1 = (function (){var statearr_43552 = state_43546;
(statearr_43552[(8)] = inst_43477__$1);

return statearr_43552;
})();
if(cljs.core.truth_(inst_43478)){
var statearr_43553_43597 = state_43546__$1;
(statearr_43553_43597[(1)] = (5));

} else {
var statearr_43554_43598 = state_43546__$1;
(statearr_43554_43598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (15))){
var inst_43519 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43555_43599 = state_43546__$1;
(statearr_43555_43599[(2)] = inst_43519);

(statearr_43555_43599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (21))){
var inst_43539 = (state_43546[(2)]);
var state_43546__$1 = (function (){var statearr_43556 = state_43546;
(statearr_43556[(9)] = inst_43539);

return statearr_43556;
})();
var statearr_43557_43600 = state_43546__$1;
(statearr_43557_43600[(2)] = null);

(statearr_43557_43600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (13))){
var inst_43501 = (state_43546[(10)]);
var inst_43503 = cljs.core.chunked_seq_QMARK_.call(null,inst_43501);
var state_43546__$1 = state_43546;
if(inst_43503){
var statearr_43558_43601 = state_43546__$1;
(statearr_43558_43601[(1)] = (16));

} else {
var statearr_43559_43602 = state_43546__$1;
(statearr_43559_43602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (22))){
var inst_43531 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
if(cljs.core.truth_(inst_43531)){
var statearr_43560_43603 = state_43546__$1;
(statearr_43560_43603[(1)] = (23));

} else {
var statearr_43561_43604 = state_43546__$1;
(statearr_43561_43604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (6))){
var inst_43527 = (state_43546[(11)]);
var inst_43525 = (state_43546[(7)]);
var inst_43477 = (state_43546[(8)]);
var inst_43525__$1 = topic_fn.call(null,inst_43477);
var inst_43526 = cljs.core.deref.call(null,mults);
var inst_43527__$1 = cljs.core.get.call(null,inst_43526,inst_43525__$1);
var state_43546__$1 = (function (){var statearr_43562 = state_43546;
(statearr_43562[(11)] = inst_43527__$1);

(statearr_43562[(7)] = inst_43525__$1);

return statearr_43562;
})();
if(cljs.core.truth_(inst_43527__$1)){
var statearr_43563_43605 = state_43546__$1;
(statearr_43563_43605[(1)] = (19));

} else {
var statearr_43564_43606 = state_43546__$1;
(statearr_43564_43606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (25))){
var inst_43536 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43565_43607 = state_43546__$1;
(statearr_43565_43607[(2)] = inst_43536);

(statearr_43565_43607[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (17))){
var inst_43501 = (state_43546[(10)]);
var inst_43510 = cljs.core.first.call(null,inst_43501);
var inst_43511 = cljs.core.async.muxch_STAR_.call(null,inst_43510);
var inst_43512 = cljs.core.async.close_BANG_.call(null,inst_43511);
var inst_43513 = cljs.core.next.call(null,inst_43501);
var inst_43487 = inst_43513;
var inst_43488 = null;
var inst_43489 = (0);
var inst_43490 = (0);
var state_43546__$1 = (function (){var statearr_43566 = state_43546;
(statearr_43566[(12)] = inst_43489);

(statearr_43566[(13)] = inst_43488);

(statearr_43566[(14)] = inst_43512);

(statearr_43566[(15)] = inst_43490);

(statearr_43566[(16)] = inst_43487);

return statearr_43566;
})();
var statearr_43567_43608 = state_43546__$1;
(statearr_43567_43608[(2)] = null);

(statearr_43567_43608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (3))){
var inst_43544 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43546__$1,inst_43544);
} else {
if((state_val_43547 === (12))){
var inst_43521 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43568_43609 = state_43546__$1;
(statearr_43568_43609[(2)] = inst_43521);

(statearr_43568_43609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (2))){
var state_43546__$1 = state_43546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43546__$1,(4),ch);
} else {
if((state_val_43547 === (23))){
var state_43546__$1 = state_43546;
var statearr_43569_43610 = state_43546__$1;
(statearr_43569_43610[(2)] = null);

(statearr_43569_43610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (19))){
var inst_43527 = (state_43546[(11)]);
var inst_43477 = (state_43546[(8)]);
var inst_43529 = cljs.core.async.muxch_STAR_.call(null,inst_43527);
var state_43546__$1 = state_43546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43546__$1,(22),inst_43529,inst_43477);
} else {
if((state_val_43547 === (11))){
var inst_43487 = (state_43546[(16)]);
var inst_43501 = (state_43546[(10)]);
var inst_43501__$1 = cljs.core.seq.call(null,inst_43487);
var state_43546__$1 = (function (){var statearr_43570 = state_43546;
(statearr_43570[(10)] = inst_43501__$1);

return statearr_43570;
})();
if(inst_43501__$1){
var statearr_43571_43611 = state_43546__$1;
(statearr_43571_43611[(1)] = (13));

} else {
var statearr_43572_43612 = state_43546__$1;
(statearr_43572_43612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (9))){
var inst_43523 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43573_43613 = state_43546__$1;
(statearr_43573_43613[(2)] = inst_43523);

(statearr_43573_43613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (5))){
var inst_43484 = cljs.core.deref.call(null,mults);
var inst_43485 = cljs.core.vals.call(null,inst_43484);
var inst_43486 = cljs.core.seq.call(null,inst_43485);
var inst_43487 = inst_43486;
var inst_43488 = null;
var inst_43489 = (0);
var inst_43490 = (0);
var state_43546__$1 = (function (){var statearr_43574 = state_43546;
(statearr_43574[(12)] = inst_43489);

(statearr_43574[(13)] = inst_43488);

(statearr_43574[(15)] = inst_43490);

(statearr_43574[(16)] = inst_43487);

return statearr_43574;
})();
var statearr_43575_43614 = state_43546__$1;
(statearr_43575_43614[(2)] = null);

(statearr_43575_43614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (14))){
var state_43546__$1 = state_43546;
var statearr_43579_43615 = state_43546__$1;
(statearr_43579_43615[(2)] = null);

(statearr_43579_43615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (16))){
var inst_43501 = (state_43546[(10)]);
var inst_43505 = cljs.core.chunk_first.call(null,inst_43501);
var inst_43506 = cljs.core.chunk_rest.call(null,inst_43501);
var inst_43507 = cljs.core.count.call(null,inst_43505);
var inst_43487 = inst_43506;
var inst_43488 = inst_43505;
var inst_43489 = inst_43507;
var inst_43490 = (0);
var state_43546__$1 = (function (){var statearr_43580 = state_43546;
(statearr_43580[(12)] = inst_43489);

(statearr_43580[(13)] = inst_43488);

(statearr_43580[(15)] = inst_43490);

(statearr_43580[(16)] = inst_43487);

return statearr_43580;
})();
var statearr_43581_43616 = state_43546__$1;
(statearr_43581_43616[(2)] = null);

(statearr_43581_43616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (10))){
var inst_43489 = (state_43546[(12)]);
var inst_43488 = (state_43546[(13)]);
var inst_43490 = (state_43546[(15)]);
var inst_43487 = (state_43546[(16)]);
var inst_43495 = cljs.core._nth.call(null,inst_43488,inst_43490);
var inst_43496 = cljs.core.async.muxch_STAR_.call(null,inst_43495);
var inst_43497 = cljs.core.async.close_BANG_.call(null,inst_43496);
var inst_43498 = (inst_43490 + (1));
var tmp43576 = inst_43489;
var tmp43577 = inst_43488;
var tmp43578 = inst_43487;
var inst_43487__$1 = tmp43578;
var inst_43488__$1 = tmp43577;
var inst_43489__$1 = tmp43576;
var inst_43490__$1 = inst_43498;
var state_43546__$1 = (function (){var statearr_43582 = state_43546;
(statearr_43582[(12)] = inst_43489__$1);

(statearr_43582[(13)] = inst_43488__$1);

(statearr_43582[(15)] = inst_43490__$1);

(statearr_43582[(16)] = inst_43487__$1);

(statearr_43582[(17)] = inst_43497);

return statearr_43582;
})();
var statearr_43583_43617 = state_43546__$1;
(statearr_43583_43617[(2)] = null);

(statearr_43583_43617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (18))){
var inst_43516 = (state_43546[(2)]);
var state_43546__$1 = state_43546;
var statearr_43584_43618 = state_43546__$1;
(statearr_43584_43618[(2)] = inst_43516);

(statearr_43584_43618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43547 === (8))){
var inst_43489 = (state_43546[(12)]);
var inst_43490 = (state_43546[(15)]);
var inst_43492 = (inst_43490 < inst_43489);
var inst_43493 = inst_43492;
var state_43546__$1 = state_43546;
if(cljs.core.truth_(inst_43493)){
var statearr_43585_43619 = state_43546__$1;
(statearr_43585_43619[(1)] = (10));

} else {
var statearr_43586_43620 = state_43546__$1;
(statearr_43586_43620[(1)] = (11));

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
});})(c__33146__auto___43592,mults,ensure_mult,p))
;
return ((function (switch__33123__auto__,c__33146__auto___43592,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_43587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43587[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_43587[(1)] = (1));

return statearr_43587;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_43546){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43588){if((e43588 instanceof Object)){
var ex__33127__auto__ = e43588;
var statearr_43589_43621 = state_43546;
(statearr_43589_43621[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43622 = state_43546;
state_43546 = G__43622;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_43546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_43546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43592,mults,ensure_mult,p))
})();
var state__33148__auto__ = (function (){var statearr_43590 = f__33147__auto__.call(null);
(statearr_43590[(6)] = c__33146__auto___43592);

return statearr_43590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43592,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43624 = arguments.length;
switch (G__43624) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43627 = arguments.length;
switch (G__43627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43630 = arguments.length;
switch (G__43630) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33146__auto___43697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43669){
var state_val_43670 = (state_43669[(1)]);
if((state_val_43670 === (7))){
var state_43669__$1 = state_43669;
var statearr_43671_43698 = state_43669__$1;
(statearr_43671_43698[(2)] = null);

(statearr_43671_43698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (1))){
var state_43669__$1 = state_43669;
var statearr_43672_43699 = state_43669__$1;
(statearr_43672_43699[(2)] = null);

(statearr_43672_43699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (4))){
var inst_43633 = (state_43669[(7)]);
var inst_43635 = (inst_43633 < cnt);
var state_43669__$1 = state_43669;
if(cljs.core.truth_(inst_43635)){
var statearr_43673_43700 = state_43669__$1;
(statearr_43673_43700[(1)] = (6));

} else {
var statearr_43674_43701 = state_43669__$1;
(statearr_43674_43701[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (15))){
var inst_43665 = (state_43669[(2)]);
var state_43669__$1 = state_43669;
var statearr_43675_43702 = state_43669__$1;
(statearr_43675_43702[(2)] = inst_43665);

(statearr_43675_43702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (13))){
var inst_43658 = cljs.core.async.close_BANG_.call(null,out);
var state_43669__$1 = state_43669;
var statearr_43676_43703 = state_43669__$1;
(statearr_43676_43703[(2)] = inst_43658);

(statearr_43676_43703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (6))){
var state_43669__$1 = state_43669;
var statearr_43677_43704 = state_43669__$1;
(statearr_43677_43704[(2)] = null);

(statearr_43677_43704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (3))){
var inst_43667 = (state_43669[(2)]);
var state_43669__$1 = state_43669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43669__$1,inst_43667);
} else {
if((state_val_43670 === (12))){
var inst_43655 = (state_43669[(8)]);
var inst_43655__$1 = (state_43669[(2)]);
var inst_43656 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43655__$1);
var state_43669__$1 = (function (){var statearr_43678 = state_43669;
(statearr_43678[(8)] = inst_43655__$1);

return statearr_43678;
})();
if(cljs.core.truth_(inst_43656)){
var statearr_43679_43705 = state_43669__$1;
(statearr_43679_43705[(1)] = (13));

} else {
var statearr_43680_43706 = state_43669__$1;
(statearr_43680_43706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (2))){
var inst_43632 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43633 = (0);
var state_43669__$1 = (function (){var statearr_43681 = state_43669;
(statearr_43681[(7)] = inst_43633);

(statearr_43681[(9)] = inst_43632);

return statearr_43681;
})();
var statearr_43682_43707 = state_43669__$1;
(statearr_43682_43707[(2)] = null);

(statearr_43682_43707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (11))){
var inst_43633 = (state_43669[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43669,(10),Object,null,(9));
var inst_43642 = chs__$1.call(null,inst_43633);
var inst_43643 = done.call(null,inst_43633);
var inst_43644 = cljs.core.async.take_BANG_.call(null,inst_43642,inst_43643);
var state_43669__$1 = state_43669;
var statearr_43683_43708 = state_43669__$1;
(statearr_43683_43708[(2)] = inst_43644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (9))){
var inst_43633 = (state_43669[(7)]);
var inst_43646 = (state_43669[(2)]);
var inst_43647 = (inst_43633 + (1));
var inst_43633__$1 = inst_43647;
var state_43669__$1 = (function (){var statearr_43684 = state_43669;
(statearr_43684[(7)] = inst_43633__$1);

(statearr_43684[(10)] = inst_43646);

return statearr_43684;
})();
var statearr_43685_43709 = state_43669__$1;
(statearr_43685_43709[(2)] = null);

(statearr_43685_43709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (5))){
var inst_43653 = (state_43669[(2)]);
var state_43669__$1 = (function (){var statearr_43686 = state_43669;
(statearr_43686[(11)] = inst_43653);

return statearr_43686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43669__$1,(12),dchan);
} else {
if((state_val_43670 === (14))){
var inst_43655 = (state_43669[(8)]);
var inst_43660 = cljs.core.apply.call(null,f,inst_43655);
var state_43669__$1 = state_43669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43669__$1,(16),out,inst_43660);
} else {
if((state_val_43670 === (16))){
var inst_43662 = (state_43669[(2)]);
var state_43669__$1 = (function (){var statearr_43687 = state_43669;
(statearr_43687[(12)] = inst_43662);

return statearr_43687;
})();
var statearr_43688_43710 = state_43669__$1;
(statearr_43688_43710[(2)] = null);

(statearr_43688_43710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (10))){
var inst_43637 = (state_43669[(2)]);
var inst_43638 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43669__$1 = (function (){var statearr_43689 = state_43669;
(statearr_43689[(13)] = inst_43637);

return statearr_43689;
})();
var statearr_43690_43711 = state_43669__$1;
(statearr_43690_43711[(2)] = inst_43638);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43669__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43670 === (8))){
var inst_43651 = (state_43669[(2)]);
var state_43669__$1 = state_43669;
var statearr_43691_43712 = state_43669__$1;
(statearr_43691_43712[(2)] = inst_43651);

(statearr_43691_43712[(1)] = (5));


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
});})(c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33123__auto__,c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_43692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43692[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_43692[(1)] = (1));

return statearr_43692;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_43669){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43693){if((e43693 instanceof Object)){
var ex__33127__auto__ = e43693;
var statearr_43694_43713 = state_43669;
(statearr_43694_43713[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43714 = state_43669;
state_43669 = G__43714;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_43669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_43669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33148__auto__ = (function (){var statearr_43695 = f__33147__auto__.call(null);
(statearr_43695[(6)] = c__33146__auto___43697);

return statearr_43695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43697,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43717 = arguments.length;
switch (G__43717) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___43771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43771,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43771,out){
return (function (state_43749){
var state_val_43750 = (state_43749[(1)]);
if((state_val_43750 === (7))){
var inst_43728 = (state_43749[(7)]);
var inst_43729 = (state_43749[(8)]);
var inst_43728__$1 = (state_43749[(2)]);
var inst_43729__$1 = cljs.core.nth.call(null,inst_43728__$1,(0),null);
var inst_43730 = cljs.core.nth.call(null,inst_43728__$1,(1),null);
var inst_43731 = (inst_43729__$1 == null);
var state_43749__$1 = (function (){var statearr_43751 = state_43749;
(statearr_43751[(7)] = inst_43728__$1);

(statearr_43751[(9)] = inst_43730);

(statearr_43751[(8)] = inst_43729__$1);

return statearr_43751;
})();
if(cljs.core.truth_(inst_43731)){
var statearr_43752_43772 = state_43749__$1;
(statearr_43752_43772[(1)] = (8));

} else {
var statearr_43753_43773 = state_43749__$1;
(statearr_43753_43773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (1))){
var inst_43718 = cljs.core.vec.call(null,chs);
var inst_43719 = inst_43718;
var state_43749__$1 = (function (){var statearr_43754 = state_43749;
(statearr_43754[(10)] = inst_43719);

return statearr_43754;
})();
var statearr_43755_43774 = state_43749__$1;
(statearr_43755_43774[(2)] = null);

(statearr_43755_43774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (4))){
var inst_43719 = (state_43749[(10)]);
var state_43749__$1 = state_43749;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43749__$1,(7),inst_43719);
} else {
if((state_val_43750 === (6))){
var inst_43745 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43756_43775 = state_43749__$1;
(statearr_43756_43775[(2)] = inst_43745);

(statearr_43756_43775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (3))){
var inst_43747 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43749__$1,inst_43747);
} else {
if((state_val_43750 === (2))){
var inst_43719 = (state_43749[(10)]);
var inst_43721 = cljs.core.count.call(null,inst_43719);
var inst_43722 = (inst_43721 > (0));
var state_43749__$1 = state_43749;
if(cljs.core.truth_(inst_43722)){
var statearr_43758_43776 = state_43749__$1;
(statearr_43758_43776[(1)] = (4));

} else {
var statearr_43759_43777 = state_43749__$1;
(statearr_43759_43777[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (11))){
var inst_43719 = (state_43749[(10)]);
var inst_43738 = (state_43749[(2)]);
var tmp43757 = inst_43719;
var inst_43719__$1 = tmp43757;
var state_43749__$1 = (function (){var statearr_43760 = state_43749;
(statearr_43760[(11)] = inst_43738);

(statearr_43760[(10)] = inst_43719__$1);

return statearr_43760;
})();
var statearr_43761_43778 = state_43749__$1;
(statearr_43761_43778[(2)] = null);

(statearr_43761_43778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (9))){
var inst_43729 = (state_43749[(8)]);
var state_43749__$1 = state_43749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43749__$1,(11),out,inst_43729);
} else {
if((state_val_43750 === (5))){
var inst_43743 = cljs.core.async.close_BANG_.call(null,out);
var state_43749__$1 = state_43749;
var statearr_43762_43779 = state_43749__$1;
(statearr_43762_43779[(2)] = inst_43743);

(statearr_43762_43779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (10))){
var inst_43741 = (state_43749[(2)]);
var state_43749__$1 = state_43749;
var statearr_43763_43780 = state_43749__$1;
(statearr_43763_43780[(2)] = inst_43741);

(statearr_43763_43780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43750 === (8))){
var inst_43728 = (state_43749[(7)]);
var inst_43730 = (state_43749[(9)]);
var inst_43729 = (state_43749[(8)]);
var inst_43719 = (state_43749[(10)]);
var inst_43733 = (function (){var cs = inst_43719;
var vec__43724 = inst_43728;
var v = inst_43729;
var c = inst_43730;
return ((function (cs,vec__43724,v,c,inst_43728,inst_43730,inst_43729,inst_43719,state_val_43750,c__33146__auto___43771,out){
return (function (p1__43715_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43715_SHARP_);
});
;})(cs,vec__43724,v,c,inst_43728,inst_43730,inst_43729,inst_43719,state_val_43750,c__33146__auto___43771,out))
})();
var inst_43734 = cljs.core.filterv.call(null,inst_43733,inst_43719);
var inst_43719__$1 = inst_43734;
var state_43749__$1 = (function (){var statearr_43764 = state_43749;
(statearr_43764[(10)] = inst_43719__$1);

return statearr_43764;
})();
var statearr_43765_43781 = state_43749__$1;
(statearr_43765_43781[(2)] = null);

(statearr_43765_43781[(1)] = (2));


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
});})(c__33146__auto___43771,out))
;
return ((function (switch__33123__auto__,c__33146__auto___43771,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_43766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43766[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_43766[(1)] = (1));

return statearr_43766;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_43749){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43767){if((e43767 instanceof Object)){
var ex__33127__auto__ = e43767;
var statearr_43768_43782 = state_43749;
(statearr_43768_43782[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43783 = state_43749;
state_43749 = G__43783;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_43749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_43749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43771,out))
})();
var state__33148__auto__ = (function (){var statearr_43769 = f__33147__auto__.call(null);
(statearr_43769[(6)] = c__33146__auto___43771);

return statearr_43769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43771,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43785 = arguments.length;
switch (G__43785) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___43830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43830,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43830,out){
return (function (state_43809){
var state_val_43810 = (state_43809[(1)]);
if((state_val_43810 === (7))){
var inst_43791 = (state_43809[(7)]);
var inst_43791__$1 = (state_43809[(2)]);
var inst_43792 = (inst_43791__$1 == null);
var inst_43793 = cljs.core.not.call(null,inst_43792);
var state_43809__$1 = (function (){var statearr_43811 = state_43809;
(statearr_43811[(7)] = inst_43791__$1);

return statearr_43811;
})();
if(inst_43793){
var statearr_43812_43831 = state_43809__$1;
(statearr_43812_43831[(1)] = (8));

} else {
var statearr_43813_43832 = state_43809__$1;
(statearr_43813_43832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (1))){
var inst_43786 = (0);
var state_43809__$1 = (function (){var statearr_43814 = state_43809;
(statearr_43814[(8)] = inst_43786);

return statearr_43814;
})();
var statearr_43815_43833 = state_43809__$1;
(statearr_43815_43833[(2)] = null);

(statearr_43815_43833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (4))){
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43809__$1,(7),ch);
} else {
if((state_val_43810 === (6))){
var inst_43804 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43816_43834 = state_43809__$1;
(statearr_43816_43834[(2)] = inst_43804);

(statearr_43816_43834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (3))){
var inst_43806 = (state_43809[(2)]);
var inst_43807 = cljs.core.async.close_BANG_.call(null,out);
var state_43809__$1 = (function (){var statearr_43817 = state_43809;
(statearr_43817[(9)] = inst_43806);

return statearr_43817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43809__$1,inst_43807);
} else {
if((state_val_43810 === (2))){
var inst_43786 = (state_43809[(8)]);
var inst_43788 = (inst_43786 < n);
var state_43809__$1 = state_43809;
if(cljs.core.truth_(inst_43788)){
var statearr_43818_43835 = state_43809__$1;
(statearr_43818_43835[(1)] = (4));

} else {
var statearr_43819_43836 = state_43809__$1;
(statearr_43819_43836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (11))){
var inst_43786 = (state_43809[(8)]);
var inst_43796 = (state_43809[(2)]);
var inst_43797 = (inst_43786 + (1));
var inst_43786__$1 = inst_43797;
var state_43809__$1 = (function (){var statearr_43820 = state_43809;
(statearr_43820[(10)] = inst_43796);

(statearr_43820[(8)] = inst_43786__$1);

return statearr_43820;
})();
var statearr_43821_43837 = state_43809__$1;
(statearr_43821_43837[(2)] = null);

(statearr_43821_43837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (9))){
var state_43809__$1 = state_43809;
var statearr_43822_43838 = state_43809__$1;
(statearr_43822_43838[(2)] = null);

(statearr_43822_43838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (5))){
var state_43809__$1 = state_43809;
var statearr_43823_43839 = state_43809__$1;
(statearr_43823_43839[(2)] = null);

(statearr_43823_43839[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (10))){
var inst_43801 = (state_43809[(2)]);
var state_43809__$1 = state_43809;
var statearr_43824_43840 = state_43809__$1;
(statearr_43824_43840[(2)] = inst_43801);

(statearr_43824_43840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43810 === (8))){
var inst_43791 = (state_43809[(7)]);
var state_43809__$1 = state_43809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43809__$1,(11),out,inst_43791);
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
});})(c__33146__auto___43830,out))
;
return ((function (switch__33123__auto__,c__33146__auto___43830,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_43825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43825[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_43825[(1)] = (1));

return statearr_43825;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_43809){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43826){if((e43826 instanceof Object)){
var ex__33127__auto__ = e43826;
var statearr_43827_43841 = state_43809;
(statearr_43827_43841[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43842 = state_43809;
state_43809 = G__43842;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_43809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_43809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43830,out))
})();
var state__33148__auto__ = (function (){var statearr_43828 = f__33147__auto__.call(null);
(statearr_43828[(6)] = c__33146__auto___43830);

return statearr_43828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43830,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43844 = (function (f,ch,meta43845){
this.f = f;
this.ch = ch;
this.meta43845 = meta43845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43846,meta43845__$1){
var self__ = this;
var _43846__$1 = this;
return (new cljs.core.async.t_cljs$core$async43844(self__.f,self__.ch,meta43845__$1));
});

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43846){
var self__ = this;
var _43846__$1 = this;
return self__.meta43845;
});

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43847 = (function (f,ch,meta43845,_,fn1,meta43848){
this.f = f;
this.ch = ch;
this.meta43845 = meta43845;
this._ = _;
this.fn1 = fn1;
this.meta43848 = meta43848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43849,meta43848__$1){
var self__ = this;
var _43849__$1 = this;
return (new cljs.core.async.t_cljs$core$async43847(self__.f,self__.ch,self__.meta43845,self__._,self__.fn1,meta43848__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43849){
var self__ = this;
var _43849__$1 = this;
return self__.meta43848;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43843_SHARP_){
return f1.call(null,(((p1__43843_SHARP_ == null))?null:self__.f.call(null,p1__43843_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43845","meta43845",2061610229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43844","cljs.core.async/t_cljs$core$async43844",362281787,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43848","meta43848",-441798907,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43847";

cljs.core.async.t_cljs$core$async43847.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43847");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43847 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43847(f__$1,ch__$1,meta43845__$1,___$2,fn1__$1,meta43848){
return (new cljs.core.async.t_cljs$core$async43847(f__$1,ch__$1,meta43845__$1,___$2,fn1__$1,meta43848));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43847(self__.f,self__.ch,self__.meta43845,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30170__auto__ = ret;
if(cljs.core.truth_(and__30170__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30170__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43845","meta43845",2061610229,null)], null);
});

cljs.core.async.t_cljs$core$async43844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43844";

cljs.core.async.t_cljs$core$async43844.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43844");
});

cljs.core.async.__GT_t_cljs$core$async43844 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43844(f__$1,ch__$1,meta43845){
return (new cljs.core.async.t_cljs$core$async43844(f__$1,ch__$1,meta43845));
});

}

return (new cljs.core.async.t_cljs$core$async43844(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43850 = (function (f,ch,meta43851){
this.f = f;
this.ch = ch;
this.meta43851 = meta43851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43852,meta43851__$1){
var self__ = this;
var _43852__$1 = this;
return (new cljs.core.async.t_cljs$core$async43850(self__.f,self__.ch,meta43851__$1));
});

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43852){
var self__ = this;
var _43852__$1 = this;
return self__.meta43851;
});

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43851","meta43851",1245668610,null)], null);
});

cljs.core.async.t_cljs$core$async43850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43850";

cljs.core.async.t_cljs$core$async43850.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43850");
});

cljs.core.async.__GT_t_cljs$core$async43850 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43850(f__$1,ch__$1,meta43851){
return (new cljs.core.async.t_cljs$core$async43850(f__$1,ch__$1,meta43851));
});

}

return (new cljs.core.async.t_cljs$core$async43850(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43853 = (function (p,ch,meta43854){
this.p = p;
this.ch = ch;
this.meta43854 = meta43854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43855,meta43854__$1){
var self__ = this;
var _43855__$1 = this;
return (new cljs.core.async.t_cljs$core$async43853(self__.p,self__.ch,meta43854__$1));
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43855){
var self__ = this;
var _43855__$1 = this;
return self__.meta43854;
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43854","meta43854",-1401719279,null)], null);
});

cljs.core.async.t_cljs$core$async43853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43853";

cljs.core.async.t_cljs$core$async43853.cljs$lang$ctorPrWriter = (function (this__30853__auto__,writer__30854__auto__,opt__30855__auto__){
return cljs.core._write.call(null,writer__30854__auto__,"cljs.core.async/t_cljs$core$async43853");
});

cljs.core.async.__GT_t_cljs$core$async43853 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43853(p__$1,ch__$1,meta43854){
return (new cljs.core.async.t_cljs$core$async43853(p__$1,ch__$1,meta43854));
});

}

return (new cljs.core.async.t_cljs$core$async43853(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43857 = arguments.length;
switch (G__43857) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___43897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___43897,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___43897,out){
return (function (state_43878){
var state_val_43879 = (state_43878[(1)]);
if((state_val_43879 === (7))){
var inst_43874 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43880_43898 = state_43878__$1;
(statearr_43880_43898[(2)] = inst_43874);

(statearr_43880_43898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (1))){
var state_43878__$1 = state_43878;
var statearr_43881_43899 = state_43878__$1;
(statearr_43881_43899[(2)] = null);

(statearr_43881_43899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (4))){
var inst_43860 = (state_43878[(7)]);
var inst_43860__$1 = (state_43878[(2)]);
var inst_43861 = (inst_43860__$1 == null);
var state_43878__$1 = (function (){var statearr_43882 = state_43878;
(statearr_43882[(7)] = inst_43860__$1);

return statearr_43882;
})();
if(cljs.core.truth_(inst_43861)){
var statearr_43883_43900 = state_43878__$1;
(statearr_43883_43900[(1)] = (5));

} else {
var statearr_43884_43901 = state_43878__$1;
(statearr_43884_43901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (6))){
var inst_43860 = (state_43878[(7)]);
var inst_43865 = p.call(null,inst_43860);
var state_43878__$1 = state_43878;
if(cljs.core.truth_(inst_43865)){
var statearr_43885_43902 = state_43878__$1;
(statearr_43885_43902[(1)] = (8));

} else {
var statearr_43886_43903 = state_43878__$1;
(statearr_43886_43903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (3))){
var inst_43876 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43878__$1,inst_43876);
} else {
if((state_val_43879 === (2))){
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43878__$1,(4),ch);
} else {
if((state_val_43879 === (11))){
var inst_43868 = (state_43878[(2)]);
var state_43878__$1 = state_43878;
var statearr_43887_43904 = state_43878__$1;
(statearr_43887_43904[(2)] = inst_43868);

(statearr_43887_43904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (9))){
var state_43878__$1 = state_43878;
var statearr_43888_43905 = state_43878__$1;
(statearr_43888_43905[(2)] = null);

(statearr_43888_43905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (5))){
var inst_43863 = cljs.core.async.close_BANG_.call(null,out);
var state_43878__$1 = state_43878;
var statearr_43889_43906 = state_43878__$1;
(statearr_43889_43906[(2)] = inst_43863);

(statearr_43889_43906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (10))){
var inst_43871 = (state_43878[(2)]);
var state_43878__$1 = (function (){var statearr_43890 = state_43878;
(statearr_43890[(8)] = inst_43871);

return statearr_43890;
})();
var statearr_43891_43907 = state_43878__$1;
(statearr_43891_43907[(2)] = null);

(statearr_43891_43907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43879 === (8))){
var inst_43860 = (state_43878[(7)]);
var state_43878__$1 = state_43878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43878__$1,(11),out,inst_43860);
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
});})(c__33146__auto___43897,out))
;
return ((function (switch__33123__auto__,c__33146__auto___43897,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_43892 = [null,null,null,null,null,null,null,null,null];
(statearr_43892[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_43892[(1)] = (1));

return statearr_43892;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_43878){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e43893){if((e43893 instanceof Object)){
var ex__33127__auto__ = e43893;
var statearr_43894_43908 = state_43878;
(statearr_43894_43908[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43909 = state_43878;
state_43878 = G__43909;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_43878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_43878);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___43897,out))
})();
var state__33148__auto__ = (function (){var statearr_43895 = f__33147__auto__.call(null);
(statearr_43895[(6)] = c__33146__auto___43897);

return statearr_43895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___43897,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43911 = arguments.length;
switch (G__43911) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33146__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto__){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto__){
return (function (state_43974){
var state_val_43975 = (state_43974[(1)]);
if((state_val_43975 === (7))){
var inst_43970 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
var statearr_43976_44014 = state_43974__$1;
(statearr_43976_44014[(2)] = inst_43970);

(statearr_43976_44014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (20))){
var inst_43940 = (state_43974[(7)]);
var inst_43951 = (state_43974[(2)]);
var inst_43952 = cljs.core.next.call(null,inst_43940);
var inst_43926 = inst_43952;
var inst_43927 = null;
var inst_43928 = (0);
var inst_43929 = (0);
var state_43974__$1 = (function (){var statearr_43977 = state_43974;
(statearr_43977[(8)] = inst_43929);

(statearr_43977[(9)] = inst_43927);

(statearr_43977[(10)] = inst_43928);

(statearr_43977[(11)] = inst_43951);

(statearr_43977[(12)] = inst_43926);

return statearr_43977;
})();
var statearr_43978_44015 = state_43974__$1;
(statearr_43978_44015[(2)] = null);

(statearr_43978_44015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (1))){
var state_43974__$1 = state_43974;
var statearr_43979_44016 = state_43974__$1;
(statearr_43979_44016[(2)] = null);

(statearr_43979_44016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (4))){
var inst_43915 = (state_43974[(13)]);
var inst_43915__$1 = (state_43974[(2)]);
var inst_43916 = (inst_43915__$1 == null);
var state_43974__$1 = (function (){var statearr_43980 = state_43974;
(statearr_43980[(13)] = inst_43915__$1);

return statearr_43980;
})();
if(cljs.core.truth_(inst_43916)){
var statearr_43981_44017 = state_43974__$1;
(statearr_43981_44017[(1)] = (5));

} else {
var statearr_43982_44018 = state_43974__$1;
(statearr_43982_44018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (15))){
var state_43974__$1 = state_43974;
var statearr_43986_44019 = state_43974__$1;
(statearr_43986_44019[(2)] = null);

(statearr_43986_44019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (21))){
var state_43974__$1 = state_43974;
var statearr_43987_44020 = state_43974__$1;
(statearr_43987_44020[(2)] = null);

(statearr_43987_44020[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (13))){
var inst_43929 = (state_43974[(8)]);
var inst_43927 = (state_43974[(9)]);
var inst_43928 = (state_43974[(10)]);
var inst_43926 = (state_43974[(12)]);
var inst_43936 = (state_43974[(2)]);
var inst_43937 = (inst_43929 + (1));
var tmp43983 = inst_43927;
var tmp43984 = inst_43928;
var tmp43985 = inst_43926;
var inst_43926__$1 = tmp43985;
var inst_43927__$1 = tmp43983;
var inst_43928__$1 = tmp43984;
var inst_43929__$1 = inst_43937;
var state_43974__$1 = (function (){var statearr_43988 = state_43974;
(statearr_43988[(8)] = inst_43929__$1);

(statearr_43988[(9)] = inst_43927__$1);

(statearr_43988[(10)] = inst_43928__$1);

(statearr_43988[(14)] = inst_43936);

(statearr_43988[(12)] = inst_43926__$1);

return statearr_43988;
})();
var statearr_43989_44021 = state_43974__$1;
(statearr_43989_44021[(2)] = null);

(statearr_43989_44021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (22))){
var state_43974__$1 = state_43974;
var statearr_43990_44022 = state_43974__$1;
(statearr_43990_44022[(2)] = null);

(statearr_43990_44022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (6))){
var inst_43915 = (state_43974[(13)]);
var inst_43924 = f.call(null,inst_43915);
var inst_43925 = cljs.core.seq.call(null,inst_43924);
var inst_43926 = inst_43925;
var inst_43927 = null;
var inst_43928 = (0);
var inst_43929 = (0);
var state_43974__$1 = (function (){var statearr_43991 = state_43974;
(statearr_43991[(8)] = inst_43929);

(statearr_43991[(9)] = inst_43927);

(statearr_43991[(10)] = inst_43928);

(statearr_43991[(12)] = inst_43926);

return statearr_43991;
})();
var statearr_43992_44023 = state_43974__$1;
(statearr_43992_44023[(2)] = null);

(statearr_43992_44023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (17))){
var inst_43940 = (state_43974[(7)]);
var inst_43944 = cljs.core.chunk_first.call(null,inst_43940);
var inst_43945 = cljs.core.chunk_rest.call(null,inst_43940);
var inst_43946 = cljs.core.count.call(null,inst_43944);
var inst_43926 = inst_43945;
var inst_43927 = inst_43944;
var inst_43928 = inst_43946;
var inst_43929 = (0);
var state_43974__$1 = (function (){var statearr_43993 = state_43974;
(statearr_43993[(8)] = inst_43929);

(statearr_43993[(9)] = inst_43927);

(statearr_43993[(10)] = inst_43928);

(statearr_43993[(12)] = inst_43926);

return statearr_43993;
})();
var statearr_43994_44024 = state_43974__$1;
(statearr_43994_44024[(2)] = null);

(statearr_43994_44024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (3))){
var inst_43972 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43974__$1,inst_43972);
} else {
if((state_val_43975 === (12))){
var inst_43960 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
var statearr_43995_44025 = state_43974__$1;
(statearr_43995_44025[(2)] = inst_43960);

(statearr_43995_44025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (2))){
var state_43974__$1 = state_43974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43974__$1,(4),in$);
} else {
if((state_val_43975 === (23))){
var inst_43968 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
var statearr_43996_44026 = state_43974__$1;
(statearr_43996_44026[(2)] = inst_43968);

(statearr_43996_44026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (19))){
var inst_43955 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
var statearr_43997_44027 = state_43974__$1;
(statearr_43997_44027[(2)] = inst_43955);

(statearr_43997_44027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (11))){
var inst_43926 = (state_43974[(12)]);
var inst_43940 = (state_43974[(7)]);
var inst_43940__$1 = cljs.core.seq.call(null,inst_43926);
var state_43974__$1 = (function (){var statearr_43998 = state_43974;
(statearr_43998[(7)] = inst_43940__$1);

return statearr_43998;
})();
if(inst_43940__$1){
var statearr_43999_44028 = state_43974__$1;
(statearr_43999_44028[(1)] = (14));

} else {
var statearr_44000_44029 = state_43974__$1;
(statearr_44000_44029[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (9))){
var inst_43962 = (state_43974[(2)]);
var inst_43963 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43974__$1 = (function (){var statearr_44001 = state_43974;
(statearr_44001[(15)] = inst_43962);

return statearr_44001;
})();
if(cljs.core.truth_(inst_43963)){
var statearr_44002_44030 = state_43974__$1;
(statearr_44002_44030[(1)] = (21));

} else {
var statearr_44003_44031 = state_43974__$1;
(statearr_44003_44031[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (5))){
var inst_43918 = cljs.core.async.close_BANG_.call(null,out);
var state_43974__$1 = state_43974;
var statearr_44004_44032 = state_43974__$1;
(statearr_44004_44032[(2)] = inst_43918);

(statearr_44004_44032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (14))){
var inst_43940 = (state_43974[(7)]);
var inst_43942 = cljs.core.chunked_seq_QMARK_.call(null,inst_43940);
var state_43974__$1 = state_43974;
if(inst_43942){
var statearr_44005_44033 = state_43974__$1;
(statearr_44005_44033[(1)] = (17));

} else {
var statearr_44006_44034 = state_43974__$1;
(statearr_44006_44034[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (16))){
var inst_43958 = (state_43974[(2)]);
var state_43974__$1 = state_43974;
var statearr_44007_44035 = state_43974__$1;
(statearr_44007_44035[(2)] = inst_43958);

(statearr_44007_44035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43975 === (10))){
var inst_43929 = (state_43974[(8)]);
var inst_43927 = (state_43974[(9)]);
var inst_43934 = cljs.core._nth.call(null,inst_43927,inst_43929);
var state_43974__$1 = state_43974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43974__$1,(13),out,inst_43934);
} else {
if((state_val_43975 === (18))){
var inst_43940 = (state_43974[(7)]);
var inst_43949 = cljs.core.first.call(null,inst_43940);
var state_43974__$1 = state_43974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43974__$1,(20),out,inst_43949);
} else {
if((state_val_43975 === (8))){
var inst_43929 = (state_43974[(8)]);
var inst_43928 = (state_43974[(10)]);
var inst_43931 = (inst_43929 < inst_43928);
var inst_43932 = inst_43931;
var state_43974__$1 = state_43974;
if(cljs.core.truth_(inst_43932)){
var statearr_44008_44036 = state_43974__$1;
(statearr_44008_44036[(1)] = (10));

} else {
var statearr_44009_44037 = state_43974__$1;
(statearr_44009_44037[(1)] = (11));

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
});})(c__33146__auto__))
;
return ((function (switch__33123__auto__,c__33146__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____0 = (function (){
var statearr_44010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44010[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__);

(statearr_44010[(1)] = (1));

return statearr_44010;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____1 = (function (state_43974){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_43974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e44011){if((e44011 instanceof Object)){
var ex__33127__auto__ = e44011;
var statearr_44012_44038 = state_43974;
(statearr_44012_44038[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44039 = state_43974;
state_43974 = G__44039;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__ = function(state_43974){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____1.call(this,state_43974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33124__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto__))
})();
var state__33148__auto__ = (function (){var statearr_44013 = f__33147__auto__.call(null);
(statearr_44013[(6)] = c__33146__auto__);

return statearr_44013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto__))
);

return c__33146__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44041 = arguments.length;
switch (G__44041) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44044 = arguments.length;
switch (G__44044) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44047 = arguments.length;
switch (G__44047) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___44094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___44094,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___44094,out){
return (function (state_44071){
var state_val_44072 = (state_44071[(1)]);
if((state_val_44072 === (7))){
var inst_44066 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44073_44095 = state_44071__$1;
(statearr_44073_44095[(2)] = inst_44066);

(statearr_44073_44095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (1))){
var inst_44048 = null;
var state_44071__$1 = (function (){var statearr_44074 = state_44071;
(statearr_44074[(7)] = inst_44048);

return statearr_44074;
})();
var statearr_44075_44096 = state_44071__$1;
(statearr_44075_44096[(2)] = null);

(statearr_44075_44096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (4))){
var inst_44051 = (state_44071[(8)]);
var inst_44051__$1 = (state_44071[(2)]);
var inst_44052 = (inst_44051__$1 == null);
var inst_44053 = cljs.core.not.call(null,inst_44052);
var state_44071__$1 = (function (){var statearr_44076 = state_44071;
(statearr_44076[(8)] = inst_44051__$1);

return statearr_44076;
})();
if(inst_44053){
var statearr_44077_44097 = state_44071__$1;
(statearr_44077_44097[(1)] = (5));

} else {
var statearr_44078_44098 = state_44071__$1;
(statearr_44078_44098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (6))){
var state_44071__$1 = state_44071;
var statearr_44079_44099 = state_44071__$1;
(statearr_44079_44099[(2)] = null);

(statearr_44079_44099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (3))){
var inst_44068 = (state_44071[(2)]);
var inst_44069 = cljs.core.async.close_BANG_.call(null,out);
var state_44071__$1 = (function (){var statearr_44080 = state_44071;
(statearr_44080[(9)] = inst_44068);

return statearr_44080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44071__$1,inst_44069);
} else {
if((state_val_44072 === (2))){
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44071__$1,(4),ch);
} else {
if((state_val_44072 === (11))){
var inst_44051 = (state_44071[(8)]);
var inst_44060 = (state_44071[(2)]);
var inst_44048 = inst_44051;
var state_44071__$1 = (function (){var statearr_44081 = state_44071;
(statearr_44081[(10)] = inst_44060);

(statearr_44081[(7)] = inst_44048);

return statearr_44081;
})();
var statearr_44082_44100 = state_44071__$1;
(statearr_44082_44100[(2)] = null);

(statearr_44082_44100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (9))){
var inst_44051 = (state_44071[(8)]);
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44071__$1,(11),out,inst_44051);
} else {
if((state_val_44072 === (5))){
var inst_44051 = (state_44071[(8)]);
var inst_44048 = (state_44071[(7)]);
var inst_44055 = cljs.core._EQ_.call(null,inst_44051,inst_44048);
var state_44071__$1 = state_44071;
if(inst_44055){
var statearr_44084_44101 = state_44071__$1;
(statearr_44084_44101[(1)] = (8));

} else {
var statearr_44085_44102 = state_44071__$1;
(statearr_44085_44102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (10))){
var inst_44063 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44086_44103 = state_44071__$1;
(statearr_44086_44103[(2)] = inst_44063);

(statearr_44086_44103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44072 === (8))){
var inst_44048 = (state_44071[(7)]);
var tmp44083 = inst_44048;
var inst_44048__$1 = tmp44083;
var state_44071__$1 = (function (){var statearr_44087 = state_44071;
(statearr_44087[(7)] = inst_44048__$1);

return statearr_44087;
})();
var statearr_44088_44104 = state_44071__$1;
(statearr_44088_44104[(2)] = null);

(statearr_44088_44104[(1)] = (2));


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
});})(c__33146__auto___44094,out))
;
return ((function (switch__33123__auto__,c__33146__auto___44094,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_44089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44089[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_44089[(1)] = (1));

return statearr_44089;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_44071){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_44071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e44090){if((e44090 instanceof Object)){
var ex__33127__auto__ = e44090;
var statearr_44091_44105 = state_44071;
(statearr_44091_44105[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44106 = state_44071;
state_44071 = G__44106;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_44071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_44071);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___44094,out))
})();
var state__33148__auto__ = (function (){var statearr_44092 = f__33147__auto__.call(null);
(statearr_44092[(6)] = c__33146__auto___44094);

return statearr_44092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___44094,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44108 = arguments.length;
switch (G__44108) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___44174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___44174,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___44174,out){
return (function (state_44146){
var state_val_44147 = (state_44146[(1)]);
if((state_val_44147 === (7))){
var inst_44142 = (state_44146[(2)]);
var state_44146__$1 = state_44146;
var statearr_44148_44175 = state_44146__$1;
(statearr_44148_44175[(2)] = inst_44142);

(statearr_44148_44175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (1))){
var inst_44109 = (new Array(n));
var inst_44110 = inst_44109;
var inst_44111 = (0);
var state_44146__$1 = (function (){var statearr_44149 = state_44146;
(statearr_44149[(7)] = inst_44111);

(statearr_44149[(8)] = inst_44110);

return statearr_44149;
})();
var statearr_44150_44176 = state_44146__$1;
(statearr_44150_44176[(2)] = null);

(statearr_44150_44176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (4))){
var inst_44114 = (state_44146[(9)]);
var inst_44114__$1 = (state_44146[(2)]);
var inst_44115 = (inst_44114__$1 == null);
var inst_44116 = cljs.core.not.call(null,inst_44115);
var state_44146__$1 = (function (){var statearr_44151 = state_44146;
(statearr_44151[(9)] = inst_44114__$1);

return statearr_44151;
})();
if(inst_44116){
var statearr_44152_44177 = state_44146__$1;
(statearr_44152_44177[(1)] = (5));

} else {
var statearr_44153_44178 = state_44146__$1;
(statearr_44153_44178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (15))){
var inst_44136 = (state_44146[(2)]);
var state_44146__$1 = state_44146;
var statearr_44154_44179 = state_44146__$1;
(statearr_44154_44179[(2)] = inst_44136);

(statearr_44154_44179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (13))){
var state_44146__$1 = state_44146;
var statearr_44155_44180 = state_44146__$1;
(statearr_44155_44180[(2)] = null);

(statearr_44155_44180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (6))){
var inst_44111 = (state_44146[(7)]);
var inst_44132 = (inst_44111 > (0));
var state_44146__$1 = state_44146;
if(cljs.core.truth_(inst_44132)){
var statearr_44156_44181 = state_44146__$1;
(statearr_44156_44181[(1)] = (12));

} else {
var statearr_44157_44182 = state_44146__$1;
(statearr_44157_44182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (3))){
var inst_44144 = (state_44146[(2)]);
var state_44146__$1 = state_44146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44146__$1,inst_44144);
} else {
if((state_val_44147 === (12))){
var inst_44110 = (state_44146[(8)]);
var inst_44134 = cljs.core.vec.call(null,inst_44110);
var state_44146__$1 = state_44146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44146__$1,(15),out,inst_44134);
} else {
if((state_val_44147 === (2))){
var state_44146__$1 = state_44146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44146__$1,(4),ch);
} else {
if((state_val_44147 === (11))){
var inst_44126 = (state_44146[(2)]);
var inst_44127 = (new Array(n));
var inst_44110 = inst_44127;
var inst_44111 = (0);
var state_44146__$1 = (function (){var statearr_44158 = state_44146;
(statearr_44158[(7)] = inst_44111);

(statearr_44158[(8)] = inst_44110);

(statearr_44158[(10)] = inst_44126);

return statearr_44158;
})();
var statearr_44159_44183 = state_44146__$1;
(statearr_44159_44183[(2)] = null);

(statearr_44159_44183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (9))){
var inst_44110 = (state_44146[(8)]);
var inst_44124 = cljs.core.vec.call(null,inst_44110);
var state_44146__$1 = state_44146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44146__$1,(11),out,inst_44124);
} else {
if((state_val_44147 === (5))){
var inst_44119 = (state_44146[(11)]);
var inst_44114 = (state_44146[(9)]);
var inst_44111 = (state_44146[(7)]);
var inst_44110 = (state_44146[(8)]);
var inst_44118 = (inst_44110[inst_44111] = inst_44114);
var inst_44119__$1 = (inst_44111 + (1));
var inst_44120 = (inst_44119__$1 < n);
var state_44146__$1 = (function (){var statearr_44160 = state_44146;
(statearr_44160[(11)] = inst_44119__$1);

(statearr_44160[(12)] = inst_44118);

return statearr_44160;
})();
if(cljs.core.truth_(inst_44120)){
var statearr_44161_44184 = state_44146__$1;
(statearr_44161_44184[(1)] = (8));

} else {
var statearr_44162_44185 = state_44146__$1;
(statearr_44162_44185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (14))){
var inst_44139 = (state_44146[(2)]);
var inst_44140 = cljs.core.async.close_BANG_.call(null,out);
var state_44146__$1 = (function (){var statearr_44164 = state_44146;
(statearr_44164[(13)] = inst_44139);

return statearr_44164;
})();
var statearr_44165_44186 = state_44146__$1;
(statearr_44165_44186[(2)] = inst_44140);

(statearr_44165_44186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (10))){
var inst_44130 = (state_44146[(2)]);
var state_44146__$1 = state_44146;
var statearr_44166_44187 = state_44146__$1;
(statearr_44166_44187[(2)] = inst_44130);

(statearr_44166_44187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44147 === (8))){
var inst_44119 = (state_44146[(11)]);
var inst_44110 = (state_44146[(8)]);
var tmp44163 = inst_44110;
var inst_44110__$1 = tmp44163;
var inst_44111 = inst_44119;
var state_44146__$1 = (function (){var statearr_44167 = state_44146;
(statearr_44167[(7)] = inst_44111);

(statearr_44167[(8)] = inst_44110__$1);

return statearr_44167;
})();
var statearr_44168_44188 = state_44146__$1;
(statearr_44168_44188[(2)] = null);

(statearr_44168_44188[(1)] = (2));


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
});})(c__33146__auto___44174,out))
;
return ((function (switch__33123__auto__,c__33146__auto___44174,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_44169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44169[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_44169[(1)] = (1));

return statearr_44169;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_44146){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_44146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e44170){if((e44170 instanceof Object)){
var ex__33127__auto__ = e44170;
var statearr_44171_44189 = state_44146;
(statearr_44171_44189[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44190 = state_44146;
state_44146 = G__44190;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_44146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_44146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___44174,out))
})();
var state__33148__auto__ = (function (){var statearr_44172 = f__33147__auto__.call(null);
(statearr_44172[(6)] = c__33146__auto___44174);

return statearr_44172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___44174,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44192 = arguments.length;
switch (G__44192) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33146__auto___44262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33146__auto___44262,out){
return (function (){
var f__33147__auto__ = (function (){var switch__33123__auto__ = ((function (c__33146__auto___44262,out){
return (function (state_44234){
var state_val_44235 = (state_44234[(1)]);
if((state_val_44235 === (7))){
var inst_44230 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
var statearr_44236_44263 = state_44234__$1;
(statearr_44236_44263[(2)] = inst_44230);

(statearr_44236_44263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (1))){
var inst_44193 = [];
var inst_44194 = inst_44193;
var inst_44195 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44234__$1 = (function (){var statearr_44237 = state_44234;
(statearr_44237[(7)] = inst_44194);

(statearr_44237[(8)] = inst_44195);

return statearr_44237;
})();
var statearr_44238_44264 = state_44234__$1;
(statearr_44238_44264[(2)] = null);

(statearr_44238_44264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (4))){
var inst_44198 = (state_44234[(9)]);
var inst_44198__$1 = (state_44234[(2)]);
var inst_44199 = (inst_44198__$1 == null);
var inst_44200 = cljs.core.not.call(null,inst_44199);
var state_44234__$1 = (function (){var statearr_44239 = state_44234;
(statearr_44239[(9)] = inst_44198__$1);

return statearr_44239;
})();
if(inst_44200){
var statearr_44240_44265 = state_44234__$1;
(statearr_44240_44265[(1)] = (5));

} else {
var statearr_44241_44266 = state_44234__$1;
(statearr_44241_44266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (15))){
var inst_44224 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
var statearr_44242_44267 = state_44234__$1;
(statearr_44242_44267[(2)] = inst_44224);

(statearr_44242_44267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (13))){
var state_44234__$1 = state_44234;
var statearr_44243_44268 = state_44234__$1;
(statearr_44243_44268[(2)] = null);

(statearr_44243_44268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (6))){
var inst_44194 = (state_44234[(7)]);
var inst_44219 = inst_44194.length;
var inst_44220 = (inst_44219 > (0));
var state_44234__$1 = state_44234;
if(cljs.core.truth_(inst_44220)){
var statearr_44244_44269 = state_44234__$1;
(statearr_44244_44269[(1)] = (12));

} else {
var statearr_44245_44270 = state_44234__$1;
(statearr_44245_44270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (3))){
var inst_44232 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44234__$1,inst_44232);
} else {
if((state_val_44235 === (12))){
var inst_44194 = (state_44234[(7)]);
var inst_44222 = cljs.core.vec.call(null,inst_44194);
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44234__$1,(15),out,inst_44222);
} else {
if((state_val_44235 === (2))){
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44234__$1,(4),ch);
} else {
if((state_val_44235 === (11))){
var inst_44198 = (state_44234[(9)]);
var inst_44202 = (state_44234[(10)]);
var inst_44212 = (state_44234[(2)]);
var inst_44213 = [];
var inst_44214 = inst_44213.push(inst_44198);
var inst_44194 = inst_44213;
var inst_44195 = inst_44202;
var state_44234__$1 = (function (){var statearr_44246 = state_44234;
(statearr_44246[(7)] = inst_44194);

(statearr_44246[(11)] = inst_44212);

(statearr_44246[(12)] = inst_44214);

(statearr_44246[(8)] = inst_44195);

return statearr_44246;
})();
var statearr_44247_44271 = state_44234__$1;
(statearr_44247_44271[(2)] = null);

(statearr_44247_44271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (9))){
var inst_44194 = (state_44234[(7)]);
var inst_44210 = cljs.core.vec.call(null,inst_44194);
var state_44234__$1 = state_44234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44234__$1,(11),out,inst_44210);
} else {
if((state_val_44235 === (5))){
var inst_44198 = (state_44234[(9)]);
var inst_44202 = (state_44234[(10)]);
var inst_44195 = (state_44234[(8)]);
var inst_44202__$1 = f.call(null,inst_44198);
var inst_44203 = cljs.core._EQ_.call(null,inst_44202__$1,inst_44195);
var inst_44204 = cljs.core.keyword_identical_QMARK_.call(null,inst_44195,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44205 = (inst_44203) || (inst_44204);
var state_44234__$1 = (function (){var statearr_44248 = state_44234;
(statearr_44248[(10)] = inst_44202__$1);

return statearr_44248;
})();
if(cljs.core.truth_(inst_44205)){
var statearr_44249_44272 = state_44234__$1;
(statearr_44249_44272[(1)] = (8));

} else {
var statearr_44250_44273 = state_44234__$1;
(statearr_44250_44273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (14))){
var inst_44227 = (state_44234[(2)]);
var inst_44228 = cljs.core.async.close_BANG_.call(null,out);
var state_44234__$1 = (function (){var statearr_44252 = state_44234;
(statearr_44252[(13)] = inst_44227);

return statearr_44252;
})();
var statearr_44253_44274 = state_44234__$1;
(statearr_44253_44274[(2)] = inst_44228);

(statearr_44253_44274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (10))){
var inst_44217 = (state_44234[(2)]);
var state_44234__$1 = state_44234;
var statearr_44254_44275 = state_44234__$1;
(statearr_44254_44275[(2)] = inst_44217);

(statearr_44254_44275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44235 === (8))){
var inst_44194 = (state_44234[(7)]);
var inst_44198 = (state_44234[(9)]);
var inst_44202 = (state_44234[(10)]);
var inst_44207 = inst_44194.push(inst_44198);
var tmp44251 = inst_44194;
var inst_44194__$1 = tmp44251;
var inst_44195 = inst_44202;
var state_44234__$1 = (function (){var statearr_44255 = state_44234;
(statearr_44255[(7)] = inst_44194__$1);

(statearr_44255[(14)] = inst_44207);

(statearr_44255[(8)] = inst_44195);

return statearr_44255;
})();
var statearr_44256_44276 = state_44234__$1;
(statearr_44256_44276[(2)] = null);

(statearr_44256_44276[(1)] = (2));


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
});})(c__33146__auto___44262,out))
;
return ((function (switch__33123__auto__,c__33146__auto___44262,out){
return (function() {
var cljs$core$async$state_machine__33124__auto__ = null;
var cljs$core$async$state_machine__33124__auto____0 = (function (){
var statearr_44257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44257[(0)] = cljs$core$async$state_machine__33124__auto__);

(statearr_44257[(1)] = (1));

return statearr_44257;
});
var cljs$core$async$state_machine__33124__auto____1 = (function (state_44234){
while(true){
var ret_value__33125__auto__ = (function (){try{while(true){
var result__33126__auto__ = switch__33123__auto__.call(null,state_44234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33126__auto__;
}
break;
}
}catch (e44258){if((e44258 instanceof Object)){
var ex__33127__auto__ = e44258;
var statearr_44259_44277 = state_44234;
(statearr_44259_44277[(5)] = ex__33127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44278 = state_44234;
state_44234 = G__44278;
continue;
} else {
return ret_value__33125__auto__;
}
break;
}
});
cljs$core$async$state_machine__33124__auto__ = function(state_44234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33124__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33124__auto____1.call(this,state_44234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33124__auto____0;
cljs$core$async$state_machine__33124__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33124__auto____1;
return cljs$core$async$state_machine__33124__auto__;
})()
;})(switch__33123__auto__,c__33146__auto___44262,out))
})();
var state__33148__auto__ = (function (){var statearr_44260 = f__33147__auto__.call(null);
(statearr_44260[(6)] = c__33146__auto___44262);

return statearr_44260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33148__auto__);
});})(c__33146__auto___44262,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511550757663
