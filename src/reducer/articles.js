import {Map, OrderedMap ,Record} from 'immutable'
import { DELETE_ITEM, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE, LOAD_COMMENT } from '../constants'

import {arrToMap} from '../helpers'
import comments from "./comments";


const RecordReducer = Record({
    loading : false,
    loaded : false,
    enties : new OrderedMap({})
})

const defaultState = RecordReducer()

//так як ми не хочемо возиться з getters то опишемо це як Record (вище)
// const defaultState = new Map({
//     loading : false,
//     loaded : false,
//     enties : new OrderedMap({})
//}) // опишемо початковий стейт абстрактно і не привязуємся до назв структур

// якщо юзаєм імутабл то ми повиині задати початковий стейт через структуру яку юзаєм по замовчуванню.
// Також упрощає роботу зі стором так як тепер ми не паримся про імутабельность стора за нас це робить імутбл жс
// але так як ми обгораєм сам масив зі статтями то сама статья в нас не імутабельна то ми можемо заюзать FromJs
// або краже завернемо кожну статтю в мап
//метод Update обновляє то шо ми хочемо помінять

// щоб зробити проще роботу з гетерами і ми в компонентах не відчули шо ми юзаєм чи імутб чи не імутбл то є фіча Record замість Map
// опишемо структуру Record
// і да! imutable обгортає в себе саме той об'єкт який передаємо внутрішні структури даних в цьому об'єкті треба обгортати самостійно

//orderMap використовується для збереження порядку

const articleShema = Record({
    text : '',
    title : '',
    id : '',
    loadingComments : false,
    loadedComments : false,
    loading : false,
    comments : []
})


export default  (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {

        case LOAD_ALL_ARTICLES + SUCCESS : {

            return articlesState
                .set('enties', arrToMap(action.response, articleShema))
                .set('loading', false)
                .set('loaded', true)

        }

        case LOAD_ALL_ARTICLES + START : {
            return articlesState.set('loading', true)
        }

        case DELETE_ITEM : {

            return articlesState.deleteIn(['enties', payload.id])
            // articlesState  
           
        }
        case ADD_COMMENT : {

            return articlesState.updateIn(
                ['enties',action.payload.commentDATA.parentId, 'comments'],
                comments => comments.concat(action.randomId)
            )

            // цей метод використовується для зміни елемента в глубоких вложеностях
            // приймає ключ того шо міняєм другим аргументом шо саме і третя функція колбек яка робить зміну

        }

        case LOAD_ARTICLE + START : {

            console.log(payload.id)

            //тут до загрузки сатара структура з loading яке ставим тру показуємо цим самим шо загружаєм статтю

            return articlesState.setIn(['enties', payload.id, 'loading'], true)

        }

        case  LOAD_ARTICLE + SUCCESS : {
            // тут коли загрузили ми ставим фолс з нашої схеми для статті і прасим по ній нашу відповідь з сервера

            return articlesState.setIn(['enties', payload.id], new articleShema(payload.res))
        }

        case LOAD_COMMENT + START : {
            return articlesState.setIn(['enties', payload.articleId, 'loadingComments'], true)
        }

        case LOAD_COMMENT + SUCCESS : {
            return articlesState
                .setIn(['enties', payload.articleId, 'loadingComments'], false)
                .setIn(['enties', payload.articleId, 'loadedComments'], true)
        }

        default: {
            return articlesState
        }
    }
}