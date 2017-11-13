import React from 'react';

const SearchResults = (props) => {
  {debugger};
  return (
    <div className='search SearchResults'> {
      props.perfumes.map((perfume, index) => (
        <div key={index} >
            <a href="#"  ><img 
              onClick={props.handleOnClick}
              className="image" 
              src={perfume.pictureURL}
              id={perfume.id}
              name={perfume.name}
              brand={perfume.brand} />
            </a>
            
            <h4>{perfume.name} by {perfume.brand}</h4>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
