// const createDate = {
//   url: "fetchsites.html",
//   type: "popup",
//   width: 800,
//   height: 600
// };
// chrome.windows.create(createDate);
// chrome.tabs.getCurrent((tab) => {
chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
  console.log(tabs[0]['id']);
  chrome.tabs.sendMessage(tabs[0]['id'], {message: "report"}, function(response) {
    console.log(response);
  });
//     let url = tabs[0].url;
//     document.getElementById("label").innerHTML = url;
//     // Do something with url
//     document.getElementById("captuer").onclick = () => {
//       window.addEventListener("DOMContentLoaded", e =>
// {
//   test = document.querySelectorAll('a[href]');
//   console.log('test');
// });

      // const sources = ["screen", "window", "tab"];
        // var arr = [], l = document.links();
      // var urls = document.getElementsByTagName('a');


  // for (url in urls) {

  //   // console.log ( urls);
  //   console.log ( urls[url].href );

  // }
        // console.log(2);
      // for(var i=0; i<l.length; i++) {
      //   arr.push(l[i].href);
      // }
      // console.log(arr);
      //   chrome.desktopCapture.chooseDesktopMedia(sources, tab, (streamId) => {
      //     let track, canvas;
      //     navigator.mediaDevices.getUserMedia({
      //       video: {
      //         mandatory: {
      //           chromeMediaSource: "desktop",
      //           chromeMediaSourceId: streamId
      //         },
      //       }
      //     }).then((stream) => {
      //       track = stream.getVideoTracks()[0];
      //       const imageCapture = new ImageCapture(track);
      //       return imageCapture.grabFrame();
      //     }).then((bitmap) => {
      //       track.stop();
      //       canvas = document.createElement("canvas");
      //       canvas.width = bitmap.width;
      //       canvas.height = bitmap.height;
      //       let context = canvas.getContext("2d");
      //       context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
      //       return canvas.toDataURL();
      //     }).then((url) => {
      //       chrome.downloads.download({
      //         filename: "screenshot.png",
      //         url: url,
      //       }, () => {
      //         canvas.remove();
      //       });
      //     }).catch((err) => {
      //       console.log(err);
      //       alert("Could not take screenshot");
      //     })
      //   });
      // });
    // }
});
// });
