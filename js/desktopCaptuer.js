// chrome.windows.getCurrent({}, w => {
//   chrome.windows.update(w.id, { focused: true }, () => {
//     document.getElementById("captuer").onclick = () => {

//       // const sources = ["screen", "window", "tab"];
//         var arr = [], l = document.links;
//         console.log(2);
//         console.log(l);
//       for(var i=0; i<l.length; i++) {
//         arr.push(l[i].href);
//       }
//       console.log(arr);
//       //   chrome.desktopCapture.chooseDesktopMedia(sources, tab, (streamId) => {
//       //     let track, canvas;
//       //     navigator.mediaDevices.getUserMedia({
//       //       video: {
//       //         mandatory: {
//       //           chromeMediaSource: "desktop",
//       //           chromeMediaSourceId: streamId
//       //         },
//       //       }
//       //     }).then((stream) => {
//       //       track = stream.getVideoTracks()[0];
//       //       const imageCapture = new ImageCapture(track);
//       //       return imageCapture.grabFrame();
//       //     }).then((bitmap) => {
//       //       track.stop();
//       //       canvas = document.createElement("canvas");
//       //       canvas.width = bitmap.width;
//       //       canvas.height = bitmap.height;
//       //       let context = canvas.getContext("2d");
//       //       context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
//       //       return canvas.toDataURL();
//       //     }).then((url) => {
//       //       chrome.downloads.download({
//       //         filename: "screenshot.png",
//       //         url: url,
//       //       }, () => {
//       //         canvas.remove();
//       //       });
//       //     }).catch((err) => {
//       //       console.log(err);
//       //       alert("Could not take screenshot");
//       //     })
//       //   });
//       // });
//     }
//   });
// });
// chrome.action.onClicked.addListener(function(info, tab) {
//     var urls = document.getElementsByTagName('a');

//     for (url in urls) {
//         // console.log ( urls[url].href );
//     }     
    
// });
// // console.log(1);
// chrome.windows.getCurrent({}, w => {
//   // chrome.windows.update(w.id, { focused: true }, () => {
//    var arr = [], l = document.links;
// for(var i=0; i<l.length; i++) {
//   arr.push(l[i].href);
// }
// // console.log(arr);
//     for (var i = 0; i < arr.length; i++) {
//       var link = arr[i].getAttribute("href");
//       // console.log(link);
//     }
   
//   // });
// });
console.log(1);
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
 if (request.action == "report")
   sendResponse({dom: "The dom that you want to get"});
 else
   sendResponse({}); // Send nothing..
});