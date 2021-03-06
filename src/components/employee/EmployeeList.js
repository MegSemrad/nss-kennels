import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { EmployeeContext } from "./EmployeeProvider";
// Pulling in object above 
import { EmployeeCard } from "./EmployeeCard";
// Pulling in reusable component above 
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
//   useEffect is a function that takes two arguments (?) (anonymous function, )
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()

  }, [])


  return (
    <div className="employees">
      <h2 className="titleWord">Employees</h2>
		    <button onClick={() => {history.push("/employees/create")}}>
                Add Employee
        </button>
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
  )
};