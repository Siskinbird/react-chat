import React from 'react';
import Cam from '../images/cam.png'
import Add from '../images/add.png'
import More from '../images/more.png'
import Messages from "./Messages";

function Chat(props) {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>User name</span>
                <div className="chatIcons">
                    <img src={Cam} alt=""/>
                    <img src={Add} alt=""/>
                    <img src={More} alt=""/>
                </div>
            </div>
            <Messages/>
        </div>
    );
}

export default Chat;