import React, { FC } from 'react'

import './style.scss'

type CContactsProps = {
  text: String
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const SecondaryButton: FC<CContactsProps> = ({
  text,
  style,
  type = 'button',
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="secondary-button"
      style={style}
    >
      {text}
    </button>
  )
}

export default SecondaryButton
