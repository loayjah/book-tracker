import React, { Component } from 'react';


class ListBooks extends Component {

    state = {
        books: [
            {
                "title": "The Linux Command Line",
                "author": "William E. Shotts, Jr.",
                "averageRating": 4,
                "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                "title": "Learning Web Development with React and Bootstrap",
                "author": "Harmeet Singh",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                "title": "Lords of Finance",
                "author": "Liaquat Ahamed",
                "averageRating": 4.5,
                "thumbnail": "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                "title": "Needful Things",
                "author": "Stephen King",
                "averageRating": 3.5,
                "thumbnail": "http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
        ]
    }

    render() {

        const items = []

        for (var i = 0; i < 9; i++) {
            items.push(<div className='list-item'>
            <div className='book-info-container'>
                <img className='book-img' src='http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api' alt='book-title'></img>
                <div className='book-header'>
                    <h3 className='book-title'>The title of the book this is a long title</h3>
                    <p className='book-rating'>4.3</p>
                </div>
                <p className='book-author'>By William Shotts</p>
                <form className='select-form'>
                    <select name="labels" id="lables">
                        <option value="currently-reading">Currently reading</option>
                        <option value="want-to-read">Want to read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </form>                    
            </div>
        </div>);
        }

        return (
            <div className='list-items-grid'>
                {items}
            </div>
        )
    }

}

export default ListBooks;