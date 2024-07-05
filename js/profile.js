
$(".fa-arrow-left-long").on("click", function () {
    $("aside").css("right", "-120%");
    $("aside .head").css("right", "-120%");
    $("body").css("overflow","auto")
});
$(".fa-bars").on("click", function () {
    $("aside").css("right", "0");
    $("aside .head").css("right", "0");
    $("body").css("overflow","hidden")

});
