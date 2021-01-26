import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams } from "react-router-dom"
/*
 - useParams - a hook - allows us to grab any sth in that URL?
*/

export const AnimalDetail = () => {
  const { getAnimalById } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

    const {animalId} = useParams();  // returns is an object 

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      {/* .location is a nested value we get back when we use _expand -- same with customer below */}
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
    </section>
  )
//   ? is optional chaining - fail safe - get around fact that there may or mayn ot be property of "name" 
}