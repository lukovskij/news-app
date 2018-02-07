import {INCREMENT} from '../constants'

const initialCounter = 0

export default (count = initialCounter, action) => {

    const { type } = action

    switch(type){
        case INCREMENT : {
            return count +1
        }
        default : {
            return count
        }
    }
}