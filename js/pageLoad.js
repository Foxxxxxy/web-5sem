window.addEventListener("DOMContentLoaded", function() {
  let LoadingTime = 0;
  let endTime = new Date().getTime();
  LoadingTime = endTime - performance.timing.navigationStart;
  document.getElementById("load_time").innerHTML = `Page load time is ${LoadingTime} ms`
});