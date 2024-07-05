$(".fa-arrow-left-long").on("click", function () {
  $("aside").css("right", "-120%");
  $("aside .head").css("right", "-120%");
  $("body").css("overflow", "auto");
});
$(".fa-bars").on("click", function () {
  $("aside").css("right", "0");
  $("aside .head").css("right", "0");
  $("body").css("overflow", "hidden");
});

let isDark = localStorage.getItem("isDark");

if (isDark === "true") {
  setDark();
  $(".fa-sun-bright").fadeIn(200);
  $(".fa-moon").fadeOut(200);
} else {
  setLight();
  $(".fa-moon").fadeIn(200);
  $(".fa-sun-bright").fadeOut(200);
}

$(".dark-light").on("click", function () {
  if (isDark === "true") {
    setLight();
    $(".fa-moon").fadeIn(200);
    $(".fa-sun-bright").fadeOut(200);
    isDark = "false";
  } else {
    setDark();
    $(".fa-sun-bright").fadeIn(200);
    $(".fa-moon").fadeOut(200);
    isDark = "true";
  }
  localStorage.setItem("isDark", isDark);
});
