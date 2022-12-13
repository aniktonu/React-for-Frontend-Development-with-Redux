import React from 'react';

const Person = (props) => {

return (
<div className='App'>
<h1>Name : {props.name} and Age : {props.age}</h1>
<p>Extra Info : {props.children}</p>
</div>
)

}


  export default Person;

// import React, { Component } from 'react';

// class Person extends Component {
//     constructor (props) {
//         super(props);

//     }
//     render () {
//         return (
//             <div><h1>Name : {this.props.name} And Age:{this.props.age}</h1></div>
//         )

//     }
// }

// export default Person;
