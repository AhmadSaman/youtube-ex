chrome.runtime.onConnect.addListener((port) => {
  chrome.webRequest.onCompleted.addListener(
    () => {
      chrome.tabs.query({ active: true, currentWindow: true }, function () {
        port.postMessage({ question: "run the script" });
      });
    },
    { urls: ["https://www.youtube.com/youtubei/v1/browse?prettyPrint=false"] },
    []
  );
});
