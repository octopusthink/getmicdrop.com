import { Button, Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const HomepageCTA = () => {
  const theme = useTheme();

  const openPaddle = (event) => {
    event.preventDefault();

    if (!global.Paddle) {
      global.console.warn('Paddle global not available.');
      return;
    }

    global.Paddle.Setup({ vendor: 104629 });
    global.Paddle.Checkout.open({
      message: "50% of sales go to Scottish Women's Aid & Social Bite",
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
          margin: 0 auto;
          max-width: 56rem;
          text-align: center;

          strong {
            background: linear-gradient(
              to top,
              transparent,
              transparent 0.8rem,
              ${theme.colors.accent.primary} 0.8rem,
              ${theme.colors.accent.primary} 2rem,
              transparent 2rem,
              transparent
            );
            font-weight: 600;
          }
        `}
      >
        <Heading inverse>
          Quickly <strong>mute</strong> your microphone with a global <strong>shortcut</strong> or
          menu bar control
        </Heading>

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

        <Paragraph inverse small>
          {/* Also available on the Mac App Store. <br /> */}
          Requires macOS 10.15 Catalina.
        </Paragraph>
      </div>
    </Fragment>
  );
};

export default HomepageCTA;
