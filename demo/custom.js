// /* PostAI */

// (async function () {
//     function postAI(dom) {
//       function insertAIBox() {
//         removeExistingAIBox()
//         // 获取目标元素
//         let AIbox = document.createElement('div')
//         AIbox.className = 'postAI-box'
//         // 插入 SVG 图标
//         let icon = `<svg t="1714137053863" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7326" width="200" height="200">
//         <path d="M541.866667 761.002667a107.136 107.136 0 0 1-68.608-24.874667c1.152-0.597333 2.304-1.28 3.413333-1.92l114.048-65.877333a18.56 18.56 0 0 0 9.386667-16.128v-160.896l48.213333 27.818666a1.706667 1.706667 0 0 1 0.938667 1.322667v133.205333a107.52 107.52 0 0 1-107.264 107.349334H541.866667z" p-id="7327" fill="#000000"></path>
//         <path d="M298.538667 590.506667a107.136 107.136 0 0 0 105.813333 125.568 107.52 107.52 0 0 0 53.632-14.336l115.285333-66.56a1.706667 1.706667 0 0 0 0.725334-1.365334v-55.808l-139.264 80.426667a18.56 18.56 0 0 1-18.773334 0l-114.048-65.877333-3.413333-2.005334z" p-id="7328" fill="#000000"></path>
//         <path d="M337.194667 366.378667a107.008 107.008 0 0 0-55.893334 47.104 107.434667 107.434667 0 0 0 39.296 146.56l115.328 66.645333a1.706667 1.706667 0 0 0 1.621334-0.170667l48.213333-27.818666-139.264-80.426667a18.517333 18.517333 0 0 1-9.344-16.085333V370.346667l0.042667-3.968zM538.197333 425.258667l48.213334-27.861334a1.706667 1.706667 0 0 1 1.578666-0.170666l115.328 66.56a107.434667 107.434667 0 0 1-16.597333 193.792v-135.893334a18.56 18.56 0 0 0-9.301333-16.042666l-139.221334-80.384z" p-id="7329" fill="#000000"></path>
//         <path d="M722.048 431.36L608 365.568a18.602667 18.602667 0 0 0-18.773333 0l-139.264 80.384V390.144a1.706667 1.706667 0 0 1 0.725333-1.408l115.285333-66.517333a107.392 107.392 0 0 1 159.445334 111.189333 167.893333 167.893333 0 0 0-3.413334-2.005333z" p-id="7330" fill="#000000"></path>
//         <path d="M375.552 504.832l48.213333 27.818667 0.085334-160.853334a18.56 18.56 0 0 1 9.386666-16.128l114.090667-65.877333c1.109333-0.682667 2.218667-1.28 3.370667-1.92A107.349333 107.349333 0 0 0 374.613333 370.304V503.466667a1.706667 1.706667 0 0 0 0.938667 1.322666z" p-id="7331" fill="#000000"></path>
//         <path d="M512 440.32l-62.037333 35.84v71.637333l62.037333 35.797334 61.994667-35.84V476.16L512 440.32z" p-id="7332" fill="#000000"></path>
//         <path d="M512 1024c282.752 0 512-229.248 512-512S794.752 0 512 0 0 229.248 0 512s229.248 512 512 512z m245.333333-563.968a142.890667 142.890667 0 0 0-12.245333-117.205333 144.384 144.384 0 0 0-155.477333-69.290667 142.72 142.72 0 0 0-106.709334-47.957333h-1.28A144.384 144.384 0 0 0 344.32 325.504 142.762667 142.762667 0 0 0 248.874667 394.666667a144.426667 144.426667 0 0 0 17.749333 169.301333 142.805333 142.805333 0 0 0 12.245333 117.205333 144.384 144.384 0 0 0 155.434667 69.248 142.72 142.72 0 0 0 106.752 48h1.28a144.341333 144.341333 0 0 0 137.386667-100.010666 142.72 142.72 0 0 0 95.402666-69.248 144.213333 144.213333 0 0 0-17.792-169.173334z" p-id="7333" fill="#000000"></path>
//         </svg>`
//         AIbox.innerHTML = `
//         <div class="postAI-icon">${icon}</div>
//         <div class="talk-container"><div class="postAI-talk"><span class="postAI-content"></span><span class="blinking-cursor"></span></div></div>
//         `
//         // 将创建的元素插入到目标元素的顶部
//         dom.insertBefore(AIbox, dom.firstChild)
//       }
  
//       function removeExistingAIBox() {
//         const existingAIDiv = document.querySelector(".postAI-box")
//         // 如果找到了这个元素，就从其父元素中删除它
//         if (existingAIDiv) existingAIDiv.parentElement.removeChild(existingAIDiv)
//       }
  
