import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Config from "../Config";
import GetPets from '../GetPets/GetPets';
import Form from '../Form/Form';

class AdoptPage extends Component {


  render() {
    return (
      <div className='petContainer'>
      <Form updatePeople={() => this.props.updatePeople()}></Form>
      <GetPets
        cats={this.props.cats}
        dogs={this.props.dogs}
        people={this.props.people}
        updateCats={() => this.props.updateCats()}
        updateDogs={() => this.props.updateDogs()}
        updatePeople={() => this.props.updatePeople()}
        adoptedDogs={this.props.adoptedDogs}
        adoptedCats={this.props.adoptedCats}
      ></GetPets>
    </div>
   
    );
  }
}

export default AdoptPage;

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
