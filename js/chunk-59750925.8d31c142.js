(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59750925"],{"9b46":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addMc wrap1440"},[s("h3",{staticClass:"title"},[t._v(t._s(t.isEditor?t.$t("miner.addMc_editTitle"):t.$t("miner.addMc_Title")))]),t.isEditor?t._e():[s("div",{staticClass:"label"},[t._v("1."+t._s(t.$t("miner.addMc_setupApp")))]),s("div",{staticClass:"text mb30"},[t._v("\n      "+t._s(t.$t("miner.addMc_msg_1[0]"))+"(\n      "),s("a",{staticClass:"is-link",attrs:{href:"https://kdocs.cn/l/sCsGPLlCl?f=111",target:"_blank"}},[t._v(t._s(t.$t("add_machine_download")))]),t._v("\n      ),"+t._s(t.$t("miner.addMc_msg_1[1]"))+"\n    ")])],s("div",{staticClass:"label mt20"},[t._v(t._s(t.isEditor?1:2)+" ."+t._s(t.$t("add_machine_input_time")))]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("add_machine_from"))+":")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"162px"},attrs:{type:"number"},model:{value:t.can_rent_start_time_later,callback:function(e){t.can_rent_start_time_later=t._n(e)},expression:"can_rent_start_time_later"}}),t._v("\n    "+t._s(t.$t("add_machine_from_time"))+"\n  ")],1),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("add_machine_to"))+":")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"162px"},attrs:{type:"number"},model:{value:t.end_rent_out_time_later,callback:function(e){t.end_rent_out_time_later=t._n(e)},expression:"end_rent_out_time_later"}}),t._v("\n    "+t._s(t.$t("add_machine_to_time"))+"\n  ")],1),s("div",{staticClass:"label mt20"},[t._v(t._s(t.isEditor?2:3)+"."+t._s(t.$t("add_machine_input_id")))]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("add_machine_machine_id"))+":")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"700px"},attrs:{disabled:t.isEditor,type:"text"},model:{value:t.machine_id,callback:function(e){t.machine_id="string"===typeof e?e.trim():e},expression:"machine_id"}})],1),s("div",{staticClass:"label mt20"},[t._v(t._s(t.isEditor?3:4)+"."+t._s(t.$t("miner.addMc_price")))]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("miner.addMc_msg_4[0]"))+":")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"162px"},attrs:{type:"number"},model:{value:t.gpu_price_dollar,callback:function(e){t.gpu_price_dollar=t._n(e)},expression:"gpu_price_dollar"}}),t._v("\n    $/"+t._s(t.$t("hour"))+"\n  ")],1),s("div",{staticClass:"subText"},[t._v("  ")]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("month_discount"))+"：")]),s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},model:{value:t.digital90,callback:function(e){t.digital90=e},expression:"digital90"}},t._l(t.digitalOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),s("div",{staticClass:"subText"},[t._v("  ")]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("quarter_discount"))+"：")]),s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},model:{value:t.digital85,callback:function(e){t.digital85=e},expression:"digital85"}},t._l(t.digitalOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),s("div",{staticClass:"subText"},[t._v("  ")]),s("div",{staticClass:"text"},[s("span",[t._v(t._s(t.$t("year_discount"))+"：")]),s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},model:{value:t.digital80,callback:function(e){t.digital80=e},expression:"digital80"}},t._l(t.digitalOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("add_machine_msg_tips")))]),t.display_select_rent_platform?s("div",{staticClass:"label mt20"},[s("span",[t._v(t._s(t.$t("rentout_machine_ai_platform_select"))+":")]),s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},on:{change:t.get_dbc_count},model:{value:t.rentout_machine_platform_select,callback:function(e){t.rentout_machine_platform_select=e},expression:"rentout_machine_platform_select"}},t._l(t.rentout_machine_platformOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("rentout_machine_ai_platform_select_info")))])],1):t._e(),s("div",{staticClass:"label mt20"},[s("span",[t._v(t._s(t.isEditor?4:5)+"."+t._s(t.$t("rentout_machine_classification"))+":")]),this.$route.query.success_pay_deposite&&1===this.$route.query.machine_mode?s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("rentout_machine_high")))]):0===this.$route.query.error_rent_count&&this.$route.query.total_time_be_used>=8640?s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},model:{value:t.rentout_machine_classification,callback:function(e){t.rentout_machine_classification=e},expression:"rentout_machine_classification"}},t._l(t.rentout_machine_classificationOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1):s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("rentout_machine_normal")))])],1),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("high_stability_conditions0")))]),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("high_stability_conditions1")))]),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("high_stability_conditions2")))]),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("high_stability_conditions3",{dbc_count:t.dbc_deposite_count})))]),s("div",{staticClass:"subText"},[t._v(t._s(t.$t("high_stability_conditions4")))]),1===t.rentout_machine_classification&&0===this.$route.query.rentout_deposite_dbc_count?s("div",{staticClass:"label mt30"},[s("span",[t._v("  "+t._s(t.$t("input_deposite_dbc_count"))+":  ")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"162px"},attrs:{type:"number"},model:{value:t.dbc_count,callback:function(e){t.dbc_count=e},expression:"dbc_count"}}),0!=this.$route.query.gpu_count?s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("deposite_dbc_count_total"))+"："+t._s(t.dbc_count*this.$route.query.gpu_count))]):t._e(),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("dlg_lease_wallet_balance"))+": "+t._s(this.$store.state.balance.toFixed(4)))])],1):t._e(),1===t.rentout_machine_classification&&0!==this.$route.query.rentout_deposite_dbc_count?s("div",{staticClass:"label mt30"},[s("span",[t._v("  "+t._s(t.$t("deposite_dbc_count"))+":  "+t._s(t.dbc_count))]),0!=this.$route.query.gpu_count?s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("deposite_dbc_count_total"))+"："+t._s(t.dbc_count*this.$route.query.gpu_count))]):t._e(),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("dlg_lease_wallet_balance"))+": "+t._s(this.$store.state.balance.toFixed(4)))])]):t._e(),s("div",{staticClass:"label mt20"},[s("span",[t._v(t._s(t.isEditor?5:6)+"."+t._s(t.$t("rentout_machine_type"))+":")]),s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},on:{change:t.get_dbc_count},model:{value:t.rentout_machine_type,callback:function(e){t.rentout_machine_type=e},expression:"rentout_machine_type"}},t._l(t.rentout_machine_typeOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("rentout_machine_type_info")))])],1),0===t.rentout_machine_classification&&0===this.$route.query.rentout_deposite_dbc_count&&1===t.rentout_machine_type?s("div",{staticClass:"label mt30"},[s("span",[t._v("  "+t._s(t.$t("input_deposite_dbc_count"))+":  ")]),s("mu-text-field",{staticClass:"mc-input",staticStyle:{width:"162px"},attrs:{type:"number"},model:{value:t.dbc_count,callback:function(e){t.dbc_count=e},expression:"dbc_count"}}),0!=this.$route.query.gpu_count?s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("deposite_dbc_count_total"))+"："+t._s(t.dbc_count*this.$route.query.gpu_count))]):t._e(),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("dlg_lease_wallet_balance"))+": "+t._s(this.$store.state.balance.toFixed(4)))])],1):t._e(),0===t.rentout_machine_classification&&0!==this.$route.query.rentout_deposite_dbc_count&&1===t.rentout_machine_type?s("div",{staticClass:"label mt30"},[s("span",[t._v("  "+t._s(t.$t("deposite_dbc_count"))+":  "+t._s(t.dbc_count))]),0!=this.$route.query.gpu_count?s("span",{staticClass:"time-select ml10"},[t._v(t._s(t.$t("deposite_dbc_count_total"))+"："+t._s(t.dbc_count*this.$route.query.gpu_count))]):t._e(),s("span",{staticClass:"subText"},[t._v("  "+t._s(t.$t("dlg_lease_wallet_balance"))+": "+t._s(this.$store.state.balance.toFixed(4)))])]):t._e(),s("div",{staticClass:"label mt20"},[t._v(t._s(t.isEditor?6:7)+"."+t._s(t.$t("your_country")))]),s("div",{staticClass:"subText"},[t._v("  ")]),s("div",{staticClass:"form"},[s("el-select",{staticClass:"time-select ml10",staticStyle:{width:"240px"},attrs:{size:"small"},model:{value:t.country_code,callback:function(e){t.country_code=e},expression:"country_code"}},t._l(t.countrysOptions,(function(t){return s("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),s("div",{staticClass:"label mt30"},[t._v(t._s(t.isEditor?7:8)+"."+t._s(t.$t("miner.addMc_dbc")))]),s("div",[s("mu-text-field",{staticClass:"verityMail-input",attrs:{type:"number"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),s("el-button",{staticClass:"ml20",attrs:{type:"primary",size:"mini",loading:t.isCoding},on:{click:t.getCode}},[t._v(t._s(t.$t("miner.addMc_mail")))])],1),s("div",{staticClass:"btn-wrap mt100"},[s("el-button",{staticClass:"addMc-btn",attrs:{loading:t.isLoading,type:"primary",size:"medium"},on:{click:t.confirm}},[t._v(t._s(t.$t("confirm")))]),s("el-button",{staticClass:"addMc-btn blue ml20",attrs:{size:"medium"},on:{click:t.back}},[t._v(t._s(t.$t("back")))]),s("span",{staticClass:"info ml60"},[t._v("\n      "+t._s(t.$t("miner.addMc_msg_6[0]"))+"\n      "),s("span",{staticClass:"red"},[t._v(t._s(t.$t("miner.addMc_msg_6[1]")))])])],1),s("el-dialog",{attrs:{visible:t.isDateDlgOpen},on:{"update:visible":function(e){t.isDateDlgOpen=e}}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("miner.addMc_date")))]),s("div",{staticClass:"dlg-content"},[s("el-calendar",{model:{value:t.curDate,callback:function(e){t.curDate=e},expression:"curDate"}}),s("div",{staticClass:"tools"},[s("el-time-picker",{attrs:{"is-range":"","value-format":"HH:mm:ss","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围","picker-options":{format:"HH:mm"}},model:{value:t.curDT.timeArea,callback:function(e){t.$set(t.curDT,"timeArea",e)},expression:"curDT.timeArea"}})],1)],1)])],2)},a=[],n=(s("9a33"),s("365c")),_=s("4795"),c={name:"addMachine",open:Boolean,data:function(){return{isCoding:!1,isLoading:!1,curDate:new Date,curDT:{date:"",timeArea:""},minerKey:"",area:[{name:"北京时区",value:"1"}],isDateDlgOpen:!1,isWeekDlgOpen:!1,selArea:"",period:"",gpu_price_dollar:.1,code:"",can_rent_start_time_later:"",end_rent_out_time_later:"",machine_id:"",country_code:"CN",country:this.$t("my_machine_china"),digital90:"90",digital85:"85",digital80:"80",rentout_machine_type:0,rentout_machine_classification:0,dbc_count:"0",rentout_deposite_dbc_count_every_gpu:0,dbc_deposite_count:0,rentout_machine_platform_select:0,display_select_rent_platform:!1}},created:function(){this.gpu_price_dollar=this.$route.query.gpu_price_dollar/11*10,this.gpu_price_dollar<=0&&(this.gpu_price_dollar=.1),this.$route.query.gpu_rentout_whole&&(this.rentout_machine_type=1),this.can_rent_start_time_later=this.$route.query.can_rent_start_time_later>0?0:Math.floor(-this.$route.query.can_rent_start_time_later/60),this.end_rent_out_time_later=Math.floor(this.$route.query.end_rent_out_time_later/60),this.machine_id=this.$route.query.machine_id,this.country_code=this.$route.query.country_code,this.$route.query.discount_month&&0!==this.$route.query.discount_month?this.digital90=this.$route.query.discount_month+"":this.digital90="100",this.$route.query.discount_quarter&&0!==this.$route.query.discount_quarter?this.digital85=this.$route.query.discount_quarter+"":this.digital85="100",this.$route.query.discount_year&&0!==this.$route.query.discount_year?this.digital80=this.$route.query.discount_year+"":this.digital80="100",1===this.$route.query.machine_mode&&(this.rentout_machine_classification=1),"1"===this.$t("display_select_rent_platform")&&(this.display_select_rent_platform=!0),this.get_dbc_count()},computed:{isEditor:function(){return!!this.$route.query.machine_id},countrysOptions:function(){var t=this,e=[],s=new Array,i=this.$t("website_name"),a=this.$i18n.locale;return Object(n["D"])({user_name_platform:i,language:a}).then((function(i){if(1===i.status){s=i.content,t.$forceUpdate();for(var n=0;n<=s.length;n++)"CN"===a?(e.push({name:s[n].chineseName,value:s[n].simpleNameString}),t.country_code===s[n].simpleNameString&&(t.country=s[n].chineseName)):(e.push({name:s[n].englishName,value:s[n].simpleNameString}),t.country_code===s[n].simpleNameString&&(t.country=s[n].englishName))}})),e},digitalOptions:function(){var t=[],e=new Array,s=new Array,i="100%@95%@90%@85%@80%@75%@70%@65%@60%@55%@50%",a="100@95@90@85@80@75@70@65@60@55@50";e=i.split("@"),s=a.split("@");for(var n=0;n<e.length;n++)t.push({name:e[n],value:s[n]});return t},rentout_machine_typeOptions:function(){var t=[],e=new Array,s=this.$t("rentout_machine_tag");e=s.split("@");for(var i=0;i<e.length;i++)t.push({name:e[i],value:i});return t},rentout_machine_platformOptions:function(){var t=[],e=new Array,s=this.$t("rentout_machine_platform_tag");e=s.split("@");for(var i=0;i<e.length;i++)t.push({name:e[i],value:i});return t},rentout_machine_classificationOptions:function(){var t=[],e=new Array,s=this.$t("rentout_machine_classification_tag");e=s.split("@");for(var i=0;i<e.length;i++)t.push({name:e[i],value:i});return t}},methods:{get_dbc_count:function(){var t=this,e=!1;1===this.rentout_machine_type&&(e=!0);var s=!1;1===this.rentout_machine_platform_select&&(s=!0),Object(n["t"])({gpu_rentout_whole:e,only_pool_display:s}).then((function(e){1===e.status&&(t.dbc_deposite_count=e.content,t.dbc_count=t.$route.query.rentout_deposite_dbc_count,0==t.dbc_count&&(t.dbc_count=t.dbc_deposite_count))}))},getCode:function(){var t=this;if(Object(_["c"])())if(0!==this.machine_id.trim().length){var e=Object(_["c"])().address;this.isCoding=!0;var s=this.$t("website_name"),i=this.$i18n.locale;Object(n["N"])({wallet_address:e,machine_id:this.machine_id,user_name_platform:s,language:i}).then((function(e){1===e.status?t.$message({showClose:!0,message:e.msg,type:"success"}):t.$message({showClose:!0,message:e.msg,type:"error"})})).finally((function(){t.isCoding=!1}))}else this.$message({showClose:!0,message:this.$t("add_machine_input_id"),type:"error"})},confirm:function(){var t=this;this.isLoading=!0;var e=this.$t("website_name"),s=this.$i18n.locale;0===this.rentout_machine_classification&&0===this.rentout_machine_type?this.rentout_deposite_dbc_count_every_gpu=0:this.rentout_deposite_dbc_count_every_gpu=this.dbc_count,""===this.country_code&&(this.country_code="CN");var i=!1;i=0!==this.rentout_machine_type;var a=!1;1===this.rentout_machine_platform_select&&(a=!0),Object(n["a"])({wallet_address:Object(_["c"])().address,machine_id:this.machine_id,gpu_price_dollar:this.gpu_price_dollar,can_rent_start_time_later:this.can_rent_start_time_later,end_rent_out_time_later:this.end_rent_out_time_later,code:this.code,user_name_platform:e,language:s,country_code:this.country_code,discount_month:this.digital90,discount_quarter:this.digital85,discount_year:this.digital80,gpu_rentout_whole:i,machine_mode:this.rentout_machine_classification,rentout_deposite_dbc_count_every_gpu:this.rentout_deposite_dbc_count_every_gpu,only_pool_display:a}).then((function(e){1===e.status?t.$router.back():t.$message({showClose:!0,message:e.msg,type:"error"})})).finally((function(){t.isLoading=!1}))}}},l=c,o=(s("c756"),s("ecea"),s("9ca4")),r=Object(o["a"])(l,i,a,!1,null,"279c5ad9",null);e["default"]=r.exports},b312:function(t,e,s){},bc1c:function(t,e,s){},c756:function(t,e,s){"use strict";var i=s("bc1c"),a=s.n(i);a.a},ecea:function(t,e,s){"use strict";var i=s("b312"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-59750925.8d31c142.js.map