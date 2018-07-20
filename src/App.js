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
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState( { books } )
    })
  }

  handleChange() {
    console.log("hello world")
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Books books={this.state.books}
/> 
        )}/>
        <Route exact path="/Search" render={() => (
          <Search books={this.state.books} /> 
        )}/>


      </div>
    )
  }
}

export default BooksApp