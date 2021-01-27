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
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationForm } from "./location/LocationForm";
import { LocationDetail } from "./location/LocationDetail";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";
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
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)"> 
                        {/* user brought to the above URL upon clicking Edit button 
                        from AniamlDetails.js -- therefore the AnimalForm will be rendered */}
                            <AnimalForm />
                        </Route>
                </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* the ":" below indicates it will not be "animalId" explicitly
                but rather the actual animalId value  */}
            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>



            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>



            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
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

