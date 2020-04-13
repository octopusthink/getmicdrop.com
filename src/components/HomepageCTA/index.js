import { Button, Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

const HomepageCTA = () => {
  const theme = useTheme();

  return (
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
        <Button>Free Download</Button>
        <Button primary>Buy Now</Button>
      </div>

      <Paragraph inverse small>
        Also available on the Mac App Store. <br />
        Requires macOS 10.15 Catalina.
      </Paragraph>
    </div>
  );
};

export default HomepageCTA;