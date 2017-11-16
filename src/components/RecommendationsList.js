import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const RecommendationsList = (props) => {
  {debugger};

  return (
    <Card.Group className='ui four column doubling stackable grid container'> {
      props.recommendations.map((recommendation, index) => (  
        <Card 
          key={index} 
          image={recommendation.pictureURL}
          id={recommendation.id}
          header={recommendation.name}
          meta={recommendation.brand}
         
        />
      ))
    }
    </Card.Group>
  );
};

export default RecommendationsList;
