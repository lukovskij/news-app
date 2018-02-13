import { normalizedComments as commentsDefault } from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers'



export default (comments = arrToMap(commentsDefault), action) => {
    const { type, payload } = action
    
    switch (type){
        case ADD_COMMENT : {

            return {
                ...comments,
                [action.randomId] : {
                    user : payload.commentDATA.user,
                    text : payload.commentDATA.text
                }
            }
        }
        default : {
            return comments
        }
    }
}