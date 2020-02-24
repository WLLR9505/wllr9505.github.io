function showThis(el) {
    var viewer = document.getElementById('viewer');

    for (let i = 0; i < viewer.children.length; i++) {
        if (viewer.children[i].id === el) {
            viewer.children[i].style.display = 'contents';
        } else {
            viewer.children[i].style.display = 'none';
        }
    }
}
