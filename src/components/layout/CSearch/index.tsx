import React, { FC, useState } from 'react'
import { Input } from 'antd'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons'

import './style.scss'
import store from 'store'
import { searchContact } from 'store/contacts/actions'

const CSearch: FC = () => {
  const [loading, setLoading] = useState(false)

  var delayTimer: NodeJS.Timeout
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    clearTimeout(delayTimer)
    delayTimer = setTimeout(() => {
      store.dispatch(searchContact(event.target.value))
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      {loading ? (
        <LoadingOutlined className="search__icon" />
      ) : (
        <SearchOutlined className="search__icon" />
      )}
      <Input
        onChange={handleSearch}
        placeholder="Search"
        className="search"
        bordered={false}
      />
    </>
  )
}
export default CSearch
