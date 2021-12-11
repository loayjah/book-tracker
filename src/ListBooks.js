import React, { Component } from 'react';


class ListBooks extends Component {

    state = {
        books: [
            {
                "title": "The Linux Command Line",
                "author": "William E. Shotts, Jr.",
                "averageRating": 4,
                "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                "shelf": "currentlyReading"
            },
            {
                "title": "Learning Web Development with React and Bootstrap",
                "author": "Harmeet Singh",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                "shelf": "wantToRead"
            },
            {
                "title": "Lords of Finance",
                "author": "Liaquat Ahamed",
                "averageRating": 4.5,
                "thumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                "shelf": "wantToRead"
            },
            {
                "title": "Needful Things",
                "author": "Stephen King",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                "shelf": "currentlyReading"
            },
            {
                "title": "The Cuckoo's Calling",
                "author": "Robert Galbraith",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                "shelf": "currentlyReading"
            },
            {
                "title": "React",
                "author": "Nils Hartmann",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                "shelf": "wantToRead"
            },
            {
                "title": "Satire TV",
                "author": "Jonathan Gray",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "shelf": "currentlyReading"
            },
        ], value: '?',
    }

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
        return (
            <div className='list-items-grid'>
                { this.state.books.map(book => {
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