var oldscroll = 0;
window.addEventListener("scroll", onscroll);
function onscroll(event) {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var scrollraw = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  var scroll = scrollraw/(height-html.clientHeight);
  if (scrollraw<210&&oldscroll<210&&false) {
    var bg = document.getElementById("bg");
    var modifier = 1;
    if (scrollraw<10) {
      bg.style.width = "100%";
      bg.style.height = "100%";
      bg.style.transform = "scale(1)";
    } else if (oldscroll<100) {
      bg.style.width = "50%";
      bg.style.height = "50%";
      bg.style.transform = "scale(2)";
      modifier = 2;
    }
    bg.style.filter = "blur("+Math.min(scrollraw, 200)/100*2/modifier+"px)";
  }
  if (scrollraw<310||oldscroll<310)
  var elems = document.getElementsByClassName("container");
  for (n=0; n<elems.length; n++) {
    elems[n].style.opacity = (Math.min(scrollraw, 300))/300;
  }
  oldscroll = scrollraw;
};
window.onload = onscroll;
