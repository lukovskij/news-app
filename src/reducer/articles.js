import { DELETE_ITEM, FILTER_ITEMS } from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default  (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ITEM : {
            return articlesState.filter(item => item.id !== payload.id)
        }

        case FILTER_ITEMS : {
            let filteredArray =  articlesState.filter(item => {
                return item.id === payload.id
            })
            return filteredArray
        }

        default: {
            return articlesState
        }
    }
}