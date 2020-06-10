import React, { Component } from "react";
import { Link } from "react-router-dom";
import Config from "../Config";
import Context from "../Context";

class AdoptPage extends Component {
  state = {
    people: [],
    dogs: [],
    cats: [],
    name: ""
  };

  componentDidMount() {
    this.getPeople();
  }

  handleSubmit=e=>{
      e.preventDefault();
      let name=this.state.name;
      this.setState({name:''})

  }


  getPeople = () => {
    fetch(`${Config.API_ENDPOINT}/people/`, {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          people: data,
        });
      });
  };

  static contextType=Context

  render() {
    return (
      <div>
        <p>This is the Adoption Page</p>
        <p>Please enter your name below to enter the pet queue.</p>
        {this.state.people.map(person => (
          <li>{person}</li>
        ))}
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={this.state.name}
        onChange={e => this.setState({name:e.target.value})}
        />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AdoptPage;
// getPeopleAndPets() {
//     Promise.all([
//       fetch(`${Config.API_ENDPOINT}/people`),

//       fetch(`${Config.API_ENDPOINT}/pets/dogs`),

//       fetch(`${Config.API_ENDPOINT}/pets/cats`),
//     ])
//       .then(([peopleRes, dogsRes, catsRes]) => {
//         if (!peopleRes.ok) {
//           return peopleRes.json().then(err => Promise.reject(err));
//         }

//         if (!dogsRes.ok) {
//           return dogsRes.json().then(err => Promise.reject(err));
//         }

//         if (!catsRes.ok) {
//           return catsRes.json().then(err => Promise.reject(err));
//         }

//         return Promise.all([peopleRes.json(), dogsRes.json(), catsRes.json()]);
//       })
//       .then(([people, cats, dogs]) => {
//         this.setState({ people, cats, dogs });
//       })
//       .catch(error => console.error(error));
//   }
