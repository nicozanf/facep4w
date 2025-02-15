(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-77f93088"], {
        "7a87": function(e, s, i) {},
        "8ee8": function(e, s, i) {
            "use strict";
            var t = function() {
                    var e = this,
                        s = e.$createElement,
                        i = e._self._c || s;
                    return i("div", [i("div", {
                        staticStyle: {
                            "margin-bottom": "15px"
                        }
                    }, [e._v(" Your roles: " + e._s(e.roles) + " ")]), e._v(" Switch roles: "), i("el-radio-group", {
                        model: {
                            value: e.switchRoles,
                            callback: function(s) {
                                e.switchRoles = s
                            },
                            expression: "switchRoles"
                        }
                    }, [i("el-radio-button", {
                        attrs: {
                            label: "editor"
                        }
                    }), i("el-radio-button", {
                        attrs: {
                            label: "admin"
                        }
                    })], 1)], 1)
                },
                n = [],
                a = {
                    computed: {
                        roles: function() {
                            return this.$store.getters.roles
                        },
                        switchRoles: {
                            get: function() {
                                return this.roles[0]
                            },
                            set: function(e) {
                                var s = this;
                                this.$store.dispatch("user/changeRoles", e).then((function() {
                                    s.$emit("change")
                                }))
                            }
                        }
                    }
                },
                r = a,
                o = i("2877"),
                l = Object(o["a"])(r, t, n, !1, null, null, null);
            s["a"] = l.exports
        },
        a99f: function(e, s, i) {
            "use strict";
            i.r(s);
            var t = function() {
                    var e = this,
                        s = e.$createElement,
                        i = e._self._c || s;
                    return i("div", {
                        staticClass: "app-container"
                    }, [i("switch-roles", {
                        on: {
                            change: e.handleRolesChange
                        }
                    }), i("div", {
                        key: e.key,
                        staticStyle: {
                            "margin-top": "30px"
                        }
                    }, [i("div", [i("span", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["admin"],
                            expression: "['admin']"
                        }],
                        staticClass: "permission-alert"
                    }, [e._v(" Only "), i("el-tag", {
                        staticClass: "permission-tag",
                        attrs: {
                            size: "small"
                        }
                    }, [e._v("admin")]), e._v(" can see this ")], 1), i("el-tag", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["admin"],
                            expression: "['admin']"
                        }],
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-permission=\"['admin']\" ")])], 1), i("div", [i("span", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["editor"],
                            expression: "['editor']"
                        }],
                        staticClass: "permission-alert"
                    }, [e._v(" Only "), i("el-tag", {
                        staticClass: "permission-tag",
                        attrs: {
                            size: "small"
                        }
                    }, [e._v("editor")]), e._v(" can see this ")], 1), i("el-tag", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["editor"],
                            expression: "['editor']"
                        }],
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-permission=\"['editor']\" ")])], 1), i("div", [i("span", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["admin", "editor"],
                            expression: "['admin','editor']"
                        }],
                        staticClass: "permission-alert"
                    }, [e._v(" Both "), i("el-tag", {
                        staticClass: "permission-tag",
                        attrs: {
                            size: "small"
                        }
                    }, [e._v("admin")]), e._v(" and "), i("el-tag", {
                        staticClass: "permission-tag",
                        attrs: {
                            size: "small"
                        }
                    }, [e._v("editor")]), e._v(" can see this ")], 1), i("el-tag", {
                        directives: [{
                            name: "permission",
                            rawName: "v-permission",
                            value: ["admin", "editor"],
                            expression: "['admin','editor']"
                        }],
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-permission=\"['admin','editor']\" ")])], 1)]), i("div", {
                        key: "checkPermission" + e.key,
                        staticStyle: {
                            "margin-top": "60px"
                        }
                    }, [e._m(0), i("el-tabs", {
                        staticStyle: {
                            width: "550px"
                        },
                        attrs: {
                            type: "border-card"
                        }
                    }, [e.checkPermission(["admin"]) ? i("el-tab-pane", {
                        attrs: {
                            label: "Admin"
                        }
                    }, [e._v(" Admin can see this "), i("el-tag", {
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-if=\"checkPermission(['admin'])\" ")])], 1) : e._e(), e.checkPermission(["editor"]) ? i("el-tab-pane", {
                        attrs: {
                            label: "Editor"
                        }
                    }, [e._v(" Editor can see this "), i("el-tag", {
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-if=\"checkPermission(['editor'])\" ")])], 1) : e._e(), e.checkPermission(["admin", "editor"]) ? i("el-tab-pane", {
                        attrs: {
                            label: "Admin-OR-Editor"
                        }
                    }, [e._v(" Both admin or editor can see this "), i("el-tag", {
                        staticClass: "permission-sourceCode",
                        attrs: {
                            type: "info"
                        }
                    }, [e._v(" v-if=\"checkPermission(['admin','editor'])\" ")])], 1) : e._e()], 1)], 1)], 1)
                },
                n = [function() {
                    var e = this,
                        s = e.$createElement,
                        i = e._self._c || s;
                    return i("aside", [e._v(" In some cases, using v-permission will have no effect. For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if. "), i("br"), e._v(" e.g. ")])
                }],
                a = (i("caad"), i("2532"), i("4360"));

            function r(e, s) {
                var i = s.value,
                    t = a["a"].getters && a["a"].getters.roles;
                if (!(i && i instanceof Array)) throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
                if (i.length > 0) {
                    var n = i,
                        r = t.some((function(e) {
                            return n.includes(e)
                        }));
                    r || e.parentNode && e.parentNode.removeChild(e)
                }
            }
            var o = {
                    inserted: function(e, s) {
                        r(e, s)
                    },
                    update: function(e, s) {
                        r(e, s)
                    }
                },
                l = function(e) {
                    e.directive("permission", o)
                };
            window.Vue && (window["permission"] = o, Vue.use(l)), o.install = l;
            var c = o;

            function m(e) {
                if (e && e instanceof Array && e.length > 0) {
                    var s = a["a"].getters && a["a"].getters.roles,
                        i = e,
                        t = s.some((function(e) {
                            return i.includes(e)
                        }));
                    return t
                }
                return console.error("need roles! Like v-permission=\"['admin','editor']\""), !1
            }
            var d = i("8ee8"),
                v = {
                    name: "DirectivePermission",
                    components: {
                        SwitchRoles: d["a"]
                    },
                    directives: {
                        permission: c
                    },
                    data: function() {
                        return {
                            key: 1
                        }
                    },
                    methods: {
                        checkPermission: m,
                        handleRolesChange: function() {
                            this.key++
                        }
                    }
                },
                p = v,
                u = (i("dea2"), i("2877")),
                h = Object(u["a"])(p, t, n, !1, null, "10192f06", null);
            s["default"] = h.exports
        },
        dea2: function(e, s, i) {
            "use strict";
            i("7a87")
        }
    }
]);