import React from 'react'
import SideInfo from './SideInfo'
import { useState } from 'react'


function Form({studentDetails}) {

    const [newStudent, setNewStudent] = useState({
        name: '',
        lastName: '',
        phoneNumber: '',
        power: '',
        emailAddress: '',
    })

    const handleChange = (event) => {
        setNewStudent({...newStudent, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        studentDetails(newStudent)
        setNewStudent({     
            name: '',
            lastName: '',
            phoneNumber: '',
            power: '',
            emailAddress: '',
        })
    };

    return (
        <div className="form-page">

           
            <form className="form-page-container" onSubmit={handleSubmit}>
                <input value={newStudent.name} name="name"  placeholder="First Name" required onChange={ handleChange } />
                <input value={newStudent.lastName} name="lastName" type="text" placeholder="Last Name"  required onChange={ handleChange }/>
                <input value={newStudent.phoneNumber} name="phoneNumber" type="tel" placeholder="Enter a Phone Number"  required onChange={ handleChange } />
                <input value={newStudent.power} name="power" type="text" placeholder="Student's Power" required onChange={handleChange}  />
                <input value={newStudent.emailAddress} name="emailAddress"  placeholder="Student's E-mail Address" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            
            <SideInfo />

        </div>
    )
}

export default Form
