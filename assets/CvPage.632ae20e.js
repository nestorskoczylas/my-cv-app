import{useI18n as w}from"./i18n.ad3b1ce8.js";import{l as Q,c as V,h as z,d as k,U as l,$ as u,W as h,j as $,X as t,Y as s,V as n,a8 as d,F as r,a0 as E,a7 as y,a1 as N,a2 as P}from"./index.65bf306e.js";import{h as F,_ as m}from"./plugin-vue_export-helper.9e00e7bd.js";import{Q as f}from"./QCard.0a16213a.js";var C=Q({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(o,{slots:i}){const p=V(()=>`q-card__section q-card__section--${o.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>z(o.tag,{class:p.value},F(i.default))}});const j={class:"experience-content"},D={class:"left-section"},L={class:"year"},U={class:"title"},W={class:"entity-location"},X={class:"details"},Y={class:"detail-title"},A={class:"details-list"},G={class:"right-section"},H={class:"description-title"},J={class:"description-list"},K=k({__name:"ExperienceCard",props:{year:{},title:{},entity:{},location:{},detailTitle:{},details:{},descriptionTitle:{},descriptions:{}},setup(o){return(i,p)=>(l(),u(f,{class:"experience-card"},{default:h(()=>[$(C,null,{default:h(()=>[t("div",j,[t("div",D,[t("div",L,s(i.year),1),t("div",U,s(i.title),1),t("span",W,s(i.entity)+" - "+s(i.location),1),t("div",X,[t("div",Y,s(i.detailTitle),1),t("ul",A,[(l(!0),n(r,null,d(i.details,(a,c)=>(l(),n("li",{key:c},s(a),1))),128))])])]),t("div",G,[t("div",H,s(i.descriptionTitle),1),t("ul",J,[(l(!0),n(r,null,d(i.descriptions,(a,c)=>(l(),n("li",{key:c},s(a),1))),128))])])])]),_:1})]),_:1}))}});var g=m(K,[["__scopeId","data-v-106d52b7"]]);const M={class:"education-content"},O={class:"education-section"},R={class:"year"},Z={class:"title"},x={class:"entity-location"},tt={class:"description-title"},et={class:"description-list"},it=k({__name:"EducationCard",props:{year:{},title:{},entity:{},location:{},descriptionTitle:{},descriptions:{}},setup(o){return(i,p)=>(l(),u(f,{class:"education-card"},{default:h(()=>[$(C,null,{default:h(()=>[t("div",M,[t("div",O,[t("div",R,s(i.year),1),t("div",Z,s(i.title),1),t("div",x,s(i.entity)+" - "+s(i.location),1),t("div",tt,s(i.descriptionTitle),1),t("ul",et,[(l(!0),n(r,null,d(i.descriptions,(a,c)=>(l(),n("li",{key:c},s(a),1))),128))])])])]),_:1})]),_:1}))}});var S=m(it,[["__scopeId","data-v-d97a2df4"]]);const st={class:"skill-content"},lt=k({__name:"SkillCard",props:{skills:{}},setup(o){return(i,p)=>(l(),u(f,{class:"skill-card"},{default:h(()=>[$(C,null,{default:h(()=>[t("div",st,[(l(!0),n(r,null,d(i.skills,(a,c)=>(l(),n("div",{class:"skill-item",key:c},[t("span",null,[t("strong",null,s(a.title)+" :",1),E(" "+s(a.description),1)])]))),128))])]),_:1})]),_:1}))}});var b=m(lt,[["__scopeId","data-v-76ff5c2c"]]);const T=o=>(N("data-v-6cfbfbba"),o=o(),P(),o),nt={class:"cv-page"},ot={class:"cv-background"},at={class:"title-container"},ct=T(()=>t("div",{class:"decorative-element"},null,-1)),dt={class:"title-container"},rt=T(()=>t("div",{class:"decorative-element"},null,-1)),_t={class:"title-container"},ut=T(()=>t("div",{class:"decorative-element"},null,-1)),pt={class:"title-container"},vt=T(()=>t("div",{class:"decorative-element"},null,-1)),yt={class:"title-container"},ht=T(()=>t("div",{class:"decorative-element"},null,-1)),Tt={class:"title-container"},$t=T(()=>t("div",{class:"decorative-element"},null,-1)),kt=k({__name:"CvPage",setup(o){const{tm:i}=w(),p=i("experiences"),a=i("educations"),c=i("formations"),I=i("personalExperiences"),q=i("skills"),B=i("qualities");return(v,mt)=>(l(),n("div",nt,[t("div",ot,[t("div",at,[ct,t("h4",null,s(v.$t("experiencesTitle")),1)]),(l(!0),n(r,null,d(y(p),(e,_)=>(l(),u(g,{key:_,year:e.year,title:e.title,entity:e.entity,location:e.location,detailTitle:e.detailTitle,details:e.details,descriptionTitle:e.descriptionTitle,descriptions:e.descriptions},null,8,["year","title","entity","location","detailTitle","details","descriptionTitle","descriptions"]))),128)),t("div",dt,[rt,t("h4",null,s(v.$t("diplomasTitle")),1)]),(l(!0),n(r,null,d(y(a),(e,_)=>(l(),u(S,{key:_,year:e.year,title:e.title,entity:e.entity,location:e.location,descriptionTitle:e.descriptionTitle,descriptions:e.descriptions},null,8,["year","title","entity","location","descriptionTitle","descriptions"]))),128)),t("div",_t,[ut,t("h4",null,s(v.$t("trainingsTitle")),1)]),(l(!0),n(r,null,d(y(c),(e,_)=>(l(),u(S,{key:_,year:e.year,title:e.title,entity:e.entity,location:e.location,descriptionTitle:e.descriptionTitle,descriptions:e.descriptions},null,8,["year","title","entity","location","descriptionTitle","descriptions"]))),128)),t("div",pt,[vt,t("h4",null,s(v.$t("personalExperiencesTitle")),1)]),(l(!0),n(r,null,d(y(I),(e,_)=>(l(),u(g,{key:_,year:e.year,title:e.title,entity:e.entity,location:e.location,detailTitle:e.detailTitle,details:e.details,descriptionTitle:e.descriptionTitle,descriptions:e.descriptions},null,8,["year","title","entity","location","detailTitle","details","descriptionTitle","descriptions"]))),128)),t("div",yt,[ht,t("h4",null,s(v.$t("skillsTitle")),1)]),$(b,{skills:y(q)},null,8,["skills"]),t("div",Tt,[$t,t("h4",null,s(v.$t("qualitiesTitle")),1)]),$(b,{skills:y(B)},null,8,["skills"])])]))}});var bt=m(kt,[["__scopeId","data-v-6cfbfbba"]]);export{bt as default};
