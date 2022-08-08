class e extends Error {}
class z extends e {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class q extends e {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class A extends e {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class j extends e {}
class _ extends e {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class o extends e {}
class r extends e {
  constructor() {
    super('Zone is an abstract class');
  }
}
var t = 'numeric';
var n = 'short';
var s = 'long';
const U = { year: t, month: t, day: t };
const $ = { year: t, month: n, day: t };
const H = {
  year: t, month: n, day: t, weekday: n,
};
const W = { year: t, month: s, day: t };
const R = {
  year: t, month: s, day: t, weekday: s,
};
const J = { hour: t, minute: t };
const Y = { hour: t, minute: t, second: t };
const P = {
  hour: t, minute: t, second: t, timeZoneName: n,
};
const G = {
  hour: t, minute: t, second: t, timeZoneName: s,
};
const B = { hour: t, minute: t, hourCycle: 'h23' };
const Q = {
  hour: t, minute: t, second: t, hourCycle: 'h23',
};
const K = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: n,
};
const X = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: s,
};
const ee = {
  year: t, month: t, day: t, hour: t, minute: t,
};
const te = {
  year: t, month: t, day: t, hour: t, minute: t, second: t,
};
const re = {
  year: t, month: n, day: t, hour: t, minute: t,
};
const ne = {
  year: t, month: n, day: t, hour: t, minute: t, second: t,
};
const se = {
  year: t, month: n, day: t, weekday: n, hour: t, minute: t,
};
const ie = {
  year: t, month: s, day: t, hour: t, minute: t, timeZoneName: n,
};
const ae = {
  year: t,
  month: s,
  day: t,
  hour: t,
  minute: t,
  second: t,
  timeZoneName: n,
};
const oe = {
  year: t,
  month: s,
  day: t,
  weekday: s,
  hour: t,
  minute: t,
  timeZoneName: s,
};
const ue = {
  year: t,
  month: s,
  day: t,
  weekday: s,
  hour: t,
  minute: t,
  second: t,
  timeZoneName: s,
};
function O(e) {
  return void 0 === e;
}
function c(e) {
  return typeof e === 'number';
}
function le(e) {
  return typeof e === 'number' && e % 1 == 0;
}
function ce(e) {
  return Object.prototype.toString.call(e) === '[object Date]';
}
function he() {
  try {
    return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return !1;
  }
}
function de(e) {
  return Array.isArray(e) ? e : [e];
}
function me(e, r, n) {
  if (e.length !== 0) {
    return e.reduce((e, t) => {
      t = [r(t), t];
      return e && n(e[0], t[0]) === e[0] ? e : t;
    }, null)[1];
  }
}
function h(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t, r) {
  return le(e) && t <= e && e <= r;
}
function l(e, t = 2) {
  let r;
  return (r = e < 0 ? `-${(`${-e}`).padStart(t, '0')}` : (`${e}`).padStart(t, '0'));
}
function d(e) {
  if (!O(e) && e !== null && e !== '') return parseInt(e, 10);
}
function m(e) {
  if (!O(e) && e !== null && e !== '') return parseFloat(e);
}
function fe(e) {
  if (!O(e) && e !== null && e !== '') return (e = 1e3 * parseFloat(`0.${e}`)), Math.floor(e);
}
function ye(e, t, r = !1) {
  const n = 10 ** t;
  const s = r ? Math.trunc : Math.round;
  return s(e * n) / n;
}
function ge(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function we(e) {
  return ge(e) ? 366 : 365;
}
function ve(e, t) {
  let r;
  var n = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1;
  return n == 2
    ? ge(e + (t - n) / 12)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function pe(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond,
  );
  return (
    e.year < 100
      && e.year >= 0
      && (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
    +t
  );
}
function Te(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  var e = e - 1;
  var e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  return t == 4 || e == 3 ? 53 : 52;
}
function Se(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function Oe(e, t, r, n = null) {
  const s = new Date(e);
  const i = {
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  n && (i.timeZone = n);
  (e = { timeZoneName: t, ...i }),
  (n = new Intl.DateTimeFormat(r, e)
    .formatToParts(s)
    .find((e) => e.type.toLowerCase() === 'timezonename'));
  return n ? n.value : null;
}
function be(e, t) {
  let r = parseInt(e, 10);
  Number.isNaN(r) && (r = 0);
  (e = parseInt(t, 10) || 0), (t = r < 0 || Object.is(r, -0) ? -e : e);
  return 60 * r + t;
}
function ke(e) {
  const t = Number(e);
  if (typeof e === 'boolean' || e === '' || Number.isNaN(t)) throw new o(`Invalid unit value ${e}`);
  return t;
}
function Me(e, t) {
  const r = {};
  for (const s in e) {
    var n;
    !h(e, s) || ((n = e[s]) != null && (r[t(s)] = ke(n)));
  }
  return r;
}
function Ne(e, t) {
  const r = Math.trunc(Math.abs(e / 60));
  const n = Math.trunc(Math.abs(e % 60));
  const s = e >= 0 ? '+' : '-';
  switch (t) {
    case 'short':
      return `${s + l(r, 2)}:${l(n, 2)}`;
    case 'narrow':
      return s + r + (n > 0 ? `:${n}` : '');
    case 'techie':
      return s + l(r, 2) + l(n, 2);
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`,
      );
  }
}
function De(e) {
  return (
    (r = e),
    ['hour', 'minute', 'second', 'millisecond'].reduce(
      (e, t) => ((e[t] = r[t]), e),
      {},
    )
  );
  let r;
}
n = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
const Ee = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const Ve = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const Ie = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
function xe(e) {
  switch (e) {
    case 'narrow':
      return [...Ie];
    case 'short':
      return [...Ve];
    case 'long':
      return [...Ee];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    case '2-digit':
      return [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ];
    default:
      return null;
  }
}
const Ce = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const Fe = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const Ze = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
function Le(e) {
  switch (e) {
    case 'narrow':
      return [...Ze];
    case 'short':
      return [...Fe];
    case 'long':
      return [...Ce];
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];
    default:
      return null;
  }
}
const ze = ['AM', 'PM'];
const qe = ['Before Christ', 'Anno Domini'];
const Ae = ['BC', 'AD'];
const je = ['B', 'A'];
function _e(e) {
  switch (e) {
    case 'narrow':
      return [...je];
    case 'short':
      return [...Ae];
    case 'long':
      return [...qe];
    default:
      return null;
  }
}
function Ue(e) {
  return ze[e.hour < 12 ? 0 : 1];
}
function $e(e, t) {
  return Le(t)[e.weekday - 1];
}
function He(e, t) {
  return xe(t)[e.month - 1];
}
function We(e, t) {
  return _e(t)[e.year < 0 ? 0 : 1];
}
function Re(e, t, r = 'always', n = !1) {
  const s = {
    years: ['year', 'yr.'],
    quarters: ['quarter', 'qtr.'],
    months: ['month', 'mo.'],
    weeks: ['week', 'wk.'],
    days: ['day', 'day', 'days'],
    hours: ['hour', 'hr.'],
    minutes: ['minute', 'min.'],
    seconds: ['second', 'sec.'],
  };
  var i = ['hours', 'minutes', 'seconds'].indexOf(e) === -1;
  if (r === 'auto' && i) {
    const a = e === 'days';
    switch (t) {
      case 1:
        return a ? 'tomorrow' : `next ${s[e][0]}`;
      case -1:
        return a ? 'yesterday' : `last ${s[e][0]}`;
      case 0:
        return a ? 'today' : `this ${s[e][0]}`;
    }
  }
  var r = Object.is(t, -0) || t < 0;
  var i = Math.abs(t);
  var t = i === 1;
  const o = s[e];
  var n = n ? (!t && o[2]) || o[1] : t ? s[e][0] : e;
  return r ? `${i} ${n} ago` : `in ${i} ${n}`;
}
function Je(e, t) {
  let r = '';
  for (const n of e) n.literal ? (r += n.val) : (r += t(n.val));
  return r;
}
const Ye = {
  D: U,
  DD: $,
  DDD: W,
  DDDD: R,
  t: J,
  tt: Y,
  ttt: P,
  tttt: G,
  T: B,
  TT: Q,
  TTT: K,
  TTTT: X,
  f: ee,
  ff: re,
  fff: ie,
  ffff: oe,
  F: te,
  FF: ne,
  FFF: ae,
  FFFF: ue,
};
class f {
  static create(e, t = {}) {
    return new f(e, t);
  }

  static parseFormat(t) {
    let r = null;
    let n = '';
    let s = !1;
    const i = [];
    for (let e = 0; e < t.length; e++) {
      const a = t.charAt(e);
      a === "'"
        ? (n.length > 0 && i.push({ literal: s, val: n }),
        (r = null),
        (n = ''),
        (s = !s))
        : s || a === r
          ? (n += a)
          : (n.length > 0 && i.push({ literal: !1, val: n }), (n = a), (r = a));
    }
    return n.length > 0 && i.push({ literal: s, val: n }), i;
  }

  static macroTokenToFormatOpts(e) {
    return Ye[e];
  }

  constructor(e, t) {
    (this.opts = t), (this.loc = e), (this.systemLoc = null);
  }

  formatWithSystemDefault(e, t) {
    this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem());
    const r = this.systemLoc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }

  formatDateTime(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }

  formatDateTimeParts(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.formatToParts();
  }

  resolvedOptions(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.resolvedOptions();
  }

  num(e, t = 0) {
    if (this.opts.forceSimple) return l(e, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }

  formatDateTimeFromString(r, e) {
    const n = this.loc.listingMode() === 'en';
    const t = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory';
    const s = (e, t) => this.loc.extract(r, e, t);
    const i = (e) => (r.isOffsetFixed && r.offset === 0 && e.allowZ
      ? 'Z'
      : r.isValid
        ? r.zone.formatOffset(r.ts, e.format)
        : '');
    const a = () => (n ? Ue(r) : s({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod'));
    const o = (e, t) => (n
      ? He(r, e)
      : s(t ? { month: e } : { month: e, day: 'numeric' }, 'month'));
    const u = (e, t) => (n
      ? $e(r, e)
      : s(
        t
          ? { weekday: e }
          : { weekday: e, month: 'long', day: 'numeric' },
        'weekday',
      ));
    const l = (e) => {
      const t = f.macroTokenToFormatOpts(e);
      return t ? this.formatWithSystemDefault(r, t) : e;
    };
    const c = (e) => (n ? We(r, e) : s({ era: e }, 'era'));
    return Je(f.parseFormat(e), (e) => {
      switch (e) {
        case 'S':
          return this.num(r.millisecond);
        case 'u':
        case 'SSS':
          return this.num(r.millisecond, 3);
        case 's':
          return this.num(r.second);
        case 'ss':
          return this.num(r.second, 2);
        case 'uu':
          return this.num(Math.floor(r.millisecond / 10), 2);
        case 'uuu':
          return this.num(Math.floor(r.millisecond / 100));
        case 'm':
          return this.num(r.minute);
        case 'mm':
          return this.num(r.minute, 2);
        case 'h':
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
        case 'hh':
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
        case 'H':
          return this.num(r.hour);
        case 'HH':
          return this.num(r.hour, 2);
        case 'Z':
          return i({ format: 'narrow', allowZ: this.opts.allowZ });
        case 'ZZ':
          return i({ format: 'short', allowZ: this.opts.allowZ });
        case 'ZZZ':
          return i({ format: 'techie', allowZ: this.opts.allowZ });
        case 'ZZZZ':
          return r.zone.offsetName(r.ts, {
            format: 'short',
            locale: this.loc.locale,
          });
        case 'ZZZZZ':
          return r.zone.offsetName(r.ts, {
            format: 'long',
            locale: this.loc.locale,
          });
        case 'z':
          return r.zoneName;
        case 'a':
          return a();
        case 'd':
          return t ? s({ day: 'numeric' }, 'day') : this.num(r.day);
        case 'dd':
          return t ? s({ day: '2-digit' }, 'day') : this.num(r.day, 2);
        case 'c':
          return this.num(r.weekday);
        case 'ccc':
          return u('short', !0);
        case 'cccc':
          return u('long', !0);
        case 'ccccc':
          return u('narrow', !0);
        case 'E':
          return this.num(r.weekday);
        case 'EEE':
          return u('short', !1);
        case 'EEEE':
          return u('long', !1);
        case 'EEEEE':
          return u('narrow', !1);
        case 'L':
          return t
            ? s({ month: 'numeric', day: 'numeric' }, 'month')
            : this.num(r.month);
        case 'LL':
          return t
            ? s({ month: '2-digit', day: 'numeric' }, 'month')
            : this.num(r.month, 2);
        case 'LLL':
          return o('short', !0);
        case 'LLLL':
          return o('long', !0);
        case 'LLLLL':
          return o('narrow', !0);
        case 'M':
          return t ? s({ month: 'numeric' }, 'month') : this.num(r.month);
        case 'MM':
          return t ? s({ month: '2-digit' }, 'month') : this.num(r.month, 2);
        case 'MMM':
          return o('short', !1);
        case 'MMMM':
          return o('long', !1);
        case 'MMMMM':
          return o('narrow', !1);
        case 'y':
          return t ? s({ year: 'numeric' }, 'year') : this.num(r.year);
        case 'yy':
          return t
            ? s({ year: '2-digit' }, 'year')
            : this.num(r.year.toString().slice(-2), 2);
        case 'yyyy':
          return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 4);
        case 'yyyyyy':
          return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 6);
        case 'G':
          return c('short');
        case 'GG':
          return c('long');
        case 'GGGGG':
          return c('narrow');
        case 'kk':
          return this.num(r.weekYear.toString().slice(-2), 2);
        case 'kkkk':
          return this.num(r.weekYear, 4);
        case 'W':
          return this.num(r.weekNumber);
        case 'WW':
          return this.num(r.weekNumber, 2);
        case 'o':
          return this.num(r.ordinal);
        case 'ooo':
          return this.num(r.ordinal, 3);
        case 'q':
          return this.num(r.quarter);
        case 'qq':
          return this.num(r.quarter, 2);
        case 'X':
          return this.num(Math.floor(r.ts / 1e3));
        case 'x':
          return this.num(r.ts);
        default:
          return l(e);
      }
    });
  }

  formatDurationFromString(e, t) {
    const r = (e) => {
      switch (e[0]) {
        case 'S':
          return 'millisecond';
        case 's':
          return 'second';
        case 'm':
          return 'minute';
        case 'h':
          return 'hour';
        case 'd':
          return 'day';
        case 'w':
          return 'week';
        case 'M':
          return 'month';
        case 'y':
          return 'year';
        default:
          return null;
      }
    };
    const n = f.parseFormat(t);
    const s = n.reduce((e, { literal: t, val: r }) => (t ? e : e.concat(r)), []);
    const i = e.shiftTo(...s.map(r).filter((e) => e));
    return Je(
      n,
      ((a = i),
      (e) => {
        const t = r(e);
        return t ? this.num(a.get(t), e.length) : e;
      }),
    );
    let a;
  }
}
class y {
  constructor(e, t) {
    (this.reason = e), (this.explanation = t);
  }

  toMessage() {
    return this.explanation
      ? `${this.reason}: ${this.explanation}`
      : this.reason;
  }
}
class i {
  get type() {
    throw new r();
  }

  get name() {
    throw new r();
  }

  get ianaName() {
    return this.name;
  }

  get isUniversal() {
    throw new r();
  }

  offsetName(e, t) {
    throw new r();
  }

  formatOffset(e, t) {
    throw new r();
  }

  offset(e) {
    throw new r();
  }

  equals(e) {
    throw new r();
  }

  get isValid() {
    throw new r();
  }
}
let Pe = null;
class Ge extends i {
  static get instance() {
    return (Pe = Pe === null ? new Ge() : Pe);
  }

  get type() {
    return 'system';
  }

  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  get isUniversal() {
    return !1;
  }

  offsetName(e, { format: t, locale: r }) {
    return Oe(e, t, r);
  }

  formatOffset(e, t) {
    return Ne(this.offset(e), t);
  }

  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }

  equals(e) {
    return e.type === 'system';
  }

  get isValid() {
    return !0;
  }
}
let Be = {};
function Qe(e) {
  return (
    Be[e]
      || (Be[e] = new Intl.DateTimeFormat('en-US', {
        hour12: !1,
        timeZone: e,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        era: 'short',
      })),
    Be[e]
  );
}
const Ke = {
  year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6,
};
function Xe(e, t) {
  var e = e.format(t).replace(/\u200E/g, '');
  var [, t, e, r, n, s, i, a] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e);
  return [r, t, e, n, s, i, a];
}
function et(e, t) {
  const r = e.formatToParts(t);
  const n = [];
  for (let e = 0; e < r.length; e++) {
    const { type: s, value: i } = r[e];
    const a = Ke[s];
    s === 'era' ? (n[a] = i) : O(a) || (n[a] = parseInt(i, 10));
  }
  return n;
}
let tt = {};
class w extends i {
  static create(e) {
    return tt[e] || (tt[e] = new w(e)), tt[e];
  }

  static resetCache() {
    (tt = {}), (Be = {});
  }

  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }

  static isValidZone(e) {
    if (!e) return !1;
    try {
      return new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0;
    } catch (e) {
      return !1;
    }
  }

  constructor(e) {
    super(), (this.zoneName = e), (this.valid = w.isValidZone(e));
  }

  get type() {
    return 'iana';
  }

  get name() {
    return this.zoneName;
  }

  get isUniversal() {
    return !1;
  }

  offsetName(e, { format: t, locale: r }) {
    return Oe(e, t, r, this.name);
  }

  formatOffset(e, t) {
    return Ne(this.offset(e), t);
  }

  offset(e) {
    e = new Date(e);
    if (isNaN(e)) return NaN;
    let t = Qe(this.name);
    let [r, n, s, i, a, o, u] = (t.formatToParts ? et : Xe)(t, e);
    (t = +e), (e = t % 1e3);
    return (
      (pe({
        year: (r = i === 'BC' ? 1 - Math.abs(r) : r),
        month: n,
        day: s,
        hour: a === 24 ? 0 : a,
        minute: o,
        second: u,
        millisecond: 0,
      })
        - (t -= e >= 0 ? e : 1e3 + e))
      / 6e4
    );
  }

  equals(e) {
    return e.type === 'iana' && e.name === this.name;
  }

  get isValid() {
    return this.valid;
  }
}
let rt = null;
class v extends i {
  static get utcInstance() {
    return (rt = rt === null ? new v(0) : rt);
  }

  static instance(e) {
    return e === 0 ? v.utcInstance : new v(e);
  }

  static parseSpecifier(e) {
    if (e) {
      e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (e) return new v(be(e[1], e[2]));
    }
    return null;
  }

  constructor(e) {
    super(), (this.fixed = e);
  }

  get type() {
    return 'fixed';
  }

  get name() {
    return this.fixed === 0 ? 'UTC' : `UTC${Ne(this.fixed, 'narrow')}`;
  }

  get ianaName() {
    return this.fixed === 0 ? 'Etc/UTC' : `Etc/GMT${Ne(-this.fixed, 'narrow')}`;
  }

  offsetName() {
    return this.name;
  }

  formatOffset(e, t) {
    return Ne(this.fixed, t);
  }

  get isUniversal() {
    return !0;
  }

  offset() {
    return this.fixed;
  }

  equals(e) {
    return e.type === 'fixed' && e.fixed === this.fixed;
  }

  get isValid() {
    return !0;
  }
}
class nt extends i {
  constructor(e) {
    super(), (this.zoneName = e);
  }

  get type() {
    return 'invalid';
  }

  get name() {
    return this.zoneName;
  }

  get isUniversal() {
    return !1;
  }

  offsetName() {
    return null;
  }

  formatOffset() {
    return '';
  }

  offset() {
    return NaN;
  }

  equals() {
    return !1;
  }

  get isValid() {
    return !1;
  }
}
function b(e, t) {
  let r;
  return O(e) || e === null
    ? t
    : e instanceof i
      ? e
      : typeof e === 'string'
        ? (r = e.toLowerCase()) === 'default'
          ? t
          : r === 'local' || r === 'system'
            ? Ge.instance
            : r === 'utc' || r === 'gmt'
              ? v.utcInstance
              : v.parseSpecifier(r) || w.create(e)
        : c(e)
          ? v.instance(e)
          : typeof e === 'object' && e.offset && typeof e.offset === 'number'
            ? e
            : new nt(e);
}
let st = () => Date.now();
let it = 'system';
let at = null;
let ot = null;
let ut = null;
let lt;
class k {
  static get now() {
    return st;
  }

  static set now(e) {
    st = e;
  }

  static set defaultZone(e) {
    it = e;
  }

  static get defaultZone() {
    return b(it, Ge.instance);
  }

  static get defaultLocale() {
    return at;
  }

  static set defaultLocale(e) {
    at = e;
  }

  static get defaultNumberingSystem() {
    return ot;
  }

  static set defaultNumberingSystem(e) {
    ot = e;
  }

  static get defaultOutputCalendar() {
    return ut;
  }

  static set defaultOutputCalendar(e) {
    ut = e;
  }

  static get throwOnInvalid() {
    return lt;
  }

  static set throwOnInvalid(e) {
    lt = e;
  }

  static resetCaches() {
    M.resetCache(), w.resetCache();
  }
}
const ct = {};
function ht(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = ct[r];
  return n || ((n = new Intl.ListFormat(e, t)), (ct[r] = n)), n;
}
let dt = {};
function mt(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = dt[r];
  return n || ((n = new Intl.DateTimeFormat(e, t)), (dt[r] = n)), n;
}
let ft = {};
function yt(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = ft[r];
  return n || ((n = new Intl.NumberFormat(e, t)), (ft[r] = n)), n;
}
let gt = {};
function wt(e, t = {}) {
  const { base: r, ...n } = t;
  const s = JSON.stringify([e, n]);
  let i = gt[s];
  return i || ((i = new Intl.RelativeTimeFormat(e, t)), (gt[s] = i)), i;
}
let vt = null;
function pt() {
  return (vt = vt || new Intl.DateTimeFormat().resolvedOptions().locale);
}
function Tt(e) {
  let r = e.indexOf('-u-');
  if (r === -1) return [e];
  {
    let t;
    r = e.substring(0, r);
    try {
      t = mt(e).resolvedOptions();
    } catch (e) {
      t = mt(r).resolvedOptions();
    }
    var { numberingSystem: e, calendar: n } = t;
    return [r, e, n];
  }
}
function St(e, t, r) {
  return (
    (r || t) && ((e += '-u'), r && (e += `-ca-${r}`), t && (e += `-nu-${t}`)), e
  );
}
function Ot(t) {
  const r = [];
  for (let e = 1; e <= 12; e++) {
    const n = L.utc(2016, e, 1);
    r.push(t(n));
  }
  return r;
}
function bt(t) {
  const r = [];
  for (let e = 1; e <= 7; e++) {
    const n = L.utc(2016, 11, 13 + e);
    r.push(t(n));
  }
  return r;
}
function kt(e, t, r, n, s) {
  e = e.listingMode(r);
  return e === 'error' ? null : (e === 'en' ? n : s)(t);
}
function Mt(e) {
  return (
    (!e.numberingSystem || e.numberingSystem === 'latn')
    && (e.numberingSystem === 'latn'
      || !e.locale
      || e.locale.startsWith('en')
      || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem
        === 'latn')
  );
}
class Nt {
  constructor(e, t, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const { padTo: n, floor: s, ...i } = r;
    if (!t || Object.keys(i).length > 0) {
      const a = { useGrouping: !1, ...r };
      r.padTo > 0 && (a.minimumIntegerDigits = r.padTo), (this.inf = yt(e, a));
    }
  }

  format(e) {
    let t;
    return this.inf
      ? ((t = this.floor ? Math.floor(e) : e), this.inf.format(t))
      : l(this.floor ? Math.floor(e) : ye(e, 3), this.padTo);
  }
}
class Dt {
  constructor(e, t, r) {
    this.opts = r;
    let n;
    let s;
    e.zone.isUniversal
      ? ((s = (s = (e.offset / 60) * -1) >= 0 ? `Etc/GMT+${s}` : `Etc/GMT${s}`),
      e.offset !== 0 && w.create(s).valid
        ? ((n = s), (this.dt = e))
        : ((n = 'UTC'),
        r.timeZoneName
          ? (this.dt = e)
          : (this.dt = e.offset === 0
            ? e
            : L.fromMillis(e.ts + 60 * e.offset * 1e3))))
      : e.zone.type === 'system'
        ? (this.dt = e)
        : ((this.dt = e), (n = e.zone.name));
    const i = { ...this.opts };
    n && (i.timeZone = n), (this.dtf = mt(t, i));
  }

  format() {
    return this.dtf.format(this.dt.toJSDate());
  }

  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }

  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Et {
  constructor(e, t, r) {
    (this.opts = { style: 'long', ...r }), !t && he() && (this.rtf = wt(e, r));
  }

  format(e, t) {
    return this.rtf
      ? this.rtf.format(e, t)
      : Re(t, e, this.opts.numeric, this.opts.style !== 'long');
  }

  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class M {
  static fromOpts(e) {
    return M.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.defaultToEN,
    );
  }

  static create(e, t, r, n = !1) {
    (e = e || k.defaultLocale),
    (n = e || (n ? 'en-US' : pt())),
    (t = t || k.defaultNumberingSystem),
    (r = r || k.defaultOutputCalendar);
    return new M(n, t, r, e);
  }

  static resetCache() {
    (vt = null), (dt = {}), (ft = {}), (gt = {});
  }

  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return M.create(e, t, r);
  }

  constructor(e, t, r, n) {
    var [e, s, i] = Tt(e);
    (this.locale = e),
    (this.numberingSystem = t || s || null),
    (this.outputCalendar = r || i || null),
    (this.intl = St(this.locale, this.numberingSystem, this.outputCalendar)),
    (this.weekdaysCache = { format: {}, standalone: {} }),
    (this.monthsCache = { format: {}, standalone: {} }),
    (this.meridiemCache = null),
    (this.eraCache = {}),
    (this.specifiedLocale = n),
    (this.fastNumbersCached = null);
  }

  get fastNumbers() {
    return (
      this.fastNumbersCached == null && (this.fastNumbersCached = Mt(this)),
      this.fastNumbersCached
    );
  }

  listingMode() {
    const e = this.isEnglish();
    const t = !(
      (this.numberingSystem !== null && this.numberingSystem !== 'latn')
        || (this.outputCalendar !== null && this.outputCalendar !== 'gregory')
    );
    return e && t ? 'en' : 'intl';
  }

  clone(e) {
    return e && Object.getOwnPropertyNames(e).length !== 0
      ? M.create(
        e.locale || this.specifiedLocale,
        e.numberingSystem || this.numberingSystem,
        e.outputCalendar || this.outputCalendar,
        e.defaultToEN || !1,
      )
      : this;
  }

  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }

  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }

  months(r, n = !1, e = !0) {
    return kt(this, r, e, xe, () => {
      const t = n ? { month: r, day: 'numeric' } : { month: r };
      const e = n ? 'format' : 'standalone';
      return (
        this.monthsCache[e][r]
          || (this.monthsCache[e][r] = Ot((e) => this.extract(e, t, 'month'))),
        this.monthsCache[e][r]
      );
    });
  }

  weekdays(r, n = !1, e = !0) {
    return kt(this, r, e, Le, () => {
      const t = n
        ? {
          weekday: r, year: 'numeric', month: 'long', day: 'numeric',
        }
        : { weekday: r };
      const e = n ? 'format' : 'standalone';
      return (
        this.weekdaysCache[e][r]
          || (this.weekdaysCache[e][r] = bt((e) => this.extract(e, t, 'weekday'))),
        this.weekdaysCache[e][r]
      );
    });
  }

  meridiems(e = !0) {
    return kt(
      this,
      void 0,
      e,
      () => ze,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: 'numeric', hourCycle: 'h12' };
          this.meridiemCache = [
            L.utc(2016, 11, 13, 9),
            L.utc(2016, 11, 13, 19),
          ].map((e) => this.extract(e, t, 'dayperiod'));
        }
        return this.meridiemCache;
      },
    );
  }

  eras(e, t = !0) {
    return kt(this, e, t, _e, () => {
      const t = { era: e };
      return (
        this.eraCache[e]
          || (this.eraCache[e] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map((e) => this.extract(e, t, 'era'))),
        this.eraCache[e]
      );
    });
  }

  extract(e, t, r) {
    const n = this.dtFormatter(e, t);
    const s = n.formatToParts();
    const i = s.find((e) => e.type.toLowerCase() === r);
    return i ? i.value : null;
  }

  numberFormatter(e = {}) {
    return new Nt(this.intl, e.forceSimple || this.fastNumbers, e);
  }

  dtFormatter(e, t = {}) {
    return new Dt(e, this.intl, t);
  }

  relFormatter(e = {}) {
    return new Et(this.intl, this.isEnglish(), e);
  }

  listFormatter(e = {}) {
    return ht(this.intl, e);
  }

  isEnglish() {
    return (
      this.locale === 'en'
      || this.locale.toLowerCase() === 'en-us'
      || new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith('en-us')
    );
  }

  equals(e) {
    return (
      this.locale === e.locale
      && this.numberingSystem === e.numberingSystem
      && this.outputCalendar === e.outputCalendar
    );
  }
}
function a(...e) {
  e = e.reduce((e, t) => e + t.source, '');
  return RegExp(`^${e}$`);
}
function g(...e) {
  return (i) => e
    .reduce(
      ([e, t, r], n) => {
        var [n, r, s] = n(i, r);
        return [{ ...e, ...n }, r || t, s];
      },
      [{}, null, 1],
    )
    .slice(0, 2);
}
function p(e, ...t) {
  if (e != null) {
    for (let [r, n] of t) {
      r = r.exec(e);
      if (r) return n(r);
    }
  }
  return [null, null];
}
function Vt(...s) {
  return (e, t) => {
    const r = {};
    let n;
    for (n = 0; n < s.length; n++) r[s[n]] = d(e[t + n]);
    return [r, null, t + n];
  };
}
var t = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
var s = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const It = RegExp(`${s.source}(?:${t.source}?(?:\\[(${n.source})\\])?)?`);
const xt = RegExp(`(?:T${It.source})?`);
const Ct = Vt('weekYear', 'weekNumber', 'weekDay');
const Ft = Vt('year', 'ordinal');
var t = RegExp(`${s.source} ?(?:${t.source}|(${n.source}))?`);
var n = RegExp(`(?: ${t.source})?`);
function T(e, t, r) {
  e = e[t];
  return O(e) ? r : d(e);
}
function S(e, t) {
  return [
    {
      hours: T(e, t, 0),
      minutes: T(e, t + 1, 0),
      seconds: T(e, t + 2, 0),
      milliseconds: fe(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function Zt(e, t) {
  const r = !e[t] && !e[t + 1];
  var e = be(e[t + 1], e[t + 2]);
  return [{}, r ? null : v.instance(e), t + 3];
}
function Lt(e, t) {
  return [{}, e[t] ? w.create(e[t]) : null, t + 1];
}
const zt = RegExp(`^T?${s.source}$`);
const qt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function At(e) {
  var [e, t, r, n, s, i, a, o, u] = e;
  const l = e[0] === '-';
  var e = o && o[0] === '-';
  const c = (e, t = !1) => (void 0 !== e && (t || (e && l)) ? -e : e);
  return [
    {
      years: c(m(t)),
      months: c(m(r)),
      weeks: c(m(n)),
      days: c(m(s)),
      hours: c(m(i)),
      minutes: c(m(a)),
      seconds: c(m(o), o === '-0'),
      milliseconds: c(fe(u), e),
    },
  ];
}
const jt = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480,
};
function _t(e, t, r, n, s, i, a) {
  const o = {
    year: t.length === 2 ? Se(d(t)) : d(t),
    month: Ve.indexOf(r) + 1,
    day: d(n),
    hour: d(s),
    minute: d(i),
  };
  return (
    a && (o.second = d(a)),
    e && (o.weekday = e.length > 3 ? Ce.indexOf(e) + 1 : Fe.indexOf(e) + 1),
    o
  );
}
const Ut = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function $t(e) {
  var [, e, t, r, n, s, i, a, o, u, l, c] = e;
  var e = _t(e, n, r, t, s, i, a);
  let h;
  return (h = o ? jt[o] : u ? 0 : be(l, c)), [e, new v(h)];
}
const Ht = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
const Wt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
const Rt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Jt(e) {
  var [, e, t, r, n, s, i, a] = e;
  return [_t(e, n, r, t, s, i, a), v.utcInstance];
}
function Yt(e) {
  var [, e, t, r, n, s, i, a] = e;
  return [_t(e, a, t, r, n, s, i), v.utcInstance];
}
const Pt = a(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, xt);
const Gt = a(/(\d{4})-?W(\d\d)(?:-?(\d))?/, xt);
const Bt = a(/(\d{4})-?(\d{3})/, xt);
const Qt = a(It);
const Kt = g(
  (e, t) => [
    { year: T(e, t), month: T(e, t + 1, 1), day: T(e, t + 2, 1) },
    null,
    t + 3,
  ],
  S,
  Zt,
  Lt,
);
const Xt = g(Ct, S, Zt, Lt);
const er = g(Ft, S, Zt, Lt);
const tr = g(S, Zt, Lt);
function rr(e) {
  return p(e, [Pt, Kt], [Gt, Xt], [Bt, er], [Qt, tr]);
}
function nr(e) {
  return p(
    e
      .replace(/\([^)]*\)|[\n\t]/g, ' ')
      .replace(/(\s\s+)/g, ' ')
      .trim(),
    [Ut, $t],
  );
}
function sr(e) {
  return p(e, [Ht, Jt], [Wt, Jt], [Rt, Yt]);
}
function ir(e) {
  return p(e, [qt, At]);
}
const ar = g(S);
function or(e) {
  return p(e, [zt, ar]);
}
const ur = a(/(\d{4})-(\d\d)-(\d\d)/, n);
const lr = a(t);
const cr = g(S, Zt, Lt);
function hr(e) {
  return p(e, [ur, Kt], [lr, cr]);
}
const dr = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 604800,
    milliseconds: 6048e5,
  },
  days: {
    hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5,
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
  minutes: { seconds: 60, milliseconds: 6e4 },
  seconds: { milliseconds: 1e3 },
};
const mr = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 8760,
    minutes: 525600,
    seconds: 31536e3,
    milliseconds: 31536e6,
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 131040,
    seconds: 7862400,
    milliseconds: 78624e5,
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 43200,
    seconds: 2592e3,
    milliseconds: 2592e6,
  },
  ...dr,
};
const N = 365.2425;
const fr = 30.436875;
const yr = {
  years: {
    quarters: 4,
    months: 12,
    weeks: N / 7,
    days: N,
    hours: 24 * N,
    minutes: 525949.2,
    seconds: 525949.2 * 60,
    milliseconds: 525949.2 * 60 * 1e3,
  },
  quarters: {
    months: 3,
    weeks: N / 28,
    days: N / 4,
    hours: (24 * N) / 4,
    minutes: 131487.3,
    seconds: (525949.2 * 60) / 4,
    milliseconds: 7889237999.999999,
  },
  months: {
    weeks: fr / 7,
    days: fr,
    hours: 24 * fr,
    minutes: 43829.1,
    seconds: 2629746,
    milliseconds: 2629746e3,
  },
  ...dr,
};
const D = [
  'years',
  'quarters',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
];
const gr = D.slice(0).reverse();
function E(e, t, r = !1) {
  r = {
    values: r ? t.values : { ...e.values, ...(t.values || {}) },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
  };
  return new V(r);
}
function wr(e, t, r, n, s) {
  var e = e[s][r];
  const i = t[r] / e;
  var a = !(Math.sign(i) === Math.sign(n[s])) && n[s] !== 0 && Math.abs(i) <= 1
    ? (a = i) < 0
      ? Math.floor(a)
      : Math.ceil(a)
    : Math.trunc(i);
  (n[s] += a), (t[r] -= a * e);
}
function vr(r, n) {
  gr.reduce((e, t) => (O(n[t]) ? e : (e && wr(r, n, e, n, t), t)), null);
}
class V {
  constructor(e) {
    const t = e.conversionAccuracy === 'longterm' || !1;
    (this.values = e.values),
    (this.loc = e.loc || M.create()),
    (this.conversionAccuracy = t ? 'longterm' : 'casual'),
    (this.invalid = e.invalid || null),
    (this.matrix = t ? yr : mr),
    (this.isLuxonDuration = !0);
  }

  static fromMillis(e, t) {
    return V.fromObject({ milliseconds: e }, t);
  }

  static fromObject(e, t = {}) {
    if (e == null || typeof e !== 'object') {
      throw new o(
        `Duration.fromObject: argument expected to be an object, got ${
          e === null ? 'null' : typeof e}`,
      );
    }
    return new V({
      values: Me(e, V.normalizeUnit),
      loc: M.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
    });
  }

  static fromDurationLike(e) {
    if (c(e)) return V.fromMillis(e);
    if (V.isDuration(e)) return e;
    if (typeof e === 'object') return V.fromObject(e);
    throw new o(`Unknown duration argument ${e} of type ${typeof e}`);
  }

  static fromISO(e, t) {
    const [r] = ir(e);
    return r
      ? V.fromObject(r, t)
      : V.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`);
  }

  static fromISOTime(e, t) {
    const [r] = or(e);
    return r
      ? V.fromObject(r, t)
      : V.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`);
  }

  static invalid(e, t = null) {
    if (!e) throw new o('need to specify a reason the Duration is invalid');
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new A(e);
    return new V({ invalid: e });
  }

  static normalizeUnit(e) {
    const t = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds',
    }[e && e.toLowerCase()];
    if (t) return t;
    throw new _(e);
  }

  static isDuration(e) {
    return (e && e.isLuxonDuration) || !1;
  }

  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  toFormat(e, t = {}) {
    t = { ...t, floor: !1 !== t.round && !1 !== t.floor };
    return this.isValid
      ? f.create(this.loc, t).formatDurationFromString(this, e)
      : 'Invalid Duration';
  }

  toHuman(r = {}) {
    const e = D.map((e) => {
      const t = this.values[e];
      return O(t)
        ? null
        : this.loc
          .numberFormatter({
            style: 'unit',
            unitDisplay: 'long',
            ...r,
            unit: e.slice(0, -1),
          })
          .format(t);
    }).filter((e) => e);
    return this.loc
      .listFormatter({
        type: 'conjunction',
        style: r.listStyle || 'narrow',
        ...r,
      })
      .format(e);
  }

  toObject() {
    return this.isValid ? { ...this.values } : {};
  }

  toISO() {
    if (!this.isValid) return null;
    let e = 'P';
    return (
      this.years !== 0 && (e += `${this.years}Y`),
      (this.months === 0 && this.quarters === 0)
        || (e += `${this.months + 3 * this.quarters}M`),
      this.weeks !== 0 && (e += `${this.weeks}W`),
      this.days !== 0 && (e += `${this.days}D`),
      (this.hours === 0
        && this.minutes === 0
        && this.seconds === 0
        && this.milliseconds === 0)
        || (e += 'T'),
      this.hours !== 0 && (e += `${this.hours}H`),
      this.minutes !== 0 && (e += `${this.minutes}M`),
      (this.seconds === 0 && this.milliseconds === 0)
        || (e += `${ye(this.seconds + this.milliseconds / 1e3, 3)}S`),
      e === 'P' && (e += 'T0S'),
      e
    );
  }

  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const t = this.toMillis();
    if (t < 0 || t >= 864e5) return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: 'extended',
      ...e,
    };
    const r = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds');
    let n = e.format === 'basic' ? 'hhmm' : 'hh:mm';
    let s = ((e.suppressSeconds && r.seconds === 0 && r.milliseconds === 0)
          || ((n += e.format === 'basic' ? 'ss' : ':ss'),
          (e.suppressMilliseconds && r.milliseconds === 0) || (n += '.SSS')),
    r.toFormat(n));
    return (s = e.includePrefix ? `T${s}` : s);
  }

  toJSON() {
    return this.toISO();
  }

  toString() {
    return this.toISO();
  }

  toMillis() {
    return this.as('milliseconds');
  }

  valueOf() {
    return this.toMillis();
  }

  plus(e) {
    if (!this.isValid) return this;
    const t = V.fromDurationLike(e);
    const r = {};
    for (const n of D) (h(t.values, n) || h(this.values, n)) && (r[n] = t.get(n) + this.get(n));
    return E(this, { values: r }, !0);
  }

  minus(e) {
    if (!this.isValid) return this;
    const t = V.fromDurationLike(e);
    return this.plus(t.negate());
  }

  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values)) t[r] = ke(e(this.values[r], r));
    return E(this, { values: t }, !0);
  }

  get(e) {
    return this[V.normalizeUnit(e)];
  }

  set(e) {
    return this.isValid
      ? E(this, { values: { ...this.values, ...Me(e, V.normalizeUnit) } })
      : this;
  }

  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r } = {}) {
    const n = this.loc.clone({ locale: e, numberingSystem: t });
    const s = { loc: n };
    return r && (s.conversionAccuracy = r), E(this, s);
  }

  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }

  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return vr(this.matrix, e), E(this, { values: e }, !0);
  }

  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0) return this;
    e = e.map((e) => V.normalizeUnit(e));
    const t = {};
    const r = {};
    const n = this.toObject();
    let s;
    for (const a of D) {
      if (e.indexOf(a) >= 0) {
        s = a;
        let e = 0;
        for (const o in r) (e += this.matrix[o][a] * r[o]), (r[o] = 0);
        c(n[a]) && (e += n[a]);
        const i = Math.trunc(e);
        (t[a] = i), (r[a] = (1e3 * e - 1e3 * i) / 1e3);
        for (const u in n) D.indexOf(u) > D.indexOf(a) && wr(this.matrix, n, u, t, a);
      } else c(n[a]) && (r[a] = n[a]);
    }
    for (const l in r) r[l] !== 0 && (t[s] += l === s ? r[l] : r[l] / this.matrix[s][l]);
    return E(this, { values: t }, !0).normalize();
  }

  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values)) e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return E(this, { values: e }, !0);
  }

  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }

  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }

  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }

  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }

  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }

  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }

  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }

  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }

  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }

  get isValid() {
    return this.invalid === null;
  }

  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  equals(e) {
    if (!this.isValid || !e.isValid) return !1;
    if (!this.loc.equals(e.loc)) return !1;
    for (const n of D) {
      if (
        ((t = this.values[n]),
        (r = e.values[n]),
        !(void 0 === t || t === 0 ? void 0 === r || r === 0 : t === r))
      ) return !1;
    }
    let t; let
      r;
    return !0;
  }
}
const pr = 'Invalid Interval';
function Tr(e, t) {
  return e && e.isValid
    ? t && t.isValid
      ? t < e
        ? I.invalid(
          'end before start',
          `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${
            t.toISO()}`,
        )
        : null
      : I.invalid('missing or invalid end')
    : I.invalid('missing or invalid start');
}
class I {
  constructor(e) {
    (this.s = e.start),
    (this.e = e.end),
    (this.invalid = e.invalid || null),
    (this.isLuxonInterval = !0);
  }

  static invalid(e, t = null) {
    if (!e) throw new o('need to specify a reason the Interval is invalid');
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new q(e);
    return new I({ invalid: e });
  }

  static fromDateTimes(e, t) {
    var e = On(e);
    var t = On(t);
    const r = Tr(e, t);
    return r == null ? new I({ start: e, end: t }) : r;
  }

  static after(e, t) {
    const r = V.fromDurationLike(t);
    const n = On(e);
    return I.fromDateTimes(n, n.plus(r));
  }

  static before(e, t) {
    const r = V.fromDurationLike(t);
    const n = On(e);
    return I.fromDateTimes(n.minus(r), n);
  }

  static fromISO(e, s) {
    const [i, a] = (e || '').split('/', 2);
    if (i && a) {
      let e; let
        t;
      try {
        (e = L.fromISO(i, s)), (t = e.isValid);
      } catch (a) {
        t = !1;
      }
      let r; let
        n;
      try {
        (r = L.fromISO(a, s)), (n = r.isValid);
      } catch (a) {
        n = !1;
      }
      if (t && n) return I.fromDateTimes(e, r);
      if (t) {
        var o = V.fromISO(a, s);
        if (o.isValid) return I.after(e, o);
      } else if (n) {
        o = V.fromISO(i, s);
        if (o.isValid) return I.before(r, o);
      }
    }
    return I.invalid(
      'unparsable',
      `the input "${e}" can't be parsed as ISO 8601`,
    );
  }

  static isInterval(e) {
    return (e && e.isLuxonInterval) || !1;
  }

  get start() {
    return this.isValid ? this.s : null;
  }

  get end() {
    return this.isValid ? this.e : null;
  }

  get isValid() {
    return this.invalidReason === null;
  }

  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  length(e = 'milliseconds') {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }

  count(e = 'milliseconds') {
    if (!this.isValid) return NaN;
    const t = this.start.startOf(e);
    const r = this.end.startOf(e);
    return Math.floor(r.diff(t, e).get(e)) + 1;
  }

  hasSame(e) {
    return (
      !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
    );
  }

  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }

  isAfter(e) {
    return !!this.isValid && this.s > e;
  }

  isBefore(e) {
    return !!this.isValid && this.e <= e;
  }

  contains(e) {
    return !!this.isValid && this.s <= e && this.e > e;
  }

  set({ start: e, end: t } = {}) {
    return this.isValid ? I.fromDateTimes(e || this.s, t || this.e) : this;
  }

  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e
      .map(On)
      .filter((e) => this.contains(e))
      .sort();
    const r = [];
    let n = this.s;
    let s = 0;
    for (; n < this.e;) {
      var i = t[s] || this.e;
      var i = +i > +this.e ? this.e : i;
      r.push(I.fromDateTimes(n, i)), (n = i), (s += 1);
    }
    return r;
  }

  splitBy(e) {
    const t = V.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as('milliseconds') === 0) return [];
    let r = this.s;
    let n = 1;
    let s;
    const i = [];
    for (; r < this.e;) {
      const a = this.start.plus(t.mapUnits((e) => e * n));
      (s = +a > +this.e ? this.e : a),
      i.push(I.fromDateTimes(r, s)),
      (r = s),
      (n += 1);
    }
    return i;
  }

  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }

  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }

  abutsStart(e) {
    return !!this.isValid && +this.e == +e.s;
  }

  abutsEnd(e) {
    return !!this.isValid && +e.e == +this.s;
  }

  engulfs(e) {
    return !!this.isValid && this.s <= e.s && this.e >= e.e;
  }

  equals(e) {
    return (
      !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
    );
  }

  intersection(e) {
    if (!this.isValid) return this;
    const t = (this.s > e.s ? this : e).s;
    var { e } = this.e < e.e ? this : e;
    return e <= t ? null : I.fromDateTimes(t, e);
  }

  union(e) {
    if (!this.isValid) return this;
    const t = (this.s < e.s ? this : e).s;
    var { e } = this.e > e.e ? this : e;
    return I.fromDateTimes(t, e);
  }

  static merge(e) {
    const [t, r] = e
      .sort((e, t) => e.s - t.s)
      .reduce(
        ([e, t], r) => (t
          ? t.overlaps(r) || t.abutsStart(r)
            ? [e, t.union(r)]
            : [e.concat([t]), r]
          : [e, r]),
        [[], null],
      );
    return r && t.push(r), t;
  }

  static xor(e) {
    let t = null;
    let r = 0;
    const n = [];
    const s = e.map((e) => [
      { time: e.s, type: 's' },
      { time: e.e, type: 'e' },
    ]);
    const i = Array.prototype.concat(...s);
    const a = i.sort((e, t) => e.time - t.time);
    for (const o of a) {
      (r += o.type === 's' ? 1 : -1),
      (t = r === 1
        ? o.time
        : (t && +t != +o.time && n.push(I.fromDateTimes(t, o.time)), null));
    }
    return I.merge(n);
  }

  difference(...e) {
    return I.xor([this].concat(e))
      .map((e) => this.intersection(e))
      .filter((e) => e && !e.isEmpty());
  }

  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : pr;
  }

  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : pr;
  }

  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : pr;
  }

  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : pr;
  }

  toFormat(e, { separator: t = ' – ' } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : pr;
  }

  toDuration(e, t) {
    return this.isValid
      ? this.e.diff(this.s, e, t)
      : V.invalid(this.invalidReason);
  }

  mapEndpoints(e) {
    return I.fromDateTimes(e(this.s), e(this.e));
  }
}
class Sr {
  static hasDST(e = k.defaultZone) {
    const t = L.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }

