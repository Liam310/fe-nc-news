import React, { Component } from 'react';
import * as api from '../utils/api';
import { capitaliseFirstLetter, formatDate } from '../utils/utils';
import CommentList from './CommentList';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import Voter from './Voter';

class Article extends Component {
  state = {
    article: {},
    isLoaded: false
  };
  render() {
    const {
      article: { title, author, topic, body, votes, created_at, article_id },
      isLoaded
    } = this.state;
    return (
      <div className="Article">
        {isLoaded ? (
          <div>
            <h2>{title}</h2>
            <p>{formatDate(created_at)}</p>
            <h4>Written by: {author}</h4>
            <p>
              Topic:{' '}
              <Link to={`/articles/topic/${topic}`}>
                {capitaliseFirstLetter(topic)}
              </Link>
            </p>
            <p>{body}</p>
            <Voter votes={votes} type="articles" id={article_id} />
            <CommentList article_id={article_id} user={this.props.user} />
          </div>
        ) : (
          <div className="Loading">Loading...</div>
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getArticle();
  }

  getArticle = async () => {
    try {
      const { article_id } = this.props;
      const article = await api.fetchArticleById(article_id);
      this.setState({ article, isLoaded: true });
    } catch (err) {
      navigate('/err', {
        state: {
          msg:
            "Whoops! Something went wrong. Are you sure there's an article with that number?",
          imgURL: 'https://http.cat/404',
          replace: true
        }
      });
    }
  };
}

export default Article;
