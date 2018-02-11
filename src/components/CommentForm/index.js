import React, { Component } from "react";

export default class CommentForm extends Component {
    state = {
        name : '',
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
                name : {
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

    render(){
        return(
            // set state визиває рендер і тобіш всі функції будуть визиваться 
            <div>
                <div>Name</div>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleTextForm('name')}
                    className={this.validationFunction('name')}
                />
                <div>
                    <div>Message</div>
                    <textarea 
                        value={this.state.text} 
                        onChange={this.handleTextForm('text')}
                        className={this.validationFunction('text')}
                    />
                </div>
            </div>
        )
    }
}