const port = chrome.runtime.connect({ name: "run" });

port.onMessage.addListener(function () {
  const contents = document.getElementById("contents");
  const content = contents.querySelectorAll("#content");
  content.forEach((item) => {
    const list = ["jacob", "jedcal", "marko"];
    if (
      !list.some((i) =>
        item
          .getElementsByTagName("ytd-channel-name")[0]
          .textContent.toLowerCase()
          .includes(i)
      )
    )
      item.setAttribute("style", "filter: blur(10px);");
  });
});

const contents = document.getElementById("contents");
const content = contents.querySelectorAll("#content");
content.forEach((item) => {
  const list = ["jacob", "jedcal", "marko"];
  if (
    !list.some((i) =>
      item
        .getElementsByTagName("ytd-channel-name")[0]
        .textContent.toLowerCase()
        .includes(i)
    )
  )
    item.setAttribute("style", "filter: blur(10px);");
});
