const axios = require('axios');

export const fetchAllTopics = async () => {
  const { data } = await axios.get(
    'https://liam-news-api.herokuapp.com/api/topics'
  );
  return data.topics;
};

export const fetchArticles = async (topic, sort_by) => {
  const { data } = await axios.get(
    'https://liam-news-api.herokuapp.com/api/articles/',
    {
      params: { topic, sort_by }
    }
  );
  return data.articles;
};

export const fetchArticleById = async article_id => {
  const { data } = await axios.get(
    `https://liam-news-api.herokuapp.com/api/articles/${article_id}`
  );
  return data.article;
};

export const fetchCommentsById = async article_id => {
  const { data } = await axios.get(
    `https://liam-news-api.herokuapp.com/api/articles/${article_id}/comments`
  );
  return data.comments;
};
