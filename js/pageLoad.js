function handlePageLoaded() {
  let LoadingTime = 0;
  let endTime = new Date().getTime();
  LoadingTime = endTime - performance.timing.navigationStart;
  document.querySelector(".footer__load").innerHTML = `Page load time is ${LoadingTime} ms`
}

window.addEventListener("DOMContentLoaded", handlePageLoaded);