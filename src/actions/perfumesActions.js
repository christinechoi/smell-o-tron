import fetch from 'isomorphic-fetch';


export function fetchPerfume(input) {
  
  
  return (dispatch) => {
    dispatch({ type: 'START_FETCHING_PERFUMES_REQUEST' });
    // {debugger};
    let searchTerm = input.value
    return fetch('http://scentsee.com/rest/collection/queryFull?query=' + searchTerm)
      .then(response => {
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_PERFUME', payload: responseJson})
    })
  }
}

export function addPerfume(input) {

  {debugger};
  return (dispatch) => {

    let searchTerm = input.id;
    {debugger};

    return fetch('http://scentsee.com/rest/collection/retrieveMany?ids[]=' + searchTerm)
      .then(response => {
        {debugger};
        return response.json()
      }).then(responseJson => {
        console.log(responseJson);
        dispatch({type: 'ADD_PERFUME', payload: responseJson})
    })
  }
}




