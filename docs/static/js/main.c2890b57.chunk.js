(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{353:function(e,t){},361:function(e,t,a){e.exports=a(953)},372:function(e,t,a){},627:function(e,t){},629:function(e,t){},661:function(e,t){},662:function(e,t){},75:function(e){e.exports={b:"https://raw.githubusercontent.com/medialab/ricardo_data/master",a:"https://api.github.com/repos/medialab/ricardo_data/contents"}},787:function(e,t,a){var n={"./geojson.json":314,"./table-schema.json":788,"./topojson.json":315};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=787},850:function(e,t,a){var n={"./data-package.json":851,"./data-resource.json":852,"./fiscal-data-package.json":853,"./registry.json":854,"./tabular-data-package.json":855,"./tabular-data-resource.json":856};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=850},921:function(e,t,a){var n={"./geojson.json":348,"./table-schema.json":922,"./topojson.json":349};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=921},950:function(e,t){},951:function(e,t){},953:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(91),c=a.n(o),i=a(32),s=(a(372),a(70)),l=a(71),u=a(73),d=a(72),m=a(74),f=a(11),p=a(129),h=a(75),E=a(93),v="FETCH_DATAPACKAGE_SUCCESS",b="FETCH_TABLES_SUCCESS",y=[{name:"sources",path:"data/sources.csv"},{name:"currencies",path:"data/currencies.csv"},{name:"entity_names",path:"data/entity_names.csv"},{name:"expimp_spegen",path:"data/expimp_spegen.csv"}],g={};var O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDatapackage(),this.props.fetchAllTables({branch:"master"})}},{key:"render",value:function(){var e=this.props.repoData;return r.a.createElement("div",null,!e.tables&&r.a.createElement("span",null,"loading tables"),!e.datapackage&&r.a.createElement("span",null,"loading datapackage"))}}]),t}(r.a.Component),j=Object(i.b)(function(e){return{repoData:e.repoData}},{fetchAllTables:function(e){return function(t){var a=e.branch;t({type:"FETCH_TABLES_REQUEST"}),Promise.all(y.map(function(e){return Object(p.get)("".concat(h.a,"/").concat(e.path,"?ref=").concat(a))})).then(function(e){var a={};e.forEach(function(e){var t=e.data.name.split(".")[0];a[t]=e.data}),t({type:b,payload:a})}).catch(function(a){return t({type:"FETCH_TABLES_FAILURE",payload:e,error:a})})}},fetchDatapackage:function(){return function(e){return e({type:"FETCH_DATAPACKAGE_REQUEST"}),Object(p.get)("".concat(h.a,"/datapackage.json?ref=master")).then(function(t){return e({type:v,payload:t.data})}).catch(function(t){return e({type:"FETCH_DATAPACKAGE_FAILURE",error:t})})}}})(O),w=a(34),k=a(9),x={id:0,flow:1,unit:2,species_bullions:3,transport_type:4,statistical_period:5,partner_sum:6,world_trade_type:7,notes:8,source:9,reporting:10,partner:11,"export_import|special_general":12,"currency|year|reporting":13},N="SET_STEP",_="SHOW_MODIFICATION",C="HIDE_MODIFICATION",R="GO_NEXT_ERROR",S="GO_PREV_ERROR",A=function(e){return{type:N,payload:e}},T=[{id:"0",name:"Upload file",title:"Choose a file"},{id:"1",name:"Schema Validation",title:"Schema validation against datapackage"},{id:"2",name:"Error Fixing",title:"Fix errors by fields"}],F={steps:T,selectedStep:T[0],isModification:!1,modificationIndex:0};var D=function(e){var t=e.className,a=e.groupedErrors,n=["","Field","Value","Rows"];return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"70vh"}},r.a.createElement("div",{className:"action-table ".concat(t)},r.a.createElement("div",{className:"action-table-header"},n.map(function(e,t){return r.a.createElement("div",{key:t,className:"table-cell"},r.a.createElement("span",{className:"Value"===e?"has-text-danger":"has-text-black"},e))})),r.a.createElement("div",{className:"action-table-main"},a.map(function(e,t){var a=e.field,o=e.errors;return r.a.createElement("div",{key:t,className:"table-row"},n.map(function(e,n){switch(n){case 0:default:return r.a.createElement("div",{key:n,className:"table-cell"},t+1);case 1:return r.a.createElement("div",{key:n,className:"table-cell"},a);case 2:return r.a.createElement("div",{key:n,className:"table-cell"},r.a.createElement("span",{className:"has-text-danger"},o[0].value||"null"),r.a.createElement(k.HelpPin,null,o[0].message));case 3:return r.a.createElement("div",{key:n,className:"table-cell"},o.length)}}))}))))},I=function(e){var t=e.className,a=e.flows,n=e.modificationItem,o=a[0],c=n.errors,i=n.field;return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"70vh"}},r.a.createElement("div",{className:"action-table ".concat(t)},r.a.createElement("div",{className:"action-table-header"},o.map(function(e,t){var a=-1!==i.indexOf(e);return r.a.createElement("div",{key:t,className:"table-cell"},r.a.createElement("span",{className:a?"has-text-danger":"has-text-black"},e))})),r.a.createElement("div",{className:"action-table-main"},c.map(function(e,t){return r.a.createElement("div",{key:t,className:"table-row"},o.map(function(t,n){var o=-1!==i.indexOf(t);return r.a.createElement("div",{key:n,className:"table-cell",style:{wordBreak:"break-all"}},r.a.createElement("span",{className:o?"has-text-danger":"has-text-black"},a[e.rowNumber-1][n]))}))}))))},L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.flows,o=a.schemaFeedback,c=a.isModification,i=a.modificationIndex;if(o.collectedErrors){var s=Object(w.values)(o.collectedErrors).reduce(function(e,t){return e.concat(t.errors)},[]),l=Object(w.values)(Object(w.groupBy)(s,function(e){return e.field+e.value})).map(function(e){return{field:e[0].field,value:e[0].value,errors:e}});e=Object(w.sortBy)(l,function(e){return x[e.name]})}return r.a.createElement("div",null,!c&&r.a.createElement("div",null,e.length>0&&r.a.createElement("div",{className:"has-text-danger has-text-weight-bold"},e.length," different errors need to modify"),e&&r.a.createElement(D,{groupedErrors:e}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(k.Button,{isColor:"info",onClick:function(){return t.props.setStep({id:"1"})}},"Previous Step"),r.a.createElement(k.Button,{isColor:"info",onClick:this.props.showModification},"Start fix error"))),c&&r.a.createElement("div",null,r.a.createElement("div",{className:"has-text-danger has-text-weight-bold"},"(",i+1,") ",e[i].errors[0].message),r.a.createElement(I,{flows:n,modificationItem:e[i]}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(k.Button,{isColor:"info",onClick:this.props.hideModification},"Back to summary"),r.a.createElement("div",null,0!==i&&r.a.createElement(k.Button,{isColor:"info",onClick:function(){i>0&&t.props.goPrevError()}},"Prev Error"),i!==e.length-1&&r.a.createElement(k.Button,{isColor:"info",style:{marginLeft:"10px"},onClick:function(){i<e.length-1&&t.props.goNextError()}},"Next Error")))))}}]),t}(r.a.Component),B=Object(i.b)(function(e){return{flows:e.flows.data,schemaFeedback:e.schemaValidation.schemaFeedback,isModification:e.ui.isModification,modificationIndex:e.ui.modificationIndex}},{setStep:A,showModification:function(){return{type:_}},hideModification:function(){return{type:C}},goNextError:function(){return{type:R}},goPrevError:function(){return{type:S}}})(L),V=a(360),M="UPDATE_FLOW",H="IMPORT_FLOWS",U={};var P=a(92),K=a(8),G=a.n(K),W=a(130),Y=(a(622),a(357),a(189)),J=a(94),Q="VALIDATE_TABLE_REQUEST",z="VALIDATE_TABLE_SUCCESS",X="VALIDATE_TABLE_FAILURE",Z="VALIDATE_HEADER_REQUEST",$="VALIDATE_HEADER_SUCCESS",q="VALIDATE_HEADER_FAILURE",ee=function(e){return"string"===typeof e?e:e.join("|")},te=function(e,t,a){var n=t.fields,r=t.foreignKeys,o=n.map(function(e){return e.name}),c=function(e){return e.reduce(function(e,t){return"string"===typeof t?e.concat([t]):e.concat(t)},[])}(r.map(function(e){return e.fields})),i=n.filter(function(e){return-1===c.indexOf(e.name)}),s=r.map(function(e){return ee(e.fields)}),l=["ERROR_FORMAT","ERROR_FOREIGN_KEY"],u=i.reduce(function(e,t){return Object(f.a)({},e,Object(P.a)({},t.name,{name:t.name,schema:t,errorType:"ERROR_FORMAT",errors:[]}))},{}),d=r.reduce(function(e,t){var a=ee(t.fields);return Object(f.a)({},e,Object(P.a)({},a,Object(f.a)({name:a},t,{errorType:"ERROR_FOREIGN_KEY",errors:[]})))},{});return a.forEach(function(t){var a=e[t.rowNumber-1],n=t.rowNumber;l.forEach(function(e){var r=t.errors.find(function(t){return t.type===e});r&&("ERROR_FORMAT"===e?o.forEach(function(t,o){r.errors.forEach(function(r){if(r.columnNumber===o+1&&-1===c.indexOf(t)){var i={rowNumber:n,errorType:e,columnNumber:r.columnNumber,field:t,value:a[o]||"null",message:r.message};u[t].errors.push(i)}})}):"ERROR_FOREIGN_KEY"===e&&s.forEach(function(t){r.errors.forEach(function(r){var c=ee(r.columnName);if(c===t){var i=r.columnName.map(function(e){var t=o.indexOf(e);return a[t]}),s={rowNumber:n,errorType:e,columnName:r.columnName,field:c,value:i.join("|"),message:r.message};d[t].errors.push(s)}})}))})}),Object.keys(u).forEach(function(e){u[e].errors.length||delete u[e]}),Object.keys(d).forEach(function(e){d[e].errors.length||delete d[e]}),Object(f.a)({},u,d)},ae={tableValidated:"flows",schemaFeedback:null,headerFeedback:null,tables:null};var ne=function(e){var t=e.schemaValidation.tableValidated;return e.schemaValidation.descriptor.resources.find(function(e){return e.name===t}).schema},re=function(e){var t=oe(e),a={};return t.forEach(function(t){var n=t.reference.resource;a[n]=e.schemaValidation.tables[n]}),a},oe=function(e){var t=e.schemaValidation.tableValidated;return e.schemaValidation.descriptor.resources.find(function(e){return e.name===t}).schema.foreignKeys},ce=function(e){var t,a=e.headerNames,n=e.fieldNames,o=a.length-n.length;t=o>0?Object(w.difference)(a,n):Object(w.difference)(n,a);var c=a.map(function(e,t){return n[t]&&n[t]===e?{name:e,valid:!0}:{name:e,valid:!1}});return r.a.createElement("div",{style:{}},t.length===o&&o>0&&r.a.createElement("div",{className:"has-text-danger"},r.a.createElement("span",null,"Extra headers - "),t.map(function(e){return r.a.createElement("span",null,'"',e,'" ')})),t.length===Math.abs(o)&&o<0&&r.a.createElement("div",{className:"has-text-danger has-text-weight-bold"},r.a.createElement("span",null,"Missing headers - "),t.map(function(e){return r.a.createElement("span",null,'"',e,'" ')})),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},r.a.createElement("div",null,r.a.createElement("div",{className:"has-text-weight-bold"},"headers "),c.map(function(e,t){return r.a.createElement("div",{key:t,className:e.valid?"has-text-black":"has-text-danger"},e.name)})),r.a.createElement("div",null,r.a.createElement("div",{className:"has-text-weight-bold"},"schema fields"),n.map(function(e,t){return r.a.createElement("div",{key:t},e)}))))},ie=a(190),se=a.n(ie);var le=Object(i.b)(function(e){return{schema:e.schemaValidation.descriptor&&ne(e),flows:e.flows,headerFeedback:e.schemaValidation.headerFeedback}},{importFlows:function(e){return{type:H,payload:e}},setStep:A,validateHeader:function(e){return function(t){var a=e.source,n=e.schema;t({type:Z,payload:Object(f.a)({},e,{status:"loading"})}),t(Object(W.a)(G.a.mark(function e(){var r;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.Table.load(a.slice(0,2),{schema:n});case 3:return r=e.sent,e.next=6,r.read({limit:1});case 6:t({type:$,payload:{status:"done",valid:!0,headers:r.headers}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),"ERROR_HEADER"!==e.t0.type?t({type:$,payload:{status:"done",valid:!0,headers:r.headers}}):t({type:q,valid:!1,status:"done",payload:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,9]])})))}}})(function(e){var t=e.schema,a=e.flows,n=e.headerFeedback,o=e.setStep,c=e.importFlows,i=e.validateHeader;return r.a.createElement("div",null,r.a.createElement(k.DropZone,{maxSize:1e7,onDrop:function(e){var a=Object(V.a)(e,1)[0];"xlsx"===a.name.split(".")[1]?function(e){return new Promise(function(t,a){var n=new FileReader;n.onload=function(e){var a=e.target.result,r=se.a.read(a,{type:"binary"}),o=r.SheetNames[0],c=r.Sheets[o],i=se.a.utils.sheet_to_json(c,{header:1,defval:"",blankrows:!1});t(i),n=void 0},n.onerror=function(e){a(e.target.error),n=void 0},n.readAsBinaryString(e)})}(a).then(function(e){c({file:{name:a.name},data:e}),i({source:e,schema:t})}).catch(function(e){return console.error("fail to parse file")}):function(e){return new Promise(function(t,a){var n=new FileReader;return n.onload=function(a){var r;r="csv"===e.name.split(".")[1]?Object(J.b)(a.target.result):Object(J.c)(a.target.result),t(r),n=void 0},n.onerror=function(e){a(e.target.error),n=void 0},n.readAsText(e)})}(a).then(function(e){c({file:{name:a.name},data:e}),i({source:e,schema:t})}).catch(function(e){return console.error("fail to parse file")})},onDropRejected:function(e,t){console.log("file is invalid")},isSize:"small"},r.a.createElement("span",{className:"tech-info"},"Drag and drop .xlsx, .csv file here(maximum 10MB)")),n&&"loading"===n.status&&r.a.createElement("span",null,"Validating Headers"),n&&n.valid&&r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("span",{className:"has-text-success has-text-weight-bold"},'Headers of "',a.file.name,'" are valid'),r.a.createElement(k.Button,{isColor:"info",onClick:function(){return o({id:"1"})}},"Next Step")),n&&!n.valid&&"ERROR_HEADER"===n.type&&r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("span",{className:"has-text-danger has-text-weight-bold"},'Headers of "',a.file.name,'" do not match schema fields, please fix your file and re-upload'),r.a.createElement(ce,{headerNames:n.headerNames,fieldNames:n.fieldNames})))}),ue=function(e){var t=e.className,a=e.collectedErrors,n=["Field","Error Type","Error Overview"],o=Object(w.sortBy)(a,function(e){return x[e.name]});return r.a.createElement("div",{style:{position:"relative",width:"100%",height:"70vh"}},r.a.createElement("div",{className:"action-table ".concat(t)},r.a.createElement("div",{className:"action-table-header"},n.map(function(e,t){return r.a.createElement("div",{key:t,className:"table-cell"},e)})),r.a.createElement("div",{className:"action-table-main"},o.map(function(e,t){var a=e.errors.length,o=Object(w.groupBy)(e.errors,function(e){return e.value}),c=Object.keys(o).length;return r.a.createElement("div",{key:t,className:"table-row"},n.map(function(t,n){var o;return o=0===n?e.name:1===n?e.errorType:"total ".concat(a," rows, ").concat(c," different invalid values"),r.a.createElement("div",{key:n,className:"table-cell"},o)}))}))))},de=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.flows,a=e.schema,n=e.relations;this.props.validateTable({source:t,schema:a,relations:n})}},{key:"render",value:function(){var e=this,t=this.props.schemaFeedback;return r.a.createElement("div",null,t&&"loading"===t.status&&r.a.createElement("span",null,t.loader),t&&!t.valid&&t.collectedErrors&&r.a.createElement("div",null,r.a.createElement("span",{className:"has-text-danger has-text-weight-bold"},"Found errors in ",t.errors.length," rows of ",Object.keys(t.collectedErrors).length," fields"),r.a.createElement(ue,{collectedErrors:t.collectedErrors}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(k.Button,{isColor:"info",onClick:function(){return e.props.setStep({id:"0"})}},"Previous Step"),r.a.createElement(k.Button,{isColor:"info",onClick:function(){return e.props.setStep({id:"2"})}},"Review Errors"))),t&&t.valid&&r.a.createElement("span",{className:"has-text-success has-text-weight-bold"},"Flows data is valid"))}}]),t}(r.a.Component),me=Object(i.b)(function(e){return{flows:e.flows.data,schema:e.schemaValidation.descriptor&&ne(e),relations:e.schemaValidation.descriptor&&re(e),foreignKeys:e.schemaValidation.descriptor&&oe(e),schemaFeedback:e.schemaValidation.schemaFeedback}},{validateTable:function(e){return function(t){var a=e.source,n=e.schema,r=e.relations;t(Object(W.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(G.a.mark(function e(){var o,c,i,s,l;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=a.length,c=100,i=0,s=[],l=G.a.mark(function e(){var o,l,u,d,m;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Q,payload:{status:"loading",loader:"validating ".concat(i," rows")}}),o=i/c,l=[a[0]].concat(a.slice(i+1-o,i+c-o)),e.next=5,Y.Table.load(l,{schema:n});case 5:return u=e.sent,e.next=8,u.read({forceCast:!0,relations:r});case 8:d=e.sent,(m=d.filter(function(e){return e.errors})).length&&(m.forEach(function(e){return e.rowNumber=e.rowNumber+c*o-o}),s=s.concat(m));case 11:case"end":return e.stop()}},e)});case 6:if(!(i<o)){e.next=11;break}return e.delegateYield(l(),"t0",8);case 8:i+=c,e.next=6;break;case 11:s.length?t({type:X,payload:{status:"done",valid:!1,errors:s,collectedErrors:te(a,n,s)}}):t({type:z,payload:{status:"done",valid:!0}});case 12:case"end":return e.stop()}},e)})(),"t0",2);case 2:e.next=8;break;case 4:e.prev=4,e.t1=e.catch(0),console.error(e.t1),t({type:X,payload:e.t1});case 8:case"end":return e.stop()}},e,null,[[0,4]])})))}},setStep:A})(de),fe=function(e){var t=e.steps,a=e.selectedStep,n=e.onSetStep,o=e.children;return r.a.createElement(k.LayoutWrapper,{hasConfig:!0},r.a.createElement(k.LayoutHeader,null,r.a.createElement(k.AppTitle,null,"Ricardo Data App"),r.a.createElement(k.RunningTitle,null,a.title)),r.a.createElement(k.LayoutContainer,null,r.a.createElement(k.LayoutContent,null,r.a.createElement(k.LayoutContentColumn,{isConfig:!0},t.map(function(e,t){var o=a.id===e.id,c=e.id>a.id;return r.a.createElement(k.ButtonContainer,{key:t},r.a.createElement(k.Button,{isColor:o?"info":null,isDisabled:c,onClick:function(){return n(e)}},e.name))})),r.a.createElement(k.LayoutContentColumn,{isWorkspace:!0},o)),r.a.createElement(k.LayoutFooter,null,r.a.createElement(k.LayoutFooterColumn,{isSecondary:!0},r.a.createElement("h3",null,"m\xe9dialab SciencesPo")),r.a.createElement(k.LayoutFooterColumn,{isPrimary:!0},"Ricardo Data App"))))},pe=(a(952),Object(i.b)(function(e){return{steps:e.ui.steps,selectedStep:e.ui.selectedStep,repoData:e.repoData}},{setStep:A})(function(e){var t=e.steps,a=e.selectedStep,n=e.repoData,o=e.setStep;return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),n.descriptor&&r.a.createElement(fe,{steps:t,selectedStep:a,onSetStep:o},function(){switch(a.id){case"0":default:return r.a.createElement(le,null);case"1":return r.a.createElement(me,null);case"2":return r.a.createElement(B,null)}}()))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(33),Ee=a(191),ve=a(358),be=a(359),ye=Object(he.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case N:return Object(f.a)({},e,{selectedStep:T.find(function(e){return a.id===e.id})});case _:return Object(f.a)({},e,{isModification:!0,modificationIndex:0});case C:return Object(f.a)({},e,{isModification:!1,modificationIndex:0});case R:return Object(f.a)({},e,{modificationIndex:e.modificationIndex+1});case S:if(0===e.modificationIndex)return;return Object(f.a)({},e,{modificationIndex:e.modificationIndex-1});default:return e}},flows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case H:return a;case M:return Object(f.a)({},e,{data:a.data});default:return e}},schemaValidation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case N:return"0"===a.id?Object(f.a)({},e,{schemaFeedback:null,headerFeedback:null}):e;case b:var n={};return Object.keys(a).forEach(function(e){n[e]=Object(J.a)(E.Base64.decode(a[e].content),function(e){return e.year?Object(f.a)({},e,{year:+e.year}):e})}),Object(f.a)({},e,{tables:n});case v:return Object(f.a)({},e,{descriptor:JSON.parse(E.Base64.decode(a.content))});case Z:case q:case $:return Object(f.a)({},e,{headerFeedback:a});case Q:case X:case z:return Object(f.a)({},e,{schemaFeedback:a});default:return e}},repoData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case b:return Object(f.a)({},e,{tables:a});case v:return Object(f.a)({},e,{datapackage:a,descriptor:JSON.parse(E.Base64.decode(a.content))});default:return e}}}),ge={key:"root",storage:ve};Object(Ee.a)(ge,ye);var Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[be.a],a=he.d.apply(void 0,[he.a.apply(void 0,t)].concat([])),n=Object(he.e)(ye,e,a);return{store:n,persistor:Object(Ee.b)(n)}}({}).store;c.a.render(r.a.createElement(i.a,{store:Oe},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[361,1,2]]]);
//# sourceMappingURL=main.c2890b57.chunk.js.map