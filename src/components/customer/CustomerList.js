import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
// Pulling in object above 
import { CustomerCard } from "./CustomerCard";
// Pulling in reusable component above 
import "./Customer.css";

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
//   useEffect is a function that takes two arguments (?) (anonymous function, )
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()

  }, [])


  return (
    <div className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
      }
    </div>
  )
};