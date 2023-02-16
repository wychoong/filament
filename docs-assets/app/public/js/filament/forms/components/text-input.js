function _typeof(obj) {
    return (
        (_typeof =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (obj2) {
                      return typeof obj2
                  }
                : function (obj2) {
                      return obj2 &&
                          typeof Symbol == 'function' &&
                          obj2.constructor === Symbol &&
                          obj2 !== Symbol.prototype
                          ? 'symbol'
                          : typeof obj2
                  }),
        _typeof(obj)
    )
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor))
        throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        ;(descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor)
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    return (
        protoProps && _defineProperties(Constructor.prototype, protoProps),
        staticProps && _defineProperties(Constructor, staticProps),
        Object.defineProperty(Constructor, 'prototype', { writable: !1 }),
        Constructor
    )
}
function _defineProperty(obj, key, value) {
    return (
        key in obj
            ? Object.defineProperty(obj, key, {
                  value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (obj[key] = value),
        obj
    )
}
function _inherits(subClass, superClass) {
    if (typeof superClass != 'function' && superClass !== null)
        throw new TypeError(
            'Super expression must either be null or a function',
        )
    ;(subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(subClass, 'prototype', { writable: !1 }),
        superClass && _setPrototypeOf(subClass, superClass)
}
function _getPrototypeOf(o) {
    return (
        (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (o2) {
                  return o2.__proto__ || Object.getPrototypeOf(o2)
              }),
        _getPrototypeOf(o)
    )
}
function _setPrototypeOf(o, p) {
    return (
        (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (o2, p2) {
                  return (o2.__proto__ = p2), o2
              }),
        _setPrototypeOf(o, p)
    )
}
function _isNativeReflectConstruct() {
    if (
        typeof Reflect == 'undefined' ||
        !Reflect.construct ||
        Reflect.construct.sham
    )
        return !1
    if (typeof Proxy == 'function') return !0
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
            ),
            !0
        )
    } catch (e) {
        return !1
    }
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {},
        sourceKeys = Object.keys(source),
        key,
        i
    for (i = 0; i < sourceKeys.length; i++)
        (key = sourceKeys[i]),
            !(excluded.indexOf(key) >= 0) && (target[key] = source[key])
    return target
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {}
    var target = _objectWithoutPropertiesLoose(source, excluded),
        key,
        i
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
        for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
                !(excluded.indexOf(key) >= 0) &&
                    (!Object.prototype.propertyIsEnumerable.call(source, key) ||
                        (target[key] = source[key]))
    }
    return target
}
function _assertThisInitialized(self) {
    if (self === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
        )
    return self
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call == 'object' || typeof call == 'function'))
        return call
    if (call !== void 0)
        throw new TypeError(
            'Derived constructors may only return object or undefined',
        )
    return _assertThisInitialized(self)
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct()
    return function () {
        var Super = _getPrototypeOf(Derived),
            result
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor
            result = Reflect.construct(Super, arguments, NewTarget)
        } else result = Super.apply(this, arguments)
        return _possibleConstructorReturn(this, result)
    }
}
function _superPropBase(object, property) {
    for (
        ;
        !Object.prototype.hasOwnProperty.call(object, property) &&
        ((object = _getPrototypeOf(object)), object !== null);

    );
    return object
}
function _get() {
    return (
        typeof Reflect != 'undefined' && Reflect.get
            ? (_get = Reflect.get.bind())
            : (_get = function (target, property, receiver) {
                  var base = _superPropBase(target, property)
                  if (!!base) {
                      var desc = Object.getOwnPropertyDescriptor(base, property)
                      return desc.get
                          ? desc.get.call(
                                arguments.length < 3 ? target : receiver,
                            )
                          : desc.value
                  }
              }),
        _get.apply(this, arguments)
    )
}
function set(target, property, value, receiver) {
    return (
        typeof Reflect != 'undefined' && Reflect.set
            ? (set = Reflect.set)
            : (set = function (target2, property2, value2, receiver2) {
                  var base = _superPropBase(target2, property2),
                      desc
                  if (base) {
                      if (
                          ((desc = Object.getOwnPropertyDescriptor(
                              base,
                              property2,
                          )),
                          desc.set)
                      )
                          return desc.set.call(receiver2, value2), !0
                      if (!desc.writable) return !1
                  }
                  if (
                      ((desc = Object.getOwnPropertyDescriptor(
                          receiver2,
                          property2,
                      )),
                      desc)
                  ) {
                      if (!desc.writable) return !1
                      ;(desc.value = value2),
                          Object.defineProperty(receiver2, property2, desc)
                  } else _defineProperty(receiver2, property2, value2)
                  return !0
              }),
        set(target, property, value, receiver)
    )
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target)
    if (!s && isStrict) throw new Error('failed to set property')
    return value
}
function _slicedToArray(arr, i) {
    return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
    )
}
function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) ||
        _iterableToArray(arr) ||
        _unsupportedIterableToArray(arr) ||
        _nonIterableSpread()
    )
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr)
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
function _iterableToArray(iter) {
    if (
        (typeof Symbol != 'undefined' && iter[Symbol.iterator] != null) ||
        iter['@@iterator'] != null
    )
        return Array.from(iter)
}
function _iterableToArrayLimit(arr, i) {
    var _i =
        arr == null
            ? null
            : (typeof Symbol != 'undefined' && arr[Symbol.iterator]) ||
              arr['@@iterator']
    if (_i != null) {
        var _arr = [],
            _n = !0,
            _d = !1,
            _s,
            _e
        try {
            for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !(i && _arr.length === i));
                _n = !0
            );
        } catch (err) {
            ;(_d = !0), (_e = err)
        } finally {
            try {
                !_n && _i.return != null && _i.return()
            } finally {
                if (_d) throw _e
            }
        }
        return _arr
    }
}
function _unsupportedIterableToArray(o, minLen) {
    if (!!o) {
        if (typeof o == 'string') return _arrayLikeToArray(o, minLen)
        var n = Object.prototype.toString.call(o).slice(8, -1)
        if (
            (n === 'Object' && o.constructor && (n = o.constructor.name),
            n === 'Map' || n === 'Set')
        )
            return Array.from(o)
        if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
            return _arrayLikeToArray(o, minLen)
    }
}
function _arrayLikeToArray(arr, len) {
    ;(len == null || len > arr.length) && (len = arr.length)
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
    return arr2
}
function _nonIterableSpread() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function _nonIterableRest() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var ChangeDetails = (function () {
    function ChangeDetails2(details) {
        _classCallCheck(this, ChangeDetails2),
            Object.assign(
                this,
                { inserted: '', rawInserted: '', skip: !1, tailShift: 0 },
                details,
            )
    }
    return (
        _createClass(ChangeDetails2, [
            {
                key: 'aggregate',
                value: function (details) {
                    return (
                        (this.rawInserted += details.rawInserted),
                        (this.skip = this.skip || details.skip),
                        (this.inserted += details.inserted),
                        (this.tailShift += details.tailShift),
                        this
                    )
                },
            },
            {
                key: 'offset',
                get: function () {
                    return this.tailShift + this.inserted.length
                },
            },
        ]),
        ChangeDetails2
    )
})()
function isString(str) {
    return typeof str == 'string' || str instanceof String
}
var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT',
}
function forceDirection(direction) {
    switch (direction) {
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT
        default:
            return direction
    }
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
}
function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()]
}
function objectIncludes(b, a) {
    if (a === b) return !0
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i
    if (arrA && arrB) {
        if (a.length != b.length) return !1
        for (i = 0; i < a.length; i++)
            if (!objectIncludes(a[i], b[i])) return !1
        return !0
    }
    if (arrA != arrB) return !1
    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
        var dateA = a instanceof Date,
            dateB = b instanceof Date
        if (dateA && dateB) return a.getTime() == b.getTime()
        if (dateA != dateB) return !1
        var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp
        if (regexpA && regexpB) return a.toString() == b.toString()
        if (regexpA != regexpB) return !1
        var keys = Object.keys(a)
        for (i = 0; i < keys.length; i++)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1
        for (i = 0; i < keys.length; i++)
            if (!objectIncludes(b[keys[i]], a[keys[i]])) return !1
        return !0
    } else if (a && b && typeof a == 'function' && typeof b == 'function')
        return a.toString() === b.toString()
    return !1
}
var ActionDetails = (function () {
    function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
        for (
            _classCallCheck(this, ActionDetails2),
                this.value = value,
                this.cursorPos = cursorPos,
                this.oldValue = oldValue,
                this.oldSelection = oldSelection;
            this.value.slice(0, this.startChangePos) !==
            this.oldValue.slice(0, this.startChangePos);

        )
            --this.oldSelection.start
    }
    return (
        _createClass(ActionDetails2, [
            {
                key: 'startChangePos',
                get: function () {
                    return Math.min(this.cursorPos, this.oldSelection.start)
                },
            },
            {
                key: 'insertedCount',
                get: function () {
                    return this.cursorPos - this.startChangePos
                },
            },
            {
                key: 'inserted',
                get: function () {
                    return this.value.substr(
                        this.startChangePos,
                        this.insertedCount,
                    )
                },
            },
            {
                key: 'removedCount',
                get: function () {
                    return Math.max(
                        this.oldSelection.end - this.startChangePos ||
                            this.oldValue.length - this.value.length,
                        0,
                    )
                },
            },
            {
                key: 'removed',
                get: function () {
                    return this.oldValue.substr(
                        this.startChangePos,
                        this.removedCount,
                    )
                },
            },
            {
                key: 'head',
                get: function () {
                    return this.value.substring(0, this.startChangePos)
                },
            },
            {
                key: 'tail',
                get: function () {
                    return this.value.substring(
                        this.startChangePos + this.insertedCount,
                    )
                },
            },
            {
                key: 'removeDirection',
                get: function () {
                    return !this.removedCount || this.insertedCount
                        ? DIRECTION.NONE
                        : (this.oldSelection.end === this.cursorPos ||
                              this.oldSelection.start === this.cursorPos) &&
                          this.oldSelection.end === this.oldSelection.start
                        ? DIRECTION.RIGHT
                        : DIRECTION.LEFT
                },
            },
        ]),
        ActionDetails2
    )
})()
var ContinuousTailDetails = (function () {
    function ContinuousTailDetails2() {
        var value =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : '',
            from =
                arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : 0,
            stop = arguments.length > 2 ? arguments[2] : void 0
        _classCallCheck(this, ContinuousTailDetails2),
            (this.value = value),
            (this.from = from),
            (this.stop = stop)
    }
    return (
        _createClass(ContinuousTailDetails2, [
            {
                key: 'toString',
                value: function () {
                    return this.value
                },
            },
            {
                key: 'extend',
                value: function (tail) {
                    this.value += String(tail)
                },
            },
            {
                key: 'appendTo',
                value: function (masked) {
                    return masked
                        .append(this.toString(), { tail: !0 })
                        .aggregate(masked._appendPlaceholder())
                },
            },
            {
                key: 'state',
                get: function () {
                    return {
                        value: this.value,
                        from: this.from,
                        stop: this.stop,
                    }
                },
                set: function (state) {
                    Object.assign(this, state)
                },
            },
            {
                key: 'unshift',
                value: function (beforePos) {
                    if (
                        !this.value.length ||
                        (beforePos != null && this.from >= beforePos)
                    )
                        return ''
                    var shiftChar = this.value[0]
                    return (this.value = this.value.slice(1)), shiftChar
                },
            },
            {
                key: 'shift',
                value: function () {
                    if (!this.value.length) return ''
                    var shiftChar = this.value[this.value.length - 1]
                    return (this.value = this.value.slice(0, -1)), shiftChar
                },
            },
        ]),
        ContinuousTailDetails2
    )
})()
function IMask(el) {
    var opts =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return new IMask.InputMask(el, opts)
}
var Masked = (function () {
    function Masked2(opts) {
        _classCallCheck(this, Masked2),
            (this._value = ''),
            this._update(Object.assign({}, Masked2.DEFAULTS, opts)),
            (this.isInitialized = !0)
    }
    return (
        _createClass(Masked2, [
            {
                key: 'updateOptions',
                value: function (opts) {
                    !Object.keys(opts).length ||
                        this.withValueRefresh(this._update.bind(this, opts))
                },
            },
            {
                key: '_update',
                value: function (opts) {
                    Object.assign(this, opts)
                },
            },
            {
                key: 'state',
                get: function () {
                    return { _value: this.value }
                },
                set: function (state) {
                    this._value = state._value
                },
            },
            {
                key: 'reset',
                value: function () {
                    this._value = ''
                },
            },
            {
                key: 'value',
                get: function () {
                    return this._value
                },
                set: function (value) {
                    this.resolve(value)
                },
            },
            {
                key: 'resolve',
                value: function (value) {
                    return (
                        this.reset(),
                        this.append(value, { input: !0 }, ''),
                        this.doCommit(),
                        this.value
                    )
                },
            },
            {
                key: 'unmaskedValue',
                get: function () {
                    return this.value
                },
                set: function (value) {
                    this.reset(), this.append(value, {}, ''), this.doCommit()
                },
            },
            {
                key: 'typedValue',
                get: function () {
                    return this.doParse(this.value)
                },
                set: function (value) {
                    this.value = this.doFormat(value)
                },
            },
            {
                key: 'rawInputValue',
                get: function () {
                    return this.extractInput(0, this.value.length, { raw: !0 })
                },
                set: function (value) {
                    this.reset(),
                        this.append(value, { raw: !0 }, ''),
                        this.doCommit()
                },
            },
            {
                key: 'isComplete',
                get: function () {
                    return !0
                },
            },
            {
                key: 'isFilled',
                get: function () {
                    return this.isComplete
                },
            },
            {
                key: 'nearestInputPos',
                value: function (cursorPos, direction) {
                    return cursorPos
                },
            },
            {
                key: 'extractInput',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this.value.length
                    return this.value.slice(fromPos, toPos)
                },
            },
            {
                key: 'extractTail',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this.value.length
                    return new ContinuousTailDetails(
                        this.extractInput(fromPos, toPos),
                        fromPos,
                    )
                },
            },
            {
                key: 'appendTail',
                value: function (tail) {
                    return (
                        isString(tail) &&
                            (tail = new ContinuousTailDetails(String(tail))),
                        tail.appendTo(this)
                    )
                },
            },
            {
                key: '_appendCharRaw',
                value: function (ch) {
                    return ch
                        ? ((this._value += ch),
                          new ChangeDetails({ inserted: ch, rawInserted: ch }))
                        : new ChangeDetails()
                },
            },
            {
                key: '_appendChar',
                value: function (ch) {
                    var flags =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        checkTail =
                            arguments.length > 2 ? arguments[2] : void 0,
                        consistentState = this.state,
                        details,
                        _normalizePrepare = normalizePrepare(
                            this.doPrepare(ch, flags),
                        ),
                        _normalizePrepare2 = _slicedToArray(
                            _normalizePrepare,
                            2,
                        )
                    if (
                        ((ch = _normalizePrepare2[0]),
                        (details = _normalizePrepare2[1]),
                        (details = details.aggregate(
                            this._appendCharRaw(ch, flags),
                        )),
                        details.inserted)
                    ) {
                        var consistentTail,
                            appended = this.doValidate(flags) !== !1
                        if (appended && checkTail != null) {
                            var beforeTailState = this.state
                            this.overwrite === !0 &&
                                ((consistentTail = checkTail.state),
                                checkTail.unshift(this.value.length))
                            var tailDetails = this.appendTail(checkTail)
                            ;(appended =
                                tailDetails.rawInserted ===
                                checkTail.toString()),
                                !(appended && tailDetails.inserted) &&
                                    this.overwrite === 'shift' &&
                                    ((this.state = beforeTailState),
                                    (consistentTail = checkTail.state),
                                    checkTail.shift(),
                                    (tailDetails = this.appendTail(checkTail)),
                                    (appended =
                                        tailDetails.rawInserted ===
                                        checkTail.toString())),
                                appended &&
                                    tailDetails.inserted &&
                                    (this.state = beforeTailState)
                        }
                        appended ||
                            ((details = new ChangeDetails()),
                            (this.state = consistentState),
                            checkTail &&
                                consistentTail &&
                                (checkTail.state = consistentTail))
                    }
                    return details
                },
            },
            {
                key: '_appendPlaceholder',
                value: function () {
                    return new ChangeDetails()
                },
            },
            {
                key: '_appendEager',
                value: function () {
                    return new ChangeDetails()
                },
            },
            {
                key: 'append',
                value: function (str, flags, tail) {
                    if (!isString(str))
                        throw new Error('value should be string')
                    var details = new ChangeDetails(),
                        checkTail = isString(tail)
                            ? new ContinuousTailDetails(String(tail))
                            : tail
                    flags != null &&
                        flags.tail &&
                        (flags._beforeTailState = this.state)
                    for (var ci = 0; ci < str.length; ++ci)
                        details.aggregate(
                            this._appendChar(str[ci], flags, checkTail),
                        )
                    return (
                        checkTail != null &&
                            (details.tailShift +=
                                this.appendTail(checkTail).tailShift),
                        this.eager &&
                            flags !== null &&
                            flags !== void 0 &&
                            flags.input &&
                            str &&
                            details.aggregate(this._appendEager()),
                        details
                    )
                },
            },
            {
                key: 'remove',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this.value.length
                    return (
                        (this._value =
                            this.value.slice(0, fromPos) +
                            this.value.slice(toPos)),
                        new ChangeDetails()
                    )
                },
            },
            {
                key: 'withValueRefresh',
                value: function (fn) {
                    if (this._refreshing || !this.isInitialized) return fn()
                    this._refreshing = !0
                    var rawInput = this.rawInputValue,
                        value = this.value,
                        ret = fn()
                    return (
                        (this.rawInputValue = rawInput),
                        this.value &&
                            this.value !== value &&
                            value.indexOf(this.value) === 0 &&
                            this.append(value.slice(this.value.length), {}, ''),
                        delete this._refreshing,
                        ret
                    )
                },
            },
            {
                key: 'runIsolated',
                value: function (fn) {
                    if (this._isolated || !this.isInitialized) return fn(this)
                    this._isolated = !0
                    var state = this.state,
                        ret = fn(this)
                    return (this.state = state), delete this._isolated, ret
                },
            },
            {
                key: 'doPrepare',
                value: function (str) {
                    var flags =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {}
                    return this.prepare ? this.prepare(str, this, flags) : str
                },
            },
            {
                key: 'doValidate',
                value: function (flags) {
                    return (
                        (!this.validate ||
                            this.validate(this.value, this, flags)) &&
                        (!this.parent || this.parent.doValidate(flags))
                    )
                },
            },
            {
                key: 'doCommit',
                value: function () {
                    this.commit && this.commit(this.value, this)
                },
            },
            {
                key: 'doFormat',
                value: function (value) {
                    return this.format ? this.format(value, this) : value
                },
            },
            {
                key: 'doParse',
                value: function (str) {
                    return this.parse ? this.parse(str, this) : str
                },
            },
            {
                key: 'splice',
                value: function (
                    start,
                    deleteCount,
                    inserted,
                    removeDirection,
                ) {
                    var flags =
                            arguments.length > 4 && arguments[4] !== void 0
                                ? arguments[4]
                                : { input: !0 },
                        tailPos = start + deleteCount,
                        tail = this.extractTail(tailPos),
                        oldRawValue
                    this.eager &&
                        ((removeDirection = forceDirection(removeDirection)),
                        (oldRawValue = this.extractInput(0, tailPos, {
                            raw: !0,
                        })))
                    var startChangePos = this.nearestInputPos(
                            start,
                            deleteCount > 1 && start !== 0 && !this.eager
                                ? DIRECTION.NONE
                                : removeDirection,
                        ),
                        details = new ChangeDetails({
                            tailShift: startChangePos - start,
                        }).aggregate(this.remove(startChangePos))
                    if (
                        this.eager &&
                        removeDirection !== DIRECTION.NONE &&
                        oldRawValue === this.rawInputValue
                    )
                        if (removeDirection === DIRECTION.FORCE_LEFT)
                            for (
                                var valLength;
                                oldRawValue === this.rawInputValue &&
                                (valLength = this.value.length);

                            )
                                details
                                    .aggregate(
                                        new ChangeDetails({ tailShift: -1 }),
                                    )
                                    .aggregate(this.remove(valLength - 1))
                        else
                            removeDirection === DIRECTION.FORCE_RIGHT &&
                                tail.unshift()
                    return details.aggregate(this.append(inserted, flags, tail))
                },
            },
            {
                key: 'maskEquals',
                value: function (mask) {
                    return this.mask === mask
                },
            },
            {
                key: 'typedValueEquals',
                value: function (value) {
                    var tval = this.typedValue
                    return (
                        value === tval ||
                        (Masked2.EMPTY_VALUES.includes(value) &&
                            Masked2.EMPTY_VALUES.includes(tval)) ||
                        this.doFormat(value) === this.doFormat(this.typedValue)
                    )
                },
            },
        ]),
        Masked2
    )
})()
Masked.DEFAULTS = {
    format: function (v) {
        return v
    },
    parse: function (v) {
        return v
    },
}
Masked.EMPTY_VALUES = [void 0, null, '']
IMask.Masked = Masked
function maskedClass(mask) {
    if (mask == null) throw new Error('mask property should be defined')
    return mask instanceof RegExp
        ? IMask.MaskedRegExp
        : isString(mask)
        ? IMask.MaskedPattern
        : mask instanceof Date || mask === Date
        ? IMask.MaskedDate
        : mask instanceof Number || typeof mask == 'number' || mask === Number
        ? IMask.MaskedNumber
        : Array.isArray(mask) || mask === Array
        ? IMask.MaskedDynamic
        : IMask.Masked && mask.prototype instanceof IMask.Masked
        ? mask
        : mask instanceof IMask.Masked
        ? mask.constructor
        : mask instanceof Function
        ? IMask.MaskedFunction
        : (console.warn('Mask not found for mask', mask), IMask.Masked)
}
function createMask(opts) {
    if (IMask.Masked && opts instanceof IMask.Masked) return opts
    opts = Object.assign({}, opts)
    var mask = opts.mask
    if (IMask.Masked && mask instanceof IMask.Masked) return mask
    var MaskedClass = maskedClass(mask)
    if (!MaskedClass)
        throw new Error(
            'Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.',
        )
    return new MaskedClass(opts)
}
IMask.createMask = createMask
var _excluded = ['mask'],
    DEFAULT_INPUT_DEFINITIONS = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        '*': /./,
    },
    PatternInputDefinition = (function () {
        function PatternInputDefinition2(opts) {
            _classCallCheck(this, PatternInputDefinition2)
            var mask = opts.mask,
                blockOpts = _objectWithoutProperties(opts, _excluded)
            ;(this.masked = createMask({ mask })),
                Object.assign(this, blockOpts)
        }
        return (
            _createClass(PatternInputDefinition2, [
                {
                    key: 'reset',
                    value: function () {
                        ;(this.isFilled = !1), this.masked.reset()
                    },
                },
                {
                    key: 'remove',
                    value: function () {
                        var fromPos =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : 0,
                            toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length
                        return fromPos === 0 && toPos >= 1
                            ? ((this.isFilled = !1),
                              this.masked.remove(fromPos, toPos))
                            : new ChangeDetails()
                    },
                },
                {
                    key: 'value',
                    get: function () {
                        return (
                            this.masked.value ||
                            (this.isFilled && !this.isOptional
                                ? this.placeholderChar
                                : '')
                        )
                    },
                },
                {
                    key: 'unmaskedValue',
                    get: function () {
                        return this.masked.unmaskedValue
                    },
                },
                {
                    key: 'isComplete',
                    get: function () {
                        return Boolean(this.masked.value) || this.isOptional
                    },
                },
                {
                    key: '_appendChar',
                    value: function (ch) {
                        var flags =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {}
                        if (this.isFilled) return new ChangeDetails()
                        var state = this.masked.state,
                            details = this.masked._appendChar(ch, flags)
                        return (
                            details.inserted &&
                                this.doValidate(flags) === !1 &&
                                ((details.inserted = details.rawInserted = ''),
                                (this.masked.state = state)),
                            !details.inserted &&
                                !this.isOptional &&
                                !this.lazy &&
                                !flags.input &&
                                (details.inserted = this.placeholderChar),
                            (details.skip =
                                !details.inserted && !this.isOptional),
                            (this.isFilled = Boolean(details.inserted)),
                            details
                        )
                    },
                },
                {
                    key: 'append',
                    value: function () {
                        var _this$masked
                        return (_this$masked = this.masked).append.apply(
                            _this$masked,
                            arguments,
                        )
                    },
                },
                {
                    key: '_appendPlaceholder',
                    value: function () {
                        var details = new ChangeDetails()
                        return (
                            this.isFilled ||
                                this.isOptional ||
                                ((this.isFilled = !0),
                                (details.inserted = this.placeholderChar)),
                            details
                        )
                    },
                },
                {
                    key: '_appendEager',
                    value: function () {
                        return new ChangeDetails()
                    },
                },
                {
                    key: 'extractTail',
                    value: function () {
                        var _this$masked2
                        return (_this$masked2 = this.masked).extractTail.apply(
                            _this$masked2,
                            arguments,
                        )
                    },
                },
                {
                    key: 'appendTail',
                    value: function () {
                        var _this$masked3
                        return (_this$masked3 = this.masked).appendTail.apply(
                            _this$masked3,
                            arguments,
                        )
                    },
                },
                {
                    key: 'extractInput',
                    value: function () {
                        var fromPos =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : 0,
                            toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length,
                            flags = arguments.length > 2 ? arguments[2] : void 0
                        return this.masked.extractInput(fromPos, toPos, flags)
                    },
                },
                {
                    key: 'nearestInputPos',
                    value: function (cursorPos) {
                        var direction =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : DIRECTION.NONE,
                            minPos = 0,
                            maxPos = this.value.length,
                            boundPos = Math.min(
                                Math.max(cursorPos, minPos),
                                maxPos,
                            )
                        switch (direction) {
                            case DIRECTION.LEFT:
                            case DIRECTION.FORCE_LEFT:
                                return this.isComplete ? boundPos : minPos
                            case DIRECTION.RIGHT:
                            case DIRECTION.FORCE_RIGHT:
                                return this.isComplete ? boundPos : maxPos
                            case DIRECTION.NONE:
                            default:
                                return boundPos
                        }
                    },
                },
                {
                    key: 'doValidate',
                    value: function () {
                        var _this$masked4, _this$parent
                        return (
                            (_this$masked4 = this.masked).doValidate.apply(
                                _this$masked4,
                                arguments,
                            ) &&
                            (!this.parent ||
                                (_this$parent = this.parent).doValidate.apply(
                                    _this$parent,
                                    arguments,
                                ))
                        )
                    },
                },
                {
                    key: 'doCommit',
                    value: function () {
                        this.masked.doCommit()
                    },
                },
                {
                    key: 'state',
                    get: function () {
                        return {
                            masked: this.masked.state,
                            isFilled: this.isFilled,
                        }
                    },
                    set: function (state) {
                        ;(this.masked.state = state.masked),
                            (this.isFilled = state.isFilled)
                    },
                },
            ]),
            PatternInputDefinition2
        )
    })()
