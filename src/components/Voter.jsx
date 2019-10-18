import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0,
    voteFailed: false
  };
  render() {
    const { optimisticVotes, voteFailed } = this.state;
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
        {voteFailed && (
          <p className="FailedRequest">
            Uh-oh! Your vote doesn't seem to be getting through to us. Please
            refresh the page and try again.
          </p>
        )}
      </form>
    );
  }

  incrementVotes = async event => {
    event.preventDefault();
    const { name } = event.target;
    const { id, type } = this.props;
    try {
      this.setState(currentState => {
        return { optimisticVotes: currentState.optimisticVotes + +name };
      });
      await api.patchVotes(type, id, name);
    } catch (err) {
      // this.setState({ voteFailed: true });
      this.setState(currentState => {
        return {
          optimisticVotes: currentState.optimisticVotes - +name,
          voteFailed: true
        };
      });
    }
  };
}

export default Voter;
