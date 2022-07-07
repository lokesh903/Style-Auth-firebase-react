import React, { useRef, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import "../css/login.css"
export default function Login() {
  var passwordRef=useRef()
  var emailRef=useRef()
  var {login}=useAuth()
  var navigate=useNavigate()
  var [error,setError]=useState("")
  var[loading,setLoading]=useState(false)

  async function handelSubmit(e){
    e.preventDefault()

    try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
      navigate("/")
    }catch(err){
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div>
     <form onSubmit={handelSubmit}>
     {error && (
          <div  className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
     <h1 className="my-2 display-5 fw-bold ls-tight" style={{"color": "hsl(218, 81%, 95%)"}}>
          Login Form  <br />
        </h1>
              {/* Email input */}
              <div className="form-outline mb-4 my-3">
                <input type="email" id="form3Example3" className="form-control" placeholder='Email address' ref={emailRef} />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control"  placeholder='Password' ref={passwordRef} />
                
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-outline-dark mb-4 w-100" disabled={loading}>
                LogIn
              </button>
              <div className="text-center">
                <h5>Need an account : <NavLink  to="/signup" className="link-dark">SignUp</NavLink> </h5>
                
              </div>
              {/* Register buttons */}
              <div className="text-center">
                <p>or LogIn with:</p>
                <button type="button" className="cir-bt mx-3 my-2">
                <i className="icon ri-facebook-fill"></i>
                </button>
                <button type="button" className="cir-bt mx-3 my-2">
                <i className="icon ri-google-fill"></i>
                </button>
                <button type="button" className="cir-bt mx-3 my-2"> 
                <i className="icon ri-github-fill"></i>
             </button>

              </div>
       
            </form>
    </div>
    
  )
}
