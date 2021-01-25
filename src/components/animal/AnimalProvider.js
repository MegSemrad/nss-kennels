/* 
    - In React library there is feature called Context API and it 
      provides two methods (useState & createContext)
    - Simply put...
        1. useState = 
        2. createContext = making an object with the data, that will be used by other components 
 */
import React, { useState, createContext } from "react";



// The context is imported and used by individual components that need data (basically: making 
// an object and storing it in variable AnimalContext)
export const AnimalContext = createContext();

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([]) 
    /* 
        - The above line is a React hook, which is a built in function in React, and we have to import useState 
          at top of page & this is how we set up what the state will be of any component 
        - "animals" is us delcaring a state variable -- so we tell React this is the state and when we change 
          that state that makes a trigger reaction so any component using that state will be updated/changes 
          how the related components are rendered in the DOM -- so React updates the DOM for us
        - "setAnimals" is HOW we change it -- HAVE to use naming convention "setSomething" -- it is a 
          function that when called will change the value of "animals" 
        - so useState returns an ARRAY (--with two things)
        - "[animals, setAnimals]" is array destructoring - so an array is returned and whatever the first ting in 
          the array is the value of "animals" and the second thing returned in the array is the value of "setAnimals"
        - Whenever referencing "setAnimals" we are calling the function whose job is to change the value of animals
        - But must have empty array passed into useState([]) like so so that the initial value is an empty array 
          and this matters because 
    */

    // REMEMBER: these four functions within getAnimals will not be called until getAnimals is
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
        .then(res => res.json())
        .then(setAnimals) // referencing setAnimals function and therefore changing the state variable "animals"
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

        - This below is what is returned from this entire AnimalProvider function 
        - .Provider is how other components can get (when using) whatever AnimalProvider provides 
          and so "value" is used to expose 
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
};