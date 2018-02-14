import {OrderedMap,Record} from 'immutable'
import {ADD_COMMENT, LOAD_COMMENT, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'


// DZ по шостому уроці
// Кароче треба зробить форму нашого комента тобіш в коменті є обьект ми должні його зробить таким чином щоб компонент міг його прочитать
// для цього юзаєм Record() (1);
// (2) тут робимо початковий стан в якому описуємо наш стейт


//(1) форма нашого комента
const commentRecord = Record({
    id : '',
    user : '',
    text : ''
})

// (2)
const ReducerState = Record({
    entities : new OrderedMap({})
})// форма редьюсера для комента типу стандартна початкова

const defaultState = new ReducerState()

export default (comments = defaultState, action) => {
    const { type, payload } = action


    switch (type){

        case ADD_COMMENT : {
            return comments.setIn(['entities', action.generateId], new  commentRecord({...payload.commentDATA, id : action.generateId}))
        }

        case LOAD_COMMENT + SUCCESS : {

            console.log(action, '----rez')
            return comments.update('entities', entities => entities.merge(arrToMap(payload.res, commentRecord)))
        }

        default : {
           return  comments
        }
    }
}