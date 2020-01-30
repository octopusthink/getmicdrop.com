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
        padding: 1.6rem;
        text-align: center;
      `}
    >
      Made with ❤️ and 🐙 by{' '}
      <Link as="a" href="https://octopusthink.com">
        Octopus Think
      </Link>
      {` · `}
      <Link to="/privacy">Privacy policy</Link>
    </footer>
  );
};

export default SiteFooter;
