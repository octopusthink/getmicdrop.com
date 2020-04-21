import React from 'react';
import { css } from '@emotion/core';

import ListLink from 'components/ListLink';

const SiteMap = (props) => {
  const { className } = props;
  return (
    <nav role="navigation" className={className}>
      <ul
        css={css`
          list-style-type: none;
          margin: 0;
          padding: 0;
        `}
      >
        <ListLink link="/">Home</ListLink>
        <ListLink link="/help/">Help</ListLink>
        <ListLink link="/under-the-hood/">How it's made</ListLink>
        <ListLink link="/privacy/">Privacy</ListLink>
        <ListLink link="/credits/">Credits</ListLink>
      </ul>
    </nav>
  );
};

export default SiteMap;
