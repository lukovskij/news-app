import {OrderedMap, Map, Record} from 'immutable'

export function arrToMap(arr, Shema = Map){ // схема для статті зі стору
    return arr.reduce((curr, next)  => curr.set(next.id, new Shema(next)), new OrderedMap({}))
}

export function arrToRecordMap(arr, options) {
    return arr.reduce((current, next) => current.set(next.id, next), Record(options))
}

export function mapToArr(obj){
    return obj.valueSeq().toArray() // convert to array
}