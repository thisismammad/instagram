 $(".owl-carousel").owlCarousel({
  loop: false,
  rtl: false,
  margin: 0,
  dots: false,
  nav: false,
  center: false,
  responsive:{
    0:{
        items:3
    },
    425:{
        items:4
    }
}
});


const readMore = document.querySelector("main .posts-container .post-item .post-footer .discription >span");


readMore.addEventListener("click", ()=>{
  const p = document.querySelector("main .posts-container .post-item .post-footer .discription > p");
  p.style.height = "auto";
  readMore.style.display = "none"
})