"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[186],{54021:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var n=a(74865),o=a.n(n);const s={metaInfo:{title:"Company"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",companies:[],editmode:!1,company:{name:"",email:"",country:"",phone:""}}},computed:{columns:function(){return[{label:this.$t("Name"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Phone"),field:"phone",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Country"),field:"country",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Email"),field:"email",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Company(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Company(1))},selectionChanged:function(t){var e=this,a=t.selectedRows;this.selectedIds=[],a.forEach((function(t,a){e.selectedIds.push(t.id)}))},onSortChange:function(t){this.updateParams({sort:{type:t[0].type,field:t[0].field}}),this.Get_Company(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Company(this.serverParams.page)},getValidationState:function(t){var e=t.dirty,a=t.validated,n=t.valid;return e||a?void 0===n?null:n:null},Submit_Company:function(){var t=this;this.$refs.Create_Company.validate().then((function(e){e?t.editmode?t.Update_Company():t.Create_Company():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},New_Company:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Company")},Edit_Company:function(t){this.Get_Company(this.serverParams.page),this.reset_Form(),this.company=t,this.editmode=!0,this.$bvModal.show("New_Company")},Get_Company:function(t){var e=this;o().start(),o().set(.1),axios.get("company?page="+t+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.companies=t.data.companies,e.totalRows=t.data.totalRows,o().done(),e.isLoading=!1})).catch((function(t){o().done(),setTimeout((function(){e.isLoading=!1}),500)}))},Create_Company:function(){var t=this;this.SubmitProcessing=!0,axios.post("company",{name:this.company.name,email:this.company.email,country:this.company.country,phone:this.company.phone}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Company"),t.makeToast("success",t.$t("Created_in_successfully"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},Update_Company:function(){var t=this;this.SubmitProcessing=!0,axios.put("company/"+this.company.id,{name:this.company.name,email:this.company.email,country:this.company.country,phone:this.company.phone}).then((function(e){t.SubmitProcessing=!1,Fire.$emit("Event_Company"),t.makeToast("success",t.$t("Updated_in_successfully"),t.$t("Success"))})).catch((function(e){t.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))},reset_Form:function(){this.company={id:"",name:"",email:"",country:"",phone:""}},Remove_Company:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(a){a.value&&axios.delete("company/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Company")})).catch((function(){e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(o().start(),o().set(.1),axios.post("company/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Company")})).catch((function(){setTimeout((function(){return o().done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Company(1),Fire.$on("Event_Company",(function(){setTimeout((function(){t.Get_Company(t.serverParams.page),t.$bvModal.hide("New_Company")}),500)})),Fire.$on("Delete_Company",(function(){setTimeout((function(){t.Get_Company(t.serverParams.page)}),500)}))}},i=s;const r=(0,a(51900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("Company"),folder:t.$t("hrm")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("b-card",{staticClass:"wrapper"},[a("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.companies,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(e){return["actions"==e.column.field?a("span",[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Edit"},on:{click:function(a){return t.Edit_Company(e.row)}}},[a("i",{staticClass:"i-Edit text-25 text-success"})]),t._v(" "),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Delete"},on:{click:function(a){return t.Remove_Company(e.row.id)}}},[a("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):t._e()]}}],null,!1,1713410970)},[a("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),a("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(e){return t.New_Company()}}},[a("i",{staticClass:"i-Add"}),t._v("\n          "+t._s(t.$t("Add"))+"\n        ")])],1)])],1),t._v(" "),a("validation-observer",{ref:"Create_Company"},[a("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"New_Company",title:t.editmode?t.$t("Edit"):t.$t("Add")}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Company.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("validation-provider",{attrs:{name:"Name",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Name")+" *"}},[a("b-form-input",{attrs:{placeholder:t.$t("Enter_Company_Name"),state:t.getValidationState(e),"aria-describedby":"Name-feedback",label:"Name"},model:{value:t.company.name,callback:function(e){t.$set(t.company,"name",e)},expression:"company.name"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}])})],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:t.$t("Email")}},[a("b-form-input",{attrs:{placeholder:t.$t("Enter_email_address"),label:"Email"},model:{value:t.company.email,callback:function(e){t.$set(t.company,"email",e)},expression:"company.email"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:t.$t("Phone")}},[a("b-form-input",{attrs:{placeholder:t.$t("Enter_Company_Phone"),label:"Phone"},model:{value:t.company.phone,callback:function(e){t.$set(t.company,"phone",e)},expression:"company.phone"}})],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:t.$t("Country")}},[a("b-form-input",{attrs:{placeholder:t.$t("Enter_Company_Country"),label:"Country"},model:{value:t.company.country,callback:function(e){t.$set(t.company,"country",e)},expression:"company.country"}})],1)],1),t._v(" "),a("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[a("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[a("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);