import { Link, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/react';
import React from 'react';

import MacRumorsBadgeSVG from 'src/images/macrumors-logo.svg';

const MacRumorsBadge = () => {
  const theme = useTheme();

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
        href="https://www.macrumors.com/2020/06/02/five-mac-apps-june-2020/"
      >
        <img src={MacRumorsBadgeSVG} alt="Featured on MacRumors" />
      </Link>
    </div>
  );
};

export default MacRumorsBadge;
