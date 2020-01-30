import { PageTitle, SkipLink, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';

import React from 'react';
import BackgroundImage from 'src/images/page-header.svg';

const SiteHeader = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        background: url(${BackgroundImage}) no-repeat;
        background-size: contain;
        height: 100%;
        left: 0;
        min-height: 100vh;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
      `}
    >
      <SkipLink />
    </header>
  );
};

export default SiteHeader;
