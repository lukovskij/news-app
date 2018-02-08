import { DELETE_ITEM } from '../constants'
import {articles as defaultArticles} from '../fixtures'


export default  (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ITEM : {
            return articlesState.filter(item => item.id !== payload.id)
        }
        default: {
            return articlesState
        }
    }
}