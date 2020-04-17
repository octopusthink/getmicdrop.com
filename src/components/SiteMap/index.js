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
        <ListLink link="/about/">Who we are</ListLink>
        <ListLink link="/services/">What we do</ListLink>
        <ListLink link="/work/">Some of our work</ListLink>
        <ListLink link="/blog/">Stories we&apos;ve written</ListLink>
        <ListLink link="/contact/">Contact us</ListLink>
      </ul>
    </nav>
  );
};

export default SiteMap;
