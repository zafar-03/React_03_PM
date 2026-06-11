import axios from 'axios'
import { useEffect } from 'react';
import {  useState } from 'react';

function Studentcrud() {
    const [fname,setFname] = useState("");
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");

    const [students, setStudents] = useState([]);
    const api = 'http://localhost:3001/students';

    const dataDisplay = async () => {
        await axios.get(api).then((response) => {
            setStudents(response.data)
        })

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        await axios.post(api,{
            fname,
            email,
            course
        });
        console.log("here");
    }
    const deleteStudent = async (id)=>{
        console.log(id);

        await axios.delete(`${api}/${id}`);
    }
    // useEffect(()=>{
    //     // console.log(students);
        
    // });
   
    return (
        <>
            <form>
                <input type="text" placeholder='Enter your fname' onChange={(e)=>{setFname(e.target.value)}}/>
                <input type="text" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" placeholder='Enter your course' onChange={(e)=>{setCourse(e.target.value)}}/>

                <button onClick={handleSubmit}>Submit</button>
            </form>
            <button onClick={dataDisplay}>Click Here</button>
            <br />
            <table border="">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Studnent Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s,index)=>{
                        return (
                            <tr key={s.id}>
                                <td>{index+1}</td>
                                <td>{s.fname}</td>
                                <td>{s.email}</td>
                                <td>{s.course}</td>
                                <td>
                                    <button>1</button>
                                    <button onClick={()=>{deleteStudent(s.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}

export default Studentcrud;

// axios