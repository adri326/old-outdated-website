window.addEventListener("scroll", onscroll);
function onscroll(event) {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var scrollraw = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  var scroll = scrollraw/(height-html.clientHeight);
  var bg = document.getElementById("bg");
  
  var modifier = 1;
  if (scrollraw<10) {
    bg.style.width = "100%";
    bg.style.height = "100%";
    bg.style.transform = "scale(1)";
  } else if (scrollraw<50) {
    bg.style.width = "66.666%";
    bg.style.height = "66.666%";
    bg.style.transform = "scale(1.5)";
    modifier = 1.5;
  } else if (scrollraw<100) {
    bg.style.width = "50%";
    bg.style.height = "50%";
    bg.style.transform = "scale(2)";
    modifier = 2;
  } else if (scrollraw<150) {
    bg.style.width = "25%";
    bg.style.height = "25%";
    bg.style.transform = "scale(4)";
    modifier = 4;
  } else {
    bg.style.width = "12.5%";
    bg.style.height = "12.5%";
    bg.style.transform = "scale(8)";
    modifier = 8;
  }
  bg.style.filter = "blur("+Math.min(scrollraw, 400)/200*6/modifier+"px)";
  var elems = document.getElementsByClassName("container");
  for (n=0; n<elems.length; n++) {
    elems[n].style.opacity = (Math.min(scrollraw, 300))/300;
  }
};
window.onload = onscroll;
