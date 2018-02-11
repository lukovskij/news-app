import { DELETE_ITEM, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

let improvedArticles = defaultArticles.reduce((acc, nextProp) => {
   acc[nextProp.id] = nextProp 

   return acc;
},{})


export default  (articlesState = improvedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ITEM : {

            let arrForDelete = Object.keys(articlesState).map(item => {
                return articlesState[item]
            })

            return arrForDelete.filter(item => item.id != payload.id)
        }
        case ADD_COMMENT : {
            let newArray = articlesState
            newArray[payload.commentDATA.parentId].comments.push(payload.commentDATA.id)
            return newArray
        }
        default: {
            return articlesState
        }
    }
}