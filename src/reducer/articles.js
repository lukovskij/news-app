import { DELETE_ITEM } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

let improvedArticles = defaultArticles.reduce((acc, nextProp) => {
   acc[nextProp.id] = nextProp 

   return acc;
},{})


export default  (articlesState = improvedArticles, action) => {
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