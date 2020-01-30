import { css, Global } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import 'typeface-inter';

import GhostShipMDX from 'components/GhostShipMDX';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';

export const App = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <GhostShipMDX>
      <Global
        styles={css`
          body {
            background: ${theme.colors.neutral.grey0};
            margin: 0;
          }
        `}
      />
      <div
        css={css`
          margin: 0 auto;
          max-width: ${theme.site.maxSiteWidth};
          padding: 1.6rem;
        `}
      >
        <SiteHeader />
        <main
          id="content"
          css={css`
            margin: 40vw auto 4.8rem;
            max-width: ${theme.site.maxContentWidth};
          `}
        >
          {children}
        </main>
        <SiteFooter />
      </div>
    </GhostShipMDX>
  );
};

export default App;
