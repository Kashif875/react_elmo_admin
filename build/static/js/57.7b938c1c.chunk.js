(this.webpackJsonpelmo=this.webpackJsonpelmo||[]).push([[57,25,48,64,65,66,84,97,101,104],{111:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(25),r=a(697),o=(a(376),a(96)),s=a(231),c=a(228),i=a(232),m=a(26),d=a(0),u=a.n(d),p=a(530),v=a(30),f=a(44),E=a(61),g=a(71);t.default=function(){var e=Object(p.a)(),t=e.register,a=e.handleSubmit,b=e.errors,h=(e.reset,Object(d.useState)("")),N=Object(l.a)(h,2),w=N[0],y=(N[1],Object(d.useState)("")),x=Object(l.a)(y,2),O=x[0];x[1];return u.a.createElement("div",null,u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"row no-gutter"},u.a.createElement("div",{className:"d-none d-md-flex col-md-4 col-lg-7 bg-image"}),u.a.createElement("div",{className:"col-md-8 col-lg-5 bg_color"},u.a.createElement("div",{className:"login d-flex align-items-center py-3"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row py-5 text-center"},u.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"})),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-9 col-lg-8 mx-auto"},u.a.createElement("h3",{className:"login-heading"},u.a.createElement("span",{className:"title_elmo"},g.strings.elmo),u.a.createElement("span",{className:"title_admin"},"Admin")),u.a.createElement("p",{className:"mb-4 text-muted discription"},"Please provide the valid informations for a",u.a.createElement("br",null),"seamless sign in process"),u.a.createElement("div",{className:"blank mt-3 mb-3"}),u.a.createElement("form",{onSubmit:a((function(e){console.log(e),Object(f.request)({url:E.default.Endpoints.login,method:E.default.APIMethods.POST,data:{email:e.mailId,password:e.password},isLoader:!0}).then((function(e){var t=e.data.data;localStorage.setItem("token",t.token);var a=Object(n.a)({},t.userData);localStorage.setItem("userData",JSON.stringify(a)),m.history.push("/admin/dashboard")}))}))},u.a.createElement("div",{className:"mt-5"},u.a.createElement("label",{className:"font-bold-16"},"E-mail ID *"),u.a.createElement(s.default,{errors:b,type:"text",value:w,placeholder:"test@gmail.com",name:"mailId",register:t({required:!0,pattern:/\S+@\S+\.\S+/})}),u.a.createElement(o.default,{error:b.mailId,messages:{required:"Please enter mail id",pattern:"Please enter a valid mail id"}})),u.a.createElement("div",{className:"mt-4"},u.a.createElement("label",{className:"font-bold-16"},"Password *"),u.a.createElement(i.default,{errors:b,value:O,placeholder:"Enter Password",type:"password",name:"password",register:t({required:!0})}),u.a.createElement(o.default,{error:b.password,messages:{required:"Please enter password"}})),u.a.createElement("div",{className:"forgot"},u.a.createElement("div",null,u.a.createElement(r.a,Object.assign({},{inputProps:{"aria-label":"Checkbox demo"}},{defaultChecked:!0,color:"success"})),u.a.createElement("span",{className:"small"},"Remember Me")),u.a.createElement("div",null,u.a.createElement(v.a,{to:"/auth/forgot-password"},u.a.createElement("span",{className:"small",href:"#"},"Forgot password?")))),u.a.createElement("div",{className:"mt-5"},u.a.createElement(c.default,{loginButton:!0,label:"Login"})))))))))))}},228:function(e,t,a){"use strict";a.r(t),a.d(t,"NormalButton",(function(){return i}));var n=a(69),l=a(70),r=a(169),o=a(168),s=a(0),c=a.n(s),i=(a(352),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=void 0===t?"":t,n=e.label,l=void 0===n?"":n,r=e.onClick,o=e.id,s=e.type,i=void 0===s?"submit":s,m=e.disabled,d=void 0!==m&&m,u=e.authButton,p=void 0!==u&&u,v=e.loginButton,f=void 0!==v&&v,E=e.dasboardButton,g=void 0!==E&&E,b=e.outlineButton,h=void 0!==b&&b,N=e.outlineEditButton,w=void 0!==N&&N,y=e.rightIcon,x=void 0===y?"":y;return c.a.createElement("div",null,c.a.createElement("button",{id:o,type:i,className:"cursor-pointer \n                     ".concat(p?"authButton":"","\n                     ").concat(f?"loginButton":"","\n                     ").concat(g?"dasboardButton":"","\n                     ").concat(h?"outlineButton":"","\n                     ").concat(w?"outlineEditButton":"","\n\n                     ").concat(a),onClick:r,disabled:d},l,""!==x?c.a.createElement("span",{className:"btn-right-icon ".concat(x)}):null))}}]),a}(s.Component));t.default=i},231:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n);a(361);t.default=function(e){var t=e.placeholder,a=void 0===t?"":t,n=e.register,r=void 0===n?{}:n,o=e.value,s=void 0===o?"":o,c=e.type,i=void 0===c?"text":c,m=(e.onChange,e.name),d=void 0===m?"":m,u=e.maxlength,p=void 0===u?"":u;e.icons,e.GB,e.onWheel;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{name:d,placeholder:a,className:"inputBoxStyle",ref:r,defaultValue:s,type:i,maxlength:p,onWheel:function(e){return e.currentTarget.blur()}}))}},232:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a(0),r=a.n(l);a(362);t.default=function(e){var t=e.placeholder,a=void 0===t?"":t,o=e.register,s=void 0===o?{}:o,c=e.value,i=void 0===c?"":c,m=(e.type,e.onChange,e.name),d=void 0===m?"":m,u=e.maxlength,p=void 0===u?"":u,v=(e.icons,e.GB,e.onWheel,Object(l.useState)("password")),f=Object(n.a)(v,2),E=f[0],g=f[1],b=Object(l.useState)("Show"),h=Object(n.a)(b,2),N=h[0],w=h[1];return r.a.createElement("div",{className:"inputBoxContainer"},r.a.createElement("input",{name:d,placeholder:a,ref:s,defaultValue:i,className:"inputBoxStyless",type:E,maxlength:p,onWheel:function(e){return e.currentTarget.blur()}}),r.a.createElement("p",{onClick:function(){"password"==E?(g("text"),w("Hide")):(g("password"),w("Show"))},className:"mt-3 mr-2"},N))}},242:function(e,t,a){"use strict";a.r(t);var n=a(111),l=a(0),r=a.n(l);t.default=function(){return r.a.createElement(n.default,null)}},352:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},376:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n);t.default=function(e){var t=e.error,a=(e.type,e.messages);return t?l.a.createElement("span",{className:"text-danger fs-13"},a[t.type]?a[t.type]:"Error in field"):null}}}]);
//# sourceMappingURL=57.7b938c1c.chunk.js.map