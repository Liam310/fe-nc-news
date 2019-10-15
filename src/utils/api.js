const axios = require('axios');

export const fetchAllTopics = async () => {
  const { data } = await axios.get(
    'https://liam-news-api.herokuapp.com/api/topics'
  );
  return data.topics;
};

export const fetchArticles = async slug => {
  const { data } = await axios.get(
    'https://liam-news-api.herokuapp.com/api/articles/',
    {
      params: { topic: slug }
    }
  );
  // YEET
  return data.articles;
};
