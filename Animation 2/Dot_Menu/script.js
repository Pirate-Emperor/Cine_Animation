"use strict";
Array.from(document.getElementsByTagName('path')).map(path => {
    console.log(path.getTotalLength());
    const debugPath = path.cloneNode();
    debugPath.classList.add('line--debug');
    if (path.parentNode)
        path.parentNode.insertBefore(debugPath.cloneNode(), path);
});
const debugCheckbox = document.getElementById('debug');
debugCheckbox.addEventListener('change', () => {
    if (debugCheckbox.checked) {
        debugCheckbox.parentElement.classList.add('active');
    }
    else {
        debugCheckbox.parentElement.classList.remove('active');
    }
});
let currentActive = 0;
const checkboxes = document.querySelectorAll('.grid input');
const autoShow = setInterval(() => {
    checkboxes[currentActive % 4].checked = !checkboxes[currentActive % 4].checked;
    if (!checkboxes[currentActive % 4].checked)
        currentActive += 1;
}, 1000);
document.querySelector('.grid').addEventListener('click', () => {
    clearInterval(autoShow);
});
