export default state => next => action =>{
    const {type, payload, generateId} = action

    if(!generateId) return next(action)

   next({
       ...action,
       randomId : Date.now()
   })

    
}