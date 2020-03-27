var btn = document.querySelector("button");
var isToggled = false;
cssVars({
  onlyLegacy: true,
  watch: true
});

btn.addEventListener("click", function() {
  document.documentElement.style.setProperty(
    "--gradient",
    isToggled ? "blue" : "red"
  );
  document.documentElement.style.setProperty(
    "--stroke",
    isToggled ? "blue" : "red"
  );
  isToggled = !isToggled;
});
