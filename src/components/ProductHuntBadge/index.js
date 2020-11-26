import { Link, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import { trackEvent } from '../../utils/eventTracking';

const ProductHuntBadge = () => {
  const theme = useTheme();
  const trackPHLink = () => {
    trackEvent('ProductHunt-Click', 'Header');
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
          }

          &:focus {
            outline: 0.2rem solid ${theme.colors.state.focusOutline};
            outline-offset: 0.4rem;
            transform: scale(1.05);
          }
        `}
        href="https://www.producthunt.com/posts/mic-drop?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-mic-drop"
        onClick={trackPHLink}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=204401&theme=dark"
          alt="Visit Mic Drop on Product Hunt"
          width="250"
          height="54"
        />
      </Link>
    </div>
  );
};

export default ProductHuntBadge;
