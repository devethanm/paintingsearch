import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';

import {
    NavBarHeader, MarketingFooter
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

    async function handleSignOut() {
        try {
            await signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return(
        <main className="flex min-h-screen flex-col items-center justify-between bg-sitemain text-white">
            <header>
                <NavBarHeader 
                    overrides={{
                        NavBarHeader: {backgroundColor: "#F2F2F2"}
                    }}
                />
                <h2>Signed in as {username}</h2>
                <button className="bg-slate-100 text-black" onClick={handleSignOut}>Sign Out</button>
            </header>

            <div className="z-10 max-w-5xl w-full flex items-center justify-center lg:flex ">
        
                <h1 className="text-center text-white text-6xl">Painting Search Engine</h1>
    
            </div>

            <footer>
                <MarketingFooter 
                    overrides={{
                        MarketingFooter: {backgroundColor: "#F2F2F2"}
                    }}
                />
            </footer>
      </main>
    )
}