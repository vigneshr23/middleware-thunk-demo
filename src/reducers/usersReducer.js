const initialState = {
  data: []
}

export default (state = initialState.data, action) => {
  switch(action.type) {
    case "FETCH_USER": 
      return [...state, action.payload.data];

    default :
      return state
  }
}