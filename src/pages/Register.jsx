import React, {useState} from 'react';
import Add from '../images/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from 'react-router-dom'


function Register() {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const displayEmail = e.target[1].value
        const displayPassword = e.target[2].value
        const displayFile = e.target[3].files[0]

        try {
            const res = createUserWithEmailAndPassword(auth, displayEmail, displayPassword);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, displayFile);

            uploadTask.on(
                (err) => {
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            await updateProfile((await res).user, {
                                displayName,
                                photoURL: downloadURL,
                            });
                            await setDoc(doc(db, 'users', (await res).user.uid), {
                                uid: (await res).user.uid,
                                displayName,
                                displayEmail,
                                photoURL: downloadURL
                            });
                            await setDoc(doc(db, "userChats", (await res).user.uid), {})
                            navigate('/')
                        }
                    );
                })

        } catch (err) {
            setErr(true)
        }
    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className='logo'>Siskin Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password' autoComplete="on"/>
                    <input style={{display: 'none'}} type="file" id='file'/>
                    <label htmlFor='file'>
                        <img src={Add} alt='add'/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
}

export default Register;