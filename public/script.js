const port = chrome.runtime.connect({ name: "run" });

const list = ["jacob", "jedcal", "marko"];

const hideCards = () => {
  setTimeout(() => {
    const contents = document.getElementById("contents");
    const content = contents.querySelectorAll("#content");
    content.forEach((item) => {
      if (
        !list.some((i) =>
          item
            .getElementsByTagName("ytd-channel-name")[0]
            .textContent.toLowerCase()
            .includes(i)
        )
      )
        item.remove();
    });
  }, 1000);
};

hideCards();

port.onMessage.addListener(() => hideCards());
