(this["webpackJsonpfurniture-shop"]=this["webpackJsonpfurniture-shop"]||[]).push([[0],{103:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(27),i=a.n(r),o=(a(82),a(7)),l=a(8),u=a(64),d=a(17),j=a(30),m=a.n(j),b="https://morgan-shop.herokuapp.com",O=[{title:"Newness",value:"newness"},{title:"Price high to low",value:"high-to-low"},{title:"Price low to high",value:"low-to-high"}],p=(a(103),a(41)),g=a(5),h=a(66),v=a(68),x=a(74),f=a(69),N=a.n(f);function C(){var e=Object(v.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return C=function(){return e},e}var y=Object(x.a)(C()),I=function(){return Object(c.jsx)("div",{style:{position:"absolute",width:"100vw",height:"100vh",background:"white",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(c.jsx)(N.a,{css:y,size:150,color:"#123abc",loading:!0})})},w=a(21),P=a.n(w),S=a(31),k="FETCH_CATEGORIES",L="CATEGORIES_FETCHED",T=function(e){return{type:L,payload:{categories:e}}},E=function(){return function(){var e=Object(S.a)(P.a.mark((function e(t){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:k}),e.prev=1,e.next=4,m.a.get("/categories");case 4:a=e.sent,c=a.data.categories,t(T(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Fetch categories error:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()};a(111);var A=a.p+"static/media/logo.8b4ddaea.svg",B=a.p+"static/media/ic_search.b843e723.svg",R=a.p+"static/media/ic_profile.7d0c63c8.svg",_=a.p+"static/media/ic_cart.e0c4faad.svg";var D=Object(d.b)((function(e){return{categories:Object(p.a)(e.categories.list).sort((function(e,t){return e.menuOrder-t.menuOrder})),categoriesLoading:e.categories.loading,cartItems:Object.values(e.cart.items)}}),(function(e){return{fetchCategories:function(){return e(E())}}}))((function(e){var t=e.categories,a=e.cartItems,s=e.fetchCategories,r=e.categoriesLoading,i=Object(n.useState)(0),l=Object(g.a)(i,2),u=l[0],d=l[1],j=Object(n.useState)(!1),m=Object(g.a)(j,2),b=m[0],O=m[1],p=Object(n.useState)(!1),v=Object(g.a)(p,2),x=v[0],f=v[1],N=Object(n.useState)(!0),C=Object(g.a)(N,2),y=C[0],w=C[1],P=function(){window.innerWidth<1024?w(!1):(w(!0),f(!1))};return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=t}),[t]),Object(n.useEffect)((function(){if(a&&a.addEventListener){var t=function(e){return c.current(e)};return a.addEventListener(e,t),function(){a.removeEventListener(e,t)}}}),[e,a])}("resize",P),Object(n.useEffect)(P,[]),Object(n.useEffect)((function(){t.length||r||s(),d(a.reduce((function(e,t){return e+t.count}),0))}),[a]),Object(n.useEffect)((function(){w(window.innerWidth>1023)}),[]),t&&t.length?Object(c.jsxs)("div",{className:"Navigation",children:[Object(c.jsx)("div",{className:"Navigation-Components",children:Object(c.jsxs)("div",{className:"Navigation-Container",children:[Object(c.jsx)("div",{className:"Navigation-BurgerContainer",children:Object(c.jsx)(h.a,{buttonColor:"transparent",barColor:"#121212",toggleButton:function(){return f(!x)},isActive:x,className:"Navigation-BurgerButton",buttonWidth:"14"})}),Object(c.jsx)(o.c,{className:"Navigation-LogoLink",to:"/",exact:!0,children:Object(c.jsx)("img",{className:"Navigation-Logo",alt:"morgan",src:A,draggable:!1,onClick:function(){return f(!1)}})}),x||y?Object(c.jsxs)("ul",{className:"Navigation-List Navigation-CategoriesList",children:[x&&!y?Object(c.jsx)("div",{className:"Navigation-ProductsTitle",children:"Products"}):null,t.map((function(e){return Object(c.jsx)("li",{className:"Navigation-ListItem",children:Object(c.jsx)(o.c,{className:"Navigation-Link",onClick:function(){f(!1)},to:"/goods/".concat(e.alias),activeClassName:"Navigation-Link_Active",exact:!0,children:e.title})},e.id)}))]}):null,Object(c.jsxs)("ul",{className:"Navigation-List Navigation-MobileList",children:[x||y?Object(c.jsx)("li",{className:"Navigation-ListItem Navigation-ListItemSearch",children:Object(c.jsx)(o.c,{className:"Navigation-Link",to:"/search",activeClassName:"Navigation-Link_Active",exact:!0,children:Object(c.jsx)("img",{src:B,alt:"Search",draggable:!1,className:"Navigation-LinkIcon"})})}):null,!x||y?Object(c.jsx)("li",{className:"Navigation-ListItem",children:Object(c.jsx)(o.c,{className:"Navigation-Link",to:"/login",activeClassName:"Navigation-Link_Active",exact:!0,children:Object(c.jsx)("img",{src:R,alt:"Profile",draggable:!1})})}):null,!x||y?Object(c.jsx)("li",{className:"Navigation-ListItem",children:Object(c.jsxs)(o.c,{className:"Navigation-Link",to:"/cart",activeClassName:"Navigation-Link_Active",exact:!0,children:[Object(c.jsx)("img",{src:_,alt:"Cart",draggable:!1,onMouseEnter:u>0?function(){return O(!0)}:null}),Object(c.jsx)("div",{className:"Navigation-CartCount",children:u||"0"})]})}):null]})]})}),b?Object(c.jsx)("div",{className:"Navigation-CartPopUpContainer",children:Object(c.jsx)(ye,{items:a,onMouseLeave:function(){return O(!1)}})}):null]}):Object(c.jsx)(I,{})}));a(113);a(114);a(115);a(116);a(117);var F=a(3),U=a(70),M=a.n(U),Q={email:new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"),password:new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$"),fullName:new RegExp("(?=^.{0,40}$)^[a-zA-Z-]+\\s[a-zA-Z-]+$")},W={email:"Please make sure your email format is correct",password:"Please enter min 6 char and has at least one letter and one number",fullName:"Please enter your full name"},H=function(e,t){return t&&t.length?Q[e].test(t)?{ok:!0}:{ok:!1,message:W[e]}:{ok:!1,message:"".concat(M.a.startCase(e)," should not be empty")}},V=(a(119),a(22),a.p+"static/media/ic_eye.8e2a95b0.svg"),z=a.p+"static/media/ic_eye_slash.bbcf58dd.svg";var Y=a.p+"static/media/ic_google.1fcb7b68.svg",Z=a.p+"static/media/ic_facebook.3675488b.svg";a(120);a(121);a(122);var G=a.p+"static/media/paper_bird.73d95445.svg";a(123);var $=function(e){return"\xa3"+(+e).toFixed(2)};a(124);var K=a.p+"static/media/ic_minus.61942494.svg",J=a.p+"static/media/ic_plus.3417bbc1.svg",q=a.p+"static/media/ic_close.b8dc84ef.svg";a(125);a(126);var X=function(e){var t=e.items,a=e.onMouseLeave;return Object(c.jsxs)("div",{className:"CartPopUp",onMouseLeave:a,children:[Object(c.jsx)("div",{className:"CartPopUp-ProductsContainer",children:t.map((function(e){var t=e.product,a=e.count;return Object(c.jsxs)("div",{className:"CartPopUp-ProductContainer",children:[Object(c.jsx)("div",{className:"CartPopUp-ProductImageContainer",children:Object(c.jsx)("img",{className:"CartPopUp-ProductImage",src:b+t.image,alt:"",draggable:!1})}),Object(c.jsxs)("div",{className:"CartPopUp-ProductInfo",children:[Object(c.jsx)("div",{className:"CartPopUp-ProductName",children:t.name}),Object(c.jsxs)("div",{className:"CartPopUp-ProductDetails",children:[Object(c.jsxs)("span",{className:"CartPopUp-ProductCount",children:[a," x "]}),Object(c.jsx)("span",{className:"CartPopUp-ProductPrice",children:$(t.price)})]})]})]},t.id)}))}),Object(c.jsx)("div",{className:"CartPopUp-ButtonContainer",children:Object(c.jsx)(pe,{className:"CartPopUp-Button",title:"go to checkout",link:"/cart"})})]})},ee=(a(127),a.p+"static/media/ic_add.2a40c51a.svg"),te=a.p+"static/media/ic_remove_dark.bea75c61.svg",ae="ADD_TO_CART",ce="CLEAN_CART",ne="REMOVE_ITEM",se=function(e){return{type:ne,payload:{productId:e}}},re="INCREASE_QUANTITY",ie="REDUCE_QUANTITY";var oe=Object(d.b)((function(e,t){return{isInCart:!!e.cart.items[t.product.id]}}),(function(e){return{addToCart:function(t){return e(function(e){return{type:ae,payload:{product:e}}}(t))},removeItem:function(t){return e(se(t))}}}))((function(e){var t=e.product,a=e.addToCart,n=e.removeItem,s=e.isInCart;return Object(c.jsxs)("div",{className:"Product",children:[Object(c.jsx)("img",{className:"Product-Image",alt:"",src:b+t.image,draggable:!1}),Object(c.jsx)("button",{className:"Product-Button",onClick:function(){return function(e){s?n(e.id):a(e)}(t)},children:Object(c.jsx)("img",{alt:"",src:s?te:ee,draggable:!1})}),Object(c.jsxs)("div",{className:"Product-Info",children:[Object(c.jsx)("div",{className:"Product-Name",children:t.name}),Object(c.jsx)("div",{className:"Product-Price",children:$(t.price)})]})]})})),le=(a(128),a.p+"static/media/ic_arrow.882d8bc5.svg"),ue=a.p+"static/media/ic_checkmark.bf514abb.svg";a(158),a(71),a(129);var de=D,je=function(e){var t=e.title,a=e.onClick;return Object(c.jsx)("button",{className:"WhiteButton",onClick:a,children:t})},me=function(e){return Object(c.jsx)("div",{className:"Title",children:e.children})},be=function(e){var t=e.label,a=e.labelHint,n=e.link,s=e.linkText,r=e.placeholder,i=e.type,l=void 0===i?"text":i,u=e.value,d=e.onChange,j=e.onFocusOut,m=e.error,b=e.icon,O=e.onIconClick;return Object(c.jsxs)("div",{className:"CustomInput",children:[Object(c.jsxs)("div",{className:"CustomInput-Header",children:[Object(c.jsxs)("div",{className:"CustomInput-Label",children:[t,Object(c.jsxs)("span",{className:"CustomInput-LabelHint",children:[" ",a]})]}),n?Object(c.jsx)(o.c,{className:"CustomInput-Link",to:n,children:s}):null]}),Object(c.jsxs)("div",{className:"CustomInput-Container",children:[Object(c.jsx)("input",{className:m?"CustomInput-Field CustomInput-Field_error":"CustomInput-Field",type:l,placeholder:r,value:u,onChange:d,onBlur:j}),b?Object(c.jsx)("img",{className:"CustomInput-Icon",alt:"",src:b,draggable:!1,onClick:O}):null]}),m?Object(c.jsx)("div",{className:"CustomInput-Error",children:m}):null]})},Oe=I,pe=function(e){var t=e.title,a=e.link,n=e.onClick;return a?Object(c.jsx)(o.c,{to:a,children:Object(c.jsx)("button",{className:"BlackButton",children:t})}):Object(c.jsx)("button",{className:"BlackButton",onClick:n,children:t})},ge=function(e){var t=e.goToSignUp,a=Object(l.f)(),s=Object(n.useState)(""),r=Object(g.a)(s,2),i=r[0],o=r[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),j=d[0],m=d[1],b=Object(n.useState)({}),O=Object(g.a)(b,2),p=O[0],h=O[1],v=Object(n.useState)(!1),x=Object(g.a)(v,2),f=x[0],N=x[1];return Object(c.jsx)("div",{className:"LoginComponent",children:Object(c.jsxs)("div",{className:"LoginComponent-Container Container",children:[Object(c.jsx)(me,{children:"login"}),Object(c.jsxs)("form",{className:"LoginComponent-Form",children:[Object(c.jsx)("div",{className:"LoginComponent-FormInput",children:Object(c.jsx)(be,{label:"Email",placeholder:"Enter your email",value:i,onChange:function(e){o(e.target.value)},error:p.email,onFocusOut:function(e){var t=H("email",e.target.value);h(Object(F.a)(Object(F.a)({},p),{},{email:t.message}))}})}),Object(c.jsx)("div",{className:"LoginComponent-FormInput",children:Object(c.jsx)(be,{label:"Password",type:f?"text":"password",placeholder:"Enter your password",link:"/reset-password",linkText:"Forgotten your password?",value:j,onChange:function(e){m(e.target.value)},error:p.password,onFocusOut:function(e){var t=H("password",e.target.value);h(Object(F.a)(Object(F.a)({},p),{},{password:t.message}))},icon:f?z:V,onIconClick:function(){return N(!f)}})})]}),Object(c.jsx)("div",{className:"LoginComponent-LoginButtonWrapper",children:Object(c.jsx)(pe,{title:"login",onClick:function(){var e=H("email",i),t=H("password",j);return e.ok&&t.ok?a.push("/"):h({email:e.message,password:t.message})}})}),Object(c.jsxs)("div",{className:"LoginComponent-CreateAccount",children:[Object(c.jsx)("div",{className:"LoginComponent-CreateAccountTitle",children:"Don't have an account?"}),Object(c.jsx)("div",{className:"LoginComponent-CreateAccountLink",onClick:t,children:"Create an account"})]}),Object(c.jsx)("div",{className:"LoginComponent-SocialButtonsWrapper",children:Object(c.jsx)(he,{className:"LoginComponent-SocialButtons"})})]})})},he=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"Separator",children:"or"}),Object(c.jsxs)("div",{className:"ThirdPartyLoginButtons",children:[Object(c.jsxs)("button",{className:"ThirdPartyLoginButtons-Button",children:[Object(c.jsx)("img",{className:"ThirdPartyLoginButtons-ButtonImage",alt:"G",src:Y,draggable:!1}),Object(c.jsx)("span",{className:"ThirdPartyLoginButtons-ButtonText",children:"With Google"})]}),Object(c.jsxs)("button",{className:"ThirdPartyLoginButtons-Button",children:[Object(c.jsx)("img",{className:"ThirdPartyLoginButtons-ButtonImage",alt:"f",src:Z,draggable:!1}),Object(c.jsx)("span",{className:"ThirdPartyLoginButtons-ButtonText",children:"With Facebook"})]})]})]})},ve=function(e){var t=e.onSubmit,a=Object(n.useState)(""),s=Object(g.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)({}),u=Object(g.a)(l,2),d=u[0],j=u[1];return Object(c.jsx)("div",{className:"ResetPasswordWrapper",children:Object(c.jsxs)("div",{className:"ResetPassword Container",children:[Object(c.jsx)(me,{children:"RESET YOUR PASSWORD"}),Object(c.jsxs)("div",{className:"ResetPassword-Container",children:[Object(c.jsx)("p",{className:"ResetPassword-Text",children:"Enter the email address for your Morgan account and we\u2019ll send a single-use password reset link."}),Object(c.jsx)("p",{className:"ResetPassword-Text",children:"This link will expire after 24 hours."}),Object(c.jsx)("div",{className:"ResetPassword-InputContainer",children:Object(c.jsx)(be,{className:"ResetPassword-Input",label:"Email",placeholder:"Enter your email",onChange:function(e){i(e.target.value)},error:d.email,onFocusOut:function(e){var t=H("email",e.target.value);j(Object(F.a)(Object(F.a)({},d),{},{email:t.message}))}})}),Object(c.jsx)("div",{className:"ResetPassword-ButtonContainer",children:Object(c.jsx)(pe,{title:"send a password reset link",onClick:function(){var e=H("email",r);return e.ok?t(r):j({email:e.message})}})}),Object(c.jsx)("div",{className:"ResetPassword-LinkContainer",children:Object(c.jsx)(o.c,{className:"ResetPassword-LoginLink",to:"/login",children:"Back to login"})})]})]})})},xe=function(e){var t=e.email;return Object(c.jsx)("div",{className:"ResetPasswordSuccessWrapper",children:Object(c.jsxs)("div",{className:"ResetPasswordSuccess Container",children:[Object(c.jsx)(me,{children:"YOUR LINK HAS BEEN SENT"}),Object(c.jsxs)("div",{className:"ResetPasswordSuccess-Container",children:[Object(c.jsx)("img",{className:"ResetPasswordSuccess-Image",alt:"",src:G,draggable:!1}),Object(c.jsx)("div",{className:"ResetPasswordSuccess-Text",children:"We have sent a password reset email to your address:"}),Object(c.jsx)("div",{className:"ResetPasswordSuccess-Email",children:t}),Object(c.jsx)("div",{className:"ResetPasswordSuccess-SubInfo",children:"If you can\u2019t find the email, please check your junk folder."})]})]})})},fe=function(e){var t=e.goToSignIn,a=Object(l.f)(),s=Object(n.useState)(""),r=Object(g.a)(s,2),i=r[0],o=r[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),j=d[0],m=d[1],b=Object(n.useState)(""),O=Object(g.a)(b,2),p=O[0],h=O[1],v=Object(n.useState)({}),x=Object(g.a)(v,2),f=x[0],N=x[1],C=Object(n.useState)(!1),y=Object(g.a)(C,2),I=y[0],w=y[1];return Object(c.jsx)("div",{className:"CreateAccountComponentWrapper",children:Object(c.jsxs)("div",{className:"CreateAccountComponent Container",children:[Object(c.jsx)(me,{children:"CREATE AN ACCOUNT"}),Object(c.jsxs)("div",{className:"CreateAccountComponent-Container",children:[Object(c.jsxs)("form",{className:"CreateAccountComponent-Form",children:[Object(c.jsx)("div",{className:"CreateAccountComponent-FormInput",children:Object(c.jsx)(be,{label:"Full name",placeholder:"Enter your full name",value:i,onChange:function(e){o(e.target.value)},error:f.fullName,onFocusOut:function(e){var t=H("fullName",e.target.value);N(Object(F.a)(Object(F.a)({},f),{},{fullName:t.message}))}})}),Object(c.jsx)("div",{className:"CreateAccountComponent-FormInput",children:Object(c.jsx)(be,{label:"Email",placeholder:"Enter your email",value:j,onChange:function(e){m(e.target.value)},error:f.email,onFocusOut:function(e){var t=H("email",e.target.value);N(Object(F.a)(Object(F.a)({},f),{},{email:t.message}))}})}),Object(c.jsx)("div",{className:"CreateAccountComponent-FormInput",children:Object(c.jsx)(be,{className:"CreateAccountComponent-FormInput",label:"Password",type:I?"text":"password",placeholder:"Enter your password",labelHint:"(min 6 char)",value:p,onChange:function(e){h(e.target.value)},error:f.password,onFocusOut:function(e){var t=H("password",e.target.value);N(Object(F.a)(Object(F.a)({},f),{},{password:t.message}))},icon:I?z:V,onIconClick:function(){return w(!I)}})})]}),Object(c.jsxs)("div",{className:"CreateAccountComponent-AgreeText",children:["By creating an account you agree to the website",Object(c.jsx)("a",{className:"CreateAccountComponent-AgreeLink",href:"/",children:" terms and conditions "}),"and our",Object(c.jsx)("a",{className:"CreateAccountComponent-AgreeLink",href:"/",children:" privacy notice "}),"."]}),Object(c.jsx)("div",{className:"CreateAccountComponent-LoginButtonWrapper",children:Object(c.jsx)(pe,{title:"CREATE AN ACCOUNT",onClick:function(){var e=H("fullName",i),t=H("email",j),c=H("password",p);return t.ok&&c.ok?a.push("/"):N({fullName:e.message,email:t.message,password:c.message})}})}),Object(c.jsxs)("div",{className:"CreateAccountComponent-Login",children:[Object(c.jsx)("div",{className:"CreateAccountComponent-LoginTitle",children:"Have an account?"}),Object(c.jsx)("div",{className:"CreateAccountComponent-LoginLink",onClick:t,children:"Login"})]}),Object(c.jsx)("div",{className:"CreateAccountComponent-SocialButtonsWrapper",children:Object(c.jsx)(he,{})})]})]})})},Ne=function(e){var t=e.items,a=e.removeItem,n=e.increaseQuantity,s=e.reduceQuantity,r=e.onSubmit;return Object(c.jsxs)("div",{className:"Cart",children:[Object(c.jsx)("div",{className:"Cart-FullOrder",children:t.map((function(e){var t=e.product,r=e.count;return Object(c.jsx)("div",{className:"Cart-Product",children:Object(c.jsx)(Ce,{product:t,count:r,increaseQuantity:n,reduceQuantity:s,removeItem:a})},t.id)}))}),Object(c.jsxs)("div",{className:"Cart-SummaryOrder-Container",children:[Object(c.jsxs)("div",{className:"Cart-SummaryOrder",children:[Object(c.jsxs)("div",{className:"Cart-SummaryContainer",children:[Object(c.jsx)("div",{className:"Cart-SummaryTitle",children:"Order Summary"}),Object(c.jsxs)("div",{className:"Cart-SummaryProducts",children:[t.map((function(e){var t=e.product;return Object(c.jsxs)("div",{className:"Cart-SummaryProduct",children:[Object(c.jsx)("div",{className:"Cart-SummaryProductName",children:t.name}),Object(c.jsx)("div",{className:"Cart-SummaryProductPrice",children:$(t.price)})]},t.id)})),Object(c.jsxs)("div",{className:"Cart-SummaryProduct",children:[Object(c.jsx)("div",{className:"Cart-SummaryProductName",children:"Express Delivery"}),Object(c.jsx)("div",{className:"Cart-SummaryProductPrice",children:$(10)})]})]}),Object(c.jsxs)("div",{className:"Cart-SummaryTotalContainer",children:[Object(c.jsx)("span",{className:"Cart-TotalTitle",children:"Estimated Total"}),Object(c.jsx)("span",{className:"Cart-TotalSum",children:$(t.reduce((function(e,t){return e+t.product.price*t.count}),0)+10)})]})]}),Object(c.jsx)("div",{className:"Cart-CheckoutButtonContainer",children:Object(c.jsx)(pe,{className:"Cart-CheckoutButton",title:"checkout",onClick:r})})]}),Object(c.jsx)(o.c,{className:"Cart-HomeLink",to:"/",children:"Continue shopping"})]})]})},Ce=function(e){var t=e.product,a=e.count,n=e.removeItem,s=e.increaseQuantity,r=e.reduceQuantity;return Object(c.jsx)("div",{className:"CartItem",children:Object(c.jsxs)("div",{className:"CartItem-Container",children:[Object(c.jsx)("img",{className:"CartItem-Image",draggable:!1,alt:"",src:b+t.image}),Object(c.jsxs)("div",{className:"CartItem-Main",children:[Object(c.jsxs)("div",{className:"CartItem-Info",children:[Object(c.jsx)("div",{className:"CartItem-Category",children:t.category.title}),Object(c.jsx)("div",{className:"CartItem-Name",children:t.name})]}),Object(c.jsxs)("div",{className:"CartItem-QuantitySection",children:[Object(c.jsx)("span",{className:"CartItem-QuantityLabel",children:"Quantity"}),Object(c.jsxs)("div",{className:"CartItem-QuantityManager",children:[Object(c.jsx)("button",{className:"CartItem-ReduceQuantity",disabled:1===a,onClick:function(){return r(t.id)},children:Object(c.jsx)("img",{src:K,alt:"-",draggable:!1})}),Object(c.jsx)("div",{className:"CartItem-Quantity",children:a}),Object(c.jsx)("button",{className:"CartItem-IncreaseQuantity",onClick:function(){return s(t.id)},children:Object(c.jsx)("img",{src:J,alt:"+",draggable:!1})})]})]}),Object(c.jsx)("img",{className:"CartItem-Remove",onClick:function(){return n(t.id)},alt:"x",src:q,draggable:!1}),Object(c.jsx)("div",{className:"CartItem-Price",children:$(t.price*a)})]})]})})},ye=X,Ie=oe,we=function(e){var t=e.options,a=e.onChange,s=Object(n.useState)(!1),r=Object(g.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(t[0]),u=Object(g.a)(l,2),d=u[0],j=u[1];return Object(c.jsxs)("div",{className:"Dropdown Dropdown-Container",children:[Object(c.jsxs)("div",{className:"Dropdown-Header",onClick:function(){return o(!i)},children:[d.title||t[0].title,Object(c.jsx)("img",{className:"Dropdown-Arrow",draggable:!1,alt:"",src:le})]}),i&&Object(c.jsx)("div",{className:"Dropdown-ListContainer",children:Object(c.jsx)("ul",{className:"Dropdown-List",children:t.map((function(e){return Object(c.jsxs)("li",{className:"Dropdown-ListItem",onClick:function(){return function(e){j(e),o(!1),a(e.value)}(e)},children:[e.title,e.value===d.value?Object(c.jsx)("img",{alt:"",src:ue,draggable:!1}):null]},e.value)}))})})]})},Pe="FETCH_PRODUCTS",Se="PRODUCTS_FETCHED",ke=function(e){var t=e.count,a=e.products;return{type:Se,payload:{count:t,products:a}}},Le="LOAD_MORE_PRODUCTS",Te="MORE_PRODUCTS_LOADED",Ee=function(e){var t=e.count,a=e.products;return{type:Te,payload:{count:t,products:a}}},Ae=function(){var e=Object(S.a)(P.a.mark((function e(t){var a,c,n,s,r,i,o,l,u,d,j,b,O,p,g,h;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.categoryId,c=t.sortType,n=void 0===c?"newness":c,s=t.skip,r=void 0===s?0:s,i=t.limit,o=void 0===i?12:i,e.prev=1,e.next=4,m.a.get("/products");case 4:l=e.sent,u=l.data.products,e.t0=n,e.next="high-to-low"===e.t0?9:"low-to-high"===e.t0?11:(e.t0,13);break;case 9:return d=u.sort((function(e,t){return t.price-e.price})),e.abrupt("break",15);case 11:return d=u.sort((function(e,t){return e.price-t.price})),e.abrupt("break",15);case 13:return d=u.sort((function(e,t){return new Date(t.timeStamp)-new Date(e.timeStamp)})),e.abrupt("break",15);case 15:return j=d.filter((function(e){return!a||e.categoryId===a})),b=j.slice(r,o+r),e.next=19,m.a.get("/categories");case 19:return O=e.sent,p=O.data.categories,g=b.map((function(e){return Object(F.a)(Object(F.a)({},e),{},{category:p.find((function(t){return t.id===e.categoryId}))})})),h=j.length,e.abrupt("return",{products:g,count:h});case 26:e.prev=26,e.t1=e.catch(1),console.error("Fetch products error:",e.t1);case 29:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(t){return e.apply(this,arguments)}}();a(134);var Be=Object(l.g)(Object(d.b)((function(e,t){var a=e.categories.list.find((function(e){return e.alias===t.match.params.category}));return{products:e.products.list,hasMore:e.products.hasMore,categoryId:a&&a.id,categoryTitle:a&&a.title}}),(function(e){return{fetchProducts:function(t){return e(function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){var c,n,s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Pe}),t.next=3,Ae(e);case 3:c=t.sent,n=c.count,s=c.products,a(ke({count:n,products:s}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},loadMoreProducts:function(t){return e(function(e){return function(){var t=Object(S.a)(P.a.mark((function t(a){var c,n,s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Le}),t.next=3,Ae(e);case 3:c=t.sent,n=c.count,s=c.products,a(Ee({count:n,products:s}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.products,a=e.fetchProducts,s=e.loadMoreProducts,r=e.categoryId,i=e.hasMore,o=(e.categoryTitle,Object(n.useState)(O[0].value)),l=Object(g.a)(o,2),u=l[0],d=l[1];return Object(n.useEffect)((function(){a({categoryId:r})}),[r]),t&&t.length?Object(c.jsx)("div",{className:"Container",children:Object(c.jsxs)("div",{className:"Products",children:[Object(c.jsxs)("div",{className:"Products-Sort",children:[Object(c.jsx)("span",{className:"Products-SortTitle",children:"Sort by:"}),Object(c.jsx)(we,{options:O,onChange:function(e){d(e),a({categoryId:r,sortType:e})}})]}),Object(c.jsx)("div",{className:"Products-ProductGrid",children:t.map((function(e){return Object(c.jsx)(Ie,{className:"Products-Product",product:e},e.id)}))}),i?Object(c.jsx)("button",{className:"Products-LoadMore",onClick:function(){var e=t.length;s({categoryId:r,sortType:u,skip:e,limit:4})},children:Object(c.jsx)("b",{children:"Show more"})}):null]})}):Object(c.jsx)("div",{children:"There is no products in this category yet"})})));a(135);var Re=Object(d.b)((function(e){return{categories:e.categories.list}}),(function(e){return{fetchCategories:function(){return e(E())}}}))((function(e){e.products,e.fetchProducts;var t=e.categories,a=e.fetchCategories;return Object(n.useEffect)((function(){t.length||a()}),[]),t&&t.length?Object(c.jsxs)("div",{className:"HomePage Container",children:[Object(c.jsx)("section",{className:"CategoriesView",children:Object(c.jsx)("div",{className:"CategoriesView-Container",children:t.map((function(e){return Object(c.jsxs)("div",{className:"CategoriesView-Category",children:[Object(c.jsx)(o.c,{to:"/goods/"+e.alias,className:"CategoriesView-ImageLink",children:Object(c.jsx)("img",{className:"CategoriesView-Image",draggable:!1,alt:"",src:b+e.image})}),Object(c.jsx)("div",{className:"CategoriesView-Title",children:e.title})]},e.id)}))})}),Object(c.jsx)("section",{className:"ProductsView",children:Object(c.jsx)("div",{className:"ProductsView-Wrapper",children:Object(c.jsx)(Be,{})})})]}):Object(c.jsx)(I,{})})),_e=(a(136),a.p+"static/media/404.f78e40b0.svg");var De=a.p+"static/media/bulb.cea96dc4.svg",Fe=a.p+"static/media/bulb_on.ca5f0e52.svg";a(137);var Ue=Object(d.b)((function(e){return{items:Object.values(e.cart.items)}}),(function(e){return{cleanCart:function(){return e({type:ce})},removeItem:function(t){return e(se(t))},increaseQuantity:function(t){return e(function(e){return{type:re,payload:{productId:e}}}(t))},reduceQuantity:function(t){return e(function(e){return{type:ie,payload:{productId:e}}}(t))}}}))((function(e){var t,a=e.items,s=e.removeItem,r=e.increaseQuantity,i=e.reduceQuantity,l=e.cleanCart,u=Object(n.useState)(!1),d=Object(g.a)(u,2),j=d[0],m=d[1],b=Object(n.useState)(null),O=Object(g.a)(b,2),p=O[0],h=O[1];return j?Object(c.jsx)("div",{className:"SuccessOrderWrapper",children:Object(c.jsxs)("div",{className:"SuccessOrder Container",children:[Object(c.jsx)(me,{children:"THANK YOU!"}),Object(c.jsxs)("div",{className:"SuccessOrder-Container",children:[Object(c.jsx)("div",{className:"SuccessOrder-ImageContainer",children:Object(c.jsx)("img",{className:"SuccessOrder-Image",alt:"",src:Fe})}),Object(c.jsx)("div",{className:"SuccessOrder-Title",children:"Your ordering is completely successful"}),Object(c.jsx)("div",{className:"SuccessOrder-Subtitle",children:"We'll let you know when it ships and it headed your way."}),Object(c.jsxs)("div",{className:"SuccessOrder-OrderInfo",children:[Object(c.jsxs)("div",{className:"SuccessOrder-Info",children:[Object(c.jsx)("span",{children:"Order:"})," ",Object(c.jsx)("span",{className:"SuccessOrder-InfoValue",children:Object(c.jsx)("b",{children:"0844253425"})})]}),Object(c.jsxs)("div",{className:"SuccessOrder-Info",children:[Object(c.jsx)("span",{children:"Date:"})," ",Object(c.jsx)("span",{className:"SuccessOrder-InfoValue",children:Object(c.jsx)("b",{children:(t=p,new Date(t).toLocaleDateString())})})]})]}),Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)(je,{className:"SuccessOrder-Button",title:"continue shopping",onClick:function(){m(!1)}})})]})]})}):a.length?Object(c.jsx)("div",{className:"CartWrapper",children:Object(c.jsxs)("div",{className:"CartContainer Container",children:[Object(c.jsx)(me,{children:"BASKET"}),Object(c.jsx)(Ne,{className:"",items:a,removeItem:s,increaseQuantity:r,reduceQuantity:i,onSubmit:function(){h(Date.now()),m(!0),l()}})]})}):Object(c.jsx)("div",{className:"EmptyCartWrapper",children:Object(c.jsxs)("div",{className:"EmptyCart Container",children:[Object(c.jsx)(me,{children:"BASKET"}),Object(c.jsxs)("div",{className:"EmptyCart-Container",children:[Object(c.jsx)("img",{className:"EmptyCart-Image",alt:"",src:De,draggable:!1}),Object(c.jsx)("div",{className:"EmptyCart-Text",children:"Your basket is empty"}),Object(c.jsx)("div",{className:"EmptyCart-BlackButtonWrapper",children:Object(c.jsx)(pe,{className:"EmptyCart-BlackButton",title:"start shopping",link:"/"})})]})]})})})),Me=Re,Qe=function(){return Object(c.jsx)("div",{className:"Page404",children:Object(c.jsxs)("div",{className:"Page404-Container Container",children:[Object(c.jsx)("img",{className:"Page404-image404",draggable:!1,alt:"",src:_e}),Object(c.jsx)("div",{className:"Page404-Sorry",children:"Sorry, we can't find this page"}),Object(c.jsx)(o.c,{className:"Page404-HomeButton",to:"/",children:Object(c.jsx)(je,{title:"home page"})})]})})},We=function(){var e=Object(n.useState)("sign-in"),t=Object(g.a)(e,2),a=t[0],s=t[1];switch(a){case"sign-up":return Object(c.jsx)(fe,{goToSignIn:function(){return s("sign-in")}});case"sign-in":default:return Object(c.jsx)(ge,{goToSignUp:function(){return s("sign-up")}})}},He=Be,Ve=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(g.a)(r,2),o=i[0],l=i[1];return Object(c.jsx)("div",{className:"ResetPasswordPage",children:o?Object(c.jsx)(xe,{email:a}):Object(c.jsx)(ve,{onSubmit:function(e){s(e),l(!0)}})})},ze=Ue,Ye=a(20),Ze=a(72),Ge=a(54),$e=a(73),Ke=a.n($e),Je={list:[],loading:!1};var qe={list:[],loading:!1,hasMore:!1};var Xe=a(35),et={items:{}};var tt=Object(Ye.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case L:return{loading:!1,list:t.payload.categories};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(F.a)(Object(F.a)({},e),{},{loading:!0,hasMore:!1});case Se:return{loading:!1,list:t.payload.products,hasMore:t.payload.products.length<t.payload.count};case Le:return Object(F.a)(Object(F.a)({},e),{},{loading:!0,hasMore:!1});case Te:var a=[].concat(Object(p.a)(e.list),Object(p.a)(t.payload.products));return{loading:!1,list:a,hasMore:a.length<t.payload.count};default:return e}},cart:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case ae:return t=(e=a.items[c.payload.product.id])?e.count+1:1,Object(F.a)(Object(F.a)({},a),{},{items:Object(F.a)(Object(F.a)({},a.items),{},Object(Xe.a)({},c.payload.product.id,{product:c.payload.product,count:t}))});case ce:return et;case ne:var n=a.items;return delete n[c.payload.productId],Object(F.a)(Object(F.a)({},a),{},{items:Object(F.a)({},n)});case re:return t=(e=a.items[c.payload.productId]).count+1,Object(F.a)(Object(F.a)({},a),{},{items:Object(F.a)(Object(F.a)({},a.items),{},Object(Xe.a)({},c.payload.productId,Object(F.a)(Object(F.a)({},e),{},{count:t})))});case ie:return t=(e=a.items[c.payload.productId]).count>1?e.count-1:0,Object(F.a)(Object(F.a)({},a),{},{items:Object(F.a)(Object(F.a)({},a.items),{},Object(Xe.a)({},c.payload.productId,Object(F.a)(Object(F.a)({},e),{},{count:t})))});default:return a}}}),at=Object(Ye.d)(Object(Ge.a)({key:"root",storage:Ke.a,whitelist:["cart"]},tt),Object(Ye.a)(Ze.a)),ct=Object(Ge.b)(at);var nt=function(){return m.a.defaults.baseURL=b,Object(c.jsx)(d.a,{store:at,children:Object(c.jsx)(u.a,{loading:Object(c.jsx)(Oe,{}),persistor:ct,children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(de,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:Me}),Object(c.jsx)(l.a,{path:"/goods/:category",component:He}),Object(c.jsx)(l.a,{path:"/cart",component:ze}),Object(c.jsx)(l.a,{path:"/login",component:We}),Object(c.jsx)(l.a,{path:"/reset-password",component:Ve}),Object(c.jsx)(l.a,{path:"/*",component:Qe})]})]})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(nt,{})}),document.getElementById("root"))},22:function(e,t,a){},82:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.533b73b9.chunk.js.map