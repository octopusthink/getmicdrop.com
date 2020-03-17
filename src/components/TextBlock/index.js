import React from 'react';
import { css } from '@emotion/core';

import Arrow from 'src/images/arrow.svg';

const TextBlock = (props) => {
  const { children, end } = props;

  return (
    <div
      css={css`
        margin-bottom: 8rem;
        position: relative;

        ${end &&
          css`
            @media screen and (min-width: 640px) {
              grid-column: 2;
            }

            @media screen and (min-width: 1400px) {
              grid-column: 3;
            }
          `}

        ${!end &&
          css`
            @media screen and (max-width: 639px) {
              margin-top: 8rem;
            }

            @media screen and (min-width: 640px) {
              grid-column: 1;
            }
          `}
      `}
    >
      <img
        css={css`
          width: 6.4rem;
          height: 6.4rem;
          position: absolute;

          ${end &&
            css`
              transform: rotate(-45deg);
              left: -6.8rem;
              top: 0;
            `}

          ${!end &&
            css`
              transform: rotate(45deg);
              left: -0.4rem;
              top: -6.8rem;
            `}
        `}
        src={Arrow}
        alt=""
      />
      {children}
    </div>
  );
};

export default TextBlock;
