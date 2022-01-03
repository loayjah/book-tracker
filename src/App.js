import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent'
import ListBooks from './ListBooks';
import React, { Component } from 'react';
import NavigationTabs from './NavigationTabs';
import SearchPage from './SearchPage';
import { Link, Route, Routes } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: [],
    currentTab: 'currentlyReading',
}

componentDidMount() {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(
      {
        books: books
      })
  })
  }

  onChangeShelf = (event, book) => {
    
    if (this.state.books.filter(b => b.title === book.title).length < 1) {
      this.setState({ books: [...this.state.books, {...book, shelf: event.target.value }]}, ()=> {})
    }
  
    else {
    this.setState(prevState => ({
      books: prevState.books.map(
        b => b.title === book.title ? { ...b, shelf: event.target.value } : b
      ),
    
    }), ()=> {})
    }
  
    BooksAPI.update(book, event.target.value)
  };

onClickNav = (value) => {
  this.setState({
    currentTab: value
  }, ()=> {} /* callback for instance update of state*/ )

}

getShowingBooks = () => {

  if (this.state.currentTab !== 'all') {
    return this.state.books.filter((b) => (
       b.shelf === this.state.currentTab
    ))
  }

  return this.state.books;
}



  render() {
    return (
    <div>
    <Routes>
      <Route path="/" element={(
          <div>
            <Link to='/search' className='add-book-button'/>
            <HeaderComponent />
            <NavigationTabs currentTab={this.state.currentTab} onClickNav={this.onClickNav}/>
            <ListBooks books={this.getShowingBooks()}
                  onChangeShelf={this.onChangeShelf} />
          </div> )} 
      />

      <Route path='/search' element= {(
          <div>
            <SearchPage booksInShelves={this.state.books}
                  onChangeShelf={this.onChangeShelf} />          
                  </div> )} 
      />
    </Routes>
    </div>
)}
}

export default App;