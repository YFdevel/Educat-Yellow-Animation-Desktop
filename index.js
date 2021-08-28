let block = document.querySelector(".videos-block-main");
let elems = document.querySelectorAll('.videos-block-item');
let pos = 0;

function myAnimation() {
    pos++;

    for (let elem of elems) {

        elem.style.right = pos + 'px';

        if (Math.abs(pos) === block.clientWidth - 50) {
            pos = 0;
        }

    }

    requestAnimationFrame(myAnimation);
}

myAnimation();


let yellowLogoParagraphBlock = document.getElementById('yellow-logo-paragraph-block');
let projectFoto = document.getElementById('project-foto');
let projectText = document.getElementById('project-text-block');


window.addEventListener("scroll", function () {

    if (window.pageYOffset >= 40 && window.pageYOffset < 220) {
        yellowLogoParagraphBlock.style.position = "sticky";
        yellowLogoParagraphBlock.style.top = 45 + "%";
    }


    if (window.pageYOffset >= 844 && window.pageYOffset < 1160) {
        projectFoto.style.position = "sticky";
        projectText.float = "right";
        projectText.style.overflowY = "auto";
        projectText.style.top = 60 + "px";
    }


})