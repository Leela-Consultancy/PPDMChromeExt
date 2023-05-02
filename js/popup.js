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
                description = fetchData(a.href);
                console.log(description);
                // desc = description.htmlInferred['description']
                // a.textContent = link+"-"+desc;
                a.textContent = link;

                a.target = '_blank';
                li.appendChild(a);
                ul.appendChild(li);
                // console.log(a.href);
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

function fetchData(link) {

const url = link;

fetch(url)
  .then(response => response.text())
  .then(html => {
    // Parse the HTML content using a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const descriptionMeta = doc.querySelector("meta[name='description']");
    const description = descriptionMeta ? descriptionMeta.getAttribute("content") : "";
    console.log(description);
    const cookies = document.cookie;
    console.log(cookies);
    const securityPolicy = document.securityPolicy;
    console.log(securityPolicy);
  })
  .catch(error => {
    console.error(error);
  });



}

// fetchData();

