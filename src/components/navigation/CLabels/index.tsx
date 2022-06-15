import React, { FC } from 'react'

import CItem from '../CItem'
import './style.scss'

type CLabelsProps = {
  style?: React.CSSProperties
}

const CLabels: FC<CLabelsProps> = ({ style }) => {
  const items = [
    {
      text: 'Work',
      count: 6,
      selected: false
    },
    {
      text: 'Family',
      count: 3,
      selected: false
    },
    {
      text: 'Friends',
      count: 1,
      selected: false
    }
  ]

  return (
    <div className="c-labels" style={style}>
      <div className="c-labels__header">
        <div>Labels</div>
        <hr className="c-labels__header__line" />
      </div>
      <div className="c-labels__labels">
        {items.map((item) => (
          <CItem count={item.count} selected={item.selected} text={item.text} />
        ))}
      </div>
    </div>
  )
}
export default CLabels