//       function getTitleAndContent() {
//         try {
//           if (!dom) {
//             console.warn('找不到文章容器。')
//             return ''
//           }
//           const paragraphs = dom.getElementsByTagName('p')
//           const headings = dom.querySelectorAll('h1, h2, h3, h4, h5')
//           let content = ''
//           for (let h of headings) {
//             content += h.innerText.replaceAll('&', '以及') + ' '
//           }
//           for (let p of paragraphs) {
//             content += p.innerText.replace(/https?:\/\/[^\s]+/g, '')
//           }
  
//           let wordLimit = 1000
//           if (typeof postAI_wordLimit !== "undefined") wordLimit = postAI_wordLimit
  
//           return (document.title + ' ' + content).slice(0, wordLimit)
//         } catch (e) {
//           console.error('获取文章内容失败：', e)
//           return ''
//         }
//       }
  
//       async function fetchSummary(content) {
//         const apiUrl = `https://summary.tianli0.top/?content=${content}&key=a3AQwYShHwBlEWxo0zxl&url=${location.pathname}&title=${document.title}`
//         try {
//           const response = await fetch(apiUrl)
//           if (response.ok) {
//             const data = await response.json()
//             return {
//               code: 0,
//               data: data.summary
//             }
//           } else {
//             throw new Error('摘要获取失败。')
//           }
//         } catch (error) {
//           if (error.name === 'AbortError') {
//             if (window.location.hostname === 'localhost') return {
//               code: 1,
//               data: '获取文章摘要超时。请勿在本地主机上测试 API 密钥。'
//             }
//             else return {
//               code: 1,
//               data: '获取文章摘要超时。当你出现这个问题时，可能是key或者绑定的域名不正确。也可能是因为文章过长导致的 AI 运算量过大，您可以稍等一下然后刷新页面重试。'
//             }
//           } else return {
//             code: 1,
//             data: '获取文章摘要失败，请稍后再试。'
//           }
//         }
//       }
  
//       async function AItalk(text) {
//         const element = document.querySelector(".postAI-content")
//         return new Promise((resolve) => {
//           if (!element) throw new Error("Element not found")
//           let str = element.innerText
//           let i = str.length
//           if (i == 0) return resolve()
  
//           function delContent() {
//             if (i >= 0) {
//               element.innerText = str.slice(0, i--)
//               setTimeout(delContent, 20)
//             } else setTimeout(resolve, 800);
//           }
//           delContent()
//         }).then(() => {
//           return new Promise((resolve) => {
//             const typingDelay = 25
//             const punctuationDelayMultiplier = 6
//             let currentIndex = 0
//             let lastUpdateTime = performance.now()
//             document.querySelector('.postAI-icon svg').classList.add('jump')
//             const animate = () => {
//               if (currentIndex < text.length) {
//                 const currentTime = performance.now()
//                 const timeDiff = currentTime - lastUpdateTime
//                 const letter = text.slice(currentIndex, currentIndex + 1)
//                 const isPunctuation = /[，。！、？,.!?]/.test(letter)
//                 const delay = isPunctuation ? typingDelay * punctuationDelayMultiplier : typingDelay
  
//                 if (timeDiff >= delay) {
//                   lastUpdateTime = currentTime
//                   currentIndex++
//                   if (currentIndex < text.length) element.innerText = text.slice(0, currentIndex)
//                   else {
//                     element.innerText = text
//                     document.querySelector('.postAI-icon svg').classList.remove('jump')
//                     resolve()
//                   }
//                 }
//                 requestAnimationFrame(animate)
//               }
//             }
//             requestAnimationFrame(animate)
//           })
//         }).catch()
//       }
  
//       insertAIBox()
//       AItalk('点击即可生成AI摘要哦~')
//       async function showSummary() {
//         document.querySelector('.postAI-icon').removeEventListener('click', showSummary)
//         await AItalk('正在为您生成AI摘要，请稍候......')
//         setTimeout(() => {
//           if (PAGE_CONFIG.ai_text) {
//             AItalk(PAGE_CONFIG.ai_text).then(() => {
//               if (!PAGE_CONFIG.ai_text) {
//                 document.querySelector('.blinking-cursor').style.display = 'none'
//               } else document.querySelector('.postAI-icon').addEventListener('click', showSummary)
//             })
//           } else {
//             fetchSummary(getTitleAndContent()).then(summary => {
//               AItalk(summary.data.replaceAll('作者', '博主')).then(() => {
//                 if (!summary.code) {
//                   document.querySelector('.blinking-cursor').style.display = 'none'
//                 } else document.querySelector('.postAI-icon').addEventListener('click', showSummary)
//               })
//             })
//           }
//         }, 1000);
//       }
//       document.querySelector('.postAI-icon').addEventListener('click', showSummary)
//     }
  
