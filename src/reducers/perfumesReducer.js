
const initialState = {
  perfumes: [],
  img: [],
  name: [],
  brand: [],
  id: [],
  recommendations: [],
  basedOn: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      {debugger};
      let uniqueArray = action.payload;
      
      return { ...state, perfumes: uniqueArray}
    case 'ADD_PERFUME':
     
      {debugger};
      return {  
        ...state, 
        img: state.img.concat(action.payload.src),
        name: state.name.concat(action.perfume.name), 
        brand: state.brand.concat(action.perfume.brand),
        id: state.id.concat(action.perfume.id)
      }

    case 'DELETE_PERFUME':
      let ind = state.name.indexOf(action.payload.name); 

      let ary = state.img

      let ex = ary.filter(function (x) {
        let idx = state.img.indexOf(x);
        return idx != ind
      });

      let modName = state.name.filter(function(x) {
        let idx = state.name.indexOf(x);
        return idx != ind 
      });

      let modBrand = state.brand.filter(function(x) {
        let idx = state.brand.indexOf(x);
        return idx != ind
      });

      return { 
        ...state, 
        img: ex,
        name: modName, 
        brand: modBrand 
      };  
    case 'GET_RECOMMENDATION':
      {debugger};
      return { 
        ...state, 
        recommendations: state.recommendations.concat(action.payload.recommendations),
        basedOn: state.basedOn.concat(action.payload.basedOn) };  
    default:
      // {debugger};
      return state;
  }   
};

