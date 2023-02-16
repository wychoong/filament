var __create = Object.create,
    __defProp = Object.defineProperty,
    __getProtoOf = Object.getPrototypeOf,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __getOwnPropNames = Object.getOwnPropertyNames,
    __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __markAsModule = (target) => __defProp(target, '__esModule', { value: !0 })
var __commonJS = (callback, module) => () => (
    module || ((module = { exports: {} }), callback(module.exports, module)),
    module.exports
)
var __exportStar = (target, module, desc) => {
        if (
            (module && typeof module == 'object') ||
            typeof module == 'function'
        )
            for (let key of __getOwnPropNames(module))
                !__hasOwnProp.call(target, key) &&
                    key !== 'default' &&
                    __defProp(target, key, {
                        get: () => module[key],
                        enumerable:
                            !(desc = __getOwnPropDesc(module, key)) ||
                            desc.enumerable,
                    })
        return target
    },
    __toModule = (module) =>
        __exportStar(
            __markAsModule(
                __defProp(
                    module != null ? __create(__getProtoOf(module)) : {},
                    'default',
                    module && module.__esModule && 'default' in module
                        ? { get: () => module.default, enumerable: !0 }
                        : { value: module, enumerable: !0 },
                ),
            ),
            module,
        )
var require_customParseFormat = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t())
            : typeof define == 'function' && define.amd
            ? define(t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_plugin_customParseFormat = t())
    })(exports, function () {
        'use strict'
        var e = {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A',
            },
            t =
                /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
            n = /\d\d/,
            r = /\d\d?/,
            i = /\d*[^-_:/,()\s\d]+/,
            o = {},
            s = function (e2) {
                return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3)
            },
            a = function (e2) {
                return function (t2) {
                    this[e2] = +t2
                }
            },
            f = [
                /[+-]\d\d:?(\d\d)?|Z/,
                function (e2) {
                    ;(this.zone || (this.zone = {})).offset = (function (e3) {
                        if (!e3 || e3 === 'Z') return 0
                        var t2 = e3.match(/([+-]|\d\d)/g),
                            n2 = 60 * t2[1] + (+t2[2] || 0)
                        return n2 === 0 ? 0 : t2[0] === '+' ? -n2 : n2
                    })(e2)
                },
            ],
            h = function (e2) {
                var t2 = o[e2]
                return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f))
            },
            u = function (e2, t2) {
                var n2,
                    r2 = o.meridiem
                if (r2) {
                    for (var i2 = 1; i2 <= 24; i2 += 1)
                        if (e2.indexOf(r2(i2, 0, t2)) > -1) {
                            n2 = i2 > 12
                            break
                        }
                } else n2 = e2 === (t2 ? 'pm' : 'PM')
                return n2
            },
            d = {
                A: [
                    i,
                    function (e2) {
                        this.afternoon = u(e2, !1)
                    },
                ],
                a: [
                    i,
                    function (e2) {
                        this.afternoon = u(e2, !0)
                    },
                ],
                S: [
                    /\d/,
                    function (e2) {
                        this.milliseconds = 100 * +e2
                    },
                ],
                SS: [
                    n,
                    function (e2) {
                        this.milliseconds = 10 * +e2
                    },
                ],
                SSS: [
                    /\d{3}/,
                    function (e2) {
                        this.milliseconds = +e2
                    },
                ],
                s: [r, a('seconds')],
                ss: [r, a('seconds')],
                m: [r, a('minutes')],
                mm: [r, a('minutes')],
                H: [r, a('hours')],
                h: [r, a('hours')],
                HH: [r, a('hours')],
                hh: [r, a('hours')],
                D: [r, a('day')],
                DD: [n, a('day')],
                Do: [
                    i,
                    function (e2) {
                        var t2 = o.ordinal,
                            n2 = e2.match(/\d+/)
                        if (((this.day = n2[0]), t2))
                            for (var r2 = 1; r2 <= 31; r2 += 1)
                                t2(r2).replace(/\[|\]/g, '') === e2 &&
                                    (this.day = r2)
                    },
                ],
                M: [r, a('month')],
                MM: [n, a('month')],
                MMM: [
                    i,
                    function (e2) {
                        var t2 = h('months'),
                            n2 =
                                (
                                    h('monthsShort') ||
                                    t2.map(function (e3) {
                                        return e3.slice(0, 3)
                                    })
                                ).indexOf(e2) + 1
                        if (n2 < 1) throw new Error()
                        this.month = n2 % 12 || n2
                    },
                ],
                MMMM: [
                    i,
                    function (e2) {
                        var t2 = h('months').indexOf(e2) + 1
                        if (t2 < 1) throw new Error()
                        this.month = t2 % 12 || t2
                    },
                ],
                Y: [/[+-]?\d+/, a('year')],
                YY: [
                    n,
                    function (e2) {
                        this.year = s(e2)
                    },
                ],
                YYYY: [/\d{4}/, a('year')],
                Z: f,
                ZZ: f,
            }
        function c(n2) {
            var r2, i2
            ;(r2 = n2), (i2 = o && o.formats)
            for (
                var s2 = (n2 = r2.replace(
                        /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                        function (t2, n3, r3) {
                            var o2 = r3 && r3.toUpperCase()
                            return (
                                n3 ||
                                i2[r3] ||
                                e[r3] ||
                                i2[o2].replace(
                                    /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                    function (e2, t3, n4) {
                                        return t3 || n4.slice(1)
                                    },
                                )
                            )
                        },
                    )).match(t),
                    a2 = s2.length,
                    f2 = 0;
                f2 < a2;
                f2 += 1
            ) {
                var h2 = s2[f2],
                    u2 = d[h2],
                    c2 = u2 && u2[0],
                    l = u2 && u2[1]
                s2[f2] = l
                    ? { regex: c2, parser: l }
                    : h2.replace(/^\[|\]$/g, '')
            }
            return function (e2) {
                for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
                    var i3 = s2[n3]
                    if (typeof i3 == 'string') r3 += i3.length
                    else {
                        var o2 = i3.regex,
                            f3 = i3.parser,
                            h3 = e2.slice(r3),
                            u3 = o2.exec(h3)[0]
                        f3.call(t2, u3), (e2 = e2.replace(u3, ''))
                    }
                }
                return (
                    (function (e3) {
                        var t3 = e3.afternoon
                        if (t3 !== void 0) {
                            var n4 = e3.hours
                            t3
                                ? n4 < 12 && (e3.hours += 12)
                                : n4 === 12 && (e3.hours = 0),
                                delete e3.afternoon
                        }
                    })(t2),
                    t2
                )
            }
        }
        return function (e2, t2, n2) {
            ;(n2.p.customParseFormat = !0),
                e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear)
            var r2 = t2.prototype,
                i2 = r2.parse
            r2.parse = function (e3) {
                var t3 = e3.date,
                    r3 = e3.utc,
                    s2 = e3.args
                this.$u = r3
                var a2 = s2[1]
                if (typeof a2 == 'string') {
                    var f2 = s2[2] === !0,
                        h2 = s2[3] === !0,
                        u2 = f2 || h2,
                        d2 = s2[2]
                    h2 && (d2 = s2[2]),
                        (o = this.$locale()),
                        !f2 && d2 && (o = n2.Ls[d2]),
                        (this.$d = (function (e4, t4, n3) {
                            try {
                                if (['x', 'X'].indexOf(t4) > -1)
                                    return new Date((t4 === 'X' ? 1e3 : 1) * e4)
                                var r4 = c(t4)(e4),
                                    i3 = r4.year,
                                    o2 = r4.month,
                                    s3 = r4.day,
                                    a3 = r4.hours,
                                    f3 = r4.minutes,
                                    h3 = r4.seconds,
                                    u3 = r4.milliseconds,
                                    d3 = r4.zone,
                                    l2 = new Date(),
                                    m2 = s3 || (i3 || o2 ? 1 : l2.getDate()),
                                    M3 = i3 || l2.getFullYear(),
                                    Y2 = 0
                                ;(i3 && !o2) ||
                                    (Y2 = o2 > 0 ? o2 - 1 : l2.getMonth())
                                var p = a3 || 0,
                                    v = f3 || 0,
                                    D2 = h3 || 0,
                                    g = u3 || 0
                                return d3
                                    ? new Date(
                                          Date.UTC(
                                              M3,
                                              Y2,
                                              m2,
                                              p,
                                              v,
                                              D2,
                                              g + 60 * d3.offset * 1e3,
                                          ),
                                      )
                                    : n3
                                    ? new Date(
                                          Date.UTC(M3, Y2, m2, p, v, D2, g),
                                      )
                                    : new Date(M3, Y2, m2, p, v, D2, g)
                            } catch (e5) {
                                return new Date('')
                            }
                        })(t3, a2, r3)),
                        this.init(),
                        d2 && d2 !== !0 && (this.$L = this.locale(d2).$L),
                        u2 && t3 != this.format(a2) && (this.$d = new Date('')),
                        (o = {})
                } else if (a2 instanceof Array)
                    for (var l = a2.length, m = 1; m <= l; m += 1) {
                        s2[1] = a2[m - 1]
                        var M2 = n2.apply(this, s2)
                        if (M2.isValid()) {
                            ;(this.$d = M2.$d), (this.$L = M2.$L), this.init()
                            break
                        }
                        m === l && (this.$d = new Date(''))
                    }
                else i2.call(this, e3)
            }
        }
    })
})
var require_localeData = __commonJS((exports, module) => {
    ;(function (n, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e())
            : typeof define == 'function' && define.amd
            ? define(e)
            : ((n =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : n || self).dayjs_plugin_localeData = e())
    })(exports, function () {
        'use strict'
        return function (n, e, t) {
            var r = e.prototype,
                o = function (n2) {
                    return n2 && (n2.indexOf ? n2 : n2.s)
                },
                u = function (n2, e2, t2, r2, u2) {
                    var i2 = n2.name ? n2 : n2.$locale(),
                        a2 = o(i2[e2]),
                        s2 = o(i2[t2]),
                        f =
                            a2 ||
                            s2.map(function (n3) {
                                return n3.slice(0, r2)
                            })
                    if (!u2) return f
                    var d = i2.weekStart
                    return f.map(function (n3, e3) {
                        return f[(e3 + (d || 0)) % 7]
                    })
                },
                i = function () {
                    return t.Ls[t.locale()]
                },
                a = function (n2, e2) {
                    return (
                        n2.formats[e2] ||
                        (function (n3) {
                            return n3.replace(
                                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                                function (n4, e3, t2) {
                                    return e3 || t2.slice(1)
                                },
                            )
                        })(n2.formats[e2.toUpperCase()])
                    )
                },
                s = function () {
                    var n2 = this
                    return {
                        months: function (e2) {
                            return e2 ? e2.format('MMMM') : u(n2, 'months')
                        },
                        monthsShort: function (e2) {
                            return e2
                                ? e2.format('MMM')
                                : u(n2, 'monthsShort', 'months', 3)
                        },
                        firstDayOfWeek: function () {
                            return n2.$locale().weekStart || 0
                        },
                        weekdays: function (e2) {
                            return e2 ? e2.format('dddd') : u(n2, 'weekdays')
                        },
                        weekdaysMin: function (e2) {
                            return e2
                                ? e2.format('dd')
                                : u(n2, 'weekdaysMin', 'weekdays', 2)
                        },
                        weekdaysShort: function (e2) {
                            return e2
                                ? e2.format('ddd')
                                : u(n2, 'weekdaysShort', 'weekdays', 3)
                        },
                        longDateFormat: function (e2) {
                            return a(n2.$locale(), e2)
                        },
                        meridiem: this.$locale().meridiem,
                        ordinal: this.$locale().ordinal,
                    }
                }
            ;(r.localeData = function () {
                return s.bind(this)()
            }),
                (t.localeData = function () {
                    var n2 = i()
                    return {
                        firstDayOfWeek: function () {
                            return n2.weekStart || 0
                        },
                        weekdays: function () {
                            return t.weekdays()
                        },
                        weekdaysShort: function () {
                            return t.weekdaysShort()
                        },
                        weekdaysMin: function () {
                            return t.weekdaysMin()
                        },
                        months: function () {
                            return t.months()
                        },
                        monthsShort: function () {
                            return t.monthsShort()
                        },
                        longDateFormat: function (e2) {
                            return a(n2, e2)
                        },
                        meridiem: n2.meridiem,
                        ordinal: n2.ordinal,
                    }
                }),
                (t.months = function () {
                    return u(i(), 'months')
                }),
                (t.monthsShort = function () {
                    return u(i(), 'monthsShort', 'months', 3)
                }),
                (t.weekdays = function (n2) {
                    return u(i(), 'weekdays', null, null, n2)
                }),
                (t.weekdaysShort = function (n2) {
                    return u(i(), 'weekdaysShort', 'weekdays', 3, n2)
                }),
                (t.weekdaysMin = function (n2) {
                    return u(i(), 'weekdaysMin', 'weekdays', 2, n2)
                })
        }
    })
})
var require_timezone = __commonJS((exports, module) => {
    ;(function (t, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e())
            : typeof define == 'function' && define.amd
            ? define(e)
            : ((t =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : t || self).dayjs_plugin_timezone = e())
    })(exports, function () {
        'use strict'
        var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
            e = {}
        return function (n, i, o) {
            var r,
                a = function (t2, n2, i2) {
                    i2 === void 0 && (i2 = {})
                    var o2 = new Date(t2),
                        r2 = (function (t3, n3) {
                            n3 === void 0 && (n3 = {})
                            var i3 = n3.timeZoneName || 'short',
                                o3 = t3 + '|' + i3,
                                r3 = e[o3]
                            return (
                                r3 ||
                                    ((r3 = new Intl.DateTimeFormat('en-US', {
                                        hour12: !1,
                                        timeZone: t3,
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        timeZoneName: i3,
                                    })),
                                    (e[o3] = r3)),
                                r3
                            )
                        })(n2, i2)
                    return r2.formatToParts(o2)
                },
                u = function (e2, n2) {
                    for (
                        var i2 = a(e2, n2), r2 = [], u2 = 0;
                        u2 < i2.length;
                        u2 += 1
                    ) {
                        var f2 = i2[u2],
                            s2 = f2.type,
                            m = f2.value,
                            c = t[s2]
                        c >= 0 && (r2[c] = parseInt(m, 10))
                    }
                    var d = r2[3],
                        l = d === 24 ? 0 : d,
                        v =
                            r2[0] +
                            '-' +
                            r2[1] +
                            '-' +
                            r2[2] +
                            ' ' +
                            l +
                            ':' +
                            r2[4] +
                            ':' +
                            r2[5] +
                            ':000',
                        h = +e2
                    return (o.utc(v).valueOf() - (h -= h % 1e3)) / 6e4
                },
                f = i.prototype
            ;(f.tz = function (t2, e2) {
                t2 === void 0 && (t2 = r)
                var n2 = this.utcOffset(),
                    i2 = this.toDate(),
                    a2 = i2.toLocaleString('en-US', { timeZone: t2 }),
                    u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60),
                    f2 = o(a2)
                        .$set('millisecond', this.$ms)
                        .utcOffset(
                            15 * -Math.round(i2.getTimezoneOffset() / 15) - u2,
                            !0,
                        )
                if (e2) {
                    var s2 = f2.utcOffset()
                    f2 = f2.add(n2 - s2, 'minute')
                }
                return (f2.$x.$timezone = t2), f2
            }),
                (f.offsetName = function (t2) {
                    var e2 = this.$x.$timezone || o.tz.guess(),
                        n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(
                            function (t3) {
                                return t3.type.toLowerCase() === 'timezonename'
                            },
                        )
                    return n2 && n2.value
                })
            var s = f.startOf
            ;(f.startOf = function (t2, e2) {
                if (!this.$x || !this.$x.$timezone) return s.call(this, t2, e2)
                var n2 = o(this.format('YYYY-MM-DD HH:mm:ss:SSS'))
                return s.call(n2, t2, e2).tz(this.$x.$timezone, !0)
            }),
                (o.tz = function (t2, e2, n2) {
                    var i2 = n2 && e2,
                        a2 = n2 || e2 || r,
                        f2 = u(+o(), a2)
                    if (typeof t2 != 'string') return o(t2).tz(a2)
                    var s2 = (function (t3, e3, n3) {
                            var i3 = t3 - 60 * e3 * 1e3,
                                o2 = u(i3, n3)
                            if (e3 === o2) return [i3, e3]
                            var r2 = u((i3 -= 60 * (o2 - e3) * 1e3), n3)
                            return o2 === r2
                                ? [i3, o2]
                                : [
                                      t3 - 60 * Math.min(o2, r2) * 1e3,
                                      Math.max(o2, r2),
                                  ]
                        })(o.utc(t2, i2).valueOf(), f2, a2),
                        m = s2[0],
                        c = s2[1],
                        d = o(m).utcOffset(c)
                    return (d.$x.$timezone = a2), d
                }),
                (o.tz.guess = function () {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone
                }),
                (o.tz.setDefault = function (t2) {
                    r = t2
                })
        }
    })
})
var require_utc = __commonJS((exports, module) => {
    ;(function (t, i) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = i())
            : typeof define == 'function' && define.amd
            ? define(i)
            : ((t =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : t || self).dayjs_plugin_utc = i())
    })(exports, function () {
        'use strict'
        var t = 'minute',
            i = /[+-]\d\d(?::?\d\d)?/g,
            e = /([+-]|\d\d)/g
        return function (s, f, n) {
            var u = f.prototype
            ;(n.utc = function (t2) {
                var i2 = { date: t2, utc: !0, args: arguments }
                return new f(i2)
            }),
                (u.utc = function (i2) {
                    var e2 = n(this.toDate(), { locale: this.$L, utc: !0 })
                    return i2 ? e2.add(this.utcOffset(), t) : e2
                }),
                (u.local = function () {
                    return n(this.toDate(), { locale: this.$L, utc: !1 })
                })
            var o = u.parse
            u.parse = function (t2) {
                t2.utc && (this.$u = !0),
                    this.$utils().u(t2.$offset) || (this.$offset = t2.$offset),
                    o.call(this, t2)
            }
            var r = u.init
            u.init = function () {
                if (this.$u) {
                    var t2 = this.$d
                    ;(this.$y = t2.getUTCFullYear()),
                        (this.$M = t2.getUTCMonth()),
                        (this.$D = t2.getUTCDate()),
                        (this.$W = t2.getUTCDay()),
                        (this.$H = t2.getUTCHours()),
                        (this.$m = t2.getUTCMinutes()),
                        (this.$s = t2.getUTCSeconds()),
                        (this.$ms = t2.getUTCMilliseconds())
                } else r.call(this)
            }
            var a = u.utcOffset
            u.utcOffset = function (s2, f2) {
                var n2 = this.$utils().u
                if (n2(s2))
                    return this.$u
                        ? 0
                        : n2(this.$offset)
                        ? a.call(this)
                        : this.$offset
                if (
                    typeof s2 == 'string' &&
                    ((s2 = (function (t2) {
                        t2 === void 0 && (t2 = '')
                        var s3 = t2.match(i)
                        if (!s3) return null
                        var f3 = ('' + s3[0]).match(e) || ['-', 0, 0],
                            n3 = f3[0],
                            u3 = 60 * +f3[1] + +f3[2]
                        return u3 === 0 ? 0 : n3 === '+' ? u3 : -u3
                    })(s2)),
                    s2 === null)
                )
                    return this
                var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2,
                    o2 = this
                if (f2) return (o2.$offset = u2), (o2.$u = s2 === 0), o2
                if (s2 !== 0) {
                    var r2 = this.$u
                        ? this.toDate().getTimezoneOffset()
                        : -1 * this.utcOffset()
                    ;((o2 = this.local().add(u2 + r2, t)).$offset = u2),
                        (o2.$x.$localOffset = r2)
                } else o2 = this.utc()
                return o2
            }
            var h = u.format
            ;(u.format = function (t2) {
                var i2 = t2 || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '')
                return h.call(this, i2)
            }),
                (u.valueOf = function () {
                    var t2 = this.$utils().u(this.$offset)
                        ? 0
                        : this.$offset +
                          (this.$x.$localOffset || this.$d.getTimezoneOffset())
                    return this.$d.valueOf() - 6e4 * t2
                }),
                (u.isUTC = function () {
                    return !!this.$u
                }),
                (u.toISOString = function () {
                    return this.toDate().toISOString()
                }),
                (u.toString = function () {
                    return this.toDate().toUTCString()
                })
            var l = u.toDate
            u.toDate = function (t2) {
                return t2 === 's' && this.$offset
                    ? n(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
                    : l.call(this)
            }
            var c = u.diff
            u.diff = function (t2, i2, e2) {
                if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2)
                var s2 = this.local(),
                    f2 = n(t2).local()
                return c.call(s2, f2, i2, e2)
            }
        }
    })
})
var require_dayjs_min = __commonJS((exports, module) => {
    ;(function (t, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e())
            : typeof define == 'function' && define.amd
            ? define(e)
            : ((t =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : t || self).dayjs = e())
    })(exports, function () {
        'use strict'
        var t = 1e3,
            e = 6e4,
            n = 36e5,
            r = 'millisecond',
            i = 'second',
            s = 'minute',
            u = 'hour',
            a = 'day',
            o = 'week',
            f = 'month',
            h = 'quarter',
            c = 'year',
            d = 'date',
            l = 'Invalid Date',
            $ =
                /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            y =
                /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            M2 = {
                name: 'en',
                weekdays:
                    'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                        '_',
                    ),
                months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                    '_',
                ),
                ordinal: function (t2) {
                    var e2 = ['th', 'st', 'nd', 'rd'],
                        n2 = t2 % 100
                    return (
                        '[' + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + ']'
                    )
                },
            },
            m = function (t2, e2, n2) {
                var r2 = String(t2)
                return !r2 || r2.length >= e2
                    ? t2
                    : '' + Array(e2 + 1 - r2.length).join(n2) + t2
            },
            v = {
                s: m,
                z: function (t2) {
                    var e2 = -t2.utcOffset(),
                        n2 = Math.abs(e2),
                        r2 = Math.floor(n2 / 60),
                        i2 = n2 % 60
                    return (
                        (e2 <= 0 ? '+' : '-') +
                        m(r2, 2, '0') +
                        ':' +
                        m(i2, 2, '0')
                    )
                },
                m: function t2(e2, n2) {
                    if (e2.date() < n2.date()) return -t2(n2, e2)
                    var r2 =
                            12 * (n2.year() - e2.year()) +
                            (n2.month() - e2.month()),
                        i2 = e2.clone().add(r2, f),
                        s2 = n2 - i2 < 0,
                        u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f)
                    return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0)
                },
                a: function (t2) {
                    return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2)
                },
                p: function (t2) {
                    return (
                        {
                            M: f,
                            y: c,
                            w: o,
                            d: a,
                            D: d,
                            h: u,
                            m: s,
                            s: i,
                            ms: r,
                            Q: h,
                        }[t2] ||
                        String(t2 || '')
                            .toLowerCase()
                            .replace(/s$/, '')
                    )
                },
                u: function (t2) {
                    return t2 === void 0
                },
            },
            g = 'en',
            D2 = {}
        D2[g] = M2
        var p = function (t2) {
                return t2 instanceof _
            },
            S2 = function t2(e2, n2, r2) {
                var i2
                if (!e2) return g
                if (typeof e2 == 'string') {
                    var s2 = e2.toLowerCase()
                    D2[s2] && (i2 = s2), n2 && ((D2[s2] = n2), (i2 = s2))
                    var u2 = e2.split('-')
                    if (!i2 && u2.length > 1) return t2(u2[0])
                } else {
                    var a2 = e2.name
                    ;(D2[a2] = e2), (i2 = a2)
                }
                return !r2 && i2 && (g = i2), i2 || (!r2 && g)
            },
            w = function (t2, e2) {
                if (p(t2)) return t2.clone()
                var n2 = typeof e2 == 'object' ? e2 : {}
                return (n2.date = t2), (n2.args = arguments), new _(n2)
            },
            O = v
        ;(O.l = S2),
            (O.i = p),
            (O.w = function (t2, e2) {
                return w(t2, {
                    locale: e2.$L,
                    utc: e2.$u,
                    x: e2.$x,
                    $offset: e2.$offset,
                })
            })
        var _ = (function () {
                function M3(t2) {
                    ;(this.$L = S2(t2.locale, null, !0)), this.parse(t2)
                }
                var m2 = M3.prototype
                return (
                    (m2.parse = function (t2) {
                        ;(this.$d = (function (t3) {
                            var e2 = t3.date,
                                n2 = t3.utc
                            if (e2 === null) return new Date(NaN)
                            if (O.u(e2)) return new Date()
                            if (e2 instanceof Date) return new Date(e2)
                            if (typeof e2 == 'string' && !/Z$/i.test(e2)) {
                                var r2 = e2.match($)
                                if (r2) {
                                    var i2 = r2[2] - 1 || 0,
                                        s2 = (r2[7] || '0').substring(0, 3)
                                    return n2
                                        ? new Date(
                                              Date.UTC(
                                                  r2[1],
                                                  i2,
                                                  r2[3] || 1,
                                                  r2[4] || 0,
                                                  r2[5] || 0,
                                                  r2[6] || 0,
                                                  s2,
                                              ),
                                          )
                                        : new Date(
                                              r2[1],
                                              i2,
                                              r2[3] || 1,
                                              r2[4] || 0,
                                              r2[5] || 0,
                                              r2[6] || 0,
                                              s2,
                                          )
                                }
                            }
                            return new Date(e2)
                        })(t2)),
                            (this.$x = t2.x || {}),
                            this.init()
                    }),
                    (m2.init = function () {
                        var t2 = this.$d
                        ;(this.$y = t2.getFullYear()),
                            (this.$M = t2.getMonth()),
                            (this.$D = t2.getDate()),
                            (this.$W = t2.getDay()),
                            (this.$H = t2.getHours()),
                            (this.$m = t2.getMinutes()),
                            (this.$s = t2.getSeconds()),
                            (this.$ms = t2.getMilliseconds())
                    }),
                    (m2.$utils = function () {
                        return O
                    }),
                    (m2.isValid = function () {
                        return this.$d.toString() !== l
                    }),
                    (m2.isSame = function (t2, e2) {
                        var n2 = w(t2)
                        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2)
                    }),
                    (m2.isAfter = function (t2, e2) {
                        return w(t2) < this.startOf(e2)
                    }),
                    (m2.isBefore = function (t2, e2) {
                        return this.endOf(e2) < w(t2)
                    }),
                    (m2.$g = function (t2, e2, n2) {
                        return O.u(t2) ? this[e2] : this.set(n2, t2)
                    }),
                    (m2.unix = function () {
                        return Math.floor(this.valueOf() / 1e3)
                    }),
                    (m2.valueOf = function () {
                        return this.$d.getTime()
                    }),
                    (m2.startOf = function (t2, e2) {
                        var n2 = this,
                            r2 = !!O.u(e2) || e2,
                            h2 = O.p(t2),
                            l2 = function (t3, e3) {
                                var i2 = O.w(
                                    n2.$u
                                        ? Date.UTC(n2.$y, e3, t3)
                                        : new Date(n2.$y, e3, t3),
                                    n2,
                                )
                                return r2 ? i2 : i2.endOf(a)
                            },
                            $2 = function (t3, e3) {
                                return O.w(
                                    n2
                                        .toDate()
                                        [t3].apply(
                                            n2.toDate('s'),
                                            (r2
                                                ? [0, 0, 0, 0]
                                                : [23, 59, 59, 999]
                                            ).slice(e3),
                                        ),
                                    n2,
                                )
                            },
                            y2 = this.$W,
                            M4 = this.$M,
                            m3 = this.$D,
                            v2 = 'set' + (this.$u ? 'UTC' : '')
                        switch (h2) {
                            case c:
                                return r2 ? l2(1, 0) : l2(31, 11)
                            case f:
                                return r2 ? l2(1, M4) : l2(0, M4 + 1)
                            case o:
                                var g2 = this.$locale().weekStart || 0,
                                    D3 = (y2 < g2 ? y2 + 7 : y2) - g2
                                return l2(r2 ? m3 - D3 : m3 + (6 - D3), M4)
                            case a:
                            case d:
                                return $2(v2 + 'Hours', 0)
                            case u:
                                return $2(v2 + 'Minutes', 1)
                            case s:
                                return $2(v2 + 'Seconds', 2)
                            case i:
                                return $2(v2 + 'Milliseconds', 3)
                            default:
                                return this.clone()
                        }
                    }),
                    (m2.endOf = function (t2) {
                        return this.startOf(t2, !1)
                    }),
                    (m2.$set = function (t2, e2) {
                        var n2,
                            o2 = O.p(t2),
                            h2 = 'set' + (this.$u ? 'UTC' : ''),
                            l2 = ((n2 = {}),
                            (n2[a] = h2 + 'Date'),
                            (n2[d] = h2 + 'Date'),
                            (n2[f] = h2 + 'Month'),
                            (n2[c] = h2 + 'FullYear'),
                            (n2[u] = h2 + 'Hours'),
                            (n2[s] = h2 + 'Minutes'),
                            (n2[i] = h2 + 'Seconds'),
                            (n2[r] = h2 + 'Milliseconds'),
                            n2)[o2],
                            $2 = o2 === a ? this.$D + (e2 - this.$W) : e2
                        if (o2 === f || o2 === c) {
                            var y2 = this.clone().set(d, 1)
                            y2.$d[l2]($2),
                                y2.init(),
                                (this.$d = y2.set(
                                    d,
                                    Math.min(this.$D, y2.daysInMonth()),
                                ).$d)
                        } else l2 && this.$d[l2]($2)
                        return this.init(), this
                    }),
                    (m2.set = function (t2, e2) {
                        return this.clone().$set(t2, e2)
                    }),
                    (m2.get = function (t2) {
                        return this[O.p(t2)]()
                    }),
                    (m2.add = function (r2, h2) {
                        var d2,
                            l2 = this
                        r2 = Number(r2)
                        var $2 = O.p(h2),
                            y2 = function (t2) {
                                var e2 = w(l2)
                                return O.w(
                                    e2.date(e2.date() + Math.round(t2 * r2)),
                                    l2,
                                )
                            }
                        if ($2 === f) return this.set(f, this.$M + r2)
                        if ($2 === c) return this.set(c, this.$y + r2)
                        if ($2 === a) return y2(1)
                        if ($2 === o) return y2(7)
                        var M4 =
                                ((d2 = {}),
                                (d2[s] = e),
                                (d2[u] = n),
                                (d2[i] = t),
                                d2)[$2] || 1,
                            m3 = this.$d.getTime() + r2 * M4
                        return O.w(m3, this)
                    }),
                    (m2.subtract = function (t2, e2) {
                        return this.add(-1 * t2, e2)
                    }),
                    (m2.format = function (t2) {
                        var e2 = this,
                            n2 = this.$locale()
                        if (!this.isValid()) return n2.invalidDate || l
                        var r2 = t2 || 'YYYY-MM-DDTHH:mm:ssZ',
                            i2 = O.z(this),
                            s2 = this.$H,
                            u2 = this.$m,
                            a2 = this.$M,
                            o2 = n2.weekdays,
                            f2 = n2.months,
                            h2 = function (t3, n3, i3, s3) {
                                return (
                                    (t3 && (t3[n3] || t3(e2, r2))) ||
                                    i3[n3].slice(0, s3)
                                )
                            },
                            c2 = function (t3) {
                                return O.s(s2 % 12 || 12, t3, '0')
                            },
                            d2 =
                                n2.meridiem ||
                                function (t3, e3, n3) {
                                    var r3 = t3 < 12 ? 'AM' : 'PM'
                                    return n3 ? r3.toLowerCase() : r3
                                },
                            $2 = {
                                YY: String(this.$y).slice(-2),
                                YYYY: this.$y,
                                M: a2 + 1,
                                MM: O.s(a2 + 1, 2, '0'),
                                MMM: h2(n2.monthsShort, a2, f2, 3),
                                MMMM: h2(f2, a2),
                                D: this.$D,
                                DD: O.s(this.$D, 2, '0'),
                                d: String(this.$W),
                                dd: h2(n2.weekdaysMin, this.$W, o2, 2),
                                ddd: h2(n2.weekdaysShort, this.$W, o2, 3),
                                dddd: o2[this.$W],
                                H: String(s2),
                                HH: O.s(s2, 2, '0'),
                                h: c2(1),
                                hh: c2(2),
                                a: d2(s2, u2, !0),
                                A: d2(s2, u2, !1),
                                m: String(u2),
                                mm: O.s(u2, 2, '0'),
                                s: String(this.$s),
                                ss: O.s(this.$s, 2, '0'),
                                SSS: O.s(this.$ms, 3, '0'),
                                Z: i2,
                            }
                        return r2.replace(y, function (t3, e3) {
                            return e3 || $2[t3] || i2.replace(':', '')
                        })
                    }),
                    (m2.utcOffset = function () {
                        return (
                            15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        )
                    }),
                    (m2.diff = function (r2, d2, l2) {
                        var $2,
                            y2 = O.p(d2),
                            M4 = w(r2),
                            m3 = (M4.utcOffset() - this.utcOffset()) * e,
                            v2 = this - M4,
                            g2 = O.m(this, M4)
                        return (
                            (g2 =
                                (($2 = {}),
                                ($2[c] = g2 / 12),
                                ($2[f] = g2),
                                ($2[h] = g2 / 3),
                                ($2[o] = (v2 - m3) / 6048e5),
                                ($2[a] = (v2 - m3) / 864e5),
                                ($2[u] = v2 / n),
                                ($2[s] = v2 / e),
                                ($2[i] = v2 / t),
                                $2)[y2] || v2),
                            l2 ? g2 : O.a(g2)
                        )
                    }),
                    (m2.daysInMonth = function () {
                        return this.endOf(f).$D
                    }),
                    (m2.$locale = function () {
                        return D2[this.$L]
                    }),
                    (m2.locale = function (t2, e2) {
                        if (!t2) return this.$L
                        var n2 = this.clone(),
                            r2 = S2(t2, e2, !0)
                        return r2 && (n2.$L = r2), n2
                    }),
                    (m2.clone = function () {
                        return O.w(this.$d, this)
                    }),
                    (m2.toDate = function () {
                        return new Date(this.valueOf())
                    }),
                    (m2.toJSON = function () {
                        return this.isValid() ? this.toISOString() : null
                    }),
                    (m2.toISOString = function () {
                        return this.$d.toISOString()
                    }),
                    (m2.toString = function () {
                        return this.$d.toUTCString()
                    }),
                    M3
                )
            })(),
            T = _.prototype
        return (
            (w.prototype = T),
            [
                ['$ms', r],
                ['$s', i],
                ['$m', s],
                ['$H', u],
                ['$W', a],
                ['$M', f],
                ['$y', c],
                ['$D', d],
            ].forEach(function (t2) {
                T[t2[1]] = function (e2) {
                    return this.$g(e2, t2[0], t2[1])
                }
            }),
            (w.extend = function (t2, e2) {
                return t2.$i || (t2(e2, _, w), (t2.$i = !0)), w
            }),
            (w.locale = S2),
            (w.isDayjs = p),
            (w.unix = function (t2) {
                return w(1e3 * t2)
            }),
            (w.en = D2[g]),
            (w.Ls = D2),
            (w.p = {}),
            w
        )
    })
})
var require_ar = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_ar = t(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function t(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var n = t(e),
            r =
                '\u064A\u0646\u0627\u064A\u0631_\u0641\u0628\u0631\u0627\u064A\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064A\u0644_\u0645\u0627\u064A\u0648_\u064A\u0648\u0646\u064A\u0648_\u064A\u0648\u0644\u064A\u0648_\u0623\u063A\u0633\u0637\u0633_\u0633\u0628\u062A\u0645\u0628\u0631_\u0623\u0643\u062A\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062F\u064A\u0633\u0645\u0628\u0631'.split(
                    '_',
                ),
            _ = {
                1: '\u0661',
                2: '\u0662',
                3: '\u0663',
                4: '\u0664',
                5: '\u0665',
                6: '\u0666',
                7: '\u0667',
                8: '\u0668',
                9: '\u0669',
                0: '\u0660',
            },
            d = {
                '\u0661': '1',
                '\u0662': '2',
                '\u0663': '3',
                '\u0664': '4',
                '\u0665': '5',
                '\u0666': '6',
                '\u0667': '7',
                '\u0668': '8',
                '\u0669': '9',
                '\u0660': '0',
            },
            o = {
                name: 'ar',
                weekdays:
                    '\u0627\u0644\u0623\u062D\u062F_\u0627\u0644\u0625\u062B\u0646\u064A\u0646_\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062E\u0645\u064A\u0633_\u0627\u0644\u062C\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062A'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u0623\u062D\u062F_\u0625\u062B\u0646\u064A\u0646_\u062B\u0644\u0627\u062B\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062E\u0645\u064A\u0633_\u062C\u0645\u0639\u0629_\u0633\u0628\u062A'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u062D_\u0646_\u062B_\u0631_\u062E_\u062C_\u0633'.split(
                        '_',
                    ),
                months: r,
                monthsShort: r,
                weekStart: 6,
                relativeTime: {
                    future: '\u0628\u0639\u062F %s',
                    past: '\u0645\u0646\u0630 %s',
                    s: '\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629',
                    m: '\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629',
                    mm: '%d \u062F\u0642\u0627\u0626\u0642',
                    h: '\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629',
                    hh: '%d \u0633\u0627\u0639\u0627\u062A',
                    d: '\u064A\u0648\u0645 \u0648\u0627\u062D\u062F',
                    dd: '%d \u0623\u064A\u0627\u0645',
                    M: '\u0634\u0647\u0631 \u0648\u0627\u062D\u062F',
                    MM: '%d \u0623\u0634\u0647\u0631',
                    y: '\u0639\u0627\u0645 \u0648\u0627\u062D\u062F',
                    yy: '%d \u0623\u0639\u0648\u0627\u0645',
                },
                preparse: function (e2) {
                    return e2
                        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e3) {
                            return d[e3]
                        })
                        .replace(/،/g, ',')
                },
                postformat: function (e2) {
                    return e2
                        .replace(/\d/g, function (e3) {
                            return _[e3]
                        })
                        .replace(/,/g, '\u060C')
                },
                ordinal: function (e2) {
                    return e2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'D/\u200FM/\u200FYYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd D MMMM YYYY HH:mm',
                },
            }
        return n.default.locale(o, null, !0), o
    })
})
var require_bs = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_bs = t(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function t(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var _ = t(e),
            a = {
                name: 'bs',
                weekdays:
                    'nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota'.split(
                        '_',
                    ),
                months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split(
                    '_',
                ),
                weekStart: 1,
                weekdaysShort: 'ned._pon._uto._sri._\u010Det._pet._sub.'.split(
                    '_',
                ),
                monthsShort:
                    'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split(
                        '_',
                    ),
                weekdaysMin: 'ne_po_ut_sr_\u010De_pe_su'.split('_'),
                ordinal: function (e2) {
                    return e2
                },
                formats: {
                    LT: 'H:mm',
                    LTS: 'H:mm:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D. MMMM YYYY',
                    LLL: 'D. MMMM YYYY H:mm',
                    LLLL: 'dddd, D. MMMM YYYY H:mm',
                },
            }
        return _.default.locale(a, null, !0), a
    })
})
var require_ca = __commonJS((exports, module) => {
    ;(function (e, s) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = s(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], s)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_ca = s(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function s(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = s(e),
            _ = {
                name: 'ca',
                weekdays:
                    'Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte'.split(
                        '_',
                    ),
                weekdaysShort: 'Dg._Dl._Dt._Dc._Dj._Dv._Ds.'.split('_'),
                weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
                months: 'Gener_Febrer_Mar\xE7_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre'.split(
                    '_',
                ),
                monthsShort:
                    'Gen._Febr._Mar\xE7_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.'.split(
                        '_',
                    ),
                weekStart: 1,
                formats: {
                    LT: 'H:mm',
                    LTS: 'H:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM [de] YYYY',
                    LLL: 'D MMMM [de] YYYY [a les] H:mm',
                    LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
                    ll: 'D MMM YYYY',
                    lll: 'D MMM YYYY, H:mm',
                    llll: 'ddd D MMM YYYY, H:mm',
                },
                relativeTime: {
                    future: "d'aqu\xED %s",
                    past: 'fa %s',
                    s: 'uns segons',
                    m: 'un minut',
                    mm: '%d minuts',
                    h: 'una hora',
                    hh: '%d hores',
                    d: 'un dia',
                    dd: '%d dies',
                    M: 'un mes',
                    MM: '%d mesos',
                    y: 'un any',
                    yy: '%d anys',
                },
                ordinal: function (e2) {
                    return (
                        '' +
                        e2 +
                        (e2 === 1 || e2 === 3
                            ? 'r'
                            : e2 === 2
                            ? 'n'
                            : e2 === 4
                            ? 't'
                            : '\xE8')
                    )
                },
            }
        return t.default.locale(_, null, !0), _
    })
})
var require_cs = __commonJS((exports, module) => {
    ;(function (e, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], n)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_cs = n(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function n(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = n(e)
        function s(e2) {
            return e2 > 1 && e2 < 5 && ~~(e2 / 10) != 1
        }
        function r(e2, n2, t2, r2) {
            var d2 = e2 + ' '
            switch (t2) {
                case 's':
                    return n2 || r2 ? 'p\xE1r sekund' : 'p\xE1r sekundami'
                case 'm':
                    return n2 ? 'minuta' : r2 ? 'minutu' : 'minutou'
                case 'mm':
                    return n2 || r2
                        ? d2 + (s(e2) ? 'minuty' : 'minut')
                        : d2 + 'minutami'
                case 'h':
                    return n2 ? 'hodina' : r2 ? 'hodinu' : 'hodinou'
                case 'hh':
                    return n2 || r2
                        ? d2 + (s(e2) ? 'hodiny' : 'hodin')
                        : d2 + 'hodinami'
                case 'd':
                    return n2 || r2 ? 'den' : 'dnem'
                case 'dd':
                    return n2 || r2
                        ? d2 + (s(e2) ? 'dny' : 'dn\xED')
                        : d2 + 'dny'
                case 'M':
                    return n2 || r2 ? 'm\u011Bs\xEDc' : 'm\u011Bs\xEDcem'
                case 'MM':
                    return n2 || r2
                        ? d2 +
                              (s(e2) ? 'm\u011Bs\xEDce' : 'm\u011Bs\xEDc\u016F')
                        : d2 + 'm\u011Bs\xEDci'
                case 'y':
                    return n2 || r2 ? 'rok' : 'rokem'
                case 'yy':
                    return n2 || r2
                        ? d2 + (s(e2) ? 'roky' : 'let')
                        : d2 + 'lety'
            }
        }
        var d = {
            name: 'cs',
            weekdays:
                'ned\u011Ble_pond\u011Bl\xED_\xFAter\xFD_st\u0159eda_\u010Dtvrtek_p\xE1tek_sobota'.split(
                    '_',
                ),
            weekdaysShort: 'ne_po_\xFAt_st_\u010Dt_p\xE1_so'.split('_'),
            weekdaysMin: 'ne_po_\xFAt_st_\u010Dt_p\xE1_so'.split('_'),
            months: 'leden_\xFAnor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xE1\u0159\xED_\u0159\xEDjen_listopad_prosinec'.split(
                '_',
            ),
            monthsShort:
                'led_\xFAno_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xE1\u0159_\u0159\xEDj_lis_pro'.split(
                    '_',
                ),
            weekStart: 1,
            yearStart: 4,
            ordinal: function (e2) {
                return e2 + '.'
            },
            formats: {
                LT: 'H:mm',
                LTS: 'H:mm:ss',
                L: 'DD.MM.YYYY',
                LL: 'D. MMMM YYYY',
                LLL: 'D. MMMM YYYY H:mm',
                LLLL: 'dddd D. MMMM YYYY H:mm',
                l: 'D. M. YYYY',
            },
            relativeTime: {
                future: 'za %s',
                past: 'p\u0159ed %s',
                s: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r,
            },
        }
        return t.default.locale(d, null, !0), d
    })
})
var require_da = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_da = t(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function t(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var d = t(e),
            n = {
                name: 'da',
                weekdays:
                    's\xF8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xF8rdag'.split(
                        '_',
                    ),
                weekdaysShort:
                    's\xF8n._man._tirs._ons._tors._fre._l\xF8r.'.split('_'),
                weekdaysMin: 's\xF8._ma._ti._on._to._fr._l\xF8.'.split('_'),
                months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
                    '_',
                ),
                monthsShort:
                    'jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.'.split(
                        '_',
                    ),
                weekStart: 1,
                ordinal: function (e2) {
                    return e2 + '.'
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D. MMMM YYYY',
                    LLL: 'D. MMMM YYYY HH:mm',
                    LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
                },
                relativeTime: {
                    future: 'om %s',
                    past: '%s siden',
                    s: 'f\xE5 sekunder',
                    m: 'et minut',
                    mm: '%d minutter',
                    h: 'en time',
                    hh: '%d timer',
                    d: 'en dag',
                    dd: '%d dage',
                    M: 'en m\xE5ned',
                    MM: '%d m\xE5neder',
                    y: 'et \xE5r',
                    yy: '%d \xE5r',
                },
            }
        return d.default.locale(n, null, !0), n
    })
})
var require_de = __commonJS((exports, module) => {
    ;(function (e, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], n)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_de = n(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function n(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = n(e),
            a = {
                s: 'ein paar Sekunden',
                m: ['eine Minute', 'einer Minute'],
                mm: '%d Minuten',
                h: ['eine Stunde', 'einer Stunde'],
                hh: '%d Stunden',
                d: ['ein Tag', 'einem Tag'],
                dd: ['%d Tage', '%d Tagen'],
                M: ['ein Monat', 'einem Monat'],
                MM: ['%d Monate', '%d Monaten'],
                y: ['ein Jahr', 'einem Jahr'],
                yy: ['%d Jahre', '%d Jahren'],
            }
        function i(e2, n2, t2) {
            var i2 = a[t2]
            return (
                Array.isArray(i2) && (i2 = i2[n2 ? 0 : 1]), i2.replace('%d', e2)
            )
        }
        var r = {
            name: 'de',
            weekdays:
                'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
                    '_',
                ),
            weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
            weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
            months: 'Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
                '_',
            ),
            monthsShort:
                'Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split(
                    '_',
                ),
            ordinal: function (e2) {
                return e2 + '.'
            },
            weekStart: 1,
            yearStart: 4,
            formats: {
                LTS: 'HH:mm:ss',
                LT: 'HH:mm',
                L: 'DD.MM.YYYY',
                LL: 'D. MMMM YYYY',
                LLL: 'D. MMMM YYYY HH:mm',
                LLLL: 'dddd, D. MMMM YYYY HH:mm',
            },
            relativeTime: {
                future: 'in %s',
                past: 'vor %s',
                s: i,
                m: i,
                mm: i,
                h: i,
                hh: i,
                d: i,
                dd: i,
                M: i,
                MM: i,
                y: i,
                yy: i,
            },
        }
        return t.default.locale(r, null, !0), r
    })
})
var require_en = __commonJS((exports, module) => {
    ;(function (e, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n())
            : typeof define == 'function' && define.amd
            ? define(n)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_en = n())
    })(exports, function () {
        'use strict'
        return {
            name: 'en',
            weekdays:
                'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                    '_',
                ),
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_',
            ),
            ordinal: function (e) {
                var n = ['th', 'st', 'nd', 'rd'],
                    t = e % 100
                return '[' + e + (n[(t - 20) % 10] || n[t] || n[0]) + ']'
            },
        }
    })
})
var require_es = __commonJS((exports, module) => {
    ;(function (e, o) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = o(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], o)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_es = o(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function o(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var s = o(e),
            d = {
                name: 'es',
                monthsShort:
                    'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split(
                        '_',
                    ),
                weekdays:
                    'domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado'.split(
                        '_',
                    ),
                weekdaysShort: 'dom._lun._mar._mi\xE9._jue._vie._s\xE1b.'.split(
                    '_',
                ),
                weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xE1'.split('_'),
                months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
                    '_',
                ),
                weekStart: 1,
                formats: {
                    LT: 'H:mm',
                    LTS: 'H:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D [de] MMMM [de] YYYY',
                    LLL: 'D [de] MMMM [de] YYYY H:mm',
                    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
                },
                relativeTime: {
                    future: 'en %s',
                    past: 'hace %s',
                    s: 'unos segundos',
                    m: 'un minuto',
                    mm: '%d minutos',
                    h: 'una hora',
                    hh: '%d horas',
                    d: 'un d\xEDa',
                    dd: '%d d\xEDas',
                    M: 'un mes',
                    MM: '%d meses',
                    y: 'un a\xF1o',
                    yy: '%d a\xF1os',
                },
                ordinal: function (e2) {
                    return e2 + '\xBA'
                },
            }
        return s.default.locale(d, null, !0), d
    })
})
var require_fa = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_fa = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'fa',
                weekdays:
                    '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u06CC\u06A9\u200C_\u062F\u0648_\u0633\u0647\u200C_\u0686\u0647_\u067E\u0646_\u062C\u0645_\u0634\u0646'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634'.split(
                        '_',
                    ),
                weekStart: 6,
                months: '\u0641\u0631\u0648\u0631\u062F\u06CC\u0646_\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A_\u062E\u0631\u062F\u0627\u062F_\u062A\u06CC\u0631_\u0645\u0631\u062F\u0627\u062F_\u0634\u0647\u0631\u06CC\u0648\u0631_\u0645\u0647\u0631_\u0622\u0628\u0627\u0646_\u0622\u0630\u0631_\u062F\u06CC_\u0628\u0647\u0645\u0646_\u0627\u0633\u0641\u0646\u062F'.split(
                    '_',
                ),
                monthsShort:
                    '\u0641\u0631\u0648_\u0627\u0631\u062F_\u062E\u0631\u062F_\u062A\u06CC\u0631_\u0645\u0631\u062F_\u0634\u0647\u0631_\u0645\u0647\u0631_\u0622\u0628\u0627_\u0622\u0630\u0631_\u062F\u06CC_\u0628\u0647\u0645_\u0627\u0633\u0641'.split(
                        '_',
                    ),
                ordinal: function (_2) {
                    return _2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd, D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: '\u062F\u0631 %s',
                    past: '%s \u0642\u0628\u0644',
                    s: '\u0686\u0646\u062F \u062B\u0627\u0646\u06CC\u0647',
                    m: '\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647',
                    mm: '%d \u062F\u0642\u06CC\u0642\u0647',
                    h: '\u06CC\u06A9 \u0633\u0627\u0639\u062A',
                    hh: '%d \u0633\u0627\u0639\u062A',
                    d: '\u06CC\u06A9 \u0631\u0648\u0632',
                    dd: '%d \u0631\u0648\u0632',
                    M: '\u06CC\u06A9 \u0645\u0627\u0647',
                    MM: '%d \u0645\u0627\u0647',
                    y: '\u06CC\u06A9 \u0633\u0627\u0644',
                    yy: '%d \u0633\u0627\u0644',
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_fi = __commonJS((exports, module) => {
    ;(function (u, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((u =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : u || self).dayjs_locale_fi = e(u.dayjs))
    })(exports, function (u) {
        'use strict'
        function e(u2) {
            return u2 && typeof u2 == 'object' && 'default' in u2
                ? u2
                : { default: u2 }
        }
        var t = e(u)
        function n(u2, e2, t2, n2) {
            var i2 = {
                    s: 'muutama sekunti',
                    m: 'minuutti',
                    mm: '%d minuuttia',
                    h: 'tunti',
                    hh: '%d tuntia',
                    d: 'p\xE4iv\xE4',
                    dd: '%d p\xE4iv\xE4\xE4',
                    M: 'kuukausi',
                    MM: '%d kuukautta',
                    y: 'vuosi',
                    yy: '%d vuotta',
                    numbers:
                        'nolla_yksi_kaksi_kolme_nelj\xE4_viisi_kuusi_seitsem\xE4n_kahdeksan_yhdeks\xE4n'.split(
                            '_',
                        ),
                },
                a = {
                    s: 'muutaman sekunnin',
                    m: 'minuutin',
                    mm: '%d minuutin',
                    h: 'tunnin',
                    hh: '%d tunnin',
                    d: 'p\xE4iv\xE4n',
                    dd: '%d p\xE4iv\xE4n',
                    M: 'kuukauden',
                    MM: '%d kuukauden',
                    y: 'vuoden',
                    yy: '%d vuoden',
                    numbers:
                        'nollan_yhden_kahden_kolmen_nelj\xE4n_viiden_kuuden_seitsem\xE4n_kahdeksan_yhdeks\xE4n'.split(
                            '_',
                        ),
                },
                s = n2 && !e2 ? a : i2,
                _ = s[t2]
            return u2 < 10
                ? _.replace('%d', s.numbers[u2])
                : _.replace('%d', u2)
        }
        var i = {
            name: 'fi',
            weekdays:
                'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
                    '_',
                ),
            weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
            weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
            months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xE4kuu_hein\xE4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
                '_',
            ),
            monthsShort:
                'tammi_helmi_maalis_huhti_touko_kes\xE4_hein\xE4_elo_syys_loka_marras_joulu'.split(
                    '_',
                ),
            ordinal: function (u2) {
                return u2 + '.'
            },
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
                future: '%s p\xE4\xE4st\xE4',
                past: '%s sitten',
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n,
            },
            formats: {
                LT: 'HH.mm',
                LTS: 'HH.mm.ss',
                L: 'DD.MM.YYYY',
                LL: 'D. MMMM[ta] YYYY',
                LLL: 'D. MMMM[ta] YYYY, [klo] HH.mm',
                LLLL: 'dddd, D. MMMM[ta] YYYY, [klo] HH.mm',
                l: 'D.M.YYYY',
                ll: 'D. MMM YYYY',
                lll: 'D. MMM YYYY, [klo] HH.mm',
                llll: 'ddd, D. MMM YYYY, [klo] HH.mm',
            },
        }
        return t.default.locale(i, null, !0), i
    })
})
var require_fr = __commonJS((exports, module) => {
    ;(function (e, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], n)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_fr = n(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function n(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = n(e),
            i = {
                name: 'fr',
                weekdays:
                    'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
                        '_',
                    ),
                weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
                weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
                months: 'janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre'.split(
                    '_',
                ),
                monthsShort:
                    'janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.'.split(
                        '_',
                    ),
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: 'dans %s',
                    past: 'il y a %s',
                    s: 'quelques secondes',
                    m: 'une minute',
                    mm: '%d minutes',
                    h: 'une heure',
                    hh: '%d heures',
                    d: 'un jour',
                    dd: '%d jours',
                    M: 'un mois',
                    MM: '%d mois',
                    y: 'un an',
                    yy: '%d ans',
                },
                ordinal: function (e2) {
                    return '' + e2 + (e2 === 1 ? 'er' : '')
                },
            }
        return t.default.locale(i, null, !0), i
    })
})
var require_hi = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_hi = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'hi',
                weekdays:
                    '\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0932\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930'.split(
                        '_',
                    ),
                months: '\u091C\u0928\u0935\u0930\u0940_\u092B\u093C\u0930\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948\u0932_\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0938\u094D\u0924_\u0938\u093F\u0924\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u0942\u092C\u0930_\u0928\u0935\u092E\u094D\u092C\u0930_\u0926\u093F\u0938\u092E\u094D\u092C\u0930'.split(
                    '_',
                ),
                weekdaysShort:
                    '\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0932_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F'.split(
                        '_',
                    ),
                monthsShort:
                    '\u091C\u0928._\u092B\u093C\u0930._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u0948._\u092E\u0908_\u091C\u0942\u0928_\u091C\u0941\u0932._\u0905\u0917._\u0938\u093F\u0924._\u0905\u0915\u094D\u091F\u0942._\u0928\u0935._\u0926\u093F\u0938.'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936'.split(
                        '_',
                    ),
                ordinal: function (_2) {
                    return _2
                },
                formats: {
                    LT: 'A h:mm \u092C\u091C\u0947',
                    LTS: 'A h:mm:ss \u092C\u091C\u0947',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY, A h:mm \u092C\u091C\u0947',
                    LLLL: 'dddd, D MMMM YYYY, A h:mm \u092C\u091C\u0947',
                },
                relativeTime: {
                    future: '%s \u092E\u0947\u0902',
                    past: '%s \u092A\u0939\u0932\u0947',
                    s: '\u0915\u0941\u091B \u0939\u0940 \u0915\u094D\u0937\u0923',
                    m: '\u090F\u0915 \u092E\u093F\u0928\u091F',
                    mm: '%d \u092E\u093F\u0928\u091F',
                    h: '\u090F\u0915 \u0918\u0902\u091F\u093E',
                    hh: '%d \u0918\u0902\u091F\u0947',
                    d: '\u090F\u0915 \u0926\u093F\u0928',
                    dd: '%d \u0926\u093F\u0928',
                    M: '\u090F\u0915 \u092E\u0939\u0940\u0928\u0947',
                    MM: '%d \u092E\u0939\u0940\u0928\u0947',
                    y: '\u090F\u0915 \u0935\u0930\u094D\u0937',
                    yy: '%d \u0935\u0930\u094D\u0937',
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_hu = __commonJS((exports, module) => {
    ;(function (e, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], n)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_hu = n(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function n(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = n(e),
            r = {
                name: 'hu',
                weekdays:
                    'vas\xE1rnap_h\xE9tf\u0151_kedd_szerda_cs\xFCt\xF6rt\xF6k_p\xE9ntek_szombat'.split(
                        '_',
                    ),
                weekdaysShort: 'vas_h\xE9t_kedd_sze_cs\xFCt_p\xE9n_szo'.split(
                    '_',
                ),
                weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
                months: 'janu\xE1r_febru\xE1r_m\xE1rcius_\xE1prilis_m\xE1jus_j\xFAnius_j\xFAlius_augusztus_szeptember_okt\xF3ber_november_december'.split(
                    '_',
                ),
                monthsShort:
                    'jan_feb_m\xE1rc_\xE1pr_m\xE1j_j\xFAn_j\xFAl_aug_szept_okt_nov_dec'.split(
                        '_',
                    ),
                ordinal: function (e2) {
                    return e2 + '.'
                },
                weekStart: 1,
                relativeTime: {
                    future: '%s m\xFAlva',
                    past: '%s',
                    s: function (e2, n2, t2, r2) {
                        return (
                            'n\xE9h\xE1ny m\xE1sodperc' + (r2 || n2 ? '' : 'e')
                        )
                    },
                    m: function (e2, n2, t2, r2) {
                        return 'egy perc' + (r2 || n2 ? '' : 'e')
                    },
                    mm: function (e2, n2, t2, r2) {
                        return e2 + ' perc' + (r2 || n2 ? '' : 'e')
                    },
                    h: function (e2, n2, t2, r2) {
                        return 'egy ' + (r2 || n2 ? '\xF3ra' : '\xF3r\xE1ja')
                    },
                    hh: function (e2, n2, t2, r2) {
                        return e2 + ' ' + (r2 || n2 ? '\xF3ra' : '\xF3r\xE1ja')
                    },
                    d: function (e2, n2, t2, r2) {
                        return 'egy ' + (r2 || n2 ? 'nap' : 'napja')
                    },
                    dd: function (e2, n2, t2, r2) {
                        return e2 + ' ' + (r2 || n2 ? 'nap' : 'napja')
                    },
                    M: function (e2, n2, t2, r2) {
                        return 'egy ' + (r2 || n2 ? 'h\xF3nap' : 'h\xF3napja')
                    },
                    MM: function (e2, n2, t2, r2) {
                        return e2 + ' ' + (r2 || n2 ? 'h\xF3nap' : 'h\xF3napja')
                    },
                    y: function (e2, n2, t2, r2) {
                        return 'egy ' + (r2 || n2 ? '\xE9v' : '\xE9ve')
                    },
                    yy: function (e2, n2, t2, r2) {
                        return e2 + ' ' + (r2 || n2 ? '\xE9v' : '\xE9ve')
                    },
                },
                formats: {
                    LT: 'H:mm',
                    LTS: 'H:mm:ss',
                    L: 'YYYY.MM.DD.',
                    LL: 'YYYY. MMMM D.',
                    LLL: 'YYYY. MMMM D. H:mm',
                    LLLL: 'YYYY. MMMM D., dddd H:mm',
                },
            }
        return t.default.locale(r, null, !0), r
    })
})
var require_hy_am = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_hy_am = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'hy-am',
                weekdays:
                    '\u056F\u056B\u0580\u0561\u056F\u056B_\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B_\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569'.split(
                        '_',
                    ),
                months: '\u0570\u0578\u0582\u0576\u057E\u0561\u0580\u056B_\u0583\u0565\u057F\u0580\u057E\u0561\u0580\u056B_\u0574\u0561\u0580\u057F\u056B_\u0561\u057A\u0580\u056B\u056C\u056B_\u0574\u0561\u0575\u056B\u057D\u056B_\u0570\u0578\u0582\u0576\u056B\u057D\u056B_\u0570\u0578\u0582\u056C\u056B\u057D\u056B_\u0585\u0563\u0578\u057D\u057F\u0578\u057D\u056B_\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056B_\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580\u056B'.split(
                    '_',
                ),
                weekStart: 1,
                weekdaysShort:
                    '\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569'.split(
                        '_',
                    ),
                monthsShort:
                    '\u0570\u0576\u057E_\u0583\u057F\u0580_\u0574\u0580\u057F_\u0561\u057A\u0580_\u0574\u0575\u057D_\u0570\u0576\u057D_\u0570\u056C\u057D_\u0585\u0563\u057D_\u057D\u057A\u057F_\u0570\u056F\u057F_\u0576\u0574\u0562_\u0564\u056F\u057F'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u056F\u0580\u056F_\u0565\u0580\u056F_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569'.split(
                        '_',
                    ),
                ordinal: function (_2) {
                    return _2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D MMMM YYYY \u0569.',
                    LLL: 'D MMMM YYYY \u0569., HH:mm',
                    LLLL: 'dddd, D MMMM YYYY \u0569., HH:mm',
                },
                relativeTime: {
                    future: '%s \u0570\u0565\u057F\u0578',
                    past: '%s \u0561\u057C\u0561\u057B',
                    s: '\u0574\u056B \u0584\u0561\u0576\u056B \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576',
                    m: '\u0580\u0578\u057A\u0565',
                    mm: '%d \u0580\u0578\u057A\u0565',
                    h: '\u056A\u0561\u0574',
                    hh: '%d \u056A\u0561\u0574',
                    d: '\u0585\u0580',
                    dd: '%d \u0585\u0580',
                    M: '\u0561\u0574\u056B\u057D',
                    MM: '%d \u0561\u0574\u056B\u057D',
                    y: '\u057F\u0561\u0580\u056B',
                    yy: '%d \u057F\u0561\u0580\u056B',
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_id = __commonJS((exports, module) => {
    ;(function (e, a) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = a(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], a)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_id = a(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function a(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = a(e),
            _ = {
                name: 'id',
                weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split(
                    '_',
                ),
                months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
                    '_',
                ),
                weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
                monthsShort:
                    'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split(
                        '_',
                    ),
                weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
                weekStart: 1,
                formats: {
                    LT: 'HH.mm',
                    LTS: 'HH.mm.ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY [pukul] HH.mm',
                    LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
                },
                relativeTime: {
                    future: 'dalam %s',
                    past: '%s yang lalu',
                    s: 'beberapa detik',
                    m: 'semenit',
                    mm: '%d menit',
                    h: 'sejam',
                    hh: '%d jam',
                    d: 'sehari',
                    dd: '%d hari',
                    M: 'sebulan',
                    MM: '%d bulan',
                    y: 'setahun',
                    yy: '%d tahun',
                },
                ordinal: function (e2) {
                    return e2 + '.'
                },
            }
        return t.default.locale(_, null, !0), _
    })
})
var require_it = __commonJS((exports, module) => {
    ;(function (e, o) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = o(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], o)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_it = o(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function o(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = o(e),
            n = {
                name: 'it',
                weekdays:
                    'domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato'.split(
                        '_',
                    ),
                weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
                weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
                months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
                    '_',
                ),
                weekStart: 1,
                monthsShort:
                    'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split(
                        '_',
                    ),
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: 'tra %s',
                    past: '%s fa',
                    s: 'qualche secondo',
                    m: 'un minuto',
                    mm: '%d minuti',
                    h: "un' ora",
                    hh: '%d ore',
                    d: 'un giorno',
                    dd: '%d giorni',
                    M: 'un mese',
                    MM: '%d mesi',
                    y: 'un anno',
                    yy: '%d anni',
                },
                ordinal: function (e2) {
                    return e2 + '\xBA'
                },
            }
        return t.default.locale(n, null, !0), n
    })
})
var require_ja = __commonJS((exports, module) => {
    ;(function (e, _) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = _(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], _)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_ja = _(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function _(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = _(e),
            d = {
                name: 'ja',
                weekdays:
                    '\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F'.split(
                        '_',
                    ),
                months: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                    '_',
                ),
                monthsShort:
                    '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                        '_',
                    ),
                ordinal: function (e2) {
                    return e2 + '\u65E5'
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'YYYY/MM/DD',
                    LL: 'YYYY\u5E74M\u6708D\u65E5',
                    LLL: 'YYYY\u5E74M\u6708D\u65E5 HH:mm',
                    LLLL: 'YYYY\u5E74M\u6708D\u65E5 dddd HH:mm',
                    l: 'YYYY/MM/DD',
                    ll: 'YYYY\u5E74M\u6708D\u65E5',
                    lll: 'YYYY\u5E74M\u6708D\u65E5 HH:mm',
                    llll: 'YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm',
                },
                meridiem: function (e2) {
                    return e2 < 12 ? '\u5348\u524D' : '\u5348\u5F8C'
                },
                relativeTime: {
                    future: '%s\u5F8C',
                    past: '%s\u524D',
                    s: '\u6570\u79D2',
                    m: '1\u5206',
                    mm: '%d\u5206',
                    h: '1\u6642\u9593',
                    hh: '%d\u6642\u9593',
                    d: '1\u65E5',
                    dd: '%d\u65E5',
                    M: '1\u30F6\u6708',
                    MM: '%d\u30F6\u6708',
                    y: '1\u5E74',
                    yy: '%d\u5E74',
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_ka = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_ka = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'ka',
                weekdays:
                    '\u10D9\u10D5\u10D8\u10E0\u10D0_\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8_\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8_\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u10D9\u10D5\u10D8_\u10DD\u10E0\u10E8_\u10E1\u10D0\u10DB_\u10DD\u10D7\u10EE_\u10EE\u10E3\u10D7_\u10DE\u10D0\u10E0_\u10E8\u10D0\u10D1'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u10D9\u10D5_\u10DD\u10E0_\u10E1\u10D0_\u10DD\u10D7_\u10EE\u10E3_\u10DE\u10D0_\u10E8\u10D0'.split(
                        '_',
                    ),
                months: '\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8_\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8_\u10DB\u10D0\u10E0\u10E2\u10D8_\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8_\u10DB\u10D0\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8_\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8_\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD_\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8_\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8_\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8'.split(
                    '_',
                ),
                monthsShort:
                    '\u10D8\u10D0\u10DC_\u10D7\u10D4\u10D1_\u10DB\u10D0\u10E0_\u10D0\u10DE\u10E0_\u10DB\u10D0\u10D8_\u10D8\u10D5\u10DC_\u10D8\u10D5\u10DA_\u10D0\u10D2\u10D5_\u10E1\u10D4\u10E5_\u10DD\u10E5\u10E2_\u10DC\u10DD\u10D4_\u10D3\u10D4\u10D9'.split(
                        '_',
                    ),
                weekStart: 1,
                formats: {
                    LT: 'h:mm A',
                    LTS: 'h:mm:ss A',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY h:mm A',
                    LLLL: 'dddd, D MMMM YYYY h:mm A',
                },
                relativeTime: {
                    future: '%s \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2',
                    past: '%s \u10EC\u10D8\u10DC',
                    s: '\u10EC\u10D0\u10DB\u10D8',
                    m: '\u10EC\u10E3\u10D7\u10D8',
                    mm: '%d \u10EC\u10E3\u10D7\u10D8',
                    h: '\u10E1\u10D0\u10D0\u10D7\u10D8',
                    hh: '%d \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1',
                    d: '\u10D3\u10E6\u10D4\u10E1',
                    dd: '%d \u10D3\u10E6\u10D8\u10E1 \u10D2\u10D0\u10DC\u10DB\u10D0\u10D5\u10DA\u10DD\u10D1\u10D0\u10E8\u10D8',
                    M: '\u10D7\u10D5\u10D8\u10E1',
                    MM: '%d \u10D7\u10D5\u10D8\u10E1',
                    y: '\u10EC\u10D4\u10DA\u10D8',
                    yy: '%d \u10EC\u10DA\u10D8\u10E1',
                },
                ordinal: function (_2) {
                    return _2
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_ku = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? t(exports, require_dayjs_min())
            : typeof define == 'function' && define.amd
            ? define(['exports', 'dayjs'], t)
            : t(
                  ((e =
                      typeof globalThis != 'undefined'
                          ? globalThis
                          : e || self).dayjs_locale_ku = {}),
                  e.dayjs,
              )
    })(exports, function (e, t) {
        'use strict'
        function n(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var r = n(t),
            d = {
                1: '\u0661',
                2: '\u0662',
                3: '\u0663',
                4: '\u0664',
                5: '\u0665',
                6: '\u0666',
                7: '\u0667',
                8: '\u0668',
                9: '\u0669',
                0: '\u0660',
            },
            o = {
                '\u0661': '1',
                '\u0662': '2',
                '\u0663': '3',
                '\u0664': '4',
                '\u0665': '5',
                '\u0666': '6',
                '\u0667': '7',
                '\u0668': '8',
                '\u0669': '9',
                '\u0660': '0',
            },
            u = [
                '\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645',
                '\u0634\u0648\u0628\u0627\u062A',
                '\u0626\u0627\u062F\u0627\u0631',
                '\u0646\u06CC\u0633\u0627\u0646',
                '\u0626\u0627\u06CC\u0627\u0631',
                '\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646',
                '\u062A\u06D5\u0645\u0645\u0648\u0648\u0632',
                '\u0626\u0627\u0628',
                '\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644',
                '\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645',
                '\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645',
                '\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645',
            ],
            i = {
                name: 'ku',
                months: u,
                monthsShort: u,
                weekdays:
                    '\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5_\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5_\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5_\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5_\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5_\u0647\u06D5\u06CC\u0646\u06CC_\u0634\u06D5\u0645\u0645\u06D5'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u06CC\u06D5\u06A9\u0634\u06D5\u0645_\u062F\u0648\u0648\u0634\u06D5\u0645_\u0633\u06CE\u0634\u06D5\u0645_\u0686\u0648\u0627\u0631\u0634\u06D5\u0645_\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645_\u0647\u06D5\u06CC\u0646\u06CC_\u0634\u06D5\u0645\u0645\u06D5'.split(
                        '_',
                    ),
                weekStart: 6,
                weekdaysMin:
                    '\u06CC_\u062F_\u0633_\u0686_\u067E_\u0647\u0640_\u0634'.split(
                        '_',
                    ),
                preparse: function (e2) {
                    return e2
                        .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e3) {
                            return o[e3]
                        })
                        .replace(/،/g, ',')
                },
                postformat: function (e2) {
                    return e2
                        .replace(/\d/g, function (e3) {
                            return d[e3]
                        })
                        .replace(/,/g, '\u060C')
                },
                ordinal: function (e2) {
                    return e2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd, D MMMM YYYY HH:mm',
                },
                meridiem: function (e2) {
                    return e2 < 12 ? '\u067E.\u0646' : '\u062F.\u0646'
                },
                relativeTime: {
                    future: '\u0644\u06D5 %s',
                    past: '\u0644\u06D5\u0645\u06D5\u0648\u067E\u06CE\u0634 %s',
                    s: '\u0686\u06D5\u0646\u062F \u0686\u0631\u06A9\u06D5\u06CC\u06D5\u06A9',
                    m: '\u06CC\u06D5\u06A9 \u062E\u0648\u0644\u06D5\u06A9',
                    mm: '%d \u062E\u0648\u0644\u06D5\u06A9',
                    h: '\u06CC\u06D5\u06A9 \u06A9\u0627\u062A\u0698\u0645\u06CE\u0631',
                    hh: '%d \u06A9\u0627\u062A\u0698\u0645\u06CE\u0631',
                    d: '\u06CC\u06D5\u06A9 \u0695\u06C6\u0698',
                    dd: '%d \u0695\u06C6\u0698',
                    M: '\u06CC\u06D5\u06A9 \u0645\u0627\u0646\u06AF',
                    MM: '%d \u0645\u0627\u0646\u06AF',
                    y: '\u06CC\u06D5\u06A9 \u0633\u0627\u06B5',
                    yy: '%d \u0633\u0627\u06B5',
                },
            }
        r.default.locale(i, null, !0),
            (e.default = i),
            (e.englishToArabicNumbersMap = d),
            Object.defineProperty(e, '__esModule', { value: !0 })
    })
})
var require_ms = __commonJS((exports, module) => {
    ;(function (e, a) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = a(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], a)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_ms = a(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function a(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = a(e),
            s = {
                name: 'ms',
                weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split(
                    '_',
                ),
                weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
                weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
                months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
                    '_',
                ),
                monthsShort:
                    'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split(
                        '_',
                    ),
                weekStart: 1,
                formats: {
                    LT: 'HH.mm',
                    LTS: 'HH.mm.ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH.mm',
                    LLLL: 'dddd, D MMMM YYYY HH.mm',
                },
                relativeTime: {
                    future: 'dalam %s',
                    past: '%s yang lepas',
                    s: 'beberapa saat',
                    m: 'seminit',
                    mm: '%d minit',
                    h: 'sejam',
                    hh: '%d jam',
                    d: 'sehari',
                    dd: '%d hari',
                    M: 'sebulan',
                    MM: '%d bulan',
                    y: 'setahun',
                    yy: '%d tahun',
                },
                ordinal: function (e2) {
                    return e2 + '.'
                },
            }
        return t.default.locale(s, null, !0), s
    })
})
var require_my = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_my = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'my',
                weekdays:
                    '\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031_\u1010\u1014\u1004\u103A\u1039\u101C\u102C_\u1021\u1004\u103A\u1039\u1002\u102B_\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038_\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038_\u101E\u1031\u102C\u1000\u103C\u102C_\u1005\u1014\u1031'.split(
                        '_',
                    ),
                months: '\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E_\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E_\u1019\u1010\u103A_\u1027\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u1007\u1030\u101C\u102D\u102F\u1004\u103A_\u101E\u103C\u1002\u102F\u1010\u103A_\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C_\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C_\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C_\u1012\u102E\u1007\u1004\u103A\u1018\u102C'.split(
                    '_',
                ),
                weekStart: 1,
                weekdaysShort:
                    '\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031'.split(
                        '_',
                    ),
                monthsShort:
                    '\u1007\u1014\u103A_\u1016\u1031_\u1019\u1010\u103A_\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u101C\u102D\u102F\u1004\u103A_\u101E\u103C_\u1005\u1000\u103A_\u1021\u1031\u102C\u1000\u103A_\u1014\u102D\u102F_\u1012\u102E'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031'.split(
                        '_',
                    ),
                ordinal: function (_2) {
                    return _2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: '\u101C\u102C\u1019\u100A\u103A\u1037 %s \u1019\u103E\u102C',
                    past: '\u101C\u103D\u1014\u103A\u1001\u1032\u1037\u101E\u1031\u102C %s \u1000',
                    s: '\u1005\u1000\u1039\u1000\u1014\u103A.\u1021\u1014\u100A\u103A\u1038\u1004\u101A\u103A',
                    m: '\u1010\u1005\u103A\u1019\u102D\u1014\u1005\u103A',
                    mm: '%d \u1019\u102D\u1014\u1005\u103A',
                    h: '\u1010\u1005\u103A\u1014\u102C\u101B\u102E',
                    hh: '%d \u1014\u102C\u101B\u102E',
                    d: '\u1010\u1005\u103A\u101B\u1000\u103A',
                    dd: '%d \u101B\u1000\u103A',
                    M: '\u1010\u1005\u103A\u101C',
                    MM: '%d \u101C',
                    y: '\u1010\u1005\u103A\u1014\u103E\u1005\u103A',
                    yy: '%d \u1014\u103E\u1005\u103A',
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_nl = __commonJS((exports, module) => {
    ;(function (e, a) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = a(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], a)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_nl = a(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function a(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var d = a(e),
            n = {
                name: 'nl',
                weekdays:
                    'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
                        '_',
                    ),
                weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
                weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
                months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
                    '_',
                ),
                monthsShort:
                    'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
                        '_',
                    ),
                ordinal: function (e2) {
                    return (
                        '[' +
                        e2 +
                        (e2 === 1 || e2 === 8 || e2 >= 20 ? 'ste' : 'de') +
                        ']'
                    )
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD-MM-YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: 'over %s',
                    past: '%s geleden',
                    s: 'een paar seconden',
                    m: 'een minuut',
                    mm: '%d minuten',
                    h: 'een uur',
                    hh: '%d uur',
                    d: 'een dag',
                    dd: '%d dagen',
                    M: 'een maand',
                    MM: '%d maanden',
                    y: 'een jaar',
                    yy: '%d jaar',
                },
            }
        return d.default.locale(n, null, !0), n
    })
})
var require_pl = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_pl = t(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function t(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var i = t(e)
        function a(e2) {
            return e2 % 10 < 5 && e2 % 10 > 1 && ~~(e2 / 10) % 10 != 1
        }
        function n(e2, t2, i2) {
            var n2 = e2 + ' '
            switch (i2) {
                case 'm':
                    return t2 ? 'minuta' : 'minut\u0119'
                case 'mm':
                    return n2 + (a(e2) ? 'minuty' : 'minut')
                case 'h':
                    return t2 ? 'godzina' : 'godzin\u0119'
                case 'hh':
                    return n2 + (a(e2) ? 'godziny' : 'godzin')
                case 'MM':
                    return n2 + (a(e2) ? 'miesi\u0105ce' : 'miesi\u0119cy')
                case 'yy':
                    return n2 + (a(e2) ? 'lata' : 'lat')
            }
        }
        var r =
                'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia'.split(
                    '_',
                ),
            _ =
                'stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144'.split(
                    '_',
                ),
            s = /D MMMM/,
            d = function (e2, t2) {
                return s.test(t2) ? r[e2.month()] : _[e2.month()]
            }
        ;(d.s = _), (d.f = r)
        var o = {
            name: 'pl',
            weekdays:
                'niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota'.split(
                    '_',
                ),
            weekdaysShort: 'ndz_pon_wt_\u015Br_czw_pt_sob'.split('_'),
            weekdaysMin: 'Nd_Pn_Wt_\u015Ar_Cz_Pt_So'.split('_'),
            months: d,
            monthsShort:
                'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru'.split(
                    '_',
                ),
            ordinal: function (e2) {
                return e2 + '.'
            },
            weekStart: 1,
            yearStart: 4,
            relativeTime: {
                future: 'za %s',
                past: '%s temu',
                s: 'kilka sekund',
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: '1 dzie\u0144',
                dd: '%d dni',
                M: 'miesi\u0105c',
                MM: n,
                y: 'rok',
                yy: n,
            },
            formats: {
                LT: 'HH:mm',
                LTS: 'HH:mm:ss',
                L: 'DD.MM.YYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY HH:mm',
                LLLL: 'dddd, D MMMM YYYY HH:mm',
            },
        }
        return i.default.locale(o, null, !0), o
    })
})
var require_pt_br = __commonJS((exports, module) => {
    ;(function (e, o) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = o(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], o)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_pt_br = o(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function o(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var a = o(e),
            s = {
                name: 'pt-br',
                weekdays:
                    'domingo_segunda-feira_ter\xE7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xE1bado'.split(
                        '_',
                    ),
                weekdaysShort: 'dom_seg_ter_qua_qui_sex_s\xE1b'.split('_'),
                weekdaysMin: 'Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1'.split(
                    '_',
                ),
                months: 'janeiro_fevereiro_mar\xE7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
                    '_',
                ),
                monthsShort:
                    'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split(
                        '_',
                    ),
                ordinal: function (e2) {
                    return e2 + '\xBA'
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D [de] MMMM [de] YYYY',
                    LLL: 'D [de] MMMM [de] YYYY [\xE0s] HH:mm',
                    LLLL: 'dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm',
                },
                relativeTime: {
                    future: 'em %s',
                    past: 'h\xE1 %s',
                    s: 'poucos segundos',
                    m: 'um minuto',
                    mm: '%d minutos',
                    h: 'uma hora',
                    hh: '%d horas',
                    d: 'um dia',
                    dd: '%d dias',
                    M: 'um m\xEAs',
                    MM: '%d meses',
                    y: 'um ano',
                    yy: '%d anos',
                },
            }
        return a.default.locale(s, null, !0), s
    })
})
var require_pt = __commonJS((exports, module) => {
    ;(function (e, a) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = a(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], a)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_pt = a(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function a(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var o = a(e),
            t = {
                name: 'pt',
                weekdays:
                    'domingo_segunda-feira_ter\xE7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xE1bado'.split(
                        '_',
                    ),
                weekdaysShort: 'dom_seg_ter_qua_qui_sex_sab'.split('_'),
                weekdaysMin: 'Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_Sa'.split('_'),
                months: 'janeiro_fevereiro_mar\xE7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
                    '_',
                ),
                monthsShort:
                    'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split(
                        '_',
                    ),
                ordinal: function (e2) {
                    return e2 + '\xBA'
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D [de] MMMM [de] YYYY',
                    LLL: 'D [de] MMMM [de] YYYY [\xE0s] HH:mm',
                    LLLL: 'dddd, D [de] MMMM [de] YYYY [\xE0s] HH:mm',
                },
                relativeTime: {
                    future: 'em %s',
                    past: 'h\xE1 %s',
                    s: 'alguns segundos',
                    m: 'um minuto',
                    mm: '%d minutos',
                    h: 'uma hora',
                    hh: '%d horas',
                    d: 'um dia',
                    dd: '%d dias',
                    M: 'um m\xEAs',
                    MM: '%d meses',
                    y: 'um ano',
                    yy: '%d anos',
                },
            }
        return o.default.locale(t, null, !0), t
    })
})
var require_ro = __commonJS((exports, module) => {
    ;(function (e, i) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = i(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], i)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_ro = i(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function i(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = i(e),
            _ = {
                name: 'ro',
                weekdays:
                    'Duminic\u0103_Luni_Mar\u021Bi_Miercuri_Joi_Vineri_S\xE2mb\u0103t\u0103'.split(
                        '_',
                    ),
                weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_S\xE2m'.split('_'),
                weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_S\xE2'.split('_'),
                months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split(
                    '_',
                ),
                monthsShort:
                    'Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.'.split(
                        '_',
                    ),
                weekStart: 1,
                formats: {
                    LT: 'H:mm',
                    LTS: 'H:mm:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY H:mm',
                    LLLL: 'dddd, D MMMM YYYY H:mm',
                },
                relativeTime: {
                    future: 'peste %s',
                    past: 'acum %s',
                    s: 'c\xE2teva secunde',
                    m: 'un minut',
                    mm: '%d minute',
                    h: 'o or\u0103',
                    hh: '%d ore',
                    d: 'o zi',
                    dd: '%d zile',
                    M: 'o lun\u0103',
                    MM: '%d luni',
                    y: 'un an',
                    yy: '%d ani',
                },
                ordinal: function (e2) {
                    return e2
                },
            }
        return t.default.locale(_, null, !0), _
    })
})
var require_ru = __commonJS((exports, module) => {
    ;(function (_, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_ru = t(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function t(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var e = t(_),
            n =
                '\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F'.split(
                    '_',
                ),
            s =
                '\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C'.split(
                    '_',
                ),
            r =
                '\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.'.split(
                    '_',
                ),
            o =
                '\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.'.split(
                    '_',
                ),
            i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/
        function d(_2, t2, e2) {
            var n2, s2
            return e2 === 'm'
                ? t2
                    ? '\u043C\u0438\u043D\u0443\u0442\u0430'
                    : '\u043C\u0438\u043D\u0443\u0442\u0443'
                : _2 +
                      ' ' +
                      ((n2 = +_2),
                      (s2 = {
                          mm: t2
                              ? '\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442'
                              : '\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442',
                          hh: '\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432',
                          dd: '\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439',
                          MM: '\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432',
                          yy: '\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442',
                      }[e2].split('_')),
                      n2 % 10 == 1 && n2 % 100 != 11
                          ? s2[0]
                          : n2 % 10 >= 2 &&
                            n2 % 10 <= 4 &&
                            (n2 % 100 < 10 || n2 % 100 >= 20)
                          ? s2[1]
                          : s2[2])
        }
        var u = function (_2, t2) {
            return i.test(t2) ? n[_2.month()] : s[_2.month()]
        }
        ;(u.s = s), (u.f = n)
        var a = function (_2, t2) {
            return i.test(t2) ? r[_2.month()] : o[_2.month()]
        }
        ;(a.s = o), (a.f = r)
        var m = {
            name: 'ru',
            weekdays:
                '\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430'.split(
                    '_',
                ),
            weekdaysShort:
                '\u0432\u0441\u043A_\u043F\u043D\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043F\u0442\u043D_\u0441\u0431\u0442'.split(
                    '_',
                ),
            weekdaysMin:
                '\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431'.split(
                    '_',
                ),
            months: u,
            monthsShort: a,
            weekStart: 1,
            yearStart: 4,
            formats: {
                LT: 'H:mm',
                LTS: 'H:mm:ss',
                L: 'DD.MM.YYYY',
                LL: 'D MMMM YYYY \u0433.',
                LLL: 'D MMMM YYYY \u0433., H:mm',
                LLLL: 'dddd, D MMMM YYYY \u0433., H:mm',
            },
            relativeTime: {
                future: '\u0447\u0435\u0440\u0435\u0437 %s',
                past: '%s \u043D\u0430\u0437\u0430\u0434',
                s: '\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434',
                m: d,
                mm: d,
                h: '\u0447\u0430\u0441',
                hh: d,
                d: '\u0434\u0435\u043D\u044C',
                dd: d,
                M: '\u043C\u0435\u0441\u044F\u0446',
                MM: d,
                y: '\u0433\u043E\u0434',
                yy: d,
            },
            ordinal: function (_2) {
                return _2
            },
            meridiem: function (_2) {
                return _2 < 4
                    ? '\u043D\u043E\u0447\u0438'
                    : _2 < 12
                    ? '\u0443\u0442\u0440\u0430'
                    : _2 < 17
                    ? '\u0434\u043D\u044F'
                    : '\u0432\u0435\u0447\u0435\u0440\u0430'
            },
        }
        return e.default.locale(m, null, !0), m
    })
})
var require_sv = __commonJS((exports, module) => {
    ;(function (e, t) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = t(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], t)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_sv = t(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function t(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var a = t(e),
            d = {
                name: 'sv',
                weekdays:
                    's\xF6ndag_m\xE5ndag_tisdag_onsdag_torsdag_fredag_l\xF6rdag'.split(
                        '_',
                    ),
                weekdaysShort: 's\xF6n_m\xE5n_tis_ons_tor_fre_l\xF6r'.split(
                    '_',
                ),
                weekdaysMin: 's\xF6_m\xE5_ti_on_to_fr_l\xF6'.split('_'),
                months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
                    '_',
                ),
                monthsShort:
                    'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split(
                        '_',
                    ),
                weekStart: 1,
                yearStart: 4,
                ordinal: function (e2) {
                    var t2 = e2 % 10
                    return '[' + e2 + (t2 === 1 || t2 === 2 ? 'a' : 'e') + ']'
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'YYYY-MM-DD',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY [kl.] HH:mm',
                    LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
                    lll: 'D MMM YYYY HH:mm',
                    llll: 'ddd D MMM YYYY HH:mm',
                },
                relativeTime: {
                    future: 'om %s',
                    past: 'f\xF6r %s sedan',
                    s: 'n\xE5gra sekunder',
                    m: 'en minut',
                    mm: '%d minuter',
                    h: 'en timme',
                    hh: '%d timmar',
                    d: 'en dag',
                    dd: '%d dagar',
                    M: 'en m\xE5nad',
                    MM: '%d m\xE5nader',
                    y: 'ett \xE5r',
                    yy: '%d \xE5r',
                },
            }
        return a.default.locale(d, null, !0), d
    })
})
var require_tr = __commonJS((exports, module) => {
    ;(function (a, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((a =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : a || self).dayjs_locale_tr = e(a.dayjs))
    })(exports, function (a) {
        'use strict'
        function e(a2) {
            return a2 && typeof a2 == 'object' && 'default' in a2
                ? a2
                : { default: a2 }
        }
        var t = e(a),
            _ = {
                name: 'tr',
                weekdays:
                    'Pazar_Pazartesi_Sal\u0131_\xC7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi'.split(
                        '_',
                    ),
                weekdaysShort: 'Paz_Pts_Sal_\xC7ar_Per_Cum_Cts'.split('_'),
                weekdaysMin: 'Pz_Pt_Sa_\xC7a_Pe_Cu_Ct'.split('_'),
                months: 'Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xFCl_Ekim_Kas\u0131m_Aral\u0131k'.split(
                    '_',
                ),
                monthsShort:
                    'Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara'.split(
                        '_',
                    ),
                weekStart: 1,
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD.MM.YYYY',
                    LL: 'D MMMM YYYY',
                    LLL: 'D MMMM YYYY HH:mm',
                    LLLL: 'dddd, D MMMM YYYY HH:mm',
                },
                relativeTime: {
                    future: '%s sonra',
                    past: '%s \xF6nce',
                    s: 'birka\xE7 saniye',
                    m: 'bir dakika',
                    mm: '%d dakika',
                    h: 'bir saat',
                    hh: '%d saat',
                    d: 'bir g\xFCn',
                    dd: '%d g\xFCn',
                    M: 'bir ay',
                    MM: '%d ay',
                    y: 'bir y\u0131l',
                    yy: '%d y\u0131l',
                },
                ordinal: function (a2) {
                    return a2 + '.'
                },
            }
        return t.default.locale(_, null, !0), _
    })
})
var require_uk = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_uk = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            s =
                '\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F'.split(
                    '_',
                ),
            n =
                '\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C'.split(
                    '_',
                ),
            o = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/
        function d(_2, e2, t2) {
            var s2, n2
            return t2 === 'm'
                ? e2
                    ? '\u0445\u0432\u0438\u043B\u0438\u043D\u0430'
                    : '\u0445\u0432\u0438\u043B\u0438\u043D\u0443'
                : t2 === 'h'
                ? e2
                    ? '\u0433\u043E\u0434\u0438\u043D\u0430'
                    : '\u0433\u043E\u0434\u0438\u043D\u0443'
                : _2 +
                  ' ' +
                  ((s2 = +_2),
                  (n2 = {
                      ss: e2
                          ? '\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434'
                          : '\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434',
                      mm: e2
                          ? '\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D'
                          : '\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D',
                      hh: e2
                          ? '\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D'
                          : '\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D',
                      dd: '\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432',
                      MM: '\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432',
                      yy: '\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432',
                  }[t2].split('_')),
                  s2 % 10 == 1 && s2 % 100 != 11
                      ? n2[0]
                      : s2 % 10 >= 2 &&
                        s2 % 10 <= 4 &&
                        (s2 % 100 < 10 || s2 % 100 >= 20)
                      ? n2[1]
                      : n2[2])
        }
        var i = function (_2, e2) {
            return o.test(e2) ? s[_2.month()] : n[_2.month()]
        }
        ;(i.s = n), (i.f = s)
        var r = {
            name: 'uk',
            weekdays:
                '\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430'.split(
                    '_',
                ),
            weekdaysShort:
                '\u043D\u0434\u043B_\u043F\u043D\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043F\u0442\u043D_\u0441\u0431\u0442'.split(
                    '_',
                ),
            weekdaysMin:
                '\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431'.split(
                    '_',
                ),
            months: i,
            monthsShort:
                '\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434'.split(
                    '_',
                ),
            weekStart: 1,
            relativeTime: {
                future: '\u0437\u0430 %s',
                past: '%s \u0442\u043E\u043C\u0443',
                s: '\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434',
                m: d,
                mm: d,
                h: d,
                hh: d,
                d: '\u0434\u0435\u043D\u044C',
                dd: d,
                M: '\u043C\u0456\u0441\u044F\u0446\u044C',
                MM: d,
                y: '\u0440\u0456\u043A',
                yy: d,
            },
            ordinal: function (_2) {
                return _2
            },
            formats: {
                LT: 'HH:mm',
                LTS: 'HH:mm:ss',
                L: 'DD.MM.YYYY',
                LL: 'D MMMM YYYY \u0440.',
                LLL: 'D MMMM YYYY \u0440., HH:mm',
                LLLL: 'dddd, D MMMM YYYY \u0440., HH:mm',
            },
        }
        return t.default.locale(r, null, !0), r
    })
})
var require_vi = __commonJS((exports, module) => {
    ;(function (t, n) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = n(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], n)
            : ((t =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : t || self).dayjs_locale_vi = n(t.dayjs))
    })(exports, function (t) {
        'use strict'
        function n(t2) {
            return t2 && typeof t2 == 'object' && 'default' in t2
                ? t2
                : { default: t2 }
        }
        var h = n(t),
            _ = {
                name: 'vi',
                weekdays:
                    'ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xE1u_th\u1EE9 b\u1EA3y'.split(
                        '_',
                    ),
                months: 'th\xE1ng 1_th\xE1ng 2_th\xE1ng 3_th\xE1ng 4_th\xE1ng 5_th\xE1ng 6_th\xE1ng 7_th\xE1ng 8_th\xE1ng 9_th\xE1ng 10_th\xE1ng 11_th\xE1ng 12'.split(
                    '_',
                ),
                weekStart: 1,
                weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
                monthsShort:
                    'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split(
                        '_',
                    ),
                weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
                ordinal: function (t2) {
                    return t2
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'DD/MM/YYYY',
                    LL: 'D MMMM [n\u0103m] YYYY',
                    LLL: 'D MMMM [n\u0103m] YYYY HH:mm',
                    LLLL: 'dddd, D MMMM [n\u0103m] YYYY HH:mm',
                    l: 'DD/M/YYYY',
                    ll: 'D MMM YYYY',
                    lll: 'D MMM YYYY HH:mm',
                    llll: 'ddd, D MMM YYYY HH:mm',
                },
                relativeTime: {
                    future: '%s t\u1EDBi',
                    past: '%s tr\u01B0\u1EDBc',
                    s: 'v\xE0i gi\xE2y',
                    m: 'm\u1ED9t ph\xFAt',
                    mm: '%d ph\xFAt',
                    h: 'm\u1ED9t gi\u1EDD',
                    hh: '%d gi\u1EDD',
                    d: 'm\u1ED9t ng\xE0y',
                    dd: '%d ng\xE0y',
                    M: 'm\u1ED9t th\xE1ng',
                    MM: '%d th\xE1ng',
                    y: 'm\u1ED9t n\u0103m',
                    yy: '%d n\u0103m',
                },
            }
        return h.default.locale(_, null, !0), _
    })
})
var require_zh_cn = __commonJS((exports, module) => {
    ;(function (e, _) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = _(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], _)
            : ((e =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : e || self).dayjs_locale_zh_cn = _(e.dayjs))
    })(exports, function (e) {
        'use strict'
        function _(e2) {
            return e2 && typeof e2 == 'object' && 'default' in e2
                ? e2
                : { default: e2 }
        }
        var t = _(e),
            d = {
                name: 'zh-cn',
                weekdays:
                    '\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D'.split(
                        '_',
                    ),
                months: '\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708'.split(
                    '_',
                ),
                monthsShort:
                    '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                        '_',
                    ),
                ordinal: function (e2, _2) {
                    return _2 === 'W' ? e2 + '\u5468' : e2 + '\u65E5'
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'YYYY/MM/DD',
                    LL: 'YYYY\u5E74M\u6708D\u65E5',
                    LLL: 'YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206',
                    LLLL: 'YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206',
                    l: 'YYYY/M/D',
                    ll: 'YYYY\u5E74M\u6708D\u65E5',
                    lll: 'YYYY\u5E74M\u6708D\u65E5 HH:mm',
                    llll: 'YYYY\u5E74M\u6708D\u65E5dddd HH:mm',
                },
                relativeTime: {
                    future: '%s\u5185',
                    past: '%s\u524D',
                    s: '\u51E0\u79D2',
                    m: '1 \u5206\u949F',
                    mm: '%d \u5206\u949F',
                    h: '1 \u5C0F\u65F6',
                    hh: '%d \u5C0F\u65F6',
                    d: '1 \u5929',
                    dd: '%d \u5929',
                    M: '1 \u4E2A\u6708',
                    MM: '%d \u4E2A\u6708',
                    y: '1 \u5E74',
                    yy: '%d \u5E74',
                },
                meridiem: function (e2, _2) {
                    var t2 = 100 * e2 + _2
                    return t2 < 600
                        ? '\u51CC\u6668'
                        : t2 < 900
                        ? '\u65E9\u4E0A'
                        : t2 < 1100
                        ? '\u4E0A\u5348'
                        : t2 < 1300
                        ? '\u4E2D\u5348'
                        : t2 < 1800
                        ? '\u4E0B\u5348'
                        : '\u665A\u4E0A'
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var require_zh_tw = __commonJS((exports, module) => {
    ;(function (_, e) {
        typeof exports == 'object' && typeof module != 'undefined'
            ? (module.exports = e(require_dayjs_min()))
            : typeof define == 'function' && define.amd
            ? define(['dayjs'], e)
            : ((_ =
                  typeof globalThis != 'undefined'
                      ? globalThis
                      : _ || self).dayjs_locale_zh_tw = e(_.dayjs))
    })(exports, function (_) {
        'use strict'
        function e(_2) {
            return _2 && typeof _2 == 'object' && 'default' in _2
                ? _2
                : { default: _2 }
        }
        var t = e(_),
            d = {
                name: 'zh-tw',
                weekdays:
                    '\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D'.split(
                        '_',
                    ),
                weekdaysShort:
                    '\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D'.split(
                        '_',
                    ),
                weekdaysMin:
                    '\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D'.split(
                        '_',
                    ),
                months: '\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708'.split(
                    '_',
                ),
                monthsShort:
                    '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split(
                        '_',
                    ),
                ordinal: function (_2, e2) {
                    return e2 === 'W' ? _2 + '\u9031' : _2 + '\u65E5'
                },
                formats: {
                    LT: 'HH:mm',
                    LTS: 'HH:mm:ss',
                    L: 'YYYY/MM/DD',
                    LL: 'YYYY\u5E74M\u6708D\u65E5',
                    LLL: 'YYYY\u5E74M\u6708D\u65E5 HH:mm',
                    LLLL: 'YYYY\u5E74M\u6708D\u65E5dddd HH:mm',
                    l: 'YYYY/M/D',
                    ll: 'YYYY\u5E74M\u6708D\u65E5',
                    lll: 'YYYY\u5E74M\u6708D\u65E5 HH:mm',
                    llll: 'YYYY\u5E74M\u6708D\u65E5dddd HH:mm',
                },
                relativeTime: {
                    future: '%s\u5167',
                    past: '%s\u524D',
                    s: '\u5E7E\u79D2',
                    m: '1 \u5206\u9418',
                    mm: '%d \u5206\u9418',
                    h: '1 \u5C0F\u6642',
                    hh: '%d \u5C0F\u6642',
                    d: '1 \u5929',
                    dd: '%d \u5929',
                    M: '1 \u500B\u6708',
                    MM: '%d \u500B\u6708',
                    y: '1 \u5E74',
                    yy: '%d \u5E74',
                },
                meridiem: function (_2, e2) {
                    var t2 = 100 * _2 + e2
                    return t2 < 600
                        ? '\u51CC\u6668'
                        : t2 < 900
                        ? '\u65E9\u4E0A'
                        : t2 < 1100
                        ? '\u4E0A\u5348'
                        : t2 < 1300
                        ? '\u4E2D\u5348'
                        : t2 < 1800
                        ? '\u4E0B\u5348'
                        : '\u665A\u4E0A'
                },
            }
        return t.default.locale(d, null, !0), d
    })
})
var SECONDS_A_MINUTE = 60,
    SECONDS_A_HOUR = SECONDS_A_MINUTE * 60,
    SECONDS_A_DAY = SECONDS_A_HOUR * 24,
    SECONDS_A_WEEK = SECONDS_A_DAY * 7,
    MILLISECONDS_A_SECOND = 1e3,
    MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND,
    MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND,
    MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND,
    MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND,
    MS = 'millisecond',
    S = 'second',
    MIN = 'minute',
    H = 'hour',
    D = 'day',
    W = 'week',
    M = 'month',
    Q = 'quarter',
    Y = 'year',
    DATE = 'date',
    FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ',
    INVALID_DATE_STRING = 'Invalid Date',
    REGEX_PARSE =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    REGEX_FORMAT =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
var en_default = {
    name: 'en',
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_',
    ),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
    ),
    ordinal: function (n) {
        var s = ['th', 'st', 'nd', 'rd'],
            v = n % 100
        return '[' + n + (s[(v - 20) % 10] || s[v] || s[0]) + ']'
    },
}
var padStart = function (string, length, pad) {
        var s = String(string)
        return !s || s.length >= length
            ? string
            : '' + Array(length + 1 - s.length).join(pad) + string
    },
    padZoneStr = function (instance) {
        var negMinutes = -instance.utcOffset(),
            minutes = Math.abs(negMinutes),
            hourOffset = Math.floor(minutes / 60),
            minuteOffset = minutes % 60
        return (
            '' +
            (negMinutes <= 0 ? '+' : '-') +
            padStart(hourOffset, 2, '0') +
            ':' +
            padStart(minuteOffset, 2, '0')
        )
    },
    monthDiff = function monthDiff2(a, b) {
        if (a.date() < b.date()) return -monthDiff2(b, a)
        var wholeMonthDiff =
                (b.year() - a.year()) * 12 + (b.month() - a.month()),
            anchor = a.clone().add(wholeMonthDiff, M),
            c = b - anchor < 0,
            anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M)
        return +(
            -(
                wholeMonthDiff +
                (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)
            ) || 0
        )
    },
    absFloor = function (n) {
        return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
    },
    prettyUnit = function (u) {
        var special = {
            M,
            y: Y,
            w: W,
            d: D,
            D: DATE,
            h: H,
            m: MIN,
            s: S,
            ms: MS,
            Q,
        }
        return (
            special[u] ||
            String(u || '')
                .toLowerCase()
                .replace(/s$/, '')
        )
    },
    isUndefined = function (s) {
        return s === void 0
    },
    utils_default = {
        s: padStart,
        z: padZoneStr,
        m: monthDiff,
        a: absFloor,
        p: prettyUnit,
        u: isUndefined,
    }
