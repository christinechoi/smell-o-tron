import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const SearchResults = (props) => {
  {debugger};
  return (
    <div className='search SearchResults'> {
      props.perfumes.map((perfume, index) => (  
        <Card 
          key={index} 
          image={perfume.pictureURL}
          
          header={perfume.name}
          meta={perfume.brand}
          onClick={props.handleOnClick.bind(this)}  
        />
      ))
    }
    </div>
  );
};

export default SearchResults;
