import React from 'react';
import { css } from '@emotion/core';

import Arrow from 'src/images/arrow.svg';

const TextBlock = (props) => {
  const { children, end } = props;

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: -5.6rem;
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
              left: -1.4rem;
              top: -6.8rem;
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
