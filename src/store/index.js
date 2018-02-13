import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import keyGenerate from '../middlewares/keyGenerate'
import apiCall from '../middlewares/api'

let enhancer = applyMiddleware(apiCall, keyGenerate, logger)

let store = createStore(reducer, {}, enhancer)

//dev only
window.appStore = store

export default store

