(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-31b9cda4"], {
        "14a3": function(t, e, n) {},
        "440b": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "components-container"
                    }, [t._m(0), n("div", {
                        staticClass: "editor-container"
                    }, [n("el-tag", {
                        staticClass: "tag-title"
                    }, [t._v(" Basic: ")]), n("markdown-editor", {
                        attrs: {
                            height: "300px"
                        },
                        model: {
                            value: t.content1,
                            callback: function(e) {
                                t.content1 = e
                            },
                            expression: "content1"
                        }
                    })], 1), n("div", {
                        staticClass: "editor-container"
                    }, [n("el-tag", {
                        staticClass: "tag-title"
                    }, [t._v(" Markdown Mode: ")]), n("markdown-editor", {
                        ref: "markdownEditor",
                        attrs: {
                            options: {
                                hideModeSwitch: !0,
                                previewStyle: "tab"
                            },
                            height: "200px"
                        },
                        model: {
                            value: t.content2,
                            callback: function(e) {
                                t.content2 = e
                            },
                            expression: "content2"
                        }
                    })], 1), n("div", {
                        staticClass: "editor-container"
                    }, [n("el-tag", {
                        staticClass: "tag-title"
                    }, [t._v(" Customize Toolbar: ")]), n("markdown-editor", {
                        attrs: {
                            options: {
                                toolbarItems: ["heading", "bold", "italic"]
                            }
                        },
                        model: {
                            value: t.content3,
                            callback: function(e) {
                                t.content3 = e
                            },
                            expression: "content3"
                        }
                    })], 1), n("div", {
                        staticClass: "editor-container"
                    }, [n("el-tag", {
                        staticClass: "tag-title"
                    }, [t._v(" I18n: ")]), n("el-alert", {
                        attrs: {
                            closable: !1,
                            title: "You can change the language of the admin system to see the effect",
                            type: "success"
                        }
                    }), n("markdown-editor", {
                        ref: "markdownEditor",
                        attrs: {
                            language: t.language,
                            height: "300px"
                        },
                        model: {
                            value: t.content4,
                            callback: function(e) {
                                t.content4 = e
                            },
                            expression: "content4"
                        }
                    })], 1), n("el-button", {
                        staticStyle: {
                            "margin-top": "80px"
                        },
                        attrs: {
                            type: "primary",
                            icon: "el-icon-document"
                        },
                        on: {
                            click: t.getHtml
                        }
                    }, [t._v(" Get HTML ")]), n("div", {
                        domProps: {
                            innerHTML: t._s(t.html)
                        }
                    })], 1)
                },
                o = [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("aside", [t._v("Markdown is based on "), n("a", {
                        attrs: {
                            href: "https://github.com/nhnent/tui.editor",
                            target: "_blank"
                        }
                    }, [t._v("tui.editor")]), t._v(" ，simply wrapped with Vue. "), n("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"
                        }
                    }, [t._v(" Documentation ")])])
                }],
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        attrs: {
                            id: t.id
                        }
                    })
                },
                r = [],
                s = n("5530"),
                d = (n("b680"), n("a7be"), n("44f8"), n("a6e0"), n("547e")),
                l = n.n(d),
                c = {
                    minHeight: "200px",
                    previewStyle: "vertical",
                    useCommandShortcut: !0,
                    useDefaultHTMLSanitizer: !0,
                    usageStatistics: !1,
                    hideModeSwitch: !1,
                    toolbarItems: ["heading", "bold", "italic", "strike", "divider", "hr", "quote", "divider", "ul", "ol", "task", "indent", "outdent", "divider", "table", "image", "link", "divider", "code", "codeblock"]
                },
                u = {
                    name: "MarkdownEditor",
                    props: {
                        value: {
                            type: String,
                            default: ""
                        },
                        id: {
                            type: String,
                            required: !1,
                            default: function() {
                                return "markdown-editor-" + +new Date + (1e3 * Math.random()).toFixed(0)
                            }
                        },
                        options: {
                            type: Object,
                            default: function() {
                                return c
                            }
                        },
                        mode: {
                            type: String,
                            default: "markdown"
                        },
                        height: {
                            type: String,
                            required: !1,
                            default: "300px"
                        },
                        language: {
                            type: String,
                            required: !1,
                            default: "en_US"
                        }
                    },
                    data: function() {
                        return {
                            editor: null
                        }
                    },
                    computed: {
                        editorOptions: function() {
                            var t = Object.assign({}, c, this.options);
                            return t.initialEditType = this.mode, t.height = this.height, t.language = this.language, t
                        }
                    },
                    watch: {
                        value: function(t, e) {
                            t !== e && t !== this.editor.getValue() && this.editor.setValue(t)
                        },
                        language: function(t) {
                            this.destroyEditor(), this.initEditor()
                        },
                        height: function(t) {
                            this.editor.height(t)
                        },
                        mode: function(t) {
                            this.editor.changeMode(t)
                        }
                    },
                    mounted: function() {
                        this.initEditor()
                    },
                    destroyed: function() {
                        this.destroyEditor()
                    },
                    methods: {
                        initEditor: function() {
                            var t = this;
                            this.editor = new l.a(Object(s["a"])({
                                el: document.getElementById(this.id)
                            }, this.editorOptions)), this.value && this.editor.setValue(this.value), this.editor.on("change", (function() {
                                t.$emit("input", t.editor.getValue())
                            }))
                        },
                        destroyEditor: function() {
                            this.editor && (this.editor.off("change"), this.editor.remove())
                        },
                        setValue: function(t) {
                            this.editor.setValue(t)
                        },
                        getValue: function() {
                            return this.editor.getValue()
                        },
                        setHtml: function(t) {
                            this.editor.setHtml(t)
                        },
                        getHtml: function() {
                            return this.editor.getHtml()
                        }
                    }
                },
                h = u,
                m = n("2877"),
                g = Object(m["a"])(h, a, r, !1, null, null, null),
                f = g.exports,
                p = "\n**This is test**\n\n* vue\n* element\n* webpack\n\n",
                v = {
                    name: "MarkdownDemo",
                    components: {
                        MarkdownEditor: f
                    },
                    data: function() {
                        return {
                            content1: p,
                            content2: p,
                            content3: p,
                            content4: p,
                            html: "",
                            languageTypeList: {
                                en: "en_US",
                                zh: "zh_CN",
                                es: "es_ES"
                            }
                        }
                    },
                    computed: {
                        language: function() {
                            return this.languageTypeList["en"]
                        }
                    },
                    methods: {
                        getHtml: function() {
                            this.html = this.$refs.markdownEditor.getHtml(), console.log(this.html)
                        }
                    }
                },
                b = v,
                w = (n("801a"), Object(m["a"])(b, i, o, !1, null, "76fc6684", null));
            e["default"] = w.exports
        },
        "801a": function(t, e, n) {
            "use strict";
            n("14a3")
        }
    }
]);