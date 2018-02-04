import React from 'react'

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
export default Comment;
