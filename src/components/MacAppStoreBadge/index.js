import { Link, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/react';
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
          line-height: 0;
          transition: all 100ms ease-in-out;

          &:hover {
            transform: scale(1.05);

            img {
              /* This doesn't work properly for Mystery Reasons
                (A background appears on the image.)
                @todo: make it work!
               box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.25);
               */
            }
          }

          &:focus {
            outline: 0.2rem solid ${theme.colors.state.focusOutline};
            outline-offset: 0.4rem;
            transform: scale(1.05);
          }
        `}
        href="https://apps.apple.com/app/mic-drop/id1489816366"
        onClick={trackMASLink}
      >
        <img
          src={MacAppStoreBadgeSVG}
          alt="Download on the Mac App Store"
          css={css`
            height: 4.8rem;
          `}
        />
      </Link>
    </div>
  );
};

export default MacAppStoreBadge;
