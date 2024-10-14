"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7954],{34847:(e,t,a)=>{var o=a(29079),i=a(14867),n=a.n(i),r=a(24372);const c=o.Ay.bind(null,{endpoint:"rb.check_room_available",rules:[{args:["room_id"],converters:{room_id:"IntegerConverter"},defaults:{},trace:[{data:"|",isDynamic:!1},{data:"/",isDynamic:!1},{data:"rooms",isDynamic:!1},{data:"/",isDynamic:!1},{data:"api",isDynamic:!1},{data:"/",isDynamic:!1},{data:"rooms",isDynamic:!1},{data:"/",isDynamic:!1},{data:"room_id",isDynamic:!0},{data:"/",isDynamic:!1},{data:"availability",isDynamic:!1},{data:"/",isDynamic:!1},{data:"simple",isDynamic:!1}]}]},"/"),l=o.Ay.bind(null,{endpoint:"rb.roombooking",rules:[{args:["path"],converters:{path:"PathConverter"},defaults:{},trace:[{data:"|",isDynamic:!1},{data:"/",isDynamic:!1},{data:"rooms",isDynamic:!1},{data:"/",isDynamic:!1},{data:"path",isDynamic:!0}]},{args:[],converters:{},defaults:{},trace:[{data:"|",isDynamic:!1},{data:"/",isDynamic:!1},{data:"rooms",isDynamic:!1},{data:"/",isDynamic:!1}]}]},"/");window.setupEventCreationDialog=function(e){e=$.extend({categoryField:null,listingValue:null,protectionModeFields:null,initialCategory:null,checkAvailability:!1,rbExcludedCategories:null,serverDefaultTimezone:null},e);const t=$($.parseHTML($("#event-creation-protection-messages").html())),a=$("<div>",{class:"form-group",css:{marginTop:"5px"}}),o=$($.parseHTML($("#event-listing-message").html())),i=$($.parseHTML($("#event-creation-message").html())),s=e.categoryField.closest("form"),d=s.find('input[type="submit"]').first(),g=$("#event-creation-create_booking"),m=$("#room-available"),v=$("#room-available-prebook"),p=$("#room-conflict-booking"),u=$("#room-conflict-prebooking"),f=$("#room-conflict-prebooking-prebook"),h=$("#room-user-booking"),y=$("#room-user-prebooking"),D=$("#room-unbookable"),b=$("#room-cannot-book"),k=$("#create-booking"),Y=$("#create-prebooking"),M=$("#create-booking-over-prebooking"),_=$("#create-prebooking-over-prebooking"),H=$("#event-creation-listing-checkbox");let C,S,T,F,O,A,x,E=null,J=!1;function L(){var t,a;return e.canCreateEvents||!E||(null===(t=E)||void 0===t?void 0:t.id)!==(null===(a=e.initialCategory)||void 0===a?void 0:a.id)}function N(){const e=$.param(s.serializeArray(),!0)===s.data("initialData")||!L();d.prop("disabled",e)}function w(){if(!E)return void a.html("");let o=e.protectionModeFields.filter(":checked").val();"inheriting"===o&&(o=E.is_protected?"inheriting-protected":"inheriting-public");const i=t.filter(`.${o}-protection-message`);i.find(".js-category-title").text(E&&E.title),a.html(i)}function z(e){T=n()(`${e.date} ${e.time}`,"YYYY-MM-DD HH:mm"),F=n()(T).add(e.duration,"minutes")}function j(e){const t={path:"calendar",date:T.format("YYYY-MM-DD"),text:A.room_name},a=l(t);e.find("a").prop("href",a)}function B(){if(function(e){S&&(e&&($("#availability-messages").find("input[id^='create']").prop("checked",!1),g.val("false")),S.hide())}(arguments.length>0&&void 0!==arguments[0]&&arguments[0]),!("room_id"in A)||!T.isValid()||!F.isValid()||T.isSameOrAfter(F)||(t=O.id,e.rbExcludedCategories.some((e=>parseInt(e.id,10)===t)))||x!==e.serverDefaultTimezone||J)return void g.val("false");var t;const a={room_id:A.room_id,start_dt:T.format(n().HTML5_FMT.DATETIME_LOCAL),end_dt:F.format(n().HTML5_FMT.DATETIME_LOCAL)};$.ajax({url:c(a),method:"GET",dataType:"json",contentType:"application/json",error:handleAjaxError,success(e){(e=(0,r.camelizeKeys)(e)).userBooking?(g.val("false"),S=h,j(S)):e.userPrebooking?(g.val("false"),S=y,j(S)):e.conflictBooking?(g.val("false"),S=p,j(S)):e.unbookable?(g.val("false"),S=D,j(S)):e.conflictPrebooking?e.canBook?(g.val(String(M[0].checked)),S=u,j(S)):e.canPrebook?(g.val(String(_[0].checked)),S=f,j(S)):(g.val("false"),S=b):e.canBook?(g.val(String(k[0].checked)),S=m):e.canPrebook?(g.val(String(Y[0].checked)),S=v):(g.val("false"),S=b),S.show()}})}a.appendTo(e.protectionModeFields.closest(".form-field")),i.insertAfter($("#category-warning-event-creation-category")),o.appendTo(H.closest(".form-field")),d.prop("disabled",!0),s.on("change input",N),e.categoryField.on("indico:categorySelected",((t,a)=>{E||e.protectionModeFields.filter("[value=inheriting]").prop("checked",!0),a?e.protectionModeFields.prop("disabled",!1):(e.protectionModeFields.prop("disabled",!0),e.protectionModeFields.filter("[value=inheriting]").prop("checked",!0)),E=a,w(),i.toggleClass("hidden",L()),N()})),H.on("change",(t=>{JSON.parse(t.target.value)?($("#form-group-event-creation-category").show(),$("#form-group-event-creation-protection_mode").show(),e.categoryField.val(JSON.stringify(e.initialCategory)),e.categoryField.trigger("indico:categorySelected",[e.initialCategory]),$("#category-title-event-creation-category").text(e.initialCategory?e.initialCategory.title:"")):($("#form-group-event-creation-category").hide(),$("#form-group-event-creation-protection_mode").hide(),e.categoryField.trigger("indico:categorySelected",[])),o.toggleClass("hidden",JSON.parse(H.val()))})),e.protectionModeFields.on("change",(function(){w()})),e.initialCategory?e.categoryField.trigger("indico:categorySelected",[e.initialCategory]):e.protectionModeFields.prop("disabled",!0),e.checkAvailability&&(function(){const e=$("#event-creation-start_dt-datestorage").val(),t=$("#event-creation-start_dt-timestorage").val(),a=$("#event-creation-end_dt-datestorage").val(),o=$("#event-creation-end_dt-timestorage").val(),i=$("#event-creation-occurrences").val(),r=i?JSON.parse(i):null;A=JSON.parse($("#event-creation-location_data").val()),x=$("#event-creation-timezone").val(),O=JSON.parse($("#event-creation-category").val()),r&&1===r.length?z(r[0]):(T=n()(`${e} ${t}`,"DD/MM/YYYY HH:mm"),F=n()(`${a} ${o}`,"DD/MM/YYYY HH:mm"))}(),$("#event-creation-location_data").on("change",(function(){A=JSON.parse($(this).val()),C!==A.room_id&&(C=A.room_id,B(!0))})),$("#event-creation-start_dt-datestorage").on("change",(function(){const e=$(this).val(),t=$("#event-creation-start_dt-timestorage").val(),a=$("#event-creation-end_dt-datestorage").val(),o=$("#event-creation-end_dt-timestorage").val();T=n()(`${e} ${t}`,"DD/MM/YYYY HH:mm"),F=n()(`${a} ${o}`,"DD/MM/YYYY HH:mm"),F.isBefore(T)&&(F=n()(`${e} ${o}`,"DD/MM/YYYY HH:mm")),B()})),$("#event-creation-start_dt-timestorage").on("change",(function(){const e=$("#event-creation-start_dt-datestorage").val(),t=$("#event-creation-start_dt-timestorage").val();T=n()(`${e} ${t}`,"DD/MM/YYYY HH:mm"),B()})),$("#event-creation-end_dt-datestorage").on("change",(function(){const e=$(this).val(),t=$("#event-creation-end_dt-timestorage").val();F=n()(`${e} ${t}`,"DD/MM/YYYY HH:mm"),B()})),$("#event-creation-end_dt-timestorage").on("change",(function(){const e=$("#event-creation-end_dt-datestorage").val(),t=$(this).val();F=n()(`${e} ${t}`,"DD/MM/YYYY HH:mm"),B()})),$("#event-creation-occurrences").on("change",(function(){const e=JSON.parse($(this).val());1===e.length?(z(e[0]),J=!1):J=!0,B()})),$("#event-creation-timezone").on("change",(function(){x=$(this).val(),B()})),$("#event-creation-category").on("change",(function(){O=JSON.parse($(this).val()),B()})),k.add(Y).add(M).add(_).on("change",(function(){g.val(String(this.checked))})))}}},e=>{e.O(0,[2076],(()=>{return t=34847,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=module_events.creation.a5c3eadb.bundle.js.map