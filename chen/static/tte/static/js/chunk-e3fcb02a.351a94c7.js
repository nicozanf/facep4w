(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e3fcb02a"], {
        "0f0f": function(t, e, a) {},
        "98c5": function(t, e, a) {
            "use strict";
            a("eecd")
        },
        d63e: function(t, e, a) {
            "use strict";
            a.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-card", {
                        staticClass: "box-card"
                    }, [a("div", {
                        attrs: {
                            slot: "header"
                        },
                        slot: "header"
                    }, [a("a", {
                        staticClass: "link-type link-title",
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.github.io/vue-element-admin-site/guide/advanced/theme.html"
                        }
                    }, [t._v(" Theme documentation ")])]), a("div", {
                        staticClass: "box-item"
                    }, [a("span", {
                        staticClass: "field-label"
                    }, [t._v("Change Theme : ")]), a("el-switch", {
                        model: {
                            value: t.theme,
                            callback: function(e) {
                                t.theme = e
                            },
                            expression: "theme"
                        }
                    }), a("aside", {
                        staticStyle: {
                            "margin-top": "15px"
                        }
                    }, [t._v(" Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details. ")])], 1)]), a("div", {
                        staticClass: "block"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v(" Primary ")]), a("el-button", {
                        attrs: {
                            type: "success"
                        }
                    }, [t._v(" Success ")]), a("el-button", {
                        attrs: {
                            type: "info"
                        }
                    }, [t._v(" Info ")]), a("el-button", {
                        attrs: {
                            type: "warning"
                        }
                    }, [t._v(" Warning ")]), a("el-button", {
                        attrs: {
                            type: "danger"
                        }
                    }, [t._v(" Danger ")])], 1), a("div", {
                        staticClass: "block"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary",
                            icon: "el-icon-edit"
                        }
                    }), a("el-button", {
                        attrs: {
                            type: "primary",
                            icon: "el-icon-share"
                        }
                    }), a("el-button", {
                        attrs: {
                            type: "primary",
                            icon: "el-icon-delete"
                        }
                    }), a("el-button", {
                        attrs: {
                            type: "primary",
                            icon: "el-icon-search"
                        }
                    }, [t._v(" Search ")]), a("el-button", {
                        attrs: {
                            type: "primary"
                        }
                    }, [t._v(" Upload "), a("i", {
                        staticClass: "el-icon-upload el-icon-right"
                    })])], 1), a("div", {
                        staticClass: "block"
                    }, t._l(t.tags, (function(e) {
                        return a("el-tag", {
                            key: e.type,
                            staticClass: "tag-item",
                            attrs: {
                                type: e.type
                            }
                        }, [t._v(" " + t._s(e.name) + " ")])
                    })), 1), a("div", {
                        staticClass: "block"
                    }, [a("el-radio-group", {
                        model: {
                            value: t.radio,
                            callback: function(e) {
                                t.radio = e
                            },
                            expression: "radio"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 3
                        }
                    }, [t._v(" Option A ")]), a("el-radio", {
                        attrs: {
                            label: 6
                        }
                    }, [t._v(" Option B ")]), a("el-radio", {
                        attrs: {
                            label: 9
                        }
                    }, [t._v(" Option C ")])], 1)], 1), a("div", {
                        staticClass: "block"
                    }, [a("el-slider", {
                        model: {
                            value: t.slideValue,
                            callback: function(e) {
                                t.slideValue = e
                            },
                            expression: "slideValue"
                        }
                    })], 1)], 1)
                },
                n = [],
                s = a("ed08"),
                l = (a("0f0f"), {
                    name: "Theme",
                    data: function() {
                        return {
                            theme: !1,
                            tags: [{
                                name: "Tag One",
                                type: ""
                            }, {
                                name: "Tag Two",
                                type: "info"
                            }, {
                                name: "Tag Three",
                                type: "success"
                            }, {
                                name: "Tag Four",
                                type: "warning"
                            }, {
                                name: "Tag Five",
                                type: "danger"
                            }],
                            slideValue: 50,
                            radio: 3
                        }
                    },
                    watch: {
                        theme: function() {
                            Object(s["g"])(document.body, "custom-theme")
                        }
                    }
                }),
                o = l,
                r = (a("98c5"), a("2877")),
                c = Object(r["a"])(o, i, n, !1, null, "2342abf8", null);
            e["default"] = c.exports
        },
        eecd: function(t, e, a) {}
    }
]);