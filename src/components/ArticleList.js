import React from 'react'
import Article from './Article'

export default function ArticleList (props){
  const { articles } = props;
  const articlesArray = articles.map(item => <li key={item.id}><Article article={item}/></li>)

  return (
    <ul>
      {articlesArray}
    </ul>
  )
}
