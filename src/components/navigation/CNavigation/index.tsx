import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CLogo from '../CLogo'
import CLabels from '../CLabels'
import PrimaryButton from 'shared/PrimaryButton'
import CMenu from '../CMenu'
import './style.scss'

const CNavigation: FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/create-contact')
  }

  return (
    <div>
      <CLogo />

      <PrimaryButton
        text="Create contact"
        style={{ marginTop: '29px', marginBottom: '28px' }}
        onClick={handleClick}
      />
      <CMenu />
      <CLabels style={{ marginTop: '12px' }} />
    </div>
  )
}

export default CNavigation
