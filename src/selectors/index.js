import { createSelector } from 'reselect'
import articles from '../reducer/articles';

import { mapToArr } from '../helpers'

const filtersGetter = state => state.filters // getter for filters
const articlesGetter = state => state.articles.enties //getter for artilces

const commentsGetter = state => state.comments
const idGetter = (state, props) => props.comment

// it is simple functions selectors(getters)

// create selector function 
// this functin takes selectors functions 

export const filteredArtilcesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters)=>{
    const { selected } = filters

    if(selected.length != 0){
        return selected.map(item => {
            return articles[item]
        })
    }
    return mapToArr(articles)
})


export const commentsSelector = () => createSelector(commentsGetter, idGetter, (state, ownProps) => {

    return state[ownProps]
    
})


