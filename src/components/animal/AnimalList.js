import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
// Pulling in object above 
import { AnimalCard } from "./AnimalCard"
// Pulling in reusable component above 
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
//   useEffect is a function that takes two arguments (?) (anonymous function, )
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()

  }, [])


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}