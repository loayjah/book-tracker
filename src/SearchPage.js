import HeaderComponent from './HeaderComponent'
import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query }, this.updateBooks(query))
    }

    updateBooks = (query) => {
        BooksAPI.search(!!query.trim() ? query.trim() : "*").then((showingBooks) => {
            this.setState({
                books: (showingBooks !== undefined && Array.isArray(showingBooks)) ? showingBooks : []
            }, ()=>{})
        })
    }

    render() {

        const { query, books } = this.state;

        return (
            <div>
                <Link to='/' className='back-link'></Link>
                <HeaderComponent />
                <div class="search-container">
                    <input class="search-input" type="text" placeholder="Search..."
                           value={query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
                <ListBooks books={books}
                onChangeShelf={this.props.onChangeShelf} />
            </div>
        )
    }
}

export default SearchPage;