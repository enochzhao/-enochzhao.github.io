(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62a89729"],{"163d":function(t,e,a){"use strict";var s=a("e7ad"),i=a("e042"),r=a("75c4"),n=a("1e5b"),o=a("94b3"),c=a("238a"),l=a("2ea2").f,_=a("dcb7").f,p=a("064e").f,u=a("777a").trim,d="Number",m=s[d],h=m,g=m.prototype,f=r(a("e005")(g))==d,v="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():u(e,3);var a,s,i,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+e}for(var n,c=e.slice(2),l=0,_=c.length;l<_;l++)if(n=c.charCodeAt(l),n<48||n>i)return NaN;return parseInt(c,s)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(f?c((function(){g.valueOf.call(a)})):r(a)!=d)?n(new h(b(e)),a,m):b(e)};for(var y,O=a("149f")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;O.length>k;k++)i(h,y=O[k])&&!i(m,y)&&p(m,y,_(h,y));m.prototype=g,g.constructor=m,a("bf16")(s,d,m)}},"1e5b":function(t,e,a){var s=a("fb68"),i=a("859b").set;t.exports=function(t,e,a){var r,n=e.constructor;return n!==a&&"function"==typeof n&&(r=n.prototype)!==a.prototype&&s(r)&&i&&i(t,r),t}},"1f85":function(t,e,a){"use strict";var s=a("c5ed"),i=a.n(s);i.a},"386c":function(t,e,a){"use strict";var s=a("7e57"),i=a.n(s);i.a},4305:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide-item"},[a("h3",[t._v(t._s(t.title))]),a("div",{staticClass:"slide-wrap"},[a("el-slider",{staticClass:"mini-slide",attrs:{disabled:t.disabled,"show-tooltip":!1,step:t.step,min:t.min,max:t.max},on:{input:t.slideInput,change:t.slideChange},model:{value:t.curVal,callback:function(e){t.curVal=e},expression:"curVal"}})],1),a("span",{staticClass:"remark"},[t._t("default")],2)])},i=[],r=(a("163d"),{name:"slideItem",props:{title:String,min:{type:Number,default:0},max:{type:Number,default:0},step:{type:Number,default:10},value:{type:Number,default:0},disabled:{type:Boolean,default:!1}},create:function(){this.curVal=this.value},data:function(){return{curVal:this.value}},methods:{slideInput:function(t){this.$emit("input",t)},slideChange:function(t){this.$emit("change",t)}}}),n=r,o=(a("1f85"),a("9ca4")),c=Object(o["a"])(n,s,i,!1,null,"c8a99e2a",null);e["a"]=c.exports},"472a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.isOpen,width:"580px"},on:{"update:visible":function(e){t.isOpen=e},closed:t.closed}},[t.placeOrderData.from_stop_to_open?t._e():a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("lease_gpu")))]),t.placeOrderData.from_stop_to_open?a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("stop_to_gpu_container")))]):t._e(),a("div",{staticClass:"dlg-content"},[t.placeOrderData.from_stop_to_open||"0.3.7.2"===!t.placeOrderData.dbc_version||3===t.machine_type?t._e():a("div",{staticClass:"cRed"},[a("label",[t._v(t._s(t.$t("cpu_container_instruaction")))])]),t.placeOrderData.from_stop_to_open?t._e():a("div",{staticClass:"form"},[a("label",[t._v(t._s(t.$t("choseImages"))+"：")]),a("el-select",{staticClass:"time-select ml10",staticStyle:{width:"360px"},attrs:{size:"small"},model:{value:t.images,callback:function(e){t.images=e},expression:"images"}},t._l(t.imagesOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1),a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("gpu.choseGpuCount"))+"：")]),t.gpu_rentout_whole?t._e():a("el-select",{staticClass:"time-select ml10",attrs:{size:"small"},on:{change:t.computeTotalDBC},model:{value:t.gpuCount,callback:function(e){t.gpuCount=e},expression:"gpuCount"}},t._l(t.gpuCountOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1),t.gpu_rentout_whole?a("label",[t._v(t._s(t.placeOrderData.gpu_count_max)+"    "+t._s(t.$t("whole_rent_machine_tip")))]):t._e()],1),a("div",{staticClass:"form mt20"},[a("el-radio-group",{on:{change:t.computeTotalDBC},model:{value:t.discount,callback:function(e){t.discount=e},expression:"discount"}},[a("el-radio",{attrs:{label:"0"}},[t._v(t._s(t.$t("leaseback_anytime")))]),a("el-radio",{attrs:{label:"2"}},[t._v(t._s(t.$t("monthly")))]),a("el-radio",{attrs:{label:"3"}},[t._v(t._s(t.$t("quarterly")))]),a("el-radio",{attrs:{label:"4"}},[t._v(t._s(t.$t("yearly")))])],1)],1),a("div",{staticClass:"form mt20"},["2"===t.discount?a("label",{staticClass:"cRed"},[t._v(t._s(t.$t("month_discount_instruction")))]):"3"===t.discount?a("label",{staticClass:"cRed"},[t._v(t._s(t.$t("quarter_discount_instruction")))]):"4"===t.discount?a("label",{staticClass:"cRed"},[t._v(t._s(t.$t("year_discount_instruction")))]):t._e()]),"0"===t.discount?a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("dlg_lease_time"))+"：")]),a("el-input",{staticStyle:{width:"180px"},attrs:{size:"small",type:"number"},on:{input:t.computeTotalDBC},model:{value:t.time,callback:function(e){t.time=t._n("string"===typeof e?e.trim():e)},expression:"time"}}),a("el-select",{staticClass:"time-select ml10",attrs:{size:"small"},on:{change:t.computeTotalDBC},model:{value:t.timeSelect,callback:function(e){t.timeSelect=e},expression:"timeSelect"}},t._l(t.timeOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1),a("span",{staticClass:"fs12 cGray ml10"},[t._v(t._s(t.placeOrderData.gpu_price_dollar)+"$/"+t._s(t.$t("my_machine_hour")))])],1):t._e(),t.placeOrderData.from_stop_to_open||3===t.machine_type?t._e():a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("diskspace_dlg"))+"：")]),a("label",[t._v(t._s(t.$t("diskspace_giving"))+t._s(t.disk_giving)+"G")]),a("label",[t._v("("+t._s(t.$t("diskspace_giving_gpu"))+t._s(t.disk_giving_every_gpu)+"G)")])]),null!==t.placeOrderData.order_id_pre?a("div",{staticClass:"form mt20"},[t.placeOrderData.from_stop_to_open?a("label",[t._v(t._s(t.$t("diskspace_data_stop"))+t._s((t.placeOrderData.diskspace_image_data/1048576).toFixed(2))+"G")]):t._e(),t.placeOrderData.from_stop_to_open?t._e():a("label",[t._v(t._s(t.$t("diskspace_gpu_data"))+t._s((t.placeOrderData.diskspace_image_data/1048576).toFixed(2))+"G")])]):t._e(),t.placeOrderData.from_stop_to_open||3===t.machine_type?t._e():a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("buy_diskspace"))+"：")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"small",type:"number"},on:{input:t.computeTotalDBC},model:{value:t.disk_buy,callback:function(e){t.disk_buy=t._n("string"===typeof e?e.trim():e)},expression:"disk_buy"}}),a("span",{staticClass:"fs12 cGray ml10"},[t._v("G")]),a("span",{staticClass:"fs12 cGray ml10"},[t._v(t._s(t.placeOrderData.disk_GB_perhour_dollar)+"$/"+t._s(t.$t("disk_hour")))]),a("span",{staticClass:"fs12 cGray ml10"},[t._v(t._s(t.$t("disk_max"))+t._s(t.disk_max)+"G")])],1),null!==t.placeOrderData.order_id_pre?a("div",{staticClass:"form mt20"},[t.placeOrderData.from_stop_to_open?t._e():a("label",[t._v("("+t._s(t.$t("diskspace_new_cpu"))+":"+t._s((t.disk_buy+t.disk_giving-t.placeOrderData.diskspace_image_data/1048576).toFixed(2))+"G)")]),t.placeOrderData.from_stop_to_open?a("label",[t._v("("+t._s(t.$t("diskspace_new_cpu_stop"))+":"+t._s((t.disk_buy-t.placeOrderData.diskspace_image_data/1048576).toFixed(2))+"G)")]):t._e(),t.gpu_rentout_whole?t._e():a("span",{staticClass:"fs12 cGray ml10"},[t._v(t._s(t.placeOrderData.disk_GB_perhour_dollar)+"$/"+t._s(t.$t("disk_hour")))])]):t._e(),3!==t.machine_type||t.placeOrderData.from_stop_to_open?t._e():a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("disk_auto_machine_type"))+"：")]),a("label",[t._v(t._s(t.disk_giving+t.disk_max)+"G")])]),a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("memory_dlg"))+"：")]),a("label",[t._v(t._s(t.memory)+"G")]),a("label",[t._v("("+t._s(t.$t("memory_every_gpu"))+t._s(t.memory_every_gpu)+"G)")])]),a("div",{staticClass:"cRed"},[t._v(t._s(t.$t("tips"))+"："+t._s(t.$t("msg.dlg_0",{time:t.outDayTime})))]),a("div",{staticClass:"computer-dbc mt30"},[a("span",[t._v(t._s(t.$t("total"))+"："+t._s(t.totalPrice.toFixed(4))+t._s(t.$t("$")))]),a("span",{staticClass:"ml20"},[t._v(t._s(t.$t("gpu.exchangeDBC"))+"："+t._s(t.total_price))])]),a("div",{staticClass:"form-notice"},[t._v(t._s(t.$t("dlg_lease_wallet_balance"))+": "+t._s(t.balance))]),a("div",{staticClass:"form-notice"},[t._v(t._s(t.$t("left_gasamount"))+": "+t._s(t.gas_balance.toFixed(3)))]),a("div",{staticClass:"desc-box",domProps:{innerHTML:t._s(t.$t("msg.dlg_5"))}})]),a("div",{staticClass:"dlg-bottom"},[a("el-button",{staticClass:"dlg-btn",attrs:{type:"primary",size:"small",disabled:!t.isCanCreateOrder},on:{click:t.confirm}},[t._v(t._s(t.$t("dlg_lease_create_order")))]),a("el-button",{staticClass:"dlg-btn",attrs:{plain:"",size:"small"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))])],1)])},i=[],r=(a("9a33"),a("365c")),n=a("4795"),o={name:"popup_reload",props:{open:Boolean,mcData:Object,placeOrderData:{type:Object,default:function(){return{order_id:"5d42e162e124f45a4fa158f5",dbc_price:.0026,gpu_price_dollar:1e-4,code:"0.3848",time_max:1500,gpu_count_max:1,images_tag:"",diskspace_giving:31457280,diskSpace_per_gpu_max:210736353,memory_per_gpu_max:23741925,diskspace_max_cpu:0,memory_max_cpu:0,disk_GB_perhour_dollar:33333334e-12,diskspace_image_data:0,disk_space:60,gpu_rentout_whole:!1,machine_type:0}}}},data:function(){return{isOpen:this.open,timeSelect:1,timeOptions:[{name:this.$t("hour"),value:1},{name:this.$t("day"),value:24}],gpuCount:1,images:"",time:1,total_price:"0",isGetTotalPrice:!1,reqSt:void 0,isCanCreateOrder:!0,disk_giving:0,disk_buy:60,disk_giving_every_gpu:0,disk_max:100,balance:"0",gas_balance:0,memory:0,memory_every_gpu:0,discount:"0",gpu_rentout_whole:!1,machine_type:0}},watch:{open:function(t){this.isOpen=t,t&&(this.time=1,this.dbc_price="",this.getPayDbcCount(),this.getBalance(),this.getGasBalance(),this.gpu_rentout_whole=this.placeOrderData.gpu_rentout_whole,this.machine_type=this.placeOrderData.machine_type,this.computeTotalDBC())},time:function(t){this.isCanCreateOrder=!!t}},computed:{outDayTime:function(){var t=parseInt(this.placeOrderData.time_max/60),e=Math.floor(t/24),a=t-24*e;return"".concat(e,"d").concat(a,"h")},gpuCountOptions:function(){for(var t=[],e=1;e<=this.placeOrderData.gpu_count_max;e++)t.push({name:e,value:e});return t},imagesOptions:function(){var t=[],e=new Array;null===this.placeOrderData.images_tag||""===this.placeOrderData.images_tag?3!==this.placeOrderData.machine_type?(this.placeOrderData.images_tag="tensorflow1.14-pytorch1.2",this.images="tensorflow1.14-pytorch1.2"):(this.placeOrderData.images_tag="filecoin-proof",this.images="filecoin-proof"):this.images="tensorflow1.14-pytorch1.2",e=this.placeOrderData.images_tag.split("@");for(var a=0;a<=e.length;a++)0===a&&(this.images=e[a]),t.push({name:e[a],value:e[a]});return 3!==this.placeOrderData.machine_type&&4!==this.placeOrderData.machine_type&&t.push({name:this.$t("user_defined"),value:"tensorflow114andpytorch12"}),t},totalPrice:function(){return this.gpu_rentout_whole&&(this.gpuCount=this.placeOrderData.gpu_count_max),"2"===this.discount?this.placeOrderData.gpu_price_dollar*this.gpuCount*24*30+this.placeOrderData.disk_GB_perhour_dollar*this.disk_buy*24*30:"3"===this.discount?this.placeOrderData.gpu_price_dollar*this.gpuCount*24*90+this.placeOrderData.disk_GB_perhour_dollar*this.disk_buy*24*90:"4"===this.discount?this.placeOrderData.gpu_price_dollar*this.gpuCount*24*365+this.placeOrderData.disk_GB_perhour_dollar*this.disk_buy*24*365:this.placeOrderData.gpu_price_dollar*this.gpuCount*this.time*this.timeSelect+this.placeOrderData.disk_GB_perhour_dollar*this.disk_buy*this.time*this.timeSelect},dbcNum:function(){return Math.floor(this.totalPrice/this.placeOrderData.dbc_price)}},methods:{updateChecked:function(){},getBalance:function(){var t=this;Object(n["d"])().then((function(e){t.balance=e.balance}))},getGasBalance:function(){var t=this;Object(n["e"])().then((function(e){t.gas_balance=e.gas_balance}))},computeTotalDBC:function(){var t=this;"1"===this.discount||("2"===this.discount||("3"===this.discount||this.discount)),this.gpu_rentout_whole&&(this.gpuCount=this.placeOrderData.gpu_count_max),this.time&&(clearTimeout(this.reqSt),this.reqSt=setTimeout((function(){t.disk_giving=parseInt(t.placeOrderData.diskspace_giving*t.gpuCount/1048576),t.disk_giving_every_gpu=parseInt(t.placeOrderData.diskspace_giving/1048576),t.disk_max=parseInt(t.placeOrderData.diskSpace_per_gpu_max*t.gpuCount/1048576-t.disk_giving),t.memory=parseInt(t.placeOrderData.memory_per_gpu_max/1048576*t.gpuCount),t.memory_every_gpu=parseInt(t.placeOrderData.memory_per_gpu_max/1048576),t.placeOrderData.from_stop_to_open?t.disk_buy=t.placeOrderData.disk_space/1048576:t.disk_buy>t.disk_max&&(t.$message({showClose:!0,message:t.$t("over_max_disk"),type:"error"}),t.disk_buy=t.disk_max),t.getPayDbcCount()}),1e3))},getPayDbcCount:function(){var t=this,e=0;"1"===this.discount?e=1:"2"===this.discount?e=2:"3"===this.discount?e=3:"4"===this.discount&&(e=4),this.gpu_rentout_whole&&(this.gpuCount=this.placeOrderData.gpu_count_max);var a=this.$t("website_name"),s=this.$i18n.locale;this.disk_giving=parseInt(this.placeOrderData.diskspace_giving*this.gpuCount/1048576),this.disk_giving_every_gpu=parseInt(this.placeOrderData.diskspace_giving/1048576),this.disk_max=parseInt(this.placeOrderData.diskSpace_per_gpu_max*this.gpuCount/1048576-this.disk_giving),this.memory=parseInt(this.placeOrderData.memory_per_gpu_max/1048576*this.gpuCount),this.memory_every_gpu=parseInt(this.placeOrderData.memory_per_gpu_max/1048576),this.placeOrderData.from_stop_to_open?this.disk_buy=this.placeOrderData.disk_space/1048576:this.disk_buy+this.disk_giving-this.placeOrderData.diskspace_image_data/1048576<=0&&this.$message({showClose:!0,message:this.$t("diskspace_less_zero"),type:"error"}),Object(r["M"])({rent_time_length:60*this.time*this.timeSelect,gpu_count:this.gpuCount,diskspace:1024*this.disk_buy*1024,order_id:this.placeOrderData.order_id,rent_type:e,user_name_platform:a,language:s}).then((function(e){1===e.status?t.total_price=e.content:t.$message({showClose:!0,message:e.msg,type:"error"})}))},pocMachine:function(t){var e=this.$t("website_name"),a=this.$i18n.locale;Object(r["e"])({order_id_new:t,user_name_platform:e,language:a})},confirm:function(){if(parseInt(this.dbc_count)>parseInt(this.balance))this.$message({showClose:!0,message:this.$t("lessdbc"),type:"error"});else if(0!==this.gas_balance){var t=0;"1"===this.discount?t=1:"2"===this.discount?t=2:"3"===this.discount?t=3:"4"===this.discount&&(t=4),this.gpu_rentout_whole&&(this.gpuCount=this.placeOrderData.gpu_count_max),3===this.machine_type&&(this.disk_buy=this.disk_max);var e={rent_time_length:this.time*this.timeSelect*60,order_is_over:this.placeOrderData.order_is_over,dbc_price:this.placeOrderData.dbc_price,gpu_count:this.gpuCount,image_tag:this.images,diskspace:1024*this.disk_buy*1024,order_type:"training",order_id:this.placeOrderData.order_id,dbc_total_count:this.total_price,rent_type:t,machine_type:this.machine_type,user_name_platform:this.$t("website_name"),language:this.$i18n.locale};this.$emit("confirm",e),pocMachine(this.placeOrderData.order_id)}else this.$message({showClose:!0,message:this.$t("zerogas"),type:"error"})},cancel:function(){this.closed(),this.$emit("cancel")},closed:function(){this.isOpen=!1,this.$emit("update:open",!1)}}},c=o,l=(a("386c"),a("9ca4")),_=Object(l["a"])(c,s,i,!1,null,"3c1da569",null);e["a"]=_.exports},"4b95":function(t,e,a){},"777a":function(t,e,a){var s=a("e46b"),i=a("f6b4"),r=a("238a"),n=a("9769"),o="["+n+"]",c="​",l=RegExp("^"+o+o+"*"),_=RegExp(o+o+"*$"),p=function(t,e,a){var i={},o=r((function(){return!!n[t]()||c[t]()!=c})),l=i[t]=o?e(u):n[t];a&&(i[a]=l),s(s.P+s.F*o,"String",i)},u=p.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(_,"")),t};t.exports=p},"7e57":function(t,e,a){},"859b":function(t,e,a){var s=a("fb68"),i=a("69b3"),r=function(t,e){if(i(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=a("4ce5")(Function.call,a("dcb7").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,a){return r(t,a),e?t.__proto__=a:s(t,a),t}}({},!1):void 0),check:r}},"875e":function(t,e,a){},"8c47":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drop-item"},[a("h3",[t._v(t._s(t.title))]),a("el-select",{staticClass:"dropBtn",attrs:{size:"small",filterable:"",placeholder:t.$t("drop_item_select")},on:{change:t.select},model:{value:t.selectedVal,callback:function(e){t.selectedVal=e},expression:"selectedVal"}},t._l(t.dropList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),1)],1)},i=[],r=(a("163d"),void 0),n={name:"dropItem",props:{title:String,value:[Number,String],dropList:{type:Array,default:function(){return[{name:r.$t("drop_item_no_data"),value:-1}]}}},data:function(){return{selectedVal:this.value}},methods:{select:function(t){this.$emit("input",t),this.$emit("selected",t)}}},o=n,c=(a("f414"),a("9ca4")),l=Object(c["a"])(o,s,i,!1,null,"85e2ff96",null);e["a"]=l.exports},9769:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a38b:function(t,e,a){"use strict";var s=a("aa99"),i=a.n(s);i.a},aa99:function(t,e,a){},c5ed:function(t,e,a){},c6dd:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.isOpen,width:"580px"},on:{"update:visible":function(e){t.isOpen=e},closed:t.closed}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("please_switch_cpu_mode")))]),a("div",{staticClass:"form mt20"},[a("label",[t._v(t._s(t.$t("cpu_mode_switch")))])]),a("div",{staticClass:"dlg-bottom"},[a("el-button",{staticClass:"dlg-btn",attrs:{type:"primary",size:"small"},on:{click:t.confirm}},[t._v(t._s(t.$t("payment")))]),a("el-button",{staticClass:"dlg-btn",attrs:{plain:"",size:"small"},on:{click:t.cancel}},[t._v(t._s(t.$t("deposit")))])],1)])},i=[],r=(a("365c"),a("4795"),{name:"popup_reload",props:{open:Boolean,mcData:Object,placeOrderData:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:this.open}},watch:{open:function(t){this.isOpen=t}},methods:{confirm:function(){var t=this.placeOrderData;t.switch_cpu_mode="payment",this.$emit("confirm",t)},cancel:function(){var t=this.placeOrderData;t.switch_cpu_mode="deposit",this.$emit("confirm",t)},closed:function(){this.isOpen=!1,this.$emit("update:open",!1)}}}),n=r,o=(a("a38b"),a("9ca4")),c=Object(o["a"])(n,s,i,!1,null,"0a2667c6",null);e["a"]=c.exports},e4c2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.isOpen,width:"400px"},on:{"update:visible":function(e){t.isOpen=e},closed:t.closed}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("dlg_try")))]),a("div",{staticClass:"dlg-content"},[a("div",[t._v(t._s(t.$t("dlg_try_condition")))]),a("div",[t._v(t._s(t.$t("dlg_try_fee")))]),a("div",[t._v(t._s(t.$t("dlg_try_time")))]),a("div",[t._v(t._s(t.$t("dlg_try_gpu_count")))])]),a("div",{staticClass:"dlg-bottom"},[a("el-button",{staticClass:"dlg-btn",attrs:{type:"primary",size:"small"},on:{click:t.confirm}},[t._v(t._s(t.$t("dlg_try_confirm")))]),a("el-button",{staticClass:"dlg-btn",attrs:{plain:"",size:"small"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))])],1),a("div",{staticClass:"mt20"},[t._v(t._s(t.$t("dlg_try_msg")))])])},i=[],r=a("365c"),n={name:"popup_reload",props:{open:Boolean,mcData:Object,placeOrderData:{type:Object,default:function(){return{order_id:"5d42e162e124f45a4fa158f5",gpu_price_dollar:1e-4,code:"0.3848",time_max:1500,gpu_count_max:0,dbc_price:.0026}}}},data:function(){return{isOpen:this.open,timeSelect:1,timeOptions:[{name:this.$t("hour"),value:1},{name:this.$t("day"),value:24}],gpuCount:0,time:1,total_price:"",isGetTotalPrice:!1,reqSt:void 0}},watch:{open:function(t){this.isOpen=t,t&&(this.time=1,this.dbc_price="")}},computed:{outDayTime:function(){var t=parseInt(this.placeOrderData.time_max/60);Math.floor(t/24);return"".concat(t,"H")},gpuCountOptions:function(){for(var t=[],e=1;e<=this.placeOrderData.gpu_count_max;e*=2)t.push({name:e,value:e});return t},totalPrice:function(){return this.placeOrderData.gpu_price_dollar*this.gpuCount*this.time*this.timeSelect},dbcNum:function(){return Math.floor(this.totalPrice/this.placeOrderData.dbc_price)}},methods:{computeTotalDBC:function(){var t=this;console.log("改变"),clearTimeout(this.reqSt);var e=this.$t("website_name"),a=this.$i18n.locale;this.reqSt=setTimeout((function(){Object(r["M"])({rent_time_length:60*t.time*t.timeSelect,gpu_count:t.gpuCount,order_id:t.placeOrderData.order_id,user_name_platform:e,language:a}).then((function(e){1===e.status?t.total_price=e.content:t.$message({showClose:!0,message:e.msg,type:"error"})}))}),1e3)},confirm:function(){this.closed(),this.$emit("confirm")},cancel:function(){this.closed(),this.$emit("cancel")},closed:function(){this.isOpen=!1,this.$emit("update:open",!1)}}},o=n,c=(a("e60b"),a("9ca4")),l=Object(c["a"])(o,s,i,!1,null,"7c541892",null);e["a"]=l.exports},e60b:function(t,e,a){"use strict";var s=a("4b95"),i=a.n(s);i.a},f414:function(t,e,a){"use strict";var s=a("875e"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-62a89729.55d23a49.js.map