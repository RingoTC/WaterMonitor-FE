(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[479],{1341:function(e,t,n){Promise.resolve().then(n.bind(n,3758))},3758:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Details}});var i=n(7437),a=n(2265),o=n(3198),c=n(2173),r=n(8597),s=n(4434),l=n(8850),d=n(1387),h=n(2824);n(1454);var g=n(4033),v=n(9639),u=n(1396),m=n.n(u);n(504);var p=n(6742);let y="http://localhost:9000",getProvinces=async()=>{let e="".concat(y,"/waterpub/Home/GetProvinceList");return await c.Z.get(e)},getCitiesByProvinceCode=async e=>{let t="".concat(y,"/waterpub/Home/GetCityList?provinceCode=").concat(e);return await c.Z.get(t)},getSectionDataList=async(e,t,n)=>{let i="".concat(y,"/waterpub/Home/GetSectionDataList?sectionName=&provinceCode=").concat(e,"&cityCode=").concat(t,"&taskMonth=").concat(n);return await c.Z.get(i)},setProvinces=e=>({type:"SET_PROVINCES",payload:e}),setCities=e=>({type:"SET_CITIES",payload:e}),setSectionData=e=>({type:"SET_SECTION_DATA",payload:e});function Details(){var e;let t=(0,o.I0)(),n=(0,o.v9)(e=>e.data.province.list),c=(0,o.v9)(e=>e.data.city.list),u=(0,o.v9)(e=>e.data.sectionData.list),[y,C]=(0,a.useState)("北京市"),[x,j]=(0,a.useState)("北京市"),[f,S]=(0,a.useState)(!0),[w,Z]=(0,a.useState)(u[0]),[P,E]=(0,a.useState)(null);(0,g.useRouter)();let b=(0,g.useSearchParams)(),k=(0,o.v9)(e=>e.auth.user);(0,a.useEffect)(()=>{let fetchData=async()=>{try{let e=await getProvinces();t(setProvinces(e.data)),b.get("Province")&&b.get("City")&&await handleQuery()}catch(e){console.error("Error fetching provinces:",e)}};fetchData()},[t]);let handleQuery=async()=>{let e=b.get("Province"),n=b.get("City");try{let i=await getSectionDataList(e,n,"202310");t(setSectionData(i.data)),i.data.length>0&&handleProvinceChange(e,"000").then(()=>{handleCityChange("000","000",e,n)})}catch(e){console.error("Error fetching section data:",e)}},handleProvinceChange=async(e,n)=>{C({name:e,code:n}),S(!0);try{let e=await getCitiesByProvinceCode(n);t(setCities(e.data)),e.data.length>0&&j({code:e.data[0].CityCode,name:e.data[0].CityCH}),S(!1)}catch(e){console.error("Error fetching cities:",e)}},handleCityChange=async(e,n,i,a)=>{j({code:n,name:a});try{let e=await getSectionDataList(i,a,"202310");t(setSectionData(e.data)),e.data.length>0&&E(e.data[0])}catch(e){console.error("Error fetching section data:",e)}},handleSectionClick=e=>{E(e),Z(e)};return(0,i.jsxs)("div",{style:{padding:"20px"},children:[(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(p.Z.Heading,{children:"Section Data"}),(0,i.jsx)("p",{children:"This page is used to display the section data of the water quality monitoring section. The data is updated every day and from CNEMC(China National Environmental Monitoring Centre, http://waterpub.cnemc.cn:10001/)."}),(0,i.jsx)("p",{children:'CNEMC (hereinafter referred to as "Terminal") is a public institution directly under the Ministry of Ecology and Environment, approved by the state at the end of 1979, and formally organized in 1980. Its main functions are to undertake national ecological environment monitoring tasks, lead the development of ecological environment monitoring technology, and provide monitoring information and technical support for the national ecological environment management and decision-making, Its main functions are to undertake national ecological environment monitoring tasks, lead the development of ecological environment monitoring technology, provide monitoring information, reports and technical support for national ecological environment management and decision-making, and provide technical guidance for national ecological environment monitoring.'})]}),k&&(0,i.jsxs)("div",{children:[(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(s.Z,{style:{float:"left",marginRight:"10px"},children:(0,i.jsxs)(l.Z,{className:"float",children:[(0,i.jsx)(l.Z.Toggle,{variant:"success",id:"dropdown-province",children:null!==(e=null==y?void 0:y.name)&&void 0!==e?e:"Select Province"}),(0,i.jsx)(l.Z.Menu,{children:n.map(e=>(0,i.jsx)(l.Z.Item,{onClick:()=>handleProvinceChange(e.ProvinceCH,e.ProvinceCode),children:e.ProvinceCH},e.ProvinceCode))})]})}),(0,i.jsx)(s.Z,{style:{float:"left"},children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(l.Z.Toggle,{variant:"success",id:"dropdown-city",disabled:f,children:(null==y?void 0:y.name)&&(null==x?void 0:x.name)||"Select City"}),(0,i.jsx)(l.Z.Menu,{children:c.map(e=>(0,i.jsx)(l.Z.Item,{onClick:()=>handleCityChange(null==y?void 0:y.code,e.CityCode,null==y?void 0:y.name,e.CityCH),children:e.CityCH},e.CityCode))})]})})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(s.Z,{xs:4,children:[(0,i.jsx)("h3",{children:"Section Data"}),(0,i.jsxs)(d.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("th",{children:"Section Name"})})}),(0,i.jsx)("tbody",{children:u.map(e=>(0,i.jsxs)("tr",{onClick:()=>handleSectionClick(e),className:"section-item ".concat(w===e?"selected-section":""),children:[(0,i.jsx)("td",{children:e.SectionName}),(0,i.jsx)("td",{width:"10%",children:(0,i.jsx)(m(),{href:"/details/?Province=".concat(null==y?void 0:y.name,"&&City=").concat(null==x?void 0:x.name,"&&Section=").concat(e.SectionName),children:(0,i.jsx)("svg",{t:"1702145765038",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1481",width:"30",height:"30",children:(0,i.jsx)("path",{d:"M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4",fill:"#1296db","p-id":"1482"})})})})]},e.SectionCode))})]})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("h3",{children:"Selected Section Data"}),P&&(0,i.jsxs)(d.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Value"})]})}),(0,i.jsx)("tbody",{children:Object.entries(P).map(e=>{let[t,n]=e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t}),(0,i.jsx)("td",{children:n})]},t)})})]}),!P&&(0,i.jsx)(v.Z,{animation:"grow"})]})]})]}),!k&&(0,i.jsx)(h.Z,{style:{height:"80vh"},children:(0,i.jsxs)(p.Z,{variant:"danger",className:"text-center",children:[(0,i.jsx)(p.Z.Heading,{children:"Access Denied"}),(0,i.jsx)("p",{children:"You must be logged in to access this page."}),"Link to ",(0,i.jsx)(m(),{href:"/reduxlogin",children:"Login"})]})})]})}},1454:function(){}},function(e){e.O(0,[580,198,396,680,430,971,864,744],function(){return e(e.s=1341)}),_N_E=e.O()}]);