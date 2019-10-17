import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import { capitaliseFirstLetter } from '../utils/utils';

class NavMenu extends Component {
  state = {
    topics: [],
    isOpen: false
  };
  render() {
    const { topics, isOpen } = this.state;

    return (
      <Menu className="NavMenu" isOpen={isOpen} onStateChange={this.isMenuOpen}>
        <h3>Select a topic</h3>
        <Link to="/" onClick={this.handleClick}>
          All articles
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link
              to={`/articles/topic/${slug}`}
              onClick={this.handleClick}
              key={slug}
            >
              {capitaliseFirstLetter(slug)}
            </Link>
          );
        })}
      </Menu>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = async () => {
    const topics = await api.fetchAllTopics();
    this.setState({ topics });
  };

  isMenuOpen = state => {
    this.setState({ isOpen: state.isOpen });
  };

  handleClick = () => {
    this.setState({ isOpen: false });
  };
}

export default NavMenu;
