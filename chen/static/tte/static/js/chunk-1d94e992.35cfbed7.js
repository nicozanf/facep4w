(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1d94e992"], {
        "3c34": function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container documentation-container"
                    }, [a("a", {
                        staticClass: "document-btn",
                        attrs: {
                            target: "_blank",
                            href: "https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=demo_English_button"
                        }
                    }, [t._v("Java backend integration")]), a("a", {
                        staticClass: "document-btn",
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.github.io/vue-element-admin-site/"
                        }
                    }, [t._v("Documentation")]), a("a", {
                        staticClass: "document-btn",
                        attrs: {
                            target: "_blank",
                            href: "https://github.com/PanJiaChen/vue-element-admin/"
                        }
                    }, [t._v("Github Repository")]), a("a", {
                        staticClass: "document-btn",
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.gitee.io/vue-element-admin-site/zh/"
                        }
                    }, [t._v("国内文档")]), a("dropdown-menu", {
                        staticClass: "document-btn",
                        attrs: {
                            items: t.articleList,
                            title: "系列文章"
                        }
                    }), a("a", {
                        staticClass: "document-btn",
                        attrs: {
                            target: "_blank",
                            href: "https://panjiachen.github.io/vue-element-admin-site/zh/job/"
                        }
                    }, [t._v("内推招聘")])], 1)
                },
                i = [],
                s = a("7c70"),
                c = {
                    name: "Documentation",
                    components: {
                        DropdownMenu: s["a"]
                    },
                    data: function() {
                        return {
                            articleList: [{
                                title: "基础篇",
                                href: "https://juejin.im/post/59097cd7a22b9d0065fb61d2"
                            }, {
                                title: "登录权限篇",
                                href: "https://juejin.im/post/591aa14f570c35006961acac"
                            }, {
                                title: "实战篇",
                                href: "https://juejin.im/post/593121aa0ce4630057f70d35"
                            }, {
                                title: "vue-admin-template 篇",
                                href: "https://juejin.im/post/595b4d776fb9a06bbe7dba56"
                            }, {
                                title: "v4.0 篇",
                                href: "https://juejin.im/post/5c92ff94f265da6128275a85"
                            }, {
                                title: "自行封装 component",
                                href: "https://segmentfault.com/a/1190000009090836"
                            }, {
                                title: "优雅的使用 icon",
                                href: "https://juejin.im/post/59bb864b5188257e7a427c09"
                            }, {
                                title: "webpack4（上）",
                                href: "https://juejin.im/post/59bb864b5188257e7a427c09"
                            }, {
                                title: "webpack4（下）",
                                href: "https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc"
                            }]
                        }
                    }
                },
                r = c,
                u = (a("92b0"), a("2877")),
                o = Object(u["a"])(r, n, i, !1, null, "202fa585", null);
            e["default"] = o.exports
        },
        "4ba3": function(t, e, a) {
            "use strict";
            a("7626")
        },
        "53cc": function(t, e, a) {},
        7626: function(t, e, a) {},
        "7c70": function(t, e, a) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "share-dropdown-menu",
                        class: {
                            active: t.isActive
                        }
                    }, [a("div", {
                        staticClass: "share-dropdown-menu-wrapper"
                    }, [a("span", {
                        staticClass: "share-dropdown-menu-title",
                        on: {
                            click: function(e) {
                                return e.target !== e.currentTarget ? null : t.clickTitle(e)
                            }
                        }
                    }, [t._v(t._s(t.title))]), t._l(t.items, (function(e, n) {
                        return a("div", {
                            key: n,
                            staticClass: "share-dropdown-menu-item"
                        }, [e.href ? a("a", {
                            attrs: {
                                href: e.href,
                                target: "_blank"
                            }
                        }, [t._v(t._s(e.title))]) : a("span", [t._v(t._s(e.title))])])
                    }))], 2)])
                },
                i = [],
                s = {
                    props: {
                        items: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        title: {
                            type: String,
                            default: "vue"
                        }
                    },
                    data: function() {
                        return {
                            isActive: !1
                        }
                    },
                    methods: {
                        clickTitle: function() {
                            this.isActive = !this.isActive
                        }
                    }
                },
                c = s,
                r = (a("4ba3"), a("2877")),
                u = Object(r["a"])(c, n, i, !1, null, null, null);
            e["a"] = u.exports
        },
        "92b0": function(t, e, a) {
            "use strict";
            a("53cc")
        }
    }
]);