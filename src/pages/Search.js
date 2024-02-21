import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect, useCallback } from 'react';

// for throttling api calls
import { throttle } from 'lodash';

// for unique key generation
import { SHA256 } from 'crypto-js'

// React Router
import { Link, useNavigate} from 'react-router-dom';

// Wikidata api functions
import { getMatchingSearches } from '../lib/wikidata';
import { parseMatchingSearches } from '../lib/wikidata';

import NavbarTail from '../custom-components/NavbarTail';

import SearchResult from '../custom-components/SearchResult';

export default function Search() {

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

    const [searchTerm, setSearchTerm] = useState('');

    // Create a state to store matched search terms
    const [searchMatches, setSearchMatches] = useState([]);

    // Throttled API call function
    const throttledGetMatches = useCallback(throttle(async (term) => {
        try {
            const matches = await getMatchingSearches(term);
            const parsedData = await parseMatchingSearches(matches);
            setSearchMatches(parsedData);
        } catch (error) {
            console.log('An error has occurred when getting user data');
        }
    }, 500), []); // Empty dependency array to ensure this is setup once per component mount

    useEffect(() => {
        if (searchTerm && searchTerm.trim() !== "") {
            throttledGetMatches(searchTerm);
        }
    }, [searchTerm, throttledGetMatches]);

    const handleInputChange = (event) => {

        console.log(event.target.value);
        setSearchTerm(event.target.value);

    };

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

    const generateUniqueKey = (str) => {
        return SHA256(str).toString();
    };

    return(
        <main className="flex min-h-screen flex-col items-center text-white bg-bg2 bg-center bg-fixed bg-no-repeat bg-black">

            <div className="flex flex-col items-center min-w-full xl:px-60">

                <NavbarTail 
                    onHomeClick={onHomeClick}
                    onSearchClick={onSearchClick}
                    onAboutClick={onAboutClick}
                    onAccountClick={onAccountClick}
                    onSignOut={handleSignOut}
                    currentActive={1}
                />

                <div className="z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
            
                    <div id="main-content-1" className=" m-20 z-10 max-w-5xl w-full flex items-center justify-between lg:flex flex-col gap-y-10 font-head">
                        <h2 className='std-text'>Enter a search term and click search!</h2>

                        <div>
                            <div id="searchFormBox" className="relative mt-2 rounded-md shadow-sm max-w-fit">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                </div>
                                    <input
                                        type="text"
                                        name="searchterm"
                                        id="searchBox"
                                        className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Enter your Search Term"
                                        value={searchTerm}
                                        onChange={handleInputChange}
                                    />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                </div>

                                {searchMatches && searchMatches.results? (
                                    searchMatches.results.map((e, index) => (
                                        // change this to a custom searchResult component or something like that
                                        <SearchResult
                                            key={generateUniqueKey(index + e.value)}
                                            value={e.value}
                                            desc={e.desc}
                                        />
                                    ))
                                ) : (
                                    // Render loading state or placeholder if data is not available yet
                                    <p>Loading...</p>
                                )}
                            </div>

                        </div>

                        <Link to={`/results?searchTerm=${encodeURIComponent(searchTerm)}`}>
                            <button className=" text-lg font-bold bg-accentmain px-10 rounded-lg py-2 border-white border-2 shadow-xl">Search!</button>
                        </Link>
                    </div>

                </div>

                <footer className="hidden md:block">
                </footer>

            </div>

        </main>
    )
}