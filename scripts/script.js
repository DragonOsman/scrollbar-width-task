"use strict";
function calculateScrollbarWidth(elem) {
  const originaBorderStyle = elem.style.border;
  elem.style.border = "none";
  const contentWidth = elem.offsetWidth - elem.clientWidth;
  elem.style.border = originaBorderStyle;

  return contentWidth;
}

const containerElem = document.getElementById("container-elem");
const displayingPara = document.createElement("p");
displayingPara.textContent = `${calculateScrollbarWidth(containerElem)}`;
containerElem.insertAdjacentElement("afterend", displayingPara);
