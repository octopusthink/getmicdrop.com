import React from 'react';
import { css } from '@emotion/core';

const Spacer = () => {
  return (
    <div
      css={css`
        grid-column: span 2;
      `}
    />
  );
};

export default Spacer;
