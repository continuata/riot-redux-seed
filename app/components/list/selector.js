import { createSelector } from 'reselect'
import { get } from 'lodash/fp'

export default createSelector(
  (state) => get('list.data', state),
  (list) => ({ list })
)
