import React, { Component } from 'react';// covert html from jsx code
import './App.css';
import Person from './Components/Person';

// //JSX
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//       <Person />
//     </div>
//   )
// };


class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Person name="Anik" and age='30' />
        <Person name="Hasan" and age='20' />
        <Person name="Ahmed" and age='10' />
        <Person name="Tonu" and age='50' />
      </div>
    )
  }
}


// //JSX
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//       <Person />
//     </div>
//   )
//   // return React.createElement('div', { className: "App" }, createElement('h1', null, 'Hello world'), < Person />);
// };




// function Person() {
//   return (
//     <div>
//       <h1>this is person component </h1>
//     </div>
//   )
//   // return React.createElement('div', null, React.createElement('h1', null, 'This is person component'));
// }


export default App;
