
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PERFUME':
      {debugger};
      return action.payload;

    default:
      return state;
  }   
};

