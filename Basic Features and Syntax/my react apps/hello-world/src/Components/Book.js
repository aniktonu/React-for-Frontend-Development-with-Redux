import React from "react";


const Book= (props) =>{
 return (
<div>
    <h3>Book Name : {props.bookName}</h3>
    <h4>Author : {props.author}</h4>
</div>
 )
}


export default Book;