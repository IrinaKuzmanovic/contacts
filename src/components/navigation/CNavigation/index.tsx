import React, { FC } from 'react'

import CLogo from '../CLogo'
import CLabels from '../CLabels'
import PrimaryButton from 'shared/PrimaryButton'
import CMenu from '../CMenu'
import './style.scss'

const CNavigation: FC = () => {
  return (
    <div>
      <CLogo />
      <PrimaryButton
        text="Create contact"
        style={{ marginTop: '29px', marginBottom: '28px' }}
      />
      <CMenu />
      <CLabels style={{ marginTop: '12px' }} />
    </div>
  )
}

export default CNavigation
