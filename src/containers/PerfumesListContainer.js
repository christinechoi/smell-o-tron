
import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';
import SelectedPerfumes from '../components/SelectedPerfumes';

import { fetchPerfume, addPerfume, getRecommendation } from '../actions/perfumesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PerfumesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      perfumes: [],
      img: [],
      name: [],
      brand: []
    };
  }

  handleOnClick = event => {
    event.preventDefault();
    {debugger};
    this.props.addPerfume(event.target);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleOnSubmit(event) {
    // {debugger};
    event.preventDefault();
    //empty state.perfumes - or 

    this.props.fetchPerfume(this.state);
    // clear search field 
  }

  render() {
    // const perfumesExist = !!this.state.perfumes;
    {debugger};
    return(

      <div>

        {(this.props.name.length === 0) ? null :
          <SelectedPerfumes
            img={this.props.img}
            name={this.props.name}
            
            handleOnClick={this.handleOnClick.bind(this)} 
            /> 
        }
        
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <h3> Search for a Perfume: </h3>
          <p>
            <input
              type="text"
              name="perfumes"
              value={this.state.value}
              onChange ={this.handleChange}
              />
              {this.state.text}
          </p>
          {this.state.value}
          <input type="submit" />
        </form>


        {(this.props.perfumes.length === 0) ? null :
          <SearchResults 
            perfumes={this.props.perfumes} 
            handleOnClick={this.handleOnClick} 
            addPerfume={this.props.addPerfume} /> 
        }

      </div>
      
    );
  }
}
// export default PerfumesListContainer;


const mapStateToProps = (state) => { 
  // {debugger};
  return { 
    perfumes: state.perfumes.perfumes,
    img: state.perfumes.img,
    name: state.perfumes.name
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    addPerfume: addPerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer);

  



