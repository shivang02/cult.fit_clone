var menuTitle = document.getElementsByClassName("header-text-mweb");
var i;

for (i = 0; i < menuTitle.length; i++) {
    menuTitle[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "fit-content";
        }
    });
}