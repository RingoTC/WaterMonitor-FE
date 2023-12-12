(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{8456:function(e,t,a){Promise.resolve().then(a.bind(a,7548))},8513:function(e,t,a){"use strict";a.d(t,{Ak:function(){return findAllUsers},FG:function(){return findAllSites},M4:function(){return deleteTicket},O:function(){return updateTicket},Qn:function(){return getTicketById},a2:function(){return findAllTickets},ax:function(){return createTicket}});var n=a(2173);let i="".concat("http://localhost:9000","/record"),l="".concat("http://localhost:9000","/user"),c="".concat("http://localhost:9000","/site"),findAllTickets=async()=>{let e=await n.Z.get("".concat(i,"/all"));return e.data},findAllUsers=async()=>{let e=await n.Z.get("".concat(l,"/all"));return e.data},createTicket=async()=>{let e=await n.Z.post("".concat(i,"/addticket"));return e.data},deleteTicket=async e=>{let t=await n.Z.delete("".concat(i,"/delete/").concat(e));return t.data},findAllSites=async()=>{let e=await n.Z.get("".concat(c,"/all"));return e.data},updateTicket=async(e,t)=>{try{let a=await n.Z.put("".concat(i,"/updateticket/").concat(e),t);return a.data}catch(e){throw console.error("Error updating ticket:",e),e}},getTicketById=async e=>{try{let t=await n.Z.get("".concat(i,"/ticket/").concat(e));return t.data}catch(e){throw console.error("Error fetching ticket:",e),e}}},7548:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Tickets}});var n=a(7437),i=a(2265);a(8537);var l=a(4033),c=a(1396),s=a.n(c),r=a(8513);function Tickets(){let e=(0,l.useRouter)(),t=(0,l.useSearchParams)(),a=t.get("_id"),[c,o]=(0,i.useState)({MonitoringLocationIdentifier:"",LongitudeMeasure:"",LatitudeMeasure:"",MonitoringYear:"",MonitoringWeek:"",MonitoringLocationDescriptionText:"",IndicatorsName:"",Value:null,Unit:"",status:"loading",COD:null,DO_Value:null,NH4N_Value:null,pH_Value:null}),deleteTicket=async t=>{try{await r.M4(t),e.push("/tickets")}catch(e){console.log(e)}},handleInputChange=e=>{let{id:t,value:a}=e.target;o({...c,[t]:a})},[d,u]=(0,i.useState)({MonitoringLocationIdentifier:null,LongitudeMeasure:null,LatitudeMeasure:null,MonitoringLocationDescriptionText:""}),[m,h]=(0,i.useState)([]),updateTicketHandler=async()=>{try{await r.O(a,c),e.push("/tickets")}catch(e){console.error("Error updating ticket:",e)}};return(0,i.useEffect)(()=>{let fetchTicketDetails=async()=>{try{let e=await r.Qn(a);o(e)}catch(e){console.error("Error fetching ticket:",e)}},fetchSites=async()=>{let e=await r.FG();h(e)};fetchTicketDetails(),fetchSites()},[]),(0,n.jsx)("div",{className:"home p-0",children:(0,n.jsx)("div",{className:"container-fluid mb-5",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-12 tickets-top-nav",children:[(0,n.jsx)("div",{className:"col-12 d-flex justify-content-between",children:(0,n.jsx)("nav",{"aria-label":"breadcrumb",children:(0,n.jsxs)("ol",{className:"breadcrumb",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(s(),{href:"/tickets",children:"Ticket"})}),(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(s(),{href:"/tickets",children:"Home"})}),(0,n.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:t})]})})}),(0,n.jsx)("hr",{})]}),(0,n.jsx)("div",{className:"col-12 bg-light ",children:(0,n.jsxs)("div",{className:"container mt-4 mb-5",children:[(0,n.jsx)("h2",{children:"Ticket Details"}),(0,n.jsxs)("div",{className:"card",children:[(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h4",{children:"Monitoring Site Information:"}),(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsxs)("div",{className:"form-floating",children:[(0,n.jsxs)("select",{value:c.MonitoringLocationIdentifier,onChange:e=>{let t=Number(e.target.value);o({...c,MonitoringLocationIdentifier:t});let a=m.find(e=>e.MonitoringLocationIdentifier===t);a&&(u(a),o({...c,MonitoringLocationDescriptionText:a.MonitoringLocationDescriptionText,MonitoringLocationIdentifier:a.MonitoringLocationIdentifier,LongitudeMeasure:a.LongitudeMeasure,LatitudeMeasure:a.LatitudeMeasure}))},className:"form-select",id:"floatingSelect","aria-label":"Floating label select example",children:[(0,n.jsx)("option",{value:"",children:"Select Site"}),m.map((e,t)=>(0,n.jsx)("option",{value:e.MonitoringLocationIdentifier,children:e.MonitoringLocationDescriptionText},t))]}),(0,n.jsx)("label",{htmlFor:"floatingSelect",children:"Site Name"})]})}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"longitude",className:"form-label",children:"Longitude:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"longitude",value:c.LongitudeMeasure,disabled:!0})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"latitude",className:"form-label",children:"Latitude:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"latitude",value:c.LatitudeMeasure,disabled:!0})]}),(0,n.jsx)("h4",{children:"Indicators"}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"cod",className:"form-label",children:"COD Value:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"COD",value:c.COD,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"do",className:"form-label",children:"DO Value:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"DO_Value",value:c.DO_Value,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"nh4n",className:"form-label",children:"NH4N Value:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"NH4N_Value",value:c.NH4N_Value,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"ph",className:"form-label",children:"pH Value:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"pH_Value",value:c.pH_Value,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"indicatorName",className:"form-label",children:"Indicator Name:"}),(0,n.jsx)("input",{type:"email",className:"form-control",id:"indicatorName",value:c.IndicatorsName,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"indicatorValue",className:"form-label",children:"Indicator Value:"}),(0,n.jsx)("input",{type:"number",className:"form-control",id:"indicatorValue",value:c.value,onChange:handleInputChange})]}),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)("label",{htmlFor:"indicatorUnit",className:"form-label",children:"Indicator Unit:"}),(0,n.jsx)("input",{type:"email",className:"form-control",id:"indicatorUnit",value:c.Unit,onChange:handleInputChange})]}),(0,n.jsx)("div",{className:"mb-3",children:(0,n.jsxs)("div",{className:"form-check",children:[(0,n.jsx)("input",{type:"checkbox",className:"form-check-input",id:"statusCheckbox",onChange:e=>{o({...c,status:e.target.checked?"complete":"loading"})},checked:"complete"===c.status}),(0,n.jsxs)("label",{className:"form-check-label",htmlFor:"statusCheckbox",children:["Status is: ",c.status]})]})})]}),(0,n.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:[(0,n.jsx)("button",{className:"btn btn-success float-end mb-3 me-2 buttom-align",type:"button",onClick:()=>updateTicketHandler(),children:"Update Ticket"}),(0,n.jsx)("button",{className:"btn btn-danger float-end mb-3 me-2 buttom-align",type:"button",onClick:()=>deleteTicket(a),children:"Delete Ticket"}),(0,n.jsx)(s(),{href:"/tickets",className:"btn btn-primary float-end mb-3 me-2 buttom-align",type:"button",children:"Return Back"})]})]})]})})]})})})}},8537:function(){},4033:function(e,t,a){e.exports=a(290)}},function(e){e.O(0,[580,396,971,864,744],function(){return e(e.s=8456)}),_N_E=e.O()}]);