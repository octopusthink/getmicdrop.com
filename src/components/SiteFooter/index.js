import { css } from '@emotion/core';
import { Link, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';

const SiteFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        ${metadata.small(theme)};
        border-top: 4px solid ${theme.colors.neutral.black};
        margin: 8rem auto 0;
        max-width: ${theme.site.maxContentWidth};
        padding: 2.4rem 0 1.6rem;
        text-align: center;
        font-weight: 500;
        font-size: 1.5rem;
      `}
    >
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
      <Link to="/privacy">Privacy policy</Link>
    </footer>
  );
};

export default SiteFooter;
