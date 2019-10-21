import React, { Component } from 'react';
import * as api from '../utils/api';

class Users extends Component {
  state = {
    users: [],
    userRequestFailed: false
  };
  render() {
    const { user } = this.props;
    return (
      <div className="Users">
        <h3 className="CurrentUser">
          Current user: <em>{user}</em>
        </h3>
        {this.state.userRequestFailed ? (
          <div>
            <p>Whoops! We couldn't find the users. Please go back.</p>
          </div>
        ) : (
          <div className="ChangeUser">
            <strong>Select user: </strong>
            <select
              onChange={this.handleChange}
              value={user}
              className="ChangeUserButton"
            >
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

  handleChange = ({ target: { value } }) => {
    this.props.changeUser(value);
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
