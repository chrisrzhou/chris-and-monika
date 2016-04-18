import React, {PropTypes} from 'react';

import Image from './image';
import constants from './../../constants/constants';

const {images} = constants;
const CALLOUT_IMAGES = {
  chris: images.calloutChris,
  monika: images.calloutMonika,
};
const MONIKA = 'monika';
const CHRIS = 'chris';

const Callout = (props) => {
  const {person, message} = props;
  const imageURL = CALLOUT_IMAGES[person];
  const chrisMessage = person === CHRIS
    ? <div className="callout-message">{message}</div>
    : null;
  const monikaMessage = person === MONIKA
    ? <div className="callout-message">{message}</div>
    : null;
  return (
    <div className="callout">
      {monikaMessage}
      <div className="callout-person">
        <Image
          src={imageURL}
          width="50"
        />
      </div>
      {chrisMessage}
    </div>
  );
};

Callout.propTypes = {
  person: PropTypes.oneOf([CHRIS, MONIKA]).isRequired,
  message: PropTypes.string.isRequired,
};

Callout.defaultProps = {
  person: MONIKA,
  message: 'I love Chris!',
};

export default Callout;
