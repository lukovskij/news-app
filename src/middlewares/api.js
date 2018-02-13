export default store => next => action => {

    // pass configurate string from action object

    const {callAPI} = action

    if(!callAPI) return next(action)

    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({ ...action, response}))

    }, 2000)
}