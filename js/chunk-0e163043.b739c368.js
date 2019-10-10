(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e163043"],{"06e6":function(t,e,a){},"1b15":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Breadcrumbs",{attrs:{items:t.items}}),a("v-card",[a("v-card-title",[a("v-layout",{attrs:{row:"",wrap:""}},[2!==t.level_type?a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-select",{attrs:{"menu-props":"auto",items:t.agent_list,label:"所属代理商",required:""},on:{change:t.info},model:{value:t.agent_id,callback:function(e){t.agent_id=e},expression:"agent_id"}})],1):t._e(),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-text-field",{attrs:{label:"上盖SN号码"},model:{value:t.base_above_sn,callback:function(e){t.base_above_sn=e},expression:"base_above_sn"}})],1),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("v-select",{attrs:{"menu-props":"auto",items:["全部设备","已激活","未使用"],label:"设备状态",required:""},on:{change:t.info},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),a("v-btn",{attrs:{loading:t.loader,disabled:t.loader,color:"primary"},on:{click:t.info}},[t._v("筛选设备")])],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"total-items":t.allList,"rows-per-page-text":"每页行数","rows-per-page-items":t.pagingList,"disable-initial-sort":!0,loading:t.loader},on:{"update:pagination":t.info},scopedSlots:t._u([{key:"headers",fn:function(e){return[a("tr",[a("th",[a("v-checkbox",{attrs:{color:"error","input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},nativeOn:{click:function(e){return t.toggleAll(e)}}})],1),t._l(e.headers,function(e){return a("th",{key:e.text,class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(a){return t.changeSort(e.value)}}},[a("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n            "+t._s(e.text)+"\n          ")],1)})],2)]}},{key:"items",fn:function(e){return[a("tr",[a("td",{attrs:{active:e.selected},on:{click:function(t){e.selected=!e.selected}}},[a("v-checkbox",{attrs:{color:"error","input-value":e.selected,primary:"","hide-details":""}})],1),a("td",{staticClass:"text-xs-centre text-md-center"},[t._v(t._s(e.item.base_above_sn))]),a("td",{staticClass:"text-xs-centre text-md-center"},[""!==e.item.agent_name?a("span",[t._v(t._s(e.item.agent_name))]):a("i",[t._v("- - -")])]),a("td",{staticClass:"text-xs-centre text-md-center"},[t._v(t._s(t._f("time")(e.item.create_time)))]),a("td",{staticClass:"text-xs-centre text-md-center"},[t._v(t._s(t._f("time")(e.item.update_time)))]),a("td",{staticClass:"text-xs-centre text-md-center"},[1==e.item.status?a("span",{staticClass:"green--text darken-4"},[t._v("使用中")]):t._e(),1!==e.item.status?a("span",[t._v("未激活")]):t._e()]),a("td",{staticClass:"text-xs-centre text-md-center"},[""!==e.item.user_name?a("span",{staticClass:"green--text darken-4"},[t._v(t._s(e.item.user_name))]):a("i",[t._v("- - -")])]),a("td",{staticClass:"text-xs-centre text-md-center"},[a("v-menu",{attrs:{bottom:"",dark:"",origin:"center center","close-delay":100,transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{color:"primary",dark:""}},i),[t._v("操作选项")])]}}],null,!0)},[a("v-list",[t._l(t.root_path,function(i,s){return["/api/v1/manages/ed_record"==i.url&&""!==e.item.user_name?a("v-list-tile",{key:s+100,on:{click:function(a){return t.ED_data(e.item.user_id)}}},[a("v-list-tile-title",[t._v("ED记录")])],1):t._e()]}),t._l(t.root_path,function(i,s){return["/api/v1/manages/ehs"==i.url&&""!==e.item.user_name?a("v-list-tile",{key:s+100,on:{click:function(a){return t.EHS_data(e.item.user_id)}}},[a("v-list-tile-title",[t._v("EHS记录")])],1):t._e()]}),t._l(t.root_path,function(i,s){return["/api/v1/manages/iief5"==i.url&&""!==e.item.user_name?a("v-list-tile",{key:s+100,on:{click:function(a){return t.iief5_data(e.item.user_id)}}},[a("v-list-tile-title",[t._v("IIEF5记录")])],1):t._e()]}),t._l(t.root_path,function(i,s){return["/api/v1/manages/cases_file"==i.url&&""!==e.item.user_name?a("v-list-tile",{key:s+100,on:{click:function(a){return t.files_data(e.item.user_id)}}},[a("v-list-tile-title",[t._v("病例档案")])],1):t._e()]}),""!==e.item.user_name?[a("v-list-tile",{on:{click:function(a){return t.device_top(e.item.user_id)}}},[a("v-list-tile-title",[t._v("关联底座")])],1)]:t._e(),t._l(t.root_path,function(i,s){return["/api/v1/device/delete_sn"==i.url?a("v-list-tile",{key:s+100,on:{click:function(a){return t.device_(e.item.id)}}},[a("v-list-tile-title",{staticClass:"red--text"},[t._v("删除设备")])],1):t._e()]})],2)],1)],1)])]}},{key:"no-data",fn:function(){return[a("p",{staticClass:"p_text"},[t._v("没有更多数据了 :(")])]},proxy:!0},{key:"pageText",fn:function(e){return[t._v("当前 "+t._s(e.pageStart)+" - "+t._s(e.pageStop)+" 总共 "+t._s(e.itemsLength))]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.selected.length>0?a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(e){return t.device_list()}}},[t._v("😫 批量删除")]):t._e()],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("删除提醒")]),a("v-card-text",[t._v("确认要删除选中的设备吗？确认删除将不可恢复。请谨慎操作！")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("取消")]),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){return t.device_delete()}}},[t._v("确认")])],1)],1)],1)],1)],1)},s=[],n=(a("ac6a"),a("5fdf")),r={components:{Breadcrumbs:n["a"]},data:function(){return{agent_id:null,base_below_sn:null,base_above_sn:null,blue_tooth:null,status:null,agent_list:[],agent_list_data:[],pagingList:[10,20,30,40,50,{text:"100",value:100}],loader:!1,page:0,allList:0,items:[{text:"首页",disabled:!1,to:"/home"},{text:"上盖列表",disabled:!1,to:"/deviceList_"}],pagination:{sortBy:"name"},selected:[],headers:[{text:"设备上盖sn",value:"carbs",sortable:!1},{text:"所属代理商",value:"calories",sortable:!1},{text:"创建时间",value:"iron",sortable:!1},{text:"更新时间",value:"iron",sortable:!1},{text:"状态",value:"iron",sortable:!1},{text:"用户账号",value:"iron",sortable:!1},{text:"操作",value:"iron",sortable:!1}],desserts:[],root_path:this.$cookie.getLocalStorage("root_path").root_path,level_type:this.$cookie.getLocalStorage("root_path").level,dialog:!1,id:[]}},mounted:function(){this.agent_data()},methods:{device_top:function(t){this.$router.push({path:"/deviceList",query:{user_id:t}})},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)},device_:function(t){this.dialog=!0,this.id.push(t)},device_list:function(){var t=this;this.id=[],this.dialog=!0,this.selected.forEach(function(e){t.id.push(e.id)})},device_delete:function(){var t=this;this.$axios({method:"post",url:this.$apis.URL.device_delete_sn,data:{ids:this.id,is_base:-1}}).then(function(e){0===e.data.result?(t.dialog=!1,t.id=[],t.$Dialog.getProductCheckResult_({text:"已删除该设备！",timeout:3e3,snackbar:!0}),t.info()):t.$Dialog.getProductCheckResult_({text:"😡"+e.data.message,timeout:3e3,snackbar:!0})}).catch(function(e){t.$Dialog.getProductCheckResult_({text:"😡"+e,timeout:3e3,snackbar:!0})})},agent_data:function(){var t=this;this.$axios({method:"post",url:this.$apis.URL.manages_query_agent,data:{id:-1,level:2}}).then(function(e){t.agent_list.push("全部代理"),t.agent_list_data=e.data.datas,0===e.data.result?t.agent_list_data.forEach(function(e){t.agent_list.push(e.user_name)}):t.$Dialog.getProductCheckResult_({text:e.data.message,timeout:3e3,snackbar:!0})}).catch(function(e){t.$Dialog.getProductCheckResult_({text:"😡"+e,timeout:3e3,snackbar:!0})})},ED_data:function(t){this.$router.push({path:"/ED",query:{user_id:t}})},EHS_data:function(t){this.$router.push({path:"/EHS",query:{user_id:t}})},iief5_data:function(t){this.$router.push({path:"/iief5",query:{user_id:t}})},files_data:function(t){this.$router.push({path:"/files",query:{user_id:t}})},loader_:function(){var t=this;this.loader=!0,setTimeout(function(){return t.loader=!1},500)},info:function(t){var e=this;this.loader=!0;var a=null;this.agent_list_data.forEach(function(t){if(e.agent_id==t.user_name)return a=t.id,!1}),this.$axios({method:"post",url:this.$apis.URL.device_query_sn,data:{agent_id:a,base_below_sn:this.base_below_sn,base_above_sn:this.base_above_sn,blue_tooth:this.blue_tooth,status:"全部状态"==this.status?null:"已激活"==this.status?1:"未使用"==this.status?-1:null,page:this.page,page_count:"undefined"==typeof t?void 0:t.rowsPerPage,type:-1}}).then(function(t){0===t.data.result?void 0!==e.$route.query.user_id?e.uID_info(e.$route.query.user_id):(e.desserts=t.data.datas.list,e.allList=t.data.datas.total_number):e.$Dialog.getProductCheckResult_({text:t.data.message,timeout:3e3,snackbar:!0}),e.loader=!1}).catch(function(t){e.$Dialog.getProductCheckResult_({text:t,timeout:3e3,snackbar:!0})})},uID_info:function(t){var e=this;this.$axios({method:"post",url:this.$apis.URL.device_query_sn,data:{user_id:t-0,type:-1}}).then(function(t){0===t.data.result?e.desserts=t.data.datas.list:e.$Dialog.getProductCheckResult_({text:t.data.message,timeout:3e3,snackbar:!0})}).catch(function(t){e.$Dialog.getProductCheckResult_({text:t,timeout:3e3,snackbar:!0})})}},watch:{}},o=r,l=(a("e5e6"),a("2877")),c=a("6544"),u=a.n(c),d=a("8336"),_=a("b0af"),v=a("99d9"),h=a("12b2"),f=a("ac7c"),m=a("8fea"),g=a("169a"),p=a("0e8f"),b=a("132d"),x=a("a722"),k=a("8860"),y=a("ba95"),C=a("5d23"),$=a("e449"),w=a("b56d"),L=a("9910"),V=a("2677"),D=Object(l["a"])(o,i,s,!1,null,"0a255372",null);e["default"]=D.exports;u()(D,{VBtn:d["a"],VCard:_["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:h["a"],VCheckbox:f["a"],VDataTable:m["a"],VDialog:g["a"],VFlex:p["a"],VIcon:b["a"],VLayout:x["a"],VList:k["a"],VListTile:y["a"],VListTileTitle:C["d"],VMenu:$["a"],VSelect:w["a"],VSpacer:L["a"],VTextField:V["a"]})},9910:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var i=a("80d2"),s=a("a523"),n=a("549c"),r=a("0e8f"),o=a("a722"),l=Object(i["f"])("spacer","div","v-spacer");s["a"],n["a"],r["a"],o["a"]},a523:function(t,e,a){"use strict";a("db6d");var i=a("e8f2");e["a"]=Object(i["a"])("container")},a722:function(t,e,a){"use strict";a("db6d");var i=a("e8f2");e["a"]=Object(i["a"])("layout")},e5e6:function(t,e,a){"use strict";var i=a("06e6"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-0e163043.b739c368.js.map