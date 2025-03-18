const fs = require("node:fs");

console.info(
  `Value of KIOSK_BROWSER_INJECT_CSS_FILES: ${process.env.KIOSK_BROWSER_INJECT_CSS_FILES}`,
);

const kioskBrowserInjectCssFiles =
  process.env.KIOSK_BROWSER_INJECT_CSS_FILES ?? "";
const injectedCssPaths = kioskBrowserInjectCssFiles.split(":");

function loadCssFile(p) {
  try {
    console.info(`Loading ${p}`);
    const contents = fs.readFileSync(p, "utf8");
    console.info(`Styles loaded from ${p}:\n${contents}`);
    return { success: true, contents };
  } catch (e) {
    console.error(`Loading ${p} failed`, e);
    return { success: false, error: e };
  }
}

function injectStyle(s) {
  const styleTag = document.createElement("style");
  styleTag.innerText = s;
  document.head.appendChild(styleTag);
}

async function ready() {
  // We have to inject the CSS as early as possible to avoid a brief moment in time
  // where the original page shown. `DOMContentLoaded` et. al. occur already too late.
  // Therefore, we uses the experimental View Transistion API to inject the CSS right
  // before the page is rendered for the first time.
  return new Promise((resolve, reject) =>
    window.addEventListener("pagereveal", resolve),
  );
}

async function injectCssFiles(...paths) {
  const styleFileLoadingResults = paths.map(loadCssFile);
  await ready();
  styleFileLoadingResults
    .filter((r) => r.success)
    .map(({ contents }) => contents)
    .forEach(injectStyle);
}

injectCssFiles(...injectedCssPaths);
