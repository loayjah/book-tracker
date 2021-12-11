import React, { Component } from 'react';


class ListBooks extends Component {

    handleChange = (event, book) => {

        this.setState(prevState => ({

            books: prevState.books.map(
              b => b.title === book.title ? { ...b, shelf: event.target.value } : b
            )
          
          }))

          this.setState(prevState => ({
            books: prevState.books.map(
              b => b.title === book.title ? { ...b, shelf: event.target.value } : b
            ),

            value: prevState.books.map(
                b => b.title === book.title ? b.shelf : ""
              ),
          
          }))
      };

    isSelected = (thisValue, bookShelf) => {
        return bookShelf === thisValue ? 'true' : undefined;
    }

    render() {
        const { books } = this.props

        return (
            <div className='list-items-grid'>
                { books.map(book => {
                        return(
                    <div className='list-item' key={book.title}>
                        <div className='book-info-container'>
                            <div className='info-wrapper'>
                                <img className='book-img' src={book.thumbnail}></img>
                                <div className='book-header'>
                                    <h3 className='book-title'>{book.title}</h3>
                                    <p className='book-rating'>{book.averageRating}</p>
                                </div>
                                <p className='book-author'>By {book.author}</p>
                            </div>
                            <div className='form-container'>
                                <form>
                                    <select onChange={(e) => this.handleChange(e, book)} className='select-form' name="labels" id="lables">
                                        <option value="currentlyReading" selected={this.isSelected('currentlyReading', book.shelf)}>Currently reading</option>
                                        <option value="wantToRead" selected={this.isSelected('wantToRead', book.shelf)}>Want to read</option>
                                        <option value="read" selected={this.isSelected('read', book.shelf)}>Read</option>
                                        <option value="none" selected={this.isSelected('none', book.shelf)}>None</option>
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