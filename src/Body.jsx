import React, { useState } from 'react';
import { generateJoke } from './jokes.js';
import './body.css';

function Body() {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const [showJoke, setShowJoke] = useState(false); // New state to control visibility

    const setJoke = (s, p) => {
        setSetup(s);
        setPunchline(p);
        setShowJoke(true); // Show joke after setting it
    };

    return (
        <div className="main">
            <div className="header">
                <p className="title">Joke App</p>
            </div>

            <div className="start-button">
                <button
                    className="start-button"
                    onClick={() => generateJoke(setJoke)}
                >
                    Click for a joke!
                </button>
            </div>

            {showJoke && (  // Conditionally render the joke card
                <div className="joke-card">
                    <p className="setup">{setup}</p>
                    <p className="punchline">{punchline}</p>
                </div>
            )}
        </div>
    );
}

export default Body;
