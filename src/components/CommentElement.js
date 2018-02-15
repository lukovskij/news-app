import React from 'react'
import { connect } from 'react-redux'
import {commentsSelector} from '../selectors'

function CommentElement(props){
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


export default CommentElement;
