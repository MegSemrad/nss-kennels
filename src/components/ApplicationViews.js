/*
    - ApplicationViews.js is called a Controller Component. Its only 
      responsibility to to control the behavior of the system and maps 
      URLs to components. Nothing from here will end up in DOM. Only using
      it to control how rest of system behaves. 

    - "exact" is needed in the <Route> tag below to ensure you are going to 
      that exact location and not something similar 

    - <Link> and the <Route/> JSX elements are complementary to each other. 
      If you add a new Link element in your application with a new URL, then 
      you must create a matching Route element.

    - When ApplicationView.js is invoked in Kennel.js, it will render that which
      is below in order. That why the URL will have "/" at the end (see <Route exact path="/"> )
      below and will change only when user does differnet click
*/


import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>



            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
};

