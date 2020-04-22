import { css, Global } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';
import React, { useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import 'typeface-inter';
import { useQueryParam, StringParam } from 'use-query-params';

import CookieNotice from 'components/CookieNotice';
import GhostShipMDX from 'components/GhostShipMDX';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';

export const App = (props) => {
  const { children, homepage } = props;
  const [coupon, setCoupon] = useQueryParam('coupon', StringParam);
  const theme = useTheme();

  useEffect(() => {
    if (coupon) {
      global.localStorage.coupon = coupon;

      // Remove `coupon` from the query string after loading the page,
      // if we managed to set the coupon into localStorage.
      if (coupon && global.localStorage.coupon) {
        setCoupon(undefined);
      }
    }
  }, [coupon, setCoupon]);

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
