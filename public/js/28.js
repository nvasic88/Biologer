(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"44Ds":function(t,e,n){var a=n("e4Nc");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,o=e?e.apply(this,a):a[0],r=n.cache;if(r.has(o))return r.get(o);var i=t.apply(this,a);return n.cache=r.set(o,i)||r,i};return n.cache=new(o.Cache||a),n}o.Cache=a,t.exports=o},"4uTw":function(t,e,n){var a=n("Z0cm"),o=n("9ggG"),r=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return a(t)?t:o(t,e)?[t]:r(i(t))}},"9Nap":function(t,e,n){var a=n("/9aa");t.exports=function(t){if("string"==typeof t||a(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var a=n("Z0cm"),o=n("/9aa"),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(a(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!r.test(t)||null!=e&&t in Object(e))}},GNiM:function(t,e,n){var a=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,i=a((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,a,o){e.push(a?o.replace(r,"$1"):n||t)})),e}));t.exports=i},I01J:function(t,e,n){var a=n("44Ds");t.exports=function(t){var e=a(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},ZWtO:function(t,e,n){var a=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,r=(e=a(e,t)).length;null!=t&&n<r;)t=t[o(e[n++])];return n&&n==r?t:void 0}},dR7l:function(t,e,n){"use strict";n.r(e);var a=n("9KKN"),o=n("luGL"),r={name:"nzSpecimenCollectionsTable",mixins:[a.a],components:{NzTable:o.a},props:{perPageOptions:{type:Array,default:function(){return[15,30,50,100]},validator:function(t){return t.length}},listRoute:String,editRoute:String,deleteRoute:String,empty:{type:String,default:"Nothing here."}},data:function(){return{data:[],total:0,loading:!1,sortField:"id",sortOrder:"desc",defaultSortOrder:"asc",page:1,perPage:this.perPageOptions[0],checkedRows:[]}},created:function(){this.restoreState(),this.loadAsyncData()},methods:{loadAsyncData:function(){var t=this;return this.loading=!0,axios.get(route(this.listRoute).withQuery({sort_by:"".concat(this.sortField,".").concat(this.sortOrder),page:this.page,per_page:this.perPage,search:this.search})).then((function(e){var n=e.data;t.data=[],t.total=n.meta.total,n.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.data=[],t.total=0,t.loading=!1}))},onPageChange:function(t){this.page=t,this.saveState(),this.loadAsyncData()},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.saveState(),this.loadAsyncData()},onPerPageChange:function(t){t!==this.perPage&&(this.perPage=t,this.saveState(),this.loadAsyncData())},confirmRemove:function(t){var e=this;this.$buefy.dialog.confirm({message:this.trans("This will remove all observations connected to this collection. Are you sure you want to delete this collection?"),confirmText:this.trans("buttons.delete"),cancelText:this.trans("buttons.cancel"),type:"is-danger",onConfirm:function(){e.remove(t)}})},remove:function(t){var e=this;return axios.delete(route(this.deleteRoute,t.id)).then((function(t){e.$buefy.toast.open({message:e.trans("Record deleted"),type:"is-success"}),e.loadAsyncData()})).catch((function(t){console.error(t)}))},editLink:function(t){return route(this.editRoute,t.id)}}},i=n("KHd+"),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"specimen-collections-table"},[n("nz-table",{attrs:{data:t.data,loading:t.loading,paginated:"","backend-pagination":"",total:t.total,"per-page":t.perPage,"per-page-options":t.perPageOptions,"pagination-on-top":"","backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder],"mobile-cards":!0},on:{"page-change":t.onPageChange,"per-page-change":t.onPerPageChange,sort:t.onSort},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"id",label:t.trans("labels.id"),width:"40",numeric:"",sortable:""}},[t._v("\n        "+t._s(e.row.id)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"name",label:t.trans("labels.specimen_collections.name"),sortable:""}},[t._v("\n        "+t._s(e.row.name)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{width:"150",numeric:""}},[n("a",{attrs:{href:t.editLink(e.row)}},[n("b-icon",{attrs:{icon:"edit"}})],1),t._v(" "),n("a",{on:{click:function(n){return t.confirmRemove(e.row)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)])]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[t._v(t._s(t.empty))])])])])],2)],1)}),[],!1,null,null,null);e.default=s.exports}}]);
//# sourceMappingURL=28.js.map?id=500c8e2c8fd9dcb587d8