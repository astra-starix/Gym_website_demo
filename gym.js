let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('actve');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('actve');
};
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: "true",
    loop:"true",
    centeredSlides: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // let slide = document.querySelectorAll(".slide");
  // let prev = document.getElementById("prev");
  // let next = document.getElementById("next");

  // console.log(slide);
  // let cnt = 0;
  // next.addEventListener("click", function(){
  //   cnt++;
  //   if(cnt == slide.length - 2)
  //   {
  //     cnt = 0;
  //   }
  //   myFun();
  // })
  // prev.addEventListener("click", function(){
  //   cnt--;
  //   if(cnt == -1)
  //   {
  //     cnt = slide.length - 2;
  //   }
  //   myFun();
  // })
  // function myFun(){
  //   slide.forEach(function(currImg){
  //     currImg.style.transform = `translateX(-${cnt * 114}%)`
  //   })
  // }

  // var swiper = new Swiper(".review-slider", {
  //   spaceBetween: 20,
  //   grabCursor: "true",
  //   loop:"true",
  //   autoplay: {
  //       delay: 7500,
  //       disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     0:{
  //       slidesPerView:1,
  //     },
  //     600:{
  //       slidesPerView:2
  //     }
  //   }
  // });
  // var swiper = new Swiper(".blogs-slider", {
  //   spaceBetween: 20,
  //   grabCursor: "true",
  //   loop:"true",
  //   autoplay: {
  //       delay: 7500,
  //       disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     0:{
  //       slidesPerView:1,
  //     },
  //     600:{
  //       slidesPerView:2
  //     }
  //   }
  // });