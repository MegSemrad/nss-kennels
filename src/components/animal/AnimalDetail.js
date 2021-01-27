import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';
/*
 - useParams - a hook - allows us to grab any sth in that URL?
*/

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

    const {animalId} = useParams();  // returns is an object 

  useEffect(() => { //allows you to establish a method of running code at a parti moment of the state of your component -- it is a hook -- what to call it when an event happens that will change the state in the app -- mainagement of the state of the app -- one purpose is when you need to communication with sth outside of your app such as an API or session
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    }, [])

    const history = useHistory()

const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animals") //to go to a new URL as we would be deleting the animal whose page we are on
      })
  }

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      {/* .location is a nested value we get back when we use _expand -- same with customer below */}
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>Release Animal</button>
      <button onClick={() => {
        history.push(`/animals/edit/${animal.id}`) // this says when users clicks Edit button, "take" them to a new URL -- which can be seen in ApplicationView.js
        }}>Edit</button>
    </section>
  )
//   ? is optional chaining - fail safe - get around fact that there may or mayn ot be property of "name" 
}