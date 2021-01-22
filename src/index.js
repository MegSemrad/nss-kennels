/*
  - database in a different directory but will need this...
  json-server -p 8088 -w database.json
*/


/*
  - React is a library, it does not care about the database

  - index.js is the entry file/the JavaScript file that runs 
    first in our app 
  - This is why Kennel.js is imported here. 
*/

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel"
import './index.css'

/*
  - render means send to DOM
  - render takes two arguments - component & element where sending it
  - <Kennel /> is just calling the Kennel function 
  - Remember: this looks like HTML but is in fact JSX - Javascript 
    that looks like HTML this allows for better visualization of
    what code will look like in DOM
*/
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);