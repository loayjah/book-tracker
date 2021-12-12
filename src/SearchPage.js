import HeaderComponent from './HeaderComponent'
import React, { Component } from 'react';
import ListBooks from './ListBooks';


class SearchPage extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    render() {
        const { query } = this.state;
        const { books } = this.props;

        const showingBooks = query === ''
        ? books
        : books.filter((b) => (
            b.title.toLowerCase().includes(query.toLowerCase())
        ))

        return (
            <div>
                <div className='back-link'>
                </div>
                <HeaderComponent />
                <div class="search-container">
                    <input class="search-input" type="text" placeholder="Search..."
                           value={query}
                           onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
                <ListBooks books={showingBooks}
                onChangeShelf={this.props.onChangeShelf} />
            </div>
        )
    }
}

export default SearchPage;