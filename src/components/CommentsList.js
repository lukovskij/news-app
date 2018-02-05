import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

  static defaultProps = {
    comments : []
  }

  state = {
    isShowComments : false
  }

  showBtn(commentsList) {
    if (commentsList.length != 0) {
      return <button onClick={this.handleToggleComments}>{this.state.isShowComments ? 'Hide comments' : 'Show comments'}</button>
    }
    return null
  }

  toggleComments(comments){
    if(this.state.isShowComments){
      return (
        <ul>
          {
            comments
            .map(item => <li key={item.id}><Comment comment={item}/></li>)
          }
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
    return (
      <section>
        {
          this.showBtn(this.props.comments)
        }
        {
            this.toggleComments(this.props.comments)
        }
      </section>
    )
  }
}
