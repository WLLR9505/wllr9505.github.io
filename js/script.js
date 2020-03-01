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
