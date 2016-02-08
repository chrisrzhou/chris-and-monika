import React, { PropTypes } from 'react';

const Footer = (props) => {
  const { github } = props;
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

Footer.propTypes = {
  github: PropTypes.object.isRequired,
};

export default Footer;
