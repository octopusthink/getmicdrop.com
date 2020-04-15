import { css, Global } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import 'typeface-inter';

import CookieNotice from 'components/CookieNotice';
import GhostShipMDX from 'components/GhostShipMDX';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';

export const App = (props) => {
  const { children, homepage } = props;
  const theme = useTheme();

  return (
    <CookiesProvider>
      <GhostShipMDX>
        <Global
          styles={css`
            body {
              background: ${theme.colors.neutral.white};
              margin: 0;
              letter-spacing: -0.02em;
            }
          `}
        />
        <CookieNotice />
        <div
          css={css`
            margin: 0 auto;
          `}
        >
          <CookieNotice />
          <SiteHeader homepage={homepage} />
          <main
            id="content"
            css={css`
              margin: 0 auto 4.8rem;
            `}
          >
            {children}
          </main>
          <SiteFooter />
        </div>
      </GhostShipMDX>
    </CookiesProvider>
  );
};

export default App;
