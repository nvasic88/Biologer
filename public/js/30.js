(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{PWsT:function(t,e,i){"use strict";i.r(e);var n={name:"nzActivityFieldObservationApproved",props:{activity:{type:Object,required:!0}}},a=i("KHd+"),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"activity-log-item"},[t._v("\n  "+t._s(t._f("formatDateTime")(t.activity.created_at))+" "+t._s(t.activity.causer.full_name)+" "+t._s(t.trans("activityLog.approved"))+"\n")])}),[],!1,null,null,null).exports,c={name:"nzActivityFieldObservationCreated",props:{activity:{type:Object,required:!0}}},o=Object(a.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"activity-log-item"},[t._v("\n  "+t._s(t._f("formatDateTime")(t.activity.created_at))+" "+t._s(t.activity.causer.full_name)+" "+t._s(t.trans("activityLog.added_record"))+" "+t._s(t.activity.subject_id)+"\n")])}),[],!1,null,null,null).exports,s={name:"nzActivityFieldObservationMarkedUnidentifiable",props:{activity:{type:Object,required:!0}}},l=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"activity-log-item"},[t._v("\n  "+t._s(t._f("formatDateTime")(t.activity.created_at))+" "+t._s(t.activity.causer.full_name)+" "+t._s(t.trans("activityLog.marked_unidentifiable"))+": "+t._s(t.activity.properties.reason)+"\n")])}),[],!1,null,null,null).exports,u={name:"nzActivityFieldObservationMovedToPending",props:{activity:{type:Object,required:!0}}},v=Object(a.a)(u,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"activity-log-item"},[t._v("\n  "+t._s(t._f("formatDateTime")(t.activity.created_at))+" "+t._s(t.activity.causer.full_name)+" "+t._s(t.trans("activityLog.moved_to_pending"))+": "+t._s(t.activity.properties.reason)+"\n")])}),[],!1,null,null,null).exports;function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var _,d={name:"nzActivityFieldObservationUpdated",props:{activity:{type:Object,required:!0}},computed:{formatedChanges:function(){var t=this,e=this.activity.properties.old;return Object.keys(e).map((function(i){var n=t.oldValue(e,i);return"".concat(t.trans("labels.field_observations."+i))+(n?" (".concat(n,")"):"")})).join(", ")}},methods:{oldValue:function(t,e){var i=t[e];return null==i?null:"object"===y(i)?i.label?this.trans(i.label):null:i}}},p=Object(a.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"activity-log-item"},[t._v("\n  "+t._s(t._f("formatDateTime")(t.activity.created_at))+" "+t._s(t.activity.causer.full_name)+" "+t._s(t.trans("activityLog.changed"))+" "+t._s(t.formatedChanges)+": "+t._s(t.activity.properties.reason)+"\n")])}),[],!1,null,null,null).exports;function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={name:"nzFieldObservationActivityLog",components:(_={},m(_,r.name,r),m(_,o.name,o),m(_,l.name,l),m(_,v.name,v),m(_,p.name,p),_),props:{activities:{type:Array,default:function(){return[]}}},methods:{chooseActivityComponent:function(t){return"nz-activity-field-observation-".concat(t.description.split("_").join("-"))}}},b=Object(a.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"activity-log"},t._l(t.activities,(function(e){return i(t.chooseActivityComponent(e),{key:e.id,tag:"component",attrs:{activity:e}})})),1)}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=30.js.map?id=c2c1109a4f14debdf835