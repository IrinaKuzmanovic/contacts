import { FC, useState } from 'react'
import { Table } from 'antd'
import { Contact, tableColumns } from 'shared/tableColumns'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteContact from './DeleteContact'

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
  const onDeleteClick = () => {}
  const onEditClick = () => {}
  const onFavouriteClick = () => {}

  return (
    <div>
      <Table
        className="table"
        columns={tableColumns(onDeleteClick, onEditClick, onFavouriteClick)}
        dataSource={data}
      />
      <DeleteContact />
    </div>
  )
}
export default Contacts
