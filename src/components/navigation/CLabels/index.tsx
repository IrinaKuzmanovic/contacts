import React, { FC } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import CItem from '../CItem'
import './style.scss'
import { BaseProps } from 'baseProps'

const CLabels: FC<BaseProps> = ({ style }) => {
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
