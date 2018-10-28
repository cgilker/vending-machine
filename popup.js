/*
var windows = chrome.extension.getViews({type : "popup"});
if(windows) {
  var popup = windows[0];
  */
  var min = popup.document.getElementById("minutes");
  var sec = popup.document.getElementById("seconds");
  assignTime(sec,min);
//}
