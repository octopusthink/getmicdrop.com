import { Button } from '@octopusthink/nautilus';
import { css } from '@emotion/react';
import React, { Fragment } from 'react';
import MacAppStoreBadge from '../MacAppStoreBadge';
import { downloadURL } from '../../utils/downloadURL';
import { trackEvent } from '../../utils/eventTracking';

const CTAButtons = (props) => {
  const { source } = props;

  const trackDownload = () => {
    trackEvent('Download');
  };

  return (
    <Fragment>
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
        {source !== 'Footer' && (
          <Fragment>
            <Button
              primary={source === 'Footer'}
              href={downloadURL}
              onClick={trackDownload}
              leadingIcon="download"
            >
              Free Trial
            </Button>

            <Button href="/download-on-the-app-store" primary>
              Buy Now
            </Button>
          </Fragment>
        )}
        {source === 'Footer' && <MacAppStoreBadge />}
      </div>
    </Fragment>
  );
};

export default CTAButtons;
