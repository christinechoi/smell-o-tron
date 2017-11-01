import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPerfume } from  './actions/perfumesActions';

import logo from './logo.svg';
import './App.css';
import PerfumesListContainer from './containers/PerfumesListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <PerfumesListContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { 
    perfumes: state.perfumes 
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPerfume: addPerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
