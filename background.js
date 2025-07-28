const enable = (tab) =>
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["enable.js"]
  });

chrome.action.onClicked.addListener(enable);
