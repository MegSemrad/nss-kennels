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

  const { locationId } = useParams();  // returns is an object 

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then((response) => {
        console.log("response", response)
        setLocation(response)
      })
  }, [])




  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <h3 className="location__employee__header">Employees</h3>
        {
          location.employees?.map((e) => {
            return <div className="location__employee__names">{e.name}</div>
          })
        } 
      <h3 className="location__animal__header">Current Residents</h3>
        {
          location.animals?.map((a) => {
            return <div className="location__animal__names">{a.name}</div>
          })
        }
    </section>
  )
  //   ? is optional chaining - fail safe - get around fact that there may or mayn ot be property of "name" 
}
/*
  - for above Lines 32-42 (the ones that deal with .map) -- you cannot declare new variables within if need to use a function
    also had to add a "?" after employees because going two levels deep and upon initial upload an empty object is rendered
    and if do not have a ? it will throw an error
*/
