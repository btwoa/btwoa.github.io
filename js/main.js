let sidebarFn=()=>{let e=document.getElementById("toggle-menu"),t=document.getElementById("sidebar-menus"),o=document.getElementById("menu-mask"),n=document.body,l=e=>{utils.sidebarPaddingR(),n.style.overflow=e?"hidden":"",n.style.paddingRight="",utils[e?"fadeIn":"fadeOut"](o,.5),t.classList[e?"add":"remove"]("open")},a=()=>{t.classList.contains("open")&&l(!1)};e.addEventListener("click",()=>l(!0)),o.addEventListener("click",a),window.addEventListener("resize",()=>{utils.isHidden(e)&&t.classList.contains("open")&&a(),sco.refreshWaterFall()})},scrollFn=()=>{window.innerHeight;let l=0,a=document.getElementById("page-header"),s=document.getElementById("rightside")||null,t=utils.throttle(e=>{initThemeColor();var t,o,n=window.scrollY||document.documentElement.scrollTop;o=(t=n)>l,l=t,0<n?(o?a.classList.contains("nav-visible")&&a.classList.remove("nav-visible"):a.classList.contains("nav-visible")||a.classList.add("nav-visible"),a.classList.add("nav-fixed"),s&&(s.style.cssText="opacity: 0.8; transform: translateX(-58px);")):(a.classList.remove("nav-fixed","nav-visible"),s&&(s.style.cssText="opacity: ''; transform: ''"))},200);window.addEventListener("scroll",e=>{t(e),0===window.scrollY&&(a.classList.remove("nav-fixed","nav-visible"),s)&&(s.style.cssText="opacity: ''; transform: ''")})},percent=()=>{let e=document.documentElement,t=document.body,o=window.pageYOffset||e.scrollTop,n=Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)-e.clientHeight,l=Math.round(o/n*100),a=document.querySelector("#nav-totop"),s=document.querySelector("#percent"),i=window.scrollY+e.clientHeight>=(document.getElementById("post-comment")||document.getElementById("footer")).offsetTop;a.classList.toggle("long",i||90<l),s.textContent=i||90<l?GLOBAL_CONFIG.lang.backtop:l,document.querySelectorAll(".needEndHide").forEach(e=>e.classList.toggle("hide",n-o<100)),document.querySelectorAll(".rightsideEndHide").forEach(e=>e.classList.toggle("hide",n-o<100))},showTodayCard=()=>{let e=document.getElementById("todayCard"),t=document.querySelector(".topGroup");t?.addEventListener("mouseleave",()=>e?.classList.remove("hide"))},initObserver=()=>{let e=document.getElementById("post-comment"),o=document.getElementById("pagination"),n=document.querySelector(".comment-barrage");e&&o&&new IntersectionObserver(e=>{e.forEach(e=>{var t=e.isIntersecting?"add":"remove";o.classList[t]("show-window"),GLOBAL_CONFIG.comment.commentBarrage&&(n.style.bottom=e.isIntersecting?"-200px":"0px")})}).observe(e)},addCopyright=()=>{if(GLOBAL_CONFIG.copyright){let{limit:o,author:n,link:l,source:a,info:s}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",e=>{e.preventDefault();var t=window.getSelection().toString(),t=t.length>o?`${t}

${n}
${l}${window.location.href}
${a}
`+s:t;e.clipboardData.setData("text",t)})}},asideStatus=()=>{var e=utils.saveToLocal.get("aside-status");document.documentElement.classList.toggle("hide-aside","hide"===e)};function initThemeColor(){var e=0<(window.scrollY||document.documentElement.scrollTop)?"--ba-card-bg":PAGE_CONFIG.is_post?"--ba-main":"--ba-background";applyThemeColor(getComputedStyle(document.documentElement).getPropertyValue(e))}function applyThemeColor(e){var t=document.querySelector('meta[name="theme-color"]'),o=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');t?.setAttribute("content",e),o?.setAttribute("content",e),window.matchMedia("(display-mode: standalone)").matches&&(document.body.style.backgroundColor=e)}let handleThemeChange=e=>{var t,o=window.globalFn?.themeChange||{};for(t in o)o[t](e)},sco={lastSayHello:"",wasPageHidden:!1,musicPlaying:!1,hideCookie(){let e=document.getElementById("cookies-window");e&&setTimeout(()=>{e.classList.add("cw-hide"),setTimeout(()=>e.style.display="none",1e3)},3e3)},scrollTo(e){var t=document.getElementById(e);if(t){let e=t.getBoundingClientRect().top+window.pageYOffset-80;window.scroll({top:e,behavior:"smooth"})}},musicToggle(){var e=document.querySelector("#nav-music")||null,t=document.querySelector("meting-js")||null,o=document.getElementById("consoleMusic")||null,n=document.querySelector("#menu-music-toggle span")||null,l=document.querySelector("#menu-music-toggle i")||null;this.musicPlaying=!this.musicPlaying,e.classList.toggle("playing",this.musicPlaying),o&&o.classList.toggle("on",this.musicPlaying),this.musicPlaying?(t.aplayer.play(),rm?.menuItems.music[0]&&(n.textContent=GLOBAL_CONFIG.right_menu.music.stop)&&(l.className="solitude st-pause-fill")):(t.aplayer.pause(),rm?.menuItems.music[0]&&(n.textContent=GLOBAL_CONFIG.right_menu.music.start)&&(l.className="solitude st-play-fill"))},switchCommentBarrage(){var e,t=document.querySelector(".comment-barrage");t&&(e="flex"===window.getComputedStyle(t).display,t.style.display=e?"none":"flex",document.querySelector("#consoleCommentBarrage").classList.toggle("on",!e),utils.saveToLocal.set("commentBarrageSwitch",!e,.2),rm?.menuItems.barrage)&&rm.barrage(e)},switchHideAside(){var e=document.documentElement.classList,t=document.querySelector("#consoleHideAside"),o=e.contains("hide-aside");utils.saveToLocal.set("aside-status",o?"show":"hide",1),e.toggle("hide-aside"),t.classList.toggle("on",!o)},switchKeyboard(){this.sco_keyboards=!this.sco_keyboards;var e=document.querySelector("#consoleKeyboard"),t=this.sco_keyboards?openKeyboard:closeKeyboard;e.classList.toggle("on",this.sco_keyboards),t(),localStorage.setItem("keyboard",this.sco_keyboards),document.getElementById("keyboard-tips")?.classList.remove("show")},initConsoleState(){document.querySelector("#consoleHideAside").classList.toggle("on",!document.documentElement.classList.contains("hide-aside"))},changeSayHelloText(){var e=GLOBAL_CONFIG.aside.sayhello2,t=document.getElementById("author-info__sayhi");let o;for(;(o=e[Math.floor(Math.random()*e.length)])===this.lastSayHello;);t.textContent=o,this.lastSayHello=o},switchDarkMode(){var e="dark"===document.documentElement.getAttribute("data-theme"),t=e?"light":"dark";document.documentElement.setAttribute("data-theme",t),utils.saveToLocal.set("theme",t,.02),utils.snackbarShow(GLOBAL_CONFIG.lang.theme[t],!1,2e3),"object"==typeof rm&&rm.mode(!e)&&rm.hideRightMenu(),handleThemeChange(t)},hideTodayCard:()=>document.getElementById("todayCard").classList.add("hide"),toTop:()=>utils.scrollToDest(0),showConsole:()=>document.getElementById("console")?.classList.toggle("show",!0),hideConsole:()=>document.getElementById("console")?.classList.remove("show"),refreshWaterFall(){let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&setTimeout(()=>{waterfall(e.target)||e.target.classList.add("show")},300)})});document.querySelectorAll(".waterfall").forEach(e=>t.observe(e))},addRuntime(){var e=document.getElementById("runtimeshow");e&&GLOBAL_CONFIG.runtime&&(e.innerText=utils.timeDiff(new Date(GLOBAL_CONFIG.runtime),new Date)+GLOBAL_CONFIG.lang.day)},toTalk(t){["#wl-edit",".el-textarea__inner","#veditor",".atk-textarea"].forEach(e=>{e=document.querySelector(e);e&&(e.dispatchEvent(new Event("input",{bubble:!0,cancelable:!0})),e.value="> "+t.replace(/\n/g,"\n> ")+"\n\n",utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),e.focus(),e.setSelectionRange(-1,-1))}),utils.snackbarShow(GLOBAL_CONFIG.lang.totalk,!1,2e3)},initbbtalk(){document.querySelector("#bber-talk")&&new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})},addPhotoFigcaption(){document.querySelectorAll("#article-container img:not(.gallery-item img)").forEach(e=>{var t=e.getAttribute("alt");t&&e.insertAdjacentHTML("afterend",`<div class="img-alt is-center">${t}</div>`)})},scrollToComment:()=>utils.scrollToDest(utils.getEleTop(document.getElementById("post-comment")),300),setTimeState(){var l=document.getElementById("author-info__sayhi");if(l){let t=(new Date).getHours(),e=GLOBAL_CONFIG.aside.sayhello,o=(e=>{for(var t of e){let e=localStorage.getItem(t);if(e)return JSON.parse(e)}return null})(["twikoo","WALINE_USER_META","WALINE_USER","_v_Cache_Meta","ArtalkUser"]);var a=o?o.nick||o.display_name:null;let n;this.wasPageHidden?(n=GLOBAL_CONFIG.aside.sayhello3.back+a,this.wasPageHidden=!1):n=GLOBAL_CONFIG.aside.sayhello3.prefix+a;a=[{start:0,end:5,text:a?n:e.goodnight},{start:6,end:10,text:a?n:e.morning},{start:11,end:14,text:a?n:e.noon},{start:15,end:18,text:a?n:e.afternoon},{start:19,end:24,text:a?n:e.night}].find(e=>t>=e.start&&t<=e.end);l.innerText=a.text}},tagPageActive(){var e=decodeURIComponent(window.location.pathname);/\/tags\/.*?\//.test(e)&&(e=e.split("/").slice(-2,-1)[0],e=document.getElementById(e))&&(document.querySelectorAll("a.select").forEach(e=>{e.classList.remove("select")}),e.classList.add("select"))},categoriesBarActive(){var e=document.querySelector("#category-bar"),t=decodeURIComponent(window.location.pathname),o="/"===t;e&&(e.querySelectorAll(".category-bar-item").forEach(e=>e.classList.remove("select")),e=o?"category-bar-home":t.split("/").slice(-2,-1)[0],o=document.getElementById(e))&&o.classList.add("select")},scrollCategoryBarToRight(){let t=document.getElementById("category-bar-items"),o=document.getElementById("category-bar-next");if(t){let e=()=>t.scrollLeft+t.clientWidth>=t.scrollWidth-8;t.addEventListener("scroll",()=>{clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{o.style.transform=e()?"rotate(180deg)":""},150)}),e()?t.scroll({left:0,behavior:"smooth"}):t.scrollBy({left:t.clientWidth,behavior:"smooth"})}},openAllTags(){document.querySelectorAll(".card-allinfo .card-tag-cloud").forEach(e=>e.classList.add("all-tags")),document.getElementById("more-tags-btn")?.remove()},listenToPageInputPress(){let n=document.querySelector(".toPageGroup"),l=document.getElementById("toPageText");if(l){let t=document.getElementById("toPageButton"),e=document.querySelectorAll(".page-number"),o=+e[e.length-1].textContent;l&&1!=o?(l.addEventListener("keydown",e=>{13===e.keyCode&&(sco.toPage(),pjax.loadUrl(t.href))}),l.addEventListener("input",()=>{t.classList.toggle("haveValue",""!==l.value&&"0"!==l.value),+l.value>o&&(l.value=o)})):n.style.display="none"}},addNavBackgroundInit(){0!==document.documentElement.scrollTop&&document.getElementById("page-header").classList.add("nav-fixed","nav-visible")},toPage(){var e=document.querySelectorAll(".page-number"),e=parseInt(e[e.length-1].innerHTML),t=document.getElementById("toPageText"),t=parseInt(t.value);document.getElementById("toPageButton").href=!isNaN(t)&&t<=e&&1<t?window.location.href.replace(/\/page\/\d+\/$/,"/")+"page/"+t+"/":"/"},owoBig(o){let n=document.getElementById("owo-big");n||((n=document.createElement("div")).id="owo-big",document.body.appendChild(n));document.addEventListener("mouseover",e=>{var e=e.target,t=e.closest(o.item);if(t&&e.closest(o.body)){let e=t.querySelector("img")?.src;e&&(n.innerHTML=`<img src="${e}" style="max-width: 100%; height: auto;">`,n.style.display="block",(e=>{e=e.getBoundingClientRect();n.style.left=e.left-n.offsetWidth/4+"px",n.style.top=e.top+"px"})(t))}}),document.addEventListener("mouseout",e=>{e.target.closest(o.item)&&e.target.closest(o.body)&&(n.style.display="none")})},changeTimeFormat(e){e.forEach(e=>{var t=e.getAttribute("datetime");e.textContent=utils.diffDate(t,!0),e.style.display="inline"})},switchComments(){var o=document.getElementById("switch-btn");if(o){let e=!1,t=document.getElementById("post-comment");utils.addEventListenerPjax(o,"click",()=>{t.classList.toggle("move"),e||"function"!=typeof loadTwoComment||(e=!0,loadTwoComment())})}}},addHighlight=()=>{var l=GLOBAL_CONFIG.highlight;if(l){let{copy:e,expand:t,limit:c,syntax:o}=l,r="prismjs"===o,d=l.enable||e||t||c,m=1==!t?"closed":"",n="highlight.js"===o?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((d||c)&&n.length){let l=e?'<i class="solitude st-copy-fill copy-button"></i>':"<i></i>",a=c?'<i class="solitude st-show-line"></i>':"<i></i>",t=e=>{var t=e.parentNode,o=(t.classList.add("copy-true"),window.getSelection()),n=document.createRange(),l=r?"pre code":"table .code pre";n.selectNodeContents(t.querySelectorAll(l)[0]),o.removeAllRanges(),o.addRange(n),document.execCommand("copy"),e.lastChild,l=GLOBAL_CONFIG.lang.copy.success,utils.snackbarShow(l,!1,2e3),o.removeAllRanges(),t.classList.remove("copy-true")},s=function(){this.classList.toggle("expand-done")},i=function(e){e=e.target.classList;e.contains("expand")?this.classList.toggle("closed"):e.contains("copy-button")&&t(this)},o=(t,e,o)=>{var n=document.createDocumentFragment();if(d){let e=document.createElement("div");e.className="highlight-tools "+m,e.innerHTML='<i class="solitude st-arrow-down expand"></i>'+t+l,utils.addEventListenerPjax(e,"click",i),n.appendChild(e)}if(c&&e.offsetHeight>c+30){let e=document.createElement("div");e.className="code-expand-btn",e.innerHTML=a,utils.addEventListenerPjax(e,"click",s),n.appendChild(e)}"hl"===o?e.insertBefore(n,e.firstChild):e.parentNode.insertBefore(n,e)};r?n.forEach(e=>{var t=`<div class="code-lang">${e.getAttribute("data-language")||"Code"}</div>`;utils.wrap(e,"figure",{class:"highlight"}),o(t,e)}):n.forEach(e=>{let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code"),o(`<div class="code-lang">${t}</div>`,e,"hl")})}}};class toc{static init(){var e,t=document.getElementById("card-toc");t&&t.querySelector(".toc a")?((e=document.querySelectorAll(".toc a")).forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(("toc-text"===e.target.className?e.target.parentNode:e.target).hash.replace("#","")))),300)})}),this.active(e)):t.style.display="none"}static active(a){let e=document.getElementById("article-container"),s=document.getElementById("toc-content"),i=e.querySelectorAll("h1,h2,h3,h4,h5,h6"),c="";window.tocScrollFn=utils.throttle(function(){var n=window.scrollY||document.documentElement.scrollTop;if(0!==n){let o="";if(i.forEach(function(e,t){n>utils.getEleTop(e)-80&&(o=t)}),c!==o){c=o,document.querySelectorAll(".toc .active").forEach(e=>{e.classList.remove("active")});var t,l=a[c];if(l){let e=a[c].parentNode;for(l.classList.add("active"),l=l.getBoundingClientRect().top,t=s.scrollTop,l>document.documentElement.clientHeight-100&&(s.scrollTop=t+150),l<100&&(s.scrollTop=t-150);!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}},100),window.addEventListener("scroll",tocScrollFn)}}class tabs{static init(){this.clickFnOfTabs(),this.backToTop()}static clickFnOfTabs(){document.querySelectorAll("#article-container .tab > button").forEach(e=>{e.addEventListener("click",function(e){var n=this.parentNode;if(!n.classList.contains("active")){let e=n.parentNode.nextElementSibling,t=utils.siblings(n,".active")[0],o=(t&&t.classList.remove("active"),n.classList.add("active"),this.getAttribute("data-href").replace("#",""));[...e.children].forEach(e=>{e.id===o?e.classList.add("active"):e.classList.remove("active")})}})})}static backToTop(){document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(e=>{e.addEventListener("click",function(){utils.scrollToDest(utils.getEleTop(e.parentElement.parentElement.parentNode),300)})})}static lureAddListener(){if(GLOBAL_CONFIG.lure){let t=document.title;document.addEventListener("visibilitychange",()=>{var e=GLOBAL_CONFIG.lure;"hidden"===document.visibilityState?document.title=e.jump:"visible"===document.visibilityState&&(document.title=e.back,setTimeout(()=>{document.title=t},2e3))})}}static expireAddListener(){var e,t,o=GLOBAL_CONFIG.expire;o&&(e=document.querySelector(".post-meta-date time"))&&(e=Math.ceil(((new Date).getTime()-new Date(e.getAttribute("datetime")).getTime())/1e3/60/60/24),o.time>e||((t=document.createElement("div")).className="expire",t.innerHTML=""+o.text_prev+-(o.time-e)+o.text_next,document.getElementById("article-container").insertAdjacentElement("top"===o.position?"afterbegin":"beforeend",t)))}}let scrollFnToDo=()=>{let e=PAGE_CONFIG.toc;if(e){let o=document.getElementById("card-toc");$cardToc=o.querySelector(".toc-content"),$tocLink=$cardToc.querySelectorAll(".toc-link"),$tocPercentage=o.querySelector(".toc-percentage"),isExpand=$cardToc.classList.contains("is-expand");utils.addEventListenerPjax($cardToc,"click",e=>{var t=e.target.closest(".toc-link");t&&(e.preventDefault(),utils.scrollToDest(utils.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900)&&o.classList.remove("open")})}},forPostFn=()=>{scrollFnToDo()};window.refreshFn=()=>{var{is_home:e,is_page:t,page:o,is_post:n}=PAGE_CONFIG,{runtime:l,lazyload:a,lightbox:s,randomlink:i,covercolor:c,post_ai:r,lure:d,expire:m}=GLOBAL_CONFIG,u=(e||n?".post-meta-date time":".datatime")+", .webinfo-item time";document.body.setAttribute("data-type",o),sco.changeTimeFormat(document.querySelectorAll(u)),l&&sco.addRuntime(),[scrollFn,sidebarFn,sco.hideCookie,sco.addPhotoFigcaption,sco.setTimeState,sco.tagPageActive,sco.categoriesBarActive,sco.listenToPageInputPress,sco.addNavBackgroundInit,sco.refreshWaterFall].forEach(e=>e()),a.enable&&utils.lazyloadImg(),s&&utils.lightbox(document.querySelectorAll("#article-container img:not(.flink-avatar,.gallery-group img)")),i&&randomLinksList(),r&&n&&efu_ai.init(),sco.switchComments(),initObserver(),e&&showTodayCard(),(n||t)&&(addHighlight(),tabs.init()),n&&m&&tabs.expireAddListener(),c.enable&&coverColor(),PAGE_CONFIG.toc&&toc.init(),d&&tabs.lureAddListener(),forPostFn()},document.addEventListener("DOMContentLoaded",()=>{[addCopyright,sco.initConsoleState,window.refreshFn,asideStatus,()=>window.onscroll=percent].forEach(e=>e())}),document.addEventListener("visibilitychange",()=>{document.hidden&&(sco.wasPageHidden=!0)}),window.onkeydown=e=>{var{keyCode:e,ctrlKey:t,shiftKey:o}=e;(123===e||t&&o&&67===e)&&utils.snackbarShow(GLOBAL_CONFIG.lang.f12,!1,3e3),27===e&&sco.hideConsole()},document.addEventListener("copy",()=>{utils.snackbarShow(GLOBAL_CONFIG.lang.copy.success,!1,3e3)});