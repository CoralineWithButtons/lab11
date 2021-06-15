(function(t) {
    function o(o) {
        for (var i, a, r = o[0], l = o[1], d = o[2], u = 0, m = []; u < r.length; u++) a = r[u], Object.prototype.hasOwnProperty.call(s, a) && s[a] && m.push(s[a][0]), s[a] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        c && c(o);
        while (m.length) m.shift()();
        return n.push.apply(n, d || []), e()
    }

    function e() {
        for (var t, o = 0; o < n.length; o++) {
            for (var e = n[o], i = !0, r = 1; r < e.length; r++) {
                var l = e[r];
                0 !== s[l] && (i = !1)
            }
            i && (n.splice(o--, 1), t = a(a.s = e[0]))
        }
        return t
    }
    var i = {},
        s = {
            app: 0
        },
        n = [];

    function a(o) {
        if (i[o]) return i[o].exports;
        var e = i[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(e.exports, e, e.exports, a), e.l = !0, e.exports
    }
    a.m = t, a.c = i, a.d = function(t, o, e) {
        a.o(t, o) || Object.defineProperty(t, o, {
            enumerable: !0,
            get: e
        })
    }, a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, o) {
        if (1 & o && (t = a(t)), 8 & o) return t;
        if (4 & o && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (a.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & o && "string" != typeof t)
            for (var i in t) a.d(e, i, function(o) {
                return t[o]
            }.bind(null, i));
        return e
    }, a.n = function(t) {
        var o = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return a.d(o, "a", o), o
    }, a.o = function(t, o) {
        return Object.prototype.hasOwnProperty.call(t, o)
    }, a.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = o, r = r.slice();
    for (var d = 0; d < r.length; d++) o(r[d]);
    var c = l;
    n.push([0, "chunk-vendors"]), e()
})({
    0: function(t, o, e) {
        t.exports = e("56d7")
    },
    "33bf": function(t, o, e) {
        t.exports = e.p + "img/pencil.65405b77.svg"
    },
    "56d7": function(t, o, e) {
        "use strict";
        e.r(o);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var i = e("2b0e"),
            s = function() {
                var t = this,
                    o = t.$createElement,
                    e = t._self._c || o;
                return e("div", {
                    class: {
                        "dark-theme": "1" == t.$store.state.darkTheme
                    },
                    attrs: {
                        id: "app"
                    }
                }, [e("header", {
                    staticClass: "header"
                }, [t._m(0), e("h1", {
                    staticClass: "header__text"
                }, [t._v("Доска задач Сиротов Дмитрий")]), e("div", {
                    staticClass: "header__switch-block"
                }, [e("span", [t._v("Сменить тему")]), e("div", {
                    staticClass: "header__switch-wrap",
                    on: {
                        click: function(o) {
                            return t.changeTheme()
                        }
                    }
                }, [e("div", {
                    staticClass: "header__theme-switch"
                })])])]), e("main", {
                    staticClass: "main"
                }, [e("div", {
                    staticClass: "modal-open-button__wrap"
                }, [e("button", {
                    staticClass: "modal-open-button",
                    attrs: {
                        id: "openModal"
                    },
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("openModal", {
                                mode: "createTodo",
                                id: "0"
                            })
                        }
                    }
                }, [t._v(" Создать задачу ")])]), t.$store.state.showModal ? e("Modal", {
                    ref: "modal",
                    attrs: {
                        mode: t.$store.state.modalOpeningMode
                    },
                    on: {
                        close: function(o) {
                            t.$store.state.showModal = !1
                        }
                    }
                }) : t._e(), e("TodoList")], 1), e("footer", {
                    staticClass: "footer"
                }, [t._v(" Сиротов Дмитрий Павлович, 201-322 ")])])
            },
            n = [function() {
                var t = this,
                    o = t.$createElement,
                    i = t._self._c || o;
                return i("div", {
                    staticClass: "header__logo-block"
                }, [i("figure", {
                    staticClass: "header__logo"
                }, [i("img", {
                    attrs: {
                        src: e("9b19"),
                        alt: "Logo"
                    }
                })])])
            }],
            a = function() {
                var t = this,
                    o = t.$createElement,
                    e = t._self._c || o;
                return e("section", {
                    staticClass: "todo-list"
                }, [e("ul", {
                    staticClass: "todo-list__list"
                }, [e("h2", {
                    staticClass: "todo-list__header"
                }, [t._v("Задачи")]), t._l(t.$store.state.todos, (function(o) {
                    return "backlog" === o.status ? e("Todo", {
                        key: o,
                        attrs: {
                            todo: o
                        }
                    }) : t._e()
                }))], 2), e("ul", {
                    staticClass: "todo-list__list todo-list__list_in-progress"
                }, [e("h2", {
                    staticClass: "todo-list__header"
                }, [t._v("В процессе")]), t._l(t.$store.state.todos, (function(o) {
                    return "inProgress" === o.status ? e("TodoInProgress", {
                        key: o,
                        attrs: {
                            todo: o
                        }
                    }) : t._e()
                }))], 2), e("ul", {
                    staticClass: "todo-list__list todo-list__list_ready"
                }, [e("h2", {
                    staticClass: "todo-list__header"
                }, [t._v("Завершены")]), t._l(t.$store.state.todos, (function(o) {
                    return "done" === o.status ? e("TodoCompleted", {
                        key: o,
                        attrs: {
                            todo: o
                        }
                    }) : t._e()
                }))], 2)])
            },
            r = [],
            l = function() {
                var t = this,
                    o = t.$createElement,
                    i = t._self._c || o;
                return i("li", {
                    staticClass: "todo-list__item"
                }, [i("div", {
                    staticClass: "todo-list__name"
                }, [t._v(" Задача №" + t._s(t.todo.id) + " "), i("div", {
                    staticClass: "todo-list__icons-wrap"
                }, [i("span", {
                    staticClass: "todo-list__change-todo",
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("openModal", {
                                mode: "changeTodo",
                                id: t.todo.id
                            })
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e("33bf"),
                        alt: ""
                    }
                })]), i("span", {
                    class: {
                        "todo-list__priority": !0, "todo-list__priority_1": "1" === t.todo.priority, "todo-list__priority_2": "2" === t.todo.priority, "todo-list__priority_3": "3" === t.todo.priority
                    }
                }, [t._v(t._s(t.todo.priority))])])]), i("div", {
                    staticClass: "todo-list__description"
                }, [t._v(" " + t._s(t.todo.name) + " ")]), i("div", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Создано:")]), t._v(" " + t._s(t.todo.creationDate) + " ")]), i("div", {
                    staticClass: "todo-list__buttons-block"
                }, [i("button", {
                    staticClass: "todo-list__button todo-list__button_promote",
                    on: {
                        click: t.onPromote
                    }
                }, [t._v(" В работу ")]), i("button", {
                    staticClass: "todo-list__button todo-list__button_remove",
                    on: {
                        click: function(o) {
                            return t.$store.commit("removeTodo", t.todo.id)
                        }
                    }
                }, [t._v(" Удалить ")])])])
            },
            d = [],
            c = {
                props: ["todo"],
                methods: {
                    onPromote: function() {
                        this.todo.status = "inProgress";
                        var t = Date.now(),
                            o = new Date(t),
                            e = {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                timezone: "UTC",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            };
                        this.todo.date = o.toLocaleDateString("ru", e)
                    }
                }
            },
            u = c,
            m = e("2877"),
            _ = Object(m["a"])(u, l, d, !1, null, null, null),
            p = _.exports,
            v = function() {
                var t = this,
                    o = t.$createElement,
                    i = t._self._c || o;
                return i("li", {
                    staticClass: "todo-list__item"
                }, [i("div", {
                    staticClass: "todo-list__name"
                }, [t._v(" Задача №" + t._s(t.todo.id) + " "), i("div", {
                    staticClass: "todo-list__icons-wrap"
                }, [i("span", {
                    staticClass: "todo-list__change-todo",
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("openModal", {
                                mode: "changeTodo",
                                id: t.todo.id
                            })
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e("33bf"),
                        alt: ""
                    }
                })]), i("span", {
                    class: {
                        "todo-list__priority": !0, "todo-list__priority_1": "1" === t.todo.priority, "todo-list__priority_2": "2" === t.todo.priority, "todo-list__priority_3": "3" === t.todo.priority
                    }
                }, [t._v(t._s(t.todo.priority))])])]), i("div", {
                    staticClass: "todo-list__description"
                }, [t._v(" " + t._s(t.todo.name) + " ")]), i("div", [i("p", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Начато:")]), t._v(" " + t._s(t.todo.date))]), i("div", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Создано:")]), t._v(" " + t._s(t.todo.creationDate))])]), i("div", {
                    staticClass: "todo-list__buttons-block"
                }, [i("button", {
                    staticClass: "todo-list__button todo-list__button_promote",
                    on: {
                        click: t.onPromote
                    }
                }, [t._v(" Завершить ")]), i("button", {
                    staticClass: "todo-list__button todo-list__button_remove",
                    on: {
                        click: function(o) {
                            return t.$store.commit("removeTodo", t.todo.id)
                        }
                    }
                }, [t._v(" Удалить ")])])])
            },
            h = [],
            f = (e("a434"), {
                props: ["todo"],
                methods: {
                    onRemove: function() {
                        for (var t = 0; t < this.todosInProgress.length; t++)
                            if (this.todosInProgress[t].id == this.todo.id) {
                                this.todosInProgress.splice(t, 1);
                                break
                            }
                    },
                    onPromote: function() {
                        this.todo.status = "done";
                        var t = Date.now(),
                            o = new Date(t),
                            e = {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                timezone: "UTC",
                                hour: "numeric",
                                minute: "numeric",
                                second: "numeric"
                            };
                        this.todo.dateEnd = o.toLocaleDateString("ru", e)
                    }
                }
            }),
            g = f,
            y = Object(m["a"])(g, v, h, !1, null, null, null),
            b = y.exports,
            C = function() {
                var t = this,
                    o = t.$createElement,
                    i = t._self._c || o;
                return i("li", {
                    staticClass: "todo-list__item"
                }, [i("div", {
                    staticClass: "todo-list__name"
                }, [t._v(" Задача №" + t._s(t.todo.id) + " "), i("div", {
                    staticClass: "todo-list__icons-wrap"
                }, [i("span", {
                    staticClass: "todo-list__change-todo",
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("openModal", {
                                mode: "changeTodo",
                                id: t.todo.id
                            })
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e("33bf"),
                        alt: ""
                    }
                })]), i("span", {
                    class: {
                        "todo-list__priority": !0, "todo-list__priority_1": "1" === t.todo.priority, "todo-list__priority_2": "2" === t.todo.priority, "todo-list__priority_3": "3" === t.todo.priority
                    }
                }, [t._v(t._s(t.todo.priority))])])]), i("div", {
                    staticClass: "todo-list__description"
                }, [t._v(" " + t._s(t.todo.name) + " ")]), i("div", [i("p", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Начато:")]), t._v(" " + t._s(t.todo.date))]), i("p", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Закончено:")]), t._v(" " + t._s(t.todo.dateEnd))]), i("div", {
                    staticClass: "todo-list__date"
                }, [i("span", [t._v("Создано:")]), t._v(" " + t._s(t.todo.creationDate))])]), i("div", {
                    staticClass: "todo-list__buttons-block"
                }, [i("button", {
                    staticClass: "todo-list__button todo-list__button_remove",
                    on: {
                        click: function(o) {
                            return t.$store.commit("removeTodo", t.todo.id)
                        }
                    }
                }, [t._v(" Удалить ")])])])
            },
            T = [],
            w = {
                props: ["todo"]
            },
            k = w,
            $ = Object(m["a"])(k, C, T, !1, null, null, null),
            O = $.exports,
            M = {
                props: ["todos"],
                components: {
                    Todo: p,
                    TodoInProgress: b,
                    TodoCompleted: O
                }
            },
            S = M,
            x = Object(m["a"])(S, a, r, !1, null, null, null),
            P = x.exports,
            D = function() {
                var t = this,
                    o = t.$createElement,
                    e = t._self._c || o;
                return e("section", {
                    class: {
                        "form-section": !0, "form-section_open": t.$store.state.modalOpening
                    },
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        keyup: function(o) {
                            return !o.type.indexOf("key") && t._k(o.keyCode, "esc", 27, o.key, ["Esc", "Escape"]) ? null : t.$store.dispatch("closeModal")
                        },
                        click: function(o) {
                            return o.target !== o.currentTarget ? null : t.$store.dispatch("closeModal")
                        }
                    }
                }, ["createTodo" === t.mode ? e("AddTodo") : "changeTodo" === t.mode ? e("ChangeTodo", {
                    attrs: {
                        id: t.$store.state.id
                    }
                }) : t._e()], 1)
            },
            j = [],
            E = (e("498a"), e("b0c0"), function() {
                var t = this,
                    o = t.$createElement,
                    e = t._self._c || o;
                return e("form", {
                    staticClass: "modal",
                    on: {
                        submit: function(o) {
                            return o.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e("button", {
                    staticClass: "modal__close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("closeModal")
                        }
                    }
                }, [t._v(" X ")]), e("label", {
                    staticClass: "modal__title",
                    attrs: {
                        for: "name-input"
                    }
                }, [t._v("Новая задача")]), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    staticClass: "modal__input",
                    attrs: {
                        placeholder: "Описание задачи",
                        type: "text",
                        id: "name-input",
                        required: ""
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(o) {
                            o.target.composing || (t.name = o.target.value)
                        }
                    }
                }), e("label", {
                    attrs: {
                        for: "todo-priority",
                        hidden: ""
                    }
                }), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.priority,
                        expression: "priority"
                    }],
                    staticClass: "modal__input",
                    attrs: {
                        name: "todo-priority",
                        id: "priority-select",
                        required: ""
                    },
                    on: {
                        change: function(o) {
                            var e = Array.prototype.filter.call(o.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var o = "_value" in t ? t._value : t.value;
                                return o
                            }));
                            t.priority = o.target.multiple ? e : e[0]
                        }
                    }
                }, [e("option", {
                    attrs: {
                        value: "1",
                        selected: ""
                    }
                }, [t._v("1")]), e("option", {
                    attrs: {
                        value: "2"
                    }
                }, [t._v("2")]), e("option", {
                    attrs: {
                        value: "3"
                    }
                }, [t._v("3")])]), e("button", {
                    staticClass: "modal__submit",
                    attrs: {
                        type: "submit"
                    }
                }, [t._v("Добавить")])])
            }),
            L = [],
            A = {
                methods: {
                    onSubmit: function() {
                        var t = this;
                        if (this.name.trim() && this.priority.trim()) {
                            var o = {
                                name: this.name,
                                priority: this.priority,
                                status: "backlog"
                            };
                            this.$store.commit("increaseTodosCounter"), o.id = this.$store.state.todosCounter;
                            var e = Date.now(),
                                i = new Date(e),
                                s = {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    timezone: "UTC",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric"
                                };
                            o.creationDate = i.toLocaleDateString("ru", s), this.$store.commit("addTodo", o), this.name = "", this.$store.commit("modalOpeningSwitch", !1), setTimeout((function() {
                                t.$store.dispatch("closeModal")
                            }), 10)
                        }
                    }
                }
            },
            q = A,
            I = Object(m["a"])(q, E, L, !1, null, null, null),
            N = I.exports,
            z = function() {
                var t = this,
                    o = t.$createElement,
                    e = t._self._c || o;
                return e("form", {
                    staticClass: "modal",
                    on: {
                        submit: function(o) {
                            return o.preventDefault(), t.onSubmit.apply(null, arguments)
                        }
                    }
                }, [e("button", {
                    staticClass: "modal__close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(o) {
                            return t.$store.dispatch("closeModal")
                        }
                    }
                }, [t._v(" X ")]), e("label", {
                    staticClass: "modal__title",
                    attrs: {
                        for: "name-input"
                    }
                }, [t._v("Изменение задачи")]), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    staticClass: "modal__input",
                    attrs: {
                        placeholder: "Введите новое описание задачи",
                        type: "text",
                        id: "name-input",
                        required: ""
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(o) {
                            o.target.composing || (t.name = o.target.value)
                        }
                    }
                }), e("label", {
                    attrs: {
                        for: "priority-select"
                    }
                }, [t._v("Приоритет")]), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.priority,
                        expression: "priority"
                    }],
                    staticClass: "modal__input",
                    attrs: {
                        name: "todo-priority",
                        id: "priority-select",
                        required: ""
                    },
                    on: {
                        change: function(o) {
                            var e = Array.prototype.filter.call(o.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var o = "_value" in t ? t._value : t.value;
                                return o
                            }));
                            t.priority = o.target.multiple ? e : e[0]
                        }
                    }
                }, [e("option", {
                    attrs: {
                        value: "1",
                        selected: ""
                    }
                }, [t._v("1")]), e("option", {
                    attrs: {
                        value: "2"
                    }
                }, [t._v("2")]), e("option", {
                    attrs: {
                        value: "3"
                    }
                }, [t._v("3")])]), e("label", {
                    attrs: {
                        for: "status-select"
                    }
                }, [t._v("Статус")]), e("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.status,
                        expression: "status"
                    }],
                    staticClass: "modal__input",
                    attrs: {
                        name: "todo-status",
                        id: "status-select",
                        required: ""
                    },
                    on: {
                        change: function(o) {
                            var e = Array.prototype.filter.call(o.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var o = "_value" in t ? t._value : t.value;
                                return o
                            }));
                            t.status = o.target.multiple ? e : e[0]
                        }
                    }
                }, [e("option", {
                    attrs: {
                        value: "backlog",
                        selected: ""
                    }
                }, [t._v("В ожидании")]), e("option", {
                    attrs: {
                        value: "inProgress"
                    }
                }, [t._v("В процессе")]), e("option", {
                    attrs: {
                        value: "done"
                    }
                }, [t._v("Завершены")])]), e("button", {
                    staticClass: "modal__submit",
                    attrs: {
                        type: "submit"
                    }
                }, [t._v("Изменить")])])
            },
            U = [],
            J = {
                props: ["id"],
                methods: {
                    onSubmit: function() {
                        if (this.name.trim()) {
                            var t = {
                                name: this.name,
                                priority: this.priority,
                                status: this.status,
                                id: this.id
                            };
                            console.log(this.id), this.$store.commit("changeTodo", t), this.$store.dispatch("closeModal")
                        }
                    }
                },
                mounted: function() {
                    console.log(this.id)
                }
            },
            X = J,
            R = Object(m["a"])(X, z, U, !1, null, null, null),
            B = R.exports,
            F = {
                props: ["mode", "id"],
                methods: {
                    onSubmit: function() {
                        var t = this;
                        if (this.name.trim()) {
                            var o = {
                                name: this.name,
                                priority: this.priority,
                                status: "backlog"
                            };
                            this.$store.commit("increaseTodosCounter"), o.id = this.$store.state.todosCounter;
                            var e = Date.now(),
                                i = new Date(e),
                                s = {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    timezone: "UTC",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric"
                                };
                            o.creationDate = i.toLocaleDateString("ru", s), this.$store.commit("addTodo", o), this.name = "", this.$store.commit("modalOpeningSwitch", !1), setTimeout((function() {
                                t.$store.dispatch("closeModal")
                            }), 10)
                        }
                    }
                },
                data: function() {
                    return {
                        name: "",
                        priority: ""
                    }
                },
                components: {
                    AddTodo: N,
                    ChangeTodo: B
                }
            },
            G = F,
            H = Object(m["a"])(G, D, j, !1, null, null, null),
            K = H.exports,
            Q = e("2f62");
        i["a"].use(Q["a"]);
        var V = new Q["a"].Store({
                state: {
                    darkTheme: localStorage.darkTheme || "0",
                    todosCounter: 0,
                    todos: [],
                    id: "",
                    modalOpening: !1,
                    showModal: !1,
                    modalOpeningMode: ""
                },
                getters: {
                    darkTheme: function(t) {
                        return t.darkTheme
                    },
                    todosCounter: function(t) {
                        return t.todosCounter
                    }
                },
                mutations: {
                    idChange: function(t, o) {
                        t.id = o
                    },
                    addTodo: function(t, o) {
                        t.todos.push(o)
                    },
                    removeTodo: function(t, o) {
                        for (var e = 0; e < t.todos.length; e++)
                            if (t.todos[e].id == o) {
                                t.todos.splice(e, 1);
                                break
                            }
                    },
                    changeTodo: function(t, o) {
                        for (var e = 0; e < t.todos.length; e++)
                            if (t.todos[e].id == o.id) {
                                t.todos[e].name = o.name, t.todos[e].priority = o.priority, t.todos[e].status = o.status;
                                break
                            }
                    },
                    modalOpeningModeChange: function(t, o) {
                        t.modalOpeningMode = o
                    },
                    modalOpeningSwitch: function(t, o) {
                        t.modalOpening = o
                    },
                    showModalSwitch: function(t, o) {
                        t.showModal = o
                    },
                    changeTheme: function(t) {
                        "1" == t.darkTheme ? (t.darkTheme = "0", localStorage.darkTheme = "0") : (t.darkTheme = "1", localStorage.darkTheme = "1")
                    },
                    increaseTodosCounter: function(t) {
                        t.todosCounter++
                    }
                },
                actions: {
                    openModal: function(t, o) {
                        t.commit("showModalSwitch", !0), t.commit("modalOpeningSwitch", !1), t.commit("modalOpeningModeChange", o.mode), t.commit("idChange", o.id), setTimeout((function() {
                            t.commit("modalOpeningSwitch", !0)
                        }), 1)
                    },
                    closeModal: function(t) {
                        t.commit("modalOpeningSwitch", !1), setTimeout((function() {
                            t.commit("showModalSwitch", !1)
                        }), 200)
                    }
                }
            }),
            W = V,
            Y = {
                name: "App",
                store: W,
                methods: {
                    changeTheme: function() {
                        this.$store.commit("changeTheme")
                    }
                },
                components: {
                    TodoList: P,
                    Modal: K
                }
            },
            Z = Y,
            tt = (e("5c0b"), Object(m["a"])(Z, s, n, !1, null, null, null)),
            ot = tt.exports,
            et = e("d8c5"),
            it = e.n(et);
        i["a"].use(it.a), i["a"].config.productionTip = !1, new i["a"]({
            render: function(t) {
                return t(ot)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, o, e) {
        "use strict";
        e("9c0c")
    },
    "9b19": function(t, o, e) {
        t.exports = e.p + "img/logo.ce69d5f3.svg"
    },
    "9c0c": function(t, o, e) {}
});