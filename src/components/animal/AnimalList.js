import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider";
// import { LocationContext } from "../location/LocationProvider";
// import { CustomerContext } from "../customer/CustomerProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";
// When you see "..." in example code, it basically means "etc"


/*
  - This state changes when `getAnimals()` is invoked below
  - useContext is taking the data from AnimalContext and storing animals and getAnimals locally
*/
export const AnimalList = () => {
    // defining these as local variables
  const { animals, getAnimals } = useContext(AnimalContext)
  const history = useHistory()
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)
  

/* 
    - useEffect only runs once and that is on initial load

    - useEffect is a function that takes two arguments (an anonymous function definition & an empty 
      array into which we are passing our animals)
    - the first function is called when AnimalList is first called 
    - when useEffect is called it is basically setting up an eventListener
*/ 

// useEffect(getAnimals, []) OR CAN USE THIS -- NOTE THE () DIFFERENCE
  useEffect(() => {
    console.log("AnimalList: Initial render before data") 
        // getLocations()
        // .then(getCustomers)
        // .then(getAnimals) 
        getAnimals()
    }, []);


  return (
    <div className="animals">
        <h2>Animals</h2>
		    <button onClick={() => {history.push("/animals/create")}}>
                Add Animal
            </button>
        {animals.map(animal => {
            // const owner = customers.find(c => c.id === animal.customerId)
            // const clinic = locations.find(l => l.id === animal.locationId)
        
            return <AnimalCard key={animal.id} //argument
                        // location={clinic} //argument
                        // owner={owner} //argument
                        animal={animal} /> //argument
        })
        }
    </div>
  )
};