import React, { memo } from 'react'
import { useRoutes } from "react-router-dom"
import routes from './router'
import Header from './components/Header'
import Footer from './components/Footer'

const App = memo(() => {
  return (
    <div className="app">
      <Header />
      <div className="page">
        {
          useRoutes(routes)
        }
      </div>
      <Footer />
    </div>
  )
})

export default App