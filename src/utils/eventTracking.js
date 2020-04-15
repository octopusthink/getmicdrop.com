export const setupAnalytics = ({ consentGiven = false } = {}) => {
  const { console, _paq } = global;

  if (!_paq) {
    console.warn('Matomo JS global not available.');
    return;
  }

  _paq.push(['alwaysUseSendBeacon']);
  _paq.push(['enableLinkTracking']);

  if (consentGiven) {
    _paq.push(['setConsentGiven']);
  }
};

export const trackEvent = (name, ...values) => {
  const { console, _paq } = global;
  if (!_paq) {
    console.warn('Matomo JS global not available.');
    return;
  }

  _paq.push(['trackEvent', name, ...values]);
};
