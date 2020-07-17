import React, { Component } from "react";
import './AdoptPage.css';
import Services from '../Services';
import Form from '../Form/Form';

class AdoptPage extends Component {
  state = {
    typeOfPet: "dog",
    dog: {},
    cat: {},
    people: [],
    first: false,
    removeTimer: null,
  };

  componentDidMount() {

    Services.getPeople()
      .then((person) => {
        this.setState({
          people: person,
        });
      });

    Services.getDog()
      .then((dog) => {
        this.setState({
          dog: dog,
        });
      });

    Services.getCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
  }

  postUser = (name) => {
    Services.addPerson(name)
      .then((people) => {
        this.setState({
          people
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let type = e.target["pet-type"].value;
    let user = e.target["addName"].value;
    this.postUser(user);

    let removeTimer = setInterval(() => {
      this.handleTimerFuncs();
    }, 5000);

    this.setState({
      typeOfPet: type,
      removeTimer,
    });
  };

  handleTimerFuncs = () => {
    let newPeople = [
      "Jacob Ray",
      "Barb Cyrus",
      "Sam Trevor",
      "J Roc"
    ];

    if (this.state.people.length > 1) {
      Services.deletePerson(this.state.people[0])
        .then((people) => {
          this.setState({
            people,
          });
        });
      Services.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
      Services.deleteCat()
        .then((cat) => {
          this.setState({
            cat: cat,
          });
        });
    } else {

      clearInterval(this.state.removeTimer);
      let i = 0;
      let addInterval = setInterval(() => {
        this.postUser(newPeople[i]);
        i++;
      }, 5000);
      this.postUser("Phil Collins")

      this.setState({
        first: true
      })


      setTimeout(() => {
        clearInterval(addInterval);
      }, 20000);
    }
  };

  renderPeople = () => {
    let people = this.state.people;
    if (people.length > 1) {
      return people.map((person, index) => (
        <Form key={index} name={person} />
      ));
    }
    return <Form key="0" name={people[0]} />;
  };

  renderDog = () => {
    let { dog } = this.state;
    return (
      <section>
        <ul>
          <img src={dog.imageURL} alt={dog.description}></img>
          <li>Name: {dog.name}</li>
          <li>Gender: {dog.gender}</li>
          <li>Breed: {dog.breed}</li>
          <li>Description: {dog.description}</li>
          <li>Journey to the Shelter: {dog.story}</li>
        </ul>
      </section>
    );
  };

  renderCat = () => {
    let { cat } = this.state;
    return (
      <section>
        <img src={cat.imageURL} alt={cat.description}></img>
        <ul>
          <li>NAME: {cat.name}</li>
          <li>GENDER: {cat.gender}</li>
          <li>BREED: {cat.breed}</li>
          <li>Physical Description: {cat.description}</li>
          <li>Story of the Journey to the Shelter: {cat.story}</li>
        </ul>
      </section>
    );
  };

  handleAdopt = () => {
    Services.deletePerson(this.state.people[0])
      .then((people) => {
        this.setState({
          people,
          first: false,
        });
      });
    if (this.state.typeOfPet === 'dog') {
      Services.deleteDog()
        .then((dog) => {
          this.setState({
            dog: dog,
          });
        });
    } else {
      Services.deleteCat()
      .then((cat) => {
        this.setState({
          cat: cat,
        });
      });
    }
    alert(`Congrats, you've adopted ${this.state.typeOfPet}!!`)
  };

  render() {
    return (
      <div>
        <header>
          <h1>Adoption</h1>
        </header>

        <main>
          <section>
            <h3>PET ON STAGE</h3>
            {this.state.typeOfPet === "dog"
              ? this.renderDog()
              : this.renderCat()}
            <h3>QUEUE</h3>
            {this.renderPeople()}
          </section>

          <section id="form">
            <form
              onSubmit={this.handleSubmit}
              name="addNameToList"
              id="addNameToList"
            >
            
              <select name="pet-type" defaultValue="dog">
                <option>-select your pet-</option>
                <option>dog</option>
                <option>cat</option>
              </select>
              <label htmlFor="addName">Your Name:</label>
              <input type="text" name="addName" id="addName"></input>
              <button type="submit">get in line</button>
              {this.state.first ? (
                <button onClick={this.handleAdopt} type="button">
                  adopt a baby!
                </button>
              ) : (
                ""
              )}
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default AdoptPage;