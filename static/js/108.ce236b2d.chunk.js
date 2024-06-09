"use strict";(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[108],{5346:(e,s,t)=>{t.r(s),t.d(s,{default:()=>N});var i=t(8381),a=t(7174),r=(t(1056),t(6041)),c=t(6564),n=t(1877),l=t.n(n),o=t(9362),d=t(7011),p=t(5980);const h=function(){const e=document.querySelector("#three-canvas2"),s=new c.CP7({canvas:e,antialias:!0,alpha:!0});s.setSize(200,300),s.setPixelRatio(window.devicePixelRatio>1?2:1);const t=new c.xsS,i=new c.cPb(60,200/300,.1,1e3);i.position.x=0,i.position.y=0,i.position.z=2,t.add(i);const a=new c.Mig("white",.5);t.add(a);const r=new c.Ox3("white",1);r.position.x=1,r.position.z=2,t.add(r);const n=new o.E;let h,j,m=[];n.load(p,(e=>{j=e.scene.children[0],j.position.x=0,j.position.y=-5,j.position.z=0,j.rotation.x=0,t.add(j),h=new c.Xcj(j),m=[h.clipAction(e.animations[0]),h.clipAction(e.animations[2]),h.clipAction(e.animations[4])],m[1].repetitions=3,m[1].clampWhenFinished=!0,m[1].play(),h.addEventListener("finished",(()=>{m[2].repetitions=1,m[2].clampWhenFinished=!0,m[2].play(),l()(".message-wrap").fadeIn()})),m[0].play(),d.ZP.to(j.position,{duration:2,y:-.3,ease:"circ.out"})}));let x=new c.FM8;const u=new c.SUY;function v(){const e=u.getDelta();h&&h.update(e),s.render(t,i)}s.setAnimationLoop(v),window.addEventListener("resize",(function(){i.aspect=200/300,i.updateProjectionMatrix(),s.setSize(200,300),s.render(t,i)})),e.addEventListener("click",(s=>{!function(s){x.x=s.clientX/e.clientWidth*2-1,x.y=-(s.clientY/e.clientHeight*2-1)}(s),l()(".intro").append("dddd")})),l()("#header").addClass("white"),v()};var j=t(6310),m=t(9788),x=t(5209),u=t(7656),v=(t(3616),t(6523),t(9343));const g=[{id:"sub01",url:"/project/portfoliov2",name:"Portfolio ver.02",type:"\ubc18\uc751\ud615",duty:"\ub514\uc790\uc778/\ud37c\ube14\ub9ac\uc2f1/\ud504\ub860\ud2b8\uac1c\ubc1c"},{id:"sub02",url:"/project/dubuck",name:"\ub450\ubc85 \uc601\uc6cc\ub4dc",type:"\ubc18\uc751\ud615",duty:"\ud37c\ube14\ub9ac\uc2f1(React)"},{id:"sub03",url:"/project/admin",name:"Admin \ub514\uc790\uc778 \uc2dc\uc2a4\ud15c",type:"\ubc18\uc751\ud615",duty:"\uae30\ud68d/\ub514\uc790\uc778/\ud37c\ube14\ub9ac\uc2f1"},{id:"sub04",url:"/project/callct",name:"\uc9c1\uc7a5 \ub0b4 \uad34\ub86d\ud798 \uc0c1\ub2f4\uc13c\ud130",type:"\uc801\uc751\ud615",duty:"\ub514\uc790\uc778/\ud37c\ube14\ub9ac\uc2f1"},{id:"sub05",url:"/project/lms",name:"\ud55c\uad6d\uacf5\uc778\ub178\ubb34\uc0ac\ud68c \uc774\ub7ec\ub2dd\uc13c\ud130",type:"\uc801\uc751\ud615",duty:"\ud37c\ube14\ub9ac\uc2f1"},{id:"sub06",url:"/project/lslpl",name:"LS LPL Admin",type:"PC",duty:"\ud37c\ube14\ub9ac\uc2f1"},{id:"sub07",url:"/project/editodo",name:"Editodo",type:"Mobile",duty:"\uae30\ud68d/\ub514\uc790\uc778"}],N=()=>{d.ZP.registerPlugin(j.i,m.X);const e=(0,i.useRef)(),s=(0,i.useRef)(),t=(0,i.useRef)();(0,i.useEffect)((()=>{h();const i=new x.Z({lerp:.07});i.on("scroll",j.i.update),d.ZP.ticker.add((e=>{i.raf(1e3*e)})),d.ZP.ticker.lagSmoothing(0);d.ZP.utils.toArray(".reveal").forEach((e=>{(e=>{d.ZP.set(e,{autoAlpha:0})})(e),j.i.create({trigger:e,start:"top bottom",end:"bottom top",onEnter:()=>{(e=>{let s=0,t=0,i=e.dataset.delay;e.classList.contains("reveal-ltr")?(s=-100,t=0):e.classList.contains("reveal-btt")?(s=0,t=100):e.classList.contains("reveal-ttb")?(s=0,t=-100):(s=100,t=0),d.ZP.fromTo(e,{autoAlpha:0,x:s,y:t},{autoAlpha:1,x:0,y:0,delay:i,duration:1.25,overwrite:"auto",ease:"expo"})})(e)}})}));const a=e.current,r=s.current,c=t.current;d.ZP.set(r,{scale:.4,autoAlpha:1}),d.ZP.set(a,{transformOrigin:"50% 50%",scaleX:-1});let n=d.ZP.getProperty(r),l=!1,o=!1;const p=d.ZP.to(r,{scrollTrigger:{trigger:c,start:"top center",end:"bottom center",scrub:.7,markers:!1,onUpdate:e=>{let s=n("rotation"),t=Math.abs(s)>90,i=1===e.direction;t===o&&i===l||(d.ZP.to(a,{scaleY:t?-1:1,scaleX:i?-1:1,duration:.25}),o=t,l=i)}},duration:10,ease:function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=s.axis||"y",i=s.precision||1,a=m.X.cacheRawPathMeasurements(m.X.getRawPath(d.ZP.utils.toArray(e)[0]),Math.round(12*i)),r="x"===t,c=a[0][r?0:1],n=a[a.length-1][a[a.length-1].length-(r?2:1)]-c,l=Math.round(200*i),o=1/l,p=[0],h=[],j=0,x=[0],u=1/l*.6,v=!0===s.smooth?7:Math.round(s.smooth)||0,g=2*v,N=e=>{for(;p[j]<=e&&j++<l;);h.push(h.length&&(e-p[j-1])/(p[j]-p[j-1])*o+j*o),v&&h.length>v&&h[h.length-1]-h[h.length-2]<u&&x.push(h.length-v)},y=1;for(;y<l;y++)p[y]=(m.X.getPositionOnPath(a,y/l)[t]-c)/n;for(p[l]=1,y=0;y<l;y++)N(y/l);h.push(1),v&&(x.push(l-g+1),x.forEach((e=>{let s=h[e],t=Math.min(e+g,l),i=(h[t]-s)/(t-e),a=1;for(e++;e<t;e++)h[e]=s+i*a++})));return e=>{let s=e*l,t=h[0|s];return s?t+(h[Math.ceil(s)]-t)*(s%1):0}}(c,{smooth:!0}),immediateRender:!0,motionPath:{path:c,align:c,alignOrigin:[.5,.5],autoRotate:0}});return()=>{p.kill(),i.stop(),i.destroy()}}),[]);const[c,n]=(0,i.useState)(0);return(0,v.jsx)(r.Z,{header:!0,footer:!0,children:(0,v.jsxs)("div",{className:"portfolio",children:[(0,v.jsxs)("div",{className:"stars-wrap",children:[(0,v.jsx)("div",{id:"stars"}),(0,v.jsx)("div",{id:"stars2"}),(0,v.jsx)("div",{id:"stars3"})]}),(0,v.jsxs)("div",{className:"intro",children:[(0,v.jsx)("canvas",{id:"three-canvas2"}),(0,v.jsxs)("div",{className:"message-wrap",onClick:()=>{n((e=>e+1))},children:[c>=2&&(0,v.jsx)("span",{className:"star"}),c>=0&&(0,v.jsx)("div",{className:"message ".concat(0===c?"on":""),children:(0,v.jsx)("span",{children:"\uc6f9 UI\uac1c\ubc1c\uc790 \ubc15\ubbfc\ud61c \uc785\ub2c8\ub2e4."})}),c>=1&&(0,v.jsx)("div",{className:"message ".concat(1===c?"on":""),children:(0,v.jsx)("span",{children:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub97c \ubcf4\ub7ec \uc640\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4!"})}),c>=2&&(0,v.jsx)("div",{className:"message",children:(0,v.jsx)("span",{children:"\uc2a4\ud06c\ub864 \ud558\uc2dc\uba74 \ud504\ub85c\uc81d\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"})})]}),(0,v.jsx)("div",{className:"scroll-text ".concat(c>=2?"on":""),children:(0,v.jsx)("p",{children:"Scroll Down"})})]}),(0,v.jsxs)("div",{className:"project",children:[(0,v.jsx)("strong",{className:"title",children:"\uc8fc\uc694 \ud589\uc131"}),(0,v.jsxs)("div",{className:"project-group",children:[(0,v.jsx)("section",{id:"section1",className:"project-item",children:(0,v.jsxs)(a.rU,{to:"/project/hyundai",children:[(0,v.jsx)("h2",{className:"project-type reveal",children:"\ubc18\uc751\ud615"}),(0,v.jsx)("div",{className:"project-imgwrap reveal reveal-ttb",children:(0,v.jsx)("div",{className:"project-img"})}),(0,v.jsxs)("p",{className:"project-title reveal reveal-btt",children:["\ud604\ub300\uc790\ub3d9\ucc28 \uacf5\uc2dd \uc628\ub77c\uc778\ubab0,",(0,v.jsx)("br",{}),(0,v.jsx)("b",{children:"\ud604\ub300Shop"})]})]})}),(0,v.jsx)("section",{id:"section2",className:"project-item",children:(0,v.jsxs)(a.rU,{to:"/project/kplus",children:[(0,v.jsx)("h2",{className:"project-type reveal",children:"\ubc18\uc751\ud615"}),(0,v.jsx)("div",{className:"project-imgwrap reveal reveal-ltr",children:(0,v.jsx)("div",{className:"project-img"})}),(0,v.jsxs)("p",{className:"project-title reveal reveal-ltr",children:[(0,v.jsx)("b",{children:"YG KPLUS"}),"\ud648\ud398\uc774\uc9c0 \uc2e0\uaddc \ub9ac\ub274\uc5bc"]})]})}),(0,v.jsx)("section",{id:"section3",className:"project-item",children:(0,v.jsxs)(a.rU,{to:"/project/lsgpis",children:[(0,v.jsx)("h2",{className:"project-type reveal",children:"PC"}),(0,v.jsx)("div",{className:"project-imgwrap reveal reveal-btt",children:(0,v.jsx)("div",{className:"project-img"})}),(0,v.jsxs)("p",{className:"project-title reveal reveal-btt",children:["\uad00\ub9ac\uc790 \ud654\uba74 \uc2e0\uaddc \uad6c\ucd95",(0,v.jsx)("br",{}),(0,v.jsx)("b",{children:"LS GPIS"})]})]})}),(0,v.jsxs)("svg",{id:"star-scroll",viewBox:"0 0 1600.84 4700.66",children:[(0,v.jsx)("path",{id:"motionPath",ref:t,className:"st0",d:"m1.1.26C-3.9,8.43,15.84,73.55,320.28,165.27c.87.26,1.76.51,2.65.73,156.39,38.97,325.46,24.21,485.08,25.76,222.52,2.16,594.61,22.02,687.04,274.82,59.71,163.31-67.57,351.38-174.5,464.53-57.16,60.48-139.67,89.02-216.76,114.32-73.7,24.19-143.4,52.78-165.14,135.27-14.7,55.78-16.51,117.28-58.76,161.24-64.39,67-173.81,54.45-257.94,56.66-45.5,1.19-194.44,1.75-170.83,82.58,15.88,54.36,91.82,79.15,138.02,96.63,74.11,28.03,120.54,53,188.42,96.61,35.57,22.85,66.99,54.29,82.44,93.64,68.96,175.63-95.12,354.31-229.67,427.83-36.68,20.04-75.61,36.04-115.91,47.18-42.13,11.64-85.66,7.78-127.06,21.09-140.33,45.11-178.4,258.09-181.12,382.95-1.5,68.9,17.33,141.08,59.49,196.41,72.11,94.63,199.54,113.42,299.91,162.83,138.64,68.23,272.6,142.13,402.88,225.42,65.29,41.74,137.08,85.53,169.85,159.24,30.54,68.69,17.83,150.17-18.68,214-37.26,65.15-107.57,85-179.05,81.91-108.33-4.68-217.29-13.96-323.24,14.56-94.28,25.38-189.87,45.11-228.58,112.46-109.88,191.21,328.39,255.84,227.61,436.98-37.19,66.84-120.5,96.26-175.45,146.58-80.05,73.3-60.61,204.54,44.54,238.71,40.72,13.23,85.92,15.34,128.49,16.71,63.75,2.06,79.97,6.25,143.77,6.25",stroke:"#d1d1d1",strokeMiterlimit:"10",strokeWidth:"5",strokeDasharray:"5"}),(0,v.jsx)("g",{id:"motionSVG",ref:s,children:(0,v.jsx)("svg",{ref:e,id:"star01",viewBox:"0 0 561.81 487.48",children:(0,v.jsxs)("g",{children:[(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{className:"cls-1",d:"m22.26,21.49c.2-.55.39-1.11.58-1.67,1.8-5.27,3.77-10.62,6.61-15.44.95-1.62,2.08-3.28,3.81-4.01,3.44-1.45,7.22,1.56,8.92,4.88,5.56,10.85,11.98,21.35,16.43,32.74,2.87,7.34,4.24,14.77,5.39,22.53.17,1.12.26,2.32-.26,3.32-.69,1.35-2.27,1.96-3.74,2.36-6.66,1.83-11.7-1.86-18.33-3.8-2.01-.59-3.08-2.56-5.17-2.38-1.74.15-4.32,2.15-5.93,2.82-6.21,2.59-10.99,5.35-17.66,4.45-.8-.11-1.65-.26-2.26-.79-.62-.55-.89-1.4-.98-2.22-.5-4.28,1.42-8.35,2.26-12.46,2.15-10.57,6.7-20.25,10.32-30.34Z"}),(0,v.jsx)("path",{className:"cls-2",d:"m26.79,36.24c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"}),(0,v.jsx)("path",{className:"cls-2",d:"m43.36,35.1c3.22,0,3.22-5,0-5s-3.22,5,0,5h0Z"}),(0,v.jsx)("path",{className:"cls-2 smile",d:"m30.3,37.58c-.11,2.55,1.75,4.87,4.13,5.63s4.99-.47,6.28-2.57c.75-1.23.99-2.66.72-4.07-.15-.77-1.12-1.28-1.85-1.05-.82.27-1.21,1.02-1.05,1.85.03.17.03.15,0-.07,0,.07.01.15.02.22,0,.11,0,.22,0,.33,0,.07,0,.15-.01.22.03-.22.04-.24,0-.07-.02.11-.04.22-.07.32s-.06.34-.14.42l.07-.15c-.03.07-.06.13-.09.2-.12.23-.26.45-.41.66.21-.3.01-.02-.05.04-.1.11-.2.22-.31.32-.05.05-.34.27-.04.05-.12.09-.24.17-.37.25-.09.06-.19.1-.29.16-.26.15.27-.09-.1.04-.12.04-.24.08-.37.11-.07.02-.14.03-.22.04.2-.02.24-.03.12-.02-.24,0-.51.05-.74-.01.42.11-.08-.03-.16-.06-.11-.03-.22-.07-.32-.1-.16-.06-.14-.05.04.02-.07-.03-.14-.07-.2-.1-.1-.05-.2-.11-.3-.17-.04-.02-.38-.28-.22-.15s-.17-.15-.2-.18c-.08-.08-.16-.16-.24-.25-.05-.06-.1-.12-.15-.17.12.15.13.16.03.03-.14-.23-.27-.45-.39-.69.16.33.01,0-.01-.07-.05-.14-.08-.29-.11-.44-.08-.3,0,.29,0-.05,0-.15,0-.3,0-.46.03-.78-.71-1.54-1.5-1.5-.84.04-1.47.66-1.5,1.5h0Z"})]}),(0,v.jsx)("path",{className:"cls-1 left",d:"m13.56,46.47c-.81-3.57-4.15-5.86-6.79-8.4-2.65-2.54-4.77-5.63-6.2-9.01-.4-.95-.75-1.99-.49-2.99.44-1.66,2.32-2.44,3.99-2.87,5.28-1.36,10.82-1.73,16.23-1.07l1.84-.19-8.59,24.52Z"}),(0,v.jsx)("path",{className:"cls-1 right",d:"m47.42,18.51c5,2.27,13.87,1.73,19.72,1.78,1.17.01,2.43.1,3.36.81,1.91,1.45,1.42,4.43.48,6.64-1.55,3.64-3.8,6.98-6.6,9.78-1.9,1.9-4.21,3.9-4.21,6.58l-12.76-25.59Z"})]})})})]})]}),(0,v.jsxs)("div",{className:"side-project",children:[(0,v.jsxs)("strong",{className:"title",children:["\uc0ac\uc774 \ud589\uc131",(0,v.jsxs)("div",{className:"tip-wrap",children:[(0,v.jsx)("i",{className:"icon-tip",children:"?"}),(0,v.jsx)("div",{className:"tooltip",children:(0,v.jsx)("div",{className:"text",children:(0,v.jsxs)("span",{children:[(0,v.jsx)("strong",{children:"\uc0ac\uc774"}),"\ub4dc \ud504\ub85c\uc81d\ud2b8 + ",(0,v.jsx)("strong",{children:"\ud589\uc131"}),",",(0,v.jsx)("br",{}),"\uadf8 \uc678 \uc5c5\ubb34\uc640 \uc2a4\ud130\ub514 \ud504\ub85c\uc81d\ud2b8\ub098 \uc790\uae30\uacc4\ubc1c\uc6a9 \ud504\ub85c\uc81d\ud2b8\ub97c \ubaa8\uc558\uc5b4\uc694."]})})})]})]}),(0,v.jsx)("div",{className:"side-project-list",children:(0,v.jsx)(u.Z,{centerMode:!0,centerPadding:"150px",dots:!1,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,swipeToSlide:!0,touchThreshold:50,responsive:[{breakpoint:1e3,settings:{centerPadding:"0",slidesToShow:3}},{breakpoint:768,settings:{centerPadding:"150px",slidesToShow:1}},{breakpoint:500,settings:{centerPadding:"100px",slidesToShow:1}},{breakpoint:400,settings:{centerPadding:"40px",slidesToShow:1}}],children:g.map((e=>(0,v.jsx)("div",{id:e.id,className:"side-project-item",children:(0,v.jsxs)(a.rU,{to:e.url,children:[(0,v.jsx)("div",{className:"side-project-planet",children:(0,v.jsx)("div",{className:"side-project-imgwrap",children:(0,v.jsx)("div",{className:"side-project-img"})})}),(0,v.jsxs)("div",{className:"side-project-info",children:[(0,v.jsx)("strong",{className:"name",children:e.name}),(0,v.jsxs)("dl",{className:"type",children:[(0,v.jsx)("dt",{children:"Type."}),(0,v.jsx)("dd",{children:e.type})]}),(0,v.jsxs)("dl",{className:"duty",children:[(0,v.jsx)("dt",{children:"Duty."}),(0,v.jsx)("dd",{children:e.duty})]})]})]})},e.id)))})})]})]})]})})}},5980:(e,s,t)=>{e.exports=t.p+"static/media/mine.b3ccb900aed47d5d0934.glb"}}]);
//# sourceMappingURL=108.ce236b2d.chunk.js.map