var PatternFixedDefinition = (function () {
    function PatternFixedDefinition2(opts) {
        _classCallCheck(this, PatternFixedDefinition2),
            Object.assign(this, opts),
            (this._value = ''),
            (this.isFixed = !0)
    }
    return (
        _createClass(PatternFixedDefinition2, [
            {
                key: 'value',
                get: function () {
                    return this._value
                },
            },
            {
                key: 'unmaskedValue',
                get: function () {
                    return this.isUnmasking ? this.value : ''
                },
            },
            {
                key: 'reset',
                value: function () {
                    ;(this._isRawInput = !1), (this._value = '')
                },
            },
            {
                key: 'remove',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this._value.length
                    return (
                        (this._value =
                            this._value.slice(0, fromPos) +
                            this._value.slice(toPos)),
                        this._value || (this._isRawInput = !1),
                        new ChangeDetails()
                    )
                },
            },
            {
                key: 'nearestInputPos',
                value: function (cursorPos) {
                    var direction =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : DIRECTION.NONE,
                        minPos = 0,
                        maxPos = this._value.length
                    switch (direction) {
                        case DIRECTION.LEFT:
                        case DIRECTION.FORCE_LEFT:
                            return minPos
                        case DIRECTION.NONE:
                        case DIRECTION.RIGHT:
                        case DIRECTION.FORCE_RIGHT:
                        default:
                            return maxPos
                    }
                },
            },
            {
                key: 'extractInput',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this._value.length,
                        flags =
                            arguments.length > 2 && arguments[2] !== void 0
                                ? arguments[2]
                                : {}
                    return (
                        (flags.raw &&
                            this._isRawInput &&
                            this._value.slice(fromPos, toPos)) ||
                        ''
                    )
                },
            },
            {
                key: 'isComplete',
                get: function () {
                    return !0
                },
            },
            {
                key: 'isFilled',
                get: function () {
                    return Boolean(this._value)
                },
            },
            {
                key: '_appendChar',
                value: function (ch) {
                    var flags =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        details = new ChangeDetails()
                    if (this._value) return details
                    var appended = this.char === ch,
                        isResolved =
                            appended &&
                            (this.isUnmasking || flags.input || flags.raw) &&
                            (!flags.raw || !this.eager) &&
                            !flags.tail
                    return (
                        isResolved && (details.rawInserted = this.char),
                        (this._value = details.inserted = this.char),
                        (this._isRawInput =
                            isResolved && (flags.raw || flags.input)),
                        details
                    )
                },
            },
            {
                key: '_appendEager',
                value: function () {
                    return this._appendChar(this.char, { tail: !0 })
                },
            },
            {
                key: '_appendPlaceholder',
                value: function () {
                    var details = new ChangeDetails()
                    return (
                        this._value ||
                            (this._value = details.inserted = this.char),
                        details
                    )
                },
            },
            {
                key: 'extractTail',
                value: function () {
                    return (
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : this.value.length,
                        new ContinuousTailDetails('')
                    )
                },
            },
            {
                key: 'appendTail',
                value: function (tail) {
                    return (
                        isString(tail) &&
                            (tail = new ContinuousTailDetails(String(tail))),
                        tail.appendTo(this)
                    )
                },
            },
            {
                key: 'append',
                value: function (str, flags, tail) {
                    var details = this._appendChar(str[0], flags)
                    return (
                        tail != null &&
                            (details.tailShift +=
                                this.appendTail(tail).tailShift),
                        details
                    )
                },
            },
            { key: 'doCommit', value: function () {} },
            {
                key: 'state',
                get: function () {
                    return {
                        _value: this._value,
                        _isRawInput: this._isRawInput,
                    }
                },
                set: function (state) {
                    Object.assign(this, state)
                },
            },
        ]),
        PatternFixedDefinition2
    )
})()
var _excluded2 = ['chunks'],
    ChunksTailDetails = (function () {
        function ChunksTailDetails2() {
            var chunks =
                    arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : [],
                from =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : 0
            _classCallCheck(this, ChunksTailDetails2),
                (this.chunks = chunks),
                (this.from = from)
        }
        return (
            _createClass(ChunksTailDetails2, [
                {
                    key: 'toString',
                    value: function () {
                        return this.chunks.map(String).join('')
                    },
                },
                {
                    key: 'extend',
                    value: function (tailChunk) {
                        if (!!String(tailChunk)) {
                            isString(tailChunk) &&
                                (tailChunk = new ContinuousTailDetails(
                                    String(tailChunk),
                                ))
                            var lastChunk = this.chunks[this.chunks.length - 1],
                                extendLast =
                                    lastChunk &&
                                    (lastChunk.stop === tailChunk.stop ||
                                        tailChunk.stop == null) &&
                                    tailChunk.from ===
                                        lastChunk.from +
                                            lastChunk.toString().length
                            if (tailChunk instanceof ContinuousTailDetails)
                                extendLast
                                    ? lastChunk.extend(tailChunk.toString())
                                    : this.chunks.push(tailChunk)
                            else if (tailChunk instanceof ChunksTailDetails2) {
                                if (tailChunk.stop == null)
                                    for (
                                        var firstTailChunk;
                                        tailChunk.chunks.length &&
                                        tailChunk.chunks[0].stop == null;

                                    )
                                        (firstTailChunk =
                                            tailChunk.chunks.shift()),
                                            (firstTailChunk.from +=
                                                tailChunk.from),
                                            this.extend(firstTailChunk)
                                tailChunk.toString() &&
                                    ((tailChunk.stop = tailChunk.blockIndex),
                                    this.chunks.push(tailChunk))
                            }
                        }
                    },
                },
                {
                    key: 'appendTo',
                    value: function (masked) {
                        if (!(masked instanceof IMask.MaskedPattern)) {
                            var tail = new ContinuousTailDetails(
                                this.toString(),
                            )
                            return tail.appendTo(masked)
                        }
                        for (
                            var details = new ChangeDetails(), ci = 0;
                            ci < this.chunks.length && !details.skip;
                            ++ci
                        ) {
                            var chunk = this.chunks[ci],
                                lastBlockIter = masked._mapPosToBlock(
                                    masked.value.length,
                                ),
                                stop = chunk.stop,
                                chunkBlock = void 0
                            if (
                                (stop != null &&
                                    (!lastBlockIter ||
                                        lastBlockIter.index <= stop) &&
                                    ((chunk instanceof ChunksTailDetails2 ||
                                        masked._stops.indexOf(stop) >= 0) &&
                                        details.aggregate(
                                            masked._appendPlaceholder(stop),
                                        ),
                                    (chunkBlock =
                                        chunk instanceof ChunksTailDetails2 &&
                                        masked._blocks[stop])),
                                chunkBlock)
                            ) {
                                var tailDetails = chunkBlock.appendTail(chunk)
                                ;(tailDetails.skip = !1),
                                    details.aggregate(tailDetails),
                                    (masked._value += tailDetails.inserted)
                                var remainChars = chunk
                                    .toString()
                                    .slice(tailDetails.rawInserted.length)
                                remainChars &&
                                    details.aggregate(
                                        masked.append(remainChars, {
                                            tail: !0,
                                        }),
                                    )
                            } else
                                details.aggregate(
                                    masked.append(chunk.toString(), {
                                        tail: !0,
                                    }),
                                )
                        }
                        return details
                    },
                },
                {
                    key: 'state',
                    get: function () {
                        return {
                            chunks: this.chunks.map(function (c) {
                                return c.state
                            }),
                            from: this.from,
                            stop: this.stop,
                            blockIndex: this.blockIndex,
                        }
                    },
                    set: function (state) {
                        var chunks = state.chunks,
                            props = _objectWithoutProperties(state, _excluded2)
                        Object.assign(this, props),
                            (this.chunks = chunks.map(function (cstate) {
                                var chunk =
                                    'chunks' in cstate
                                        ? new ChunksTailDetails2()
                                        : new ContinuousTailDetails()
                                return (chunk.state = cstate), chunk
                            }))
                    },
                },
                {
                    key: 'unshift',
                    value: function (beforePos) {
                        if (
                            !this.chunks.length ||
                            (beforePos != null && this.from >= beforePos)
                        )
                            return ''
                        for (
                            var chunkShiftPos =
                                    beforePos != null
                                        ? beforePos - this.from
                                        : beforePos,
                                ci = 0;
                            ci < this.chunks.length;

                        ) {
                            var chunk = this.chunks[ci],
                                shiftChar = chunk.unshift(chunkShiftPos)
                            if (chunk.toString()) {
                                if (!shiftChar) break
                                ++ci
                            } else this.chunks.splice(ci, 1)
                            if (shiftChar) return shiftChar
                        }
                        return ''
                    },
                },
                {
                    key: 'shift',
                    value: function () {
                        if (!this.chunks.length) return ''
                        for (var ci = this.chunks.length - 1; 0 <= ci; ) {
                            var chunk = this.chunks[ci],
                                shiftChar = chunk.shift()
                            if (chunk.toString()) {
                                if (!shiftChar) break
                                --ci
                            } else this.chunks.splice(ci, 1)
                            if (shiftChar) return shiftChar
                        }
                        return ''
                    },
                },
            ]),
            ChunksTailDetails2
        )
    })()
