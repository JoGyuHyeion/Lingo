import React from 'react';
import Link from './Link';
// import PropTypes from 'prop-types';


const LinkList = ({ links }) => {

  const LinkList = links.map(
    link => {
      //console.log(link);
      return (
        <Link
          key={link.get('id')}
          title={link.get('title')}
          category={link.get('category')}
          url={link.get('url')}
          hash_tag={link.get('hash_tag')}
        />
      )
    }
  );
  

  return (
    <div>
      {LinkList}
    </div>
  );
};

// LinkList.propTypes = {

// }
// LinkList.defaultProps = {

// }

export default LinkList;