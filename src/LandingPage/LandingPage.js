import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='landing-page'>
            <p>Looking for a pet to adopt? Get started by pressing the button below!</p>
            <Link to="/adopt">Click Me</Link>
        </div>
    )
}

export default LandingPage;