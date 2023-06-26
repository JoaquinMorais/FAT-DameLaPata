import React from 'react';

/* IMPORTS COMPONENTS */
import { Navbar } from '../components/Navbar/Navbar';
import { Profile } from '../components/Profile/Profile';

function ProfilePage(){
    return(
        <>
            <Navbar />
            <Profile />
        </>
    );
};

export default ProfilePage;