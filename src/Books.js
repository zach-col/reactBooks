import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Books extends Component {
  
	render() {
	      console.log(this.props.books)

		return (
	  <div className="list-books">
	    <div className="list-books-title">
	      <h1>MyReads</h1>
	    </div>
	    <div className="list-books-content">
	      <div>
	        <div className="bookshelf">
	          <h2 className="bookshelf-title">Currently Reading</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	              {this.props.books.filter(books => books.shelf === "currentlyReading").map((books) =>(

	                  <li key={books.id}>
	                    <div className="book">
	                      <div className="book-top">
	                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
	                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.props.updateBooks(books, event.target.value)} defaultValue={books.shelf} >
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

	        <div className="bookshelf">
	          <h2 className="bookshelf-title">Want to Read</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	              {this.props.books.filter(books => books.shelf === "wantToRead").map((books) =>(

	                  <li key={books.id}>
	                    <div className="book">
	                      <div className="book-top">
	                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
	                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.props.updateBooks(books, event.target.value)} defaultValue={books.shelf} >
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

	        <div className="bookshelf">
	          <h2 className="bookshelf-title">Read</h2>
	          <div className="bookshelf-books">
	            <ol className="books-grid">
	              {this.props.books.filter(books => books.shelf === "read").map((books) =>(

	                  <li key={books.id}>
	                    <div className="book">
	                      <div className="book-top">
	                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
	                        <div className="book-shelf-changer">
                            <select onChange={(event) => this.props.updateBooks(books, event.target.value)} defaultValue={books.shelf} >
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
	      </div>
	    </div>



	    <div className="open-search">
	    	<Link
	    	  to="/Search"
	    	>Add a book</Link>

	    </div>
	  </div>



		)
	}
}


	  



export default Books