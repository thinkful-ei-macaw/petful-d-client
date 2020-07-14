import React from 'react';
// import PetDesc from '../PetDesc/PetDesc'


export default class  GetPets extends React.Component {
  displayUsers(){
    let currNode = this.props.users.first
    let i = 0
    let usersArr = []
    while(currNode!== null){
      usersArr.push(<p key={i}>{currNode.data}</p>)
      i++
      currNode = currNode.next
    }
    return usersArr

  }
  render() {
    return(
      <>
      <div className='Users'>
      <h2>Users Queue</h2>
      {this.displayUsers()}
      </div>
      <div className='Cats__body'>
        <h2>Cats</h2>
        <img className='cat__img' src={this.props.cat.image} alt="cats"></img>
        <ul className='pets__ul'>
          <li>
            Name: {this.props.cat.name}
          </li>
          <li>
            Gender: {this.props.cat.gender}
          </li>
          <li>
            Age:{this.props.cat.age}
          </li>
          <li>
            Breed: {this.props.cat.breed}
          </li>
          <li>
            Story: {this.props.cat.story}
          </li>
        </ul>
        {(this.props.disabled  || this.props.adoptable.name !== this.props.cat.name) && (
          <p style={{color:'white',backgroundColor:'lightcoral',padding:10,textAlign:'center',  margin:'0px 10px',borderRadius:7,}} >This cat is in queue you cannot adopt this pet</p>
        )}
        {/**this pet is in queue you cannot adopt this pet */}
        <button className='adopt__btn' type="button" disabled={this.props.disabled || this.props.count !== 0 || this.props.adoptable.name !== this.props.cat.name} onClick={()=>this.props.handleCatAdopt()}>Adopt</button>
      </div>
      <div className='Dogs__body'>
      <h2>Dogs</h2>
      <img className='dog__img' src={this.props.dog.image} alt="dogs"></img>
      <ul className='pets__ul'>
        <li>
          Name: {this.props.dog.name}
        </li>
        <li>
          Gender: {this.props.dog.gender}
        </li>
        <li>
          Age:{this.props.dog.age}
        </li>
        <li>
          Breed: {this.props.dog.breed}
        </li>
        <li>
          Story: {this.props.dog.story}
        </li>
      </ul>
      {(this.props.disabled  || this.props.adoptable.name !== this.props.dog.name) && (
        <p style={{color:'white',backgroundColor:'lightcoral',padding:10,textAlign:'center', margin:'0px 10px',borderRadius:7,}} >This dog is in queue you cannot adopt this pet</p>
      )}


      <button className='adopt__btn'  type="button" disabled={this.props.disabled  || this.props.count !== 0 || this.props.adoptable.name !== this.props.dog.name} onClick={()=>this.props.handleDogAdopt()}>Adopt</button>
    </div>
    </>
    )
  }

 
}


    // renderAdoptedPets() {
    //   let adoptedPetsArr = [this.props.adoptedCats,this.props.adoptedDogs]
    //   console.log(adoptedPetsArr,"arrAdopted");
    //   let adoptedPets = adoptedPetsArr.map((pet, index) => {
    //     return (
    //       <li key={index} className="adoptedPet">
    //         <img src={pet.imageURL || ""} />
    //       </li>
    //     );
    //   });
  
      
    //   return adoptedPets;
    // }
  
    // // renderAdoptedCats() {
    // //   let adoptedCats = this.props.adoptedCats.map((cat, index) => {
    // //     return (
    // //       <li key={index} className="adoptedCat">
    // //         <img src={cat.imageURL} />
    // //       </li>
    // //     );
    // //   });
    // //   return adoptedCats;
    // // }
  
  
    // render() {
    //   return (
    //     <div className="pets">
    //       <div className="pet-descriptions">
    //         <PetDesc
    //           className="cat-desc"
    //           pets={this.props.cats}
    //           petType="cat"
    //           updateCats={() => this.props.updateCats()}
    //           updatePeople={() => this.props.updatePeople()}
    //           people={this.props.people}></PetDesc>
    //         <PetDesc
    //           className="dogs-desc"
    //           pets={this.props.dogs}
    //           petType="dog"
    //           updateDogs={() => this.props.updateDogs()}
    //           updatePeople={() => this.props.updatePeople()}
    //           people={this.props.people}></PetDesc>
    //       </div>
    //       <ul className="adoptedPets">
    //         {this.renderAdoptedPets()}
    //       </ul>
    //     </div>
    //   );
    // }
  