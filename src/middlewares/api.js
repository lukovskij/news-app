import {START, FAIL, SUCCESS} from '../constants'

export default store => next => action => {

    // pass configurate string from action object

    const {callAPI, type, ...rest} = action //беремо всі данні з action

    if(!callAPI) return next(action)

    next({
        ...rest,
        type : type + START
    }) // next для початку загрузки з сервера по ньому ми показуємо прелоадер

    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({ ...action, type : type + SUCCESS, response}))
            .catch(error => next({...action, type : type + FAIL, error}))

    }, 2000)
}

// після цих чудєс ми йдем в reducer! і там описуємо ци екшени