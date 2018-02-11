import React, {Component} from 'react'
import { connect } from 'react-redux'
import {deleteArticle} from '../../AC'

import CommentsList from '../CommentsList'

// porop types
import PropTypes from 'prop-types'

import animationDecorator from '../../decorators/animationDecorator'


function handleToggleArticle(props) {
  return function(){
    props.closeSiblingsAccordionses(props.id)
  }
}

function toggleArticle(article, props) {
  if (props.isOpen) {
    return (<section>
      <p>{article.text}</p>
      <CommentsList comments={article.comments}/>
    </section>)
  }
  return null
}

function handleDeleteArticle(props,article) {
  return () => {
    console.log(deleteArticle)
      props.deleteArticle(article.id)
  }
}

function Article(props) {
  const { article } = props
  return (
    <article>
    <h2>
      {article.title}
    </h2>
    <button onClick={ handleToggleArticle(props) }>
      {
        props.isOpen
          ? 'Close'
          : 'Open'
      }
    </button>
      <button onClick={handleDeleteArticle(props,article) }>
          Delete article
      </button>
      {animationDecorator(toggleArticle(article, props))}
  </article>
)
}
Article.propTypes = {
  article : PropTypes.object
}


function mapDispatchToProps(dispatch) {
    return {
      deleteArticle : (id) => {
        dispatch(deleteArticle(id))
      }
    }
}
export default connect(null,mapDispatchToProps)(Article)