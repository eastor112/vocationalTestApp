import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/link/Link';

const GroupLinks = ({ linksArray, underlineOnHover, vertical }) => (
  <div
    className={!vertical ? 'flex flex-col md:flex-row text-light-1' : ''}
  >
    {
        linksArray.map((link, index) => (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={link.link}
            text={link.text}
            size={link.size}
            underlineOnHover={underlineOnHover}
            vertical={vertical}
          />
        ))
      }
  </div>

);

export default GroupLinks;

GroupLinks.defaultProps = {
  underlineOnHover: false,
  vertical: false,
};

GroupLinks.propTypes = {
  linksArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  underlineOnHover: PropTypes.bool,
  vertical: PropTypes.bool,
};
