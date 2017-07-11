import { set } from 'lodash/fp'

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_LIST_FULFILLED':
      return set('data', action.value, state)
    default:
      return state
  }
}
