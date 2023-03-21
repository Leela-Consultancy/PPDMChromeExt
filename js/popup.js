document.addEventListener('DOMContentLoaded', async () => {
  const linksDiv = document.getElementById('links');
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ['js/contentScript.js']
      },
      () => {
        if (chrome.runtime.lastError) {
          linksDiv.textContent = 'Error: ' + chrome.runtime.lastError.message;
        } else {
          chrome.tabs.sendMessage(tab.id, { message: 'getLinks' }, (response) => {
            if (chrome.runtime.lastError) {
              linksDiv.textContent = 'Error: ' + chrome.runtime.lastError.message;
            } else if (response && response.success) {
              const ul = document.createElement('ul');
              response.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link;
                a.textContent = link;
                a.target = '_blank';
                li.appendChild(a);
                ul.appendChild(li);
              });
              linksDiv.appendChild(ul);
            } else if (response && !response.success) {
              linksDiv.textContent = 'Error: ' + response.error;
            } else {
              linksDiv.textContent = 'Error: Response is undefined';
            }
          });
        }
      }
    );

  } catch (error) {
    linksDiv.textContent = 'Error: ' + error.message;
  }
});
