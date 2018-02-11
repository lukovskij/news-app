import { normalizedComments as commentsDefault } from '../fixtures'


let normalizeComments = commentsDefault.reduce((acc, nextItem)=>{
    acc[nextItem.id] = nextItem

    //console.log(acc)

    return acc
},{})

export default (comments = normalizeComments, action) => {
    return comments
}