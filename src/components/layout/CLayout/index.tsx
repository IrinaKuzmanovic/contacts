import React, { FC, ReactNode } from 'react'
import { Layout } from 'antd'

import './style.scss'
import CMenu from 'components/navigation/CMenu'

const { Header, Sider, Content } = Layout

type CLayoutProps = {
  children?: ReactNode
}

const CLayout: FC<CLayoutProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Sider className="layout__sider" width="255px">
        <CMenu />
      </Sider>
      <Layout>
        <Header className="layout__header">Header</Header>
        <Content className="layout__content">{children}</Content>
      </Layout>
    </Layout>
  )
}

export default CLayout
