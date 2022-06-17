import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})
export default store
