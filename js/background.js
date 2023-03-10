chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "fetch_links") {
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      func: () => {
        const links = [];
        document.querySelectorAll("a").forEach(link => {
          if(link){
            links.push(link.href);
            console.log(links);
            return links;
          }
        });
      }
    }, (results) => {
      console.log(results[0]);
    });
  }
});
chrome.runtime.onInstalled.addListener(async () => {
  for (const cs of chrome.runtime.getManifest().content_scripts) {
    for (const tab of await chrome.tabs.query({url: cs.matches})) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: cs.js,
      });
    }
  }
});
