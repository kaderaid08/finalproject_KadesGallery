console.log("hello")
const openAnimation = document.querySelector("#openAnimation");
var flowerIcon = document.querySelector("#navICON");
// let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) 
//  (document.documentElement.scrollHeight - document.documentElement.clientHeight);


// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     flowerIcon.classList.add("animation1")
//     console.log("hiiii")
//     }
// }

// flowerIcon.style.position=`fixed`;
// flowerIcon.style.top=0;
// document.body.style.paddingTop=`100vh`;

// flowerIcon.animate({
// 	backgroundPosition: ["50% 100%", "50% 0%"],
// 	backgroundColor: ['transparent', '#5eff00'],
// 	height: ['500px', `200px`],
//     width:[`500px`, `200px`],
// },
// {
// 	fill: "both",
// 	timeline: new ScrollTimeline({
// 		source: document.documentElement,
// 	}),
// 	rangeStart: '0',
// 	rangeEnd: '50vh',
// });




//REDDIT TRIAL???//
// const div = document.querySelector(`div`);

// window.addEventListener(`scroll`, () => {
//     console.log(window.scrollX)
//     div.style.width = `${64 + windowscrollY}px`;
//     div.style.height = `${64 +windowscrollY}px`;
// });



// var defaultheight = parseInt( document.getElementById("openAnimation").offsetHeight);
// window.onscroll=function(){
//     var tdiv= this.document.getElementById(`openAnimation`);
//     tdiv.style.height = (defaultheight - document.documentElement.scrollTop) + "20px"
// }


// var divToChange = $('#openAnimation');
// var lastScroll=0
// $(document).scroll(function(event){
//     var st = $(this).scrollTop();
//     var divHeight = (`100vh`)-st;
//     divToChange.css({width:divWidth, height:divHeight});
// });


// window.scroll(function() {
//     var div = $('header'),
//         divHeight = div.outerHeight(),
//         st = window.scrollTop(),
//         scrollHeight = divHeight - st;

//   $('header').css({ 'height': scrollHeight });

//   if (divHeight == 0) {
//     $('header').css({ 'display': 'none' });
//   }
// });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("#openAnimation").style.height = "30px";
  // } else {
  //   document.getElementById("header").style.fontSize = "90px";
  // }
}}