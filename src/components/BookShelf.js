import React , { Component } from  'react'
import MyBooks from './MyBooks'

class BookShelf extends Component{
    render(){
        return(
               < div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                   <div className="bookshelf-books">
                       <ol className="books-grid">
                         < MyBooks/>
                       </ol>
                   </div>
                </div>
        )
    }
}
export default BookShelf