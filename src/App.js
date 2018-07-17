import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import Search from './Search'
import Books from './Books'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getALL().then((books) => {
      this.setState( books )
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Books books={this.state.books}
/> 
        )}/>
        <Route exact path="/Search" render={() => (
          <Books /> 
        )}/>


      </div>
    )
  }
}

export default BooksApp
