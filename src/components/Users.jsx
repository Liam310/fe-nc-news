import React, { Component } from 'react';
import * as api from '../utils/api';

class Users extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div className="Users">
        <h3>
          Currently signed in as <em>{this.props.user}</em>
        </h3>
        <select onChange={this.handleChange}>
          {this.state.users.map(({ username }) => {
            return (
              <option value={username} key={username}>
                {username}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  handleChange = event => {
    this.props.changeUser(event.target.value);
  };

  getUsers = async () => {
    const users = await api.fetchUsers();
    this.setState({ users });
  };
}

export default Users;
