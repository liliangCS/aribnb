import React, {Suspense} from "react"
import ReactDOM from "react-dom/client"
import {HashRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import {ThemeProvider} from "styled-components"
import theme from "./assets/theme"
// 样式引入
import "normalize.css"
import "@/assets/css/index.less"

import App from "@/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
)
