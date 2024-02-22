import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { useState, useEffect, useCallback } from 'react';

// for throttling api calls
import { throttle } from 'lodash';

// for unique key generation
import { SHA256 } from 'crypto-js'

// React Router
import { useNavigate} from 'react-router-dom';

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

    const [searchTarget, setSearchTarget] = useState('');

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

    // Throttled api call function
    const throttledGetMatches = useCallback(throttle(async (term) => {
        try {
            const matches = await getMatchingSearches(term);
            const parsedData = await parseMatchingSearches(matches);
            setSearchMatches(parsedData);
        } catch (error) {
            console.log('An error has occurred when getting user data');
        }
        // 500 millisecond delay to throttle api calls
    }, 500), []); // empty dependency array to ensure this is setup once per component mount 

    useEffect(() => {
        if (searchTerm && searchTerm.trim() !== "") {
            throttledGetMatches(searchTerm);
        }
        else if (searchTerm && searchTerm.trim() === ""){
            // make it so that if the user deletes what they're typing it calls all  search results
        }
    }, [searchTerm, throttledGetMatches]);

    useEffect(() => {
        function pickSearchTarget(index) {
            try {
                if(searchMatches && searchMatches.results) {
                    const target = {
                        id: searchMatches.results[index].id,
                        value: searchMatches.results[index].value,
                        desc: searchMatches.results[index].desc,
                    }
                    setSearchTarget(target);
                }
            }
            catch (error) {
                console.log('An error has occurred when getting user data')
                console.log(error)
            }
        }

        pickSearchTarget(0);
    }, [searchMatches]);

    const handleInputChange = (event) => {
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

    const handleSearch = () => {
        if( searchMatches && searchMatches.results && searchTerm.trim() !== "" ) {
            navigate(`/results?searchTerm=${encodeURIComponent(searchTarget.value)}&searchID=${encodeURIComponent(searchTarget.id)}`);
        }
        else {
            alert("You must enter a search term");
        }
    }

    const onResultClick = (index) => {
        try {
            if(searchMatches && searchMatches.results) {
                const target = {
                    id: searchMatches.results[index].id,
                    value: searchMatches.results[index].value,
                    desc: searchMatches.results[index].desc,
                }

                setSearchTarget(target);
                setSearchTerm(target.value);
            }
        }
        catch (error) {
            console.log('An error has occurred when getting user data')
            console.log(error)
        }
    }

    return(
        <main className="flex min-h-screen flex-col items-center text-white bg-slate-900">

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
                        <h2 className='std-text'>Enter and select a term, then click search!</h2>
                        <h2 id="searchTermDisplay" className='std-text'>Search Term: {searchTerm}</h2>
                        <h3 id="searchDescDisplay" className='std-text'>{searchTarget.desc}</h3>
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
                                            active={false}
                                            onResultClick={() => onResultClick(index)}
                                        />
                                    ))
                                ) : (
                                    // Render loading state or placeholder if data is not available yet
                                    <p></p>
                                )}

                            </div>

                        </div>

                        <button onClick={handleSearch} className=" text-lg font-bold bg-accentmain px-10 rounded-lg py-2 border-white border-2 shadow-xl">Search!</button>

                    </div>

                </div>

                <footer className="hidden md:block">
                </footer>

            </div>

        </main>
    )
}