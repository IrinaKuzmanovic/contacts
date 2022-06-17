import { FC, useState } from 'react'
import { Table } from 'antd'
import { Contact, tableColumns } from 'shared/tableColumns'
import { useSelector } from 'react-redux'
import store, { RootState } from 'store'
import {
  deleteContact,
  favouriteContact,
  unfavouriteContact
} from 'store/contacts/actions'
import { useNavigate } from 'react-router-dom'

const Favourites: FC = () => {
  const navigate = useNavigate()

  const favourites = useSelector((state: RootState) =>
    state.contacts.contacts
      .filter((contact) => contact.favourite)
      .filter(
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
    <Table
      columns={tableColumns(onEditClick, onDeleteClick, onFavouriteClick)}
      dataSource={favourites}
    />
  )
}
export default Favourites
