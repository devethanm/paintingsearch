import { getCurrentUser } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';

import {
    NavBarHeader
} from '../ui-components';
   
export default function() {
    // Create a state to store the user's username
    const [username, setUsername] = useState('');

    // useEffect to call getUserData when the component mounts
    useEffect(() => {
        async function getUserData() {
            try {
                const user = await getCurrentUser()
                setUsername(user.username);
            }
            catch (error) {
                console.log('An error has occurred when getting user data')
            }
        }
        getUserData();
    }, []); // The empty array as the second argument ensures this effect only runs once

    return(
        <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
            <header>
                <NavBarHeader />
                <h2>Signed in as {username}</h2>
            </header>
            <div className="z-10 max-w-5xl w-full flex items-center justify-center lg:flex ">
        
                <h1 className="text-center text-white">Hello World!</h1>
    
            </div>
                <footer>
                    <h2>Here is a footer</h2>
                </footer>
      </main>
    )
}