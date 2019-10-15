import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import { capitaliseFirstLetter } from '../utils/utils';

class NavBar extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;

    return (
      <div className="NavBar">
        {topics.map(({ slug }) => {
          return (
            <Link to={`/articles/topic/${slug}`} key={slug}>
              {capitaliseFirstLetter(slug)}
            </Link>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = async () => {
    const topics = await api.fetchAllTopics();
    this.setState({ topics });
  };
}

export default NavBar;
