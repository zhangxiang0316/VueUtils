(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6401"],{"726f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("m-form",{ref:"mForm",attrs:{formData:e.formData,formCols:e.formCols,rules:e.rules},on:{event:e.event,submit:e.submit},scopedSlots:e._u([{key:"test",fn:function(){return[a("el-input",{model:{value:e.formData.date5,callback:function(t){e.$set(e.formData,"date5",t)},expression:"formData.date5"}})]},proxy:!0}])})],1)},o=[],n=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"elForm",attrs:{model:e.formData,"label-suffix":e.labelSuffix,"status-icon":e.statusIcon,size:e.size,inline:e.isInline,"label-width":e.labelWidth,rules:e.rules}},e._l(e.formCols,(function(t,i){return a("el-row",{key:i,attrs:{gutter:t.gutter}},e._l(t,(function(t,i){return a("el-col",{key:i,attrs:{span:t.span,offset:t.offset}},[t.noFormItem?["slot"===t.eType?e._t(t.slotName):a("m-element",{attrs:{item:t,"form-data":e.formData},on:{event:e.event}})]:[t.noShow?e._e():a("el-form-item",{attrs:{label:t.label,prop:t.prop}},["slot"===t.eType?e._t(t.slotName):a("m-element",{attrs:{item:t,"form-data":e.formData},on:{event:e.event}})],2)]],2)})),1)})),1)}),l=[],r=(a("c740"),a("4160"),a("b64b"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("zx"+e.item.eType,{tag:"component",attrs:{item:e.item,"form-data":e.formData},on:{event:e.event}})}),s=[],c=a("5530"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{style:e.item.style?e.item.style:{width:"100%"},attrs:{type:e.item.type,placeholder:e.item.placeholder,suffixIcon:e.item.suffixIcon,prefixIcon:e.item.prefixIcon,"show-password":e.item.showPassword,maxlength:e.item.maxlength,rows:e.item.row,autosize:e.item.autosize,minlength:e.item.minlength,"show-word-limit":e.item.showWordLimit,disabled:e.item.disabled,clearable:e.item.clearable},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},p=[],u={props:{item:{type:Object,default:{}},formData:{}},methods:{mixinEvent:function(e){this.$emit("event",e)}}},d={components:{},props:{},mixins:[u],data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},f=d,h=a("2877"),b=Object(h["a"])(f,m,p,!1,null,"6e42c337",null),v=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-button",{class:e.item.class,style:e.item.style,attrs:{type:e.item.type,icon:e.item.icon,loading:e.item.loading,size:e.item.size,round:e.item.round,disabled:e.item.disabled,plain:e.item.plain,circle:e.item.circle,autofocus:e.item.autofocus,"native-type":e.item.nativeType},on:{click:e.click}},[e._v(" "+e._s(e.item.value)+" ")])},x=[],g={components:{},props:{},mixins:[u],data:function(){return{}},computed:{},methods:{click:function(){this.mixinEvent({type:"click",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},D=g,k=Object(h["a"])(D,y,x,!1,null,"75da4ec3",null),w=k.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{size:e.item.size},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}},e._l(e.options,(function(t){return a("el-radio",{key:t.value?t.value:t,style:e.item.style,attrs:{label:t.value?t.value:t,border:e.item.border,disabled:e.item.disabled}},[e._v(" "+e._s(t.label?t.label:t)+" ")])})),1)},T=[],$=(a("d81d"),a("ac1f"),a("1276"),{components:{},mixins:[u],props:{},data:function(){return{}},computed:{options:function(){if(this.item.options instanceof Array)return this.item.options;var e=this.item.options.split(",");return e.map((function(e){return{value:e,label:e}}))}},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}}),C=$,E=Object(h["a"])(C,_,T,!1,null,"6e6bfd97",null),S=E.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{size:e.item.size},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}},e._l(e.options,(function(t){return a("el-radio-button",{key:t.value?t.value:t,style:e.item.style,attrs:{label:t.value?t.value:t,disabled:e.item.disabled}},[e._v(" "+e._s(t.label?t.label:t)+" ")])})),1)},O=[],I={components:{},mixins:[u],props:{},data:function(){return{}},computed:{options:function(){if(this.item.options instanceof Array)return this.item.options;var e=this.item.options.split(",");return e.map((function(e){return{value:e,label:e}}))}},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},j=I,P=Object(h["a"])(j,z,O,!1,null,"e124c2c8",null),F=P.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-checkbox-group",{attrs:{min:e.item.min,max:e.item.max},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}},e._l(e.options,(function(t){return a("el-checkbox",{key:t.value?t.value:t,style:e.item.style,attrs:{label:t.value?t.value:t,disabled:e.item.disabled},on:{change:e.change}},[e._v(" "+e._s(t.label?t.label:t)+" ")])})),1)},N=[],M={components:{},mixins:[u],props:{},data:function(){return{}},watch:{},computed:{options:function(){if(this.item.options instanceof Array)return this.item.options;var e=this.item.options.split(",");return e.map((function(e){return{value:e,label:e}}))}},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){this.formData[this.item.prop]||this.$set(this.formData,this.item.prop,[])}},R=M,A=Object(h["a"])(R,B,N,!1,null,"1ec5732c",null),V=A.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-checkbox-group",{attrs:{min:e.item.min,max:e.item.max},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}},e._l(e.options,(function(t){return a("el-checkbox-button",{key:t.value?t.value:t,style:e.item.style,attrs:{label:t.value?t.value:t,disabled:e.item.disabled},on:{change:e.change}},[e._v(" "+e._s(t.label?t.label:t)+" ")])})),1)},U=[],W={components:{},mixins:[u],props:{},data:function(){return{}},computed:{options:function(){if(this.item.options instanceof Array)return this.item.options;var e=this.item.options.split(",");return e.map((function(e){return{value:e,label:e}}))}},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){this.formData[this.item.prop]||this.$set(this.formData,this.item.prop,[])}},q=W,J=Object(h["a"])(q,L,U,!1,null,"36344584",null),H=J.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input-number",{class:e.item.class,staticStyle:{width:"100%"},style:e.item.style,attrs:{disabled:e.item.disabled,"controls-position":e.item.controlsPosition,min:e.item.min,max:e.item.max,step:e.item.step,"step-strictly":e.item.stepStrictly,precision:e.item.precision,controls:e.item.controls,placeholder:e.item.placeholder},on:{change:e.change,blur:e.blur,focus:e.focus},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},K=[],Q={name:"mElInputNumber",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})},blur:function(){this.mixinEvent({type:"blur",prop:this.item.prop,value:this.formData[this.item.prop]})},focus:function(){this.mixinEvent({type:"focus",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){this.formData[this.item.prop]||this.$set(this.formData,this.item.prop,1)}},X=Q,Y=Object(h["a"])(X,G,K,!1,null,"a52804b2",null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{class:e.item.class,style:e.item.value,attrs:{placeholder:e.item.placeholder,"allow-create":e.item.allowCreate,filterable:e.item.filterable,clearable:e.item.clearable,disabled:e.item.disabled,multiple:e.item.multiple,"multiple-limit":e.item.multipleLimit},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}},e._l(e.options,(function(e){return a("el-option",{key:e.value?e.value:e,attrs:{label:e.label?e.label:e,value:e.value?e.value:e,disabled:e.disabled}})})),1)},te=[],ae={name:"mElSelect",mixins:[u],components:{},props:{},data:function(){return{}},computed:{options:function(){if(this.item.options instanceof Array)return this.item.options;var e=this.item.options.split(",");return e.map((function(e){return{value:e,label:e}}))}},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},ie=ae,oe=Object(h["a"])(ie,ee,te,!1,null,"62b0d412",null),ne=oe.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{class:e.item.class,staticStyle:{width:"100%"},style:e.item.style,attrs:{disabled:e.item.disabled,type:e.item.type,editable:e.item.editable,clearable:e.item.clearable,"value-format":e.item.valueFormat,format:e.item.format,align:e.item.align,placeholder:e.item.placeholder,"picker-options":e.item.pickerOptions,"default-value":e.item.defaultValue,"range-separator":e.item.rangeSeparator,"start-placeholder":e.item.startPlaceholder?e.item.startPlaceholder:"开始日期","end-placeholder":e.item.endPlaceholder?e.item.endPlaceholder:"结束日期"},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},re=[],se={name:"DatePicker",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},ce=se,me=Object(h["a"])(ce,le,re,!1,null,"5405eeb2",null),pe=me.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-time-picker",{staticStyle:{width:"100%"},attrs:{"is-range":e.item.isRange,type:e.item.type,clearable:e.item.clearable,placeholder:e.item.placeholder,"picker-options":e.item.pickerOptions,"value-format":e.item.valueFormat,align:e.item.align,editable:e.item.editable,"arrow-control":e.item.arrowControl,disabled:e.item.disabled,"range-separator":e.item.rangeSeparator,"start-placeholder":e.item.startPlaceholder?e.item.startPlaceholder:"开始日期","end-placeholder":e.item.endPlaceholder?e.item.endPlaceholder:"结束日期"},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},de=[],fe={name:"mElTimePicker",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},he=fe,be=Object(h["a"])(he,ue,de,!1,null,"6a263c96",null),ve=be.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-switch",{style:e.item.style,attrs:{width:e.item.width,"active-color":e.item.activeColor,"inactive-color":e.item.inactiveColor,"active-value":e.item.activeValue,"inactive-value":e.item.inactiveValue,"active-text":e.item.activeText,"inactive-text":e.item.inactiveText,disabled:e.item.disabled},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},xe=[],ge={name:"mElSwitch",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},De=ge,ke=Object(h["a"])(De,ye,xe,!1,null,"2ea3e488",null),we=ke.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-slider",{attrs:{min:e.item.min,max:e.item.max,step:e.item.step,disabled:e.item.disabled,"show-input":e.item.showInput,"show-input-controls":e.item.showInputControls,"show-stops":e.item.showStops,"show-tooltip":e.item.showTooltip,range:e.item.range,height:e.item.height,vertical:e.item.vertical,marks:e.item.marks},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},Te=[],$e={name:"mElSlider",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},Ce=$e,Ee=Object(h["a"])(Ce,_e,Te,!1,null,"5c6b188b",null),Se=Ee.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{class:e.item.class,style:e.item.style},[e._v(" "+e._s(e.item.formatter&&e.item.formatter(e.formData[e.item.prop])||e.formData[e.item.prop])+" ")])},Oe=[],Ie={name:"zxSpan",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{},activated:function(){},mounted:function(){},created:function(){}},je=Ie,Pe=Object(h["a"])(je,ze,Oe,!1,null,"bc9eaa24",null),Fe=Pe.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-rate",{class:e.item.class,style:e.item.style,attrs:{colors:e.item.colors,"void-color":e.item.voidColor,"disabled-void-color":e.item.disabledVoidColor,"disabled-void-icon-class":e.item.disabledVoidIconClass,max:e.item.size,disabled:e.item.disabled,"icon-classes":e.item.iconClasses,"void-icon-class":e.item.voidIconClass,"allow-half":e.item.allowHalf,texts:e.item.texts,"show-text":e.item.showText,"low-threshold":e.item.lowThreshold},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},Ne=[],Me={name:"zxRate",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},Re=Me,Ae=Object(h["a"])(Re,Be,Ne,!1,null,"753e34d8",null),Ve=Ae.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item.elementUi?a("i",{class:e.item.class}):a("i",{staticClass:"iconfont",class:e.item.class})},Ue=[],We={name:"zxIcon",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{},activated:function(){},mounted:function(){},created:function(){}},qe=We,Je=Object(h["a"])(qe,Le,Ue,!1,null,"516cc017",null),He=Je.exports,Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-cascader",{class:e.item.class,staticStyle:{width:"100%"},style:e.item.style,attrs:{placeholder:e.item.placeholder,options:e.item.options,disabled:e.item.disabled,"show-all-levels":e.item.showAllLevels,separator:e.item.separator,"collapse-tags":e.item.collapseTags,props:e.item.props,filterable:e.item.filterable,debounce:e.item.debounce,"filter-method":e.item.filterMethod,clearable:e.item.clearable},on:{change:e.change},model:{value:e.formData[e.item.prop],callback:function(t){e.$set(e.formData,e.item.prop,t)},expression:"formData[item.prop]"}})},Ke=[],Qe={name:"zxCascader",mixins:[u],components:{},props:{},data:function(){return{}},computed:{},methods:{change:function(){this.mixinEvent({type:"change",prop:this.item.prop,value:this.formData[this.item.prop]})}},activated:function(){},mounted:function(){},created:function(){}},Xe=Qe,Ye=Object(h["a"])(Xe,Ge,Ke,!1,null,"c2de6004",null),Ze=Ye.exports,et={name:"index",components:{zxInput:v,zxButton:w,zxRadio:S,zxRadioButton:F,zxCheck:V,zxCheckButton:H,zxInputNumber:Z,zxSelect:ne,zxDatePicker:pe,zxTimePicker:ve,zxSwitch:we,zxSlider:Se,zxSpan:Fe,zxRate:Ve,zxIcon:He,zxCascader:Ze},props:{item:{},formData:{}},data:function(){return{}},computed:{},methods:{event:function(e){this.$emit("event",Object(c["a"])(Object(c["a"])({},e),{},{data:this.formData}))}},activated:function(){},mounted:function(){},created:function(){}},tt=et,at=Object(h["a"])(tt,r,s,!1,null,"3e376dbd",null),it=at.exports,ot=a("5c96"),nt={name:"zxForm",components:{mElement:it},props:{needToast:{type:Boolean,default:!1},formData:{type:Object,default:null},rules:{type:Object,default:null},formCols:{type:Array,default:function(){return[[]]}},isInline:{type:Boolean,default:!1},statusIcon:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelSuffix:{type:String,default:"："},labelWidth:{type:String,default:"120px"}},watch:{formCols:{handler:function(){var e=this;this.formCols.forEach((function(t){t.forEach((function(t){t.noShow&&("Check"===t.eType||"CheckButton"===t.eType?e.formData[t.prop]=[]:delete e.formData[t.prop])}))}))},deep:!0}},methods:{submit:function(){var e=this;return new Promise((function(t){e.$refs["elForm"].validate((function(a,i){a?t(a):e.needToast&&Object(ot["Message"])({type:"error",message:i[Object.keys(i)[0]][0].message?i[Object.keys(i)[0]][0].message:"校验失败"})}))}))},reset:function(){var e=this;this.$refs["elForm"].resetFields(),this.formCols.forEach((function(t){t.forEach((function(t){"Check"===t.eType||"CheckButton"===t.eType?e.formData[t.prop].length=0:delete e.formData[t.prop]}))}))},event:function(e){var t=this;this.$emit("event",e),"submit"===e.prop?this.submit().then((function(e){t.$emit("submit")})):"reset"===e.prop&&(this.reset(),this.$emit("reset"))},setNoShow:function(e,t){this.setNewValue(e,"noShow",t)},setOptions:function(e,t){this.setNewValue(e,"options",t)},setNewValue:function(e,t,a){var i=-1,o=this.formCols.findIndex((function(t){var a=t.findIndex((function(t){return t.prop===e}));if(-1!==a)return i=a,!0}));-1!==o&&-1!==i?this.$set(this.formCols[o][i],t,a):console.log("找不到要设置的字段")}}},lt=nt,rt=Object(h["a"])(lt,n,l,!1,null,null,null),st=rt.exports;st.install=function(e){e.component(st.name,st)};var ct=st,mt=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"},{value:"icon",label:"Icon 图标"},{value:"button",label:"Button 按钮"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"},{value:"switch",label:"Switch 开关"},{value:"slider",label:"Slider 滑块"},{value:"time-picker",label:"TimePicker 时间选择器"},{value:"date-picker",label:"DatePicker 日期选择器"},{value:"datetime-picker",label:"DateTimePicker 日期时间选择器"},{value:"upload",label:"Upload 上传"},{value:"rate",label:"Rate 评分"},{value:"form",label:"Form 表单"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table 表格"},{value:"tag",label:"Tag 标签"},{value:"progress",label:"Progress 进度条"},{value:"tree",label:"Tree 树形控件"},{value:"pagination",label:"Pagination 分页"},{value:"badge",label:"Badge 标记"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert 警告"},{value:"loading",label:"Loading 加载"},{value:"message",label:"Message 消息提示"},{value:"message-box",label:"MessageBox 弹框"},{value:"notification",label:"Notification 通知"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"NavMenu 导航菜单"},{value:"tabs",label:"Tabs 标签页"},{value:"breadcrumb",label:"Breadcrumb 面包屑"},{value:"dropdown",label:"Dropdown 下拉菜单"},{value:"steps",label:"Steps 步骤条"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog 对话框"},{value:"tooltip",label:"Tooltip 文字提示"},{value:"popover",label:"Popover 弹出框"},{value:"card",label:"Card 卡片"},{value:"carousel",label:"Carousel 走马灯"},{value:"collapse",label:"Collapse 折叠面板"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],pt={name:"index",components:{mForm:ct},props:{},data:function(){return{CascaderOptions:mt,formData:{data27:"32134324"},formCols:[[{eType:"Input",placeholder:"请输入姓名",label:"Input",prop:"name1",noShow:!1,span:6,suffixIcon:"el-icon-eleme"},{eType:"slot",label:"自定义slot",slotName:"test",prop:"date5",span:6},{eType:"Radio",label:"Radio",options:[{label:"手机",value:"0"},{label:"电脑",value:"1"}],prop:"date10",span:6},{eType:"RadioButton",label:"RadioButton",options:[{label:"手机",value:"0"},{label:"电脑",value:"1"}],prop:"date11",span:6}],[{eType:"InputNumber",label:"InputNumber",prop:"date16",span:6},{eType:"CheckButton",label:"CheckButton",noShow:!1,options:["手机","电脑"],prop:"date15",span:6},{eType:"Check",label:"CheckBox",options:"手机,电脑",prop:"date13",span:6},{eType:"DatePicker",type:"year",label:"year",valueFormat:"yyyy",prop:"date18",span:6}],[{eType:"Select",label:"Select",options:[{label:"手机",value:"0"},{label:"电脑",value:"1"}],prop:"date17",span:6},{eType:"DatePicker",type:"date",label:"date",valueFormat:"yyyy-MM-dd",prop:"date19",span:6},{eType:"DatePicker",type:"datetime",label:"datetime",valueFormat:"yyyy-MM-dd hh:mm:ss",prop:"date20",span:6},{eType:"Check",label:"CheckBox",options:"手机",prop:"date30",span:6}],[{eType:"DatePicker",type:"daterange",label:"daterange",valueFormat:"yyyy-MM-dd",prop:"date21",span:6},{eType:"DatePicker",type:"datetimerange",label:"datetimerange",valueFormat:"yyyy-MM-dd hh:mm:ss",prop:"date22",span:6},{eType:"DatePicker",type:"dates",label:"dates",valueFormat:"yyyy-MM-dd",prop:"date23",span:6},{eType:"TimePicker",label:"TimePicker",prop:"date24",noShow:!1,span:6}],[{eType:"Switch",label:"Switch",prop:"date25",span:6},{eType:"Slider",label:"Slider",prop:"date26",noShow:!1,span:6},{eType:"Span",prop:"data27",span:6,formatter:function(e){console.log(e)}},{eType:"Rate",label:"Rate",prop:"date29",span:6}],[{eType:"Icon",elementUi:!0,label:"elementUIIcon",class:"el-icon-share",prop:"date31",span:6},{eType:"Icon",label:"Icon",class:"icon-yiduxinxi",prop:"date32",span:6},{eType:"Cascader",label:"Cascader",options:[],prop:"date33",span:6}],[{eType:"Button",value:"提交",type:"success",prop:"submit",span:2},{eType:"Button",value:"重置",type:"success",prop:"reset",span:2}]],rules:{date5:[{required:!0,message:"请选择活动区域",trigger:"change"}],date11:{required:!0,message:"请选择活动区域",trigger:"change"}},show:!0}},computed:{},methods:{event:function(e){console.log(e,this.formData),this.$refs.mForm.setNoShow("date10",this.show),this.$refs.mForm.setOptions("date15",[{label:"手机",value:"0"},{label:"电脑",value:"1"},{label:"平板",value:"2"}]),this.show=!this.show},submit:function(){this.$refs.mForm.setNoShow("date13",!0),this.$refs.mForm.setOptions("date33",this.CascaderOptions),console.log("submit",this.formData)},submits:function(){Promise.all([this.$refs.mForm.submit(),this.$refs.mForm1.submit()]).then((function(e){console.log("---同时提交--\x3e","校验成功")}))}},activated:function(){},mounted:function(){},created:function(){}},ut=pt,dt=Object(h["a"])(ut,i,o,!1,null,"09cd258a",null);t["default"]=dt.exports}}]);
//# sourceMappingURL=chunk-2d0d6401.d672c0a4.js.map