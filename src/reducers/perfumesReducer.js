
const initialState = {
  perfumes: [],
  img: [],
  name: [],
  brand: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      {debugger};
      return { ...state, perfumes: action.payload}
    case 'ADD_PERFUME':
      // {debugger};
      const item = action.payload;
      {debugger};
      return {  
        ...state, 
        img: state.img.concat(item.src),
        name: state.name.concat(item.name), 
        brand: state.brand.concat(item.brand) 
      }
    case 'GET_RECOMMENDATION':
      {debugger};
      return { ...state, selectedPerfumes: action.payload };  
    default:
      {debugger};
      return state;
  }   
};

