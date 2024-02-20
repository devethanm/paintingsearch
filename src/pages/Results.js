import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';

// for unique key generation
import { SHA256 } from 'crypto-js'

// React Router
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Wikidata API Functions
import { getPaintings } from '../lib/wikidata';
import { parsePaintings } from '../lib/wikidata';

import NavbarTail from '../custom-components/NavbarTail';
import Artwork from '../custom-components/Artwork';
   
export default function Results() {
    // Navigate variable used to switch routes
    const navigate = useNavigate()

    // useLocation hook from react-router-dom used to retrieve URL query parameter :)
    const location = useLocation();

    // paintings data useState!
    const [paintings, setPaintings] = useState([]);

    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('searchTerm');

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

    // Use effect to retrieve paintings and update the paintings variable!
    useEffect( () => {
        async function fetchData() {
            try {
                const data = await getPaintings(searchTerm);
                const parsedData = parsePaintings(data);
                setPaintings(parsedData);
            } catch (error) {
                console.error('Error fetching painting data:', error);
            }
        }

        fetchData();
    }, []); // Empty dependency array means the effect only runs once

    const generateUniqueKey = (str) => {
        return SHA256(str).toString();
    };

    return(
        <main className="flex min-h-screen flex-col relative items-center text-white bg-bg2 bg-center bg-fixed bg-no-repeat bg-black">

            <div className="flex flex-col items-center min-w-full xl:px-60">

                <NavbarTail 
                    onHomeClick={onHomeClick}
                    onSearchClick={onSearchClick}
                    onAboutClick={onAboutClick}
                    currentActive={4}
                />
                <h2>Signed in as {username}</h2>

                <div className="z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
            
                    <div id="main-content-1" className=" m-20 z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
                        <h2 className='std-text'>{`" ${searchTerm} "`}</h2>
                        <h2 className='std-text'>Search Results:</h2>

                        {paintings && paintings.results ? (
                            // Render paintings if data is available
                            paintings.results.map((e, index) => (
                                <Artwork
                                    key={generateUniqueKey(e.value)}
                                    image={e.image}
                                    footer1={e.value}
                                    footer2={e.label}
                                />
                            ))
                        ) : (
                            // Render loading state or placeholder if data is not available yet
                            <p>Loading...</p>
                        )}

                        <div className="fixed bottom-5 z-50">
                            <Link to="/search">
                                <button className="text-lg font-bold bg-accentmain px-10 rounded-lg py-2 border-white border-2 shadow-xl">Search Again</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <footer className="hidden md:block">
                </footer>

            </div>

        </main>
    )
}