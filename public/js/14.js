(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0JjW":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.guardAgainstReservedFieldName=function(t){if(-1!==i.indexOf(t))throw new Error("Field name "+t+" isn't allowed to be used in a Form or Errors instance.")};var i=e.reservedFieldNames=["__http","__options","__validateRequestType","clear","data","delete","errors","getError","getErrors","hasError","initial","onFail","only","onSuccess","patch","populate","post","processing","successful","put","reset","submit","withData","withErrors","withOptions"]},"3M9d":function(t,e,n){var i=n("ngVI");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},"5YJQ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("eXgj");Object.defineProperty(e,"default",{enumerable:!0,get:function(){return s(i).default}}),Object.defineProperty(e,"Form",{enumerable:!0,get:function(){return s(i).default}});var r=n("ukZA");function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"Errors",{enumerable:!0,get:function(){return s(r).default}})},Ieeu:function(t,e,n){"use strict";var i=n("3M9d");n.n(i).a},SuVM:function(t,e,n){"use strict";var i=n("7tbW"),r=n.n(i),s={render:function(){return this.$slots.default[0]},inject:["handleClass"],mounted:function(){this.$el.classList.add(this.handleClass)}},a=n("KHd+"),o=Object(a.a)(s,void 0,void 0,!1,null,null,null).exports,l={render:function(){return this.$slots.default[0]},inject:["itemClass"],mounted:function(){this.$el.classList.add(this.itemClass)}},u=Object(a.a)(l,void 0,void 0,!1,null,null,null).exports,c=n("RmOr");function d(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var h={props:{value:{required:!0},itemClass:{default:"sortable-item"},handleClass:{default:"sortable-handle"}},provide:function(){return{itemClass:this.itemClass,handleClass:this.handleClass}},render:function(){return this.$scopedSlots.default({items:this.value})},mounted:function(){var t=this,e=new c.Sortable(this.$el,{draggable:".".concat(this.itemClass),handle:".".concat(this.handleClass),mirror:{constrainDimensions:!0}}).on("sortable:stop",(function(e){var n=e.oldIndex,i=e.newIndex;t.$emit("input",function(t,e,n){var i=[].concat(d(t.slice(0,e)),d(t.slice(e+1,t.length)));return[].concat(d(i.slice(0,n)),[t[e]],d(i.slice(n,i.length)))}(t.value,n,i))}));this.$once("hook:beforeDestroy",(function(){e.destroy()}))}},p={name:"nzColumnsPicker",components:{SortableHandle:o,SortableItem:u,SortableList:Object(a.a)(h,void 0,void 0,!1,null,null,null).exports},props:{value:{type:Array,default:function(){return[]}},columns:{type:Array,required:!0},title:{type:String,default:function(){return"Columns"}}},data:function(){return{allColumns:this.columns,checkedColumns:r()(this.value.concat(this.columns.filter((function(t){return t.required})).map((function(t){return t.value}))))}},computed:{allChecked:function(){return this.checkedColumns.length&&this.checkedColumns.length===this.columns.length},checked:function(){var t=this;return this.allColumns.map((function(t){return t.value})).filter((function(e){return t.checkedColumns.includes(e)}))},required:function(){return this.allColumns.filter((function(t){return t.required}))}},watch:{checked:{immediate:!0,handler:function(){this.$emit("input",this.checked)}}},methods:{checkAll:function(t){t.target.checked?this.checkedColumns=this.allColumns.map((function(t){return t.value})):this.checkedColumns=this.required.map((function(t){return t.value}))}}},m=(n("uDn1"),Object(a.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sortable-list",{staticClass:"columns-picker",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.items;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-heading"},[n("b-checkbox",{attrs:{value:t.allChecked},nativeOn:{change:function(e){return t.checkAll(e)}}}),t._v(t._s(t.title)+"\n    ")],1),t._v(" "),t._l(i,(function(e){return n("sortable-item",{key:e.value},[n("div",{staticClass:"panel-block"},[n("b-checkbox",{attrs:{disabled:e.required,required:e.required,"native-value":e.value},model:{value:t.checkedColumns,callback:function(e){t.checkedColumns=e},expression:"checkedColumns"}},[t._v("\n          "+t._s(e.label)+"\n        ")]),t._v(" "),n("sortable-handle",[n("b-icon",{attrs:{icon:"arrows-v",size:"is-small"}})],1)],1)])}))],2)}}]),model:{value:t.allColumns,callback:function(e){t.allColumns=e},expression:"allColumns"}})}),[],!1,null,null,null));e.a=m.exports},"TO/g":function(t,e,n){"use strict";var i=n("vDqi"),r=n.n(i),s=n("sEfC"),a=n.n(s),o=n("mwIZ"),l=n.n(o);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={name:"nzPublicationAutocomplete",props:{label:{type:String,default:"Publication"},placeholder:{type:String,default:"Search for publication..."},publication:{type:Object,default:null},route:{type:String,default:"api.autocomplete.publications.index"},value:{type:String,default:""},error:Boolean,message:{type:String,default:null},except:{},autofocus:Boolean,disabled:Boolean},data:function(){return{data:[],selected:this.publication||null,loading:!1}},computed:{icon:function(){return this.selected?"check":"search"}},watch:{publication:function(t){this.selected=t}},methods:{fetchData:a()((function(){var t=this;if(this.value){this.data=[],this.loading=!0;var e={citation:this.value};this.except&&(e.except=this.except),r.a.get(route(this.route),{params:e}).then((function(e){e.data.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.loading=!1}))}}),500),onSelect:function(t){this.selected=t,this.$emit("select",t)},onInput:function(t){var e=this.getValue(this.selected);e&&e!==t&&this.onSelect(null),this.$emit("input",t),this.fetchData()},focusOnInput:function(){this.$el.querySelector("input").focus()},getValue:function(t){if(t)return"object"===u(t)?l()(t,"citation"):t}}},d=n("KHd+"),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"nz-publication-autocomplete",attrs:{label:t.label,type:t.error?"is-danger":null,message:t.message}},[n("b-field",{attrs:{grouped:""}},[n("b-autocomplete",{attrs:{value:t.value,data:t.data,field:"citation",loading:t.loading,icon:t.icon,placeholder:t.placeholder,expanded:"",autofocus:t.autofocus,disabled:t.disabled},on:{input:t.onInput,select:t.onSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[t._v("\n            "+t._s(e.option.citation)+"\n          ")])])]}}])}),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.a=f.exports},WYMz:function(t,e,n){"use strict";var i=n("vDqi"),r=n.n(i),s=n("sEfC"),a=n.n(s),o=n("mwIZ"),l=n.n(o);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c={name:"nzUserAutocomplete",props:{label:{type:String,default:"User"},placeholder:{type:String,default:"Search for user..."},user:{type:Object,default:null},route:{type:String,default:"api.autocomplete.users.index"},value:{type:String,default:""},error:Boolean,message:{type:String,default:null},except:{},autofocus:Boolean,disabled:Boolean},data:function(){return{data:[],selected:this.user||null,loading:!1}},computed:{icon:function(){return this.selected?"check":null}},watch:{user:function(t){this.selected=t}},methods:{fetchData:a()((function(){var t=this;if(this.value){this.data=[],this.loading=!0;var e={name:this.value};this.except&&(e.except=this.except),r.a.get(route(this.route),{params:e}).then((function(e){e.data.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.loading=!1}))}}),500),onSelect:function(t){this.selected=t,this.$emit("select",t)},onInput:function(t){var e=this.getValue(this.selected);e&&e!==t&&this.onSelect(null),this.$emit("input",t),this.fetchData()},focusOnInput:function(){this.$el.querySelector("input").focus()},getValue:function(t){if(t)return"object"===u(t)?l()(t,"full_name"):t}}},d=n("KHd+"),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"nz-user-autocomplete",attrs:{label:t.label,type:t.error?"is-danger":null,message:t.message}},[n("b-field",{attrs:{grouped:""}},[n("b-autocomplete",{attrs:{value:t.value,data:t.data,field:"full_name",loading:t.loading,icon:t.icon,placeholder:t.placeholder,expanded:"",autofocus:t.autofocus,disabled:t.disabled},on:{input:t.onInput,select:t.onSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[t._v("\n            "+t._s(e.option.full_name)+" "),n("small",[t._v("<"+t._s(e.option.email)+">")])])])]}}])})],1)],1)}),[],!1,null,null,null);e.a=f.exports},WfdN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t){return t instanceof File||t instanceof FileList}function s(t){if(null===t)return null;if(r(t))return t;if(Array.isArray(t)){var e=[];for(var n in t)t.hasOwnProperty(n)&&(e[n]=s(t[n]));return e}if("object"===(void 0===t?"undefined":i(t))){var a={};for(var o in t)t.hasOwnProperty(o)&&(a[o]=s(t[o]));return a}return t}e.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e.isFile=r,e.merge=function(t,e){for(var n in e)t[n]=s(e[n])},e.cloneDeep=s},XIG7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new FormData,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null===t||"undefined"===t||0===t.length)return e.append(n,t);for(var i in t)t.hasOwnProperty(i)&&a(e,s(n,i),t[i]);return e}function s(t,e){return t?t+"["+e+"]":e}function a(t,e,n){return n instanceof Date?t.append(e,n.toISOString()):n instanceof File?t.append(e,n,n.name):"boolean"==typeof n?t.append(e,n?"1":"0"):null===n?t.append(e,""):"object"!==(void 0===n?"undefined":i(n))?t.append(e,n):void r(n,t,e)}e.objectToFormData=r},Zcvo:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".columns-picker :focus{outline:none}.columns-picker .panel-block{justify-content:space-between}.columns-picker .panel-block:hover{cursor:default}.columns-picker .panel-heading{padding-left:.6em}.columns-picker .sortable-handle:hover{cursor:move}.columns-picker .b-checkbox input[type=checkbox][disabled]+.check{opacity:.5}",""])},eXgj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n("ukZA"),o=(i=a)&&i.__esModule?i:{default:i},l=n("f7hI");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(this,t),this.processing=!1,this.successful=!1,this.withData(e).withOptions(n).withErrors({})}return s(t,[{key:"withData",value:function(t){for(var e in(0,l.isArray)(t)&&(t=t.reduce((function(t,e){return t[e]="",t}),{})),this.setInitialValues(t),this.errors=new o.default,this.processing=!1,this.successful=!1,t)(0,l.guardAgainstReservedFieldName)(e),this[e]=t[e];return this}},{key:"withErrors",value:function(t){return this.errors=new o.default(t),this}},{key:"withOptions",value:function(t){this.__options={resetOnSuccess:!0},t.hasOwnProperty("resetOnSuccess")&&(this.__options.resetOnSuccess=t.resetOnSuccess),t.hasOwnProperty("onSuccess")&&(this.onSuccess=t.onSuccess),t.hasOwnProperty("onFail")&&(this.onFail=t.onFail);var e="undefined"!=typeof window&&window.axios;if(this.__http=t.http||e||n("vDqi"),!this.__http)throw new Error("No http library provided. Either pass an http option, or install axios.");return this}},{key:"data",value:function(){var t={};for(var e in this.initial)t[e]=this[e];return t}},{key:"only",value:function(t){var e=this;return t.reduce((function(t,n){return t[n]=e[n],t}),{})}},{key:"reset",value:function(){(0,l.merge)(this,this.initial),this.errors.clear()}},{key:"setInitialValues",value:function(t){this.initial={},(0,l.merge)(this.initial,t)}},{key:"populate",value:function(t){var e=this;return Object.keys(t).forEach((function(n){(0,l.guardAgainstReservedFieldName)(n),e.hasOwnProperty(n)&&(0,l.merge)(e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t[n]))})),this}},{key:"clear",value:function(){for(var t in this.initial)this[t]="";this.errors.clear()}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this;return this.__validateRequestType(t),this.errors.clear(),this.processing=!0,this.successful=!1,new Promise((function(i,r){n.__http[t](e,n.hasFiles()?(0,l.objectToFormData)(n.data()):n.data()).then((function(t){n.processing=!1,n.onSuccess(t.data),i(t.data)})).catch((function(t){n.processing=!1,n.onFail(t),r(t)}))}))}},{key:"hasFiles",value:function(){for(var t in this.initial)if(this.hasFilesDeep(this[t]))return!0;return!1}},{key:"hasFilesDeep",value:function(t){if(null===t)return!1;if("object"===(void 0===t?"undefined":r(t)))for(var e in t)if(t.hasOwnProperty(e)&&this.hasFilesDeep(t[e]))return!0;if(Array.isArray(t))for(var n in t)if(t.hasOwnProperty(n))return this.hasFilesDeep(t[n]);return(0,l.isFile)(t)}},{key:"onSuccess",value:function(t){this.successful=!0,this.__options.resetOnSuccess&&this.reset()}},{key:"onFail",value:function(t){this.successful=!1,t.response&&t.response.data.errors&&this.errors.record(t.response.data.errors)}},{key:"hasError",value:function(t){return this.errors.has(t)}},{key:"getError",value:function(t){return this.errors.first(t)}},{key:"getErrors",value:function(t){return this.errors.get(t)}},{key:"__validateRequestType",value:function(t){var e=["get","delete","head","post","put","patch"];if(-1===e.indexOf(t))throw new Error("`"+t+"` is not a valid request type, must be one of: `"+e.join("`, `")+"`.")}}],[{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(new t).withData(e)}}]),t}();e.default=c},f7hI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("WfdN");Object.keys(i).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})}));var r=n("XIG7");Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}));var s=n("0JjW");Object.keys(s).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return s[t]}})}))},h1c9:function(t,e,n){"use strict";n.r(e);var i=n("mwIZ"),r=n.n(i),s=n("5YJQ"),a=n("TO/g"),o=n("WYMz"),l=n("SuVM"),u={name:"nzFieldObservationsImport",components:{NzPublicationAutocomplete:a.a,NzUserAutocomplete:o.a,NzColumnsPicker:l.a},props:{columns:{type:Array,default:function(){return[]}},initial:{type:Array,default:function(){return[]}},runningImport:Object,cancellableStatuses:{type:Array,default:function(){return[]}}},data:function(){return{selectedColumns:this.initial,showColumnsSelection:!1,file:null,importing:!1,currentImport:this.runningImport,validationErrors:[],currentErrorsPage:1,submissionErrors:new s.Errors,hasHeading:!1,approveCurated:!1,showSuccessMessage:!1,cancelling:!1,publicationSearch:"",citedPublicationSearch:"",publication:null,citedPublication:null,isOriginalData:!0,userId:null,user:null}},computed:{canSubmit:function(){return!this.importing&&this.file},validationFailed:function(){return"validation_failed"===r()(this.currentImport,"status")},saved:function(){return"saved"===r()(this.currentImport,"status")},savingFailed:function(){return"saving_failed"===r()(this.currentImport,"status")},cancelled:function(){return"cancelled"===r()(this.currentImport,"status")},importStatus:function(){var t=r()(this.currentImport,"status");return this.trans("imports.status.".concat(t))},cancellable:function(){return this.currentImport&&this.cancellableStatuses.includes(this.currentImport.status)&&!this.cancelling},userFullName:function(){return window.App.User.full_name}},created:function(){this.currentImport&&!this.saved&&(this.importing=!0,this.startCheckingStatus())},methods:{toggleColumns:function(){this.showColumnsSelection=!this.showColumnsSelection},submit:function(){this.canSubmit&&(this.resetForm(),this.importing=!0,this.currentImport=null,axios.post("/api/literature-observation-imports",this.makeForm()).then(this.handleSuccessfulSubmit).catch(this.handleFailedSubmit))},makeForm:function(){var t=new FormData;return t.append("file",this.file),this.selectedColumns.forEach((function(e){t.append("columns[]",e)})),this.hasHeading&&t.append("has_heading",1),this.publication&&t.append("publication_id",this.publication.id),t.append("is_original_data",this.isOriginalData?1:0),this.citedPublication&&t.append("cited_publication_id",this.citedPublication.id),this.userId&&t.append("user_id",this.userId),t},resetForm:function(){this.validationErrors=[],this.currentErrorsPage=1,this.showColumnsSelection=!1,this.submissionErrors.clear()},handleSuccessfulSubmit:function(t){var e=t.data;this.currentImport=e,this.file=null,this.startCheckingStatus()},handleFailedSubmit:function(t){this.importing=!1,this.submissionErrors.record(r()(t,"response.data.errors",{})),this.$buefy.toast.open({duration:2500,message:r()(t,"response.data.message"),type:"is-danger"})},startCheckingStatus:function(){var t=this;this.interval=setInterval((function(){t.checkStatus()}),2500)},checkStatus:function(){var t=this;return axios.get("/api/literature-observation-imports/".concat(this.currentImport.id)).then((function(e){var n=e.data;return t.currentImport=n,t.validationFailed?t.handleFailedValidation():t.savingFailed?t.handleFailedSaving():t.cancelled?t.stopCheckingImport():void(t.saved&&t.handleStored())}))},showValidationErrors:function(){var t=this;return axios.get(this.currentImport.errors_url).then((function(e){var n=e.data;t.validationErrors=n}))},handleFailedValidation:function(){this.$buefy.toast.open({duration:2500,message:this.trans("imports.validation_failed"),type:"is-danger"}),this.showColumnsSelection=!1,this.showValidationErrors(),this.stopCheckingImport()},handleFailedSaving:function(){this.$buefy.toast.open({duration:2500,message:this.trans("imports.saving_failed"),type:"is-danger"}),this.showColumnsSelection=!1,this.stopCheckingImport()},handleStored:function(){this.showSuccessMessage=!0,this.publicationSearch="",this.citedPublicationSearch="",this.isOriginalData=!0,this.user=null,this.userId=null,this.stopCheckingImport()},cancel:function(){var t=this;this.cancellable&&(this.cancelling=!0,axios.post("/api/cancelled-imports",{import_id:this.currentImport.id}).then((function(){t.cancelling=!1,t.stopCheckingImport()})).catch((function(){t.cancelling=!1})))},stopCheckingImport:function(){clearInterval(this.interval),this.importing=!1,this.currentImport=null},handleIsOriginalDataInput:function(t){t&&(this.citedPublication=null,this.citedPublicationSearch=""),this.isOriginalData=t},setUserId:function(t){this.userId=t?t.id:null}}},c=(n("Ieeu"),n("KHd+")),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"literature-observations-import"},[t.importing?n("div",{staticClass:"is-flex is-flex-center flex-col"},[n("div",{staticClass:"is-flex is-flex-center"},[n("span",{staticClass:"loader mr-2"}),t._v(" "),t.currentImport?n("span",{staticClass:"has-loader"},[t._v(t._s(t.importStatus))]):t._e()]),t._v(" "),t.cancellable?n("button",{staticClass:"button is-text has-text-danger",attrs:{type:"button"},on:{click:t.cancel}},[t._v(t._s(t.trans("buttons.cancel")))]):t._e()]):n("div",{staticClass:"mb-4"},[n("b-notification",{attrs:{type:"is-success",active:t.showSuccessMessage},on:{"update:active":function(e){t.showSuccessMessage=e}}},[t._v("\n      "+t._s(t.trans("imports.success"))+"\n    ")]),t._v(" "),n("div",{staticClass:"mb-8"},[n("nz-publication-autocomplete",{staticClass:"is-required",attrs:{label:t.trans("labels.literature_observations.publication"),placeholder:t.trans("labels.literature_observations.search_for_publication"),error:t.submissionErrors.has("publication_id"),message:t.submissionErrors.first("publication_id")},on:{select:function(e){t.publication=e}},model:{value:t.publicationSearch,callback:function(e){t.publicationSearch=e},expression:"publicationSearch"}}),t._v(" "),n("b-field",{staticClass:"is-required",attrs:{label:t.trans("labels.literature_observations.is_original_data"),error:t.submissionErrors.has("is_original_data"),message:t.submissionErrors.first("is_original_data")}},[n("b-select",{attrs:{value:t.isOriginalData,expanded:""},on:{input:t.handleIsOriginalDataInput}},[n("option",{domProps:{value:!0}},[t._v(t._s(t.trans("labels.literature_observations.original_data")))]),t._v(" "),n("option",{domProps:{value:!1}},[t._v(t._s(t.trans("labels.literature_observations.citation")))])])],1),t._v(" "),n("nz-publication-autocomplete",{directives:[{name:"show",rawName:"v-show",value:!t.isOriginalData,expression:"!isOriginalData"}],staticClass:"is-required",attrs:{publication:t.publication,error:t.submissionErrors.has("cited_publication_id"),message:t.submissionErrors.first("cited_publication_id"),label:t.trans("labels.literature_observations.cited_publication"),placeholder:t.trans("labels.literature_observations.search_for_publication")},on:{select:function(e){t.citedPublication=e}},model:{value:t.citedPublicationSearch,callback:function(e){t.citedPublicationSearch=e},expression:"citedPublicationSearch"}}),t._v(" "),n("nz-user-autocomplete",{attrs:{label:t.trans("labels.imports.user"),placeholder:t.userFullName},on:{select:t.setUserId},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),t._v(" "),n("div",{staticClass:"level mb-4"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("div",{staticClass:"buttons"},[t.importing?t._e():n("button",{staticClass:"button is-outlined",class:[t.showColumnsSelection?"is-primary":""],attrs:{type:"button"},on:{click:t.toggleColumns}},[t._v(t._s(t.trans("labels.imports.choose_columns")))])])]),t._v(" "),n("div",{staticClass:"level-item"},[t.importing?t._e():n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:".csv"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("a",{staticClass:"button"},[n("span",[t._v(t._s(t.trans("labels.imports.select_csv_file")))])])]),t._v(" "),t.file?n("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)],1)]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("button",{staticClass:"button is-primary is-outlined",attrs:{type:"button",disabled:!t.canSubmit},on:{click:t.submit}},[n("b-icon",{attrs:{icon:"upload"}}),t._v(" "),n("span",[t._v(t._s(t.trans("labels.imports.import")))])],1)])])]),t._v(" "),n("b-checkbox",{model:{value:t.hasHeading,callback:function(e){t.hasHeading=e},expression:"hasHeading"}},[t._v(t._s(t.trans("labels.imports.has_heading")))])],1),t._v(" "),n("b-collapse",{attrs:{open:t.showColumnsSelection}},[n("nz-columns-picker",{attrs:{columns:t.columns,title:t.trans("labels.imports.columns")},model:{value:t.selectedColumns,callback:function(e){t.selectedColumns=e},expression:"selectedColumns"}})],1),t._v(" "),t.validationErrors.length?n("b-table",{staticClass:"is-danger",attrs:{data:t.validationErrors,paginated:!0,"per-page":30,"current-page":t.currentErrorsPage},on:{"update:currentPage":function(e){t.currentErrorsPage=e},"update:current-page":function(e){t.currentErrorsPage=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"row",label:t.trans("labels.imports.row_number")}},[t._v("\n            "+t._s(e.row.row)+"\n        ")]),t._v(" "),n("b-table-column",{attrs:{field:"error",label:t.trans("labels.imports.error")}},[t._v("\n            "+t._s(e.row.error)+"\n        ")])]}}],null,!1,2183879962)}):t._e()],1)}),[],!1,null,"848b11c2",null);e.default=d.exports},ngVI:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".buttons .field[data-v-848b11c2]{margin-bottom:0}.buttons .field.file[data-v-848b11c2]{margin-right:.5rem}.buttons .field .upload[data-v-848b11c2]:hover{cursor:pointer}.buttons .field .upload .button[data-v-848b11c2]{margin-right:0}",""])},oM3n:function(t,e,n){var i=n("Zcvo");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},uDn1:function(t,e,n){"use strict";var i=n("oM3n");n.n(i).a},ukZA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.record(e)}return i(t,[{key:"all",value:function(){return this.errors}},{key:"has",value:function(t){var e=this.errors.hasOwnProperty(t);e||(e=Object.keys(this.errors).filter((function(e){return e.startsWith(t+".")||e.startsWith(t+"[")})).length>0);return e}},{key:"first",value:function(t){return this.get(t)[0]}},{key:"get",value:function(t){return this.errors[t]||[]}},{key:"any",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)return Object.keys(this.errors).length>0;var n={};return e.forEach((function(e){return n[e]=t.get(e)})),n}},{key:"record",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errors=t}},{key:"clear",value:function(t){if(t){var e=Object.assign({},this.errors);Object.keys(e).filter((function(e){return e===t||e.startsWith(t+".")||e.startsWith(t+"[")})).forEach((function(t){return delete e[t]})),this.errors=e}else this.errors={}}}]),t}();e.default=s}}]);
//# sourceMappingURL=14.js.map?id=b61d633cb55c57a53cb1