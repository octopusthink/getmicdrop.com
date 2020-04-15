export const setupAnalytics = () => {
  const { console, _paq } = global;

  if (!_paq) {
    console.warn('Matomo JS global not available.');
    return;
  }

  _paq.push(['alwaysUseSendBeacon']);
  _paq.push(['enableLinkTracking']);
};

export const giveConsent = (setCookie) => {
  const { console, _paq } = global;
  if (!_paq) {
    console.warn('Matomo JS global not available.');
    return;
  }

  if (!setCookie) {
    console.error('setCookie function is required.');
    return;
  }

  setCookie('analyticsConsent', true, { path: '/' });
  _paq.push(['setConsentGiven']);
};

export const trackEvent = (name, ...values) => {
  const { console, _paq } = global;
  if (!_paq) {
    console.warn('Matomo JS global not available.');
    return;
  }

  _paq.push(['trackEvent', name, ...values]);
};
