import React from 'react';
  
const PerfumesList = (props) => {
  {debugger};
  function listPerfumes() {
    if (props.perfumes) {
      return props.perfumes.map(perfume => {
        return (
          <div><a href="#" id={perfume.id}>{perfume.name} by {perfume.brand}</a></div>
        )
      })
    }
  }

  return (
    <div>
      <h2> Find a Perfume:  </h2>
      <h1> {listPerfumes()} </h1>
    </div>
  );
};

export default PerfumesList;
