window.addEventListener("scroll", function(event) {
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var scroll = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
});
