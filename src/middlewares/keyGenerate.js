import {ADD_COMMENT} from '../constants'

export default state => next => action =>{
    const {type, payload} = action

    switch(type){
        case ADD_COMMENT : {
            payload.commentDATA.id = Date.now()
        }
    }
    next(action)
}