import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const RecommendationsList = (props) => {
  // {debugger};

  return (
    <Card.Group className='ui four column doubling stackable grid container'> {
      props.recommendations.map((recommendation, index) => (  
        <Card key={index} >
        
          <Card.Content> 
            <Image src={recommendation.pictureURL} />
            <Card.Header> 
              {recommendation.name}
            </Card.Header> 

            <Card.Description> 
              {recommendation.brand}
            </Card.Description> 

          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default RecommendationsList;
