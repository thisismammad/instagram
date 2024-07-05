$(".owl-carousel").owlCarousel({
  loop: false,
  rtl: false,
  margin: 0,
  dots: false,
  nav: false,
  center: false,
  responsive: {
    0: {
      items: 3,
    },
    380: {
      items: 4,
    },
  },
});


$(".read-more").on("click", function () {
  $(this).parent().find("p").css("height", "auto");
  $(this).css("display", "none");
});
