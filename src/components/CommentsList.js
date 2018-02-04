import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

  state = {
    isShowComments : false
  }

  showBtn(commentsList) {
    if (commentsList) {
      return <button onClick={this.handleToggleComments}>{this.state.isShowComments ? 'Hide comments' : 'Show comments'}</button>
    }
    return null
  }

  toggleComments(comments){
    if(this.state.isShowComments){
      return (
        <ul>
          {comments}
        </ul>
      )
    }
    return null
  }

  handleToggleComments = () => {
    this.setState({
      isShowComments : !this.state.isShowComments
    })
  }

  render() {
    const commentsList = this.props.comments ?
    this.props.comments.map(item => <li key={item.key}><Comment comment={item}/></li>) : 
    undefined

    return (
      <section>
        {
          this.showBtn(commentsList)
        }
        {
            this.toggleComments(commentsList)
        }
      </section>
    )
  }
}
