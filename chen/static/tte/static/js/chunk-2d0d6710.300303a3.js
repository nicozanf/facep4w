(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0d6710"], {
        7320: function(e, t, i) {
            "use strict";
            i.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "app-container"
                    }, [e._m(0), i("el-button", {
                        attrs: {
                            icon: "el-icon-question",
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), t.stopPropagation(), e.guide(t)
                            }
                        }
                    }, [e._v(" Show Guide ")])], 1)
                },
                o = [function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("aside", [e._v(" The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on "), i("a", {
                        attrs: {
                            href: "https://github.com/kamranahmedse/driver.js",
                            target: "_blank"
                        }
                    }, [e._v("driver.js.")])])
                }],
                r = i("c24c"),
                s = i.n(r),
                a = (i("01d7"), [{
                    element: "#hamburger-container",
                    popover: {
                        title: "Hamburger",
                        description: "Open && Close sidebar",
                        position: "bottom"
                    }
                }, {
                    element: "#breadcrumb-container",
                    popover: {
                        title: "Breadcrumb",
                        description: "Indicate the current page location",
                        position: "bottom"
                    }
                }, {
                    element: "#header-search",
                    popover: {
                        title: "Page Search",
                        description: "Page search, quick navigation",
                        position: "left"
                    }
                }, {
                    element: "#screenfull",
                    popover: {
                        title: "Screenfull",
                        description: "Set the page into fullscreen",
                        position: "left"
                    }
                }, {
                    element: "#size-select",
                    popover: {
                        title: "Switch Size",
                        description: "Switch the system size",
                        position: "left"
                    }
                }, {
                    element: "#tags-view-container",
                    popover: {
                        title: "Tags view",
                        description: "The history of the page you visited",
                        position: "bottom"
                    },
                    padding: 0
                }]),
                c = a,
                p = {
                    name: "Guide",
                    data: function() {
                        return {
                            driver: null
                        }
                    },
                    mounted: function() {
                        this.driver = new s.a
                    },
                    methods: {
                        guide: function() {
                            this.driver.defineSteps(c), this.driver.start()
                        }
                    }
                },
                l = p,
                u = i("2877"),
                d = Object(u["a"])(l, n, o, !1, null, null, null);
            t["default"] = d.exports
        }
    }
]);