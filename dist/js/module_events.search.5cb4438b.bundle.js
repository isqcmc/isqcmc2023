"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2069],{11563:(e,n,a)=>{var t=a(29079),i=a(86326),d=a(35623),s=a(31610);const r=t.Ay.bind(null,{endpoint:"search.event_search",rules:[{args:["event_id"],converters:{event_id:"IntegerConverter"},defaults:{},trace:[{data:"|",isDynamic:!1},{data:"/",isDynamic:!1},{data:"event",isDynamic:!1},{data:"/",isDynamic:!1},{data:"event_id",isDynamic:!0},{data:"/",isDynamic:!1},{data:"search",isDynamic:!1}]}]},"/");document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#event-search-box");if(e){const n=parseInt(e.dataset.eventId,10),a=void 0!==e.dataset.isAdmin;d.render(i.createElement(s.A,{onSearch:(e,t,i)=>{const d={q:e,event_id:n};a&&i&&(d.admin_override_enabled=!0),window.location=r(d)},isAdmin:a}),e)}}))}},e=>{e.O(0,[4644,4394,2076],(()=>{return n=11563,e(e.s=n);var n}));e.O()}]);
//# sourceMappingURL=module_events.search.5cb4438b.bundle.js.map