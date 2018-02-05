import React, {Component} from 'react'
import CommentsList from './CommentsList'

import toggleComponent from '../decorators/toggleComponent'

function handleToggleArticle(props) {
  props.handleToggle()
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

function Article(props) {
  const {article} = props
  return (
    <article>
    <h2>
      {article.title}
    </h2>
    <button onClick={ handleToggleArticle.bind(this, props) }>
      {
        props.isOpen
          ? 'Close'
          : 'Open'
      }
    </button>
    {toggleArticle(article, props)}
  </article>
)
}

export default toggleComponent(Article)
