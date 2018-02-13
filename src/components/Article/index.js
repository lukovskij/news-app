import React, {Component} from 'react'
import { connect } from 'react-redux'
import {deleteArticle, loadArticle} from '../../AC'
import Loader from '../Loader'

import CommentsList from '../CommentsList'

// porop types
import PropTypes from 'prop-types'

import animationDecorator from '../../decorators/animationDecorator'



class Article extends Component {

    handleToggleArticle(id) {
      return () => {
          this.props.closeSiblingsAccordionses(id)
      }
    }


    componentWillReceiveProps({isOpen, loadArticle, article}){ // вішаєм на цей метод бо дікларатіний підіхід і більше гбкий ніж на клік

        if(isOpen && !article.text && !article.loading) loadArticle(article.id)
    }


    toggleArticle() {

      const {isOpen, article} = this.props

        if (isOpen) {
            return (<section>
                <p>{article.text}</p>
                <CommentsList parentId = {article.id} comments={article.comments}/>
            </section>)
        }
        return null
    }


    handleDeleteArticle(id) {

        return () => {

            this.props.deleteArticleEl(id)
        }
    }

    render() {

        const {article, isOpen} = this.props

        if(article.loading) return <Loader />
        return (
            <article>
                <h2>
                    {article.title}
                </h2>
                <button onClick={this.handleToggleArticle(article.id)}>
                    {
                        isOpen
                            ? 'Close'
                            : 'Open'
                    }
                </button>
                <button onClick={this.handleDeleteArticle(article.id)}>
                    Delete article
                </button>
                {animationDecorator(this.toggleArticle())}
            </article>
        )
    }
}
Article.propTypes = {
  article : PropTypes.object
}


function mapDispatchToProps(dispatch) {
    return {
        deleteArticleEl : (id) => {
          dispatch(deleteArticle(id))
        },
        loadArticle : id => {
            dispatch(loadArticle(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(Article)
