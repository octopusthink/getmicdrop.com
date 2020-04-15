import React, { Fragment } from 'react';

import { Link, Paragraph, Strong } from '@octopusthink/nautilus';
import { useCookies } from 'react-cookie';

const cookieOptions = {
  maxAge: new Date().setFullYear(new Date().getFullYear() + 1),
  secure: process.env.NODE_ENV !== 'development',
  path: '/',
};

const ResetCookies = () => {
  const [cookies, setCookie] = useCookies(['analyticsConsent']);

  const { analyticsConsent } = cookies;
  const consentGiven = analyticsConsent && analyticsConsent === 'true';

  const allowCookies = (event) => {
    event.preventDefault();

    const { console, _paq } = global;

    setCookie('analyticsConsent', 'true', cookieOptions);

    if (!_paq) {
      console.warn('Matomo JS global not available.');
      return;
    }
    _paq.push(['setConsentGiven']);
  };

  const refuseCookies = (event) => {
    event.preventDefault();

    setCookie('analyticsConsent', 'false', cookieOptions);
  };

  if (!analyticsConsent) {
    return null;
  }

  return (
    <Fragment>
      <Paragraph>
        <Strong>
          {consentGiven && 'You currently have cookies enabled.'}
          {!consentGiven && 'You have disabled cookies for analytics.'}
        </Strong>{' '}
        You can change your cookie preferences at any time.{' '}
        {consentGiven && (
          <Link as="a" href="#no-cookies" onClick={refuseCookies}>
            Disable cookies.
          </Link>
        )}
        {!consentGiven && (
          <Link as="a" href="#cookies-are-tasty" onClick={allowCookies}>
            Enable cookies.
          </Link>
        )}
      </Paragraph>
    </Fragment>
  );
};

export default ResetCookies;
