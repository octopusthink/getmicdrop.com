import { css } from '@emotion/core';
import { Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import Emoji from 'a11y-react-emoji';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { setupAnalytics } from '../../utils/eventTracking';

const CookieNotice = () => {
  const [cookies, setCookie] = useCookies(['analyticsConsent']);
  const theme = useTheme();

  const cookieOptions = {
    maxAge: new Date().setFullYear(new Date().getFullYear() + 1),
    secure: process.env.NODE_ENV !== 'development',
    path: '/',
  };

  const { analyticsConsent } = cookies;
  const consentGiven = analyticsConsent && analyticsConsent === 'true';

  const allowCookies = (event) => {
    event.preventDefault();

    const { console, _paq } = global;
    if (!_paq) {
      console.warn('Matomo JS global not available.');
      return;
    }

    setCookie('analyticsConsent', 'true', cookieOptions);
    _paq.push(['setConsentGiven']);
  };

  const refuseCookies = (event) => {
    event.preventDefault();

    setCookie('analyticsConsent', 'false', cookieOptions);
  };

  useEffect(() => {
    setupAnalytics({ consentGiven });
  }, [consentGiven]);

  // If the cookie is set, a user has made a decision one way or another, so
  // don't render the cookie notice.
  if (analyticsConsent) {
    return null;
  }

  return (
    <div
      css={css`
        background: ${theme.colors.neutral.black};
        padding: 2.4rem;
        position: fixed;
        text-align: left;
        z-index: 20;

        @media screen and (max-width: 639px) {
          border-top: 2px solid ${theme.colors.neutral.white};
          left: 0;
          bottom: 0;
          right: 0;
        }

        @media screen and (min-width: 640px) {
          border: 2px solid ${theme.colors.neutral.white};
          left: 4.8rem;
          top: 4.8rem;
          max-width: 320px;
        }

        a {
          color: ${theme.colors.neutral.white};
          margin-right: 4px;

          &:hover {
            color: ${theme.colors.neutral.white};
          }
        }
      `}
    >
      <Paragraph inverse small>
        <Emoji label="Hi there!" symbol="👋" /> Are you okay with us using cookies? We promise to
        protect your privacy and we&apos;ll never sell your information to advertisers.
      </Paragraph>

      <Paragraph
        noMargin
        inverse
        small
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link as="a" href="#no-cookies" onClick={refuseCookies}>
          No thanks.
        </Link>
        <Link as="a" href="#cookies-are-tasty" onClick={allowCookies}>
          Yes, that&apos;s fine.
        </Link>
      </Paragraph>
    </div>
  );
};

export default CookieNotice;
