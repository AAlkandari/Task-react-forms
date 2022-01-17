import React from 'react'



function Student({student,deleteStudent}) {
   

    return (

        <div className="student">
            <p>{student.name}</p>
            <p>{student.lastName}</p>
            <ul>
                <li>phone number :{student.phoneNumber}</li>
                <li>power: {student.power}</li>
            </ul>
            <p className="delete" onClick={() => deleteStudent(student.id)}>delete</p>
        </div>

    )
}

export default Student
