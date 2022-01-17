import { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import HeaderAndTitle from './Components/HeaderAndTitle'
import StudentsList from './Components/StudentsList';

function App() {

  const [studentsInfo, setStudentsInfo] = useState([])

  const [show, setShow] = useState(false)

  const studentDetails = (newStudent) => {
    console.log(newStudent)
  
    let studentId;

    if (studentsInfo.length === 0) {
      studentId = 1
    } else {
      studentId = studentsInfo[studentsInfo.length -1].id + 1;
    }
    const newStudentDetails = { ...newStudent, id: studentId }
    setStudentsInfo([...studentsInfo, newStudentDetails])
    
  }

  const deleteStudent = (id) => {
    console.log(id);
    let newStudentList = studentsInfo.filter(student => student.id !== id)
    setStudentsInfo(newStudentList)
  }
  
  return (

    <div className="App">
      <HeaderAndTitle showList={setShow} show={show} />
      {show ? <StudentsList list={studentsInfo} deleteStudent={deleteStudent}/> : <Form studentDetails={studentDetails}/>}
    </div>
  );
}

export default App;
