import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';

class ArticleList extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="ArticleList">
        {articles.map(article => {
          return <ArticleListCard {...article} key={article.article_id} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = async () => {
    const { slug } = this.props;
    const articles = await api.fetchArticles(slug);
    this.setState({ articles });
  };

  componentDidUpdate(prevProps) {
    const { slug } = this.props;
    if (prevProps.slug !== slug) this.getArticles();
  }
}

export default ArticleList;
