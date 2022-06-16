import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CItem from '../CItem'
import './style.scss'

const CMenu: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const items = [
    {
      text: 'Contacts',
      count: 6,
      selected: location.pathname === '/' ? true : false
    },
    {
      text: 'Favourites',
      count: 3,
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
