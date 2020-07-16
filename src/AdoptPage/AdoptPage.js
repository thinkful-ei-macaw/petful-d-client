// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
import config from "../config";
// import GetPets from '../GetPets/GetPets';
// import Form from '../Form/Form';

import React, { Component } from "react";
// import "./Adoption.css";
// import Services from '../Services';
import Form from '../Form/Form';
// import config from "../config";
import GetCats from '../GetCats/GetCats';
import GetDogs from '../GetDogs/GetDogs';
import Context from '../Context';
// import Services from '../Services';


export default class AdoptPage extends Component {
    state = {
      dog: {},
      cat: {},
      otherCats: [],
      otherDogs: [],
      people: [],
      currentUser: null,
      petChoice: true
    };
  
    componentDidMount() {
      fetch(`${config.API_ENDPOINT}/pets`).then((res) => res.json()).then((data) => {
        console.log('data:', data)
        this.setState({
          dog: data.nextDog,
          cat: data.nextCat,
          otherCats: data.allCats.slice(2,4),
          otherDogs: data.allDogs.slice(2,4),
        });
      });
      fetch(`${config.API_ENDPOINT}/people`).then((res) => res.json()).then((data) => {
        console.log(data);
        this.setState({
          people: data
        });
      });
    }
  
    onJoinQueue(e) {
      e.preventDefault();
      const name = { Name: e.target.name.value };
      const add = this.state.people;
      add.push(e.target.name.value);
  
      fetch(`${config.API_ENDPOINT}/people`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(name)
      });
  
      this.setState({
        people: add,
        currentUser: e.target.name.value
      });
      let thisPage = this;
  
      let interval = setInterval(function() {
        let petChoice;
  
        if (thisPage.state.petChoice === true) {
          petChoice = { type: 'cat' };
        } else {
          petChoice = { type: 'dog' };
        }
  
        thisPage.fetchData(petChoice);
  
        thisPage.setState({
          petChoice: !thisPage.state.petChoice
        });
        if (thisPage.state.people[1] === thisPage.state.currentUser) {
          clearInterval(interval);
        }
      }, 5000);
  
      e.target.name.value = '';
    }
  
    fetchData(petChoice) {
      fetch(`${config.API_ENDPOINT}/pets`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(petChoice)
      })
        .then(() => {
          return fetch(`${config.API_ENDPOINT}/pets`);
        })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            dog: data.nextDog,
            cat: data.nextCat
          });
          return fetch(`${config.API_ENDPOINT}/people`);
        })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            people: data
          });
        });
    }
  
    nextInLine() {
      const newNames = [
        { Name: 'Sasha Morales' },
        { Name: 'Trinity Hart' },
        { Name: 'Ariel Forrest' },
        { Name: 'Bob Pilterfrost' }
      ];
      const thisPage = this;
      let counter = 3;
      const add = this.state.people;
      add.push(newNames[counter].Name);
  
      let interval = setInterval(function() {
        fetch(`${config.API_ENDPOINT}/people`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newNames[counter--])
        }).then(() => {
          thisPage.updatePeopleList();
        });
        if (counter === -1) {
          clearInterval(interval);
        }
      }, 5000);
    }
  
    updatePeopleList = () => {
      fetch(`${config.API_ENDPOINT}/people`).then((res) => res.json()).then((data) => {
        console.log(data);
        this.setState({
          people: data
        });
      });
    };
  
    adopt(e) {
      e.preventDefault();
      let type = { type: e.target.id };
      this.fetchData(type);
      alert('Congratulations! You have successfully adopted your new pet!!');
    }
  
    render() {
      const { dog, cat, people, otherCats, otherDogs, currentUser } = this.state
      // const people = this.state.people;
      // const dog = this.state.dog;
      // const cat = this.state.cat;
      if (people[0] === currentUser && people.length === 1) {
        this.nextInLine();
      }
      return (
        <div className='adoption'>
          <h1>Adopt a Pet</h1>
          <div className='pets-container'>
            <div className='dogBox'>
              <h2>Next Dog Up!</h2>
              <img src={dog.imageURL} alt={dog.description} />
              <li className='imageDesc'>
                <br />
                <em>"{dog.description}"</em>
              </li>
              <ul>
                <br />
                <li>Name: {dog.name}</li>
                <br />
                <li>Gender: {dog.gender}</li>
                <br />
                <li>Age: {dog.age} years old</li>
                <br />
                <li>Breed: {dog.breed}</li>
                <br />
                <li>Story: {dog.story}</li>
              </ul>
              {this.state.currentUser &&
              this.state.currentUser === people[0] && (
                <form id='dog'>
                  <button id='dog' onClick={(e) => this.adopt(e)}>
                    Adopt Me!
                  </button>
                </form>
              )}
            </div>
            <div className='catBox'>
              <h2>Next Cat Up!</h2>
              <img src={cat.imageURL} alt={cat.description} />
              <li className='imageDesc'>
                <br />
                <em>"{cat.description}"</em>
              </li>
              <ul>
                <br />
                <li>Name: {cat.name}</li>
                <br />
                <li>Gender: {cat.gender}</li>
                <br />
                <li>Age: {cat.age} years old</li>
                <br />
                <li>Breed: {cat.breed}</li>
                <br />
                <li>Story: {cat.story}</li>
              </ul>
  
              <div className='other-pets'>
                <ul>
                  {otherCats.map((cat, i) => 
                    <li key={i}>{cat.name}</li>)}
                  {otherDogs.map((dog, i) => 
                    <li key={i}>{dog.name}</li>)}
                </ul>
              </div>
  
              {this.state.currentUser &&
              this.state.currentUser === people[0] && (
                <form id='cat'>
                  <button id='cat' onClick={(e) => this.adopt(e)}>
                    Adopt Me!
                  </button>
                </form>
              )}
            </div>
          </div>
          <section className='adoptionQ'>
            <h3>In love yet? Join the queue below...</h3>
            <label>Adoption Queue</label>
            <ol>{people.map((person, i) => <li key={i}>{person}</li>)}</ol>
            <form onSubmit={(e) => this.onJoinQueue(e)}>
              <label>Name:</label>
              <input type='text' name='name' />
              <button>Join Queue</button>
            </form>
          </section>
        </div>
      );
    }
  }