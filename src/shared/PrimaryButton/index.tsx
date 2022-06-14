import { FC } from 'react'

import { BaseProps } from 'baseProps'
import './style.scss'

type CLayoutProps = {
  text: string
}

const PrimaryButton: FC<CLayoutProps & BaseProps> = ({ text, style }) => {
  return (
    <button className="primary-button" style={style}>
      {text}
    </button>
  )
}

export default PrimaryButton
