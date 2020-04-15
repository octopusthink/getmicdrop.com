import React from 'react';
import { css } from '@emotion/core';

import Arrow from 'src/images/arrow.svg';

const TextBlock = (props) => {
  const { children, end, start } = props;

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: -5.6rem;

        ${end &&
          css`
            @media screen and (min-width: 640px) {
              grid-column: 2;
            }

            @media screen and (min-width: 1400px) {
              grid-column: 3;
            }
          `}

        ${start &&
          css`
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
