// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// // import Config from "../Config";
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


export default class AdoptPage extends React.Component {
  static contextType = Context;

  state = {
      currentUser: '',
      // currentCat: this.context.cats,
      userCanAdopt: false,
      interval: null,
  }

  componentWillUnmount = () => {
      clearInterval(this.state.interval);
  };


  addPerson = (person) => {
      this.setState({
          currentUser: person
      })
  }


  getInLine = () => {
      let count = 0;
      const interval = setInterval(() => {
          this.context.onDeletePerson();
          this.context.onRandomAdoption();
          if (this.context.people[1] === this.state.currentUser) {

              setInterval(() => {
                  if (count === 4) {
                      return clearInterval()
                  }
                  this.context.onQueuePerson()
                  count++
                  console.log(count)

              }, 2000);

          }
          this.userReady();
      }, 2000);
      this.setState({
          interval
      })

  }


  userReady = () => {
      if (this.context.people[1] === this.state.currentUser) {
          clearInterval(this.state.interval);
          this.setState({
              userCanAdopt: true
          });
      };

  }

  adoptCat = () => {

      this.context.onDeleteCat();
      this.context.onDeletePerson();
      this.props.history.push({
          pathname: '/success',
          state: this.context.cats
      })

  }

  adoptDog = () => {
      this.context.onDeleteDog();
      this.context.onDeletePerson();
      this.props.history.push({
          pathname: '/success',
          state: this.context.dogs
      })
  }


  render() {
      // console.log(this.props.history)
      // console.log(this.context.cats)
      console.log(this.context.people)
      return (
          <div className="adoption">
              <div className="adopt-header">
              <h1 >Get Ready to Adopt!</h1>
              <h2>The following people are in line for adoption:</h2>
              </div>
              <div className="people-list">
              <ul>
                  {this.context.people.map(person =>
                      <li key={this.context.people + Math.random()}>
                          {person}
                      </li>
                  )}
              </ul>
              </div>
             
              {!this.state.currentUser && (
                  <Form add={this.addPerson}
                      queueLine={this.getInLine}
                  />
              )}
            
              {this.state.currentUser && !this.state.userCanAdopt && (
                  <p>
                      Excellent! Please wait in line. When your name appears, you will be able to adopt a pet!
                  </p>
              )}
              {this.state.userCanAdopt && <h2>Your turn!</h2>}
              <GetDogs adopt={this.state.userCanAdopt}
                  demoAdopt={this.adoptDog}/>
              <GetCats adopt={this.state.userCanAdopt}
                  demoAdopt={this.adoptCat}/>
          </div>
      )
  }
}


// class AdoptPage extends Component {


//   render() {
//     return (
//       <div className='petContainer'>
//       <Form updatePeople={() => this.props.updatePeople()}></Form>
//       <GetPets
//         cats={this.props.cats}
//         dogs={this.props.dogs}
//         people={this.props.people}
//         updateCats={() => this.props.updateCats()}
//         updateDogs={() => this.props.updateDogs()}
//         updatePeople={() => this.props.updatePeople()}
//         adoptedDogs={this.props.adoptedDogs}
//         adoptedCats={this.props.adoptedCats}
//       ></GetPets>
//     </div>
   
//     );
//   }
// }

// export default AdoptPage;

// state = {

//   name: "",
// };

// componentDidMount() {
//   this.getPeople();
// }

// handleSubmit=e=>{
//     e.preventDefault();
//     let name=this.state.name;
//     this.setState({name:''})

// }


// getPeople = () => {
//   fetch(`${Config.API_ENDPOINT}/people/`, {
//     method: "get",
//     headers: {
//       "content-type": "application/json",
//     },
//   })
//     .then(res => res.json())
//     .then(data => {
//       this.setState({
//         people: data,
//       });
//     });
// };

// static contextType=Context

// <div>
// <p>This is the Adoption Page</p>
// <p>Please enter your name below to enter the pet queue.</p>
// {this.state.people.map(person => (
//   <li>{person}</li>
// ))}
// <form onSubmit={this.handleSubmit}>
// <label htmlFor="name">Name: </label>
// <input type="text" id="name" name="name" value={this.state.name}
// onChange={e => this.setState({name:e.target.value})}
// />
// <button type="submit">Submit</button>
// </form>
// </div>
