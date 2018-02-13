// тут описуємо функції я породжують ешени
import {DELETE_ITEM, FILTER_SELECT, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL} from '../constants'
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


// пишем по чанку
export function loadArticle(id) {
    return (dispatch) => {

        dispatch({
            type : LOAD_ARTICLE + START,
            payload : { id }
        })// імітуємо визов AC тільки в середині AC

          fetch(`/api/article/${id}`)
              .then(res => res.json())
              .then(res => dispatch({
                  type : LOAD_ARTICLE + SUCCESS,
                  payload : {id, res}
              }))
              .catch(error => dispatch({
                  type : LOAD_ARTICLE + FAIL,
                  payload : {
                      id, error
                  }
              })) // тепер підключаєм AC в потрібному компоненті
    }
}

// export function loadArticle(id) {
//     return {
//         type : LOAD_ARTICLE,
//         callAPI : `/api/article/${id}`
//     }
// }