var PatternCursor = (function () {
    function PatternCursor2(masked, pos) {
        _classCallCheck(this, PatternCursor2),
            (this.masked = masked),
            (this._log = [])
        var _ref =
                masked._mapPosToBlock(pos) ||
                (pos < 0
                    ? { index: 0, offset: 0 }
                    : { index: this.masked._blocks.length, offset: 0 }),
            offset = _ref.offset,
            index = _ref.index
        ;(this.offset = offset), (this.index = index), (this.ok = !1)
    }
    return (
        _createClass(PatternCursor2, [
            {
                key: 'block',
                get: function () {
                    return this.masked._blocks[this.index]
                },
            },
            {
                key: 'pos',
                get: function () {
                    return this.masked._blockStartPos(this.index) + this.offset
                },
            },
            {
                key: 'state',
                get: function () {
                    return {
                        index: this.index,
                        offset: this.offset,
                        ok: this.ok,
                    }
                },
                set: function (s) {
                    Object.assign(this, s)
                },
            },
            {
                key: 'pushState',
                value: function () {
                    this._log.push(this.state)
                },
            },
            {
                key: 'popState',
                value: function () {
                    var s = this._log.pop()
                    return (this.state = s), s
                },
            },
            {
                key: 'bindBlock',
                value: function () {
                    this.block ||
                        (this.index < 0 &&
                            ((this.index = 0), (this.offset = 0)),
                        this.index >= this.masked._blocks.length &&
                            ((this.index = this.masked._blocks.length - 1),
                            (this.offset = this.block.value.length)))
                },
            },
            {
                key: '_pushLeft',
                value: function (fn) {
                    for (
                        this.pushState(), this.bindBlock();
                        0 <= this.index;
                        --this.index,
                            this.offset =
                                ((_this$block = this.block) === null ||
                                _this$block === void 0
                                    ? void 0
                                    : _this$block.value.length) || 0
                    ) {
                        var _this$block
                        if (fn()) return (this.ok = !0)
                    }
                    return (this.ok = !1)
                },
            },
            {
                key: '_pushRight',
                value: function (fn) {
                    for (
                        this.pushState(), this.bindBlock();
                        this.index < this.masked._blocks.length;
                        ++this.index, this.offset = 0
                    )
                        if (fn()) return (this.ok = !0)
                    return (this.ok = !1)
                },
            },
            {
                key: 'pushLeftBeforeFilled',
                value: function () {
                    var _this = this
                    return this._pushLeft(function () {
                        if (
                            !(_this.block.isFixed || !_this.block.value) &&
                            ((_this.offset = _this.block.nearestInputPos(
                                _this.offset,
                                DIRECTION.FORCE_LEFT,
                            )),
                            _this.offset !== 0)
                        )
                            return !0
                    })
                },
            },
            {
                key: 'pushLeftBeforeInput',
                value: function () {
                    var _this2 = this
                    return this._pushLeft(function () {
                        if (!_this2.block.isFixed)
                            return (
                                (_this2.offset = _this2.block.nearestInputPos(
                                    _this2.offset,
                                    DIRECTION.LEFT,
                                )),
                                !0
                            )
                    })
                },
            },
            {
                key: 'pushLeftBeforeRequired',
                value: function () {
                    var _this3 = this
                    return this._pushLeft(function () {
                        if (
                            !(
                                _this3.block.isFixed ||
                                (_this3.block.isOptional && !_this3.block.value)
                            )
                        )
                            return (
                                (_this3.offset = _this3.block.nearestInputPos(
                                    _this3.offset,
                                    DIRECTION.LEFT,
                                )),
                                !0
                            )
                    })
                },
            },
            {
                key: 'pushRightBeforeFilled',
                value: function () {
                    var _this4 = this
                    return this._pushRight(function () {
                        if (
                            !(_this4.block.isFixed || !_this4.block.value) &&
                            ((_this4.offset = _this4.block.nearestInputPos(
                                _this4.offset,
                                DIRECTION.FORCE_RIGHT,
                            )),
                            _this4.offset !== _this4.block.value.length)
                        )
                            return !0
                    })
                },
            },
            {
                key: 'pushRightBeforeInput',
                value: function () {
                    var _this5 = this
                    return this._pushRight(function () {
                        if (!_this5.block.isFixed)
                            return (
                                (_this5.offset = _this5.block.nearestInputPos(
                                    _this5.offset,
                                    DIRECTION.NONE,
                                )),
                                !0
                            )
                    })
                },
            },
            {
                key: 'pushRightBeforeRequired',
                value: function () {
                    var _this6 = this
                    return this._pushRight(function () {
                        if (
                            !(
                                _this6.block.isFixed ||
                                (_this6.block.isOptional && !_this6.block.value)
                            )
                        )
                            return (
                                (_this6.offset = _this6.block.nearestInputPos(
                                    _this6.offset,
                                    DIRECTION.NONE,
                                )),
                                !0
                            )
                    })
                },
            },
        ]),
        PatternCursor2
    )
})()
var MaskedRegExp = (function (_Masked) {
    _inherits(MaskedRegExp2, _Masked)
    var _super = _createSuper(MaskedRegExp2)
    function MaskedRegExp2() {
        return (
            _classCallCheck(this, MaskedRegExp2), _super.apply(this, arguments)
        )
    }
    return (
        _createClass(MaskedRegExp2, [
            {
                key: '_update',
                value: function (opts) {
                    opts.mask &&
                        (opts.validate = function (value) {
                            return value.search(opts.mask) >= 0
                        }),
                        _get(
                            _getPrototypeOf(MaskedRegExp2.prototype),
                            '_update',
                            this,
                        ).call(this, opts)
                },
            },
        ]),
        MaskedRegExp2
    )
})(Masked)
IMask.MaskedRegExp = MaskedRegExp
var _excluded3 = ['_blocks'],
    MaskedPattern = (function (_Masked) {
        _inherits(MaskedPattern2, _Masked)
        var _super = _createSuper(MaskedPattern2)
        function MaskedPattern2() {
            var opts =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : {}
            return (
                _classCallCheck(this, MaskedPattern2),
                (opts.definitions = Object.assign(
                    {},
                    DEFAULT_INPUT_DEFINITIONS,
                    opts.definitions,
                )),
                _super.call(
                    this,
                    Object.assign({}, MaskedPattern2.DEFAULTS, opts),
                )
            )
        }
        return (
            _createClass(MaskedPattern2, [
                {
                    key: '_update',
                    value: function () {
                        var opts =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : {}
                        ;(opts.definitions = Object.assign(
                            {},
                            this.definitions,
                            opts.definitions,
                        )),
                            _get(
                                _getPrototypeOf(MaskedPattern2.prototype),
                                '_update',
                                this,
                            ).call(this, opts),
                            this._rebuildMask()
                    },
                },
                {
                    key: '_rebuildMask',
                    value: function () {
                        var _this = this,
                            defs = this.definitions
                        ;(this._blocks = []),
                            (this._stops = []),
                            (this._maskedBlocks = {})
                        var pattern = this.mask
                        if (!(!pattern || !defs))
                            for (
                                var unmaskingBlock = !1,
                                    optionalBlock = !1,
                                    i = 0;
                                i < pattern.length;
                                ++i
                            ) {
                                if (this.blocks) {
                                    var _ret = (function () {
                                        var p = pattern.slice(i),
                                            bNames = Object.keys(
                                                _this.blocks,
                                            ).filter(function (bName2) {
                                                return p.indexOf(bName2) === 0
                                            })
                                        bNames.sort(function (a, b) {
                                            return b.length - a.length
                                        })
                                        var bName = bNames[0]
                                        if (bName) {
                                            var maskedBlock = createMask(
                                                Object.assign(
                                                    {
                                                        parent: _this,
                                                        lazy: _this.lazy,
                                                        eager: _this.eager,
                                                        placeholderChar:
                                                            _this.placeholderChar,
                                                        overwrite:
                                                            _this.overwrite,
                                                    },
                                                    _this.blocks[bName],
                                                ),
                                            )
                                            return (
                                                maskedBlock &&
                                                    (_this._blocks.push(
                                                        maskedBlock,
                                                    ),
                                                    _this._maskedBlocks[
                                                        bName
                                                    ] ||
                                                        (_this._maskedBlocks[
                                                            bName
                                                        ] = []),
                                                    _this._maskedBlocks[
                                                        bName
                                                    ].push(
                                                        _this._blocks.length -
                                                            1,
                                                    )),
                                                (i += bName.length - 1),
                                                'continue'
                                            )
                                        }
                                    })()
                                    if (_ret === 'continue') continue
                                }
                                var char = pattern[i],
                                    isInput = char in defs
                                if (char === MaskedPattern2.STOP_CHAR) {
                                    this._stops.push(this._blocks.length)
                                    continue
                                }
                                if (char === '{' || char === '}') {
                                    unmaskingBlock = !unmaskingBlock
                                    continue
                                }
                                if (char === '[' || char === ']') {
                                    optionalBlock = !optionalBlock
                                    continue
                                }
                                if (char === MaskedPattern2.ESCAPE_CHAR) {
                                    if ((++i, (char = pattern[i]), !char)) break
                                    isInput = !1
                                }
                                var def = isInput
                                    ? new PatternInputDefinition({
                                          parent: this,
                                          lazy: this.lazy,
                                          eager: this.eager,
                                          placeholderChar: this.placeholderChar,
                                          mask: defs[char],
                                          isOptional: optionalBlock,
                                      })
                                    : new PatternFixedDefinition({
                                          char,
                                          eager: this.eager,
                                          isUnmasking: unmaskingBlock,
                                      })
                                this._blocks.push(def)
                            }
                    },
                },
                {
                    key: 'state',
                    get: function () {
                        return Object.assign(
                            {},
                            _get(
                                _getPrototypeOf(MaskedPattern2.prototype),
                                'state',
                                this,
                            ),
                            {
                                _blocks: this._blocks.map(function (b) {
                                    return b.state
                                }),
                            },
                        )
                    },
                    set: function (state) {
                        var _blocks = state._blocks,
                            maskedState = _objectWithoutProperties(
                                state,
                                _excluded3,
                            )
                        this._blocks.forEach(function (b, bi) {
                            return (b.state = _blocks[bi])
                        }),
                            _set(
                                _getPrototypeOf(MaskedPattern2.prototype),
                                'state',
                                maskedState,
                                this,
                                !0,
                            )
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        _get(
                            _getPrototypeOf(MaskedPattern2.prototype),
                            'reset',
                            this,
                        ).call(this),
                            this._blocks.forEach(function (b) {
                                return b.reset()
                            })
                    },
                },
                {
                    key: 'isComplete',
                    get: function () {
                        return this._blocks.every(function (b) {
                            return b.isComplete
                        })
                    },
                },
                {
                    key: 'isFilled',
                    get: function () {
                        return this._blocks.every(function (b) {
                            return b.isFilled
                        })
                    },
                },
                {
                    key: 'isFixed',
                    get: function () {
                        return this._blocks.every(function (b) {
                            return b.isFixed
                        })
                    },
                },
                {
                    key: 'isOptional',
                    get: function () {
                        return this._blocks.every(function (b) {
                            return b.isOptional
                        })
                    },
                },
                {
                    key: 'doCommit',
                    value: function () {
                        this._blocks.forEach(function (b) {
                            return b.doCommit()
                        }),
                            _get(
                                _getPrototypeOf(MaskedPattern2.prototype),
                                'doCommit',
                                this,
                            ).call(this)
                    },
                },
                {
                    key: 'unmaskedValue',
                    get: function () {
                        return this._blocks.reduce(function (str, b) {
                            return (str += b.unmaskedValue)
                        }, '')
                    },
                    set: function (unmaskedValue) {
                        _set(
                            _getPrototypeOf(MaskedPattern2.prototype),
                            'unmaskedValue',
                            unmaskedValue,
                            this,
                            !0,
                        )
                    },
                },
                {
                    key: 'value',
                    get: function () {
                        return this._blocks.reduce(function (str, b) {
                            return (str += b.value)
                        }, '')
                    },
                    set: function (value) {
                        _set(
                            _getPrototypeOf(MaskedPattern2.prototype),
                            'value',
                            value,
                            this,
                            !0,
                        )
                    },
                },
                {
                    key: 'appendTail',
                    value: function (tail) {
                        return _get(
                            _getPrototypeOf(MaskedPattern2.prototype),
                            'appendTail',
                            this,
                        )
                            .call(this, tail)
                            .aggregate(this._appendPlaceholder())
                    },
                },
                {
                    key: '_appendEager',
                    value: function () {
                        var _this$_mapPosToBlock,
                            details = new ChangeDetails(),
                            startBlockIndex =
                                (_this$_mapPosToBlock = this._mapPosToBlock(
                                    this.value.length,
                                )) === null || _this$_mapPosToBlock === void 0
                                    ? void 0
                                    : _this$_mapPosToBlock.index
                        if (startBlockIndex == null) return details
                        this._blocks[startBlockIndex].isFilled &&
                            ++startBlockIndex
                        for (
                            var bi = startBlockIndex;
                            bi < this._blocks.length;
                            ++bi
                        ) {
                            var d = this._blocks[bi]._appendEager()
                            if (!d.inserted) break
                            details.aggregate(d)
                        }
                        return details
                    },
                },
                {
                    key: '_appendCharRaw',
                    value: function (ch) {
                        var flags =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : {},
                            blockIter = this._mapPosToBlock(this.value.length),
                            details = new ChangeDetails()
                        if (!blockIter) return details
                        for (var bi = blockIter.index; ; ++bi) {
                            var _flags$_beforeTailSta,
                                _flags$_beforeTailSta2,
                                _block = this._blocks[bi]
                            if (!_block) break
                            var blockDetails = _block._appendChar(
                                    ch,
                                    Object.assign({}, flags, {
                                        _beforeTailState:
                                            (_flags$_beforeTailSta =
                                                flags._beforeTailState) ===
                                                null ||
                                            _flags$_beforeTailSta === void 0 ||
                                            (_flags$_beforeTailSta2 =
                                                _flags$_beforeTailSta._blocks) ===
                                                null ||
                                            _flags$_beforeTailSta2 === void 0
                                                ? void 0
                                                : _flags$_beforeTailSta2[bi],
                                    }),
                                ),
                                skip = blockDetails.skip
                            if (
                                (details.aggregate(blockDetails),
                                skip || blockDetails.rawInserted)
                            )
                                break
                        }
                        return details
                    },
                },
                {
                    key: 'extractTail',
                    value: function () {
                        var _this2 = this,
                            fromPos =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : 0,
                            toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length,
                            chunkTail = new ChunksTailDetails()
                        return (
                            fromPos === toPos ||
                                this._forEachBlocksInRange(
                                    fromPos,
                                    toPos,
                                    function (b, bi, bFromPos, bToPos) {
                                        var blockChunk = b.extractTail(
                                            bFromPos,
                                            bToPos,
                                        )
                                        ;(blockChunk.stop =
                                            _this2._findStopBefore(bi)),
                                            (blockChunk.from =
                                                _this2._blockStartPos(bi)),
                                            blockChunk instanceof
                                                ChunksTailDetails &&
                                                (blockChunk.blockIndex = bi),
                                            chunkTail.extend(blockChunk)
                                    },
                                ),
                            chunkTail
                        )
                    },
                },
                {
                    key: 'extractInput',
                    value: function () {
                        var fromPos =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : 0,
                            toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length,
                            flags =
                                arguments.length > 2 && arguments[2] !== void 0
                                    ? arguments[2]
                                    : {}
                        if (fromPos === toPos) return ''
                        var input = ''
                        return (
                            this._forEachBlocksInRange(
                                fromPos,
                                toPos,
                                function (b, _, fromPos2, toPos2) {
                                    input += b.extractInput(
                                        fromPos2,
                                        toPos2,
                                        flags,
                                    )
                                },
                            ),
                            input
                        )
                    },
                },
                {
                    key: '_findStopBefore',
                    value: function (blockIndex) {
                        for (
                            var stopBefore, si = 0;
                            si < this._stops.length;
                            ++si
                        ) {
                            var stop = this._stops[si]
                            if (stop <= blockIndex) stopBefore = stop
                            else break
                        }
                        return stopBefore
                    },
                },
                {
                    key: '_appendPlaceholder',
                    value: function (toBlockIndex) {
                        var _this3 = this,
                            details = new ChangeDetails()
                        if (this.lazy && toBlockIndex == null) return details
                        var startBlockIter = this._mapPosToBlock(
                            this.value.length,
                        )
                        if (!startBlockIter) return details
                        var startBlockIndex = startBlockIter.index,
                            endBlockIndex = toBlockIndex ?? this._blocks.length
                        return (
                            this._blocks
                                .slice(startBlockIndex, endBlockIndex)
                                .forEach(function (b) {
                                    if (!b.lazy || toBlockIndex != null) {
                                        var args =
                                                b._blocks != null
                                                    ? [b._blocks.length]
                                                    : [],
                                            bDetails =
                                                b._appendPlaceholder.apply(
                                                    b,
                                                    args,
                                                )
                                        ;(_this3._value += bDetails.inserted),
                                            details.aggregate(bDetails)
                                    }
                                }),
                            details
                        )
                    },
                },
                {
                    key: '_mapPosToBlock',
                    value: function (pos) {
                        for (
                            var accVal = '', bi = 0;
                            bi < this._blocks.length;
                            ++bi
                        ) {
                            var _block2 = this._blocks[bi],
                                blockStartPos = accVal.length
                            if (
                                ((accVal += _block2.value),
                                pos <= accVal.length)
                            )
                                return {
                                    index: bi,
                                    offset: pos - blockStartPos,
                                }
                        }
                    },
                },
                {
                    key: '_blockStartPos',
                    value: function (blockIndex) {
                        return this._blocks
                            .slice(0, blockIndex)
                            .reduce(function (pos, b) {
                                return (pos += b.value.length)
                            }, 0)
                    },
                },
                {
                    key: '_forEachBlocksInRange',
                    value: function (fromPos) {
                        var toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length,
                            fn = arguments.length > 2 ? arguments[2] : void 0,
                            fromBlockIter = this._mapPosToBlock(fromPos)
                        if (fromBlockIter) {
                            var toBlockIter = this._mapPosToBlock(toPos),
                                isSameBlock =
                                    toBlockIter &&
                                    fromBlockIter.index === toBlockIter.index,
                                fromBlockStartPos = fromBlockIter.offset,
                                fromBlockEndPos =
                                    toBlockIter && isSameBlock
                                        ? toBlockIter.offset
                                        : this._blocks[fromBlockIter.index]
                                              .value.length
                            if (
                                (fn(
                                    this._blocks[fromBlockIter.index],
                                    fromBlockIter.index,
                                    fromBlockStartPos,
                                    fromBlockEndPos,
                                ),
                                toBlockIter && !isSameBlock)
                            ) {
                                for (
                                    var bi = fromBlockIter.index + 1;
                                    bi < toBlockIter.index;
                                    ++bi
                                )
                                    fn(
                                        this._blocks[bi],
                                        bi,
                                        0,
                                        this._blocks[bi].value.length,
                                    )
                                fn(
                                    this._blocks[toBlockIter.index],
                                    toBlockIter.index,
                                    0,
                                    toBlockIter.offset,
                                )
                            }
                        }
                    },
                },
                {
                    key: 'remove',
                    value: function () {
                        var fromPos =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : 0,
                            toPos =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : this.value.length,
                            removeDetails = _get(
                                _getPrototypeOf(MaskedPattern2.prototype),
                                'remove',
                                this,
                            ).call(this, fromPos, toPos)
                        return (
                            this._forEachBlocksInRange(
                                fromPos,
                                toPos,
                                function (b, _, bFromPos, bToPos) {
                                    removeDetails.aggregate(
                                        b.remove(bFromPos, bToPos),
                                    )
                                },
                            ),
                            removeDetails
                        )
                    },
                },
                {
                    key: 'nearestInputPos',
                    value: function (cursorPos) {
                        var direction =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : DIRECTION.NONE
                        if (!this._blocks.length) return 0
                        var cursor = new PatternCursor(this, cursorPos)
                        if (direction === DIRECTION.NONE)
                            return cursor.pushRightBeforeInput() ||
                                (cursor.popState(),
                                cursor.pushLeftBeforeInput())
                                ? cursor.pos
                                : this.value.length
                        if (
                            direction === DIRECTION.LEFT ||
                            direction === DIRECTION.FORCE_LEFT
                        ) {
                            if (direction === DIRECTION.LEFT) {
                                if (
                                    (cursor.pushRightBeforeFilled(),
                                    cursor.ok && cursor.pos === cursorPos)
                                )
                                    return cursorPos
                                cursor.popState()
                            }
                            if (
                                (cursor.pushLeftBeforeInput(),
                                cursor.pushLeftBeforeRequired(),
                                cursor.pushLeftBeforeFilled(),
                                direction === DIRECTION.LEFT)
                            ) {
                                if (
                                    (cursor.pushRightBeforeInput(),
                                    cursor.pushRightBeforeRequired(),
                                    (cursor.ok && cursor.pos <= cursorPos) ||
                                        (cursor.popState(),
                                        cursor.ok && cursor.pos <= cursorPos))
                                )
                                    return cursor.pos
                                cursor.popState()
                            }
                            return cursor.ok
                                ? cursor.pos
                                : direction === DIRECTION.FORCE_LEFT
                                ? 0
                                : (cursor.popState(),
                                  cursor.ok || (cursor.popState(), cursor.ok)
                                      ? cursor.pos
                                      : 0)
                        }
                        return direction === DIRECTION.RIGHT ||
                            direction === DIRECTION.FORCE_RIGHT
                            ? (cursor.pushRightBeforeInput(),
                              cursor.pushRightBeforeRequired(),
                              cursor.pushRightBeforeFilled()
                                  ? cursor.pos
                                  : direction === DIRECTION.FORCE_RIGHT
                                  ? this.value.length
                                  : (cursor.popState(),
                                    cursor.ok || (cursor.popState(), cursor.ok)
                                        ? cursor.pos
                                        : this.nearestInputPos(
                                              cursorPos,
                                              DIRECTION.LEFT,
                                          )))
                            : cursorPos
                    },
                },
                {
                    key: 'maskedBlock',
                    value: function (name) {
                        return this.maskedBlocks(name)[0]
                    },
                },
                {
                    key: 'maskedBlocks',
                    value: function (name) {
                        var _this4 = this,
                            indices = this._maskedBlocks[name]
                        return indices
                            ? indices.map(function (gi) {
                                  return _this4._blocks[gi]
                              })
                            : []
                    },
                },
            ]),
            MaskedPattern2
        )
    })(Masked)
