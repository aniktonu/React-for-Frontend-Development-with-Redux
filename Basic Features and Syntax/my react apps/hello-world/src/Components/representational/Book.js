import React from 'react';
import './Book.css';

const Book = (props) =>{
  return (
    <div className=''>
        
        <h3 onClick={props.delete}> Book : {props.bookname}</h3>
        <h4>Writer :  {props.author}</h4>
        <input type="text" onChange={props.inputName} value={props.bookname}/>
    </div>
  )
}


export default Book;