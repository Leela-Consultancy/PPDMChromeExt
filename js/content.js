// chrome.runtime.onMessage.addListener(
//   console.log(sendResponse)
//   function(request, sender, sendResponse) {
//     console.log(sendResponse);
//     if (request.greeting === "fetchData") {
//       sendResponse(document.querySelectorAll(".class"));
//     }
//   }
// );

chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        if (request.message === "copyText")
            sendResponse(document.querySelectorAll(".class"));
    }
);