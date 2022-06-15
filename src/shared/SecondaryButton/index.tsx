import React, { FC } from 'react'

import './style.scss'

type CContactsProps = {
  text: String
  style?: React.CSSProperties
}
const SecondaryButton: FC<CContactsProps> = ({ text, style }) => {
  return (
    <button className="secondary-button" style={style}>
      {text}
    </button>
  )
}

export default SecondaryButton
