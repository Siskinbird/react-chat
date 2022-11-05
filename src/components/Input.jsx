import React from 'react';
import Img from '../images/img.png'
import Attach from '../images/attach.png'


function Input(props) {
    return (
        <div className='input'>
            <input type='text' placeholder='Type something'/>
            <div className="send">
                <img src={Attach} alt='Image'/>
                <input type='file' style={{display: 'none'}} id='file' />
                <label htmlFor='file'>
                    <img src={Img} alt='image'/>
                </label>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Input;