  static isValidIANAZone(e) {
    return w.isValidZone(e);
  }

  static normalizeZone(e) {
    return b(e, k.defaultZone);
  }

  static months(
    e = 'long',
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = 'gregory',
    } = {},
  ) {
    return (n || M.create(t, r, s)).months(e);
  }

  static monthsFormat(
    e = 'long',
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = 'gregory',
    } = {},
  ) {
    return (n || M.create(t, r, s)).months(e, !0);
  }

  static weekdays(
    e = 'long',
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {},
  ) {
    return (n || M.create(t, r, null)).weekdays(e);
  }

  static weekdaysFormat(
    e = 'long',
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {},
  ) {
    return (n || M.create(t, r, null)).weekdays(e, !0);
  }

  static meridiems({ locale: e = null } = {}) {
    return M.create(e).meridiems();
  }

  static eras(e = 'short', { locale: t = null } = {}) {
    return M.create(t, null, 'gregory').eras(e);
  }

  static features() {
    return { relative: he() };
  }
}
function Or(e, t) {
  const r = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf();
  var t = r(t) - r(e);
  return Math.floor(V.fromMillis(t).as('days'));
}
function br(e, t, r, n) {
  let [s, i, a, o] = (function (t, r, e) {
    let n; let
      s;
    const i = {};
    let a; let
      o;
    for ([n, s] of [
      ['years', (e, t) => t.year - e.year],
      ['quarters', (e, t) => t.quarter - e.quarter],
      ['months', (e, t) => t.month - e.month + 12 * (t.year - e.year)],
      [
        'weeks',
        (e, t) => {
          e = Or(e, t);
          return (e - (e % 7)) / 7;
        },
      ],
      ['days', Or],
    ]) {
      if (e.indexOf(n) >= 0) {
        a = n;
        let e = s(t, r);
        (o = t.plus({ [n]: e })) > r
          ? ((t = t.plus({ [n]: e - 1 })), --e)
          : (t = o),
        (i[n] = e);
      }
    }
    return [t, i, o, a];
  }(e, t, r));
  (e = t - s),
  (r = r.filter(
    (e) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e) >= 0,
  )),
  r.length === 0
      && (a = a < t ? s.plus({ [o]: 1 }) : a) !== s
      && (i[o] = (i[o] || 0) + e / (a - s)),
  (t = V.fromObject(i, n));
  return r.length > 0
    ? V.fromMillis(e, n)
      .shiftTo(...r)
      .plus(t)
    : t;
}
const kr = {
  arab: '[٠-٩]',
  arabext: '[۰-۹]',
  bali: '[᭐-᭙]',
  beng: '[০-৯]',
  deva: '[०-९]',
  fullwide: '[０-９]',
  gujr: '[૦-૯]',
  hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
  khmr: '[០-៩]',
  knda: '[೦-೯]',
  laoo: '[໐-໙]',
  limb: '[᥆-᥏]',
  mlym: '[൦-൯]',
  mong: '[᠐-᠙]',
  mymr: '[၀-၉]',
  orya: '[୦-୯]',
  tamldec: '[௦-௯]',
  telu: '[౦-౯]',
  thai: '[๐-๙]',
  tibt: '[༠-༩]',
  latn: '\\d',
};
const Mr = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881],
};
const Nr = kr.hanidec.replace(/[\[|\]]/g, '').split('');
function x({ numberingSystem: e }, t = '') {
  return new RegExp(`${kr[e || 'latn']}${t}`);
}
const Dr = 'missing Intl.DateTimeFormat.formatToParts support';
function C(e, t = (e) => e) {
  return {
    regex: e,
    deser: ([e]) => t(
      (function (t) {
        let r = parseInt(t, 10);
        if (isNaN(r)) {
          r = '';
          for (let e = 0; e < t.length; e++) {
            const n = t.charCodeAt(e);
            if (t[e].search(kr.hanidec) !== -1) r += Nr.indexOf(t[e]);
            else {
              for (const a in Mr) {
                const [s, i] = Mr[a];
                s <= n && n <= i && (r += n - s);
              }
            }
          }
          return parseInt(r, 10);
        }
        return r;
      }(e)),
    ),
  };
}
const Er = `[ ${String.fromCharCode(160)}]`;
const Vr = new RegExp(Er, 'g');
function Ir(e) {
  return e.replace(/\./g, '\\.?').replace(Vr, Er);
}
function xr(e) {
  return e.replace(/\./g, '').replace(Vr, ' ').toLowerCase();
}
function F(e, r) {
  return e === null
    ? null
    : {
      regex: RegExp(e.map(Ir).join('|')),
      deser: ([t]) => e.findIndex((e) => xr(t) === xr(e)) + r,
    };
}
function Cr(e, t) {
  return { regex: e, deser: ([, e, t]) => be(e, t), groups: t };
}
function Fr(e) {
  return { regex: e, deser: ([e]) => e };
}
const Zr = {
  year: { '2-digit': 'yy', numeric: 'yyyyy' },
  month: {
    numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM',
  },
  day: { numeric: 'd', '2-digit': 'dd' },
  weekday: { short: 'EEE', long: 'EEEE' },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: { numeric: 'h', '2-digit': 'hh' },
  minute: { numeric: 'm', '2-digit': 'mm' },
  second: { numeric: 's', '2-digit': 'ss' },
  timeZoneName: { long: 'ZZZZZ', short: 'ZZZ' },
};
let Lr = null;
function zr(e, n) {
  return Array.prototype.concat(
    ...e.map((e) => {
      {
        const t = n;
        if (e.literal) return e;
        const r = jr(f.macroTokenToFormatOpts(e.val), t);
        return r == null || r.includes(void 0) ? e : r;
      }
    }),
  );
}
function qr(g, e, t) {
  const r = zr(f.parseFormat(t), g);
  const n = r.map((e) => {
    {
      const t = e;
      const r = g;
      const n = x(r);
      const s = x(r, '{2}');
      const i = x(r, '{3}');
      const a = x(r, '{4}');
      const o = x(r, '{6}');
      const u = x(r, '{1,2}');
      const l = x(r, '{1,3}');
      const c = x(r, '{1,6}');
      const h = x(r, '{1,9}');
      const d = x(r, '{2,4}');
      const m = x(r, '{4,6}');
      const f = (e) => ({
        regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')),
        deser: ([e]) => e,
        literal: !0,
      });
      const y = ((e) => {
        if (t.literal) return f(e);
        switch (e.val) {
          case 'G':
            return F(r.eras('short', !1), 0);
          case 'GG':
            return F(r.eras('long', !1), 0);
          case 'y':
            return C(c);
          case 'yy':
            return C(d, Se);
          case 'yyyy':
            return C(a);
          case 'yyyyy':
            return C(m);
          case 'yyyyyy':
            return C(o);
          case 'M':
            return C(u);
          case 'MM':
            return C(s);
          case 'MMM':
            return F(r.months('short', !0, !1), 1);
          case 'MMMM':
            return F(r.months('long', !0, !1), 1);
          case 'L':
            return C(u);
          case 'LL':
            return C(s);
          case 'LLL':
            return F(r.months('short', !1, !1), 1);
          case 'LLLL':
            return F(r.months('long', !1, !1), 1);
          case 'd':
            return C(u);
          case 'dd':
            return C(s);
          case 'o':
            return C(l);
          case 'ooo':
            return C(i);
          case 'HH':
            return C(s);
          case 'H':
            return C(u);
          case 'hh':
            return C(s);
          case 'h':
            return C(u);
          case 'mm':
            return C(s);
          case 'm':
          case 'q':
            return C(u);
          case 'qq':
            return C(s);
          case 's':
            return C(u);
          case 'ss':
            return C(s);
          case 'S':
            return C(l);
          case 'SSS':
            return C(i);
          case 'u':
            return Fr(h);
          case 'uu':
            return Fr(u);
          case 'uuu':
            return C(n);
          case 'a':
            return F(r.meridiems(), 0);
          case 'kkkk':
            return C(a);
          case 'kk':
            return C(d, Se);
          case 'W':
            return C(u);
          case 'WW':
            return C(s);
          case 'E':
          case 'c':
            return C(n);
          case 'EEE':
            return F(r.weekdays('short', !1, !1), 1);
          case 'EEEE':
            return F(r.weekdays('long', !1, !1), 1);
          case 'ccc':
            return F(r.weekdays('short', !0, !1), 1);
          case 'cccc':
            return F(r.weekdays('long', !0, !1), 1);
          case 'Z':
          case 'ZZ':
            return Cr(
              new RegExp(`([+-]${u.source})(?::(${s.source}))?`),
              2,
            );
          case 'ZZZ':
            return Cr(new RegExp(`([+-]${u.source})(${s.source})?`), 2);
          case 'z':
            return Fr(/[a-z_+-/]{1,256}?/i);
          default:
            return f(e);
        }
      })(t) || { invalidReason: Dr };
      return (y.token = t), y;
    }
  });
  const s = n.find((e) => e.invalidReason);
  if (s) return { input: e, tokens: r, invalidReason: s.invalidReason };
  var [t, i] = [
    `^${(t = n)
      .map((e) => e.regex)
      .reduce((e, t) => `${e}(${t.source})`, '')}$`,
    t,
  ];
  var t = RegExp(t, 'i');
  var [i, a] = (function (e, t, r) {
    const n = e.match(t);
    if (n) {
      const s = {};
      let e = 1;
      for (const i in r) {
        if (h(r, i)) {
          const a = r[i];
          const o = a.groups ? a.groups + 1 : 1;
          !a.literal
              && a.token
              && (s[a.token.val[0]] = a.deser(n.slice(e, e + o))),
          (e += o);
        }
      }
      return [n, s];
    }
    return [n, {}];
  }(e, t, i));
  const [o, u, l] = a
    ? (function (n) {
      let e = null;
      let t;
      return (
        O(n.z) || (e = w.create(n.z)),
        O(n.Z) || ((e = e || new v(n.Z)), (t = n.Z)),
        O(n.q) || (n.M = 3 * (n.q - 1) + 1),
        O(n.h)
              || (n.h < 12 && n.a === 1
                ? (n.h += 12)
                : n.h === 12 && n.a === 0 && (n.h = 0)),
        n.G === 0 && n.y && (n.y = -n.y),
        O(n.u) || (n.S = fe(n.u)),
        [
          Object.keys(n).reduce((e, t) => {
            const r = ((e) => {
              switch (e) {
                case 'S':
                  return 'millisecond';
                case 's':
                  return 'second';
                case 'm':
                  return 'minute';
                case 'h':
                case 'H':
                  return 'hour';
                case 'd':
                  return 'day';
                case 'o':
                  return 'ordinal';
                case 'L':
                case 'M':
                  return 'month';
                case 'y':
                  return 'year';
                case 'E':
                case 'c':
                  return 'weekday';
                case 'W':
                  return 'weekNumber';
                case 'k':
                  return 'weekYear';
                case 'q':
                  return 'quarter';
                default:
                  return null;
              }
            })(t);
            return r && (e[r] = n[t]), e;
          }, {}),
          e,
          t,
        ]
      );
    }(a))
    : [null, null, void 0];
  if (h(a, 'a') && h(a, 'H')) throw new j("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: r,
    regex: t,
    rawMatches: i,
    matches: a,
    result: o,
    zone: u,
    specificOffset: l,
  };
}
function Ar(e, t, r) {
  var {
    result: e, zone: t, specificOffset: r, invalidReason: n,
  } = qr(e, t, r);
  return [e, t, r, n];
}
function jr(s, e) {
  if (!s) return null;
  const t = f.create(e, s);
  const r = t.formatDateTimeParts((Lr = Lr || L.fromMillis(1555555555555)));
  return r.map((t) => {
    {
      const r = s;
      var { type: t, value: n } = t;
      if (t === 'literal') return { literal: !0, val: n };
      n = r[t];
      let e = Zr[t];
      return (e = typeof e === 'object' ? e[n] : e)
        ? { literal: !1, val: e }
        : void 0;
    }
  });
}
const _r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
const Ur = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Z(e, t) {
  return new y(
    'unit out of range',
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`,
  );
}
function $r(e, t, r) {
  const n = new Date(Date.UTC(e, t - 1, r));
  e < 100 && e >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  t = n.getUTCDay();
  return t === 0 ? 7 : t;
}
function Hr(e, t, r) {
  return r + (ge(e) ? Ur : _r)[t - 1];
}
function Wr(e, t) {
  const r = ge(e) ? Ur : _r;
  const n = r.findIndex((e) => e < t);
  const s = t - r[n];
  return { month: n + 1, day: s };
}
function Rr(e) {
  var { year: t, month: r, day: n } = e;
  const s = Hr(t, r, n);
  var r = $r(t, r, n);
  let i = Math.floor((s - r + 10) / 7);
  let a;
  return (
    i < 1
      ? ((a = t - 1), (i = Te(a)))
      : i > Te(t)
        ? ((a = t + 1), (i = 1))
        : (a = t),
    {
      weekYear: a, weekNumber: i, weekday: r, ...De(e),
    }
  );
}
function Jr(e) {
  var { weekYear: t, weekNumber: r, weekday: n } = e;
  const s = $r(t, 1, 4);
  const i = we(t);
  let a = 7 * r + n - s - 3;
  let o;
  a < 1
    ? ((o = t - 1), (a += we(o)))
    : a > i
      ? ((o = t + 1), (a -= we(t)))
      : (o = t);
  var { month: r, day: n } = Wr(o, a);
  return {
    year: o, month: r, day: n, ...De(e),
  };
}
function Yr(e) {
  const { year: t, month: r, day: n } = e;
  return { year: t, ordinal: Hr(t, r, n), ...De(e) };
}
function Pr(e) {
  var { year: t, ordinal: r } = e;
  var { month: r, day: n } = Wr(t, r);
  return {
    year: t, month: r, day: n, ...De(e),
  };
}
function Gr(e) {
  const t = le(e.weekYear);
  const r = u(e.weekNumber, 1, Te(e.weekYear));
  const n = u(e.weekday, 1, 7);
  return t
    ? r
      ? !n && Z('weekday', e.weekday)
      : Z('week', e.week)
    : Z('weekYear', e.weekYear);
}
function Br(e) {
  const t = le(e.year);
  const r = u(e.ordinal, 1, we(e.year));
  return t ? !r && Z('ordinal', e.ordinal) : Z('year', e.year);
}
function Qr(e) {
  const t = le(e.year);
  const r = u(e.month, 1, 12);
  const n = u(e.day, 1, ve(e.year, e.month));
  return t
    ? r
      ? !n && Z('day', e.day)
      : Z('month', e.month)
    : Z('year', e.year);
}
function Kr(e) {
  var {
    hour: e, minute: t, second: r, millisecond: n,
  } = e;
  const s = u(e, 0, 23) || (e === 24 && t === 0 && r === 0 && n === 0);
  const i = u(t, 0, 59);
  const a = u(r, 0, 59);
  const o = u(n, 0, 999);
  return s
    ? i
      ? a
        ? !o && Z('millisecond', n)
        : Z('second', r)
      : Z('minute', t)
    : Z('hour', e);
}
const Xr = 'Invalid DateTime';
function en(e) {
  return new y('unsupported zone', `the zone "${e.name}" is not supported`);
}
function tn(e) {
  return e.weekData === null && (e.weekData = Rr(e.c)), e.weekData;
}
function rn(e, t) {
  e = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new L({ ...e, ...t, old: e });
}
function nn(e, t, r) {
  let n = e - 60 * t * 1e3;
  const s = r.offset(n);
  if (t === s) return [n, t];
  n -= 60 * (s - t) * 1e3;
  t = r.offset(n);
  return s === t ? [n, s] : [e - 60 * Math.min(s, t) * 1e3, Math.max(s, t)];
}
function sn(e, t) {
  e += 60 * t * 1e3;
  const r = new Date(e);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds(),
  };
}
function an(e, t, r) {
  return nn(pe(e), t, r);
}
function on(e, t) {
  const r = e.o;
  var n = e.c.year + Math.trunc(t.years);
  var s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters);
  var n = {
    ...e.c,
    year: n,
    month: s,
    day:
        Math.min(e.c.day, ve(n, s))
        + Math.trunc(t.days)
        + 7 * Math.trunc(t.weeks),
  };
  var s = V.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds,
  }).as('milliseconds');
  let [i, a] = nn(pe(n), r, e.zone);
  return s !== 0 && ((i += s), (a = e.zone.offset(i))), { ts: i, o: a };
}
function un(e, t, r, n, s, i) {
  const { setZone: a, zone: o } = r;
  if (e && Object.keys(e).length !== 0) {
    const u = t || o;
    const l = L.fromObject(e, { ...r, zone: u, specificOffset: i });
    return a ? l : l.setZone(o);
  }
  return L.invalid(
    new y('unparsable', `the input "${s}" can't be parsed as ${n}`),
  );
}
function ln(e, t, r = !0) {
  return e.isValid
    ? f
      .create(M.create('en-US'), { allowZ: r, forceSimple: !0 })
      .formatDateTimeFromString(e, t)
    : null;
}
function cn(e, t) {
  const r = e.c.year > 9999 || e.c.year < 0;
  let n = '';
  return (
    r && e.c.year >= 0 && (n += '+'),
    (n += l(e.c.year, r ? 6 : 4)),
    (n = t
      ? (n = `${(n += '-') + l(e.c.month)}-`) + l(e.c.day)
      : (n += l(e.c.month)) + l(e.c.day))
  );
}
function hn(e, t, r, n, s, i) {
  let a = l(e.c.hour);
  return (
    t
      ? ((a = (a += ':') + l(e.c.minute)),
      (e.c.second === 0 && r) || (a += ':'))
      : (a += l(e.c.minute)),
    (e.c.second === 0 && r)
      || ((a += l(e.c.second)),
      (e.c.millisecond === 0 && n) || (a = (a += '.') + l(e.c.millisecond, 3))),
    s
      && (e.isOffsetFixed && e.offset === 0 && !i
        ? (a += 'Z')
        : (a = e.o < 0
          ? (a = `${(a += '-') + l(Math.trunc(-e.o / 60))}:`)
                + l(Math.trunc(-e.o % 60))
          : (a = `${(a += '+') + l(Math.trunc(e.o / 60))}:`)
                + l(Math.trunc(e.o % 60)))),
    i && (a += `[${e.zone.ianaName}]`),
    a
  );
}
const dn = {
  month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
};
const mn = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};
const fn = {
  ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
};
const yn = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
const gn = [
  'weekYear',
  'weekNumber',
  'weekday',
  'hour',
  'minute',
  'second',
  'millisecond',
];
const wn = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
function vn(e) {
  const t = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    quarter: 'quarter',
    quarters: 'quarter',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal',
  }[e.toLowerCase()];
  if (t) return t;
  throw new _(e);
}
function pn(e, t) {
  const r = b(t.zone, k.defaultZone);
  const n = M.fromObject(t);
  const s = k.now();
  let i; let
    a;
  if (O(e.year)) i = s;
  else {
    for (const o of yn) O(e[o]) && (e[o] = dn[o]);
    t = Qr(e) || Kr(e);
    if (t) return L.invalid(t);
    t = r.offset(s);
    [i, a] = an(e, t, r);
  }
  return new L({
    ts: i, zone: r, loc: n, o: a,
  });
}
function Tn(t, n, s) {
  const i = !!O(s.round) || s.round;
  const e = (e, t) => {
    e = ye(e, i || s.calendary ? 0 : 2, !0);
    const r = n.loc.clone(s).relFormatter(s);
    return r.format(e, t);
  };
  const r = (e) => (s.calendary
    ? n.hasSame(t, e)
      ? 0
      : n.startOf(e).diff(t.startOf(e), e).get(e)
    : n.diff(t, e).get(e));
  if (s.unit) return e(r(s.unit), s.unit);
  for (const o of s.units) {
    const a = r(o);
    if (Math.abs(a) >= 1) return e(a, o);
  }
  return e(n < t ? -0 : 0, s.units[s.units.length - 1]);
}
function Sn(e) {
  let t = {};
  let r;
  return (
    (r = e.length > 0 && typeof e[e.length - 1] === 'object'
      ? ((t = e[e.length - 1]), Array.from(e).slice(0, e.length - 1))
      : Array.from(e)),
    [t, r]
  );
}
class L {
  constructor(e) {
    const t = e.zone || k.defaultZone;
    let r = e.invalid
        || (Number.isNaN(e.ts) ? new y('invalid input') : null)
        || (t.isValid ? null : en(t));
    let n = ((this.ts = O(e.ts) ? k.now() : e.ts), null);
    let s = null;
    let i;
    r
      || (e.old && e.old.ts === this.ts && e.old.zone.equals(t)
        ? ([n, s] = [e.old.c, e.old.o])
        : ((i = t.offset(this.ts)),
        (n = sn(this.ts, i)),
        (r = Number.isNaN(n.year) ? new y('invalid input') : null),
        (n = r ? null : n),
        (s = r ? null : i))),
    (this._zone = t),
    (this.loc = e.loc || M.create()),
    (this.invalid = r),
    (this.weekData = null),
    (this.c = n),
    (this.o = s),
    (this.isLuxonDateTime = !0);
  }

