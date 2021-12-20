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
  this.setState(prevState => ({
    books: prevState.books.map(
      b => b.title === book.title ? { ...b, shelf: event.target.value } : b
    ),

    value: prevState.books.map(
        b => b.title === book.title ? b.shelf : ""
      ),
  
  }))
  
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
            <NavigationTabs onClickNav={this.onClickNav}/>
            <ListBooks books={this.getShowingBooks()}
                  onChangeShelf={this.onChangeShelf} />
          </div> )} 
      />

      <Route path='/search' element= {(
          <div>
            <SearchPage books={this.state.books}
                  onChangeShelf={this.onChangeShelf} />
          </div> )} 
      />
    </Routes>
    </div>
)}
}

export default App;