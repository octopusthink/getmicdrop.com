import { Link, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import Logo from 'src/images/logo.svg';
import LogoHorizontal from 'src/images/logo-horizontal.svg';

const SiteHeader = (props) => {
  const { homepage } = props;
  const theme = useTheme();

  return (
    <header
      css={css`
        background: ${theme.colors.neutral.black};
        width: 100%;
        min-height: 20vh;
        margin-bottom: 4.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${homepage &&
          css`
            background-image: url(/images/header-background.jpg);
            background-position: center center;
            background-size: cover;
            min-height: 70vh;
            margin-bottom: 0;
          `}
      `}
    >
      <SkipLink />
      <Link
        __unstyled
        to="/"
        css={css`
          width: 100%;
          max-width: 48rem;
          padding: 2.4rem;

          ${homepage &&
            css`
              max-width: 80rem;
            `}
        `}
      >
        <img
          src={homepage ? Logo : LogoHorizontal}
          alt="Mic Drop"
          css={css`
            max-width: 48rem;
            width: 100%;
            height: auto;
          `}
        />
      </Link>
    </header>
  );
};

export default SiteHeader;
