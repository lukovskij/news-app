import React, {Component} from 'react'

// main components
import ArticleList from './ArticleList'
import Filters from './Filters'

export default function App() {
    return (
        <div>
            <Filters/>
            <ArticleList />
        </div>
    )
}

