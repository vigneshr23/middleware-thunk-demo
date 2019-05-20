import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    const user = this.props.users && this.props.users.find(user => user.id === this.props.userId)
    
    if(!user) {
      return null;
    }
    return (
      <small className="text-muted">{user.name}</small>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users.data
  }
}

export default connect(mapStateToProps, {fetchUser}) (UserHeader);