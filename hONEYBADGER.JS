// Honeybadger Configuration
const HoneybadgerConfig = {
  apiKey: "hbp_7omdIoGUP6BGDMg5T4ZFXl39wEYGa04e6GEw",
  environment: "production"
}

// Initialize Honeybadger
window.honeybadger = {
  notify: function(message, options = {}) {
    const payload = {
      error: {
        message: message,
        ...options
      }
    }
    
    // Send to Honeybadger API
    fetch("https://api.honeybadger.io/v1/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: HoneybadgerConfig.apiKey,
        notice: payload
      })
    }).catch(err => console.error("Honeybadger error:", err))
    
    console.log("Honeybadger notification sent:", message)
  }
}

// Test notification
window.honeybadger.notify("Testing Honeybadger!")

