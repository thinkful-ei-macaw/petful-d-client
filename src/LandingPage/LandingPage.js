import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='landing-page'>
            <p>Looking for a pet to adopt? Get started by pressing the "Click Me" below!</p>
            <p>You can Adoption a cat, a dog, or both! Adoption is based on FIFO order so you'll have to wait in line to adopt. Once your name is up select the pet that you want to adopt!</p>
            <Link to="/adopt">Click Me</Link>
        </div>
    )
}

export default LandingPage;