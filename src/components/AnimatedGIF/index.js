import React from 'react';

import menubarToggling from 'images/menubar-toggling.gif';
import menubarZoom from 'images/on-off-menubar.gif';
import statusWindowOn from 'images/status-window-on.gif';

const AnimatedGIF = (props) => {
  const { alt, className, src } = props;
  switch (src) {
    case 'images/status-window-on.gif':
      return <img className={className} loading="lazy" alt={alt} src={statusWindowOn} />;
    case 'images/on-off-menubar.gif':
      return <img className={className} loading="lazy" alt={alt} src={menubarZoom} />;

    case 'images/menubar-toggling.gif':
    default:
      return <img className={className} loading="lazy" alt={alt} src={menubarToggling} />;
  }
};

AnimatedGIF.defaultProps = {
  src: 'images/menubar-toggling.gif',
};

export default AnimatedGIF;
