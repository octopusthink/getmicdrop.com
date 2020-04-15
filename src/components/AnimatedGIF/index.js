import React from 'react';

import menubarToggling from 'images/menubar-toggling.gif';

const AnimatedGIF = (props) => {
  const { image } = props;
  switch (image) {
    case 'images/menubar-toggling.gif':
    default:
      return <img alt="A Mac showing a microphone icon in the menubar." src={menubarToggling} />;
  }
};

AnimatedGIF.defaultProps = {
  image: 'images/menubar-toggling.gif',
};

export default AnimatedGIF;
