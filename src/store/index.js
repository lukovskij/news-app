import {createStore} from 'redux'
import reducer from '../reducer'

let store = createStore(reducer)

//dev only
window.appStore = store

export default store

