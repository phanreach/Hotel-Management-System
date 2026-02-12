module.exports=[58237,a=>{"use strict";let b,c;var d,e=a.i(87924),f=a.i(72131);function g(){return(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:(0,e.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,e.jsx)("h1",{className:"text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-tight",children:"Room Management"}),(0,e.jsx)("p",{className:"text-gray-500 text-base",children:"Manage rooms, availability, pricing, and room status."})]})})})}var h=a.i(87532),i=a.i(4699),i=i;function j(){return(0,e.jsx)("div",{className:"flex flex-col gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4",children:(0,e.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between gap-4",children:[(0,e.jsx)("div",{className:"flex-1 min-w-[300px]",children:(0,e.jsxs)("label",{className:"relative flex w-full",children:[(0,e.jsx)(h.Search,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"}),(0,e.jsx)("input",{type:"text",placeholder:"Search by room name or number...",className:"block w-full rounded-lg border border-gray-200 bg-gray-100 py-3 pl-10 pr-4  text-gray-900 placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"})]})}),(0,e.jsxs)("div",{className:"flex flex-wrap items-center gap-3",children:[(0,e.jsxs)("button",{type:"button",className:"flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg  text-sm font-medium text-gray-900  hover:bg-gray-200 transition-colors",children:[(0,e.jsx)("span",{children:"Room Type"}),(0,e.jsx)(i.default,{className:"w-4 h-4"})]}),(0,e.jsxs)("button",{type:"button",className:"flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg  text-sm font-medium text-gray-900  hover:bg-gray-200 transition-colors",children:[(0,e.jsx)("span",{children:"Status"}),(0,e.jsx)(i.default,{className:"w-4 h-4"})]})]})]})})}var k=a.i(70106);let l=(0,k.default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),m=(0,k.default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);var n=a.i(70025),o=a.i(37927),p=a.i(24537);let q="rooms",r=async a=>(await p.default.delete(`/api/rooms/${a}`)).data;var s=a.i(33508);let t=(0,k.default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]),u=(0,k.default)("image-plus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);function v(){return(0,n.useMutation)({mutationFn:async a=>{let b=new FormData;return a.images.forEach(a=>b.append("images",a)),console.log("room id",a.roomId),(await p.default.post(`/api/rooms/upload-images/${a.roomId}`,b)).data}})}var i=i;let w=(0,k.default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);function x({icon:a,title:b,required:c,maxLength:d,min:f,max:g,guideText:h,type:j,value:k,option:l,onChange:m,error:n}){return(0,e.jsxs)("div",{className:"flex flex-col gap-2 h-full",children:[(0,e.jsxs)("label",{className:"text-md font-bold text-black flex items-center gap-2",children:[a||(0,e.jsx)(w,{className:"w-4 h-4 text-blue-900"}),b," ",c&&(0,e.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,e.jsx)("span",{className:"text-sm text-gray-500",children:h}),(0,e.jsx)("div",{className:"mt-auto",children:function({type:a,title:b,value:c,option:d,maxLength:f,min:g,max:h,onChange:j}){switch(a){case"text":case"number":case"email":case"date":case"time":return(0,e.jsx)("input",{type:a,placeholder:"Enter "+b,maxLength:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary",value:c,onChange:j,min:g,max:h});case"textarea":return(0,e.jsx)("textarea",{placeholder:"Enter "+b,maxLength:f,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary",value:c,onChange:j,rows:4});case"checkbox":return(0,e.jsx)("input",{type:"checkbox",className:"w-5 h-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary",checked:"true"===c,onChange:a=>j&&j({...a,target:{...a.target,value:a.target.checked?"true":"false"}})});case"radio":return(0,e.jsx)("input",{type:"radio",className:"w-5 h-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary",checked:"true"===c,onChange:a=>j&&j({...a,target:{...a.target,value:a.target.checked?"true":"false"}})});case"dropdown":return(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsxs)("select",{className:"w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jci-primary appearance-none",value:c,onChange:j,children:[(0,e.jsxs)("option",{value:"",disabled:!0,children:["Select ",b]}),d&&d.map(a=>(0,e.jsx)("option",{value:a.id,children:a.value},a.id))]}),(0,e.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400",children:(0,e.jsx)(i.default,{className:"w-5 h-5"})})]});default:return"Unknown"}}({type:j,title:b,value:k,option:l,maxLength:d,min:f,max:g,onChange:m})}),"textarea"===j||"text"===j?(0,e.jsxs)("p",{className:"text-sm text-gray-500",children:[k?k.length:0," / ",d??200," characters"]}):(0,e.jsx)("p",{className:"h-5"}),n&&(0,e.jsx)("p",{className:"text-sm text-red-500",children:n})]})}var y=a.i(56493),z=a.i(23292);let A=async({id:a,payload:b})=>(await p.default.put(y.API_ENDPOINT.UPDATE_ROOM(a),b)).data;function B({room:a,onClose:b}){let c,d,[g,h]=(0,f.useState)(a.title||""),[i,j]=(0,f.useState)(a.description||""),[k,l]=(0,f.useState)(a.roomType||""),[m,q]=(0,f.useState)(a.bedSize||0),[r,w]=(0,f.useState)(a.bedType||""),[B,C]=(0,f.useState)(a.maxGuest||1),[D,E]=(0,f.useState)(a.pricePerNight||0),[F,G]=(0,f.useState)(a.rating||0),[H,I]=(0,f.useState)(a.amenities?.map(a=>a.id.toString())||[]),[J,K]=(0,f.useState)(a.images.map(a=>"string"==typeof a?a:"")),[L,M]=(0,f.useState)([]),[N,O]=(0,f.useState)([]),[P,Q]=(0,f.useState)(!1),[R,S]=(0,f.useState)(!1),{mutateAsync:T}=v(),U=(0,f.useRef)(null),{mutateAsync:V}=(c=(0,o.useQueryClient)(),(0,n.useMutation)({mutationFn:A,onMutate:()=>({toastId:z.toast.loading("Updating room...")}),onSuccess:(a,b,d)=>{z.toast.success("Room updated successfully",{id:d?.toastId}),c.invalidateQueries({queryKey:["rooms"]})},onError:(a,b,c)=>{z.toast.error(a?.response?.data?.message||"Failed to update room",{id:c?.toastId})}})),{mutateAsync:W}=(d=(0,o.useQueryClient)(),(0,n.useMutation)({mutationFn:async({roomId:a,keepImages:b})=>p.default.put(y.API_ENDPOINT.SYNC_ROOM_IMAGES(a),b),onMutate:()=>({toastId:z.toast.loading("Syncing images...")}),onSuccess:(a,b,c)=>{z.toast.success("Images updated",{id:c?.toastId}),d.invalidateQueries({queryKey:["rooms"]})},onError:(a,b,c)=>{z.toast.error(a?.response?.data?.message||"Failed to sync images",{id:c?.toastId})}}));(0,f.useEffect)(()=>{S(g!==a.title||i!==a.description||k!==a.roomType||m!==a.bedSize||r!==a.bedType||B!==a.maxGuest||D!==a.pricePerNight||F!==a.rating||H.join(",")!==a.amenities?.map(a=>a.id).join(",")||J.join(",")!==a.images.join(",")||L.length>0)},[g,i,k,m,r,B,D,F,H,J,L,a]);let X=async()=>{Q(!0);try{await V({id:a.id,payload:{title:g,description:i,roomType:k,bedSize:m,bedType:r,maxGuest:B,pricePerNight:D,rating:F,amenityIds:H.map(Number)}}),await W({roomId:a.id,keepImages:J}),L.length>0&&await T({roomId:a.id,images:L}),b()}catch(a){console.error(a),alert("Failed to update room")}finally{Q(!1)}};return(0,e.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:b}),(0,e.jsxs)("div",{className:"relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden",children:[(0,e.jsxs)("div",{className:"sticky top-0 bg-white border-b border-slate-200 p-6 pb-4 rounded-t-2xl",children:[(0,e.jsx)("button",{className:"absolute top-5 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors",onClick:b,children:(0,e.jsx)(s.X,{className:"w-6 h-6"})}),(0,e.jsx)("h2",{className:"text-2xl font-bold text-slate-800",children:"Edit Room"})]}),(0,e.jsxs)("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[(0,e.jsx)(x,{title:"Room Name",required:!0,guideText:"Enter the name of the room.",type:"text",maxLength:100,value:g,onChange:a=>h(a.target.value)}),(0,e.jsx)(x,{title:"Description",required:!0,guideText:"Describe the room.",type:"textarea",maxLength:500,value:i,onChange:a=>j(a.target.value)}),(0,e.jsx)(x,{title:"Room Type",required:!0,guideText:"Select room type",type:"dropdown",option:["Single","Double","Suite","Deluxe"].map((a,b)=>({id:b,value:a,label:a})),value:k,onChange:a=>l(a.target.value)}),(0,e.jsx)(x,{title:"Bed Size",required:!0,guideText:"Select bed size",type:"dropdown",option:["Twin","Full","Queen","King"].map((a,b)=>({id:b,value:a.toString(),label:`${a} m`})),value:m.toString(),onChange:a=>q(Number(a.target.value))}),(0,e.jsx)(x,{title:"Bed Type",required:!0,guideText:"Select bed type",type:"dropdown",option:["Soft","Hard","Memory Foam"].map((a,b)=>({id:b,value:a,label:a})),value:r,onChange:a=>w(a.target.value)}),(0,e.jsx)(x,{title:"Max Guests",required:!0,guideText:"Maximum number of guests",type:"number",value:B.toString(),onChange:a=>C(Number(a.target.value))}),(0,e.jsx)(x,{title:"Price Per Night",required:!0,guideText:"Price per night",type:"number",value:D.toString(),onChange:a=>E(Number(a.target.value))}),(0,e.jsx)(x,{title:"Rating",guideText:"Room rating (0-5)",type:"number",min:0,max:5,value:F.toString(),onChange:a=>G(Number(a.target.value))}),(0,e.jsxs)("div",{children:[(0,e.jsx)("label",{className:"block font-semibold mb-2",children:"Amenities"}),(0,e.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[{id:1,label:"WiFi"},{id:2,label:"Air Conditioner"},{id:3,label:"Sea View"}].map(a=>(0,e.jsxs)("label",{className:"flex items-center gap-2",children:[(0,e.jsx)("input",{type:"checkbox",checked:H.includes(a.id.toString()),onChange:b=>{I(c=>b.target.checked?[...c,a.id.toString()]:c.filter(b=>b!==a.id.toString()))}}),a.label]},a.id))})]}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("label",{className:"font-semibold flex items-center gap-2",children:[(0,e.jsx)(u,{size:20})," Room Images"]}),(0,e.jsx)("input",{ref:U,type:"file",multiple:!0,hidden:!0,accept:"image/*",onChange:a=>{let b=Array.from(a.target.files??[]);M(a=>[...a,...b]),O(a=>[...a,...b.map(a=>URL.createObjectURL(a))]),a.target.value=""}}),(0,e.jsxs)("div",{className:"flex flex-wrap gap-4 mt-3",children:[J.map(a=>(0,e.jsxs)("div",{className:"relative w-32 h-32 group",children:[(0,e.jsx)("img",{src:a,alt:"Room image",className:"w-full h-full object-cover rounded-lg border"}),(0,e.jsx)("button",{onClick:()=>{K(b=>b.filter(b=>b!==a))},className:"absolute top-1 right-1 bg-red-600 text-white p-1 rounded",children:(0,e.jsx)(s.X,{size:14})})]},a)),N.map((a,b)=>(0,e.jsxs)("div",{className:"relative w-32 h-32",children:[(0,e.jsx)("img",{src:a,className:"w-full h-full object-cover rounded"}),(0,e.jsx)("button",{onClick:()=>{URL.revokeObjectURL(N[b]),M(a=>a.filter((a,c)=>c!==b)),O(a=>a.filter((a,c)=>c!==b))},className:"absolute top-1 right-1 bg-red-600 text-white p-1 rounded",children:(0,e.jsx)(s.X,{size:14})})]},a)),(0,e.jsx)("div",{onClick:()=>U.current?.click(),className:"w-32 h-32 border-2 border-dashed flex items-center justify-center cursor-pointer",children:(0,e.jsx)(t,{})})]})]})]}),(0,e.jsxs)("div",{className:"shrink-0 bg-white flex items-center justify-end gap-4 p-6 border-t border-gray-100",children:[(0,e.jsx)("button",{onClick:b,className:"px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium",children:"Cancel"}),(0,e.jsx)("button",{onClick:X,disabled:P||!R,className:"px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition",children:P?"Saving...":"Save Changes"})]})]})]})}function C({rooms:a}){let b,{mutate:c}=(b=(0,o.useQueryClient)(),(0,n.useMutation)({mutationFn:r,onSuccess:()=>{b.invalidateQueries({queryKey:[q]})},onError:a=>{console.error("Error deleting room:",a),alert("Failed to delete room")}})),[d,g]=(0,f.useState)(null),h=a.content;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"overflow-x-auto",children:(0,e.jsxs)("table",{className:"w-full text-left border-collapse",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{className:"bg-gray-50 border-b border-gray-200",children:[(0,e.jsx)("th",{className:"p-4 w-14"}),(0,e.jsx)("th",{className:"p-4 text-xs font-bold text-gray-500 uppercase",children:"Room Info"}),(0,e.jsx)("th",{className:"p-4 text-xs font-bold text-gray-500 uppercase",children:"Type"}),(0,e.jsx)("th",{className:"p-4 text-xs font-bold text-gray-500 uppercase",children:"Price / Night"}),(0,e.jsx)("th",{className:"p-4 text-xs font-bold text-gray-500 uppercase",children:"Status"}),(0,e.jsx)("th",{className:"p-4 text-xs font-bold text-gray-500 uppercase",children:"Capacity"}),(0,e.jsx)("th",{className:"p-4 text-right text-xs font-bold text-gray-500 uppercase",children:"Actions"})]})}),(0,e.jsx)("tbody",{className:"divide-y divide-gray-200",children:h.map(a=>(0,e.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,e.jsx)("td",{className:"p-4"}),(0,e.jsxs)("td",{className:"p-4 flex items-center gap-3",children:[(0,e.jsx)("img",{src:a.images?.[0]||"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",alt:a.title,className:"rounded-lg object-cover w-15 h-15"}),(0,e.jsx)("p",{className:"font-bold text-gray-900",children:a.title})]}),(0,e.jsx)("td",{className:"p-4 text-sm",children:a.roomType}),(0,e.jsxs)("td",{className:"p-4 text-sm",children:["$",a.pricePerNight]}),(0,e.jsx)("td",{className:"p-4",children:(0,e.jsx)("span",{className:`px-2.5 py-1 rounded-full text-xs font-bold ${a.isAvailable?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:a.isAvailable?"Available":"Not Available"})}),(0,e.jsxs)("td",{className:"p-4 text-sm",children:[a.maxGuest," persons"]}),(0,e.jsx)("td",{className:"p-4 text-right",children:(0,e.jsxs)("div",{className:"flex justify-end gap-1",children:[(0,e.jsx)("button",{className:"p-2 hover:bg-blue-50 rounded-lg text-blue-600 cursor-pointer",onClick:()=>{g(a)},children:(0,e.jsx)(m,{size:16})}),(0,e.jsx)("button",{className:"p-2 hover:bg-red-50 rounded-lg text-red-600 cursor-pointer",onClick:()=>{var b;(b=a.id)&&confirm("Are you sure you want to delete this room?")&&c(b)},children:(0,e.jsx)(l,{size:16})})]})})]},a.id))})]})}),d&&(0,e.jsx)(B,{room:d,onClose:()=>{g(null)}})]})}var D=a.i(15467),E=a.i(4667),F=a.i(67807),G=a.i(13749),H=a.i(50522);let I=({currentPage:a,totalPages:b,onPageChange:c})=>{let d=d=>{d>0&&d<=b&&d!==a&&(c(d),window.scrollTo({top:0,behavior:"smooth"}))};if(b<=1)return null;let f=[],g=Math.max(1,a-2),h=Math.min(b,a+2);for(let a=g;a<=h;a++)f.push(a);return(0,e.jsxs)("div",{className:"flex justify-center items-center gap-3 mt-6",children:[(0,e.jsx)("button",{onClick:()=>d(a-1),disabled:1===a,className:"p-2 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors",children:(0,e.jsx)(G.ChevronLeft,{size:20})}),(0,e.jsx)("div",{className:"flex gap-2",children:f.map(b=>(0,e.jsx)("button",{onClick:()=>d(b),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${a===b?"bg-blue-600 text-white shadow-md":"text-gray-600 hover:bg-gray-100"}`,children:b},b))}),(0,e.jsx)("button",{onClick:()=>d(a+1),disabled:a===b,className:"p-2 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors",children:(0,e.jsx)(H.ChevronRight,{size:20})})]})},J={data:""},K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,L=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,N=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?N(g,f):f+"{"+N(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=N(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=N.p?N.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},O={},P=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+P(a[c]);return b}return a};function Q(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=P(a),h=O[g]||(O[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!O[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=K.exec(a.replace(L,""));)b[4]?d.shift():b[3]?(c=b[3].replace(M," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(M," ").trim();return d[0]})(a);O[h]=N(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&O.g?O.g:null;return c&&(O.g=O[h]),f=O[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":N(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||J,d.g,d.o,d.k)}Q.bind({g:1});let R,S,T,U=Q.bind({k:1});function V(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:S&&S()},h),c.o=/ *go\d+/.test(i),h.className=Q.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),T&&j[0]&&T(h),R(j,h)}return b?b(e):e}}var W=(a,b)=>"function"==typeof a?a(b):a,X=(b=0,()=>(++b).toString()),Y="default",Z=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return Z(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},$=[],_={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},aa={},ab=(a,b=Y)=>{aa[b]=Z(aa[b]||_,a),$.forEach(([a,c])=>{a===b&&c(aa[b])})},ac=a=>Object.keys(aa).forEach(b=>ab(a,b)),ad=(a=Y)=>b=>{ab(b,a)},ae=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||X()}))(b,a,c);return ad(e.toasterId||(d=e.id,Object.keys(aa).find(a=>aa[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},af=(a,b)=>ae("blank")(a,b);af.error=ae("error"),af.success=ae("success"),af.loading=ae("loading"),af.custom=ae("custom"),af.dismiss=(a,b)=>{let c={type:3,toastId:a};b?ad(b)(c):ac(c)},af.dismissAll=a=>af.dismiss(void 0,a),af.remove=(a,b)=>{let c={type:4,toastId:a};b?ad(b)(c):ac(c)},af.removeAll=a=>af.remove(void 0,a),af.promise=(a,b,c)=>{let d=af.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?W(b.success,a):void 0;return e?af.success(e,{id:d,...c,...null==c?void 0:c.success}):af.dismiss(d),a}).catch(a=>{let e=b.error?W(b.error,a):void 0;e?af.error(e,{id:d,...c,...null==c?void 0:c.error}):af.dismiss(d)}),a};var ag=U`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ah=U`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ai=U`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,aj=V("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ag} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ah} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ai} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ak=U`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,al=V("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${ak} 1s linear infinite;
`,am=U`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,an=U`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ao=V("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${am} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${an} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ap=V("div")`
  position: absolute;
`,aq=V("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ar=U`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,as=V("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ar} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,at=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(as,null,b):b:"blank"===c?null:f.createElement(aq,null,f.createElement(al,{...d}),"loading"!==c&&f.createElement(ap,null,"error"===c?f.createElement(aj,{...d}):f.createElement(ao,{...d})))},au=V("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,av=V("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${U(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${U(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(at,{toast:a}),i=f.createElement(av,{...a.ariaProps},W(a.message,a));return f.createElement(au,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))}),d=f.createElement,N.p=void 0,R=d,S=void 0,T=void 0,Q`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var aw=a.i(83490);function ax(){let a,[b,c]=(0,f.useState)(!1),[d,g]=(0,f.useState)(!1),[h,i]=(0,f.useState)(!1),[j,k]=(0,f.useState)(""),[l,m]=(0,f.useState)(""),[r,w]=(0,f.useState)(""),[z,A]=(0,f.useState)(0),[B,C]=(0,f.useState)(""),[D,E]=(0,f.useState)(1),[F,G]=(0,f.useState)(0),[H,I]=(0,f.useState)(0),[J,K]=(0,f.useState)([]),[L,M]=(0,f.useState)([]),[N,O]=(0,f.useState)([]),P=(0,f.useRef)([]),Q=(a=(0,o.useQueryClient)(),(0,n.useMutation)({mutationFn:async a=>(await p.default.post(y.API_ENDPOINT.ROOMS,a)).data,onMutate:()=>({toastId:af.loading("Adding room...")}),onSuccess:(b,c,d)=>{d?.toastId&&(af.dismiss(d.toastId),af.success("Room added successfully")),a.invalidateQueries({queryKey:[q]})},onError:(a,b,c)=>{let d="Failed to add room";aw.default.isAxiosError(a)?d=a.response?.data?.message||d:a instanceof Error&&(d=a.message),c?.toastId&&af.dismiss(c.toastId),af.error(d)}})),R=v(),S=async()=>{try{g(!0);let a={title:j,description:l,roomType:r,bedSize:z,bedType:B,maxGuest:D,pricePerNight:F,rating:H,amenityIds:J.map(Number)};Object.keys(a).forEach(b=>{let c=a[b];(""===c||null===c||Array.isArray(c)&&0===c.length)&&delete a[b]});let b=await Q.mutateAsync(a);console.log("room",b),P.current.length>0&&await R.mutateAsync({roomId:b.id,images:P.current}),P.current.forEach((a,b)=>URL.revokeObjectURL(L[b])),P.current=[],O([]),M([]),c(!1),i(!1)}catch(a){console.error("Create room failed:",a)}finally{g(!1)}};return(0,f.useEffect)(()=>{(j||l||r||z||B||D||F||H||J.length||N.length)&&i(!0)},[j,l,r,z,B,D,F,H,J,N]),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,e.jsx)("button",{onClick:()=>c(!0),className:"inline-flex items-center gap-2 bg-blue-500 text-white font-semibold px-4 py-3 rounded-2xl shadow-lg cursor-pointer hover:bg-blue-600 hover:shadow-xl transition-all duration-200 ease-in-out",children:"Add New Room"})}),b&&(0,e.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",children:[(0,e.jsx)("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm"}),(0,e.jsxs)("div",{className:"relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",children:[(0,e.jsxs)("div",{className:"sticky top-0 bg-white border-b border-slate-200 p-8 pb-4 rounded-t-2xl",children:[(0,e.jsx)("button",{className:"absolute top-6 right-6 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg p-2 transition-colors cursor-pointer",onClick:()=>c(!1),children:(0,e.jsx)(s.X,{className:"w-5 h-5"})}),(0,e.jsx)("h2",{className:"text-2xl font-bold text-slate-800",children:"Create New Room"})]}),(0,e.jsx)("div",{className:"flex-1 overflow-y-auto",children:(0,e.jsxs)("div",{className:"p-6 space-y-4",children:[(0,e.jsx)(x,{title:"Room Name",required:!0,guideText:"Enter the name of the room.",type:"text",maxLength:100,value:j,onChange:a=>k(a.target.value)}),(0,e.jsx)(x,{title:"Description",required:!0,guideText:"Describe the room.",type:"textarea",maxLength:500,value:l,onChange:a=>m(a.target.value)}),(0,e.jsx)(x,{title:"Room Type",required:!0,guideText:"Enter the room type.",type:"text",value:r,onChange:a=>w(a.target.value)}),(0,e.jsx)(x,{title:"Bed Size",required:!0,guideText:"Enter the bed size (e.g., Twin, Queen, King).",type:"number",value:z.toString(),onChange:a=>A(Number(a.target.value))}),(0,e.jsx)(x,{title:"Bed Type",required:!0,guideText:"Enter the bed type (e.g., Soft, Memory Foam).",type:"text",value:B,onChange:a=>C(a.target.value)}),(0,e.jsx)(x,{title:"Max Guests",required:!0,guideText:"Maximum number of guests.",type:"number",value:D.toString(),onChange:a=>E(Number(a.target.value))}),(0,e.jsx)(x,{title:"Price Per Night",required:!0,guideText:"Set the price per night.",type:"number",value:F.toString(),onChange:a=>G(Number(a.target.value))}),(0,e.jsx)(x,{title:"Rating",guideText:"Room rating out of 5.",type:"number",value:H.toString(),onChange:a=>I(Number(a.target.value))}),[{id:1,label:"WiFi"},{id:2,label:"Air Conditioner"},{id:3,label:"Sea View"}].map(a=>(0,e.jsxs)("label",{className:"flex items-center gap-2",children:[(0,e.jsx)("input",{type:"checkbox",checked:J.includes(a.id.toString()),onChange:b=>{K(c=>b.target.checked?[...c,a.id.toString()]:c.filter(b=>b!==a.id.toString()))}}),a.label]},a.id)),(0,e.jsxs)("div",{className:"space-y-2",children:[(0,e.jsxs)("label",{className:"font-semibold flex gap-2 items-center",children:[(0,e.jsx)(u,{})," Room Images"]}),(0,e.jsx)("input",{id:"file-upload",type:"file",multiple:!0,accept:"image/*",hidden:!0,onChange:a=>{let b=Array.from(a.target.files||[]);if(!b.length)return;let c=b.map(a=>URL.createObjectURL(a));P.current=[...P.current,...b],O(P.current),M(a=>[...a,...c]),a.target.value=""}}),(0,e.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[L.map((a,b)=>(0,e.jsxs)("div",{className:"relative w-32 h-32",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{URL.revokeObjectURL(L[b]),P.current=P.current.filter((a,c)=>c!==b),O(P.current),M(a=>a.filter((a,c)=>c!==b))},className:"absolute top-1 right-1 bg-black text-white rounded-full p-1",children:(0,e.jsx)(s.X,{size:14})}),(0,e.jsx)("img",{src:a,alt:`preview-${b}`,className:"w-full h-full object-cover rounded"})]},b)),(0,e.jsx)("label",{htmlFor:"file-upload",className:"w-32 h-32 border-dashed border-2 flex items-center justify-center cursor-pointer rounded",children:(0,e.jsx)(t,{className:"text-gray-400"})})]})]})]})}),(0,e.jsxs)("div",{className:"shrink-0 bg-white flex items-center justify-end gap-3 p-6 border-t border-slate-200 rounded-b-2xl",children:[(0,e.jsx)("button",{onClick:()=>c(!1),className:"px-6 py-2.5 rounded-lg border text-slate-700 font-semibold cursor-pointer hover:bg-gray-100",children:"Cancel"}),(0,e.jsx)("button",{disabled:d||!h,onClick:S,className:"px-6 py-2.5 rounded-lg bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed",children:d?"Creating...":"Create Room"})]})]})]})]})}var ay=a.i(5434);function az(){let[a,b]=(0,f.useState)(!1),[c,d]=(0,f.useState)(1),{data:h,isLoading:i}=(0,F.default)(c-1);return console.log("Token from cookie:",ay.default.get("accessToken")),console.log("Rooms data:",h),(0,e.jsx)(E.default,{allowedRoles:["ADMIN"],children:(0,e.jsxs)("div",{className:"flex h-screen w-full bg-gray-50 overflow-hidden",children:[(0,e.jsx)(D.default,{activePath:"/admin/room",collapsed:a,onToggle:()=>b(a=>!a)}),(0,e.jsx)("main",{className:`flex-1 overflow-y-auto transition-all duration-300 ${a?"ml-20":"ml-64"}`,children:(0,e.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8",children:[(0,e.jsxs)("div",{className:"flex items-center justify-between",children:[(0,e.jsx)(g,{}),(0,e.jsx)(ax,{})]}),(0,e.jsx)("section",{className:"bg-white rounded-xl",children:(0,e.jsx)(j,{})}),(0,e.jsx)("section",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",children:i||!h?(0,e.jsx)("div",{className:"p-8 text-center text-gray-500",children:"Loading rooms…"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(C,{rooms:h}),(0,e.jsx)("div",{className:"my-6 flex justify-center border-t border-gray-200 p-3",children:(0,e.jsx)(I,{currentPage:c,totalPages:h.totalPages,onPageChange:d})})]})})]})})]})})}a.s(["default",()=>az,"dynamic",0,"force-dynamic"],58237)}];

//# sourceMappingURL=src_app_admin_room_page_tsx_c9bee9c6._.js.map