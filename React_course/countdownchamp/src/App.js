import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';


// Should've been .jsx file according to course, but not working
// Help says it's OK to use App.js.
// jsx looks just like HTML - but its not (className for instance)

// Component independent, resusable UI
class App extends Component {

  // Define local state. Idea: update state dynamically
  // Set state. Specific method in React
  // props is a convention. Inherent data
  constructor(props) {
    super(props);
    console.log('Constructor called');
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  // This is a method
  // Never mutate or change state directly.
  // Do not: this.state.deadlin = 'November 25, 2017'.
  // solution: pass key value pair object
  // { .. } is a Javascript object
  // console.log('state', this.state); to see state variables
  changeDeadline() {
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
    // Returns any jsx that we would like
    <div className="App">
      <div className="App-title">
        Countdown to {this.state.deadline}
      </div>
        <Clock
          deadline={this.state.deadline}
        />
      <Form inline>
        {/* Note event variable
            Updates every time the user inputs in the form.
            event => console.log('event', event.target.value)
           <FormControl> was previously <input> */}
        <FormControl
          className='Deadline-input'
          placeholder='new date'
          onChange={event => this.setState({newDeadline: event.target.value})}
        />
        {/* () => .. anonymus function.}
            Should not pass this.changeDeadline directly */}
        <Button onClick={() => this.changeDeadline()}>
          Submit
        </Button>
      </Form>

    </div>
  )
  }
}

export default App;
