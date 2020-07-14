import React, {Component} from 'react'
// import {Switch, Route, Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptPage from '../AdoptPage/AdoptPage';
import Context from '../Context';
import config from '../config';
// import Services from '../Services';

export default class Root extends Component {

  state = {
    people: [],
    cats: [],
    dogs: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/people`),
      fetch(`${config.API_ENDPOINT}/pets/cats`),
      fetch(`${config.API_ENDPOINT}/pets/dogs`),
    ])
      .then(([resPeople, resCats, resDogs]) => {
        if (!resPeople.ok) {
          return resPeople.json().then(e => Promise.reject(e));
        }
        if (!resCats.ok) {
          return resCats.json().then(e => Promise.reject(e));
        }
        if (!resDogs.ok) {
          return resDogs.json().then(e => Promise.reject(e));
        }

        return Promise.all([resPeople.json(), resCats.json(), resDogs.json()]);
      })
      .then(([people, cats, dogs]) =>
        this.setState(
          {
            people: people,
            cats: cats,
            dogs: dogs
          }
        ))
      .catch(error => {
        console.error({ error })
      })

  }


  addPeople = (name) => {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name })
    });
    this.setState({
      people: [...this.state.people, name]
    })
  }

  queuePerson = () => {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: `Test Person ${Math.floor(Math.random() * 100)}`,
      })

    })
      .then((res) => {
        if (res.status === 201) {
          return fetch(`${config.API_ENDPOINT}/people`)
            .then((data) => data.json())
            .then((result) => {
              this.setState({
                people: result
              });
            });
        } else {
          throw new Error("The post request failed");
        }
      })
      .catch((err) => {
        console.error(err);
      });;
  }

  deletePeople = () => {
    fetch(`${config.API_ENDPOINT}/people`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 201) {
          return fetch(`${config.API_ENDPOINT}/people`)
            .then((data) => data.json())
            .then((result) => {
              this.setState({
                people: result,
              });
            });
        } else {
          throw new Error("The delete request failed");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  deleteDog = () => {
    fetch(`${config.API_ENDPOINT}/pets/dogs`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 201) {
          return fetch(`${config.API_ENDPOINT}/pets/dogs`)
            .then((data) => data.json())
            .then((result) => {
              this.setState({
                dogs: result,
              });
            });
        } else {
          throw new Error("The delete request failed")
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  deleteCat = () => {
    fetch(`${config.API_ENDPOINT}/pets/cats`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 201) {
          fetch(`${config.API_ENDPOINT}/pets/cats`)
            .then((data) => data.json())
            .then((result) => {
              this.setState({
                cats: result,
              });
            })
        } else {
          throw new Error("Delete request failed")
        }
      })
      .catch((err) => {
        console.err(err);
      })
  }

  randomAdoption = () => {
    let value = Math.floor(Math.random() * 2);
    if (value === 1) {
      this.deleteCat();
    } else {
      this.deleteDog();
    }
  }

  render() {
    console.log(this.state.people)
    const contextValue = {
      people: this.state.people,
      cats: this.state.cats,
      dogs: this.state.dogs,
      onAddPerson: this.addPeople,
      onDeletePerson: this.deletePeople,
      onDeleteDog: this.deleteDog,
      onDeleteCat: this.deleteCat,
      onQueuePerson: this.queuePerson,
      onRandomAdoption: this.randomAdoption
    }

    return (
      <div>
        <Context.Provider value={contextValue}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/adopt' component={AdoptPage} />
            
          </Switch>
        </Context.Provider>
      </div>
    )
  }
}

// function Root() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/adopt" component={AdoptPage} />
//       </Switch>
//     </div>
//   )
// }

// export default Root


// export default class Root extends React.Component {
//   state={
//     cats: {},
//     dogs: {},
//     people: {},
//     adoptedDogs: {},
//     adoptedCats: {},
//   };

//   componentDidMount() {
//     this.updateCats();
//     this.updateDogs();
//     this.updatePeople();
//   }

//   updatePeople = () => {
//     Services.getPeople().then(res =>
//       this.setState({
//         people: res
//       })
//     );
//   };

//   updateCats = () => {
//     Services.getCats().then(res =>
//       this.setState({
//         cats: res
//       })
//     );
//   };

//   updateDogs = () => {
//     Services.getDogs().then(res =>
//       this.setState({
//         dogs: res
//       })
//     );
//   };

//   // filterAdoptedDogs = () => {
//   //   let adoptedDogs = this.state.dogs.filter(dog => dog.adopter !== null);
//   //   return adoptedDogs;
//   // }

//   // filterAdoptedCats = () => {
//   //   let adoptedCats = this.state.cats.filter(cat => cat.adopter !== null);
//   //   return adoptedCats;
//   // }
//   render(){
//   return (
//   <div>
//     <header>
//       <h1>Petful</h1>
//       <nav>
//         <Link to="/">Home</Link>
//         <br />
//         <Link to="/adopt">Adopt A Pet</Link>
//       </nav>
//     </header>
//     <main>
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route exact path="/adopt"
//         render={props=>(
//           <AdoptPage
//           {...props}
//           cats={this.state.cats}
//           dogs={this.state.dogs}
//           people={this.state.people}
//           updatePeople={() => this.updatePeople()}
//           updateCats={() => this.updateCats()}
//           updateDogs={() => this.updateDogs()}
//           adoptedDogs={this.state.dogs}
//           adoptedCats={this.state.cats}
          
//            />)}
//            />
//       </Switch>
//     </main>
//   </div>
//   )
// }}


