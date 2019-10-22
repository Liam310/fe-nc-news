import React from 'react';

const Footer = () => {
  return (
    <div className="Footer">
      <span>Author: Liam Duncan</span>
      <span className="GithubLink">
        Click{' '}
        <a
          target="_blank"
          href="https://github.com/Liam310/fe-nc-news"
          rel="noopener noreferrer"
        >
          here
        </a>{' '}
        for the Github repo of this site!
      </span>
      <span>Copyright, 2019</span>
    </div>
  );
};

export default Footer;
