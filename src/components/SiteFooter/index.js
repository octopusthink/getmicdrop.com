import { css } from '@emotion/core';
import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React, { useRef } from 'react';

import NewsletterSignupForm from 'components/NewsletterSignupForm';
import SiteMap from 'components/SiteMap';
import SocialMediaLinks from 'components/SocialMediaLinks';
import Logo from 'src/images/logotype-dark.svg';

const SiteFooter = () => {
  const emailRef = useRef();
  const theme = useTheme();

  return (
    <footer
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          padding: ${theme.site.mobilePadding};
          display: grid;
          grid-row-gap: ${theme.site.tabletPadding};

          @media screen and (min-width: 640px) {
            grid-template-columns: 6fr 6fr;
            padding: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 1024px) {
            padding: ${theme.site.desktopPadding};
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
            grid-template-columns: 7fr 3fr 2fr;
            grid-column-gap: ${theme.site.desktopPadding};
          }
        `}
      >
        <div
          css={css`
            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }
          `}
        >
          <img
            src={Logo}
            alt="Mic Drop"
            css={css`
              margin: 0 0 3.2rem -1.6rem;
              max-width: 32rem;
            `}
          />
          <Paragraph
            inverse
            large
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            Mic Drop is a macOS menubar app to control your microphone.
          </Paragraph>
        </div>

        <SiteMap
          css={css`
            @media screen and (min-width: 1024px) {
              margin-top: 8rem;
            }
          `}
        />

        <SocialMediaLinks
          css={css`
            @media screen and (min-width: 1024px) {
              margin-top: 8rem;
            }
          `}
        />

        <div
          css={css`
            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }

            @media screen and (min-width: 1024px) {
              grid-column: 2 / -1;
              order: 5;
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

        <Paragraph
          small
          inverse
          dark
          css={css`
            font-size: 1.6rem;
            margin: 0;

            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }

            @media screen and (min-width: 1024px) {
              grid-column: 1 / 2;
            }
          `}
        >
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          and{' '}
          <span role="img" aria-label="cephalopods">
            🐙
          </span>{' '}
          by{' '}
          <Link as="a" href="https://octopusthink.com">
            Octopus Think
          </Link>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {` · `}
          <Link to="/privacy">Privacy</Link>
          {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
          {` · `}
          <Link to="/credits">Credits</Link>
        </Paragraph>
      </div>
    </footer>
  );
};

export default SiteFooter;
