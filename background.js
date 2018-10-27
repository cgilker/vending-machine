 chrome.runtime.onInstalled.addListener(function() {
   chrome.tabs.onActivated.addListener(function() {
     chrome.tabs.onHighlighted.addListener(function(){
       console.log("Switched tab");
     });
     console.log("Tab state changed");
     chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
       var tab = tabs[0].url;
       var sb = "";
       for(var i = tab.length - 1; i > 0; i--){
         if(tab.charAt(i - 4) == '.' && tab.charAt(i - 3) == 'c'
         && tab.charAt(i - 2) == 'o' && tab.charAt(i - 1) == 'm' && tab.charAt(i) == '/'){
           for(var j = 0; j <= i; j++){
             sb = sb + tab.charAt(j);
           }
         }
       }
       console.log(sb);
     });
   });
 });
