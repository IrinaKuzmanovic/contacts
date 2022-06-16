import { FC } from 'react'
import { Table } from 'antd'
import { Contact, tableColumns } from 'shared/tableColumns'
const data: Contact[] = [
  {
    id: 1,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    phoneNumber: '+352698888',
    favourite: true
  },
  {
    id: 2,
    name: 'Jim Green',
    email: 'jim@example.com',
    phoneNumber: '+3652144444',
    favourite: true
  },
  {
    id: 3,
    name: 'Joe Black',
    email: 'joe@example.com',
    phoneNumber: '+321456987',
    favourite: true
  }
]

const Favourites: FC = () => {
  return <Table columns={tableColumns()} dataSource={data} />
}
export default Favourites
