import { css } from '@emotion/core';
import React, { useState, Fragment } from 'react';
import AnimatedGIF from 'components/AnimatedGIF';
import Image from 'components/Image';

const StatusWindow = () => {
  const [statusWindowOn, setStatusWindowOn] = useState(true);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      css={css`
        display: flex;
        justify-content: center;
        max-width: 500px;
        width: 100%;

        @media screen and (max-width: 500px) {
          max-width: 320px;
        }

        ${!statusWindowOn &&
          css`
            margin-left: 14px;
          `}
      `}
      // onClick={() => {
      //   setStatusWindowOn(!statusWindowOn);
      // }}
    >
      {statusWindowOn && (
        <AnimatedGIF
          src="images/status-window-on.gif"
          alt="Status window showing On Air text subtly animating."
        />
      )}
      {/* {!statusWindowOn && (
        <img alt="Status window showing Off Air text." src="/images/status-window-off.png" />
      )} */}
    </div>
  );
};

export default StatusWindow;
