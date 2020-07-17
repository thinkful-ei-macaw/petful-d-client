import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptPage from '../AdoptPage/AdoptPage';

export default class Root extends Component {
  render() {
    return (
      <Switch>
 
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Adopt' component={AdoptPage} />
      </Switch>
    );
  }
}



