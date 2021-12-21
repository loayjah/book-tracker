import React, { Component } from 'react';
var has = require('lodash.has');

class ListBooks extends Component {

    isSelected = (thisValue, bookShelf) => {
        return bookShelf === thisValue ? 'true' : undefined;
    }

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
        const { books, onChangeShelf, booksInShelves } = this.props

        return (
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
                                    <select onChange={(e) => onChangeShelf(e, showingBook)} className='select-form' name="labels" id="lables">
                                        <option value="none" selected={this.isSelected('none', showingBook.shelf)}>None</option>
                                        <option value="currentlyReading" selected={this.isSelected('currentlyReading', showingBook.shelf)}>Currently reading</option>
                                        <option value="wantToRead" selected={this.isSelected('wantToRead', showingBook.shelf)}>Want to read</option>
                                        <option value="read" selected={this.isSelected('read', showingBook.shelf)}>Read</option>
                                    </select>
                                </form>
                                <div> <p>{showingBook.shelf}</p> </div>
                            </div>
                        </div>
                    </div>)
                    })}
            </div>
        )
    }

}

export default ListBooks;