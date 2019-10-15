import React from 'react';

const ErrorHandler = () => {
  const { state } = window.history;
  const msg = state ? state.msg : 'Whoops! Page not found!';
  const imgURL = state ? state.imgURL : 'https://http.cat/404';
  return (
    <>
      <img src={imgURL} alt="cat-based error" />
      <h2>{msg}</h2>
    </>
  );
};

export default ErrorHandler;
