import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

import toggleComponent from '../decorators/toggleComponent'

class CommentsList extends Component {

  static defaultProps = {
    comments : []
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
        <CommentForm/>
      </section>
    )
  }
}


export default toggleComponent(CommentsList);
