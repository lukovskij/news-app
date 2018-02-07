import {combineReducers} from 'redux'
// reducers
import counter from './counter'
import articles from './articles'


export default combineReducers({
    counter,
    articles
})