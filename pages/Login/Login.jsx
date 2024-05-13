import React, { useContext, useEffect, useState } from 'react'
import "./Login.css"
import axios from "axios"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  
    const navigate = useNavigate()

  const {url,setToken} = useContext(StoreContext)
    const[currState,setCurrState] = useState("Login")
    const[data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }
      const onLogin = async(event) =>{
          event.preventDefault() 
          let newUrl = url;
          if(currState==="Login"){
            newUrl += "/api/user/login"
          }
          else{
            newUrl += "/api/user/register"
          }
          const response = await axios.post(newUrl,data);
             
          if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token)
                navigate('/')
                toast.success("Success fully logged")
               
          }
          else{
            toast.error(response.data.message)
          }
      }




  return (
    <div className="login-popup">
       <form action="" className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
            <h2>{currState}</h2>
        </div>
        <div className="login-popup-inputs">
            {currState === "Login" ? <></> :<input name='name' onChange={onChangeHandler}  value={data.name} type='text'placeholder='Your name' required/> }
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email'  required/>
              <input name='password' value={data.password} type="password" placeholder='password' onChange={onChangeHandler} required />
        </div>
          <button type='submit'>{currState=== "Sign Up" ? "Create account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By countinuing , i agree to the terms and conditions.</p>
          </div>
          {
            currState === "Login"
            ?<p>Create a new account ? < span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? < span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          }
         
       </form>
    </div>
  )
}

export default Login