(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d2105d3"], {
        b829: function(n, e, o) {
            "use strict";
            o.r(e);
            o("fb6a"), o("ac1f"), o("841c");
            var c, a, t = {
                    name: "AuthRedirect",
                    created: function() {
                        var n = window.location.search.slice(1);
                        window.localStorage && (window.localStorage.setItem("x-admin-oauth-code", n), window.close())
                    },
                    render: function(n) {
                        return n()
                    }
                },
                d = t,
                i = o("2877"),
                l = Object(i["a"])(d, c, a, !1, null, null, null);
            e["default"] = l.exports
        }
    }
]);