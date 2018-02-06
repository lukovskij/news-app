import React, { Component } from 'react'

// main components
import ArticleList from './ArticleList'
import UserForm from './UserForm'

export default class App extends Component {

    render(){

        return(
            <div>
                <UserForm articles= { this.props.articles }/>
                <ArticleList articles={ this.props.articles }/>
            </div>
        )
    }

}