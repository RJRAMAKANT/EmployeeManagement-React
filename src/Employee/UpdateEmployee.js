import { useState,useEffect } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"


export default function UpdateEmployee()
{
    const location=useLocation();
   const[user,setuser]=useState({});
    const[updatedata,setupdatedata]=useState({
        email:'',firstname:'',lastname:'',salary:'',phoneNumber:'',address:'',pincode:'',joinDate:''
    })
   let navigate=useNavigate();

   function handleSubmit(e)
   {
    e.preventDefault()
    axios.put(`http://localhost:8185/employee/updateEmployee/${location.state.id}`,user).then(response=>
    {
        alert("EMPLOYEE UPDATED SUCCESSFULLY");
        navigate("/home")
    })


   }
       

   useEffect(()=>
   {
    fetch(`http://localhost:8185/employee/employebyid/${location.state.id}`).then(Response=>
    {
        Response.json().then(result=>
            {
                setuser(result);
            })


    })

   },[])
   console.log(user);


    return(
        <div className="container-fluid">

            <div className="text-danger text-center p-2 updateemp">UPDATE YOUR DETALIS HERE ID: {location.state.id}</div>
             
            <form onSubmit={handleSubmit}  className=" p-2 formupdate">
                <dl className="text-center">
                    <dt>EMAIL</dt>
                    <dd><input type="text" className="w-50" value={user.email} onChange={e=>setuser({...user,email:e.target.value})} name="email"></input></dd>
                    <dt>firstName</dt>
                    <dd><input type="text" className="w-50" value={user.firstname}onChange={e=>setuser({...user,firstname:e.target.value})} name="firstname"></input></dd>
                    <dt>lastName</dt>
                    <dd><input type="text" className="w-50" value={user.lastname}onChange={e=>setuser({...user,lastname:e.target.value})} name="lastname"></input></dd>
                    <dt>salary</dt>
                    <dd><input type="number" className="w-50" value={user.salary}onChange={e=>setuser({...user,salary:e.target.value})} name="salary"></input></dd>
                    <dt>phoneNumber</dt>
                    <dd><input type="text" className="w-50" value={user.phoneNumber} onChange={e=>setuser({...user,phoneNumber:e.target.value})} name="phoneNumber"></input></dd>
                    <dt>Address</dt>
                    <dd><input type="text" className="w-50" value={user.address} onChange={e=>setuser({...user,address:e.target.value})} name="address"></input></dd>
                    <dt>pincode</dt>
                    <dd><input type="number" className="w-50" value={user.pincode} onChange={e=>setuser({...user,pincode:e.target.value})} name="pincode"></input></dd>
                    <dt>Join Date</dt>
                    <dd><input type="date" className="w-50" value={user.joinDate} onChange={e=>setuser({...user,joinDate:e.target.value})} name="joinDate"></input></dd>
                    <button className=" btn btn-warning w-50" type="submit">UPDATE</button>
                </dl>
                


            </form>
            
        </div>
    )
}