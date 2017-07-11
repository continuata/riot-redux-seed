/* global riot */
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reduxMixin from 'riot-redux-mixin'
import 'rxjs'

import { get, isEmpty, size } from 'lodash/fp'

import reducers from './model/reducers'
import epics from './model/epics'
import router from './router'
import './components'
import './less/site.less'

/* create redux store with epics and mixin to riot */
const epicMiddleware = createEpicMiddleware(epics)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(epicMiddleware)))
riot.mixin(reduxMixin(store))
riot.mixin({ get, isEmpty, size })
/* start app */
router.init()
