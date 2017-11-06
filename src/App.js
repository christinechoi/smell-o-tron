import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPerfume, addPerfume } from  './actions/perfumesActions';

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

        <PerfumesListContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  console.log('in map state to props')
  // {debugger};
  return { 
    perfumes: state.perfumes,
    selectedPerfumes: state.selectedPerfumes
   };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    addPerfume: addPerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
