// тут описуємо функції я породжують ешени
import {DELETE_ITEM,
    FILTER_SELECT,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, START, SUCCESS, FAIL,
    LOAD_COMMENT,
    LOAD_ALL_COMMENTS} from '../constants'
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

export function loadArticleComment(articleId) {
    return (dispatch) => {
        dispatch({
            type : LOAD_COMMENT + START,
            payload : {
                articleId
            }
        }) // показуємо початок загрузки комента

        setTimeout(()=>{
        fetch(`/api/comment?article=${articleId}`)
            .then(res =>res.json())
            .then(res => dispatch({
                type : LOAD_COMMENT + SUCCESS,
                payload : {
                    res, articleId
                }
            }))
        }, 2000)
    }
}

export function loadAllArticles() {
    return {
        type : LOAD_ALL_ARTICLES,
        callAPI : '/api/article'
    }
}

// load all comments

export function loadAllComments(col = 5, offset = 5) {
    return (dispatch) => {
        dispatch({
            type : LOAD_ALL_COMMENTS + START
        })

        setTimeout(() => {
        fetch(`/api/comment?limit=${col}&offset=${offset}`)
            .then(res => res.json())
            .then(res => dispatch({
                type : LOAD_ALL_COMMENTS +  SUCCESS,
                payload : {
                    res
                }
            }))
        }, 2000)
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