console.log("hello")
// const openAnimation = document.querySelector("#openAnimation");
// var flowerIcon = document.querySelector("#navICON");
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


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("openAnimation").style.height = "30px";
//   // } else {
//   //   document.getElementById("header").style.fontSize = "90px";
//   // }
// }}


// MIGHT ACTUALLY WORK//

// const navImg = document.getElementById(`navICON`);

// const final_width = 50;
// const final_height = 50;
// const final_top = 20;
// const final_left = 20;

// function lerp(start, end, t){
//   return start + (end - start) * t;
// }

// function onScroll() {
//   const scrollY = window.scrollY;
//   const maxScroll = window.innerHeight;
//   const t = Math.min(scrollY/maxScroll, 1);
//   const vw = window.innerWidth;
//   const vh = window.innerHeight;


//   const currentWidth = lerp(vw, final_width, t);
//   const currentHeight = lerp(vh, final_height, t);


//   const currentTop = lerp (0, final_top, t);
//   const currentLeft = lerp (vh, final_height, t);


//   navImg.style.width = currentWidth + `px`;
//   navImg.style.height = currentHeight + `px`;
//   navImg.style.top = currentTop + `px`;
//   navImg.style.left = currentLeft + `px`;
// }




    const navImg = document.getElementById('#navIMG');

    // Final size and position of the thumbnail in the corner
    const FINAL_WIDTH  = 50;  // px — adjust to taste
    const FINAL_HEIGHT = 50;  // px
    const FINAL_TOP    = 20;   // px from top
    const FINAL_LEFT   = 20;   // px from left

    function lerp(start, end, t) {
      return start + (end - start) * t;
    }

    function onScroll() {
      const scrollY   = window.scrollY;
      const maxScroll = window.innerHeight; // 
      const t = Math.min(scrollY / maxScroll, 1); 
      const vw = window.innerWidth;
      const vh = window.innerHeight;

   
      const currentWidth  = lerp(vw, FINAL_WIDTH,  t);
      const currentHeight = lerp(vh, FINAL_HEIGHT, t);

      
      const currentTop  = lerp(0, FINAL_TOP,  t);
      const currentLeft = lerp(0, FINAL_LEFT, t);

      navImg.style.width  = currentWidth  + 'px';
      navImg.style.height = currentHeight + 'px';
      navImg.style.top    = currentTop    + 'px';
      navImg.style.left   = currentLeft   + 'px';

      // Optional: add a subtle border-radius as it shrinks
      navImg.style.borderRadius = lerp(0, 12, t) + 'px';

      // Optional: add a box shadow as it becomes a thumbnail
      // const shadowOpacity = t * 0.5;
      navImg.style.boxShadow = `0 ${t * 20}px ${t * 40}px rgba(0,0,0,${shadowOpacity})`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load