import "./style.css";
import "./desktop.css";


// Header collapse
var coll = document.getElementsByClassName("collapsible");
const circles = document.querySelector(".block-background-circles");
// const top = circles.style.top;
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // img.src = 'svg/cross.svg'
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      circles.style.top = 77 + "px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      circles.style.top = 286 + "px";
    }
  });
}