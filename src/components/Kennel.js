/*
    - Remember: this looks like HTML but is in fact JSX - Javascript that looks like HTML
      this allows for better visualization of what code will look like in DOM
*/

// Import react in every component 
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

 
/* 
    - <></> is a React.fragment and allows for content to be wrapped into single
      item as return can only return one thing 
    - Note the () below instead of {} in the function
*/ 

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)