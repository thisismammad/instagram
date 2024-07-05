
const root = document.querySelector(":root");

function setDark() {
    root.style.setProperty("--bg-color", "rgb(34,34,34)");
    root.style.setProperty("--font-color", "rgb(230,230,230)");
    root.style.setProperty("--input-color", "#363636");
  }
  function setLight() {
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--font-color", "rgb(34, 34, 34)");
    root.style.setProperty("--input-color", "#eee");
  }
  let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  
  $(".dark-light").on("click",function(){
    if (isDark) {
        setLight();
        $(".fa-moon").fadeIn(200);
        $(".fa-sun-bright").fadeOut(200);
        isDark = false;
      } else {
        setDark();
        $(".fa-sun-bright").fadeIn(200);
        $(".fa-moon").fadeOut(200);
        isDark = true;
      }
  })
  
  
  if (isDark) {
    setDark();
    $(".fa-sun-bright").fadeIn(200);
    $(".fa-moon").fadeOut(200);
  } else {
    setLight();
    $(".fa-moon").fadeIn(200);
    $(".fa-sun-bright").fadeOut(200);
  }