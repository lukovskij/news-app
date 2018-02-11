import React from 'react'
import { connect } from 'react-redux'
import {commentsSelector} from '../selectors'

function Comment(props){
  const { comment } = props;
  return(
    <article>
      <h5>
        {comment.user}
      </h5>
      <p>
        {comment.text}
      </p>
    </article>
  )
}

function mapStateToProps () {

  let selectElement = commentsSelector()

  return (state, ownProps) => {
    return{
      comment : selectElement(state, ownProps)
    }
  }
}



export default connect(mapStateToProps)(Comment);
