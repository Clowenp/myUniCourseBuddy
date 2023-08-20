"use client";

import React, {useState} from 'react'

// Home page = Log-in Page.
import Header from "./components/header"
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

// import Register from "./pages/register"import Landing from './pages/landing.js';
export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const reqBody = {username, password}
    axios.post('http://localhost:5000/api/user/login/', reqBody)
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .then(res => {
      sessionStorage.setItem("user_id", res._id)
      console.log(sessionStorage.getItem("user_id"))
    })
    .then(() => {
      push('/landing-page')
    })
    .catch(error => {
      console.log(error)
      alert("Authentication error!")
      return error
    })
  }

  return (
    // (note) handle event such that new link isnt http://localhost:3000/?username=&password=
    <div>
      <Header />
      <form className='login' onSubmit={handleLoginSubmit}>
        <h1>Log-in</h1>
        {/* <label for="username">username:</label> */}
        <input type="text"
               name="username"
               placeholder="username"
               className="login-form-textbox" 
               value={username}
               onChange={(e) => setUsername(e.target.value)}/>
        {/* <label for="password">password:</label> */}
        <input type="password" 
               name="password"
               placeholder="password"
               className="login-form-textbox" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>
        {/* <Link href="/landing-page"> */}
          <button type="submit" className='login-form-submit'>Log-in!</button>
        {/* </Link> */}
        <p>Don't have an account? <Link href="/register">Register</Link> here!</p>
      </form>
      {/* <Link href="/register" /> */}
    </div>
  )
}
