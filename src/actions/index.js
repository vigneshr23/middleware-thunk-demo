import jsonPlaceholder from "../apis/jsonPlaceholder";
import { async } from "q";

export const fetchPosts = (cb) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.request({method: "GET", url: "/posts"});
      dispatch({
        type: 'FETCH_POSTS',
        payload: {
          data: response.data
        }
      })
      
      cb();
  };
}

export const fetchPostsAndUsers = (cb) => async (dispatch, getState) => { 
  await dispatch(fetchPosts(cb));
  console.log(getState().posts)
  const userIds = [...new Set(getState().posts.data.map((user) => user.userId))];
  console.log(userIds);
  // const promises = userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`));
  // Promise.all(promises).then(resp => Promise.all(resp.map(r => r.json()))).then(json => console.log(json))

  userIds.map(id => dispatch(fetchUser(id)));
  console.log("fetchPostsAndUsers");
}

export const fetchUser = (id) =>  async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: {
      data: response.data
    }
  })
};