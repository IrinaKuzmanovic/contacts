import React, { FC } from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import './style.scss'

const CSearch: FC = () => {
  return (
    <div>
      <SearchOutlined className="search__icon" />
      <Input placeholder="Search" className="search" bordered={false} />
    </div>
  )
}
export default CSearch
