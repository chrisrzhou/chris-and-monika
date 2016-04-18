import React, {PropTypes} from 'react';

const Image = (props) => {
  const {src, href, width, height} = props;
  if (href) {
    return (
      <div className="image">
        <a href={href} target="_blank">
          <img
            src={src}
            height={height}
            width={width}
          />
        </a>
      </div>
    );
  }
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
  href: PropTypes.string,
};

Image.defaultProps = {
  height: 'auto',
  width: '100%',
};

export default Image;
