(function(i){function r(r){for(var e,d,o=r[0],a=r[1],g=r[2],u=0,h=[];u<o.length;u++)d=o[u],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&h.push(n[d][0]),n[d]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(i[e]=a[e]);c&&c(r);while(h.length)h.shift()();return s.push.apply(s,g||[]),t()}function t(){for(var i,r=0;r<s.length;r++){for(var t=s[r],e=!0,o=1;o<t.length;o++){var a=t[o];0!==n[a]&&(e=!1)}e&&(s.splice(r--,1),i=d(d.s=t[0]))}return i}var e={},n={app:0},s=[];function d(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return i[r].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.m=i,d.c=e,d.d=function(i,r,t){d.o(i,r)||Object.defineProperty(i,r,{enumerable:!0,get:t})},d.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},d.t=function(i,r){if(1&r&&(i=d(i)),8&r)return i;if(4&r&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&r&&"string"!=typeof i)for(var e in i)d.d(t,e,function(r){return i[r]}.bind(null,e));return t},d.n=function(i){var r=i&&i.__esModule?function(){return i["default"]}:function(){return i};return d.d(r,"a",r),r},d.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},d.p="/sudoku/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=r,o=o.slice();for(var g=0;g<o.length;g++)r(o[g]);var c=a;s.push([0,"chunk-vendors"]),t()})({0:function(i,r,t){i.exports=t("56d7")},"56d7":function(i,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("2b0e"),n=function(){var i=this,r=i.$createElement,t=i._self._c||r;return t("v-app",[t("v-main",[t("Grid")],1)],1)},s=[],d=function(){var i=this,r=i.$createElement,t=i._self._c||r;return t("div",{staticClass:"grid"},[t("table",i._l(i.grid,(function(r,e){return t("tr",{key:e},i._l(r,(function(r,n){return t("td",{key:n},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.grid[e][n],expression:"grid[index_row][index]"}],domProps:{value:i.grid[e][n]},on:{click:function(i){return i.target.select()},keypress:function(r){return i.onlyNumber(r)},contextmenu:function(r){return i.handleRightClick.apply(null,arguments)},input:function(r){r.target.composing||i.$set(i.grid[e],n,r.target.value)}}})])})),0)})),0),t("div",{staticClass:"options text-center mt-2 mb-4"},[t("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(r){return i.calculate()}}},[i._v(" Solve ")]),t("h3",[i._v("On right click you can mark numbers")]),t("h4",[i._v('This mini app helps you see how many "100%" moves you have')])],1),t("v-dialog",{attrs:{width:"600px"},model:{value:i.dialog,callback:function(r){i.dialog=r},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"text-h5"},[i._v("Movement possibilities")])]),t("v-card-text",[t("table",i._l(i.new_grid,(function(r,e){return t("tr",{key:e},i._l(r,(function(r,n){return t("td",{key:n},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.new_grid[e][n],expression:"new_grid[index_row][index]"}],class:i.new_grid[e][n]==i.grid[e][n]?"num_exist":-1!=i.new_grid[e][n].search(",")?"num_multi":"num_new",attrs:{readonly:""},domProps:{value:i.new_grid[e][n]},on:{input:function(r){r.target.composing||i.$set(i.new_grid[e],n,r.target.value)}}})])})),0)})),0)]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(r){i.dialog=!1}}},[i._v(" Close ")])],1)],1)],1)],1)},o=[],a=(t("d81d"),t("e9c4"),t("caad"),t("2532"),t("d3b7"),t("25f0"),t("ac1f"),t("841c"),t("fb6a"),{name:"Grid",data:function(){return{dialog:!1,grid:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],new_grid:[]}},methods:{onlyNumber:function(i){i=i||window.event;var r=i.which?i.which:i.keyCode;if(!(r<48||r>57))return!0;i.preventDefault()},handleRightClick:function(i){i.preventDefault(),"locked"==i.target.className?i.target.className="":i.target.className="locked"},calculate:function(){for(var i in this.grid)this.grid[i]=this.grid[i].map((function(i){return parseInt(i)}));for(var r in this.new_grid=[],this.grid){for(var t=JSON.parse(JSON.stringify(this.grid[r])),e=1;e<10;e++)if(!this.grid[r].includes(e))for(var n in t){var s=this.getNumbersInGrid(r,n),d=this.getNumbersInColumn(n);if(!s.includes(e)&&!d.includes(e)){var o=t[n].toString();-1!=o.search("0")?t[n]=e+",":-1!=o.search(",")&&(t[n]+=e+",")}}this.new_grid.push(t)}this.deleteCommas(),this.dialog=!0},getNumbersInGrid:function(i,r){if(i<3){if(r<3){var t=[this.grid[0][0],this.grid[0][1],this.grid[0][2],this.grid[1][0],this.grid[1][1],this.grid[1][2],this.grid[2][0],this.grid[2][1],this.grid[2][2]];return t}if(r>=3&&r<6){var e=[this.grid[0][3],this.grid[0][4],this.grid[0][5],this.grid[1][3],this.grid[1][4],this.grid[1][5],this.grid[2][3],this.grid[2][4],this.grid[2][5]];return e}var n=[this.grid[0][6],this.grid[0][7],this.grid[0][8],this.grid[1][6],this.grid[1][7],this.grid[1][8],this.grid[2][6],this.grid[2][7],this.grid[2][8]];return n}if(i>=3&&i<6){if(r<3){var s=[this.grid[3][0],this.grid[3][1],this.grid[3][2],this.grid[4][0],this.grid[4][1],this.grid[4][2],this.grid[5][0],this.grid[5][1],this.grid[5][2]];return s}if(r>=3&&r<6){var d=[this.grid[3][3],this.grid[3][4],this.grid[3][5],this.grid[4][3],this.grid[4][4],this.grid[4][5],this.grid[5][3],this.grid[5][4],this.grid[5][5]];return d}var o=[this.grid[3][6],this.grid[3][7],this.grid[3][8],this.grid[4][6],this.grid[4][7],this.grid[4][8],this.grid[5][6],this.grid[5][7],this.grid[5][8]];return o}if(r<3){var a=[this.grid[6][0],this.grid[6][1],this.grid[6][2],this.grid[7][0],this.grid[7][1],this.grid[7][2],this.grid[8][0],this.grid[8][1],this.grid[8][2]];return a}if(r>=3&&r<6){var g=[this.grid[6][3],this.grid[6][4],this.grid[6][5],this.grid[7][3],this.grid[7][4],this.grid[7][5],this.grid[8][3],this.grid[8][4],this.grid[8][5]];return g}var c=[this.grid[6][6],this.grid[6][7],this.grid[6][8],this.grid[7][6],this.grid[7][7],this.grid[7][8],this.grid[8][6],this.grid[8][7],this.grid[8][8]];return c},getNumbersInColumn:function(i){return[this.grid[0][i],this.grid[1][i],this.grid[2][i],this.grid[3][i],this.grid[4][i],this.grid[5][i],this.grid[6][i],this.grid[7][i],this.grid[8][i]]},deleteCommas:function(){for(var i in this.new_grid)for(var r in this.new_grid[i])-1!=this.new_grid[i][r].toString().search(",")&&(this.new_grid[i][r]=this.new_grid[i][r].toString().slice(0,-1))}}}),g=a,c=(t("b0bb"),t("2877")),u=t("6544"),h=t.n(u),l=t("8336"),f=t("b0af"),p=t("99d9"),v=t("169a"),m=t("2fa4"),b=Object(c["a"])(g,d,o,!1,null,"e3a5335c",null),w=b.exports;h()(b,{VBtn:l["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VDialog:v["a"],VSpacer:m["a"]});var _={name:"App",components:{Grid:w},data:function(){return{}}},y=_,k=t("7496"),x=t("f6c4"),O=Object(c["a"])(y,n,s,!1,null,null,null),C=O.exports;h()(O,{VApp:k["a"],VMain:x["a"]});var N=t("9483");Object(N["a"])("".concat("/sudoku/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(i){console.error("Error during service worker registration:",i)}});var j=t("f309");e["a"].use(j["a"]);var S=new j["a"]({});e["a"].config.productionTip=!1,new e["a"]({vuetify:S,render:function(i){return i(C)}}).$mount("#app")},b0bb:function(i,r,t){"use strict";t("b944")},b944:function(i,r,t){}});
//# sourceMappingURL=app.014a4aff.js.map