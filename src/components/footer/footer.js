import React from 'react';

import constants from './../../constants/constants';

const Footer = () => {
  const {github} = constants;
  return (
    <footer className="footer">
      <p>
        <a href={github.project} target="_blank">
          <i className="fa fa-code"></i>
        </a>
        {' with '}
        <i className="fa fa-heart"></i>
        {' by '}
        <a href={github.chris} target="_blank">
          @chrisrzhou
        </a>
        {' and '}
        <a href={github.monika} target="_blank">
          @monikasun88
        </a>
      </p>
    </footer>
  );
};

export default Footer;
