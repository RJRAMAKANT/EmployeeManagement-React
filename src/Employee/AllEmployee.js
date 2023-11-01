import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";


export default function AllEmployee()
{
    const naviagte=useNavigate();

    const[employee,setemployee]=useState([]);

  
    function handleClick(e)
    {
       const URL=`http://localhost:8185/employee/deleteEmploye/${e.target.value}`
        axios.delete(URL);  
        window.location.reload();  
    }
    function sendId(e)
    {
        var iid=e.target.value;
         console.log("the id is",iid)
        
        naviagte('/update',{state:{id:iid}})

    }
   

    useEffect(()=>
    {
        fetch("http://localhost:8185/employee/allEmployee").then(response=>
        {
            response.json().then(result=>
                {
                    setemployee(result)
                    
                })
        })
        
    },[])
  

    return(
        <div>
            <div><Link className="text-white bg-danger p-1 btn btn-danger mb-1"  to="/register">ADD EMPLOYEE</Link></div>
            <table>
                
                  <thead >
                  <tr>
                   
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>PHONE</th>
                        <th>SALARY</th>
                        <th>ADDRESS</th>
                        <th>PINCODE</th>
                        <th>JOINING DATE</th>
                        <th>REMOVE</th>

                        </tr> 
                  </thead>
                  
                  <tbody>
                          {
                            employee.map(res=>
                                
                                    <tr key={res.id}>
                                        <td><button className="btn btn-warning w-100" value={res.id} onClick={sendId}>{res.id}</button></td>
                                        <td>{res.email}</td>
                                        <td>{res.firstname}</td>
                                        <td>{res.lastname}</td>
                                        <td>{res.phoneNumber}</td>
                                        <td>{res.salary}</td>
                                        <td>{res.address}</td>
                                        <td>{res.pincode}</td>
                                        <td>{res.joinDate}</td>
                                        <td><button id="xx" className="btn btn-danger w-100" onClick={handleClick} value={res.id}>DELETE</button></td>
                                       
                                    </tr>
                                )
                          }

                  </tbody>


            </table>

        </div>
    )
}