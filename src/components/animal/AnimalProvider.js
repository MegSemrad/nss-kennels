/* 
    - In React library there is feature called Context API and it 
      provides two functions (useState & createContext)
 */
import React, { useState, createContext } from "react";



// The context is imported and used by individual components that need data
export const AnimalContext = createContext();

// What is the hook? -- listen for when watch recording 

/* 
    - This component establishes what data can be used.
    - Line 11 returns an array not because of the ([]) but because of 
      the [animals, setAnimals] array
    - Also the [animals, setAnimals] array is array destructuring 
    - [animals] is state variable
    - [setAnimals] is name of function that when called will change value(?) 
*/
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(res => res.json())
        .then(setAnimals)
    };

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    };

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
};