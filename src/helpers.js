export function arrToMap(arr){
    return arr.reduce((curr, next) => {
        curr[next.id] = next;
        return curr
    },{})
}
export function mapToArr(obj){
    return Object.keys(obj).map(item => obj[item])
}