
import React, { Component } from 'react';
import PerfumesList from '../components/PerfumesList';
import SearchResults from '../components/SearchResults';

import { fetchPerfume, addPerfume } from '../actions/perfumesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PerfumesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      perfumes: ''
    };
  }

  handleOnClick(event) {
    console.log('in handleClick');
    event.preventDefault();
    {debugger};
    this.props.addPerfume(event.target);
  }


  handleChange =event => {
    this.setState({
      value: event.target.value
    });
  }

  handleOnSubmit(event) {
    {debugger};
    event.preventDefault();
    this.props.fetchPerfume(this.state);
  }

  render() {
    return(
      <div>
        
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

        <SearchResults 
          perfumes={this.props.perfumes} 
          handleOnClick={this.handleOnClick.bind(this)} 
          addPerfume={this.props.addPerfume} />
        
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
    fetchPerfume: fetchPerfume,
    addPerfume: addPerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer);

  



