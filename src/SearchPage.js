import HeaderComponent from './HeaderComponent'
import React, { Component } from 'react';
import ListBooks from './ListBooks';


class SearchPage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <HeaderComponent />
                <div class="search-container">
                    <input class="search-input" type="text" placeholder="Search..."/>
                </div>
                <ListBooks books={this.props.books}
                onChangeShelf={this.props.onChangeShelf} />
            </div>
        )
    }
}

export default SearchPage;