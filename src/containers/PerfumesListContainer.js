import React, { Component } from 'react';
import PerfumesList from '../components/PerfumesList';

import { fetchPerfume } from '../actions/perfumesActions';
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


  componentDidMount() {

    if (this.props.perfumes) {
      console.log('in component did mount, container')
      // this.props.addPerfume()
    }
  }

  // componentDidMount() {
  //   this.store.subscribe(() => this.forceUpdate());
  // }

  handleChange =event => {
    this.setState({
      value: event.target.value//[event.target.name]: event.target.value
    });
  }

  handleOnSubmit(event) {
    {debugger};
    event.preventDefault();
    this.props.fetchPerfume(this.state);

    //this.props.store.dispatch(addPerfume(this.state));

    {debugger};
  }

  render() {
    return(
      <div>
        <PerfumesList perfumes={this.props.perfumes}/>
        
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        
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
        <h3></h3>
        
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
    fetchPerfume: fetchPerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfumesListContainer);



// export default PerfumesListContainer;