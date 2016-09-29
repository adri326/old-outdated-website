var frame = 1, maxframe = 6;
function nextPage() {
  var iframes = document.getElementsByClassName("iframe");
  unactframe();
  frame = Math.min(frame + 1, maxframe);
  actFrame(iframes);
}
function previousPage() {
  var iframes = document.getElementsByClassName("iframe");
  unactframe();
  frame = Math.max(frame - 1, 1);
  actFrame(iframes);
}
function goPage(n) {
  var iframes = document.getElementsByClassName("iframe");
  unactframe();
  frame = Math.min(n, maxframe);
  actFrame(iframes);
}
function actFrame(iframes) {
  for (var i = 0; i < iframes.length; i++) {
    if (i==frame-1) {
      iframes[i].id = "shown";
    } else if (iframes[i].id != "unshown") {
      iframes[i].id = "";
    }
  }
}
function unactframe() {
  var unshown = document.getElementById("unshown");
  var shown = document.getElementById("shown");
  if (unshown!=null) {
    unshown.id = "";
  }
  if (shown!=null) {
    shown.id = "unshown";
  }
}
