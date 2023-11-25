import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Header />
    </Router>
);
