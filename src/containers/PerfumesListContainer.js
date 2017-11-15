
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SearchResults from '../components/SearchResults';
import SelectedPerfumes from '../components/SelectedPerfumes';

import { fetchPerfume, addPerfume, deletePerfume, getRecommendation } from '../actions/perfumesActions';
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

  removeOnClick = event => {
    event.preventDefault();
    {debugger};
    this.props.deletePerfume(event.target);
  }

  handleOnClick = event => {
    event.preventDefault();
    {debugger};
    this.props.addPerfume(event.target, event.currentTarget.childNodes[1]);
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
    
    return(

      <div>

        { (this.props.name.length === 0) ? null :
          <SelectedPerfumes
            img={this.props.img}
            name={this.props.name}
            brand={this.props.brand}
            removeOnClick={this.removeOnClick} 
            /> 
        }
        
        { (this.props.name.length === 3) ? null : 
          <Form onSubmit={(event) => this.handleOnSubmit(event)}>
            <Form.Input 
              value={this.state.value}
              label="Search for a Perfume"
              onChange ={this.handleChange}
              type="text" />
            <Form.Button>Submit</Form.Button>
          </Form>
        }

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
    addPerfume: addPerfume,
    deletePerfume: deletePerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer);


