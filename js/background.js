chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "fetch_links") {
    chrome.scripting.executeScript({
      target: {tabId: sender.tab.id},
      func: () => {
        const links = [];
        document.querySelectorAll("a").forEach(link => {
          links.push(link.href);
        });
        return links;
      }
    }, (results) => {
      console.log(results[0]);
    });
  }
});
