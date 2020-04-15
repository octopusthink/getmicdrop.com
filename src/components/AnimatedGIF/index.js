import React from 'react';

import menubarToggling from 'images/menubar-toggling.gif';
import menubarZoom from 'images/on-off-menubar.gif';

const AnimatedGIF = (props) => {
  const { alt, src } = props;
  switch (src) {
    case 'images/on-off-menubar.gif':
      return <img alt={alt} src={menubarZoom} />;

    case 'images/menubar-toggling.gif':
    default:
      return <img alt={alt} src={menubarToggling} />;
  }
};

AnimatedGIF.defaultProps = {
  src: 'images/menubar-toggling.gif',
};

export default AnimatedGIF;
