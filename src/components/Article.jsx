import React, { Component } from 'react';
import * as api from '../utils/api';
import { capitaliseFirstLetter, formatDate } from '../utils/utils';
import CommentList from './CommentList';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

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
      <>
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
            <p>Votes: {votes}</p>
            <p>{body}</p>
            <CommentList article_id={article_id} user={this.props.user} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
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
          msg: 'Whoops! There seems to be no such article by that number.',
          imgURL: 'https://http.cat/404',
          replace: true
        }
      });
    }
  };
}

export default Article;
