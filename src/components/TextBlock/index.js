import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Arrow from 'src/images/arrow.svg';

const TextBlock = (props) => {
  const theme = useTheme();
  const { children } = props;

  return (
    <div
      css={css`
        max-width: 40rem;
        margin-bottom: 8rem;
        position: relative;
      `}
    >
      <img
        css={css`
          width: 6rem;
          height: 6rem;
          transform: rotate(-45deg);
          position: absolute;
          left: -6.8rem;
          top: 0;
        `}
        src={Arrow}
        alt=""
      />
      {children}
    </div>
  );
};

export default TextBlock;
