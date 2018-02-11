export default store => next => action => {
    console.log('action----', action)
    next(action)
}