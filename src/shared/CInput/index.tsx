import { FC } from 'react'
import { Input } from 'antd'
import './style.scss'

type CInputProps = {
  style?: React.CSSProperties
}

const CInput: FC<CInputProps> = ({ style }) => {
  return <Input className="c-input" style={style}></Input>
}
export default CInput
