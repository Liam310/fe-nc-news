import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    return (
      <form>
        <p>Votes: {this.state.optimisticVotes}</p>
        <button name="1" onClick={this.incrementVotes}>
          Upvote
        </button>
        Vote on it!
        <button name="-1" onClick={this.incrementVotes}>
          Downvote
        </button>
      </form>
    );
  }

  componentDidMount() {
    this.setState({ optimisticVotes: this.props.votes });
  }

  incrementVotes = event => {
    event.preventDefault();
    const { name } = event.target;
    const { id, type } = this.props;
    api.patchVotes(type, id, name);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + +name };
    });
  };
}

export default Voter;
