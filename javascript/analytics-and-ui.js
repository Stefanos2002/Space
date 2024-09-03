//Initialise google analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-KY2RKB8W8M");



//Detects if the browser is Internet Explorer (IE) and displays a warning message if it is.
function isIE() {
    // IE 10 and IE 11
    return /Trident\/|MSIE/.test(window.navigator.userAgent);
  }
  let showBrowserAlert = function () {
    if (document.querySelector(".unsupported-browser")) {
      let d = document.getElementsByClassName("unsupported-browser");
      is_IE = isIE();
      if (is_IE) {
        d[0].innerHTML =
          "<b>Unsupported Browser!</b> This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.";
        d[0].style.display = "block";
      }
    }
  };
  document.addEventListener("DOMContentLoaded", showBrowserAlert);