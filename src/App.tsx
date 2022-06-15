import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CLayout from 'components/layout/CLayout'
import CreateContactLayout from 'components/CreateContactForm'

function App() {
  return (
    <Router>
      <CLayout heading="Create contact">
        <CreateContactLayout style={{ maxWidth: '486px' }} />
      </CLayout>
    </Router>
  )
}

export default App
