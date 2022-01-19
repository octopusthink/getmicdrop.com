import { Link } from '@octopusthink/nautilus';
import React from 'react';

import { downloadURL } from '../../utils/downloadURL';
import { trackEvent } from '../../utils/eventTracking';

const trackDownload = () => () => {
  trackEvent('Download');
};

const DownloadLink = ({ children }) => {
  return (
    <Link href={downloadURL} onClick={trackDownload}>
      {children}
    </Link>
  );
};

export default DownloadLink;
