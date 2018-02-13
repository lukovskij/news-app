// тут описуємо функції я породжують ешени
import {DELETE_ITEM, FILTER_SELECT, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants'
export function deleteArticle(id) {
    return {
        type : DELETE_ITEM,
        payload : {
            id
        }
    }
}
export function filterItems(selected) {
    return {
        type : FILTER_SELECT,
        payload: {
            selected
        }
    }
}

export function addComment(commentDATA) {
    return {
        type : ADD_COMMENT,
        payload : {
            commentDATA
        },
        generateId : true
    }
}

export function loadAllArticles() {
    return {
        type : LOAD_ALL_ARTICLES,
        callAPI : '/api/article'
    }
}