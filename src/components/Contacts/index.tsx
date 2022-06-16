import { FC } from 'react'
import { Table } from 'antd'
import { DataType } from 'shared/DataType'
import { columns } from 'shared/DataColumns'
import CModal from 'shared/CModal'

import './style.scss'

const data: DataType[] = [
  {
    key: '1',
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    phoneNumber: '+365897456555'
  },
  {
    key: '2',
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    phoneNumber: '+35412877'
  },
  {
    key: '3',
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    phoneNumber: '+37412589'
  }
]

const Contacts: FC = () => {
  return (
    <div>
      <Table className="table" columns={columns} dataSource={data} />
      <CModal />
    </div>
  )
}
export default Contacts
