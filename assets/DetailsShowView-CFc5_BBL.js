import{d as m,r as d,w as b,c as u,a,n as B,o as c,p as V,b as L,_ as g,F as M,e as N,t as n,f as v,g as R,h as f,D as $,i as T,l as A,u as C}from"./index-DkijZ8DR.js";const E=l=>(V("data-v-4636597f"),l=l(),L(),l),F={class:"show-details"},H=E(()=>a("div",{class:"backdrop"},null,-1)),z=m({__name:"BackgroundDetails",props:{image:{}},setup(l){const _=l,t=d("");return b(()=>_.image,e=>{const s=(e==null?void 0:e.original)||(e==null?void 0:e.medium)||"";t.value=s?`background-image: url(${s});`:""}),(e,s)=>(c(),u("div",F,[a("div",{class:"background",style:B(t.value)},null,4),H]))}}),j=g(z,[["__scopeId","data-v-4636597f"]]),q={class:"show-details"},G={class:"metainfo genres"},J={class:"showname"},K={class:"shoetype"},O={class:"metainfo basicinfo"},P={key:1},Q=["innerHTML"],U=["href"],W=m({__name:"ShowDetails",props:{show:{}},setup(l){const _=l,t=d(""),e=d("");return b(()=>_.show,s=>{var r;const{days:p,time:i}=(s==null?void 0:s.schedule)||{},o=i?`: ${i}`:"";t.value=`${p}${o}`,e.value=((r=s==null?void 0:s.ended)==null?void 0:r.split("-")[0])||""}),(s,p)=>{var i,o,r,h,y,k,S,w;return c(),u("div",q,[a("div",G,[(c(!0),u(M,null,N((i=s.show)==null?void 0:i.genres,D=>(c(),u("span",{key:D,class:"itemgenre"},n(D),1))),128))]),a("h2",J,n((o=s.show)==null?void 0:o.name),1),a("p",K,n((r=s.show)==null?void 0:r.type),1),a("div",O,[a("span",null,n((h=s.show)==null?void 0:h.language),1),v($),a("span",null,n((y=s.show)==null?void 0:y.averageRuntime)+" min",1),e.value?(c(),R($,{key:0})):f("",!0),e.value?(c(),u("span",P,n(s.$t("showDetails.ended"))+": "+n(e.value),1)):f("",!0)]),a("p",{class:"summary",innerHTML:(k=s.show)==null?void 0:k.summary},null,8,Q),a("p",null,n(t.value),1),(S=s.show)!=null&&S.officialSite?(c(),u("a",{key:0,class:"button -red",href:(w=s.show)==null?void 0:w.officialSite,target:"_blank"},n(s.$t("showDetails.officialSite")),9,U)):f("",!0)])}}}),X=g(W,[["__scopeId","data-v-be8e98d5"]]),Y={class:"details-show -fullheight"},Z=m({__name:"DetailsShowView",setup(l){const _=C(),{id:t}=_.currentRoute.value.params,e=Array.isArray(t)?t[0]:t,s=d(null),p=d(!0),i=d(!1);return T(async()=>{try{const{data:o,error:r}=await A({showId:e});o&&!r?s.value=o:i.value=!0}catch{i.value=!0}finally{p.value=!1}}),(o,r)=>{var h;return c(),u("div",Y,[v(j,{image:(h=s.value)==null?void 0:h.image},null,8,["image"]),v(X,{show:s.value},null,8,["show"])])}}}),x=g(Z,[["__scopeId","data-v-f6d58b98"]]);export{x as default};