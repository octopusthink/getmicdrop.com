import { Link, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import Logo from 'src/images/logotype-dark.svg';
import HomepageCTA from '../HomepageCTA';

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
      <SkipLink
        css={css`
          box-shadow: none;
        `}
      />
      <Link
        unstyled
        to="/"
        css={css`
          width: 100%;
          max-width: 48rem;
          padding: 2.4rem;
          text-align: center;

          ${homepage &&
            css`
              max-width: 80rem;
              padding-top: 12.8rem;
            `}
        `}
      >
        <img
          src={Logo}
          alt="Mic Drop"
          css={css`
            margin: 0 auto;
            max-width: 48rem;
            width: 100%;
            height: auto;
          `}
        />
      </Link>
      {homepage && <HomepageCTA />}
    </header>
  );
};

export default SiteHeader;
