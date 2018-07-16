import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Search from './Search'
import Books from './Books'
import './App.css'

class BooksApp extends React.Component {


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Books/> 
        )}/>
        <Route exact path="/Search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
