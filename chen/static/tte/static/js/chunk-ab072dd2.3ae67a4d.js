(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-ab072dd2"], {
        "14f0": function(e, l, d) {},
        "9e82": function(e, l, d) {
            "use strict";
            d("14f0")
        },
        c677: function(e, l, d) {},
        e715: function(e, l, d) {
            "use strict";
            d.r(l);
            var v = function() {
                    var e = this,
                        l = e.$createElement,
                        d = e._self._c || l;
                    return d("div", {
                        staticClass: "components-container"
                    }, [d("aside", [e._v(" When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner ")]), d("aside", [e._v(" You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally ")]), e._m(0), d("el-tooltip", {
                        attrs: {
                            placement: "top",
                            content: "tooltip"
                        }
                    }, [d("back-to-top", {
                        attrs: {
                            "custom-style": e.myBackToTopStyle,
                            "visibility-height": 300,
                            "back-position": 50,
                            "transition-name": "fade"
                        }
                    })], 1)], 1)
                },
                i = [function() {
                    var e = this,
                        l = e.$createElement,
                        d = e._self._c || l;
                    return d("div", {
                        staticClass: "placeholder-container"
                    }, [d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")]), d("div", [e._v("placeholder")])])
                }],
                o = function() {
                    var e = this,
                        l = e.$createElement,
                        d = e._self._c || l;
                    return d("transition", {
                        attrs: {
                            name: e.transitionName
                        }
                    }, [d("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible,
                            expression: "visible"
                        }],
                        staticClass: "back-to-ceiling",
                        style: e.customStyle,
                        on: {
                            click: e.backToTop
                        }
                    }, [d("svg", {
                        staticClass: "Icon Icon--backToTopArrow",
                        staticStyle: {
                            height: "16px",
                            width: "16px"
                        },
                        attrs: {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 17 17",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true"
                        }
                    }, [d("path", {
                        attrs: {
                            d: "M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"
                        }
                    })])])])
                },
                a = [],
                r = (d("a9e3"), {
                    name: "BackToTop",
                    props: {
                        visibilityHeight: {
                            type: Number,
                            default: 400
                        },
                        backPosition: {
                            type: Number,
                            default: 0
                        },
                        customStyle: {
                            type: Object,
                            default: function() {
                                return {
                                    right: "50px",
                                    bottom: "50px",
                                    width: "40px",
                                    height: "40px",
                                    "border-radius": "4px",
                                    "line-height": "45px",
                                    background: "#e7eaf1"
                                }
                            }
                        },
                        transitionName: {
                            type: String,
                            default: "fade"
                        }
                    },
                    data: function() {
                        return {
                            visible: !1,
                            interval: null,
                            isMoving: !1
                        }
                    },
                    mounted: function() {
                        window.addEventListener("scroll", this.handleScroll)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("scroll", this.handleScroll), this.interval && clearInterval(this.interval)
                    },
                    methods: {
                        handleScroll: function() {
                            this.visible = window.pageYOffset > this.visibilityHeight
                        },
                        backToTop: function() {
                            var e = this;
                            if (!this.isMoving) {
                                var l = window.pageYOffset,
                                    d = 0;
                                this.isMoving = !0, this.interval = setInterval((function() {
                                    var v = Math.floor(e.easeInOutQuad(10 * d, l, -l, 500));
                                    v <= e.backPosition ? (window.scrollTo(0, e.backPosition), clearInterval(e.interval), e.isMoving = !1) : window.scrollTo(0, v), d++
                                }), 16.7)
                            }
                        },
                        easeInOutQuad: function(e, l, d, v) {
                            return (e /= v / 2) < 1 ? d / 2 * e * e + l : -d / 2 * (--e * (e - 2) - 1) + l
                        }
                    }
                }),
                c = r,
                t = (d("e7be"), d("2877")),
                h = Object(t["a"])(c, o, a, !1, null, "053f1ae1", null),
                p = h.exports,
                n = {
                    name: "BackToTopDemo",
                    components: {
                        BackToTop: p
                    },
                    data: function() {
                        return {
                            myBackToTopStyle: {
                                right: "50px",
                                bottom: "50px",
                                width: "40px",
                                height: "40px",
                                "border-radius": "4px",
                                "line-height": "45px",
                                background: "#e7eaf1"
                            }
                        }
                    }
                },
                _ = n,
                s = (d("9e82"), Object(t["a"])(_, v, i, !1, null, "6cf9a355", null));
            l["default"] = s.exports
        },
        e7be: function(e, l, d) {
            "use strict";
            d("c677")
        }
    }
]);