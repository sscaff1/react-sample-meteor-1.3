//contents of sample-form.jsx
import React from 'react';

class SampleForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const userEntered = this.refs.userInput.value;
    alert('You entered: '+ userEntered);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref="userInput" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SampleForm;
