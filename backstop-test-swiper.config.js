module.exports = {
  "id": "drink2go swiper",
  "viewports": [
    {
      "label": "desktop",
      "width": 1440,
      "height": 800,
    },
  ],
  "resembleOutputOptions": {
    "ignoreAntialiasing": true,
    "usePreciseMatching": false
  },
  "onReadyScript": "onReady.js",
  "scenarios": [
    {
      "label": "index JS-1. next",
      "url": "http://localhost:3000/",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 2,
      requireSameDimension: false,
      clickSelectors: ['.swiper-button-next'],
      postInteractionWait: 500,
      selectors: [`[data-test="hero"]`],
    },
    {
      "label": "index JS-1. prev",
      "url": "http://localhost:3000/",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 2,
      requireSameDimension: false,
      clickSelectors: ['.swiper-button-next', '.swiper-button-prev'],
      postInteractionWait: 500,
      selectors: [`[data-test="hero"]`],
    },
    {
      "label": "index JS-1. bullet",
      "url": "http://localhost:3000/",
      "referenceUrl": "./reference/index.html",
      misMatchThreshold: 2,
      requireSameDimension: false,
      clickSelectors: ['.swiper-pagination > *:nth-child(3)'],
      postInteractionWait: 500,
      selectors: [`[data-test="hero"]`],
    },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference/test-swiper",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "engine_scripts",
    "html_report": "backstop_data/html_report",
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"],
    "gotoParameters": { "waitUntil": ["load", "networkidle0"], timeout: 10000 },
  },
  "asyncCaptureLimit": 0,
  "debug": false,
  "debugWindow": false
}
