import { FC } from 'react'
import CItem from '../CItem'
import './style.scss'

const CMenu: FC = () => {
  const items = [
    {
      text: 'Contacts',
      count: 6,
      selected: true
    },
    {
      text: 'Favourites',
      count: 3,
      selected: false
    }
  ]

  return (
    <div className="c-menu">
      {items.map((item) => (
        <CItem count={item.count} selected={item.selected} text={item.text} />
      ))}
    </div>
  )
}

export default CMenu