MaskedPattern.DEFAULTS = { lazy: !0, placeholderChar: '_' }
MaskedPattern.STOP_CHAR = '`'
MaskedPattern.ESCAPE_CHAR = '\\'
MaskedPattern.InputDefinition = PatternInputDefinition
MaskedPattern.FixedDefinition = PatternFixedDefinition
IMask.MaskedPattern = MaskedPattern
var MaskedRange = (function (_MaskedPattern) {
    _inherits(MaskedRange2, _MaskedPattern)
    var _super = _createSuper(MaskedRange2)
    function MaskedRange2() {
        return (
            _classCallCheck(this, MaskedRange2), _super.apply(this, arguments)
        )
    }
    return (
        _createClass(MaskedRange2, [
            {
                key: '_matchFrom',
                get: function () {
                    return this.maxLength - String(this.from).length
                },
            },
            {
                key: '_update',
                value: function (opts) {
                    opts = Object.assign(
                        {
                            to: this.to || 0,
                            from: this.from || 0,
                            maxLength: this.maxLength || 0,
                        },
                        opts,
                    )
                    var maxLength = String(opts.to).length
                    opts.maxLength != null &&
                        (maxLength = Math.max(maxLength, opts.maxLength)),
                        (opts.maxLength = maxLength)
                    for (
                        var fromStr = String(opts.from).padStart(
                                maxLength,
                                '0',
                            ),
                            toStr = String(opts.to).padStart(maxLength, '0'),
                            sameCharsCount = 0;
                        sameCharsCount < toStr.length &&
                        toStr[sameCharsCount] === fromStr[sameCharsCount];

                    )
                        ++sameCharsCount
                    ;(opts.mask =
                        toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') +
                        '0'.repeat(maxLength - sameCharsCount)),
                        _get(
                            _getPrototypeOf(MaskedRange2.prototype),
                            '_update',
                            this,
                        ).call(this, opts)
                },
            },
            {
                key: 'isComplete',
                get: function () {
                    return (
                        _get(
                            _getPrototypeOf(MaskedRange2.prototype),
                            'isComplete',
                            this,
                        ) && Boolean(this.value)
                    )
                },
            },
            {
                key: 'boundaries',
                value: function (str) {
                    var minstr = '',
                        maxstr = '',
                        _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                        _ref2 = _slicedToArray(_ref, 3),
                        placeholder = _ref2[1],
                        num = _ref2[2]
                    return (
                        num &&
                            ((minstr = '0'.repeat(placeholder.length) + num),
                            (maxstr = '9'.repeat(placeholder.length) + num)),
                        (minstr = minstr.padEnd(this.maxLength, '0')),
                        (maxstr = maxstr.padEnd(this.maxLength, '9')),
                        [minstr, maxstr]
                    )
                },
            },
            {
                key: 'doPrepare',
                value: function (ch) {
                    var flags =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        details,
                        _normalizePrepare = normalizePrepare(
                            _get(
                                _getPrototypeOf(MaskedRange2.prototype),
                                'doPrepare',
                                this,
                            ).call(this, ch.replace(/\D/g, ''), flags),
                        ),
                        _normalizePrepare2 = _slicedToArray(
                            _normalizePrepare,
                            2,
                        )
                    if (
                        ((ch = _normalizePrepare2[0]),
                        (details = _normalizePrepare2[1]),
                        !this.autofix || !ch)
                    )
                        return ch
                    var fromStr = String(this.from).padStart(
                            this.maxLength,
                            '0',
                        ),
                        toStr = String(this.to).padStart(this.maxLength, '0'),
                        nextVal = this.value + ch
                    if (nextVal.length > this.maxLength) return ''
                    var _this$boundaries = this.boundaries(nextVal),
                        _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
                        minstr = _this$boundaries2[0],
                        maxstr = _this$boundaries2[1]
                    return Number(maxstr) < this.from
                        ? fromStr[nextVal.length - 1]
                        : Number(minstr) > this.to
                        ? this.autofix === 'pad' &&
                          nextVal.length < this.maxLength
                            ? [
                                  '',
                                  details.aggregate(
                                      this.append(
                                          fromStr[nextVal.length - 1] + ch,
                                          flags,
                                      ),
                                  ),
                              ]
                            : toStr[nextVal.length - 1]
                        : ch
                },
            },
            {
                key: 'doValidate',
                value: function () {
                    var _get2,
                        str = this.value,
                        firstNonZero = str.search(/[^0]/)
                    if (firstNonZero === -1 && str.length <= this._matchFrom)
                        return !0
                    for (
                        var _this$boundaries3 = this.boundaries(str),
                            _this$boundaries4 = _slicedToArray(
                                _this$boundaries3,
                                2,
                            ),
                            minstr = _this$boundaries4[0],
                            maxstr = _this$boundaries4[1],
                            _len = arguments.length,
                            args = new Array(_len),
                            _key = 0;
                        _key < _len;
                        _key++
                    )
                        args[_key] = arguments[_key]
                    return (
                        this.from <= Number(maxstr) &&
                        Number(minstr) <= this.to &&
                        (_get2 = _get(
                            _getPrototypeOf(MaskedRange2.prototype),
                            'doValidate',
                            this,
                        )).call.apply(_get2, [this].concat(args))
                    )
                },
            },
        ]),
        MaskedRange2
    )
})(MaskedPattern)
IMask.MaskedRange = MaskedRange
var MaskedDate = (function (_MaskedPattern) {
    _inherits(MaskedDate2, _MaskedPattern)
    var _super = _createSuper(MaskedDate2)
    function MaskedDate2(opts) {
        return (
            _classCallCheck(this, MaskedDate2),
            _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts))
        )
    }
    return (
        _createClass(MaskedDate2, [
            {
                key: '_update',
                value: function (opts) {
                    opts.mask === Date && delete opts.mask,
                        opts.pattern && (opts.mask = opts.pattern)
                    var blocks = opts.blocks
                    ;(opts.blocks = Object.assign(
                        {},
                        MaskedDate2.GET_DEFAULT_BLOCKS(),
                    )),
                        opts.min &&
                            (opts.blocks.Y.from = opts.min.getFullYear()),
                        opts.max && (opts.blocks.Y.to = opts.max.getFullYear()),
                        opts.min &&
                            opts.max &&
                            opts.blocks.Y.from === opts.blocks.Y.to &&
                            ((opts.blocks.m.from = opts.min.getMonth() + 1),
                            (opts.blocks.m.to = opts.max.getMonth() + 1),
                            opts.blocks.m.from === opts.blocks.m.to &&
                                ((opts.blocks.d.from = opts.min.getDate()),
                                (opts.blocks.d.to = opts.max.getDate()))),
                        Object.assign(opts.blocks, this.blocks, blocks),
                        Object.keys(opts.blocks).forEach(function (bk) {
                            var b = opts.blocks[bk]
                            !('autofix' in b) &&
                                'autofix' in opts &&
                                (b.autofix = opts.autofix)
                        }),
                        _get(
                            _getPrototypeOf(MaskedDate2.prototype),
                            '_update',
                            this,
                        ).call(this, opts)
                },
            },
            {
                key: 'doValidate',
                value: function () {
                    for (
                        var _get2,
                            date = this.date,
                            _len = arguments.length,
                            args = new Array(_len),
                            _key = 0;
                        _key < _len;
                        _key++
                    )
                        args[_key] = arguments[_key]
                    return (
                        (_get2 = _get(
                            _getPrototypeOf(MaskedDate2.prototype),
                            'doValidate',
                            this,
                        )).call.apply(_get2, [this].concat(args)) &&
                        (!this.isComplete ||
                            (this.isDateExist(this.value) &&
                                date != null &&
                                (this.min == null || this.min <= date) &&
                                (this.max == null || date <= this.max)))
                    )
                },
            },
            {
                key: 'isDateExist',
                value: function (str) {
                    return (
                        this.format(this.parse(str, this), this).indexOf(str) >=
                        0
                    )
                },
            },
            {
                key: 'date',
                get: function () {
                    return this.typedValue
                },
                set: function (date) {
                    this.typedValue = date
                },
            },
            {
                key: 'typedValue',
                get: function () {
                    return this.isComplete
                        ? _get(
                              _getPrototypeOf(MaskedDate2.prototype),
                              'typedValue',
                              this,
                          )
                        : null
                },
                set: function (value) {
                    _set(
                        _getPrototypeOf(MaskedDate2.prototype),
                        'typedValue',
                        value,
                        this,
                        !0,
                    )
                },
            },
            {
                key: 'maskEquals',
                value: function (mask) {
                    return (
                        mask === Date ||
                        _get(
                            _getPrototypeOf(MaskedDate2.prototype),
                            'maskEquals',
                            this,
                        ).call(this, mask)
                    )
                },
            },
        ]),
        MaskedDate2
    )
})(MaskedPattern)
MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function (date) {
        if (!date) return ''
        var day = String(date.getDate()).padStart(2, '0'),
            month = String(date.getMonth() + 1).padStart(2, '0'),
            year = date.getFullYear()
        return [day, month, year].join('.')
    },
    parse: function (str) {
        var _str$split = str.split('.'),
            _str$split2 = _slicedToArray(_str$split, 3),
            day = _str$split2[0],
            month = _str$split2[1],
            year = _str$split2[2]
        return new Date(year, month - 1, day)
    },
}
MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
        d: { mask: MaskedRange, from: 1, to: 31, maxLength: 2 },
        m: { mask: MaskedRange, from: 1, to: 12, maxLength: 2 },
        Y: { mask: MaskedRange, from: 1900, to: 9999 },
    }
}
IMask.MaskedDate = MaskedDate
var MaskElement = (function () {
    function MaskElement2() {
        _classCallCheck(this, MaskElement2)
    }
    return (
        _createClass(MaskElement2, [
            {
                key: 'selectionStart',
                get: function () {
                    var start
                    try {
                        start = this._unsafeSelectionStart
                    } catch (e) {}
                    return start ?? this.value.length
                },
            },
            {
                key: 'selectionEnd',
                get: function () {
                    var end
                    try {
                        end = this._unsafeSelectionEnd
                    } catch (e) {}
                    return end ?? this.value.length
                },
            },
            {
                key: 'select',
                value: function (start, end) {
                    if (
                        !(
                            start == null ||
                            end == null ||
                            (start === this.selectionStart &&
                                end === this.selectionEnd)
                        )
                    )
                        try {
                            this._unsafeSelect(start, end)
                        } catch (e) {}
                },
            },
            { key: '_unsafeSelect', value: function (start, end) {} },
            {
                key: 'isActive',
                get: function () {
                    return !1
                },
            },
            { key: 'bindEvents', value: function (handlers) {} },
            { key: 'unbindEvents', value: function () {} },
        ]),
        MaskElement2
    )
})()
IMask.MaskElement = MaskElement
var HTMLMaskElement = (function (_MaskElement) {
    _inherits(HTMLMaskElement2, _MaskElement)
    var _super = _createSuper(HTMLMaskElement2)
    function HTMLMaskElement2(input) {
        var _this
        return (
            _classCallCheck(this, HTMLMaskElement2),
            (_this = _super.call(this)),
            (_this.input = input),
            (_this._handlers = {}),
            _this
        )
    }
    return (
        _createClass(HTMLMaskElement2, [
            {
                key: 'rootElement',
                get: function () {
                    var _this$input$getRootNo,
                        _this$input$getRootNo2,
                        _this$input
                    return (_this$input$getRootNo =
                        (_this$input$getRootNo2 = (_this$input = this.input)
                            .getRootNode) === null ||
                        _this$input$getRootNo2 === void 0
                            ? void 0
                            : _this$input$getRootNo2.call(_this$input)) !==
                        null && _this$input$getRootNo !== void 0
                        ? _this$input$getRootNo
                        : document
                },
            },
            {
                key: 'isActive',
                get: function () {
                    return this.input === this.rootElement.activeElement
                },
            },
            {
                key: '_unsafeSelectionStart',
                get: function () {
                    return this.input.selectionStart
                },
            },
            {
                key: '_unsafeSelectionEnd',
                get: function () {
                    return this.input.selectionEnd
                },
            },
            {
                key: '_unsafeSelect',
                value: function (start, end) {
                    this.input.setSelectionRange(start, end)
                },
            },
            {
                key: 'value',
                get: function () {
                    return this.input.value
                },
                set: function (value) {
                    this.input.value = value
                },
            },
            {
                key: 'bindEvents',
                value: function (handlers) {
                    var _this2 = this
                    Object.keys(handlers).forEach(function (event) {
                        return _this2._toggleEventHandler(
                            HTMLMaskElement2.EVENTS_MAP[event],
                            handlers[event],
                        )
                    })
                },
            },
            {
                key: 'unbindEvents',
                value: function () {
                    var _this3 = this
                    Object.keys(this._handlers).forEach(function (event) {
                        return _this3._toggleEventHandler(event)
                    })
                },
            },
            {
                key: '_toggleEventHandler',
                value: function (event, handler) {
                    this._handlers[event] &&
                        (this.input.removeEventListener(
                            event,
                            this._handlers[event],
                        ),
                        delete this._handlers[event]),
                        handler &&
                            (this.input.addEventListener(event, handler),
                            (this._handlers[event] = handler))
                },
            },
        ]),
        HTMLMaskElement2
    )
})(MaskElement)
HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur',
}
IMask.HTMLMaskElement = HTMLMaskElement
var HTMLContenteditableMaskElement = (function (_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement2, _HTMLMaskElement)
    var _super = _createSuper(HTMLContenteditableMaskElement2)
    function HTMLContenteditableMaskElement2() {
        return (
            _classCallCheck(this, HTMLContenteditableMaskElement2),
            _super.apply(this, arguments)
        )
    }
    return (
        _createClass(HTMLContenteditableMaskElement2, [
            {
                key: '_unsafeSelectionStart',
                get: function () {
                    var root = this.rootElement,
                        selection = root.getSelection && root.getSelection(),
                        anchorOffset = selection && selection.anchorOffset,
                        focusOffset = selection && selection.focusOffset
                    return focusOffset == null ||
                        anchorOffset == null ||
                        anchorOffset < focusOffset
                        ? anchorOffset
                        : focusOffset
                },
            },
            {
                key: '_unsafeSelectionEnd',
                get: function () {
                    var root = this.rootElement,
                        selection = root.getSelection && root.getSelection(),
                        anchorOffset = selection && selection.anchorOffset,
                        focusOffset = selection && selection.focusOffset
                    return focusOffset == null ||
                        anchorOffset == null ||
                        anchorOffset > focusOffset
                        ? anchorOffset
                        : focusOffset
                },
            },
            {
                key: '_unsafeSelect',
                value: function (start, end) {
                    if (!!this.rootElement.createRange) {
                        var range = this.rootElement.createRange()
                        range.setStart(
                            this.input.firstChild || this.input,
                            start,
                        ),
                            range.setEnd(
                                this.input.lastChild || this.input,
                                end,
                            )
                        var root = this.rootElement,
                            selection = root.getSelection && root.getSelection()
                        selection &&
                            (selection.removeAllRanges(),
                            selection.addRange(range))
                    }
                },
            },
            {
                key: 'value',
                get: function () {
                    return this.input.textContent
                },
                set: function (value) {
                    this.input.textContent = value
                },
            },
        ]),
        HTMLContenteditableMaskElement2
    )
})(HTMLMaskElement)
IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement
var _excluded4 = ['mask'],
    InputMask = (function () {
        function InputMask2(el, opts) {
            _classCallCheck(this, InputMask2),
                (this.el =
                    el instanceof MaskElement
                        ? el
                        : el.isContentEditable &&
                          el.tagName !== 'INPUT' &&
                          el.tagName !== 'TEXTAREA'
                        ? new HTMLContenteditableMaskElement(el)
                        : new HTMLMaskElement(el)),
                (this.masked = createMask(opts)),
                (this._listeners = {}),
                (this._value = ''),
                (this._unmaskedValue = ''),
                (this._saveSelection = this._saveSelection.bind(this)),
                (this._onInput = this._onInput.bind(this)),
                (this._onChange = this._onChange.bind(this)),
                (this._onDrop = this._onDrop.bind(this)),
                (this._onFocus = this._onFocus.bind(this)),
                (this._onClick = this._onClick.bind(this)),
                (this.alignCursor = this.alignCursor.bind(this)),
                (this.alignCursorFriendly =
                    this.alignCursorFriendly.bind(this)),
                this._bindEvents(),
                this.updateValue(),
                this._onChange()
        }
        return (
            _createClass(InputMask2, [
                {
                    key: 'mask',
                    get: function () {
                        return this.masked.mask
                    },
                    set: function (mask) {
                        if (!this.maskEquals(mask)) {
                            if (
                                !(mask instanceof IMask.Masked) &&
                                this.masked.constructor === maskedClass(mask)
                            ) {
                                this.masked.updateOptions({ mask })
                                return
                            }
                            var masked = createMask({ mask })
                            ;(masked.unmaskedValue = this.masked.unmaskedValue),
                                (this.masked = masked)
                        }
                    },
                },
                {
                    key: 'maskEquals',
                    value: function (mask) {
                        var _this$masked
                        return (
                            mask == null ||
                            ((_this$masked = this.masked) === null ||
                            _this$masked === void 0
                                ? void 0
                                : _this$masked.maskEquals(mask))
                        )
                    },
                },
                {
                    key: 'value',
                    get: function () {
                        return this._value
                    },
                    set: function (str) {
                        this.value !== str &&
                            ((this.masked.value = str),
                            this.updateControl(),
                            this.alignCursor())
                    },
                },
                {
                    key: 'unmaskedValue',
                    get: function () {
                        return this._unmaskedValue
                    },
                    set: function (str) {
                        this.unmaskedValue !== str &&
                            ((this.masked.unmaskedValue = str),
                            this.updateControl(),
                            this.alignCursor())
                    },
                },
                {
                    key: 'typedValue',
                    get: function () {
                        return this.masked.typedValue
                    },
                    set: function (val) {
                        this.masked.typedValueEquals(val) ||
                            ((this.masked.typedValue = val),
                            this.updateControl(),
                            this.alignCursor())
                    },
                },
                {
                    key: '_bindEvents',
                    value: function () {
                        this.el.bindEvents({
                            selectionChange: this._saveSelection,
                            input: this._onInput,
                            drop: this._onDrop,
                            click: this._onClick,
                            focus: this._onFocus,
                            commit: this._onChange,
                        })
                    },
                },
                {
                    key: '_unbindEvents',
                    value: function () {
                        this.el && this.el.unbindEvents()
                    },
                },
                {
                    key: '_fireEvent',
                    value: function (ev) {
                        for (
                            var _len = arguments.length,
                                args = new Array(_len > 1 ? _len - 1 : 0),
                                _key = 1;
                            _key < _len;
                            _key++
                        )
                            args[_key - 1] = arguments[_key]
                        var listeners = this._listeners[ev]
                        !listeners ||
                            listeners.forEach(function (l) {
                                return l.apply(void 0, args)
                            })
                    },
                },
                {
                    key: 'selectionStart',
                    get: function () {
                        return this._cursorChanging
                            ? this._changingCursorPos
                            : this.el.selectionStart
                    },
                },
                {
                    key: 'cursorPos',
                    get: function () {
                        return this._cursorChanging
                            ? this._changingCursorPos
                            : this.el.selectionEnd
                    },
                    set: function (pos) {
                        !this.el ||
                            !this.el.isActive ||
                            (this.el.select(pos, pos), this._saveSelection())
                    },
                },
                {
                    key: '_saveSelection',
                    value: function () {
                        this.value !== this.el.value &&
                            console.warn(
                                'Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.',
                            ),
                            (this._selection = {
                                start: this.selectionStart,
                                end: this.cursorPos,
                            })
                    },
                },
                {
                    key: 'updateValue',
                    value: function () {
                        ;(this.masked.value = this.el.value),
                            (this._value = this.masked.value)
                    },
                },
                {
                    key: 'updateControl',
                    value: function () {
                        var newUnmaskedValue = this.masked.unmaskedValue,
                            newValue = this.masked.value,
                            isChanged =
                                this.unmaskedValue !== newUnmaskedValue ||
                                this.value !== newValue
                        ;(this._unmaskedValue = newUnmaskedValue),
                            (this._value = newValue),
                            this.el.value !== newValue &&
                                (this.el.value = newValue),
                            isChanged && this._fireChangeEvents()
                    },
                },
                {
                    key: 'updateOptions',
                    value: function (opts) {
                        var mask = opts.mask,
                            restOpts = _objectWithoutProperties(
                                opts,
                                _excluded4,
                            ),
                            updateMask = !this.maskEquals(mask),
                            updateOpts = !objectIncludes(this.masked, restOpts)
                        updateMask && (this.mask = mask),
                            updateOpts && this.masked.updateOptions(restOpts),
                            (updateMask || updateOpts) && this.updateControl()
                    },
                },
                {
                    key: 'updateCursor',
                    value: function (cursorPos) {
                        cursorPos != null &&
                            ((this.cursorPos = cursorPos),
                            this._delayUpdateCursor(cursorPos))
                    },
                },
                {
                    key: '_delayUpdateCursor',
                    value: function (cursorPos) {
                        var _this = this
                        this._abortUpdateCursor(),
                            (this._changingCursorPos = cursorPos),
                            (this._cursorChanging = setTimeout(function () {
                                !_this.el ||
                                    ((_this.cursorPos =
                                        _this._changingCursorPos),
                                    _this._abortUpdateCursor())
                            }, 10))
                    },
                },
                {
                    key: '_fireChangeEvents',
                    value: function () {
                        this._fireEvent('accept', this._inputEvent),
                            this.masked.isComplete &&
                                this._fireEvent('complete', this._inputEvent)
                    },
                },
                {
                    key: '_abortUpdateCursor',
                    value: function () {
                        this._cursorChanging &&
                            (clearTimeout(this._cursorChanging),
                            delete this._cursorChanging)
                    },
                },
                {
                    key: 'alignCursor',
                    value: function () {
                        this.cursorPos = this.masked.nearestInputPos(
                            this.masked.nearestInputPos(
                                this.cursorPos,
                                DIRECTION.LEFT,
                            ),
                        )
                    },
                },
                {
                    key: 'alignCursorFriendly',
                    value: function () {
                        this.selectionStart === this.cursorPos &&
                            this.alignCursor()
                    },
                },
                {
                    key: 'on',
                    value: function (ev, handler) {
                        return (
                            this._listeners[ev] || (this._listeners[ev] = []),
                            this._listeners[ev].push(handler),
                            this
                        )
                    },
                },
                {
                    key: 'off',
                    value: function (ev, handler) {
                        if (!this._listeners[ev]) return this
                        if (!handler) return delete this._listeners[ev], this
                        var hIndex = this._listeners[ev].indexOf(handler)
                        return (
                            hIndex >= 0 &&
                                this._listeners[ev].splice(hIndex, 1),
                            this
                        )
                    },
                },
                {
                    key: '_onInput',
                    value: function (e) {
                        if (
                            ((this._inputEvent = e),
                            this._abortUpdateCursor(),
                            !this._selection)
                        )
                            return this.updateValue()
                        var details = new ActionDetails(
                                this.el.value,
                                this.cursorPos,
                                this.value,
                                this._selection,
                            ),
                            oldRawValue = this.masked.rawInputValue,
                            offset = this.masked.splice(
                                details.startChangePos,
                                details.removed.length,
                                details.inserted,
                                details.removeDirection,
                                { input: !0, raw: !0 },
                            ).offset,
                            removeDirection =
                                oldRawValue === this.masked.rawInputValue
                                    ? details.removeDirection
                                    : DIRECTION.NONE,
                            cursorPos = this.masked.nearestInputPos(
                                details.startChangePos + offset,
                                removeDirection,
                            )
                        removeDirection !== DIRECTION.NONE &&
                            (cursorPos = this.masked.nearestInputPos(
                                cursorPos,
                                DIRECTION.NONE,
                            )),
                            this.updateControl(),
                            this.updateCursor(cursorPos),
                            delete this._inputEvent
                    },
                },
                {
                    key: '_onChange',
                    value: function () {
                        this.value !== this.el.value && this.updateValue(),
                            this.masked.doCommit(),
                            this.updateControl(),
                            this._saveSelection()
                    },
                },
                {
                    key: '_onDrop',
                    value: function (ev) {
                        ev.preventDefault(), ev.stopPropagation()
                    },
                },
                {
                    key: '_onFocus',
                    value: function (ev) {
                        this.alignCursorFriendly()
                    },
                },
                {
                    key: '_onClick',
                    value: function (ev) {
                        this.alignCursorFriendly()
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        this._unbindEvents(),
                            (this._listeners.length = 0),
                            delete this.el
                    },
                },
            ]),
            InputMask2
        )
    })()
