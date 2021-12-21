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
        const { books, onChangeShelf } = this.props

        return (
            <div className='list-items-grid'>
                { books.map((book, index) => {
                    if (!has(book, 'title')) return (<div></div>)
                    
                    const bookInfo = {
                        thumbnail: has(book, 'imageLinks.thumbnail') ? book.imageLinks.thumbnail : "",
                        authors:  has(book, 'authors') ? this.authorTitle(book.authors) : "",
                    }

                return(
                    <div className='list-item' key={index}>
                        <div className='book-info-container'>
                            <div className='info-wrapper'>
                                <img className='book-img' src={bookInfo.thumbnail}></img>
                                <div className='book-header'>
                                    <h3 className='book-title'>{book.title}</h3>
                                    <p className='book-rating'>{book.averageRating}</p>
                                </div>
                                <p className='book-author' >{bookInfo.authors}</p>
                            </div>
                            <div className='form-container'>
                                <form>
                                    <select onChange={(e) => onChangeShelf(e, book)} className='select-form' name="labels" id="lables">
                                        <option value="none" selected={this.isSelected('none', book.shelf)}>None</option>
                                        <option value="currentlyReading" selected={this.isSelected('currentlyReading', book.shelf)}>Currently reading</option>
                                        <option value="wantToRead" selected={this.isSelected('wantToRead', book.shelf)}>Want to read</option>
                                        <option value="read" selected={this.isSelected('read', book.shelf)}>Read</option>
                                    </select>
                                </form>
                                <div> <p>{book.shelf}</p> </div>
                            </div>
                        </div>
                    </div>)
                    })}
            </div>
        )
    }

}

export default ListBooks;