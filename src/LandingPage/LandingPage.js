import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <>
     
      <main className="container">
     
      <section className="home-cat">
        <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="orange bengal cat laying on concrete"></img>
      </section>
      </main>


        <div className='description'>
            <p>Looking for a pet to adopt? Get started by pressing the "Click Me" below!</p>
            <p>You can Adoption a cat, a dog, or both! Adoption is based on FIFO order so you'll have to wait in line to adopt. Once your name is up select the pet that you want to adopt!</p>
            <Link to="/adopt">Click Me</Link>
        </div>
        </>
    )
}

export default LandingPage;