import { set } from 'lodash/fp'

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_FULFILLED':
      return set('user', action.value, state)
    default:
      return state
  }
}
