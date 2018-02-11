import {combineReducers} from 'redux'
// reducers
import counter from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'

export default combineReducers({
    counter,
    articles,
    comments,
    filters,
})