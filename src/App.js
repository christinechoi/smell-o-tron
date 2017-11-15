import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPerfume, deletePerfume, getRecommendation } from  './actions/perfumesActions';

import logo from './logo.svg';
import './App.css';
import PerfumesListContainer from './containers/PerfumesListContainer';
import SavedPerfumesContainer from './containers/SavedPerfumesContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PerfumesListContainer  />

        <SavedPerfumesContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  // {debugger};
  return { 
    perfumes: state.perfumes.perfumes,
    img: state.perfumes.img,
    name: state.perfumes.name,
    brand: state.perfumes.brand
   };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    getRecommendation: getRecommendation,
    deletePerfume: deletePerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
