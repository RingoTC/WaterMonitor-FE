(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{95:function(e,t,r){Promise.resolve().then(r.t.bind(r,8385,23)),Promise.resolve().then(r.t.bind(r,8995,23)),Promise.resolve().then(r.bind(r,2636)),Promise.resolve().then(r.t.bind(r,2452,23)),Promise.resolve().then(r.t.bind(r,5002,23)),Promise.resolve().then(r.t.bind(r,8643,23)),Promise.resolve().then(r.t.bind(r,8738,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,2986)),Promise.resolve().then(r.bind(r,1030)),Promise.resolve().then(r.bind(r,7500))},2986:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return Providers}});var s=r(7437),n=r(3198),a=r(7373),i=r(9334),o=r(7681),c=r(8263),l=r(3903);let u={list:[]},d={list:[]};var h=r(9990);let p={list:[]};var m=r(8978);let g=(0,a.UY)({auth:o.ZP,maps:c.ZP,records:l.Z,userData:m.ZP,data:(0,a.UY)({city:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return"SET_CITIES"===t.type?{...e,list:t.payload}:e},province:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return"SET_PROVINCES"===t.type?{...e,list:t.payload}:e},sectionData:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return"SET_SECTION_DATA"===t.type?{...e,list:t.payload}:e}})}),f=(0,a.MT)(g,(0,h.Uo)((0,a.md)(i.Z)));function Providers(e){let{children:t}=e;return(0,s.jsx)(n.zt,{store:f,children:t})}},1030:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return MobileSidebar}});var s=r(7437),n=r(2265),a=r(8915),i=r(7431),o=r(4033),c=r(1396),l=r.n(c),u=r(3198);function MobileSidebar(){let e=(0,o.useRouter)(),t=e.pathname,r=(0,u.v9)(e=>e.auth.user),[c,d]=(0,n.useState)(!1),h=[{name:"Home",path:"/home",icon:i.g3P},{name:"Data",path:"/trend",icon:i.YfH},{name:"Ticket",path:"/tickets",icon:i.Vj9},{name:"Profile",path:"/profile",icon:i.mhe},{name:r?"Logout":"Login",path:r?"/logout":"/login",icon:c?i.cKt:i.$F}];return(0,s.jsx)(a.Z,{id:"navbar",className:"d-flex justify-content-around",style:{width:"80%"},children:h.map((e,r)=>(0,s.jsx)(a.Z.Item,{children:(0,s.jsx)(l(),{className:"link ".concat(t===e.path?"active":""),href:e.path,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"icon",children:(0,s.jsx)(e.icon,{})}),(0,s.jsx)("div",{className:"text",children:(0,s.jsx)("p",{children:e.name})})]})})},r))})}},7500:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Sidebar}});var s=r(7437),n=r(8915),a=r(7431);r(1246);var i=r(4033),o=r(1396),c=r.n(o),l=r(2265),u=r(3198);function Sidebar(){(0,i.useRouter)();let e=(0,i.usePathname)(),t=(0,u.v9)(e=>e.auth.user),[r,o]=(0,l.useState)(!1),d=[{name:"Home",path:"/home",icon:a.g3P},{name:"Data",path:"/trend",icon:a.YfH},{name:"Ticket",path:"/tickets",icon:a.Vj9},{name:"Profile",path:"/profile",icon:a.mhe},{name:t?"Logout":"Login",path:t?"/logout":"/login",icon:r?a.cKt:a.$F}];return(0,s.jsx)(n.Z,{id:"navbar",className:"flex d-flex flex-wrap flex-column",children:d.map(t=>(0,s.jsx)(n.Z.Item,{children:(0,s.jsx)(c(),{className:"link ".concat(e===t.path?"active":""),href:t.path,children:(0,s.jsxs)("div",{className:"flex d-flex flex-wrap flex-column",children:[(0,s.jsx)("div",{className:"icon",children:(0,s.jsx)(t.icon,{})}),(0,s.jsx)("div",{className:"text",children:(0,s.jsx)("p",{children:t.name})})]})})},t.name))})}},7681:function(e,t,r){"use strict";r.d(t,{TX:function(){return logoutUser},ZP:function(){return auth},pH:function(){return loginUser}});var s=r(2173);let n="http://localhost:9000",a="LOGIN_REQUEST",i="LOGIN_SUCCESS",o="LOGIN_FAILURE",requestLogin=()=>({type:a}),receiveLogin=e=>({type:i,user:e}),loginError=e=>({type:o,message:e});function auth(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,isAuthenticated:!1,user:null,errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return{...e,isFetching:!0,isAuthenticated:!1,user:null,errorMessage:""};case i:return{...e,isFetching:!1,isAuthenticated:!0,user:t.user,errorMessage:""};case o:return{...e,isFetching:!1,isAuthenticated:!1,user:null,errorMessage:t.message};case"LOGOUT_SUCCESS":return{...e,isAuthenticated:!1,user:null};default:return e}}let loginUser=(e,t)=>r=>(r(requestLogin()),s.Z.post("".concat(n,"/auth/login"),{username:e,password:t},{withCredentials:!0}).then(e=>{r(receiveLogin(e.data.user))}).catch(e=>{let t=e.response?e.response.data.message:e.message;r(loginError(t))})),logoutUser=()=>e=>s.Z.get("".concat(n,"/auth/logout"),{},{withCredentials:!0}).then(()=>{e({type:"LOGOUT_SUCCESS"})}).catch(e=>{console.error("Logout error:",e)})},8263:function(e,t,r){"use strict";r.d(t,{ZP:function(){return maps},iT:function(){return updateFetchMaps},w6:function(){return fetchMaps}});var s=r(2173);r(3198);let n="http://localhost:9000",a="MAPS_REQUEST",i="MAPS_SUCCESS",o="MAPS_FAILURE",requestMaps=()=>({type:a}),receiveMaps=e=>({type:i,maps:e}),mapsError=e=>({type:o,message:e});function maps(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,maps:[],errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return{...e,isFetching:!0,maps:[],errorMessage:""};case i:return{...e,isFetching:!1,maps:t.maps,errorMessage:""};case o:return{...e,isFetching:!1,maps:[],errorMessage:t.message};default:return e}}let fetchMaps=()=>async(e,t)=>{let r=t().maps;if(r.maps.length>0)return r.maps;e(requestMaps());try{let r=await s.Z.get("".concat(n,"/site/all"));return await e(receiveMaps(r.data)),t().maps.maps}catch(t){throw e(mapsError(t.response.data.message)),t}},updateFetchMaps=()=>async(e,t)=>{e(requestMaps());try{let r=await s.Z.get("".concat(n,"/site/all"));return await e(receiveMaps(r.data)),t().maps.maps}catch(t){throw e(mapsError(t.response.data.message)),t}}},3903:function(e,t,r){"use strict";r.d(t,{Z:function(){return records},c:function(){return fetchRecords}});var s=r(2173);r(3198);let n="records_REQUEST",a="records_SUCCESS",i="records_FAILURE",requestRecords=()=>({type:n}),receiveRecords=e=>({type:a,records:e}),recordsError=e=>({type:i,message:e});function records(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,records:[],errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n:return{...e,isFetching:!0,records:[],errorMessage:""};case a:return{...e,isFetching:!1,records:t.records,errorMessage:""};case i:return{...e,isFetching:!1,records:[],errorMessage:t.message};default:return e}}let fetchRecords=()=>async(e,t)=>{let{isFetching:r,records:n}=t().records;if(r||n.length>0)return n;e(requestRecords());try{let t=await s.Z.get("".concat("http://localhost:9000","/record/all/latest/"));return e(receiveRecords(t.data)),t.data}catch(t){throw e(recordsError(t.response.data.message)),t}}},8978:function(e,t,r){"use strict";r.d(t,{M:function(){return setUserData}});let s={_id:"",username:"",password:"",position:"",company:"",firstName:"",lastName:"",email:"",cellphone:"",city:"",country:"",role:"",about:"",skills:[],likes:[]},n="SET_USER_DATA",setUserData=e=>({type:n,payload:e});t.ZP=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n:return{...e,...t.payload};case"CREATE_SKILL":return{...e,skills:[...e.skills,t.payload]};case"UPDATE_SKILL":return{...e,skills:e.skills.map(e=>e.id===t.payload.id?t.payload:e)};case"DELETE_SKILL":return{...e,skills:e.skills.filter(e=>e.id!==t.payload)};default:return e}}},3054:function(){},1246:function(){}},function(e){e.O(0,[982,428,580,198,396,680,498,89,971,864,744],function(){return e(e.s=95)}),_N_E=e.O()}]);