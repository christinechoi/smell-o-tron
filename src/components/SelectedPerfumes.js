import React from 'react';
  
const SelectedPerfumes = (props) => {
//   // {debugger};
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


  return (
    <div>
      {props.img[0]}
      {props.name[0]}
      {props.brand[0]}

      <h2> You have selected:  </h2>
      <div> one thing </div>
    </div>
  );
};

export default SelectedPerfumes;