//     function postFunc() {
//       let dom = document.querySelector('#post #article-container')
//       if (dom) {
//         postAI(dom)
//       }
//     }
  
//     window.addEventListener('DOMContentLoaded', () => {
//       postFunc()
//       document.addEventListener('pjax:complete', postFunc)
//     })
//   })();

// /* 自定义函数 */

// var btwoa = {
//     getIpInfo: function() {
//         fetch("https://api.qjqq.cn/api/Local").then((t=>t.json())).then((t=>{
//             var e = t.ip
//               , n = t.data.country
//               , o = t.data.prov
//               , a = t.data.city
//               , i = t.data.district
//               , r = t.data.radius
//               , c = Math.floor(r)
//               , l = t.data.isp;
//             document.getElementById("userAgentIp").innerHTML = e,
//             document.getElementById("userAgentCountry").innerHTML = n,
//             document.getElementById("userAgentProv").innerHTML = o,
//             document.getElementById("userAgentCity").innerHTML = a,
//             document.getElementById("userAgentDistrict").innerHTML = i,
//             document.getElementById("userAgentRadius").innerHTML = c + "公里",
//             document.getElementById("userAgentISP").innerHTML = l;
//             var s = (new UAParser).getResult();
//             document.getElementById("userAgentOS").innerHTML = s.os.name + " " + s.os.version,
//             document.getElementById("userAgentBrowser").innerHTML = s.browser.name + " " + s.browser.version
//         }
//         ))
//     }
// }

// /* 新年侧边栏 */

// let newYearTimer = null;
// var newYear = () => {
// clearTimeout(newYearTimer);
// if (!document.querySelector('#newYear')) return;
// // 新年时间戳 and 星期对象
// let newYear = new Date('2025-01-29 00:00:00').getTime() / 1000,
// week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

//     time();

//     // 补零函数
//     function nol(h) { return h > 9 ? h : '0' + h; };

//     function time() {
//         // 现在 时间对象
//         let now = new Date();

//         // 右下角 今天
//         document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日 ' + week[now.getDay()]

//         // 现在与新年相差秒数
//         let second = newYear - Math.round(now.getTime() / 1000);

//         // 小于0则表示已经过年
//         if (second < 0) {
//             document.querySelector('#newYear .title').innerHTML = '喜迎新年';
//             document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐！</span>';
//         } else {
//             // 大于0则还未过年
//             document.querySelector('#newYear .title').innerHTML = '距离2025年春节：'

//             // 大于一天则直接渲染天数
//             if (second > 86400) {
//                 document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
//             } else {
//                 // 小于一天则使用时分秒计时。
//                 let h = nol(parseInt(second / 3600));
//                 second %= 3600;
//                 let m = nol(parseInt(second / 60));
//                 second %= 60;
//                 let s = nol(second);
//                 document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
//                 // 计时
//                 newYearTimer = setTimeout(time, 1000);
//             }
//         }
//     }
// }
// newYear();

// document.addEventListener('pjax:complete', newYear);

// /* 那年今日 */

// document.addEventListener('DOMContentLoaded', function () {
//     async function cardHistory() {
//         const historyContainer = document.getElementById('history-container');
//         if (!historyContainer) return;
//         const data = await fetchHistoryData();
//         const html = data.map(item => `<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.${item.year}</span><span class="history_slide_link">${item.title}</span></div>`).join('');
//         const swiperContainer = document.querySelector('.history_swiper-container');
//         document.getElementById('history_container_wrapper').innerHTML = html
//         const swiperHistory = new Swiper(swiperContainer, {
//             loop: true,
//             direction: 'vertical',
//             autoplay: {disableOnInteraction: true, delay: 5000},
//             mousewheel: false,
//         });
//         historyContainer.onmouseenter = () => swiperHistory.autoplay.stop();
//         historyContainer.onmouseleave = () => swiperHistory.autoplay.start();

//         async function fetchHistoryData() {
//             const myDate = new Date();
//             const formattedDate = 'S' + `${myDate.getMonth() + 1}`.padStart(2, '0') + `${myDate.getDate()}`.padStart(2, '0');
//             const historyDataUrl = `https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@2.08/baiduhistory/json/${myDate.getMonth() < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1}.json`;
//             const response = await fetch(historyDataUrl);
//             const data = await response.json();
//             return data[formattedDate];
//         }
//     }
//     cardHistory()
//     document.addEventListener('pjax:complete', cardHistory);
// })

