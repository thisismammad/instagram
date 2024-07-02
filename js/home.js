let owl = $(".owl-carousel").owlCarousel({
  loop: false,
  rtl: false,
  margin: 0,
  dots: false,
  nav: false,
  center: false,
});

owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});


const readMore = document.querySelector("main .posts-container .post-item .post-footer .discription >span");


readMore.addEventListener("click", ()=>{
  const p = document.querySelector("main .posts-container .post-item .post-footer .discription > p");
  p.style.height = "auto";
  readMore.style.display = "none"
})