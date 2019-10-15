import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';
import { navigate } from '@reach/router';
import SortSelector from './SortSelector';

class ArticleList extends Component {
  state = {
    articles: [],
    sort_by: 'created_at'
  };
  render() {
    const { articles, sort_by } = this.state;
    return (
      <div className="ArticleList">
        {this.props.slug ? (
          <h1>Articles on {this.props.slug}</h1>
        ) : (
          <h1>All articles</h1>
        )}
        <SortSelector sort_by={sort_by} setSortCriteria={this.setSortCriteria} />
        {articles.map(article => {
          return <ArticleListCard {...article} key={article.article_id} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  setSortCriteria = sortCriteria => {
    this.setState({ sort_by: sortCriteria });
  };

  getArticles = async () => {
    try {
      const { slug } = this.props;
      const { sort_by } = this.state;
      const articles = await api.fetchArticles(slug, sort_by);
      this.setState({ articles });
    } catch ({ response: { data } }) {
      navigate('/err', { state: { msg: data.msg, replace: true } });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { slug } = this.props;
    const { sort_by } = this.state;
    if (prevProps.slug !== slug || prevState.sort_by !== sort_by)
      this.getArticles();
  }
}

export default ArticleList;
