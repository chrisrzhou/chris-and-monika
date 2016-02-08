import React, { PropTypes } from 'react';

const Image = (props) => {
  const { src, width, height } = props;
  return (
    <div className="image">
      <img
        src={src}
        height={height}
        width={width}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};

Image.defaultProps = {
  height: 'auto',
  width: '100%',
};

export default Image;
