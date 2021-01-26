/*
    - This component is a child of the Kennel component
    - Note "className" is used to add a class and not "class" itself

    - AnimalCard is a reusable component that can be called multiple times 

    - We are using <Link> below on the animal name so the name itself becomes a hyperlink. The
      corresponding <Route> link is in ApplicationViews.js - 

*/


import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


export const AnimalCard = ({ animal }) => {
  return (
    <section className="animal">
      <h3 className="animal__name">
        <Link to={`/animals/detail/${animal.id}`}> 
          { animal.name }
        </Link>
      </h3>
      <div className="animal__breed">{ animal.breed }</div>
  </section>
)}