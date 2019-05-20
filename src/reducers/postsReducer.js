const initialState = {
  data: [],
  inProgress: false,
  isSuccess: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_POSTS":
      return action.payload;
    
    default:
      return state;
  }
}