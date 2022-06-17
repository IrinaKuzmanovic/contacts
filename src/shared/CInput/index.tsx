import { FC } from 'react'
import { Input } from 'antd'
import './style.scss'

type CInputProps = {
  style?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number | readonly string[]
}

const CInput: FC<CInputProps> = ({ style, onChange, value }) => {
  return (
    <Input
      className="c-input"
      value={value}
      style={style}
      onChange={onChange}
    />
  )
}
export default CInput