  static now() {
    return new L({});
  }

  static local() {
    var [e, t] = Sn(arguments);
    var [t, r, n, s, i, a, o] = t;
    return pn(
      {
        year: t,
        month: r,
        day: n,
        hour: s,
        minute: i,
        second: a,
        millisecond: o,
      },
      e,
    );
  }

  static utc() {
    const [e, t] = Sn(arguments);
    const [r, n, s, i, a, o, u] = t;
    return (
      (e.zone = v.utcInstance),
      pn(
        {
          year: r,
          month: n,
          day: s,
          hour: i,
          minute: a,
          second: o,
          millisecond: u,
        },
        e,
      )
    );
  }

  static fromJSDate(e, t = {}) {
    e = ce(e) ? e.valueOf() : NaN;
    if (Number.isNaN(e)) return L.invalid('invalid input');
    const r = b(t.zone, k.defaultZone);
    return r.isValid
      ? new L({ ts: e, zone: r, loc: M.fromObject(t) })
      : L.invalid(en(r));
  }

  static fromMillis(e, t = {}) {
    if (c(e)) {
      return e < -864e13 || e > 864e13
        ? L.invalid('Timestamp out of range')
        : new L({
          ts: e,
          zone: b(t.zone, k.defaultZone),
          loc: M.fromObject(t),
        });
    }
    throw new o(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${
        e}`,
    );
  }

  static fromSeconds(e, t = {}) {
    if (c(e)) {
      return new L({
        ts: 1e3 * e,
        zone: b(t.zone, k.defaultZone),
        loc: M.fromObject(t),
      });
    }
    throw new o('fromSeconds requires a numerical input');
  }

  static fromObject(e, t = {}) {
    e = e || {};
    const r = b(t.zone, k.defaultZone);
    if (!r.isValid) return L.invalid(en(r));
    const n = k.now();
    const s = O(t.specificOffset) ? r.offset(n) : t.specificOffset;
    const i = Me(e, vn);
    const a = !O(i.ordinal);
    const o = !O(i.year);
    const u = !O(i.month) || !O(i.day);
    const l = o || u;
    const c = i.weekYear || i.weekNumber;
    const h = M.fromObject(t);
    if ((l || a) && c) {
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }
    if (u && a) throw new j("Can't mix ordinal dates with month/day");
    t = c || (i.weekday && !l);
    let d;
    let m;
    let f = sn(n, s);
    let y = (t
      ? ((d = gn), (m = mn), (f = Rr(f)))
      : a
        ? ((d = wn), (m = fn), (f = Yr(f)))
        : ((d = yn), (m = dn)),
    !1);
    for (const S of d) O(i[S]) ? (y ? (i[S] = m[S]) : (i[S] = f[S])) : (y = !0);
    const g = (t ? Gr : a ? Br : Qr)(i) || Kr(i);
    if (g) return L.invalid(g);
    const w = t ? Jr(i) : a ? Pr(i) : i;
    const [v, p] = an(w, s, r);
    const T = new L({
      ts: v, zone: r, o: p, loc: h,
    });
    return i.weekday && l && e.weekday !== T.weekday
      ? L.invalid(
        'mismatched weekday',
        `you can't specify both a weekday of ${i.weekday} and a date of ${
          T.toISO()}`,
      )
      : T;
  }

  static fromISO(e, t = {}) {
    const [r, n] = rr(e);
    return un(r, n, t, 'ISO 8601', e);
  }

  static fromRFC2822(e, t = {}) {
    const [r, n] = nr(e);
    return un(r, n, t, 'RFC 2822', e);
  }

  static fromHTTP(e, t = {}) {
    var [e, r] = sr(e);
    return un(e, r, t, 'HTTP', t);
  }

  static fromFormat(e, t, r = {}) {
    if (O(e) || O(t)) throw new o('fromFormat requires an input string and a format');
    var { locale: n = null, numberingSystem: s = null } = r;
    var [n, s, i, a] = Ar(
      M.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }),
      e,
      t,
    );
    return a ? L.invalid(a) : un(n, s, r, `format ${t}`, e, i);
  }

  static fromString(e, t, r = {}) {
    return L.fromFormat(e, t, r);
  }

  static fromSQL(e, t = {}) {
    const [r, n] = hr(e);
    return un(r, n, t, 'SQL', e);
  }

  static invalid(e, t = null) {
    if (!e) throw new o('need to specify a reason the DateTime is invalid');
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new z(e);
    return new L({ invalid: e });
  }

  static isDateTime(e) {
    return (e && e.isLuxonDateTime) || !1;
  }

  static parseFormatForOpts(e, t = {}) {
    const r = jr(e, M.fromObject(t));
    return r ? r.map((e) => (e ? e.val : null)).join('') : null;
  }

  get(e) {
    return this[e];
  }

  get isValid() {
    return this.invalid === null;
  }

  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }

  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }

  get locale() {
    return this.isValid ? this.loc.locale : null;
  }

  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }

  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }

  get zone() {
    return this._zone;
  }

  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }

  get year() {
    return this.isValid ? this.c.year : NaN;
  }

  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }

  get month() {
    return this.isValid ? this.c.month : NaN;
  }

  get day() {
    return this.isValid ? this.c.day : NaN;
  }

  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }

  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }

  get second() {
    return this.isValid ? this.c.second : NaN;
  }

  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }

  get weekYear() {
    return this.isValid ? tn(this).weekYear : NaN;
  }

  get weekNumber() {
    return this.isValid ? tn(this).weekNumber : NaN;
  }

  get weekday() {
    return this.isValid ? tn(this).weekday : NaN;
  }

  get ordinal() {
    return this.isValid ? Yr(this.c).ordinal : NaN;
  }

  get monthShort() {
    return this.isValid
      ? Sr.months('short', { locObj: this.loc })[this.month - 1]
      : null;
  }

  get monthLong() {
    return this.isValid
      ? Sr.months('long', { locObj: this.loc })[this.month - 1]
      : null;
  }

  get weekdayShort() {
    return this.isValid
      ? Sr.weekdays('short', { locObj: this.loc })[this.weekday - 1]
      : null;
  }

  get weekdayLong() {
    return this.isValid
      ? Sr.weekdays('long', { locObj: this.loc })[this.weekday - 1]
      : null;
  }

  get offset() {
    return this.isValid ? +this.o : NaN;
  }

  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: 'short', locale: this.locale })
      : null;
  }

  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: 'long', locale: this.locale })
      : null;
  }

  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }

  get isInDST() {
    return (
      !this.isOffsetFixed
      && (this.offset > this.set({ month: 1, day: 1 }).offset
        || this.offset > this.set({ month: 5 }).offset)
    );
  }

  get isInLeapYear() {
    return ge(this.year);
  }

  get daysInMonth() {
    return ve(this.year, this.month);
  }

  get daysInYear() {
    return this.isValid ? we(this.year) : NaN;
  }

  get weeksInWeekYear() {
    return this.isValid ? Te(this.weekYear) : NaN;
  }

  resolvedLocaleOptions(e = {}) {
    var {
      locale: e,
      numberingSystem: t,
      calendar: r,
    } = f.create(this.loc.clone(e), e).resolvedOptions(this);
    return { locale: e, numberingSystem: t, outputCalendar: r };
  }

  toUTC(e = 0, t = {}) {
    return this.setZone(v.instance(e), t);
  }

  toLocal() {
    return this.setZone(k.defaultZone);
  }

  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if ((t = b(t, k.defaultZone)).equals(this.zone)) return this;
    if (t.isValid) {
      let e = this.ts;
      return (
        (r || n)
          && ((r = t.offset(this.ts)), (n = this.toObject()), ([e] = an(n, r, t))),
        rn(this, { ts: e, zone: t })
      );
    }
    return L.invalid(en(t));
  }

  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    e = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return rn(this, { loc: e });
  }

  setLocale(e) {
    return this.reconfigure({ locale: e });
  }

  set(e) {
    if (!this.isValid) return this;
    var e = Me(e, vn);
    const t = !O(e.weekYear) || !O(e.weekNumber) || !O(e.weekday);
    const r = !O(e.ordinal);
    var n = !O(e.year);
    const s = !O(e.month) || !O(e.day);
    var i = e.weekYear || e.weekNumber;
    if ((n || s || r) && i) {
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals",
      );
    }
    if (s && r) throw new j("Can't mix ordinal dates with month/day");
    let a;
    t
      ? (a = Jr({ ...Rr(this.c), ...e }))
      : O(e.ordinal)
        ? ((a = { ...this.toObject(), ...e }),
        O(e.day) && (a.day = Math.min(ve(a.year, a.month), a.day)))
        : (a = Pr({ ...Yr(this.c), ...e }));
    var [n, i] = an(a, this.o, this.zone);
    return rn(this, { ts: n, o: i });
  }

  plus(e) {
    return this.isValid ? rn(this, on(this, V.fromDurationLike(e))) : this;
  }

  minus(e) {
    return this.isValid
      ? rn(this, on(this, V.fromDurationLike(e).negate()))
      : this;
  }

  startOf(e) {
    if (!this.isValid) return this;
    const t = {};
    const r = V.normalizeUnit(e);
    switch (r) {
      case 'years':
        t.month = 1;
      case 'quarters':
      case 'months':
        t.day = 1;
      case 'weeks':
      case 'days':
        t.hour = 0;
      case 'hours':
        t.minute = 0;
      case 'minutes':
        t.second = 0;
      case 'seconds':
        t.millisecond = 0;
    }
    return (
      r === 'weeks' && (t.weekday = 1),
      r === 'quarters'
        && ((e = Math.ceil(this.month / 3)), (t.month = 3 * (e - 1) + 1)),
      this.set(t)
    );
  }

  endOf(e) {
    return this.isValid
      ? this.plus({ [e]: 1 })
        .startOf(e)
        .minus(1)
      : this;
  }

  toFormat(e, t = {}) {
    return this.isValid
      ? f.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e)
      : Xr;
  }

  toLocaleString(e = U, t = {}) {
    return this.isValid
      ? f.create(this.loc.clone(t), e).formatDateTime(this)
      : Xr;
  }

  toLocaleParts(e = {}) {
    return this.isValid
      ? f.create(this.loc.clone(e), e).formatDateTimeParts(this)
      : [];
  }

  toISO({
    format: e = 'extended',
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: n = !0,
    extendedZone: s = !1,
  } = {}) {
    if (!this.isValid) return null;
    var e = e === 'extended';
    let i = cn(this, e);
    return (i += 'T') + hn(this, e, t, r, n, s);
  }

  toISODate({ format: e = 'extended' } = {}) {
    return this.isValid ? cn(this, e === 'extended') : null;
  }

  toISOWeekDate() {
    return ln(this, "kkkk-'W'WW-c");
  }

  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: n = !1,
    extendedZone: s = !1,
    format: i = 'extended',
  } = {}) {
    return this.isValid
      ? (n ? 'T' : '') + hn(this, i === 'extended', t, e, r, s)
      : null;
  }

  toRFC2822() {
    return ln(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
  }

  toHTTP() {
    return ln(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }

  toSQLDate() {
    return this.isValid ? cn(this, !0) : null;
  }

  toSQLTime({
    includeOffset: e = !0,
    includeZone: t = !1,
    includeOffsetSpace: r = !0,
  } = {}) {
    let n = 'HH:mm:ss.SSS';
    return (
      (t || e) && (r && (n += ' '), t ? (n += 'z') : e && (n += 'ZZ')),
      ln(this, n, !0)
    );
  }

  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }

  toString() {
    return this.isValid ? this.toISO() : Xr;
  }

  valueOf() {
    return this.toMillis();
  }

  toMillis() {
    return this.isValid ? this.ts : NaN;
  }

  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }

  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }

  toJSON() {
    return this.toISO();
  }

  toBSON() {
    return this.toJSDate();
  }

  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return (
      e.includeConfig
        && ((t.outputCalendar = this.outputCalendar),
        (t.numberingSystem = this.loc.numberingSystem),
        (t.locale = this.loc.locale)),
      t
    );
  }

  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }

  diff(e, t = 'milliseconds', r = {}) {
    if (!this.isValid || !e.isValid) return V.invalid('created by diffing an invalid DateTime');
    r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r };
    const n = de(t).map(V.normalizeUnit);
    const s = e.valueOf() > this.valueOf();
    const i = s ? this : e;
    const a = s ? e : this;
    const o = br(i, a, n, r);
    return s ? o.negate() : o;
  }

  diffNow(e = 'milliseconds', t = {}) {
    return this.diff(L.now(), e, t);
  }

  until(e) {
    return this.isValid ? I.fromDateTimes(this, e) : this;
  }

  hasSame(e, t) {
    if (!this.isValid) return !1;
    const r = e.valueOf();
    const n = this.setZone(e.zone, { keepLocalTime: !0 });
    return n.startOf(t) <= r && r <= n.endOf(t);
  }

  equals(e) {
    return (
      this.isValid
      && e.isValid
      && this.valueOf() === e.valueOf()
      && this.zone.equals(e.zone)
      && this.loc.equals(e.loc)
    );
  }

  toRelative(e = {}) {
    if (!this.isValid) return null;
    const t = e.base || L.fromObject({}, { zone: this.zone });
    const r = e.padding ? (this < t ? -e.padding : e.padding) : 0;
    let n = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    let s = e.unit;
    return (
      Array.isArray(e.unit) && ((n = e.unit), (s = void 0)),
      Tn(t, this.plus(r), {
        ...e, numeric: 'always', units: n, unit: s,
      })
    );
  }

  toRelativeCalendar(e = {}) {
    return this.isValid
      ? Tn(e.base || L.fromObject({}, { zone: this.zone }), this, {
        ...e,
        numeric: 'auto',
        units: ['years', 'months', 'days'],
        calendary: !0,
      })
      : null;
  }

  static min(...e) {
    if (e.every(L.isDateTime)) return me(e, (e) => e.valueOf(), Math.min);
    throw new o('min requires all arguments be DateTimes');
  }

  static max(...e) {
    if (e.every(L.isDateTime)) return me(e, (e) => e.valueOf(), Math.max);
    throw new o('max requires all arguments be DateTimes');
  }

  static fromFormatExplain(e, t, r = {}) {
    var { locale: r = null, numberingSystem: n = null } = r;
    return qr(
      M.fromOpts({ locale: r, numberingSystem: n, defaultToEN: !0 }),
      e,
      t,
    );
  }

  static fromStringExplain(e, t, r = {}) {
    return L.fromFormatExplain(e, t, r);
  }

  static get DATE_SHORT() {
    return U;
  }

  static get DATE_MED() {
    return $;
  }

  static get DATE_MED_WITH_WEEKDAY() {
    return H;
  }

  static get DATE_FULL() {
    return W;
  }

  static get DATE_HUGE() {
    return R;
  }

  static get TIME_SIMPLE() {
    return J;
  }

  static get TIME_WITH_SECONDS() {
    return Y;
  }

  static get TIME_WITH_SHORT_OFFSET() {
    return P;
  }

  static get TIME_WITH_LONG_OFFSET() {
    return G;
  }

  static get TIME_24_SIMPLE() {
    return B;
  }

  static get TIME_24_WITH_SECONDS() {
    return Q;
  }

  static get TIME_24_WITH_SHORT_OFFSET() {
    return K;
  }

  static get TIME_24_WITH_LONG_OFFSET() {
    return X;
  }

  static get DATETIME_SHORT() {
    return ee;
  }

  static get DATETIME_SHORT_WITH_SECONDS() {
    return te;
  }

  static get DATETIME_MED() {
    return re;
  }

  static get DATETIME_MED_WITH_SECONDS() {
    return ne;
  }

  static get DATETIME_MED_WITH_WEEKDAY() {
    return se;
  }

  static get DATETIME_FULL() {
    return ie;
  }

  static get DATETIME_FULL_WITH_SECONDS() {
    return ae;
  }

  static get DATETIME_HUGE() {
    return oe;
  }

  static get DATETIME_HUGE_WITH_SECONDS() {
    return ue;
  }
}
function On(e) {
  if (L.isDateTime(e)) return e;
  if (e && e.valueOf && c(e.valueOf())) return L.fromJSDate(e);
  if (e && typeof e === 'object') return L.fromObject(e);
  throw new o(`Unknown datetime argument: ${e}, of type ${typeof e}`);
}
s = '3.0.1';
export {
  L as DateTime,
  V as Duration,
  v as FixedOffsetZone,
  w as IANAZone,
  Sr as Info,
  I as Interval,
  nt as InvalidZone,
  k as Settings,
  Ge as SystemZone,
  s as VERSION,
  i as Zone,
};
