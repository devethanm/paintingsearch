import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react'

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// App Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Google Authentication 
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} /> 
                <Route path="/home/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

// Wrap entire app with authentication
export default withAuthenticator(App);
