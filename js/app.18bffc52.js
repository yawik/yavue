(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("289d"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("app-header"),r("app-main",{attrs:{url:"Welcome to Your Vue.js App",remote:"https://yawik.org/demo/de/jobboard"}}),r("app-footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("link",{attrs:{rel:"stylesheet",href:"https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"}}),r("h1",[t._v(t._s(t.url))]),r("b-field",[r("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}}),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary",on:{click:t.search}},[t._v("Search")])])],1),r("h2",[t._v(t._s(t.result.total)+" Jobs")]),r("b-table",{attrs:{loading:t.loading,paginated:"",striped:"","backend-pagination":"",data:t.jobs,total:t.result.total,"per-page":t.result.jobsPerPage,"current-page-sync":t.currentPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"page-change":t.onPageChange,sort:t.onSort},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-table-column",{attrs:{field:"title",label:"Title",sortable:""}},[r("a",{attrs:{href:e.row.link}},[t._v(t._s(e.row.title))])]),r("b-table-column",{attrs:{field:"organization",label:"Organization",sortable:""}},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.row.organizationLogo,expression:"props.row.organizationLogo"}],staticStyle:{width:"80px"},attrs:{src:e.row.organizationLogo}}),t._v("\n                "+t._s(e.row.organization)+"\n            ")]),r("b-table-column",{attrs:{field:"location",label:"Location",sortable:""}},[t._v("\n                "+t._s(e.row.location)+"\n            ")])]}}])})],1)},l=[],c=(r("ac6a"),r("456d"),r("bc3a")),u=r.n(c),d={data:function(){return{loading:!0,error:!1,fullTextEnabled:!0,q:"",errmsg:"",jobs:[],result:{totalPages:0,total:0,jobsPerPage:0},address:"",currentPage:1,defaultSortOrder:"asc",sortField:"",sortOrder:"",url:"https://yawik.org/demo/de/jobboard"}},name:"Main",props:["remote","widget-title","count","org"],mounted:function(){this.load()},methods:{search:function(){this.load()},load:function(t){if(this.currentPage=t,this.loading=!0,this.error=!1,!this.remote)return this.error=!0,this.errmsg='No yawik url provided. Please use the attribute "url".',void(this.loading=!1);var e={json:"1"};this.count&&(e.count=this.count),this.currentPage&&(e.page=this.currentPage),this.org&&(e.o=this.org),""!==this.q&&(e.q=this.q),""!==this.sortField&&(e.sort=this.sortField),""!==this.sortField&&"asc"!==this.sortOrder&&(e.sort="-".concat(this.sortField));var r=Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&"),n=this;this.loading=!0,u.a.get(this.remote+"?"+r).then((function(t){n.jobs=t.data.jobs,n.result=t.data})).catch((function(t){n.error=!0,n.errmsg=t})).then((function(){n.loading=!1}))},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.load()},onPageChange:function(t){this.load(t)}}},p=d,f=r("2877"),h=Object(f["a"])(p,s,l,!1,null,"4d920b8e",null),b=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v(t._s(t.msg))])])},m=[],v={data:function(){return{msg:"Header Text"}}},y=v,_=(r("68db"),Object(f["a"])(y,g,m,!1,null,"03259bf7",null)),w=_.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("h1",[t._v(t._s(t.msg))])])},O=[],P={data:function(){return{msg:"Footer Text"}}},k=P,x=(r("6421"),Object(f["a"])(k,j,O,!1,null,"27093076",null)),S=x.exports,C={name:"app",components:{"app-main":b,"app-header":w,"app-footer":S}},F=C,q=(r("5c0b"),Object(f["a"])(F,a,i,!1,null,null,null)),T=q.exports;n["a"].use(o["a"],{}),n["a"].prototype.$http=r("bc3a"),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e332"),o=r.n(n);o.a},6421:function(t,e,r){"use strict";var n=r("ff0c"),o=r.n(n);o.a},"68db":function(t,e,r){"use strict";var n=r("d23b"),o=r.n(n);o.a},d23b:function(t,e,r){},e332:function(t,e,r){},ff0c:function(t,e,r){}});
//# sourceMappingURL=app.18bffc52.js.map