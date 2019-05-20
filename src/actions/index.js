import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = (cb) => {
  try {
    return async (dispatch, getState) => {
      const response = await jsonPlaceholder.request({method: "GET", url: "/posts"});
        dispatch({
          type: 'FETCH_POSTS',
          payload: {
            data: response.data
          }
        })
        //getState().posts.data.map()
        cb();
    };
  }
  catch (e) {
    console.log(e)
  }
}

export const fetchUser = (id) => {
  try {
    return async dispatch => {
      const response = await jsonPlaceholder.get(`/users/${id}`);

      dispatch({
        type: "FETCH_USER",
        payload: {
          data: response.data
        }
      })
    }
  } catch (e) {
    console.log(e);
  }
} 