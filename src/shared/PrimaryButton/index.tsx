import { FC } from 'react'

import './style.scss'

type CLayoutProps = {
  text: string
  type?: 'button' | 'submit' | 'reset'
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton: FC<CLayoutProps> = ({
  onClick,
  text,
  style,
  type = 'button'
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="primary-button"
      style={style}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
