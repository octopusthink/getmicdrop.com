import { Button } from '@octopusthink/nautilus';
import { css } from '@emotion/react';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useQueryParam, StringParam } from 'use-query-params';

import { downloadURL } from '../../utils/downloadURL';
import { trackEvent } from '../../utils/eventTracking';

const CTAButtons = (props) => {
  const { source } = props;

  const [coupon, setCoupon] = useQueryParam('coupon', StringParam);

  const openPaddle = (event) => {
    event.preventDefault();

    trackEvent('Purchase Started', { source: source ? `Buy button (${source})` : 'Buy button' });

    if (!global.Paddle) {
      global.console.warn('Paddle global not available.');
      return;
    }

    global.Paddle.Setup({ vendor: 104629 });
    global.Paddle.Checkout.open({
      closeCallback: () => {
        trackEvent('Purchase Cancelled', source ? `Buy button (${source})` : 'Buy button');
      },
      successCallback: () => {
        trackEvent('Purchase Complete', source ? `Buy button (${source})` : 'Buy button');
        setCoupon(undefined);
        global.localStorage.clear();
      },
      coupon: coupon || global.localStorage.coupon || undefined,
      product: 576284,
    });
  };

  const trackDownload = () => {
    trackEvent('Download');
  };

  return (
    <Fragment>
      <Helmet>
        <script src="https://cdn.paddle.com/paddle/paddle.js" />
      </Helmet>
      <div
        css={css`
          margin-bottom: 2.4rem;
          display: flex;

          @media screen and (max-width: 374px) {
            flex-direction: column;
            align-items: center;
          }

          @media screen and (min-width: 375px) {
            justify-content: center;
          }
        `}
      >
        <Button
          primary={source === 'Footer'}
          href={downloadURL}
          onClick={trackDownload}
          leadingIcon="download"
        >
          Free Download
        </Button>
        {source !== 'Footer' && (
          <Button onClick={openPaddle} primary>
            Buy Now
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default CTAButtons;
