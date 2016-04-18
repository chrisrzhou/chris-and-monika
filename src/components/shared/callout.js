import React, {PropTypes} from 'react';

import Image from './image/';

const Callout = (props) => {
  const {person, message, imageURL} = props;
  return (
    <div className="callout">
      <div>
        <div className="callout-person">
          {person}
        </div>
        <div className="callout-message">
          {message}
        </div>
        <div className="callout-message">
          <Image
            src={imageURL}
          />
        </div>
      </div>
    </div>
  );
};

Callout.propTypes = {
  person: PropTypes.oneOf(['monika', 'chris']).isRequired,
  message: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

Callout.defaultProps = {
  person: 'monika',
  message: 'I love Chris!',
};

export default Callout;
