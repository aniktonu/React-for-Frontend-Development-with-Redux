import React, {Component} from 'react';
import Book from './Components/Book';
import './App.css';
// import Person from './Components/Person';


// //class component
class App extends Component {
render () {

// let test = new Component();
// console.log(test);

   return (
    <div className='App'>
      <h1>Book List</h1>
    <Book bookName="1986" author="john doe"/>
    <Book bookName="1985" author="john cee"/>
    <Book bookName="1984" author="john koe"/>
    </div>
   )
}
}

export default App;