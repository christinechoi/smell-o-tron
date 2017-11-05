
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      // {debugger};
      return action.payload;
    case 'ADD_PERFUME':
      {debugger};
      //change state - add perfume to PerfumesList

      return action.payload;
    default:
      return state;
  }   
};

