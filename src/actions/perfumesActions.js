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

export function addPerfume(target, perfume) {
  // {debugger};
  return (dispatch) => {
    dispatch({type: 'ADD_PERFUME', payload: target, perfume});
  }
}

export function deletePerfume(data) {
  // {debugger};

  //constructor function here?
  return (dispatch) => {
    dispatch({type: 'DELETE_PERFUME', payload: data});
  }
}


export function getRecommendation(target, ids) {
  return (dispatch) => {

    let searchTerm = ids;
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
        dispatch({type: 'GET_RECOMMENDATION', payload: responseJson})
    })
  }
}



