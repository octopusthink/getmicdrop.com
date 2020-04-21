import React from 'react';
import { css } from '@emotion/core';

import ListLink from 'components/ListLink';

const SocialMediaLinks = (props) => {
  const { className } = props;

  return (
    <ul
      className={className}
      css={css`
        list-style-type: none;
        margin: 0;
        padding: 0;
      `}
    >
      <ListLink a link="https://twitter.com/octopusthinks" iconName="twitter">
        Twitter
      </ListLink>

      <ListLink a link="https://instagram.com/octopusthinks" iconName="instagram">
        Instagram
      </ListLink>

      <ListLink a link="https://github.com/octopusthink" iconName="github">
        GitHub
      </ListLink>
    </ul>
  );
};

export default SocialMediaLinks;
