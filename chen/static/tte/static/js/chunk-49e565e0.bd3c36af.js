(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-49e565e0"], {
        "0a9d": function(e, t, n) {
            "use strict";
            n("c556")
        },
        c556: function(e, t, n) {},
        d78e: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.handleAddRole
                        }
                    }, [e._v("New Role")]), n("el-table", {
                        staticStyle: {
                            width: "100%",
                            "margin-top": "30px"
                        },
                        attrs: {
                            data: e.rolesList,
                            border: ""
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "Role Key",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(" " + e._s(t.row.key) + " ")]
                            }
                        }])
                    }), n("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "Role Name",
                            width: "220"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(" " + e._s(t.row.name) + " ")]
                            }
                        }])
                    }), n("el-table-column", {
                        attrs: {
                            align: "header-center",
                            label: "Description"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [e._v(" " + e._s(t.row.description) + " ")]
                            }
                        }])
                    }), n("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "Operations"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [n("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.handleEdit(t)
                                        }
                                    }
                                }, [e._v("Edit")]), n("el-button", {
                                    attrs: {
                                        type: "danger",
                                        size: "small"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.handleDelete(t)
                                        }
                                    }
                                }, [e._v("Delete")])]
                            }
                        }])
                    })], 1), n("el-dialog", {
                        attrs: {
                            visible: e.dialogVisible,
                            title: "edit" === e.dialogType ? "Edit Role" : "New Role"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.dialogVisible = t
                            }
                        }
                    }, [n("el-form", {
                        attrs: {
                            model: e.role,
                            "label-width": "80px",
                            "label-position": "left"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "Name"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "Role Name"
                        },
                        model: {
                            value: e.role.name,
                            callback: function(t) {
                                e.$set(e.role, "name", t)
                            },
                            expression: "role.name"
                        }
                    })], 1), n("el-form-item", {
                        attrs: {
                            label: "Desc"
                        }
                    }, [n("el-input", {
                        attrs: {
                            autosize: {
                                minRows: 2,
                                maxRows: 4
                            },
                            type: "textarea",
                            placeholder: "Role Description"
                        },
                        model: {
                            value: e.role.description,
                            callback: function(t) {
                                e.$set(e.role, "description", t)
                            },
                            expression: "role.description"
                        }
                    })], 1), n("el-form-item", {
                        attrs: {
                            label: "Menus"
                        }
                    }, [n("el-tree", {
                        ref: "tree",
                        staticClass: "permission-tree",
                        attrs: {
                            "check-strictly": e.checkStrictly,
                            data: e.routesData,
                            props: e.defaultProps,
                            "show-checkbox": "",
                            "node-key": "path"
                        }
                    })], 1)], 1), n("div", {
                        staticStyle: {
                            "text-align": "right"
                        }
                    }, [n("el-button", {
                        attrs: {
                            type: "danger"
                        },
                        on: {
                            click: function(t) {
                                e.dialogVisible = !1
                            }
                        }
                    }, [e._v("Cancel")]), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.confirmRole
                        }
                    }, [e._v("Confirm")])], 1)], 1)], 1)
                },
                a = [],
                i = n("5530"),
                o = n("2909"),
                l = n("b85c"),
                s = n("1da1"),
                c = (n("159b"), n("99af"), n("a434"), n("caad"), n("2532"), n("a4d3"), n("e01a"), n("b0c0"), n("4de4"), n("96cf"), n("df7c")),
                u = n.n(c),
                d = n("ed08"),
                h = n("b775");

            function f() {
                return Object(h["a"])({
                    url: "/routes",
                    method: "get"
                })
            }

            function p() {
                return Object(h["a"])({
                    url: "/roles",
                    method: "get"
                })
            }

            function m(e) {
                return Object(h["a"])({
                    url: "/role",
                    method: "post",
                    data: e
                })
            }

            function g(e, t) {
                return Object(h["a"])({
                    url: "/role/".concat(e),
                    method: "put",
                    data: t
                })
            }

            function b(e) {
                return Object(h["a"])({
                    url: "/role/".concat(e),
                    method: "delete"
                })
            }
            var v = {
                    key: "",
                    name: "",
                    description: "",
                    routes: []
                },
                y = {
                    data: function() {
                        return {
                            role: Object.assign({}, v),
                            routes: [],
                            rolesList: [],
                            dialogVisible: !1,
                            dialogType: "new",
                            checkStrictly: !1,
                            defaultProps: {
                                children: "children",
                                label: "title"
                            }
                        }
                    },
                    computed: {
                        routesData: function() {
                            return this.routes
                        }
                    },
                    created: function() {
                        this.getRoutes(), this.getRoles()
                    },
                    methods: {
                        getRoutes: function() {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, f();
                                        case 2:
                                            n = t.sent, e.serviceRoutes = n.data, e.routes = e.generateRoutes(n.data);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getRoles: function() {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var n;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, p();
                                        case 2:
                                            n = t.sent, e.rolesList = n.data;
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        generateRoutes: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                r = [],
                                a = Object(l["a"])(e);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    var i = t.value;
                                    if (!i.hidden) {
                                        var o = this.onlyOneShowingChild(i.children, i);
                                        i.children && o && !i.alwaysShow && (i = o);
                                        var s = {
                                            path: u.a.resolve(n, i.path),
                                            title: i.meta && i.meta.title
                                        };
                                        i.children && (s.children = this.generateRoutes(i.children, s.path)), r.push(s)
                                    }
                                }
                            } catch (c) {
                                a.e(c)
                            } finally {
                                a.f()
                            }
                            return r
                        },
                        generateArr: function(e) {
                            var t = this,
                                n = [];
                            return e.forEach((function(e) {
                                if (n.push(e), e.children) {
                                    var r = t.generateArr(e.children);
                                    r.length > 0 && (n = [].concat(Object(o["a"])(n), Object(o["a"])(r)))
                                }
                            })), n
                        },
                        handleAddRole: function() {
                            this.role = Object.assign({}, v), this.$refs.tree && this.$refs.tree.setCheckedNodes([]), this.dialogType = "new", this.dialogVisible = !0
                        },
                        handleEdit: function(e) {
                            var t = this;
                            this.dialogType = "edit", this.dialogVisible = !0, this.checkStrictly = !0, this.role = Object(d["c"])(e.row), this.$nextTick((function() {
                                var e = t.generateRoutes(t.role.routes);
                                t.$refs.tree.setCheckedNodes(t.generateArr(e)), t.checkStrictly = !1
                            }))
                        },
                        handleDelete: function(e) {
                            var t = this,
                                n = e.$index,
                                r = e.row;
                            this.$confirm("Confirm to remove the role?", "Warning", {
                                confirmButtonText: "Confirm",
                                cancelButtonText: "Cancel",
                                type: "warning"
                            }).then(Object(s["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b(r.key);
                                        case 2:
                                            t.rolesList.splice(n, 1), t.$message({
                                                type: "success",
                                                message: "Delete succed!"
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).catch((function(e) {
                                console.error(e)
                            }))
                        },
                        generateTree: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                r = arguments.length > 2 ? arguments[2] : void 0,
                                a = [],
                                i = Object(l["a"])(e);
                            try {
                                for (i.s(); !(t = i.n()).done;) {
                                    var o = t.value,
                                        s = u.a.resolve(n, o.path);
                                    o.children && (o.children = this.generateTree(o.children, s, r)), (r.includes(s) || o.children && o.children.length >= 1) && a.push(o)
                                }
                            } catch (c) {
                                i.e(c)
                            } finally {
                                i.f()
                            }
                            return a
                        },
                        confirmRole: function() {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var n, r, a, i, o, l, s, c, u;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = "edit" === e.dialogType, r = e.$refs.tree.getCheckedKeys(), e.role.routes = e.generateTree(Object(d["c"])(e.serviceRoutes), "/", r), !n) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.next = 6, g(e.role.key, e.role);
                                        case 6:
                                            a = 0;
                                        case 7:
                                            if (!(a < e.rolesList.length)) {
                                                t.next = 14;
                                                break
                                            }
                                            if (e.rolesList[a].key !== e.role.key) {
                                                t.next = 11;
                                                break
                                            }
                                            return e.rolesList.splice(a, 1, Object.assign({}, e.role)), t.abrupt("break", 14);
                                        case 11:
                                            a++, t.next = 7;
                                            break;
                                        case 14:
                                            t.next = 22;
                                            break;
                                        case 16:
                                            return t.next = 18, m(e.role);
                                        case 18:
                                            i = t.sent, o = i.data, e.role.key = o.key, e.rolesList.push(e.role);
                                        case 22:
                                            l = e.role, s = l.description, c = l.key, u = l.name, e.dialogVisible = !1, e.$notify({
                                                title: "Success",
                                                dangerouslyUseHTMLString: !0,
                                                message: "\n            <div>Role Key: ".concat(c, "</div>\n            <div>Role Name: ").concat(u, "</div>\n            <div>Description: ").concat(s, "</div>\n          "),
                                                type: "success"
                                            });
                                        case 25:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        onlyOneShowingChild: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = null,
                                r = e.filter((function(e) {
                                    return !e.hidden
                                }));
                            return 1 === r.length ? (n = r[0], n.path = u.a.resolve(t.path, n.path), n) : 0 === r.length && (n = Object(i["a"])(Object(i["a"])({}, t), {}, {
                                path: "",
                                noShowingChildren: !0
                            }), n)
                        }
                    }
                },
                k = y,
                w = (n("0a9d"), n("2877")),
                R = Object(w["a"])(k, r, a, !1, null, "0de31d1e", null);
            t["default"] = R.exports
        }
    }
]);