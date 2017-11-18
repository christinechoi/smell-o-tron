import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';


const SearchResults = (props) => {
  // {debugger};

  return (

    <Card.Group className='ui four column doubling stackable grid container'> {
      props.perfumes.map((perfume, index) => (  
        <Card 
          key={index} 
          image={perfume.pictureURL}
          
          header={perfume.name}
          meta={perfume.brand}
          onClick={props.handleOnClick.bind(this, perfume)}  
        />
     ))
    }
    </Card.Group>
  );
};

export default SearchResults;
