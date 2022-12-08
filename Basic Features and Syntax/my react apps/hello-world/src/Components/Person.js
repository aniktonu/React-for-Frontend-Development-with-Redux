import React from 'react';


let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Name: {props.name}, and Age :{props.age} years</h1>
        </div>
    )

};

export default Person;