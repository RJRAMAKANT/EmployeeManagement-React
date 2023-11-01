import { Form, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterEmployee()
{
    let navigate=useNavigate();
    const formik=useFormik(
        {
            initialValues:{
                email:'',
                firstname:'',
                lastname:'',
                salary:'',
                phoneNumber:'',
                address:'',
                pincode:'',
                joinDate:'',
            },
          
            onSubmit:values=>{
                axios.post("http://localhost:8185/employee/register",values);
                alert("Register Successful");
                navigate("/home");
            }
            
        }
    )
    return(
        <div className="container-fluid  justify-content-center">
            <h3 className="text-danger text-center mb-2 remployee">ADD EMPLOYEE</h3>
            
            <form onSubmit={formik.handleSubmit}  className=" p-2 formregister">
                <dl className="text-center">
                    <dt>EMAIL</dt>
                    <dd><input type="text" className="w-50" value={formik.values.email} onChange={formik.handleChange} name="email"></input></dd>
                    <dt>firstName</dt>
                    <dd><input type="text" className="w-50" value={formik.values.firstname}onChange={formik.handleChange} name="firstname"></input></dd>
                    <dt>lastName</dt>
                    <dd><input type="text" className="w-50" value={formik.values.lastname}onChange={formik.handleChange} name="lastname"></input></dd>
                    <dt>salary</dt>
                    <dd><input type="number" className="w-50" value={formik.values.salary}onChange={formik.handleChange} name="salary"></input></dd>
                    <dt>phoneNumber</dt>
                    <dd><input type="text" className="w-50" value={formik.values.phoneNumber} onChange={formik.handleChange} name="phoneNumber"></input></dd>
                    <dt>Address</dt>
                    <dd><input type="text" className="w-50" value={formik.values.address} onChange={formik.handleChange} name="address"></input></dd>
                    <dt>pincode</dt>
                    <dd><input type="number" className="w-50" value={formik.values.pincode} onChange={formik.handleChange} name="pincode"></input></dd>
                    <dt>Join Date</dt>
                    <dd><input type="date" className="w-50" value={formik.values.joinDate} onChange={formik.handleChange} name="joinDate"></input></dd>
                    <button className=" btn btn-warning w-50" type="submit">Sign up</button>
                </dl>
                


            </form>
        </div>
       
        
    )
}