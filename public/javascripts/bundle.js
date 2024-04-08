/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      223: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            afterMain: () => x,
            afterRead: () => b,
            afterWrite: () => C,
            applyStyles: () => L,
            arrow: () => J,
            auto: () => a,
            basePlacements: () => l,
            beforeMain: () => _,
            beforeRead: () => v,
            beforeWrite: () => T,
            bottom: () => r,
            clippingParents: () => d,
            computeStyles: () => ne,
            createPopper: () => je,
            createPopperBase: () => De,
            createPopperLite: () => Le,
            detectOverflow: () => ve,
            end: () => u,
            eventListeners: () => re,
            flip: () => ye,
            hide: () => we,
            left: () => s,
            main: () => w,
            modifierPhases: () => A,
            offset: () => xe,
            placements: () => m,
            popper: () => h,
            popperGenerator: () => Oe,
            popperOffsets: () => Te,
            preventOverflow: () => Ee,
            read: () => y,
            reference: () => p,
            right: () => o,
            start: () => c,
            top: () => i,
            variationPlacements: () => g,
            viewport: () => f,
            write: () => E,
          });
        var i = "top",
          r = "bottom",
          o = "right",
          s = "left",
          a = "auto",
          l = [i, r, o, s],
          c = "start",
          u = "end",
          d = "clippingParents",
          f = "viewport",
          h = "popper",
          p = "reference",
          g = l.reduce(function (e, t) {
            return e.concat([t + "-" + c, t + "-" + u]);
          }, []),
          m = [].concat(l, [a]).reduce(function (e, t) {
            return e.concat([t, t + "-" + c, t + "-" + u]);
          }, []),
          v = "beforeRead",
          y = "read",
          b = "afterRead",
          _ = "beforeMain",
          w = "main",
          x = "afterMain",
          T = "beforeWrite",
          E = "write",
          C = "afterWrite",
          A = [v, y, b, _, w, x, T, E, C];
        function k(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function S(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        function O(e) {
          return e instanceof S(e).Element || e instanceof Element;
        }
        function D(e) {
          return e instanceof S(e).HTMLElement || e instanceof HTMLElement;
        }
        function j(e) {
          return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof S(e).ShadowRoot || e instanceof ShadowRoot)
          );
        }
        const L = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var n = t.styles[e] || {},
                i = t.attributes[e] || {},
                r = t.elements[e];
              D(r) &&
                k(r) &&
                (Object.assign(r.style, n),
                Object.keys(i).forEach(function (e) {
                  var t = i[e];
                  !1 === t
                    ? r.removeAttribute(e)
                    : r.setAttribute(e, !0 === t ? "" : t);
                }));
            });
          },
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var i = t.elements[e],
                    r = t.attributes[e] || {},
                    o = Object.keys(
                      t.styles.hasOwnProperty(e) ? t.styles[e] : n[e],
                    ).reduce(function (e, t) {
                      return (e[t] = ""), e;
                    }, {});
                  D(i) &&
                    k(i) &&
                    (Object.assign(i.style, o),
                    Object.keys(r).forEach(function (e) {
                      i.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
        function N(e) {
          return e.split("-")[0];
        }
        var P = Math.max,
          $ = Math.min,
          I = Math.round;
        function M() {
          var e = navigator.userAgentData;
          return null != e && e.brands && Array.isArray(e.brands)
            ? e.brands
                .map(function (e) {
                  return e.brand + "/" + e.version;
                })
                .join(" ")
            : navigator.userAgent;
        }
        function H() {
          return !/^((?!chrome|android).)*safari/i.test(M());
        }
        function q(e, t, n) {
          void 0 === t && (t = !1), void 0 === n && (n = !1);
          var i = e.getBoundingClientRect(),
            r = 1,
            o = 1;
          t &&
            D(e) &&
            ((r = (e.offsetWidth > 0 && I(i.width) / e.offsetWidth) || 1),
            (o = (e.offsetHeight > 0 && I(i.height) / e.offsetHeight) || 1));
          var s = (O(e) ? S(e) : window).visualViewport,
            a = !H() && n,
            l = (i.left + (a && s ? s.offsetLeft : 0)) / r,
            c = (i.top + (a && s ? s.offsetTop : 0)) / o,
            u = i.width / r,
            d = i.height / o;
          return {
            width: u,
            height: d,
            top: c,
            right: l + u,
            bottom: c + d,
            left: l,
            x: l,
            y: c,
          };
        }
        function F(e) {
          var t = q(e),
            n = e.offsetWidth,
            i = e.offsetHeight;
          return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - i) <= 1 && (i = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
          );
        }
        function R(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (n && j(n)) {
            var i = t;
            do {
              if (i && e.isSameNode(i)) return !0;
              i = i.parentNode || i.host;
            } while (i);
          }
          return !1;
        }
        function W(e) {
          return S(e).getComputedStyle(e);
        }
        function B(e) {
          return ["table", "td", "th"].indexOf(k(e)) >= 0;
        }
        function z(e) {
          return ((O(e) ? e.ownerDocument : e.document) || window.document)
            .documentElement;
        }
        function V(e) {
          return "html" === k(e)
            ? e
            : e.assignedSlot || e.parentNode || (j(e) ? e.host : null) || z(e);
        }
        function X(e) {
          return D(e) && "fixed" !== W(e).position ? e.offsetParent : null;
        }
        function U(e) {
          for (
            var t = S(e), n = X(e);
            n && B(n) && "static" === W(n).position;

          )
            n = X(n);
          return n &&
            ("html" === k(n) || ("body" === k(n) && "static" === W(n).position))
            ? t
            : n ||
                (function (e) {
                  var t = /firefox/i.test(M());
                  if (/Trident/i.test(M()) && D(e) && "fixed" === W(e).position)
                    return null;
                  var n = V(e);
                  for (
                    j(n) && (n = n.host);
                    D(n) && ["html", "body"].indexOf(k(n)) < 0;

                  ) {
                    var i = W(n);
                    if (
                      "none" !== i.transform ||
                      "none" !== i.perspective ||
                      "paint" === i.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(i.willChange) ||
                      (t && "filter" === i.willChange) ||
                      (t && i.filter && "none" !== i.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(e) ||
                t;
        }
        function Y(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function Q(e, t, n) {
          return P(e, $(t, n));
        }
        function K(e) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
        }
        function G(e, t) {
          return t.reduce(function (t, n) {
            return (t[n] = e), t;
          }, {});
        }
        const J = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              n = e.state,
              a = e.name,
              c = e.options,
              u = n.elements.arrow,
              d = n.modifiersData.popperOffsets,
              f = N(n.placement),
              h = Y(f),
              p = [s, o].indexOf(f) >= 0 ? "height" : "width";
            if (u && d) {
              var g = (function (e, t) {
                  return K(
                    "number" !=
                      typeof (e =
                        "function" == typeof e
                          ? e(
                              Object.assign({}, t.rects, {
                                placement: t.placement,
                              }),
                            )
                          : e)
                      ? e
                      : G(e, l),
                  );
                })(c.padding, n),
                m = F(u),
                v = "y" === h ? i : s,
                y = "y" === h ? r : o,
                b =
                  n.rects.reference[p] +
                  n.rects.reference[h] -
                  d[h] -
                  n.rects.popper[p],
                _ = d[h] - n.rects.reference[h],
                w = U(u),
                x = w
                  ? "y" === h
                    ? w.clientHeight || 0
                    : w.clientWidth || 0
                  : 0,
                T = b / 2 - _ / 2,
                E = g[v],
                C = x - m[p] - g[y],
                A = x / 2 - m[p] / 2 + T,
                k = Q(E, A, C),
                S = h;
              n.modifiersData[a] =
                (((t = {})[S] = k), (t.centerOffset = k - A), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              n = e.options.element,
              i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i &&
              ("string" != typeof i ||
                (i = t.elements.popper.querySelector(i))) &&
              R(t.elements.popper, i) &&
              (t.elements.arrow = i);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
        function Z(e) {
          return e.split("-")[1];
        }
        var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function te(e) {
          var t,
            n = e.popper,
            a = e.popperRect,
            l = e.placement,
            c = e.variation,
            d = e.offsets,
            f = e.position,
            h = e.gpuAcceleration,
            p = e.adaptive,
            g = e.roundOffsets,
            m = e.isFixed,
            v = d.x,
            y = void 0 === v ? 0 : v,
            b = d.y,
            _ = void 0 === b ? 0 : b,
            w = "function" == typeof g ? g({ x: y, y: _ }) : { x: y, y: _ };
          (y = w.x), (_ = w.y);
          var x = d.hasOwnProperty("x"),
            T = d.hasOwnProperty("y"),
            E = s,
            C = i,
            A = window;
          if (p) {
            var k = U(n),
              O = "clientHeight",
              D = "clientWidth";
            k === S(n) &&
              "static" !== W((k = z(n))).position &&
              "absolute" === f &&
              ((O = "scrollHeight"), (D = "scrollWidth")),
              (l === i || ((l === s || l === o) && c === u)) &&
                ((C = r),
                (_ -=
                  (m && k === A && A.visualViewport
                    ? A.visualViewport.height
                    : k[O]) - a.height),
                (_ *= h ? 1 : -1)),
              (l !== s && ((l !== i && l !== r) || c !== u)) ||
                ((E = o),
                (y -=
                  (m && k === A && A.visualViewport
                    ? A.visualViewport.width
                    : k[D]) - a.width),
                (y *= h ? 1 : -1));
          }
          var j,
            L = Object.assign({ position: f }, p && ee),
            N =
              !0 === g
                ? (function (e, t) {
                    var n = e.x,
                      i = e.y,
                      r = t.devicePixelRatio || 1;
                    return { x: I(n * r) / r || 0, y: I(i * r) / r || 0 };
                  })({ x: y, y: _ }, S(n))
                : { x: y, y: _ };
          return (
            (y = N.x),
            (_ = N.y),
            h
              ? Object.assign(
                  {},
                  L,
                  (((j = {})[C] = T ? "0" : ""),
                  (j[E] = x ? "0" : ""),
                  (j.transform =
                    (A.devicePixelRatio || 1) <= 1
                      ? "translate(" + y + "px, " + _ + "px)"
                      : "translate3d(" + y + "px, " + _ + "px, 0)"),
                  j),
                )
              : Object.assign(
                  {},
                  L,
                  (((t = {})[C] = T ? _ + "px" : ""),
                  (t[E] = x ? y + "px" : ""),
                  (t.transform = ""),
                  t),
                )
          );
        }
        const ne = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = n.gpuAcceleration,
              r = void 0 === i || i,
              o = n.adaptive,
              s = void 0 === o || o,
              a = n.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: N(t.placement),
                variation: Z(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                te(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s,
                    roundOffsets: l,
                  }),
                ),
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  te(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: l,
                    }),
                  ),
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        };
        var ie = { passive: !0 };
        const re = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              n = e.instance,
              i = e.options,
              r = i.scroll,
              o = void 0 === r || r,
              s = i.resize,
              a = void 0 === s || s,
              l = S(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", n.update, ie);
                }),
              a && l.addEventListener("resize", n.update, ie),
              function () {
                o &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", n.update, ie);
                  }),
                  a && l.removeEventListener("resize", n.update, ie);
              }
            );
          },
          data: {},
        };
        var oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function se(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return oe[e];
          });
        }
        var ae = { start: "end", end: "start" };
        function le(e) {
          return e.replace(/start|end/g, function (e) {
            return ae[e];
          });
        }
        function ce(e) {
          var t = S(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
        function ue(e) {
          return q(z(e)).left + ce(e).scrollLeft;
        }
        function de(e) {
          var t = W(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + r + i);
        }
        function fe(e) {
          return ["html", "body", "#document"].indexOf(k(e)) >= 0
            ? e.ownerDocument.body
            : D(e) && de(e)
              ? e
              : fe(V(e));
        }
        function he(e, t) {
          var n;
          void 0 === t && (t = []);
          var i = fe(e),
            r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
            o = S(i),
            s = r ? [o].concat(o.visualViewport || [], de(i) ? i : []) : i,
            a = t.concat(s);
          return r ? a : a.concat(he(V(s)));
        }
        function pe(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        function ge(e, t, n) {
          return t === f
            ? pe(
                (function (e, t) {
                  var n = S(e),
                    i = z(e),
                    r = n.visualViewport,
                    o = i.clientWidth,
                    s = i.clientHeight,
                    a = 0,
                    l = 0;
                  if (r) {
                    (o = r.width), (s = r.height);
                    var c = H();
                    (c || (!c && "fixed" === t)) &&
                      ((a = r.offsetLeft), (l = r.offsetTop));
                  }
                  return { width: o, height: s, x: a + ue(e), y: l };
                })(e, n),
              )
            : O(t)
              ? (function (e, t) {
                  var n = q(e, !1, "fixed" === t);
                  return (
                    (n.top = n.top + e.clientTop),
                    (n.left = n.left + e.clientLeft),
                    (n.bottom = n.top + e.clientHeight),
                    (n.right = n.left + e.clientWidth),
                    (n.width = e.clientWidth),
                    (n.height = e.clientHeight),
                    (n.x = n.left),
                    (n.y = n.top),
                    n
                  );
                })(t, n)
              : pe(
                  (function (e) {
                    var t,
                      n = z(e),
                      i = ce(e),
                      r = null == (t = e.ownerDocument) ? void 0 : t.body,
                      o = P(
                        n.scrollWidth,
                        n.clientWidth,
                        r ? r.scrollWidth : 0,
                        r ? r.clientWidth : 0,
                      ),
                      s = P(
                        n.scrollHeight,
                        n.clientHeight,
                        r ? r.scrollHeight : 0,
                        r ? r.clientHeight : 0,
                      ),
                      a = -i.scrollLeft + ue(e),
                      l = -i.scrollTop;
                    return (
                      "rtl" === W(r || n).direction &&
                        (a += P(n.clientWidth, r ? r.clientWidth : 0) - o),
                      { width: o, height: s, x: a, y: l }
                    );
                  })(z(e)),
                );
        }
        function me(e) {
          var t,
            n = e.reference,
            a = e.element,
            l = e.placement,
            d = l ? N(l) : null,
            f = l ? Z(l) : null,
            h = n.x + n.width / 2 - a.width / 2,
            p = n.y + n.height / 2 - a.height / 2;
          switch (d) {
            case i:
              t = { x: h, y: n.y - a.height };
              break;
            case r:
              t = { x: h, y: n.y + n.height };
              break;
            case o:
              t = { x: n.x + n.width, y: p };
              break;
            case s:
              t = { x: n.x - a.width, y: p };
              break;
            default:
              t = { x: n.x, y: n.y };
          }
          var g = d ? Y(d) : null;
          if (null != g) {
            var m = "y" === g ? "height" : "width";
            switch (f) {
              case c:
                t[g] = t[g] - (n[m] / 2 - a[m] / 2);
                break;
              case u:
                t[g] = t[g] + (n[m] / 2 - a[m] / 2);
            }
          }
          return t;
        }
        function ve(e, t) {
          void 0 === t && (t = {});
          var n = t,
            s = n.placement,
            a = void 0 === s ? e.placement : s,
            c = n.strategy,
            u = void 0 === c ? e.strategy : c,
            g = n.boundary,
            m = void 0 === g ? d : g,
            v = n.rootBoundary,
            y = void 0 === v ? f : v,
            b = n.elementContext,
            _ = void 0 === b ? h : b,
            w = n.altBoundary,
            x = void 0 !== w && w,
            T = n.padding,
            E = void 0 === T ? 0 : T,
            C = K("number" != typeof E ? E : G(E, l)),
            A = _ === h ? p : h,
            S = e.rects.popper,
            j = e.elements[x ? A : _],
            L = (function (e, t, n, i) {
              var r =
                  "clippingParents" === t
                    ? (function (e) {
                        var t = he(V(e)),
                          n =
                            ["absolute", "fixed"].indexOf(W(e).position) >= 0 &&
                            D(e)
                              ? U(e)
                              : e;
                        return O(n)
                          ? t.filter(function (e) {
                              return O(e) && R(e, n) && "body" !== k(e);
                            })
                          : [];
                      })(e)
                    : [].concat(t),
                o = [].concat(r, [n]),
                s = o[0],
                a = o.reduce(
                  function (t, n) {
                    var r = ge(e, n, i);
                    return (
                      (t.top = P(r.top, t.top)),
                      (t.right = $(r.right, t.right)),
                      (t.bottom = $(r.bottom, t.bottom)),
                      (t.left = P(r.left, t.left)),
                      t
                    );
                  },
                  ge(e, s, i),
                );
              return (
                (a.width = a.right - a.left),
                (a.height = a.bottom - a.top),
                (a.x = a.left),
                (a.y = a.top),
                a
              );
            })(O(j) ? j : j.contextElement || z(e.elements.popper), m, y, u),
            N = q(e.elements.reference),
            I = me({
              reference: N,
              element: S,
              strategy: "absolute",
              placement: a,
            }),
            M = pe(Object.assign({}, S, I)),
            H = _ === h ? M : N,
            F = {
              top: L.top - H.top + C.top,
              bottom: H.bottom - L.bottom + C.bottom,
              left: L.left - H.left + C.left,
              right: H.right - L.right + C.right,
            },
            B = e.modifiersData.offset;
          if (_ === h && B) {
            var X = B[a];
            Object.keys(F).forEach(function (e) {
              var t = [o, r].indexOf(e) >= 0 ? 1 : -1,
                n = [i, r].indexOf(e) >= 0 ? "y" : "x";
              F[e] += X[n] * t;
            });
          }
          return F;
        }
        const ye = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              u = e.name;
            if (!t.modifiersData[u]._skip) {
              for (
                var d = n.mainAxis,
                  f = void 0 === d || d,
                  h = n.altAxis,
                  p = void 0 === h || h,
                  v = n.fallbackPlacements,
                  y = n.padding,
                  b = n.boundary,
                  _ = n.rootBoundary,
                  w = n.altBoundary,
                  x = n.flipVariations,
                  T = void 0 === x || x,
                  E = n.allowedAutoPlacements,
                  C = t.options.placement,
                  A = N(C),
                  k =
                    v ||
                    (A !== C && T
                      ? (function (e) {
                          if (N(e) === a) return [];
                          var t = se(e);
                          return [le(e), t, le(t)];
                        })(C)
                      : [se(C)]),
                  S = [C].concat(k).reduce(function (e, n) {
                    return e.concat(
                      N(n) === a
                        ? (function (e, t) {
                            void 0 === t && (t = {});
                            var n = t,
                              i = n.placement,
                              r = n.boundary,
                              o = n.rootBoundary,
                              s = n.padding,
                              a = n.flipVariations,
                              c = n.allowedAutoPlacements,
                              u = void 0 === c ? m : c,
                              d = Z(i),
                              f = d
                                ? a
                                  ? g
                                  : g.filter(function (e) {
                                      return Z(e) === d;
                                    })
                                : l,
                              h = f.filter(function (e) {
                                return u.indexOf(e) >= 0;
                              });
                            0 === h.length && (h = f);
                            var p = h.reduce(function (t, n) {
                              return (
                                (t[n] = ve(e, {
                                  placement: n,
                                  boundary: r,
                                  rootBoundary: o,
                                  padding: s,
                                })[N(n)]),
                                t
                              );
                            }, {});
                            return Object.keys(p).sort(function (e, t) {
                              return p[e] - p[t];
                            });
                          })(t, {
                            placement: n,
                            boundary: b,
                            rootBoundary: _,
                            padding: y,
                            flipVariations: T,
                            allowedAutoPlacements: E,
                          })
                        : n,
                    );
                  }, []),
                  O = t.rects.reference,
                  D = t.rects.popper,
                  j = new Map(),
                  L = !0,
                  P = S[0],
                  $ = 0;
                $ < S.length;
                $++
              ) {
                var I = S[$],
                  M = N(I),
                  H = Z(I) === c,
                  q = [i, r].indexOf(M) >= 0,
                  F = q ? "width" : "height",
                  R = ve(t, {
                    placement: I,
                    boundary: b,
                    rootBoundary: _,
                    altBoundary: w,
                    padding: y,
                  }),
                  W = q ? (H ? o : s) : H ? r : i;
                O[F] > D[F] && (W = se(W));
                var B = se(W),
                  z = [];
                if (
                  (f && z.push(R[M] <= 0),
                  p && z.push(R[W] <= 0, R[B] <= 0),
                  z.every(function (e) {
                    return e;
                  }))
                ) {
                  (P = I), (L = !1);
                  break;
                }
                j.set(I, z);
              }
              if (L)
                for (
                  var V = function (e) {
                      var t = S.find(function (t) {
                        var n = j.get(t);
                        if (n)
                          return n.slice(0, e).every(function (e) {
                            return e;
                          });
                      });
                      if (t) return (P = t), "break";
                    },
                    X = T ? 3 : 1;
                  X > 0 && "break" !== V(X);
                  X--
                );
              t.placement !== P &&
                ((t.modifiersData[u]._skip = !0),
                (t.placement = P),
                (t.reset = !0));
            }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        };
        function be(e, t, n) {
          return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
              top: e.top - t.height - n.y,
              right: e.right - t.width + n.x,
              bottom: e.bottom - t.height + n.y,
              left: e.left - t.width - n.x,
            }
          );
        }
        function _e(e) {
          return [i, o, r, s].some(function (t) {
            return e[t] >= 0;
          });
        }
        const we = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                i = t.rects.reference,
                r = t.rects.popper,
                o = t.modifiersData.preventOverflow,
                s = ve(t, { elementContext: "reference" }),
                a = ve(t, { altBoundary: !0 }),
                l = be(s, i),
                c = be(a, r, o),
                u = _e(l),
                d = _e(c);
              (t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: d,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": u,
                  "data-popper-escaped": d,
                }));
            },
          },
          xe = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                a = n.offset,
                l = void 0 === a ? [0, 0] : a,
                c = m.reduce(function (e, n) {
                  return (
                    (e[n] = (function (e, t, n) {
                      var r = N(e),
                        a = [s, i].indexOf(r) >= 0 ? -1 : 1,
                        l =
                          "function" == typeof n
                            ? n(Object.assign({}, t, { placement: e }))
                            : n,
                        c = l[0],
                        u = l[1];
                      return (
                        (c = c || 0),
                        (u = (u || 0) * a),
                        [s, o].indexOf(r) >= 0 ? { x: u, y: c } : { x: c, y: u }
                      );
                    })(n, t.rects, l)),
                    e
                  );
                }, {}),
                u = c[t.placement],
                d = u.x,
                f = u.y;
              null != t.modifiersData.popperOffsets &&
                ((t.modifiersData.popperOffsets.x += d),
                (t.modifiersData.popperOffsets.y += f)),
                (t.modifiersData[r] = c);
            },
          },
          Te = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = me({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          Ee = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                a = e.name,
                l = n.mainAxis,
                u = void 0 === l || l,
                d = n.altAxis,
                f = void 0 !== d && d,
                h = n.boundary,
                p = n.rootBoundary,
                g = n.altBoundary,
                m = n.padding,
                v = n.tether,
                y = void 0 === v || v,
                b = n.tetherOffset,
                _ = void 0 === b ? 0 : b,
                w = ve(t, {
                  boundary: h,
                  rootBoundary: p,
                  padding: m,
                  altBoundary: g,
                }),
                x = N(t.placement),
                T = Z(t.placement),
                E = !T,
                C = Y(x),
                A = "x" === C ? "y" : "x",
                k = t.modifiersData.popperOffsets,
                S = t.rects.reference,
                O = t.rects.popper,
                D =
                  "function" == typeof _
                    ? _(Object.assign({}, t.rects, { placement: t.placement }))
                    : _,
                j =
                  "number" == typeof D
                    ? { mainAxis: D, altAxis: D }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                L = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement]
                  : null,
                I = { x: 0, y: 0 };
              if (k) {
                if (u) {
                  var M,
                    H = "y" === C ? i : s,
                    q = "y" === C ? r : o,
                    R = "y" === C ? "height" : "width",
                    W = k[C],
                    B = W + w[H],
                    z = W - w[q],
                    V = y ? -O[R] / 2 : 0,
                    X = T === c ? S[R] : O[R],
                    K = T === c ? -O[R] : -S[R],
                    G = t.elements.arrow,
                    J = y && G ? F(G) : { width: 0, height: 0 },
                    ee = t.modifiersData["arrow#persistent"]
                      ? t.modifiersData["arrow#persistent"].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    te = ee[H],
                    ne = ee[q],
                    ie = Q(0, S[R], J[R]),
                    re = E
                      ? S[R] / 2 - V - ie - te - j.mainAxis
                      : X - ie - te - j.mainAxis,
                    oe = E
                      ? -S[R] / 2 + V + ie + ne + j.mainAxis
                      : K + ie + ne + j.mainAxis,
                    se = t.elements.arrow && U(t.elements.arrow),
                    ae = se
                      ? "y" === C
                        ? se.clientTop || 0
                        : se.clientLeft || 0
                      : 0,
                    le = null != (M = null == L ? void 0 : L[C]) ? M : 0,
                    ce = W + oe - le,
                    ue = Q(y ? $(B, W + re - le - ae) : B, W, y ? P(z, ce) : z);
                  (k[C] = ue), (I[C] = ue - W);
                }
                if (f) {
                  var de,
                    fe = "x" === C ? i : s,
                    he = "x" === C ? r : o,
                    pe = k[A],
                    ge = "y" === A ? "height" : "width",
                    me = pe + w[fe],
                    ye = pe - w[he],
                    be = -1 !== [i, s].indexOf(x),
                    _e = null != (de = null == L ? void 0 : L[A]) ? de : 0,
                    we = be ? me : pe - S[ge] - O[ge] - _e + j.altAxis,
                    xe = be ? pe + S[ge] + O[ge] - _e - j.altAxis : ye,
                    Te =
                      y && be
                        ? (function (e, t, n) {
                            var i = Q(e, t, n);
                            return i > n ? n : i;
                          })(we, pe, xe)
                        : Q(y ? we : me, pe, y ? xe : ye);
                  (k[A] = Te), (I[A] = Te - pe);
                }
                t.modifiersData[a] = I;
              }
            },
            requiresIfExists: ["offset"],
          };
        function Ce(e, t, n) {
          void 0 === n && (n = !1);
          var i,
            r,
            o = D(t),
            s =
              D(t) &&
              (function (e) {
                var t = e.getBoundingClientRect(),
                  n = I(t.width) / e.offsetWidth || 1,
                  i = I(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== i;
              })(t),
            a = z(t),
            l = q(e, s, n),
            c = { scrollLeft: 0, scrollTop: 0 },
            u = { x: 0, y: 0 };
          return (
            (o || (!o && !n)) &&
              (("body" !== k(t) || de(a)) &&
                (c =
                  (i = t) !== S(i) && D(i)
                    ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                    : ce(i)),
              D(t)
                ? (((u = q(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
                : a && (u.x = ue(a))),
            {
              x: l.left + c.scrollLeft - u.x,
              y: l.top + c.scrollTop - u.y,
              width: l.width,
              height: l.height,
            }
          );
        }
        function Ae(e) {
          var t = new Map(),
            n = new Set(),
            i = [];
          function r(e) {
            n.add(e.name),
              []
                .concat(e.requires || [], e.requiresIfExists || [])
                .forEach(function (e) {
                  if (!n.has(e)) {
                    var i = t.get(e);
                    i && r(i);
                  }
                }),
              i.push(e);
          }
          return (
            e.forEach(function (e) {
              t.set(e.name, e);
            }),
            e.forEach(function (e) {
              n.has(e.name) || r(e);
            }),
            i
          );
        }
        var ke = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Se() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }
        function Oe(e) {
          void 0 === e && (e = {});
          var t = e,
            n = t.defaultModifiers,
            i = void 0 === n ? [] : n,
            r = t.defaultOptions,
            o = void 0 === r ? ke : r;
          return function (e, t, n) {
            void 0 === n && (n = o);
            var r,
              s,
              a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, ke, o),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              l = [],
              c = !1,
              u = {
                state: a,
                setOptions: function (n) {
                  var r = "function" == typeof n ? n(a.options) : n;
                  d(),
                    (a.options = Object.assign({}, o, a.options, r)),
                    (a.scrollParents = {
                      reference: O(e)
                        ? he(e)
                        : e.contextElement
                          ? he(e.contextElement)
                          : [],
                      popper: he(t),
                    });
                  var s,
                    c,
                    f = (function (e) {
                      var t = Ae(e);
                      return A.reduce(function (e, n) {
                        return e.concat(
                          t.filter(function (e) {
                            return e.phase === n;
                          }),
                        );
                      }, []);
                    })(
                      ((s = [].concat(i, a.options.modifiers)),
                      (c = s.reduce(function (e, t) {
                        var n = e[t.name];
                        return (
                          (e[t.name] = n
                            ? Object.assign({}, n, t, {
                                options: Object.assign(
                                  {},
                                  n.options,
                                  t.options,
                                ),
                                data: Object.assign({}, n.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {})),
                      Object.keys(c).map(function (e) {
                        return c[e];
                      })),
                    );
                  return (
                    (a.orderedModifiers = f.filter(function (e) {
                      return e.enabled;
                    })),
                    a.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        i = void 0 === n ? {} : n,
                        r = e.effect;
                      if ("function" == typeof r) {
                        var o = r({
                          state: a,
                          name: t,
                          instance: u,
                          options: i,
                        });
                        l.push(o || function () {});
                      }
                    }),
                    u.update()
                  );
                },
                forceUpdate: function () {
                  if (!c) {
                    var e = a.elements,
                      t = e.reference,
                      n = e.popper;
                    if (Se(t, n)) {
                      (a.rects = {
                        reference: Ce(t, U(n), "fixed" === a.options.strategy),
                        popper: F(n),
                      }),
                        (a.reset = !1),
                        (a.placement = a.options.placement),
                        a.orderedModifiers.forEach(function (e) {
                          return (a.modifiersData[e.name] = Object.assign(
                            {},
                            e.data,
                          ));
                        });
                      for (var i = 0; i < a.orderedModifiers.length; i++)
                        if (!0 !== a.reset) {
                          var r = a.orderedModifiers[i],
                            o = r.fn,
                            s = r.options,
                            l = void 0 === s ? {} : s,
                            d = r.name;
                          "function" == typeof o &&
                            (a =
                              o({
                                state: a,
                                options: l,
                                name: d,
                                instance: u,
                              }) || a);
                        } else (a.reset = !1), (i = -1);
                    }
                  }
                },
                update:
                  ((r = function () {
                    return new Promise(function (e) {
                      u.forceUpdate(), e(a);
                    });
                  }),
                  function () {
                    return (
                      s ||
                        (s = new Promise(function (e) {
                          Promise.resolve().then(function () {
                            (s = void 0), e(r());
                          });
                        })),
                      s
                    );
                  }),
                destroy: function () {
                  d(), (c = !0);
                },
              };
            if (!Se(e, t)) return u;
            function d() {
              l.forEach(function (e) {
                return e();
              }),
                (l = []);
            }
            return (
              u.setOptions(n).then(function (e) {
                !c && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              u
            );
          };
        }
        var De = Oe(),
          je = Oe({ defaultModifiers: [re, Te, ne, L, xe, ye, Ee, J, we] }),
          Le = Oe({ defaultModifiers: [re, Te, ne, L] });
      },
      141: function (e, t, n) {
        e.exports = (function (e) {
          "use strict";
          const t = (function (e) {
              const t = Object.create(null, {
                [Symbol.toStringTag]: { value: "Module" },
              });
              if (e)
                for (const n in e)
                  if ("default" !== n) {
                    const i = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(
                      t,
                      n,
                      i.get ? i : { enumerable: !0, get: () => e[n] },
                    );
                  }
              return (t.default = e), Object.freeze(t);
            })(e),
            n = new Map(),
            i = {
              set(e, t, i) {
                n.has(e) || n.set(e, new Map());
                const r = n.get(e);
                r.has(t) || 0 === r.size
                  ? r.set(t, i)
                  : console.error(
                      `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`,
                    );
              },
              get: (e, t) => (n.has(e) && n.get(e).get(t)) || null,
              remove(e, t) {
                if (!n.has(e)) return;
                const i = n.get(e);
                i.delete(t), 0 === i.size && n.delete(e);
              },
            },
            r = "transitionend",
            o = (e) => (
              e &&
                window.CSS &&
                window.CSS.escape &&
                (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
              e
            ),
            s = (e) => {
              e.dispatchEvent(new Event(r));
            },
            a = (e) =>
              !(!e || "object" != typeof e) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            l = (e) =>
              a(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                  ? document.querySelector(o(e))
                  : null,
            c = (e) => {
              if (!a(e) || 0 === e.getClientRects().length) return !1;
              const t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1;
              }
              return t;
            },
            u = (e) =>
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled")),
            d = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot
                ? e
                : e.parentNode
                  ? d(e.parentNode)
                  : null;
            },
            f = () => {},
            h = (e) => {
              e.offsetHeight;
            },
            p = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            g = [],
            m = () => "rtl" === document.documentElement.dir,
            v = (e) => {
              var t;
              (t = () => {
                const t = p();
                if (t) {
                  const n = e.NAME,
                    i = t.fn[n];
                  (t.fn[n] = e.jQueryInterface),
                    (t.fn[n].Constructor = e),
                    (t.fn[n].noConflict = () => (
                      (t.fn[n] = i), e.jQueryInterface
                    ));
                }
              }),
                "loading" === document.readyState
                  ? (g.length ||
                      document.addEventListener("DOMContentLoaded", () => {
                        for (const e of g) e();
                      }),
                    g.push(t))
                  : t();
            },
            y = (e, t = [], n = e) => ("function" == typeof e ? e(...t) : n),
            b = (e, t, n = !0) => {
              if (!n) return void y(e);
              const i =
                ((e) => {
                  if (!e) return 0;
                  let { transitionDuration: t, transitionDelay: n } =
                    window.getComputedStyle(e);
                  const i = Number.parseFloat(t),
                    r = Number.parseFloat(n);
                  return i || r
                    ? ((t = t.split(",")[0]),
                      (n = n.split(",")[0]),
                      1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                    : 0;
                })(t) + 5;
              let o = !1;
              const a = ({ target: n }) => {
                n === t && ((o = !0), t.removeEventListener(r, a), y(e));
              };
              t.addEventListener(r, a),
                setTimeout(() => {
                  o || s(t);
                }, i);
            },
            _ = (e, t, n, i) => {
              const r = e.length;
              let o = e.indexOf(t);
              return -1 === o
                ? !n && i
                  ? e[r - 1]
                  : e[0]
                : ((o += n ? 1 : -1),
                  i && (o = (o + r) % r),
                  e[Math.max(0, Math.min(o, r - 1))]);
            },
            w = /[^.]*(?=\..*)\.|.*/,
            x = /\..*/,
            T = /::\d+$/,
            E = {};
          let C = 1;
          const A = { mouseenter: "mouseover", mouseleave: "mouseout" },
            k = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function S(e, t) {
            return (t && `${t}::${C++}`) || e.uidEvent || C++;
          }
          function O(e) {
            const t = S(e);
            return (e.uidEvent = t), (E[t] = E[t] || {}), E[t];
          }
          function D(e, t, n = null) {
            return Object.values(e).find(
              (e) => e.callable === t && e.delegationSelector === n,
            );
          }
          function j(e, t, n) {
            const i = "string" == typeof t,
              r = i ? n : t || n;
            let o = $(e);
            return k.has(o) || (o = e), [i, r, o];
          }
          function L(e, t, n, i, r) {
            if ("string" != typeof t || !e) return;
            let [o, s, a] = j(t, n, i);
            if (t in A) {
              const e = (e) =>
                function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              s = e(s);
            }
            const l = O(e),
              c = l[a] || (l[a] = {}),
              u = D(c, s, o ? n : null);
            if (u) return void (u.oneOff = u.oneOff && r);
            const d = S(s, t.replace(w, "")),
              f = o
                ? (function (e, t, n) {
                    return function i(r) {
                      const o = e.querySelectorAll(t);
                      for (
                        let { target: s } = r;
                        s && s !== this;
                        s = s.parentNode
                      )
                        for (const a of o)
                          if (a === s)
                            return (
                              M(r, { delegateTarget: s }),
                              i.oneOff && I.off(e, r.type, t, n),
                              n.apply(s, [r])
                            );
                    };
                  })(e, n, s)
                : (function (e, t) {
                    return function n(i) {
                      return (
                        M(i, { delegateTarget: e }),
                        n.oneOff && I.off(e, i.type, t),
                        t.apply(e, [i])
                      );
                    };
                  })(e, s);
            (f.delegationSelector = o ? n : null),
              (f.callable = s),
              (f.oneOff = r),
              (f.uidEvent = d),
              (c[d] = f),
              e.addEventListener(a, f, o);
          }
          function N(e, t, n, i, r) {
            const o = D(t[n], i, r);
            o &&
              (e.removeEventListener(n, o, Boolean(r)),
              delete t[n][o.uidEvent]);
          }
          function P(e, t, n, i) {
            const r = t[n] || {};
            for (const [o, s] of Object.entries(r))
              o.includes(i) && N(e, t, n, s.callable, s.delegationSelector);
          }
          function $(e) {
            return (e = e.replace(x, "")), A[e] || e;
          }
          const I = {
            on(e, t, n, i) {
              L(e, t, n, i, !1);
            },
            one(e, t, n, i) {
              L(e, t, n, i, !0);
            },
            off(e, t, n, i) {
              if ("string" != typeof t || !e) return;
              const [r, o, s] = j(t, n, i),
                a = s !== t,
                l = O(e),
                c = l[s] || {},
                u = t.startsWith(".");
              if (void 0 === o) {
                if (u) for (const n of Object.keys(l)) P(e, l, n, t.slice(1));
                for (const [n, i] of Object.entries(c)) {
                  const r = n.replace(T, "");
                  (a && !t.includes(r)) ||
                    N(e, l, s, i.callable, i.delegationSelector);
                }
              } else {
                if (!Object.keys(c).length) return;
                N(e, l, s, o, r ? n : null);
              }
            },
            trigger(e, t, n) {
              if ("string" != typeof t || !e) return null;
              const i = p();
              let r = null,
                o = !0,
                s = !0,
                a = !1;
              t !== $(t) &&
                i &&
                ((r = i.Event(t, n)),
                i(e).trigger(r),
                (o = !r.isPropagationStopped()),
                (s = !r.isImmediatePropagationStopped()),
                (a = r.isDefaultPrevented()));
              const l = M(new Event(t, { bubbles: o, cancelable: !0 }), n);
              return (
                a && l.preventDefault(),
                s && e.dispatchEvent(l),
                l.defaultPrevented && r && r.preventDefault(),
                l
              );
            },
          };
          function M(e, t = {}) {
            for (const [n, i] of Object.entries(t))
              try {
                e[n] = i;
              } catch (t) {
                Object.defineProperty(e, n, { configurable: !0, get: () => i });
              }
            return e;
          }
          function H(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function q(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
          }
          const F = {
            setDataAttribute(e, t, n) {
              e.setAttribute(`data-bs-${q(t)}`, n);
            },
            removeDataAttribute(e, t) {
              e.removeAttribute(`data-bs-${q(t)}`);
            },
            getDataAttributes(e) {
              if (!e) return {};
              const t = {},
                n = Object.keys(e.dataset).filter(
                  (e) => e.startsWith("bs") && !e.startsWith("bsConfig"),
                );
              for (const i of n) {
                let n = i.replace(/^bs/, "");
                (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                  (t[n] = H(e.dataset[i]));
              }
              return t;
            },
            getDataAttribute: (e, t) => H(e.getAttribute(`data-bs-${q(t)}`)),
          };
          class R {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!',
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(e, t) {
              const n = a(t) ? F.getDataAttribute(t, "config") : {};
              return {
                ...this.constructor.Default,
                ...("object" == typeof n ? n : {}),
                ...(a(t) ? F.getDataAttributes(t) : {}),
                ...("object" == typeof e ? e : {}),
              };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
              for (const [i, r] of Object.entries(t)) {
                const t = e[i],
                  o = a(t)
                    ? "element"
                    : null == (n = t)
                      ? `${n}`
                      : Object.prototype.toString
                          .call(n)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase();
                if (!new RegExp(r).test(o))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`,
                  );
              }
              var n;
            }
          }
          class W extends R {
            constructor(e, t) {
              super(),
                (e = l(e)) &&
                  ((this._element = e),
                  (this._config = this._getConfig(t)),
                  i.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              i.remove(this._element, this.constructor.DATA_KEY),
                I.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, t, n = !0) {
              b(e, t, n);
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(e) {
              return i.get(l(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
              return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
              );
            }
            static get VERSION() {
              return "5.3.3";
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
              return `${e}${this.EVENT_KEY}`;
            }
          }
          const B = (e) => {
              let t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                  !n.startsWith("#") &&
                  (n = `#${n.split("#")[1]}`),
                  (t = n && "#" !== n ? n.trim() : null);
              }
              return t
                ? t
                    .split(",")
                    .map((e) => o(e))
                    .join(",")
                : null;
            },
            z = {
              find: (e, t = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(t, e)),
              findOne: (e, t = document.documentElement) =>
                Element.prototype.querySelector.call(t, e),
              children: (e, t) =>
                [].concat(...e.children).filter((e) => e.matches(t)),
              parents(e, t) {
                const n = [];
                let i = e.parentNode.closest(t);
                for (; i; ) n.push(i), (i = i.parentNode.closest(t));
                return n;
              },
              prev(e, t) {
                let n = e.previousElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.previousElementSibling;
                }
                return [];
              },
              next(e, t) {
                let n = e.nextElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.nextElementSibling;
                }
                return [];
              },
              focusableChildren(e) {
                const t = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((e) => `${e}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(t, e).filter((e) => !u(e) && c(e));
              },
              getSelectorFromElement(e) {
                const t = B(e);
                return t && z.findOne(t) ? t : null;
              },
              getElementFromSelector(e) {
                const t = B(e);
                return t ? z.findOne(t) : null;
              },
              getMultipleElementsFromSelector(e) {
                const t = B(e);
                return t ? z.find(t) : [];
              },
            },
            V = (e, t = "hide") => {
              const n = `click.dismiss${e.EVENT_KEY}`,
                i = e.NAME;
              I.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
                if (
                  (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                  u(this))
                )
                  return;
                const r =
                  z.getElementFromSelector(this) || this.closest(`.${i}`);
                e.getOrCreateInstance(r)[t]();
              });
            },
            X = ".bs.alert",
            U = `close${X}`,
            Y = `closed${X}`;
          class Q extends W {
            static get NAME() {
              return "alert";
            }
            close() {
              if (I.trigger(this._element, U).defaultPrevented) return;
              this._element.classList.remove("show");
              const e = this._element.classList.contains("fade");
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                e,
              );
            }
            _destroyElement() {
              this._element.remove(),
                I.trigger(this._element, Y),
                this.dispose();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Q.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          V(Q, "close"), v(Q);
          const K = '[data-bs-toggle="button"]';
          class G extends W {
            static get NAME() {
              return "button";
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active"),
              );
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = G.getOrCreateInstance(this);
                "toggle" === e && t[e]();
              });
            }
          }
          I.on(document, "click.bs.button.data-api", K, (e) => {
            e.preventDefault();
            const t = e.target.closest(K);
            G.getOrCreateInstance(t).toggle();
          }),
            v(G);
          const J = ".bs.swipe",
            Z = `touchstart${J}`,
            ee = `touchmove${J}`,
            te = `touchend${J}`,
            ne = `pointerdown${J}`,
            ie = `pointerup${J}`,
            re = { endCallback: null, leftCallback: null, rightCallback: null },
            oe = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class se extends R {
            constructor(e, t) {
              super(),
                (this._element = e),
                e &&
                  se.isSupported() &&
                  ((this._config = this._getConfig(t)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = Boolean(window.PointerEvent)),
                  this._initEvents());
            }
            static get Default() {
              return re;
            }
            static get DefaultType() {
              return oe;
            }
            static get NAME() {
              return "swipe";
            }
            dispose() {
              I.off(this._element, J);
            }
            _start(e) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
                : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
              this._eventIsPointerPenTouch(e) &&
                (this._deltaX = e.clientX - this._deltaX),
                this._handleSwipe(),
                y(this._config.endCallback);
            }
            _move(e) {
              this._deltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const e = Math.abs(this._deltaX);
              if (e <= 40) return;
              const t = e / this._deltaX;
              (this._deltaX = 0),
                t &&
                  y(
                    t > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback,
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (I.on(this._element, ne, (e) => this._start(e)),
                  I.on(this._element, ie, (e) => this._end(e)),
                  this._element.classList.add("pointer-event"))
                : (I.on(this._element, Z, (e) => this._start(e)),
                  I.on(this._element, ee, (e) => this._move(e)),
                  I.on(this._element, te, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
              return (
                this._supportPointerEvents &&
                ("pen" === e.pointerType || "touch" === e.pointerType)
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const ae = ".bs.carousel",
            le = ".data-api",
            ce = "next",
            ue = "prev",
            de = "left",
            fe = "right",
            he = `slide${ae}`,
            pe = `slid${ae}`,
            ge = `keydown${ae}`,
            me = `mouseenter${ae}`,
            ve = `mouseleave${ae}`,
            ye = `dragstart${ae}`,
            be = `load${ae}${le}`,
            _e = `click${ae}${le}`,
            we = "carousel",
            xe = "active",
            Te = ".active",
            Ee = ".carousel-item",
            Ce = Te + Ee,
            Ae = { ArrowLeft: fe, ArrowRight: de },
            ke = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            Se = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class Oe extends W {
            constructor(e, t) {
              super(e, t),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = z.findOne(
                  ".carousel-indicators",
                  this._element,
                )),
                this._addEventListeners(),
                this._config.ride === we && this.cycle();
            }
            static get Default() {
              return ke;
            }
            static get DefaultType() {
              return Se;
            }
            static get NAME() {
              return "carousel";
            }
            next() {
              this._slide(ce);
            }
            nextWhenVisible() {
              !document.hidden && c(this._element) && this.next();
            }
            prev() {
              this._slide(ue);
            }
            pause() {
              this._isSliding && s(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval,
                ));
            }
            _maybeEnableCycle() {
              this._config.ride &&
                (this._isSliding
                  ? I.one(this._element, pe, () => this.cycle())
                  : this.cycle());
            }
            to(e) {
              const t = this._getItems();
              if (e > t.length - 1 || e < 0) return;
              if (this._isSliding)
                return void I.one(this._element, pe, () => this.to(e));
              const n = this._getItemIndex(this._getActive());
              if (n === e) return;
              const i = e > n ? ce : ue;
              this._slide(i, t[e]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
              return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
              this._config.keyboard &&
                I.on(this._element, ge, (e) => this._keydown(e)),
                "hover" === this._config.pause &&
                  (I.on(this._element, me, () => this.pause()),
                  I.on(this._element, ve, () => this._maybeEnableCycle())),
                this._config.touch &&
                  se.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const e of z.find(".carousel-item img", this._element))
                I.on(e, ye, (e) => e.preventDefault());
              const e = {
                leftCallback: () => this._slide(this._directionToOrder(de)),
                rightCallback: () => this._slide(this._directionToOrder(fe)),
                endCallback: () => {
                  "hover" === this._config.pause &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      500 + this._config.interval,
                    )));
                },
              };
              this._swipeHelper = new se(this._element, e);
            }
            _keydown(e) {
              if (/input|textarea/i.test(e.target.tagName)) return;
              const t = Ae[e.key];
              t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
              return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
              if (!this._indicatorsElement) return;
              const t = z.findOne(Te, this._indicatorsElement);
              t.classList.remove(xe), t.removeAttribute("aria-current");
              const n = z.findOne(
                `[data-bs-slide-to="${e}"]`,
                this._indicatorsElement,
              );
              n &&
                (n.classList.add(xe), n.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const e = this._activeElement || this._getActive();
              if (!e) return;
              const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e, t = null) {
              if (this._isSliding) return;
              const n = this._getActive(),
                i = e === ce,
                r = t || _(this._getItems(), n, i, this._config.wrap);
              if (r === n) return;
              const o = this._getItemIndex(r),
                s = (t) =>
                  I.trigger(this._element, t, {
                    relatedTarget: r,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(n),
                    to: o,
                  });
              if (s(he).defaultPrevented) return;
              if (!n || !r) return;
              const a = Boolean(this._interval);
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(o),
                (this._activeElement = r);
              const l = i ? "carousel-item-start" : "carousel-item-end",
                c = i ? "carousel-item-next" : "carousel-item-prev";
              r.classList.add(c),
                h(r),
                n.classList.add(l),
                r.classList.add(l),
                this._queueCallback(
                  () => {
                    r.classList.remove(l, c),
                      r.classList.add(xe),
                      n.classList.remove(xe, c, l),
                      (this._isSliding = !1),
                      s(pe);
                  },
                  n,
                  this._isAnimated(),
                ),
                a && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains("slide");
            }
            _getActive() {
              return z.findOne(Ce, this._element);
            }
            _getItems() {
              return z.find(Ee, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
              return m() ? (e === de ? ue : ce) : e === de ? ce : ue;
            }
            _orderToDirection(e) {
              return m() ? (e === ue ? de : fe) : e === ue ? fe : de;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Oe.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                  if ("string" == typeof e) {
                    if (
                      void 0 === t[e] ||
                      e.startsWith("_") ||
                      "constructor" === e
                    )
                      throw new TypeError(`No method named "${e}"`);
                    t[e]();
                  }
                } else t.to(e);
              });
            }
          }
          I.on(
            document,
            _e,
            "[data-bs-slide], [data-bs-slide-to]",
            function (e) {
              const t = z.getElementFromSelector(this);
              if (!t || !t.classList.contains(we)) return;
              e.preventDefault();
              const n = Oe.getOrCreateInstance(t),
                i = this.getAttribute("data-bs-slide-to");
              return i
                ? (n.to(i), void n._maybeEnableCycle())
                : "next" === F.getDataAttribute(this, "slide")
                  ? (n.next(), void n._maybeEnableCycle())
                  : (n.prev(), void n._maybeEnableCycle());
            },
          ),
            I.on(window, be, () => {
              const e = z.find('[data-bs-ride="carousel"]');
              for (const t of e) Oe.getOrCreateInstance(t);
            }),
            v(Oe);
          const De = ".bs.collapse",
            je = `show${De}`,
            Le = `shown${De}`,
            Ne = `hide${De}`,
            Pe = `hidden${De}`,
            $e = `click${De}.data-api`,
            Ie = "show",
            Me = "collapse",
            He = "collapsing",
            qe = `:scope .${Me} .${Me}`,
            Fe = '[data-bs-toggle="collapse"]',
            Re = { parent: null, toggle: !0 },
            We = { parent: "(null|element)", toggle: "boolean" };
          class Be extends W {
            constructor(e, t) {
              super(e, t),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const n = z.find(Fe);
              for (const e of n) {
                const t = z.getSelectorFromElement(e),
                  n = z.find(t).filter((e) => e === this._element);
                null !== t && n.length && this._triggerArray.push(e);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown(),
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return Re;
            }
            static get DefaultType() {
              return We;
            }
            static get NAME() {
              return "collapse";
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let e = [];
              if (
                (this._config.parent &&
                  (e = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing",
                  )
                    .filter((e) => e !== this._element)
                    .map((e) => Be.getOrCreateInstance(e, { toggle: !1 }))),
                e.length && e[0]._isTransitioning)
              )
                return;
              if (I.trigger(this._element, je).defaultPrevented) return;
              for (const t of e) t.hide();
              const t = this._getDimension();
              this._element.classList.remove(Me),
                this._element.classList.add(He),
                (this._element.style[t] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(He),
                    this._element.classList.add(Me, Ie),
                    (this._element.style[t] = ""),
                    I.trigger(this._element, Le);
                },
                this._element,
                !0,
              ),
                (this._element.style[t] = `${this._element[n]}px`);
            }
            hide() {
              if (this._isTransitioning || !this._isShown()) return;
              if (I.trigger(this._element, Ne).defaultPrevented) return;
              const e = this._getDimension();
              (this._element.style[e] =
                `${this._element.getBoundingClientRect()[e]}px`),
                h(this._element),
                this._element.classList.add(He),
                this._element.classList.remove(Me, Ie);
              for (const e of this._triggerArray) {
                const t = z.getElementFromSelector(e);
                t &&
                  !this._isShown(t) &&
                  this._addAriaAndCollapsedClass([e], !1);
              }
              (this._isTransitioning = !0),
                (this._element.style[e] = ""),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(He),
                      this._element.classList.add(Me),
                      I.trigger(this._element, Pe);
                  },
                  this._element,
                  !0,
                );
            }
            _isShown(e = this._element) {
              return e.classList.contains(Ie);
            }
            _configAfterMerge(e) {
              return (
                (e.toggle = Boolean(e.toggle)), (e.parent = l(e.parent)), e
              );
            }
            _getDimension() {
              return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const e = this._getFirstLevelChildren(Fe);
              for (const t of e) {
                const e = z.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e));
              }
            }
            _getFirstLevelChildren(e) {
              const t = z.find(qe, this._config.parent);
              return z
                .find(e, this._config.parent)
                .filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
              if (e.length)
                for (const n of e)
                  n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
              const t = {};
              return (
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                this.each(function () {
                  const n = Be.getOrCreateInstance(this, t);
                  if ("string" == typeof e) {
                    if (void 0 === n[e])
                      throw new TypeError(`No method named "${e}"`);
                    n[e]();
                  }
                })
              );
            }
          }
          I.on(document, $e, Fe, function (e) {
            ("A" === e.target.tagName ||
              (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
              e.preventDefault();
            for (const e of z.getMultipleElementsFromSelector(this))
              Be.getOrCreateInstance(e, { toggle: !1 }).toggle();
          }),
            v(Be);
          const ze = "dropdown",
            Ve = ".bs.dropdown",
            Xe = ".data-api",
            Ue = "ArrowUp",
            Ye = "ArrowDown",
            Qe = `hide${Ve}`,
            Ke = `hidden${Ve}`,
            Ge = `show${Ve}`,
            Je = `shown${Ve}`,
            Ze = `click${Ve}${Xe}`,
            et = `keydown${Ve}${Xe}`,
            tt = `keyup${Ve}${Xe}`,
            nt = "show",
            it = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            rt = `${it}.${nt}`,
            ot = ".dropdown-menu",
            st = m() ? "top-end" : "top-start",
            at = m() ? "top-start" : "top-end",
            lt = m() ? "bottom-end" : "bottom-start",
            ct = m() ? "bottom-start" : "bottom-end",
            ut = m() ? "left-start" : "right-start",
            dt = m() ? "right-start" : "left-start",
            ft = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            ht = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class pt extends W {
            constructor(e, t) {
              super(e, t),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  z.next(this._element, ot)[0] ||
                  z.prev(this._element, ot)[0] ||
                  z.findOne(ot, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return ft;
            }
            static get DefaultType() {
              return ht;
            }
            static get NAME() {
              return ze;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (u(this._element) || this._isShown()) return;
              const e = { relatedTarget: this._element };
              if (!I.trigger(this._element, Ge, e).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const e of [].concat(...document.body.children))
                    I.on(e, "mouseover", f);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(nt),
                  this._element.classList.add(nt),
                  I.trigger(this._element, Je, e);
              }
            }
            hide() {
              if (u(this._element) || !this._isShown()) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(e) {
              if (!I.trigger(this._element, Qe, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const e of [].concat(...document.body.children))
                    I.off(e, "mouseover", f);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(nt),
                  this._element.classList.remove(nt),
                  this._element.setAttribute("aria-expanded", "false"),
                  F.removeDataAttribute(this._menu, "popper"),
                  I.trigger(this._element, Ke, e);
              }
            }
            _getConfig(e) {
              if (
                "object" == typeof (e = super._getConfig(e)).reference &&
                !a(e.reference) &&
                "function" != typeof e.reference.getBoundingClientRect
              )
                throw new TypeError(
                  `${ze.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
                );
              return e;
            }
            _createPopper() {
              if (void 0 === t)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)",
                );
              let e = this._element;
              "parent" === this._config.reference
                ? (e = this._parent)
                : a(this._config.reference)
                  ? (e = l(this._config.reference))
                  : "object" == typeof this._config.reference &&
                    (e = this._config.reference);
              const n = this._getPopperConfig();
              this._popper = t.createPopper(e, this._menu, n);
            }
            _isShown() {
              return this._menu.classList.contains(nt);
            }
            _getPlacement() {
              const e = this._parent;
              if (e.classList.contains("dropend")) return ut;
              if (e.classList.contains("dropstart")) return dt;
              if (e.classList.contains("dropup-center")) return "top";
              if (e.classList.contains("dropdown-center")) return "bottom";
              const t =
                "end" ===
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim();
              return e.classList.contains("dropup")
                ? t
                  ? at
                  : st
                : t
                  ? ct
                  : lt;
            }
            _detectNavbar() {
              return null !== this._element.closest(".navbar");
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                  ? (t) => e(t, this._element)
                  : e;
            }
            _getPopperConfig() {
              const e = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || "static" === this._config.display) &&
                  (F.setDataAttribute(this._menu, "popper", "static"),
                  (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...e, ...y(this._config.popperConfig, [e]) }
              );
            }
            _selectMenuItem({ key: e, target: t }) {
              const n = z
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu,
                )
                .filter((e) => c(e));
              n.length && _(n, t, e === Ye, !n.includes(t)).focus();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = pt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
            static clearMenus(e) {
              if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
                return;
              const t = z.find(rt);
              for (const n of t) {
                const t = pt.getInstance(n);
                if (!t || !1 === t._config.autoClose) continue;
                const i = e.composedPath(),
                  r = i.includes(t._menu);
                if (
                  i.includes(t._element) ||
                  ("inside" === t._config.autoClose && !r) ||
                  ("outside" === t._config.autoClose && r)
                )
                  continue;
                if (
                  t._menu.contains(e.target) &&
                  (("keyup" === e.type && "Tab" === e.key) ||
                    /input|select|option|textarea|form/i.test(e.target.tagName))
                )
                  continue;
                const o = { relatedTarget: t._element };
                "click" === e.type && (o.clickEvent = e), t._completeHide(o);
              }
            }
            static dataApiKeydownHandler(e) {
              const t = /input|textarea/i.test(e.target.tagName),
                n = "Escape" === e.key,
                i = [Ue, Ye].includes(e.key);
              if (!i && !n) return;
              if (t && !n) return;
              e.preventDefault();
              const r = this.matches(it)
                  ? this
                  : z.prev(this, it)[0] ||
                    z.next(this, it)[0] ||
                    z.findOne(it, e.delegateTarget.parentNode),
                o = pt.getOrCreateInstance(r);
              if (i)
                return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
              o._isShown() && (e.stopPropagation(), o.hide(), r.focus());
            }
          }
          I.on(document, et, it, pt.dataApiKeydownHandler),
            I.on(document, et, ot, pt.dataApiKeydownHandler),
            I.on(document, Ze, pt.clearMenus),
            I.on(document, tt, pt.clearMenus),
            I.on(document, Ze, it, function (e) {
              e.preventDefault(), pt.getOrCreateInstance(this).toggle();
            }),
            v(pt);
          const gt = "backdrop",
            mt = "show",
            vt = `mousedown.bs.${gt}`,
            yt = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            bt = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class _t extends R {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return yt;
            }
            static get DefaultType() {
              return bt;
            }
            static get NAME() {
              return gt;
            }
            show(e) {
              if (!this._config.isVisible) return void y(e);
              this._append();
              const t = this._getElement();
              this._config.isAnimated && h(t),
                t.classList.add(mt),
                this._emulateAnimation(() => {
                  y(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(mt),
                  this._emulateAnimation(() => {
                    this.dispose(), y(e);
                  }))
                : y(e);
            }
            dispose() {
              this._isAppended &&
                (I.off(this._element, vt),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add("fade"),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = l(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const e = this._getElement();
              this._config.rootElement.append(e),
                I.on(e, vt, () => {
                  y(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              b(e, this._getElement(), this._config.isAnimated);
            }
          }
          const wt = ".bs.focustrap",
            xt = `focusin${wt}`,
            Tt = `keydown.tab${wt}`,
            Et = "backward",
            Ct = { autofocus: !0, trapElement: null },
            At = { autofocus: "boolean", trapElement: "element" };
          class kt extends R {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return Ct;
            }
            static get DefaultType() {
              return At;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                I.off(document, wt),
                I.on(document, xt, (e) => this._handleFocusin(e)),
                I.on(document, Tt, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), I.off(document, wt));
            }
            _handleFocusin(e) {
              const { trapElement: t } = this._config;
              if (
                e.target === document ||
                e.target === t ||
                t.contains(e.target)
              )
                return;
              const n = z.focusableChildren(t);
              0 === n.length
                ? t.focus()
                : this._lastTabNavDirection === Et
                  ? n[n.length - 1].focus()
                  : n[0].focus();
            }
            _handleKeydown(e) {
              "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? Et : "forward");
            }
          }
          const St = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Ot = ".sticky-top",
            Dt = "padding-right",
            jt = "margin-right";
          class Lt {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, Dt, (t) => t + e),
                this._setElementAttributes(St, Dt, (t) => t + e),
                this._setElementAttributes(Ot, jt, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Dt),
                this._resetElementAttributes(St, Dt),
                this._resetElementAttributes(Ot, jt);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
              const i = this.getWidth();
              this._applyManipulationCallback(e, (e) => {
                if (
                  e !== this._element &&
                  window.innerWidth > e.clientWidth + i
                )
                  return;
                this._saveInitialAttribute(e, t);
                const r = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(r))}px`);
              });
            }
            _saveInitialAttribute(e, t) {
              const n = e.style.getPropertyValue(t);
              n && F.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, t) {
              this._applyManipulationCallback(e, (e) => {
                const n = F.getDataAttribute(e, t);
                null !== n
                  ? (F.removeDataAttribute(e, t), e.style.setProperty(t, n))
                  : e.style.removeProperty(t);
              });
            }
            _applyManipulationCallback(e, t) {
              if (a(e)) t(e);
              else for (const n of z.find(e, this._element)) t(n);
            }
          }
          const Nt = ".bs.modal",
            Pt = `hide${Nt}`,
            $t = `hidePrevented${Nt}`,
            It = `hidden${Nt}`,
            Mt = `show${Nt}`,
            Ht = `shown${Nt}`,
            qt = `resize${Nt}`,
            Ft = `click.dismiss${Nt}`,
            Rt = `mousedown.dismiss${Nt}`,
            Wt = `keydown.dismiss${Nt}`,
            Bt = `click${Nt}.data-api`,
            zt = "modal-open",
            Vt = "show",
            Xt = "modal-static",
            Ut = { backdrop: !0, focus: !0, keyboard: !0 },
            Yt = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class Qt extends W {
            constructor(e, t) {
              super(e, t),
                (this._dialog = z.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Lt()),
                this._addEventListeners();
            }
            static get Default() {
              return Ut;
            }
            static get DefaultType() {
              return Yt;
            }
            static get NAME() {
              return "modal";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                I.trigger(this._element, Mt, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(zt),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (I.trigger(this._element, Pt).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(Vt),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated(),
                  )));
            }
            dispose() {
              I.off(window, Nt),
                I.off(this._dialog, Nt),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new _t({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new kt({ trapElement: this._element });
            }
            _showElement(e) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const t = z.findOne(".modal-body", this._dialog);
              t && (t.scrollTop = 0),
                h(this._element),
                this._element.classList.add(Vt),
                this._queueCallback(
                  () => {
                    this._config.focus && this._focustrap.activate(),
                      (this._isTransitioning = !1),
                      I.trigger(this._element, Ht, { relatedTarget: e });
                  },
                  this._dialog,
                  this._isAnimated(),
                );
            }
            _addEventListeners() {
              I.on(this._element, Wt, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition());
              }),
                I.on(window, qt, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                I.on(this._element, Rt, (e) => {
                  I.one(this._element, Ft, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
                      ("static" !== this._config.backdrop
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(zt),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    I.trigger(this._element, It);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (I.trigger(this._element, $t).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._element.style.overflowY;
              "hidden" === t ||
                this._element.classList.contains(Xt) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(Xt),
                this._queueCallback(() => {
                  this._element.classList.remove(Xt),
                    this._queueCallback(() => {
                      this._element.style.overflowY = t;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
              if (n && !e) {
                const e = m() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`;
              }
              if (!n && e) {
                const e = m() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const n = Qt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                  n[e](t);
                }
              });
            }
          }
          I.on(document, Bt, '[data-bs-toggle="modal"]', function (e) {
            const t = z.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              I.one(t, Mt, (e) => {
                e.defaultPrevented ||
                  I.one(t, It, () => {
                    c(this) && this.focus();
                  });
              });
            const n = z.findOne(".modal.show");
            n && Qt.getInstance(n).hide(),
              Qt.getOrCreateInstance(t).toggle(this);
          }),
            V(Qt),
            v(Qt);
          const Kt = ".bs.offcanvas",
            Gt = ".data-api",
            Jt = `load${Kt}${Gt}`,
            Zt = "show",
            en = "showing",
            tn = "hiding",
            nn = ".offcanvas.show",
            rn = `show${Kt}`,
            on = `shown${Kt}`,
            sn = `hide${Kt}`,
            an = `hidePrevented${Kt}`,
            ln = `hidden${Kt}`,
            cn = `resize${Kt}`,
            un = `click${Kt}${Gt}`,
            dn = `keydown.dismiss${Kt}`,
            fn = { backdrop: !0, keyboard: !0, scroll: !1 },
            hn = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class pn extends W {
            constructor(e, t) {
              super(e, t),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return fn;
            }
            static get DefaultType() {
              return hn;
            }
            static get NAME() {
              return "offcanvas";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                I.trigger(this._element, rn, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new Lt().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(en),
                this._queueCallback(
                  () => {
                    (this._config.scroll && !this._config.backdrop) ||
                      this._focustrap.activate(),
                      this._element.classList.add(Zt),
                      this._element.classList.remove(en),
                      I.trigger(this._element, on, { relatedTarget: e });
                  },
                  this._element,
                  !0,
                ));
            }
            hide() {
              this._isShown &&
                (I.trigger(this._element, sn).defaultPrevented ||
                  (this._focustrap.deactivate(),
                  this._element.blur(),
                  (this._isShown = !1),
                  this._element.classList.add(tn),
                  this._backdrop.hide(),
                  this._queueCallback(
                    () => {
                      this._element.classList.remove(Zt, tn),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new Lt().reset(),
                        I.trigger(this._element, ln);
                    },
                    this._element,
                    !0,
                  )));
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const e = Boolean(this._config.backdrop);
              return new _t({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e
                  ? () => {
                      "static" !== this._config.backdrop
                        ? this.hide()
                        : I.trigger(this._element, an);
                    }
                  : null,
              });
            }
            _initializeFocusTrap() {
              return new kt({ trapElement: this._element });
            }
            _addEventListeners() {
              I.on(this._element, dn, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : I.trigger(this._element, an));
              });
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = pn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          I.on(document, un, '[data-bs-toggle="offcanvas"]', function (e) {
            const t = z.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              u(this))
            )
              return;
            I.one(t, ln, () => {
              c(this) && this.focus();
            });
            const n = z.findOne(nn);
            n && n !== t && pn.getInstance(n).hide(),
              pn.getOrCreateInstance(t).toggle(this);
          }),
            I.on(window, Jt, () => {
              for (const e of z.find(nn)) pn.getOrCreateInstance(e).show();
            }),
            I.on(window, cn, () => {
              for (const e of z.find(
                "[aria-modal][class*=show][class*=offcanvas-]",
              ))
                "fixed" !== getComputedStyle(e).position &&
                  pn.getOrCreateInstance(e).hide();
            }),
            V(pn),
            v(pn);
          const gn = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              dd: [],
              div: [],
              dl: [],
              dt: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            mn = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            vn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            yn = (e, t) => {
              const n = e.nodeName.toLowerCase();
              return t.includes(n)
                ? !mn.has(n) || Boolean(vn.test(e.nodeValue))
                : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
            },
            bn = {
              allowList: gn,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            _n = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            wn = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class xn extends R {
            constructor(e) {
              super(), (this._config = this._getConfig(e));
            }
            static get Default() {
              return bn;
            }
            static get DefaultType() {
              return _n;
            }
            static get NAME() {
              return "TemplateFactory";
            }
            getContent() {
              return Object.values(this._config.content)
                .map((e) => this._resolvePossibleFunction(e))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(e) {
              return (
                this._checkContent(e),
                (this._config.content = { ...this._config.content, ...e }),
                this
              );
            }
            toHtml() {
              const e = document.createElement("div");
              e.innerHTML = this._maybeSanitize(this._config.template);
              for (const [t, n] of Object.entries(this._config.content))
                this._setContent(e, n, t);
              const t = e.children[0],
                n = this._resolvePossibleFunction(this._config.extraClass);
              return n && t.classList.add(...n.split(" ")), t;
            }
            _typeCheckConfig(e) {
              super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
              for (const [t, n] of Object.entries(e))
                super._typeCheckConfig({ selector: t, entry: n }, wn);
            }
            _setContent(e, t, n) {
              const i = z.findOne(n, e);
              i &&
                ((t = this._resolvePossibleFunction(t))
                  ? a(t)
                    ? this._putElementInTemplate(l(t), i)
                    : this._config.html
                      ? (i.innerHTML = this._maybeSanitize(t))
                      : (i.textContent = t)
                  : i.remove());
            }
            _maybeSanitize(e) {
              return this._config.sanitize
                ? (function (e, t, n) {
                    if (!e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    const i = new window.DOMParser().parseFromString(
                        e,
                        "text/html",
                      ),
                      r = [].concat(...i.body.querySelectorAll("*"));
                    for (const e of r) {
                      const n = e.nodeName.toLowerCase();
                      if (!Object.keys(t).includes(n)) {
                        e.remove();
                        continue;
                      }
                      const i = [].concat(...e.attributes),
                        r = [].concat(t["*"] || [], t[n] || []);
                      for (const t of i)
                        yn(t, r) || e.removeAttribute(t.nodeName);
                    }
                    return i.body.innerHTML;
                  })(e, this._config.allowList, this._config.sanitizeFn)
                : e;
            }
            _resolvePossibleFunction(e) {
              return y(e, [this]);
            }
            _putElementInTemplate(e, t) {
              if (this._config.html)
                return (t.innerHTML = ""), void t.append(e);
              t.textContent = e.textContent;
            }
          }
          const Tn = new Set(["sanitize", "allowList", "sanitizeFn"]),
            En = "fade",
            Cn = "show",
            An = ".modal",
            kn = "hide.bs.modal",
            Sn = "hover",
            On = "focus",
            Dn = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: m() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: m() ? "right" : "left",
            },
            jn = {
              allowList: gn,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            Ln = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class Nn extends W {
            constructor(e, n) {
              if (void 0 === t)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org)",
                );
              super(e, n),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return jn;
            }
            static get DefaultType() {
              return Ln;
            }
            static get NAME() {
              return "tooltip";
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              this._isEnabled &&
                ((this._activeTrigger.click = !this._activeTrigger.click),
                this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
              clearTimeout(this._timeout),
                I.off(this._element.closest(An), kn, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title"),
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
              if (!this._isWithContent() || !this._isEnabled) return;
              const e = I.trigger(
                  this._element,
                  this.constructor.eventName("show"),
                ),
                t = (
                  d(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (e.defaultPrevented || !t) return;
              this._disposePopper();
              const n = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                n.getAttribute("id"),
              );
              const { container: i } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip,
                ) ||
                  (i.append(n),
                  I.trigger(
                    this._element,
                    this.constructor.eventName("inserted"),
                  )),
                (this._popper = this._createPopper(n)),
                n.classList.add(Cn),
                "ontouchstart" in document.documentElement)
              )
                for (const e of [].concat(...document.body.children))
                  I.on(e, "mouseover", f);
              this._queueCallback(
                () => {
                  I.trigger(this._element, this.constructor.eventName("shown")),
                    !1 === this._isHovered && this._leave(),
                    (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated(),
              );
            }
            hide() {
              if (
                this._isShown() &&
                !I.trigger(this._element, this.constructor.eventName("hide"))
                  .defaultPrevented
              ) {
                if (
                  (this._getTipElement().classList.remove(Cn),
                  "ontouchstart" in document.documentElement)
                )
                  for (const e of [].concat(...document.body.children))
                    I.off(e, "mouseover", f);
                (this._activeTrigger.click = !1),
                  (this._activeTrigger[On] = !1),
                  (this._activeTrigger[Sn] = !1),
                  (this._isHovered = null),
                  this._queueCallback(
                    () => {
                      this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        I.trigger(
                          this._element,
                          this.constructor.eventName("hidden"),
                        ));
                    },
                    this.tip,
                    this._isAnimated(),
                  );
              }
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return Boolean(this._getTitle());
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate(),
                  )),
                this.tip
              );
            }
            _createTipElement(e) {
              const t = this._getTemplateFactory(e).toHtml();
              if (!t) return null;
              t.classList.remove(En, Cn),
                t.classList.add(`bs-${this.constructor.NAME}-auto`);
              const n = ((e) => {
                do {
                  e += Math.floor(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
              })(this.constructor.NAME).toString();
              return (
                t.setAttribute("id", n),
                this._isAnimated() && t.classList.add(En),
                t
              );
            }
            setContent(e) {
              (this._newContent = e),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(e)
                  : (this._templateFactory = new xn({
                      ...this._config,
                      content: e,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass,
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(e) {
              return this.constructor.getOrCreateInstance(
                e.delegateTarget,
                this._getDelegateConfig(),
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(En))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(Cn);
            }
            _createPopper(e) {
              const n = y(this._config.placement, [this, e, this._element]),
                i = Dn[n.toUpperCase()];
              return t.createPopper(this._element, e, this._getPopperConfig(i));
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                  ? (t) => e(t, this._element)
                  : e;
            }
            _resolvePossibleFunction(e) {
              return y(e, [this._element]);
            }
            _getPopperConfig(e) {
              const t = {
                placement: e,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: { element: `.${this.constructor.NAME}-arrow` },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (e) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        e.state.placement,
                      );
                    },
                  },
                ],
              };
              return { ...t, ...y(this._config.popperConfig, [t]) };
            }
            _setListeners() {
              const e = this._config.trigger.split(" ");
              for (const t of e)
                if ("click" === t)
                  I.on(
                    this._element,
                    this.constructor.eventName("click"),
                    this._config.selector,
                    (e) => {
                      this._initializeOnDelegatedTarget(e).toggle();
                    },
                  );
                else if ("manual" !== t) {
                  const e =
                      t === Sn
                        ? this.constructor.eventName("mouseenter")
                        : this.constructor.eventName("focusin"),
                    n =
                      t === Sn
                        ? this.constructor.eventName("mouseleave")
                        : this.constructor.eventName("focusout");
                  I.on(this._element, e, this._config.selector, (e) => {
                    const t = this._initializeOnDelegatedTarget(e);
                    (t._activeTrigger["focusin" === e.type ? On : Sn] = !0),
                      t._enter();
                  }),
                    I.on(this._element, n, this._config.selector, (e) => {
                      const t = this._initializeOnDelegatedTarget(e);
                      (t._activeTrigger["focusout" === e.type ? On : Sn] =
                        t._element.contains(e.relatedTarget)),
                        t._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                I.on(this._element.closest(An), kn, this._hideModalHandler);
            }
            _fixTitle() {
              const e = this._element.getAttribute("title");
              e &&
                (this._element.getAttribute("aria-label") ||
                  this._element.textContent.trim() ||
                  this._element.setAttribute("aria-label", e),
                this._element.setAttribute("data-bs-original-title", e),
                this._element.removeAttribute("title"));
            }
            _enter() {
              this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                    this._isHovered && this.show();
                  }, this._config.delay.show));
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
              const t = F.getDataAttributes(this._element);
              for (const e of Object.keys(t)) Tn.has(e) && delete t[e];
              return (
                (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return (
                (e.container =
                  !1 === e.container ? document.body : l(e.container)),
                "number" == typeof e.delay &&
                  (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                  (e.content = e.content.toString()),
                e
              );
            }
            _getDelegateConfig() {
              const e = {};
              for (const [t, n] of Object.entries(this._config))
                this.constructor.Default[t] !== n && (e[t] = n);
              return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Nn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          v(Nn);
          const Pn = {
              ...Nn.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            $n = {
              ...Nn.DefaultType,
              content: "(null|string|element|function)",
            };
          class In extends Nn {
            static get Default() {
              return Pn;
            }
            static get DefaultType() {
              return $n;
            }
            static get NAME() {
              return "popover";
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
              };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = In.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          v(In);
          const Mn = ".bs.scrollspy",
            Hn = `activate${Mn}`,
            qn = `click${Mn}`,
            Fn = `load${Mn}.data-api`,
            Rn = "active",
            Wn = "[href]",
            Bn = ".nav-link",
            zn = `${Bn}, .nav-item > ${Bn}, .list-group-item`,
            Vn = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            Xn = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class Un extends W {
            constructor(e, t) {
              super(e, t),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  "visible" === getComputedStyle(this._element).overflowY
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return Vn;
            }
            static get DefaultType() {
              return Xn;
            }
            static get NAME() {
              return "scrollspy";
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const e of this._observableSections.values())
                this._observer.observe(e);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
              return (
                (e.target = l(e.target) || document.body),
                (e.rootMargin = e.offset
                  ? `${e.offset}px 0px -30%`
                  : e.rootMargin),
                "string" == typeof e.threshold &&
                  (e.threshold = e.threshold
                    .split(",")
                    .map((e) => Number.parseFloat(e))),
                e
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (I.off(this._config.target, qn),
                I.on(this._config.target, qn, Wn, (e) => {
                  const t = this._observableSections.get(e.target.hash);
                  if (t) {
                    e.preventDefault();
                    const n = this._rootElement || window,
                      i = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo)
                      return void n.scrollTo({ top: i, behavior: "smooth" });
                    n.scrollTop = i;
                  }
                }));
            }
            _getNewObserver() {
              const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (e) => this._observerCallback(e),
                e,
              );
            }
            _observerCallback(e) {
              const t = (e) => this._targetLinks.get(`#${e.target.id}`),
                n = (e) => {
                  (this._previousScrollData.visibleEntryTop =
                    e.target.offsetTop),
                    this._process(t(e));
                },
                i = (this._rootElement || document.documentElement).scrollTop,
                r = i >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = i;
              for (const o of e) {
                if (!o.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(t(o));
                  continue;
                }
                const e =
                  o.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (r && e) {
                  if ((n(o), !i)) return;
                } else r || e || n(o);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const e = z.find(Wn, this._config.target);
              for (const t of e) {
                if (!t.hash || u(t)) continue;
                const e = z.findOne(decodeURI(t.hash), this._element);
                c(e) &&
                  (this._targetLinks.set(decodeURI(t.hash), t),
                  this._observableSections.set(t.hash, e));
              }
            }
            _process(e) {
              this._activeTarget !== e &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = e),
                e.classList.add(Rn),
                this._activateParents(e),
                I.trigger(this._element, Hn, { relatedTarget: e }));
            }
            _activateParents(e) {
              if (e.classList.contains("dropdown-item"))
                z.findOne(
                  ".dropdown-toggle",
                  e.closest(".dropdown"),
                ).classList.add(Rn);
              else
                for (const t of z.parents(e, ".nav, .list-group"))
                  for (const e of z.prev(t, zn)) e.classList.add(Rn);
            }
            _clearActiveClass(e) {
              e.classList.remove(Rn);
              const t = z.find(`${Wn}.${Rn}`, e);
              for (const e of t) e.classList.remove(Rn);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Un.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          I.on(window, Fn, () => {
            for (const e of z.find('[data-bs-spy="scroll"]'))
              Un.getOrCreateInstance(e);
          }),
            v(Un);
          const Yn = ".bs.tab",
            Qn = `hide${Yn}`,
            Kn = `hidden${Yn}`,
            Gn = `show${Yn}`,
            Jn = `shown${Yn}`,
            Zn = `click${Yn}`,
            ei = `keydown${Yn}`,
            ti = `load${Yn}`,
            ni = "ArrowLeft",
            ii = "ArrowRight",
            ri = "ArrowUp",
            oi = "ArrowDown",
            si = "Home",
            ai = "End",
            li = "active",
            ci = "fade",
            ui = "show",
            di = ".dropdown-toggle",
            fi = `:not(${di})`,
            hi =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            pi = `.nav-link${fi}, .list-group-item${fi}, [role="tab"]${fi}, ${hi}`,
            gi = `.${li}[data-bs-toggle="tab"], .${li}[data-bs-toggle="pill"], .${li}[data-bs-toggle="list"]`;
          class mi extends W {
            constructor(e) {
              super(e),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]',
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren(),
                  ),
                  I.on(this._element, ei, (e) => this._keydown(e)));
            }
            static get NAME() {
              return "tab";
            }
            show() {
              const e = this._element;
              if (this._elemIsActive(e)) return;
              const t = this._getActiveElem(),
                n = t ? I.trigger(t, Qn, { relatedTarget: e }) : null;
              I.trigger(e, Gn, { relatedTarget: t }).defaultPrevented ||
                (n && n.defaultPrevented) ||
                (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
              e &&
                (e.classList.add(li),
                this._activate(z.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    "tab" === e.getAttribute("role")
                      ? (e.removeAttribute("tabindex"),
                        e.setAttribute("aria-selected", !0),
                        this._toggleDropDown(e, !0),
                        I.trigger(e, Jn, { relatedTarget: t }))
                      : e.classList.add(ui);
                  },
                  e,
                  e.classList.contains(ci),
                ));
            }
            _deactivate(e, t) {
              e &&
                (e.classList.remove(li),
                e.blur(),
                this._deactivate(z.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    "tab" === e.getAttribute("role")
                      ? (e.setAttribute("aria-selected", !1),
                        e.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(e, !1),
                        I.trigger(e, Kn, { relatedTarget: t }))
                      : e.classList.remove(ui);
                  },
                  e,
                  e.classList.contains(ci),
                ));
            }
            _keydown(e) {
              if (![ni, ii, ri, oi, si, ai].includes(e.key)) return;
              e.stopPropagation(), e.preventDefault();
              const t = this._getChildren().filter((e) => !u(e));
              let n;
              if ([si, ai].includes(e.key))
                n = t[e.key === si ? 0 : t.length - 1];
              else {
                const i = [ii, oi].includes(e.key);
                n = _(t, e.target, i, !0);
              }
              n &&
                (n.focus({ preventScroll: !0 }),
                mi.getOrCreateInstance(n).show());
            }
            _getChildren() {
              return z.find(pi, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((e) => this._elemIsActive(e)) || null
              );
            }
            _setInitialAttributes(e, t) {
              this._setAttributeIfNotExists(e, "role", "tablist");
              for (const e of t) this._setInitialAttributesOnChild(e);
            }
            _setInitialAttributesOnChild(e) {
              e = this._getInnerElement(e);
              const t = this._elemIsActive(e),
                n = this._getOuterElement(e);
              e.setAttribute("aria-selected", t),
                n !== e &&
                  this._setAttributeIfNotExists(n, "role", "presentation"),
                t || e.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(e, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
              const t = z.getElementFromSelector(e);
              t &&
                (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                e.id &&
                  this._setAttributeIfNotExists(
                    t,
                    "aria-labelledby",
                    `${e.id}`,
                  ));
            }
            _toggleDropDown(e, t) {
              const n = this._getOuterElement(e);
              if (!n.classList.contains("dropdown")) return;
              const i = (e, i) => {
                const r = z.findOne(e, n);
                r && r.classList.toggle(i, t);
              };
              i(di, li),
                i(".dropdown-menu", ui),
                n.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, n) {
              e.hasAttribute(t) || e.setAttribute(t, n);
            }
            _elemIsActive(e) {
              return e.classList.contains(li);
            }
            _getInnerElement(e) {
              return e.matches(pi) ? e : z.findOne(pi, e);
            }
            _getOuterElement(e) {
              return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = mi.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          I.on(document, Zn, hi, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              u(this) || mi.getOrCreateInstance(this).show();
          }),
            I.on(window, ti, () => {
              for (const e of z.find(gi)) mi.getOrCreateInstance(e);
            }),
            v(mi);
          const vi = ".bs.toast",
            yi = `mouseover${vi}`,
            bi = `mouseout${vi}`,
            _i = `focusin${vi}`,
            wi = `focusout${vi}`,
            xi = `hide${vi}`,
            Ti = `hidden${vi}`,
            Ei = `show${vi}`,
            Ci = `shown${vi}`,
            Ai = "hide",
            ki = "show",
            Si = "showing",
            Oi = { animation: "boolean", autohide: "boolean", delay: "number" },
            Di = { animation: !0, autohide: !0, delay: 5e3 };
          class ji extends W {
            constructor(e, t) {
              super(e, t),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return Di;
            }
            static get DefaultType() {
              return Oi;
            }
            static get NAME() {
              return "toast";
            }
            show() {
              I.trigger(this._element, Ei).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Ai),
                h(this._element),
                this._element.classList.add(ki, Si),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(Si),
                      I.trigger(this._element, Ci),
                      this._maybeScheduleHide();
                  },
                  this._element,
                  this._config.animation,
                ));
            }
            hide() {
              this.isShown() &&
                (I.trigger(this._element, xi).defaultPrevented ||
                  (this._element.classList.add(Si),
                  this._queueCallback(
                    () => {
                      this._element.classList.add(Ai),
                        this._element.classList.remove(Si, ki),
                        I.trigger(this._element, Ti);
                    },
                    this._element,
                    this._config.animation,
                  )));
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(ki),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(ki);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(e, t) {
              switch (e.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = t;
                  break;
                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = t;
              }
              if (t) return void this._clearTimeout();
              const n = e.relatedTarget;
              this._element === n ||
                this._element.contains(n) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              I.on(this._element, yi, (e) => this._onInteraction(e, !0)),
                I.on(this._element, bi, (e) => this._onInteraction(e, !1)),
                I.on(this._element, _i, (e) => this._onInteraction(e, !0)),
                I.on(this._element, wi, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = ji.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          return (
            V(ji),
            v(ji),
            {
              Alert: Q,
              Button: G,
              Carousel: Oe,
              Collapse: Be,
              Dropdown: pt,
              Modal: Qt,
              Offcanvas: pn,
              Popover: In,
              ScrollSpy: Un,
              Tab: mi,
              Toast: ji,
              Tooltip: Nn,
            }
          );
        })(n(223));
      },
      651: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document",
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            u = o.indexOf,
            d = {},
            f = d.toString,
            h = d.hasOwnProperty,
            p = h.toString,
            g = p.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = i.document,
            _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var i,
              r,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (i in _)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function x(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
                ? d[f.call(e)] || "object"
                : typeof e;
          }
          var T = "3.7.1",
            E = /HTML$/i,
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function A(e) {
            var t = !!e && "length" in e && e.length,
              n = x(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (C.fn = C.prototype =
            {
              jquery: T,
              constructor: C,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                    ? this[e + this.length]
                    : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (C.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || C.isPlainObject(n)
                                    ? n
                                    : {}),
                              (r = !1),
                              (s[t] = C.extend(c, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            C.extend({
              expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== f.call(e) ||
                  ((t = s(e)) &&
                    ("function" !=
                      typeof (n = h.call(t, "constructor") && t.constructor) ||
                      p.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (A(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;
                if (!r) for (; (t = e[i++]); ) n += C.text(t);
                return 1 === r || 11 === r
                  ? e.textContent
                  : 9 === r
                    ? e.documentElement.textContent
                    : 3 === r || 4 === r
                      ? e.nodeValue
                      : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (A(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !E.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  s = [];
                if (A(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return l(s);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              },
            );
          var S = o.pop,
            O = o.sort,
            D = o.splice,
            j = "[\\x20\\t\\r\\n\\f]",
            L = new RegExp(
              "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
              "g",
            );
          C.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(n))
              )
            );
          };
          var N = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function P(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          C.escapeSelector = function (e) {
            return (e + "").replace(N, P);
          };
          var $ = b,
            I = c;
          !(function () {
            var e,
              t,
              n,
              r,
              s,
              l,
              c,
              d,
              f,
              p,
              g = I,
              v = C.expando,
              y = 0,
              b = 0,
              _ = ee(),
              w = ee(),
              x = ee(),
              T = ee(),
              E = function (e, t) {
                return e === t && (s = !0), 0;
              },
              A =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              N =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                j +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              P =
                "\\[" +
                j +
                "*(" +
                N +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                N +
                "))|)" +
                j +
                "*\\]",
              M =
                ":(" +
                N +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                P +
                ")*)|.*)\\)|)",
              H = new RegExp(j + "+", "g"),
              q = new RegExp("^" + j + "*," + j + "*"),
              F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
              R = new RegExp(j + "|>"),
              W = new RegExp(M),
              B = new RegExp("^" + N + "$"),
              z = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    j +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    j +
                    "*(?:([+-]|)" +
                    j +
                    "*(\\d+)|))" +
                    j +
                    "*\\)|)",
                  "i",
                ),
                bool: new RegExp("^(?:" + A + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    j +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    j +
                    "*((?:-\\d)?\\d*)" +
                    j +
                    "*\\)|)(?=[^-]|$)",
                  "i",
                ),
              },
              V = /^(?:input|select|textarea|button)$/i,
              X = /^h\d$/i,
              U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              Y = /[+~]/,
              Q = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
                "g",
              ),
              K = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320,
                      ))
                );
              },
              G = function () {
                le();
              },
              J = fe(
                function (e) {
                  return !0 === e.disabled && k(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" },
              );
            try {
              g.apply((o = a.call($.childNodes)), $.childNodes),
                o[$.childNodes.length].nodeType;
            } catch (e) {
              g = {
                apply: function (e, t) {
                  I.apply(e, a.call(t));
                },
                call: function (e) {
                  I.apply(e, a.call(arguments, 1));
                },
              };
            }
            function Z(e, t, n, i) {
              var r,
                o,
                s,
                a,
                c,
                u,
                h,
                p = t && t.ownerDocument,
                y = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
              )
                return n;
              if (!i && (le(t), (t = t || l), d)) {
                if (11 !== y && (c = U.exec(e)))
                  if ((r = c[1])) {
                    if (9 === y) {
                      if (!(s = t.getElementById(r))) return n;
                      if (s.id === r) return g.call(n, s), n;
                    } else if (
                      p &&
                      (s = p.getElementById(r)) &&
                      Z.contains(t, s) &&
                      s.id === r
                    )
                      return g.call(n, s), n;
                  } else {
                    if (c[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = c[3]) && t.getElementsByClassName)
                      return g.apply(n, t.getElementsByClassName(r)), n;
                  }
                if (!(T[e + " "] || (f && f.test(e)))) {
                  if (((h = e), (p = t), 1 === y && (R.test(e) || F.test(e)))) {
                    for (
                      ((p = (Y.test(e) && ae(t.parentNode)) || t) == t &&
                        m.scope) ||
                        ((a = t.getAttribute("id"))
                          ? (a = C.escapeSelector(a))
                          : t.setAttribute("id", (a = v))),
                        o = (u = ue(e)).length;
                      o--;

                    )
                      u[o] = (a ? "#" + a : ":scope") + " " + de(u[o]);
                    h = u.join(",");
                  }
                  try {
                    return g.apply(n, p.querySelectorAll(h)), n;
                  } catch (t) {
                    T(e, !0);
                  } finally {
                    a === v && t.removeAttribute("id");
                  }
                }
              }
              return ye(e.replace(L, "$1"), t, n, i);
            }
            function ee() {
              var e = [];
              return function n(i, r) {
                return (
                  e.push(i + " ") > t.cacheLength && delete n[e.shift()],
                  (n[i + " "] = r)
                );
              };
            }
            function te(e) {
              return (e[v] = !0), e;
            }
            function ne(e) {
              var t = l.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ie(e) {
              return function (t) {
                return k(t, "input") && t.type === e;
              };
            }
            function re(e) {
              return function (t) {
                return (k(t, "input") || k(t, "button")) && t.type === e;
              };
            }
            function oe(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && J(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function se(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                      n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ae(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function le(e) {
              var n,
                i = e ? e.ownerDocument || e : $;
              return i != l && 9 === i.nodeType && i.documentElement
                ? ((c = (l = i).documentElement),
                  (d = !C.isXMLDoc(l)),
                  (p =
                    c.matches ||
                    c.webkitMatchesSelector ||
                    c.msMatchesSelector),
                  c.msMatchesSelector &&
                    $ != l &&
                    (n = l.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", G),
                  (m.getById = ne(function (e) {
                    return (
                      (c.appendChild(e).id = C.expando),
                      !l.getElementsByName ||
                        !l.getElementsByName(C.expando).length
                    );
                  })),
                  (m.disconnectedMatch = ne(function (e) {
                    return p.call(e, "*");
                  })),
                  (m.scope = ne(function () {
                    return l.querySelectorAll(":scope");
                  })),
                  (m.cssHas = ne(function () {
                    try {
                      return l.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  m.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace(Q, K);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace(Q, K);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && d) {
                          var n,
                            i,
                            r,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && d)
                      return t.getElementsByClassName(e);
                  }),
                  (f = []),
                  ne(function (e) {
                    var t;
                    (c.appendChild(e).innerHTML =
                      "<a id='" +
                      v +
                      "' href='' disabled='disabled'></a><select id='" +
                      v +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        f.push("\\[" + j + "*(?:value|" + A + ")"),
                      e.querySelectorAll("[id~=" + v + "-]").length ||
                        f.push("~="),
                      e.querySelectorAll("a#" + v + "+*").length ||
                        f.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        f.push(":checked"),
                      (t = l.createElement("input")).setAttribute(
                        "type",
                        "hidden",
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (c.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        f.push(":enabled", ":disabled"),
                      (t = l.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        f.push(
                          "\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")",
                        );
                  }),
                  m.cssHas || f.push(":has"),
                  (f = f.length && new RegExp(f.join("|"))),
                  (E = function (e, t) {
                    if (e === t) return (s = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!m.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === l || (e.ownerDocument == $ && Z.contains($, e))
                          ? -1
                          : t === l ||
                              (t.ownerDocument == $ && Z.contains($, t))
                            ? 1
                            : r
                              ? u.call(r, e) - u.call(r, t)
                              : 0
                        : 4 & n
                          ? -1
                          : 1)
                    );
                  }),
                  l)
                : l;
            }
            for (e in ((Z.matches = function (e, t) {
              return Z(e, null, null, t);
            }),
            (Z.matchesSelector = function (e, t) {
              if ((le(e), d && !T[t + " "] && (!f || !f.test(t))))
                try {
                  var n = p.call(e, t);
                  if (
                    n ||
                    m.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  T(t, !0);
                }
              return Z(t, l, null, [e]).length > 0;
            }),
            (Z.contains = function (e, t) {
              return (e.ownerDocument || e) != l && le(e), C.contains(e, t);
            }),
            (Z.attr = function (e, n) {
              (e.ownerDocument || e) != l && le(e);
              var i = t.attrHandle[n.toLowerCase()],
                r =
                  i && h.call(t.attrHandle, n.toLowerCase())
                    ? i(e, n, !d)
                    : void 0;
              return void 0 !== r ? r : e.getAttribute(n);
            }),
            (Z.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (C.uniqueSort = function (e) {
              var t,
                n = [],
                i = 0,
                o = 0;
              if (
                ((s = !m.sortStable),
                (r = !m.sortStable && a.call(e, 0)),
                O.call(e, E),
                s)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                for (; i--; ) D.call(e, n[i], 1);
              }
              return (r = null), e;
            }),
            (C.fn.uniqueSort = function () {
              return this.pushStack(C.uniqueSort(a.apply(this)));
            }),
            (t = C.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(Q, K)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(Q, K)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Z.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Z.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return z.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            W.test(n) &&
                            (t = ue(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(Q, K).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return k(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = _[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + j + ")" + e + "(" + j + "|$)",
                      )) &&
                        _(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              "",
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = Z.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                                ? r !== n
                                : "^=" === t
                                  ? n && 0 === r.indexOf(n)
                                  : "*=" === t
                                    ? n && r.indexOf(n) > -1
                                    : "$=" === t
                                      ? n && r.slice(-n.length) === n
                                      : "~=" === t
                                        ? (
                                            " " +
                                            r.replace(H, " ") +
                                            " "
                                          ).indexOf(n) > -1
                                        : "|=" === t &&
                                          (r === n ||
                                            r.slice(0, n.length + 1) ===
                                              n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            f,
                            h,
                            p = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            b = !l && !a,
                            _ = !1;
                          if (g) {
                            if (o) {
                              for (; p; ) {
                                for (d = t; (d = d[p]); )
                                  if (a ? k(d, m) : 1 === d.nodeType) return !1;
                                h = p = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? g.firstChild : g.lastChild]), s && b)
                            ) {
                              for (
                                _ =
                                  (f =
                                    (c =
                                      (u = g[v] || (g[v] = {}))[e] || [])[0] ===
                                      y && c[1]) && c[2],
                                  d = f && g.childNodes[f];
                                (d =
                                  (++f && d && d[p]) || (_ = f = 0) || h.pop());

                              )
                                if (1 === d.nodeType && ++_ && d === t) {
                                  u[e] = [y, f, _];
                                  break;
                                }
                            } else if (
                              (b &&
                                (_ = f =
                                  (c =
                                    (u = t[v] || (t[v] = {}))[e] || [])[0] ===
                                    y && c[1]),
                              !1 === _)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[p]) ||
                                  (_ = f = 0) ||
                                  h.pop()) &&
                                (!(a ? k(d, m) : 1 === d.nodeType) ||
                                  !++_ ||
                                  (b && ((u = d[v] || (d[v] = {}))[e] = [y, _]),
                                  d !== t));

                              );
                            return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var i,
                      r =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        Z.error("unsupported pseudo: " + e);
                    return r[v]
                      ? r(n)
                      : r.length > 1
                        ? ((i = [e, e, "", n]),
                          t.setFilters.hasOwnProperty(e.toLowerCase())
                            ? te(function (e, t) {
                                for (var i, o = r(e, n), s = o.length; s--; )
                                  e[(i = u.call(e, o[s]))] = !(t[i] = o[s]);
                              })
                            : function (e) {
                                return r(e, 0, i);
                              })
                        : r;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      i = ve(e.replace(L, "$1"));
                    return i[v]
                      ? te(function (e, t, n, r) {
                          for (
                            var o, s = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Z(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace(Q, K)),
                      function (t) {
                        return (t.textContent || C.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      B.test(e || "") || Z.error("unsupported lang: " + e),
                      (e = e.replace(Q, K).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = d
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === c;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return l.activeElement;
                          } catch (e) {}
                        })() &&
                      l.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: oe(!1),
                  disabled: oe(!0),
                  checked: function (e) {
                    return (
                      (k(e, "input") && !!e.checked) ||
                      (k(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return X.test(e.nodeName);
                  },
                  input: function (e) {
                    return V.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      (k(e, "input") && "button" === e.type) || k(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      k(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: se(function () {
                    return [0];
                  }),
                  last: se(function (e, t) {
                    return [t - 1];
                  }),
                  eq: se(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: se(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: se(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: se(function (e, t, n) {
                    var i;
                    for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: se(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = ie(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = re(e);
            function ce() {}
            function ue(e, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = w[e + " "];
              if (u) return n ? 0 : u.slice(0);
              for (a = e, l = [], c = t.preFilter; a; ) {
                for (s in ((i && !(r = q.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                (i = !1),
                (r = F.exec(a)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(L, " ") }),
                  (a = a.slice(i.length))),
                t.filter))
                  !(r = z[s].exec(a)) ||
                    (c[s] && !(r = c[s](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: s, matches: r }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return n ? a.length : a ? Z.error(e) : w(e, l).slice(0);
            }
            function de(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function fe(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = b++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d = [y, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s)
                          if (((u = t[v] || (t[v] = {})), r && k(t, r)))
                            t = t[i] || t;
                          else {
                            if ((c = u[o]) && c[0] === y && c[1] === a)
                              return (d[2] = c[2]);
                            if (((u[o] = d), (d[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function he(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function pe(e, t, n, i, r) {
              for (
                var o, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
              return s;
            }
            function ge(e, t, n, i, r, o) {
              return (
                i && !i[v] && (i = ge(i)),
                r && !r[v] && (r = ge(r, o)),
                te(function (o, s, a, l) {
                  var c,
                    d,
                    f,
                    h,
                    p = [],
                    m = [],
                    v = s.length,
                    y =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) Z(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    b = !e || (!o && t) ? y : pe(y, p, e, a, l);
                  if (
                    (n
                      ? n(b, (h = r || (o ? e : v || i) ? [] : s), a, l)
                      : (h = b),
                    i)
                  )
                    for (c = pe(h, m), i(c, [], a, l), d = c.length; d--; )
                      (f = c[d]) && (h[m[d]] = !(b[m[d]] = f));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (c = [], d = h.length; d--; )
                          (f = h[d]) && c.push((b[d] = f));
                        r(null, (h = []), c, l);
                      }
                      for (d = h.length; d--; )
                        (f = h[d]) &&
                          (c = r ? u.call(o, f) : p[d]) > -1 &&
                          (o[c] = !(s[c] = f));
                    }
                  } else
                    (h = pe(h === s ? h.splice(v, h.length) : h)),
                      r ? r(null, s, h, l) : g.apply(s, h);
                })
              );
            }
            function me(e) {
              for (
                var i,
                  r,
                  o,
                  s = e.length,
                  a = t.relative[e[0].type],
                  l = a || t.relative[" "],
                  c = a ? 1 : 0,
                  d = fe(
                    function (e) {
                      return e === i;
                    },
                    l,
                    !0,
                  ),
                  f = fe(
                    function (e) {
                      return u.call(i, e) > -1;
                    },
                    l,
                    !0,
                  ),
                  h = [
                    function (e, t, r) {
                      var o =
                        (!a && (r || t != n)) ||
                        ((i = t).nodeType ? d(e, t, r) : f(e, t, r));
                      return (i = null), o;
                    },
                  ];
                c < s;
                c++
              )
                if ((r = t.relative[e[c].type])) h = [fe(he(h), r)];
                else {
                  if ((r = t.filter[e[c].type].apply(null, e[c].matches))[v]) {
                    for (o = ++c; o < s && !t.relative[e[o].type]; o++);
                    return ge(
                      c > 1 && he(h),
                      c > 1 &&
                        de(
                          e.slice(0, c - 1).concat({
                            value: " " === e[c - 2].type ? "*" : "",
                          }),
                        ).replace(L, "$1"),
                      r,
                      c < o && me(e.slice(c, o)),
                      o < s && me((e = e.slice(o))),
                      o < s && de(e),
                    );
                  }
                  h.push(r);
                }
              return he(h);
            }
            function ve(e, i) {
              var r,
                o = [],
                s = [],
                a = x[e + " "];
              if (!a) {
                for (i || (i = ue(e)), r = i.length; r--; )
                  (a = me(i[r]))[v] ? o.push(a) : s.push(a);
                (a = x(
                  e,
                  (function (e, i) {
                    var r = i.length > 0,
                      o = e.length > 0,
                      s = function (s, a, c, u, f) {
                        var h,
                          p,
                          m,
                          v = 0,
                          b = "0",
                          _ = s && [],
                          w = [],
                          x = n,
                          T = s || (o && t.find.TAG("*", f)),
                          E = (y += null == x ? 1 : Math.random() || 0.1),
                          A = T.length;
                        for (
                          f && (n = a == l || a || f);
                          b !== A && null != (h = T[b]);
                          b++
                        ) {
                          if (o && h) {
                            for (
                              p = 0,
                                a || h.ownerDocument == l || (le(h), (c = !d));
                              (m = e[p++]);

                            )
                              if (m(h, a || l, c)) {
                                g.call(u, h);
                                break;
                              }
                            f && (y = E);
                          }
                          r && ((h = !m && h) && v--, s && _.push(h));
                        }
                        if (((v += b), r && b !== v)) {
                          for (p = 0; (m = i[p++]); ) m(_, w, a, c);
                          if (s) {
                            if (v > 0)
                              for (; b--; ) _[b] || w[b] || (w[b] = S.call(u));
                            w = pe(w);
                          }
                          g.apply(u, w),
                            f &&
                              !s &&
                              w.length > 0 &&
                              v + i.length > 1 &&
                              C.uniqueSort(u);
                        }
                        return f && ((y = E), (n = x)), _;
                      };
                    return r ? te(s) : s;
                  })(s, o),
                )),
                  (a.selector = e);
              }
              return a;
            }
            function ye(e, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u = "function" == typeof e && e,
                f = !r && ue((e = u.selector || e));
              if (((i = i || []), 1 === f.length)) {
                if (
                  (s = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (a = s[0]).type &&
                  9 === n.nodeType &&
                  d &&
                  t.relative[s[1].type]
                ) {
                  if (
                    !(n = (t.find.ID(a.matches[0].replace(Q, K), n) || [])[0])
                  )
                    return i;
                  u && (n = n.parentNode),
                    (e = e.slice(s.shift().value.length));
                }
                for (
                  o = z.needsContext.test(e) ? 0 : s.length;
                  o-- && ((a = s[o]), !t.relative[(l = a.type)]);

                )
                  if (
                    (c = t.find[l]) &&
                    (r = c(
                      a.matches[0].replace(Q, K),
                      (Y.test(s[0].type) && ae(n.parentNode)) || n,
                    ))
                  ) {
                    if ((s.splice(o, 1), !(e = r.length && de(s))))
                      return g.apply(i, r), i;
                    break;
                  }
              }
              return (
                (u || ve(e, f))(
                  r,
                  n,
                  !d,
                  i,
                  !n || (Y.test(e) && ae(n.parentNode)) || n,
                ),
                i
              );
            }
            (ce.prototype = t.filters = t.pseudos),
              (t.setFilters = new ce()),
              (m.sortStable = v.split("").sort(E).join("") === v),
              le(),
              (m.sortDetached = ne(function (e) {
                return (
                  1 & e.compareDocumentPosition(l.createElement("fieldset"))
                );
              })),
              (C.find = Z),
              (C.expr[":"] = C.expr.pseudos),
              (C.unique = C.uniqueSort),
              (Z.compile = ve),
              (Z.select = ye),
              (Z.setDocument = le),
              (Z.tokenize = ue),
              (Z.escape = C.escapeSelector),
              (Z.getText = C.text),
              (Z.isXML = C.isXMLDoc),
              (Z.selectors = C.expr),
              (Z.support = C.support),
              (Z.uniqueSort = C.uniqueSort);
          })();
          var M = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && C(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            H = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            q = C.expr.match.needsContext,
            F =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function R(e, t, n) {
            return v(t)
              ? C.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
                ? C.grep(e, function (e) {
                    return (e === t) !== n;
                  })
                : "string" != typeof t
                  ? C.grep(e, function (e) {
                      return u.call(t, e) > -1 !== n;
                    })
                  : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    }),
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  C.find(e, r[t], n);
                return i > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(R(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(R(this, e || [], !0));
              },
              is: function (e) {
                return !!R(
                  this,
                  "string" == typeof e && q.test(e) ? C(e) : e || [],
                  !1,
                ).length;
              },
            });
          var W,
            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || W), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : B.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0,
                    ),
                  ),
                  F.test(i[1]) && C.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = b.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
                ? void 0 !== n.ready
                  ? n.ready(e)
                  : e(C)
                : C.makeArray(e, this);
          }).prototype = C.fn),
            (W = C(b));
          var z = /^(?:parents|prev(?:Until|All))/,
            V = { children: !0, contents: !0, next: !0, prev: !0 };
          function X(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && C(e);
              if (!q.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(C(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return M(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return M(e, "parentNode", n);
                },
                next: function (e) {
                  return X(e, "nextSibling");
                },
                prev: function (e) {
                  return X(e, "previousSibling");
                },
                nextAll: function (e) {
                  return M(e, "nextSibling");
                },
                prevAll: function (e) {
                  return M(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return M(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return M(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return H((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return H(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (k(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, i) {
                  var r = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = C.filter(i, r)),
                    this.length > 1 &&
                      (V[e] || C.uniqueSort(r), z.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              },
            );
          var U = /[^\x20\t\r\n\f]+/g;
          function Y(e) {
            return e;
          }
          function Q(e) {
            throw e;
          }
          function K(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                  ? r.call(e, t, n)
                  : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(U) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        C.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== x(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function s(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < o)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution",
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, s(o, t, Y, r), s(o, t, Q, r))
                                      : (o++,
                                        c.call(
                                          i,
                                          s(o, t, Y, r),
                                          s(o, t, Q, r),
                                          s(o, t, Y, t.notifyWith),
                                        ))
                                    : (n !== Y && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(i, u.error),
                                      e + 1 >= o &&
                                        (n !== Q && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (C.Deferred.getErrorHook
                                ? (u.error = C.Deferred.getErrorHook())
                                : C.Deferred.getStackHook &&
                                  (u.error = C.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return C.Deferred(function (i) {
                        t[0][3].add(s(0, i, v(r) ? r : Y, i.notifyWith)),
                          t[1][3].add(s(0, i, v(e) ? e : Y)),
                          t[2][3].add(s(0, i, v(n) ? n : Q));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, i) {
                    var s = i[2],
                      a = i[5];
                    (r[i[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      s.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  o = C.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (K(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) K(r[n], s(n), o.reject);
                return o.promise();
              },
            });
          var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              G.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t,
              );
          }),
            (C.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var J = C.Deferred();
          function Z() {
            b.removeEventListener("DOMContentLoaded", Z),
              i.removeEventListener("load", Z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              J.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || J.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = J.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? i.setTimeout(C.ready)
              : (b.addEventListener("DOMContentLoaded", Z),
                i.addEventListener("load", Z));
          var ee = function (e, t, n, i, r, o, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === x(n))
                for (a in ((r = !0), n)) ee(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(C(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function ie(e, t) {
            return t.toUpperCase();
          }
          function re(e) {
            return e.replace(te, "ms-").replace(ne, ie);
          }
          var oe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function se() {
            this.expando = C.expando + se.uid++;
          }
          (se.uid = 1),
            (se.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    oe(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[re(t)] = n;
                else for (i in t) r[re(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][re(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(re)
                      : (t = re(t)) in i
                        ? [t]
                        : t.match(U) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var ae = new se(),
            le = new se(),
            ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ue = /[A-Z]/g;
          function de(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(ue, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                            ? +e
                            : ce.test(e)
                              ? JSON.parse(e)
                              : e))
                    );
                  })(n);
                } catch (e) {}
                le.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return le.hasData(e) || ae.hasData(e);
            },
            data: function (e, t, n) {
              return le.access(e, t, n);
            },
            removeData: function (e, t) {
              le.remove(e, t);
            },
            _data: function (e, t, n) {
              return ae.access(e, t, n);
            },
            _removeData: function (e, t) {
              ae.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = le.get(o)),
                    1 === o.nodeType && !ae.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = re(i.slice(5))), de(o, i, r[i]));
                    ae.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      le.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = le.get(o, e)) ||
                            void 0 !== (n = de(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          le.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  le.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = ae.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = ae.access(e, t, C.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o,
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  ae.get(e, n) ||
                  ae.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      ae.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                      ? this
                      : this.each(function () {
                          var n = C.queue(this, e, t);
                          C._queueHooks(this, e),
                            "fx" === e &&
                              "inprogress" !== n[0] &&
                              C.dequeue(this, e);
                        })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = C.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = ae.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            he = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
            pe = ["Top", "Right", "Bottom", "Left"],
            ge = b.documentElement,
            me = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ve = { composed: !0 };
          ge.getRootNode &&
            (me = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ve) === e.ownerDocument
              );
            });
          var ye = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                me(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function be(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== c && +l)) &&
                he.exec(C.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                C.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), C.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var _e = {};
          function we(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = _e[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (_e[i] = r),
              r)
            );
          }
          function xe(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = ae.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ye(i) && (r[o] = we(i)))
                  : "none" !== n && ((r[o] = "none"), ae.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return xe(this, !0);
            },
            hide: function () {
              return xe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ye(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var Te,
            Ee,
            Ce = /^(?:checkbox|radio)$/i,
            Ae = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ke = /^$|^module$|\/(?:java|ecma)script/i;
          (Te = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (Ee = b.createElement("input")).setAttribute("type", "radio"),
            Ee.setAttribute("checked", "checked"),
            Ee.setAttribute("name", "t"),
            Te.appendChild(Ee),
            (m.checkClone = Te.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (Te.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!Te.cloneNode(!0).lastChild.defaultValue),
            (Te.innerHTML = "<option></option>"),
            (m.option = !!Te.lastChild);
          var Se = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function Oe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                    ? e.querySelectorAll(t || "*")
                    : []),
              void 0 === t || (t && k(e, t)) ? C.merge([e], n) : n
            );
          }
          function De(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"));
          }
          (Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead),
            (Se.th = Se.td),
            m.option ||
              (Se.optgroup = Se.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var je = /<|&#?\w+;/;
          function Le(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                f = [],
                h = 0,
                p = e.length;
              h < p;
              h++
            )
              if ((o = e[h]) || 0 === o)
                if ("object" === x(o)) C.merge(f, o.nodeType ? [o] : o);
                else if (je.test(o)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (Ae.exec(o) || ["", ""])[1].toLowerCase(),
                      l = Se[a] || Se._default,
                      s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  C.merge(f, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
            for (d.textContent = "", h = 0; (o = f[h++]); )
              if (i && C.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = me(o)),
                (s = Oe(d.appendChild(o), "script")),
                c && De(s),
                n)
              )
                for (u = 0; (o = s[u++]); ) ke.test(o.type || "") && n.push(o);
            return d;
          }
          var Ne = /^([^.]*)(?:\.(.+)|)/;
          function Pe() {
            return !0;
          }
          function $e() {
            return !1;
          }
          function Ie(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ie(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = $e;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                (r = function (e) {
                  return C().off(e), s.apply(this, arguments);
                }),
                (r.guid = s.guid || (s.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, r, i, n);
              })
            );
          }
          function Me(e, t, n) {
            n
              ? (ae.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      i = ae.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = a.call(arguments)),
                        ae.set(this, t, i),
                        this[t](),
                        (n = ae.get(this, t)),
                        ae.set(this, t, !1),
                        i !== n)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), n
                        );
                    } else
                      i &&
                        (ae.set(
                          this,
                          t,
                          C.event.trigger(i[0], i.slice(1), this),
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = Pe));
                  },
                }))
              : void 0 === ae.get(e, t) && C.event.add(e, t, Pe);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = ae.get(e);
              if (oe(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && C.find.matchesSelector(ge, r),
                    n.guid || (n.guid = C.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (s = m.handle) ||
                      (s = m.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(U) || [""]).length;
                  c--;

                )
                  (h = g = (a = Ne.exec(t[c]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    h &&
                      ((d = C.event.special[h] || {}),
                      (h = (r ? d.delegateType : d.bindType) || h),
                      (d = C.event.special[h] || {}),
                      (u = C.extend(
                        {
                          type: h,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && C.expr.match.needsContext.test(r),
                          namespace: p.join("."),
                        },
                        o,
                      )),
                      (f = l[h]) ||
                        (((f = l[h] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, p, s)) ||
                          (e.addEventListener && e.addEventListener(h, s))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                      (C.event.global[h] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = ae.hasData(e) && ae.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(U) || [""]).length; c--; )
                  if (
                    ((h = g = (a = Ne.exec(t[c]) || [])[1]),
                    (p = (a[2] || "").split(".").sort()),
                    h)
                  ) {
                    for (
                      d = C.event.special[h] || {},
                        f =
                          l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)",
                          ),
                        s = o = f.length;
                      o--;

                    )
                      (u = f[o]),
                        (!r && g !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (f.splice(o, 1),
                          u.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    s &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                        C.removeEvent(e, h, m.handle),
                      delete l[h]);
                  } else for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && ae.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                l = C.event.fix(e),
                c =
                  (ae.get(this, "events") || Object.create(null))[l.type] || [],
                u = C.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = C.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? C(r, this).index(c) > -1
                          : C.find(r, this, null, [c]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Me(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      Me(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (Ce.test(t.type) &&
                      t.click &&
                      k(t, "input") &&
                      ae.get(t, "click")) ||
                    k(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Pe
                      : $e),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: $e,
              isPropagationStopped: $e,
              isImmediatePropagationStopped: $e,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Pe),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Pe),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Pe),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              C.event.addProp,
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (b.documentMode) {
                  var n = ae.get(this, "handle"),
                    i = C.event.fix(e);
                  (i.type = "focusin" === e.type ? "focus" : "blur"),
                    (i.isSimulated = !0),
                    n(e),
                    i.target === i.currentTarget && n(i);
                } else C.event.simulate(t, e.target, C.event.fix(e));
              }
              (C.event.special[e] = {
                setup: function () {
                  var i;
                  if ((Me(this, e, !0), !b.documentMode)) return !1;
                  (i = ae.get(this, t)) || this.addEventListener(t, n),
                    ae.set(this, t, (i || 0) + 1);
                },
                trigger: function () {
                  return Me(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!b.documentMode) return !1;
                  (e = ae.get(this, t) - 1)
                    ? ae.set(this, t, e)
                    : (this.removeEventListener(t, n), ae.remove(this, t));
                },
                _default: function (t) {
                  return ae.get(t.target, e);
                },
                delegateType: t,
              }),
                (C.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = b.documentMode ? this : i,
                      o = ae.get(r, t);
                    o ||
                      (b.documentMode
                        ? this.addEventListener(t, n)
                        : i.addEventListener(e, n, !0)),
                      ae.set(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = b.documentMode ? this : i,
                      o = ae.get(r, t) - 1;
                    o
                      ? ae.set(r, t, o)
                      : (b.documentMode
                          ? this.removeEventListener(t, n)
                          : i.removeEventListener(e, n, !0),
                        ae.remove(r, t));
                  },
                });
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || C.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            C.fn.extend({
              on: function (e, t, n, i) {
                return Ie(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ie(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    C(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler,
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = $e),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var He = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Re(e, t) {
            return (
              (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function We(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Be(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function ze(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (ae.hasData(e) && (a = ae.get(e).events))
                for (r in (ae.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    C.event.add(t, r, a[r][n]);
              le.hasData(e) &&
                ((o = le.access(e)), (s = C.extend({}, o)), le.set(t, s));
            }
          }
          function Ve(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ce.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Xe(e, t, n, i) {
            t = l(t);
            var r,
              o,
              s,
              a,
              c,
              u,
              d = 0,
              f = e.length,
              h = f - 1,
              p = t[0],
              g = v(p);
            if (
              g ||
              (f > 1 && "string" == typeof p && !m.checkClone && qe.test(p))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                g && (t[0] = p.call(this, r, o.html())), Xe(o, t, n, i);
              });
            if (
              f &&
              ((o = (r = Le(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (a = (s = C.map(Oe(r, "script"), We)).length; d < f; d++)
                (c = r),
                  d !== h &&
                    ((c = C.clone(c, !0, !0)),
                    a && C.merge(s, Oe(c, "script"))),
                  n.call(e[d], c, d);
              if (a)
                for (
                  u = s[s.length - 1].ownerDocument, C.map(s, Be), d = 0;
                  d < a;
                  d++
                )
                  (c = s[d]),
                    ke.test(c.type || "") &&
                      !ae.access(c, "globalEval") &&
                      C.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !c.noModule &&
                          C._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u,
                          )
                        : w(c.textContent.replace(Fe, ""), c, u));
            }
            return e;
          }
          function Ue(e, t, n) {
            for (
              var i, r = t ? C.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || C.cleanData(Oe(i)),
                i.parentNode &&
                  (n && me(i) && De(Oe(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a = e.cloneNode(!0),
                l = me(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (s = Oe(a), i = 0, r = (o = Oe(e)).length; i < r; i++)
                  Ve(o[i], s[i]);
              if (t)
                if (n)
                  for (
                    o = o || Oe(e), s = s || Oe(a), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    ze(o[i], s[i]);
                else ze(e, a);
              return (
                (s = Oe(a, "script")).length > 0 &&
                  De(s, !l && Oe(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (oe(n)) {
                  if ((t = n[ae.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? C.event.remove(n, i)
                          : C.removeEvent(n, i, t.handle);
                    n[ae.expando] = void 0;
                  }
                  n[le.expando] && (n[le.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return Ue(this, e, !0);
              },
              remove: function (e) {
                return Ue(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append: function () {
                return Xe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Re(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Xe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Xe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Xe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(Oe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !He.test(e) &&
                      !Se[(Ae.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(Oe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith: function () {
                var e = [];
                return Xe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(Oe(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, i = [], r = C(e), o = r.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      C(r[s])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              },
            );
          var Ye = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
            Qe = /^--/,
            Ke = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Ge = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            Je = new RegExp(pe.join("|"), "i");
          function Ze(e, t, n) {
            var i,
              r,
              o,
              s,
              a = Qe.test(t),
              l = e.style;
            return (
              (n = n || Ke(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && s && (s = s.replace(L, "$1") || void 0),
                "" !== s || me(e) || (s = C.style(e, t)),
                !m.pixelBoxStyles() &&
                  Ye.test(s) &&
                  Je.test(t) &&
                  ((i = l.width),
                  (r = l.minWidth),
                  (o = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = s),
                  (s = n.width),
                  (l.width = i),
                  (l.minWidth = r),
                  (l.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ge.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (o = 12 === t(u.offsetWidth / 3)),
                  ge.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              s,
              a,
              l,
              c = b.createElement("div"),
              u = b.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
              C.extend(m, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ge.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ge.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = b.createElement("div").style,
            it = {};
          function rt(e) {
            return (
              C.cssProps[e] ||
              it[e] ||
              (e in nt
                ? e
                : (it[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = tt.length;
                        n--;

                      )
                        if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var ot = /^(none|table(?!-c[ea]).+)/,
            st = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            at = { letterSpacing: "0", fontWeight: "400" };
          function lt(e, t, n) {
            var i = he.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function ct(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0,
              c = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (c += C.css(e, n + pe[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= C.css(e, "padding" + pe[s], !0, r)),
                    "margin" !== n &&
                      (l -= C.css(e, "border" + pe[s] + "Width", !0, r)))
                  : ((l += C.css(e, "padding" + pe[s], !0, r)),
                    "padding" !== n
                      ? (l += C.css(e, "border" + pe[s] + "Width", !0, r))
                      : (a += C.css(e, "border" + pe[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5,
                    ),
                  ) || 0),
              l + c
            );
          }
          function ut(e, t, n) {
            var i = Ke(e),
              r =
                (!m.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, i),
              o = r,
              s = Ze(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ye.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!m.boxSizingReliable() && r) ||
                (!m.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === C.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                ct(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
            );
          }
          function dt(e, t, n, i, r) {
            return new dt.prototype.init(e, t, n, i, r);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = re(t),
                  l = Qe.test(t),
                  c = e.style;
                if (
                  (l || (t = rt(a)),
                  (s = C.cssHooks[t] || C.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t];
                "string" == (o = typeof n) &&
                  (r = he.exec(n)) &&
                  r[1] &&
                  ((n = be(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (C.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = re(t);
              return (
                Qe.test(t) || (t = rt(a)),
                (s = C.cssHooks[t] || C.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = Ze(e, t, i)),
                "normal" === r && t in at && (r = at[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !ot.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? ut(e, t, i)
                      : Ge(e, st, function () {
                          return ut(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Ke(e),
                    s = !m.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                    l = i ? ct(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          ct(e, t, "border", !1, o) -
                          0.5,
                      )),
                    l &&
                      (r = he.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    lt(0, n, l)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = et(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ze(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ge(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + pe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = lt);
              },
            ),
            C.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Ke(e), r = t.length; s < r; s++)
                        o[t[s]] = C.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (C.Tween = dt),
            (dt.prototype = {
              constructor: dt,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = dt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : dt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = dt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : dt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (dt.prototype.init.prototype = dt.prototype),
            (dt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                      ? t
                      : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                        (!C.cssHooks[e.prop] &&
                          null == e.elem.style[rt(e.prop)])
                      ? (e.elem[e.prop] = e.now)
                      : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = dt.prototype.init),
            (C.fx.step = {});
          var ft,
            ht,
            pt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
          function mt() {
            ht &&
              (!1 === b.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(mt)
                : i.setTimeout(mt, C.fx.interval),
              C.fx.tick());
          }
          function vt() {
            return (
              i.setTimeout(function () {
                ft = void 0;
              }),
              (ft = Date.now())
            );
          }
          function yt(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = pe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function bt(e, t, n) {
            for (
              var i,
                r = (_t.tweeners[t] || []).concat(_t.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function _t(e, t, n) {
            var i,
              r,
              o = 0,
              s = _t.prefilters.length,
              a = C.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = ft || vt(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || vt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = C.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing,
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = re(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = C.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = _t.prefilters[o].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              C.map(u, bt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              C.fx.timer(
                C.extend(l, { elem: e, anim: c, queue: c.opts.queue }),
              ),
              c
            );
          }
          (C.Animation = C.extend(_t, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return be(n.elem, e, he.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(U));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (_t.tweeners[n] = _t.tweeners[n] || []),
                  _t.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  f = this,
                  h = {},
                  p = e.style,
                  g = e.nodeType && ye(e),
                  m = ae.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = C._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), pt.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !m || void 0 === m[i]) continue;
                      g = !0;
                    }
                    h[i] = (m && m[i]) || C.style(e, i);
                  }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                    null == (c = m && m.display) && (c = ae.get(e, "display")),
                    "none" === (u = C.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (xe([e], !0),
                          (c = e.style.display || c),
                          (u = C.css(e, "display")),
                          xe([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === C.css(e, "float") &&
                      (l ||
                        (f.done(function () {
                          p.display = c;
                        }),
                        null == c &&
                          ((u = p.display), (c = "none" === u ? "" : u))),
                      (p.display = "inline-block"))),
                  n.overflow &&
                    ((p.overflow = "hidden"),
                    f.always(function () {
                      (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  h))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = ae.access(e, "fxshow", { display: c })),
                      o && (m.hidden = !g),
                      g && xe([e], !0),
                      f.done(function () {
                        for (i in (g || xe([e]), ae.remove(e, "fxshow"), h))
                          C.style(e, i, h[i]);
                      })),
                      (l = bt(g ? m[i] : 0, i, f)),
                      i in m ||
                        ((m[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? _t.prefilters.unshift(e) : _t.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                C.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in C.fx.speeds
                      ? (i.duration = C.fx.speeds[i.duration])
                      : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && C.dequeue(this, i.queue);
                }),
                i
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ye)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = C.isEmptyObject(e),
                  o = C.speed(t, n, i),
                  s = function () {
                    var t = _t(this, C.extend({}, e), o);
                    (r || ae.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = C.timers,
                      s = ae.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = ae.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = C.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(yt(t, !0), e, i, r);
              };
            }),
            C.each(
              {
                slideDown: yt("show"),
                slideUp: yt("hide"),
                slideToggle: yt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              },
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (ft = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (ft = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              ht || ((ht = !0), mt());
            }),
            (C.fx.stop = function () {
              ht = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var wt,
            xt = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return ee(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (r =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? wt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                            ? i
                            : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                          ? i
                          : null == (i = C.find.attr(e, t))
                            ? void 0
                            : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && k(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(U);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (wt = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = xt[t] || C.find.attr;
              xt[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = xt[s]),
                    (xt[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (xt[s] = o)),
                  r
                );
              };
            });
          var Tt = /^(?:input|select|textarea|button)$/i,
            Et = /^(?:a|area)$/i;
          function Ct(e) {
            return (e.match(U) || []).join(" ");
          }
          function At(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function kt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(U)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return ee(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : Tt.test(e.nodeName) || (Et.test(e.nodeName) && e.href)
                        ? 0
                        : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              },
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, i, r, o, s;
                return v(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, At(this)));
                    })
                  : (t = kt(e)).length
                    ? this.each(function () {
                        if (
                          ((i = At(this)),
                          (n = 1 === this.nodeType && " " + Ct(i) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            (r = t[o]),
                              n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                          (s = Ct(n)), i !== s && this.setAttribute("class", s);
                        }
                      })
                    : this;
              },
              removeClass: function (e) {
                var t, n, i, r, o, s;
                return v(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, At(this)));
                    })
                  : arguments.length
                    ? (t = kt(e)).length
                      ? this.each(function () {
                          if (
                            ((i = At(this)),
                            (n = 1 === this.nodeType && " " + Ct(i) + " "))
                          ) {
                            for (o = 0; o < t.length; o++)
                              for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                                n = n.replace(" " + r + " ", " ");
                            (s = Ct(n)),
                              i !== s && this.setAttribute("class", s);
                          }
                        })
                      : this
                    : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  i,
                  r,
                  o,
                  s = typeof e,
                  a = "string" === s || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, At(this), t), t);
                    })
                  : "boolean" == typeof t && a
                    ? t
                      ? this.addClass(e)
                      : this.removeClass(e)
                    : ((n = kt(e)),
                      this.each(function () {
                        if (a)
                          for (o = C(this), r = 0; r < n.length; r++)
                            (i = n[r]),
                              o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                        else
                          (void 0 !== e && "boolean" !== s) ||
                            ((i = At(this)) && ae.set(this, "__className__", i),
                            this.setAttribute &&
                              this.setAttribute(
                                "class",
                                i || !1 === e
                                  ? ""
                                  : ae.get(this, "__className__") || "",
                              ));
                      }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + Ct(At(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var St = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, C(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                          ? (r += "")
                          : Array.isArray(r) &&
                            (r = C.map(r, function (e) {
                              return null == e ? "" : e + "";
                            })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                  ? (t =
                      C.valHooks[r.type] ||
                      C.valHooks[r.nodeName.toLowerCase()]) &&
                    "get" in t &&
                    void 0 !== (n = t.get(r, "value"))
                    ? n
                    : "string" == typeof (n = r.value)
                      ? n.replace(St, "")
                      : null == n
                        ? ""
                        : n
                  : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : Ct(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = C.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        C.inArray(C.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var Ot = i.location,
            Dt = { guid: Date.now() },
            jt = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e),
                ),
              t
            );
          };
          var Lt = /^(?:focusinfocus|focusoutblur)$/,
            Nt = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                p = [n || b],
                g = h.call(e, "type") ? e.type : e,
                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = f = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Lt.test(g + C.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(g, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)",
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (d = C.event.special[g] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || g,
                      Lt.test(l + g) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    p.push(s), (a = s);
                  a === (n.ownerDocument || b) &&
                    p.push(a.defaultView || a.parentWindow || i);
                }
                for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                  (f = s),
                    (e.type = o > 1 ? l : d.bindType || g),
                    (u =
                      (ae.get(s, "events") || Object.create(null))[e.type] &&
                      ae.get(s, "handle")) && u.apply(s, t),
                    (u = c && s[c]) &&
                      u.apply &&
                      oe(s) &&
                      ((e.result = u.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                    !oe(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (C.event.triggered = g),
                      e.isPropagationStopped() && f.addEventListener(g, Nt),
                      n[g](),
                      e.isPropagationStopped() && f.removeEventListener(g, Nt),
                      (C.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(i, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            });
          var Pt = /\[\]$/,
            $t = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Ht(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              C.each(t, function (t, r) {
                n || Pt.test(e)
                  ? i(e, r)
                  : Ht(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i,
                    );
              });
            else if (n || "object" !== x(t)) i(e, t);
            else for (r in t) Ht(e + "[" + r + "]", t[r], n, i);
          }
          (C.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Ht(n, e[n], t, r);
            return i.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !It.test(e) &&
                      (this.checked || !Ce.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                        ? C.map(n, function (e) {
                            return {
                              name: t.name,
                              value: e.replace($t, "\r\n"),
                            };
                          })
                        : { name: t.name, value: n.replace($t, "\r\n") };
                  })
                  .get();
              },
            });
          var qt = /%20/g,
            Ft = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            Vt = {},
            Xt = {},
            Ut = "*/".concat("*"),
            Yt = b.createElement("a");
          function Qt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(U) || [];
              if (v(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Kt(e, t, n, i) {
            var r = {},
              o = e === Xt;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                C.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Gt(e, t) {
            var n,
              i,
              r = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e;
          }
          (Yt.href = Ot.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ot.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ot.protocol,
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ut,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, C.ajaxSettings), t) : Gt(C.ajaxSettings, e);
              },
              ajaxPrefilter: Qt(Vt),
              ajaxTransport: Qt(Xt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  f,
                  h = C.ajaxSetup({}, t),
                  p = h.context || h,
                  g = h.context && (p.nodeType || p.jquery) ? C(p) : C.event,
                  m = C.Deferred(),
                  v = C.Callbacks("once memory"),
                  y = h.statusCode || {},
                  _ = {},
                  w = {},
                  x = "canceled",
                  T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = Wt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (_[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) T.always(e[T.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || x;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(T),
                  (h.url = ((e || h.url || Ot.href) + "").replace(
                    zt,
                    Ot.protocol + "//",
                  )),
                  (h.type = t.method || t.type || h.method || h.type),
                  (h.dataTypes = (h.dataType || "*").toLowerCase().match(U) || [
                    "",
                  ]),
                  null == h.crossDomain)
                ) {
                  l = b.createElement("a");
                  try {
                    (l.href = h.url),
                      (l.href = l.href),
                      (h.crossDomain =
                        Yt.protocol + "//" + Yt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    h.crossDomain = !0;
                  }
                }
                if (
                  (h.data &&
                    h.processData &&
                    "string" != typeof h.data &&
                    (h.data = C.param(h.data, h.traditional)),
                  Kt(Vt, h, t, T),
                  c)
                )
                  return T;
                for (d in ((u = C.event && h.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Bt.test(h.type)),
                (r = h.url.replace(Ft, "")),
                h.hasContent
                  ? h.data &&
                    h.processData &&
                    0 ===
                      (h.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    (h.data = h.data.replace(qt, "+"))
                  : ((f = h.url.slice(r.length)),
                    h.data &&
                      (h.processData || "string" == typeof h.data) &&
                      ((r += (jt.test(r) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache &&
                      ((r = r.replace(Rt, "$1")),
                      (f = (jt.test(r) ? "&" : "?") + "_=" + Dt.guid++ + f)),
                    (h.url = r + f)),
                h.ifModified &&
                  (C.lastModified[r] &&
                    T.setRequestHeader("If-Modified-Since", C.lastModified[r]),
                  C.etag[r] && T.setRequestHeader("If-None-Match", C.etag[r])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                  T.setRequestHeader("Content-Type", h.contentType),
                T.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                    ? h.accepts[h.dataTypes[0]] +
                        ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "")
                    : h.accepts["*"],
                ),
                h.headers))
                  T.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c))
                  return T.abort();
                if (
                  ((x = "abort"),
                  v.add(h.complete),
                  T.done(h.success),
                  T.fail(h.error),
                  (n = Kt(Xt, h, t, T)))
                ) {
                  if (
                    ((T.readyState = 1), u && g.trigger("ajaxSend", [T, h]), c)
                  )
                    return T;
                  h.async &&
                    h.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      T.abort("timeout");
                    }, h.timeout));
                  try {
                    (c = !1), n.send(_, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, s, l) {
                  var d,
                    f,
                    b,
                    _,
                    w,
                    x = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (T.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (_ = (function (e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(h, T, s)),
                    !d &&
                      C.inArray("script", h.dataTypes) > -1 &&
                      C.inArray("json", h.dataTypes) < 0 &&
                      (h.converters["text script"] = function () {}),
                    (_ = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = u.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[r])
                                    : !0 !== c[r] &&
                                      ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(h, _, T, d)),
                    d
                      ? (h.ifModified &&
                          ((w = T.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[r] = w),
                          (w = T.getResponseHeader("etag")) && (C.etag[r] = w)),
                        204 === e || "HEAD" === h.type
                          ? (x = "nocontent")
                          : 304 === e
                            ? (x = "notmodified")
                            : ((x = _.state),
                              (f = _.data),
                              (d = !(b = _.error))))
                      : ((b = x),
                        (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                    (T.status = e),
                    (T.statusText = (t || x) + ""),
                    d
                      ? m.resolveWith(p, [f, x, T])
                      : m.rejectWith(p, [T, x, b]),
                    T.statusCode(y),
                    (y = void 0),
                    u &&
                      g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        T,
                        h,
                        d ? f : b,
                      ]),
                    v.fireWith(p, [T, x]),
                    u &&
                      (g.trigger("ajaxComplete", [T, h]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return T;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      C.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Jt = { 0: 200, 1223: 204 },
            Zt = C.ajaxSettings.xhr();
          (m.cors = !!Zt && "withCredentials" in Zt),
            (m.ajax = Zt = !!Zt),
            C.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Zt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                              ? "number" != typeof a.status
                                ? o(0, "error")
                                : o(a.status, a.statusText)
                              : o(
                                  Jt[a.status] || a.status,
                                  a.statusText,
                                  "text" !== (a.responseType || "text") ||
                                    "string" != typeof a.responseText
                                    ? { binary: a.response }
                                    : { text: a.responseText },
                                  a.getAllResponseHeaders(),
                                ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        }),
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || C.expando + "_" + Dt.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded",
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(nn, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return s || C.error(r + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((en = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((i = (t =
                          b.implementation.createHTMLDocument(
                            "",
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(i))
                      : (t = b)),
                  (o = !n && []),
                  (r = F.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Le([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], r.childNodes)));
              var i, r, o;
            }),
            (C.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = Ct(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  C.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          i ? C("<div>").append(C.parseHTML(e)).find(i) : e,
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = C.css(e, "position"),
                  u = C(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (o = C.css(e, "top")),
                  (l = C.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = u.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, C.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === C.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0,
                      )),
                      (r.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ge;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (i) {
                  return ee(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset,
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length,
                  );
                };
              },
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = et(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ze(e, t)), Ye.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  C.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return ee(
                      this,
                      function (t, n, r) {
                        var o;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                            ? ((o = t.documentElement),
                              Math.max(
                                t.body["scroll" + e],
                                o["scroll" + e],
                                t.body["offset" + e],
                                o["offset" + e],
                                o["client" + e],
                              ))
                            : void 0 === r
                              ? C.css(t, n, a)
                              : C.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s,
                    );
                  };
                },
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " ",
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            );
          var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || C.guid++),
                r
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = k),
            (C.isFunction = v),
            (C.isWindow = y),
            (C.camelCase = re),
            (C.type = x),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(rn, "$1");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var on = i.jQuery,
            sn = i.$;
          return (
            (C.noConflict = function (e) {
              return (
                i.$ === C && (i.$ = sn),
                e && i.jQuery === C && (i.jQuery = on),
                C
              );
            }),
            void 0 === r && (i.jQuery = i.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = n(651),
        t = n.n(e);
      n(141),
        (globalThis.jQuery = t()),
        t()(".availability-toggle-button").each(function (e, n) {
          var i = t()(n);
          i.on("click", function () {
            var e = i.data("schedule-id"),
              t = i.data("user-id"),
              n = i.data("candidate-id"),
              r = (parseInt(i.data("availability")) + 1) % 3;
            fetch(
              "/schedules/"
                .concat(e, "/users/")
                .concat(t, "/candidates/")
                .concat(n),
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ availability: r }),
              },
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                i.data("availability", e.availability),
                  i.text(["欠", "？", "出"][e.availability]),
                  i.removeClass("btn-danger btn-secondary btn-success"),
                  i.addClass(
                    ["btn-danger", "btn-secondary", "btn-success"][
                      e.availability
                    ],
                  );
              });
          });
        });
      var i = t()("#self-comment-button");
      i.on("click", function () {
        var e = i.data("schedule-id"),
          n = i.data("user-id"),
          r = prompt("コメントを255文字以内で入力してください。");
        r &&
          fetch("/schedules/".concat(e, "/users/").concat(n, "/comments"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment: r }),
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              t()("#self-comment").text(e.comment);
            });
      });
    })();
})();
