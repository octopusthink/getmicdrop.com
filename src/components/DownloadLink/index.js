import { Link } from '@octopusthink/nautilus';
import React from 'react';

import { downloadURL } from '../../utils/downloadURL';
import { trackEvent } from '../../utils/eventTracking';

const trackDownload = (source) => () => {
  trackEvent('Download', source);
};

const DownloadLink = ({ children, source }) => {
  return (
    <Link href={downloadURL} onClick={trackDownload(source)}>
      {children}
    </Link>
  );
};

export default DownloadLink;
