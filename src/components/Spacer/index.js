import React from 'react';
import { css } from '@emotion/core';

const Spacer = (props) => {
  const span = { props };
  return (
    <div
      css={css`
        grid-column: span ${span};
      `}
    />
  );
};

export default Spacer;
