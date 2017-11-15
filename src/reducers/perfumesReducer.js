
const initialState = {
  perfumes: [],
  img: [],
  name: [],
  brand: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      // {debugger};
      return { ...state, perfumes: action.payload}
    case 'ADD_PERFUME':
     
      {debugger};
      return {  
        ...state, 
        img: state.img.concat(action.payload.src),
        name: state.name.concat(action.childNodes.children[0].innerText), 
        brand: state.brand.concat(action.childNodes.children[1].innerText) 
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
        name: modName, //state.name.slice(ind, ind+1),
        brand: modBrand // state.brand.slice(ind, ind+1)
      };  
    case 'GET_RECOMMENDATION':
      {debugger};
      return { ...state, selectedPerfumes: action.payload };  
    default:
      // {debugger};
      return state;
  }   
};

