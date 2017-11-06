import React, { Component } from 'react';
import PerfumesList from './components/PerfumesList';

// import { getRecommendation } from '../actions/perfumesActions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class SavedPerfumesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPerfumes: []
    }
  }

  // handleOnSubmit(event) {
  //   console.log('in saved perfumes submit handler to get rec');
  //   event.preventDefault();

  // this.props.getRecommendation(event.target or this.state);
  // }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <button> Get Recommendations </button>
        </form>

        <PerfumesList 
          selectedPerfumes={this.props.selectedPerfumes}
          handleOnClick={this.handleOnClick.bind(this)} 
          addPerfume={this.props.addPerfume}/>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    selectedPerfumes: state.selectedPerfumes
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     getRecommendation: getRecommendation
//   }, dispatch);
// };

// , mapDispatchToProps

export default connect(mapStateToProps)(SavedPerfumesContainer);


  


