import React from 'react'
import Student from './Student'
import deleteStudent from '../App'

function StudentsList({list , deleteStudent}) {
    const lista = list.map(student =>
        <Student student={student} deleteStudent={deleteStudent} key={student.id}/>)
    return (
        <div>
            {lista}
        </div>
    )
}

export default StudentsList
