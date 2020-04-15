import { Button } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { trackEvent } from '../../utils/eventTracking';

const CTAButtons = (props) => {
  const { source } = props;

  const openPaddle = (event) => {
    event.preventDefault();

    trackEvent('Purchase-Started', source ? `Buy-Button-${source}` : 'Buy-Button');

    if (!global.Paddle) {
      global.console.warn('Paddle global not available.');
      return;
    }

    global.Paddle.Setup({ vendor: 104629 });
    global.Paddle.Checkout.open({
      closeCallback: () => {
        trackEvent('Purchase-Cancelled', source ? `Buy-Button-${source}` : 'Buy-Button');
      },
      successCallback: () => {
        trackEvent('Purchase-Complete', source ? `Buy-Button-${source}` : 'Buy-Button');
      },
      product: 576284,
    });
  };

  const trackDownload = () => {
    trackEvent('Download', source ? `Trial-Button-${source}` : 'Trial-Button');
  };

  return (
    <Fragment>
      <Helmet>
        <script src="https://cdn.paddle.com/paddle/paddle.js" />
      </Helmet>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin-bottom: 2.4rem;
        `}
      >
        <Button as="a" href="/downloads/Mic%20Drop%201.0.0.zip" navigation onClick={trackDownload}>
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
