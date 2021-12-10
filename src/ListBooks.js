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
                "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
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
        ]
    }

    render() {

        return (
            <div className='list-items-grid'>
                { this.state.books.map(book => {
                        return(
                    <div className='list-item'>
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
                                    <select className='select-form' name="labels" id="lables">
                                        <option value="currently-reading">Currently reading</option>
                                        <option value="want-to-read">Want to read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </form>  
                            </div>
                        </div>
                    </div>)
                    })}
            </div>
        )
    }

}

export default ListBooks;