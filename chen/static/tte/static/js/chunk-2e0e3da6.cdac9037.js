(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2e0e3da6"], {
        "2c16": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "components-container"
                    }, [e._m(0), n("div", [n("tinymce", {
                        attrs: {
                            height: 300
                        },
                        model: {
                            value: e.content,
                            callback: function(t) {
                                e.content = t
                            },
                            expression: "content"
                        }
                    })], 1), n("div", {
                        staticClass: "editor-content",
                        domProps: {
                            innerHTML: e._s(e.content)
                        }
                    })])
                },
                o = [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("aside", [e._v(" Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction. "), n("a", {
                        staticClass: "link-type",
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html"
                        }
                    }, [e._v("Documentation")])])
                }],
                a = n("8256"),
                c = {
                    name: "TinymceDemo",
                    components: {
                        Tinymce: a["a"]
                    },
                    data: function() {
                        return {
                            content: '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>\n        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>\n      </ul>'
                        }
                    }
                },
                s = c,
                r = (n("da36"), n("2877")),
                m = Object(r["a"])(s, i, o, !1, null, "1e7d8f0e", null);
            t["default"] = m.exports
        },
        "65d8": function(e, t, n) {},
        da36: function(e, t, n) {
            "use strict";
            n("65d8")
        }
    }
]);