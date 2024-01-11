This directory contains the JavaScript files that work outside of the Vue app.

Placing them into the `public` directory allows them to be available to the Vue app. Just in case we need that.

`extension-worker.js` &mdash; background script for the extension
`content-app.js` &mdash; the script that will inject Vue app into the page.
