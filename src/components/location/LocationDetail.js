import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"
/*
 - useParams - a hook - allows us to grab any sth in that URL?
*/

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

    const {locationId} = useParams();  // returns is an object 

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
    </section>
  )
//   ? is optional chaining - fail safe - get around fact that there may or mayn ot be property of "name" 
}