import { BrowserRouter,Routes,Route,Link } from "react-router-dom"; 
import EmployeeHome from "./EmployeeHome";
import RegisterEmployee from "./RegisterEmployee";
import EmploeeLogin from "./EmplyeeLogin";
import AllEmployee from "./AllEmployee";
import UpdateEmployee from "./UpdateEmployee";
import { useCookies } from "react-cookie";
import { useState,useEffect } from "react";
export default function EmployeeIndex()
{
    const[cookies,setcookies,removeCookie]=useCookies();
    const[userid,setuserid]=useState(false);
  

    function handlelogout(e)
    {
        removeCookie("admin");       
    }
    useEffect(()=>
    {
        setuserid(cookies["admin"]);
        
    })
    return(
        <div>
            <header className="text-danger container-fluid Esystem">EMPLOYEE MANAGEMENT SYSTEM</header>
            <section className="row ">
            <BrowserRouter>
                <nav className="col-3">
                <div><Link className="btn btn-danger text-white w-100 mb-1"  to="/home">HOME</Link></div>
                <div><Link className="btn btn-danger text-white w-100 mb-1"  to="/register">REGISTER</Link></div>
                <div><Link className="btn btn-danger text-white w-100 mb-1"  to="/login">{userid?userid:"LOG IN"}</Link></div>
                <div className="btn btn-danger text-white w-100 mb-1  " onClick={handlelogout}>LOG OUT</div>

                </nav>
                <main className="col-9">
                     <EmployeeHome/>
                    <div>
                        <Routes>
                        <Route path='/' element={<EmploeeLogin/>}/>
                        </Routes>
                        
                    {/* <Routes> */}
                       { userid? 
                        /* <Route path='/' element={<AllEmployee/>}/> */
                        <Routes>
                         <Route path='home' element={<AllEmployee/>}/>
                          <Route path='register' element={<RegisterEmployee/>}/>
                          
                          <Route path='update'element={<UpdateEmployee/>}/>
                          </Routes>
                        :
                        <Routes>
                          <Route path='/' element={<AllEmployee/>}/>
                          <Route path='login' element={<EmploeeLogin/>}/>
                          </Routes>

                       }
                     {/* </Routes> */}

                    </div>
                    

                </main>

                
                </BrowserRouter>
                
            </section>
        </div>
    )
}