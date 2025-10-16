import React, { useState } from "react";
import { auth } from "../congif/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Sign.css";

function Sign({ updateLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("successfully signed in");
    } catch (err) {
      console.log(err.message);
    }
  };

  const Login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("successfully logged in ");
      console.log("successfull");
      updateLogin(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signIn">
      <main className="form-signin w-100 ">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mt-3">
            <input
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
        </form>
        <button className="btn btn-primary w-100 py-2 mt-3" onClick={signIn}>
          Sign in
        </button>
        <button className="btn btn-primary w-100 py-2 mt-3" onClick={Login}>
          Login
        </button>
      </main>
    </div>
  );
}

export default Sign;
