import React from 'react';
import { useState } from 'react'; 
import Header from '../Header/Header.jsx'
import './App.css';
import AddItem from '../AddItem/AddItem.jsx'; 
import DeleteItem from '../DeleteItem/DeleteItem.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <div>
                <AddItem />
                <DeleteItem />
            </div>
        </div>
    );
}

export default App;
