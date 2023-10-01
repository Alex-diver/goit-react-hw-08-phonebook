"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{8445:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r=t(2791),o=t(4270),i=t(9434),a=t(9439),u="NOT_FOUND";var c=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?c:r,i=t.maxSize,a=void 0===i?1:i,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),d=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(e,o){r(e)===u&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function p(){var e=d.get(arguments);if(e===u){if(e=n.apply(null,arguments),l){var t=d.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return p.clearCache=function(){return d.clear()},p}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,d=l.memoizeOptions,p=void 0===d?t:d,f=Array.isArray(p)?p:[p],x=s(r),m=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),h=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:x,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var p,f,x,m,h,g,v,b,y,j,w,Z,z,k,C,A,q=d(l),E=function(n){return n.filter},F=function(n){return n.contacts.items},P=function(n){return n.contacts.isLoading},N=function(n){return n.contacts.error},S=q([F,E],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),I=t(5119),O=t(9085),_=t(168),D=t(6487),L=D.zo.form(p||(p=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 30px;\n"]))),R=D.zo.label(f||(f=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  row-gap: 5px;\n  color: white;\n  max-width: 300px;\n  font-size: 16px;\n"]))),K=D.zo.span(x||(x=(0,_.Z)(["\n  margin-bottom: 5px;\n"]))),T=D.zo.input(m||(m=(0,_.Z)(["\n  font-size: 16px;\n  border-radius: 5px solid blue;\n  padding: 5px;\n  &:focus,\n  &:hover,\n  &:active {\n    border: 2px solid blue;\n    outline: transparent;\n  }\n"]))),B=D.zo.button(h||(h=(0,_.Z)(["\n  color: gray;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid;\n  cursor: pointer;\n\n  &:focus,\n  &:hover {\n    border: 1px solid blue;\n    background: dodgerblue;\n    color: black;\n  }\n"]))),G=t(6382),J=t(3329),M=function(){var n=(0,i.I0)(),e=(0,i.v9)(F),t=(0,r.useState)(""),o=(0,a.Z)(t,2),u=o[0],c=o[1],l=(0,r.useState)(""),s=(0,a.Z)(l,2),d=s[0],p=s[1],f=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?c(r):"number"===t&&p(r)},x=function(t){var r=t.name,o=t.number,i={id:(0,G.x0)(),name:r,number:o},a=e.find((function(n){return n.name===r||n.number===o}));a?O.Am.info("".concat(r," is already in contacts.")):n((0,I.uK)(i))},m=function(){c(""),p("")};return(0,J.jsx)("div",{children:(0,J.jsxs)(L,{onSubmit:function(n){n.preventDefault(),x({name:u,number:d}),m()},children:[(0,J.jsxs)(R,{children:[(0,J.jsx)(K,{children:"Name "}),(0,J.jsx)(T,{type:"text",value:u,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Annie Copeland",onChange:f})]}),(0,J.jsxs)(R,{children:[(0,J.jsx)(K,{children:" Number "}),(0,J.jsx)(T,{type:"tel",value:d,name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"227-91-26",onChange:f})]}),(0,J.jsx)(B,{type:"submit",children:"Add contact"})]})})},U=t(3784),Y=(0,D.ZP)(U.q)(g||(g=(0,_.Z)(["\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  background-color: green;\n"]))),$=D.ZP.ul(v||(v=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  row-gap: 10px;\n  margin: 0;\n"]))),H=D.ZP.li(b||(b=(0,_.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 15px;\n  color: white;\n"]))),Q=D.ZP.button(y||(y=(0,_.Z)(["\n  width: 75px;\n  color: gray;\n  padding: 2px;\n  border-radius: 5px;\n  border: 1px solid;\n  margin-left: auto;\n  cursor: pointer;\n\n  &:focus,\n  &:hover {\n    border: 1px solid blue;\n    background: dodgerblue;\n    color: black;\n  }\n"]))),V=D.ZP.p(j||(j=(0,_.Z)(["\n  color: white;\n"]))),W=function(){var n=(0,i.v9)(S),e=(0,i.I0)(),t=(0,i.v9)(P),r=(0,i.v9)(N);return(null===n||void 0===n||!n.length)&&!r&!t?(0,J.jsx)(V,{children:"No contacts added yet."}):r?(0,J.jsx)("p",{children:r}):(0,J.jsx)($,{children:n.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,J.jsxs)(H,{children:[(0,J.jsx)(Y,{name:r}),r,": ",o,(0,J.jsx)(Q,{onClick:function(){return e((0,I.GK)(t))},children:"Delete"})]},t)}))})},X=t(5496),nn=D.zo.input(w||(w=(0,_.Z)(["\n  font-size: 16px;\n  border-radius: 5px solid blue;\n  padding: 5px;\n  margin-bottom: 10px;\n  &:focus,\n  &:hover,\n  &:active {\n    border: 2px solid blue;\n    outline: transparent;\n  }\n"]))),en=function(){var n=(0,i.I0)(),e=(0,i.v9)(E);return(0,J.jsx)(nn,{type:"text",value:e,onChange:function(e){return n((0,X.T)(e.target.value.trim()))}})},tn=D.zo.div(Z||(Z=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 600px;\n  margin: 0 auto;\n"]))),rn=D.zo.div(z||(z=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 2px blue solid;\n  border-radius: 5px;\n  min-width: 350px;\n"]))),on=D.zo.h1(k||(k=(0,_.Z)(["\n  margin-bottom: 20px;\n  font-size: 32px;\n  text-align: center;\n  color: white;\n"]))),an=D.zo.p(C||(C=(0,_.Z)(["\n  margin-bottom: 10px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"]))),un=D.zo.p(A||(A=(0,_.Z)(["\n  margin-bottom: 3px;\n  font-size: 16px;\n  text-align: center;\n  color: white;\n"])));function cn(){var n=(0,i.I0)();return(0,r.useEffect)((function(){n((0,I.yF)())}),[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(o.q,{children:(0,J.jsx)("title",{children:"Your Contacts"})}),(0,J.jsxs)(tn,{children:[(0,J.jsx)(on,{children:"Phonebook"}),(0,J.jsx)(M,{}),(0,J.jsx)(an,{children:"Contacts"}),(0,J.jsxs)(rn,{children:[(0,J.jsx)(un,{children:"Find contacts by name"}),(0,J.jsx)(en,{}),(0,J.jsx)(W,{})]})]})]})}}}]);
//# sourceMappingURL=445.199704c3.chunk.js.map