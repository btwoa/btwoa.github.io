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
(function() {
    async function fetchHistoryData() {
        const myDate = new Date();
        const myMonth = myDate.getMonth() + 1;
        const getDate = myDate.getDate();
        const getMonth = myMonth < 10 ? "0" + myMonth : "" + myMonth;
        const getDay = getDate < 10 ? "0" + getDate : "" + getDate;
        const getMonthDate = "S" + getMonth + getDay;
        const history_data_url = `https://fastly.jsdelivr.net/gh/Zfour/Butterfly-card-history@2.08/baiduhistory/json/${getMonth}.json`;

        const response = await fetch(history_data_url);
        const data = await response.json();
        return data[getMonthDate];
    }

    function append(parent, text) {
        const temp = document.createElement('div');
        temp.innerHTML = text;
        const frag = document.createDocumentFragment();
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        parent.appendChild(frag);
    }

    function card_history() {
        if (document.getElementById('history-container')) {
            fetchHistoryData().then(data => {
                const html_item = data.map(item => `
        <div class="swiper-slide history_slide">
            <span class="history_slide_time">A.D.${item.year}</span>
            <span class="history_slide_link">${item.title}</span>
        </div>
        `).join('');
                const history_container_wrapper = document.getElementById('history_container_wrapper');
                append(history_container_wrapper, html_item);
                const swiper_history = new Swiper('.history_swiper-container', {
                    passiveListeners: true,
                    spaceBetween: 30,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 30,
                        slideShadows: false,
                    },
                    loop: true,
                    direction: 'vertical',
                    autoplay: {
                        disableOnInteraction: true,
                        delay: 5000
                    },
                    mousewheel: false,
                });
                const history_container = document.getElementById('history-container');
                history_container.onmouseenter = function () {
                    swiper_history.autoplay.stop();
                };
                history_container.onmouseleave = function () {
                    swiper_history.autoplay.start();
                }
            });
        }
    }

    card_history();

    document.addEventListener('pjax:complete', card_history);
})();



/* 个性定位 */

fetch('https://api.qjqq.cn/api/Local')
    .then(response => response.json())
    .then(data => {
        ipLocation = data;
        showWelcome();
    })
    .catch(error => console.error('Error:', error));


