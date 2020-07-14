import React from 'react';
import PetDesc from '../PetDesc/PetDesc'


export default class GetPets extends React.Component {

    renderAdoptedPets() {
      let adoptedPetsArr = [this.props.adoptedCats,this.props.adoptedDogs]
      console.log(adoptedPetsArr,"arrAdopted");
      let adoptedPets = adoptedPetsArr.map((pet, index) => {
        return (
          <li key={index} className="adoptedPet">
            <img src={pet.imageURL || ""} />
          </li>
        );
      });
  
      
      return adoptedPets;
    }
  
    // renderAdoptedCats() {
    //   let adoptedCats = this.props.adoptedCats.map((cat, index) => {
    //     return (
    //       <li key={index} className="adoptedCat">
    //         <img src={cat.imageURL} />
    //       </li>
    //     );
    //   });
    //   return adoptedCats;
    // }
  
  
    render() {
      return (
        <div className="pets">
          <div className="pet-descriptions">
            <PetDesc
              className="cat-desc"
              pets={this.props.cats}
              petType="cat"
              updateCats={() => this.props.updateCats()}
              updatePeople={() => this.props.updatePeople()}
              people={this.props.people}></PetDesc>
            <PetDesc
              className="dogs-desc"
              pets={this.props.dogs}
              petType="dog"
              updateDogs={() => this.props.updateDogs()}
              updatePeople={() => this.props.updatePeople()}
              people={this.props.people}></PetDesc>
          </div>
          <ul className="adoptedPets">
            {this.renderAdoptedPets()}
          </ul>
        </div>
      );
    }
  }