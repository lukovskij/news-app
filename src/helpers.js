import {OrderedMap, Map} from 'immutable'

export function arrToMap(arr, Shema = Map){ // схема для статті зі стору
    return arr.reduce((curr, next)  => curr.set(next.id, new Shema(next)), new OrderedMap({}))
}
export function mapToArr(obj){
    return obj.valueSeq().toArray() // convert to array
}