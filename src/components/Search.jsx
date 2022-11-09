import React, {useContext, useState} from 'react';
import {collection, query, where, getDocs} from 'firebase/firestore'
import {db} from '../firebase'
import {AuthContext} from "../context/AuthContext";

function Search() {
    const [userName, setUserName] = useState('')
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => {
        const q = query(collection(db, 'users'), where('displayName', '==', userName));

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
                // console.log(doc.id, '=>', doc.data());
            })
        } catch (err) {
            setErr(true)
        }


    }

    const handleKey = (e) => {
        e.code === 'Enter' && handleSearch()
    }

    const handleSubmit = async () => {
        const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
    }

    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)}/>
            </div>
            {err && <span>User not found</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt='User photo'/>
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    );
}

export default Search;