import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import {auth} from "./Firebase";


function Login() {
 const history =useHistory()
 
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        history.push("./header")
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
        history.push("./header")
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setemail(e.target.value)}
        
          ></input>
          <h5>password</h5>
          <input
            value={password}
            type="password"
            autoComplete ="off"
            onChange={(e) => setpasword(e.target.value)}
           
          ></input>
          <button onClick={login}  type="submit" className="register">
            Sign In
          </button>
        </form>
    
        <button  onClick={register} className="create">
          create an account
        </button>
      </div>
    </div>
  );
}

export default Login;