import React, {Component} from 'react';
import Context from '../Context';
// import Services from '../Services';

export default class Form extends Component {

  state = {
      name: ''
  }

  handleSubmit = e => {
      e.preventDefault();
      let name = this.state.name;
      this.context.onAddPerson(name);
      this.props.add(name);
      this.props.queueLine();
      this.setState({
          name: ''
      })
  }


  static contextType = Context;

  render() {

      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <h2>Please wait in line for your&nbsp;turn</h2>
                  <p>Enter your info below to wait in line</p>
                  <label htmlFor="name">Please enter your name</label>
                  <input type="text" id="name" name="name" value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })} />
                  <button type="submit">Adopt a pet</button>
              </form>
          </div>
      )
  }
}
  // render(){
  //   const {name}=this.props
  //   return(
  //     <ul>
  //     <li>name</li>
  //     </ul>
  //   )
  // }

// export default class Form extends React.Component {
//   state = {
//     name: '',
//   };

//   handleTextInput = value => {
//     this.setState({
//       name: value,
//     });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     let newName = JSON.stringify(this.state);
//     Services.signUp(newName).then(() => this.props.updatePeople())
//     alert('You may now adopt the next available pet.');
//   }

//   render() {
//     return (
//       <fieldset>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <label htmlFor="Name">Name</label>
//           <input
//             type="text"
//             id="Name"
//             value={this.state.name}
//             onChange={e => this.handleTextInput(e.target.value)}></input>
//           <button type="submit">Submit</button>
//         </form>
//       </fieldset>
//     );
//   }
// }