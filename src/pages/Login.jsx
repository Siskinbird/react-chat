import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";


function Login(props) {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayEmail = e.target[0].value
        const displayPassword = e.target[1].value

        // console.log(e.target[0].value)

        try {
            await signInWithEmailAndPassword(auth, displayEmail, displayPassword)
            navigate('/')
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Siskin Chat</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password' autoComplete='on'/>
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
}

export default Login;