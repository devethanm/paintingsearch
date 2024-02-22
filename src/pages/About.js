import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';

// React Router
import { Link, useNavigate} from 'react-router-dom';

import NavbarTail from '../custom-components/NavbarTail';

export default function About() {
    // Navigate variable used to switch routes
    const navigate = useNavigate()

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

    function onHomeClick() { navigate('/home') }
    function onSearchClick() { navigate('/search') }
    function onAboutClick() { navigate('/about') }
    function onAccountClick() { navigate('/account') }

    return(
        <main className="flex min-h-screen flex-col items-center text-white bg-slate-900">

            <div className="flex flex-col items-center min-w-full xl:px-60">

                <NavbarTail 
                    onHomeClick={onHomeClick}
                    onSearchClick={onSearchClick}
                    onAboutClick={onAboutClick}
                    onAccountClick={onAccountClick}
                    onSignOut={handleSignOut}
                    currentActive={2}
                />

                <div className="z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
            
                    <div id="main-content-1" className=" m-20 z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
                        <h1 className="text-center text-white lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-extrabold shadow-xl">About</h1>
                        <h2 className='std-text'>hello</h2>
                    </div>

                </div>

                <footer className="hidden md:block">
                </footer>

            </div>

        </main>
    )
}