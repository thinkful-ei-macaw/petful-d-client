import React, {Component} from 'react'
// import {Switch, Route, Link} from 'react-router-dom';
// import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptPage from '../AdoptPage/AdoptPage';
import Context from '../Context';
import config from '../config';
import {BrowserRouter, Route} from 'react-browser-router';
// import Success from '../Success/Success';
export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
 
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Adopt' component={AdoptPage} />
      </BrowserRouter>
    );
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


