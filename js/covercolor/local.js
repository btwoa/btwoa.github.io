const coverColor = () => {
    const path = document.getElementById("post-cover")?.src;
    path ? localColor(path) : setDefaultThemeColors();
}

function setDefaultThemeColors() {
    document.documentElement.style.setProperty('--ba-main', 'var(--ba-theme)');
    document.documentElement.style.setProperty('--ba-main-op', 'var(--ba-theme-op)');
    document.documentElement.style.setProperty('--ba-main-op-deep', 'var(--ba-theme-op-deep)');
    document.documentElement.style.setProperty('--ba-main-none', 'var(--ba-theme-none)');
    initThemeColor();
}

const localColor = path => {
    var colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => setThemeColors(rgbToHex(colorThief.getColor(img)));
    img.onerror = () => console.error('Image Error');
    img.src = path;
}

const rgbToHex = ([r, g, b]) => {
  const hex = '#' + [r, g, b].map(x => {
    const component = Math.floor(x * 0.8);
    const hexValue = component.toString(16);
    return hexValue.length === 1 ? '0' + hexValue : hexValue;
  }).join('');
  return hex;
}

function setThemeColors(value, r = null, g = null, b = null) {
    if (value) {
        document.documentElement.style.setProperty('--ba-main', value);
        document.documentElement.style.setProperty('--ba-main-op', value + '23');
        document.documentElement.style.setProperty('--ba-main-op-deep', value + 'dd');
        document.documentElement.style.setProperty('--ba-main-none', value + '00');

        if (r && g && b) {
            let brightness = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);
            if (brightness < 125) {
                let cardContents = document.getElementsByClassName('card-content');
                for (let i = 0; i < cardContents.length; i++) {
                    cardContents[i].style.setProperty('--ba-card-bg', 'var(--ba-white)');
                }

                let authorInfo = document.getElementsByClassName('author-info__sayhi');
                for (let i = 0; i < authorInfo.length; i++) {
                    authorInfo[i].style.setProperty('background', 'var(--ba-white-op)');
                    authorInfo[i].style.setProperty('color', 'var(--ba-white)');
                }

                value = LightenDarkenColor(value, 50);
                document.documentElement.style.setProperty('--ba-main', value);
                document.documentElement.style.setProperty('--ba-main-op', value + '23');
                document.documentElement.style.setProperty('--ba-main-op-deep', value + 'dd');
                document.documentElement.style.setProperty('--ba-main-none', value + '00');
            }
        }

        document.getElementById("coverdiv").classList.add("loaded");
        initThemeColor();
    } else {
        document.documentElement.style.setProperty('--ba-main', 'var(--ba-theme)');
        document.documentElement.style.setProperty('--ba-main-op', 'var(--ba-theme-op)');
        document.documentElement.style.setProperty('--ba-main-op-deep', 'var(--ba-theme-op-deep)');
        document.documentElement.style.setProperty('--ba-main-none', 'var(--ba-theme-none)');
        initThemeColor();
    }
}