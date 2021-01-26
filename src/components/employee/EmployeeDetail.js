import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams } from "react-router-dom"
/*
 - useParams - a hook - allows us to grab any sth in that URL?
*/

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

    const {employeeId} = useParams();  // returns is an object 

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location: {employee.location?.name}</div>
      {/* .location is a nested value we get back when we use _expand */}
    </section>
  )
//   ? is optional chaining - fail safe - get around fact that there may or mayn ot be property of "name" 
}