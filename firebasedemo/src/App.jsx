import { db } from '../firebase.js'

import './App.css'
function App() {
  // let flag = false;
  // const handleClick =()=>{
  //  document.querySelector('.students').classList.toggle('hidden');
  //  if(flag==false){
  //     flag = true;
  //  }else{
  //   flag = false;
  //  }

  //  console.log(flag);
  // };
  
  const handleAdd = ()=>{
    const st1 = {
      "id" : 203,
      "fname" : "Rajveer",
      "std" : 4
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
  }

  return (
    <>
      <h1> Firebase </h1>
      <button onClick={handleAdd}>Click</button>

      {/* <button onClick={handleClick}>
       {  (flag) ? "Show Table" : "Hide Table" }
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
      </div> */}
    </>
  )
}

export default App
