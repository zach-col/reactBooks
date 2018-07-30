import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Search from './Search'
import Books from './Books'
import './App.css'
import PropTypes from 'prop-types'

class BooksApp extends React.Component {

  state = {
    books: [],
    query: '',
    noBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books } )
    })
  }



  updateBooks = (books, shelf) => {
    BooksAPI.update(books, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState( { books: books } )
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Books books={this.state.books} updateBooks={this.updateBooks}/> 
        )}/>
        <Route exact path="/Search" render={() => (
          <Search/> 
        )}/>


      </div>
    )
  }
}

export default BooksApp