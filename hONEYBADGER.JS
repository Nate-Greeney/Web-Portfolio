// Import Honeybadger browser library
import Honeybadger from 'https://cdn.jsdelivr.net/npm/@honeybadger-io/js@6/dist/browser/honeybadger.min.js'

// Configure Honeybadger
const honeybadger = Honeybadger.configure({
  apiKey: "hbp_7omdIoGUP6BGDMg5T4ZFXl39wEYGa04e6GEw",
  environment: "production"
})

// Make it globally accessible
window.honeybadger = honeybadger

// Test notification
honeybadger.notify("Testing Honeybadger from browser!")

console.log("Honeybadger initialized successfully")

