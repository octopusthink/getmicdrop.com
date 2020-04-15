import { Button } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const CTAButtons = () => {
  const openPaddle = (event) => {
    event.preventDefault();

    if (!global.Paddle) {
      global.console.warn('Paddle global not available.');
      return;
    }

    global.Paddle.Setup({ vendor: 104629 });
    global.Paddle.Checkout.open({
      message:
        "50% of sales go to Scottish Women's Aid to help keep vulnerable people safe during the current pandemic.",
      product: 576284,
    });
  };

  return (
    <Fragment>
      <Helmet>
        <script src="https://cdn.paddle.com/paddle/paddle.js" />
      </Helmet>
      <div
        css={css`
          margin-bottom: 2.4rem;
        `}
      >
        <Button as="a" href="/downloads/Mic%20Drop%201.0.0.zip" navigation>
          Free Download
        </Button>
        <Button onClick={openPaddle} primary>
          Buy Now
        </Button>
      </div>
    </Fragment>
  );
};

export default CTAButtons;
