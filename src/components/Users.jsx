import React, { Component } from 'react';
import * as api from '../utils/api';

class Users extends Component {
  state = {
    users: [],
    userRequestFailed: false
  };
  render() {
    return (
      <div className="Users">
        <h3>
          Currently signed in as <em>{this.props.user}</em>
        </h3>
        {this.state.userRequestFailed ? (
          <div>
            <p>
              Whoops! We couldn't get hold of the list of users for some reason.
              Try refreshing the page.
            </p>
          </div>
        ) : (
          <div>
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
        )}
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
    try {
      const users = await api.fetchUsers();
      this.setState({ users });
    } catch (err) {
      this.setState({ userRequestFailed: true });
    }
  };
}

export default Users;
