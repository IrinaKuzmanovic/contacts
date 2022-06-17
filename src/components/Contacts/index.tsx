import { FC, useEffect } from 'react'
import { Table } from 'antd'
import { Contact, tableColumns } from 'shared/tableColumns'
import { useDispatch, useSelector } from 'react-redux'
import store, { RootState } from 'store'
import {
  deleteContact,
  favouriteContact,
  unfavouriteContact
} from 'store/contacts/actions'
import { useNavigate } from 'react-router-dom'

const Contacts: FC = () => {
  const navigate = useNavigate()

  const contacts = useSelector((state: RootState) =>
    state.contacts.contacts.filter(
      (contact) =>
        (state.contacts.search
          ? contact.email.includes(state.contacts.search)
          : true) ||
        (state.contacts.search
          ? contact.name.includes(state.contacts.search)
          : true) ||
        (state.contacts.search
          ? contact.phoneNumber.includes(state.contacts.search)
          : true)
    )
  )

  const onDeleteClick = (id: number) => {
    store.dispatch(deleteContact(id))
  }

  const onEditClick = (id: number) => {
    navigate(`/edit-contact/${id}`)
  }

  const onFavouriteClick = (id: number, favourite: boolean) => {
    if (favourite) {
      store.dispatch(favouriteContact(id))
    } else {
      store.dispatch(unfavouriteContact(id))
    }
  }

  return (
    <div>
      <Table
        className="table"
        columns={tableColumns(onEditClick, onDeleteClick, onFavouriteClick)}
        dataSource={contacts}
      />
    </div>
  )
}
export default Contacts
