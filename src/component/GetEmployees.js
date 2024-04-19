import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_EMPLOYEE } from '../graphql/Schema'

function GetEmployees() {

    const {loading, error, data} = useQuery(GET_EMPLOYEE)

    if(loading) return 'Loading . . .';
    if(error) return 'Error Occurred';

    

  return (
    <div>
      {data.employees.map((employee) => (
        <div key={employee.id}>
            <p>{employee.employeeNumber}</p>
            <p>{employee.first_name}</p>
            <p>{employee.last_name}</p>
            <p>{employee.email}</p>
            <p>{employee.department}</p>
        </div>
      ))}
    </div>
  )
}

export default GetEmployees
