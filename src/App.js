import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HeaderComponent'
import ListBooks from './ListBooks';
import React, { Component } from 'react';
import NavigationTabs from './NavigationTabs';


class App extends Component {

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
    currentTab: 'currentlyReading'
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
      <HeaderComponent />
      <NavigationTabs onClickNav={this.onClickNav}/>
      <ListBooks books={this.getShowingBooks()}
                onChangeShelf={this.onChangeShelf} />
    </div>
    )}
    
}

export default App;