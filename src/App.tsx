import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CLayout from 'components/layout/CLayout'
import CreateContactLayout from 'components/CreateContactForm'
import EditContactForm from 'components/EditContactForm'

function App() {
  return (
    <Router>
      <CLayout heading="Create contact">
        {/* <CreateContactLayout style={{ maxWidth: '486px' }} /> */}
        <EditContactForm style={{ maxWidth: '486px' }} />
      </CLayout>
    </Router>
  )
}

export default App
