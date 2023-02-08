function run(gleanUrl, path) {
  const docUrl = gleanUrl + "/dist/embed/embedDocs.html?" + path;
  const iframe = document.createElement("iframe");
  iframe.className = "glean-docs";
  iframe.src = docUrl;
  iframe.scrolling = "no";
  document.currentScript.after(iframe);

  window.addEventListener("message", (event) => {
    if (event.origin !== gleanUrl)
      return console.warn("Untrusted event", event);
    if (event.data?.type !== "gleanPublicEvent") return;

    switch (event.data.name) {
      case "contentSize": {
        const size = event.data.size;
        iframe.style.height = `${size.height + 50}px`;
        break;
      }
      case "scrollRequest": {
        const offset = event.data.offset;
        offset.top = offset.top
          ? offset.top + iframe.getBoundingClientRect().top - 96
          : undefined;
        window.scrollTo({ ...offset, behavior: "smooth" });
        break;
      }
      default: {
        console.log("Unknown Glean event: ", event.data.name);
        break;
      }
    }
  });

  iframe.onload = () => {
    const myStylesheets = document.head.querySelectorAll(
      'link[rel="stylesheet"]'
    );
    const stylesheetPaths = Array.from(myStylesheets).map((s) => s.href);
    iframe.contentWindow.postMessage(
      {
        type: "gleanPublicEvent",
        name: "parentStylesheets",
        urls: stylesheetPaths,
      },
      "*" // this event is fine to emit to all websites, it is a public URL
    );
  };
}
