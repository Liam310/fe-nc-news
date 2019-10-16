const axios = require('axios');

const request = axios.create({
  baseURL: 'https://liam-news-api.herokuapp.com/api'
});

export const fetchAllTopics = async () => {
  const { data } = await request.get('/topics');
  return data.topics;
};

export const fetchArticles = async (topic, sort_by) => {
  const { data } = await request.get('/articles/', {
    params: { topic, sort_by }
  });
  return data.articles;
};

export const fetchArticleById = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data.article;
};

export const fetchCommentsById = async article_id => {
  const { data } = await request.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const postComment = async (article_id, username, body) => {
  const { data } = await request.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
  return data.comment;
};

export const deleteComment = async comment_id => {
  await request.delete(`/comments/${comment_id}`);
};

export const patchVotes = async (type, id, name) => {
  await request.patch(`/${type}/${id}`, { inc_votes: name });
};

export const fetchUsers = async () => {
  const { data } = await request.get(`/users`);
  return data.users;
};
