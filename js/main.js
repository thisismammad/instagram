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

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (isDark) {
  setDark();
} else {
  setLight();
}
