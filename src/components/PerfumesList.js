import React from 'react';
  
const PerfumesList = (props) => {
//   // {debugger};
  function listPerfumes() {
    if (props.selectedPerfumes) {
      return props.selectedPerfumes.map(perfume => {
        return (
          <div id={perfume.id}>
            <img className="image" src={perfume.pictureURL}></img>
            <h4>{perfume.name} by {perfume.brand}</h4>
          </div>
        )
      })
    }
  }

  return (
    <div>
      <h2> You have selected:  </h2>
      <div> {listPerfumes()} </div>
    </div>
  );
};

export default PerfumesList;