var L = 'en',
    Ls = {}
Ls[L] = en_default
var isDayjs = function (d) {
        return d instanceof Dayjs
    },
    parseLocale = function parseLocale2(preset, object, isLocal) {
        var l
        if (!preset) return L
        if (typeof preset == 'string') {
            var presetLower = preset.toLowerCase()
            Ls[presetLower] && (l = presetLower),
                object && ((Ls[presetLower] = object), (l = presetLower))
            var presetSplit = preset.split('-')
            if (!l && presetSplit.length > 1)
                return parseLocale2(presetSplit[0])
        } else {
            var name = preset.name
            ;(Ls[name] = preset), (l = name)
        }
        return !isLocal && l && (L = l), l || (!isLocal && L)
    },
    dayjs = function (date, c) {
        if (isDayjs(date)) return date.clone()
        var cfg = typeof c == 'object' ? c : {}
        return (cfg.date = date), (cfg.args = arguments), new Dayjs(cfg)
    },
    wrapper = function (date, instance) {
        return dayjs(date, {
            locale: instance.$L,
            utc: instance.$u,
            x: instance.$x,
            $offset: instance.$offset,
        })
    },
    Utils = utils_default
Utils.l = parseLocale
Utils.i = isDayjs
Utils.w = wrapper
var parseDate = function (cfg) {
        var date = cfg.date,
            utc2 = cfg.utc
        if (date === null) return new Date(NaN)
        if (Utils.u(date)) return new Date()
        if (date instanceof Date) return new Date(date)
        if (typeof date == 'string' && !/Z$/i.test(date)) {
            var d = date.match(REGEX_PARSE)
            if (d) {
                var m = d[2] - 1 || 0,
                    ms = (d[7] || '0').substring(0, 3)
                return utc2
                    ? new Date(
                          Date.UTC(
                              d[1],
                              m,
                              d[3] || 1,
                              d[4] || 0,
                              d[5] || 0,
                              d[6] || 0,
                              ms,
                          ),
                      )
                    : new Date(
                          d[1],
                          m,
                          d[3] || 1,
                          d[4] || 0,
                          d[5] || 0,
                          d[6] || 0,
                          ms,
                      )
            }
        }
        return new Date(date)
    },
    Dayjs = (function () {
        function Dayjs2(cfg) {
            ;(this.$L = parseLocale(cfg.locale, null, !0)), this.parse(cfg)
        }
        var _proto = Dayjs2.prototype
        return (
            (_proto.parse = function (cfg) {
                ;(this.$d = parseDate(cfg)),
                    (this.$x = cfg.x || {}),
                    this.init()
            }),
            (_proto.init = function () {
                var $d = this.$d
                ;(this.$y = $d.getFullYear()),
                    (this.$M = $d.getMonth()),
                    (this.$D = $d.getDate()),
                    (this.$W = $d.getDay()),
                    (this.$H = $d.getHours()),
                    (this.$m = $d.getMinutes()),
                    (this.$s = $d.getSeconds()),
                    (this.$ms = $d.getMilliseconds())
            }),
            (_proto.$utils = function () {
                return Utils
            }),
            (_proto.isValid = function () {
                return this.$d.toString() !== INVALID_DATE_STRING
            }),
            (_proto.isSame = function (that, units) {
                var other = dayjs(that)
                return (
                    this.startOf(units) <= other && other <= this.endOf(units)
                )
            }),
            (_proto.isAfter = function (that, units) {
                return dayjs(that) < this.startOf(units)
            }),
            (_proto.isBefore = function (that, units) {
                return this.endOf(units) < dayjs(that)
            }),
            (_proto.$g = function (input, get, set) {
                return Utils.u(input) ? this[get] : this.set(set, input)
            }),
            (_proto.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }),
            (_proto.valueOf = function () {
                return this.$d.getTime()
            }),
            (_proto.startOf = function (units, _startOf) {
                var _this = this,
                    isStartOf = Utils.u(_startOf) ? !0 : _startOf,
                    unit = Utils.p(units),
                    instanceFactory = function (d, m) {
                        var ins = Utils.w(
                            _this.$u
                                ? Date.UTC(_this.$y, m, d)
                                : new Date(_this.$y, m, d),
                            _this,
                        )
                        return isStartOf ? ins : ins.endOf(D)
                    },
                    instanceFactorySet = function (method, slice) {
                        var argumentStart = [0, 0, 0, 0],
                            argumentEnd = [23, 59, 59, 999]
                        return Utils.w(
                            _this
                                .toDate()
                                [method].apply(
                                    _this.toDate('s'),
                                    (isStartOf
                                        ? argumentStart
                                        : argumentEnd
                                    ).slice(slice),
                                ),
                            _this,
                        )
                    },
                    $W = this.$W,
                    $M = this.$M,
                    $D = this.$D,
                    utcPad = 'set' + (this.$u ? 'UTC' : '')
                switch (unit) {
                    case Y:
                        return isStartOf
                            ? instanceFactory(1, 0)
                            : instanceFactory(31, 11)
                    case M:
                        return isStartOf
                            ? instanceFactory(1, $M)
                            : instanceFactory(0, $M + 1)
                    case W: {
                        var weekStart = this.$locale().weekStart || 0,
                            gap = ($W < weekStart ? $W + 7 : $W) - weekStart
                        return instanceFactory(
                            isStartOf ? $D - gap : $D + (6 - gap),
                            $M,
                        )
                    }
                    case D:
                    case DATE:
                        return instanceFactorySet(utcPad + 'Hours', 0)
                    case H:
                        return instanceFactorySet(utcPad + 'Minutes', 1)
                    case MIN:
                        return instanceFactorySet(utcPad + 'Seconds', 2)
                    case S:
                        return instanceFactorySet(utcPad + 'Milliseconds', 3)
                    default:
                        return this.clone()
                }
            }),
            (_proto.endOf = function (arg) {
                return this.startOf(arg, !1)
            }),
            (_proto.$set = function (units, _int) {
                var _C$D$C$DATE$C$M$C$Y$C,
                    unit = Utils.p(units),
                    utcPad = 'set' + (this.$u ? 'UTC' : ''),
                    name = ((_C$D$C$DATE$C$M$C$Y$C = {}),
                    (_C$D$C$DATE$C$M$C$Y$C[D] = utcPad + 'Date'),
                    (_C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + 'Date'),
                    (_C$D$C$DATE$C$M$C$Y$C[M] = utcPad + 'Month'),
                    (_C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + 'FullYear'),
                    (_C$D$C$DATE$C$M$C$Y$C[H] = utcPad + 'Hours'),
                    (_C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + 'Minutes'),
                    (_C$D$C$DATE$C$M$C$Y$C[S] = utcPad + 'Seconds'),
                    (_C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + 'Milliseconds'),
                    _C$D$C$DATE$C$M$C$Y$C)[unit],
                    arg = unit === D ? this.$D + (_int - this.$W) : _int
                if (unit === M || unit === Y) {
                    var date = this.clone().set(DATE, 1)
                    date.$d[name](arg),
                        date.init(),
                        (this.$d = date.set(
                            DATE,
                            Math.min(this.$D, date.daysInMonth()),
                        ).$d)
                } else name && this.$d[name](arg)
                return this.init(), this
            }),
            (_proto.set = function (string, _int2) {
                return this.clone().$set(string, _int2)
            }),
            (_proto.get = function (unit) {
                return this[Utils.p(unit)]()
            }),
            (_proto.add = function (number, units) {
                var _this2 = this,
                    _C$MIN$C$H$C$S$unit
                number = Number(number)
                var unit = Utils.p(units),
                    instanceFactorySet = function (n) {
                        var d = dayjs(_this2)
                        return Utils.w(
                            d.date(d.date() + Math.round(n * number)),
                            _this2,
                        )
                    }
                if (unit === M) return this.set(M, this.$M + number)
                if (unit === Y) return this.set(Y, this.$y + number)
                if (unit === D) return instanceFactorySet(1)
                if (unit === W) return instanceFactorySet(7)
                var step =
                        ((_C$MIN$C$H$C$S$unit = {}),
                        (_C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE),
                        (_C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR),
                        (_C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND),
                        _C$MIN$C$H$C$S$unit)[unit] || 1,
                    nextTimeStamp = this.$d.getTime() + number * step
                return Utils.w(nextTimeStamp, this)
            }),
            (_proto.subtract = function (number, string) {
                return this.add(number * -1, string)
            }),
            (_proto.format = function (formatStr) {
                var _this3 = this,
                    locale = this.$locale()
                if (!this.isValid())
                    return locale.invalidDate || INVALID_DATE_STRING
                var str = formatStr || FORMAT_DEFAULT,
                    zoneStr = Utils.z(this),
                    $H = this.$H,
                    $m = this.$m,
                    $M = this.$M,
                    weekdays = locale.weekdays,
                    months = locale.months,
                    meridiem = locale.meridiem,
                    getShort = function (arr, index, full, length) {
                        return (
                            (arr && (arr[index] || arr(_this3, str))) ||
                            full[index].slice(0, length)
                        )
                    },
                    get$H = function (num) {
                        return Utils.s($H % 12 || 12, num, '0')
                    },
                    meridiemFunc =
                        meridiem ||
                        function (hour, minute, isLowercase) {
                            var m = hour < 12 ? 'AM' : 'PM'
                            return isLowercase ? m.toLowerCase() : m
                        },
                    matches = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: $M + 1,
                        MM: Utils.s($M + 1, 2, '0'),
                        MMM: getShort(locale.monthsShort, $M, months, 3),
                        MMMM: getShort(months, $M),
                        D: this.$D,
                        DD: Utils.s(this.$D, 2, '0'),
                        d: String(this.$W),
                        dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
                        ddd: getShort(
                            locale.weekdaysShort,
                            this.$W,
                            weekdays,
                            3,
                        ),
                        dddd: weekdays[this.$W],
                        H: String($H),
                        HH: Utils.s($H, 2, '0'),
                        h: get$H(1),
                        hh: get$H(2),
                        a: meridiemFunc($H, $m, !0),
                        A: meridiemFunc($H, $m, !1),
                        m: String($m),
                        mm: Utils.s($m, 2, '0'),
                        s: String(this.$s),
                        ss: Utils.s(this.$s, 2, '0'),
                        SSS: Utils.s(this.$ms, 3, '0'),
                        Z: zoneStr,
                    }
                return str.replace(REGEX_FORMAT, function (match, $1) {
                    return $1 || matches[match] || zoneStr.replace(':', '')
                })
            }),
            (_proto.utcOffset = function () {
                return -Math.round(this.$d.getTimezoneOffset() / 15) * 15
            }),
            (_proto.diff = function (input, units, _float) {
                var _C$Y$C$M$C$Q$C$W$C$D$,
                    unit = Utils.p(units),
                    that = dayjs(input),
                    zoneDelta =
                        (that.utcOffset() - this.utcOffset()) *
                        MILLISECONDS_A_MINUTE,
                    diff2 = this - that,
                    result = Utils.m(this, that)
                return (
                    (result =
                        ((_C$Y$C$M$C$Q$C$W$C$D$ = {}),
                        (_C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12),
                        (_C$Y$C$M$C$Q$C$W$C$D$[M] = result),
                        (_C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3),
                        (_C$Y$C$M$C$Q$C$W$C$D$[W] =
                            (diff2 - zoneDelta) / MILLISECONDS_A_WEEK),
                        (_C$Y$C$M$C$Q$C$W$C$D$[D] =
                            (diff2 - zoneDelta) / MILLISECONDS_A_DAY),
                        (_C$Y$C$M$C$Q$C$W$C$D$[H] =
                            diff2 / MILLISECONDS_A_HOUR),
                        (_C$Y$C$M$C$Q$C$W$C$D$[MIN] =
                            diff2 / MILLISECONDS_A_MINUTE),
                        (_C$Y$C$M$C$Q$C$W$C$D$[S] =
                            diff2 / MILLISECONDS_A_SECOND),
                        _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff2),
                    _float ? result : Utils.a(result)
                )
            }),
            (_proto.daysInMonth = function () {
                return this.endOf(M).$D
            }),
            (_proto.$locale = function () {
                return Ls[this.$L]
            }),
            (_proto.locale = function (preset, object) {
                if (!preset) return this.$L
                var that = this.clone(),
                    nextLocaleName = parseLocale(preset, object, !0)
                return nextLocaleName && (that.$L = nextLocaleName), that
            }),
            (_proto.clone = function () {
                return Utils.w(this.$d, this)
            }),
            (_proto.toDate = function () {
                return new Date(this.valueOf())
            }),
            (_proto.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }),
            (_proto.toISOString = function () {
                return this.$d.toISOString()
            }),
            (_proto.toString = function () {
                return this.$d.toUTCString()
            }),
            Dayjs2
        )
    })(),
    proto = Dayjs.prototype
