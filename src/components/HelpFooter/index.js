import { css } from '@emotion/react';
import { Button, Link, useTheme } from '@octopusthink/nautilus';
import React from 'react';

import Argument from 'components/Argument';

const HelpFooter = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${theme.site.maxContentWidth};
        text-align: center;
      `}
    >
      <Argument title="This doesn't answer my question!">
        Send a message to{' '}
        <Link href="mailto:micdrop@octopusthink.com">micdrop@octopusthink.com</Link> and we&rsquo;ll
        get back to you as soon as we can.
      </Argument>

      <Button navigation minimal navigationDirection="backward" to="/help" noMargin>
        Back to help
      </Button>
    </footer>
  );
};

export default HelpFooter;
