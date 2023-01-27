(function(){"use strict";var t={9942:function(t,e,o){var n=o(6369),i=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")])])])])}],s={name:"App",components:{}},a=s,l=o(1001),u=(0,l.Z)(a,i,r,!1,null,null,null),c=u.exports,f=o(2631),v=function(){var t=this,e=t._self._c;return e("h3",[t._v("我是About的内容")])},h=[],m={name:"MyAbout",beforeRouteEnter(t,e,o){if(console.log("MyAbout - beforeRouteEnter(): to, from, next",t,e,o),!t.meta.isAuth)return void o();const n=localStorage.getItem("school");"snowflake"===n?o():window.alert(`学校名 ${n} 不对，无权限查看!`)},beforeRouteLeave(t,e,o){console.log("MyAbout - beforeRouteLeave(): to, from, next",t,e,o),o()}},p=m,d=(0,l.Z)(p,v,h,!1,null,null,null),_=d.exports,g=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("我是Home的内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"MyNews"}},[e("router-view")],1)],1)])},w=[],y={name:"MyHome"},b=y,x=(0,l.Z)(b,g,w,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},M=[function(){var t=this,e=t._self._c;return e("li",[t._v("News001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("News002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("News003 "),e("input",{attrs:{type:"text"}})])}],A={name:"MyNews",data(){return{opacity:1}},activated(){console.log("MyNews - activated()"),this.timer=setInterval((()=>{console.log("setInterval()"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("MyNews - deactivated()"),clearInterval(this.timer)}},E=A,O=(0,l.Z)(E,C,M,!1,null,null,null),Z=O.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messages,(function(o){return e("li",{key:o.id},[e("router-link",{attrs:{to:{path:"/home/message/detail",query:{id:o.id,title:o.title}}}},[t._v(t._s(o.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(o)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(o)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},N=[],P=(o(7658),{name:"MyMessage",data(){return{messages:[{id:"001",title:"message1",content:"待到秋来九月八"},{id:"002",title:"message2",content:"我花开后百花杀"},{id:"003",title:"message3",content:"冲天香阵透长安"},{id:"004",title:"message4",content:"满城尽带黄金甲"}]}},methods:{pushShow(t){this.$router.push({path:"/home/message/detail",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({path:"/home/message/detail",query:{id:t.id,title:t.title}})}}}),S=P,j=(0,l.Z)(S,$,N,!1,null,null,null),I=j.exports,q=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号："+t._s(t.id))]),e("li",[t._v("消息标题："+t._s(t.title))])])},R=[],H={name:"MyDetail",props:["id","title"],mounted(){console.log("this.$route",this.$$route)}},T=H,D=(0,l.Z)(T,q,R,!1,null,null,null),L=D.exports;const V=new f.ZP({mode:"history",routes:[{name:"guanyu",path:"/about",component:_,meta:{title:"关于"},beforeEnter(t,e,o){console.log("guanyu - beforeEnter(): to, from, next",t,e,o),o()}},{name:"zhuye",path:"/home",component:k,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:Z,meta:{isAuth:!0,title:"新闻"},beforeEnter(t,e,o){if(console.log("xinwen - beforeEnter(): to, from, next",t,e,o),!t.meta.isAuth)return void o();const n=localStorage.getItem("school");"snowflake"===n?o():window.alert(`学校名 ${n} 不对，无权限查看!`)}},{name:"xiaoxi",path:"message",component:I,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",component:L,meta:{isAuth:!0,title:"详情"},props({query:t}){return{id:t.id,title:t.title}}}]}]}]});V.beforeEach(((t,e,o)=>{if(console.log("router.beforeEach(): to, from, next",t,e,o),!t.meta.isAuth)return void o();const n=localStorage.getItem("school");"snowflake"===n?o():window.alert(`学校名 ${n} 不对，无权限查看!`)})),V.afterEach(((t,e)=>{console.log("router.afterEach(): to, from",t,e),window.document.title=t.meta.title||"雪花系统"}));var z=V;n.ZP.config.productionTip=!1,n.ZP.use(f.ZP),new n.ZP({render:t=>t(c),router:z}).$mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],r=t[c][2];for(var a=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,i,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,s=n[0],a=n[1],l=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var c=l(o)}for(e&&e(n);u<s.length;u++)r=s[u],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},n=self["webpackChunkvue_vue_router"]=self["webpackChunkvue_vue_router"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9942)}));n=o.O(n)})();
//# sourceMappingURL=app.697d88aa.js.map