import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../employee/EmployeeProvider";
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css";
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({
      name: "",
      locationId: 0
    });

    const history = useHistory();

   
    useEffect(() => {
      getEmployees()
      .then(getLocations)
    }, [])

  
    const handleControlledInputChange = (event) => {
      const newEmployee = { ...employee }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newEmployee[event.target.id] = selectedVal
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form
      const locationId = employee.locationId
      if (locationId === 0 ) {
        window.alert("Please select a location")
      } else {
        addEmployee(employee)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="locationId">Location: </label>
                  <select defaultValue={employee.locationId} name="location" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}
