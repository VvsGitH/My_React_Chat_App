(this["webpackJsonpreact-chat-app"]=this["webpackJsonpreact-chat-app"]||[]).push([[0],{35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),s=n.n(c),i=n(30),o=(n(35),n(18)),u=n(5),l=n.n(u),h=n(9),p=n(11),d=n(4),j=n(16);n(37),n(53);j.a.initializeApp({apiKey:"AIzaSyCr-FYUZWwOEm1KPpk7hWS3oV1-BNEg96Q",authDomain:"my-chat-app-aa73c.firebaseapp.com",projectId:"my-chat-app-aa73c",storageBucket:"my-chat-app-aa73c.appspot.com",messagingSenderId:"422748533719",appId:"1:422748533719:web:2fc9ec870dbeaf4bad9192",measurementId:"G-ZVBXSF1QPL"});var b=j.a.auth(),m=j.a.firestore();function f(){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.setPersistence(j.a.auth.Auth.Persistence.SESSION);case 3:return(t=new j.a.auth.GoogleAuthProvider).setCustomParameters({prompt:"select_account"}),e.next=7,b.signInWithPopup(t);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function x(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(l.a.mark((function e(t,n,r){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.setPersistence(j.a.auth.Auth.Persistence.SESSION);case 3:return e.next=5,b.createUserWithEmailAndPassword(n,r);case 5:return a=e.sent,c=a.user,e.next=9,c.updateProfile({displayName:t});case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function v(e,t){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.setPersistence(j.a.auth.Auth.Persistence.SESSION);case 3:return e.next=5,b.signInWithEmailAndPassword(t,n);case 5:e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}n(40),n(41);var y=n(1),N=function(e){var t=e.sender,n=e.content,r=e.time,a=e.isReceived,c=e.color;return Object(y.jsxs)("div",{className:"message "+(a?"received":""),children:[Object(y.jsx)("h4",{className:"name",style:{color:"hsl(".concat(c,", 100%, 40%)")},children:t}),Object(y.jsx)("p",{className:"content",children:n}),Object(y.jsx)("time",{className:"date",children:r})]})},S=(n(43),function(e){var t=e.user,n=e.history,a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)([]),d=Object(p.a)(u,2),j=d[0],f=d[1],O=Object(r.useState)([]),x=Object(p.a)(O,2),g=x[0],v=x[1],w=Object(r.useRef)(),S=Object(r.useRef)();Object(r.useEffect)((function(){var e=m.collection("messages/").orderBy("sentAt").limit(25).onSnapshot((function(e){console.log("Updating the chat from db!");var t=[];e.forEach((function(e){var n=Object(o.a)({id:e.id},e.data());t.push(n)})),f(t)}),(function(e){return console.error(e)}));return function(){return e()}}),[]),Object(r.useEffect)((function(){for(var e=j.map((function(e){return e.senderId})),t=e.filter((function(t,n){return e.indexOf(t)===n})),n=Math.ceil(360/t.length),r={},a=0;a<t.length;a++)r[t[a]]=a*n;v(r),w.current.scrollIntoView({behavior:"smooth"})}),[j]);var k=function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==s){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,m.collection("messages/").add({senderId:t.id,senderName:t.name,content:s,sentAt:new Date});case 6:i(""),S.current.textContent="",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error sending message: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error during sign-out: ",e.t0.code,e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"chatpage",children:[Object(y.jsxs)("header",{className:"top-bar",children:[Object(y.jsx)("h2",{className:"logo",onClick:function(){return n.push("/TheChat_App")},children:"THE CHAT"}),Object(y.jsx)("span",{className:"sign-out",onClick:C,children:"Sign Out"})]}),Object(y.jsx)("div",{className:"chat-container",children:Object(y.jsxs)("div",{className:"chat-slider",children:[j.map((function(e){return Object(y.jsx)(N,{sender:e.senderName,content:e.content,time:e.sentAt.toDate().toLocaleString(),isReceived:e.senderId!==t.id,color:g[e.senderId]},e.id)})),Object(y.jsx)("div",{ref:w})]})}),Object(y.jsxs)("form",{className:"chat-controls",onSubmit:k,children:[Object(y.jsx)("span",{className:"text-area",role:"textbox",contentEditable:!0,onInput:function(e){e.preventDefault(),i(e.target.textContent)},ref:S}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"SEND"})]})]})}),k=(n(44),function(e){var t=e.history;return Object(y.jsx)("header",{className:"header",children:Object(y.jsx)("h1",{className:"title",onClick:function(){return t.push("/TheChat_App")},children:"The Chat"})})}),C=(n(45),function(e){var t=e.isLoggedIn,n=e.history,r=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Error during sign-out: ",e.t0.code,e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{history:n}),Object(y.jsxs)("div",{className:"homepage card flex-column",children:[Object(y.jsxs)("h2",{children:["Welcome to ",Object(y.jsx)("span",{className:"logo",children:"The Chat"})]}),t?Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("p",{children:"Start chatting with your friends"}),Object(y.jsx)("button",{className:"btn",onClick:function(){return n.push("/TheChat_App/chat")},children:"START"}),Object(y.jsx)("p",{className:"link",onClick:r,children:"Log out"})]}):Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("p",{children:"Please login"}),Object(y.jsx)("button",{className:"btn",onClick:function(){return n.push("/TheChat_App/login")},children:"LOG IN"}),Object(y.jsx)("p",{className:"link",onClick:function(){return n.push("/TheChat_App/signin")},children:"Are you new? Register"})]})]})]})}),A=(n(46),function(e){var t=e.history,n=Object(r.useState)(""),a=Object(p.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),o=Object(p.a)(i,2),u=o[0],d=o[1],j=Object(r.useState)(""),b=Object(p.a)(j,2),m=b[0],f=b[1],O=function(e){switch(e.preventDefault(),e.target.name){case"name":s(e.target.value);break;case"email":d(e.target.value);break;case"password":f(e.target.value);break;default:console.error("Something went wrong with the input")}},g=function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,x(c,u,m);case 4:s(""),d(""),f(""),t.push("/TheChat_App"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),alert("Something went wrong, try again"),console.error("An error occurred during registration: ",e.t0.code,e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{history:t}),Object(y.jsxs)("div",{className:"signpage card flex-column",children:[Object(y.jsx)("h3",{children:"Sign in with your email and password"}),Object(y.jsxs)("form",{className:"sign-form",onSubmit:g,children:[Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("label",{children:"Full Name"}),Object(y.jsx)("input",{type:"text",placeholder:"insert your name",name:"name",value:c,onChange:O,required:!0})]}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("label",{className:"email-label",children:"Email"}),Object(y.jsx)("input",{type:"email",placeholder:"insert your email",name:"email",value:u,onChange:O,required:!0})]}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("label",{children:"Password"}),Object(y.jsx)("input",{type:"password",placeholder:"insert your password",name:"password",value:m,onChange:O,required:!0})]}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"SIGN IN"})]})]})]})}),I=(n(47),function(e){var t=e.history,n=Object(r.useState)(""),a=Object(p.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),o=Object(p.a)(i,2),u=o[0],d=o[1],j=function(e){switch(e.preventDefault(),e.target.name){case"email":s(e.target.value);break;case"password":d(e.target.value);break;default:console.error("Something is wrong with the input")}},b=function(){var e=Object(h.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,v(c,u);case 4:s(""),d(""),t.push("/TheChat_App"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),alert("Credential are wrong"),console.error("Error during sign-in: ",e.t0.code,e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t.push("/TheChat_App"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Something went wrong, try again!"),console.error("Error in Google signin: ",e.t0.code,e.t0.message,e.t0.credentials);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)(k,{history:t}),Object(y.jsxs)("div",{className:"loginpage card flex-column",children:[Object(y.jsxs)("div",{className:"option",children:[Object(y.jsx)("h3",{children:"Login with your email and password"}),Object(y.jsxs)("form",{onSubmit:b,children:[Object(y.jsx)("label",{children:"Email"}),Object(y.jsx)("input",{type:"email",placeholder:"insert your email",name:"email",value:c,onChange:j,required:!0}),Object(y.jsx)("label",{children:"Password"}),Object(y.jsx)("input",{type:"password",placeholder:"insert your password",name:"password",value:u,onChange:j,required:!0}),Object(y.jsx)("button",{className:"btn",type:"submit",children:"LOG IN"})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{className:"option",children:[Object(y.jsx)("h3",{children:"Login with Google"}),Object(y.jsx)("button",{className:"btn btn-google",type:"button",onClick:m,children:"LOG IN WITH GOOGLE"})]})]})]})});var E=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({id:"",name:""}),s=Object(p.a)(c,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){var e=b.onAuthStateChanged(function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Auth state changed: ",t),t?(console.log("A new user logged in"),u({id:t.uid,name:t.displayName}),a(!0)):(a(!1),u({id:"",name:""}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(d.b,{exact:!0,path:"/TheChat_App",render:function(e){return Object(y.jsx)(C,Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:n}))}}),Object(y.jsx)(d.b,{path:"/TheChat_App/login",component:I}),Object(y.jsx)(d.b,{path:"/TheChat_App/signin",component:A}),Object(y.jsx)(d.b,{path:"/TheChat_App/chat",render:function(e){return n?Object(y.jsx)(S,Object(o.a)(Object(o.a)({},e),{},{user:i})):Object(y.jsx)(d.a,{to:"/TheChat_App"})}})]})};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(i.a,{children:Object(y.jsx)(E,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.28d3c18e.chunk.js.map