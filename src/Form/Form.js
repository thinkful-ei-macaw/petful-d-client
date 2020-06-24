import React from 'react';
import Services from '../Services';

export default class Form extends React.Component {
  state = {
    name: '',
  };

  handleTextInput = value => {
    this.setState({
      name: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let newName = JSON.stringify(this.state);
    Services.signUp(newName).then(() => this.props.updatePeople())
    alert('You may now adopt the next available pet.');
  }

  render() {
    return (
      <fieldset>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            value={this.state.name}
            onChange={e => this.handleTextInput(e.target.value)}></input>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    );
  }
}