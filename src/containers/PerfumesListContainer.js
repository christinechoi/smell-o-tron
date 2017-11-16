
import React, { Component } from 'react';
import { Grid, Form, Divider, Segment } from 'semantic-ui-react';
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
      brand: [],
      id: []
    };
  }

  removeOnClick = event => {
    event.preventDefault();
    // {debugger};
    this.props.deletePerfume(event.target);
  }

  handleOnClick = (perfume, event)  => {
    event.preventDefault();
    {debugger};
    this.props.addPerfume(event.target, perfume) 
  }

  handleClick = (idArray, event) => {
    event.preventDefault();
    {debugger};
    this.props.getRecommendation(event.target, idArray)
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
    // {debugger};
    return(

      <div>

        { (this.props.name.length === 0) ? null :
          <SelectedPerfumes
            img={this.props.img}
            name={this.props.name}
            brand={this.props.brand}
            id={this.props.id}
            removeOnClick={this.removeOnClick} 
            handleClick={this.handleClick}
            /> 
        }

        <Divider>divider</Divider>

        
        { (this.props.name.length === 3) ? null : 
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={12}>

                <Form className="ui segment"
                  size='massive'
                  onSubmit={(event) => this.handleOnSubmit(event)}>
                  <Form.Field className='ui center aligned'>centered form field</Form.Field >
                  <Form.Input 
                    icon='search'
                    iconPosition='left'
                    value={this.state.value}
                    onChange ={this.handleChange}
                    type="text" />

                  <Form.Button color='teal' size='massive' fluid >Find</Form.Button>

                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        }


        <Segment>segment here</Segment>

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
    brand: state.perfumes.brand,
    id: state.perfumes.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    addPerfume: addPerfume,
    deletePerfume: deletePerfume,
    getRecommendation: getRecommendation
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer);


