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

let isDark = document.cookie.split(" ")[0];

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
    console.log("if");
    setLight();
    $(".fa-moon").fadeIn(200);
    $(".fa-sun-bright").fadeOut(200);
    isDark = "false";
  } else {
    setDark();
    console.log("el");
    $(".fa-sun-bright").fadeIn(200);
    $(".fa-moon").fadeOut(200);
    isDark = "true";
  }
  deleteAllCookies();
  document.cookie = isDark + " expires=Wed, 1 Jan 2070 13:47:11 UTC; path=/";
});

function deleteAllCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}
