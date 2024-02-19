import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// App Pages
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Results from './pages/Results';
import Account from './pages/Account';

// Google Authentication 
import { withAuthenticator } from '@aws-amplify/ui-react';



function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} /> 
                <Route path="/home/" element={<Home />} />
                <Route path="/search/" element={<Search />} />
                <Route path="/about/" element={<About />} />
                <Route path="/about/" element={<Account />} />
                <Route path="/results/" element={<Results />} />
                <Route path="/account/" element={<Account />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

// Wrap entire app with authentication
export default withAuthenticator(App);
