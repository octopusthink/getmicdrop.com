import { Heading, Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import { css } from '@emotion/react';
import React from 'react';

import CTAButtons from 'components/CTAButtons';
import { trackEvent } from '../../utils/eventTracking';

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

      <CTAButtons source="Header" />

      <Paragraph inverse small>
        Works with{' '}
        <Link
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
          to="/help/monterey-bluetooth"
        >
          Monterey & Bluetooth headphones
        </Link>
        .
      </Paragraph>
    </div>
  );
};

export default HomepageCTA;
