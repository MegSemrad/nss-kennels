/*
    - Remember: this looks like HTML but is in fact JSX - Javascript that looks like HTML
      this allows for better visualization of what code will look like in DOM
*/

import React from "react"
// Import react in every component 
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
// import { AnimalCard } from "./animal/AnimalCard.js"
// import { LocationCard } from "./location/LocationCard.js"
// import { CustomerCard } from "./customer/CustomerCard.js"
// import { EmployeeCard } from "./employee/EmployeeCard.js"
import "./Kennel.css"
// import "./animal/Animal.css"
// import "./location/Location.css"
// import "./customer/Customer.css"
// import "./employee/Employee.css"

// Note the () below instead of {} in the function 
export const Kennel = () => (
    /* <></> is a React.fragment and allows for content to be wrapped into single
       item as return can only return one thing 
    */ 
    <>
        <NavBar />
        <ApplicationViews />

        {/* 
        - cannot use "class" but rather must use "className" becuase
          this is javascript NOT HTML and "class" means something else
          in Javascript
        
        - "AnimalCard" is invoking AnimalCard function -- of course after "Kennel"
          function is invoked whereever 
        */}
        {/* <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article> */}
    </>
)