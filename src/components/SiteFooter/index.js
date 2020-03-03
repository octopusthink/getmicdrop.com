import { css } from '@emotion/core';
import { Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';

const SiteFooter = () => {
  const theme = useTheme();

  return (
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
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        {` · `}
        <Link as="a" href="https://github.com/octopusthink/getmicdrop.com">
          GitHub
        </Link>
      </Paragraph>
    </footer>
  );
};

export default SiteFooter;
