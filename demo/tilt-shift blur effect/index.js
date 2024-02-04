"use strict";
console.clear();

var root = document.querySelector(":root");
function pointer(e) {
  root.style.setProperty("--y", e.pageY + "px");
}
window.addEventListener("pointermove", pointer);
window.addEventListener("pointerdown", pointer);