IMask.InputMask = InputMask
var MaskedEnum = (function (_MaskedPattern) {
    _inherits(MaskedEnum2, _MaskedPattern)
    var _super = _createSuper(MaskedEnum2)
    function MaskedEnum2() {
        return _classCallCheck(this, MaskedEnum2), _super.apply(this, arguments)
    }
    return (
        _createClass(MaskedEnum2, [
            {
                key: '_update',
                value: function (opts) {
                    opts.enum && (opts.mask = '*'.repeat(opts.enum[0].length)),
                        _get(
                            _getPrototypeOf(MaskedEnum2.prototype),
                            '_update',
                            this,
                        ).call(this, opts)
                },
            },
            {
                key: 'doValidate',
                value: function () {
                    for (
                        var _this = this,
                            _get2,
                            _len = arguments.length,
                            args = new Array(_len),
                            _key = 0;
                        _key < _len;
                        _key++
                    )
                        args[_key] = arguments[_key]
                    return (
                        this.enum.some(function (e) {
                            return e.indexOf(_this.unmaskedValue) >= 0
                        }) &&
                        (_get2 = _get(
                            _getPrototypeOf(MaskedEnum2.prototype),
                            'doValidate',
                            this,
                        )).call.apply(_get2, [this].concat(args))
                    )
                },
            },
        ]),
        MaskedEnum2
    )
})(MaskedPattern)
IMask.MaskedEnum = MaskedEnum
var MaskedNumber = (function (_Masked) {
    _inherits(MaskedNumber2, _Masked)
    var _super = _createSuper(MaskedNumber2)
    function MaskedNumber2(opts) {
        return (
            _classCallCheck(this, MaskedNumber2),
            _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts))
        )
    }
    return (
        _createClass(MaskedNumber2, [
            {
                key: '_update',
                value: function (opts) {
                    _get(
                        _getPrototypeOf(MaskedNumber2.prototype),
                        '_update',
                        this,
                    ).call(this, opts),
                        this._updateRegExps()
                },
            },
            {
                key: '_updateRegExps',
                value: function () {
                    var start = '^' + (this.allowNegative ? '[+|\\-]?' : ''),
                        midInput = '(0|([1-9]+\\d*))?',
                        mid = '\\d*',
                        end =
                            (this.scale
                                ? '(' +
                                  escapeRegExp(this.radix) +
                                  '\\d{0,' +
                                  this.scale +
                                  '})?'
                                : '') + '$'
                    ;(this._numberRegExpInput = new RegExp(
                        start + midInput + end,
                    )),
                        (this._numberRegExp = new RegExp(start + mid + end)),
                        (this._mapToRadixRegExp = new RegExp(
                            '[' +
                                this.mapToRadix.map(escapeRegExp).join('') +
                                ']',
                            'g',
                        )),
                        (this._thousandsSeparatorRegExp = new RegExp(
                            escapeRegExp(this.thousandsSeparator),
                            'g',
                        ))
                },
            },
            {
                key: '_removeThousandsSeparators',
                value: function (value) {
                    return value.replace(this._thousandsSeparatorRegExp, '')
                },
            },
            {
                key: '_insertThousandsSeparators',
                value: function (value) {
                    var parts = value.split(this.radix)
                    return (
                        (parts[0] = parts[0].replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            this.thousandsSeparator,
                        )),
                        parts.join(this.radix)
                    )
                },
            },
            {
                key: 'doPrepare',
                value: function (ch) {
                    var _get2
                    ch = ch.replace(this._mapToRadixRegExp, this.radix)
                    for (
                        var noSepCh = this._removeThousandsSeparators(ch),
                            _len = arguments.length,
                            args = new Array(_len > 1 ? _len - 1 : 0),
                            _key = 1;
                        _key < _len;
                        _key++
                    )
                        args[_key - 1] = arguments[_key]
                    var _normalizePrepare = normalizePrepare(
                            (_get2 = _get(
                                _getPrototypeOf(MaskedNumber2.prototype),
                                'doPrepare',
                                this,
                            )).call.apply(_get2, [this, noSepCh].concat(args)),
                        ),
                        _normalizePrepare2 = _slicedToArray(
                            _normalizePrepare,
                            2,
                        ),
                        prepCh = _normalizePrepare2[0],
                        details = _normalizePrepare2[1]
                    return (
                        ch && !noSepCh && (details.skip = !0), [prepCh, details]
                    )
                },
            },
            {
                key: '_separatorsCount',
                value: function (to) {
                    for (
                        var extendOnSeparators =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : !1,
                            count = 0,
                            pos = 0;
                        pos < to;
                        ++pos
                    )
                        this._value.indexOf(this.thousandsSeparator, pos) ===
                            pos &&
                            (++count,
                            extendOnSeparators &&
                                (to += this.thousandsSeparator.length))
                    return count
                },
            },
            {
                key: '_separatorsCountFromSlice',
                value: function () {
                    var slice =
                        arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : this._value
                    return this._separatorsCount(
                        this._removeThousandsSeparators(slice).length,
                        !0,
                    )
                },
            },
            {
                key: 'extractInput',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this.value.length,
                        flags = arguments.length > 2 ? arguments[2] : void 0,
                        _this$_adjustRangeWit = this._adjustRangeWithSeparators(
                            fromPos,
                            toPos,
                        ),
                        _this$_adjustRangeWit2 = _slicedToArray(
                            _this$_adjustRangeWit,
                            2,
                        )
                    return (
                        (fromPos = _this$_adjustRangeWit2[0]),
                        (toPos = _this$_adjustRangeWit2[1]),
                        this._removeThousandsSeparators(
                            _get(
                                _getPrototypeOf(MaskedNumber2.prototype),
                                'extractInput',
                                this,
                            ).call(this, fromPos, toPos, flags),
                        )
                    )
                },
            },
            {
                key: '_appendCharRaw',
                value: function (ch) {
                    var flags =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {}
                    if (!this.thousandsSeparator)
                        return _get(
                            _getPrototypeOf(MaskedNumber2.prototype),
                            '_appendCharRaw',
                            this,
                        ).call(this, ch, flags)
                    var prevBeforeTailValue =
                            flags.tail && flags._beforeTailState
                                ? flags._beforeTailState._value
                                : this._value,
                        prevBeforeTailSeparatorsCount =
                            this._separatorsCountFromSlice(prevBeforeTailValue)
                    this._value = this._removeThousandsSeparators(this.value)
                    var appendDetails = _get(
                        _getPrototypeOf(MaskedNumber2.prototype),
                        '_appendCharRaw',
                        this,
                    ).call(this, ch, flags)
                    this._value = this._insertThousandsSeparators(this._value)
                    var beforeTailValue =
                            flags.tail && flags._beforeTailState
                                ? flags._beforeTailState._value
                                : this._value,
                        beforeTailSeparatorsCount =
                            this._separatorsCountFromSlice(beforeTailValue)
                    return (
                        (appendDetails.tailShift +=
                            (beforeTailSeparatorsCount -
                                prevBeforeTailSeparatorsCount) *
                            this.thousandsSeparator.length),
                        (appendDetails.skip =
                            !appendDetails.rawInserted &&
                            ch === this.thousandsSeparator),
                        appendDetails
                    )
                },
            },
            {
                key: '_findSeparatorAround',
                value: function (pos) {
                    if (this.thousandsSeparator) {
                        var searchFrom =
                                pos - this.thousandsSeparator.length + 1,
                            separatorPos = this.value.indexOf(
                                this.thousandsSeparator,
                                searchFrom,
                            )
                        if (separatorPos <= pos) return separatorPos
                    }
                    return -1
                },
            },
            {
                key: '_adjustRangeWithSeparators',
                value: function (from, to) {
                    var separatorAroundFromPos = this._findSeparatorAround(from)
                    separatorAroundFromPos >= 0 &&
                        (from = separatorAroundFromPos)
                    var separatorAroundToPos = this._findSeparatorAround(to)
                    return (
                        separatorAroundToPos >= 0 &&
                            (to =
                                separatorAroundToPos +
                                this.thousandsSeparator.length),
                        [from, to]
                    )
                },
            },
            {
                key: 'remove',
                value: function () {
                    var fromPos =
                            arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : 0,
                        toPos =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : this.value.length,
                        _this$_adjustRangeWit3 =
                            this._adjustRangeWithSeparators(fromPos, toPos),
                        _this$_adjustRangeWit4 = _slicedToArray(
                            _this$_adjustRangeWit3,
                            2,
                        )
                    ;(fromPos = _this$_adjustRangeWit4[0]),
                        (toPos = _this$_adjustRangeWit4[1])
                    var valueBeforePos = this.value.slice(0, fromPos),
                        valueAfterPos = this.value.slice(toPos),
                        prevBeforeTailSeparatorsCount = this._separatorsCount(
                            valueBeforePos.length,
                        )
                    this._value = this._insertThousandsSeparators(
                        this._removeThousandsSeparators(
                            valueBeforePos + valueAfterPos,
                        ),
                    )
                    var beforeTailSeparatorsCount =
                        this._separatorsCountFromSlice(valueBeforePos)
                    return new ChangeDetails({
                        tailShift:
                            (beforeTailSeparatorsCount -
                                prevBeforeTailSeparatorsCount) *
                            this.thousandsSeparator.length,
                    })
                },
            },
            {
                key: 'nearestInputPos',
                value: function (cursorPos, direction) {
                    if (!this.thousandsSeparator) return cursorPos
                    switch (direction) {
                        case DIRECTION.NONE:
                        case DIRECTION.LEFT:
                        case DIRECTION.FORCE_LEFT: {
                            var separatorAtLeftPos = this._findSeparatorAround(
                                cursorPos - 1,
                            )
                            if (separatorAtLeftPos >= 0) {
                                var separatorAtLeftEndPos =
                                    separatorAtLeftPos +
                                    this.thousandsSeparator.length
                                if (
                                    cursorPos < separatorAtLeftEndPos ||
                                    this.value.length <=
                                        separatorAtLeftEndPos ||
                                    direction === DIRECTION.FORCE_LEFT
                                )
                                    return separatorAtLeftPos
                            }
                            break
                        }
                        case DIRECTION.RIGHT:
                        case DIRECTION.FORCE_RIGHT: {
                            var separatorAtRightPos =
                                this._findSeparatorAround(cursorPos)
                            if (separatorAtRightPos >= 0)
                                return (
                                    separatorAtRightPos +
                                    this.thousandsSeparator.length
                                )
                        }
                    }
                    return cursorPos
                },
            },
            {
                key: 'doValidate',
                value: function (flags) {
                    var regexp = flags.input
                            ? this._numberRegExpInput
                            : this._numberRegExp,
                        valid = regexp.test(
                            this._removeThousandsSeparators(this.value),
                        )
                    if (valid) {
                        var number = this.number
                        valid =
                            valid &&
                            !isNaN(number) &&
                            (this.min == null ||
                                this.min >= 0 ||
                                this.min <= this.number) &&
                            (this.max == null ||
                                this.max <= 0 ||
                                this.number <= this.max)
                    }
                    return (
                        valid &&
                        _get(
                            _getPrototypeOf(MaskedNumber2.prototype),
                            'doValidate',
                            this,
                        ).call(this, flags)
                    )
                },
            },
            {
                key: 'doCommit',
                value: function () {
                    if (this.value) {
                        var number = this.number,
                            validnum = number
                        this.min != null &&
                            (validnum = Math.max(validnum, this.min)),
                            this.max != null &&
                                (validnum = Math.min(validnum, this.max)),
                            validnum !== number &&
                                (this.unmaskedValue = String(validnum))
                        var formatted = this.value
                        this.normalizeZeros &&
                            (formatted = this._normalizeZeros(formatted)),
                            this.padFractionalZeros &&
                                this.scale > 0 &&
                                (formatted =
                                    this._padFractionalZeros(formatted)),
                            (this._value = formatted)
                    }
                    _get(
                        _getPrototypeOf(MaskedNumber2.prototype),
                        'doCommit',
                        this,
                    ).call(this)
                },
            },
            {
                key: '_normalizeZeros',
                value: function (value) {
                    var parts = this._removeThousandsSeparators(value).split(
                        this.radix,
                    )
                    return (
                        (parts[0] = parts[0].replace(
                            /^(\D*)(0*)(\d*)/,
                            function (match, sign, zeros, num) {
                                return sign + num
                            },
                        )),
                        value.length &&
                            !/\d$/.test(parts[0]) &&
                            (parts[0] = parts[0] + '0'),
                        parts.length > 1 &&
                            ((parts[1] = parts[1].replace(/0*$/, '')),
                            parts[1].length || (parts.length = 1)),
                        this._insertThousandsSeparators(parts.join(this.radix))
                    )
                },
            },
            {
                key: '_padFractionalZeros',
                value: function (value) {
                    if (!value) return value
                    var parts = value.split(this.radix)
                    return (
                        parts.length < 2 && parts.push(''),
                        (parts[1] = parts[1].padEnd(this.scale, '0')),
                        parts.join(this.radix)
                    )
                },
            },
            {
                key: 'unmaskedValue',
                get: function () {
                    return this._removeThousandsSeparators(
                        this._normalizeZeros(this.value),
                    ).replace(this.radix, '.')
                },
                set: function (unmaskedValue) {
                    _set(
                        _getPrototypeOf(MaskedNumber2.prototype),
                        'unmaskedValue',
                        unmaskedValue.replace('.', this.radix),
                        this,
                        !0,
                    )
                },
            },
            {
                key: 'typedValue',
                get: function () {
                    return Number(this.unmaskedValue)
                },
                set: function (n) {
                    _set(
                        _getPrototypeOf(MaskedNumber2.prototype),
                        'unmaskedValue',
                        String(n),
                        this,
                        !0,
                    )
                },
            },
            {
                key: 'number',
                get: function () {
                    return this.typedValue
                },
                set: function (number) {
                    this.typedValue = number
                },
            },
            {
                key: 'allowNegative',
                get: function () {
                    return (
                        this.signed ||
                        (this.min != null && this.min < 0) ||
                        (this.max != null && this.max < 0)
                    )
                },
            },
            {
                key: 'typedValueEquals',
                value: function (value) {
                    return (
                        (_get(
                            _getPrototypeOf(MaskedNumber2.prototype),
                            'typedValueEquals',
                            this,
                        ).call(this, value) ||
                            (MaskedNumber2.EMPTY_VALUES.includes(value) &&
                                MaskedNumber2.EMPTY_VALUES.includes(
                                    this.typedValue,
                                ))) &&
                        !(value === 0 && this.value === '')
                    )
                },
            },
        ]),
        MaskedNumber2
    )
})(Masked)
MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1,
}
MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [
    0,
])
IMask.MaskedNumber = MaskedNumber
var MaskedFunction = (function (_Masked) {
    _inherits(MaskedFunction2, _Masked)
    var _super = _createSuper(MaskedFunction2)
    function MaskedFunction2() {
        return (
            _classCallCheck(this, MaskedFunction2),
            _super.apply(this, arguments)
        )
    }
    return (
        _createClass(MaskedFunction2, [
            {
                key: '_update',
                value: function (opts) {
                    opts.mask && (opts.validate = opts.mask),
                        _get(
                            _getPrototypeOf(MaskedFunction2.prototype),
                            '_update',
                            this,
                        ).call(this, opts)
                },
            },
        ]),
        MaskedFunction2
    )
})(Masked)
IMask.MaskedFunction = MaskedFunction
var _excluded5 = ['compiledMasks', 'currentMaskRef', 'currentMask'],
    MaskedDynamic = (function (_Masked) {
        _inherits(MaskedDynamic2, _Masked)
        var _super = _createSuper(MaskedDynamic2)
        function MaskedDynamic2(opts) {
            var _this
            return (
                _classCallCheck(this, MaskedDynamic2),
                (_this = _super.call(
                    this,
                    Object.assign({}, MaskedDynamic2.DEFAULTS, opts),
                )),
                (_this.currentMask = null),
                _this
            )
        }
        return (
            _createClass(MaskedDynamic2, [
                {
                    key: '_update',
                    value: function (opts) {
                        _get(
                            _getPrototypeOf(MaskedDynamic2.prototype),
                            '_update',
                            this,
                        ).call(this, opts),
                            'mask' in opts &&
                                (this.compiledMasks = Array.isArray(opts.mask)
                                    ? opts.mask.map(function (m) {
                                          return createMask(m)
                                      })
                                    : [])
                    },
                },
                {
                    key: '_appendCharRaw',
                    value: function (ch) {
                        var flags =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : {},
                            details = this._applyDispatch(ch, flags)
                        return (
                            this.currentMask &&
                                details.aggregate(
                                    this.currentMask._appendChar(
                                        ch,
                                        this.currentMaskFlags(flags),
                                    ),
                                ),
                            details
                        )
                    },
                },
                {
                    key: '_applyDispatch',
                    value: function () {
                        var appended =
                                arguments.length > 0 && arguments[0] !== void 0
                                    ? arguments[0]
                                    : '',
                            flags =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : {},
                            prevValueBeforeTail =
                                flags.tail && flags._beforeTailState != null
                                    ? flags._beforeTailState._value
                                    : this.value,
                            inputValue = this.rawInputValue,
                            insertValue =
                                flags.tail && flags._beforeTailState != null
                                    ? flags._beforeTailState._rawInputValue
                                    : inputValue,
                            tailValue = inputValue.slice(insertValue.length),
                            prevMask = this.currentMask,
                            details = new ChangeDetails(),
                            prevMaskState =
                                prevMask == null ? void 0 : prevMask.state
                        if (
                            ((this.currentMask = this.doDispatch(
                                appended,
                                Object.assign({}, flags),
                            )),
                            this.currentMask)
                        )
                            if (this.currentMask !== prevMask) {
                                if ((this.currentMask.reset(), insertValue)) {
                                    var d = this.currentMask.append(
                                        insertValue,
                                        { raw: !0 },
                                    )
                                    details.tailShift =
                                        d.inserted.length -
                                        prevValueBeforeTail.length
                                }
                                tailValue &&
                                    (details.tailShift +=
                                        this.currentMask.append(tailValue, {
                                            raw: !0,
                                            tail: !0,
                                        }).tailShift)
                            } else this.currentMask.state = prevMaskState
                        return details
                    },
                },
                {
                    key: '_appendPlaceholder',
                    value: function () {
                        var details = this._applyDispatch.apply(this, arguments)
                        return (
                            this.currentMask &&
                                details.aggregate(
                                    this.currentMask._appendPlaceholder(),
                                ),
                            details
                        )
                    },
                },
                {
                    key: '_appendEager',
                    value: function () {
                        var details = this._applyDispatch.apply(this, arguments)
                        return (
                            this.currentMask &&
                                details.aggregate(
                                    this.currentMask._appendEager(),
                                ),
                            details
                        )
                    },
                },
                {
                    key: 'currentMaskFlags',
                    value: function (flags) {
                        var _flags$_beforeTailSta, _flags$_beforeTailSta2
                        return Object.assign({}, flags, {
                            _beforeTailState:
                                (((_flags$_beforeTailSta =
                                    flags._beforeTailState) === null ||
                                _flags$_beforeTailSta === void 0
                                    ? void 0
                                    : _flags$_beforeTailSta.currentMaskRef) ===
                                    this.currentMask &&
                                    ((_flags$_beforeTailSta2 =
                                        flags._beforeTailState) === null ||
                                    _flags$_beforeTailSta2 === void 0
                                        ? void 0
                                        : _flags$_beforeTailSta2.currentMask)) ||
                                flags._beforeTailState,
                        })
                    },
                },
                {
                    key: 'doDispatch',
                    value: function (appended) {
                        var flags =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {}
                        return this.dispatch(appended, this, flags)
                    },
                },
                {
                    key: 'doValidate',
                    value: function (flags) {
                        return (
                            _get(
                                _getPrototypeOf(MaskedDynamic2.prototype),
                                'doValidate',
                                this,
                            ).call(this, flags) &&
                            (!this.currentMask ||
                                this.currentMask.doValidate(
                                    this.currentMaskFlags(flags),
                                ))
                        )
                    },
                },
                {
                    key: 'doPrepare',
                    value: function (str) {
                        var flags =
                                arguments.length > 1 && arguments[1] !== void 0
                                    ? arguments[1]
                                    : {},
                            _normalizePrepare = normalizePrepare(
                                _get(
                                    _getPrototypeOf(MaskedDynamic2.prototype),
                                    'doPrepare',
                                    this,
                                ).call(this, str, flags),
                            ),
                            _normalizePrepare2 = _slicedToArray(
                                _normalizePrepare,
                                2,
                            ),
                            s = _normalizePrepare2[0],
                            details = _normalizePrepare2[1]
                        if (this.currentMask) {
                            var currentDetails,
                                _normalizePrepare3 = normalizePrepare(
                                    _get(
                                        _getPrototypeOf(
                                            MaskedDynamic2.prototype,
                                        ),
                                        'doPrepare',
                                        this,
                                    ).call(
                                        this,
                                        s,
                                        this.currentMaskFlags(flags),
                                    ),
                                ),
                                _normalizePrepare4 = _slicedToArray(
                                    _normalizePrepare3,
                                    2,
                                )
                            ;(s = _normalizePrepare4[0]),
                                (currentDetails = _normalizePrepare4[1]),
                                (details = details.aggregate(currentDetails))
                        }
                        return [s, details]
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        var _this$currentMask
                        ;(_this$currentMask = this.currentMask) === null ||
                            _this$currentMask === void 0 ||
                            _this$currentMask.reset(),
                            this.compiledMasks.forEach(function (m) {
                                return m.reset()
                            })
                    },
                },
                {
                    key: 'value',
                    get: function () {
                        return this.currentMask ? this.currentMask.value : ''
                    },
                    set: function (value) {
                        _set(
                            _getPrototypeOf(MaskedDynamic2.prototype),
                            'value',
                            value,
                            this,
                            !0,
                        )
                    },
                },
                {
                    key: 'unmaskedValue',
                    get: function () {
                        return this.currentMask
                            ? this.currentMask.unmaskedValue
                            : ''
                    },
                    set: function (unmaskedValue) {
                        _set(
                            _getPrototypeOf(MaskedDynamic2.prototype),
                            'unmaskedValue',
                            unmaskedValue,
                            this,
                            !0,
                        )
                    },
                },
                {
                    key: 'typedValue',
                    get: function () {
                        return this.currentMask
                            ? this.currentMask.typedValue
                            : ''
                    },
                    set: function (value) {
                        var unmaskedValue = String(value)
                        this.currentMask &&
                            ((this.currentMask.typedValue = value),
                            (unmaskedValue = this.currentMask.unmaskedValue)),
                            (this.unmaskedValue = unmaskedValue)
                    },
                },
                {
                    key: 'isComplete',
                    get: function () {
                        var _this$currentMask2
                        return Boolean(
                            (_this$currentMask2 = this.currentMask) === null ||
                                _this$currentMask2 === void 0
                                ? void 0
                                : _this$currentMask2.isComplete,
                        )
                    },
                },
                {
                    key: 'isFilled',
                    get: function () {
                        var _this$currentMask3
                        return Boolean(
                            (_this$currentMask3 = this.currentMask) === null ||
                                _this$currentMask3 === void 0
                                ? void 0
                                : _this$currentMask3.isFilled,
                        )
                    },
                },
                {
                    key: 'remove',
                    value: function () {
                        var details = new ChangeDetails()
                        if (this.currentMask) {
                            var _this$currentMask4
                            details
                                .aggregate(
                                    (_this$currentMask4 =
                                        this.currentMask).remove.apply(
                                        _this$currentMask4,
                                        arguments,
                                    ),
                                )
                                .aggregate(this._applyDispatch())
                        }
                        return details
                    },
                },
                {
                    key: 'state',
                    get: function () {
                        var _this$currentMask5
                        return Object.assign(
                            {},
                            _get(
                                _getPrototypeOf(MaskedDynamic2.prototype),
                                'state',
                                this,
                            ),
                            {
                                _rawInputValue: this.rawInputValue,
                                compiledMasks: this.compiledMasks.map(function (
                                    m,
                                ) {
                                    return m.state
                                }),
                                currentMaskRef: this.currentMask,
                                currentMask:
                                    (_this$currentMask5 = this.currentMask) ===
                                        null || _this$currentMask5 === void 0
                                        ? void 0
                                        : _this$currentMask5.state,
                            },
                        )
                    },
                    set: function (state) {
                        var compiledMasks = state.compiledMasks,
                            currentMaskRef = state.currentMaskRef,
                            currentMask = state.currentMask,
                            maskedState = _objectWithoutProperties(
                                state,
                                _excluded5,
                            )
                        this.compiledMasks.forEach(function (m, mi) {
                            return (m.state = compiledMasks[mi])
                        }),
                            currentMaskRef != null &&
                                ((this.currentMask = currentMaskRef),
                                (this.currentMask.state = currentMask)),
                            _set(
                                _getPrototypeOf(MaskedDynamic2.prototype),
                                'state',
                                maskedState,
                                this,
                                !0,
                            )
                    },
                },
                {
                    key: 'extractInput',
                    value: function () {
                        var _this$currentMask6
                        return this.currentMask
                            ? (_this$currentMask6 =
                                  this.currentMask).extractInput.apply(
                                  _this$currentMask6,
                                  arguments,
                              )
                            : ''
                    },
                },
                {
                    key: 'extractTail',
                    value: function () {
                        for (
                            var _this$currentMask7,
                                _get2,
                                _len = arguments.length,
                                args = new Array(_len),
                                _key = 0;
                            _key < _len;
                            _key++
                        )
                            args[_key] = arguments[_key]
                        return this.currentMask
                            ? (_this$currentMask7 =
                                  this.currentMask).extractTail.apply(
                                  _this$currentMask7,
                                  args,
                              )
                            : (_get2 = _get(
                                  _getPrototypeOf(MaskedDynamic2.prototype),
                                  'extractTail',
                                  this,
                              )).call.apply(_get2, [this].concat(args))
                    },
                },
                {
                    key: 'doCommit',
                    value: function () {
                        this.currentMask && this.currentMask.doCommit(),
                            _get(
                                _getPrototypeOf(MaskedDynamic2.prototype),
                                'doCommit',
                                this,
                            ).call(this)
                    },
                },
                {
                    key: 'nearestInputPos',
                    value: function () {
                        for (
                            var _this$currentMask8,
                                _get3,
                                _len2 = arguments.length,
                                args = new Array(_len2),
                                _key2 = 0;
                            _key2 < _len2;
                            _key2++
                        )
                            args[_key2] = arguments[_key2]
                        return this.currentMask
                            ? (_this$currentMask8 =
                                  this.currentMask).nearestInputPos.apply(
                                  _this$currentMask8,
                                  args,
                              )
                            : (_get3 = _get(
                                  _getPrototypeOf(MaskedDynamic2.prototype),
                                  'nearestInputPos',
                                  this,
                              )).call.apply(_get3, [this].concat(args))
                    },
                },
                {
                    key: 'overwrite',
                    get: function () {
                        return this.currentMask
                            ? this.currentMask.overwrite
                            : _get(
                                  _getPrototypeOf(MaskedDynamic2.prototype),
                                  'overwrite',
                                  this,
                              )
                    },
                    set: function (overwrite) {
                        console.warn(
                            '"overwrite" option is not available in dynamic mask, use this option in siblings',
                        )
                    },
                },
                {
                    key: 'eager',
                    get: function () {
                        return this.currentMask
                            ? this.currentMask.eager
                            : _get(
                                  _getPrototypeOf(MaskedDynamic2.prototype),
                                  'eager',
                                  this,
                              )
                    },
                    set: function (eager) {
                        console.warn(
                            '"eager" option is not available in dynamic mask, use this option in siblings',
                        )
                    },
                },
                {
                    key: 'maskEquals',
                    value: function (mask) {
                        return (
                            Array.isArray(mask) &&
                            this.compiledMasks.every(function (m, mi) {
                                var _mask$mi
                                return m.maskEquals(
                                    (_mask$mi = mask[mi]) === null ||
                                        _mask$mi === void 0
                                        ? void 0
                                        : _mask$mi.mask,
                                )
                            })
                        )
                    },
                },
                {
                    key: 'typedValueEquals',
                    value: function (value) {
                        var _this$currentMask9
                        return Boolean(
                            (_this$currentMask9 = this.currentMask) === null ||
                                _this$currentMask9 === void 0
                                ? void 0
                                : _this$currentMask9.typedValueEquals(value),
                        )
                    },
                },
            ]),
            MaskedDynamic2
        )
    })(Masked)
