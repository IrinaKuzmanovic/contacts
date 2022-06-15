import { FC, ReactNode } from 'react'
import { Select } from 'antd'
import './style.scss'

const { Option } = Select

type CSelectProps = {
  style?: React.CSSProperties
  children?: ReactNode
}

const CSelect: FC<CSelectProps> = ({ style, children }) => {
  const items = [
    {
      text: 'Family'
    },
    {
      text: 'Work'
    }
  ]
  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
    >
      {children}
    </Select>
  )
}
export default CSelect
