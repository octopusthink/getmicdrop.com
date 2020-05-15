import { Link, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import MacAppStoreBadgeSVG from 'src/images/mac-app-store-badge.svg';
import { trackEvent } from '../../utils/eventTracking';

const MacAppStoreBadge = () => {
  const theme = useTheme();
  const trackMASLink = () => {
    trackEvent('MacAppStore-Click', 'Header');
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Link
        as="a"
        unstyled
        css={css`
          transition: all 100ms ease-in-out;

          &:hover {
            transform: scale(1.05);
          }

          &:focus {
            box-shadow: 0 0 0 0.2rem ${theme.colors.state.focusOutline};
            outline: 0;
            transform: scale(1.05);
          }
        `}
        href="https://apps.apple.com/app/mic-drop/id1489816366"
        onClick={trackMASLink}
      >
        <img
          src={MacAppStoreBadgeSVG}
          alt=""
          css={css`
            height: 4.8rem;
          `}
        />
      </Link>
    </div>
  );
};

export default MacAppStoreBadge;