MaskedDynamic.DEFAULTS = {
    dispatch: function (appended, masked, flags) {
        if (!!masked.compiledMasks.length) {
            var inputValue = masked.rawInputValue,
                inputs = masked.compiledMasks.map(function (m, index) {
                    m.reset(),
                        m.append(inputValue, { raw: !0 }),
                        m.append(appended, masked.currentMaskFlags(flags))
                    var weight = m.rawInputValue.length
                    return { weight, index }
                })
            return (
                inputs.sort(function (i1, i2) {
                    return i2.weight - i1.weight
                }),
                masked.compiledMasks[inputs[0].index]
            )
        }
    },
}
IMask.MaskedDynamic = MaskedDynamic
var PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue',
}
function createPipe(mask) {
    var from =
            arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : PIPE_TYPE.MASKED,
        to =
            arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : PIPE_TYPE.MASKED,
        masked = createMask(mask)
    return function (value) {
        return masked.runIsolated(function (m) {
            return (m[from] = value), m[to]
        })
    }
}
function pipe(value) {
    for (
        var _len = arguments.length,
            pipeArgs = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    )
        pipeArgs[_key - 1] = arguments[_key]
    return createPipe.apply(void 0, pipeArgs)(value)
}
IMask.PIPE_TYPE = PIPE_TYPE
IMask.createPipe = createPipe
IMask.pipe = pipe
try {
    globalThis.IMask = IMask
} catch (e) {}
function textInputFormComponent({ getMaskOptionsUsing, state }) {
    return {
        isStateBeingUpdated: !1,
        mask: null,
        state,
        init: function () {
            !getMaskOptionsUsing ||
                (this.state && (this.$el.value = this.state?.valueOf()),
                (this.mask = IMask(this.$el, getMaskOptionsUsing(IMask)).on(
                    'accept',
                    () => {
                        ;(this.isStateBeingUpdated = !0),
                            (this.state = this.mask.unmaskedValue),
                            this.$nextTick(
                                () => (this.isStateBeingUpdated = !1),
                            )
                    },
                )),
                this.$watch('state', () => {
                    this.isStateBeingUpdated ||
                        (this.mask.unmaskedValue = this.state?.valueOf() ?? '')
                }))
        },
    }
}
export { textInputFormComponent as default }
