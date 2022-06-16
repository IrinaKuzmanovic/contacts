import React, { FC } from 'react'
import { Badge } from 'antd'
import classNames from 'classnames'

import './style.scss'

type CItemProps = {
  text: string
  count: number
  selected: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const CItem: FC<CItemProps> = ({ text, count, selected, onClick }) => {
  return (
    <div
      className={classNames('c-menu-item', {
        'c-menu-item--selected': selected
      })}
      onClick={onClick}
    >
      <div className="c-menu-item__text">{text}</div>
      <Badge
        count={count}
        style={{
          backgroundColor: selected ? 'white' : '#F3F4F6',
          color: selected ? 'black' : '#4B5563',
          fontWeight: 500,
          fontSize: '12px',
          paddingLeft: '12px',
          paddingRight: '12px'
        }}
      />
    </div>
  )
}

export default CItem
