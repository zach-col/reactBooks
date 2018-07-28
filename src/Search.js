import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

  state = {
    books: [],
    query: '',
    noBooks: []
  }

  updateBooks(book, shelf){
    BooksAPI.update(book, shelf).then((books) => {
        this.setState( { books } )
        console.log(this.state.books)
    })
  }


  updateQuery(query){
    this.setState({query: query})
    BooksAPI.search(query).then((books) => {
      if(books.error){
        this.setState({ books: [] })
      } else {
        this.setState({books: books})
      }
    }).catch((e) => {
      this.setState({ books: []})
    })
  }

  render() {
    let showingBooks
    if (this.state.books) {
      showingBooks = this.state.books
    } else {
      showingBooks = []
    }
    return (

    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((books) =>(
            <li key={books.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select onChange={(event) => this.updateBooks(books, event.target.value)} defaultValue={books.shelf} >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{books.title}</div>
                <div className="book-authors">{books.authors}</div>
              </div>
            </li>

          ))}
        </ol>
      </div>
    </div>

    )
  }
}

export default Search