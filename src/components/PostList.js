import React, {Component} from 'react';
import {fetchPosts, fetchUser} from '../actions';
import {connect} from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidMount() {
    this.props.fetchPosts(this.cb)
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  cb = () => {
    console.log("cb")
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item  ">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"># {post.id}. {post.title}</h5>
          </div>
          <p className="mb-1">{post.body}</p>
          <UserHeader userId={post.userId} />
        </li>
      )
    })
  }

  render() {
    if(this.state.hasError) {
      return <h1>Error!!!</h1>
    }
    return (
      <div>
        <h2>POST LISTS</h2>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostList);  