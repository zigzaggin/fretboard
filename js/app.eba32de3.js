(function(t){function e(e){for(var s,o,a=e[0],l=e[1],c=e[2],d=0,m=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="fretboard/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2083:function(t,e,n){"use strict";n("6103")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("00b4");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.horizontal?"horizontal":"vertical"],attrs:{id:"app"}},[n("md-app",{staticStyle:{"min-height":"100vh"},attrs:{"md-mode":"reveal"}},[n("md-app-toolbar",{staticClass:"md-primary"},[t.menuVisible?t._e():n("md-button",{staticClass:"md-icon-button",on:{click:t.toggleMenu}},[n("md-icon",[t._v("menu")])],1),n("span",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("Fretboard")]),n("md-menu",{attrs:{"md-align-trigger":"",mdCloseOnClick:!0,mdCloseOnSelect:!0}},[n("md-button",{attrs:{"md-menu-trigger":""}},[t._v("Instrument")]),n("md-menu-content",[n("md-menu-item",{on:{click:t.setGuitar}},[t._v("Guitar")]),n("md-menu-item",{on:{click:t.setBass}},[t._v("Bass")]),n("md-menu-item",{on:{click:t.set5sBass}},[t._v("5 String Bass - Low B")]),n("md-menu-item",{on:{click:t.set5sBassAlt}},[t._v("5 String Bass - High C")]),n("md-menu-item",{on:{click:t.setUkulele}},[t._v("Ukulele")]),n("md-menu-item",{on:{click:t.setMandolin}},[t._v("Mandolin")])],1)],1)],1),n("md-app-drawer",{attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("span",[t._v("Menu")]),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button md-dense",on:{click:t.toggleMenu}},[n("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),n("md-divider"),n("md-list",[n("md-subheader",[t._v("View Options")]),t.isMobile()?t._e():n("md-list-item",[n("md-switch",{staticClass:"md-primary",model:{value:t.horizontal,callback:function(e){t.horizontal=e},expression:"horizontal"}},[t._v("Horizontal")])],1),n("md-list-item",[n("md-switch",{staticClass:"md-primary",model:{value:t.showNotes,callback:function(e){t.showNotes=e},expression:"showNotes"}},[t._v("Show All Notes")])],1),n("md-divider"),n("md-subheader",[t._v("Instrument Options")]),n("md-list-item",[n("md-field",[n("label",[t._v("Strings (Comma Separated)")]),n("md-input",{staticClass:"md-primary",model:{value:t.strings,callback:function(e){t.strings=e},expression:"strings"}})],1)],1),n("md-list-item",[n("md-field",[n("label",[t._v("Fretboard Length")]),n("md-input",{staticClass:"md-primary",model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})],1)],1),n("md-list-item",[n("md-field",[n("label",[t._v("Marks On")]),n("md-input",{staticClass:"md-primary",model:{value:t.marks,callback:function(e){t.marks=e},expression:"marks"}})],1)],1),n("md-divider")],1)],1),n("md-app-content",[t.selectedStrings.length>0?n("div",{staticClass:"neck-container"},[n("Neck",{attrs:{strings:t.selectedStrings,length:t.length,"show-notes":t.showNotes,marks:t.convertedMarks}})],1):n("md-empty-state",{attrs:{"md-icon":"error_outline","md-label":"No Strings Selected","md-description":"You have not specified any strings! Please select an instrument or create a custom string configuration."}},[n("md-button",{staticClass:"md-raised md-primary",on:{click:t.setGuitar}},[t._v(" Set To Guitar ")])],1)],1)],1)],1)},r=[],o=n("2909"),a=(n("a15b"),n("d81d"),n("1276"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"neck"},t._l(t.stringOrder,(function(e,s){return n("String",{key:s,class:0===s?"first":s===t.stringOrder.length-1?"last":"",attrs:{string:e,length:t.length,selected:t.selectedNotes,"show-notes":t.showNotes,marks:t.marks},on:{select:t.noteSelected}})})),1)}),l=[],c=(n("a9e3"),n("4de4"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["string",t.showNotes?"show-notes":""]},t._l(t.notes,(function(e,s){return n("div",{key:s,class:["note",t.selected.indexOf(e)>-1?"selected":"",t.marks.indexOf(s)>-1?"fret-marker":"",12===s?"double-fret":"",0===s?"string-descriptor":""],on:{click:function(n){return t.select(e)}}},[t._v(" "+t._s(e)+" ")])})),0)}),u=[],d=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],m={name:"String",props:{string:{type:String,required:!0},length:{type:Number,default:21},selected:{type:Array,default:function(){return[]}},marks:{type:Array,default:function(){return[3,5,7,9,12,15,17,19]}},showNotes:{type:Boolean,default:!1}},computed:{notes:function(){var t=[],e=d.indexOf(this.string);e>=d.length&&(e=0);for(var n=0;n<this.length;n++)t.push(d[e]),e++,e>=d.length&&(e=0);return t}},methods:{select:function(t){this.$emit("select",t)}}},f=m,p=(n("2083"),n("2877")),h=Object(p["a"])(f,c,u,!1,null,"69db469e",null),g=h.exports,b={name:"Neck",components:{String:g},props:{strings:{type:Array,default:function(){return["E","A","D","G","B","E"]}},length:{type:Number,default:21},showNotes:{type:Boolean,default:!1},marks:{type:Array,default:function(){return[]}}},data:function(){return{selectedNotes:[]}},computed:{stringOrder:function(){return this.strings}},methods:{noteSelected:function(t){this.selectedNotes.indexOf(t)>-1?this.selectedNotes=this.selectedNotes.filter((function(e){return e!==t})):this.selectedNotes.push(t)}}},v=b,k=(n("b98a"),Object(p["a"])(v,a,l,!1,null,"0c68ab7c",null)),y=k.exports,_={name:"app",components:{Neck:y},data:function(){return{menuVisible:!1,showNotes:!1,horizontal:!this.isMobile(),length:21,strings:["E","A","D","G","B","E"].join(", "),marks:[3,5,7,9,12,15,17,19].join(", ")}},computed:{selectedStrings:function(){if(""===this.strings)return[];var t=Object(o["a"])(this.strings.split(",").map((function(t){return t.trim().toUpperCase()})));return this.horizontal?t.reverse():t},convertedMarks:function(){return Object(o["a"])(this.marks.split(",").map((function(t){return parseInt(t.trim())})))}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible},setGuitar:function(){this.strings="E, A, D, G, B, E",this.length=21},setBass:function(){this.strings="E, A, D, G",this.length=21},set5sBass:function(){this.strings="B, E, A, D, G",this.length=21},set5sBassAlt:function(){this.strings="E, A, D, G, C",this.length=21},setUkulele:function(){this.strings="G, C, E, A",this.length=12},setMandolin:function(){this.strings="G, G, D, D, A, A, E, E",this.length=20}}},w=_,O=(n("5c0b"),Object(p["a"])(w,i,r,!1,null,null,null)),S=O.exports,C=n("43f9"),N=n.n(C);n("51de");s["default"].config.productionTip=!1,s["default"].mixin({methods:{isMobile:function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}}}),s["default"].use(N.a),new s["default"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6103:function(t,e,n){},"70c7":function(t,e,n){},"9c0c":function(t,e,n){},b98a:function(t,e,n){"use strict";n("70c7")}});
//# sourceMappingURL=app.eba32de3.js.map