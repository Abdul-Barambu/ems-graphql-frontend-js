import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { ADD_EMPLOYEE } from '../graphql/Schema'


function AddEmployee() {

    const [employeeNumber, setEmployeeNumber] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')

    const [addEmployee, { loading, error }] = useMutation(ADD_EMPLOYEE);

const addEmployeeHandler = (e) => {
    e.preventDefault();

    addEmployee({variables: {employeeInput: {employeeNumber, first_name, last_name, email, department}}})
    .then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

    return (
        <div>
            <form onSubmit={addEmployeeHandler}>
                <input type="text" value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)} required />
                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee
