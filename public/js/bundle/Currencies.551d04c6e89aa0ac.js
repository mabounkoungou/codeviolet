"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7318],{38070:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(74865),s=r.n(n);const a={metaInfo:{title:"Currency"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",currencies:[],editmode:!1,currency:{id:"",name:"",code:"",symbol:""}}},computed:{columns:function(){return[{label:this.$t("CurrencyCode"),field:"code",tdClass:"text-left",thClass:"text-left"},{label:this.$t("CurrencyName"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Symbol"),field:"symbol",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Currency(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Currency(1))},selectionChanged:function(e){var t=this,r=e.selectedRows;this.selectedIds=[],r.forEach((function(e,r){t.selectedIds.push(e.id)}))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Currency(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Currency(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,r=e.validated,n=e.valid;return t||r?void 0===n?null:n:null},Submit_Currency:function(){var e=this;this.$refs.Create_Currency.validate().then((function(t){t?e.editmode?e.Update_Currency():e.Create_Currency():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,r){this.$root.$bvToast.toast(t,{title:r,variant:e,solid:!0})},New_Currency:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Currency")},Edit_Currency:function(e){this.Get_Currency(this.serverParams.page),this.reset_Form(),this.currency=e,this.editmode=!0,this.$bvModal.show("New_Currency")},Get_Currency:function(e){var t=this;s().start(),s().set(.1),axios.get("currencies?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.currencies=e.data.currencies,t.totalRows=e.data.totalRows,s().done(),t.isLoading=!1})).catch((function(e){s().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Create_Currency:function(){var e=this;this.SubmitProcessing=!0,axios.post("currencies",{name:this.currency.name,code:this.currency.code,symbol:this.currency.symbol}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Currency"),e.makeToast("success",e.$t("Create.TitleCurrency"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},Update_Currency:function(){var e=this;this.SubmitProcessing=!0,axios.put("currencies/"+this.currency.id,{name:this.currency.name,code:this.currency.code,symbol:this.currency.symbol}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Currency"),e.makeToast("success",e.$t("Update.TitleCurrency"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},reset_Form:function(){this.currency={id:"",name:"",code:"",symbol:""}},Remove_Currency:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(r){r.value&&axios.delete("currencies/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.TitleCurrency"),"success"),Fire.$emit("Delete_Currency")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(t){t.value&&(s().start(),s().set(.1),axios.post("currencies/delete/by_selection",{selectedIds:e.selectedIds}).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.TitleCurrency"),"success"),Fire.$emit("Delete_Currency")})).catch((function(){setTimeout((function(){return s().done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var e=this;this.Get_Currency(1),Fire.$on("Event_Currency",(function(){setTimeout((function(){e.Get_Currency(e.serverParams.page),e.$bvModal.hide("New_Currency")}),500)})),Fire.$on("Delete_Currency",(function(){setTimeout((function(){e.Get_Currency(e.serverParams.page)}),500)}))}};const i=(0,r(51900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-content"},[r("breadcumb",{attrs:{page:e.$t("Currencies"),folder:e.$t("Settings")}}),e._v(" "),e.isLoading?r("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():r("b-card",{staticClass:"wrapper"},[r("vue-good-table",{attrs:{mode:"remote",columns:e.columns,"search-options":{enabled:!0,placeholder:"search table"},totalRows:e.totalRows,rows:e.currencies,"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch,"on-selected-rows-change":e.selectionChanged},scopedSlots:e._u([{key:"table-row",fn:function(t){return["actions"==t.column.field?r("span",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit"},on:{click:function(r){return e.Edit_Currency(t.row)}}},[r("i",{staticClass:"i-Edit text-25 text-success"})]),e._v(" "),r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(r){return e.Remove_Currency(t.row.id)}}},[r("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):e._e()]}}],null,!1,604333498)},[r("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[r("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delete_by_selected()}}},[e._v(e._s(e.$t("Del")))])]),e._v(" "),r("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[r("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(t){return e.New_Currency()}}},[r("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")])],1)])],1),e._v(" "),r("validation-observer",{ref:"Create_Currency"},[r("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Currency",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Currency.apply(null,arguments)}}},[r("b-row",[r("b-col",{attrs:{md:"12"}},[r("validation-provider",{attrs:{name:"Code Currency",rules:{required:!0,min:2,max:5}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{label:e.$t("CurrencyCode")+" *"}},[r("b-form-input",{attrs:{placeholder:e.$t("Enter_Code_Currency"),state:e.getValidationState(t),"aria-describedby":"Code-feedback",label:"Code"},model:{value:e.currency.code,callback:function(t){e.$set(e.currency,"code",t)},expression:"currency.code"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Code-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),r("b-col",{attrs:{md:"12"}},[r("validation-provider",{attrs:{name:"Name Currency",rules:{required:!0,min:3}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{label:e.$t("CurrencyName")+" *"}},[r("b-form-input",{attrs:{placeholder:e.$t("Enter_name_Currency"),state:e.getValidationState(t),"aria-describedby":"Name-feedback",label:"Name"},model:{value:e.currency.name,callback:function(t){e.$set(e.currency,"name",t)},expression:"currency.name"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),r("b-col",{attrs:{md:"12"}},[r("validation-provider",{attrs:{name:"Symbole Currency",rules:{required:!0,max:5}},scopedSlots:e._u([{key:"default",fn:function(t){return[r("b-form-group",{attrs:{label:e.$t("Symbol")+" *"}},[r("b-form-input",{attrs:{placeholder:e.$t("Enter_Symbol_Currency"),state:e.getValidationState(t),"aria-describedby":"Symbole-feedback",label:"Symbole"},model:{value:e.currency.symbol,callback:function(t){e.$set(e.currency,"symbol",t)},expression:"currency.symbol"}}),e._v(" "),r("b-form-invalid-feedback",{attrs:{id:"Symbole-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),r("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[r("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[r("i",{staticClass:"i-Yes me-2 font-weight-bold"}),e._v(" "+e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);