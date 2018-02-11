import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'

let enhancer = applyMiddleware(logger)

let store = createStore(reducer, {}, enhancer)

//dev only
window.appStore = store

export default store

