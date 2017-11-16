import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPerfume, deletePerfume, getRecommendation } from  './actions/perfumesActions';
import { Divider, Segment } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';
import PerfumesListContainer from './containers/PerfumesListContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';

class App extends Component {

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>

        <PerfumesListContainer  />

        <RecommendationsContainer />  
      
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  {debugger};
  return { 
    perfumes: state.perfumes.perfumes,
    img: state.perfumes.img,
    name: state.perfumes.name,
    brand: state.perfumes.brand,
    id: state.perfumes.id,
    recommendations: state.perfumes.recommendations,
    basedOn: state.perfumes.basedOn
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
