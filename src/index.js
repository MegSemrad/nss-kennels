/*
  - database in a different directory but will need this...
  json-server -p 8088 -w database.json
*/


/*
  - React is a library that manages how data is displayed to the user,
    but it does not care about the database/how it is retrieved/how 
    complex it the rest of the application is

  - Some of the things React can do...
    1. Building components and child components
    2. Modular code with JavaScript modules
    3. Updating the DOM with document elements or string templates
    4. Setting the state of a component

  - index.js is the entry file/the JavaScript file that runs 
    first in our app 
  - This is why Kennel.js is imported here. 

  - render means send to DOM
  - render takes two arguments - component & element where sending it
  - <Kennel /> looks like an HTML element but this component is a factory function 
    and returns an object
  - Remember: this looks like HTML but is in fact JSX (a syntax extension to Javascript)
    - Javascript that looks like HTML this allows for better visualization of
    what code will look like in DOM

  - <Router> is imported from the React Router package, and signals to React
    you will be placing routes in the Kennel component (because <Router></Router>
    are placed around <Kennel />)
*/



import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Kennel } from "./components/Kennel";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
) ;