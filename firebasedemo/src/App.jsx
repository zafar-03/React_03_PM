import { useState } from 'react'
import { db } from '../firebase.js'

import './App.css'
function App() {
    const [id,setId] = useState("");
    const [fname,setFname] = useState("");
    const [std,setStd] = useState("");


  let flag = false;
  const handleClick =()=>{
   document.querySelector('.students').classList.toggle('hidden');
  };
  
  const handleAdd = ()=>{
    const st1 = {
      "id" : id,
      "fname" : fname,
      "std" : std
    }

    var dbdata =  db.student.some((s)=>{
      return s.id == st1.id;
    })
    if(dbdata){
       //
    }else{
      db.student.push(st1);
    }
    console.log(db);
    setId("");
    setFname("");
    setStd("");
  };

  const handleUpdate = ()=>{
    const st1 = {
      "id" : Number(prompt("Enter Id : ")),
      "fname" : prompt("Enter name : "),
      "std" : Number(prompt("Enter STD : "))
    }
    
    db.student = db.student.map((s)=>{
      return (st1.id == s.id) ? st1 : s;
    })
    console.log(db.student);
  };

  const handleDelete = ()=>{
    var sid = Number(prompt("Enter ID :"));
    db.student = db.student.filter((s)=>{
      return sid != s.id;
    })
    console.log(db.student);
  };

  return (
    <>
      <h1> Firebase </h1>
       <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <button onClick={handleUpdate}>Update</button>
      </div>


      <div>
          <input type="text" value={id} placeholder='Enter Your Id' name='id' onChange={(e)=>{setId(Number(e.target.value))}}/>
          <br />
          <input type="text" value={fname} placeholder='Enter Your Firstname' name='fname'  onChange={(e)=>{setFname(e.target.value)}}/>
          <br />
          <input type="text" value={std} placeholder='Enter Your Std' name='std'  onChange={(e)=>{setStd(Number(e.target.value))}}/>
          <br />
      <button onClick={handleAdd}>Click</button>
      </div>


      <button onClick={handleClick}>
       "Click"
      </button>
      <div className="students">
        <h2>Students</h2>
        <table border="">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Standard</th>
            </tr>
          </thead>
          <tbody>
            {
              db.student.map((stu) => {
                return (
                  <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.fname}</td>
                    <td>{stu.std}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
