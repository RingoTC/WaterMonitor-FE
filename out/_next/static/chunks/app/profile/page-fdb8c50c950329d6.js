(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{458:function(e,t,s){Promise.resolve().then(s.bind(s,4898))},5090:function(e,t,s){"use strict";s.d(t,{DY:function(){return userProfile},DZ:function(){return userUpdate},Nt:function(){return deleteSkill},Of:function(){return updateSkill},v7:function(){return addSkill}});var i=s(2173),l=s(2601);let a=l.env.NEXT_PUBLIC_BACKEND,n=i.Z.create({baseURL:"".concat(a,"/user"),withCredentials:!0}),userProfile=async e=>{let t=await n.get("/".concat(e));return t.data},userUpdate=async e=>{let t=await n.put("/change/".concat(e.username),e);return console.log(t.data),t.data},addSkill=async(e,t)=>{try{let s=await n.post("/change/".concat(e.username),{newSkill:t});return s.data}catch(e){throw console.error("Error adding skill:",e),e}},deleteSkill=async(e,t)=>{try{let s=await n.delete("/change/".concat(e,"/skills/").concat(t));return s.data}catch(e){throw console.error("Error deleting skill:",e),e}},updateSkill=async(e,t,s)=>{try{let i=await n.put("/change/".concat(e,"/skills/").concat(t),s);return console.log(i),i.data}catch(e){throw console.error("Error updating skill:",e),e}}},4898:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Profile}});var i=s(7437);s(1571);var l=s(2265);s(5172);var a=s(9387),n=s(5090),r=s(3198),c=s(8978),o=s(4033);function Profile(){let e=(0,o.useRouter)(),t=(0,o.useSearchParams)(),s=(0,r.I0)(),d=(0,r.v9)(e=>e.auth.user),u=(0,r.v9)(e=>e.userData);t.get("username");let fetchUser=async()=>{try{let e=await n.DY(d.username);s((0,c.M)(e))}catch(e){console.error(e)}};return(0,l.useEffect)(()=>{d?fetchUser():e.push("/login")},[s]),(0,i.jsx)("div",{className:"row justify-content-between",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Z,{userData:u}),(0,i.jsxs)("div",{className:"row  justify-content-lg-center mt-5",children:[(0,i.jsxs)("div",{className:"col-2 col-lg-2 bg-light",style:{marginRight:"15px"},children:[(0,i.jsx)("h5",{className:"border-bottom mt-1",children:"Report to"}),(0,i.jsx)("br",{}),(0,i.jsx)("h5",{className:"border-bottom",children:"Work Together With"}),(0,i.jsx)("p",{children:"abc"})]}),(0,i.jsx)("div",{className:"col-10 col-sm-12 col-lg-8 bg-light mb-5",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("h3",{className:"mt-3",children:"SKILLS"}),(0,i.jsx)("ul",{className:"list-group",children:u.skills&&u.skills.map((e,t)=>(0,i.jsxs)("li",{className:"list-group-item ",children:[(0,i.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,i.jsx)("h5",{children:e.name}),e.certified&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("small",{className:"text-muted",children:(0,i.jsxs)("p",{children:["Certified ",new Date(e.certificationIssueDate).toLocaleDateString()]})})})]}),(0,i.jsxs)("p",{children:["Proficiency: ",e.proficiency]})]},t))})]})})]})]})})}},9387:function(e,t,s){"use strict";s.d(t,{Z:function(){return PersonInfoCard}});var i=s(7437);function ProfileImage(){return(0,i.jsxs)("svg",{t:1702422223395,className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":2169,width:200,height:200,children:[(0,i.jsx)("path",{d:"M880 896c0-126.29-63.62-237.72-160.57-304a368.15 368.15 0 0 1-414.86 0C207.62 658.28 144 769.71 144 896a48 48 0 0 0 48 48h640a48 48 0 0 0 48-48z",fill:"#FFFFFF","p-id":2170}),(0,i.jsx)("path",{d:"M880 896c0-126.29-63.62-237.72-160.57-304A366.25 366.25 0 0 1 512 656c-76.95 0-144-31-160-39.94-84.7 67.5-160 167.87-160 279.94a48 48 0 0 0 48 48h592a48 48 0 0 0 48-48z",fill:"#82AAFA","p-id":2171}),(0,i.jsx)("path",{d:"M512 304m-224 0a224 224 0 1 0 448 0 224 224 0 1 0-448 0Z",fill:"#FFFFFF","p-id":2172}),(0,i.jsx)("path",{d:"M536 328m-200 0a200 200 0 1 0 400 0 200 200 0 1 0-400 0Z",fill:"#FF9580","p-id":2173}),(0,i.jsx)("path",{d:"M832 960H192a64.07 64.07 0 0 1-64-64 384.1 384.1 0 0 1 167.54-317.21 16 16 0 0 1 18.06 0 352.14 352.14 0 0 0 396.8 0 16 16 0 0 1 18.06 0A384.1 384.1 0 0 1 896 896a64.07 64.07 0 0 1-64 64zM304.85 611.38A352.11 352.11 0 0 0 160 896a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32 352.11 352.11 0 0 0-144.85-284.62 384.25 384.25 0 0 1-414.3 0zM512 544a240 240 0 0 1-169.71-409.71 240 240 0 0 1 339.42 339.42A238.43 238.43 0 0 1 512 544z m0-448c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208S626.69 96 512 96z",fill:"#333333","p-id":2174}),(0,i.jsx)("path",{d:"M576 864H448a32 32 0 0 1 0-64h128a32 32 0 0 1 0 64z",fill:"#333333","p-id":2175})]})}s(6691),s(9696);var l=s(2510),a=s(9150),n=s(4606),r=s(1266);s(2265),s(3198),s(7681),s(5090);var c=s(1396),o=s.n(c);function PersonInfoCard(e){let{userData:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"container mt-5",style:{lineHeight:"2.6"},children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"bg-light col-12 col-lg-10",children:(0,i.jsxs)("div",{className:"row align-items-center",children:[(0,i.jsxs)("div",{className:"col-12 col-md-12 col-lg-3 mt-5 mb-5 text-center",children:[(0,i.jsx)(ProfileImage,{}),(0,i.jsx)("h2",{children:null==t?void 0:t.username})]}),(0,i.jsxs)("div",{className:"col-12 col-md-12 col-lg-4 text-left border-end",children:[(0,i.jsxs)("span",{children:["First Name: ",null==t?void 0:t.firstName]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{children:["Last Name: ",null==t?void 0:t.lastName]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{children:["Position: ",null==t?void 0:t.position]}),(0,i.jsx)("br",{}),(0,i.jsx)(l.E3g,{color:"blue"}),(0,i.jsxs)("span",{children:["Company: ",null==t?void 0:t.company]}),(0,i.jsx)("br",{}),(0,i.jsx)(a.Dme,{}),(0,i.jsxs)("span",{children:["Email: ",null==t?void 0:t.email]}),(0,i.jsx)("br",{}),(0,i.jsx)(n.lfG,{}),(0,i.jsxs)("span",{children:["Cellphone: ",null==t?void 0:t.cellphone]}),(0,i.jsx)("br",{}),(0,i.jsx)(r.fp2,{}),(0,i.jsxs)("span",{children:["Location: ",null==t?void 0:t.city,",",null==t?void 0:t.country]})]}),(0,i.jsxs)("div",{className:"col-12 col-md-12 col-lg-5 text-left",children:[(0,i.jsxs)("p",{children:["About: ",null==t?void 0:t.about]}),(0,i.jsx)(o(),{href:"/profile/editProfile",className:"btn btn-primary mt-3 d-none d-md-block",style:{width:"200px"},children:"Edit My Profile"})]})]})})})})})}},5172:function(e,t,s){"use strict";s.d(t,{Z:function(){return ProfileSkillsList}});var i=s(7437),l=s(2265),a=s(3198),n=s(8978),r=s(5090);function ProfileSkillsList(){let e=(0,a.I0)(),[t,s]=(0,l.useState)(""),c=(0,a.v9)(e=>e.userData),[o,d]=(0,l.useState)({name:"",proficiency:"Please select",certified:!1,issueDate:"",expirationDate:""}),[u,h]=(0,l.useState)(null),resetSkillForm=()=>{d({name:"",proficiency:"Please select",certified:!1,issueDate:"",expirationDate:""}),h(null)},handleAddSkill=async()=>{if(console.log(o),o.name&&o.proficiency){let t=await r.v7(c,o);e((0,n.M)(t)),resetSkillForm()}},handleDeleteSkill=async t=>{try{let s=await r.Nt(c.username,t);e((0,n.M)(s))}catch(e){console.error("Could not delete the skill",e)}},handleUpdateSkill=async()=>{if(u&&o.name&&"Please select"!==o.proficiency)try{console.log(o);let t=await r.Of(c.username,u,o);e((0,n.M)(t)),resetSkillForm()}catch(e){console.error("Error updating skill:",e)}};return(0,i.jsxs)("div",{className:"mb-5",children:[(0,i.jsxs)("div",{className:"input-group mb-3",children:[(0,i.jsx)("span",{className:"input-group-text",id:"skillNameLabel",children:"Skill Name"}),(0,i.jsx)("input",{type:"text",className:"form-control","aria-label":"Skill Name","aria-describedby":"skillNameLabel",value:o.name,onChange:e=>d({...o,name:e.target.value})})]}),(0,i.jsxs)("div",{className:"input-group mb-3",children:[(0,i.jsx)("span",{className:"input-group-text",id:"proficiencyLabel",children:"Proficiency"}),(0,i.jsxs)("select",{className:"form-select","aria-label":"Proficiency",value:o.proficiency,onChange:e=>d({...o,proficiency:e.target.value}),children:[(0,i.jsx)("option",{value:"Please select",children:"Please select"}),(0,i.jsx)("option",{value:"Beginner",children:"Beginner"}),(0,i.jsx)("option",{value:"Intermediate",children:"Intermediate"}),(0,i.jsx)("option",{value:"Advanced",children:"Advanced"})]})]}),(0,i.jsxs)("div",{className:"form-group mb-3",children:[(0,i.jsx)("label",{children:"Do you have a certificate?"}),(0,i.jsxs)("div",{className:"form-check",children:[(0,i.jsx)("input",{type:"radio",className:"form-check-input",id:"certificateTrue",name:"certificate",value:"true",checked:o.certified,onChange:()=>d({...o,certified:!0})}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"certificateTrue",children:"True"})]}),(0,i.jsxs)("div",{className:"form-check",children:[(0,i.jsx)("input",{type:"radio",className:"form-check-input",id:"certificateFalse",name:"certificate",value:"false",checked:!o.certified,onChange:()=>d({...o,certified:!1})}),(0,i.jsx)("label",{className:"form-check-label",htmlFor:"certificateFalse",children:"False"})]})]}),o.certified&&(0,i.jsxs)("div",{id:"dateInputs",className:"mb-3",children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"issueDate",children:"Issue Date:"}),(0,i.jsx)("input",{type:"date",className:"form-control",id:"issueDate",name:"issueDate",value:o.issueDate,onChange:e=>d({...o,issueDate:e.target.value})})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"expirationDate",children:"Expiration Date:"}),(0,i.jsx)("input",{type:"date",className:"form-control",id:"expirationDate",name:"expirationDate",value:o.expirationDate,onChange:e=>d({...o,expirationDate:e.target.value})})]})]}),(0,i.jsx)("button",{className:"btn btn-success w-25",style:{marginRight:"5px"},onClick:handleAddSkill,children:"Add"}),(0,i.jsx)("button",{className:"btn btn-primary w-25",onClick:handleUpdateSkill,children:"Update"}),(0,i.jsx)("ul",{className:"list-group",children:(null==c?void 0:c.skills)&&(null==c?void 0:c.skills.map((e,t)=>(0,i.jsxs)("li",{className:"list-group-item ",children:[(0,i.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[(0,i.jsx)("h5",{children:e.name}),e.certified&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("small",{className:"text-muted",children:(0,i.jsxs)("p",{children:["Certified ",new Date(e.certificationIssueDate).toLocaleDateString()]})})})]}),(0,i.jsxs)("p",{children:["Proficiency: ",e.proficiency]}),(0,i.jsx)("button",{className:"btn btn-warning",style:{marginRight:"5px"},onClick:()=>{d({name:e.name,proficiency:e.proficiency,certified:e.certified,issueDate:e.issueDate||"",expirationDate:e.expirationDate||""}),h(e._id)},children:"Edit"}),(0,i.jsx)("button",{className:"btn btn-danger",onClick:()=>handleDeleteSkill(e._id),children:"Delete"})]},e._id)))})]})}},7681:function(e,t,s){"use strict";s.d(t,{TX:function(){return logoutUser},ZP:function(){return auth},pH:function(){return loginUser}});var i=s(2173),l=s(2601);let a=l.env.NEXT_PUBLIC_BACKEND,n="LOGIN_REQUEST",r="LOGIN_SUCCESS",c="LOGIN_FAILURE",requestLogin=()=>({type:n}),receiveLogin=e=>({type:r,user:e}),loginError=e=>({type:c,message:e});function auth(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,isAuthenticated:!1,user:null,errorMessage:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n:return{...e,isFetching:!0,isAuthenticated:!1,user:null,errorMessage:""};case r:return{...e,isFetching:!1,isAuthenticated:!0,user:t.user,errorMessage:""};case c:return{...e,isFetching:!1,isAuthenticated:!1,user:null,errorMessage:t.message};case"LOGOUT_SUCCESS":return{...e,isAuthenticated:!1,user:null};default:return e}}let loginUser=(e,t)=>s=>(s(requestLogin()),i.Z.post("".concat(a,"/auth/login"),{username:e,password:t},{withCredentials:!0}).then(e=>{s(receiveLogin(e.data.user))}).catch(e=>{let t=e.response?e.response.data.message:e.message;s(loginError(t))})),logoutUser=()=>e=>i.Z.get("".concat(a,"/auth/logout"),{},{withCredentials:!0}).then(()=>{e({type:"LOGOUT_SUCCESS"})}).catch(e=>{console.error("Logout error:",e)})},8978:function(e,t,s){"use strict";s.d(t,{M:function(){return setUserData}});let i={_id:"",username:"",password:"",position:"",company:"",firstName:"",lastName:"",email:"",cellphone:"",city:"",country:"",role:"",about:"",skills:[],likes:[]},l="SET_USER_DATA",setUserData=e=>({type:l,payload:e});t.ZP=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{...t.payload};case"CREATE_SKILL":return{...e,skills:[...e.skills,t.payload]};case"UPDATE_SKILL":return{...e,skills:e.skills.map(e=>e.id===t.payload.id?t.payload:e)};case"DELETE_SKILL":return{...e,skills:e.skills.filter(e=>e.id!==t.payload)};default:return e}}},1571:function(){},9696:function(){}},function(e){e.O(0,[447,306,712,652,126,198,396,325,971,864,744],function(){return e(e.s=458)}),_N_E=e.O()}]);