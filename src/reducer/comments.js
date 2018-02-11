import { normalizedComments as commentsDefault } from '../fixtures'
import {ADD_COMMENT} from '../constants'


let normalizeComments = commentsDefault.reduce((acc, nextItem)=>{
    acc[nextItem.id] = nextItem

    //console.log(acc)

    return acc
},{})

export default (comments = normalizeComments, action) => {
    const { type, payload } = action

    switch (type){
        case ADD_COMMENT : {
            comments[payload.commentDATA.id] = payload.commentDATA;
            return comments
        }
        default : {
            return comments
        }
    }
}