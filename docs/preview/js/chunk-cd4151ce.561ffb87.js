(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd4151ce"],{"290c":function(e,t,a){"use strict";a.r(t);a("6762"),a("2fdb"),a("7f7f");var l=function(){var e=this,t=e._self._c;return t("div",[t("el-card",[e._v("\n    "+e._s(e.$t("permissions.instruction"))+"\n  ")]),t("br"),t("el-card",[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.$t("permissions.user"),name:"first",lazy:!0}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-form",{attrs:{inline:!0,model:e.users.query}},[t("el-form-item",{attrs:{label:"ID"}},[t("el-input",{attrs:{placeholder:"ID",clearable:""},model:{value:e.users.query.id,callback:function(t){e.$set(e.users.query,"id",t)},expression:"users.query.id"}})],1),t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:e.users.query.name,callback:function(t){e.$set(e.users.query,"name",t)},expression:"users.query.name"}})],1),t("el-form-item",{attrs:{label:"角色"}},[t("el-select",{attrs:{placeholder:"角色",multiple:"",filterable:""},model:{value:e.users.query.role,callback:function(t){e.$set(e.users.query,"role",t)},expression:"users.query.role"}},e._l(e.selectOptions.roleOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.userTableFilter}},[e._v("查询")])],1)],1)],1),t("br"),t("el-card",{attrs:{shadow:"hover"}},[t("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("b",[e._v("用户列表")]),t("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini",circle:"",icon:"el-icon-plus"},on:{click:function(t){return e.userHandleAdd()}}})],1),t("el-card",{attrs:{shadow:"hover"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users.table.slice((e.users.currentPage-1)*e.users.pageSize,e.users.currentPage*e.users.pageSize)}},[t("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"角色"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.roles,(function(a){return t("el-tag",{key:a,staticStyle:{"margin-right":"5px"}},[e._v(e._s(a))])}))}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.userHandleEdit(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.userHandleDelete(a.$index,a.row)}}},[e._v("删除\n                  ")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.users.currentPage,"page-sizes":[10,20,30,40],"page-size":e.users.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.users.pageTotal},on:{"size-change":e.userHandleSizeChange,"current-change":e.userHandleCurrentChange}})],1)],1),t("el-dialog",{attrs:{title:"用户信息",visible:e.users.dialogShow},on:{"update:visible":function(t){return e.$set(e.users,"dialogShow",t)}}},[t("el-form",{ref:"userForm",attrs:{model:e.users.dialogForm,rules:e.users.dialogRules}},[t("el-form-item",{attrs:{label:"ID","label-width":"120px",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.users.dialogForm.id,callback:function(t){e.$set(e.users.dialogForm,"id",t)},expression:"users.dialogForm.id"}})],1),t("el-form-item",{attrs:{label:"姓名","label-width":"120px",prop:"name"}},[t("el-input",{attrs:{"auto-complete":"off",placeholder:"姓名"},model:{value:e.users.dialogForm.name,callback:function(t){e.$set(e.users.dialogForm,"name",t)},expression:"users.dialogForm.name"}})],1),t("el-form-item",{attrs:{label:"角色","label-width":"120px",prop:"roles"}},[t("el-select",{attrs:{placeholder:"角色",multiple:"",filterable:""},model:{value:e.users.dialogForm.roles,callback:function(t){e.$set(e.users.dialogForm,"roles",t)},expression:"users.dialogForm.roles"}},e._l(e.selectOptions.roleOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.users.dialogShow=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.userDialogSubmit()}}},[e._v("确 定")])],1)],1)],1),t("el-tab-pane",{attrs:{label:e.$t("permissions.role"),name:"second",lazy:!0}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-form",{attrs:{inline:!0,model:e.roles.query}},[t("el-form-item",{attrs:{label:"ID"}},[t("el-input",{attrs:{placeholder:"ID",clearable:""},model:{value:e.roles.query.id,callback:function(t){e.$set(e.roles.query,"id",t)},expression:"roles.query.id"}})],1),t("el-form-item",{attrs:{label:"角色"}},[t("el-input",{attrs:{placeholder:"角色",clearable:""},model:{value:e.roles.query.name,callback:function(t){e.$set(e.roles.query,"name",t)},expression:"roles.query.name"}})],1),t("el-form-item",{attrs:{label:"页面"}},[t("el-select",{attrs:{placeholder:"页面",multiple:"",filterable:""},model:{value:e.roles.query.page,callback:function(t){e.$set(e.roles.query,"page",t)},expression:"roles.query.page"}},e._l(e.selectOptions.pageOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"地址"}},[t("el-select",{attrs:{placeholder:"地址",multiple:"",filterable:""},model:{value:e.roles.query.path,callback:function(t){e.$set(e.roles.query,"path",t)},expression:"roles.query.path"}},e._l(e.selectOptions.pathOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"指令"}},[t("el-select",{attrs:{placeholder:"指令",multiple:"",filterable:""},model:{value:e.roles.query.directive,callback:function(t){e.$set(e.roles.query,"directive",t)},expression:"roles.query.directive"}},e._l(e.selectOptions.dirOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.roleTableFilter}},[e._v("查询")])],1)],1)],1),t("br"),t("el-card",{attrs:{shadow:"hover"}},[t("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("b",[e._v("角色列表")]),t("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini",circle:"",icon:"el-icon-plus"},on:{click:function(t){return e.roleHandleAdd()}}})],1),t("el-card",{attrs:{shadow:"hover"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roles.table.slice((e.roles.currentPage-1)*e.roles.pageSize,e.roles.currentPage*e.roles.pageSize)}},[t("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"权限",width:"500"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.permission,(function(a){return t("el-tag",{key:a.name,staticClass:"my-role-permission"},[t("b",[e._v("页面名称")]),e._v(": "+e._s(a.name)+".\n                    "),t("b",[e._v("地址URI")]),e._v(": "+e._s(a.path)+".\n                    "),t("b",[e._v("指令权限")]),e._v(": "),e._l(a.directive,(function(a){return t("span",{key:a.id},[e._v("\n                    "+e._s(a.name)+";")])}))],2)}))}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.roleHandleEdit(a.$index,a.row)}}},[e._v("编辑\n                  ")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.roleHandleDelete(a.$index,a.row)}}},[e._v("删除\n                  ")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.roles.currentPage,"page-sizes":[10,20,30,40],"page-size":e.roles.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.roles.pageTotal},on:{"size-change":e.roleHandleSizeChange,"current-change":e.roleHandleCurrentChange}})],1)],1),t("el-dialog",{attrs:{title:"角色信息",visible:e.roles.dialogShow},on:{"update:visible":function(t){return e.$set(e.roles,"dialogShow",t)}}},[t("el-form",{ref:"roleForm",attrs:{model:e.roles.dialogForm,rules:e.roles.dialogRules}},[t("el-form-item",{attrs:{label:"ID","label-width":"120px",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.roles.dialogForm.id,callback:function(t){e.$set(e.roles.dialogForm,"id",t)},expression:"roles.dialogForm.id"}})],1),t("el-form-item",{attrs:{label:"名称","label-width":"120px",prop:"name"}},[t("el-input",{attrs:{"auto-complete":"off",placeholder:"名称"},model:{value:e.roles.dialogForm.name,callback:function(t){e.$set(e.roles.dialogForm,"name",t)},expression:"roles.dialogForm.name"}})],1),t("el-form-item",{attrs:{label:"页面","label-width":"120px",prop:"page"}},[t("el-select",{attrs:{placeholder:"页面",multiple:"",filterable:""},model:{value:e.roles.dialogForm.pages,callback:function(t){e.$set(e.roles.dialogForm,"pages",t)},expression:"roles.dialogForm.pages"}},e._l(e.selectOptions.pageOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{"label-width":"120px"}},e._l(e.selectOptions.pageOption,(function(a){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.roles.dialogForm.pages.includes(a),expression:"roles.dialogForm.pages.includes(_page)"}],key:a},[e._v("\n                "+e._s(a)+"：\n                "),e._l(e.selectOptions.pageDirective[a],(function(a){return t("el-checkbox",{key:a},[e._v(e._s(a))])}))],2)})),0)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.roles.dialogShow=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.roleDialogSubmit()}}},[e._v("确 定")])],1)],1)],1),t("el-tab-pane",{attrs:{label:e.$t("permissions.page"),name:"third",lazy:!0}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-form",{attrs:{inline:!0,model:e.pages.query}},[t("el-form-item",{attrs:{label:"ID"}},[t("el-input",{attrs:{placeholder:"ID"},model:{value:e.pages.query.id,callback:function(t){e.$set(e.pages.query,"id",t)},expression:"pages.query.id"}})],1),t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{attrs:{placeholder:"名称"},model:{value:e.pages.query.name,callback:function(t){e.$set(e.pages.query,"name",t)},expression:"pages.query.name"}})],1),t("el-form-item",{attrs:{label:"路径"}},[t("el-select",{attrs:{placeholder:"路径",multiple:"",filterable:""},model:{value:e.pages.query.paths,callback:function(t){e.$set(e.pages.query,"paths",t)},expression:"pages.query.paths"}},e._l(e.selectOptions.pathOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:"指令"}},[t("el-select",{attrs:{placeholder:"指令",multiple:"",filterable:""},model:{value:e.pages.query.directive,callback:function(t){e.$set(e.pages.query,"directive",t)},expression:"pages.query.directive"}},e._l(e.selectOptions.dirOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.pageTableFilter}},[e._v("查询")])],1)],1)],1),t("br"),t("el-card",{attrs:{shadow:"hover"}},[t("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t("b",[e._v("页面列表")]),t("el-button",{staticStyle:{float:"right"},attrs:{type:"success",size:"mini",circle:"",icon:"el-icon-plus"},on:{click:function(t){return e.pageHandleAdd()}}})],1),t("el-card",{attrs:{shadow:"hover"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pages.table.slice((e.pages.currentPage-1)*e.pages.pageSize,e.pages.currentPage*e.pages.pageSize)}},[t("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"路径"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.path))])]}}])}),t("el-table-column",{attrs:{label:"指令权限"},scopedSlots:e._u([{key:"default",fn:function(a){return e._l(a.row.directive,(function(a){return t("el-tag",{key:a,staticStyle:{"margin-right":"5px"}},[e._v("\n                    "+e._s(a)+"\n                  ")])}))}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.pageHandleEdit(a.$index,a.row)}}},[e._v("编辑\n                  ")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.pageHandleDelete(a.$index,a.row)}}},[e._v("删除\n                  ")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.pages.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pages.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pages.pageTotal},on:{"size-change":e.pageHandleSizeChange,"current-change":e.pageHandleCurrentChange}})],1)],1),t("el-dialog",{attrs:{title:"页面信息",visible:e.pages.dialogShow},on:{"update:visible":function(t){return e.$set(e.pages,"dialogShow",t)}}},[t("el-form",{ref:"pageForm",attrs:{model:e.pages.dialogForm,rules:e.pages.dialogRules}},[t("el-form-item",{attrs:{label:"ID","label-width":"120px",prop:"id"}},[t("el-input",{attrs:{disabled:""},model:{value:e.pages.dialogForm.id,callback:function(t){e.$set(e.pages.dialogForm,"id",t)},expression:"pages.dialogForm.id"}})],1),t("el-form-item",{attrs:{label:"名称","label-width":"120px",prop:"name"}},[t("el-input",{attrs:{"auto-complete":"off",placeholder:"名称"},model:{value:e.pages.dialogForm.name,callback:function(t){e.$set(e.pages.dialogForm,"name",t)},expression:"pages.dialogForm.name"}})],1),t("el-form-item",{attrs:{label:"路径","label-width":"120px",prop:"path"}},[t("el-autocomplete",{attrs:{"fetch-suggestions":e.pagePathSuggest,placeholder:"路径"},model:{value:e.pages.dialogForm.path,callback:function(t){e.$set(e.pages.dialogForm,"path",t)},expression:"pages.dialogForm.path"}})],1),t("el-form-item",{attrs:{label:"指令","label-width":"120px",prop:"directive"}},[t("el-select",{attrs:{placeholder:"指令",multiple:"",filterable:"","allow-create":""},model:{value:e.pages.dialogForm.directive,callback:function(t){e.$set(e.pages.dialogForm,"directive",t)},expression:"pages.dialogForm.directive"}},e._l(e.selectOptions.dirOption,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.pages.dialogShow=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.pageDialogSubmit()}}},[e._v("确 定")])],1)],1)],1),t("el-tab-pane",{attrs:{label:e.$t("permissions.db"),name:"fourth",lazy:!0}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-card",[e._v("\n            以下是【用户权限】相关【数据库表】的示例。其中的【数组[]】表示跟另外一张表的一对多关系。"),t("br"),e._v("\n            你可以将其存成字符串，根据指定字符分割来记录； 也可以另外维护一张表来记录该关系。\n          ")]),t("br"),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{sm:24,lg:12}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("用户表：user")])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dbData.users}},[t("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"name"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"roleIds"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.roleIds))])]}}])})],1),t("el-tag",{staticClass:"my-db-instruction"},[t("h4",[e._v("说明：")]),t("ol",[t("li",[e._v("roleIds：表示用户所属的角色，一个用户可能有多个角色。")])])])],1)],1),t("el-col",{attrs:{sm:24,lg:12}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("角色表：role")])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dbData.roles}},[t("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"name"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"pageIds"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.pageIds))])]}}])}),t("el-table-column",{attrs:{label:"directiveIds"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.directiveIds))])]}}])})],1),t("el-tag",{staticClass:"my-db-instruction"},[t("h4",[e._v("说明：")]),t("ol",[t("li",[e._v("pageIds：表示角色拥有的页面权限。")]),t("li",[e._v("directiveIds：表示角色拥有的页面指令权限。")])])])],1)],1)],1),t("br"),t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{sm:24,lg:12}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("页面表：page")])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dbData.pages}},[t("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"name"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"path"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.path))])]}}])})],1),t("el-tag",{staticClass:"my-db-instruction"},[t("h4",[e._v("说明：")]),t("ol",[t("li",[e._v("path：表示页面路径地址。")])])])],1)],1),t("el-col",{attrs:{sm:24,lg:12}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("页面指令权限表：directive")])]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dbData.directive}},[t("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.id))])]}}])}),t("el-table-column",{attrs:{label:"name"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.name))])]}}])}),t("el-table-column",{attrs:{label:"pageId"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(a.row.pageId))])]}}])})],1),t("el-tag",{staticClass:"my-db-instruction"},[t("h4",[e._v("说明：")]),t("ol",[t("li",[e._v("pageId：表示指令权限所属的页面。")])])])],1)],1)],1)],1)],1)],1)],1)],1)},s=[],r=(a("6b54"),a("ac6a"),a("c24f")),o={name:"PageUserPermissions",data:function(){return{activeName:"first",selectOptions:{roleOption:[],pageOption:[],pathOption:[],dirOption:[],pageDirective:{}},users:{query:{id:"",name:"",role:[]},table:[],tableAll:[],currentPage:1,pageSize:10,pageTotal:0,dialogShow:!1,dialogType:"add",dialogForm:{id:"",name:"",roles:[]},dialogRules:{name:[{required:!0,message:"请输入用户名字",trigger:"blur"}]}},roles:{query:{id:"",name:"",page:"",path:"",directive:""},table:[],tableAll:[],currentPage:1,pageSize:10,pageTotal:0,dialogShow:!1,dialogType:"add",dialogForm:{id:"",name:"",pages:[]},dialogRules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}},pages:{query:{id:"",name:"",paths:[],directive:[]},table:[],tableAll:[],currentPage:1,pageSize:10,pageTotal:0,dialogShow:!1,dialogType:"add",dialogForm:{id:"",name:"",path:"",directive:[]},dialogRules:{name:[{required:!0,message:"请输入页面名称",trigger:"blur"}],path:[{required:!0,message:"请输入页面路径",trigger:"change"}]}},dbData:{users:[],roles:[],pages:[],directive:[]}}},methods:{dbDataToWebData:function(){var e=this,t=this.dbData,a={},l={},s={};this.selectOptions.dirOption=[],t.directive.forEach((function(t){e.selectOptions.dirOption.includes(t.name)||e.selectOptions.dirOption.push(t.name),s.hasOwnProperty(t.pageId)||(s[t.pageId]=[]),s[t.pageId].push({id:t.id,name:t.name})})),this.selectOptions.pageOption=[],this.selectOptions.pathOption=[],t.pages.forEach((function(t){e.selectOptions.pageOption.push(t.name),e.selectOptions.pathOption.push(t.path),l[t.id]={id:t.id,name:t.name,path:t.path,directive:s[t.id]||[]};var a=[];l[t.id].directive.forEach((function(e){a.push(e.name)})),e.selectOptions.pageDirective[t.name]=a,e.pages.tableAll.push({id:t.id,name:t.name,path:t.path,directive:a})})),this.pageTableFilter(),this.selectOptions.roleOption=[],t.roles.forEach((function(t){e.selectOptions.roleOption.push(t.name),t.pageIds=t.pageIds||[],t.directiveIds=t.directiveIds||[],a[t.id]={id:t.id,name:t.name,pages:t.pageIds.reduce((function(e,t){return e.push(l[t]||{id:-1,name:"Error",path:"/error/404",directive:[]}),e}),[]),directive:t.directiveIds.reduce((function(e,t){return e.push(s[t]||{id:-1,name:"Error",path:"/error/404"}),e}),[])},e.roles.tableAll.push({id:t.id,name:t.name,permission:t.pageIds.reduce((function(e,a){return e.push({id:l[a].id,name:l[a].name,path:l[a].path,directive:l[a].directive.filter((function(e){return t.directiveIds.includes(e.id)}))}),e}),[])}),e.roles.pageTotal+=1})),this.roleTableFilter(),t.users.forEach((function(t){e.users.tableAll.push({id:t.id,name:t.name,roles:t.roleIds.reduce((function(e,t){return e.push(a[t].name),e}),[])})})),this.userTableFilter()},userTableFilter:function(){var e=this;this.users.table=[],this.users.pageTotal=0,this.users.tableAll.forEach((function(t){e.users.query.id&&t.id.toString()!==e.users.query.id||-1!==t.name.indexOf(e.users.query.name)&&(0!==e.users.query.role.length&&0===e.users.query.role.filter((function(e){return t.roles.includes(e)})).length||(e.users.table.push(t),e.users.pageTotal+=1))}))},userHandleAdd:function(){this.users.dialogType="add",this.users.dialogForm.id="",this.users.dialogForm.name="",this.users.dialogForm.roles=[],this.users.dialogShow=!0},userHandleEdit:function(e,t){this.users.dialogType="modify",this.users.dialogForm.id=this.users.table[e].id,this.users.dialogForm.name=this.users.table[e].name,this.users.dialogForm.roles=this.users.table[e].roles,this.users.dialogShow=!0},userDialogSubmit:function(){var e=this;this.$refs["userForm"].validate((function(t){if(!t)return!1;"add"===e.users.dialogType?e.$message({message:"（假消息）添加用户成功！",type:"success"}):e.$message({message:"（假消息）修改用户成功！",type:"success"}),e.users.dialogShow=!1}))},userHandleDelete:function(e,t){this.$message({message:"（假消息）删除git用户成功！",type:"success"})},userHandleSizeChange:function(e){this.users.pagesize=e},userHandleCurrentChange:function(e){this.users.currentPage=e},roleTableFilter:function(){var e=this;this.roles.table=[],this.roles.pageTotal=0,this.roles.tableAll.forEach((function(t){if((!e.roles.query.id||t.id.toString()===e.roles.query.id)&&-1!==t.name.indexOf(e.roles.query.name)){var a=!1,l=!1,s=!1;t.permission.forEach((function(t){(0===e.roles.query.page.length||e.roles.query.page.includes(t.name))&&(a=!0),(0===e.roles.query.path.length||e.roles.query.path.includes(t.path))&&(l=!0),0!==e.roles.query.directive.length&&0===t.directive.filter((function(t){return e.roles.query.directive.includes(t.name)})).length||(s=!0)})),a&&l&&s&&(e.roles.table.push(t),e.roles.pageTotal+=1)}}))},roleHandleAdd:function(){this.roles.dialogType="add",this.roles.dialogForm.id="",this.roles.dialogForm.name="",this.roles.dialogForm.pages=[],this.roles.dialogShow=!0},roleHandleEdit:function(e,t){this.roles.dialogType="modify",this.roles.dialogForm.id=this.roles.table[e].id,this.roles.dialogForm.name=this.roles.table[e].name,this.roles.dialogForm.pages=this.roles.table[e].permission.reduce((function(e,t){return e.push(t.name),e}),[]),this.roles.dialogShow=!0},roleDialogSubmit:function(){var e=this;this.$refs["roleForm"].validate((function(t){if(!t)return!1;"add"===e.roles.dialogType?e.$message({message:"（假消息）添加角色成功！",type:"success"}):e.$message({message:"（假消息）修改角色成功！",type:"success"}),e.roles.dialogShow=!1}))},roleHandleDelete:function(e,t){this.$message({message:"（假消息）删除角色成功！",type:"success"})},roleHandleSizeChange:function(e){this.roles.pagesize=e},roleHandleCurrentChange:function(e){this.roles.currentPage=e},pageTableFilter:function(){var e=this;this.pages.table=[],this.pages.pageTotal=0,this.pages.tableAll.forEach((function(t){e.pages.query.id&&t.id.toString()!==e.pages.query.id||-1!==t.name.indexOf(e.pages.query.name)&&(0===e.pages.query.paths.length||e.pages.query.paths.includes(t.path))&&(0!==e.pages.query.directive.length&&0===e.pages.query.directive.filter((function(e){return t.directive.includes(e)})).length||(e.pages.table.push(t),e.pages.pageTotal+=1))}))},pagePathSuggest:function(e,t){var a=this.selectOptions.pathOption.reduce((function(t,a){return-1!==a.indexOf(e)&&t.push({value:a}),t}),[]);t(a)},pageHandleAdd:function(){this.pages.dialogType="add",this.pages.dialogForm.id="",this.pages.dialogForm.name="",this.pages.dialogForm.path="",this.pages.dialogForm.directive=[],this.pages.dialogShow=!0},pageHandleEdit:function(e,t){this.pages.dialogType="modify",this.pages.dialogForm.id=this.pages.table[e].id,this.pages.dialogForm.name=this.pages.table[e].name,this.pages.dialogForm.path=this.pages.table[e].path,this.pages.dialogForm.directive=this.pages.table[e].directive,this.pages.dialogShow=!0},pageDialogSubmit:function(){var e=this;this.$refs["pageForm"].validate((function(t){if(!t)return!1;"add"===e.pages.dialogType?e.$message({message:"（假消息）添加页面成功！",type:"success"}):e.$message({message:"（假消息）修改页面成功！",type:"success"}),e.pages.dialogShow=!1}))},pageHandleDelete:function(e,t){this.$message({message:"（假消息）删除页面成功！",type:"success"})},pageHandleSizeChange:function(e){this.pages.pagesize=e},pageHandleCurrentChange:function(e){this.pages.currentPage=e},onSubmit:function(){console.log(1)}},mounted:function(){var e=this;Object(r["c"])().then((function(t){e.dbData=t.permissions,e.dbDataToWebData()}))}},i=o,n=(a("8d63"),a("2877")),u=Object(n["a"])(i,l,s,!1,null,"3dcf4382",null);t["default"]=u.exports},"361e":function(e,t,a){},3846:function(e,t,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(e,t,a){"use strict";a("3846");var l=a("cb7c"),s=a("0bfb"),r=a("9e1e"),o="toString",i=/./[o],n=function(e){a("2aba")(RegExp.prototype,o,e,!0)};a("79e5")((function(){return"/a/b"!=i.call({source:"a",flags:"b"})}))?n((function(){var e=l(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?s.call(e):void 0)})):i.name!=o&&n((function(){return i.call(this)}))},"8d63":function(e,t,a){"use strict";a("361e")}}]);
//# sourceMappingURL=chunk-cd4151ce.561ffb87.js.map