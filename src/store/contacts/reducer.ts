import { Contact } from 'shared/tableColumns'

export const ADD_CONTACT = 'contacts/addContact'
export const UPDATE_CONTACT = 'contacts/updateContact'
export const DELETE_CONTACT = 'contacts/deleteContact'
export const SEARCH_CONTACTS = 'contacts/search'
export const FAVOURITE_CONTACT = 'contacts/favouriteContact'
export const UNFAVOURITE_CONTACT = 'contacts/unfavouriteContact'

export interface ContactState {
  contacts: Contact[]
  search: string | null
}

const initialState: ContactState = {
  contacts: [
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
  ],
  search: null
}

export function contactsReducer(
  state = initialState,
  action: ContactActionTypes
): ContactState {
  var index = 0
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            ...action.payload.contact,
            id: state.contacts.length ? state.contacts.at(-1)?.id! + 1 : 1,
            favourite: false
          }
        ]
      }
    case UPDATE_CONTACT:
      index = state.contacts.findIndex(
        (item) => item.id === action.payload.contact.id
      )
      if (index !== -1) {
        const newContacts = [...state.contacts.map((value) => ({ ...value }))]

        newContacts[index].email = action.payload.contact.email
        newContacts[index].name = action.payload.contact.name
        newContacts[index].phoneNumber = action.payload.contact.phoneNumber

        return { ...state, contacts: newContacts }
      } else {
        return state
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        )
      }
    case SEARCH_CONTACTS:
      return {
        ...state,
        search: action.payload.term
      }
    case FAVOURITE_CONTACT:
      index = state.contacts.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) {
        const newContacts = [...state.contacts.map((value) => ({ ...value }))]
        newContacts[index].favourite = true
        return { ...state, contacts: newContacts }
      } else {
        return state
      }
    case UNFAVOURITE_CONTACT:
      index = state.contacts.findIndex((item) => item.id === action.payload.id)
      if (index !== -1) {
        const newContacts = [...state.contacts.map((value) => ({ ...value }))]
        newContacts[index].favourite = false
        return { ...state, contacts: newContacts }
      } else {
        return state
      }
    default:
      return state
  }
}

interface AddContactAction {
  type: typeof ADD_CONTACT
  payload: { contact: Contact }
}

interface UpdateContactAction {
  type: typeof UPDATE_CONTACT
  payload: { contact: Contact }
}

interface DeleteContactAction {
  type: typeof DELETE_CONTACT
  payload: { id: number }
}

interface SearchContactsAction {
  type: typeof SEARCH_CONTACTS
  payload: { term: string }
}

interface FavouriteAction {
  type: typeof FAVOURITE_CONTACT
  payload: { id: number }
}

interface UnfavouriteAction {
  type: typeof UNFAVOURITE_CONTACT
  payload: { id: number }
}

export type ContactActionTypes =
  | AddContactAction
  | UpdateContactAction
  | DeleteContactAction
  | SearchContactsAction
  | FavouriteAction
  | UnfavouriteAction
