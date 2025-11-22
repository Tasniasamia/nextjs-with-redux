import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterController'

export const store = configureStore({
 
  reducer: {
   counter:counterReducer
  },
})