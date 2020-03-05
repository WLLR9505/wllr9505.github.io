function showThis(target, el) {
    var viewer = document.getElementById('viewer');
    var titleBar = document.getElementById('titleBar');

    titleBar.innerText = el.children[1].innerText;
    for (let i = 0; i < viewer.children.length; i++) {
        if (viewer.children[i].id === target) {
            viewer.children[i].style.display = 'contents';
        } else {
            viewer.children[i].style.display = 'none';
        }
    }
}

function theme() {

    //---------------3---------------7---------------12---------------18->
    //--------neon------------BW------------lime------------cyan--------->

    var hour = new Date();
    hour = hour.getHours();
    
    if (hour < 3) {
        document.write('<link href="css/neon.css" rel="stylesheet" type:"text/css">');
        return 0;
    }

    if (hour < 7) {
        return 0;
    }

    if (hour < 12) {
        document.write('<link href="css/lime.css" rel="stylesheet" type:"text/css">');
        return 0;
    }

    if (hour < 18) {
        document.write('<link href="css/cyan.css" rel="stylesheet" type:"text/css">');
        return 0;
    } 
}

theme();