function getDistance(e1, n1, e2, n2) {
    const R = 6371;
    const { sin, cos, asin, PI, hypot } = Math;
    let getPoint = (e, n) => {
        e *= PI / 180;
        n *= PI / 180;
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) };
    };

    let a = getPoint(e1, n1);
    let b = getPoint(e2, n2);
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    let r = asin(c / 2) * 2 * R;
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(103.68330, 36.11407, ipLocation.data.lng, ipLocation.data.lat); //修改自己的经度（121.413921）纬度（31.089290）
    let pos = ipLocation.data.country;
    let ip = ipLocation.ip;
    let posdesc;

    switch (ipLoacation.result.ad_info.nation) {
        case "日本":
            posdesc = "私と一緒にお花見に行きませんか";
            break;
        case "美国":
            posdesc = "Let us live in peace!";
            break;
        case "英国":
            posdesc = "Nobody's gonna hold your hand";
            break;
        case "俄罗斯":
            posdesc = "Россию невозможно понять разумом";
            break;
        case "法国":
            posdesc = "C'est La Vie";
            break;
        case "德国":
            posdesc = "Die Zeit verging im Fluge";
            break;
        case "澳大利亚":
            posdesc = "Australia is unknown";
            break;
        case "加拿大":
            posdesc = "In the foreseeable future";
            break;
        case "中国":
            pos = ipLocation.data.prov + " " + ipLocation.data.city + " " + ipLocation.data.district;
            switch (ipLocation.data.prov) {
                case "北京市":
                    posdesc = " 地地道道地地道道~";
                    break;
                case "天津市":
                    posdesc = "竹板这么一打，别的咱不夸";
                    break;
                case "河北省":
                    posdesc = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西省":
                    posdesc = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    posdesc = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁省":
                    posdesc = "我想吃烤鸡架！";
                    break;
                case "吉林省":
                    posdesc = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江省":
                    posdesc = "很喜欢哈尔滨大剧院";
                    break;
                case "上海市":
                    posdesc = "众所周知，中国只有两个城市";
                    break;
                case "江苏省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "南京市":
                            posdesc = "桨声灯影秦淮月，虎踞龙蟠金陵城";
                            break;
                        case "苏州市":
                            posdesc = "上有天堂，下有苏杭";
                            break;
                        default:
                            posdesc = "散装是必须要散装的";
                            break;
                    }
                    break;
                case "浙江省":
                    posdesc = "东风渐绿西湖柳，雁已还人未南归";
                    break;
                case "河南省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "郑州市":
                            posdesc = "豫州之域，天地之中";
                            break;
                        case "南阳市":
                            posdesc = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店市":
                            posdesc = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封市":
                            posdesc = "刚正不阿包青天";
                            break;
                        case "洛阳市":
                            posdesc = "洛阳牡丹甲天下";
                            break;
                        default:
                            posdesc = "可否带我品尝河南烩面啦？";
                            break;
                    }
                    break;
                case "安徽省":
                    posdesc = "蚌埠住了，芜湖起飞";
                    break;
                case "福建省":
                    posdesc = "井邑白云间，岩城远带山";
                    break;
                case "江西省":
                    posdesc = "落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东省":
                    posdesc = "遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "黄冈市":
                            posdesc = "红安将军县！辈出将才！";
                            break;
                        default:
                            posdesc = "来碗热干面~";
                            break;
                    }
                    break;
                case "湖南省":
                    posdesc = "74751，长沙斯塔克";
                    break;
                case "广东省":
                    switch (ipLoacation.result.ad_info.city) {
                        case "广州市":
                            posdesc = "看小蛮腰，喝早茶了嘛~";
                            break;
                        case "深圳市":
                            posdesc = "今天你996了嘛~";
                            break;
                        case "阳江市":
                            posdesc = "阳春合水！博主家乡~ 欢迎来玩~";
                            break;
                        default:
                            posdesc = "来两斤福建人~";
                            break;
                    }
                    break;
                case "广西壮族自治区":
                    posdesc = "桂林山水甲天下";
                    break;
                case "海南省":
                    posdesc = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川省":
                    posdesc = "康康川妹子";
                    break;
                case "贵州省":
                    posdesc = "茅台，学生，再塞200";
                    break;
                case "云南省":
                    posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    posdesc = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西省":
                    posdesc = "来份臊子面加馍";
                    break;
                case "甘肃省":
                    posdesc = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海省":
                    posdesc = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    posdesc = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾省":
                    posdesc = "我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    posdesc = "性感荷官，在线发牌";
                    break;
                default:
                    posdesc = "带我去你的城市逛逛吧！";
                    break;
            }
            break;
        default:
            posdesc = "带我去你的国家逛逛吧";
            break;
    }

    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span class='welcome-time'>早上好，一日之计在于晨</span>";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span class='welcome-time'>中午好，在打盹了已经</span>";
    else if (date.getHours() >= 13 && date.getHours() < 17) timeChange = "<span class='welcome-time'>下午好，摸鱼可别被逮哦</span>";
    else if (date.getHours() >= 17 && date.getHours() < 19) timeChange = "<span class='welcome-time'>即将下班，记得按时吃饭</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span class='welcome-time'>晚上好，自由时间嗨起来</span>";
    else timeChange = "<span class='welcome-time'>夜深了，月亮不睡我不睡</span>";

    try {
        document.getElementById("welcome-info").innerHTML =
            `<span><span style="color: var(--efu-main);font-weight: bold;">${pos}</span> 的小友👀 </span><span class="welcome-message">${posdesc}🧲</span>我们之间好像隔着 <b><span style="color: var(--efu-main);font-weight: bold;">${dist}</span></b> 公里嘞<br>您的IP地址为：<b><span style="font-size: 12px;">${ip}</span></b><br>${timeChange} <br>`;
    } catch (err) {
        console.log("Pjax无法获取元素");
    }
}

function handlePjaxComplete() {
    showWelcome();
}

window.onload = function() {
    showWelcome();

    document.addEventListener("pjax:complete", handlePjaxComplete);
};