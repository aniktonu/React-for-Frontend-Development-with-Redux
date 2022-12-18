import React, {Component} from "react";
import BookList from "./lists/BookList";
import booklist from "../assets/booklist";




class MainComponent extends Component {

    // constructor () {
    //     super();
    //     this.state = {
    //       books: []
    //     }
    //   }
    
    state = {
        books: booklist,
        showBooks: true
    
    }
    
    deletestate = (index) => {
      const books = [...this.state.books];
      books.splice(index,1);
      this.setState({books:books});
    }
    
    
      changeWithInputState = (event,index) => {
      const books = [...this.state.books];
      books[index].bookname = event.target.value;
      this.setState({books:books});
    }
    
    
    
    
    toggleButton = () => {
      this.setState({showBooks:!this.state.showBooks});
    
    
    }
    
      render() {
        const style = {
          backgroundColor: "black",
          color: "white",
          border: '1px solid blue',
          borderRadius: '5px',
        };
    
    
        let updateBooks = null;
        if(this.state.showBooks){
          updateBooks = <BookList books={this.state.books}/>
          }


        return (
          <div className='App'>
             <h1 style={style}>Book List</h1>
            <button onClick={this.toggleButton}>Toggle Button</button>
            
            {updateBooks}
            
          </div>
        )
      }
    }








export default MainComponent;
