import { heading, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import Logo from 'src/images/logo.svg';

const SiteHeader = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        width: 100%;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <SkipLink />
      <img
        css={css`
          margin-bottom: -1.6rem;
          width: 100%;
          max-width: 520px;
        `}
        src={Logo}
        alt="Mic Drop"
      />
      <div
        css={css`
          ${heading.small(theme)};
          color: ${theme.colors.neutral.white};
          width: 100%;
          max-width: 520px;
          padding-left: 1.9em;
          display: none;
        `}
      >
        Quick, turn your mic off!
        <span
          css={css`
            display: none;
          `}
        >
          Quieter. Calmer. Better.
        </span>
        <span
          css={css`
            display: none;
          `}
        >
          The menubar app for controlling your microphone.
        </span>
      </div>
    </header>
  );
};

export default SiteHeader;
