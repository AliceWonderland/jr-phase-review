import axios from 'axios';

//action type constants
const SET_TACOS = 'SET_TACOS';
const ADD_TACO = 'ADD_TACO';


//action creators

const setTacos = (tacos) => {
  return {
    type: SET_TACOS,
    tacos
  }
}

const addTaco = (taco) => {
  return {
    type: ADD_TACO,
    taco
  }
}

//thunk async action creators

export const fetchAllTacos = () => {
  return function(dispatch) {
    axios.get('/api/tacos')
      .then(res => res.data)
      .then(tacos => {
        dispatch(setTacos(tacos))
      })
  }
}

export const createNewTaco = (taco) => {
  return function(dispatch) {
    axios.post('/api/tacos', taco)
      .then(res => res.data)
      .then(newTaco => {
        dispatch(addTaco(newTaco))
      })
  }
}

//reducer

const initialState = {
  tacos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TACOS:
      return Object.assign({}, state, {tacos: action.tacos})
    case ADD_TACO:
      return Object.assign({}, state, {tacos: [...state.tacos, action.taco]})
    default:
      return state
  }
}
