import React, {Component} from 'react'
import {connect} from 'react-redux'
import Article from './Article'
import Loader from './Loader'

import {filteredArtilcesSelector} from '../selectors'

import {loadAllArticles} from '../AC'

// import PropTypes
import PropTypes from 'prop-types'

// import decorator
import AccordionDecorator from '../decorators/accordionDecorator'

// functions from decorator
/*
 closeSiblingsAccordionses
 isOpen for checkOpen id
 */


class ArticleList extends Component {

    componentDidMount(){
        if(!this.props.loading || !this.props.loaded) this.props.loadAllArticles()
    }

    render() {
        const {articles, loading} = this.props


        if(loading) return <Loader></Loader>

        const articlesArray = articles.map(item => {

                return (
                    <li key={item.id}>
                        <Article
                            article={item}
                            closeSiblingsAccordionses={this.props.closeSiblingsAccordionses(item.id)}
                            isOpen={this.props.isOpen(item.id)}
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

}


ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};




export default connect((state)=>{
    return{
        articles : filteredArtilcesSelector(state),
        loading : state.articles.loading,
        loaded : state.articles.loaded
    }
}, {loadAllArticles})(AccordionDecorator(ArticleList))
