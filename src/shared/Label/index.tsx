import { FC } from 'react'
import './style.scss'

type CContacts = {
  text: String
  style?: React.CSSProperties
}

const Labels: FC<CContacts> = ({ text, style }) => {
  return (
    <div style={style}>
      <label className="labels">{text}</label>
    </div>
  )
}
export default Labels
