import React from "react";
import Book from "../representational/Book";

const BookList = (props) => {

    return (
        props.books.map((item, index) => {
    
            return (
              <Book bookname={item.bookname} and
              author={item.author}
              delete= {() => this.deletestate(index)}
              key={item.id}
              inputName={(event) => this.changeWithInputState(event,index)}
              />
            );
            })

    )
}


    export default BookList;