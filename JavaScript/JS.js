window.onscroll = () => {
    if (window.scrollY >= 490) {
        document.getElementById("sticky").style.position = "fixed";
        document.getElementById("sticky").style.top = 0;
        document.getElementById("sticky").style.width = "100%";
        document.getElementById("sticky").style.zIndex = "8";
        document.getElementById("add").innerHTML = "Contact Us";
        document.getElementById("add").style.fontSize = "15px";
        document.getElementById("add").style.backgroundColor = "rgb(255, 60, 0)";
        document.getElementById("add").style.color = "white";
        document.getElementById("add").style.padding = "10px";
        document.getElementById("add").style.border = "1px rgb(255, 60, 0) solid";
        document.getElementById("add").style.borderRadius = "25px";
        document.getElementById("add").style.textAlign = "center";
        document.getElementById("add").style.width = "90px";
        document.getElementById("add").style.marginTop = "-10px";
        document.getElementById("add").style.marginLeft = "-10px";
        document.getElementById("add").style.fontFamily = "Arial";
        document.getElementById("add").style.display = "block";
        document.getElementById("sticky").style.animation = "menu_bar_sticky 1s";
    } else {
        document.getElementById("sticky").style.position = "relative";
        document.getElementById("add").style.display = "none";
        document.getElementById("sticky").style.animation = "none";
    }
}