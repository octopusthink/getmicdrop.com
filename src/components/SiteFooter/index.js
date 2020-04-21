import { css } from '@emotion/core';
import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React, { useRef } from 'react';

import NewsletterSignupForm from 'components/NewsletterSignupForm';
import SiteMap from 'components/SiteMap';
import SocialMediaLinks from 'components/SocialMediaLinks';

const SiteFooter = () => {
  const emailRef = useRef();
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
            //max-width: ${theme.site.maxContentWidth};
            margin: 0 auto;
            grid-row-gap: ${theme.site.desktopPadding};
          }
        `}
      >
        <SiteMap />

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
                //box-shadow: 0 2px ${theme.colors.neutral.grey200};
                color: ${theme.colors.neutral.white};
              `}
          >
            Octopus Think
          </Link>
        </Paragraph>

        <div
          css={css`
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
            @media screen and (min-width: 640px) and (max-width: 1023px) {
              //grid-column: 1 / span 2;
            }

            @media screen and (min-width: 1024px) {
              //grid-column: 2 / -1;
              //order: 5;
            }

            label {
              border: 0;
              clip-path: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              white-space: nowrap;
              width: 1px;
            }

            @media screen and (min-width: 640px) {
              button {
                margin-top: -0.4rem;
              }
            }
          `}
        >
          <Paragraph
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.text.inverseDark};
              margin-bottom: 0.8rem;

              &:hover {
                cursor: default;
              }
            `}
            onClick={() => {
              if (emailRef && emailRef.current) {
                emailRef.current.focus();
              }
            }}
          >
            Sign up for quarterly updates
          </Paragraph>
          <NewsletterSignupForm emailRef={emailRef} />
        </div>

        <SocialMediaLinks
          css={css`
            @media screen and (min-width: 1024px) {
              //margin-top: 8rem;
            }
          `}
        />
      </div>
    </footer>
  );
};

export default SiteFooter;
