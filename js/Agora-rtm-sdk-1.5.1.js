/*
 @preserve
 AgoraRTM Web SDK 1.5.1 - commit: v1.5.1-0-g5bbbcd72
 Copyright (C) 2018-2022 Agora Lab.
 This file is licensed under the AGORA, INC. SDK LICENSE AGREEMENT
 A copy of this license may be found at https://www.agora.io/en/sdk-license-agreement/
*/
"use strict";
!(function (e, t) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define(t)
		: ((e =
				"undefined" != typeof globalThis
					? globalThis
					: e || self).AgoraRTM = t());
})(this, function () {
	function Be(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t &&
				(r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})),
				n.push.apply(n, r);
		}
		return n;
	}
	function Wa(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2
				? Be(Object(n), !0).forEach(function (t) {
						x(e, t, n[t]);
		        })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(
						e,
						Object.getOwnPropertyDescriptors(n)
			    )
				: Be(Object(n)).forEach(function (t) {
						Object.defineProperty(
							e,
							t,
							Object.getOwnPropertyDescriptor(n, t)
						);
			    });
		}
		return e;
	}
	function qa(e) {
		return (qa =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (e) {
						return typeof e;
				}
				: function (e) {
						return e &&
							"function" == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? "symbol"
							: typeof e;
				})(e);
	}
	function wm(e, t, n, r, o, i, s) {
		try {
			var a = e[i](s),
				c = a.value;
		} catch (e) {
			return void n(e);
		}
		a.done ? t(c) : Promise.resolve(c).then(r, o);
	}
	function ma(e) {
		return function () {
			var t = this,
				n = arguments;
			return new Promise(function (r, o) {
				function i(e) {
					wm(a, r, o, i, s, "next", e);
				}
				function s(e) {
					wm(a, r, o, i, s, "throw", e);
				}
				var a = e.apply(t, n);
				i(void 0);
			});
		};
	}
	function va(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function");
	}
	function xm(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			(r.enumerable = r.enumerable || !1),
				(r.configurable = !0),
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r);
		}
	}
	function eb(e, t, n) {
		return t && xm(e.prototype, t), n && xm(e, n), e;
	}
	function x(e, t, n) {
		return (
			t in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				})
				: (e[t] = n),
			e
		);
	}
	function Ga(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError(
				"Super expression must either be null or a function"
			);
		(e.prototype = Object.create(t && t.prototype, {
			constructor: { value: e, writable: !0, configurable: !0 },
		})),
			t && Jf(e, t);
	}
	function Td(e) {
		return (Td = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function (e) {
				return e.__proto__ || Object.getPrototypeOf(e);
			})(e);
	}
	function Jf(e, t) {
		return (Jf =
			Object.setPrototypeOf ||
			function (e, t) {
				return (e.__proto__ = t), e;
			})(e, t);
	}
	function ym() {
		if (
			"undefined" == typeof Reflect ||
			!Reflect.construct ||
			Reflect.construct.sham
		)
			return !1;
		if ("function" == typeof Proxy) return !0;
		try {
			return (
				Boolean.prototype.valueOf.call(
					Reflect.construct(Boolean, [], function () {})
				),
				!0
			);
		} catch (e) {
			return !1;
		}
	}
	function Ji(e, t, n) {
		return (Ji = ym()
			? Reflect.construct
			: function (e, t, n) {
					var r = [null];
					return (
						r.push.apply(r, t),
						(e = new (Function.bind.apply(e, r))()),
						n && Jf(e, n.prototype),
						e
					);
			}).apply(null, arguments);
	}
	function Kf(e) {
		var t = "function" == typeof Map ? new Map() : void 0;
		return (Kf = function (e) {
			function n() {
				return Ji(e, arguments, Td(this).constructor);
			}
			if (
				null === e ||
				-1 === Function.toString.call(e).indexOf("[native code]")
			)
				return e;
			if ("function" != typeof e)
				throw new TypeError(
					"Super expression must either be null or a function"
				);
			if (void 0 !== t) {
				if (t.has(e)) return t.get(e);
				t.set(e, n);
			}
			return (
				(n.prototype = Object.create(e.prototype, {
					constructor: {
						value: n,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					},
				})),
				Jf(n, e)
			);
		})(e);
	}
	function Ki(e, t) {
		if (null == e) return {};
		if (null == e) var n = {};
		else {
			n = {};
			var r,
				o = Object.keys(e);
			for (r = 0; r < o.length; r++) {
				var i = o[r];
				0 <= t.indexOf(i) || (n[i] = e[i]);
			}
		}
		if (Object.getOwnPropertySymbols)
			for (r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++)
				(o = r[i]),
					0 <= t.indexOf(o) ||
						(Object.prototype.propertyIsEnumerable.call(e, o) &&
							(n[o] = e[o]));
		return n;
	}
	function z(e) {
		if (void 0 === e)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return e;
	}
	function Ha(e) {
		var t = ym();
		return function () {
			var n = Td(e);
			if (t) {
				var r = Td(this).constructor;
				n = Reflect.construct(n, arguments, r);
			} else n = n.apply(this, arguments);
			return (n =
				!n || ("object" != typeof n && "function" != typeof n)
					? z(this)
					: n);
		};
	}
	function Li(e, t, n) {
		return (Li =
			"undefined" != typeof Reflect && Reflect.get
				? Reflect.get
				: function (e, t, n) {
						for (
							;
							!Object.prototype.hasOwnProperty.call(e, t) &&
							null !== (e = Td(e));

						);
						if (e)
							return (t = Object.getOwnPropertyDescriptor(e, t))
								.get
								? t.get.call(n)
								: t.value;
				})(e, t, n || e);
	}
	function $a(e, t) {
		var n = Array.isArray(e) ? e : void 0;
		if (!n)
			if (
				null ==
				(n =
					e &&
					(("undefined" != typeof Symbol && e[Symbol.iterator]) ||
						e["@@iterator"]))
			)
				n = void 0;
			else {
				var r,
					o = [],
					i = !0,
					s = !1;
				try {
					for (
						n = n.call(e);
						!(i = (r = n.next()).done) &&
						(o.push(r.value), !t || o.length !== t);
						i = !0
					);
				} catch (e) {
					s = !0;
					var a = e;
				} finally {
					try {
						i || null == n.return || n.return();
					} finally {
						if (s) throw a;
					}
				}
				n = o;
			}
		if (!(e = n || zm(e, t)))
			throw new TypeError(
				"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
			);
		return e;
	}
	function Z(e) {
		var t = Array.isArray(e) ? Mi(e) : void 0;
		if (
			(t ||
				(t =
					("undefined" != typeof Symbol &&
						null != e[Symbol.iterator]) ||
					null != e["@@iterator"]
						? Array.from(e)
						: void 0),
			!(e = t || zm(e)))
		)
			throw new TypeError(
				"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
			);
		return e;
	}
	function zm(e, t) {
		if (e) {
			if ("string" == typeof e) return Mi(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (
				("Object" === n && e.constructor && (n = e.constructor.name),
				"Map" === n || "Set" === n)
			)
				return Array.from(e);
			if (
				"Arguments" === n ||
				/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
			)
				return Mi(e, t);
		}
	}
	function Mi(e, t) {
		(null == t || t > e.length) && (t = e.length);
		for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
		return r;
	}
	function Da(e, t, n, r, o) {
		var i = {};
		return (
			Object.keys(r).forEach(function (e) {
				i[e] = r[e];
			}),
			(i.enumerable = !!i.enumerable),
			(i.configurable = !!i.configurable),
			("value" in i || i.initializer) && (i.writable = !0),
			(i = n
				.slice()
				.reverse()
				.reduce(function (n, r) {
					return r(e, t, n) || n;
				}, i)),
			o &&
				void 0 !== i.initializer &&
				((i.value = i.initializer ? i.initializer.call(o) : void 0),
				(i.initializer = void 0)),
			void 0 === i.initializer &&
				(Object.defineProperty(e, t, i), (i = null)),
			i
		);
	}
	function xb(e) {
		var t = { exports: {} };
		return e(t, t.exports), t.exports;
	}
	function Ce(e) {
		e || (e = {});
		var t = e.ua;
		if (
			(t || "undefined" == typeof navigator || (t = navigator.userAgent),
			t &&
				t.headers &&
				"string" == typeof t.headers["user-agent"] &&
				(t = t.headers["user-agent"]),
			"string" != typeof t)
		)
			return !1;
		var n = (Zt.test(t) && !$t.test(t)) || (!!e.tablet && au.test(t));
		return (
			!n &&
				e.tablet &&
				e.featureDetect &&
				navigator &&
				1 < navigator.maxTouchPoints &&
				-1 !== t.indexOf("Macintosh") &&
				-1 !== t.indexOf("Safari") &&
				(n = !0),
			n
		);
	}
	function Am(e, t) {
		var n,
			r = 3 > arguments.length ? e : arguments[2];
		return Ia(e) === r
			? e[t]
			: (n = dc.f(e, t))
			? ka(n, "value")
				? n.value
				: void 0 === n.get
				? void 0
				: n.get.call(r)
			: xa((n = uc(e)))
			? Am(n, t, r)
			: void 0;
	}
	function bu(e) {
		var t = e.charCodeAt(0) << 24,
			n = 0 | cu(~t),
			r = 0,
			o = 0 | e.length,
			i = "";
		if (5 > n && o >= n) {
			for (t = (t << n) >>> (24 + n), r = 1; r < n; r = (r + 1) | 0)
				t = (t << 6) | (63 & e.charCodeAt(r));
			65535 >= t
				? (i += Ud(t))
				: 1114111 >= t
				? (i += Ud(
						(55296 + ((t = (t - 65536) | 0) >> 10)) | 0,
						(56320 + (1023 & t)) | 0
				))
				: (r = 0);
		}
		for (; r < o; r = (r + 1) | 0) i += "�";
		return i;
	}
	function Bm() {}
	function du(e) {
		var t = 0 | e.charCodeAt(0);
		if (55296 <= t && 56319 >= t) {
			var n = 0 | e.charCodeAt(1);
			if (!(n == n && 56320 <= n && 57343 >= n)) return Ud(239, 191, 189);
			if (65535 < (t = (((t - 55296) << 10) + n - 56320 + 65536) | 0))
				return Ud(
					240 | (t >>> 18),
					128 | ((t >>> 12) & 63),
					128 | ((t >>> 6) & 63),
					128 | (63 & t)
				);
		}
		return 127 >= t
			? e
			: 2047 >= t
			? Ud(192 | (t >>> 6), 128 | (63 & t))
			: Ud(224 | (t >>> 12), 128 | ((t >>> 6) & 63), 128 | (63 & t));
	}
	function Cm() {}
	function Ba() {
		Ba.init.call(this);
	}
	function Wg(e) {
		if ("function" != typeof e)
			throw new TypeError(
				'The "listener" argument must be of type Function. Received type ' +
					qa(e)
			);
	}
	function Dm(e, t, n, r) {
		Wg(n);
		var o = e._events;
		if (void 0 === o)
			(o = e._events = Object.create(null)), (e._eventsCount = 0);
		else {
			void 0 !== o.newListener &&
				(e.emit("newListener", t, n.listener ? n.listener : n),
				(o = e._events));
			var i = o[t];
		}
		return (
			void 0 === i
				? ((o[t] = n), ++e._eventsCount)
				: ("function" == typeof i
						? (i = o[t] = r ? [n, i] : [i, n])
						: r
						? i.unshift(n)
						: i.push(n),
				0 <
						(n =
							void 0 === e._maxListeners
								? Ba.defaultMaxListeners
								: e._maxListeners) &&
						i.length > n &&
						!i.warned &&
						((i.warned = !0),
						((n = Error(
							"Possible EventEmitter memory leak detected. " +
								i.length +
								" " +
								String(t) +
								" listeners added. Use emitter.setMaxListeners() to increase limit"
						)).name = "MaxListenersExceededWarning"),
						(n.emitter = e),
						(n.type = t),
						(n.count = i.length),
						console && console.warn && console.warn(n))),
			e
		);
	}
	function eu() {
		if (!this.fired)
			return (
				this.target.removeListener(this.type, this.wrapFn),
				(this.fired = !0),
				0 === arguments.length
					? this.listener.call(this.target)
					: this.listener.apply(this.target, arguments)
			);
	}
	function Em(e, t, n) {
		return (
			(e = {
				fired: !1,
				wrapFn: void 0,
				target: e,
				type: t,
				listener: n,
			}),
			((t = eu.bind(e)).listener = n),
			(e.wrapFn = t)
		);
	}
	function Fm(e, t, n) {
		if (void 0 === (e = e._events)) return [];
		if (void 0 === (t = e[t])) return [];
		if ("function" == typeof t) return n ? [t.listener || t] : [t];
		if (n)
			for (n = Array(t.length), e = 0; e < n.length; ++e)
				n[e] = t[e].listener || t[e];
		else n = Gm(t, t.length);
		return n;
	}
	function Hm(e) {
		var t = this._events;
		if (void 0 !== t) {
			if ("function" == typeof (e = t[e])) return 1;
			if (void 0 !== e) return e.length;
		}
		return 0;
	}
	function Gm(e, t) {
		for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
		return n;
	}
	function fu(e, t, n) {
		"function" == typeof e.on && Im(e, "error", t, n);
	}
	function Im(e, t, n, r) {
		if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
		else {
			if ("function" != typeof e.addEventListener)
				throw new TypeError(
					'The "emitter" argument must be of type EventEmitter. Received type ' +
						qa(e)
				);
			e.addEventListener(t, function o(i) {
				r.once && e.removeEventListener(t, o), n(i);
			});
		}
	}
	function gu(e) {
		return e
			? Z(e)
			: hu(
				function () {
					return [];
				},
				function (e, t) {
						return e.push(t), e;
					}
			);
	}
	function Jm(e, t) {
		var n, r, o, i;
		return N.wrap(function (s) {
			for (;;)
				switch ((s.prev = s.next)) {
					case 0:
						(n = Km(e)([
							Lm,
							Lm,
							function (e, t) {
								return t;
							},
						])[2]),
							(r = 0);
					case 2:
						if (!(r < t.length)) {
							s.next = 17;
							break;
						}
						if (((o = t[r]), !((i = n(Ni, o)) instanceof Xg))) {
							s.next = 11;
							break;
						}
						if ((i = Oi(i.deref())) === Ni) {
							s.next = 10;
							break;
						}
						return (s.next = 10), i;
					case 10:
						return s.abrupt("return");
					case 11:
						if (i === Ni) {
							s.next = 14;
							break;
						}
						return (s.next = 14), i;
					case 14:
						r++, (s.next = 2);
						break;
					case 17:
					case "end":
						return s.stop();
				}
		}, iu);
	}
	function Yg(e, t) {
		return null != t && "function" == typeof t[Symbol.iterator]
			? Jm(Yg(e), t)
			: function (t) {
					var n = t[2];
					return ju(t, function (t, r) {
						return n(t, e(r));
					});
			  };
	}
	function $c(e) {
		return Object.prototype.toString.call(e).slice(8, -1);
	}
	function De(e) {
		return (
			"Object" === $c(e) &&
			e.constructor === Object &&
			Object.getPrototypeOf(e) === Object.prototype
		);
	}
	function Mm(e) {
		var t;
		return (
			(t =
				"Boolean" === $c(e) ||
				"Null" === $c(e) ||
				"Undefined" === $c(e)) || (t = "Number" === $c(e) && !isNaN(e)),
			t || "String" === $c(e) || "Symbol" === $c(e)
		);
	}
	function Vd(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Ee(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Fe(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.clear(); ++t < n; ) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	function Lf(e) {
		var t = -1,
			n = null == e ? 0 : e.length;
		for (this.__data__ = new Zg(); ++t < n; ) this.add(e[t]);
	}
	function Ge(e) {
		this.size = (this.__data__ = new $g(e)).size;
	}
	function He(e, t, n, r, o, i) {
		var s,
			a = 1 & t,
			c = 2 & t,
			u = 4 & t;
		if ((n && (s = o ? n(e, r, o, i) : n(e)), void 0 !== s)) return s;
		if (!Gb(e)) return e;
		if ((r = ub(e))) {
			if (((s = ku(e)), !a)) return Pi(e, s);
		} else {
			var l = Mf(e),
				f =
					"[object Function]" == l ||
					"[object GeneratorFunction]" == l;
			if (Nf(e)) return Nm(e, a);
			if (
				"[object Object]" == l ||
				"[object Arguments]" == l ||
				(f && !o)
			) {
				if (((s = c || f ? {} : Om(e)), !a))
					return c ? lu(e, mu(s, e)) : nu(e, ou(s, e));
			} else {
				if (!Oa[l]) return o ? e : {};
				s = pu(e, l, a);
			}
		}
		if ((i || (i = new Ie()), (o = i.get(e)))) return o;
		i.set(e, s),
			qu(e)
				? e.forEach(function (r) {
						s.add(He(r, t, n, r, e, i));
				  })
				: ru(e) &&
				  e.forEach(function (r, o) {
						s.set(o, He(r, t, n, o, e, i));
				  }),
			(c = u ? (c ? Pm : Qi) : c ? Of : Wd);
		var h = r ? void 0 : c(e);
		return (
			su(h || e, function (r, o) {
				h && (r = e[(o = r)]), Qm(s, o, He(r, t, n, o, e, i));
			}),
			s
		);
	}
	function Ri(e, t) {
		if ("function" != typeof e || (null != t && "function" != typeof t))
			throw new TypeError("Expected a function");
		var n = function n() {
			var r = arguments,
				o = t ? t.apply(this, r) : r[0],
				i = n.cache;
			return i.has(o)
				? i.get(o)
				: ((r = e.apply(this, r)), (n.cache = i.set(o, r) || i), r);
		};
		return (n.cache = new (Ri.Cache || Zg)()), n;
	}
	function Rm(e) {
		if ("string" == typeof e) return e;
		if (ub(e)) return Je(e, Rm) + "";
		if (Ke(e)) return Sm ? Sm.call(e) : "";
		var t = e + "";
		return "0" == t && 1 / e == -tu ? "-0" : t;
	}
	function Si(e, t, n, r, o) {
		var i = -1,
			s = e.length;
		for (n || (n = uu), o || (o = []); ++i < s; ) {
			var a = e[i];
			0 < t && n(a)
				? 1 < t
					? Si(a, t - 1, n, r, o)
					: Ti(o, a)
				: r || (o[o.length] = a);
		}
		return o;
	}
	function Le(e, t, n, r, o) {
		if (e === t) t = !0;
		else if (null == e || null == t || (!Hc(e) && !Hc(t)))
			t = e != e && t != t;
		else
			e: {
				var i = ub(e),
					s = ub(t),
					a = i ? "[object Array]" : Mf(e),
					c = s ? "[object Array]" : Mf(t),
					u =
						"[object Object]" ==
						(a = "[object Arguments]" == a ? "[object Object]" : a);
				if (
					((s =
						"[object Object]" ==
						(c =
							"[object Arguments]" == c ? "[object Object]" : c)),
					(c = a == c) && Nf(e))
				) {
					if (!Nf(t)) {
						t = !1;
						break e;
					}
					(i = !0), (u = !1);
				}
				if (c && !u)
					o || (o = new Ie()),
						(t =
							i || Ui(e)
								? Tm(e, t, n, r, Le, o)
								: vu(e, t, a, n, r, Le, o));
				else {
					if (
						!(1 & n) &&
						((i = u && Um.call(e, "__wrapped__")),
						(a = s && Um.call(t, "__wrapped__")),
						i || a)
					) {
						(e = i ? e.value() : e),
							(t = a ? t.value() : t),
							o || (o = new Ie()),
							(t = Le(e, t, n, r, o));
						break e;
					}
					if (c)
						t: if (
							(o || (o = new Ie()),
							(i = 1 & n),
							(a = Qi(e)),
							(s = a.length),
							(c = Qi(t).length),
							s == c || i)
						) {
							for (c = s; c--; ) {
								var l = a[c];
								if (!(i ? l in t : wu.call(t, l))) {
									t = !1;
									break t;
								}
							}
							if (((u = o.get(e)), (l = o.get(t)), u && l))
								t = u == t && l == e;
							else {
								(u = !0), o.set(e, t), o.set(t, e);
								for (var f = i; ++c < s; ) {
									var h = e[(l = a[c])],
										p = t[l];
									if (r)
										var d = i
											? r(p, h, l, t, e, o)
											: r(h, p, l, e, t, o);
									if (
										void 0 === d
											? h !== p && !Le(h, p, n, r, o)
											: !d
									) {
										u = !1;
										break;
									}
									f || (f = "constructor" == l);
								}
								u &&
									!f &&
									(n = e.constructor) !=
										(r = t.constructor) &&
									"constructor" in e &&
									"constructor" in t &&
									!(
										"function" == typeof n &&
										n instanceof n &&
										"function" == typeof r &&
										r instanceof r
									) &&
									(u = !1),
									o.delete(e),
									o.delete(t),
									(t = u);
							}
						} else t = !1;
					else t = !1;
				}
			}
		return t;
	}
	function Pa(e, t, n) {
		(this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!n);
	}
	function Hb(e) {
		return !0 === (e && e.__isLong__);
	}
	function Xd(e, t) {
		var n;
		if (t) {
			if ((t = 0 <= (e >>>= 0) && 256 > e) && (n = Vm[e])) return n;
			(n = Qa(e, 0 > (0 | e) ? -1 : 0, !0)), t && (Vm[e] = n);
		} else {
			if ((t = -128 <= (e |= 0) && 128 > e) && (n = Wm[e])) return n;
			(n = Qa(e, 0 > e ? -1 : 0, !1)), t && (Wm[e] = n);
		}
		return n;
	}
	function ec(e, t) {
		if (isNaN(e)) return t ? Yd : fc;
		if (t) {
			if (0 > e) return Yd;
			if (e >= Xm) return Ym;
		} else {
			if (e <= -Zm) return Ib;
			if (e + 1 >= Zm) return $m;
		}
		return 0 > e ? ec(-e, t).neg() : Qa(e % Me | 0, (e / Me) | 0, t);
	}
	function Qa(e, t, n) {
		return new Pa(e, t, n);
	}
	function Vi(e, t, n) {
		if (0 === e.length) throw Error("empty string");
		if (
			"NaN" === e ||
			"Infinity" === e ||
			"+Infinity" === e ||
			"-Infinity" === e
		)
			return fc;
		if (
			("number" == typeof t ? ((n = t), (t = !1)) : (t = !!t),
			2 > (n = n || 10) || 36 < n)
		)
			throw RangeError("radix");
		var r;
		if (0 < (r = e.indexOf("-"))) throw Error("interior hyphen");
		if (0 === r) return Vi(e.substring(1), t, n).neg();
		r = ec(ah(n, 8));
		for (var o = fc, i = 0; i < e.length; i += 8) {
			var s = Math.min(8, e.length - i),
				a = parseInt(e.substring(i, i + s), n);
			8 > s
				? ((s = ec(ah(n, s))), (o = o.mul(s).add(ec(a))))
				: (o = (o = o.mul(r)).add(ec(a)));
		}
		return (o.unsigned = t), o;
	}
	function vc(e, t) {
		return "number" == typeof e
			? ec(e, t)
			: "string" == typeof e
			? Vi(e, t)
			: Qa(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
	}
	function ha(e, t) {
		function n() {
			this.constructor = e;
		}
		Wi(e, t),
			(e.prototype =
				null === t
					? Object.create(t)
					: ((n.prototype = t.prototype), new n()));
	}
	function Ne(e) {
		return "function" == typeof e;
	}
	function Oe(e) {
		setTimeout(function () {
			throw e;
		}, 0);
	}
	function Xi(e) {
		return null !== e && "object" === qa(e);
	}
	function an(e) {
		return e.reduce(function (e, t) {
			return e.concat(t instanceof Pf ? t.errors : t);
		}, []);
	}
	function Yi(e) {
		for (; e; ) {
			var t = e.destination,
				n = e.isStopped;
			if (e.closed || n) return !1;
			e = t && t instanceof za ? t : null;
		}
		return !0;
	}
	function wd(e) {
		return e;
	}
	function Zi() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return bn(e);
	}
	function bn(e) {
		return 0 === e.length
			? wd
			: 1 === e.length
			? e[0]
			: function (t) {
					return e.reduce(function (e, t) {
						return t(e);
					}, t);
			  };
	}
	function cn(e) {
		if ((e || (e = gc.Promise || Promise), !e))
			throw Error("no Promise impl found");
		return e;
	}
	function dn() {
		return function (e) {
			return e.lift(new xu(e));
		};
	}
	function Qf(e) {
		return e ? yu(e) : Sb;
	}
	function yu(e) {
		return new ua(function (t) {
			return e.schedule(function () {
				return t.complete();
			});
		});
	}
	function ad(e) {
		return e && "function" == typeof e.schedule;
	}
	function $i(e, t) {
		return new ua(function (n) {
			var r = new nb(),
				o = 0;
			return (
				r.add(
					t.schedule(function () {
						o === e.length
							? n.complete()
							: (n.next(e[o++]),
							  n.closed || r.add(this.schedule()));
					})
				),
				r
			);
		});
	}
	function Rf(e, t) {
		return t ? $i(e, t) : new ua(en(e));
	}
	function ob() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return ad((t = e[e.length - 1])) ? (e.pop(), $i(e, t)) : Rf(e);
	}
	function ra(e, t) {
		return new ua(
			t
				? function (n) {
						return t.schedule(zu, 0, { error: e, subscriber: n });
				  }
				: function (t) {
						return t.error(e);
				  }
		);
	}
	function zu(e) {
		e.subscriber.error(e.error);
	}
	function Au(e, t) {
		return (
			void 0 === t && (t = 0),
			function (n) {
				return n.lift(new Bu(e, t));
			}
		);
	}
	function fn(e) {
		return e in aj && (delete aj[e], !0);
	}
	function Ic() {}
	function Ea(e, t) {
		return function (n) {
			if ("function" != typeof e)
				throw new TypeError(
					"argument is not a function. Are you looking for `mapTo()`?"
				);
			return n.lift(new Cu(e, t));
		};
	}
	function gn(e, t, n) {
		if (t) {
			if (!ad(t))
				return function () {
					for (var r = [], o = 0; o < arguments.length; o++)
						r[o] = arguments[o];
					return gn(e, n)
						.apply(void 0, r)
						.pipe(
							Ea(function (e) {
								return hc(e) ? t.apply(void 0, e) : t(e);
							})
						);
				};
			n = t;
		}
		return function () {
			for (var t = [], r = 0; r < arguments.length; r++)
				t[r] = arguments[r];
			var o,
				i = this,
				s = { context: i, subject: o, callbackFunc: e, scheduler: n };
			return new ua(function (r) {
				if (n)
					return n.schedule(Du, 0, {
						args: t,
						subscriber: r,
						params: s,
					});
				if (!o) {
					o = new Sf();
					try {
						e.apply(
							i,
							t.concat([
								function () {
									for (
										var e = [], t = 0;
										t < arguments.length;
										t++
									)
										e[t] = arguments[t];
									o.next(1 >= e.length ? e[0] : e),
										o.complete();
								},
							])
						);
					} catch (e) {
						Yi(o) ? o.error(e) : console.warn(e);
					}
				}
				return o.subscribe(r);
			});
		};
	}
	function Du(e) {
		var t = this,
			n = e.args,
			r = e.subscriber,
			o = e.params;
		e = o.callbackFunc;
		var i = o.context,
			s = o.scheduler,
			a = o.subject;
		if (!a) {
			(a = o.subject = new Sf()),
				(o = function () {
					for (var e = [], n = 0; n < arguments.length; n++)
						e[n] = arguments[n];
					t.add(
						s.schedule(Eu, 0, {
							value: 1 >= e.length ? e[0] : e,
							subject: a,
						})
					);
				});
			try {
				e.apply(i, n.concat([o]));
			} catch (e) {
				a.error(e);
			}
		}
		this.add(a.subscribe(r));
	}
	function Eu(e) {
		var t = e.subject;
		t.next(e.value), t.complete();
	}
	function hn(e, t, n) {
		if (t) {
			if (!ad(t))
				return function () {
					for (var r = [], o = 0; o < arguments.length; o++)
						r[o] = arguments[o];
					return hn(e, n)
						.apply(void 0, r)
						.pipe(
							Ea(function (e) {
								return hc(e) ? t.apply(void 0, e) : t(e);
							})
						);
				};
			n = t;
		}
		return function () {
			for (var t = [], r = 0; r < arguments.length; r++)
				t[r] = arguments[r];
			var o = {
				subject: void 0,
				args: t,
				callbackFunc: e,
				scheduler: n,
				context: this,
			};
			return new ua(function (r) {
				var i = o.context,
					s = o.subject;
				if (n)
					return n.schedule(Fu, 0, {
						params: o,
						subscriber: r,
						context: i,
					});
				if (!s) {
					s = o.subject = new Sf();
					try {
						e.apply(
							i,
							t.concat([
								function () {
									for (
										var e = [], t = 0;
										t < arguments.length;
										t++
									)
										e[t] = arguments[t];
									(t = e.shift())
										? s.error(t)
										: (s.next(1 >= e.length ? e[0] : e),
										  s.complete());
								},
							])
						);
					} catch (e) {
						Yi(s) ? s.error(e) : console.warn(e);
					}
				}
				return s.subscribe(r);
			});
		};
	}
	function Fu(e) {
		var t = this,
			n = e.params,
			r = e.subscriber;
		e = e.context;
		var o = n.callbackFunc,
			i = n.args,
			s = n.scheduler,
			a = n.subject;
		if (!a) {
			(a = n.subject = new Sf()),
				(n = function () {
					for (var e = [], n = 0; n < arguments.length; n++)
						e[n] = arguments[n];
					(n = e.shift())
						? t.add(s.schedule(jn, 0, { err: n, subject: a }))
						: t.add(
								s.schedule(Gu, 0, {
									value: 1 >= e.length ? e[0] : e,
									subject: a,
								})
						  );
				});
			try {
				o.apply(e, i.concat([n]));
			} catch (e) {
				this.add(s.schedule(jn, 0, { err: e, subject: a }));
			}
		}
		this.add(a.subscribe(r));
	}
	function Gu(e) {
		var t = e.subject;
		t.next(e.value), t.complete();
	}
	function jn(e) {
		e.subject.error(e.err);
	}
	function kn(e) {
		return (
			!!e &&
			"function" != typeof e.subscribe &&
			"function" == typeof e.then
		);
	}
	function bj(e, t, n, r, o) {
		if ((void 0 === o && (o = new Hu(e, n, r)), !o.closed))
			return t instanceof ua ? t.subscribe(o) : Tf(t)(o);
	}
	function Iu(e, t) {
		return new ua(function (n) {
			var r = new nb();
			return (
				r.add(
					t.schedule(function () {
						var o = e[Pe]();
						r.add(
							o.subscribe({
								next: function (e) {
									r.add(
										t.schedule(function () {
											return n.next(e);
										})
									);
								},
								error: function (e) {
									r.add(
										t.schedule(function () {
											return n.error(e);
										})
									);
								},
								complete: function () {
									r.add(
										t.schedule(function () {
											return n.complete();
										})
									);
								},
							})
						);
					})
				),
				r
			);
		});
	}
	function Ju(e, t) {
		return new ua(function (n) {
			var r = new nb();
			return (
				r.add(
					t.schedule(function () {
						return e.then(
							function (e) {
								r.add(
									t.schedule(function () {
										n.next(e),
											r.add(
												t.schedule(function () {
													return n.complete();
												})
											);
									})
								);
							},
							function (e) {
								r.add(
									t.schedule(function () {
										return n.error(e);
									})
								);
							}
						);
					})
				),
				r
			);
		});
	}
	function Ku(e, t) {
		if (!e) throw Error("Iterable cannot be null");
		return new ua(function (n) {
			var r,
				o = new nb();
			return (
				o.add(function () {
					r && "function" == typeof r.return && r.return();
				}),
				o.add(
					t.schedule(function () {
						(r = e[xd]()),
							o.add(
								t.schedule(function () {
									if (!n.closed) {
										try {
											var e = r.next(),
												t = e.value,
												o = e.done;
										} catch (e) {
											return void n.error(e);
										}
										o
											? n.complete()
											: (n.next(t), this.schedule());
									}
								})
							);
					})
				),
				o
			);
		});
	}
	function ln(e, t) {
		if (null != e) {
			if (e && "function" == typeof e[Pe]) return Iu(e, t);
			if (kn(e)) return Ju(e, t);
			if (mn(e)) return $i(e, t);
			if ((e && "function" == typeof e[xd]) || "string" == typeof e)
				return Ku(e, t);
		}
		throw new TypeError(
			((null !== e && qa(e)) || e) + " is not observable"
		);
	}
	function Jc(e, t) {
		return t ? ln(e, t) : e instanceof ua ? e : new ua(Tf(e));
	}
	function bd(e, t) {
		if (!t.closed) {
			if (e instanceof ua) return e.subscribe(t);
			try {
				var n = Tf(e)(t);
			} catch (e) {
				t.error(e);
			}
			return n;
		}
	}
	function Cb(e, t, n) {
		return (
			void 0 === n && (n = Number.POSITIVE_INFINITY),
			"function" == typeof t
				? function (r) {
						return r.pipe(
							Cb(function (n, r) {
								return Jc(e(n, r)).pipe(
									Ea(function (e, o) {
										return t(n, e, r, o);
									})
								);
							}, n)
						);
				  }
				: ("number" == typeof t && (n = t),
				  function (t) {
						return t.lift(new Lu(e, n));
				  })
		);
	}
	function bh(e) {
		return void 0 === e && (e = Number.POSITIVE_INFINITY), Cb(wd, e);
	}
	function nn() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return bh(1)(ob.apply(void 0, e));
	}
	function yd(e) {
		return new ua(function (t) {
			try {
				var n = e();
			} catch (e) {
				return void t.error(e);
			}
			return (n ? Jc(n) : Qf()).subscribe(t);
		});
	}
	function ch(e, t) {
		return new ua(function (n) {
			var r = e.length;
			if (0 === r) n.complete();
			else
				for (
					var o = Array(r),
						i = 0,
						s = 0,
						a = function (a) {
							var c = Jc(e[a]),
								u = !1;
							n.add(
								c.subscribe({
									next: function (e) {
										u || ((u = !0), s++), (o[a] = e);
									},
									error: function (e) {
										return n.error(e);
									},
									complete: function () {
										(++i !== r && u) ||
											(s === r &&
												n.next(
													t
														? t.reduce(function (
																e,
																t,
																n
														  ) {
																return (
																	(e[t] =
																		o[n]),
																	e
																);
														  },
														  {})
														: o
												),
											n.complete());
									},
								})
							);
						},
						c = 0;
					c < r;
					c++
				)
					a(c);
		});
	}
	function Db(e, t, n, r) {
		return (
			Ne(n) && ((r = n), (n = void 0)),
			r
				? Db(e, t, n).pipe(
						Ea(function (e) {
							return hc(e) ? r.apply(void 0, e) : r(e);
						})
				  )
				: new ua(function (r) {
						on(
							e,
							t,
							function (e) {
								1 < arguments.length
									? r.next(
											Array.prototype.slice.call(
												arguments
											)
									  )
									: r.next(e);
							},
							r,
							n
						);
				  })
		);
	}
	function on(e, t, n, r, o) {
		if (
			e &&
			"function" == typeof e.addEventListener &&
			"function" == typeof e.removeEventListener
		) {
			e.addEventListener(t, n, o);
			var i = function () {
				return e.removeEventListener(t, n, o);
			};
		} else if (e && "function" == typeof e.on && "function" == typeof e.off)
			e.on(t, n),
				(i = function () {
					return e.off(t, n);
				});
		else if (
			e &&
			"function" == typeof e.addListener &&
			"function" == typeof e.removeListener
		)
			e.addListener(t, n),
				(i = function () {
					return e.removeListener(t, n);
				});
		else {
			if (!e || !e.length) throw new TypeError("Invalid event target");
			for (var s = 0, a = e.length; s < a; s++) on(e[s], t, n, r, o);
		}
		r.add(i);
	}
	function pn(e, t, n) {
		return n
			? pn(e, t).pipe(
					Ea(function (e) {
						return hc(e) ? n.apply(void 0, e) : n(e);
					})
			  )
			: new ua(function (n) {
					var r = function () {
						for (var e = [], t = 0; t < arguments.length; t++)
							e[t] = arguments[t];
						return n.next(1 === e.length ? e[0] : e);
					};
					try {
						var o = e(r);
					} catch (e) {
						return void n.error(e);
					}
					if (Ne(t))
						return function () {
							return t(r, o);
						};
			  });
	}
	function Mu(e) {
		var t = e.subscriber,
			n = e.condition;
		if (!t.closed) {
			if (e.needIterate)
				try {
					e.state = e.iterate(e.state);
				} catch (e) {
					return void t.error(e);
				}
			else e.needIterate = !0;
			if (n) {
				var r = void 0;
				try {
					r = n(e.state);
				} catch (e) {
					return void t.error(e);
				}
				if (!r) return void t.complete();
				if (t.closed) return;
			}
			try {
				var o = e.resultSelector(e.state);
			} catch (e) {
				return void t.error(e);
			}
			if (!t.closed && (t.next(o), !t.closed)) return this.schedule(e);
		}
	}
	function cj(e) {
		return !hc(e) && 0 <= e - parseFloat(e) + 1;
	}
	function Qe(e, t) {
		return (
			void 0 === e && (e = 0),
			void 0 === t && (t = cd),
			(!cj(e) || 0 > e) && (e = 0),
			(t && "function" == typeof t.schedule) || (t = cd),
			new ua(function (n) {
				return (
					n.add(
						t.schedule(Nu, e, {
							subscriber: n,
							counter: 0,
							period: e,
						})
					),
					n
				);
			})
		);
	}
	function Nu(e) {
		var t = e.subscriber,
			n = e.counter;
		(e = e.period),
			t.next(n),
			this.schedule({ subscriber: t, counter: n + 1, period: e }, e);
	}
	function Jb() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		t = Number.POSITIVE_INFINITY;
		var n = null,
			r = e[e.length - 1];
		return (
			ad(r)
				? ((n = e.pop()),
				  1 < e.length &&
						"number" == typeof e[e.length - 1] &&
						(t = e.pop()))
				: "number" == typeof r && (t = e.pop()),
			null === n && 1 === e.length && e[0] instanceof ua
				? e[0]
				: bh(t)(Rf(e, n))
		);
	}
	function dj() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		if (0 === e.length) return Sb;
		var n = e[0],
			r = e.slice(1);
		return 1 === e.length && hc(n)
			? dj.apply(void 0, n)
			: new ua(function (e) {
					var t = function () {
						return e.add(dj.apply(void 0, r).subscribe(e));
					};
					return Jc(n).subscribe({
						next: function (t) {
							e.next(t);
						},
						error: t,
						complete: t,
					});
			  });
	}
	function Ou(e) {
		var t = e.keys,
			n = e.index,
			r = e.subscriber,
			o = e.subscription;
		if (((e = e.obj), !r.closed))
			if (n < t.length) {
				var i = t[n];
				r.next([i, e[i]]),
					o.add(
						this.schedule({
							keys: t,
							index: n + 1,
							subscriber: r,
							subscription: o,
							obj: e,
						})
					);
			} else r.complete();
	}
	function Pu(e, t) {
		function n() {
			return !n.pred.apply(n.thisArg, arguments);
		}
		return (n.pred = e), (n.thisArg = t), n;
	}
	function yb(e, t) {
		return function (n) {
			return n.lift(new Qu(e, t));
		};
	}
	function fb() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		if (1 === e.length) {
			if (!hc(e[0])) return e[0];
			e = e[0];
		}
		return Rf(e, void 0).lift(new Ru());
	}
	function Su(e) {
		var t = e.start,
			n = e.index,
			r = e.subscriber;
		n >= e.count
			? r.complete()
			: (r.next(t),
			  r.closed ||
					((e.index = n + 1), (e.start = t + 1), this.schedule(e)));
	}
	function dd(e, t, n) {
		void 0 === e && (e = 0);
		var r = -1;
		return (
			cj(t) ? (r = 1 > Number(t) ? 1 : Number(t)) : ad(t) && (n = t),
			ad(n) || (n = cd),
			new ua(function (t) {
				var o = cj(e) ? e : +e - n.now();
				return n.schedule(Tu, o, {
					index: 0,
					period: r,
					subscriber: t,
				});
			})
		);
	}
	function Tu(e) {
		var t = e.index,
			n = e.period,
			r = e.subscriber;
		if ((r.next(t), !r.closed)) {
			if (-1 === n) return r.complete();
			(e.index = t + 1), this.schedule(e, n);
		}
	}
	function ej() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return (
			"function" == typeof (t = e[e.length - 1]) && e.pop(),
			Rf(e, void 0).lift(new Uu(t))
		);
	}
	function dh(e) {
		var t = arguments.length,
			n = cd;
		ad(arguments[arguments.length - 1]) &&
			((n = arguments[arguments.length - 1]), t--);
		var r = null;
		2 <= t && (r = arguments[1]);
		var o = Number.POSITIVE_INFINITY;
		return (
			3 <= t && (o = arguments[2]),
			function (t) {
				return t.lift(new Vu(e, r, o, n));
			}
		);
	}
	function qn(e) {
		var t = e.subscriber,
			n = e.context;
		n && t.closeContext(n),
			t.closed ||
				((e.context = t.openContext()),
				(e.context.closeAction = this.schedule(e, e.bufferTimeSpan)));
	}
	function Wu(e) {
		var t = e.bufferCreationInterval,
			n = e.bufferTimeSpan,
			r = e.subscriber,
			o = e.scheduler,
			i = r.openContext();
		r.closed ||
			(r.add(
				(i.closeAction = o.schedule(rn, n, {
					subscriber: r,
					context: i,
				}))
			),
			this.schedule(e, t));
	}
	function rn(e) {
		e.subscriber.closeContext(e.context);
	}
	function ab(e) {
		return function (t) {
			var n = new Xu(e);
			return (t = t.lift(n)), (n.caught = t);
		};
	}
	function fj(e, t) {
		return Cb(e, t, 1);
	}
	function sn(e) {
		return (
			void 0 === e && (e = null),
			function (t) {
				return t.lift(new Yu(e));
			}
		);
	}
	function Zd(e, t) {
		void 0 === t && (t = cd);
		var n = e instanceof Date && !isNaN(+e) ? +e - t.now() : Math.abs(e);
		return function (e) {
			return e.lift(new Zu(n, t));
		};
	}
	function tn(e, t) {
		return function (n) {
			return n.lift(new $u(e, t));
		};
	}
	function $d(e) {
		return (
			void 0 === e && (e = av),
			function (t) {
				return t.lift(new bv(e));
			}
		);
	}
	function av() {
		return new eh();
	}
	function hb(e) {
		return function (t) {
			return 0 === e ? Qf() : t.lift(new cv(e));
		};
	}
	function fh(e) {
		return function (t) {
			return t.lift(new dv(e));
		};
	}
	function Ca(e, t) {
		var n = 2 <= arguments.length;
		return function (r) {
			return r.pipe(
				e
					? yb(function (t, n) {
							return e(t, n, r);
					  })
					: wd,
				hb(1),
				n
					? sn(t)
					: $d(function () {
							return new eh();
					  })
			);
		};
	}
	function ev() {
		return function (e) {
			return e.lift(new fv());
		};
	}
	function un(e) {
		return function (t) {
			return 0 === e ? Qf() : t.lift(new gv(e));
		};
	}
	function Uf(e) {
		return function (t) {
			return t.lift(new hv(e));
		};
	}
	function gh(e, t) {
		var n = !1;
		return (
			2 <= arguments.length && (n = !0),
			function (r) {
				return r.lift(new iv(e, t, n));
			}
		);
	}
	function vn(e, t) {
		return 2 <= arguments.length
			? function (n) {
					return Zi(gh(e, t), un(1), sn(t))(n);
			  }
			: function (t) {
					return Zi(
						gh(function (t, n, r) {
							return e(t, n, r + 1);
						}),
						un(1)
					)(t);
			  };
	}
	function jv(e, t) {
		return function (n) {
			var r =
				"function" == typeof e
					? e
					: function () {
							return e;
					  };
			if ("function" == typeof t) return n.lift(new kv(r, t));
			var o = Object.create(n, lv);
			return (o.source = n), (o.subjectFactory = r), o;
		};
	}
	function Re(e) {
		return function (t) {
			return t.lift(new mv(e, t));
		};
	}
	function nv() {
		return new rb();
	}
	function Se() {
		return function (e) {
			return dn()(jv(nv)(e));
		};
	}
	function wn(e, t, n) {
		var r =
			e && "object" === qa(e)
				? e
				: { bufferSize: e, windowTime: t, refCount: !1, scheduler: n };
		return function (e) {
			return e.lift(ov(r));
		};
	}
	function ov(e) {
		var t,
			n,
			r = e.bufferSize,
			o = void 0 === r ? Number.POSITIVE_INFINITY : r,
			i = void 0 === (r = e.windowTime) ? Number.POSITIVE_INFINITY : r,
			s = e.refCount,
			a = e.scheduler,
			c = 0,
			u = !1,
			l = !1;
		return function (e) {
			if ((c++, !t || u)) {
				u = !1;
				var r = (t = new Te(o, i, a)).subscribe(this);
				(n = e.subscribe({
					next: function (e) {
						t.next(e);
					},
					error: function (e) {
						(u = !0), t.error(e);
					},
					complete: function () {
						(l = !0), (n = void 0), t.complete();
					},
				})),
					l && (n = void 0);
			} else r = t.subscribe(this);
			this.add(function () {
				c--,
					r.unsubscribe(),
					(r = void 0),
					n &&
						!l &&
						s &&
						0 === c &&
						(n.unsubscribe(), (t = n = void 0));
			});
		};
	}
	function Kb(e, t) {
		return "function" == typeof t
			? function (n) {
					return n.pipe(
						Kb(function (n, r) {
							return Jc(e(n, r)).pipe(
								Ea(function (e, o) {
									return t(n, e, r, o);
								})
							);
						})
					);
			  }
			: function (t) {
					return t.lift(new pv(e));
			  };
	}
	function Kc(e) {
		return function (t) {
			return t.lift(new qv(e));
		};
	}
	function sa(e, t, n) {
		return function (r) {
			return r.lift(new rv(e, t, n));
		};
	}
	function sv(e, t, n) {
		return (
			void 0 === t && (t = cd),
			void 0 === n && (n = tv),
			function (r) {
				return r.lift(new uv(e, t, n.leading, n.trailing));
			}
		);
	}
	function vv(e) {
		e.subscriber.clearThrottle();
	}
	function wv(e, t, n) {
		return (
			void 0 === n && (n = cd),
			function (r) {
				var o = e instanceof Date && !isNaN(+e),
					i = o ? +e - n.now() : Math.abs(e);
				return r.lift(new xv(i, o, t, n));
			}
		);
	}
	function Lb(e, t) {
		return void 0 === t && (t = cd), wv(e, ra(new Tb()), t);
	}
	function yv() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function (t) {
			var n;
			return (
				"function" == typeof e[e.length - 1] && (n = e.pop()),
				t.lift(new zv(e, n))
			);
		};
	}
	function xn(e) {
		(gj || e) && (yn.abort(), e && (yn = new AbortController()), (gj = e));
	}
	function zn(e, t, n, r, o) {
		e !== t &&
			An(
				t,
				function (i, s) {
					if ((o || (o = new Ie()), Gb(i))) {
						i = o;
						var a = hj(e, s),
							c = hj(t, s),
							u = i.get(c);
						if (u) ij(e, s, u);
						else {
							var l =
								void 0 ===
								(u = r ? r(a, c, s + "", e, t, i) : void 0);
							if (l) {
								var f = ub(c),
									h = !f && Nf(c),
									p = !f && !h && Ui(c);
								(u = c),
									f || h || p
										? ub(a)
											? (u = a)
											: Hc(a) && ae(a)
											? (u = Pi(a))
											: h
											? ((l = !1), (u = Nm(c, !0)))
											: p
											? ((l = !1), (u = Bn(c, !0)))
											: (u = [])
										: Cn(c) || Vf(c)
										? ((u = a),
										  Vf(a)
												? (u = Ue(a, Of(a)))
												: (Gb(a) && !jj(a)) ||
												  (u = Om(c)))
										: (l = !1);
							}
							l && (i.set(c, u), zn(u, c, n, r, i), i.delete(c)),
								ij(e, s, u);
						}
					} else
						void 0 ===
							(a = r
								? r(hj(e, s), i, s + "", e, t, o)
								: void 0) && (a = i),
							ij(e, s, a);
				},
				Of
			);
	}
	function Av(e) {
		var t = 1,
			n = kj;
		1 == (1 >= arguments.length ? 0 : arguments.length - 1)
			? "number" == typeof (1 >= arguments.length ? void 0 : arguments[1])
				? (t = 1 >= arguments.length ? void 0 : arguments[1])
				: (n = 1 >= arguments.length ? void 0 : arguments[1])
			: 2 == (1 >= arguments.length ? 0 : arguments.length - 1) &&
			  ((t = 1 >= arguments.length ? void 0 : arguments[1]),
			  (n = 2 >= arguments.length ? void 0 : arguments[2]));
		var r = t || 1;
		return function (t) {
			return t.pipe(
				gh(function (t, o) {
					var i = n.now(),
						s = i - e;
					if (
						(t = t.filter(function (e) {
							return e.until > s;
						})).length >= r
					) {
						var a = t[t.length - 1],
							c = t[0].until + e * Math.floor(t.length / r);
						t.push({
							delay: a.until < i ? c - i : c - a.until,
							until: c,
							value: o,
						});
					} else t.push({ delay: 0, until: i, value: o });
					return t;
				}, []),
				Ea(function (e) {
					return e[e.length - 1];
				}),
				fj(function (e) {
					var t = ob(e.value);
					return e.delay ? t.pipe(Zd(e.delay, n)) : t;
				})
			);
		};
	}
	function Bv(e, t) {
		var n = (t = void 0 === t ? { protocols: Dn, makeWebSocket: En } : t)
				.protocols,
			r = void 0 === n ? Dn : n,
			o = void 0 === (t = t.makeWebSocket) ? En : t;
		return new ua(function (t) {
			var n,
				i = new rb(),
				s = o(e, r),
				a = !1,
				c = !1,
				u = !1,
				l = function (e) {
					if (n)
						throw (
							((a = !0),
							(e = Error(
								"Web socket message factory function called more than once"
							)),
							t.error(e),
							e)
						);
					return (
						(n = e.subscribe(function (e) {
							s.send(e);
						})),
						i
					);
				};
			return (
				(s.onopen = function () {
					(u = !0), c ? ((a = !0), s.close()) : t.next(l);
				}),
				(s.onmessage = function (e) {
					i.next(e.data);
				}),
				(s.onerror = function (e) {
					(a = !0), t.error(Error(e.message));
				}),
				(s.onclose = function (e) {
					a ||
						((a = !0),
						c
							? (t.complete(), i.complete())
							: t.error(
									Error(
										1e3 === e.code
											? "Normal closure"
											: e.reason
									)
							  ));
				}),
				function () {
					(c = !0),
						n && n.unsubscribe(),
						a || ((a = !0), u && s.close());
				}
			);
		});
	}
	function hh() {
		this._listeners = {};
	}
	function Fn(e) {
		return (
			"undefined" != typeof Float32Array
				? (function () {
						function t(e, t, n) {
							(i[0] = e),
								(t[n] = s[0]),
								(t[n + 1] = s[1]),
								(t[n + 2] = s[2]),
								(t[n + 3] = s[3]);
						}
						function n(e, t, n) {
							(i[0] = e),
								(t[n] = s[3]),
								(t[n + 1] = s[2]),
								(t[n + 2] = s[1]),
								(t[n + 3] = s[0]);
						}
						function r(e, t) {
							return (
								(s[0] = e[t]),
								(s[1] = e[t + 1]),
								(s[2] = e[t + 2]),
								(s[3] = e[t + 3]),
								i[0]
							);
						}
						function o(e, t) {
							return (
								(s[3] = e[t]),
								(s[2] = e[t + 1]),
								(s[1] = e[t + 2]),
								(s[0] = e[t + 3]),
								i[0]
							);
						}
						var i = new Float32Array([-0]),
							s = new Uint8Array(i.buffer),
							a = 128 === s[3];
						(e.writeFloatLE = a ? t : n),
							(e.writeFloatBE = a ? n : t),
							(e.readFloatLE = a ? r : o),
							(e.readFloatBE = a ? o : r);
				  })()
				: (function () {
						function t(e, t, n, r) {
							var o = 0 > t ? 1 : 0;
							if ((o && (t = -t), 0 === t))
								e(0 < 1 / t ? 0 : 2147483648, n, r);
							else if (isNaN(t)) e(2143289344, n, r);
							else if (34028234663852886e22 < t)
								e(((o << 31) | 2139095040) >>> 0, n, r);
							else if (11754943508222875e-54 > t)
								e(
									((o << 31) |
										Math.round(
											t / 1401298464324817e-60
										)) >>>
										0,
									n,
									r
								);
							else {
								var i = Math.floor(Math.log(t) / Math.LN2);
								e(
									((o << 31) |
										((i + 127) << 23) |
										(8388607 &
											Math.round(
												t * Math.pow(2, -i) * 8388608
											))) >>>
										0,
									n,
									r
								);
							}
						}
						function n(e, t, n) {
							return (
								(n = e(t, n)),
								(e = 2 * (n >> 31) + 1),
								(t = (n >>> 23) & 255),
								(n &= 8388607),
								255 === t
									? n
										? NaN
										: (1 / 0) * e
									: 0 === t
									? 1401298464324817e-60 * e * n
									: e * Math.pow(2, t - 150) * (n + 8388608)
							);
						}
						(e.writeFloatLE = t.bind(null, Gn)),
							(e.writeFloatBE = t.bind(null, Hn)),
							(e.readFloatLE = n.bind(null, In)),
							(e.readFloatBE = n.bind(null, Jn));
				  })(),
			"undefined" != typeof Float64Array
				? (function () {
						function t(e, t, n) {
							(i[0] = e),
								(t[n] = s[0]),
								(t[n + 1] = s[1]),
								(t[n + 2] = s[2]),
								(t[n + 3] = s[3]),
								(t[n + 4] = s[4]),
								(t[n + 5] = s[5]),
								(t[n + 6] = s[6]),
								(t[n + 7] = s[7]);
						}
						function n(e, t, n) {
							(i[0] = e),
								(t[n] = s[7]),
								(t[n + 1] = s[6]),
								(t[n + 2] = s[5]),
								(t[n + 3] = s[4]),
								(t[n + 4] = s[3]),
								(t[n + 5] = s[2]),
								(t[n + 6] = s[1]),
								(t[n + 7] = s[0]);
						}
						function r(e, t) {
							return (
								(s[0] = e[t]),
								(s[1] = e[t + 1]),
								(s[2] = e[t + 2]),
								(s[3] = e[t + 3]),
								(s[4] = e[t + 4]),
								(s[5] = e[t + 5]),
								(s[6] = e[t + 6]),
								(s[7] = e[t + 7]),
								i[0]
							);
						}
						function o(e, t) {
							return (
								(s[7] = e[t]),
								(s[6] = e[t + 1]),
								(s[5] = e[t + 2]),
								(s[4] = e[t + 3]),
								(s[3] = e[t + 4]),
								(s[2] = e[t + 5]),
								(s[1] = e[t + 6]),
								(s[0] = e[t + 7]),
								i[0]
							);
						}
						var i = new Float64Array([-0]),
							s = new Uint8Array(i.buffer),
							a = 128 === s[7];
						(e.writeDoubleLE = a ? t : n),
							(e.writeDoubleBE = a ? n : t),
							(e.readDoubleLE = a ? r : o),
							(e.readDoubleBE = a ? o : r);
				  })()
				: (function () {
						function t(e, t, n, r, o, i) {
							var s = 0 > r ? 1 : 0;
							if ((s && (r = -r), 0 === r))
								e(0, o, i + t),
									e(0 < 1 / r ? 0 : 2147483648, o, i + n);
							else if (isNaN(r))
								e(0, o, i + t), e(2146959360, o, i + n);
							else if (17976931348623157e292 < r)
								e(0, o, i + t),
									e(((s << 31) | 2146435072) >>> 0, o, i + n);
							else if (22250738585072014e-324 > r)
								e((r /= 5e-324) >>> 0, o, i + t),
									e(
										((s << 31) | (r / 4294967296)) >>> 0,
										o,
										i + n
									);
							else {
								var a = Math.floor(Math.log(r) / Math.LN2);
								1024 === a && (a = 1023),
									e(
										(4503599627370496 *
											(r *= Math.pow(2, -a))) >>>
											0,
										o,
										i + t
									),
									e(
										((s << 31) |
											((a + 1023) << 20) |
											((1048576 * r) & 1048575)) >>>
											0,
										o,
										i + n
									);
							}
						}
						function n(e, t, n, r, o) {
							return (
								(t = e(r, o + t)),
								(r = e(r, o + n)),
								(e = 2 * (r >> 31) + 1),
								(t = 4294967296 * (1048575 & r) + t),
								2047 === (n = (r >>> 20) & 2047)
									? t
										? NaN
										: (1 / 0) * e
									: 0 === n
									? 5e-324 * e * t
									: e *
									  Math.pow(2, n - 1075) *
									  (t + 4503599627370496)
							);
						}
						(e.writeDoubleLE = t.bind(null, Gn, 0, 4)),
							(e.writeDoubleBE = t.bind(null, Hn, 4, 0)),
							(e.readDoubleLE = n.bind(null, In, 0, 4)),
							(e.readDoubleBE = n.bind(null, Jn, 4, 0));
				  })(),
			e
		);
	}
	function Gn(e, t, n) {
		(t[n] = 255 & e),
			(t[n + 1] = (e >>> 8) & 255),
			(t[n + 2] = (e >>> 16) & 255),
			(t[n + 3] = e >>> 24);
	}
	function Hn(e, t, n) {
		(t[n] = e >>> 24),
			(t[n + 1] = (e >>> 16) & 255),
			(t[n + 2] = (e >>> 8) & 255),
			(t[n + 3] = 255 & e);
	}
	function In(e, t) {
		return (
			(e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0
		);
	}
	function Jn(e, t) {
		return (
			((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
		);
	}
	function vb(e, t) {
		(this.lo = e >>> 0), (this.hi = t >>> 0);
	}
	function Wf(e, t, n) {
		(this.fn = e), (this.len = t), (this.next = void 0), (this.val = n);
	}
	function lj() {}
	function Cv(e) {
		(this.head = e.head),
			(this.tail = e.tail),
			(this.len = e.len),
			(this.next = e.states);
	}
	function Aa() {
		(this.len = 0),
			(this.tail = this.head = new Wf(lj, 0, 0)),
			(this.states = null);
	}
	function mj(e, t, n) {
		t[n] = 255 & e;
	}
	function nj(e, t) {
		(this.len = e), (this.next = void 0), (this.val = t);
	}
	function oj(e, t, n) {
		for (; e.hi; )
			(t[n++] = (127 & e.lo) | 128),
				(e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
				(e.hi >>>= 7);
		for (; 127 < e.lo; ) (t[n++] = (127 & e.lo) | 128), (e.lo >>>= 7);
		t[n++] = e.lo;
	}
	function pj(e, t, n) {
		(t[n] = 255 & e),
			(t[n + 1] = (e >>> 8) & 255),
			(t[n + 2] = (e >>> 16) & 255),
			(t[n + 3] = e >>> 24);
	}
	function Lc() {
		qj.call(this);
	}
	function Dv(e, t, n) {
		40 > e.length
			? pa.utf8.write(e, t, n)
			: t.utf8Write
			? t.utf8Write(e, n)
			: t.write(e, n);
	}
	function wc(e, t) {
		return RangeError(
			"index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len
		);
	}
	function ib(e) {
		(this.buf = e), (this.pos = 0), (this.len = e.length);
	}
	function rj() {
		var e = new Kn(0, 0),
			t = 0;
		if (!(4 < this.len - this.pos)) {
			for (; 3 > t; ++t) {
				if (this.pos >= this.len) throw wc(this);
				if (
					((e.lo =
						(e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
			}
			return (
				(e.lo =
					(e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0),
				e
			);
		}
		for (; 4 > t; ++t)
			if (
				((e.lo =
					(e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
				128 > this.buf[this.pos++])
			)
				return e;
		if (
			((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
			(e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
			128 > this.buf[this.pos++])
		)
			return e;
		if (((t = 0), 4 < this.len - this.pos)) {
			for (; 5 > t; ++t)
				if (
					((e.hi =
						(e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>>
						0),
					128 > this.buf[this.pos++])
				)
					return e;
		} else
			for (; 5 > t; ++t) {
				if (this.pos >= this.len) throw wc(this);
				if (
					((e.hi =
						(e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>>
						0),
					128 > this.buf[this.pos++])
				)
					return e;
			}
		throw Error("invalid varint encoding");
	}
	function ih(e, t) {
		return (
			(e[t - 4] |
				(e[t - 3] << 8) |
				(e[t - 2] << 16) |
				(e[t - 1] << 24)) >>>
			0
		);
	}
	function Ln() {
		if (this.pos + 8 > this.len) throw wc(this, 8);
		return new Kn(
			ih(this.buf, (this.pos += 4)),
			ih(this.buf, (this.pos += 4))
		);
	}
	function be(e) {
		sj.call(this, e);
	}
	function Xf(e, t, n) {
		if ("function" != typeof e)
			throw TypeError("rpcImpl must be a function");
		pa.EventEmitter.call(this),
			(this.rpcImpl = e),
			(this.requestDelimited = !!t),
			(this.responseDelimited = !!n);
	}
	function Mn(e) {
		var t = [];
		return (function e(n) {
			if (null === n || "object" !== qa(n)) return n;
			if (-1 !== t.indexOf(n)) return "[Circular]";
			if ((t.push(n), "function" == typeof n.toJSON))
				try {
					var r = e(n.toJSON());
					return t.pop(), r;
				} catch (e) {
					return "[Throws: " + (e ? e.message : "?") + "]";
				}
			return Array.isArray(n)
				? ((r = n.map(e)), t.pop(), r)
				: ((r = Object.keys(n).reduce(function (t, r) {
						e: {
							if (Ev.call(n, r))
								try {
									var o = n[r];
									break e;
								} catch (e) {
									o =
										"[Throws: " +
										(e ? e.message : "?") +
										"]";
									break e;
								}
							o = n[r];
						}
						return (t[r] = e(o)), t;
				  }, {})),
				  t.pop(),
				  r);
		})(e);
	}
	function Fv(e) {
		if (
			!(100 < (e = String(e)).length) &&
			(e =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
					e
				))
		) {
			var t = parseFloat(e[1]);
			switch ((e[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * t;
				case "weeks":
				case "week":
				case "w":
					return 6048e5 * t;
				case "days":
				case "day":
				case "d":
					return 864e5 * t;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return 36e5 * t;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return 6e4 * t;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return 1e3 * t;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return t;
			}
		}
	}
	function jh(e, t, n, r) {
		return Math.round(e / n) + " " + r + (t >= 1.5 * n ? "s" : "");
	}
	function Gv(e) {
		var t = e.areas,
			n = e.excludedArea;
		if (1 === t.length && t[0] === S.GLOBAL && n === S.CHINA)
			return Ve([S.OVERSEA]);
		if (t.includes(S.GLOBAL)) {
			if (
				((e = Yf(kh).filter(function (e) {
					return e !== S.GLOBAL && e !== S.OVERSEA;
				})),
				n in Zf)
			) {
				t = Zf[n];
				var r = [].concat(Z(null != t ? t : []), [n]);
				return Ve(
					e.filter(function (e) {
						return !r.includes(e);
					})
				);
			}
			if (Nn(n)) {
				var o = Hv(n);
				return Ve(
					e.filter(function (e) {
						return e !== n && e !== o;
					})
				);
			}
		}
		if (Nn(n) || n in Zf) return Ve(t);
		throw new ca("Invalid excludedArea area config");
	}
	function jb(e, t, n) {
		void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
		var r = n.value;
		return (
			(n.value = function () {
				for (
					var e = this, n = arguments.length, o = Array(n), i = 0;
					i < n;
					i++
				)
					o[i] = arguments[i];
				this.invokeTracker.apply(
					this,
					[
						"%s: ".concat(
							0 < o.length
								? "%s with args: ".concat(
										o.map(function () {
											return "%o";
										})
								  )
								: "%s"
						),
						this.name,
						t,
					].concat(Z(o.map(We)))
				);
				try {
					var s = r.apply(this, o);
				} catch (e) {
					throw (
						(this.logError.apply(
							this,
							[
								""
									.concat(
										void 0 !== e.code
											? "Error Code ".concat(e.code, ": ")
											: "",
										"%s failed"
									)
									.concat(
										0 < o.length
											? " with args: ".concat(
													o.map(function () {
														return "%o";
													})
											  )
											: ""
									),
								t,
							].concat(Z(o.map(We)))
						),
						e.originalError && this.logError(e.originalError),
						this.errorTracker(e),
						e)
					);
				}
				var a = Date.now();
				return (
					ma(
						N.mark(function n() {
							var r, i;
							return N.wrap(
								function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (
													(n.prev = 0),
													(n.next = 3),
													s
												);
											case 3:
												(r = n.sent), (n.next = 12);
												break;
											case 6:
												return (
													(n.prev = 6),
													(n.t0 = n.catch(0)),
													e.logError.apply(
														e,
														[
															""
																.concat(
																	void 0 !==
																		n.t0
																			.code
																		? "Error Code ".concat(
																				n
																					.t0
																					.code,
																				": "
																		  )
																		: "",
																	"%s failed"
																)
																.concat(
																	0 < o.length
																		? " with args: ".concat(
																				o.map(
																					function () {
																						return "%o";
																					}
																				)
																		  )
																		: ""
																),
															t,
														].concat(Z(o.map(We)))
													),
													n.t0.originalError &&
														e.logError(
															n.t0.originalError
														),
													e.errorTracker(n.t0),
													n.abrupt("return")
												);
											case 12:
												r !== s
													? void 0 === r
														? e.resultTracker(
																"%s promise resolves after %dms",
																t,
																Date.now() - a
														  )
														: e.resultTracker(
																"%s promise resolves after %dms, result is %o",
																t,
																Date.now() - a,
																We(r)
														  )
													: "Object" !== $c(r) ||
													  De(r)
													? e.resultTracker(
															"%s result is %o",
															t,
															We(r)
													  )
													: e.resultTracker(
															"%s result is %s",
															t,
															r.name ||
																(null ===
																	(i =
																		r.constructor) ||
																void 0 === i
																	? void 0
																	: i.name)
													  );
											case 13:
											case "end":
												return n.stop();
										}
								},
								n,
								null,
								[[0, 6]]
							);
						})
					)(),
					s
				);
			}),
			n
		);
	}
	function Mc(e, t, n) {
		void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
		var r = n.value;
		return (
			(n.value = function () {
				for (
					var e = this, n = arguments.length, o = Array(n), i = 0;
					i < n;
					i++
				)
					o[i] = arguments[i];
				this.invokeTracker.apply(
					this,
					[
						"%s: ".concat(
							0 < o.length
								? "%s with args: ".concat(
										o.map(function () {
											return "%o";
										})
								  )
								: "%s"
						),
						this.name,
						t,
					].concat(o)
				);
				try {
					var s = r.apply(this, o);
				} catch (e) {
					throw (
						(this.logError.apply(
							this,
							[
								""
									.concat(
										void 0 !== e.code
											? "Error Code ".concat(e.code, ": ")
											: "",
										"%s failed"
									)
									.concat(
										0 < o.length
											? " with args: ".concat(
													o.map(function () {
														return "%o";
													})
											  )
											: ""
									),
								t,
							].concat(o)
						),
						e.originalError && this.logError(e.originalError),
						this.errorTracker(e),
						e)
					);
				}
				var a = Date.now();
				return (
					ma(
						N.mark(function n() {
							var r, i;
							return N.wrap(
								function (n) {
									for (;;)
										switch ((n.prev = n.next)) {
											case 0:
												return (
													(n.prev = 0),
													(n.next = 3),
													s
												);
											case 3:
												(r = n.sent), (n.next = 12);
												break;
											case 6:
												return (
													(n.prev = 6),
													(n.t0 = n.catch(0)),
													e.logError.apply(
														e,
														[
															""
																.concat(
																	void 0 !==
																		n.t0
																			.code
																		? "Error Code ".concat(
																				n
																					.t0
																					.code,
																				": "
																		  )
																		: "",
																	"%s failed"
																)
																.concat(
																	0 < o.length
																		? " with args: ".concat(
																				o.map(
																					function () {
																						return "%o";
																					}
																				)
																		  )
																		: ""
																),
															t,
														].concat(o)
													),
													n.t0.originalError &&
														e.logError(
															n.t0.originalError
														),
													e.errorTracker(n.t0),
													n.abrupt("return")
												);
											case 12:
												r !== s
													? void 0 === r
														? e.resultTracker(
																"%s promise resolves after %dms",
																t,
																Date.now() - a
														  )
														: e.resultTracker(
																"%s promise resolves after %dms, result is %o",
																t,
																Date.now() - a,
																r
														  )
													: "Object" !== $c(r) ||
													  De(r)
													? e.resultTracker(
															"%s result is %o",
															t,
															r
													  )
													: e.resultTracker(
															"%s result is %s",
															t,
															r.name ||
																(null ===
																	(i =
																		r.constructor) ||
																void 0 === i
																	? void 0
																	: i.name)
													  );
											case 13:
											case "end":
												return n.stop();
										}
								},
								n,
								null,
								[[0, 6]]
							);
						})
					)(),
					s
				);
			}),
			n
		);
	}
	function bb(e, t, n) {
		return tj.apply(this, arguments);
	}
	function tj() {
		return (tj = ma(
			N.mark(function e(t, n, r) {
				var o,
					i,
					s,
					a = arguments;
				return N.wrap(
					function (e) {
						for (;;)
							switch ((e.prev = e.next)) {
								case 0:
									return (
										(o =
											3 < a.length &&
											void 0 !== a[3] &&
											a[3]),
										(i = Iv[t].encode(n).finish()),
										(s = (function () {
											var e = ma(
												N.mark(function e(n) {
													var a,
														c,
														u,
														l = arguments;
													return N.wrap(function (e) {
														for (;;)
															switch (
																(e.prev =
																	e.next)
															) {
																case 0:
																	if (
																		!(
																			3 <
																			(c =
																				1 <
																					l.length &&
																				void 0 !==
																					l[1]
																					? l[1]
																					: 0)
																		)
																	) {
																		e.next = 3;
																		break;
																	}
																	return e.abrupt(
																		"return"
																	);
																case 3:
																	if (
																		((u =
																			Xe(
																				(u =
																					r
																						? "https://"
																								.concat(
																									null !==
																										(a =
																											null ==
																											fa
																												? void 0
																												: fa
																														.PROXY_NGINX[0]) &&
																										void 0 !==
																											a
																										? a
																										: "webrtc-cloud-proxy.sd-rtn.com",
																									"/rs/?h="
																								)
																								.concat(
																									n,
																									"&p=443&d=events/proto-raw"
																								)
																						: "https://".concat(
																								n,
																								"/events/proto-raw"
																						  )),
																				"sentTs",
																				Math.ceil(
																					Date.now() /
																						1e3
																				).toString()
																			)),
																		(u = Xe(
																			u,
																			"id",
																			Jv[
																				t
																			].toString()
																		)),
																		!o)
																	) {
																		e.next = 9;
																		break;
																	}
																	return (
																		(e.next = 9),
																		Kv(1e4)
																	);
																case 9:
																	return (
																		(e.next = 11),
																		lh(u, {
																			body: i,
																			timeout: 2e4,
																			headers:
																				{
																					"Content-Type":
																						"application/octet-stream",
																				},
																		}).catch(
																			function (
																				e
																			) {
																				return s(
																					n,
																					c +
																						1
																				);
																			}
																		)
																	);
																case 11:
																case "end":
																	return e.stop();
															}
													}, e);
												})
											);
											return function (t) {
												return e.apply(this, arguments);
											};
										})()),
										(e.prev = 3),
										(e.next = 6),
										s(
											(null == fa
												? void 0
												: fa.EVENT_REPORT_DOMAIN[0]) ||
												($f(null) && null) ||
												"webcollector-rtm.agora.io"
										)
									);
								case 6:
									e.next = 12;
									break;
								case 8:
									return (
										(e.prev = 8),
										(e.t0 = e.catch(3)),
										(e.next = 12),
										s(
											(fa &&
												On(
													1 <
														(null == fa
															? void 0
															: fa
																	.EVENT_REPORT_DOMAIN
																	.length)
														? null == fa
															? void 0
															: fa.EVENT_REPORT_DOMAIN.slice(
																	1
															  )
														: null == fa
														? void 0
														: fa.EVENT_REPORT_DOMAIN
												)) ||
												"rtm.statscollector.sd-rtn.com"
										)
									);
								case 12:
								case "end":
									return e.stop();
							}
					},
					e,
					null,
					[[3, 8]]
				);
			})
		)).apply(this, arguments);
	}
	function Xa(e) {
		return void 0 === e ? P.fromNumber(0) : P.fromNumber(Date.now() - e);
	}
	function Ta(e) {
		return (
			"string" == typeof e &&
			/^[\s\w!#$%&()+,.:;<=>?@[\]^{|}~-]{1,64}$/.test(e) &&
			"null" !== e
		);
	}
	function Pn(e) {
		try {
			var t = e.split(".").map(function (e) {
				return Number(e);
			});
		} catch (e) {
			return !1;
		}
		if (4 !== t.length || 0 === t[0]) return !1;
		for (e = 0; e < t.length; e++) {
			var n = t[e];
			if (!Number.isInteger(n) || 0 > n || 255 < n) return !1;
		}
		return !0;
	}
	function Qn(e, t) {
		if (
			!Array.isArray(t) ||
			0 === t.length ||
			32 < t.length ||
			t.some(function (e) {
				return 0 === e.length || 32 < e.length;
			})
		)
			throw new ca("arguments is not valid", gb);
		if (!Ta(e)) throw new ca("ID is invalid", gb);
	}
	function ag(e) {
		var t = e.attributes,
			n = e.attrSizeMap,
			r = e.maxAttrsCount,
			o = e.maxAttrValueSize;
		if (((e = e.maxTotalSize), !De(t)))
			throw new ca("attributes must be an object", gb);
		if (Object.keys(t).length > r)
			throw new ic("Exceed the limit of ".concat(r, " attributes"), Ye);
		if (0 === Object.keys(t).length)
			throw new ca("The attributes is an empty object", gb);
		var i = 0,
			s = 0;
		for (t = Object.entries(t); s < t.length; s++) {
			var a = $a(t[s], 2),
				c = a[1];
			a = new Blob([a[0]]).size;
			var u = new Blob([c]).size;
			if (0 === a || 32 < a) throw new ca("Invalid attribute key", gb);
			if (u > o)
				throw new ic(
					"Invalid attribute value, over the limit of ".concat(
						o,
						" bytes"
					),
					Ye
				);
			if ("string" != typeof c || 0 === c.length)
				throw new ca("Invalid attribute value", gb);
			(i += a), (i += u);
		}
		if (i > e) throw new ic("The attributes size overflow", Ye);
		if (void 0 !== n) {
			if (Object.keys(n).length > r)
				throw new ic(
					"Exceed the limit of ".concat(r, " attributes"),
					Ye
				);
			for (i = r = 0, n = Object.entries(n); i < n.length; i++) {
				if (
					((s = (t = $a(n[i], 2))[1]),
					0 === (t = new Blob([t[0]]).size))
				)
					throw new ca("Invalid attribute key", gb);
				if (s > o)
					throw new ic(
						"Invalid attribute value, over the limit of ".concat(
							o,
							" bytes"
						),
						Ye
					);
				(r += t), (r += s);
			}
			if (r > e) throw new ic("The attributes size overflow", Ye);
		}
	}
	function mh(e, t) {
		return (
			Math.floor(Math.random() * (Math.floor(t) - Math.ceil(e) + 1)) + e
		);
	}
	function nh() {
		var e = mh(0, 4294967295),
			t = mh(1, 4294967295);
		return new P(e, t, !0);
	}
	function sb(e) {
		return e.toString().padEnd(32, "0");
	}
	function Rn(e, t) {
		return new TypeError("Unexpected ".concat(e, ": ").concat(t));
	}
	function Sn(e, t) {
		return (
			(e = e.split(".").map(function (e) {
				return Number(e);
			})),
			(t = t.split(".").map(function (e) {
				return Number(e);
			})),
			Math.sqrt(
				1e3 * Math.pow(e[0] - t[0], 2) +
					100 * Math.pow(e[1] - t[1], 2) +
					10 * Math.pow(e[2] - t[2], 2) +
					1 * Math.pow(e[3] - t[3], 2)
			)
		);
	}
	function Tn(e) {
		return e.lessThanOrEqual(Number.MAX_SAFE_INTEGER)
			? e.toNumber()
			: e.toString();
	}
	function uj(e, t) {
		t = "".concat(e).concat(t || "");
		var n = Un.get(t) || 1;
		return Un.set(t, n + 1), "".concat(e).concat(n);
	}
	function Vn(e, t) {
		var n =
			"number" == typeof t
				? t
				: void 0 !== t && "string" != typeof t
				? t.code
				: void 0;
		return (
			(t =
				"number" != typeof t &&
				"string" != typeof t &&
				void 0 !== t &&
				void 0 !== t.serverCode
					? t.serverCode
					: void 0),
			(n = ""
				.concat(void 0 !== n ? " Error Code ".concat(n) : "")
				.concat(void 0 !== t ? ", server Code ".concat(t) : "")),
			(e =
				"string" == typeof e && e
					? oh(e)
					: Array.isArray(e) && "string" == typeof e[0] && e[0]
					? oh(Wn.apply(void 0, [e[0]].concat(Z(e.slice(1)))))
					: ""),
			"".concat("" === n ? "" : "".concat(n, " - ")).concat(e)
		);
	}
	function Kv(e, t) {
		return vj.apply(this, arguments);
	}
	function vj() {
		return (vj = ma(
			N.mark(function e(t, n) {
				return N.wrap(function (e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								if (!n || !n.aborted) {
									e.next = 2;
									break;
								}
								return e.abrupt("return");
							case 2:
								return e.abrupt(
									"return",
									new Promise(function (e) {
										setTimeout(e, t),
											null == n ||
												n.addEventListener("abort", e);
									})
								);
							case 3:
							case "end":
								return e.stop();
						}
				}, e);
			})
		)).apply(this, arguments);
	}
	function lh(e, t, n) {
		return wj.apply(this, arguments);
	}
	function wj() {
		return (wj = ma(
			N.mark(function e(t, n, r) {
				var o,
					i,
					s,
					a,
					c,
					u,
					l,
					f,
					h,
					p,
					d,
					b,
					g,
					v,
					y,
					m,
					E,
					w,
					O,
					_,
					k,
					I,
					A,
					R,
					S,
					T;
				return N.wrap(
					function (e) {
						for (;;)
							switch ((e.prev = e.next)) {
								case 0:
									if (
										((o = n.body),
										(i = n.headers),
										(s = void 0 === i ? {} : i),
										(a = n.timeout),
										(c = void 0 === a ? 1e4 : a),
										(u = n.signal),
										(l = n.withCredentials),
										(f = void 0 !== l && l),
										(h = (r || {}).useBinaryResponse),
										(p = void 0 !== h && h),
										(d = new XMLHttpRequest()).open(
											"POST",
											t,
											!0
										),
										(d.responseType = p
											? "arraybuffer"
											: "text"),
										(d.withCredentials = f),
										(d.timeout = c),
										(b = o instanceof FormData),
										(g = o instanceof Uint8Array),
										!(
											1 <
											(v = Object.keys(s).filter(
												function (e) {
													return (
														"content-type" ===
														e.toLowerCase()
													);
												}
											)).length
										))
									) {
										e.next = 14;
										break;
									}
									throw new RangeError(
										"multiple content-type"
									);
								case 14:
									0 === v.length &&
										(g
											? (s["Content-Type"] =
													"application/octet-stream")
											: b ||
											  (s["Content-Type"] =
													"application/json"));
								case 15:
									if ("setRequestHeader" in d) {
										e.next = 46;
										break;
									}
									return (
										d.abort(),
										(e.next = 19),
										fetch(t, {
											body:
												b || g ? o : JSON.stringify(o),
											cache: "no-cache",
											credentials: f
												? "include"
												: "same-origin",
											headers: s,
											method: "POST",
											mode: "cors",
											referrer: "no-referrer",
											signal: u,
										})
									);
								case 19:
									if (
										((y = e.sent),
										!(
											(200 <= (m = y.status) &&
												300 > m) ||
											304 === m
										))
									) {
										e.next = 31;
										break;
									}
									if (!p) {
										e.next = 27;
										break;
									}
									return (e.next = 25), y.arrayBuffer();
								case 25:
									return (
										(E = e.sent),
										e.abrupt("return", {
											status: m,
											responseData: E,
										})
									);
								case 27:
									return (e.next = 29), y.text();
								case 29:
									return (
										(w = e.sent),
										e.abrupt("return", {
											status: m,
											responseText: w,
										})
									);
								case 31:
									return (
										(O = new Ja([
											"Post XHR failure, status %d",
											m,
										])),
										(e.prev = 32),
										(e.next = 35),
										y.text()
									);
								case 35:
									throw (
										((_ = e.sent),
										(O.statusCode = m),
										(O.message =
											_ ||
											"Request failed, status ".concat(
												m
											)),
										O)
									);
								case 41:
									throw (
										((e.prev = 41),
										(e.t0 = e.catch(32)),
										(O.statusCode = m),
										(O.message =
											"Request failed, status ".concat(
												m
											)),
										O)
									);
								case 46:
									if (0 !== Object.keys(s).length)
										for (
											k = 0, I = Object.entries(s);
											k < I.length;
											k++
										)
											(A = $a(I[k], 2)),
												(R = A[0]),
												(S = A[1]),
												d.setRequestHeader(R, S);
									return (
										void 0 !== u &&
											((T = function e() {
												d.abort(),
													u.removeEventListener(
														"abort",
														e
													);
											}),
											u.addEventListener("abort", T)),
										b || g
											? d.send(o)
											: d.send(JSON.stringify(o)),
										e.abrupt(
											"return",
											new Promise(function (e, t) {
												(d.onload = function () {
													var n = d.status;
													if (
														(200 <= n && 300 > n) ||
														304 === n
													)
														e(
															p
																? {
																		status: n,
																		responseData:
																			d.response,
																  }
																: {
																		status: n,
																		responseText:
																			d.responseText,
																  }
														);
													else {
														var r = new Ja([
															"Post XHR failure, status %d",
															n,
														]);
														(r.statusCode = n),
															(r.message =
																d.response ||
																"Request failed, status ".concat(
																	d.status
																)),
															t(r);
													}
												}),
													(d.ontimeout = function (
														e
													) {
														t(
															new Ub(
																[
																	"XHR request timed out after %d ms",
																	c,
																],
																{
																	originalError:
																		e,
																}
															)
														);
													}),
													(d.onerror = function () {
														var e = new Ja([
															"Post XHR failure, status %d",
															d.status,
														]);
														(e.statusCode =
															d.status),
															(e.message =
																d.response ||
																"Request failed, status ".concat(
																	d.status
																)),
															t(e);
													}),
													(d.onabort = function () {
														try {
															t(
																new DOMException(
																	"The request aborted.",
																	"AbortError"
																)
															);
														} catch (n) {
															var e = Error(
																"The request aborted."
															);
															(e.name =
																"AbortError"),
																t(e);
														}
													});
											})
										)
									);
								case 50:
								case "end":
									return e.stop();
							}
					},
					e,
					null,
					[[32, 41]]
				);
			})
		)).apply(this, arguments);
	}
	function Xn(e, t) {
		if (!De(e)) throw new ca("message object is not a plain object", t);
		if (void 0 === e.messageType)
			if (e.rawMessage instanceof Uint8Array) {
				if (((e.messageType = "RAW"), void 0 !== e.text))
					throw new ca(
						"Raw messages cannot have text property. Use description instead",
						t
					);
			} else {
				if ("string" != typeof e.text)
					throw new ca("messageType is undefined", t);
				if (((e.messageType = "TEXT"), void 0 !== e.rawMessage))
					throw new ca(
						"Text messages cannot have rawMessage property",
						t
					);
			}
	}
	function ph(e) {
		return xj.apply(this, arguments);
	}
	function xj() {
		return (xj = ma(
			N.mark(function e(t) {
				var n,
					r,
					o,
					i,
					s,
					a,
					c,
					u,
					l,
					f,
					h,
					p,
					d,
					b,
					g,
					v,
					y,
					m,
					E,
					w,
					O;
				return N.wrap(function (e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								if (
									((n = t.message),
									(r = t.peerId),
									(o = t.toPeer),
									(i = t.session),
									(s = t.errorCodes),
									(a = t.diff),
									(c = t.logger),
									void 0 !== i)
								) {
									e.next = 3;
									break;
								}
								throw new da(
									"The client is not logged in. Cannot do the operation",
									s.NOT_LOGGED_IN
								);
							case 3:
								if (
									((u = !1),
									(l = o
										? "TEXT" === n.messageType
											? Ka.P2pSMsgNoOfflineFlag
											: Ka.P2pRMsgNoOfflineFlag
										: "TEXT" === n.messageType
										? Ka.ChannelSMsg
										: Ka.ChannelRMsg),
									"TEXT" !== n.messageType ||
										!n.text.startsWith(
											"AgoraRTMLegacyEndcallCompatibleMessagePrefix"
										) ||
										!o)
								) {
									e.next = 14;
									break;
								}
								if (
									((f = n.text.split("_")),
									(h = $a(f, 3)),
									(p = h[0]),
									(d = h[1]),
									void 0 !== h[2] &&
										Ta(d) &&
										"AgoraRTMLegacyEndcallCompatibleMessagePrefix" ===
											p)
								) {
									e.next = 13;
									break;
								}
								throw (
									(i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "sentcount",
									}),
									i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "invalidmessagecount",
									}),
									new ca("Message is not valid", bg))
								);
							case 13:
								u = !0;
							case 14:
								if (
									((b = Date.now()),
									(g = i.messageSentTimes.length - 1),
									!(
										(v = i.messageSentTimes[g]) &&
										v + 3e3 < b
									))
								) {
									e.next = 21;
									break;
								}
								(i.messageSentTimes = [b]), (e.next = 34);
								break;
							case 21:
								y = g;
							case 22:
								if (!(0 <= y)) {
									e.next = 33;
									break;
								}
								if (!(i.messageSentTimes[y] + 3e3 < b)) {
									e.next = 26;
									break;
								}
								return (
									(i.messageSentTimes =
										i.messageSentTimes.slice(y + 1, g + 1)),
									e.abrupt("break", 33)
								);
							case 26:
								if (!(180 <= g - y + 1)) {
									e.next = 30;
									break;
								}
								throw (
									(i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "sentcount",
									}),
									i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "toooftencount",
									}),
									new ic(
										"Message sent failed, exceeded the 180 message in 3 seconds",
										s.TOO_OFTEN
									))
								);
							case 30:
								y--, (e.next = 22);
								break;
							case 33:
								i.messageSentTimes.push(b);
							case 34:
								(e.t0 = n.messageType),
									(e.next =
										"TEXT" === e.t0
											? 37
											: "RAW" === e.t0
											? 42
											: 44);
								break;
							case 37:
								if (!u) {
									e.next = 41;
									break;
								}
								return (
									(m = n.text.split("_")),
									(E = $a(m, 3)),
									(w = E[1]),
									(O = E[2]),
									c.info(
										"[rtm-API] EndCall message send api is called"
									),
									e.abrupt(
										"return",
										i.sendInvitationMessage({
											peerId: r,
											type: "CallCancel",
											extra: O,
											channelId: w,
											callId: "0",
										})
									)
								);
							case 41:
								return e.abrupt(
									"return",
									i.sendTextMessage(n.text, r, o, 1e4 - a)
								);
							case 42:
								return (
									void 0 === n.description &&
										(n.description = ""),
									e.abrupt(
										"return",
										i.sendRawMessage(
											n.rawMessage,
											n.description,
											r,
											o,
											1e4 - a
										)
									)
								);
							case 44:
								throw (
									(i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "sentcount",
									}),
									i.emit("messageCount", {
										messageCategory: l,
										type: "common",
										key: "invalidmessagecount",
									}),
									new ca("Invalid message type", bg))
								);
							case 47:
							case "end":
								return e.stop();
						}
				}, e);
			})
		)).apply(this, arguments);
	}
	function Lv(e) {
		var t =
				!(1 < arguments.length && void 0 !== arguments[1]) ||
				arguments[1],
			n = e.replace(/(https?:\/\/)?(www.)?/i, "");
		return (
			t ||
				(n = n
					.split(".")
					.slice(e.length - 2)
					.join(".")),
			-1 !== n.indexOf("/") ? n.split("/")[0] : n
		);
	}
	function La(e) {
		if ("string" != typeof e) return "[Sensitive Info]";
		var t = Math.floor(0.7 * e.length),
			n = e.length;
		return Yn(e, t, n, "*".repeat(n - t));
	}
	function Zn(e, t, n) {
		function r(o) {
			if (void 0 === e) return e;
			if (Mm(o)) return o;
			if (Array.isArray(o)) return o.map(r);
			var i = {},
				s = 0;
			for (o = qh(o); s < o.length; s++) {
				var a = $a(o[s], 2),
					c = a[0];
				if ("string" == typeof (a = a[1]) && n.includes(c)) {
					i[c] = "string" == typeof a ? La(a) : "[Sensitive Info]";
					break;
				}
				t.includes(c)
					? (i[c] = "[Hidden Info]")
					: (i[c] =
							null == a
								? a
								: n.includes(c)
								? "[Sensitive Info]"
								: r(a));
			}
			return i;
		}
		return Array.isArray(e) ? e.map(r) : r(e);
	}
	function $n(e) {
		return (
			Object.getOwnPropertyNames(e).forEach(function (t) {
				"object" == qa((t = e[t])) && null !== t && $n(t);
			}),
			Object.freeze(e)
		);
	}
	function cg(e) {
		return new TextDecoder("utf-8").decode(
			e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
		);
	}
	function rh(e) {
		return new TextEncoder().encode(e).length;
	}
	function ao() {
		for (var e = 0, t = arguments.length, n = Array(t), r = 0; r < t; r++)
			n[r] = arguments[r];
		for (t = 0; t < n.length; t++) e += n[t].length;
		for (e = new Uint8Array(e), r = t = 0; r < n.length; r++) {
			var o = n[r];
			e.set(o, t), (t += o.length);
		}
		return e;
	}
	function Xe(e, t, n) {
		var r = e.match(/([^?#]+)(\?[^#]*)?(#.*)?/);
		if (
			((e = null == r ? void 0 : r[1]), (r = null == r ? void 0 : r[2]))
		) {
			var o;
			for (r = r.substr(1).split("&"), o = 0; o < r.length; o++)
				if (r[o].split("=")[0] == t) {
					r[o] = t + "=" + encodeURIComponent(n);
					break;
				}
			return (
				o == r.length && r.push(t + "=" + encodeURIComponent(n)),
				e + "?" + r.join("&")
			);
		}
		return e + "?" + t + "=" + encodeURIComponent(n);
	}
	function Yn(e, t, n, r) {
		return "string" != typeof e
			? "[Sensitive Info]"
			: e.substring(0, t) + r + e.substring(n);
	}
	function $f(e) {
		return (
			"string" == typeof e &&
			0 !== e.length &&
			"false" !== e &&
			"null" !== e &&
			"undefined" !== e
		);
	}
	function Mv(e, t) {
		var n = "".concat(e, "Uri");
		if ("number" != typeof (n = yj[n]) || 0 === n)
			throw new TypeError("Got Unknown URI Name");
		return (
			(t = new (e = bo[e])(t)),
			(t = e.encode(t).finish()),
			new Nv({ uri: n, data: t })
		);
	}
	function co(e, t) {
		var n = $f(null);
		return ""
			.concat(e.split(".").join("-"), ".edge.")
			.concat(n ? null : t ? "sd-rtn.com" : "agora.io");
	}
	function sh(e, t) {
		return P.fromValue(e).eq(t);
	}
	function th(e, t) {
		var n = void 0 === t ? e.val : t,
			r = e.isBoolean;
		t = e.isNumber;
		var o = e.oneof,
			i = e.len;
		if (
			2 !==
			[r, t, o].filter(function (e) {
				return !e;
			}).length
		)
			throw new TypeError("invalid field type");
		if (
			void 0 !== n &&
			((e = !1),
			void 0 !== o &&
				((o = zj(o)),
				Ov(o, sh).length === o.length &&
					void 0 !==
						Pv(o, function (e) {
							return sh(n, e);
						}) &&
					(e = !0)),
			(r = void 0 !== r && (0 === n || 1 === n) && 1 === i),
			(t = void 0 !== t && n.toString(2).length <= i),
			!(e || r || t))
		)
			throw Error("invalid field value");
	}
	function eo(e) {
		return e.reduce(function (e, t) {
			return e.concat(t instanceof uh.UnsubscriptionError ? t.errors : t);
		}, []);
	}
	function Qv(e, t) {
		do {
			2147483647 == dg ? (dg = 0) : dg++;
		} while (Ze.hasOwnProperty(dg));
		var n = dg;
		return (
			(Ze[n] = {
				callback: e,
				parameters: Array.prototype.slice.call(arguments, 2),
			}),
			Aj.postMessage({ name: "setInterval", fakeId: n, time: t }),
			n
		);
	}
	function fo(e) {
		return function () {
			var t = e();
			if (!t)
				throw new da(
					"Client is not logged in. Cannot do the operation"
				);
			return t;
		};
	}
	var Ya =
			"undefined" != typeof globalThis
				? globalThis
				: "undefined" != typeof window
				? window
				: "undefined" != typeof global
				? global
				: "undefined" != typeof self
				? self
				: {},
		vh = function (e) {
			return e && e.Math == Math && e;
		},
		R =
			vh("object" == typeof globalThis && globalThis) ||
			vh("object" == typeof window && window) ||
			vh("object" == typeof self && self) ||
			vh("object" == typeof Ya && Ya) ||
			(function () {
				return this;
			})() ||
			Function("return this")(),
		la = function (e) {
			try {
				return !!e();
			} catch (e) {
				return !0;
			}
		},
		wa = !la(function () {
			return (
				7 !=
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1]
			);
		}),
		go = {}.propertyIsEnumerable,
		ho = Object.getOwnPropertyDescriptor,
		eg =
			ho && !go.call({ 1: 2 }, 1)
				? function (e) {
						return !!(e = ho(this, e)) && e.enumerable;
				  }
				: go,
		Nc = function (e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t,
			};
		},
		Rv = {}.toString,
		xc = function (e) {
			return Rv.call(e).slice(8, -1);
		},
		Sv = "".split,
		fg = la(function () {
			return !Object("z").propertyIsEnumerable(0);
		})
			? function (e) {
					return "String" == xc(e) ? Sv.call(e, "") : Object(e);
			  }
			: Object,
		Eb = function (e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e;
		},
		Mb = function (e) {
			return fg(Eb(e));
		},
		xa = function (e) {
			return "object" == typeof e ? null !== e : "function" == typeof e;
		},
		Oc = function (e, t) {
			if (!xa(e)) return e;
			var n, r;
			if (
				(t &&
					"function" == typeof (n = e.toString) &&
					!xa((r = n.call(e)))) ||
				("function" == typeof (n = e.valueOf) &&
					!xa((r = n.call(e)))) ||
				(!t &&
					"function" == typeof (n = e.toString) &&
					!xa((r = n.call(e))))
			)
				return r;
			throw TypeError("Can't convert object to primitive value");
		},
		pb = function (e) {
			return Object(Eb(e));
		},
		Tv = {}.hasOwnProperty,
		ka = function (e, t) {
			return Tv.call(pb(e), t);
		},
		$e = R.document,
		wh = xa($e) && xa($e.createElement),
		io =
			!wa &&
			!la(function () {
				return (
					7 !=
					Object.defineProperty(
						wh ? $e.createElement("div") : {},
						"a",
						{
							get: function () {
								return 7;
							},
						}
					).a
				);
			}),
		jo = Object.getOwnPropertyDescriptor,
		dc = {
			f: wa
				? jo
				: function (e, t) {
						if (((e = Mb(e)), (t = Oc(t, !0)), io))
							try {
								return jo(e, t);
							} catch (e) {}
						if (ka(e, t)) return Nc(!eg.call(e, t), e[t]);
				  },
		},
		Ia = function (e) {
			if (!xa(e)) throw TypeError(String(e) + " is not an object");
			return e;
		},
		ko = Object.defineProperty,
		qb = {
			f: wa
				? ko
				: function (e, t, n) {
						if ((Ia(e), (t = Oc(t, !0)), Ia(n), io))
							try {
								return ko(e, t, n);
							} catch (e) {}
						if ("get" in n || "set" in n)
							throw TypeError("Accessors not supported");
						return "value" in n && (e[t] = n.value), e;
				  },
		},
		kb = wa
			? function (e, t, n) {
					return qb.f(e, t, Nc(1, n));
			  }
			: function (e, t, n) {
					return (e[t] = n), e;
			  },
		Bj = function (e, t) {
			try {
				kb(R, e, t);
			} catch (n) {
				R[e] = t;
			}
			return t;
		},
		zd = R["__core-js_shared__"] || Bj("__core-js_shared__", {}),
		Uv = Function.toString;
	"function" != typeof zd.inspectSource &&
		(zd.inspectSource = function (e) {
			return Uv.call(e);
		});
	var Cj = zd.inspectSource,
		lo = R.WeakMap,
		Vv = "function" == typeof lo && /native code/.test(Cj(lo)),
		Ad = xb(function (e) {
			(e.exports = function (e, t) {
				return zd[e] || (zd[e] = void 0 !== t ? t : {});
			})("versions", []).push({
				version: "3.12.1",
				mode: "global",
				copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
			});
		}),
		Wv = 0,
		Xv = Math.random(),
		af = function (e) {
			return (
				"Symbol(" +
				String(void 0 === e ? "" : e) +
				")_" +
				(++Wv + Xv).toString(36)
			);
		},
		mo = Ad("keys"),
		xh = function (e) {
			return mo[e] || (mo[e] = af(e));
		},
		bf = {},
		Yv = R.WeakMap;
	if (Vv || zd.state)
		var ce = zd.state || (zd.state = new Yv()),
			Zv = ce.get,
			no = ce.has,
			$v = ce.set,
			Dj = function (e, t) {
				if (no.call(ce, e))
					throw new TypeError("Object already initialized");
				return (t.facade = e), $v.call(ce, e, t), t;
			},
			yh = function (e) {
				return Zv.call(ce, e) || {};
			},
			Ej = function (e) {
				return no.call(ce, e);
			};
	else {
		var cf = xh("state");
		(bf[cf] = !0),
			(Dj = function (e, t) {
				if (ka(e, cf))
					throw new TypeError("Object already initialized");
				return (t.facade = e), kb(e, cf, t), t;
			}),
			(yh = function (e) {
				return ka(e, cf) ? e[cf] : {};
			}),
			(Ej = function (e) {
				return ka(e, cf);
			});
	}
	var cb = {
			set: Dj,
			get: yh,
			has: Ej,
			enforce: function (e) {
				return Ej(e) ? yh(e) : Dj(e, {});
			},
			getterFor: function (e) {
				return function (t) {
					var n;
					if (!xa(t) || (n = yh(t)).type !== e)
						throw TypeError(
							"Incompatible receiver, " + e + " required"
						);
					return n;
				};
			},
		},
		Za = xb(function (e) {
			var t = cb.get,
				n = cb.enforce,
				r = String(String).split("String");
			(e.exports = function (e, t, o, i) {
				var s = !!i && !!i.unsafe,
					a = !!i && !!i.enumerable;
				if (((i = !!i && !!i.noTargetGet), "function" == typeof o)) {
					"string" != typeof t || ka(o, "name") || kb(o, "name", t);
					var c = n(o);
					c.source ||
						(c.source = r.join("string" == typeof t ? t : ""));
				}
				e === R
					? a
						? (e[t] = o)
						: Bj(t, o)
					: (s ? !i && e[t] && (a = !0) : delete e[t],
					  a ? (e[t] = o) : kb(e, t, o));
			})(Function.prototype, "toString", function () {
				return (
					("function" == typeof this && t(this).source) || Cj(this)
				);
			});
		}),
		oo = function (e) {
			return "function" == typeof e ? e : void 0;
		},
		Pc = function (e, t) {
			return 2 > arguments.length
				? oo(R[e]) || oo(R[e])
				: (R[e] && R[e][t]) || (R[e] && R[e][t]);
		},
		aw = Math.ceil,
		bw = Math.floor,
		yc = function (e) {
			return isNaN((e = +e)) ? 0 : (0 < e ? bw : aw)(e);
		},
		cw = Math.min,
		Ma = function (e) {
			return 0 < e ? cw(yc(e), 9007199254740991) : 0;
		},
		dw = Math.max,
		ew = Math.min,
		Vb = function (e, t) {
			return 0 > (e = yc(e)) ? dw(e + t, 0) : ew(e, t);
		},
		po = function (e) {
			return function (t, n, r) {
				t = Mb(t);
				var o = Ma(t.length);
				if (((r = Vb(r, o)), e && n != n)) {
					for (; o > r; ) if ((n = t[r++]) != n) return !0;
				} else
					for (; o > r; r++)
						if ((e || r in t) && t[r] === n) return e || r || 0;
				return !e && -1;
			};
		},
		qo = po(!0),
		Fj = po(!1),
		ro = function (e, t) {
			e = Mb(e);
			var n,
				r = 0,
				o = [];
			for (n in e) !ka(bf, n) && ka(e, n) && o.push(n);
			for (; t.length > r; )
				ka(e, (n = t[r++])) && (~Fj(o, n) || o.push(n));
			return o;
		},
		zh =
			"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
				" "
			),
		fw = zh.concat("length", "prototype"),
		de = {
			f:
				Object.getOwnPropertyNames ||
				function (e) {
					return ro(e, fw);
				},
		},
		gg = { f: Object.getOwnPropertySymbols },
		so =
			Pc("Reflect", "ownKeys") ||
			function (e) {
				var t = de.f(Ia(e)),
					n = gg.f;
				return n ? t.concat(n(e)) : t;
			},
		to = function (e, t) {
			for (var n = so(t), r = qb.f, o = dc.f, i = 0; i < n.length; i++) {
				var s = n[i];
				ka(e, s) || r(e, s, o(t, s));
			}
		},
		gw = /#|\.prototype\./,
		Qc = function (e, t) {
			return (
				(e = hw[iw(e)]) == jw ||
				(e != kw && ("function" == typeof t ? la(t) : !!t))
			);
		},
		iw = (Qc.normalize = function (e) {
			return String(e).replace(gw, ".").toLowerCase();
		}),
		hw = (Qc.data = {}),
		kw = (Qc.NATIVE = "N"),
		jw = (Qc.POLYFILL = "P"),
		lw = dc.f,
		ea = function (e, t) {
			var n,
				r,
				o,
				i = e.target,
				s = e.global,
				a = e.stat;
			if ((r = s ? R : a ? R[i] || Bj(i, {}) : (R[i] || {}).prototype))
				for (o in t) {
					var c = t[o],
						u = e.noTargetGet ? (n = lw(r, o)) && n.value : r[o];
					if (
						!(n = Qc(s ? o : i + (a ? "." : "#") + o, e.forced)) &&
						void 0 !== u
					) {
						if (typeof c == typeof u) continue;
						to(c, u);
					}
					(e.sham || (u && u.sham)) && kb(c, "sham", !0);
					try {
						Za(r, o, c, e);
					} catch (e) {}
				}
		},
		Gj = function () {
			var e = Ia(this),
				t = "";
			return (
				e.global && (t += "g"),
				e.ignoreCase && (t += "i"),
				e.multiline && (t += "m"),
				e.dotAll && (t += "s"),
				e.unicode && (t += "u"),
				e.sticky && (t += "y"),
				t
			);
		},
		Rc = la(function () {
			var e = /a/y;
			return (e.lastIndex = 2), null != e.exec("abcd");
		}),
		mw = la(function () {
			var e = /^r/gy;
			return (e.lastIndex = 2), null != e.exec("str");
		}),
		Ah = RegExp.prototype.exec,
		nw = Ad("native-string-replace", String.prototype.replace),
		uo = Ah,
		Hj =
			((c = /a/),
			(b = /b*/g),
			Ah.call(c, "a"),
			Ah.call(b, "a"),
			0 !== c.lastIndex || 0 !== b.lastIndex),
		vo = Rc || mw,
		Ij = void 0 !== /()??/.exec("")[1],
		c,
		b;
	(Hj || Ij || vo) &&
		(uo = function (e) {
			var t,
				n = vo && this.sticky,
				r = Gj.call(this),
				o = this.source,
				i = 0,
				s = e;
			if (n) {
				-1 === (r = r.replace("y", "")).indexOf("g") && (r += "g"),
					(s = String(e).slice(this.lastIndex)),
					0 < this.lastIndex &&
						(!this.multiline ||
							(this.multiline &&
								"\n" !== e[this.lastIndex - 1])) &&
						((o = "(?: " + o + ")"), (s = " " + s), i++);
				var a = new RegExp("^(?:" + o + ")", r);
			}
			if ((Ij && (a = new RegExp("^" + o + "$(?!\\s)", r)), Hj))
				var c = this.lastIndex;
			var u = Ah.call(n ? a : this, s);
			return (
				n
					? u
						? ((u.input = u.input.slice(i)),
						  (u[0] = u[0].slice(i)),
						  (u.index = this.lastIndex),
						  (this.lastIndex += u[0].length))
						: (this.lastIndex = 0)
					: Hj &&
					  u &&
					  (this.lastIndex = this.global
							? u.index + u[0].length
							: c),
				Ij &&
					u &&
					1 < u.length &&
					nw.call(u[0], a, function () {
						for (t = 1; t < arguments.length - 2; t++)
							void 0 === arguments[t] && (u[t] = void 0);
					}),
				u
			);
		});
	var hg = uo;
	ea({ target: "RegExp", proto: !0, forced: /./.exec !== hg }, { exec: hg });
	var df = Pc("navigator", "userAgent") || "",
		wo = R.process,
		xo = wo && wo.versions,
		yo = xo && xo.v8;
	if (yo)
		var Bd = yo.split("."),
			Jj = 4 > Bd[0] ? 1 : Bd[0] + Bd[1];
	else
		df &&
			((Bd = df.match(/Edge\/(\d+)/)),
			(!Bd || 74 <= Bd[1]) &&
				(Bd = df.match(/Chrome\/(\d+)/)) &&
				(Jj = Bd[1]));
	var Cd = Jj && +Jj,
		Sc =
			!!Object.getOwnPropertySymbols &&
			!la(function () {
				return !String(Symbol()) || (!Symbol.sham && Cd && 41 > Cd);
			}),
		zo = Sc && !Symbol.sham && "symbol" == typeof Symbol.iterator,
		ig = Ad("wks"),
		jg = R.Symbol,
		ow = zo ? jg : (jg && jg.withoutSetter) || af,
		Fa = function (e) {
			return (
				(ka(ig, e) && (Sc || "string" == typeof ig[e])) ||
					(Sc && ka(jg, e)
						? (ig[e] = jg[e])
						: (ig[e] = ow("Symbol." + e))),
				ig[e]
			);
		},
		pw = Fa("species"),
		Kj = RegExp.prototype,
		qw = !la(function () {
			var e = /./;
			return (
				(e.exec = function () {
					var e = [];
					return (e.groups = { a: "7" }), e;
				}),
				"7" !== "".replace(e, "$<a>")
			);
		}),
		Ao = "$0" === "a".replace(/./, "$0"),
		Bo = Fa("replace"),
		Co = !!/./[Bo] && "" === /./[Bo]("a", "$0"),
		rw = !la(function () {
			var e = /(?:)/,
				t = e.exec;
			return (
				(e.exec = function () {
					return t.apply(this, arguments);
				}),
				2 !== (e = "ab".split(e)).length || "a" !== e[0] || "b" !== e[1]
			);
		}),
		Bh = function (e, t, n, r) {
			var o = Fa(e),
				i = !la(function () {
					var t = {};
					return (
						(t[o] = function () {
							return 7;
						}),
						7 != ""[e](t)
					);
				}),
				s =
					i &&
					!la(function () {
						var t = !1,
							n = /a/;
						return (
							"split" === e &&
								(((n = { constructor: {} }).constructor[pw] =
									function () {
										return n;
									}),
								(n.flags = ""),
								(n[o] = /./[o])),
							(n.exec = function () {
								return (t = !0), null;
							}),
							n[o](""),
							!t
						);
					});
			if (
				!i ||
				!s ||
				("replace" === e && (!qw || !Ao || Co)) ||
				("split" === e && !rw)
			) {
				var a = /./[o],
					c = (n = n(
						o,
						""[e],
						function (e, t, n, r, o) {
							var s = t.exec;
							return s === hg || s === Kj.exec
								? i && !o
									? { done: !0, value: a.call(t, n, r) }
									: { done: !0, value: e.call(n, t, r) }
								: { done: !1 };
						},
						{
							REPLACE_KEEPS_$0: Ao,
							REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Co,
						}
					))[1];
				Za(String.prototype, e, n[0]),
					Za(
						Kj,
						o,
						2 == t
							? function (e, t) {
									return c.call(e, this, t);
							  }
							: function (e) {
									return c.call(e, this);
							  }
					);
			}
			r && kb(Kj[o], "sham", !0);
		},
		sw = Fa("match"),
		Lj = function (e) {
			var t;
			return xa(e) && (void 0 !== (t = e[sw]) ? !!t : "RegExp" == xc(e));
		},
		Wb = function (e) {
			if ("function" != typeof e)
				throw TypeError(String(e) + " is not a function");
			return e;
		},
		tw = Fa("species"),
		ee = function (e, t) {
			var n;
			return void 0 === (e = Ia(e).constructor) || null == (n = Ia(e)[tw])
				? t
				: Wb(n);
		},
		Do = function (e) {
			return function (t, n) {
				(t = String(Eb(t))), (n = yc(n));
				var r,
					o = t.length;
				if (0 > n || n >= o) return e ? "" : void 0;
				var i = t.charCodeAt(n);
				return 55296 > i ||
					56319 < i ||
					n + 1 === o ||
					56320 > (r = t.charCodeAt(n + 1)) ||
					57343 < r
					? e
						? t.charAt(n)
						: i
					: e
					? t.slice(n, n + 2)
					: r - 56320 + ((i - 55296) << 10) + 65536;
			};
		},
		uw = Do(!1),
		Eo = Do(!0),
		Mj = function (e, t, n) {
			return t + (n ? Eo(e, t).length : 1);
		},
		ef = function (e, t) {
			var n = e.exec;
			if ("function" == typeof n) {
				if ("object" != typeof (e = n.call(e, t)))
					throw TypeError(
						"RegExp exec method returned something other than an Object or null"
					);
				return e;
			}
			if ("RegExp" !== xc(e))
				throw TypeError("RegExp#exec called on incompatible receiver");
			return hg.call(e, t);
		},
		vw = [].push,
		ww = Math.min;
	Bh(
		"split",
		2,
		function (e, t, n) {
			var r =
				"c" == "abbc".split(/(b)*/)[1] ||
				4 != "test".split(/(?:)/, -1).length ||
				2 != "ab".split(/(?:ab)*/).length ||
				4 != ".".split(/(.?)(.?)/).length ||
				1 < ".".split(/()()/).length ||
				"".split(/.?/).length
					? function (e, n) {
							var r = String(Eb(this));
							if (0 === (n = void 0 === n ? 4294967295 : n >>> 0))
								return [];
							if (void 0 === e) return [r];
							if (!Lj(e)) return t.call(r, e, n);
							var o,
								i,
								s,
								a = [],
								c = 0;
							for (
								e = new RegExp(
									e.source,
									(e.ignoreCase ? "i" : "") +
										(e.multiline ? "m" : "") +
										(e.unicode ? "u" : "") +
										(e.sticky ? "y" : "") +
										"g"
								);
								(o = hg.call(e, r)) &&
								!(
									(i = e.lastIndex) > c &&
									(a.push(r.slice(c, o.index)),
									1 < o.length &&
										o.index < r.length &&
										vw.apply(a, o.slice(1)),
									(s = o[0].length),
									(c = i),
									a.length >= n)
								);

							)
								e.lastIndex === o.index && e.lastIndex++;
							return (
								c === r.length
									? (s || !e.test("")) && a.push("")
									: a.push(r.slice(c)),
								a.length > n ? a.slice(0, n) : a
							);
					  }
					: "0".split(void 0, 0).length
					? function (e, n) {
							return void 0 === e && 0 === n
								? []
								: t.call(this, e, n);
					  }
					: t;
			return [
				function (t, n) {
					var o = Eb(this),
						i = null == t ? void 0 : t[e];
					return void 0 !== i
						? i.call(t, o, n)
						: r.call(String(o), t, n);
				},
				function (e, o) {
					var i = n(r, e, this, o, r !== t);
					if (i.done) return i.value;
					var s = Ia(e);
					e = String(this);
					var a = ee(s, RegExp);
					if (
						((i = s.unicode),
						(s = new a(
							Rc ? "^(?:" + s.source + ")" : s,
							(s.ignoreCase ? "i" : "") +
								(s.multiline ? "m" : "") +
								(s.unicode ? "u" : "") +
								(Rc ? "g" : "y")
						)),
						0 === (o = void 0 === o ? 4294967295 : o >>> 0))
					)
						return [];
					if (0 === e.length) return null === ef(s, e) ? [e] : [];
					var c = 0,
						u = 0;
					for (a = []; u < e.length; ) {
						s.lastIndex = Rc ? 0 : u;
						var l,
							f = ef(s, Rc ? e.slice(u) : e);
						if (
							null === f ||
							(l = ww(
								Ma(s.lastIndex + (Rc ? u : 0)),
								e.length
							)) === c
						)
							u = Mj(e, u, i);
						else {
							if ((a.push(e.slice(c, u)), a.length === o))
								return a;
							for (c = 1; c <= f.length - 1; c++)
								if ((a.push(f[c]), a.length === o)) return a;
							u = c = l;
						}
					}
					return a.push(e.slice(c)), a;
				},
			];
		},
		Rc
	);
	var xw =
			/^[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*/,
		yw =
			/[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*$/,
		Nj = function (e) {
			return function (t) {
				return (
					(t = String(Eb(t))),
					1 & e && (t = t.replace(xw, "")),
					2 & e && (t = t.replace(yw, "")),
					t
				);
			};
		};
	Nj(1), Nj(2);
	var Oj = Nj(3),
		Ch = R.parseInt,
		zw = /^[+-]?0[Xx]/,
		Fo =
			8 !== Ch("\t\n\v\f\r                　\u2028\u2029\ufeff08") ||
			22 !== Ch("\t\n\v\f\r                　\u2028\u2029\ufeff0x16")
				? function (e, t) {
						return (
							(e = Oj(String(e))),
							Ch(e, t >>> 0 || (zw.test(e) ? 16 : 10))
						);
				  }
				: Ch;
	ea({ global: !0, forced: parseInt != Fo }, { parseInt: Fo });
	var Dd = function (e, t, n) {
			if ((Wb(e), void 0 === t)) return e;
			switch (n) {
				case 0:
					return function () {
						return e.call(t);
					};
				case 1:
					return function (n) {
						return e.call(t, n);
					};
				case 2:
					return function (n, r) {
						return e.call(t, n, r);
					};
				case 3:
					return function (n, r, o) {
						return e.call(t, n, r, o);
					};
			}
			return function () {
				return e.apply(t, arguments);
			};
		},
		Ed =
			Array.isArray ||
			function (e) {
				return "Array" == xc(e);
			},
		Aw = Fa("species"),
		Dh = function (e, t) {
			if (Ed(e)) {
				var n = e.constructor;
				"function" != typeof n || (n !== Array && !Ed(n.prototype))
					? xa(n) && null === (n = n[Aw]) && (n = void 0)
					: (n = void 0);
			}
			return new (void 0 === n ? Array : n)(0 === t ? 0 : t);
		},
		Go = [].push,
		Fd = function (e) {
			var t = 1 == e,
				n = 2 == e,
				r = 3 == e,
				o = 4 == e,
				i = 6 == e,
				s = 7 == e,
				a = 5 == e || i;
			return function (c, u, l, f) {
				var h = pb(c),
					p = fg(h);
				(u = Dd(u, l, 3)), (l = Ma(p.length));
				var d,
					b = 0;
				for (
					f = f || Dh, c = t ? f(c, l) : n || s ? f(c, 0) : void 0;
					l > b;
					b++
				)
					if ((a || b in p) && ((d = u((f = p[b]), b, h)), e))
						if (t) c[b] = d;
						else if (d)
							switch (e) {
								case 3:
									return !0;
								case 5:
									return f;
								case 6:
									return b;
								case 2:
									Go.call(c, f);
							}
						else
							switch (e) {
								case 4:
									return !1;
								case 7:
									Go.call(c, f);
							}
				return i ? -1 : r || o ? o : c;
			};
		},
		fe = Fd(0),
		Ho = Fd(1),
		Io = Fd(2),
		Bw = Fd(3),
		Cw = Fd(4),
		Jo = Fd(5),
		Dw = Fd(6);
	Fd(7);
	var Ew = Fa("species"),
		kg = function (e) {
			return (
				51 <= Cd ||
				!la(function () {
					var t = [];
					return (
						((t.constructor = {})[Ew] = function () {
							return { foo: 1 };
						}),
						1 !== t[e](Boolean).foo
					);
				})
			);
		},
		Fw = kg("filter");
	ea(
		{ target: "Array", proto: !0, forced: !Fw },
		{
			filter: function (e) {
				return Io(
					this,
					e,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var ed =
			Object.keys ||
			function (e) {
				return ro(e, zh);
			},
		Gw = la(function () {
			ed(1);
		});
	ea(
		{ target: "Object", stat: !0, forced: Gw },
		{
			keys: function (e) {
				return ed(pb(e));
			},
		}
	);
	var ff = function (e, t) {
			var n = [][e];
			return (
				!!n &&
				la(function () {
					n.call(
						null,
						t ||
							function () {
								throw 1;
							},
						1
					);
				})
			);
		},
		Hw = [].join,
		Iw = fg != Object,
		Jw = ff("join", ",");
	ea(
		{ target: "Array", proto: !0, forced: Iw || !Jw },
		{
			join: function (e) {
				return Hw.call(Mb(this), void 0 === e ? "," : e);
			},
		}
	);
	var Kw = kg("map");
	ea(
		{ target: "Array", proto: !0, forced: !Kw },
		{
			map: function (e) {
				return Ho(
					this,
					e,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var Pj = function (e) {
			var t = e.return;
			if (void 0 !== t) return Ia(t.call(e)).value;
		},
		gf = {},
		Lw = Fa("iterator"),
		Mw = Array.prototype,
		Qj = function (e) {
			return void 0 !== e && (gf.Array === e || Mw[Lw] === e);
		},
		hf = function (e, t, n) {
			(t = Oc(t)) in e ? qb.f(e, t, Nc(0, n)) : (e[t] = n);
		},
		Nw = Fa("toStringTag"),
		Ko = {};
	Ko[Nw] = "z";
	var Rj = "[object z]" === String(Ko),
		Ow = Fa("toStringTag"),
		Pw =
			"Arguments" ==
			xc(
				(function () {
					return arguments;
				})()
			),
		jf = Rj
			? xc
			: function (e) {
					var t;
					if (void 0 === e) var n = "Undefined";
					else {
						if (null === e) var r = "Null";
						else {
							e: {
								var o = (e = Object(e));
								try {
									r = o[Ow];
									break e;
								} catch (e) {}
								r = void 0;
							}
							r =
								"string" == typeof (n = r)
									? n
									: Pw
									? xc(e)
									: "Object" == (t = xc(e)) &&
									  "function" == typeof e.callee
									? "Arguments"
									: t;
						}
						n = r;
					}
					return n;
			  },
		Qw = Fa("iterator"),
		lg = function (e) {
			if (null != e) return e[Qw] || e["@@iterator"] || gf[jf(e)];
		},
		ge = function (e) {
			var t,
				n = pb(e),
				r = "function" == typeof this ? this : Array,
				o = arguments.length,
				i = 1 < o ? arguments[1] : void 0,
				s = void 0 !== i,
				a = lg(n),
				c = 0;
			if (
				(s && (i = Dd(i, 2 < o ? arguments[2] : void 0, 2)),
				null == a || (r == Array && Qj(a)))
			) {
				var u = Ma(n.length);
				for (r = new r(u); u > c; c++)
					(a = s ? i(n[c], c) : n[c]), hf(r, c, a);
			} else
				for (
					o = (n = a.call(n)).next, r = new r();
					!(t = o.call(n)).done;
					c++
				) {
					if (s) {
						a = n;
						var l = i;
						t = [t.value, c];
						try {
							u = l(Ia(t)[0], t[1]);
						} catch (e) {
							throw (Pj(a), e);
						}
					} else u = t.value;
					hf(r, c, (a = u));
				}
			return (r.length = c), r;
		},
		Lo = Fa("iterator"),
		Mo = !1;
	try {
		var Rw = 0,
			No = {
				next: function () {
					return { done: !!Rw++ };
				},
				return: function () {
					Mo = !0;
				},
			};
		(No[Lo] = function () {
			return this;
		}),
			Array.from(No, function () {
				throw 2;
			});
	} catch (c) {}
	var Eh = function (e, t) {
			if (!t && !Mo) return !1;
			var n = !1;
			try {
				((t = {})[Lo] = function () {
					return {
						next: function () {
							return { done: (n = !0) };
						},
					};
				}),
					e(t);
			} catch (e) {}
			return n;
		},
		Sw = !Eh(function (e) {
			Array.from(e);
		});
	ea({ target: "Array", stat: !0, forced: Sw }, { from: ge });
	var Oo = !la(function () {
			function e() {}
			return (
				(e.prototype.constructor = null),
				Object.getPrototypeOf(new e()) !== e.prototype
			);
		}),
		Po = xh("IE_PROTO"),
		Tw = Object.prototype,
		uc = Oo
			? Object.getPrototypeOf
			: function (e) {
					return (
						(e = pb(e)),
						ka(e, Po)
							? e[Po]
							: "function" == typeof e.constructor &&
							  e instanceof e.constructor
							? e.constructor.prototype
							: e instanceof Object
							? Tw
							: null
					);
			  },
		Sj = Fa("iterator"),
		Qo = !1,
		Uw = function () {
			return this;
		},
		he;
	if ([].keys) {
		var Ro = [].keys();
		if ("next" in Ro) {
			var So = uc(uc(Ro));
			So !== Object.prototype && (he = So);
		} else Qo = !0;
	}
	(null == he ||
		la(function () {
			var e = {};
			return he[Sj].call(e) !== e;
		})) &&
		(he = {}),
		ka(he, Sj) || kb(he, Sj, Uw);
	var Fh = he,
		Gh = Qo,
		To = wa
			? Object.defineProperties
			: function (e, t) {
					Ia(e);
					for (var n, r = ed(t), o = r.length, i = 0; o > i; )
						qb.f(e, (n = r[i++]), t[n]);
					return e;
			  },
		Tj = Pc("document", "documentElement"),
		Uo = xh("IE_PROTO"),
		Uj = function () {},
		Vj,
		Hh = function () {
			try {
				Vj = document.domain && new ActiveXObject("htmlfile");
			} catch (e) {}
			if (Vj) {
				var e = Vj;
				e.write("<script></script>"),
					e.close(),
					(e = e.parentWindow.Object);
			} else
				((e = wh ? $e.createElement("iframe") : {}).style.display =
					"none"),
					Tj.appendChild(e),
					(e.src = "javascript:"),
					(e = e.contentWindow.document).open(),
					e.write("<script>document.F=Object</script>"),
					e.close(),
					(e = e.F);
			for (Hh = e, e = zh.length; e--; ) delete Hh.prototype[zh[e]];
			return Hh();
		};
	bf[Uo] = !0;
	var jc =
			Object.create ||
			function (e, t) {
				if (null !== e) {
					Uj.prototype = Ia(e);
					var n = new Uj();
					(Uj.prototype = null), (n[Uo] = e);
				} else n = Hh();
				return void 0 === t ? n : To(n, t);
			},
		Vw = qb.f,
		Vo = Fa("toStringTag"),
		zc = function (e, t, n) {
			e &&
				!ka((e = n ? e : e.prototype), Vo) &&
				Vw(e, Vo, { configurable: !0, value: t });
		},
		Ww = function () {
			return this;
		},
		Wo = function (e, t, n) {
			return (
				(t += " Iterator"),
				(e.prototype = jc(Fh, { next: Nc(1, n) })),
				zc(e, t, !1),
				(gf[t] = Ww),
				e
			);
		},
		tb =
			Object.setPrototypeOf ||
			("__proto__" in {}
				? (function () {
						var e = !1,
							t = {};
						try {
							var n = Object.getOwnPropertyDescriptor(
								Object.prototype,
								"__proto__"
							).set;
							n.call(t, []), (e = t instanceof Array);
						} catch (e) {}
						return function (t, r) {
							if ((Ia(t), !xa(r) && null !== r))
								throw TypeError(
									"Can't set " + String(r) + " as a prototype"
								);
							return e ? n.call(t, r) : (t.__proto__ = r), t;
						};
				  })()
				: void 0),
		mg = Fa("iterator"),
		Xw = function () {
			return this;
		},
		Wj = function (e, t, n, r, o, i, s) {
			Wo(n, t, r),
				(r = function (e) {
					if (e === o && h) return h;
					if (!Gh && e in l) return l[e];
					switch (e) {
						case "keys":
						case "values":
						case "entries":
							return function () {
								return new n(this, e);
							};
					}
					return function () {
						return new n(this);
					};
				});
			var a,
				c = t + " Iterator",
				u = !1,
				l = e.prototype,
				f = l[mg] || l["@@iterator"] || (o && l[o]),
				h = (!Gh && f) || r(o),
				p = ("Array" == t && l.entries) || f;
			if (
				(p &&
					((e = uc(p.call(new e()))),
					Fh !== Object.prototype &&
						e.next &&
						(uc(e) !== Fh &&
							(tb
								? tb(e, Fh)
								: "function" != typeof e[mg] && kb(e, mg, Xw)),
						zc(e, c, !0))),
				"values" == o &&
					f &&
					"values" !== f.name &&
					((u = !0),
					(h = function () {
						return f.call(this);
					})),
				l[mg] !== h && kb(l, mg, h),
				(gf[t] = h),
				o)
			) {
				var d = {
					values: r("values"),
					keys: i ? h : r("keys"),
					entries: r("entries"),
				};
				if (s) for (a in d) (!Gh && !u && a in l) || Za(l, a, d[a]);
				else ea({ target: t, proto: !0, forced: Gh || u }, d);
			}
			return d;
		},
		Yw = cb.set,
		Zw = cb.getterFor("String Iterator");
	Wj(
		String,
		"String",
		function (e) {
			Yw(this, { type: "String Iterator", string: String(e), index: 0 });
		},
		function () {
			var e = Zw(this),
				t = e.string,
				n = e.index;
			return n >= t.length
				? { value: void 0, done: !0 }
				: ((t = Eo(t, n)),
				  (e.index += t.length),
				  { value: t, done: !1 });
		}
	);
	var Xj = Fa("unscopables"),
		Yj = Array.prototype;
	null == Yj[Xj] && qb.f(Yj, Xj, { configurable: !0, value: jc(null) });
	var ng = function (e) {
			Yj[Xj][e] = !0;
		},
		Xo = !0;
	"find" in [] &&
		Array(1).find(function () {
			Xo = !1;
		}),
		ea(
			{ target: "Array", proto: !0, forced: Xo },
			{
				find: function (e) {
					return Jo(
						this,
						e,
						1 < arguments.length ? arguments[1] : void 0
					);
				},
			}
		),
		ng("find");
	var Yo = function (e) {
		var t = String(Eb(this)),
			n = "";
		if (0 > (e = yc(e)) || 1 / 0 == e)
			throw RangeError("Wrong number of repetitions");
		for (; 0 < e; (e >>>= 1) && (t += t)) 1 & e && (n += t);
		return n;
	};
	ea({ target: "String", proto: !0 }, { repeat: Yo });
	var Zo = [].indexOf,
		$o = !!Zo && 0 > 1 / [1].indexOf(1, -0),
		$w = ff("indexOf");
	ea(
		{ target: "Array", proto: !0, forced: $o || !$w },
		{
			indexOf: function (e) {
				return $o
					? Zo.apply(this, arguments) || 0
					: Fj(this, e, 1 < arguments.length ? arguments[1] : void 0);
			},
		}
	);
	var Zt =
			/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
		$t = /CrOS/,
		au = /android|ipad|playbook|silk/i;
	(Ce.isMobile = Ce),
		(Ce.default = Ce),
		ea(
			{ target: "Number", stat: !0 },
			{ MAX_SAFE_INTEGER: 9007199254740991 }
		),
		ea(
			{ target: "Number", stat: !0 },
			{
				isNaN: function (e) {
					return e != e;
				},
			}
		),
		R.Number.isNaN;
	var ax = Rj
		? {}.toString
		: function () {
				return "[object " + jf(this) + "]";
		  };
	Rj || Za(Object.prototype, "toString", ax, { unsafe: !0 });
	var Ih = R.Promise,
		kf = function (e, t, n) {
			for (var r in t) Za(e, r, t[r], n);
			return e;
		},
		ap = Fa("species"),
		og = function (e) {
			e = Pc(e);
			var t = qb.f;
			wa &&
				e &&
				!e[ap] &&
				t(e, ap, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		},
		Ac = function (e, t, n) {
			if (!(e instanceof t))
				throw TypeError(
					"Incorrect " + (n ? n + " " : "") + "invocation"
				);
			return e;
		},
		pg = function (e, t) {
			(this.stopped = e), (this.result = t);
		},
		Jh = function (e, t, n) {
			var r,
				o = !(!n || !n.AS_ENTRIES),
				i = !(!n || !n.IS_ITERATOR),
				s = !(!n || !n.INTERRUPTED),
				a = Dd(t, n && n.that, 1 + o + s),
				c = function (e) {
					return u && Pj(u), new pg(!0, e);
				};
			if (
				((t = function (e) {
					return o
						? (Ia(e), s ? a(e[0], e[1], c) : a(e[0], e[1]))
						: s
						? a(e, c)
						: a(e);
				}),
				i)
			)
				var u = e;
			else {
				if ("function" != typeof (i = lg(e)))
					throw TypeError("Target is not iterable");
				if (Qj(i)) {
					for (i = 0, n = Ma(e.length); n > i; i++)
						if ((r = t(e[i])) && r instanceof pg) return r;
					return new pg(!1);
				}
				u = i.call(e);
			}
			for (e = u.next; !(i = e.call(u)).done; ) {
				try {
					r = t(i.value);
				} catch (e) {
					throw (Pj(u), e);
				}
				if ("object" == typeof r && r && r instanceof pg) return r;
			}
			return new pg(!1);
		},
		bp = /(?:iphone|ipod|ipad).*applewebkit/i.test(df),
		fd = "process" == xc(R.process),
		Kh = R.location,
		Zj = R.setImmediate,
		cp = R.clearImmediate,
		bx = R.process,
		dp = R.MessageChannel,
		ak = R.Dispatch,
		bk = 0,
		qg = {},
		ck = function (e) {
			if (qg.hasOwnProperty(e)) {
				var t = qg[e];
				delete qg[e], t();
			}
		},
		dk = function (e) {
			return function () {
				ck(e);
			};
		},
		ep = function (e) {
			ck(e.data);
		},
		fp = function (e) {
			R.postMessage(e + "", Kh.protocol + "//" + Kh.host);
		};
	if (!Zj || !cp)
		if (
			((Zj = function (e) {
				for (var t = [], n = 1; arguments.length > n; )
					t.push(arguments[n++]);
				return (
					(qg[++bk] = function () {
						("function" == typeof e ? e : Function(e)).apply(
							void 0,
							t
						);
					}),
					rg(bk),
					bk
				);
			}),
			(cp = function (e) {
				delete qg[e];
			}),
			fd)
		)
			var rg = function (e) {
				bx.nextTick(dk(e));
			};
		else if (ak && ak.now)
			rg = function (e) {
				ak.now(dk(e));
			};
		else if (dp && !bp) {
			var gp = new dp(),
				hp = gp.port2;
			(gp.port1.onmessage = ep), (rg = Dd(hp.postMessage, hp, 1));
		} else
			R.addEventListener &&
			"function" == typeof postMessage &&
			!R.importScripts &&
			Kh &&
			"file:" !== Kh.protocol &&
			!la(fp)
				? ((rg = fp), R.addEventListener("message", ep, !1))
				: (rg =
						"onreadystatechange" in
						(wh ? $e.createElement("script") : {})
							? function (e) {
									Tj.appendChild(
										wh ? $e.createElement("script") : {}
									).onreadystatechange = function () {
										Tj.removeChild(this), ck(e);
									};
							  }
							: function (e) {
									setTimeout(dk(e), 0);
							  });
	var ek = Zj,
		cx = /web0s(?!.*chrome)/i.test(df),
		dx = dc.f,
		ip = R.MutationObserver || R.WebKitMutationObserver,
		jp = R.document,
		kp = R.process,
		Lh = R.Promise,
		lp = dx(R, "queueMicrotask"),
		mp = lp && lp.value,
		ie,
		sg;
	if (!mp) {
		var Nh = function () {
			var e;
			for (fd && (e = kp.domain) && e.exit(); ie; ) {
				var t = ie.fn;
				ie = ie.next;
				try {
					t();
				} catch (e) {
					throw (ie ? Mh() : (sg = void 0), e);
				}
			}
			(sg = void 0), e && e.enter();
		};
		if (bp || fd || cx || !ip || !jp)
			if (Lh && Lh.resolve) {
				var fk = Lh.resolve(void 0);
				fk.constructor = Lh;
				var ex = fk.then,
					Mh = function () {
						ex.call(fk, Nh);
					};
			} else
				Mh = fd
					? function () {
							kp.nextTick(Nh);
					  }
					: function () {
							ek.call(R, Nh);
					  };
		else {
			var np = !0,
				op = jp.createTextNode("");
			new ip(Nh).observe(op, { characterData: !0 }),
				(Mh = function () {
					op.data = np = !np;
				});
		}
	}
	var pp =
			mp ||
			function (e) {
				(e = { fn: e, next: void 0 }),
					sg && (sg.next = e),
					ie || ((ie = e), Mh()),
					(sg = e);
			},
		fx = function (e) {
			var t, n;
			(this.promise = new e(function (e, r) {
				if (void 0 !== t || void 0 !== n)
					throw TypeError("Bad Promise constructor");
				(t = e), (n = r);
			})),
				(this.resolve = Wb(t)),
				(this.reject = Wb(n));
		},
		gk = {
			f: function (e) {
				return new fx(e);
			},
		},
		gx = function (e, t) {
			var n = R.console;
			n &&
				n.error &&
				(1 === arguments.length ? n.error(e) : n.error(e, t));
		},
		hk = function (e) {
			try {
				return { error: !1, value: e() };
			} catch (e) {
				return { error: !0, value: e };
			}
		},
		hx = "object" == typeof window,
		ix = Fa("species"),
		qp = cb.get,
		jx = cb.set,
		kx = cb.getterFor("Promise"),
		je = Ih && Ih.prototype,
		Xb = Ih,
		Oh = je,
		rp = R.TypeError,
		ik = R.document,
		jk = R.process,
		lf = gk.f,
		lx = lf,
		mx = !!(ik && ik.createEvent && R.dispatchEvent),
		sp = "function" == typeof PromiseRejectionEvent,
		tp = !1,
		tg = Qc("Promise", function () {
			var e = Cj(Xb) !== String(Xb);
			if (!e && 66 === Cd) return !0;
			if (51 <= Cd && /native code/.test(Xb)) return !1;
			var t = new Xb(function (e) {
					e(1);
				}),
				n = function (e) {
					e(
						function () {},
						function () {}
					);
				};
			return (
				((t.constructor = {})[ix] = n),
				!(tp = t.then(function () {}) instanceof n) || (!e && hx && !sp)
			);
		}),
		nx =
			tg ||
			!Eh(function (e) {
				Xb.all(e).catch(function () {});
			}),
		up = function (e) {
			var t;
			return !(!xa(e) || "function" != typeof (t = e.then)) && t;
		},
		kk = function (e, t) {
			if (!e.notified) {
				e.notified = !0;
				var n = e.reactions;
				pp(function () {
					for (
						var r = e.value, o = 1 == e.state, i = 0;
						n.length > i;

					) {
						var s,
							a = n[i++],
							c = o ? a.ok : a.fail,
							u = a.resolve,
							l = a.reject,
							f = a.domain;
						try {
							if (c) {
								if (
									(o ||
										(2 === e.rejection && ox(e),
										(e.rejection = 1)),
									!0 === c)
								)
									var h = r;
								else if ((f && f.enter(), (h = c(r)), f)) {
									f.exit();
									var p = !0;
								}
								h === a.promise
									? l(rp("Promise-chain cycle"))
									: (s = up(h))
									? s.call(h, u, l)
									: u(h);
							} else l(r);
						} catch (e) {
							f && !p && f.exit(), l(e);
						}
					}
					(e.reactions = []),
						(e.notified = !1),
						t && !e.rejection && px(e);
				});
			}
		},
		vp = function (e, t, n) {
			var r;
			if (mx) {
				var o = ik.createEvent("Event");
				(o.promise = t),
					(o.reason = n),
					o.initEvent(e, !1, !0),
					R.dispatchEvent(o);
			} else o = { promise: t, reason: n };
			!sp && (r = R["on" + e])
				? r(o)
				: "unhandledrejection" === e &&
				  gx("Unhandled promise rejection", n);
		},
		px = function (e) {
			ek.call(R, function () {
				var t = e.facade,
					n = e.value;
				if (1 !== e.rejection && !e.parent) {
					var r = hk(function () {
						fd
							? jk.emit("unhandledRejection", n, t)
							: vp("unhandledrejection", t, n);
					});
					if (
						((e.rejection =
							fd || (1 !== e.rejection && !e.parent) ? 2 : 1),
						r.error)
					)
						throw r.value;
				}
			});
		},
		ox = function (e) {
			ek.call(R, function () {
				var t = e.facade;
				fd
					? jk.emit("rejectionHandled", t)
					: vp("rejectionhandled", t, e.value);
			});
		},
		mf = function (e, t, n) {
			return function (r) {
				e(t, r, n);
			};
		},
		nf = function (e, t, n) {
			e.done ||
				((e.done = !0),
				n && (e = n),
				(e.value = t),
				(e.state = 2),
				kk(e, !0));
		},
		lk = function (e, t, n) {
			if (!e.done) {
				(e.done = !0), n && (e = n);
				try {
					if (e.facade === t)
						throw rp("Promise can't be resolved itself");
					var r = up(t);
					r
						? pp(function () {
								var n = { done: !1 };
								try {
									r.call(t, mf(lk, n, e), mf(nf, n, e));
								} catch (t) {
									nf(n, t, e);
								}
						  })
						: ((e.value = t), (e.state = 1), kk(e, !1));
				} catch (t) {
					nf({ done: !1 }, t, e);
				}
			}
		};
	if (tg) {
		(Xb = function (e) {
			Ac(this, Xb, "Promise"), Wb(e), mk.call(this);
			var t = qp(this);
			try {
				e(mf(lk, t), mf(nf, t));
			} catch (e) {
				nf(t, e);
			}
		}),
			(Oh = Xb.prototype);
		var mk = function (e) {
			jx(this, {
				type: "Promise",
				done: !1,
				notified: !1,
				parent: !1,
				reactions: [],
				rejection: !1,
				state: 0,
				value: void 0,
			});
		};
		mk.prototype = kf(Oh, {
			then: function (e, t) {
				var n = kx(this),
					r = lf(ee(this, Xb));
				return (
					(r.ok = "function" != typeof e || e),
					(r.fail = "function" == typeof t && t),
					(r.domain = fd ? jk.domain : void 0),
					(n.parent = !0),
					n.reactions.push(r),
					0 != n.state && kk(n, !1),
					r.promise
				);
			},
			catch: function (e) {
				return this.then(void 0, e);
			},
		});
		var qx = function () {
			var e = new mk(),
				t = qp(e);
			(this.promise = e),
				(this.resolve = mf(lk, t)),
				(this.reject = mf(nf, t));
		};
		if (
			((gk.f = lf =
				function (e) {
					return e === Xb || e === rx ? new qx(e) : lx(e);
				}),
			"function" == typeof Ih && je !== Object.prototype)
		) {
			var sx = je.then;
			tp ||
				(Za(
					je,
					"then",
					function (e, t) {
						var n = this;
						return new Xb(function (e, t) {
							sx.call(n, e, t);
						}).then(e, t);
					},
					{ unsafe: !0 }
				),
				Za(je, "catch", Oh.catch, { unsafe: !0 }));
			try {
				delete je.constructor;
			} catch (c) {}
			tb && tb(je, Oh);
		}
	}
	ea({ global: !0, wrap: !0, forced: tg }, { Promise: Xb }),
		zc(Xb, "Promise", !1),
		og("Promise");
	var rx = Pc("Promise");
	ea(
		{ target: "Promise", stat: !0, forced: tg },
		{
			reject: function (e) {
				var t = lf(this);
				return t.reject.call(void 0, e), t.promise;
			},
		}
	),
		ea(
			{ target: "Promise", stat: !0, forced: tg },
			{
				resolve: function (e) {
					if ((Ia(this), !xa(e) || e.constructor !== this)) {
						var t = gk.f(this);
						(0, t.resolve)(e), (e = t.promise);
					}
					return e;
				},
			}
		),
		ea(
			{ target: "Promise", stat: !0, forced: nx },
			{
				all: function (e) {
					var t = this,
						n = lf(t),
						r = n.resolve,
						o = n.reject,
						i = hk(function () {
							var n = Wb(t.resolve),
								i = [],
								s = 0,
								a = 1;
							Jh(e, function (e) {
								var c = s++,
									u = !1;
								i.push(void 0),
									a++,
									n.call(t, e).then(function (e) {
										u ||
											((u = !0), (i[c] = e), --a || r(i));
									}, o);
							}),
								--a || r(i);
						});
					return i.error && o(i.value), n.promise;
				},
				race: function (e) {
					var t = this,
						n = lf(t),
						r = n.reject,
						o = hk(function () {
							var o = Wb(t.resolve);
							Jh(e, function (e) {
								o.call(t, e).then(n.resolve, r);
							});
						});
					return o.error && r(o.value), n.promise;
				},
			}
		);
	var tx = Math.floor,
		ux = "".replace,
		vx = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
		wx = /\$([$&'`]|\d{1,2})/g,
		xx = function (e, t, n, r, o, i) {
			var s = n + e.length,
				a = r.length,
				c = wx;
			return (
				void 0 !== o && ((o = pb(o)), (c = vx)),
				ux.call(i, c, function (i, c) {
					switch (c.charAt(0)) {
						case "$":
							return "$";
						case "&":
							return e;
						case "`":
							return t.slice(0, n);
						case "'":
							return t.slice(s);
						case "<":
							i = o[c.slice(1, -1)];
							break;
						default:
							var u = +c;
							if (0 === u) return i;
							if (u > a)
								return 0 === (u = tx(u / 10))
									? i
									: u <= a
									? void 0 === r[u - 1]
										? c.charAt(1)
										: r[u - 1] + c.charAt(1)
									: i;
							i = r[u - 1];
					}
					return void 0 === i ? "" : i;
				})
			);
		},
		yx = Math.max,
		zx = Math.min;
	Bh("replace", 2, function (e, t, n, r) {
		var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
			i = r.REPLACE_KEEPS_$0,
			s = o ? "$" : "$0";
		return [
			function (n, r) {
				var o = Eb(this),
					i = null == n ? void 0 : n[e];
				return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r);
			},
			function (e, r) {
				if (
					(!o && i) ||
					("string" == typeof r && -1 === r.indexOf(s))
				) {
					var a = n(t, e, this, r);
					if (a.done) return a.value;
				}
				var c = Ia(e);
				(e = String(this)),
					(a = "function" == typeof r) || (r = String(r));
				var u = c.global;
				if (u) {
					var l = c.unicode;
					c.lastIndex = 0;
				}
				for (var f = []; ; ) {
					var h = ef(c, e);
					if (null === h) break;
					if ((f.push(h), !u)) break;
					"" === String(h[0]) &&
						(c.lastIndex = Mj(e, Ma(c.lastIndex), l));
				}
				for (l = "", u = c = 0; u < f.length; u++) {
					h = f[u];
					for (
						var p = String(h[0]),
							d = yx(zx(yc(h.index), e.length), 0),
							b = [],
							g = 1;
						g < h.length;
						g++
					) {
						var v = b,
							y = h[g];
						v.push.call(v, void 0 === y ? y : String(y));
					}
					(h = h.groups),
						a
							? ((b = [p].concat(b, d, e)),
							  void 0 !== h && b.push(h),
							  (h = String(r.apply(void 0, b))))
							: (h = xx(p, e, d, b, h, r)),
						d >= c &&
							((l += e.slice(c, d) + h), (c = d + p.length));
				}
				return l + e.slice(c);
			},
		];
	});
	var Ax = kg("slice"),
		Bx = Fa("species"),
		Cx = [].slice,
		Dx = Math.max;
	ea(
		{ target: "Array", proto: !0, forced: !Ax },
		{
			slice: function (e, t) {
				var n = Mb(this),
					r = Ma(n.length);
				if (
					((e = Vb(e, r)), (t = Vb(void 0 === t ? r : t, r)), Ed(n))
				) {
					var o = n.constructor;
					if (
						("function" != typeof o ||
						(o !== Array && !Ed(o.prototype))
							? xa(o) && null === (o = o[Bx]) && (o = void 0)
							: (o = void 0),
						o === Array || void 0 === o)
					)
						return Cx.call(n, e, t);
				}
				for (
					o = new (void 0 === o ? Array : o)(Dx(t - e, 0)), r = 0;
					e < t;
					e++, r++
				)
					e in n && hf(o, r, n[e]);
				return (o.length = r), o;
			},
		}
	);
	var Ex = cb.set,
		Fx = cb.getterFor("Array Iterator"),
		Gd = Wj(
			Array,
			"Array",
			function (e, t) {
				Ex(this, {
					type: "Array Iterator",
					target: Mb(e),
					index: 0,
					kind: t,
				});
			},
			function () {
				var e = Fx(this),
					t = e.target,
					n = e.kind,
					r = e.index++;
				return !t || r >= t.length
					? ((e.target = void 0), { value: void 0, done: !0 })
					: "keys" == n
					? { value: r, done: !1 }
					: "values" == n
					? { value: t[r], done: !1 }
					: { value: [r, t[r]], done: !1 };
			},
			"values"
		);
	(gf.Arguments = gf.Array), ng("keys"), ng("values"), ng("entries");
	var wp =
			"undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
		of = function (e) {
			if (void 0 === e) return 0;
			e = yc(e);
			var t = Ma(e);
			if (e !== t) throw RangeError("Wrong length or index");
			return t;
		},
		Gx = Math.abs,
		gd = Math.pow,
		Hx = Math.floor,
		Ix = Math.log,
		Jx = Math.LN2,
		xp = function (e) {
			var t = pb(this),
				n = Ma(t.length),
				r = arguments.length,
				o = Vb(1 < r ? arguments[1] : void 0, n);
			for (
				n =
					void 0 === (r = 2 < r ? arguments[2] : void 0)
						? n
						: Vb(r, n);
				n > o;

			)
				t[o++] = e;
			return t;
		},
		Kx = de.f,
		Lx = qb.f,
		pf = cb.get,
		yp = cb.set,
		Bc = R.ArrayBuffer,
		Yb = Bc,
		Cc = R.DataView,
		Ph = Cc && Cc.prototype,
		zp = Object.prototype,
		Qh = R.RangeError,
		Ap = function (e, t, n) {
			var r,
				o = Array(n),
				i = (1 << (n = 8 * n - t - 1)) - 1,
				s = i >> 1,
				a = 23 === t ? gd(2, -24) - gd(2, -77) : 0,
				c = 0 > e || (0 === e && 0 > 1 / e) ? 1 : 0,
				u = 0;
			if ((e = Gx(e)) != e || 1 / 0 === e) {
				e = e != e ? 1 : 0;
				var l = i;
			} else
				(l = Hx(Ix(e) / Jx)),
					1 > e * (r = gd(2, -l)) && (l--, (r *= 2)),
					2 <=
						(e = 1 <= l + s ? e + a / r : e + a * gd(2, 1 - s)) *
							r && (l++, (r /= 2)),
					l + s >= i
						? ((e = 0), (l = i))
						: 1 <= l + s
						? ((e = (e * r - 1) * gd(2, t)), (l += s))
						: ((e = e * gd(2, s - 1) * gd(2, t)), (l = 0));
			for (; 8 <= t; o[u++] = 255 & e, e /= 256, t -= 8);
			for (
				l = (l << t) | e, n += t;
				0 < n;
				o[u++] = 255 & l, l /= 256, n -= 8
			);
			return (o[--u] |= 128 * c), o;
		},
		Bp = function (e, t) {
			var n = e.length,
				r = 8 * n - t - 1,
				o = (1 << r) - 1,
				i = o >> 1;
			(r -= 7), --n;
			var s = e[n--],
				a = 127 & s;
			for (s >>= 7; 0 < r; a = 256 * a + e[n], n--, r -= 8);
			var c = a & ((1 << -r) - 1);
			for (a >>= -r, r += t; 0 < r; c = 256 * c + e[n], n--, r -= 8);
			if (0 === a) a = 1 - i;
			else {
				if (a === o) return c ? NaN : s ? -1 / 0 : 1 / 0;
				(c += gd(2, t)), (a -= i);
			}
			return (s ? -1 : 1) * c * gd(2, a - t);
		},
		Cp = function (e) {
			return [255 & e];
		},
		Dp = function (e) {
			return [255 & e, (e >> 8) & 255];
		},
		Ep = function (e) {
			return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
		},
		Fp = function (e) {
			return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
		},
		Mx = function (e) {
			return Ap(e, 23, 4);
		},
		Nx = function (e) {
			return Ap(e, 52, 8);
		},
		Rh = function (e, t) {
			Lx(e.prototype, t, {
				get: function () {
					return pf(this)[t];
				},
			});
		},
		Hd = function (e, t, n, r) {
			n = of(n);
			var o = pf(e);
			if (n + t > o.byteLength) throw Qh("Wrong index");
			return (
				(e = pf(o.buffer).bytes),
				(n += o.byteOffset),
				(t = e.slice(n, n + t)),
				r ? t : t.reverse()
			);
		},
		Id = function (e, t, n, r, o, i) {
			n = of(n);
			var s = pf(e);
			if (n + t > s.byteLength) throw Qh("Wrong index");
			for (
				e = pf(s.buffer).bytes, n += s.byteOffset, r = r(+o), o = 0;
				o < t;
				o++
			)
				e[n + o] = r[i ? o : t - o - 1];
		};
	if (wp) {
		if (
			!la(function () {
				Bc(1);
			}) ||
			!la(function () {
				new Bc(-1);
			}) ||
			la(function () {
				return (
					new Bc(), new Bc(1.5), new Bc(NaN), "ArrayBuffer" != Bc.name
				);
			})
		) {
			Yb = function (e) {
				return Ac(this, Yb), new Bc(of(e));
			};
			for (
				var Ox = (Yb.prototype = Bc.prototype), Gp = Kx(Bc), Hp = 0, nk;
				Gp.length > Hp;

			)
				(nk = Gp[Hp++]) in Yb || kb(Yb, nk, Bc[nk]);
			Ox.constructor = Yb;
		}
		tb && uc(Ph) !== zp && tb(Ph, zp);
		var Sh = new Cc(new Yb(2)),
			Ip = Ph.setInt8;
		Sh.setInt8(0, 2147483648),
			Sh.setInt8(1, 2147483649),
			(!Sh.getInt8(0) && Sh.getInt8(1)) ||
				kf(
					Ph,
					{
						setInt8: function (e, t) {
							Ip.call(this, e, (t << 24) >> 24);
						},
						setUint8: function (e, t) {
							Ip.call(this, e, (t << 24) >> 24);
						},
					},
					{ unsafe: !0 }
				);
	} else
		(Yb = function (e) {
			Ac(this, Yb, "ArrayBuffer"),
				(e = of(e)),
				yp(this, { bytes: xp.call(Array(e), 0), byteLength: e }),
				wa || (this.byteLength = e);
		}),
			(Cc = function (e, t, n) {
				Ac(this, Cc, "DataView"), Ac(e, Yb, "DataView");
				var r = pf(e).byteLength;
				if (0 > (t = yc(t)) || t > r) throw Qh("Wrong offset");
				if (t + (n = void 0 === n ? r - t : Ma(n)) > r)
					throw Qh("Wrong length");
				yp(this, { buffer: e, byteLength: n, byteOffset: t }),
					wa ||
						((this.buffer = e),
						(this.byteLength = n),
						(this.byteOffset = t));
			}),
			wa &&
				(Rh(Yb, "byteLength"),
				Rh(Cc, "buffer"),
				Rh(Cc, "byteLength"),
				Rh(Cc, "byteOffset")),
			kf(Cc.prototype, {
				getInt8: function (e) {
					return (Hd(this, 1, e)[0] << 24) >> 24;
				},
				getUint8: function (e) {
					return Hd(this, 1, e)[0];
				},
				getInt16: function (e) {
					var t = Hd(
						this,
						2,
						e,
						1 < arguments.length ? arguments[1] : void 0
					);
					return (((t[1] << 8) | t[0]) << 16) >> 16;
				},
				getUint16: function (e) {
					var t = Hd(
						this,
						2,
						e,
						1 < arguments.length ? arguments[1] : void 0
					);
					return (t[1] << 8) | t[0];
				},
				getInt32: function (e) {
					return Fp(
						Hd(
							this,
							4,
							e,
							1 < arguments.length ? arguments[1] : void 0
						)
					);
				},
				getUint32: function (e) {
					return (
						Fp(
							Hd(
								this,
								4,
								e,
								1 < arguments.length ? arguments[1] : void 0
							)
						) >>> 0
					);
				},
				getFloat32: function (e) {
					return Bp(
						Hd(
							this,
							4,
							e,
							1 < arguments.length ? arguments[1] : void 0
						),
						23
					);
				},
				getFloat64: function (e) {
					return Bp(
						Hd(
							this,
							8,
							e,
							1 < arguments.length ? arguments[1] : void 0
						),
						52
					);
				},
				setInt8: function (e, t) {
					Id(this, 1, e, Cp, t);
				},
				setUint8: function (e, t) {
					Id(this, 1, e, Cp, t);
				},
				setInt16: function (e, t) {
					Id(
						this,
						2,
						e,
						Dp,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
				setUint16: function (e, t) {
					Id(
						this,
						2,
						e,
						Dp,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
				setInt32: function (e, t) {
					Id(
						this,
						4,
						e,
						Ep,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
				setUint32: function (e, t) {
					Id(
						this,
						4,
						e,
						Ep,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
				setFloat32: function (e, t) {
					Id(
						this,
						4,
						e,
						Mx,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
				setFloat64: function (e, t) {
					Id(
						this,
						8,
						e,
						Nx,
						t,
						2 < arguments.length ? arguments[2] : void 0
					);
				},
			});
	zc(Yb, "ArrayBuffer"), zc(Cc, "DataView");
	var ug = { ArrayBuffer: Yb, DataView: Cc },
		ok = ug.ArrayBuffer,
		Jp = ug.DataView,
		Kp = ok.prototype.slice,
		Px = la(function () {
			return !new ok(2).slice(1, void 0).byteLength;
		});
	ea(
		{ target: "ArrayBuffer", proto: !0, unsafe: !0, forced: Px },
		{
			slice: function (e, t) {
				if (void 0 !== Kp && void 0 === t) return Kp.call(Ia(this), e);
				var n = Ia(this).byteLength;
				(e = Vb(e, n)),
					(t = Vb(void 0 === t ? n : t, n)),
					(n = new (ee(this, ok))(Ma(t - e)));
				for (var r = new Jp(this), o = new Jp(n), i = 0; e < t; )
					o.setUint8(i++, r.getUint8(e++));
				return n;
			},
		}
	);
	var Qx = qb.f,
		Th = R.Int8Array,
		pk = Th && Th.prototype,
		Lp = R.Uint8ClampedArray,
		Mp = Lp && Lp.prototype,
		Tc = Th && uc(Th),
		Dc = pk && uc(pk),
		Np = Object.prototype,
		Op = Np.isPrototypeOf,
		Pp = Fa("toStringTag"),
		qk = af("TYPED_ARRAY_TAG"),
		hd = wp && !!tb && "Opera" !== jf(R.opera),
		Qp = !1,
		Zb,
		Uc = {
			Int8Array: 1,
			Uint8Array: 1,
			Uint8ClampedArray: 1,
			Int16Array: 2,
			Uint16Array: 2,
			Int32Array: 4,
			Uint32Array: 4,
			Float32Array: 4,
			Float64Array: 8,
		},
		Rx = { BigInt64Array: 8, BigUint64Array: 8 },
		Uh = function (e) {
			return !!xa(e) && ((e = jf(e)), ka(Uc, e) || ka(Rx, e));
		};
	for (Zb in Uc) R[Zb] || (hd = !1);
	if (
		(!hd || "function" != typeof Tc || Tc === Function.prototype) &&
		((Tc = function () {
			throw TypeError("Incorrect invocation");
		}),
		hd)
	)
		for (Zb in Uc) R[Zb] && tb(R[Zb], Tc);
	if ((!hd || !Dc || Dc === Np) && ((Dc = Tc.prototype), hd))
		for (Zb in Uc) R[Zb] && tb(R[Zb].prototype, Dc);
	if ((hd && uc(Mp) !== Dc && tb(Mp, Dc), wa && !ka(Dc, Pp)))
		for (Zb in ((Qp = !0),
		Qx(Dc, Pp, {
			get: function () {
				return xa(this) ? this[qk] : void 0;
			},
		}),
		Uc))
			R[Zb] && kb(R[Zb], qk, Zb);
	var vg = hd,
		Rp = Qp && qk,
		Ua = function (e) {
			if (Uh(e)) return e;
			throw TypeError("Target is not a typed array");
		},
		qf = function (e) {
			if (tb) {
				if (Op.call(Tc, e)) return e;
			} else
				for (var t in Uc)
					if (ka(Uc, Zb)) {
						var n = R[t];
						if (n && (e === n || Op.call(n, e))) return e;
					}
			throw TypeError("Target is not a typed array constructor");
		},
		Ra = function (e, t, n) {
			if (wa) {
				if (n)
					for (var r in Uc) {
						var o = R[r];
						if (o && ka(o.prototype, e))
							try {
								delete o.prototype[e];
							} catch (e) {}
					}
				(Dc[e] && !n) || Za(Dc, e, n ? t : (hd && pk[e]) || t);
			}
		},
		Sp = function (e, t, n) {
			var r, o;
			if (wa) {
				if (tb) {
					if (n)
						for (r in Uc)
							if ((o = R[r]) && ka(o, e))
								try {
									delete o[e];
								} catch (e) {}
					if (Tc[e] && !n) return;
					try {
						return Za(Tc, e, n ? t : (hd && Tc[e]) || t);
					} catch (e) {}
				}
				for (r in Uc) !(o = R[r]) || (o[e] && !n) || Za(o, e, t);
			}
		},
		Tp = Tc,
		wg = Dc,
		Sx = R.ArrayBuffer,
		ke = R.Int8Array,
		rk =
			!vg ||
			!la(function () {
				ke(1);
			}) ||
			!la(function () {
				new ke(-1);
			}) ||
			!Eh(function (e) {
				new ke(), new ke(null), new ke(1.5), new ke(e);
			}, !0) ||
			la(function () {
				return 1 !== new ke(new Sx(2), 1, void 0).length;
			}),
		Vh = function (e, t) {
			if (0 > (e = yc(e)))
				throw RangeError("The argument can't be less than 0");
			if (e % t) throw RangeError("Wrong offset");
			return e;
		},
		sk = function (e) {
			var t = pb(e),
				n = arguments.length,
				r = 1 < n ? arguments[1] : void 0,
				o = void 0 !== r,
				i = lg(t);
			if (null != i && !Qj(i)) {
				var s = i.call(t),
					a = s.next;
				for (t = []; !(i = a.call(s)).done; ) t.push(i.value);
			}
			for (
				o && 2 < n && (r = Dd(r, arguments[2], 2)),
					i = Ma(t.length),
					s = new (qf(this))(i),
					n = 0;
				i > n;
				n++
			)
				s[n] = o ? r(t[n], n) : t[n];
			return s;
		},
		Wh = function (e, t, n) {
			var r, o;
			return (
				tb &&
					"function" == typeof (r = t.constructor) &&
					r !== n &&
					xa((o = r.prototype)) &&
					o !== n.prototype &&
					tb(e, o),
				e
			);
		},
		xg = xb(function (e) {
			var t = de.f,
				n = cb.get,
				r = cb.set,
				o = qb.f,
				i = dc.f,
				s = Math.round,
				a = R.RangeError,
				c = ug.ArrayBuffer,
				u = ug.DataView,
				l = function (e, t) {
					var n = 0,
						r = t.length;
					for (e = new (qf(e))(r); r > n; ) e[n] = t[n++];
					return e;
				},
				f = function (e, t) {
					o(e, t, {
						get: function () {
							return n(this)[t];
						},
					});
				},
				h = function (e) {
					var t;
					return (
						e instanceof c ||
						"ArrayBuffer" == (t = jf(e)) ||
						"SharedArrayBuffer" == t
					);
				},
				p = function (e, t) {
					return (
						Uh(e) &&
						"symbol" != typeof t &&
						t in e &&
						String(+t) == String(t)
					);
				},
				d = function (e, t) {
					return p(e, (t = Oc(t, !0))) ? Nc(2, e[t]) : i(e, t);
				},
				b = function (e, t, n) {
					return !(
						p(e, (t = Oc(t, !0))) &&
						xa(n) &&
						ka(n, "value")
					) ||
						ka(n, "get") ||
						ka(n, "set") ||
						n.configurable ||
						(ka(n, "writable") && !n.writable) ||
						(ka(n, "enumerable") && !n.enumerable)
						? o(e, t, n)
						: ((e[t] = n.value), e);
				};
			wa
				? (vg ||
						((dc.f = d),
						(qb.f = b),
						f(wg, "buffer"),
						f(wg, "byteOffset"),
						f(wg, "byteLength"),
						f(wg, "length")),
				  ea(
						{ target: "Object", stat: !0, forced: !vg },
						{ getOwnPropertyDescriptor: d, defineProperty: b }
				  ),
				  (e.exports = function (e, i, f) {
						var p = e.match(/\d+$/)[0] / 8,
							d = e + (f ? "Clamped" : "") + "Array",
							b = "get" + e,
							g = "set" + e,
							v = R[d],
							y = v;
						e = y && y.prototype;
						var m = {},
							E = function (e, t) {
								o(e, t, {
									get: function () {
										var e = n(this);
										return e.view[b](
											t * p + e.byteOffset,
											!0
										);
									},
									set: function (e) {
										var r = n(this);
										f &&
											(e =
												0 > (e = s(e))
													? 0
													: 255 < e
													? 255
													: 255 & e),
											r.view[g](
												t * p + r.byteOffset,
												e,
												!0
											);
									},
									enumerable: !0,
								});
							};
						vg
							? rk &&
							  ((y = i(function (e, t, n, r) {
									return (
										Ac(e, y, d),
										Wh(
											xa(t)
												? h(t)
													? void 0 !== r
														? new v(t, Vh(n, p), r)
														: void 0 !== n
														? new v(t, Vh(n, p))
														: new v(t)
													: Uh(t)
													? l(y, t)
													: sk.call(y, t)
												: new v(of(t)),
											e,
											y
										)
									);
							  })),
							  tb && tb(y, Tp),
							  fe(t(v), function (e) {
									e in y || kb(y, e, v[e]);
							  }),
							  (y.prototype = e))
							: ((y = i(function (e, t, n, o) {
									Ac(e, y, d);
									var i = 0,
										s = 0;
									if (xa(t)) {
										if (!h(t))
											return Uh(t)
												? l(y, t)
												: sk.call(y, t);
										var f = t;
										if (
											((s = Vh(n, p)),
											(t = t.byteLength),
											void 0 === o)
										) {
											if (t % p) throw a("Wrong length");
											if (0 > (o = t - s))
												throw a("Wrong length");
										} else if ((o = Ma(o) * p) + s > t)
											throw a("Wrong length");
										t = o / p;
									} else (t = of(t)), (f = new c((o = t * p)));
									for (
										r(e, {
											buffer: f,
											byteOffset: s,
											byteLength: o,
											length: t,
											view: new u(f),
										});
										i < t;

									)
										E(e, i++);
							  })),
							  tb && tb(y, Tp),
							  (e = y.prototype = jc(wg))),
							e.constructor !== y && kb(e, "constructor", y),
							Rp && kb(e, Rp, d),
							(m[d] = y),
							ea({ global: !0, forced: y != v, sham: !vg }, m),
							"BYTES_PER_ELEMENT" in y ||
								kb(y, "BYTES_PER_ELEMENT", p),
							"BYTES_PER_ELEMENT" in e ||
								kb(e, "BYTES_PER_ELEMENT", p),
							og(d);
				  }))
				: (e.exports = function () {});
		});
	xg("Uint8", function (e) {
		return function (t, n, r) {
			return e(this, t, n, r);
		};
	});
	var Tx = Math.min,
		Ux =
			[].copyWithin ||
			function (e, t) {
				var n = pb(this),
					r = Ma(n.length),
					o = Vb(e, r),
					i = Vb(t, r),
					s = 2 < arguments.length ? arguments[2] : void 0;
				for (
					r = Tx((void 0 === s ? r : Vb(s, r)) - i, r - o),
						s = 1,
						i < o &&
							o < i + r &&
							((s = -1), (i += r - 1), (o += r - 1));
					0 < r--;

				)
					i in n ? (n[o] = n[i]) : delete n[o], (o += s), (i += s);
				return n;
			};
	Ra("copyWithin", function (e, t) {
		return Ux.call(
			Ua(this),
			e,
			t,
			2 < arguments.length ? arguments[2] : void 0
		);
	}),
		Ra("every", function (e) {
			return Cw(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		}),
		Ra("fill", function (e) {
			return xp.apply(Ua(this), arguments);
		}),
		Ra("filter", function (e) {
			var t = Io(
					Ua(this),
					e,
					1 < arguments.length ? arguments[1] : void 0
				),
				n = ee(this, this.constructor),
				r = 0,
				o = t.length;
			for (n = new (qf(n))(o); o > r; ) n[r] = t[r++];
			return n;
		}),
		Ra("find", function (e) {
			return Jo(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		}),
		Ra("findIndex", function (e) {
			return Dw(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		}),
		Ra("forEach", function (e) {
			fe(Ua(this), e, 1 < arguments.length ? arguments[1] : void 0);
		}),
		Ra("includes", function (e) {
			return qo(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		}),
		Ra("indexOf", function (e) {
			return Fj(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		});
	var Up = Fa("iterator"),
		Vp = R.Uint8Array,
		Vx = Gd.values,
		Wx = Gd.keys,
		Xx = Gd.entries,
		tk = Vp && Vp.prototype[Up],
		Wp = !!tk && ("values" == tk.name || null == tk.name),
		Xp = function () {
			return Vx.call(Ua(this));
		};
	Ra("entries", function () {
		return Xx.call(Ua(this));
	}),
		Ra("keys", function () {
			return Wx.call(Ua(this));
		}),
		Ra("values", Xp, !Wp),
		Ra(Up, Xp, !Wp);
	var Yx = [].join;
	Ra("join", function (e) {
		return Yx.apply(Ua(this), arguments);
	});
	var Zx = Math.min,
		uk = [].lastIndexOf,
		Yp = !!uk && 0 > 1 / [1].lastIndexOf(1, -0),
		$x = ff("lastIndexOf"),
		ay =
			Yp || !$x
				? function (e) {
						if (Yp) return uk.apply(this, arguments) || 0;
						var t = Mb(this),
							n = Ma(t.length),
							r = n - 1;
						for (
							1 < arguments.length &&
								(r = Zx(r, yc(arguments[1]))),
								0 > r && (r = n + r);
							0 <= r;
							r--
						)
							if (r in t && t[r] === e) return r || 0;
						return -1;
				  }
				: uk;
	Ra("lastIndexOf", function (e) {
		return ay.apply(Ua(this), arguments);
	}),
		Ra("map", function (e) {
			return Ho(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0,
				function (e, t) {
					return new (qf(ee(e, e.constructor)))(t);
				}
			);
		});
	var Zp = function (e) {
			return function (t, n, r, o) {
				Wb(n), (t = pb(t));
				var i = fg(t),
					s = Ma(t.length),
					a = e ? s - 1 : 0,
					c = e ? -1 : 1;
				if (2 > r)
					for (;;) {
						if (a in i) {
							(o = i[a]), (a += c);
							break;
						}
						if (((a += c), e ? 0 > a : s <= a))
							throw TypeError(
								"Reduce of empty array with no initial value"
							);
					}
				for (; e ? 0 <= a : s > a; a += c)
					a in i && (o = n(o, i[a], a, t));
				return o;
			};
		},
		$p = Zp(!1),
		by = Zp(!0);
	Ra("reduce", function (e) {
		return $p(
			Ua(this),
			e,
			arguments.length,
			1 < arguments.length ? arguments[1] : void 0
		);
	}),
		Ra("reduceRight", function (e) {
			return by(
				Ua(this),
				e,
				arguments.length,
				1 < arguments.length ? arguments[1] : void 0
			);
		});
	var cy = Math.floor;
	Ra("reverse", function () {
		for (var e, t = Ua(this).length, n = cy(t / 2), r = 0; r < n; )
			(e = this[r]), (this[r++] = this[--t]), (this[t] = e);
		return this;
	});
	var dy = la(function () {
		new Int8Array(1).set({});
	});
	Ra(
		"set",
		function (e) {
			Ua(this);
			var t = Vh(1 < arguments.length ? arguments[1] : void 0, 1),
				n = this.length,
				r = pb(e),
				o = Ma(r.length),
				i = 0;
			if (o + t > n) throw RangeError("Wrong length");
			for (; i < o; ) this[t + i] = r[i++];
		},
		dy
	);
	var ey = [].slice,
		fy = la(function () {
			new Int8Array(1).slice();
		});
	Ra(
		"slice",
		function (e, t) {
			e = ey.call(Ua(this), e, t);
			var n = ee(this, this.constructor);
			t = 0;
			var r = e.length;
			for (n = new (qf(n))(r); r > t; ) n[t] = e[t++];
			return n;
		},
		fy
	),
		Ra("some", function (e) {
			return Bw(
				Ua(this),
				e,
				1 < arguments.length ? arguments[1] : void 0
			);
		});
	var gy = [].sort;
	Ra("sort", function (e) {
		return gy.call(Ua(this), e);
	}),
		Ra("subarray", function (e, t) {
			var n = Ua(this),
				r = n.length;
			return (
				(e = Vb(e, r)),
				new (ee(n, n.constructor))(
					n.buffer,
					n.byteOffset + e * n.BYTES_PER_ELEMENT,
					Ma((void 0 === t ? r : Vb(t, r)) - e)
				)
			);
		});
	var Xh = R.Int8Array,
		aq = [].toLocaleString,
		hy = [].slice,
		iy =
			!!Xh &&
			la(function () {
				aq.call(new Xh(1));
			}),
		jy =
			la(function () {
				return (
					[1, 2].toLocaleString() != new Xh([1, 2]).toLocaleString()
				);
			}) ||
			!la(function () {
				Xh.prototype.toLocaleString.call([1, 2]);
			});
	Ra(
		"toLocaleString",
		function () {
			return aq.apply(iy ? hy.call(Ua(this)) : Ua(this), arguments);
		},
		jy
	);
	var bq = R.Uint8Array,
		ky = (bq && bq.prototype) || {},
		Yh = [].toString,
		ly = [].join;
	la(function () {
		Yh.call({});
	}) &&
		(Yh = function () {
			return ly.call(this);
		}),
		Ra("toString", Yh, ky.toString != Yh);
	var cq = ug.ArrayBuffer;
	ea({ global: !0, forced: R.ArrayBuffer !== cq }, { ArrayBuffer: cq }),
		og("ArrayBuffer");
	var my = qb.f,
		vk = Function.prototype,
		ny = vk.toString,
		oy = /^\s*function ([^ (]*)/;
	!wa ||
		"name" in vk ||
		my(vk, "name", {
			configurable: !0,
			get: function () {
				try {
					return ny.call(this).match(oy)[1];
				} catch (e) {
					return "";
				}
			},
		});
	var dq = RegExp.prototype,
		eq = dq.toString,
		py = la(function () {
			return "/a/b" != eq.call({ source: "a", flags: "b" });
		}),
		qy = "toString" != eq.name;
	(py || qy) &&
		Za(
			RegExp.prototype,
			"toString",
			function () {
				var e = Ia(this),
					t = String(e.source),
					n = e.flags;
				return (
					"/" +
					t +
					"/" +
					(e = String(
						void 0 === n && e instanceof RegExp && !("flags" in dq)
							? Gj.call(e)
							: n
					))
				);
			},
			{ unsafe: !0 }
		);
	var ry = kg("splice"),
		sy = Math.max,
		ty = Math.min;
	ea(
		{ target: "Array", proto: !0, forced: !ry },
		{
			splice: function (e, t) {
				var n,
					r,
					o = pb(this),
					i = Ma(o.length),
					s = Vb(e, i),
					a = arguments.length;
				if (
					(0 === a
						? (a = n = 0)
						: 1 === a
						? ((a = 0), (n = i - s))
						: ((a -= 2), (n = ty(sy(yc(t), 0), i - s))),
					9007199254740991 < i + a - n)
				)
					throw TypeError("Maximum allowed length exceeded");
				var c = Dh(o, n);
				for (r = 0; r < n; r++) {
					var u = s + r;
					u in o && hf(c, r, o[u]);
				}
				if (((c.length = n), a < n)) {
					for (r = s; r < i - n; r++) {
						var l = r + a;
						(u = r + n) in o ? (o[l] = o[u]) : delete o[l];
					}
					for (r = i; r > i - n + a; r--) delete o[r - 1];
				} else if (a > n)
					for (r = i - n; r > s; r--)
						(l = r + a - 1),
							(u = r + n - 1) in o ? (o[l] = o[u]) : delete o[l];
				for (r = 0; r < a; r++) o[r + s] = arguments[r + 2];
				return (o.length = i - n + a), c;
			},
		}
	);
	var wk = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0,
		},
		xk = Fa("iterator"),
		fq = Fa("toStringTag"),
		yk = Gd.values,
		Zh;
	for (Zh in wk) {
		var gq = R[Zh],
			id = gq && gq.prototype;
		if (id) {
			if (id[xk] !== yk)
				try {
					kb(id, xk, yk);
				} catch (c) {
					id[xk] = yk;
				}
			if ((id[fq] || kb(id, fq, Zh), wk[Zh]))
				for (var rf in Gd)
					if (id[rf] !== Gd[rf])
						try {
							kb(id, rf, Gd[rf]);
						} catch (c) {
							id[rf] = Gd[rf];
						}
		}
	}
	var hq =
		Object.is ||
		function (e, t) {
			return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
		};
	Bh("search", 1, function (e, t, n) {
		return [
			function (t) {
				var n = Eb(this),
					r = null == t ? void 0 : t[e];
				return void 0 !== r
					? r.call(t, n)
					: new RegExp(t)[e](String(n));
			},
			function (e) {
				var r = n(t, e, this);
				if (r.done) return r.value;
				e = Ia(e);
				var o = String(this);
				return (
					(r = e.lastIndex),
					hq(r, 0) || (e.lastIndex = 0),
					(o = ef(e, o)),
					hq(e.lastIndex, r) || (e.lastIndex = r),
					null === o ? -1 : o.index
				);
			},
		];
	}),
		xb(function (e) {
			!(function (t, n) {
				e.exports ? (e.exports = n(t)) : n(t);
			})("undefined" != typeof self ? self : Ya, function (e) {
				function t(e) {
					return btoa(e)
						.replace(/=+$/, "")
						.replace(/\+/g, "-")
						.replace(/\//g, "_");
				}
				function n(e) {
					return (
						(e = (e += "===").slice(0, -e.length % 4)),
						atob(e.replace(/-/g, "+").replace(/_/g, "/"))
					);
				}
				function r(e) {
					for (
						var t = new Uint8Array(e.length), n = 0;
						n < e.length;
						n++
					)
						t[n] = e.charCodeAt(n);
					return t;
				}
				function o(e) {
					return (
						e instanceof ArrayBuffer && (e = new Uint8Array(e)),
						String.fromCharCode.apply(String, e)
					);
				}
				function i(e) {
					var t = {
						name: (e.name || e || "")
							.toUpperCase()
							.replace("V", "v"),
					};
					switch (t.name) {
						case "SHA-1":
						case "SHA-256":
						case "SHA-384":
						case "SHA-512":
							break;
						case "AES-CBC":
						case "AES-GCM":
						case "AES-KW":
							e.length && (t.length = e.length);
							break;
						case "HMAC":
							e.hash && (t.hash = i(e.hash)),
								e.length && (t.length = e.length);
							break;
						case "RSAES-PKCS1-v1_5":
							e.publicExponent &&
								(t.publicExponent = new Uint8Array(
									e.publicExponent
								)),
								e.modulusLength &&
									(t.modulusLength = e.modulusLength);
							break;
						case "RSASSA-PKCS1-v1_5":
						case "RSA-OAEP":
							e.hash && (t.hash = i(e.hash)),
								e.publicExponent &&
									(t.publicExponent = new Uint8Array(
										e.publicExponent
									)),
								e.modulusLength &&
									(t.modulusLength = e.modulusLength);
							break;
						default:
							throw new SyntaxError("Bad algorithm name");
					}
					return t;
				}
				function s(e) {
					return {
						HMAC: {
							"SHA-1": "HS1",
							"SHA-256": "HS256",
							"SHA-384": "HS384",
							"SHA-512": "HS512",
						},
						"RSASSA-PKCS1-v1_5": {
							"SHA-1": "RS1",
							"SHA-256": "RS256",
							"SHA-384": "RS384",
							"SHA-512": "RS512",
						},
						"RSAES-PKCS1-v1_5": { "": "RSA1_5" },
						"RSA-OAEP": {
							"SHA-1": "RSA-OAEP",
							"SHA-256": "RSA-OAEP-256",
						},
						"AES-KW": {
							128: "A128KW",
							192: "A192KW",
							256: "A256KW",
						},
						"AES-GCM": {
							128: "A128GCM",
							192: "A192GCM",
							256: "A256GCM",
						},
						"AES-CBC": {
							128: "A128CBC",
							192: "A192CBC",
							256: "A256CBC",
						},
					}[e.name][(e.hash || {}).name || e.length || ""];
				}
				function a(e) {
					(e instanceof ArrayBuffer || e instanceof Uint8Array) &&
						(e = JSON.parse(decodeURIComponent(escape(o(e)))));
					var t = {
						kty: e.kty,
						alg: e.alg,
						ext: e.ext || e.extractable,
					};
					switch (t.kty) {
						case "oct":
							t.k = e.k;
						case "RSA":
							"n e d p q dp dq qi oth"
								.split(" ")
								.forEach(function (n) {
									n in e && (t[n] = e[n]);
								});
							break;
						default:
							throw new TypeError("Unsupported key type");
					}
					return t;
				}
				function c(e) {
					return (
						(e = a(e)),
						E && ((e.extractable = e.ext), delete e.ext),
						r(unescape(encodeURIComponent(JSON.stringify(e))))
							.buffer
					);
				}
				function u(e) {
					var n = l(e),
						r = !1;
					switch (
						(2 < n.length && ((r = !0), n.shift()),
						(e = { ext: !0 }),
						n[0][0])
					) {
						case "1.2.840.113549.1.1.1":
							var i = "n e d p q dp dq qi".split(" ");
							for (
								n = l(n[1]), r && n.shift(), r = 0;
								r < n.length;
								r++
							)
								n[r][0] || (n[r] = n[r].subarray(1)),
									(e[i[r]] = t(o(n[r])));
							e.kty = "RSA";
							break;
						default:
							throw new TypeError("Unsupported key type");
					}
					return e;
				}
				function l(e, t) {
					if (
						(e instanceof ArrayBuffer && (e = new Uint8Array(e)),
						t || (t = { pos: 0, end: e.length }),
						2 > t.end - t.pos || t.end > e.length)
					)
						throw new RangeError("Malformed DER");
					var n = e[t.pos++],
						r = e[t.pos++];
					if (128 <= r) {
						if (((r &= 127), t.end - t.pos < r))
							throw new RangeError("Malformed DER");
						for (var i = 0; r--; ) (i <<= 8), (i |= e[t.pos++]);
						r = i;
					}
					if (t.end - t.pos < r)
						throw new RangeError("Malformed DER");
					switch (n) {
						case 2:
							n = e.subarray(t.pos, (t.pos += r));
							break;
						case 3:
							if (e[t.pos++])
								throw Error("Unsupported bit string");
							r--;
						case 4:
							n = new Uint8Array(e.subarray(t.pos, (t.pos += r)))
								.buffer;
							break;
						case 5:
							n = null;
							break;
						case 6:
							if (
								!(
									(e = btoa(
										o(e.subarray(t.pos, (t.pos += r)))
									)) in O
								)
							)
								throw Error("Unsupported OBJECT ID " + e);
							n = O[e];
							break;
						case 48:
							for (n = [], r = t.pos + r; t.pos < r; )
								n.push(l(e, t));
							break;
						default:
							throw Error(
								"Unsupported DER tag 0x" + n.toString(16)
							);
					}
					return n;
				}
				function f(e, t) {
					t || (t = []);
					var n = t.length + 2;
					if ((t.push(0, 0), e instanceof Uint8Array))
						for (var o = 2, i = e.length, s = 0; s < i; s++)
							t.push(e[s]);
					else if (e instanceof ArrayBuffer)
						for (
							o = 4,
								i = e.byteLength,
								e = new Uint8Array(e),
								s = 0;
							s < i;
							s++
						)
							t.push(e[s]);
					else if (null === e) (o = 5), (i = 0);
					else if ("string" == typeof e && e in _)
						for (
							o = 6, i = (e = r(atob(_[e]))).length, s = 0;
							s < i;
							s++
						)
							t.push(e[s]);
					else if (e instanceof Array) {
						for (s = 0; s < e.length; s++) f(e[s], t);
						(o = 48), (i = t.length - n);
					} else {
						if (
							!(
								"object" === qa(e) &&
								3 === e.tag &&
								e.value instanceof ArrayBuffer
							)
						)
							throw Error("Unsupported DER value " + e);
						for (
							o = 3,
								i = (e = new Uint8Array(e.value)).byteLength,
								t.push(0),
								s = 0;
							s < i;
							s++
						)
							t.push(e[s]);
						i++;
					}
					if (128 <= i) {
						for (
							s = i,
								i = 4,
								t.splice(
									n,
									0,
									(s >> 24) & 255,
									(s >> 16) & 255,
									(s >> 8) & 255,
									255 & s
								);
							1 < i && !(s >> 24);

						)
							(s <<= 8), i--;
						4 > i && t.splice(n, 4 - i), (i |= 128);
					}
					return t.splice(n - 2, 2, o, i), t;
				}
				function h(e, t, n, r) {
					Object.defineProperties(this, {
						_key: { value: e },
						type: { value: e.type, enumerable: !0 },
						extractable: {
							value: void 0 === n ? e.extractable : n,
							enumerable: !0,
						},
						algorithm: {
							value: void 0 === t ? e.algorithm : t,
							enumerable: !0,
						},
						usages: {
							value: void 0 === r ? e.usages : r,
							enumerable: !0,
						},
					});
				}
				function p(e) {
					return "verify" === e || "encrypt" === e || "wrapKey" === e;
				}
				function d(e) {
					return "sign" === e || "decrypt" === e || "unwrapKey" === e;
				}
				if ("function" != typeof Promise)
					throw "Promise support required";
				var b = e.crypto || e.msCrypto;
				if (b) {
					var g = b.subtle || b.webkitSubtle;
					if (g) {
						var v = e.Crypto || b.constructor || Object,
							y = e.SubtleCrypto || g.constructor || Object;
						e.CryptoKey || e.Key;
						var m = -1 < e.navigator.userAgent.indexOf("Edge/"),
							E = !!e.msCrypto && !m,
							w = !b.subtle && !!b.webkitSubtle;
						if (E || w) {
							var O = { KoZIhvcNAQEB: "1.2.840.113549.1.1.1" },
								_ = { "1.2.840.113549.1.1.1": "KoZIhvcNAQEB" };
							if (
								([
									"generateKey",
									"importKey",
									"unwrapKey",
								].forEach(function (e) {
									var t = g[e];
									g[e] = function (o, l, f) {
										var v = [].slice.call(arguments);
										switch (e) {
											case "generateKey":
												var y = i(o),
													m = l,
													O = f;
												break;
											case "importKey":
												(y = i(f)),
													(m = v[3]),
													(O = v[4]),
													"jwk" === o &&
														((l = a(l)).alg ||
															(l.alg = s(y)),
														l.key_ops ||
															(l.key_ops =
																"oct" !== l.kty
																	? "d" in l
																		? O.filter(
																				d
																		  )
																		: O.filter(
																				p
																		  )
																	: O.slice()),
														(v[1] = c(l)));
												break;
											case "unwrapKey":
												(y = v[4]),
													(m = v[5]),
													(O = v[6]),
													(v[2] = f._key);
										}
										if (
											"generateKey" === e &&
											"HMAC" === y.name &&
											y.hash
										)
											return (
												(y.length =
													y.length ||
													{
														"SHA-1": 512,
														"SHA-256": 512,
														"SHA-384": 1024,
														"SHA-512": 1024,
													}[y.hash.name]),
												g.importKey(
													"raw",
													b.getRandomValues(
														new Uint8Array(
															(y.length + 7) >> 3
														)
													),
													y,
													m,
													O
												)
											);
										if (
											w &&
											"generateKey" === e &&
											"RSASSA-PKCS1-v1_5" === y.name &&
											(!y.modulusLength ||
												2048 <= y.modulusLength)
										)
											return (
												((o = i(o)).name =
													"RSAES-PKCS1-v1_5"),
												delete o.hash,
												g
													.generateKey(o, !0, [
														"encrypt",
														"decrypt",
													])
													.then(function (e) {
														return Promise.all([
															g.exportKey(
																"jwk",
																e.publicKey
															),
															g.exportKey(
																"jwk",
																e.privateKey
															),
														]);
													})
													.then(function (e) {
														return (
															(e[0].alg =
																e[1].alg =
																	s(y)),
															(e[0].key_ops =
																O.filter(p)),
															(e[1].key_ops =
																O.filter(d)),
															Promise.all([
																g.importKey(
																	"jwk",
																	e[0],
																	y,
																	!0,
																	e[0].key_ops
																),
																g.importKey(
																	"jwk",
																	e[1],
																	y,
																	m,
																	e[1].key_ops
																),
															])
														);
													})
													.then(function (e) {
														return {
															publicKey: e[0],
															privateKey: e[1],
														};
													})
											);
										if (
											(w ||
												(E &&
													"SHA-1" ===
														(y.hash || {}).name)) &&
											"importKey" === e &&
											"jwk" === o &&
											"HMAC" === y.name &&
											"oct" === l.kty
										)
											return g.importKey(
												"raw",
												r(n(l.k)),
												f,
												v[3],
												v[4]
											);
										if (
											w &&
											"importKey" === e &&
											("spki" === o || "pkcs8" === o)
										)
											return g.importKey(
												"jwk",
												u(l),
												f,
												v[3],
												v[4]
											);
										if (E && "unwrapKey" === e)
											return g
												.decrypt(v[3], f, l)
												.then(function (e) {
													return g.importKey(
														o,
														e,
														v[4],
														v[5],
														v[6]
													);
												});
										try {
											var _ = t.apply(g, v);
										} catch (e) {
											return Promise.reject(e);
										}
										return (
											E &&
												(_ = new Promise(function (
													e,
													t
												) {
													(_.onabort = _.onerror =
														function (e) {
															t(e);
														}),
														(_.oncomplete =
															function (t) {
																e(
																	t.target
																		.result
																);
															});
												})),
											(_ = _.then(function (e) {
												return (
													"HMAC" !== y.name ||
														y.length ||
														(y.length =
															8 *
															e.algorithm.length),
													0 == y.name.search("RSA") &&
														(y.modulusLength ||
															(y.modulusLength = (
																e.publicKey || e
															).algorithm.modulusLength),
														y.publicExponent ||
															(y.publicExponent =
																(
																	e.publicKey ||
																	e
																).algorithm.publicExponent)),
													e.publicKey && e.privateKey
														? {
																publicKey:
																	new h(
																		e.publicKey,
																		y,
																		m,
																		O.filter(
																			p
																		)
																	),
																privateKey:
																	new h(
																		e.privateKey,
																		y,
																		m,
																		O.filter(
																			d
																		)
																	),
														  }
														: new h(e, y, m, O)
												);
											}))
										);
									};
								}),
								["exportKey", "wrapKey"].forEach(function (e) {
									var i = g[e];
									g[e] = function (c, u, l) {
										var h = [].slice.call(arguments);
										switch (e) {
											case "exportKey":
												h[1] = u._key;
												break;
											case "wrapKey":
												(h[1] = u._key),
													(h[2] = l._key);
										}
										if (
											((w ||
												(E &&
													"SHA-1" ===
														(u.algorithm.hash || {})
															.name)) &&
												"exportKey" === e &&
												"jwk" === c &&
												"HMAC" === u.algorithm.name &&
												(h[0] = "raw"),
											!w ||
												"exportKey" !== e ||
												("spki" !== c &&
													"pkcs8" !== c) ||
												(h[0] = "jwk"),
											E && "wrapKey" === e)
										)
											return g
												.exportKey(c, u)
												.then(function (e) {
													return (
														"jwk" === c &&
															(e = r(
																unescape(
																	encodeURIComponent(
																		JSON.stringify(
																			a(e)
																		)
																	)
																)
															)),
														g.encrypt(h[3], l, e)
													);
												});
										try {
											var b = i.apply(g, h);
										} catch (e) {
											return Promise.reject(e);
										}
										return (
											E &&
												(b = new Promise(function (
													e,
													t
												) {
													(b.onabort = b.onerror =
														function (e) {
															t(e);
														}),
														(b.oncomplete =
															function (t) {
																e(
																	t.target
																		.result
																);
															});
												})),
											"exportKey" === e &&
												"jwk" === c &&
												(b = b.then(function (e) {
													return (w ||
														(E &&
															"SHA-1" ===
																(
																	u.algorithm
																		.hash ||
																	{}
																).name)) &&
														"HMAC" ===
															u.algorithm.name
														? {
																kty: "oct",
																alg: s(
																	u.algorithm
																),
																key_ops:
																	u.usages.slice(),
																ext: !0,
																k: t(o(e)),
														  }
														: ((e = a(e)).alg ||
																(e.alg = s(
																	u.algorithm
																)),
														  e.key_ops ||
																(e.key_ops =
																	"public" ===
																	u.type
																		? u.usages.filter(
																				p
																		  )
																		: "private" ===
																		  u.type
																		? u.usages.filter(
																				d
																		  )
																		: u.usages.slice()),
														  e);
												})),
											!w ||
												"exportKey" !== e ||
												("spki" !== c &&
													"pkcs8" !== c) ||
												(b = b.then(function (e) {
													var t = [["", null]],
														o = !1;
													switch ((e = a(e)).kty) {
														case "RSA":
															for (
																var i =
																		"n e d p q dp dq qi".split(
																			" "
																		),
																	s = [],
																	c = 0;
																c < i.length &&
																i[c] in e;
																c++
															) {
																var u = (s[c] =
																	r(
																		n(
																			e[
																				i[
																					c
																				]
																			]
																		)
																	));
																128 & u[0] &&
																	((s[c] =
																		new Uint8Array(
																			u.length +
																				1
																		)),
																	s[c].set(
																		u,
																		1
																	));
															}
															2 < s.length &&
																((o = !0),
																s.unshift(
																	new Uint8Array(
																		[0]
																	)
																)),
																(t[0][0] =
																	"1.2.840.113549.1.1.1");
															break;
														default:
															throw new TypeError(
																"Unsupported key type"
															);
													}
													return (
														t.push(
															new Uint8Array(f(s))
																.buffer
														),
														o
															? t.unshift(
																	new Uint8Array(
																		[0]
																	)
															  )
															: (t[1] = {
																	tag: 3,
																	value: t[1],
															  }),
														new Uint8Array(f(t))
															.buffer
													);
												})),
											b
										);
									};
								}),
								[
									"encrypt",
									"decrypt",
									"sign",
									"verify",
								].forEach(function (e) {
									var t = g[e];
									g[e] = function (n, r, o, s) {
										if (
											E &&
											(!o.byteLength ||
												(s && !s.byteLength))
										)
											throw Error(
												"Empty input is not allowed"
											);
										var a = [].slice.call(arguments),
											c = i(n);
										if (
											(!E ||
												("sign" !== e &&
													"verify" !== e) ||
												("RSASSA-PKCS1-v1_5" !== n &&
													"HMAC" !== n) ||
												(a[0] = { name: n }),
											E &&
												r.algorithm.hash &&
												(a[0].hash =
													a[0].hash ||
													r.algorithm.hash),
											E &&
												"decrypt" === e &&
												"AES-GCM" === c.name)
										) {
											var u = n.tagLength >> 3;
											(a[2] = (o.buffer || o).slice(
												0,
												o.byteLength - u
											)),
												(n.tag = (o.buffer || o).slice(
													o.byteLength - u
												));
										}
										E &&
											"AES-GCM" === c.name &&
											void 0 === a[0].tagLength &&
											(a[0].tagLength = 128),
											(a[1] = r._key);
										try {
											var l = t.apply(g, a);
										} catch (e) {
											return Promise.reject(e);
										}
										return (
											E &&
												(l = new Promise(function (
													t,
													n
												) {
													(l.onabort = l.onerror =
														function (e) {
															n(e);
														}),
														(l.oncomplete =
															function (n) {
																if (
																	((n =
																		n.target
																			.result),
																	"encrypt" ===
																		e &&
																		n instanceof
																			AesGcmEncryptResult)
																) {
																	var r =
																			n.ciphertext,
																		o =
																			n.tag;
																	(n =
																		new Uint8Array(
																			r.byteLength +
																				o.byteLength
																		)).set(
																		new Uint8Array(
																			r
																		),
																		0
																	),
																		n.set(
																			new Uint8Array(
																				o
																			),
																			r.byteLength
																		),
																		(n =
																			n.buffer);
																}
																t(n);
															});
												})),
											l
										);
									};
								}),
								E)
							) {
								var k = g.digest;
								(g.digest = function (e, t) {
									if (!t.byteLength)
										throw Error(
											"Empty input is not allowed"
										);
									try {
										var n = k.call(g, e, t);
									} catch (e) {
										return Promise.reject(e);
									}
									return (n = new Promise(function (e, t) {
										(n.onabort = n.onerror =
											function (e) {
												t(e);
											}),
											(n.oncomplete = function (t) {
												e(t.target.result);
											});
									}));
								}),
									(e.crypto = Object.create(b, {
										getRandomValues: {
											value: function (e) {
												return b.getRandomValues(e);
											},
										},
										subtle: { value: g },
									})),
									(e.CryptoKey = h);
							}
							w &&
								((b.subtle = g),
								(e.Crypto = v),
								(e.SubtleCrypto = y),
								(e.CryptoKey = h));
						}
					}
				}
			});
		}),
		(function (e) {
			e.console || (e.console = {}), (e = e.console);
			for (
				var t,
					n = function () {},
					r = ["memory"],
					o =
						"assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profiles profileEnd show table time timeEnd timeline timelineEnd timeStamp trace warn".split(
							" "
						);
				(t = r.pop());

			)
				e[t] || (e[t] = {});
			for (; (t = o.pop()); ) e[t] || (e[t] = n);
		})("undefined" == typeof window ? Ya : window),
		ea({ target: "Object", stat: !0 }, { setPrototypeOf: tb });
	var uy = la(function () {
		uc(1);
	});
	ea(
		{ target: "Object", stat: !0, forced: uy, sham: !Oo },
		{
			getPrototypeOf: function (e) {
				return uc(pb(e));
			},
		}
	);
	var iq = [].slice,
		zk = {},
		vy =
			Function.bind ||
			function (e) {
				var t = Wb(this),
					n = iq.call(arguments, 1),
					r = function () {
						var o = n.concat(iq.call(arguments));
						if (this instanceof r) {
							var i = o.length;
							if (!(i in zk)) {
								for (var s = [], a = 0; a < i; a++)
									s[a] = "a[" + a + "]";
								zk[i] = Function(
									"C,a",
									"return new C(" + s.join(",") + ")"
								);
							}
							o = zk[i](t, o);
						} else o = t.apply(e, o);
						return o;
					};
				return xa(t.prototype) && (r.prototype = t.prototype), r;
			},
		Ak = Pc("Reflect", "construct"),
		jq = la(function () {
			function e() {}
			return !(Ak(function () {}, [], e) instanceof e);
		}),
		kq = !la(function () {
			Ak(function () {});
		}),
		lq = jq || kq;
	ea(
		{ target: "Reflect", stat: !0, forced: lq, sham: lq },
		{
			construct: function (e, t) {
				Wb(e), Ia(t);
				var n = 3 > arguments.length ? e : Wb(arguments[2]);
				if (kq && !jq) return Ak(e, t, n);
				if (e == n) {
					switch (t.length) {
						case 0:
							return new e();
						case 1:
							return new e(t[0]);
						case 2:
							return new e(t[0], t[1]);
						case 3:
							return new e(t[0], t[1], t[2]);
						case 4:
							return new e(t[0], t[1], t[2], t[3]);
					}
					return (
						(n = [null]).push.apply(n, t), new (vy.apply(e, n))()
					);
				}
				(n = n.prototype), (n = jc(xa(n) ? n : Object.prototype));
				var r = Function.apply.call(e, n, t);
				return xa(r) ? r : n;
			},
		}
	),
		ea({ target: "Reflect", stat: !0 }, { get: Am });
	var mq = dc.f,
		wy = la(function () {
			mq(1);
		});
	ea(
		{ target: "Object", stat: !0, forced: !wa || wy, sham: !wa },
		{
			getOwnPropertyDescriptor: function (e, t) {
				return mq(Mb(e), t);
			},
		}
	);
	var nq = de.f,
		xy = {}.toString,
		oq =
			"object" == typeof window && window && Object.getOwnPropertyNames
				? Object.getOwnPropertyNames(window)
				: [],
		Bk = function (e) {
			if (oq && "[object Window]" == xy.call(e))
				try {
					var t = nq(e);
				} catch (e) {
					t = oq.slice();
				}
			else t = nq(Mb(e));
			return t;
		},
		pq = { f: Fa },
		yy = qb.f,
		$h = function (e) {
			var t = R.Symbol || (R.Symbol = {});
			ka(t, e) || yy(t, e, { value: pq.f(e) });
		},
		Nb = xh("hidden"),
		qq = Fa("toPrimitive"),
		zy = cb.set,
		rq = cb.getterFor("Symbol"),
		kc = Object.prototype,
		Ob = R.Symbol,
		yg = Pc("JSON", "stringify"),
		sq = dc.f,
		Jd = qb.f,
		tq = Bk,
		Ay = eg,
		jd = Ad("symbols"),
		zg = Ad("op-symbols"),
		Ck = Ad("string-to-symbol-registry"),
		Dk = Ad("symbol-to-string-registry"),
		By = Ad("wks"),
		Ek = R.QObject,
		Fk = !Ek || !Ek.prototype || !Ek.prototype.findChild,
		Gk =
			wa &&
			la(function () {
				return (
					7 !=
					jc(
						Jd({}, "a", {
							get: function () {
								return Jd(this, "a", { value: 7 }).a;
							},
						})
					).a
				);
			})
				? function (e, t, n) {
						var r = sq(kc, t);
						r && delete kc[t],
							Jd(e, t, n),
							r && e !== kc && Jd(kc, t, r);
				  }
				: Jd,
		Hk = function (e, t) {
			var n = (jd[e] = jc(Ob.prototype));
			return (
				zy(n, { type: "Symbol", tag: e, description: t }),
				wa || (n.description = t),
				n
			);
		},
		Ik = zo
			? function (e) {
					return "symbol" == typeof e;
			  }
			: function (e) {
					return Object(e) instanceof Ob;
			  },
		ai = function (e, t, n) {
			return (
				e === kc && ai(zg, t, n),
				Ia(e),
				(t = Oc(t, !0)),
				Ia(n),
				ka(jd, t)
					? (n.enumerable
							? (ka(e, Nb) && e[Nb][t] && (e[Nb][t] = !1),
							  (n = jc(n, { enumerable: Nc(0, !1) })))
							: (ka(e, Nb) || Jd(e, Nb, Nc(1, {})),
							  (e[Nb][t] = !0)),
					  Gk(e, t, n))
					: Jd(e, t, n)
			);
		},
		uq = function (e, t) {
			Ia(e);
			var n = Mb(t);
			return (
				(t = ed(n).concat(Jk(n))),
				fe(t, function (t) {
					(wa && !Kk.call(n, t)) || ai(e, t, n[t]);
				}),
				e
			);
		},
		Kk = function (e) {
			e = Oc(e, !0);
			var t = Ay.call(this, e);
			return (
				!(this === kc && ka(jd, e) && !ka(zg, e)) &&
				(!(
					t ||
					!ka(this, e) ||
					!ka(jd, e) ||
					(ka(this, Nb) && this[Nb][e])
				) ||
					t)
			);
		},
		vq = function (e, t) {
			if (
				((e = Mb(e)),
				(t = Oc(t, !0)),
				e !== kc || !ka(jd, t) || ka(zg, t))
			) {
				var n = sq(e, t);
				return (
					!n ||
						!ka(jd, t) ||
						(ka(e, Nb) && e[Nb][t]) ||
						(n.enumerable = !0),
					n
				);
			}
		},
		wq = function (e) {
			e = tq(Mb(e));
			var t = [];
			return (
				fe(e, function (e) {
					ka(jd, e) || ka(bf, e) || t.push(e);
				}),
				t
			);
		},
		Jk = function (e) {
			var t = e === kc;
			e = tq(t ? zg : Mb(e));
			var n = [];
			return (
				fe(e, function (e) {
					!ka(jd, e) || (t && !ka(kc, e)) || n.push(jd[e]);
				}),
				n
			);
		};
	if (
		(Sc ||
			((Ob = function () {
				if (this instanceof Ob)
					throw TypeError("Symbol is not a constructor");
				var e =
						arguments.length && void 0 !== arguments[0]
							? String(arguments[0])
							: void 0,
					t = af(e),
					n = function (e) {
						this === kc && n.call(zg, e),
							ka(this, Nb) &&
								ka(this[Nb], t) &&
								(this[Nb][t] = !1),
							Gk(this, t, Nc(1, e));
					};
				return (
					wa && Fk && Gk(kc, t, { configurable: !0, set: n }),
					Hk(t, e)
				);
			}),
			Za(Ob.prototype, "toString", function () {
				return rq(this).tag;
			}),
			Za(Ob, "withoutSetter", function (e) {
				return Hk(af(e), e);
			}),
			(eg = Kk),
			(qb.f = ai),
			(dc.f = vq),
			(de.f = Bk = wq),
			(gg.f = Jk),
			(pq.f = function (e) {
				return Hk(Fa(e), e);
			}),
			wa &&
				(Jd(Ob.prototype, "description", {
					configurable: !0,
					get: function () {
						return rq(this).description;
					},
				}),
				Za(kc, "propertyIsEnumerable", Kk, { unsafe: !0 }))),
		ea({ global: !0, wrap: !0, forced: !Sc, sham: !Sc }, { Symbol: Ob }),
		fe(ed(By), function (e) {
			$h(e);
		}),
		ea(
			{ target: "Symbol", stat: !0, forced: !Sc },
			{
				for: function (e) {
					if (((e = String(e)), ka(Ck, e))) return Ck[e];
					var t = Ob(e);
					return (Ck[e] = t), (Dk[t] = e), t;
				},
				keyFor: function (e) {
					if (!Ik(e)) throw TypeError(e + " is not a symbol");
					if (ka(Dk, e)) return Dk[e];
				},
				useSetter: function () {
					Fk = !0;
				},
				useSimple: function () {
					Fk = !1;
				},
			}
		),
		ea(
			{ target: "Object", stat: !0, forced: !Sc, sham: !wa },
			{
				create: function (e, t) {
					return void 0 === t ? jc(e) : uq(jc(e), t);
				},
				defineProperty: ai,
				defineProperties: uq,
				getOwnPropertyDescriptor: vq,
			}
		),
		ea(
			{ target: "Object", stat: !0, forced: !Sc },
			{ getOwnPropertyNames: wq, getOwnPropertySymbols: Jk }
		),
		ea(
			{
				target: "Object",
				stat: !0,
				forced: la(function () {
					gg.f(1);
				}),
			},
			{
				getOwnPropertySymbols: function (e) {
					return gg.f(pb(e));
				},
			}
		),
		yg)
	) {
		var Cy =
			!Sc ||
			la(function () {
				var e = Ob();
				return (
					"[null]" != yg([e]) ||
					"{}" != yg({ a: e }) ||
					"{}" != yg(Object(e))
				);
			});
		ea(
			{ target: "JSON", stat: !0, forced: Cy },
			{
				stringify: function (e, t, n) {
					for (var r, o = [e], i = 1; arguments.length > i; )
						o.push(arguments[i++]);
					if (((r = t), (xa(t) || void 0 !== e) && !Ik(e)))
						return (
							Ed(t) ||
								(t = function (e, t) {
									if (
										("function" == typeof r &&
											(t = r.call(this, e, t)),
										!Ik(t))
									)
										return t;
								}),
							(o[1] = t),
							yg.apply(null, o)
						);
				},
			}
		);
	}
	Ob.prototype[qq] || kb(Ob.prototype, qq, Ob.prototype.valueOf),
		zc(Ob, "Symbol"),
		(bf[Nb] = !0);
	var Dy = qb.f,
		kd = R.Symbol;
	if (
		wa &&
		"function" == typeof kd &&
		(!("description" in kd.prototype) || void 0 !== kd().description)
	) {
		var xq = {},
			Ag = function () {
				var e =
						1 > arguments.length || void 0 === arguments[0]
							? void 0
							: String(arguments[0]),
					t =
						this instanceof Ag
							? new kd(e)
							: void 0 === e
							? kd()
							: kd(e);
				return "" === e && (xq[t] = !0), t;
			};
		to(Ag, kd);
		var Lk = (Ag.prototype = kd.prototype);
		Lk.constructor = Ag;
		var Ey = Lk.toString,
			Fy = "Symbol(test)" == String(kd("test")),
			Gy = /^Symbol\((.*)\)[^)]+$/;
		Dy(Lk, "description", {
			configurable: !0,
			get: function () {
				var e = xa(this) ? this.valueOf() : this,
					t = Ey.call(e);
				return ka(xq, e)
					? ""
					: "" === (e = Fy ? t.slice(7, -1) : t.replace(Gy, "$1"))
					? void 0
					: e;
			},
		}),
			ea({ global: !0, forced: !0 }, { Symbol: Ag });
	}
	$h("toStringTag"),
		zc(R.JSON, "JSON", !0),
		zc(Math, "Math", !0),
		(function () {
			function e(e, t) {
				if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function");
			}
			function t(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					(r.enumerable = r.enumerable || !1),
						(r.configurable = !0),
						"value" in r && (r.writable = !0),
						Object.defineProperty(e, r.key, r);
				}
			}
			function n(e, n, r) {
				return n && t(e.prototype, n), r && t(e, r), e;
			}
			function r(e) {
				return (r = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function (e) {
							return e.__proto__ || Object.getPrototypeOf(e);
					  })(e);
			}
			function o(e, t) {
				return (o =
					Object.setPrototypeOf ||
					function (e, t) {
						return (e.__proto__ = t), e;
					})(e, t);
			}
			function i(e) {
				if (void 0 === e)
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				return e;
			}
			function s(e) {
				var t = (function () {
					if (
						"undefined" == typeof Reflect ||
						!Reflect.construct ||
						Reflect.construct.sham
					)
						return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return (
							Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							),
							!0
						);
					} catch (e) {
						return !1;
					}
				})();
				return function () {
					var n = r(e);
					if (t) {
						var o = r(this).constructor;
						n = Reflect.construct(n, arguments, o);
					} else n = n.apply(this, arguments);
					return (n =
						!n || ("object" !== qa(n) && "function" != typeof n)
							? i(this)
							: n);
				};
			}
			function a(e, t, n) {
				return (a =
					"undefined" != typeof Reflect && Reflect.get
						? Reflect.get
						: function (e, t, n) {
								for (
									;
									!Object.prototype.hasOwnProperty.call(
										e,
										t
									) && null !== (e = r(e));

								);
								if (e)
									return (t = Object.getOwnPropertyDescriptor(
										e,
										t
									)).get
										? t.get.call(n)
										: t.value;
						  })(e, t, n || e);
			}
			var c = (function () {
					function t() {
						e(this, t),
							Object.defineProperty(this, "listeners", {
								value: {},
								writable: !0,
								configurable: !0,
							});
					}
					return (
						n(t, [
							{
								key: "addEventListener",
								value: function (e, t, n) {
									e in this.listeners ||
										(this.listeners[e] = []),
										this.listeners[e].push({
											callback: t,
											options: n,
										});
								},
							},
							{
								key: "removeEventListener",
								value: function (e, t) {
									if (e in this.listeners)
										for (
											var n = 0,
												r = (e = this.listeners[e])
													.length;
											n < r;
											n++
										)
											if (e[n].callback === t) {
												e.splice(n, 1);
												break;
											}
								},
							},
							{
								key: "dispatchEvent",
								value: function (e) {
									if (e.type in this.listeners) {
										for (
											var t =
													this.listeners[
														e.type
													].slice(),
												n = 0,
												r = t.length;
											n < r;
											n++
										) {
											var o = t[n];
											try {
												o.callback.call(this, e);
											} catch (e) {
												Promise.resolve().then(
													function () {
														throw e;
													}
												);
											}
											o.options &&
												o.options.once &&
												this.removeEventListener(
													e.type,
													o.callback
												);
										}
										return !e.defaultPrevented;
									}
								},
							},
						]),
						t
					);
				})(),
				u = (function (t) {
					function u() {
						e(this, u);
						var t = l.call(this);
						return (
							t.listeners || c.call(i(t)),
							Object.defineProperty(i(t), "aborted", {
								value: !1,
								writable: !0,
								configurable: !0,
							}),
							Object.defineProperty(i(t), "onabort", {
								value: null,
								writable: !0,
								configurable: !0,
							}),
							t
						);
					}
					!(function (e, t) {
						if ("function" != typeof t && null !== t)
							throw new TypeError(
								"Super expression must either be null or a function"
							);
						(e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0,
							},
						})),
							t && o(e, t);
					})(u, t);
					var l = s(u);
					return (
						n(u, [
							{
								key: "toString",
								value: function () {
									return "[object AbortSignal]";
								},
							},
							{
								key: "dispatchEvent",
								value: function (e) {
									"abort" === e.type &&
										((this.aborted = !0),
										"function" == typeof this.onabort &&
											this.onabort.call(this, e)),
										a(
											r(u.prototype),
											"dispatchEvent",
											this
										).call(this, e);
								},
							},
						]),
						u
					);
				})(c),
				l = (function () {
					function t() {
						e(this, t),
							Object.defineProperty(this, "signal", {
								value: new u(),
								writable: !0,
								configurable: !0,
							});
					}
					return (
						n(t, [
							{
								key: "abort",
								value: function () {
									try {
										var e = new Event("abort");
									} catch (t) {
										"undefined" != typeof document
											? document.createEvent
												? (e =
														document.createEvent(
															"Event"
														)).initEvent(
														"abort",
														!1,
														!1
												  )
												: ((e =
														document.createEventObject()).type =
														"abort")
											: (e = {
													type: "abort",
													bubbles: !1,
													cancelable: !1,
											  });
									}
									this.signal.dispatchEvent(e);
								},
							},
							{
								key: "toString",
								value: function () {
									return "[object AbortController]";
								},
							},
						]),
						t
					);
				})();
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				((l.prototype[Symbol.toStringTag] = "AbortController"),
				(u.prototype[Symbol.toStringTag] = "AbortSignal")),
				(function (e) {
					if (e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
						console.log(
							"__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"
						);
						var t = !0;
					} else
						t =
							("function" == typeof e.Request &&
								!e.Request.prototype.hasOwnProperty(
									"signal"
								)) ||
							!e.AbortController;
					t && ((e.AbortController = l), (e.AbortSignal = u));
				})("undefined" != typeof self ? self : Ya);
		})();
	var Hy = Math.floor,
		Iy = Math.log,
		Jy = Math.LOG2E;
	ea(
		{ target: "Math", stat: !0 },
		{
			clz32: function (e) {
				return (e >>>= 0) ? 31 - Hy(Iy(e + 0.5) * Jy) : 32;
			},
		}
	);
	var Ky = Math.log,
		Ly = Math.LN2,
		cu =
			Math.clz32 ||
			function (e) {
				return (31 - Ky(e >>> 0) / Ly) | 0;
			},
		Ud = String.fromCharCode,
		yq = {}.toString,
		Mk = window.Uint8Array,
		Nk = Mk || Array,
		My = yq.call((window.ArrayBuffer || Nk).prototype),
		Ok;
	(Bm.prototype.decode = function (e) {
		if (((e = (e && e.buffer) || e), yq.call(e) !== My))
			throw Error(
				"Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"
			);
		for (
			var t = "", n = 0, r = 0 | (e = Mk ? new Nk(e) : e).length;
			n < r;
			n = (n + 32768) | 0
		)
			t += Ud.apply(0, e[Mk ? "slice" : "subarray"](n, (n + 32768) | 0));
		return t.replace(/[\xc0-\xff][\x80-\xbf]*/g, bu);
	}),
		window.TextDecoder || (window.TextDecoder = Bm),
		(Cm.prototype.encode = function (e) {
			for (
				var t =
						0 |
						(e =
							void 0 === e
								? ""
								: ("" + e).replace(
										/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,
										du
								  )).length,
					n = new Nk(t),
					r = 0;
				r < t;
				r = (r + 1) | 0
			)
				n[r] = e.charCodeAt(r);
			return n;
		}),
		window.TextEncoder || (window.TextEncoder = Cm),
		(function (e) {
			var t, n, r, o, i, s, a, c, u, l, f, h;
			((n = t || (t = {})).LOGIN = "LOGIN"),
				(n.LOGIN_SUCCESS = "LOGIN_SUCCESS"),
				(n.LOGIN_FAILURE = "LOGIN_FAILURE"),
				(n.LOGIN_TIMEOUT = "LOGIN_TIMEOUT"),
				(n.INTERRUPTED = "INTERRUPTED"),
				(n.LOGOUT = "LOGOUT"),
				(n.BANNED_BY_SERVER = "BANNED_BY_SERVER"),
				(n.REMOTE_LOGIN = "REMOTE_LOGIN"),
				(n.TOKEN_EXPIRED = "TOKEN_EXPIRED"),
				(e.ConnectionChangeReason = t),
				(function (e) {
					(e.DISCONNECTED = "DISCONNECTED"),
						(e.CONNECTING = "CONNECTING"),
						(e.CONNECTED = "CONNECTED"),
						(e.RECONNECTING = "RECONNECTING"),
						(e.ABORTED = "ABORTED");
				})(r || (r = {})),
				(e.ConnectionState = r),
				(function (e) {
					(e.IDLE = "IDLE"),
						(e.SENT_TO_REMOTE = "SENT_TO_REMOTE"),
						(e.RECEIVED_BY_REMOTE = "RECEIVED_BY_REMOTE"),
						(e.ACCEPTED_BY_REMOTE = "ACCEPTED_BY_REMOTE"),
						(e.REFUSED_BY_REMOTE = "REFUSED_BY_REMOTE"),
						(e.CANCELED = "CANCELED"),
						(e.FAILURE = "FAILURE");
				})(o || (o = {})),
				(e.LocalInvitationState = o),
				(function (e) {
					(e.INVITATION_RECEIVED = "INVITATION_RECEIVED"),
						(e.ACCEPT_SENT_TO_LOCAL = "ACCEPT_SENT_TO_LOCAL"),
						(e.REFUSED = "REFUSED"),
						(e.ACCEPTED = "ACCEPTED"),
						(e.CANCELED = "CANCELED"),
						(e.FAILURE = "FAILURE");
				})(i || (i = {})),
				(e.RemoteInvitationState = i),
				(function (e) {
					(e.UNKNOWN = "UNKNOWN"),
						(e.PEER_NO_RESPONSE = "PEER_NO_RESPONSE"),
						(e.INVITATION_EXPIRE = "INVITATION_EXPIRE"),
						(e.PEER_OFFLINE = "PEER_OFFLINE"),
						(e.NOT_LOGGEDIN = "NOT_LOGGEDIN");
				})(s || (s = {})),
				(e.LocalInvitationFailureReason = s),
				(function (e) {
					(e.UNKNOWN = "UNKNOWN"),
						(e.PEER_OFFLINE = "PEER_OFFLINE"),
						(e.ACCEPT_FAILURE = "ACCEPT_FAILURE"),
						(e.INVITATION_EXPIRE = "INVITATION_EXPIRE");
				})(a || (a = {})),
				(e.RemoteInvitationFailureReason = a),
				(function (e) {
					(e.ONLINE = "ONLINE"),
						(e.UNREACHABLE = "UNREACHABLE"),
						(e.OFFLINE = "OFFLINE");
				})(c || (c = {})),
				(e.PeerOnlineState = c),
				((u || (u = {})).ONLINE_STATUS = "ONLINE_STATUS"),
				(e.PeerSubscriptionOption = u),
				(function (e) {
					(e.TEXT = "TEXT"), (e.RAW = "RAW");
				})(l || (l = {})),
				(e.MessageType = l),
				(function (e) {
					(e.CN = "CN"),
						(e.NA = "NA"),
						(e.EU = "EU"),
						(e.AS = "AS"),
						(e.JP = "JP"),
						(e.IN = "IN"),
						(e.GLOB = "GLOB"),
						(e.OC = "OC"),
						(e.SA = "SA"),
						(e.AF = "AF"),
						(e.OVS = "OVS");
				})(f || (f = {})),
				(e.LegacyAreaCode = f),
				(function (e) {
					(e.GLOBAL = "GLOBAL"),
						(e.INDIA = "INDIA"),
						(e.JAPAN = "JAPAN"),
						(e.ASIA = "ASIA"),
						(e.EUROPE = "EUROPE"),
						(e.CHINA = "CHINA"),
						(e.NORTH_AMERICA = "NORTH_AMERICA");
				})(h || (h = {})),
				(e.AreaCode = h);
		})(Ok || (Ok = {}));
	var ta = Ok;
	ea(
		{ target: "Array", proto: !0 },
		{
			includes: function (e) {
				return qo(
					this,
					e,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	),
		ng("includes");
	var Pk = function (e) {
			if (Lj(e))
				throw TypeError(
					"The method doesn't accept regular expressions"
				);
			return e;
		},
		Ny = Fa("match"),
		Qk = function (e) {
			var t = /./;
			try {
				"/./"[e](t);
			} catch (n) {
				try {
					return (t[Ny] = !1), "/./"[e](t);
				} catch (e) {}
			}
			return !1;
		};
	ea(
		{ target: "String", proto: !0, forced: !Qk("includes") },
		{
			includes: function (e) {
				return !!~String(Eb(this)).indexOf(
					Pk(e),
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var Ec = {
		RECONNECTING_AP_INTERVAL: 2500,
		RECONNECTING_AP_NUM: 2,
		DISABLE_MESSAGE_COMPRESSION: !1,
		LOG_UPLOAD_INTERVAL: 3e3,
		LOG_HANDLER: void 0,
		ENABLE_EDGE_AUTO_FALLBACK: !0,
	};
	$h("iterator"), $h("asyncIterator");
	var Rk = ff("forEach")
			? [].forEach
			: function (e) {
					return fe(
						this,
						e,
						1 < arguments.length ? arguments[1] : void 0
					);
			  },
		zq;
	for (zq in wk) {
		var Aq = R[zq],
			bi = Aq && Aq.prototype;
		if (bi && bi.forEach !== Rk)
			try {
				kb(bi, "forEach", Rk);
			} catch (c) {
				bi.forEach = Rk;
			}
	}
	var Oy = [].reverse,
		Bq = [1, 2];
	ea(
		{
			target: "Array",
			proto: !0,
			forced: String(Bq) === String(Bq.reverse()),
		},
		{
			reverse: function () {
				return Ed(this) && (this.length = this.length), Oy.call(this);
			},
		}
	);
	var N = xb(function (e) {
			e = (function (e) {
				function t(e, t, n) {
					return (
						Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						}),
						e[t]
					);
				}
				function n(e, t, n, i) {
					return (
						(t = Object.create(
							(t && t.prototype instanceof o ? t : o).prototype
						)),
						(i = new h(i || [])),
						(t._invoke = (function (e, t, n) {
							var o = O;
							return function (i, s) {
								if (o === k)
									throw Error("Generator is already running");
								if (o === I) {
									if ("throw" === i) throw s;
									return d();
								}
								for (n.method = i, n.arg = s; ; ) {
									if ((i = n.delegate) && (i = u(i, n))) {
										if (i === A) continue;
										return i;
									}
									if ("next" === n.method)
										n.sent = n._sent = n.arg;
									else if ("throw" === n.method) {
										if (o === O) throw ((o = I), n.arg);
										n.dispatchException(n.arg);
									} else
										"return" === n.method &&
											n.abrupt("return", n.arg);
									if (
										((o = k),
										"normal" === (i = r(e, t, n)).type)
									) {
										if (((o = n.done ? I : _), i.arg === A))
											continue;
										return { value: i.arg, done: n.done };
									}
									"throw" === i.type &&
										((o = I),
										(n.method = "throw"),
										(n.arg = i.arg));
								}
							};
						})(e, n, i)),
						t
					);
				}
				function r(e, t, n) {
					try {
						return { type: "normal", arg: e.call(t, n) };
					} catch (e) {
						return { type: "throw", arg: e };
					}
				}
				function o() {}
				function i() {}
				function s() {}
				function a(e) {
					["next", "throw", "return"].forEach(function (n) {
						t(e, n, function (e) {
							return this._invoke(n, e);
						});
					});
				}
				function c(e, t) {
					function n(o, i, s, a) {
						if ("throw" !== (o = r(e[o], e, i)).type) {
							var c = o.arg;
							return (o = c.value) &&
								"object" === qa(o) &&
								v.call(o, "__await")
								? t.resolve(o.__await).then(
										function (e) {
											n("next", e, s, a);
										},
										function (e) {
											n("throw", e, s, a);
										}
								  )
								: t.resolve(o).then(
										function (e) {
											(c.value = e), s(c);
										},
										function (e) {
											return n("throw", e, s, a);
										}
								  );
						}
						a(o.arg);
					}
					var o;
					this._invoke = function (e, r) {
						function i() {
							return new t(function (t, o) {
								n(e, r, t, o);
							});
						}
						return (o = o ? o.then(i, i) : i());
					};
				}
				function u(e, t) {
					var n = e.iterator[t.method];
					if (n === b) {
						if (((t.delegate = null), "throw" === t.method)) {
							if (
								e.iterator.return &&
								((t.method = "return"),
								(t.arg = b),
								u(e, t),
								"throw" === t.method)
							)
								return A;
							(t.method = "throw"),
								(t.arg = new TypeError(
									"The iterator does not provide a 'throw' method"
								));
						}
						return A;
					}
					return "throw" === (n = r(n, e.iterator, t.arg)).type
						? ((t.method = "throw"),
						  (t.arg = n.arg),
						  (t.delegate = null),
						  A)
						: (n = n.arg)
						? n.done
							? ((t[e.resultName] = n.value),
							  (t.next = e.nextLoc),
							  "return" !== t.method &&
									((t.method = "next"), (t.arg = b)),
							  (t.delegate = null),
							  A)
							: n
						: ((t.method = "throw"),
						  (t.arg = new TypeError(
								"iterator result is not an object"
						  )),
						  (t.delegate = null),
						  A);
				}
				function l(e) {
					var t = { tryLoc: e[0] };
					1 in e && (t.catchLoc = e[1]),
						2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
						this.tryEntries.push(t);
				}
				function f(e) {
					var t = e.completion || {};
					(t.type = "normal"), delete t.arg, (e.completion = t);
				}
				function h(e) {
					(this.tryEntries = [{ tryLoc: "root" }]),
						e.forEach(l, this),
						this.reset(!0);
				}
				function p(e) {
					if (e) {
						var t = e[m];
						if (t) return t.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var n = -1;
							return ((t = function t() {
								for (; ++n < e.length; )
									if (v.call(e, n))
										return (
											(t.value = e[n]), (t.done = !1), t
										);
								return (t.value = b), (t.done = !0), t;
							}).next = t);
						}
					}
					return { next: d };
				}
				function d() {
					return { value: b, done: !0 };
				}
				var b,
					g = Object.prototype,
					v = g.hasOwnProperty,
					y = "function" == typeof Symbol ? Symbol : {},
					m = y.iterator || "@@iterator",
					E = y.asyncIterator || "@@asyncIterator",
					w = y.toStringTag || "@@toStringTag";
				try {
					t({}, "");
				} catch (e) {
					t = function (e, t, n) {
						return (e[t] = n);
					};
				}
				e.wrap = n;
				var O = "suspendedStart",
					_ = "suspendedYield",
					k = "executing",
					I = "completed",
					A = {};
				t((y = {}), m, function () {
					return this;
				});
				var R = Object.getPrototypeOf;
				(R = R && R(R(p([])))) && R !== g && v.call(R, m) && (y = R);
				var N = (s.prototype = o.prototype = Object.create(y));
				return (
					(i.prototype = s),
					t(N, "constructor", s),
					t(s, "constructor", i),
					(i.displayName = t(s, w, "GeneratorFunction")),
					(e.isGeneratorFunction = function (e) {
						return (
							!!(e = "function" == typeof e && e.constructor) &&
							(e === i ||
								"GeneratorFunction" ===
									(e.displayName || e.name))
						);
					}),
					(e.mark = function (e) {
						return (
							Object.setPrototypeOf
								? Object.setPrototypeOf(e, s)
								: ((e.__proto__ = s),
								  t(e, w, "GeneratorFunction")),
							(e.prototype = Object.create(N)),
							e
						);
					}),
					(e.awrap = function (e) {
						return { __await: e };
					}),
					a(c.prototype),
					t(c.prototype, E, function () {
						return this;
					}),
					(e.AsyncIterator = c),
					(e.async = function (t, r, o, i, s) {
						void 0 === s && (s = Promise);
						var a = new c(n(t, r, o, i), s);
						return e.isGeneratorFunction(r)
							? a
							: a.next().then(function (e) {
									return e.done ? e.value : a.next();
							  });
					}),
					a(N),
					t(N, w, "Generator"),
					t(N, m, function () {
						return this;
					}),
					t(N, "toString", function () {
						return "[object Generator]";
					}),
					(e.keys = function (e) {
						var t,
							n = [];
						for (t in e) n.push(t);
						return (
							n.reverse(),
							function t() {
								for (; n.length; ) {
									var r = n.pop();
									if (r in e)
										return (t.value = r), (t.done = !1), t;
								}
								return (t.done = !0), t;
							}
						);
					}),
					(e.values = p),
					(h.prototype = {
						constructor: h,
						reset: function (e) {
							if (
								((this.next = this.prev = 0),
								(this.sent = this._sent = b),
								(this.done = !1),
								(this.delegate = null),
								(this.method = "next"),
								(this.arg = b),
								this.tryEntries.forEach(f),
								!e)
							)
								for (var t in this)
									"t" === t.charAt(0) &&
										v.call(this, t) &&
										!isNaN(+t.slice(1)) &&
										(this[t] = b);
						},
						stop: function () {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval;
						},
						dispatchException: function (e) {
							function t(t, r) {
								return (
									(i.type = "throw"),
									(i.arg = e),
									(n.next = t),
									r && ((n.method = "next"), (n.arg = b)),
									!!r
								);
							}
							if (this.done) throw e;
							for (
								var n = this, r = this.tryEntries.length - 1;
								0 <= r;
								--r
							) {
								var o = this.tryEntries[r],
									i = o.completion;
								if ("root" === o.tryLoc) return t("end");
								if (o.tryLoc <= this.prev) {
									var s = v.call(o, "catchLoc"),
										a = v.call(o, "finallyLoc");
									if (s && a) {
										if (this.prev < o.catchLoc)
											return t(o.catchLoc, !0);
										if (this.prev < o.finallyLoc)
											return t(o.finallyLoc);
									} else if (s) {
										if (this.prev < o.catchLoc)
											return t(o.catchLoc, !0);
									} else {
										if (!a)
											throw Error(
												"try statement without catch or finally"
											);
										if (this.prev < o.finallyLoc)
											return t(o.finallyLoc);
									}
								}
							}
						},
						abrupt: function (e, t) {
							for (
								var n = this.tryEntries.length - 1;
								0 <= n;
								--n
							) {
								var r = this.tryEntries[n];
								if (
									r.tryLoc <= this.prev &&
									v.call(r, "finallyLoc") &&
									this.prev < r.finallyLoc
								) {
									var o = r;
									break;
								}
							}
							return (
								o &&
									("break" === e || "continue" === e) &&
									o.tryLoc <= t &&
									t <= o.finallyLoc &&
									(o = null),
								((n = o ? o.completion : {}).type = e),
								(n.arg = t),
								o
									? ((this.method = "next"),
									  (this.next = o.finallyLoc),
									  A)
									: this.complete(n)
							);
						},
						complete: function (e, t) {
							if ("throw" === e.type) throw e.arg;
							return (
								"break" === e.type || "continue" === e.type
									? (this.next = e.arg)
									: "return" === e.type
									? ((this.rval = this.arg = e.arg),
									  (this.method = "return"),
									  (this.next = "end"))
									: "normal" === e.type &&
									  t &&
									  (this.next = t),
								A
							);
						},
						finish: function (e) {
							for (
								var t = this.tryEntries.length - 1;
								0 <= t;
								--t
							) {
								var n = this.tryEntries[t];
								if (n.finallyLoc === e)
									return (
										this.complete(n.completion, n.afterLoc),
										f(n),
										A
									);
							}
						},
						catch: function (e) {
							for (
								var t = this.tryEntries.length - 1;
								0 <= t;
								--t
							) {
								var n = this.tryEntries[t];
								if (n.tryLoc === e) {
									if ("throw" === (e = n.completion).type) {
										var r = e.arg;
										f(n);
									}
									return r;
								}
							}
							throw Error("illegal catch attempt");
						},
						delegateYield: function (e, t, n) {
							return (
								(this.delegate = {
									iterator: p(e),
									resultName: t,
									nextLoc: n,
								}),
								"next" === this.method && (this.arg = b),
								A
							);
						},
					}),
					e
				);
			})(e.exports);
			try {
				regeneratorRuntime = e;
			} catch (t) {
				"object" ===
				("undefined" == typeof globalThis
					? "undefined"
					: qa(globalThis))
					? (globalThis.regeneratorRuntime = e)
					: Function("r", "regeneratorRuntime = r")(e);
			}
		}),
		Cq = !la(function () {
			return Object.isExtensible(Object.preventExtensions({}));
		}),
		Sk = xb(function (e) {
			var t = qb.f,
				n = af("meta"),
				r = 0,
				o =
					Object.isExtensible ||
					function () {
						return !0;
					},
				i = function (e) {
					t(e, n, { value: { objectID: "O" + ++r, weakData: {} } });
				},
				s = (e.exports = {
					REQUIRED: !1,
					fastKey: function (e, t) {
						if (!xa(e))
							return "symbol" == typeof e
								? e
								: ("string" == typeof e ? "S" : "P") + e;
						if (!ka(e, n)) {
							if (!o(e)) return "F";
							if (!t) return "E";
							i(e);
						}
						return e[n].objectID;
					},
					getWeakData: function (e, t) {
						if (!ka(e, n)) {
							if (!o(e)) return !0;
							if (!t) return !1;
							i(e);
						}
						return e[n].weakData;
					},
					onFreeze: function (e) {
						return Cq && s.REQUIRED && o(e) && !ka(e, n) && i(e), e;
					},
				});
			bf[n] = !0;
		}),
		Dq = function (e, t, n) {
			var r = -1 !== e.indexOf("Map"),
				o = -1 !== e.indexOf("Weak"),
				i = r ? "set" : "add",
				s = R[e],
				a = s && s.prototype,
				c = s,
				u = {},
				l = function (e) {
					var t = a[e];
					Za(
						a,
						e,
						"add" == e
							? function (e) {
									return t.call(this, 0 === e ? 0 : e), this;
							  }
							: "delete" == e
							? function (e) {
									return (
										!(o && !xa(e)) &&
										t.call(this, 0 === e ? 0 : e)
									);
							  }
							: "get" == e
							? function (e) {
									return o && !xa(e)
										? void 0
										: t.call(this, 0 === e ? 0 : e);
							  }
							: "has" == e
							? function (e) {
									return (
										!(o && !xa(e)) &&
										t.call(this, 0 === e ? 0 : e)
									);
							  }
							: function (e, n) {
									return (
										t.call(this, 0 === e ? 0 : e, n), this
									);
							  }
					);
				};
			if (
				Qc(
					e,
					"function" != typeof s ||
						!(
							o ||
							(a.forEach &&
								!la(function () {
									new s().entries().next();
								}))
						)
				)
			)
				(c = n.getConstructor(t, e, r, i)), (Sk.REQUIRED = !0);
			else if (Qc(e, !0)) {
				var f = new c(),
					h = f[i](o ? {} : -0, 1) != f,
					p = la(function () {
						f.has(1);
					}),
					d = Eh(function (e) {
						new s(e);
					}),
					b =
						!o &&
						la(function () {
							for (var e = new s(), t = 5; t--; ) e[i](t, t);
							return !e.has(-0);
						});
				d ||
					(((c = t(function (t, n) {
						return (
							Ac(t, c, e),
							(t = Wh(new s(), t, c)),
							null != n &&
								Jh(n, t[i], { that: t, AS_ENTRIES: r }),
							t
						);
					})).prototype = a),
					(a.constructor = c)),
					(p || b) && (l("delete"), l("has"), r && l("get")),
					(b || h) && l(i),
					o && a.clear && delete a.clear;
			}
			return (
				(u[e] = c),
				ea({ global: !0, forced: c != s }, u),
				zc(c, e),
				o || n.setStrong(c, e, r),
				c
			);
		},
		Py = qb.f,
		Eq = Sk.fastKey,
		Fq = cb.set,
		Tk = cb.getterFor,
		Gq = {
			getConstructor: function (e, t, n, r) {
				var o = e(function (e, i) {
						Ac(e, o, t),
							Fq(e, {
								type: t,
								index: jc(null),
								first: void 0,
								last: void 0,
								size: 0,
							}),
							wa || (e.size = 0),
							null != i &&
								Jh(i, e[r], { that: e, AS_ENTRIES: n });
					}),
					i = Tk(t),
					s = function (e, t, n) {
						var r,
							o = i(e),
							s = a(e, t);
						return (
							s
								? (s.value = n)
								: ((o.last = s =
										{
											index: (r = Eq(t, !0)),
											key: t,
											value: n,
											previous: (t = o.last),
											next: void 0,
											removed: !1,
										}),
								  o.first || (o.first = s),
								  t && (t.next = s),
								  wa ? o.size++ : e.size++,
								  "F" !== r && (o.index[r] = s)),
							e
						);
					},
					a = function (e, t) {
						e = i(e);
						var n = Eq(t);
						if ("F" !== n) return e.index[n];
						for (e = e.first; e; e = e.next)
							if (e.key == t) return e;
					};
				return (
					kf(o.prototype, {
						clear: function () {
							for (var e = i(this), t = e.index, n = e.first; n; )
								(n.removed = !0),
									n.previous &&
										(n.previous = n.previous.next = void 0),
									delete t[n.index],
									(n = n.next);
							(e.first = e.last = void 0),
								wa ? (e.size = 0) : (this.size = 0);
						},
						delete: function (e) {
							var t = i(this);
							if ((e = a(this, e))) {
								var n = e.next,
									r = e.previous;
								delete t.index[e.index],
									(e.removed = !0),
									r && (r.next = n),
									n && (n.previous = r),
									t.first == e && (t.first = n),
									t.last == e && (t.last = r),
									wa ? t.size-- : this.size--;
							}
							return !!e;
						},
						forEach: function (e) {
							for (
								var t,
									n = i(this),
									r = Dd(
										e,
										1 < arguments.length
											? arguments[1]
											: void 0,
										3
									);
								(t = t ? t.next : n.first);

							)
								for (r(t.value, t.key, this); t && t.removed; )
									t = t.previous;
						},
						has: function (e) {
							return !!a(this, e);
						},
					}),
					kf(
						o.prototype,
						n
							? {
									get: function (e) {
										return (e = a(this, e)) && e.value;
									},
									set: function (e, t) {
										return s(this, 0 === e ? 0 : e, t);
									},
							  }
							: {
									add: function (e) {
										return s(
											this,
											(e = 0 === e ? 0 : e),
											e
										);
									},
							  }
					),
					wa &&
						Py(o.prototype, "size", {
							get: function () {
								return i(this).size;
							},
						}),
					o
				);
			},
			setStrong: function (e, t, n) {
				var r = t + " Iterator",
					o = Tk(t),
					i = Tk(r);
				Wj(
					e,
					t,
					function (e, t) {
						Fq(this, {
							type: r,
							target: e,
							state: o(e),
							kind: t,
							last: void 0,
						});
					},
					function () {
						for (
							var e = i(this), t = e.kind, n = e.last;
							n && n.removed;

						)
							n = n.previous;
						return e.target &&
							(e.last = n = n ? n.next : e.state.first)
							? "keys" == t
								? { value: n.key, done: !1 }
								: "values" == t
								? { value: n.value, done: !1 }
								: { value: [n.key, n.value], done: !1 }
							: ((e.target = void 0),
							  { value: void 0, done: !0 });
					},
					n ? "entries" : "values",
					!n,
					!0
				),
					og(t);
			},
		};
	Dq(
		"Set",
		function (e) {
			return function () {
				return e(this, arguments.length ? arguments[0] : void 0);
			};
		},
		Gq
	);
	var Uk = Pc("Reflect", "apply"),
		Qy = Function.apply,
		Ry = !la(function () {
			Uk(function () {});
		});
	ea(
		{ target: "Reflect", stat: !0, forced: Ry },
		{
			apply: function (e, t, n) {
				return Wb(e), Ia(n), Uk ? Uk(e, t, n) : Qy.call(e, t, n);
			},
		}
	),
		ea({ target: "Reflect", stat: !0 }, { ownKeys: so });
	var Hq = Fa("isConcatSpreadable"),
		Sy =
			51 <= Cd ||
			!la(function () {
				var e = [];
				return (e[Hq] = !1), e.concat()[0] !== e;
			}),
		Ty = kg("concat");
	ea(
		{ target: "Array", proto: !0, forced: !Sy || !Ty },
		{
			concat: function (e) {
				var t,
					n = pb(this),
					r = Dh(n, 0),
					o = 0,
					i = -1;
				for (t = arguments.length; i < t; i++) {
					var s = -1 === i ? n : arguments[i],
						a = s;
					if (xa(a)) {
						var c = a[Hq];
						a = void 0 !== c ? !!c : Ed(a);
					} else a = !1;
					if (a) {
						if (9007199254740991 < o + (c = Ma(s.length)))
							throw TypeError("Maximum allowed index exceeded");
						for (a = 0; a < c; a++, o++) a in s && hf(r, o, s[a]);
					} else {
						if (9007199254740991 <= o)
							throw TypeError("Maximum allowed index exceeded");
						hf(r, o++, s);
					}
				}
				return (r.length = o), r;
			},
		}
	);
	var Uy = Bk,
		Vy = la(function () {
			return !Object.getOwnPropertyNames(1);
		});
	ea({ target: "Object", stat: !0, forced: Vy }, { getOwnPropertyNames: Uy });
	var Wy = de.f,
		Xy = dc.f,
		Yy = qb.f,
		Kd = R.Number,
		ci = Kd.prototype,
		Zy = "Number" == xc(jc(ci)),
		Iq = function (e) {
			var t,
				n = Oc(e, !1);
			if ("string" == typeof n && 2 < n.length)
				if (43 === (e = (n = Oj(n)).charCodeAt(0)) || 45 === e) {
					if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN;
				} else if (48 === e) {
					switch (n.charCodeAt(1)) {
						case 66:
						case 98:
							e = 2;
							var r = 49;
							break;
						case 79:
						case 111:
							(e = 8), (r = 55);
							break;
						default:
							return +n;
					}
					var o = (n = n.slice(2)).length;
					for (t = 0; t < o; t++) {
						var i = n.charCodeAt(t);
						if (48 > i || i > r) return NaN;
					}
					return parseInt(n, e);
				}
			return +n;
		};
	if (Qc("Number", !Kd(" 0o1") || !Kd("0b1") || Kd("+0x1"))) {
		for (
			var le = function (e) {
					var t = 1 > arguments.length ? 0 : e,
						n = this;
					return n instanceof le &&
						(Zy
							? la(function () {
									ci.valueOf.call(n);
							  })
							: "Number" != xc(n))
						? Wh(new Kd(Iq(t)), n, le)
						: Iq(t);
				},
				Jq = wa
					? Wy(Kd)
					: "MAX_VALUE MIN_VALUE NaN NEGATIVE_INFINITY POSITIVE_INFINITY EPSILON isFinite isInteger isNaN isSafeInteger MAX_SAFE_INTEGER MIN_SAFE_INTEGER parseFloat parseInt isInteger fromString range".split(
							" "
					  ),
				Vk = 0,
				di;
			Jq.length > Vk;
			Vk++
		)
			ka(Kd, (di = Jq[Vk])) && !ka(le, di) && Yy(le, di, Xy(Kd, di));
		(le.prototype = ci), (ci.constructor = le), Za(R, "Number", le);
	}
	var sf =
			"object" ===
			("undefined" == typeof Reflect ? "undefined" : qa(Reflect))
				? Reflect
				: null,
		Kq =
			sf && "function" == typeof sf.apply
				? sf.apply
				: function (e, t, n) {
						return Function.prototype.apply.call(e, t, n);
				  },
		$y =
			sf && "function" == typeof sf.ownKeys
				? sf.ownKeys
				: Object.getOwnPropertySymbols
				? function (e) {
						return Object.getOwnPropertyNames(e).concat(
							Object.getOwnPropertySymbols(e)
						);
				  }
				: function (e) {
						return Object.getOwnPropertyNames(e);
				  },
		Lq =
			Number.isNaN ||
			function (e) {
				return e != e;
			};
	(Ba.EventEmitter = Ba),
		(Ba.prototype._events = void 0),
		(Ba.prototype._eventsCount = 0),
		(Ba.prototype._maxListeners = void 0);
	var Mq = 10;
	Object.defineProperty(Ba, "defaultMaxListeners", {
		enumerable: !0,
		get: function () {
			return Mq;
		},
		set: function (e) {
			if ("number" != typeof e || 0 > e || Lq(e))
				throw new RangeError(
					'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
						e +
						"."
				);
			Mq = e;
		},
	}),
		(Ba.init = function () {
			(void 0 !== this._events &&
				this._events !== Object.getPrototypeOf(this)._events) ||
				((this._events = Object.create(null)), (this._eventsCount = 0)),
				(this._maxListeners = this._maxListeners || void 0);
		}),
		(Ba.prototype.setMaxListeners = function (e) {
			if ("number" != typeof e || 0 > e || Lq(e))
				throw new RangeError(
					'The value of "n" is out of range. It must be a non-negative number. Received ' +
						e +
						"."
				);
			return (this._maxListeners = e), this;
		}),
		(Ba.prototype.getMaxListeners = function () {
			return void 0 === this._maxListeners
				? Ba.defaultMaxListeners
				: this._maxListeners;
		}),
		(Ba.prototype.emit = function (e) {
			for (var t = [], n = 1; n < arguments.length; n++)
				t.push(arguments[n]);
			n = "error" === e;
			var r = this._events;
			if (void 0 !== r) n = n && void 0 === r.error;
			else if (!n) return !1;
			if (n) {
				var o;
				if ((0 < t.length && (o = t[0]), o instanceof Error)) throw o;
				throw (
					(((t = Error(
						"Unhandled error." + (o ? " (" + o.message + ")" : "")
					)).context = o),
					t)
				);
			}
			if (void 0 === (n = r[e])) return !1;
			if ("function" == typeof n) Kq(n, this, t);
			else
				for (r = Gm(n, (o = n.length)), n = 0; n < o; ++n)
					Kq(r[n], this, t);
			return !0;
		}),
		(Ba.prototype.addListener = function (e, t) {
			return Dm(this, e, t, !1);
		}),
		(Ba.prototype.on = Ba.prototype.addListener),
		(Ba.prototype.prependListener = function (e, t) {
			return Dm(this, e, t, !0);
		}),
		(Ba.prototype.once = function (e, t) {
			return Wg(t), this.on(e, Em(this, e, t)), this;
		}),
		(Ba.prototype.prependOnceListener = function (e, t) {
			return Wg(t), this.prependListener(e, Em(this, e, t)), this;
		}),
		(Ba.prototype.removeListener = function (e, t) {
			var n;
			Wg(t);
			var r = this._events;
			if (void 0 === r) return this;
			var o = r[e];
			if (void 0 === o) return this;
			if (o === t || o.listener === t)
				0 == --this._eventsCount
					? (this._events = Object.create(null))
					: (delete r[e],
					  r.removeListener &&
							this.emit("removeListener", e, o.listener || t));
			else if ("function" != typeof o) {
				var i = -1;
				for (n = o.length - 1; 0 <= n; n--)
					if (o[n] === t || o[n].listener === t) {
						var s = o[n].listener;
						i = n;
						break;
					}
				if (0 > i) return this;
				if (0 === i) o.shift();
				else {
					for (; i + 1 < o.length; i++) o[i] = o[i + 1];
					o.pop();
				}
				1 === o.length && (r[e] = o[0]),
					void 0 !== r.removeListener &&
						this.emit("removeListener", e, s || t);
			}
			return this;
		}),
		(Ba.prototype.off = Ba.prototype.removeListener),
		(Ba.prototype.removeAllListeners = function (e) {
			var t = this._events;
			if (void 0 === t) return this;
			if (void 0 === t.removeListener)
				return (
					0 === arguments.length
						? ((this._events = Object.create(null)),
						  (this._eventsCount = 0))
						: void 0 !== t[e] &&
						  (0 == --this._eventsCount
								? (this._events = Object.create(null))
								: delete t[e]),
					this
				);
			if (0 === arguments.length) {
				var n = Object.keys(t);
				for (t = 0; t < n.length; ++t) {
					var r = n[t];
					"removeListener" !== r && this.removeAllListeners(r);
				}
				return (
					this.removeAllListeners("removeListener"),
					(this._events = Object.create(null)),
					(this._eventsCount = 0),
					this
				);
			}
			if ("function" == typeof (n = t[e])) this.removeListener(e, n);
			else if (void 0 !== n)
				for (t = n.length - 1; 0 <= t; t--)
					this.removeListener(e, n[t]);
			return this;
		}),
		(Ba.prototype.listeners = function (e) {
			return Fm(this, e, !0);
		}),
		(Ba.prototype.rawListeners = function (e) {
			return Fm(this, e, !1);
		}),
		(Ba.listenerCount = function (e, t) {
			return "function" == typeof e.listenerCount
				? e.listenerCount(t)
				: Hm.call(e, t);
		}),
		(Ba.prototype.listenerCount = Hm),
		(Ba.prototype.eventNames = function () {
			return 0 < this._eventsCount ? $y(this._events) : [];
		}),
		(Ba.once = function (e, t) {
			return new Promise(function (n, r) {
				function o(n) {
					e.removeListener(t, i), r(n);
				}
				function i() {
					"function" == typeof e.removeListener &&
						e.removeListener("error", o),
						n([].slice.call(arguments));
				}
				Im(e, t, i, { once: !0 }),
					"error" !== t && fu(e, o, { once: !0 });
			});
		});
	var tf = Object.assign,
		Nq = Object.defineProperty,
		Bg =
			!tf ||
			la(function () {
				if (
					wa &&
					1 !==
						tf(
							{ b: 1 },
							tf(
								Nq({}, "a", {
									enumerable: !0,
									get: function () {
										Nq(this, "b", {
											value: 3,
											enumerable: !1,
										});
									},
								}),
								{ b: 2 }
							)
						).b
				)
					return !0;
				var e = {},
					t = {},
					n = Symbol();
				return (
					(e[n] = 7),
					"abcdefghijklmnopqrst".split("").forEach(function (e) {
						t[e] = e;
					}),
					7 != tf({}, e)[n] ||
						"abcdefghijklmnopqrst" != ed(tf({}, t)).join("")
				);
			})
				? function (e, t) {
						for (
							var n = pb(e),
								r = arguments.length,
								o = 1,
								i = gg.f,
								s = eg;
							r > o;

						)
							for (
								var a,
									c = fg(arguments[o++]),
									u = i ? ed(c).concat(i(c)) : ed(c),
									l = u.length,
									f = 0;
								l > f;

							)
								(a = u[f++]),
									(!wa || s.call(c, a)) && (n[a] = c[a]);
						return n;
				  }
				: tf;
	ea(
		{ target: "Object", stat: !0, forced: Object.assign !== Bg },
		{ assign: Bg }
	),
		Dq(
			"Map",
			function (e) {
				return function () {
					return e(this, arguments.length ? arguments[0] : void 0);
				};
			},
			Gq
		);
	var az = Math.log,
		bz = Math.LN2;
	ea(
		{ target: "Math", stat: !0 },
		{
			log2: function (e) {
				return az(e) / bz;
			},
		}
	);
	var cz = qb.f,
		dz = de.f,
		ez = cb.enforce,
		fz = Fa("match"),
		Vc = R.RegExp,
		Wk = Vc.prototype,
		Cg = /a/g,
		Xk = /a/g,
		Yk = new Vc(Cg) !== Cg;
	if (
		wa &&
		Qc(
			"RegExp",
			!Yk ||
				Rc ||
				la(function () {
					return (
						(Xk[fz] = !1),
						Vc(Cg) != Cg || Vc(Xk) == Xk || "/a/i" != Vc(Cg, "i")
					);
				})
		)
	) {
		for (
			var ld = function (e, t) {
					var n,
						r = this instanceof ld,
						o = Lj(e),
						i = void 0 === t;
					return (
						(!r && o && e.constructor === ld && i) ||
							(Yk
								? o && !i && (e = e.source)
								: e instanceof ld &&
								  (i && (t = Gj.call(e)), (e = e.source)),
							Rc &&
								(n = !!t && -1 < t.indexOf("y")) &&
								(t = t.replace(/y/g, "")),
							(e = Wh(
								Yk ? new Vc(e, t) : Vc(e, t),
								r ? this : Wk,
								ld
							)),
							Rc && n && (ez(e).sticky = !0)),
						e
					);
				},
				gz = function (e) {
					(e in ld) ||
						cz(ld, e, {
							configurable: !0,
							get: function () {
								return Vc[e];
							},
							set: function (t) {
								Vc[e] = t;
							},
						});
				},
				Oq = dz(Vc),
				Pq = 0;
			Oq.length > Pq;

		)
			gz(Oq[Pq++]);
		(Wk.constructor = ld), (ld.prototype = Wk), Za(R, "RegExp", ld);
	}
	og("RegExp"),
		xg("Float32", function (e) {
			return function (t, n, r) {
				return e(this, t, n, r);
			};
		}),
		xg("Float64", function (e) {
			return function (t, n, r) {
				return e(this, t, n, r);
			};
		}),
		xg("Uint32", function (e) {
			return function (t, n, r) {
				return e(this, t, n, r);
			};
		}),
		xg("Uint16", function (e) {
			return function (t, n, r) {
				return e(this, t, n, r);
			};
		});
	var Zk = function (e, t) {
			return e === t
				? 0
				: null == e
				? null == t
					? 0
					: -1
				: null == t
				? null == e
					? 0
					: 1
				: "function" == typeof e.compare
				? e.compare(t)
				: "function" == typeof t.compare
				? -t.compare(e)
				: e < t
				? -1
				: e > t
				? 1
				: 0;
		},
		$k = [],
		Qq = $k.sort,
		hz = la(function () {
			$k.sort(void 0);
		}),
		iz = la(function () {
			$k.sort(null);
		}),
		jz = ff("sort");
	ea(
		{ target: "Array", proto: !0, forced: hz || !iz || !jz },
		{
			sort: function (e) {
				return void 0 === e
					? Qq.call(pb(this))
					: Qq.call(pb(this), Wb(e));
			},
		}
	);
	var Rq = Object.getPrototypeOf({}),
		Dg = function (e, t) {
			var n;
			return (
				e === t ||
				(null == e
					? e == t
					: "function" === qa(e.equiv)
					? e.equiv(t)
					: null == t
					? e == t
					: "function" === qa(t.equiv)
					? t.equiv(e)
					: "string" !== qa(e) &&
					  "string" !== qa(t) &&
					  ((null != (n = Object.getPrototypeOf(e)) && n !== Rq) ||
					  (null != (n = Object.getPrototypeOf(t)) && n !== Rq)
							? "function" !== qa(e) &&
							  void 0 !== e.length &&
							  "function" !== qa(t) &&
							  void 0 !== t.length
								? lz(e, t)
								: e instanceof Set && t instanceof Set
								? mz(e, t)
								: e instanceof Map && t instanceof Map
								? nz(e, t)
								: e instanceof Date && t instanceof Date
								? e.getTime() === t.getTime()
								: e instanceof RegExp && t instanceof RegExp
								? e.toString() === t.toString()
								: e != e && t != t
							: kz(e, t)))
			);
		},
		lz = function (e, t) {
			var n =
					2 < arguments.length && void 0 !== arguments[2]
						? arguments[2]
						: Dg,
				r = e.length;
			if (r === t.length) for (; 0 <= --r && n(e[r], t[r]); );
			return 0 > r;
		},
		mz = function (e, t) {
			var n =
				2 < arguments.length && void 0 !== arguments[2]
					? arguments[2]
					: Dg;
			return (
				e.size === t.size && n(Z(e.keys()).sort(), Z(t.keys()).sort())
			);
		},
		nz = function (e, t) {
			var n =
				2 < arguments.length && void 0 !== arguments[2]
					? arguments[2]
					: Dg;
			return e.size === t.size && n(Z(e).sort(), Z(t).sort());
		},
		kz = function (e, t) {
			var n =
				2 < arguments.length && void 0 !== arguments[2]
					? arguments[2]
					: Dg;
			if (Object.keys(e).length !== Object.keys(t).length) return !1;
			for (var r in e)
				if (!t.hasOwnProperty(r) || !n(e[r], t[r])) return !1;
			return !0;
		},
		Sq = function (e) {
			var t =
				1 < arguments.length && void 0 !== arguments[1]
					? arguments[1]
					: function (e) {
							return void 0 !== e ? ": " + e : "";
					  };
			return (function (n) {
				function r(n) {
					return va(this, r), o.call(this, e(n) + t(n));
				}
				Ga(r, n);
				var o = Ha(r);
				return r;
			})(Kf(Error));
		},
		oz = Sq(function () {
			return "illegal argument(s)";
		}),
		ei = function (e) {
			throw new oz(e);
		},
		al = Sq(function () {
			return "index out of bounds";
		}),
		Tq = 1 / 4294967295,
		pz = (function () {
			function e() {
				va(this, e);
			}
			return (
				eb(e, [
					{
						key: "float",
						value: function () {
							var e =
								0 < arguments.length && void 0 !== arguments[0]
									? arguments[0]
									: 1;
							return this.int() * Tq * e;
						},
					},
					{
						key: "norm",
						value: function () {
							var e =
								0 < arguments.length && void 0 !== arguments[0]
									? arguments[0]
									: 1;
							return 2 * (this.int() * Tq - 0.5) * e;
						},
					},
					{
						key: "minmax",
						value: function (e, t) {
							return this.float() * (t - e) + e;
						},
					},
				]),
				e
			);
		})(),
		bl = Math.random,
		qz = new ((function (e) {
			function t() {
				return va(this, t), n.apply(this, arguments);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "int",
						value: function () {
							return (4294967296 * bl()) >>> 0;
						},
					},
					{
						key: "float",
						value: function () {
							var e =
								0 < arguments.length && void 0 !== arguments[0]
									? arguments[0]
									: 1;
							return bl() * e;
						},
					},
					{
						key: "norm",
						value: function () {
							var e =
								0 < arguments.length && void 0 !== arguments[0]
									? arguments[0]
									: 1;
							return 2 * (bl() - 0.5) * e;
						},
					},
				]),
				t
			);
		})(pz))(),
		Ni = Symbol(),
		Lm = function () {},
		rz = Sk.onFreeze,
		cl = Object.freeze,
		sz = la(function () {
			cl(1);
		});
	ea(
		{ target: "Object", stat: !0, forced: sz, sham: !Cq },
		{
			freeze: function (e) {
				return cl && xa(e) ? cl(rz(e)) : e;
			},
		}
	);
	var tz = ff("reduce"),
		uz = !fd && 79 < Cd && 83 > Cd;
	ea(
		{ target: "Array", proto: !0, forced: !tz || uz },
		{
			reduce: function (e) {
				return $p(
					this,
					e,
					arguments.length,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var Km = function (e) {
			return null != e && "function" == typeof e.xform ? e.xform() : e;
		},
		Xg = (function () {
			function e(t) {
				va(this, e), (this.value = t);
			}
			return (
				eb(e, [
					{
						key: "deref",
						value: function () {
							return this.value;
						},
					},
				]),
				e
			);
		})(),
		Oi = function (e) {
			return e instanceof Xg ? e.deref() : e;
		},
		hu = function (e, t) {
			return [
				e,
				function (e) {
					return e;
				},
				t,
			];
		},
		vz = N.mark(function (e, t) {
			var n, r, o, i, s, a;
			return N.wrap(function (c) {
				for (;;)
					switch ((c.prev = c.next)) {
						case 0:
							(n = Km(e)(gu())), (r = n[1]), (o = n[2]), (i = 0);
						case 4:
							if (!(i < t.length)) {
								c.next = 15;
								break;
							}
							if (((s = t[i]), !((a = o([], s)) instanceof Xg))) {
								c.next = 10;
								break;
							}
							return c.delegateYield(Oi(r(a.deref())), "t0", 9);
						case 9:
							return c.abrupt("return");
						case 10:
							if (!a.length) {
								c.next = 12;
								break;
							}
							return c.delegateYield(a, "t1", 12);
						case 12:
							i++, (c.next = 4);
							break;
						case 15:
							return c.delegateYield(Oi(r([])), "t2", 16);
						case 16:
						case "end":
							return c.stop();
					}
			}, vz);
		}),
		iu = N.mark(Jm),
		ju = function (e, t) {
			return [e[0], e[1], t];
		},
		wz = (function () {
			function e(t) {
				va(this, e), (this._length = 0), t && this.into(t);
			}
			return (
				eb(e, [
					{
						key: "length",
						get: function () {
							return this._length;
						},
					},
					{
						key: "copy",
						value: function () {
							return new e(this);
						},
					},
					{
						key: "empty",
						value: function () {
							return new e();
						},
					},
					{
						key: "clear",
						value: function () {
							this.release();
						},
					},
					{
						key: "release",
						value: function () {
							for (var e, t = this.head; t; )
								(e = t.next),
									delete t.value,
									delete t.prev,
									delete t.next,
									(t = e);
							return (
								delete this.head,
								delete this.tail,
								(this._length = 0),
								!0
							);
						},
					},
					{
						key: "compare",
						value: function (e) {
							var t = this._length;
							if (t < e._length) return -1;
							if (t > e._length) return 1;
							if (0 === t) return 0;
							(t = this.head), (e = e.head);
							for (var n = 0; t && 0 == n; )
								(n = Zk(t.value, e.value)),
									(t = t.next),
									(e = e.next);
							return n;
						},
					},
					{
						key: "equiv",
						value: function (t) {
							if (
								!(
									t instanceof e ||
									(null != t &&
										"function" != typeof t &&
										void 0 !== t.length)
								) ||
								this._length !== t.length
							)
								return !1;
							if (!this._length || this === t) return !0;
							for (var n = this.head, r = 0; r < t.length; r++) {
								if (!Dg(n.value, t[r])) return !1;
								n = n.next;
							}
							return !0;
						},
					},
					{
						key: Symbol.iterator,
						value: N.mark(function e() {
							var t;
							return N.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												t = this.head;
											case 1:
												if (!t) {
													e.next = 7;
													break;
												}
												return (e.next = 4), t.value;
											case 4:
												(t = t.next), (e.next = 1);
												break;
											case 7:
											case "end":
												return e.stop();
										}
								},
								e,
								this
							);
						}),
					},
					{
						key: "seq",
						value: function () {
							var e =
									0 < arguments.length &&
									void 0 !== arguments[0]
										? arguments[0]
										: 0,
								t =
									1 < arguments.length &&
									void 0 !== arguments[1]
										? arguments[1]
										: this.length;
							if (!(e >= t || 0 > e)) {
								e = this.nthCell(e);
								var n = this.nthCell(t - 1);
								return (
									(t = function e(t) {
										return {
											first: function () {
												return t.value;
											},
											next: function () {
												return t !== n && t.next
													? e(t.next)
													: void 0;
											},
										};
									}),
									e ? t(e) : void 0
								);
							}
						},
					},
					{
						key: "cycle",
						value: N.mark(function e() {
							return N.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return e.delegateYield(
													this,
													"t0",
													2
												);
											case 2:
												e.next = 0;
												break;
											case 4:
											case "end":
												return e.stop();
										}
								},
								e,
								this
							);
						}),
					},
					{
						key: "$reduce",
						value: function (e, t) {
							for (var n = this.head; n && !(t instanceof Xg); )
								(t = e(t, n.value)), (n = n.next);
							return t;
						},
					},
					{
						key: "drop",
						value: function () {
							var e = this.head;
							if (e)
								return (
									(this.head = e.next)
										? delete this.head.prev
										: delete this.tail,
									this._length--,
									e.value
								);
						},
					},
					{
						key: "cons",
						value: function (e) {
							return (
								(e = { value: e, next: this.head }),
								this.head
									? (this.head.prev = e)
									: (this.tail = e),
								(this.head = e),
								this._length++,
								this
							);
						},
					},
					{
						key: "insertBefore",
						value: function (e, t) {
							return (
								e || ei("cell is undefined"),
								(t = { value: t, next: e, prev: e.prev }),
								e.prev ? (e.prev.next = t) : (this.head = t),
								(e.prev = t),
								this._length++,
								this
							);
						},
					},
					{
						key: "insertAfter",
						value: function (e, t) {
							return (
								e || ei("cell is undefined"),
								(t = { value: t, next: e.next, prev: e }),
								e.next ? (e.next.prev = t) : (this.tail = t),
								(e.next = t),
								this._length++,
								this
							);
						},
					},
					{
						key: "insertBeforeNth",
						value: function (e, t) {
							if ((0 > e && (e += this._length), 0 >= e))
								return this.cons(t);
							if (0 > e || e >= this._length) throw new al(e);
							return this.insertBefore(this.nthCellUnsafe(e), t);
						},
					},
					{
						key: "insertAfterNth",
						value: function (e, t) {
							if (
								(0 > e && (e += this._length),
								e >= this._length - 1)
							)
								return this.push(t);
							if (0 > e || e >= this._length) throw new al(e);
							return this.insertAfter(this.nthCellUnsafe(e), t);
						},
					},
					{
						key: "insertSorted",
						value: function (e, t) {
							t = t || Zk;
							for (var n = this.head; n; ) {
								if (0 >= t(e, n.value))
									return this.insertBefore(n, e);
								n = n.next;
							}
							return this.push(e);
						},
					},
					{
						key: "find",
						value: function (e) {
							for (var t = this.head; t; ) {
								if (t.value === e) return t;
								t = t.next;
							}
						},
					},
					{
						key: "findWith",
						value: function (e) {
							for (var t = this.head; t; ) {
								if (e(t.value)) return t;
								t = t.next;
							}
						},
					},
					{
						key: "concat",
						value: function () {
							for (
								var e = this.copy(),
									t = arguments.length,
									n = Array(t),
									r = 0;
								r < t;
								r++
							)
								n[r] = arguments[r];
							for (t = 0; t < n.length; t++) e.into(n[t]);
							return e;
						},
					},
					{
						key: "into",
						value: function (e) {
							for (var t = 0; t < e.length; t++) this.push(e[t]);
						},
					},
					{
						key: "slice",
						value: function () {
							var t =
									0 < arguments.length &&
									void 0 !== arguments[0]
										? arguments[0]
										: 0,
								n =
									1 < arguments.length &&
									void 0 !== arguments[1]
										? arguments[1]
										: this.length;
							(t = 0 > t ? t + this._length : t),
								(n = 0 > n ? n + this._length : n),
								(0 > t || 0 > n) &&
									ei("invalid indices: ${from} / ${to}");
							for (
								var r = new e(), o = this.nthCell(t);
								o && ++t <= n;

							)
								r.push(o.value), (o = o.next);
							return r;
						},
					},
					{
						key: "splice",
						value: function (t) {
							var n =
									1 < arguments.length &&
									void 0 !== arguments[1]
										? arguments[1]
										: 0,
								r =
									2 < arguments.length
										? arguments[2]
										: void 0;
							if ("number" == typeof t) {
								if (
									(0 > t && (t += this._length),
									0 > t || t >= this._length)
								)
									throw new al(t);
								var o = this.nthCellUnsafe(t);
							} else o = t;
							var i = new e();
							if (0 < n)
								for (; o && 0 < n--; )
									this.remove(o),
										i.push(o.value),
										(o = o.next);
							else o && (o = o.next);
							if (r)
								if (o)
									for (n = 0; n < r.length; n++)
										this.insertBefore(o, r[n]);
								else
									for (o = 0; o < r.length; o++)
										this.push(r[o]);
							return i;
						},
					},
					{
						key: "remove",
						value: function (e) {
							return (
								e.prev
									? (e.prev.next = e.next)
									: (this.head = e.next),
								e.next
									? (e.next.prev = e.prev)
									: (this.tail = e.prev),
								this._length--,
								this
							);
						},
					},
					{
						key: "swap",
						value: function (e, t) {
							if (e !== t) {
								var n = e.value;
								(e.value = t.value), (t.value = n);
							}
							return this;
						},
					},
					{
						key: "push",
						value: function (e) {
							return this.tail
								? ((e = { value: e, prev: this.tail }),
								  (this.tail = this.tail.next = e),
								  this._length++,
								  this)
								: this.cons(e);
						},
					},
					{
						key: "pop",
						value: function () {
							var e = this.tail;
							if (e)
								return (
									(this.tail = e.prev)
										? delete this.tail.next
										: delete this.head,
									this._length--,
									e.value
								);
						},
					},
					{
						key: "first",
						value: function () {
							return this.head && this.head.value;
						},
					},
					{
						key: "peek",
						value: function () {
							return this.tail && this.tail.value;
						},
					},
					{
						key: "setHead",
						value: function (e) {
							return this.head
								? ((this.head.value = e), this)
								: this.cons(e);
						},
					},
					{
						key: "setTail",
						value: function (e) {
							return this.tail
								? ((this.tail.value = e), this)
								: this.push(e);
						},
					},
					{
						key: "setNth",
						value: function (e, t) {
							var n = this.nthCell(e);
							return (
								!n && ei("index out of bounds: ".concat(e)),
								(n.value = t),
								this
							);
						},
					},
					{
						key: "nth",
						value: function (e, t) {
							return (e = this.nthCell(e)) ? e.value : t;
						},
					},
					{
						key: "nthCell",
						value: function (e) {
							if (
								(0 > e && (e += this._length),
								!(0 > e || e >= this._length))
							)
								return this.nthCellUnsafe(e);
						},
					},
					{
						key: "rotateLeft",
						value: function () {
							switch (this._length) {
								case 0:
								case 1:
									return this;
								case 2:
									return this.swap(this.head, this.tail);
								default:
									return this.push(this.drop());
							}
						},
					},
					{
						key: "rotateRight",
						value: function () {
							switch (this._length) {
								case 0:
								case 1:
									return this;
								case 2:
									return this.swap(this.head, this.tail);
								default:
									var e = this.peek();
									return this.pop(), this.cons(e);
							}
						},
					},
					{
						key: "map",
						value: function (t) {
							for (var n = new e(), r = this.head; r; )
								n.push(t(r.value)), (r = r.next);
							return n;
						},
					},
					{
						key: "filter",
						value: function (t) {
							for (var n = new e(), r = this.head; r; )
								t(r.value) && n.push(r.value), (r = r.next);
							return n;
						},
					},
					{
						key: "reduce",
						value: function (e, t) {
							for (var n = this.head; n; )
								(t = e(t, n.value)), (n = n.next);
							return t;
						},
					},
					{
						key: "shuffle",
						value: function (e) {
							var t =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: qz;
							if (2 > this._length) return this;
							for (
								e =
									null != e
										? e
										: Math.ceil(
												1.5 * Math.log2(this._length)
										  );
								0 < e;
								e--
							)
								for (var n = this.head; n; ) {
									var r = n.next;
									0.5 > t.float()
										? this.asHead(n)
										: this.asTail(n),
										(n = r);
								}
							return this;
						},
					},
					{
						key: "sort",
						value: function () {
							var e =
								0 < arguments.length && void 0 !== arguments[0]
									? arguments[0]
									: Zk;
							if (!this._length) return this;
							for (var t = 1; ; ) {
								var n = this.head;
								this.tail = this.head = void 0;
								for (var r = 0; n; ) {
									r++;
									for (
										var o = n, i = 0, s = 0;
										s < t && (i++, (o = o.next));
										s++
									);
									for (s = t; 0 < i || (0 < s && o); ) {
										if (0 === i) {
											var a = o;
											(o = o.next), s--;
										} else
											o && 0 !== s
												? 0 >= e(n.value, o.value)
													? ((a = n),
													  (n = n.next),
													  i--)
													: ((a = o),
													  (o = o.next),
													  s--)
												: ((a = n), (n = n.next), i--);
										this.tail
											? (this.tail.next = a)
											: (this.head = a),
											(a.prev = this.tail),
											(this.tail = a);
									}
									n = o;
								}
								if (((this.tail.next = void 0), 1 >= r))
									return this;
								t *= 2;
							}
						},
					},
					{
						key: "reverse",
						value: function () {
							for (
								var e = this.head,
									t = this.tail,
									n =
										(this._length >>> 1) +
										(1 & this._length);
								e && t && 0 < n;

							) {
								var r = e.value;
								(e.value = t.value),
									(t.value = r),
									(e = e.next),
									(t = t.prev),
									n--;
							}
							return this;
						},
					},
					{
						key: "asHead",
						value: function (e) {
							return (
								e === this.head ||
									(this.remove(e),
									(this.head.prev = e),
									(e.next = this.head),
									(e.prev = void 0),
									(this.head = e),
									this._length++),
								this
							);
						},
					},
					{
						key: "asTail",
						value: function (e) {
							return (
								e === this.tail ||
									(this.remove(e),
									(this.tail.next = e),
									(e.prev = this.tail),
									(e.next = void 0),
									(this.tail = e),
									this._length++),
								this
							);
						},
					},
					{
						key: "toString",
						value: function () {
							for (var e = [], t = this.head; t; )
								e.push(String(t.value)), (t = t.next);
							return e.join(", ");
						},
					},
					{
						key: "toJSON",
						value: function () {
							return Z(this);
						},
					},
					{
						key: "nthCellUnsafe",
						value: function (e) {
							if (e <= this._length >> 1)
								var t = this.head,
									n = "next";
							else
								(t = this.tail),
									(n = "prev"),
									(e = this._length - e - 1);
							for (; 0 < e-- && t; ) t = t[n];
							return t;
						},
					},
				]),
				e
			);
		})(),
		Wc = (function () {
			function e(t, n) {
				va(this, e),
					(n = Object.assign(
						{
							maxlen: 1 / 0,
							maxsize: 1 / 0,
							map: function () {
								return new Map();
							},
							ksize: function () {
								return 0;
							},
							vsize: function () {
								return 0;
							},
						},
						n
					)),
					(this.map = n.map()),
					(this.items = new wz()),
					(this._size = 0),
					(this.opts = n),
					t && this.into(t);
			}
			return (
				eb(e, [
					{
						key: "length",
						get: function () {
							return this.items.length;
						},
					},
					{
						key: "size",
						get: function () {
							return this._size;
						},
					},
					{
						key: Symbol.iterator,
						value: function () {
							return this.entries();
						},
					},
					{
						key: "entries",
						value: function () {
							return Yg(function (e) {
								return [e.k, e];
							}, this.items);
						},
					},
					{
						key: "keys",
						value: function () {
							return Yg(function (e) {
								return e.k;
							}, this.items);
						},
					},
					{
						key: "values",
						value: function () {
							return Yg(function (e) {
								return e.v;
							}, this.items);
						},
					},
					{
						key: "copy",
						value: function () {
							var e = this.empty();
							e.items = this.items.copy();
							for (var t = e.items.head; t; )
								e.map.set(t.value.k, t), (t = t.next);
							return e;
						},
					},
					{
						key: "empty",
						value: function () {
							return new e(null, this.opts);
						},
					},
					{
						key: "release",
						value: function () {
							(this._size = 0), this.map.clear();
							var e = this.opts.release;
							if (e) {
								for (var t; (t = this.items.drop()); )
									e(t.k, t.v);
								return !0;
							}
							return this.items.release();
						},
					},
					{
						key: "has",
						value: function (e) {
							return this.map.has(e);
						},
					},
					{
						key: "get",
						value: function (e, t) {
							return (e = this.map.get(e))
								? this.resetEntry(e)
								: t;
						},
					},
					{
						key: "set",
						value: function (e, t) {
							var n = this.opts.ksize(e) + this.opts.vsize(t),
								r = this.map.get(e);
							return (
								(this._size += Math.max(
									0,
									n - (r ? r.value.s : 0)
								)),
								this.ensureSize() &&
									this.doSetEntry(r, e, t, n),
								t
							);
						},
					},
					{
						key: "into",
						value: function (e) {
							for (var t = 0; t < e.length; t++) {
								var n = e[t];
								this.set(n[0], n[1]);
							}
							return this;
						},
					},
					{
						key: "getSet",
						value: function (e, t) {
							var n = this,
								r = this.map.get(e);
							return r
								? Promise.resolve(this.resetEntry(r))
								: t().then(function (t) {
										return n.set(e, t);
								  });
						},
					},
					{
						key: "delete",
						value: function (e) {
							return (
								!!(e = this.map.get(e)) &&
								(this.removeEntry(e), !0)
							);
						},
					},
					{
						key: "resetEntry",
						value: function (e) {
							return this.items.asTail(e), e.value.v;
						},
					},
					{
						key: "ensureSize",
						value: function () {
							for (
								var e = this.opts.release,
									t = this.opts.maxsize,
									n = this.opts.maxlen;
								this._size > t || this.length >= n;

							) {
								var r = this.items.drop();
								if (!r) return !1;
								this.map.delete(r.k),
									e && e(r.k, r.v),
									(this._size -= r.s);
							}
							return !0;
						},
					},
					{
						key: "removeEntry",
						value: function (e) {
							var t = e.value;
							this.map.delete(t.k),
								this.items.remove(e),
								this.opts.release &&
									this.opts.release(t.k, t.v),
								(this._size -= t.s);
						},
					},
					{
						key: "doSetEntry",
						value: function (e, t, n, r) {
							e
								? ((e.value.v = n),
								  (e.value.s = r),
								  this.items.asTail(e))
								: (this.items.push({ k: t, v: n, s: r }),
								  this.map.set(t, this.items.tail));
						},
					},
				]),
				e
			);
		})(),
		xz = (function (e) {
			function t(e, r) {
				return (
					va(this, t),
					(r = Object.assign({ ttl: 36e5 }, r)),
					n.call(this, e, r)
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "empty",
						value: function () {
							return new t(null, this.opts);
						},
					},
					{
						key: "has",
						value: function (e) {
							return void 0 !== this.get(e);
						},
					},
					{
						key: "get",
						value: function (e, t) {
							if ((e = this.map.get(e))) {
								if (e.value.t >= Date.now())
									return this.resetEntry(e);
								this.removeEntry(e);
							}
							return t;
						},
					},
					{
						key: "set",
						value: function (e, t) {
							var n =
									2 < arguments.length &&
									void 0 !== arguments[2]
										? arguments[2]
										: this.opts.ttl,
								r = this.opts.ksize(e) + this.opts.vsize(t),
								o = this.map.get(e);
							return (
								(this._size += Math.max(
									0,
									r - (o ? o.value.s : 0)
								)),
								this.ensureSize() &&
									((n = Date.now() + n),
									o
										? ((o.value.v = t),
										  (o.value.s = r),
										  (o.value.t = n),
										  this.items.asTail(o))
										: (this.items.push({
												k: e,
												v: t,
												s: r,
												t: n,
										  }),
										  this.map.set(e, this.items.tail))),
								t
							);
						},
					},
					{
						key: "getSet",
						value: function (e, t) {
							var n = this,
								r =
									2 < arguments.length &&
									void 0 !== arguments[2]
										? arguments[2]
										: this.opts.ttl,
								o = this.get(e);
							return o
								? Promise.resolve(o)
								: t().then(function (t) {
										return n.set(e, t, r);
								  });
						},
					},
					{
						key: "prune",
						value: function () {
							for (var e = Date.now(), t = this.items.head; t; )
								t.value.t < e && this.removeEntry(t),
									(t = t.next);
						},
					},
					{
						key: "ensureSize",
						value: function () {
							for (
								var e = this.opts.maxsize,
									n = this.opts.maxlen,
									r = Date.now(),
									o = this.items.head;
								o && (this._size > e || this.length >= n);

							)
								o.value.t < r && this.removeEntry(o),
									(o = o.next);
							return Li(Td(t.prototype), "ensureSize", this).call(
								this
							);
						},
					},
				]),
				t
			);
		})(Wc),
		Uq = "object" == qa(Ya) && Ya && Ya.Object === Object && Ya,
		yz =
			"object" == ("undefined" == typeof self ? "undefined" : qa(self)) &&
			self &&
			self.Object === Object &&
			self,
		$b = Uq || yz || Function("return this")(),
		lc = $b.Symbol,
		Vq = Object.prototype,
		zz = Vq.hasOwnProperty,
		Az = Vq.toString,
		Eg = lc ? lc.toStringTag : void 0,
		Bz = Object.prototype.toString,
		Wq = lc ? lc.toStringTag : void 0,
		me = function (e) {
			if (null == e)
				e = void 0 === e ? "[object Undefined]" : "[object Null]";
			else if (Wq && Wq in Object(e)) {
				var t = zz.call(e, Eg),
					n = e[Eg];
				try {
					e[Eg] = void 0;
					var r = !0;
				} catch (e) {}
				var o = Az.call(e);
				r && (t ? (e[Eg] = n) : delete e[Eg]), (e = o);
			} else e = Bz.call(e);
			return e;
		},
		Gb = function (e) {
			var t = qa(e);
			return null != e && ("object" == t || "function" == t);
		},
		jj = function (e) {
			return (
				!!Gb(e) &&
				("[object Function]" == (e = me(e)) ||
					"[object GeneratorFunction]" == e ||
					"[object AsyncFunction]" == e ||
					"[object Proxy]" == e)
			);
		},
		dl = $b["__core-js_shared__"],
		Xq = (function () {
			var e = /[^.]+$/.exec((dl && dl.keys && dl.keys.IE_PROTO) || "");
			return e ? "Symbol(src)_1." + e : "";
		})(),
		Cz = Function.prototype.toString,
		ne = function (e) {
			if (null != e) {
				try {
					return Cz.call(e);
				} catch (e) {}
				return e + "";
			}
			return "";
		},
		Dz = /^\[object .+?Constructor\]$/,
		Ez = RegExp(
			"^" +
				Function.prototype.toString
					.call(Object.prototype.hasOwnProperty)
					.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						"$1.*?"
					) +
				"$"
		),
		oe = function (e, t) {
			return (
				(e = null == e ? void 0 : e[t]),
				!Gb(e) || (Xq && Xq in e) || !(jj(e) ? Ez : Dz).test(ne(e))
					? void 0
					: e
			);
		},
		Fg = oe(Object, "create"),
		Fz = Object.prototype.hasOwnProperty,
		Gz = Object.prototype.hasOwnProperty;
	(Vd.prototype.clear = function () {
		(this.__data__ = Fg ? Fg(null) : {}), (this.size = 0);
	}),
		(Vd.prototype.delete = function (e) {
			return (
				(e = this.has(e) && delete this.__data__[e]),
				(this.size -= e ? 1 : 0),
				e
			);
		}),
		(Vd.prototype.get = function (e) {
			var t = this.__data__;
			return Fg
				? "__lodash_hash_undefined__" === (e = t[e])
					? void 0
					: e
				: Fz.call(t, e)
				? t[e]
				: void 0;
		}),
		(Vd.prototype.has = function (e) {
			var t = this.__data__;
			return Fg ? void 0 !== t[e] : Gz.call(t, e);
		}),
		(Vd.prototype.set = function (e, t) {
			var n = this.__data__;
			return (
				(this.size += this.has(e) ? 0 : 1),
				(n[e] = Fg && void 0 === t ? "__lodash_hash_undefined__" : t),
				this
			);
		});
	var Gg = function (e, t) {
			return e === t || (e != e && t != t);
		},
		fi = function (e, t) {
			for (var n = e.length; n--; ) if (Gg(e[n][0], t)) return n;
			return -1;
		},
		Hz = Array.prototype.splice;
	(Ee.prototype.clear = function () {
		(this.__data__ = []), (this.size = 0);
	}),
		(Ee.prototype.delete = function (e) {
			var t = this.__data__;
			return (
				!(0 > (e = fi(t, e))) &&
				(e == t.length - 1 ? t.pop() : Hz.call(t, e, 1),
				--this.size,
				!0)
			);
		}),
		(Ee.prototype.get = function (e) {
			var t = this.__data__;
			return 0 > (e = fi(t, e)) ? void 0 : t[e][1];
		}),
		(Ee.prototype.has = function (e) {
			return -1 < fi(this.__data__, e);
		}),
		(Ee.prototype.set = function (e, t) {
			var n = this.__data__,
				r = fi(n, e);
			return 0 > r ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
		});
	var $g = Ee,
		Hg = oe($b, "Map"),
		gi = function (e, t) {
			e = e.__data__;
			var n = qa(t);
			return (
				"string" == n ||
				"number" == n ||
				"symbol" == n ||
				"boolean" == n
					? "__proto__" !== t
					: null === t
			)
				? e["string" == typeof t ? "string" : "hash"]
				: e.map;
		};
	(Fe.prototype.clear = function () {
		(this.size = 0),
			(this.__data__ = {
				hash: new Vd(),
				map: new (Hg || $g)(),
				string: new Vd(),
			});
	}),
		(Fe.prototype.delete = function (e) {
			return (e = gi(this, e).delete(e)), (this.size -= e ? 1 : 0), e;
		}),
		(Fe.prototype.get = function (e) {
			return gi(this, e).get(e);
		}),
		(Fe.prototype.has = function (e) {
			return gi(this, e).has(e);
		}),
		(Fe.prototype.set = function (e, t) {
			var n = gi(this, e),
				r = n.size;
			return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
		});
	var Zg = Fe;
	(Lf.prototype.add = Lf.prototype.push =
		function (e) {
			return this.__data__.set(e, "__lodash_hash_undefined__"), this;
		}),
		(Lf.prototype.has = function (e) {
			return this.__data__.has(e);
		});
	var Yq = function (e, t, n, r) {
			var o = e.length;
			for (n += r ? 1 : -1; r ? n-- : ++n < o; )
				if (t(e[n], n, e)) return n;
			return -1;
		},
		Iz = function (e) {
			return e != e;
		},
		Jz = function (e, t) {
			var n;
			if ((n = !(null == e || !e.length))) {
				if (t == t)
					e: {
						n = -1;
						for (var r = e.length; ++n < r; )
							if (e[n] === t) {
								e = n;
								break e;
							}
						e = -1;
					}
				else e = Yq(e, Iz, 0);
				n = -1 < e;
			}
			return n;
		},
		Kz = function (e, t, n) {
			for (var r = -1, o = null == e ? 0 : e.length; ++r < o; )
				if (n(t, e[r])) return !0;
			return !1;
		},
		Lz = function (e, t) {
			return e.has(t);
		},
		uf = oe($b, "Set"),
		Mz = function () {},
		el = function (e) {
			var t = -1,
				n = Array(e.size);
			return (
				e.forEach(function (e) {
					n[++t] = e;
				}),
				n
			);
		},
		Nz = 1 / 0,
		Oz =
			uf && 1 / el(new uf([, -0]))[1] == Nz
				? function (e) {
						return new uf(e);
				  }
				: Mz,
		fl = function (e, t, n) {
			var r = -1,
				o = Jz,
				i = e.length,
				s = !0,
				a = [],
				c = a;
			if (n) (s = !1), (o = Kz);
			else if (200 <= i) {
				if ((o = t ? null : Oz(e))) return el(o);
				(s = !1), (o = Lz), (c = new Lf());
			} else c = t ? [] : a;
			e: for (; ++r < i; ) {
				var u = e[r],
					l = t ? t(u) : u;
				if (((u = n || 0 !== u ? u : 0), s && l == l)) {
					for (var f = c.length; f--; ) if (c[f] === l) continue e;
					t && c.push(l), a.push(u);
				} else o(c, l, n) || (c !== a && c.push(l), a.push(u));
			}
			return a;
		},
		Zq = function (e) {
			for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
				var o = e[t];
				r[o[0]] = o[1];
			}
			return r;
		},
		Je = function (e, t) {
			for (
				var n = -1, r = null == e ? 0 : e.length, o = Array(r);
				++n < r;

			)
				o[n] = t(e[n], n, e);
			return o;
		};
	(Ge.prototype.clear = function () {
		(this.__data__ = new $g()), (this.size = 0);
	}),
		(Ge.prototype.delete = function (e) {
			var t = this.__data__;
			return (e = t.delete(e)), (this.size = t.size), e;
		}),
		(Ge.prototype.get = function (e) {
			return this.__data__.get(e);
		}),
		(Ge.prototype.has = function (e) {
			return this.__data__.has(e);
		}),
		(Ge.prototype.set = function (e, t) {
			var n = this.__data__;
			if (n instanceof $g) {
				var r = n.__data__;
				if (!Hg || 199 > r.length)
					return r.push([e, t]), (this.size = ++n.size), this;
				n = this.__data__ = new Zg(r);
			}
			return n.set(e, t), (this.size = n.size), this;
		});
	var Ie = Ge,
		su = function (e, t) {
			for (
				var n = -1, r = null == e ? 0 : e.length;
				++n < r && !1 !== t(e[n], n, e);

			);
			return e;
		},
		hi = (function () {
			try {
				var e = oe(Object, "defineProperty");
				return e({}, "", {}), e;
			} catch (e) {}
		})(),
		Ig = function (e, t, n) {
			"__proto__" == t && hi
				? hi(e, t, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0,
				  })
				: (e[t] = n);
		},
		Pz = Object.prototype.hasOwnProperty,
		Qm = function (e, t, n) {
			var r = e[t];
			(Pz.call(e, t) && Gg(r, n) && (void 0 !== n || t in e)) ||
				Ig(e, t, n);
		},
		Ue = function (e, t, n, r) {
			var o = !n;
			n || (n = {});
			for (var i = -1, s = t.length; ++i < s; ) {
				var a = t[i],
					c = r ? r(n[a], e[a], a, n, e) : void 0;
				void 0 === c && (c = e[a]), o ? Ig(n, a, c) : Qm(n, a, c);
			}
			return n;
		},
		Hc = function (e) {
			return null != e && "object" == qa(e);
		},
		$q = function (e) {
			return Hc(e) && "[object Arguments]" == me(e);
		},
		ar = Object.prototype,
		Qz = ar.hasOwnProperty,
		Rz = ar.propertyIsEnumerable,
		Vf = $q(
			(function () {
				return arguments;
			})()
		)
			? $q
			: function (e) {
					return (
						Hc(e) && Qz.call(e, "callee") && !Rz.call(e, "callee")
					);
			  },
		ub = Array.isArray,
		Sz = function () {
			return !1;
		},
		Nf = xb(function (e, t) {
			var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e;
			(t = n && n.exports === t ? $b.Buffer : void 0),
				(e.exports = (t ? t.isBuffer : void 0) || Sz);
		}),
		Tz = /^(?:0|[1-9]\d*)$/,
		gl = function (e, t) {
			var n = qa(e);
			return (
				!!(t = null == t ? 9007199254740991 : t) &&
				("number" == n || ("symbol" != n && Tz.test(e))) &&
				-1 < e &&
				0 == e % 1 &&
				e < t
			);
		},
		hl = function (e) {
			return (
				"number" == typeof e &&
				-1 < e &&
				0 == e % 1 &&
				9007199254740991 >= e
			);
		},
		Va = {};
	(Va["[object Float32Array]"] =
		Va["[object Float64Array]"] =
		Va["[object Int8Array]"] =
		Va["[object Int16Array]"] =
		Va["[object Int32Array]"] =
		Va["[object Uint8Array]"] =
		Va["[object Uint8ClampedArray]"] =
		Va["[object Uint16Array]"] =
		Va["[object Uint32Array]"] =
			!0),
		(Va["[object Arguments]"] =
			Va["[object Array]"] =
			Va["[object ArrayBuffer]"] =
			Va["[object Boolean]"] =
			Va["[object DataView]"] =
			Va["[object Date]"] =
			Va["[object Error]"] =
			Va["[object Function]"] =
			Va["[object Map]"] =
			Va["[object Number]"] =
			Va["[object Object]"] =
			Va["[object RegExp]"] =
			Va["[object Set]"] =
			Va["[object String]"] =
			Va["[object WeakMap]"] =
				!1);
	var Uz = function (e) {
			return Hc(e) && hl(e.length) && !!Va[me(e)];
		},
		ii = function (e) {
			return function (t) {
				return e(t);
			};
		},
		vf = xb(function (e, t) {
			var n = t && !t.nodeType && t;
			n =
				(t = n && e && !e.nodeType && e) &&
				t.exports === n &&
				Uq.process;
			e: {
				try {
					var r = t && t.require && t.require("util").types;
					if (r) {
						var o = r;
						break e;
					}
					o = n && n.binding && n.binding("util");
					break e;
				} catch (e) {}
				o = void 0;
			}
			e.exports = o;
		}),
		br = vf && vf.isTypedArray,
		Ui = br ? ii(br) : Uz,
		Vz = Object.prototype.hasOwnProperty,
		cr = function (e, t) {
			var n = ub(e),
				r = !n && Vf(e),
				o = !n && !r && Nf(e),
				i = !n && !r && !o && Ui(e);
			if ((n = n || r || o || i)) {
				r = e.length;
				for (var s = String, a = -1, c = Array(r); ++a < r; )
					c[a] = s(a);
				r = c;
			} else r = [];
			for (var u in ((s = r.length), e))
				(!t && !Vz.call(e, u)) ||
					(n &&
						("length" == u ||
							(o && ("offset" == u || "parent" == u)) ||
							(i &&
								("buffer" == u ||
									"byteLength" == u ||
									"byteOffset" == u)) ||
							gl(u, s))) ||
					r.push(u);
			return r;
		},
		Wz = Object.prototype,
		il = function (e) {
			var t = e && e.constructor;
			return e === (("function" == typeof t && t.prototype) || Wz);
		},
		dr = function (e, t) {
			return function (n) {
				return e(t(n));
			};
		},
		Xz = dr(Object.keys, Object),
		Yz = Object.prototype.hasOwnProperty,
		ae = function (e) {
			return null != e && hl(e.length) && !jj(e);
		},
		Wd = function (e) {
			if (ae(e)) e = cr(e);
			else if (il(e)) {
				var t,
					n = [];
				for (t in Object(e))
					Yz.call(e, t) && "constructor" != t && n.push(t);
				e = n;
			} else e = Xz(e);
			return e;
		},
		ou = function (e, t) {
			return e && Ue(t, Wd(t), e);
		},
		Zz = Object.prototype.hasOwnProperty,
		Of = function (e) {
			if (ae(e)) e = cr(e, !0);
			else if (Gb(e)) {
				var t = il(e),
					n = [];
				for (r in e)
					("constructor" != r || (!t && Zz.call(e, r))) && n.push(r);
				e = n;
			} else {
				var r = [];
				if (null != e) for (t in Object(e)) r.push(t);
				e = r;
			}
			return e;
		},
		mu = function (e, t) {
			return e && Ue(t, Of(t), e);
		},
		Nm = xb(function (e, t) {
			var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e,
				r = (t = n && n.exports === t ? $b.Buffer : void 0)
					? t.allocUnsafe
					: void 0;
			e.exports = function (e, t) {
				return t
					? e.slice()
					: ((t = e.length),
					  (t = r ? r(t) : new e.constructor(t)),
					  e.copy(t),
					  t);
			};
		}),
		Pi = function (e, t) {
			var n = -1,
				r = e.length;
			for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
			return t;
		},
		$z = function (e, t) {
			for (
				var n = -1, r = null == e ? 0 : e.length, o = 0, i = [];
				++n < r;

			) {
				var s = e[n];
				t(s, n, e) && (i[o++] = s);
			}
			return i;
		},
		er = function () {
			return [];
		},
		aA = Object.prototype.propertyIsEnumerable,
		fr = Object.getOwnPropertySymbols,
		jl = fr
			? function (e) {
					return null == e
						? []
						: ((e = Object(e)),
						  $z(fr(e), function (t) {
								return aA.call(e, t);
						  }));
			  }
			: er,
		nu = function (e, t) {
			return Ue(e, jl(e), t);
		},
		Ti = function (e, t) {
			for (var n = -1, r = t.length, o = e.length; ++n < r; )
				e[o + n] = t[n];
			return e;
		},
		kl = dr(Object.getPrototypeOf, Object),
		gr = Object.getOwnPropertySymbols
			? function (e) {
					for (var t = []; e; ) Ti(t, jl(e)), (e = kl(e));
					return t;
			  }
			: er,
		lu = function (e, t) {
			return Ue(e, gr(e), t);
		},
		hr = function (e, t, n) {
			return (t = t(e)), ub(e) ? t : Ti(t, n(e));
		},
		Qi = function (e) {
			return hr(e, Wd, jl);
		},
		Pm = function (e) {
			return hr(e, Of, gr);
		},
		ll = oe($b, "DataView"),
		ml = oe($b, "Promise"),
		nl = oe($b, "WeakMap"),
		bA = ne(ll),
		cA = ne(Hg),
		dA = ne(ml),
		eA = ne(uf),
		fA = ne(nl),
		pe = me;
	((ll && "[object DataView]" != pe(new ll(new ArrayBuffer(1)))) ||
		(Hg && "[object Map]" != pe(new Hg())) ||
		(ml && "[object Promise]" != pe(ml.resolve())) ||
		(uf && "[object Set]" != pe(new uf())) ||
		(nl && "[object WeakMap]" != pe(new nl()))) &&
		(pe = function (e) {
			var t = me(e);
			if (
				(e = (e = "[object Object]" == t ? e.constructor : void 0)
					? ne(e)
					: "")
			)
				switch (e) {
					case bA:
						return "[object DataView]";
					case cA:
						return "[object Map]";
					case dA:
						return "[object Promise]";
					case eA:
						return "[object Set]";
					case fA:
						return "[object WeakMap]";
				}
			return t;
		});
	var Mf = pe,
		gA = Object.prototype.hasOwnProperty,
		ku = function (e) {
			var t = e.length,
				n = new e.constructor(t);
			return (
				t &&
					"string" == typeof e[0] &&
					gA.call(e, "index") &&
					((n.index = e.index), (n.input = e.input)),
				n
			);
		},
		ji = $b.Uint8Array,
		ol = function (e) {
			var t = new e.constructor(e.byteLength);
			return new ji(t).set(new ji(e)), t;
		},
		hA = /\w*$/,
		ir = lc ? lc.prototype : void 0,
		jr = ir ? ir.valueOf : void 0,
		Bn = function (e, t) {
			return (
				(t = t ? ol(e.buffer) : e.buffer),
				new e.constructor(t, e.byteOffset, e.length)
			);
		},
		pu = function (e, t, n) {
			var r = e.constructor;
			switch (t) {
				case "[object ArrayBuffer]":
					return ol(e);
				case "[object Boolean]":
				case "[object Date]":
					return new r(+e);
				case "[object DataView]":
					return (
						(t = n ? ol(e.buffer) : e.buffer),
						new e.constructor(t, e.byteOffset, e.byteLength)
					);
				case "[object Float32Array]":
				case "[object Float64Array]":
				case "[object Int8Array]":
				case "[object Int16Array]":
				case "[object Int32Array]":
				case "[object Uint8Array]":
				case "[object Uint8ClampedArray]":
				case "[object Uint16Array]":
				case "[object Uint32Array]":
					return Bn(e, n);
				case "[object Map]":
					return new r();
				case "[object Number]":
				case "[object String]":
					return new r(e);
				case "[object RegExp]":
					return (
						((t = new e.constructor(
							e.source,
							hA.exec(e)
						)).lastIndex = e.lastIndex),
						t
					);
				case "[object Set]":
					return new r();
				case "[object Symbol]":
					return jr ? Object(jr.call(e)) : {};
			}
		},
		kr = Object.create,
		iA = (function () {
			function e() {}
			return function (t) {
				return Gb(t)
					? kr
						? kr(t)
						: ((e.prototype = t),
						  (t = new e()),
						  (e.prototype = void 0),
						  t)
					: {};
			};
		})(),
		Om = function (e) {
			return "function" != typeof e.constructor || il(e) ? {} : iA(kl(e));
		},
		jA = function (e) {
			return Hc(e) && "[object Map]" == Mf(e);
		},
		lr = vf && vf.isMap,
		ru = lr ? ii(lr) : jA,
		kA = function (e) {
			return Hc(e) && "[object Set]" == Mf(e);
		},
		mr = vf && vf.isSet,
		qu = mr ? ii(mr) : kA,
		Oa = {};
	(Oa["[object Arguments]"] =
		Oa["[object Array]"] =
		Oa["[object ArrayBuffer]"] =
		Oa["[object DataView]"] =
		Oa["[object Boolean]"] =
		Oa["[object Date]"] =
		Oa["[object Float32Array]"] =
		Oa["[object Float64Array]"] =
		Oa["[object Int8Array]"] =
		Oa["[object Int16Array]"] =
		Oa["[object Int32Array]"] =
		Oa["[object Map]"] =
		Oa["[object Number]"] =
		Oa["[object Object]"] =
		Oa["[object RegExp]"] =
		Oa["[object Set]"] =
		Oa["[object String]"] =
		Oa["[object Symbol]"] =
		Oa["[object Uint8Array]"] =
		Oa["[object Uint8ClampedArray]"] =
		Oa["[object Uint16Array]"] =
		Oa["[object Uint32Array]"] =
			!0),
		(Oa["[object Error]"] =
			Oa["[object Function]"] =
			Oa["[object WeakMap]"] =
				!1);
	var Ke = function (e) {
			return "symbol" == qa(e) || (Hc(e) && "[object Symbol]" == me(e));
		},
		lA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		mA = /^\w*$/,
		pl = function (e, t) {
			if (ub(e)) return !1;
			var n = qa(e);
			return (
				!(
					"number" != n &&
					"symbol" != n &&
					"boolean" != n &&
					null != e &&
					!Ke(e)
				) ||
				mA.test(e) ||
				!lA.test(e) ||
				(null != t && e in Object(t))
			);
		};
	Ri.Cache = Zg;
	var nA =
			/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		oA = /\\(\\)?/g,
		pA = (function (e) {
			var t = (e = Ri(e, function (e) {
				return 500 === t.size && t.clear(), e;
			})).cache;
			return e;
		})(function (e) {
			var t = [];
			return (
				46 === e.charCodeAt(0) && t.push(""),
				e.replace(nA, function (e, n, r, o) {
					t.push(r ? o.replace(oA, "$1") : n || e);
				}),
				t
			);
		}),
		tu = 1 / 0,
		nr = lc ? lc.prototype : void 0,
		Sm = nr ? nr.toString : void 0,
		ki = function (e, t) {
			return ub(e) ? e : pl(e, t) ? [e] : pA(null == e ? "" : Rm(e));
		},
		qA = 1 / 0,
		Jg = function (e) {
			if ("string" == typeof e || Ke(e)) return e;
			var t = e + "";
			return "0" == t && 1 / e == -qA ? "-0" : t;
		},
		li = function (e, t) {
			for (var n = 0, r = (t = ki(t, e)).length; null != e && n < r; )
				e = e[Jg(t[n++])];
			return n && n == r ? e : void 0;
		},
		rA = function (e, t) {
			if (!(2 > (t = ki(t, e)).length)) {
				var n = t,
					r = 0,
					o = -1,
					i = -1,
					s = n.length;
				for (
					0 > r && (r = -r > s ? 0 : s + r),
						0 > (o = o > s ? s : o) && (o += s),
						s = r > o ? 0 : (o - r) >>> 0,
						r >>>= 0,
						o = Array(s);
					++i < s;

				)
					o[i] = n[i + r];
				e = li(e, o);
			}
			return (
				(n = null == e) ||
					((n = null == t ? 0 : t.length),
					(n = delete e[Jg(n ? t[n - 1] : void 0)])),
				n
			);
		},
		or = Function.prototype.toString,
		sA = Object.prototype.hasOwnProperty,
		tA = or.call(Object),
		Cn = function (e) {
			return (
				!(!Hc(e) || "[object Object]" != me(e)) &&
				(null === (e = kl(e)) ||
					("function" ==
						typeof (e =
							sA.call(e, "constructor") && e.constructor) &&
						e instanceof e &&
						or.call(e) == tA))
			);
		},
		uA = function (e) {
			return Cn(e) ? void 0 : e;
		},
		pr = lc ? lc.isConcatSpreadable : void 0,
		uu = function (e) {
			return ub(e) || Vf(e) || !!(pr && e && e[pr]);
		},
		vA = function (e) {
			return null != e && e.length ? Si(e, 1) : [];
		},
		wA = function (e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		},
		qr = Math.max,
		rr = function (e, t, n) {
			return (
				(t = qr(void 0 === t ? e.length - 1 : t, 0)),
				function () {
					for (
						var r = arguments,
							o = -1,
							i = qr(r.length - t, 0),
							s = Array(i);
						++o < i;

					)
						s[o] = r[t + o];
					for (o = -1, i = Array(t + 1); ++o < t; ) i[o] = r[o];
					return (i[t] = n(s)), wA(e, this, i);
				}
			);
		},
		xA = function (e) {
			return function () {
				return e;
			};
		},
		mi = function (e) {
			return e;
		},
		yA = Date.now,
		sr = (function (e) {
			var t = 0,
				n = 0;
			return function () {
				var r = yA(),
					o = 16 - (r - n);
				if (((n = r), 0 < o)) {
					if (800 <= ++t) return arguments[0];
				} else t = 0;
				return e.apply(void 0, arguments);
			};
		})(
			hi
				? function (e, t) {
						return hi(e, "toString", {
							configurable: !0,
							enumerable: !1,
							value: xA(t),
							writable: !0,
						});
				  }
				: mi
		),
		ql = (function (e) {
			return sr(rr(e, void 0, vA), e + "");
		})(function (e, t) {
			var n = {};
			if (null == e) return n;
			var r = !1;
			(t = Je(t, function (t) {
				return (t = ki(t, e)), r || (r = 1 < t.length), t;
			})),
				Ue(e, Pm(e), n),
				r && (n = He(n, 7, uA));
			for (var o = t.length; o--; ) rA(n, t[o]);
			return n;
		}),
		zA = function (e, t, n, r) {
			for (var o = -1, i = null == e ? 0 : e.length; ++o < i; ) {
				var s = e[o];
				t(r, s, n(s), e);
			}
			return r;
		},
		An = function (e, t, n) {
			for (var r = -1, o = Object(e), i = (n = n(e)).length; i--; ) {
				var s = n[++r];
				if (!1 === t(o[s], s, o)) break;
			}
			return e;
		},
		tr = function (e, t) {
			return e && An(e, t, Wd);
		},
		rl = (function (e, t) {
			return function (t, n) {
				if (null == t) return t;
				if (!ae(t)) return e(t, n);
				for (
					var r = t.length, o = -1, i = Object(t);
					++o < r && !1 !== n(i[o], o, i);

				);
				return t;
			};
		})(tr),
		AA = function (e, t, n, r) {
			return (
				rl(e, function (e, o, i) {
					t(r, e, n(e), i);
				}),
				r
			);
		},
		ur = function (e, t) {
			for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
				if (t(e[n], n, e)) return !0;
			return !1;
		},
		Tm = function (e, t, n, r, o, i) {
			var s = 1 & n,
				a = e.length,
				c = t.length;
			if (a != c && !(s && c > a)) return !1;
			c = i.get(e);
			var u = i.get(t);
			if (c && u) return c == t && u == e;
			(c = -1), (u = !0);
			var l = 2 & n ? new Lf() : void 0;
			for (i.set(e, t), i.set(t, e); ++c < a; ) {
				var f = e[c],
					h = t[c];
				if (r) var p = s ? r(h, f, c, t, e, i) : r(f, h, c, e, t, i);
				if (void 0 !== p) {
					if (p) continue;
					u = !1;
					break;
				}
				if (l) {
					if (
						!ur(t, function (e, t) {
							if (!l.has(t) && (f === e || o(f, e, n, r, i)))
								return l.push(t);
						})
					) {
						u = !1;
						break;
					}
				} else if (f !== h && !o(f, h, n, r, i)) {
					u = !1;
					break;
				}
			}
			return i.delete(e), i.delete(t), u;
		},
		BA = function (e) {
			var t = -1,
				n = Array(e.size);
			return (
				e.forEach(function (e, r) {
					n[++t] = [r, e];
				}),
				n
			);
		},
		vr = lc ? lc.prototype : void 0,
		sl = vr ? vr.valueOf : void 0,
		vu = function (e, t, n, r, o, i, s) {
			switch (n) {
				case "[object DataView]":
					if (
						e.byteLength != t.byteLength ||
						e.byteOffset != t.byteOffset
					)
						break;
					(e = e.buffer), (t = t.buffer);
				case "[object ArrayBuffer]":
					if (
						e.byteLength != t.byteLength ||
						!i(new ji(e), new ji(t))
					)
						break;
					return !0;
				case "[object Boolean]":
				case "[object Date]":
				case "[object Number]":
					return Gg(+e, +t);
				case "[object Error]":
					return e.name == t.name && e.message == t.message;
				case "[object RegExp]":
				case "[object String]":
					return e == t + "";
				case "[object Map]":
					var a = BA;
				case "[object Set]":
					if ((a || (a = el), e.size != t.size && !(1 & r))) break;
					return (n = s.get(e))
						? n == t
						: ((r |= 2),
						  s.set(e, t),
						  (t = Tm(a(e), a(t), r, o, i, s)),
						  s.delete(e),
						  t);
				case "[object Symbol]":
					if (sl) return sl.call(e) == sl.call(t);
			}
			return !1;
		},
		wu = Object.prototype.hasOwnProperty,
		Um = Object.prototype.hasOwnProperty,
		CA = function (e, t, n, r) {
			var o = n.length,
				i = o,
				s = !r;
			if (null == e) return !i;
			for (e = Object(e); o--; ) {
				var a = n[o];
				if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
			}
			for (; ++o < i; ) {
				var c = (a = n[o])[0],
					u = e[c],
					l = a[1];
				if (s && a[2]) {
					if (void 0 === u && !(c in e)) return !1;
				} else {
					if (((a = new Ie()), r)) var f = r(u, l, c, e, t, a);
					if (void 0 === f ? !Le(l, u, 3, r, a) : !f) return !1;
				}
			}
			return !0;
		},
		DA = function (e) {
			for (var t = Wd(e), n = t.length; n--; ) {
				var r = t[n],
					o = e[r];
				t[n] = [r, o, o == o && !Gb(o)];
			}
			return t;
		},
		wr = function (e, t) {
			return function (n) {
				return (
					null != n && n[e] === t && (void 0 !== t || e in Object(n))
				);
			};
		},
		EA = function (e) {
			var t = DA(e);
			return 1 == t.length && t[0][2]
				? wr(t[0][0], t[0][1])
				: function (n) {
						return n === e || CA(n, e, t);
				  };
		},
		FA = function (e, t) {
			return pl(e) && t == t && !Gb(t)
				? wr(Jg(e), t)
				: function (n) {
						var r = null == n ? void 0 : li(n, e);
						if (
							void 0 === (r = void 0 === r ? void 0 : r) &&
							r === t
						) {
							if ((r = null != n)) {
								for (
									var o = -1,
										i = (r = ki((r = e), n)).length,
										s = !1;
									++o < i;

								) {
									var a = Jg(r[o]);
									if (
										!(s =
											null != n &&
											null != n &&
											a in Object(n))
									)
										break;
									n = n[a];
								}
								s || ++o != i
									? (r = s)
									: (r =
											!!(i = null == n ? 0 : n.length) &&
											hl(i) &&
											gl(a, i) &&
											(ub(n) || Vf(n)));
							}
							a = r;
						} else a = Le(t, r, 3);
						return a;
				  };
		},
		GA = function (e) {
			return function (t) {
				return null == t ? void 0 : t[e];
			};
		},
		HA = function (e) {
			return function (t) {
				return li(t, e);
			};
		},
		wf = function (e) {
			return "function" == typeof e
				? e
				: null == e
				? mi
				: "object" == qa(e)
				? ub(e)
					? FA(e[0], e[1])
					: EA(e)
				: pl(e)
				? GA(Jg(e))
				: HA(e);
		},
		tl = (function (e, t) {
			return function (t, n) {
				var r = {};
				return (ub(t) ? zA : AA)(t, e, wf(n), r);
			};
		})(function (e, t, n) {
			Ig(e, n, t);
		}),
		md = function (e, t) {
			var n = {};
			return (
				(t = wf(t)),
				tr(e, function (e, r, o) {
					Ig(n, r, t(e, r, o));
				}),
				n
			);
		};
	ea(
		{
			target: "String",
			proto: !0,
			forced: la(function () {
				var e = "".sub('"');
				return e !== e.toLowerCase() || 3 < e.split('"').length;
			}),
		},
		{
			sub: function () {
				return "<sub>" + String(Eb(this)) + "</sub>";
			},
		}
	);
	var P = Pa,
		mc = null;
	try {
		mc = new WebAssembly.Instance(
			new WebAssembly.Module(
				new Uint8Array([
					0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4,
					127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6,
					1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5,
					100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0,
					3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95,
					117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
					10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173,
					32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
					32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
					167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
					132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4,
					66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32,
					0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
					173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0,
					32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
					32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129,
					34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
					126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
					32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167,
					36, 0, 32, 4, 167, 11,
				])
			),
			{}
		).exports;
	} catch (c) {}
	Pa.prototype.__isLong__,
		Object.defineProperty(Pa.prototype, "__isLong__", { value: !0 }),
		(Pa.isLong = Hb);
	var Wm = {},
		Vm = {};
	(Pa.fromInt = Xd), (Pa.fromNumber = ec), (Pa.fromBits = Qa);
	var ah = Math.pow;
	(Pa.fromString = Vi), (Pa.fromValue = vc);
	var Me = 4294967296,
		Xm = Me * Me,
		Zm = Xm / 2,
		xr = Xd(16777216),
		fc = Xd(0);
	Pa.ZERO = fc;
	var Yd = Xd(0, !0);
	Pa.UZERO = Yd;
	var xf = Xd(1);
	Pa.ONE = xf;
	var yr = Xd(1, !0);
	Pa.UONE = yr;
	var ul = Xd(-1);
	Pa.NEG_ONE = ul;
	var $m = Qa(-1, 2147483647, !1);
	Pa.MAX_VALUE = $m;
	var Ym = Qa(-1, -1, !0);
	Pa.MAX_UNSIGNED_VALUE = Ym;
	var Ib = Qa(0, -2147483648, !1);
	Pa.MIN_VALUE = Ib;
	var V = Pa.prototype;
	(V.toInt = function () {
		return this.unsigned ? this.low >>> 0 : this.low;
	}),
		(V.toNumber = function () {
			return this.unsigned
				? (this.high >>> 0) * Me + (this.low >>> 0)
				: this.high * Me + (this.low >>> 0);
		}),
		(V.toString = function (e) {
			if (2 > (e = e || 10) || 36 < e) throw RangeError("radix");
			if (this.isZero()) return "0";
			if (this.isNegative()) {
				if (this.eq(Ib)) {
					var t = ec(e),
						n = this.div(t);
					return (
						(t = n.mul(t).sub(this)),
						n.toString(e) + t.toInt().toString(e)
					);
				}
				return "-" + this.neg().toString(e);
			}
			(n = ec(ah(e, 6), this.unsigned)), (t = this);
			for (var r = ""; ; ) {
				var o = t.div(n),
					i = (t.sub(o.mul(n)).toInt() >>> 0).toString(e);
				if ((t = o).isZero()) return i + r;
				for (; 6 > i.length; ) i = "0" + i;
				r = "" + i + r;
			}
		}),
		(V.getHighBits = function () {
			return this.high;
		}),
		(V.getHighBitsUnsigned = function () {
			return this.high >>> 0;
		}),
		(V.getLowBits = function () {
			return this.low;
		}),
		(V.getLowBitsUnsigned = function () {
			return this.low >>> 0;
		}),
		(V.getNumBitsAbs = function () {
			if (this.isNegative())
				return this.eq(Ib) ? 64 : this.neg().getNumBitsAbs();
			for (
				var e = 0 != this.high ? this.high : this.low, t = 31;
				0 < t && 0 == (e & (1 << t));
				t--
			);
			return 0 != this.high ? t + 33 : t + 1;
		}),
		(V.isZero = function () {
			return 0 === this.high && 0 === this.low;
		}),
		(V.eqz = V.isZero),
		(V.isNegative = function () {
			return !this.unsigned && 0 > this.high;
		}),
		(V.isPositive = function () {
			return this.unsigned || 0 <= this.high;
		}),
		(V.isOdd = function () {
			return 1 == (1 & this.low);
		}),
		(V.isEven = function () {
			return 0 == (1 & this.low);
		}),
		(V.equals = function (e) {
			return (
				Hb(e) || (e = vc(e)),
				(this.unsigned === e.unsigned ||
					1 != this.high >>> 31 ||
					1 != e.high >>> 31) &&
					this.high === e.high &&
					this.low === e.low
			);
		}),
		(V.eq = V.equals),
		(V.notEquals = function (e) {
			return !this.eq(e);
		}),
		(V.neq = V.notEquals),
		(V.ne = V.notEquals),
		(V.lessThan = function (e) {
			return 0 > this.comp(e);
		}),
		(V.lt = V.lessThan),
		(V.lessThanOrEqual = function (e) {
			return 0 >= this.comp(e);
		}),
		(V.lte = V.lessThanOrEqual),
		(V.le = V.lessThanOrEqual),
		(V.greaterThan = function (e) {
			return 0 < this.comp(e);
		}),
		(V.gt = V.greaterThan),
		(V.greaterThanOrEqual = function (e) {
			return 0 <= this.comp(e);
		}),
		(V.gte = V.greaterThanOrEqual),
		(V.ge = V.greaterThanOrEqual),
		(V.compare = function (e) {
			if ((Hb(e) || (e = vc(e)), this.eq(e))) return 0;
			var t = this.isNegative(),
				n = e.isNegative();
			return t && !n
				? -1
				: !t && n
				? 1
				: this.unsigned
				? e.high >>> 0 > this.high >>> 0 ||
				  (e.high === this.high && e.low >>> 0 > this.low >>> 0)
					? -1
					: 1
				: this.sub(e).isNegative()
				? -1
				: 1;
		}),
		(V.comp = V.compare),
		(V.negate = function () {
			return !this.unsigned && this.eq(Ib) ? Ib : this.not().add(xf);
		}),
		(V.neg = V.negate),
		(V.add = function (e) {
			Hb(e) || (e = vc(e));
			var t = this.high >>> 16,
				n = 65535 & this.high,
				r = this.low >>> 16,
				o = e.high >>> 16,
				i = 65535 & e.high,
				s = e.low >>> 16;
			return (
				(r =
					(s =
						((e = (65535 & this.low) + (65535 & e.low)) >>> 16) +
						(r + s)) >>> 16),
				Qa(
					((65535 & s) << 16) | (65535 & e),
					((t = (((r += n + i) >>> 16) + (t + o)) & 65535) << 16) |
						(65535 & r),
					this.unsigned
				)
			);
		}),
		(V.subtract = function (e) {
			return Hb(e) || (e = vc(e)), this.add(e.neg());
		}),
		(V.sub = V.subtract),
		(V.multiply = function (e) {
			if (this.isZero()) return fc;
			if ((Hb(e) || (e = vc(e)), mc)) {
				var t = mc.mul(this.low, this.high, e.low, e.high);
				return Qa(t, mc.get_high(), this.unsigned);
			}
			if (e.isZero()) return fc;
			if (this.eq(Ib)) return e.isOdd() ? Ib : fc;
			if (e.eq(Ib)) return this.isOdd() ? Ib : fc;
			if (this.isNegative())
				return e.isNegative()
					? this.neg().mul(e.neg())
					: this.neg().mul(e).neg();
			if (e.isNegative()) return this.mul(e.neg()).neg();
			if (this.lt(xr) && e.lt(xr))
				return ec(this.toNumber() * e.toNumber(), this.unsigned);
			t = this.high >>> 16;
			var n = 65535 & this.high,
				r = this.low >>> 16,
				o = 65535 & this.low,
				i = e.high >>> 16,
				s = 65535 & e.high,
				a = e.low >>> 16,
				c = o * (e = 65535 & e.low),
				u = (c >>> 16) + r * e,
				l = u >>> 16;
			l += (u = (65535 & u) + o * a) >>> 16;
			var f = (l += n * e) >>> 16;
			return Qa(
				((65535 & u) << 16) | (65535 & c),
				((f =
					((f += (l = (65535 & l) + r * a) >>> 16) +
						((l = (65535 & l) + o * s) >>> 16) +
						(t * e + n * a + r * s + o * i)) &
					65535) <<
					16) |
					(65535 & l),
				this.unsigned
			);
		}),
		(V.mul = V.multiply),
		(V.divide = function (e) {
			if ((Hb(e) || (e = vc(e)), e.isZero()))
				throw Error("division by zero");
			if (mc)
				return this.unsigned ||
					-2147483648 !== this.high ||
					-1 !== e.low ||
					-1 !== e.high
					? Qa(
							(e = (this.unsigned ? mc.div_u : mc.div_s)(
								this.low,
								this.high,
								e.low,
								e.high
							)),
							mc.get_high(),
							this.unsigned
					  )
					: this;
			if (this.isZero()) return this.unsigned ? Yd : fc;
			if (this.unsigned) {
				if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return Yd;
				if (e.gt(this.shru(1))) return yr;
				var t = Yd;
			} else {
				if (this.eq(Ib)) {
					if (e.eq(xf) || e.eq(ul)) return Ib;
					if (e.eq(Ib)) return xf;
					var n = this.shr(1).div(e).shl(1);
					if (n.eq(fc)) return e.isNegative() ? xf : ul;
					var r = this.sub(e.mul(n));
					return n.add(r.div(e));
				}
				if (e.eq(Ib)) return this.unsigned ? Yd : fc;
				if (this.isNegative())
					return e.isNegative()
						? this.neg().div(e.neg())
						: this.neg().div(e).neg();
				if (e.isNegative()) return this.div(e.neg()).neg();
				t = fc;
			}
			for (r = this; r.gte(e); ) {
				n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
				var o = Math.ceil(Math.log(n) / Math.LN2);
				o = 48 >= o ? 1 : ah(2, o - 48);
				for (var i = ec(n), s = i.mul(e); s.isNegative() || s.gt(r); )
					s = (i = ec((n -= o), this.unsigned)).mul(e);
				i.isZero() && (i = xf), (t = t.add(i)), (r = r.sub(s));
			}
			return t;
		}),
		(V.div = V.divide),
		(V.modulo = function (e) {
			return (
				Hb(e) || (e = vc(e)),
				mc
					? Qa(
							(e = (this.unsigned ? mc.rem_u : mc.rem_s)(
								this.low,
								this.high,
								e.low,
								e.high
							)),
							mc.get_high(),
							this.unsigned
					  )
					: this.sub(this.div(e).mul(e))
			);
		}),
		(V.mod = V.modulo),
		(V.rem = V.modulo),
		(V.not = function () {
			return Qa(~this.low, ~this.high, this.unsigned);
		}),
		(V.and = function (e) {
			return (
				Hb(e) || (e = vc(e)),
				Qa(this.low & e.low, this.high & e.high, this.unsigned)
			);
		}),
		(V.or = function (e) {
			return (
				Hb(e) || (e = vc(e)),
				Qa(this.low | e.low, this.high | e.high, this.unsigned)
			);
		}),
		(V.xor = function (e) {
			return (
				Hb(e) || (e = vc(e)),
				Qa(this.low ^ e.low, this.high ^ e.high, this.unsigned)
			);
		}),
		(V.shiftLeft = function (e) {
			return (
				Hb(e) && (e = e.toInt()),
				0 == (e &= 63)
					? this
					: 32 > e
					? Qa(
							this.low << e,
							(this.high << e) | (this.low >>> (32 - e)),
							this.unsigned
					  )
					: Qa(0, this.low << (e - 32), this.unsigned)
			);
		}),
		(V.shl = V.shiftLeft),
		(V.shiftRight = function (e) {
			return (
				Hb(e) && (e = e.toInt()),
				0 == (e &= 63)
					? this
					: 32 > e
					? Qa(
							(this.low >>> e) | (this.high << (32 - e)),
							this.high >> e,
							this.unsigned
					  )
					: Qa(
							this.high >> (e - 32),
							0 <= this.high ? 0 : -1,
							this.unsigned
					  )
			);
		}),
		(V.shr = V.shiftRight),
		(V.shiftRightUnsigned = function (e) {
			if ((Hb(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
			var t = this.high;
			return 32 > e
				? Qa((this.low >>> e) | (t << (32 - e)), t >>> e, this.unsigned)
				: Qa(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
		}),
		(V.shru = V.shiftRightUnsigned),
		(V.shr_u = V.shiftRightUnsigned),
		(V.toSigned = function () {
			return this.unsigned ? Qa(this.low, this.high, !1) : this;
		}),
		(V.toUnsigned = function () {
			return this.unsigned ? this : Qa(this.low, this.high, !0);
		}),
		(V.toBytes = function (e) {
			return e ? this.toBytesLE() : this.toBytesBE();
		}),
		(V.toBytesLE = function () {
			var e = this.high,
				t = this.low;
			return [
				255 & t,
				(t >>> 8) & 255,
				(t >>> 16) & 255,
				t >>> 24,
				255 & e,
				(e >>> 8) & 255,
				(e >>> 16) & 255,
				e >>> 24,
			];
		}),
		(V.toBytesBE = function () {
			var e = this.high,
				t = this.low;
			return [
				e >>> 24,
				(e >>> 16) & 255,
				(e >>> 8) & 255,
				255 & e,
				t >>> 24,
				(t >>> 16) & 255,
				(t >>> 8) & 255,
				255 & t,
			];
		}),
		(Pa.fromBytes = function (e, t, n) {
			return n ? Pa.fromBytesLE(e, t) : Pa.fromBytesBE(e, t);
		}),
		(Pa.fromBytesLE = function (e, t) {
			return new Pa(
				e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
				e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
				t
			);
		}),
		(Pa.fromBytesBE = function (e, t) {
			return new Pa(
				(e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
				(e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
				t
			);
		});
	var Wi = function (e, t) {
			return (Wi =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (e, t) {
						e.__proto__ = t;
					}) ||
				function (e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
				})(e, t);
		},
		vl = !1,
		gc = {
			Promise: void 0,
			set useDeprecatedSynchronousErrorHandling(e) {
				e
					? console.warn(
							"DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
								Error().stack
					  )
					: vl &&
					  console.log(
							"RxJS: Back to a better error behavior. Thank you. <3"
					  ),
					(vl = e);
			},
			get useDeprecatedSynchronousErrorHandling() {
				return vl;
			},
		},
		ni = {
			closed: !0,
			next: function (e) {},
			error: function (e) {
				if (gc.useDeprecatedSynchronousErrorHandling) throw e;
				Oe(e);
			},
			complete: function () {},
		},
		hc =
			Array.isArray ||
			function (e) {
				return e && "number" == typeof e.length;
			},
		Pf = (function () {
			function e(e) {
				return (
					Error.call(this),
					(this.message = e
						? e.length +
						  " errors occurred during unsubscription:\n" +
						  e
								.map(function (e, t) {
									return t + 1 + ") " + e.toString();
								})
								.join("\n  ")
						: ""),
					(this.name = "UnsubscriptionError"),
					(this.errors = e),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		nb = (function () {
			function e(e) {
				(this.closed = !1),
					(this._subscriptions = this._parentOrParents = null),
					e &&
						((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
			}
			return (
				(e.prototype.unsubscribe = function () {
					if (!this.closed) {
						var t = this._parentOrParents,
							n = this._ctorUnsubscribe,
							r = this._unsubscribe,
							o = this._subscriptions;
						if (
							((this.closed = !0),
							(this._subscriptions = this._parentOrParents =
								null),
							t instanceof e)
						)
							t.remove(this);
						else if (null !== t)
							for (var i = 0; i < t.length; ++i)
								t[i].remove(this);
						if (Ne(r)) {
							n && (this._unsubscribe = void 0);
							try {
								r.call(this);
							} catch (e) {
								var s = e instanceof Pf ? an(e.errors) : [e];
							}
						}
						if (hc(o))
							for (i = -1, t = o.length; ++i < t; )
								if (Xi((n = o[i])))
									try {
										n.unsubscribe();
									} catch (e) {
										(s = s || []),
											e instanceof Pf
												? (s = s.concat(an(e.errors)))
												: s.push(e);
									}
						if (s) throw new Pf(s);
					}
				}),
				(e.prototype.add = function (t) {
					var n = t;
					if (!t) return e.EMPTY;
					switch (qa(t)) {
						case "function":
							n = new e(t);
						case "object":
							if (
								n === this ||
								n.closed ||
								"function" != typeof n.unsubscribe
							)
								return n;
							if (this.closed) return n.unsubscribe(), n;
							n instanceof e ||
								((t = n), ((n = new e())._subscriptions = [t]));
							break;
						default:
							throw Error(
								"unrecognized teardown " +
									t +
									" added to Subscription."
							);
					}
					if (null === (t = n._parentOrParents))
						n._parentOrParents = this;
					else if (t instanceof e) {
						if (t === this) return n;
						n._parentOrParents = [t, this];
					} else {
						if (-1 !== t.indexOf(this)) return n;
						t.push(this);
					}
					return (
						null === (t = this._subscriptions)
							? (this._subscriptions = [n])
							: t.push(n),
						n
					);
				}),
				(e.prototype.remove = function (e) {
					var t = this._subscriptions;
					t && -1 !== (e = t.indexOf(e)) && t.splice(e, 1);
				}),
				(e.EMPTY = (function (e) {
					return (e.closed = !0), e;
				})(new e())),
				e
			);
		})(),
		oi =
			"function" == typeof Symbol
				? Symbol("rxSubscriber")
				: "@@rxSubscriber_" + Math.random(),
		za = (function (e) {
			function t(n, r, o) {
				var i = e.call(this) || this;
				switch (
					((i.syncErrorValue = null),
					(i.syncErrorThrown = !1),
					(i.syncErrorThrowable = !1),
					(i.isStopped = !1),
					arguments.length)
				) {
					case 0:
						i.destination = ni;
						break;
					case 1:
						if (!n) {
							i.destination = ni;
							break;
						}
						if ("object" === qa(n)) {
							n instanceof t
								? ((i.syncErrorThrowable =
										n.syncErrorThrowable),
								  (i.destination = n),
								  n.add(i))
								: ((i.syncErrorThrowable = !0),
								  (i.destination = new zr(i, n)));
							break;
						}
					default:
						(i.syncErrorThrowable = !0),
							(i.destination = new zr(i, n, r, o));
				}
				return i;
			}
			return (
				ha(t, e),
				(t.prototype[oi] = function () {
					return this;
				}),
				(t.create = function (e, n, r) {
					return ((e = new t(e, n, r)).syncErrorThrowable = !1), e;
				}),
				(t.prototype.next = function (e) {
					this.isStopped || this._next(e);
				}),
				(t.prototype.error = function (e) {
					this.isStopped || ((this.isStopped = !0), this._error(e));
				}),
				(t.prototype.complete = function () {
					this.isStopped || ((this.isStopped = !0), this._complete());
				}),
				(t.prototype.unsubscribe = function () {
					this.closed ||
						((this.isStopped = !0),
						e.prototype.unsubscribe.call(this));
				}),
				(t.prototype._next = function (e) {
					this.destination.next(e);
				}),
				(t.prototype._error = function (e) {
					this.destination.error(e), this.unsubscribe();
				}),
				(t.prototype._complete = function () {
					this.destination.complete(), this.unsubscribe();
				}),
				(t.prototype._unsubscribeAndRecycle = function () {
					var e = this._parentOrParents;
					return (
						(this._parentOrParents = null),
						this.unsubscribe(),
						(this.isStopped = this.closed = !1),
						(this._parentOrParents = e),
						this
					);
				}),
				t
			);
		})(nb),
		zr = (function (e) {
			function t(t, n, r, o) {
				var i = e.call(this) || this;
				if (((i._parentSubscriber = t), (t = i), Ne(n))) var s = n;
				else
					n &&
						((s = n.next),
						(r = n.error),
						(o = n.complete),
						n !== ni &&
							(Ne((t = Object.create(n)).unsubscribe) &&
								i.add(t.unsubscribe.bind(t)),
							(t.unsubscribe = i.unsubscribe.bind(i))));
				return (
					(i._context = t),
					(i._next = s),
					(i._error = r),
					(i._complete = o),
					i
				);
			}
			return (
				ha(t, e),
				(t.prototype.next = function (e) {
					if (!this.isStopped && this._next) {
						var t = this._parentSubscriber;
						gc.useDeprecatedSynchronousErrorHandling &&
						t.syncErrorThrowable
							? this.__tryOrSetError(t, this._next, e) &&
							  this.unsubscribe()
							: this.__tryOrUnsub(this._next, e);
					}
				}),
				(t.prototype.error = function (e) {
					if (!this.isStopped) {
						var t = this._parentSubscriber,
							n = gc.useDeprecatedSynchronousErrorHandling;
						if (this._error)
							n && t.syncErrorThrowable
								? this.__tryOrSetError(t, this._error, e)
								: this.__tryOrUnsub(this._error, e),
								this.unsubscribe();
						else if (t.syncErrorThrowable)
							n
								? ((t.syncErrorValue = e),
								  (t.syncErrorThrown = !0))
								: Oe(e),
								this.unsubscribe();
						else {
							if ((this.unsubscribe(), n)) throw e;
							Oe(e);
						}
					}
				}),
				(t.prototype.complete = function () {
					var e = this;
					if (!this.isStopped) {
						var t = this._parentSubscriber;
						if (this._complete) {
							var n = function () {
								return e._complete.call(e._context);
							};
							gc.useDeprecatedSynchronousErrorHandling &&
							t.syncErrorThrowable
								? this.__tryOrSetError(t, n)
								: this.__tryOrUnsub(n);
						}
						this.unsubscribe();
					}
				}),
				(t.prototype.__tryOrUnsub = function (e, t) {
					try {
						e.call(this._context, t);
					} catch (e) {
						if (
							(this.unsubscribe(),
							gc.useDeprecatedSynchronousErrorHandling)
						)
							throw e;
						Oe(e);
					}
				}),
				(t.prototype.__tryOrSetError = function (e, t, n) {
					if (!gc.useDeprecatedSynchronousErrorHandling)
						throw Error("bad call");
					try {
						t.call(this._context, n);
					} catch (t) {
						return (
							gc.useDeprecatedSynchronousErrorHandling
								? ((e.syncErrorValue = t),
								  (e.syncErrorThrown = !0))
								: Oe(t),
							!0
						);
					}
					return !1;
				}),
				(t.prototype._unsubscribe = function () {
					var e = this._parentSubscriber;
					(this._parentSubscriber = this._context = null),
						e.unsubscribe();
				}),
				t
			);
		})(za),
		Pe =
			("function" == typeof Symbol && Symbol.observable) ||
			"@@observable",
		ua = (function () {
			function e(e) {
				(this._isScalar = !1), e && (this._subscribe = e);
			}
			return (
				(e.prototype.lift = function (t) {
					var n = new e();
					return (n.source = this), (n.operator = t), n;
				}),
				(e.prototype.subscribe = function (e, t, n) {
					var r = this.operator;
					e: {
						if (e) {
							if (e instanceof za) break e;
							if (e[oi]) {
								e = e[oi]();
								break e;
							}
						}
						e = e || t || n ? new za(e, t, n) : new za(ni);
					}
					if (
						(r
							? e.add(r.call(e, this.source))
							: e.add(
									this.source ||
										(gc.useDeprecatedSynchronousErrorHandling &&
											!e.syncErrorThrowable)
										? this._subscribe(e)
										: this._trySubscribe(e)
							  ),
						gc.useDeprecatedSynchronousErrorHandling &&
							e.syncErrorThrowable &&
							((e.syncErrorThrowable = !1), e.syncErrorThrown))
					)
						throw e.syncErrorValue;
					return e;
				}),
				(e.prototype._trySubscribe = function (e) {
					try {
						return this._subscribe(e);
					} catch (t) {
						gc.useDeprecatedSynchronousErrorHandling &&
							((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
							Yi(e) ? e.error(t) : console.warn(t);
					}
				}),
				(e.prototype.forEach = function (e, t) {
					var n = this;
					return new (t = cn(t))(function (t, r) {
						var o = n.subscribe(
							function (t) {
								try {
									e(t);
								} catch (e) {
									r(e), o && o.unsubscribe();
								}
							},
							r,
							t
						);
					});
				}),
				(e.prototype._subscribe = function (e) {
					var t = this.source;
					return t && t.subscribe(e);
				}),
				(e.prototype[Pe] = function () {
					return this;
				}),
				(e.prototype.pipe = function () {
					for (var e = [], t = 0; t < arguments.length; t++)
						e[t] = arguments[t];
					return 0 === e.length ? this : bn(e)(this);
				}),
				(e.prototype.toPromise = function (e) {
					var t = this;
					return new (e = cn(e))(function (e, n) {
						var r;
						t.subscribe(
							function (e) {
								return (r = e);
							},
							function (e) {
								return n(e);
							},
							function () {
								return e(r);
							}
						);
					});
				}),
				(e.create = function (t) {
					return new e(t);
				}),
				e
			);
		})(),
		Ld = (function () {
			function e() {
				return (
					Error.call(this),
					(this.message = "object unsubscribed"),
					(this.name = "ObjectUnsubscribedError"),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		Ar = (function (e) {
			function t(t, n) {
				var r = e.call(this) || this;
				return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
			}
			return (
				ha(t, e),
				(t.prototype.unsubscribe = function () {
					if (!this.closed) {
						this.closed = !0;
						var e = this.subject,
							t = e.observers;
						(this.subject = null),
							!t ||
								0 === t.length ||
								e.isStopped ||
								e.closed ||
								(-1 !== (e = t.indexOf(this.subscriber)) &&
									t.splice(e, 1));
					}
				}),
				t
			);
		})(nb),
		Br = (function (e) {
			function t(t) {
				var n = e.call(this, t) || this;
				return (n.destination = t), n;
			}
			return ha(t, e), t;
		})(za),
		rb = (function (e) {
			function t() {
				var t = e.call(this) || this;
				return (
					(t.observers = []),
					(t.closed = !1),
					(t.isStopped = !1),
					(t.hasError = !1),
					(t.thrownError = null),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype[oi] = function () {
					return new Br(this);
				}),
				(t.prototype.lift = function (e) {
					var t = new Cr(this, this);
					return (t.operator = e), t;
				}),
				(t.prototype.next = function (e) {
					if (this.closed) throw new Ld();
					if (!this.isStopped) {
						var t = this.observers,
							n = t.length;
						t = t.slice();
						for (var r = 0; r < n; r++) t[r].next(e);
					}
				}),
				(t.prototype.error = function (e) {
					if (this.closed) throw new Ld();
					(this.hasError = !0),
						(this.thrownError = e),
						(this.isStopped = !0);
					var t = this.observers,
						n = t.length;
					t = t.slice();
					for (var r = 0; r < n; r++) t[r].error(e);
					this.observers.length = 0;
				}),
				(t.prototype.complete = function () {
					if (this.closed) throw new Ld();
					this.isStopped = !0;
					var e = this.observers,
						t = e.length;
					e = e.slice();
					for (var n = 0; n < t; n++) e[n].complete();
					this.observers.length = 0;
				}),
				(t.prototype.unsubscribe = function () {
					(this.closed = this.isStopped = !0),
						(this.observers = null);
				}),
				(t.prototype._trySubscribe = function (t) {
					if (this.closed) throw new Ld();
					return e.prototype._trySubscribe.call(this, t);
				}),
				(t.prototype._subscribe = function (e) {
					if (this.closed) throw new Ld();
					return this.hasError
						? (e.error(this.thrownError), nb.EMPTY)
						: this.isStopped
						? (e.complete(), nb.EMPTY)
						: (this.observers.push(e), new Ar(this, e));
				}),
				(t.prototype.asObservable = function () {
					var e = new ua();
					return (e.source = this), e;
				}),
				(t.create = function (e, t) {
					return new Cr(e, t);
				}),
				t
			);
		})(ua),
		Cr = (function (e) {
			function t(t, n) {
				var r = e.call(this) || this;
				return (r.destination = t), (r.source = n), r;
			}
			return (
				ha(t, e),
				(t.prototype.next = function (e) {
					var t = this.destination;
					t && t.next && t.next(e);
				}),
				(t.prototype.error = function (e) {
					var t = this.destination;
					t && t.error && this.destination.error(e);
				}),
				(t.prototype.complete = function () {
					var e = this.destination;
					e && e.complete && this.destination.complete();
				}),
				(t.prototype._subscribe = function (e) {
					return this.source ? this.source.subscribe(e) : nb.EMPTY;
				}),
				t
			);
		})(rb),
		xu = (function () {
			function e(e) {
				this.connectable = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					var n = this.connectable;
					return (
						n._refCount++,
						(e = new IA(e, n)),
						(t = t.subscribe(e)),
						e.closed || (e.connection = n.connect()),
						t
					);
				}),
				e
			);
		})(),
		IA = (function (e) {
			function t(t, n) {
				return ((t = e.call(this, t) || this).connectable = n), t;
			}
			return (
				ha(t, e),
				(t.prototype._unsubscribe = function () {
					var e = this.connectable;
					if (e) {
						this.connectable = null;
						var t = e._refCount;
						0 >= t
							? (this.connection = null)
							: ((e._refCount = t - 1),
							  1 < t
									? (this.connection = null)
									: ((t = this.connection),
									  (e = e._connection),
									  (this.connection = null),
									  !e || (t && e !== t) || e.unsubscribe()));
					} else this.connection = null;
				}),
				t
			);
		})(za),
		Dr = (function (e) {
			function t(t, n) {
				var r = e.call(this) || this;
				return (
					(r.source = t),
					(r.subjectFactory = n),
					(r._refCount = 0),
					(r._isComplete = !1),
					r
				);
			}
			return (
				ha(t, e),
				(t.prototype._subscribe = function (e) {
					return this.getSubject().subscribe(e);
				}),
				(t.prototype.getSubject = function () {
					var e = this._subject;
					return (
						(e && !e.isStopped) ||
							(this._subject = this.subjectFactory()),
						this._subject
					);
				}),
				(t.prototype.connect = function () {
					var e = this._connection;
					return (
						e ||
							((this._isComplete = !1),
							(e = this._connection = new nb()).add(
								this.source.subscribe(
									new JA(this.getSubject(), this)
								)
							),
							e.closed &&
								((this._connection = null), (e = nb.EMPTY))),
						e
					);
				}),
				(t.prototype.refCount = function () {
					return dn()(this);
				}),
				t
			);
		})(ua),
		lv = (function () {
			var e = Dr.prototype;
			return {
				operator: { value: null },
				_refCount: { value: 0, writable: !0 },
				_subject: { value: null, writable: !0 },
				_connection: { value: null, writable: !0 },
				_subscribe: { value: e._subscribe },
				_isComplete: { value: e._isComplete, writable: !0 },
				getSubject: { value: e.getSubject },
				connect: { value: e.connect },
				refCount: { value: e.refCount },
			};
		})(),
		JA = (function (e) {
			function t(t, n) {
				return ((t = e.call(this, t) || this).connectable = n), t;
			}
			return (
				ha(t, e),
				(t.prototype._error = function (t) {
					this._unsubscribe(), e.prototype._error.call(this, t);
				}),
				(t.prototype._complete = function () {
					(this.connectable._isComplete = !0),
						this._unsubscribe(),
						e.prototype._complete.call(this);
				}),
				(t.prototype._unsubscribe = function () {
					var e = this.connectable;
					if (e) {
						this.connectable = null;
						var t = e._connection;
						(e._refCount = 0),
							(e._subject = null),
							(e._connection = null),
							t && t.unsubscribe();
					}
				}),
				t
			);
		})(Br);
	!(function (e) {
		function t(t, n) {
			return ((t = e.call(this, t) || this).connectable = n), t;
		}
		ha(t, e),
			(t.prototype._unsubscribe = function () {
				var e = this.connectable;
				if (e) {
					this.connectable = null;
					var t = e._refCount;
					0 >= t
						? (this.connection = null)
						: ((e._refCount = t - 1),
						  1 < t
								? (this.connection = null)
								: ((t = this.connection),
								  (e = e._connection),
								  (this.connection = null),
								  !e || (t && e !== t) || e.unsubscribe()));
				} else this.connection = null;
			});
	})(za),
		(function (e) {
			function t(t, n, r, o, i) {
				return (
					((t = e.call(this, t) || this).keySelector = n),
					(t.elementSelector = r),
					(t.durationSelector = o),
					(t.subjectSelector = i),
					(t.groups = null),
					(t.attemptedToUnsubscribe = !1),
					(t.count = 0),
					t
				);
			}
			ha(t, e),
				(t.prototype._next = function (e) {
					try {
						var t = this.keySelector(e);
					} catch (e) {
						return void this.error(e);
					}
					this._group(e, t);
				}),
				(t.prototype._group = function (e, t) {
					var n = this.groups;
					n || (n = this.groups = new Map());
					var r = n.get(t);
					if (this.elementSelector)
						try {
							var o = this.elementSelector(e);
						} catch (e) {
							this.error(e);
						}
					else o = e;
					if (
						!r &&
						((r = this.subjectSelector
							? this.subjectSelector()
							: new rb()),
						n.set(t, r),
						(e = new wl(t, r, this)),
						this.destination.next(e),
						this.durationSelector)
					) {
						e = void 0;
						try {
							e = this.durationSelector(new wl(t, r));
						} catch (e) {
							return void this.error(e);
						}
						this.add(e.subscribe(new KA(t, r, this)));
					}
					r.closed || r.next(o);
				}),
				(t.prototype._error = function (e) {
					var t = this.groups;
					t &&
						(t.forEach(function (t, n) {
							t.error(e);
						}),
						t.clear()),
						this.destination.error(e);
				}),
				(t.prototype._complete = function () {
					var e = this.groups;
					e &&
						(e.forEach(function (e, t) {
							e.complete();
						}),
						e.clear()),
						this.destination.complete();
				}),
				(t.prototype.removeGroup = function (e) {
					this.groups.delete(e);
				}),
				(t.prototype.unsubscribe = function () {
					this.closed ||
						((this.attemptedToUnsubscribe = !0),
						0 === this.count && e.prototype.unsubscribe.call(this));
				});
		})(za);
	var KA = (function (e) {
			function t(t, n, r) {
				var o = e.call(this, n) || this;
				return (o.key = t), (o.group = n), (o.parent = r), o;
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.complete();
				}),
				(t.prototype._unsubscribe = function () {
					var e = this.parent,
						t = this.key;
					(this.key = this.parent = null), e && e.removeGroup(t);
				}),
				t
			);
		})(za),
		wl = (function (e) {
			function t(t, n, r) {
				var o = e.call(this) || this;
				return (
					(o.key = t),
					(o.groupSubject = n),
					(o.refCountSubscription = r),
					o
				);
			}
			return (
				ha(t, e),
				(t.prototype._subscribe = function (e) {
					var t = new nb(),
						n = this.refCountSubscription,
						r = this.groupSubject;
					return (
						n && !n.closed && t.add(new LA(n)),
						t.add(r.subscribe(e)),
						t
					);
				}),
				t
			);
		})(ua),
		LA = (function (e) {
			function t(t) {
				var n = e.call(this) || this;
				return (n.parent = t), t.count++, n;
			}
			return (
				ha(t, e),
				(t.prototype.unsubscribe = function () {
					var t = this.parent;
					t.closed ||
						this.closed ||
						(e.prototype.unsubscribe.call(this),
						--t.count,
						0 === t.count &&
							t.attemptedToUnsubscribe &&
							t.unsubscribe());
				}),
				t
			);
		})(nb),
		MA = (function (e) {
			function t(t) {
				var n = e.call(this) || this;
				return (n._value = t), n;
			}
			return (
				ha(t, e),
				Object.defineProperty(t.prototype, "value", {
					get: function () {
						return this.getValue();
					},
					enumerable: !0,
					configurable: !0,
				}),
				(t.prototype._subscribe = function (t) {
					var n = e.prototype._subscribe.call(this, t);
					return n && !n.closed && t.next(this._value), n;
				}),
				(t.prototype.getValue = function () {
					if (this.hasError) throw this.thrownError;
					if (this.closed) throw new Ld();
					return this._value;
				}),
				(t.prototype.next = function (t) {
					e.prototype.next.call(this, (this._value = t));
				}),
				t
			);
		})(rb),
		Kg = (function (e) {
			function t(t, n) {
				var r = e.call(this, t, n) || this;
				return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
			}
			return (
				ha(t, e),
				(t.prototype.schedule = function (e, t) {
					if ((void 0 === t && (t = 0), this.closed)) return this;
					(this.state = e), (e = this.id);
					var n = this.scheduler;
					return (
						null != e && (this.id = this.recycleAsyncId(n, e, t)),
						(this.pending = !0),
						(this.delay = t),
						(this.id =
							this.id || this.requestAsyncId(n, this.id, t)),
						this
					);
				}),
				(t.prototype.requestAsyncId = function (e, t, n) {
					return (
						void 0 === n && (n = 0),
						setInterval(e.flush.bind(e, this), n)
					);
				}),
				(t.prototype.recycleAsyncId = function (e, t, n) {
					if (
						(void 0 === n && (n = 0),
						null !== n && this.delay === n && !1 === this.pending)
					)
						return t;
					clearInterval(t);
				}),
				(t.prototype.execute = function (e, t) {
					return this.closed
						? Error("executing a cancelled action")
						: ((this.pending = !1),
						  (e = this._execute(e, t))
								? e
								: void (
										!1 === this.pending &&
										null != this.id &&
										(this.id = this.recycleAsyncId(
											this.scheduler,
											this.id,
											null
										))
								  ));
				}),
				(t.prototype._execute = function (e, t) {
					t = !1;
					var n = void 0;
					try {
						this.work(e);
					} catch (e) {
						(t = !0), (n = (!!e && e) || Error(e));
					}
					if (t) return this.unsubscribe(), n;
				}),
				(t.prototype._unsubscribe = function () {
					var e = this.id,
						t = this.scheduler,
						n = t.actions,
						r = n.indexOf(this);
					(this.state = this.work = null),
						(this.pending = !1),
						(this.scheduler = null),
						-1 !== r && n.splice(r, 1),
						null != e &&
							(this.id = this.recycleAsyncId(t, e, null)),
						(this.delay = null);
				}),
				t
			);
		})(
			(function (e) {
				function t(t, n) {
					return e.call(this) || this;
				}
				return (
					ha(t, e),
					(t.prototype.schedule = function (e, t) {
						return this;
					}),
					t
				);
			})(nb)
		),
		NA = (function (e) {
			function t(t, n) {
				var r = e.call(this, t, n) || this;
				return (r.scheduler = t), (r.work = n), r;
			}
			return (
				ha(t, e),
				(t.prototype.schedule = function (t, n) {
					return (
						void 0 === n && (n = 0),
						0 < n
							? e.prototype.schedule.call(this, t, n)
							: ((this.delay = n),
							  (this.state = t),
							  this.scheduler.flush(this),
							  this)
					);
				}),
				(t.prototype.execute = function (t, n) {
					return 0 < n || this.closed
						? e.prototype.execute.call(this, t, n)
						: this._execute(t, n);
				}),
				(t.prototype.requestAsyncId = function (t, n, r) {
					return (
						void 0 === r && (r = 0),
						(null !== r && 0 < r) || (null === r && 0 < this.delay)
							? e.prototype.requestAsyncId.call(this, t, n, r)
							: t.flush(this)
					);
				}),
				t
			);
		})(Kg),
		xl = (function () {
			function e(t, n) {
				void 0 === n && (n = e.now),
					(this.SchedulerAction = t),
					(this.now = n);
			}
			return (
				(e.prototype.schedule = function (e, t, n) {
					return (
						void 0 === t && (t = 0),
						new this.SchedulerAction(this, e).schedule(n, t)
					);
				}),
				(e.now = function () {
					return Date.now();
				}),
				e
			);
		})(),
		Lg = (function (e) {
			function t(n, r) {
				void 0 === r && (r = xl.now);
				var o =
					e.call(this, n, function () {
						return t.delegate && t.delegate !== o
							? t.delegate.now()
							: r();
					}) || this;
				return (
					(o.actions = []), (o.active = !1), (o.scheduled = void 0), o
				);
			}
			return (
				ha(t, e),
				(t.prototype.schedule = function (n, r, o) {
					return (
						void 0 === r && (r = 0),
						t.delegate && t.delegate !== this
							? t.delegate.schedule(n, r, o)
							: e.prototype.schedule.call(this, n, r, o)
					);
				}),
				(t.prototype.flush = function (e) {
					var t = this.actions;
					if (this.active) t.push(e);
					else {
						var n;
						this.active = !0;
						do {
							if ((n = e.execute(e.state, e.delay))) break;
						} while ((e = t.shift()));
						if (((this.active = !1), n)) {
							for (; (e = t.shift()); ) e.unsubscribe();
							throw n;
						}
					}
				}),
				t
			);
		})(xl),
		Mg = new ((function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this;
			}
			return ha(t, e), t;
		})(Lg))(NA),
		Sb = new ua(function (e) {
			return e.complete();
		}),
		en = function (e) {
			return function (t) {
				for (var n = 0, r = e.length; n < r && !t.closed; n++)
					t.next(e[n]);
				t.complete();
			};
		},
		yl;
	!(function (e) {
		(e.NEXT = "N"), (e.ERROR = "E"), (e.COMPLETE = "C");
	})(yl || (yl = {}));
	var yf = (function () {
			function e(e, t, n) {
				(this.kind = e),
					(this.value = t),
					(this.error = n),
					(this.hasValue = "N" === e);
			}
			return (
				(e.prototype.observe = function (e) {
					switch (this.kind) {
						case "N":
							return e.next && e.next(this.value);
						case "E":
							return e.error && e.error(this.error);
						case "C":
							return e.complete && e.complete();
					}
				}),
				(e.prototype.do = function (e, t, n) {
					switch (this.kind) {
						case "N":
							return e && e(this.value);
						case "E":
							return t && t(this.error);
						case "C":
							return n && n();
					}
				}),
				(e.prototype.accept = function (e, t, n) {
					return e && "function" == typeof e.next
						? this.observe(e)
						: this.do(e, t, n);
				}),
				(e.prototype.toObservable = function () {
					switch (this.kind) {
						case "N":
							return ob(this.value);
						case "E":
							return ra(this.error);
						case "C":
							return Qf();
					}
					throw Error("unexpected notification kind value");
				}),
				(e.createNext = function (t) {
					return void 0 !== t
						? new e("N", t)
						: e.undefinedValueNotification;
				}),
				(e.createError = function (t) {
					return new e("E", void 0, t);
				}),
				(e.createComplete = function () {
					return e.completeNotification;
				}),
				(e.completeNotification = new e("C")),
				(e.undefinedValueNotification = new e("N", void 0)),
				e
			);
		})(),
		Bu = (function () {
			function e(e, t) {
				void 0 === t && (t = 0), (this.scheduler = e), (this.delay = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new Er(e, this.scheduler, this.delay));
				}),
				e
			);
		})(),
		Er = (function (e) {
			function t(t, n, r) {
				return (
					void 0 === r && (r = 0),
					((t = e.call(this, t) || this).scheduler = n),
					(t.delay = r),
					t
				);
			}
			return (
				ha(t, e),
				(t.dispatch = function (e) {
					e.notification.observe(e.destination), this.unsubscribe();
				}),
				(t.prototype.scheduleMessage = function (e) {
					this.destination.add(
						this.scheduler.schedule(
							t.dispatch,
							this.delay,
							new OA(e, this.destination)
						)
					);
				}),
				(t.prototype._next = function (e) {
					this.scheduleMessage(yf.createNext(e));
				}),
				(t.prototype._error = function (e) {
					this.scheduleMessage(yf.createError(e)), this.unsubscribe();
				}),
				(t.prototype._complete = function () {
					this.scheduleMessage(yf.createComplete()),
						this.unsubscribe();
				}),
				t
			);
		})(za),
		OA = function (e, t) {
			(this.notification = e), (this.destination = t);
		},
		Te = (function (e) {
			function t(t, n, r) {
				void 0 === t && (t = Number.POSITIVE_INFINITY),
					void 0 === n && (n = Number.POSITIVE_INFINITY);
				var o = e.call(this) || this;
				return (
					(o.scheduler = r),
					(o._events = []),
					(o._infiniteTimeWindow = !1),
					(o._bufferSize = 1 > t ? 1 : t),
					(o._windowTime = 1 > n ? 1 : n),
					n === Number.POSITIVE_INFINITY
						? ((o._infiniteTimeWindow = !0),
						  (o.next = o.nextInfiniteTimeWindow))
						: (o.next = o.nextTimeWindow),
					o
				);
			}
			return (
				ha(t, e),
				(t.prototype.nextInfiniteTimeWindow = function (t) {
					if (!this.isStopped) {
						var n = this._events;
						n.push(t), n.length > this._bufferSize && n.shift();
					}
					e.prototype.next.call(this, t);
				}),
				(t.prototype.nextTimeWindow = function (t) {
					this.isStopped ||
						(this._events.push(new PA(this._getNow(), t)),
						this._trimBufferThenGetEvents()),
						e.prototype.next.call(this, t);
				}),
				(t.prototype._subscribe = function (e) {
					var t = this._infiniteTimeWindow,
						n = t ? this._events : this._trimBufferThenGetEvents(),
						r = this.scheduler,
						o = n.length;
					if (this.closed) throw new Ld();
					if (this.isStopped || this.hasError) var i = nb.EMPTY;
					else this.observers.push(e), (i = new Ar(this, e));
					if ((r && e.add((e = new Er(e, r))), t))
						for (t = 0; t < o && !e.closed; t++) e.next(n[t]);
					else
						for (t = 0; t < o && !e.closed; t++) e.next(n[t].value);
					return (
						this.hasError
							? e.error(this.thrownError)
							: this.isStopped && e.complete(),
						i
					);
				}),
				(t.prototype._getNow = function () {
					return (this.scheduler || Mg).now();
				}),
				(t.prototype._trimBufferThenGetEvents = function () {
					for (
						var e = this._getNow(),
							t = this._bufferSize,
							n = this._windowTime,
							r = this._events,
							o = r.length,
							i = 0;
						i < o && !(e - r[i].time < n);

					)
						i++;
					return (
						o > t && (i = Math.max(i, o - t)),
						0 < i && r.splice(0, i),
						r
					);
				}),
				t
			);
		})(rb),
		PA = function (e, t) {
			(this.time = e), (this.value = t);
		},
		Sf = (function (e) {
			function t() {
				var t = (null !== e && e.apply(this, arguments)) || this;
				return (
					(t.value = null), (t.hasNext = !1), (t.hasCompleted = !1), t
				);
			}
			return (
				ha(t, e),
				(t.prototype._subscribe = function (t) {
					return this.hasError
						? (t.error(this.thrownError), nb.EMPTY)
						: this.hasCompleted && this.hasNext
						? (t.next(this.value), t.complete(), nb.EMPTY)
						: e.prototype._subscribe.call(this, t);
				}),
				(t.prototype.next = function (e) {
					this.hasCompleted ||
						((this.value = e), (this.hasNext = !0));
				}),
				(t.prototype.error = function (t) {
					this.hasCompleted || e.prototype.error.call(this, t);
				}),
				(t.prototype.complete = function () {
					(this.hasCompleted = !0),
						this.hasNext && e.prototype.next.call(this, this.value),
						e.prototype.complete.call(this);
				}),
				t
			);
		})(rb),
		QA = 1,
		RA = Promise.resolve(),
		aj = {},
		Fr = {
			setImmediate: function (e) {
				var t = QA++;
				return (
					(aj[t] = !0),
					RA.then(function () {
						return fn(t) && e();
					}),
					t
				);
			},
			clearImmediate: function (e) {
				fn(e);
			},
		},
		SA = (function (e) {
			function t(t, n) {
				var r = e.call(this, t, n) || this;
				return (r.scheduler = t), (r.work = n), r;
			}
			return (
				ha(t, e),
				(t.prototype.requestAsyncId = function (t, n, r) {
					return (
						void 0 === r && (r = 0),
						null !== r && 0 < r
							? e.prototype.requestAsyncId.call(this, t, n, r)
							: (t.actions.push(this),
							  t.scheduled ||
									(t.scheduled = Fr.setImmediate(
										t.flush.bind(t, null)
									)))
					);
				}),
				(t.prototype.recycleAsyncId = function (t, n, r) {
					if (
						(void 0 === r && (r = 0),
						(null !== r && 0 < r) || (null === r && 0 < this.delay))
					)
						return e.prototype.recycleAsyncId.call(this, t, n, r);
					0 === t.actions.length &&
						(Fr.clearImmediate(n), (t.scheduled = void 0));
				}),
				t
			);
		})(Kg),
		kj = new ((function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this;
			}
			return (
				ha(t, e),
				(t.prototype.flush = function (e) {
					(this.active = !0), (this.scheduled = void 0);
					var t,
						n = this.actions,
						r = -1,
						o = n.length;
					e = e || n.shift();
					do {
						if ((t = e.execute(e.state, e.delay))) break;
					} while (++r < o && (e = n.shift()));
					if (((this.active = !1), t)) {
						for (; ++r < o && (e = n.shift()); ) e.unsubscribe();
						throw t;
					}
				}),
				t
			);
		})(Lg))(SA),
		TA = kj,
		zl = new Lg(Kg),
		cd = zl,
		UA = (function (e) {
			function t(t, n) {
				var r = e.call(this, t, n) || this;
				return (r.scheduler = t), (r.work = n), r;
			}
			return (
				ha(t, e),
				(t.prototype.requestAsyncId = function (t, n, r) {
					return (
						void 0 === r && (r = 0),
						null !== r && 0 < r
							? e.prototype.requestAsyncId.call(this, t, n, r)
							: (t.actions.push(this),
							  t.scheduled ||
									(t.scheduled = requestAnimationFrame(
										function () {
											return t.flush(null);
										}
									)))
					);
				}),
				(t.prototype.recycleAsyncId = function (t, n, r) {
					if (
						(void 0 === r && (r = 0),
						(null !== r && 0 < r) || (null === r && 0 < this.delay))
					)
						return e.prototype.recycleAsyncId.call(this, t, n, r);
					0 === t.actions.length &&
						(cancelAnimationFrame(n), (t.scheduled = void 0));
				}),
				t
			);
		})(Kg),
		Gr = new ((function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this;
			}
			return (
				ha(t, e),
				(t.prototype.flush = function (e) {
					(this.active = !0), (this.scheduled = void 0);
					var t,
						n = this.actions,
						r = -1,
						o = n.length;
					e = e || n.shift();
					do {
						if ((t = e.execute(e.state, e.delay))) break;
					} while (++r < o && (e = n.shift()));
					if (((this.active = !1), t)) {
						for (; ++r < o && (e = n.shift()); ) e.unsubscribe();
						throw t;
					}
				}),
				t
			);
		})(Lg))(UA),
		VA = (function (e) {
			function t(t, n) {
				void 0 === t && (t = Hr),
					void 0 === n && (n = Number.POSITIVE_INFINITY);
				var r =
					e.call(this, t, function () {
						return r.frame;
					}) || this;
				return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r;
			}
			return (
				ha(t, e),
				(t.prototype.flush = function () {
					for (
						var e, t, n = this.actions, r = this.maxFrames;
						(t = n[0]) &&
						t.delay <= r &&
						(n.shift(),
						(this.frame = t.delay),
						!(e = t.execute(t.state, t.delay)));

					);
					if (e) {
						for (; (t = n.shift()); ) t.unsubscribe();
						throw e;
					}
				}),
				(t.frameTimeFactor = 10),
				t
			);
		})(Lg),
		Hr = (function (e) {
			function t(t, n, r) {
				void 0 === r && (r = t.index += 1);
				var o = e.call(this, t, n) || this;
				return (
					(o.scheduler = t),
					(o.work = n),
					(o.index = r),
					(o.active = !0),
					(o.index = t.index = r),
					o
				);
			}
			return (
				ha(t, e),
				(t.prototype.schedule = function (n, r) {
					if ((void 0 === r && (r = 0), !this.id))
						return e.prototype.schedule.call(this, n, r);
					this.active = !1;
					var o = new t(this.scheduler, this.work);
					return this.add(o), o.schedule(n, r);
				}),
				(t.prototype.requestAsyncId = function (e, n, r) {
					return (
						void 0 === r && (r = 0),
						(this.delay = e.frame + r),
						(e = e.actions).push(this),
						e.sort(t.sortActions),
						!0
					);
				}),
				(t.prototype.recycleAsyncId = function (e, t, n) {}),
				(t.prototype._execute = function (t, n) {
					if (!0 === this.active)
						return e.prototype._execute.call(this, t, n);
				}),
				(t.sortActions = function (e, t) {
					return e.delay === t.delay
						? e.index === t.index
							? 0
							: e.index > t.index
							? 1
							: -1
						: e.delay > t.delay
						? 1
						: -1;
				}),
				t
			);
		})(Kg),
		Al = (function () {
			function e() {
				return (
					Error.call(this),
					(this.message = "argument out of range"),
					(this.name = "ArgumentOutOfRangeError"),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		eh = (function () {
			function e() {
				return (
					Error.call(this),
					(this.message = "no elements in sequence"),
					(this.name = "EmptyError"),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		Tb = (function () {
			function e() {
				return (
					Error.call(this),
					(this.message = "Timeout has occurred"),
					(this.name = "TimeoutError"),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		Cu = (function () {
			function e(e, t) {
				(this.project = e), (this.thisArg = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new WA(e, this.project, this.thisArg));
				}),
				e
			);
		})(),
		WA = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).project = n),
					(t.count = 0),
					(t.thisArg = r || t),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					try {
						var t = this.project.call(
							this.thisArg,
							e,
							this.count++
						);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.next(t);
				}),
				t
			);
		})(za),
		Bl = (function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this;
			}
			return (
				ha(t, e),
				(t.prototype.notifyNext = function (e, t, n, r, o) {
					this.destination.next(t);
				}),
				(t.prototype.notifyError = function (e, t) {
					this.destination.error(e);
				}),
				(t.prototype.notifyComplete = function (e) {
					this.destination.complete();
				}),
				t
			);
		})(za),
		Hu = (function (e) {
			function t(t, n, r) {
				var o = e.call(this) || this;
				return (
					(o.parent = t),
					(o.outerValue = n),
					(o.outerIndex = r),
					(o.index = 0),
					o
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.parent.notifyNext(
						this.outerValue,
						e,
						this.outerIndex,
						this.index++,
						this
					);
				}),
				(t.prototype._error = function (e) {
					this.parent.notifyError(e, this), this.unsubscribe();
				}),
				(t.prototype._complete = function () {
					this.parent.notifyComplete(this), this.unsubscribe();
				}),
				t
			);
		})(za),
		XA = function (e) {
			return function (t) {
				return (
					e
						.then(
							function (e) {
								t.closed || (t.next(e), t.complete());
							},
							function (e) {
								return t.error(e);
							}
						)
						.then(null, Oe),
					t
				);
			};
		},
		xd =
			"function" == typeof Symbol && Symbol.iterator
				? Symbol.iterator
				: "@@iterator",
		YA = function (e) {
			return function (t) {
				for (var n = e[xd](); ; ) {
					var r = void 0;
					try {
						r = n.next();
					} catch (e) {
						return t.error(e), t;
					}
					if (r.done) {
						t.complete();
						break;
					}
					if ((t.next(r.value), t.closed)) break;
				}
				return (
					"function" == typeof n.return &&
						t.add(function () {
							n.return && n.return();
						}),
					t
				);
			};
		},
		ZA = function (e) {
			return function (t) {
				var n = e[Pe]();
				if ("function" != typeof n.subscribe)
					throw new TypeError(
						"Provided object does not correctly implement Symbol.observable"
					);
				return n.subscribe(t);
			};
		},
		mn = function (e) {
			return e && "number" == typeof e.length && "function" != typeof e;
		},
		Tf = function (e) {
			if (e && "function" == typeof e[Pe]) return ZA(e);
			if (mn(e)) return en(e);
			if (kn(e)) return XA(e);
			if (e && "function" == typeof e[xd]) return YA(e);
			throw (
				((e = Xi(e) ? "an invalid object" : "'" + e + "'"),
				new TypeError(
					"You provided " +
						e +
						" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
				))
			);
		},
		Ir = {},
		aB = (function () {
			function e(e) {
				this.resultSelector = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new $A(e, this.resultSelector));
				}),
				e
			);
		})(),
		$A = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).resultSelector = n),
					(t.active = 0),
					(t.values = []),
					(t.observables = []),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.values.push(Ir), this.observables.push(e);
				}),
				(t.prototype._complete = function () {
					var e = this.observables,
						t = e.length;
					if (0 === t) this.destination.complete();
					else {
						this.toRespond = this.active = t;
						for (var n = 0; n < t; n++)
							this.add(bj(this, e[n], void 0, n));
					}
				}),
				(t.prototype.notifyComplete = function (e) {
					0 == --this.active && this.destination.complete();
				}),
				(t.prototype.notifyNext = function (e, t, n) {
					var r = (e = this.values)[n];
					(r = this.toRespond
						? r === Ir
							? --this.toRespond
							: this.toRespond
						: 0),
						(e[n] = t),
						0 === r &&
							(this.resultSelector
								? this._tryResultSelector(e)
								: this.destination.next(e.slice()));
				}),
				(t.prototype._tryResultSelector = function (e) {
					try {
						var t = this.resultSelector.apply(this, e);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.next(t);
				}),
				t
			);
		})(Bl),
		nd = (function (e) {
			function t(t) {
				var n = e.call(this) || this;
				return (n.parent = t), n;
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.parent.notifyNext(e);
				}),
				(t.prototype._error = function (e) {
					this.parent.notifyError(e), this.unsubscribe();
				}),
				(t.prototype._complete = function () {
					this.parent.notifyComplete(), this.unsubscribe();
				}),
				t
			);
		})(za);
	!(function (e) {
		function t(t, n, r) {
			var o = e.call(this) || this;
			return (o.parent = t), (o.outerValue = n), (o.outerIndex = r), o;
		}
		ha(t, e),
			(t.prototype._next = function (e) {
				this.parent.notifyNext(
					this.outerValue,
					e,
					this.outerIndex,
					this
				);
			}),
			(t.prototype._error = function (e) {
				this.parent.notifyError(e), this.unsubscribe();
			}),
			(t.prototype._complete = function () {
				this.parent.notifyComplete(this), this.unsubscribe();
			});
	})(za);
	var od = (function (e) {
		function t() {
			return (null !== e && e.apply(this, arguments)) || this;
		}
		return (
			ha(t, e),
			(t.prototype.notifyNext = function (e) {
				this.destination.next(e);
			}),
			(t.prototype.notifyError = function (e) {
				this.destination.error(e);
			}),
			(t.prototype.notifyComplete = function () {
				this.destination.complete();
			}),
			t
		);
	})(za);
	!(function (e) {
		function t() {
			return (null !== e && e.apply(this, arguments)) || this;
		}
		ha(t, e),
			(t.prototype.notifyNext = function (e, t, n, r) {
				this.destination.next(t);
			}),
			(t.prototype.notifyError = function (e) {
				this.destination.error(e);
			}),
			(t.prototype.notifyComplete = function (e) {
				this.destination.complete();
			});
	})(za);
	var Lu = (function () {
			function e(e, t) {
				void 0 === t && (t = Number.POSITIVE_INFINITY),
					(this.project = e),
					(this.concurrent = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(
						new bB(e, this.project, this.concurrent)
					);
				}),
				e
			);
		})(),
		bB = (function (e) {
			function t(t, n, r) {
				return (
					void 0 === r && (r = Number.POSITIVE_INFINITY),
					((t = e.call(this, t) || this).project = n),
					(t.concurrent = r),
					(t.hasCompleted = !1),
					(t.buffer = []),
					(t.active = 0),
					(t.index = 0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.active < this.concurrent
						? this._tryNext(e)
						: this.buffer.push(e);
				}),
				(t.prototype._tryNext = function (e) {
					var t = this.index++;
					try {
						var n = this.project(e, t);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.active++, this._innerSub(n);
				}),
				(t.prototype._innerSub = function (e) {
					var t = new nd(this),
						n = this.destination;
					n.add(t), (e = bd(e, t)) !== t && n.add(e);
				}),
				(t.prototype._complete = function () {
					(this.hasCompleted = !0),
						0 === this.active &&
							0 === this.buffer.length &&
							this.destination.complete(),
						this.unsubscribe();
				}),
				(t.prototype.notifyNext = function (e) {
					this.destination.next(e);
				}),
				(t.prototype.notifyComplete = function () {
					var e = this.buffer;
					this.active--,
						0 < e.length
							? this._next(e.shift())
							: 0 === this.active &&
							  this.hasCompleted &&
							  this.destination.complete();
				}),
				t
			);
		})(od),
		Cl = R.parseFloat,
		Jr =
			-1 / 0 != 1 / Cl("\t\n\v\f\r                　\u2028\u2029\ufeff-0")
				? function (e) {
						e = Oj(String(e));
						var t = Cl(e);
						return 0 === t && "-" == e.charAt(0) ? -0 : t;
				  }
				: Cl;
	ea({ global: !0, forced: parseFloat != Jr }, { parseFloat: Jr });
	var Dl = new ua(Ic),
		Qu = (function () {
			function e(e, t) {
				(this.predicate = e), (this.thisArg = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new cB(e, this.predicate, this.thisArg));
				}),
				e
			);
		})(),
		cB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).predicate = n),
					(t.thisArg = r),
					(t.count = 0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					try {
						var t = this.predicate.call(
							this.thisArg,
							e,
							this.count++
						);
					} catch (e) {
						return void this.destination.error(e);
					}
					t && this.destination.next(e);
				}),
				t
			);
		})(za),
		Ru = (function () {
			function e() {}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new dB(e));
				}),
				e
			);
		})(),
		dB = (function (e) {
			function t(t) {
				return (
					((t = e.call(this, t) || this).hasFirst = !1),
					(t.observables = []),
					(t.subscriptions = []),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.observables.push(e);
				}),
				(t.prototype._complete = function () {
					var e = this.observables,
						t = e.length;
					if (0 === t) this.destination.complete();
					else {
						for (var n = 0; n < t && !this.hasFirst; n++) {
							var r = bj(this, e[n], void 0, n);
							this.subscriptions && this.subscriptions.push(r),
								this.add(r);
						}
						this.observables = null;
					}
				}),
				(t.prototype.notifyNext = function (e, t, n) {
					if (!this.hasFirst) {
						for (
							this.hasFirst = !0, e = 0;
							e < this.subscriptions.length;
							e++
						)
							if (e !== n) {
								var r = this.subscriptions[e];
								r.unsubscribe(), this.remove(r);
							}
						this.subscriptions = null;
					}
					this.destination.next(t);
				}),
				t
			);
		})(Bl),
		Uu = (function () {
			function e(e) {
				this.resultSelector = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new eB(e, this.resultSelector));
				}),
				e
			);
		})(),
		eB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).resultSelector = n),
					(t.iterators = []),
					(t.active = 0),
					(t.resultSelector = "function" == typeof n ? n : void 0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					var t = this.iterators;
					hc(e)
						? t.push(new fB(e))
						: "function" == typeof e[xd]
						? t.push(new gB(e[xd]()))
						: t.push(new hB(this.destination, this, e));
				}),
				(t.prototype._complete = function () {
					var e = this.iterators,
						t = e.length;
					if ((this.unsubscribe(), 0 === t))
						this.destination.complete();
					else {
						this.active = t;
						for (var n = 0; n < t; n++) {
							var r = e[n];
							r.stillUnsubscribed
								? this.destination.add(r.subscribe())
								: this.active--;
						}
					}
				}),
				(t.prototype.notifyInactive = function () {
					this.active--,
						0 === this.active && this.destination.complete();
				}),
				(t.prototype.checkIterators = function () {
					for (
						var e = this.iterators,
							t = e.length,
							n = this.destination,
							r = 0;
						r < t;
						r++
					) {
						var o = e[r];
						if ("function" == typeof o.hasValue && !o.hasValue())
							return;
					}
					var i = !1,
						s = [];
					for (r = 0; r < t; r++) {
						var a = (o = e[r]).next();
						if ((o.hasCompleted() && (i = !0), a.done))
							return void n.complete();
						s.push(a.value);
					}
					this.resultSelector
						? this._tryresultSelector(s)
						: n.next(s),
						i && n.complete();
				}),
				(t.prototype._tryresultSelector = function (e) {
					try {
						var t = this.resultSelector.apply(this, e);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.next(t);
				}),
				t
			);
		})(za),
		gB = (function () {
			function e(e) {
				(this.iterator = e), (this.nextResult = e.next());
			}
			return (
				(e.prototype.hasValue = function () {
					return !0;
				}),
				(e.prototype.next = function () {
					var e = this.nextResult;
					return (this.nextResult = this.iterator.next()), e;
				}),
				(e.prototype.hasCompleted = function () {
					var e = this.nextResult;
					return !(!e || !e.done);
				}),
				e
			);
		})(),
		fB = (function () {
			function e(e) {
				(this.array = e),
					(this.length = this.index = 0),
					(this.length = e.length);
			}
			return (
				(e.prototype[xd] = function () {
					return this;
				}),
				(e.prototype.next = function (e) {
					e = this.index++;
					var t = this.array;
					return e < this.length
						? { value: t[e], done: !1 }
						: { value: null, done: !0 };
				}),
				(e.prototype.hasValue = function () {
					return this.array.length > this.index;
				}),
				(e.prototype.hasCompleted = function () {
					return this.array.length === this.index;
				}),
				e
			);
		})(),
		hB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).parent = n),
					(t.observable = r),
					(t.stillUnsubscribed = !0),
					(t.buffer = []),
					(t.isComplete = !1),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype[xd] = function () {
					return this;
				}),
				(t.prototype.next = function () {
					var e = this.buffer;
					return 0 === e.length && this.isComplete
						? { value: null, done: !0 }
						: { value: e.shift(), done: !1 };
				}),
				(t.prototype.hasValue = function () {
					return 0 < this.buffer.length;
				}),
				(t.prototype.hasCompleted = function () {
					return 0 === this.buffer.length && this.isComplete;
				}),
				(t.prototype.notifyComplete = function () {
					0 < this.buffer.length
						? ((this.isComplete = !0), this.parent.notifyInactive())
						: this.destination.complete();
				}),
				(t.prototype.notifyNext = function (e) {
					this.buffer.push(e), this.parent.checkIterators();
				}),
				(t.prototype.subscribe = function () {
					return bd(this.observable, new nd(this));
				}),
				t
			);
		})(od),
		iB = Object.freeze({
			__proto__: null,
			Observable: ua,
			ConnectableObservable: Dr,
			GroupedObservable: wl,
			observable: Pe,
			Subject: rb,
			BehaviorSubject: MA,
			ReplaySubject: Te,
			AsyncSubject: Sf,
			asap: TA,
			asapScheduler: kj,
			async: cd,
			asyncScheduler: zl,
			queue: Mg,
			queueScheduler: Mg,
			animationFrame: Gr,
			animationFrameScheduler: Gr,
			VirtualTimeScheduler: VA,
			VirtualAction: Hr,
			Scheduler: xl,
			Subscription: nb,
			Subscriber: za,
			Notification: yf,
			get NotificationKind() {
				return yl;
			},
			pipe: Zi,
			noop: Ic,
			identity: wd,
			isObservable: function (e) {
				return (
					!!e &&
					(e instanceof ua ||
						("function" == typeof e.lift &&
							"function" == typeof e.subscribe))
				);
			},
			ArgumentOutOfRangeError: Al,
			EmptyError: eh,
			ObjectUnsubscribedError: Ld,
			UnsubscriptionError: Pf,
			TimeoutError: Tb,
			bindCallback: gn,
			bindNodeCallback: hn,
			combineLatest: function () {
				for (var e = [], t = 0; t < arguments.length; t++)
					e[t] = arguments[t];
				var n = (t = void 0);
				return (
					ad(e[e.length - 1]) && (n = e.pop()),
					"function" == typeof e[e.length - 1] && (t = e.pop()),
					1 === e.length && hc(e[0]) && (e = e[0]),
					Rf(e, n).lift(new aB(t))
				);
			},
			concat: nn,
			defer: yd,
			empty: Qf,
			forkJoin: function () {
				for (var e = [], t = 0; t < arguments.length; t++)
					e[t] = arguments[t];
				if (1 === e.length) {
					var n = e[0];
					if (hc(n)) return ch(n, null);
					if (Xi(n) && Object.getPrototypeOf(n) === Object.prototype)
						return ch(
							(e = Object.keys(n)).map(function (e) {
								return n[e];
							}),
							e
						);
				}
				if ("function" == typeof e[e.length - 1]) {
					var r = e.pop();
					return ch(
						(e = 1 === e.length && hc(e[0]) ? e[0] : e),
						null
					).pipe(
						Ea(function (e) {
							return r.apply(void 0, e);
						})
					);
				}
				return ch(e, null);
			},
			from: Jc,
			fromEvent: Db,
			fromEventPattern: pn,
			generate: function (e, t, n, r, o) {
				if (1 == arguments.length) {
					var i = e.initialState;
					(t = e.condition), (n = e.iterate);
					var s = e.resultSelector || wd;
					o = e.scheduler;
				} else
					void 0 === r || ad(r)
						? ((i = e), (s = wd), (o = r))
						: ((i = e), (s = r));
				return new ua(function (e) {
					var r = i;
					if (o)
						return o.schedule(Mu, 0, {
							subscriber: e,
							iterate: n,
							condition: t,
							resultSelector: s,
							state: r,
						});
					for (;;) {
						if (t) {
							var a = void 0;
							try {
								a = t(r);
							} catch (t) {
								e.error(t);
								break;
							}
							if (!a) {
								e.complete();
								break;
							}
						}
						a = void 0;
						try {
							a = s(r);
						} catch (t) {
							e.error(t);
							break;
						}
						if ((e.next(a), e.closed)) break;
						try {
							r = n(r);
						} catch (t) {
							e.error(t);
							break;
						}
					}
				});
			},
			iif: function (e, t, n) {
				return (
					void 0 === t && (t = Sb),
					void 0 === n && (n = Sb),
					yd(function () {
						return e() ? t : n;
					})
				);
			},
			interval: Qe,
			merge: Jb,
			never: function () {
				return Dl;
			},
			of: ob,
			onErrorResumeNext: dj,
			pairs: function (e, t) {
				return new ua(
					t
						? function (n) {
								var r = Object.keys(e),
									o = new nb();
								return (
									o.add(
										t.schedule(Ou, 0, {
											keys: r,
											index: 0,
											subscriber: n,
											subscription: o,
											obj: e,
										})
									),
									o
								);
						  }
						: function (t) {
								for (
									var n = Object.keys(e), r = 0;
									r < n.length && !t.closed;
									r++
								) {
									var o = n[r];
									e.hasOwnProperty(o) && t.next([o, e[o]]);
								}
								t.complete();
						  }
				);
			},
			partition: function (e, t, n) {
				return [yb(t, n)(new ua(Tf(e))), yb(Pu(t, n))(new ua(Tf(e)))];
			},
			race: fb,
			range: function (e, t, n) {
				return (
					void 0 === e && (e = 0),
					new ua(function (r) {
						void 0 === t && ((t = e), (e = 0));
						var o = 0,
							i = e;
						if (n)
							return n.schedule(Su, 0, {
								index: o,
								count: t,
								start: e,
								subscriber: r,
							});
						for (;;) {
							if (o++ >= t) {
								r.complete();
								break;
							}
							if ((r.next(i++), r.closed)) break;
						}
					})
				);
			},
			throwError: ra,
			timer: dd,
			using: function (e, t) {
				return new ua(function (n) {
					try {
						var r = e();
					} catch (e) {
						return void n.error(e);
					}
					try {
						var o = t(r);
					} catch (e) {
						return void n.error(e);
					}
					var i = (o ? Jc(o) : Sb).subscribe(n);
					return function () {
						i.unsubscribe(), r && r.unsubscribe();
					};
				});
			},
			zip: ej,
			scheduled: ln,
			EMPTY: Sb,
			NEVER: Dl,
			config: gc,
		}),
		Vu = (function () {
			function e(e, t, n, r) {
				(this.bufferTimeSpan = e),
					(this.bufferCreationInterval = t),
					(this.maxBufferSize = n),
					(this.scheduler = r);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(
						new jB(
							e,
							this.bufferTimeSpan,
							this.bufferCreationInterval,
							this.maxBufferSize,
							this.scheduler
						)
					);
				}),
				e
			);
		})(),
		kB = function () {
			this.buffer = [];
		},
		jB = (function (e) {
			function t(t, n, r, o, i) {
				if (
					(((t = e.call(this, t) || this).bufferTimeSpan = n),
					(t.bufferCreationInterval = r),
					(t.maxBufferSize = o),
					(t.scheduler = i),
					(t.contexts = []),
					(o = t.openContext()),
					(t.timespanOnly = null == r || 0 > r),
					t.timespanOnly)
				)
					t.add(
						(o.closeAction = i.schedule(qn, n, {
							subscriber: t,
							context: o,
							bufferTimeSpan: n,
						}))
					);
				else {
					var s = {
						bufferTimeSpan: n,
						bufferCreationInterval: r,
						subscriber: t,
						scheduler: i,
					};
					t.add(
						(o.closeAction = i.schedule(rn, n, {
							subscriber: t,
							context: o,
						}))
					),
						t.add(i.schedule(Wu, r, s));
				}
				return t;
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					for (
						var t, n = this.contexts, r = n.length, o = 0;
						o < r;
						o++
					) {
						var i = n[o],
							s = i.buffer;
						s.push(e), s.length == this.maxBufferSize && (t = i);
					}
					t && this.onBufferFull(t);
				}),
				(t.prototype._error = function (t) {
					(this.contexts.length = 0),
						e.prototype._error.call(this, t);
				}),
				(t.prototype._complete = function () {
					for (
						var t = this.contexts, n = this.destination;
						0 < t.length;

					) {
						var r = t.shift();
						n.next(r.buffer);
					}
					e.prototype._complete.call(this);
				}),
				(t.prototype._unsubscribe = function () {
					this.contexts = null;
				}),
				(t.prototype.onBufferFull = function (e) {
					if (
						(this.closeContext(e),
						(e = e.closeAction).unsubscribe(),
						this.remove(e),
						!this.closed && this.timespanOnly)
					) {
						e = this.openContext();
						var t = this.bufferTimeSpan;
						this.add(
							(e.closeAction = this.scheduler.schedule(qn, t, {
								subscriber: this,
								context: e,
								bufferTimeSpan: t,
							}))
						);
					}
				}),
				(t.prototype.openContext = function () {
					var e = new kB();
					return this.contexts.push(e), e;
				}),
				(t.prototype.closeContext = function (e) {
					this.destination.next(e.buffer);
					var t = this.contexts;
					0 <= (t ? t.indexOf(e) : -1) && t.splice(t.indexOf(e), 1);
				}),
				t
			);
		})(za),
		Xu = (function () {
			function e(e) {
				this.selector = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new lB(e, this.selector, this.caught));
				}),
				e
			);
		})(),
		lB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).selector = n),
					(t.caught = r),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype.error = function (t) {
					if (!this.isStopped) {
						var n = void 0;
						try {
							n = this.selector(t, this.caught);
						} catch (t) {
							return void e.prototype.error.call(this, t);
						}
						this._unsubscribeAndRecycle(),
							(t = new nd(this)),
							this.add(t),
							(n = bd(n, t)) !== t && this.add(n);
					}
				}),
				t
			);
		})(od),
		Yu = (function () {
			function e(e) {
				this.defaultValue = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new mB(e, this.defaultValue));
				}),
				e
			);
		})(),
		mB = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).defaultValue = n),
					(t.isEmpty = !0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					(this.isEmpty = !1), this.destination.next(e);
				}),
				(t.prototype._complete = function () {
					this.isEmpty && this.destination.next(this.defaultValue),
						this.destination.complete();
				}),
				t
			);
		})(za),
		Zu = (function () {
			function e(e, t) {
				(this.delay = e), (this.scheduler = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new nB(e, this.delay, this.scheduler));
				}),
				e
			);
		})(),
		nB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).delay = n),
					(t.scheduler = r),
					(t.queue = []),
					(t.active = !1),
					(t.errored = !1),
					t
				);
			}
			return (
				ha(t, e),
				(t.dispatch = function (e) {
					for (
						var t = e.source,
							n = t.queue,
							r = e.scheduler,
							o = e.destination;
						0 < n.length && 0 >= n[0].time - r.now();

					)
						n.shift().notification.observe(o);
					0 < n.length
						? ((t = Math.max(0, n[0].time - r.now())),
						  this.schedule(e, t))
						: (this.unsubscribe(), (t.active = !1));
				}),
				(t.prototype._schedule = function (e) {
					(this.active = !0),
						this.destination.add(
							e.schedule(t.dispatch, this.delay, {
								source: this,
								destination: this.destination,
								scheduler: e,
							})
						);
				}),
				(t.prototype.scheduleNotification = function (e) {
					if (!0 !== this.errored) {
						var t = this.scheduler;
						(e = new oB(t.now() + this.delay, e)),
							this.queue.push(e),
							!1 === this.active && this._schedule(t);
					}
				}),
				(t.prototype._next = function (e) {
					this.scheduleNotification(yf.createNext(e));
				}),
				(t.prototype._error = function (e) {
					(this.errored = !0),
						(this.queue = []),
						this.destination.error(e),
						this.unsubscribe();
				}),
				(t.prototype._complete = function () {
					this.scheduleNotification(yf.createComplete()),
						this.unsubscribe();
				}),
				t
			);
		})(za),
		oB = function (e, t) {
			(this.time = e), (this.notification = t);
		},
		$u = (function () {
			function e(e, t) {
				(this.keySelector = e), (this.flushes = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(
						new pB(e, this.keySelector, this.flushes)
					);
				}),
				e
			);
		})(),
		pB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).keySelector = n),
					(t.values = new Set()),
					r && t.add(bd(r, new nd(t))),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype.notifyNext = function () {
					this.values.clear();
				}),
				(t.prototype.notifyError = function (e) {
					this._error(e);
				}),
				(t.prototype._next = function (e) {
					this.keySelector
						? this._useKeySelector(e)
						: this._finalizeNext(e, e);
				}),
				(t.prototype._useKeySelector = function (e) {
					var t = this.destination;
					try {
						var n = this.keySelector(e);
					} catch (e) {
						return void t.error(e);
					}
					this._finalizeNext(n, e);
				}),
				(t.prototype._finalizeNext = function (e, t) {
					var n = this.values;
					n.has(e) || (n.add(e), this.destination.next(t));
				}),
				t
			);
		})(od),
		bv = (function () {
			function e(e) {
				this.errorFactory = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new qB(e, this.errorFactory));
				}),
				e
			);
		})(),
		qB = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).errorFactory = n),
					(t.hasValue = !1),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					(this.hasValue = !0), this.destination.next(e);
				}),
				(t.prototype._complete = function () {
					if (this.hasValue) return this.destination.complete();
					var e = void 0;
					try {
						e = this.errorFactory();
					} catch (t) {
						e = t;
					}
					this.destination.error(e);
				}),
				t
			);
		})(za),
		cv = (function () {
			function e(e) {
				if (((this.total = e), 0 > this.total)) throw new Al();
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new rB(e, this.total));
				}),
				e
			);
		})(),
		rB = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).total = n), (t.count = 0), t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					var t = this.total,
						n = ++this.count;
					n <= t &&
						(this.destination.next(e),
						n === t &&
							(this.destination.complete(), this.unsubscribe()));
				}),
				t
			);
		})(za),
		dv = (function () {
			function e(e) {
				this.callback = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new sB(e, this.callback));
				}),
				e
			);
		})(),
		sB = (function (e) {
			function t(t, n) {
				return (t = e.call(this, t) || this).add(new nb(n)), t;
			}
			return ha(t, e), t;
		})(za),
		fv = (function () {
			function e() {}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new tB(e));
				}),
				e
			);
		})(),
		tB = (function (e) {
			function t() {
				return (null !== e && e.apply(this, arguments)) || this;
			}
			return ha(t, e), (t.prototype._next = function (e) {}), t;
		})(za),
		gv = (function () {
			function e(e) {
				if (((this.total = e), 0 > this.total)) throw new Al();
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new uB(e, this.total));
				}),
				e
			);
		})(),
		uB = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).total = n),
					(t.ring = []),
					(t.count = 0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					var t = this.ring,
						n = this.total,
						r = this.count++;
					t.length < n ? t.push(e) : (t[r % n] = e);
				}),
				(t.prototype._complete = function () {
					var e = this.destination,
						t = this.count;
					if (0 < t)
						for (
							var n =
									this.count >= this.total
										? this.total
										: this.count,
								r = this.ring,
								o = 0;
							o < n;
							o++
						) {
							var i = t++ % n;
							e.next(r[i]);
						}
					e.complete();
				}),
				t
			);
		})(za),
		hv = (function () {
			function e(e) {
				this.value = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new vB(e, this.value));
				}),
				e
			);
		})(),
		vB = (function (e) {
			function t(t, n) {
				return ((t = e.call(this, t) || this).value = n), t;
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					this.destination.next(this.value);
				}),
				t
			);
		})(za),
		iv = (function () {
			function e(e, t, n) {
				void 0 === n && (n = !1),
					(this.accumulator = e),
					(this.seed = t),
					(this.hasSeed = n);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(
						new wB(e, this.accumulator, this.seed, this.hasSeed)
					);
				}),
				e
			);
		})(),
		wB = (function (e) {
			function t(t, n, r, o) {
				return (
					((t = e.call(this, t) || this).accumulator = n),
					(t._seed = r),
					(t.hasSeed = o),
					(t.index = 0),
					t
				);
			}
			return (
				ha(t, e),
				Object.defineProperty(t.prototype, "seed", {
					get: function () {
						return this._seed;
					},
					set: function (e) {
						(this.hasSeed = !0), (this._seed = e);
					},
					enumerable: !0,
					configurable: !0,
				}),
				(t.prototype._next = function (e) {
					if (this.hasSeed) return this._tryNext(e);
					(this.seed = e), this.destination.next(e);
				}),
				(t.prototype._tryNext = function (e) {
					var t = this.index++;
					try {
						var n = this.accumulator(this.seed, e, t);
					} catch (e) {
						this.destination.error(e);
					}
					(this.seed = n), this.destination.next(n);
				}),
				t
			);
		})(za),
		kv = (function () {
			function e(e, t) {
				(this.subjectFactory = e), (this.selector = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					var n = this.selector,
						r = this.subjectFactory();
					return (e = n(r).subscribe(e)).add(t.subscribe(r)), e;
				}),
				e
			);
		})(),
		mv = (function () {
			function e(e, t) {
				(this.notifier = e), (this.source = t);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new xB(e, this.notifier, this.source));
				}),
				e
			);
		})(),
		xB = (function (e) {
			function t(t, n, r) {
				return (
					((t = e.call(this, t) || this).notifier = n),
					(t.source = r),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype.error = function (t) {
					if (!this.isStopped) {
						var n = this.errors,
							r = this.retries,
							o = this.retriesSubscription;
						if (r) this.retriesSubscription = this.errors = void 0;
						else {
							n = new rb();
							try {
								r = (0, this.notifier)(n);
							} catch (t) {
								return e.prototype.error.call(this, t);
							}
							o = bd(r, new nd(this));
						}
						this._unsubscribeAndRecycle(),
							(this.errors = n),
							(this.retries = r),
							(this.retriesSubscription = o),
							n.next(t);
					}
				}),
				(t.prototype._unsubscribe = function () {
					var e = this.errors,
						t = this.retriesSubscription;
					e && (e.unsubscribe(), (this.errors = void 0)),
						t &&
							(t.unsubscribe(),
							(this.retriesSubscription = void 0)),
						(this.retries = void 0);
				}),
				(t.prototype.notifyNext = function () {
					var e = this._unsubscribe;
					(this._unsubscribe = null),
						this._unsubscribeAndRecycle(),
						(this._unsubscribe = e),
						this.source.subscribe(this);
				}),
				t
			);
		})(od),
		pv = (function () {
			function e(e) {
				this.project = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(new yB(e, this.project));
				}),
				e
			);
		})(),
		yB = (function (e) {
			function t(t, n) {
				return (
					((t = e.call(this, t) || this).project = n),
					(t.index = 0),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					var t = this.index++;
					try {
						var n = this.project(e, t);
					} catch (e) {
						return void this.destination.error(e);
					}
					this._innerSub(n);
				}),
				(t.prototype._innerSub = function (e) {
					var t = this.innerSubscription;
					t && t.unsubscribe(), (t = new nd(this));
					var n = this.destination;
					n.add(t),
						(this.innerSubscription = bd(e, t)),
						this.innerSubscription !== t &&
							n.add(this.innerSubscription);
				}),
				(t.prototype._complete = function () {
					var t = this.innerSubscription;
					(t && !t.closed) || e.prototype._complete.call(this),
						this.unsubscribe();
				}),
				(t.prototype._unsubscribe = function () {
					this.innerSubscription = void 0;
				}),
				(t.prototype.notifyComplete = function () {
					(this.innerSubscription = void 0),
						this.isStopped && e.prototype._complete.call(this);
				}),
				(t.prototype.notifyNext = function (e) {
					this.destination.next(e);
				}),
				t
			);
		})(od),
		qv = (function () {
			function e(e) {
				this.notifier = e;
			}
			return (
				(e.prototype.call = function (e, t) {
					e = new zB(e);
					var n = bd(this.notifier, new nd(e));
					return n && !e.seenValue ? (e.add(n), t.subscribe(e)) : e;
				}),
				e
			);
		})(),
		zB = (function (e) {
			function t(t) {
				return ((t = e.call(this, t) || this).seenValue = !1), t;
			}
			return (
				ha(t, e),
				(t.prototype.notifyNext = function () {
					(this.seenValue = !0), this.complete();
				}),
				(t.prototype.notifyComplete = function () {}),
				t
			);
		})(od),
		rv = (function () {
			function e(e, t, n) {
				(this.nextOrObserver = e),
					(this.error = t),
					(this.complete = n);
			}
			return (
				(e.prototype.call = function (e, t) {
					return t.subscribe(
						new AB(
							e,
							this.nextOrObserver,
							this.error,
							this.complete
						)
					);
				}),
				e
			);
		})(),
		AB = (function (e) {
			function t(t, n, r, o) {
				return (
					((t = e.call(this, t) || this)._tapNext = Ic),
					(t._tapError = Ic),
					(t._tapComplete = Ic),
					(t._tapError = r || Ic),
					(t._tapComplete = o || Ic),
					Ne(n)
						? ((t._context = t), (t._tapNext = n))
						: n &&
						  ((t._context = n),
						  (t._tapNext = n.next || Ic),
						  (t._tapError = n.error || Ic),
						  (t._tapComplete = n.complete || Ic)),
					t
				);
			}
			return (
				ha(t, e),
				(t.prototype._next = function (e) {
					try {
						this._tapNext.call(this._context, e);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.next(e);
				}),
				(t.prototype._error = function (e) {
					try {
						this._tapError.call(this._context, e);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.destination.error(e);
				}),
				(t.prototype._complete = function () {
					try {
						this._tapComplete.call(this._context);
					} catch (e) {
						return void this.destination.error(e);
					}
					return this.destination.complete();
				}),
				t
			);
		})(za),
		tv = { leading: !0, trailing: !1 };
	!(function (e) {
		function t(t, n, r, o) {
			var i = e.call(this, t) || this;
			return (
				(i.destination = t),
				(i.durationSelector = n),
				(i._leading = r),
				(i._trailing = o),
				(i._hasValue = !1),
				i
			);
		}
		ha(t, e),
			(t.prototype._next = function (e) {
				(this._hasValue = !0),
					(this._sendValue = e),
					this._throttled ||
						(this._leading ? this.send() : this.throttle(e));
			}),
			(t.prototype.send = function () {
				var e = this._sendValue;
				this._hasValue && (this.destination.next(e), this.throttle(e)),
					(this._hasValue = !1),
					(this._sendValue = void 0);
			}),
			(t.prototype.throttle = function (e) {
				(e = this.tryDurationSelector(e)) &&
					this.add((this._throttled = bd(e, new nd(this))));
			}),
			(t.prototype.tryDurationSelector = function (e) {
				try {
					return this.durationSelector(e);
				} catch (e) {
					return this.destination.error(e), null;
				}
			}),
			(t.prototype.throttlingDone = function () {
				var e = this._throttled,
					t = this._trailing;
				e && e.unsubscribe(),
					(this._throttled = void 0),
					t && this.send();
			}),
			(t.prototype.notifyNext = function () {
				this.throttlingDone();
			}),
			(t.prototype.notifyComplete = function () {
				this.throttlingDone();
			});
	})(od);
	for (
		var uv = (function () {
				function e(e, t, n, r) {
					(this.duration = e),
						(this.scheduler = t),
						(this.leading = n),
						(this.trailing = r);
				}
				return (
					(e.prototype.call = function (e, t) {
						return t.subscribe(
							new BB(
								e,
								this.duration,
								this.scheduler,
								this.leading,
								this.trailing
							)
						);
					}),
					e
				);
			})(),
			BB = (function (e) {
				function t(t, n, r, o, i) {
					return (
						((t = e.call(this, t) || this).duration = n),
						(t.scheduler = r),
						(t.leading = o),
						(t.trailing = i),
						(t._hasTrailingValue = !1),
						(t._trailingValue = null),
						t
					);
				}
				return (
					ha(t, e),
					(t.prototype._next = function (e) {
						this.throttled
							? this.trailing &&
							  ((this._trailingValue = e),
							  (this._hasTrailingValue = !0))
							: (this.add(
									(this.throttled = this.scheduler.schedule(
										vv,
										this.duration,
										{ subscriber: this }
									))
							  ),
							  this.leading
									? this.destination.next(e)
									: this.trailing &&
									  ((this._trailingValue = e),
									  (this._hasTrailingValue = !0)));
					}),
					(t.prototype._complete = function () {
						this._hasTrailingValue &&
							this.destination.next(this._trailingValue),
							this.destination.complete();
					}),
					(t.prototype.clearThrottle = function () {
						var e = this.throttled;
						e &&
							(this.trailing &&
								this._hasTrailingValue &&
								(this.destination.next(this._trailingValue),
								(this._trailingValue = null),
								(this._hasTrailingValue = !1)),
							e.unsubscribe(),
							this.remove(e),
							(this.throttled = null));
					}),
					t
				);
			})(za),
			xv = (function () {
				function e(e, t, n, r) {
					(this.waitFor = e),
						(this.absoluteTimeout = t),
						(this.withObservable = n),
						(this.scheduler = r);
				}
				return (
					(e.prototype.call = function (e, t) {
						return t.subscribe(
							new CB(
								e,
								this.absoluteTimeout,
								this.waitFor,
								this.withObservable,
								this.scheduler
							)
						);
					}),
					e
				);
			})(),
			CB = (function (e) {
				function t(t, n, r, o, i) {
					return (
						((t = e.call(this, t) || this).absoluteTimeout = n),
						(t.waitFor = r),
						(t.withObservable = o),
						(t.scheduler = i),
						t.scheduleTimeout(),
						t
					);
				}
				return (
					ha(t, e),
					(t.dispatchTimeout = function (e) {
						var t = e.withObservable;
						e._unsubscribeAndRecycle(), e.add(bd(t, new nd(e)));
					}),
					(t.prototype.scheduleTimeout = function () {
						var e = this.action;
						e
							? (this.action = e.schedule(this, this.waitFor))
							: this.add(
									(this.action = this.scheduler.schedule(
										t.dispatchTimeout,
										this.waitFor,
										this
									))
							  );
					}),
					(t.prototype._next = function (t) {
						this.absoluteTimeout || this.scheduleTimeout(),
							e.prototype._next.call(this, t);
					}),
					(t.prototype._unsubscribe = function () {
						(this.action = void 0),
							(this.withObservable = this.scheduler = null);
					}),
					t
				);
			})(od),
			zv = (function () {
				function e(e, t) {
					(this.observables = e), (this.project = t);
				}
				return (
					(e.prototype.call = function (e, t) {
						return t.subscribe(
							new DB(e, this.observables, this.project)
						);
					}),
					e
				);
			})(),
			DB = (function (e) {
				function t(t, n, r) {
					((t = e.call(this, t) || this).observables = n),
						(t.project = r),
						(t.toRespond = []),
						(r = n.length),
						(t.values = Array(r));
					for (var o = 0; o < r; o++) t.toRespond.push(o);
					for (o = 0; o < r; o++) t.add(bj(t, n[o], void 0, o));
					return t;
				}
				return (
					ha(t, e),
					(t.prototype.notifyNext = function (e, t, n) {
						(this.values[n] = t),
							0 < (e = this.toRespond).length &&
								-1 !== (n = e.indexOf(n)) &&
								e.splice(n, 1);
					}),
					(t.prototype.notifyComplete = function () {}),
					(t.prototype._next = function (e) {
						0 === this.toRespond.length &&
							((e = [e].concat(this.values)),
							this.project
								? this._tryProject(e)
								: this.destination.next(e));
					}),
					(t.prototype._tryProject = function (e) {
						try {
							var t = this.project.apply(this, e);
						} catch (e) {
							return void this.destination.error(e);
						}
						this.destination.next(t);
					}),
					t
				);
			})(Bl),
			Kr = xb(function (e) {
				var t =
					("undefined" != typeof crypto &&
						crypto.getRandomValues &&
						crypto.getRandomValues.bind(crypto)) ||
					("undefined" != typeof msCrypto &&
						"function" == typeof window.msCrypto.getRandomValues &&
						msCrypto.getRandomValues.bind(msCrypto));
				if (t) {
					var n = new Uint8Array(16);
					e.exports = function () {
						return t(n), n;
					};
				} else {
					var r = Array(16);
					e.exports = function () {
						for (var e, t = 0; 16 > t; t++)
							0 == (3 & t) && (e = 4294967296 * Math.random()),
								(r[t] = (e >>> ((3 & t) << 3)) & 255);
						return r;
					};
				}
			}),
			zb = [],
			pi = 0;
		256 > pi;
		++pi
	)
		zb[pi] = (pi + 256).toString(16).substr(1);
	var Lr = function (e, t) {
			return (
				(t = t || 0),
				[
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
					"-",
					zb[e[t++]],
					zb[e[t++]],
					"-",
					zb[e[t++]],
					zb[e[t++]],
					"-",
					zb[e[t++]],
					zb[e[t++]],
					"-",
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
					zb[e[t++]],
				].join("")
			);
		},
		Ng = function (e, t, n) {
			if (
				((n = (t && n) || 0),
				"string" == typeof e &&
					((t = "binary" === e ? Array(16) : null), (e = null)),
				((e = (e = e || {}).random || (e.rng || Kr)())[6] =
					(15 & e[6]) | 64),
				(e[8] = (63 & e[8]) | 128),
				t)
			)
				for (var r = 0; 16 > r; ++r) t[n + r] = e[r];
			return t || Lr(e);
		},
		Og = Ng(),
		gj = !1,
		yn = new AbortController(),
		pd,
		Md,
		El,
		Fl,
		Nd,
		qe,
		Fc,
		re,
		nc,
		Gl,
		qd,
		se,
		rd,
		sd,
		td,
		zf;
	!(function (e) {
		(e[(e.ATTRIBUTE_OPERATION_ERR_FAILURE = 2)] =
			"ATTRIBUTE_OPERATION_ERR_FAILURE"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT = 3)] =
				"ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW = 4)] =
				"ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN = 5)] =
				"ATTRIBUTE_OPERATION_ERR_TOO_OFTEN"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND = 6)] =
				"ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_TIMEOUT = 7)] =
				"ATTRIBUTE_OPERATION_ERR_TIMEOUT"),
			(e[(e.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN = 102)] =
				"ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN");
	})(pd || (pd = {})),
		(function (e) {
			(e[(e.CHANNEL_MESSAGE_ERR_FAILURE = 1)] =
				"CHANNEL_MESSAGE_ERR_FAILURE"),
				(e[(e.CHANNEL_MESSAGE_ERR_TIMEOUT = 2)] =
					"CHANNEL_MESSAGE_ERR_TIMEOUT"),
				(e[(e.CHANNEL_MESSAGE_ERR_TOO_OFTEN = 3)] =
					"CHANNEL_MESSAGE_ERR_TOO_OFTEN"),
				(e[(e.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE = 4)] =
					"CHANNEL_MESSAGE_ERR_INVALID_MESSAGE"),
				(e[(e.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL = 5)] =
					"CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL"),
				(e[(e.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102)] =
					"CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN");
		})(Md || (Md = {})),
		(function (e) {
			e[(e.CREATE_CHANNEL_ERR_INVALID_ARGUMENT = 1)] =
				"CREATE_CHANNEL_ERR_INVALID_ARGUMENT";
		})(El || (El = {})),
		(function (e) {
			e[(e.CREATE_INSTANCE_ERR_INVALID_ARGUMENT = 1)] =
				"CREATE_INSTANCE_ERR_INVALID_ARGUMENT";
		})(Fl || (Fl = {})),
		(function (e) {
			(e[(e.GET_MEMBERS_ERR_FAILURE = 1)] = "GET_MEMBERS_ERR_FAILURE"),
				(e[(e.GET_MEMBERS_ERR_REJECTED = 2)] =
					"GET_MEMBERS_ERR_REJECTED"),
				(e[(e.GET_MEMBERS_ERR_TIMEOUT = 3)] =
					"GET_MEMBERS_ERR_TIMEOUT"),
				(e[(e.GET_MEMBERS_ERR_TOO_OFTEN = 4)] =
					"GET_MEMBERS_ERR_TOO_OFTEN"),
				(e[(e.GET_MEMBERS_ERR_NOT_IN_CHANNEL = 5)] =
					"GET_MEMBERS_ERR_NOT_IN_CHANNEL"),
				(e[(e.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN = 102)] =
					"GET_MEMBERS_ERR_USER_NOT_LOGGED_IN");
		})(Nd || (Nd = {})),
		(function (e) {
			(e[(e.INVITATION_API_CALL_ERR_INVALID_ARGUMENT = 1)] =
				"INVITATION_API_CALL_ERR_INVALID_ARGUMENT"),
				(e[(e.INVITATION_API_CALL_ERR_NOT_STARTED = 2)] =
					"INVITATION_API_CALL_ERR_NOT_STARTED"),
				(e[(e.INVITATION_API_CALL_ERR_ALREADY_END = 3)] =
					"INVITATION_API_CALL_ERR_ALREADY_END"),
				(e[(e.INVITATION_API_CALL_ERR_ALREADY_ACCEPT = 4)] =
					"INVITATION_API_CALL_ERR_ALREADY_ACCEPT"),
				(e[(e.INVITATION_API_CALL_ERR_ALREADY_SENT = 5)] =
					"INVITATION_API_CALL_ERR_ALREADY_SENT");
		})(qe || (qe = {})),
		(function (e) {
			(e[(e.JOIN_CHANNEL_ERR_FAILURE = 1)] = "JOIN_CHANNEL_ERR_FAILURE"),
				(e[(e.JOIN_CHANNEL_ERR_REJECTED = 2)] =
					"JOIN_CHANNEL_ERR_REJECTED"),
				(e[(e.JOIN_CHANNEL_ERR_INVALID_ARGUMENT = 3)] =
					"JOIN_CHANNEL_ERR_INVALID_ARGUMENT"),
				(e[(e.JOIN_CHANNEL_TIMEOUT = 4)] = "JOIN_CHANNEL_TIMEOUT"),
				(e[(e.JOIN_CHANNEL_ERR_EXCEED_LIMIT = 5)] =
					"JOIN_CHANNEL_ERR_EXCEED_LIMIT"),
				(e[(e.JOIN_CHANNEL_ERR_ALREADY_JOINED = 6)] =
					"JOIN_CHANNEL_ERR_ALREADY_JOINED"),
				(e[(e.JOIN_CHANNEL_ERR_TOO_OFTEN = 7)] =
					"JOIN_CHANNEL_ERR_TOO_OFTEN"),
				(e[(e.JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN = 8)] =
					"JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN"),
				(e[(e.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102)] =
					"JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN"),
				(e[(e.JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE = 201)] =
					"JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE"),
				(e[
					(e.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID = 202)
				] = "JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID");
		})(Fc || (Fc = {})),
		(function (e) {
			(e[(e.LEAVE_CHANNEL_ERR_FAILURE = 1)] =
				"LEAVE_CHANNEL_ERR_FAILURE"),
				(e[(e.LEAVE_CHANNEL_ERR_REJECTED = 2)] =
					"LEAVE_CHANNEL_ERR_REJECTED"),
				(e[(e.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL = 3)] =
					"LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL"),
				(e[(e.LEAVE_CHANNEL_ERR_KICKED = 4)] =
					"LEAVE_CHANNEL_ERR_KICKED"),
				(e[(e.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102)] =
					"LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN");
		})(re || (re = {})),
		(function (e) {
			(e[(e.LOGIN_ERR_UNKNOWN = 1)] = "LOGIN_ERR_UNKNOWN"),
				(e[(e.LOGIN_ERR_REJECTED = 2)] = "LOGIN_ERR_REJECTED"),
				(e[(e.LOGIN_ERR_INVALID_ARGUMENT = 3)] =
					"LOGIN_ERR_INVALID_ARGUMENT"),
				(e[(e.LOGIN_ERR_INVALID_APP_ID = 4)] =
					"LOGIN_ERR_INVALID_APP_ID"),
				(e[(e.LOGIN_ERR_INVALID_TOKEN = 5)] =
					"LOGIN_ERR_INVALID_TOKEN"),
				(e[(e.LOGIN_ERR_TOKEN_EXPIRED = 6)] =
					"LOGIN_ERR_TOKEN_EXPIRED"),
				(e[(e.LOGIN_ERR_NOT_AUTHORIZED = 7)] =
					"LOGIN_ERR_NOT_AUTHORIZED"),
				(e[(e.LOGIN_ERR_ALREADY_LOGIN = 8)] =
					"LOGIN_ERR_ALREADY_LOGIN"),
				(e[(e.LOGIN_ERR_TIMEOUT = 9)] = "LOGIN_ERR_TIMEOUT"),
				(e[(e.LOGIN_ERR_TOO_OFTEN = 10)] = "LOGIN_ERR_TOO_OFTEN"),
				(e[(e.LOGIN_ERR_ABORTED_BY_LOGOUT = 201)] =
					"LOGIN_ERR_ABORTED_BY_LOGOUT");
		})(nc || (nc = {})),
		(function (e) {
			e[(e.LOGOUT_ERR_USER_NOT_LOGGED_IN = 102)] =
				"LOGOUT_ERR_USER_NOT_LOGGED_IN";
		})(Gl || (Gl = {})),
		(function (e) {
			(e[(e.PEER_MESSAGE_ERR_FAILURE = 1)] = "PEER_MESSAGE_ERR_FAILURE"),
				(e[(e.PEER_MESSAGE_ERR_TIMEOUT = 2)] =
					"PEER_MESSAGE_ERR_TIMEOUT"),
				(e[(e.PEER_MESSAGE_ERR_TOO_OFTEN = 5)] =
					"PEER_MESSAGE_ERR_TOO_OFTEN"),
				(e[(e.PEER_MESSAGE_ERR_INVALID_USERID = 6)] =
					"PEER_MESSAGE_ERR_INVALID_USERID"),
				(e[(e.PEER_MESSAGE_ERR_INVALID_MESSAGE = 7)] =
					"PEER_MESSAGE_ERR_INVALID_MESSAGE"),
				(e[(e.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE = 8)] =
					"PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE"),
				(e[(e.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102)] =
					"PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN");
		})(qd || (qd = {})),
		(function (e) {
			(e[(e.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT = 2)] =
				"QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT"),
				(e[(e.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED = 3)] =
					"QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED"),
				(e[(e.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT = 4)] =
					"QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT"),
				(e[(e.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN = 5)] =
					"QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN"),
				(e[(e.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN = 102)] =
					"QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN");
		})(se || (se = {})),
		(function (e) {
			(e[(e.RENEW_TOKEN_ERR_FAILURE = 1)] = "RENEW_TOKEN_ERR_FAILURE"),
				(e[(e.RENEW_TOKEN_ERR_INVALID_ARGUMENT = 2)] =
					"RENEW_TOKEN_ERR_INVALID_ARGUMENT"),
				(e[(e.RENEW_TOKEN_ERR_REJECTED = 3)] =
					"RENEW_TOKEN_ERR_REJECTED"),
				(e[(e.RENEW_TOKEN_ERR_TOO_OFTEN = 4)] =
					"RENEW_TOKEN_ERR_TOO_OFTEN"),
				(e[(e.RENEW_TOKEN_ERR_TOKEN_EXPIRED = 5)] =
					"RENEW_TOKEN_ERR_TOKEN_EXPIRED"),
				(e[(e.RENEW_TOKEN_ERR_INVALID_TOKEN = 6)] =
					"RENEW_TOKEN_ERR_INVALID_TOKEN"),
				(e[(e.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN = 102)] =
					"RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN"),
				(e[(e.RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT = 201)] =
					"RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT");
		})(rd || (rd = {})),
		(function (e) {
			(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE = 1)] =
				"GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT = 2)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN = 3)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT = 4)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT = 5)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED = 101)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED"),
				(e[(e.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN = 102)] =
					"GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN");
		})(sd || (sd = {})),
		(function (e) {
			(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE = 1)] =
				"PEER_SUBSCRIPTION_STATUS_ERR_FAILURE"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT = 2)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED = 3)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_REJECTED"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT = 4)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN = 5)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW = 6)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW"),
				(e[(e.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN = 102)] =
					"PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN");
		})(td || (td = {})),
		(function (e) {
			(e[(e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE = 1)] =
				"QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE"),
				(e[(e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT = 2)] =
					"QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT"),
				(e[(e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN = 3)] =
					"QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN"),
				(e[
					(e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN = 102)
				] =
					"QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN");
		})(zf || (zf = {}));
	var oc = pd.ATTRIBUTE_OPERATION_ERR_FAILURE,
		gb = pd.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT,
		Ye = pd.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW;
	pd.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN;
	var Mr = pd.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND,
		pc = pd.ATTRIBUTE_OPERATION_ERR_TIMEOUT,
		qc = pd.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN,
		qi = Md.CHANNEL_MESSAGE_ERR_FAILURE,
		Hl = Md.CHANNEL_MESSAGE_ERR_TIMEOUT,
		Nr = Md.CHANNEL_MESSAGE_ERR_TOO_OFTEN,
		Il = Md.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE,
		EB = Md.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL,
		Jl = Md.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN,
		FB = El.CREATE_CHANNEL_ERR_INVALID_ARGUMENT,
		Or = Fl.CREATE_INSTANCE_ERR_INVALID_ARGUMENT;
	sd.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE;
	var Pr = sd.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT;
	sd.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN;
	var Qr = sd.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT,
		GB = sd.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT;
	sd.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED;
	var HB = sd.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN,
		IB = Nd.GET_MEMBERS_ERR_FAILURE,
		JB = Nd.GET_MEMBERS_ERR_REJECTED;
	Nd.GET_MEMBERS_ERR_TIMEOUT, Nd.GET_MEMBERS_ERR_TOO_OFTEN;
	var KB = Nd.GET_MEMBERS_ERR_NOT_IN_CHANNEL,
		LB = Nd.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN,
		Xc = qe.INVITATION_API_CALL_ERR_INVALID_ARGUMENT,
		MB = qe.INVITATION_API_CALL_ERR_NOT_STARTED,
		ri = qe.INVITATION_API_CALL_ERR_ALREADY_END,
		Rr = qe.INVITATION_API_CALL_ERR_ALREADY_ACCEPT,
		NB = qe.INVITATION_API_CALL_ERR_ALREADY_SENT,
		Sr = Fc.JOIN_CHANNEL_ERR_FAILURE;
	Fc.JOIN_CHANNEL_ERR_REJECTED;
	var OB = Fc.JOIN_CHANNEL_ERR_INVALID_ARGUMENT,
		Tr = Fc.JOIN_CHANNEL_TIMEOUT,
		Ur = Fc.JOIN_CHANNEL_ERR_EXCEED_LIMIT,
		Vr = Fc.JOIN_CHANNEL_ERR_ALREADY_JOINED;
	Fc.JOIN_CHANNEL_ERR_TOO_OFTEN;
	var Wr = Fc.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN,
		Xr = Fc.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID,
		Yr = re.LEAVE_CHANNEL_ERR_FAILURE,
		Zr = re.LEAVE_CHANNEL_ERR_REJECTED,
		PB = re.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL,
		QB = re.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN,
		RB = re.LEAVE_CHANNEL_ERR_KICKED,
		$r = nc.LOGIN_ERR_UNKNOWN,
		Pg = nc.LOGIN_ERR_REJECTED,
		si = nc.LOGIN_ERR_INVALID_ARGUMENT,
		as = nc.LOGIN_ERR_INVALID_APP_ID,
		bs = nc.LOGIN_ERR_INVALID_TOKEN,
		ti = nc.LOGIN_ERR_TOKEN_EXPIRED;
	nc.LOGIN_ERR_NOT_AUTHORIZED;
	var SB = nc.LOGIN_ERR_ALREADY_LOGIN,
		TB = nc.LOGIN_ERR_TIMEOUT,
		UB = nc.LOGIN_ERR_TOO_OFTEN,
		cs = Gl.LOGOUT_ERR_USER_NOT_LOGGED_IN,
		ds = qd.PEER_MESSAGE_ERR_FAILURE,
		Kl = qd.PEER_MESSAGE_ERR_TIMEOUT,
		es = qd.PEER_MESSAGE_ERR_TOO_OFTEN,
		fs = qd.PEER_MESSAGE_ERR_INVALID_USERID,
		bg = qd.PEER_MESSAGE_ERR_INVALID_MESSAGE,
		Ll = qd.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN;
	qd.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE;
	var gs = se.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT;
	se.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED;
	var VB = se.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT;
	se.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN;
	var WB = se.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN,
		Ml = rd.RENEW_TOKEN_ERR_FAILURE,
		XB = rd.RENEW_TOKEN_ERR_INVALID_ARGUMENT;
	rd.RENEW_TOKEN_ERR_REJECTED, rd.RENEW_TOKEN_ERR_TOO_OFTEN;
	var YB = rd.RENEW_TOKEN_ERR_TOKEN_EXPIRED,
		ZB = rd.RENEW_TOKEN_ERR_INVALID_TOKEN,
		hs = rd.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN,
		is = td.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE,
		Qg = td.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT;
	td.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED;
	var $B = td.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT;
	td.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN;
	var js = td.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW,
		Nl = td.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN;
	zf.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE,
		zf.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT,
		zf.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN,
		zf.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN;
	var aC = function (e, t) {
			var n;
			return (
				rl(e, function (e, r, o) {
					return !(n = t(e, r, o));
				}),
				!!n
			);
		},
		ui = function (e, t, n) {
			if (!Gb(n)) return !1;
			var r = qa(t);
			return (
				!!("number" == r
					? ae(n) && gl(t, n.length)
					: "string" == r && t in n) && Gg(n[t], e)
			);
		},
		Ol = function (e, t, n) {
			var r = ub(e) ? ur : aC;
			return n && ui(e, t, n) && (t = void 0), r(e, wf(t));
		},
		bC = function (e, t) {
			var n = -1,
				r = ae(e) ? Array(e.length) : [];
			return (
				rl(e, function (e, o, i) {
					r[++n] = t(e, o, i);
				}),
				r
			);
		},
		cC = function (e, t) {
			var n = e.length;
			for (e.sort(t); n--; ) e[n] = e[n].value;
			return e;
		},
		dC = function (e, t, n) {
			t = t.length
				? Je(t, function (e) {
						return ub(e)
							? function (t) {
									return li(t, 1 === e.length ? e[0] : e);
							  }
							: e;
				  })
				: [mi];
			var r = -1;
			return (
				(t = Je(t, ii(wf))),
				(e = bC(e, function (e, n, o) {
					return {
						criteria: Je(t, function (t) {
							return t(e);
						}),
						index: ++r,
						value: e,
					};
				})),
				cC(e, function (e, t) {
					e: {
						for (
							var r = -1,
								o = e.criteria,
								i = t.criteria,
								s = o.length,
								a = n.length;
							++r < s;

						) {
							t: {
								var c = o[r],
									u = i[r];
								if (c !== u) {
									var l = void 0 !== c,
										f = null === c,
										h = c == c,
										p = Ke(c),
										d = void 0 !== u,
										b = null === u,
										g = u == u,
										v = Ke(u);
									if (
										(!b && !v && !p && c > u) ||
										(p && d && g && !b && !v) ||
										(f && d && g) ||
										(!l && g) ||
										!h
									) {
										c = 1;
										break t;
									}
									if (
										(!f && !p && !v && c < u) ||
										(v && l && h && !f && !p) ||
										(b && l && h) ||
										(!d && h) ||
										!g
									) {
										c = -1;
										break t;
									}
								}
								c = 0;
							}
							if (c) {
								e = r >= a ? c : c * ("desc" == n[r] ? -1 : 1);
								break e;
							}
						}
						e = e.index - t.index;
					}
					return e;
				})
			);
		},
		ks = function (e, t) {
			return sr(rr(e, t, mi), e + "");
		},
		ls = ks(function (e, t) {
			if (null == e) return [];
			var n = t.length;
			return (
				1 < n && ui(e, t[0], t[1])
					? (t = [])
					: 2 < n && ui(t[0], t[1], t[2]) && (t = [t[0]]),
				dC(e, Si(t, 1), [])
			);
		}),
		ms = (function (e) {
			if (e.__esModule) return e;
			var t = Object.defineProperty({}, "__esModule", { value: !0 });
			return (
				Object.keys(e).forEach(function (n) {
					var r = Object.getOwnPropertyDescriptor(e, n);
					Object.defineProperty(
						t,
						n,
						r.get
							? r
							: {
									enumerable: !0,
									get: function () {
										return e[n];
									},
							  }
					);
				}),
				t
			);
		})(iB),
		ns = xb(function (e, t) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			var n = [],
				r = function (e, t) {
					return new WebSocket(e, t);
				};
			(t.normalClosureMessage = "Normal closure"),
				(t.default = function (e, o) {
					var i = (o =
							void 0 === o
								? { protocols: n, makeWebSocket: r }
								: o).protocols,
						s = void 0 === i ? n : i,
						a = void 0 === (o = o.makeWebSocket) ? r : o;
					return new ms.Observable(function (n) {
						var r,
							o = new ms.Subject(),
							i = a(e, s),
							c = !1,
							u = !1,
							l = function (e) {
								if (r)
									throw (
										((c = !0),
										(e = Error(
											"Web socket message factory function called more than once"
										)),
										n.error(e),
										e)
									);
								return (
									(r = e.subscribe(function (e) {
										i.send(e);
									})),
									o
								);
							};
						return (
							(i.onopen = function () {
								u ? ((c = !0), i.close()) : n.next(l);
							}),
							(i.onmessage = function (e) {
								o.next(e.data);
							}),
							(i.onerror = function (e) {
								(c = !0), n.error(Error(e.message));
							}),
							(i.onclose = function (e) {
								c ||
									((c = !0),
									u
										? (n.complete(), o.complete())
										: n.error(
												Error(
													1e3 === e.code
														? t.normalClosureMessage
														: e.reason
												)
										  ));
							}),
							function () {
								(u = !0),
									r && r.unsubscribe(),
									c || ((c = !0), i.close());
							}
						);
					});
				});
		});
	!(function (e) {
		e &&
			e.__esModule &&
			Object.prototype.hasOwnProperty.call(e, "default") &&
			e.default;
	})(ns);
	var ij = function (e, t, n) {
			((void 0 === n || Gg(e[t], n)) && (void 0 !== n || t in e)) ||
				Ig(e, t, n);
		},
		hj = function (e, t) {
			if (
				("constructor" !== t || "function" != typeof e[t]) &&
				"__proto__" != t
			)
				return e[t];
		},
		eC = (function (e) {
			return ks(function (t, n) {
				var r = -1,
					o = n.length,
					i = 1 < o ? n[o - 1] : void 0,
					s = 2 < o ? n[2] : void 0;
				for (
					i =
						3 < e.length && "function" == typeof i
							? (o--, i)
							: void 0,
						s &&
							ui(n[0], n[1], s) &&
							((i = 3 > o ? void 0 : i), (o = 1)),
						t = Object(t);
					++r < o;

				)
					(s = n[r]) && e(t, s, r, i);
				return t;
			});
		})(function (e, t, n, r) {
			zn(e, t, n, r);
		}),
		fC = Math.floor,
		gC = Math.random,
		os = function (e, t) {
			return e + fC(gC() * (t - e + 1));
		},
		ps = function (e) {
			var t = e.length;
			return t ? e[os(0, t - 1)] : void 0;
		},
		hC = function (e, t) {
			return Je(t, function (t) {
				return e[t];
			});
		},
		zj = function (e) {
			return null == e ? [] : hC(e, Wd(e));
		},
		iC = function (e) {
			return ps(zj(e));
		},
		On = function (e) {
			return (ub(e) ? ps : iC)(e);
		},
		Dn = [],
		En = function (e, t) {
			return new WebSocket(e, t);
		},
		jC = Math.floor;
	ea(
		{ target: "Number", stat: !0 },
		{
			isInteger: function (e) {
				return !xa(e) && isFinite(e) && jC(e) === e;
			},
		}
	),
		Sp("from", sk, rk);
	var kC = function (e, t) {
			for (
				var n = Array(arguments.length - 1), r = 0, o = 2, i = !0;
				o < arguments.length;

			)
				n[r++] = arguments[o++];
			return new Promise(function (o, s) {
				n[r] = function (e) {
					if (i)
						if (((i = !1), e)) s(e);
						else {
							for (
								var t = Array(arguments.length - 1), n = 0;
								n < t.length;

							)
								t[n++] = arguments[n];
							o.apply(null, t);
						}
				};
				try {
					e.apply(t || null, n);
				} catch (e) {
					i && ((i = !1), s(e));
				}
			});
		},
		lC = xb(function (e, t) {
			t.length = function (e) {
				var t = e.length;
				if (!t) return 0;
				for (var n = 0; 1 < --t % 4 && "=" === e.charAt(t); ) ++n;
				return Math.ceil(3 * e.length) / 4 - n;
			};
			var n = Array(64),
				r = Array(123);
			for (e = 0; 64 > e; )
				r[
					(n[e] =
						26 > e
							? e + 65
							: 52 > e
							? e + 71
							: 62 > e
							? e - 4
							: (e - 59) | 43)
				] = e++;
			(t.encode = function (e, t, r) {
				for (var o, i = null, s = [], a = 0, c = 0; t < r; ) {
					var u = e[t++];
					switch (c) {
						case 0:
							(s[a++] = n[u >> 2]), (o = (3 & u) << 4), (c = 1);
							break;
						case 1:
							(s[a++] = n[o | (u >> 4)]),
								(o = (15 & u) << 2),
								(c = 2);
							break;
						case 2:
							(s[a++] = n[o | (u >> 6)]),
								(s[a++] = n[63 & u]),
								(c = 0);
					}
					8191 < a &&
						((i || (i = [])).push(
							String.fromCharCode.apply(String, s)
						),
						(a = 0));
				}
				return (
					c &&
						((s[a++] = n[o]),
						(s[a++] = 61),
						1 === c && (s[a++] = 61)),
					i
						? (a &&
								i.push(
									String.fromCharCode.apply(
										String,
										s.slice(0, a)
									)
								),
						  i.join(""))
						: String.fromCharCode.apply(String, s.slice(0, a))
				);
			}),
				(t.decode = function (e, t, n) {
					for (var o, i = n, s = 0, a = 0; a < e.length; ) {
						var c = e.charCodeAt(a++);
						if (61 === c && 1 < s) break;
						if (void 0 === (c = r[c]))
							throw Error("invalid encoding");
						switch (s) {
							case 0:
								(o = c), (s = 1);
								break;
							case 1:
								(t[n++] = (o << 2) | ((48 & c) >> 4)),
									(o = c),
									(s = 2);
								break;
							case 2:
								(t[n++] = ((15 & o) << 4) | ((60 & c) >> 2)),
									(o = c),
									(s = 3);
								break;
							case 3:
								(t[n++] = ((3 & o) << 6) | c), (s = 0);
						}
					}
					if (1 === s) throw Error("invalid encoding");
					return n - i;
				}),
				(t.test = function (e) {
					return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
						e
					);
				});
		});
	(hh.prototype.on = function (e, t, n) {
		return (
			(this._listeners[e] || (this._listeners[e] = [])).push({
				fn: t,
				ctx: n || this,
			}),
			this
		);
	}),
		(hh.prototype.off = function (e, t) {
			if (void 0 === e) this._listeners = {};
			else if (void 0 === t) this._listeners[e] = [];
			else {
				e = this._listeners[e];
				for (var n = 0; n < e.length; )
					e[n].fn === t ? e.splice(n, 1) : ++n;
			}
			return this;
		}),
		(hh.prototype.emit = function (e) {
			var t = this._listeners[e];
			if (t) {
				for (var n = [], r = 1; r < arguments.length; )
					n.push(arguments[r++]);
				for (r = 0; r < t.length; ) t[r].fn.apply(t[r++].ctx, n);
			}
			return this;
		});
	var mC = Fn(Fn),
		nC = function (c) {
			try {
				var b = eval("quire".replace(/^/, "re"))(c);
				if (b && (b.length || Object.keys(b).length)) return b;
			} catch (e) {}
			return null;
		},
		oC = xb(function (e, t) {
			(t.length = function (e) {
				for (var t, n = 0, r = 0; r < e.length; ++r)
					128 > (t = e.charCodeAt(r))
						? (n += 1)
						: 2048 > t
						? (n += 2)
						: 55296 == (64512 & t) &&
						  56320 == (64512 & e.charCodeAt(r + 1))
						? (++r, (n += 4))
						: (n += 3);
				return n;
			}),
				(t.read = function (e, t, n) {
					if (1 > n - t) return "";
					for (var r, o = null, i = [], s = 0; t < n; )
						128 > (r = e[t++])
							? (i[s++] = r)
							: 191 < r && 224 > r
							? (i[s++] = ((31 & r) << 6) | (63 & e[t++]))
							: 239 < r && 365 > r
							? ((r =
									(((7 & r) << 18) |
										((63 & e[t++]) << 12) |
										((63 & e[t++]) << 6) |
										(63 & e[t++])) -
									65536),
							  (i[s++] = 55296 + (r >> 10)),
							  (i[s++] = 56320 + (1023 & r)))
							: (i[s++] =
									((15 & r) << 12) |
									((63 & e[t++]) << 6) |
									(63 & e[t++])),
							8191 < s &&
								((o || (o = [])).push(
									String.fromCharCode.apply(String, i)
								),
								(s = 0));
					return o
						? (s &&
								o.push(
									String.fromCharCode.apply(
										String,
										i.slice(0, s)
									)
								),
						  o.join(""))
						: String.fromCharCode.apply(String, i.slice(0, s));
				}),
				(t.write = function (e, t, n) {
					for (var r, o, i = n, s = 0; s < e.length; ++s)
						128 > (r = e.charCodeAt(s))
							? (t[n++] = r)
							: (2048 > r
									? (t[n++] = (r >> 6) | 192)
									: (55296 == (64512 & r) &&
									  56320 ==
											(64512 & (o = e.charCodeAt(s + 1)))
											? ((r =
													65536 +
													((1023 & r) << 10) +
													(1023 & o)),
											  ++s,
											  (t[n++] = (r >> 18) | 240),
											  (t[n++] = ((r >> 12) & 63) | 128))
											: (t[n++] = (r >> 12) | 224),
									  (t[n++] = ((r >> 6) & 63) | 128)),
							  (t[n++] = (63 & r) | 128));
					return n - i;
				});
		}),
		pC = function (e, t, n) {
			var r = n || 8192,
				o = r >>> 1,
				i = null,
				s = r;
			return function (n) {
				return 1 > n || n > o
					? e(n)
					: (s + n > r && ((i = e(r)), (s = 0)),
					  (n = t.call(i, s, (s += n))),
					  7 & s && (s = 1 + (7 | s)),
					  n);
			};
		},
		te = (vb.zero = new vb(0, 0));
	(te.toNumber = function () {
		return 0;
	}),
		(te.zzEncode = te.zzDecode =
			function () {
				return this;
			}),
		(te.length = function () {
			return 1;
		});
	var qC = (vb.zeroHash = "\0\0\0\0\0\0\0\0");
	(vb.fromNumber = function (e) {
		if (0 === e) return te;
		var t = 0 > e;
		t && (e = -e);
		var n = e >>> 0;
		return (
			(e = ((e - n) / 4294967296) >>> 0),
			t &&
				((e = ~e >>> 0),
				(n = ~n >>> 0),
				4294967295 < ++n && ((n = 0), 4294967295 < ++e && (e = 0))),
			new vb(n, e)
		);
	}),
		(vb.from = function (e) {
			if ("number" == typeof e) return vb.fromNumber(e);
			if (pa.isString(e)) {
				if (!pa.Long) return vb.fromNumber(parseInt(e, 10));
				e = pa.Long.fromString(e);
			}
			return e.low || e.high ? new vb(e.low >>> 0, e.high >>> 0) : te;
		}),
		(vb.prototype.toNumber = function (e) {
			if (!e && this.hi >>> 31) {
				e = (1 + ~this.lo) >>> 0;
				var t = ~this.hi >>> 0;
				return e || (t = (t + 1) >>> 0), -(e + 4294967296 * t);
			}
			return this.lo + 4294967296 * this.hi;
		}),
		(vb.prototype.toLong = function (e) {
			return pa.Long
				? new pa.Long(0 | this.lo, 0 | this.hi, !!e)
				: { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!e };
		});
	var Od = String.prototype.charCodeAt;
	(vb.fromHash = function (e) {
		return e === qC
			? te
			: new vb(
					(Od.call(e, 0) |
						(Od.call(e, 1) << 8) |
						(Od.call(e, 2) << 16) |
						(Od.call(e, 3) << 24)) >>>
						0,
					(Od.call(e, 4) |
						(Od.call(e, 5) << 8) |
						(Od.call(e, 6) << 16) |
						(Od.call(e, 7) << 24)) >>>
						0
			  );
	}),
		(vb.prototype.toHash = function () {
			return String.fromCharCode(
				255 & this.lo,
				(this.lo >>> 8) & 255,
				(this.lo >>> 16) & 255,
				this.lo >>> 24,
				255 & this.hi,
				(this.hi >>> 8) & 255,
				(this.hi >>> 16) & 255,
				this.hi >>> 24
			);
		}),
		(vb.prototype.zzEncode = function () {
			var e = this.hi >> 31;
			return (
				(this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
				(this.lo = ((this.lo << 1) ^ e) >>> 0),
				this
			);
		}),
		(vb.prototype.zzDecode = function () {
			var e = -(1 & this.lo);
			return (
				(this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
				(this.hi = ((this.hi >>> 1) ^ e) >>> 0),
				this
			);
		}),
		(vb.prototype.length = function () {
			var e = this.lo,
				t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
				n = this.hi >>> 24;
			return 0 === n
				? 0 === t
					? 16384 > e
						? 128 > e
							? 1
							: 2
						: 2097152 > e
						? 3
						: 4
					: 16384 > t
					? 128 > t
						? 5
						: 6
					: 2097152 > t
					? 7
					: 8
				: 128 > n
				? 9
				: 10;
		});
	var pa = xb(function (e, t) {
			function n(e, t, n) {
				for (var r = Object.keys(t), o = 0; o < r.length; ++o)
					(void 0 !== e[r[o]] && n) || (e[r[o]] = t[r[o]]);
				return e;
			}
			function r(e) {
				function t(e, r) {
					if (!(this instanceof t)) return new t(e, r);
					Object.defineProperty(this, "message", {
						get: function () {
							return e;
						},
					}),
						Error.captureStackTrace
							? Error.captureStackTrace(this, t)
							: Object.defineProperty(this, "stack", {
									value: Error().stack || "",
							  }),
						r && n(this, r);
				}
				return (
					((t.prototype = Object.create(
						Error.prototype
					)).constructor = t),
					Object.defineProperty(t.prototype, "name", {
						get: function () {
							return e;
						},
					}),
					(t.prototype.toString = function () {
						return this.name + ": " + this.message;
					}),
					t
				);
			}
			(t.asPromise = kC),
				(t.base64 = lC),
				(t.EventEmitter = hh),
				(t.float = mC),
				(t.inquire = nC),
				(t.utf8 = oC),
				(t.pool = pC),
				(t.LongBits = vb),
				(t.isNode = !!(
					void 0 !== Ya &&
					Ya &&
					Ya.process &&
					Ya.process.versions &&
					Ya.process.versions.node
				)),
				(t.global =
					(t.isNode && Ya) ||
					("undefined" != typeof window && window) ||
					("undefined" != typeof self && self) ||
					Ya),
				(t.emptyArray = Object.freeze ? Object.freeze([]) : []),
				(t.emptyObject = Object.freeze ? Object.freeze({}) : {}),
				(t.isInteger =
					Number.isInteger ||
					function (e) {
						return (
							"number" == typeof e &&
							isFinite(e) &&
							Math.floor(e) === e
						);
					}),
				(t.isString = function (e) {
					return "string" == typeof e || e instanceof String;
				}),
				(t.isObject = function (e) {
					return e && "object" === qa(e);
				}),
				(t.isset = t.isSet =
					function (e, t) {
						var n = e[t];
						return (
							!(null == n || !e.hasOwnProperty(t)) &&
							("object" !== qa(n) ||
								0 <
									(Array.isArray(n)
										? n.length
										: Object.keys(n).length))
						);
					}),
				(t.Buffer = (function () {
					try {
						var e = t.inquire("buffer").Buffer;
						return e.prototype.utf8Write ? e : null;
					} catch (e) {
						return null;
					}
				})()),
				(t._Buffer_from = null),
				(t._Buffer_allocUnsafe = null),
				(t.newBuffer = function (e) {
					return "number" == typeof e
						? t.Buffer
							? t._Buffer_allocUnsafe(e)
							: new t.Array(e)
						: t.Buffer
						? t._Buffer_from(e)
						: "undefined" == typeof Uint8Array
						? e
						: new Uint8Array(e);
				}),
				(t.Array =
					"undefined" != typeof Uint8Array ? Uint8Array : Array),
				(t.Long =
					(t.global.dcodeIO && t.global.dcodeIO.Long) ||
					t.global.Long ||
					t.inquire("long")),
				(t.key2Re = /^true|false|0|1$/),
				(t.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
				(t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
				(t.longToHash = function (e) {
					return e
						? t.LongBits.from(e).toHash()
						: t.LongBits.zeroHash;
				}),
				(t.longFromHash = function (e, n) {
					return (
						(e = t.LongBits.fromHash(e)),
						t.Long
							? t.Long.fromBits(e.lo, e.hi, n)
							: e.toNumber(!!n)
					);
				}),
				(t.merge = n),
				(t.lcFirst = function (e) {
					return e.charAt(0).toLowerCase() + e.substring(1);
				}),
				(t.newError = r),
				(t.ProtocolError = r("ProtocolError")),
				(t.oneOfGetter = function (e) {
					for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
					return function () {
						for (
							var e = Object.keys(this), n = e.length - 1;
							-1 < n;
							--n
						)
							if (
								1 === t[e[n]] &&
								void 0 !== this[e[n]] &&
								null !== this[e[n]]
							)
								return e[n];
					};
				}),
				(t.oneOfSetter = function (e) {
					return function (t) {
						for (var n = 0; n < e.length; ++n)
							e[n] !== t && delete this[e[n]];
					};
				}),
				(t.toJSONOptions = {
					longs: String,
					enums: String,
					bytes: String,
					json: !0,
				}),
				(t._configure = function () {
					var e = t.Buffer;
					e
						? ((t._Buffer_from =
								(e.from !== Uint8Array.from && e.from) ||
								function (t, n) {
									return new e(t, n);
								}),
						  (t._Buffer_allocUnsafe =
								e.allocUnsafe ||
								function (t) {
									return new e(t);
								}))
						: (t._Buffer_from = t._Buffer_allocUnsafe = null);
				});
		}),
		qj = Aa,
		Pl,
		vi = pa.LongBits,
		qs = pa.base64,
		rs = pa.utf8,
		ss = function () {
			return pa.Buffer
				? function () {
						return (Aa.create = function () {
							return new Pl();
						})();
				  }
				: function () {
						return new Aa();
				  };
		};
	(Aa.create = ss()),
		(Aa.alloc = function (e) {
			return new pa.Array(e);
		}),
		pa.Array !== Array &&
			(Aa.alloc = pa.pool(Aa.alloc, pa.Array.prototype.subarray)),
		(Aa.prototype._push = function (e, t, n) {
			return (
				(this.tail = this.tail.next = new Wf(e, t, n)),
				(this.len += t),
				this
			);
		}),
		(nj.prototype = Object.create(Wf.prototype)),
		(nj.prototype.fn = function (e, t, n) {
			for (; 127 < e; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
			t[n] = e;
		}),
		(Aa.prototype.uint32 = function (e) {
			return (
				(this.len += (this.tail = this.tail.next =
					new nj(
						128 > (e >>>= 0)
							? 1
							: 16384 > e
							? 2
							: 2097152 > e
							? 3
							: 268435456 > e
							? 4
							: 5,
						e
					)).len),
				this
			);
		}),
		(Aa.prototype.int32 = function (e) {
			return 0 > e
				? this._push(oj, 10, vi.fromNumber(e))
				: this.uint32(e);
		}),
		(Aa.prototype.sint32 = function (e) {
			return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
		}),
		(Aa.prototype.uint64 = function (e) {
			return (e = vi.from(e)), this._push(oj, e.length(), e);
		}),
		(Aa.prototype.int64 = Aa.prototype.uint64),
		(Aa.prototype.sint64 = function (e) {
			return (e = vi.from(e).zzEncode()), this._push(oj, e.length(), e);
		}),
		(Aa.prototype.bool = function (e) {
			return this._push(mj, 1, e ? 1 : 0);
		}),
		(Aa.prototype.fixed32 = function (e) {
			return this._push(pj, 4, e >>> 0);
		}),
		(Aa.prototype.sfixed32 = Aa.prototype.fixed32),
		(Aa.prototype.fixed64 = function (e) {
			return (e = vi.from(e)), this._push(pj, 4, e.lo)._push(pj, 4, e.hi);
		}),
		(Aa.prototype.sfixed64 = Aa.prototype.fixed64),
		(Aa.prototype.float = function (e) {
			return this._push(pa.float.writeFloatLE, 4, e);
		}),
		(Aa.prototype.double = function (e) {
			return this._push(pa.float.writeDoubleLE, 8, e);
		});
	var rC = pa.Array.prototype.set
		? function (e, t, n) {
				t.set(e, n);
		  }
		: function (e, t, n) {
				for (var r = 0; r < e.length; ++r) t[n + r] = e[r];
		  };
	(Aa.prototype.bytes = function (e) {
		var t = e.length >>> 0;
		if (!t) return this._push(mj, 1, 0);
		if (pa.isString(e)) {
			var n = Aa.alloc((t = qs.length(e)));
			qs.decode(e, n, 0), (e = n);
		}
		return this.uint32(t)._push(rC, t, e);
	}),
		(Aa.prototype.string = function (e) {
			var t = rs.length(e);
			return t
				? this.uint32(t)._push(rs.write, t, e)
				: this._push(mj, 1, 0);
		}),
		(Aa.prototype.fork = function () {
			return (
				(this.states = new Cv(this)),
				(this.head = this.tail = new Wf(lj, 0, 0)),
				(this.len = 0),
				this
			);
		}),
		(Aa.prototype.reset = function () {
			return (
				this.states
					? ((this.head = this.states.head),
					  (this.tail = this.states.tail),
					  (this.len = this.states.len),
					  (this.states = this.states.next))
					: ((this.head = this.tail = new Wf(lj, 0, 0)),
					  (this.len = 0)),
				this
			);
		}),
		(Aa.prototype.ldelim = function () {
			var e = this.head,
				t = this.tail,
				n = this.len;
			return (
				this.reset().uint32(n),
				n &&
					((this.tail.next = e.next),
					(this.tail = t),
					(this.len += n)),
				this
			);
		}),
		(Aa.prototype.finish = function () {
			for (
				var e = this.head.next,
					t = this.constructor.alloc(this.len),
					n = 0;
				e;

			)
				e.fn(e.val, t, n), (n += e.len), (e = e.next);
			return t;
		}),
		(Aa._configure = function (e) {
			(Pl = e), (Aa.create = ss()), Pl._configure();
		}),
		((Lc.prototype = Object.create(qj.prototype)).constructor = Lc),
		(Lc._configure = function () {
			(Lc.alloc = pa._Buffer_allocUnsafe),
				(Lc.writeBytesBuffer =
					pa.Buffer &&
					pa.Buffer.prototype instanceof Uint8Array &&
					"set" === pa.Buffer.prototype.set.name
						? function (e, t, n) {
								t.set(e, n);
						  }
						: function (e, t, n) {
								if (e.copy) e.copy(t, n, 0, e.length);
								else
									for (var r = 0; r < e.length; )
										t[n++] = e[r++];
						  });
		}),
		(Lc.prototype.bytes = function (e) {
			pa.isString(e) && (e = pa._Buffer_from(e, "base64"));
			var t = e.length >>> 0;
			return (
				this.uint32(t), t && this._push(Lc.writeBytesBuffer, t, e), this
			);
		}),
		(Lc.prototype.string = function (e) {
			var t = pa.Buffer.byteLength(e);
			return this.uint32(t), t && this._push(Dv, t, e), this;
		}),
		Lc._configure();
	var sj = ib,
		Ql,
		Kn = pa.LongBits,
		sC = pa.utf8,
		ts =
			"undefined" != typeof Uint8Array
				? function (e) {
						if (e instanceof Uint8Array || Array.isArray(e))
							return new ib(e);
						throw Error("illegal buffer");
				  }
				: function (e) {
						if (Array.isArray(e)) return new ib(e);
						throw Error("illegal buffer");
				  },
		us = function () {
			return pa.Buffer
				? function (e) {
						return (ib.create = function (e) {
							return pa.Buffer.isBuffer(e) ? new Ql(e) : ts(e);
						})(e);
				  }
				: ts;
		};
	(ib.create = us()),
		(ib.prototype._slice =
			pa.Array.prototype.subarray || pa.Array.prototype.slice),
		(ib.prototype.uint32 = (function () {
			var e = 4294967295;
			return function () {
				if (
					((e = (127 & this.buf[this.pos]) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
				if (
					((e = (e | ((127 & this.buf[this.pos]) << 7)) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
				if (
					((e = (e | ((127 & this.buf[this.pos]) << 14)) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
				if (
					((e = (e | ((127 & this.buf[this.pos]) << 21)) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
				if (
					((e = (e | ((15 & this.buf[this.pos]) << 28)) >>> 0),
					128 > this.buf[this.pos++])
				)
					return e;
				if ((this.pos += 5) > this.len)
					throw ((this.pos = this.len), wc(this, 10));
				return e;
			};
		})()),
		(ib.prototype.int32 = function () {
			return 0 | this.uint32();
		}),
		(ib.prototype.sint32 = function () {
			var e = this.uint32();
			return ((e >>> 1) ^ -(1 & e)) | 0;
		}),
		(ib.prototype.bool = function () {
			return 0 !== this.uint32();
		}),
		(ib.prototype.fixed32 = function () {
			if (this.pos + 4 > this.len) throw wc(this, 4);
			return ih(this.buf, (this.pos += 4));
		}),
		(ib.prototype.sfixed32 = function () {
			if (this.pos + 4 > this.len) throw wc(this, 4);
			return 0 | ih(this.buf, (this.pos += 4));
		}),
		(ib.prototype.float = function () {
			if (this.pos + 4 > this.len) throw wc(this, 4);
			var e = pa.float.readFloatLE(this.buf, this.pos);
			return (this.pos += 4), e;
		}),
		(ib.prototype.double = function () {
			if (this.pos + 8 > this.len) throw wc(this, 4);
			var e = pa.float.readDoubleLE(this.buf, this.pos);
			return (this.pos += 8), e;
		}),
		(ib.prototype.bytes = function () {
			var e = this.uint32(),
				t = this.pos,
				n = this.pos + e;
			if (n > this.len) throw wc(this, e);
			return (
				(this.pos += e),
				Array.isArray(this.buf)
					? this.buf.slice(t, n)
					: t === n
					? new this.buf.constructor(0)
					: this._slice.call(this.buf, t, n)
			);
		}),
		(ib.prototype.string = function () {
			var e = this.bytes();
			return sC.read(e, 0, e.length);
		}),
		(ib.prototype.skip = function (e) {
			if ("number" == typeof e) {
				if (this.pos + e > this.len) throw wc(this, e);
				this.pos += e;
			} else
				do {
					if (this.pos >= this.len) throw wc(this);
				} while (128 & this.buf[this.pos++]);
			return this;
		}),
		(ib.prototype.skipType = function (e) {
			switch (e) {
				case 0:
					this.skip();
					break;
				case 1:
					this.skip(8);
					break;
				case 2:
					this.skip(this.uint32());
					break;
				case 3:
					for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
					break;
				case 5:
					this.skip(4);
					break;
				default:
					throw Error(
						"invalid wire type " + e + " at offset " + this.pos
					);
			}
			return this;
		}),
		(ib._configure = function (e) {
			(Ql = e), (ib.create = us()), Ql._configure();
			var t = pa.Long ? "toLong" : "toNumber";
			pa.merge(ib.prototype, {
				int64: function () {
					return rj.call(this)[t](!1);
				},
				uint64: function () {
					return rj.call(this)[t](!0);
				},
				sint64: function () {
					return rj.call(this).zzDecode()[t](!1);
				},
				fixed64: function () {
					return Ln.call(this)[t](!0);
				},
				sfixed64: function () {
					return Ln.call(this)[t](!1);
				},
			});
		}),
		((be.prototype = Object.create(sj.prototype)).constructor = be),
		(be._configure = function () {
			pa.Buffer && (be.prototype._slice = pa.Buffer.prototype.slice);
		}),
		(be.prototype.string = function () {
			var e = this.uint32();
			return this.buf.utf8Slice
				? this.buf.utf8Slice(
						this.pos,
						(this.pos = Math.min(this.pos + e, this.len))
				  )
				: this.buf.toString(
						"utf-8",
						this.pos,
						(this.pos = Math.min(this.pos + e, this.len))
				  );
		}),
		be._configure(),
		((Xf.prototype = Object.create(pa.EventEmitter.prototype)).constructor =
			Xf),
		(Xf.prototype.rpcCall = function e(t, n, r, o, i) {
			if (!o) throw TypeError("request must be specified");
			var s = this;
			if (!i) return pa.asPromise(e, s, t, n, r, o);
			if (s.rpcImpl)
				try {
					return s.rpcImpl(
						t,
						n[s.requestDelimited ? "encodeDelimited" : "encode"](
							o
						).finish(),
						function (e, n) {
							if (e) return s.emit("error", e, t), i(e);
							if (null !== n) {
								if (!(n instanceof r))
									try {
										n =
											r[
												s.responseDelimited
													? "decodeDelimited"
													: "decode"
											](n);
									} catch (e) {
										return s.emit("error", e, t), i(e);
									}
								return s.emit("data", n, t), i(null, n);
							}
							s.end(!0);
						}
					);
				} catch (e) {
					s.emit("error", e, t),
						setTimeout(function () {
							i(e);
						}, 0);
				}
			else
				setTimeout(function () {
					i(Error("already ended"));
				}, 0);
		}),
		(Xf.prototype.end = function (e) {
			return (
				this.rpcImpl &&
					(e || this.rpcImpl(null, null, null),
					(this.rpcImpl = null),
					this.emit("end").off()),
				this
			);
		});
	var tC = xb(function (e, t) {
			t.Service = Xf;
		}),
		uC = {},
		Gc = xb(function (e, t) {
			function n() {
				r.util._configure(),
					r.Writer._configure(r.BufferWriter),
					r.Reader._configure(r.BufferReader);
			}
			var r = t;
			(r.build = "minimal"),
				(r.Writer = qj),
				(r.BufferWriter = Lc),
				(r.Reader = sj),
				(r.BufferReader = be),
				(r.util = pa),
				(r.rpc = tC),
				(r.roots = uC),
				(r.configure = n),
				n();
		});
	(Gc.util.Long = P), Gc.configure();
	var M = Gc.Reader,
		ia = Gc.Writer,
		D = Gc.util,
		I = Gc.roots.default || (Gc.roots.default = {}),
		vC = (I.URI = (function () {
			var e = {},
				t = Object.create(e);
			return (
				(t[(e[0] = "Unknown")] = 0),
				(t[(e[1] = "PingUri")] = 1),
				(t[(e[2] = "PongUri")] = 2),
				(t[(e[11] = "UserJoinUri")] = 11),
				(t[(e[12] = "UserRespUri")] = 12),
				(t[(e[15] = "UserTicketNearlyExpireUri")] = 15),
				(t[(e[16] = "UserRenewTokenReqUri")] = 16),
				(t[(e[17] = "UserRenewTokenRespUri")] = 17),
				(t[(e[21] = "UserQuitUri")] = 21),
				(t[(e[22] = "UserDropUri")] = 22),
				(t[(e[31] = "GroupEnterUri")] = 31),
				(t[(e[32] = "GroupLeaveUri")] = 32),
				(t[(e[33] = "GroupReplyUri")] = 33),
				(t[(e[35] = "GroupDropUri")] = 35),
				(t[(e[36] = "GroupEnterNoticeUri")] = 36),
				(t[(e[37] = "GroupLeaveNoticeUri")] = 37),
				(t[(e[38] = "GroupEventNoticeUri")] = 38),
				(t[(e[39] = "GroupCountNoticeUri")] = 39),
				(t[(e[41] = "UserStatusListUri")] = 41),
				(t[(e[42] = "UserStatusResultUri")] = 42),
				(t[(e[51] = "GroupStatusListUri")] = 51),
				(t[(e[52] = "GroupStatusResultUri")] = 52),
				(t[(e[55] = "GroupAllUsersListUri")] = 55),
				(t[(e[56] = "GroupAllUsersResultUri")] = 56),
				(t[(e[100] = "MessageUri")] = 100),
				(t[(e[101] = "AckUri")] = 101),
				(t[(e[201] = "UserJoinNoticeUri")] = 201),
				(t[(e[202] = "UserQuitNoticeUri")] = 202),
				(t[(e[203] = "UserWaitNoticeUri")] = 203),
				(t[(e[301] = "UserAttributeGetUri")] = 301),
				(t[(e[302] = "UserAttributeRetUri")] = 302),
				(t[(e[303] = "UserAttributeSetUri")] = 303),
				(t[(e[304] = "UserAttributeModUri")] = 304),
				(t[(e[305] = "UserAttributeDelUri")] = 305),
				(t[(e[307] = "UserAttributeRspUri")] = 307),
				(t[(e[308] = "UserAttributeErrUri")] = 308),
				(t[(e[311] = "UserAttributeKeysGetUri")] = 311),
				(t[(e[312] = "UserAttributeKeysRetUri")] = 312),
				(t[(e[351] = "GroupAttributeGetUri")] = 351),
				(t[(e[352] = "GroupAttributeRetUri")] = 352),
				(t[(e[353] = "GroupAttributeSetUri")] = 353),
				(t[(e[354] = "GroupAttributeModUri")] = 354),
				(t[(e[355] = "GroupAttributeDelUri")] = 355),
				(t[(e[356] = "GroupAttributeAltUri")] = 356),
				(t[(e[357] = "GroupAttributeRspUri")] = 357),
				(t[(e[358] = "GroupAttributeErrUri")] = 358),
				(t[(e[361] = "GroupAttributeKeysGetUri")] = 361),
				(t[(e[362] = "GroupAttributeKeysRetUri")] = 362),
				(t[(e[401] = "SubscribeUserStatusUri")] = 401),
				(t[(e[402] = "UnsubscribeUserStatusUri")] = 402),
				(t[(e[499] = "SubscribeResponseUri")] = 499),
				t
			);
		})()),
		wi = (I.Wrapper = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.uri = 0),
				(e.prototype.data = D.newBuffer([])),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.uri &&
							Object.hasOwnProperty.call(e, "uri") &&
							t.uint32(8).int32(e.uri),
						null != e.data &&
							Object.hasOwnProperty.call(e, "data") &&
							t.uint32(18).bytes(e.data),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.Wrapper(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.uri = e.int32();
								break;
							case 2:
								n.data = e.bytes();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		wC = (I.Ping = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.ms = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.ms &&
							Object.hasOwnProperty.call(e, "ms") &&
							t.uint32(16).uint64(e.ms),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.Ping(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.ms = e.uint64();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		xC = (I.Pong = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.ms = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.ms &&
							Object.hasOwnProperty.call(e, "ms") &&
							t.uint32(16).uint64(e.ms),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.Pong(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.ms = e.uint64();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		yC = (I.UserJoin = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.opt = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.ticket = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.opt &&
							Object.hasOwnProperty.call(e, "opt") &&
							t.uint32(16).uint64(e.opt),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(24).uint64(e.instance),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(34).string(e.account),
						null != e.ticket &&
							Object.hasOwnProperty.call(e, "ticket") &&
							t.uint32(42).string(e.ticket),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserJoin(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.opt = e.uint64();
								break;
							case 3:
								n.instance = e.uint64();
								break;
							case 4:
								n.account = e.string();
								break;
							case 5:
								n.ticket = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		zC = (I.UserResp = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(24).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserResp(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		AC = (I.UserQuit = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.encode = function (e, t) {
					return t || (t = ia.create()), t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserQuit(); e.pos < t; ) {
						var r = e.uint32();
						e.skipType(7 & r);
					}
					return n;
				}),
				e
			);
		})()),
		BC = (I.UserDrop = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(8).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserDrop(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		CC = (I.UserTicketNearlyExpire = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.expireTs = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.ticket = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.expireTs &&
							Object.hasOwnProperty.call(e, "expireTs") &&
							t.uint32(8).uint64(e.expireTs),
						null != e.ticket &&
							Object.hasOwnProperty.call(e, "ticket") &&
							t.uint32(18).string(e.ticket),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserTicketNearlyExpire(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.expireTs = e.uint64();
								break;
							case 2:
								n.ticket = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		DC = (I.UserRenewTokenReq = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.ticket = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(16).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(26).string(e.account),
						null != e.ticket &&
							Object.hasOwnProperty.call(e, "ticket") &&
							t.uint32(34).string(e.ticket),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserRenewTokenReq(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.seq = e.uint64();
								break;
							case 3:
								n.account = e.string();
								break;
							case 4:
								n.ticket = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		EC = (I.UserRenewTokenResp = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(16).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserRenewTokenResp(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		FC = (I.GroupEnter = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupEnter(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		GC = (I.GroupLeave = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.account = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(10).string(e.account),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupLeave(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.account = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		HC = (I.GroupReply = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(24).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupReply(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		vs = (I.GroupLeaveNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.user = ""),
				(e.prototype.group = ""),
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.size = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.user &&
							Object.hasOwnProperty.call(e, "user") &&
							t.uint32(18).string(e.user),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(26).string(e.group),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(32).uint64(e.instance),
						null != e.size &&
							Object.hasOwnProperty.call(e, "size") &&
							t.uint32(40).uint32(e.size),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupLeaveNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.user = e.string();
								break;
							case 3:
								n.group = e.string();
								break;
							case 4:
								n.instance = e.uint64();
								break;
							case 5:
								n.size = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		ws = (I.GroupEnterNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.user = ""),
				(e.prototype.group = ""),
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.size = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.user &&
							Object.hasOwnProperty.call(e, "user") &&
							t.uint32(18).string(e.user),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(26).string(e.group),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(32).uint64(e.instance),
						null != e.size &&
							Object.hasOwnProperty.call(e, "size") &&
							t.uint32(40).uint32(e.size),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupEnterNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.user = e.string();
								break;
							case 3:
								n.group = e.string();
								break;
							case 4:
								n.instance = e.uint64();
								break;
							case 5:
								n.size = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		xs = (I.Message = (function () {
			function e(e) {
				if (((this.MiscMap = {}), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.dialogue = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.sequence = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.options = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.src = ""),
				(e.prototype.dst = ""),
				(e.prototype.payload = D.newBuffer([])),
				(e.prototype.MiscMap = D.emptyObject),
				(e.prototype.ms = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.dialogue &&
							Object.hasOwnProperty.call(e, "dialogue") &&
							t.uint32(16).uint64(e.dialogue),
						null != e.sequence &&
							Object.hasOwnProperty.call(e, "sequence") &&
							t.uint32(24).uint64(e.sequence),
						null != e.options &&
							Object.hasOwnProperty.call(e, "options") &&
							t.uint32(32).uint64(e.options),
						null != e.src &&
							Object.hasOwnProperty.call(e, "src") &&
							t.uint32(42).string(e.src),
						null != e.dst &&
							Object.hasOwnProperty.call(e, "dst") &&
							t.uint32(50).string(e.dst),
						null != e.payload &&
							Object.hasOwnProperty.call(e, "payload") &&
							t.uint32(58).bytes(e.payload),
						null != e.MiscMap &&
							Object.hasOwnProperty.call(e, "MiscMap"))
					)
						for (
							var n = Object.keys(e.MiscMap), r = 0;
							r < n.length;
							++r
						)
							t.uint32(66)
								.fork()
								.uint32(10)
								.string(n[r])
								.uint32(18)
								.bytes(e.MiscMap[n[r]])
								.ldelim();
					return (
						null != e.ms &&
							Object.hasOwnProperty.call(e, "ms") &&
							t.uint32(72).uint64(e.ms),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n, r, o = new I.Message(); e.pos < t; )
						switch (((n = e.uint32()), n >>> 3)) {
							case 1:
								o.instance = e.uint64();
								break;
							case 2:
								o.dialogue = e.uint64();
								break;
							case 3:
								o.sequence = e.uint64();
								break;
							case 4:
								o.options = e.uint64();
								break;
							case 5:
								o.src = e.string();
								break;
							case 6:
								o.dst = e.string();
								break;
							case 7:
								o.payload = e.bytes();
								break;
							case 8:
								o.MiscMap === D.emptyObject && (o.MiscMap = {});
								var i = e.uint32() + e.pos;
								for (n = "", r = []; e.pos < i; ) {
									var s = e.uint32();
									switch (s >>> 3) {
										case 1:
											n = e.string();
											break;
										case 2:
											r = e.bytes();
											break;
										default:
											e.skipType(7 & s);
									}
								}
								o.MiscMap[n] = r;
								break;
							case 9:
								o.ms = e.uint64();
								break;
							default:
								e.skipType(7 & n);
						}
					return o;
				}),
				e
			);
		})()),
		ys = (I.Ack = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.dialogue = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.sequence = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.dialogue &&
							Object.hasOwnProperty.call(e, "dialogue") &&
							t.uint32(16).uint64(e.dialogue),
						null != e.sequence &&
							Object.hasOwnProperty.call(e, "sequence") &&
							t.uint32(24).uint64(e.sequence),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(32).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.Ack(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.dialogue = e.uint64();
								break;
							case 3:
								n.sequence = e.uint64();
								break;
							case 4:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		IC = (I.GroupDrop = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.account = ""),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(10).string(e.account),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(16).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupDrop(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.account = e.string();
								break;
							case 2:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		JC = (I.GroupAllUsersList = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.pageSize = 0),
				(e.prototype.pageNumber = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.pageSize &&
							Object.hasOwnProperty.call(e, "pageSize") &&
							t.uint32(24).uint32(e.pageSize),
						null != e.pageNumber &&
							Object.hasOwnProperty.call(e, "pageNumber") &&
							t.uint32(32).uint32(e.pageNumber),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAllUsersList(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.pageSize = e.uint32();
								break;
							case 4:
								n.pageNumber = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		KC = (I.GroupAllUsersResult = (function () {
			function e(e) {
				if (((this.memberInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.totalSize = 0),
				(e.prototype.pageSize = 0),
				(e.prototype.pageNumber = 0),
				(e.prototype.memberInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.totalSize &&
							Object.hasOwnProperty.call(e, "totalSize") &&
							t.uint32(24).uint32(e.totalSize),
						null != e.pageSize &&
							Object.hasOwnProperty.call(e, "pageSize") &&
							t.uint32(32).uint32(e.pageSize),
						null != e.pageNumber &&
							Object.hasOwnProperty.call(e, "pageNumber") &&
							t.uint32(40).uint32(e.pageNumber),
						null != e.memberInfos && e.memberInfos.length)
					)
						for (var n = 0; n < e.memberInfos.length; ++n)
							I.GroupAllUsersResult.MemberInfo.encode(
								e.memberInfos[n],
								t.uint32(50).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAllUsersResult(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.totalSize = e.uint32();
								break;
							case 4:
								n.pageSize = e.uint32();
								break;
							case 5:
								n.pageNumber = e.uint32();
								break;
							case 6:
								(n.memberInfos && n.memberInfos.length) ||
									(n.memberInfos = []),
									n.memberInfos.push(
										I.GroupAllUsersResult.MemberInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.MemberInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.account = ""),
						(e.prototype.ts = 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.account &&
									Object.hasOwnProperty.call(e, "account") &&
									t.uint32(10).string(e.account),
								null != e.ts &&
									Object.hasOwnProperty.call(e, "ts") &&
									t.uint32(16).uint32(e.ts),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupAllUsersResult.MemberInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.account = e.string();
										break;
									case 2:
										n.ts = e.uint32();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		LC = (I.UserStatusList = (function () {
			function e(e) {
				if (((this.users = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.users = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.users && e.users.length)
					)
						for (var n = 0; n < e.users.length; ++n)
							t.uint32(18).string(e.users[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserStatusList(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.users && n.users.length) || (n.users = []),
									n.users.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		MC = (I.UserStatusResult = (function () {
			function e(e) {
				if (((this.userInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.userInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.userInfos && e.userInfos.length)
					)
						for (var n = 0; n < e.userInfos.length; ++n)
							I.UserStatusResult.UserStatusInfo.encode(
								e.userInfos[n],
								t.uint32(18).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserStatusResult(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.userInfos && n.userInfos.length) ||
									(n.userInfos = []),
									n.userInfos.push(
										I.UserStatusResult.UserStatusInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.UserStatusInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.account = ""),
						(e.prototype.ts = 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.account &&
									Object.hasOwnProperty.call(e, "account") &&
									t.uint32(10).string(e.account),
								null != e.ts &&
									Object.hasOwnProperty.call(e, "ts") &&
									t.uint32(16).uint32(e.ts),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.UserStatusResult.UserStatusInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.account = e.string();
										break;
									case 2:
										n.ts = e.uint32();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		NC = (I.UserAttributeGet = (function () {
			function e(e) {
				if (((this.attributes = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.attributes = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.attributes && e.attributes.length)
					)
						for (var n = 0; n < e.attributes.length; ++n)
							t.uint32(26).string(e.attributes[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeGet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								(n.attributes && n.attributes.length) ||
									(n.attributes = []),
									n.attributes.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		OC = (I.UserAttributeRet = (function () {
			function e(e) {
				if (((this.attributeInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.attributeInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.attributeInfos && e.attributeInfos.length)
					)
						for (var n = 0; n < e.attributeInfos.length; ++n)
							I.UserAttributeRet.AttributeInfo.encode(
								e.attributeInfos[n],
								t.uint32(18).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeRet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.attributeInfos && n.attributeInfos.length) ||
									(n.attributeInfos = []),
									n.attributeInfos.push(
										I.UserAttributeRet.AttributeInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.UserAttributeRet.AttributeInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		PC = (I.UserAttributeSet = (function () {
			function e(e) {
				if (((this.attributeInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.attributeInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.attributeInfos && e.attributeInfos.length)
					)
						for (var n = 0; n < e.attributeInfos.length; ++n)
							I.UserAttributeSet.AttributeInfo.encode(
								e.attributeInfos[n],
								t.uint32(26).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeSet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								(n.attributeInfos && n.attributeInfos.length) ||
									(n.attributeInfos = []),
									n.attributeInfos.push(
										I.UserAttributeSet.AttributeInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.UserAttributeSet.AttributeInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		QC = (I.UserAttributeMod = (function () {
			function e(e) {
				if (((this.attributeInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.attributeInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.attributeInfos && e.attributeInfos.length)
					)
						for (var n = 0; n < e.attributeInfos.length; ++n)
							I.UserAttributeMod.AttributeInfo.encode(
								e.attributeInfos[n],
								t.uint32(26).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeMod(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								(n.attributeInfos && n.attributeInfos.length) ||
									(n.attributeInfos = []),
									n.attributeInfos.push(
										I.UserAttributeMod.AttributeInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.UserAttributeMod.AttributeInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		RC = (I.UserAttributeDel = (function () {
			function e(e) {
				if (((this.attributes = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.prototype.attributes = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						null != e.attributes && e.attributes.length)
					)
						for (var n = 0; n < e.attributes.length; ++n)
							t.uint32(26).string(e.attributes[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeDel(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							case 3:
								(n.attributes && n.attributes.length) ||
									(n.attributes = []),
									n.attributes.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		SC = (I.UserAttributeErr = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(16).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeErr(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		TC = (I.UserAttributeKeysGet = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.account = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.account &&
							Object.hasOwnProperty.call(e, "account") &&
							t.uint32(18).string(e.account),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeKeysGet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.account = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		UC = (I.UserAttributeKeysRet = (function () {
			function e(e) {
				if (((this.keys = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.keys = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.keys && e.keys.length)
					)
						for (var n = 0; n < e.keys.length; ++n)
							t.uint32(18).string(e.keys[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeKeysRet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.keys && n.keys.length) || (n.keys = []),
									n.keys.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		VC = (I.UserAttributeRsp = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserAttributeRsp(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		WC = (I.GroupStatusList = (function () {
			function e(e) {
				if (((this.groups = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.groups = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.groups && e.groups.length)
					)
						for (var n = 0; n < e.groups.length; ++n)
							t.uint32(18).string(e.groups[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupStatusList(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.groups && n.groups.length) ||
									(n.groups = []),
									n.groups.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		XC = (I.GroupStatusResult = (function () {
			function e(e) {
				if (((this.groupInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.groupInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.groupInfos && e.groupInfos.length)
					)
						for (var n = 0; n < e.groupInfos.length; ++n)
							I.GroupStatusResult.GroupInfo.encode(
								e.groupInfos[n],
								t.uint32(18).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupStatusResult(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.groupInfos && n.groupInfos.length) ||
									(n.groupInfos = []),
									n.groupInfos.push(
										I.GroupStatusResult.GroupInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.GroupInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.group = ""),
						(e.prototype.memberCount = 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.group &&
									Object.hasOwnProperty.call(e, "group") &&
									t.uint32(10).string(e.group),
								null != e.memberCount &&
									Object.hasOwnProperty.call(
										e,
										"memberCount"
									) &&
									t.uint32(16).uint32(e.memberCount),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupStatusResult.GroupInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.group = e.string();
										break;
									case 2:
										n.memberCount = e.uint32();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		YC = (I.GroupCountNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.size = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(16).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(26).string(e.group),
						null != e.size &&
							Object.hasOwnProperty.call(e, "size") &&
							t.uint32(32).uint32(e.size),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupCountNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.seq = e.uint64();
								break;
							case 3:
								n.group = e.string();
								break;
							case 4:
								n.size = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		ZC = (I.GroupAttributeGet = (function () {
			function e(e) {
				if (((this.attributes = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.attributes = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.attributes && e.attributes.length)
					)
						for (var n = 0; n < e.attributes.length; ++n)
							t.uint32(26).string(e.attributes[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeGet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								(n.attributes && n.attributes.length) ||
									(n.attributes = []),
									n.attributes.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		$C = (I.GroupAttributeRet = (function () {
			function e(e) {
				if (((this.attributeMaps = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.attributeMaps = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.attributeMaps && e.attributeMaps.length)
					)
						for (var n = 0; n < e.attributeMaps.length; ++n)
							I.GroupAttributeRet.AttributeMap.encode(
								e.attributeMaps[n],
								t.uint32(18).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeRet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.attributeMaps && n.attributeMaps.length) ||
									(n.attributeMaps = []),
									n.attributeMaps.push(
										I.GroupAttributeRet.AttributeMap.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeMap = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.prototype.origin = ""),
						(e.prototype.ms = D.Long
							? D.Long.fromBits(0, 0, !0)
							: 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								null != e.origin &&
									Object.hasOwnProperty.call(e, "origin") &&
									t.uint32(26).string(e.origin),
								null != e.ms &&
									Object.hasOwnProperty.call(e, "ms") &&
									t.uint32(32).uint64(e.ms),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupAttributeRet.AttributeMap();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									case 3:
										n.origin = e.string();
										break;
									case 4:
										n.ms = e.uint64();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		aD = (I.GroupAttributeSet = (function () {
			function e(e) {
				if (((this.attributeInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.broadcast = !1),
				(e.prototype.attributeInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.broadcast &&
							Object.hasOwnProperty.call(e, "broadcast") &&
							t.uint32(24).bool(e.broadcast),
						null != e.attributeInfos && e.attributeInfos.length)
					)
						for (var n = 0; n < e.attributeInfos.length; ++n)
							I.GroupAttributeSet.AttributeInfo.encode(
								e.attributeInfos[n],
								t.uint32(34).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeSet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.broadcast = e.bool();
								break;
							case 4:
								(n.attributeInfos && n.attributeInfos.length) ||
									(n.attributeInfos = []),
									n.attributeInfos.push(
										I.GroupAttributeSet.AttributeInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupAttributeSet.AttributeInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		bD = (I.GroupAttributeMod = (function () {
			function e(e) {
				if (((this.attributeInfos = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.broadcast = !1),
				(e.prototype.attributeInfos = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.broadcast &&
							Object.hasOwnProperty.call(e, "broadcast") &&
							t.uint32(24).bool(e.broadcast),
						null != e.attributeInfos && e.attributeInfos.length)
					)
						for (var n = 0; n < e.attributeInfos.length; ++n)
							I.GroupAttributeMod.AttributeInfo.encode(
								e.attributeInfos[n],
								t.uint32(34).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeMod(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.broadcast = e.bool();
								break;
							case 4:
								(n.attributeInfos && n.attributeInfos.length) ||
									(n.attributeInfos = []),
									n.attributeInfos.push(
										I.GroupAttributeMod.AttributeInfo.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeInfo = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupAttributeMod.AttributeInfo();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		cD = (I.GroupAttributeDel = (function () {
			function e(e) {
				if (((this.attributes = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.broadcast = !1),
				(e.prototype.attributes = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.broadcast &&
							Object.hasOwnProperty.call(e, "broadcast") &&
							t.uint32(24).bool(e.broadcast),
						null != e.attributes && e.attributes.length)
					)
						for (var n = 0; n < e.attributes.length; ++n)
							t.uint32(34).string(e.attributes[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeDel(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.broadcast = e.bool();
								break;
							case 4:
								(n.attributes && n.attributes.length) ||
									(n.attributes = []),
									n.attributes.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		dD = (I.GroupAttributeAlt = (function () {
			function e(e) {
				if (((this.attributeMaps = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.attributeMaps = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(24).uint64(e.instance),
						null != e.attributeMaps && e.attributeMaps.length)
					)
						for (var n = 0; n < e.attributeMaps.length; ++n)
							I.GroupAttributeAlt.AttributeMap.encode(
								e.attributeMaps[n],
								t.uint32(34).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeAlt(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							case 3:
								n.instance = e.uint64();
								break;
							case 4:
								(n.attributeMaps && n.attributeMaps.length) ||
									(n.attributeMaps = []),
									n.attributeMaps.push(
										I.GroupAttributeAlt.AttributeMap.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.AttributeMap = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.key = ""),
						(e.prototype.value = ""),
						(e.prototype.origin = ""),
						(e.prototype.ms = D.Long
							? D.Long.fromBits(0, 0, !0)
							: 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.key &&
									Object.hasOwnProperty.call(e, "key") &&
									t.uint32(10).string(e.key),
								null != e.value &&
									Object.hasOwnProperty.call(e, "value") &&
									t.uint32(18).string(e.value),
								null != e.origin &&
									Object.hasOwnProperty.call(e, "origin") &&
									t.uint32(26).string(e.origin),
								null != e.ms &&
									Object.hasOwnProperty.call(e, "ms") &&
									t.uint32(32).uint64(e.ms),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n = new I.GroupAttributeAlt.AttributeMap();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.key = e.string();
										break;
									case 2:
										n.value = e.string();
										break;
									case 3:
										n.origin = e.string();
										break;
									case 4:
										n.ms = e.uint64();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		eD = (I.GroupAttributeRsp = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeRsp(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		fD = (I.GroupAttributeErr = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.code = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(16).uint32(e.code),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeErr(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.code = e.uint32();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		gD = (I.GroupAttributeKeysGet = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.group = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.group &&
							Object.hasOwnProperty.call(e, "group") &&
							t.uint32(18).string(e.group),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeKeysGet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								n.group = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		hD = (I.GroupAttributeKeysRet = (function () {
			function e(e) {
				if (((this.keys = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.keys = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.keys && e.keys.length)
					)
						for (var n = 0; n < e.keys.length; ++n)
							t.uint32(18).string(e.keys[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.GroupAttributeKeysRet(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.keys && n.keys.length) || (n.keys = []),
									n.keys.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		iD = (I.SubscribeUserStatus = (function () {
			function e(e) {
				if (((this.users = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.users = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.users && e.users.length)
					)
						for (var n = 0; n < e.users.length; ++n)
							t.uint32(18).string(e.users[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.SubscribeUserStatus(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.users && n.users.length) || (n.users = []),
									n.users.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		jD = (I.UnsubscribeUserStatus = (function () {
			function e(e) {
				if (((this.users = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.users = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.users && e.users.length)
					)
						for (var n = 0; n < e.users.length; ++n)
							t.uint32(18).string(e.users[n]);
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UnsubscribeUserStatus(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.users && n.users.length) || (n.users = []),
									n.users.push(e.string());
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		kD = (I.UserJoinNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.user = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(16).uint64(e.seq),
						null != e.user &&
							Object.hasOwnProperty.call(e, "user") &&
							t.uint32(26).string(e.user),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserJoinNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.seq = e.uint64();
								break;
							case 3:
								n.user = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		lD = (I.UserQuitNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.user = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(16).uint64(e.seq),
						null != e.user &&
							Object.hasOwnProperty.call(e, "user") &&
							t.uint32(26).string(e.user),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserQuitNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.seq = e.uint64();
								break;
							case 3:
								n.user = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		mD = (I.UserWaitNotice = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.instance = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.user = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ia.create()),
						null != e.instance &&
							Object.hasOwnProperty.call(e, "instance") &&
							t.uint32(8).uint64(e.instance),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(16).uint64(e.seq),
						null != e.user &&
							Object.hasOwnProperty.call(e, "user") &&
							t.uint32(26).string(e.user),
						t
					);
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.UserWaitNotice(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.instance = e.uint64();
								break;
							case 2:
								n.seq = e.uint64();
								break;
							case 3:
								n.user = e.string();
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				e
			);
		})()),
		nD = (I.SubscribeResponse = (function () {
			function e(e) {
				if (((this.errors = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.seq = D.Long ? D.Long.fromBits(0, 0, !0) : 0),
				(e.prototype.errors = D.emptyArray),
				(e.encode = function (e, t) {
					if (
						(t || (t = ia.create()),
						null != e.seq &&
							Object.hasOwnProperty.call(e, "seq") &&
							t.uint32(8).uint64(e.seq),
						null != e.errors && e.errors.length)
					)
						for (var n = 0; n < e.errors.length; ++n)
							I.SubscribeResponse.SubscribeErrorsType.encode(
								e.errors[n],
								t.uint32(18).fork()
							).ldelim();
					return t;
				}),
				(e.decode = function (e, t) {
					e instanceof M || (e = M.create(e)),
						(t = void 0 === t ? e.len : e.pos + t);
					for (var n = new I.SubscribeResponse(); e.pos < t; ) {
						var r = e.uint32();
						switch (r >>> 3) {
							case 1:
								n.seq = e.uint64();
								break;
							case 2:
								(n.errors && n.errors.length) ||
									(n.errors = []),
									n.errors.push(
										I.SubscribeResponse.SubscribeErrorsType.decode(
											e,
											e.uint32()
										)
									);
								break;
							default:
								e.skipType(7 & r);
						}
					}
					return n;
				}),
				(e.SubscribeErrorsType = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.account = ""),
						(e.prototype.code = 0),
						(e.encode = function (e, t) {
							return (
								t || (t = ia.create()),
								null != e.account &&
									Object.hasOwnProperty.call(e, "account") &&
									t.uint32(10).string(e.account),
								null != e.code &&
									Object.hasOwnProperty.call(e, "code") &&
									t.uint32(16).uint32(e.code),
								t
							);
						}),
						(e.decode = function (e, t) {
							e instanceof M || (e = M.create(e)),
								(t = void 0 === t ? e.len : e.pos + t);
							for (
								var n =
									new I.SubscribeResponse.SubscribeErrorsType();
								e.pos < t;

							) {
								var r = e.uint32();
								switch (r >>> 3) {
									case 1:
										n.account = e.string();
										break;
									case 2:
										n.code = e.uint32();
										break;
									default:
										e.skipType(7 & r);
								}
							}
							return n;
						}),
						e
					);
				})()),
				e
			);
		})()),
		oD = Object.freeze({
			__proto__: null,
			URI: vC,
			Wrapper: wi,
			Ping: wC,
			Pong: xC,
			UserJoin: yC,
			UserResp: zC,
			UserQuit: AC,
			UserDrop: BC,
			UserTicketNearlyExpire: CC,
			UserRenewTokenReq: DC,
			UserRenewTokenResp: EC,
			GroupEnter: FC,
			GroupLeave: GC,
			GroupReply: HC,
			GroupLeaveNotice: vs,
			GroupEnterNotice: ws,
			Message: xs,
			Ack: ys,
			GroupDrop: IC,
			GroupAllUsersList: JC,
			GroupAllUsersResult: KC,
			UserStatusList: LC,
			UserStatusResult: MC,
			UserAttributeGet: NC,
			UserAttributeRet: OC,
			UserAttributeSet: PC,
			UserAttributeMod: QC,
			UserAttributeDel: RC,
			UserAttributeErr: SC,
			UserAttributeKeysGet: TC,
			UserAttributeKeysRet: UC,
			UserAttributeRsp: VC,
			GroupStatusList: WC,
			GroupStatusResult: XC,
			GroupCountNotice: YC,
			GroupAttributeGet: ZC,
			GroupAttributeRet: $C,
			GroupAttributeSet: aD,
			GroupAttributeMod: bD,
			GroupAttributeDel: cD,
			GroupAttributeAlt: dD,
			GroupAttributeRsp: eD,
			GroupAttributeErr: fD,
			GroupAttributeKeysGet: gD,
			GroupAttributeKeysRet: hD,
			SubscribeUserStatus: iD,
			UnsubscribeUserStatus: jD,
			UserJoinNotice: kD,
			UserQuitNotice: lD,
			UserWaitNotice: mD,
			SubscribeResponse: nD,
			default: I,
		}),
		pD = Math.ceil,
		zs = function (e) {
			return function (t, n, r) {
				var o = (t = String(Eb(t))).length;
				return (
					(r = void 0 === r ? " " : String(r)),
					(n = Ma(n)) <= o || "" == r
						? t
						: ((n -= o),
						  (o = Yo.call(r, pD(n / r.length))).length > n &&
								(o = o.slice(0, n)),
						  e ? t + o : o + t)
				);
			};
		},
		qD = zs(!1),
		rD = zs(!0),
		As =
			/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
				df
			);
	ea(
		{ target: "String", proto: !0, forced: As },
		{
			padEnd: function (e) {
				return rD(
					this,
					e,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var sD = eg,
		Bs = function (e) {
			return function (t) {
				t = Mb(t);
				for (var n, r = ed(t), o = r.length, i = 0, s = []; o > i; )
					(n = r[i++]),
						(wa && !sD.call(t, n)) || s.push(e ? [n, t[n]] : t[n]);
				return s;
			};
		},
		tD = Bs(!0),
		uD = Bs(!1);
	ea(
		{ target: "Object", stat: !0 },
		{
			entries: function (e) {
				return tD(e);
			},
		}
	);
	var vD = dc.f,
		Cs = "".endsWith,
		wD = Math.min,
		Ds = Qk("endsWith"),
		xD =
			!Ds &&
			!!(function () {
				var e = vD(String.prototype, "endsWith");
				return e && !e.writable;
			})();
	ea(
		{ target: "String", proto: !0, forced: !xD && !Ds },
		{
			endsWith: function (e) {
				var t = String(Eb(this));
				Pk(e);
				var n = 1 < arguments.length ? arguments[1] : void 0,
					r = Ma(t.length);
				return (
					(n = void 0 === n ? r : wD(Ma(n), r)),
					(r = String(e)),
					Cs ? Cs.call(t, r, n) : t.slice(n - r.length, n) === r
				);
			},
		}
	),
		Bh("match", 1, function (e, t, n) {
			return [
				function (t) {
					var n = Eb(this),
						r = null == t ? void 0 : t[e];
					return void 0 !== r
						? r.call(t, n)
						: new RegExp(t)[e](String(n));
				},
				function (e) {
					var r = n(t, e, this);
					if (r.done) return r.value;
					if (((e = Ia(e)), (r = String(this)), !e.global))
						return ef(e, r);
					var o = e.unicode;
					e.lastIndex = 0;
					for (var i, s = [], a = 0; null !== (i = ef(e, r)); )
						(i = String(i[0])),
							(s[a] = i),
							"" === i &&
								(e.lastIndex = Mj(r, Ma(e.lastIndex), o)),
							a++;
					return 0 === a ? null : s;
				},
			];
		});
	var yD = dc.f,
		Es = "".startsWith,
		zD = Math.min,
		Fs = Qk("startsWith"),
		AD =
			!Fs &&
			!!(function () {
				var e = yD(String.prototype, "startsWith");
				return e && !e.writable;
			})();
	ea(
		{ target: "String", proto: !0, forced: !AD && !Fs },
		{
			startsWith: function (e) {
				var t = String(Eb(this));
				Pk(e);
				var n = Ma(
						zD(
							1 < arguments.length ? arguments[1] : void 0,
							t.length
						)
					),
					r = String(e);
				return Es ? Es.call(t, r, n) : t.slice(n, n + r.length) === r;
			},
		}
	);
	var Wn = function (e) {
			var t = /(%?)(%([jds]))/g,
				n = Array.prototype.slice.call(arguments, 1);
			return (
				n.length &&
					(e = e.replace(t, function (e, t, r, o) {
						switch (((r = n.shift()), o)) {
							case "s":
								r = "" + r;
								break;
							case "d":
								r = Number(r);
								break;
							case "j":
								r = JSON.stringify(r);
						}
						return t ? (n.unshift(r), e) : r;
					})),
				n.length && (e += " " + n.join(" ")),
				"" + (e = e.replace(/%{2,2}/g, "%"))
			);
		},
		BD = /\s/,
		CD = /^\s+/,
		Gs = NaN,
		DD = /^[-+]0x[0-9a-f]+$/i,
		ED = /^0b[01]+$/i,
		FD = /^0o[0-7]+$/i,
		GD = parseInt,
		xi = function (e) {
			if ("number" == typeof e) return e;
			if (Ke(e)) return Gs;
			if (
				(Gb(e) &&
					((e = "function" == typeof e.valueOf ? e.valueOf() : e),
					(e = Gb(e) ? e + "" : e)),
				"string" != typeof e)
			)
				return 0 === e ? e : +e;
			if (e) {
				for (
					var t = e.slice, n = e.length;
					n-- && BD.test(e.charAt(n));

				);
				e = t.call(e, 0, n + 1).replace(CD, "");
			}
			return (t = ED.test(e)) || FD.test(e)
				? GD(e.slice(2), t ? 2 : 8)
				: DD.test(e)
				? Gs
				: +e;
		},
		HD = Math.max,
		ID = Math.min,
		JD = function (e, t, n) {
			function r(t) {
				var n = c,
					r = u;
				return (c = u = void 0), (p = t), (l = e.apply(r, n));
			}
			function o(e) {
				var n = e - h;
				return (
					(e -= p), void 0 === h || n >= t || 0 > n || (b && e >= v)
				);
			}
			function i() {
				var e = $b.Date.now();
				if (o(e)) return s(e);
				var n = setTimeout,
					r = e - p;
				(e = t - (e - h)), (r = b ? ID(e, v - r) : e), (f = n(i, r));
			}
			function s(e) {
				return (f = void 0), g && c ? r(e) : ((c = u = void 0), l);
			}
			function a() {
				var e = $b.Date.now(),
					n = o(e);
				if (((c = arguments), (u = this), (h = e), n)) {
					if (void 0 === f)
						return (
							(p = e = h), (f = setTimeout(i, t)), d ? r(e) : l
						);
					if (b) return clearTimeout(f), (f = setTimeout(i, t)), r(h);
				}
				return void 0 === f && (f = setTimeout(i, t)), l;
			}
			var c,
				u,
				l,
				f,
				h,
				p = 0,
				d = !1,
				b = !1,
				g = !0;
			if ("function" != typeof e)
				throw new TypeError("Expected a function");
			if (((t = xi(t) || 0), Gb(n))) {
				d = !!n.leading;
				var v = (b = "maxWait" in n) ? HD(xi(n.maxWait) || 0, t) : v;
				g = "trailing" in n ? !!n.trailing : g;
			}
			return (
				(a.cancel = function () {
					void 0 !== f && clearTimeout(f),
						(p = 0),
						(c = h = u = f = void 0);
				}),
				(a.flush = function () {
					return void 0 === f ? l : s($b.Date.now());
				}),
				a
			);
		},
		KD = Math.max,
		LD = Math.min,
		Hs = 1 / 0,
		Rl = function (e) {
			return e
				? (e = xi(e)) === Hs || e === -Hs
					? 17976931348623157e292 * (0 > e ? -1 : 1)
					: e == e
					? e
					: 0
				: 0 === e
				? e
				: 0;
		},
		Is = function (e, t, n) {
			return (
				(t = Rl(t)),
				void 0 === n ? ((n = t), (t = 0)) : (n = Rl(n)),
				(e = xi(e)) >= LD(t, n) && e < KD(t, n)
			);
		},
		ac = Gc.Writer,
		H = Gc.util,
		Pb = Gc.roots.default || (Gc.roots.default = {}),
		MD = (Pb.Session = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.appId = ""),
				(e.prototype.ver = ""),
				(e.prototype.buildno = 0),
				(e.prototype.installId = ""),
				(e.prototype.os = 0),
				(e.prototype.did = ""),
				(e.prototype.index = null),
				(e.prototype.token = ""),
				(e.prototype.version = 0),
				(e.prototype.subVersion = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.appId &&
							Object.hasOwnProperty.call(e, "appId") &&
							t.uint32(42).string(e.appId),
						null != e.ver &&
							Object.hasOwnProperty.call(e, "ver") &&
							t.uint32(50).string(e.ver),
						null != e.buildno &&
							Object.hasOwnProperty.call(e, "buildno") &&
							t.uint32(56).int32(e.buildno),
						null != e.installId &&
							Object.hasOwnProperty.call(e, "installId") &&
							t.uint32(66).string(e.installId),
						null != e.os &&
							Object.hasOwnProperty.call(e, "os") &&
							t.uint32(128).int32(e.os),
						null != e.did &&
							Object.hasOwnProperty.call(e, "did") &&
							t.uint32(138).string(e.did),
						null != e.index &&
							Object.hasOwnProperty.call(e, "index") &&
							Pb.Session.CommonIndex.encode(
								e.index,
								t.uint32(162).fork()
							).ldelim(),
						null != e.token &&
							Object.hasOwnProperty.call(e, "token") &&
							t.uint32(170).string(e.token),
						null != e.version &&
							Object.hasOwnProperty.call(e, "version") &&
							t.uint32(176).int32(e.version),
						null != e.subVersion &&
							Object.hasOwnProperty.call(e, "subVersion") &&
							t.uint32(184).int32(e.subVersion),
						t
					);
				}),
				(e.CommonIndex = (function () {
					function e(e) {
						if (e)
							for (
								var t = Object.keys(e), n = 0;
								n < t.length;
								++n
							)
								null != e[t[n]] && (this[t[n]] = e[t[n]]);
					}
					return (
						(e.prototype.index1 = ""),
						(e.prototype.index2 = ""),
						(e.prototype.index3 = ""),
						(e.encode = function (e, t) {
							return (
								t || (t = ac.create()),
								null != e.index1 &&
									Object.hasOwnProperty.call(e, "index1") &&
									t.uint32(10).string(e.index1),
								null != e.index2 &&
									Object.hasOwnProperty.call(e, "index2") &&
									t.uint32(18).string(e.index2),
								null != e.index3 &&
									Object.hasOwnProperty.call(e, "index3") &&
									t.uint32(26).string(e.index3),
								t
							);
						}),
						e
					);
				})()),
				e
			);
		})()),
		ND = (Pb.ApEvent = (function () {
			function e(e) {
				if (((this.linkServerList = []), e))
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.apAddr = ""),
				(e.prototype.linkServerList = H.emptyArray),
				(e.prototype.errCode = 0),
				(e.prototype.serverErrCode = 0),
				(e.prototype.isp = ""),
				(e.prototype.opId = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.envId = 0),
				(e.prototype.flag = 0),
				(e.prototype.area = ""),
				(e.encode = function (e, t) {
					if (
						(t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.apAddr &&
							Object.hasOwnProperty.call(e, "apAddr") &&
							t.uint32(50).string(e.apAddr),
						null != e.linkServerList && e.linkServerList.length)
					)
						for (var n = 0; n < e.linkServerList.length; ++n)
							t.uint32(58).string(e.linkServerList[n]);
					return (
						null != e.errCode &&
							Object.hasOwnProperty.call(e, "errCode") &&
							t.uint32(72).int32(e.errCode),
						null != e.serverErrCode &&
							Object.hasOwnProperty.call(e, "serverErrCode") &&
							t.uint32(80).int32(e.serverErrCode),
						null != e.isp &&
							Object.hasOwnProperty.call(e, "isp") &&
							t.uint32(90).string(e.isp),
						null != e.opId &&
							Object.hasOwnProperty.call(e, "opId") &&
							t.uint32(96).int64(e.opId),
						null != e.envId &&
							Object.hasOwnProperty.call(e, "envId") &&
							t.uint32(104).int32(e.envId),
						null != e.flag &&
							Object.hasOwnProperty.call(e, "flag") &&
							t.uint32(112).int32(e.flag),
						null != e.area &&
							Object.hasOwnProperty.call(e, "area") &&
							t.uint32(122).string(e.area),
						t
					);
				}),
				e
			);
		})()),
		OD = (Pb.ApRequest = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.apAddr = ""),
				(e.prototype.opId = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.envId = 0),
				(e.prototype.flag = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.apAddr &&
							Object.hasOwnProperty.call(e, "apAddr") &&
							t.uint32(42).string(e.apAddr),
						null != e.opId &&
							Object.hasOwnProperty.call(e, "opId") &&
							t.uint32(48).int64(e.opId),
						null != e.envId &&
							Object.hasOwnProperty.call(e, "envId") &&
							t.uint32(56).int32(e.envId),
						null != e.flag &&
							Object.hasOwnProperty.call(e, "flag") &&
							t.uint32(64).int32(e.flag),
						t
					);
				}),
				e
			);
		})()),
		PD = (Pb.LinkLoginRequest = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.destServerIp = ""),
				(e.prototype.linkId = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.destServerIp &&
							Object.hasOwnProperty.call(e, "destServerIp") &&
							t.uint32(42).string(e.destServerIp),
						null != e.linkId &&
							Object.hasOwnProperty.call(e, "linkId") &&
							t.uint32(48).int32(e.linkId),
						t
					);
				}),
				e
			);
		})()),
		QD = (Pb.Link = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.ec = 0),
				(e.prototype.sc = 0),
				(e.prototype.destServerIp = ""),
				(e.prototype.ackedServerIp = ""),
				(e.prototype.responseTime = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.ec &&
							Object.hasOwnProperty.call(e, "ec") &&
							t.uint32(40).int32(e.ec),
						null != e.sc &&
							Object.hasOwnProperty.call(e, "sc") &&
							t.uint32(48).int32(e.sc),
						null != e.destServerIp &&
							Object.hasOwnProperty.call(e, "destServerIp") &&
							t.uint32(58).string(e.destServerIp),
						null != e.ackedServerIp &&
							Object.hasOwnProperty.call(e, "ackedServerIp") &&
							t.uint32(66).string(e.ackedServerIp),
						null != e.responseTime &&
							Object.hasOwnProperty.call(e, "responseTime") &&
							t.uint32(72).int32(e.responseTime),
						t
					);
				}),
				e
			);
		})()),
		RD = (Pb.Logout = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						t
					);
				}),
				e
			);
		})()),
		SD = (Pb.KickedOff = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.linkId = 0),
				(e.prototype.code = 0),
				(e.prototype.server = ""),
				(e.prototype.serverCode = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.linkId &&
							Object.hasOwnProperty.call(e, "linkId") &&
							t.uint32(48).int32(e.linkId),
						null != e.code &&
							Object.hasOwnProperty.call(e, "code") &&
							t.uint32(56).int32(e.code),
						null != e.server &&
							Object.hasOwnProperty.call(e, "server") &&
							t.uint32(66).string(e.server),
						null != e.serverCode &&
							Object.hasOwnProperty.call(e, "serverCode") &&
							t.uint32(72).int32(e.serverCode),
						t
					);
				}),
				e
			);
		})()),
		TD = (Pb.ChnJoin = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.cname = ""),
				(e.prototype.errCode = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.cname &&
							Object.hasOwnProperty.call(e, "cname") &&
							t.uint32(50).string(e.cname),
						null != e.errCode &&
							Object.hasOwnProperty.call(e, "errCode") &&
							t.uint32(56).int32(e.errCode),
						t
					);
				}),
				e
			);
		})()),
		UD = (Pb.ChnJoinRes = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.cname = ""),
				(e.prototype.errCode = 0),
				(e.prototype.serverErrCode = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.cname &&
							Object.hasOwnProperty.call(e, "cname") &&
							t.uint32(50).string(e.cname),
						null != e.errCode &&
							Object.hasOwnProperty.call(e, "errCode") &&
							t.uint32(56).int32(e.errCode),
						null != e.serverErrCode &&
							Object.hasOwnProperty.call(e, "serverErrCode") &&
							t.uint32(64).int32(e.serverErrCode),
						t
					);
				}),
				e
			);
		})()),
		VD = (Pb.ChnLeave = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.cname = ""),
				(e.prototype.errCode = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.cname &&
							Object.hasOwnProperty.call(e, "cname") &&
							t.uint32(50).string(e.cname),
						null != e.errCode &&
							Object.hasOwnProperty.call(e, "errCode") &&
							t.uint32(56).int32(e.errCode),
						t
					);
				}),
				e
			);
		})()),
		WD = (Pb.ConnectionStateChange = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.sid = ""),
				(e.prototype.userId = ""),
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.elapse = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.oldState = 0),
				(e.prototype.newState = 0),
				(e.prototype.reason = 0),
				(e.prototype.reconnId = 0),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(10).string(e.sid),
						null != e.userId &&
							Object.hasOwnProperty.call(e, "userId") &&
							t.uint32(18).string(e.userId),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(24).int64(e.lts),
						null != e.elapse &&
							Object.hasOwnProperty.call(e, "elapse") &&
							t.uint32(32).int64(e.elapse),
						null != e.oldState &&
							Object.hasOwnProperty.call(e, "oldState") &&
							t.uint32(40).int32(e.oldState),
						null != e.newState &&
							Object.hasOwnProperty.call(e, "newState") &&
							t.uint32(48).int32(e.newState),
						null != e.reason &&
							Object.hasOwnProperty.call(e, "reason") &&
							t.uint32(56).int32(e.reason),
						null != e.reconnId &&
							Object.hasOwnProperty.call(e, "reconnId") &&
							t.uint32(64).int32(e.reconnId),
						t
					);
				}),
				e
			);
		})()),
		Js = (Pb.RtmSdkMessageCount = (function () {
			function e(e) {
				if (e)
					for (var t = Object.keys(e), n = 0; n < t.length; ++n)
						null != e[t[n]] && (this[t[n]] = e[t[n]]);
			}
			return (
				(e.prototype.lts = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.vid = H.Long ? H.Long.fromBits(0, 0, !1) : 0),
				(e.prototype.sid = ""),
				(e.prototype.messagecategory = 0),
				(e.prototype.reportsequence = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.sentcount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.receivedcount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack10mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack25mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack50mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack75mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack100mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack150mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack200mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack250mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack300mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack400mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack500mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack600mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack800mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack1000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack2000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack3000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack5000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerack7000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.peerackslowcount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack10mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack25mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack50mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack75mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack100mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack150mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack200mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack250mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack300mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack400mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack500mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack600mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack800mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack1000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack2000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack3000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack5000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientack7000mscount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.norecipientackslowcount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.acktimeoutcount = H.Long
					? H.Long.fromBits(0, 0, !1)
					: 0),
				(e.prototype.apimajorversion = 0),
				(e.prototype.apiminorversion = 0),
				(e.prototype.os = 0),
				(e.prototype.toooftencount = 0),
				(e.prototype.receiverofflinecount = 0),
				(e.prototype.invalidmessagecount = 0),
				(e.prototype.unknowerrorcount = 0),
				(e.prototype.servercachedcount = 0),
				(e.prototype.timeoutcount = 0),
				(e.prototype.successcount = 0),
				(e.prototype.userid = ""),
				(e.encode = function (e, t) {
					return (
						t || (t = ac.create()),
						null != e.lts &&
							Object.hasOwnProperty.call(e, "lts") &&
							t.uint32(8).int64(e.lts),
						null != e.vid &&
							Object.hasOwnProperty.call(e, "vid") &&
							t.uint32(16).int64(e.vid),
						null != e.sid &&
							Object.hasOwnProperty.call(e, "sid") &&
							t.uint32(26).string(e.sid),
						null != e.messagecategory &&
							Object.hasOwnProperty.call(e, "messagecategory") &&
							t.uint32(32).int32(e.messagecategory),
						null != e.reportsequence &&
							Object.hasOwnProperty.call(e, "reportsequence") &&
							t.uint32(40).int64(e.reportsequence),
						null != e.sentcount &&
							Object.hasOwnProperty.call(e, "sentcount") &&
							t.uint32(48).int64(e.sentcount),
						null != e.receivedcount &&
							Object.hasOwnProperty.call(e, "receivedcount") &&
							t.uint32(56).int64(e.receivedcount),
						null != e.peerack10mscount &&
							Object.hasOwnProperty.call(e, "peerack10mscount") &&
							t.uint32(64).int64(e.peerack10mscount),
						null != e.peerack25mscount &&
							Object.hasOwnProperty.call(e, "peerack25mscount") &&
							t.uint32(72).int64(e.peerack25mscount),
						null != e.peerack50mscount &&
							Object.hasOwnProperty.call(e, "peerack50mscount") &&
							t.uint32(80).int64(e.peerack50mscount),
						null != e.peerack75mscount &&
							Object.hasOwnProperty.call(e, "peerack75mscount") &&
							t.uint32(88).int64(e.peerack75mscount),
						null != e.peerack100mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack100mscount"
							) &&
							t.uint32(96).int64(e.peerack100mscount),
						null != e.peerack150mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack150mscount"
							) &&
							t.uint32(104).int64(e.peerack150mscount),
						null != e.peerack200mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack200mscount"
							) &&
							t.uint32(112).int64(e.peerack200mscount),
						null != e.peerack250mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack250mscount"
							) &&
							t.uint32(120).int64(e.peerack250mscount),
						null != e.peerack300mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack300mscount"
							) &&
							t.uint32(128).int64(e.peerack300mscount),
						null != e.peerack400mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack400mscount"
							) &&
							t.uint32(136).int64(e.peerack400mscount),
						null != e.peerack500mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack500mscount"
							) &&
							t.uint32(144).int64(e.peerack500mscount),
						null != e.peerack600mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack600mscount"
							) &&
							t.uint32(152).int64(e.peerack600mscount),
						null != e.peerack800mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack800mscount"
							) &&
							t.uint32(160).int64(e.peerack800mscount),
						null != e.peerack1000mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack1000mscount"
							) &&
							t.uint32(168).int64(e.peerack1000mscount),
						null != e.peerack2000mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack2000mscount"
							) &&
							t.uint32(176).int64(e.peerack2000mscount),
						null != e.peerack3000mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack3000mscount"
							) &&
							t.uint32(184).int64(e.peerack3000mscount),
						null != e.peerack5000mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack5000mscount"
							) &&
							t.uint32(192).int64(e.peerack5000mscount),
						null != e.peerack7000mscount &&
							Object.hasOwnProperty.call(
								e,
								"peerack7000mscount"
							) &&
							t.uint32(200).int64(e.peerack7000mscount),
						null != e.peerackslowcount &&
							Object.hasOwnProperty.call(e, "peerackslowcount") &&
							t.uint32(208).int64(e.peerackslowcount),
						null != e.norecipientack10mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack10mscount"
							) &&
							t.uint32(216).int64(e.norecipientack10mscount),
						null != e.norecipientack25mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack25mscount"
							) &&
							t.uint32(224).int64(e.norecipientack25mscount),
						null != e.norecipientack50mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack50mscount"
							) &&
							t.uint32(232).int64(e.norecipientack50mscount),
						null != e.norecipientack75mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack75mscount"
							) &&
							t.uint32(240).int64(e.norecipientack75mscount),
						null != e.norecipientack100mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack100mscount"
							) &&
							t.uint32(248).int64(e.norecipientack100mscount),
						null != e.norecipientack150mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack150mscount"
							) &&
							t.uint32(256).int64(e.norecipientack150mscount),
						null != e.norecipientack200mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack200mscount"
							) &&
							t.uint32(264).int64(e.norecipientack200mscount),
						null != e.norecipientack250mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack250mscount"
							) &&
							t.uint32(272).int64(e.norecipientack250mscount),
						null != e.norecipientack300mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack300mscount"
							) &&
							t.uint32(280).int64(e.norecipientack300mscount),
						null != e.norecipientack400mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack400mscount"
							) &&
							t.uint32(288).int64(e.norecipientack400mscount),
						null != e.norecipientack500mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack500mscount"
							) &&
							t.uint32(296).int64(e.norecipientack500mscount),
						null != e.norecipientack600mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack600mscount"
							) &&
							t.uint32(304).int64(e.norecipientack600mscount),
						null != e.norecipientack800mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack800mscount"
							) &&
							t.uint32(312).int64(e.norecipientack800mscount),
						null != e.norecipientack1000mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack1000mscount"
							) &&
							t.uint32(320).int64(e.norecipientack1000mscount),
						null != e.norecipientack2000mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack2000mscount"
							) &&
							t.uint32(328).int64(e.norecipientack2000mscount),
						null != e.norecipientack3000mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack3000mscount"
							) &&
							t.uint32(336).int64(e.norecipientack3000mscount),
						null != e.norecipientack5000mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack5000mscount"
							) &&
							t.uint32(344).int64(e.norecipientack5000mscount),
						null != e.norecipientack7000mscount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientack7000mscount"
							) &&
							t.uint32(352).int64(e.norecipientack7000mscount),
						null != e.norecipientackslowcount &&
							Object.hasOwnProperty.call(
								e,
								"norecipientackslowcount"
							) &&
							t.uint32(360).int64(e.norecipientackslowcount),
						null != e.acktimeoutcount &&
							Object.hasOwnProperty.call(e, "acktimeoutcount") &&
							t.uint32(368).int64(e.acktimeoutcount),
						null != e.apimajorversion &&
							Object.hasOwnProperty.call(e, "apimajorversion") &&
							t.uint32(376).int32(e.apimajorversion),
						null != e.apiminorversion &&
							Object.hasOwnProperty.call(e, "apiminorversion") &&
							t.uint32(384).int32(e.apiminorversion),
						null != e.os &&
							Object.hasOwnProperty.call(e, "os") &&
							t.uint32(392).int32(e.os),
						null != e.toooftencount &&
							Object.hasOwnProperty.call(e, "toooftencount") &&
							t.uint32(400).int32(e.toooftencount),
						null != e.receiverofflinecount &&
							Object.hasOwnProperty.call(
								e,
								"receiverofflinecount"
							) &&
							t.uint32(408).int32(e.receiverofflinecount),
						null != e.invalidmessagecount &&
							Object.hasOwnProperty.call(
								e,
								"invalidmessagecount"
							) &&
							t.uint32(416).int32(e.invalidmessagecount),
						null != e.unknowerrorcount &&
							Object.hasOwnProperty.call(e, "unknowerrorcount") &&
							t.uint32(424).int32(e.unknowerrorcount),
						null != e.servercachedcount &&
							Object.hasOwnProperty.call(
								e,
								"servercachedcount"
							) &&
							t.uint32(432).int32(e.servercachedcount),
						null != e.timeoutcount &&
							Object.hasOwnProperty.call(e, "timeoutcount") &&
							t.uint32(440).int32(e.timeoutcount),
						null != e.successcount &&
							Object.hasOwnProperty.call(e, "successcount") &&
							t.uint32(448).int32(e.successcount),
						null != e.userid &&
							Object.hasOwnProperty.call(e, "userid") &&
							t.uint32(458).string(e.userid),
						t
					);
				}),
				e
			);
		})()),
		Iv = Object.freeze({
			__proto__: null,
			Session: MD,
			ApEvent: ND,
			ApRequest: OD,
			LinkLoginRequest: PD,
			Link: QD,
			Logout: RD,
			KickedOff: SD,
			ChnJoin: TD,
			ChnJoinRes: UD,
			ChnLeave: VD,
			ConnectionStateChange: WD,
			RtmSdkMessageCount: Js,
			default: Pb,
		}),
		XD = la(function () {
			return (
				null !== new Date(NaN).toJSON() ||
				1 !==
					Date.prototype.toJSON.call({
						toISOString: function () {
							return 1;
						},
					})
			);
		});
	ea(
		{ target: "Date", proto: !0, forced: XD },
		{
			toJSON: function (e) {
				e = pb(this);
				var t = Oc(e);
				return "number" != typeof t || isFinite(t)
					? e.toISOString()
					: null;
			},
		}
	),
		ea(
			{ target: "URL", proto: !0, enumerable: !0 },
			{
				toJSON: function () {
					return URL.prototype.toString.call(this);
				},
			}
		);
	var Ev = Object.prototype.hasOwnProperty,
		Ks = function (e, t, n) {
			return JSON.stringify(Mn(e), t, n);
		};
	Ks.ensureProperties = Mn;
	var YD = function (e, t) {
			t = t || {};
			var n = qa(e);
			if ("string" === n && 0 < e.length) return Fv(e);
			if ("number" === n && isFinite(e))
				return (
					t.long
						? (e =
								864e5 <= (t = Math.abs(e))
									? jh(e, t, 864e5, "day")
									: 36e5 <= t
									? jh(e, t, 36e5, "hour")
									: 6e4 <= t
									? jh(e, t, 6e4, "minute")
									: 1e3 <= t
									? jh(e, t, 1e3, "second")
									: e + " ms")
						: (e =
								864e5 <= (t = Math.abs(e))
									? Math.round(e / 864e5) + "d"
									: 36e5 <= t
									? Math.round(e / 36e5) + "h"
									: 6e4 <= t
									? Math.round(e / 6e4) + "m"
									: 1e3 <= t
									? Math.round(e / 1e3) + "s"
									: e + "ms"),
					e
				);
			throw Error(
				"val is not a non-empty string or a valid number. val=" +
					JSON.stringify(e)
			);
		},
		ZD = function (e) {
			function t(e) {
				function r() {
					for (
						var e = arguments.length, n = Array(e), i = 0;
						i < e;
						i++
					)
						n[i] = arguments[i];
					if (r.enabled) {
						(e = Number(new Date())),
							(r.diff = e - (o || e)),
							(r.prev = o),
							(o = r.curr = e),
							(n[0] = t.coerce(n[0])),
							"string" != typeof n[0] && n.unshift("%O");
						var s = 0;
						(n[0] = n[0].replace(/%([a-zA-Z%])/g, function (e, o) {
							return "%%" === e
								? "%"
								: (s++,
								  "function" == typeof (o = t.formatters[o]) &&
										((e = o.call(r, n[s])),
										n.splice(s, 1),
										s--),
								  e);
						})),
							t.formatArgs.call(r, n),
							(r.log || t.log).apply(r, n);
					}
				}
				var o,
					i = null;
				return (
					(r.namespace = e),
					(r.useColors = t.useColors()),
					(r.color = t.selectColor(e)),
					(r.extend = n),
					(r.destroy = t.destroy),
					Object.defineProperty(r, "enabled", {
						enumerable: !0,
						configurable: !1,
						get: function () {
							return null === i ? t.enabled(e) : i;
						},
						set: function (e) {
							i = e;
						},
					}),
					"function" == typeof t.init && t.init(r),
					r
				);
			}
			function n(e, n) {
				return (
					((e = t(
						this.namespace + (void 0 === n ? ":" : n) + e
					)).log = this.log),
					e
				);
			}
			function r(e) {
				return e
					.toString()
					.substring(2, e.toString().length - 2)
					.replace(/\.\*\?$/, "*");
			}
			return (
				(t.debug = t),
				(t.default = t),
				(t.coerce = function (e) {
					return e instanceof Error ? e.stack || e.message : e;
				}),
				(t.disable = function () {
					var e = []
						.concat(
							Z(t.names.map(r)),
							Z(
								t.skips.map(r).map(function (e) {
									return "-" + e;
								})
							)
						)
						.join(",");
					return t.enable(""), e;
				}),
				(t.enable = function (e) {
					t.save(e), (t.names = []), (t.skips = []);
					var n,
						r = ("string" == typeof e ? e : "").split(/[\s,]+/),
						o = r.length;
					for (n = 0; n < o; n++)
						r[n] &&
							("-" === (e = r[n].replace(/\*/g, ".*?"))[0]
								? t.skips.push(
										new RegExp("^" + e.substr(1) + "$")
								  )
								: t.names.push(new RegExp("^" + e + "$")));
				}),
				(t.enabled = function (e) {
					if ("*" === e[e.length - 1]) return !0;
					var n,
						r = 0;
					for (n = t.skips.length; r < n; r++)
						if (t.skips[r].test(e)) return !1;
					for (r = 0, n = t.names.length; r < n; r++)
						if (t.names[r].test(e)) return !0;
					return !1;
				}),
				(t.humanize = YD),
				(t.destroy = function () {
					console.warn(
						"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
					);
				}),
				Object.keys(e).forEach(function (n) {
					t[n] = e[n];
				}),
				(t.names = []),
				(t.skips = []),
				(t.formatters = {}),
				(t.selectColor = function (e) {
					for (var n = 0, r = 0; r < e.length; r++)
						(n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
					return t.colors[Math.abs(n) % t.colors.length];
				}),
				t.enable(t.load()),
				t
			);
		},
		Ls = xb(function (e, t) {
			(t.formatArgs = function (t) {
				if (
					((t[0] =
						(this.useColors ? "%c" : "") +
						this.namespace +
						(this.useColors ? " %c" : " ") +
						t[0] +
						(this.useColors ? "%c " : " ") +
						"+" +
						e.exports.humanize(this.diff)),
					this.useColors)
				) {
					var n = "color: " + this.color;
					t.splice(1, 0, n, "color: inherit");
					var r = 0,
						o = 0;
					t[0].replace(/%[a-zA-Z%]/g, function (e) {
						"%%" !== e && (r++, "%c" === e && (o = r));
					}),
						t.splice(o, 0, n);
				}
			}),
				(t.save = function (e) {
					try {
						e
							? t.storage.setItem("debug", e)
							: t.storage.removeItem("debug");
					} catch (e) {}
				}),
				(t.load = function () {
					try {
						var e = t.storage.getItem("debug");
					} catch (e) {}
					return (
						!e &&
							"undefined" != typeof process &&
							"env" in process &&
							(e = process.env.DEBUG),
						e
					);
				}),
				(t.useColors = function () {
					return (
						!(
							"undefined" == typeof window ||
							!window.process ||
							("renderer" !== window.process.type &&
								!window.process.__nwjs)
						) ||
						(("undefined" == typeof navigator ||
							!navigator.userAgent ||
							!navigator.userAgent
								.toLowerCase()
								.match(/(edge|trident)\/(\d+)/)) &&
							(("undefined" != typeof document &&
								document.documentElement &&
								document.documentElement.style &&
								document.documentElement.style
									.WebkitAppearance) ||
								("undefined" != typeof window &&
									window.console &&
									(window.console.firebug ||
										(window.console.exception &&
											window.console.table))) ||
								("undefined" != typeof navigator &&
									navigator.userAgent &&
									navigator.userAgent
										.toLowerCase()
										.match(/firefox\/(\d+)/) &&
									31 <= parseInt(RegExp.$1, 10)) ||
								("undefined" != typeof navigator &&
									navigator.userAgent &&
									navigator.userAgent
										.toLowerCase()
										.match(/applewebkit\/(\d+)/))))
					);
				});
			e: {
				try {
					var n = localStorage;
					break e;
				} catch (r) {}
				n = void 0;
			}
			var r;
			(t.storage = n),
				(t.destroy =
					((r = !1),
					function () {
						r ||
							((r = !0),
							console.warn(
								"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
							));
					})),
				(t.colors =
					"#0000CC #0000FF #0033CC #0033FF #0066CC #0066FF #0099CC #0099FF #00CC00 #00CC33 #00CC66 #00CC99 #00CCCC #00CCFF #3300CC #3300FF #3333CC #3333FF #3366CC #3366FF #3399CC #3399FF #33CC00 #33CC33 #33CC66 #33CC99 #33CCCC #33CCFF #6600CC #6600FF #6633CC #6633FF #66CC00 #66CC33 #9900CC #9900FF #9933CC #9933FF #99CC00 #99CC33 #CC0000 #CC0033 #CC0066 #CC0099 #CC00CC #CC00FF #CC3300 #CC3333 #CC3366 #CC3399 #CC33CC #CC33FF #CC6600 #CC6633 #CC9900 #CC9933 #CCCC00 #CCCC33 #FF0000 #FF0033 #FF0066 #FF0099 #FF00CC #FF00FF #FF3300 #FF3333 #FF3366 #FF3399 #FF33CC #FF33FF #FF6600 #FF6633 #FF9900 #FF9933 #FFCC00 #FFCC33".split(
						" "
					)),
				(t.log = console.debug || console.log || function () {}),
				(e.exports = ZD(t)),
				(e.exports.formatters.j = function (e) {
					try {
						return JSON.stringify(e);
					} catch (e) {
						return "[UnexpectedJSONParseError]: " + e.message;
					}
				});
		}),
		Ms = Ls("RTM:DEBUG"),
		Af;
	(Ms.enabled = !1),
		(function (e) {
			(e[(e.Uploading = 0)] = "Uploading"), (e[(e.Free = 1)] = "Free");
		})(Af || (Af = {}));
	var $D = (function () {
			function e(t) {
				va(this, e),
					x(this, "uploadRequest", void 0),
					x(this, "uploadState", void 0),
					x(this, "uploadResendCount", void 0),
					x(this, "LogCache", void 0),
					x(this, "LogsToPost", void 0),
					x(this, "processId", void 0),
					x(this, "sdkVersion", void 0),
					x(this, "logId", void 0),
					x(this, "rtmConfig", void 0),
					(this.processId = t.processId),
					(this.sdkVersion = t.sdkVersion),
					(this.rtmConfig = t.rtmConfig),
					(this.uploadRequest = t.uploadRequest),
					(this.uploadState = Af.Free),
					(this.uploadResendCount = 0),
					(this.LogCache = []),
					(this.LogsToPost = []),
					(this.logId = 0);
			}
			return (
				eb(e, [
					{
						key: "upload",
						value: function (e) {
							this.LogCache.push(e),
								this.uploadState === Af.Free &&
									((this.LogsToPost =
										40 > this.LogCache.length
											? this.LogCache.splice(
													0,
													this.LogCache.length
											  )
											: this.LogCache.splice(0, 40)),
									this.postLog(this.LogsToPost));
						},
					},
					{
						key: "postLog",
						value: function (e) {
							var t = this;
							(this.uploadState = Af.Uploading),
								setTimeout(
									ma(
										N.mark(function n() {
											var r, o, i;
											return N.wrap(
												function (n) {
													for (;;)
														switch (
															(n.prev = n.next)
														) {
															case 0:
																return (
																	(r = {
																		sdk_version:
																			t.sdkVersion,
																		process_id:
																			t.processId,
																		payload:
																			JSON.stringify(
																				e
																			),
																	}),
																	(n.prev = 1),
																	(n.next = 4),
																	t.uploadRequest(
																		r,
																		null !==
																			(o =
																				t
																					.rtmConfig
																					.enableCloudProxy) &&
																			void 0 !==
																				o &&
																			o
																	)
																);
															case 4:
																if (!gj) {
																	n.next = 6;
																	break;
																}
																throw Error(
																	"RTM is busy"
																);
															case 6:
																n.next = 13;
																break;
															case 8:
																return (
																	(n.prev = 8),
																	(n.t0 =
																		n.catch(
																			1
																		)),
																	(i =
																		2 >
																		t.uploadResendCount++
																			? 2e3
																			: 1e4),
																	setTimeout(
																		function () {
																			return t.postLog(
																				t.LogsToPost
																			);
																		},
																		i
																	),
																	n.abrupt(
																		"return"
																	)
																);
															case 13:
																if (
																	(Ms(
																		'The logs uploaded for "process-'.concat(
																			Og,
																			'"'
																		)
																	),
																	0 !==
																		t
																			.LogCache
																			.length)
																) {
																	n.next = 17;
																	break;
																}
																return (
																	(t.uploadState =
																		Af.Free),
																	n.abrupt(
																		"return"
																	)
																);
															case 17:
																(t.uploadResendCount = 0),
																	(t.LogsToPost =
																		40 >
																		t
																			.LogCache
																			.length
																			? t.LogCache.splice(
																					0,
																					t
																						.LogCache
																						.length
																			  )
																			: t.LogCache.splice(
																					0,
																					40
																			  )),
																	t.postLog(
																		t.LogsToPost
																	);
															case 20:
															case "end":
																return n.stop();
														}
												},
												n,
												null,
												[[1, 8]]
											);
										})
									),
									ue.getParameter("LOG_UPLOAD_INTERVAL")
								);
						},
					},
				]),
				e
			);
		})(),
		Ns = function (e, t, n, r, o, i, s, a) {
			var c = 0;
			for (s = !!s && Dd(s, a, 3); c < r; ) {
				if (c in n) {
					if (((a = s ? s(n[c], c, t) : n[c]), 0 < i && Ed(a)))
						o = Ns(e, t, a, Ma(a.length), o, i - 1) - 1;
					else {
						if (9007199254740991 <= o)
							throw TypeError(
								"Exceed the acceptable array length"
							);
						e[o] = a;
					}
					o++;
				}
				c++;
			}
			return o;
		},
		aE = Ns;
	ea(
		{ target: "Array", proto: !0 },
		{
			flat: function () {
				var e = arguments.length ? arguments[0] : void 0,
					t = pb(this),
					n = Ma(t.length),
					r = Dh(t, 0);
				return (
					(r.length = aE(r, t, t, n, 0, void 0 === e ? 1 : yc(e))), r
				);
			},
		}
	),
		ea(
			{ target: "Object", stat: !0 },
			{
				values: function (e) {
					return uD(e);
				},
			}
		);
	var ud = (function (e) {
			function t(e, r) {
				return (
					va(this, t),
					x(z((e = n.call(this, Vn(e, r)))), "originalError", void 0),
					x(z(e), "code", void 0),
					x(z(e), "serverCode", void 0),
					"number" == typeof r
						? (e.code = r)
						: "string" == typeof r
						? (e.name = r)
						: void 0 !== r &&
						  (r.originalError &&
								(e.originalError = r.originalError),
						  void 0 !== r.code && (e.code = r.code),
						  void 0 !== r.serverCode &&
								(e.serverCode = r.serverCode)),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(Kf(Error)),
		rc = (function (e) {
			function t(e, r) {
				return (
					va(this, t),
					x(
						z((e = n.call(this, Vn(e, r)))),
						"name",
						"RtmInternalError"
					),
					x(z(e), "code", void 0),
					(e.code = r),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(Kf(Error)),
		yi = function () {
			return (function (e) {
				function t(e) {
					va(this, t);
					var r = Object.keys(e);
					return n.call(this, e[r[0]], r[0]);
				}
				Ga(t, e);
				var n = Ha(t);
				return t;
			})(rc);
		},
		mb = yi(),
		Ub = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmTimeoutError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		ca = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmInvalidArgumentError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		da = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmInvalidStatusError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		ic = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmLimitExceededError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		bE = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmInvokeTooOftenError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		Ja = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmUnavailableError"
					),
					x(z(e), "serverCode", void 0),
					x(z(e), "statusCode", void 0),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		Bf = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmUnauthenticatedError"
					),
					x(z(e), "serverCode", void 0),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		ve = (function (e) {
			function t() {
				va(this, t);
				for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
					r[o] = arguments[o];
				return (
					x(
						z((e = n.call.apply(n, [this].concat(r)))),
						"name",
						"RtmUnknownError"
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(ud),
		Ab = function (e) {
			return e instanceof Ub || e instanceof Tb;
		},
		Na = function (e) {
			return e instanceof ud;
		},
		we = function (e, t, n) {
			return ['Executing "%s.%s" timed out after %ds', e, t, n / 1e3];
		},
		cE = ["CODE"],
		bc,
		Pd,
		S;
	!(function (e) {
		(e.CHINA = "CN"),
			(e.ASIA = "AS"),
			(e.NORTH_AMERICA = "NA"),
			(e.EUROPE = "EU"),
			(e.JAPAN = "JP"),
			(e.INDIA = "IN"),
			(e.OCEANIA = "OC"),
			(e.SOUTH_AMERICA = "SA"),
			(e.AFRICA = "AF"),
			(e.OVERSEA = "OVERSEA"),
			(e.GLOBAL = "GLOBAL");
	})(S || (S = {}));
	var dE = {
			CN: S.CHINA,
			NA: S.NORTH_AMERICA,
			EU: S.EUROPE,
			AS: S.ASIA,
			JP: S.JAPAN,
			IN: S.INDIA,
			GLOB: S.GLOBAL,
			AF: S.AFRICA,
			OC: S.OVERSEA,
			OVS: S.OVERSEA,
			SA: S.SOUTH_AMERICA,
		},
		kh = $n(
			((bc = {}),
			x(bc, S.ASIA, {
				CODE: S.ASIA,
				AP_DOMAINS: ["ap-web-1-asia.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-asia.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"],
				LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"],
				PROXY_AP: ["proxy-ap-web-asia.agora.io"],
				PROXY_NGINX: ["southeast-asia.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.NORTH_AMERICA, {
				CODE: S.NORTH_AMERICA,
				AP_DOMAINS: ["ap-web-1-north-america.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-north-america.agora.io"],
				EVENT_REPORT_DOMAIN: [
					"statscollector-1-north-america.agora.io",
				],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-north-america.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"],
				PROXY_AP: ["proxy-ap-web-america.agora.io"],
				PROXY_NGINX: ["east-usa.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.EUROPE, {
				CODE: S.EUROPE,
				AP_DOMAINS: ["ap-web-1-europe.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-europe.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-europe.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"],
				PROXY_AP: ["proxy-ap-web-europe.agora.io"],
				PROXY_NGINX: ["europe.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.JAPAN, {
				CODE: S.JAPAN,
				AP_DOMAINS: ["ap-web-1-japan.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-japan.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"],
				LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"],
				PROXY_AP: ["proxy-ap-web-japan.agora.io"],
				PROXY_NGINX: ["japan.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.INDIA, {
				CODE: S.INDIA,
				AP_DOMAINS: ["ap-web-1-india.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-india.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"],
				LOG_UPLOAD_SERVER: ["logservice-india.agora.io"],
				PROXY_AP: ["proxy-ap-web-india.agora.io"],
				PROXY_NGINX: ["india.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.OVERSEA, {
				CODE: S.OVERSEA,
				AP_DOMAINS: ["ap-web-1-oversea.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-oversea.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-oversea.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"],
				PROXY_AP: ["proxy-ap-web-oversea.agora.io"],
				PROXY_NGINX: ["webrtc-cloud-proxy.agora.io"],
			}),
			x(bc, S.GLOBAL, {
				CODE: S.GLOBAL,
				AP_DOMAINS: ["ap-web-1.agora.io", "ap-web-2.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-3.agora.io", "ap-web-4.agora.io"],
				EVENT_REPORT_DOMAIN: ["webcollector-rtm.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: ["webcollector-1.agora.io"],
				LOG_UPLOAD_SERVER: ["logservice-rtm.agora.io"],
				PROXY_AP: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"],
				PROXY_NGINX: ["webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.OCEANIA, {
				CODE: S.OCEANIA,
				AP_DOMAINS: ["ap-web-1-oceania.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-oceania.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-oceania.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"],
				PROXY_AP: ["proxy-ap-web-oceania.agora.io"],
				PROXY_NGINX: ["oceania.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.SOUTH_AMERICA, {
				CODE: S.SOUTH_AMERICA,
				AP_DOMAINS: ["ap-web-1-south-america.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-south-america.agora.io"],
				EVENT_REPORT_DOMAIN: [
					"statscollector-1-south-america.agora.io",
				],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-south-america.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"],
				PROXY_AP: ["proxy-ap-web-south-america.agora.io"],
				PROXY_NGINX: ["south-america.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.AFRICA, {
				CODE: S.AFRICA,
				AP_DOMAINS: ["ap-web-1-africa.agora.io"],
				AP_BACKUP_DOMAINS: ["ap-web-2-africa.agora.io"],
				EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"],
				EVENT_REPORT_BACKUP_DOMAIN: [
					"statscollector-2-africa.agora.io",
				],
				LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"],
				PROXY_AP: ["proxy-ap-web-africa.agora.io"],
				PROXY_NGINX: ["africa.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			x(bc, S.CHINA, {
				CODE: S.CHINA,
				AP_DOMAINS: ["webrtc2-2.ap.sd-rtn.com"],
				AP_BACKUP_DOMAINS: ["webrtc2-4.ap.sd-rtn.com"],
				EVENT_REPORT_DOMAIN: ["web-3.statscollector.sd-rtn.com"],
				EVENT_REPORT_BACKUP_DOMAIN: ["web-4.statscollector.sd-rtn.com"],
				LOG_UPLOAD_SERVER: ["logservice-china.agora.io"],
				PROXY_AP: ["proxy-ap-web.agoraio.cn"],
				PROXY_NGINX: ["east-cn.webrtc-cloud-proxy.sd-rtn.com"],
			}),
			bc)
		),
		Zf =
			((Pd = {}),
			x(Pd, S.ASIA, [S.CHINA, S.JAPAN, S.INDIA]),
			x(Pd, S.EUROPE, []),
			x(Pd, S.NORTH_AMERICA, []),
			x(Pd, S.SOUTH_AMERICA, []),
			x(Pd, S.OCEANIA, []),
			x(Pd, S.AFRICA, []),
			Pd),
		Os = [
			S.OVERSEA,
			S.GLOBAL,
			S.CHINA,
			S.NORTH_AMERICA,
			S.EUROPE,
			S.ASIA,
			S.JAPAN,
			S.INDIA,
			S.OCEANIA,
			S.SOUTH_AMERICA,
			S.AFRICA,
		],
		Nn = function (e) {
			return Object.values(Zf).flat().includes(e);
		},
		Hv = function (e) {
			var t;
			return null ===
				(t = qh(Zf).find(function (t) {
					return (t = $a(t, 2))[0], t[1].includes(e);
				})) || void 0 === t
				? void 0
				: t[0];
		},
		eE = function (e) {
			return e.sort(function (e, t) {
				return Os.indexOf(e) - Os.indexOf(t);
			});
		},
		Ve = function (e) {
			var t = new Set();
			if (
				0 ===
				(e = eE(e)
					.slice(0, 3)
					.map(function (e) {
						var n = kh[e];
						if (void 0 === n) throw new rc("invalid area key");
						return (e = n.CODE), (n = Ki(n, cE)), t.add(e), n;
					})).length
			)
				throw new rc("areas cannot be empty");
			return Wa(
				{ CODES: t },
				e.reduce(function (e, t) {
					for (var n = 0, r = qh(e); n < r.length; n++) {
						var o = $a(r[n], 2),
							i = o[0];
						(o = o[1]),
							(e[i] = Array.from(
								new Set([].concat(Z(t[i]), Z(o)))
							));
					}
					return e;
				})
			);
		},
		fa,
		Ps = (function () {
			var e = ma(
				N.mark(function e(t, n) {
					var r,
						o,
						i,
						s,
						a,
						c = arguments;
					return N.wrap(function (e) {
						for (;;)
							switch ((e.prev = e.next)) {
								case 0:
									if (
										!(
											2 <
											(o =
												2 < c.length && void 0 !== c[2]
													? c[2]
													: 0)
										)
									) {
										e.next = 3;
										break;
									}
									return e.abrupt("return");
								case 3:
									return (
										(i = {
											withCredentials: !0,
											body: t,
											timeout: 2e4,
										}),
										(s =
											0 < o
												? (null == fa
														? void 0
														: fa
																.LOG_UPLOAD_SERVER[0]) ||
												  "rtm.logservice.sd-rtn.com"
												: (null == fa
														? void 0
														: fa
																.LOG_UPLOAD_SERVER[0]) ||
												  "logservice-rtm.agora.io"),
										(a = n
											? "https://"
													.concat(
														null !==
															(r =
																null == fa
																	? void 0
																	: fa
																			.PROXY_NGINX[0]) &&
															void 0 !== r
															? r
															: "webrtc-cloud-proxy.sd-rtn.com",
														"/ls/?h="
													)
													.concat(
														s,
														"&p=443&d=upload/v1"
													)
											: "https://".concat(
													s,
													"/upload/v1"
											  )),
										(e.next = 8),
										lh(a, i).catch(function (e) {
											return Ps(t, n, o + 1);
										})
									);
								case 8:
								case "end":
									return e.stop();
							}
					}, e);
				})
			);
			return function (t, n) {
				return e.apply(this, arguments);
			};
		})(),
		Qs = new $D({
			processId: "process-".concat(Og),
			sdkVersion: "Agora_RTM_SDK_for_Web_".concat("v1.5.1-0-g5bbbcd72"),
			uploadRequest: Ps,
			rtmConfig: {},
		}),
		Sl =
			"text payload rawMessage thumbnail attributeInfos keys value extra".split(
				" "
			),
		Rs =
			"account ticket uid detail token account fileName cname user group key origin users src dst lastUpdateUserId channel cert wan_ip".split(
				" "
			),
		Ss = [
			"serverReceivedTs",
			"hasPeerReceived",
			"messageType",
			"enableNotificationToChannelMembers",
			"lastUpdateTs",
		],
		fE =
			"ChannelMessage MemberLeft MessageFromPeer LocalInvitationRefused LocalInvitationAccepted RemoteInvitationCanceled PeersOnlineStatusChanged AttributesUpdated MemberJoined".split(
				" "
			),
		We = function (e) {
			if ("string" == typeof e) return La(e);
			if (
				Array.isArray(e) &&
				e.every(function (e) {
					return "string" == typeof e;
				})
			)
				return e.map(function (e) {
					return La(e);
				});
			if (!Mm(e)) {
				for (var t = {}, n = 0; n < Ss.length; n++) {
					var r = Ss[n];
					r in e && (t[r] = e[r]);
				}
				if (0 < Object.keys(t).length) return t;
				if (5 > Object.keys(e).length) {
					for (n = 0, e = Object.entries(e); n < e.length; n++) {
						var o = $a(e[n], 2);
						(r = o[0]),
							(o = o[1]),
							Sl.includes(r)
								? (t[r] = "[Hidden Info]")
								: (t[La(r)] =
										"string" == typeof o
											? La(o)
											: "[Sensitive Info]");
					}
					return t;
				}
				return "[Sensitive Info]";
			}
			return e;
		},
		Ts = function (e) {
			return "object" === qa(e)
				? De(e)
					? Zn(He(e, 5), Sl, Rs)
					: e.constructor && e.constructor.name
				: e;
		},
		Us = function (e, t) {
			return e instanceof Error
				? e.message
				: "string" != typeof e
				? JSON.stringify(Zn(He(e, 5), Sl, Rs))
				: ((t = t.map(function (e) {
						return e instanceof Error
							? e.message
							: "object" === qa(e)
							? Ks(Array.isArray(e) ? e.map(Ts) : Ts(e))
							: e;
				  })),
				  Wn.apply(
						void 0,
						[
							e.replace(/%[%Oo]/g, function (e) {
								return "%%" === e
									? "%"
									: "%o" === e || "%O" === e
									? "%s"
									: e;
							}),
						].concat(Z(t))
				  ));
		},
		gE = 1,
		Vs = function (e, t, n) {
			var r = Ls(e);
			return (
				(r.enabled = !0),
				(r.log = n),
				(r.useColors = !1),
				function (n) {
					for (
						var o = arguments.length,
							i = Array(1 < o ? o - 1 : 0),
							s = 1;
						s < o;
						s++
					)
						i[s - 1] = arguments[s];
					if (t.enableLogUpload) {
						o = oh(n);
						var a = Us(o, i);
						Qs.upload({
							log_item_id: "".concat(gE++),
							log_level: e,
							payload_str: "["
								.concat(hE(), "] ")
								.concat(e, " - ")
								.concat(256 < a.length ? a.slice(0, 256) : a),
						});
					}
					switch (
						((o = function (e) {
							var t = a || Us(oh(n), i),
								o = Ec.LOG_HANDLER;
							"function" == typeof o &&
								o({ level: e, message: t }),
								r(t);
						}),
						e)
					) {
						case "RTM:INFO":
							t.logFilter.info && o("log");
							break;
						case "RTM:WARN":
							t.logFilter.warn && o("warning");
							break;
						case "RTM:ERROR":
							t.logFilter.error && o("error");
							break;
						case "RTM:TRACK":
							t.logFilter.track && o("log");
							break;
						case "RTM:MSG:RECV":
						case "RTM:MSG:SEND":
							t.logFilter.debug && o("debug");
							break;
						case "RTM:DEBUG":
							t.logFilter.debug && o("debug");
					}
				}
			);
		},
		Tl,
		Ws = function (e) {
			return function (t) {
				var n = 1 === Tl || void 0 === e ? "" : "Ins#".concat(e, " ");
				return "".concat(n).concat(t);
			};
		},
		Ul = function (e, t, n) {
			var r = Ws(Tl);
			return Vs("RTM:".concat(t), n, function (t) {
				return e(r(t));
			});
		},
		sc = function () {
			return (function (e) {
				function t(e, r) {
					var o =
						2 < arguments.length &&
						void 0 !== arguments[2] &&
						arguments[2];
					va(this, t);
					var i = n.call(this);
					if (
						(x(z(i), "logError", void 0),
						x(z(i), "invokeTracker", void 0),
						x(z(i), "resultTracker", void 0),
						x(z(i), "errorTracker", void 0),
						x(z(i), "eventTracker", void 0),
						x(z(i), "info", void 0),
						x(z(i), "warn", void 0),
						x(z(i), "log", void 0),
						x(z(i), "genLogger", void 0),
						x(z(i), "loggerId", void 0),
						x(z(i), "logger", void 0),
						x(z(i), "name", void 0),
						(i.logger = e),
						(i.name = r),
						(i.loggerId = e.loggerId),
						(i.info = e.info),
						(i.warn = e.warn),
						(i.logError = e.logError),
						(i.genLogger = e.genLogger),
						(i.log = e.genLogger("RTM:DEBUG", "<".concat(r, "> "))),
						(i.invokeTracker = e.genTracker("Invoke")),
						(i.eventTracker = e.genTracker("Event")),
						(i.resultTracker = e.genTracker("Result")),
						(i.errorTracker = e.genTracker("Error")),
						o)
					) {
						var s = i.emit.bind(z(i));
						i.emit = function () {
							for (
								var e = arguments.length, t = Array(e), n = 0;
								n < e;
								n++
							)
								t[n] = arguments[n];
							(e = t[0]), (n = t.slice(1));
							var o = fE.includes(e);
							i.eventTracker.apply(
								i,
								[
									"%s: ".concat(
										0 < n.length
											? "%s emitted with args: ".concat(
													n.map(function () {
														return "%o";
													})
											  )
											: "%s emitted"
									),
									r,
									e,
								].concat(Z(o ? n.map(We) : n))
							);
							try {
								s.apply(void 0, t);
							} catch (t) {
								i.logError(
									"Caught in the callback function of the event %s",
									e,
									t
								);
							}
						};
					}
					return i;
				}
				Ga(t, e);
				var n = Ha(t);
				return t;
			})(Ba);
		},
		iE = function (e) {
			return Ul(console.log.bind(console), "INFO", e);
		},
		jE = function (e) {
			return Ul(console.warn.bind(console), "WARN", e);
		},
		kE = function (e) {
			return Ul(console.error.bind(console), "ERROR", e);
		},
		Xs = function (e, t) {
			return function (n) {
				var r =
						1 < arguments.length && void 0 !== arguments[1]
							? arguments[1]
							: "",
					o = Ws(e),
					i = console.debug.bind(console),
					s = Vs(n, t, function (e) {
						return i(o(e));
					});
				return function (e) {
					for (
						var t = arguments.length,
							n = Array(1 < t ? t - 1 : 0),
							o = 1;
						o < t;
						o++
					)
						n[o - 1] = arguments[o];
					return s.apply(void 0, [r + e].concat(n));
				};
			};
		},
		lE = function (e, t) {
			return function (n) {
				return Xs(e, t)("RTM:TRACK", "[".concat(n, "] "));
			};
		},
		Jv = Object.freeze({
			__proto__: null,
			Counter: 1,
			ApiExec: 154,
			Session: 164,
			ApEvent: 165,
			Link: 166,
			Logout: 167,
			TxMessage: 168,
			RxMessage: 169,
			KickedOff: 170,
			TxMessageRes: 171,
			ChnJoin: 172,
			ChnJoinRes: 173,
			ChnLeave: 174,
			ChnGetMembers: 175,
			ChnGetMembersRes: 176,
			ChnMemberJoined: 177,
			ChnMemberLeft: 178,
			QueryPeersOnlineStatus: 179,
			QueryPeersOnlineStatusRes: 180,
			RenewToken: 181,
			OperateAttribute: 186,
			OperateAttributeRes: 187,
			ApRequest: 188,
			LinkTcpEvent: 189,
			LinkLoginRequest: 190,
			ConnectionStateChange: 191,
			RtmSdkMessageCount: 510,
			default: {
				Counter: 1,
				ApiExec: 154,
				Session: 164,
				ApEvent: 165,
				Link: 166,
				Logout: 167,
				TxMessage: 168,
				RxMessage: 169,
				KickedOff: 170,
				TxMessageRes: 171,
				ChnJoin: 172,
				ChnJoinRes: 173,
				ChnLeave: 174,
				ChnGetMembers: 175,
				ChnGetMembersRes: 176,
				ChnMemberJoined: 177,
				ChnMemberLeft: 178,
				QueryPeersOnlineStatus: 179,
				QueryPeersOnlineStatusRes: 180,
				RenewToken: 181,
				OperateAttribute: 186,
				OperateAttributeRes: 187,
				ApRequest: 188,
				LinkTcpEvent: 189,
				LinkLoginRequest: 190,
				ConnectionStateChange: 191,
				RtmSdkMessageCount: 510,
			},
		}),
		Ka;
	!(function (e) {
		(e[(e.ChannelSMsg = 1)] = "ChannelSMsg"),
			(e[(e.ChannelRMsg = 2)] = "ChannelRMsg"),
			(e[(e.P2pSMsgOfflineFlag = 3)] = "P2pSMsgOfflineFlag"),
			(e[(e.P2pRMsgOfflineFlag = 4)] = "P2pRMsgOfflineFlag"),
			(e[(e.P2pSMsgNoOfflineFlag = 5)] = "P2pSMsgNoOfflineFlag"),
			(e[(e.P2pRMsgNoOfflineFlag = 6)] = "P2pRMsgNoOfflineFlag"),
			(e[(e.P2pCallInvitation = 7)] = "P2pCallInvitation"),
			(e[(e.P2pCallCancellation = 8)] = "P2pCallCancellation"),
			(e[(e.P2pCallAcceptance = 9)] = "P2pCallAcceptance"),
			(e[(e.P2pCallRefusal = 10)] = "P2pCallRefusal");
	})(Ka || (Ka = {}));
	var zi = (function (e) {
			function t(e, r, o) {
				return (
					va(this, t),
					x(
						z((r = n.call(this, r, "MessageReport"))),
						"messagecount",
						r.getInitMessageCount()
					),
					x(z(r), "context", void 0),
					x(z(r), "rtmMessageCategory", void 0),
					x(z(r), "seq", P.fromNumber(1, !0)),
					(r.context = e),
					(r.rtmMessageCategory = o),
					r
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "incGetSeq",
						value: function () {
							return (this.seq = this.seq.add(1));
						},
					},
					{
						key: "getInitMessageCount",
						value: function () {
							return {
								peerack10mscount: P.fromNumber(0),
								peerack25mscount: P.fromNumber(0),
								peerack50mscount: P.fromNumber(0),
								peerack75mscount: P.fromNumber(0),
								peerack100mscount: P.fromNumber(0),
								peerack150mscount: P.fromNumber(0),
								peerack200mscount: P.fromNumber(0),
								peerack250mscount: P.fromNumber(0),
								peerack300mscount: P.fromNumber(0),
								peerack400mscount: P.fromNumber(0),
								peerack500mscount: P.fromNumber(0),
								peerack600mscount: P.fromNumber(0),
								peerack800mscount: P.fromNumber(0),
								peerack1000mscount: P.fromNumber(0),
								peerack2000mscount: P.fromNumber(0),
								peerack3000mscount: P.fromNumber(0),
								peerack5000mscount: P.fromNumber(0),
								peerack7000mscount: P.fromNumber(0),
								peerackslowcount: P.fromNumber(0),
								norecipientack10mscount: P.fromNumber(0),
								norecipientack25mscount: P.fromNumber(0),
								norecipientack50mscount: P.fromNumber(0),
								norecipientack75mscount: P.fromNumber(0),
								norecipientack100mscount: P.fromNumber(0),
								norecipientack150mscount: P.fromNumber(0),
								norecipientack200mscount: P.fromNumber(0),
								norecipientack250mscount: P.fromNumber(0),
								norecipientack300mscount: P.fromNumber(0),
								norecipientack400mscount: P.fromNumber(0),
								norecipientack500mscount: P.fromNumber(0),
								norecipientack600mscount: P.fromNumber(0),
								norecipientack800mscount: P.fromNumber(0),
								norecipientack1000mscount: P.fromNumber(0),
								norecipientack2000mscount: P.fromNumber(0),
								norecipientack3000mscount: P.fromNumber(0),
								norecipientack5000mscount: P.fromNumber(0),
								norecipientack7000mscount: P.fromNumber(0),
								norecipientackslowcount: P.fromNumber(0),
								sentcount: P.fromNumber(0),
								receivedcount: P.fromNumber(0),
								acktimeoutcount: P.fromNumber(0),
								toooftencount: 0,
								receiverofflinecount: 0,
								invalidmessagecount: 0,
								unknowerrorcount: 0,
								servercachedcount: 0,
								timeoutcount: 0,
								successcount: 0,
							};
						},
					},
					{
						key: "updatePeerAckCount",
						value: function (e) {
							e /= 2;
							for (
								var t = [
										[0, 10],
										[10, 25],
										[25, 50],
										[50, 75],
										[75, 100],
										[100, 150],
										[150, 200],
										[200, 250],
										[250, 300],
										[300, 400],
										[400, 500],
										[500, 600],
										[600, 800],
										[800, 1e3],
										[1e3, 2e3],
										[2e3, 3e3],
										[3e3, 5e3],
										[5e3, 7e3],
									],
									n = 0;
								n < t.length;
								n++
							) {
								var r,
									o = t[n];
								if (Is(e, o[0], o[1]))
									(o = "peerack".concat(o[1], "mscount")),
										(this.messagecount[o] =
											null ===
												(r = this.messagecount[o]) ||
											void 0 === r
												? void 0
												: r.add(1));
								else if (7e3 < e) {
									var i;
									this.messagecount.peerackslowcount =
										null ===
											(i =
												this.messagecount
													.peerackslowcount) ||
										void 0 === i
											? void 0
											: i.add(1);
								}
							}
						},
					},
					{
						key: "updateNorecipientackCount",
						value: function (e) {
							e /= 2;
							for (
								var t = [
										[0, 10],
										[10, 25],
										[25, 50],
										[50, 75],
										[75, 100],
										[100, 150],
										[150, 200],
										[200, 250],
										[250, 300],
										[300, 400],
										[400, 500],
										[500, 600],
										[600, 800],
										[800, 1e3],
										[1e3, 2e3],
										[2e3, 3e3],
										[3e3, 5e3],
										[5e3, 7e3],
									],
									n = 0;
								n < t.length;
								n++
							) {
								var r,
									o = t[n];
								if (Is(e, o[0], o[1]))
									(o = "norecipientack".concat(
										o[1],
										"mscount"
									)),
										(this.messagecount[o] =
											null ===
												(r = this.messagecount[o]) ||
											void 0 === r
												? void 0
												: r.add(1));
								else if (7e3 < e) {
									var i;
									this.messagecount.norecipientackslowcount =
										null ===
											(i =
												this.messagecount
													.norecipientackslowcount) ||
										void 0 === i
											? void 0
											: i.add(1);
								}
							}
						},
					},
					{
						key: "updateCommonCount",
						value: function (e) {
							var t = this.messagecount[e];
							P.isLong(t)
								? (this.messagecount[e] = t.add(1))
								: (this.messagecount[e] = t + 1);
						},
					},
					{
						key: "report",
						value: function () {
							var e, t;
							bb(
								"RtmSdkMessageCount",
								new Js(
									Wa(
										Wa({}, this.messagecount),
										{},
										{
											vid: P.fromString(
												null !==
													(e = this.context.vid) &&
													void 0 !== e
													? e
													: "0"
											),
											os: 7,
											lts: P.fromNumber(Date.now()),
											sid: this.context.sid,
											reportsequence: this.incGetSeq(),
											apimajorversion: 4,
											apiminorversion: 18,
											userid: this.context.uid,
											messagecategory:
												this.rtmMessageCategory,
										}
									)
								),
								null !==
									(t =
										this.context.config.enableCloudProxy) &&
									void 0 !== t &&
									t
							),
								(this.messagecount = Wa(
									Wa({}, this.messagecount),
									{},
									{
										toooftencount: 0,
										receiverofflinecount: 0,
										invalidmessagecount: 0,
										unknowerrorcount: 0,
										servercachedcount: 0,
										timeoutcount: 0,
										successcount: 0,
									}
								));
						},
					},
				]),
				t
			);
		})(sc()),
		Un = new Map(),
		hE = function () {
			var e = new Date();
			return ""
				.concat(e.toISOString().split("T")[1].replace(/\..+/, ""), ".")
				.concat(e.getMilliseconds());
		},
		Yf = Object.keys,
		qh = Object.entries.bind(Object),
		oh = function (e) {
			return "string" == typeof e
				? e.endsWith(".")
					? e
					: "".concat(e, ".")
				: e;
		},
		yj = I.URI,
		Nv = wi,
		mE = Ki(oD, ["Wrapper"]),
		bo = ql(mE, "URI"),
		Ys = function (e, t) {
			var n = -1,
				r = e.length,
				o = r - 1;
			for (t = void 0 === t ? r : t; ++n < t; ) {
				var i = e[(r = os(n, o))];
				(e[r] = e[n]), (e[n] = i);
			}
			return (e.length = t), e;
		},
		nE = function (e) {
			return Ys(Pi(e));
		},
		oE = function (e) {
			return Ys(zj(e));
		},
		Cf = function (e) {
			return (ub(e) ? nE : oE)(e);
		},
		Df = { 0: 9591, 1: 9593 },
		xe = function (e) {
			var t = $f(null);
			return "https://".concat(t ? null : e, "/api/v1");
		},
		pE = ob.apply(
			void 0,
			Z(Cf(["web-1.ap.sd-rtn.com", "web-2.ap.sd-rtn.com"].map(xe)))
		),
		qE = ob.apply(
			void 0,
			Z(Cf(["ap-web-1.agora.io", "ap-web-2.agora.io"].map(xe)))
		),
		rE = ob.apply(
			void 0,
			Z(Cf(["web-3.ap.sd-rtn.com", "web-4.ap.sd-rtn.com"].map(xe)))
		),
		sE = ob.apply(
			void 0,
			Z(Cf(["ap-web-3.agora.io", "ap-web-4.agora.io"].map(xe)))
		),
		Zs = yi(),
		Vl = (function (e) {
			function t(e, r, o, i, s, a) {
				var c, u;
				va(this, t);
				var l = n.call(this, s, uj("Socket-", s.loggerId));
				if (
					(x(z(l), "isActiveClose", !1),
					x(z(l), "loggedIn", !1),
					x(z(l), "useNewDomain", void 0),
					x(z(l), "receivedPacket", new rb()),
					x(z(l), "open$", void 0),
					x(z(l), "input$", new rb()),
					x(z(l), "userJoin$", new rb()),
					x(z(l), "attemptsSinceLastError", 0),
					x(z(l), "message$", new rb()),
					x(z(l), "socket$", void 0),
					x(z(l), "toClose", new rb()),
					x(z(l), "toReconnect", new rb()),
					x(z(l), "sendLogger", void 0),
					x(z(l), "receiveLogger", void 0),
					x(z(l), "ip", void 0),
					x(z(l), "env", void 0),
					x(z(l), "ticket", void 0),
					x(z(l), "context", void 0),
					x(z(l), "getDomain", function () {
						return co(l.ip, l.useNewDomain);
					}),
					x(z(l), "socketReconnector", function (e) {
						var t = function (e) {
							return (
								(l.attemptsSinceLastError += 1),
								l.warn(
									"The %s of Env %d reconnecting %s",
									l.name,
									l.env,
									e.message
								),
								dd(3e3)
							);
						};
						return e.pipe(
							ab(function (e) {
								return (
									l.log("socket connection closed"),
									(l.loggedIn = !1),
									2 <= l.attemptsSinceLastError
										? (l.warn("socket connection failure"),
										  l.emit("connectionFailure"),
										  l.close(),
										  ra(e))
										: l.isActiveClose
										? Sb
										: (l.emit("reconnect"),
										  (l.useNewDomain = !l.useNewDomain),
										  ra(e))
								);
							}),
							Re(function (e) {
								return e.pipe(Kb(t));
							})
						);
					}),
					(l.ip = e),
					(l.env = r),
					(l.ticket = o),
					(l.context = i),
					(l.useNewDomain = null != a ? a : 0.5 <= Math.random()),
					(l.sendLogger = l.genLogger("RTM:MSG:SEND")),
					(l.receiveLogger = l.genLogger("RTM:MSG:RECV")),
					0 !== r && 1 !== r)
				)
					throw new Zs({
						ILLEGAL_RTM_ENV:
							"The env number is out of rtm env count",
					});
				var f = Df[r];
				l.log(
					"Opening websocket address %s for the Env %d",
					l.ip,
					l.env
				),
					bb(
						"LinkLoginRequest",
						{
							sid: l.context.sid,
							userId: l.context.uid,
							lts: P.fromNumber(Date.now()),
							elapse: Xa(l.context.startTime),
							destServerIp: l.ip,
							linkId: l.env,
						},
						null !==
							(c =
								l.context.config.enableCloudProxy ||
								l.context.socketUseProxy) &&
							void 0 !== c &&
							c
					),
					bb(
						"LinkLoginRequest",
						{
							sid: l.context.sid,
							userId: l.context.uid,
							lts: P.fromNumber(Date.now()),
							elapse: Xa(l.context.startTime),
							destServerIp: l.ip,
							linkId: l.env,
						},
						null !==
							(u =
								l.context.config.enableCloudProxy ||
								l.context.socketUseProxy) &&
							void 0 !== u &&
							u
					);
				var h = Jb(l.input$, l.userJoin$.pipe(Av(2)), l.message$).pipe(
					Ea(function (e) {
						return wi.encode(e).finish();
					})
				);
				return (
					(e = Jb(
						Bv("", {
							protocols: [],
							makeWebSocket: function () {
								if (
									l.context.config.enableCloudProxy ||
									l.context.socketUseProxy
								) {
									if (
										0 === l.context.cloudProxyServers.length
									)
										throw (
											(l.logError(
												"No cloud proxy server to connect"
											),
											new Ja())
										);
									var e = $f(null)
										? JSON.parse(null.replace(/-/g, "."))
										: l.context.cloudProxyServers;
									(e = Xe(
										(e = "wss://".concat(
											co(On(e), !1),
											"/"
										)),
										"sid",
										l.context.sid
									)),
										(e = Xe(
											e,
											"remote_port",
											f.toString()
										)),
										(e = Xe(e, "remote_ip", l.ip)),
										(e = Xe(e, "token", l.context.key)),
										(e = new WebSocket(e));
								} else
									e = new WebSocket(
										"wss://"
											.concat(l.getDomain(), ":")
											.concat(f)
									);
								return (e.binaryType = "arraybuffer"), e;
							},
						}),
						l.toReconnect
					)),
					(l.socket$ = fb(
						e,
						Dl.pipe(
							Lb(7e3),
							ab(function (e) {
								return (
									Ab(e) && l.warn("socket open timed out"),
									ra(e)
								);
							})
						)
					).pipe(
						Ea(function (e) {
							if (e instanceof Error)
								throw (
									(l.warn(
										"Env_%d: Force reconnect the socket",
										l.env
									),
									e)
								);
							return e(h).pipe(
								Ea(function (e) {
									return wi.decode(new Uint8Array(e));
								})
							);
						}),
						l.socketReconnector
					)),
					(l.open$ = l.socket$.pipe(
						sa(function (e) {
							l.log("Websocket opened", l.name),
								e.subscribe(
									function (e) {
										var t = e.data;
										(e = yj[e.uri].slice(0, -3)),
											(t = bo[e].decode(t));
										var n = eC(
												{},
												ql(t, "toJSON"),
												function (e, t) {
													return t instanceof P
														? Tn(t)
														: t;
												}
											),
											r = !1;
										if (
											((t instanceof ws ||
												t instanceof vs) &&
												t.instance.lessThanOrEqual(
													4294967295
												) &&
												(r = !0),
											t instanceof xs || t instanceof ys)
										) {
											var o = t.instance,
												i = t.sequence;
											(t.dialogue.lessThanOrEqual(
												4294967295
											) ||
												o.lessThanOrEqual(4294967295) ||
												i.lessThan(1)) &&
												(r = !0);
										}
										r
											? l.warn(
													"Env_%d: Illegal %s, abandoned %o",
													l.env,
													e,
													n
											  )
											: ("Pong" !== e &&
													l.receiveLogger(
														"Env_%d: %s %o",
														l.env,
														e,
														n
													),
											  l.receivedPacket.next([e, t]));
									},
									function () {}
								);
						}),
						Uf(void 0),
						Kc(l.toClose),
						Se()
					)),
					l
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "address",
						get: function () {
							return "".concat(this.ip, ":").concat(Df[this.env]);
						},
					},
					{
						key: "sendPacket",
						value: function (e, t) {
							if ("Ping" !== e) {
								var n = md(t, function (e) {
									return e instanceof P ? Tn(e) : e;
								});
								this.sendLogger(
									"Env_%d: %s %o",
									this.env,
									e,
									n
								);
							}
							(t = Mv(e, t)),
								"UserJoin" === e
									? this.userJoin$.next(t)
									: "Message" === e
									? this.message$.next(t)
									: this.input$.next(t);
						},
					},
					{
						key: "close",
						value: function () {
							(this.isActiveClose = !0),
								(this.loggedIn = !1),
								this.toClose.next();
						},
					},
					{
						key: "fromReceived",
						value: function (e) {
							return this.receivedPacket.pipe(
								yb(function (t) {
									return $a(t, 1)[0] === e;
								}),
								Ea(function (e) {
									return $a(e, 2)[1];
								})
							);
						},
					},
					{
						key: "forceReconnect",
						value: function () {
							this.toReconnect.next(
								new Zs({
									FORCE_RECONNECTING:
										"Connection seems broken, try force reconnecting",
								})
							);
						},
					},
				]),
				t
			);
		})(sc());
	ea(
		{ target: "String", proto: !0, forced: As },
		{
			padStart: function (e) {
				return qD(
					this,
					e,
					1 < arguments.length ? arguments[1] : void 0
				);
			},
		}
	);
	var tE = function (e) {
			var t = Yf(kh);
			e = Lv(e);
			for (var n = 0; n < t.length; n++) {
				var r = kh[t[n]];
				if (
					(null != r && r.AP_DOMAINS.includes(e)) ||
					(null != r && r.AP_BACKUP_DOMAINS.includes(e)) ||
					(null != r && r.PROXY_AP.includes(e))
				)
					return [r.CODE];
			}
			return [S.CHINA, S.GLOBAL];
		},
		uE = {
			INVALID_APP_ID: "Illegal App ID",
			NO_AUTHORIZED: "Signature verification failed",
			TOKEN_TIMEOUT: "Dynamic key expired",
			INVALID_TOKEN_UID: "UID in the security key(token) is not valid",
			APP_ID_NO_ACTIVATED: "The vendor is not activated",
			DYNAMIC_KEY_NOT_ENABLED:
				"The vendor did not enable the dynamic key, but uses the dynamic key",
			DYNAMIC_ENABLED_BUT_STATIC_KEY:
				"The vendor enabled the dynamic key, but uses the static key",
			TOKEN_EXPIRED: "The token has expired",
			INVALID_USER_ID: "The user ID to login does not match the token",
			FORBIDDEN_REGION: "Forbidden to access the request in this area",
			CANNOT_MEET_AREA_DEMAND:
				"Cannot allocate to meet the requirements of the given area limit",
		},
		$s = {
			5: "INVALID_APP_ID",
			7: "INVALID_USER_ID",
			9: "NO_AUTHORIZED",
			10: "TOKEN_TIMEOUT",
			11: "APP_ID_NO_ACTIVATED",
			12: "INVALID_TOKEN_UID",
			13: "TOKEN_EXPIRED",
			14: "DYNAMIC_KEY_NOT_ENABLED",
			15: "DYNAMIC_ENABLED_BUT_STATIC_KEY",
			18: "FORBIDDEN_REGION",
			19: "CANNOT_MEET_AREA_DEMAND",
		},
		vE = [100, 101, 102],
		Ai = /web-(\d)/,
		at = (function (e) {
			function t(e, r) {
				var o =
					2 < arguments.length &&
					void 0 !== arguments[2] &&
					arguments[2];
				va(this, t);
				var i = n.call(this, r, "AccessPoint");
				return (
					x(z(i), "handleUniLbsError", function (e, t) {
						var n = e;
						if (4 < e.toString().length) {
							var r = e.toString().padStart(8, "0"),
								o = parseInt(r.slice(0, 4), 10);
							if (((r = parseInt(r.slice(4, 8), 10)), 201 === o))
								n = r;
							else if (101 === o && !vE.includes(r))
								return ra(
									Error("service is currently unavailable")
								);
						}
						if (((o = n.toString()), !Object.keys($s).includes(o)))
							return (
								((e = new Ja(
									[
										"Login is rejected by the server. The response code is %d",
										e,
									],
									Pg
								)).serverCode = n),
								ra(e)
							);
						switch (((o = $s[o]), (n = uE[o]), o)) {
							case "INVALID_APP_ID":
							case "APP_ID_NO_ACTIVATED":
								return (
									((t = new Bf(n, as)).serverCode = e), ra(t)
								);
							case "INVALID_USER_ID":
								return (
									((t = new Bf(n, si)).serverCode = e), ra(t)
								);
							case "TOKEN_EXPIRED":
							case "TOKEN_TIMEOUT":
								return (
									((t = new Bf(n, ti)).serverCode = e), ra(t)
								);
							case "NO_AUTHORIZED":
							case "INVALID_TOKEN_UID":
							case "DYNAMIC_KEY_NOT_ENABLED":
							case "DYNAMIC_ENABLED_BUT_STATIC_KEY":
								return (
									((t = new Bf(n, bs)).serverCode = e), ra(t)
								);
							case "CANNOT_MEET_AREA_DEMAND":
								return (
									(t = tE(t)).forEach(function (e) {
										return i.failedAreas.add(e);
									}),
									i.failedAreas.size ===
									(void 0 === fa ? 2 : fa.CODES.size)
										? (((t = new ca(n, Pg)).serverCode = e),
										  ra(t))
										: ra(
												Error(
													"ap ".concat(
														t.join(", "),
														" cannot meet requirement"
													)
												)
										  )
								);
							case "FORBIDDEN_REGION":
								return (
									((t = new Ja(n, Pg)).serverCode = e), ra(t)
								);
							default:
								return ra(Rn("ApResErrType", o));
						}
					}),
					x(z(i), "getApEdgeInfo$", void 0),
					x(z(i), "getApEdgeInfoEndFirst$", void 0),
					x(z(i), "apFinish$", new rb()),
					x(z(i), "retryCount", 0),
					x(z(i), "failedAreas", new Set()),
					x(z(i), "usedUrl", []),
					x(z(i), "newDomainUsed", !1),
					x(z(i), "backupNewDomainUsed", !1),
					x(z(i), "genUrl", function () {
						return void 0 === fa
							? ej.apply(void 0, Z(Cf([pE, qE]))).pipe(
									fj(function (e) {
										return ob.apply(void 0, Z(e));
									})
							  )
							: ob.apply(
									void 0,
									Z(fa.AP_DOMAINS.slice(0, 3).map(xe))
							  );
					}),
					x(z(i), "genBackupUrl", function () {
						return void 0 === fa
							? ej.apply(void 0, Z(Cf([rE, sE]))).pipe(
									fj(function (e) {
										return ob.apply(void 0, Z(e));
									})
							  )
							: ob.apply(
									void 0,
									Z(fa.AP_BACKUP_DOMAINS.slice(0, 3).map(xe))
							  );
					}),
					x(z(i), "getApUrl$", function (e) {
						var n, r;
						return i.genUrl().pipe(
							yb(function (e) {
								return (
									(!i.newDomainUsed ||
										!e.includes("sd-rtn.com")) &&
									(e.includes("sd-rtn.com") &&
										(i.newDomainUsed = !0),
									!Ol(i.usedUrl, function (t) {
										var n;
										return (
											t ===
											(null === (n = e.match(Ai)) ||
											void 0 === n
												? void 0
												: n[1])
										);
									}))
								);
							}),
							sa(function (e) {
								var t;
								void 0 === fa &&
									"string" ==
										typeof (e =
											null === (t = e.match(Ai)) ||
											void 0 === t
												? void 0
												: t[1]) &&
									i.usedUrl.push(e);
							}),
							hb(
								e
									? Math.max(
											Ec.RECONNECTING_AP_NUM,
											null !==
												(n =
													null == fa
														? void 0
														: fa.CODES.size) &&
												void 0 !== n
												? n
												: 0
									  )
									: null !==
											(r =
												null == fa
													? void 0
													: fa.CODES.size) &&
									  void 0 !== r
									? r
									: 2
							),
							$d(function () {
								return t.runOutOfUrlSymbol;
							}),
							ab(function (e, n) {
								return (
									(i.newDomainUsed = !1),
									e === t.runOutOfUrlSymbol
										? ((i.usedUrl = []), n)
										: ra(e)
								);
							})
						);
					}),
					x(z(i), "getBackupApUrl$", function (e) {
						var n, r;
						return i.genBackupUrl().pipe(
							yb(function (e) {
								return (
									(!i.backupNewDomainUsed ||
										!e.includes("sd-rtn.com")) &&
									(e.includes("sd-rtn.com") &&
										(i.backupNewDomainUsed = !0),
									!Ol(i.usedUrl, function (t) {
										var n;
										return (
											t ===
											(null === (n = e.match(Ai)) ||
											void 0 === n
												? void 0
												: n[1])
										);
									}))
								);
							}),
							sa(function (e) {
								var t;
								void 0 === fa &&
									"string" ==
										typeof (e =
											null === (t = e.match(Ai)) ||
											void 0 === t
												? void 0
												: t[1]) &&
									i.usedUrl.push(e);
							}),
							hb(
								e
									? Math.max(
											Ec.RECONNECTING_AP_NUM,
											null !==
												(n =
													null == fa
														? void 0
														: fa.CODES.size) &&
												void 0 !== n
												? n
												: 0
									  )
									: null !==
											(r =
												null == fa
													? void 0
													: fa.CODES.size) &&
									  void 0 !== r
									? r
									: 2
							),
							$d(function () {
								return t.runOutOfUrlSymbol;
							}),
							ab(function (e, n) {
								return (
									(i.backupNewDomainUsed = !1),
									e === t.runOutOfUrlSymbol
										? ((i.usedUrl = []), n)
										: ra(e)
								);
							})
						);
					}),
					x(z(i), "getProxyApUrl$", function (e) {
						var t, n;
						return ob
							.apply(
								void 0,
								Z(
									(
										(null == fa
											? void 0
											: fa.PROXY_AP.slice(0, 3)) || [
											"ap-proxy-1.agora.io",
											"ap-proxy-2.agora.io",
										]
									).map(xe)
								)
							)
							.pipe(
								hb(
									e
										? Math.max(
												Ec.RECONNECTING_AP_NUM,
												null !==
													(t =
														null == fa
															? void 0
															: fa.CODES.size) &&
													void 0 !== t
													? t
													: 0
										  )
										: null !==
												(n =
													null == fa
														? void 0
														: fa.CODES.size) &&
										  void 0 !== n
										? n
										: 2
								)
							);
					}),
					x(z(i), "context", void 0),
					x(z(i), "fetchCloudProxy", function (e, t) {
						var n = uj("AP-", i.loggerId);
						i.log("The AccessPoint requests %s(%s)", e, n);
						var r,
							o = new AbortController();
						return (
							i.apFinish$.pipe(hb(1)).subscribe(function () {
								return o.abort();
							}),
							yd(
								ma(
									N.mark(function r() {
										var s, a;
										return N.wrap(function (r) {
											for (;;)
												switch ((r.prev = r.next)) {
													case 0:
														return (
															(a = mh(
																0,
																Number.MAX_SAFE_INTEGER
															)),
															i.log(
																"%s request opid: %d",
																n,
																a
															),
															bb(
																"ApRequest",
																{
																	sid: i
																		.context
																		.sid,
																	userId: i
																		.context
																		.uid,
																	lts: P.fromNumber(
																		Date.now()
																	),
																	elapse: Xa(
																		i
																			.context
																			.startTime
																	),
																	apAddr: e,
																	opId: P.fromNumber(
																		a
																	),
																	envId: 0,
																	flag: 128,
																},
																null !==
																	(s =
																		i
																			.context
																			.config
																			.enableCloudProxy) &&
																	void 0 !==
																		s &&
																	s
															),
															r.abrupt(
																"return",
																lh(e, {
																	headers: {
																		"X-Packet-Service-Type":
																			"0",
																		"X-Packet-URI":
																			"90",
																		"Content-Type":
																			"application/json",
																	},
																	body: {
																		sid: i
																			.context
																			.sid,
																		opid: a,
																		appid: i
																			.context
																			.appId,
																		client_ts:
																			Math.ceil(
																				Date.now() /
																					1e3
																			),
																		request_bodies:
																			[
																				{
																					uri: 22,
																					buffer: {
																						service_ids:
																							[
																								7,
																								16,
																							],
																						key:
																							null !=
																							t
																								? t
																								: i
																										.context
																										.key,
																						cname: i
																							.context
																							.uid,
																						uid: 0,
																						detail: Wa(
																							{},
																							void 0 ===
																								fa
																								? {
																										11: [
																											S.CHINA,
																											S.GLOBAL,
																										].join(),
																										12: "1",
																								  }
																								: {
																										11: Array.from(
																											fa.CODES
																										)
																											.map(
																												function (
																													e
																												) {
																													return e ===
																														S.OVERSEA
																														? ""
																																.concat(
																																	S.ASIA,
																																	","
																																)
																																.concat(
																																	S.EUROPE,
																																	","
																																)
																																.concat(
																																	S.AFRICA,
																																	","
																																)
																																.concat(
																																	S.NORTH_AMERICA,
																																	","
																																)
																																.concat(
																																	S.SOUTH_AMERICA,
																																	","
																																)
																																.concat(
																																	S.OCEANIA
																																)
																														: e;
																												}
																											)
																											.join(
																												","
																											),
																										12: "1",
																								  }
																						),
																					},
																				},
																			],
																	},
																	signal: o.signal,
																})
															)
														);
													case 4:
													case "end":
														return r.stop();
												}
										}, r);
									})
								)
							).pipe(
								ab(function (t) {
									return (
										"AbortError" !== t.name &&
											(i.logError(t),
											i.warn(
												"The AP server %s request failure",
												e,
												t
											)),
										Sb
									);
								}),
								Cb(
									((r = ma(
										N.mark(function t(r) {
											var o,
												s,
												a,
												c,
												u,
												l,
												f,
												h,
												p,
												d,
												b,
												g,
												v,
												y,
												m,
												E,
												w,
												O,
												_;
											return N.wrap(function (t) {
												for (;;)
													switch ((t.prev = t.next)) {
														case 0:
															if (
																((o =
																	r.responseText),
																(s =
																	JSON.parse(
																		o
																	)),
																i.log(
																	"The %s response is %o",
																	n,
																	s
																),
																(void 0 ===
																	(a =
																		s.response_body) ||
																	0 ===
																		a.length ||
																	a.some(
																		function (
																			e
																		) {
																			var t;
																			return (
																				void 0 ===
																					(null ===
																						(t =
																							e.buffer) ||
																					void 0 ===
																						t
																						? void 0
																						: t.code) ||
																				23 !==
																					e.uri
																			);
																		}
																	)) &&
																	ra(
																		new Ja(
																			"cloud proxy response_body not valid",
																			Pg
																		)
																	),
																0 ===
																	(c =
																		a.filter(
																			function (
																				e
																			) {
																				return (
																					0 !==
																					e
																						.buffer
																						.code
																				);
																			}
																		))
																		.length)
															) {
																t.next = 14;
																break;
															}
															if (
																void 0 ===
																(u = c.find(
																	function (
																		e
																	) {
																		return (
																			128 ===
																			e
																				.buffer
																				.flag
																		);
																	}
																))
															) {
																t.next = 12;
																break;
															}
															return t.abrupt(
																"return",
																i.handleUniLbsError(
																	u.buffer
																		.code,
																	e
																)
															);
														case 12:
															return (
																i.logError(
																	"cloud proxy error response"
																),
																t.abrupt(
																	"return",
																	i.handleUniLbsError(
																		c[0]
																			.buffer
																			.code,
																		e
																	)
																)
															);
														case 14:
															for (
																l = [], f = 0;
																f < a.length;
																f++
															)
																if (
																	262144 ===
																	(null ==
																		(d =
																			a[
																				f
																			]) ||
																	null ===
																		(h =
																			d.buffer) ||
																	void 0 === h
																		? void 0
																		: h.flag)
																)
																	null ===
																		(b =
																			d.buffer) ||
																		void 0 ===
																			b ||
																		null ===
																			(g =
																				b.edges_services) ||
																		void 0 ===
																			g ||
																		null ===
																			(v =
																				g.forEach) ||
																		void 0 ===
																			v ||
																		v.call(
																			g,
																			function (
																				e
																			) {
																				Pn(
																					(e =
																						e.ip)
																				) &&
																					-1 ===
																						i.context.cloudProxyServers.indexOf(
																							e
																						) &&
																					(i.log(
																						"got cloud proxy server: %s",
																						e
																					),
																					i.context.cloudProxyServers.push(
																						e
																					));
																			}
																		);
																else if (
																	128 ===
																	(null ==
																		d ||
																	null ===
																		(p =
																			d.buffer) ||
																	void 0 === p
																		? void 0
																		: p.flag)
																) {
																	for (
																		w =
																			function (
																				e,
																				t
																			) {
																				var n =
																					t[
																						e
																					];
																				l.some(
																					function (
																						e
																					) {
																						return (
																							e.ip ===
																							n.ip
																						);
																					}
																				) ||
																					l.push(
																						{
																							ip: n.ip,
																							ticket: d
																								.buffer
																								.cert,
																						}
																					);
																			},
																			O = 0,
																			_ =
																				d
																					.buffer
																					.edges_services;
																		O <
																		_.length;
																		O++
																	)
																		w(O, _);
																	i.context.rtmArea =
																		null !==
																			(y =
																				null ===
																					(m =
																						d.buffer) ||
																				void 0 ===
																					m ||
																				null ===
																					(E =
																						m.detail) ||
																				void 0 ===
																					E
																					? void 0
																					: E[9]) &&
																		void 0 !==
																			y
																			? y
																			: "";
																}
															return t.abrupt(
																"return",
																ob.apply(
																	void 0,
																	Z(l).concat(
																		[Mg]
																	)
																)
															);
														case 19:
														case "end":
															return t.stop();
													}
											}, t);
										})
									)),
									function (e) {
										return r.apply(this, arguments);
									})
								),
								ab(function (e) {
									return Na(e) ? ra(e) : Sb;
								}),
								bh(),
								yb(function (e) {
									return (
										void 0 !== e &&
										"string" == typeof e.ip &&
										"string" == typeof e.ticket &&
										Pn(e.ip)
									);
								})
							)
						);
					}),
					x(z(i), "fetchAp", function (e, t) {
						var n = uj("AP-", i.loggerId);
						i.log("The AccessPoint requests %s(%s)", e, n);
						var r = new AbortController();
						i.apFinish$.pipe(hb(1)).subscribe(function () {
							return r.abort();
						});
						var o,
							s = mh(0, Number.MAX_SAFE_INTEGER);
						return yd(
							ma(
								N.mark(function o() {
									var a;
									return N.wrap(function (o) {
										for (;;)
											switch ((o.prev = o.next)) {
												case 0:
													return (
														i.log(
															"%s request opid: %d",
															n,
															s
														),
														bb(
															"ApRequest",
															{
																sid: i.context
																	.sid,
																userId: i
																	.context
																	.uid,
																lts: P.fromNumber(
																	Date.now()
																),
																elapse: Xa(
																	i.context
																		.startTime
																),
																apAddr: e,
																opId: P.fromNumber(
																	s
																),
																envId: 0,
																flag: 128,
															},
															null !==
																(a =
																	i.context
																		.config
																		.enableCloudProxy) &&
																void 0 !== a &&
																a
														),
														o.abrupt(
															"return",
															lh(e, {
																headers: {
																	"X-Packet-Service-Type":
																		"0",
																	"X-Packet-URI":
																		"69",
																	"Content-Type":
																		"application/json",
																},
																body: {
																	flag: 128,
																	opid: s,
																	key:
																		t ||
																		i
																			.context
																			.key,
																	cname: i
																		.context
																		.uid,
																	detail: Wa(
																		{},
																		void 0 ===
																			fa
																			? {
																					11: [
																						S.CHINA,
																						S.GLOBAL,
																					].join(),
																					12: "1",
																			  }
																			: {
																					11: Array.from(
																						fa.CODES
																					)
																						.map(
																							function (
																								e
																							) {
																								return e ===
																									S.OVERSEA
																									? ""
																											.concat(
																												S.ASIA,
																												","
																											)
																											.concat(
																												S.EUROPE,
																												","
																											)
																											.concat(
																												S.AFRICA,
																												","
																											)
																											.concat(
																												S.NORTH_AMERICA,
																												","
																											)
																											.concat(
																												S.SOUTH_AMERICA,
																												","
																											)
																											.concat(
																												S.OCEANIA
																											)
																									: e;
																							}
																						)
																						.join(
																							","
																						),
																					12: "1",
																			  }
																	),
																	uid: 0,
																	sid: i
																		.context
																		.sid,
																},
																signal: r.signal,
															})
														)
													);
												case 3:
												case "end":
													return o.stop();
											}
									}, o);
								})
							)
						).pipe(
							ab(function (t) {
								return (
									"AbortError" !== t.name &&
										(i.logError(t),
										i.warn(
											"The AP server %s request failure",
											e,
											t
										)),
									Sb
								);
							}),
							Cb(
								((o = ma(
									N.mark(function t(r) {
										var o, a, c, u, l, f, h, p, d;
										return N.wrap(function (t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														if (
															((a =
																r.responseText),
															(c = JSON.parse(a)),
															i.log(
																"The %s response is %o",
																n,
																c
															),
															(l = (u = c).code),
															(f = u.addresses),
															(h = u.detail),
															(i.context.vid =
																h[8]),
															bb(
																"ApEvent",
																{
																	sid: i
																		.context
																		.sid,
																	userId: i
																		.context
																		.uid,
																	lts: P.fromNumber(
																		Date.now()
																	),
																	elapse: Xa(
																		i
																			.context
																			.startTime
																	),
																	apAddr: e,
																	linkServerList:
																		f.map(
																			function (
																				e
																			) {
																				return e.ip;
																			}
																		),
																	serverErrCode:
																		l,
																	flag: 128,
																	envId: 0,
																	opId: P.fromNumber(
																		s
																	),
																	errCode: 0,
																	area: h[9],
																	isp: h[2],
																},
																null !==
																	(o =
																		i
																			.context
																			.config
																			.enableCloudProxy) &&
																	void 0 !==
																		o &&
																	o
															),
															i.info(c),
															0 === l)
														) {
															t.next = 9;
															break;
														}
														return t.abrupt(
															"return",
															i.handleUniLbsError(
																l,
																e
															)
														);
													case 9:
														if (
															((p = f),
															$f(null) &&
																((d =
																	JSON.parse(
																		null.replace(
																			/-/g,
																			"."
																		)
																	)),
																(p = d.map(
																	function (
																		e
																	) {
																		return {
																			ip: e,
																			ticket: p[0]
																				.ticket,
																		};
																	}
																))),
															0 !== p.length)
														) {
															t.next = 14;
															break;
														}
														return t.abrupt(
															"return",
															ra(
																Error(
																	"No available edge address to connect"
																)
															)
														);
													case 14:
														return (
															(i.context.rtmArea =
																null == h
																	? void 0
																	: h[9]),
															t.abrupt(
																"return",
																ob.apply(
																	void 0,
																	Z(p).concat(
																		[Mg]
																	)
																)
															)
														);
													case 16:
													case "end":
														return t.stop();
												}
										}, t);
									})
								)),
								function (e) {
									return o.apply(this, arguments);
								})
							),
							bh(),
							ab(function (e) {
								return Na(e) ? ra(e) : Sb;
							}),
							yb(function (e) {
								return (
									void 0 !== e &&
									"string" == typeof e.ip &&
									"string" == typeof e.ticket
								);
							})
						);
					}),
					(i.context = e),
					(i.getApEdgeInfoEndFirst$ = function () {
						var e =
							0 < arguments.length &&
							void 0 !== arguments[0] &&
							arguments[0];
						return dd(
							0,
							e || o ? Ec.RECONNECTING_AP_INTERVAL : 2e3
						).pipe(
							hb(1),
							sa(function () {
								i.retryCount += 1;
							}),
							Cb(function () {
								return i.context.config.enableCloudProxy ||
									i.context.socketUseProxy
									? i.getProxyApUrl$(e || o)
									: (4 <= i.retryCount && (i.retryCount = 0),
									  3 >= i.retryCount
											? i.getApUrl$(e || o)
											: i.getBackupApUrl$(e || o));
							}),
							Cb(function (e) {
								return i.context.config.enableCloudProxy ||
									i.context.socketUseProxy
									? i.fetchCloudProxy(e)
									: i.fetchAp(e);
							}),
							ab(function (e) {
								return (
									e instanceof Tb &&
										i.warn("AP request timeout"),
									ra(e)
								);
							}),
							tn(function (e) {
								return e.ip;
							}),
							Kc(i.apFinish$)
						);
					}),
					(i.getApEdgeInfo$ = function (e) {
						return dd(
							0,
							e || o ? Ec.RECONNECTING_AP_INTERVAL : 2e3
						).pipe(
							hb(8),
							sa(function () {
								i.retryCount += 1;
							}),
							Cb(function () {
								return i.context.config.enableCloudProxy ||
									i.context.socketUseProxy
									? i.getProxyApUrl$(e || o)
									: 3 >= i.retryCount
									? i.getApUrl$(e || o)
									: i.getBackupApUrl$(e || o);
							}),
							Cb(function (e) {
								return (
									i.context.config.enableCloudProxy ||
									i.context.socketUseProxy
										? i.fetchCloudProxy(e)
										: i.fetchAp(e)
								).pipe();
							}),
							ab(function (e) {
								return (
									e instanceof Tb &&
										i.warn("AP request timeout"),
									ra(e)
								);
							}),
							tn(function (e) {
								return e.ip;
							}),
							Kc(i.apFinish$)
						);
					}),
					i
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "clearUp",
						value: function () {
							this.failedAreas.clear(), (this.retryCount = 0);
						},
					},
				]),
				t
			);
		})(sc());
	x(at, "runOutOfUrlSymbol", Symbol("AP urls are used up"));
	var bt = yi(),
		ct = (function (e) {
			function t(e, r, o) {
				va(this, t);
				var i = n.call(this, r, "Connection");
				x(z(i), "apClient", void 0),
					x(z(i), "lastOpenSockets", [new Te(1), new Te(1)]),
					x(z(i), "curOpenSockets", [void 0, void 0]),
					x(z(i), "ipIterator", 0),
					x(z(i), "loginSocketOpenFailureCount", 0),
					x(z(i), "firstEnv", 0.5 <= Math.random() ? 1 : 0),
					x(z(i), "firstSocketOpener", void 0),
					x(z(i), "secondSocketOpener", void 0),
					x(z(i), "firstOpenKeeperSubject", new rb()),
					x(z(i), "secondOpenKeeperSubject", new rb()),
					x(z(i), "blacklistedIP", {}),
					x(z(i), "edgeInfoReplayed", void 0),
					x(z(i), "firstEnvOpenSocket", void 0),
					x(z(i), "firstOpenKeeperSub", void 0),
					x(z(i), "secondOpenKeeperSub", void 0),
					x(z(i), "context", void 0),
					x(z(i), "logger", void 0),
					(i.context = e),
					(i.logger = r),
					(i.apClient = new at(i.context, r)),
					i.apClient.apFinish$.subscribe(function () {
						i.log("Ap client fetch finished");
					});
				var s,
					a = [];
				return (
					(i.edgeInfoReplayed = i.apClient.getApEdgeInfo$(o).pipe(
						Re(function (e) {
							return e.pipe(
								sa(function (e) {
									if (Na(e)) throw e;
								}),
								Zd(
									o
										? ue.getParameter(
												"RECONNECTING_AP_INTERVAL"
										  )
										: 900
								),
								Kc(dd(2e4))
							);
						}),
						yb(function (e) {
							var t;
							return (
								!Ol(a, e) &&
								1 >=
									(null !== (t = i.blacklistedIP[e.ip]) &&
									void 0 !== t
										? t
										: 0)
							);
						}),
						$d(function () {
							return new bt({
								AP_NO_AVAILABLE_EDGE:
									"No available edge address to connect",
							});
						}),
						sa(function (e) {
							a.push(e), i.log("An edge info got %o", e);
						}),
						sa({
							error: function (e) {
								i.emit("connectionInitFailure", e);
							},
						}),
						fh(function () {
							i.apClient.clearUp();
						}),
						wn()
					)),
					(i.firstEnvOpenSocket = i.edgeInfoReplayed.pipe(
						Cb(function (e) {
							if (void 0 === e)
								return ra(Error("Invalid edge info"));
							var t = new Vl(
								e.ip,
								i.firstEnv,
								e.ticket,
								i.context,
								r,
								s
							);
							if (
								((i.firstEnv = 1 === i.firstEnv ? 0 : 1),
								t.once("connectionFailure", function () {
									return i.onSocketConnectionFailure(t);
								}),
								!o &&
									Ec.ENABLE_EDGE_AUTO_FALLBACK &&
									!i.context.config.enableCloudProxy)
							) {
								var n,
									a = Date.now();
								t.on("reconnect", function () {
									var e;
									(i.loginSocketOpenFailureCount += 1),
										(null !== (e = n) && void 0 !== e) ||
											(n = Date.now() - a),
										500 > n &&
											1 < i.loginSocketOpenFailureCount &&
											(i.context.socketUseProxy = !0);
								});
							}
							return (s = !t.useNewDomain), t.open$.pipe(Uf(t));
						}),
						sa(function (e) {
							i.log(
								"The websocket of ENV_%d opened to %s:%d",
								e.env,
								e.ip,
								Df[e.env]
							),
								(i.curOpenSockets[e.env] = e),
								i.lastOpenSockets[e.env].next(e),
								(i.firstEnv = e.env),
								i.openSecondSocket(e.env, e.ip, e.useNewDomain);
						}),
						hb(1),
						Se()
					)),
					(i.firstSocketOpener = i.firstEnvOpenSocket.pipe(
						Cb(function (e) {
							return e.open$.pipe(
								sa(function () {
									i.log(
										"The websocket of first ENV_%d re-opened to %s:%d",
										e.env,
										e.ip,
										Df[e.env]
									),
										(i.curOpenSockets[e.env] = e),
										i.lastOpenSockets[e.env].next(e);
								})
							);
						})
					)),
					(e = i.firstOpenKeeperSubject.pipe(Kb(wd))),
					(i.firstOpenKeeperSub = e.subscribe({ error: i.logError })),
					i
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "initConnection",
						value: function () {
							this.firstOpenKeeperSubject.next(
								this.firstSocketOpener
							);
						},
					},
					{
						key: "closeSocket",
						value: function (e, t) {
							if (![0, 1].includes(e))
								throw new mb({
									INVALID_ENV:
										"The env argument is not 0 or 1",
								});
							var n =
								e === this.firstEnv
									? this.firstOpenKeeperSub
									: this.secondOpenKeeperSub;
							this.firstOpenKeeperSub = void 0;
							var r = this.curOpenSockets[e];
							(this.curOpenSockets[e] = void 0),
								r &&
									((r.isActiveClose = !0),
									setTimeout(function () {
										r.close();
									}, t)),
								void 0 !== n &&
									setTimeout(function () {
										null == n || n.unsubscribe();
									}, t);
						},
					},
					{
						key: "waitClosing",
						value: function (e) {
							var t = this;
							return (
								(e.isActiveClose = !0),
								e.open$.pipe(
									ev(),
									ab(function (e) {
										return e.message ===
											ns.normalClosureMessage
											? Sb
											: ra(e);
									}),
									Lb(5e3),
									ab(function (n) {
										return n instanceof Tb
											? (t.warn(
													"Force closing the ENV_%d connection",
													e.env
											  ),
											  Sb)
											: ra(n);
									})
								)
							);
						},
					},
					{
						key: "onSocketConnectionFailure",
						value: function (e) {
							var t = [0, 1].filter(function (t) {
								return t !== e.env;
							})[0];
							(t = this.curOpenSockets[t]) && t.loggedIn
								? this.reopenSocketWithApRequest(e.env)
								: this.emit("socketsFailure");
						},
					},
					{
						key: "openSecondSocket",
						value: function (e, t, n) {
							var r = this,
								o = 1 === e ? 0 : 1;
							(this.secondSocketOpener =
								this.edgeInfoReplayed.pipe(
									vn(function (e, t) {
										return [].concat(Z(e), [t]);
									}, []),
									Ea(function (e) {
										return ls(e, function (e) {
											return Sn(t, e.ip);
										}).slice(-1)[0];
									}),
									hb(1),
									Cb(function (e) {
										if (void 0 === e)
											return ra(
												Error("Invalid edge info")
											);
										var t = new Vl(
											e.ip,
											o,
											e.ticket,
											r.context,
											r.logger,
											n
										);
										return (
											t.on(
												"connectionFailure",
												function () {
													return r.onSocketConnectionFailure(
														t
													);
												}
											),
											t.open$.pipe(
												sa(function () {
													r.lastOpenSockets[o].next(
														t
													),
														(r.curOpenSockets[o] =
															t);
												})
											)
										);
									}),
									Se()
								)),
								(this.secondOpenKeeperSub =
									this.secondOpenKeeperSubject
										.pipe(Kb(wd))
										.subscribe({ error: this.logError })),
								this.secondOpenKeeperSubject.next(
									this.secondSocketOpener
								);
						},
					},
					{
						key: "reopenSocketWithApRequest",
						value: function (e) {
							var t = this,
								n = [0, 1].filter(function (t) {
									return t !== e;
								})[0];
							if (void 0 !== (n = this.curOpenSockets[n])) {
								var r,
									o = n.ip;
								(n = this.apClient
									.getApEdgeInfoEndFirst$(!0)
									.pipe(
										$d(function () {
											return new bt({
												AP_NO_AVAILABLE_EDGE:
													"No available edge address to connect",
											});
										}),
										Re(function (e) {
											return e.pipe(
												sa(function (e) {
													if (e.code === ti)
														t.emit("tokenExpired"),
															t.apClient.apFinish$.next(
																void 0
															);
													else if (Na(e)) throw e;
												}),
												Zd(
													ue.getParameter(
														"RECONNECTING_AP_INTERVAL"
													)
												),
												Kc(dd(15e3))
											);
										}),
										sa(function (e) {
											t.log("An edge info got %o", e);
										}),
										fh(function () {
											t.apClient.clearUp();
										})
									)
									.pipe(
										vn(function (e, t) {
											return [].concat(Z(e), [t]);
										}, []),
										Ea(function (e) {
											return (e = ls(e, function (e) {
												return Sn(o, e.ip);
											})).length -
												1 >=
												t.ipIterator
												? e.slice(
														-t.ipIterator++ - 1
												  )[0]
												: ((t.ipIterator = 0),
												  e.slice(-1)[0]);
										}),
										$d(),
										Cb(function (n) {
											if (void 0 === n)
												return ra(
													Error("Invalid edge info")
												);
											var o = new Vl(
												n.ip,
												e,
												n.ticket,
												t.context,
												t.logger,
												r
											);
											return (
												o.on(
													"connectionFailure",
													function () {
														return t.onSocketConnectionFailure(
															o
														);
													}
												),
												(r = !o.useNewDomain),
												o.open$.pipe(Uf(o))
											);
										}),
										sa(function (n) {
											t.log(
												"The websocket of ENV_%d re-opened to %s:%d using ap",
												n.env,
												n.ip,
												Df[n.env]
											),
												(t.curOpenSockets[e] = n),
												t.lastOpenSockets[e].next(n);
										}),
										Cb(function (n) {
											return n.open$.pipe(
												sa(function () {
													t.log(
														"The websocket of ENV_%d re-opened to %s:%d",
														n.env,
														n.ip,
														Df[n.env]
													),
														(t.curOpenSockets[e] =
															n),
														t.lastOpenSockets[
															e
														].next(n);
												})
											);
										}),
										Se()
									)),
									e === this.firstEnv
										? this.firstOpenKeeperSubject.next(n)
										: this.secondOpenKeeperSubject.next(n);
							}
						},
					},
				]),
				t
			);
		})(sc()),
		xE = (function (e) {
			function t(e, r, o) {
				return (
					va(this, t),
					x(z((o = n.call(this, o, "Context"))), "_token", void 0),
					x(z(o), "config", void 0),
					x(z(o), "_uid", void 0),
					x(z(o), "_sid", void 0),
					x(z(o), "_vid", void 0),
					x(z(o), "_startTime", void 0),
					x(z(o), "_area", "CN"),
					x(z(o), "_socketUseProxy", !1),
					x(z(o), "appId", void 0),
					x(z(o), "enableCloudProxy", !1),
					x(z(o), "cloudProxyServers", []),
					(o.appId = e),
					(o.config = r),
					o
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "socketUseProxy",
						get: function () {
							return (
								this._socketUseProxy &&
								Ec.ENABLE_EDGE_AUTO_FALLBACK
							);
						},
						set: function (e) {
							this.log("socketUseProxy is set to %s", e),
								(this._socketUseProxy = e);
						},
					},
					{
						key: "token",
						set: function (e) {
							this._token =
								"string" == typeof e && e ? e : void 0;
						},
					},
					{
						key: "uid",
						get: function () {
							if ("string" == typeof this._uid && this._uid)
								return this._uid;
							throw new rc("Cannot get illegal uid");
						},
						set: function (e) {
							if (
								(this.log("The user ID is set to %s", La(e)),
								!Ta(e))
							)
								throw new rc();
							this._uid = e;
						},
					},
					{
						key: "vid",
						get: function () {
							if ("string" == typeof this._vid && this._vid)
								return this._vid;
							throw new rc("Cannot get illegal vid");
						},
						set: function (e) {
							this._vid = e;
						},
					},
					{
						key: "key",
						get: function () {
							if ("string" == typeof this._token && this._token)
								return this._token;
							if ("string" == typeof this.appId && this.appId)
								return this.appId;
							throw new rc("Cannot get illegal key");
						},
					},
					{
						key: "sid",
						get: function () {
							if ("string" == typeof this._sid && this._sid)
								return this._sid;
							throw new rc("Cannot get illegal sid");
						},
						set: function (e) {
							if (
								(this.log("sid is set to %s", e),
								"string" != typeof e || !e)
							)
								throw new rc();
							this._sid = e;
						},
					},
					{
						key: "startTime",
						get: function () {
							if (
								"number" == typeof this._startTime &&
								this._startTime
							)
								return this._startTime;
							throw new rc("Cannot get illegal startTime");
						},
						set: function (e) {
							if (
								(this.log("startTime is set to %s", e),
								"number" != typeof e || !e)
							)
								throw new rc();
							this._startTime = e;
						},
					},
					{
						key: "rtmArea",
						get: function () {
							if ("string" == typeof this._area && this._area)
								return this._area;
							throw new rc("Cannot get illegal area");
						},
						set: function (e) {
							this.log("area is set to %s", e),
								"string" == typeof e && e
									? (this._area = e)
									: this.warn("set area failed");
						},
					},
				]),
				t
			);
		})(sc());
	Sp(
		"of",
		function () {
			for (
				var e = 0, t = arguments.length, n = new (qf(this))(t);
				t > e;

			)
				n[e] = arguments[e++];
			return n;
		},
		rk
	);
	var yE = Math.max,
		Pv = function (e, t, n) {
			var r = Object(e);
			if (!ae(e)) {
				var o = wf(t);
				(e = Wd(e)),
					(t = function (e) {
						return o(r[e], e, r);
					});
			}
			return -1 <
				(t = (function (e, t, n) {
					var r = null == e ? 0 : e.length;
					if (!r) return -1;
					if (null == n) n = 0;
					else {
						var o = (n = Rl(n)) % 1;
						n = n == n ? (o ? n - o : n) : 0;
					}
					return 0 > n && (n = yE(r + n, 0)), Yq(e, wf(t), n);
				})(e, t, n))
				? r[o ? e[t] : t]
				: void 0;
		},
		Ov = function (e, t) {
			return e && e.length
				? fl(e, void 0, "function" == typeof t ? t : void 0)
				: [];
		},
		dt = (function () {
			function e() {
				va(this, e), x(this, "size", 0), x(this, "fields", new Map());
			}
			return (
				eb(e, [
					{
						key: "define",
						value: function (e, t, n) {
							if (((this.size += n), 64 < this.size))
								throw new RangeError(
									"the struct over 64 bits is not supported"
								);
							th(
								(t = {
									val: 0,
									isNumber: "number" === t,
									isBoolean: "boolean" === t,
									oneof:
										"number" === t || "boolean" === t
											? void 0
											: t,
									len: n,
								})
							),
								this.fields.set(e, t);
						},
					},
					{
						key: "set",
						value: function (e, t) {
							if (!(e = this.fields.get(e)))
								throw Error("field not found");
							var n = e.oneof;
							if (!P.isLong(t) && "number" != typeof t)
								if ("boolean" == typeof t) t = t ? 1 : 0;
								else {
									if (void 0 === n)
										throw Error("invalid field type");
									if (void 0 === (t = n[t]))
										throw Error("field type not found");
								}
							th(e, t), (e.val = t);
						},
					},
					{
						key: "toNumber",
						value: function () {
							for (
								var e = 0,
									t = 0,
									n = 0,
									r = Array.from(this.fields);
								n < r.length;
								n++
							) {
								var o = $a(r[n], 2)[1],
									i = o.len;
								void 0 !== (o = o.val) &&
									((e += P.fromValue(o)
										.shiftLeft(t)
										.toNumber()),
									(t += i));
							}
							return e;
						},
					},
					{
						key: "toLong",
						value: function () {
							for (
								var e = P.fromNumber(0, !0),
									t = 0,
									n = 0,
									r = Array.from(this.fields);
								n < r.length;
								n++
							) {
								var o = $a(r[n], 2)[1],
									i = o.len;
								void 0 !== (o = o.val) &&
									((e = P.fromValue(o).shiftLeft(t).add(e)),
									(t += i));
							}
							return e;
						},
					},
					{
						key: "assert",
						value: function (e, t) {
							function n(e) {
								if (!P.isLong(e) && "number" != typeof e)
									if ("boolean" == typeof e) e = e ? 1 : 0;
									else {
										if (void 0 === o)
											throw Error("invalid field type");
										if (void 0 === (e = o[e]))
											throw Error("field type not found");
									}
								return th(r, e), sh(e, r.val);
							}
							var r = this.fields.get(e);
							if (!r) throw Error("field not found");
							var o = r.oneof;
							if (!Array.isArray(t)) return n(t);
							if (1 === t.length) return n(t[0]);
							if (
								t.every(function (e) {
									return "string" == typeof e;
								}) &&
								void 0 !== o
							)
								return t.some(function (e) {
									return n(e);
								});
							throw Error("invalid valueTypes");
						},
					},
					{
						key: "from",
						value: function (e) {
							e = P.fromValue(e);
							for (
								var t = 0, n = 0, r = Array.from(this.fields);
								n < r.length;
								n++
							) {
								var o = $a(r[n], 2)[1],
									i = o.len,
									s = P.fromNumber(
										Math.pow(2, i) - 1,
										!0
									).shiftLeft(t);
								th(o, (s = e.and(s).shiftRightUnsigned(t))),
									(o.val = s),
									(t += i);
							}
						},
					},
					{
						key: "typeOf",
						value: function (e) {
							if (void 0 !== (e = this.fields.get(e))) {
								var t = e.oneof;
								if (((e = e.val), void 0 !== t)) {
									var n = 0;
									for (
										t = Object.entries(t);
										n < t.length;
										n++
									) {
										var r = $a(t[n], 2),
											o = r[0];
										if (sh(e, r[1])) return o;
									}
								}
							}
							throw new TypeError(
								"can only get type of oneof type"
							);
						},
					},
				]),
				e
			);
		})(),
		et = (function (e) {
			function t(e) {
				va(this, t);
				var r = n.call(this);
				return (
					r.define("Rejoin", "boolean", 1),
					r.define("Unused", "number", 31),
					r.define("Platform", "number", 8),
					r.define("Version", "number", 12),
					r.define("Subversion", "number", 12),
					r.set("Platform", 7),
					r.set("Version", 4),
					r.set("Subversion", 18),
					r.set("Rejoin", e),
					r
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return t;
		})(dt),
		zE = Wa(
			Wa(
				{},
				{
					PeerTextMessage: 0,
					ChannelTextMessage: 1,
					VendorTextMessage: 2,
				}
			),
			{ PeerRawMessage: 3, ChannelRawMessage: 4, VendorRawMessage: 5 }
		),
		ft = {
			CallInvite: 101,
			CallAccept: 102,
			CallReject: 103,
			CallCancel: 104,
		},
		AE = Wa(Wa({}, zE), ft),
		BE = { Uncompressed: 0, Zlib: 1 },
		Ef = (function (e) {
			function t(e) {
				va(this, t);
				var r = n.call(this);
				if (
					(r.define("MessageType", AE, 8),
					r.define("BroadcastJumps", "number", 2),
					r.define("ToCache", "boolean", 1),
					r.define("FromCache", "boolean", 1),
					r.define("CompressionMethod", BE, 2),
					r.define("IterationNumber", "number", 4),
					r.define("BufferedMessage", "boolean", 1),
					r.define("ToArchive", "boolean", 1),
					r.define("FromArchive", "boolean", 1),
					"number" == typeof e || P.isLong(e))
				)
					r.from(e);
				else if (void 0 !== e) {
					var o = 0;
					for (e = qh(e); o < e.length; o++) {
						var i = $a(e[o], 2);
						r.set(i[0], i[1]);
					}
				}
				return r;
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "isTextMessage",
						value: function () {
							return this.assert("MessageType", [
								"PeerTextMessage",
								"ChannelTextMessage",
								"VendorTextMessage",
							]);
						},
					},
					{
						key: "isRawMessage",
						value: function () {
							return this.assert("MessageType", [
								"ChannelRawMessage",
								"PeerRawMessage",
								"VendorRawMessage",
							]);
						},
					},
					{
						key: "isRawPeerMessage",
						value: function () {
							return this.assert("MessageType", "PeerRawMessage");
						},
					},
					{
						key: "isRawChannelMessage",
						value: function () {
							return this.assert(
								"MessageType",
								"ChannelRawMessage"
							);
						},
					},
					{
						key: "isPeerTextMessage",
						value: function () {
							return this.assert(
								"MessageType",
								"PeerTextMessage"
							);
						},
					},
					{
						key: "isChannelTextMessage",
						value: function () {
							return this.assert(
								"MessageType",
								"ChannelTextMessage"
							);
						},
					},
					{
						key: "isInvitation",
						value: function (e) {
							var t = this;
							return void 0 !== e
								? this.assert("MessageType", e)
								: Yf(ft).some(function (e) {
										return t.assert("MessageType", e);
								  });
						},
					},
					{
						key: "isPeerMessage",
						value: function () {
							return this.assert("MessageType", [
								"PeerTextMessage",
								"PeerRawMessage",
							]);
						},
					},
					{
						key: "isZlibCompressed",
						value: function () {
							return this.assert("CompressionMethod", "Zlib");
						},
					},
					{
						key: "isFromCache",
						value: function () {
							return this.assert("FromCache", !0);
						},
					},
					{
						key: "isBufferedMessage",
						value: function () {
							return this.assert("BufferedMessage", !0);
						},
					},
					{
						key: "getInvitationType",
						value: function () {
							if (!this.isInvitation())
								throw new TypeError(
									"cannot get InvitationType of a normal message type"
								);
							return this.typeOf("MessageType");
						},
					},
				]),
				t
			);
		})(dt),
		CE = (function (e) {
			function t(e) {
				return (
					va(this, t),
					x(
						z((e = n.call(this, e, "ChatManager"))),
						"dialogueLru",
						new xz(void 0, { maxlen: 1e4, ttl: 1e4 })
					),
					e
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "getChatInfo",
						value: function (e) {
							var t = this.dialogueLru.get(e);
							if ((this.dialogueLru.prune(), t)) {
								var n = t.dialogue,
									r = {
										dialogue: n,
										sequence: (t = t.sequence.add(1)),
									};
								return (
									this.dialogueLru.set(e, {
										dialogue: n,
										sequence: t,
									}),
									r
								);
							}
							return (
								(n = {
									dialogue: nh(),
									sequence: P.fromNumber(1, !0),
								}),
								this.dialogueLru.set(e, n),
								n
							);
						},
					},
				]),
				t
			);
		})(sc()),
		G = {};
	"object" == ("undefined" == typeof module ? "undefined" : qa(module)) &&
		(module.exports = G),
		(G.parse = function (e, t) {
			var n,
				r = G.bin.readUshort,
				o = G.bin.readUint,
				i = {};
			for (n = (e = new Uint8Array(e)).length - 4; 101010256 != o(e, n); )
				n--;
			var s = r(e, (n = n + 4 + 4));
			r(e, (n += 2)), o(e, (n += 2)), (n = o(e, (n += 4)));
			for (var a = 0; a < s; a++) {
				o(e, n), (n += 4), (n += 4), (n += 4), o(e, (n += 4));
				var c = o(e, (n += 4)),
					u = o(e, (n += 4)),
					l = r(e, (n += 4)),
					f = r(e, n + 2),
					h = r(e, n + 4);
				n += 6;
				var p = o(e, (n += 8));
				(n += 4), (n += l + f + h), G._readLocal(e, p, i, c, u, t);
			}
			return i;
		}),
		(G._readLocal = function (e, t, n, r, o, i) {
			var s = G.bin.readUshort,
				a = G.bin.readUint;
			a(e, t), s(e, (t += 4)), s(e, (t += 2));
			var c = s(e, (t += 2));
			a(e, (t += 2)), a(e, (t += 4)), (a = s(e, (t = t + 4 + 8)));
			var u = s(e, (t += 2));
			if (((t += 2), (s = G.bin.readUTF8(e, t, a)), (t = t + a + u), i))
				n[s] = { size: o, csize: r };
			else if (((e = new Uint8Array(e.buffer, t)), 0 == c))
				n[s] = new Uint8Array(e.buffer.slice(t, t + r));
			else {
				if (8 != c) throw "unknown compression method: " + c;
				(t = new Uint8Array(o)), G.inflateRaw(e, t), (n[s] = t);
			}
		}),
		(G.inflateRaw = function (e, t) {
			return G.F.inflate(e, t);
		}),
		(G.inflate = function (e, t) {
			return (
				e[0],
				e[1],
				G.inflateRaw(
					new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 2),
					t
				)
			);
		}),
		(G.deflate = function (e, t) {
			null == t && (t = { level: 6 });
			var n = 0,
				r = new Uint8Array(50 + Math.floor(1.1 * e.length));
			return (
				(r[n] = 120),
				(r[n + 1] = 156),
				(n = G.F.deflateRaw(e, r, n + 2, t.level)),
				(e = G.adler(e, 0, e.length)),
				(r[n + 0] = (e >>> 24) & 255),
				(r[n + 1] = (e >>> 16) & 255),
				(r[n + 2] = (e >>> 8) & 255),
				(r[n + 3] = (e >>> 0) & 255),
				new Uint8Array(r.buffer, 0, n + 4)
			);
		}),
		(G.deflateRaw = function (e, t) {
			null == t && (t = { level: 6 });
			var n = new Uint8Array(50 + Math.floor(1.1 * e.length)),
				r = G.F.deflateRaw(e, n, r, t.level);
			return new Uint8Array(n.buffer, 0, r);
		}),
		(G.encode = function (e, t) {
			null == t && (t = !1);
			var n,
				r = 0,
				o = G.bin.writeUint,
				i = G.bin.writeUshort,
				s = {};
			for (n in e) {
				var a = !G._noNeed(n) && !t,
					c = e[n],
					u = G.crc.crc(c, 0, c.length);
				s[n] = {
					cpr: a,
					usize: c.length,
					crc: u,
					file: a ? G.deflateRaw(c) : c,
				};
			}
			for (n in s)
				r += s[n].file.length + 30 + 46 + 2 * G.bin.sizeUTF8(n);
			for (n in ((e = new Uint8Array(r + 22)), (t = 0), (c = []), s))
				(u = s[n]), c.push(t), (t = G._writeHeader(e, t, n, u, 0));
			for (n in ((r = 0), (a = t), s))
				(u = s[n]),
					c.push(t),
					(t = G._writeHeader(e, t, n, u, 1, c[r++]));
			return (
				(s = t - a),
				o(e, t, 101010256),
				i(e, (t = t + 4 + 4), r),
				i(e, (t += 2), r),
				o(e, (t += 2), s),
				o(e, t + 4, a),
				e.buffer
			);
		}),
		(G._noNeed = function (e) {
			return (
				(e = e.split(".").pop().toLowerCase()),
				-1 != "png,jpg,jpeg,zip".indexOf(e)
			);
		}),
		(G._writeHeader = function (e, t, n, r, o, i) {
			var s = G.bin.writeUint,
				a = G.bin.writeUshort,
				c = r.file;
			return (
				s(e, t, 0 == o ? 67324752 : 33639248),
				(t += 4),
				1 == o && (t += 2),
				a(e, t, 20),
				a(e, (t += 2), 0),
				a(e, (t += 2), r.cpr ? 8 : 0),
				s(e, (t += 2), 0),
				s(e, (t += 4), r.crc),
				s(e, (t += 4), c.length),
				s(e, (t += 4), r.usize),
				a(e, (t += 4), G.bin.sizeUTF8(n)),
				a(e, (t += 2), 0),
				(t += 2),
				1 == o && (s(e, (t = t + 2 + 2 + 6), i), (t += 4)),
				(t += n = G.bin.writeUTF8(e, t, n)),
				0 == o && (e.set(c, t), (t += c.length)),
				t
			);
		}),
		(G.crc = {
			table: (function () {
				for (var e = new Uint32Array(256), t = 0; 256 > t; t++) {
					for (var n = t, r = 0; 8 > r; r++)
						n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
					e[t] = n;
				}
				return e;
			})(),
			update: function (e, t, n, r) {
				for (var o = 0; o < r; o++)
					e = G.crc.table[255 & (e ^ t[n + o])] ^ (e >>> 8);
				return e;
			},
			crc: function (e, t, n) {
				return 4294967295 ^ G.crc.update(4294967295, e, t, n);
			},
		}),
		(G.adler = function (e, t, n) {
			var r = 1,
				o = 0,
				i = t;
			for (t += n; i < t; ) {
				for (n = Math.min(i + 5552, t); i < n; ) o += r += e[i++];
				(r %= 65521), (o %= 65521);
			}
			return (o << 16) | r;
		}),
		(G.bin = {
			readUshort: function (e, t) {
				return e[t] | (e[t + 1] << 8);
			},
			writeUshort: function (e, t, n) {
				(e[t] = 255 & n), (e[t + 1] = (n >> 8) & 255);
			},
			readUint: function (e, t) {
				return (
					16777216 * e[t + 3] +
					((e[t + 2] << 16) | (e[t + 1] << 8) | e[t])
				);
			},
			writeUint: function (e, t, n) {
				(e[t] = 255 & n),
					(e[t + 1] = (n >> 8) & 255),
					(e[t + 2] = (n >> 16) & 255),
					(e[t + 3] = (n >> 24) & 255);
			},
			readASCII: function (e, t, n) {
				for (var r = "", o = 0; o < n; o++)
					r += String.fromCharCode(e[t + o]);
				return r;
			},
			writeASCII: function (e, t, n) {
				for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r);
			},
			pad: function (e) {
				return 2 > e.length ? "0" + e : e;
			},
			readUTF8: function (e, t, n) {
				for (var r, o = "", i = 0; i < n; i++)
					o += "%" + G.bin.pad(e[t + i].toString(16));
				try {
					r = decodeURIComponent(o);
				} catch (r) {
					return G.bin.readASCII(e, t, n);
				}
				return r;
			},
			writeUTF8: function (e, t, n) {
				for (var r = n.length, o = 0, i = 0; i < r; i++) {
					var s = n.charCodeAt(i);
					if (0 == (4294967168 & s)) (e[t + o] = s), o++;
					else if (0 == (4294965248 & s))
						(e[t + o] = 192 | (s >> 6)),
							(e[t + o + 1] = 128 | ((s >> 0) & 63)),
							(o += 2);
					else if (0 == (4294901760 & s))
						(e[t + o] = 224 | (s >> 12)),
							(e[t + o + 1] = 128 | ((s >> 6) & 63)),
							(e[t + o + 2] = 128 | ((s >> 0) & 63)),
							(o += 3);
					else {
						if (0 != (4292870144 & s)) throw "e";
						(e[t + o] = 240 | (s >> 18)),
							(e[t + o + 1] = 128 | ((s >> 12) & 63)),
							(e[t + o + 2] = 128 | ((s >> 6) & 63)),
							(e[t + o + 3] = 128 | ((s >> 0) & 63)),
							(o += 4);
					}
				}
				return o;
			},
			sizeUTF8: function (e) {
				for (var t = e.length, n = 0, r = 0; r < t; r++) {
					var o = e.charCodeAt(r);
					if (0 == (4294967168 & o)) n++;
					else if (0 == (4294965248 & o)) n += 2;
					else if (0 == (4294901760 & o)) n += 3;
					else {
						if (0 != (4292870144 & o)) throw "e";
						n += 4;
					}
				}
				return n;
			},
		}),
		(G.F = {}),
		(G.F.deflateRaw = function (e, t, n, r) {
			var o = [
					[0, 0, 0, 0, 0],
					[4, 4, 8, 4, 0],
					[4, 5, 16, 8, 0],
					[4, 6, 16, 16, 0],
					[4, 10, 16, 32, 0],
					[8, 16, 32, 32, 0],
					[8, 16, 128, 128, 0],
					[8, 32, 128, 256, 0],
					[32, 128, 258, 1024, 1],
					[32, 258, 258, 4096, 1],
				][r],
				i = G.F.U,
				s = G.F._goodIndex;
			G.F._hash;
			var a = G.F._putsE,
				c = 0;
			n <<= 3;
			var u = 0,
				l = e.length;
			if (0 == r) {
				for (; c < l; ) {
					var f = Math.min(65535, l - c);
					a(t, n, c + f == l ? 1 : 0),
						(n = G.F._copyExact(e, c, f, t, n + 8)),
						(c += f);
				}
				return n >>> 3;
			}
			(a = i.lits), (r = i.strt);
			var h = i.prev,
				p = 0,
				d = 0,
				b = 0,
				g = 0,
				v = 0;
			for (2 < l && (r[(v = G.F._hash(e, 0))] = 0), c = 0; c < l; c++) {
				if (((f = v), c + 1 < l - 2)) {
					v = G.F._hash(e, c + 1);
					var y = (c + 1) & 32767;
					(h[y] = r[v]), (r[v] = y);
				}
				if (u <= c) {
					if (
						((14e3 < p || 26697 < d) &&
							100 < l - c &&
							(u < c && ((a[p] = c - u), (p += 2), (u = c)),
							(n = G.F._writeBlock(
								c == l - 1 || u == l ? 1 : 0,
								a,
								p,
								g,
								e,
								b,
								c - b,
								t,
								n
							)),
							(p = d = g = 0),
							(b = c)),
						(y = 0),
						c < l - 2 &&
							(y = G.F._bestMatch(
								e,
								c,
								h,
								f,
								Math.min(o[2], l - c),
								o[3]
							)),
						0 != y)
					) {
						(f = y >>> 16), (y &= 65535);
						var m = s(f, i.of0);
						i.lhst[257 + m]++;
						var E = s(y, i.df0);
						i.dhst[E]++,
							(g += i.exb[m] + i.dxb[E]),
							(a[p] = (f << 23) | (c - u)),
							(a[p + 1] = (y << 16) | (m << 8) | E),
							(p += 2),
							(u = c + f);
					} else i.lhst[e[c]]++;
					d++;
				}
			}
			for (
				(b == c && 0 != e.length) ||
				(u < c && ((a[p] = c - u), (p += 2)),
				(n = G.F._writeBlock(1, a, p, g, e, b, c - b, t, n)));
				0 != (7 & n);

			)
				n++;
			return n >>> 3;
		}),
		(G.F._bestMatch = function (e, t, n, r, o, i) {
			var s = 32767 & t,
				a = n[s],
				c = (s - a + 32768) & 32767;
			if (a == s || r != G.F._hash(e, t - c)) return 0;
			for (
				var u = (r = 0), l = Math.min(32767, t);
				c <= l && 0 != --i && a != s;

			) {
				if (
					(0 == r || e[t + r] == e[t + r - c]) &&
					(s = G.F._howLong(e, t, c)) > r
				) {
					if (((u = c), (r = s) >= o)) break;
					c + 2 < s && (s = c + 2);
					for (var f = 0, h = 0; h < s - 2; h++) {
						var p = (t - c + h + 32768) & 32767,
							d = (p - n[p] + 32768) & 32767;
						d > f && ((f = d), (a = p));
					}
				}
				c += ((s = a) - (a = n[s]) + 32768) & 32767;
			}
			return (r << 16) | u;
		}),
		(G.F._howLong = function (e, t, n) {
			if (
				e[t] != e[t - n] ||
				e[t + 1] != e[t + 1 - n] ||
				e[t + 2] != e[t + 2 - n]
			)
				return 0;
			var r = t,
				o = Math.min(e.length, t + 258);
			for (t += 3; t < o && e[t] == e[t - n]; ) t++;
			return t - r;
		}),
		(G.F._hash = function (e, t) {
			return (((e[t] << 8) | e[t + 1]) + (e[t + 2] << 4)) & 65535;
		}),
		(G.saved = 0),
		(G.F._writeBlock = function (e, t, n, r, o, i, s, a, c) {
			var u = G.F.U,
				l = G.F._putsF,
				f = G.F._putsE;
			u.lhst[256]++;
			var h = G.F.getTrees(),
				p = h[0],
				d = h[1],
				b = h[2],
				g = h[3],
				v = h[4],
				y = h[5],
				m = h[6];
			h = h[7];
			var E =
					32 +
					(0 == ((c + 3) & 7) ? 0 : 8 - ((c + 3) & 7)) +
					(s << 3),
				w =
					r +
					G.F.contSize(u.fltree, u.lhst) +
					G.F.contSize(u.fdtree, u.dhst);
			(r =
				r +
				G.F.contSize(u.ltree, u.lhst) +
				G.F.contSize(u.dtree, u.dhst)),
				(r +=
					14 +
					3 * y +
					G.F.contSize(u.itree, u.ihst) +
					(2 * u.ihst[16] + 3 * u.ihst[17] + 7 * u.ihst[18]));
			for (var O = 0; 286 > O; O++) u.lhst[O] = 0;
			for (O = 0; 30 > O; O++) u.dhst[O] = 0;
			for (O = 0; 19 > O; O++) u.ihst[O] = 0;
			if (
				((E = E < w && E < r ? 0 : w < r ? 1 : 2),
				l(a, c, e),
				l(a, c + 1, E),
				(c += 3),
				0 == E)
			) {
				for (; 0 != (7 & c); ) c++;
				c = G.F._copyExact(o, i, s, a, c);
			} else {
				if (1 == E)
					var _ = u.fltree,
						k = u.fdtree;
				if (2 == E) {
					for (
						G.F.makeCodes(u.ltree, p),
							G.F.revCodes(u.ltree, p),
							G.F.makeCodes(u.dtree, d),
							G.F.revCodes(u.dtree, d),
							G.F.makeCodes(u.itree, b),
							G.F.revCodes(u.itree, b),
							_ = u.ltree,
							k = u.dtree,
							f(a, c, g - 257),
							f(a, (c += 5), v - 1),
							f(a, (c += 5), y - 4),
							c += 4,
							e = 0;
						e < y;
						e++
					)
						f(a, c + 3 * e, u.itree[1 + (u.ordr[e] << 1)]);
					(c = G.F._codeTiny(m, u.itree, a, c + 3 * y)),
						(c = G.F._codeTiny(h, u.itree, a, c));
				}
				for (y = 0; y < n; y += 2) {
					for (m = (e = t[y]) >>> 23, e = i + (8388607 & e); i < e; )
						c = G.F._writeLit(o[i++], _, a, c);
					0 != m &&
						((e = (p = t[y + 1]) >> 16),
						(s = (p >> 8) & 255),
						(p &= 255),
						f(
							a,
							(c = G.F._writeLit(257 + s, _, a, c)),
							m - u.of0[s]
						),
						(c += u.exb[s]),
						l(a, (c = G.F._writeLit(p, k, a, c)), e - u.df0[p]),
						(c += u.dxb[p]),
						(i += m));
				}
				c = G.F._writeLit(256, _, a, c);
			}
			return c;
		}),
		(G.F._copyExact = function (e, t, n, r, o) {
			var i = o >>> 3;
			return (
				(r[i] = n),
				(r[i + 1] = n >>> 8),
				(r[i + 2] = 255 - r[i]),
				(r[i + 3] = 255 - r[i + 1]),
				(i += 4),
				r.set(new Uint8Array(e.buffer, t, n), i),
				o + ((n + 4) << 3)
			);
		}),
		(G.F.getTrees = function () {
			for (
				var e = G.F.U,
					t = G.F._hufTree(e.lhst, e.ltree, 15),
					n = G.F._hufTree(e.dhst, e.dtree, 15),
					r = [],
					o = G.F._lenCodes(e.ltree, r),
					i = [],
					s = G.F._lenCodes(e.dtree, i),
					a = 0;
				a < r.length;
				a += 2
			)
				e.ihst[r[a]]++;
			for (a = 0; a < i.length; a += 2) e.ihst[i[a]]++;
			a = G.F._hufTree(e.ihst, e.itree, 7);
			for (var c = 19; 4 < c && 0 == e.itree[1 + (e.ordr[c - 1] << 1)]; )
				c--;
			return [t, n, a, o, s, c, r, i];
		}),
		(G.F.getSecond = function (e) {
			for (var t = [], n = 0; n < e.length; n += 2) t.push(e[n + 1]);
			return t;
		}),
		(G.F.nonZero = function (e) {
			for (var t = "", n = 0; n < e.length; n += 2)
				0 != e[n + 1] && (t += (n >> 1) + ",");
			return t;
		}),
		(G.F.contSize = function (e, t) {
			for (var n = 0, r = 0; r < t.length; r++)
				n += t[r] * e[1 + (r << 1)];
			return n;
		}),
		(G.F._codeTiny = function (e, t, n, r) {
			for (var o = 0; o < e.length; o += 2) {
				var i = e[o],
					s = e[o + 1];
				r = G.F._writeLit(i, t, n, r);
				var a = 16 == i ? 2 : 17 == i ? 3 : 7;
				15 < i && (G.F._putsE(n, r, s, a), (r += a));
			}
			return r;
		}),
		(G.F._lenCodes = function (e, t) {
			for (var n = e.length; 2 != n && 0 == e[n - 1]; ) n -= 2;
			for (var r = 0; r < n; r += 2) {
				var o = e[r + 1],
					i = r + 3 < n ? e[r + 3] : -1,
					s = r + 5 < n ? e[r + 5] : -1,
					a = 0 == r ? -1 : e[r - 1];
				if (0 == o && i == o && s == o) {
					for (i = r + 5; i + 2 < n && e[i + 2] == o; ) i += 2;
					11 > (o = Math.min((i + 1 - r) >>> 1, 138))
						? t.push(17, o - 3)
						: t.push(18, o - 11),
						(r += 2 * o - 2);
				} else if (o == a && i == o && s == o) {
					for (i = r + 5; i + 2 < n && e[i + 2] == o; ) i += 2;
					(o = Math.min((i + 1 - r) >>> 1, 6)),
						t.push(16, o - 3),
						(r += 2 * o - 2);
				} else t.push(o, 0);
			}
			return n >>> 1;
		}),
		(G.F._hufTree = function (e, t, n) {
			var r = [],
				o = e.length,
				i = t.length,
				s = 0;
			for (s = 0; s < i; s += 2) (t[s] = 0), (t[s + 1] = 0);
			for (s = 0; s < o; s++) 0 != e[s] && r.push({ lit: s, f: e[s] });
			if (((e = r.length), (o = r.slice(0)), 0 == e)) return 0;
			if (1 == e)
				return (
					(t[1 + ((n = r[0].lit) << 1)] = 1),
					(t[1 + ((0 == n ? 1 : 0) << 1)] = 1)
				);
			r.sort(function (e, t) {
				return e.f - t.f;
			}),
				(s = r[0]),
				(i = r[1]);
			var a = 0,
				c = 1,
				u = 2;
			for (
				r[0] = { lit: -1, f: s.f + i.f, l: s, r: i, d: 0 };
				c != e - 1;

			)
				(s = a != c && (u == e || r[a].f < r[u].f) ? r[a++] : r[u++]),
					(i =
						a != c && (u == e || r[a].f < r[u].f)
							? r[a++]
							: r[u++]),
					(r[c++] = { lit: -1, f: s.f + i.f, l: s, r: i });
			for (
				(r = G.F.setDepth(r[c - 1], 0)) > n &&
					(G.F.restrictDepth(o, n, r), (r = n)),
					s = 0;
				s < e;
				s++
			)
				t[1 + (o[s].lit << 1)] = o[s].d;
			return r;
		}),
		(G.F.setDepth = function (e, t) {
			return -1 != e.lit
				? (e.d = t)
				: Math.max(G.F.setDepth(e.l, t + 1), G.F.setDepth(e.r, t + 1));
		}),
		(G.F.restrictDepth = function (e, t, n) {
			var r = 0,
				o = 1 << (n - t),
				i = 0;
			for (
				e.sort(function (e, t) {
					return t.d == e.d ? e.f - t.f : t.d - e.d;
				}),
					r = 0;
				r < e.length && e[r].d > t;
				r++
			) {
				var s = e[r].d;
				(e[r].d = t), (i += o - (1 << (n - s)));
			}
			for (i >>>= n - t; 0 < i; )
				(s = e[r].d) < t ? (e[r].d++, (i -= 1 << (t - s - 1))) : r++;
			for (; 0 <= r; r--) e[r].d == t && 0 > i && (e[r].d--, i++);
			0 != i && console.log("debt left");
		}),
		(G.F._goodIndex = function (e, t) {
			var n = 0;
			return (
				t[16 | n] <= e && (n |= 16),
				t[8 | n] <= e && (n |= 8),
				t[4 | n] <= e && (n |= 4),
				t[2 | n] <= e && (n |= 2),
				t[1 | n] <= e && (n |= 1),
				n
			);
		}),
		(G.F._writeLit = function (e, t, n, r) {
			return G.F._putsF(n, r, t[e << 1]), r + t[1 + (e << 1)];
		}),
		(G.F.inflate = function (e, t) {
			var n = Uint8Array;
			if (3 == e[0] && 0 == e[1]) return t || new n(0);
			var r = G.F,
				o = r._bitsF,
				i = r._bitsE,
				s = r._decodeTiny,
				a = r.makeCodes,
				c = r.codes2map,
				u = r._get17,
				l = r.U,
				f = null == t;
			f && (t = new n((e.length >>> 2) << 3));
			for (var h, p, d, b, g = 0, v = 0, y = (p = 0), m = 0; 0 == g; )
				if (((g = o(e, m, 1)), (h = o(e, m + 1, 2)), (m += 3), 0 == h))
					0 != (7 & m) && (m += 8 - (7 & m)),
						(h = e[(m = 4 + (m >>> 3)) - 4] | (e[m - 3] << 8)),
						f && (t = G.F._check(t, y + h)),
						t.set(new n(e.buffer, e.byteOffset + m, h), y),
						(m = (m + h) << 3),
						(y += h);
				else {
					if (
						(f && (t = G.F._check(t, y + 131072)),
						1 == h &&
							((d = l.flmap), (b = l.fdmap), (v = 511), (p = 31)),
						2 == h)
					) {
						for (
							p = i(e, m, 5) + 257,
								h = i(e, m + 5, 5) + 1,
								d = i(e, m + 10, 4) + 4,
								m += 14,
								b = 0;
							38 > b;
							b += 2
						)
							(l.itree[b] = 0), (l.itree[b + 1] = 0);
						for (v = 1, b = 0; b < d; b++) {
							var E = i(e, m + 3 * b, 3);
							(l.itree[1 + (l.ordr[b] << 1)] = E),
								E > v && (v = E);
						}
						(m += 3 * d),
							a(l.itree, v),
							c(l.itree, v, l.imap),
							(d = l.lmap),
							(b = l.dmap),
							(m = s(l.imap, (1 << v) - 1, p + h, e, m, l.ttree)),
							(v =
								(1 <<
									(E = r._copyOut(l.ttree, 0, p, l.ltree))) -
								1),
							(p =
								(1 <<
									(h = r._copyOut(l.ttree, p, h, l.dtree))) -
								1),
							a(l.ltree, E),
							c(l.ltree, E, d),
							a(l.dtree, h),
							c(l.dtree, h, b);
					}
					for (;;)
						if (
							((m += 15 & (h = d[u(e, m) & v])),
							0 == (E = h >>> 4) >>> 8)
						)
							t[y++] = E;
						else {
							if (256 == E) break;
							(h = y + E - 254),
								264 < E &&
									((h =
										y +
										((E = l.ldef[E - 257]) >>> 3) +
										i(e, m, 7 & E)),
									(m += 7 & E)),
								(m += 15 & (E = b[u(e, m) & p]));
							var w =
								((E = l.ddef[E >>> 4]) >>> 4) + o(e, m, 15 & E);
							for (
								m += 15 & E,
									f && (t = G.F._check(t, y + 131072));
								y < h;

							)
								(t[y] = t[y++ - w]),
									(t[y] = t[y++ - w]),
									(t[y] = t[y++ - w]),
									(t[y] = t[y++ - w]);
							y = h;
						}
				}
			return t.length == y ? t : t.slice(0, y);
		}),
		(G.F._check = function (e, t) {
			var n = e.length;
			return t <= n
				? e
				: ((t = new Uint8Array(Math.max(n << 1, t))).set(e, 0), t);
		}),
		(G.F._decodeTiny = function (e, t, n, r, o, i) {
			for (var s = G.F._bitsE, a = G.F._get17, c = 0; c < n; ) {
				var u = e[a(r, o) & t];
				o += 15 & u;
				var l = u >>> 4;
				if (15 >= l) (i[c] = l), c++;
				else {
					var f = (u = 0);
					for (
						16 == l
							? ((f = 3 + s(r, o, 2)), (o += 2), (u = i[c - 1]))
							: 17 == l
							? ((f = 3 + s(r, o, 3)), (o += 3))
							: 18 == l && ((f = 11 + s(r, o, 7)), (o += 7)),
							l = c + f;
						c < l;

					)
						(i[c] = u), c++;
				}
			}
			return o;
		}),
		(G.F._copyOut = function (e, t, n, r) {
			for (var o = 0, i = 0, s = r.length >>> 1; i < n; ) {
				var a = e[i + t];
				(r[i << 1] = 0), (r[1 + (i << 1)] = a), a > o && (o = a), i++;
			}
			for (; i < s; ) (r[i << 1] = 0), (r[1 + (i << 1)] = 0), i++;
			return o;
		}),
		(G.F.makeCodes = function (e, t) {
			var n,
				r,
				o = G.F.U,
				i = e.length,
				s = o.bl_count;
			for (n = 0; n <= t; n++) s[n] = 0;
			for (n = 1; n < i; n += 2) s[e[n]]++;
			for (o = o.next_code, n = 0, s[0] = 0, r = 1; r <= t; r++)
				(n = (n + s[r - 1]) << 1), (o[r] = n);
			for (t = 0; t < i; t += 2)
				0 != (s = e[t + 1]) && ((e[t] = o[s]), o[s]++);
		}),
		(G.F.codes2map = function (e, t, n) {
			for (var r = e.length, o = G.F.U.rev15, i = 0; i < r; i += 2)
				if (0 != e[i + 1]) {
					var s = e[i + 1],
						a = ((i >> 1) << 4) | s,
						c = t - s;
					for (c = (s = e[i] << c) + (1 << c); s != c; )
						(n[o[s] >>> (15 - t)] = a), s++;
				}
		}),
		(G.F.revCodes = function (e, t) {
			for (var n = G.F.U.rev15, r = 15 - t, o = 0; o < e.length; o += 2)
				e[o] = n[e[o] << (t - e[o + 1])] >>> r;
		}),
		(G.F._putsE = function (e, t, n) {
			(n <<= 7 & t), (e[(t >>>= 3)] |= n), (e[t + 1] |= n >>> 8);
		}),
		(G.F._putsF = function (e, t, n) {
			(n <<= 7 & t),
				(e[(t >>>= 3)] |= n),
				(e[t + 1] |= n >>> 8),
				(e[t + 2] |= n >>> 16);
		}),
		(G.F._bitsE = function (e, t, n) {
			return (
				((e[t >>> 3] | (e[1 + (t >>> 3)] << 8)) >>> (7 & t)) &
				((1 << n) - 1)
			);
		}),
		(G.F._bitsF = function (e, t, n) {
			return (
				((e[t >>> 3] |
					(e[1 + (t >>> 3)] << 8) |
					(e[2 + (t >>> 3)] << 16)) >>>
					(7 & t)) &
				((1 << n) - 1)
			);
		}),
		(G.F._get17 = function (e, t) {
			return (
				(e[t >>> 3] |
					(e[1 + (t >>> 3)] << 8) |
					(e[2 + (t >>> 3)] << 16)) >>>
				(7 & t)
			);
		}),
		(G.F._get25 = function (e, t) {
			return (
				(e[t >>> 3] |
					(e[1 + (t >>> 3)] << 8) |
					(e[2 + (t >>> 3)] << 16) |
					(e[3 + (t >>> 3)] << 24)) >>>
				(7 & t)
			);
		}),
		(G.F.U = (function () {
			var e = Uint16Array,
				t = Uint32Array;
			return {
				next_code: new e(16),
				bl_count: new e(16),
				ordr: [
					16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
					1, 15,
				],
				of0: [
					3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
					43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999,
					999, 999,
				],
				exb: [
					0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
					4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
				],
				ldef: new e(32),
				df0: [
					1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
					257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
					8193, 12289, 16385, 24577, 65535, 65535,
				],
				dxb: [
					0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8,
					9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0,
				],
				ddef: new t(32),
				flmap: new e(512),
				fltree: [],
				fdmap: new e(32),
				fdtree: [],
				lmap: new e(32768),
				ltree: [],
				ttree: [],
				dmap: new e(32768),
				dtree: [],
				imap: new e(512),
				itree: [],
				rev15: new e(32768),
				lhst: new t(286),
				dhst: new t(30),
				ihst: new t(19),
				lits: new t(15e3),
				strt: new e(65536),
				prev: new e(32768),
			};
		})()),
		(function () {
			function e(e, t, n) {
				for (; 0 != t--; ) e.push(0, n);
			}
			for (var t = G.F.U, n = 0; 32768 > n; n++) {
				var r = n;
				(r =
					((4278255360 &
						(r =
							((4042322160 &
								(r =
									((3435973836 &
										(r =
											((2863311530 & r) >>> 1) |
											((1431655765 & r) << 1))) >>>
										2) |
									((858993459 & r) << 2))) >>>
								4) |
							((252645135 & r) << 4))) >>>
						8) |
					((16711935 & r) << 8)),
					(t.rev15[n] = ((r >>> 16) | (r << 16)) >>> 17);
			}
			for (n = 0; 32 > n; n++)
				(t.ldef[n] = (t.of0[n] << 3) | t.exb[n]),
					(t.ddef[n] = (t.df0[n] << 4) | t.dxb[n]);
			e(t.fltree, 144, 8),
				e(t.fltree, 112, 9),
				e(t.fltree, 24, 7),
				e(t.fltree, 8, 8),
				G.F.makeCodes(t.fltree, 9),
				G.F.codes2map(t.fltree, 9, t.flmap),
				G.F.revCodes(t.fltree, 9),
				e(t.fdtree, 32, 5),
				G.F.makeCodes(t.fdtree, 5),
				G.F.codes2map(t.fdtree, 5, t.fdmap),
				G.F.revCodes(t.fdtree, 5),
				e(t.itree, 19, 0),
				e(t.ltree, 286, 0),
				e(t.dtree, 30, 0),
				e(t.ttree, 320, 0);
		})();
	var DE =
			Array.isArray ||
			function (e) {
				return e && "number" == typeof e.length;
			},
		EE = Object.defineProperty({ isArray: DE }, "__esModule", {
			value: !0,
		}),
		FE = Object.defineProperty(
			{
				isObject: function (e) {
					return null !== e && "object" === qa(e);
				},
			},
			"__esModule",
			{ value: !0 }
		),
		GE = Object.defineProperty(
			{
				isFunction: function (e) {
					return "function" == typeof e;
				},
			},
			"__esModule",
			{ value: !0 }
		),
		HE = (function () {
			function e(e) {
				return (
					Error.call(this),
					(this.message = e
						? e.length +
						  " errors occurred during unsubscription:\n" +
						  e
								.map(function (e, t) {
									return t + 1 + ") " + e.toString();
								})
								.join("\n  ")
						: ""),
					(this.name = "UnsubscriptionError"),
					(this.errors = e),
					this
				);
			}
			return (e.prototype = Object.create(Error.prototype)), e;
		})(),
		uh = Object.defineProperty({ UnsubscriptionError: HE }, "__esModule", {
			value: !0,
		}),
		IE = (function () {
			function e(e) {
				(this.closed = !1),
					(this._subscriptions = this._parentOrParents = null),
					e &&
						((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
			}
			var t;
			return (
				(e.prototype.unsubscribe = function () {
					if (!this.closed) {
						var t = this._parentOrParents,
							n = this._ctorUnsubscribe,
							r = this._unsubscribe,
							o = this._subscriptions;
						if (
							((this.closed = !0),
							(this._subscriptions = this._parentOrParents =
								null),
							t instanceof e)
						)
							t.remove(this);
						else if (null !== t)
							for (var i = 0; i < t.length; ++i)
								t[i].remove(this);
						if (GE.isFunction(r)) {
							n && (this._unsubscribe = void 0);
							try {
								r.call(this);
							} catch (e) {
								var s =
									e instanceof uh.UnsubscriptionError
										? eo(e.errors)
										: [e];
							}
						}
						if (EE.isArray(o))
							for (i = -1, t = o.length; ++i < t; )
								if (((n = o[i]), FE.isObject(n)))
									try {
										n.unsubscribe();
									} catch (e) {
										(s = s || []),
											e instanceof uh.UnsubscriptionError
												? (s = s.concat(eo(e.errors)))
												: s.push(e);
									}
						if (s) throw new uh.UnsubscriptionError(s);
					}
				}),
				(e.prototype.add = function (t) {
					var n = t;
					if (!t) return e.EMPTY;
					switch (qa(t)) {
						case "function":
							n = new e(t);
						case "object":
							if (
								n === this ||
								n.closed ||
								"function" != typeof n.unsubscribe
							)
								return n;
							if (this.closed) return n.unsubscribe(), n;
							n instanceof e ||
								((t = n), ((n = new e())._subscriptions = [t]));
							break;
						default:
							throw Error(
								"unrecognized teardown " +
									t +
									" added to Subscription."
							);
					}
					if (null === (t = n._parentOrParents))
						n._parentOrParents = this;
					else if (t instanceof e) {
						if (t === this) return n;
						n._parentOrParents = [t, this];
					} else {
						if (-1 !== t.indexOf(this)) return n;
						t.push(this);
					}
					return (
						null === (t = this._subscriptions)
							? (this._subscriptions = [n])
							: t.push(n),
						n
					);
				}),
				(e.prototype.remove = function (e) {
					var t = this._subscriptions;
					t && -1 !== (e = t.indexOf(e)) && t.splice(e, 1);
				}),
				(e.EMPTY = (((t = new e()).closed = !0), t)),
				e
			);
		})(),
		JE = Object.defineProperty({ Subscription: IE }, "__esModule", {
			value: !0,
		}),
		KE =
			(Ya && Ya.__extends) ||
			(function () {
				var e = function (t, n) {
					return (e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t;
							}) ||
						function (e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
				};
				return function (t, n) {
					function r() {
						this.constructor = t;
					}
					e(t, n),
						(t.prototype =
							null === n
								? Object.create(n)
								: ((r.prototype = n.prototype), new r()));
				};
			})(),
		LE = (function (e) {
			function t(t, n) {
				return e.call(this) || this;
			}
			return (
				KE(t, e),
				(t.prototype.schedule = function (e, t) {
					return this;
				}),
				t
			);
		})(JE.Subscription),
		ME = Object.defineProperty({ Action: LE }, "__esModule", { value: !0 }),
		NE =
			(Ya && Ya.__extends) ||
			(function () {
				var e = function (t, n) {
					return (e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t;
							}) ||
						function (e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
				};
				return function (t, n) {
					function r() {
						this.constructor = t;
					}
					e(t, n),
						(t.prototype =
							null === n
								? Object.create(n)
								: ((r.prototype = n.prototype), new r()));
				};
			})(),
		gt = (function (e) {
			function t(t, n) {
				var r = e.call(this, t, n) || this;
				return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
			}
			return (
				NE(t, e),
				(t.prototype.schedule = function (e, t) {
					if ((void 0 === t && (t = 0), this.closed)) return this;
					(this.state = e), (e = this.id);
					var n = this.scheduler;
					return (
						null != e && (this.id = this.recycleAsyncId(n, e, t)),
						(this.pending = !0),
						(this.delay = t),
						(this.id =
							this.id || this.requestAsyncId(n, this.id, t)),
						this
					);
				}),
				(t.prototype.requestAsyncId = function (e, t, n) {
					return (
						void 0 === n && (n = 0),
						setInterval(e.flush.bind(e, this), n)
					);
				}),
				(t.prototype.recycleAsyncId = function (e, t, n) {
					if (
						(void 0 === n && (n = 0),
						null !== n && this.delay === n && !1 === this.pending)
					)
						return t;
					clearInterval(t);
				}),
				(t.prototype.execute = function (e, t) {
					return this.closed
						? Error("executing a cancelled action")
						: ((this.pending = !1),
						  (e = this._execute(e, t))
								? e
								: void (
										!1 === this.pending &&
										null != this.id &&
										(this.id = this.recycleAsyncId(
											this.scheduler,
											this.id,
											null
										))
								  ));
				}),
				(t.prototype._execute = function (e, t) {
					t = !1;
					var n = void 0;
					try {
						this.work(e);
					} catch (e) {
						(t = !0), (n = (!!e && e) || Error(e));
					}
					if (t) return this.unsubscribe(), n;
				}),
				(t.prototype._unsubscribe = function () {
					var e = this.id,
						t = this.scheduler,
						n = t.actions,
						r = n.indexOf(this);
					(this.state = this.work = null),
						(this.pending = !1),
						(this.scheduler = null),
						-1 !== r && n.splice(r, 1),
						null != e &&
							(this.id = this.recycleAsyncId(t, e, null)),
						(this.delay = null);
				}),
				t
			);
		})(ME.Action);
	Object.defineProperty({ AsyncAction: gt }, "__esModule", { value: !0 });
	var OE = (function () {
			function e(t, n) {
				void 0 === n && (n = e.now),
					(this.SchedulerAction = t),
					(this.now = n);
			}
			return (
				(e.prototype.schedule = function (e, t, n) {
					return (
						void 0 === t && (t = 0),
						new this.SchedulerAction(this, e).schedule(n, t)
					);
				}),
				(e.now = function () {
					return Date.now();
				}),
				e
			);
		})(),
		ht = Object.defineProperty({ Scheduler: OE }, "__esModule", {
			value: !0,
		}),
		PE =
			(Ya && Ya.__extends) ||
			(function () {
				var e = function (t, n) {
					return (e =
						Object.setPrototypeOf ||
						({ __proto__: [] } instanceof Array &&
							function (e, t) {
								e.__proto__ = t;
							}) ||
						function (e, t) {
							for (var n in t)
								t.hasOwnProperty(n) && (e[n] = t[n]);
						})(t, n);
				};
				return function (t, n) {
					function r() {
						this.constructor = t;
					}
					e(t, n),
						(t.prototype =
							null === n
								? Object.create(n)
								: ((r.prototype = n.prototype), new r()));
				};
			})(),
		it = (function (e) {
			function t(n, r) {
				void 0 === r && (r = ht.Scheduler.now);
				var o =
					e.call(this, n, function () {
						return t.delegate && t.delegate !== o
							? t.delegate.now()
							: r();
					}) || this;
				return (
					(o.actions = []), (o.active = !1), (o.scheduled = void 0), o
				);
			}
			return (
				PE(t, e),
				(t.prototype.schedule = function (n, r, o) {
					return (
						void 0 === r && (r = 0),
						t.delegate && t.delegate !== this
							? t.delegate.schedule(n, r, o)
							: e.prototype.schedule.call(this, n, r, o)
					);
				}),
				(t.prototype.flush = function (e) {
					var t = this.actions;
					if (this.active) t.push(e);
					else {
						var n;
						this.active = !0;
						do {
							if ((n = e.execute(e.state, e.delay))) break;
						} while ((e = t.shift()));
						if (((this.active = !1), n)) {
							for (; (e = t.shift()); ) e.unsubscribe();
							throw n;
						}
					}
				}),
				t
			);
		})(ht.Scheduler);
	Object.defineProperty({ AsyncScheduler: it }, "__esModule", { value: !0 });
	var QE = Fa("iterator"),
		Wl = !la(function () {
			var e = new URL("b?a=1&b=2&c=3", "http://a"),
				t = e.searchParams,
				n = "";
			return (
				(e.pathname = "c%20d"),
				t.forEach(function (e, r) {
					t.delete("b"), (n += r + e);
				}),
				!t.sort ||
					"http://a/c%20d?a=1&c=3" !== e.href ||
					"3" !== t.get("c") ||
					"a=1" !== String(new URLSearchParams("?a=1")) ||
					!t[QE] ||
					"a" !== new URL("https://a@b").username ||
					"b" !==
						new URLSearchParams(new URLSearchParams("a=b")).get(
							"a"
						) ||
					"xn--e1aybc" !== new URL("http://тест").host ||
					"#%D0%B1" !== new URL("http://a#б").hash ||
					"a1c3" !== n ||
					"x" !== new URL("http://x", void 0).host
			);
		}),
		RE = /[^\0-\u007E]/,
		SE = /[.\u3002\uFF0E\uFF61]/g,
		Ff = Math.floor,
		Xl = String.fromCharCode,
		jt = function (e) {
			var t = lg(e);
			if ("function" != typeof t)
				throw TypeError(String(e) + " is not iterable");
			return Ia(t.call(e));
		},
		kt = Pc("fetch"),
		Yl = Pc("Headers"),
		TE = Fa("iterator"),
		lt = cb.set,
		cc = cb.getterFor("URLSearchParams"),
		UE = cb.getterFor("URLSearchParamsIterator"),
		VE = /\+/g,
		mt = Array(4),
		WE = function (e) {
			try {
				return decodeURIComponent(e);
			} catch (t) {
				return e;
			}
		},
		nt = function (e) {
			var t = e.replace(VE, " ");
			e = 4;
			try {
				return decodeURIComponent(t);
			} catch (o) {
				for (; e; ) {
					var n = t.replace,
						r = e--;
					(r =
						mt[r - 1] ||
						(mt[r - 1] = RegExp(
							"((?:%[\\da-f]{2}){" + r + "})",
							"gi"
						))),
						(t = n.call(t, r, WE));
				}
				return t;
			}
		},
		ot = /[!'()~]|%20/g,
		XE = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
		},
		pt = function (e) {
			return XE[e];
		},
		qt = function (e, t) {
			if (t) {
				t = t.split("&");
				for (var n, r = 0; r < t.length; )
					(n = t[r++]).length &&
						((n = n.split("=")),
						e.push({ key: nt(n.shift()), value: nt(n.join("=")) }));
			}
		},
		YE = function (e) {
			(this.entries.length = 0), qt(this.entries, e);
		},
		Gf = function (e, t) {
			if (e < t) throw TypeError("Not enough arguments");
		},
		Zl = Wo(
			function (e, t) {
				lt(this, {
					type: "URLSearchParamsIterator",
					iterator: jt(cc(e).entries),
					kind: t,
				});
			},
			"Iterator",
			function () {
				var e = UE(this),
					t = e.kind,
					n = (e = e.iterator.next()).value;
				return (
					e.done ||
						(e.value =
							"keys" === t
								? n.key
								: "values" === t
								? n.value
								: [n.key, n.value]),
					e
				);
			}
		),
		Rg = function () {
			Ac(this, Rg, "URLSearchParams");
			var e,
				t,
				n,
				r = 0 < arguments.length ? arguments[0] : void 0,
				o = [];
			if (
				(lt(this, {
					type: "URLSearchParams",
					entries: o,
					updateURL: function () {},
					updateSearchParams: YE,
				}),
				void 0 !== r)
			)
				if (xa(r)) {
					var i = lg(r);
					if ("function" == typeof i)
						for (
							r = i.call(r), i = r.next;
							!(e = i.call(r)).done;

						) {
							var s = (e = jt(Ia(e.value))).next;
							if (
								(t = s.call(e)).done ||
								(n = s.call(e)).done ||
								!s.call(e).done
							)
								throw TypeError(
									"Expected sequence with length 2"
								);
							o.push({ key: t.value + "", value: n.value + "" });
						}
					else
						for (e in r)
							ka(r, e) && o.push({ key: e, value: r[e] + "" });
				} else
					qt(
						o,
						"string" == typeof r
							? "?" === r.charAt(0)
								? r.slice(1)
								: r
							: r + ""
					);
		},
		Bi = Rg.prototype;
	kf(
		Bi,
		{
			append: function (e, t) {
				Gf(arguments.length, 2);
				var n = cc(this);
				n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
			},
			delete: function (e) {
				Gf(arguments.length, 1);
				for (
					var t = cc(this), n = t.entries, r = e + "", o = 0;
					o < n.length;

				)
					n[o].key === r ? n.splice(o, 1) : o++;
				t.updateURL();
			},
			get: function (e) {
				Gf(arguments.length, 1);
				for (
					var t = cc(this).entries, n = e + "", r = 0;
					r < t.length;
					r++
				)
					if (t[r].key === n) return t[r].value;
				return null;
			},
			getAll: function (e) {
				Gf(arguments.length, 1);
				for (
					var t = cc(this).entries, n = e + "", r = [], o = 0;
					o < t.length;
					o++
				)
					t[o].key === n && r.push(t[o].value);
				return r;
			},
			has: function (e) {
				Gf(arguments.length, 1);
				for (
					var t = cc(this).entries, n = e + "", r = 0;
					r < t.length;

				)
					if (t[r++].key === n) return !0;
				return !1;
			},
			set: function (e, t) {
				Gf(arguments.length, 1);
				for (
					var n,
						r = cc(this),
						o = r.entries,
						i = !1,
						s = e + "",
						a = t + "",
						c = 0;
					c < o.length;
					c++
				)
					(n = o[c]).key === s &&
						(i ? o.splice(c--, 1) : ((i = !0), (n.value = a)));
				i || o.push({ key: s, value: a }), r.updateURL();
			},
			sort: function () {
				var e,
					t,
					n = cc(this),
					r = n.entries,
					o = r.slice();
				for (t = r.length = 0; t < o.length; t++) {
					var i = o[t];
					for (e = 0; e < t; e++)
						if (r[e].key > i.key) {
							r.splice(e, 0, i);
							break;
						}
					e === t && r.push(i);
				}
				n.updateURL();
			},
			forEach: function (e) {
				for (
					var t,
						n = cc(this).entries,
						r = Dd(
							e,
							1 < arguments.length ? arguments[1] : void 0,
							3
						),
						o = 0;
					o < n.length;

				)
					r((t = n[o++]).value, t.key, this);
			},
			keys: function () {
				return new Zl(this, "keys");
			},
			values: function () {
				return new Zl(this, "values");
			},
			entries: function () {
				return new Zl(this, "entries");
			},
		},
		{ enumerable: !0 }
	),
		Za(Bi, TE, Bi.entries),
		Za(
			Bi,
			"toString",
			function () {
				for (var e, t = cc(this).entries, n = [], r = 0; r < t.length; )
					(e = t[r++]),
						n.push(
							encodeURIComponent(e.key).replace(ot, pt) +
								"=" +
								encodeURIComponent(e.value).replace(ot, pt)
						);
				return n.join("&");
			},
			{ enumerable: !0 }
		),
		zc(Rg, "URLSearchParams"),
		ea({ global: !0, forced: !Wl }, { URLSearchParams: Rg }),
		Wl ||
			"function" != typeof kt ||
			"function" != typeof Yl ||
			ea(
				{ global: !0, enumerable: !0, forced: !0 },
				{
					fetch: function (e) {
						var t = [e];
						if (1 < arguments.length) {
							var n = arguments[1];
							if (xa(n)) {
								var r = n.body;
								if ("URLSearchParams" === jf(r)) {
									var o = n.headers
										? new Yl(n.headers)
										: new Yl();
									o.has("content-type") ||
										o.set(
											"content-type",
											"application/x-www-form-urlencoded;charset=UTF-8"
										),
										(n = jc(n, {
											body: Nc(0, String(r)),
											headers: Nc(0, o),
										}));
								}
							}
							t.push(n);
						}
						return kt.apply(this, t);
					},
				}
			);
	var Sg = R.URL,
		ZE = Rg,
		$E = cb.set,
		db = cb.getterFor("URL"),
		aF = Math.floor,
		rt = Math.pow,
		st = /[A-Za-z]/,
		bF = /[\d+-.A-Za-z]/,
		$l = /\d/,
		cF = /^(0x|0X)/,
		dF = /^[0-7]+$/,
		eF = /^\d+$/,
		tt = /^[\dA-Fa-f]+$/,
		fF = /[\0\t\n\r #%/:?@[\\]]/,
		gF = /[\0\t\n\r #/:?@[\\]]/,
		hF = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
		iF = /[\t\n\r]/g,
		am = function (e, t) {
			var n;
			if ("[" == t.charAt(0)) {
				if ("]" != t.charAt(t.length - 1)) return "Invalid host";
				var r = jF(t.slice(1, -1));
				if (!r) return "Invalid host";
			} else if (wb(e)) {
				for (
					r = [],
						t = t.toLowerCase().replace(SE, ".").split("."),
						n = 0;
					n < t.length;
					n++
				) {
					var o = t[n],
						i = r,
						s = i.push;
					if (RE.test(o)) {
						var a = o;
						o = [];
						var c = a;
						a = [];
						for (var u = 0, l = c.length; u < l; ) {
							var f = c.charCodeAt(u++);
							if (55296 <= f && 56319 >= f && u < l) {
								var h = c.charCodeAt(u++);
								56320 == (64512 & h)
									? a.push(
											((1023 & f) << 10) +
												(1023 & h) +
												65536
									  )
									: (a.push(f), u--);
							} else a.push(f);
						}
						(u = a.length), (l = 128);
						var p = 0,
							d = 72;
						for (c = 0; c < a.length; c++) {
							var b = a[c];
							128 > b && o.push(Xl(b));
						}
						for ((h = f = o.length) && o.push("-"); h < u; ) {
							var g = 2147483647;
							for (c = 0; c < a.length; c++)
								(b = a[c]) >= l && b < g && (g = b);
							var v = h + 1;
							if (g - l > Ff((2147483647 - p) / v))
								throw RangeError(
									"Overflow: input needs wider integers to process"
								);
							for (
								p += (g - l) * v, l = g, c = 0;
								c < a.length;
								c++
							) {
								if ((b = a[c]) < l && 2147483647 < ++p)
									throw RangeError(
										"Overflow: input needs wider integers to process"
									);
								if (b == l) {
									var y = p;
									for (
										b = 36;
										!(
											y <
											(g =
												b <= d
													? 1
													: b >= d + 26
													? 26
													: b - d)
										);
										b += 36
									) {
										var m = 36 - g,
											E = o;
										(g += (y -= g) % m),
											E.push.call(
												E,
												Xl(g + 22 + 75 * (26 > g))
											),
											(y = Ff(y / m));
									}
									for (
										o.push(Xl(y + 22 + 75 * (26 > y))),
											d = v,
											b = 0,
											p = h == f ? Ff(p / 700) : p >> 1,
											p += Ff(p / d);
										455 < p;
										b += 36
									)
										p = Ff(p / 35);
									(d = Ff(b + (36 * p) / (p + 38))),
										(p = 0),
										++h;
								}
							}
							++p, ++l;
						}
						o = "xn--" + o.join("");
					}
					s.call(i, o);
				}
				if (((t = r.join(".")), fF.test(t))) return "Invalid host";
				if (null === (r = kF(t))) return "Invalid host";
			} else {
				if (gF.test(t)) return "Invalid host";
				for (r = "", t = ge(t), n = 0; n < t.length; n++)
					r += Qd(t[n], Ci);
			}
			e.host = r;
		},
		kF = function (e) {
			var t,
				n = e.split(".");
			n.length && "" == n[n.length - 1] && n.pop();
			var r = n.length;
			if (4 < r) return e;
			var o = [];
			for (t = 0; t < r; t++) {
				var i = n[t];
				if ("" == i) return e;
				var s = 10;
				if (
					(1 < i.length &&
						"0" == i.charAt(0) &&
						((s = cF.test(i) ? 16 : 8),
						(i = i.slice(8 == s ? 1 : 2))),
					"" === i)
				)
					i = 0;
				else {
					if (!(10 == s ? eF : 8 == s ? dF : tt).test(i)) return e;
					i = parseInt(i, s);
				}
				o.push(i);
			}
			for (t = 0; t < r; t++)
				if (((i = o[t]), t == r - 1)) {
					if (i >= rt(256, 5 - r)) return null;
				} else if (255 < i) return null;
			for (e = o.pop(), t = 0; t < o.length; t++)
				e += o[t] * rt(256, 3 - t);
			return e;
		},
		jF = function (e) {
			var t,
				n,
				r = [0, 0, 0, 0, 0, 0, 0, 0],
				o = 0,
				i = null,
				s = 0,
				a = function () {
					return e.charAt(s);
				};
			if (":" == a()) {
				if (":" != e.charAt(1)) return;
				(s += 2), (i = ++o);
			}
			for (; a(); ) {
				if (8 == o) return;
				if (":" == a()) {
					if (null !== i) return;
					s++, (i = ++o);
				} else {
					for (t = n = 0; 4 > n && tt.test(a()); )
						(t = 16 * t + parseInt(a(), 16)), s++, n++;
					if ("." == a()) {
						if (0 == n) return;
						if (((s -= n), 6 < o)) return;
						for (t = 0; a(); ) {
							if (((n = null), 0 < t)) {
								if (!("." == a() && 4 > t)) return;
								s++;
							}
							if (!$l.test(a())) return;
							for (; $l.test(a()); ) {
								var c = parseInt(a(), 10);
								if (null === n) n = c;
								else {
									if (0 == n) return;
									n = 10 * n + c;
								}
								if (255 < n) return;
								s++;
							}
							(r[o] = 256 * r[o] + n),
								(2 != ++t && 4 != t) || o++;
						}
						if (4 != t) return;
						break;
					}
					if (":" == a()) {
						if ((s++, !a())) return;
					} else if (a()) return;
					r[o++] = t;
				}
			}
			if (null !== i)
				for (a = o - i, o = 7; 0 != o && 0 < a; )
					(t = r[o]), (r[o--] = r[i + a - 1]), (r[i + --a] = t);
			else if (8 != o) return;
			return r;
		},
		Tg = function (e) {
			var t, n;
			if ("number" == typeof e) {
				var r = [];
				for (t = 0; 4 > t; t++) r.unshift(e % 256), (e = aF(e / 256));
				return r.join(".");
			}
			if ("object" == typeof e) {
				(r = ""), (t = null);
				for (var o = 1, i = null, s = 0, a = 0; 8 > a; a++)
					0 !== e[a]
						? (s > o && ((t = i), (o = s)), (i = null), (s = 0))
						: (null === i && (i = a), ++s);
				for (s > o && (t = i), o = t, t = 0; 8 > t; t++)
					(n && 0 === e[t]) ||
						(n && (n = !1),
						o === t
							? ((r += t ? ":" : "::"), (n = !0))
							: ((r += e[t].toString(16)), 7 > t && (r += ":")));
				return "[" + r + "]";
			}
			return e;
		},
		Ci = {},
		ut = Bg({}, Ci, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
		vt = Bg({}, ut, { "#": 1, "?": 1, "{": 1, "}": 1 }),
		bm = Bg({}, vt, {
			"/": 1,
			":": 1,
			";": 1,
			"=": 1,
			"@": 1,
			"[": 1,
			"\\": 1,
			"]": 1,
			"^": 1,
			"|": 1,
		}),
		Qd = function (e, t) {
			var n = uw(e, 0);
			return 32 < n && 127 > n && !ka(t, e) ? e : encodeURIComponent(e);
		},
		Di = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
		wb = function (e) {
			return ka(Di, e.scheme);
		},
		cm = function (e) {
			return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
		},
		Ug = function (e, t) {
			var n;
			return (
				2 == e.length &&
				st.test(e.charAt(0)) &&
				(":" == (n = e.charAt(1)) || (!t && "|" == n))
			);
		},
		wt = function (e) {
			var t;
			return (
				1 < e.length &&
				Ug(e.slice(0, 2)) &&
				(2 == e.length ||
					"/" === (t = e.charAt(2)) ||
					"\\" === t ||
					"?" === t ||
					"#" === t)
			);
		},
		xt = function (e) {
			var t = e.path,
				n = t.length;
			!n || ("file" == e.scheme && 1 == n && Ug(t[0], !0)) || t.pop();
		},
		dm = {},
		yt = {},
		em = {},
		zt = {},
		At = {},
		fm = {},
		Bt = {},
		Ct = {},
		Ei = {},
		Fi = {},
		gm = {},
		hm = {},
		im = {},
		jm = {},
		Dt = {},
		km = {},
		Vg = {},
		Yc = {},
		Et = {},
		ye = {},
		vd = {},
		Zc = function (e, t, n, r) {
			var o = n || dm,
				i = 0,
				s = "",
				a = !1,
				c = !1,
				u = !1;
			for (
				n ||
					((e.scheme = ""),
					(e.username = ""),
					(e.password = ""),
					(e.host = null),
					(e.port = null),
					(e.path = []),
					(e.query = null),
					(e.fragment = null),
					(e.cannotBeABaseURL = !1),
					(t = t.replace(hF, ""))),
					t = t.replace(iF, ""),
					t = ge(t);
				i <= t.length;

			) {
				var l = t[i];
				switch (o) {
					case dm:
						if (!l || !st.test(l)) {
							if (n) return "Invalid scheme";
							o = em;
							continue;
						}
						(s += l.toLowerCase()), (o = yt);
						break;
					case yt:
						if (
							l &&
							(bF.test(l) || "+" == l || "-" == l || "." == l)
						)
							s += l.toLowerCase();
						else {
							if (":" != l) {
								if (n) return "Invalid scheme";
								(s = ""), (o = em), (i = 0);
								continue;
							}
							if (
								n &&
								(wb(e) != ka(Di, s) ||
									("file" == s &&
										("" != e.username ||
											"" != e.password ||
											null !== e.port)) ||
									("file" == e.scheme && !e.host))
							)
								return;
							if (((e.scheme = s), n))
								return void (
									wb(e) &&
									Di[e.scheme] == e.port &&
									(e.port = null)
								);
							(s = ""),
								"file" == e.scheme
									? (o = jm)
									: wb(e) && r && r.scheme == e.scheme
									? (o = zt)
									: wb(e)
									? (o = Ct)
									: "/" == t[i + 1]
									? ((o = At), i++)
									: ((e.cannotBeABaseURL = !0),
									  e.path.push(""),
									  (o = Et));
						}
						break;
					case em:
						if (!r || (r.cannotBeABaseURL && "#" != l))
							return "Invalid scheme";
						if (r.cannotBeABaseURL && "#" == l) {
							(e.scheme = r.scheme),
								(e.path = r.path.slice()),
								(e.query = r.query),
								(e.fragment = ""),
								(e.cannotBeABaseURL = !0),
								(o = vd);
							break;
						}
						o = "file" == r.scheme ? jm : fm;
						continue;
					case zt:
						if ("/" != l || "/" != t[i + 1]) {
							o = fm;
							continue;
						}
						(o = Ei), i++;
						break;
					case At:
						if ("/" == l) {
							o = Fi;
							break;
						}
						o = Yc;
						continue;
					case fm:
						if (((e.scheme = r.scheme), null == l))
							(e.username = r.username),
								(e.password = r.password),
								(e.host = r.host),
								(e.port = r.port),
								(e.path = r.path.slice()),
								(e.query = r.query);
						else if ("/" == l || ("\\" == l && wb(e))) o = Bt;
						else if ("?" == l)
							(e.username = r.username),
								(e.password = r.password),
								(e.host = r.host),
								(e.port = r.port),
								(e.path = r.path.slice()),
								(e.query = ""),
								(o = ye);
						else {
							if ("#" != l) {
								(e.username = r.username),
									(e.password = r.password),
									(e.host = r.host),
									(e.port = r.port),
									(e.path = r.path.slice()),
									e.path.pop(),
									(o = Yc);
								continue;
							}
							(e.username = r.username),
								(e.password = r.password),
								(e.host = r.host),
								(e.port = r.port),
								(e.path = r.path.slice()),
								(e.query = r.query),
								(e.fragment = ""),
								(o = vd);
						}
						break;
					case Bt:
						if (!wb(e) || ("/" != l && "\\" != l)) {
							if ("/" != l) {
								(e.username = r.username),
									(e.password = r.password),
									(e.host = r.host),
									(e.port = r.port),
									(o = Yc);
								continue;
							}
							o = Fi;
						} else o = Ei;
						break;
					case Ct:
						if (((o = Ei), "/" != l || "/" != s.charAt(i + 1)))
							continue;
						i++;
						break;
					case Ei:
						if ("/" != l && "\\" != l) {
							o = Fi;
							continue;
						}
						break;
					case Fi:
						if ("@" == l) {
							for (
								a && (s = "%40" + s), a = !0, s = ge(s), l = 0;
								l < s.length;
								l++
							) {
								var f = s[l];
								":" != f || u
									? ((f = Qd(f, bm)),
									  u ? (e.password += f) : (e.username += f))
									: (u = !0);
							}
							s = "";
						} else if (
							null == l ||
							"/" == l ||
							"?" == l ||
							"#" == l ||
							("\\" == l && wb(e))
						) {
							if (a && "" == s) return "Invalid authority";
							(i -= ge(s).length + 1), (s = ""), (o = gm);
						} else s += l;
						break;
					case gm:
					case hm:
						if (n && "file" == e.scheme) {
							o = km;
							continue;
						}
						if (":" != l || c) {
							if (
								null == l ||
								"/" == l ||
								"?" == l ||
								"#" == l ||
								("\\" == l && wb(e))
							) {
								if (wb(e) && "" == s) return "Invalid host";
								if (
									n &&
									"" == s &&
									("" != e.username ||
										"" != e.password ||
										null !== e.port)
								)
									return;
								if ((o = am(e, s))) return o;
								if (((s = ""), (o = Vg), n)) return;
								continue;
							}
							"[" == l ? (c = !0) : "]" == l && (c = !1),
								(s += l);
						} else {
							if ("" == s) return "Invalid host";
							if ((o = am(e, s))) return o;
							if (((s = ""), (o = im), n == hm)) return;
						}
						break;
					case im:
						if (!$l.test(l)) {
							if (
								null == l ||
								"/" == l ||
								"?" == l ||
								"#" == l ||
								("\\" == l && wb(e)) ||
								n
							) {
								if ("" != s) {
									if (65535 < (o = parseInt(s, 10)))
										return "Invalid port";
									(e.port =
										wb(e) && o === Di[e.scheme] ? null : o),
										(s = "");
								}
								if (n) return;
								o = Vg;
								continue;
							}
							return "Invalid port";
						}
						s += l;
						break;
					case jm:
						if (((e.scheme = "file"), "/" == l || "\\" == l))
							o = Dt;
						else {
							if (!r || "file" != r.scheme) {
								o = Yc;
								continue;
							}
							if (null == l)
								(e.host = r.host),
									(e.path = r.path.slice()),
									(e.query = r.query);
							else if ("?" == l)
								(e.host = r.host),
									(e.path = r.path.slice()),
									(e.query = ""),
									(o = ye);
							else {
								if ("#" != l) {
									wt(t.slice(i).join("")) ||
										((e.host = r.host),
										(e.path = r.path.slice()),
										xt(e)),
										(o = Yc);
									continue;
								}
								(e.host = r.host),
									(e.path = r.path.slice()),
									(e.query = r.query),
									(e.fragment = ""),
									(o = vd);
							}
						}
						break;
					case Dt:
						if ("/" == l || "\\" == l) {
							o = km;
							break;
						}
						r &&
							"file" == r.scheme &&
							!wt(t.slice(i).join("")) &&
							(Ug(r.path[0], !0)
								? e.path.push(r.path[0])
								: (e.host = r.host)),
							(o = Yc);
						continue;
					case km:
						if (
							null == l ||
							"/" == l ||
							"\\" == l ||
							"?" == l ||
							"#" == l
						) {
							if (!n && Ug(s)) o = Yc;
							else {
								if ("" == s) {
									if (((e.host = ""), n)) return;
								} else {
									if ((o = am(e, s))) return o;
									if (
										("localhost" == e.host && (e.host = ""),
										n)
									)
										return;
									s = "";
								}
								o = Vg;
							}
							continue;
						}
						s += l;
						break;
					case Vg:
						if (wb(e)) {
							if (((o = Yc), "/" != l && "\\" != l)) continue;
						} else if (n || "?" != l)
							if (n || "#" != l) {
								if (null != l && ((o = Yc), "/" != l)) continue;
							} else (e.fragment = ""), (o = vd);
						else (e.query = ""), (o = ye);
						break;
					case Yc:
						if (
							null == l ||
							"/" == l ||
							("\\" == l && wb(e)) ||
							(!n && ("?" == l || "#" == l))
						) {
							if (
								(".." === (f = (f = s).toLowerCase()) ||
								"%2e." === f ||
								".%2e" === f ||
								"%2e%2e" === f
									? (xt(e),
									  "/" == l ||
											("\\" == l && wb(e)) ||
											e.path.push(""))
									: "." === s || "%2e" === s.toLowerCase()
									? "/" == l ||
									  ("\\" == l && wb(e)) ||
									  e.path.push("")
									: ("file" == e.scheme &&
											!e.path.length &&
											Ug(s) &&
											(e.host && (e.host = ""),
											(s = s.charAt(0) + ":")),
									  e.path.push(s)),
								(s = ""),
								"file" == e.scheme &&
									(null == l || "?" == l || "#" == l))
							)
								for (; 1 < e.path.length && "" === e.path[0]; )
									e.path.shift();
							"?" == l
								? ((e.query = ""), (o = ye))
								: "#" == l && ((e.fragment = ""), (o = vd));
						} else s += Qd(l, vt);
						break;
					case Et:
						"?" == l
							? ((e.query = ""), (o = ye))
							: "#" == l
							? ((e.fragment = ""), (o = vd))
							: null != l && (e.path[0] += Qd(l, Ci));
						break;
					case ye:
						n || "#" != l
							? null != l &&
							  ("'" == l && wb(e)
									? (e.query += "%27")
									: (e.query =
											"#" == l
												? e.query + "%23"
												: e.query + Qd(l, Ci)))
							: ((e.fragment = ""), (o = vd));
						break;
					case vd:
						null != l && (e.fragment += Qd(l, ut));
				}
				i++;
			}
		},
		Rd = function (e) {
			var t = Ac(this, Rd, "URL"),
				n = 1 < arguments.length ? arguments[1] : void 0,
				r = String(e),
				o = $E(t, { type: "URL" });
			if (void 0 !== n)
				if (n instanceof Rd) var i = db(n);
				else if ((n = Zc((i = {}), String(n)))) throw TypeError(n);
			if ((n = Zc(o, r, null, i))) throw TypeError(n);
			var s = (o.searchParams = new ZE());
			(r = cc(s)).updateSearchParams(o.query),
				(r.updateURL = function () {
					o.query = String(s) || null;
				}),
				wa ||
					((t.href = Gi.call(t)),
					(t.origin = Ft.call(t)),
					(t.protocol = Gt.call(t)),
					(t.username = Ht.call(t)),
					(t.password = It.call(t)),
					(t.host = Jt.call(t)),
					(t.hostname = Kt.call(t)),
					(t.port = Lt.call(t)),
					(t.pathname = Mt.call(t)),
					(t.search = Nt.call(t)),
					(t.searchParams = Ot.call(t)),
					(t.hash = Pt.call(t)));
		},
		lm = Rd.prototype,
		Gi = function () {
			var e = db(this),
				t = e.scheme,
				n = e.username,
				r = e.password,
				o = e.host,
				i = e.port,
				s = e.path,
				a = e.query,
				c = e.fragment,
				u = t + ":";
			return (
				null !== o
					? ((u += "//"),
					  ("" == e.username && "" == e.password) ||
							(u += n + (r ? ":" + r : "") + "@"),
					  (u += Tg(o)),
					  null !== i && (u += ":" + i))
					: "file" == t && (u += "//"),
				(u += e.cannotBeABaseURL
					? s[0]
					: s.length
					? "/" + s.join("/")
					: ""),
				null !== a && (u += "?" + a),
				null !== c && (u += "#" + c),
				u
			);
		},
		Ft = function () {
			var e = db(this),
				t = e.scheme,
				n = e.port;
			if ("blob" == t)
				try {
					return new Rd(t.path[0]).origin;
				} catch (e) {
					return "null";
				}
			return "file" != t && wb(e)
				? t + "://" + Tg(e.host) + (null !== n ? ":" + n : "")
				: "null";
		},
		Gt = function () {
			return db(this).scheme + ":";
		},
		Ht = function () {
			return db(this).username;
		},
		It = function () {
			return db(this).password;
		},
		Jt = function () {
			var e = db(this),
				t = e.host;
			return (
				(e = e.port),
				null === t ? "" : null === e ? Tg(t) : Tg(t) + ":" + e
			);
		},
		Kt = function () {
			var e = db(this).host;
			return null === e ? "" : Tg(e);
		},
		Lt = function () {
			var e = db(this).port;
			return null === e ? "" : String(e);
		},
		Mt = function () {
			var e = db(this),
				t = e.path;
			return e.cannotBeABaseURL
				? t[0]
				: t.length
				? "/" + t.join("/")
				: "";
		},
		Nt = function () {
			var e = db(this).query;
			return e ? "?" + e : "";
		},
		Ot = function () {
			return db(this).searchParams;
		},
		Pt = function () {
			var e = db(this).fragment;
			return e ? "#" + e : "";
		},
		tc = function (e, t) {
			return { get: e, set: t, configurable: !0, enumerable: !0 };
		};
	if (
		(wa &&
			To(lm, {
				href: tc(Gi, function (e) {
					var t = db(this);
					if ((e = Zc(t, String(e)))) throw TypeError(e);
					cc(t.searchParams).updateSearchParams(t.query);
				}),
				origin: tc(Ft),
				protocol: tc(Gt, function (e) {
					var t = db(this);
					Zc(t, String(e) + ":", dm);
				}),
				username: tc(Ht, function (e) {
					var t = db(this);
					if (((e = ge(String(e))), !cm(t))) {
						t.username = "";
						for (var n = 0; n < e.length; n++)
							t.username += Qd(e[n], bm);
					}
				}),
				password: tc(It, function (e) {
					var t = db(this);
					if (((e = ge(String(e))), !cm(t))) {
						t.password = "";
						for (var n = 0; n < e.length; n++)
							t.password += Qd(e[n], bm);
					}
				}),
				host: tc(Jt, function (e) {
					var t = db(this);
					t.cannotBeABaseURL || Zc(t, String(e), gm);
				}),
				hostname: tc(Kt, function (e) {
					var t = db(this);
					t.cannotBeABaseURL || Zc(t, String(e), hm);
				}),
				port: tc(Lt, function (e) {
					var t = db(this);
					cm(t) ||
						("" == (e = String(e))
							? (t.port = null)
							: Zc(t, e, im));
				}),
				pathname: tc(Mt, function (e) {
					var t = db(this);
					t.cannotBeABaseURL || ((t.path = []), Zc(t, e + "", Vg));
				}),
				search: tc(Nt, function (e) {
					var t = db(this);
					"" == (e = String(e))
						? (t.query = null)
						: ("?" == e.charAt(0) && (e = e.slice(1)),
						  (t.query = ""),
						  Zc(t, e, ye)),
						cc(t.searchParams).updateSearchParams(t.query);
				}),
				searchParams: tc(Ot),
				hash: tc(Pt, function (e) {
					var t = db(this);
					"" == (e = String(e))
						? (t.fragment = null)
						: ("#" == e.charAt(0) && (e = e.slice(1)),
						  (t.fragment = ""),
						  Zc(t, e, vd));
				}),
			}),
		Za(
			lm,
			"toJSON",
			function () {
				return Gi.call(this);
			},
			{ enumerable: !0 }
		),
		Za(
			lm,
			"toString",
			function () {
				return Gi.call(this);
			},
			{ enumerable: !0 }
		),
		Sg)
	) {
		var Qt = Sg.createObjectURL,
			Rt = Sg.revokeObjectURL;
		Qt &&
			Za(Rd, "createObjectURL", function (e) {
				return Qt.apply(Sg, arguments);
			}),
			Rt &&
				Za(Rd, "revokeObjectURL", function (e) {
					return Rt.apply(Sg, arguments);
				});
	}
	zc(Rd, "URL"), ea({ global: !0, forced: !Wl, sham: !wa }, { URL: Rd });
	var lF = new Blob([
			"var fakeIdToId = {};onmessage = function (event) {\tvar data = event.data,\t\tname = data.name,\t\tfakeId = data.fakeId,\t\ttime;\tif(data.hasOwnProperty('time')) {\t\ttime = data.time;\t}\tswitch (name) {\t\tcase 'setInterval':\t\t\tfakeIdToId[fakeId] = setInterval(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearInterval':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearInterval(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t}}",
		]),
		mF = window.URL.createObjectURL(lF),
		Ze = {},
		dg = 0,
		Aj = new Worker(mF);
	Aj.onmessage = function (e) {
		if (((e = e.data.fakeId), Ze.hasOwnProperty(e))) {
			var t = Ze[e];
			(e = t.callback), (t = t.parameters), e.apply(window, t);
		}
	};
	var nF = (function (e) {
			function t() {
				return va(this, t), n.apply(this, arguments);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "requestAsyncId",
						value: function (e, t) {
							var n =
								2 < arguments.length && void 0 !== arguments[2]
									? arguments[2]
									: 0;
							return Qv(e.flush.bind(e, this), n);
						},
					},
					{
						key: "recycleAsyncId",
						value: function (e, t) {
							var n =
								2 < arguments.length && void 0 !== arguments[2]
									? arguments[2]
									: 0;
							if (
								null !== n &&
								this.delay === n &&
								!1 === this.pending
							)
								return t;
							Ze.hasOwnProperty(t) &&
								(delete Ze[t],
								Aj.postMessage({
									name: "clearInterval",
									fakeId: t,
								}));
						},
					},
				]),
				t
			);
		})(gt),
		oF = new it(nF),
		pF = ["group"],
		mm = G.inflate,
		St = G.deflate,
		Tt = (function (e) {
			function t(e, n, o, i) {
				va(this, t);
				var s = r.call(this, i, "Session");
				return (
					x(z(s), "lastNoticeTicket", ""),
					x(z(s), "chatManager", void 0),
					x(z(s), "usedChannelIds", []),
					x(z(s), "msgDedupLru", new Wc(void 0, { maxlen: 200 })),
					x(z(s), "startTime", Date.now()),
					x(z(s), "seq", P.fromNumber(1, !0)),
					x(z(s), "userJoinOptions", new et(!1)),
					x(z(s), "seqSentStatuses", [!1, !1]),
					x(
						z(s),
						"dialogueSequenceLru",
						new Wc(void 0, { maxlen: 1e4 })
					),
					x(z(s), "loggedOut", !1),
					x(z(s), "messageSentTimes", []),
					x(z(s), "curLoginSockets", [void 0, void 0]),
					x(z(s), "loginSocketSubs", [
						{ channels: new Map(), receivers: [] },
						{ channels: new Map(), receivers: [] },
					]),
					x(z(s), "lastLoginSockets", [new Te(1), new Te(1)]),
					x(z(s), "dialPendingMsgSubjectMap", new Map()),
					x(z(s), "context", void 0),
					x(z(s), "connection", void 0),
					x(z(s), "instanceId", void 0),
					x(z(s), "lastPingTime", void 0),
					x(z(s), "chanelStringMessageReport", void 0),
					x(z(s), "chanelRawMessageReport", void 0),
					x(z(s), "p2pSMsgNoOfflineReport", void 0),
					x(z(s), "p2pRMsgNoOfflineReport", void 0),
					x(z(s), "registerSocketsFailureListener", function () {
						s.connection.once("socketsFailure", function () {
							s.log("socketsFailure, creating a new connection"),
								yd(function () {
									return (
										s.connection.removeAllListeners(),
										(s.connection = new ct(
											s.context,
											s.logger,
											!0
										)),
										s.loginHandler(15e3, !0)
									);
								})
									.pipe(
										Re(function (e) {
											return e.pipe(
												Zd(
													ue.getParameter(
														"RECONNECTING_AP_INTERVAL"
													)
												)
											);
										}),
										Kc(s.connection.apClient.apFinish$)
									)
									.subscribe(function () {
										s.log("new connection connected");
									});
						}),
							0 === s.connection.listenerCount("tokenExpired") &&
								s.connection.on("tokenExpired", function () {
									s.emit("tokenExpired");
								});
					}),
					(s.context = e),
					(s.context.startTime = s.startTime),
					(s.connection = n),
					(s.instanceId = o),
					(s.chatManager = new CE(i)),
					(s.lastPingTime = [0, 0]),
					s.setMaxListeners(512),
					s.log("The instanceId is %s", s.instanceId.toString()),
					(s.chanelStringMessageReport = new zi(
						e,
						i,
						Ka.ChannelSMsg
					)),
					(s.chanelRawMessageReport = new zi(e, i, Ka.ChannelRMsg)),
					(s.p2pSMsgNoOfflineReport = new zi(
						e,
						i,
						Ka.P2pSMsgNoOfflineFlag
					)),
					(s.p2pRMsgNoOfflineReport = new zi(
						e,
						i,
						Ka.P2pRMsgNoOfflineFlag
					)),
					s
				);
			}
			Ga(t, e);
			var n,
				r = Ha(t);
			return (
				eb(
					t,
					[
						{
							key: "loginHandler",
							value: function () {
								var e = this,
									t =
										0 < arguments.length &&
										void 0 !== arguments[0]
											? arguments[0]
											: 12e3,
									n =
										1 < arguments.length &&
										void 0 !== arguments[1] &&
										arguments[1];
								if (this.loggedOut && n)
									throw new da(
										"Already logged out, request ignored"
									);
								n && this.registerSocketsFailureListener(),
									this.connection.initConnection();
								var r = this.getSocketLoginObservables(
										this.connection.lastOpenSockets,
										this.seq
									),
									o = Date.now();
								return (
									r.forEach(function (t, r) {
										var i = e.loginSocketSubs[r].login;
										void 0 !== i && i.unsubscribe(),
											(e.loginSocketSubs[r].login = t
												.pipe(
													sa(function (t) {
														var i;
														e.curLoginSockets[r] =
															t;
														var s = Date.now();
														bb(
															"Link",
															{
																ackedServerIp:
																	t.address,
																destServerIp:
																	t.ip,
																ec: 0,
																sc: 0,
																elapse: Xa(
																	e.startTime
																),
																lts: P.fromNumber(
																	s
																),
																responseTime:
																	s - o,
																sid: sb(
																	e.instanceId
																),
																userId: e
																	.context
																	.uid,
															},
															null !==
																(i =
																	e.context
																		.config
																		.enableCloudProxy) &&
																void 0 !== i &&
																i
														),
															e.emit(
																"userJoined",
																t.env
															),
															n &&
																e.connection.apClient.apFinish$.next(
																	void 0
																);
													})
												)
												.subscribe(
													e.lastLoginSockets[r]
												));
									}),
									this.initKeepAliveSender(),
									this.initKeepAliveReconnector(),
									this.initLoginReceiver(),
									Jb.apply(
										void 0,
										Z(r).concat([
											Db(
												this.connection,
												"connectionInitFailure"
											).pipe(
												sa(function (e) {
													if (Na(e) || Ab(e)) throw e;
													throw new Ja(
														"Login failure",
														{
															code: $r,
															originalError: e,
														}
													);
												})
											),
										])
									).pipe(
										hb(1),
										Lb(t),
										ab(function (t) {
											return (
												t instanceof Tb &&
													e.warn(
														"Client login timeout"
													),
												t &&
													t.code === ti &&
													(e.connection.emit(
														"tokenExpired"
													),
													e.connection.apClient.apFinish$.next(
														void 0
													)),
												e.clearSockets(0, n),
												ra(t)
											);
										}),
										sa(function () {
											n ||
												e.registerSocketsFailureListener();
										}),
										fh(function () {
											n ||
												e.connection.apClient.apFinish$.next(
													void 0
												);
										})
									)
								);
							},
						},
						{
							key: "logoutHandler",
							value:
								((n = ma(
									N.mark(function e() {
										var t,
											n,
											r,
											o = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(this.loggedOut =
																	!0),
																this.connection.apClient.apFinish$.next(
																	void 0
																),
																(t =
																	this.getLoginSockets()),
																(n = t.map(
																	function (
																		e
																	) {
																		return (
																			e.sendPacket(
																				"UserQuit",
																				{}
																			),
																			o.connection.waitClosing(
																				e
																			)
																		);
																	}
																)),
																this.clearSockets(
																	5e3
																),
																(r = t.map(
																	function (
																		e
																	) {
																		return e.env;
																	}
																)),
																[0, 1]
																	.filter(
																		function (
																			e
																		) {
																			return !r.includes(
																				e
																			);
																		}
																	)
																	.forEach(
																		function (
																			e
																		) {
																			o.connection.closeSocket(
																				e,
																				0
																			);
																		}
																	),
																e.abrupt(
																	"return",
																	Jb.apply(
																		void 0,
																		Z(n)
																	).toPromise()
																)
															);
														case 9:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								)),
								function () {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "requestChannelJoin",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																0 !==
																this.getLoginSockets()
																	.length
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"Client is not logged in. Cannot join the channel",
																Wr
															);
														case 2:
															return (
																(n = Db(
																	this,
																	"channelLeft"
																).pipe(
																	yb(
																		function (
																			e
																		) {
																			return (
																				t ===
																				e
																			);
																		}
																	),
																	hb(1)
																)),
																(r =
																	this.incGetSeq()),
																(o =
																	this.lastLoginSockets.map(
																		function (
																			e
																		) {
																			return e.pipe(
																				Kb(
																					function (
																						e,
																						n
																					) {
																						0 !==
																							n &&
																							i.incSeqIfNeeded(
																								e.env
																							);
																						var o =
																							0 ===
																							n
																								? r
																								: i.seq;
																						return (
																							e.sendPacket(
																								"GroupEnter",
																								{
																									account:
																										t,
																									seq: o,
																								}
																							),
																							e
																								.fromReceived(
																									"GroupReply"
																								)
																								.pipe(
																									Ca(
																										function (
																											e
																										) {
																											return o.eq(
																												e.seq
																											);
																										}
																									),
																									sa(
																										function (
																											e
																										) {
																											if (
																												0 !==
																												(e =
																													e.code)
																											)
																												throw new Ja(
																													[
																														"Channel join failure. The response code is %d",
																														e,
																													],
																													Sr
																												);
																										}
																									)
																								)
																						);
																					}
																				),
																				Kc(
																					n
																				),
																				Se()
																			);
																		}
																	)).forEach(
																	function (
																		e,
																		n
																	) {
																		var r =
																			function () {
																				return i.loginSocketSubs[
																					n
																				].channels.delete(
																					t
																				);
																			};
																		i.loginSocketSubs[
																			n
																		].channels.set(
																			t,
																			e.subscribe(
																				{
																					error: r,
																					complete:
																						r,
																				}
																			)
																		);
																	}
																),
																(e.next = 8),
																Jb.apply(
																	void 0,
																	Z(o)
																)
																	.pipe(
																		hb(1),
																		Lb(1e4),
																		ab(
																			function (
																				e
																			) {
																				return (
																					e instanceof
																						Tb &&
																						i.warn(
																							"Channel join timeout"
																						),
																					ra(
																						e
																					)
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 8:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "requestChannelLeave",
							value: function (e) {
								this.getLoginSockets().forEach(function (t) {
									t.sendPacket("GroupLeave", { account: e });
								});
							},
						},
						{
							key: "requestUpdateEdgeTicket",
							value: function (e) {
								var n = this,
									r = this.getLoginSockets();
								if (0 === r.length)
									throw new da(
										"Client is not logged in. Cannot renew token",
										hs
									);
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("UserRenewTokenReq", {
											instance: n.instanceId,
											seq: o,
											account: n.context.uid,
											ticket: e,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(Ml)].concat(
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"UserRenewTokenResp"
														)
														.pipe(
															Ca(function (e) {
																var t = e.code;
																return (
																	o.eq(
																		e.seq
																	) && 0 === t
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestChannelMemberList",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da(
										"Client is not logged in. Cannot get the channel members",
										JB
									);
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("GroupAllUsersList", {
											group: e,
											pageNumber: 0,
											pageSize: 200,
											seq: r,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(Qr)].concat(
											Z(
												n.map(function (t) {
													return t
														.fromReceived(
															"GroupAllUsersResult"
														)
														.pipe(
															Ca(function (t) {
																var n = t.seq;
																return (
																	t.group ===
																		e &&
																	r.eq(n)
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestPeersOnlineStatus",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("UserStatusList", {
											users: e,
											seq: r,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(VB)].concat(
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"UserStatusResult"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestSetLocalUserAttributes",
							value: function (e, n) {
								var r = this,
									o = this.getLoginSockets();
								if (0 === o.length)
									throw new da("Client is not logged in");
								var i = this.incGetSeq();
								return (
									o.forEach(function (t, o) {
										(void 0 !== n && o !== n) ||
											t.sendPacket("UserAttributeSet", {
												account: r.context.uid,
												attributeInfos: Object.entries(
													e
												).map(function (e) {
													return {
														key: (e = $a(e, 2))[0],
														value: e[1],
													};
												}),
												seq: i,
											});
									}),
									fb.apply(
										void 0,
										Z(
											o.map(function (e) {
												return e
													.fromReceived(
														"UserAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return i.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The user attributes set failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												o.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return i.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestSetChannelAttributes",
							value: function (e, n, r) {
								var o = this.getLoginSockets();
								if (0 === o.length)
									throw new da("Client is not logged in");
								var i = this.incGetSeq();
								return (
									o.forEach(function (t) {
										t.sendPacket("GroupAttributeSet", {
											broadcast: r,
											group: e,
											attributeInfos: Object.entries(
												n
											).map(function (e) {
												return {
													key: (e = $a(e, 2))[0],
													value: e[1],
												};
											}),
											seq: i,
										});
									}),
									fb.apply(
										void 0,
										Z(
											o.map(function (e) {
												return e
													.fromReceived(
														"GroupAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return i.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The group attributes set failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												o.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return i.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestAddOrUpdateLocalUserAttributes",
							value: function (e) {
								var n = this,
									r = this.getLoginSockets();
								if (0 === r.length)
									throw new da("Client is not logged in");
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("UserAttributeMod", {
											account: n.context.uid,
											attributeInfos: Object.entries(
												e
											).map(function (e) {
												return {
													key: (e = $a(e, 2))[0],
													value: e[1],
												};
											}),
											seq: o,
										});
									}),
									fb.apply(
										void 0,
										Z(
											r.map(function (e) {
												return e
													.fromReceived(
														"UserAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return o.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The user attributes add or update failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestAddOrUpdateChannelAttributes",
							value: function (e, n, r) {
								var o = this.getLoginSockets();
								if (0 === o.length)
									throw new da("Client is not logged in");
								var i = this.incGetSeq();
								return (
									o.forEach(function (t) {
										t.sendPacket("GroupAttributeMod", {
											broadcast: r,
											group: e,
											attributeInfos: Object.entries(
												n
											).map(function (e) {
												return {
													key: (e = $a(e, 2))[0],
													value: e[1],
												};
											}),
											seq: i,
										});
									}),
									fb.apply(
										void 0,
										Z(
											o.map(function (e) {
												return e
													.fromReceived(
														"GroupAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return i.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The group attributes add or update failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												o.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return i.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestDeleteLocalUserAttributesByKeys",
							value: function (e) {
								var n = this,
									r = this.getLoginSockets();
								if (0 === r.length)
									throw new da("Client is not logged in");
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("UserAttributeDel", {
											account: n.context.uid,
											attributes: e,
											seq: o,
										});
									}),
									fb.apply(
										void 0,
										Z(
											r.map(function (e) {
												return e
													.fromReceived(
														"UserAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return o.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The user attributes delete failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestDeleteChannelAttributesByKeys",
							value: function (e, n, r) {
								var o = this.getLoginSockets();
								if (0 === o.length)
									throw new da("Client is not logged in");
								var i = this.incGetSeq();
								return (
									o.forEach(function (t) {
										t.sendPacket("GroupAttributeDel", {
											group: e,
											broadcast: r,
											attributes: n,
											seq: i,
										});
									}),
									fb.apply(
										void 0,
										Z(
											o.map(function (e) {
												return e
													.fromReceived(
														"GroupAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return i.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The channel attributes delete failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												o.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return i.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestClearLocalUserAttributes",
							value: function () {
								var e = this,
									n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("UserAttributeSet", {
											account: e.context.uid,
											seq: r,
											attributeInfos: [],
										});
									}),
									fb.apply(
										void 0,
										Z(
											n.map(function (e) {
												return e
													.fromReceived(
														"UserAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return r.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The user attributes clear failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestClearChannelAttributes",
							value: function (e, n) {
								var r = this.getLoginSockets();
								if (0 === r.length)
									throw new da("Client is not logged in");
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("GroupAttributeSet", {
											group: e,
											seq: o,
											attributeInfos: [],
											broadcast: n,
										});
									}),
									fb.apply(
										void 0,
										Z(
											r.map(function (e) {
												return e
													.fromReceived(
														"GroupAttributeErr"
													)
													.pipe(
														Ca(function (e) {
															return o.eq(e.seq);
														}),
														Ea(function (e) {
															throw new Ja(
																[
																	"The channel attributes clear failure, code %d",
																	e.code,
																],
																oc
															);
														})
													);
											})
										).concat(
											[t.genTimeoutError(pc)],
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeRsp"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestGetUserAttributesByKeys",
							value: function (e, n) {
								var r = this.getLoginSockets();
								if (0 === r.length)
									throw new da("Client is not logged in");
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("UserAttributeGet", {
											account: e,
											seq: o,
											attributes: n,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(pc)].concat(
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeErr"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															}),
															Ea(function (e) {
																if (
																	10008 ===
																	(e = e.code)
																)
																	throw new Ja(
																		"The user requested is not online",
																		Mr
																	);
																throw new ve(
																	[
																		"User attribute operation unknown error code: %d",
																		e,
																	],
																	oc
																);
															})
														);
												})
											),
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeRet"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestGetChannelAttributesByKeys",
							value: function (e, n) {
								var r = this.getLoginSockets();
								if (0 === r.length)
									throw new da("Client is not logged in");
								var o = this.incGetSeq();
								return (
									r.forEach(function (t) {
										t.sendPacket("GroupAttributeGet", {
											group: e,
											seq: o,
											attributes: n,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(pc)].concat(
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeErr"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															}),
															Ea(function (e) {
																throw new Ja(
																	[
																		"The channel attributes get failure, code %d",
																		e.code,
																	],
																	oc
																);
															})
														);
												})
											),
											Z(
												r.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeRet"
														)
														.pipe(
															Ca(function (e) {
																return o.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestGetUserAttributeKeys",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("UserAttributeKeysGet", {
											account: e,
											seq: r,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(pc)].concat(
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeErr"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															}),
															Ea(function (e) {
																if (
																	10008 ===
																	(e = e.code)
																)
																	throw new Ja(
																		"The user requested is not online",
																		Mr
																	);
																throw new ve(
																	[
																		"User attribute operation unknown error code: %d",
																		e,
																	],
																	oc
																);
															})
														);
												})
											),
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"UserAttributeKeysRet"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestGetChannelAttributesKeys",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("GroupAttributeKeysGet", {
											group: e,
											seq: r,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(pc)].concat(
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeErr"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															}),
															Ea(function (e) {
																throw new ve(
																	[
																		"Channel attribute operation unknown error code: %d",
																		e.code,
																	],
																	oc
																);
															})
														);
												})
											),
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"GroupAttributeKeysRet"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestGetChannelMemberCount",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("GroupStatusList", {
											groups: e,
											seq: r,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError(Qr)].concat(
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"GroupStatusResult"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestSubscribePeersOnlineStatus",
							value: function (e) {
								var n = this.getLoginSockets();
								if (0 === n.length)
									throw new da("Client is not logged in");
								var r = this.incGetSeq();
								return (
									n.forEach(function (t) {
										t.sendPacket("SubscribeUserStatus", {
											seq: r,
											users: e,
										});
									}),
									fb.apply(
										void 0,
										[t.genTimeoutError($B)].concat(
											Z(
												n.map(function (e) {
													return e
														.fromReceived(
															"SubscribeResponse"
														)
														.pipe(
															Ca(function (e) {
																return r.eq(
																	e.seq
																);
															})
														);
												})
											)
										)
									)
								);
							},
						},
						{
							key: "requestUnsubscribePeersOnlineStatus",
							value: function (e) {
								var t = this.getLoginSockets();
								if (0 === t.length)
									throw new da("Client is not logged in");
								var n = this.incGetSeq();
								t.forEach(function (t) {
									t.sendPacket("UnsubscribeUserStatus", {
										seq: n,
										users: e,
									});
								});
							},
						},
						{
							key: "sendInvitationMessage",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i,
											s,
											a,
											c,
											u,
											l,
											f,
											h,
											p,
											d = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((n = t.peerId),
																(r = t.callId),
																(o = t.extra),
																(i =
																	t.isAcceptAck),
																(s =
																	t.channelId),
																(a = t.type),
																(c = {
																	callId: r,
																}),
																void 0 === i)
															) {
																e.next = 6;
																break;
															}
															if (
																"CallAccept" ===
																a
															) {
																e.next = 5;
																break;
															}
															throw Error(
																"invalid invitation type"
															);
														case 5:
															c.type = i
																? "ack"
																: "request";
														case 6:
															return (
																(c.channel = s),
																("CallInvite" ===
																	a ||
																	"CallCancel" ===
																		a ||
																	"CallReject" ===
																		a ||
																	("CallAccept" ===
																		a &&
																		!1 ===
																			i)) &&
																	void 0 !==
																		o &&
																	(c.extra =
																		o),
																(u = nh()),
																this.log(
																	"The sent invitation body is %o",
																	c
																),
																(l = function (
																	e
																) {
																	return {
																		MiscMap:
																			{},
																		sequence:
																			P.fromNumber(
																				1
																			),
																		dialogue:
																			u,
																		instance:
																			d.instanceId,
																		dst: n,
																		ms: P.fromNumber(
																			Date.now(),
																			!0
																		),
																		options:
																			new Ef(
																				{
																					IterationNumber:
																						e,
																					MessageType:
																						a,
																				}
																			).toLong(),
																		payload:
																			new TextEncoder().encode(
																				JSON.stringify(
																					c
																				)
																			),
																		src: d
																			.context
																			.uid,
																	};
																}),
																(e.next = 14),
																Jc(
																	this.sendMessageToRetry(
																		l,
																		!0
																	)
																)
																	.pipe(
																		Lb(1e4),
																		ab(
																			function (
																				e
																			) {
																				return (
																					e instanceof
																						Tb &&
																						d.warn(
																							"Send invitation timeout"
																						),
																					ra(
																						e
																					)
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 14:
															return (
																(f = e.sent),
																(h = f.code),
																(p =
																	f.retryTimes),
																e.abrupt(
																	"return",
																	{
																		hasPeerReceived:
																			0 ===
																			h,
																		hasReSent:
																			0 !==
																			p,
																	}
																)
															);
														case 18:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "sendRawMessage",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n, r, o, i) {
										var s,
											a,
											c,
											u,
											l,
											f,
											h,
											p,
											d,
											b,
											g,
											v = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((s =
																	Date.now()),
																(a = o
																	? Ka.P2pRMsgNoOfflineFlag
																	: Ka.ChannelRMsg),
																Ta(r) &&
																	t instanceof
																		Uint8Array &&
																	"string" ==
																		typeof n)
															) {
																e.next = 4;
																break;
															}
															throw new ca(
																"The send message arguments are not valid",
																o ? fs : qi
															);
														case 4:
															if (
																!(
																	32768 <
																	t.byteLength +
																		new Blob(
																			[n]
																		).size
																)
															) {
																e.next = 8;
																break;
															}
															throw (
																(this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			a,
																		type: "common",
																		key: "sentcount",
																	}
																),
																this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			a,
																		type: "common",
																		key: "invalidmessagecount",
																	}
																),
																new ic(
																	"The message size is over the 32KB limit",
																	o ? bg : Il
																))
															);
														case 8:
															return (
																(c =
																	!ue.getParameter(
																		"DISABLE_MESSAGE_COMPRESSION"
																	) &&
																	128 <=
																		t.byteLength),
																(u =
																	this.chatManager.getChatInfo(
																		r
																	)),
																(l =
																	u.dialogue),
																(f =
																	u.sequence),
																(h =
																	this
																		.instanceId),
																this.log(
																	'A%s %s raw message is sending to %s: "'
																		.concat(
																			h,
																			"-"
																		)
																		.concat(
																			l,
																			"#"
																		)
																		.concat(
																			f,
																			'"'
																		),
																	c
																		? " compressed"
																		: "",
																	o
																		? "peer"
																		: "channel",
																	La(r)
																),
																(p = function (
																	e
																) {
																	return {
																		MiscMap:
																			{
																				description:
																					new TextEncoder().encode(
																						n
																					),
																			},
																		sequence:
																			f,
																		dialogue:
																			l,
																		instance:
																			h,
																		dst: r,
																		ms: P.fromNumber(
																			Date.now(),
																			!0
																		),
																		options:
																			new Ef(
																				{
																					IterationNumber:
																						e,
																					CompressionMethod:
																						c
																							? "Zlib"
																							: "Uncompressed",
																					MessageType:
																						o
																							? "PeerRawMessage"
																							: "ChannelRawMessage",
																					ToCache:
																						!1,
																					ToArchive:
																						!1,
																				}
																			).toLong(),
																		payload:
																			c
																				? St(
																						t
																				  )
																				: t,
																		src: v
																			.context
																			.uid,
																	};
																}),
																(e.next = 15),
																Jc(
																	this.sendMessageToRetry(
																		p,
																		!0
																	)
																)
																	.pipe(
																		Lb(
																			void 0 ===
																				i
																				? 1e4
																				: i
																		),
																		ab(
																			function (
																				e
																			) {
																				return (
																					e instanceof
																						Tb &&
																						v.warn(
																							"Send message timeout"
																						),
																					ra(
																						e
																					)
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 15:
															return (
																(d = e.sent),
																(b = d.code),
																(g = 0 === b),
																this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			a,
																		type: "common",
																		key: "sentcount",
																	}
																),
																g &&
																	(this.emit(
																		"messageCount",
																		{
																			messageCategory:
																				a,
																			type: "common",
																			key: "successcount",
																		}
																	),
																	this.emit(
																		"messageCount",
																		{
																			messageCategory:
																				a,
																			type: o
																				? "peer"
																				: "recipient",
																			delay: Xa(
																				s
																			).toNumber(),
																		}
																	)),
																e.abrupt(
																	"return",
																	{
																		hasPeerReceived:
																			g,
																	}
																)
															);
														case 21:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t, n, r, o, i) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "sendTextMessage",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n, r, o) {
										var i,
											s,
											a,
											c,
											u,
											l,
											f,
											h,
											p,
											d,
											b,
											g,
											v = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((i =
																	Date.now()),
																(s = r
																	? Ka.P2pSMsgNoOfflineFlag
																	: Ka.ChannelSMsg),
																Ta(n))
															) {
																e.next = 4;
																break;
															}
															throw new ca(
																"The send message arguments are not valid",
																r ? fs : qi
															);
														case 4:
															if (
																!(
																	32768 <
																	new Blob([
																		t,
																	]).size
																)
															) {
																e.next = 8;
																break;
															}
															throw (
																(this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			s,
																		type: "common",
																		key: "sentcount",
																	}
																),
																this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			s,
																		type: "common",
																		key: "invalidmessagecount",
																	}
																),
																new ic(
																	"The message size is over the 32KB limit",
																	r ? bg : Il
																))
															);
														case 8:
															return (
																(a =
																	!ue.getParameter(
																		"DISABLE_MESSAGE_COMPRESSION"
																	) &&
																	128 <=
																		new Blob(
																			[t]
																		).size),
																(c =
																	this.chatManager.getChatInfo(
																		n
																	)),
																(u =
																	c.dialogue),
																(l =
																	c.sequence),
																(f =
																	this
																		.instanceId),
																this.log(
																	'A%s %s message is sending to %s: "'
																		.concat(
																			f,
																			"-"
																		)
																		.concat(
																			u,
																			"#"
																		)
																		.concat(
																			l,
																			'"'
																		),
																	a
																		? " compressed"
																		: "",
																	r
																		? "peer"
																		: "channel",
																	La(n)
																),
																(h =
																	new TextEncoder().encode(
																		t
																	)),
																(p = function (
																	e
																) {
																	return {
																		MiscMap:
																			{},
																		sequence:
																			l,
																		dialogue:
																			u,
																		instance:
																			f,
																		dst: n,
																		ms: P.fromNumber(
																			Date.now(),
																			!0
																		),
																		options:
																			new Ef(
																				{
																					IterationNumber:
																						e,
																					CompressionMethod:
																						a
																							? "Zlib"
																							: "Uncompressed",
																					MessageType:
																						r
																							? "PeerTextMessage"
																							: "ChannelTextMessage",
																					ToCache:
																						!1,
																					ToArchive:
																						!1,
																				}
																			).toLong(),
																		payload:
																			a
																				? St(
																						h
																				  )
																				: h,
																		src: v
																			.context
																			.uid,
																	};
																}),
																(e.next = 16),
																Jc(
																	this.sendMessageToRetry(
																		p,
																		!0
																	)
																)
																	.pipe(
																		Lb(
																			void 0 ===
																				o
																				? 1e4
																				: o
																		),
																		ab(
																			function (
																				e
																			) {
																				return (
																					e instanceof
																						Tb &&
																						(v.emit(
																							"messageCount",
																							{
																								messageCategory:
																									s,
																								type: "common",
																								key: "sentcount",
																							}
																						),
																						v.emit(
																							"messageCount",
																							{
																								messageCategory:
																									s,
																								type: "common",
																								key: "timeoutcount",
																							}
																						),
																						v.warn(
																							"Send message timeout"
																						)),
																					ra(
																						e
																					)
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 16:
															return (
																(d = e.sent),
																(b = d.code),
																(g = 0 === b),
																this.emit(
																	"messageCount",
																	{
																		messageCategory:
																			s,
																		type: "common",
																		key: "sentcount",
																	}
																),
																g &&
																	(this.emit(
																		"messageCount",
																		{
																			messageCategory:
																				s,
																			type: "common",
																			key: "successcount",
																		}
																	),
																	this.emit(
																		"messageCount",
																		{
																			messageCategory:
																				s,
																			type: r
																				? "peer"
																				: "recipient",
																			delay: Xa(
																				i
																			).toNumber(),
																		}
																	)),
																e.abrupt(
																	"return",
																	{
																		hasPeerReceived:
																			g,
																	}
																)
															);
														case 22:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t, n, r, o) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "cleanLoginSubs",
							value: function (e, t) {
								Object.entries(this.loginSocketSubs[e]).forEach(
									function (e) {
										var n = (e = $a(e, 2))[1];
										("channels" === e[0] && t) ||
											(Array.isArray(n) ||
											n instanceof Map
												? n.forEach(function (e) {
														return e.unsubscribe();
												  })
												: n && n.unsubscribe());
									}
								),
									(this.loginSocketSubs[e] = {
										channels: t
											? this.loginSocketSubs[e].channels
											: new Map(),
										receivers: [],
									});
							},
						},
						{
							key: "sendMessageToRetry",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r,
											o,
											i,
											s,
											a,
											c,
											u,
											l,
											f,
											h = this,
											p = arguments;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((r =
																	2 <
																		p.length &&
																	void 0 !==
																		p[2]
																		? p[2]
																		: 0),
																this.log(
																	"Attempt to send the message ".concat(
																		n
																			? " with retrying, %o"
																			: "without retrying"
																	),
																	{
																		retryTimes:
																			r,
																	}
																),
																0 !==
																	(o =
																		this.getLoginSockets())
																		.length)
															) {
																e.next = 5;
																break;
															}
															throw Error(
																"no logged-in sockets"
															);
														case 5:
															return (
																(i = t(r)),
																o.forEach(
																	function (
																		e
																	) {
																		e.sendPacket(
																			"Message",
																			i
																		);
																	}
																),
																(s =
																	i.dialogue),
																(a =
																	i.sequence),
																(c =
																	i.instance),
																(u = o.map(
																	function (
																		e
																	) {
																		return e
																			.fromReceived(
																				"Ack"
																			)
																			.pipe(
																				yb(
																					function (
																						e
																					) {
																						return (
																							s.eq(
																								e.dialogue
																							) &&
																							a.eq(
																								e.sequence
																							) &&
																							c.eq(
																								e.instance
																							)
																						);
																					}
																				)
																			);
																	}
																)),
																(e.prev = 9),
																(e.next = 12),
																Jb.apply(
																	void 0,
																	Z(u)
																)
																	.pipe(
																		Lb(6e3),
																		ab(
																			function (
																				e
																			) {
																				return (
																					Ab(
																						e
																					) &&
																						h.warn(
																							"Message send timeout, retry times %d",
																							r
																						),
																					ra(
																						e
																					)
																				);
																			}
																		),
																		hb(1)
																	)
																	.toPromise()
															);
														case 12:
															return (
																(l = e.sent),
																(f = l.code),
																this.log(
																	"The message has been acked, %o",
																	{ code: f }
																),
																e.abrupt(
																	"return",
																	{
																		code: f,
																		retryTimes:
																			r,
																	}
																)
															);
														case 18:
															if (
																((e.prev = 18),
																(e.t0 =
																	e.catch(9)),
																!(
																	e.t0 instanceof
																		Tb && n
																))
															) {
																e.next = 22;
																break;
															}
															return e.abrupt(
																"return",
																this.sendMessageToRetry(
																	t,
																	!1,
																	r + 1
																)
															);
														case 22:
															throw e.t0;
														case 23:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[9, 18]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "initKeepAliveSender",
							value: function () {
								var e = this;
								this.lastLoginSockets
									.map(function (t) {
										return t.pipe(
											Kb(function (t) {
												return dd(
													0,
													2500,
													Ce() ? void 0 : oF
												).pipe(
													sa(function () {
														e.sendPing(t);
													})
												);
											})
										);
									})
									.forEach(function (t, n) {
										var r = e.loginSocketSubs[n].keepAlive;
										void 0 !== r && r.unsubscribe(),
											(e.loginSocketSubs[n].keepAlive =
												t.subscribe({
													error: function () {},
												}));
									});
							},
						},
						{
							key: "initKeepAliveReconnector",
							value: function () {
								var e = this;
								this.lastLoginSockets
									.map(function (e) {
										return e.pipe(
											Kb(function (e) {
												var t,
													n = !1,
													r = e.userJoin$.pipe(
														sa(function () {
															n = !0;
														})
													),
													o = e.input$.pipe(
														sa(function (e) {
															"Ping" !==
																yj[e.uri].slice(
																	0,
																	-3
																) && (n = !1);
														})
													);
												return Jb(
													dd(6e3, 1e4).pipe(
														yv(e.receivedPacket),
														sa(function (r) {
															(r = $a(r, 2)),
																(r = $a(
																	r[1],
																	2
																)[1]),
																t !== r ||
																	n ||
																	e.forceReconnect(),
																(t = r);
														})
													),
													r,
													o
												);
											})
										);
									})
									.forEach(function (t, n) {
										var r =
											e.loginSocketSubs[n]
												.keepAliveReconnector;
										void 0 !== r && r.unsubscribe(),
											(e.loginSocketSubs[
												n
											].keepAliveReconnector =
												t.subscribe({
													error: function () {},
												}));
									});
							},
						},
						{
							key: "initLoginReceiver",
							value: function () {
								var e = this;
								fb.apply(
									void 0,
									Z(
										this.lastLoginSockets.map(function (t) {
											return t.pipe(
												Kb(function (t) {
													return t
														.fromReceived(
															"UserTicketNearlyExpire"
														)
														.pipe(
															sv(5e3),
															sa(
																e.onUserTicketNearlyExpire(
																	t
																)
															)
														);
												})
											);
										})
									)
								).subscribe();
								var t = Db(this, "messageCount"),
									n = t.pipe(
										yb(function (e) {
											return (
												e.messageCategory ===
												Ka.ChannelSMsg
											);
										})
									);
								n.subscribe(function (t) {
									return e.updateMessageCount(t);
								}),
									n.pipe(dh(6e3)).subscribe(function (t) {
										t.length &&
											e.chanelStringMessageReport.report();
									}),
									Jb(ob(void 0), n)
										.pipe(
											Kb(function () {
												return Qe(36e5);
											})
										)
										.subscribe(function () {
											e.chanelStringMessageReport.report();
										}),
									(n = t.pipe(
										yb(function (e) {
											return (
												e.messageCategory ===
												Ka.ChannelRMsg
											);
										})
									)).subscribe(function (t) {
										return e.updateMessageCount(t);
									}),
									n.pipe(dh(6e3)).subscribe(function (t) {
										t.length &&
											e.chanelRawMessageReport.report();
									}),
									Jb(ob(void 0), n)
										.pipe(
											Kb(function () {
												return Qe(36e5);
											})
										)
										.subscribe(function () {
											e.chanelRawMessageReport.report();
										}),
									(n = t.pipe(
										yb(function (e) {
											return (
												e.messageCategory ===
												Ka.P2pSMsgNoOfflineFlag
											);
										})
									)).subscribe(function (t) {
										return e.updateMessageCount(t);
									}),
									n.pipe(dh(6e3)).subscribe(function (t) {
										t.length &&
											e.p2pSMsgNoOfflineReport.report();
									}),
									Jb(ob(void 0), n)
										.pipe(
											Kb(function () {
												return Qe(36e5);
											})
										)
										.subscribe(function () {
											e.p2pSMsgNoOfflineReport.report();
										}),
									(t = t.pipe(
										yb(function (e) {
											return (
												e.messageCategory ===
												Ka.P2pRMsgNoOfflineFlag
											);
										})
									)).subscribe(function (t) {
										return e.updateMessageCount(t);
									}),
									t.pipe(dh(6e3)).subscribe(function (t) {
										t.length &&
											e.p2pRMsgNoOfflineReport.report();
									}),
									Jb(ob(void 0), t)
										.pipe(
											Kb(function () {
												return Qe(36e5);
											})
										)
										.subscribe(function () {
											e.p2pSMsgNoOfflineReport.report();
										}),
									this.lastLoginSockets
										.map(function (t) {
											return t.pipe(
												Kb(function (t) {
													return Jb(
														Db(t, "reconnect").pipe(
															sa(
																e.onSocketReconnect(
																	t
																)
															)
														),
														t
															.fromReceived(
																"Message"
															)
															.pipe(
																sa(
																	e.onMessage(
																		t
																	)
																)
															),
														t
															.fromReceived(
																"GroupEnterNotice"
															)
															.pipe(
																sa(
																	e.onGroupEnterNotice()
																)
															),
														t
															.fromReceived(
																"GroupLeaveNotice"
															)
															.pipe(
																sa(
																	e.onGroupLeaveNotice()
																)
															),
														t
															.fromReceived(
																"GroupCountNotice"
															)
															.pipe(
																sa(
																	e.onGroupCountNotice()
																)
															),
														t
															.fromReceived(
																"GroupAttributeAlt"
															)
															.pipe(
																sa(
																	e.onGroupAttributeAlt()
																)
															),
														t
															.fromReceived(
																"UserJoinNotice"
															)
															.pipe(
																sa(
																	e.onUserNotice(
																		ta
																			.PeerOnlineState
																			.ONLINE
																	)
																)
															),
														t
															.fromReceived(
																"UserQuitNotice"
															)
															.pipe(
																sa(
																	e.onUserNotice(
																		ta
																			.PeerOnlineState
																			.OFFLINE
																	)
																)
															),
														t
															.fromReceived(
																"UserWaitNotice"
															)
															.pipe(
																sa(
																	e.onUserNotice(
																		ta
																			.PeerOnlineState
																			.UNREACHABLE
																	)
																)
															),
														t
															.fromReceived(
																"Pong"
															)
															.pipe(
																sa(e.onPong())
															),
														t
															.fromReceived(
																"UserDrop"
															)
															.pipe(
																sa(
																	e.onUserDrop(
																		t
																	)
																)
															),
														t
															.fromReceived(
																"GroupDrop"
															)
															.pipe(
																sa(
																	e.onGroupDrop()
																)
															)
													).pipe(Uf(void 0));
												})
											);
										})
										.forEach(function (t, n) {
											e.loginSocketSubs[n].receivers.push(
												t.subscribe({
													error: function () {},
												})
											);
										});
							},
						},
						{
							key: "requestSocketLogin",
							value: function (e, t, n) {
								var r = this;
								return nn(
									yd(function () {
										(r.userJoinOptions = new et(t)),
											e.sendPacket("UserJoin", {
												account: r.context.uid,
												instance: r.instanceId,
												opt: r.userJoinOptions.toLong(),
												seq: n,
												ticket: e.ticket,
											});
									}),
									e.fromReceived("UserResp").pipe(
										Ca(function (e) {
											return n.eq(e.seq);
										}),
										sa(function (t) {
											if (0 !== (t = t.code))
												throw (
													(r.clearSockets(),
													r.logError(
														"Connected to gateway success but the Rtm server rejected login"
													),
													new Ja(
														[
															"Login failure. The response code from the RTM service is %d",
															t,
														],
														Pg
													))
												);
											(e.attemptsSinceLastError = 0),
												(e.loggedIn = !0),
												r.log(
													"ENV_%d logged in",
													e.env
												);
										}),
										Uf(e),
										Lb(6e3)
									)
								).pipe(
									yb(function (e) {
										return void 0 !== e;
									}),
									ab(function (n) {
										return (
											n instanceof Tb &&
												r.warn(
													"Login response timeout, rejoin: %s",
													t
												),
											r.clearSockets(),
											(n.name = "loginRespTimeout"),
											r.emit("banEdgeIP", e.ip),
											ra(n)
										);
									})
								);
							},
						},
						{
							key: "getSocketLoginObservables",
							value: function (e, t) {
								var n = this;
								return e.map(function (e) {
									return e.pipe(
										Kb(function (e, r) {
											return (
												n.incSeqIfNeeded(e.env),
												n.requestSocketLogin(
													e,
													0 !== r,
													0 === r ? t : n.seq
												)
											);
										}),
										Se()
									);
								});
							},
						},
						{
							key: "incSeqIfNeeded",
							value: function (e) {
								if (![0, 1].includes(e))
									throw new mb({
										INVALID_ENV:
											"The env argument is not 0 or 1",
									});
								this.seqSentStatuses[e] &&
									((this.seq = this.seq.add(1)),
									(this.seqSentStatuses = [!1, !1])),
									(this.seqSentStatuses[e] = !0);
							},
						},
						{
							key: "incGetSeq",
							value: function () {
								return (
									(this.seq = this.seq.add(1)),
									(this.seqSentStatuses = [!0, !0]),
									this.seq
								);
							},
						},
						{
							key: "getLoginSockets",
							value: function () {
								for (
									var e = this.curLoginSockets,
										t = -1,
										n = null == e ? 0 : e.length,
										r = 0,
										o = [];
									++t < n;

								) {
									var i = e[t];
									i && (o[r++] = i);
								}
								return o;
							},
						},
						{
							key: "emitMessage",
							value: function (e, n) {
								var r,
									o = e.options,
									i = e.payload,
									s = e.src,
									a = e.dst,
									c = e.instance,
									u = e.dialogue,
									l = e.sequence,
									f = e.ms,
									h = e.MiscMap;
								this.dialogueSequenceLru.set(u.toString(), l),
									(c = ""
										.concat(c, "-")
										.concat(u, "#")
										.concat(l)),
									this.msgDedupLru.has(c)
										? this.warn(
												"Env_%d: Messages out-of-order or not start with 1: %s",
												n,
												c
										  )
										: (this.msgDedupLru.set(c, void 0),
										  (o = new Ef(o)),
										  this.lastLoginSockets.forEach(
												((r = ma(
													N.mark(function n(r) {
														var o;
														return N.wrap(function (
															n
														) {
															for (;;)
																switch (
																	(n.prev =
																		n.next)
																) {
																	case 0:
																		return (
																			(n.next = 2),
																			r
																				.pipe(
																					hb(
																						1
																					)
																				)
																				.toPromise()
																		);
																	case 2:
																		(o =
																			n.sent),
																			t.sendMessageAck(
																				e,
																				o
																			);
																	case 4:
																	case "end":
																		return n.stop();
																}
														},
														n);
													})
												)),
												function (e) {
													return r.apply(
														this,
														arguments
													);
												})
										  ),
										  (n = o.isZlibCompressed()),
										  o.isInvitation()
												? ((a = cg(
														n
															? mm(
																	ao(
																		i,
																		Uint8Array.of(
																			0,
																			0,
																			0,
																			0
																		)
																	)
															  )
															: i
												  )),
												  (a = JSON.parse(a)),
												  this.log(
														"The received invitation body is %o",
														a
												  ),
												  this.emit(
														"invitationMessage",
														{
															body: a,
															type: o.getInvitationType(),
															peerId: s,
															serverReceivedTs:
																f.toNumber(),
														}
												  ))
												: o.isTextMessage()
												? ((h = o.isPeerTextMessage()),
												  (i = cg(
														n
															? mm(
																	ao(
																		i,
																		Uint8Array.of(
																			0,
																			0,
																			0,
																			0
																		)
																	)
															  )
															: i
												  )),
												  this.info(
														"Received a %s %s text message from %s to %s, %s",
														n ? " compressed" : "",
														h ? "peer" : "channel",
														La(s),
														La(a),
														c
												  ),
												  h
														? ((s = {
																text: i,
																peerId: s,
																properties: {
																	serverReceivedTs:
																		f.toNumber(),
																},
														  }),
														  this.emit(
																"peerTextMessage",
																s
														  ),
														  this.emit(
																"messageCount",
																{
																	messageCategory:
																		Ka.P2pSMsgNoOfflineFlag,
																	type: "common",
																	key: "receivedcount",
																}
														  ))
														: (this.emit(
																"channelTextMessage",
																{
																	channelId:
																		a,
																	memberId: s,
																	text: i,
																	properties:
																		{
																			serverReceivedTs:
																				f.toNumber(),
																		},
																}
														  ),
														  this.emit(
																"messageCount",
																{
																	messageCategory:
																		Ka.ChannelSMsg,
																	type: "common",
																	key: "receivedcount",
																}
														  )))
												: o.isRawMessage() &&
												  ((o = o.isRawPeerMessage()),
												  (h =
														void 0 ===
														(h = h.description)
															? ""
															: cg(h)),
												  (i = n ? mm(i) : i),
												  this.info(
														"Received a %s %s raw message from %s to %s, %s",
														n ? " compressed" : "",
														o ? "peer" : "channel",
														La(s),
														La(a),
														c
												  ),
												  o
														? ((s = {
																desc: h,
																raw: i,
																peerId: s,
																properties: {
																	serverReceivedTs:
																		f.toNumber(),
																},
														  }),
														  this.emit(
																"peerRawMessage",
																s
														  ),
														  this.emit(
																"messageCount",
																{
																	messageCategory:
																		Ka.P2pRMsgNoOfflineFlag,
																	type: "common",
																	key: "receivedcount",
																}
														  ))
														: (this.emit(
																"channelRawMessage",
																{
																	desc: h,
																	raw: i,
																	channelId:
																		a,
																	memberId: s,
																	properties:
																		{
																			serverReceivedTs:
																				f.toNumber(),
																		},
																}
														  ),
														  this.emit(
																"messageCount",
																{
																	messageCategory:
																		Ka.ChannelRMsg,
																	type: "common",
																	key: "receivedcount",
																}
														  ))));
							},
						},
						{
							key: "onSocketReconnect",
							value: function (e) {
								var t = this;
								return function () {
									var n = [0, 1].filter(function (t) {
										return t !== e.env;
									})[0];
									(n = t.connection.curOpenSockets[n]) &&
										!n.loggedIn &&
										t.emit("connectionLost");
								};
							},
						},
						{
							key: "onUserTicketNearlyExpire",
							value: function (e) {
								var t = this;
								return function (n) {
									(n = n.ticket) !== t.lastNoticeTicket &&
									n === e.ticket
										? ((t.lastNoticeTicket = n),
										  t.emit("tokenPrivilegeWillExpire"))
										: t
												.requestUpdateEdgeTicket(
													e.ticket
												)
												.toPromise();
								};
							},
						},
						{
							key: "onGroupDrop",
							value: function () {
								var e = this;
								return function (t) {
									var n,
										r = t.account;
									bb(
										"ChnLeave",
										{
											cname: r,
											lts: P.fromNumber(Date.now()),
											elapse: Xa(e.startTime),
											errCode: RB,
											sid: sb(e.instanceId),
											userId: e.context.uid,
										},
										null !==
											(n =
												e.context.config
													.enableCloudProxy) &&
											void 0 !== n &&
											n
									),
										[0, 1].forEach(function (t) {
											return e.loginSocketSubs[
												t
											].channels.delete(r);
										}),
										e.logError(
											"the user is kicked out of the current channel"
										);
								};
							},
						},
						{
							key: "onUserDrop",
							value: function (e) {
								var t = this;
								return function (n) {
									var r;
									(n = n.code),
										bb(
											"KickedOff",
											{
												code: 0,
												elapse: Xa(t.startTime),
												linkId: parseInt(
													e.name.split("-")[1],
													10
												),
												lts: P.fromNumber(Date.now()),
												server: e.address,
												serverCode: n,
												sid: sb(t.instanceId),
												userId: t.context.uid,
											},
											null !==
												(r =
													t.context.config
														.enableCloudProxy) &&
												void 0 !== r &&
												r
										),
										10006 === n || 10001 === n
											? t.warn(
													"Login too often and kicked off, reconnect and login"
											  )
											: 10009 === n
											? (t.warn(
													"The instance ID conflicts, reconnecting"
											  ),
											  (t.instanceId = nh()),
											  (t.context.sid = sb(
													t.instanceId
											  )),
											  t.emit(
													"instanceChanged",
													t.instanceId
											  ))
											: [2, 11, 14, 15, 16].includes(n) &&
											  (t.emit("userDrop", n),
											  t.clearSockets());
								};
							},
						},
						{
							key: "clearSockets",
							value: function () {
								var e = this,
									t =
										0 < arguments.length &&
										void 0 !== arguments[0]
											? arguments[0]
											: 0,
									n =
										1 < arguments.length &&
										void 0 !== arguments[1] &&
										arguments[1];
								[0, 1].forEach(function (r) {
									e.cleanLoginSubs(r, n),
										e.connection.closeSocket(r, t);
								});
							},
						},
						{
							key: "onMessage",
							value: function (e) {
								var t = this;
								return function (n) {
									var r = n.dialogue,
										o = n.instance,
										i = n.sequence,
										s = n.options;
									if (n.src === t.context.uid)
										t.log(
											"The message is from the local account, ignored"
										);
									else {
										var a = r.toString(),
											c =
												t.dialPendingMsgSubjectMap.get(
													a
												);
										if (
											((r = ""
												.concat(o, "-")
												.concat(r, "#")
												.concat(i)),
											c)
										)
											c.next(n),
												t.log(
													"Env_%d: The dialogue has pending messages, next: %s",
													e.env,
													r
												);
										else {
											var u =
												t.dialogueSequenceLru.get(a);
											if (
												((c = !u && i.eq(1)),
												(o =
													void 0 !== u &&
													i.sub(u).eq(1)),
												c || o)
											)
												t.emitMessage(n, e.env);
											else {
												if (u) {
													if (i.lte(u)) return;
													t.log(
														"Env_%d: The message pended, the sequence is not continuous with the last: %s",
														e.env,
														r
													);
												} else
													t.log(
														"Env_%d: The message pended, the first sequence is not equal to 1: %s",
														e.env,
														r
													);
												(i = new rb()),
													t.dialPendingMsgSubjectMap.set(
														a,
														i
													);
												var l = i.pipe(
													Au(zl),
													gh(function (e, t) {
														return [].concat(Z(e), [
															t,
														]);
													}, []),
													Ea(function (e) {
														return Z(e).sort(
															function (e, t) {
																return (
																	(e =
																		e.sequence),
																	(t =
																		t.sequence),
																	e.eq(t)
																		? 0
																		: e.gt(
																				t
																		  )
																		? 1
																		: -1
																);
															}
														);
													}),
													wn(1)
												);
												(s =
													!(s = new Ef(
														s
													)).isFromCache() &&
													!s.isBufferedMessage()),
													l
														.pipe(
															Kc(
																dd(
																	s
																		? 750
																		: 1500
																)
															),
															Ca(function (e) {
																if (
																	2 > e.length
																)
																	return !1;
																for (
																	var t =
																			void 0 ===
																			u
																				? P.fromNumber(
																						1,
																						!0
																				  )
																				: u.add(
																						1
																				  ),
																		n = 0;
																	n <
																	e.length;
																	t =
																		t.add(
																			1
																		),
																		n++
																)
																	if (
																		!e[
																			n
																		].sequence.eq(
																			t
																		)
																	)
																		return !1;
																return !0;
															}),
															fh(function () {
																t.dialPendingMsgSubjectMap.delete(
																	a
																);
															})
														)
														.subscribe(
															function (n) {
																n.forEach(
																	function (
																		n
																	) {
																		t.emitMessage(
																			n,
																			e.env
																		),
																			t.log(
																				"Env_%d: The message queue has fully ordered, emitting: %s",
																				e.env,
																				""
																					.concat(
																						n.instance,
																						"-"
																					)
																					.concat(
																						n.dialogue,
																						"#"
																					)
																					.concat(
																						n.sequence
																					)
																			);
																	}
																);
															},
															function (n) {
																n instanceof
																	eh &&
																	l
																		.pipe(
																			hb(
																				1
																			)
																		)
																		.subscribe(
																			function (
																				n
																			) {
																				return n.forEach(
																					function (
																						n
																					) {
																						t.log(
																							"Env_%d: The message pending queue expired, emitting: %s",
																							e.env,
																							""
																								.concat(
																									n.instance,
																									"-"
																								)
																								.concat(
																									n.dialogue,
																									"#"
																								)
																								.concat(
																									n.sequence
																								)
																						),
																							t.emitMessage(
																								n,
																								e.env
																							);
																					}
																				);
																			}
																		);
															}
														),
													i.next(n);
											}
										}
									}
								};
							},
						},
						{
							key: "onPong",
							value: function () {
								var e = this;
								return function () {
									document.hidden &&
										e
											.getLoginSockets()
											.forEach(function (t) {
												e.sendPing(t);
											});
								};
							},
						},
						{
							key: "onGroupEnterNotice",
							value: function () {
								var e = this;
								return function (t) {
									e.emit("memberNotice", {
										channelId: t.group,
										seq: t.seq,
										instance: t.instance,
										memberId: t.user,
										type: "MemberJoined",
										size: t.size,
									});
								};
							},
						},
						{
							key: "onGroupLeaveNotice",
							value: function () {
								var e = this;
								return function (t) {
									e.emit("memberNotice", {
										channelId: t.group,
										seq: t.seq,
										instance: t.instance,
										memberId: t.user,
										type: "MemberLeft",
										size: t.size,
									});
								};
							},
						},
						{
							key: "onGroupCountNotice",
							value: function () {
								var e = this;
								return function (t) {
									e.emit("memberNotice", {
										channelId: t.group,
										seq: t.seq,
										instance: t.instance,
										type: "MemberCountUpdated",
										size: t.size,
									});
								};
							},
						},
						{
							key: "onGroupAttributeAlt",
							value: function () {
								var e = this;
								return function (t) {
									var n = t.group;
									(t = Ki(t, pF)),
										e.emit(
											"channelAttributesUpdated",
											Wa({ channelId: n }, t)
										);
								};
							},
						},
						{
							key: "onUserNotice",
							value: function (e) {
								var t = this;
								return function (n) {
									t.emit("peerOnlineStatusChanged", {
										peerId: n.user,
										instance: n.instance,
										seq: n.seq,
										state: e,
									});
								};
							},
						},
						{
							key: "sendPing",
							value: function (e) {
								2500 >= Date.now() - this.lastPingTime[e.env] ||
									(this.incSeqIfNeeded(e.env),
									e.sendPacket("Ping", {
										ms: P.fromNumber(Date.now(), !0),
										seq: this.seq,
									}),
									(this.lastPingTime[e.env] = Date.now()));
							},
						},
						{
							key: "updateMessageCount",
							value: function (e) {
								var t,
									n = ((t = {}),
									x(
										t,
										Ka.ChannelRMsg,
										this.chanelRawMessageReport
									),
									x(
										t,
										Ka.ChannelSMsg,
										this.chanelStringMessageReport
									),
									x(
										t,
										Ka.P2pRMsgNoOfflineFlag,
										this.p2pRMsgNoOfflineReport
									),
									x(
										t,
										Ka.P2pSMsgNoOfflineFlag,
										this.p2pSMsgNoOfflineReport
									),
									x(t, 3, void 0),
									x(t, 4, void 0),
									x(t, 7, void 0),
									x(t, 8, void 0),
									x(t, 9, void 0),
									x(t, 10, void 0),
									t)[e.messageCategory];
								"common" === e.type
									? null == n || n.updateCommonCount(e.key)
									: "peer" === e.type
									? null == n || n.updatePeerAckCount(e.delay)
									: null == n ||
									  n.updateNorecipientackCount(e.delay);
							},
						},
					],
					[
						{
							key: "sendMessageAck",
							value: function (e, t) {
								var n = new Ef(e.options);
								(n.isInvitation() || n.isPeerMessage()) &&
									t.sendPacket("Ack", {
										code: 0,
										dialogue: e.dialogue,
										instance: e.instance,
										sequence: e.sequence,
									});
							},
						},
					]
				),
				t
			);
		})(sc());
	x(Tt, "genTimeoutError", function (e, t) {
		return ob(void 0).pipe(
			Zd(void 0 === t ? 1e4 : t),
			Ea(function () {
				throw new Ub(
					[
						"Request timed out after %ds",
						(void 0 === t ? 1e4 : t) / 1e3,
					],
					e
				);
			})
		);
	});
	var Ut,
		nm,
		om = 0,
		pm = 0;
	(Ng.v1 = function (e, t, n) {
		n = (t && n) || 0;
		var r = t || [],
			o = (e = e || {}).node || Ut,
			i = void 0 !== e.clockseq ? e.clockseq : nm;
		if (null == o || null == i) {
			var s = Kr();
			null == o && (o = Ut = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]),
				null == i && (i = nm = 16383 & ((s[6] << 8) | s[7]));
		}
		s = void 0 !== e.msecs ? e.msecs : new Date().getTime();
		var a = void 0 !== e.nsecs ? e.nsecs : pm + 1,
			c = s - om + (a - pm) / 1e4;
		if (
			(0 > c && void 0 === e.clockseq && (i = (i + 1) & 16383),
			(0 > c || s > om) && void 0 === e.nsecs && (a = 0),
			1e4 <= a)
		)
			throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
		for (
			om = s,
				pm = a,
				nm = i,
				e = (1e4 * (268435455 & (s += 122192928e5)) + a) % 4294967296,
				r[n++] = (e >>> 24) & 255,
				r[n++] = (e >>> 16) & 255,
				r[n++] = (e >>> 8) & 255,
				r[n++] = 255 & e,
				e = ((s / 4294967296) * 1e4) & 268435455,
				r[n++] = (e >>> 8) & 255,
				r[n++] = 255 & e,
				r[n++] = ((e >>> 24) & 15) | 16,
				r[n++] = (e >>> 16) & 255,
				r[n++] = (i >>> 8) | 128,
				r[n++] = 255 & i,
				i = 0;
			6 > i;
			++i
		)
			r[n + i] = o[i];
		return t || Lr(r);
	}),
		(Ng.v4 = Ng);
	var qm = yi(),
		Sd,
		Hf = ta.LocalInvitationFailureReason,
		Sa = ta.LocalInvitationState,
		qF =
			((Sd = (function (e) {
				function t(e, r, o) {
					va(this, t);
					var i = n.call(this, o, "RtmLocalInvitation", !0);
					return (
						x(z(i), "state", Sa.IDLE),
						x(
							z(i),
							"localInvitationEnd$",
							fb(
								Db(z(i), "LocalInvitationAccepted"),
								Db(z(i), "LocalInvitationRefused"),
								Db(z(i), "LocalInvitationFailure"),
								Db(z(i), "LocalInvitationCanceled")
							).pipe(hb(1))
						),
						x(z(i), "callId", Ng.v4()),
						x(z(i), "_content", ""),
						x(z(i), "_channelId", ""),
						x(z(i), "_response", ""),
						x(z(i), "calleeId", void 0),
						x(z(i), "logger", void 0),
						x(z(i), "getSession", void 0),
						(i.calleeId = e),
						(i.getSession = r),
						(i.logger = o),
						i
					);
				}
				Ga(t, e);
				var n = Ha(t);
				return (
					eb(t, [
						{
							key: "channelId",
							get: function () {
								return this._channelId;
							},
							set: function (e) {
								this.state !== Sa.IDLE
									? this.info(
											"set channelId only allow before invitation sent to remote"
									  )
									: (this.log(
											"set channelId for %s",
											this.callId
									  ),
									  (this._channelId = e));
							},
						},
						{
							key: "content",
							get: function () {
								return this._content;
							},
							set: function (e) {
								this.log("set content for %s", this.callId),
									(this._content = e);
							},
						},
						{
							key: "response",
							get: function () {
								return this._response;
							},
							set: function (e) {
								throw new ca(
									'Cannot set the "response" of the LocalInvitation instance.',
									Xc
								);
							},
						},
						{
							key: "send",
							value: function () {
								var e,
									t = this;
								if (
									this.state === Sa.SENT_TO_REMOTE ||
									this.state === Sa.RECEIVED_BY_REMOTE
								)
									throw new da(
										"The local invitation send failure. The call invitation has already been sent.",
										NB
									);
								if (this.isLocalInvitationEnd())
									throw new da(
										"The local invitation send failure. The call invitation has ended.",
										ri
									);
								if (
									0 < this._channelId.length &&
									!Ta(this._channelId)
								)
									throw new ca(
										"Illegal invitation channel ID",
										Xc
									);
								if (!Ta(this.calleeId))
									throw new ca(
										"Illegal invitation callee user ID",
										Xc
									);
								if (8192 < rh(this._content))
									throw new ca(
										'The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.',
										Xc
									);
								(this.state = Sa.SENT_TO_REMOTE),
									yd(
										ma(
											N.mark(function n() {
												var r, o, i;
												return N.wrap(function (n) {
													for (;;)
														switch (
															(n.prev = n.next)
														) {
															case 0:
																return (
																	(n.next = 2),
																	t
																		.getSession()
																		.sendInvitationMessage(
																			{
																				peerId: t.calleeId,
																				callId: t.callId,
																				extra: t._content,
																				type: "CallInvite",
																				channelId:
																					t._channelId,
																			}
																		)
																);
															case 2:
																if (
																	((r =
																		n.sent),
																	(o =
																		r.hasPeerReceived),
																	(i =
																		r.hasReSent),
																	!t.isLocalInvitationEnd())
																) {
																	n.next = 7;
																	break;
																}
																throw new Ub(
																	"send invitation timeout"
																);
															case 7:
																if (
																	(t.log(
																		"The local invitation has sent to the callee"
																	),
																	o || i)
																) {
																	n.next = 11;
																	break;
																}
																throw (e =
																	new qm({
																		PEER_NOT_ONLINE:
																			"The peer of the invitation is not online",
																	}));
															case 11:
																if (o) {
																	n.next = 14;
																	break;
																}
																throw (e =
																	new qm({
																		RESENT_AND_OFFLINE:
																			"Resent and the peer of the invitation is not online",
																	}));
															case 14:
															case "end":
																return n.stop();
														}
												}, n);
											})
										)
									)
										.pipe(
											Re(function (e) {
												return e.pipe(
													sa(function (e) {
														if (!(e instanceof qm))
															throw e;
													}),
													Zd(2e3)
												);
											}),
											Lb(3e4),
											ab(function (e) {
												return (
													Ab(e) &&
														t.warn(
															"local invitation ack timed out"
														),
													ra(e)
												);
											}),
											Kc(this.localInvitationEnd$)
										)
										.subscribe({
											next: function () {
												t.state ===
												Sa.RECEIVED_BY_REMOTE
													? t.log(
															'The local invitation state is already "RECEIVED_BY_REMOTE", skipped emitting "LocalInvitationReceivedByPeer"'
													  )
													: t.state !==
													  Sa.SENT_TO_REMOTE
													? t.log(
															"The invitation has ended, skipped emitting the %s event",
															"LocalInvitationReceivedByPeer"
													  )
													: (t.info(
															"The peer received the local invitation %s.",
															t.callId
													  ),
													  (t.state =
															Sa.RECEIVED_BY_REMOTE),
													  t.emit(
															"LocalInvitationReceivedByPeer"
													  ),
													  t.localInvitationEnd$
															.pipe(
																Lb(6e4),
																ab(function (
																	e
																) {
																	return (
																		Ab(e) &&
																			t.warn(
																				"local invitation expired"
																			),
																		ra(e)
																	);
																})
															)
															.subscribe({
																error: function () {
																	(t.state =
																		Sa.FAILURE),
																		t.emit(
																			"LocalInvitationFailure",
																			Hf.INVITATION_EXPIRE
																		);
																},
															}));
											},
											error: function (n) {
												t.isLocalInvitationEnd()
													? t.log(
															"The invitation has ended, skipped emitting the %s event",
															"LocalInvitationFailure"
													  )
													: ((t.state = Sa.FAILURE),
													  Ab(n) && e
															? "PEER_NOT_ONLINE" ===
															  e.code
																? t.emit(
																		"LocalInvitationFailure",
																		Hf.PEER_OFFLINE
																  )
																: "RESENT_AND_OFFLINE" ===
																		e.code &&
																  t.emit(
																		"LocalInvitationFailure",
																		Hf.PEER_NO_RESPONSE
																  )
															: Ab(n)
															? t.emit(
																	"LocalInvitationFailure",
																	Hf.PEER_NO_RESPONSE
															  )
															: "RtmInvalidStatusError" ===
															  n.name
															? t.emit(
																	"LocalInvitationFailure",
																	Hf.NOT_LOGGEDIN
															  )
															: t.emit(
																	"LocalInvitationFailure",
																	Hf.UNKNOWN
															  ));
											},
										});
							},
						},
						{
							key: "cancel",
							value: function () {
								if (this.isLocalInvitationEnd())
									throw new da(
										"The local invitation cancel failure",
										ri
									);
								if (this.state === Sa.IDLE)
									throw new da(
										"The local invitation has not been sent",
										MB
									);
								if (8192 < rh(this._content))
									throw new ca(
										'The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.',
										Xc
									);
								this.getSession().sendInvitationMessage({
									callId: this.callId,
									peerId: this.calleeId,
									type: "CallCancel",
									channelId: this._channelId,
									extra: this._content,
								}),
									(this.state = Sa.CANCELED),
									this.emit("LocalInvitationCanceled");
							},
						},
						{
							key: "onAcceptReceived",
							value: function (e) {
								if (
									this.isLocalInvitationEnd() &&
									this.state !== Sa.ACCEPTED_BY_REMOTE
								)
									this.log(
										"The invitation has ended, skipped emitting the %s event",
										"LocalInvitationAccepted"
									);
								else {
									if (this.state === Sa.IDLE)
										throw new da(
											"the local have not sent the invitation, how can remote accept it?"
										);
									this.getSession().sendInvitationMessage({
										callId: this.callId,
										isAcceptAck: !0,
										type: "CallAccept",
										peerId: this.calleeId,
										channelId: this.channelId,
									}),
										this.state === Sa.ACCEPTED_BY_REMOTE
											? this.log(
													"already in ACCEPTED_BY_REMOTE state, ignore emit ACCEPTED_BY_REMOTE"
											  )
											: (this.state ===
													Sa.SENT_TO_REMOTE &&
													(this.log(
														"receive LocalInvitationAccepted before remote response to the invitation"
													),
													(this.state =
														Sa.RECEIVED_BY_REMOTE),
													this.emit(
														"LocalInvitationReceivedByPeer"
													)),
											  (this.state =
													Sa.ACCEPTED_BY_REMOTE),
											  (this._response = e),
											  this.emit(
													"LocalInvitationAccepted",
													e
											  ));
								}
							},
						},
						{
							key: "onRefuseReceived",
							value: function (e) {
								if (this.isLocalInvitationEnd())
									this.log(
										"The invitation has ended, skipped emitting the %s event",
										"LocalInvitationRefused"
									);
								else {
									if (this.state === Sa.IDLE)
										throw new da(
											"the local have not sent the invitation, how can remote refuse it?"
										);
									this.state === Sa.SENT_TO_REMOTE &&
										(this.log(
											"receive LocalInvitationRefused before remote response to the invitation"
										),
										(this.state = Sa.RECEIVED_BY_REMOTE),
										this.emit(
											"LocalInvitationReceivedByPeer"
										)),
										(this._response = e),
										(this.state = Sa.REFUSED_BY_REMOTE),
										this.emit("LocalInvitationRefused", e);
								}
							},
						},
						{
							key: "isLocalInvitationEnd",
							value: function () {
								return [
									Sa.CANCELED,
									Sa.FAILURE,
									Sa.ACCEPTED_BY_REMOTE,
									Sa.REFUSED_BY_REMOTE,
								].includes(this.state);
							},
						},
					]),
					t
				);
			})(sc())),
			Da(
				Sd.prototype,
				"send",
				[Mc],
				Object.getOwnPropertyDescriptor(Sd.prototype, "send"),
				Sd.prototype
			),
			Da(
				Sd.prototype,
				"cancel",
				[Mc],
				Object.getOwnPropertyDescriptor(Sd.prototype, "cancel"),
				Sd.prototype
			),
			Sd),
		Hi = ta.RemoteInvitationFailureReason,
		Fb = ta.RemoteInvitationState,
		rF = (function (e) {
			function t(e) {
				var r = e.invitationChannel,
					o = e.extraContent,
					i = e.callId,
					s = e.callerId,
					a = e.logger;
				(e = e.getSession), va(this, t);
				var c = n.call(this, a, "RtmRemoteInvitation", !0);
				return (
					x(z(c), "state", Fb.INVITATION_RECEIVED),
					x(
						z(c),
						"remoteInvitationEnd$",
						fb(
							Db(z(c), "RemoteInvitationCanceled"),
							Db(z(c), "RemoteInvitationRefused"),
							Db(z(c), "RemoteInvitationAccepted"),
							Db(z(c), "RemoteInvitationFailure")
						).pipe(hb(1))
					),
					x(z(c), "callerId", void 0),
					x(z(c), "callId", void 0),
					x(z(c), "_getSession", void 0),
					x(z(c), "logger", void 0),
					x(z(c), "_content", void 0),
					x(z(c), "_channelId", void 0),
					x(z(c), "_response", ""),
					(c._channelId = r),
					(c._content = o),
					(c.callId = i),
					(c.callerId = s),
					(c._getSession = e),
					(c.logger = a),
					c.remoteInvitationEnd$
						.pipe(
							Lb(6e4),
							ab(function (e) {
								return (
									Ab(e) &&
										c.warn("Remote invitation expired"),
									ra(e)
								);
							})
						)
						.subscribe({
							error: function () {
								(c.state = Fb.FAILURE),
									c.emit(
										"RemoteInvitationFailure",
										Hi.INVITATION_EXPIRE
									);
							},
						}),
					c
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "channelId",
						get: function () {
							return this._channelId;
						},
						set: function (e) {
							throw new ca(
								'Cannot set the "response" of the RemoteInvitation instance.',
								Xc
							);
						},
					},
					{
						key: "content",
						get: function () {
							return this._content;
						},
						set: function (e) {
							throw new ca(
								'Cannot set the "content" of the RemoteInvitation instance.',
								Xc
							);
						},
					},
					{
						key: "response",
						get: function () {
							return this._response;
						},
						set: function (e) {
							this._response = e;
						},
					},
					{
						key: "accept",
						value: function () {
							var e,
								t = this;
							if (this.isRemoteInvitationEnd())
								throw new da(
									"The local invitation has ended. Cannot accept.",
									ri
								);
							if (this.state === Fb.ACCEPT_SENT_TO_LOCAL)
								throw new da(
									"The remote invitation is accepting. Cannot do the operation.",
									Rr
								);
							if (8192 < rh(this._response))
								throw new ca(
									'The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.',
									Xc
								);
							(this.state = Fb.ACCEPT_SENT_TO_LOCAL),
								Jb(
									Qe(1e3).pipe(
										Cb(function () {
											return yd(
												ma(
													N.mark(function e() {
														return N.wrap(function (
															e
														) {
															for (;;)
																switch (
																	(e.prev =
																		e.next)
																) {
																	case 0:
																		return e.abrupt(
																			"return",
																			t
																				._getSession()
																				.sendInvitationMessage(
																					{
																						peerId: t.callerId,
																						callId: t.callId,
																						extra: t.response,
																						type: "CallAccept",
																						isAcceptAck:
																							!1,
																						channelId:
																							t.channelId,
																					}
																				)
																		);
																	case 1:
																	case "end":
																		return e.stop();
																}
														},
														e);
													})
												)
											);
										}),
										yb(function (t) {
											return (e = t.hasPeerReceived);
										}),
										hb(1)
									),
									Db(this, "RemoteInvitationAccepted")
								)
									.pipe(
										Lb(5e3),
										Kc(this.remoteInvitationEnd$)
									)
									.subscribe({
										error: function (n) {
											if (
												(t.logError(n),
												(t.state = Fb.FAILURE),
												Ab(n))
											)
												switch (e) {
													case void 0:
													case !0:
														return void t.emit(
															"RemoteInvitationFailure",
															Hi.ACCEPT_FAILURE
														);
													case !1:
														return void t.emit(
															"RemoteInvitationFailure",
															Hi.PEER_OFFLINE
														);
												}
											t.emit(
												"RemoteInvitationFailure",
												Hi.UNKNOWN
											);
										},
									});
						},
					},
					{
						key: "refuse",
						value: function () {
							if (this.state === Fb.ACCEPT_SENT_TO_LOCAL)
								throw new da(
									"The remote invitation is accepting. Cannot do the operation.",
									Rr
								);
							if (this.isRemoteInvitationEnd())
								throw new da(
									"The invitation is end. Cannot refuse",
									ri
								);
							if (8192 < rh(this._response))
								throw new ca(
									'The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.',
									Xc
								);
							this._getSession().sendInvitationMessage({
								peerId: this.callerId,
								callId: this.callId,
								extra: this.response,
								type: "CallReject",
								channelId: this.channelId,
							}),
								(this.state = Fb.REFUSED),
								this.emit("RemoteInvitationRefused");
						},
					},
					{
						key: "onCancelReceived",
						value: function (e) {
							this.isRemoteInvitationEnd()
								? this.log(
										"The invitation has ended, skipped emitting the %s event",
										"RemoteInvitationCanceled"
								  )
								: (this.state === Fb.ACCEPT_SENT_TO_LOCAL &&
										this.log(
											"caller canceled before receive accept"
										),
								  (this._content = e),
								  (this.state = Fb.CANCELED),
								  this.emit("RemoteInvitationCanceled", e));
						},
					},
					{
						key: "onAcceptAckReceived",
						value: function () {
							this.state !== Fb.ACCEPT_SENT_TO_LOCAL
								? this.log(
										"The invitation has ended, skipped emitting the %s event",
										"ori:".concat(
											this.state,
											", to: RemoteInvitationAccepted"
										)
								  )
								: ((this.state = Fb.ACCEPTED),
								  this.emit("RemoteInvitationAccepted"));
						},
					},
					{
						key: "isRemoteInvitationEnd",
						value: function () {
							return [
								Fb.ACCEPTED,
								Fb.REFUSED,
								Fb.CANCELED,
								Fb.FAILURE,
							].includes(this.state);
						},
					},
				]),
				t
			);
		})(sc()),
		sF = (function (e) {
			function t(e, r) {
				va(this, t);
				var o = n.call(this, r, "InvitationManager");
				return (
					x(z(o), "getSession", void 0),
					x(z(o), "invitationDispatcher", new Ba.EventEmitter()),
					x(z(o), "outgoingLocalInvitations", new Map()),
					x(
						z(o),
						"receivedRemoteInvitations",
						new Wc(void 0, { maxlen: 1e4 })
					),
					x(z(o), "logger", void 0),
					(o.getSession = fo(e)),
					(o.logger = r),
					o.invitationDispatcher.on(
						"remoteInvitationToManager",
						function (e) {
							var t = e.callId,
								n = e.extra,
								i = e.callerId;
							(e = e.channelId),
								o.receivedRemoteInvitations.has(t) ||
									((n = new rF({
										callerId: i,
										callId: t,
										getSession: o.getSession,
										logger: r,
										extraContent: n,
										invitationChannel: e,
									})).remoteInvitationEnd$.subscribe(
										function () {
											o.receivedRemoteInvitations.delete(
												t
											);
										}
									),
									o.receivedRemoteInvitations.set(t, n),
									o.emit("remoteInvitationInstance", n));
						}
					),
					o.invitationDispatcher.on(
						"acceptAckToRemoteInvitation",
						function (e) {
							(e = o.receivedRemoteInvitations.get(e.callId)) &&
								e.onAcceptAckReceived();
						}
					),
					o.invitationDispatcher.on(
						"cancelToRemoteInvitation",
						function (e) {
							var t = e.extra;
							(e = o.receivedRemoteInvitations.get(e.callId)) &&
								e.onCancelReceived(t);
						}
					),
					o.invitationDispatcher.on(
						"acceptToLocalInvitation",
						function (e) {
							var t = e.extra;
							(e = o.outgoingLocalInvitations.get(e.callId)) &&
								e.onAcceptReceived(t);
						}
					),
					o.invitationDispatcher.on(
						"refuseToLocalInvitation",
						function (e) {
							var t = e.extra;
							(e = o.outgoingLocalInvitations.get(e.callId)) &&
								e.onRefuseReceived(t);
						}
					),
					o
				);
			}
			Ga(t, e);
			var n = Ha(t);
			return (
				eb(t, [
					{
						key: "invitationMessageHandler",
						value: function (e) {
							var t = e.body,
								n = t.callId,
								r = t.extra;
							r = void 0 === r ? "" : r;
							var o = t.type,
								i = void 0 === (t = t.channel) ? "" : t,
								s = e.type;
							switch (
								((t = e.peerId), (e = e.serverReceivedTs), s)
							) {
								case "CallAccept":
									"ack" === o
										? this.invitationDispatcher.emit(
												"acceptAckToRemoteInvitation",
												{ callId: n }
										  )
										: "request" === o &&
										  this.invitationDispatcher.emit(
												"acceptToLocalInvitation",
												{ callId: n, extra: r }
										  );
									break;
								case "CallInvite":
									this.invitationDispatcher.emit(
										"remoteInvitationToManager",
										{
											callId: n,
											callerId: t,
											extra: r,
											channelId: i,
										}
									);
									break;
								case "CallCancel":
									if ("0" === n) {
										(n = ""
											.concat(
												"AgoraRTMLegacyEndcallCompatibleMessagePrefix",
												"_"
											)
											.concat(i, "_")
											.concat(r)),
											this.getSession().emit(
												"peerTextMessage",
												{
													peerId: t,
													properties: {
														serverReceivedTs: e,
													},
													text: n,
												}
											);
										break;
									}
									this.invitationDispatcher.emit(
										"cancelToRemoteInvitation",
										{ callId: n, extra: r }
									);
									break;
								case "CallReject":
									this.invitationDispatcher.emit(
										"refuseToLocalInvitation",
										{ callId: n, extra: r }
									);
									break;
								default:
									throw Rn("invitationType", s);
							}
						},
					},
					{
						key: "genLocalInvitation",
						value: function (e) {
							var t = this,
								n = new qF(e, this.getSession, this.logger);
							return (
								n.localInvitationEnd$.subscribe(function () {
									t.outgoingLocalInvitations.delete(n.callId);
								}),
								this.outgoingLocalInvitations.set(n.callId, n),
								n
							);
						},
					},
				]),
				t
			);
		})(sc()),
		tF = function (e, t, n) {
			var r = !0,
				o = !0;
			if ("function" != typeof e)
				throw new TypeError("Expected a function");
			return (
				Gb(n) &&
					((r = "leading" in n ? !!n.leading : r),
					(o = "trailing" in n ? !!n.trailing : o)),
				JD(e, t, { leading: r, maxWait: t, trailing: o })
			);
		},
		Qb,
		If;
	!(function (e) {
		(e[(e.JOINED = 0)] = "JOINED"), (e[(e.LEFT = 1)] = "LEFT");
	})(If || (If = {}));
	var Ii = ta.ConnectionState,
		uF =
			((Qb = (function (e) {
				function t(e, n, o, i) {
					va(this, t);
					var s = r.call(this, i, "RtmChannel", !0);
					return (
						x(
							z(s),
							"onMemberCountUpdated",
							tF(function (e) {
								e !== s.memberCount &&
									((s.memberCount = e),
									s.emit("MemberCountUpdated", e));
							}, 1e3)
						),
						x(z(s), "getSession", void 0),
						x(z(s), "memberCount", 0),
						x(z(s), "joinState", "LEFT"),
						x(z(s), "joinPromise", void 0),
						x(
							z(s),
							"memberJoinedLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(
							z(s),
							"memberLeftLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(
							z(s),
							"memberJoinStateLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(
							z(s),
							"attributesSeqLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(z(s), "channelId", void 0),
						x(z(s), "client", void 0),
						x(z(s), "onChannelMemberCountUpdated", function (e, t) {
							s.channelId === e && s.onMemberCountUpdated(t);
						}),
						x(z(s), "onLogout", function () {
							try {
								s.clearChannel(s.getSession());
							} catch (e) {}
						}),
						x(z(s), "onAttributesUpdated", function (e) {
							var t = e.channelId,
								n = e.attributeMaps,
								r = e.seq;
							e = e.instance.toString();
							var o = s.attributesSeqLru.get(e);
							if (
								(!o || r.greaterThan(o)) &&
								(s.attributesSeqLru.set(e, r),
								t === s.channelId)
							) {
								for (t = {}, r = 0; r < n.length; r++) {
									var i = n[r];
									(e = i.key), (o = i.ms);
									var a = i.value;
									if (
										((i = i.origin),
										"string" != typeof e ||
											!P.isLong(o) ||
											"string" != typeof a ||
											!Ta(i))
									)
										break;
									t[e] = {
										value: a,
										lastUpdateUserId: i,
										lastUpdateTs: o.toNumber(),
									};
								}
								s.emit("AttributesUpdated", t);
							}
						}),
						x(z(s), "onChannelTextMessage", function (e) {
							var t = e.memberId,
								n = e.text,
								r = e.properties;
							e.channelId === s.channelId &&
								s.emit(
									"ChannelMessage",
									{
										text: n,
										messageType: ta.MessageType.TEXT,
									},
									t,
									r
								);
						}),
						x(z(s), "onChannelRawMessage", function (e) {
							var t = e.desc,
								n = e.raw,
								r = e.memberId,
								o = e.properties;
							e.channelId === s.channelId &&
								s.emit(
									"ChannelMessage",
									{
										messageType: ta.MessageType.RAW,
										rawMessage: n,
										description: t,
									},
									r,
									o
								);
						}),
						x(z(s), "onMemberNotice", function (e) {
							var t = e.memberId,
								n = e.type,
								r = e.size;
							if (e.channelId === s.channelId) {
								var o = e.instance.toString();
								e = e.seq.toString();
								var i = {
									MemberLeft: s.memberLeftLru,
									MemberJoined: s.memberJoinedLru,
									MemberCountUpdated: void 0,
								}[n];
								if (i) {
									if (i.has(o + e))
										return void s.log(
											"received duplicated %s notice (seq: %s), channel '%s', member '%s'",
											n,
											e,
											La(s.channelId),
											La(t || "")
										);
									if (
										(i.set(o + e, void 0),
										"string" != typeof t)
									)
										return;
									if (t !== s.getSession().context.uid) {
										if (
											(o =
												s.memberJoinStateLru.get(t)) ===
												If.JOINED &&
											"MemberJoined" === n
										)
											return void s.log(
												"received duplicated %s state (seq: %s), channel '%s', member '%s'",
												n,
												e,
												La(s.channelId),
												La(t || "")
											);
										if (o === If.LEFT && "MemberLeft" === n)
											return void s.log(
												"received duplicated %s state (seq: %s), channel '%s', member '%s'",
												n,
												e,
												La(s.channelId),
												La(t || "")
											);
									}
									s.memberJoinStateLru.set(
										t,
										"MemberJoined" === n
											? If.JOINED
											: If.LEFT
									);
								}
								s.info(
									"Channel %s - %s, memberId: %s",
									n,
									La(s.channelId),
									"MemberCountUpdated" === n
										? "[unknown]"
										: La(t || "")
								),
									(o = t === s.getSession().context.uid),
									("MemberLeft" === n && Ta(t)) ||
									("MemberJoined" === n && Ta(t))
										? (o || s.emit(n, t),
										  s.onMemberCountUpdated(r))
										: "MemberCountUpdated" === n &&
										  "number" == typeof r &&
										  s.onMemberCountUpdated(r);
							}
						}),
						(s.getSession = fo(n)),
						(s.channelId = e),
						(s.client = o),
						s.info("A channel created, id %s", La(e)),
						s
					);
				}
				Ga(t, e);
				var n,
					r = Ha(t);
				return (
					eb(t, [
						{
							key: "join",
							value:
								((n = ma(
									N.mark(function e() {
										var t,
											n,
											r,
											o,
											i,
											s,
											a,
											c = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															(e.prev = 0),
																(t =
																	this.getSession()),
																(e.next = 7);
															break;
														case 4:
															throw (
																((e.prev = 4),
																(e.t0 =
																	e.catch(0)),
																new da(
																	"The client is not logged in. Cannot do the operation",
																	Wr
																))
															);
														case 7:
															if (
																((e.prev = 7),
																Ta(
																	this
																		.channelId
																))
															) {
																e.next = 10;
																break;
															}
															throw new ca(
																[
																	"The %s in the arguments is invalid",
																	"channelId",
																],
																OB
															);
														case 10:
															if (
																"LEFT" ===
																this.joinState
															) {
																e.next = 13;
																break;
															}
															throw (
																(bb(
																	"ChnJoin",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		userId: t
																			.context
																			.uid,
																		elapse: Xa(
																			t.startTime
																		),
																		errCode:
																			Vr,
																		sid: sb(
																			t.instanceId
																		),
																	},
																	null !==
																		(o =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			o &&
																		o
																),
																new da(
																	"The channel has joined. Cannot rejoin",
																	Vr
																))
															);
														case 13:
															if (
																!t.usedChannelIds.includes(
																	this
																		.channelId
																)
															) {
																e.next = 16;
																break;
															}
															throw (
																(bb(
																	"ChnJoin",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		userId: t
																			.context
																			.uid,
																		elapse: Xa(
																			t.startTime
																		),
																		errCode:
																			Xr,
																		sid: sb(
																			t.instanceId
																		),
																	},
																	null !==
																		(i =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			i &&
																		i
																),
																new da(
																	"A channel of the same channel ID has already joined. Cannot rejoin",
																	Xr
																))
															);
														case 16:
															if (
																!(
																	20 <=
																	t
																		.usedChannelIds
																		.length
																)
															) {
																e.next = 19;
																break;
															}
															throw (
																(bb(
																	"ChnJoin",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		userId: t
																			.context
																			.uid,
																		elapse: Xa(
																			t.startTime
																		),
																		errCode:
																			Ur,
																		sid: sb(
																			t.instanceId
																		),
																	},
																	null !==
																		(s =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			s &&
																		s
																),
																new ic(
																	"The joined channels has exceeded the limit of 20",
																	Ur
																))
															);
														case 19:
															return (
																bb(
																	"ChnJoin",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		userId: t
																			.context
																			.uid,
																		elapse: Xa(
																			t.startTime
																		),
																		errCode: 0,
																		sid: sb(
																			t.instanceId
																		),
																	},
																	null !==
																		(n =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			n &&
																		n
																),
																this.log(
																	"Joining the channel %s",
																	La(
																		this
																			.channelId
																	)
																),
																(this.joinState =
																	"JOINING"),
																t.usedChannelIds.push(
																	this
																		.channelId
																),
																(this.joinPromise =
																	t
																		.requestChannelJoin(
																			this
																				.channelId
																		)
																		.then(
																			function () {
																				c.joinState =
																					"JOINED";
																			}
																		)),
																(e.next = 26),
																this.joinPromise
															);
														case 26:
															bb(
																"ChnJoinRes",
																{
																	cname: this
																		.channelId,
																	lts: P.fromNumber(
																		Date.now()
																	),
																	elapse: Xa(
																		t.startTime
																	),
																	errCode: 0,
																	sid: sb(
																		t.instanceId
																	),
																	serverErrCode: 0,
																	userId: t
																		.context
																		.uid,
																},
																null !==
																	(r =
																		this
																			.client
																			.context
																			.config
																			.enableCloudProxy) &&
																	void 0 !==
																		r &&
																	r
															),
																this.info(
																	"The channel %s joined successfully",
																	La(
																		this
																			.channelId
																	)
																),
																t.on(
																	"channelTextMessage",
																	this
																		.onChannelTextMessage
																),
																t.on(
																	"channelRawMessage",
																	this
																		.onChannelRawMessage
																),
																t.on(
																	"memberNotice",
																	this
																		.onMemberNotice
																),
																t.on(
																	"channelAttributesUpdated",
																	this
																		.onAttributesUpdated
																),
																this.client.internalEmitter.on(
																	"channelMemberCountUpdated",
																	this
																		.onChannelMemberCountUpdated
																),
																this.client.internalEmitter.once(
																	"LOGOUT",
																	this
																		.onLogout
																),
																(e.next = 46);
															break;
														case 36:
															if (
																((e.prev = 36),
																(e.t1 =
																	e.catch(7)),
																"JOINING" ===
																	this
																		.joinState &&
																	(this.joinState =
																		"LEFT"),
																this.logError(
																	e.t1
																),
																!Na(e.t1))
															) {
																e.next = 42;
																break;
															}
															throw e.t1;
														case 42:
															if (!Ab(e.t1)) {
																e.next = 45;
																break;
															}
															throw (
																(bb(
																	"ChnJoinRes",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		elapse: Xa(
																			t.startTime
																		),
																		errCode:
																			Tr,
																		sid: sb(
																			t.instanceId
																		),
																		serverErrCode: 0,
																		userId: t
																			.context
																			.uid,
																	},
																	null !==
																		(a =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			a &&
																		a
																),
																new Ub(
																	[
																		"Join channel %s timed out",
																		La(
																			this
																				.channelId
																		),
																	],
																	Tr
																))
															);
														case 45:
															throw new ve(
																[
																	"The channel %s join failure",
																	La(
																		this
																			.channelId
																	),
																],
																{
																	code: Sr,
																	originalError:
																		e.t1,
																}
															);
														case 46:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[
												[0, 4],
												[7, 36],
											]
										);
									})
								)),
								function () {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "leave",
							value: (function () {
								var e = ma(
									N.mark(function e() {
										var t, n, r, o;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															(e.prev = 0),
																(n =
																	this.getSession()),
																(e.next = 7);
															break;
														case 4:
															throw (
																((e.prev = 4),
																(e.t0 =
																	e.catch(0)),
																new da(
																	"The client is not logged in. Cannot do the operation",
																	QB
																))
															);
														case 7:
															if (
																"LEFT" !==
																this.joinState
															) {
																e.next = 9;
																break;
															}
															throw new da(
																"The channel does not join. Cannot do the operation",
																PB
															);
														case 9:
															return (
																(e.prev = 9),
																n.requestChannelLeave(
																	this
																		.channelId
																),
																(e.next = 13),
																this.clearChannel(
																	n
																)
															);
														case 13:
															e.next = 24;
															break;
														case 15:
															if (
																((e.prev = 15),
																(e.t1 =
																	e.catch(9)),
																this.logError(
																	e.t1
																),
																!Na(e.t1))
															) {
																e.next = 22;
																break;
															}
															throw (
																(void 0 ===
																	e.t1.code &&
																	(e.t1.code =
																		Zr),
																bb(
																	"ChnLeave",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		elapse: Xa(
																			n.startTime
																		),
																		errCode:
																			Zr,
																		sid: sb(
																			n.instanceId
																		),
																		userId: n
																			.context
																			.uid,
																	},
																	null !==
																		(o =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			o &&
																		o
																),
																e.t1)
															);
														case 22:
															throw (
																(bb(
																	"ChnLeave",
																	{
																		cname: this
																			.channelId,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		elapse: Xa(
																			n.startTime
																		),
																		errCode:
																			Yr,
																		sid: sb(
																			n.instanceId
																		),
																		userId: n
																			.context
																			.uid,
																	},
																	null !==
																		(r =
																			this
																				.client
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			r &&
																		r
																),
																new ve(
																	"The channel leave failure",
																	{
																		code: Yr,
																		originalError:
																			e.t1,
																	}
																))
															);
														case 24:
															bb(
																"ChnLeave",
																{
																	cname: this
																		.channelId,
																	lts: P.fromNumber(
																		Date.now()
																	),
																	elapse: Xa(
																		n.startTime
																	),
																	errCode: 0,
																	sid: sb(
																		n.instanceId
																	),
																	userId: n
																		.context
																		.uid,
																},
																null !==
																	(t =
																		this
																			.client
																			.context
																			.config
																			.enableCloudProxy) &&
																	void 0 !==
																		t &&
																	t
															);
														case 25:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[
												[0, 4],
												[9, 15],
											]
										);
									})
								);
								return function () {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "sendMessage",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																(Xn(t, Il),
																this.client
																	.connectionState !==
																	Ii.CONNECTED ||
																	"JOINED" ===
																		this
																			.joinState)
															) {
																e.next = 3;
																break;
															}
															throw new da(
																"The channel does not join. Cannot do the operation",
																EB
															);
														case 3:
															if (
																this.client
																	.connectionState !==
																Ii.RECONNECTING
															) {
																e.next = 8;
																break;
															}
															return (
																(n =
																	Date.now()),
																(e.next = 7),
																new Promise(
																	function (
																		e,
																		o
																	) {
																		var i,
																			s =
																				((i =
																					ma(
																						N.mark(
																							function i() {
																								var s;
																								return N.wrap(
																									function (
																										i
																									) {
																										for (;;)
																											switch (
																												(i.prev =
																													i.next)
																											) {
																												case 0:
																													return (
																														(s =
																															Date.now() -
																															n),
																														(i.prev = 1),
																														(i.next = 4),
																														ph(
																															{
																																message:
																																	t,
																																peerId: r.channelId,
																																toPeer: !1,
																																session:
																																	r.getSession(),
																																errorCodes:
																																	{
																																		NOT_LOGGED_IN:
																																			Jl,
																																		TOO_OFTEN:
																																			Nr,
																																	},
																																diff: s,
																																logger: r.logger,
																															}
																														)
																													);
																												case 4:
																													e(),
																														(i.next = 12);
																													break;
																												case 7:
																													(i.prev = 7),
																														(i.t0 =
																															i.catch(
																																1
																															)),
																														Ab(
																															i.t0
																														) &&
																															o(
																																new Ub(
																																	we(
																																		r.name,
																																		"sendMessageToPeer",
																																		1e4
																																	),
																																	Hl
																																)
																															),
																														Na(
																															i.t0
																														) &&
																															o(
																																i.t0
																															),
																														o(
																															new Ja(
																																"Channel message send failure",
																																{
																																	code: qi,
																																	originalError:
																																		i.t0,
																																}
																															)
																														);
																												case 12:
																													return (
																														(i.prev = 12),
																														clearTimeout(
																															a
																														),
																														i.finish(
																															12
																														)
																													);
																												case 15:
																												case "end":
																													return i.stop();
																											}
																									},
																									i,
																									null,
																									[
																										[
																											1,
																											7,
																											12,
																											15,
																										],
																									]
																								);
																							}
																						)
																					)),
																				function () {
																					return i.apply(
																						this,
																						arguments
																					);
																				});
																		r.client.internalEmitter.once(
																			"RECONNECTED",
																			s
																		);
																		var a =
																			setTimeout(
																				function () {
																					r.client.internalEmitter.off(
																						"RECONNECTED",
																						s
																					),
																						o(
																							new Ub(
																								we(
																									r.name,
																									"sendMessageToPeer",
																									1e4
																								),
																								Hl
																							)
																						);
																				},
																				9e3
																			);
																	}
																)
															);
														case 7:
															return e.abrupt(
																"return"
															);
														case 8:
															if (
																this.client
																	.connectionState ===
																Ii.CONNECTED
															) {
																e.next = 10;
																break;
															}
															throw new da(
																"The client is not logged in. Cannot do the operation",
																Jl
															);
														case 10:
															return (
																(e.prev = 10),
																(e.next = 13),
																ph({
																	message: t,
																	peerId: this
																		.channelId,
																	toPeer: !1,
																	session:
																		this.getSession(),
																	errorCodes:
																		{
																			NOT_LOGGED_IN:
																				Jl,
																			TOO_OFTEN:
																				Nr,
																		},
																	diff: 0,
																	logger: this
																		.logger,
																})
															);
														case 13:
															e.next = 23;
															break;
														case 15:
															if (
																((e.prev = 15),
																(e.t0 =
																	e.catch(
																		10
																	)),
																!Ab(e.t0))
															) {
																e.next = 19;
																break;
															}
															throw new Ub(
																we(
																	this.name,
																	"sendMessage",
																	1e4
																),
																Hl
															);
														case 19:
															if (!Na(e.t0)) {
																e.next = 22;
																break;
															}
															throw (
																(this.logError(
																	e.t0
																),
																e.t0)
															);
														case 22:
															throw new ve(
																"The channel message send failure",
																qi
															);
														case 23:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[10, 15]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getMembers",
							value: (function () {
								var e = ma(
									N.mark(function e() {
										var t, n;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((e.prev = 0),
																this.client
																	.connectionState ===
																	Ii.CONNECTED)
															) {
																e.next = 3;
																break;
															}
															throw new da(
																"The client is not logged in. Cannot do the operation",
																LB
															);
														case 3:
															if (
																"JOINED" ===
																this.joinState
															) {
																e.next = 5;
																break;
															}
															throw new da(
																"The channel does not join. Cannot do the operation",
																KB
															);
														case 5:
															return (
																(t =
																	this.getSession().requestChannelMemberList(
																		this
																			.channelId
																	)),
																(e.next = 8),
																t
																	.pipe(
																		Ea(
																			function (
																				e
																			) {
																				return e.memberInfos.map(
																					function (
																						e
																					) {
																						return e.account;
																					}
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 8:
															return (
																(n = e.sent),
																this.info(
																	"Channel %s - get members success, %o",
																	La(
																		this
																			.channelId
																	),
																	n.map(La)
																),
																e.abrupt(
																	"return",
																	n
																)
															);
														case 13:
															if (
																((e.prev = 13),
																(e.t0 =
																	e.catch(0)),
																!Na(e.t0))
															) {
																e.next = 18;
																break;
															}
															throw (
																(this.logError(
																	e.t0
																),
																e.t0)
															);
														case 18:
															throw new ve(
																"The channel members get failure",
																IB
															);
														case 19:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[0, 13]]
										);
									})
								);
								return function () {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "clearChannel",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																(t.emit(
																	"channelLeft",
																	this
																		.channelId
																),
																"JOINING" !==
																	this
																		.joinState)
															) {
																e.next = 4;
																break;
															}
															return (
																(e.next = 4),
																this.joinPromise
															);
														case 4:
															(this.joinState =
																"LEFT"),
																this.memberLeftLru.empty(),
																this.memberJoinedLru.empty(),
																this.attributesSeqLru.empty(),
																this.memberJoinStateLru.empty(),
																(this.memberCount = 0),
																t.removeListener(
																	"channelTextMessage",
																	this
																		.onChannelTextMessage
																),
																t.removeListener(
																	"channelRawMessage",
																	this
																		.onChannelRawMessage
																),
																t.removeListener(
																	"memberNotice",
																	this
																		.onMemberNotice
																),
																t.removeListener(
																	"channelAttributesUpdated",
																	this
																		.onAttributesUpdated
																),
																this.client.internalEmitter.removeListener(
																	"channelMemberCountUpdated",
																	this
																		.onChannelMemberCountUpdated
																),
																this.client.internalEmitter.removeListener(
																	"LOGOUT",
																	this
																		.onLogout
																),
																(t.usedChannelIds =
																	t.usedChannelIds.filter(
																		function (
																			e
																		) {
																			return (
																				e !==
																				n.channelId
																			);
																		}
																	));
														case 17:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
					]),
					t
				);
			})(sc())),
			Da(
				Qb.prototype,
				"join",
				[Mc],
				Object.getOwnPropertyDescriptor(Qb.prototype, "join"),
				Qb.prototype
			),
			Da(
				Qb.prototype,
				"leave",
				[Mc],
				Object.getOwnPropertyDescriptor(Qb.prototype, "leave"),
				Qb.prototype
			),
			Da(
				Qb.prototype,
				"sendMessage",
				[Mc],
				Object.getOwnPropertyDescriptor(Qb.prototype, "sendMessage"),
				Qb.prototype
			),
			Da(
				Qb.prototype,
				"getMembers",
				[jb],
				Object.getOwnPropertyDescriptor(Qb.prototype, "getMembers"),
				Qb.prototype
			),
			Qb),
		W,
		Rb = ta.ConnectionChangeReason,
		oa = ta.ConnectionState,
		Vt = {
			DISCONNECTED: 1,
			CONNECTING: 2,
			CONNECTED: 3,
			RECONNECTING: 4,
			ABORTED: 5,
		},
		vF = {
			LOGIN: 1,
			LOGIN_SUCCESS: 2,
			LOGIN_FAILURE: 3,
			LOGIN_TIMEOUT: 4,
			INTERRUPTED: 5,
			LOGOUT: 6,
			BANNED_BY_SERVER: 7,
			REMOTE_LOGIN: 8,
			TOKEN_EXPIRED: 9,
		},
		wF =
			((W = (function (e) {
				function t(e, n, o, i) {
					va(this, t);
					var s = r.call(this, n, "RtmClient", !0);
					return (
						x(z(s), "connectionState", oa.DISCONNECTED),
						x(z(s), "internalEmitter", new Ba()),
						x(z(s), "context", void 0),
						x(z(s), "attributes", {}),
						x(z(s), "loginPromise", void 0),
						x(z(s), "attributeDrafts", new Set()),
						x(z(s), "session", void 0),
						x(z(s), "lastLoginTime", void 0),
						x(z(s), "reconnId", 0),
						x(
							z(s),
							"channelAttributesCacheLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(z(s), "invitationManager", void 0),
						x(z(s), "subscribedPeerStatusCache", {}),
						x(z(s), "pendingPeerStatusSubCount", 0),
						x(
							z(s),
							"peerStatusSeqLru",
							new Wc(void 0, { maxlen: 1e4 })
						),
						x(z(s), "peerUnreachableTimers", {}),
						x(z(s), "setParameters", void 0),
						x(z(s), "updateConfig", void 0),
						x(z(s), "blacklistedIP", {}),
						x(z(s), "TokenPrivilegeWillExpireHandler", function () {
							s.emit("TokenPrivilegeWillExpire");
						}),
						x(z(s), "userDropHandler", function (e) {
							if (s.connectionState !== oa.ABORTED)
								switch (e) {
									case 2:
										s.logError(
											"Server banned because of token is expired"
										),
											s.onConnectionStateChanged(
												oa.ABORTED,
												Rb.TOKEN_EXPIRED
											),
											s.emit("TokenExpired");
										break;
									case 11:
										s.logError(
											"Kicked off by remote session"
										),
											s.onConnectionStateChanged(
												oa.ABORTED,
												Rb.REMOTE_LOGIN
											);
										break;
									case 14:
									case 15:
									case 16:
										s.logError(
											"Server banned because of illegal ".concat(
												{
													14: "User ID",
													15: "IP",
													16: "Channel Name",
												}[e]
											)
										),
											s.onConnectionStateChanged(
												oa.ABORTED,
												Rb.BANNED_BY_SERVER
											);
										break;
									default:
										s.logError(
											"User kicked off for unknown code: ".concat(
												e
											)
										),
											s.onConnectionStateChanged(
												oa.ABORTED,
												Rb.INTERRUPTED
											);
								}
						}),
						(s.context = new xE(e, o, n)),
						(s.context.config = o),
						(s.setParameters = i.bind(z(s))),
						(s.updateConfig = i.bind(z(s))),
						(s.invitationManager = new sF(function () {
							return s.session;
						}, n)),
						s.invitationManager.on(
							"remoteInvitationInstance",
							function (e) {
								s.emit("RemoteInvitationReceived", e);
							}
						),
						s.setMaxListeners(512),
						s.internalEmitter.setMaxListeners(512),
						s
					);
				}
				Ga(t, e);
				var n,
					r = Ha(t);
				return (
					eb(t, [
						{
							key: "renewToken",
							value:
								((n = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i,
											s = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																"string" ==
																	typeof t &&
																0 !== t.length
															) {
																e.next = 2;
																break;
															}
															throw new ca(
																"Invalid argument",
																XB
															);
														case 2:
															if (
																this
																	.connectionState !==
																oa.ABORTED
															) {
																e.next = 5;
																break;
															}
															return (
																(e.next = 5),
																new Promise(
																	function () {}
																)
															);
														case 5:
															if (
																this
																	.connectionState ===
																	oa.CONNECTED ||
																this
																	.connectionState ===
																	oa.RECONNECTING
															) {
																e.next = 7;
																break;
															}
															throw new da(
																"The client is not logged in",
																hs
															);
														case 7:
															if (
																void 0 !==
																this.session
															) {
																e.next = 9;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 9:
															return (
																(e.prev = 9),
																(n =
																	this.context
																		.token),
																(this.context.token =
																	t),
																(e.next = 14),
																this.session.connection.apClient
																	.getApEdgeInfo$(
																		!1
																	)
																	.pipe(
																		$d(
																			function () {
																				return Error(
																					"No available edge address to connect"
																				);
																			}
																		),
																		Re(
																			function (
																				e
																			) {
																				return e.pipe(
																					sa(
																						function (
																							e
																						) {
																							if (
																								Na(
																									e
																								)
																							)
																								throw e;
																						}
																					),
																					Zd(
																						2500
																					),
																					hb(
																						4
																					)
																				);
																			}
																		),
																		hb(1),
																		Lb(2e4),
																		ab(
																			function (
																				e
																			) {
																				return (
																					Ab(
																						e
																					) &&
																						s.warn(
																							"renewToken timed out"
																						),
																					ra(
																						e
																					)
																				);
																			}
																		)
																	)
																	.toPromise()
															);
														case 14:
															(r = e.sent),
																(o = r.ticket),
																(e.next = 27);
															break;
														case 18:
															if (
																((e.prev = 18),
																(e.t0 =
																	e.catch(9)),
																(this.context.token =
																	n),
																e.t0.code !==
																	as &&
																	e.t0
																		.code !==
																		bs)
															) {
																e.next = 23;
																break;
															}
															throw new Bf(
																"Invalid token",
																ZB
															);
														case 23:
															if (
																e.t0.code !== ti
															) {
																e.next = 25;
																break;
															}
															throw new Bf(
																"The token expired",
																YB
															);
														case 25:
															if (!Ab(e.t0)) {
																e.next = 27;
																break;
															}
															throw new Ub(
																"Renew token timed out",
																Ml
															);
														case 27:
															(i = this.session),
																this.session
																	.requestUpdateEdgeTicket(
																		o
																	)
																	.toPromise()
																	.then(
																		function (
																			e
																		) {
																			if (
																				0 !==
																				e.code
																			)
																				throw new Ja(
																					[
																						"RenewToken failure. The response code is %d",
																						e.code,
																					],
																					Ml
																				);
																			i.curLoginSockets
																				.filter(
																					function (
																						e
																					) {
																						return (
																							void 0 !==
																							e
																						);
																					}
																				)
																				.forEach(
																					function (
																						e
																					) {
																						return (e.ticket =
																							o);
																					}
																				);
																		}
																	);
														case 29:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[9, 18]]
										);
									})
								)),
								function (e) {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "queryPeersOnlineStatus",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																WB
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															if (
																!(
																	!Array.isArray(
																		t
																	) ||
																	0 ===
																		t.length ||
																	t.some(
																		function (
																			e
																		) {
																			return !Ta(
																				e
																			);
																		}
																	) ||
																	256 <
																		t.length
																)
															) {
																e.next = 6;
																break;
															}
															throw new ca(
																"invalid arguments",
																gs
															);
														case 6:
															return (
																(e.next = 8),
																this.session
																	.requestPeersOnlineStatus(
																		t
																	)
																	.toPromise()
															);
														case 8:
															return (
																(n = e.sent),
																(r = md(
																	tl(
																		n.userInfos,
																		"account"
																	),
																	function (
																		e
																	) {
																		return !!e.ts;
																	}
																)),
																Object.keys(
																	r
																).forEach(
																	function (
																		e
																	) {
																		if (
																			e in
																				o.subscribedPeerStatusCache &&
																			o
																				.subscribedPeerStatusCache[
																				e
																			] !==
																				ta
																					.PeerOnlineState
																					.UNREACHABLE
																		) {
																			var t =
																				r[
																					e
																				]
																					? ta
																							.PeerOnlineState
																							.ONLINE
																					: ta
																							.PeerOnlineState
																							.OFFLINE;
																			o.emit(
																				"PeersOnlineStatusChanged",
																				x(
																					{},
																					e,
																					t
																				)
																			),
																				(o.subscribedPeerStatusCache[
																					e
																				] =
																					t);
																		}
																	}
																),
																e.abrupt(
																	"return",
																	r
																)
															);
														case 12:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getChannelMemberCount",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o, i, s, a, c, u, l;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																HB
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															if (
																Array.isArray(
																	t
																) &&
																t.every(
																	function (
																		e
																	) {
																		return (
																			"string" ==
																			typeof e
																		);
																	}
																) &&
																0 !== t.length
															) {
																e.next = 6;
																break;
															}
															throw new ca(
																"Invalid arguments: channelIds",
																Pr
															);
														case 6:
															if (
																!(32 < t.length)
															) {
																e.next = 8;
																break;
															}
															throw new ca(
																"getChannelMemberCount exceed limit of 32 channelIds",
																GB
															);
														case 8:
															n = 0;
														case 9:
															if (
																!(n < t.length)
															) {
																e.next = 16;
																break;
															}
															if (
																Ta((r = t[n]))
															) {
																e.next = 13;
																break;
															}
															throw new ca(
																[
																	"getChannelMemberCount channel id %s is invalid",
																	r,
																],
																Pr
															);
														case 13:
															n++, (e.next = 9);
															break;
														case 16:
															return (
																(e.next = 18),
																this.session
																	.requestGetChannelMemberCount(
																		t
																	)
																	.toPromise()
															);
														case 18:
															for (
																o = e.sent,
																	i =
																		o.groupInfos,
																	s = {},
																	a = 0;
																a < i.length;
																a++
															)
																(c = i[a]),
																	(u =
																		c.group),
																	(l =
																		c.memberCount),
																	Ta(u) &&
																		"number" ==
																			typeof l &&
																		(this.internalEmitter.emit(
																			"channelMemberCountUpdated",
																			u,
																			l
																		),
																		(s[u] =
																			l));
															return e.abrupt(
																"return",
																s
															);
														case 23:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "setLocalUserAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																(ag({
																	attributes:
																		t,
																	maxAttrValueSize: 8192,
																	maxAttrsCount: 32,
																	maxTotalSize: 16384,
																}),
																this
																	.connectionState ===
																	oa.CONNECTED)
															) {
																e.next = 3;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 3:
															if (
																void 0 !==
																this.session
															) {
																e.next = 5;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 5:
															return (
																(n =
																	this.session
																		.requestSetLocalUserAttributes(
																			t
																		)
																		.toPromise()),
																(r = {
																	attribute:
																		t,
																	promise: n,
																}),
																this.attributeDrafts.add(
																	r
																),
																(e.prev = 8),
																(e.next = 11),
																n
															);
														case 11:
															(this.attributes =
																t),
																(e.next = 19);
															break;
														case 14:
															if (
																((e.prev = 14),
																(e.t0 =
																	e.catch(8)),
																!Na(e.t0))
															) {
																e.next = 18;
																break;
															}
															throw e.t0;
														case 18:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 19:
															return (
																(e.prev = 19),
																this.attributeDrafts.delete(
																	r
																),
																e.finish(19)
															);
														case 22:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[8, 14, 19, 22]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "setChannelAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r,
											o,
											i,
											s,
											a,
											c = arguments;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((r =
																	2 <
																		c.length &&
																	void 0 !==
																		c[2]
																		? c[2]
																		: {}),
																(o =
																	r.enableNotificationToChannelMembers),
																(i =
																	void 0 !==
																		o && o),
																ag({
																	attributes:
																		n,
																	maxAttrValueSize: 8192,
																	maxAttrsCount: 32,
																	maxTotalSize: 32768,
																}),
																this
																	.connectionState ===
																	oa.CONNECTED)
															) {
																e.next = 4;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 4:
															if (
																void 0 !==
																this.session
															) {
																e.next = 6;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 6:
															return (
																(s =
																	this.session
																		.requestSetChannelAttributes(
																			t,
																			n,
																			i
																		)
																		.toPromise()),
																(e.prev = 7),
																(e.next = 10),
																s
															);
														case 10:
															(a = md(
																n,
																function (e) {
																	return new Blob(
																		[e]
																	).size;
																}
															)),
																this.channelAttributesCacheLru.set(
																	t,
																	a
																),
																(e.next = 19);
															break;
														case 14:
															if (
																((e.prev = 14),
																(e.t0 =
																	e.catch(7)),
																!Na(e.t0))
															) {
																e.next = 18;
																break;
															}
															throw e.t0;
														case 18:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 19:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[7, 14]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "addOrUpdateLocalUserAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((n = Wa(
																	Wa(
																		{},
																		this
																			.attributes
																	),
																	t
																)),
																ag({
																	attributes:
																		t,
																	maxAttrValueSize: 8192,
																	maxAttrsCount: 32,
																	maxTotalSize: 16384,
																}),
																ag({
																	attributes:
																		n,
																	maxAttrValueSize: 8192,
																	maxAttrsCount: 32,
																	maxTotalSize: 16384,
																}),
																this
																	.connectionState ===
																	oa.CONNECTED)
															) {
																e.next = 5;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 5:
															if (
																void 0 !==
																this.session
															) {
																e.next = 7;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 7:
															return (
																(r =
																	this.session
																		.requestAddOrUpdateLocalUserAttributes(
																			t
																		)
																		.toPromise()),
																(o = {
																	attribute:
																		n,
																	promise: r,
																}),
																this.attributeDrafts.add(
																	o
																),
																(e.prev = 10),
																(e.next = 13),
																r
															);
														case 13:
															(this.attributes =
																n),
																(e.next = 21);
															break;
														case 16:
															if (
																((e.prev = 16),
																(e.t0 =
																	e.catch(
																		10
																	)),
																!Na(e.t0))
															) {
																e.next = 20;
																break;
															}
															throw e.t0;
														case 20:
															throw new ca(
																"arguments is not valid",
																gs
															);
														case 21:
															return (
																(e.prev = 21),
																this.attributeDrafts.delete(
																	o
																),
																e.finish(21)
															);
														case 24:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[10, 16, 21, 24]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "addOrUpdateChannelAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r,
											o,
											i,
											s,
											a,
											c,
											u,
											l = arguments;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((r =
																	2 <
																		l.length &&
																	void 0 !==
																		l[2]
																		? l[2]
																		: {}),
																(o =
																	r.enableNotificationToChannelMembers),
																(i =
																	void 0 !==
																		o && o),
																(s =
																	this.channelAttributesCacheLru.get(
																		t,
																		{}
																	)),
																(a = md(
																	n,
																	function (
																		e
																	) {
																		return new Blob(
																			[e]
																		).size;
																	}
																)),
																(c = Wa(
																	Wa({}, s),
																	a
																)),
																ag({
																	attributes:
																		n,
																	attrSizeMap:
																		c,
																	maxAttrValueSize: 8192,
																	maxAttrsCount: 32,
																	maxTotalSize: 32768,
																}),
																this
																	.connectionState ===
																	oa.CONNECTED)
															) {
																e.next = 7;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 7:
															if (
																void 0 !==
																this.session
															) {
																e.next = 9;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 9:
															return (
																(u =
																	this.session
																		.requestAddOrUpdateChannelAttributes(
																			t,
																			n,
																			i
																		)
																		.toPromise()),
																(e.prev = 10),
																(e.next = 13),
																u
															);
														case 13:
															this.channelAttributesCacheLru.set(
																t,
																c
															),
																(e.next = 21);
															break;
														case 16:
															if (
																((e.prev = 16),
																(e.t0 =
																	e.catch(
																		10
																	)),
																!Na(e.t0))
															) {
																e.next = 20;
																break;
															}
															throw e.t0;
														case 20:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 21:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[10, 16]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "deleteLocalUserAttributesByKeys",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o, i;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																Array.isArray(
																	t
																) &&
																0 !==
																	t.length &&
																!t.some(
																	function (
																		e
																	) {
																		return (
																			0 ===
																			e.length
																		);
																	}
																)
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"arguments is not valid",
																gb
															);
														case 2:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 4;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 4:
															if (
																void 0 !==
																this.session
															) {
																e.next = 6;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 6:
															return (
																(n =
																	this.session
																		.requestDeleteLocalUserAttributesByKeys(
																			t
																		)
																		.toPromise()),
																(r = {
																	attribute:
																		ql(
																			this
																				.attributes,
																			t
																		),
																	promise: n,
																}),
																this.attributeDrafts.add(
																	r
																),
																(e.prev = 9),
																(e.next = 12),
																n
															);
														case 12:
															for (
																o = 0;
																o < t.length;
																o++
															)
																(i = t[o]),
																	delete this
																		.attributes[
																		i
																	];
															e.next = 20;
															break;
														case 15:
															if (
																((e.prev = 15),
																(e.t0 =
																	e.catch(9)),
																!Na(e.t0))
															) {
																e.next = 19;
																break;
															}
															throw e.t0;
														case 19:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 20:
															return (
																(e.prev = 20),
																this.attributeDrafts.delete(
																	r
																),
																e.finish(20)
															);
														case 23:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[9, 15, 20, 23]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "deleteChannelAttributesByKeys",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r,
											o,
											i,
											s,
											a,
											c,
											u,
											l = arguments;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((r =
																	2 <
																		l.length &&
																	void 0 !==
																		l[2]
																		? l[2]
																		: {}),
																(o =
																	r.enableNotificationToChannelMembers),
																(i =
																	void 0 !==
																		o && o),
																Array.isArray(
																	n
																) &&
																	0 !==
																		n.length &&
																	Ta(t) &&
																	!n.some(
																		function (
																			e
																		) {
																			return (
																				0 ===
																					e.length ||
																				512 <
																					e.length
																			);
																		}
																	))
															) {
																e.next = 3;
																break;
															}
															throw new da(
																"arguments is not valid",
																gb
															);
														case 3:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 5;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 5:
															if (
																void 0 !==
																this.session
															) {
																e.next = 7;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 7:
															return (
																(s =
																	this.session
																		.requestDeleteChannelAttributesByKeys(
																			t,
																			n,
																			i
																		)
																		.toPromise()),
																(e.prev = 8),
																(e.next = 11),
																s
															);
														case 11:
															if (
																(a =
																	this.channelAttributesCacheLru.get(
																		t
																	))
															)
																for (
																	c = 0;
																	c <
																	n.length;
																	c++
																)
																	(u = n[c]),
																		delete a[
																			u
																		];
															e.next = 20;
															break;
														case 15:
															if (
																((e.prev = 15),
																(e.t0 =
																	e.catch(8)),
																!Na(e.t0))
															) {
																e.next = 19;
																break;
															}
															throw e.t0;
														case 19:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 20:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[8, 15]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "clearLocalUserAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e() {
										var t, n;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															return (
																(t =
																	this.session
																		.requestClearLocalUserAttributes()
																		.toPromise()),
																(n = {
																	attribute:
																		{},
																	promise: t,
																}),
																this.attributeDrafts.add(
																	n
																),
																(e.prev = 7),
																(e.next = 10),
																t
															);
														case 10:
															(this.attributes =
																{}),
																(e.next = 18);
															break;
														case 13:
															if (
																((e.prev = 13),
																(e.t0 =
																	e.catch(7)),
																!Na(e.t0))
															) {
																e.next = 17;
																break;
															}
															throw e.t0;
														case 17:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 18:
															return (
																(e.prev = 18),
																this.attributeDrafts.delete(
																	n
																),
																e.finish(18)
															);
														case 21:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[7, 13, 18, 21]]
										);
									})
								);
								return function () {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "clearChannelAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i,
											s = arguments;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((n =
																	1 <
																		s.length &&
																	void 0 !==
																		s[1]
																		? s[1]
																		: {}),
																(r =
																	n.enableNotificationToChannelMembers),
																(o =
																	void 0 !==
																		r && r),
																this
																	.connectionState ===
																	oa.CONNECTED)
															) {
																e.next = 3;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 3:
															if (
																void 0 !==
																this.session
															) {
																e.next = 5;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 5:
															return (
																(i =
																	this.session
																		.requestClearChannelAttributes(
																			t,
																			o
																		)
																		.toPromise()),
																(e.prev = 6),
																(e.next = 9),
																i
															);
														case 9:
															this.channelAttributesCacheLru.delete(
																t
															),
																(e.next = 17);
															break;
														case 12:
															if (
																((e.prev = 12),
																(e.t0 =
																	e.catch(6)),
																!Na(e.t0))
															) {
																e.next = 16;
																break;
															}
															throw e.t0;
														case 16:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 17:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[6, 12]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getUserAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (Ta(t)) {
																e.next = 2;
																break;
															}
															throw new ca(
																"Not a valid user ID",
																gb
															);
														case 2:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 4;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 4:
															if (
																void 0 !==
																this.session
															) {
																e.next = 6;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 6:
															return (
																(e.prev = 6),
																(e.next = 9),
																this.session
																	.requestGetUserAttributeKeys(
																		t
																	)
																	.toPromise()
															);
														case 9:
															return (
																(n = e.sent),
																(r = n.keys),
																(e.next = 13),
																this.session
																	.requestGetUserAttributesByKeys(
																		t,
																		r.slice(
																			0,
																			512
																		)
																	)
																	.toPromise()
															);
														case 13:
															(o = e.sent),
																(e.next = 21);
															break;
														case 16:
															if (
																((e.prev = 16),
																(e.t0 =
																	e.catch(6)),
																!Na(e.t0))
															) {
																e.next = 20;
																break;
															}
															throw e.t0;
														case 20:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 21:
															return e.abrupt(
																"return",
																Zq(
																	o.attributeInfos.map(
																		function (
																			e
																		) {
																			return [
																				e.key,
																				e.value,
																			];
																		}
																	)
																)
															);
														case 22:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[6, 16]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getChannelAttributes",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o, i, s, a, c, u, l, f, h;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (Ta(t)) {
																e.next = 2;
																break;
															}
															throw new ca(
																"Not a valid channel ID",
																gb
															);
														case 2:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 4;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 4:
															if (
																void 0 !==
																this.session
															) {
																e.next = 6;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 6:
															return (
																(e.prev = 6),
																(e.next = 9),
																this.session
																	.requestGetChannelAttributesKeys(
																		t
																	)
																	.toPromise()
															);
														case 9:
															return (
																(n = e.sent),
																(r = n.keys),
																(e.next = 13),
																this.session
																	.requestGetChannelAttributesByKeys(
																		t,
																		r
																	)
																	.toPromise()
															);
														case 13:
															(o = e.sent),
																(i =
																	o.attributeMaps),
																(e.next = 22);
															break;
														case 17:
															if (
																((e.prev = 17),
																(e.t0 =
																	e.catch(6)),
																!Na(e.t0))
															) {
																e.next = 21;
																break;
															}
															throw e.t0;
														case 21:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 22:
															(s = {}), (a = 0);
														case 24:
															if (
																!(a < i.length)
															) {
																e.next = 32;
																break;
															}
															if (
																((c = i[a]),
																(u = c.key),
																(l = c.ms),
																(f = c.value),
																(h = c.origin),
																"string" ==
																	typeof u &&
																	P.isLong(
																		l
																	) &&
																	"string" ==
																		typeof f &&
																	Ta(h))
															) {
																e.next = 28;
																break;
															}
															return e.abrupt(
																"break",
																32
															);
														case 28:
															s[u] = {
																value: f,
																lastUpdateUserId:
																	h,
																lastUpdateTs:
																	l.toNumber(),
															};
														case 29:
															a++, (e.next = 24);
															break;
														case 32:
															return (
																this.channelAttributesCacheLru.set(
																	t,
																	md(
																		s,
																		function (
																			e
																		) {
																			return new Blob(
																				[
																					e.value,
																				]
																			)
																				.size;
																		}
																	)
																),
																e.abrupt(
																	"return",
																	s
																)
															);
														case 34:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[6, 17]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getChannelAttributesByKeys",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r, o, i, s, a, c, u, l, f, h;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															return (
																Qn(t, n),
																(e.prev = 5),
																(e.next = 8),
																this.session
																	.requestGetChannelAttributesByKeys(
																		t,
																		n
																	)
																	.toPromise()
															);
														case 8:
															(r = e.sent),
																(o =
																	r.attributeMaps),
																(e.next = 17);
															break;
														case 12:
															if (
																((e.prev = 12),
																(e.t0 =
																	e.catch(5)),
																!Na(e.t0))
															) {
																e.next = 16;
																break;
															}
															throw e.t0;
														case 16:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 17:
															(i = {}),
																(s =
																	this.channelAttributesCacheLru.get(
																		t,
																		{}
																	)),
																(a = 0);
														case 20:
															if (
																!(a < o.length)
															) {
																e.next = 29;
																break;
															}
															if (
																((c = o[a]),
																(u = c.key),
																(l = c.ms),
																(f = c.value),
																(h = c.origin),
																"string" ==
																	typeof u &&
																	P.isLong(
																		l
																	) &&
																	"string" ==
																		typeof f &&
																	Ta(h))
															) {
																e.next = 24;
																break;
															}
															return e.abrupt(
																"break",
																29
															);
														case 24:
															(s[u] = new Blob([
																f,
															]).size),
																(i[u] = {
																	value: f,
																	lastUpdateUserId:
																		h,
																	lastUpdateTs:
																		l.toNumber(),
																});
														case 26:
															a++, (e.next = 20);
															break;
														case 29:
															return (
																this.channelAttributesCacheLru.set(
																	t,
																	s
																),
																e.abrupt(
																	"return",
																	i
																)
															);
														case 31:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[5, 12]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "getUserAttributesByKeys",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																qc
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															return (
																Qn(t, n),
																(e.prev = 5),
																(e.next = 8),
																this.session
																	.requestGetUserAttributesByKeys(
																		t,
																		n
																	)
																	.toPromise()
															);
														case 8:
															(r = e.sent),
																(e.next = 16);
															break;
														case 11:
															if (
																((e.prev = 11),
																(e.t0 =
																	e.catch(5)),
																!Na(e.t0))
															) {
																e.next = 15;
																break;
															}
															throw e.t0;
														case 15:
															throw new ca(
																"arguments is not valid",
																gb
															);
														case 16:
															return e.abrupt(
																"return",
																Zq(
																	r.attributeInfos.map(
																		function (
																			e
																		) {
																			return [
																				e.key,
																				e.value,
																			];
																		}
																	)
																)
															);
														case 17:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[5, 11]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "login",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o, i, s;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																(xn(!0),
																(r = nh()),
																(o = t.token),
																t.token ===
																	this.context
																		.appId &&
																	(o =
																		void 0),
																bb(
																	"Session",
																	{
																		appId: this
																			.context
																			.appId,
																		did: navigator.userAgent,
																		elapse: Xa(
																			this
																				.session &&
																				this
																					.session
																					.startTime
																		),
																		index: {
																			index1: t.uid,
																			index2: this
																				.context
																				.appId,
																			index3: "enableLogUpload=".concat(
																				this
																					.context
																					.config
																					.enableLogUpload
																			),
																		},
																		installId:
																			Og,
																		lts: P.fromNumber(
																			Date.now()
																		),
																		os: 7,
																		sid: sb(
																			r
																		),
																		token:
																			o ||
																			"",
																		userId: t.uid,
																		ver: "1.5.1",
																		buildno: 418,
																		subVersion: 18,
																		version: 4,
																	},
																	null !==
																		(n =
																			this
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			n &&
																		n,
																	!0
																),
																De(t) &&
																	Ta(t.uid))
															) {
																e.next = 7;
																break;
															}
															throw new ca(
																"not a valid user id",
																si
															);
														case 7:
															if (
																"string" !=
																	typeof o ||
																!o
															) {
																e.next = 11;
																break;
															}
															(this.context.token =
																o),
																(e.next = 13);
															break;
														case 11:
															if (
																"string" ==
																	typeof o ||
																null == o
															) {
																e.next = 13;
																break;
															}
															throw new ca(
																'The "token" is not a valid string.',
																si
															);
														case 13:
															return (
																(i =
																	Date.now()),
																(this.context.sid =
																	sb(r)),
																(this.loginPromise =
																	this.loginImpl(
																		{
																			uid: t.uid,
																			instanceId:
																				r,
																		}
																	)),
																this.info(
																	"RTM Client logging in as ".concat(
																		La(
																			t.uid
																		)
																	)
																),
																(e.prev = 17),
																(e.next = 20),
																this
																	.loginPromise
															);
														case 20:
															e.next = 28;
															break;
														case 22:
															throw (
																((e.prev = 22),
																(e.t0 =
																	e.catch(
																		17
																	)),
																Na(e.t0) &&
																	bb(
																		"Link",
																		{
																			ackedServerIp:
																				"",
																			destServerIp:
																				"",
																			ec:
																				e
																					.t0
																					.code ||
																				1,
																			sc: e
																				.t0
																				.serverCode,
																			elapse: Xa(
																				this
																					.session &&
																					this
																						.session
																						.startTime
																			),
																			lts: P.fromNumber(
																				Date.now()
																			),
																			responseTime:
																				Date.now() -
																				i,
																			sid: sb(
																				r
																			),
																			userId: t.uid,
																		},
																		null !==
																			(s =
																				this
																					.context
																					.config
																					.enableCloudProxy) &&
																			void 0 !==
																				s &&
																			s
																	),
																(this.context.token =
																	void 0),
																(this.context.socketUseProxy =
																	!1),
																e.t0)
															);
														case 28:
															return (
																(e.prev = 28),
																(this.loginPromise =
																	void 0),
																e.finish(28)
															);
														case 31:
															this.context
																.socketUseProxy &&
																this.emit(
																	"FallbackProxyConnected"
																),
																xn(!1);
														case 33:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[17, 22, 28, 31]]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "logout",
							value: (function () {
								var e = ma(
									N.mark(function e() {
										var t;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																!this
																	.loginPromise
															) {
																e.next = 3;
																break;
															}
															return (
																(e.next = 3),
																this
																	.loginPromise
															);
														case 3:
															if (
																this
																	.connectionState !==
																oa.DISCONNECTED
															) {
																e.next = 6;
																break;
															}
															throw (
																(this.logError(
																	"Already in logout state"
																),
																new da(
																	"Logout failure. The client has already been logged out",
																	cs
																))
															);
														case 6:
															if (
																(this.internalEmitter.emit(
																	"LOGOUT"
																),
																this
																	.connectionState !==
																	oa.ABORTED)
															) {
																e.next = 11;
																break;
															}
															return (
																this.info(
																	'Reset connection state from "ABORTED" to "DISCONNECTED"'
																),
																this.onConnectionStateChanged(
																	oa.DISCONNECTED,
																	Rb.LOGOUT
																),
																e.abrupt(
																	"return"
																)
															);
														case 11:
															if (
																void 0 !==
																this.session
															) {
																e.next = 14;
																break;
															}
															return (
																this.onConnectionStateChanged(
																	oa.DISCONNECTED,
																	Rb.LOGOUT
																),
																e.abrupt(
																	"return"
																)
															);
														case 14:
															return (
																bb(
																	"Logout",
																	{
																		elapse: Xa(
																			this
																				.session
																				.startTime
																		),
																		lts: P.fromNumber(
																			Date.now()
																		),
																		sid: sb(
																			this
																				.session
																				.instanceId
																		),
																		userId: this
																			.context
																			.uid,
																	},
																	null !==
																		(t =
																			this
																				.context
																				.config
																				.enableCloudProxy) &&
																		void 0 !==
																			t &&
																		t
																),
																(e.next = 17),
																this.session.logoutHandler()
															);
														case 17:
															this.onConnectionStateChanged(
																oa.DISCONNECTED,
																Rb.LOGOUT
															),
																this.log(
																	"Log out success"
																);
														case 19:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function () {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "logoutSync",
							value: function () {
								var e,
									t = this;
								if (this.connectionState === oa.DISCONNECTED)
									throw (
										(this.logError(
											"Already in logout state"
										),
										new da(
											"Logout failure. The client has already been logged out",
											cs
										))
									);
								this.connectionState === oa.ABORTED
									? this.info(
											'Reset connection state from "ABORTED" to "DISCONNECTED"'
									  )
									: void 0 !== this.session &&
									  (bb(
											"Logout",
											{
												elapse: Xa(
													this.session.startTime
												),
												lts: P.fromNumber(Date.now()),
												sid: sb(
													this.session.instanceId
												),
												userId: this.context.uid,
											},
											null !==
												(e =
													this.context.config
														.enableCloudProxy) &&
												void 0 !== e &&
												e
									  ),
									  this.session
											.logoutHandler()
											.then(function () {
												t.log("Log out success");
											})),
									this.onConnectionStateChanged(
										oa.DISCONNECTED,
										Rb.LOGOUT
									);
							},
						},
						{
							key: "sendMessageToPeer",
							value: (function () {
								var e = ma(
									N.mark(function e(t, n) {
										var r,
											o,
											i = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																(Xn(t, bg),
																(r =
																	"TEXT" ===
																	t.messageType
																		? Ka.P2pSMsgNoOfflineFlag
																		: Ka.P2pRMsgNoOfflineFlag),
																this
																	.connectionState !==
																	oa.RECONNECTING)
															) {
																e.next = 5;
																break;
															}
															return (
																(o =
																	Date.now()),
																e.abrupt(
																	"return",
																	new Promise(
																		function (
																			e,
																			s
																		) {
																			var a,
																				c =
																					((a =
																						ma(
																							N.mark(
																								function a() {
																									var c;
																									return N.wrap(
																										function (
																											a
																										) {
																											for (;;)
																												switch (
																													(a.prev =
																														a.next)
																												) {
																													case 0:
																														if (
																															void 0 !==
																															i.session
																														) {
																															a.next = 2;
																															break;
																														}
																														throw new mb(
																															{
																																SESSION_NOT_FOUND:
																																	"Failed to get session of the client",
																															}
																														);
																													case 2:
																														return (
																															(c =
																																Date.now() -
																																o),
																															(a.prev = 3),
																															(a.t0 =
																																e),
																															(a.next = 7),
																															ph(
																																{
																																	message:
																																		t,
																																	peerId: n,
																																	toPeer: !0,
																																	session:
																																		i.session,
																																	errorCodes:
																																		{
																																			NOT_LOGGED_IN:
																																				Ll,
																																			TOO_OFTEN:
																																				es,
																																		},
																																	diff: c,
																																	logger: i.logger,
																																}
																															)
																														);
																													case 7:
																														(a.t1 =
																															a.sent),
																															(0,
																															a.t0)(
																																a.t1
																															),
																															(a.next = 18);
																														break;
																													case 11:
																														(a.prev = 11),
																															(a.t2 =
																																a.catch(
																																	3
																																)),
																															Ab(
																																a.t2
																															) &&
																																(i.session.emit(
																																	"messageCount",
																																	{
																																		messageCategory:
																																			r,
																																		type: "common",
																																		key: "sentcount",
																																	}
																																),
																																i.session.emit(
																																	"messageCount",
																																	{
																																		messageCategory:
																																			r,
																																		type: "common",
																																		key: "timeoutcount",
																																	}
																																),
																																s(
																																	new Ub(
																																		we(
																																			i.name,
																																			"sendMessageToPeer",
																																			1e4
																																		),
																																		Kl
																																	)
																																)),
																															Na(
																																a.t2
																															) &&
																																s(
																																	a.t2
																																),
																															i.session.emit(
																																"messageCount",
																																{
																																	messageCategory:
																																		r,
																																	type: "common",
																																	key: "sentcount",
																																}
																															),
																															i.session.emit(
																																"messageCount",
																																{
																																	messageCategory:
																																		r,
																																	type: "common",
																																	key: "unknowerrorcount",
																																}
																															),
																															s(
																																new Ja(
																																	"Peer-to-peer message send failure",
																																	{
																																		code: ds,
																																		originalError:
																																			a.t2,
																																	}
																																)
																															);
																													case 18:
																														return (
																															(a.prev = 18),
																															clearTimeout(
																																u
																															),
																															a.finish(
																																18
																															)
																														);
																													case 21:
																													case "end":
																														return a.stop();
																												}
																										},
																										a,
																										null,
																										[
																											[
																												3,
																												11,
																												18,
																												21,
																											],
																										]
																									);
																								}
																							)
																						)),
																					function () {
																						return a.apply(
																							this,
																							arguments
																						);
																					});
																			i.internalEmitter.once(
																				"RECONNECTED",
																				c
																			);
																			var u =
																				setTimeout(
																					function () {
																						i.internalEmitter.off(
																							"RECONNECTED",
																							c
																						),
																							s(
																								new Ub(
																									we(
																										i.name,
																										"sendMessageToPeer",
																										1e4
																									),
																									Kl
																								)
																							);
																					},
																					9e3
																				);
																		}
																	)
																)
															);
														case 5:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 7;
																break;
															}
															throw new da(
																"Failed to send the peer-to-peer message. The client is not logged in",
																Ll
															);
														case 7:
															if (
																void 0 !==
																this.session
															) {
																e.next = 9;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 9:
															return (
																(e.prev = 9),
																(e.next = 12),
																ph({
																	message: t,
																	peerId: n,
																	toPeer: !0,
																	session:
																		this
																			.session,
																	errorCodes:
																		{
																			NOT_LOGGED_IN:
																				Ll,
																			TOO_OFTEN:
																				es,
																		},
																	diff: 0,
																	logger: this
																		.logger,
																})
															);
														case 12:
															return e.abrupt(
																"return",
																e.sent
															);
														case 15:
															if (
																((e.prev = 15),
																(e.t0 =
																	e.catch(9)),
																!Ab(e.t0))
															) {
																e.next = 21;
																break;
															}
															throw (
																(this.session.emit(
																	"messageCount",
																	{
																		messageCategory:
																			r,
																		type: "common",
																		key: "sentcount",
																	}
																),
																this.session.emit(
																	"messageCount",
																	{
																		messageCategory:
																			r,
																		type: "common",
																		key: "timeoutcount",
																	}
																),
																new Ub(
																	we(
																		this
																			.name,
																		"sendMessageToPeer",
																		1e4
																	),
																	Kl
																))
															);
														case 21:
															if (!Na(e.t0)) {
																e.next = 23;
																break;
															}
															throw e.t0;
														case 23:
															throw (
																(this.session.emit(
																	"messageCount",
																	{
																		messageCategory:
																			r,
																		type: "common",
																		key: "sentcount",
																	}
																),
																this.session.emit(
																	"messageCount",
																	{
																		messageCategory:
																			r,
																		type: "common",
																		key: "unknowerrorcount",
																	}
																),
																new Ja(
																	"Peer-to-peer message send failure",
																	{
																		code: ds,
																		originalError:
																			e.t0,
																	}
																))
															);
														case 26:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[9, 15]]
										);
									})
								);
								return function (t, n) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "createChannel",
							value: function (e) {
								var t = this;
								if (!Ta(e))
									throw new ca(
										[
											"The %s in the arguments is invalid",
											Object.keys({ channelId: e })[0],
										],
										FB
									);
								return new uF(
									e,
									function () {
										return t.session;
									},
									this,
									this.logger
								);
							},
						},
						{
							key: "createLocalInvitation",
							value: function (e) {
								if (!Ta(e))
									throw new ca(
										[
											"The %s in the arguments is invalid",
											Object.keys({ calleeId: e })[0],
										],
										Xc
									);
								return this.invitationManager.genLocalInvitation(
									e
								);
							},
						},
						{
							key: "subscribePeersOnlineStatus",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i,
											s,
											a,
											c,
											u,
											l,
											f,
											h,
											p,
											d,
											b = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																Nl
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															if (
																Array.isArray(
																	t
																) &&
																0 !== t.length
															) {
																e.next = 6;
																break;
															}
															throw new ca(
																"Invalid arguments: peerIds",
																Qg
															);
														case 6:
															n = 0;
														case 7:
															if (
																!(n < t.length)
															) {
																e.next = 14;
																break;
															}
															if (
																Ta((r = t[n]))
															) {
																e.next = 11;
																break;
															}
															throw new ca(
																[
																	"subscribePeersOnlineStatus peer id %s is invalid",
																	r,
																],
																Qg
															);
														case 11:
															n++, (e.next = 7);
															break;
														case 14:
															if (
																!(
																	512 <
																	(o =
																		t &&
																		t.length
																			? fl(
																					t
																			  )
																			: [])
																		.length +
																		Object.keys(
																			this
																				.subscribedPeerStatusCache
																		)
																			.length +
																		this
																			.pendingPeerStatusSubCount
																)
															) {
																e.next = 17;
																break;
															}
															throw new ic(
																"Subscribed peers overflows",
																js
															);
														case 17:
															return (
																(this.pendingPeerStatusSubCount +=
																	o.length),
																(e.next = 20),
																this.session
																	.requestSubscribePeersOnlineStatus(
																		o
																	)
																	.toPromise()
															);
														case 20:
															(i = e.sent),
																(s = i.errors),
																(this.pendingPeerStatusSubCount -=
																	o.length),
																(a = []),
																(c = []),
																(u = 0);
														case 26:
															if (
																!(u < s.length)
															) {
																e.next = 34;
																break;
															}
															if (
																((l = s[u]),
																(f = l.code),
																"string" ==
																	typeof (h =
																		l.account))
															) {
																e.next = 30;
																break;
															}
															throw new Ja(
																"Returned account is invalid",
																is
															);
														case 30:
															0 !== f &&
																a.push(h);
														case 31:
															u++, (e.next = 26);
															break;
														case 34:
															for (
																p = 0;
																p < o.length;
																p++
															)
																(d = o[p]),
																	a.includes(
																		d
																	) ||
																		(c.push(
																			d
																		),
																		(this.subscribedPeerStatusCache[
																			d
																		] =
																			void 0));
															if (
																(this.session
																	.requestPeersOnlineStatus(
																		c
																	)
																	.pipe(
																		Ea(
																			function (
																				e
																			) {
																				return md(
																					tl(
																						e.userInfos,
																						"account"
																					),
																					function (
																						e
																					) {
																						return !!e.ts;
																					}
																				);
																			}
																		)
																	)
																	.subscribe(
																		function (
																			e
																		) {
																			(e =
																				md(
																					e,
																					function (
																						e,
																						t
																					) {
																						return (
																							(e =
																								e
																									? ta
																											.PeerOnlineState
																											.ONLINE
																									: ta
																											.PeerOnlineState
																											.OFFLINE),
																							(b.subscribedPeerStatusCache[
																								t
																							] =
																								e)
																						);
																					}
																				)),
																				b.emit(
																					"PeersOnlineStatusChanged",
																					e
																				);
																		}
																	),
																0 === a.length)
															) {
																e.next = 38;
																break;
															}
															throw new Ja(
																"Subscription failed",
																is
															);
														case 38:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "unsubscribePeersOnlineStatus",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n, r, o, i, s;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																Nl
															);
														case 2:
															if (
																void 0 !==
																this.session
															) {
																e.next = 4;
																break;
															}
															throw new mb({
																SESSION_NOT_FOUND:
																	"Failed to get session of the client",
															});
														case 4:
															if (
																Array.isArray(
																	t
																) &&
																0 !== t.length
															) {
																e.next = 6;
																break;
															}
															throw new ca(
																"Invalid arguments: peerIds",
																Qg
															);
														case 6:
															n = 0;
														case 7:
															if (
																!(n < t.length)
															) {
																e.next = 14;
																break;
															}
															if (
																Ta((r = t[n]))
															) {
																e.next = 11;
																break;
															}
															throw new ca(
																[
																	"subscribePeersOnlineStatus peer id %s is invalid",
																	r,
																],
																Qg
															);
														case 11:
															n++, (e.next = 7);
															break;
														case 14:
															if (
																!(
																	512 <
																	t.length
																)
															) {
																e.next = 16;
																break;
															}
															throw new ic(
																"Unsubscribed peers overflows",
																js
															);
														case 16:
															for (
																o =
																	t &&
																	t.length
																		? fl(t)
																		: [],
																	this.session.requestUnsubscribePeersOnlineStatus(
																		o
																	),
																	i = 0;
																i < o.length;
																i++
															)
																(s = o[i]),
																	delete this
																		.subscribedPeerStatusCache[
																		s
																	];
														case 19:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "queryPeersBySubscriptionOption",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																this
																	.connectionState ===
																oa.CONNECTED
															) {
																e.next = 2;
																break;
															}
															throw new da(
																"The client is not logged in",
																Nl
															);
														case 2:
															if (
																t !==
																ta
																	.PeerSubscriptionOption
																	.ONLINE_STATUS
															) {
																e.next = 4;
																break;
															}
															return e.abrupt(
																"return",
																Object.keys(
																	this
																		.subscribedPeerStatusCache
																)
															);
														case 4:
															throw new ca(
																"Subscription option not supported",
																Qg
															);
														case 5:
														case "end":
															return e.stop();
													}
											},
											e,
											this
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "createMessage",
							value: function (e) {
								return e;
							},
						},
						{
							key: "loginImpl",
							value: (function () {
								var e = ma(
									N.mark(function e(t) {
										var n,
											r,
											o,
											i,
											s,
											a,
											c,
											u,
											l = this;
										return N.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((n = t.uid),
																(r =
																	t.instanceId),
																(o =
																	t.forceLoginTime),
																(i =
																	void 0 === o
																		? 0
																		: o),
																(s = r),
																!(
																	void 0 !==
																		this
																			.lastLoginTime &&
																	500 >
																		Date.now() -
																			this
																				.lastLoginTime
																))
															) {
																e.next = 4;
																break;
															}
															throw new bE(
																[
																	"The frequency of login exceeded the limit of %d queries per second",
																	2,
																],
																UB
															);
														case 4:
															if (
																this
																	.connectionState ===
																	oa.DISCONNECTED ||
																0 !== i
															) {
																e.next = 6;
																break;
															}
															throw new da(
																"The SDK is either logging in or has logged in the Agora RTM system",
																SB
															);
														case 6:
															(e.prev = 6),
																(this.context.uid =
																	n),
																(e.next = 13);
															break;
														case 10:
															throw (
																((e.prev = 10),
																(e.t0 =
																	e.catch(6)),
																new ca(
																	[
																		"The %s in the arguments is invalid",
																		Object.keys(
																			{
																				uid: n,
																			}
																		)[0],
																	],
																	si
																))
															);
														case 13:
															return (
																0 === i &&
																	this.onConnectionStateChanged(
																		oa.CONNECTING,
																		Rb.LOGIN
																	),
																((a = new ct(
																	this.context,
																	this.logger,
																	!1
																)).blacklistedIP =
																	this.blacklistedIP),
																(this.session =
																	c =
																		new Tt(
																			this.context,
																			a,
																			s,
																			this.logger
																		)),
																(u =
																	function () {
																		l.connectionState ===
																			oa.CONNECTED &&
																			(l.onConnectionStateChanged(
																				oa.RECONNECTING,
																				Rb.INTERRUPTED
																			),
																			l.session) &&
																			l.session.once(
																				"userJoined",
																				function () {
																					l.onConnectionStateChanged(
																						oa.CONNECTED,
																						Rb.LOGIN_SUCCESS
																					);
																				}
																			);
																	}),
																c.on(
																	"connectionLost",
																	u
																),
																c.on(
																	"tokenExpired",
																	function () {
																		l.emit(
																			"TokenExpired"
																		);
																	}
																),
																c.on(
																	"tokenPrivilegeWillExpire",
																	this
																		.TokenPrivilegeWillExpireHandler
																),
																c.once(
																	"userDrop",
																	this
																		.userDropHandler
																),
																this.session.on(
																	"peerTextMessage",
																	function (
																		e
																	) {
																		l.emit(
																			"MessageFromPeer",
																			{
																				text: e.text,
																				messageType:
																					ta
																						.MessageType
																						.TEXT,
																			},
																			e.peerId,
																			e.properties
																		);
																	}
																),
																this.session.on(
																	"peerRawMessage",
																	function (
																		e
																	) {
																		l.emit(
																			"MessageFromPeer",
																			{
																				rawMessage:
																					e.raw,
																				description:
																					e.desc,
																				messageType:
																					ta
																						.MessageType
																						.RAW,
																			},
																			e.peerId,
																			e.properties
																		);
																	}
																),
																c.on(
																	"instanceChanged",
																	function (
																		e
																	) {
																		return (s =
																			e);
																	}
																),
																c.on(
																	"peerOnlineStatusChanged",
																	function (
																		e
																	) {
																		var t =
																				e.instance.toString() +
																				e.state,
																			n =
																				l.peerStatusSeqLru.get(
																					t
																				);
																		!n ||
																		e.seq.greaterThan(
																			n
																		)
																			? (l.peerStatusSeqLru.set(
																					t,
																					e.seq
																			  ),
																			  e.state !==
																					l
																						.subscribedPeerStatusCache[
																						e
																							.peerId
																					] &&
																					l.emit(
																						"PeersOnlineStatusChanged",
																						x(
																							{},
																							e.peerId,
																							e.state
																						)
																					),
																			  (l.subscribedPeerStatusCache[
																					e.peerId
																			  ] =
																					e.state),
																			  clearTimeout(
																					l
																						.peerUnreachableTimers[
																						t
																					]
																			  ),
																			  e.state ===
																					ta
																						.PeerOnlineState
																						.UNREACHABLE &&
																					(l.peerUnreachableTimers[
																						t
																					] =
																						setTimeout(
																							function () {
																								l
																									.subscribedPeerStatusCache[
																									e
																										.peerId
																								] ===
																									ta
																										.PeerOnlineState
																										.UNREACHABLE &&
																									((l.subscribedPeerStatusCache[
																										e.peerId
																									] =
																										ta.PeerOnlineState.ONLINE),
																									l.emit(
																										"PeersOnlineStatusChanged",
																										x(
																											{},
																											e.peerId,
																											ta
																												.PeerOnlineState
																												.ONLINE
																										)
																									));
																							},
																							3e4
																						)))
																			: l.log(
																					"peerOnlineStatusChanged dedup for %s, %d",
																					t,
																					e.seq.toNumber()
																			  );
																	}
																),
																c.on(
																	"invitationMessage",
																	this.invitationManager.invitationMessageHandler.bind(
																		this
																			.invitationManager
																	)
																),
																c.on(
																	"channelAttributesUpdated",
																	function (
																		e
																	) {
																		var t =
																			e.channelId;
																		e =
																			e.attributeMaps;
																		for (
																			var n =
																					{},
																				r = 0;
																			r <
																			e.length;
																			r++
																		) {
																			var o =
																					e[
																						r
																					],
																				i =
																					o.key,
																				s =
																					o.ms,
																				a =
																					o.value;
																			if (
																				((o =
																					o.origin),
																				"string" !=
																					typeof i ||
																					!P.isLong(
																						s
																					) ||
																					"string" !=
																						typeof a ||
																					!Ta(
																						o
																					))
																			)
																				break;
																			n[
																				i
																			] =
																				new Blob(
																					[
																						a,
																					]
																				).size;
																		}
																		l.channelAttributesCacheLru.set(
																			t,
																			n
																		);
																	}
																),
																c.on(
																	"userJoined",
																	function (
																		e
																	) {
																		if (
																			0 !==
																			Object.keys(
																				l.attributes
																			)
																				.length
																		) {
																			if (
																				void 0 ===
																				l.session
																			)
																				return;
																			l.session
																				.requestSetLocalUserAttributes(
																					l.attributes,
																					e
																				)
																				.toPromise();
																		}
																		if (
																			0 !==
																			l
																				.attributeDrafts
																				.size
																		)
																			for (
																				var t =
																						function (
																							t,
																							n
																						) {
																							var r =
																								(t =
																									n[
																										t
																									])
																									.attribute;
																							t.promise.then(
																								function () {
																									void 0 !==
																										l.session &&
																										l.session
																											.requestSetLocalUserAttributes(
																												r,
																												e
																											)
																											.toPromise();
																								}
																							);
																						},
																					n = 0,
																					r =
																						Array.from(
																							l.attributeDrafts
																						);
																				n <
																				r.length;
																				n++
																			)
																				t(
																					n,
																					r
																				);
																		0 !==
																			Object.keys(
																				l.subscribedPeerStatusCache
																			)
																				.length &&
																			c.requestSubscribePeersOnlineStatus(
																				Object.keys(
																					l.subscribedPeerStatusCache
																				)
																			);
																	}
																),
																c.on(
																	"banEdgeIP",
																	function (
																		e
																	) {
																		l.banIP(
																			e
																		);
																	}
																),
																(this.lastLoginTime =
																	Date.now()),
																(e.prev = 32),
																(e.next = 35),
																c
																	.loginHandler()
																	.toPromise()
															);
														case 35:
															e.next = 53;
															break;
														case 37:
															if (
																((e.prev = 37),
																(e.t1 =
																	e.catch(
																		32
																	)),
																!(
																	"loginRespTimeout" ===
																		e.t1
																			.name &&
																	2 > i
																))
															) {
																e.next = 46;
																break;
															}
															return (
																c.removeAllListeners(),
																(e.next = 43),
																this.loginImpl({
																	uid: n,
																	instanceId:
																		r,
																	forceLoginTime:
																		i + 1,
																})
															);
														case 43:
															return e.abrupt(
																"return"
															);
														case 46:
															if (!Ab(e.t1)) {
																e.next = 49;
																break;
															}
															throw (
																(this.onConnectionStateChanged(
																	oa.DISCONNECTED,
																	Rb.LOGIN_TIMEOUT
																),
																new Ub(
																	we(
																		this
																			.name,
																		"login",
																		12e3
																	),
																	TB
																))
															);
														case 49:
															if (
																(this.onConnectionStateChanged(
																	oa.DISCONNECTED,
																	Rb.LOGIN_FAILURE
																),
																!Na(e.t1))
															) {
																e.next = 52;
																break;
															}
															throw e.t1;
														case 52:
															throw new Ja(
																"Login failure",
																{
																	code: $r,
																	originalError:
																		e.t1,
																}
															);
														case 53:
															this.onConnectionStateChanged(
																oa.CONNECTED,
																Rb.LOGIN_SUCCESS
															);
														case 54:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[
												[6, 10],
												[32, 37],
											]
										);
									})
								);
								return function (t) {
									return e.apply(this, arguments);
								};
							})(),
						},
						{
							key: "onConnectionStateChanged",
							value: function (e, t) {
								var n,
									r = this;
								e === oa.RECONNECTING && (this.reconnId += 1),
									bb(
										"ConnectionStateChange",
										{
											elapse: Xa(
												this.session &&
													this.session.startTime
											),
											lts: P.fromNumber(Date.now()),
											newState: Vt[e],
											oldState: Vt[this.connectionState],
											reason: vF[t],
											sid: sb(
												(this.session &&
													this.session.instanceId) ||
													P.fromNumber(0)
											),
											userId: this.context.uid,
											reconnId: this.reconnId,
										},
										null !==
											(n =
												this.context.config
													.enableCloudProxy) &&
											void 0 !== n &&
											n
									),
									this.connectionState === oa.RECONNECTING &&
										e === oa.CONNECTED &&
										(0 !==
											Object.keys(
												this.subscribedPeerStatusCache
											).length &&
											void 0 !== this.session &&
											this.session
												.requestPeersOnlineStatus(
													Object.keys(
														this
															.subscribedPeerStatusCache
													)
												)
												.pipe(
													Ea(function (e) {
														return md(
															tl(
																e.userInfos,
																"account"
															),
															function (e) {
																return !!e.ts;
															}
														);
													})
												)
												.subscribe(function (e) {
													(e = md(e, function (e, t) {
														return (
															(e = e
																? ta
																		.PeerOnlineState
																		.ONLINE
																: ta
																		.PeerOnlineState
																		.OFFLINE),
															(r.subscribedPeerStatusCache[
																t
															] = e)
														);
													})),
														r.emit(
															"PeersOnlineStatusChanged",
															e
														);
												}),
										this.internalEmitter.emit(
											"RECONNECTED"
										)),
									(this.connectionState = e),
									(e !== oa.ABORTED &&
										e !== oa.DISCONNECTED) ||
										((this.pendingPeerStatusSubCount =
											this.reconnId =
												0),
										(this.attributes = {}),
										this.session &&
											(this.session.removeAllListeners(),
											this.session.msgDedupLru.empty(),
											this.session.dialogueSequenceLru.empty(),
											this.session.dialPendingMsgSubjectMap.clear()),
										this.channelAttributesCacheLru.empty(),
										this.peerStatusSeqLru.empty(),
										(this.peerUnreachableTimers = {}),
										(this.subscribedPeerStatusCache = {}),
										this.attributeDrafts.clear(),
										(this.context.token = void 0)),
									this.emit("ConnectionStateChanged", e, t);
							},
						},
						{
							key: "banIP",
							value: function (e) {
								var t;
								this.log("ip banned", e);
								var n =
									null !== (t = this.blacklistedIP[e]) &&
									void 0 !== t
										? t
										: 0;
								this.blacklistedIP[e] = n + 1;
							},
						},
					]),
					t
				);
			})(sc())),
			Da(
				W.prototype,
				"renewToken",
				[jb],
				Object.getOwnPropertyDescriptor(W.prototype, "renewToken"),
				W.prototype
			),
			Da(
				W.prototype,
				"queryPeersOnlineStatus",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"queryPeersOnlineStatus"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"getChannelMemberCount",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"getChannelMemberCount"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"setLocalUserAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"setLocalUserAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"setChannelAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"setChannelAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"addOrUpdateLocalUserAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"addOrUpdateLocalUserAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"addOrUpdateChannelAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"addOrUpdateChannelAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"deleteLocalUserAttributesByKeys",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"deleteLocalUserAttributesByKeys"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"deleteChannelAttributesByKeys",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"deleteChannelAttributesByKeys"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"clearLocalUserAttributes",
				[Mc],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"clearLocalUserAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"clearChannelAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"clearChannelAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"getUserAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"getUserAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"getChannelAttributes",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"getChannelAttributes"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"getChannelAttributesByKeys",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"getChannelAttributesByKeys"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"getUserAttributesByKeys",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"getUserAttributesByKeys"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"login",
				[Mc],
				Object.getOwnPropertyDescriptor(W.prototype, "login"),
				W.prototype
			),
			Da(
				W.prototype,
				"logout",
				[Mc],
				Object.getOwnPropertyDescriptor(W.prototype, "logout"),
				W.prototype
			),
			Da(
				W.prototype,
				"logoutSync",
				[Mc],
				Object.getOwnPropertyDescriptor(W.prototype, "logoutSync"),
				W.prototype
			),
			Da(
				W.prototype,
				"sendMessageToPeer",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"sendMessageToPeer"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"createChannel",
				[jb],
				Object.getOwnPropertyDescriptor(W.prototype, "createChannel"),
				W.prototype
			),
			Da(
				W.prototype,
				"createLocalInvitation",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"createLocalInvitation"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"subscribePeersOnlineStatus",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"subscribePeersOnlineStatus"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"unsubscribePeersOnlineStatus",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"unsubscribePeersOnlineStatus"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"queryPeersBySubscriptionOption",
				[jb],
				Object.getOwnPropertyDescriptor(
					W.prototype,
					"queryPeersBySubscriptionOption"
				),
				W.prototype
			),
			Da(
				W.prototype,
				"createMessage",
				[Mc],
				Object.getOwnPropertyDescriptor(W.prototype, "createMessage"),
				W.prototype
			),
			W),
		rm,
		sm,
		tm,
		um,
		Wt =
			null ===
				(rm = /Chrome\/([0-9.]+)/.exec(
					null === (tm = window) ||
						void 0 === tm ||
						null === (um = tm.navigator) ||
						void 0 === um
						? void 0
						: um.userAgent
				)) ||
			void 0 === rm ||
			null === (sm = rm[1]) ||
			void 0 === sm
				? void 0
				: sm.split(".")[0];
	if (Wt && 88 <= parseInt(Wt, 10) && !Ce()) {
		var vm,
			ze = document.createElement("video"),
			Ae = document.createElement("canvas");
		ze.setAttribute("style", "display:none"),
			ze.setAttribute("muted", ""),
			(ze.muted = !0),
			ze.setAttribute("autoplay", ""),
			(ze.autoplay = !0),
			ze.setAttribute("playsinline", ""),
			Ae.setAttribute("style", "display:none"),
			Ae.setAttribute("width", "1"),
			Ae.setAttribute("height", "1"),
			null === (vm = Ae.getContext("2d")) ||
				void 0 === vm ||
				vm.fillRect(0, 0, 1, 1),
			(ze.srcObject = null == Ae ? void 0 : Ae.captureStream());
	}
	var Xt = {
			LOG_FILTER_OFF: {
				error: !1,
				warn: !1,
				info: !1,
				track: !1,
				debug: !1,
			},
			LOG_FILTER_ERROR: {
				error: !0,
				warn: !1,
				info: !1,
				track: !1,
				debug: !1,
			},
			LOG_FILTER_WARNING: {
				error: !0,
				warn: !0,
				info: !1,
				track: !1,
				debug: !1,
			},
			LOG_FILTER_INFO: {
				error: !0,
				warn: !0,
				info: !0,
				track: !1,
				debug: !1,
			},
			LOG_FILTER_DEBUG: {
				error: !0,
				warn: !0,
				info: !0,
				track: !0,
				debug: !0,
			},
		},
		Yt = {
			enableLogUpload: !1,
			logFilter: Xt.LOG_FILTER_INFO,
			enableCloudProxy: !1,
		},
		ue = Wa(
			Wa(
				{
					createInstance: function (e) {
						var t =
								1 < arguments.length && void 0 !== arguments[1]
									? arguments[1]
									: {},
							n = 2 < arguments.length ? arguments[2] : void 0;
						if (!/^[\dA-Za-z]{32}$/.test(e))
							throw new ca(
								[
									"The %s in the arguments is invalid",
									Object.keys({ appId: e })[0],
								],
								Or
							);
						var r = Object.keys(t).filter(function (e) {
							return !(e in Yt);
						});
						if (0 !== r.length)
							throw new ca(
								"Invalid RTM config: ".concat(r.join(", ")),
								Or
							);
						var o = Wa(Wa({}, Yt), t);
						if (
							void 0 !== n &&
							(!Array.isArray(n) || 0 === n.length)
						)
							throw new ca("Invalid area config");
						if (null != n) {
							if (
								!n.every(function (e) {
									return e in ta.LegacyAreaCode;
								})
							)
								throw new ca(
									"Invalid area codes: ".concat(
										n
											.filter(function (e) {
												return !(e in ta);
											})
											.join(", ")
									)
								);
							fa = Ve(
								n.map(function (e) {
									return dE[e];
								})
							);
						}
						n =
							Tl =
							Ya.__global_unique_id__ =
								(Ya.__global_unique_id__ || 0) + 1;
						var i = iE(o);
						r = jE(o);
						var s = kE(o),
							a = lE(n, o),
							c = Xs(n, o),
							u = c("RTM:DEBUG", "<Entry> ");
						return (
							(Qs.rtmConfig = o),
							i("The Agora RTM Web SDK version is %s", "1.5.1"),
							t.enableCloudProxy && i("RTM cloud proxy enabled"),
							t.enableLogUpload && i("Log upload enabled"),
							fa &&
								u(
									"Area is set to %s",
									Array.from(fa.CODES)
										.map(function (e) {
											return Yf(S).find(function (t) {
												return S[t] === e;
											});
										})
										.join(", ")
								),
							u("Creating an RtmClient instance"),
							u(
								'The Git commit ID is "'.concat(
									"v1.5.1-0-g5bbbcd72",
									'"'
								)
							),
							u("The App ID is %s", Yn(e, 4, 10, "*".repeat(6))),
							i("The process ID is %s", Og),
							u("The build is %s", "v1.5.1-0-g5bbbcd72"),
							u("NODE_ENV is %s", "production"),
							new wF(
								e,
								{
									genLogger: c,
									genTracker: a,
									info: i,
									warn: r,
									logError: s,
									loggerId: n,
								},
								o,
								function (e) {
									for (
										var t = 0, n = Yf(e);
										t < n.length;
										t++
									) {
										var r = n[t];
										try {
											var s = e[r];
											null != s &&
												(e.enableCloudProxy &&
													i(
														"RTM cloud proxy enabled"
													),
												e.enableLogUpload &&
													i("Log upload enabled"),
												(o[r] = s));
										} catch (e) {
											throw new ca(
												[
													"The %s in the arguments is invalid",
													r,
												],
												void 0
											);
										}
									}
								}
							)
						);
					},
					BUILD: "v1.5.1-0-g5bbbcd72",
					VERSION: "1.5.1",
					END_CALL_PREFIX:
						"AgoraRTMLegacyEndcallCompatibleMessagePrefix",
					processId: Og,
					ConnectionChangeReason: ta.ConnectionChangeReason,
					ConnectionState: ta.ConnectionState,
					LocalInvitationFailureReason:
						ta.LocalInvitationFailureReason,
					LocalInvitationState: ta.LocalInvitationState,
					RemoteInvitationFailureReason:
						ta.RemoteInvitationFailureReason,
					RemoteInvitationState: ta.RemoteInvitationState,
					MessageType: ta.MessageType,
					PeerOnlineState: ta.PeerOnlineState,
					PeerSubscriptionOption: ta.PeerSubscriptionOption,
				},
				Xt
			),
			{},
			{
				setParameter: function (e, t) {
					Object.keys(Ec).includes(e) && (Ec[e] = t);
				},
				getParameter: function (e) {
					return Ec[e];
				},
				setArea: function (e) {
					var t = e.areaCodes;
					if (
						((e = e.excludedArea),
						!Array.isArray(t) ||
							0 === t.length ||
							!t.every(function (e) {
								return e in ta.AreaCode;
							}))
					)
						throw new ca("Invalid area config");
					if (void 0 !== e && e === ta.AreaCode.GLOBAL)
						throw new ca("Excluded area cannot be global");
					if (void 0 === e)
						fa = Ve(
							t.map(function (e) {
								return S[e];
							})
						);
					else {
						if (t.includes(e))
							throw new ca(
								"Excluded area cannot be in areaCodes"
							);
						if (!(e in S)) throw new ca("Invalid excludedArea:", e);
						fa = Gv({
							areas: t.map(function (e) {
								return S[e];
							}),
							excludedArea: S[e],
						});
					}
				},
			}
		);
	return ue;
});
