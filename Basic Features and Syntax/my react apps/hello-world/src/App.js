import React, { Component } from 'react'
import Book from './Components/Book'
import './App.css'

class App extends Component {

// constructor () {
//     super();
//     this.state = {
//       books: []
//     }
//   }

state = {
    books: [
      {bookname: 'The Alchemist', author: 'Paulo Coelho'},
      {bookname: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma'},
      {bookname: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy'}
    ],
    otherState: 'some other value'

}

changeState = (newBookName) => {
  this.setState({
    books: [
      {bookname: newBookName, author: 'gtrg g rtgh'},
      {bookname: ' gt tgt h thghr', author: ' htrh'},
      {bookname: 'T rhrth rh', author: 'hhhh rthrthr '}
    ]
  })
}

chnageWithInputState = (event) => {
  this.setState({
    books: [
      {bookname: event.target.value, author: 'gtrg g rtgh'},
      {bookname: ' gt tgt h thghr', author: ' htrh'},
      {bookname: 'T rhrth rh', author: 'hhhh rthrthr '}
    ]
  })
}

  render() {

    return (
      <div className='App'>
        <h1>Book List</h1>
        <button onClick={this.changeState.bind(this,"anik hasan")}>Change State</button>
        <input  type="text" onChange={this.chnageWithInputState }/>
        <Book bookname={this.state.books[0].bookname} and 
        author={this.state.books[0].author}
        inputName={this.chnageWithInputState}/>
        <Book bookname={this.state.books[1].bookname} and 
        author={this.state.books[1].author}/>
        <Book bookname={this.state.books[2].bookname} and 
        author={this.state.books[2].author} 
        change={this.changeState.bind(this,"The Alchemist")}
        />
      </div>
    )
  }
}



export default App;
