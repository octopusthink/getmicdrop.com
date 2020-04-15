import { css } from '@emotion/core';
import { Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import CookieNotice from 'components/CookieNotice';

const SiteFooter = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <footer
        css={css`
          width: 100%;
          margin: 8rem auto 0;
          padding: 2.4rem 0 1.6rem;
          max-width: ${theme.site.maxContentWidth};
          text-align: center;
        `}
      >
        <Paragraph small>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="cephalopods">
            🐙
          </span>{' '}
          by{' '}
          <Link as="a" href="https://octopusthink.com">
            Octopus Think
          </Link>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {` · `}
          <Link to="/privacy">Privacy</Link>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {` · `}
          <Link to="/credits">Credits</Link>
        </Paragraph>
      </footer>
      <CookieNotice />
    </React.Fragment>
  );
};

export default SiteFooter;
