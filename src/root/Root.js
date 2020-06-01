import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptPage from '../AdoptPage/AdoptPage';

function Root() {
  return (
  <div>
    <header>
      <h1>Petful</h1>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/adopt">Adopt A Pet</Link>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/adopt" component={AdoptPage} />
      </Switch>
    </main>
  </div>
  )
}

export default Root
