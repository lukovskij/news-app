import { DELETE_ITEM, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

import {arrToMap} from '../helpers'
import { addComment } from '../AC/index';



export default  (articlesState = arrToMap(defaultArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ITEM : {

            let copyItem = {...articlesState}
            delete copyItem[payload.id]

            return copyItem
            // articlesState  
           
        }
        case ADD_COMMENT : {

            let currentArticle = articlesState[action.payload.commentDATA.parentId];

            return {
                ...articlesState,
                [action.payload.commentDATA.parentId] : {
                    ...currentArticle,
                    comments : (currentArticle.comments || []).concat(action.randomId)
                }
            }
        }
        default: {
            return articlesState
        }
    }
}