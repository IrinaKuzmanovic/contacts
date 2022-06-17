import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from 'store'
import CItem from '../CItem'
import './style.scss'

const CMenu: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const contactsCount = useSelector(
    (state: RootState) => state.contacts.contacts.length
  )

  const favouriteCount = useSelector(
    (state: RootState) =>
      state.contacts.contacts.filter((contact) => contact.favourite).length
  )

  const items = [
    {
      text: 'Contacts',
      count: contactsCount,
      selected: location.pathname === '/' ? true : false
    },
    {
      text: 'Favourites',
      count: favouriteCount,
      selected: location.pathname === '/favourites' ? true : false
    }
  ]

  const handleNavigationClick = (item: string) => {
    switch (item) {
      case 'Contacts':
        navigate('/')
        break
      case 'Favourites':
        navigate('/favourites')
        break
    }
  }

  return (
    <div className="c-menu">
      {items.map((item) => (
        <CItem
          count={item.count}
          selected={item.selected}
          text={item.text}
          onClick={() => handleNavigationClick(item.text)}
        />
      ))}
    </div>
  )
}

export default CMenu
