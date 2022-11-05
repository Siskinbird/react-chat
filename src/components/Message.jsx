import React from 'react';

function Message(props) {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src='https://papik.pro/uploads/posts/2021-09/1630756344_14-papik-pro-p-anime-risunki-kvadratnie-26.jpg' alt='Image'/>
                <span>Date and time</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                {/*<img src='https://papik.pro/uploads/posts/2021-09/1630756344_14-papik-pro-p-anime-risunki-kvadratnie-26.jpg' alt='Image'/>*/}
            </div>
        </div>
    );
}

export default Message;