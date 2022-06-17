import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import CLayout from 'components/layout/CLayout'
import CreateContactForm from 'components/CreateContactForm'
import EditContactForm from 'components/EditContactForm'
import Contacts from 'components/Contacts'
import Favourites from 'components/Favourites'
import { Contact } from 'shared/tableColumns'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const App = () => {
  const location = useLocation()
  const [heading, setHeading] = useState<string>('')

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeading('Contacts')
        break
      case '/favourites':
        setHeading('Favourites')
        break
      case '/create-contact':
        setHeading('Create contact')
        break
      case '/edit-contact':
        setHeading('Edit contact')
        break
    }
  }, [location])

  return (
    <CLayout heading={heading}>
      <Routes>
        <Route path="/favourites" element={<Favourites />} />
        <Route
          path="/create-contact"
          element={<CreateContactForm style={{ maxWidth: '486px' }} />}
        />
        <Route
          path="/edit-contact/:id"
          element={<EditContactForm style={{ maxWidth: '486px' }} />}
        />
        <Route path="/" element={<Contacts />} />
      </Routes>
    </CLayout>
  )
}

export default App
