(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{2270:function(e,t,a){Promise.resolve().then(a.bind(a,2707))},8513:function(e,t,a){"use strict";a.d(t,{Ak:function(){return findAllUsers},FG:function(){return findAllSites},M4:function(){return deleteTicket},O:function(){return updateTicket},Qn:function(){return getTicketById},a2:function(){return findAllTickets},ax:function(){return createTicket}});var s=a(2173);let n="".concat("http://localhost:9000","/record"),c="".concat("http://localhost:9000","/user"),i="".concat("http://localhost:9000","/site"),findAllTickets=async()=>{let e=await s.Z.get("".concat(n,"/all"));return e.data},findAllUsers=async()=>{let e=await s.Z.get("".concat(c,"/all"));return e.data},createTicket=async()=>{let e=await s.Z.post("".concat(n,"/addticket"));return e.data},deleteTicket=async e=>{let t=await s.Z.delete("".concat(n,"/delete/").concat(e));return t.data},findAllSites=async()=>{let e=await s.Z.get("".concat(i,"/all"));return e.data},updateTicket=async(e,t)=>{try{let a=await s.Z.put("".concat(n,"/updateticket/").concat(e),t);return a.data}catch(e){throw console.error("Error updating ticket:",e),e}},getTicketById=async e=>{try{let t=await s.Z.get("".concat(n,"/ticket/").concat(e));return t.data}catch(e){throw console.error("Error fetching ticket:",e),e}}},2707:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Tickets}});var s=a(7437);a(4063);var n=a(2265),c=a(7431),i=a(1678),r=a(8920),l=a(7846),o=a(2058),d=a(3198),u=a(4033),h=a(2173);let m="".concat("http://localhost:9000","/record"),findTotalTickets=async()=>{let e=await h.Z.get("".concat(m,"/totalcount"));return e.data},findTotalComplete=async()=>{let e=await h.Z.get("".concat(m,"/totalComplete"));return e.data},findTotalLoading=async()=>{let e=await h.Z.get("".concat(m,"/totalLoading"));return e.data};var g=a(7681);function UserInfo(){let e=new Date().toISOString().split("T")[0],[t,a]=(0,n.useState)(0),[h,m]=(0,n.useState)(0),[x,p]=(0,n.useState)(0),[j,f]=(0,n.useState)("Fetching userLocation..."),[N,b]=(0,n.useState)(!1),[k,v]=(0,n.useState)(""),y=(0,d.v9)(e=>e.auth.user),T=(0,d.I0)(),w=(0,u.useRouter)(),fetchTotalTicketCount=async()=>{let e=await findTotalTickets();a(e.count)},fetchTotalCompleteCount=async()=>{let e=await findTotalComplete();m(e.count)},fetchTotalLoadingCount=async()=>{let e=await findTotalLoading();p(e.count)},getuserLocation=()=>{navigator.geouserLocation?navigator.geouserLocation.getCurrentPosition(showPosition,showError):f("GeouserLocation is not supported by this browser.")},showPosition=e=>{let t=e.coords.latitude,a=e.coords.longitude;f("Latitude: ".concat(t,", Longitude: ").concat(a))},showError=e=>{switch(e.code){case e.PERMISSION_DENIED:f("User denied the request for GeouserLocation.");break;case e.POSITION_UNAVAILABLE:f("userLocation information is unavailable.");break;case e.TIMEOUT:f("The request to get user userLocation timed out.");break;default:f("An unknown error occurred.")}};return(0,n.useEffect)(()=>{fetchTotalTicketCount(),fetchTotalCompleteCount(),fetchTotalLoadingCount(),getuserLocation()},[]),(0,s.jsxs)("div",{className:"user-container",children:[y&&(0,s.jsxs)("h5",{children:["Welcome, ",y.firstName," ",y.lastName," (",y.role,")"]}),(0,s.jsx)("button",{onClick:()=>{T((0,g.TX)()).then(()=>{w.push("/login")}).catch(e=>{console.error("Logout failed:",e)})},className:"btn btn-danger buttom-align mb-3",children:"Sign Out"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"container text-left",children:[(0,s.jsxs)("div",{className:"row row-format ",children:[(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(i.IPN,{className:"info-icon"})," Date: ",(0,s.jsx)("br",{})," ",e]}),(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(c.Kaj,{className:"info-icon"})," Total Tickets: ",(0,s.jsx)("br",{})," ",t]})]}),(0,s.jsxs)("div",{className:"row row-format ",children:[(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(l.DqJ,{className:"info-icon"})," Complete Tickets: ",(0,s.jsx)("br",{})," ",h]}),(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(r.dAq,{className:"info-icon"})," Loading Tickets: ",(0,s.jsx)("br",{})," ",x]})]}),(0,s.jsx)("div",{className:"row row-format ",children:(0,s.jsxs)("div",{className:"col",children:[(0,s.jsx)(o.hKA,{className:"info-icon"})," Current userLocation: ",(0,s.jsx)("br",{})," ",j]})}),(0,s.jsx)("div",{className:"row row-format ",children:(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"reminder",className:"form-label",children:"Reminder:"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"reminder",value:k,onChange:e=>{v(e.target.value)},disabled:!N})]})})}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[(0,s.jsx)("button",{className:"btn btn-primary me-md-2 tickets-button",type:"button",onClick:()=>{b(!0)},children:"Update"}),(0,s.jsx)("button",{className:"btn btn-success tickets-button",type:"button",onClick:()=>{b(!1)},children:"Save"})]})]})]})}a(8537);var x=a(1396),p=a.n(x),j=a(8513),f=a(4606);function Tickets(){let e=(0,u.useRouter)(),t=(0,d.v9)(e=>e.auth.user),[a,c]=(0,n.useState)([]),[i,r]=(0,n.useState)({MonitoringLocationIdentifier:"",MonitoringYear:"",MonitoringWeek:"",MonitoringLocationDescriptionText:"",EstimatedDate:"",IndicatorsName:"",status:""}),[l,h]=(0,n.useState)([]),[m,g]=(0,n.useState)(1),[x,N]=(0,n.useState)(""),[b,k]=(0,n.useState)(""),v=Math.ceil(a.length/6),[y,T]=(0,n.useState)(1),w=Math.ceil(l.length/3),paginateUsers=e=>T(e),C=6*m,L=C-6,S=a.slice(L,C),paginate=e=>g(e),E=3*y,U=E-3,_=l.slice(U,E),handleAddTicket=async()=>{try{let t=await j.ax(i);t&&t._id&&(e.push("/tickets/ticketDetail?_id=".concat(t._id)),c([t,...a]))}catch(e){console.error("Error creating ticket:",e)}},deleteTicket=async e=>{try{await j.M4(e._id);let t=a.filter(t=>t._id!==e._id);c(t)}catch(e){console.log(e)}},loadTickets=async()=>{try{let e=await j.a2();c(e)}catch(e){console.error("Error loading tickets:",e)}},loadUsers=async()=>{try{let e=await j.Ak();h(e)}catch(e){console.error("Error loading users:",e)}};return(0,n.useEffect)(()=>{t?(loadTickets(),loadUsers()):e.push("/login")},[t,e]),(0,s.jsx)("div",{className:"home p-0",children:t&&(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-12 tickets-top-nav ",children:[(0,s.jsxs)("div",{className:"col-12 d-flex justify-content-between",children:[(0,s.jsx)("nav",{"aria-label":"breadcrumb",children:(0,s.jsxs)("ol",{className:"breadcrumb",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(p(),{href:"/tickets",children:"Ticket"})}),(0,s.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Home"})]})}),(0,s.jsxs)("button",{className:"btn btn-primary btn-sm",type:"button",onClick:handleAddTicket,children:["+ ",(0,s.jsx)(o.xNM,{})," New Ticket !"]})]}),(0,s.jsx)("hr",{})]}),(0,s.jsx)("div",{className:"col-8",children:(0,s.jsx)(UserInfo,{})}),(0,s.jsxs)("div",{className:"list-group col-4 mb-5",children:[(0,s.jsx)("h5",{children:"Connections: "}),_.map(e=>(0,s.jsxs)(p(),{href:"/guest?username=".concat(e.username),className:"list-group-item list-group-item-action",children:[(0,s.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,s.jsxs)("h6",{className:"mb-1",children:[e.firstName," ",e.lastName]}),(0,s.jsx)("small",{className:"text-body-secondary",children:e.company})]}),(0,s.jsx)("small",{className:"text-body-secondary",children:e.email})]},e._id)),(0,s.jsx)("br",{}),(0,s.jsx)("nav",{"aria-label":"User page navigation",children:(0,s.jsx)("ul",{className:"pagination",children:(()=>{let e=[];if(w<=10)for(let t=1;t<=w;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===y?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginateUsers(t),children:t})},t));else{for(let t=1;t<=6;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===y?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginateUsers(t),children:t})},t));e.push((0,s.jsx)("li",{className:"page-item disabled",children:(0,s.jsx)("span",{className:"page-link",children:"..."})},"ellipsis"));for(let t=w-3;t<=w;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===y?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginateUsers(t),children:t})},t))}return e})()})}),(0,s.jsxs)("form",{className:"row g-3",onSubmit:e=>{e.preventDefault();let t=Number(b);t>=1&&t<=w&&(T(t),k(""))},children:[(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("h5",{children:"Go to Page:"})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("input",{className:"form-control",type:"number",value:b,onChange:e=>{k(e.target.value)}})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("button",{className:"btn btn-primary gap-1 buttom-align mb-3",type:"submit",children:"Go"})})]})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"list-group col-12",children:[(0,s.jsx)("br",{}),(0,s.jsx)("h5",{children:"Tickets: "}),(0,s.jsxs)("nav",{"aria-label":"Page navigation example",children:[(0,s.jsx)("ul",{className:"pagination",children:(()=>{let e=[];if(v<=30)for(let t=1;t<=v;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===m?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginate(t),children:t})},t));else{for(let t=1;t<=15;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===m?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginate(t),children:t})},t));e.push((0,s.jsx)("li",{className:"page-item disabled",children:(0,s.jsx)("span",{className:"page-link",children:"..."})},"ellipsis"));for(let t=v-5;t<=v;t++)e.push((0,s.jsx)("li",{className:"page-item ".concat(t===m?"active":""),children:(0,s.jsx)("a",{className:"page-link",href:"#",onClick:()=>paginate(t),children:t})},t))}return e})()}),(0,s.jsxs)("form",{className:"row g-3",onSubmit:e=>{e.preventDefault();let t=Number(x);t>=1&&t<=v&&(g(t),N(""))},children:[(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("h5",{children:"Go to Page:"})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("input",{className:"form-control",type:"number",value:x,onChange:e=>{N(e.target.value)}})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("button",{className:"btn btn-primary gap-1 buttom-align mb-3",type:"submit",children:"Go"})})]})]}),S.map((e,t)=>(0,s.jsxs)(p(),{href:"/tickets/ticketDetail?_id=".concat(e._id),className:"list-group-item list-group-item-action",children:[(0,s.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,s.jsxs)("h6",{className:"mb-1",children:["Location: ",e.name||e.MonitoringLocationDescriptionText]}),(0,s.jsxs)("small",{className:"text-body-secondary",children:[e._id," ",(0,s.jsx)("br",{}),(0,s.jsx)("button",{className:"btn btn-danger me-2 float-end buttom-align",onClick:t=>{t.preventDefault(),t.stopPropagation(),deleteTicket(e)},children:(0,s.jsx)(f.tgD,{})}),(0,s.jsx)("button",{className:"btn float-end me-2 buttom-align ".concat("complete"===e.status?"btn-success":"btn-warning"),children:"complete"===e.status?"Complete":"Loading"})]})]}),(0,s.jsx)("small",{className:"text-body-secondary",children:e.EstimatedDate})]},t)),(0,s.jsx)("br",{})]})]})})})}},7681:function(e,t,a){"use strict";a.d(t,{TX:function(){return logoutUser},ZP:function(){return auth},pH:function(){return loginUser}});var s=a(2173);let n="http://localhost:9000",c="LOGIN_REQUEST",i="LOGIN_SUCCESS",r="LOGIN_FAILURE",requestLogin=()=>({type:c}),receiveLogin=e=>({type:i,user:e}),loginError=e=>({type:r,message:e});function auth(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,isAuthenticated:!1,user:null,errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return{...e,isFetching:!0,isAuthenticated:!1,user:null,errorMessage:""};case i:return{...e,isFetching:!1,isAuthenticated:!0,user:t.user,errorMessage:""};case r:return{...e,isFetching:!1,isAuthenticated:!1,user:null,errorMessage:t.message};case"LOGOUT_SUCCESS":return{...e,isAuthenticated:!1,user:null};default:return e}}let loginUser=(e,t)=>a=>(a(requestLogin()),s.Z.post("".concat(n,"/auth/login"),{username:e,password:t},{withCredentials:!0}).then(e=>{a(receiveLogin(e.data.user))}).catch(e=>{let t=e.response?e.response.data.message:e.message;a(loginError(t))})),logoutUser=()=>e=>s.Z.get("".concat(n,"/auth/logout"),{},{withCredentials:!0}).then(()=>{e({type:"LOGOUT_SUCCESS"})}).catch(e=>{console.error("Logout error:",e)})},8537:function(){},4063:function(){}},function(e){e.O(0,[447,982,370,724,122,580,198,396,249,971,864,744],function(){return e(e.s=2270)}),_N_E=e.O()}]);