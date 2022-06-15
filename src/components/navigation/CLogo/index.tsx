import { FC } from 'react'

import Logo from 'assets/logo.svg'
import './style.scss'

const CLogo: FC = () => {
  return (
    <div className="clogo">
      <img src={Logo} alt="logo" />
      <span className="clogo__text">Contacts</span>
    </div>
  )
}
export default CLogo
