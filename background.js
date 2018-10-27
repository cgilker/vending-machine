 chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
	 chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
<<<<<<< HEAD
      }]);//This is a comment//aaa
    });
=======
      }]);//This is a comment//
    });//Here is another comment
>>>>>>> e2cd920e1a01e043dc81124c411423e243f28b70
 });
