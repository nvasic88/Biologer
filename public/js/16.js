(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"44Ds":function(t,e,n){var a=n("e4Nc");function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var a=arguments,r=e?e.apply(this,a):a[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,a);return n.cache=i.set(r,o)||i,o};return n.cache=new(r.Cache||a),n}r.Cache=a,t.exports=r},"4uTw":function(t,e,n){var a=n("Z0cm"),r=n("9ggG"),i=n("GNiM"),o=n("dt0z");t.exports=function(t,e){return a(t)?t:r(t,e)?[t]:i(o(t))}},"9Nap":function(t,e,n){var a=n("/9aa");t.exports=function(t){if("string"==typeof t||a(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var a=n("Z0cm"),r=n("/9aa"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(a(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!r(t))||(o.test(t)||!i.test(t)||null!=e&&t in Object(e))}},GNiM:function(t,e,n){var a=n("I01J"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=a((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,(function(t,n,a,r){e.push(a?r.replace(i,"$1"):n||t)})),e}));t.exports=o},I01J:function(t,e,n){var a=n("44Ds");t.exports=function(t){var e=a(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},KI7y:function(t,e,n){"use strict";n.r(e);var a=n("sEfC"),r=n.n(a),i=n("JkKK"),o=n("9KKN"),s=n("luGL"),c={name:"nzPublicationsTable",mixins:[o.a],components:{NzTable:s.a},props:{perPageOptions:{type:Array,default:function(){return[15,30,50,100]},validator:function(t){return t.length}},listRoute:String,editRoute:String,deleteRoute:String,empty:{type:String,default:"Nothing here."},ranks:Array},data:function(){return{data:[],total:0,loading:!1,sortField:"id",sortOrder:"asc",defaultSortOrder:"asc",page:1,perPage:this.perPageOptions[0],checkedRows:[],search:""}},created:function(){this.restoreState(),this.loadAsyncData()},methods:{loadAsyncData:function(){var t=this;return this.loading=!0,axios.get(route(this.listRoute).withQuery({sort_by:"".concat(this.sortField,".").concat(this.sortOrder),page:this.page,per_page:this.perPage,search:this.search})).then((function(e){var n=e.data;t.data=[],t.total=n.meta.total,n.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.data=[],t.total=0,t.loading=!1}))},onPageChange:function(t){this.page=t,this.saveState(),this.loadAsyncData()},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.saveState(),this.loadAsyncData()},onPerPageChange:function(t){t!==this.perPage&&(this.perPage=t,this.saveState(),this.loadAsyncData())},confirmRemove:function(t){var e=this;this.$buefy.dialog.confirm({message:this.trans("This will remove all observations connected to this publications. Are you sure you want to delete this publication?"),confirmText:this.trans("buttons.delete"),cancelText:this.trans("buttons.cancel"),type:"is-danger",onConfirm:function(){e.remove(t)}})},remove:function(t){var e=this;return axios.delete(route(this.deleteRoute,t.id)).then((function(t){e.$buefy.toast.open({message:e.trans("Record deleted"),type:"is-success"}),e.loadAsyncData()})).catch((function(t){console.error(t)}))},editLink:function(t){return route(this.editRoute,t.id)},performSearch:r()((function(t){this.search!==t&&(this.search=t,this.loadAsyncData())}),500),clearSearch:function(){this.search="",this.loadAsyncData()}},filters:{formatDateTime:function(t){var e=Object(i.a)(t);return e.isValid()?e.format("D.M.YYYY HH:mm"):""}}},u=n("KHd+"),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publications-table"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("b-field",[n("b-input",{attrs:{placeholder:t.trans("labels.publications.search"),value:t.search,icon:"search",expanded:""},on:{input:t.performSearch}}),t._v(" "),t.search?n("p",{staticClass:"control"},[n("span",{staticClass:"button",on:{click:t.clearSearch}},[n("b-icon",{attrs:{icon:"close"}})],1)]):t._e()],1)],1)])]),t._v(" "),n("hr"),t._v(" "),n("nz-table",{attrs:{data:t.data,loading:t.loading,paginated:"","backend-pagination":"",total:t.total,"per-page":t.perPage,"per-page-options":t.perPageOptions,"pagination-on-top":"","backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder],"mobile-cards":!0},on:{"page-change":t.onPageChange,"per-page-change":t.onPerPageChange,sort:t.onSort},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"id",label:t.trans("labels.id"),width:"40",numeric:"",sortable:""}},[t._v("\n        "+t._s(e.row.id)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"title",label:t.trans("labels.publications.title"),sortable:""}},[t._v("\n        "+t._s(e.row.title)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"authors",label:t.trans("labels.publications.authors")}},[t._v("\n        "+t._s(e.row.authors.map((function(t){return t.first_name+" "+t.last_name})).join(", "))+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{width:"150",numeric:""}},[n("a",{attrs:{href:t.editLink(e.row)}},[n("b-icon",{attrs:{icon:"edit"}})],1),t._v(" "),n("a",{on:{click:function(n){return t.confirmRemove(e.row)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)])]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[t._v(t._s(t.empty))])])])])],2)],1)}),[],!1,null,null,null);e.default=l.exports},QIyF:function(t,e,n){var a=n("Kz5y");t.exports=function(){return a.Date.now()}},ZWtO:function(t,e,n){var a=n("4uTw"),r=n("9Nap");t.exports=function(t,e){for(var n=0,i=(e=a(e,t)).length;null!=t&&n<i;)t=t[r(e[n++])];return n&&n==i?t:void 0}},sEfC:function(t,e,n){var a=n("GoyQ"),r=n("QIyF"),i=n("tLB3"),o=Math.max,s=Math.min;t.exports=function(t,e,n){var c,u,l,d,f,h,p=0,v=!1,g=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=c,a=u;return c=u=void 0,p=e,d=t.apply(a,n)}function y(t){return p=t,f=setTimeout(_,e),v?b(t):d}function w(t){var n=t-h;return void 0===h||n>=e||n<0||g&&t-p>=l}function _(){var t=r();if(w(t))return x(t);f=setTimeout(_,function(t){var n=e-(t-h);return g?s(n,l-(t-p)):n}(t))}function x(t){return f=void 0,m&&c?b(t):(c=u=void 0,d)}function C(){var t=r(),n=w(t);if(c=arguments,u=this,h=t,n){if(void 0===f)return y(h);if(g)return clearTimeout(f),f=setTimeout(_,e),b(h)}return void 0===f&&(f=setTimeout(_,e)),d}return e=i(e)||0,a(n)&&(v=!!n.leading,l=(g="maxWait"in n)?o(i(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),C.cancel=function(){void 0!==f&&clearTimeout(f),p=0,c=h=u=f=void 0},C.flush=function(){return void 0===f?d:x(r())},C}}}]);
//# sourceMappingURL=16.js.map?id=eddf72762b1b1cb88b3a