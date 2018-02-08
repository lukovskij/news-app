// тут описуємо функції я породжують ешени
import {DELETE_ITEM, FILTER_SELECT} from '../constants'
export function deleteArticle(id) {
    return {
        type : DELETE_ITEM,
        payload : {
            id
        }
    }
}
export function filterItems(id) {
    return {
        type : FILTER_SELECT,
        payload: {
            id
        }
    }
}