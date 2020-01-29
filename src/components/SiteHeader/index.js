import { PageTitle, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';

import React from 'react';

const SiteHeader = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        position: relative;
        width: calc(100 % + 32px);
        height: 400px;
        overflow: hidden;
        margin: -16px;
      `}
    >
      <SkipLink />
      <div
        css={css`
          background: ${theme.colors.accent.primary};
          width: 100%;
          height: 100px;
          transform: rotate(27deg);
          width: 120%;
          height: 299px;
          transform: rotate(17deg);
          transform-origin: 0;
          padding: 186px 50px 0 150px;
          position: absolute;
          top: -258px;
          text-align: center;
        `}
      >
        <PageTitle>
          <span
            css={css`
              color: ${theme.colors.neutral.white};
              display: block;
              font-size: 7.2rem;
              line-height: 0.9;
              text-indent: -100px;
            `}
          >
            Bringing order
          </span>
          <span
            css={css`
              color: ${theme.colors.accent.primary};
              display: block;
              font-size: 7.2rem;
              line-height: 0.9;
              text-indent: 100px;
            `}
          >
            to your meetings.
          </span>
        </PageTitle>
      </div>
    </header>
  );
};

export default SiteHeader;
