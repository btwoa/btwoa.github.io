class Barrage{constructor(e){this.comments=e,this.dom=document.querySelector(".comment-barrage"),this.barrageList=[],this.barrageIndex=0,this.barrageTimer=[],this.hoverOnCommentBarrage=!1,this.init()}filterAndFlatten=e=>e.flatMap((e=>e.replies?[e,...this.filterAndFlatten(e.replies)]:[e]));sanitizeContent(e){return e.replace(/(<([^>]+)>)/gi,"").trim()}createBarrageItem(e){const t=this.sanitizeContent(e.content);if(!t)return!1;const r=document.createElement("div");return r.className="comment-barrage-item",r.innerHTML=`<div class="barrageHead"><a class="barrageTitle" href="javascript:sco.scrollTo('post-comment')">${GLOBAL_CONFIG.lang.barrage.title}</a><div class="barrageNick">${e.nick}</div><img class="barrageAvatar" src="${GLOBAL_CONFIG.comment.avatar}/avatar/${e.mailMd5}"/><a class="comment-barrage-close" href="javascript:sco.switchCommentBarrage();"><i class="solitude st-close-fill"></i></a></div><a class="barrageContent" href="${e.id?`javascript:sco.scrollTo('${e.id}')`:"javascript:sco.scrollTo('post-comment')"}">${t}</a>`,this.dom.appendChild(r),this.barrageTimer.push(r),!0}removeBarrageItem(e){e.classList.add("out"),setTimeout((()=>this.dom.removeChild(e)),1e3)}manageBarrage(){if(this.barrageList.length&&!this.hoverOnCommentBarrage){if(!this.createBarrageItem(this.barrageList[this.barrageIndex]))return this.barrageIndex=(this.barrageIndex+1)%this.barrageList.length,this.manageBarrage();this.barrageIndex=(this.barrageIndex+1)%this.barrageList.length}this.barrageTimer.length>Math.min(1,this.barrageList.length)&&!this.hoverOnCommentBarrage&&this.removeBarrageItem(this.barrageTimer.shift())}initBarrage(){const e=utils.saveToLocal.get("commentBarrageSwitch");this.dom.style.display=e?"flex":"none",this.barrageList=this.filterAndFlatten(this.comments),this.dom.innerHTML="",clearInterval(this.commentInterval),this.commentInterval=setInterval((()=>this.manageBarrage()),5e3)}init(){this.initBarrage(),this.dom.addEventListener("mouseover",(()=>this.hoverOnCommentBarrage=!0)),this.dom.addEventListener("mouseout",(()=>this.hoverOnCommentBarrage=!1))}destroy(){clearInterval(this.commentInterval),this.dom.removeEventListener("mouseover",(()=>this.hoverOnCommentBarrage=!0)),this.dom.removeEventListener("mouseout",(()=>this.hoverOnCommentBarrage=!1)),this.dom.innerHTML=""}}function initializeCommentBarrage(e){if(0===e.length)return;let t=window.currentBarrage;t&&t.destroy(),window.currentBarrage=new Barrage(e)}