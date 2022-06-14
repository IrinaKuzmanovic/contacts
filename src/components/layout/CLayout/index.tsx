import { FC, ReactNode } from 'react'
import { Layout } from 'antd'

import CNavigation from 'components/navigation/CNavigation'
import CSearch from 'components/layout/CSearch'
import './style.scss'

const { Header, Sider, Content } = Layout

type CLayoutProps = {
  children?: ReactNode
}

const CLayout: FC<CLayoutProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Sider className="layout__sider" width="255px">
        <CNavigation />
      </Sider>
      <Layout className="layout__child">
        <Header className="layout__header">
          <CSearch />
        </Header>
        <Content className="layout__content">{children}</Content>
      </Layout>
    </Layout>
  )
}

export default CLayout
