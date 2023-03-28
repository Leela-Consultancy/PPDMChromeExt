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
    const filteredUrls = linkArray.filter(url => {
      const pattern1 = /https:\/\/www\.google\.com\/search\?/i;
      const pattern2 = /https:\/\/support\.google\.com\//i;
      const pattern3 = /https:\/\/accounts\.google\.com\//i;
      const pattern4 = /https:\/\/maps\.google\.com\//i;
      const pattern5 = /https:\/\/myactivity\.google\.com\//i;
      const pattern6 = /https:\/\/policies\.google\.com\//i;
      const pattern7 = /https:\/\/www\.google\.com\//i;
      const pattern8 = /https:\/\/www\.google\.co\./i;

      return !pattern1.test(url) && !pattern2.test(url) && !pattern3.test(url) && !pattern4.test(url) && !pattern5.test(url) && !pattern6.test(url) && !pattern7.test(url) && !pattern8.test(url);
    });
    return filteredUrls;
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getLinks') {
      const links = extractLinks();
      console.log(links);
      sendResponse({ success: true, links });
    }
  });
  