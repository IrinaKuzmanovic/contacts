import { FC } from 'react'

import './style.scss'

type CLayoutProps = {
  text: string
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
}

const PrimaryButton: FC<CLayoutProps> = ({ text, style, type = 'button' }) => {
  return (
    <button type={type} className="primary-button" style={style}>
      {text}
    </button>
  )
}

export default PrimaryButton
