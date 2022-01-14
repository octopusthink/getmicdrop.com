import { css } from '@emotion/react';
import React from 'react';
import AnimatedGIF from 'components/AnimatedGIF';

const StatusWindow = () => {
  return (
    <AnimatedGIF
      css={css`
        max-width: 500px;
        width: 100%;

        @media screen and (max-width: 500px) {
          max-width: 320px;
        }
      `}
      src="images/status-window-on.gif"
      alt="Status window showing On Air text subtly animating."
    />
  );
};

export default StatusWindow;
