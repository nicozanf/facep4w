(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-c2891248"], {
        "7bca": function(e, t, a) {},
        c361: function(e, t, a) {
            "use strict";
            a.r(t);
            var l = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "components-container"
                    }, [a("el-drag-select", {
                        staticStyle: {
                            width: "500px"
                        },
                        attrs: {
                            multiple: "",
                            placeholder: "请选择"
                        },
                        model: {
                            value: e.value,
                            callback: function(t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    }, e._l(e.options, (function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    })), 1), a("div", {
                        staticStyle: {
                            "margin-top": "30px"
                        }
                    }, e._l(e.value, (function(t) {
                        return a("el-tag", {
                            key: t,
                            staticStyle: {
                                "margin-right": "15px"
                            }
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 1)], 1)
                },
                n = [],
                s = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("el-select", e._g(e._b({
                        ref: "dragSelect",
                        staticClass: "drag-select",
                        attrs: {
                            multiple: ""
                        },
                        model: {
                            value: e.selectVal,
                            callback: function(t) {
                                e.selectVal = t
                            },
                            expression: "selectVal"
                        }
                    }, "el-select", e.$attrs, !1), e.$listeners), [e._t("default")], 2)
                },
                c = [],
                r = a("2909"),
                u = (a("a434"), a("53fe")),
                i = a.n(u),
                o = {
                    name: "DragSelect",
                    props: {
                        value: {
                            type: Array,
                            required: !0
                        }
                    },
                    computed: {
                        selectVal: {
                            get: function() {
                                return Object(r["a"])(this.value)
                            },
                            set: function(e) {
                                this.$emit("input", Object(r["a"])(e))
                            }
                        }
                    },
                    mounted: function() {
                        this.setSort()
                    },
                    methods: {
                        setSort: function() {
                            var e = this,
                                t = this.$refs.dragSelect.$el.querySelectorAll(".el-select__tags > span")[0];
                            this.sortable = i.a.create(t, {
                                ghostClass: "sortable-ghost",
                                setData: function(e) {
                                    e.setData("Text", "")
                                },
                                onEnd: function(t) {
                                    var a = e.value.splice(t.oldIndex, 1)[0];
                                    e.value.splice(t.newIndex, 0, a)
                                }
                            })
                        }
                    }
                },
                p = o,
                v = (a("c482"), a("2877")),
                d = Object(v["a"])(p, s, c, !1, null, "7e74c641", null),
                f = d.exports,
                b = {
                    name: "DragSelectDemo",
                    components: {
                        ElDragSelect: f
                    },
                    data: function() {
                        return {
                            value: ["Apple", "Banana", "Orange"],
                            options: [{
                                value: "Apple",
                                label: "Apple"
                            }, {
                                value: "Banana",
                                label: "Banana"
                            }, {
                                value: "Orange",
                                label: "Orange"
                            }, {
                                value: "Pear",
                                label: "Pear"
                            }, {
                                value: "Strawberry",
                                label: "Strawberry"
                            }]
                        }
                    }
                },
                g = b,
                m = Object(v["a"])(g, l, n, !1, null, null, null);
            t["default"] = m.exports
        },
        c482: function(e, t, a) {
            "use strict";
            a("7bca")
        }
    }
]);