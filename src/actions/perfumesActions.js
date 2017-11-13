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
    dispatch({type: 'ADD_PERFUME', payload: input});
  }
}


export function getRecommendation(input) {
  return (dispatch) => {

    let searchTerm = input;
    {debugger};
    // dispatch({type: 'ADD_PERFUME', payload: input})
    // , {
    //   method: 'GET', 
    //   headers: 'Access-Control-Allow-Origin: <origin> | *'
    // }

    return fetch('http://scentsee.com/rest/recommendation/byFavoriteFragranceId?ids[]=' + searchTerm
    //   mode: 'no-cors'
    )
      .then(response => {
        console.log(response);
        return response.json()
      }).then(responseJson => {
        dispatch({type: 'ADD_PERFUME', payload: responseJson})
    })
  }
}



