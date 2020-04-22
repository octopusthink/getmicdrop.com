import { css } from '@emotion/core';
import { Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import SiteMap from 'components/SiteMap';
import SocialMediaLinks from 'components/SocialMediaLinks';

const SiteFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;
        text-align: center;
      `}
    >
      <div
        css={css`
          padding: ${theme.site.mobilePadding};
          display: grid;
          grid-row-gap: ${theme.site.tabletPadding};

          @media screen and (min-width: 640px) {
            padding: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 1024px) {
            padding: ${theme.site.desktopPadding};
            margin: 0 auto;
            grid-row-gap: ${theme.site.desktopPadding};
          }
        `}
      >
        <SiteMap />

        <SocialMediaLinks />

        <Paragraph inverse noMargin small dark>
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="cephalopods">
            🐙
          </span>{' '}
          by{' '}
          <Link
            as="a"
            href="https://octopusthink.com"
            css={css`
              box-shadow: 0 2px ${theme.colors.neutral.grey800};
              color: ${theme.colors.neutral.white};

              &:hover {
                box-shadow: none;
                color: ${theme.colors.neutral.white};
              }
            `}
          >
            Octopus Think
          </Link>
        </Paragraph>
      </div>
    </footer>
  );
};

export default SiteFooter;
