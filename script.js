console.log("hello")
const openAnimation = document.querySelector("#openAnimation");
let flowerIcon = document.querySelector("#navICON");
// let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) 
//  (document.documentElement.scrollHeight - document.documentElement.clientHeight);


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
        console.log("hiii")
    }
}