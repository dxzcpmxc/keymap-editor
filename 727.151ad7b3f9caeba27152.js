"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[727],{727:function(e,n,r){r.r(n),r.d(n,{default:function(){return I}});var t=r(39693),s=r.n(t),i=r(67294),a=r(41051),o=r(2968),l=r(93379),c=r.n(l),d=r(7795),h=r.n(d),u=r(90569),p=r.n(u),m=r(3565),x=r.n(m),y=r(19216),g=r.n(y),f=r(44589),j=r.n(f),b=r(79577),w={};w.styleTagTransform=j(),w.setAttributes=x(),w.insert=p().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=g(),c()(b.Z,w);var v=b.Z&&b.Z.locals?b.Z.locals:void 0,k=r(85893);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function D(e){return e.location}function N(e){var n,r,t=e.name,o=e.explanation,l=e.warnings,c=e.renderWarning,d=void 0===c?D:c,h=(n=(0,i.useState)(0===l.length),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,s,i,a,o=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=i.call(r)).done)&&(o.push(t.value),o.length!==n);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw s}}return o}}(n,r)||function(e,n){if(e){if("string"==typeof e)return Z(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=h[0],p=h[1];return(0,k.jsxs)("div",{className:s()([v.warningCategory,0===l.length&&v.emptyCategory,u&&v.collapsedCategory]).join(" "),children:[(0,k.jsxs)("h3",{onClick:function(){return p(!u)},children:[(0,k.jsx)(a.Z,{className:v.caret,name:"caret-down"})," "," ",t," ",(0,k.jsxs)("em",{children:["(",l.length," issues)"]})]}),(0,k.jsxs)("div",{className:v.warningDetails,children:[(0,k.jsx)("blockquote",{children:o}),l.length>0?(0,k.jsx)("ul",{children:l.map((function(e,n){return(0,k.jsx)("li",{children:d(e)},n)}))}):(0,k.jsx)("p",{children:"No problems"})]})]})}var W=(0,k.jsx)(o.Z,{external:!0,href:"https://github.com/nickcoutsos/keymap-editor/issues",children:"issue"}),I=function(e){var n=e.sanityChecks,r=n.nodeNames,t=n.nodeLabels,s=n.nodeReferences,i=n.deprecations,a=n.layoutMissingPositions;return(0,k.jsxs)("div",{style:{maxWidth:"700px",margin:"0 auto",paddingBottom:"60px"},children:[(0,k.jsx)("h2",{children:"Warnings"}),i.resetBindings.length>0&&(0,k.jsx)(N,{name:"Deprecated/removed behavior",warnings:i.resetBindings,explanation:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{children:(0,k.jsxs)("em",{children:["The ",(0,k.jsx)("code",{children:"&reset"})," behavior has been removed from ZMK in the 3.2 Zephyr upgrade. If your keyboard is bulding from that version of ZMK, make sure to use the ",(0,k.jsx)("code",{children:"&sys_reset"})," behavior instead."]})}),(0,k.jsxs)("p",{children:["For more information see ",(0,k.jsx)(o.Z,{external:!0,href:"https://zmk.dev/blog/2023/04/06/zephyr-3-2#keymap-changes",children:"ZMK - Zephyr 3.2 Update - Keymap Changes"}),"."]})]})}),(0,k.jsx)(N,{name:"Layout row/col positions",warnings:a,explanation:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{children:(0,k.jsxs)("em",{children:["Your keyboard's layout metadata should include a ",(0,k.jsx)("code",{children:"row"}),"and ",(0,k.jsx)("code",{children:"col"})," property for each key in order to generate a readable keymap ",(0,k.jsx)("code",{children:"bindings"})," array."]})}),(0,k.jsxs)("p",{children:["For more information see ",(0,k.jsx)(o.Z,{external:!0,href:"https://github.com/nickcoutsos/keymap-editor/wiki/Defining-keyboard-layouts",children:"Keymap Editor Wiki"}),"."]})]}),renderWarning:function(){}}),(0,k.jsx)(N,{name:"Duplicate node names",warnings:r.duplicates,explanation:(0,k.jsx)("p",{children:(0,k.jsx)("em",{children:"Node names must within the same section must be unique."})}),renderWarning:function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("h4",{children:["Name ",(0,k.jsx)("code",{children:e[0].name})," re-used in:"]}),(0,k.jsx)("ul",{children:e.map((function(e,n){return(0,k.jsx)("li",{children:e.location},n)}))})]})}}),(0,k.jsx)(N,{name:"Re-definitions",warnings:r.redefined,explanation:(0,k.jsx)("p",{children:(0,k.jsx)("em",{children:"Node names cannot use existing ZMK identifiers."})})}),(0,k.jsx)(N,{name:"Macro Passwords",warnings:r.passwordMacros,explanation:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{children:(0,k.jsx)("em",{children:"Using keyboard macros to enter passwords is a security risk and is strongly discouraged."})}),(0,k.jsx)("p",{children:"Recording passwords in your keyboard means that anyone with physical access to your keyboard would have access to credentials stored within it, whether they know to look for it or not. Also note that through this application you are recording keyboard configuration in a Git repository and storing credentials in a code repository is not considered a safe practice (even if the repository is private)."}),(0,k.jsxs)("p",{children:["Any macros listed here have names which seem to suggest that they are used for password entry. If that is the case I would encourage you to remove them and change the associated password(s) if needed. If this is a mistake feel free to create an ",W," to help me avoid false alarms in the future!"]})]})}),(0,k.jsx)(N,{name:"Duplicate labels",warnings:t.duplicates,explanation:(0,k.jsx)("p",{children:(0,k.jsx)("em",{children:"Label property values must be unique throughout the entire keymap."})}),renderWarning:function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("h4",{children:["Name ",(0,k.jsx)("code",{children:e[0].label})," re-used in:"]}),(0,k.jsx)("ul",{children:e.map((function(e,n){return(0,k.jsx)("li",{children:e.location},n)}))})]})}}),(0,k.jsx)(N,{name:"Duplicate node references",warnings:s.duplicates,explanation:(0,k.jsx)("p",{children:(0,k.jsx)("em",{children:"Node references must be unique throughout the entire keymap."})}),renderWarning:function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("h4",{children:["Reference ",(0,k.jsxs)("code",{children:["&",e[0].ref]})," re-used in:"]}),(0,k.jsx)("ul",{children:e.map((function(e,n){return(0,k.jsx)("li",{children:e.location},n)}))})]})}})]})}},79577:function(e,n,r){var t=r(8081),s=r.n(t),i=r(23645),a=r.n(i)()(s());a.push([e.id,"._Et43RIDBS31WGTsJW6Q {\n  margin: 20px 0 35px;\n}\n._Et43RIDBS31WGTsJW6Q h3 {\n  cursor: pointer;\n}\n._Et43RIDBS31WGTsJW6Q h3:hover {\n  color: royalblue;\n}\n\n.UD9L8GtxRyZNCl6a5dsA {\n  color: var(--key-color-base);\n  opacity: 0.7;\n}\n\n.sah4Bu1xq72L7DDemOzU {\n  padding-left: 16px;\n}\n\n.pSk7y6zU9J8U_IybbhZB .rhqw3NH8NqvbeV0idmJz {\n  transform: rotate(-90deg);\n  transition: 100ms;\n}\n\n.pSk7y6zU9J8U_IybbhZB .sah4Bu1xq72L7DDemOzU {\n  display: none;\n}\n",""]),a.locals={warningCategory:"_Et43RIDBS31WGTsJW6Q",emptyCategory:"UD9L8GtxRyZNCl6a5dsA",warningDetails:"sah4Bu1xq72L7DDemOzU",collapsedCategory:"pSk7y6zU9J8U_IybbhZB",caret:"rhqw3NH8NqvbeV0idmJz"},n.Z=a}}]);