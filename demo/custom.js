(async()=>{function t(a){async function n(s){let l=document.querySelector(".postAI-content");return new Promise(t=>{if(!l)throw new Error("Element not found");let n=l.innerText,o=n.length;if(0==o)return t();!function e(){0<=o?(l.innerText=n.slice(0,o--),setTimeout(e,20)):setTimeout(t,800)}()}).then(()=>new Promise(o=>{let r=0,i=performance.now(),a=(document.querySelector(".postAI-icon svg").classList.add("jump"),()=>{var e,t,n;r<s.length&&(t=(e=performance.now())-i,n=s.slice(r,r+1),t>=(/[，。！、？,.!?]/.test(n)?150:25)&&(i=e,++r<s.length?l.innerText=s.slice(0,r):(l.innerText=s,document.querySelector(".postAI-icon svg").classList.remove("jump"),o())),requestAnimationFrame(a))});requestAnimationFrame(a)})).catch()}var e;(e=document.querySelector(".postAI-box"))&&e.parentElement.removeChild(e),(e=document.createElement("div")).className="postAI-box",e.innerHTML='\n        <div class="postAI-icon"><svg t="1714137053863" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7326" width="200" height="200">\n        <path d="M541.866667 761.002667a107.136 107.136 0 0 1-68.608-24.874667c1.152-0.597333 2.304-1.28 3.413333-1.92l114.048-65.877333a18.56 18.56 0 0 0 9.386667-16.128v-160.896l48.213333 27.818666a1.706667 1.706667 0 0 1 0.938667 1.322667v133.205333a107.52 107.52 0 0 1-107.264 107.349334H541.866667z" p-id="7327" fill="#000000"></path>\n        <path d="M298.538667 590.506667a107.136 107.136 0 0 0 105.813333 125.568 107.52 107.52 0 0 0 53.632-14.336l115.285333-66.56a1.706667 1.706667 0 0 0 0.725334-1.365334v-55.808l-139.264 80.426667a18.56 18.56 0 0 1-18.773334 0l-114.048-65.877333-3.413333-2.005334z" p-id="7328" fill="#000000"></path>\n        <path d="M337.194667 366.378667a107.008 107.008 0 0 0-55.893334 47.104 107.434667 107.434667 0 0 0 39.296 146.56l115.328 66.645333a1.706667 1.706667 0 0 0 1.621334-0.170667l48.213333-27.818666-139.264-80.426667a18.517333 18.517333 0 0 1-9.344-16.085333V370.346667l0.042667-3.968zM538.197333 425.258667l48.213334-27.861334a1.706667 1.706667 0 0 1 1.578666-0.170666l115.328 66.56a107.434667 107.434667 0 0 1-16.597333 193.792v-135.893334a18.56 18.56 0 0 0-9.301333-16.042666l-139.221334-80.384z" p-id="7329" fill="#000000"></path>\n        <path d="M722.048 431.36L608 365.568a18.602667 18.602667 0 0 0-18.773333 0l-139.264 80.384V390.144a1.706667 1.706667 0 0 1 0.725333-1.408l115.285333-66.517333a107.392 107.392 0 0 1 159.445334 111.189333 167.893333 167.893333 0 0 0-3.413334-2.005333z" p-id="7330" fill="#000000"></path>\n        <path d="M375.552 504.832l48.213333 27.818667 0.085334-160.853334a18.56 18.56 0 0 1 9.386666-16.128l114.090667-65.877333c1.109333-0.682667 2.218667-1.28 3.370667-1.92A107.349333 107.349333 0 0 0 374.613333 370.304V503.466667a1.706667 1.706667 0 0 0 0.938667 1.322666z" p-id="7331" fill="#000000"></path>\n        <path d="M512 440.32l-62.037333 35.84v71.637333l62.037333 35.797334 61.994667-35.84V476.16L512 440.32z" p-id="7332" fill="#000000"></path>\n        <path d="M512 1024c282.752 0 512-229.248 512-512S794.752 0 512 0 0 229.248 0 512s229.248 512 512 512z m245.333333-563.968a142.890667 142.890667 0 0 0-12.245333-117.205333 144.384 144.384 0 0 0-155.477333-69.290667 142.72 142.72 0 0 0-106.709334-47.957333h-1.28A144.384 144.384 0 0 0 344.32 325.504 142.762667 142.762667 0 0 0 248.874667 394.666667a144.426667 144.426667 0 0 0 17.749333 169.301333 142.805333 142.805333 0 0 0 12.245333 117.205333 144.384 144.384 0 0 0 155.434667 69.248 142.72 142.72 0 0 0 106.752 48h1.28a144.341333 144.341333 0 0 0 137.386667-100.010666 142.72 142.72 0 0 0 95.402666-69.248 144.213333 144.213333 0 0 0-17.792-169.173334z" p-id="7333" fill="#000000"></path>\n        </svg></div>\n        <div class="talk-container"><div class="postAI-talk"><span class="postAI-content"></span><span class="blinking-cursor"></span></div></div>\n        ',a.insertBefore(e,a.firstChild),n("点击即可生成AI摘要哦~"),document.querySelector(".postAI-icon").addEventListener("click",async function t(){document.querySelector(".postAI-icon").removeEventListener("click",t),await n("正在为您生成AI摘要，请稍候......"),setTimeout(()=>{PAGE_CONFIG.ai_text?n(PAGE_CONFIG.ai_text).then(()=>{PAGE_CONFIG.ai_text?document.querySelector(".postAI-icon").addEventListener("click",t):document.querySelector(".blinking-cursor").style.display="none"}):(async e=>{var t=`https://summary.tianli0.top/?content=${e}&key=a3AQwYShHwBlEWxo0zxl&url=${location.pathname}&title=`+document.title;try{let e=await fetch(t);if(e.ok)return{code:0,data:(await e.json()).summary};throw new Error("摘要获取失败。")}catch(e){return"AbortError"===e.name?"localhost"===window.location.hostname?{code:1,data:"获取文章摘要超时。请勿在本地主机上测试 API 密钥。"}:{code:1,data:"获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。"}:{code:1,data:"获取文章摘要失败，请稍后再试。"}}})((()=>{try{if(!a)return console.warn("找不到文章容器。"),"";var n,o,r=a.getElementsByTagName("p"),i=a.querySelectorAll("h1, h2, h3, h4, h5");let e="";for(n of i)e+=n.innerText.replaceAll("&","以及")+" ";for(o of r)e+=o.innerText.replace(/https?:\/\/[^\s]+/g,"");let t=1e3;return"undefined"!=typeof postAI_wordLimit&&(t=postAI_wordLimit),(document.title+" "+e).slice(0,t)}catch(e){return console.error("获取文章内容失败：",e),""}})()).then(e=>{n(e.data.replaceAll("作者","博主")).then(()=>{e.code?document.querySelector(".postAI-icon").addEventListener("click",t):document.querySelector(".blinking-cursor").style.display="none"})})},1e3)})}function e(){var e=document.querySelector("#post #article-container");e&&t(e)}window.addEventListener("DOMContentLoaded",()=>{e(),document.addEventListener("pjax:complete",e)})})();var btwoa={getIpInfo:function(){fetch("https://api.qjqq.cn/api/Local").then(e=>e.json()).then(e=>{var t=e.ip,n=e.data.country,o=e.data.prov,r=e.data.city,i=e.data.district,a=e.data.radius,a=Math.floor(a),e=e.data.isp,t=(document.getElementById("userAgentIp").innerHTML=t,document.getElementById("userAgentCountry").innerHTML=n,document.getElementById("userAgentProv").innerHTML=o,document.getElementById("userAgentCity").innerHTML=r,document.getElementById("userAgentDistrict").innerHTML=i,document.getElementById("userAgentRadius").innerHTML=a+"公里",document.getElementById("userAgentISP").innerHTML=e,(new UAParser).getResult());document.getElementById("userAgentOS").innerHTML=t.os.name+" "+t.os.version,document.getElementById("userAgentBrowser").innerHTML=t.browser.name+" "+t.browser.version})}};let newYearTimer=null;var newYear=()=>{if(clearTimeout(newYearTimer),document.querySelector("#newYear")){let r=new Date("2025-01-29 00:00:00").getTime()/1e3,i={0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"};function a(e){return 9<e?e:"0"+e}!function e(){var t,n,o=new Date,o=(document.querySelector("#newYear .today").innerHTML=o.getFullYear()+"年"+(o.getMonth()+1)+"月"+o.getDate()+"日 "+i[o.getDay()],r-Math.round(o.getTime()/1e3));o<0?(document.querySelector("#newYear .title").innerHTML="喜迎新年",document.querySelector("#newYear .newYear-time").innerHTML='<span class="happyNewYear">新年快乐！</span>'):(document.querySelector("#newYear .title").innerHTML="距离2025年春节：",86400<o?document.querySelector("#newYear .newYear-time").innerHTML=`<span class="day">${Math.ceil(o/86400)}<span class="unit">天</span></span>`:(t=a(parseInt(o/3600)),o%=3600,n=a(parseInt(o/60)),o=a(o%=60),document.querySelector("#newYear .newYear-time").innerHTML=`<span class="time">${t}:${n}:${o}</span></span>`,newYearTimer=setTimeout(e,1e3)))}()}},cursor=(newYear(),document.addEventListener("pjax:complete",newYear),document.addEventListener("DOMContentLoaded",function(){async function e(){var t=document.getElementById("history-container");if(t){n=new Date,o="S"+(""+(n.getMonth()+1)).padStart(2,"0")+(""+n.getDate()).padStart(2,"0"),n=`https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@2.08/baiduhistory/json/${n.getMonth()<10?"0"+(n.getMonth()+1):n.getMonth()+1}.json`;var n=(await(await(await fetch(n)).json())[o]).map(e=>`<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.${e.year}</span><span class="history_slide_link">${e.title}</span></div>`).join(""),o=document.querySelector(".history_swiper-container");document.getElementById("history_container_wrapper").innerHTML=n;let e=new Swiper(o,{loop:!0,direction:"vertical",autoplay:{disableOnInteraction:!0,delay:5e3},mousewheel:!1});t.onmouseenter=()=>e.autoplay.stop(),t.onmouseleave=()=>e.autoplay.start()}}e(),document.addEventListener("pjax:complete",e)}),{delay:8,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$dot:document.querySelector(".cursor-dot"),$outline:document.querySelector(".cursor-dot-outline"),init:function(){this.dotSize=this.$dot.offsetWidth,this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var t=this;document.querySelectorAll("a").forEach(function(e){e.addEventListener("mouseover",function(){t.cursorEnlarged=!0,t.toggleCursorSize()}),e.addEventListener("mouseout",function(){t.cursorEnlarged=!1,t.toggleCursorSize()})}),document.addEventListener("mousedown",function(){t.cursorEnlarged=!0,t.toggleCursorSize()}),document.addEventListener("mouseup",function(){t.cursorEnlarged=!1,t.toggleCursorSize()}),document.addEventListener("mousemove",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.endX=e.pageX,t.endY=e.pageY,t.$dot.style.top=t.endY+"px",t.$dot.style.left=t.endX+"px"}),document.addEventListener("mouseenter",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$dot.style.opacity=1,t.$outline.style.opacity=1}),document.addEventListener("mouseleave",function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$dot.style.opacity=0,t.$outline.style.opacity=0})},animateDotOutline:function(){var e=this;e._x+=(e.endX-e._x)/e.delay,e._y+=(e.endY-e._y)/e.delay,e.$outline.style.top=e._y+"px",e.$outline.style.left=e._x+"px",requestAnimationFrame(this.animateDotOutline.bind(e))},toggleCursorSize:function(){var e=this;e.cursorEnlarged?(e.$dot.style.transform="translate(-50%, -50%) scale(1.2)",e.$outline.style.transform="translate(-50%, -50%) scale(0.8)"):(e.$dot.style.transform="translate(-50%, -50%) scale(1)",e.$outline.style.transform="translate(-50%, -50%) scale(1)")},toggleCursorVisibility:function(){var e=this;e.cursorVisible?(e.$dot.style.opacity=1,e.$outline.style.opacity=1):(e.$dot.style.opacity=0,e.$outline.style.opacity=0)}});cursor.init();