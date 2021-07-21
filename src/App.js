import React from 'react'
import './App.css'
import Search from './components/Search.js'
import {Route , Switch} from 'react-router-dom'
import MainPage from './components/MainPage.js'


class BooksApp extends React.Component {
  
  
   
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path ={'/'} component={MainPage}/>
          <Route exact path={'/search'} component={Search}/>
        </Switch>
         
      </div>
    )
  }
}

export default BooksApp
