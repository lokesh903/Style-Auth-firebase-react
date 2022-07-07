import React, { useRef, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  var passwordRef = useRef("");
  var cnfPasswordRef = useRef("");
  var emailRef = useRef("");
  var { signup } = useAuth();
  var [error, setError] = useState("");
  var [loading, setLoading] = useState(false);
  var navigate = useNavigate()
  var handelSubmit = async (e) => {
    e.preventDefault();
  
    if (passwordRef.current.value !== cnfPasswordRef.current.value) {
      return setError("Password doesn't match !");
    }
    try {
      setError("")
      setLoading(true);
     
      await signup(emailRef.current.value,passwordRef.current.value);
      navigate("/login")
    } catch(err) {
      setError(err.message);
    }
    setLoading(false);
  }
  
  return (
    <div>
      <form onSubmit={handelSubmit}>
        {error && (
          <div  className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form3Example3"
            className="form-control"
            placeholder="Email address"
            ref={emailRef}
          />
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form3Example4"
            className="form-control"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        {/* Confirm Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form3Example4"
            className="form-control"
            placeholder="Confirm Password"
            ref={cnfPasswordRef}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-outline-dark mb-4 w-100" disabled={loading} >
          Sign up
        </button>
        <div className="text-center">
          <h5>
            Already have an account :{" "}
            <NavLink to="/login" className="link-dark">
              Login
            </NavLink>{" "}
          </h5>
        </div>

        {/* Register buttons */}
        <div className="text-center my-3">
          <p>or sign up with:</p>
          <button type="button" className="cir-bt mx-3 ">
            <i className="icon ri-facebook-fill"></i>
          </button>
          <button type="button" className="cir-bt mx-3 ">
            <i className="icon ri-google-fill"></i>
          </button>
          <button type="button" className="cir-bt mx-3 ">
            <i className="icon ri-github-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
