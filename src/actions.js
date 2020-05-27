import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';


export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
}) 

export const requestRobots = () => (dispatch) => {//Function that returns a function so it can use a thunk, thunk only uses when it returns a function
    dispatch({ type: REQUEST_ROBOTS_PENDING})//NO PAYLOAD BECAUSE IS PENDING
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))//if success, it returns as payload the data that you introduce
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))//in case something fails
}