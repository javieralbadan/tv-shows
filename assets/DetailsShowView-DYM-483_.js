import{d as w,r as p,c,a as s,n as R,o as a,p as A,b as T,_ as k,F as M,e as C,t as i,f,g,h as v,i as E,D as L,j as F,l as H,u as j,A as z,N as q}from"./index-CFcA-dfX.js";const G=e=>(A("data-v-bea7d340"),e=e(),T(),e),J={class:"background-details"},K=G(()=>s("div",{class:"backdrop"},null,-1)),O=w({__name:"BackgroundDetails",props:{image:{}},setup(e){var n,u;const d=e,t=p(""),h=((n=d.image)==null?void 0:n.original)||((u=d.image)==null?void 0:u.medium)||"";return t.value=h?`background-image: url(${h});`:"",(l,r)=>(a(),c("div",J,[s("div",{class:"background",style:R(t.value)},null,4),K]))}}),P=k(O,[["__scopeId","data-v-bea7d340"]]),Q=e=>(A("data-v-fadd9e00"),e=e(),T(),e),U={class:"show-details"},W={class:"metainfo genres"},X={class:"showname"},Y={class:"shoetype"},Z={class:"metainfo basicinfo"},x={key:1},ee=["innerHTML"],se=["href"],ae=Q(()=>s("i",{class:"pi pi-external-link"},null,-1)),oe=w({__name:"ShowDetails",props:{show:{}},setup(e){var r,_,m;const d=e,t=p(""),{days:h,time:n}=((r=d.show)==null?void 0:r.schedule)||{},u=n?`: ${n}`:"";t.value=`${h}${u}`;const l=p("");return l.value=((m=(_=d.show)==null?void 0:_.ended)==null?void 0:m.split("-")[0])||"",(o,ie)=>{var y,S,D,$,b,I,B,N;return a(),c("div",U,[s("div",W,[(a(!0),c(M,null,C((y=o.show)==null?void 0:y.genres,V=>(a(),c("span",{key:V,class:"itemgenre"},i(V),1))),128))]),s("h2",X,i((S=o.show)==null?void 0:S.name),1),s("p",Y,i((D=o.show)==null?void 0:D.type),1),s("div",Z,[s("span",null,i(($=o.show)==null?void 0:$.language),1),f(L),s("span",null,i((b=o.show)==null?void 0:b.averageRuntime)+" min",1),l.value?(a(),g(L,{key:0})):v("",!0),l.value?(a(),c("span",x,i(o.$t("showDetails.ended"))+": "+i(l.value),1)):v("",!0)]),s("p",{class:"summary",innerHTML:(I=o.show)==null?void 0:I.summary},null,8,ee),s("p",null,i(t.value),1),(B=o.show)!=null&&B.officialSite?(a(),c("a",{key:0,class:"button -red",href:(N=o.show)==null?void 0:N.officialSite,target:"_blank"},[E(i(o.$t("showDetails.officialSite"))+" ",1),ae],8,se)):v("",!0)])}}}),te=k(oe,[["__scopeId","data-v-fadd9e00"]]),ne={class:"details-show -fullheight"},le=w({__name:"DetailsShowView",setup(e){const d=j(),{id:t}=d.currentRoute.value.params,h=Array.isArray(t)?t[0]:t,n=p(null),u=p(!0),l=p(!1);return F(async()=>{try{const{data:r,error:_}=await H({showId:h});r&&!_?n.value=r:l.value=!0}catch{l.value=!0}finally{u.value=!1}}),(r,_)=>{var m;return a(),c("div",ne,[u.value?(a(),g(z,{key:0,class:"app-loader","full-height":""})):l.value?(a(),g(q,{key:1,"link-to-home":""})):(a(),c(M,{key:2},[f(P,{image:(m=n.value)==null?void 0:m.image},null,8,["image"]),f(te,{show:n.value},null,8,["show"])],64))])}}}),ce=k(le,[["__scopeId","data-v-ea275039"]]);export{ce as default};
