import React, { Component } from 'react';
// import PerfumesList from '../components/PerfumesList';

// import { getRecommendation } from '../actions/perfumesActions';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class SavedPerfumesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      name: '',
      brand: ''
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

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    img: state.img,
    name: state.name,
    brand: state.brand
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     getRecommendation: getRecommendation
//   }, dispatch);
// };


export default connect(mapStateToProps)(SavedPerfumesContainer);


  


