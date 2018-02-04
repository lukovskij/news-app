import React, { Component } from 'react'
import CommentsList from './CommentsList'

export default class Article extends Component {

  state = {
    isOpen : false
  }

  handleToggleArticle = () => {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  toggleArticle(article){
    if(this.state.isOpen){
      return <p>{ article.text }</p>
    }
    return null
  }

  render(){
    const { article } = this.props
    return (
      <article>
        <h2>
          {article.title}
        </h2>
        <button onClick={this.handleToggleArticle}>{this.state.isOpen ? 'Close' : 'Open'}</button>
        {
          this.toggleArticle(article)
        }
        <CommentsList comments={article.comments}/>
      </article>
    )
  }

}
