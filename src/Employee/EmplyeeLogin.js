import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function EmploeeLogin()
{
    const naviagte=useNavigate();
    const[cookies,setCookie,removeCookie]=useCookies();
    const admin={
        username:'ADMIN',
        password:'PASSWORD'
    }
    const[name,setname]=useState('');
    const[pass,setpass]=useState('');
    function handleusername(e){
        setname(e.target.value)
    }
    function handlepassword(e)
    {
        setpass(e.target.value)
    }
    function handlesubmit(e)
    {
        e.preventDefault()
        if(admin.username ==name && admin.password ==pass)
        {
            setCookie("admin",admin.username);
             naviagte("/home")
 
        }
        else{
            alert("WRONG ID AND PASSWORD");
             naviagte("/login")
        }

    }

    return(
        <div className="d-flex ">

             <form className="container-fluid w-25 p-5 adminform" onSubmit={handlesubmit} >

                <dl>
                    <dt>USERNAME</dt>
                    <dd><input type="text" classNaame="form-control " onChange={handleusername}></input></dd>
                    <dt>PASSWORD</dt>
                    <dd><input type="password"  classNaame="form-control" onChange={handlepassword}></input></dd>
                    <dd><button className="btn btn-success  " type="submit">LOG IN</button></dd>
                </dl>
             </form>

        </div>
    )
}