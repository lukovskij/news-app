import React, { Component } from 'react'

// main components
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import DatePicker from './DatePicker'

export default class App extends Component {

    state = {
        articlesElements : this.props.articles
    }

    handleChangeArticle = ( arrayIds ) => {
       let { articles } = this.props

        let newArry = articles.filter( item => {
            for(let i = 0, lng =  arrayIds.length; i < lng; i++){
                if(item.id === arrayIds[i].value){
                    return item
                }
            } 
        })

        this.setState({
            articlesElements : newArry
        })
    } 

    render(){

        return(
            <div>
                <UserForm articles= { this.props.articles } onHandleChangeArticle = { this.handleChangeArticle }/>
                <div style={{margin:"20px 0"}}>
                    <DatePicker/>
                </div>
                <ArticleList articles={ this.state.articlesElements }/>
            </div>
        )
    }

}