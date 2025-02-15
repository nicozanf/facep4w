(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3ef8d08a"], {
        "1fd7": function(t, e, a) {
            "use strict";
            a("877b")
        },
        3538: function(t, e, a) {
            "use strict";
            a("645e")
        },
        "645e": function(t, e, a) {},
        "877b": function(t, e, a) {},
        e05a: function(t, e, a) {
            "use strict";
            a.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "components-container"
                    }, [t._m(0), a("div", {
                        staticClass: "editor-container"
                    }, [a("json-editor", {
                        ref: "jsonEditor",
                        model: {
                            value: t.value,
                            callback: function(e) {
                                t.value = e
                            },
                            expression: "value"
                        }
                    })], 1)])
                },
                o = [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("aside", [t._v("Json-Editor is base on "), a("a", {
                        attrs: {
                            href: "https://github.com/codemirror/CodeMirror",
                            target: "_blank"
                        }
                    }, [t._v("CodeMirrorr")]), t._v(". Lint base on "), a("a", {
                        attrs: {
                            href: "https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js",
                            target: "_blank"
                        }
                    }, [t._v("json-lint")]), t._v(".")])
                }],
                n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "json-editor"
                    }, [a("textarea", {
                        ref: "textarea"
                    })])
                },
                s = [],
                i = a("56b3"),
                l = a.n(i);
            a("0dd0"), a("a7be"), a("acdf"), a("f9d4"), a("8822"), a("d2de");
            a("ae67");
            var d = {
                    name: "JsonEditor",
                    props: ["value"],
                    data: function() {
                        return {
                            jsonEditor: !1
                        }
                    },
                    watch: {
                        value: function(t) {
                            var e = this.jsonEditor.getValue();
                            t !== e && this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.jsonEditor = l.a.fromTextArea(this.$refs.textarea, {
                            lineNumbers: !0,
                            mode: "application/json",
                            gutters: ["CodeMirror-lint-markers"],
                            theme: "rubyblue",
                            lint: !0
                        }), this.jsonEditor.setValue(JSON.stringify(this.value, null, 2)), this.jsonEditor.on("change", (function(e) {
                            t.$emit("changed", e.getValue()), t.$emit("input", e.getValue())
                        }))
                    },
                    methods: {
                        getValue: function() {
                            return this.jsonEditor.getValue()
                        }
                    }
                },
                m = d,
                u = (a("1fd7"), a("2877")),
                c = Object(u["a"])(m, n, s, !1, null, "1958ddac", null),
                f = c.exports,
                b = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]',
                p = {
                    name: "JsonEditorDemo",
                    components: {
                        JsonEditor: f
                    },
                    data: function() {
                        return {
                            value: JSON.parse(b)
                        }
                    }
                },
                y = p,
                _ = (a("3538"), Object(u["a"])(y, r, o, !1, null, "592e5206", null));
            e["default"] = _.exports
        }
    }
]);