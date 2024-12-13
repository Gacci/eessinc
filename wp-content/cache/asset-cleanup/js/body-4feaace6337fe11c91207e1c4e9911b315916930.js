/*!/wp-content/plugins/svg-support/vendor/DOMPurify/DOMPurify.min.js*/
/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).DOMPurify =
          t());
})(this, function () {
  "use strict";
  function e(t) {
    return (e =
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
          })(t);
  }
  function t(e, n) {
    return (t =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, n);
  }
  function n() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function r(e, o, a) {
    return (r = n()
      ? Reflect.construct
      : function (e, n, r) {
          var o = [null];
          o.push.apply(o, n);
          var a = new (Function.bind.apply(e, o))();
          return r && t(a, r.prototype), a;
        }).apply(null, arguments);
  }
  function o(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return a(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return a(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var i = Object.hasOwnProperty,
    l = Object.setPrototypeOf,
    c = Object.isFrozen,
    u = Object.getPrototypeOf,
    s = Object.getOwnPropertyDescriptor,
    m = Object.freeze,
    f = Object.seal,
    p = Object.create,
    d = "undefined" != typeof Reflect && Reflect,
    h = d.apply,
    g = d.construct;
  h ||
    (h = function (e, t, n) {
      return e.apply(t, n);
    }),
    m ||
      (m = function (e) {
        return e;
      }),
    f ||
      (f = function (e) {
        return e;
      }),
    g ||
      (g = function (e, t) {
        return r(e, o(t));
      });
  var y,
    b = _(Array.prototype.forEach),
    v = _(Array.prototype.pop),
    T = _(Array.prototype.push),
    N = _(String.prototype.toLowerCase),
    E = _(String.prototype.match),
    A = _(String.prototype.replace),
    w = _(String.prototype.indexOf),
    x = _(String.prototype.trim),
    k = _(RegExp.prototype.test),
    S =
      ((y = TypeError),
      function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return g(y, t);
      });
  function _(e) {
    return function (t) {
      for (
        var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
        o < n;
        o++
      )
        r[o - 1] = arguments[o];
      return h(e, t, r);
    };
  }
  function O(e, t) {
    l && l(e, null);
    for (var n = t.length; n--; ) {
      var r = t[n];
      if ("string" == typeof r) {
        var o = N(r);
        o !== r && (c(t) || (t[n] = o), (r = o));
      }
      e[r] = !0;
    }
    return e;
  }
  function D(e) {
    var t,
      n = p(null);
    for (t in e) h(i, e, [t]) && (n[t] = e[t]);
    return n;
  }
  function C(e, t) {
    for (; null !== e; ) {
      var n = s(e, t);
      if (n) {
        if (n.get) return _(n.get);
        if ("function" == typeof n.value) return _(n.value);
      }
      e = u(e);
    }
    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }
  var M = m([
      "a",
      "abbr",
      "acronym",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "content",
      "data",
      "datalist",
      "dd",
      "decorator",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meter",
      "nav",
      "nobr",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "section",
      "select",
      "shadow",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
    ]),
    R = m([
      "svg",
      "a",
      "altglyph",
      "altglyphdef",
      "altglyphitem",
      "animatecolor",
      "animatemotion",
      "animatetransform",
      "circle",
      "clippath",
      "defs",
      "desc",
      "ellipse",
      "filter",
      "font",
      "g",
      "glyph",
      "glyphref",
      "hkern",
      "image",
      "line",
      "lineargradient",
      "marker",
      "mask",
      "metadata",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialgradient",
      "rect",
      "stop",
      "style",
      "switch",
      "symbol",
      "text",
      "textpath",
      "title",
      "tref",
      "tspan",
      "view",
      "vkern",
    ]),
    L = m([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
    ]),
    I = m([
      "animate",
      "color-profile",
      "cursor",
      "discard",
      "fedropshadow",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignobject",
      "hatch",
      "hatchpath",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "missing-glyph",
      "script",
      "set",
      "solidcolor",
      "unknown",
      "use",
    ]),
    F = m([
      "math",
      "menclose",
      "merror",
      "mfenced",
      "mfrac",
      "mglyph",
      "mi",
      "mlabeledtr",
      "mmultiscripts",
      "mn",
      "mo",
      "mover",
      "mpadded",
      "mphantom",
      "mroot",
      "mrow",
      "ms",
      "mspace",
      "msqrt",
      "mstyle",
      "msub",
      "msup",
      "msubsup",
      "mtable",
      "mtd",
      "mtext",
      "mtr",
      "munder",
      "munderover",
    ]),
    H = m([
      "maction",
      "maligngroup",
      "malignmark",
      "mlongdiv",
      "mscarries",
      "mscarry",
      "msgroup",
      "mstack",
      "msline",
      "msrow",
      "semantics",
      "annotation",
      "annotation-xml",
      "mprescripts",
      "none",
    ]),
    U = m(["#text"]),
    z = m([
      "accept",
      "action",
      "align",
      "alt",
      "autocapitalize",
      "autocomplete",
      "autopictureinpicture",
      "autoplay",
      "background",
      "bgcolor",
      "border",
      "capture",
      "cellpadding",
      "cellspacing",
      "checked",
      "cite",
      "class",
      "clear",
      "color",
      "cols",
      "colspan",
      "controls",
      "controlslist",
      "coords",
      "crossorigin",
      "datetime",
      "decoding",
      "default",
      "dir",
      "disabled",
      "disablepictureinpicture",
      "disableremoteplayback",
      "download",
      "draggable",
      "enctype",
      "enterkeyhint",
      "face",
      "for",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hreflang",
      "id",
      "inputmode",
      "integrity",
      "ismap",
      "kind",
      "label",
      "lang",
      "list",
      "loading",
      "loop",
      "low",
      "max",
      "maxlength",
      "media",
      "method",
      "min",
      "minlength",
      "multiple",
      "muted",
      "name",
      "nonce",
      "noshade",
      "novalidate",
      "nowrap",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "playsinline",
      "poster",
      "preload",
      "pubdate",
      "radiogroup",
      "readonly",
      "rel",
      "required",
      "rev",
      "reversed",
      "role",
      "rows",
      "rowspan",
      "spellcheck",
      "scope",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "srclang",
      "start",
      "src",
      "srcset",
      "step",
      "style",
      "summary",
      "tabindex",
      "title",
      "translate",
      "type",
      "usemap",
      "valign",
      "value",
      "width",
      "xmlns",
      "slot",
    ]),
    B = m([
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "ascent",
      "attributename",
      "attributetype",
      "azimuth",
      "basefrequency",
      "baseline-shift",
      "begin",
      "bias",
      "by",
      "class",
      "clip",
      "clippathunits",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "cx",
      "cy",
      "d",
      "dx",
      "dy",
      "diffuseconstant",
      "direction",
      "display",
      "divisor",
      "dur",
      "edgemode",
      "elevation",
      "end",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterunits",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyphref",
      "gradientunits",
      "gradienttransform",
      "height",
      "href",
      "id",
      "image-rendering",
      "in",
      "in2",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kerning",
      "keypoints",
      "keysplines",
      "keytimes",
      "lang",
      "lengthadjust",
      "letter-spacing",
      "kernelmatrix",
      "kernelunitlength",
      "lighting-color",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerheight",
      "markerunits",
      "markerwidth",
      "maskcontentunits",
      "maskunits",
      "max",
      "mask",
      "media",
      "method",
      "mode",
      "min",
      "name",
      "numoctaves",
      "offset",
      "operator",
      "opacity",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "paint-order",
      "path",
      "pathlength",
      "patterncontentunits",
      "patterntransform",
      "patternunits",
      "points",
      "preservealpha",
      "preserveaspectratio",
      "primitiveunits",
      "r",
      "rx",
      "ry",
      "radius",
      "refx",
      "refy",
      "repeatcount",
      "repeatdur",
      "restart",
      "result",
      "rotate",
      "scale",
      "seed",
      "shape-rendering",
      "specularconstant",
      "specularexponent",
      "spreadmethod",
      "startoffset",
      "stddeviation",
      "stitchtiles",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke",
      "stroke-width",
      "style",
      "surfacescale",
      "systemlanguage",
      "tabindex",
      "targetx",
      "targety",
      "transform",
      "transform-origin",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textlength",
      "type",
      "u1",
      "u2",
      "unicode",
      "values",
      "viewbox",
      "visibility",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "width",
      "word-spacing",
      "wrap",
      "writing-mode",
      "xchannelselector",
      "ychannelselector",
      "x",
      "x1",
      "x2",
      "xmlns",
      "y",
      "y1",
      "y2",
      "z",
      "zoomandpan",
    ]),
    j = m([
      "accent",
      "accentunder",
      "align",
      "bevelled",
      "close",
      "columnsalign",
      "columnlines",
      "columnspan",
      "denomalign",
      "depth",
      "dir",
      "display",
      "displaystyle",
      "encoding",
      "fence",
      "frame",
      "height",
      "href",
      "id",
      "largeop",
      "length",
      "linethickness",
      "lspace",
      "lquote",
      "mathbackground",
      "mathcolor",
      "mathsize",
      "mathvariant",
      "maxsize",
      "minsize",
      "movablelimits",
      "notation",
      "numalign",
      "open",
      "rowalign",
      "rowlines",
      "rowspacing",
      "rowspan",
      "rspace",
      "rquote",
      "scriptlevel",
      "scriptminsize",
      "scriptsizemultiplier",
      "selection",
      "separator",
      "separators",
      "stretchy",
      "subscriptshift",
      "supscriptshift",
      "symmetric",
      "voffset",
      "width",
      "xmlns",
    ]),
    P = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    G = f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    W = f(/<%[\w\W]*|[\w\W]*%>/gm),
    q = f(/^data-[\-\w.\u00B7-\uFFFF]/),
    Y = f(/^aria-[\-\w]+$/),
    K = f(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    ),
    V = f(/^(?:\w+script|data):/i),
    $ = f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    X = f(/^html$/i),
    Z = function () {
      return "undefined" == typeof window ? null : window;
    },
    J = function (t, n) {
      if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
      var r = null,
        o = "data-tt-policy-suffix";
      n.currentScript &&
        n.currentScript.hasAttribute(o) &&
        (r = n.currentScript.getAttribute(o));
      var a = "dompurify" + (r ? "#" + r : "");
      try {
        return t.createPolicy(a, {
          createHTML: function (e) {
            return e;
          },
        });
      } catch (e) {
        return (
          console.warn("TrustedTypes policy " + a + " could not be created."),
          null
        );
      }
    };
  return (function t() {
    var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z(),
      r = function (e) {
        return t(e);
      };
    if (
      ((r.version = "2.3.8"),
      (r.removed = []),
      !n || !n.document || 9 !== n.document.nodeType)
    )
      return (r.isSupported = !1), r;
    var a = n.document,
      i = n.document,
      l = n.DocumentFragment,
      c = n.HTMLTemplateElement,
      u = n.Node,
      s = n.Element,
      f = n.NodeFilter,
      p = n.NamedNodeMap,
      d = void 0 === p ? n.NamedNodeMap || n.MozNamedAttrMap : p,
      h = n.HTMLFormElement,
      g = n.DOMParser,
      y = n.trustedTypes,
      _ = s.prototype,
      Q = C(_, "cloneNode"),
      ee = C(_, "nextSibling"),
      te = C(_, "childNodes"),
      ne = C(_, "parentNode");
    if ("function" == typeof c) {
      var re = i.createElement("template");
      re.content && re.content.ownerDocument && (i = re.content.ownerDocument);
    }
    var oe = J(y, a),
      ae = oe ? oe.createHTML("") : "",
      ie = i,
      le = ie.implementation,
      ce = ie.createNodeIterator,
      ue = ie.createDocumentFragment,
      se = ie.getElementsByTagName,
      me = a.importNode,
      fe = {};
    try {
      fe = D(i).documentMode ? i.documentMode : {};
    } catch (e) {}
    var pe = {};
    r.isSupported =
      "function" == typeof ne &&
      le &&
      void 0 !== le.createHTMLDocument &&
      9 !== fe;
    var de,
      he,
      ge = G,
      ye = W,
      be = q,
      ve = Y,
      Te = V,
      Ne = $,
      Ee = K,
      Ae = null,
      we = O({}, [].concat(o(M), o(R), o(L), o(F), o(U))),
      xe = null,
      ke = O({}, [].concat(o(z), o(B), o(j), o(P))),
      Se = Object.seal(
        Object.create(null, {
          tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null,
          },
          allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1,
          },
        }),
      ),
      _e = null,
      Oe = null,
      De = !0,
      Ce = !0,
      Me = !1,
      Re = !1,
      Le = !1,
      Ie = !1,
      Fe = !1,
      He = !1,
      Ue = !1,
      ze = !1,
      Be = !0,
      je = !0,
      Pe = !1,
      Ge = {},
      We = null,
      qe = O({}, [
        "annotation-xml",
        "audio",
        "colgroup",
        "desc",
        "foreignobject",
        "head",
        "iframe",
        "math",
        "mi",
        "mn",
        "mo",
        "ms",
        "mtext",
        "noembed",
        "noframes",
        "noscript",
        "plaintext",
        "script",
        "style",
        "svg",
        "template",
        "thead",
        "title",
        "video",
        "xmp",
      ]),
      Ye = null,
      Ke = O({}, ["audio", "video", "img", "source", "image", "track"]),
      Ve = null,
      $e = O({}, [
        "alt",
        "class",
        "for",
        "id",
        "label",
        "name",
        "pattern",
        "placeholder",
        "role",
        "summary",
        "title",
        "value",
        "style",
        "xmlns",
      ]),
      Xe = "http://www.w3.org/1998/Math/MathML",
      Ze = "http://www.w3.org/2000/svg",
      Je = "http://www.w3.org/1999/xhtml",
      Qe = Je,
      et = !1,
      tt = ["application/xhtml+xml", "text/html"],
      nt = "text/html",
      rt = null,
      ot = i.createElement("form"),
      at = function (e) {
        return e instanceof RegExp || e instanceof Function;
      },
      it = function (t) {
        (rt && rt === t) ||
          ((t && "object" === e(t)) || (t = {}),
          (t = D(t)),
          (Ae = "ALLOWED_TAGS" in t ? O({}, t.ALLOWED_TAGS) : we),
          (xe = "ALLOWED_ATTR" in t ? O({}, t.ALLOWED_ATTR) : ke),
          (Ve = "ADD_URI_SAFE_ATTR" in t ? O(D($e), t.ADD_URI_SAFE_ATTR) : $e),
          (Ye = "ADD_DATA_URI_TAGS" in t ? O(D(Ke), t.ADD_DATA_URI_TAGS) : Ke),
          (We = "FORBID_CONTENTS" in t ? O({}, t.FORBID_CONTENTS) : qe),
          (_e = "FORBID_TAGS" in t ? O({}, t.FORBID_TAGS) : {}),
          (Oe = "FORBID_ATTR" in t ? O({}, t.FORBID_ATTR) : {}),
          (Ge = "USE_PROFILES" in t && t.USE_PROFILES),
          (De = !1 !== t.ALLOW_ARIA_ATTR),
          (Ce = !1 !== t.ALLOW_DATA_ATTR),
          (Me = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (Re = t.SAFE_FOR_TEMPLATES || !1),
          (Le = t.WHOLE_DOCUMENT || !1),
          (He = t.RETURN_DOM || !1),
          (Ue = t.RETURN_DOM_FRAGMENT || !1),
          (ze = t.RETURN_TRUSTED_TYPE || !1),
          (Fe = t.FORCE_BODY || !1),
          (Be = !1 !== t.SANITIZE_DOM),
          (je = !1 !== t.KEEP_CONTENT),
          (Pe = t.IN_PLACE || !1),
          (Ee = t.ALLOWED_URI_REGEXP || Ee),
          (Qe = t.NAMESPACE || Je),
          t.CUSTOM_ELEMENT_HANDLING &&
            at(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (Se.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          t.CUSTOM_ELEMENT_HANDLING &&
            at(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (Se.attributeNameCheck =
              t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          t.CUSTOM_ELEMENT_HANDLING &&
            "boolean" ==
              typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
            (Se.allowCustomizedBuiltInElements =
              t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          (de = de =
            -1 === tt.indexOf(t.PARSER_MEDIA_TYPE) ? nt : t.PARSER_MEDIA_TYPE),
          (he =
            "application/xhtml+xml" === de
              ? function (e) {
                  return e;
                }
              : N),
          Re && (Ce = !1),
          Ue && (He = !0),
          Ge &&
            ((Ae = O({}, o(U))),
            (xe = []),
            !0 === Ge.html && (O(Ae, M), O(xe, z)),
            !0 === Ge.svg && (O(Ae, R), O(xe, B), O(xe, P)),
            !0 === Ge.svgFilters && (O(Ae, L), O(xe, B), O(xe, P)),
            !0 === Ge.mathMl && (O(Ae, F), O(xe, j), O(xe, P))),
          t.ADD_TAGS && (Ae === we && (Ae = D(Ae)), O(Ae, t.ADD_TAGS)),
          t.ADD_ATTR && (xe === ke && (xe = D(xe)), O(xe, t.ADD_ATTR)),
          t.ADD_URI_SAFE_ATTR && O(Ve, t.ADD_URI_SAFE_ATTR),
          t.FORBID_CONTENTS &&
            (We === qe && (We = D(We)), O(We, t.FORBID_CONTENTS)),
          je && (Ae["#text"] = !0),
          Le && O(Ae, ["html", "head", "body"]),
          Ae.table && (O(Ae, ["tbody"]), delete _e.tbody),
          m && m(t),
          (rt = t));
      },
      lt = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
      ct = O({}, ["foreignobject", "desc", "title", "annotation-xml"]),
      ut = O({}, ["title", "style", "font", "a", "script"]),
      st = O({}, R);
    O(st, L), O(st, I);
    var mt = O({}, F);
    O(mt, H);
    var ft = function (e) {
        var t = ne(e);
        (t && t.tagName) || (t = { namespaceURI: Je, tagName: "template" });
        var n = N(e.tagName),
          r = N(t.tagName);
        return e.namespaceURI === Ze
          ? t.namespaceURI === Je
            ? "svg" === n
            : t.namespaceURI === Xe
              ? "svg" === n && ("annotation-xml" === r || lt[r])
              : Boolean(st[n])
          : e.namespaceURI === Xe
            ? t.namespaceURI === Je
              ? "math" === n
              : t.namespaceURI === Ze
                ? "math" === n && ct[r]
                : Boolean(mt[n])
            : e.namespaceURI === Je &&
              !(t.namespaceURI === Ze && !ct[r]) &&
              !(t.namespaceURI === Xe && !lt[r]) &&
              !mt[n] &&
              (ut[n] || !st[n]);
      },
      pt = function (e) {
        T(r.removed, { element: e });
        try {
          e.parentNode.removeChild(e);
        } catch (t) {
          try {
            e.outerHTML = ae;
          } catch (t) {
            e.remove();
          }
        }
      },
      dt = function (e, t) {
        try {
          T(r.removed, { attribute: t.getAttributeNode(e), from: t });
        } catch (e) {
          T(r.removed, { attribute: null, from: t });
        }
        if ((t.removeAttribute(e), "is" === e && !xe[e]))
          if (He || Ue)
            try {
              pt(t);
            } catch (e) {}
          else
            try {
              t.setAttribute(e, "");
            } catch (e) {}
      },
      ht = function (e) {
        var t, n;
        if (Fe) e = "<remove></remove>" + e;
        else {
          var r = E(e, /^[\r\n\t ]+/);
          n = r && r[0];
        }
        "application/xhtml+xml" === de &&
          (e =
            '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
            e +
            "</body></html>");
        var o = oe ? oe.createHTML(e) : e;
        if (Qe === Je)
          try {
            t = new g().parseFromString(o, de);
          } catch (e) {}
        if (!t || !t.documentElement) {
          t = le.createDocument(Qe, "template", null);
          try {
            t.documentElement.innerHTML = et ? "" : o;
          } catch (e) {}
        }
        var a = t.body || t.documentElement;
        return (
          e &&
            n &&
            a.insertBefore(i.createTextNode(n), a.childNodes[0] || null),
          Qe === Je
            ? se.call(t, Le ? "html" : "body")[0]
            : Le
              ? t.documentElement
              : a
        );
      },
      gt = function (e) {
        return ce.call(
          e.ownerDocument || e,
          e,
          f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT,
          null,
          !1,
        );
      },
      yt = function (e) {
        return (
          e instanceof h &&
          ("string" != typeof e.nodeName ||
            "string" != typeof e.textContent ||
            "function" != typeof e.removeChild ||
            !(e.attributes instanceof d) ||
            "function" != typeof e.removeAttribute ||
            "function" != typeof e.setAttribute ||
            "string" != typeof e.namespaceURI ||
            "function" != typeof e.insertBefore)
        );
      },
      bt = function (t) {
        return "object" === e(u)
          ? t instanceof u
          : t &&
              "object" === e(t) &&
              "number" == typeof t.nodeType &&
              "string" == typeof t.nodeName;
      },
      vt = function (e, t, n) {
        pe[e] &&
          b(pe[e], function (e) {
            e.call(r, t, n, rt);
          });
      },
      Tt = function (e) {
        var t;
        if ((vt("beforeSanitizeElements", e, null), yt(e))) return pt(e), !0;
        if (k(/[\u0080-\uFFFF]/, e.nodeName)) return pt(e), !0;
        var n = he(e.nodeName);
        if (
          (vt("uponSanitizeElement", e, { tagName: n, allowedTags: Ae }),
          e.hasChildNodes() &&
            !bt(e.firstElementChild) &&
            (!bt(e.content) || !bt(e.content.firstElementChild)) &&
            k(/<[/\w]/g, e.innerHTML) &&
            k(/<[/\w]/g, e.textContent))
        )
          return pt(e), !0;
        if ("select" === n && k(/<template/i, e.innerHTML)) return pt(e), !0;
        if (!Ae[n] || _e[n]) {
          if (!_e[n] && Et(n)) {
            if (Se.tagNameCheck instanceof RegExp && k(Se.tagNameCheck, n))
              return !1;
            if (Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))
              return !1;
          }
          if (je && !We[n]) {
            var o = ne(e) || e.parentNode,
              a = te(e) || e.childNodes;
            if (a && o)
              for (var i = a.length - 1; i >= 0; --i)
                o.insertBefore(Q(a[i], !0), ee(e));
          }
          return pt(e), !0;
        }
        return e instanceof s && !ft(e)
          ? (pt(e), !0)
          : ("noscript" !== n && "noembed" !== n) ||
              !k(/<\/no(script|embed)/i, e.innerHTML)
            ? (Re &&
                3 === e.nodeType &&
                ((t = e.textContent),
                (t = A(t, ge, " ")),
                (t = A(t, ye, " ")),
                e.textContent !== t &&
                  (T(r.removed, { element: e.cloneNode() }),
                  (e.textContent = t))),
              vt("afterSanitizeElements", e, null),
              !1)
            : (pt(e), !0);
      },
      Nt = function (e, t, n) {
        if (Be && ("id" === t || "name" === t) && (n in i || n in ot))
          return !1;
        if (Ce && !Oe[t] && k(be, t));
        else if (De && k(ve, t));
        else if (!xe[t] || Oe[t]) {
          if (
            !(
              (Et(e) &&
                ((Se.tagNameCheck instanceof RegExp && k(Se.tagNameCheck, e)) ||
                  (Se.tagNameCheck instanceof Function &&
                    Se.tagNameCheck(e))) &&
                ((Se.attributeNameCheck instanceof RegExp &&
                  k(Se.attributeNameCheck, t)) ||
                  (Se.attributeNameCheck instanceof Function &&
                    Se.attributeNameCheck(t)))) ||
              ("is" === t &&
                Se.allowCustomizedBuiltInElements &&
                ((Se.tagNameCheck instanceof RegExp && k(Se.tagNameCheck, n)) ||
                  (Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))))
            )
          )
            return !1;
        } else if (Ve[t]);
        else if (k(Ee, A(n, Ne, "")));
        else if (
          ("src" !== t && "xlink:href" !== t && "href" !== t) ||
          "script" === e ||
          0 !== w(n, "data:") ||
          !Ye[e]
        ) {
          if (Me && !k(Te, A(n, Ne, "")));
          else if (n) return !1;
        } else;
        return !0;
      },
      Et = function (e) {
        return e.indexOf("-") > 0;
      },
      At = function (e) {
        var t, n, o, a;
        vt("beforeSanitizeAttributes", e, null);
        var i = e.attributes;
        if (i) {
          var l = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: xe,
          };
          for (a = i.length; a--; ) {
            var c = (t = i[a]),
              u = c.name,
              s = c.namespaceURI;
            if (
              ((n = "value" === u ? t.value : x(t.value)),
              (o = he(u)),
              (l.attrName = o),
              (l.attrValue = n),
              (l.keepAttr = !0),
              (l.forceKeepAttr = void 0),
              vt("uponSanitizeAttribute", e, l),
              (n = l.attrValue),
              !l.forceKeepAttr && (dt(u, e), l.keepAttr))
            )
              if (k(/\/>/i, n)) dt(u, e);
              else {
                Re && ((n = A(n, ge, " ")), (n = A(n, ye, " ")));
                var m = he(e.nodeName);
                if (Nt(m, o, n))
                  try {
                    s ? e.setAttributeNS(s, u, n) : e.setAttribute(u, n),
                      v(r.removed);
                  } catch (e) {}
              }
          }
          vt("afterSanitizeAttributes", e, null);
        }
      },
      wt = function e(t) {
        var n,
          r = gt(t);
        for (vt("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); )
          vt("uponSanitizeShadowNode", n, null),
            Tt(n) || (n.content instanceof l && e(n.content), At(n));
        vt("afterSanitizeShadowDOM", t, null);
      };
    return (
      (r.sanitize = function (t, o) {
        var i, c, s, m, f;
        if (
          ((et = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !bt(t))
        ) {
          if ("function" != typeof t.toString)
            throw S("toString is not a function");
          if ("string" != typeof (t = t.toString()))
            throw S("dirty is not a string, aborting");
        }
        if (!r.isSupported) {
          if (
            "object" === e(n.toStaticHTML) ||
            "function" == typeof n.toStaticHTML
          ) {
            if ("string" == typeof t) return n.toStaticHTML(t);
            if (bt(t)) return n.toStaticHTML(t.outerHTML);
          }
          return t;
        }
        if (
          (Ie || it(o), (r.removed = []), "string" == typeof t && (Pe = !1), Pe)
        ) {
          if (t.nodeName) {
            var p = he(t.nodeName);
            if (!Ae[p] || _e[p])
              throw S(
                "root node is forbidden and cannot be sanitized in-place",
              );
          }
        } else if (t instanceof u)
          (1 ===
            (c = (i = ht("\x3c!----\x3e")).ownerDocument.importNode(t, !0))
              .nodeType &&
            "BODY" === c.nodeName) ||
          "HTML" === c.nodeName
            ? (i = c)
            : i.appendChild(c);
        else {
          if (!He && !Re && !Le && -1 === t.indexOf("<"))
            return oe && ze ? oe.createHTML(t) : t;
          if (!(i = ht(t))) return He ? null : ze ? ae : "";
        }
        i && Fe && pt(i.firstChild);
        for (var d = gt(Pe ? t : i); (s = d.nextNode()); )
          (3 === s.nodeType && s === m) ||
            Tt(s) ||
            (s.content instanceof l && wt(s.content), At(s), (m = s));
        if (((m = null), Pe)) return t;
        if (He) {
          if (Ue)
            for (f = ue.call(i.ownerDocument); i.firstChild; )
              f.appendChild(i.firstChild);
          else f = i;
          return xe.shadowroot && (f = me.call(a, f, !0)), f;
        }
        var h = Le ? i.outerHTML : i.innerHTML;
        return (
          Le &&
            Ae["!doctype"] &&
            i.ownerDocument &&
            i.ownerDocument.doctype &&
            i.ownerDocument.doctype.name &&
            k(X, i.ownerDocument.doctype.name) &&
            (h = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + h),
          Re && ((h = A(h, ge, " ")), (h = A(h, ye, " "))),
          oe && ze ? oe.createHTML(h) : h
        );
      }),
      (r.setConfig = function (e) {
        it(e), (Ie = !0);
      }),
      (r.clearConfig = function () {
        (rt = null), (Ie = !1);
      }),
      (r.isValidAttribute = function (e, t, n) {
        rt || it({});
        var r = he(e),
          o = he(t);
        return Nt(r, o, n);
      }),
      (r.addHook = function (e, t) {
        "function" == typeof t && ((pe[e] = pe[e] || []), T(pe[e], t));
      }),
      (r.removeHook = function (e) {
        if (pe[e]) return v(pe[e]);
      }),
      (r.removeHooks = function (e) {
        pe[e] && (pe[e] = []);
      }),
      (r.removeAllHooks = function () {
        pe = {};
      }),
      r
    );
  })();
});
/*!/wp-content/plugins/embed-any-document/js/pdfobject.min.js*/
/**
 *  PDFObject v2.1.1
 *  https://github.com/pipwerks/PDFObject
 *  @license
 *  Copyright (c) 2008-2018 Philip Hutchison
 *  MIT-style license: http://pipwerks.mit-license.org/
 *  UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.PDFObject = t());
})(this, function () {
  "use strict";
  if ("undefined" == typeof window || "undefined" == typeof navigator)
    return !1;
  var e = window.navigator.userAgent,
    t =
      void 0 !== navigator.mimeTypes &&
      void 0 !== navigator.mimeTypes["application/pdf"],
    v = void 0 !== window.Promise,
    o =
      -1 !== e.indexOf("irefox") &&
      -1 === e.indexOf("Mobile") &&
      -1 === e.indexOf("Tablet") &&
      18 < parseInt(e.split("rv:")[1].split(".")[0], 10),
    b = /iphone|ipad|ipod/i.test(e.toLowerCase()),
    n = function (e) {
      var t;
      try {
        t = new ActiveXObject(e);
      } catch (e) {
        t = null;
      }
      return t;
    },
    i = function () {
      return !!(window.ActiveXObject || "ActiveXObject" in window);
    },
    h =
      !b &&
      navigator.vendor &&
      -1 !== navigator.vendor.indexOf("Apple") &&
      navigator.userAgent &&
      -1 !== navigator.userAgent.indexOf("Safari"),
    r = function () {
      return !(!n("AcroPDF.PDF") && !n("PDF.PdfCtrl"));
    },
    y = !b && (o || t || (i() && r())),
    w = function (e) {
      var t,
        o = "";
      if (e) {
        for (t in e)
          e.hasOwnProperty(t) &&
            (o += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]) + "&");
        o = o && (o = "#" + o).slice(0, o.length - 1);
      }
      return o;
    },
    d = function (e) {
      "undefined" != typeof console &&
        console.log &&
        console.log("[PDFObject] " + e);
    },
    P = function (e) {
      return d(e), !1;
    },
    D = function (e) {
      var t = document.body;
      return (
        "string" == typeof e
          ? (t = document.querySelector(e))
          : "undefined" != typeof jQuery && e instanceof jQuery && e.length
            ? (t = e.get(0))
            : void 0 !== e.nodeType && 1 === e.nodeType && (t = e),
        t
      );
    },
    s = function (e) {
      var t = "pdfobject-container",
        o = e.className.split(/\s+/);
      -1 === o.indexOf(t) && (o.push(t), (e.className = o.join(" ")));
    },
    T = function (e, t, o, n, i) {
      var r = n + "?file=" + encodeURIComponent(t) + o,
        d =
          "<div style='" +
          (b
            ? "-webkit-overflow-scrolling: touch; overflow-y: scroll; "
            : "overflow: hidden; ") +
          "position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  " +
          i +
          " src='" +
          r +
          "' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";
      return (
        s(e),
        (e.style.position = "relative"),
        (e.style.overflow = "auto"),
        (e.innerHTML = d),
        e.getElementsByTagName("iframe")[0]
      );
    },
    j = function (e, t, o, n, i, r, d) {
      var a = "",
        a =
          t && t !== document.body
            ? "width: " + i + "; height: " + r + ";"
            : "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";
      return (
        s(e),
        (e.innerHTML =
          "<embed " +
          d +
          " class='pdfobject' src='" +
          o +
          n +
          "' type='application/pdf' style='overflow: auto; " +
          a +
          "'/>"),
        e.getElementsByTagName("embed")[0]
      );
    },
    F = function (e, t, o, n, i, r, d) {
      var a = "",
        a =
          t && t !== document.body
            ? "width: " + i + "; height: " + r + ";"
            : "position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";
      return (
        (e.className += " pdfobject-container"),
        (e.innerHTML =
          "<iframe " +
          d +
          " class='pdfobject' src='" +
          o +
          n +
          "' type='application/pdf' style='border: none; " +
          a +
          "'/>"),
        e.getElementsByTagName("iframe")[0]
      );
    };
  return {
    embed: function (e, t, o) {
      if ("string" != typeof e) return P("URL is not valid");
      t = void 0 !== t && t;
      var n,
        i =
          (o = void 0 !== o ? o : {}).id && "string" == typeof o.id
            ? "id='" + o.id + "'"
            : "",
        r = !!o.page && o.page,
        d = o.pdfOpenParams ? o.pdfOpenParams : {},
        a = void 0 === o.fallbackLink || o.fallbackLink,
        s = o.width ? o.width : "100%",
        f = o.height ? o.height : "100%",
        p = "boolean" != typeof o.assumptionMode || o.assumptionMode,
        l = "boolean" == typeof o.forcePDFJS && o.forcePDFJS,
        c = "boolean" == typeof o.supportRedirect && o.supportRedirect,
        u = !!o.PDFJS_URL && o.PDFJS_URL,
        m = D(t),
        g = "";
      return m
        ? (r && (d.page = r),
          (n = w(d)),
          l && u
            ? T(m, e, n, u, i)
            : y || (p && v && !b)
              ? (c && h ? F : j)(m, t, e, n, s, f, i)
              : u
                ? T(m, e, n, u, i)
                : (a &&
                    ((g =
                      "string" == typeof a
                        ? a
                        : "<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>"),
                    (m.innerHTML = g.replace(/\[url\]/g, e))),
                  P("This browser does not support embedded PDFs")))
        : P("Target element cannot be determined");
    },
    pdfobjectversion: "2.1.1",
    supportsPDFs: y,
  };
});
/*!/wp-content/plugins/embed-any-document/js/embed-public.min.js*/
/* [inline: cdata] */ var eadPublic = []; /* [/inline: cdata] */
jQuery(function (c) {
  c(".ead-iframe-wrapper").each(function () {
    var e = c(this),
      t = e.find(".ead-iframe"),
      a = e.parent(".ead-document").data("viewer"),
      i = void 0 !== a && 0 < a.length && a,
      d = t.data("src"),
      r = t.attr("loading"),
      n = !1;
    ((void 0 !== d && 0 < d.length) || (void 0 !== r && "lazy" === r)) &&
      (n = !0);
    var s = t;
    n ||
      (s = c('<iframe class="ead-iframe"></iframe>')).attr({
        src: t.attr("src"),
        style: t.attr("style"),
        title: t.attr("title"),
      }),
      i || s.css("visibility", "visible"),
      s.on("load", function () {
        c(this)
          .parents(".ead-document")
          .find(".ead-document-loading")
          .css("display", "none");
      }),
      n || e.html(s);
  }),
    c(".ead-document[data-pdf-src]").each(function () {
      var e,
        t = c(this),
        a = t.find(".ead-iframe"),
        i = t.data("pdfSrc"),
        d =
          void 0 !== (d = t.data("viewer")) &&
          0 < i.length &&
          0 < d.length &&
          d,
        r =
          "pdfjs" in eadPublic &&
          0 < eadPublic.pdfjs.length &&
          "built-in" === d;
      d &&
        ("browser" === d || r) &&
        (PDFObject.supportsPDFs || r
          ? ((e = {}),
            (e = r
              ? { forcePDFJS: !0, PDFJS_URL: eadPublic.pdfjs }
              : { width: a.css("width"), height: a.css("height") }),
            PDFObject.embed(i, t, e))
          : a.css("visibility", "visible"));
    }),
    c(document).on("click", ".ead-reload-btn", function (e) {
      e.preventDefault();
      var t = c(this).parents(".ead-document"),
        a = t.find(".ead-iframe").attr("src");
      t.find(".ead-iframe").attr("src", a);
    });
});
/*!/wp-content/cache/asset-cleanup/js/item/content__uploads__bb-plugin__cache__1083-layout-js-v7b48019266ca58213a1155aed922900510c1736f.js*/
/*!/wp-content/uploads/bb-plugin/cache/1083-layout.js*/
var wpAjaxUrl =
  "https://www.eagleeyeinternationalprotectiveservices.com/wp-admin/admin-ajax.php";
var flBuilderUrl =
  "https://www.eagleeyeinternationalprotectiveservices.com/wp-content/plugins/bb-plugin/";
var FLBuilderLayoutConfig = {
  anchorLinkAnimations: { duration: 1000, easing: "swing", offset: 100 },
  paths: {
    pluginUrl:
      "https://www.eagleeyeinternationalprotectiveservices.com/wp-content/plugins/bb-plugin/",
    wpAjaxUrl:
      "https://www.eagleeyeinternationalprotectiveservices.com/wp-admin/admin-ajax.php",
  },
  breakpoints: { small: 768, medium: 992, large: 1200 },
  waypoint: { offset: 80 },
  emptyColWidth: "0%",
};
(function ($) {
  if (typeof FLBuilderLayout != "undefined") {
    return;
  }
  FLBuilderLayout = {
    init: function () {
      FLBuilderLayout._destroy();
      FLBuilderLayout._initClasses();
      FLBuilderLayout._initBackgrounds();
      FLBuilderLayout._initRowShapeLayerHeight();
      if (0 === $(".fl-builder-edit").length) {
        FLBuilderLayout._initModuleAnimations();
        FLBuilderLayout._initAnchorLinks();
        FLBuilderLayout._initHash();
        FLBuilderLayout._initForms();
        FLBuilderLayout._reorderMenu();
      } else {
        FLBuilderLayout._initNestedColsWidth();
      }
    },
    refreshGalleries: function (element) {
      var $element = "undefined" == typeof element ? $("body") : $(element),
        mfContent = $element.find(".fl-mosaicflow-content"),
        wmContent = $element.find(".fl-gallery"),
        mfObject = null;
      if (mfContent) {
        mfObject = mfContent.data("mosaicflow");
        if (mfObject) {
          mfObject.columns = $([]);
          mfObject.columnsHeights = [];
          mfContent.data("mosaicflow", mfObject);
          mfContent.mosaicflow("refill");
        }
      }
      if (wmContent) {
        wmContent.trigger("refreshWookmark");
      }
    },
    refreshGridLayout: function (element) {
      var $element = "undefined" == typeof element ? $("body") : $(element),
        msnryContent = $element.find(".masonry");
      if (msnryContent.length) {
        msnryContent.masonry("layout");
      }
    },
    reloadSlider: function (content) {
      var $content = "undefined" == typeof content ? $("body") : $(content);
      if ($content.find(".bx-viewport > div").length > 0) {
        $.each($content.find(".bx-viewport > div"), function (key, slider) {
          setTimeout(function () {
            $(slider).data("bxSlider").reloadSlider();
          }, 100);
        });
      }
    },
    resizeAudio: function (element) {
      var $element = "undefined" == typeof element ? $("body") : $(element),
        audioPlayers = $element.find(".wp-audio-shortcode.mejs-audio"),
        player = null,
        mejsPlayer = null,
        rail = null,
        railWidth = 400;
      if (audioPlayers.length && typeof mejs !== "undefined") {
        audioPlayers.each(function () {
          player = $(this);
          mejsPlayer = mejs.players[player.attr("id")];
          rail = player.find(".mejs-controls .mejs-time-rail");
          var innerMejs = player.find(".mejs-inner"),
            total = player.find(".mejs-controls .mejs-time-total");
          if (typeof mejsPlayer !== "undefined") {
            railWidth = Math.ceil(player.width() * 0.8);
            if (innerMejs.length) {
              rail.css("width", railWidth + "px!important");
              mejsPlayer.options.autosizeProgress = !0;
              setTimeout(function () {
                mejsPlayer.setControlsSize();
              }, 50);
              player
                .find(".mejs-inner")
                .css({ visibility: "visible", height: "inherit" });
            }
          }
        });
      }
    },
    preloadAudio: function (element) {
      var $element = "undefined" == typeof element ? $("body") : $(element),
        contentWrap = $element.closest(".fl-accordion-item"),
        audioPlayers = $element.find(".wp-audio-shortcode.mejs-audio");
      if (
        !contentWrap.hasClass("fl-accordion-item-active") &&
        audioPlayers.find(".mejs-inner").length
      ) {
        audioPlayers
          .find(".mejs-inner")
          .css({ visibility: "hidden", height: 0 });
      }
    },
    resizeSlideshow: function () {
      if (typeof YUI !== "undefined") {
        YUI().use("node-event-simulate", function (Y) {
          Y.one(window).simulate("resize");
        });
      }
    },
    reloadGoogleMap: function (element) {
      var $element = "undefined" == typeof element ? $("body") : $(element),
        googleMap = $element.find('iframe[src*="google.com/maps"]');
      if (googleMap.length) {
        googleMap.attr("src", function (i, val) {
          return val;
        });
      }
    },
    _destroy: function () {
      var win = $(window);
      win.off("scroll.fl-bg-parallax");
      win.off("resize.fl-bg-video");
    },
    _isTouch: function () {
      if (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      ) {
        return !0;
      }
      return !1;
    },
    _isMobile: function () {
      return /Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(
        navigator.userAgent,
      );
    },
    _initClasses: function () {
      var body = $("body"),
        ua = navigator.userAgent;
      if (
        !body.hasClass("archive") &&
        $(".fl-builder-content-primary").length > 0
      ) {
        body.addClass("fl-builder");
      }
      if (FLBuilderLayout._isTouch()) {
        body.addClass("fl-builder-touch");
      }
      if (FLBuilderLayout._isMobile()) {
        body.addClass("fl-builder-mobile");
      }
      if ($(window).width() < FLBuilderLayoutConfig.breakpoints.small) {
        body.addClass("fl-builder-breakpoint-small");
      }
      if (
        $(window).width() > FLBuilderLayoutConfig.breakpoints.small &&
        $(window).width() < FLBuilderLayoutConfig.breakpoints.medium
      ) {
        body.addClass("fl-builder-breakpoint-medium");
      }
      if (
        $(window).width() > FLBuilderLayoutConfig.breakpoints.medium &&
        $(window).width() < FLBuilderLayoutConfig.breakpoints.large
      ) {
        body.addClass("fl-builder-breakpoint-large");
      }
      if ($(window).width() > FLBuilderLayoutConfig.breakpoints.large) {
        body.addClass("fl-builder-breakpoint-default");
      }
      if (ua.indexOf("Trident/7.0") > -1 && ua.indexOf("rv:11.0") > -1) {
        body.addClass("fl-builder-ie-11");
      }
    },
    _initBackgrounds: function () {
      var win = $(window);
      if ($(".fl-row-bg-parallax").length > 0 && !FLBuilderLayout._isMobile()) {
        FLBuilderLayout._scrollParallaxBackgrounds();
        FLBuilderLayout._initParallaxBackgrounds();
        win.on(
          "resize.fl-bg-parallax",
          FLBuilderLayout._initParallaxBackgrounds,
        );
        win.on(
          "scroll.fl-bg-parallax",
          FLBuilderLayout._scrollParallaxBackgrounds,
        );
      }
      if ($(".fl-bg-video").length > 0) {
        FLBuilderLayout._initBgVideos();
        FLBuilderLayout._resizeBgVideos();
        var resizeBGTimer = null;
        win.on("resize.fl-bg-video", function (e) {
          clearTimeout(resizeBGTimer);
          resizeBGTimer = setTimeout(function () {
            FLBuilderLayout._resizeBgVideos(e);
          }, 100);
        });
      }
    },
    _initParallaxBackgrounds: function () {
      $(".fl-row-bg-parallax").each(FLBuilderLayout._initParallaxBackground);
    },
    _initParallaxBackground: function () {
      var row = $(this),
        content = row.find("> .fl-row-content-wrap"),
        winWidth = $(window).width(),
        screenSize = "",
        imageSrc = { default: "", medium: "", responsive: "" };
      imageSrc.default = row.data("parallax-image") || "";
      imageSrc.medium = row.data("parallax-image-medium") || imageSrc.default;
      imageSrc.responsive =
        row.data("parallax-image-responsive") || imageSrc.medium;
      if (winWidth > FLBuilderLayoutConfig.breakpoints.medium) {
        screenSize = "default";
      } else if (
        winWidth > FLBuilderLayoutConfig.breakpoints.small &&
        winWidth <= FLBuilderLayoutConfig.breakpoints.medium
      ) {
        screenSize = "medium";
      } else if (winWidth <= FLBuilderLayoutConfig.breakpoints.small) {
        screenSize = "responsive";
      }
      content.css("background-image", "url(" + imageSrc[screenSize] + ")");
      row.data("current-image-loaded", screenSize);
    },
    _scrollParallaxBackgrounds: function () {
      $(".fl-row-bg-parallax").each(FLBuilderLayout._scrollParallaxBackground);
    },
    _scrollParallaxBackground: function () {
      var win = $(window),
        row = $(this),
        content = row.find("> .fl-row-content-wrap"),
        speed = row.data("parallax-speed"),
        offset = content.offset(),
        yPos = -((win.scrollTop() - offset.top) / speed),
        initialOffset =
          row.data("parallax-offset") != null ? row.data("parallax-offset") : 0,
        totalOffset = yPos - initialOffset;
      content.css("background-position", "center " + totalOffset + "px");
    },
    _initBgVideos: function () {
      $(".fl-bg-video").each(FLBuilderLayout._initBgVideo);
    },
    _initBgVideo: function () {
      var wrap = $(this),
        width = wrap.data("width"),
        height = wrap.data("height"),
        mp4 = wrap.data("mp4"),
        youtube = wrap.data("youtube"),
        vimeo = wrap.data("vimeo"),
        mp4Type = wrap.data("mp4-type"),
        webm = wrap.data("webm"),
        webmType = wrap.data("webm-type"),
        fallback = wrap.data("fallback"),
        loaded = wrap.data("loaded"),
        videoMobile = wrap.data("video-mobile"),
        fallbackTag = "",
        videoTag = null,
        mp4Tag = null,
        webmTag = null;
      if (loaded) {
        return;
      }
      videoTag = $("<video autoplay loop muted playsinline></video>");
      if ("undefined" != typeof fallback && "" != fallback) {
        videoTag.attr(
          "poster",
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        );
        videoTag.css({
          backgroundImage: 'url("' + fallback + '")',
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        });
      }
      if ("undefined" != typeof mp4 && "" != mp4) {
        mp4Tag = $("<source />");
        mp4Tag.attr("src", mp4);
        mp4Tag.attr("type", mp4Type);
        videoTag.append(mp4Tag);
      }
      if ("undefined" != typeof webm && "" != webm) {
        webmTag = $("<source />");
        webmTag.attr("src", webm);
        webmTag.attr("type", webmType);
        videoTag.append(webmTag);
      }
      if (
        !FLBuilderLayout._isMobile() ||
        (FLBuilderLayout._isMobile() && "yes" == videoMobile)
      ) {
        if ("undefined" != typeof youtube) {
          FLBuilderLayout._initYoutubeBgVideo.apply(this);
        } else if ("undefined" != typeof vimeo) {
          FLBuilderLayout._initVimeoBgVideo.apply(this);
        } else {
          wrap.append(videoTag);
        }
      } else {
        videoTag.attr("src", "");
        wrap.append(videoTag);
      }
      wrap.data("loaded", !0);
    },
    _initYoutubeBgVideo: function () {
      var playerWrap = $(this),
        videoId = playerWrap.data("video-id"),
        videoPlayer = playerWrap.find(".fl-bg-video-player"),
        enableAudio = playerWrap.data("enable-audio"),
        audioButton = playerWrap.find(".fl-bg-video-audio"),
        startTime =
          "undefined" !== typeof playerWrap.data("start")
            ? playerWrap.data("start")
            : 0,
        startTime =
          "undefined" !== typeof playerWrap.data("t") && startTime === 0
            ? playerWrap.data("t")
            : startTime,
        endTime =
          "undefined" !== typeof playerWrap.data("end")
            ? playerWrap.data("end")
            : 0,
        loop =
          "undefined" !== typeof playerWrap.data("loop")
            ? playerWrap.data("loop")
            : 1,
        stateCount = 0,
        player,
        fallback_showing;
      if (videoId) {
        fallback = playerWrap.data("fallback") || !1;
        if (fallback) {
          playerWrap.find("iframe").remove();
          fallbackTag = $("<div></div>");
          fallbackTag.addClass("fl-bg-video-fallback");
          fallbackTag.css(
            "background-image",
            "url(" + playerWrap.data("fallback") + ")",
          );
          fallbackTag.css("background-size", "cover");
          fallbackTag.css("transition", "background-image 1s");
          playerWrap.append(fallbackTag);
          fallback_showing = !0;
        }
        FLBuilderLayout._onYoutubeApiReady(function (YT) {
          setTimeout(function () {
            player = new YT.Player(videoPlayer[0], {
              videoId: videoId,
              events: {
                onReady: function (event) {
                  if ("no" === enableAudio || FLBuilderLayout._isMobile()) {
                    event.target.mute();
                  } else if ("yes" === enableAudio && event.target.isMuted) {
                    event.target.unMute();
                  }
                  playerWrap.data("YTPlayer", player);
                  FLBuilderLayout._resizeYoutubeBgVideo.apply(playerWrap);
                  event.target.playVideo();
                  if (audioButton.length > 0 && !FLBuilderLayout._isMobile()) {
                    audioButton.on(
                      "click",
                      { button: audioButton, player: player },
                      FLBuilderLayout._toggleBgVideoAudio,
                    );
                  }
                },
                onStateChange: function (event) {
                  if (event.data === 1) {
                    if (fallback_showing) {
                      $(".fl-bg-video-fallback").css(
                        "background-image",
                        "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
                      );
                    }
                  }
                  if (stateCount < 4) {
                    stateCount++;
                  }
                  if (
                    stateCount > 1 &&
                    (-1 === event.data || 2 === event.data) &&
                    "yes" === enableAudio
                  ) {
                    player.mute();
                    player.playVideo();
                    audioButton.show();
                  }
                  if (event.data === YT.PlayerState.ENDED && 1 === loop) {
                    if (startTime > 0) {
                      player.seekTo(startTime);
                    } else {
                      player.playVideo();
                    }
                  }
                },
                onError: function (event) {
                  console.info("YT Error: " + event.data);
                  FLBuilderLayout._onErrorYoutubeVimeo(playerWrap);
                },
              },
              playerVars: {
                playsinline: FLBuilderLayout._isMobile() ? 1 : 0,
                controls: 0,
                showinfo: 0,
                rel: 0,
                start: startTime,
                end: endTime,
              },
            });
          }, 1);
        });
      }
    },
    _onErrorYoutubeVimeo: function (playerWrap) {
      fallback = playerWrap.data("fallback") || !1;
      if (!fallback) {
        return !1;
      }
      playerWrap.find("iframe").remove();
      fallbackTag = $("<div></div>");
      fallbackTag.addClass("fl-bg-video-fallback");
      fallbackTag.css(
        "background-image",
        "url(" + playerWrap.data("fallback") + ")",
      );
      playerWrap.append(fallbackTag);
    },
    _onYoutubeApiReady: function (callback) {
      if (window.YT && YT.loaded) {
        callback(YT);
      } else {
        setTimeout(function () {
          FLBuilderLayout._onYoutubeApiReady(callback);
        }, 350);
      }
    },
    _initVimeoBgVideo: function () {
      var playerWrap = $(this),
        videoId = playerWrap.data("video-id"),
        videoPlayer = playerWrap.find(".fl-bg-video-player"),
        enableAudio = playerWrap.data("enable-audio"),
        audioButton = playerWrap.find(".fl-bg-video-audio"),
        player,
        width = playerWrap.outerWidth(),
        ua = navigator.userAgent;
      if (typeof Vimeo !== "undefined" && videoId) {
        player = new Vimeo.Player(videoPlayer[0], {
          id: videoId,
          loop: !0,
          title: !1,
          portrait: !1,
          background: !0,
          autopause: !1,
          muted: !0,
        });
        playerWrap.data("VMPlayer", player);
        if ("no" === enableAudio) {
          player.setVolume(0);
        } else if ("yes" === enableAudio) {
          if (
            ua.indexOf("Safari") > -1 ||
            ua.indexOf("Chrome") > -1 ||
            ua.indexOf("Firefox") > -1
          ) {
            player.setVolume(0);
            audioButton.show();
          } else {
            player.setVolume(1);
          }
        }
        player.play().catch(function (error) {
          FLBuilderLayout._onErrorYoutubeVimeo(playerWrap);
        });
        if (audioButton.length > 0) {
          audioButton.on(
            "click",
            { button: audioButton, player: player },
            FLBuilderLayout._toggleBgVideoAudio,
          );
        }
      }
    },
    _toggleBgVideoAudio: function (e) {
      var player = e.data.player,
        control = e.data.button.find(".fl-audio-control");
      if (control.hasClass("fa-volume-off")) {
        control.removeClass("fa-volume-off").addClass("fa-volume-up");
        e.data.button.find(".fa-times").hide();
        if ("function" === typeof player.unMute) {
          player.unMute();
        } else {
          player.setVolume(1);
        }
      } else {
        control.removeClass("fa-volume-up").addClass("fa-volume-off");
        e.data.button.find(".fa-times").show();
        if ("function" === typeof player.unMute) {
          player.mute();
        } else {
          player.setVolume(0);
        }
      }
    },
    _videoBgSourceError: function (e) {
      var source = $(e.target),
        wrap = source.closest(".fl-bg-video"),
        vid = wrap.find("video"),
        fallback = wrap.data("fallback"),
        fallbackTag = "";
      source.remove();
      if (vid.find("source").length) {
        return;
      } else if ("" !== fallback) {
        fallbackTag = $("<div></div>");
        fallbackTag.addClass("fl-bg-video-fallback");
        fallbackTag.css("background-image", "url(" + fallback + ")");
        wrap.append(fallbackTag);
        vid.remove();
      }
    },
    _resizeBgVideos: function () {
      $(".fl-bg-video").each(function () {
        FLBuilderLayout._resizeBgVideo.apply(this);
        if ($(this).parent().find("img").length > 0) {
          $(this)
            .parent()
            .imagesLoaded($.proxy(FLBuilderLayout._resizeBgVideo, this));
        }
      });
    },
    _resizeBgVideo: function () {
      if (
        0 === $(this).find("video").length &&
        0 === $(this).find("iframe").length
      ) {
        return;
      }
      var wrap = $(this),
        wrapHeight = wrap.outerHeight(),
        wrapWidth = wrap.outerWidth(),
        vid = wrap.find("video"),
        vidHeight = wrap.data("height"),
        vidWidth = wrap.data("width"),
        newWidth = wrapWidth,
        newHeight = Math.round((vidHeight * wrapWidth) / vidWidth),
        newLeft = 0,
        newTop = 0,
        iframe = wrap.find("iframe"),
        isRowFullHeight = $(this)
          .closest(".fl-row-bg-video")
          .hasClass("fl-row-full-height"),
        vidCSS = { top: "50%", left: "50%", transform: "translate(-50%,-50%)" };
      if (vid.length) {
        if (
          vidHeight === "" ||
          typeof vidHeight === "undefined" ||
          vidWidth === "" ||
          typeof vidWidth === "undefined"
        ) {
          vid.css({ left: "0px", top: "0px", width: newWidth + "px" });
          vid.on("loadedmetadata", FLBuilderLayout._resizeOnLoadedMeta);
          return;
        }
        if (!isRowFullHeight) {
          if (newHeight < wrapHeight) {
            newHeight = wrapHeight;
            newLeft = -((newWidth - wrapWidth) / 2);
            newWidth = vidHeight
              ? Math.round((vidWidth * wrapHeight) / vidHeight)
              : newWidth;
          } else {
            newTop = -((newHeight - wrapHeight) / 2);
          }
          vidCSS = {
            left: newLeft + "px",
            top: newTop + "px",
            height: newHeight + "px",
            width: newWidth + "px",
          };
        }
        vid.css(vidCSS);
      } else if (iframe.length) {
        if (typeof wrap.data("youtube") !== "undefined") {
          FLBuilderLayout._resizeYoutubeBgVideo.apply(this);
        }
      }
    },
    _resizeOnLoadedMeta: function () {
      var video = $(this),
        wrapHeight = video.parent().outerHeight(),
        wrapWidth = video.parent().outerWidth(),
        vidWidth = video[0].videoWidth,
        vidHeight = video[0].videoHeight,
        newHeight = Math.round((vidHeight * wrapWidth) / vidWidth),
        newWidth = wrapWidth,
        newLeft = 0,
        newTop = 0;
      if (newHeight < wrapHeight) {
        newHeight = wrapHeight;
        newWidth = Math.round((vidWidth * wrapHeight) / vidHeight);
        newLeft = -((newWidth - wrapWidth) / 2);
      } else {
        newTop = -((newHeight - wrapHeight) / 2);
      }
      video.parent().data("width", vidWidth);
      video.parent().data("height", vidHeight);
      video.css({
        left: newLeft + "px",
        top: newTop + "px",
        width: newWidth + "px",
        height: newHeight + "px",
      });
    },
    _resizeYoutubeBgVideo: function () {
      var wrap = $(this),
        wrapWidth = wrap.outerWidth(),
        wrapHeight = wrap.outerHeight(),
        player = wrap.data("YTPlayer"),
        video = player ? player.getIframe() : null,
        aspectRatioSetting = "16:9",
        aspectRatioArray = aspectRatioSetting.split(":"),
        aspectRatio = aspectRatioArray[0] / aspectRatioArray[1],
        ratioWidth = wrapWidth / aspectRatio,
        ratioHeight = wrapHeight * aspectRatio,
        isWidthFixed = wrapWidth / wrapHeight > aspectRatio,
        width = isWidthFixed ? wrapWidth : ratioHeight,
        height = isWidthFixed ? ratioWidth : wrapHeight;
      if (video) {
        $(video).width(width).height(height);
      }
    },
    _initModuleAnimations: function () {
      if (typeof jQuery.fn.waypoint !== "undefined") {
        $(".fl-animation").each(function () {
          var node = $(this),
            nodeTop = node.offset().top,
            winHeight = $(window).height(),
            bodyHeight = $("body").height(),
            waypoint = FLBuilderLayoutConfig.waypoint,
            offset = "80%";
          if (typeof waypoint.offset !== undefined) {
            offset = FLBuilderLayoutConfig.waypoint.offset + "%";
          }
          if (bodyHeight - nodeTop < winHeight * 0.2) {
            offset = "100%";
          }
          node.waypoint({
            offset: offset,
            handler: FLBuilderLayout._doModuleAnimation,
          });
        });
      }
    },
    _doModuleAnimation: function () {
      var module =
          "undefined" == typeof this.element ? $(this) : $(this.element),
        delay = parseFloat(module.data("animation-delay")),
        duration = parseFloat(module.data("animation-duration"));
      if (!isNaN(duration)) {
        module.css("animation-duration", duration + "s");
      }
      if (!isNaN(delay) && delay > 0) {
        setTimeout(function () {
          module.addClass("fl-animated");
        }, delay * 1000);
      } else {
        setTimeout(function () {
          module.addClass("fl-animated");
        }, 1);
      }
    },
    _initHash: function () {
      var hash = window.location.hash.replace("#", "").split("/").shift(),
        element = null,
        tabs = null,
        responsiveLabel = null,
        tabIndex = null,
        label = null;
      if ("" !== hash) {
        try {
          element = $("#" + hash);
          if (element.length > 0) {
            if (element.hasClass("fl-accordion-item")) {
              setTimeout(function () {
                element.find(".fl-accordion-button").trigger("click");
              }, 100);
            }
            if (element.hasClass("fl-tabs-panel")) {
              setTimeout(function () {
                tabs = element.closest(".fl-tabs");
                responsiveLabel = element.find(".fl-tabs-panel-label");
                tabIndex = responsiveLabel.data("index");
                label = tabs.find(
                  ".fl-tabs-labels .fl-tabs-label[data-index=" + tabIndex + "]",
                );
                label[0].click();
                FLBuilderLayout._scrollToElement(element);
              }, 100);
            }
          }
        } catch (e) {}
      }
    },
    _initAnchorLinks: function () {
      $("a").each(FLBuilderLayout._initAnchorLink);
    },
    _initAnchorLink: function () {
      var link = $(this),
        href = link.attr("href"),
        loc = window.location,
        id = null,
        element = null,
        flNode = !1;
      if (
        "undefined" != typeof href &&
        href.indexOf("#") > -1 &&
        link.closest("svg").length < 1
      ) {
        if (
          loc.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
          loc.hostname == this.hostname
        ) {
          try {
            id = href.split("#").pop();
            if (!id) {
              return;
            }
            element = $("#" + id);
            if (element.length > 0) {
              flNode =
                element.hasClass("fl-row") ||
                element.hasClass("fl-col") ||
                element.hasClass("fl-module");
              if (
                !element.hasClass("fl-no-scroll") &&
                (link.hasClass("fl-scroll-link") || flNode)
              ) {
                $(link).on(
                  "click",
                  FLBuilderLayout._scrollToElementOnLinkClick,
                );
              }
              if (element.hasClass("fl-accordion-item")) {
                $(link).on(
                  "click",
                  FLBuilderLayout._scrollToAccordionOnLinkClick,
                );
              }
              if (element.hasClass("fl-tabs-panel")) {
                $(link).on("click", FLBuilderLayout._scrollToTabOnLinkClick);
              }
            }
          } catch (e) {}
        }
      }
    },
    _scrollToElementOnLinkClick: function (e, callback) {
      var element = $("#" + $(this).attr("href").split("#").pop());
      FLBuilderLayout._scrollToElement(element, callback);
      e.preventDefault();
    },
    _scrollToElement: function (element, callback) {
      var config = FLBuilderLayoutConfig.anchorLinkAnimations,
        dest = 0,
        win = $(window),
        doc = $(document);
      if (element.length > 0) {
        if (
          "fixed" === element.css("position") ||
          "fixed" === element.parent().css("position")
        ) {
          dest = element.position().top;
        } else if (element.offset().top > doc.height() - win.height()) {
          dest = doc.height() - win.height();
        } else {
          dest = element.offset().top - config.offset;
        }
        $("html, body").animate(
          { scrollTop: dest },
          config.duration,
          config.easing,
          function () {
            if ("undefined" != typeof callback) {
              callback();
            }
            if (undefined != element.attr("id")) {
              if (history.pushState) {
                history.pushState(null, null, "#" + element.attr("id"));
              } else {
                window.location.hash = element.attr("id");
              }
            }
          },
        );
      }
    },
    _scrollToAccordionOnLinkClick: function (e) {
      var element = $("#" + $(this).attr("href").split("#").pop());
      if (element.length > 0) {
        var callback = function () {
          if (element) {
            element.find(".fl-accordion-button").trigger("click");
            element = !1;
          }
        };
        FLBuilderLayout._scrollToElementOnLinkClick.call(this, e, callback);
      }
    },
    _scrollToTabOnLinkClick: function (e) {
      var element = $("#" + $(this).attr("href").split("#").pop()),
        tabs = null,
        label = null,
        responsiveLabel = null;
      if (element.length > 0) {
        tabs = element.closest(".fl-tabs");
        responsiveLabel = element.find(".fl-tabs-panel-label");
        tabIndex = responsiveLabel.data("index");
        label = tabs.find(
          ".fl-tabs-labels .fl-tabs-label[data-index=" + tabIndex + "]",
        );
        if (responsiveLabel.is(":visible")) {
          var callback = function () {
            if (element) {
              responsiveLabel.trigger($.Event("click", { which: 1 }));
            }
          };
          FLBuilderLayout._scrollToElementOnLinkClick.call(this, e, callback);
        } else {
          label[0].click();
          FLBuilderLayout._scrollToElement(element);
        }
        e.preventDefault();
      }
    },
    _initForms: function () {
      if (!FLBuilderLayout._hasPlaceholderSupport) {
        $(".fl-form-field input").each(
          FLBuilderLayout._initFormFieldPlaceholderFallback,
        );
      }
      $(".fl-form-field input").on(
        "focus",
        FLBuilderLayout._clearFormFieldError,
      );
    },
    _hasPlaceholderSupport: function () {
      var input = document.createElement("input");
      return "undefined" != input.placeholder;
    },
    _initFormFieldPlaceholderFallback: function () {
      var field = $(this),
        val = field.val(),
        placeholder = field.attr("placeholder");
      if ("undefined" != placeholder && "" === val) {
        field.val(placeholder);
        field.on("focus", FLBuilderLayout._hideFormFieldPlaceholderFallback);
        field.on("blur", FLBuilderLayout._showFormFieldPlaceholderFallback);
      }
    },
    _hideFormFieldPlaceholderFallback: function () {
      var field = $(this),
        val = field.val(),
        placeholder = field.attr("placeholder");
      if (val == placeholder) {
        field.val("");
      }
    },
    _showFormFieldPlaceholderFallback: function () {
      var field = $(this),
        val = field.val(),
        placeholder = field.attr("placeholder");
      if ("" === val) {
        field.val(placeholder);
      }
    },
    _clearFormFieldError: function () {
      var field = $(this);
      field.removeClass("fl-form-error");
      field.siblings(".fl-form-error-message").hide();
    },
    _initRowShapeLayerHeight: function () {
      FLBuilderLayout._adjustRowShapeLayerHeight();
      $(window).on("resize", FLBuilderLayout._adjustRowShapeLayerHeight);
    },
    _initNestedColsWidth: function () {
      var nestedCols = $(".fl-col-has-cols");
      if (nestedCols.length <= 0) {
        return;
      }
      $(nestedCols).each(function (index, col) {
        if ($(col).width() <= 0) {
          $(col).css("width", FLBuilderLayoutConfig.emptyColWidth);
        }
      });
    },
    _adjustRowShapeLayerHeight: function () {
      var rowShapeLayers = $(".fl-builder-shape-layer");
      $(rowShapeLayers).each(function (index) {
        var rowShapeLayer = $(this),
          shape = $(rowShapeLayer).find("svg"),
          height = shape.height(),
          excludeShapes =
            ".fl-builder-shape-circle, .fl-builder-shape-dot-cluster, .fl-builder-shape-topography, .fl-builder-shape-rect";
        if (!rowShapeLayer.is(excludeShapes)) {
          $(shape).css("height", Math.ceil(height));
        }
      });
    },
    _string_to_slug: function (str) {
      str = str.replace(/^\s+|\s+$/g, "");
      if ("undefined" == typeof window._fl_string_to_slug_regex) {
        regex = new RegExp("[^a-zA-Z0-9'\":() !.,-_|]", "g");
      } else {
        regex = new RegExp(
          "[^" +
            window._fl_string_to_slug_regex +
            "'\":\(\) !.,-_|\\\p{Letter}]",
          "ug",
        );
      }
      str = str.replace(regex, "").replace(/\s+/g, " ");
      return str;
    },
    _reorderMenu: function () {
      if (
        $("#wp-admin-bar-fl-builder-frontend-edit-link-default li").length > 1
      ) {
        $("#wp-admin-bar-fl-builder-frontend-duplicate-link")
          .appendTo("#wp-admin-bar-fl-builder-frontend-edit-link-default")
          .css("padding-top", "5px")
          .css("border-top", "2px solid #1D2125")
          .css("margin-top", "5px");
      }
    },
  };
  $(function () {
    FLBuilderLayout.init();
  });
})(jQuery);
/*!/wp-includes/js/dist/hooks.min.js*/
/*! This file is auto-generated */
(() => {
  "use strict";
  var t = {
      d: (e, n) => {
        for (var r in n)
          t.o(n, r) &&
            !t.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      actions: () => S,
      addAction: () => m,
      addFilter: () => p,
      applyFilters: () => k,
      createHooks: () => h,
      currentAction: () => w,
      currentFilter: () => I,
      defaultHooks: () => f,
      didAction: () => O,
      didFilter: () => j,
      doAction: () => b,
      doingAction: () => x,
      doingFilter: () => T,
      filters: () => z,
      hasAction: () => v,
      hasFilter: () => y,
      removeAction: () => A,
      removeAllActions: () => F,
      removeAllFilters: () => g,
      removeFilter: () => _,
    });
  const n = function (t) {
    return "string" != typeof t || "" === t
      ? (console.error("The namespace must be a non-empty string."), !1)
      : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) ||
          (console.error(
            "The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.",
          ),
          !1);
  };
  const r = function (t) {
    return "string" != typeof t || "" === t
      ? (console.error("The hook name must be a non-empty string."), !1)
      : /^__/.test(t)
        ? (console.error("The hook name cannot begin with `__`."), !1)
        : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) ||
          (console.error(
            "The hook name can only contain numbers, letters, dashes, periods and underscores.",
          ),
          !1);
  };
  const o = function (t, e) {
    return function (o, i, s, c = 10) {
      const l = t[e];
      if (!r(o)) return;
      if (!n(i)) return;
      if ("function" != typeof s)
        return void console.error("The hook callback must be a function.");
      if ("number" != typeof c)
        return void console.error(
          "If specified, the hook priority must be a number.",
        );
      const u = { callback: s, priority: c, namespace: i };
      if (l[o]) {
        const t = l[o].handlers;
        let e;
        for (e = t.length; e > 0 && !(c >= t[e - 1].priority); e--);
        e === t.length ? (t[e] = u) : t.splice(e, 0, u),
          l.__current.forEach((t) => {
            t.name === o && t.currentIndex >= e && t.currentIndex++;
          });
      } else l[o] = { handlers: [u], runs: 0 };
      "hookAdded" !== o && t.doAction("hookAdded", o, i, s, c);
    };
  };
  const i = function (t, e, o = !1) {
    return function (i, s) {
      const c = t[e];
      if (!r(i)) return;
      if (!o && !n(s)) return;
      if (!c[i]) return 0;
      let l = 0;
      if (o)
        (l = c[i].handlers.length), (c[i] = { runs: c[i].runs, handlers: [] });
      else {
        const t = c[i].handlers;
        for (let e = t.length - 1; e >= 0; e--)
          t[e].namespace === s &&
            (t.splice(e, 1),
            l++,
            c.__current.forEach((t) => {
              t.name === i && t.currentIndex >= e && t.currentIndex--;
            }));
      }
      return "hookRemoved" !== i && t.doAction("hookRemoved", i, s), l;
    };
  };
  const s = function (t, e) {
    return function (n, r) {
      const o = t[e];
      return void 0 !== r
        ? n in o && o[n].handlers.some((t) => t.namespace === r)
        : n in o;
    };
  };
  const c = function (t, e, n = !1) {
    return function (r, ...o) {
      const i = t[e];
      i[r] || (i[r] = { handlers: [], runs: 0 }), i[r].runs++;
      const s = i[r].handlers;
      if (!s || !s.length) return n ? o[0] : void 0;
      const c = { name: r, currentIndex: 0 };
      for (i.__current.push(c); c.currentIndex < s.length; ) {
        const t = s[c.currentIndex].callback.apply(null, o);
        n && (o[0] = t), c.currentIndex++;
      }
      return i.__current.pop(), n ? o[0] : void 0;
    };
  };
  const l = function (t, e) {
    return function () {
      var n;
      const r = t[e];
      return null !== (n = r.__current[r.__current.length - 1]?.name) &&
        void 0 !== n
        ? n
        : null;
    };
  };
  const u = function (t, e) {
    return function (n) {
      const r = t[e];
      return void 0 === n
        ? void 0 !== r.__current[0]
        : !!r.__current[0] && n === r.__current[0].name;
    };
  };
  const a = function (t, e) {
    return function (n) {
      const o = t[e];
      if (r(n)) return o[n] && o[n].runs ? o[n].runs : 0;
    };
  };
  class d {
    constructor() {
      (this.actions = Object.create(null)),
        (this.actions.__current = []),
        (this.filters = Object.create(null)),
        (this.filters.__current = []),
        (this.addAction = o(this, "actions")),
        (this.addFilter = o(this, "filters")),
        (this.removeAction = i(this, "actions")),
        (this.removeFilter = i(this, "filters")),
        (this.hasAction = s(this, "actions")),
        (this.hasFilter = s(this, "filters")),
        (this.removeAllActions = i(this, "actions", !0)),
        (this.removeAllFilters = i(this, "filters", !0)),
        (this.doAction = c(this, "actions")),
        (this.applyFilters = c(this, "filters", !0)),
        (this.currentAction = l(this, "actions")),
        (this.currentFilter = l(this, "filters")),
        (this.doingAction = u(this, "actions")),
        (this.doingFilter = u(this, "filters")),
        (this.didAction = a(this, "actions")),
        (this.didFilter = a(this, "filters"));
    }
  }
  const h = function () {
      return new d();
    },
    f = h(),
    {
      addAction: m,
      addFilter: p,
      removeAction: A,
      removeFilter: _,
      hasAction: v,
      hasFilter: y,
      removeAllActions: F,
      removeAllFilters: g,
      doAction: b,
      applyFilters: k,
      currentAction: w,
      currentFilter: I,
      doingAction: x,
      doingFilter: T,
      didAction: O,
      didFilter: j,
      actions: S,
      filters: z,
    } = f;
  (window.wp = window.wp || {}).hooks = e;
})();
/*!/wp-includes/js/dist/i18n.min.js*/
/*! This file is auto-generated */
(() => {
  var t = {
      2058: (t, e, r) => {
        var n;
        !(function () {
          "use strict";
          var i = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder:
              /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/,
          };
          function a(t) {
            return (function (t, e) {
              var r,
                n,
                o,
                s,
                l,
                u,
                p,
                c,
                f,
                d = 1,
                h = t.length,
                g = "";
              for (n = 0; n < h; n++)
                if ("string" == typeof t[n]) g += t[n];
                else if ("object" == typeof t[n]) {
                  if ((s = t[n]).keys)
                    for (r = e[d], o = 0; o < s.keys.length; o++) {
                      if (null == r)
                        throw new Error(
                          a(
                            '[sprintf] Cannot access property "%s" of undefined value "%s"',
                            s.keys[o],
                            s.keys[o - 1],
                          ),
                        );
                      r = r[s.keys[o]];
                    }
                  else r = s.param_no ? e[s.param_no] : e[d++];
                  if (
                    (i.not_type.test(s.type) &&
                      i.not_primitive.test(s.type) &&
                      r instanceof Function &&
                      (r = r()),
                    i.numeric_arg.test(s.type) &&
                      "number" != typeof r &&
                      isNaN(r))
                  )
                    throw new TypeError(
                      a("[sprintf] expecting number but found %T", r),
                    );
                  switch ((i.number.test(s.type) && (c = r >= 0), s.type)) {
                    case "b":
                      r = parseInt(r, 10).toString(2);
                      break;
                    case "c":
                      r = String.fromCharCode(parseInt(r, 10));
                      break;
                    case "d":
                    case "i":
                      r = parseInt(r, 10);
                      break;
                    case "j":
                      r = JSON.stringify(
                        r,
                        null,
                        s.width ? parseInt(s.width) : 0,
                      );
                      break;
                    case "e":
                      r = s.precision
                        ? parseFloat(r).toExponential(s.precision)
                        : parseFloat(r).toExponential();
                      break;
                    case "f":
                      r = s.precision
                        ? parseFloat(r).toFixed(s.precision)
                        : parseFloat(r);
                      break;
                    case "g":
                      r = s.precision
                        ? String(Number(r.toPrecision(s.precision)))
                        : parseFloat(r);
                      break;
                    case "o":
                      r = (parseInt(r, 10) >>> 0).toString(8);
                      break;
                    case "s":
                      (r = String(r)),
                        (r = s.precision ? r.substring(0, s.precision) : r);
                      break;
                    case "t":
                      (r = String(!!r)),
                        (r = s.precision ? r.substring(0, s.precision) : r);
                      break;
                    case "T":
                      (r = Object.prototype.toString
                        .call(r)
                        .slice(8, -1)
                        .toLowerCase()),
                        (r = s.precision ? r.substring(0, s.precision) : r);
                      break;
                    case "u":
                      r = parseInt(r, 10) >>> 0;
                      break;
                    case "v":
                      (r = r.valueOf()),
                        (r = s.precision ? r.substring(0, s.precision) : r);
                      break;
                    case "x":
                      r = (parseInt(r, 10) >>> 0).toString(16);
                      break;
                    case "X":
                      r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase();
                  }
                  i.json.test(s.type)
                    ? (g += r)
                    : (!i.number.test(s.type) || (c && !s.sign)
                        ? (f = "")
                        : ((f = c ? "+" : "-"),
                          (r = r.toString().replace(i.sign, ""))),
                      (u = s.pad_char
                        ? "0" === s.pad_char
                          ? "0"
                          : s.pad_char.charAt(1)
                        : " "),
                      (p = s.width - (f + r).length),
                      (l = s.width && p > 0 ? u.repeat(p) : ""),
                      (g += s.align
                        ? f + r + l
                        : "0" === u
                          ? f + l + r
                          : l + f + r));
                }
              return g;
            })(
              (function (t) {
                if (s[t]) return s[t];
                var e,
                  r = t,
                  n = [],
                  a = 0;
                for (; r; ) {
                  if (null !== (e = i.text.exec(r))) n.push(e[0]);
                  else if (null !== (e = i.modulo.exec(r))) n.push("%");
                  else {
                    if (null === (e = i.placeholder.exec(r)))
                      throw new SyntaxError("[sprintf] unexpected placeholder");
                    if (e[2]) {
                      a |= 1;
                      var o = [],
                        l = e[2],
                        u = [];
                      if (null === (u = i.key.exec(l)))
                        throw new SyntaxError(
                          "[sprintf] failed to parse named argument key",
                        );
                      for (
                        o.push(u[1]);
                        "" !== (l = l.substring(u[0].length));

                      )
                        if (null !== (u = i.key_access.exec(l))) o.push(u[1]);
                        else {
                          if (null === (u = i.index_access.exec(l)))
                            throw new SyntaxError(
                              "[sprintf] failed to parse named argument key",
                            );
                          o.push(u[1]);
                        }
                      e[2] = o;
                    } else a |= 2;
                    if (3 === a)
                      throw new Error(
                        "[sprintf] mixing positional and named placeholders is not (yet) supported",
                      );
                    n.push({
                      placeholder: e[0],
                      param_no: e[1],
                      keys: e[2],
                      sign: e[3],
                      pad_char: e[4],
                      align: e[5],
                      width: e[6],
                      precision: e[7],
                      type: e[8],
                    });
                  }
                  r = r.substring(e[0].length);
                }
                return (s[t] = n);
              })(t),
              arguments,
            );
          }
          function o(t, e) {
            return a.apply(null, [t].concat(e || []));
          }
          var s = Object.create(null);
          (e.sprintf = a),
            (e.vsprintf = o),
            "undefined" != typeof window &&
              ((window.sprintf = a),
              (window.vsprintf = o),
              void 0 ===
                (n = function () {
                  return { sprintf: a, vsprintf: o };
                }.call(e, r, e, t)) || (t.exports = n));
        })();
      },
    },
    e = {};
  function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var a = (e[n] = { exports: {} });
    return t[n](a, a.exports, r), a.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var n = {};
  (() => {
    "use strict";
    r.r(n),
      r.d(n, {
        __: () => F,
        _n: () => j,
        _nx: () => L,
        _x: () => S,
        createI18n: () => x,
        defaultI18n: () => _,
        getLocaleData: () => v,
        hasTranslation: () => D,
        isRTL: () => T,
        resetLocaleData: () => w,
        setLocaleData: () => m,
        sprintf: () => a,
        subscribe: () => k,
      });
    var t = r(2058),
      e = r.n(t);
    const i = (function (t, e) {
      var r,
        n,
        i = 0;
      function a() {
        var a,
          o,
          s = r,
          l = arguments.length;
        t: for (; s; ) {
          if (s.args.length === arguments.length) {
            for (o = 0; o < l; o++)
              if (s.args[o] !== arguments[o]) {
                s = s.next;
                continue t;
              }
            return (
              s !== r &&
                (s === n && (n = s.prev),
                (s.prev.next = s.next),
                s.next && (s.next.prev = s.prev),
                (s.next = r),
                (s.prev = null),
                (r.prev = s),
                (r = s)),
              s.val
            );
          }
          s = s.next;
        }
        for (a = new Array(l), o = 0; o < l; o++) a[o] = arguments[o];
        return (
          (s = { args: a, val: t.apply(null, a) }),
          r ? ((r.prev = s), (s.next = r)) : (n = s),
          i === e.maxSize ? ((n = n.prev).next = null) : i++,
          (r = s),
          s.val
        );
      }
      return (
        (e = e || {}),
        (a.clear = function () {
          (r = null), (n = null), (i = 0);
        }),
        a
      );
    })(console.error);
    function a(t, ...r) {
      try {
        return e().sprintf(t, ...r);
      } catch (e) {
        return e instanceof Error && i("sprintf error: \n\n" + e.toString()), t;
      }
    }
    var o, s, l, u;
    (o = {
      "(": 9,
      "!": 8,
      "*": 7,
      "/": 7,
      "%": 7,
      "+": 6,
      "-": 6,
      "<": 5,
      "<=": 5,
      ">": 5,
      ">=": 5,
      "==": 4,
      "!=": 4,
      "&&": 3,
      "||": 2,
      "?": 1,
      "?:": 1,
    }),
      (s = ["(", "?"]),
      (l = { ")": ["("], ":": ["?", "?:"] }),
      (u = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/);
    var p = {
      "!": function (t) {
        return !t;
      },
      "*": function (t, e) {
        return t * e;
      },
      "/": function (t, e) {
        return t / e;
      },
      "%": function (t, e) {
        return t % e;
      },
      "+": function (t, e) {
        return t + e;
      },
      "-": function (t, e) {
        return t - e;
      },
      "<": function (t, e) {
        return t < e;
      },
      "<=": function (t, e) {
        return t <= e;
      },
      ">": function (t, e) {
        return t > e;
      },
      ">=": function (t, e) {
        return t >= e;
      },
      "==": function (t, e) {
        return t === e;
      },
      "!=": function (t, e) {
        return t !== e;
      },
      "&&": function (t, e) {
        return t && e;
      },
      "||": function (t, e) {
        return t || e;
      },
      "?:": function (t, e, r) {
        if (t) throw e;
        return r;
      },
    };
    function c(t) {
      var e = (function (t) {
        for (var e, r, n, i, a = [], p = []; (e = t.match(u)); ) {
          for (
            r = e[0], (n = t.substr(0, e.index).trim()) && a.push(n);
            (i = p.pop());

          ) {
            if (l[r]) {
              if (l[r][0] === i) {
                r = l[r][1] || r;
                break;
              }
            } else if (s.indexOf(i) >= 0 || o[i] < o[r]) {
              p.push(i);
              break;
            }
            a.push(i);
          }
          l[r] || p.push(r), (t = t.substr(e.index + r.length));
        }
        return (t = t.trim()) && a.push(t), a.concat(p.reverse());
      })(t);
      return function (t) {
        return (function (t, e) {
          var r,
            n,
            i,
            a,
            o,
            s,
            l = [];
          for (r = 0; r < t.length; r++) {
            if (((o = t[r]), (a = p[o]))) {
              for (n = a.length, i = Array(n); n--; ) i[n] = l.pop();
              try {
                s = a.apply(null, i);
              } catch (t) {
                return t;
              }
            } else s = e.hasOwnProperty(o) ? e[o] : +o;
            l.push(s);
          }
          return l[0];
        })(e, t);
      };
    }
    var f = { contextDelimiter: "", onMissingKey: null };
    function d(t, e) {
      var r;
      for (r in ((this.data = t),
      (this.pluralForms = {}),
      (this.options = {}),
      f))
        this.options[r] = void 0 !== e && r in e ? e[r] : f[r];
    }
    (d.prototype.getPluralForm = function (t, e) {
      var r,
        n,
        i,
        a = this.pluralForms[t];
      return (
        a ||
          ("function" !=
            typeof (i =
              (r = this.data[t][""])["Plural-Forms"] ||
              r["plural-forms"] ||
              r.plural_forms) &&
            ((n = (function (t) {
              var e, r, n;
              for (e = t.split(";"), r = 0; r < e.length; r++)
                if (0 === (n = e[r].trim()).indexOf("plural="))
                  return n.substr(7);
            })(r["Plural-Forms"] || r["plural-forms"] || r.plural_forms)),
            (i = (function (t) {
              var e = c(t);
              return function (t) {
                return +e({ n: t });
              };
            })(n))),
          (a = this.pluralForms[t] = i)),
        a(e)
      );
    }),
      (d.prototype.dcnpgettext = function (t, e, r, n, i) {
        var a, o, s;
        return (
          (a = void 0 === i ? 0 : this.getPluralForm(t, i)),
          (o = r),
          e && (o = e + this.options.contextDelimiter + r),
          (s = this.data[t][o]) && s[a]
            ? s[a]
            : (this.options.onMissingKey && this.options.onMissingKey(r, t),
              0 === a ? r : n)
        );
      });
    const h = { plural_forms: (t) => (1 === t ? 0 : 1) },
      g = /^i18n\.(n?gettext|has_translation)(_|$)/,
      x = (t, e, r) => {
        const n = new d({}),
          i = new Set(),
          a = () => {
            i.forEach((t) => t());
          },
          o = (t, e = "default") => {
            (n.data[e] = { ...n.data[e], ...t }),
              (n.data[e][""] = { ...h, ...n.data[e]?.[""] }),
              delete n.pluralForms[e];
          },
          s = (t, e) => {
            o(t, e), a();
          },
          l = (t = "default", e, r, i, a) => (
            n.data[t] || o(void 0, t), n.dcnpgettext(t, e, r, i, a)
          ),
          u = (t = "default") => t,
          p = (t, e, n) => {
            let i = l(n, e, t);
            return r
              ? ((i = r.applyFilters("i18n.gettext_with_context", i, t, e, n)),
                r.applyFilters("i18n.gettext_with_context_" + u(n), i, t, e, n))
              : i;
          };
        if ((t && s(t, e), r)) {
          const t = (t) => {
            g.test(t) && a();
          };
          r.addAction("hookAdded", "core/i18n", t),
            r.addAction("hookRemoved", "core/i18n", t);
        }
        return {
          getLocaleData: (t = "default") => n.data[t],
          setLocaleData: s,
          addLocaleData: (t, e = "default") => {
            (n.data[e] = {
              ...n.data[e],
              ...t,
              "": { ...h, ...n.data[e]?.[""], ...t?.[""] },
            }),
              delete n.pluralForms[e],
              a();
          },
          resetLocaleData: (t, e) => {
            (n.data = {}), (n.pluralForms = {}), s(t, e);
          },
          subscribe: (t) => (i.add(t), () => i.delete(t)),
          __: (t, e) => {
            let n = l(e, void 0, t);
            return r
              ? ((n = r.applyFilters("i18n.gettext", n, t, e)),
                r.applyFilters("i18n.gettext_" + u(e), n, t, e))
              : n;
          },
          _x: p,
          _n: (t, e, n, i) => {
            let a = l(i, void 0, t, e, n);
            return r
              ? ((a = r.applyFilters("i18n.ngettext", a, t, e, n, i)),
                r.applyFilters("i18n.ngettext_" + u(i), a, t, e, n, i))
              : a;
          },
          _nx: (t, e, n, i, a) => {
            let o = l(a, i, t, e, n);
            return r
              ? ((o = r.applyFilters(
                  "i18n.ngettext_with_context",
                  o,
                  t,
                  e,
                  n,
                  i,
                  a,
                )),
                r.applyFilters(
                  "i18n.ngettext_with_context_" + u(a),
                  o,
                  t,
                  e,
                  n,
                  i,
                  a,
                ))
              : o;
          },
          isRTL: () => "rtl" === p("ltr", "text direction"),
          hasTranslation: (t, e, i) => {
            const a = e ? e + "" + t : t;
            let o = !!n.data?.[null != i ? i : "default"]?.[a];
            return (
              r &&
                ((o = r.applyFilters("i18n.has_translation", o, t, e, i)),
                (o = r.applyFilters(
                  "i18n.has_translation_" + u(i),
                  o,
                  t,
                  e,
                  i,
                ))),
              o
            );
          },
        };
      },
      y = window.wp.hooks,
      b = x(void 0, void 0, y.defaultHooks),
      _ = b,
      v = b.getLocaleData.bind(b),
      m = b.setLocaleData.bind(b),
      w = b.resetLocaleData.bind(b),
      k = b.subscribe.bind(b),
      F = b.__.bind(b),
      S = b._x.bind(b),
      j = b._n.bind(b),
      L = b._nx.bind(b),
      T = b.isRTL.bind(b),
      D = b.hasTranslation.bind(b);
  })(),
    ((window.wp = window.wp || {}).i18n = n);
})();
/* [inline: after] */ wp.i18n.setLocaleData({
  "text direction\u0004ltr": ["ltr"],
}); /* [/inline: after] */
/*!/wp-content/plugins/contact-form-7/includes/swv/js/index.js*/
(() => {
  "use strict";
  var t = {
      d: (e, i) => {
        for (var s in i)
          t.o(i, s) &&
            !t.o(e, s) &&
            Object.defineProperty(e, s, { enumerable: !0, get: i[s] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  function i(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, i) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, i);
        }),
        t
      );
    };
    this.tree = e();
    const i =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, s] of this.formData) {
      const o = t.match(i);
      if (o)
        if ("" === o.groups.array) this.tree.set(o.groups.name, s);
        else {
          const t = [
            ...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(o.groups.name);
          const i = t.pop();
          t.reduce((t, i) => {
            if (
              (/^[0-9]+$/.test(i) && (i = parseInt(i)), t.get(i) instanceof Map)
            )
              return t.get(i);
            const s = e();
            return t.set(i, s), s;
          }, this.tree).set(i, s);
        }
    }
  }
  t.r(e),
    t.d(e, {
      all: () => D,
      any: () => M,
      date: () => f,
      dayofweek: () => u,
      email: () => r,
      enum: () => h,
      file: () => m,
      maxdate: () => z,
      maxfilesize: () => $,
      maxitems: () => v,
      maxlength: () => x,
      maxnumber: () => b,
      mindate: () => A,
      minfilesize: () => j,
      minitems: () => w,
      minlength: () => g,
      minnumber: () => y,
      number: () => c,
      required: () => n,
      requiredfile: () => a,
      tel: () => l,
      time: () => d,
      url: () => p,
    }),
    (i.prototype.entries = function () {
      return this.tree.entries();
    }),
    (i.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (i.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const i = [];
        if (t instanceof Map) for (const [s, o] of t) i.push(...e(o));
        else "" !== t && i.push(t);
        return i;
      };
      return e(this.get(t));
    }),
    (i.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (i.prototype.keys = function () {
      return this.tree.keys();
    }),
    (i.prototype.values = function () {
      return this.tree.values();
    });
  const s = i;
  function o({ rule: t, field: e, error: i, ...s }) {
    (this.rule = t), (this.field = e), (this.error = i), (this.properties = s);
  }
  const n = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, i] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(i)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i)) return !1;
          const s = i.split(".");
          if (s.length < 2) return !1;
          for (const t of s) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new o(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            ),
          )
      )
        throw new o(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            ),
          )
      )
        throw new o(this);
    },
    f = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if (((t = t.trim()), !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)))
            return !1;
          const e = new Date(t);
          return !Number.isNaN(e.valueOf());
        })
      )
        throw new o(this);
    },
    d = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          const e = t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
          if (!e) return !1;
          const i = parseInt(e[1]),
            s = parseInt(e[2]),
            o = e[3] ? parseInt(e[3]) : 0;
          return 0 <= i && i <= 23 && 0 <= s && s <= 59 && 0 <= o && o <= 59;
        })
      )
        throw new o(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      i = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i,
                      );
                    if (i) {
                      const t = i.groups.toplevel.toLowerCase(),
                        s = i.groups.sub.toLowerCase();
                      for (const [o, n] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12",
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12",
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12",
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12",
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12",
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template",
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12",
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12",
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide",
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12",
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote",
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text",
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation",
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet",
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics",
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart",
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database",
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula",
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === s && n.startsWith(t + "/")) || n === i[0]) &&
                          e.push(...o.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    ),
                  ),
            ),
        )
      )
        throw new o(this);
    },
    h = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => this.accept?.some((e) => t === String(e)))
      )
        throw new o(this);
    },
    u = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          const e = 0 === (i = new Date(t).getDay()) ? 7 : i;
          var i;
          return this.accept?.some((t) => e === parseInt(t));
        })
      )
        throw new o(this);
    },
    w = function (t) {
      if (t.getAll(this.field).length < parseInt(this.threshold))
        throw new o(this);
    },
    v = function (t) {
      const e = t.getAll(this.field);
      if (parseInt(this.threshold) < e.length) throw new o(this);
    },
    g = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        0 !== i && i < parseInt(this.threshold))
      )
        throw new o(this);
    },
    x = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (i += t.length);
        }),
        parseInt(this.threshold) < i)
      )
        throw new o(this);
    },
    y = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new o(this);
    },
    b = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new o(this);
    },
    A = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            ),
          )
      )
        throw new o(this);
    },
    z = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            ),
          )
      )
        throw new o(this);
    },
    j = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (i += t.size);
        }),
        i < parseInt(this.threshold))
      )
        throw new o(this);
    },
    $ = function (t) {
      const e = t.getAll(this.field);
      let i = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (i += t.size);
        }),
        parseInt(this.threshold) < i)
      )
        throw new o(this);
    },
    I = ({ ruleObj: t, options: i }) => {
      const { rule: s, ...o } = t;
      return (
        "function" == typeof e[s] &&
        ("function" != typeof e[s].matches || e[s].matches(o, i))
      );
    },
    O = ({ ruleObj: t, formDataTree: i, options: s }) => {
      const { rule: o } = t;
      e[o].call(t, i, s);
    },
    E = [],
    k = (t) => [...E].reduce((t, e) => (i) => e(i, t), t),
    D = function (t, e = {}) {
      const i = (this.rules ?? []).filter((t) => I({ ruleObj: t, options: e })),
        s = k(O);
      if (
        !i.every((i) => {
          try {
            s({ ruleObj: i, formDataTree: t, options: e });
          } catch (t) {
            if (!(t instanceof o)) throw t;
            if (void 0 !== t.error) throw t;
            return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    },
    M = function (t, e = {}) {
      const i = (this.rules ?? []).filter((t) => I({ ruleObj: t, options: e })),
        s = k(O);
      if (
        !i.some((i) => {
          try {
            s({ ruleObj: i, formDataTree: t, options: e });
          } catch (t) {
            if (!(t instanceof o)) throw t;
            return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    };
  var F;
  window.swv = {
    validators: e,
    validate: (t, e, i = {}) => {
      const n = (t.rules ?? []).filter((t) => I({ ruleObj: t, options: i }));
      if (!n.length) return new Map();
      const a = k(O),
        r = new s(e),
        p = n.reduce((t, e) => {
          try {
            a({ ruleObj: e, formDataTree: r, options: i });
          } catch (e) {
            if (!(e instanceof o)) throw e;
            if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error)
              return t.set(e.field, e);
          }
          return t;
        }, new Map());
      for (const t of r.keys())
        p.has(t) || p.set(t, { validInputs: r.getAll(t) });
      return p;
    },
    use: (t) => {
      E.push(t);
    },
    ...(null !== (F = window.swv) && void 0 !== F ? F : {}),
  };
})();
/*!/wp-content/plugins/contact-form-7/includes/js/index.js*/
/* [inline: cdata] */ var wpcf7 = {
  api: {
    root: "https:\/\/www.eagleeyeinternationalprotectiveservices.com\/wp-json\/",
    namespace: "contact-form-7\/v1",
  },
  cached: "1",
}; /* [/inline: cdata] */
(() => {
  "use strict";
  const e = window.wp.i18n,
    t = (e) => Math.abs(parseInt(e, 10)),
    a = (e, t, a) => {
      const n = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: a });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(n);
    },
    n = (e, t) => {
      const n = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      n.has(t) && (t = n.get(t)),
        Array.from(n.values()).includes(t) ||
          (t = `custom-${(t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-"))}`);
      const r = e.getAttribute("data-status");
      if (
        ((e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t)
      ) {
        e.classList.remove(r);
        const t = {
          contactFormId: e.wpcf7.id,
          pluginVersion: e.wpcf7.pluginVersion,
          contactFormLocale: e.wpcf7.locale,
          unitTag: e.wpcf7.unitTag,
          containerPostId: e.wpcf7.containerPost,
          status: e.wpcf7.status,
          prevStatus: r,
        };
        a(e, "statuschanged", t);
      }
      return t;
    },
    r = (e) => {
      const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
      return o.reduceRight(
        (e, t) => (a) => t(a, e),
        (e) => {
          let n,
            r,
            {
              url: o,
              path: c,
              endpoint: s,
              headers: i,
              body: l,
              data: p,
              ...d
            } = e;
          "string" == typeof s &&
            ((n = a.replace(/^\/|\/$/g, "")),
            (r = s.replace(/^\//, "")),
            (c = r ? n + "/" + r : n)),
            "string" == typeof c &&
              (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
              (c = c.replace(/^\//, "")),
              (o = t + c)),
            (i = { Accept: "application/json, */*;q=0.1", ...i }),
            delete i["X-WP-Nonce"],
            p &&
              ((l = JSON.stringify(p)),
              (i["Content-Type"] = "application/json"));
          const f = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            u = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(o || c || window.location.href, {
              ...d,
              headers: i,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw u;
                      });
                    throw u;
                  }),
              () => {
                throw f;
              },
            );
        },
      )(e);
    },
    o = [];
  function c(e, t = {}) {
    const { target: a, scope: r = e, ...o } = t;
    if (void 0 === e.wpcf7?.schema) return;
    const c = { ...e.wpcf7.schema };
    if (void 0 !== a) {
      if (!e.contains(a)) return;
      if (!a.closest(".wpcf7-form-control-wrap[data-name]")) return;
      if (a.closest(".novalidate")) return;
    }
    const p = r.querySelectorAll(".wpcf7-form-control-wrap"),
      d = Array.from(p).reduce(
        (e, t) => (
          t.closest(".novalidate") ||
            t
              .querySelectorAll(":where( input, textarea, select ):enabled")
              .forEach((t) => {
                if (t.name)
                  switch (t.type) {
                    case "button":
                    case "image":
                    case "reset":
                    case "submit":
                      break;
                    case "checkbox":
                    case "radio":
                      t.checked && e.append(t.name, t.value);
                      break;
                    case "select-multiple":
                      for (const a of t.selectedOptions)
                        e.append(t.name, a.value);
                      break;
                    case "file":
                      for (const a of t.files) e.append(t.name, a);
                      break;
                    default:
                      e.append(t.name, t.value);
                  }
              }),
          e
        ),
        new FormData(),
      ),
      f = e.getAttribute("data-status");
    Promise.resolve(n(e, "validating"))
      .then((n) => {
        if (void 0 !== swv) {
          const n = swv.validate(c, d, t);
          for (const t of p) {
            if (void 0 === t.dataset.name) continue;
            const o = t.dataset.name;
            if (n.has(o)) {
              const { error: t, validInputs: a } = n.get(o);
              i(e, o),
                void 0 !== t && s(e, o, t, { scope: r }),
                l(e, o, null != a ? a : []);
            }
            if (t.contains(a)) break;
          }
        }
      })
      .finally(() => {
        n(e, f);
      });
  }
  r.use = (e) => {
    o.unshift(e);
  };
  const s = (e, t, a, n) => {
      const { scope: r = e, ...o } = null != n ? n : {},
        c = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        s = e.querySelector(
          `.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`,
        );
      (() => {
        const t = document.createElement("li");
        t.setAttribute("id", c),
          s && s.id
            ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`)
            : t.insertAdjacentText("beforeend", a),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(t);
      })(),
        r
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"),
              t.setAttribute("aria-hidden", "true"),
              t.insertAdjacentText("beforeend", a),
              e.appendChild(t),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", c),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      t.setAttribute("style", "display: none");
                    }),
                    t.addEventListener("click", (e) => {
                      t.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    i = (e, t) => {
      const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      e.wpcf7.parent
        .querySelector(`.screen-reader-response ul li#${a}`)
        ?.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            e.querySelector(".wpcf7-not-valid-tip")?.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    },
    l = (e, t, a) => {
      e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e) => {
        if ("output" === e.tagName.toLowerCase()) {
          const t = e;
          0 === a.length && a.push(t.dataset.default),
            a.slice(0, 1).forEach((e) => {
              e instanceof File && (e = e.name), (t.textContent = e);
            });
        } else
          e.querySelectorAll("output").forEach((e) => {
            e.hasAttribute("data-default")
              ? 0 === a.length
                ? e.removeAttribute("hidden")
                : e.setAttribute("hidden", "hidden")
              : e.remove();
          }),
            a.forEach((a) => {
              a instanceof File && (a = a.name);
              const n = document.createElement("output");
              n.setAttribute("name", t), (n.textContent = a), e.appendChild(n);
            });
      });
    };
  function p(e, t = {}) {
    if (wpcf7.blocked) return d(e), void n(e, "submitting");
    const o = new FormData(e);
    t.submitter &&
      t.submitter.name &&
      o.append(t.submitter.name, t.submitter.value);
    const c = {
      contactFormId: e.wpcf7.id,
      pluginVersion: e.wpcf7.pluginVersion,
      contactFormLocale: e.wpcf7.locale,
      unitTag: e.wpcf7.unitTag,
      containerPostId: e.wpcf7.containerPost,
      status: e.wpcf7.status,
      inputs: Array.from(o, (e) => {
        const t = e[0],
          a = e[1];
        return !t.match(/^_/) && { name: t, value: a };
      }).filter((e) => !1 !== e),
      formData: o,
    };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: o,
      wpcf7: { endpoint: "feedback", form: e, detail: c },
    })
      .then((t) => {
        const r = n(e, t.status);
        return (
          (c.status = t.status),
          (c.apiResponse = t),
          ["invalid", "unaccepted", "spam", "aborted"].includes(r)
            ? a(e, r, c)
            : ["sent", "failed"].includes(r) && a(e, `mail${r}`, c),
          a(e, "submit", c),
          t
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((t) => {
              s(e, t.field, t.message);
            }),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  r.use((e, t) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: t, detail: r } = e.wpcf7;
      d(t), a(t, "beforesubmit", r), n(t, "submitting");
    }
    return t(e);
  });
  const d = (e) => {
    e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t) => {
      t.dataset.name && i(e, t.dataset.name);
    }),
      (e.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]',
      ).innerText = ""),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function f(e) {
    const t = new FormData(e),
      o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(t, (e) => {
          const t = e[0],
            a = e[1];
          return !t.match(/^_/) && { name: t, value: a };
        }).filter((e) => !1 !== e),
        formData: t,
      };
    r({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: e, detail: o },
    })
      .then((t) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, n(e, "mail_sent"))
          : n(e, "init"),
          (o.apiResponse = t),
          a(e, "reset", o);
      })
      .catch((e) => console.error(e));
  }
  r.use((e, t) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: t, detail: a } = e.wpcf7;
      d(t), n(t, "resetting");
    }
    return t(e);
  });
  const u = (e, t) => {
      for (const a in t) {
        const n = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", n);
            });
        const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        r &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = r[1];
            });
      }
    },
    m = (e, t) => {
      for (const a in t) {
        const n = t[a][0],
          r = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`,
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = n),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              r);
        });
      }
    };
  function w(e) {
    const a = new FormData(e);
    (e.wpcf7 = {
      id: t(a.get("_wpcf7")),
      status: e.getAttribute("data-status"),
      pluginVersion: a.get("_wpcf7_version"),
      locale: a.get("_wpcf7_locale"),
      unitTag: a.get("_wpcf7_unit_tag"),
      containerPost: t(a.get("_wpcf7_container_post")),
      parent: e.closest(".wpcf7"),
      get schema() {
        return wpcf7.schemas.get(this.id);
      },
    }),
      wpcf7.schemas.set(e.wpcf7.id, void 0),
      e.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const a = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              },
            );
          });
        });
      })(e),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const a = t.querySelector("input.wpcf7-free-text"),
            n = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (a.disabled = !n.checked),
            e.addEventListener("change", (e) => {
              (a.disabled = !n.checked),
                e.target === n && n.checked && a.focus();
            });
        });
      })(e),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let a = e.value.trim();
            a &&
              !a.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== a.indexOf(".") &&
              ((a = a.replace(/^\/+/, "")), (a = "http://" + a)),
              (e.value = a);
          });
        });
      })(e),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const a = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && a.checked) ||
              (!e.classList.contains("invert") && !a.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(e),
      ((e) => {
        const a = (e, a) => {
            const n = t(e.getAttribute("data-starting-value")),
              r = t(e.getAttribute("data-maximum-value")),
              o = t(e.getAttribute("data-minimum-value")),
              c = e.classList.contains("down")
                ? n - a.value.length
                : a.value.length;
            e.setAttribute("data-current-value", c),
              (e.innerText = c),
              r && r < a.value.length
                ? e.classList.add("too-long")
                : e.classList.remove("too-long"),
              o && a.value.length < o
                ? e.classList.add("too-short")
                : e.classList.remove("too-short");
          },
          n = (t) => {
            (t = { init: !1, ...t }),
              e.querySelectorAll(".wpcf7-character-count").forEach((n) => {
                const r = n.getAttribute("data-target-name"),
                  o = e.querySelector(`[name="${r}"]`);
                o &&
                  ((o.value = o.defaultValue),
                  a(n, o),
                  t.init &&
                    o.addEventListener("keyup", (e) => {
                      a(n, o);
                    }));
              });
          };
        n({ init: !0 }),
          e.addEventListener("wpcf7reset", (e) => {
            n();
          });
      })(e),
      window.addEventListener("load", (t) => {
        wpcf7.cached && e.reset();
      }),
      e.addEventListener("reset", (t) => {
        wpcf7.reset(e);
      }),
      e.addEventListener("submit", (t) => {
        wpcf7.submit(e, { submitter: t.submitter }), t.preventDefault();
      }),
      e.addEventListener("wpcf7submit", (t) => {
        t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
          t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz);
      }),
      e.addEventListener("wpcf7reset", (t) => {
        t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
          t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz);
      }),
      e.addEventListener("change", (t) => {
        t.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(e, { target: t.target });
      }),
      e.addEventListener("wpcf7statuschanged", (t) => {
        const a = t.detail.status;
        e.querySelectorAll(".active-on-any").forEach((e) => {
          e.removeAttribute("inert"), e.classList.remove("active-on-any");
        }),
          e.querySelectorAll(`.inert-on-${a}`).forEach((e) => {
            e.setAttribute("inert", "inert"), e.classList.add("active-on-any");
          });
      });
  }
  document.addEventListener("DOMContentLoaded", (t) => {
    var a;
    if ("undefined" != typeof wpcf7)
      if (void 0 !== wpcf7.api)
        if ("function" == typeof window.fetch)
          if ("function" == typeof window.FormData)
            if ("function" == typeof NodeList.prototype.forEach)
              if ("function" == typeof String.prototype.replaceAll) {
                (wpcf7 = {
                  init: w,
                  submit: p,
                  reset: f,
                  validate: c,
                  schemas: new Map(),
                  ...(null !== (a = wpcf7) && void 0 !== a ? a : {}),
                }),
                  document.querySelectorAll("form .wpcf7").forEach((t) => {
                    const a = document.createElement("p");
                    a.setAttribute("class", "wpcf7-form-in-wrong-place");
                    const n = document.createElement("strong");
                    n.append((0, e.__)("Error:", "contact-form-7"));
                    const r = (0, e.__)(
                      "This contact form is placed in the wrong place.",
                      "contact-form-7",
                    );
                    a.append(n, " ", r), t.replaceWith(a);
                  }),
                  document.querySelectorAll(".wpcf7 > form").forEach((e) => {
                    wpcf7.init(e),
                      e.closest(".wpcf7").classList.replace("no-js", "js");
                  });
                for (const e of wpcf7.schemas.keys())
                  r({
                    endpoint: `contact-forms/${e}/feedback/schema`,
                    method: "GET",
                  }).then((t) => {
                    wpcf7.schemas.set(e, t);
                  });
              } else
                console.error(
                  "Your browser does not support String.replaceAll().",
                );
            else
              console.error(
                "Your browser does not support NodeList.forEach().",
              );
          else
            console.error("Your browser does not support window.FormData().");
        else console.error("Your browser does not support window.fetch().");
      else console.error("wpcf7.api is not defined.");
    else console.error("wpcf7 is not defined.");
  });
})();
/*!/wp-content/plugins/cf7-google-analytics/js/cf7-google-analytics.min.js*/
/* [inline: before] */ var cf7GASendActions = {
    invalid: "true",
    spam: "true",
    mail_sent: "true",
    mail_failed: "true",
    sent: "false",
  },
  cf7FormIDs = {
    ID_12619: "How Did You Hear About Us?",
    ID_9498: "Self Defense and Awareness Training job-application",
    ID_9497: "Corporate and Security Personnel Training job-application",
    ID_9496: "Special Services job-application",
    ID_9495: "Security Program Design job-application",
    ID_9494: "Intelligence & Analysis job-application",
    ID_9493: "Informations Security Programs job-application",
    ID_9492: "Protective Services job-application_copy",
    ID_9488: "Protective Services job-application",
    ID_9344: "Contact Page",
  }; /* [/inline: before] */
("use strict");
function cf7GASendTrackingEvent(e, n, t) {
  if (
    !(0 < Object.keys(cf7GASendActions).length) ||
    (void 0 !== cf7GASendActions[t] && "true" === cf7GASendActions[t])
  ) {
    var a = "";
    (a =
      "undefined" != typeof cf7FormIDs
        ? cf7FormIDs["ID_" + e]
        : "Form ID " + e),
      "undefined" != typeof gtag &&
        gtag("event", "contact_form_7", {
          event_category: "Contact Form 7",
          event_action: n,
          event_label: a,
        }),
      "undefined" != typeof dataLayer &&
        dataLayer.push({
          event: "Contact Form 7",
          event_action: n,
          event_label: a,
        }),
      "undefined" != typeof ga && ga("send", "event", "Contact Form 7", n, a),
      "undefined" != typeof _gaq &&
        _gaq.push(["_trackEvent", "Contact Form 7", n, a]),
      "undefined" != typeof __gaTracker &&
        __gaTracker("send", "event", "Contact Form 7", n, a);
  }
}
document.addEventListener(
  "wpcf7invalid",
  function (e) {
    cf7GASendTrackingEvent(e.detail.contactFormId, "Invalid", "invalid");
  },
  !1,
),
  document.addEventListener(
    "wpcf7spam",
    function (e) {
      cf7GASendTrackingEvent(e.detail.contactFormId, "Spam", "spam");
    },
    !1,
  ),
  document.addEventListener(
    "wpcf7mailsent",
    function (e) {
      cf7GASendTrackingEvent(e.detail.contactFormId, "Mail Sent", "mail_sent");
    },
    !1,
  ),
  document.addEventListener(
    "wpcf7mailfailed",
    function (e) {
      cf7GASendTrackingEvent(
        e.detail.contactFormId,
        "Mail Failed",
        "mail_failed",
      );
    },
    !1,
  ),
  document.addEventListener(
    "wpcf7submit",
    function (e) {
      cf7GASendTrackingEvent(e.detail.contactFormId, "Sent", "sent");
    },
    !1,
  );
/*!/wp-content/plugins/match_height/js/jquery.matchHeight-min.js*/
/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
})(function (t) {
  var e = -1,
    o = -1,
    n = function (t) {
      return parseFloat(t) || 0;
    },
    a = function (e) {
      var o = 1,
        a = t(e),
        i = null,
        r = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - n(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s
            ? r.push(e)
            : Math.floor(Math.abs(i - a)) <= o
              ? (r[r.length - 1] = s.add(e))
              : r.push(e),
            (i = a);
        }),
        r
      );
    },
    i = function (e) {
      var o = {
        byRow: !0,
        property: "height",
        target: null,
        remove: !1,
      };
      return "object" == typeof e
        ? t.extend(o, e)
        : ("boolean" == typeof e
            ? (o.byRow = e)
            : "remove" === e && (o.remove = !0),
          o);
    },
    r = (t.fn.matchHeight = function (e) {
      var o = i(e);
      if (o.remove) {
        var n = this;
        return (
          this.css(o.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(n);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }),
          r._apply(this, o),
          this);
    });
  (r.version = "0.7.2"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = a),
    (r._parse = n),
    (r._parseOptions = i),
    (r._apply = function (e, o) {
      var s = i(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        u = h.parents().filter(":hidden");
      return (
        u.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        u.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o &&
              "flex" !== o &&
              "inline-flex" !== o &&
              (o = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (l = a(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(l, function (e, o) {
          var a = t(o),
            i = 0;
          if (s.target) i = s.target.outerHeight(!1);
          else {
            if (s.byRow && a.length <= 1) return void a.css(s.property, "");
            a.each(function () {
              var e = t(this),
                o = e.attr("style"),
                n = e.css("display");
              "inline-block" !== n &&
                "flex" !== n &&
                "inline-flex" !== n &&
                (n = "block");
              var a = {
                display: n,
              };
              (a[s.property] = ""),
                e.css(a),
                e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                o ? e.attr("style", o) : e.css("display", "");
            });
          }
          a.each(function () {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((o +=
                  n(e.css("border-top-width")) +
                  n(e.css("border-bottom-width"))),
                (o += n(e.css("padding-top")) + n(e.css("padding-bottom")))),
              e.css(s.property, i - o + "px"));
          });
        }),
        u.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var o = t(this),
          n = o.attr("data-mh") || o.attr("data-match-height");
        n in e ? (e[n] = e[n].add(o)) : (e[n] = o);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (n, a) {
    if (a && "resize" === a.type) {
      var i = t(window).width();
      if (i === e) return;
      e = i;
    }
    n
      ? o === -1 &&
        (o = setTimeout(function () {
          s(a), (o = -1);
        }, r._throttle))
      : s(a);
  }),
    t(r._applyDataApi);
  var h = t.fn.on ? "on" : "bind";
  t(window)[h]("load", function (t) {
    r._update(!1, t);
  }),
    t(window)[h]("resize orientationchange", function (t) {
      r._update(!0, t);
    });
});
/*!/wp-content/cache/asset-cleanup/js/item/match_height__js__launch_match_height-js-vb057634c6b96216d0b636bebe09b34110b6a56b1.js*/
/*!/wp-content/plugins/match_height/js/launch_match_height.js*/
jQuery(document).ready(function () {
  jQuery(".flip-box-front").matchHeight({ byRow: !1 });
  jQuery(".flip-box-back").matchHeight({ byRow: !1 });
  jQuery(".fusion-flip-box-wrapper").each(function () {
    var thisLink = jQuery(this).find(".box-link").attr("href");
    console.log(thisLink);
    jQuery(this).wrapInner(
      '<a href="' + thisLink + '" class="full-box-link"></a>',
    );
  });
});
/*!/wp-content/plugins/svg-support/js/min/svgs-inline-min.js*/
jQuery(document).ready(function ($) {
  function t(t) {
    var i = t.attr("id"),
      r = t.attr("class"),
      n = t.attr("src");
    n.endsWith("svg")
      ? $.get(
          n,
          function (s) {
            var o = $(s).find("svg"),
              a = o.attr("id");
            void 0 === i
              ? void 0 === a
                ? ((i = "svg-replaced-" + e), (o = o.attr("id", i)))
                : (i = a)
              : (o = o.attr("id", i)),
              void 0 !== r &&
                (o = o.attr("class", r + " replaced-svg svg-replaced-" + e)),
              (o = o.removeAttr("xmlns:a")),
              "on" === frontSanitizationEnabled &&
                "" != o[0].outerHTML &&
                (console.log("Sanitizing SVG:", n),
                (o = DOMPurify.sanitize(o[0].outerHTML))),
              t.replaceWith(o),
              $(document).trigger("svg.loaded", [i]),
              e++;
          },
          "xml",
        ).fail(function () {
          console.error("Failed to load SVG:", n);
        })
      : console.log("Not an SVG:", n);
  }
  let e = 0;
  (bodhisvgsInlineSupport = function () {
    var e;
    console.log("Running bodhisvgsInlineSupport"),
      "true" === ForceInlineSVGActive &&
        jQuery("img").each(function () {
          void 0 !== jQuery(this).attr("src") &&
            !1 !== jQuery(this).attr("src") &&
            jQuery(this)
              .attr("src")
              .match(/\.(svg)/) &&
            (jQuery(this).hasClass(cssTarget.ForceInlineSVG) ||
              jQuery(this).addClass(cssTarget.ForceInlineSVG));
        }),
      String.prototype.endsWith ||
        (String.prototype.endsWith = function (t, e) {
          var i = this.toString();
          ("number" != typeof e ||
            !isFinite(e) ||
            Math.floor(e) !== e ||
            e > i.length) &&
            (e = i.length),
            (e -= t.length);
          var r = i.lastIndexOf(t, e);
          return -1 !== r && r === e;
        }),
      (String.prototype.endsWith = function (t) {
        var e = this.length - t.length;
        return e >= 0 && this.lastIndexOf(t) === e;
      }),
      (e =
        "true" === ForceInlineSVGActive
          ? "img." !== cssTarget.Bodhi
            ? cssTarget.Bodhi
            : "img.style-svg"
          : "img." !== cssTarget
            ? cssTarget.Bodhi
            : "img.style-svg"),
      console.log("Initial target:", e),
      "string" == typeof e
        ? ((e = e.replace("img", "")),
          console.log("Modified target:", e),
          $(e).each(function (e) {
            void 0 !== $(this).attr("src") && !1 !== $(this).attr("src")
              ? t($(this))
              : $(this)
                  .find("img")
                  .each(function (e) {
                    void 0 !== $(this).attr("src") &&
                      !1 !== $(this).attr("src") &&
                      t($(this));
                  });
          }))
        : console.error("Target is not a string:", e);
  })();
});
/* [inline: after] */ cssTarget = {
  Bodhi: "img.style-svg",
  ForceInlineSVG: "style-svg",
};
ForceInlineSVGActive = "false";
frontSanitizationEnabled = "on"; /* [/inline: after] */
/*!/wp-content/plugins/bb-plugin/js/jquery.imagesloaded.min.js*/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
        ? (module.exports = t(e, require("ev-emitter")))
        : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
/*!/wp-content/plugins/bb-plugin/js/jquery.ba-throttle-debounce.min.js*/
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) {
  var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
    a;
  $.throttle = a = function (e, f, j, i) {
    var h,
      d = 0;
    if (typeof f !== "boolean") {
      i = j;
      j = f;
      f = c;
    }
    function g() {
      var o = this,
        m = +new Date() - d,
        n = arguments;
      function l() {
        d = +new Date();
        j.apply(o, n);
      }
      function k() {
        h = c;
      }
      if (i && !h) {
        l();
      }
      h && clearTimeout(h);
      if (i === c && m > e) {
        l();
      } else {
        if (f !== true) {
          h = setTimeout(i ? k : l, i === c ? e - m : e);
        }
      }
    }
    if ($.guid) {
      g.guid = j.guid = j.guid || $.guid++;
    }
    return g;
  };
  $.debounce = function (d, e, f) {
    return f === c ? a(d, e, false) : a(d, f, e !== false);
  };
})(this);
/*!/wp-content/plugins/bb-plugin/js/jquery.easing.min.js*/
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else if (typeof module === "object" && typeof module.exports === "object") {
    exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.easing["jswing"] = $.easing["swing"];
  var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = (2 * PI) / 3,
    c5 = (2 * PI) / 4.5;
  function bounceOut(x) {
    var n1 = 7.5625,
      d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos((x * PI) / 2);
    },
    easeOutSine: function (x) {
      return sin((x * PI) / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0
        ? 0
        : x === 1
          ? 1
          : x < 0.5
            ? pow(2, 20 * x - 10) / 2
            : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5
        ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
        : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
          ? 1
          : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
          ? 1
          : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0
        ? 0
        : x === 1
          ? 1
          : x < 0.5
            ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2
            : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5
        ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5
        ? (1 - bounceOut(1 - 2 * x)) / 2
        : (1 + bounceOut(2 * x - 1)) / 2;
    },
  });
});
/*!/wp-content/plugins/bb-plugin/js/jquery.fitvids.min.js*/
!(function (t) {
  "use strict";
  (t.fn.fitVids = function (e) {
    var i = { customSelector: null, ignore: null };
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0],
        a =
          ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        d = document.createElement("div");
      (d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>"),
        r.appendChild(d.childNodes[1]);
    }
    return (
      e && t.extend(i, e),
      this.each(function () {
        var e = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
          "embed",
        ];
        i.customSelector && e.push(i.customSelector);
        var r = ".fitvidsignore";
        i.ignore && (r = r + ", " + i.ignore);
        var a = t(this).find(e.join(","));
        (a = a.not("object object")),
          (a = a.not(r)),
          a.each(function () {
            var e = t(this);
            if (
              !(
                e.parents(r).length > 0 ||
                ("embed" === this.tagName.toLowerCase() &&
                  e.parent("object").length) ||
                e.parent(".fluid-width-video-wrapper").length
              )
            ) {
              e.css("height") ||
                e.css("width") ||
                (!isNaN(e.attr("height")) && !isNaN(e.attr("width"))) ||
                (e.attr("height", 9), e.attr("width", 16));
              var i =
                  "object" === this.tagName.toLowerCase() ||
                  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
                    ? parseInt(e.attr("height"), 10)
                    : e.height(),
                a = isNaN(parseInt(e.attr("width"), 10))
                  ? e.width()
                  : parseInt(e.attr("width"), 10),
                d = i / a;
              if (!e.attr("name")) {
                var o = "fitvid" + t.fn.fitVids._count;
                e.attr("name", o), t.fn.fitVids._count++;
              }
              e
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * d + "%"),
                e.removeAttr("height").removeAttr("width");
            }
          });
      })
    );
  }),
    (t.fn.fitVids._count = 0);
})(window.jQuery || window.Zepto);
/*!/wp-content/plugins/bb-plugin/js/jquery.bxslider.min.js*/
!(function (R) {
  var Z = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    slideZIndex: 50,
    wrapperClass: "bx-wrapper",
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    preventDefaultSwipeX: !0,
    preventDefaultSwipeY: !1,
    ariaLive: !0,
    ariaHidden: !0,
    keyboardEnabled: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    nextText: "Next",
    prevText: "Prev",
    nextSelector: null,
    prevSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "next",
    stopAutoOnClick: !1,
    autoHover: !1,
    autoDelay: 0,
    autoSlideForOnePage: !1,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: !1,
    onSliderLoad: function () {
      return !0;
    },
    onSlideBefore: function () {
      return !0;
    },
    onSlideAfter: function () {
      return !0;
    },
    onSlideNext: function () {
      return !0;
    },
    onSlidePrev: function () {
      return !0;
    },
    onSliderResize: function () {
      return !0;
    },
  };
  R.fn.bxSlider = function (e) {
    var d,
      c,
      n,
      s,
      o,
      t,
      r,
      a,
      l,
      g,
      h,
      p,
      u,
      v,
      f,
      x,
      m,
      S,
      b,
      w,
      C,
      T,
      E,
      k,
      P,
      O,
      y,
      z,
      M,
      I,
      F,
      N,
      q,
      X,
      A,
      Y,
      V,
      H,
      W,
      D,
      L;
    return 0 === this.length
      ? this
      : 1 < this.length
        ? (this.each(function () {
            R(this).bxSlider(e);
          }),
          this)
        : ((d = {}),
          (c = this),
          (n = R(window).width()),
          (s = R(window).height()),
          R(c).data("bxSlider")
            ? void 0
            : ((o = function () {
                R(c).data("bxSlider") ||
                  ((d.settings = R.extend({}, Z, e)),
                  (d.settings.slideWidth = parseInt(d.settings.slideWidth)),
                  (d.children = c.children(d.settings.slideSelector)),
                  d.children.length < d.settings.minSlides &&
                    (d.settings.minSlides = d.children.length),
                  d.children.length < d.settings.maxSlides &&
                    (d.settings.maxSlides = d.children.length),
                  d.settings.randomStart &&
                    (d.settings.startSlide = Math.floor(
                      Math.random() * d.children.length,
                    )),
                  (d.active = { index: d.settings.startSlide }),
                  (d.carousel =
                    1 < d.settings.minSlides || 1 < d.settings.maxSlides),
                  d.carousel && (d.settings.preloadImages = "all"),
                  (d.minThreshold =
                    d.settings.minSlides * d.settings.slideWidth +
                    (d.settings.minSlides - 1) * d.settings.slideMargin),
                  (d.maxThreshold =
                    d.settings.maxSlides * d.settings.slideWidth +
                    (d.settings.maxSlides - 1) * d.settings.slideMargin),
                  (d.working = !1),
                  (d.controls = {}),
                  (d.interval = null),
                  (d.animProp =
                    "vertical" === d.settings.mode ? "top" : "left"),
                  (d.usingCSS =
                    d.settings.useCSS &&
                    "fade" !== d.settings.mode &&
                    (function () {
                      for (
                        var t = document.createElement("div"),
                          e = [
                            "WebkitPerspective",
                            "MozPerspective",
                            "OPerspective",
                            "msPerspective",
                          ],
                          i = 0;
                        i < e.length;
                        i++
                      )
                        if (void 0 !== t.style[e[i]])
                          return (
                            (d.cssPrefix = e[i]
                              .replace("Perspective", "")
                              .toLowerCase()),
                            (d.animProp = "-" + d.cssPrefix + "-transform"),
                            !0
                          );
                      return !1;
                    })()),
                  "vertical" === d.settings.mode &&
                    (d.settings.maxSlides = d.settings.minSlides),
                  c.data("origStyle", c.attr("style")),
                  c.children(d.settings.slideSelector).each(function () {
                    R(this).data("origStyle", R(this).attr("style"));
                  }),
                  t());
              }),
              (t = function () {
                var t = d.children.eq(d.settings.startSlide);
                c.wrap(
                  '<div class="' +
                    d.settings.wrapperClass +
                    '"><div class="bx-viewport"></div></div>',
                ),
                  (d.viewport = c.parent()),
                  d.settings.ariaLive &&
                    !d.settings.ticker &&
                    d.viewport.attr("aria-live", "polite"),
                  (d.loader = R('<div class="bx-loading" />')),
                  d.viewport.prepend(d.loader),
                  c.css({
                    width:
                      "horizontal" === d.settings.mode
                        ? 1e3 * d.children.length + 215 + "%"
                        : "auto",
                    position: "relative",
                  }),
                  d.usingCSS && d.settings.easing
                    ? c.css(
                        "-" + d.cssPrefix + "-transition-timing-function",
                        d.settings.easing,
                      )
                    : d.settings.easing || (d.settings.easing = "swing"),
                  d.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                  }),
                  d.viewport.parent().css({ maxWidth: g() }),
                  d.settings.pager ||
                    d.settings.controls ||
                    d.viewport.parent().css({ margin: "0 auto 0px" }),
                  d.children.css({
                    float: "horizontal" === d.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative",
                  }),
                  d.children.css("width", h()),
                  "horizontal" === d.settings.mode &&
                    0 < d.settings.slideMargin &&
                    d.children.css("marginRight", d.settings.slideMargin),
                  "vertical" === d.settings.mode &&
                    0 < d.settings.slideMargin &&
                    d.children.css("marginBottom", d.settings.slideMargin),
                  "fade" === d.settings.mode &&
                    (d.children.css({
                      position: "absolute",
                      zIndex: 0,
                      display: "none",
                    }),
                    d.children
                      .eq(d.settings.startSlide)
                      .css({
                        zIndex: d.settings.slideZIndex,
                        display: "block",
                      })),
                  (d.controls.el = R('<div class="bx-controls" />')),
                  d.settings.captions && C(),
                  (d.active.last = d.settings.startSlide === u() - 1),
                  d.settings.video && c.fitVids(),
                  ("all" !== d.settings.preloadImages && !d.settings.ticker) ||
                    (t = d.children),
                  d.settings.ticker
                    ? (d.settings.pager = !1)
                    : (d.settings.controls && b(),
                      d.settings.auto && d.settings.autoControls && w(),
                      d.settings.pager && S(),
                      (d.settings.controls ||
                        d.settings.autoControls ||
                        d.settings.pager) &&
                        d.viewport.after(d.controls.el)),
                  r(t, a);
              }),
              (r = function (t, e) {
                var i = t.find('img:not([src=""]), iframe').length,
                  n = 0;
                0 === i
                  ? e()
                  : t.find('img:not([src=""]), iframe').each(function () {
                      R(this)
                        .one("load error", function () {
                          ++n === i && e();
                        })
                        .each(function () {
                          this.complete && R(this).trigger("load");
                        });
                    });
              }),
              (a = function () {
                var t, e;
                d.settings.infiniteLoop &&
                  "fade" !== d.settings.mode &&
                  !d.settings.ticker &&
                  ((e =
                    "vertical" === d.settings.mode
                      ? d.settings.minSlides
                      : d.settings.maxSlides),
                  (t = d.children.slice(0, e).clone(!0).addClass("bx-clone")),
                  (e = d.children.slice(-e).clone(!0).addClass("bx-clone")),
                  d.settings.ariaHidden &&
                    (t.attr("aria-hidden", !0), e.attr("aria-hidden", !0)),
                  c.append(t).prepend(e)),
                  d.loader.remove(),
                  f(),
                  "vertical" === d.settings.mode &&
                    (d.settings.adaptiveHeight = !0),
                  d.viewport.height(l()),
                  c.redrawSlider(),
                  d.settings.onSliderLoad.call(c, d.active.index),
                  (d.initialized = !0),
                  d.settings.responsive && R(window).bind("resize", D),
                  d.settings.auto &&
                    d.settings.autoStart &&
                    (1 < u() || d.settings.autoSlideForOnePage) &&
                    F(),
                  d.settings.ticker && N(),
                  d.settings.pager && y(d.settings.startSlide),
                  d.settings.controls && I(),
                  "ontouchstart" in window && Y(),
                  d.settings.keyboardEnabled &&
                    !d.settings.ticker &&
                    R(document).keydown(A);
              }),
              (l = function () {
                var e = 0,
                  t = R();
                if ("vertical" === d.settings.mode || d.settings.adaptiveHeight)
                  if (d.carousel) {
                    var n =
                        1 === d.settings.moveSlides
                          ? d.active.index
                          : d.active.index * v(),
                      t = d.children.eq(n);
                    for (i = 1; i <= d.settings.maxSlides - 1; i++)
                      t =
                        n + i >= d.children.length
                          ? t.add(d.children.eq(i - 1))
                          : t.add(d.children.eq(n + i));
                  } else t = d.children.eq(d.active.index);
                else t = d.children;
                return (
                  "vertical" === d.settings.mode
                    ? (t.each(function (t) {
                        e += R(this).outerHeight();
                      }),
                      0 < d.settings.slideMargin &&
                        (e +=
                          d.settings.slideMargin * (d.settings.minSlides - 1)))
                    : (e = Math.max.apply(
                        Math,
                        t
                          .map(function () {
                            return R(this).outerHeight(!1);
                          })
                          .get(),
                      )),
                  "border-box" === d.viewport.css("box-sizing")
                    ? (e +=
                        parseFloat(d.viewport.css("padding-top")) +
                        parseFloat(d.viewport.css("padding-bottom")) +
                        parseFloat(d.viewport.css("border-top-width")) +
                        parseFloat(d.viewport.css("border-bottom-width")))
                    : "padding-box" === d.viewport.css("box-sizing") &&
                      (e +=
                        parseFloat(d.viewport.css("padding-top")) +
                        parseFloat(d.viewport.css("padding-bottom"))),
                  e
                );
              }),
              (g = function () {
                var t = "100%";
                return (t =
                  0 < d.settings.slideWidth
                    ? "horizontal" === d.settings.mode
                      ? d.settings.maxSlides * d.settings.slideWidth +
                        (d.settings.maxSlides - 1) * d.settings.slideMargin
                      : d.settings.slideWidth
                    : t);
              }),
              (h = function () {
                var t = d.settings.slideWidth,
                  e = d.viewport.width();
                if (
                  0 === d.settings.slideWidth ||
                  (d.settings.slideWidth > e && !d.carousel) ||
                  "vertical" === d.settings.mode
                )
                  t = e;
                else if (
                  1 < d.settings.maxSlides &&
                  "horizontal" === d.settings.mode
                ) {
                  if (e > d.maxThreshold) return t;
                  e < d.minThreshold
                    ? (t =
                        (e -
                          d.settings.slideMargin * (d.settings.minSlides - 1)) /
                        d.settings.minSlides)
                    : d.settings.shrinkItems &&
                      (t = Math.floor(
                        (e + d.settings.slideMargin) /
                          Math.ceil(
                            (e + d.settings.slideMargin) /
                              (t + d.settings.slideMargin),
                          ) -
                          d.settings.slideMargin,
                      ));
                }
                return t;
              }),
              (p = function () {
                var t,
                  e = 1;
                return (
                  "horizontal" === d.settings.mode && 0 < d.settings.slideWidth
                    ? (e =
                        d.viewport.width() < d.minThreshold
                          ? d.settings.minSlides
                          : d.viewport.width() > d.maxThreshold
                            ? d.settings.maxSlides
                            : ((t =
                                d.children.first().width() +
                                d.settings.slideMargin),
                              Math.floor(
                                (d.viewport.width() + d.settings.slideMargin) /
                                  t,
                              )))
                    : "vertical" === d.settings.mode &&
                      (e = d.settings.minSlides),
                  e
                );
              }),
              (u = function () {
                var t = 0,
                  e = 0,
                  i = 0;
                if (0 < d.settings.moveSlides)
                  if (d.settings.infiniteLoop)
                    t = Math.ceil(d.children.length / v());
                  else
                    for (; e < d.children.length; )
                      ++t,
                        (e = i + p()),
                        (i +=
                          d.settings.moveSlides <= p()
                            ? d.settings.moveSlides
                            : p());
                else t = Math.ceil(d.children.length / p());
                return t;
              }),
              (v = function () {
                return 0 < d.settings.moveSlides && d.settings.moveSlides <= p()
                  ? d.settings.moveSlides
                  : p();
              }),
              (f = function () {
                var t, e;
                d.children.length > d.settings.maxSlides &&
                d.active.last &&
                !d.settings.infiniteLoop
                  ? "horizontal" === d.settings.mode
                    ? ((t = (e = d.children.last()).position()),
                      x(
                        -(t.left - (d.viewport.width() - e.outerWidth())),
                        "reset",
                        0,
                      ))
                    : "vertical" === d.settings.mode &&
                      ((e = d.children.length - d.settings.minSlides),
                      (t = d.children.eq(e).position()),
                      x(-t.top, "reset", 0))
                  : ((t = d.children.eq(d.active.index * v()).position()),
                    d.active.index === u() - 1 && (d.active.last = !0),
                    void 0 !== t &&
                      ("horizontal" === d.settings.mode
                        ? x(-t.left, "reset", 0)
                        : "vertical" === d.settings.mode &&
                          x(-t.top, "reset", 0)));
              }),
              (x = function (t, e, i, n) {
                var s;
                d.usingCSS
                  ? ((s =
                      "vertical" === d.settings.mode
                        ? "translate3d(0, " + t + "px, 0)"
                        : "translate3d(" + t + "px, 0, 0)"),
                    c.css(
                      "-" + d.cssPrefix + "-transition-duration",
                      i / 1e3 + "s",
                    ),
                    "slide" === e
                      ? (c.css(d.animProp, s),
                        0 !== i
                          ? c.bind(
                              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                              function (t) {
                                R(t.target).is(c) &&
                                  (c.unbind(
                                    "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                                  ),
                                  z());
                              },
                            )
                          : z())
                      : "reset" === e
                        ? c.css(d.animProp, s)
                        : "ticker" === e &&
                          (c.css(
                            "-" + d.cssPrefix + "-transition-timing-function",
                            "linear",
                          ),
                          c.css(d.animProp, s),
                          0 !== i
                            ? c.bind(
                                "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                                function (t) {
                                  R(t.target).is(c) &&
                                    (c.unbind(
                                      "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                                    ),
                                    x(n.resetValue, "reset", 0),
                                    q());
                                },
                              )
                            : (x(n.resetValue, "reset", 0), q())))
                  : (((s = {})[d.animProp] = t),
                    "slide" === e
                      ? c.animate(s, i, d.settings.easing, function () {
                          z();
                        })
                      : "reset" === e
                        ? c.css(d.animProp, t)
                        : "ticker" === e &&
                          c.animate(s, i, "linear", function () {
                            x(n.resetValue, "reset", 0), q();
                          }));
              }),
              (m = function () {
                for (var t = "", e = "", i = u(), n = 0; n < i; n++)
                  (e = ""),
                    (d.settings.buildPager &&
                      "function" == typeof d.settings.buildPager) ||
                    d.settings.pagerCustom
                      ? ((e = d.settings.buildPager(n)),
                        d.pagerEl.addClass("bx-custom-pager"))
                      : ((e = n + 1), d.pagerEl.addClass("bx-default-pager")),
                    (t +=
                      '<div class="bx-pager-item"><a href="" data-slide-index="' +
                      n +
                      '" class="bx-pager-link">' +
                      e +
                      "</a></div>");
                d.pagerEl.html(t);
              }),
              (S = function () {
                d.settings.pagerCustom
                  ? (d.pagerEl = R(d.settings.pagerCustom))
                  : ((d.pagerEl = R('<div class="bx-pager" />')),
                    d.settings.pagerSelector
                      ? R(d.settings.pagerSelector).html(d.pagerEl)
                      : d.controls.el
                          .addClass("bx-has-pager")
                          .append(d.pagerEl),
                    m()),
                  d.pagerEl.on("click touchend", "a", O);
              }),
              (b = function () {
                (d.controls.next = R(
                  '<a class="bx-next" href="">' + d.settings.nextText + "</a>",
                )),
                  (d.controls.prev = R(
                    '<a class="bx-prev" href="">' +
                      d.settings.prevText +
                      "</a>",
                  )),
                  d.controls.next.bind("click touchend", T),
                  d.controls.prev.bind("click touchend", E),
                  d.settings.nextSelector &&
                    R(d.settings.nextSelector).append(d.controls.next),
                  d.settings.prevSelector &&
                    R(d.settings.prevSelector).append(d.controls.prev),
                  d.settings.nextSelector ||
                    d.settings.prevSelector ||
                    ((d.controls.directionEl = R(
                      '<div class="bx-controls-direction" />',
                    )),
                    d.controls.directionEl
                      .append(d.controls.prev)
                      .append(d.controls.next),
                    d.controls.el
                      .addClass("bx-has-controls-direction")
                      .append(d.controls.directionEl));
              }),
              (w = function () {
                (d.controls.start = R(
                  '<div class="bx-controls-auto-item"><a class="bx-start" href="">' +
                    d.settings.startText +
                    "</a></div>",
                )),
                  (d.controls.stop = R(
                    '<div class="bx-controls-auto-item"><a class="bx-stop" href="">' +
                      d.settings.stopText +
                      "</a></div>",
                  )),
                  (d.controls.autoEl = R('<div class="bx-controls-auto" />')),
                  d.controls.autoEl.on("click", ".bx-start", k),
                  d.controls.autoEl.on("click", ".bx-stop", P),
                  d.settings.autoControlsCombine
                    ? d.controls.autoEl.append(d.controls.start)
                    : d.controls.autoEl
                        .append(d.controls.start)
                        .append(d.controls.stop),
                  d.settings.autoControlsSelector
                    ? R(d.settings.autoControlsSelector).html(d.controls.autoEl)
                    : d.controls.el
                        .addClass("bx-has-controls-auto")
                        .append(d.controls.autoEl),
                  M(d.settings.autoStart ? "stop" : "start");
              }),
              (C = function () {
                d.children.each(function (t) {
                  var e = R(this).find("img:first").attr("title");
                  void 0 !== e &&
                    ("" + e).length &&
                    R(this).append(
                      '<div class="bx-caption"><span>' + e + "</span></div>",
                    );
                });
              }),
              (T = function (t) {
                t.preventDefault(),
                  d.controls.el.hasClass("disabled") ||
                    (d.settings.auto &&
                      d.settings.stopAutoOnClick &&
                      c.stopAuto(),
                    c.goToNextSlide());
              }),
              (E = function (t) {
                t.preventDefault(),
                  d.controls.el.hasClass("disabled") ||
                    (d.settings.auto &&
                      d.settings.stopAutoOnClick &&
                      c.stopAuto(),
                    c.goToPrevSlide());
              }),
              (k = function (t) {
                c.startAuto(), t.preventDefault();
              }),
              (P = function (t) {
                c.stopAuto(), t.preventDefault();
              }),
              (O = function (t) {
                t.preventDefault(),
                  d.controls.el.hasClass("disabled") ||
                    (d.settings.auto &&
                      d.settings.stopAutoOnClick &&
                      c.stopAuto(),
                    void 0 !==
                      (t = R(t.currentTarget)).attr("data-slide-index") &&
                      (t = parseInt(t.attr("data-slide-index"))) !==
                        d.active.index &&
                      c.goToSlide(t));
              }),
              (y = function (i) {
                var t = d.children.length;
                "short" === d.settings.pagerType
                  ? (1 < d.settings.maxSlides &&
                      (t = Math.ceil(d.children.length / d.settings.maxSlides)),
                    d.pagerEl.html(i + 1 + d.settings.pagerShortSeparator + t))
                  : (d.pagerEl.find("a").removeClass("active"),
                    d.pagerEl.each(function (t, e) {
                      R(e).find("a").eq(i).addClass("active");
                    }));
              }),
              (z = function () {
                var t;
                d.settings.infiniteLoop &&
                  ((t = ""),
                  0 === d.active.index
                    ? (t = d.children.eq(0).position())
                    : d.active.index === u() - 1 && d.carousel
                      ? (t = d.children.eq((u() - 1) * v()).position())
                      : d.active.index === d.children.length - 1 &&
                        (t = d.children.eq(d.children.length - 1).position()),
                  t) &&
                  ("horizontal" === d.settings.mode
                    ? x(-t.left, "reset", 0)
                    : "vertical" === d.settings.mode && x(-t.top, "reset", 0)),
                  (d.working = !1),
                  d.settings.onSlideAfter.call(
                    c,
                    d.children.eq(d.active.index),
                    d.oldIndex,
                    d.active.index,
                  );
              }),
              (M = function (t) {
                d.settings.autoControlsCombine
                  ? d.controls.autoEl.html(d.controls[t])
                  : (d.controls.autoEl.find("a").removeClass("active"),
                    d.controls.autoEl
                      .find("a:not(.bx-" + t + ")")
                      .addClass("active"));
              }),
              (I = function () {
                1 === u()
                  ? (d.controls.prev.addClass("disabled"),
                    d.controls.next.addClass("disabled"))
                  : !d.settings.infiniteLoop &&
                    d.settings.hideControlOnEnd &&
                    (0 === d.active.index
                      ? (d.controls.prev.addClass("disabled"), d.controls.next)
                      : d.active.index === u() - 1
                        ? (d.controls.next.addClass("disabled"),
                          d.controls.prev)
                        : (d.controls.prev.removeClass("disabled"),
                          d.controls.next)
                    ).removeClass("disabled");
              }),
              (F = function () {
                0 < d.settings.autoDelay
                  ? setTimeout(c.startAuto, d.settings.autoDelay)
                  : (c.startAuto(),
                    R(window)
                      .focus(function () {
                        c.startAuto();
                      })
                      .blur(function () {
                        c.stopAuto();
                      })),
                  d.settings.autoHover &&
                    c.hover(
                      function () {
                        d.interval && (c.stopAuto(!0), (d.autoPaused = !0));
                      },
                      function () {
                        d.autoPaused &&
                          (c.startAuto(!0), (d.autoPaused = null));
                      },
                    );
              }),
              (N = function () {
                var t,
                  e,
                  i,
                  n,
                  s,
                  o,
                  r,
                  a,
                  l = 0;
                "next" === d.settings.autoDirection
                  ? c.append(d.children.clone().addClass("bx-clone"))
                  : (c.prepend(d.children.clone().addClass("bx-clone")),
                    (t = d.children.first().position()),
                    (l = "horizontal" === d.settings.mode ? -t.left : -t.top)),
                  x(l, "reset", 0),
                  (d.settings.pager = !1),
                  (d.settings.controls = !1),
                  (d.settings.autoControls = !1),
                  d.settings.tickerHover &&
                    (d.usingCSS
                      ? ((n = "horizontal" === d.settings.mode ? 4 : 5),
                        d.viewport.hover(
                          function () {
                            (e = c.css("-" + d.cssPrefix + "-transform")),
                              (i = parseFloat(e.split(",")[n])),
                              x(i, "reset", 0);
                          },
                          function () {
                            (a = 0),
                              d.children.each(function (t) {
                                a +=
                                  "horizontal" === d.settings.mode
                                    ? R(this).outerWidth(!0)
                                    : R(this).outerHeight(!0);
                              }),
                              (s = d.settings.speed / a),
                              (o =
                                "horizontal" === d.settings.mode
                                  ? "left"
                                  : "top"),
                              (r = s * (a - Math.abs(parseInt(i)))),
                              q(r);
                          },
                        ))
                      : d.viewport.hover(
                          function () {
                            c.stop();
                          },
                          function () {
                            (a = 0),
                              d.children.each(function (t) {
                                a +=
                                  "horizontal" === d.settings.mode
                                    ? R(this).outerWidth(!0)
                                    : R(this).outerHeight(!0);
                              }),
                              (s = d.settings.speed / a),
                              (o =
                                "horizontal" === d.settings.mode
                                  ? "left"
                                  : "top"),
                              (r = s * (a - Math.abs(parseInt(c.css(o))))),
                              q(r);
                          },
                        )),
                  q();
              }),
              (q = function (t) {
                var t = t || d.settings.speed,
                  e = { left: 0, top: 0 },
                  i = { left: 0, top: 0 };
                "next" === d.settings.autoDirection
                  ? (e = c.find(".bx-clone").first().position())
                  : (i = d.children.first().position()),
                  (e = "horizontal" === d.settings.mode ? -e.left : -e.top),
                  (i = "horizontal" === d.settings.mode ? -i.left : -i.top),
                  x(e, "ticker", t, { resetValue: i });
              }),
              (X = function (t) {
                var e = R(window),
                  i = { top: e.scrollTop(), left: e.scrollLeft() },
                  n = t.offset();
                return (
                  (i.right = i.left + e.width()),
                  (i.bottom = i.top + e.height()),
                  (n.right = n.left + t.outerWidth()),
                  (n.bottom = n.top + t.outerHeight()),
                  !(
                    i.right < n.left ||
                    i.left > n.right ||
                    i.bottom < n.top ||
                    i.top > n.bottom
                  )
                );
              }),
              (A = function (t) {
                var e = document.activeElement.tagName.toLowerCase();
                if (null == new RegExp(e, ["i"]).exec("input|textarea") && X(c))
                  return 39 === t.keyCode
                    ? (T(t), !1)
                    : 37 === t.keyCode
                      ? (E(t), !1)
                      : void 0;
              }),
              (Y = function () {
                (d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
                  d.viewport.bind("touchstart", V),
                  d.viewport.on("click", ".bxslider a", function (t) {
                    d.viewport.hasClass("click-disabled") &&
                      (t.preventDefault(),
                      d.viewport.removeClass("click-disabled"));
                  });
              }),
              (V = function (t) {
                d.controls.el.addClass("disabled"),
                  d.working
                    ? (t.preventDefault(),
                      d.controls.el.removeClass("disabled"))
                    : ((d.touch.originalPos = c.position()),
                      (t =
                        void 0 !== (t = t.originalEvent).changedTouches
                          ? t.changedTouches
                          : [t]),
                      (d.touch.start.x = t[0].pageX),
                      (d.touch.start.y = t[0].pageY),
                      d.viewport.bind("touchmove", H),
                      d.viewport.bind("touchend", W));
              }),
              (H = function (t) {
                var e = t.originalEvent,
                  e = void 0 !== e.changedTouches ? e.changedTouches : [e],
                  i = Math.abs(e[0].pageX - d.touch.start.x),
                  n = Math.abs(e[0].pageY - d.touch.start.y),
                  s = 0,
                  o = 0;
                ((n < 3 * i && d.settings.preventDefaultSwipeX) ||
                  (i < 3 * n && d.settings.preventDefaultSwipeY)) &&
                  t.preventDefault(),
                  "fade" !== d.settings.mode &&
                    d.settings.oneToOneTouch &&
                    ((s =
                      "horizontal" === d.settings.mode
                        ? ((o = e[0].pageX - d.touch.start.x),
                          d.touch.originalPos.left + o)
                        : ((o = e[0].pageY - d.touch.start.y),
                          d.touch.originalPos.top + o)),
                    x(s, "reset", 0));
              }),
              (W = function (t) {
                d.viewport.unbind("touchmove", H),
                  d.controls.el.removeClass("disabled");
                var t = t.originalEvent,
                  e = void 0 !== t.changedTouches ? t.changedTouches : [t],
                  i = 0,
                  n = 0;
                (d.touch.end.x = e[0].pageX),
                  (d.touch.end.y = e[0].pageY),
                  "fade" === d.settings.mode
                    ? (n = Math.abs(d.touch.start.x - d.touch.end.x)) >=
                        d.settings.swipeThreshold &&
                      (d.touch.start.x > d.touch.end.x
                        ? c.goToNextSlide()
                        : c.goToPrevSlide(),
                      c.stopAuto())
                    : ((i =
                        "horizontal" === d.settings.mode
                          ? ((n = d.touch.end.x - d.touch.start.x),
                            d.touch.originalPos.left)
                          : ((n = d.touch.end.y - d.touch.start.y),
                            d.touch.originalPos.top)),
                      (d.settings.infiniteLoop ||
                        !(
                          (0 === d.active.index && 0 < n) ||
                          (d.active.last && n < 0)
                        )) &&
                      Math.abs(n) >= d.settings.swipeThreshold
                        ? (n < 0 ? c.goToNextSlide() : c.goToPrevSlide(),
                          c.stopAuto())
                        : x(i, "reset", 200)),
                  d.viewport.unbind("touchend", W),
                  ("function" == typeof PointerEvent &&
                    void 0 === t.pointerId) ||
                    (d.viewport.get(0).releasePointerCapture &&
                      d.viewport.get(0).releasePointerCapture(d.pointerId));
              }),
              (D = function (t) {
                var e, i;
                d.initialized &&
                  (d.working
                    ? window.setTimeout(D, 10)
                    : ((e = R(window).width()),
                      (i = R(window).height()),
                      (n === e && s === i) ||
                        ((n = e),
                        (s = i),
                        c.redrawSlider(),
                        d.settings.onSliderResize.call(c, d.active.index))));
              }),
              (L = function (t) {
                var e = p();
                d.settings.ariaHidden &&
                  !d.settings.ticker &&
                  (d.children.attr("aria-hidden", "true"),
                  d.children.slice(t, t + e).attr("aria-hidden", "false"));
              }),
              (c.goToSlide = function (t, e) {
                var i,
                  n = !0,
                  s = 0,
                  o = { left: 0, top: 0 },
                  r = null;
                (d.oldIndex = d.active.index),
                  (d.active.index =
                    (i = t) < 0
                      ? d.settings.infiniteLoop
                        ? u() - 1
                        : d.active.index
                      : i >= u()
                        ? d.settings.infiniteLoop
                          ? 0
                          : d.active.index
                        : i),
                  d.working ||
                    d.active.index === d.oldIndex ||
                    ((d.working = !0),
                    void 0 ===
                      (n = d.settings.onSlideBefore.call(
                        c,
                        d.children.eq(d.active.index),
                        d.oldIndex,
                        d.active.index,
                      )) || n
                      ? ("next" === e
                          ? d.settings.onSlideNext.call(
                              c,
                              d.children.eq(d.active.index),
                              d.oldIndex,
                              d.active.index,
                            ) || (n = !1)
                          : "prev" !== e ||
                            d.settings.onSlidePrev.call(
                              c,
                              d.children.eq(d.active.index),
                              d.oldIndex,
                              d.active.index,
                            ) ||
                            (n = !1),
                        (d.active.last = d.active.index >= u() - 1),
                        (d.settings.pager || d.settings.pagerCustom) &&
                          y(d.active.index),
                        d.settings.controls && I(),
                        "fade" === d.settings.mode
                          ? (d.settings.adaptiveHeight &&
                              d.viewport.height() !== l() &&
                              d.viewport.animate(
                                { height: l() },
                                d.settings.adaptiveHeightSpeed,
                              ),
                            d.children
                              .filter(":visible")
                              .fadeOut(d.settings.speed)
                              .css({ zIndex: 0 }),
                            d.children
                              .eq(d.active.index)
                              .css("zIndex", d.settings.slideZIndex + 1)
                              .fadeIn(d.settings.speed, function () {
                                R(this).css("zIndex", d.settings.slideZIndex),
                                  z();
                              }))
                          : (d.settings.adaptiveHeight &&
                              d.viewport.height() !== l() &&
                              d.viewport.animate(
                                { height: l() },
                                d.settings.adaptiveHeightSpeed,
                              ),
                            !d.settings.infiniteLoop &&
                            d.carousel &&
                            d.active.last
                              ? "horizontal" === d.settings.mode
                                ? ((o = (r = d.children.eq(
                                    d.children.length - 1,
                                  )).position()),
                                  (s = d.viewport.width() - r.outerWidth()))
                                : ((i =
                                    d.children.length - d.settings.minSlides),
                                  (o = d.children.eq(i).position()))
                              : d.carousel && d.active.last && "prev" === e
                                ? ((n =
                                    1 === d.settings.moveSlides
                                      ? d.settings.maxSlides - v()
                                      : (u() - 1) * v() -
                                        (d.children.length -
                                          d.settings.maxSlides)),
                                  (o = (r = c
                                    .children(".bx-clone")
                                    .eq(n)).position()))
                                : "next" === e && 0 === d.active.index
                                  ? ((o = c
                                      .find("> .bx-clone")
                                      .eq(d.settings.maxSlides)
                                      .position()),
                                    (d.active.last = !1))
                                  : 0 <= t &&
                                    ((i = t * parseInt(v())),
                                    (o = d.children.eq(i).position())),
                            void 0 !== o
                              ? ((n =
                                  "horizontal" === d.settings.mode
                                    ? -(o.left - s)
                                    : -o.top),
                                x(n, "slide", d.settings.speed))
                              : (d.working = !1)),
                        d.settings.ariaHidden && L(d.active.index * v()))
                      : ((d.active.index = d.oldIndex), (d.working = !1)));
              }),
              (c.goToNextSlide = function () {
                var t;
                (!d.settings.infiniteLoop && d.active.last) ||
                  ((t = parseInt(d.active.index) + 1), c.goToSlide(t, "next"));
              }),
              (c.goToPrevSlide = function () {
                var t;
                (!d.settings.infiniteLoop && 0 === d.active.index) ||
                  ((t = parseInt(d.active.index) - 1), c.goToSlide(t, "prev"));
              }),
              (c.startAuto = function (t) {
                d.interval ||
                  ((d.interval = setInterval(function () {
                    "next" === d.settings.autoDirection
                      ? c.goToNextSlide()
                      : c.goToPrevSlide();
                  }, d.settings.pause)),
                  d.settings.autoControls && !0 !== t && M("stop"));
              }),
              (c.stopAuto = function (t) {
                d.interval &&
                  (clearInterval(d.interval),
                  (d.interval = null),
                  d.settings.autoControls) &&
                  !0 !== t &&
                  M("start");
              }),
              (c.getCurrentSlide = function () {
                return d.active.index;
              }),
              (c.getCurrentSlideElement = function () {
                return d.children.eq(d.active.index);
              }),
              (c.getSlideElement = function (t) {
                return d.children.eq(t);
              }),
              (c.getSlideCount = function () {
                return d.children.length;
              }),
              (c.isWorking = function () {
                return d.working;
              }),
              (c.redrawSlider = function () {
                d.children.add(c.find(".bx-clone")).outerWidth(h()),
                  d.viewport.css("height", l()),
                  d.settings.ticker || f(),
                  d.active.last && (d.active.index = u() - 1),
                  d.active.index >= u() && (d.active.last = !0),
                  d.settings.pager &&
                    !d.settings.pagerCustom &&
                    (m(), y(d.active.index)),
                  d.settings.ariaHidden && L(d.active.index * v());
              }),
              (c.destroySlider = function () {
                d.initialized &&
                  ((d.initialized = !1),
                  R(".bx-clone", this).remove(),
                  d.children.each(function () {
                    void 0 !== R(this).data("origStyle")
                      ? R(this).attr("style", R(this).data("origStyle"))
                      : R(this).removeAttr("style");
                  }),
                  void 0 !== R(this).data("origStyle")
                    ? this.attr("style", R(this).data("origStyle"))
                    : R(this).removeAttr("style"),
                  R(this).unwrap().unwrap(),
                  d.controls.el && d.controls.el.remove(),
                  d.controls.next && d.controls.next.remove(),
                  d.controls.prev && d.controls.prev.remove(),
                  d.pagerEl &&
                    d.settings.controls &&
                    !d.settings.pagerCustom &&
                    d.pagerEl.remove(),
                  R(".bx-caption", this).remove(),
                  d.controls.autoEl && d.controls.autoEl.remove(),
                  clearInterval(d.interval),
                  d.settings.responsive && R(window).unbind("resize", D),
                  d.settings.keyboardEnabled &&
                    R(document).unbind("keydown", A),
                  R(this).removeData("bxSlider"));
              }),
              (c.reloadSlider = function (t) {
                void 0 !== t && (e = t),
                  c.destroySlider(),
                  o(),
                  R(c).data("bxSlider", this);
              }),
              o(),
              R(c).data("bxSlider", this),
              this));
  };
})(jQuery);
/*!/wp-content/cache/asset-cleanup/js/item/content__uploads__bb-plugin__cache__5e8d82b1e713feb6f3fa1323e76f86b2-layout-bundle-js-ved46a351628a6bac3560d080960d655208c40618.js*/
/*!/wp-content/uploads/bb-plugin/cache/5e8d82b1e713feb6f3fa1323e76f86b2-layout-bundle.js*/
(function ($) {
  FLBuilderPostCarousel = function (settings) {
    this.settings = settings.settings;
    this.transitionType = settings.transition;
    this.nodeClass = ".fl-node-" + settings.id;
    this.wrapperClass = this.nodeClass + " .fl-post-carousel-wrapper";
    this.postClass = this.nodeClass + " .fl-post-carousel-post";
    this.prevCarouselBtn = $(this.nodeClass + " .carousel-prev");
    this.nextCarouselBtn = $(this.nodeClass + " .carousel-next");
    this.layout = settings.layout;
    this.navigation = settings.navigationControls;
    this.slideWidth = settings.slideWidth;
    this.currentBrowserWidth = $(window).width();
    if (this._hasPosts()) {
      this._initCarousel();
      $(window).on(
        "resize",
        function (e) {
          var width = $(window).width();
          if (width != this.currentBrowserWidth) {
            this._resizeDebounce();
            this.currentBrowserWidth = width;
          }
        }.bind(this),
      );
    }
  };
  FLBuilderPostCarousel.prototype = {
    settings: {},
    nodeClass: "",
    wrapperClass: "",
    postClass: "",
    prevCarouselBtn: "",
    nextCarouselBtn: "",
    layout: "",
    navigation: !1,
    slideWidth: 0,
    carousel: "",
    _hasPosts: function () {
      return $(this.postClass).length > 0;
    },
    _resizeDebounce: function () {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(
        function () {
          this._reloadCarousel();
        }.bind(this),
        250,
      );
    },
    _getSlidesNumber: function () {
      var $wrapperWidth = this._getWrapperWidth(),
        $slideWidth = $(this.postClass).width(),
        columns = Math.ceil($wrapperWidth / this.slideWidth);
      return columns;
    },
    _getSlideWidth: function () {
      return Math.ceil(
        (this._getWrapperWidth() -
          this.settings.slideMargin * (this._getSlidesNumber() - 1)) /
          this._getSlidesNumber(),
      );
    },
    _getWrapperWidth: function () {
      var $wrapper = $(this.nodeClass + " .fl-post-carousel");
      $width = $wrapper.width();
      if ($width === 0 && $wrapper.is(":hidden")) {
        $clone = $wrapper
          .clone()
          .css("visibility", "hidden")
          .appendTo($(".fl-row-content"));
        $width = $clone.outerWidth();
        $clone.remove();
      }
      return $width;
    },
    _getSettings: function () {
      var newSettings,
        settings = {
          slideWidth: this._getSlideWidth(),
          minSlides: this._getSlidesNumber(),
          maxSlides: this._getSlidesNumber(),
          onSliderLoad: function () {
            $(this.wrapperClass).addClass("fl-post-carousel-loaded");
          }.bind(this),
        };
      newSettings = $.extend({}, this.settings, settings);
      return newSettings;
    },
    _initCarousel: function () {
      this.carousel = $(this.wrapperClass).bxSlider(this._getSettings());
      if (this.navigation) {
        this.prevCarouselBtn.on(
          "click",
          function (e) {
            e.preventDefault();
            this.carousel.goToPrevSlide();
          }.bind(this),
        );
        this.nextCarouselBtn.on(
          "click",
          function (e) {
            e.preventDefault();
            this.carousel.goToNextSlide();
          }.bind(this),
        );
      }
    },
    _reloadCarousel: function () {
      var bxObject = this.carousel.data("bxSlider");
      if (bxObject) {
        bxObject.reloadSlider(this._getSettings());
      } else {
        this.carousel.reloadSlider(this._getSettings());
      }
    },
  };
})(jQuery);
(function ($) {
  $(function () {
    new FLBuilderPostCarousel({
      id: "jqeru7x5mkba",
      layout: "grid",
      navigationControls: !0,
      slideWidth: 500,
      settings: {
        pager: !1,
        auto: !0,
        pause: 5000,
        speed: 1000,
        autoDirection: "next",
        infiniteLoop: !1,
        adaptiveHeight: !0,
        controls: !1,
        autoHover: !0,
        ariaLive: !1,
        slideMargin: 30,
        moveSlides: 1,
        onSlideBefore: function (ele, oldIndex, newIndex) {
          $(".fl-node-jqeru7x5mkba .fl-post-carousel-navigation a").addClass(
            "disabled",
          );
          $(".fl-node-jqeru7x5mkba .bx-controls .bx-pager-link").addClass(
            "disabled",
          );
        },
        onSlideAfter: function (ele, oldIndex, newIndex) {
          $(".fl-node-jqeru7x5mkba .fl-post-carousel-navigation a").removeClass(
            "disabled",
          );
          $(".fl-node-jqeru7x5mkba .bx-controls .bx-pager-link").removeClass(
            "disabled",
          );
        },
      },
    });
  });
})(jQuery);
(function ($) {
  PPVideo = function (settings) {
    this.id = settings.id;
    this.type = settings.type;
    this.autoplay = settings.autoplay;
    this.lightbox = settings.lightbox;
    this.aspectRatio = settings.aspectRatioLightbox;
    this.overlay = settings.overlay;
    this.triggerSelector = settings.triggerSelector;
    this.node = $(".fl-node-" + this.id);
    this.nodeCount = this.node.length;
    this.settings = settings;
    this.api = {};
    this._init();
  };
  PPVideo.prototype = {
    _init: function () {
      if (this.lightbox) {
        this._initLightbox();
      } else {
        this._inlinePlay();
      }
      this._initApi();
    },
    _initApi: function () {
      var self = this;
      this.api.youtube = {};
      self.api.youtube.loadApiScript = function () {
        $("script:first").before(
          $("<script>", { src: "https://www.youtube.com/iframe_api" }),
        );
        self.api.youtube.apiScriptLoaded = !0;
      };
      self.api.youtube.isApiLoaded = function () {
        return window.YT && YT.loaded;
      };
      self.api.youtube.getApiObject = function () {
        return YT;
      };
      self.api.youtube.onApiReady = function (callback) {
        if (!self.api.youtube.apiScriptLoaded) {
          self.api.youtube.loadApiScript();
        }
        if (self.api.youtube.isApiLoaded()) {
          callback(self.api.youtube.getApiObject());
        } else {
          setTimeout(function () {
            self.api.youtube.onApiReady(callback);
          }, 350);
        }
      };
      self.api.youtube.getVideoId = function (url) {
        var videoIDParts = url.match(
          /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/,
        );
        return videoIDParts && videoIDParts[1];
      };
    },
    _inlinePlay: function () {
      var self = this;
      var videoFrame = this.node.find(".pp-video-iframe");
      var videoPlayer = this.node.find(".pp-video-player");
      var hasOverlay = this.node.find(".pp-video-image-overlay").length > 0;
      if (videoPlayer.length > 0) {
        videoPlayer.attr("playsinline", "");
        if (this.autoplay && !hasOverlay) {
          if (this._isIOS()) {
            videoPlayer.attr("muted", "");
          }
          videoPlayer[0].play();
        }
      }
      if (videoFrame.length > 0) {
        videoFrame.show();
        var src =
          videoFrame.data("src") ||
          videoFrame.data("cli-src") ||
          videoFrame.data("src-cmplz");
        videoFrame.data("src", src.replace("&autoplay=1", ""));
        videoFrame.data("src", src.replace("autoplay=1", ""));
        if (!this.autoplay && !hasOverlay) {
          videoFrame.attr("src", videoFrame.data("src"));
        }
        if (this.autoplay && !this.lightbox) {
          var src = videoFrame.data("src").split("#");
          var iframeSrc = src[0] + "&autoplay=1";
          if ("youtube" == self.type) {
            iframeSrc += "&enablejsapi=1";
          }
          if ("undefined" !== typeof src[1]) {
            iframeSrc += "#" + src[1];
          }
          videoFrame.attr("src", iframeSrc);
          this.node.find(".pp-video-image-overlay").fadeOut(100, function () {
            this.remove();
            if ("youtube" == self.type) {
              self.api.youtube.onApiReady(
                function (apiObject) {
                  self._prepareYTVideo(apiObject, !0);
                }.bind(self),
              );
            }
          });
        }
      }
      this.node.find(".pp-video-image-overlay").on(
        "click keyup",
        function (e) {
          if (!this._validClick(e)) {
            return;
          }
          e.preventDefault();
          this.node.find(".pp-video-image-overlay").fadeOut(800, function () {
            this.remove();
          });
          if (videoPlayer.length > 0) {
            videoPlayer[0].play();
            return;
          }
          videoFrame.show();
          var lazyLoad = videoFrame.data("src");
          if (lazyLoad) {
            videoFrame.attr("src", lazyLoad);
          }
          var iframeSrc = videoFrame[0].src.replace("&autoplay=0", "");
          iframeSrc = iframeSrc.replace("autoplay=0", "");
          var src = iframeSrc.split("#");
          iframeSrc = src[0];
          if ("facebook" === this.type) {
            iframeSrc += "&autoplay=0";
          } else {
            iframeSrc += "&autoplay=1";
          }
          if ("undefined" !== typeof src[1]) {
            iframeSrc += "#" + src[1];
          }
          videoFrame[0].src = iframeSrc;
        }.bind(this),
      );
    },
    _initLightbox: function () {
      var id = this.id;
      var self = this;
      var options = {
        modal: !1,
        enableEscapeButton: !0,
        type: "inline",
        baseClass: "fancybox-" + id + " pp-video-lightbox",
        buttons: ["close"],
        wheel: !1,
        touch: !1,
        iframe: { preload: !1 },
        keys: { close: [27] },
        clickSlide: "close",
        clickOutside: "close",
        afterLoad: function (current, previous) {
          $(".fancybox-" + id)
            .find(".fancybox-bg")
            .addClass("fancybox-" + id + "-overlay");
          if ($(".fancybox-" + id).find(".pp-video-iframe").length > 0) {
            var iframeSrc = $(".fancybox-" + id)
              .find(".pp-video-iframe")[0]
              .src.replace("&autoplay=0", "");
            iframeSrc = iframeSrc.replace("autoplay=0", "");
            var src = iframeSrc.split("#");
            iframeSrc = src[0];
            if ("facebook" === self.type) {
              iframeSrc += "&autoplay=0";
            } else {
              iframeSrc += "&autoplay=1";
            }
            if ("youtube" == self.type) {
              iframeSrc += "&enablejsapi=1";
            }
            if ("undefined" !== typeof src[1]) {
              iframeSrc += "#" + src[1];
            }
            $(".fancybox-" + id).find(".pp-video-iframe")[0].src = iframeSrc;
            if ("youtube" == self.type) {
              self.api.youtube.onApiReady(
                function (apiObject) {
                  self._prepareYTVideo(apiObject, !1);
                }.bind(self),
              );
            }
            setTimeout(function () {
              $(".fancybox-" + id).trigger("focus");
            }, 1200);
          }
          $(".fancybox-" + id).on(
            "click.pp-video",
            ".fancybox-content",
            function (e) {
              if ($(this).hasClass("fancybox-content")) {
                $.fancybox.close();
              }
            },
          );
          $(document).trigger("pp_video_lightbox_after_load", [
            $(".fancybox-" + id),
            id,
          ]);
        },
        afterClose: function () {
          if (self.node.find(".pp-video-play-icon").length > 0) {
            self.node.find(".pp-video-play-icon").attr("tabindex", "0");
            self.node.find(".pp-video-play-icon")[0].focus();
          }
        },
      };
      var wrapperClasses = "pp-aspect-ratio-" + this.aspectRatio;
      var selector = ".fl-node-" + this.id + " .pp-video-image-overlay";
      if ("" !== this.triggerSelector) {
        selector += ", " + this.triggerSelector;
      }
      $("body").on(
        "click keyup",
        selector,
        function (e) {
          if (!this._validClick(e)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          if (this.nodeCount > 1) {
            this.node = $(e.target).closest(".fl-module");
          }
          var lightboxContent = this.node
            .find(".pp-video-lightbox-content")
            .html();
          $.fancybox.open(
            $('<div class="' + wrapperClasses + '"></div>').html(
              lightboxContent,
            ),
            options,
          );
          this.node.find(".pp-video-play-icon").attr("tabindex", "-1");
        }.bind(this),
      );
      $(document).on("keyup", function (e) {
        if (e.keyCode === 27) {
          $.fancybox.close();
        }
      });
      $(window).on("hashchange", this._onHashChange.bind(this));
      this._onHashChange();
    },
    _onHashChange: function () {
      var hash = location.hash,
        validHash = "#video-" + this.id;
      if (hash === validHash) {
        $(".fl-node-" + this.id + " .pp-video-image-overlay").trigger("click");
      }
    },
    _prepareYTVideo: function (YT, onOverlayClick) {
      var $iframe = this._getIframe(),
        iframeSrc = $iframe.attr("src") || $iframe.attr("data-src"),
        videoID = this.api.youtube.getVideoId(iframeSrc),
        self = this;
      var playerOptions = {
        videoId: videoID,
        events: {
          onReady: function () {
            if (self.settings.mute) {
              self.youtubePlayer.mute();
            }
            if (self.settings.autoplay || onOverlayClick) {
              self.youtubePlayer.playVideo();
            }
          },
          onStateChange: function (event) {
            if (event.data === YT.PlayerState.ENDED && self.settings.loop) {
              self.youtubePlayer.seekTo(self.settings.startTime || 0);
            }
          },
        },
        playerVars: {
          controls: self.settings.controls ? 1 : 0,
          rel: self.settings.rel ? 1 : 0,
          playsinline: self.settings.autoplay ? 1 : 0,
          modestbranding: self.settings.modestbranding ? 1 : 0,
          autoplay: self.settings.autoplay ? 1 : 0,
          start: self.settings.startTime,
          end: self.settings.endTime,
        },
      };
      if (self.settings.yt_privacy) {
        playerOptions.host = "https://www.youtube-nocookie.com";
        playerOptions.origin = window.location.hostname;
      }
      this.youtubePlayer = new YT.Player($iframe[0], playerOptions);
    },
    _getIframe: function () {
      if (!this.lightbox) {
        return $(".fl-node-" + this.id + " .pp-video-iframe");
      } else {
        return $(".fancybox-" + this.id + " .pp-video-iframe");
      }
    },
    _validClick: function (e) {
      return e.which == 1 ||
        e.which == 13 ||
        e.which == 32 ||
        e.which == undefined
        ? true
        : !1;
    },
    _isIOS: function () {
      return !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);
    },
  };
})(jQuery);
(function ($) {
  pp_video_ems7gkt401dy = new PPVideo({
    id: "ems7gkt401dy",
    type: "youtube",
    autoplay: !1,
    mute: !1,
    loop: !1,
    controls: !0,
    modestbranding: !1,
    yt_privacy: !1,
    rel: "",
    startTime: "",
    endTime: "",
    aspectRatio: "169",
    aspectRatioLightbox: "169",
    lightbox: !1,
    overlay: !0,
    triggerSelector: "",
  });
})(jQuery);
jQuery(function ($) {
  $(function () {
    $(".fl-node-pbul7qor9gkf .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
jQuery(function ($) {
  $(function () {
    $(".fl-node-t5lw2irqakmu .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
jQuery(function ($) {
  $(function () {
    $(".fl-node-5ivtbrw4o93f .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
jQuery(function ($) {
  $(function () {
    $(".fl-node-sk3ot7epaq8b .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
jQuery(function ($) {
  $(function () {
    $(".fl-node-95m7jznsrvhe .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
(function ($) {
  $(function () {
    $(".fl-embed-video").fitVids();
    if (
      $(".fl-module-video .fl-wp-video video").length > 1 &&
      typeof $.fn.mediaelementplayer !== "undefined"
    ) {
      $(".fl-module-video .fl-wp-video video").mediaelementplayer({
        pauseOtherPlayers: !1,
      });
    }
  });
  FLBuilderVideo = function (settings) {
    this.nodeID = settings.id;
    this.nodeClass = ".fl-node-" + settings.id;
    this.wrapperClass = this.nodeClass + " .fl-video";
    this._initVideo();
    this._initStickyOnScroll();
  };
  FLBuilderVideo.prototype = {
    _initVideo: function () {
      var origTop = $(this.nodeClass).offset().top,
        origLeft = $(this.nodeClass).offset().left,
        origHeight = $(this.nodeClass).outerHeight(),
        origWidth = $(this.nodeClass).outerWidth();
      $(this.nodeClass).attr("data-orig-top", origTop);
      $(this.nodeClass).attr("data-orig-left", origLeft);
      $(this.nodeClass).attr("data-orig-height", origHeight);
      $(this.nodeClass).attr("data-orig-width", origWidth);
    },
    _makeSticky: function () {
      var origLeft = $(this.nodeClass).data("orig-left"),
        origHeight = $(this.nodeClass).data("orig-height"),
        origWidth = $(this.nodeClass).data("orig-width");
      $(this.nodeClass).addClass("fl-video-sticky");
      $(this.nodeClass).css("left", origLeft);
      $(this.nodeClass).css("height", origHeight);
      $(this.nodeClass).css("width", origWidth);
    },
    _removeSticky: function () {
      $(this.nodeClass).removeClass("fl-video-sticky");
    },
    _initStickyOnScroll: function () {
      $(window).on(
        "scroll",
        $.proxy(function (e) {
          var win = $(window),
            winTop = win.scrollTop(),
            nodeTop = $(this.nodeClass).data("orig-top");
          isSticky = $(this.nodeClass).hasClass("fl-video-sticky");
          if (winTop >= nodeTop) {
            if (!isSticky) {
              this._makeSticky();
            }
          } else {
            this._removeSticky();
          }
        }, this),
      );
    },
  };
})(jQuery);
(function ($) {})(jQuery);
(function ($) {
  $(function () {
    if ("undefined" !== typeof $.fn.fitVids) {
      $(".fl-module-fl-post-content").fitVids();
    }
  });
})(jQuery);
jQuery(function ($) {
  $(function () {
    $(".fl-node-ob367wa59t12 .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
(function ($) {
  FLBuilderMenu = function (settings) {
    this.nodeId = settings.id;
    this.nodeClass = ".fl-node-" + settings.id;
    this.wrapperClass = this.nodeClass + " .fl-menu";
    this.type = settings.type;
    this.mobileToggle = settings.mobile;
    this.mobileBelowRow = settings.mobileBelowRow;
    this.mobileFlyout = settings.mobileFlyout;
    this.breakPoints = settings.breakPoints;
    this.mobileBreakpoint = settings.mobileBreakpoint;
    this.currentBrowserWidth = $(window).width();
    this.postId = settings.postId;
    this.mobileStacked = settings.mobileStacked;
    this._initMenu();
    $(window).on(
      "resize",
      $.proxy(function (e) {
        var width = $(window).width();
        if (width != this.currentBrowserWidth) {
          this.currentBrowserWidth = width;
          this._initMenu();
          this._clickOrHover();
        }
        this._resizeFlyoutMenuPanel();
      }, this),
    );
    $(window).on(
      "scroll",
      $.proxy(function (e) {
        this._resizeFlyoutMenuPanel();
      }, this),
    );
    $("body").on(
      "click",
      $.proxy(function (e) {
        if ("undefined" !== typeof FLBuilderConfig) {
          return;
        }
        var activeMobileMenu = $(
          this.wrapperClass + " .fl-menu-mobile-toggle.fl-active",
        );
        if (activeMobileMenu.length && "expanded" !== this.mobileToggle) {
          $(activeMobileMenu).trigger("click");
        }
        $(this.wrapperClass).find(".fl-has-submenu").removeClass("focus");
        $(this.wrapperClass)
          .find(".fl-has-submenu .sub-menu")
          .removeClass("focus");
      }, this),
    );
    $(this.wrapperClass + " ul.menu > li:last-child").on(
      "focusout",
      $.proxy(function (e) {
        if (
          $(this.wrapperClass)
            .find(".fl-menu-mobile-toggle")
            .hasClass("fl-active") &&
          "expanded" !== this.mobileToggle
        ) {
          if (!$(e.relatedTarget).parent().hasClass("menu-item")) {
            $(this.wrapperClass)
              .find(".fl-menu-mobile-toggle")
              .trigger("click");
          }
        }
      }, this),
    );
  };
  FLBuilderMenu.prototype = {
    nodeClass: "",
    wrapperClass: "",
    type: "",
    breakPoints: {},
    $submenus: null,
    _isMobile: function () {
      return this.currentBrowserWidth <= this.breakPoints.small ? true : !1;
    },
    _isMedium: function () {
      return this.currentBrowserWidth <= this.breakPoints.medium ? true : !1;
    },
    _isLarge: function () {
      return this.currentBrowserWidth <= this.breakPoints.large ? true : !1;
    },
    _isMenuToggle: function () {
      if (
        ("always" == this.mobileBreakpoint ||
          (this._isMobile() && "mobile" == this.mobileBreakpoint) ||
          (this._isMedium() && "medium-mobile" == this.mobileBreakpoint) ||
          (this._isLarge() && "large-mobile" == this.mobileBreakpoint)) &&
        ($(this.wrapperClass).find(".fl-menu-mobile-toggle").is(":visible") ||
          "expanded" == this.mobileToggle)
      ) {
        return !0;
      }
      return !1;
    },
    _initMenu: function () {
      this._setupSubmenu();
      this._menuOnFocus();
      this._menuOnEscape();
      this._submenuOnClick();
      if ($(this.nodeClass).length && this.type == "horizontal") {
        this._initMegaMenus();
      }
      if (this._isMenuToggle() || this.type == "accordion") {
        $(this.wrapperClass).off("mouseenter mouseleave");
        this._menuOnClick();
        this._clickOrHover();
      } else {
        $(this.wrapperClass).off("click");
        this._submenuOnRight();
        this._submenuRowZindexFix();
      }
      if (this.mobileToggle != "expanded") {
        this._toggleForMobile();
      }
      if ($(this.wrapperClass).find(".fl-menu-search-item").length) {
        this._toggleMenuSearch();
      }
      if ($(this.wrapperClass).find(".fl-menu-cart-item").length) {
        this._wooUpdateParams();
      }
    },
    _setupSubmenu: function () {
      $(this.wrapperClass + " ul.sub-menu").each(function () {
        $(this).closest("li").attr("aria-haspopup", "true");
      });
    },
    _menuOnFocus: function () {
      var cKey = 0,
        isShifted = !1;
      $(this.nodeClass)
        .off("keydown")
        .on("keydown", "a", function (e) {
          cKey = e.which;
          isShifted = e.shiftKey;
        });
      $(this.nodeClass)
        .off("focus")
        .on(
          "focus",
          "a",
          $.proxy(function (e) {
            var $menuItem = $(e.target).parents(".menu-item").first(),
              $parents = $(e.target).parentsUntil(this.wrapperClass);
            $(".fl-menu .focus").removeClass("focus");
            $parents.addClass("focus");
            if (!$menuItem.closest(".fl-has-submenu").hasClass("escaped")) {
              $menuItem.addClass("focus");
            } else {
              $menuItem.closest(".fl-has-submenu").removeClass("focus escaped");
            }
          }, this),
        )
        .on(
          "focusout",
          "a",
          $.proxy(function (e) {
            var el = $(e.target).parent(),
              $megaMenu = el.closest(".mega-menu"),
              $megaLastItem = $megaMenu.find(
                "> .sub-menu > .menu-item:last-child",
              ),
              $lastItem = el
                .parents(".fl-has-submenu:last")
                .find(".menu-item:last"),
              isLastChild = !$megaMenu.length && el.is($lastItem);
            if ($megaMenu.length) {
              isLastChild =
                el.is($megaLastItem) ||
                el.is($megaLastItem.find(".menu-item:last-child"));
            }
            if (isLastChild && cKey === 9 && isShifted) {
              isLastChild = !1;
              cKey = 0;
              isShifted = !1;
            } else if (cKey === 27) {
              isLastChild = !1;
            }
            if (isLastChild) {
              $(e.target).parentsUntil(this.wrapperClass).removeClass("focus");
            }
          }, this),
        );
    },
    _menuOnEscape: function () {
      $("body")
        .off("keydown")
        .on(
          "keydown",
          $.proxy(function (e) {
            if (e.which !== 27) {
              return;
            }
            if ($(e.target).closest(".menu-item").length) {
              var activeSubmenu = null,
                menuItem = $(e.target).closest(".menu-item"),
                type = menuItem.closest(".fl-menu-accordion").length
                  ? "accordion"
                  : "horizontal";
              if ("horizontal" === type) {
                if (
                  menuItem.hasClass("fl-has-submenu") &&
                  menuItem.hasClass("focus")
                ) {
                  activeSubmenu = menuItem.find("> ul.sub-menu");
                } else {
                  activeSubmenu = menuItem.closest("ul.sub-menu");
                }
                activeSubmenu.parent().addClass("escaped");
                activeSubmenu.parent().find("a:first").focus();
              } else {
                if (
                  menuItem.hasClass("fl-has-submenu") &&
                  "accordion" === type &&
                  menuItem.hasClass("fl-active")
                ) {
                  activeSubmenu = menuItem.find("> ul.sub-menu");
                } else {
                  activeSubmenu = menuItem.closest("ul.sub-menu");
                }
                activeSubmenu.slideUp(400, function () {
                  if (
                    menuItem.hasClass("fl-has-submenu") &&
                    menuItem.hasClass("fl-active")
                  ) {
                    activeSubmenu.parent().last().find("a:first").focus();
                  } else {
                    menuItem.removeClass("focus");
                    menuItem
                      .parents(".menu-item")
                      .first()
                      .find("a:first")
                      .focus();
                  }
                  activeSubmenu.parent().last().removeClass("fl-active");
                });
              }
            } else {
              $(".fl-menu")
                .find("li.menu-item.focus")
                .last()
                .removeClass("focus");
            }
          }, this),
        );
    },
    _menuOnClick: function () {
      $(this.wrapperClass)
        .off()
        .on(
          "click",
          ".fl-has-submenu-container",
          $.proxy(function (e) {
            var $link = $(e.target).parents(".fl-has-submenu").first(),
              $subMenu = $link.children(".sub-menu").first(),
              $href = $link
                .children(".fl-has-submenu-container")
                .first()
                .find("> a")
                .attr("href"),
              $subMenuParents = $(e.target).parents(".sub-menu"),
              $activeParents = $(e.target).parents(".fl-has-submenu.fl-active");
            if (
              !$subMenu.is(":visible") ||
              $(e.target).hasClass("fl-menu-toggle") ||
              ($subMenu.is(":visible") &&
                (typeof $href === "undefined" || $href == "#"))
            ) {
              e.preventDefault();
            } else {
              e.stopPropagation();
              window.location.href = $href;
              return;
            }
            if ($(this.wrapperClass).hasClass("fl-menu-accordion-collapse")) {
              if (!$link.parents(".menu-item").hasClass("fl-active")) {
                $(".menu .fl-active", this.wrapperClass)
                  .not($link)
                  .removeClass("fl-active");
              } else if (
                $link.parents(".menu-item").hasClass("fl-active") &&
                $link.parent(".sub-menu").length
              ) {
                $(".menu .fl-active", this.wrapperClass)
                  .not($link)
                  .not($activeParents)
                  .removeClass("fl-active");
              }
              $(".sub-menu", this.wrapperClass)
                .not($subMenu)
                .not($subMenuParents)
                .slideUp("normal");
            }
            if (
              !this.mobileStacked &&
              "horizontal" == this.type &&
              "expanded" == this.mobileToggle
            ) {
              $(this.wrapperClass)
                .find(".fl-active")
                .not($link)
                .not($activeParents)
                .removeClass("fl-active");
            } else {
              $subMenu.slideToggle();
            }
            $link.toggleClass("fl-active");
            e.stopPropagation();
          }, this),
        );
    },
    _submenuOnClick: function () {
      $(this.wrapperClass + " .sub-menu")
        .off()
        .on(
          "click",
          "a",
          $.proxy(function (e) {
            if ($(e.target).parent().hasClass("focus")) {
              $(e.target).parentsUntil(this.wrapperClass).removeClass("focus");
            }
          }, this),
        );
    },
    _clickOrHover: function () {
      this.$submenus = this.$submenus || $(this.wrapperClass).find(".sub-menu");
      var $wrapper = $(this.wrapperClass),
        $menu = $wrapper.find(".menu");
      $li = $wrapper.find(".fl-has-submenu");
      if (this._isMenuToggle()) {
        $li.each(function (el) {
          if (!$(this).hasClass("fl-active")) {
            $(this).find(".sub-menu").fadeOut();
          }
        });
      } else {
        $li.each(function (el) {
          if (!$(this).hasClass("fl-active")) {
            $(this).find(".sub-menu").css({ display: "", opacity: "" });
          }
        });
      }
    },
    _submenuOnRight: function () {
      $(this.wrapperClass)
        .on(
          "mouseenter focus",
          ".fl-has-submenu",
          $.proxy(function (e) {
            if ($(e.currentTarget).find(".sub-menu").length === 0) {
              return;
            }
            var $link = $(e.currentTarget),
              $parent = $link.parent(),
              $subMenu = $link.find(".sub-menu"),
              subMenuWidth = $subMenu.width(),
              subMenuPos = 0,
              bodyWidth = $("body").width();
            if ($link.closest(".fl-menu-submenu-right").length !== 0) {
              $link.addClass("fl-menu-submenu-right");
            } else if ($("body").hasClass("rtl")) {
              subMenuPos = $parent.is(".sub-menu")
                ? $parent.offset().left - subMenuWidth
                : $link.offset().left - $link.width() - subMenuWidth;
              if (subMenuPos <= 0) {
                $link.addClass("fl-menu-submenu-right");
              }
            } else {
              subMenuPos = $parent.is(".sub-menu")
                ? $parent.offset().left + $parent.width() + subMenuWidth
                : $link.offset().left + $link.width() + subMenuWidth;
              if (subMenuPos > bodyWidth) {
                $link.addClass("fl-menu-submenu-right");
              }
            }
          }, this),
        )
        .on(
          "mouseleave",
          ".fl-has-submenu",
          $.proxy(function (e) {
            $(e.currentTarget).removeClass("fl-menu-submenu-right");
          }, this),
        );
    },
    _submenuRowZindexFix: function (e) {
      $(this.wrapperClass)
        .on(
          "mouseenter",
          "ul.menu > .fl-has-submenu",
          $.proxy(function (e) {
            if ($(e.currentTarget).find(".sub-menu").length === 0) {
              return;
            }
            $(this.nodeClass)
              .closest(".fl-row")
              .find(".fl-row-content")
              .css("z-index", "10");
          }, this),
        )
        .on(
          "mouseleave",
          "ul.menu > .fl-has-submenu",
          $.proxy(function (e) {
            $(this.nodeClass)
              .closest(".fl-row")
              .find(".fl-row-content")
              .css("z-index", "");
          }, this),
        );
    },
    _toggleForMobile: function () {
      var $wrapper = null,
        $menu = null,
        self = this;
      if (this._isMenuToggle()) {
        if (this._isMobileBelowRowEnabled()) {
          this._placeMobileMenuBelowRow();
          $wrapper = $(this.wrapperClass);
          $menu = $(this.nodeClass + "-clone");
          $menu.find("ul.menu").show();
        } else {
          $wrapper = $(this.wrapperClass);
          $menu = $wrapper.find(".menu");
        }
        if (
          !$wrapper.find(".fl-menu-mobile-toggle").hasClass("fl-active") &&
          !self.mobileFlyout
        ) {
          $menu.css({ display: "none" });
        }
        if (self.mobileFlyout) {
          this._initFlyoutMenu();
        }
        $wrapper.on("click", ".fl-menu-mobile-toggle", function (e) {
          $(this).toggleClass("fl-active");
          if (self.mobileFlyout) {
            self._toggleFlyoutMenu();
          } else {
            var targetMenu = null;
            if (self.mobileBelowRow) {
              targetMenu = $(this)
                .closest(".fl-col")
                .next(".fl-menu-mobile-clone");
            } else {
              targetMenu = $(this).closest(".fl-menu").find("ul.menu");
            }
            if (targetMenu.length) {
              $menu = $(targetMenu);
            }
            $menu.slideToggle();
          }
          e.stopPropagation();
        });
        $menu
          .off()
          .on(
            "click",
            '.menu-item > a[href*="#"]:not([href="#"])',
            function (e) {
              var $href = $(this).attr("href"),
                $targetID = $href.split("#")[1],
                element = $("#" + $targetID);
              if ($("body").find(element).length > 0) {
                $(this).toggleClass("fl-active");
                FLBuilderLayout._scrollToElement(element);
                if (!self._isMenuToggle()) {
                  $menu.slideToggle();
                }
              }
            },
          );
      } else {
        if (this._isMobileBelowRowEnabled()) {
          this._removeMenuFromBelowRow();
        }
        ($wrapper = $(this.wrapperClass)), ($menu = $wrapper.find("ul.menu"));
        $wrapper.find(".fl-menu-mobile-toggle").removeClass("fl-active");
        $menu.css({ display: "" });
        if (!this._isMobileBelowRowEnabled()) {
          $menu.off("click", '.menu-item > a[href*="#"]:not([href="#"])');
        }
        if (
          this.mobileFlyout &&
          $wrapper.find(".fl-menu-mobile-flyout").length > 0
        ) {
          $("body").css("margin", "");
          $(".fl-builder-ui-pinned-content-transform").css("transform", "");
          $menu.unwrap();
          $wrapper.find(".fl-menu-mobile-close").remove();
          $wrapper.find(".fl-menu-mobile-opacity").remove();
        }
      }
    },
    _initMegaMenus: function () {
      var module = $(this.nodeClass),
        rowContent = module.closest(".fl-row-content"),
        rowWidth = rowContent.width(),
        megas = module.find(".mega-menu"),
        disabled = module.find(".mega-menu-disabled"),
        isToggle = this._isMenuToggle();
      if (isToggle) {
        megas.removeClass("mega-menu").addClass("mega-menu-disabled");
        module.find("li.mega-menu-disabled > ul.sub-menu").css("width", "");
        rowContent.css("position", "");
      } else {
        disabled.removeClass("mega-menu-disabled").addClass("mega-menu");
        module.find("li.mega-menu > ul.sub-menu").css("width", rowWidth + "px");
        rowContent.css("position", "relative");
      }
    },
    _isMobileBelowRowEnabled: function () {
      return this.mobileBelowRow && $(this.nodeClass).closest(".fl-col").length;
    },
    _placeMobileMenuBelowRow: function () {
      if ($(this.nodeClass + "-clone").length) {
        return;
      }
      var module = $(this.nodeClass),
        clone = null,
        col = module.closest(".fl-col");
      if (module.length < 1) {
        return;
      }
      clone = module.length > 1 ? $(module[0]).clone() : module.clone();
      module.find("ul.menu").remove();
      clone.addClass((this.nodeClass + "-clone").replace(".", ""));
      clone.addClass("fl-menu-mobile-clone");
      clone.find(".fl-menu-mobile-toggle").remove();
      col.after(clone);
      if (module.hasClass("fl-animation")) {
        clone.removeClass("fl-animation");
      }
      this._menuOnClick();
    },
    _removeMenuFromBelowRow: function () {
      if (!$(this.nodeClass + "-clone").length) {
        return;
      }
      var module = $(this.nodeClass),
        clone = $(this.nodeClass + "-clone"),
        menu = clone.find("ul.menu");
      module.find(".fl-menu-mobile-toggle").after(menu);
      clone.remove();
      menu.find("a").each(FLBuilderLayout._initAnchorLink);
    },
    _initFlyoutMenu: function () {
      var win = $(window),
        wrapper = $(this.wrapperClass),
        menu = wrapper.find("ul.menu"),
        button = wrapper.find(".fl-menu-mobile-toggle");
      if (0 === wrapper.find(".fl-menu-mobile-flyout").length) {
        menu.wrap('<div class="fl-menu-mobile-flyout"></div>');
      }
      if (0 === wrapper.find(".fl-menu-mobile-close").length) {
        close = window.fl_responsive_close || "Close";
        wrapper
          .find(".fl-menu-mobile-flyout")
          .prepend(
            '<button class="fl-menu-mobile-close" aria-label="' +
              close +
              '"><i class="fas fa-times" aria-hidden="true"></i></button>',
          );
      }
      if (
        wrapper.hasClass("fl-menu-responsive-flyout-push-opacity") &&
        0 === wrapper.find(".fl-menu-mobile-opacity").length
      ) {
        wrapper.append('<div class="fl-menu-mobile-opacity"></div>');
      }
      wrapper.on(
        "click",
        ".fl-menu-mobile-opacity, .fl-menu-mobile-close",
        function (e) {
          button.trigger("click");
          e.stopPropagation();
        },
      );
      if ("undefined" !== typeof FLBuilder) {
        FLBuilder.addHook("restartEditingSession", function () {
          $(".fl-builder-ui-pinned-content-transform").css("transform", "");
          if (button.hasClass("fl-active")) {
            button.trigger("click");
          }
        });
      }
    },
    _toggleFlyoutMenu: function () {
      var wrapper = $(this.wrapperClass),
        button = wrapper.find(".fl-menu-mobile-toggle"),
        wrapFlyout = wrapper.find(".fl-menu-mobile-flyout"),
        position = wrapper.hasClass("fl-flyout-right") ? "right" : "left",
        pushMenu =
          wrapper.hasClass("fl-menu-responsive-flyout-push") ||
          wrapper.hasClass("fl-menu-responsive-flyout-push-opacity"),
        opacity = wrapper.find(".fl-menu-mobile-opacity"),
        marginPos = {},
        posAttr = {},
        fixedPos = {},
        winHeight = $(window).height(),
        fixedHeader = $("header, header > div");
      this._resizeFlyoutMenuPanel();
      if (
        $(".fl-builder-ui-pinned-content-transform").length > 0 &&
        !$("body").hasClass("fl-builder-edit")
      ) {
        $(".fl-builder-ui-pinned-content-transform").css("transform", "none");
      }
      if (pushMenu) {
        marginPos["margin-" + position] = button.hasClass("fl-active")
          ? "250px"
          : "0px";
        $("body").animate(marginPos, 200);
        if (fixedHeader.length > 0) {
          fixedPos[position] = button.hasClass("fl-active") ? "250px" : "0px";
          fixedHeader.each(function () {
            if ("fixed" == $(this).css("position")) {
              $(this).css({
                "-webkit-transition": "none",
                "-o-transition": "none",
                transition: "none",
              });
              $(this).animate(fixedPos, 200);
            }
          });
        }
      }
      if (opacity.length > 0 && button.hasClass("fl-active")) {
        opacity.show();
      } else {
        opacity.hide();
      }
    },
    _resizeFlyoutMenuPanel: function () {
      const wrapper = $(this.wrapperClass);
      const wrapFlyout = wrapper.find(".fl-menu-mobile-flyout");
      if (wrapFlyout.length > 0) {
        wrapFlyout.css(this._getFlyoutMenuPanelPosition());
      }
    },
    _getFlyoutMenuPanelPosition: function () {
      var wrapper = $(this.wrapperClass),
        button = wrapper.find(".fl-menu-mobile-toggle"),
        wrapFlyout = wrapper.find(".fl-menu-mobile-flyout"),
        side = wrapper.hasClass("fl-flyout-right") ? "right" : "left",
        winHeight = $(window).outerHeight(),
        winTop = $(window).scrollTop(),
        adminBarHeight = $("#wpadminbar").length
          ? $("#wpadminbar").height()
          : 0,
        flyoutPosition = {};
      flyoutPosition[side] = "-267px";
      if (!button.hasClass("fl-active")) {
        return flyoutPosition;
      }
      flyoutPosition[side] = "0px";
      flyoutPosition.height = winHeight + "px";
      flyoutPosition.top = "0px";
      if (adminBarHeight > 0) {
        const diff = adminBarHeight - winTop;
        flyoutPosition.top = diff <= 0 ? "0px" : diff + "px";
      }
      return flyoutPosition;
    },
    _toggleMenuSearch: function () {
      var wrapper = $(this.wrapperClass).find(".fl-menu-search-item"),
        button = wrapper.find("a.fl-button"),
        form = wrapper.find(".fl-search-form-input-wrap"),
        self = this;
      button.on("click", function (e) {
        e.preventDefault();
        if (form.is(":visible")) {
          form.stop().fadeOut(200);
        } else {
          form.stop().fadeIn(200);
          $("body").on(
            "click.fl-menu-search",
            $.proxy(self._hideMenuSearch, self),
          );
          form.find(".fl-search-text").focus();
        }
      });
    },
    _hideMenuSearch: function (e) {
      var form = $(this.wrapperClass).find(".fl-search-form-input-wrap");
      if (e !== undefined) {
        if ($(e.target).closest(".fl-menu-search-item").length > 0) {
          return;
        }
      }
      form.stop().fadeOut(200);
      $("body").off("click.fl-menu-search");
    },
    _wooUpdateParams: function () {
      if ("undefined" !== typeof wc_cart_fragments_params) {
        wc_cart_fragments_params.wc_ajax_url +=
          "&fl-menu-node=" + this.nodeId + "&post-id=" + this.postId;
      }
      if ("undefined" !== typeof wc_add_to_cart_params) {
        wc_add_to_cart_params.wc_ajax_url +=
          "&fl-menu-node=" + this.nodeId + "&post-id=" + this.postId;
      }
    },
  };
})(jQuery);
(function ($) {
  $(function () {
    new FLBuilderMenu({
      id: "xgjbcefpn41o",
      type: "horizontal",
      mobile: "hamburger",
      mobileBelowRow: !1,
      mobileFlyout: !0,
      breakPoints: { large: 1200, medium: 992, small: 768 },
      mobileBreakpoint: "mobile",
      postId: "12006",
      mobileStacked: !0,
    });
  });
})(jQuery);
jQuery(function ($) {
  $(function () {
    $(".fl-node-mvcoslzdbxjn .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
jQuery(function ($) {
  $(function () {
    $(".fl-node-pgaw2cezu5yv .fl-photo-img")
      .on("mouseenter", function (e) {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
      })
      .on("mouseleave", function (e) {
        $(this).attr("title", $(this).data("title")).data("title", null);
      });
  });
  window._fl_string_to_slug_regex = "a-zA-Z0-9";
});
(function ($) {
  $(function () {
    new FLBuilderMenu({
      id: "7yw6oj3uv85d",
      type: "horizontal",
      mobile: "hamburger",
      mobileBelowRow: !1,
      mobileFlyout: !1,
      breakPoints: { large: 1200, medium: 992, small: 768 },
      mobileBreakpoint: "mobile",
      postId: "12006",
      mobileStacked: !0,
    });
  });
})(jQuery);
(function ($) {
  FLThemeBuilderHeaderLayout = {
    win: null,
    body: null,
    header: null,
    overlay: !1,
    hasAdminBar: !1,
    stickyOn: "",
    breakpointWidth: 0,
    init: function () {
      var editing = $("html.fl-builder-edit").length,
        header = $(".fl-builder-content[data-type=header]"),
        menuModule = header.find(".fl-module-menu"),
        breakpoint = null;
      if (!editing && header.length) {
        header.imagesLoaded(
          $.proxy(function () {
            this.win = $(window);
            this.body = $("body");
            this.header = header.eq(0);
            this.overlay = !!Number(header.attr("data-overlay"));
            this.hasAdminBar = !!$("body.admin-bar").length;
            this.stickyOn = this.header.data("sticky-on");
            breakpoint = this.header.data("sticky-breakpoint");
            if ("" == this.stickyOn) {
              if (
                typeof FLBuilderLayoutConfig.breakpoints[breakpoint] !==
                undefined
              ) {
                this.breakpointWidth =
                  FLBuilderLayoutConfig.breakpoints[breakpoint];
              } else {
                this.breakpointWidth = FLBuilderLayoutConfig.breakpoints.medium;
              }
            }
            if (Number(header.attr("data-sticky"))) {
              this.header.data("original-top", this.header.offset().top);
              this.win.on(
                "resize",
                $.throttle(500, $.proxy(this._initSticky, this)),
              );
              this._initSticky();
            }
          }, this),
        );
      }
    },
    _initSticky: function (e) {
      var header = $(".fl-builder-content[data-type=header]"),
        windowSize = this.win.width(),
        makeSticky = !1;
      makeSticky = this._makeWindowSticky(windowSize);
      if (
        makeSticky ||
        (this.breakpointWidth > 0 && windowSize >= this.breakpointWidth)
      ) {
        this.win.on(
          "scroll.fl-theme-builder-header-sticky",
          $.proxy(this._doSticky, this),
        );
        if (e && "resize" === e.type) {
          if (this.header.hasClass("fl-theme-builder-header-sticky")) {
            this._doSticky(e);
          }
          this._adjustStickyHeaderWidth();
        }
        if (Number(header.attr("data-shrink"))) {
          this.header.data("original-height", this.header.outerHeight());
          this.win.on(
            "resize",
            $.throttle(500, $.proxy(this._initShrink, this)),
          );
          this._initShrink();
        }
        this._initFlyoutMenuFix(e);
      } else {
        this.win.off("scroll.fl-theme-builder-header-sticky");
        this.win.off("resize.fl-theme-builder-header-sticky");
        this.header.removeClass("fl-theme-builder-header-sticky");
        this.header.removeAttr("style");
        this.header.parent().css("padding-top", "0");
      }
    },
    _makeWindowSticky: function (windowSize) {
      var makeSticky = !1;
      switch (this.stickyOn) {
        case "xl":
          makeSticky = windowSize > FLBuilderLayoutConfig.breakpoints.large;
          break;
        case "":
        case "desktop":
          makeSticky = windowSize >= FLBuilderLayoutConfig.breakpoints.medium;
          break;
        case "desktop-medium":
          makeSticky = windowSize > FLBuilderLayoutConfig.breakpoints.small;
          break;
        case "large":
          makeSticky =
            windowSize > FLBuilderLayoutConfig.breakpoints.medium &&
            windowSize <= FLBuilderLayoutConfig.breakpoints.large;
          break;
        case "large-medium":
          makeSticky =
            windowSize > FLBuilderLayoutConfig.breakpoints.small &&
            windowSize <= FLBuilderLayoutConfig.breakpoints.large;
          break;
        case "medium":
          makeSticky =
            windowSize <= FLBuilderLayoutConfig.breakpoints.medium &&
            windowSize > FLBuilderLayoutConfig.breakpoints.small;
          break;
        case "medium-mobile":
          makeSticky = windowSize <= FLBuilderLayoutConfig.breakpoints.medium;
          break;
        case "mobile":
          makeSticky = windowSize <= FLBuilderLayoutConfig.breakpoints.small;
          break;
        case "all":
          makeSticky = !0;
          break;
      }
      return makeSticky;
    },
    _doSticky: function (e) {
      var winTop = Math.floor(this.win.scrollTop()),
        headerTop = Math.floor(this.header.data("original-top")),
        hasStickyClass = this.header.hasClass("fl-theme-builder-header-sticky"),
        hasScrolledClass = this.header.hasClass(
          "fl-theme-builder-header-scrolled",
        ),
        beforeHeader = this.header.prevAll(".fl-builder-content"),
        bodyTopPadding = parseInt(jQuery("body").css("padding-top")),
        winBarHeight = $("#wpadminbar").length
          ? $("#wpadminbar").outerHeight()
          : 0,
        headerHeight = 0;
      if (isNaN(bodyTopPadding)) {
        bodyTopPadding = 0;
      }
      if (this.hasAdminBar && this.win.width() > 600) {
        winTop += Math.floor(winBarHeight);
      }
      if (winTop > headerTop) {
        if (!hasStickyClass) {
          if (e && ("scroll" === e.type || "smartscroll" === e.type)) {
            this.header.addClass("fl-theme-builder-header-sticky");
            if (this.overlay && beforeHeader.length) {
              this.header.css("top", winBarHeight);
            }
          }
          if (!this.overlay) {
            this._adjustHeaderHeight();
          }
        }
      } else if (hasStickyClass) {
        this.header.removeClass("fl-theme-builder-header-sticky");
        this.header.removeAttr("style");
        this.header.parent().css("padding-top", "0");
      }
      this._adjustStickyHeaderWidth();
      if (winTop > headerTop) {
        if (!hasScrolledClass) {
          this.header.addClass("fl-theme-builder-header-scrolled");
        }
      } else if (hasScrolledClass) {
        this.header.removeClass("fl-theme-builder-header-scrolled");
      }
      this._flyoutMenuFix(e);
    },
    _initFlyoutMenuFix: function (e) {
      var header = this.header,
        menuModule = header.find(".fl-menu"),
        flyoutMenu = menuModule.find(".fl-menu-mobile-flyout"),
        isPushMenu =
          menuModule.hasClass("fl-menu-responsive-flyout-push") ||
          menuModule.hasClass("fl-menu-responsive-flyout-push-opacity"),
        isSticky = header.hasClass("fl-theme-builder-header-sticky"),
        isOverlay = menuModule.hasClass("fl-menu-responsive-flyout-overlay"),
        flyoutPos = menuModule.hasClass("fl-flyout-right") ? "right" : "left",
        flyoutParent = header.parent().is("header")
          ? header.parent().parent()
          : header.parent();
      (isFullWidth = this.win.width() === header.width()),
        (flyoutLayout = ""),
        (activePos = 250),
        (headerPos = 0);
      if (!flyoutMenu.length) {
        return;
      }
      if (this.win.width() > header.parent().width()) {
        headerPos = (this.win.width() - header.width()) / 2;
      }
      if (isOverlay) {
        activePos = headerPos;
      } else if (isPushMenu) {
        activePos = activePos + headerPos;
      }
      flyoutMenu.data("activePos", activePos);
      if (isPushMenu) {
        flyoutLayout = "push-" + flyoutPos;
      } else if (isOverlay) {
        flyoutLayout = "overlay-" + flyoutPos;
      }
      if (
        isPushMenu &&
        !$("html").hasClass("fl-theme-builder-has-flyout-menu")
      ) {
        $("html").addClass("fl-theme-builder-has-flyout-menu");
      }
      if (
        !flyoutParent.hasClass("fl-theme-builder-flyout-menu-" + flyoutLayout)
      ) {
        flyoutParent.addClass("fl-theme-builder-flyout-menu-" + flyoutLayout);
      }
      if (
        !header.hasClass("fl-theme-builder-flyout-menu-overlay") &&
        isOverlay
      ) {
        header.addClass("fl-theme-builder-flyout-menu-overlay");
      }
      if (
        !header.hasClass("fl-theme-builder-header-full-width") &&
        isFullWidth
      ) {
        header.addClass("fl-theme-builder-header-full-width");
      } else if (!isFullWidth) {
        header.removeClass("fl-theme-builder-header-full-width");
      }
      menuModule.on(
        "click",
        ".fl-menu-mobile-toggle",
        $.proxy(function (event) {
          if (menuModule.find(".fl-menu-mobile-toggle.fl-active").length) {
            $("html").addClass("fl-theme-builder-flyout-menu-active");
            event.stopImmediatePropagation();
          } else {
            $("html").removeClass("fl-theme-builder-flyout-menu-active");
          }
          this._flyoutMenuFix(event);
        }, this),
      );
    },
    _flyoutMenuFix: function (e) {
      var header = this.header,
        menuModule = header.find(".fl-menu"),
        flyoutMenu = menuModule.find(".fl-menu-mobile-flyout"),
        isPushMenu =
          menuModule.hasClass("fl-menu-responsive-flyout-push") ||
          menuModule.hasClass("fl-menu-responsive-flyout-push-opacity"),
        flyoutPos = menuModule.hasClass("fl-flyout-right") ? "right" : "left",
        menuOpacity = menuModule.find(".fl-menu-mobile-opacity"),
        isScroll = "undefined" !== typeof e && "scroll" === e.handleObj.type,
        activePos =
          "undefined" !== typeof flyoutMenu.data("activePos")
            ? flyoutMenu.data("activePos")
            : 0,
        headerPos = (this.win.width() - header.width()) / 2,
        inactivePos = headerPos > 0 ? activePos + 4 : 254;
      if (!flyoutMenu.length) {
        return;
      }
      if (this.overlay) {
        return;
      }
      if ($(".fl-theme-builder-flyout-menu-active").length) {
        if (isScroll && !flyoutMenu.hasClass("fl-menu-disable-transition")) {
          flyoutMenu.addClass("fl-menu-disable-transition");
        }
        if (header.hasClass("fl-theme-builder-header-sticky")) {
          if (!isScroll) {
            setTimeout(
              $.proxy(function () {
                flyoutMenu.css(flyoutPos, "-" + activePos + "px");
              }, this),
              1,
            );
          } else {
            flyoutMenu.css(flyoutPos, "-" + activePos + "px");
          }
        } else {
          flyoutMenu.css(flyoutPos, "0px");
        }
      } else {
        if (flyoutMenu.hasClass("fl-menu-disable-transition")) {
          flyoutMenu.removeClass("fl-menu-disable-transition");
        }
        if (
          header.hasClass("fl-theme-builder-flyout-menu-overlay") &&
          headerPos > 0 &&
          headerPos < 250
        ) {
          if (header.hasClass("fl-theme-builder-header-sticky")) {
            inactivePos = headerPos + 254;
          } else {
            inactivePos = 254;
          }
        }
        if (e && e.type === "resize") {
          inactivePos = headerPos + 254;
        }
        flyoutMenu.css(flyoutPos, "-" + inactivePos + "px");
      }
      if (
        e &&
        menuModule.is(".fl-menu-responsive-flyout-overlay") &&
        $.infinitescroll
      ) {
        e.stopImmediatePropagation();
      }
      if (menuOpacity.length) {
        if (header.hasClass("fl-theme-builder-header-sticky")) {
          if ("0px" === menuOpacity.css("left")) {
            menuOpacity.css("left", "-" + headerPos + "px");
          }
        } else {
          menuOpacity.css("left", "");
        }
      }
    },
    _adjustStickyHeaderWidth: function () {
      if ($("body").hasClass("fl-fixed-width")) {
        var parentWidth = this.header.parent().width();
        if (this.win.width() >= 992) {
          this.header.css({ margin: "0 auto", "max-width": parentWidth });
        } else {
          this.header.css({ margin: "", "max-width": "" });
        }
      }
    },
    _adjustHeaderHeight: function () {
      var beforeHeader = this.header.prevAll(".fl-builder-content"),
        beforeHeaderHeight = 0,
        beforeHeaderFix = 0,
        headerHeight = Math.floor(this.header.outerHeight()),
        bodyTopPadding = parseInt($("body").css("padding-top")),
        wpAdminBarHeight = 0,
        totalHeaderHeight = 0;
      if (isNaN(bodyTopPadding)) {
        bodyTopPadding = 0;
      }
      if (beforeHeader.length) {
        $.each(beforeHeader, function () {
          beforeHeaderHeight += Math.floor($(this).outerHeight());
        });
        beforeHeaderFix = 2;
      }
      if (this.hasAdminBar && this.win.width() <= 600) {
        wpAdminBarHeight = Math.floor($("#wpadminbar").outerHeight());
      }
      totalHeaderHeight = Math.floor(beforeHeaderHeight + headerHeight);
      if (headerHeight > 0) {
        var headerParent = this.header.parent(),
          headerParentTopPadding = 0;
        if ($(headerParent).is("body")) {
          headerParentTopPadding = Math.floor(headerHeight - wpAdminBarHeight);
        } else {
          headerParentTopPadding = Math.floor(
            headerHeight - bodyTopPadding - wpAdminBarHeight,
          );
        }
        $(headerParent).css(
          "padding-top",
          headerParentTopPadding - beforeHeaderFix + "px",
        );
        this.header.css({
          "-webkit-transform": "translate(0px, -" + totalHeaderHeight + "px)",
          "-ms-transform": "translate(0px, -" + totalHeaderHeight + "px)",
          transform: "translate(0px, -" + totalHeaderHeight + "px)",
        });
      }
    },
    _initShrink: function (e) {
      if (this.win.width() >= this.breakpointWidth) {
        this.win.on(
          "scroll.fl-theme-builder-header-shrink",
          $.proxy(this._doShrink, this),
        );
        this._setImageMaxHeight();
        if (this.win.scrollTop() > 0) {
          this._doShrink();
        }
      } else {
        this.header.parent().css("padding-top", "0");
        this.win.off("scroll.fl-theme-builder-header-shrink");
        this._removeShrink();
        this._removeImageMaxHeight();
      }
    },
    _doShrink: function (e) {
      var winTop = this.win.scrollTop(),
        headerTop = this.header.data("original-top"),
        headerHeight = this.header.data("original-height"),
        shrinkImageHeight = this.header.data("shrink-image-height"),
        windowSize = this.win.width(),
        makeSticky = this._makeWindowSticky(windowSize),
        hasClass = this.header.hasClass("fl-theme-builder-header-shrink");
      if (this.hasAdminBar) {
        winTop += 32;
      }
      if (makeSticky && winTop > headerTop + headerHeight) {
        if (!hasClass) {
          this.header.addClass("fl-theme-builder-header-shrink");
          this.header.find("img").each(function (i) {
            var image = $(this),
              maxMegaMenu = image.closest(".max-mega-menu").length,
              imageInLightbox = image.closest(
                ".fl-button-lightbox-content",
              ).length,
              imageInNavMenu = image.closest("li.menu-item").length;
            if (!(imageInLightbox || imageInNavMenu || maxMegaMenu)) {
              image.css("max-height", shrinkImageHeight);
            }
          });
          this.header.find(".fl-row-content-wrap").each(function () {
            var row = $(this);
            if (parseInt(row.css("padding-bottom")) > 5) {
              row.addClass("fl-theme-builder-header-shrink-row-bottom");
            }
            if (parseInt(row.css("padding-top")) > 5) {
              row.addClass("fl-theme-builder-header-shrink-row-top");
            }
          });
          this.header.find(".fl-module-content").each(function () {
            var module = $(this);
            if (parseInt(module.css("margin-bottom")) > 5) {
              module.addClass("fl-theme-builder-header-shrink-module-bottom");
            }
            if (parseInt(module.css("margin-top")) > 5) {
              module.addClass("fl-theme-builder-header-shrink-module-top");
            }
          });
        }
      } else if (hasClass) {
        this.header.find("img").css("max-height", "");
        this._removeShrink();
      }
      if ("undefined" === typeof e && $("body").hasClass("fl-fixed-width")) {
        if (!this.overlay) {
          this._adjustHeaderHeight();
        }
      }
    },
    _removeShrink: function () {
      var rows = this.header.find(".fl-row-content-wrap"),
        modules = this.header.find(".fl-module-content");
      rows.removeClass("fl-theme-builder-header-shrink-row-bottom");
      rows.removeClass("fl-theme-builder-header-shrink-row-top");
      modules.removeClass("fl-theme-builder-header-shrink-module-bottom");
      modules.removeClass("fl-theme-builder-header-shrink-module-top");
      this.header.removeClass("fl-theme-builder-header-shrink");
    },
    _setImageMaxHeight: function () {
      var head = $("head"),
        stylesId = "fl-header-styles-" + this.header.data("post-id"),
        styles = "",
        images = this.header.find(".fl-module-content img");
      if ($("#" + stylesId).length) {
        return;
      }
      images.each(function (i) {
        var image = $(this),
          height = image.height(),
          node = image.closest(".fl-module").data("node"),
          className = "fl-node-" + node + "-img-" + i,
          maxMegaMenu = image.closest(".max-mega-menu").length,
          imageInLightbox = image.closest(".fl-button-lightbox-content").length,
          imageInNavMenu = image.closest("li.menu-item").length;
        if (!(imageInLightbox || imageInNavMenu || maxMegaMenu)) {
          image.addClass(className);
          styles +=
            "." +
            className +
            " { max-height: " +
            (height ? height : image[0].height) +
            "px }";
        }
      });
      if ("" !== styles) {
        head.append('<style id="' + stylesId + '">' + styles + "</style>");
      }
    },
    _removeImageMaxHeight: function () {
      $("#fl-header-styles-" + this.header.data("post-id")).remove();
    },
  };
  $(function () {
    FLThemeBuilderHeaderLayout.init();
  });
})(jQuery);
/*!/wp-includes/js/dist/vendor/wp-polyfill.min.js*/
!(function (r) {
  "use strict";
  var t, e, n;
  (e = {}),
    ((n = function (r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }).m = t =
      [
        function (r, t, e) {
          e(1),
            e(70),
            e(77),
            e(80),
            e(81),
            e(83),
            e(95),
            e(96),
            e(98),
            e(101),
            e(103),
            e(104),
            e(113),
            e(114),
            e(117),
            e(123),
            e(138),
            e(140),
            e(141),
            (r.exports = e(142));
        },
        function (r, t, e) {
          var n = e(2),
            o = e(38),
            a = e(62),
            c = e(67),
            i = e(69);
          n(
            {
              target: "Array",
              proto: !0,
              arity: 1,
              forced:
                e(6)(function () {
                  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
                }) ||
                !(function () {
                  try {
                    Object.defineProperty([], "length", {
                      writable: !1,
                    }).push();
                  } catch (r) {
                    return r instanceof TypeError;
                  }
                })(),
            },
            {
              push: function (r) {
                var t = o(this),
                  e = a(t),
                  n = arguments.length;
                i(e + n);
                for (var u = 0; u < n; u++) (t[e] = arguments[u]), e++;
                return c(t, e), e;
              },
            },
          );
        },
        function (t, e, n) {
          var o = n(3),
            a = n(4).f,
            c = n(42),
            i = n(46),
            u = n(36),
            f = n(54),
            s = n(66);
          t.exports = function (t, e) {
            var n,
              p,
              l,
              y = t.target,
              h = t.global,
              v = t.stat,
              g = h ? o : v ? o[y] || u(y, {}) : o[y] && o[y].prototype;
            if (g)
              for (n in e) {
                if (
                  ((p = e[n]),
                  (l = t.dontCallGetSet ? (l = a(g, n)) && l.value : g[n]),
                  !s(h ? n : y + (v ? "." : "#") + n, t.forced) && l !== r)
                ) {
                  if (typeof p == typeof l) continue;
                  f(p, l);
                }
                (t.sham || (l && l.sham)) && c(p, "sham", !0), i(g, n, p, t);
              }
          };
        },
        function (r, t, e) {
          function n(r) {
            return r && r.Math === Math && r;
          }
          r.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof global && global) ||
            n("object" == typeof this && this) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        function (r, t, e) {
          var n = e(5),
            o = e(7),
            a = e(9),
            c = e(10),
            i = e(11),
            u = e(17),
            f = e(37),
            s = e(40),
            p = Object.getOwnPropertyDescriptor;
          t.f = n
            ? p
            : function (r, t) {
                if (((r = i(r)), (t = u(t)), s))
                  try {
                    return p(r, t);
                  } catch (r) {}
                if (f(r, t)) return c(!o(a.f, r, t), r[t]);
              };
        },
        function (r, t, e) {
          (e = e(6)),
            (r.exports = !e(function () {
              return (
                7 !==
                Object.defineProperty({}, 1, {
                  get: function () {
                    return 7;
                  },
                })[1]
              );
            }));
        },
        function (r, t, e) {
          r.exports = function (r) {
            try {
              return !!r();
            } catch (r) {
              return !0;
            }
          };
        },
        function (r, t, e) {
          e = e(8);
          var n = Function.prototype.call;
          r.exports = e
            ? n.bind(n)
            : function () {
                return n.apply(n, arguments);
              };
        },
        function (r, t, e) {
          (e = e(6)),
            (r.exports = !e(function () {
              var r = function () {}.bind();
              return "function" != typeof r || r.hasOwnProperty("prototype");
            }));
        },
        function (r, t, e) {
          var n = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            a = o && !n.call({ 1: 2 }, 1);
          t.f = a
            ? function (r) {
                return !!(r = o(this, r)) && r.enumerable;
              }
            : n;
        },
        function (r, t, e) {
          r.exports = function (r, t) {
            return {
              enumerable: !(1 & r),
              configurable: !(2 & r),
              writable: !(4 & r),
              value: t,
            };
          };
        },
        function (r, t, e) {
          var n = e(12),
            o = e(15);
          r.exports = function (r) {
            return n(o(r));
          };
        },
        function (r, t, e) {
          var n = e(13),
            o = e(6),
            a = e(14),
            c = Object,
            i = n("".split);
          r.exports = o(function () {
            return !c("z").propertyIsEnumerable(0);
          })
            ? function (r) {
                return "String" === a(r) ? i(r, "") : c(r);
              }
            : c;
        },
        function (r, t, e) {
          var n = e(8),
            o = (e = Function.prototype).call;
          e = n && e.bind.bind(o, o);
          r.exports = n
            ? e
            : function (r) {
                return function () {
                  return o.apply(r, arguments);
                };
              };
        },
        function (r, t, e) {
          var n = (e = e(13))({}.toString),
            o = e("".slice);
          r.exports = function (r) {
            return o(n(r), 8, -1);
          };
        },
        function (r, t, e) {
          var n = e(16),
            o = TypeError;
          r.exports = function (r) {
            if (n(r)) throw new o("Can't call method on " + r);
            return r;
          };
        },
        function (t, e, n) {
          t.exports = function (t) {
            return null === t || t === r;
          };
        },
        function (r, t, e) {
          var n = e(18),
            o = e(21);
          r.exports = function (r) {
            return (r = n(r, "string")), o(r) ? r : r + "";
          };
        },
        function (t, e, n) {
          var o = n(7),
            a = n(19),
            c = n(21),
            i = n(28),
            u = n(31),
            f = ((n = n(32)), TypeError),
            s = n("toPrimitive");
          t.exports = function (t, e) {
            if (!a(t) || c(t)) return t;
            var n = i(t, s);
            if (n) {
              if (((n = o(n, t, (e = e === r ? "default" : e))), !a(n) || c(n)))
                return n;
              throw new f("Can't convert object to primitive value");
            }
            return u(t, (e = e === r ? "number" : e));
          };
        },
        function (r, t, e) {
          var n = e(20);
          r.exports = function (r) {
            return "object" == typeof r ? null !== r : n(r);
          };
        },
        function (t, e, n) {
          var o = "object" == typeof document && document.all;
          t.exports =
            void 0 === o && o !== r
              ? function (r) {
                  return "function" == typeof r || r === o;
                }
              : function (r) {
                  return "function" == typeof r;
                };
        },
        function (r, t, e) {
          var n = e(22),
            o = e(20),
            a = e(23),
            c = ((e = e(24)), Object);
          r.exports = e
            ? function (r) {
                return "symbol" == typeof r;
              }
            : function (r) {
                var t = n("Symbol");
                return o(t) && a(t.prototype, c(r));
              };
        },
        function (t, e, n) {
          var o = n(3),
            a = n(20);
          t.exports = function (t, e) {
            return arguments.length < 2
              ? ((n = o[t]), a(n) ? n : r)
              : o[t] && o[t][e];
            var n;
          };
        },
        function (r, t, e) {
          (e = e(13)), (r.exports = e({}.isPrototypeOf));
        },
        function (r, t, e) {
          (e = e(25)),
            (r.exports =
              e && !Symbol.sham && "symbol" == typeof Symbol.iterator);
        },
        function (r, t, e) {
          var n = e(26),
            o = e(6),
            a = e(3).String;
          r.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var r = Symbol("symbol detection");
              return (
                !a(r) ||
                !(Object(r) instanceof Symbol) ||
                (!Symbol.sham && n && n < 41)
              );
            });
        },
        function (r, t, e) {
          var n,
            o,
            a = e(3),
            c = e(27);
          (e = a.process), (a = a.Deno);
          !(o = (a = (a = (e && e.versions) || (a && a.version)) && a.v8)
            ? 0 < (n = a.split("."))[0] && n[0] < 4
              ? 1
              : +(n[0] + n[1])
            : o) &&
            c &&
            (!(n = c.match(/Edge\/(\d+)/)) || 74 <= n[1]) &&
            (n = c.match(/Chrome\/(\d+)/)) &&
            (o = +n[1]),
            (r.exports = o);
        },
        function (r, t, e) {
          r.exports =
            ("undefined" != typeof navigator && String(navigator.userAgent)) ||
            "";
        },
        function (t, e, n) {
          var o = n(29),
            a = n(16);
          t.exports = function (t, e) {
            return (e = t[e]), a(e) ? r : o(e);
          };
        },
        function (r, t, e) {
          var n = e(20),
            o = e(30),
            a = TypeError;
          r.exports = function (r) {
            if (n(r)) return r;
            throw new a(o(r) + " is not a function");
          };
        },
        function (r, t, e) {
          var n = String;
          r.exports = function (r) {
            try {
              return n(r);
            } catch (r) {
              return "Object";
            }
          };
        },
        function (r, t, e) {
          var n = e(7),
            o = e(20),
            a = e(19),
            c = TypeError;
          r.exports = function (r, t) {
            var e, i;
            if ("string" === t && o((e = r.toString)) && !a((i = n(e, r))))
              return i;
            if (o((e = r.valueOf)) && !a((i = n(e, r)))) return i;
            if ("string" !== t && o((e = r.toString)) && !a((i = n(e, r))))
              return i;
            throw new c("Can't convert object to primitive value");
          };
        },
        function (r, t, e) {
          var n = e(3),
            o = e(33),
            a = e(37),
            c = e(39),
            i = e(25),
            u = ((e = e(24)), n.Symbol),
            f = o("wks"),
            s = e ? u.for || u : (u && u.withoutSetter) || c;
          r.exports = function (r) {
            return (
              a(f, r) || (f[r] = i && a(u, r) ? u[r] : s("Symbol." + r)), f[r]
            );
          };
        },
        function (t, e, n) {
          var o = n(34),
            a = n(35);
          (t.exports = function (t, e) {
            return a[t] || (a[t] = e !== r ? e : {});
          })("versions", []).push({
            version: "3.35.1",
            mode: o ? "pure" : "global",
            copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        function (r, t, e) {
          r.exports = !1;
        },
        function (r, t, e) {
          var n = e(3),
            o = e(36);
          e = n[(e = "__core-js_shared__")] || o(e, {});
          r.exports = e;
        },
        function (r, t, e) {
          var n = e(3),
            o = Object.defineProperty;
          r.exports = function (r, t) {
            try {
              o(n, r, { value: t, configurable: !0, writable: !0 });
            } catch (e) {
              n[r] = t;
            }
            return t;
          };
        },
        function (r, t, e) {
          var n = e(13),
            o = e(38),
            a = n({}.hasOwnProperty);
          r.exports =
            Object.hasOwn ||
            function (r, t) {
              return a(o(r), t);
            };
        },
        function (r, t, e) {
          var n = e(15),
            o = Object;
          r.exports = function (r) {
            return o(n(r));
          };
        },
        function (t, e, n) {
          n = n(13);
          var o = 0,
            a = Math.random(),
            c = n((1).toString);
          t.exports = function (t) {
            return "Symbol(" + (t === r ? "" : t) + ")_" + c(++o + a, 36);
          };
        },
        function (r, t, e) {
          var n = e(5),
            o = e(6),
            a = e(41);
          r.exports =
            !n &&
            !o(function () {
              return (
                7 !==
                Object.defineProperty(a("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (r, t, e) {
          var n = e(3),
            o = ((e = e(19)), n.document),
            a = e(o) && e(o.createElement);
          r.exports = function (r) {
            return a ? o.createElement(r) : {};
          };
        },
        function (r, t, e) {
          var n = e(5),
            o = e(43),
            a = e(10);
          r.exports = n
            ? function (r, t, e) {
                return o.f(r, t, a(1, e));
              }
            : function (r, t, e) {
                return (r[t] = e), r;
              };
        },
        function (r, t, e) {
          var n = e(5),
            o = e(40),
            a = e(44),
            c = e(45),
            i = e(17),
            u = TypeError,
            f = Object.defineProperty,
            s = Object.getOwnPropertyDescriptor,
            p = "enumerable",
            l = "configurable",
            y = "writable";
          t.f = n
            ? a
              ? function (r, t, e) {
                  var n;
                  return (
                    c(r),
                    (t = i(t)),
                    c(e),
                    "function" == typeof r &&
                      "prototype" === t &&
                      "value" in e &&
                      y in e &&
                      !e[y] &&
                      (n = s(r, t)) &&
                      n[y] &&
                      ((r[t] = e.value),
                      (e = {
                        configurable: (l in e ? e : n)[l],
                        enumerable: (p in e ? e : n)[p],
                        writable: !1,
                      })),
                    f(r, t, e)
                  );
                }
              : f
            : function (r, t, e) {
                if ((c(r), (t = i(t)), c(e), o))
                  try {
                    return f(r, t, e);
                  } catch (r) {}
                if ("get" in e || "set" in e)
                  throw new u("Accessors not supported");
                return "value" in e && (r[t] = e.value), r;
              };
        },
        function (r, t, e) {
          var n = e(5);
          e = e(6);
          r.exports =
            n &&
            e(function () {
              return (
                42 !==
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        function (r, t, e) {
          var n = e(19),
            o = String,
            a = TypeError;
          r.exports = function (r) {
            if (n(r)) return r;
            throw new a(o(r) + " is not an object");
          };
        },
        function (t, e, n) {
          var o = n(20),
            a = n(43),
            c = n(47),
            i = n(36);
          t.exports = function (t, e, n, u) {
            var f = (u = u || {}).enumerable,
              s = u.name !== r ? u.name : e;
            if ((o(n) && c(n, s, u), u.global)) f ? (t[e] = n) : i(e, n);
            else {
              try {
                u.unsafe ? t[e] && (f = !0) : delete t[e];
              } catch (t) {}
              f
                ? (t[e] = n)
                : a.f(t, e, {
                    value: n,
                    enumerable: !1,
                    configurable: !u.nonConfigurable,
                    writable: !u.nonWritable,
                  });
            }
            return t;
          };
        },
        function (t, e, n) {
          var o = n(13),
            a = n(6),
            c = n(20),
            i = n(37),
            u = n(5),
            f = n(48).CONFIGURABLE,
            s = n(49),
            p = (n = n(50)).enforce,
            l = n.get,
            y = String,
            h = Object.defineProperty,
            v = o("".slice),
            g = o("".replace),
            d = o([].join),
            b =
              u &&
              !a(function () {
                return 8 !== h(function () {}, "length", { value: 8 }).length;
              }),
            m = String(String).split("String");
          t = t.exports = function (t, e, n) {
            "Symbol(" === v(y(e), 0, 7) &&
              (e = "[" + g(y(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
              n && n.getter && (e = "get " + e),
              n && n.setter && (e = "set " + e),
              (!i(t, "name") || (f && t.name !== e)) &&
                (u
                  ? h(t, "name", { value: e, configurable: !0 })
                  : (t.name = e)),
              b &&
                n &&
                i(n, "arity") &&
                t.length !== n.arity &&
                h(t, "length", { value: n.arity });
            try {
              n && i(n, "constructor") && n.constructor
                ? u && h(t, "prototype", { writable: !1 })
                : t.prototype && (t.prototype = r);
            } catch (t) {}
            return (
              (n = p(t)),
              i(n, "source") ||
                (n.source = d(m, "string" == typeof e ? e : "")),
              t
            );
          };
          Function.prototype.toString = t(function () {
            return (c(this) && l(this).source) || s(this);
          }, "toString");
        },
        function (r, t, e) {
          var n = e(5),
            o = e(37),
            a = Function.prototype,
            c = n && Object.getOwnPropertyDescriptor;
          (o = (e = o(a, "name")) && "something" === function () {}.name),
            (a = e && (!n || (n && c(a, "name").configurable)));
          r.exports = { EXISTS: e, PROPER: o, CONFIGURABLE: a };
        },
        function (r, t, e) {
          var n = e(13),
            o = e(20),
            a = ((e = e(35)), n(Function.toString));
          o(e.inspectSource) ||
            (e.inspectSource = function (r) {
              return a(r);
            }),
            (r.exports = e.inspectSource);
        },
        function (r, t, e) {
          var n,
            o,
            a,
            c,
            i = e(51),
            u = e(3),
            f = e(19),
            s = e(42),
            p = e(37),
            l = e(35),
            y = e(52),
            h = ((e = e(53)), "Object already initialized"),
            v = u.TypeError,
            g =
              ((u = u.WeakMap),
              i || l.state
                ? (((a = l.state || (l.state = new u())).get = a.get),
                  (a.has = a.has),
                  (a.set = a.set),
                  (n = function (r, t) {
                    if (a.has(r)) throw new v(h);
                    return (t.facade = r), a.set(r, t), t;
                  }),
                  (o = function (r) {
                    return a.get(r) || {};
                  }),
                  function (r) {
                    return a.has(r);
                  })
                : ((e[(c = y("state"))] = !0),
                  (n = function (r, t) {
                    if (p(r, c)) throw new v(h);
                    return (t.facade = r), s(r, c, t), t;
                  }),
                  (o = function (r) {
                    return p(r, c) ? r[c] : {};
                  }),
                  function (r) {
                    return p(r, c);
                  }));
          r.exports = {
            set: n,
            get: o,
            has: g,
            enforce: function (r) {
              return g(r) ? o(r) : n(r, {});
            },
            getterFor: function (r) {
              return function (t) {
                var e;
                if (!f(t) || (e = o(t)).type !== r)
                  throw new v("Incompatible receiver, " + r + " required");
                return e;
              };
            },
          };
        },
        function (r, t, e) {
          var n = e(3);
          (e = e(20)), (n = n.WeakMap);
          r.exports = e(n) && /native code/.test(String(n));
        },
        function (r, t, e) {
          var n = e(33),
            o = e(39),
            a = n("keys");
          r.exports = function (r) {
            return a[r] || (a[r] = o(r));
          };
        },
        function (r, t, e) {
          r.exports = {};
        },
        function (r, t, e) {
          var n = e(37),
            o = e(55),
            a = e(4),
            c = e(43);
          r.exports = function (r, t, e) {
            for (var i = o(t), u = c.f, f = a.f, s = 0; s < i.length; s++) {
              var p = i[s];
              n(r, p) || (e && n(e, p)) || u(r, p, f(t, p));
            }
          };
        },
        function (r, t, e) {
          var n = e(22),
            o = e(13),
            a = e(56),
            c = e(65),
            i = e(45),
            u = o([].concat);
          r.exports =
            n("Reflect", "ownKeys") ||
            function (r) {
              var t = a.f(i(r)),
                e = c.f;
              return e ? u(t, e(r)) : t;
            };
        },
        function (r, t, e) {
          var n = e(57),
            o = e(64).concat("length", "prototype");
          t.f =
            Object.getOwnPropertyNames ||
            function (r) {
              return n(r, o);
            };
        },
        function (r, t, e) {
          var n = e(13),
            o = e(37),
            a = e(11),
            c = e(58).indexOf,
            i = e(53),
            u = n([].push);
          r.exports = function (r, t) {
            var e,
              n = a(r),
              f = 0,
              s = [];
            for (e in n) !o(i, e) && o(n, e) && u(s, e);
            for (; t.length > f; ) o(n, (e = t[f++])) && (~c(s, e) || u(s, e));
            return s;
          };
        },
        function (r, t, e) {
          var n = e(11),
            o = e(59),
            a = e(62);
          e = function (r) {
            return function (t, e, c) {
              var i,
                u = n(t),
                f = a(u),
                s = o(c, f);
              if (r && e != e) {
                for (; s < f; ) if ((i = u[s++]) != i) return !0;
              } else
                for (; s < f; s++)
                  if ((r || s in u) && u[s] === e) return r || s || 0;
              return !r && -1;
            };
          };
          r.exports = { includes: e(!0), indexOf: e(!1) };
        },
        function (r, t, e) {
          var n = e(60),
            o = Math.max,
            a = Math.min;
          r.exports = function (r, t) {
            return (r = n(r)) < 0 ? o(r + t, 0) : a(r, t);
          };
        },
        function (r, t, e) {
          var n = e(61);
          r.exports = function (r) {
            return (r = +r) != r || 0 == r ? 0 : n(r);
          };
        },
        function (r, t, e) {
          var n = Math.ceil,
            o = Math.floor;
          r.exports =
            Math.trunc ||
            function (r) {
              return (0 < (r = +r) ? o : n)(r);
            };
        },
        function (r, t, e) {
          var n = e(63);
          r.exports = function (r) {
            return n(r.length);
          };
        },
        function (r, t, e) {
          var n = e(60),
            o = Math.min;
          r.exports = function (r) {
            return 0 < (r = n(r)) ? o(r, 9007199254740991) : 0;
          };
        },
        function (r, t, e) {
          r.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        function (r, t, e) {
          t.f = Object.getOwnPropertySymbols;
        },
        function (r, t, e) {
          var n = e(6),
            o = e(20),
            a = /#|\.prototype\./,
            c =
              ((e = function (r, t) {
                return (r = i[c(r)]) === f || (r !== u && (o(t) ? n(t) : !!t));
              }),
              (e.normalize = function (r) {
                return String(r).replace(a, ".").toLowerCase();
              })),
            i = (e.data = {}),
            u = (e.NATIVE = "N"),
            f = (e.POLYFILL = "P");
          r.exports = e;
        },
        function (t, e, n) {
          var o = n(5),
            a = n(68),
            c = TypeError,
            i = Object.getOwnPropertyDescriptor;
          o =
            o &&
            !(function () {
              if (this !== r) return 1;
              try {
                Object.defineProperty([], "length", { writable: !1 }).length =
                  1;
              } catch (r) {
                return r instanceof TypeError;
              }
            })();
          t.exports = o
            ? function (r, t) {
                if (a(r) && !i(r, "length").writable)
                  throw new c("Cannot set read only .length");
                return (r.length = t);
              }
            : function (r, t) {
                return (r.length = t);
              };
        },
        function (r, t, e) {
          var n = e(14);
          r.exports =
            Array.isArray ||
            function (r) {
              return "Array" === n(r);
            };
        },
        function (r, t, e) {
          var n = TypeError;
          r.exports = function (r) {
            if (9007199254740991 < r) throw n("Maximum allowed index exceeded");
            return r;
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(71),
            a = e(11),
            c = ((e = e(72)), Array);
          n(
            { target: "Array", proto: !0 },
            {
              toReversed: function () {
                return o(a(this), c);
              },
            },
          ),
            e("toReversed");
        },
        function (r, t, e) {
          var n = e(62);
          r.exports = function (r, t) {
            for (var e = n(r), o = new t(e), a = 0; a < e; a++)
              o[a] = r[e - a - 1];
            return o;
          };
        },
        function (t, e, n) {
          var o = n(32),
            a = n(73),
            c = ((n = n(43).f), o("unscopables")),
            i = Array.prototype;
          i[c] === r && n(i, c, { configurable: !0, value: a(null) }),
            (t.exports = function (r) {
              i[c][r] = !0;
            });
        },
        function (t, e, n) {
          function o() {}
          function a(r) {
            return "<script>" + r + "</" + h + ">";
          }
          var c,
            i = n(45),
            u = n(74),
            f = n(64),
            s = n(53),
            p = n(76),
            l = n(41),
            y = ((n = n(52)), "prototype"),
            h = "script",
            v = n("IE_PROTO"),
            g = function () {
              try {
                c = new ActiveXObject("htmlfile");
              } catch (r) {}
              var r;
              g =
                "undefined" == typeof document || (document.domain && c)
                  ? (function (r) {
                      r.write(a("")), r.close();
                      var t = r.parentWindow.Object;
                      return (r = null), t;
                    })(c)
                  : (((r = l("iframe")).style.display = "none"),
                    p.appendChild(r),
                    (r.src = String("javascript:")),
                    (r = r.contentWindow.document).open(),
                    r.write(a("document.F=Object")),
                    r.close(),
                    r.F);
              for (var t = f.length; t--; ) delete g[y][f[t]];
              return g();
            };
          (s[v] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var n;
                return (
                  null !== t
                    ? ((o[y] = i(t)), (n = new o()), (o[y] = null), (n[v] = t))
                    : (n = g()),
                  e === r ? n : u.f(n, e)
                );
              });
        },
        function (r, t, e) {
          var n = e(5),
            o = e(44),
            a = e(43),
            c = e(45),
            i = e(11),
            u = e(75);
          t.f =
            n && !o
              ? Object.defineProperties
              : function (r, t) {
                  c(r);
                  for (var e, n = i(t), o = u(t), f = o.length, s = 0; s < f; )
                    a.f(r, (e = o[s++]), n[e]);
                  return r;
                };
        },
        function (r, t, e) {
          var n = e(57),
            o = e(64);
          r.exports =
            Object.keys ||
            function (r) {
              return n(r, o);
            };
        },
        function (r, t, e) {
          (e = e(22)), (r.exports = e("document", "documentElement"));
        },
        function (t, e, n) {
          var o = n(2),
            a = n(13),
            c = n(29),
            i = n(11),
            u = n(78),
            f = n(79),
            s = ((n = n(72)), Array),
            p = a(f("Array", "sort"));
          o(
            { target: "Array", proto: !0 },
            {
              toSorted: function (t) {
                t !== r && c(t);
                var e = i(this);
                e = u(s, e);
                return p(e, t);
              },
            },
          ),
            n("toSorted");
        },
        function (r, t, e) {
          var n = e(62);
          r.exports = function (r, t, e) {
            for (
              var o = 0, a = 2 < arguments.length ? e : n(t), c = new r(a);
              o < a;

            )
              c[o] = t[o++];
            return c;
          };
        },
        function (r, t, e) {
          var n = e(3);
          r.exports = function (r, t) {
            return (r = (r = n[r]) && r.prototype) && r[t];
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(72),
            a = e(69),
            c = e(62),
            i = e(59),
            u = e(11),
            f = e(60),
            s = Array,
            p = Math.max,
            l = Math.min;
          n(
            { target: "Array", proto: !0 },
            {
              toSpliced: function (r, t) {
                var e,
                  n,
                  o,
                  y,
                  h = u(this),
                  v = c(h),
                  g = i(r, v),
                  d = 0;
                for (
                  0 === (r = arguments.length)
                    ? (e = n = 0)
                    : (n =
                        1 === r
                          ? ((e = 0), v - g)
                          : ((e = r - 2), l(p(f(t), 0), v - g))),
                    o = a(v + e - n),
                    y = s(o);
                  d < g;
                  d++
                )
                  y[d] = h[d];
                for (; d < g + e; d++) y[d] = arguments[d - g + 2];
                for (; d < o; d++) y[d] = h[d + n - e];
                return y;
              },
            },
          ),
            o("toSpliced");
        },
        function (r, t, e) {
          var n = e(2),
            o = e(82),
            a = e(11),
            c = Array;
          n(
            { target: "Array", proto: !0 },
            {
              with: function (r, t) {
                return o(a(this), c, r, t);
              },
            },
          );
        },
        function (r, t, e) {
          var n = e(62),
            o = e(60),
            a = RangeError;
          r.exports = function (r, t, e, c) {
            var i = n(r),
              u = (e = o(e)) < 0 ? i + e : e;
            if (i <= u || u < 0) throw new a("Incorrect index");
            for (var f = new t(i), s = 0; s < i; s++) f[s] = s === u ? c : r[s];
            return f;
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(13),
            a = e(29),
            c = e(15),
            i = e(84),
            u = e(94),
            f = ((e = e(34)), u.Map),
            s = u.has,
            p = u.get,
            l = u.set,
            y = o([].push);
          n(
            { target: "Map", stat: !0, forced: e },
            {
              groupBy: function (r, t) {
                c(r), a(t);
                var e = new f(),
                  n = 0;
                return (
                  i(r, function (r) {
                    var o = t(r, n++);
                    s(e, o) ? y(p(e, o), r) : l(e, o, [r]);
                  }),
                  e
                );
              },
            },
          );
        },
        function (r, t, e) {
          function n(r, t) {
            (this.stopped = r), (this.result = t);
          }
          var o = e(85),
            a = e(7),
            c = e(45),
            i = e(30),
            u = e(87),
            f = e(62),
            s = e(23),
            p = e(89),
            l = e(90),
            y = e(93),
            h = TypeError,
            v = n.prototype;
          r.exports = function (r, t, e) {
            function g(r) {
              return b && y(b, "normal", r), new n(!0, r);
            }
            function d(r) {
              return S
                ? (c(r), _ ? j(r[0], r[1], g) : j(r[0], r[1]))
                : _
                  ? j(r, g)
                  : j(r);
            }
            var b,
              m,
              w,
              E,
              x,
              A,
              O = e && e.that,
              S = !(!e || !e.AS_ENTRIES),
              R = !(!e || !e.IS_RECORD),
              T = !(!e || !e.IS_ITERATOR),
              _ = !(!e || !e.INTERRUPTED),
              j = o(t, O);
            if (R) b = r.iterator;
            else if (T) b = r;
            else {
              if (!(T = l(r))) throw new h(i(r) + " is not iterable");
              if (u(T)) {
                for (m = 0, w = f(r); m < w; m++)
                  if ((E = d(r[m])) && s(v, E)) return E;
                return new n(!1);
              }
              b = p(r, T);
            }
            for (x = (R ? r : b).next; !(A = a(x, b)).done; ) {
              try {
                E = d(A.value);
              } catch (r) {
                y(b, "throw", r);
              }
              if ("object" == typeof E && E && s(v, E)) return E;
            }
            return new n(!1);
          };
        },
        function (t, e, n) {
          var o = n(86),
            a = n(29),
            c = n(8),
            i = o(o.bind);
          t.exports = function (t, e) {
            return (
              a(t),
              e === r
                ? t
                : c
                  ? i(t, e)
                  : function () {
                      return t.apply(e, arguments);
                    }
            );
          };
        },
        function (r, t, e) {
          var n = e(14),
            o = e(13);
          r.exports = function (r) {
            if ("Function" === n(r)) return o(r);
          };
        },
        function (t, e, n) {
          var o = n(32),
            a = n(88),
            c = o("iterator"),
            i = Array.prototype;
          t.exports = function (t) {
            return t !== r && (a.Array === t || i[c] === t);
          };
        },
        function (r, t, e) {
          r.exports = {};
        },
        function (r, t, e) {
          var n = e(7),
            o = e(29),
            a = e(45),
            c = e(30),
            i = e(90),
            u = TypeError;
          r.exports = function (r, t) {
            if (((t = arguments.length < 2 ? i(r) : t), o(t)))
              return a(n(t, r));
            throw new u(c(r) + " is not iterable");
          };
        },
        function (r, t, e) {
          var n = e(91),
            o = e(28),
            a = e(16),
            c = e(88),
            i = e(32)("iterator");
          r.exports = function (r) {
            if (!a(r)) return o(r, i) || o(r, "@@iterator") || c[n(r)];
          };
        },
        function (t, e, n) {
          var o = n(92),
            a = n(20),
            c = n(14),
            i = n(32)("toStringTag"),
            u = Object,
            f =
              "Arguments" ===
              c(
                (function () {
                  return arguments;
                })(),
              );
          t.exports = o
            ? c
            : function (t) {
                var e;
                return t === r
                  ? "Undefined"
                  : null === t
                    ? "Null"
                    : "string" ==
                        typeof (t = (function (r, t) {
                          try {
                            return r[t];
                          } catch (r) {}
                        })((e = u(t)), i))
                      ? t
                      : f
                        ? c(e)
                        : "Object" === (t = c(e)) && a(e.callee)
                          ? "Arguments"
                          : t;
              };
        },
        function (r, t, e) {
          var n = {};
          (n[e(32)("toStringTag")] = "z"),
            (r.exports = "[object z]" === String(n));
        },
        function (r, t, e) {
          var n = e(7),
            o = e(45),
            a = e(28);
          r.exports = function (r, t, e) {
            var c, i;
            o(r);
            try {
              if (!(c = a(r, "return"))) {
                if ("throw" === t) throw e;
                return e;
              }
              c = n(c, r);
            } catch (r) {
              (i = !0), (c = r);
            }
            if ("throw" === t) throw e;
            if (i) throw c;
            return o(c), e;
          };
        },
        function (r, t, e) {
          var n = e(13);
          e = Map.prototype;
          r.exports = {
            Map,
            set: n(e.set),
            get: n(e.get),
            has: n(e.has),
            remove: n(e.delete),
            proto: e,
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(22),
            a = e(13),
            c = e(29),
            i = e(15),
            u = e(17),
            f = e(84),
            s = o("Object", "create"),
            p = a([].push);
          n(
            { target: "Object", stat: !0 },
            {
              groupBy: function (r, t) {
                i(r), c(t);
                var e = s(null),
                  n = 0;
                return (
                  f(r, function (r) {
                    var o = u(t(r, n++));
                    o in e ? p(e[o], r) : (e[o] = [r]);
                  }),
                  e
                );
              },
            },
          );
        },
        function (r, t, e) {
          var n = e(2),
            o = e(97);
          n(
            { target: "Promise", stat: !0 },
            {
              withResolvers: function () {
                var r = o.f(this);
                return {
                  promise: r.promise,
                  resolve: r.resolve,
                  reject: r.reject,
                };
              },
            },
          );
        },
        function (t, e, n) {
          function o(t) {
            var e, n;
            (this.promise = new t(function (t, o) {
              if (e !== r || n !== r) throw new c("Bad Promise constructor");
              (e = t), (n = o);
            })),
              (this.resolve = a(e)),
              (this.reject = a(n));
          }
          var a = n(29),
            c = TypeError;
          t.exports.f = function (r) {
            return new o(r);
          };
        },
        function (r, t, e) {
          var n = e(3),
            o = e(5),
            a = e(99),
            c = e(100),
            i = ((e = e(6)), n.RegExp),
            u = i.prototype;
          o &&
            e(function () {
              var r = !0;
              try {
                i(".", "d");
              } catch (t) {
                r = !1;
              }
              var t,
                e = {},
                n = "",
                o = r ? "dgimsy" : "gimsy",
                a = {
                  dotAll: "s",
                  global: "g",
                  ignoreCase: "i",
                  multiline: "m",
                  sticky: "y",
                };
              for (t in (r && (a.hasIndices = "d"), a))
                !(function (r, t) {
                  Object.defineProperty(e, r, {
                    get: function () {
                      return (n += t), !0;
                    },
                  });
                })(t, a[t]);
              return (
                Object.getOwnPropertyDescriptor(u, "flags").get.call(e) !== o ||
                n !== o
              );
            }) &&
            a(u, "flags", { configurable: !0, get: c });
        },
        function (r, t, e) {
          var n = e(47),
            o = e(43);
          r.exports = function (r, t, e) {
            return (
              e.get && n(e.get, t, { getter: !0 }),
              e.set && n(e.set, t, { setter: !0 }),
              o.f(r, t, e)
            );
          };
        },
        function (r, t, e) {
          var n = e(45);
          r.exports = function () {
            var r = n(this),
              t = "";
            return (
              r.hasIndices && (t += "d"),
              r.global && (t += "g"),
              r.ignoreCase && (t += "i"),
              r.multiline && (t += "m"),
              r.dotAll && (t += "s"),
              r.unicode && (t += "u"),
              r.unicodeSets && (t += "v"),
              r.sticky && (t += "y"),
              t
            );
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(13),
            a = e(15),
            c = e(102),
            i = o("".charCodeAt);
          n(
            { target: "String", proto: !0 },
            {
              isWellFormed: function () {
                for (var r = c(a(this)), t = r.length, e = 0; e < t; e++) {
                  var n = i(r, e);
                  if (
                    55296 == (63488 & n) &&
                    (56320 <= n || ++e >= t || 56320 != (64512 & i(r, e)))
                  )
                    return !1;
                }
                return !0;
              },
            },
          );
        },
        function (r, t, e) {
          var n = e(91),
            o = String;
          r.exports = function (r) {
            if ("Symbol" === n(r))
              throw new TypeError("Cannot convert a Symbol value to a string");
            return o(r);
          };
        },
        function (r, t, e) {
          var n = e(2),
            o = e(7),
            a = e(13),
            c = e(15),
            i = e(102),
            u = ((e = e(6)), Array),
            f = a("".charAt),
            s = a("".charCodeAt),
            p = a([].join),
            l = "".toWellFormed,
            y =
              l &&
              e(function () {
                return "1" !== o(l, 1);
              });
          n(
            { target: "String", proto: !0, forced: y },
            {
              toWellFormed: function () {
                var r = i(c(this));
                if (y) return o(l, r);
                for (var t = r.length, e = u(t), n = 0; n < t; n++) {
                  var a = s(r, n);
                  55296 != (63488 & a)
                    ? (e[n] = f(r, n))
                    : 56320 <= a || t <= n + 1 || 56320 != (64512 & s(r, n + 1))
                      ? (e[n] = "�")
                      : ((e[n] = f(r, n)), (e[++n] = f(r, n)));
                }
                return p(e, "");
              },
            },
          );
        },
        function (r, t, e) {
          var n = e(71),
            o = e(105),
            a = o.aTypedArray,
            c = ((e = o.exportTypedArrayMethod), o.getTypedArrayConstructor);
          e("toReversed", function () {
            return n(a(this), c(this));
          });
        },
        function (t, e, n) {
          function o(r) {
            return !!l(r) && ((r = h(r)), y(k, r) || y(C, r));
          }
          var a,
            c,
            i,
            u = n(106),
            f = n(5),
            s = n(3),
            p = n(20),
            l = n(19),
            y = n(37),
            h = n(91),
            v = n(30),
            g = n(42),
            d = n(46),
            b = n(99),
            m = n(23),
            w = n(107),
            E = n(109),
            x = n(32),
            A = n(39),
            O = (T = n(50)).enforce,
            S = T.get,
            R = (n = s.Int8Array) && n.prototype,
            T = (T = s.Uint8ClampedArray) && T.prototype,
            _ = n && w(n),
            j = R && w(R),
            I = ((n = Object.prototype), s.TypeError),
            P = ((x = x("toStringTag")), A("TYPED_ARRAY_TAG")),
            D = "TypedArrayConstructor",
            M = u && !!E && "Opera" !== h(s.opera),
            k =
              ((u = !1),
              {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8,
              }),
            C = { BigInt64Array: 8, BigUint64Array: 8 },
            U = function (r) {
              var t = w(r);
              if (l(t)) return (r = S(t)) && y(r, D) ? r[D] : U(t);
            };
          for (a in k)
            (i = (c = s[a]) && c.prototype) ? (O(i)[D] = c) : (M = !1);
          for (a in C) (i = (c = s[a]) && c.prototype) && (O(i)[D] = c);
          if (
            (!M || !p(_) || _ === Function.prototype) &&
            ((_ = function () {
              throw new I("Incorrect invocation");
            }),
            M)
          )
            for (a in k) s[a] && E(s[a], _);
          if ((!M || !j || j === n) && ((j = _.prototype), M))
            for (a in k) s[a] && E(s[a].prototype, j);
          if ((M && w(T) !== j && E(T, j), f && !y(j, x)))
            for (a in (b(j, x, {
              configurable: (u = !0),
              get: function () {
                return l(this) ? this[P] : r;
              },
            }),
            k))
              s[a] && g(s[a], P, a);
          t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: M,
            TYPED_ARRAY_TAG: u && P,
            aTypedArray: function (r) {
              if (o(r)) return r;
              throw new I("Target is not a typed array");
            },
            aTypedArrayConstructor: function (r) {
              if (p(r) && (!E || m(_, r))) return r;
              throw new I(v(r) + " is not a typed array constructor");
            },
            exportTypedArrayMethod: function (r, t, e, n) {
              if (f) {
                if (e)
                  for (var o in k)
                    if ((o = s[o]) && y(o.prototype, r))
                      try {
                        delete o.prototype[r];
                      } catch (e) {
                        try {
                          o.prototype[r] = t;
                        } catch (e) {}
                      }
                (j[r] && !e) || d(j, r, (!e && M && R[r]) || t, n);
              }
            },
            exportTypedArrayStaticMethod: function (r, t, e) {
              var n, o;
              if (f) {
                if (E) {
                  if (e)
                    for (n in k)
                      if ((o = s[n]) && y(o, r))
                        try {
                          delete o[r];
                        } catch (r) {}
                  if (_[r] && !e) return;
                  try {
                    return d(_, r, (!e && M && _[r]) || t);
                  } catch (r) {}
                }
                for (n in k) !(o = s[n]) || (o[r] && !e) || d(o, r, t);
              }
            },
            getTypedArrayConstructor: U,
            isView: function (r) {
              return (
                !!l(r) && ("DataView" === (r = h(r)) || y(k, r) || y(C, r))
              );
            },
            isTypedArray: o,
            TypedArray: _,
            TypedArrayPrototype: j,
          };
        },
        function (r, t, e) {
          r.exports =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        },
        function (r, t, e) {
          var n = e(37),
            o = e(20),
            a = e(38),
            c = e(52),
            i = ((e = e(108)), c("IE_PROTO")),
            u = Object,
            f = u.prototype;
          r.exports = e
            ? u.getPrototypeOf
            : function (r) {
                var t = a(r);
                return n(t, i)
                  ? t[i]
                  : ((r = t.constructor),
                    o(r) && t instanceof r
                      ? r.prototype
                      : t instanceof u
                        ? f
                        : null);
              };
        },
        function (r, t, e) {
          (e = e(6)),
            (r.exports = !e(function () {
              function r() {}
              return (
                (r.prototype.constructor = null),
                Object.getPrototypeOf(new r()) !== r.prototype
              );
            }));
        },
        function (t, e, n) {
          var o = n(110),
            a = n(45),
            c = n(111);
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var r,
                    t = !1,
                    e = {};
                  try {
                    (r = o(Object.prototype, "__proto__", "set"))(e, []),
                      (t = e instanceof Array);
                  } catch (e) {}
                  return function (e, n) {
                    return a(e), c(n), t ? r(e, n) : (e.__proto__ = n), e;
                  };
                })()
              : r);
        },
        function (r, t, e) {
          var n = e(13),
            o = e(29);
          r.exports = function (r, t, e) {
            try {
              return n(o(Object.getOwnPropertyDescriptor(r, t)[e]));
            } catch (r) {}
          };
        },
        function (r, t, e) {
          var n = e(112),
            o = String,
            a = TypeError;
          r.exports = function (r) {
            if (n(r)) return r;
            throw new a("Can't set " + o(r) + " as a prototype");
          };
        },
        function (r, t, e) {
          var n = e(19);
          r.exports = function (r) {
            return n(r) || null === r;
          };
        },
        function (t, e, n) {
          var o = n(105),
            a = n(13),
            c = n(29),
            i = n(78),
            u = o.aTypedArray,
            f = o.getTypedArrayConstructor,
            s = ((n = o.exportTypedArrayMethod), a(o.TypedArrayPrototype.sort));
          n("toSorted", function (t) {
            t !== r && c(t);
            var e = u(this);
            e = i(f(e), e);
            return s(e, t);
          });
        },
        function (r, t, e) {
          var n = e(82),
            o = e(105),
            a = e(115),
            c = e(60),
            i = e(116),
            u = o.aTypedArray,
            f = o.getTypedArrayConstructor;
          (0, o.exportTypedArrayMethod)(
            "with",
            function (r, t) {
              var e = u(this);
              (r = c(r)), (t = a(e) ? i(t) : +t);
              return n(e, f(e), r, t);
            },
            !(function () {
              try {
                new Int8Array(1).with(2, {
                  valueOf: function () {
                    throw 8;
                  },
                });
              } catch (r) {
                return 8 === r;
              }
            })(),
          );
        },
        function (r, t, e) {
          var n = e(91);
          r.exports = function (r) {
            return "BigInt64Array" === (r = n(r)) || "BigUint64Array" === r;
          };
        },
        function (r, t, e) {
          var n = e(18),
            o = TypeError;
          r.exports = function (r) {
            if ("number" == typeof (r = n(r, "number")))
              throw new o("Can't convert number to bigint");
            return BigInt(r);
          };
        },
        function (t, e, n) {
          var o = n(2),
            a = n(3),
            c = n(22),
            i = n(10),
            u = n(43).f,
            f = n(37),
            s = n(118),
            p = n(119),
            l = n(120),
            y = n(121),
            h = n(122),
            v = n(5),
            g = n(34),
            d = "DOMException",
            b = c("Error"),
            m = c(d),
            w = function () {
              s(this, E);
              var t = l((e = arguments.length) < 1 ? r : arguments[0]),
                e = l(e < 2 ? r : arguments[1], "Error");
              e = new m(t, e);
              return (
                ((t = new b(t)).name = d),
                u(e, "stack", i(1, h(t.stack, 1))),
                p(e, this, w),
                e
              );
            },
            E = (w.prototype = m.prototype),
            x = "stack" in new b(d);
          (n = "stack" in new m(1, 2)),
            (a = !(
              !(a = m && v && Object.getOwnPropertyDescriptor(a, d)) ||
              (a.writable && a.configurable)
            )),
            (n = x && !a && !n);
          o(
            { global: !0, constructor: !0, forced: g || n },
            { DOMException: n ? w : m },
          );
          var A,
            O = c(d);
          if ((c = O.prototype).constructor !== O)
            for (var S in (g || u(c, "constructor", i(1, O)), y))
              f(y, S) && (f(O, (S = (A = y[S]).s)) || u(O, S, i(6, A.c)));
        },
        function (r, t, e) {
          var n = e(23),
            o = TypeError;
          r.exports = function (r, t) {
            if (n(t, r)) return r;
            throw new o("Incorrect invocation");
          };
        },
        function (r, t, e) {
          var n = e(20),
            o = e(19),
            a = e(109);
          r.exports = function (r, t, e) {
            var c, i;
            return (
              a &&
                n((c = t.constructor)) &&
                c !== e &&
                o((i = c.prototype)) &&
                i !== e.prototype &&
                a(r, i),
              r
            );
          };
        },
        function (t, e, n) {
          var o = n(102);
          t.exports = function (t, e) {
            return t === r ? (arguments.length < 2 ? "" : e) : o(t);
          };
        },
        function (r, t, e) {
          r.exports = {
            IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
            DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
            HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
            WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
            InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
            NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
            NoModificationAllowedError: {
              s: "NO_MODIFICATION_ALLOWED_ERR",
              c: 7,
              m: 1,
            },
            NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
            NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
            InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
            InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
            SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
            InvalidModificationError: {
              s: "INVALID_MODIFICATION_ERR",
              c: 13,
              m: 1,
            },
            NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
            InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
            ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
            TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
            SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
            NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
            AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
            URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
            QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
            TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
            InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
            DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
          };
        },
        function (r, t, e) {
          e = e(13);
          var n = Error,
            o = e("".replace),
            a = ((e = String(new n("zxcasd").stack)), /\n\s*at [^:]*:[^\n]*/),
            c = a.test(e);
          r.exports = function (r, t) {
            if (c && "string" == typeof r && !n.prepareStackTrace)
              for (; t--; ) r = o(r, a, "");
            return r;
          };
        },
        function (t, e, n) {
          function o(r) {
            throw new z("Uncloneable type: " + r, nr);
          }
          function a(r, t) {
            throw new z(
              (t || "Cloning") +
                " of " +
                r +
                " cannot be properly polyfilled in this engine",
              nr,
            );
          }
          function c(r, t) {
            return cr || a(t), cr(r);
          }
          function i(t, e, n) {
            if (G(e, t)) return Y(e, t);
            var o, c, i, u, f, s;
            if ("SharedArrayBuffer" === (n || A(t))) o = cr ? cr(t) : t;
            else {
              (n = p.DataView) || g(t.slice) || a("ArrayBuffer");
              try {
                if (g(t.slice) && !t.resizable) o = t.slice(0);
                else {
                  (c = t.byteLength),
                    (i =
                      "maxByteLength" in t
                        ? { maxByteLength: t.maxByteLength }
                        : r),
                    (o = new ArrayBuffer(c, i)),
                    (u = new n(t)),
                    (f = new n(o));
                  for (s = 0; s < c; s++) f.setUint8(s, u.getUint8(s));
                }
              } catch (t) {
                throw new z("ArrayBuffer is detached", nr);
              }
            }
            return H(e, t, o), o;
          }
          var u,
            f = n(34),
            s = n(2),
            p = n(3),
            l = n(22),
            y = n(13),
            h = n(6),
            v = n(39),
            g = n(20),
            d = n(124),
            b = n(16),
            m = n(19),
            w = n(21),
            E = n(84),
            x = n(45),
            A = n(91),
            O = n(37),
            S = n(125),
            R = n(42),
            T = n(62),
            _ = n(126),
            j = n(127),
            I = n(94),
            P = n(128),
            D = n(129),
            M = n(131),
            k = n(137),
            C = n(134),
            U = p.Object,
            L = p.Array,
            N = p.Date,
            F = p.Error,
            B = p.TypeError,
            V = p.PerformanceMark,
            z = l("DOMException"),
            W = I.Map,
            G = I.has,
            Y = I.get,
            H = I.set,
            Q = P.Set,
            X = P.add,
            q = P.has,
            K = l("Object", "keys"),
            Z = y([].push),
            $ = y((!0).valueOf),
            J = y((1).valueOf),
            rr = y("".valueOf),
            tr = y(N.prototype.getTime),
            er = v("structuredClone"),
            nr = "DataCloneError",
            or = "Transferring",
            ar =
              ((y = function (r) {
                return (
                  !h(function () {
                    var t = new p.Set([7]),
                      e = r(t),
                      n = r(U(7));
                    return e === t || !e.has(7) || !m(n) || 7 != +n;
                  }) && r
                );
              }),
              (v = function (r, t) {
                return !h(function () {
                  var e = new t(),
                    n = r({ a: e, b: e });
                  return !(
                    n &&
                    n.a === n.b &&
                    n.a instanceof t &&
                    n.a.stack === e.stack
                  );
                });
              }),
              p.structuredClone),
            cr =
              ((f =
                f ||
                !v(ar, F) ||
                !v(ar, z) ||
                ((u = ar),
                !!h(function () {
                  var r = u(new p.AggregateError([1], er, { cause: 3 }));
                  return (
                    "AggregateError" !== r.name ||
                    1 !== r.errors[0] ||
                    r.message !== er ||
                    3 !== r.cause
                  );
                }))),
              (v =
                !ar &&
                y(function (r) {
                  return new V(er, { detail: r }).detail;
                })),
              y(ar) || v),
            ir = function (t, e) {
              if ((w(t) && o("Symbol"), !m(t))) return t;
              if (e) {
                if (G(e, t)) return Y(e, t);
              } else e = new W();
              var n,
                u,
                f,
                s,
                y,
                h,
                v,
                d,
                b,
                E,
                x,
                _,
                I,
                P,
                D = A(t);
              switch (D) {
                case "Array":
                  f = L(T(t));
                  break;
                case "Object":
                  f = {};
                  break;
                case "Map":
                  f = new W();
                  break;
                case "Set":
                  f = new Q();
                  break;
                case "RegExp":
                  f = new RegExp(t.source, j(t));
                  break;
                case "Error":
                  switch ((u = t.name)) {
                    case "AggregateError":
                      f = new (l(u))([]);
                      break;
                    case "EvalError":
                    case "RangeError":
                    case "ReferenceError":
                    case "SuppressedError":
                    case "SyntaxError":
                    case "TypeError":
                    case "URIError":
                      f = new (l(u))();
                      break;
                    case "CompileError":
                    case "LinkError":
                    case "RuntimeError":
                      f = new (l("WebAssembly", u))();
                      break;
                    default:
                      f = new F();
                  }
                  break;
                case "DOMException":
                  f = new z(t.message, t.name);
                  break;
                case "ArrayBuffer":
                case "SharedArrayBuffer":
                  f = i(t, e, D);
                  break;
                case "DataView":
                case "Int8Array":
                case "Uint8Array":
                case "Uint8ClampedArray":
                case "Int16Array":
                case "Uint16Array":
                case "Int32Array":
                case "Uint32Array":
                case "Float16Array":
                case "Float32Array":
                case "Float64Array":
                case "BigInt64Array":
                case "BigUint64Array":
                  (h = "DataView" === D ? t.byteLength : t.length),
                    (E = D),
                    (x = (b = t).byteOffset),
                    (_ = h),
                    (I = e),
                    (P = p[E]),
                    m(P) || a(E),
                    (f = new P(i(b.buffer, I), x, _));
                  break;
                case "DOMQuad":
                  try {
                    f = new DOMQuad(
                      ir(t.p1, e),
                      ir(t.p2, e),
                      ir(t.p3, e),
                      ir(t.p4, e),
                    );
                  } catch (n) {
                    f = c(t, D);
                  }
                  break;
                case "File":
                  if (cr)
                    try {
                      (f = cr(t)), A(f) !== D && (f = r);
                    } catch (n) {}
                  if (!f)
                    try {
                      f = new File([t], t.name, t);
                    } catch (n) {}
                  f || a(D);
                  break;
                case "FileList":
                  if (
                    (s = (function () {
                      var r;
                      try {
                        r = new p.DataTransfer();
                      } catch (t) {
                        try {
                          r = new p.ClipboardEvent("").clipboardData;
                        } catch (r) {}
                      }
                      return r && r.items && r.files ? r : null;
                    })())
                  ) {
                    for (y = 0, h = T(t); y < h; y++) s.items.add(ir(t[y], e));
                    f = s.files;
                  } else f = c(t, D);
                  break;
                case "ImageData":
                  try {
                    f = new ImageData(ir(t.data, e), t.width, t.height, {
                      colorSpace: t.colorSpace,
                    });
                  } catch (n) {
                    f = c(t, D);
                  }
                  break;
                default:
                  if (cr) f = cr(t);
                  else
                    switch (D) {
                      case "BigInt":
                        f = U(t.valueOf());
                        break;
                      case "Boolean":
                        f = U($(t));
                        break;
                      case "Number":
                        f = U(J(t));
                        break;
                      case "String":
                        f = U(rr(t));
                        break;
                      case "Date":
                        f = new N(tr(t));
                        break;
                      case "Blob":
                        try {
                          f = t.slice(0, t.size, t.type);
                        } catch (n) {
                          a(D);
                        }
                        break;
                      case "DOMPoint":
                      case "DOMPointReadOnly":
                        n = p[D];
                        try {
                          f = n.fromPoint
                            ? n.fromPoint(t)
                            : new n(t.x, t.y, t.z, t.w);
                        } catch (n) {
                          a(D);
                        }
                        break;
                      case "DOMRect":
                      case "DOMRectReadOnly":
                        n = p[D];
                        try {
                          f = n.fromRect
                            ? n.fromRect(t)
                            : new n(t.x, t.y, t.width, t.height);
                        } catch (n) {
                          a(D);
                        }
                        break;
                      case "DOMMatrix":
                      case "DOMMatrixReadOnly":
                        n = p[D];
                        try {
                          f = n.fromMatrix ? n.fromMatrix(t) : new n(t);
                        } catch (n) {
                          a(D);
                        }
                        break;
                      case "AudioData":
                      case "VideoFrame":
                        g(t.clone) || a(D);
                        try {
                          f = t.clone();
                        } catch (n) {
                          o(D);
                        }
                        break;
                      case "CropTarget":
                      case "CryptoKey":
                      case "FileSystemDirectoryHandle":
                      case "FileSystemFileHandle":
                      case "FileSystemHandle":
                      case "GPUCompilationInfo":
                      case "GPUCompilationMessage":
                      case "ImageBitmap":
                      case "RTCCertificate":
                      case "WebAssembly.Module":
                        a(D);
                      default:
                        o(D);
                    }
              }
              switch ((H(e, t, f), D)) {
                case "Array":
                case "Object":
                  for (v = K(t), y = 0, h = T(v); y < h; y++)
                    (d = v[y]), S(f, d, ir(t[d], e));
                  break;
                case "Map":
                  t.forEach(function (r, t) {
                    H(f, ir(t, e), ir(r, e));
                  });
                  break;
                case "Set":
                  t.forEach(function (r) {
                    X(f, ir(r, e));
                  });
                  break;
                case "Error":
                  R(f, "message", ir(t.message, e)),
                    O(t, "cause") && R(f, "cause", ir(t.cause, e)),
                    "AggregateError" === u
                      ? (f.errors = ir(t.errors, e))
                      : "SuppressedError" === u &&
                        ((f.error = ir(t.error, e)),
                        (f.suppressed = ir(t.suppressed, e)));
                case "DOMException":
                  k && R(f, "stack", ir(t.stack, e));
              }
              return f;
            };
          s(
            { global: !0, enumerable: !0, sham: !C, forced: f },
            {
              structuredClone: function (t) {
                var e, n;
                (n = (n =
                  1 < _(arguments.length, 1) && !b(arguments[1])
                    ? x(arguments[1])
                    : r)
                  ? n.transfer
                  : r) !== r &&
                  (e = (function (t, e) {
                    if (!m(t))
                      throw new B(
                        "Transfer option cannot be converted to a sequence",
                      );
                    var n = [];
                    E(t, function (r) {
                      Z(n, x(r));
                    });
                    for (
                      var o, c, i, u, f, s = 0, l = T(n), y = new Q();
                      s < l;

                    ) {
                      if (
                        ((o = n[s++]),
                        "ArrayBuffer" === (c = A(o)) ? q(y, o) : G(e, o))
                      )
                        throw new z("Duplicate transferable", nr);
                      if ("ArrayBuffer" !== c) {
                        if (C) u = ar(o, { transfer: [o] });
                        else
                          switch (c) {
                            case "ImageBitmap":
                              (i = p.OffscreenCanvas), d(i) || a(c, or);
                              try {
                                (f = new i(o.width, o.height))
                                  .getContext("bitmaprenderer")
                                  .transferFromImageBitmap(o),
                                  (u = f.transferToImageBitmap());
                              } catch (t) {}
                              break;
                            case "AudioData":
                            case "VideoFrame":
                              (g(o.clone) && g(o.close)) || a(c, or);
                              try {
                                (u = o.clone()), o.close();
                              } catch (t) {}
                              break;
                            case "MediaSourceHandle":
                            case "MessagePort":
                            case "OffscreenCanvas":
                            case "ReadableStream":
                            case "TransformStream":
                            case "WritableStream":
                              a(c, or);
                          }
                        if (u === r)
                          throw new z(
                            "This object cannot be transferred: " + c,
                            nr,
                          );
                        H(e, o, u);
                      } else X(y, o);
                    }
                    return y;
                  })(n, (o = new W())));
                var o = ir(t, o);
                return (
                  e &&
                    D(e, function (r) {
                      C
                        ? cr(r, { transfer: [r] })
                        : g(r.transfer)
                          ? r.transfer()
                          : M
                            ? M(r)
                            : a("ArrayBuffer", or);
                    }),
                  o
                );
              },
            },
          );
        },
        function (r, t, e) {
          function n() {}
          function o(r) {
            if (!i(r)) return !1;
            try {
              return p(n, [], r), !0;
            } catch (r) {
              return !1;
            }
          }
          var a = e(13),
            c = e(6),
            i = e(20),
            u = e(91),
            f = e(22),
            s = e(49),
            p = f("Reflect", "construct"),
            l = /^\s*(?:class|function)\b/,
            y = a(l.exec),
            h = !l.test(n);
          a = function (r) {
            if (!i(r)) return !1;
            switch (u(r)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!y(l, s(r));
            } catch (r) {
              return !0;
            }
          };
          (a.sham = !0),
            (r.exports =
              !p ||
              c(function () {
                var r;
                return (
                  o(o.call) ||
                  !o(Object) ||
                  !o(function () {
                    r = !0;
                  }) ||
                  r
                );
              })
                ? a
                : o);
        },
        function (r, t, e) {
          var n = e(17),
            o = e(43),
            a = e(10);
          r.exports = function (r, t, e) {
            (t = n(t)) in r ? o.f(r, t, a(0, e)) : (r[t] = e);
          };
        },
        function (r, t, e) {
          var n = TypeError;
          r.exports = function (r, t) {
            if (r < t) throw new n("Not enough arguments");
            return r;
          };
        },
        function (t, e, n) {
          var o = n(7),
            a = n(37),
            c = n(23),
            i = n(100),
            u = RegExp.prototype;
          t.exports = function (t) {
            var e = t.flags;
            return e !== r || "flags" in u || a(t, "flags") || !c(u, t)
              ? e
              : o(i, t);
          };
        },
        function (r, t, e) {
          var n = e(13);
          e = Set.prototype;
          r.exports = {
            Set,
            add: n(e.add),
            has: n(e.has),
            remove: n(e.delete),
            proto: e,
          };
        },
        function (r, t, e) {
          var n,
            o = e(13),
            a = e(130),
            c = ((e = (n = e(128)).Set), o((n = n.proto).forEach)),
            i = o(n.keys),
            u = i(new e()).next;
          r.exports = function (r, t, e) {
            return e ? a({ iterator: i(r), next: u }, t) : c(r, t);
          };
        },
        function (t, e, n) {
          var o = n(7);
          t.exports = function (t, e, n) {
            for (
              var a, c = n ? t : t.iterator, i = t.next;
              !(a = o(i, c)).done;

            )
              if ((a = e(a.value)) !== r) return a;
          };
        },
        function (r, t, e) {
          var n,
            o,
            a,
            c,
            i = e(3),
            u = e(132),
            f = e(134),
            s = i.structuredClone,
            p = i.ArrayBuffer;
          (e = i.MessageChannel), (i = !1);
          if (f)
            i = function (r) {
              s(r, { transfer: [r] });
            };
          else if (p)
            try {
              e || ((n = u("worker_threads")) && (e = n.MessageChannel)),
                e &&
                  ((o = new e()),
                  (a = new p(2)),
                  (c = function (r) {
                    o.port1.postMessage(null, [r]);
                  }),
                  2 === a.byteLength && (c(a), 0 === a.byteLength && (i = c)));
            } catch (r) {}
          r.exports = i;
        },
        function (r, t, e) {
          var n = e(133);
          r.exports = function (r) {
            try {
              if (n) return Function('return require("' + r + '")')();
            } catch (r) {}
          };
        },
        function (r, t, e) {
          var n = e(3);
          e = e(14);
          r.exports = "process" === e(n.process);
        },
        function (r, t, e) {
          var n = e(3),
            o = e(6),
            a = e(26),
            c = e(135),
            i = e(136),
            u = e(133),
            f = n.structuredClone;
          r.exports =
            !!f &&
            !o(function () {
              if ((i && 92 < a) || (u && 94 < a) || (c && 97 < a)) return !1;
              var r = new ArrayBuffer(8),
                t = f(r, { transfer: [r] });
              return 0 !== r.byteLength || 8 !== t.byteLength;
            });
        },
        function (r, t, e) {
          var n = e(136);
          e = e(133);
          r.exports =
            !n &&
            !e &&
            "object" == typeof window &&
            "object" == typeof document;
        },
        function (r, t, e) {
          r.exports =
            "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        },
        function (r, t, e) {
          var n = e(6),
            o = e(10);
          r.exports = !n(function () {
            var r = new Error("a");
            return (
              !("stack" in r) ||
              (Object.defineProperty(r, "stack", o(1, 7)), 7 !== r.stack)
            );
          });
        },
        function (t, e, n) {
          var o = n(2),
            a = n(22),
            c = n(6),
            i = n(126),
            u = n(102),
            f = ((n = n(139)), a("URL"));
          o(
            {
              target: "URL",
              stat: !0,
              forced: !(
                n &&
                c(function () {
                  f.canParse();
                })
              ),
            },
            {
              canParse: function (t) {
                var e = i(arguments.length, 1);
                (t = u(t)),
                  (e = e < 2 || arguments[1] === r ? r : u(arguments[1]));
                try {
                  return !!new f(t, e);
                } catch (t) {
                  return !1;
                }
              },
            },
          );
        },
        function (t, e, n) {
          var o = n(6),
            a = n(32),
            c = n(5),
            i = n(34),
            u = a("iterator");
          t.exports = !o(function () {
            var t = new URL("b?a=1&b=2&c=3", "http://a"),
              e = t.searchParams,
              n = new URLSearchParams("a=1&a=2&b=3"),
              o = "";
            return (
              (t.pathname = "c%20d"),
              e.forEach(function (r, t) {
                e.delete("b"), (o += t + r);
              }),
              n.delete("a", 2),
              n.delete("b", r),
              (i &&
                (!t.toJSON ||
                  !n.has("a", 1) ||
                  n.has("a", 2) ||
                  !n.has("a", r) ||
                  n.has("b"))) ||
                (!e.size && (i || !c)) ||
                !e.sort ||
                "http://a/c%20d?a=1&c=3" !== t.href ||
                "3" !== e.get("c") ||
                "a=1" !== String(new URLSearchParams("?a=1")) ||
                !e[u] ||
                "a" !== new URL("https://a@b").username ||
                "b" !==
                  new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
                "xn--e1aybc" !== new URL("http://тест").host ||
                "#%D0%B1" !== new URL("http://a#б").hash ||
                "a1c3" !== o ||
                "x" !== new URL("http://x", r).host
            );
          });
        },
        function (t, e, n) {
          var o,
            a = n(46),
            c = n(13),
            i = n(102),
            u = n(126),
            f = c((n = (o = URLSearchParams).prototype).append),
            s = c(n.delete),
            p = c(n.forEach),
            l = c([].push);
          (o = new o("a=1&a=2&b=3")).delete("a", 1),
            o.delete("b", r),
            o + "" != "a=2" &&
              a(
                n,
                "delete",
                function (t) {
                  var e = arguments.length,
                    n = e < 2 ? r : arguments[1];
                  if (e && n === r) return s(this, t);
                  var o = [];
                  p(this, function (r, t) {
                    l(o, { key: t, value: r });
                  }),
                    u(e, 1);
                  for (
                    var a,
                      c = i(t),
                      y = i(n),
                      h = 0,
                      v = 0,
                      g = !1,
                      d = o.length;
                    h < d;

                  )
                    (a = o[h++]),
                      g || a.key === c ? ((g = !0), s(this, a.key)) : v++;
                  for (; v < d; )
                    ((a = o[v++]).key === c && a.value === y) ||
                      f(this, a.key, a.value);
                },
                { enumerable: !0, unsafe: !0 },
              );
        },
        function (t, e, n) {
          var o,
            a = n(46),
            c = n(13),
            i = n(102),
            u = n(126),
            f = c((n = (o = URLSearchParams).prototype).getAll),
            s = c(n.has);
          (!(o = new o("a=1")).has("a", 2) && o.has("a", r)) ||
            a(
              n,
              "has",
              function (t) {
                var e = arguments.length,
                  n = e < 2 ? r : arguments[1];
                if (e && n === r) return s(this, t);
                var o = f(this, t);
                u(e, 1);
                for (var a = i(n), c = 0; c < o.length; )
                  if (o[c++] === a) return !0;
                return !1;
              },
              { enumerable: !0, unsafe: !0 },
            );
        },
        function (r, t, e) {
          var n = e(5),
            o = e(13),
            a = e(99),
            c = o((e = URLSearchParams.prototype).forEach);
          !n ||
            "size" in e ||
            a(e, "size", {
              get: function () {
                var r = 0;
                return (
                  c(this, function () {
                    r++;
                  }),
                  r
                );
              },
              configurable: !0,
              enumerable: !0,
            });
        },
      ]),
    (n.c = e),
    (n.d = function (r, t, e) {
      n.o(r, t) || Object.defineProperty(r, t, { enumerable: !0, get: e });
    }),
    (n.r = function (r) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (n.t = function (r, t) {
      if ((1 & t && (r = n(r)), 8 & t)) return r;
      if (4 & t && "object" == typeof r && r && r.__esModule) return r;
      var e = Object.create(null);
      if (
        (n.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: r }),
        2 & t && "string" != typeof r)
      )
        for (var o in r)
          n.d(
            e,
            o,
            function (t) {
              return r[t];
            }.bind(null, o),
          );
      return e;
    }),
    (n.n = function (r) {
      var t =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (r, t) {
      return Object.prototype.hasOwnProperty.call(r, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})();
/*!/wp-content/plugins/contact-form-7/modules/recaptcha/index.js*/
/* [inline: cdata] */ var wpcf7_recaptcha = {
  sitekey: "6LdTuoQpAAAAADSCO8ScBA9pd2B7u7Z9guG8xosD",
  actions: { homepage: "homepage", contactform: "contactform" },
}; /* [/inline: cdata] */
document.addEventListener("DOMContentLoaded", (e) => {
  var t;
  wpcf7_recaptcha = {
    ...(null !== (t = wpcf7_recaptcha) && void 0 !== t ? t : {}),
  };
  const c = wpcf7_recaptcha.sitekey,
    { homepage: n, contactform: a } = wpcf7_recaptcha.actions,
    o = (e) => {
      const { action: t, func: n, params: a } = e;
      grecaptcha
        .execute(c, { action: t })
        .then((e) => {
          const c = new CustomEvent("wpcf7grecaptchaexecuted", {
            detail: { action: t, token: e },
          });
          document.dispatchEvent(c);
        })
        .then(() => {
          "function" == typeof n && n(...a);
        })
        .catch((e) => console.error(e));
    };
  if (
    (grecaptcha.ready(() => {
      o({ action: n });
    }),
    document.addEventListener("change", (e) => {
      o({ action: a });
    }),
    "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit)
  ) {
    const e = wpcf7.submit;
    wpcf7.submit = (t, c = {}) => {
      o({ action: a, func: e, params: [t, c] });
    };
  }
  document.addEventListener("wpcf7grecaptchaexecuted", (e) => {
    const t = document.querySelectorAll(
      'form.wpcf7-form input[name="_wpcf7_recaptcha_response"]',
    );
    for (let c = 0; c < t.length; c++)
      t[c].setAttribute("value", e.detail.token);
  });
});
/*!/wp-content/plugins/bb-plugin/js/jquery.magnificpopup.min.js*/
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
      ? e(require("jquery"))
      : e(window.jQuery || window.Zepto);
})(function (c) {
  function e() {}
  function d(e, t) {
    f.ev.on(I + e + x, t);
  }
  function u(e, t, n, o) {
    var i = document.createElement("div");
    return (
      (i.className = "mfp-" + e),
      n && (i.innerHTML = n),
      o ? t && t.appendChild(i) : ((i = c(i)), t && i.appendTo(t)),
      i
    );
  }
  function p(e, t) {
    f.ev.triggerHandler(I + e, t),
      f.st.callbacks &&
        ((e = e.charAt(0).toLowerCase() + e.slice(1)), f.st.callbacks[e]) &&
        f.st.callbacks[e].apply(f, Array.isArray(t) ? t : [t]);
  }
  function m(e) {
    return (
      (e === H && f.currTemplate.closeBtn) ||
        ((f.currTemplate.closeBtn = c(
          f.st.closeMarkup.replace("%title%", f.st.tClose),
        )),
        (H = e)),
      f.currTemplate.closeBtn
    );
  }
  function a() {
    c.magnificPopup.instance ||
      ((f = new e()).init(), (c.magnificPopup.instance = f));
  }
  function r() {
    y && (v.after(y.addClass(l)).detach(), (y = null));
  }
  function i() {
    n && c(document.body).removeClass(n);
  }
  function t() {
    i(), f.req && f.req.abort();
  }
  var f,
    o,
    g,
    s,
    h,
    H,
    l,
    v,
    y,
    n,
    C = "Close",
    F = "BeforeClose",
    w = "MarkupParse",
    b = "Open",
    j = "Change",
    I = "mfp",
    x = "." + I,
    k = "mfp-ready",
    N = "mfp-removing",
    T = "mfp-prevent-close",
    _ = !!window.jQuery,
    P = c(window),
    S =
      ((c.magnificPopup = {
        instance: null,
        proto: (e.prototype = {
          constructor: e,
          init: function () {
            var e = navigator.appVersion;
            (f.isLowIE = f.isIE8 = document.all && !document.addEventListener),
              (f.isAndroid = /android/gi.test(e)),
              (f.isIOS = /iphone|ipad|ipod/gi.test(e)),
              (f.supportsTransition = (function () {
                var e = document.createElement("p").style,
                  t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
                return !1;
              })()),
              (f.probablyMobile =
                f.isAndroid ||
                f.isIOS ||
                /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                  navigator.userAgent,
                )),
              (g = c(document)),
              (f.popupsCache = {});
          },
          open: function (e) {
            if (!1 === e.isObj) {
              (f.items = e.items.toArray()), (f.index = 0);
              for (var t, n = e.items, o = 0; o < n.length; o++)
                if ((t = (t = n[o]).parsed ? t.el[0] : t) === e.el[0]) {
                  f.index = o;
                  break;
                }
            } else
              (f.items = Array.isArray(e.items) ? e.items : [e.items]),
                (f.index = e.index || 0);
            if (!f.isOpen) {
              (f.types = []),
                (h = ""),
                e.mainEl && e.mainEl.length
                  ? (f.ev = e.mainEl.eq(0))
                  : (f.ev = g),
                e.key
                  ? (f.popupsCache[e.key] || (f.popupsCache[e.key] = {}),
                    (f.currTemplate = f.popupsCache[e.key]))
                  : (f.currTemplate = {}),
                (f.st = c.extend(!0, {}, c.magnificPopup.defaults, e)),
                (f.fixedContentPos =
                  "auto" === f.st.fixedContentPos
                    ? !f.probablyMobile
                    : f.st.fixedContentPos),
                f.st.modal &&
                  ((f.st.closeOnContentClick = !1),
                  (f.st.closeOnBgClick = !1),
                  (f.st.showCloseBtn = !1),
                  (f.st.enableEscapeKey = !1)),
                f.bgOverlay ||
                  ((f.bgOverlay = u("bg").on("click" + x, function () {
                    f.close();
                  })),
                  (f.wrap = u("wrap")
                    .attr("tabindex", -1)
                    .on("click" + x, function (e) {
                      f._checkIfClose(e.target) && f.close();
                    })),
                  (f.container = u("container", f.wrap))),
                (f.contentContainer = u("content")),
                f.st.preloader &&
                  (f.preloader = u("preloader", f.container, f.st.tLoading));
              var i = c.magnificPopup.modules;
              for (o = 0; o < i.length; o++) {
                var a = (a = i[o]).charAt(0).toUpperCase() + a.slice(1);
                f["init" + a].call(f);
              }
              p("BeforeOpen"),
                f.st.showCloseBtn &&
                  (f.st.closeBtnInside
                    ? (d(w, function (e, t, n, o) {
                        n.close_replaceWith = m(o.type);
                      }),
                      (h += " mfp-close-btn-in"))
                    : f.wrap.append(m())),
                f.st.alignTop && (h += " mfp-align-top"),
                f.fixedContentPos
                  ? f.wrap.css({
                      overflow: f.st.overflowY,
                      overflowX: "hidden",
                      overflowY: f.st.overflowY,
                    })
                  : f.wrap.css({ top: P.scrollTop(), position: "absolute" }),
                (!1 !== f.st.fixedBgPos &&
                  ("auto" !== f.st.fixedBgPos || f.fixedContentPos)) ||
                  f.bgOverlay.css({ height: g.height(), position: "absolute" }),
                f.st.enableEscapeKey &&
                  g.on("keyup" + x, function (e) {
                    27 === e.keyCode && f.close();
                  }),
                P.on("resize" + x, function () {
                  f.updateSize();
                }),
                f.st.closeOnContentClick || (h += " mfp-auto-cursor"),
                h && f.wrap.addClass(h);
              var r = (f.wH = P.height()),
                s = {},
                l =
                  (f.fixedContentPos &&
                    f._hasScrollBar(r) &&
                    (l = f._getScrollbarSize()) &&
                    (s.marginRight = l),
                  f.fixedContentPos &&
                    (f.isIE7
                      ? c("body, html").css("overflow", "hidden")
                      : (s.overflow = "hidden")),
                  f.st.mainClass);
              return (
                f.isIE7 && (l += " mfp-ie7"),
                l && f._addClassToMFP(l),
                f.updateItemHTML(),
                p("BuildControls"),
                c("html").css(s),
                f.bgOverlay
                  .add(f.wrap)
                  .prependTo(f.st.prependTo || c(document.body)),
                (f._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                  f.content
                    ? (f._addClassToMFP(k), f._setFocus())
                    : f.bgOverlay.addClass(k),
                    g.on("focusin" + x, f._onFocusIn);
                }, 16),
                (f.isOpen = !0),
                f.updateSize(r),
                p(b),
                e
              );
            }
            f.updateItemHTML();
          },
          close: function () {
            f.isOpen &&
              (p(F),
              (f.isOpen = !1),
              f.st.removalDelay && !f.isLowIE && f.supportsTransition
                ? (f._addClassToMFP(N),
                  setTimeout(function () {
                    f._close();
                  }, f.st.removalDelay))
                : f._close());
          },
          _close: function () {
            p(C);
            var e = N + " " + k + " ";
            f.bgOverlay.detach(),
              f.wrap.detach(),
              f.container.empty(),
              f.st.mainClass && (e += f.st.mainClass + " "),
              f._removeClassFromMFP(e),
              f.fixedContentPos &&
                ((e = { marginRight: "" }),
                f.isIE7
                  ? c("body, html").css("overflow", "")
                  : (e.overflow = ""),
                c("html").css(e)),
              g.off("keyup.mfp focusin" + x),
              f.ev.off(x),
              f.wrap.attr("class", "mfp-wrap").removeAttr("style"),
              f.bgOverlay.attr("class", "mfp-bg"),
              f.container.attr("class", "mfp-container"),
              !f.st.showCloseBtn ||
                (f.st.closeBtnInside &&
                  !0 !== f.currTemplate[f.currItem.type]) ||
                (f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach()),
              f.st.autoFocusLast &&
                f._lastFocusedEl &&
                c(f._lastFocusedEl).focus(),
              (f.currItem = null),
              (f.content = null),
              (f.currTemplate = null),
              (f.prevHeight = 0),
              p("AfterClose");
          },
          updateSize: function (e) {
            var t;
            f.isIOS
              ? ((t = document.documentElement.clientWidth / window.innerWidth),
                (t = window.innerHeight * t),
                f.wrap.css("height", t),
                (f.wH = t))
              : (f.wH = e || P.height()),
              f.fixedContentPos || f.wrap.css("height", f.wH),
              p("Resize");
          },
          updateItemHTML: function () {
            var e = f.items[f.index],
              t =
                (f.contentContainer.detach(),
                f.content && f.content.detach(),
                (e = e.parsed ? e : f.parseEl(f.index)).type),
              n =
                (p("BeforeChange", [f.currItem ? f.currItem.type : "", t]),
                (f.currItem = e),
                f.currTemplate[t] ||
                  ((n = !!f.st[t] && f.st[t].markup),
                  p("FirstMarkupParse", n),
                  (f.currTemplate[t] = !n || c(n))),
                s &&
                  s !== e.type &&
                  f.container.removeClass("mfp-" + s + "-holder"),
                f["get" + t.charAt(0).toUpperCase() + t.slice(1)](
                  e,
                  f.currTemplate[t],
                ));
            f.appendContent(n, t),
              (e.preloaded = !0),
              p(j, e),
              (s = e.type),
              f.container.prepend(f.contentContainer),
              p("AfterChange");
          },
          appendContent: function (e, t) {
            (f.content = e)
              ? f.st.showCloseBtn &&
                f.st.closeBtnInside &&
                !0 === f.currTemplate[t]
                ? f.content.find(".mfp-close").length || f.content.append(m())
                : (f.content = e)
              : (f.content = ""),
              p("BeforeAppend"),
              f.container.addClass("mfp-" + t + "-holder"),
              f.contentContainer.append(f.content);
          },
          parseEl: function (e) {
            var t,
              n = f.items[e];
            if (
              (n = n.tagName
                ? { el: c(n) }
                : ((t = n.type), { data: n, src: n.src })).el
            ) {
              for (var o = f.types, i = 0; i < o.length; i++)
                if (n.el.hasClass("mfp-" + o[i])) {
                  t = o[i];
                  break;
                }
              (n.src = n.el.attr("data-mfp-src")),
                n.src || (n.src = n.el.attr("href"));
            }
            return (
              (n.type = t || f.st.type || "inline"),
              (n.index = e),
              (n.parsed = !0),
              (f.items[e] = n),
              p("ElementParse", n),
              f.items[e]
            );
          },
          addGroup: function (t, n) {
            function e(e) {
              (e.mfpEl = this), f._openClick(e, t, n);
            }
            var o = "click.magnificPopup";
            ((n = n || {}).mainEl = t),
              n.items
                ? ((n.isObj = !0), t.off(o).on(o, e))
                : ((n.isObj = !1),
                  n.delegate
                    ? t.off(o).on(o, n.delegate, e)
                    : (n.items = t).off(o).on(o, e));
          },
          _openClick: function (e, t, n) {
            var o = (void 0 !== n.midClick ? n : c.magnificPopup.defaults)
              .midClick;
            if (
              o ||
              !(
                2 === e.which ||
                e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                e.shiftKey
              )
            ) {
              o = (void 0 !== n.disableOn ? n : c.magnificPopup.defaults)
                .disableOn;
              if (o)
                if ("function" == typeof o) {
                  if (!o.call(f)) return !0;
                } else if (P.width() < o) return !0;
              e.type && (e.preventDefault(), f.isOpen) && e.stopPropagation(),
                (n.el = c(e.mfpEl)),
                n.delegate && (n.items = t.find(n.delegate)),
                f.open(n);
            }
          },
          updateStatus: function (e, t) {
            var n;
            f.preloader &&
              (o !== e && f.container.removeClass("mfp-s-" + o),
              (n = {
                status: e,
                text: (t = t || "loading" !== e ? t : f.st.tLoading),
              }),
              p("UpdateStatus", n),
              (e = n.status),
              f.preloader.html((t = n.text)),
              f.preloader.find("a").on("click", function (e) {
                e.stopImmediatePropagation();
              }),
              f.container.addClass("mfp-s-" + e),
              (o = e));
          },
          _checkIfClose: function (e) {
            if (!c(e).closest("." + T).length) {
              var t = f.st.closeOnContentClick,
                n = f.st.closeOnBgClick;
              if (t && n) return !0;
              if (
                !f.content ||
                c(e).closest(".mfp-close").length ||
                (f.preloader && e === f.preloader[0])
              )
                return !0;
              if (e === f.content[0] || c.contains(f.content[0], e)) {
                if (t) return !0;
              } else if (n && c.contains(document, e)) return !0;
              return !1;
            }
          },
          _addClassToMFP: function (e) {
            f.bgOverlay.addClass(e), f.wrap.addClass(e);
          },
          _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), f.wrap.removeClass(e);
          },
          _hasScrollBar: function (e) {
            return (
              (f.isIE7 ? g.height() : document.body.scrollHeight) >
              (e || P.height())
            );
          },
          _setFocus: function () {
            (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus();
          },
          _onFocusIn: function (e) {
            if (e.target !== f.wrap[0] && !c.contains(f.wrap[0], e.target))
              return f._setFocus(), !1;
          },
          _parseMarkup: function (i, e, t) {
            var a;
            t.data && (e = c.extend(t.data, e)),
              p(w, [i, e, t]),
              c.each(e, function (e, t) {
                if (void 0 === t || !1 === t) return !0;
                var n, o;
                1 < (a = e.split("_")).length
                  ? 0 < (n = i.find(x + "-" + a[0])).length &&
                    ("replaceWith" === (o = a[1])
                      ? n[0] !== t[0] && n.replaceWith(t)
                      : "img" === o
                        ? n.is("img")
                          ? n.attr("src", t)
                          : n.replaceWith(
                              c("<img>")
                                .attr("src", t)
                                .attr("class", n.attr("class")),
                            )
                        : n.attr(a[1], t))
                  : i.find(x + "-" + e).html(t);
              });
          },
          _getScrollbarSize: function () {
            var e;
            return (
              void 0 === f.scrollbarSize &&
                (((e = document.createElement("div")).style.cssText =
                  "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                document.body.appendChild(e),
                (f.scrollbarSize = e.offsetWidth - e.clientWidth),
                document.body.removeChild(e)),
              f.scrollbarSize
            );
          },
        }),
        modules: [],
        open: function (e, t) {
          return (
            a(),
            ((e = e ? c.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = t || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return c.magnificPopup.instance && c.magnificPopup.instance.close();
        },
        registerModule: function (e, t) {
          t.options && (c.magnificPopup.defaults[e] = t.options),
            c.extend(this.proto, t.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (c.fn.magnificPopup = function (e) {
        a();
        var t,
          n,
          o,
          i = c(this);
        return (
          "string" == typeof e
            ? "open" === e
              ? ((t = _ ? i.data("magnificPopup") : i[0].magnificPopup),
                (n = parseInt(arguments[1], 10) || 0),
                (o = t.items
                  ? t.items[n]
                  : ((o = i), (o = t.delegate ? o.find(t.delegate) : o).eq(n))),
                f._openClick({ mfpEl: o }, i, t))
              : f.isOpen &&
                f[e].apply(f, Array.prototype.slice.call(arguments, 1))
            : ((e = c.extend(!0, {}, e)),
              _ ? i.data("magnificPopup", e) : (i[0].magnificPopup = e),
              f.addGroup(i, e)),
          i
        );
      }),
      "inline"),
    E =
      (c.magnificPopup.registerModule(S, {
        options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found",
        },
        proto: {
          initInline: function () {
            f.types.push(S),
              d(C + "." + S, function () {
                r();
              });
          },
          getInline: function (e, t) {
            var n, o, i;
            return (
              r(),
              e.src
                ? ((n = f.st.inline),
                  (o = c(e.src)).length
                    ? ((i = o[0].parentNode) &&
                        i.tagName &&
                        (v ||
                          ((l = n.hiddenClass), (v = u(l)), (l = "mfp-" + l)),
                        (y = o.after(v).detach().removeClass(l))),
                      f.updateStatus("ready"))
                    : (f.updateStatus("error", n.tNotFound), (o = c("<div>"))),
                  (e.inlineElement = o))
                : (f.updateStatus("ready"), f._parseMarkup(t, {}, e), t)
            );
          },
        },
      }),
      "ajax");
  c.magnificPopup.registerModule(E, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        f.types.push(E),
          (n = f.st.ajax.cursor),
          d(C + "." + E, t),
          d("BeforeChange." + E, t);
      },
      getAjax: function (o) {
        n && c(document.body).addClass(n), f.updateStatus("loading");
        var e = c.extend(
          {
            url: o.src,
            success: function (e, t, n) {
              e = { data: e, xhr: n };
              p("ParseAjax", e),
                f.appendContent(c(e.data), E),
                (o.finished = !0),
                i(),
                f._setFocus(),
                setTimeout(function () {
                  f.wrap.addClass(k);
                }, 16),
                f.updateStatus("ready"),
                p("AjaxContentAdded");
            },
            error: function () {
              i(),
                (o.finished = o.loadError = !0),
                f.updateStatus(
                  "error",
                  f.st.ajax.tError.replace("%url%", o.src),
                );
            },
          },
          f.st.ajax.settings,
        );
        return (f.req = c.ajax(e)), "";
      },
    },
  });
  var z;
  c.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var e = f.st.image,
          t = ".image";
        f.types.push("image"),
          d(b + t, function () {
            "image" === f.currItem.type &&
              e.cursor &&
              c(document.body).addClass(e.cursor);
          }),
          d(C + t, function () {
            e.cursor && c(document.body).removeClass(e.cursor),
              P.off("resize" + x);
          }),
          d("Resize" + t, f.resizeImage),
          f.isLowIE && d("AfterChange", f.resizeImage);
      },
      resizeImage: function () {
        var e,
          t = f.currItem;
        t &&
          t.img &&
          f.st.image.verticalFit &&
          ((e = 0),
          f.isLowIE &&
            (e =
              parseInt(t.img.css("padding-top"), 10) +
              parseInt(t.img.css("padding-bottom"), 10)),
          t.img.css("max-height", f.wH - e));
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          z && clearInterval(z),
          (e.isCheckingImgSize = !1),
          p("ImageHasSize", e),
          e.imgHidden) &&
          (f.content && f.content.removeClass("mfp-loading"),
          (e.imgHidden = !1));
      },
      findImageSize: function (t) {
        function n(e) {
          z && clearInterval(z),
            (z = setInterval(function () {
              0 < i.naturalWidth
                ? f._onImageHasSize(t)
                : (200 < o && clearInterval(z),
                  3 === ++o ? n(10) : 40 === o ? n(50) : 100 === o && n(500));
            }, e));
        }
        var o = 0,
          i = t.img[0];
        n(1);
      },
      getImage: function (e, t) {
        function n() {
          e &&
            (e.img[0].complete
              ? (e.img.off(".mfploader"),
                e === f.currItem &&
                  (f._onImageHasSize(e), f.updateStatus("ready")),
                (e.hasSize = !0),
                (e.loaded = !0),
                p("ImageLoadComplete"))
              : ++a < 200
                ? setTimeout(n, 100)
                : o());
        }
        function o() {
          e &&
            (e.img.off(".mfploader"),
            e === f.currItem &&
              (f._onImageHasSize(e),
              f.updateStatus("error", r.tError.replace("%url%", e.src))),
            (e.hasSize = !0),
            (e.loaded = !0),
            (e.loadError = !0));
        }
        var i,
          a = 0,
          r = f.st.image,
          s = t.find(".mfp-img");
        return (
          s.length &&
            (((i = document.createElement("img")).className = "mfp-img"),
            e.el &&
              e.el.find("img").length &&
              (i.alt = e.el.find("img").attr("alt")),
            (e.img = c(i).on("load.mfploader", n).on("error.mfploader", o)),
            (i.src = e.src),
            s.is("img") && (e.img = e.img.clone()),
            0 < (i = e.img[0]).naturalWidth
              ? (e.hasSize = !0)
              : i.width || (e.hasSize = !1)),
          f._parseMarkup(
            t,
            {
              title: (function (e) {
                if (e.data && void 0 !== e.data.title) return e.data.title;
                var t = f.st.image.titleSrc;
                if (t) {
                  if ("function" == typeof t) return t.call(f, e);
                  if (e.el) return e.el.attr(t) || "";
                }
                return "";
              })(e),
              img_replaceWith: e.img,
            },
            e,
          ),
          f.resizeImage(),
          e.hasSize
            ? (z && clearInterval(z),
              e.loadError
                ? (t.addClass("mfp-loading"),
                  f.updateStatus("error", r.tError.replace("%url%", e.src)))
                : (t.removeClass("mfp-loading"), f.updateStatus("ready")))
            : (f.updateStatus("loading"),
              (e.loading = !0),
              e.hasSize ||
                ((e.imgHidden = !0),
                t.addClass("mfp-loading"),
                f.findImageSize(e))),
          t
        );
      },
    },
  });
  function O(e) {
    var t;
    f.currTemplate[A] &&
      (t = f.currTemplate[A].find("iframe")).length &&
      (e || (t[0].src = "//about:blank"), f.isIE8) &&
      t.css("display", e ? "block" : "none");
  }
  function M(e) {
    var t = f.items.length;
    return t - 1 < e ? e - t : e < 0 ? t + e : e;
  }
  function W(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  }
  c.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var e,
          t,
          n,
          o,
          i,
          a,
          r = f.st.zoom,
          s = ".zoom";
        r.enabled &&
          f.supportsTransition &&
          ((t = r.duration),
          (n = function (e) {
            var e = e
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              t = "all " + r.duration / 1e3 + "s " + r.easing,
              n = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              o = "transition";
            return (
              (n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = t),
              e.css(n),
              e
            );
          }),
          (o = function () {
            f.content.css("visibility", "visible");
          }),
          d("BuildControls" + s, function () {
            f._allowZoom() &&
              (clearTimeout(i),
              f.content.css("visibility", "hidden"),
              (e = f._getItemToZoom())
                ? ((a = n(e)).css(f._getOffset()),
                  f.wrap.append(a),
                  (i = setTimeout(function () {
                    a.css(f._getOffset(!0)),
                      (i = setTimeout(function () {
                        o(),
                          setTimeout(function () {
                            a.remove(), (e = a = null), p("ZoomAnimationEnded");
                          }, 16);
                      }, t));
                  }, 16)))
                : o());
          }),
          d(F + s, function () {
            if (f._allowZoom()) {
              if ((clearTimeout(i), (f.st.removalDelay = t), !e)) {
                if (!(e = f._getItemToZoom())) return;
                a = n(e);
              }
              a.css(f._getOffset(!0)),
                f.wrap.append(a),
                f.content.css("visibility", "hidden"),
                setTimeout(function () {
                  a.css(f._getOffset());
                }, 16);
            }
          }),
          d(C + s, function () {
            f._allowZoom() && (o(), a && a.remove(), (e = null));
          }));
      },
      _allowZoom: function () {
        return "image" === f.currItem.type;
      },
      _getItemToZoom: function () {
        return !!f.currItem.hasSize && f.currItem.img;
      },
      _getOffset: function (e) {
        var e = e
            ? f.currItem.img
            : f.st.zoom.opener(f.currItem.el || f.currItem),
          t = e.offset(),
          n = parseInt(e.css("padding-top"), 10),
          o = parseInt(e.css("padding-bottom"), 10),
          e =
            ((t.top -= c(window).scrollTop() - n),
            {
              width: e.width(),
              height: (_ ? e.innerHeight() : e[0].offsetHeight) - o - n,
            });
        return (
          (B =
            void 0 === B
              ? void 0 !== document.createElement("p").style.MozTransform
              : B)
            ? (e["-moz-transform"] = e.transform =
                "translate(" + t.left + "px," + t.top + "px)")
            : ((e.left = t.left), (e.top = t.top)),
          e
        );
      },
    },
  });
  var B,
    A = "iframe",
    L =
      (c.magnificPopup.registerModule(A, {
        options: {
          markup:
            '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            youtu_be: {
              index: "youtu.be",
              id: "/",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            youtube_nocookie: {
              index: "youtube-nocookie.com",
              id: "/",
              src: "//www.youtube-nocookie.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
          },
        },
        proto: {
          initIframe: function () {
            f.types.push(A),
              d("BeforeChange", function (e, t, n) {
                t !== n && (t === A ? O() : n === A && O(!0));
              }),
              d(C + "." + A, function () {
                O();
              });
          },
          getIframe: function (e, t) {
            var n = e.src,
              o = f.st.iframe,
              i =
                (c.each(o.patterns, function () {
                  if (-1 < n.indexOf(this.index))
                    return (
                      this.id &&
                        (n =
                          "string" == typeof this.id
                            ? n.substr(
                                n.lastIndexOf(this.id) + this.id.length,
                                n.length,
                              )
                            : this.id.call(this, n)),
                      (n = this.src.replace("%id%", n)),
                      !1
                    );
                }),
                {});
            return (
              o.srcAction && (i[o.srcAction] = n),
              f._parseMarkup(t, i, e),
              f.updateStatus("ready"),
              t
            );
          },
        },
      }),
      c.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%",
        },
        proto: {
          initGallery: function () {
            var a = f.st.gallery,
              e = ".mfp-gallery";
            if (((f.direction = !0), !a || !a.enabled)) return !1;
            (h += " mfp-gallery"),
              d(b + e, function () {
                a.navigateByImgClick &&
                  f.wrap.on("click" + e, ".mfp-img", function () {
                    if (1 < f.items.length) return f.next(), !1;
                  }),
                  g.on("keydown" + e, function (e) {
                    37 === e.keyCode ? f.prev() : 39 === e.keyCode && f.next();
                  });
              }),
              d("UpdateStatus" + e, function (e, t) {
                t.text &&
                  (t.text = W(t.text, f.currItem.index, f.items.length));
              }),
              d(w + e, function (e, t, n, o) {
                var i = f.items.length;
                n.counter = 1 < i ? W(a.tCounter, o.index, i) : "";
              }),
              d("BuildControls" + e, function () {
                var e, t;
                1 < f.items.length &&
                  a.arrows &&
                  !f.arrowLeft &&
                  ((t = a.arrowMarkup),
                  (e = f.arrowLeft =
                    c(
                      t
                        .replace(/%title%/gi, a.tPrev)
                        .replace(/%dir%/gi, "left"),
                    ).addClass(T)),
                  (t = f.arrowRight =
                    c(
                      t
                        .replace(/%title%/gi, a.tNext)
                        .replace(/%dir%/gi, "right"),
                    ).addClass(T)),
                  e.click(function () {
                    f.prev();
                  }),
                  t.click(function () {
                    f.next();
                  }),
                  f.container.append(e.add(t)));
              }),
              d(j + e, function () {
                f._preloadTimeout && clearTimeout(f._preloadTimeout),
                  (f._preloadTimeout = setTimeout(function () {
                    f.preloadNearbyImages(), (f._preloadTimeout = null);
                  }, 16));
              }),
              d(C + e, function () {
                g.off(e),
                  f.wrap.off("click" + e),
                  (f.arrowRight = f.arrowLeft = null);
              });
          },
          next: function () {
            (f.direction = !0), (f.index = M(f.index + 1)), f.updateItemHTML();
          },
          prev: function () {
            (f.direction = !1), (f.index = M(f.index - 1)), f.updateItemHTML();
          },
          goTo: function (e) {
            (f.direction = e >= f.index), (f.index = e), f.updateItemHTML();
          },
          preloadNearbyImages: function () {
            for (
              var e = f.st.gallery.preload,
                t = Math.min(e[0], f.items.length),
                n = Math.min(e[1], f.items.length),
                o = 1;
              o <= (f.direction ? n : t);
              o++
            )
              f._preloadItem(f.index + o);
            for (o = 1; o <= (f.direction ? t : n); o++)
              f._preloadItem(f.index - o);
          },
          _preloadItem: function (e) {
            var t;
            (e = M(e)),
              f.items[e].preloaded ||
                ((t = f.items[e]).parsed || (t = f.parseEl(e)),
                p("LazyLoad", t),
                "image" === t.type &&
                  (t.img = c('<img class="mfp-img" />')
                    .on("load.mfploader", function () {
                      t.hasSize = !0;
                    })
                    .on("error.mfploader", function () {
                      (t.hasSize = !0),
                        (t.loadError = !0),
                        p("LazyLoadError", t);
                    })
                    .attr("src", t.src)),
                (t.preloaded = !0));
          },
        },
      }),
      "retina");
  c.magnificPopup.registerModule(L, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        var n, o;
        1 < window.devicePixelRatio &&
          ((n = f.st.retina), (o = n.ratio), 1 < (o = isNaN(o) ? o() : o)) &&
          (d("ImageHasSize." + L, function (e, t) {
            t.img.css({
              "max-width": t.img[0].naturalWidth / o,
              width: "100%",
            });
          }),
          d("ElementParse." + L, function (e, t) {
            t.src = n.replaceSrc(t, o);
          }));
      },
    },
  }),
    a();
});
/*!/wp-content/themes/bb-theme/js/theme.min.js*/
/* [inline: cdata] */ var themeopts = {
  medium_breakpoint: "992",
  mobile_breakpoint: "768",
  scrollTopPosition: "800",
}; /* [/inline: cdata] */
!(function (e) {
  (FLTheme = {
    init: function () {
      this._bind();
    },
    _bind: function () {
      var a = this;
      e(".navbar-toggle").on("click", this.navbarToggleClick),
        0 != e(".fl-page-bar-nav ul.sub-menu").length &&
          (this._setupDropDowns(), this._enableTopNavDropDowns()),
        0 != e(".fl-page-nav ul.sub-menu").length &&
          (e(window).on(
            "resize.fl-page-nav-sub-menu",
            e.throttle(500, this._enablePageNavDropDowns),
          ),
          this._setupDropDowns(),
          this._enablePageNavDropDowns()),
        0 != e(".fl-page-nav ul.menu").length &&
          (e(".fl-page-nav ul.menu")
            .find(".menu-item")
            .on(
              "click",
              '> a[href*="#"]:not([href="#"])',
              this._setupCurrentNavItem,
            ),
          this._setupCurrentNavItem()),
        0 != e(".fl-page-nav-search").length &&
          e(".fl-page-nav-search a.fa-search").on(
            "click",
            this._toggleNavSearch,
          ),
        0 != e(".fl-nav-vertical").length &&
          (e(window).on("resize", e.throttle(500, this._navVertical)),
          this._navVertical()),
        0 != e(".fl-fixed-width.fl-nav-vertical-right").length &&
          (e(window).on(
            "resize",
            e.throttle(500, this._updateVerticalRightPos),
          ),
          this._updateVerticalRightPos()),
        0 != e(".fl-page-nav-centered-inline-logo").length &&
          (e(window).on("resize", e.throttle(500, this._centeredInlineLogo)),
          this._centeredInlineLogo()),
        0 != e("body.fl-nav-left").length &&
          (e(window).on("resize", e.throttle(500, this._navLeft)),
          this._navLeft()),
        0 != e("body.fl-shrink").length &&
          0 == e("html.fl-builder-edit").length &&
          (e(window).on("resize", e.throttle(500, this._shrinkHeaderEnable)),
          this._shrinkHeaderInit(),
          this._shrinkHeaderEnable()),
        0 != e(".fl-page-header-fixed").length &&
          (e(window).on(
            "resize.fl-page-header-fixed",
            e.throttle(500, this._enableFixedHeader),
          ),
          this._enableFixedHeader()),
        0 != e("body.fl-fixed-header").length &&
          0 == e("html.fl-builder-edit").length &&
          (e(window).on("resize", e.throttle(500, this._fixedHeader)),
          this._fixedHeader()),
        0 != e("body.fl-scroll-header").length &&
          0 == e("html.fl-builder-edit").length &&
          (e(window).on("resize", e.throttle(500, this._scrollHeader)),
          this._scrollHeader()),
        0 != e(".fl-page-header-primary").find("li.mega-menu").length &&
          (e(window).on("resize", e.throttle(500, this._megaMenu)),
          this._megaMenu()),
        0 != e(".fl-page-header-fixed").length &&
          (e(window).on(
            "scroll.fl-mega-menu-on-scroll",
            e.throttle(500, this._megaMenuOnScroll),
          ),
          e(window).on(
            "resize.fl-mega-menu-on-scroll",
            e.throttle(500, this._megaMenuOnScroll),
          )),
        0 != e("html.fl-builder-edit").length &&
          this._fixedHeadersWhenBuilderActive(),
        0 != e("body.fl-nav-mobile-offcanvas").length &&
          0 != !e("html.fl-builder-edit").length &&
          (e(window).on("resize", e.throttle(500, this._setupMobileNavLayout)),
          this._setupMobileNavLayout(),
          this._toggleMobileNavLayout()),
        e("body").on("click", this.closeMenu),
        e(".fl-theme-menu > li:last-child").on("focusout", function (l) {
          (void 0 !== e(l.relatedTarget)[0] &&
            "nav-link" === e(l.relatedTarget)[0].className) ||
            a.closeMenu(l);
        }),
        0 != e(".fl-full-width.fl-footer-effect").length &&
          (e(window).on("resize", e.throttle(500, this._footerEffect)),
          this._footerEffect()),
        0 != e("body.fl-scroll-to-top").length && this._toTop(),
        "undefined" != typeof e("body").magnificPopup && this._enableLightbox(),
        "undefined" == typeof e.fn.fitVids ||
          e("body").hasClass("fl-builder") ||
          this._enableFitVids(),
        FLTheme._navBackiosFix(),
        this._initSmoothScroll();
    },
    _isMobile: function () {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        /Mobile|Android|Silk\/|Kindle|BlackBerry|Opera Mini|Opera Mobi|webOS/i.test(
          navigator.userAgent,
        )
      );
    },
    _initRetinaImages: function () {
      var a = window.devicePixelRatio ? window.devicePixelRatio : 1;
      a > 1 && e("img[data-retina]").each(FLTheme._convertImageToRetina);
    },
    _convertImageToRetina: function () {
      var a = e(this),
        l = new Image(),
        n = a.attr("src"),
        t = a.data("retina");
      if (
        ("undefined" == typeof n && (n = a.data("cfsrc")),
        "undefined" == typeof n)
      )
        return !1;
      var i = n.split(".").pop();
      "" != t &&
        ((l.onload = function () {
          var e = l.width,
            n = l.height;
          "svg" == i && ((e = a.width()), (n = a.height())),
            a.width(e),
            a.attr("src", t);
        }),
        (l.src = n));
    },
    _initMobileHeaderLogo: function () {
      this._enableMobileLogo(),
        e(window).on("resize", e.proxy(this._enableMobileLogo, this));
    },
    _enableMobileLogo: function () {
      var a = e(window),
        l = e(".fl-page-header-logo"),
        n = l.find("img[data-mobile]"),
        t = null,
        i = null,
        o = null;
      0 !== n.length &&
        e(n).each(function () {
          (o = new Image()),
            (t = e(this)),
            (src = t.attr("src")),
            (width = t.data("width")),
            (height = t.data("height")),
            (i = t.data("mobile")),
            (mobileWidth = t.data("mobile-width")),
            (mobileHeight = t.data("mobile-height")),
            t.attr("src", ""),
            t.attr("data-src", src),
            a.width() < window.themeopts.mobile_breakpoint
              ? "" != i &&
                ((o.onload = function () {
                  t.attr("src", i),
                    t.attr("width", mobileWidth),
                    t.attr("height", mobileHeight),
                    t.css("width", "");
                }),
                (o.src = src),
                t.show())
              : "undefined" != typeof t.data("src") &&
                (t.attr("src", t.data("src")),
                t.attr("width", width),
                t.attr("height", height),
                t.css("width", width));
        });
    },
    navbarToggleClick: function (a) {
      var l = e("body").hasClass("fl-nav-mobile-offcanvas")
        ? "flyout"
        : "dropdown";
      if ("dropdown" === l) {
        var n = e(a.target).closest(".fl-page-nav"),
          t = n.find(".fl-page-nav-collapse");
        t.toggleClass("collapse"), t.toggleClass("in");
      } else
        "flyout" === l && e(".fl-page").toggleClass("fl-nav-offcanvas-active");
      a.stopPropagation();
    },
    closeMenu: function (a) {
      var l,
        n = e("body").hasClass("fl-nav-mobile-offcanvas")
          ? "flyout"
          : "dropdown",
        t = e(".fl-page-nav-collapse").hasClass("in"),
        i = e(".fl-page").hasClass("fl-nav-offcanvas-active");
      void 0 !== a &&
        void 0 !== a.target &&
        ("dropdown" === n && t
          ? ((l = e(".navbar-collapse.in").closest(".fl-page-nav")),
            l.find(".navbar-toggle").trigger("click"))
          : "flyout" === n && i && e(".fl-offcanvas-close").trigger("click"));
    },
    _setupDropDowns: function () {
      e("ul.sub-menu").each(function () {
        e(this).closest("li").attr("aria-haspopup", "true");
      });
    },
    _enableTopNavDropDowns: function () {
      var a = e(".fl-page-bar-nav"),
        l = a.find(" > li"),
        n = a.find("> li").has("> ul.sub-menu").find(".fl-submenu-toggle-icon");
      FLTheme._isMobile()
        ? !1 !== /iPhone|iPad/i.test(navigator.userAgent)
          ? l.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout)
          : (l.hover(function () {}, FLTheme._navItemMouseout),
            n.on("click", FLTheme._navSubMenuToggleClick))
        : l.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout);
    },
    _navBackiosFix: function () {
      (ipad =
        null !== navigator.userAgent.match("iPhone|iPad") &&
        e(".menu-item-has-children").length > 0),
        !1 !== ipad &&
          (window.onpageshow = function (e) {
            e.persisted && window.location.reload();
          });
    },
    _initSmoothScroll: function () {
      if (
        "undefined" != typeof FLBuilderLayout &&
        ("undefined" == typeof window.themeopts.smooth ||
          "disabled" !== window.themeopts.smooth)
      ) {
        var a = location.hash;
        (a = a.replace(/(:|\!|\.|\[|\]|,|=|@|\/)/g, "\\$1")),
          a &&
            e(a).length &&
            setTimeout(function () {
              window.scrollTo(0, 0), FLBuilderLayout._scrollToElement(e(a));
            }, 1);
      }
    },
    _enablePageNavDropDowns: function () {
      var a = e(".fl-page-header");
      a.each(FLTheme._enablePageNavDropDown);
    },
    _enablePageNavDropDown: function () {
      var a = e(this),
        l = a.find(".fl-page-nav .fl-page-nav-collapse"),
        n = l.find("ul li"),
        t = l.find("li").has("> ul.sub-menu").find("> a"),
        i =
          (l.find("li").has("> ul.sub-menu").find(".fl-submenu-toggle-icon"),
          l.find("> ul > li").has("ul.sub-menu"));
      e(".fl-page-nav .navbar-toggle").is(":visible")
        ? (n.off("mouseenter mouseleave"),
          e("body").hasClass("fl-submenu-toggle") &&
            (i = l.find("> ul li").has("ul.sub-menu")),
          i.find("> a").off().on("click", FLTheme._navItemClickMobile),
          i
            .find(".fl-submenu-toggle-icon")
            .off()
            .on("click", FLTheme._navItemClickMobile),
          l
            .find(".menu")
            .on("click", '.menu-item > a[href*="#"]', FLTheme._toggleForMobile),
          t.off("click", FLTheme._navSubMenuToggleClick))
        : (l.find("a").off("click", FLTheme._navItemClickMobile),
          l.find("a").off("click", FLTheme._toggleForMobile),
          l
            .find(".fl-submenu-toggle-icon")
            .off("click", FLTheme._navItemClickMobile),
          l.removeClass("in").addClass("collapse"),
          n.removeClass("fl-mobile-sub-menu-open"),
          n.find("a").width(0).width("auto"),
          FLTheme._isMobile()
            ? (n.hover(function () {}, FLTheme._navItemMouseout),
              t.on("click", FLTheme._navSubMenuToggleClick))
            : (n.keydown(function (a) {
                9 === a.keyCode &&
                  ((el = e(this)),
                  (focused = el.find(":focus")),
                  focused.parent().is(":last-child") &&
                    ((sub = focused.parent().find("ul.sub-menu").first()),
                    (mega = focused
                      .parent()
                      .parent()
                      .parent()
                      .parent()
                      .parent()
                      .hasClass("mega-menu")),
                    (mega_last = focused
                      .parent()
                      .parent()
                      .parent()
                      .is(":last-child")),
                    sub.length > 0
                      ? sub.trigger("mouseenter")
                      : (mega && !mega_last) || el.trigger("mouseleave")),
                  (parent = focused.closest("ul.sub-menu").parent()),
                  parent.hasClass("fl-sub-menu-open") ||
                    focused.trigger("mouseenter"));
              }),
              n.hover(FLTheme._navItemMouseover, FLTheme._navItemMouseout)));
    },
    _navItemClickMobile: function (a) {
      var l = e(this).closest(".fl-page-nav-collapse"),
        n = e(this).closest("li"),
        t = e(this).attr("href"),
        i = n.find("ul.sub-menu"),
        o = e(a.target).hasClass("fl-submenu-toggle-icon"),
        s = null;
      if (t && "#" !== t) {
        var r = t.split("#")[1];
        e("body").find("#" + r).length > 0 &&
          n.hasClass("fl-mobile-sub-menu-open") &&
          ((el = e(this).parent().closest("nav").find(".navbar-toggle")),
          el.trigger("click"),
          "undefined" != typeof FLBuilderLayout &&
            "undefined" == typeof window.themeopts.smooth &&
            "disabled" !== window.themeopts.smooth &&
            setTimeout(function () {
              window.scrollTo(0, 0),
                FLBuilderLayout._scrollToElement(e("#" + r));
            }, 1));
      }
      ("#" == t || o) && n.hasClass("fl-mobile-sub-menu-open")
        ? (a.preventDefault(),
          n.removeClass("fl-mobile-sub-menu-open"),
          i.hide())
        : n.hasClass("fl-mobile-sub-menu-open") ||
          (a.preventDefault(),
          n.addClass("fl-mobile-sub-menu-open"),
          o &&
            0 === e(".fl-submenu-toggle").length &&
            ((s = i.find("li.menu-item-has-children")),
            s.addClass("fl-mobile-sub-menu-open")),
          i.fadeIn(200)),
        0 != e(".fl-nav-collapse-menu").length &&
          l
            .find("li.fl-mobile-sub-menu-open")
            .not(e(this).parents(".fl-mobile-sub-menu-open"))
            .not(s)
            .removeClass("fl-mobile-sub-menu-open")
            .find("ul.sub-menu")
            .hide(),
        a.stopPropagation();
    },
    _setupCurrentNavItem: function (a) {
      var l = e(".fl-page-nav .navbar-nav"),
        n =
          "undefined" != typeof a
            ? e(a.target).prop("hash")
            : window.location.hash,
        n = n.replace(/(:|\!|\.|\[|\]|,|=|@|\/)/g, "\\$1"),
        t = n.length ? l.find("a[href*=\\" + n + "]:not([href=\\#])") : null,
        i = l.closest(".fl-page-nav").find(".fl-offcanvas-close");
      null != t &&
        e("body").find(n).length > 0 &&
        (e(".current-menu-item").removeClass("current-menu-item"),
        t.parent().addClass("current-menu-item"),
        i && i.trigger("click"));
    },
    _navItemMouseover: function () {
      if (0 !== e(this).find("ul.sub-menu").length) {
        var a = e(this),
          l = a.parent(),
          n = a.find("ul.sub-menu"),
          t = n.width(),
          i = 0,
          o = e(window).width(),
          s = 0,
          r = 0;
        if (
          (0 !== a.closest(".fl-sub-menu-right").length
            ? a.addClass("fl-sub-menu-right")
            : e("body").hasClass("rtl")
              ? ((i = l.is("ul.sub-menu")
                  ? l.offset().left - t
                  : a.offset().left - t),
                i <= 0 && a.addClass("fl-sub-menu-right"))
              : ((i = l.is("ul.sub-menu")
                  ? l.offset().left + 2 * t
                  : a.offset().left + t),
                i > o && a.addClass("fl-sub-menu-right")),
          a.addClass("fl-sub-menu-open"),
          a.hasClass("hide-heading") || (n.hide(), n.stop().fadeIn(200)),
          FLTheme._hideNavSearch(),
          0 !== a.closest(".fl-page-nav-collapse").length &&
            a.hasClass("mega-menu"))
        ) {
          if (a.find(".mega-menu-spacer").length > 0) return;
          n.first().before('<div class="mega-menu-spacer"></div>'),
            (s = a.find(".mega-menu-spacer").offset().top),
            (r = n.first().offset().top),
            a
              .find(".mega-menu-spacer")
              .css("padding-top", Math.floor(parseInt(r - s)) + "px");
        }
      }
    },
    _navItemMouseout: function () {
      var a = e(this),
        l = a.find("ul.sub-menu");
      a.hasClass("hide-heading")
        ? FLTheme._navItemMouseoutComplete()
        : l
            .stop()
            .fadeOut({ duration: 200, done: FLTheme._navItemMouseoutComplete });
    },
    _navItemMouseoutComplete: function () {
      var a = e(this).parent();
      a.removeClass("fl-sub-menu-open"),
        a.removeClass("fl-sub-menu-right"),
        a.find(".mega-menu-spacer").length > 0 &&
          a.find(".mega-menu-spacer").remove(),
        e(this).show();
    },
    _navSubMenuToggleClick: function (a) {
      var l = e(this).closest("li").eq(0);
      l.hasClass("fl-sub-menu-open") ||
        (FLTheme._navItemMouseover.apply(l[0]), a.preventDefault());
    },
    _toggleForMobile: function (a) {
      var l = e(".fl-page-nav .fl-page-nav-collapse"),
        n = e(this).attr("href"),
        t = e(this).closest("li").hasClass("menu-item-has-children");
      if ("#" !== n) {
        var i = n.split("#")[1];
        e("body").find("#" + i).length > 0 &&
          !t &&
          (e.isFunction(l.collapse)
            ? l.collapse("hide")
            : ((el = e(this).parent().closest("nav").find(".navbar-toggle")),
              el.trigger("click")));
      }
    },
    _toggleNavSearch: function (a) {
      var l = e(".fl-page-nav-search form");
      a.preventDefault(),
        l.is(":visible")
          ? l.stop().fadeOut(200)
          : (l.stop().fadeIn(200),
            e("body").on("click.fl-page-nav-search", FLTheme._hideNavSearch),
            e(".fl-page-nav-search .fl-search-input").focus());
    },
    _hideNavSearch: function (a) {
      var l = e(".fl-page-nav-search form");
      (void 0 !== a && e(a.target).closest(".fl-page-nav-search").length > 0) ||
        (l.stop().fadeOut(200), e("body").off("click.fl-page-nav-search"));
    },
    _navVertical: function () {
      var a = e(window);
      a.width() >= window.themeopts.medium_breakpoint &&
        e(".fl-page-header-primary").hasClass(
          "fl-page-nav-toggle-visible-always",
        ) &&
        (e("body").toggleClass("fl-nav-vertical"),
        e("body").hasClass("fl-nav-vertical-left") &&
          e("body").toggleClass("fl-nav-vertical-left"),
        e("body").hasClass("fl-nav-vertical-right") &&
          e("body").toggleClass("fl-nav-vertical-right"));
    },
    _updateVerticalRightPos: function () {
      var a = e(window).width(),
        l = e(".fl-page").width(),
        n = (a - l) / 2;
      e(".fl-page-header-vertical").css("right", n);
    },
    _navLeft: function () {
      var a = e(window);
      (a.width() < window.themeopts.medium_breakpoint ||
        e(".fl-page-header-primary").hasClass(
          "fl-page-nav-toggle-visible-always",
        )) &&
        e(".fl-page-header-primary .fl-page-logo-wrap").insertBefore(
          ".fl-page-header-primary .fl-page-nav-col",
        ),
        a.width() >= window.themeopts.medium_breakpoint &&
          !e(".fl-page-header-primary").hasClass(
            "fl-page-nav-toggle-visible-always",
          ) &&
          e(".fl-page-header-primary .fl-page-nav-col").insertBefore(
            ".fl-page-header-primary .fl-page-logo-wrap",
          ),
        0 == e(".fl-page-header-fixed").length ||
          e(".fl-page-header-fixed").hasClass(
            "fl-page-nav-toggle-visible-always",
          ) ||
          e(".fl-page-header-fixed .fl-page-fixed-nav-wrap").insertBefore(
            ".fl-page-header-fixed .fl-page-logo-wrap",
          );
    },
    _shrinkHeaderInit: function () {
      var a = e(window).scrollTop(),
        l = 250,
        n = e(".fl-page-header");
      e("body").addClass("fl-shrink-header-enabled"),
        "scrollRestoration" in history &&
          (history.scrollRestoration = "manual"),
        e(".fl-page-header-logo").imagesLoaded(function () {
          var t = e(".fl-logo-img"),
            i = t.height();
          "undefined" != typeof t.data("origHeight") &&
            (i = parseInt(t.data("origHeight"))),
            t.css("max-height", i),
            setTimeout(function () {
              e(".fl-page-header").addClass("fl-shrink-header-transition"),
                a > l
                  ? n.addClass("fl-shrink-header")
                  : n.removeClass("fl-shrink-header");
            }, 100);
        });
    },
    _shrinkHeaderEnable: function () {
      var a = e(window);
      if (a.width() >= window.themeopts.medium_breakpoint) {
        var l = e(".fl-page-header"),
          n = l.outerHeight(),
          t = e(".fl-page-bar"),
          i = 0,
          o = 0;
        0 != t.length
          ? ((i += t.outerHeight()),
            (o = i + n),
            0 != e("body.admin-bar").length && (i += 32),
            l.css("top", i))
          : (o = n),
          l.prevAll(".fl-builder-content").length > 0 &&
            (FLTheme._initThemerLayoutFix(), (o = t.outerHeight())),
          0 === e(".fl-header-padding-top-custom").length &&
            e(".fl-page").css("padding-top", o),
          e(a).on("scroll.fl-shrink-header", FLTheme._shrinkHeader);
      } else
        e(".fl-page-header").css("top", 0),
          e(".fl-page").css("padding-top", 0),
          e(a).off("scroll.fl-shrink-header");
    },
    _shrinkHeader: function () {
      var a = e(this).scrollTop(),
        l = 250,
        n = e(".fl-page-header"),
        t = null;
      e(".fl-page-header-logo").imagesLoaded(function () {
        (t = e(".fl-logo-img")),
          "undefined" == typeof t.data("origHeight") &&
            t.data("origHeight", t.height()),
          a > l
            ? n.addClass("fl-shrink-header")
            : n.removeClass("fl-shrink-header"),
          "undefined" != typeof n.data("original-top") &&
            FLTheme._fixThemerLayoutOnScroll();
      });
    },
    _fixedHeader: function () {
      var a = e(window),
        l = e(".fl-page-header"),
        n = 0,
        t = 0,
        i = e(".fl-page-bar"),
        o = 0;
      if (a.width() >= window.themeopts.medium_breakpoint) {
        if (((n = l.outerHeight()), 0 != i.length)) {
          if (
            ((o = i.outerHeight()),
            (t = o + n),
            0 != e("body.admin-bar").length && (o += 32),
            0 != e("html.fl-builder-edit").length)
          );
          l.css("top", o);
        } else t = n;
        l.prevAll(".fl-builder-content").length > 0 &&
          (FLTheme._initThemerLayoutFix(),
          (t = i.outerHeight()),
          e(a).on("scroll.fl-fixed-header", FLTheme._fixThemerLayoutOnScroll)),
          0 === e("body.fl-scroll-header").length &&
            0 === e(".fl-header-padding-top-custom").length &&
            e(".fl-page").css("padding-top", t),
          e(a).trigger("scroll");
      } else
        e(".fl-page-header").css("top", 0),
          e(".fl-page").css("padding-top", 0),
          e(a).off("scroll.fl-fixed-header");
    },
    _enableFixedHeader: function () {
      var a = e(window);
      a.width() < window.themeopts.medium_breakpoint
        ? (a.off("scroll.fl-page-header-fixed"),
          e(".fl-page-header-fixed").hide())
        : a.on("scroll.fl-page-header-fixed", FLTheme._toggleFixedHeader);
    },
    _initThemerLayoutFix: function () {
      var a = e(".fl-page-header"),
        l = a.prevAll(".fl-builder-content"),
        n = 0;
      l.length &&
        (a.css("position", "initial"),
        e.each(l, function () {
          n += e(this).outerHeight();
        }),
        a.data("original-top", n));
    },
    _fixThemerLayoutOnScroll: function () {
      var a = e(window).scrollTop(),
        l = e(".fl-page-header"),
        n = l.data("original-top");
      "undefined" != typeof n &&
        (a >= n ? l.css("position", "fixed") : l.css("position", "initial"),
        "undefined" != typeof Waypoint && Waypoint.refreshAll());
    },
    _toggleFixedHeader: function () {
      var a = e(window),
        l = e(".fl-page-header-fixed"),
        n = l.is(":visible"),
        t = e(".fl-page-header-primary"),
        i = !1;
      (i =
        0 === t.length
          ? a.scrollTop() > 200
          : a.scrollTop() > t.height() + t.offset().top),
        i && !n ? l.stop().fadeIn(200) : !i && n && l.stop().hide();
    },
    _centeredInlineLogo: function () {
      var a = e(window),
        l = e(".fl-page-nav-centered-inline-logo .fl-page-header-logo"),
        n = e(".fl-logo-centered-inline > .fl-page-header-logo"),
        t = e(".fl-page-nav-centered-inline-logo .fl-page-nav .navbar-nav"),
        i = t.children("li").length,
        o = Math.round(i / 2) - 1;
      a.width() >= window.themeopts.medium_breakpoint &&
        n.length < 1 &&
        !e(".fl-page-header-primary").hasClass(
          "fl-page-nav-toggle-visible-always",
        ) &&
        (l.hasClass("fl-inline-logo-left") && i % 2 != 0
          ? t
              .children("li:nth( " + o + " )")
              .before('<li class="fl-logo-centered-inline"></li>')
          : t
              .children("li:nth( " + o + " )")
              .after('<li class="fl-logo-centered-inline"></li>'),
        t.children(".fl-logo-centered-inline").append(l)),
        a.width() < window.themeopts.medium_breakpoint &&
          (e(".fl-page-nav-centered-inline-logo .fl-page-header-row").prepend(
            n,
          ),
          e(".fl-logo-centered-inline").remove());
    },
    _scrollHeader: function () {
      var a = e(window),
        l = null,
        n = e(".fl-page-header-primary").data("fl-distance"),
        t = 0;
      (l = e(
        0 != e(".fl-page-bar").length
          ? ".fl-page-header-primary, .fl-page-bar"
          : ".fl-page-header-primary",
      )),
        a.width() >= window.themeopts.medium_breakpoint
          ? a.on("scroll.fl-show-header-on-scroll", function () {
              e(this).scrollTop() > n
                ? l.addClass("fl-show")
                : (l.removeClass("fl-show"),
                  e(".fl-responsive-nav-enabled").length &&
                    ((t = 2 * e(".fl-page-header-primary").height()),
                    0 != e(".fl-page-bar").length &&
                      (t += e(".fl-page-bar").height()),
                    "undefined" !=
                      typeof e(".fl-nav-offcanvas-collapse").css("top") &&
                      (t += parseInt(
                        e(".fl-nav-offcanvas-collapse").css("top"),
                      ))),
                  e(".fl-nav-offcanvas-active").length &&
                    t > 0 &&
                    e(".fl-nav-offcanvas-collapse").css({
                      transform: "translateY(" + t + "px)",
                      "-ms-transform": "translateY(" + t + "px)",
                      "-webkit-transform": "translateY(" + t + "px)",
                    }));
            })
          : (a.off("scroll.fl-show-header-on-scroll"),
            e(".fl-nav-offcanvas-collapse").css("transform", ""));
    },
    _megaMenu: function () {
      var a = (e(window), e(".fl-page-header")),
        l = a.find(".fl-page-header-container"),
        n = l.outerWidth(),
        t = null,
        i = 0;
      a.find("li.mega-menu, li.mega-menu-disabled").each(function () {
        (t = e(this)),
          (i = t.find("> ul.sub-menu").outerWidth()),
          "undefined" != typeof t.data("megamenu-width") &&
            (i = t.data("megamenu-width")),
          (t.hasClass("mega-menu") && n < i) ||
          FLTheme._isResponsiveNavEnabled()
            ? (t.data("megamenu-width", i),
              FLTheme._isResponsiveNavEnabled() &&
                t.find("> ul.sub-menu").css("display", "block"),
              t.removeClass("mega-menu"),
              t.hasClass("mega-menu-disabled") ||
                t.addClass("mega-menu-disabled"))
            : t.hasClass("mega-menu-disabled") &&
              n >= i &&
              (t.find("> ul.sub-menu").css("display", ""),
              t.removeClass("mega-menu-disabled"),
              t.hasClass("mega-menu") || t.addClass("mega-menu"),
              t.addClass(
                "mega-menu-items-" + t.children("ul").children("li").length,
              ));
      });
    },
    _megaMenuOnScroll: function () {
      var a = e(window),
        l = e(".fl-page-header-fixed"),
        n = l.find(".fl-page-header-container"),
        t = l.is(":visible"),
        i = null,
        o = null;
      t &&
        (l.find("li.mega-menu").each(function () {
          (i = e(this)),
            (o = i.find("> ul.sub-menu")),
            n.outerWidth() < o.outerWidth()
              ? (i.removeClass("mega-menu"),
                i.hasClass("mega-menu-disabled") ||
                  i.addClass("mega-menu-disabled"))
              : (i.removeClass("mega-menu-disabled"),
                i.hasClass("mega-menu") || i.addClass("mega-menu"),
                i.addClass(
                  "mega-menu-items-" + i.children("ul").children("li").length,
                ));
        }),
        a.off("scroll.fl-mega-menu-on-scroll"),
        a.off("resize.fl-mega-menu-on-scroll"));
    },
    _fixedHeadersWhenBuilderActive: function () {
      0 != e("body.fl-shrink").length && e("body").removeClass("fl-shrink"),
        0 != e("body.fl-fixed-header").length &&
          e("body").removeClass("fl-fixed-header"),
        0 != e("body.fl-scroll-header").length &&
          e("body").removeClass("fl-scroll-header");
    },
    _setupMobileNavLayout: function () {
      var a = e(window),
        l = e("button.navbar-toggle"),
        n = e(".fl-page-header:not(.fl-page-header-fixed)"),
        t = n.find(".fl-page-nav-collapse"),
        i = e(".fl-page"),
        o = 0,
        s = a.height(),
        r =
          e("body").hasClass("fl-offcanvas-push-opacity-left") ||
          e("body").hasClass("fl-offcanvas-push-opacity-right");
      n.find(".fl-page-header-logo").offset();
      FLTheme._isResponsiveNavEnabled() && l.is(":visible")
        ? (e("body").addClass("fl-responsive-nav-enabled"),
          l.attr("data-toggle", "offcanvas"),
          t.addClass("fl-nav-offcanvas-collapse"),
          0 === t.find(".fl-button-close").length &&
            t.prepend(
              '<div class="fl-button-close"><button class="fl-offcanvas-close" aria-label="Close Menu"><i class="fas fa-times"></i></button></div>',
            ),
          r &&
            0 === e(".fl-offcanvas-opacity").length &&
            i.append('<div class="fl-offcanvas-opacity"></div>'),
          i.height() > a.height() &&
            ((s = e(document).height()),
            0 != e("body.fl-shrink").length && (s -= n.height())),
          0 != e("body.admin-bar").length &&
            ((o = e("#wpadminbar").height()), (s -= o)),
          0 == e(".fl-page-bar").length ||
            e(".fl-page-header").hasClass("fl-page-nav-toggle-button") ||
            (o += e(".fl-page-bar").height() + 1),
          e(".fl-scroll-header").length &&
          a.width() >= window.themeopts.medium_breakpoint
            ? t.css("top", i.offset().top - o + "px")
            : t.css("top", ""))
        : (l.attr("data-toggle", "collapse"),
          t.removeClass("fl-nav-offcanvas-collapse"),
          t.find(".fl-button-close").remove(),
          t.css("height", ""),
          t.css("top", ""),
          i.removeClass("fl-nav-offcanvas-active"),
          e("body").find(".fl-offcanvas-opacity").remove(),
          e("body").removeClass("fl-responsive-nav-enabled"));
    },
    _toggleMobileNavLayout: function () {
      e(".fl-page-nav").on("click", ".fl-offcanvas-close", function (a) {
        e(".fl-page").toggleClass("fl-nav-offcanvas-active"),
          a.stopPropagation();
      });
    },
    _footerEffect: function () {
      e(window).width() >= window.themeopts.mobile_breakpoint
        ? e(".fl-page").css("margin-bottom", e(".fl-page-footer-wrap").height())
        : e(".fl-page").css("margin-bottom", 0);
    },
    _toTop: function () {
      var a = e("#fl-to-top");
      a.each(function () {
        e(this).click(function () {
          return e("html,body").animate({ scrollTop: 0 }, "linear"), !1;
        });
      }),
        e(window).scroll(function () {
          e(this).scrollTop() > window.themeopts.scrollTopPosition
            ? a.fadeIn()
            : a.fadeOut();
        });
    },
    _enableLightbox: function () {
      var a = e("body");
      a.hasClass("fl-builder") ||
        a.hasClass("woocommerce") ||
        e(".fl-content a")
          .filter(function () {
            return /\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href);
          })
          .magnificPopup({
            closeBtnInside: !1,
            type: "image",
            gallery: { enabled: !0 },
          }),
        (!a.hasClass("fl-builder") &&
          !a.hasClass("fl-theme-builder-singular")) ||
          a.hasClass("woocommerce") ||
          e(".fl-rich-text a, .fl-module-fl-post-content a")
            .filter(function () {
              return /\.(png|jpg|jpeg|gif|webp)(\?.*)?$/i.test(this.href);
            })
            .magnificPopup({
              closeBtnInside: !1,
              type: "image",
              gallery: { enabled: !0 },
            });
    },
    _enableFitVids: function () {
      e(".fl-post-content").fitVids();
    },
    _isResponsiveNavEnabled: function () {
      var a = e(window);
      return (
        (enabled = !1),
        (e(".fl-page-nav-toggle-visible-always").length > 0 ||
          (e(".fl-page-nav-toggle-visible-medium-mobile").length > 0 &&
            a.width() < window.themeopts.medium_breakpoint) ||
          (e(".fl-page-nav-toggle-visible-mobile").length > 0 &&
            a.width() < window.themeopts.mobile_breakpoint)) &&
          (enabled = !0),
        enabled
      );
    },
  }),
    e(function () {
      FLTheme.init();
    }),
    0 === e("html.fl-builder-edit").length && FLTheme._initMobileHeaderLogo(),
    FLTheme._initRetinaImages();
})(jQuery);
/*!/wp-content/cache/asset-cleanup/js/item/mpw-cf7-track__js__writesources-js-v4a517d44a77e638b4a7ceaf221d4c51436f867fc.js*/
/*!/wp-content/plugins/mpw-cf7-track/js/writesources.js*/
function writeSources() {
  readSourceObject();
  var httpRef = document.referrer;
  var currentPage = window.location.href;
  jQuery(".httpReferrer").val(httpRef);
  jQuery(".currentPage").val(currentPage);
}
jQuery(document).ready(function () {
  writeSources();
});
