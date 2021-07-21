import React ,{ Component} from 'react'
import BookShelf from './BookShelf.js'
import AddBookButton from './AddBookButton.js'
import {getAll} from '../BooksAPI.js'
class MainPage extends Component{
  state={
    books:[],
    currentlyReading:[],
    wantToRead:[],
    read:[],
    addBooks: books=>{
      
    }
  }
  async componentDidMount(){

    try{
      const books= await getAll();
      const currentlyReading=books.filter(book =>book.shelf='curentlyReading')
      const wantToRead=books.filter(book =>book.shelf='wantToRead')
      const read=books.filter(book =>book.shelf='read')
      console.log(books)
    }catch ( error){
      console.log(error)
    }
  }
    render(){
        return(
     <div className="list-books"> 
          
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            
              
              <BookShelf title='currently reading'/>
              <BookShelf title='want to read'/>
              <BookShelf title='read'/>
          </div>
          <AddBookButton/>
        </div>
             
             
        )
    }
}
export default MainPage