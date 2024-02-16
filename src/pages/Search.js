import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';

import {
    NavBarHeader, MarketingFooter
} from '../ui-components';
   
export default function Search() {
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
        <main className="flex min-h-screen flex-col items-center justify-between text-white bg-bg2 bg-center bg-fixed bg-no-repeat bg-black ">
            <header>
                <NavBarHeader 
                    className="shadow-lg"
                    overrides={{
                        NavBarHeader: {backgroundColor: "#2C3E50"},
                        Search: {color: "#F2F2F2"},
                        Home: {color: "#F2F2F2"},
                        Account: {color: "#F2F2F2"},
                        Button: { onClick: handleSignOut },
                    }}
                />
                <h2>Signed in as {username}</h2>
            </header>

            <div className="z-10 max-w-5xl w-full flex items-center justify-center lg:flex flex-col gap-y-10">
        
                <h1 className="text-center text-white text-6xl font-extrabold shadow-xl">Enter a search term, then click search!</h1>
                <button className=" text-lg font-bold bg-accentmain px-10 rounded-lg py-2 border-white border-2 shadow-xl">Search</button>
    
            </div>

            <footer>
                <MarketingFooter 
                    overrides={{
                        MarketingFooter: {backgroundColor: "#2C3E50"}
                    }}
                />
            </footer>
      </main>
    )
}