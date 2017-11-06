
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      // {debugger};
      return action.payload;
    case 'ADD_PERFUME':
      {debugger};

      return { selectedPerfumes: action.payload };
    default:
      return state;
  }   
};

