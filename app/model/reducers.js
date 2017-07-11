import { combineReducers } from 'redux'

import appReducer from './app/reducer'
import listReducer from './list/reducer'

export default combineReducers({
  app: appReducer,
  list: listReducer
})
