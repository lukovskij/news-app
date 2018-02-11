import React, { Component } from "react";
import {connect} from 'react-redux'
import {addComment} from '../../AC'

class CommentForm extends Component {
    state = {
        user : '',
        text : ''
    }

    handleTextForm = (formName) => {
        return (ev) => {
            this.setState({
                [formName] : ev.target.value
            })
        }
    }

    validationFunction = (formName) => {
            const checkInputs = {
                user : {
                    max: 15,
                    min: 5
                },
                text : {
                    max: 50,
                    min: 20
                }
            }
            if(this.state[formName].length > checkInputs[formName].min && this.state[formName].length < checkInputs[formName].max){
               return 'isGood'
            }else{
                return 'isError'
            }
    }

    handleAddComment = () => {
        let comentData = this.state
        comentData.parentId = this.props.parentId
        this.props.addCommentData(comentData)
    }

    render(){
        return(
            // set state визиває рендер і тобіш всі функції будуть визиваться 
            <div>
                <div>Name</div>
                <input 
                    type="text"
                    value={this.state.user}
                    onChange={this.handleTextForm('user')}
                    className={this.validationFunction('user')}
                />
                <div>
                    <div>Message</div>
                    <textarea 
                        value={this.state.text} 
                        onChange={this.handleTextForm('text')}
                        className={this.validationFunction('text')}
                    />
                </div>
                <button onClick={this.handleAddComment}> Add Comment </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCommentData : (commentData) => {
            dispatch(addComment(commentData))
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentForm)