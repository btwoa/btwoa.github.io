/* 自定义函数 */

var btwoa = {
    getIpInfo: function() {
        fetch("https://api.qjqq.cn/api/Local").then((t=>t.json())).then((t=>{
            var e = t.ip
              , n = t.data.country
              , o = t.data.prov
              , a = t.data.city
              , i = t.data.district
              , r = t.data.radius
              , c = Math.floor(r)
              , l = t.data.isp;
            document.getElementById("userAgentIp").innerHTML = e,
            document.getElementById("userAgentCountry").innerHTML = n,
            document.getElementById("userAgentProv").innerHTML = o,
            document.getElementById("userAgentCity").innerHTML = a,
            document.getElementById("userAgentDistrict").innerHTML = i,
            document.getElementById("userAgentRadius").innerHTML = c + "公里",
            document.getElementById("userAgentISP").innerHTML = l;
            var s = (new UAParser).getResult();
            document.getElementById("userAgentOS").innerHTML = s.os.name + " " + s.os.version,
            document.getElementById("userAgentBrowser").innerHTML = s.browser.name + " " + s.browser.version
        }
        ))
    }
}

/* 新年侧边栏 */

let newYearTimer = null;
var newYear = () => {
clearTimeout(newYearTimer);
if (!document.querySelector('#newYear')) return;
// 新年时间戳 and 星期对象
let newYear = new Date('2025-01-29 00:00:00').getTime() / 1000,
week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

    time();

    // 补零函数
    function nol(h) { return h > 9 ? h : '0' + h; };

    function time() {
        // 现在 时间对象
        let now = new Date();

        // 右下角 今天
        document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日 ' + week[now.getDay()]

        // 现在与新年相差秒数
        let second = newYear - Math.round(now.getTime() / 1000);

        // 小于0则表示已经过年
        if (second < 0) {
            document.querySelector('#newYear .title').innerHTML = '喜迎新年';
            document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐！</span>';
        } else {
            // 大于0则还未过年
            document.querySelector('#newYear .title').innerHTML = '距离2025年春节：'

            // 大于一天则直接渲染天数
            if (second > 86400) {
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
            } else {
                // 小于一天则使用时分秒计时。
                let h = nol(parseInt(second / 3600));
                second %= 3600;
                let m = nol(parseInt(second / 60));
                second %= 60;
                let s = nol(second);
                document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
                // 计时
                newYearTimer = setTimeout(time, 1000);
            }
        }
    }
}
newYear();

document.addEventListener('pjax:complete', newYear);

/* 那年今日 */

document.addEventListener('DOMContentLoaded', function () {
    async function cardHistory() {
        const historyContainer = document.getElementById('history-container');
        if (!historyContainer) return;
        const data = await fetchHistoryData();
        const html = data.map(item => `<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.${item.year}</span><span class="history_slide_link">${item.title}</span></div>`).join('');
        const swiperContainer = document.querySelector('.history_swiper-container');
        document.getElementById('history_container_wrapper').innerHTML = html
        const swiperHistory = new Swiper(swiperContainer, {
            loop: true,
            direction: 'vertical',
            autoplay: {disableOnInteraction: true, delay: 5000},
            mousewheel: false,
        });
        historyContainer.onmouseenter = () => swiperHistory.autoplay.stop();
        historyContainer.onmouseleave = () => swiperHistory.autoplay.start();

        async function fetchHistoryData() {
            const myDate = new Date();
            const formattedDate = 'S' + `${myDate.getMonth() + 1}`.padStart(2, '0') + `${myDate.getDate()}`.padStart(2, '0');
            const historyDataUrl = `https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@2.08/baiduhistory/json/${myDate.getMonth() < 10 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1}.json`;
            const response = await fetch(historyDataUrl);
            const data = await response.json();
            return data[formattedDate];
        }
    }
    cardHistory()
    document.addEventListener('pjax:complete', cardHistory);
})