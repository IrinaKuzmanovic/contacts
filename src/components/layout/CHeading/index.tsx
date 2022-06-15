import React, { FC, ReactNode } from 'react'

type CHeadingProps = {
  children?: ReactNode
}
const CHeading: FC<CHeadingProps> = ({ children }) => {
  return (
    <h1
      style={{
        width: 1038,
        height: 32,
        marginBottom: 24,
        marginRight: 32,
        fontWeight: 600,
        fontSize: 24
      }}
    >
      {children}
    </h1>
  )
}
export default CHeading
