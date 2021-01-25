/*
    - NavigationBar.js is called a "Presentation Component" and it directly
      expresses HTML

    - Affordance so user can select what they want displayed on the DOM
    - react-router-dom is another library  
    - { Link } is a prebuilt component and has a attribute call "to" 
      which will render a hyperlink in the DOM that will change the URL
      in the browser to the value of the "to" attribute. Also when the 
      hyperlink is clicked that code will dictate which component
      will be rendered
    - <Link> and the <Route/> JSX elements are complementary to each other. 
      If you add a new Link element in your application with a new URL, then 
      you must create a matching Route element.(Can see the <Route> in ApplicationView.js)
*/



import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Kennels</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Animals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
        </ul>
    )
};