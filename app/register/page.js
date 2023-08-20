"use client";

import React, {useState} from 'react'

import Header from '../components/header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [school, setSchool] = useState("")

    const { push } = useRouter();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if(password !== secondPassword) {
            alert('Passwords do not match!')
        } else {
            const reqBody = {username, password, school}
            axios.post('http://localhost:5000/api/user/', reqBody)
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .then(res => {
                push('/')
            })
            .catch(error => {
                console.log(error)
                return error
            })
        }
    }

    return(
    <div>
        <Header />
        <form className='login' onSubmit={handleRegisterSubmit}>
            <h1>Create an Account!</h1>
            {/* <label for="username">username:</label> */}
            <input type="text"
                name="username"
                placeholder="username"
                className="login-form-textbox"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            {/* <label for="password">password:</label> */}
            <input type="password" 
                name="password"
                placeholder="password"
                className="login-form-textbox"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <input type="password" 
                name="password"
                placeholder="re-enter password"
                className="login-form-textbox" 
                value={secondPassword}
                onChange={(e) => setSecondPassword(e.target.value)}/>
            <select
                    name="university"
                    className="register-form-unidropdown"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
            >
                    <option value="">Select your University!</option>
                    <option value="wlu">Wilfrid Laurier</option>
                    <option value="uw"><img href="../public/waterloo.png" />Waterloo</option>
                    <option value="uoft">Toronto</option>
                    <option value="ubc">British Columbia</option>
                    <option value="mcgill">McGill</option>
                    <option value="queens">Queens</option>
                    <option value="uwo">Western</option>
                    <option value="mac">McMaster</option>
                    <option value="tmu">Toronto Metropolitan University</option>
            </select>
            {/* <Link href="/"> */}
                <button type="submit" className='login-form-submit'>Register!</button>
            {/* </Link> */}
        </form>
    </div>
    )
}