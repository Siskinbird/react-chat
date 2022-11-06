import React from 'react';
import {signOut} from 'firebase/auth'
import {auth} from "../firebase";

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Siskin chat</span>
            <div className="user">
                <img src='https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg' alt='avatar'/>
                <span>User name</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    );
}

export default Navbar;