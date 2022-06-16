import { FC } from 'react'
import { Table } from 'antd'
import { DataType } from 'shared/DataType'
import { columns } from 'shared/DataColumns'

const data: DataType[] = [
  {
    key: '1',
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    phoneNumber: '+352698888'
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'jim@example.com',
    phoneNumber: '+3652144444'
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe@example.com',
    phoneNumber: '+321456987'
  }
]

const Favourites: FC = () => {
  return <Table columns={columns} dataSource={data} />
}
export default Favourites
