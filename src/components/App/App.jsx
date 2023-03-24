import React from 'react';
import { useState } from 'react'; 
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <div>
                <ShoppingList />
            </div>
        </div>
    );
}

export default App;
