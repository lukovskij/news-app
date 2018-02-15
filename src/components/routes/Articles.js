// this rout component for articles and this directory i created for routes related components

import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Article from '../Article'
import ArticleList from '../ArticleList'
import PropTypes from 'prop-types';

class Articles extends Component {
    render() {
        return (
            <div>

                <ArticleList/>
                <Route path={'/articles/'} render={this.getIndex} exact/>
                <Route path={'/articles/:id'} render={this.getArticle}/>

            </div>
        );
    }

    getIndex = () => {
        return <h1>Please check article</h1>
    }

    getArticle = ({match}) => {
       const {params} = match

        return <Article id={params.id} isOpen key={params.id}/>
    }
}

Articles.propTypes = {};

export default Articles;
