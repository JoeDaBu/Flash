import React from 'react';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';

const App = () => {
    return (
        <div className="mx-10">
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
