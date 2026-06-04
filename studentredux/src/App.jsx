
import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { addstudent } from './redux/actions';

function App() {
  const [fname, setFname] = useState('');
  const [course, setCourse] = useState('');

  const students = useSelector((state)=> state.students);
  const dispatch = useDispatch();

  const addData = ()=>{
    
    const student = {
        id : Date.now(),
        fname : fname,
        course : course
    };

    dispatch(addstudent(student));

    setFname("");
    setCourse("");
  }

  return (
    <section>
      <h1>Here</h1>

      <div>
        <input type="text" placeholder='Enter Your name' onChange={(e)=>{setFname(e.target.value)}} />
        <input type="text" placeholder='Enter Your course name' onChange={(e)=>{setCourse(e.target.value)}} />
        <button onClick={addData}>Add Student</button>

      </div>
      <hr />

    <div>
      {
        students.map((student)=>{
          return (
            <section key={student.id}>
              <h1>Firstname : {student.fname}</h1>
              <h2>Course Name : {student.course}</h2>
              <h2>RollNo : {student.id}</h2>
              <button>Delete</button>
              <hr />
            </section>
          )
        })
      }

    </div>
    </section>
  )
}

export default App
