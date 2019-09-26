// Open slide menu
document.getElementById('openSlideMenu').addEventListener("click",function () {
  document.getElementById("side-menu").style.width = '250px';
});

// Close slide menu
document.getElementById('closeSlideMenu').addEventListener("click", function() {
  document.getElementById("side-menu").style.width = '0px';
});