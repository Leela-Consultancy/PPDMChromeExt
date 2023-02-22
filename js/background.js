chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 if (request.action == "report")
   sendResponse({dom: "The dom that you want to get"});
 else
   sendResponse({}); // Send nothing..
});