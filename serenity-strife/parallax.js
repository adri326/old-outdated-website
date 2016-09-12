window.addEventListener("scroll", onscroll);
function onscroll(event) {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var scrollraw = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  var scroll = scrollraw/(height-html.clientHeight);
  var bg = document.getElementById("bg");
  bg.style.filter = "blur("+Math.min(scrollraw, 400)/200*6+"px)";
  bg.style.transform = "scale("+(Math.min(scrollraw, 400)/6400+1)+")";
  var elems = document.getElementsByClassName("container");
  for (n=0; n<elems.length; n++) {
    elems[n].style.opacity = (Math.min(scrollraw, 300))/300;
  }
};
window.onload = onscroll;
