
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERFUMES':
      
      return action.perfumes 

    default:
      return state;
  }
};
