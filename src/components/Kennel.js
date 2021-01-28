/*
    - Remember: this looks like HTML but is in fact JSX - Javascript that looks like HTML
      this allows for better visualization of what code will look like in DOM

    - Kennel.js is called a "Container Component". It renders no HTML itself. It simply
      contains other components that are responsible for the presentation and behavior 
       of the application.

    - <></> is a React.fragment and allows for content to be wrapped into single
      item as return can only return one thing. So use with sibling components

    - Note the () below instead of {} in the function

    - Import react in every component
*/

 

import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";

 

export const Kennel = () => (
    <>
        <NavBar />             {/* Presentation Component */}
        <ApplicationViews />   {/* Controller Component */}
    </> 
);
