import { Contact } from 'shared/tableColumns'
import {
  ADD_CONTACT,
  ContactActionTypes,
  DELETE_CONTACT,
  SEARCH_CONTACTS,
  UPDATE_CONTACT,
  FAVOURITE_CONTACT,
  UNFAVOURITE_CONTACT
} from './reducer'

export const addContact = (contact: Contact): ContactActionTypes => ({
  type: ADD_CONTACT,
  payload: { contact }
})

export const updateContact = (contact: Contact): ContactActionTypes => ({
  type: UPDATE_CONTACT,
  payload: { contact }
})

export const deleteContact = (id: number): ContactActionTypes => ({
  type: DELETE_CONTACT,
  payload: { id }
})

export const searchContact = (term: string): ContactActionTypes => ({
  type: SEARCH_CONTACTS,
  payload: { term }
})

export const favouriteContact = (id: number): ContactActionTypes => ({
  type: FAVOURITE_CONTACT,
  payload: { id }
})

export const unfavouriteContact = (id: number): ContactActionTypes => ({
  type: UNFAVOURITE_CONTACT,
  payload: { id }
})
