(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(12),n.p,n(13),n(7)),o=n(3),b=n(0);var j=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),s=n[0],r=n[1],i=function(){t.closeForm()};return!0===t.showAddForm?Object(b.jsx)(u,{}):Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"Add New Task"}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter name of task",onChange:function(t){r(t.target.value)}})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-default",onClick:function(){t.addTask(s),i()},children:"Add"}),Object(b.jsx)("button",{type:"button",className:"btn btn-default",onClick:i,children:"Back"})]})})};var l=function(t){return Object(b.jsx)("tr",{children:Object(b.jsx)("td",{style:{border:"1px solid red"},children:t.name})})};var u=function(t){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),a=n[0],s=n[1],r=Object(c.useState)(["task-1","task-2"]),u=Object(o.a)(r,2),d=u[0],O=u[1];return!0===a?Object(b.jsx)(j,{addTask:function(t){d.push(t)},closeForm:function(){s(!1)}}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){s(!0)},children:"Add Task"}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){var t=Object(i.a)(d);t.pop(),O(t)},children:"Xoa Task"}),Object(b.jsx)("h2",{children:"List Task"}),Object(b.jsxs)("table",{className:"table table-striped",children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:"Name of task"})}),d.map((function(t){return Object(b.jsx)(l,{name:t})}))]})]})};var d=function(){return Object(b.jsx)(u,{})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.2a18a0ba.chunk.js.map