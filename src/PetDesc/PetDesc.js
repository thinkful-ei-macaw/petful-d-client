import React from 'react';
import Services from '../Services';

export default class PetDesc extends React.Component {
  state = {
    currentPetIndex: 0,
  };

  goToNextPet = () => {
    let petIndex = this.state.currentPetIndex;
    if (petIndex < this.props.pets.length - 1) {
      this.setState({
        currentPetIndex: ++petIndex,
      });
    }
  };

  goToPreviousPet = () => {
    let petIndex = this.state.currentPetIndex;
    if (petIndex > 0) {
      this.setState({
        currentPetIndex: --petIndex,
      });
    }
  };

  adoptAPet = () => {
    if (this.props.petType === 'cat' && this.props.people[0]) {
      Services.adoptCat()
      .then(() => this.props.updateCats())
      .then(() => this.props.updatePeople());
    }
    else if (this.props.petType === 'dog' && this.props.people[0]) {
      Services.adoptDog()
      .then(() => this.props.updateDogs())
      .then(() => this.props.updatePeople());
    } 
    else if (!this.props.people[0]) {
      alert('Please fill in your name to adopt a pet.')
    }
  };

  render() {
    let pets = this.props.pets || {};
    console.log(pets,"look")
    let petIndex = this.state.currentPetIndex;
    let adoptButton =
      (this.state.currentPetIndex === 0 && !pets.adopter) ? (
        <button
          className="adopt-button"
          disabeled={pets.adopter == null ? 1 : 0}
          onClick={() => this.adoptAPet()}>
          adopt me
        </button>
      ) : (
        <button className="adopt-button" disabled>
          {pets.adopter == null
            ? 'waiting to be adopted'
            : `I'm reserved by
          ${pets.adopter}`}
        </button>
      );

    return (
      <div className="pet-description">
        <div className="pet-nav-buttons">
          <button
            className="prev-button"
            onClick={() => this.goToPreviousPet()}
            disabled={petIndex > 0 ? 0 : 1}>
            prev
          </button>
          <button
            className="next-button"
            onClick={() => this.goToNextPet()}
            disabled={petIndex < this.props.pets.length - 1 ? 0 : 1}>
            next
          </button>
        </div>
        <figure className="pet-image-container">
          <img
            className="pet-image"
            src={pets.imageURL}
            alt={pets.imageDescription}
          />
        </figure>
        <div className="pet-details">
          <ul>
            <li>Name: {pets.name}</li>
            <li>Sex: {pets.sex}</li>
            <li>Age: {pets.age}</li>
            <li>Breed: {pets.breed}</li>
            <li>Story: {pets.story}</li>
          </ul>
          {adoptButton}
        </div>
      </div>
    );
  }
}