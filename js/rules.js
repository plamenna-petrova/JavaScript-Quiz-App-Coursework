
var accordionButtons = document.getElementsByClassName("accordion");

for (var i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.borderBottom = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.borderBottom = "thick solid #e67300";
        }
    });
}


