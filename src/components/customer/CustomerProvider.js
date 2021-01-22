/* 
    - In React library there is feature called Context API and it 
      provides two functions (useState & createContext)
 */
import React, { useState, createContext } from "react";



// The context is imported and used by individual components that need data
export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers") //MIGHT NEED TO FIX!!!!!!!!!!!!
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomer = customerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

   
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomer
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
};