import React from 'react';

module.exports = {
  onRenderBody: ({ setHeadComponents }) => {
    if (process.env.NODE_ENV === 'production') {
      excludePaths = [];
      const scriptProps = {
        defer: true,
        'data-domain': 'getmicdrop.com',
        src: 'https://plausible.io/js/plausible.outbound-links.js',
      };

      return setHeadComponents([
        <link
          key="gatsby-plugin-plausible-preconnect"
          rel="preconnect"
          href="https://plausible.io"
        />,
        <script key="gatsby-plugin-plausible-script" {...scriptProps}></script>,
        //See: https://docs.plausible.io/goals-and-conversions#trigger-custom-events-with-javascript
        <script
          key="gatsby-plugin-plausible-custom-events"
          dangerouslySetInnerHTML={{
            __html: `
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          ${excludePaths.length ? `window.plausibleExcludePaths=[${excludePaths.join(`,`)}];` : ``}
          `,
          }}
        />,
      ]);
    }

    return null;
  },
};
