import axios from 'axios'
import { useEffect } from 'react';
import {  useState } from 'react';

function Studentcrud() {
    const [fname,setFname] = useState("");
    const [email,setEmail] = useState("");
    const [course,setCourse] = useState("");
    const [id,setId] = useState(null);

    const [students, setStudents] = useState([]);
    const api = 'http://localhost:3001/students';

    const dataDisplay = async () => {
        await axios.get(api).then((response) => {
            setStudents(response.data)
        })

    }

    const handleSubmit = async (e)=>{
    if(id == null){
        await axios.post(api,{
            fname,
            email,
            course
        });
    }   else{

        await axios.put(`${api}/${id}`,{
            fname : fname,
            email : email,
            course : course
        });
        console.log("Added");
        setId(null);
    }    
        
        setFname("");
        setCourse("");
        setEmail("");
    }
    const deleteStudent = async (id)=>{
        console.log(id);

        await axios.delete(`${api}/${id}`);
    }
    // useEffect(()=>{
    //     // console.log(students);
        
    // });

    const editStudent = (student)=>{
        console.log(student);

        setId(student.id);
        setFname(student.fname);
        setEmail(student.email);
        setCourse(student.course);
    }
   
    return (
        <>
            <form>
                <input type="text" placeholder='Enter your fname'  value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
                <input type="text" placeholder='Enter your email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" placeholder='Enter your course' value={course}  onChange={(e)=>{setCourse(e.target.value)}}/>

                <button onClick={handleSubmit}>
                    {
                        (!id) ? "Submit" : "Edit"
                    }
                </button>
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
                                    <button onClick={()=>{editStudent(s)}}>Edit</button>
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