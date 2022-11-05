import React from 'react';


function Search(props) {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type='text' placeholder='Find a user'/>
            </div>
            <div className="userChat">
                <img src='https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg' alt='User photo'/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
}

export default Search;