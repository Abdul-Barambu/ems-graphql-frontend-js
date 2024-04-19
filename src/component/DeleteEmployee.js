import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { DELETE_EMPLOYEE } from '../graphql/Schema'


function DeleteEmployee() {

    const [id, setId] = useState('')

    const [deleteEmployee, { loading, error }] = useMutation(DELETE_EMPLOYEE);

    const deleteEmployeeHandler = (e) => {
        e.preventDefault();

        deleteEmployee({ variables: { id: parseInt(id) } })
        console.log('deleted succesfully')
    }

    return (
        <div>
            <form onSubmit={deleteEmployeeHandler}>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button>Delete Employee</button>
            </form>
        </div>
    )
}

export default DeleteEmployee
