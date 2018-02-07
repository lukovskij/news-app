import React, { Component } from 'react'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class UserForm extends Component {

    state = {
        name : '',
        selectChange : null
    }

    changeText = (ev) => {
        this.setState({
            name : ev.target.value
        })
    }

    handleSelectChange = (selectOption) => {
        this.setState({
            selectChange : selectOption
        })
        console.log(selectOption)

        this.props.onHandleChangeArticle(selectOption)
    }

    render(){
        const {articles} = this.props

        const options = articles.map(item => {
            return {
                value : item.id,
                label : item.title
            }
        })

        return(
            <section>
                <div style={{marginBottom : '20px'}}>
                    Name : <input type="text" value={this.state.name} onChange={this.changeText}/>
                </div>
                <Select
                    name="articles-select"
                    value = {this.state.selectChange}
                    onChange = {this.handleSelectChange}
                    options = {options}
                    multi
                />
            </section>
        )
    }

}
