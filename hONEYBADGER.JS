# npm
npm add @honeybadger-io/js @honeybadger-io/react --save

# yarn
yarn add @honeybadger-io/js @honeybadger-io/react


import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import App from "./App"
import { Honeybadger, HoneybadgerErrorBoundary } from "@honeybadger-io/react"

const config = {
  apiKey: "hbp_7omdIoGUP6BGDMg5T4ZFXl39wEYGa04e6GEw",
  environment: "production"
}

const honeybadger = Honeybadger.configure(config)

ReactDOM.render(<HoneybadgerErrorBoundary honeybadger={honeybadger}><App /></HoneybadgerErrorBoundary>, document.getElementById("root"))

