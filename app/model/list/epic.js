import actions from './actions'

const dummyList = [
  'Stu',
  'Bob',
  'Dave',
  'Frank'
]

export default (action$, store) =>
  action$.ofType('GET_LIST')
    .map(() => actions.getListFulfilled(dummyList))
