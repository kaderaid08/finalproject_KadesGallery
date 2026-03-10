console.log("hello")
const openAnimation = document.querySelector("#openAnimation");
var flowerIcon = document.querySelector("#navICON");
// let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) 
//  (document.documentElement.scrollHeight - document.documentElement.clientHeight);


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    flowerIcon.style.width = "200px";
    flowerIcon.style.height = "200px";
    console.log("hiiii")
    }
}