// /* 发牌 */

// const cardSymbols = [
//     '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',  
//     '🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾',
//     '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍', '🃎',
//     '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝', '🃞', 
//     '🂿', '🃟'
// ];

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomCards(symbols, num) {
//     const shuffled = [...symbols].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, num);
// }

// function shuffleCards() {

  
//     const selectedCards = getRandomCards(cardSymbols, 9);
//     const container = document.getElementById('card-container');
//     container.innerHTML = '';  

//     selectedCards.forEach((symbol, index) => {
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
//         cardDiv.style.setProperty('--i', index - 4);
//         cardDiv.textContent = symbol;
//         container.appendChild(cardDiv);
//     });

//     setTimeout(() => {
//         const outerContainer = document.getElementById('nine-cards-container');
//         if (outerContainer) {
//             outerContainer.style.height = '500px'; 
//         }
//     }, 100); 
// }

// let timer;
// function resetTimer() {
//     clearTimeout(timer);
//     timer = setTimeout(shuffleCards, 2000); 
// }

// function setupEventListeners() {
//     const container = document.getElementById('card-container');
//     if (container) {
//         container.addEventListener('mouseover', () => {
//             clearTimeout(timer);  
//         });

//         container.addEventListener('mouseout', resetTimer);
//     }
// }

// function onPageLoadComplete() {
//     shuffleCards();
//     setupEventListeners();
// }

// document.addEventListener('pjax:load', onPageLoadComplete);

// if (document.readyState === 'complete') {
//     onPageLoadComplete();
// } else {
//     window.addEventListener('load', onPageLoadComplete);
// }

// /* 指针样式 */

// const largeCircle = document.getElementById('largeCircle');
// const smallCircle = document.getElementById('smallCircle');

// let isMouseDown = false;
// let isLargeCircleVisible = false;
// let mouseX = 0;
// let mouseY = 0;

// function setPosition(x, y) {
//     const halfLargeCircleWidth = largeCircle.offsetWidth / 2;
//     const halfSmallCircleWidth = smallCircle.offsetWidth / 2;

//     // 设置小圆的位置
//     smallCircle.style.left = `${x - halfSmallCircleWidth}px`;
//     smallCircle.style.top = `${y - halfSmallCircleWidth}px`;

//     // 设置大圆的位置，平滑过渡到小圆的位置
//     largeCircle.style.left = `${x - halfLargeCircleWidth}px`;
//     largeCircle.style.top = `${y - halfLargeCircleWidth}px`;

//     // 根据鼠标按下状态调整圆的大小
//     largeCircle.style.transform = isMouseDown ? 'scale(0.5)' : 'scale(1)';
//     smallCircle.style.transform = isMouseDown ? 'scale(2)' : 'scale(1)';
// }

// // 更新悬停状态
// function updateHoverStatus(x, y) {
//     const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, div, pre, code, input, textarea');
//     let isHoveringText = Array.from(textElements).some(el => {
//         const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
//         return textNodes.some(node => {
//             const range = document.createRange();
//             range.selectNodeContents(node);
//             return Array.from(range.getClientRects()).some(rect =>
//                 x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
//             );
//         });
//     });

//     // 处理 input 和 textarea 元素的 hover 状态
//     const inputElements = document.querySelectorAll('input, textarea');
//     isHoveringText = isHoveringText || Array.from(inputElements).some(el => {
//         const rect = el.getBoundingClientRect();
//         return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
//     });

//     // 根据是否悬停在文本上添加或移除 class
//     document.body.classList.toggle('hovered', isHoveringText);
// }

// // 动画帧函数
// function animate() {
//     setPosition(mouseX, mouseY);
//     updateHoverStatus(mouseX, mouseY);

//     if (!isLargeCircleVisible) {
//         isLargeCircleVisible = true;
//         largeCircle.style.display = 'block';
//         smallCircle.style.display = 'block';
//     }

//     requestAnimationFrame(animate);
// }

// // 处理鼠标移动事件
// function handleMove(event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;

//     if (!isLargeCircleVisible) {
//         requestAnimationFrame(animate);
//     }
// }

// // 监听鼠标事件
// document.addEventListener('mousemove', handleMove);

// document.addEventListener('mousedown', (event) => {
//     isMouseDown = true;
//     mouseX = event.clientX;
//     mouseY = event.clientY;
//     setPosition(mouseX, mouseY);
//     largeCircle.classList.add('pulse'); // 按下时添加脉冲动画
// });

// document.addEventListener('mouseup', () => {
//     isMouseDown = false;
//     setPosition(mouseX, mouseY);
//     largeCircle.classList.remove('pulse'); // 松开时移除脉冲动画
// });