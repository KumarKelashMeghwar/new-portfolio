let btn = document.getElementById("topButton");

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

    if (scroll_position > 250) {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }

});