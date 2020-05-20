(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(4),u=n(5),s=n.n(u),i=n(6),m=n(9),b=n(2),d=(n(16),function(e){return fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api/").concat(e,".json")).then((function(e){return e.json()}))}),p=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),u=Object(b.a)(o,2),p=u[0],f=u[1],O=Object(a.useState)(""),E=Object(b.a)(O,2),j=E[0],y=E[1],h=Object(a.useState)(!1),_=Object(b.a)(h,2),k=_[0],v=_[1],g=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,d("users");case 4:return t=e.sent,e.next=7,d("todos");case 7:n=e.sent,a=n.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:t.find((function(t){return t.id===e.userId}))})})),c(a),v(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),y("Loading error, please try again later.");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of TODOs"),k?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)}));c(e)}},"Sort by title"),r.a.createElement("button",{type:"button",onClick:function(){var e=Object(l.a)(n).filter((function(e){return e.completed}));c(e)}},"Sort completed"),r.a.createElement("button",{type:"button",onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0}));c(e)}},"Sort by user name"),r.a.createElement("button",{type:"button",onClick:g},"Reload All TODOs")),r.a.createElement("ul",{className:"todo__list"},n.map((function(e){return r.a.createElement("li",{key:e.id,className:e.completed?"completed todo__list-item":"todo__list-item"},r.a.createElement("h3",{className:"todo__list-title"},e.title),r.a.createElement("span",{className:"todo__list-author"},e.user?e.user.name:"Unknown user."))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:g,disabled:p},p?"Loading...":"Load"),r.a.createElement("p",{className:"error"},j)))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.790863d9.chunk.js.map