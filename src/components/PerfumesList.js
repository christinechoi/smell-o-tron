import React from 'react';

  
const PerfumesList = ({ perfumes }) => {
  
  const perfumes = perfumes.map((perfume, index) =>
    <div>
       <li key={index}>Perfume: {perfume.brand} {perfume.name}</li>
    </div>
  );

  return (
    <div>
      <h2> Perfumes </h2>
      <h3> {perfumes} </h3>
    </div>
  );
};

export default PerfumesList;