dayjs.prototype = proto
;[
    ['$ms', MS],
    ['$s', S],
    ['$m', MIN],
    ['$H', H],
    ['$W', D],
    ['$M', M],
    ['$y', Y],
    ['$D', DATE],
].forEach(function (g) {
    proto[g[1]] = function (input) {
        return this.$g(input, g[0], g[1])
    }
})
dayjs.extend = function (plugin, option) {
    return plugin.$i || (plugin(option, Dayjs, dayjs), (plugin.$i = !0)), dayjs
}
dayjs.locale = parseLocale
dayjs.isDayjs = isDayjs
dayjs.unix = function (timestamp) {
    return dayjs(timestamp * 1e3)
}
dayjs.en = Ls[L]
dayjs.Ls = Ls
dayjs.p = {}
var esm_default = dayjs
var import_customParseFormat = __toModule(require_customParseFormat()),
    import_localeData = __toModule(require_localeData()),
    import_timezone = __toModule(require_timezone()),
    import_utc = __toModule(require_utc())
esm_default.extend(import_customParseFormat.default)
esm_default.extend(import_localeData.default)
esm_default.extend(import_timezone.default)
esm_default.extend(import_utc.default)
window.dayjs = esm_default
function dateTimePickerFormComponent({
    displayFormat,
    firstDayOfWeek,
    isAutofocused,
    locale,
    shouldCloseOnDateSelection,
    state,
}) {
    let timezone2 = esm_default.tz.guess()
    return {
        daysInFocusedMonth: [],
        displayText: '',
        emptyDaysInFocusedMonth: [],
        focusedDate: null,
        focusedMonth: null,
        focusedYear: null,
        hour: null,
        isClearingState: !1,
        minute: null,
        second: null,
        state,
        dayLabels: [],
        months: [],
        init: function () {
            esm_default.locale(locales[locale] ?? locales.en),
                (this.focusedDate = esm_default().tz(timezone2))
            let date =
                this.getSelectedDate() ??
                esm_default().tz(timezone2).hour(0).minute(0).second(0)
            ;((this.getMaxDate() !== null && date.isAfter(this.getMaxDate())) ||
                (this.getMinDate() !== null &&
                    date.isBefore(this.getMinDate()))) &&
                (date = null),
                (this.hour = date?.hour() ?? 0),
                (this.minute = date?.minute() ?? 0),
                (this.second = date?.second() ?? 0),
                this.setDisplayText(),
                this.setMonths(),
                this.setDayLabels(),
                isAutofocused &&
                    this.$nextTick(() =>
                        this.togglePanelVisibility(this.$refs.button),
                    ),
                this.$watch('focusedMonth', () => {
                    ;(this.focusedMonth = +this.focusedMonth),
                        this.focusedDate.month() !== this.focusedMonth &&
                            (this.focusedDate = this.focusedDate.month(
                                this.focusedMonth,
                            ))
                }),
                this.$watch('focusedYear', () => {
                    if (
                        (this.focusedYear?.length > 4 &&
                            (this.focusedYear = this.focusedYear.substring(
                                0,
                                4,
                            )),
                        !this.focusedYear || this.focusedYear?.length !== 4)
                    )
                        return
                    let year = +this.focusedYear
                    Number.isInteger(year) ||
                        ((year = esm_default().tz(timezone2).year()),
                        (this.focusedYear = year)),
                        this.focusedDate.year() !== year &&
                            (this.focusedDate = this.focusedDate.year(year))
                }),
                this.$watch('focusedDate', () => {
                    let month = this.focusedDate.month(),
                        year = this.focusedDate.year()
                    this.focusedMonth !== month && (this.focusedMonth = month),
                        this.focusedYear !== year && (this.focusedYear = year),
                        this.setupDaysGrid()
                }),
                this.$watch('hour', () => {
                    let hour = +this.hour
                    if (
                        (Number.isInteger(hour)
                            ? hour > 23
                                ? (this.hour = 0)
                                : hour < 0
                                ? (this.hour = 23)
                                : (this.hour = hour)
                            : (this.hour = 0),
                        this.isClearingState)
                    )
                        return
                    let date2 = this.getSelectedDate() ?? this.focusedDate
                    this.setState(date2.hour(this.hour ?? 0))
                }),
                this.$watch('minute', () => {
                    let minute = +this.minute
                    if (
                        (Number.isInteger(minute)
                            ? minute > 59
                                ? (this.minute = 0)
                                : minute < 0
                                ? (this.minute = 59)
                                : (this.minute = minute)
                            : (this.minute = 0),
                        this.isClearingState)
                    )
                        return
                    let date2 = this.getSelectedDate() ?? this.focusedDate
                    this.setState(date2.minute(this.minute ?? 0))
                }),
                this.$watch('second', () => {
                    let second = +this.second
                    if (
                        (Number.isInteger(second)
                            ? second > 59
                                ? (this.second = 0)
                                : second < 0
                                ? (this.second = 59)
                                : (this.second = second)
                            : (this.second = 0),
                        this.isClearingState)
                    )
                        return
                    let date2 = this.getSelectedDate() ?? this.focusedDate
                    this.setState(date2.second(this.second ?? 0))
                }),
                this.$watch('state', () => {
                    if (this.state === void 0) return
                    let date2 = this.getSelectedDate()
                    if (date2 === null) {
                        this.clearState()
                        return
                    }
                    this.getMaxDate() !== null &&
                        date2?.isAfter(this.getMaxDate()) &&
                        (date2 = null),
                        this.getMinDate() !== null &&
                            date2?.isBefore(this.getMinDate()) &&
                            (date2 = null)
                    let newHour = date2?.hour() ?? 0
                    this.hour !== newHour && (this.hour = newHour)
                    let newMinute = date2?.minute() ?? 0
                    this.minute !== newMinute && (this.minute = newMinute)
                    let newSecond = date2?.second() ?? 0
                    this.second !== newSecond && (this.second = newSecond),
                        this.setDisplayText()
                })
        },
        clearState: function () {
            ;(this.isClearingState = !0),
                this.setState(null),
                (this.hour = 0),
                (this.minute = 0),
                (this.second = 0),
                this.$nextTick(() => (this.isClearingState = !1))
        },
        dateIsDisabled: function (date) {
            return !!(
                (this.$refs?.disabledDates &&
                    JSON.parse(this.$refs.disabledDates.value ?? []).some(
                        (disabledDate) => (
                            (disabledDate = esm_default(disabledDate)),
                            disabledDate.isValid()
                                ? disabledDate.isSame(date, 'day')
                                : !1
                        ),
                    )) ||
                (this.getMaxDate() && date.isAfter(this.getMaxDate())) ||
                (this.getMinDate() && date.isBefore(this.getMinDate()))
            )
        },
        dayIsDisabled: function (day) {
            return (
                (this.focusedDate ??= esm_default().tz(timezone2)),
                this.dateIsDisabled(this.focusedDate.date(day))
            )
        },
        dayIsSelected: function (day) {
            let selectedDate = this.getSelectedDate()
            return selectedDate === null
                ? !1
                : ((this.focusedDate ??= esm_default().tz(timezone2)),
                  selectedDate.date() === day &&
                      selectedDate.month() === this.focusedDate.month() &&
                      selectedDate.year() === this.focusedDate.year())
        },
        dayIsToday: function (day) {
            let date = esm_default().tz(timezone2)
            return (
                (this.focusedDate ??= date),
                date.date() === day &&
                    date.month() === this.focusedDate.month() &&
                    date.year() === this.focusedDate.year()
            )
        },
        focusPreviousDay: function () {
            ;(this.focusedDate ??= esm_default().tz(timezone2)),
                (this.focusedDate = this.focusedDate.subtract(1, 'day'))
        },
        focusPreviousWeek: function () {
            ;(this.focusedDate ??= esm_default().tz(timezone2)),
                (this.focusedDate = this.focusedDate.subtract(1, 'week'))
        },
        focusNextDay: function () {
            ;(this.focusedDate ??= esm_default().tz(timezone2)),
                (this.focusedDate = this.focusedDate.add(1, 'day'))
        },
        focusNextWeek: function () {
            ;(this.focusedDate ??= esm_default().tz(timezone2)),
                (this.focusedDate = this.focusedDate.add(1, 'week'))
        },
        getDayLabels: function () {
            let labels = esm_default.weekdaysShort()
            return firstDayOfWeek === 0
                ? labels
                : [
                      ...labels.slice(firstDayOfWeek),
                      ...labels.slice(0, firstDayOfWeek),
                  ]
        },
        getMaxDate: function () {
            let date = esm_default(this.$refs.maxDate?.value)
            return date.isValid() ? date : null
        },
        getMinDate: function () {
            let date = esm_default(this.$refs.minDate?.value)
            return date.isValid() ? date : null
        },
        getSelectedDate: function () {
            if (this.state === void 0 || this.state === null) return null
            let date = esm_default(this.state)
            return date.isValid() ? date : null
        },
        togglePanelVisibility: function () {
            this.isOpen() ||
                ((this.focusedDate =
                    this.getSelectedDate() ??
                    this.getMinDate() ??
                    esm_default().tz(timezone2)),
                this.setupDaysGrid()),
                this.$refs.panel.toggle(this.$refs.button)
        },
        selectDate: function (day = null) {
            day && this.setFocusedDay(day),
                (this.focusedDate ??= esm_default().tz(timezone2)),
                this.setState(this.focusedDate),
                shouldCloseOnDateSelection && this.togglePanelVisibility()
        },
        setDisplayText: function () {
            this.displayText = this.getSelectedDate()
                ? this.getSelectedDate().format(displayFormat)
                : ''
        },
        setMonths: function () {
            this.months = esm_default.months()
        },
        setDayLabels: function () {
            this.dayLabels = this.getDayLabels()
        },
        setupDaysGrid: function () {
            ;(this.focusedDate ??= esm_default().tz(timezone2)),
                (this.emptyDaysInFocusedMonth = Array.from(
                    { length: this.focusedDate.date(8 - firstDayOfWeek).day() },
                    (_, i) => i + 1,
                )),
                (this.daysInFocusedMonth = Array.from(
                    { length: this.focusedDate.daysInMonth() },
                    (_, i) => i + 1,
                ))
        },
        setFocusedDay: function (day) {
            this.focusedDate = (
                this.focusedDate ?? esm_default().tz(timezone2)
            ).date(day)
        },
        setState: function (date) {
            if (date === null) {
                ;(this.state = null), this.setDisplayText()
                return
            }
            this.dateIsDisabled(date) ||
                ((this.state = date
                    .hour(this.hour ?? 0)
                    .minute(this.minute ?? 0)
                    .second(this.second ?? 0)
                    .format('YYYY-MM-DD HH:mm:ss')),
                this.setDisplayText())
        },
        isOpen: function () {
            return this.$refs.panel?.style.display === 'block'
        },
    }
}
var locales = {
    ar: require_ar(),
    bs: require_bs(),
    ca: require_ca(),
    cs: require_cs(),
    da: require_da(),
    de: require_de(),
    en: require_en(),
    es: require_es(),
    fa: require_fa(),
    fi: require_fi(),
    fr: require_fr(),
    hi: require_hi(),
    hu: require_hu(),
    hy: require_hy_am(),
    id: require_id(),
    it: require_it(),
    ja: require_ja(),
    ka: require_ka(),
    ku: require_ku(),
    ms: require_ms(),
    my: require_my(),
    nl: require_nl(),
    pl: require_pl(),
    pt_BR: require_pt_br(),
    pt_PT: require_pt(),
    ro: require_ro(),
    ru: require_ru(),
    sv: require_sv(),
    tr: require_tr(),
    uk: require_uk(),
    vi: require_vi(),
    zh_CN: require_zh_cn(),
    zh_TW: require_zh_tw(),
}
export { dateTimePickerFormComponent as default }
