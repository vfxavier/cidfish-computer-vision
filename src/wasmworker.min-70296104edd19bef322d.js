!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 1)
}([function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
}
, function(e, t, n) {
    n(2),
    e.exports = n(5)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if ("performance"in e || (e.performance = {}),
        !("now"in e.performance)) {
            var t = Date.now();
            e.performance = {
                now: function() {
                    return Date.now() - t
                }
            }
        }
    }
    n.r(t),
    n.d(t, "_testExports", (function() {
        return i
    }
    )),
    r(self);
    var i = {
        polyfillPerformance: r
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    function(e) {
        var n, r = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
        function(t) {
            t = void 0 !== (t = t || {}) ? t : {};
            var r, i = {};
            for (r in t)
                t.hasOwnProperty(r) && (i[r] = t[r]);
            var a, o = [], u = "./this.program", s = "";
            s = self.location.href,
            n && (s = n),
            s = 0 !== s.indexOf("blob:") ? s.substr(0, s.lastIndexOf("/") + 1) : "",
            a = function(e) {
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1),
                t.responseType = "arraybuffer",
                t.send(null),
                new Uint8Array(t.response)
            }
            ;
            var l, c, f = t.print || console.log.bind(console), d = t.printErr || console.warn.bind(console);
            for (r in i)
                i.hasOwnProperty(r) && (t[r] = i[r]);
            function p(e) {
                p.shown || (p.shown = {}),
                p.shown[e] || (p.shown[e] = 1,
                d(e))
            }
            i = null,
            t.arguments && (o = t.arguments),
            t.thisProgram && (u = t.thisProgram),
            t.quit && t.quit,
            t.wasmBinary && (l = t.wasmBinary),
            t.noExitRuntime && t.noExitRuntime,
            "object" != typeof WebAssembly && d("no native wasm support detected");
            var h = new WebAssembly.Table({
                initial: 1601,
                maximum: 1601,
                element: "anyfunc"
            })
              , y = !1
              , v = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
            function m(e, t, n) {
                for (var r = t + n, i = t; e[i] && !(i >= r); )
                    ++i;
                if (i - t > 16 && e.subarray && v)
                    return v.decode(e.subarray(t, i));
                for (var a = ""; t < i; ) {
                    var o = e[t++];
                    if (128 & o) {
                        var u = 63 & e[t++];
                        if (192 != (224 & o)) {
                            var s = 63 & e[t++];
                            if ((o = 224 == (240 & o) ? (15 & o) << 12 | u << 6 | s : (7 & o) << 18 | u << 12 | s << 6 | 63 & e[t++]) < 65536)
                                a += String.fromCharCode(o);
                            else {
                                var l = o - 65536;
                                a += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                            }
                        } else
                            a += String.fromCharCode((31 & o) << 6 | u)
                    } else
                        a += String.fromCharCode(o)
                }
                return a
            }
            function g(e, t) {
                return e ? m(w, e, t) : ""
            }
            function _(e, t, n, r) {
                if (!(r > 0))
                    return 0;
                for (var i = n, a = n + r - 1, o = 0; o < e.length; ++o) {
                    var u = e.charCodeAt(o);
                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++o)),
                    u <= 127) {
                        if (n >= a)
                            break;
                        t[n++] = u
                    } else if (u <= 2047) {
                        if (n + 1 >= a)
                            break;
                        t[n++] = 192 | u >> 6,
                        t[n++] = 128 | 63 & u
                    } else if (u <= 65535) {
                        if (n + 2 >= a)
                            break;
                        t[n++] = 224 | u >> 12,
                        t[n++] = 128 | u >> 6 & 63,
                        t[n++] = 128 | 63 & u
                    } else {
                        if (n + 3 >= a)
                            break;
                        t[n++] = 240 | u >> 18,
                        t[n++] = 128 | u >> 12 & 63,
                        t[n++] = 128 | u >> 6 & 63,
                        t[n++] = 128 | 63 & u
                    }
                }
                return t[n] = 0,
                n - i
            }
            function C(e, t, n) {
                return _(e, w, t, n)
            }
            function T(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++n)),
                    r <= 127 ? ++t : t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4
                }
                return t
            }
            var E, b, w, A, P, R, D, $, O, S = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
            function M(e) {
                for (var t = e, n = t >> 1; A[n]; )
                    ++n;
                if ((t = n << 1) - e > 32 && S)
                    return S.decode(w.subarray(e, t));
                for (var r = 0, i = ""; ; ) {
                    var a = A[e + 2 * r >> 1];
                    if (0 == a)
                        return i;
                    ++r,
                    i += String.fromCharCode(a)
                }
            }
            function I(e, t, n) {
                if (void 0 === n && (n = 2147483647),
                n < 2)
                    return 0;
                for (var r = t, i = (n -= 2) < 2 * e.length ? n / 2 : e.length, a = 0; a < i; ++a) {
                    var o = e.charCodeAt(a);
                    A[t >> 1] = o,
                    t += 2
                }
                return A[t >> 1] = 0,
                t - r
            }
            function N(e) {
                return 2 * e.length
            }
            function L(e) {
                for (var t = 0, n = ""; ; ) {
                    var r = R[e + 4 * t >> 2];
                    if (0 == r)
                        return n;
                    if (++t,
                    r >= 65536) {
                        var i = r - 65536;
                        n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    } else
                        n += String.fromCharCode(r)
                }
            }
            function F(e, t, n) {
                if (void 0 === n && (n = 2147483647),
                n < 4)
                    return 0;
                for (var r = t, i = r + n - 4, a = 0; a < e.length; ++a) {
                    var o = e.charCodeAt(a);
                    if (o >= 55296 && o <= 57343 && (o = 65536 + ((1023 & o) << 10) | 1023 & e.charCodeAt(++a)),
                    R[t >> 2] = o,
                    (t += 4) + 4 > i)
                        break
                }
                return R[t >> 2] = 0,
                t - r
            }
            function k(e) {
                for (var t = 0, n = 0; n < e.length; ++n) {
                    var r = e.charCodeAt(n);
                    r >= 55296 && r <= 57343 && ++n,
                    t += 4
                }
                return t
            }
            function U(e) {
                var t = T(e) + 1
                  , n = Wt(t);
                return n && _(e, b, n, t),
                n
            }
            function j(e) {
                E = e,
                t.HEAP8 = b = new Int8Array(e),
                t.HEAP16 = A = new Int16Array(e),
                t.HEAP32 = R = new Int32Array(e),
                t.HEAPU8 = w = new Uint8Array(e),
                t.HEAPU16 = P = new Uint16Array(e),
                t.HEAPU32 = D = new Uint32Array(e),
                t.HEAPF32 = $ = new Float32Array(e),
                t.HEAPF64 = O = new Float64Array(e)
            }
            var x = t.INITIAL_MEMORY || 33554432;
            function W(e) {
                for (; e.length > 0; ) {
                    var n = e.shift();
                    if ("function" != typeof n) {
                        var r = n.func;
                        "number" == typeof r ? void 0 === n.arg ? t.dynCall_v(r) : t.dynCall_vi(r, n.arg) : r(void 0 === n.arg ? null : n.arg)
                    } else
                        n()
                }
            }
            (c = t.wasmMemory ? t.wasmMemory : new WebAssembly.Memory({
                initial: x / 65536
            })) && (E = c.buffer),
            x = E.byteLength,
            j(E),
            R[18580] = 5317360;
            var H = []
              , G = []
              , Y = []
              , B = []
              , V = Math.ceil
              , z = Math.floor
              , q = 0
              , K = null
              , X = null;
            function Q(e) {
                throw t.onAbort && t.onAbort(e),
                f(e += ""),
                d(e),
                y = !0,
                e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.",
                new WebAssembly.RuntimeError(e)
            }
            function Z(e) {
                return String.prototype.startsWith ? e.startsWith("data:application/octet-stream;base64,") : 0 === e.indexOf("data:application/octet-stream;base64,")
            }
            t.preloadedImages = {},
            t.preloadedAudios = {};
            var J, ee = "wasmworker.min.wasm";
            function te() {
                try {
                    if (l)
                        return new Uint8Array(l);
                    if (a)
                        return a(ee);
                    throw "both async and sync fetching of the wasm failed"
                } catch (e) {
                    Q(e)
                }
            }
            function ne() {
                var e = new Error;
                if (!e.stack) {
                    try {
                        throw new Error
                    } catch (t) {
                        e = t
                    }
                    if (!e.stack)
                        return "(no stack trace available)"
                }
                return e.stack.toString()
            }
            Z(ee) || (J = ee,
            ee = t.locateFile ? t.locateFile(J, s) : s + J),
            G.push({
                func: function() {
                    xt()
                }
            });
            var re = {};
            function ie() {
                return ie.uncaught_exceptions > 0
            }
            function ae(e) {
                return t.___errno_location && (R[t.___errno_location() >> 2] = e),
                e
            }
            var oe = {
                mappings: {},
                buffers: [null, [], []],
                printChar: function(e, t) {
                    var n = oe.buffers[e];
                    0 === t || 10 === t ? ((1 === e ? f : d)(m(n, 0)),
                    n.length = 0) : n.push(t)
                },
                varargs: void 0,
                get: function() {
                    return oe.varargs += 4,
                    R[oe.varargs - 4 >> 2]
                },
                getStr: function(e) {
                    return g(e)
                },
                get64: function(e, t) {
                    return e
                }
            }
              , ue = {};
            function se(e) {
                for (; e.length; ) {
                    var t = e.pop();
                    e.pop()(t)
                }
            }
            function le(e) {
                return this.fromWireType(D[e >> 2])
            }
            var ce = {}
              , fe = {}
              , de = {};
            function pe(e) {
                if (void 0 === e)
                    return "_unknown";
                var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return t >= 48 && t <= 57 ? "_" + e : e
            }
            function he(e, t) {
                return e = pe(e),
                function() {
                    return t.apply(this, arguments)
                }
            }
            function ye(e, t) {
                var n = he(t, (function(e) {
                    this.name = t,
                    this.message = e;
                    var n = new Error(e).stack;
                    void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
                }
                ));
                return n.prototype = Object.create(e.prototype),
                n.prototype.constructor = n,
                n.prototype.toString = function() {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }
                ,
                n
            }
            var ve = void 0;
            function me(e) {
                throw new ve(e)
            }
            function ge(e, t, n) {
                function r(t) {
                    var r = n(t);
                    r.length !== e.length && me("Mismatched type converter count");
                    for (var i = 0; i < e.length; ++i)
                        we(e[i], r[i])
                }
                e.forEach((function(e) {
                    de[e] = t
                }
                ));
                var i = new Array(t.length)
                  , a = []
                  , o = 0;
                t.forEach((function(e, t) {
                    fe.hasOwnProperty(e) ? i[t] = fe[e] : (a.push(e),
                    ce.hasOwnProperty(e) || (ce[e] = []),
                    ce[e].push((function() {
                        i[t] = fe[e],
                        ++o === a.length && r(i)
                    }
                    )))
                }
                )),
                0 === a.length && r(i)
            }
            function _e(e) {
                switch (e) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + e)
                }
            }
            var Ce = void 0;
            function Te(e) {
                for (var t = "", n = e; w[n]; )
                    t += Ce[w[n++]];
                return t
            }
            var Ee = void 0;
            function be(e) {
                throw new Ee(e)
            }
            function we(e, t, n) {
                if (n = n || {},
                !("argPackAdvance"in t))
                    throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var r = t.name;
                if (e || be('type "' + r + '" must have a positive integer typeid pointer'),
                fe.hasOwnProperty(e)) {
                    if (n.ignoreDuplicateRegistrations)
                        return;
                    be("Cannot register type '" + r + "' twice")
                }
                if (fe[e] = t,
                delete de[e],
                ce.hasOwnProperty(e)) {
                    var i = ce[e];
                    delete ce[e],
                    i.forEach((function(e) {
                        e()
                    }
                    ))
                }
            }
            function Ae(e) {
                if (!(this instanceof Ue))
                    return !1;
                if (!(e instanceof Ue))
                    return !1;
                for (var t = this.$$.ptrType.registeredClass, n = this.$$.ptr, r = e.$$.ptrType.registeredClass, i = e.$$.ptr; t.baseClass; )
                    n = t.upcast(n),
                    t = t.baseClass;
                for (; r.baseClass; )
                    i = r.upcast(i),
                    r = r.baseClass;
                return t === r && n === i
            }
            function Pe(e) {
                be(e.$$.ptrType.registeredClass.name + " instance already deleted")
            }
            var Re = !1;
            function De(e) {}
            function $e(e) {
                e.count.value -= 1,
                0 === e.count.value && function(e) {
                    e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr)
                }(e)
            }
            function Oe(e) {
                return "undefined" == typeof FinalizationGroup ? (Oe = function(e) {
                    return e
                }
                ,
                e) : (Re = new FinalizationGroup((function(e) {
                    for (var t = e.next(); !t.done; t = e.next()) {
                        var n = t.value;
                        n.ptr ? $e(n) : console.warn("object already deleted: " + n.ptr)
                    }
                }
                )),
                De = function(e) {
                    Re.unregister(e.$$)
                }
                ,
                (Oe = function(e) {
                    return Re.register(e, e.$$, e.$$),
                    e
                }
                )(e))
            }
            function Se() {
                if (this.$$.ptr || Pe(this),
                this.$$.preservePointerOnDelete)
                    return this.$$.count.value += 1,
                    this;
                var e, t = Oe(Object.create(Object.getPrototypeOf(this), {
                    $$: {
                        value: (e = this.$$,
                        {
                            count: e.count,
                            deleteScheduled: e.deleteScheduled,
                            preservePointerOnDelete: e.preservePointerOnDelete,
                            ptr: e.ptr,
                            ptrType: e.ptrType,
                            smartPtr: e.smartPtr,
                            smartPtrType: e.smartPtrType
                        })
                    }
                }));
                return t.$$.count.value += 1,
                t.$$.deleteScheduled = !1,
                t
            }
            function Me() {
                this.$$.ptr || Pe(this),
                this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && be("Object already scheduled for deletion"),
                De(this),
                $e(this.$$),
                this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0,
                this.$$.ptr = void 0)
            }
            function Ie() {
                return !this.$$.ptr
            }
            var Ne = void 0
              , Le = [];
            function Fe() {
                for (; Le.length; ) {
                    var e = Le.pop();
                    e.$$.deleteScheduled = !1,
                    e.delete()
                }
            }
            function ke() {
                return this.$$.ptr || Pe(this),
                this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && be("Object already scheduled for deletion"),
                Le.push(this),
                1 === Le.length && Ne && Ne(Fe),
                this.$$.deleteScheduled = !0,
                this
            }
            function Ue() {}
            var je = {};
            function xe(e, t, n) {
                if (void 0 === e[t].overloadTable) {
                    var r = e[t];
                    e[t] = function() {
                        return e[t].overloadTable.hasOwnProperty(arguments.length) || be("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"),
                        e[t].overloadTable[arguments.length].apply(this, arguments)
                    }
                    ,
                    e[t].overloadTable = [],
                    e[t].overloadTable[r.argCount] = r
                }
            }
            function We(e, t, n, r, i, a, o, u) {
                this.name = e,
                this.constructor = t,
                this.instancePrototype = n,
                this.rawDestructor = r,
                this.baseClass = i,
                this.getActualType = a,
                this.upcast = o,
                this.downcast = u,
                this.pureVirtualFunctions = []
            }
            function He(e, t, n) {
                for (; t !== n; )
                    t.upcast || be("Expected null or instance of " + n.name + ", got an instance of " + t.name),
                    e = t.upcast(e),
                    t = t.baseClass;
                return e
            }
            function Ge(e, t) {
                if (null === t)
                    return this.isReference && be("null is not a valid " + this.name),
                    0;
                t.$$ || be('Cannot pass "' + ht(t) + '" as a ' + this.name),
                t.$$.ptr || be("Cannot pass deleted object as a pointer of type " + this.name);
                var n = t.$$.ptrType.registeredClass;
                return He(t.$$.ptr, n, this.registeredClass)
            }
            function Ye(e, t) {
                var n;
                if (null === t)
                    return this.isReference && be("null is not a valid " + this.name),
                    this.isSmartPointer ? (n = this.rawConstructor(),
                    null !== e && e.push(this.rawDestructor, n),
                    n) : 0;
                t.$$ || be('Cannot pass "' + ht(t) + '" as a ' + this.name),
                t.$$.ptr || be("Cannot pass deleted object as a pointer of type " + this.name),
                !this.isConst && t.$$.ptrType.isConst && be("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
                var r = t.$$.ptrType.registeredClass;
                if (n = He(t.$$.ptr, r, this.registeredClass),
                this.isSmartPointer)
                    switch (void 0 === t.$$.smartPtr && be("Passing raw pointer to smart pointer is illegal"),
                    this.sharingPolicy) {
                    case 0:
                        t.$$.smartPtrType === this ? n = t.$$.smartPtr : be("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
                        break;
                    case 1:
                        n = t.$$.smartPtr;
                        break;
                    case 2:
                        if (t.$$.smartPtrType === this)
                            n = t.$$.smartPtr;
                        else {
                            var i = t.clone();
                            n = this.rawShare(n, pt((function() {
                                i.delete()
                            }
                            ))),
                            null !== e && e.push(this.rawDestructor, n)
                        }
                        break;
                    default:
                        be("Unsupporting sharing policy")
                    }
                return n
            }
            function Be(e, t) {
                if (null === t)
                    return this.isReference && be("null is not a valid " + this.name),
                    0;
                t.$$ || be('Cannot pass "' + ht(t) + '" as a ' + this.name),
                t.$$.ptr || be("Cannot pass deleted object as a pointer of type " + this.name),
                t.$$.ptrType.isConst && be("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
                var n = t.$$.ptrType.registeredClass;
                return He(t.$$.ptr, n, this.registeredClass)
            }
            function Ve(e) {
                return this.rawGetPointee && (e = this.rawGetPointee(e)),
                e
            }
            function ze(e) {
                this.rawDestructor && this.rawDestructor(e)
            }
            function qe(e) {
                null !== e && e.delete()
            }
            function Ke() {
                return Object.keys(Ze).length
            }
            function Xe() {
                var e = [];
                for (var t in Ze)
                    Ze.hasOwnProperty(t) && e.push(Ze[t]);
                return e
            }
            function Qe(e) {
                Ne = e,
                Le.length && Ne && Ne(Fe)
            }
            var Ze = {};
            function Je(e, t) {
                return t = function(e, t) {
                    for (void 0 === t && be("ptr should not be undefined"); e.baseClass; )
                        t = e.upcast(t),
                        e = e.baseClass;
                    return t
                }(e, t),
                Ze[t]
            }
            function et(e, t) {
                return t.ptrType && t.ptr || me("makeClassHandle requires ptr and ptrType"),
                !!t.smartPtrType != !!t.smartPtr && me("Both smartPtrType and smartPtr must be specified"),
                t.count = {
                    value: 1
                },
                Oe(Object.create(e, {
                    $$: {
                        value: t
                    }
                }))
            }
            function tt(e) {
                var t = this.getPointee(e);
                if (!t)
                    return this.destructor(e),
                    null;
                var n = Je(this.registeredClass, t);
                if (void 0 !== n) {
                    if (0 === n.$$.count.value)
                        return n.$$.ptr = t,
                        n.$$.smartPtr = e,
                        n.clone();
                    var r = n.clone();
                    return this.destructor(e),
                    r
                }
                function i() {
                    return this.isSmartPointer ? et(this.registeredClass.instancePrototype, {
                        ptrType: this.pointeeType,
                        ptr: t,
                        smartPtrType: this,
                        smartPtr: e
                    }) : et(this.registeredClass.instancePrototype, {
                        ptrType: this,
                        ptr: e
                    })
                }
                var a, o = this.registeredClass.getActualType(t), u = je[o];
                if (!u)
                    return i.call(this);
                a = this.isConst ? u.constPointerType : u.pointerType;
                var s = function e(t, n, r) {
                    if (n === r)
                        return t;
                    if (void 0 === r.baseClass)
                        return null;
                    var i = e(t, n, r.baseClass);
                    return null === i ? null : r.downcast(i)
                }(t, this.registeredClass, a.registeredClass);
                return null === s ? i.call(this) : this.isSmartPointer ? et(a.registeredClass.instancePrototype, {
                    ptrType: a,
                    ptr: s,
                    smartPtrType: this,
                    smartPtr: e
                }) : et(a.registeredClass.instancePrototype, {
                    ptrType: a,
                    ptr: s
                })
            }
            function nt(e, t, n, r, i, a, o, u, s, l, c) {
                this.name = e,
                this.registeredClass = t,
                this.isReference = n,
                this.isConst = r,
                this.isSmartPointer = i,
                this.pointeeType = a,
                this.sharingPolicy = o,
                this.rawGetPointee = u,
                this.rawConstructor = s,
                this.rawShare = l,
                this.rawDestructor = c,
                i || void 0 !== t.baseClass ? this.toWireType = Ye : r ? (this.toWireType = Ge,
                this.destructorFunction = null) : (this.toWireType = Be,
                this.destructorFunction = null)
            }
            function rt(e, n) {
                e = Te(e);
                var r, i, a = t["dynCall_" + e], o = (r = a,
                i = [n],
                function() {
                    i.length = arguments.length + 1;
                    for (var e = 0; e < arguments.length; e++)
                        i[e + 1] = arguments[e];
                    return r.apply(null, i)
                }
                );
                return "function" != typeof o && be("unknown function pointer with signature " + e + ": " + n),
                o
            }
            var it = void 0;
            function at(e) {
                var t = Vt(e)
                  , n = Te(t);
                return Ht(t),
                n
            }
            function ot(e, t) {
                var n = []
                  , r = {};
                throw t.forEach((function e(t) {
                    r[t] || fe[t] || (de[t] ? de[t].forEach(e) : (n.push(t),
                    r[t] = !0))
                }
                )),
                new it(e + ": " + n.map(at).join([", "]))
            }
            function ut(e, t) {
                for (var n = [], r = 0; r < e; r++)
                    n.push(R[(t >> 2) + r]);
                return n
            }
            var st = []
              , lt = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];
            function ct(e) {
                e > 4 && 0 == --lt[e].refcount && (lt[e] = void 0,
                st.push(e))
            }
            function ft() {
                for (var e = 0, t = 5; t < lt.length; ++t)
                    void 0 !== lt[t] && ++e;
                return e
            }
            function dt() {
                for (var e = 5; e < lt.length; ++e)
                    if (void 0 !== lt[e])
                        return lt[e];
                return null
            }
            function pt(e) {
                switch (e) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var t = st.length ? st.pop() : lt.length;
                    return lt[t] = {
                        refcount: 1,
                        value: e
                    },
                    t
                }
            }
            function ht(e) {
                if (null === e)
                    return "null";
                var t = typeof e;
                return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
            }
            function yt(e, t) {
                switch (t) {
                case 2:
                    return function(e) {
                        return this.fromWireType($[e >> 2])
                    }
                    ;
                case 3:
                    return function(e) {
                        return this.fromWireType(O[e >> 3])
                    }
                    ;
                default:
                    throw new TypeError("Unknown float type: " + e)
                }
            }
            function vt(e, t, n) {
                switch (t) {
                case 0:
                    return n ? function(e) {
                        return b[e]
                    }
                    : function(e) {
                        return w[e]
                    }
                    ;
                case 1:
                    return n ? function(e) {
                        return A[e >> 1]
                    }
                    : function(e) {
                        return P[e >> 1]
                    }
                    ;
                case 2:
                    return n ? function(e) {
                        return R[e >> 2]
                    }
                    : function(e) {
                        return D[e >> 2]
                    }
                    ;
                default:
                    throw new TypeError("Unknown integer type: " + e)
                }
            }
            function mt(e) {
                return e || be("Cannot use deleted val. handle = " + e),
                lt[e].value
            }
            function gt(e, t) {
                var n = fe[e];
                return void 0 === n && be(t + " has unknown type " + at(e)),
                n
            }
            function _t(e, t) {
                for (var n = new Array(e), r = 0; r < e; ++r)
                    n[r] = gt(R[(t >> 2) + r], "parameter " + r);
                return n
            }
            var Ct = {};
            function Tt(e) {
                var t = Ct[e];
                return void 0 === t ? Te(e) : t
            }
            var Et, bt = [];
            function wt() {
                if ("object" == typeof globalThis)
                    return globalThis;
                function t(e) {
                    e.$$$embind_global$$$ = e;
                    var t = "object" == typeof $$$embind_global$$$ && e.$$$embind_global$$$ === e;
                    return t || delete e.$$$embind_global$$$,
                    t
                }
                if ("object" == typeof $$$embind_global$$$)
                    return $$$embind_global$$$;
                if ("object" == typeof e && t(e) ? $$$embind_global$$$ = e : "object" == typeof self && t(self) && ($$$embind_global$$$ = self),
                "object" == typeof $$$embind_global$$$)
                    return $$$embind_global$$$;
                throw Error("unable to get global object.")
            }
            function At(e) {
                if (!e || !e.callee || !e.callee.name)
                    return [null, "", ""];
                e.callee.toString();
                var t = e.callee.name
                  , n = "("
                  , r = !0;
                for (var i in e) {
                    var a = e[i];
                    r || (n += ", "),
                    r = !1,
                    n += "number" == typeof a || "string" == typeof a ? a : "(" + typeof a + ")"
                }
                n += ")";
                var o = e.callee.caller;
                return r && (n = ""),
                [e = o ? o.arguments : [], t, n]
            }
            function Pt(e) {
                try {
                    return c.grow(e - E.byteLength + 65535 >> 16),
                    j(c.buffer),
                    1
                } catch (e) {}
            }
            Et = function() {
                return performance.now()
            }
            ,
            t._emscripten_log_js = function(e, t) {
                24 & e && (t = t.replace(/\s+$/, ""),
                t += (t.length > 0 ? "\n" : "") + function(e) {
                    var t = ne()
                      , n = t.lastIndexOf("_emscripten_log")
                      , r = t.lastIndexOf("_emscripten_get_callstack")
                      , i = t.indexOf("\n", Math.max(n, r)) + 1;
                    t = t.slice(i),
                    8 & e && "undefined" == typeof emscripten_source_map && (p('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),
                    e ^= 8,
                    e |= 16);
                    var a = null;
                    if (128 & e)
                        for (a = At(arguments); a[1].indexOf("_emscripten_") >= 0; )
                            a = At(a[0]);
                    var o = t.split("\n");
                    t = "";
                    var u = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)")
                      , s = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?")
                      , l = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
                    for (var c in o) {
                        var f = o[c]
                          , d = ""
                          , h = ""
                          , y = 0
                          , v = 0
                          , m = l.exec(f);
                        if (m && 5 == m.length)
                            d = m[1],
                            h = m[2],
                            y = m[3],
                            v = m[4];
                        else {
                            if ((m = u.exec(f)) || (m = s.exec(f)),
                            !(m && m.length >= 4)) {
                                t += f + "\n";
                                continue
                            }
                            d = m[1],
                            h = m[2],
                            y = m[3],
                            v = 0 | m[4]
                        }
                        var g = d;
                        g || (g = d);
                        var _ = !1;
                        if (8 & e) {
                            var C = emscripten_source_map.originalPositionFor({
                                line: y,
                                column: v
                            });
                            (_ = C && C.source) && (64 & e && (C.source = C.source.substring(C.source.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                            t += "    at " + g + " (" + C.source + ":" + C.line + ":" + C.column + ")\n")
                        }
                        (16 & e || !_) && (64 & e && (h = h.substring(h.replace(/\\/g, "/").lastIndexOf("/") + 1)),
                        t += (_ ? "     = " + d : "    at " + g) + " (" + h + ":" + y + ":" + v + ")\n"),
                        128 & e && a[0] && (a[1] == d && a[2].length > 0 && (t = t.replace(/\s+$/, ""),
                        t += " with values: " + a[1] + a[2] + "\n"),
                        a = At(a[0]))
                    }
                    return t = t.replace(/\s+$/, "")
                }(e)),
                1 & e ? 4 & e ? console.error(t) : 2 & e ? console.warn(t) : 512 & e ? console.info(t) : 256 & e ? console.debug(t) : console.log(t) : 6 & e ? d(t) : f(t)
            }
            ;
            var Rt = {};
            function Dt() {
                if (!Dt.strings) {
                    var e = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: u || "./this.program"
                    };
                    for (var t in Rt)
                        e[t] = Rt[t];
                    var n = [];
                    for (var t in e)
                        n.push(t + "=" + e[t]);
                    Dt.strings = n
                }
                return Dt.strings
            }
            var $t = (C("GMT", 74384, 4),
            74384);
            function Ot() {
                if (!Ot.called) {
                    Ot.called = !0,
                    R[Bt() >> 2] = 60 * (new Date).getTimezoneOffset();
                    var e = (new Date).getFullYear()
                      , t = new Date(e,0,1)
                      , n = new Date(e,6,1);
                    R[Yt() >> 2] = Number(t.getTimezoneOffset() != n.getTimezoneOffset());
                    var r = u(t)
                      , i = u(n)
                      , a = U(r)
                      , o = U(i);
                    n.getTimezoneOffset() < t.getTimezoneOffset() ? (R[Gt() >> 2] = a,
                    R[Gt() + 4 >> 2] = o) : (R[Gt() >> 2] = o,
                    R[Gt() + 4 >> 2] = a)
                }
                function u(e) {
                    var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                    return t ? t[1] : "GMT"
                }
            }
            function St(e) {
                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
            }
            function Mt(e, t) {
                for (var n = 0, r = 0; r <= t; n += e[r++])
                    ;
                return n
            }
            var It = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
              , Nt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            function Lt(e, t) {
                for (var n = new Date(e.getTime()); t > 0; ) {
                    var r = St(n.getFullYear())
                      , i = n.getMonth()
                      , a = (r ? It : Nt)[i];
                    if (!(t > a - n.getDate()))
                        return n.setDate(n.getDate() + t),
                        n;
                    t -= a - n.getDate() + 1,
                    n.setDate(1),
                    i < 11 ? n.setMonth(i + 1) : (n.setMonth(0),
                    n.setFullYear(n.getFullYear() + 1))
                }
                return n
            }
            function Ft(e, t, n, r) {
                var i = R[r + 40 >> 2]
                  , a = {
                    tm_sec: R[r >> 2],
                    tm_min: R[r + 4 >> 2],
                    tm_hour: R[r + 8 >> 2],
                    tm_mday: R[r + 12 >> 2],
                    tm_mon: R[r + 16 >> 2],
                    tm_year: R[r + 20 >> 2],
                    tm_wday: R[r + 24 >> 2],
                    tm_yday: R[r + 28 >> 2],
                    tm_isdst: R[r + 32 >> 2],
                    tm_gmtoff: R[r + 36 >> 2],
                    tm_zone: i ? g(i) : ""
                }
                  , o = g(n)
                  , u = {
                    "%c": "%a %b %d %H:%M:%S %Y",
                    "%D": "%m/%d/%y",
                    "%F": "%Y-%m-%d",
                    "%h": "%b",
                    "%r": "%I:%M:%S %p",
                    "%R": "%H:%M",
                    "%T": "%H:%M:%S",
                    "%x": "%m/%d/%y",
                    "%X": "%H:%M:%S",
                    "%Ec": "%c",
                    "%EC": "%C",
                    "%Ex": "%m/%d/%y",
                    "%EX": "%H:%M:%S",
                    "%Ey": "%y",
                    "%EY": "%Y",
                    "%Od": "%d",
                    "%Oe": "%e",
                    "%OH": "%H",
                    "%OI": "%I",
                    "%Om": "%m",
                    "%OM": "%M",
                    "%OS": "%S",
                    "%Ou": "%u",
                    "%OU": "%U",
                    "%OV": "%V",
                    "%Ow": "%w",
                    "%OW": "%W",
                    "%Oy": "%y"
                };
                for (var s in u)
                    o = o.replace(new RegExp(s,"g"), u[s]);
                var l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                  , c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                function f(e, t, n) {
                    for (var r = "number" == typeof e ? e.toString() : e || ""; r.length < t; )
                        r = n[0] + r;
                    return r
                }
                function d(e, t) {
                    return f(e, t, "0")
                }
                function p(e, t) {
                    function n(e) {
                        return e < 0 ? -1 : e > 0 ? 1 : 0
                    }
                    var r;
                    return 0 === (r = n(e.getFullYear() - t.getFullYear())) && 0 === (r = n(e.getMonth() - t.getMonth())) && (r = n(e.getDate() - t.getDate())),
                    r
                }
                function h(e) {
                    switch (e.getDay()) {
                    case 0:
                        return new Date(e.getFullYear() - 1,11,29);
                    case 1:
                        return e;
                    case 2:
                        return new Date(e.getFullYear(),0,3);
                    case 3:
                        return new Date(e.getFullYear(),0,2);
                    case 4:
                        return new Date(e.getFullYear(),0,1);
                    case 5:
                        return new Date(e.getFullYear() - 1,11,31);
                    case 6:
                        return new Date(e.getFullYear() - 1,11,30)
                    }
                }
                function y(e) {
                    var t = Lt(new Date(e.tm_year + 1900,0,1), e.tm_yday)
                      , n = new Date(t.getFullYear(),0,4)
                      , r = new Date(t.getFullYear() + 1,0,4)
                      , i = h(n)
                      , a = h(r);
                    return p(i, t) <= 0 ? p(a, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
                }
                var v = {
                    "%a": function(e) {
                        return l[e.tm_wday].substring(0, 3)
                    },
                    "%A": function(e) {
                        return l[e.tm_wday]
                    },
                    "%b": function(e) {
                        return c[e.tm_mon].substring(0, 3)
                    },
                    "%B": function(e) {
                        return c[e.tm_mon]
                    },
                    "%C": function(e) {
                        return d((e.tm_year + 1900) / 100 | 0, 2)
                    },
                    "%d": function(e) {
                        return d(e.tm_mday, 2)
                    },
                    "%e": function(e) {
                        return f(e.tm_mday, 2, " ")
                    },
                    "%g": function(e) {
                        return y(e).toString().substring(2)
                    },
                    "%G": function(e) {
                        return y(e)
                    },
                    "%H": function(e) {
                        return d(e.tm_hour, 2)
                    },
                    "%I": function(e) {
                        var t = e.tm_hour;
                        return 0 == t ? t = 12 : t > 12 && (t -= 12),
                        d(t, 2)
                    },
                    "%j": function(e) {
                        return d(e.tm_mday + Mt(St(e.tm_year + 1900) ? It : Nt, e.tm_mon - 1), 3)
                    },
                    "%m": function(e) {
                        return d(e.tm_mon + 1, 2)
                    },
                    "%M": function(e) {
                        return d(e.tm_min, 2)
                    },
                    "%n": function() {
                        return "\n"
                    },
                    "%p": function(e) {
                        return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                    },
                    "%S": function(e) {
                        return d(e.tm_sec, 2)
                    },
                    "%t": function() {
                        return "\t"
                    },
                    "%u": function(e) {
                        return e.tm_wday || 7
                    },
                    "%U": function(e) {
                        var t = new Date(e.tm_year + 1900,0,1)
                          , n = 0 === t.getDay() ? t : Lt(t, 7 - t.getDay())
                          , r = new Date(e.tm_year + 1900,e.tm_mon,e.tm_mday);
                        if (p(n, r) < 0) {
                            var i = Mt(St(r.getFullYear()) ? It : Nt, r.getMonth() - 1) - 31
                              , a = 31 - n.getDate() + i + r.getDate();
                            return d(Math.ceil(a / 7), 2)
                        }
                        return 0 === p(n, t) ? "01" : "00"
                    },
                    "%V": function(e) {
                        var t, n = new Date(e.tm_year + 1900,0,4), r = new Date(e.tm_year + 1901,0,4), i = h(n), a = h(r), o = Lt(new Date(e.tm_year + 1900,0,1), e.tm_yday);
                        return p(o, i) < 0 ? "53" : p(a, o) <= 0 ? "01" : (t = i.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - i.getDate() : e.tm_yday + 1 - i.getDate(),
                        d(Math.ceil(t / 7), 2))
                    },
                    "%w": function(e) {
                        return e.tm_wday
                    },
                    "%W": function(e) {
                        var t = new Date(e.tm_year,0,1)
                          , n = 1 === t.getDay() ? t : Lt(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1)
                          , r = new Date(e.tm_year + 1900,e.tm_mon,e.tm_mday);
                        if (p(n, r) < 0) {
                            var i = Mt(St(r.getFullYear()) ? It : Nt, r.getMonth() - 1) - 31
                              , a = 31 - n.getDate() + i + r.getDate();
                            return d(Math.ceil(a / 7), 2)
                        }
                        return 0 === p(n, t) ? "01" : "00"
                    },
                    "%y": function(e) {
                        return (e.tm_year + 1900).toString().substring(2)
                    },
                    "%Y": function(e) {
                        return e.tm_year + 1900
                    },
                    "%z": function(e) {
                        var t = e.tm_gmtoff
                          , n = t >= 0;
                        return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60,
                        (n ? "+" : "-") + String("0000" + t).slice(-4)
                    },
                    "%Z": function(e) {
                        return e.tm_zone
                    },
                    "%%": function() {
                        return "%"
                    }
                };
                for (var s in v)
                    o.indexOf(s) >= 0 && (o = o.replace(new RegExp(s,"g"), v[s](a)));
                var m, C, E, w, A, P, D = (m = o,
                C = !1,
                w = E > 0 ? E : T(m) + 1,
                A = new Array(w),
                P = _(m, A, 0, A.length),
                C && (A.length = P),
                A);
                return D.length > t ? 0 : (function(e, t) {
                    b.set(e, t)
                }(D, e),
                D.length - 1)
            }
            ve = t.InternalError = ye(Error, "InternalError"),
            function() {
                for (var e = new Array(256), t = 0; t < 256; ++t)
                    e[t] = String.fromCharCode(t);
                Ce = e
            }(),
            Ee = t.BindingError = ye(Error, "BindingError"),
            Ue.prototype.isAliasOf = Ae,
            Ue.prototype.clone = Se,
            Ue.prototype.delete = Me,
            Ue.prototype.isDeleted = Ie,
            Ue.prototype.deleteLater = ke,
            nt.prototype.getPointee = Ve,
            nt.prototype.destructor = ze,
            nt.prototype.argPackAdvance = 8,
            nt.prototype.readValueFromPointer = le,
            nt.prototype.deleteObject = qe,
            nt.prototype.fromWireType = tt,
            t.getInheritedInstanceCount = Ke,
            t.getLiveInheritedInstances = Xe,
            t.flushPendingDeletes = Fe,
            t.setDelayFunction = Qe,
            it = t.UnboundTypeError = ye(Error, "UnboundTypeError"),
            t.count_emval_handles = ft,
            t.get_first_emval = dt;
            var kt = {
                v: function(e) {
                    return Wt(e)
                },
                u: function(e, t, n) {
                    throw re[e] = {
                        ptr: e,
                        adjusted: [e],
                        type: t,
                        destructor: n,
                        refcount: 0,
                        caught: !1,
                        rethrown: !1
                    },
                    "uncaught_exception"in ie ? ie.uncaught_exceptions++ : ie.uncaught_exceptions = 1,
                    e
                },
                T: function(e, t) {
                    return ae(63),
                    -1
                },
                S: function(e, t) {
                    return function(e, t) {
                        if (-1 === e || 0 === t)
                            return -28;
                        var n = oe.mappings[e];
                        return n ? (t === n.len && (oe.mappings[e] = null,
                        n.allocated && Ht(n.malloc)),
                        0) : 0
                    }(e, t)
                },
                s: function(e) {
                    var t = ue[e];
                    delete ue[e];
                    var n = t.rawConstructor
                      , r = t.rawDestructor
                      , i = t.fields;
                    ge([e], i.map((function(e) {
                        return e.getterReturnType
                    }
                    )).concat(i.map((function(e) {
                        return e.setterArgumentType
                    }
                    ))), (function(e) {
                        var a = {};
                        return i.forEach((function(t, n) {
                            var r = t.fieldName
                              , o = e[n]
                              , u = t.getter
                              , s = t.getterContext
                              , l = e[n + i.length]
                              , c = t.setter
                              , f = t.setterContext;
                            a[r] = {
                                read: function(e) {
                                    return o.fromWireType(u(s, e))
                                },
                                write: function(e, t) {
                                    var n = [];
                                    c(f, e, l.toWireType(n, t)),
                                    se(n)
                                }
                            }
                        }
                        )),
                        [{
                            name: t.name,
                            fromWireType: function(e) {
                                var t = {};
                                for (var n in a)
                                    t[n] = a[n].read(e);
                                return r(e),
                                t
                            },
                            toWireType: function(e, t) {
                                for (var i in a)
                                    if (!(i in t))
                                        throw new TypeError("Missing field");
                                var o = n();
                                for (i in a)
                                    a[i].write(o, t[i]);
                                return null !== e && e.push(r, o),
                                o
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: le,
                            destructorFunction: r
                        }]
                    }
                    ))
                },
                N: function(e, t, n, r, i) {
                    var a = _e(n);
                    we(e, {
                        name: t = Te(t),
                        fromWireType: function(e) {
                            return !!e
                        },
                        toWireType: function(e, t) {
                            return t ? r : i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(e) {
                            var r;
                            if (1 === n)
                                r = b;
                            else if (2 === n)
                                r = A;
                            else {
                                if (4 !== n)
                                    throw new TypeError("Unknown boolean type size: " + t);
                                r = R
                            }
                            return this.fromWireType(r[e >> a])
                        },
                        destructorFunction: null
                    })
                },
                w: function(e, n, r, i, a, o, u, s, l, c, f, d, p) {
                    f = Te(f),
                    o = rt(a, o),
                    s && (s = rt(u, s)),
                    c && (c = rt(l, c)),
                    p = rt(d, p);
                    var h = pe(f);
                    !function(e, n, r) {
                        t.hasOwnProperty(e) ? ((void 0 === r || void 0 !== t[e].overloadTable && void 0 !== t[e].overloadTable[r]) && be("Cannot register public name '" + e + "' twice"),
                        xe(t, e, e),
                        t.hasOwnProperty(r) && be("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"),
                        t[e].overloadTable[r] = n) : (t[e] = n,
                        void 0 !== r && (t[e].numArguments = r))
                    }(h, (function() {
                        ot("Cannot construct " + f + " due to unbound types", [i])
                    }
                    )),
                    ge([e, n, r], i ? [i] : [], (function(n) {
                        var r, a;
                        n = n[0],
                        a = i ? (r = n.registeredClass).instancePrototype : Ue.prototype;
                        var u = he(h, (function() {
                            if (Object.getPrototypeOf(this) !== l)
                                throw new Ee("Use 'new' to construct " + f);
                            if (void 0 === d.constructor_body)
                                throw new Ee(f + " has no accessible constructor");
                            var e = d.constructor_body[arguments.length];
                            if (void 0 === e)
                                throw new Ee("Tried to invoke ctor of " + f + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(d.constructor_body).toString() + ") parameters instead!");
                            return e.apply(this, arguments)
                        }
                        ))
                          , l = Object.create(a, {
                            constructor: {
                                value: u
                            }
                        });
                        u.prototype = l;
                        var d = new We(f,u,l,p,r,o,s,c)
                          , y = new nt(f,d,!0,!1,!1)
                          , v = new nt(f + "*",d,!1,!1,!1)
                          , m = new nt(f + " const*",d,!1,!0,!1);
                        return je[e] = {
                            pointerType: v,
                            constPointerType: m
                        },
                        function(e, n, r) {
                            t.hasOwnProperty(e) || me("Replacing nonexistant public symbol"),
                            void 0 !== t[e].overloadTable && void 0 !== r ? t[e].overloadTable[r] = n : (t[e] = n,
                            t[e].argCount = r)
                        }(h, u),
                        [y, v, m]
                    }
                    ))
                },
                I: function(e, t, n, r, i, a) {
                    var o;
                    t > 0 || Q("Assertion failed: " + o);
                    var u = ut(t, n);
                    i = rt(r, i);
                    var s = [a]
                      , l = [];
                    ge([], [e], (function(e) {
                        var n = "constructor " + (e = e[0]).name;
                        if (void 0 === e.registeredClass.constructor_body && (e.registeredClass.constructor_body = []),
                        void 0 !== e.registeredClass.constructor_body[t - 1])
                            throw new Ee("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + e.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                        return e.registeredClass.constructor_body[t - 1] = function() {
                            ot("Cannot construct " + e.name + " due to unbound types", u)
                        }
                        ,
                        ge([], u, (function(r) {
                            return e.registeredClass.constructor_body[t - 1] = function() {
                                arguments.length !== t - 1 && be(n + " called with " + arguments.length + " arguments, expected " + (t - 1)),
                                l.length = 0,
                                s.length = t;
                                for (var e = 1; e < t; ++e)
                                    s[e] = r[e].toWireType(l, arguments[e - 1]);
                                var a = i.apply(null, s);
                                return se(l),
                                r[0].fromWireType(a)
                            }
                            ,
                            []
                        }
                        )),
                        []
                    }
                    ))
                },
                c: function(e, t, n, r, i, a, o, u) {
                    var s = ut(n, r);
                    t = Te(t),
                    a = rt(i, a),
                    ge([], [e], (function(e) {
                        var r = (e = e[0]).name + "." + t;
                        function i() {
                            ot("Cannot call " + r + " due to unbound types", s)
                        }
                        u && e.registeredClass.pureVirtualFunctions.push(t);
                        var l = e.registeredClass.instancePrototype
                          , c = l[t];
                        return void 0 === c || void 0 === c.overloadTable && c.className !== e.name && c.argCount === n - 2 ? (i.argCount = n - 2,
                        i.className = e.name,
                        l[t] = i) : (xe(l, t, r),
                        l[t].overloadTable[n - 2] = i),
                        ge([], s, (function(i) {
                            var u = function(e, t, n, r, i) {
                                var a = t.length;
                                a < 2 && be("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                for (var o = null !== t[1] && null !== n, u = !1, s = 1; s < t.length; ++s)
                                    if (null !== t[s] && void 0 === t[s].destructorFunction) {
                                        u = !0;
                                        break
                                    }
                                var l = "void" !== t[0].name
                                  , c = a - 2
                                  , f = new Array(c)
                                  , d = []
                                  , p = [];
                                return function() {
                                    var n;
                                    arguments.length !== c && be("function " + e + " called with " + arguments.length + " arguments, expected " + c + " args!"),
                                    p.length = 0,
                                    d.length = o ? 2 : 1,
                                    d[0] = i,
                                    o && (n = t[1].toWireType(p, this),
                                    d[1] = n);
                                    for (var a = 0; a < c; ++a)
                                        f[a] = t[a + 2].toWireType(p, arguments[a]),
                                        d.push(f[a]);
                                    var s = r.apply(null, d);
                                    if (u)
                                        se(p);
                                    else
                                        for (a = o ? 1 : 2; a < t.length; a++) {
                                            var h = 1 === a ? n : f[a - 2];
                                            null !== t[a].destructorFunction && t[a].destructorFunction(h)
                                        }
                                    if (l)
                                        return t[0].fromWireType(s)
                                }
                            }(r, i, e, a, o);
                            return void 0 === l[t].overloadTable ? (u.argCount = n - 2,
                            l[t] = u) : l[t].overloadTable[n - 2] = u,
                            []
                        }
                        )),
                        []
                    }
                    ))
                },
                M: function(e, t) {
                    we(e, {
                        name: t = Te(t),
                        fromWireType: function(e) {
                            var t = lt[e].value;
                            return ct(e),
                            t
                        },
                        toWireType: function(e, t) {
                            return pt(t)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: le,
                        destructorFunction: null
                    })
                },
                C: function(e, t, n) {
                    var r = _e(n);
                    we(e, {
                        name: t = Te(t),
                        fromWireType: function(e) {
                            return e
                        },
                        toWireType: function(e, t) {
                            if ("number" != typeof t && "boolean" != typeof t)
                                throw new TypeError('Cannot convert "' + ht(t) + '" to ' + this.name);
                            return t
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: yt(t, r),
                        destructorFunction: null
                    })
                },
                n: function(e, t, n, r, i) {
                    t = Te(t),
                    -1 === i && (i = 4294967295);
                    var a = _e(n)
                      , o = function(e) {
                        return e
                    };
                    if (0 === r) {
                        var u = 32 - 8 * n;
                        o = function(e) {
                            return e << u >>> u
                        }
                    }
                    var s = -1 != t.indexOf("unsigned");
                    we(e, {
                        name: t,
                        fromWireType: o,
                        toWireType: function(e, n) {
                            if ("number" != typeof n && "boolean" != typeof n)
                                throw new TypeError('Cannot convert "' + ht(n) + '" to ' + this.name);
                            if (n < r || n > i)
                                throw new TypeError('Passing a number "' + ht(n) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + r + ", " + i + "]!");
                            return s ? n >>> 0 : 0 | n
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: vt(t, a, 0 !== r),
                        destructorFunction: null
                    })
                },
                m: function(e, t, n) {
                    var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                    function i(e) {
                        var t = D
                          , n = t[e >>= 2]
                          , i = t[e + 1];
                        return new r(E,i,n)
                    }
                    we(e, {
                        name: n = Te(n),
                        fromWireType: i,
                        argPackAdvance: 8,
                        readValueFromPointer: i
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                D: function(e, t) {
                    var n = "std::string" === (t = Te(t));
                    we(e, {
                        name: t,
                        fromWireType: function(e) {
                            var t, r = D[e >> 2];
                            if (n) {
                                var i = w[e + 4 + r]
                                  , a = 0;
                                0 != i && (a = i,
                                w[e + 4 + r] = 0);
                                for (var o = e + 4, u = 0; u <= r; ++u) {
                                    var s = e + 4 + u;
                                    if (0 == w[s]) {
                                        var l = g(o);
                                        void 0 === t ? t = l : (t += String.fromCharCode(0),
                                        t += l),
                                        o = s + 1
                                    }
                                }
                                0 != a && (w[e + 4 + r] = a)
                            } else {
                                var c = new Array(r);
                                for (u = 0; u < r; ++u)
                                    c[u] = String.fromCharCode(w[e + 4 + u]);
                                t = c.join("")
                            }
                            return Ht(e),
                            t
                        },
                        toWireType: function(e, t) {
                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                            var r = "string" == typeof t;
                            r || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || be("Cannot pass non-string to std::string");
                            var i = (n && r ? function() {
                                return T(t)
                            }
                            : function() {
                                return t.length
                            }
                            )()
                              , a = Wt(4 + i + 1);
                            if (D[a >> 2] = i,
                            n && r)
                                C(t, a + 4, i + 1);
                            else if (r)
                                for (var o = 0; o < i; ++o) {
                                    var u = t.charCodeAt(o);
                                    u > 255 && (Ht(a),
                                    be("String has UTF-16 code units that do not fit in 8 bits")),
                                    w[a + 4 + o] = u
                                }
                            else
                                for (o = 0; o < i; ++o)
                                    w[a + 4 + o] = t[o];
                            return null !== e && e.push(Ht, a),
                            a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: le,
                        destructorFunction: function(e) {
                            Ht(e)
                        }
                    })
                },
                A: function(e, t, n) {
                    var r, i, a, o, u;
                    n = Te(n),
                    2 === t ? (r = M,
                    i = I,
                    o = N,
                    a = function() {
                        return P
                    }
                    ,
                    u = 1) : 4 === t && (r = L,
                    i = F,
                    o = k,
                    a = function() {
                        return D
                    }
                    ,
                    u = 2),
                    we(e, {
                        name: n,
                        fromWireType: function(e) {
                            var n, i = D[e >> 2], o = a(), s = o[e + 4 + i * t >> u], l = 0;
                            0 != s && (l = s,
                            o[e + 4 + i * t >> u] = 0);
                            for (var c = e + 4, f = 0; f <= i; ++f) {
                                var d = e + 4 + f * t;
                                if (0 == o[d >> u]) {
                                    var p = r(c);
                                    void 0 === n ? n = p : (n += String.fromCharCode(0),
                                    n += p),
                                    c = d + t
                                }
                            }
                            return 0 != l && (o[e + 4 + i * t >> u] = l),
                            Ht(e),
                            n
                        },
                        toWireType: function(e, r) {
                            "string" != typeof r && be("Cannot pass non-string to C++ string type " + n);
                            var a = o(r)
                              , s = Wt(4 + a + t);
                            return D[s >> 2] = a >> u,
                            i(r, s + 4, a + t),
                            null !== e && e.push(Ht, s),
                            s
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: le,
                        destructorFunction: function(e) {
                            Ht(e)
                        }
                    })
                },
                t: function(e, t, n, r, i, a) {
                    ue[e] = {
                        name: Te(t),
                        rawConstructor: rt(n, r),
                        rawDestructor: rt(i, a),
                        fields: []
                    }
                },
                i: function(e, t, n, r, i, a, o, u, s, l) {
                    ue[e].fields.push({
                        fieldName: Te(t),
                        getterReturnType: n,
                        getter: rt(r, i),
                        getterContext: a,
                        setterArgumentType: o,
                        setter: rt(u, s),
                        setterContext: l
                    })
                },
                O: function(e, t) {
                    we(e, {
                        isVoid: !0,
                        name: t = Te(t),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(e, t) {}
                    })
                },
                h: function(e, t, n) {
                    e = mt(e),
                    t = gt(t, "emval::as");
                    var r = []
                      , i = pt(r);
                    return R[n >> 2] = i,
                    t.toWireType(r, e)
                },
                x: function(e, t, n, r) {
                    e = mt(e);
                    for (var i = _t(t, n), a = new Array(t), o = 0; o < t; ++o) {
                        var u = i[o];
                        a[o] = u.readValueFromPointer(r),
                        r += u.argPackAdvance
                    }
                    return pt(e.apply(void 0, a))
                },
                o: function(e, t, n, r, i) {
                    return (e = bt[e])(t = mt(t), n = Tt(n), function(e) {
                        var t = [];
                        return R[e >> 2] = pt(t),
                        t
                    }(r), i)
                },
                g: function(e, t, n, r) {
                    (e = bt[e])(t = mt(t), n = Tt(n), null, r)
                },
                a: ct,
                p: function(e) {
                    return 0 === e ? pt(wt()) : (e = Tt(e),
                    pt(wt()[e]))
                },
                e: function(e, t) {
                    var n, r, i = _t(e, t), a = i[0], o = new Array(e - 1);
                    return n = function(t, n, r, u) {
                        for (var s = 0, l = 0; l < e - 1; ++l)
                            o[l] = i[l + 1].readValueFromPointer(u + s),
                            s += i[l + 1].argPackAdvance;
                        var c = t[n].apply(t, o);
                        for (l = 0; l < e - 1; ++l)
                            i[l + 1].deleteObject && i[l + 1].deleteObject(o[l]);
                        if (!a.isVoid)
                            return a.toWireType(r, c)
                    }
                    ,
                    r = bt.length,
                    bt.push(n),
                    r
                },
                B: function(e) {
                    return e = Tt(e),
                    pt(t[e])
                },
                d: function(e, t) {
                    return pt((e = mt(e))[t = mt(t)])
                },
                l: function(e) {
                    e > 4 && (lt[e].refcount += 1)
                },
                $: function() {
                    return pt([])
                },
                b: function(e) {
                    return pt(Tt(e))
                },
                q: function() {
                    return pt({})
                },
                f: function(e) {
                    se(lt[e].value),
                    ct(e)
                },
                k: function(e, t, n) {
                    e = mt(e),
                    t = mt(t),
                    n = mt(n),
                    e[t] = n
                },
                j: function(e, t) {
                    return pt((e = gt(e, "_emval_take_value")).readValueFromPointer(t))
                },
                r: function(e) {
                    return pt(typeof (e = mt(e)))
                },
                y: function() {
                    Q()
                },
                F: function(e, t) {
                    var n;
                    if (0 === e)
                        n = Date.now();
                    else {
                        if (1 !== e && 4 !== e)
                            return ae(28),
                            -1;
                        n = Et()
                    }
                    return R[t >> 2] = n / 1e3 | 0,
                    R[t + 4 >> 2] = n % 1e3 * 1e3 * 1e3 | 0,
                    0
                },
                K: function(e, t, n) {
                    w.copyWithin(e, t, t + n)
                },
                L: function(e) {
                    var t = w.length;
                    if (e > 2147418112)
                        return !1;
                    for (var n, r, i = 1; i <= 4; i *= 2) {
                        var a = t * (1 + .2 / i);
                        if (a = Math.min(a, e + 100663296),
                        Pt(Math.min(2147418112, ((n = Math.max(16777216, e, a)) % (r = 65536) > 0 && (n += r - n % r),
                        n))))
                            return !0
                    }
                    return !1
                },
                U: function(e, t) {
                    var n = Dt()
                      , r = 0;
                    return n.forEach((function(n, i) {
                        var a = t + r;
                        R[e + 4 * i >> 2] = a,
                        function(e, t, n) {
                            for (var r = 0; r < e.length; ++r)
                                b[t++ >> 0] = e.charCodeAt(r);
                            n || (b[t >> 0] = 0)
                        }(n, a),
                        r += n.length + 1
                    }
                    )),
                    0
                },
                V: function(e, t) {
                    var n = Dt();
                    R[e >> 2] = n.length;
                    var r = 0;
                    return n.forEach((function(e) {
                        r += e.length + 1
                    }
                    )),
                    R[t >> 2] = r,
                    0
                },
                W: function(e) {
                    return 0
                },
                J: function(e, t, n, r, i) {},
                G: function(e, t, n, r) {
                    for (var i = 0, a = 0; a < n; a++) {
                        for (var o = R[t + 8 * a >> 2], u = R[t + (8 * a + 4) >> 2], s = 0; s < u; s++)
                            oe.printChar(e, w[o + s]);
                        i += u
                    }
                    return R[r >> 2] = i,
                    0
                },
                Z: function(e) {
                    return function(e, t) {
                        var n = new Date(1e3 * R[e >> 2]);
                        R[t >> 2] = n.getUTCSeconds(),
                        R[t + 4 >> 2] = n.getUTCMinutes(),
                        R[t + 8 >> 2] = n.getUTCHours(),
                        R[t + 12 >> 2] = n.getUTCDate(),
                        R[t + 16 >> 2] = n.getUTCMonth(),
                        R[t + 20 >> 2] = n.getUTCFullYear() - 1900,
                        R[t + 24 >> 2] = n.getUTCDay(),
                        R[t + 36 >> 2] = 0,
                        R[t + 32 >> 2] = 0;
                        var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0)
                          , i = (n.getTime() - r) / 864e5 | 0;
                        return R[t + 28 >> 2] = i,
                        R[t + 40 >> 2] = $t,
                        t
                    }(e, 74336)
                },
                X: function(e) {
                    return function(e, t) {
                        Ot();
                        var n = new Date(1e3 * R[e >> 2]);
                        R[t >> 2] = n.getSeconds(),
                        R[t + 4 >> 2] = n.getMinutes(),
                        R[t + 8 >> 2] = n.getHours(),
                        R[t + 12 >> 2] = n.getDate(),
                        R[t + 16 >> 2] = n.getMonth(),
                        R[t + 20 >> 2] = n.getFullYear() - 1900,
                        R[t + 24 >> 2] = n.getDay();
                        var r = new Date(n.getFullYear(),0,1)
                          , i = (n.getTime() - r.getTime()) / 864e5 | 0;
                        R[t + 28 >> 2] = i,
                        R[t + 36 >> 2] = -60 * n.getTimezoneOffset();
                        var a = new Date(n.getFullYear(),6,1).getTimezoneOffset()
                          , o = r.getTimezoneOffset()
                          , u = 0 | (a != o && n.getTimezoneOffset() == Math.min(o, a));
                        R[t + 32 >> 2] = u;
                        var s = R[Gt() + (u ? 4 : 0) >> 2];
                        return R[t + 40 >> 2] = s,
                        t
                    }(e, 74336)
                },
                memory: c,
                H: function(e) {
                    Ot();
                    var t = new Date(R[e + 20 >> 2] + 1900,R[e + 16 >> 2],R[e + 12 >> 2],R[e + 8 >> 2],R[e + 4 >> 2],R[e >> 2],0)
                      , n = R[e + 32 >> 2]
                      , r = t.getTimezoneOffset()
                      , i = new Date(t.getFullYear(),0,1)
                      , a = new Date(t.getFullYear(),6,1).getTimezoneOffset()
                      , o = i.getTimezoneOffset()
                      , u = Math.min(o, a);
                    if (n < 0)
                        R[e + 32 >> 2] = Number(a != o && u == r);
                    else if (n > 0 != (u == r)) {
                        var s = Math.max(o, a)
                          , l = n > 0 ? u : s;
                        t.setTime(t.getTime() + 6e4 * (l - r))
                    }
                    R[e + 24 >> 2] = t.getDay();
                    var c = (t.getTime() - i.getTime()) / 864e5 | 0;
                    return R[e + 28 >> 2] = c,
                    t.getTime() / 1e3 | 0
                },
                E: function() {},
                Q: function() {},
                P: function() {},
                _: function(e) {
                    return (e = +e) >= 0 ? +z(e + .5) : +V(e - .5)
                },
                z: function(e) {},
                R: function(e, t, n, r) {
                    return Ft(e, t, n, r)
                },
                table: h,
                Y: function(e) {
                    var t = Date.now() / 1e3 | 0;
                    return e && (R[e >> 2] = t),
                    t
                }
            }
              , Ut = function() {
                var e = {
                    a: kt
                };
                function n(e, n) {
                    var r = e.exports;
                    t.asm = r,
                    function(e) {
                        if (q--,
                        t.monitorRunDependencies && t.monitorRunDependencies(q),
                        0 == q && (null !== K && (clearInterval(K),
                        K = null),
                        X)) {
                            var n = X;
                            X = null,
                            n()
                        }
                    }()
                }
                function r(e) {
                    n(e.instance)
                }
                function i(t) {
                    return (l || "function" != typeof fetch ? new Promise((function(e, t) {
                        e(te())
                    }
                    )) : fetch(ee, {
                        credentials: "same-origin"
                    }).then((function(e) {
                        if (!e.ok)
                            throw "failed to load wasm binary file at '" + ee + "'";
                        return e.arrayBuffer()
                    }
                    )).catch((function() {
                        return te()
                    }
                    ))).then((function(t) {
                        return WebAssembly.instantiate(t, e)
                    }
                    )).then(t, (function(e) {
                        d("failed to asynchronously prepare wasm: " + e),
                        Q(e)
                    }
                    ))
                }
                if (q++,
                t.monitorRunDependencies && t.monitorRunDependencies(q),
                t.instantiateWasm)
                    try {
                        return t.instantiateWasm(e, n)
                    } catch (e) {
                        return d("Module.instantiateWasm callback failed with error: " + e),
                        !1
                    }
                return function() {
                    if (l || "function" != typeof WebAssembly.instantiateStreaming || Z(ee) || "function" != typeof fetch)
                        return i(r);
                    fetch(ee, {
                        credentials: "same-origin"
                    }).then((function(t) {
                        return WebAssembly.instantiateStreaming(t, e).then(r, (function(e) {
                            d("wasm streaming compile failed: " + e),
                            d("falling back to ArrayBuffer instantiation"),
                            i(r)
                        }
                        ))
                    }
                    ))
                }(),
                {}
            }();
            t.asm = Ut;
            var jt, xt = t.___wasm_call_ctors = function() {
                return (xt = t.___wasm_call_ctors = t.asm.aa).apply(null, arguments)
            }
            , Wt = t._malloc = function() {
                return (Wt = t._malloc = t.asm.ba).apply(null, arguments)
            }
            , Ht = t._free = function() {
                return (Ht = t._free = t.asm.ca).apply(null, arguments)
            }
            , Gt = t.__get_tzname = function() {
                return (Gt = t.__get_tzname = t.asm.da).apply(null, arguments)
            }
            , Yt = t.__get_daylight = function() {
                return (Yt = t.__get_daylight = t.asm.ea).apply(null, arguments)
            }
            , Bt = t.__get_timezone = function() {
                return (Bt = t.__get_timezone = t.asm.fa).apply(null, arguments)
            }
            , Vt = t.___getTypeName = function() {
                return (Vt = t.___getTypeName = t.asm.ga).apply(null, arguments)
            }
            ;
            function zt(e) {
                function n() {
                    jt || (jt = !0,
                    t.calledRun = !0,
                    y || (W(G),
                    W(Y),
                    t.onRuntimeInitialized && t.onRuntimeInitialized(),
                    function() {
                        if (t.postRun)
                            for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; )
                                e = t.postRun.shift(),
                                B.unshift(e);
                        var e;
                        W(B)
                    }()))
                }
                e = e || o,
                q > 0 || (function() {
                    if (t.preRun)
                        for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; )
                            e = t.preRun.shift(),
                            H.unshift(e);
                    var e;
                    W(H)
                }(),
                q > 0 || (t.setStatus ? (t.setStatus("Running..."),
                setTimeout((function() {
                    setTimeout((function() {
                        t.setStatus("")
                    }
                    ), 1),
                    n()
                }
                ), 1)) : n()))
            }
            if (t.___embind_register_native_and_builtin_types = function() {
                return (t.___embind_register_native_and_builtin_types = t.asm.ha).apply(null, arguments)
            }
            ,
            t.dynCall_ii = function() {
                return (t.dynCall_ii = t.asm.ia).apply(null, arguments)
            }
            ,
            t.dynCall_vi = function() {
                return (t.dynCall_vi = t.asm.ja).apply(null, arguments)
            }
            ,
            t.dynCall_viiii = function() {
                return (t.dynCall_viiii = t.asm.ka).apply(null, arguments)
            }
            ,
            t.dynCall_vii = function() {
                return (t.dynCall_vii = t.asm.la).apply(null, arguments)
            }
            ,
            t.dynCall_vid = function() {
                return (t.dynCall_vid = t.asm.ma).apply(null, arguments)
            }
            ,
            t.dynCall_viid = function() {
                return (t.dynCall_viid = t.asm.na).apply(null, arguments)
            }
            ,
            t.dynCall_viii = function() {
                return (t.dynCall_viii = t.asm.oa).apply(null, arguments)
            }
            ,
            t.dynCall_viif = function() {
                return (t.dynCall_viif = t.asm.pa).apply(null, arguments)
            }
            ,
            t.dynCall_vif = function() {
                return (t.dynCall_vif = t.asm.qa).apply(null, arguments)
            }
            ,
            t.dynCall_iiii = function() {
                return (t.dynCall_iiii = t.asm.ra).apply(null, arguments)
            }
            ,
            t.dynCall_iii = function() {
                return (t.dynCall_iii = t.asm.sa).apply(null, arguments)
            }
            ,
            t.dynCall_viiiii = function() {
                return (t.dynCall_viiiii = t.asm.ta).apply(null, arguments)
            }
            ,
            t.dynCall_i = function() {
                return (t.dynCall_i = t.asm.ua).apply(null, arguments)
            }
            ,
            t.dynCall_fii = function() {
                return (t.dynCall_fii = t.asm.va).apply(null, arguments)
            }
            ,
            t.dynCall_vij = function() {
                return (t.dynCall_vij = t.asm.wa).apply(null, arguments)
            }
            ,
            t.dynCall_v = function() {
                return (t.dynCall_v = t.asm.xa).apply(null, arguments)
            }
            ,
            t.dynCall_viiiiiii = function() {
                return (t.dynCall_viiiiiii = t.asm.ya).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiiiiii = function() {
                return (t.dynCall_iiiiiiiii = t.asm.za).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiii = function() {
                return (t.dynCall_iiiiii = t.asm.Aa).apply(null, arguments)
            }
            ,
            t.dynCall_fi = function() {
                return (t.dynCall_fi = t.asm.Ba).apply(null, arguments)
            }
            ,
            t.dynCall_vidd = function() {
                return (t.dynCall_vidd = t.asm.Ca).apply(null, arguments)
            }
            ,
            t.dynCall_viiij = function() {
                return (t.dynCall_viiij = t.asm.Da).apply(null, arguments)
            }
            ,
            t.dynCall_iijiiiii = function() {
                return (t.dynCall_iijiiiii = t.asm.Ea).apply(null, arguments)
            }
            ,
            t.dynCall_ji = function() {
                return (t.dynCall_ji = t.asm.Fa).apply(null, arguments)
            }
            ,
            t.dynCall_vijii = function() {
                return (t.dynCall_vijii = t.asm.Ga).apply(null, arguments)
            }
            ,
            t.dynCall_jiii = function() {
                return (t.dynCall_jiii = t.asm.Ha).apply(null, arguments)
            }
            ,
            t.dynCall_di = function() {
                return (t.dynCall_di = t.asm.Ia).apply(null, arguments)
            }
            ,
            t.dynCall_iidiiii = function() {
                return (t.dynCall_iidiiii = t.asm.Ja).apply(null, arguments)
            }
            ,
            t.dynCall_jiji = function() {
                return (t.dynCall_jiji = t.asm.Ka).apply(null, arguments)
            }
            ,
            t.dynCall_iiiii = function() {
                return (t.dynCall_iiiii = t.asm.La).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiiii = function() {
                return (t.dynCall_iiiiiii = t.asm.Ma).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiij = function() {
                return (t.dynCall_iiiiij = t.asm.Na).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiid = function() {
                return (t.dynCall_iiiiid = t.asm.Oa).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiijj = function() {
                return (t.dynCall_iiiiijj = t.asm.Pa).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiiiii = function() {
                return (t.dynCall_iiiiiiii = t.asm.Qa).apply(null, arguments)
            }
            ,
            t.dynCall_iiiiiijj = function() {
                return (t.dynCall_iiiiiijj = t.asm.Ra).apply(null, arguments)
            }
            ,
            t.dynCall_viiiiii = function() {
                return (t.dynCall_viiiiii = t.asm.Sa).apply(null, arguments)
            }
            ,
            t.asm = Ut,
            t.then = function(e) {
                if (jt)
                    e(t);
                else {
                    var n = t.onRuntimeInitialized;
                    t.onRuntimeInitialized = function() {
                        n && n(),
                        e(t)
                    }
                }
                return t
            }
            ,
            X = function e() {
                jt || zt(),
                jt || (X = e)
            }
            ,
            t.run = zt,
            t.preInit)
                for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; )
                    t.preInit.pop()();
            return zt(),
            t
        }
        );
        t.default = r
    }
    .call(this, n(4))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i, a, o = n(0), u = n.n(o);
    !function(e) {
        e.GENERIC = "Error",
        e.NOT_SUPPORTED = "ErrorNotSupported",
        e.NO_SOURCE = "ErrorNoSource",
        e.INVALID_DATA = "ErrorInvalidData",
        e.INVALID_STATE = "ErrorInvalidState",
        e.INVALID_PARAMETER = "ErrorInvalidParameter",
        e.TIMEOUT = "ErrorTimeout",
        e.NETWORK = "ErrorNetwork",
        e.NETWORK_IO = "ErrorNetworkIO",
        e.AUTHORIZATION = "ErrorAuthorization",
        e.NOT_AVAILABLE = "ErrorNotAvailable"
    }(r || (r = {})),
    function(e) {
        e[e.GEOBLOCKED = 1] = "GEOBLOCKED",
        e[e.UNSUPPORTED_DEVICE = 2] = "UNSUPPORTED_DEVICE",
        e[e.ANONYMIZER_BLOCKED = 3] = "ANONYMIZER_BLOCKED",
        e[e.CELLULAR_NETWORK_PROHIBITED = 4] = "CELLULAR_NETWORK_PROHIBITED",
        e[e.UNAUTHORIZATION_ENTITLEMENTS = 5] = "UNAUTHORIZATION_ENTITLEMENTS",
        e[e.VOD_RESTRICTED = 6] = "VOD_RESTRICTED"
    }(i || (i = {})),
    function(e) {
        e.INITIALIZED = "PlayerInitialized",
        e.QUALITY_CHANGED = "PlayerQualityChanged",
        e.DURATION_CHANGED = "PlayerDurationChanged",
        e.VOLUME_CHANGED = "PlayerVolumeChanged",
        e.MUTED_CHANGED = "PlayerMutedChanged",
        e.PLAYBACK_RATE_CHANGED = "PlayerPlaybackRateChanged",
        e.REBUFFERING = "PlayerRebuffering",
        e.AUDIO_BLOCKED = "PlayerAudioBlocked",
        e.PLAYBACK_BLOCKED = "PlayerPlaybackBlocked",
        e.ERROR = "PlayerError",
        e.RECOVERABLE_ERROR = "PlayerRecoverableError",
        e.ANALYTICS_EVENT = "PlayerAnalyticsEvent",
        e.TIME_UPDATE = "PlayerTimeUpdate",
        e.BUFFER_UPDATE = "PlayerBufferUpdate",
        e.SEEK_COMPLETED = "PlayerSeekCompleted",
        e.SESSION_DATA = "PlayerSessionData",
        e.WORKER_ERROR = "PlayerWorkerError",
        e.METADATA = "PlayerMetadata",
        e.TEXT_CUE = "PlayerTextCue",
        e.TEXT_METADATA_CUE = "PlayerTextMetadataCue"
    }(a || (a = {}));
    var s = function(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }
            ))
        }
        ), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }
            ))
        }
        ))
    }
      , l = setTimeout;
    function c(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function f() {}
    function d(e) {
        if (!(this instanceof d))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        g(e, this)
    }
    function p(e, t) {
        for (; 3 === e._state; )
            e = e._value;
        0 !== e._state ? (e._handled = !0,
        d._immediateFn((function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void y(t.promise, e)
                }
                h(t.promise, r)
            } else
                (1 === e._state ? h : y)(t.promise, e._value)
        }
        ))) : e._deferreds.push(t)
    }
    function h(e, t) {
        try {
            if (t === e)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof d)
                    return e._state = 3,
                    e._value = t,
                    void v(e);
                if ("function" == typeof n)
                    return void g((r = n,
                    i = t,
                    function() {
                        r.apply(i, arguments)
                    }
                    ), e)
            }
            e._state = 1,
            e._value = t,
            v(e)
        } catch (t) {
            y(e, t)
        }
        var r, i
    }
    function y(e, t) {
        e._state = 2,
        e._value = t,
        v(e)
    }
    function v(e) {
        2 === e._state && 0 === e._deferreds.length && d._immediateFn((function() {
            e._handled || d._unhandledRejectionFn(e._value)
        }
        ));
        for (var t = 0, n = e._deferreds.length; t < n; t++)
            p(e, e._deferreds[t]);
        e._deferreds = null
    }
    function m(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = n
    }
    function g(e, t) {
        var n = !1;
        try {
            e((function(e) {
                n || (n = !0,
                h(t, e))
            }
            ), (function(e) {
                n || (n = !0,
                y(t, e))
            }
            ))
        } catch (e) {
            if (n)
                return;
            n = !0,
            y(t, e)
        }
    }
    d.prototype.catch = function(e) {
        return this.then(null, e)
    }
    ,
    d.prototype.then = function(e, t) {
        var n = new this.constructor(f);
        return p(this, new m(e,t,n)),
        n
    }
    ,
    d.prototype.finally = s,
    d.all = function(e) {
        return new d((function(t, n) {
            if (!c(e))
                return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length)
                return t([]);
            var i = r.length;
            function a(e, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var u = o.then;
                        if ("function" == typeof u)
                            return void u.call(o, (function(t) {
                                a(e, t)
                            }
                            ), n)
                    }
                    r[e] = o,
                    0 == --i && t(r)
                } catch (e) {
                    n(e)
                }
            }
            for (var o = 0; o < r.length; o++)
                a(o, r[o])
        }
        ))
    }
    ,
    d.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === d ? e : new d((function(t) {
            t(e)
        }
        ))
    }
    ,
    d.reject = function(e) {
        return new d((function(t, n) {
            n(e)
        }
        ))
    }
    ,
    d.race = function(e) {
        return new d((function(t, n) {
            if (!c(e))
                return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, i = e.length; r < i; r++)
                d.resolve(e[r]).then(t, n)
        }
        ))
    }
    ,
    d._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    }
    || function(e) {
        l(e, 0)
    }
    ,
    d._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }
    ;
    var _, C = d, T = self.Promise || C, E = function() {
        function e() {
            u()(this, "buffer", void 0),
            u()(this, "head", void 0),
            u()(this, "tail", void 0),
            this.buffer = [],
            this.head = 0,
            this.tail = 0
        }
        var t = e.prototype;
        return t.push = function(e) {
            this.tail === this.buffer.length ? this.buffer.push(e) : this.buffer[this.tail] = e,
            this.tail++
        }
        ,
        t.pop = function() {
            var e = this.buffer[this.head];
            return this.buffer[this.head] = null,
            this.head++,
            this.empty() && (this.head = 0,
            this.tail = 0),
            e
        }
        ,
        t.size = function() {
            return this.tail - this.head
        }
        ,
        t.empty = function() {
            return this.head >= this.tail
        }
        ,
        e
    }();
    !function(e) {
        e[e.Readable = 0] = "Readable",
        e[e.Closed = 1] = "Closed",
        e[e.Errored = 2] = "Errored"
    }(_ || (_ = {}));
    var b = function() {
        function e(e) {
            u()(this, "state", void 0),
            u()(this, "queuedChunks", void 0),
            u()(this, "readRequest", void 0),
            u()(this, "storedError", void 0),
            u()(this, "onCancel", void 0),
            this.state = _.Readable,
            this.queuedChunks = new E,
            this.readRequest = null,
            this.storedError = null,
            this.onCancel = e
        }
        var t = e.prototype;
        return t.read = function() {
            var t = this;
            switch (this.state) {
            case _.Readable:
                return this.queuedChunks.empty() ? new T((function(e, n) {
                    t.readRequest = {
                        resolve: e,
                        reject: n
                    }
                }
                )) : this.queuedChunks.pop();
            case _.Closed:
                return this.queuedChunks.empty() ? T.resolve(e.DONE_CHUNK) : this.queuedChunks.pop();
            case _.Errored:
                return T.reject(this.storedError)
            }
        }
        ,
        t.cancel = function() {
            this.onCancel(),
            this.close()
        }
        ,
        t.error = function(e) {
            switch (this.state) {
            case _.Readable:
                this.state = _.Errored,
                this.storedError = e,
                this.queuedChunks = null,
                this.readRequest && (this.readRequest.reject(e),
                this.readRequest = null)
            }
        }
        ,
        t.write = function(e) {
            switch (this.state) {
            case _.Readable:
                var t = {
                    done: !1,
                    value: e
                };
                this.readRequest ? (this.readRequest.resolve(t),
                this.readRequest = null) : this.queuedChunks.push(T.resolve(t))
            }
        }
        ,
        t.close = function() {
            switch (this.state) {
            case _.Readable:
                this.readRequest && (this.readRequest.resolve(e.DONE_CHUNK),
                this.readRequest = null),
                this.state = _.Closed
            }
        }
        ,
        e
    }();
    u()(b, "DONE_CHUNK", {
        done: !0,
        value: void 0
    });
    var w = function() {
        function e(e, t) {
            u()(this, "reader", void 0),
            this.reader = new b(e.abort.bind(e)),
            this.initReadableStreamShim(e, t)
        }
        var t = e.prototype;
        return t.getReader = function() {
            return this.reader
        }
        ,
        t.initReadableStreamShim = function(e, t) {
            var n = this;
            switch (e.responseType = t,
            t) {
            case "moz-chunked-arraybuffer":
                e.addEventListener("progress", (function() {
                    n.reader.write(new Uint8Array(e.response))
                }
                )),
                e.addEventListener("load", this.reader.close.bind(this.reader));
                break;
            case "ms-stream":
                e.addEventListener("readystatechange", (function() {
                    if (e.readyState === e.LOADING) {
                        var t = new self.MSStreamReader
                          , r = 0;
                        t.onprogress = function() {
                            t.result.byteLength > r && (n.reader.write(new Uint8Array(t.result,r)),
                            r = t.result.byteLength)
                        }
                        ,
                        t.onload = n.reader.close.bind(n.reader),
                        t.readAsArrayBuffer(e.response)
                    }
                }
                ));
                break;
            case "arraybuffer":
                e.addEventListener("progress", this.reader.write.bind(this.reader, new Uint8Array(0))),
                e.addEventListener("load", (function() {
                    e.response && n.reader.write(new Uint8Array(e.response)),
                    n.reader.close()
                }
                ))
            }
        }
        ,
        e
    }()
      , A = self.fetch && self.ReadableStream ? self.fetch.bind(self) : R
      , P = self.fetch && self.ReadableStream ? "arraybuffer" : O("moz-chunked-arraybuffer") || O("ms-stream") || "arraybuffer";
    function R(e, t) {
        return void 0 === t && (t = {}),
        new T((function(n, r) {
            var i = new XMLHttpRequest;
            for (var a in i.open(t.method || "GET", e),
            t.headers)
                t.headers.hasOwnProperty(a) && i.setRequestHeader(a, t.headers[a]);
            "include" === t.credentials && (i.withCredentials = !0);
            var o = new w(i,P);
            i.addEventListener("readystatechange", (function e() {
                2 === i.readyState && (i.removeEventListener("readystatechange", e),
                n(new D(i,o)))
            }
            )),
            t.signal && (t.signal.onabort = function() {
                i.abort();
                var e = new Error("request aborted");
                e.name = "AbortError",
                o.getReader().error(e),
                r(e)
            }
            ),
            i.addEventListener("error", (function() {
                var e = new Error("network error");
                o.getReader().error(e),
                r(e)
            }
            )),
            i.send(t.body || null)
        }
        ))
    }
    var D = function(e, t) {
        u()(this, "body", void 0),
        u()(this, "status", void 0),
        u()(this, "headers", void 0),
        this.body = t,
        this.status = e.status,
        this.headers = new $(e)
    }
      , $ = function() {
        function e(e) {
            u()(this, "xhr", void 0),
            this.xhr = e
        }
        return e.prototype.get = function(e) {
            return this.xhr.getResponseHeader(e)
        }
        ,
        e
    }();
    function O(e) {
        try {
            var t = new XMLHttpRequest;
            return t.open("GET", "https://twitch.tv"),
            t.responseType = e,
            t.responseType === e ? e : ""
        } catch (e) {
            return ""
        }
    }
    var S, M, I, N, L = function() {
        function e(e, t) {
            u()(this, "cancelled", void 0),
            u()(this, "module", void 0),
            u()(this, "pendingAbort", void 0),
            u()(this, "response", void 0),
            u()(this, "reader", void 0),
            u()(this, "abortController", void 0),
            this.cancelled = !1,
            this.module = e,
            this.pendingAbort = !1,
            this.response = null,
            this.reader = null,
            this.abortController = t,
            this.readBody = this.readBody.bind(this)
        }
        var t = e.prototype;
        return t.setResponse = function(e) {
            this.response = e,
            this.pendingAbort && (this.pendingAbort = !1,
            this.getReader().cancel())
        }
        ,
        t.abort = function() {
            this.response ? this.getReader().cancel() : this.abortController ? this.abortController.abort() : this.pendingAbort = !0
        }
        ,
        t.cancel = function() {
            this.cancelled = !0,
            this.abort()
        }
        ,
        t.getHeader = function(e) {
            try {
                return this.response.headers.get(e) || ""
            } catch (e) {
                return ""
            }
        }
        ,
        t.getStatus = function() {
            try {
                return this.response.status
            } catch (e) {
                return 0
            }
        }
        ,
        t.readBody = function(e, t) {
            var n = this
              , r = performance.now()
              , i = t > 0 ? self.setTimeout((function a() {
                var o = performance.now() - r;
                o < t && t > 0 ? i = self.setTimeout(a, t - o) : (n.abort(),
                e.error(!0))
            }
            ), t) : -1;
            this.getReader().read().then((function t(i) {
                var a = i.done
                  , o = i.value;
                if (!n.cancelled) {
                    if (!a) {
                        var u = o.byteLength;
                        return u && e.read(k(n.module, o), u),
                        r = performance.now(),
                        n.getReader().read().then(t)
                    }
                    e.end()
                }
            }
            )).catch((function(t) {
                console.error("HTTP Read Error:", t),
                e.error(!1)
            }
            )).then((function() {
                -1 !== i && clearTimeout(i),
                e.delete()
            }
            ))
        }
        ,
        t.getReader = function() {
            if (!this.reader)
                try {
                    this.reader = this.response.body.getReader()
                } catch (e) {
                    this.reader = new F
                }
            return this.reader
        }
        ,
        e
    }(), F = function() {
        function e() {
            u()(this, "closed", void 0),
            this.closed = T.resolve()
        }
        var t = e.prototype;
        return t.read = function() {
            return T.resolve({
                done: !0
            })
        }
        ,
        t.cancel = function() {
            return T.resolve()
        }
        ,
        t.releaseLock = function() {}
        ,
        e
    }(), k = (S = 0,
    M = 0,
    function(e, t) {
        var n = e.HEAPU8
          , r = e._free
          , i = e._malloc
          , a = t.byteLength;
        return a > M && (S && r(S),
        S = i(a),
        M = a),
        n.set(t, S),
        S
    }
    );
    !function(e) {
        e.ID3 = "MetaID3",
        e.CAPTION = "MetaCaption"
    }(I || (I = {})),
    function(e) {
        e[e.STATE_CHANGED = 0] = "STATE_CHANGED",
        e[e.STATS = 1] = "STATS",
        e[e.CONFIGURE = 2] = "CONFIGURE",
        e[e.RESET = 3] = "RESET",
        e[e.ADD_CUE = 4] = "ADD_CUE",
        e[e.GET_DECODE_INFO = 5] = "GET_DECODE_INFO",
        e[e.MEDIA_SINK_RPC = 6] = "MEDIA_SINK_RPC",
        e[e.GET_EXPERIMENTS = 7] = "GET_EXPERIMENTS",
        e[e.SESSION_ID_CHANGED = 8] = "SESSION_ID_CHANGED",
        e[e.CREATE_DATA_CHANNEL = 9] = "CREATE_DATA_CHANNEL",
        e[e.CLOSE_DATA_CHANNEL = 10] = "CLOSE_DATA_CHANNEL",
        e[e.SET_REMOTE_DESCRIPTION = 11] = "SET_REMOTE_DESCRIPTION",
        e[e.LOG_MESSAGE = 12] = "LOG_MESSAGE",
        e[e.LIVE_LOW_LATENCY = 13] = "LIVE_LOW_LATENCY"
    }(N || (N = {}));
    var U = function() {
        function e(e, t, n) {
            u()(this, "id", void 0),
            u()(this, "port", void 0),
            u()(this, "player", void 0),
            this.id = t,
            this.port = e,
            this.player = n(this),
            this.postMessage(a.INITIALIZED)
        }
        var t = e.prototype;
        return t.getPointer = function() {
            return this.player.$$.ptr
        }
        ,
        t.onClientMessage = function(e, t) {
            this.player[e].apply(this.player, t)
        }
        ,
        t.sendStats = function() {
            this.postMessage(N.STATS, this.player.getStats())
        }
        ,
        t.getDecodingInfo = function(e) {
            this.postMessage(N.GET_DECODE_INFO, e)
        }
        ,
        t.onExperiments = function(e) {
            this.postMessage(N.GET_EXPERIMENTS, e)
        }
        ,
        t.onSessionData = function(e) {
            this.postMessage(a.SESSION_DATA, {
                sessionData: e
            })
        }
        ,
        t.onStateChanged = function(e) {
            this.postMessage(N.STATE_CHANGED, e)
        }
        ,
        t.onRebuffering = function() {
            this.postMessage(a.REBUFFERING)
        }
        ,
        t.onQualityChanged = function(e) {
            this.postMessage(a.QUALITY_CHANGED, e)
        }
        ,
        t.onSeekCompleted = function(e) {
            this.postMessage(a.SEEK_COMPLETED, e)
        }
        ,
        t.onDurationChanged = function(e) {
            this.postMessage(a.DURATION_CHANGED, e),
            this.sendMediaSinkRPC("onSourceDurationChanged", e)
        }
        ,
        t.onJSONMetadata = function(e) {
            var t, n, r = x(e);
            "ID3"in r ? (t = I.ID3,
            n = r.ID3) : "caption"in r && (t = I.CAPTION,
            n = r.caption),
            t && this.postMessage(t, n)
        }
        ,
        t.onMetadata = function(e, t) {
            if (t.buffer) {
                var n = new Uint8Array(t).buffer;
                this.postMessage(a.METADATA, {
                    type: e,
                    data: n
                }, [n])
            } else
                this.postMessage(a.METADATA, {
                    type: e,
                    data: t
                })
        }
        ,
        t.onCue = function(e) {
            "TextCue" == e.type ? this.postMessage(a.TEXT_CUE, e) : "TextMetadataCue" == e.type && this.postMessage(a.TEXT_METADATA_CUE, e)
        }
        ,
        t.onError = function(e, t, n, r, i) {
            this.postMessage(a.ERROR, {
                type: e,
                code: t,
                source: n,
                message: r,
                displayCode: i
            })
        }
        ,
        t.onRecoverableError = function(e, t, n, r, i) {
            this.postMessage(a.RECOVERABLE_ERROR, {
                type: e,
                code: t,
                source: n,
                message: r,
                displayCode: i
            })
        }
        ,
        t.onAnalyticsEvent = function(e, t) {
            var n = x(t);
            this.postMessage(a.ANALYTICS_EVENT, {
                name: e,
                properties: n
            })
        }
        ,
        t.configure = function(e, t, n, r, i) {
            this.postMessage(N.CONFIGURE, {
                trackID: e,
                codec: t,
                path: n,
                mode: r,
                isProtected: i
            })
        }
        ,
        t.enqueue = function(e, t) {
            var n = new Uint8Array(t).buffer;
            this.sendMediaSinkRPC("enqueue", {
                trackID: e,
                buffer: n
            }, [n])
        }
        ,
        t.endOfStream = function() {
            this.sendMediaSinkRPC("endOfStream")
        }
        ,
        t.setTimestampOffset = function(e, t) {
            this.sendMediaSinkRPC("setTimestampOffset", {
                trackID: e,
                offset: t
            })
        }
        ,
        t.play = function() {
            this.sendMediaSinkRPC("play")
        }
        ,
        t.pause = function() {
            this.sendMediaSinkRPC("pause")
        }
        ,
        t.reset = function() {
            this.postMessage(N.RESET)
        }
        ,
        t.remove = function(e, t) {
            this.sendMediaSinkRPC("remove", {
                start: e,
                end: t
            })
        }
        ,
        t.seekTo = function(e) {
            this.sendMediaSinkRPC("seekTo", e)
        }
        ,
        t.setPlaybackRate = function(e) {
            this.sendMediaSinkRPC("setPlaybackRate", e),
            this.postMessage(a.PLAYBACK_RATE_CHANGED, e)
        }
        ,
        t.setVolume = function(e) {
            this.sendMediaSinkRPC("setVolume", e)
        }
        ,
        t.addCue = function(e, t, n) {
            this.postMessage(N.ADD_CUE, {
                id: e,
                start: t,
                end: n
            })
        }
        ,
        t.createDataChannel = function(e) {
            void 0 === e && (e = "media"),
            this.postMessage(N.CREATE_DATA_CHANNEL, {
                label: e
            })
        }
        ,
        t.closeDataChannel = function(e) {
            void 0 === e && (e = "media"),
            this.postMessage(N.CLOSE_DATA_CHANNEL, {
                label: e
            })
        }
        ,
        t.setRemoteDescription = function(e) {
            var t = x(e);
            this.postMessage(N.SET_REMOTE_DESCRIPTION, {
                answer: t
            })
        }
        ,
        t.onSessionId = function(e) {
            this.postMessage(N.SESSION_ID_CHANGED, e)
        }
        ,
        t.onLiveLowLatency = function(e) {
            this.postMessage(N.LIVE_LOW_LATENCY, e)
        }
        ,
        t.postMessage = function(e, t, n) {
            j(this.port, this.id, e, t, n)
        }
        ,
        t.sendMediaSinkRPC = function(e, t, n) {
            j(this.port, this.id, N.MEDIA_SINK_RPC, {
                name: e,
                arg: t
            }, n)
        }
        ,
        e
    }();
    function j(e, t, n, r, i) {
        e.postMessage({
            id: t,
            type: n,
            arg: r
        }, i)
    }
    function x(e) {
        try {
            return JSON.parse(e)
        } catch (t) {
            return console.error("Failed JSON parse:", e),
            {}
        }
    }
    var W, H = n(3).default;
    (W = "undefined" == typeof messageHandler ? self : messageHandler).onmessage = function(e) {
        var t = new G(W);
        W.onmessage = function(e) {
            return t.dispatch(e)
        }
        ,
        function(e, t) {
            var n = H({
                locateFile: function() {
                    return t.wasmBinaryUrl
                },
                sendFetchRequest: function(e, t, r, i) {
                    return function(e, t, n, r, i) {
                        var a = null;
                        "undefined" != typeof AbortController && (a = new AbortController,
                        r.signal = a.signal);
                        var o = new L(e,a)
                          , u = -1;
                        function s() {
                            -1 !== u && clearTimeout(u),
                            t.delete()
                        }
                        return i > 0 && (u = self.setTimeout((function() {
                            return o.abort()
                        }
                        ), i)),
                        A(n, r).then((function(e) {
                            o.setResponse(e),
                            o.cancelled || t.response(o)
                        }
                        )).catch((function(e) {
                            o.cancelled || (console.error("HTTP Response Error:", e),
                            t.error("AbortError" === e.name))
                        }
                        )).then(s, s),
                        function() {
                            return o.cancel()
                        }
                    }(n, e, t, r, i)
                },
                onRuntimeInitialized: function() {
                    n ? e.ready(n) : setTimeout((function() {
                        return e.ready(n)
                    }
                    ), 0)
                },
                onAbort: function(r) {
                    var i = n._emscripten_get_callstack_js(24);
                    t.showWorkerLogs ? e.logMessage("error", r + "\n" + i) : n.collectLogs && (n.logList.push(r),
                    n.logList.push(i))
                },
                logMessage: function(r, i) {
                    if (t.showWorkerLogs) {
                        var a = "log";
                        return 4 & r ? a = "error" : 2 & r && (a = "warn"),
                        void e.logMessage(a, i)
                    }
                    n._emscripten_log_js(r, i),
                    n.collectLogs && n.logList.push(i)
                },
                getLogListAndClear: function() {
                    var e = n.logList;
                    return n.logList = [],
                    e
                },
                print: function(e) {
                    n.collectLogs && n.logList.push(e),
                    console.log(e)
                },
                printErr: function(e) {
                    n.collectLogs && n.logList.push(e),
                    console.warn(e)
                }
            })
        }(t, e.data)
    }
    ;
    var G = function() {
        function e(e) {
            u()(this, "activePlayers", void 0),
            u()(this, "port", void 0),
            u()(this, "eventQueue", void 0),
            u()(this, "module", void 0),
            this.activePlayers = Object.create(null),
            this.port = e,
            this.eventQueue = [],
            this.module = null
        }
        var t = e.prototype;
        return t.dispatch = function(e) {
            var t = this;
            if (null !== this.module) {
                var n = e.data
                  , i = n.id
                  , o = n.funcName
                  , u = n.args;
                try {
                    if ("create" === o) {
                        var s = u[0];
                        return void (this.activePlayers[i] = new U(this.port,i,(function(e) {
                            return new t.module.WebMediaPlayer(e,s)
                        }
                        )))
                    }
                    if ("runTests" === o)
                        return this.module.collectLogs = !0,
                        this.module.logList = [],
                        void this.module.ccall("runTests", "void", ["number"], [this.activePlayers[i].getPointer()]);
                    if (!this.activePlayers[i])
                        return;
                    if ("onWebRTCDataChannelMessage" === o) {
                        var l = u[1];
                        if (l.byteLength > 0) {
                            var c = l.byteLength
                              , f = this.module._malloc(c);
                            this.module.HEAPU8.set(new Uint8Array(l), f),
                            this.activePlayers[i].onClientMessage(o, [u[0], f, c])
                        }
                    } else
                        this.activePlayers[i].onClientMessage(o, u),
                        "delete" === o && (this.activePlayers[i] = null)
                } catch (e) {
                    console.warn(e),
                    this.activePlayers[i] && j(this.port, i, a.WORKER_ERROR, {
                        code: r.GENERIC,
                        source: "worker",
                        message: e.message
                    })
                }
            } else
                this.eventQueue.push(e)
        }
        ,
        t.ready = function(e) {
            this.module = e,
            this.eventQueue.forEach(this.dispatch, this),
            this.eventQueue = null
        }
        ,
        t.logMessage = function(e, t) {
            j(this.port, 0, N.LOG_MESSAGE, {
                level: e,
                message: t
            })
        }
        ,
        e
    }()
}
]);
