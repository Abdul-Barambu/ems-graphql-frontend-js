import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_EMPLOYEE } from '../graphql/Schema'

function UpdateEmployee() {

    const [id, setId] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')

    const [updateEmployee, { loading, error }] = useMutation(UPDATE_EMPLOYEE)

    const updateEmployeeHandler = (e) => {
        e.preventDefault();

        // Construct the employeeUpdateRecord object dynamically based on fields that are not empty
        const employeeUpdateRecord = {};
        if (employeeNumber !== '') employeeUpdateRecord.employeeNumber = employeeNumber;
        if (first_name !== '') employeeUpdateRecord.first_name = first_name;
        if (last_name !== '') employeeUpdateRecord.last_name = last_name;
        if (email !== '') employeeUpdateRecord.email = email;
        if (department !== '') employeeUpdateRecord.department = department;

        updateEmployee({ variables: { id, employeeUpdateRecord}  })
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <form onSubmit={updateEmployeeHandler}>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <input type="text" value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)} />
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    )
}

export default UpdateEmployee
