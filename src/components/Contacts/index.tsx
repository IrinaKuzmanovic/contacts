import { FC } from 'react'
import { Table } from 'antd'

import { Contact, tableColumns } from 'shared/tableColumns'

const data: Contact[] = [
  {
    id: 1,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    phoneNumber: '+365897456555',
    favourite: true
  },
  {
    id: 2,
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    phoneNumber: '+35412877',
    favourite: false
  },
  {
    id: 3,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    phoneNumber: '+37412589',
    favourite: false
  }
]

const Contacts: FC = () => {
  return <Table className="table" columns={tableColumns()} dataSource={data} />
}
export default Contacts
