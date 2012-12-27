

var craigslistPattern = /craigslist\.org\/.*\/[0-9]+\.html/;

function checkForValidUrl(tabId, changeInfo, tab) {

  if (craigslistPattern.test(tab.url)) {
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);