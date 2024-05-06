chrome.runtime.onConnect.addListener(function (port) {
  chrome.webRequest.onCompleted.addListener(
    function (details) {
      if (
        details.url ===
        "https://www.youtube.com/youtubei/v1/browse?prettyPrint=false"
      ) {
        chrome.tabs.query({ active: true, currentWindow: true }, function () {
          port.postMessage({ question: "run the script" });
        });
      }
    },
    { urls: ["https://www.youtube.com/youtubei/v1/browse?prettyPrint=false"] },
    []
  );
});
