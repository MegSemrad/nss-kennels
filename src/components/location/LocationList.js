import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { LocationContext } from "./LocationProvider";
// Pulling in object above 
import { LocationCard } from "./LocationCard";
// Pulling in reusable component above 
import "./Location.css";



export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  //   useEffect is a function that takes two arguments (?) (anonymous function, )
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])


  return (
    <div className="locations">
      <h2>Locations</h2>
      <button onClick={() => { history.push("/locations/create") }}>
        Add Location
      </button>
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
  )
};