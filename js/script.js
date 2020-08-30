function showThis(target, el) {
    var viewer = document.getElementById('viewer');
    var titleBar = document.getElementById('titleBar');
    var info = document.getElementById('info');

    titleBar.innerText = el.children[1].innerText;
    
    info.innerText = `-${titleBar.innerText.toLowerCase()}-`
    for (let i = 0; i < viewer.children.length; i++) {
        if (viewer.children[i].id === target) {
            viewer.children[i].style.display = 'contents';
        } else {
            viewer.children[i].style.display = 'none';
        }
    }
}


function theme() {

    const staticLink = 'https://raw.githubusercontent.com/WLLR9505/wllr9505.github.io/master/img/'
    var themes = {
        cyan: [
            staticLink + 'denys-nevozhai-guNIjIuUcgY-unsplash.jpg',
            staticLink + 'wllr9505_34982820_1684341628351417_6086012870825345024_n.jpg',
            staticLink + 'alexander-popov-3InMDrsuYrk-unsplash.jpg',
        ],
        black : [
            staticLink + 'adam-birkett-YkXdt3429hc-unsplash.jpg',
            staticLink + 'mathew-macquarrie-u6OnpbMuZAs-unsplash.jpg',
            staticLink + 'chris-coe-_5jkeiEJefo-unsplash.jpg'
        ],
        purple: [
            staticLink + 'akshay-vishwakarma-9OcrsExqMTs-unsplash.jpg',
            staticLink + 'krystal-ng-PrQqQVPzmlw-unsplash.jpg',
            staticLink + 'jr-korpa-9XOYkNa2vxw-unsplash.jpg'
        ],
        green: [
            staticLink + 'chulpan-gallyamova-IRaP12RxQVU-unsplash.jpg',
            staticLink + 'david-kovalenko-G85VuTpw6jg-unsplash.jpg',
            staticLink + 'viktor-theo-4l8e-oPT4Ok-unsplash.jpg'
        ]
    }

    //---------------3---------------7---------------12---------------18->
    //--------purple---|--------BW-----|------lime------|------cyan------|->

    var hour = new Date();
    hour = hour.getHours();
    var bgImage = document.getElementById("themeImage")

    if ((hour >= 0 && hour < 3) || (hour >= 18 && hour < 24)) {
        document.write('<link href="css/purple.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.purple.length);
        bgImage.src = themes.purple[n];
        return 0;
    }

    if (hour < 7) {
        let n = Math.floor(Math.random() * themes.black.length);
        bgImage.src = themes.black[n];
        return 0;
    }

    if (hour < 12) {
        document.write('<link href="css/lime.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.green.length);
        bgImage.src = themes.green[n];
        return 0;
    }

    if (hour < 18) {
        document.write('<link href="css/cyan.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.cyan.length);
        bgImage.src = themes.cyan[n];
        return 0;
    }
}

function events() {
    var profile = document.getElementById('profile')
    var profileMenu = document.getElementById('menu')
    var profileCard = document.getElementById('profile-card')
    var bgImage = document.getElementById("themeImage")

    profile.addEventListener('mouseover', () => {
        profileMenu.style.backgroundColor = 'var(--bg)'
        bgImage.style.transition = profileMenu.style.transition = '0.5s'
        profileMenu.style.borderStyle = 'solid'
        profileMenu.style.animation = '1s pulse .5s infinite alternate'
        profileCard.style.boxShadow = '0 0 100px var(--sat2), inset 0 0 100px var(--sat2)'
        bgImage.style.mixBlendMode = 'screen'
        
    })
    profile.addEventListener('mouseout', () => {
        profileMenu.style.backgroundColor = 'transparent'
        profileMenu.style.boxShadow = profileMenu.style.animation = profileCard.style.boxShadow = 'none'
        profileMenu.style.borderStyle = 'dashed'
        bgImage.style.opacity = '100%'
        bgImage.style.mixBlendMode = 'initial'
        bgImage.style.zIndex = 0
    })
}

function main() {
    theme();
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width

    if (width > 900) {
        events();
    }
}

main()

