import React, {PropTypes} from 'react';

const Image = (props) => {
  const {src, href, alt, width, height} = props;
  if (href) {
    return (
      <div className="image">
        <a href={href} target="_blank">
          <img
            src={src}
            height={height}
            width={width}
            alt={alt}
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
        alt={alt}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  href: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  height: 'auto',
  width: '100%',
};

export default Image;
