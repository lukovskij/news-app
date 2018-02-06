import React, { Component } from 'react'

// main components
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import DatePicker from './DatePicker'

export default class App extends Component {

    render(){

        return(
            <div>
                <UserForm articles= { this.props.articles }/>
                <div style={{margin:"20px 0"}}>
                    <DatePicker/>
                </div>
                <ArticleList articles={ this.props.articles }/>
            </div>
        )
    }

}