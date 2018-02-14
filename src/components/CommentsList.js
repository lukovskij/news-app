import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {loadArticleComment} from '../AC'
import {connect} from 'react-redux'
import toggleComponent from '../decorators/toggleComponent'
import Loader from "./Loader";

class CommentsList extends Component {

  static defaultProps = {
    comments : []
  }

  componentWillReceiveProps({isOpen, parentId, loadArticleComment, article}){
      if (!this.props.isOpen && !article.loadingComments && !article.loadedComments) {
          loadArticleComment(parentId)
      }
  }

  showBtn(commentsList) {
    if (commentsList.length != 0) {
      return <button onClick={this.handleToggleComments}>{this.props.isOpen ? 'Hide comments' : 'Show comments'}</button>
    }
    return null
  }

  handleToggleComments = () => {
    this.props.handleToggle()
  }


  toggleComments(comments){
      if(!this.props.isOpen) return null
      if(this.props.article.loadingComments) return <Loader/>
      if(!this.props.article.loadedComments) return null

    if(this.props.isOpen){
      return (
        <ul>
          {
            comments
            .map(item => {console.log(item) 
              return (<li key={item}><Comment comment={item}/></li>)})
          }
        </ul>
      )
    }
    return null
  }

  render() {

    return (
      <section>
        {
          this.showBtn(this.props.comments)
        }
        {
            this.toggleComments(this.props.comments)
        }
        <CommentForm parentId={this.props.parentId}/>
      </section>
    )
  }
}


export default connect(null, {loadArticleComment})(toggleComponent(CommentsList));
