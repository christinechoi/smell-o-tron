import React, { Component } from 'react';
import RecommendationsList from '../components/RecommendationsList';
import { connect } from 'react-redux';

class RecommendationsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendations: [],
      basedOn: []
    }
  }

  render() {
    {debugger};
    return (
   
      <div>
        <h3>recommendations container here</h3>
        
        { (this.props.recommendations.length === 0) ? null :
          <RecommendationsList recommendations={this.props.recommendations} />
        }

      </div>
    
    )
  }
}

const mapStateToProps = state => {
  return {
    recommendations: state.perfumes.recommendations,
    basedOn: state.perfumes.basedOn
  };
};

export default connect(mapStateToProps)(RecommendationsContainer);


  


