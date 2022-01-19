import { css, Global } from '@emotion/react';
import { useTheme } from '@octopusthink/nautilus';
import React, { useEffect } from 'react';
import 'typeface-inter';
import { useQueryParam, StringParam } from 'use-query-params';

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
    <GhostShipMDX>
      <Global
        styles={css`
          body {
            background: ${theme.colors.neutral.white};
            margin: 0;
            letter-spacing: -0.02em;
          }

          p + h2,
          p + h3,
          ul + h2,
          ul + h3,
          ol + h2,
          ol + h3 {
            padding-top: 3.2rem;
          }

          .roadmap li:before {
            display: none;
          }

          .roadmap .Nautilus-Icon--square,
          .roadmap .Nautilus-Icon--check-square {
            vertical-align: -6px;
            margin-right: 0.4rem;
          }
        `}
      />
      <div
        css={css`
          margin: 0 auto;
        `}
      >
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
  );
};

export default App;
