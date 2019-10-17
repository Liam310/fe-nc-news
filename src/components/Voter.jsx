import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };
  render() {
    const { optimisticVotes } = this.state;
    return (
      <form>
        <p>Votes: {optimisticVotes + this.props.votes}</p>
        <button
          name="1"
          onClick={this.incrementVotes}
          disabled={optimisticVotes === 1}
        >
          Upvote
        </button>
        <button
          name="-1"
          onClick={this.incrementVotes}
          disabled={optimisticVotes === -1}
        >
          Downvote
        </button>
      </form>
    );
  }

  incrementVotes = event => {
    event.preventDefault();
    const { name } = event.target;
    const { id, type } = this.props;
    try {
      api.patchVotes(type, id, name);
    } catch (err) {
      console.log(err);
    }
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + +name };
    });
  };
}

export default Voter;
