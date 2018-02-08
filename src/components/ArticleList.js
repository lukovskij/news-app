import React, {Component} from 'react'
import {connect} from 'react-redux'
import Article from './Article'

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

function mapStateToProps(state) {

    const { articles, filters } = state
    const { selected } = filters

    const filteredArticles = articles.filter(item => {
        if(selected != undefined) {
            return item.id == selected
        }
        return item
    })
    console.log(filteredArticles)

    return {
        articles: filteredArticles.length === 0 ? articles : filteredArticles
    }
}

export default connect(mapStateToProps)(AccordionDecorator(ArticleList))
