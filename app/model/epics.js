import listEpic from './list/epic'

import { combineEpics } from 'redux-observable'

export default combineEpics(
  listEpic,
)
