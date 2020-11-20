import { Heading, Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/core';
import React from 'react';

import CTAButtons from 'components/CTAButtons';
import { trackEvent } from '../../utils/eventTracking';

const HomepageCTA = () => {
  const theme = useTheme();

  const trackMASLink = () => {
    trackEvent('MacAppStore-Click', 'Header');
  };

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

      <CTAButtons source="Header" />

      <Paragraph inverse small>
        Compatible with macOS 11 (Big Sur). <br />
        Also{' '}
        <Link
          as="a"
          css={css`
            box-shadow: 0 2px ${theme.colors.neutral.grey200};

            &,
            &:hover,
            &:focus {
              color: ${theme.colors.text.inverseLight};
            }

            &:hover {
              box-shadow: none;
            }
          `}
          href="https://apps.apple.com/app/mic-drop/id1489816366"
          onClick={trackMASLink}
        >
          available on the Mac App Store
        </Link>
        .
      </Paragraph>
    </div>
  );
};

export default HomepageCTA;
