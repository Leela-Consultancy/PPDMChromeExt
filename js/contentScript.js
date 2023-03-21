function extractLinks() {
    const links = document.querySelectorAll('a');
    const linkArray = Array.from(links).map(link => {
      if (link.href) {
        return link.href;
      } else if (link.hasAttribute('href')) {
        return link.getAttribute('href');
      }
      return null;
    }).filter(link => link !== null);
    return linkArray;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getLinks') {
      const links = extractLinks();
      sendResponse({ success: true, links });
    }
  });
  