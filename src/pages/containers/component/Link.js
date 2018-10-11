import React from 'react';
// import PropTypes from 'prop-types';

const Link = ({title,category,url,hashtag}) => {
  const linkStyle={
    border: '1px solid'
  }
  return (
    <div style={linkStyle}>
      <p>{title}</p>
      <p>{category}</p>
      <a href={url} target='_blank'>{url}</a>
      <p>{hashtag}</p>
    </div>
  );
};

// Link.propTypes = {

// };

// Link.defaultProps = {

// };

export default Link;