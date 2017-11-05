import React from 'react';

const SearchResults = (props) => {
  // {debugger};
  function listPerfumes() {
    if (props.perfumes) {
      return props.perfumes.map((perfume, index) => {
        return (
          <div key={index} >
            <a href="#"  onClick={props.handleOnClick}><img 
              className="image" 
              src={perfume.pictureURL}
              id={perfume.id}
              /></a>
            <h4>{perfume.name} by {perfume.brand}</h4>
            <button onClick={props.handleOnClick}>Click hereeeee</button>

          </div>
        )
      })
    }
  }

  return (
    <div>
      <div> {listPerfumes()} </div>
    </div>
  );
};

export default SearchResults;
