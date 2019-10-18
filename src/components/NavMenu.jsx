import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import { capitaliseFirstLetter } from '../utils/utils';
import Users from './Users';

class NavMenu extends Component {
  state = {
    topics: [],
    isOpen: false,
    topicRequestFailed: false
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
        <Users />
        {this.state.topicRequestFailed && (
          <div>
            <br />
            <img
              className="sad-cat"
              src="https://s.yimg.com/ny/api/res/1.2/8if8GGR3yl3IBEyG.mJYoA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/people_218/ddeaf5d430f4cc7b679ea3c9c0be05df"
              alt="sad cat"
            />
            <p>
              This cat is very sad because something went wrong with the
              connection and we couldn't get hold of the list of topics. Please
              wait a few seconds and then refresh the page.
            </p>
          </div>
        )}
      </Menu>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = async () => {
    try {
      const topics = await api.fetchAllTopics();
      this.setState({ topics });
    } catch (err) {
      this.setState({ topicRequestFailed: true });
    }
  };

  isMenuOpen = state => {
    this.setState({ isOpen: state.isOpen });
  };

  handleClick = () => {
    this.setState({ isOpen: false });
  };
}

export default NavMenu;
