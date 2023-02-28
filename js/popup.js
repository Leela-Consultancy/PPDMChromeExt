document.getElementById("fetch-links").addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs);
    if (chrome.runtime.lastError) {
      onComplete({error: chrome.runtime.lastError});
    }else{
      chrome.tabs.sendMessage(tabs[0].id, {message: "fetch_links"});
      console.log(chrome.tabs.sendMessage(tabs[0].id, {message: "fetch_links"}));
    }
  });
});
