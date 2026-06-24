import { useEffect, useState } from "react";
import axios from 'axios'
function Home() {
    const [employees, setEmployee] = useState([]);
    const api = "http://localhost:3001/users";
    const [search,setSearch] = useState("");
    const perpageData = 5;
    const [lastIndex,setLastindex] = useState(0);
    const firstIndex = 0;
    const displaybtn = [];
    let count = 0;
    
    const getData = async () => {
        await axios.get(api).then((response) => {
            setEmployee(response.data);
        });
    }

    getData();
    var filterData = employees.filter((emp) => {
        if(emp.firstName.toLowerCase().includes(search.toLowerCase())){
            return emp;
        }
    });

    count = filterData.length;
    for (let i = 0; i < Math.ceil(filterData.length/perpageData); i++) {
        displaybtn.push(0);
    }

    return (
        <div>
            {
                displaybtn.map((_,index)=>{
                    return <button>{index+1}</button>
                })
            }
            <br /><br />
            <input type="text" placeholder="Search Data" onChange={(e)=>{setSearch(e.target.value)}}/>
            <br /><br />
            <section className="display">

                {
                    filterData.map((emp) => {

                        return (
                            <div key={emp.id}>
                                <h4>{emp.firstName} {emp.lastName}</h4>
                                <img src={emp.image} alt="" />
                                <p>{emp.company.title}</p>
                            </div>
                        )
                    })
                }

            </section>
        </div>
    )
}


export default Home;