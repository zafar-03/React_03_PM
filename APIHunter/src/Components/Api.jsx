import axios from "axios";
import { useState } from "react";

function Api(){
    const [firstName,setFirstname] = useState("");
    const [lastName,setLastname] = useState("");
    const [url,setUrl] = useState("");
    const [company,setCompany] = useState({
        title : ""
    });
    const api = "http://localhost:3001/users";

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await axios.post(api,{
            firstName : firstName,
            lastName : lastName,
            image : url,
            company : company
         });
    }

    return (
        <>
            <form action="">
                <input type="text" onChange={(e)=>{setFirstname(e.target.value)}} name="fname"/>
                <input type="text" onChange={(e)=>{setLastname(e.target.value)}} name="lname"/>
                <input type="text" onChange={(e)=>{setUrl(e.target.value)}} name="url"/>
                <input type="text" onChange={(e)=>{setCompany({...company,"title" : e.target.value})}} name="position"/>

                <input type="submit" value="Add New users" onClick={handleSubmit}/>
            </form>
        </>
    )
}


export default Api;