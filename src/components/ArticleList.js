import React, {Component} from 'react'
import {connect} from 'react-redux'
import Article from './Article'

import {filteredArtilcesSelector} from '../selectors'

// import PropTypes
import PropTypes from 'prop-types'

// import decorator
import AccordionDecorator from '../decorators/accordionDecorator'

// functions from decorator
/*
 closeSiblingsAccordionses
 isOpen for checkOpen id
 */


function ArticleList(props) {
    const {articles} = props


    const articlesArray = articles.map(item => {
        
            return (
                <li key={item.id}>
                    <Article
                        article={item}
                        closeSiblingsAccordionses={props.closeSiblingsAccordionses(item.id)}
                        isOpen={props.isOpen(item.id)}
                    />
                </li>
            )
        }
    )

    return (
        <ul>
            {articlesArray}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};




export default connect((state)=>{
    return{
        articles : filteredArtilcesSelector(state)
    }
})(AccordionDecorator(ArticleList))
