export const trackEvent = (eventName, eventProps) => {
  const { console, plausible } = global;
  if (!plausible) {
    console.warn('Plausible JS global not available.');
    return;
  }

  plausible(eventName, eventProps);
};
