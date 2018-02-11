import { createSelector } from 'reselect'

const filtersGetter = state => state.filters // getter for filters
const articlesGetter = state => state.articles //getter for artilces 

const commentsGetter = state => state.comments
const idGetter = (state, props) => props.comment

// it is simple functions selectors(getters)

// create selector function 
// this functin takes selectors functions 

export const filteredArtilcesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters)=>{
    const { selected } = filters

console.log('--- change fom selector');


    const filteredArticles = articles.filter(item => {
        if(selected != undefined){
            return item.id == selected
        }
        return item
    })

    return filteredArticles.length === 0 ? articles : filteredArticles
})

export const commentsSelector = () => createSelector(commentsGetter, idGetter, (state, ownProps)=>{
    console.log(state, ownProps)

    return state[ownProps]

})


