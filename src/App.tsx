import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CLayout from 'components/layout/CLayout'

function App() {
  return (
    <Router>
      <CLayout>Content</CLayout>
    </Router>
  )
}

export default App
