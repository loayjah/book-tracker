import React, { Component } from 'react';
var has = require('lodash.has');

class ListBooks extends Component {

    authorTitle = (bookAuthors) => {
        let authorsTitle = ''
        if (bookAuthors.length > 0) {
            authorsTitle += 'By ' + bookAuthors[0]
        }
        if (bookAuthors.length > 1) {
            authorsTitle += ", et al."
        }
        
        return authorsTitle
    }
    
    render() {
        const { books, onChangeShelf, booksInShelves, query } = this.props

        return (
            <div>
                <div className='list-items-grid'>
                    { books.map((book, index) => {
                        if (!has(book, 'title')) return (<div></div>)

                        var showingBook = book

                        if(!!booksInShelves) {
                            var bookInShleves = booksInShelves.filter((b) => (b.id === book.id))[0]
                            if (bookInShleves !== undefined) {
                                showingBook = bookInShleves
                            }
                        }

                        const bookInfo = {
                            thumbnail: has(showingBook, 'imageLinks.thumbnail') ? showingBook.imageLinks.thumbnail : "",
                            authors:  has(showingBook, 'authors') ? this.authorTitle(showingBook.authors) : "",
                        }

                    return(
                        <div className='list-item' key={index}>
                            <div className='book-info-container'>
                                <div className='info-wrapper'>
                                    <img className='book-img' src={bookInfo.thumbnail}></img>
                                    <div className='book-header'>
                                        <h3 className='book-title'>{showingBook.title}</h3>
                                        <p className='book-rating'>{showingBook.averageRating}</p>
                                    </div>
                                    <p className='book-author' >{bookInfo.authors}</p>
                                </div>
                                <div className='form-container'>
                                    <form>
                                        <select value={showingBook.shelf} onChange={(e) => onChangeShelf(e, showingBook)} className='select-form'>
                                            <option value="none">None</option>
                                            <option value="currentlyReading">Currently reading</option>
                                            <option value="wantToRead">Want to read</option>
                                            <option value="read">Read</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>)
                        })}
                </div>
                {(books.length < 1 && booksInShelves === undefined)? <p className='no-books-existed'>You don't have any books in this category</p> : ""}
                {(books.length < 1 && booksInShelves && !!query) ? <p className='no-books-existed'>Can't find any book with this search term</p> : ""}
            </div>
        )
    }

}

export default ListBooks;