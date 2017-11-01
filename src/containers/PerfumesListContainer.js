import React, { Component } from 'react';
import PerfumesList from '../components/PerfumesList';


class PerfumesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    {debugger};
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_PERFUME',
      perfumes: this.state,
    });
    {debugger};
  }

  render() {
    return(
      <div>
        <PerfumesList />
        <h3> dividing line </h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)} />
          </p>
          <p>
            <input
              type="text"
              name="hometown"
              value={this.state.perfume}
              onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        <h3> hello line </h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>Enter Perfume:</label>
            <input 
            type="text"
             />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default PerfumesListContainer;