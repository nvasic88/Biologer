(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"44Ds":function(t,e,n){var a=n("e4Nc");function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=e?e.apply(this,a):a[0],o=n.cache;if(o.has(r))return o.get(r);var i=t.apply(this,a);return n.cache=o.set(r,i)||o,i};return n.cache=new(r.Cache||a),n}r.Cache=a,t.exports=r},"4uTw":function(t,e,n){var a=n("Z0cm"),r=n("9ggG"),o=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return a(t)?t:r(t,e)?[t]:o(i(t))}},"9Nap":function(t,e,n){var a=n("/9aa");t.exports=function(t){if("string"==typeof t||a(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var a=n("Z0cm"),r=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(a(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!r(t))||(i.test(t)||!o.test(t)||null!=e&&t in Object(e))}},GNiM:function(t,e,n){var a=n("I01J"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=a((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,(function(t,n,a,r){e.push(a?r.replace(o,"$1"):n||t)})),e}));t.exports=i},I01J:function(t,e,n){var a=n("44Ds");t.exports=function(t){var e=a(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},ZWtO:function(t,e,n){var a=n("4uTw"),r=n("9Nap");t.exports=function(t,e){for(var n=0,o=(e=a(e,t)).length;null!=t&&n<o;)t=t[r(e[n++])];return n&&n==o?t:void 0}},jl0c:function(t,e,n){"use strict";n.r(e);var a=n("JkKK"),r=n("mwIZ"),o=n.n(r),i=n("9KKN"),s=n("luGL"),c={name:"nzAnnouncementsTable",mixins:[i.a],components:{NzTable:s.a},props:{perPageOptions:{type:Array,default:function(){return[15,30,50,100]},validator:function(t){return t.length}},listRoute:String,editRoute:String,deleteRoute:String,empty:{type:String,default:"Nothing here."},ranks:Array},data:function(){return{data:[],meta:null,total:0,loading:!1,sortField:"name",sortOrder:"asc",defaultSortOrder:"asc",page:1,perPage:this.perPageOptions[0],checkedRows:[]}},computed:{showing:function(){if(this.meta)return this.trans("labels.tables.from_to_total",{from:o()(this.meta,"from")||0,to:o()(this.meta,"to")||0,total:o()(this.meta,"total")||0})}},created:function(){this.restoreState(),this.loadAsyncData()},methods:{loadAsyncData:function(){var t=this;return this.loading=!0,axios.get(route(this.listRoute).withQuery({sort_by:"".concat(this.sortField,".").concat(this.sortOrder),page:this.page,per_page:this.perPage})).then((function(e){var n=e.data;t.data=[],t.total=n.meta.total,n.data.forEach((function(e){return t.data.push(e)})),t.meta=n.meta,t.loading=!1}),(function(e){t.data=[],t.meta=null,t.total=0,t.loading=!1}))},onPageChange:function(t){this.page=t,this.loadAsyncData()},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.saveState(),this.loadAsyncData()},clearFilter:function(){for(var t in this.newFilter)this.newFilter[t]="";this.onFilter()},onFilter:function(){var t=!1;for(var e in this.newFilter)this.filter[e]!==this.newFilter[e]&&(t=!0),this.filter[e]=this.newFilter[e];t&&this.loadAsyncData()},onPerPageChange:function(t){t!==this.perPage&&(this.perPage=t,this.saveState(),this.loadAsyncData())},confirmRemove:function(t){var e=this;this.$buefy.dialog.confirm({message:this.trans("Are you sure you want to delete this record?"),confirmText:this.trans("buttons.delete"),cancelText:this.trans("buttons.cancel"),type:"is-danger",onConfirm:function(){e.remove(t)}})},remove:function(t){var e=this;return axios.delete(route(this.deleteRoute,t.id)).then((function(t){e.$buefy.toast.open({message:e.trans("Record deleted"),type:"is-success"}),e.loadAsyncData()})).catch((function(t){console.error(t)}))},editLink:function(t){return route(this.editRoute,t.id)}},filters:{formatDateTime:function(t){var e=Object(a.a)(t);return e.isValid()?e.format("D.M.YYYY HH:mm"):""}}},l=n("KHd+"),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcements-table"},[n("nz-table",{attrs:{data:t.data,loading:t.loading,paginated:"","backend-pagination":"",total:t.total,"per-page":t.perPage,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder],"mobile-cards":!0},on:{"page-change":t.onPageChange,"per-page-change":t.onPerPageChange,sort:t.onSort},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"id",label:t.trans("labels.id"),width:"40",numeric:"",sortable:""}},[t._v("\n        "+t._s(e.row.id)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"title",label:t.trans("labels.announcements.title"),sortable:""}},[t._v("\n        "+t._s(e.row.title||"--")+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"created_at",label:t.trans("labels.created_at"),sortable:""}},[t._v("\n        "+t._s(t._f("formatDateTime")(e.row.created_at))+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{width:"150",numeric:""}},[n("a",{attrs:{href:t.editLink(e.row)}},[n("b-icon",{attrs:{icon:"edit"}})],1),t._v(" "),n("a",{on:{click:function(n){return t.confirmRemove(e.row)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)])]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[t._v(t._s(t.empty))])])])])],2)],1)}),[],!1,null,null,null);e.default=u.exports},mwIZ:function(t,e,n){var a=n("ZWtO");t.exports=function(t,e,n){var r=null==t?void 0:a(t,e);return void 0===r?n:r}}}]);
//# sourceMappingURL=20.js.map?id=506b2918ee0ea67418f6