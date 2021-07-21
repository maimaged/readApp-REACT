import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


/* here we install react router dom and used BrowserRouter to wrap all the application in it*/ 
ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'))
