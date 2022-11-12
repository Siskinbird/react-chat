import React from 'react';

import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import ErrorBoundary from '../ErrorBoundary'

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <Navbar/>
            <Search/>
            <ErrorBoundary>
            <Chats/>
            </ErrorBoundary>
        </div>
    );
}

export default Sidebar;