import { heading, Link, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import Logo from 'src/images/logo.svg';

const SiteHeader = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        background-image: url(/images/bruno-cervera-dtqlaz4HyHw-unsplash.jpg);
        background-size: cover;
        width: 100%;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <SkipLink />
      <Link
        __unstyled
        to="/"
        css={css`
          width: 100%;
          max-width: ${theme.site.maxSiteWidth};
        `}
      >
        <img
          src={Logo}
          alt="Mic Drop"
          css={css`
            max-width: 48rem;
            width: 100%;
            height: auto;
          `}
        />
      </Link>
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
