// Minimal module to satisfy <script type="module" src="main.js">
// and stop the browser from fetching a non-existent file.

// This file intentionally avoids external imports so it works on any static host.

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio main.js loaded: module script OK.");

  if (window.Honeybadger) {
    // Ensure Honeybadger is configured (CDN tag sets apiKey/environment already).
    // You can customize more options here if needed.
    window.Honeybadger.configure({
      // apiKey provided via data-api-key on the script tag
      environment: document.currentScript?.dataset?.environment || "production"
    });

    // Expose simple helpers for manual verification from the console.
    window.hbNotify = () => {
      window.Honeybadger.notify("Manual Honeybadger test: notify() called");
      console.log("Honeybadger.notify() sent");
    };

    window.hbTestError = () => {
      // Throw an error to verify automatic capture of unhandled exceptions.
      throw new Error("Honeybadger test error (unhandled)");
    };

    console.log("Honeybadger initialized. Try hbNotify() or hbTestError().");
  } else {
    console.warn("Honeybadger not found. Check the CDN script tag in HTML.");
  }
});
