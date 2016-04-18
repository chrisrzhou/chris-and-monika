import React from 'react';

import constants from './../../constants/constants';

const {github, social} = constants;

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href={github.project} target="_blank">
          <i className="fa fa-heart"></i>
        </a>
        {' from '}
        <a href={github.chris} target="_blank">
          @chrisrzhou
        </a>
        {' and '}
        <a href={github.monika} target="_blank">
          @monikasun88
        </a>
      </p>
      <p>
        <a href={social.facebook} target="_blank">
          <span className="fa-stack">
            <i className="fa fa-square-o fa-stack-2x"></i>
            <i className="fa fa-facebook fa-stack-1x"></i>
          </span>
        </a>
        <span className="fa-stack">
          <i className="fa fa-square-o fa-stack-2x"></i>
          <i className="fa fa-instagram fa-stack-1x"></i>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
